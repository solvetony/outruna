import { api, externalUrls } from '../lib/urls.js'
import { unbase64 } from './encoding.js'

export function bytesHex (value, length, encoding) {
  if (value && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Uint8Array)) value = value.data
  let bytes
  if (Array.isArray(value) || value instanceof Uint8Array) {
    if (!Array.from(value).every((n) => Number.isInteger(n) && n >= 0 && n <= 255)) throw new Error('tari.rpcData')
    bytes = Uint8Array.from(value)
  } else if (typeof value === 'string') {
    const hex = value.replace(/^0x/, '')
    if (encoding !== 'base64' && /^(?:[a-fA-F0-9]{2})*$/.test(hex)) bytes = Uint8Array.from(hex.match(/../g) || [], (h) => parseInt(h, 16))
    else bytes = unbase64(value)
  } else throw new Error('tari.rpcData')
  if (length !== undefined && bytes.length !== length) throw new Error('tari.rpcData')
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
}

export function integer (v) {
  if ((typeof v !== 'number' && typeof v !== 'string') || !/^\d+$/.test(String(v)) || !Number.isSafeInteger(Number(v))) throw new Error('tari.rpcData')
  return Number(v)
}

export function pause (ms, signal) {
  signal?.throwIfAborted()
  return new Promise((resolve, reject) => {
    const abort = () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')) }
    const timer = setTimeout(() => { signal?.removeEventListener('abort', abort); resolve() }, ms)
    signal?.addEventListener('abort', abort, { once: true })
  })
}

export async function request (url, { signal, body, delays = [2000, 5000, 15000, 30000] } = {}) {
  for (let attempt = 0; ; attempt++) {
    signal?.throwIfAborted()
    const controller = new AbortController()
    const abort = () => controller.abort()
    signal?.addEventListener('abort', abort, { once: true })
    const timer = setTimeout(abort, 30000)
    let retry = true
    try {
      const response = await fetch(url, { method: body ? 'POST' : 'GET', credentials: 'omit', referrerPolicy: 'no-referrer',
        headers: body ? { 'Content-Type': 'application/json' } : { Accept: 'application/json' },
        body: body ? JSON.stringify(body) : undefined, signal: controller.signal })
      if (!response.ok) {
        retry = response.status === 429 || response.status >= 500
        throw new Error('tari.rpcError')
      }
      return await response.json()
    } catch {
      signal?.throwIfAborted()
      if (body || !retry || attempt >= delays.length) throw new Error(body ? 'tari.broadcastUnknown' : 'tari.rpcError')
    } finally { clearTimeout(timer); signal?.removeEventListener('abort', abort) }
    await pause(delays[attempt], signal)
  }
}

const get = (path, params, signal) => request(`${externalUrls.tariRpc}/${path}?${new URLSearchParams(params)}`, { signal })

export async function tip (signal) {
  const j = await get('get_tip_info', {}, signal)
  if (j.is_synced === false) throw new Error('tari.rpcError')
  return { height: integer(j.metadata?.best_block_height), prunedHeight: integer(j.metadata?.pruned_height), timestamp: integer(j.metadata?.timestamp) }
}

export async function birthdayHeight (birthdayMs, signal) {
  const j = await get('get_height_at_time', { time: Math.max(0, Math.floor(birthdayMs / 1000) - 7200) }, signal)
  return integer(typeof j === 'object' ? j.height : j)
}

export async function header (height, signal) {
  const j = await get('get_header_by_height', { height }, signal)
  return { hash: bytesHex(j.hash || j.header?.hash, 32), height: integer(j.height ?? j.header?.height) }
}

