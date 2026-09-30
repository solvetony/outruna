import test from 'node:test'
import assert from 'node:assert/strict'
import { FAUCET } from '../src/tari/faucet.js'
import { restoreViewWallet, walletAddress } from '../src/tari/wallet.js'
import { faucetMessages } from '../src/i18n/faucet.js'
import { securityHeaders } from '../scripts/security-policy.js'

test('public faucet view key reconstructs the exact Mainnet address without spending capability', async () => {
  const wallet = await restoreViewWallet(FAUCET.viewKeyHex, FAUCET.address)
  try {
    assert.equal(walletAddress(wallet), FAUCET.address)
    assert.equal(wallet.isViewOnly, true)
    assert.equal(wallet.canSpend, false)
    assert.throws(() => wallet.getBackupHex())
    assert.equal(Object.keys(FAUCET).some((key) => /backup|spend/i.test(key)), false)
  } finally { wallet.free() }
})

test('faucet text is provided in all supported languages', () => {
  for (const locale of ['en', 'bn', 'de', 'es', 'hi', 'ru', 'zh']) {
    assert.deepEqual(Object.keys(faucetMessages[locale]), Object.keys(faucetMessages.en))
    assert.ok(Object.values(faucetMessages[locale]).every((text) => typeof text === 'string' && text.length > 0))
  }
})

test('CSP permits only the official Turnstile entry script and retains worker/object restrictions', () => {
  const csp = securityHeaders('')['Content-Security-Policy']
  assert.ok(csp.includes('https://challenges.cloudflare.com/turnstile/v0/api.js'))
  assert.ok(csp.includes("worker-src 'self'"))
  assert.ok(csp.includes("object-src 'none'"))
  assert.ok(!csp.includes('connect-src *'))
})
