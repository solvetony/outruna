import test from 'node:test'
import assert from 'node:assert/strict'
import { portfolioValuation, withdrawalFeedback } from '../src/lib/walletFeedback.js'
import { walletFeedbackMessages } from '../src/i18n/walletFeedback.js'

test('portfolio valuation distinguishes zero, unknown, missing and partial prices', () => {
  assert.deepEqual(portfolioValuation([]), { total: '0', status: 'known' })
  assert.equal(portfolioValuation([], false).status, 'unknown')
  assert.equal(portfolioValuation([{ rawBalance: '1', usdValue: null }]).status, 'unavailable')
  assert.deepEqual(portfolioValuation([{ rawBalance: '1', usdValue: '0.1' }, { rawBalance: '1', usdValue: '0.2' }]), { total: '0.3', status: 'known' })
  assert.deepEqual(portfolioValuation([{ rawBalance: '1', usdValue: '25' }, { rawBalance: '1', usdValue: null }]), { total: '25', status: 'partial' })
  assert.equal(portfolioValuation([{ rawBalance: '0', usdValue: null }]).status, 'known')
})

test('withdrawal feedback separates amount, recipient and fee errors using integer balances', () => {
  const draft = { asset: { native: true, decimals: 18, rawBalance: '2000000000000000000' }, amount: '1', recipient: '0x' + '11'.repeat(20), nativeBalance: '2000000000000000000', feeWei: 21000n }
  assert.deepEqual(withdrawalFeedback(draft), { amountError: null, recipientError: null })
  assert.equal(withdrawalFeedback({ ...draft, amount: '0' }).amountError, 'amountInvalid')
  assert.equal(withdrawalFeedback({ ...draft, amount: '10' }).amountError, 'amountBalance')
  assert.equal(withdrawalFeedback({ ...draft, amount: '2' }).amountError, 'amountFee')
  assert.equal(withdrawalFeedback({ ...draft, amount: '2', gasMode: 'gas_account' }).amountError, 'amountFee')
  assert.equal(withdrawalFeedback({ ...draft, recipient: '' }).recipientError, 'recipientRequired')
  assert.equal(withdrawalFeedback({ ...draft, recipient: 'invalid' }).recipientError, 'recipientInvalid')
  const token = { ...draft, asset: { native: false, decimals: 6, rawBalance: '1000000' }, amount: '0.5' }
  assert.equal(withdrawalFeedback(token).amountError, null)
  assert.equal(withdrawalFeedback({ ...token, nativeBalance: '0' }).amountError, 'amountFee')
  assert.equal(withdrawalFeedback({ ...token, nativeBalance: '0', gasMode: 'gas_account' }).amountError, null)
  assert.equal(withdrawalFeedback({ ...draft, asset: { native: false, decimals: 0, rawBalance: '900719925474099300000' }, amount: '900719925474099300001' }).amountError, 'amountBalance')
})

test('every supported language includes the wallet feedback keys', () => {
  assert.deepEqual(Object.keys(walletFeedbackMessages).sort(), ['bn', 'de', 'en', 'es', 'hi', 'ru', 'zh'])
  for (const messages of Object.values(walletFeedbackMessages)) assert.deepEqual(Object.keys(messages).sort(), Object.keys(walletFeedbackMessages.en).sort())
})
