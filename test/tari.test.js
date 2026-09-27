import test from 'node:test'
import assert from 'node:assert/strict'
import { indexedDB } from 'fake-indexeddb'
import { createWallet, restoreWallet, walletAddress, loadWasm, importOutput, viewFromFull } from '../src/tari/wallet.js'
import { exportBackup, importBackup, readBackup, validateEnvelope } from '../src/tari/backup.js'
import { loadWallet, saveWallet, removeWallet } from '../src/tari/storage.js'
import { parseAmount, formatMicro } from '../src/tari/amount.js'
import { normalizeAddress } from '../src/tari/address.js'
import { feeFor, maximum, selectInputs, spendable } from '../src/tari/inputs.js'
import { bytesHex, normalizeOutput, request, broadcast } from '../src/tari/rpc.js'
import { scan } from '../src/tari/scanner.js'
import { ownershipPool, workerCount } from '../src/tari/worker-pool.js'
import { signTransaction } from '../src/tari/transaction.js'
import { TariWallet } from '../src/tari/state.js'

globalThis.indexedDB = indexedDB
const password = '  密码 secret 🔒 password  '
const metadata = () => ({ birthdayMs: Date.now() - 1000, backupExportedAt: null, lastSafeScannedHeight: null, headers: {}, utxos: [], history: [] })

test('Tari lifecycle generates independent wallets and restores exact address', async () => {
  const a = await createWallet(), b = await createWallet(), restored = await restoreWallet(a.getBackupHex())
  try {
    assert.notEqual(walletAddress(a), walletAddress(b))
    assert.equal(walletAddress(a), walletAddress(restored))
    const addr = a.getAddress()
    try {
      assert.equal(await normalizeAddress(addr.toBase58()), addr.toBase58())
      assert.equal(await normalizeAddress(addr.toHex()), addr.toBase58())
      assert.equal(await normalizeAddress(addr.toEmoji()), addr.toBase58())
      const { WasmTariAddress } = await loadWasm()
      const single = WasmTariAddress.newSingle(addr.spendKeyHex, 'mainnet', 0)
      try { await assert.rejects(normalizeAddress(single.toBase58()), /singleAddress/) } finally { single.free() }
    } finally { addr.free() }
    await assert.rejects(normalizeAddress('invalid!'), /invalidAddress/)
  } finally { a.free(); b.free(); restored.free() }
})

test('encrypted portable backup round-trip, Unicode and exact spaces', async () => {
  const wallet = await createWallet()
  try {
    const blob = await exportBackup({ wallet, birthdayMs: 1700000000000, password })
    assert.ok(!((await blob.text()).includes(wallet.getBackupHex())))
    const envelope = await readBackup(blob)
    const imported = await importBackup({ envelope, password })
    try {
      assert.equal(imported.wallet.getBackupHex(), wallet.getBackupHex())
      assert.equal(imported.address, walletAddress(wallet))
      assert.equal(imported.birthdayMs, 1700000000000)
    } finally { imported.wallet.free() }
    for (const wrong of ['wrong password', password.trim(), password.normalize('NFKD') + 'x']) {
      await assert.rejects(importBackup({ envelope, password: wrong }), /decryptError/)
    }
    await assert.rejects(exportBackup({ wallet, birthdayMs: Date.now(), password: 'short' }), /passwordLength/)
    for (const field of ['ciphertext', 'iv']) {
      const changed = structuredClone(envelope)
      const bytes = Buffer.from(changed.cipher[field], 'base64'); bytes[0] ^= 1
      changed.cipher[field] = bytes.toString('base64')
      await assert.rejects(importBackup({ envelope: changed, password }), /decryptError/)
    }
    const modified = structuredClone(envelope)
    const other = await createWallet()
    modified.address = walletAddress(other)
    other.free()
    await assert.rejects(importBackup({ envelope: modified, password }), /decryptError/)
    for (const change of [
      (e) => { e.version = 2 }, (e) => { e.format = 'other' }, (e) => { e.network = 'esmeralda' },
      (e) => { e.kdf.n = 2 ** 30 }, (e) => { e.kdf.r = 16 }, (e) => { e.kdf.p = 4 },
      (e) => { e.kdf.salt = 'corrupt' }, (e) => { e.cipher.iv = 'AAAA' }, (e) => { e.cipher.name = 'AES-512-GCM' }
    ]) {
      const e = structuredClone(envelope); change(e)
      assert.throws(() => validateEnvelope(e), /invalidBackup/)
    }
    await assert.rejects(readBackup(new Blob(['{'])), /invalidBackup/)
    await assert.rejects(readBackup(new Blob(['x'.repeat(256 * 1024 + 1)])), /invalidBackup/)
  } finally { wallet.free() }
})

