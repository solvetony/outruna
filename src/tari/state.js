import { createWallet, importOutput, loadWasm, walletAddress } from './wallet.js'
import * as storage from './storage.js'
import * as backup from './backup.js'
import * as rpc from './rpc.js'
import { ownershipPool } from './worker-pool.js'
import { scan } from './scanner.js'
import { parseAmount } from './amount.js'
import { normalizeAddress } from './address.js'
import { maximum, selectInputs, spendable } from './inputs.js'
import { signTransaction } from './transaction.js'

const empty = () => ({ address: '', birthdayMs: null, backupExportedAt: null, lastSafeScannedHeight: null, headers: {}, utxos: [], history: [] })

export class TariWallet {
  constructor (userId, notify = () => {}) {
    this.userId = userId
    this.notify = notify
    this.data = empty()
    this.handles = new Map()
    this.life = new AbortController()
    this.tipHeight = null
    this.persisted = true
    this.syncing = false
    this.known = false
    this.busy = false
    this.error = null
    this.syncError = null
  }

  emit () {
    if (this.life.signal.aborted) return
    const available = this.wallet ? spendable(this.data.utxos, this.handles, this.tipHeight) : []
    const availableMicro = available.reduce((n, u) => n + BigInt(u.valueMicro), 0n)
    const mined = this.data.utxos.filter((u) => !u.spentHeight && !u.reserved)
    const totalMined = mined.reduce((n, u) => n + BigInt(u.valueMicro), 0n)
    const pendingMicro = this.data.history.filter((tx) => tx.direction === 'out' && tx.status === 'pending' && !this.data.utxos.some((u) => u.commitmentHex === tx.changeCommitmentHex))
      .reduce((n, tx) => n + BigInt(tx.changeValueMicro || 0), 0n)
    this.notify({ ...this.data, initialized: !!this.wallet, ready: !this.busy, busy: this.busy, persisted: this.persisted,
      syncing: this.syncing, syncError: this.syncError, error: this.error, known: this.known, tipHeight: this.tipHeight,
      availableMicro, totalMicro: totalMined + pendingMicro, pendingMicro, lockedMicro: totalMined - availableMicro })
  }

  check () { this.life.signal.throwIfAborted() }

  async exclusive (fn) {
    if (this.busy) throw new Error('tari.busy')
    this.check()
    this.busy = true
    this.error = null
    this.emit()
    try { return await fn() } finally { this.busy = false; this.emit() }
  }

  async lock () {
    if (this.unlock || !globalThis.navigator?.locks) return
    await new Promise((resolve, reject) => {
      navigator.locks.request(`outruna-tari:${this.userId}`, { ifAvailable: true }, async (lock) => {
        if (!lock) { reject(new Error('tari.otherTab')); return }
        await new Promise((release) => { this.unlock = release; resolve() })
      }).catch(reject)
    })
    if (this.life.signal.aborted) { this.unlock?.(); this.check() }
  }

  async open (create = false) {
    if (this.wallet) return
    return this.exclusive(async () => {
      if (!this.userId) throw new Error('tari.accountError')
      await this.lock()
      let saved
      try { saved = await storage.loadWallet(this.userId) } catch (error) {
        this.persisted = false
        // A read/decryption failure cannot be treated as an absent wallet.
        if (error.message !== 'tari.storageUnavailable') {
          this.data.address = await storage.storedAddress(this.userId).catch(() => '')
          throw error
        }
        this.storageUnavailable = true
      }
      if (this.life.signal.aborted) { saved?.wallet.free(); this.check() }
      if (saved) {
        this.wallet = saved.wallet
        this.data = saved.metadata
        this.rebuild()
      } else if (create) {
        const wallet = await createWallet()
        if (this.life.signal.aborted) { wallet.free(); this.check() }
        this.wallet = wallet
        this.data = { ...empty(), address: walletAddress(wallet), birthdayMs: Date.now() }
        try { if (!this.storageUnavailable) await storage.saveWallet(this.userId, wallet, this.data) } catch { this.persisted = false }
      }
    }).catch((e) => { this.error = e.message; this.emit(); throw e })
  }

  rebuild () {
    this.handles.forEach((h) => h.free())
    this.handles.clear()
    let failed = false
    for (const u of this.data.utxos) {
      if (u.spentHeight) continue
      try {
        const h = importOutput(this.wallet, u)
        if (h.valueMicro.toString() !== u.valueMicro) { h.free(); throw new Error() }
        this.handles.set(u.commitmentHex, h)
      } catch { failed = true }
    }
    if (failed) this.data.lastSafeScannedHeight = null
  }

  async persist (data = this.data, strict = false, wallet = this.wallet) {
    this.check()
    if (!this.persisted && !strict) return
    try { await storage.saveWallet(this.userId, wallet, data) } catch (e) {
      this.persisted = false
      if (strict) throw e
    }
    this.check()
  }

