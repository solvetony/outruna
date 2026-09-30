import { useEffect, useRef, useState } from 'preact/hooks'
import { FAUCET } from './faucet.js'
import { restoreViewWallet } from './wallet.js'
import { ownershipPool } from './worker-pool.js'
import { scan } from './scanner.js'
import * as rpc from './rpc.js'

export function useFaucetHistory (revision) {
  const cache = useRef({ outputs: new Map(), height: null, hash: null })
  const [state, setState] = useState({ entries: [], balanceMicro: null, syncing: true, error: false })
  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    let pool
    async function refresh () {
      let wallet
      try {
        setState((old) => ({ ...old, syncing: true, error: false }))
        wallet = await restoreViewWallet(FAUCET.viewKeyHex, FAUCET.address)
        signal.throwIfAborted()
        pool = ownershipPool(wallet, signal)
        const tip = await rpc.tip(signal)
        const birthday = await rpc.birthdayHeight(FAUCET.birthdayMs, signal)
        if (birthday < tip.prunedHeight) throw new Error('tari.rpcData')
        const data = cache.current
        if (data.height != null && (tip.height < data.height || (await rpc.header(data.height, signal)).hash !== data.hash)) {
          data.outputs.clear(); data.height = null; data.hash = null
        }
        await scan({
          from: Math.max(birthday, (data.height ?? birthday) - 10),
          to: tip.height,
          wallet,
          detector: pool,
          signal,
          onBlock (block, outputs) {
            for (const o of outputs) {
              if (!data.outputs.has(o.raw.commitmentHex)) {
                data.outputs.set(o.raw.commitmentHex, {
                  id: o.raw.commitmentHex,
                  hash: o.raw.outputHashHex,
                  amountMicro: o.valueMicro,
                  maturity: o.raw.maturity,
                  createdAt: new Date(block.timestamp * 1000).toISOString(),
                  minedHeight: block.height
                })
              }
            }
            const spent = new Set(block.inputs)
            for (const o of data.outputs.values()) if (spent.has(o.hash)) o.spent = true
            data.height = block.height; data.hash = block.hash
          }
        })
        signal.throwIfAborted()
        const entries = [...data.outputs.values()].sort((a, b) => b.minedHeight - a.minedHeight)
        const balanceMicro = entries.filter((o) => !o.spent).reduce((total, o) => total + BigInt(o.amountMicro), 0n)
        setState({ entries, balanceMicro, syncing: false, error: false })
      } catch {
        if (!signal.aborted) setState((old) => ({ ...old, syncing: false, error: true }))
      } finally { pool?.dispose(); wallet?.free() }
    }
    refresh()
    return () => { controller.abort(); pool?.dispose() }
  }, [revision])
  return state
}
