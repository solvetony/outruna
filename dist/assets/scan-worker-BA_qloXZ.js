let wallet;
self.onmessage = async ({ data }) => {
  try {
    const { restoreWallet, ownsOutput } = await import('./wallet-C9EItEIl.js');
    if (data.action === 'init') {
      wallet?.free();
      wallet = await restoreWallet(data.backupHex);
      self.postMessage(true);
    } else {
      self.postMessage(data.outputs.map((o) => ownsOutput(wallet, o)));
    }
  } catch { self.postMessage({ error: true }); }
};
