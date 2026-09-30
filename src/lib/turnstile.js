import { externalUrls } from './urls.js'

let loading
export function loadTurnstile () {
  if (globalThis.turnstile) return Promise.resolve(globalThis.turnstile)
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      const fail = () => { clearTimeout(timer); script.remove(); loading = null; reject(new Error('faucet.verificationFailed')) }
      const timer = setTimeout(fail, 15000)
      script.src = externalUrls.turnstile
      script.async = true
      script.onload = () => {
        if (!globalThis.turnstile) return fail()
        clearTimeout(timer); resolve(globalThis.turnstile)
      }
      script.onerror = fail
      document.head.appendChild(script)
    })
  }
  return loading
}
