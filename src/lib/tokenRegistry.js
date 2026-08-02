import { getCoinMarketCapLogoUrl } from './coinmarketcap.js'
import builtinTokenRegistry from '../../shared/outruna-builtin-tokens.json'

const STORAGE_PREFIX = 'thewallet.tokenRegistry.v1'
const TRUST_TIER_PRIORITY = {
  suspicious: 0,
  discovered: 1,
  verified: 2,
  custom: 3,
  core: 4
}

function normalizeChainId (value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : 1
}

function normalizeTrustTier (value) {
  const tier = String(value || '').trim().toLowerCase()
  return Object.prototype.hasOwnProperty.call(TRUST_TIER_PRIORITY, tier) ? tier : 'discovered'
}

function normalizeTokenRecord (token, trustTier = 'discovered') {
  const chainId = normalizeChainId(token?.chainId)
  const address = normalizeTokenAddress(token?.address)
  const symbol = String(token?.symbol || '').trim().toUpperCase()
  const name = String(token?.name || symbol || '').trim()
  const decimals = Number.isFinite(Number(token?.decimals)) ? Number(token.decimals) : null
  const native = Boolean(token?.native) || address === 'native'

  return {
    chainId,
    address,
    native,
    symbol,
    name,
    decimals,
    cmcId: Number.isFinite(Number(token?.cmcId)) ? Number(token.cmcId) : null,
    cmcSymbol: String(token?.cmcSymbol || symbol).trim().toUpperCase() || null,
    logoUrl: String(token?.logoUrl || '').trim() || null,
    securityStatus: token?.securityStatus === 'reviewed'
      ? 'reviewed'
      : (trustTier === 'custom' || token?.trustTier === 'custom' ? 'suspicious' : null),
    securityReasons: Array.isArray(token?.securityReasons) ? [...token.securityReasons] : [],
    trustTier: normalizeTrustTier(token?.trustTier || trustTier),
    source: String(token?.source || '').trim() || null,
    lastSeenAt: token?.lastSeenAt || null,
    discoveredAt: token?.discoveredAt || null
  }
}

function mergeTokenRecord (existing, incoming) {
  const left = normalizeTokenRecord(existing, existing?.trustTier)
  const right = normalizeTokenRecord(incoming, incoming?.trustTier)
  const leftPriority = TRUST_TIER_PRIORITY[left.trustTier] ?? 0
  const rightPriority = TRUST_TIER_PRIORITY[right.trustTier] ?? 0

  return {
    ...left,
    ...right,
    trustTier: right.source === 'transfer-log'
      ? right.trustTier
      : (rightPriority >= leftPriority ? right.trustTier : left.trustTier)
  }
}

function dedupeByTokenKey (tokens) {
  const seen = new Map()
  for (const token of Array.isArray(tokens) ? tokens : []) {
    const normalized = normalizeTokenRecord(token, token?.trustTier)
    const key = getTokenKey(normalized.chainId, normalized.address)
    if (!seen.has(key)) {
      seen.set(key, normalized)
    } else {
      seen.set(key, mergeTokenRecord(seen.get(key), normalized))
    }
  }
  return [...seen.values()]
}

export function normalizeTokenAddress (value) {
  const text = String(value || '').trim().toLowerCase()
  if (!text || text === 'native') return 'native'
  return text
}

export function getTokenKey (chainId, address) {
  return `${normalizeChainId(chainId)}:${normalizeTokenAddress(address)}`
}

export function getBuiltinTokensForChain (chainId) {
  const list = builtinTokenRegistry[String(normalizeChainId(chainId))] || []
  return list.map((token) => normalizeTokenRecord(token, 'core'))
}

export function getDefaultTokenRegistry () {
  return {
    customTokens: [],
    blockedTokens: [],
    discoveredTokens: [],
    discoveryState: {}
  }
}

function storageKeyForWallet (walletAddress) {
  const walletKey = String(walletAddress || '').trim().toLowerCase() || 'anonymous'
  return `${STORAGE_PREFIX}:${walletKey}`
}

