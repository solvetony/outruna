import { decimalToNumber } from './decimal.js'
import { api, externalUrls } from './urls.js'

const RABBY_API_HOST = externalUrls.rabbyApi
const RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_STORAGE_KEY = 'thewallet:rabby-gas-account:deposit-support'
const RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_TTL_MS = 30 * 60 * 1000
const RABBY_GAS_ACCOUNT_CHECK_CACHE_TTL_MS = 15 * 1000
const RABBY_API_RATE_LIMIT_COOLDOWN_MS = 15 * 1000
const RABBY_GAS_ACCOUNT_CHECK_BASE_COOLDOWN_MS = 1500
const RABBY_GAS_ACCOUNT_CHECK_MAX_COOLDOWN_MS = 15 * 1000
const RABBY_GAS_ACCOUNT_CHECK_MAX_ATTEMPTS = 2
const RABBY_GAS_ACCOUNT_CHECK_DEBOUNCE_MS = 300

function stringifyRabbyPayload (value) {
  return JSON.stringify(value, (key, item) => (
    typeof item === 'bigint' ? `0x${item.toString(16)}` : item
  ))
}

export const RABBY_GAS_ACCOUNT_DEPOSIT_ADDRESSES = {
  1: '0x205e94337bc61657b4b698046c3c2c5c1d2fb8f1',
  10: '0x824a2d0ae45c447caa8d0da4bb68a1a0056cadc6',
  137: '0xde74f4efdeec194c3f7b26be736bc8b5266ff7a5',
  8453: '0x16ac3457ce84e6c5f80b394c59ccb2fd17049a62',
  42161: '0x40f480f247f3ad2ff4c1463e84f03be3a9a03e15',
  43114: '0x16ac3457ce84e6c5f80b394c59ccb2fd17049a62'
}

export const RABBY_CHAIN_SERVER_IDS = {
  1: 'eth',
  10: 'op',
  137: 'matic',
  8453: 'base',
  42161: 'arb',
  43114: 'avax'
}

