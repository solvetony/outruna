import { createWallet, importOutput, loadWasm, restoreWallet, viewFromFull, walletAddress } from './wallet.js'
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
    this.previousTotalMicro = null
    this.busy = false
    this.error = null
    this.syncError = null
    this.revision = null
    this.lifecycle = 'active'
    this.activeOperations = new Set()
    this.hide = () => { if (globalThis.document?.hidden) this.lockSpend() }
    this.pageHide = () => this.lockSpend()
    globalThis.document?.addEventListener('visibilitychange', this.hide)
    globalThis.addEventListener?.('pagehide', this.pageHide)
  }

  emit () {
    if (this.life.signal.aborted) return
    const available = this.wallet ? spendable(this.data.utxos, null, this.tipHeight) : []
    const availableMicro = available.reduce((n, u) => n + BigInt(u.valueMicro), 0n)
    const mined = this.data.utxos.filter((u) => !u.spentHeight && !u.reserved)
    const totalMined = mined.reduce((n, u) => n + BigInt(u.valueMicro), 0n)
    const pendingMicro = this.data.history.filter((tx) => tx.direction === 'out' && tx.status === 'pending' && !this.data.utxos.some((u) => u.commitmentHex === tx.changeCommitmentHex))
      .reduce((n, tx) => n + BigInt(tx.changeValueMicro || 0), 0n)
    const totalMicro = totalMined + pendingMicro
    if (this.known || (!this.syncing && this.wallet && this.data.lastSafeScannedHeight != null && this.previousTotalMicro == null)) this.previousTotalMicro = totalMicro
    const displayKnown = this.known || (this.syncing && this.previousTotalMicro != null)
    this.notify({ ...this.data, initialized: !!this.wallet, needsPassword: !!this.wallet && this.needsPassword, unlocked: !!this.spendWallet && Date.now() < this.spendExpiresAt,
      spendExpiresAt: this.spendExpiresAt || null, ready: !this.busy, busy: this.busy, persisted: this.persisted,
      syncing: this.syncing, syncError: this.syncError, error: this.error, known: this.known, displayKnown, displayTotalMicro: displayKnown && this.syncing ? this.previousTotalMicro : totalMicro, tipHeight: this.tipHeight,
      availableMicro, totalMicro, pendingMicro, lockedMicro: totalMined - availableMicro })
  }

  check () { this.life.signal.throwIfAborted() }

  async exclusive (fn) {
    this.check()
    if (this.busy) throw new Error('tari.busy')
    this.busy = true
    this.error = null
    this.emit()
    const operation = (async () => fn())()
    this.activeOperations.add(operation)
    try { return await operation } finally { this.activeOperations.delete(operation); this.busy = false; this.emit() }
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
    this.check()
    if (this.wallet) return
    return this.exclusive(async () => {
      if (!this.userId) throw new Error('tari.accountError')
      await this.lock()
      let saved
      try { saved = await storage.loadWallet(this.userId) } catch (error) {
        this.persisted = false
        // A read/decryption failure cannot be treated as an absent wallet.
        if (error.message !== 'tari.storageUnavailable') {
          const identity = await storage.storedIdentity(this.userId)
          this.check()
          this.data.address = identity.address
          this.revision = identity.revision
          throw error
        }
        this.storageUnavailable = true
      }
      if (this.life.signal.aborted) { saved?.wallet.free(); this.check() }
      if (saved) {
        this.persisted = true
        this.storageUnavailable = false
        this.conflicted = false
        this.revision = saved.revision
        if (saved.legacy) {
          try { this.wallet = await viewFromFull(saved.wallet) } finally { saved.wallet.free() }
        } else this.wallet = saved.wallet
        this.needsPassword = saved.legacy
        this.sealedSpend = saved.sealedSpend
        this.data = saved.metadata
        if (this.data.lastSafeScannedHeight != null) {
          this.previousTotalMicro = this.data.utxos.filter((u) => !u.spentHeight && !u.reserved).reduce((sum, u) => sum + BigInt(u.valueMicro), 0n)
        }
      } else if (create) {
        const wallet = await createWallet()
        if (this.life.signal.aborted) { wallet.free(); this.check() }
        this.data = { ...empty(), address: walletAddress(wallet), birthdayMs: Date.now() }
        try {
          if (!this.storageUnavailable) this.revision = await storage.saveWallet(this.userId, wallet, this.data, null)
        } catch (e) {
          this.persisted = false
          if (e.message === 'tari.storageConflict') {
            this.data = empty()
            wallet.free()
            throw e
          }
        }
        try { this.wallet = await viewFromFull(wallet) } catch (e) { wallet.free(); throw e }
        this.needsPassword = true
        if (this.storageUnavailable || !this.persisted) this.legacyWallet = wallet
        else wallet.free()
      }
    }).catch((e) => { this.error = e.message; this.emit(); throw e })
  }

  rebuild () {
    this.handles.forEach((h) => h.free())
    this.handles.clear()
    if (!this.spendWallet) return
    let failed = false
    for (const u of this.data.utxos) {
      if (u.spentHeight) continue
      try {
        const h = importOutput(this.spendWallet, u)
        if (h.valueMicro.toString() !== u.valueMicro) { h.free(); throw new Error() }
        this.handles.set(u.commitmentHex, h)
      } catch { failed = true }
    }
    if (failed) {
      this.data.lastSafeScannedHeight = null
      this.known = false
    }
  }

  async persist (data = this.data, strict = false, wallet = this.wallet) {
    this.check()
    if (this.needsPassword) return
    if (!this.persisted && !strict) return
    try { this.revision = await storage.saveWatchWallet(this.userId, wallet, data, this.sealedSpend, this.revision) } catch (e) {
      if (e.message === 'tari.storageConflict') {
        this.conflicted = true
        this.known = false
        this.error = e.message
        throw e
      }
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
      if (this.data.headers[tip.height] !== tip.hash) throw new Error('tari.syncRequired')
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

  lockSpend () {
    clearTimeout(this.spendTimer)
    this.spendTimer = null
    this.spendExpiresAt = null
    this.handles.forEach((h) => h.free())
    this.handles.clear()
    this.spendWallet?.free()
    this.spendWallet = null
    this.emit()
  }

  async fullForPassword (password, signal) {
    if (this.needsPassword) {
      const loaded = this.legacyWallet || (await storage.loadWallet(this.userId))?.wallet
      if (!loaded || walletAddress(loaded) !== this.data.address) {
        if (loaded !== this.legacyWallet) loaded?.free()
        throw new Error('tari.storageError')
      }
      return loaded
    }
    const secret = await backup.unsealSpend({ sealed: this.sealedSpend, userId: this.userId, address: this.data.address, password, signal })
    signal?.throwIfAborted()
    const wallet = await restoreWallet(secret)
    if (walletAddress(wallet) !== this.data.address) { wallet.free(); throw new Error('tari.storageError') }
    return wallet
  }

  async unlockSpend (password) {
    return this.exclusive(async () => {
      if (this.needsPassword) throw new Error('tari.lockRequired')
      this.lockSpend()
      const signal = this.operationSignal()
      const wallet = await this.fullForPassword(password, signal)
      if (signal.aborted || this.life.signal.aborted) { wallet.free(); signal.throwIfAborted(); this.check() }
      this.spendWallet = wallet
      this.rebuild()
      this.spendExpiresAt = Date.now() + 60000
      this.spendTimer = setTimeout(() => this.lockSpend(), 60000)
      this.emit()
    })
  }

  async export (password) {
    return this.exclusive(async () => {
      const signal = this.operationSignal()
      await this.stopScan()
      signal.throwIfAborted()
      const full = await this.fullForPassword(password, signal)
      try {
        const file = await backup.exportBackup({ wallet: full, birthdayMs: this.data.birthdayMs, password, signal })
        if (this.needsPassword) {
          const sealed = await backup.sealSpend({ wallet: full, userId: this.userId, address: this.data.address, password, signal })
          if (!this.storageUnavailable) this.revision = await storage.saveWatchWallet(this.userId, this.wallet, this.data, sealed, this.revision)
          this.sealedSpend = sealed
          this.needsPassword = false
          if (this.legacyWallet === full) this.legacyWallet = null
        }
        this.check()
        return file
      } finally { if (full !== this.legacyWallet) full.free() }
    })
  }

  async exported () {
    return this.exclusive(async () => {
      await this.stopScan()
      this.check()
      this.data.backupExportedAt = Date.now()
      await this.persist()
    })
  }

  async inspectImport (envelope, password) {
    this.check()
    if (this.busy) throw new Error('tari.busy')
    const signal = this.operationSignal()
    if (!this.wallet && !this.storageUnavailable && !this.data.address) await this.open(false)
    signal.throwIfAborted()
    return this.exclusive(async () => {
      await this.stopScan()
      signal.throwIfAborted()
      this.cancelImport()
      const imported = await backup.importBackup({ envelope, password, signal })
      if (signal.aborted || this.life.signal.aborted) {
        imported.wallet.free()
        signal.throwIfAborted()
        this.check()
      }
      let wallet
      let sealedSpend
      try {
        wallet = await viewFromFull(imported.wallet)
        sealedSpend = await backup.sealSpend({ wallet: imported.wallet, userId: this.userId, address: imported.address, password, signal })
      } catch (e) { wallet?.free(); throw e } finally { imported.wallet.free() }
      this.pendingImport = { ...imported, wallet, sealedSpend }
      return { address: this.pendingImport.address, replacement: !!this.data.address && this.pendingImport.address !== this.data.address }
    })
  }

  cancelImport () { this.pendingImport?.wallet.free(); this.pendingImport = null }

  operationSignal () {
    this.check()
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
    return this.exclusive(async () => {
      this.committing = true
      try {
      await this.stopScan()
      await this.lock()
      this.check()
      const imported = this.pendingImport
      if (!imported) throw new Error('tari.invalidBackup')
      const same = this.data.address === imported.address
      const data = { ...empty(), address: imported.address, birthdayMs: same && this.data.birthdayMs != null ? Math.min(this.data.birthdayMs, imported.birthdayMs) : imported.birthdayMs,
        backupExportedAt: same ? this.data.backupExportedAt : null, history: same ? this.data.history.filter((h) => h.direction === 'out') : [] }
      if (!this.storageUnavailable) this.revision = await storage.saveWatchWallet(this.userId, imported.wallet, data, imported.sealedSpend, this.revision)
      this.lockSpend()
      this.legacyWallet?.free()
      this.legacyWallet = null
      this.wallet?.free()
      this.wallet = imported.wallet
      this.pendingImport = null
      this.data = data
      this.sealedSpend = imported.sealedSpend
      this.needsPassword = false
      this.persisted = !this.storageUnavailable
      this.known = false
      if (!same) this.previousTotalMicro = null
      } finally { this.committing = false }
    })
  }

  async remove () {
    return this.exclusive(async () => {
      if (!this.wallet || !this.data.backupExportedAt) throw new Error('tari.removeUnbacked')
      await this.stopScan()
      this.check()
      if (!this.storageUnavailable) await storage.removeWallet(this.userId, this.revision)
      this.check()
      this.lockSpend()
      this.wallet?.free()
      this.wallet = null
      this.legacyWallet?.free()
      this.legacyWallet = null
      this.sealedSpend = null
      this.needsPassword = false
      this.cancelImport()
      this.data = empty()
      this.revision = null
      this.known = false
      this.previousTotalMicro = null
    })
  }

  async max () {
    const { calculateFee } = await loadWasm()
    this.check()
    return maximum(spendable(this.data.utxos, null, this.tipHeight), calculateFee)
  }

  async estimate (amount) {
    const { calculateFee } = await loadWasm()
    this.check()
    return selectInputs(spendable(this.data.utxos, null, this.tipHeight), parseAmount(amount), calculateFee).feeMicro
  }

  async prepare (recipient, amount) {
    if (!this.known || this.syncing || this.syncError) throw new Error('tari.syncRequired')
    const normalized = await normalizeAddress(recipient)
    const { calculateFee } = await loadWasm()
    this.check()
    return { ...selectInputs(spendable(this.data.utxos, null, this.tipHeight), parseAmount(amount), calculateFee), recipient: normalized }
  }

  async send (review) {
    return this.exclusive(async () => {
      if (!this.spendWallet || Date.now() >= this.spendExpiresAt) { this.lockSpend(); throw new Error('tari.lockExpired') }
      await this.stopScan()
      const { calculateFee } = await loadWasm()
      const tip = await rpc.verifySpendView(this.data.lastSafeScannedHeight, this.data.headers[this.data.lastSafeScannedHeight], this.life.signal)
      this.check()
      if (!this.spendWallet || Date.now() >= this.spendExpiresAt) { this.lockSpend(); throw new Error('tari.lockExpired') }
      if (!this.known || this.syncError || this.conflicted || this.data.lastSafeScannedHeight == null ||
        tip.height !== this.data.lastSafeScannedHeight) throw new Error('tari.syncRequired')
      const anchor = await rpc.header(this.data.lastSafeScannedHeight, this.life.signal)
      if (anchor.hash !== this.data.headers[this.data.lastSafeScannedHeight]) throw new Error('tari.syncRequired')
      const current = selectInputs(spendable(this.data.utxos, this.handles, tip.height), review.amountMicro, calculateFee)
      if (current.feeMicro !== review.feeMicro || current.inputs.map((i) => i.commitmentHex).join() !== review.inputs.map((i) => i.commitmentHex).join()) throw new Error('tari.feeChanged')
      clearTimeout(this.spendTimer)
      let signed
      try {
        signed = await signTransaction(this.spendWallet, review, this.handles, tip.height, this.life.signal)
        if (Date.now() >= this.spendExpiresAt) throw new Error('tari.lockExpired')
      } finally { this.lockSpend() }
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
    if (this.disposing) return this.disposing
    this.lifecycle = 'disposing'
    globalThis.document?.removeEventListener('visibilitychange', this.hide)
    globalThis.removeEventListener?.('pagehide', this.pageHide)
    this.life.abort()
    this.operation?.abort()
    this.scanAbort?.abort()
    this.notify = () => {}
    this.disposing = (async () => {
      await Promise.allSettled([...this.activeOperations, this.scanning])
      this.cancelImport()
      this.lockSpend()
      this.wallet?.free()
      this.wallet = null
      this.legacyWallet?.free()
      this.legacyWallet = null
      this.sealedSpend = null
      this.data = empty()
      this.unlock?.()
      this.lifecycle = 'disposed'
    })()
    return this.disposing
  }
}
