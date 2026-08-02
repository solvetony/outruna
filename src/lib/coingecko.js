import { Decimal, toDecimal } from './decimal.js'
import { resolveCoinGeckoAsset } from './coinmarketcap.js'
import { api, buildProxyUrl, externalUrls } from './urls.js'

const SYMBOL_TO_ID = {
  ETH: 'ethereum',
  AVAX: 'avalanche-2',
  EURC: 'eurc',
  POL: 'polygon-ecosystem-token',
  MATIC: 'polygon-pos',
  USDC: 'usd-coin',
  USDS: 'usds',
  USDT: 'tether',
  DAI: 'dai',
  WETH: 'weth',
  WBTC: 'wrapped-bitcoin',
  LINK: 'chainlink'
}

const CACHE_TTL_MS = 60000
const LOCAL_STORAGE_KEY = 'thewallet:coingecko-prices:v1'
const LOCAL_CACHE_TTL_MS = 5 * 60 * 1000
const LOCAL_STALE_TTL_MS = 24 * 60 * 60 * 1000
const BREAKER_THRESHOLD = 4
const BREAKER_COOLDOWN_MS = 25000
const BASE_BACKOFF_MS = 220
const MAX_BACKOFF_MS = 2200
const MAX_RETRIES = 2
const COINGECKO_JSON_PROXY = externalUrls.coinGeckoCorsProxy
const sourceState = new Map()
const inFlightRequests = new Map()
const symbolIdCache = new Map()
const symbolIdPromises = new Map()
const SYMBOL_ID_CACHE_TTL_MS = 2 * 24 * 60 * 60 * 1000

function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function stateKey (ids) {
  return ids.join(',')
}

function getState (ids) {
  const key = stateKey(ids)
  if (!sourceState.has(key)) {
    sourceState.set(key, {
      cache: null,
      failureCount: 0,
      breakerOpenUntil: 0
    })
  }

  return sourceState.get(key)
}

function resolveCoinGeckoId (symbol) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null
  return SYMBOL_TO_ID[key] || null
}

async function discoverCoinGeckoId (symbol) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null

  const cached = symbolIdCache.get(key)
  if (cached && cached.expiresAt > Date.now()) return cached.id
  if (symbolIdPromises.has(key)) return symbolIdPromises.get(key)

  const promise = (async () => {
    const url = externalUrls.coinGeckoSearch(key)
    let payload = null

    try {
      payload = await fetchJsonAbsolute(url, {}, 4500)
    } catch {
      try {
        payload = await fetchJsonAbsolute(buildProxyUrl(COINGECKO_JSON_PROXY, url), {}, 6000)
      } catch {
        payload = null
      }
    }

    const coins = Array.isArray(payload?.coins) ? payload.coins : []
    const exact = coins.find((coin) => String(coin?.symbol || '').trim().toUpperCase() === key)
    const id = exact?.id || null
    symbolIdCache.set(key, { id, expiresAt: Date.now() + SYMBOL_ID_CACHE_TTL_MS })
    return id
  })().finally(() => symbolIdPromises.delete(key))

  symbolIdPromises.set(key, promise)
  return promise
}

async function resolveCoinGeckoIds (requests) {
  const entries = await Promise.all(requests.map(async (request) => {
    let id = null

    if (request.address && request.trustTier === 'custom') {
      try {
        const asset = await resolveCoinGeckoAsset(request)
        id = asset?.id || null
      } catch {
        id = null
      }
    }

    id = id || resolveCoinGeckoId(request.symbol) || await discoverCoinGeckoId(request.symbol)
    return [request.symbol, id]
  }))
  return Object.fromEntries(entries.filter(([, id]) => id))
}

function normalizePriceRow (row) {
  const usd = toDecimal(row?.current_price)
  const change24h = toDecimal(row?.price_change_percentage_24h)
  return {
    id: row?.id,
    name: row?.name,
    symbol: String(row?.symbol || '').toUpperCase(),
    usd: usd ? usd.toNumber() : null,
    change24h: change24h ? change24h.toNumber() : null
  }
}

function isBrowserStorageAvailable () {
  return typeof window !== 'undefined' && !!window.localStorage
}

