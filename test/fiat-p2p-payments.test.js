import test from 'node:test'
import assert from 'node:assert/strict'
import {
  findRestorableFiatP2pOpenInvoice,
  loadFiatP2pOpenInvoice,
  loadFiatP2pPayments,
  removeFiatP2pOpenInvoice,
  removeFiatP2pPayment,
  saveFiatP2pOpenInvoice,
  saveFiatP2pPayment
} from '../src/lib/fiatP2pPayments.js'

function createStorage () {
  const values = new Map()
  return {
    getItem: key => values.get(key) || null,
    setItem: (key, value) => values.set(key, value),
    removeItem: key => values.delete(key)
  }
}

const walletAddress = '0x728AC839d398F0aF5A7b1791B84985d737D180b5'
const order = {
  id: '28f58b20-3e46-482a-8369-22b8858721af',
  chainId: 42161,
  invoiceAddress: '0xE82b67Abba63C44FcDa9270811B445029BCacb02'
}
const txHash = `0x${'12'.repeat(32)}`

test('P2P submitted payments persist per wallet and order', () => {
  const storage = createStorage()
  const saved = saveFiatP2pPayment({ walletAddress, order, txHash }, storage)

  assert.equal(saved[order.id].txHash, txHash)
  assert.equal(saved[order.id].chainId, 42161)
  assert.equal(loadFiatP2pPayments(walletAddress, storage)[order.id].txHash, txHash)
  assert.deepEqual(loadFiatP2pPayments('0x0000000000000000000000000000000000000001', storage), {})
})

test('P2P submitted payment can be removed after an explicit revert', () => {
  const storage = createStorage()
  saveFiatP2pPayment({ walletAddress, order, txHash }, storage)

  const remaining = removeFiatP2pPayment(walletAddress, order.id, storage)
  assert.equal(remaining[order.id], undefined)
  assert.equal(loadFiatP2pPayments(walletAddress, storage)[order.id], undefined)
})

test('P2P open invoice persists only after a payment interaction', () => {
  const storage = createStorage()
  assert.equal(loadFiatP2pOpenInvoice(walletAddress, storage), null)

  const saved = saveFiatP2pOpenInvoice({
    walletAddress,
    order,
    activatedBy: 'copy_address'
  }, storage)

  assert.equal(saved.orderId, order.id)
  assert.equal(saved.activatedBy, 'copy_address')
  assert.equal(loadFiatP2pOpenInvoice(walletAddress, storage).invoiceAddress, order.invoiceAddress)
})

test('P2P finalized invoice clears only its matching open invoice', () => {
  const storage = createStorage()
  saveFiatP2pOpenInvoice({ walletAddress, order, activatedBy: 'send_from_wallet' }, storage)

  const differentOrder = removeFiatP2pOpenInvoice(walletAddress, 'different-order', storage)
  assert.equal(differentOrder.orderId, order.id)

  assert.equal(removeFiatP2pOpenInvoice(walletAddress, order.id, storage), null)
  assert.equal(loadFiatP2pOpenInvoice(walletAddress, storage), null)
})

test('P2P restores only the matching unfinished invoice', () => {
  const trackedInvoice = {
    orderId: order.id,
    invoiceAddress: order.invoiceAddress
  }

  assert.equal(findRestorableFiatP2pOpenInvoice([
    { ...order, status: 'awaiting_deposit' }
  ], trackedInvoice)?.id, order.id)
  assert.equal(findRestorableFiatP2pOpenInvoice([
    { ...order, status: 'pending_payout' }
  ], trackedInvoice), null)
  assert.equal(findRestorableFiatP2pOpenInvoice([
    { ...order, status: 'awaiting_deposit', invoiceAddress: '0x0000000000000000000000000000000000000001' }
  ], trackedInvoice), null)
})
