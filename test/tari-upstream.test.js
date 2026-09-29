import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { indexedDB } from 'fake-indexeddb'
import { restoreWallet, restoreViewWallet, viewFromFull, walletAddress, loadWasm } from '../src/tari/wallet.js'
import { importBackup, sealSpend } from '../src/tari/backup.js'
import { saveWallet, saveWatchWallet, loadWallet, removeWallet } from '../src/tari/storage.js'
import { ownershipPool } from '../src/tari/worker-pool.js'
import { scan } from '../src/tari/scanner.js'
import { spendable, maximum, selectInputs } from '../src/tari/inputs.js'
import { signTransaction } from '../src/tari/transaction.js'
import { TariWallet } from '../src/tari/state.js'

globalThis.indexedDB = indexedDB
const legacy = JSON.parse(await readFile(new URL('./fixtures/tari-legacy-wallet.json', import.meta.url), 'utf8'))
const totalMicro = legacy.utxos.reduce((sum, output) => sum + BigInt(output.valueMicro), 0n)
const height = 353163

test('upstream restores vendored backups and view keys and scans their outputs', async () => {
  const full = await restoreWallet(legacy.backupHex)
  const watch = await restoreViewWallet(legacy.viewKeyHex, legacy.address)
  const derived = await viewFromFull(full)
  const pool = ownershipPool(watch)
  try {
    for (const wallet of [full, watch, derived]) assert.equal(walletAddress(wallet), legacy.address)
    assert.equal(full.exportPrivateViewKeyHex(), legacy.viewKeyHex)
    assert.equal(watch.isViewOnly, true)
    assert.equal(watch.canSpend, false)
    assert.throws(() => watch.getBackupHex())
    const imported = await importBackup({ envelope: legacy.portableBackup, password: legacy.password })
    try { assert.equal(imported.wallet.getBackupHex(), legacy.backupHex) } finally { imported.wallet.free() }
    let scannedMicro = 0n
    await scan({ from: height, to: height, wallet: watch, detector: pool,
      client: { blocks: async () => [{ height, outputs: legacy.utxos, inputs: [] }], hydrate: async (_, owned) => owned },
      onBlock: async (_, outputs) => {
        assert.equal(outputs.length, legacy.utxos.length)
        for (const output of outputs) assert.equal(output.valueMicro, output.raw.valueMicro)
        scannedMicro += outputs.reduce((sum, output) => sum + BigInt(output.valueMicro), 0n)
      } })
    assert.equal(scannedMicro, totalMicro)
  } finally { pool.dispose(); derived.free(); watch.free(); full.free() }
})

test('upstream preserves cached balances, password unlock and signing for both storage versions', async () => {
  const { calculateFee } = await loadWasm()
  for (const version of [1, 2]) {
    const userId = `upstream-storage-${version}`
    const full = await restoreWallet(legacy.backupHex)
    const watch = await restoreViewWallet(legacy.viewKeyHex, legacy.address)
    const metadata = { address: legacy.address, birthdayMs: 1700000000000, backupExportedAt: null,
      lastSafeScannedHeight: height, headers: {}, utxos: structuredClone(legacy.utxos), history: [] }
    try {
      if (version === 1) await saveWallet(userId, full, metadata)
      else await saveWatchWallet(userId, watch, metadata,
        await sealSpend({ wallet: full, userId, address: legacy.address, password: legacy.password }))
    } finally { full.free(); watch.free() }
    let snapshot
    const manager = new TariWallet(userId, (state) => { snapshot = state })
    try {
      await manager.open()
      assert.equal(manager.data.address, legacy.address)
      assert.equal(manager.wallet.isViewOnly, true)
      assert.equal(manager.previousTotalMicro, totalMicro)
      assert.equal(snapshot.totalMicro, totalMicro)
      assert.equal(snapshot.availableMicro, totalMicro)
      assert.equal(manager.handles.size, 0)
      if (version === 1) await manager.export(legacy.password)
      await assert.rejects(manager.unlockSpend('incorrect password'), /decryptError/)
      await manager.unlockSpend(legacy.password)
      assert.equal(manager.handles.size, legacy.utxos.length)
      const available = spendable(manager.data.utxos, manager.handles, height)
      const review = { ...selectInputs(available, maximum(available, calculateFee), calculateFee), recipient: legacy.address }
      const signed = await signTransaction(manager.spendWallet, review, manager.handles, height)
      assert.equal(BigInt(signed.feeMicro), review.feeMicro)
      assert.ok(JSON.parse(signed.json).body.inputs.length)
      manager.lockSpend()
      assert.equal(manager.handles.size, 0)
      assert.equal(snapshot.totalMicro, totalMicro)
      const saved = await loadWallet(userId)
      try {
        assert.equal(saved.legacy, false)
        assert.equal(walletAddress(saved.wallet), legacy.address)
        assert.equal(saved.metadata.utxos.reduce((sum, output) => sum + BigInt(output.valueMicro), 0n), totalMicro)
      } finally { saved.wallet.free() }
    } finally { await manager.dispose(); await removeWallet(userId) }
  }
})