function normalizePriceRequests (requests = []) {
  const normalized = requests.map((request) => {
    if (typeof request === 'string') return { symbol: request }
    return {
      symbol: request?.symbol || request?.cmcSymbol,
      name: request?.name,
      chainId: request?.chainId,
      address: request?.address,
      trustTier: request?.trustTier
    }
  }).map((request) => ({
    ...request,
    symbol: String(request.symbol || '').trim().toUpperCase()
  })).filter((request) => request.symbol)

  const bySymbol = new Map()
  for (const request of normalized) {
    const current = bySymbol.get(request.symbol)
    if (!current || (request.address && !current.address)) bySymbol.set(request.symbol, request)
  }

  return [...bySymbol.values()]
}

function readLocalPriceCache () {
  if (!isBrowserStorageAvailable()) return {}

  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed?.entries && typeof parsed.entries === 'object' ? parsed.entries : {}
  } catch (_) {
    return {}
  }
}

function writeLocalPriceCache (entries) {
  if (!isBrowserStorageAvailable()) return

  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      entries,
      updatedAt: Date.now()
    }))
  } catch (error) {
    return undefined
  }
}

function getAvailableCachedPriceMap (symbols, maxAgeMs) {
  const entries = readLocalPriceCache()
  const now = Date.now()
  const value = {}

  for (const symbol of symbols) {
    const entry = entries[symbol]
    if (entry?.value && entry.fetchedAt && (now - Number(entry.fetchedAt)) <= maxAgeMs) {
      value[symbol] = entry.value
    }
  }

  return value
}

function savePriceMapToLocalCache (priceMap) {
  const entries = readLocalPriceCache()
  const fetchedAt = Date.now()

  for (const [symbol, value] of Object.entries(priceMap || {})) {
    entries[String(symbol).toUpperCase()] = {
      value,
      fetchedAt
    }
  }

  writeLocalPriceCache(entries)
}

function normalizeSimplePriceRows (payload, ids) {
  return ids.map((id) => ({
    id,
    name: id,
    symbol: id,
    usd: toDecimal(payload?.[id]?.usd)?.toNumber() ?? null,
    change24h: toDecimal(payload?.[id]?.usd_24h_change)?.toNumber() ?? null
  }))
}

async function fetchJson (path, init = {}, timeoutMs = 3500) {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(path, {
      cache: 'no-store',
      credentials: 'include',
      headers: {
        accept: 'application/json',
        ...(init.headers || {})
      },
      signal: controller.signal,
      ...init
    })

    if (!response.ok) {
      const error = new Error(`CoinGecko request failed with ${response.status}`)
      error.code = String(response.status)
      error.status = response.status
      throw error
    }

    return await response.json()
  } finally {
    window.clearTimeout(timer)
  }
}

async function fetchJsonAbsolute (url, init = {}, timeoutMs = 3500) {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        accept: 'application/json',
        ...(init.headers || {})
      },
      signal: controller.signal,
      ...init
    })

    if (!response.ok) {
      const error = new Error(`CoinGecko request failed with ${response.status}`)
      error.code = String(response.status)
      error.status = response.status
      throw error
    }

    return await response.json()
  } finally {
    window.clearTimeout(timer)
  }
}

function getBackoffDelay (attempt) {
  return Decimal.min(
    MAX_BACKOFF_MS,
    new Decimal(BASE_BACKOFF_MS).mul(new Decimal(2).pow(attempt))
  ).toNumber()
}

async function fetchCoinGeckoJsonWithOwnProxyFallback (url, timeoutMs = 4500) {
  try {
    return await fetchJsonAbsolute(url, {}, timeoutMs)
  } catch {
    return fetchJsonAbsolute(buildProxyUrl(COINGECKO_JSON_PROXY, url), {}, 6000)
  }
}

function isRateLimitError (error) {
  const code = String(error?.code || error?.status || '').trim()
  const message = String(error?.message || '').toLowerCase()
  return code === '429' || message.includes(' 429') || message.includes('too many requests') || message.includes('rate limit')
}

async function fetchMarkets (ids) {
  const url = api.coingecko.markets(ids)
  let rows
  try {
    rows = await fetchJson(url, {}, 3500)
  } catch {
    rows = await fetchCoinGeckoJsonWithOwnProxyFallback(externalUrls.coinGeckoMarkets(ids))
  }
  return Array.isArray(rows) ? rows.map(normalizePriceRow) : []
}

async function fetchSimplePrice (ids) {
  const url = api.coingecko.simplePrice(ids)
  let payload
  try {
    payload = await fetchJson(url, {}, 3500)
  } catch {
    payload = await fetchCoinGeckoJsonWithOwnProxyFallback(externalUrls.coinGeckoSimplePrice(ids))
  }
  return normalizeSimplePriceRows(payload, ids)
}

