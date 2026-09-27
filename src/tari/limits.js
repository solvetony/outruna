import { utf8 } from './encoding.js'

export const INPUT_LIMITS = Object.freeze({ amount: 32, address: 512, password: 1024 })
export const RPC_LIMIT = 16 * 1024 * 1024
export const BYTE_FIELD_LIMIT = 64 * 1024

export function boundedText (value, limit, error) {
  if (typeof value !== 'string' || value.length > limit || utf8(value).length > limit) throw new Error(error)
  return value
}

export function parseJson (text, limit, error = 'tari.rpcData') {
  boundedText(text, limit, error)
  let depth = 0, quoted = false, escaped = false
  for (const c of text) {
    if (quoted) {
      if (escaped) escaped = false
      else if (c === '\\') escaped = true
      else if (c === '"') quoted = false
    } else if (c === '"') quoted = true
    else if (c === '{' || c === '[') { if (++depth > 16) throw new Error(error) }
    else if (c === '}' || c === ']') depth--
  }
  try { return JSON.parse(text) } catch { throw new Error(error) }
}

export async function responseJson (response) {
  if (Number(response.headers.get('content-length')) > RPC_LIMIT) {
    await response.body?.cancel()
    throw new Error('tari.rpcData')
  }
  if (!response.body) throw new Error('tari.rpcData')
  const reader = response.body.getReader()
  const decoder = new TextDecoder('utf-8', { fatal: true })
  let size = 0, text = ''
  try {
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > RPC_LIMIT) throw new Error('tari.rpcData')
      text += decoder.decode(value, { stream: true })
    }
    text += decoder.decode()
    return parseJson(text, RPC_LIMIT)
  } finally { await reader.cancel(); reader.releaseLock() }
}
