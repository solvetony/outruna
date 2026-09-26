import { ownsOutput } from './wallet.js'
import { pause } from './rpc.js'

export function workerCount () {
  return Math.min(4, Math.max(1, (globalThis.navigator?.hardwareConcurrency || 2) - 1))
}

export function ownershipPool (wallet, signal) {
  let workers = []
  const waiting = new Set()
  const dispose = () => {
    workers.forEach((w) => w.terminate())
    workers = []
    for (const cancel of [...waiting]) cancel()
  }
  signal?.addEventListener('abort', dispose, { once: true })
  const call = (worker, message) => new Promise((resolve, reject) => {
    const finish = (fn, value) => { clearTimeout(timer); waiting.delete(cancel); worker.onmessage = worker.onerror = null; fn(value) }
    const cancel = () => finish(reject, new Error('tari.workerError'))
    const timer = setTimeout(cancel, 30000)
    waiting.add(cancel)
    worker.onerror = cancel
    worker.onmessage = ({ data }) => data?.error ? cancel() : finish(resolve, data)
    worker.postMessage(message)
  })
  const ready = (async () => {
    try {
      for (let i = 0; i < workerCount(); i++) workers.push(new Worker(new URL('./scan-worker.js', import.meta.url), { type: 'module' }))
      await Promise.all(workers.map((w) => call(w, { action: 'init', backupHex: wallet.getBackupHex() })))
    } catch { dispose() }
  })()
  return {
    dispose () { dispose(); signal?.removeEventListener('abort', dispose) },
    async detect (outputs) {
      await ready
      signal?.throwIfAborted()
      if (workers.length) {
        try {
          const size = Math.ceil(outputs.length / workers.length)
          const results = await Promise.all(workers.map((w, i) => call(w, { action: 'detect', outputs: outputs.slice(i * size, (i + 1) * size) })))
          signal?.throwIfAborted()
          return outputs.filter((_, i) => results.flat()[i])
        } catch { dispose(); signal?.throwIfAborted() }
      }
      const owned = []
      for (let i = 0; i < outputs.length; i++) {
        if (i % 32 === 0) await pause(0, signal)
        if (ownsOutput(wallet, outputs[i])) owned.push(outputs[i])
      }
      return owned
    }
  }
}
