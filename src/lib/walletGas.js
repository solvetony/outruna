import { Decimal, toDecimal } from './decimal.js'
import { createReadRpcProvider } from './rpc.js'

export const WALLET_GAS_LEVELS = [
  { level: 'slow', label: 'Standard', baseFeeMultiplier: 110n, priorityMultiplier: 94n },
  { level: 'normal', label: 'Fast', baseFeeMultiplier: 120n, priorityMultiplier: 97n },
  { level: 'fast', label: 'Instant', baseFeeMultiplier: 125n, priorityMultiplier: 98n }
]

export const NATIVE_TRANSFER_GAS_LIMIT = 21000n
export const ERC20_TRANSFER_GAS_LIMIT = 65000n

function parseTransactionQuantity (value) {
  if (value === undefined || value === null || value === '') return 0n

  try {
    return BigInt(value)
  } catch {
    return 0n
  }
}

export function getRequiredNativeBalance (tx = {}, override) {
  if (override !== undefined) return parseTransactionQuantity(override)

  const gasLimit = parseTransactionQuantity(tx.gas || tx.gasLimit)
  const gasPrice = parseTransactionQuantity(tx.maxFeePerGas || tx.gasPrice)
  const value = parseTransactionQuantity(tx.value)
  return (gasLimit * gasPrice) + value
}

export function canPayWithNativeBalance ({ balance, tx, requiredBalance }) {
  const available = parseTransactionQuantity(balance)
  const required = getRequiredNativeBalance(tx, requiredBalance)
  return required > 0n && available >= required
}

function averageBigInt (values) {
  if (!Array.isArray(values) || !values.length) return 0n
  const total = values.reduce((sum, value) => sum + BigInt(value || 0), 0n)
  return total / BigInt(values.length)
}

function isInsufficientFundsError (error) {
  const message = String(error?.message || error || '').toLowerCase()
  const code = String(error?.code || '').toLowerCase()
  return (
    code === '-32000' ||
    message.includes('insufficient funds') ||
    message.includes('gas required exceeds allowance') ||
    message.includes('intrinsic gas too low')
  )
}

function isNativeTransferTx (tx = {}) {
  const data = String(tx.data || tx.input || '0x').trim().toLowerCase()
  const value = String(tx.value || '0x0').trim().toLowerCase()
  return (!data || data === '0x') && value !== '0x0'
}

function fallbackGasLimitForTx (tx = {}) {
  if (isNativeTransferTx(tx)) return NATIVE_TRANSFER_GAS_LIMIT
  return ERC20_TRANSFER_GAS_LIMIT
}

async function estimateGasLimit (readProvider, tx) {
  try {
    const gasHex = tx.gas || tx.gasLimit || await readProvider.request({
      method: 'eth_estimateGas',
      params: [tx]
    })
    return BigInt(gasHex)
  } catch (error) {
    if (!isInsufficientFundsError(error)) throw error
    return fallbackGasLimitForTx(tx)
  }
}

export async function estimateWalletGasLevels ({
  provider,
  chainId,
  txRequest,
  from,
  nativeTokenPrice
}) {
  const readProvider = createReadRpcProvider(provider, chainId)
  const tx = {
    ...txRequest,
    ...(from ? { from } : {})
  }

  const gasLimit = await estimateGasLimit(readProvider, tx)
  const tokenPrice = toDecimal(nativeTokenPrice) || new Decimal(0)

  try {
    const [latestBlock, feeHistory, maxPriorityFeePerGas, networkGasPrice] = await Promise.all([
      readProvider.request({ method: 'eth_getBlockByNumber', params: ['latest', false] }),
      readProvider.request({ method: 'eth_feeHistory', params: ['0x5', 'latest', [10, 20, 30]] }),
      readProvider.request({ method: 'eth_maxPriorityFeePerGas', params: [] }),
      readProvider.request({ method: 'eth_gasPrice', params: [] })
    ])

    if (latestBlock?.baseFeePerGas) {
      const baseFee = BigInt(latestBlock.baseFeePerGas)
      const reportedPriority = BigInt(maxPriorityFeePerGas || '0x0')
      const reportedGasPrice = BigInt(networkGasPrice || '0x0')
      const impliedPriority = reportedGasPrice > baseFee ? reportedGasPrice - baseFee : 0n
      const fallbackPriority = reportedPriority > impliedPriority ? reportedPriority : impliedPriority
      const rewardBuckets = Array.isArray(feeHistory?.reward) ? feeHistory.reward : []
      const percentileAverages = [0, 1, 2].map((index) => {
        const samples = rewardBuckets
          .map((item) => item?.[index])
          .filter(Boolean)
          .map((value) => BigInt(value))
        return averageBigInt(samples)
      })

      return WALLET_GAS_LEVELS.map((level, index) => {
        const suggestedPriority = percentileAverages[index] > 0n ? percentileAverages[index] : fallbackPriority
        const priorityFee = suggestedPriority > 0n
          ? (suggestedPriority * level.priorityMultiplier) / 100n
          : 0n
        const maxFeePerGas = ((baseFee * level.baseFeeMultiplier) / 100n) + priorityFee
        const weiCost = gasLimit * maxFeePerGas

        return {
          level: level.level,
          label: level.label,
          gasLimit,
          support1559: true,
          maxFeePerGas,
          maxPriorityFeePerGas: priorityFee,
          weiCost,
          usdCost: tokenPrice.gt(0)
            ? new Decimal(weiCost.toString()).div('1e18').mul(tokenPrice).toString()
            : '0'
        }
      })
    }
  } catch (error) {
    if (!error) throw new Error('Unable to estimate wallet gas levels')
  }

  const gasPrice = BigInt(await readProvider.request({ method: 'eth_gasPrice', params: [] }))
  return WALLET_GAS_LEVELS.map((level) => {
    const adjustedGasPrice = (gasPrice * level.baseFeeMultiplier) / 100n
    const weiCost = gasLimit * adjustedGasPrice

    return {
      level: level.level,
      label: level.label,
      gasLimit,
      support1559: false,
      gasPrice: adjustedGasPrice,
      weiCost,
      usdCost: tokenPrice.gt(0)
        ? new Decimal(weiCost.toString()).div('1e18').mul(tokenPrice).toString()
        : '0'
    }
  })
}
