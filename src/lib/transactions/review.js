import { formatUnits } from 'viem'
import registry from '../../../shared/outruna-builtin-tokens.json' with { type: 'json' }
import { supportedChains } from '../chains.js'
import { decodeTokenCall, validateTransaction } from './decode.js'
import { compareRecipient } from './recipients.js'

export const transactionFingerprint = (tx) => JSON.stringify(Object.keys(tx).sort().map((key) => [key, String(tx[key])]))

export function createReview (draft, context = {}, recipients = []) {
  const tx = validateTransaction(draft)
  const network = supportedChains.find((chain) => chain.id === tx.chainId)
  const token = registry[String(tx.chainId)]?.find((asset) => !asset.native && asset.address.toLowerCase() === tx.to.toLowerCase())
  const asset = token || { symbol: tx.to, decimals: null }
  const decoded = decodeTokenCall(tx.data)
  if (context.purpose === 'swap' && decoded) throw new Error('safety.mismatch')
  if (decoded && BigInt(tx.value) !== 0n) throw new Error('safety.mismatch')
  if (context.chainId && Number(context.chainId) !== tx.chainId) throw new Error('safety.mismatch')
  if (context.token && context.token.toLowerCase() !== tx.to.toLowerCase()) throw new Error('safety.mismatch')
  if (context.recipient && (decoded?.recipient || tx.to).toLowerCase() !== context.recipient.toLowerCase()) throw new Error('safety.mismatch')
  if (context.spender && decoded?.type === 'approve' && decoded.recipient.toLowerCase() !== context.spender.toLowerCase()) throw new Error('safety.mismatch')
  if (context.amount != null && decoded?.type === 'send' && decoded.amount !== BigInt(context.amount)) throw new Error('safety.mismatch')
  if (context.amount != null && tx.data === '0x' && BigInt(tx.value) !== BigInt(context.amount)) throw new Error('safety.mismatch')
  const display = (amount, item) => item.decimals == null ? amount.toString() : formatUnits(amount, item.decimals)
  let action
  if (decoded) action = { ...decoded, asset, amount: display(decoded.amount, asset), rawAmount: decoded.amount.toString() }
  else if (tx.data === '0x') action = { type: 'send', recipient: tx.to, asset: network.nativeCurrency, amount: formatUnits(BigInt(tx.value), network.nativeCurrency.decimals) }
  else action = { type: context.purpose === 'swap' ? 'swap' : 'unknown', recipient: tx.to, amount: formatUnits(BigInt(tx.value), network.nativeCurrency.decimals), asset: network.nativeCurrency }
  const unknown = tx.data !== '0x' && !decoded
  const poisoning = action.type === 'send' ? compareRecipient(action.recipient, recipients) : null
  const fee = BigInt(tx.gas || 0) * BigInt(tx.maxFeePerGas || tx.gasPrice || 0)
  return { network, action, context: { ...context }, raw: tx, fingerprint: transactionFingerprint(tx), poisoning,
    fees: fee ? `${formatUnits(fee, network.nativeCurrency.decimals)} ${network.nativeCurrency.symbol}` : null,
    warnings: [...(unknown ? ['unknown'] : []), ...(decoded?.unlimited ? ['unlimited'] : []), ...(poisoning?.similar ? ['poisoning'] : [])] }
}

export function assertReviewedTransaction (review, tx) {
  if (review.fingerprint !== transactionFingerprint(validateTransaction(tx))) throw new Error('safety.mismatch')
}

export function reviewPolicy (review, risk) {
  return { blocking: Boolean(risk?.blocking || risk?.level === 'forbidden'), requiresConfirmation: Boolean(risk?.requiresConfirmation || review.warnings.length) }
}
