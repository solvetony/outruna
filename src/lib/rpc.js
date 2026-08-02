import { normalizeChainId } from './chains.js'
import { externalUrls } from './urls.js'

const RPC_TIMEOUT_MS = 8000
const PRIMARY_COOLDOWN_MS = 30000

const READ_METHODS = new Set([
  'eth_call',
  'eth_getBalance',
  'eth_getLogs',
  'eth_blockNumber',
  'eth_estimateGas',
  'eth_feeHistory',
  'eth_gasPrice',
  'eth_getBlockByNumber',
  'eth_getTransactionCount',
  'eth_getTransactionReceipt',
  'eth_getTransactionByHash',
  'eth_maxPriorityFeePerGas',
  'eth_chainId'
])

const NETWORK_META = {
  1: { key: 'ethereum', chainId: 1 },
  8453: { key: 'base', chainId: 8453 },
  137: { key: 'polygon', chainId: 137 },
  10: { key: 'optimism', chainId: 10 },
  43114: { key: 'avalanche', chainId: 43114 },
  42161: { key: 'arbitrum', chainId: 42161 }
}

export const RPC_URLS = {
  ethereum: externalUrls.rpc.ethereum,
  base: externalUrls.rpc.base,
  polygon: externalUrls.rpc.polygon,
  optimism: externalUrls.rpc.optimism,
  avalanche: externalUrls.rpc.avalanche,
  arbitrum: externalUrls.rpc.arbitrum
}

const primaryCooldownByChain = new Map()
const rpcCursorByChain = new Map()
const primaryChainCheckCache = new WeakMap()

function parseRpcChainId (value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  const text = String(value || '').trim()
  if (/^0x[0-9a-f]+$/i.test(text)) return Number.parseInt(text, 16)
  return Number(text)
}

function getNetworkMeta (chainId) {
  return NETWORK_META[normalizeChainId(chainId)] || null
}

function isPrimaryCoolingDown (chainId) {
  const until = primaryCooldownByChain.get(normalizeChainId(chainId)) || 0
  return until > Date.now()
}

function coolDownPrimary (chainId) {
  primaryCooldownByChain.set(normalizeChainId(chainId), Date.now() + PRIMARY_COOLDOWN_MS)
}

function isRetryableRpcError (error) {
  const message = String(error?.message || error || '').toLowerCase()
  const code = String(error?.code || '').toLowerCase()
  return (
    code === 'too_many_requests' ||
    code === '429' ||
    code === '-32005' ||
    message.includes('too many requests') ||
    message.includes('internal json-rpc error') ||
    message.includes('networkerror') ||
    message.includes('network error') ||
    message.includes('network request failed') ||
    message.includes('failed to fetch') ||
    message.includes('fetch failed') ||
    message.includes('load failed') ||
    message.includes('resource unavailable') ||
    message.includes('temporarily unavailable') ||
    message.includes('timeout') ||
    message.includes('rate limit')
  )
}

function orderedRpcUrls (networkKey) {
  const urls = Array.from(new Set(RPC_URLS[networkKey] || []))
  if (urls.length <= 1) return urls

  const cursor = rpcCursorByChain.get(networkKey) || 0
  return urls.slice(cursor).concat(urls.slice(0, cursor))
}

function markRpcUrlFailed (networkKey, url) {
  const urls = RPC_URLS[networkKey] || []
  const index = urls.indexOf(url)
  if (index < 0 || urls.length <= 1) return
  rpcCursorByChain.set(networkKey, (index + 1) % urls.length)
}

async function primaryMatchesChain (primaryProvider, chainId) {
  if (!primaryProvider?.request) return false

  const expectedChainId = normalizeChainId(chainId)
  const cached = primaryChainCheckCache.get(primaryProvider)
  if (cached && cached.expiresAt > Date.now()) {
    return cached.chainId === expectedChainId
  }

  try {
    const actualChainId = parseRpcChainId(await primaryProvider.request({
      method: 'eth_chainId',
      params: []
    }))
    primaryChainCheckCache.set(primaryProvider, {
      chainId: actualChainId,
      expiresAt: Date.now() + 30000
    })
    return actualChainId === expectedChainId
  } catch (_) {
    // Some injected providers do not expose eth_chainId. Keep the existing
    // provider path in that case; a provider that does expose it is rejected
    // above when it reports a different network.
    return true
  }
}

async function rpcPost (url, payload) {
  const controller = new AbortController()
  const timeout = globalThis.setTimeout(() => controller.abort(), RPC_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    })

    if (!response.ok) {
      const error = new Error(`RPC HTTP ${response.status}`)
      error.code = String(response.status)
      throw error
    }

    const json = await response.json()
    if (json?.error) {
      const error = new Error(json.error.message || 'RPC error')
      error.code = json.error.code
      throw error
    }

    return json?.result
  } finally {
    globalThis.clearTimeout(timeout)
  }
}

async function requestViaPublicRpc (chainId, args) {
  const meta = getNetworkMeta(chainId)
  if (!meta) throw new Error(`Unsupported RPC chain ${chainId}`)

  const urls = orderedRpcUrls(meta.key)
  let lastError

  for (const url of urls) {
    try {
      return await rpcPost(url, {
        jsonrpc: '2.0',
        id: Date.now(),
        method: args.method,
        params: args.params || []
      })
    } catch (error) {
      lastError = error
      markRpcUrlFailed(meta.key, url)
    }
  }

  throw lastError || new Error(`All RPC URLs failed for ${meta.key}`)
}

export async function sendRawTransaction (chainId, rawTransaction) {
  if (!rawTransaction) throw new Error('Missing signed transaction')

  const meta = getNetworkMeta(chainId)
  if (!meta) throw new Error(`Unsupported RPC chain ${chainId}`)

  const urls = orderedRpcUrls(meta.key)
  let lastError

  for (const url of urls) {
    try {
      return await rpcPost(url, {
        jsonrpc: '2.0',
        id: Date.now(),
        method: 'eth_sendRawTransaction',
        params: [rawTransaction]
      })
    } catch (error) {
      lastError = error
      markRpcUrlFailed(meta.key, url)
    }
  }

  throw lastError || new Error(`All RPC URLs failed for ${meta.key}`)
}

export function createReadRpcProvider (primaryProvider, chainId, options = {}) {
  const fallbackOnAnyError = Boolean(options.fallbackOnAnyError)
  const preferPublic = Boolean(options.preferPublic)

  return {
    async request (args) {
      if (!args?.method) throw new Error('Missing RPC method')
      if (!READ_METHODS.has(args.method)) {
        if (!primaryProvider?.request) throw new Error(`No primary provider for ${args.method}`)
        return primaryProvider.request(args)
      }

      if (preferPublic) {
        try {
          return await requestViaPublicRpc(chainId, args)
        } catch (error) {
          if (primaryProvider?.request && await primaryMatchesChain(primaryProvider, chainId)) {
            return primaryProvider.request(args)
          }
          throw error
        }
      }

      if (!preferPublic && primaryProvider?.request && !isPrimaryCoolingDown(chainId) && await primaryMatchesChain(primaryProvider, chainId)) {
        try {
          return await primaryProvider.request(args)
        } catch (error) {
          // Privy is preferred, but every read must remain available through
          // the chain-specific public RPC rotation when it fails.
          if (!fallbackOnAnyError && !isRetryableRpcError(error)) throw error
          if (isRetryableRpcError(error)) coolDownPrimary(chainId)
        }
      }

      return requestViaPublicRpc(chainId, args)
    }
  }
}
