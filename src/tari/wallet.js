let modulePromise
let viewModulePromise
export function loadWasm () {
  if (!modulePromise) modulePromise = import('@chironbuilder/tari-l1-wasm').catch(() => {
    modulePromise = null
    throw new Error('tari.wasmError')
  })
  return modulePromise
}

export function loadViewWasm () {
  if (!viewModulePromise) viewModulePromise = import('../../vendor/tari-view-wasm/tari_l1_wasm.js').catch(() => {
    viewModulePromise = null
    throw new Error('tari.wasmError')
  })
  return viewModulePromise
}

export async function viewFromFull (wallet) {
  const { WasmWallet } = await loadViewWasm()
  const bridge = WasmWallet.fromBackupHex(wallet.getBackupHex(), 'mainnet')
  let watch
  try { watch = WasmWallet.fromViewKeyAndAddress(bridge.exportPrivateViewKeyHex(), walletAddress(wallet)) } finally { bridge.free() }
  if (!watch.isViewOnly || watch.canSpend || walletAddress(watch) !== walletAddress(wallet)) {
    watch.free()
    throw new Error('tari.wasmError')
  }
  return watch
}

export async function restoreViewWallet (viewKeyHex, address) {
  const { WasmWallet } = await loadViewWasm()
  const watch = WasmWallet.fromViewKeyAndAddress(viewKeyHex, address)
  if (!watch.isViewOnly || watch.canSpend || walletAddress(watch) !== address) {
    watch.free()
    throw new Error('tari.wasmError')
  }
  return watch
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

export function viewOutput (wallet, o) {
  return wallet.viewOutput(o.commitmentHex, o.encryptedDataHex, o.senderOffsetPubHex)
}
