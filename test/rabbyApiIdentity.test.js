import test from 'node:test'
import assert from 'node:assert/strict'
import {
  getRabbyApiIdentityHeaders,
  getRabbySignedHeaders,
  resetRabbyApiIdentityCache,
  updateRabbyApiKeyFromResponse
} from '../src/lib/rabby/signHeaders.js'

function createStorage () {
  const values = new Map()
  return {
    getItem: key => values.get(key) || null,
    setItem: (key, value) => values.set(key, String(value))
  }
}

test('Rabby API identity is generated once and reused after a reload', () => {
  const previousStorage = globalThis.localStorage
  globalThis.localStorage = createStorage()
  resetRabbyApiIdentityCache()

  try {
    const first = getRabbyApiIdentityHeaders()
    const second = getRabbyApiIdentityHeaders()
    resetRabbyApiIdentityCache()
    const reloaded = getRabbyApiIdentityHeaders()

    assert.match(first['X-API-Key'], /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
    assert.equal(second['X-API-Key'], first['X-API-Key'])
    assert.equal(second['X-API-Time'], first['X-API-Time'])
    assert.deepEqual(reloaded, first)
  } finally {
    resetRabbyApiIdentityCache()
    globalThis.localStorage = previousStorage
  }
})

test('Rabby API identity accepts and persists x-set-api-key rotation', () => {
  const previousStorage = globalThis.localStorage
  globalThis.localStorage = createStorage()
  resetRabbyApiIdentityCache()

  try {
    const before = getRabbyApiIdentityHeaders()
    const changed = updateRabbyApiKeyFromResponse({
      ok: true,
      headers: {
        get: name => name === 'x-set-api-key' ? 'rotated-api-key' : null
      }
    })
    const after = getRabbyApiIdentityHeaders()
    resetRabbyApiIdentityCache()
    const reloaded = getRabbyApiIdentityHeaders()

    assert.equal(changed, true)
    assert.notEqual(before['X-API-Key'], after['X-API-Key'])
    assert.equal(after['X-API-Key'], 'rotated-api-key')
    assert.equal(after['X-API-Time'], before['X-API-Time'])
    assert.deepEqual(reloaded, after)
  } finally {
    resetRabbyApiIdentityCache()
    globalThis.localStorage = previousStorage
  }
})

test('Rabby signer uses a short WebApp origin for Telegram launch URLs', async () => {
  const previousChrome = globalThis.chrome
  const previousLocation = globalThis.location
  const previousWorker = globalThis.Worker
  let postedRequest

  class TelegramWorkerMock {
    postMessage (request) {
      postedRequest = request
      queueMicrotask(() => {
        this.onmessage({
          data: {
            id: request.id,
            signed: {
              ts: 1,
              nonce: 'nonce',
              version: 'v2',
              signature: 'signature'
            }
          }
        })
      })
    }

    terminate () {}
  }

  globalThis.chrome = {}
  globalThis.location = {
    origin: 'https://outruna.top',
    href: `https://outruna.top/#tgWebAppData=${'x'.repeat(8192)}`
  }
  globalThis.Worker = TelegramWorkerMock

  try {
    const headers = await getRabbySignedHeaders({
      method: 'GET',
      path: '/v1/gas_account/sign_text',
      params: { account_id: '0x0000000000000000000000000000000000000001' }
    })

    assert.equal(postedRequest.webHf, 'https://outruna.top/')
    assert.equal(headers['x-api-sign'], 'signature')
  } finally {
    globalThis.chrome = previousChrome
    globalThis.location = previousLocation
    globalThis.Worker = previousWorker
  }
})