export function loadTokenRegistry (walletAddress) {
  if (typeof window === 'undefined') return getDefaultTokenRegistry()

  try {
    const raw = window.localStorage.getItem(storageKeyForWallet(walletAddress))
    if (!raw) return getDefaultTokenRegistry()
    const parsed = JSON.parse(raw)
    return {
      customTokens: Array.isArray(parsed?.customTokens) ? parsed.customTokens : [],
      blockedTokens: Array.isArray(parsed?.blockedTokens) ? parsed.blockedTokens : [],
      discoveredTokens: Array.isArray(parsed?.discoveredTokens) ? parsed.discoveredTokens : [],
      discoveryState: parsed?.discoveryState && typeof parsed.discoveryState === 'object'
        ? parsed.discoveryState
        : {}
    }
  } catch {
    return getDefaultTokenRegistry()
  }
}

export function saveTokenRegistry (walletAddress, registry) {
  if (typeof window === 'undefined') return false

  try {
    window.localStorage.setItem(
      storageKeyForWallet(walletAddress),
      JSON.stringify({
        customTokens: Array.isArray(registry?.customTokens) ? registry.customTokens : [],
        blockedTokens: Array.isArray(registry?.blockedTokens) ? registry.blockedTokens : [],
        discoveredTokens: Array.isArray(registry?.discoveredTokens) ? registry.discoveredTokens : [],
        discoveryState: registry?.discoveryState && typeof registry.discoveryState === 'object'
          ? registry.discoveryState
          : {}
      })
    )
    return true
  } catch (error) {
    return false
  }
}

export function isTokenBlocked (registry, chainId, address) {
  const key = getTokenKey(chainId, address)
  return (registry?.blockedTokens || []).some((token) => getTokenKey(token.chainId, token.address) === key)
}

export function getCustomTokensForChain (registry, chainId) {
  const targetChainId = normalizeChainId(chainId)
  return (registry?.customTokens || [])
    .filter((token) => normalizeChainId(token.chainId) === targetChainId)
    .map((token) => normalizeTokenRecord(token, 'custom'))
}

export function getDiscoveredTokensForChain (registry, chainId) {
  const targetChainId = normalizeChainId(chainId)
  return (registry?.discoveredTokens || [])
    .filter((token) => normalizeChainId(token.chainId) === targetChainId)
    .map((token) => {
      const normalized = normalizeTokenRecord(token, token?.trustTier || 'discovered')
      const isBuiltin = getBuiltinTokensForChain(targetChainId).some((builtin) => {
        return getTokenKey(builtin.chainId, builtin.address) === getTokenKey(normalized.chainId, normalized.address)
      })

      return {
        ...normalized,
        trustTier: isBuiltin
          ? 'verified'
          : normalized.trustTier === 'suspicious' ? 'suspicious' : 'discovered'
      }
    })
}

export function getDiscoveryStateForChain (registry, chainId) {
  const targetChainId = normalizeChainId(chainId)
  return registry?.discoveryState?.[String(targetChainId)] || null
}

export function setDiscoveryStateForChain (registry, chainId, state) {
  const targetChainId = normalizeChainId(chainId)
  return {
    customTokens: Array.isArray(registry?.customTokens) ? [...registry.customTokens] : [],
    blockedTokens: Array.isArray(registry?.blockedTokens) ? [...registry.blockedTokens] : [],
    discoveredTokens: Array.isArray(registry?.discoveredTokens) ? [...registry.discoveredTokens] : [],
    discoveryState: {
      ...(registry?.discoveryState && typeof registry.discoveryState === 'object' ? registry.discoveryState : {}),
      [String(targetChainId)]: {
        ...(registry?.discoveryState?.[String(targetChainId)] || {}),
        ...state,
        chainId: targetChainId
      }
    }
  }
}

