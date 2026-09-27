import { loadWasm } from './wallet.js'
import { FEE_PER_GRAM } from './constants.js'

export async function signTransaction (wallet, review, handles, tipHeight, signal) {
  signal?.throwIfAborted()
  const { WasmTxBuilder } = await loadWasm()
  signal?.throwIfAborted()
  const builder = new WasmTxBuilder(wallet)
  let consumed = false
  let signed
  try {
    for (const input of review.inputs) {
      const handle = handles.get(input.commitmentHex)
      if (!handle) throw new Error('tari.insufficient')
      builder.addInput(handle)
    }
    builder.addRecipient(review.recipient, review.amountMicro)
    builder.withFeePerGram(FEE_PER_GRAM)
    builder.withTipHeight(BigInt(tipHeight))
    builder.withSenderRevealed(false)
    consumed = true
    signed = builder.build()
    if (signed.feeMicro !== review.feeMicro) throw new Error('tari.feeChanged')
    return { json: signed.toJson(), feeMicro: signed.feeMicro.toString(), changeValueMicro: signed.changeValueMicro?.toString() || '0', changeCommitmentHex: signed.changeCommitmentHex || null }
  } finally {
    if (!consumed) builder.free()
    signed?.free()
  }
}
