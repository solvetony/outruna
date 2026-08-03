import { buildProxyUrl, externalUrls } from './urls.js'

const CMC_ASSET_MAP = {
  ETH: { id: 1027, symbol: 'ETH', name: 'Ethereum' },
  AVAX: { id: 5805, symbol: 'AVAX', name: 'Avalanche' },
  EURC: { id: 29690, symbol: 'EURC', name: 'EURC' },
  USDC: { id: 3408, symbol: 'USDC', name: 'USDC' },
  USDT: { id: 825, symbol: 'USDT', name: 'Tether' },
  DAI: { id: 4943, symbol: 'DAI', name: 'Dai' },
  WBTC: { id: 3717, symbol: 'WBTC', name: 'Wrapped Bitcoin' },
  WETH: { id: 2396, symbol: 'WETH', name: 'Wrapped Ethereum' },
  LINK: { id: 1975, symbol: 'LINK', name: 'Chainlink' },
  UNI: { id: 7083, symbol: 'UNI', name: 'Uniswap' },
  AAVE: { id: 7278, symbol: 'AAVE', name: 'Aave' },
  ARB: { id: 18824, symbol: 'ARB', name: 'Arbitrum' },
  OP: { id: 11840, symbol: 'OP', name: 'Optimism' },
  POL: { id: 28321, symbol: 'POL', name: 'Polygon Ecosystem Token' },
  MATIC: { id: 3890, symbol: 'MATIC', name: 'Polygon' }
}

const LOGO_CACHE_TTL_MS = 10 * 60 * 1000
const LOGO_CACHE = new Map()
const LOGO_PROMISES = new Map()
const REQUEST_TIMEOUT_MS = 5000
const COINGECKO_CORS_PROXIES = externalUrls.coinGeckoCorsProxies
const COINGECKO_JSON_PROXY = externalUrls.coinGeckoCorsProxy

export function getCoinMarketCapLogoUrl (cmcId) {
  if (!cmcId) return null
  return externalUrls.coinMarketCapLogo(cmcId)
}

const COINGECKO_PLATFORM_IDS = {
  1: 'ethereum',
  10: 'optimistic-ethereum',
  137: 'polygon-pos',
  8453: 'base',
  42161: 'arbitrum-one',
  43114: 'avalanche'
}

function logoCacheKey (symbol, options = {}) {
  const key = String(symbol || '').trim().toUpperCase()
  const chainId = Number(options.chainId)
  const address = String(options.address || '').trim().toLowerCase()
  return `${key}:${Number.isFinite(chainId) ? chainId : ''}:${address}`
}

function slugify (value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getLogoProxyUrls (targetUrl) {
  if (!targetUrl) return []
  return COINGECKO_CORS_PROXIES.map((template) => buildProxyUrl(template, targetUrl))
}

export function getTokenLogoCandidates (targetUrl) {
  const sourceUrl = String(targetUrl || '').trim()
  if (!sourceUrl) return []

  let hostname = ''
  try {
    hostname = new URL(sourceUrl).hostname.toLowerCase()
  } catch {
    return [sourceUrl]
  }

  const proxyUrls = getLogoProxyUrls(sourceUrl)
  return hostname === 'coin-images.coingecko.com'
    ? [...proxyUrls, sourceUrl]
    : [sourceUrl, ...proxyUrls]
}

async function fetchJsonWithTimeout (url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      headers: { accept: 'application/json' },
      cache: 'force-cache',
      signal: controller.signal
    })
    if (!response.ok) return null
    return await response.json()
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

async function fetchJsonWithOwnProxyFallback (url) {
  const direct = await fetchJsonWithTimeout(url)
  if (direct) return direct
  return fetchJsonWithTimeout(buildProxyUrl(COINGECKO_JSON_PROXY, url))
}

export async function resolveCoinMarketCapAsset ({ symbol } = {}) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null

  return CMC_ASSET_MAP[key] || null
}

