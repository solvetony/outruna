let modulePromise
export function loadWasm () {
  if (!modulePromise) modulePromise = import('@chironbuilder/tari-l1-wasm').catch(() => {
    modulePromise = null
    throw new Error('tari.wasmError')
  })
  return modulePromise
}

export function walletAddress (wallet) {
  const address = wallet.getAddress()
  try { return address.toBase58() } finally { address.free() }
}

export async function createWallet () {
  const { WasmWallet } = await loadWasm()
  return new WasmWallet('mainnet')
}

export async function restoreWallet (backupHex) {
  const { WasmWallet } = await loadWasm()
  return WasmWallet.fromBackupHex(backupHex, 'mainnet')
}

export function importOutput (wallet, o) {
  return wallet.importScannedOutput(o.commitmentHex, o.encryptedDataHex, o.senderOffsetPubHex,
    o.scriptHex, o.metadataSigHex, BigInt(o.minimumValuePromise), BigInt(o.maturity),
    o.outputTypeByte, o.rangeProofTypeByte, o.coinbaseExtraHex, o.covenantHex, o.rangeProofHex, o.outputHashHex)
}

export function ownsOutput (wallet, o) {
  return wallet.isOutputMine(o.commitmentHex, o.encryptedDataHex, o.senderOffsetPubHex)
}
