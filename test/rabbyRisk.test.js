import test from 'node:test'
import assert from 'node:assert/strict'
import { mapRabbyDescToRisk } from '../src/lib/rabby/addressRisk.js'
import {
  mapRabbyCheckTxToRisk,
  normalizeTxForRabby
} from '../src/lib/rabby/transactionRisk.js'
import {
  checkRabbyGasAccountTxs,
  getSignedRawTransaction,
  normalizeRabbyChainId,
  normalizeRabbyTransactionType,
  getSignedTransactionHash,
  waitForRabbyGasFunding
} from '../src/lib/rabbyGasAccount.js'

const ADDRESS = '0x0000000000000000000000000000000000000001'
const TX_ADDRESS = '0x0000000000000000000000000000000000000002'

test('mapRabbyDescToRisk maps scam and danger addresses to danger', () => {
  assert.equal(mapRabbyDescToRisk(ADDRESS, { is_scam: true }, null).level, 'danger')
  assert.equal(mapRabbyDescToRisk(ADDRESS, { is_danger: true }, null).level, 'danger')
})

test('mapRabbyDescToRisk maps spam address to warning', () => {
  const risk = mapRabbyDescToRisk(ADDRESS, { is_spam: true }, null)
  assert.equal(risk.level, 'warning')
  assert.equal(risk.title, 'Suspicious address')
})

test('mapRabbyDescToRisk maps known exchange to safe', () => {
  const risk = mapRabbyDescToRisk(ADDRESS, { cex: { name: 'Coinbase' } }, null)
  assert.equal(risk.level, 'safe')
  assert.equal(risk.title, 'Known exchange: Coinbase')
})

test('mapRabbyDescToRisk maps empty description to unknown', () => {
  const risk = mapRabbyDescToRisk(ADDRESS, {}, null)
  assert.equal(risk.level, 'unknown')
  assert.equal(risk.title, 'Unknown address')
})

test('mapRabbyCheckTxToRisk maps pass decision to safe', () => {
  const risk = mapRabbyCheckTxToRisk({ decision: 'pass' })
  assert.equal(risk.level, 'safe')
  assert.equal(risk.blocking, false)
  assert.equal(risk.requiresConfirmation, false)
})

test('mapRabbyCheckTxToRisk maps warning decision to confirmation', () => {
  const risk = mapRabbyCheckTxToRisk({ decision: 'warning', warnings: [{ title: 'Unknown recipient' }] })
  assert.equal(risk.level, 'warning')
  assert.equal(risk.requiresConfirmation, true)
  assert.deepEqual(risk.reasons, ['Unknown recipient'])
})

test('mapRabbyCheckTxToRisk maps danger decision to confirmation', () => {
  const risk = mapRabbyCheckTxToRisk({ decision: 'danger', risks: [{ desc: 'Drainer pattern' }] })
  assert.equal(risk.level, 'danger')
  assert.equal(risk.requiresConfirmation, true)
  assert.deepEqual(risk.reasons, ['Drainer pattern'])
})

test('mapRabbyCheckTxToRisk maps forbidden decision to blocking', () => {
  const risk = mapRabbyCheckTxToRisk({ decision: 'forbidden', rules: [{ name: 'Blocked rule' }] })
  assert.equal(risk.level, 'forbidden')
  assert.equal(risk.blocking, true)
  assert.equal(risk.requiresConfirmation, false)
  assert.deepEqual(risk.reasons, ['Blocked rule'])
})

test('Rabby transaction serialization accepts BigInt RPC quantities', () => {
  const tx = normalizeTxForRabby({
    chainId: 1,
    from: ADDRESS,
    to: TX_ADDRESS,
    value: 1000000000000000n,
    nonce: 4n,
    gas: 21000n,
    maxFeePerGas: 30000000000n,
    maxPriorityFeePerGas: 1500000000n,
    data: '0x'
  })

  assert.doesNotThrow(() => JSON.stringify(tx))

  const serialized = JSON.stringify(tx)
  const parsed = JSON.parse(serialized)

  assert.equal(typeof serialized, 'string')
  assert.equal(parsed.value, '0x38d7ea4c68000')
  assert.equal(parsed.nonce, '0x4')
  assert.equal(parsed.gas, '0x5208')
  assert.equal(parsed.maxFeePerGas, '0x6fc23ac00')
  assert.equal(parsed.maxPriorityFeePerGas, '0x59682f00')
})