test('encrypted IndexedDB user isolation, logout reopening, deletion and failed replacement', async () => {
  const a = await createWallet(), b = await createWallet()
  try {
    await saveWallet('A', a, metadata())
    await saveWallet('B', b, metadata())
    const ra = await loadWallet('A'), rb = await loadWallet('B')
    assert.equal(walletAddress(ra.wallet), walletAddress(a))
    assert.equal(walletAddress(rb.wallet), walletAddress(b))
    ra.wallet.free(); rb.wallet.free()
    const stored = await new Promise((resolve) => {
      const req = indexedDB.open('outruna-tari-v1', 1)
      req.onsuccess = () => {
        const r = req.result.transaction('wallets').objectStore('wallets').get('tari-wallet:A')
        r.onsuccess = () => { resolve(r.result); req.result.close() }
      }
    })
    assert.equal(stored.key.extractable, false)
    assert.equal(stored.backupHex, undefined)
    assert.ok(!JSON.stringify(stored).includes(a.getBackupHex()))
    assert.ok(!Buffer.from(stored.ciphertext).includes(Buffer.from(a.getBackupHex())))
    const manager = new TariWallet('A')
    await manager.open()
    assert.equal(manager.data.address, walletAddress(a))
    await manager.dispose()
    assert.equal(manager.wallet, null)
    assert.equal(manager.handles.size, 0)
    assert.equal(manager.data.address, '')
    const after = await loadWallet('A'); after.wallet.free()
    await assert.rejects(saveWallet('A', b, { invalid: 1n }))
    const survived = await loadWallet('A')
    assert.equal(walletAddress(survived.wallet), walletAddress(a)); survived.wallet.free()
    await removeWallet('A'); assert.equal(await loadWallet('A'), null)
    const stillB = await loadWallet('B'); stillB.wallet.free()
  } finally { a.free(); b.free() }
})

test('Tari amounts use integers without rounding or Number precision loss', () => {
  assert.equal(parseAmount('1'), 1000000n)
  assert.equal(parseAmount('0.000001'), 1n)
  assert.equal(parseAmount('9007199254.740993'), 9007199254740993n)
  assert.equal(formatMicro(9007199254740993n), '9007199254.740993')
  for (const invalid of ['0', '-1', '1.0000001', '1e2', ' 1', 'NaN', '18446744073710']) assert.throws(() => parseAmount(invalid))
})

test('input selection, maturity, reservations, dust, Max and actual signed fee', async () => {
  const wasm = await loadWasm()
  const wallet = await createWallet()
  const handles = new Map()
  try {
    const utxos = [1000000n, 2000000n, 1n].map((value) => {
      const h = wallet.createSelfUtxo(value); handles.set(h.commitmentHex, h)
      return { commitmentHex: h.commitmentHex, valueMicro: value.toString(), maturity: '0' }
    })
    const available = spendable(utxos, handles, 353163)
    assert.equal(available[0].valueMicro, '2000000')
    const selected = selectInputs(available, 2500000n, wasm.calculateFee)
    assert.equal(selected.inputs.length, 2)
    assert.throws(() => selectInputs(available, 3000000n, wasm.calculateFee), /insufficient/)
    assert.equal(maximum(available, wasm.calculateFee), 3000000n - feeFor(wasm.calculateFee, 2))
    for (const patch of [{ pending: true }, { reserved: true }, { spentHeight: 1 }, { maturity: '353164' }]) {
      assert.equal(spendable(utxos.map((u) => ({ ...u, ...patch })), handles, 353163).length, 0)
    }
    assert.equal(spendable(utxos.map((u) => ({ ...u, maturity: '1' })), handles, null).length, 0)
    assert.equal(spendable(utxos, new Map(), 353163).length, 0)
    for (const amount of [100000n, maximum(available, wasm.calculateFee)]) {
      const review = { ...selectInputs(available, amount, wasm.calculateFee), recipient: walletAddress(wallet) }
      const signed = await signTransaction(wallet, review, handles, 353163)
      assert.equal(BigInt(signed.feeMicro), review.feeMicro)
      assert.ok(signed.json.includes('body'))
      assert.ok(!signed.json.includes(wallet.getBackupHex()))
    }
  } finally { handles.forEach((h) => h.free()); wallet.free() }
})

