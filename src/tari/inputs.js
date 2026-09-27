import { FEE_PER_GRAM, MAX_MICRO } from './constants.js'

export function spendable (utxos, handles, tipHeight) {
  return utxos.filter((u) => !u.spentHeight && !u.pending && !u.reserved && (!handles || handles.has(u.commitmentHex)) &&
    (BigInt(u.maturity) === 0n || (tipHeight !== null && BigInt(tipHeight) >= BigInt(u.maturity))))
    .sort((a, b) => BigInt(a.valueMicro) === BigInt(b.valueMicro)
      ? a.commitmentHex.localeCompare(b.commitmentHex)
      : BigInt(a.valueMicro) > BigInt(b.valueMicro) ? -1 : 1)
}

export function feeFor (calculateFee, inputs, outputs = 2) {
  return calculateFee(FEE_PER_GRAM, 1, inputs, outputs, 264)
}

export function selectInputs (utxos, amount, calculateFee) {
  if (amount <= 0n || amount > MAX_MICRO) throw new Error('tari.invalidAmount')
  let total = 0n
  const inputs = []
  for (const u of utxos) {
    total += BigInt(u.valueMicro)
    if (total > MAX_MICRO) throw new Error('tari.invalidAmount')
    inputs.push(u)
    const feeMicro = feeFor(calculateFee, inputs.length)
    if (total >= amount + feeMicro) return { inputs, amountMicro: amount, feeMicro, totalMicro: total }
  }
  throw new Error('tari.insufficient')
}

export function maximum (utxos, calculateFee) {
  let best = 0n
  let total = 0n
  for (let i = 0; i < utxos.length; i++) {
    total += BigInt(utxos[i].valueMicro)
    const result = total - feeFor(calculateFee, i + 1)
    if (result > best && result <= MAX_MICRO) best = result
  }
  return best
}
