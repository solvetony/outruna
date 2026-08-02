import assert from 'node:assert/strict'
import test from 'node:test'
import { formatFiatP2pAmountInput } from '../src/lib/fiatP2pAmount.js'

test('P2P amount input keeps at most two decimal places', () => {
  assert.equal(formatFiatP2pAmountInput('149.52'), '149.52')
  assert.equal(formatFiatP2pAmountInput('149.5299'), '149.52')
  assert.equal(formatFiatP2pAmountInput('149.'), '149.')
  assert.equal(formatFiatP2pAmountInput('.5'), '0.5')
  assert.equal(formatFiatP2pAmountInput('12,34'), '12.34')
  assert.equal(formatFiatP2pAmountInput('1.2.3'), '1.23')
})
