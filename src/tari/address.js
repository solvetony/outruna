import { loadWasm } from './wallet.js'

export async function normalizeAddress (value) {
  const { WasmTariAddress } = await loadWasm()
  for (const method of ['fromBase58', 'fromEmoji', 'fromHex']) {
    let address
    try { address = WasmTariAddress[method](String(value).trim()) } catch { continue }
    try {
      if (address.network.toLowerCase() !== 'mainnet') throw new Error('tari.invalidAddress')
      if (address.isSingle) throw new Error('tari.singleAddress')
      return address.toBase58()
    } finally { address.free() }
  }
  throw new Error('tari.invalidAddress')
}
