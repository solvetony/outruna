import test from 'node:test'
import assert from 'node:assert/strict'
import { indexedDB } from 'fake-indexeddb'
import { TariWallet } from '../src/tari/state.js'
import { loadWallet, saveWallet, storedIdentity } from '../src/tari/storage.js'
import { createWallet, walletAddress } from '../src/tari/wallet.js'

test('stalled device storage ends preparation and retry reopens the same wallet', async (t) => {
  globalThis.indexedDB = indexedDB
  const wallet = await createWallet()
  const address = walletAddress(wallet)
  await saveWallet('stalled-open', wallet, { address, birthdayMs: Date.now(), utxos: [], history: [] }, null)
  wallet.free()
  const manager = new TariWallet('stalled-open')
  let request, closed = false
  t.mock.timers.enable({ apis: ['setTimeout'] })
  globalThis.indexedDB = { open: () => (request = {}) }
  try {
    const opening = manager.open(true)
    const rejected = assert.rejects(opening, /tari.storageError/)
    await new Promise(setImmediate)
    assert.equal(manager.busy, true)
    assert.equal(manager.syncing, false)
    t.mock.timers.tick(15000)
    await new Promise(setImmediate)
    t.mock.timers.tick(15000)
    await rejected
    assert.equal(manager.busy, false)
    assert.equal(manager.wallet, undefined)
    assert.equal(manager.error, 'tari.storageError')
    request.result = { close: () => { closed = true } }
    request.onsuccess()
    assert.equal(closed, true)
    t.mock.timers.reset()
    globalThis.indexedDB = indexedDB
    await manager.open(true)
    assert.equal(manager.data.address, address)
    assert.equal(manager.busy, false)
    assert.equal(manager.error, null)
    const saved = await loadWallet('stalled-open')
    assert.equal(walletAddress(saved.wallet), address)
    saved.wallet.free()
  } finally {
    globalThis.indexedDB = indexedDB
    t.mock.timers.reset()
    await manager.dispose()
  }
})

test('stalled storage transaction is aborted and connection closed', async (t) => {
  let aborted = false, closed = false
  const tx = { objectStore: () => ({ get: () => ({}) }), abort: () => { aborted = true } }
  globalThis.indexedDB = { open: () => {
    const request = { result: { transaction: () => tx, close: () => { closed = true } } }
    queueMicrotask(() => request.onsuccess())
    return request
  } }
  t.mock.timers.enable({ apis: ['setTimeout'] })
  try {
    const rejected = assert.rejects(storedIdentity('stalled-transaction'), /tari.storageError/)
    await new Promise(setImmediate)
    t.mock.timers.tick(15000)
    await rejected
    assert.equal(aborted, true)
    assert.equal(closed, true)
  } finally {
    globalThis.indexedDB = indexedDB
    t.mock.timers.reset()
  }
})
