import { FAUCET } from './faucet.js'

const key = `mainnet:${FAUCET.address}:${FAUCET.birthdayMs}`
const hex = (value) => typeof value === 'string' && /^[0-9a-f]{64}$/.test(value)

function valid (value) {
  return value?.version === 1 && Number.isSafeInteger(value.height) && value.height >= 0 && hex(value.hash) &&
    Array.isArray(value.entries) && value.entries.length <= 100000 && value.entries.every((entry) =>
      hex(entry.id) && hex(entry.hash) && typeof entry.amountMicro === 'string' && /^\d{1,20}$/.test(entry.amountMicro) &&
      typeof entry.maturity === 'string' && /^\d{1,20}$/.test(entry.maturity) &&
      Number.isSafeInteger(entry.minedHeight) && entry.minedHeight >= 0 && entry.minedHeight <= value.height &&
      typeof entry.createdAt === 'string' && entry.createdAt.length <= 40 && Number.isFinite(Date.parse(entry.createdAt)) &&
      (entry.spent === undefined || typeof entry.spent === 'boolean'))
}

function record (value) {
  return new Promise((resolve) => {
    let request, db, tx, settled = false
    const finish = (result = null) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      db?.close()
      resolve(result)
    }
    const timer = setTimeout(() => { try { tx?.abort() } catch {} finish() }, 2000)
    try {
      request = indexedDB.open('outruna-tari-faucet-v1', 1)
      request.onupgradeneeded = () => request.result.createObjectStore('history')
      request.onerror = request.onblocked = () => finish()
      request.onsuccess = () => {
        db = request.result
        if (settled) { db.close(); return }
        try {
          tx = db.transaction('history', value === undefined ? 'readonly' : 'readwrite')
          const store = tx.objectStore('history')
          const operation = value === undefined ? store.get(key) : store.put(value, key)
          tx.oncomplete = () => finish(value === undefined ? operation.result : true)
          tx.onabort = tx.onerror = () => finish()
        } catch { finish() }
      }
    } catch { finish() }
  })
}

export async function loadFaucetCache () {
  const value = await record()
  return valid(value) ? { outputs: new Map(value.entries.map((entry) => [entry.id, entry])), height: value.height, hash: value.hash } : null
}

export function saveFaucetCache (data) {
  const value = { version: 1, height: data.height, hash: data.hash, entries: [...data.outputs.values()].map((entry) => ({
    id: entry.id, hash: entry.hash, amountMicro: entry.amountMicro, maturity: entry.maturity,
    createdAt: entry.createdAt, minedHeight: entry.minedHeight, ...(entry.spent === undefined ? {} : { spent: entry.spent })
  })) }
  return valid(value) ? record(value) : Promise.resolve(null)
}
