import test from 'node:test'
import assert from 'node:assert/strict'
import { indexedDB } from 'fake-indexeddb'
import { readFile } from 'node:fs/promises'
import { parseAmount } from '../src/tari/amount.js'
import { normalizeAddress } from '../src/tari/address.js'
import { readBackup, exportBackup, importBackup } from '../src/tari/backup.js'
import { boundedText, INPUT_LIMITS, parseJson, responseJson, RPC_LIMIT } from '../src/tari/limits.js'
import { blocks, bytesHex, tip, verifySpendView } from '../src/tari/rpc.js'
import { TariWallet } from '../src/tari/state.js'
import { loadWallet } from '../src/tari/storage.js'
import { loadWasm, walletAddress } from '../src/tari/wallet.js'
import { ownershipPool } from '../src/tari/worker-pool.js'
import { signTransaction } from '../src/tari/transaction.js'
import { securityHeaders } from '../scripts/security-policy.js'
import { externalUrls } from '../src/lib/urls.js'

globalThis.indexedDB = indexedDB
const hash = (n) => n.toString(16).padStart(64, '0')
const b64 = (h) => Buffer.from(h, 'hex').toString('base64')
const now = () => Math.floor(Date.now() / 1000)
const deferred = () => { let resolve; const promise = new Promise((r) => { resolve = r }); return { promise, resolve } }
const headerData = (height, timestamp) => ({ height, hash: hash(height), prev_hash: hash(height - 1), timestamp })
const tipData = (height, timestamp) => ({ is_synced: true, metadata: { best_block_height: height, best_block_hash: hash(height), pruned_height: 0, timestamp } })

test('input, byte and JSON limits reject before expensive parsing', async () => {
  assert.throws(() => parseAmount('1'.repeat(100000)), /invalidAmount/)
  await assert.rejects(normalizeAddress('a'.repeat(100000)), /invalidAddress/)
  assert.throws(() => boundedText('🔒'.repeat(300), INPUT_LIMITS.password, 'limit'), /limit/)
  assert.throws(() => bytesHex('aa'.repeat(65537)), /rpcData/)
  assert.throws(() => parseJson('['.repeat(17) + '0' + ']'.repeat(17), 1024), /rpcData/)
  assert.deepEqual(parseJson('{"text":"[\\\"{}]"}', 1024), { text: '["{}]' })
  await assert.rejects(readBackup(new Blob(['['.repeat(1000) + '0' + ']'.repeat(1000)])), /invalidBackup/)
  let touched = false
  await assert.rejects(exportBackup({ wallet: { getAddress () { touched = true } }, password: 'x'.repeat(1025) }), /passwordLimit/)
  assert.equal(touched, false)
})

test('RPC streaming stops at the size limit, including absent or false Content-Length', async () => {
  for (const headers of [{}, { 'Content-Length': '1' }]) {
    let cancelled = false, reads = 0
    const response = new Response(new ReadableStream({
      pull (controller) { reads++; controller.enqueue(new Uint8Array(1024 * 1024).fill(32)) },
      cancel () { cancelled = true }
    }), { headers })
    await assert.rejects(responseJson(response), /rpcData/)
    assert.equal(cancelled, true)
    assert.ok(reads <= RPC_LIMIT / (1024 * 1024) + 2)
  }
  await assert.rejects(responseJson(new Response('{}', { headers: { 'Content-Length': RPC_LIMIT + 1 } })), /rpcData/)
})

test('authenticated but deeply nested backup plaintext is rejected before WASM restore', async () => {
  const { WasmWallet } = await loadWasm()
  const wallet = new WasmWallet('mainnet'), password = 'password 12345'
  try {
    const envelope = await readBackup(await exportBackup({ wallet, birthdayMs: Date.now(), password }))
    const { scryptAsync } = await import('@noble/hashes/scrypt.js')
    const bytes = await scryptAsync(password, Buffer.from(envelope.kdf.salt, 'base64'), { N: 32768, r: 8, p: 1, dkLen: 32 })
    const key = await crypto.subtle.importKey('raw', bytes, 'AES-GCM', false, ['encrypt'])
    bytes.fill(0)
    const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: Buffer.from(envelope.cipher.iv, 'base64'),
      additionalData: new TextEncoder().encode(`outruna-tari-backup|1|mainnet|${envelope.address}`) }, key,
    new TextEncoder().encode('['.repeat(1000) + '0' + ']'.repeat(1000)))
    envelope.cipher.ciphertext = Buffer.from(cipher).toString('base64')
    await assert.rejects(importBackup({ envelope, password }), /decryptError/)
  } finally { wallet.free() }
})

