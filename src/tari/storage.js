import { utf8 } from './encoding.js'
import { restoreWallet, walletAddress } from './wallet.js'

const open = () => new Promise((resolve, reject) => {
  let request
  try { request = indexedDB.open('outruna-tari-v1', 1) } catch { reject(new Error('tari.storageUnavailable')); return }
  request.onupgradeneeded = () => request.result.createObjectStore('wallets')
  request.onsuccess = () => resolve(request.result)
  request.onerror = () => reject(new Error('tari.storageUnavailable'))
  request.onblocked = () => reject(new Error('tari.storageError'))
})

async function record (userId, mode, operation) {
  if (!userId) throw new Error('tari.accountError')
  const db = await open()
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('wallets', mode)
      const request = operation(tx.objectStore('wallets'), `tari-wallet:${userId}`)
      tx.oncomplete = () => resolve(request.result)
      tx.onabort = tx.onerror = () => reject(new Error('tari.storageError'))
    })
  } finally { db.close() }
}

export async function saveWallet (userId, wallet, metadata) {
  const key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt'])
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const address = walletAddress(wallet)
  const plaintext = utf8(JSON.stringify({ ...metadata, address, network: 'mainnet', backupHex: wallet.getBackupHex() }))
  let ciphertext
  try {
    ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: utf8(`outruna-tari-device|1|${userId}|${address}`) }, key, plaintext)
  } finally { plaintext.fill(0) }
  // The old record survives encryption, structured-clone and transaction failures.
  await record(userId, 'readwrite', (store, id) => store.put({ version: 1, address, key, iv, ciphertext }, id))
}

export async function loadWallet (userId) {
  const stored = await record(userId, 'readonly', (store, id) => store.get(id))
  if (!stored) return null
  let wallet, plaintext
  try {
    if (stored.version !== 1 || stored.key.extractable) throw new Error()
    plaintext = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: stored.iv, additionalData: utf8(`outruna-tari-device|1|${userId}|${stored.address}`) }, stored.key, stored.ciphertext))
    const metadata = JSON.parse(new TextDecoder().decode(plaintext))
    wallet = await restoreWallet(metadata.backupHex)
    delete metadata.backupHex
    if (metadata.network !== 'mainnet' || walletAddress(wallet) !== stored.address || metadata.address !== stored.address) throw new Error()
    return { wallet, metadata }
  } catch {
    wallet?.free()
    throw new Error('tari.storageError')
  } finally { plaintext?.fill(0) }
}

export const removeWallet = (userId) => record(userId, 'readwrite', (store, id) => store.delete(id))

export const storedAddress = (userId) => record(userId, 'readonly', (store, id) => store.get(id)).then((value) => value?.address || '')