export const RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_FALLBACK = {
  wallet_tokens: [
    { chain_id: 'avax', token_id: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7' },
    { chain_id: 'eth', token_id: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' },
    { chain_id: 'op', token_id: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58' },
    { chain_id: 'base', token_id: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913' },
    { chain_id: 'op', token_id: '0x0b2c639c533813f4aa9d7837caf62653d097ff85' },
    { chain_id: 'matic', token_id: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f' },
    { chain_id: 'avax', token_id: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e' },
    { chain_id: 'matic', token_id: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359' },
    { chain_id: 'arb', token_id: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9' },
    { chain_id: 'arb', token_id: '0xaf88d065e77c8cc2239327c5edb3a432268e5831' },
    { chain_id: 'eth', token_id: '0xdac17f958d2ee523a2206206994597c13d831ec7' }
  ],
  hyperliquid_tokens: []
}

let rabbyGasAccountDepositSupportCache = {
  data: RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_FALLBACK,
  updatedAt: 0
}

let rabbyGasAccountDepositSupportInFlight = null
let rabbyApiRateLimitUntil = 0
let rabbyRequestQueue = Promise.resolve()
const rabbyGetRequestsInFlight = new Map()
const rabbyGasAccountCheckCache = new Map()
const rabbyGasAccountCheckInFlight = new Map()
const rabbyGasAccountCheckCooldowns = new Map()

function storageKey (address) {
  return `thewallet:rabby-gas-account:${String(address || '').trim().toLowerCase()}`
}

function normalizeDepositSupportToken (token) {
  const chainId = String(token?.chain_id || '').trim().toLowerCase()
  const tokenId = String(token?.token_id || '').trim().toLowerCase()
  if (!chainId || !tokenId) return null
  return {
    chain_id: chainId,
    token_id: tokenId
  }
}

function normalizeRabbyGasAccountDepositSupport (payload) {
  const walletTokens = Array.isArray(payload?.wallet_tokens)
    ? payload.wallet_tokens.map(normalizeDepositSupportToken).filter(Boolean)
    : []
  const hyperliquidTokens = Array.isArray(payload?.hyperliquid_tokens)
    ? payload.hyperliquid_tokens.map(normalizeDepositSupportToken).filter(Boolean)
    : []

  return {
    wallet_tokens: walletTokens,
    hyperliquid_tokens: hyperliquidTokens
  }
}

function readCachedRabbyGasAccountDepositSupport () {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.updatedAt || !parsed?.data) return null
    if (Date.now() - Number(parsed.updatedAt) >= RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_TTL_MS) return null
    return {
      data: normalizeRabbyGasAccountDepositSupport(parsed.data),
      updatedAt: Number(parsed.updatedAt)
    }
  } catch (_) {
    return null
  }
}

function writeCachedRabbyGasAccountDepositSupport (data) {
  if (typeof window === 'undefined') return false
  try {
    window.localStorage.setItem(RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_STORAGE_KEY, JSON.stringify({
      updatedAt: Date.now(),
      data
    }))
    return true
  } catch (error) {
    return false
  }
}

function parseRetryAfterMs (value) {
  const normalized = String(value || '').trim()
  if (!normalized) return null

  const seconds = Number(normalized)
  if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000

  const retryAt = Date.parse(normalized)
  if (!Number.isFinite(retryAt)) return null
  return Math.max(0, retryAt - Date.now())
}

function isRabbyRateLimitResponse (status, message) {
  const normalized = String(message || '').toLowerCase()
  return status === 429 || normalized.includes('too many requests') || normalized.includes('rate limit')
}

function applyRabbyApiRateLimit (error, retryAfterMs) {
  const delayMs = Number.isFinite(retryAfterMs)
    ? Math.max(RABBY_GAS_ACCOUNT_CHECK_BASE_COOLDOWN_MS, retryAfterMs)
    : RABBY_API_RATE_LIMIT_COOLDOWN_MS
  rabbyApiRateLimitUntil = Math.max(rabbyApiRateLimitUntil, Date.now() + delayMs)
  error.status = 429
  error.retryAfterMs = delayMs
  return error
}

async function parseRabbyResponse (response) {
  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json')
    ? await response.json()
    : await response.text()

  if (!response.ok) {
    const message = payload?.error || payload?.message || `Rabby request failed with ${response.status}`
    const error = new Error(message)
    error.status = response.status
    error.retryAfterMs = parseRetryAfterMs(response.headers.get('retry-after'))
    error.payload = payload
    if (isRabbyRateLimitResponse(response.status, message)) {
      throw applyRabbyApiRateLimit(error, error.retryAfterMs)
    }
    throw error
  }

  if (isRabbyRateLimitResponse(response.status, payload?.message)) {
    const error = new Error('Gas Account service is temporarily busy. Please try again shortly.')
    error.payload = payload
    throw applyRabbyApiRateLimit(error, parseRetryAfterMs(response.headers.get('retry-after')))
  }

  if (payload?.error_code || payload?.error_msg) {
    const message = payload.error_msg || payload.message || `Rabby request failed with ${payload.error_code}`
    const error = new Error(message)
    if (isRabbyRateLimitResponse(payload.error_code, message)) {
      throw applyRabbyApiRateLimit(error, null)
    }
    throw error
  }

  return payload
}

function getRabbyCooldownError () {
  const cooldownMs = Math.max(0, rabbyApiRateLimitUntil - Date.now())
  if (cooldownMs <= 0) return null

  const error = new Error('Gas Account service is temporarily busy. Please try again shortly.')
  error.status = 429
  error.code = 'RABBY_API_RATE_LIMITED'
  error.retryAfterMs = cooldownMs
  return error
}

function scheduleRabbyRequest (request) {
  const scheduled = rabbyRequestQueue.then(request, request)
  rabbyRequestQueue = scheduled.catch(() => {})
  return scheduled
}

function getRabbyRequestParams (url) {
  const params = {}
  for (const key of new Set(url.searchParams.keys())) {
    const values = url.searchParams.getAll(key)
    params[key] = values.length > 1 ? values : values[0]
  }
  return params
}

function getRabbyReadRequestKey (method, url, headers) {
  if (method !== 'GET') return null
  return `${method}:${url.toString()}:${String(headers?.sig || '')}`
}

async function rabbyFetch (path, options = {}) {
  const method = String(options.method || 'GET').toUpperCase()
  const url = new URL(path, RABBY_API_HOST)
  const requestKey = getRabbyReadRequestKey(method, url, options.headers)

  if (requestKey && rabbyGetRequestsInFlight.has(requestKey)) {
    return rabbyGetRequestsInFlight.get(requestKey)
  }

  const requestPromise = scheduleRabbyRequest(async () => {
    const cooldownError = getRabbyCooldownError()
    if (cooldownError) throw cooldownError

    const {
      getRabbyApiIdentityHeaders,
      getRabbySignedHeaders,
      updateRabbyApiKeyFromResponse
    } = await import('./rabby/signHeaders.js')
    const signingPath = decodeURIComponent(url.pathname)
    const signedHeaders = await getRabbySignedHeaders({
      method,
      path: signingPath,
      params: method === 'GET' ? getRabbyRequestParams(url) : {}
    })
    const response = await fetch(url.toString(), {
      cache: 'no-store',
      ...options,
      method,
      headers: {
        Accept: 'application/json',
        'X-Client': 'Rabby',
        'X-Version': '0.93.98',
        ...getRabbyApiIdentityHeaders(),
        ...signedHeaders,
        ...(options.headers || {})
      }
    })

    updateRabbyApiKeyFromResponse(response)

    return parseRabbyResponse(response)
  }).finally(() => {
    if (requestKey) rabbyGetRequestsInFlight.delete(requestKey)
  })

  if (requestKey) rabbyGetRequestsInFlight.set(requestKey, requestPromise)
  return requestPromise
}

export async function fetchRabbyGasAccountDepositSupport ({ force = false } = {}) {
  if (!force && rabbyGasAccountDepositSupportCache.updatedAt > 0) {
    const age = Date.now() - rabbyGasAccountDepositSupportCache.updatedAt
    if (age < RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_TTL_MS) {
      return rabbyGasAccountDepositSupportCache.data
    }
  }

  if (!force) {
    const cached = readCachedRabbyGasAccountDepositSupport()
    if (cached) {
      rabbyGasAccountDepositSupportCache = cached
      return cached.data
    }
  }

  if (rabbyGasAccountDepositSupportInFlight) {
    return rabbyGasAccountDepositSupportInFlight
  }

  rabbyGasAccountDepositSupportInFlight = rabbyFetch('/v1/gas_account/bridge/support_token')
    .then((payload) => {
      const normalized = normalizeRabbyGasAccountDepositSupport(payload)
      rabbyGasAccountDepositSupportCache = {
        data: normalized,
        updatedAt: Date.now()
      }
      writeCachedRabbyGasAccountDepositSupport(normalized)
      return normalized
    })
    .catch((err) => {
      console.warn('fetchRabbyGasAccountDepositSupport failed', err)
      return rabbyGasAccountDepositSupportCache.data || RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_FALLBACK
    })
    .finally(() => {
      rabbyGasAccountDepositSupportInFlight = null
    })

  return rabbyGasAccountDepositSupportInFlight
}

export function loadRabbyGasAccountSession (address) {
  try {
    const raw = window.localStorage.getItem(storageKey(address))
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.sig || !parsed?.accountId) return null
    return parsed
  } catch (_) {
    return null
  }
}

export function saveRabbyGasAccountSession (address, session) {
  window.localStorage.setItem(storageKey(address), JSON.stringify({
    sig: session.sig,
    accountId: session.accountId,
    connectedAt: session.connectedAt || Date.now()
  }))
}

export function clearRabbyGasAccountSession (address) {
  window.localStorage.removeItem(storageKey(address))
}

export async function fetchSavedRabbyGasAccountSession () {
  const response = await fetch(api.rabbyGasAccount.session, {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
    headers: {
      Accept: 'application/json'
    }
  })
  if (response.status === 401) return null
  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(payload?.error || 'Failed to load Gas Account session')
  }
  return payload?.session || null
}

export async function saveRabbyGasAccountSessionToBackend (session) {
  const response = await fetch(api.rabbyGasAccount.session, {
    method: 'POST',
    credentials: 'include',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accountId: session.accountId,
      sig: session.sig,
      connectedAt: session.connectedAt || Date.now()
    })
  })
  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(payload?.error || 'Failed to save Gas Account session')
  }
  return payload?.session || null
}

export async function clearRabbyGasAccountSessionFromBackend () {
  const response = await fetch(api.rabbyGasAccount.session, {
    method: 'DELETE',
    credentials: 'include',
    cache: 'no-store',
    headers: {
      Accept: 'application/json'
    }
  })
  const payload = await response.json().catch(() => null)
  if (!response.ok && response.status !== 401) {
    throw new Error(payload?.error || 'Failed to disconnect Gas Account session')
  }
  return payload || null
}

export async function fetchRabbyGasAccountSignText (accountId) {
  const params = new URLSearchParams({ account_id: accountId })
  return rabbyFetch(`/v1/gas_account/sign_text?${params.toString()}`)
}

export async function loginRabbyGasAccount ({ sig, accountId }) {
  return rabbyFetch('/v1/gas_account/login', {
    method: 'POST',
    body: JSON.stringify({ account_id: accountId }),
    headers: {
      'Content-Type': 'application/json',
      sig
    }
  })
}

export async function fetchRabbyGasAccountInfo ({ sig, accountId }) {
  const params = new URLSearchParams({ id: accountId })
  return rabbyFetch(`/v1/gas_account?${params.toString()}`, {
    headers: { sig }
  })
}

export async function fetchRabbyGasAccountInfoPublic (accountId) {
  const params = new URLSearchParams({ id: accountId })
  return rabbyFetch(`/v2/gas_account?${params.toString()}`)
}

export async function fetchRabbyGasAccountHistory ({ sig, accountId, start = 0, limit = 20 }) {
  const params = new URLSearchParams({
    account_id: accountId,
    start: String(start),
    limit: String(limit)
  })
  return rabbyFetch(`/v1/gas_account/history?${params.toString()}`, {
    headers: { sig }
  })
}

export async function rechargeRabbyGasAccount ({ sig, accountId, txHash, chainServerId, amountUsd, userAddress, nonce }) {
  return rabbyFetch('/v1/gas_account/recharge', {
    method: 'POST',
    body: JSON.stringify({
      account_id: accountId,
      tx_id: txHash,
      chain_id: chainServerId,
      amount: decimalToNumber(amountUsd, 0),
      user_addr: userAddress,
      nonce: Number(nonce)
    }),
    headers: {
      'Content-Type': 'application/json',
      sig
    }
  })
}

export async function fetchRabbyGasAccountWithdrawList ({ sig, accountId }) {
  const params = new URLSearchParams({ id: accountId })
  return rabbyFetch(`/v1/gas_account/withdraw_list?${params.toString()}`, {
    headers: { sig }
  })
}

export async function withdrawRabbyGasAccount ({ sig, accountId, amountUsd, userAddress, chainServerId, feeUsd }) {
  return rabbyFetch('/v1/gas_account/withdraw', {
    method: 'POST',
    body: JSON.stringify({
      account_id: accountId,
      amount: decimalToNumber(amountUsd, 0),
      user_addr: userAddress,
      chain_id: chainServerId,
      fee: decimalToNumber(feeUsd, 0)
    }),
    headers: {
      'Content-Type': 'application/json',
      sig
    }
  })
}

function normalizeRabbyCheckFingerprintValue (value) {
  if (value === null || typeof value === 'undefined') return ''
  if (typeof value === 'bigint') return `0x${value.toString(16)}`
  return String(value).trim().toLowerCase()
}

function getRabbyGasAccountCheckKey (accountId, txList) {
  const transactions = (Array.isArray(txList) ? txList : []).map((tx) => ({
    chainId: normalizeRabbyCheckFingerprintValue(tx?.chainId ?? tx?.chain_id),
    from: normalizeRabbyCheckFingerprintValue(tx?.from),
    to: normalizeRabbyCheckFingerprintValue(tx?.to),
    value: normalizeRabbyCheckFingerprintValue(tx?.value),
    data: normalizeRabbyCheckFingerprintValue(tx?.data ?? tx?.input),
    nonce: normalizeRabbyCheckFingerprintValue(tx?.nonce),
    gas: normalizeRabbyCheckFingerprintValue(tx?.gas ?? tx?.gasLimit ?? tx?.gas_limit),
    gasPrice: normalizeRabbyCheckFingerprintValue(tx?.gasPrice ?? tx?.gas_price),
    maxFeePerGas: normalizeRabbyCheckFingerprintValue(tx?.maxFeePerGas ?? tx?.max_fee_per_gas),
    maxPriorityFeePerGas: normalizeRabbyCheckFingerprintValue(tx?.maxPriorityFeePerGas ?? tx?.max_priority_fee_per_gas),
    type: normalizeRabbyCheckFingerprintValue(tx?.type)
  }))

  return `${normalizeRabbyCheckFingerprintValue(accountId)}:${JSON.stringify(transactions)}`
}

export async function checkRabbyGasAccountTxs ({ sig, accountId, txList, onRateLimit, request: requestCheck = rabbyFetch, debounceMs = RABBY_GAS_ACCOUNT_CHECK_DEBOUNCE_MS }) {
  const normalizedAccountId = String(accountId || '').trim().toLowerCase()
  const payload = {
    account_id: accountId,
    tx_list: txList
  }
  const requestBody = stringifyRabbyPayload(payload)
  const requestKey = getRabbyGasAccountCheckKey(normalizedAccountId, txList)
  const now = Date.now()

  for (const [key, cached] of rabbyGasAccountCheckCache) {
    if (cached.expiresAt <= now) rabbyGasAccountCheckCache.delete(key)
  }

  const cached = rabbyGasAccountCheckCache.get(requestKey)
  if (cached) return cached.value

  const existingRequest = rabbyGasAccountCheckInFlight.get(requestKey)
  if (existingRequest) return existingRequest

  const requestPromise = (async () => {
    if (debounceMs > 0) {
      await new Promise(resolve => setTimeout(resolve, debounceMs))
    }

    for (let attempt = 0; attempt < RABBY_GAS_ACCOUNT_CHECK_MAX_ATTEMPTS; attempt += 1) {
      const cooldownUntil = rabbyGasAccountCheckCooldowns.get(normalizedAccountId) || 0
      const cooldownMs = Math.max(0, cooldownUntil - Date.now())
      if (cooldownMs > 0) {
        await new Promise(resolve => setTimeout(resolve, cooldownMs))
      }

      try {
        const result = await requestCheck('/v1/gas_account/check_txs', {
          method: 'POST',
          body: requestBody,
          headers: {
            'Content-Type': 'application/json',
            ...(sig ? { sig } : {})
          }
        })
        rabbyGasAccountCheckCooldowns.delete(normalizedAccountId)
        const cacheable = result?.is_gas_account &&
          result?.balance_is_enough &&
          !result?.chain_not_support &&
          !result?.err_msg
        if (cacheable) {
          rabbyGasAccountCheckCache.set(requestKey, {
            value: result,
            expiresAt: Date.now() + RABBY_GAS_ACCOUNT_CHECK_CACHE_TTL_MS
          })
        }
        return result
      } catch (error) {
        const message = String(error?.message || '').toLowerCase()
        const rateLimited = error?.status === 429 || message.includes('too many requests') || message.includes('rate limit')
        if (!rateLimited) throw error

        const exponentialDelay = RABBY_GAS_ACCOUNT_CHECK_BASE_COOLDOWN_MS * (2 ** attempt)
        const requestedDelay = Number.isFinite(error?.retryAfterMs)
          ? error.retryAfterMs
          : exponentialDelay
        const delayMs = Math.min(
          RABBY_GAS_ACCOUNT_CHECK_MAX_COOLDOWN_MS,
          Math.max(RABBY_GAS_ACCOUNT_CHECK_BASE_COOLDOWN_MS, requestedDelay)
        ) + Math.floor(Math.random() * 250)
        rabbyGasAccountCheckCooldowns.set(normalizedAccountId, Date.now() + delayMs)

        if (attempt === RABBY_GAS_ACCOUNT_CHECK_MAX_ATTEMPTS - 1) {
          const finalError = new Error('Gas Account service is temporarily busy. Please try again shortly.')
          finalError.code = 'RABBY_GAS_ACCOUNT_RATE_LIMITED'
          finalError.retryAfterMs = delayMs
          throw finalError
        }

        onRateLimit?.({
          attempt: attempt + 1,
          delayMs
        })
      }
    }

    throw new Error('Gas Account eligibility check did not complete')
  })().finally(() => {
    rabbyGasAccountCheckInFlight.delete(requestKey)
  })

  rabbyGasAccountCheckInFlight.set(requestKey, requestPromise)
  return requestPromise
}

function bigintToRpcQuantity (value) {
  if (typeof value === 'undefined' || value === null) return undefined
  if (typeof value === 'bigint') return `0x${value.toString(16)}`
  if (typeof value === 'number') return `0x${Math.trunc(value).toString(16)}`
  return value
}

function normalizeRabbyTransactionType (type) {
  if (type === null || type === undefined || type === '') return undefined
  if (typeof type === 'bigint') return `0x${type.toString(16)}`
  if (typeof type === 'number') return `0x${Math.trunc(type).toString(16)}`

  const normalized = String(type).trim().toLowerCase()
  const knownTypes = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
    eip4844: '0x3',
    eip7702: '0x4'
  }

  if (Object.prototype.hasOwnProperty.call(knownTypes, normalized)) {
    return knownTypes[normalized]
  }

  if (/^0x[0-9a-f]+$/i.test(normalized)) return normalized
  if (/^\d+$/.test(normalized)) return `0x${Number(normalized).toString(16)}`
  return undefined
}

