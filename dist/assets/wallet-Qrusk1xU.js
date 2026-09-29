let modulePromise;
function loadWasm () {
  if (!modulePromise) modulePromise = import('./tari_l1_wasm-L3ovmdhC.js').catch(() => {
    modulePromise = null;
    throw new Error('tari.wasmError')
  });
  return modulePromise
}

async function viewFromFull (wallet) {
  const { WasmWallet } = await loadWasm();
  const watch = WasmWallet.fromViewKeyAndAddress(wallet.exportPrivateViewKeyHex(), walletAddress(wallet));
  if (!watch.isViewOnly || watch.canSpend || walletAddress(watch) !== walletAddress(wallet)) {
    watch.free();
    throw new Error('tari.wasmError')
  }
  return watch
}

async function restoreViewWallet (viewKeyHex, address) {
  const { WasmWallet } = await loadWasm();
  const watch = WasmWallet.fromViewKeyAndAddress(viewKeyHex, address);
  if (!watch.isViewOnly || watch.canSpend || walletAddress(watch) !== address) {
    watch.free();
    throw new Error('tari.wasmError')
  }
  return watch
}

function walletAddress (wallet) {
  const address = wallet.getAddress();
  try { return address.toBase58() } finally { address.free(); }
}

async function createWallet () {
  const { WasmWallet } = await loadWasm();
  return new WasmWallet('mainnet')
}

async function restoreWallet (backupHex) {
  const { WasmWallet } = await loadWasm();
  return WasmWallet.fromBackupHex(backupHex, 'mainnet')
}

function importOutput (wallet, o) {
  return wallet.importScannedOutput(o.commitmentHex, o.encryptedDataHex, o.senderOffsetPubHex,
    o.scriptHex, o.metadataSigHex, BigInt(o.minimumValuePromise), BigInt(o.maturity),
    o.outputTypeByte, o.rangeProofTypeByte, o.coinbaseExtraHex, o.covenantHex, o.rangeProofHex, o.outputHashHex)
}

function ownsOutput (wallet, o) {
  return wallet.isOutputMine(o.commitmentHex, o.encryptedDataHex, o.senderOffsetPubHex)
}

function viewOutput (wallet, o) {
  return wallet.viewOutput(o.commitmentHex, o.encryptedDataHex, o.senderOffsetPubHex)
}

export { createWallet, importOutput, loadWasm, ownsOutput, restoreViewWallet, restoreWallet, viewFromFull, viewOutput, walletAddress };
