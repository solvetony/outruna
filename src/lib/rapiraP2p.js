import { fetchJson } from './api.js'
import { api } from './urls.js'

const RAPIRA_RATE_CACHE_KEY = 'outruna:rapira-p2p-net-rate:v1'
const RAPIRA_RATE_CACHE_TTL_MS = 5 * 60 * 1000

export function calculateRapiraReceiveAmount (amountUsd, rate) {
  const amount = Number(amountUsd)
  const price = Number(rate)
  if (!Number.isFinite(amount) || amount <= 0 || !Number.isFinite(price) || price <= 0) return null
  return amount * price
}

function readCachedRate (storage = globalThis.localStorage, now = Date.now()) {
  try {
    const cached = JSON.parse(storage?.getItem(RAPIRA_RATE_CACHE_KEY) || 'null')
    if (cached?.timestamp && now - cached.timestamp < RAPIRA_RATE_CACHE_TTL_MS && Number(cached.rate) > 0) {
      return cached
    }
  } catch {}
  return null
}

function writeCachedRate (rate, storage = globalThis.localStorage, now = Date.now()) {
  try {
    storage?.setItem(RAPIRA_RATE_CACHE_KEY, JSON.stringify({ rate, timestamp: now }))
  } catch {}
}

export async function getRapiraP2pRate ({
  fetchImpl = () => fetchJson(api.fiatP2p.rate),
  storage = globalThis.localStorage,
  now = Date.now()
} = {}) {
  const cached = readCachedRate(storage, now)
  if (cached) return cached

  const payload = await fetchImpl()
  const rate = Number(payload?.rate)
  if (!Number.isFinite(rate) || rate <= 0) throw new Error('P2P rate is unavailable')

  const result = { rate, timestamp: now }
  writeCachedRate(rate, storage, now)
  return result
}

export { RAPIRA_RATE_CACHE_KEY, RAPIRA_RATE_CACHE_TTL_MS }