  async stopScan () {
    this.scanAbort?.abort()
    await this.scanning
  }

  refresh () {
    if (!this.wallet || this.scanning || this.busy || this.life.signal.aborted) return this.scanning
    this.scanning = this.runScan().finally(() => { this.scanning = null })
    return this.scanning
  }

  async runScan () {
    this.scanAbort = new AbortController()
    const signal = this.scanAbort.signal
    const cancel = () => this.scanAbort?.abort()
    this.life.signal.addEventListener('abort', cancel, { once: true })
    const pool = ownershipPool(this.wallet, signal)
    this.syncing = true
    this.syncError = null
    this.known = false
    this.emit()
    try {
      const tip = await rpc.tip(signal)
      this.tipHeight = tip.height
      const birthday = Math.min(tip.height, await rpc.birthdayHeight(this.data.birthdayMs, signal))
      if (tip.prunedHeight > birthday) throw new Error('tari.pruned')
      let from = Math.max(birthday, (this.data.lastSafeScannedHeight ?? birthday) - 10)
      if (from > tip.height) from = birthday
      const anchor = this.data.headers[from - 1]
      if (anchor && (await rpc.header(from - 1, signal)).hash !== anchor) from = birthday
      const utxos = this.data.utxos.filter((u) => u.minedHeight < from).map((u) => ({ ...u, spentHeight: u.spentHeight >= from ? null : u.spentHeight }))
      const history = this.data.history.filter((h) => h.direction === 'out' || h.minedHeight < from)
        .map((h) => h.direction === 'out' && h.minedHeight >= from ? { ...h, status: 'pending', minedHeight: null } : h)
      this.data = { ...this.data, utxos, history, lastSafeScannedHeight: from - 1 }
      this.reserve()
      this.rebuild()
      await scan({ from, to: tip.height, wallet: this.wallet, detector: pool, signal,
        onBlock: async (block, outputs) => {
          signal.throwIfAborted()
          const spent = new Set(block.inputs)
          const nextUtxos = this.data.utxos.map((u) => spent.has(u.outputHashHex) ? { ...u, spentHeight: block.height, reserved: false } : u)
          const nextHistory = this.data.history.map((tx) => {
            const inputs = tx.inputCommitments || []
            const mined = inputs.length && inputs.every((c) => nextUtxos.some((u) => u.commitmentHex === c && u.spentHeight === block.height))
            return tx.status === 'pending' && mined ? { ...tx, status: 'confirmed', minedHeight: block.height } : tx
          })
          for (const o of outputs) {
            if (nextUtxos.some((u) => u.commitmentHex === o.raw.commitmentHex)) continue
            nextUtxos.push({ ...o.raw, valueMicro: o.valueMicro, minedHeight: block.height })
            if (!nextHistory.some((h) => h.changeCommitmentHex === o.raw.commitmentHex)) {
              nextHistory.push({ id: o.raw.commitmentHex, family: 'tari', network: 'mainnet', symbol: 'XTM', direction: 'in', amountMicro: o.valueMicro,
                feeMicro: '0', status: 'confirmed', minedHeight: block.height, createdAt: block.timestamp * 1000 })
            }
          }
          const headers = { ...this.data.headers, [block.height]: block.hash }
          for (const key of Object.keys(headers)) if (Number(key) < block.height - 12) delete headers[key]
          const next = { ...this.data, utxos: nextUtxos, history: nextHistory, headers, lastSafeScannedHeight: block.height }
          await this.persist(next)
          signal.throwIfAborted()
          this.data = next
          this.reserve()
          this.rebuild()
          this.emit()
        } })
      this.known = true
    } catch (e) { if (!signal.aborted) this.syncError = e.message } finally {
      pool.dispose()
      this.life.signal.removeEventListener('abort', cancel)
      this.syncing = false
      this.emit()
    }
  }

  reserve () {
    const pending = new Set(this.data.history.filter((h) => h.status === 'pending').flatMap((h) => h.inputCommitments || []))
    this.data.utxos = this.data.utxos.map((u) => ({ ...u, reserved: pending.has(u.commitmentHex) }))
  }

  async export (password) {
    return this.exclusive(async () => {
      await this.stopScan()
      const signal = this.operationSignal()
      const file = await backup.exportBackup({ wallet: this.wallet, birthdayMs: this.data.birthdayMs, password, signal })
      this.check()
      return file
    })
  }

  async exported () {
    return this.exclusive(async () => {
      await this.stopScan()
      this.data.backupExportedAt = Date.now()
      await this.persist()
    })
  }

