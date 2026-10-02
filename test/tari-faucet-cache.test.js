import test from 'node:test'
import assert from 'node:assert/strict'
import { indexedDB } from 'fake-indexeddb'
import { loadFaucetCache, saveFaucetCache } from '../src/tari/faucet-cache.js'
import { FAUCET } from '../src/tari/faucet.js'

globalThis.indexedDB = indexedDB
const entry = { id: 'ab'.repeat(32), hash: 'cd'.repeat(32), amountMicro: '1500000', maturity: '0', createdAt: new Date().toISOString(), minedHeight: 100 }
const data = () => ({ outputs: new Map([[entry.id, { ...entry }]]), height: 100, hash: 'ef'.repeat(32) })

test('public faucet cache persists outputs, spent status and safe cursor without wallet secrets', async () => {
  assert.equal(await loadFaucetCache(), null)
  const cache = data()
  cache.outputs.get(entry.id).backupHex = 'must-not-persist'
  assert.equal(await saveFaucetCache(cache), true)
  const loaded = await loadFaucetCache()
  assert.deepEqual(loaded.outputs.get(entry.id), entry)
  assert.equal(loaded.height, 100)
  assert.equal(loaded.hash, cache.hash)
  cache.height = 101
  cache.outputs.get(entry.id).spent = true
  await saveFaucetCache(cache)
  assert.equal((await loadFaucetCache()).outputs.get(entry.id).spent, true)
  assert.equal((await loadFaucetCache()).height, 101)
  assert.equal(await saveFaucetCache({ ...cache, height: 50 }), null)
  assert.equal((await loadFaucetCache()).height, 101)
})

test('corrupt cache is discarded and storage unavailability falls back without throwing', async () => {
  const db = await new Promise((resolve) => {
    const request = indexedDB.open('outruna-tari-faucet-v1', 1)
    request.onsuccess = () => resolve(request.result)
  })
  await new Promise((resolve) => {
    const tx = db.transaction('history', 'readwrite')
    tx.objectStore('history').put({ version: 1, height: 1, hash: 'invalid', entries: [] }, `mainnet:${FAUCET.address}:${FAUCET.birthdayMs}`)
    tx.oncomplete = resolve
  })
  db.close()
  assert.equal(await loadFaucetCache(), null)
  globalThis.indexedDB = { open () { throw new Error('disabled') } }
  try {
    assert.equal(await loadFaucetCache(), null)
    assert.equal(await saveFaucetCache(data()), null)
  } finally { globalThis.indexedDB = indexedDB }
})
