import test from 'node:test'
import assert from 'node:assert/strict'
import { encodeFunctionData, erc20Abi, maxUint256 } from 'viem'
import { approvalIfNeeded, decodeTokenCall, validateTransaction } from '../src/lib/transactions/decode.js'
import { createReview, assertReviewedTransaction, reviewPolicy } from '../src/lib/transactions/review.js'
import { mapRabbyCheckTxToRisk } from '../src/lib/rabby/transactionRisk.js'
import { compareRecipient } from '../src/lib/transactions/recipients.js'
import { checkTransactionRisk } from '../src/lib/rabby/transactionRisk.js'

const from = '0x1111111111111111111111111111111111111111'
const to = '0x2222222222222222222222222222222222222222'
const tx = (data = '0x') => ({ from, to, chainId: 1, value: '0x0', data })

test('local approvals are exact for zero and partial allowances and skipped when sufficient', () => {
  for (const allowance of [0n, 20n]) {
    const draft = approvalIfNeeded(to, from, 100n, allowance)
    assert.equal(decodeTokenCall(draft.data).amount, 100n)
    assert.equal(decodeTokenCall(draft.data).recipient.toLowerCase(), from)
  }
  assert.equal(approvalIfNeeded(to, from, 100n, 100n), null)
  assert.equal(approvalIfNeeded(to, from, 100n, maxUint256), null)
})
test('provider unlimited approval is detected and requires explicit warning', () => {
  const data = encodeFunctionData({ abi: erc20Abi, functionName: 'approve', args: [from, maxUint256] })
  const review = createReview(tx(data))
  assert.equal(review.action.unlimited, true)
  assert.ok(review.warnings.includes('unlimited'))
  assert.equal(review.action.rawAmount, maxUint256.toString())
  assert.throws(() => decodeTokenCall('0x095ea7b3ff'))
  assert.throws(() => decodeTokenCall(data + '00'))
  assert.throws(() => createReview(tx(data), { spender: to }))
})
test('native, token transfer and unknown method reviews derive from final calldata', () => {
  assert.equal(createReview({ ...tx(), value: '150000000000000000' }).action.amount, '0.15')
  const data = encodeFunctionData({ abi: erc20Abi, functionName: 'transfer', args: [from, 125n] })
  assert.equal(createReview(tx(data)).action.rawAmount, '125')
  assert.throws(() => createReview(tx(data), { recipient: to }))
  const review = createReview(tx('0x12345678'), { purpose: 'swap' })
  assert.ok(review.warnings.includes('unknown'))
  assert.equal(review.action.type, 'swap')
  assertReviewedTransaction(review, tx('0x12345678'))
  assert.throws(() => assertReviewedTransaction(review, tx('0x87654321')))
})
test('poisoning uses deliberate recipients and strong prefix/suffix comparisons', () => {
  const saved = '0x1234567890aaaaaaaaaaaaaaaaaaaa9876543210'
  const entered = '0x1234567890bbbbbbbbbbbbbbbbbbbb9876543210'
  assert.ok(compareRecipient(saved.toUpperCase().replace('0X', '0x'), [{ address: saved, source: 'saved' }]).exact)
  assert.ok(compareRecipient(entered, [{ address: saved, source: 'outgoing' }]).similar)
  assert.equal(compareRecipient(entered, [{ address: saved, source: 'incoming' }]), null)
  assert.equal(compareRecipient(to, [{ address: saved, source: 'saved' }]), null)
})
test('malformed drafts fail closed before risk service access', async () => {
  assert.throws(() => validateTransaction({ ...tx(), data: '0xzz' }))
  assert.equal((await checkTransactionRisk({ tx: { ...tx(), data: '0xzz' } })).blocking, true)
})

test('all transaction purposes share warning and blocking policy', () => {
  for (const purpose of ['withdraw', 'approval', 'swap', 'gas-account', 'p2p']) {
    const review = createReview(tx(), { purpose })
    assert.deepEqual(reviewPolicy(review, mapRabbyCheckTxToRisk({ decision: 'pass' })), { blocking: false, requiresConfirmation: false })
    for (const decision of ['warning', 'danger']) assert.equal(reviewPolicy(review, mapRabbyCheckTxToRisk({ decision })).requiresConfirmation, true)
    assert.equal(reviewPolicy(review, mapRabbyCheckTxToRisk({ decision: 'forbidden' })).blocking, true)
    assert.equal(reviewPolicy(review, { level: 'unavailable' }).blocking, false)
  }
})
