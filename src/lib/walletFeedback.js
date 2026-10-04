import { Decimal, toDecimal } from './decimal.js'
import { parseBigIntValue } from './format.js'
import { parseAmountToBaseUnits } from './swap.js'

export function portfolioValuation (assets, known = true) {
  let total = new Decimal(0), priced = 0, missing = 0
  for (const asset of assets) {
    if (parseBigIntValue(asset.rawBalance) <= 0n) continue
    const value = toDecimal(asset.usdValue)
    if (value?.isFinite() && value.gte(0)) { total = total.add(value); priced++ } else missing++
  }
  return { total: total.toString(), status: !known ? 'unknown' : missing ? priced ? 'partial' : 'unavailable' : 'known' }
}

export function withdrawalFeedback ({ asset, amount, recipient, feeWei = 0n, nativeBalance, gasMode }) {
  let amountError = null
  if (asset) {
    const raw = parseAmountToBaseUnits(amount, asset.decimals ?? 18)
    if (raw == null || raw <= 0n) amountError = 'amountInvalid'
    else if (raw > parseBigIntValue(asset.rawBalance)) amountError = 'amountBalance'
    else if ((gasMode !== 'gas_account' || parseBigIntValue(nativeBalance) >= feeWei) && feeWei > 0n && (asset.native
      ? raw + feeWei >= parseBigIntValue(asset.rawBalance)
      : feeWei > parseBigIntValue(nativeBalance))) amountError = 'amountFee'
  }
  const recipientError = !recipient ? 'recipientRequired' : /^0x[a-fA-F0-9]{40}$/.test(recipient.trim()) ? null : 'recipientInvalid'
  return { amountError, recipientError }
}