export async function findCoinMarketCapLogoUrl (symbol, options = {}) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null

  const resolved = await resolveCoinMarketCapAsset({ symbol: key, ...options })
  if (!resolved?.id) return null
  return resolved.logo || getCoinMarketCapLogoUrl(resolved.id)
}

async function fetchCoinGeckoAssetByQuery (query) {
  const normalizedQuery = String(query || '').trim()
  if (!normalizedQuery || typeof fetch !== 'function') return null

  const targetUrl = externalUrls.coinGeckoSearch(normalizedQuery)
  const data = await fetchJsonWithOwnProxyFallback(targetUrl)
  const coins = Array.isArray(data?.coins) ? data.coins : []
  const exact = coins.find((item) => String(item?.symbol || '').toUpperCase() === normalizedQuery.toUpperCase())
  if (exact) return exact

  return null
}

async function fetchCoinGeckoAssetByContract (chainId, address) {
  const platform = COINGECKO_PLATFORM_IDS[Number(chainId)]
  const normalizedAddress = String(address || '').trim().toLowerCase()
  if (!platform || !/^0x[a-f0-9]{40}$/.test(normalizedAddress) || typeof fetch !== 'function') return null

  const targetUrl = externalUrls.coinGeckoContract(platform, normalizedAddress)
  const data = await fetchJsonWithOwnProxyFallback(targetUrl)
  if (data?.id) return data

  return null
}

async function findCoinGeckoLogoUrl (symbol) {
  const asset = await fetchCoinGeckoAssetByQuery(symbol)
  return asset?.thumb || null
}

export async function resolveCoinGeckoAsset ({ symbol, name, chainId, address } = {}) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null

  if (address) {
    let contractAsset = null
    try {
      contractAsset = await fetchCoinGeckoAssetByContract(chainId, address)
    } catch {
      contractAsset = null
    }
    if (contractAsset && String(contractAsset.symbol || '').toUpperCase() === key) return contractAsset
  }

  const candidates = [...new Set([symbol, name].map(slugify).filter(Boolean))]

  for (const query of candidates) {
    const asset = await fetchCoinGeckoAssetByQuery(query)
    if (asset && String(asset.symbol || '').toUpperCase() === key) return asset
  }

  return null
}

export async function resolveCoinGeckoLogoUrl (symbol, options = {}) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null
  const asset = await resolveCoinGeckoAsset({ symbol: key, ...options })
  return asset?.image?.small || asset?.image?.thumb || asset?.thumb || findCoinGeckoLogoUrl(key)
}

export async function resolveTokenLogoUrl (symbol, excludedUrl = null, options = {}) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null

  const cacheKey = logoCacheKey(key, options)
  const cached = LOGO_CACHE.get(cacheKey)
  if (cached && cached.expiresAt > Date.now() && cached.url !== excludedUrl) return cached.url

  if (!LOGO_PROMISES.has(cacheKey)) {
    LOGO_PROMISES.set(cacheKey, (async () => {
      if (options.address) {
        const contractLogo = await resolveCoinGeckoLogoUrl(key, options)
        if (contractLogo) return contractLogo
      }

      const cmcDirect = await findCoinMarketCapLogoUrl(key)
      if (cmcDirect) return cmcDirect

      const geckoDirect = await resolveCoinGeckoLogoUrl(key, options)
      if (geckoDirect) return geckoDirect

      return resolveCoinGeckoLogoUrl(key)
    })().finally(() => LOGO_PROMISES.delete(cacheKey)))
  }

  const url = await LOGO_PROMISES.get(cacheKey)
  if (url && url !== excludedUrl) {
    LOGO_CACHE.set(cacheKey, { url, expiresAt: Date.now() + LOGO_CACHE_TTL_MS })
    return url
  }

  if (url === excludedUrl) {
    const geckoUrl = await resolveCoinGeckoLogoUrl(key)
    if (geckoUrl && geckoUrl !== excludedUrl) {
      LOGO_CACHE.set(cacheKey, { url: geckoUrl, expiresAt: Date.now() + LOGO_CACHE_TTL_MS })
      return geckoUrl
    }
  }

  return null
}
