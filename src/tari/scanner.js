import * as rpc from './rpc.js'
import { importOutput } from './wallet.js'

export async function scan ({ from, to, wallet, detector, signal, onBlock, client = rpc }) {
  let safe = from - 1
  for (let start = from; start <= to; start += 50) {
    signal?.throwIfAborted()
    const end = Math.min(to, start + 49)
    const blocks = await client.blocks(start, end, signal)
    if (blocks.length !== end - start + 1) throw new Error('tari.rpcData')
    for (const block of blocks) {
      signal?.throwIfAborted()
      if (block.height !== safe + 1) throw new Error('tari.rpcData')
      const unique = [...new Map(block.outputs.map((o) => [o.commitmentHex, o])).values()]
      const owned = await detector.detect(unique)
      const raw = owned.length ? await client.hydrate(block, owned, signal) : []
      signal?.throwIfAborted()
      if (raw.length !== owned.length) throw new Error('tari.rpcData')
      const outputs = []
      try {
        for (const o of raw) {
          const handle = importOutput(wallet, o)
          outputs.push({ raw: o, handle, valueMicro: handle.valueMicro.toString() })
        }
        signal?.throwIfAborted()
        await onBlock(block, outputs)
        safe = block.height
      } finally { outputs.forEach((o) => o.handle.free()) }
    }
  }
  return safe
}