test('Rabby GasAccount submit normalizes Viem transaction types', () => {
  assert.equal(normalizeRabbyTransactionType('legacy'), '0x0')
  assert.equal(normalizeRabbyTransactionType('eip2930'), '0x1')
  assert.equal(normalizeRabbyTransactionType('eip1559'), '0x2')
  assert.equal(normalizeRabbyTransactionType('eip4844'), '0x3')
  assert.equal(normalizeRabbyTransactionType('eip7702'), '0x4')
  assert.equal(normalizeRabbyTransactionType('0x2'), '0x2')
  assert.equal(normalizeRabbyTransactionType(2), '0x2')
  assert.equal(normalizeRabbyChainId(1n), 1)
  assert.equal(normalizeRabbyChainId('0x2105'), 8453)
})

test('Rabby GasAccount signed transaction hash is derived from raw transaction', async () => {
  const raw = '0x02f86d01808401634567808401dcd650827530940000000000000000000000000000000000000000000000000000000000000080c001a0000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000001'
  const hash = await getSignedTransactionHash(raw)
  assert.match(hash, /^0x[0-9a-f]{64}$/i)
  assert.equal(getSignedRawTransaction({ raw }), raw)
})

test('Rabby Gas Account funding watcher advances after native balance increases', async () => {
  const balances = ['0x10', '0x10', '0x20']
  const delays = []
  const balance = await waitForRabbyGasFunding({
    initialBalance: '0x10',
    pollIntervalMs: 15000,
    readBalance: async () => balances.shift(),
    sleep: async delayMs => delays.push(delayMs)
  })

  assert.equal(balance, 0x20n)
  assert.deepEqual(delays, [15000, 15000])
})

test('Rabby Gas Account funding watcher advances when Rabby broadcasts first', async () => {
  let transactionChecks = 0
  let balanceReads = 0
  const balance = await waitForRabbyGasFunding({
    initialBalance: '0x10',
    readBalance: async () => {
      balanceReads += 1
      return '0x08'
    },
    hasBroadcastTransaction: async () => {
      transactionChecks += 1
      return transactionChecks === 2
    },
    sleep: async () => {}
  })

  assert.equal(balance, 0x08n)
  assert.equal(transactionChecks, 2)
  assert.equal(balanceReads, 2)
})

test('Rabby Gas Account eligibility checks deduplicate and cache identical transactions', async () => {
  let requestCount = 0
  const requestGasCheck = async () => {
    requestCount += 1
    return {
      is_gas_account: true,
      balance_is_enough: true,
      chain_not_support: false
    }
  }

  const request = {
    sig: 'test-signature',
    accountId: '0x0000000000000000000000000000000000000101',
    txList: [{
      chainId: 1,
      from: ADDRESS,
      to: TX_ADDRESS,
      value: '0x1'
    }],
    request: requestGasCheck
  }

  const [first, second] = await Promise.all([
    checkRabbyGasAccountTxs(request),
    checkRabbyGasAccountTxs(request)
  ])
  const cached = await checkRabbyGasAccountTxs(request)

  assert.equal(first.is_gas_account, true)
  assert.deepEqual(second, first)
  assert.deepEqual(cached, first)
  assert.equal(requestCount, 1)
})