export async function blocks (from, to, signal) {
  const result = []
  let next = from
  while (next <= to) {
    const start = await header(next, signal)
    let j
    for (const limit of [Math.min(20, to - next + 1), 100, 500]) {
      j = await get('sync_utxos_by_block', { start_header_hash: start.hash, limit, page: 0, exclude_spent: false, exclude_inputs: false, version: 1 }, signal)
      if (!j.next_header_to_scan || bytesHex(j.next_header_to_scan, 32) !== start.hash) break
    }
    if (!Array.isArray(j.blocks) || !j.blocks.length) throw new Error('tari.rpcData')
    const grouped = new Map()
    for (const b of j.blocks) {
      const height = integer(b.height)
      if (height < next || !Array.isArray(b.outputs) || !Array.isArray(b.inputs)) throw new Error('tari.rpcData')
      if (height > to) continue
      const hash = bytesHex(b.header_hash, 32, 'base64')
      const block = grouped.get(height) || { height, hash, timestamp: integer(b.mined_timestamp), outputs: [], inputs: [] }
      if (hash !== block.hash) throw new Error('tari.rpcData')
      block.outputs.push(...b.outputs.map((o) => ({ commitmentHex: bytesHex(o.commitment, 32, 'base64'), outputHashHex: bytesHex(o.output_hash, 32, 'base64'),
        encryptedDataHex: bytesHex(o.encrypted_data, undefined, 'base64'), senderOffsetPubHex: bytesHex(o.sender_offset_public_key, 32, 'base64') })))
      block.inputs.push(...b.inputs.map((i) => bytesHex(i, 32, 'base64')))
      grouped.set(height, block)
    }
    const rows = [...grouped.values()].sort((a, b) => a.height - b.height)
    for (let i = 0; i < rows.length; i++) if (rows[i].height !== next + i) throw new Error('tari.rpcData')
    const cursor = j.next_header_to_scan ? bytesHex(j.next_header_to_scan, 32) : null
    // Never certify a split final block until the server advances beyond its header.
    if (cursor && rows.some((b) => b.hash === cursor)) throw new Error('tari.partialBlock')
    if (rows[0].hash !== start.hash) throw new Error('tari.rpcData')
    result.push(...rows)
    next = rows.at(-1).height + 1
    if (next <= to && !cursor) throw new Error('tari.rpcData')
    if (cursor && next <= to && (await header(next, signal)).hash !== cursor) throw new Error('tari.rpcData')
  }
  return result
}

export function normalizeOutput (o, projection) {
  const features = o.features
  const proofType = { bullet_proof_plus: 0, revealed_value: 1 }[features?.range_proof_type] ?? features?.range_proof_type
  if (![0, 1].includes(proofType)) throw new Error('tari.rpcData')
  const sig = ['ephemeral_commitment', 'ephemeral_pubkey', 'u_a', 'u_x', 'u_y'].map((key) => '20000000' + bytesHex(o.metadata_signature?.[key], 32)).join('')
  const covenant = bytesHex(o.covenant)
  let n = covenant.length / 2
  let prefix = ''
  do { const byte = n % 128; n = Math.floor(n / 128); prefix += (byte + (n ? 128 : 0)).toString(16).padStart(2, '0') } while (n)
  const outputType = integer(features.output_type)
  if (outputType > 255) throw new Error('tari.rpcData')
  const full = { ...projection, commitmentHex: bytesHex(o.commitment, 32), encryptedDataHex: bytesHex(o.encrypted_data), senderOffsetPubHex: bytesHex(o.sender_offset_public_key, 32),
    scriptHex: bytesHex(o.script), metadataSigHex: sig, minimumValuePromise: String(integer(o.minimum_value_promise)), maturity: String(integer(features.maturity)),
    outputTypeByte: outputType, rangeProofTypeByte: proofType, coinbaseExtraHex: bytesHex(features.coinbase_extra), covenantHex: prefix + covenant,
    rangeProofHex: o.proof == null && proofType === 1 ? '' : bytesHex(o.proof ?? o.range_proof) }
  for (const key of ['commitmentHex', 'encryptedDataHex', 'senderOffsetPubHex']) if (full[key] !== projection[key]) throw new Error('tari.rpcData')
  return full
}

export async function hydrate (block, owned, signal) {
  const j = await get('get_utxos_by_block', { header_hash: block.hash }, signal)
  if (integer(j.height) !== block.height || bytesHex(j.header_hash, 32) !== block.hash || !Array.isArray(j.outputs)) throw new Error('tari.rpcData')
  return owned.map((projection) => {
    const o = j.outputs.find((o) => bytesHex(o.commitment, 32) === projection.commitmentHex)
    if (!o) throw new Error('tari.rpcData')
    return normalizeOutput(o, projection)
  })
}

export async function broadcast (json, signal) {
  const j = await request(api.tariBroadcast, { signal, body: { jsonrpc: '2.0', id: '1', method: 'submit_transaction', params: { transaction: JSON.parse(json), version: 2 } } })
  if (j?.result === 'ACCEPTED' || j?.result?.accepted === true) return
  if (j?.result?.accepted === false || [-32700, -32600, -32601, -32602].includes(j?.error?.code)) throw new Error('tari.rejected')
  throw new Error('tari.broadcastUnknown')
}