function toPriceMap (rows, symbols, idsBySymbol = {}) {
  const byId = new Map(rows.map((row) => [row.id, row]))
  return symbols.reduce((acc, symbol) => {
    const id = idsBySymbol[symbol] || resolveCoinGeckoId(symbol)
    const row = id ? byId.get(id) : null
    if (row) {
      acc[String(symbol).toUpperCase()] = {
        id: row.id,
        name: row.name,
        symbol: String(symbol).toUpperCase(),
        usd: toDecimal(row.usd)?.toNumber() ?? null,
        change24h: toDecimal(row.change24h)?.toNumber() ?? null
      }
    }
    return acc
  }, {})
}

export async function fetchCoinGeckoPrices (symbols = [], options = {}) {
  const force = Boolean(options?.force)
  const requests = normalizePriceRequests(symbols)
  const requestedSymbols = requests.map((request) => request.symbol)
  const idsBySymbol = await resolveCoinGeckoIds(requests)
  const normalizedSymbols = requestedSymbols.filter((symbol) => idsBySymbol[symbol])
  const localFresh = force ? {} : getAvailableCachedPriceMap(normalizedSymbols, LOCAL_CACHE_TTL_MS)
  const symbolsToFetch = normalizedSymbols.filter((symbol) => {
    return !Object.prototype.hasOwnProperty.call(localFresh, symbol)
  })
  if (symbolsToFetch.length === 0) return localFresh

  // Preserve IDs discovered through CoinGecko search. Rebuilding this list from
  // the static symbol map drops custom assets before the markets request.
  const ids = [...new Set(symbolsToFetch.map((symbol) => idsBySymbol[symbol]).filter(Boolean))]
  if (ids.length === 0) return {}

  const requestKey = stateKey(ids)
  const state = getState(ids)
  const now = Date.now()

  if (!force && state.cache && state.cache.expiresAt > now) {
    return { ...localFresh, ...state.cache.value }
  }

  if (!force && state.breakerOpenUntil > now && state.cache) {
    return { ...localFresh, ...state.cache.value }
  }

  const localStale = force ? {} : getAvailableCachedPriceMap(symbolsToFetch, LOCAL_STALE_TTL_MS)

  if (!force && state.breakerOpenUntil > now && localStale) {
    return { ...localFresh, ...localStale }
  }

  if (inFlightRequests.has(requestKey)) {
    return inFlightRequests.get(requestKey)
  }

  const request = (async () => {
    let lastError = null

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
      try {
        const rows = await fetchMarkets(ids)
        if (rows.length === 0) throw new Error('CoinGecko markets empty')
        const value = {
          ...localFresh,
          ...toPriceMap(rows, symbolsToFetch, idsBySymbol)
        }

        state.cache = {
          value,
          expiresAt: Date.now() + CACHE_TTL_MS
        }
        savePriceMapToLocalCache(value)
        state.failureCount = 0
        state.breakerOpenUntil = 0
        return value
      } catch (error) {
        lastError = error
        state.failureCount += 1
        if (isRateLimitError(error) || state.failureCount >= BREAKER_THRESHOLD) {
          state.breakerOpenUntil = Date.now() + BREAKER_COOLDOWN_MS
        }
        if (attempt < MAX_RETRIES) {
          await sleep(getBackoffDelay(attempt))
        }
      }
    }

    try {
      const rows = await fetchSimplePrice(ids)
      if (rows.length > 0) {
        const value = {
          ...localFresh,
          ...toPriceMap(rows, symbolsToFetch, idsBySymbol)
        }
        state.cache = {
          value,
          expiresAt: Date.now() + CACHE_TTL_MS
        }
        savePriceMapToLocalCache(value)
        state.failureCount = 0
        state.breakerOpenUntil = 0
        return value
      }
    } catch (error) {
      lastError = error
    }

    if (state.cache) {
      return { ...localFresh, ...state.cache.value }
    }

    if (Object.keys(localStale).length > 0) {
      return { ...localFresh, ...localStale }
    }

    throw lastError || new Error('CoinGecko price lookup failed')
  })()

  inFlightRequests.set(requestKey, request)

  try {
    return await request
  } finally {
    inFlightRequests.delete(requestKey)
  }
}
