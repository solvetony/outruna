import test from 'node:test'
import assert from 'node:assert/strict'
import { indexedDB } from 'fake-indexeddb'
import { TariWallet } from '../src/tari/state.js'
import { loadWallet, storedIdentity } from '../src/tari/storage.js'
import { walletAddress } from '../src/tari/wallet.js'

globalThis.indexedDB = indexedDB
const password = 'View-only wallet password 🔒 123'

test('legacy wallet migrates to password-sealed spending while view balance survives reload', async () => {
  const userId = `view-lock-${crypto.randomUUID()}`
  const first = new TariWallet(userId)
  await first.open(true)
  const address = first.data.address
  assert.equal(first.wallet.isViewOnly, true)
  assert.equal(first.spendWallet, undefined)
  assert.equal(first.needsPassword, true)
  const file = await first.export(password)
  assert.equal((await file.text()).includes('backupHex'), false)
  await first.exported()
  first.data.lastSafeScannedHeight = 10
  first.data.utxos = [{ commitmentHex: 'ab'.repeat(32), valueMicro: '2300000', maturity: '0', minedHeight: 10 }]
  await first.persist()
  assert.equal(first.sealedSpend.ciphertext.byteLength > 0, true)
  await first.dispose()

  const stored = await loadWallet(userId)
  try {
    assert.equal(stored.legacy, false)
    assert.equal(stored.wallet.isViewOnly, true)
    assert.equal(stored.wallet.canSpend, false)
    assert.equal(walletAddress(stored.wallet), address)
    assert.equal(stored.metadata.utxos[0].valueMicro, '2300000')
    assert.equal(stored.metadata.backupHex, undefined)
  } finally { stored.wallet.free() }

  const reopened = new TariWallet(userId)
  try {
    await reopened.open()
    assert.equal(reopened.previousTotalMicro, 2300000n)
    assert.equal(reopened.spendWallet, undefined)
    await assert.rejects(reopened.unlockSpend('wrong password'), /decryptError/)
    assert.equal(reopened.spendWallet, null)
    await reopened.unlockSpend(password)
    assert.equal(walletAddress(reopened.spendWallet), address)
    reopened.spendExpiresAt = Date.now() - 1
    await assert.rejects(reopened.send({}), /lockExpired/)
    assert.equal(reopened.spendWallet, null)
    assert.equal(reopened.handles.size, 0)
    assert.equal((await storedIdentity(userId)).address, address)
  } finally { await reopened.dispose() }
})
