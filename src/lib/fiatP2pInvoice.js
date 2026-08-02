export const FIAT_P2P_FACTORY_ADDRESS = '0x99CF6AC23E730991c2eD5420fbaB2Ca9BB3b3B34'
export const FIAT_P2P_MERCHANT_ADDRESS = '0xF7B643fADbb3240fDc5C2c48AFb66bBA94521Db6'

const PREDICT_WITH_TOKENS_SELECTOR = '2ff912ec'

function addressWord (value) {
  const address = String(value || '').trim().toLowerCase().replace(/^0x/, '')
  if (!/^[0-9a-f]{40}$/.test(address)) throw new Error('Invalid invoice address input')
  return address.padStart(64, '0')
}

function bytes32Word (value) {
  const word = String(value || '').trim().toLowerCase().replace(/^0x/, '')
  if (!/^[0-9a-f]{64}$/.test(word)) throw new Error('Invalid invoice ID')
  return word
}

export function encodePredictInvoiceWithTokens (invoiceId, tokenAddress) {
  return `0x${[
    PREDICT_WITH_TOKENS_SELECTOR,
    addressWord(FIAT_P2P_MERCHANT_ADDRESS),
    bytes32Word(invoiceId),
    '60'.padStart(64, '0'),
    '1'.padStart(64, '0'),
    addressWord(tokenAddress)
  ].join('')}`
}

export function decodePredictedInvoiceAddress (result) {
  const word = String(result || '').trim().toLowerCase().replace(/^0x/, '')
  if (!/^[0-9a-f]{64}$/.test(word) || !/^0{24}[0-9a-f]{40}$/.test(word)) {
    throw new Error('Factory returned an invalid invoice address')
  }
  return `0x${word.slice(-40)}`
}

export async function verifyFiatP2pInvoice (provider, order) {
  if (!provider?.request) throw new Error('Invoice verification provider is unavailable')

  const expected = String(order?.invoiceAddress || '').trim().toLowerCase()
  if (!/^0x[0-9a-f]{40}$/.test(expected)) {
    throw new Error('Backend returned an invalid invoice address')
  }

  const result = await provider.request({
    method: 'eth_call',
    params: [
      {
        to: FIAT_P2P_FACTORY_ADDRESS,
        data: encodePredictInvoiceWithTokens(
          order?.invoiceId,
          order?.token?.address
        )
      },
      'latest'
    ]
  })
  const predicted = decodePredictedInvoiceAddress(result)

  if (predicted !== expected) {
    throw new Error('Invoice verification failed. Do not send funds.')
  }

  return predicted
}

export function classifyFiatP2pInvoiceBalance (balance, expectedBalance) {
  const actual = BigInt(balance || 0)
  const expected = BigInt(expectedBalance || 0)

  if (expected <= 0n) throw new Error('Invalid expected invoice balance')
  if (actual === expected) return 'matched'
  if (actual > expected) return 'overpaid'
  return 'waiting'
}
