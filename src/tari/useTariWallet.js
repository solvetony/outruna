import { useEffect, useRef, useState } from 'preact/hooks'
import { TariWallet } from './state.js'

export function useTariWallet (userId, active) {
  const [state, setState] = useState({ initialized: false, ready: true, history: [], utxos: [], totalMicro: 0n, availableMicro: 0n, lockedMicro: 0n, pendingMicro: 0n })
  const manager = useRef(null)
  const attempted = useRef(false)
  useEffect(() => {
    const value = new TariWallet(userId, setState)
    manager.current = value
    attempted.current = false
    value.emit()
    return () => { value.dispose(); manager.current = null }
  }, [userId])
  useEffect(() => {
    if (!active || attempted.current || !manager.current) return
    attempted.current = true
    manager.current.open(true).then(() => manager.current?.refresh()).catch(() => {})
  }, [active, userId])
  useEffect(() => {
    const timer = setInterval(() => manager.current?.refresh(), 30000)
    return () => clearInterval(timer)
  }, [userId])
  return { ...state, manager }
}
