import test from 'node:test'
import assert from 'node:assert/strict'
import { indexedDB } from 'fake-indexeddb'
import { createWallet, walletAddress } from '../src/tari/wallet.js'
import { saveWallet, loadWallet, removeWallet } from '../src/tari/storage.js'
import { TariWallet } from '../src/tari/state.js'
import { ownershipPool } from '../src/tari/worker-pool.js'
import { broadcast } from '../src/tari/rpc.js'
import { exportBackup, readBackup } from '../src/tari/backup.js'

globalThis.indexedDB = indexedDB
const metadata = () => ({ birthdayMs: Date.now(), backupExportedAt: null, lastSafeScannedHeight: null, headers: {}, utxos: [], history: [] })

test('stale tabs cannot overwrite recovery material, reservations or remove another revision', async () => {
  const a = await createWallet(), b = await createWallet()
  try {
    const revision = await saveWallet('race', a, metadata(), null)
    await assert.rejects(saveWallet('race', b, metadata(), null), /storageConflict/)
    const next = await saveWallet('race', a, { ...metadata(), history: [{ status: 'pending' }] }, revision)
    await assert.rejects(saveWallet('race', a, metadata(), revision), /storageConflict/)
    await assert.rejects(removeWallet('race', revision), /storageConflict/)
    const recovered = await loadWallet('race')
    try {
      assert.equal(walletAddress(recovered.wallet), walletAddress(a))
      assert.equal(recovered.revision, next)
      assert.equal(recovered.metadata.history[0].status, 'pending')
    } finally { recovered.wallet.free() }
  } finally { a.free(); b.free() }
})

test('manager storage conflict fails closed instead of silently becoming session-only', async () => {
  const manager = new TariWallet('manager-conflict')
  try {
    await manager.open(true)
    await saveWallet('manager-conflict', manager.wallet, metadata(), manager.revision)
    manager.known = true
    await assert.rejects(manager.persist(), /storageConflict/)
    assert.equal(manager.known, false)
    assert.equal(manager.conflicted, true)
    assert.equal(manager.persisted, true)
  } finally { manager.dispose() }
})

test('import checks an existing unopened local wallet before proposing replacement', async () => {
  const original = await createWallet(), imported = await createWallet()
  const manager = new TariWallet('unopened-import')
  try {
    await saveWallet('unopened-import', original, metadata())
    const envelope = await readBackup(await exportBackup({ wallet: imported, birthdayMs: Date.now(), password: 'test password 123' }))
    const proposal = await manager.inspectImport(envelope, 'test password 123')
    assert.equal(proposal.replacement, true)
    assert.equal(manager.data.address, walletAddress(original))
    manager.cancelImport()
    const stored = await loadWallet('unopened-import')
    try { assert.equal(walletAddress(stored.wallet), walletAddress(original)) } finally { stored.wallet.free() }
  } finally { manager.dispose(); original.free(); imported.free() }
})

test('closing a backup operation while a scan stops cannot restart KDF work', async () => {
  const manager = new TariWallet('cancel-backup')
  try {
    await manager.open(true)
    let release
    manager.stopScan = () => new Promise((resolve) => { release = resolve })
    const operation = manager.export('test password 123')
    manager.cancelOperation()
    release()
    await assert.rejects(operation, { name: 'AbortError' })
    assert.equal(manager.pendingImport, null)
    manager.dispose()
    assert.throws(() => manager.operationSignal(), { name: 'AbortError' })
  } finally { manager.dispose() }
})

test('duplicate import confirmation does not unlock an in-flight replacement', async () => {
  const manager = new TariWallet('duplicate-confirmation')
  try {
    await manager.open(true)
    let release
    manager.stopScan = () => new Promise((resolve) => { release = resolve })
    const first = manager.acceptImport()
    await assert.rejects(manager.acceptImport(), /busy/)
    assert.equal(manager.committing, true)
    assert.equal(manager.cancelOperation(), false)
    release()
    await assert.rejects(first, /invalidBackup/)
    assert.equal(manager.committing, false)
  } finally { manager.dispose() }
})

test('cancelling import during local-wallet lookup prevents later decryption', async () => {
  const manager = new TariWallet('cancel-lookup')
  let release
  manager.open = () => new Promise((resolve) => { release = resolve })
  try {
    const operation = manager.inspectImport({}, 'test password 123')
    manager.cancelOperation()
    release()
    await assert.rejects(operation, { name: 'AbortError' })
    assert.equal(manager.pendingImport, null)
  } finally { manager.dispose() }
})

test('short or malformed worker replies fall back rather than dropping owned outputs', async () => {
  const original = globalThis.Worker
  let terminated = 0
  globalThis.Worker = class {
    postMessage (message) { queueMicrotask(() => this.onmessage?.({ data: message.action === 'init' ? true : [] })) }
    terminate () { terminated++ }
  }
  const wallet = { getBackupHex: () => 'test-only', isOutputMine: () => true }
  const pool = ownershipPool(wallet, new AbortController().signal)
  try {
    const outputs = [{ commitmentHex: 'test', encryptedDataHex: '', senderOffsetPubHex: '' }]
    assert.deepEqual(await pool.detect(outputs), outputs)
    assert.ok(terminated > 0)
  } finally { pool.dispose(); globalThis.Worker = original }
})

test('ambiguous broadcast responses never release input reservations as rejected', async () => {
  const original = globalThis.fetch
  try {
    for (const response of [null, {}, { result: {} }, { result: 'UNKNOWN' }, { result: { accepted: 'false' } }, { error: {} }, { error: { code: -32603, message: 'Internal error' } }]) {
      globalThis.fetch = async () => Response.json(response)
      await assert.rejects(broadcast('{}'), /broadcastUnknown/)
    }
    globalThis.fetch = async () => Response.json({ result: { accepted: false } })
    await assert.rejects(broadcast('{}'), /rejected/)
  } finally { globalThis.fetch = original }
})

test('send rejects a rolled-back tip or changed scanned header before signing', async () => {
  const original = globalThis.fetch
  const manager = new TariWallet('send-anchor')
  try {
    await manager.open(true)
    manager.known = true
    manager.data.lastSafeScannedHeight = 10
    manager.data.headers[10] = '11'.repeat(32)
    for (const height of [9, 10]) {
      globalThis.fetch = async (url, init) => {
        assert.equal(init.method, 'GET')
        return Response.json(String(url).includes('get_tip_info')
          ? { is_synced: true, metadata: { best_block_height: height, best_block_hash: '22'.repeat(32), pruned_height: 0, timestamp: Math.floor(Date.now() / 1000) } }
          : { height: 10, hash: '22'.repeat(32), prev_hash: '00'.repeat(32), timestamp: Math.floor(Date.now() / 1000) })
      }
      await assert.rejects(manager.send({}), /syncRequired/)
      assert.equal(manager.data.history.length, 0)
    }
  } finally { manager.dispose(); globalThis.fetch = original }
})
