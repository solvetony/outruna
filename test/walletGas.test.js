import test from 'node:test'
import assert from 'node:assert/strict'
import { supportedChains, getChainSymbol } from '../src/lib/chains.js'
import {
  canPayWithNativeBalance,
  ERC20_TRANSFER_GAS_LIMIT,
  estimateWalletGasLevels,
  getRequiredNativeBalance,
  NATIVE_TRANSFER_GAS_LIMIT
} from '../src/lib/walletGas.js'

const CHAINS = supportedChains.map((chain) => chain.id)
const EXPECTED_NATIVE_SYMBOLS = new Map([
  [1, 'ETH'],
  [10, 'ETH'],
  [137, 'POL'],
  [8453, 'ETH'],
  [42161, 'ETH'],
  [43114, 'AVAX']
])

function make1559Provider ({ estimateGasError = null, gasHex = '0x5208' } = {}) {
  return {
    async request ({ method }) {
      if (method === 'eth_estimateGas') {
        if (estimateGasError) throw estimateGasError
        return gasHex
      }
      if (method === 'eth_getBlockByNumber') return { baseFeePerGas: '0x64' }
      if (method === 'eth_feeHistory') return { reward: [['0x10', '0x20', '0x30']] }
      if (method === 'eth_maxPriorityFeePerGas') return '0x08'
      if (method === 'eth_gasPrice') return '0x32'
      throw new Error(`Unexpected method ${method}`)
    }
  }
}

test('native gas token symbols are correct for all supported chains', () => {
  for (const chain of supportedChains) {
    assert.equal(getChainSymbol(chain), EXPECTED_NATIVE_SYMBOLS.get(chain.id))
  }
})

test('native gas requirement includes the transaction value and maximum gas cost', () => {
  const tx = {
    gas: '0x186a0',
    maxFeePerGas: '0x3b9aca00',
    value: '0xde0b6b3a7640000'
  }

  assert.equal(getRequiredNativeBalance(tx), 1000100000000000000n)
})

test('auto gas can use a sufficient chain-specific native balance', () => {
  const tx = {
    gas: '0x186a0',
    maxFeePerGas: '0x5f5e100',
    value: '0x0'
  }

  assert.equal(canPayWithNativeBalance({
    balance: 100000000000000n,
    tx
  }), true)
  assert.equal(canPayWithNativeBalance({
    balance: 9999999999999n,
    tx
  }), false)
})

test('an explicit native requirement is used for a prepared transaction', () => {
  assert.equal(canPayWithNativeBalance({
    balance: 5000n,
    tx: {},
    requiredBalance: 5000n
  }), true)
  assert.equal(canPayWithNativeBalance({
    balance: 4999n,
    tx: {},
    requiredBalance: 5000n
  }), false)
})

test('estimateWalletGasLevels returns 1559 quotes for all supported chains', async () => {
  for (const chainId of CHAINS) {
    const quotes = await estimateWalletGasLevels({
      provider: make1559Provider(),
      chainId,
      txRequest: {
        to: '0x0000000000000000000000000000000000000001',
        value: '0x1'
      },
      from: '0x0000000000000000000000000000000000000002',
      nativeTokenPrice: '2500'
    })

    assert.equal(quotes.length, 3)
    assert.ok(quotes.every((quote) => quote.support1559))
    assert.equal(quotes[0].gasLimit, 0x5208n)
    assert.ok(Number(quotes[0].usdCost) > 0)
  }
})

test('Arbitrum auto gas does not apply an Ethereum priority-fee floor', async () => {
  const gasLimit = 1222304n
  const baseFeePerGas = 20000000n
  const provider = {
    async request ({ method }) {
      if (method === 'eth_estimateGas') return `0x${gasLimit.toString(16)}`
      if (method === 'eth_getBlockByNumber') return { baseFeePerGas: `0x${baseFeePerGas.toString(16)}` }
      if (method === 'eth_feeHistory') return { reward: [['0x0', '0x0', '0x0']] }
      if (method === 'eth_maxPriorityFeePerGas') return '0x0'
      if (method === 'eth_gasPrice') return '0x1312d00'
      throw new Error(`Unexpected method ${method}`)
    }
  }

  const quotes = await estimateWalletGasLevels({
    provider,
    chainId: 42161,
    txRequest: {
      to: '0x99CF6AC23E730991c2eD5420fbaB2Ca9BB3b3B34',
      data: '0x1234',
      value: '0x0'
    },
    from: '0x728AC839d398F0aF5A7b1791B84985d737D180b5',
    nativeTokenPrice: '3200'
  })

  const fast = quotes.find(quote => quote.level === 'normal')
  assert.equal(fast.maxPriorityFeePerGas, 0n)
  assert.equal(fast.maxFeePerGas, 24000000n)
  assert.equal(canPayWithNativeBalance({
    balance: 821913285029435n,
    tx: {
      gas: gasLimit,
      maxFeePerGas: fast.maxFeePerGas,
      value: 0n
    }
  }), true)
})

