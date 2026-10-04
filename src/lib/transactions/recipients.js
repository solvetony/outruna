import { getAddress, isAddress } from 'viem'

const key = (userId) => `outruna-recipients-v1:${userId}`
export function recentRecipients (userId) {
  try {
    const values = JSON.parse(localStorage.getItem(key(userId)) || '[]')
    return Array.isArray(values) ? values.filter((value) => value?.source === 'outgoing' && isAddress(value.address || '')).slice(0, 100) : []
  } catch { return [] }
}

export function rememberRecipient (userId, address) {
  if (!userId || !isAddress(address)) return
  const normalized = getAddress(address).toLowerCase()
  try { localStorage.setItem(key(userId), JSON.stringify([{ address: getAddress(address), source: 'outgoing' }, ...recentRecipients(userId).filter((item) => item.address.toLowerCase() !== normalized)].slice(0, 100))) } catch {}
}

export function compareRecipient (address, recipients) {
  if (!isAddress(address || '', { strict: false })) throw new Error('safety.invalid')
  const value = getAddress(address.toLowerCase()).toLowerCase()
  const candidates = recipients.filter((item) => ['outgoing', 'saved'].includes(item.source) && isAddress(item.address || ''))
  const exact = candidates.find((item) => item.address.toLowerCase() === value)
  if (exact) return { exact }
  const similar = candidates.find((item) => {
    const other = item.address.toLowerCase()
    return other !== value && other.slice(2, 12) === value.slice(2, 12) && other.slice(-10) === value.slice(-10)
  })
  return similar ? { similar, entered: getAddress(address.toLowerCase()) } : null
}
