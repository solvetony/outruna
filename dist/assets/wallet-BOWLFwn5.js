let modulePromise;
let viewModulePromise;
function loadWasm () {
  if (!modulePromise) modulePromise = import('./tari_l1_wasm-DUJKpwz1.js').catch(() => {
    modulePromise = null;
    throw new Error('tari.wasmError')
  });
  return modulePromise
}

function loadViewWasm () {
  if (!viewModulePromise) viewModulePromise = import('./tari_l1_wasm-D4rpCaJ7.js').catch(() => {
    viewModulePromise = null;
    throw new Error('tari.wasmError')
  });
  return viewModulePromise
}

async function viewFromFull (wallet) {
  const { WasmWallet } = await loadViewWasm();
  const bridge = WasmWallet.fromBackupHex(wallet.getBackupHex(), 'mainnet');
  let watch;
  try { watch = WasmWallet.fromViewKeyAndAddress(bridge.exportPrivateViewKeyHex(), walletAddress(wallet)); } finally { bridge.free(); }
  if (!watch.isViewOnly || watch.canSpend || walletAddress(watch) !== walletAddress(wallet)) {
    watch.free();
    throw new Error('tari.wasmError')
  }
  return watch
}

async function restoreViewWallet (viewKeyHex, address) {
  const { WasmWallet } = await loadViewWasm();
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

export { createWallet, importOutput, loadViewWasm, loadWasm, ownsOutput, restoreViewWallet, restoreWallet, viewFromFull, viewOutput, walletAddress };