test('tip and spend view fail closed on stale, missing and inconsistent chain data', async () => {
  const original = globalThis.fetch, timestamp = now()
  try {
    for (const synced of [undefined, null, false, 1, 'true']) {
      globalThis.fetch = async () => Response.json({ ...tipData(10, timestamp), is_synced: synced })
      await assert.rejects(tip(), /syncRequired/)
    }
    for (const time of [timestamp - 1801, timestamp + 301]) {
      globalThis.fetch = async () => Response.json(tipData(10, time))
      await assert.rejects(tip(), /syncRequired/)
    }
    for (const disagreement of ['height', 'hash', 'timestamp', null]) {
      globalThis.fetch = async (url) => {
        const isTip = url.includes('get_tip_info')
        const data = isTip ? tipData(10, timestamp) : headerData(10, timestamp)
        if (disagreement === 'height' && isTip) data.metadata.best_block_height--
        if (disagreement === 'hash') data.metadata ? data.metadata.best_block_hash = hash(20) : data.hash = hash(20)
        if (disagreement === 'timestamp' && !isTip) data.timestamp--
        return Response.json(data)
      }
      if (disagreement) await assert.rejects(verifySpendView(10, hash(10)), /syncRequired|rpcData/)
      else assert.equal((await verifySpendView(10, hash(10))).height, 10)
    }
  } finally { globalThis.fetch = original }
})

test('cursor pagination joins 600 output chunks with inputs and validates linked headers', async () => {
  const original = globalThis.fetch, timestamp = now()
  let corrupt = false
  const calls = []
  globalThis.fetch = async (url) => {
    const u = new URL(url)
    if (u.pathname === '/get_header_by_height') {
      const height = Number(u.searchParams.get('height'))
      return Response.json({ ...headerData(height, timestamp), ...(corrupt && height === 11 ? { prev_hash: hash(99) } : {}) })
    }
    const height = parseInt(u.searchParams.get('start_header_hash'), 16)
    calls.push(height)
    return Response.json({ next_header_to_scan: height === 10 ? hash(10) : '', blocks: Array.from({ length: height === 10 ? 600 : 1 }, (_, i) => ({
      height, header_hash: b64(hash(height)), mined_timestamp: timestamp,
      outputs: [{ commitment: b64(hash(i + 1)), output_hash: b64(hash(i + 1000)), encrypted_data: b64(hash(1)), sender_offset_public_key: b64(hash(2)) }],
      inputs: [b64(hash(i + 2000))]
    })) })
  }
  try {
    const rows = await blocks(10, 11)
    assert.deepEqual(calls, [10, 11])
    assert.equal(rows[0].outputs.length, 600)
    assert.equal(rows[0].inputs.length, 600)
    assert.equal(rows[0].outputs[599].outputHashHex, hash(1599))
    corrupt = true
    await assert.rejects(blocks(10, 11), /syncRequired/)
  } finally { globalThis.fetch = original }
})

test('disposal waits for local encryption and preserves encrypted recovery', async () => {
  const manager = new TariWallet('dispose-encryption'), entered = deferred(), release = deferred()
  const original = crypto.subtle.encrypt
  crypto.subtle.encrypt = async function (...args) { entered.resolve(); await release.promise; return original.apply(this, args) }
  try {
    const opening = manager.open(true)
    await entered.promise
    const address = manager.data.address
    const closing = manager.dispose()
    assert.equal(manager.lifecycle, 'disposing')
    assert.equal(walletAddress(manager.wallet), address)
    await assert.rejects(manager.export('password 12345'), { name: 'AbortError' })
    release.resolve()
    await opening
    await closing
    assert.equal(manager.lifecycle, 'disposed')
    assert.equal(manager.wallet, null)
    const saved = await loadWallet('dispose-encryption')
    try { assert.equal(walletAddress(saved.wallet), address) } finally { saved.wallet.free() }
  } finally { release.resolve(); crypto.subtle.encrypt = original; await manager.dispose() }
})

test('logout cancels KDF workers on export and import before freeing the wallet', async () => {
  const original = globalThis.Worker
  const manager = new TariWallet('dispose-kdf')
  await manager.open(true)
  const envelope = JSON.parse(await (await manager.export('password 12345')).text())
  try {
    for (const kind of ['export', 'import']) {
      const value = kind === 'export' ? manager : new TariWallet('dispose-import-kdf')
      await value.open(true)
      const entered = deferred()
      let terminated = 0
      globalThis.Worker = class { postMessage () { entered.resolve() } terminate () { terminated++ } }
      const work = kind === 'export' ? value.export('password 12345') : value.inspectImport(envelope, 'password 12345')
      const rejection = assert.rejects(work)
      await entered.promise
      await value.dispose()
      await rejection
      assert.ok(terminated > 0)
      assert.equal(value.wallet, null)
      const saved = await loadWallet(value.userId); saved.wallet.free()
    }
  } finally { globalThis.Worker = original; await manager.dispose() }
})

