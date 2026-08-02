import { api } from './urls.js'

export async function parseResponse (response) {
  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return response.json()
  }
  return response.text()
}

export class HttpError extends Error {
  constructor (message, status, payload) {
    super(message)
    this.name = 'HttpError'
    this.status = status
    this.payload = payload
  }
}

export function isTransientHttpStatus (status) {
  return [502, 503, 504, 520].includes(Number(status))
}

export async function fetchJson (path, options = {}) {
  const response = await fetch(path, {
    credentials: 'include',
    cache: 'no-store',
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.headers || {})
    }
  })
  const payload = await parseResponse(response)
  if (!response.ok) {
    const message = payload?.error || payload?.message || `Request failed with ${response.status}`
    throw new HttpError(message, response.status, payload)
  }
  return payload
}

export async function postJson (path, body, options = {}) {
  return fetchJson(path, {
    method: 'POST',
    body: JSON.stringify(body ?? {}),
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  })
}

export async function deleteJson (path, options = {}) {
  return fetchJson(path, {
    method: 'DELETE',
    ...options
  })
}

export async function signWithPrivy (token, options = {}) {
  const body = {
    token
  }

  if (typeof options.referral === 'string' && options.referral.trim()) {
    body.referral = options.referral.trim()
  }

  if (typeof options.telegramInitData === 'string' && options.telegramInitData.trim()) {
    body.telegramInitData = options.telegramInitData.trim()
  }

  if (options.rabbyGasAccount?.accountId && options.rabbyGasAccount?.sig) {
    body.rabbyGasAccount = {
      accountId: options.rabbyGasAccount.accountId,
      sig: options.rabbyGasAccount.sig,
      connectedAt: options.rabbyGasAccount.connectedAt || Date.now()
    }
  }

  const response = await fetch(api.privy.sign, {
    method: 'POST',
    credentials: 'include',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const payload = await parseResponse(response)
  if (!response.ok) {
    throw new HttpError(payload?.error || payload?.message || 'Privy session exchange failed', response.status, payload)
  }
  return payload
}

export function updateLanguage (languageCode) {
  return postJson(api.language, { languageCode })
}
