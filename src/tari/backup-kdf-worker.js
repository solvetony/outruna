import { scryptAsync } from '@noble/hashes/scrypt.js'
import { SCRYPT } from './constants.js'

self.onmessage = async ({ data }) => {
  try {
    const bytes = await scryptAsync(data.password, data.salt, SCRYPT)
    self.postMessage(bytes, [bytes.buffer])
  } catch { self.postMessage({ error: true }) } finally { self.close() }
}
