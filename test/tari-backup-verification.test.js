import test from 'node:test'
import assert from 'node:assert/strict'
import { createWallet, walletAddress, loadWasm } from '../src/tari/wallet.js'
import { exportBackup, readBackup } from '../src/tari/backup.js'
import { verifyBackup } from '../src/tari/verify-backup.js'

test('verification restores identity without modifying installed wallet', async () => {
  const wallet = await createWallet(), other = await createWallet()
  const password = ' backup verification password '
  const { WasmWallet } = await loadWasm()
  const originalFree = WasmWallet.prototype.free
  let disposed = 0
  WasmWallet.prototype.free = function () { disposed++; return originalFree.call(this) }
  try {
    const address = walletAddress(wallet)
    const secret = wallet.getBackupHex()
    const envelope = await readBackup(await exportBackup({ wallet, birthdayMs: Date.now(), password }))
    const result = await verifyBackup({ envelope, password, address })
    assert.equal(disposed, 1)
    assert.equal(result.address, address)
    assert.ok(result.verifiedAt > 0)
    assert.equal(walletAddress(wallet), address)
    assert.equal(wallet.getBackupHex(), secret)
    await assert.rejects(verifyBackup({ envelope, password: 'incorrect password', address }), /tari.decryptError/)
    await assert.rejects(verifyBackup({ envelope, password, address: walletAddress(other) }), /tari.backupDifferent/)
    assert.equal(disposed, 2)
    for (const modified of [{ ...envelope, version: 99 }, { ...envelope, network: 'testnet' }, { ...envelope, kdf: { ...envelope.kdf, salt: '!' } }]) {
      await assert.rejects(verifyBackup({ envelope: modified, password, address }))
    }
  } finally { WasmWallet.prototype.free = originalFree; wallet.free(); other.free() }
})
