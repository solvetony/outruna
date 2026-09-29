let wallet;
self.onmessage = async ({ data }) => {
  try {
    const { restoreViewWallet, ownsOutput } = await import('./wallet-Qrusk1xU.js');
    if (data.action === 'init') {
      wallet?.free();
      wallet = await restoreViewWallet(data.viewKeyHex, data.address);
      self.postMessage(true);
    } else {
      self.postMessage(data.outputs.map((o) => ownsOutput(wallet, o)));
    }
  } catch { self.postMessage({ error: true }); }
};
