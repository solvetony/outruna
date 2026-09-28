import { useEffect, useRef, useState } from 'preact/hooks'
import { TariWallet } from './state.js'
import { useInterval } from '../shared/hooks.js'

const teardowns = new Map()

export function useTariWallet (userId, active) {
  const [state, setState] = useState({ initialized: false, ready: true, history: [], utxos: [], totalMicro: 0n, availableMicro: 0n, lockedMicro: 0n, pendingMicro: 0n })
  const manager = useRef(null)
  const attempted = useRef(false)
  const teardown = useRef(teardowns.get(userId) || Promise.resolve())
  useEffect(() => {
    const value = new TariWallet(userId, setState)
    teardown.current = teardowns.get(userId) || Promise.resolve()
    manager.current = value
    attempted.current = false
    value.emit()
    return () => {
      const done = value.dispose()
      teardown.current = done
      teardowns.set(userId, done)
      done.finally(() => { if (teardowns.get(userId) === done) teardowns.delete(userId) })
      manager.current = null
    }
  }, [userId])
  useEffect(() => {
    if (!active || attempted.current || !manager.current) return
    attempted.current = true
    const value = manager.current
    teardown.current.then(() => { value.check(); return value.open(true) }).then(() => value.refresh()).catch(() => {})
  }, [active, userId])
  useInterval(() => manager.current?.refresh(), 30000)
  return { ...state, manager }
}