function normalizeRabbyChainId (chainId) {
  if (chainId === null || chainId === undefined || chainId === '') return undefined
  const value = Number(chainId)
  return Number.isSafeInteger(value) ? value : undefined
}

export { normalizeRabbyChainId, normalizeRabbyTransactionType }

export function getSignedRawTransaction (signedTransaction) {
  const raw = typeof signedTransaction === 'string'
    ? signedTransaction
    : signedTransaction?.raw || signedTransaction?.rawTransaction || signedTransaction?.serializedTransaction

  if (!raw || typeof raw !== 'string') {
    throw new Error('Wallet did not return a signed raw transaction')
  }

  return raw
}

function toRabbyNativeBalance (value) {
  if (typeof value === 'bigint') return value
  if (typeof value === 'number') return BigInt(Math.trunc(value))
  const normalized = String(value || '0').trim()
  if (!normalized) return 0n
  return BigInt(normalized)
}

export async function waitForRabbyGasFunding ({
  readBalance,
  initialBalance,
  timeoutMs = 300000,
  pollIntervalMs = 15000,
  sleep = delayMs => new Promise(resolve => globalThis.setTimeout(resolve, delayMs)),
  hasBroadcastTransaction,
  onPoll
}) {
  if (typeof readBalance !== 'function') throw new Error('Missing Gas Account balance reader')

  const startedAt = Date.now()
  const startingBalance = toRabbyNativeBalance(initialBalance)

  while ((Date.now() - startedAt) < timeoutMs) {
    if (typeof hasBroadcastTransaction === 'function' && await hasBroadcastTransaction()) {
      return toRabbyNativeBalance(await readBalance())
    }

    const currentBalance = toRabbyNativeBalance(await readBalance())
    if (currentBalance > startingBalance) return currentBalance

    const elapsedMs = Date.now() - startedAt
    const remainingMs = timeoutMs - elapsedMs
    if (remainingMs <= 0) break
    onPoll?.({ currentBalance, elapsedMs, remainingMs })
    await sleep(Math.min(pollIntervalMs, remainingMs))
  }

  throw new Error('Gas Account funding timed out before network gas arrived')
}

