import { resolveTokenMetadata } from './tokenMetadata.js'
import { normalizeChainId } from './chains.js'
import { getBuiltinTokensForChain, normalizeTokenAddress } from './tokenRegistry.js'

const TRANSFER_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
const DISCOVERY_MAX_LOOKBACK_BLOCKS = 25000
const DISCOVERY_BLOCK_CHUNK_SIZE = 2000
const DISCOVERY_METADATA_CONCURRENCY = 4
const DISCOVERY_MIN_INTERVAL_MS = 60 * 1000

function padTopicAddress (address) {
  const normalized = normalizeTokenAddress(address)
  if (!normalized || normalized === 'native' || !normalized.startsWith('0x')) return null
  return `0x000000000000000000000000${normalized.slice(2)}`
}

function toHexQuantity (value) {
  const numeric = typeof value === 'bigint' ? value : BigInt(Number(value) || 0)
  return `0x${numeric.toString(16)}`
}

async function getBlockNumber (provider) {
  const result = await provider.request({ method: 'eth_blockNumber' })
  return Number(BigInt(String(result || '0x0')))
}

async function getLogs (provider, params) {
  return provider.request({
    method: 'eth_getLogs',
    params: [params]
  })
}

async function chunkedMap (items, size, mapper) {
  const output = []
  for (let index = 0; index < items.length; index += size) {
    const chunk = items.slice(index, index + size)
    const results = await Promise.allSettled(chunk.map(mapper))
    for (const result of results) {
      if (result.status === 'fulfilled') {
        output.push(result.value)
      }
    }
  }
  return output
}

function normalizeDiscoveryState (state, chainId, latestBlock, error = null) {
  return {
    chainId: normalizeChainId(chainId),
    lastRunAt: Date.now(),
    lastScannedBlock: Number.isFinite(Number(latestBlock)) ? Number(latestBlock) : null,
    lastError: error ? String(error) : null
  }
}

function collectTokenAddresses (logs) {
  const addresses = new Set()
  for (const log of Array.isArray(logs) ? logs : []) {
    const address = normalizeTokenAddress(log?.address)
    if (!address || address === 'native') continue
    if (/^0x[a-f0-9]{40}$/.test(address)) {
      addresses.add(address)
    }
  }
  return [...addresses]
}

function buildDiscoveredToken (metadata, chainId, address) {
  const symbol = String(metadata?.symbol || '').trim().toUpperCase()
  const name = String(metadata?.name || '').trim()
  const decimals = Number.isFinite(Number(metadata?.decimals)) ? Number(metadata.decimals) : null
  const normalizedChainId = normalizeChainId(chainId)
  const normalizedAddress = normalizeTokenAddress(address)
  const verified = getBuiltinTokensForChain(normalizedChainId).some((token) => {
    return normalizeTokenAddress(token.address) === normalizedAddress
  })
  const hasMetadata = Boolean(metadata && symbol && name && decimals !== null)

  return {
    chainId: normalizedChainId,
    address: normalizedAddress,
    symbol: symbol || 'TOKEN',
    name: name || (symbol || `Unknown token ${normalizedAddress.slice(0, 8)}`),
    decimals: decimals ?? 18,
    cmcId: null,
    cmcSymbol: symbol || null,
    logoUrl: metadata?.logoUrl || null,
    trustTier: verified ? 'verified' : (hasMetadata ? 'discovered' : 'suspicious'),
    source: 'transfer-log',
    discoveredAt: new Date().toISOString(),
    lastSeenAt: new Date().toISOString()
  }
}

export async function discoverWalletTokens (provider, chainId, walletAddress, discoveryState = {}) {
  const normalizedChainId = normalizeChainId(chainId)
  const normalizedAddress = normalizeTokenAddress(walletAddress)

  if (!provider || !normalizedAddress || normalizedAddress === 'native') {
    return null
  }

  const now = Date.now()
  const previousRunAt = Number(discoveryState?.lastRunAt || 0)
  if (previousRunAt && (now - previousRunAt) < DISCOVERY_MIN_INTERVAL_MS) {
    return {
      tokens: [],
      state: normalizeDiscoveryState(discoveryState, normalizedChainId, discoveryState?.lastScannedBlock || null, discoveryState?.lastError || null),
      skipped: true
    }
  }

  let latestBlock
  try {
    latestBlock = await getBlockNumber(provider)
  } catch (error) {
    return {
      tokens: [],
      state: normalizeDiscoveryState(discoveryState, normalizedChainId, discoveryState?.lastScannedBlock || null, error?.message || 'failed-to-read-head'),
      error: error?.message || 'failed-to-read-head'
    }
  }

  const previousBlock = Number(discoveryState?.lastScannedBlock || 0)
  const startBlock = previousBlock > 0
    ? previousBlock + 1
    : Math.max(0, latestBlock - DISCOVERY_MAX_LOOKBACK_BLOCKS)

  if (startBlock > latestBlock) {
    return {
      tokens: [],
      state: normalizeDiscoveryState(discoveryState, normalizedChainId, latestBlock, null),
      skipped: true
    }
  }

  const walletTopic = padTopicAddress(normalizedAddress)
  if (!walletTopic) {
    return null
  }

  const foundAddresses = new Set()
  for (let fromBlock = startBlock; fromBlock <= latestBlock; fromBlock += DISCOVERY_BLOCK_CHUNK_SIZE) {
    const toBlock = Math.min(latestBlock, fromBlock + DISCOVERY_BLOCK_CHUNK_SIZE - 1)
    const outgoing = getLogs(provider, {
      fromBlock: toHexQuantity(fromBlock),
      toBlock: toHexQuantity(toBlock),
      topics: [TRANSFER_TOPIC, walletTopic]
    })
    const incoming = getLogs(provider, {
      fromBlock: toHexQuantity(fromBlock),
      toBlock: toHexQuantity(toBlock),
      topics: [TRANSFER_TOPIC, null, walletTopic]
    })

    const [outgoingResult, incomingResult] = await Promise.allSettled([outgoing, incoming])
    if (outgoingResult.status === 'fulfilled') {
      for (const address of collectTokenAddresses(outgoingResult.value)) foundAddresses.add(address)
    }
    if (incomingResult.status === 'fulfilled') {
      for (const address of collectTokenAddresses(incomingResult.value)) foundAddresses.add(address)
    }
  }

  const tokenAddresses = [...foundAddresses]
  if (!tokenAddresses.length) {
    return {
      tokens: [],
      state: normalizeDiscoveryState(discoveryState, normalizedChainId, latestBlock, null)
    }
  }

  const metadataResults = await chunkedMap(tokenAddresses, DISCOVERY_METADATA_CONCURRENCY, async (address) => {
    try {
      const metadata = await resolveTokenMetadata(provider, normalizedChainId, { address }, { forceLookup: true })
      return buildDiscoveredToken(metadata, normalizedChainId, address)
    } catch {
      return buildDiscoveredToken(null, normalizedChainId, address)
    }
  })

  return {
    tokens: metadataResults,
    state: normalizeDiscoveryState(discoveryState, normalizedChainId, latestBlock, null)
  }
}