async function outputFixture (wallet) {
  const { WasmTxBuilder } = await loadWasm()
  const input = wallet.createSelfUtxo(10000000n)
  const builder = new WasmTxBuilder(wallet)
  builder.addInput(input); builder.addRecipient(walletAddress(wallet), 1000000n); builder.withFeePerGram(5n); builder.withTipHeight(353163n)
  const signed = builder.build()
  try {
    const raw = JSON.parse(signed.toJson()).body.outputs[0]
    const projection = { commitmentHex: raw.commitment, encryptedDataHex: raw.encrypted_data.data, senderOffsetPubHex: raw.sender_offset_public_key, outputHashHex: '11'.repeat(32) }
    return normalizeOutput(raw, projection)
  } finally { input.free(); signed.free() }
}

test('scanner owns, hydrates, deduplicates, reconstructs and never advances past failure', async () => {
  const wallet = await createWallet(), other = await createWallet()
  const watch = await viewFromFull(wallet)
  const signal = new AbortController()
  const pool = ownershipPool(watch, signal.signal)
  try {
    const own = await outputFixture(wallet), foreign = await outputFixture(other)
    assert.deepEqual(await pool.detect([own, foreign]), [own])
    assert.ok(workerCount() >= 1 && workerCount() <= 4)
    const fixture = [
      { height: 10, timestamp: 1, hash: 'a', outputs: [own, own, foreign], inputs: [] },
      { height: 11, timestamp: 2, hash: 'b', outputs: [], inputs: [own.outputHashHex] }
    ]
    const client = { blocks: async () => fixture, hydrate: async (_, outputs) => outputs }
    const seen = []
    let safe = 9
    await scan({ from: 10, to: 11, wallet: watch, detector: pool, signal: signal.signal, client,
      onBlock: async (b, outputs) => { safe = b.height; seen.push({ b, outputs: outputs.map((o) => ({ ...o.raw, valueMicro: o.valueMicro })) }) } })
    assert.equal(safe, 11)
    assert.equal(seen[0].outputs.length, 1)
    assert.deepEqual(seen[1].b.inputs, [own.outputHashHex])
    const rebuilt = importOutput(wallet, seen[0].outputs[0])
    assert.equal(rebuilt.valueMicro.toString(), seen[0].outputs[0].valueMicro); rebuilt.free()
    safe = 9
    await assert.rejects(scan({ from: 10, to: 11, wallet: watch, detector: pool, client: { ...client, hydrate: async () => { throw new Error('failed') } },
      onBlock: async (b) => { safe = b.height } }))
    assert.equal(safe, 9)
    await assert.rejects(scan({ from: 10, to: 11, wallet: watch, detector: pool, client: { ...client, blocks: async () => [] }, onBlock: async () => {} }))
    signal.abort()
    await assert.rejects(pool.detect([own]))
  } finally { pool.dispose(); watch.free(); wallet.free(); other.free() }
})