export function upsertDiscoveredTokens (registry, tokens) {
  const next = {
    customTokens: Array.isArray(registry?.customTokens) ? [...registry.customTokens] : [],
    blockedTokens: Array.isArray(registry?.blockedTokens) ? [...registry.blockedTokens] : [],
    discoveredTokens: Array.isArray(registry?.discoveredTokens) ? [...registry.discoveredTokens] : [],
    discoveryState: registry?.discoveryState && typeof registry.discoveryState === 'object'
      ? { ...registry.discoveryState }
      : {}
  }

  next.discoveredTokens = dedupeByTokenKey([
    ...next.discoveredTokens,
    ...(Array.isArray(tokens) ? tokens : [])
  ])
  return next
}

export function getChainTokenRegistry (chainId, registry) {
  const builtin = getBuiltinTokensForChain(chainId)
  const discovered = getDiscoveredTokensForChain(registry, chainId)
  const custom = getCustomTokensForChain(registry, chainId)
  const blocked = registry?.blockedTokens || []
  return dedupeByTokenKey([...builtin, ...discovered, ...custom])
    .filter((token) => !blocked.some((entry) => getTokenKey(entry.chainId, entry.address) === getTokenKey(chainId, token.address)))
}

export function upsertCustomToken (registry, token) {
  const next = {
    customTokens: Array.isArray(registry?.customTokens) ? [...registry.customTokens] : [],
    blockedTokens: Array.isArray(registry?.blockedTokens) ? [...registry.blockedTokens] : [],
    discoveredTokens: Array.isArray(registry?.discoveredTokens) ? [...registry.discoveredTokens] : [],
    discoveryState: registry?.discoveryState && typeof registry.discoveryState === 'object'
      ? { ...registry.discoveryState }
      : {}
  }
  const key = getTokenKey(token.chainId, token.address)
  next.customTokens = next.customTokens.filter((entry) => getTokenKey(entry.chainId, entry.address) !== key)
  next.customTokens.push({
    ...normalizeTokenRecord(token, 'custom'),
    trustTier: 'custom'
  })
  return next
}

export function removeCustomToken (registry, chainId, address) {
  const key = getTokenKey(chainId, address)
  return {
    customTokens: (registry?.customTokens || []).filter((token) => getTokenKey(token.chainId, token.address) !== key),
    blockedTokens: Array.isArray(registry?.blockedTokens) ? [...registry.blockedTokens] : [],
    discoveredTokens: Array.isArray(registry?.discoveredTokens) ? [...registry.discoveredTokens] : [],
    discoveryState: registry?.discoveryState && typeof registry.discoveryState === 'object'
      ? { ...registry.discoveryState }
      : {}
  }
}

export function blockToken (registry, token) {
  const next = {
    customTokens: Array.isArray(registry?.customTokens) ? [...registry.customTokens] : [],
    blockedTokens: Array.isArray(registry?.blockedTokens) ? [...registry.blockedTokens] : [],
    discoveredTokens: Array.isArray(registry?.discoveredTokens) ? [...registry.discoveredTokens] : [],
    discoveryState: registry?.discoveryState && typeof registry.discoveryState === 'object'
      ? { ...registry.discoveryState }
      : {}
  }
  const key = getTokenKey(token.chainId, token.address)
  if (!next.blockedTokens.some((entry) => getTokenKey(entry.chainId, entry.address) === key)) {
    next.blockedTokens.push(normalizeTokenRecord(token, token?.trustTier || 'suspicious'))
  }
  return next
}

export function unblockToken (registry, chainId, address) {
  const key = getTokenKey(chainId, address)
  return {
    customTokens: Array.isArray(registry?.customTokens) ? [...registry.customTokens] : [],
    blockedTokens: (registry?.blockedTokens || []).filter((token) => getTokenKey(token.chainId, token.address) !== key),
    discoveredTokens: Array.isArray(registry?.discoveredTokens) ? [...registry.discoveredTokens] : [],
    discoveryState: registry?.discoveryState && typeof registry.discoveryState === 'object'
      ? { ...registry.discoveryState }
      : {}
  }
}

export function getTokenLogoUrl (token) {
  if (!token) return null
  if (token.logoUrl) return token.logoUrl
  return getCoinMarketCapLogoUrl(token.cmcId)
}