export async function getSignedTransactionHash (signedTransaction) {
  const raw = getSignedRawTransaction(signedTransaction)
  const { keccak256 } = await import('viem')
  return keccak256(raw)
}

function normalizeSignedTransactionForRabby (parsed, fallbackTx = {}) {
  const type = normalizeRabbyTransactionType(parsed.type || fallbackTx.type)
  const isEip1559 = type === '0x2'
  const tx = {
    chainId: normalizeRabbyChainId(parsed.chainId || fallbackTx.chainId),
    from: parsed.from || fallbackTx.from,
    to: parsed.to || fallbackTx.to,
    data: parsed.data || parsed.input || fallbackTx.data || '0x',
    value: bigintToRpcQuantity(parsed.value) || fallbackTx.value || '0x0',
    nonce: bigintToRpcQuantity(parsed.nonce) || fallbackTx.nonce,
    gas: bigintToRpcQuantity(parsed.gas) || fallbackTx.gas || fallbackTx.gasLimit,
    gasPrice: bigintToRpcQuantity(parsed.gasPrice) || fallbackTx.gasPrice,
    maxFeePerGas: bigintToRpcQuantity(parsed.maxFeePerGas) || fallbackTx.maxFeePerGas,
    maxPriorityFeePerGas: bigintToRpcQuantity(parsed.maxPriorityFeePerGas) || fallbackTx.maxPriorityFeePerGas,
    type,
    r: parsed.r,
    s: parsed.s,
    v: typeof parsed.v === 'bigint' ? bigintToRpcQuantity(parsed.v) : parsed.v
  }

  if (isEip1559) {
    delete tx.gasPrice
  } else {
    delete tx.maxFeePerGas
    delete tx.maxPriorityFeePerGas
  }

  Object.keys(tx).forEach((key) => {
    if (typeof tx[key] === 'undefined' || tx[key] === null) delete tx[key]
  })
  return tx
}

export async function submitRabbyGasAccountSignedTransaction ({ sig, signedTransaction, txRequest, origin = externalUrls.appOrigin }) {
  const raw = getSignedRawTransaction(signedTransaction)

  const { parseTransaction } = await import('viem')
  const parsed = parseTransaction(raw)
  const rabbyTx = normalizeSignedTransactionForRabby(parsed, txRequest)

  return rabbyFetch('/v2/wallet/submit_tx', {
    method: 'POST',
    body: stringifyRabbyPayload({
      sig,
      backend_push_require: {
        gas_type: 'gas_account'
      },
      context: {
        tx: rabbyTx,
        origin,
        log_id: ''
      },
      mev_share_model: 'rabby'
    }),
    headers: {
      'Content-Type': 'application/json',
      sig
    }
  })
}
