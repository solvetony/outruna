import { resolveTokenLogoUrl } from './coinmarketcap.js'
import { normalizeChainId } from './chains.js'

const METADATA_CACHE_TTL_MS = 10 * 60 * 1000
const METADATA_CACHE = new Map()
const METADATA_PROMISES = new Map()

const ERC20_SELECTORS = {
  decimals: '0x313ce567',
  symbol: '0x95d89b41',
  name: '0x06fdde03'
}

function normalizeAddress (value) {
  const text = String(value || '').trim().toLowerCase()
  if (!text) return ''
  if (!text.startsWith('0x') || text.length !== 42) return ''
  return text
}

function cacheKey (chainId, address) {
  return `${normalizeChainId(chainId)}:${normalizeAddress(address)}`
}

function hexToBytes (hex) {
  const clean = String(hex || '').replace(/^0x/, '')
  if (!clean) return new Uint8Array()
  const output = new Uint8Array(clean.length / 2)
  for (let index = 0; index < clean.length; index += 2) {
    output[index / 2] = Number.parseInt(clean.slice(index, index + 2), 16)
  }
  return output
}

function bytesToUtf8 (bytes) {
  if (!(bytes instanceof Uint8Array) || bytes.length === 0) return ''
  try {
    return new TextDecoder().decode(bytes).split('\u0000').join('').trim()
  } catch {
    return ''
  }
}

function decodeBytes32String (value) {
  const clean = String(value || '').replace(/^0x/, '')
  if (!clean) return ''
  return bytesToUtf8(hexToBytes(`0x${clean}`)).trim()
}

function decodeAbiString (value) {
  const clean = String(value || '').replace(/^0x/, '')
  if (!clean || clean.length < 128) return ''

  try {
    const offset = Number.parseInt(clean.slice(0, 64), 16)
    if (offset !== 32) return ''

    const length = Number.parseInt(clean.slice(64, 128), 16)
    if (!Number.isFinite(length) || length < 0) return ''

    const dataHex = clean.slice(128, 128 + (length * 2))
    return bytesToUtf8(hexToBytes(`0x${dataHex}`)).trim()
  } catch {
    return ''
  }
}

async function ethCall (provider, to, data) {
  return provider.request({
    method: 'eth_call',
    params: [{ to, data }, 'latest']
  })
}

async function readUint (provider, address, selector) {
  const result = await ethCall(provider, address, selector)
  const text = String(result || '0x0')
  return Number(BigInt(text))
}

async function readStringLike (provider, address, selector) {
  const result = await ethCall(provider, address, selector)
  const dynamic = decodeAbiString(result)
  if (dynamic) return dynamic
  return decodeBytes32String(result)
}

async function readTokenMetadataFromChain (provider, chainId, address) {
  const normalizedAddress = normalizeAddress(address)
  if (!provider || !normalizedAddress) return null

  const [decimalsResult, symbolResult, nameResult] = await Promise.allSettled([
    readUint(provider, normalizedAddress, ERC20_SELECTORS.decimals),
    readStringLike(provider, normalizedAddress, ERC20_SELECTORS.symbol),
    readStringLike(provider, normalizedAddress, ERC20_SELECTORS.name)
  ])

  const decimals = decimalsResult.status === 'fulfilled' && Number.isFinite(decimalsResult.value)
    ? decimalsResult.value
    : null
  const symbol = symbolResult.status === 'fulfilled' ? String(symbolResult.value || '').trim().toUpperCase() : ''
  const name = nameResult.status === 'fulfilled' ? String(nameResult.value || '').trim() : ''

  if (decimals === null && !symbol && !name) return null

  const logoUrl = symbol
    ? await resolveTokenLogoUrl(symbol, null, { chainId, address, name })
    : null

  return {
    chainId: normalizeChainId(chainId),
    address: normalizedAddress,
    symbol: symbol || null,
    name: name || null,
    decimals,
    cmcSymbol: symbol || null,
    logoUrl: logoUrl || null
  }
}

export async function resolveTokenMetadata (provider, chainId, token, options = {}) {
  const address = normalizeAddress(token?.address)
  if (!address || token?.native) {
    return {
      ...token,
      chainId: normalizeChainId(chainId)
    }
  }

  const key = cacheKey(chainId, address)
  const now = Date.now()
  const cached = METADATA_CACHE.get(key)
  if (cached && cached.expiresAt > now && !options.forceLookup) {
    return {
      ...token,
      ...cached.value
    }
  }

  if (METADATA_PROMISES.has(key)) {
    const value = await METADATA_PROMISES.get(key)
    return {
      ...token,
      ...value
    }
  }

  if (!options.forceLookup && token.symbol && token.name && Number.isFinite(Number(token.decimals))) {
    return {
      ...token,
      chainId: normalizeChainId(chainId),
      address
    }
  }

  const promise = readTokenMetadataFromChain(provider, chainId, address)
    .then((value) => {
      const normalized = value || {
        chainId: normalizeChainId(chainId),
        address
      }
      if (normalized.symbol || normalized.name) {
        METADATA_CACHE.set(key, {
          value: normalized,
          expiresAt: Date.now() + METADATA_CACHE_TTL_MS
        })
      } else {
        METADATA_CACHE.delete(key)
      }
      return normalized
    })
    .finally(() => {
      METADATA_PROMISES.delete(key)
    })

  METADATA_PROMISES.set(key, promise)

  const metadata = await promise
  return {
    ...token,
    ...metadata
  }
}
