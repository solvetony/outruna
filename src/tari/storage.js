import { utf8 } from './encoding.js'
import { restoreWallet, restoreViewWallet, walletAddress } from './wallet.js'

const open = () => new Promise((resolve, reject) => {
  let request
  try { request = indexedDB.open('outruna-tari-v1', 1) } catch { reject(new Error('tari.storageUnavailable')); return }
  let settled = false
  const finish = (error) => {
    if (settled) { if (!error) request.result.close(); return }
    settled = true
    clearTimeout(timer)
    if (error) reject(error)
    else resolve(request.result)
  }
  const timer = setTimeout(() => finish(new Error('tari.storageError')), 15000)
  request.onupgradeneeded = () => request.result.createObjectStore('wallets')
  request.onsuccess = () => finish()
  request.onerror = () => finish(new Error('tari.storageUnavailable'))
  request.onblocked = () => finish(new Error('tari.storageError'))
})

function transactionTimeout (tx, reject) {
  return setTimeout(() => {
    try { tx.abort() } catch {}
    reject(new Error('tari.storageError'))
  }, 15000)
}

async function record (userId, mode, operation) {
  if (!userId) throw new Error('tari.accountError')
  const db = await open()
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('wallets', mode)
      const request = operation(tx.objectStore('wallets'), `tari-wallet:${userId}`)
      const timer = transactionTimeout(tx, reject)
      tx.oncomplete = () => { clearTimeout(timer); resolve(request.result) }
      tx.onabort = tx.onerror = () => { clearTimeout(timer); reject(new Error('tari.storageError')) }
    })
  } finally { db.close() }
}

const revisionOf = (value) => value ? value.revision || `legacy:${value.address}` : null

async function updateRecord (userId, expectedRevision, value) {
  if (!userId) throw new Error('tari.accountError')
  const db = await open()
  try {
    await new Promise((resolve, reject) => {
      const tx = db.transaction('wallets', 'readwrite')
      const store = tx.objectStore('wallets')
      const id = `tari-wallet:${userId}`
      const read = store.get(id)
      const timer = transactionTimeout(tx, reject)
      let conflict = false
      read.onsuccess = () => {
        if (expectedRevision !== undefined && revisionOf(read.result) !== expectedRevision) {
          conflict = true
          tx.abort()
          return
        }
        if (value) store.put(value, id)
        else store.delete(id)
      }
      tx.oncomplete = () => { clearTimeout(timer); resolve() }
      tx.onabort = tx.onerror = () => { clearTimeout(timer); reject(new Error(conflict ? 'tari.storageConflict' : 'tari.storageError')) }
    })
  } finally { db.close() }
}

export async function saveWallet (userId, wallet, metadata, expectedRevision) {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const address = walletAddress(wallet)
  const plaintext = utf8(JSON.stringify({ ...metadata, address, network: 'mainnet', backupHex: wallet.getBackupHex() }))
  let ciphertext, key
  try {
    key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt'])
    ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: utf8(`outruna-tari-device|1|${userId}|${address}`) }, key, plaintext)
  } finally { plaintext.fill(0) }
  // The old record survives encryption, structured-clone and transaction failures.
  const revision = crypto.randomUUID()
  await updateRecord(userId, expectedRevision, { version: 1, address, key, iv, ciphertext, revision })
  return revision
}

export async function saveWatchWallet (userId, wallet, metadata, sealedSpend, expectedRevision) {
  if (!sealedSpend) throw new Error('tari.storageError')
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const address = walletAddress(wallet)
  const plaintext = utf8(JSON.stringify({ ...metadata, address, network: 'mainnet', viewKeyHex: wallet.exportPrivateViewKeyHex() }))
  let ciphertext, key
  try {
    key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt'])
    ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: utf8(`outruna-tari-view|2|${userId}|${address}`) }, key, plaintext)
  } finally { plaintext.fill(0) }
  const revision = crypto.randomUUID()
  await updateRecord(userId, expectedRevision, { version: 2, address, key, iv, ciphertext, sealedSpend, revision })
  return revision
}

export async function loadWallet (userId) {
  const stored = await record(userId, 'readonly', (store, id) => store.get(id))
  if (!stored) return null
  let wallet, plaintext
  try {
    if (![1, 2].includes(stored.version) || stored.key.extractable) throw new Error()
    const aad = stored.version === 1 ? `outruna-tari-device|1|${userId}|${stored.address}` : `outruna-tari-view|2|${userId}|${stored.address}`
    plaintext = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: stored.iv, additionalData: utf8(aad) }, stored.key, stored.ciphertext))
    const metadata = JSON.parse(new TextDecoder().decode(plaintext))
    wallet = stored.version === 1 ? await restoreWallet(metadata.backupHex) : await restoreViewWallet(metadata.viewKeyHex, stored.address)
    delete metadata.backupHex
    delete metadata.viewKeyHex
    if (metadata.network !== 'mainnet' || walletAddress(wallet) !== stored.address || metadata.address !== stored.address) throw new Error()
    return { wallet, metadata, revision: revisionOf(stored), legacy: stored.version === 1, sealedSpend: stored.sealedSpend }
  } catch {
    wallet?.free()
    throw new Error('tari.storageError')
  } finally { plaintext?.fill(0) }
}

export const removeWallet = (userId, expectedRevision) => updateRecord(userId, expectedRevision, null)

export const storedIdentity = (userId) => record(userId, 'readonly', (store, id) => store.get(id))
  .then((value) => ({ address: value?.address || '', revision: revisionOf(value) }))