test('RPC byte encodings, retry, abort and fixed broadcast route', async () => {
  assert.equal(bytesHex('00ff', 2), '00ff')
  assert.equal(bytesHex('AP8=', 2), '00ff')
  assert.equal(bytesHex({ data: [0, 255] }, 2), '00ff')
  for (const bad of ['xyz', [256], [-1], { nope: true }]) assert.throws(() => bytesHex(bad))
  const original = globalThis.fetch
  try {
    let calls = 0
    globalThis.fetch = async () => ++calls === 1 ? new Response('', { status: 429 }) : Response.json({ ok: true })
    assert.deepEqual(await request('https://rpc.tari.com/get_tip_info', { delays: [0] }), { ok: true })
    assert.equal(calls, 2)
    const abort = new AbortController(); abort.abort()
    await assert.rejects(request('unused', { signal: abort.signal }))
    globalThis.fetch = async (url, init) => {
      assert.equal(url, '/rpc/tari/mainnet/json_rpc')
      const body = JSON.parse(init.body)
      assert.equal(body.id, '1'); assert.equal(body.params.version, 2)
      return Response.json({ result: { accepted: true } })
    }
    await broadcast('{}')
    globalThis.fetch = async () => Response.json({ result: { accepted: false } })
    await assert.rejects(broadcast('{}'), /rejected/)
  } finally { globalThis.fetch = original }
})

test('wallet manager scans, resumes, confirms spends and keeps rejected inputs spendable', async () => {
  const original = globalThis.fetch
  let latestState
  const manager = new TariWallet('scan-lifecycle', (state) => { latestState = state })
  const wallet = await createWallet()
  const own = await outputFixture(wallet)
  await saveWallet('scan-lifecycle', wallet, metadata())
  wallet.free()
  let tipHeight = 20
  let rejection = true
  const heights = []
  const rawOutput = {
    commitment: own.commitmentHex, encrypted_data: { data: own.encryptedDataHex }, sender_offset_public_key: own.senderOffsetPubHex,
    script: own.scriptHex, minimum_value_promise: Number(own.minimumValuePromise), covenant: '', proof: own.rangeProofHex,
    features: { maturity: 0, output_type: own.outputTypeByte, range_proof_type: 'bullet_proof_plus', coinbase_extra: '' },
    metadata_signature: Object.fromEntries(['ephemeral_commitment', 'ephemeral_pubkey', 'u_a', 'u_x', 'u_y'].map((key, i) => [key, own.metadataSigHex.slice(i * 72 + 8, (i + 1) * 72)]))
  }
  const hash = (height) => height.toString(16).padStart(64, '0')
  const timestamp = Math.floor(Date.now() / 1000) - 100
  const b64 = (hex) => Buffer.from(hex, 'hex').toString('base64')
  globalThis.fetch = async (url) => {
    const u = new URL(url, 'https://outruna.top')
    let body
    if (u.pathname.endsWith('/get_tip_info')) body = { metadata: { best_block_height: tipHeight, best_block_hash: hash(tipHeight), pruned_height: 0, timestamp: timestamp + tipHeight }, is_synced: true }
    if (u.pathname === '/get_height_at_time') body = 20
    if (u.pathname.endsWith('/get_header_by_height')) {
      const height = Number(u.searchParams.get('height'))
      body = { height, hash: hash(height), prev_hash: hash(height - 1), timestamp: timestamp + height }
    }
    if (u.pathname === '/sync_utxos_by_block') {
      const start = parseInt(u.searchParams.get('start_header_hash'), 16)
      heights.push(start)
      body = { next_header_to_scan: '', blocks: Array.from({ length: tipHeight - start + 1 }, (_, i) => {
        const height = start + i
        return { height, header_hash: b64(hash(height)), mined_timestamp: timestamp + height,
          outputs: height === 20 ? [{ commitment: b64(own.commitmentHex), output_hash: b64(own.outputHashHex), encrypted_data: b64(own.encryptedDataHex), sender_offset_public_key: b64(own.senderOffsetPubHex) }] : [],
          inputs: height === 21 ? [b64(own.outputHashHex)] : [] }
      }) }
    }
    if (u.pathname === '/get_utxos_by_block') body = { height: 20, header_hash: hash(20), outputs: [rawOutput] }
    if (u.pathname === '/rpc/tari/mainnet/json_rpc') body = { result: { accepted: !rejection } }
    return Response.json(body)
  }
  try {
    await manager.open()
    await manager.refresh()
    assert.equal(manager.known, true)
    assert.equal(manager.data.lastSafeScannedHeight, 20)
    assert.equal(manager.data.utxos.length, 1)
    assert.equal(manager.data.history.length, 1)
    const review = await manager.prepare(manager.data.address, '0.01')
    await manager.export(password)
    await manager.unlockSpend(password)
    await assert.rejects(manager.send(review), /rejected/)
    assert.equal(manager.data.history.at(-1).status, 'failed')
    assert.equal(manager.data.utxos[0].reserved, false)
    rejection = false
    await manager.unlockSpend(password)
    await manager.send(review)
    assert.equal(manager.data.history.at(-1).status, 'pending')
    assert.equal(manager.data.utxos[0].reserved, true)
    tipHeight = 21
    const previousBalance = manager.previousTotalMicro
    const syncing = manager.refresh()
    assert.equal(manager.known, false)
    assert.equal(latestState.displayKnown, true)
    assert.equal(latestState.displayTotalMicro, previousBalance)
    await syncing
    assert.equal(latestState.displayTotalMicro, latestState.totalMicro)
    assert.equal(manager.data.history.at(-1).status, 'confirmed')
    assert.equal(manager.data.utxos[0].spentHeight, 21)
    assert.equal(manager.handles.size, 0)
    assert.equal(manager.data.lastSafeScannedHeight, 21)
    assert.deepEqual(heights, [20, 20])
    await manager.refresh()
    assert.equal(manager.data.utxos.length, 1)
    assert.equal(manager.data.history.filter((h) => h.direction === 'in').length, 1)
  } finally { manager.dispose(); globalThis.fetch = original }
})