test('logout during broadcast waits and preserves pending reservations', async () => {
  const original = globalThis.fetch, timestamp = now(), entered = deferred(), release = deferred()
  const manager = new TariWallet('dispose-broadcast')
  await manager.open(true)
  const handle = manager.wallet.createSelfUtxo(1000000n)
  manager.handles.set(handle.commitmentHex, handle)
  manager.data.utxos = [{ commitmentHex: handle.commitmentHex, valueMicro: '1000000', maturity: '0' }]
  manager.data.headers[10] = hash(10)
  manager.data.lastSafeScannedHeight = manager.tipHeight = 10
  manager.known = true
  globalThis.fetch = async (url) => {
    if (url.includes('json_rpc')) { entered.resolve(); await release.promise; return Response.json({ result: 'ACCEPTED' }) }
    return Response.json(url.includes('get_tip_info') ? tipData(10, timestamp) : headerData(10, timestamp))
  }
  try {
    const review = await manager.prepare(manager.data.address, '0.01')
    const sending = manager.send(review)
    const rejection = assert.rejects(sending, { name: 'AbortError' })
    await entered.promise
    const closing = manager.dispose()
    assert.ok(manager.wallet)
    release.resolve()
    await rejection; await closing
    const saved = await loadWallet(manager.userId)
    try { assert.equal(saved.metadata.history.at(-1).status, 'pending') } finally { saved.wallet.free() }
  } finally { release.resolve(); globalThis.fetch = original; await manager.dispose() }
})

test('logout waits for scanner tip and hydration continuations without importing freed outputs', async () => {
  const original = globalThis.fetch, timestamp = now()
  try {
    for (const stage of ['get_tip_info', 'get_utxos_by_block']) {
      const manager = new TariWallet(`dispose-scan-${stage}`), entered = deferred(), release = deferred()
      let freed = false, imports = 0
      manager.persisted = false
      manager.wallet = { getBackupHex: () => '', isOutputMine: () => { assert.equal(freed, false); return true },
        importScannedOutput () { assert.equal(freed, false); imports++; return { valueMicro: 1n, free () {} } }, free () { freed = true } }
      manager.data.birthdayMs = Date.now()
      globalThis.fetch = async (url) => {
        const u = new URL(url), method = u.pathname.slice(1)
        if (method === stage) { entered.resolve(); await release.promise }
        if (method === 'get_tip_info') return Response.json(tipData(10, timestamp))
        if (method === 'get_height_at_time') return Response.json(10)
        if (method === 'get_header_by_height') return Response.json(headerData(Number(u.searchParams.get('height')), timestamp))
        if (method === 'sync_utxos_by_block') return Response.json({ next_header_to_scan: '', blocks: [{
          height: 10, header_hash: b64(hash(10)), mined_timestamp: timestamp, inputs: [],
          outputs: [{ commitment: b64(hash(1)), output_hash: b64(hash(2)), encrypted_data: b64(hash(3)), sender_offset_public_key: b64(hash(4)) }]
        }] })
        return Response.json({ height: 10, header_hash: hash(10), outputs: [] })
      }
      const scanning = manager.refresh()
      await entered.promise
      const closing = manager.dispose()
      assert.equal(freed, false)
      release.resolve()
      await scanning; await closing
      assert.equal(freed, true)
      assert.equal(imports, 0)
      assert.equal(manager.wallet, null)
    }
  } finally { globalThis.fetch = original }
})

test('cancelled signing and disposed worker pools never touch wallet handles', async () => {
  const abort = new AbortController()
  abort.abort()
  await assert.rejects(signTransaction(null, null, null, 1, abort.signal), { name: 'AbortError' })
  const pool = ownershipPool({ getBackupHex: () => '', isOutputMine: () => { throw new Error('used after disposal') } })
  pool.dispose()
  await assert.rejects(pool.detect([{}]), { name: 'AbortError' })
})

test('CSP restricts active content and wallet data uses only the controlled proxy', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8')
  const headers = securityHeaders(html)
  const policy = headers['Content-Security-Policy']
  assert.equal(headers['Permissions-Policy'], 'camera=(), microphone=(), geolocation=(), clipboard-write=(self)')
  assert.equal(headers['Strict-Transport-Security'], 'max-age=31536000; includeSubDomains; preload')
  assert.match(html, /telegram-web-app[^>]+integrity="sha384-[^"]+" crossorigin="anonymous"/)
  for (const directive of ["object-src 'none'", "worker-src 'self'", "script-src-attr 'none'", "base-uri 'none'"]) assert.ok(policy.includes(directive))
  assert.ok(!policy.includes("'unsafe-eval'"))
  assert.ok(!policy.includes('connect-src *'))
  assert.deepEqual(externalUrls.coinGeckoCorsProxies, [externalUrls.coinGeckoCorsProxy])
  assert.ok(!(await readFile(new URL('../src/components/TariWallet.jsx', import.meta.url), 'utf8')).includes('dangerouslySetInnerHTML'))
})
