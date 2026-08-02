import { getAddress, isAddress } from 'viem'
import { api } from '../urls.js'

const cache = new Map()
const CACHE_TTL_MS = 5 * 60 * 1000

function cacheKey (fromAddress, toAddress, chainId) {
  return `${fromAddress || 'unknown'}:${toAddress}:${chainId || 'any'}`.toLowerCase()
}

function normalizeAddress (address) {
  if (!isAddress(address)) return null
  return getAddress(address)
}

async function fetchLocalAddressRisk ({ toAddress, chainId }) {
  try {
    const response = await fetch(api.risk.address(toAddress, chainId), {
      credentials: 'include',
      cache: 'no-store',
      headers: {
        Accept: 'application/json'
      }
    })
    if (!response.ok) return null
    const payload = await response.json()
    return payload?.risk || null
  } catch {
    return null
  }
}

export function mapRabbyDescToRisk (address, response, previousTransfer) {
  const desc = response?.desc || response || {}

  const reasons = []
  const labels = []

  if (desc.name) labels.push(desc.name)
  if (desc.cex?.name) labels.push(desc.cex.name)

  if (desc.protocol) {
    for (const item of Object.values(desc.protocol)) {
      if (item?.name) labels.push(item.name)
    }
  }

  if (desc.is_scam === true) reasons.push('Rabby marks this address as scam')
  if (desc.is_danger === true) reasons.push('Rabby marks this address as dangerous')
  if (desc.is_spam === true) reasons.push('Rabby marks this address as spam')

  let level = 'unknown'
  let title = 'Unknown address'

  if (desc.is_scam || desc.is_danger) {
    level = 'danger'
    title = 'Dangerous address'
  } else if (desc.is_spam) {
    level = 'warning'
    title = 'Suspicious address'
  } else if (desc.cex?.name) {
    level = 'safe'
    title = `Known exchange: ${desc.cex.name}`
  } else if (labels.length) {
    level = 'info'
    title = labels[0]
  } else if (previousTransfer?.has_transfer) {
    level = 'info'
    title = 'You interacted with this address before'
  }

  return {
    address,
    level,
    title,
    reasons,
    labels: [...new Set(labels)].slice(0, 3),
    hasPreviousTransfer: Boolean(previousTransfer?.has_transfer),
    bornAt: desc.born_at || null,
    usdValue: typeof desc.usd_value === 'number' ? desc.usd_value : null,
    source: 'rabby'
  }
}

function mapLocalRisk (address, risk) {
  if (!risk?.matched) return null
  return {
    address,
    level: risk.level || 'unknown',
    title: risk.title || 'Risk-listed address',
    reasons: Array.isArray(risk.reasons) ? risk.reasons : [],
    labels: risk.category ? [risk.category] : [],
    hasPreviousTransfer: false,
    bornAt: null,
    usdValue: null,
    blocking: Boolean(risk.blocking || risk.level === 'forbidden'),
    source: 'thewallet-risk-db',
    entries: risk.entries || []
  }
}

export async function checkDestinationAddressRisk ({ fromAddress, toAddress, chainId }) {
  const normalizedTo = normalizeAddress(toAddress)

  if (!normalizedTo) {
    return {
      level: 'invalid',
      title: 'Invalid address',
      reasons: ['Destination is not a valid EVM address'],
      source: 'local'
    }
  }

  const normalizedFrom = fromAddress && isAddress(fromAddress)
    ? getAddress(fromAddress)
    : null

  const key = cacheKey(normalizedFrom, normalizedTo, chainId)
  const cached = cache.get(key)

  if (cached && Date.now() - cached.time < CACHE_TTL_MS) {
    return cached.value
  }

  try {
    const localRisk = mapLocalRisk(normalizedTo, await fetchLocalAddressRisk({
      toAddress: normalizedTo,
      chainId
    }))

    if (localRisk && ['forbidden', 'danger', 'warning'].includes(localRisk.level)) {
      cache.set(key, { time: Date.now(), value: localRisk })
      return localRisk
    }

    const {
      rabbyAddrDesc,
      rabbyHasTransferAllChain
    } = await import('./client.js')
    const [desc, previousTransfer] = await Promise.allSettled([
      rabbyAddrDesc(normalizedTo),
      normalizedFrom
        ? rabbyHasTransferAllChain(normalizedFrom, normalizedTo)
        : Promise.resolve(null)
    ])

    const result = mapRabbyDescToRisk(
      normalizedTo,
      desc.status === 'fulfilled' ? desc.value : null,
      previousTransfer.status === 'fulfilled' ? previousTransfer.value : null
    )

    cache.set(key, { time: Date.now(), value: result })
    return result
  } catch (err) {
    return {
      address: normalizedTo,
      level: 'unavailable',
      title: 'Risk check unavailable',
      reasons: [],
      source: 'rabby',
      error: err?.message || 'Rabby request failed'
    }
  }
}
