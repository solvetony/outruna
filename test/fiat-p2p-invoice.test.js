import assert from 'node:assert/strict'
import test from 'node:test'
import {
  classifyFiatP2pInvoiceBalance,
  FIAT_P2P_FACTORY_ADDRESS,
  FIAT_P2P_MERCHANT_ADDRESS,
  decodePredictedInvoiceAddress,
  encodePredictInvoiceWithTokens,
  verifyFiatP2pInvoice
} from '../src/lib/fiatP2pInvoice.js'

const invoiceId = `0x${'42'.repeat(32)}`
const tokenAddress = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'
const invoiceAddress = '0x4257408625b7ab1641b5f8b5198e337f8c0dfaa1'
const encodedAddress = `0x${invoiceAddress.slice(2).padStart(64, '0')}`

test('P2P prediction calldata uses the hardcoded merchant and selected token', () => {
  const data = encodePredictInvoiceWithTokens(invoiceId, tokenAddress)

  assert.equal(FIAT_P2P_FACTORY_ADDRESS, '0x99CF6AC23E730991c2eD5420fbaB2Ca9BB3b3B34')
  assert.equal(FIAT_P2P_MERCHANT_ADDRESS, '0xF7B643fADbb3240fDc5C2c48AFb66bBA94521Db6')
  assert.equal(data.slice(0, 10), '0x2ff912ec')
  assert.equal(data.includes(FIAT_P2P_MERCHANT_ADDRESS.slice(2).toLowerCase()), true)
  assert.equal(data.includes(tokenAddress.slice(2)), true)
})

test('P2P invoice verification accepts only the factory-predicted address', async () => {
  const provider = {
    async request (request) {
      assert.equal(request.method, 'eth_call')
      assert.equal(request.params[0].to, FIAT_P2P_FACTORY_ADDRESS)
      return encodedAddress
    }
  }
  const order = {
    invoiceId,
    invoiceAddress,
    token: { address: tokenAddress }
  }

  assert.equal(decodePredictedInvoiceAddress(encodedAddress), invoiceAddress)
  assert.equal(await verifyFiatP2pInvoice(provider, order), invoiceAddress)

  await assert.rejects(
    verifyFiatP2pInvoice(provider, {
      ...order,
      invoiceAddress: '0x1111111111111111111111111111111111111111'
    }),
    /Do not send funds/
  )
})

test('P2P invoice balance requires an exact token amount', () => {
  assert.equal(classifyFiatP2pInvoiceBalance(1000000n, 1000000n), 'matched')
  assert.equal(classifyFiatP2pInvoiceBalance(999999n, 1000000n), 'waiting')
  assert.equal(classifyFiatP2pInvoiceBalance(1000001n, 1000000n), 'overpaid')
})