test('Ethereum derives its priority fee from live RPC fee data', async () => {
  const baseFeePerGas = 1000000000n
  const networkGasPrice = 2200000000n
  const provider = {
    async request ({ method }) {
      if (method === 'eth_estimateGas') return '0x5208'
      if (method === 'eth_getBlockByNumber') return { baseFeePerGas: `0x${baseFeePerGas.toString(16)}` }
      if (method === 'eth_feeHistory') return { reward: [['0x0', '0x0', '0x0']] }
      if (method === 'eth_maxPriorityFeePerGas') return '0x0'
      if (method === 'eth_gasPrice') return `0x${networkGasPrice.toString(16)}`
      throw new Error(`Unexpected method ${method}`)
    }
  }

  const quotes = await estimateWalletGasLevels({
    provider,
    chainId: 1,
    txRequest: {
      to: '0x0000000000000000000000000000000000000001',
      value: '0x0'
    },
    from: '0x0000000000000000000000000000000000000002',
    nativeTokenPrice: '3200'
  })

  const fast = quotes.find(quote => quote.level === 'normal')
  assert.equal(fast.maxPriorityFeePerGas, 1164000000n)
  assert.equal(fast.maxFeePerGas, 2364000000n)
})

test('estimateWalletGasLevels falls back to 21000 gas for native transfer on all supported chains when estimate hits insufficient funds', async () => {
  const error = new Error('insufficient funds for gas * price + value')
  error.code = -32000

  for (const chainId of CHAINS) {
    const quotes = await estimateWalletGasLevels({
      provider: make1559Provider({ estimateGasError: error }),
      chainId,
      txRequest: {
        to: '0x0000000000000000000000000000000000000001',
        value: '0xde0b6b3a7640000'
      },
      from: '0x0000000000000000000000000000000000000002',
      nativeTokenPrice: '1'
    })

    assert.equal(quotes[0].gasLimit, NATIVE_TRANSFER_GAS_LIMIT)
  }
})

test('estimateWalletGasLevels falls back to ERC20 gas limit on all supported chains when token transfer estimate hits insufficient funds', async () => {
  const error = new Error('insufficient funds for gas * price + value')
  error.code = -32000

  for (const chainId of CHAINS) {
    const quotes = await estimateWalletGasLevels({
      provider: make1559Provider({ estimateGasError: error }),
      chainId,
      txRequest: {
        to: '0x0000000000000000000000000000000000000003',
        data: '0xa9059cbb0000000000000000000000000000000000000000000000000000000000000001',
        value: '0x0'
      },
      from: '0x0000000000000000000000000000000000000002',
      nativeTokenPrice: '1'
    })

    assert.equal(quotes[0].gasLimit, ERC20_TRANSFER_GAS_LIMIT)
  }
})

test('estimateWalletGasLevels falls back to legacy gas price on all supported chains when fee history path is unavailable', async () => {
  const provider = {
    async request ({ method }) {
      if (method === 'eth_estimateGas') return '0x5208'
      if (method === 'eth_getBlockByNumber') throw new Error('unsupported')
      if (method === 'eth_gasPrice') return '0x32'
      throw new Error(`Unexpected method ${method}`)
    }
  }

  for (const chainId of CHAINS) {
    const quotes = await estimateWalletGasLevels({
      provider,
      chainId,
      txRequest: {
        to: '0x0000000000000000000000000000000000000001',
        value: '0x1'
      },
      from: '0x0000000000000000000000000000000000000002',
      nativeTokenPrice: '1'
    })

    assert.equal(quotes.length, 3)
    assert.ok(quotes.every((quote) => !quote.support1559))
    assert.equal(quotes[0].gasLimit, 0x5208n)
  }
})