test('Rabby Gas Account does not cache an insufficient balance result after a top-up', async () => {
  let requestCount = 0
  const requestGasCheck = async () => {
    requestCount += 1
    return {
      is_gas_account: true,
      balance_is_enough: requestCount > 1,
      chain_not_support: false
    }
  }
  const request = {
    sig: 'test-signature',
    accountId: '0x0000000000000000000000000000000000000103',
    txList: [{
      chainId: 1,
      from: ADDRESS,
      to: TX_ADDRESS,
      value: '0x3'
    }],
    request: requestGasCheck
  }

  const insufficient = await checkRabbyGasAccountTxs(request)
  const afterTopUp = await checkRabbyGasAccountTxs(request)

  assert.equal(insufficient.balance_is_enough, false)
  assert.equal(afterTopUp.balance_is_enough, true)
  assert.equal(requestCount, 2)
})

test('Rabby Gas Account eligibility check cools down and retries a 429 response', async () => {
  let requestCount = 0
  const retries = []
  const requestGasCheck = async () => {
    requestCount += 1
    if (requestCount === 1) {
      const error = new Error('too many requests')
      error.status = 429
      error.retryAfterMs = 0
      throw error
    }
    return {
      is_gas_account: true,
      balance_is_enough: true,
      chain_not_support: false
    }
  }

  const result = await checkRabbyGasAccountTxs({
    sig: 'test-signature',
    accountId: '0x0000000000000000000000000000000000000102',
    txList: [{
      chainId: 8453,
      from: ADDRESS,
      to: TX_ADDRESS,
      value: '0x2'
    }],
    onRateLimit: retry => retries.push(retry),
    request: requestGasCheck
  })

  assert.equal(result.balance_is_enough, true)
  assert.equal(requestCount, 2)
  assert.equal(retries.length, 1)
  assert.equal(retries[0].attempt, 1)
  assert.ok(retries[0].delayMs >= 1500)
})

test('Rabby Gas Account stops after one retry when rate limiting persists', async () => {
  let requestCount = 0
  const requestGasCheck = async () => {
    requestCount += 1
    const error = new Error('too many requests')
    error.status = 429
    error.retryAfterMs = 0
    throw error
  }

  await assert.rejects(
    checkRabbyGasAccountTxs({
      sig: 'test-signature',
      accountId: '0x0000000000000000000000000000000000000104',
      txList: [{
        chainId: 42161,
        from: ADDRESS,
        to: TX_ADDRESS,
        value: '0x4'
      }],
      request: requestGasCheck
    }),
    /Gas Account service is temporarily busy/
  )

  await new Promise(resolve => setTimeout(resolve, 50))
  assert.equal(requestCount, 2)
})

test('Rabby Gas Account eligibility fingerprint includes calldata and gas fields', async () => {
  let requestCount = 0
  const request = async () => {
    requestCount += 1
    return {
      is_gas_account: true,
      balance_is_enough: true,
      chain_not_support: false
    }
  }
  const base = {
    sig: 'test-signature',
    accountId: '0x0000000000000000000000000000000000000105',
    request,
    debounceMs: 0
  }

  await checkRabbyGasAccountTxs({
    ...base,
    txList: [{ chainId: 1, from: ADDRESS, to: TX_ADDRESS, data: '0x01', gas: '0x5208' }]
  })
  await checkRabbyGasAccountTxs({
    ...base,
    txList: [{ chainId: 1, from: ADDRESS, to: TX_ADDRESS, data: '0x02', gas: '0x5208' }]
  })
  await checkRabbyGasAccountTxs({
    ...base,
    txList: [{ chainId: 1, from: ADDRESS, to: TX_ADDRESS, data: '0x02', gas: '0x6000' }]
  })

  assert.equal(requestCount, 3)
})

test('Rabby Gas Account does not cache unsupported eligibility results', async () => {
  let requestCount = 0
  const request = async () => {
    requestCount += 1
    return {
      is_gas_account: false,
      balance_is_enough: false,
      chain_not_support: true
    }
  }
  const input = {
    sig: 'test-signature',
    accountId: '0x0000000000000000000000000000000000000106',
    txList: [{ chainId: 10, from: ADDRESS, to: TX_ADDRESS, value: '0x1' }],
    request,
    debounceMs: 0
  }

  await checkRabbyGasAccountTxs(input)
  await checkRabbyGasAccountTxs(input)

  assert.equal(requestCount, 2)
})