  async inspectImport (envelope, password) {
    return this.exclusive(async () => {
      await this.stopScan()
      this.cancelImport()
      this.pendingImport = await backup.importBackup({ envelope, password, signal: this.operationSignal() })
      this.check()
      return { address: this.pendingImport.address, replacement: !!this.data.address && this.pendingImport.address !== this.data.address }
    })
  }

  cancelImport () { this.pendingImport?.wallet.free(); this.pendingImport = null }

  operationSignal () {
    this.operation?.abort()
    this.operation = new AbortController()
    return this.operation.signal
  }

  cancelOperation () {
    if (this.committing) return false
    this.operation?.abort()
    this.cancelImport()
    return true
  }

  async acceptImport () {
    this.committing = true
    try { return await this.exclusive(async () => {
      await this.stopScan()
      await this.lock()
      this.check()
      const imported = this.pendingImport
      if (!imported) throw new Error('tari.invalidBackup')
      const same = this.data.address === imported.address
      const data = { ...empty(), address: imported.address, birthdayMs: same && this.data.birthdayMs != null ? Math.min(this.data.birthdayMs, imported.birthdayMs) : imported.birthdayMs,
        backupExportedAt: same ? this.data.backupExportedAt : null, history: same ? this.data.history.filter((h) => h.direction === 'out') : [] }
      if (!this.storageUnavailable) await this.persist(data, true, imported.wallet)
      this.handles.forEach((h) => h.free())
      this.handles.clear()
      this.wallet?.free()
      this.wallet = imported.wallet
      this.pendingImport = null
      this.data = data
      this.persisted = !this.storageUnavailable
      this.known = false
    }) } finally { this.committing = false }
  }

  async remove () {
    return this.exclusive(async () => {
      await this.stopScan()
      if (!this.storageUnavailable) await storage.removeWallet(this.userId)
      this.check()
      this.handles.forEach((h) => h.free())
      this.handles.clear()
      this.wallet?.free()
      this.wallet = null
      this.cancelImport()
      this.data = empty()
      this.known = false
    })
  }

  async max () {
    const { calculateFee } = await loadWasm()
    this.check()
    return maximum(spendable(this.data.utxos, this.handles, this.tipHeight), calculateFee)
  }

  async estimate (amount) {
    const { calculateFee } = await loadWasm()
    this.check()
    return selectInputs(spendable(this.data.utxos, this.handles, this.tipHeight), parseAmount(amount), calculateFee).feeMicro
  }

  async prepare (recipient, amount) {
    if (!this.known || this.syncing || this.syncError) throw new Error('tari.syncRequired')
    const normalized = await normalizeAddress(recipient)
    const { calculateFee } = await loadWasm()
    this.check()
    return { ...selectInputs(spendable(this.data.utxos, this.handles, this.tipHeight), parseAmount(amount), calculateFee), recipient: normalized }
  }

  async send (review) {
    return this.exclusive(async () => {
      await this.stopScan()
      const { calculateFee } = await loadWasm()
      const tip = await rpc.tip(this.life.signal)
      this.check()
      if (!this.known || this.syncError || tip.height - this.data.lastSafeScannedHeight > 3) throw new Error('tari.syncRequired')
      const current = selectInputs(spendable(this.data.utxos, this.handles, tip.height), review.amountMicro, calculateFee)
      if (current.feeMicro !== review.feeMicro || current.inputs.map((i) => i.commitmentHex).join() !== review.inputs.map((i) => i.commitmentHex).join()) throw new Error('tari.feeChanged')
      const signed = await signTransaction(this.wallet, review, this.handles, tip.height)
      this.check()
      const tx = { id: crypto.randomUUID(), family: 'tari', network: 'mainnet', symbol: 'XTM', direction: 'out', status: 'pending', createdAt: Date.now(),
        amountMicro: review.amountMicro.toString(), feeMicro: signed.feeMicro, recipient: review.recipient,
        changeValueMicro: signed.changeValueMicro, changeCommitmentHex: signed.changeCommitmentHex, inputCommitments: review.inputs.map((i) => i.commitmentHex) }
      // Reserve before the request: a timeout or tab close does not prove rejection.
      const next = { ...this.data, history: [...this.data.history, tx] }
      await this.persist(next, this.persisted)
      this.data = next
      this.reserve()
      try { await rpc.broadcast(signed.json, this.life.signal) } catch (e) {
        if (e.message === 'tari.rejected') tx.status = 'failed'
        this.reserve()
        if (!this.life.signal.aborted) await this.persist()
        throw e
      } finally { signed.json = null; this.emit() }
    })
  }

  dispose () {
    this.life.abort()
    this.operation?.abort()
    this.scanAbort?.abort()
    this.notify = () => {}
    this.cancelImport()
    this.handles.forEach((h) => h.free())
    this.handles.clear()
    this.wallet?.free()
    this.wallet = null
    this.data = empty()
    this.unlock?.()
  }
}
