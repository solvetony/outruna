import { getAddress, isAddress, toHex } from 'viem'

function normalizeHexValue (value) {
  if (!value) return '0x0'
  if (typeof value === 'string' && value.startsWith('0x')) return value

  try {
    return toHex(BigInt(value))
  } catch {
    return '0x0'
  }
}

function normalizeOptionalHexValue (value) {
  if (value === null || value === undefined || value === '') return undefined
  return normalizeHexValue(value)
}

function normalizeTxForRabby (tx) {
  if (!tx?.from || !tx?.to) return null
  if (!isAddress(tx.from) || !isAddress(tx.to)) return null

  return {
    chainId: Number(tx.chainId),
    from: getAddress(tx.from),
    to: getAddress(tx.to),
    value: normalizeHexValue(tx.value),
    data: tx.data || '0x',
    nonce: normalizeOptionalHexValue(tx.nonce),
    gas: normalizeOptionalHexValue(tx.gas),
    gasPrice: normalizeOptionalHexValue(tx.gasPrice),
    maxFeePerGas: normalizeOptionalHexValue(tx.maxFeePerGas),
    maxPriorityFeePerGas: normalizeOptionalHexValue(tx.maxPriorityFeePerGas)
  }
}

export { normalizeTxForRabby }

export function mapRabbyCheckTxToRisk (response) {
  const decision = response?.decision || response?.risk?.decision || 'unknown'
  const rules = Array.isArray(response?.rules) ? response.rules : []
  const risks = Array.isArray(response?.risks) ? response.risks : []
  const warnings = Array.isArray(response?.warnings) ? response.warnings : []

  const reasons = [
    ...rules.map((item) => item?.desc || item?.title || item?.name).filter(Boolean),
    ...risks.map((item) => item?.desc || item?.title || item?.name).filter(Boolean),
    ...warnings.map((item) => item?.desc || item?.title || item?.name).filter(Boolean)
  ]

  let level = 'unknown'
  let title = 'Transaction risk unknown'
  let blocking = false
  let requiresConfirmation = false

  if (decision === 'pass') {
    level = 'safe'
    title = 'Transaction check passed'
  } else if (decision === 'warning') {
    level = 'warning'
    title = 'Transaction warning'
    requiresConfirmation = true
  } else if (decision === 'danger') {
    level = 'danger'
    title = 'Dangerous transaction'
    requiresConfirmation = true
  } else if (decision === 'forbidden') {
    level = 'forbidden'
    title = 'Transaction blocked'
    blocking = true
  }

  return {
    level,
    title,
    decision,
    reasons: [...new Set(reasons)].slice(0, 5),
    blocking,
    requiresConfirmation,
    raw: response,
    source: 'rabby'
  }
}

export async function checkWithdrawalTransactionRisk ({ tx, origin, fromAddress }) {
  const normalizedTx = normalizeTxForRabby(tx)

  if (!normalizedTx) {
    return {
      level: 'invalid',
      title: 'Invalid transaction draft',
      reasons: ['Transaction is missing valid from/to address'],
      blocking: true,
      requiresConfirmation: false,
      source: 'local'
    }
  }

  try {
    const { rabbyCheckTx } = await import('./client.js')
    const result = await rabbyCheckTx({
      tx: normalizedTx,
      origin: origin || window.location.origin,
      userAddress: fromAddress && isAddress(fromAddress)
        ? getAddress(fromAddress)
        : normalizedTx.from,
      updateNonce: false
    })

    return mapRabbyCheckTxToRisk(result)
  } catch (err) {
    return {
      level: 'unavailable',
      title: 'Transaction risk check unavailable',
      reasons: [],
      blocking: false,
      requiresConfirmation: false,
      source: 'rabby',
      error: err?.message || 'Rabby checkTx failed'
    }
  }
}
