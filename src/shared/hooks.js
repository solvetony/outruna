import { useEffect, useRef } from 'preact/hooks'

export function useEventListener (target, event, listener, enabled = true) {
  const targetRef = useRef(target)
  const listenerRef = useRef(listener)
  targetRef.current = target
  listenerRef.current = listener

  useEffect(() => {
    if (!enabled) return
    const node = typeof targetRef.current === 'function' ? targetRef.current() : targetRef.current
    if (!node?.addEventListener) return
    const handler = (event) => listenerRef.current?.(event)
    node.addEventListener(event, handler)
    return () => node.removeEventListener(event, handler)
  }, [event, enabled])
}

export function useInterval (callback, delay) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    if (delay == null) return
    const timer = setInterval(() => callbackRef.current?.(), delay)
    return () => clearInterval(timer)
  }, [delay])
}
