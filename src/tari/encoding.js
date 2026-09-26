export const utf8 = (value) => new TextEncoder().encode(value)
export const base64 = (bytes) => btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(''))
export function unbase64 (value, length) {
  if (typeof value !== 'string' || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)) throw new Error('tari.invalidBackup')
  const bytes = Uint8Array.from(atob(value), (c) => c.charCodeAt(0))
  if (base64(bytes) !== value || (length !== undefined && bytes.length !== length)) throw new Error('tari.invalidBackup')
  return bytes
}
