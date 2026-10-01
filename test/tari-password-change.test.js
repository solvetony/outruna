import test from 'node:test'
import assert from 'node:assert/strict'
import { indexedDB } from 'fake-indexeddb'
import { TariWallet } from '../src/tari/state.js'
import { importBackup, readBackup } from '../src/tari/backup.js'
import { walletAddress } from '../src/tari/wallet.js'
import { tariPasswordMessages } from '../src/i18n/tariPassword.js'

globalThis.indexedDB = indexedDB
const oldPassword = 'Original password 123 🔒'
const newPassword = 'Changed password 456 🔐'

test('password replacement preserves identity and view state, re-exports and survives reload', async () => {
  const user = `password-change-${crypto.randomUUID()}`
  const manager = new TariWallet(user)
  let file
  try {
    await manager.open(true)
    const original = await manager.export(oldPassword)
    const address = manager.data.address
    const birthday = manager.data.birthdayMs
    const view = manager.wallet
    const seal = manager.sealedSpend
    await assert.rejects(manager.changePassword('wrong', newPassword, () => assert.fail()), /decryptError/)
    await assert.rejects(manager.changePassword(oldPassword, 'short', () => assert.fail()), /passwordLength/)
    await assert.rejects(manager.changePassword(oldPassword, newPassword, () => { throw new Error('download failed') }), /download failed/)
    assert.equal(manager.sealedSpend, seal)
    const revision = manager.revision
    manager.revision = 'conflict'
    await assert.rejects(manager.changePassword(oldPassword, newPassword, () => {}), /storageConflict/)
    assert.equal(manager.sealedSpend, seal)
    manager.revision = revision
    await manager.unlockSpend(oldPassword)
    await manager.changePassword(oldPassword, newPassword, (backup) => { file = backup })
    assert.equal(manager.spendWallet, null)
    assert.equal(manager.wallet, view)
    assert.equal(manager.wallet.isViewOnly, true)
    assert.equal(manager.data.address, address)
    assert.equal(manager.data.birthdayMs, birthday)
    assert.ok(manager.data.backupExportedAt)
    assert.notDeepEqual(manager.sealedSpend.salt, seal.salt)
    assert.notDeepEqual(manager.sealedSpend.iv, seal.iv)
    await assert.rejects(manager.unlockSpend(oldPassword), /decryptError/)
    for (const [backup, password] of [[original, oldPassword], [file, newPassword]]) {
      const restored = await importBackup({ envelope: await readBackup(backup), password })
      try { assert.equal(walletAddress(restored.wallet), address) } finally { restored.wallet.free() }
    }
    await manager.dispose()
    await new Promise((resolve) => setImmediate(resolve))
    const reopened = new TariWallet(user)
    try {
      await reopened.open()
      await assert.rejects(reopened.unlockSpend(oldPassword), /decryptError/)
      await reopened.unlockSpend(newPassword)
      assert.equal(walletAddress(reopened.spendWallet), address)
    } finally { await reopened.dispose() }
  } finally { await manager.dispose() }
})

test('password change text covers every supported locale', () => {
  for (const locale of ['en', 'de', 'es', 'ru', 'zh', 'hi', 'bn']) {
    for (const value of Object.values(tariPasswordMessages[locale])) assert.ok(value)
    assert.deepEqual(Object.keys(tariPasswordMessages[locale]), Object.keys(tariPasswordMessages.en))
  }
})
