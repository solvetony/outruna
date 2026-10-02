import { useEffect, useRef, useState } from 'preact/hooks'
import { FAUCET } from './faucet.js'
import { restoreViewWallet } from './wallet.js'
import { ownershipPool } from './worker-pool.js'
import { scan } from './scanner.js'
import * as rpc from './rpc.js'
import { loadFaucetCache, saveFaucetCache } from './faucet-cache.js'

const balances = (data) => {
  const entries = [...data.outputs.values()].sort((a, b) => b.minedHeight - a.minedHeight)
  return { entries, balanceMicro: entries.filter((o) => !o.spent).reduce((total, o) => total + BigInt(o.amountMicro), 0n) }
}

export function useFaucetHistory (revision) {
  const cache = useRef({ outputs: new Map(), height: null, hash: null })
  const [state, setState] = useState({ entries: [], balanceMicro: null, syncing: true, error: false })
  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    let pool
    async function refresh () {
      let wallet
      let data
      try {
        setState((old) => ({ ...old, syncing: true, error: false }))
        const saved = cache.current.height == null ? await loadFaucetCache() : cache.current
        signal.throwIfAborted()
        data = saved ? { ...saved, outputs: new Map([...saved.outputs].map(([id, entry]) => [id, { ...entry }])) } : { outputs: new Map(), height: null, hash: null }
        if (data.height != null) setState({ ...balances(data), syncing: true, error: false })
        wallet = await restoreViewWallet(FAUCET.viewKeyHex, FAUCET.address)
        signal.throwIfAborted()
        pool = ownershipPool(wallet, signal)
        const tip = await rpc.tip(signal)
        const birthday = await rpc.birthdayHeight(FAUCET.birthdayMs, signal)
        if (birthday < tip.prunedHeight) throw new Error('tari.rpcData')
        if (data.height != null && (tip.height < data.height || (await rpc.header(data.height, signal)).hash !== data.hash)) {
          data.outputs.clear(); data.height = null; data.hash = null
          setState({ entries: [], balanceMicro: null, syncing: true, error: false })
        }
        await scan({
          from: Math.max(birthday, (data.height ?? birthday) - 10),
          to: tip.height,
          wallet,
          detector: pool,
          signal,
          async onBlock (block, outputs) {
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
            cache.current = data
            if (block.height % 50 === 0) await saveFaucetCache(data)
          }
        })
        signal.throwIfAborted()
        await saveFaucetCache(data)
        signal.throwIfAborted()
        cache.current = data
        setState({ ...balances(data), syncing: false, error: false })
      } catch {
        if (!signal.aborted) {
          if (data?.height != null) await saveFaucetCache(data)
          if (!signal.aborted) setState((old) => ({ ...old, syncing: false, error: true }))
        }
      } finally { pool?.dispose(); wallet?.free() }
    }
    refresh()
    return () => { controller.abort(); pool?.dispose() }
  }, [revision])
  return state
}
