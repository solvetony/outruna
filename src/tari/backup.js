import { BACKUP_FORMAT, BACKUP_LIMIT, SCRYPT } from './constants.js'
import { base64, unbase64, utf8 } from './encoding.js'
import { restoreWallet, walletAddress } from './wallet.js'

const aad = (e) => utf8(`${e.format}|${e.version}|${e.network}|${e.address}`)
const validDate = (value) => typeof value === 'string' && Number.isFinite(Date.parse(value))

async function derive (password, salt, signal) {
  signal?.throwIfAborted()
  let worker
  try {
    if (typeof Worker === 'undefined') throw new Error('unavailable')
    worker = new Worker(new URL('./backup-kdf-worker.js', import.meta.url), { type: 'module' })
    return await new Promise((resolve, reject) => {
      const abort = () => finish(reject, new DOMException('Aborted', 'AbortError'))
      const timer = setTimeout(() => finish(reject, new Error('timeout')), 120000)
      const finish = (fn, value) => {
        clearTimeout(timer)
        signal?.removeEventListener('abort', abort)
        fn(value)
      }
      signal?.addEventListener('abort', abort, { once: true })
      worker.onerror = () => finish(reject, new Error('worker'))
      worker.onmessage = ({ data }) => data instanceof Uint8Array ? finish(resolve, data) : finish(reject, new Error('worker'))
      worker.postMessage({ password, salt })
    })
  } catch {
    worker?.terminate()
    signal?.throwIfAborted()
    const { scryptAsync } = await import('@noble/hashes/scrypt.js')
    const bytes = await scryptAsync(password, salt, SCRYPT)
    if (signal?.aborted) { bytes.fill(0); signal.throwIfAborted() }
    return bytes
  } finally { worker?.terminate() }
}

async function keyFor (password, salt, signal) {
  const bytes = await derive(password, salt, signal)
  try { return await crypto.subtle.importKey('raw', bytes, 'AES-GCM', false, ['encrypt', 'decrypt']) } finally { bytes.fill(0) }
}

export async function readBackup (file) {
  if (!file || file.size > BACKUP_LIMIT || file.size < 1) throw new Error('tari.invalidBackup')
  let e
  try { e = JSON.parse(await file.text()) } catch { throw new Error('tari.invalidBackup') }
  validateEnvelope(e)
  return e
}

export function validateEnvelope (e) {
  if (!e || e.format !== BACKUP_FORMAT || e.version !== 1 || e.network !== 'mainnet' ||
    typeof e.address !== 'string' || !/^[1-9A-HJ-NP-Za-km-z]{20,200}$/.test(e.address) || !validDate(e.createdAt) ||
    e.kdf?.name !== 'scrypt' || e.kdf.n !== SCRYPT.N || e.kdf.r !== 8 || e.kdf.p !== 1 || e.kdf.dkLen !== 32 ||
    e.cipher?.name !== 'AES-256-GCM' || typeof e.cipher.ciphertext !== 'string' || e.cipher.ciphertext.length > BACKUP_LIMIT) throw new Error('tari.invalidBackup')
  unbase64(e.kdf.salt, 16)
  unbase64(e.cipher.iv, 12)
  if (unbase64(e.cipher.ciphertext).length < 17) throw new Error('tari.invalidBackup')
}

export async function exportBackup ({ wallet, birthdayMs, password, signal }) {
  if (typeof password !== 'string' || Array.from(password).length < 12) throw new Error('tari.passwordLength')
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const e = { format: BACKUP_FORMAT, version: 1, network: 'mainnet', address: walletAddress(wallet), createdAt: new Date().toISOString(),
    kdf: { name: 'scrypt', n: SCRYPT.N, r: 8, p: 1, dkLen: 32, salt: base64(salt) }, cipher: { name: 'AES-256-GCM', iv: base64(iv) } }
  const key = await keyFor(password, salt, signal)
  signal?.throwIfAborted()
  const plaintext = utf8(JSON.stringify({ backupHex: wallet.getBackupHex(), network: 'mainnet', address: e.address, birthdayMs, createdAt: e.createdAt }))
  try {
    e.cipher.ciphertext = base64(new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: aad(e) }, key, plaintext)))
    signal?.throwIfAborted()
    return new Blob([JSON.stringify(e)], { type: 'application/vnd.outruna.tari-backup+json' })
  } finally { plaintext.fill(0) }
}

export async function importBackup ({ envelope, password, signal }) {
  validateEnvelope(envelope)
  let wallet, plaintext
  try {
    const key = await keyFor(password, unbase64(envelope.kdf.salt, 16), signal)
    plaintext = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unbase64(envelope.cipher.iv, 12), additionalData: aad(envelope) }, key, unbase64(envelope.cipher.ciphertext)))
    const payload = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(plaintext))
    if (payload.network !== 'mainnet' || payload.address !== envelope.address || payload.createdAt !== envelope.createdAt ||
      !Number.isSafeInteger(payload.birthdayMs) || payload.birthdayMs < 0 || payload.birthdayMs > Date.now() + 300000 ||
      typeof payload.backupHex !== 'string' || !/^(?:[0-9a-fA-F]{2}){1,4096}$/.test(payload.backupHex)) throw new Error()
    wallet = await restoreWallet(payload.backupHex)
    payload.backupHex = null
    if (walletAddress(wallet) !== envelope.address) throw new Error()
    signal?.throwIfAborted()
    return { wallet, address: envelope.address, birthdayMs: payload.birthdayMs }
  } catch {
    wallet?.free()
    throw new Error('tari.decryptError')
  } finally { plaintext?.fill(0) }
}
