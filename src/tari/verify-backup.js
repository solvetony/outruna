import { importBackup } from './backup.js'

export async function verifyBackup ({ envelope, password, address, signal }) {
  let restored
  try {
    restored = await importBackup({ envelope, password, signal })
    signal?.throwIfAborted()
    if (!address || restored.address !== address) throw new Error('tari.backupDifferent')
    return { address, verifiedAt: Date.now() }
  } finally { restored?.wallet.free() }
}

export const verificationKey = (userId, address) => `outruna-tari-verified:${userId}:${address}`