test('replacement requires confirmation, same wallet keeps earliest birthday, failed write preserves original', async () => {
  const manager = new TariWallet('replacement')
  await manager.open(true)
  const originalAddress = manager.data.address
  const other = await createWallet()
  let envelope
  try { envelope = await readBackup(await exportBackup({ wallet: other, birthdayMs: 1700000000000, password })) } finally { other.free() }
  try {
    const proposal = await manager.inspectImport(envelope, password)
    assert.equal(proposal.replacement, true)
    assert.equal(manager.data.address, originalAddress)
    manager.cancelImport()
    assert.equal(manager.data.address, originalAddress)
    await assert.rejects(manager.acceptImport(), /invalidBackup/)
    await manager.inspectImport(envelope, password)
    const database = globalThis.indexedDB
    globalThis.indexedDB = { open () { throw new Error('quota') } }
    try { await assert.rejects(manager.acceptImport()) } finally { globalThis.indexedDB = database }
    assert.equal(manager.data.address, originalAddress)
    const stored = await loadWallet('replacement')
    assert.equal(walletAddress(stored.wallet), originalAddress); stored.wallet.free()
    await manager.acceptImport()
    assert.equal(manager.data.address, envelope.address)
    const same = await manager.inspectImport(envelope, password)
    assert.equal(same.replacement, false)
    await manager.acceptImport()
    assert.equal(manager.data.birthdayMs, 1700000000000)
    await assert.rejects(manager.inspectImport(envelope, 'incorrect password'), /decryptError/)
    assert.equal(manager.data.address, envelope.address)
    await manager.remove()
    assert.equal(await loadWallet('replacement'), null)
    await manager.open(true)
    assert.notEqual(manager.data.address, envelope.address)
  } finally { manager.dispose() }
})

test('storage unavailable permits session-only use without plaintext fallback', async () => {
  const database = globalThis.indexedDB
  const manager = new TariWallet('session')
  globalThis.indexedDB = { open () { throw new Error('disabled') } }
  try {
    await manager.open(true)
    assert.equal(manager.persisted, false)
    assert.ok(manager.data.address)
    const file = await manager.export(password)
    assert.ok(file.size > 0)
    await manager.remove()
    assert.equal(manager.wallet, null)
  } finally { manager.dispose(); globalThis.indexedDB = database }
})
