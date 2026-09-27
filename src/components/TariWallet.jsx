import { useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { AlertTriangle, ArrowUpFromLine, Check, Copy, Download, History, Info, Plus, RefreshCcw, Trash2, Upload, X } from 'lucide-preact'
import qrcode from 'qrcode-generator'
import { useI18n } from '../i18n/index.jsx'
import { supportedChains, getNetworkLogoUrl } from '../lib/chains.js'
import { formatAddress, formatUsd } from '../lib/format.js'
import { fetchCoinGeckoPrices } from '../lib/coingecko.js'
import { formatMicro } from '../tari/amount.js'
import { readBackup } from '../tari/backup.js'
import { INPUT_LIMITS } from '../tari/limits.js'

export function TariIcon ({ className = 'network-logo network-logo-sm' }) {
  return <img className={className} src='/tari.png' alt='' />
}

export function TariSettingsRow ({ state, onOpen }) {
  const { t } = useI18n()
  return <button className='settings-preference-row tari-settings-row' type='button' onClick={onOpen}>
    <TariIcon /><span><strong>{t('tari.title')}</strong><small>{t('tari.settingsDescription')}</small>
      <small>{t(!state.initialized ? 'tari.notInitialized' : state.backupExportedAt ? 'tari.backupExported' : 'tari.backupMissing')}</small></span>
  </button>
}

function Warning ({ state, onExport }) {
  const { t } = useI18n()
  if (!state.initialized || state.backupExportedAt) return null
  return <aside className='tari-warning' role='alert'><AlertTriangle size={18} />
    <div><strong>{t('tari.backupWarning')}</strong><p>{t('tari.backupWarningBody')}</p>
      <button className='wallet-button wallet-button--secondary' onClick={onExport}>{t('tari.download')}</button></div></aside>
}

function Row ({ label, children }) {
  return <div className='detail-row tari-detail'><span>{label}</span><strong>{children}</strong></div>
}

function Sheet ({ title, onClose, children }) {
  const { t } = useI18n()
  const ref = useRef()
  const closeRef = useRef(onClose)
  closeRef.current = onClose
  useEffect(() => {
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    const key = (e) => {
      if (e.key === 'Escape') closeRef.current()
      if (e.key !== 'Tab') return
      const items = [...ref.current.querySelectorAll('button:not(:disabled),input:not(:disabled),select,a[href]')]
      const first = items[0], last = items.at(-1)
      if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last?.focus() }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', key)
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', key); previous?.focus() }
  }, [])
  return <div className='deposit-modal' onClick={onClose}>
    <section ref={ref} tabIndex={-1} className='wallet-dialog wallet-dialog--sheet tari-sheet' role='dialog' aria-modal='true' aria-label={title} onClick={(e) => e.stopPropagation()}>
      <header className='wallet-dialog-header'><span className='wallet-dialog-header-icon'><TariIcon className='network-logo network-logo-md' /></span><div className='wallet-dialog-heading'><h2>{title}</h2></div>
        <button className='wallet-icon-button' onClick={onClose} aria-label={t('common.close')}><X size={18} /></button></header>
      <div className='wallet-dialog-body tari-stack'>{children}</div>
    </section>
  </div>
}

function Password ({ label, value, onInput, show, autoComplete }) {
  return <label className='form-field'><span>{label}</span><input type={show ? 'text' : 'password'} maxLength={INPUT_LIMITS.password} value={value} onInput={(e) => onInput(e.currentTarget.value)} autoComplete={autoComplete} /></label>
}

export function TariWalletUI ({ state, selected, showAssets, sheet, setSheet, onEvm, logoUrl = '/images/outruna-logo.webp', logoClickCount = 0, logoNameVisible = false, logoHighlightClass = '', onLogoClick = () => {} }) {
  const { t } = useI18n()
  const [picker, setPicker] = useState(false)
  const [price, setPrice] = useState(null)
  const [feedback, setFeedback] = useState('')
  const manager = () => state.manager.current
  const errorText = (e) => t(e?.message?.startsWith('tari.') ? e.message : 'tari.generalError')
  useEffect(() => {
    if (!selected) return
    let cancelled = false
    fetchCoinGeckoPrices(['XTM']).then((p) => { if (!cancelled) setPrice(p.XTM) }).catch(() => {})
    return () => { cancelled = true }
  }, [selected])
  const copy = async () => {
    try { await navigator.clipboard.writeText(state.address); setFeedback(t('tari.addressCopied')) } catch (e) { setFeedback(errorText(e)) }
  }
  const openExport = () => setSheet('export')
  const fiat = state.known && price?.usd != null ? formatUsd(Number(formatMicro(state.totalMicro)) * price.usd) : t('tari.unavailable')
  const sync = state.syncing ? 'tari.syncing' : state.syncError ? 'tari.syncError' : state.known ? 'tari.synced' : 'tari.unknown'
  const syncProgress = state.syncing && state.lastSafeScannedHeight != null && state.tipHeight != null
    ? `${state.lastSafeScannedHeight} / ${state.tipHeight}`
    : state.syncError ? t('tari.retry') : t(sync)
  const qr = useMemo(() => {
    if (!state.address) return null
    const code = qrcode(0, 'M')
    code.addData(state.address)
    code.make()
    const size = code.getModuleCount()
    const cells = []
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (code.isDark(y, x)) cells.push(`M${x + 4},${y + 4}h1v1h-1z`)
    return <svg viewBox={`0 0 ${size + 8} ${size + 8}`} xmlns='http://www.w3.org/2000/svg' shapeRendering='crispEdges'>
      <rect width={size + 8} height={size + 8} fill='white' /><path d={cells.join('')} fill='black' /></svg>
  }, [state.address])
  const close = () => { if (manager()?.cancelOperation() !== false) setSheet(null) }
  return <>
    {selected && <>
      <header className='wallet-header'><div className='wallet-title-block'>
        <button key={logoClickCount} className={`wallet-mark ${logoHighlightClass}`} type='button' onClick={onLogoClick} aria-label={t('auth.title')} title={t('auth.title')}>
          <img className='wallet-logo-image' src={logoUrl} alt='Outruna logo' />
        </button>
        <div>{logoNameVisible && <span className={`wallet-brand-name ${logoHighlightClass}`}>{t('auth.title')}</span>}
          <div className='wallet-subtitle'><TariIcon /><span>{t('tari.name')}</span>{state.known && <span className='online-dot' />}</div></div></div>
        <div className='wallet-header-actions tari-header-actions'><span className={state.syncError ? 'tari-sync tari-sync--error' : 'tari-sync'} role='status'>{syncProgress}</span>
          <button className='icon-button' onClick={() => manager()?.refresh()} disabled={state.syncing || !state.initialized} aria-label={t('common.refresh')}><RefreshCcw size={18} /></button></div></header>
      <div className='hero-card'><div className='hero-balance-copy'><p className='hero-label'>{t('wallet.portfolio')}</p><strong className='hero-number'>{fiat}</strong></div>
        <div className='hero-wallet-row'><div className='hero-account-control'>
          <button className='hero-network-trigger' onClick={() => setPicker(!picker)} aria-label={t('wallet.switchNetwork')} aria-expanded={picker}><TariIcon className='network-logo network-logo-md' /></button>
          <span className='hero-account-address' title={state.address}>{state.initialized ? formatAddress(state.address, 8, 6) : t(state.busy ? 'tari.preparing' : 'tari.notInitialized')}</span>
          <button className='hero-copy-button' onClick={copy} disabled={!state.address} aria-label={t('wallet.copyAddress')}><Copy size={15} /></button></div>
          {picker && <div className='hero-network-picker'><div className='chain-strip-scroll'>{supportedChains.map((chain) =>
            <button key={chain.id} className='chain-pill' onClick={() => { setPicker(false); onEvm(chain) }} title={chain.name} aria-label={chain.name}><img className='network-logo network-logo-sm' src={getNetworkLogoUrl(chain.id)} alt='' /></button>)}
            <button className='chain-pill active' aria-label={t('tari.name')} title={t('tari.name')} onClick={() => setPicker(false)}><TariIcon /></button></div></div>}
          <div className='hero-wallet-actions'>{[['receive', Plus, 'common.deposit'], ['send', ArrowUpFromLine, 'common.withdraw'], ['history', History, 'common.history']].map(([name, Icon, label]) =>
            <button className='hero-wallet-action' disabled={!state.initialized} onClick={() => setSheet(name)}><Icon size={18} /><span>{t(label)}</span></button>)}</div>
        </div></div>
      {state.error && <p role='alert' className='swap-error'>{errorText({ message: state.error })}</p>}
      {!state.persisted && <aside className='tari-warning' role='alert'><Info size={18} /><div>{t('tari.sessionOnly')}</div></aside>}
      <Warning state={state} onExport={openExport} />
      {!state.initialized && <button className='wallet-button' disabled={state.busy} onClick={() => manager()?.open(true).then(() => manager()?.refresh()).catch((e) => setFeedback(errorText(e)))}>{t('tari.create')}</button>}
      <button className='toggle-button' onClick={() => setSheet('import')}>{t('tari.importExisting')}</button>
      {showAssets && state.initialized && <section className='assets-section'><div className='assets-list'>
        <button className='asset-row asset-row-clickable tari-asset' onClick={() => setSheet('details')}><div className='asset-left'><TariIcon className='coin-icon' /><div className='asset-copy'><strong>{t('tari.symbol')}</strong><p>{t('tari.name')}</p><span className='asset-price'>{price?.usd != null ? formatUsd(price.usd, 6) : t('tari.unavailable')}</span></div></div>
          <div className='asset-right'><strong>{state.known ? `${formatMicro(state.totalMicro)} ${t('tari.symbol')}` : t('tari.unknown')}</strong><span>{fiat}</span></div></button>
      </div></section>}
    </>}
    {feedback && <p role='status' className='tari-feedback'>{feedback}</p>}
    {sheet && <Sheet key={sheet} title={t({ receive: 'tari.receive', send: 'tari.send', history: 'tari.history', settings: 'tari.title', export: 'tari.exportTitle', import: 'tari.import', details: 'tari.details' }[sheet])} onClose={close}>
      {sheet === 'receive' && <><div className='deposit-steps'>
        <div className='deposit-step deposit-qr-layout'>
          <span className='deposit-step-number'>1</span>
          <div className='deposit-step-content'><strong className='deposit-step-title'>{t('deposit.scan')}</strong><span className='deposit-step-description'>{t('tari.receiveSubtitle')}</span></div>
          <div className='deposit-qr-card'><div className='deposit-qr-image' role='img' aria-label={t('tari.qr')}>{qr}</div></div>
        </div>
        <div className='deposit-step'>
          <span className='deposit-step-number'>2</span>
          <div className='deposit-step-content'><strong className='deposit-step-title'>{t('deposit.copyTitle')}</strong><span className='deposit-step-description'>{t('deposit.copyDescription')}</span>
            <div className='deposit-address-control'><TariIcon className='deposit-address-network-icon' /><span className='deposit-address-text tari-address' title={state.address}>{state.address}</span>
              <button className='deposit-address-copy' type='button' onClick={copy} disabled={!state.address} aria-label={t('wallet.copyAddress')} title={t('wallet.copyAddress')}>{feedback ? <Check size={15} /> : <Copy size={15} />}</button></div>
            {feedback && <span className='deposit-copy-feedback'><Check size={12} />{feedback}</span>}
          </div>
        </div>
        <div className='deposit-safety-note'><Info size={15} /><span>{t('tari.receiveNotice')}</span></div>
      </div>{!state.backupExportedAt && <p>{t('tari.receiveBackup')}</p>}<Warning state={state} onExport={openExport} /></>}
      {(sheet === 'settings' || sheet === 'details') && <>
        <Row label={t('wallet.network')}>{t('tari.name')}</Row><Row label={t('tari.address')}><span className='tari-address'>{state.address || t('tari.notInitialized')}</span></Row>
        {state.address && <button className='wallet-button wallet-button--secondary' onClick={copy}><Copy size={16} />{t('common.copy')}</button>}
        {sheet === 'details' && <><Row label={t('tari.symbol')}>{t('tari.symbol')}</Row><Row label={t('tari.decimals')}>6</Row><Row label={t('tari.type')}>{t('tari.nativeAsset')}</Row><Row label={t('tari.price')}>{price?.usd != null ? formatUsd(price.usd, 6) : t('tari.unavailable')}</Row><Row label={t('tari.sync')}>{t(sync)}</Row></>}
        <Row label={t('tari.backup')}>{t(!state.initialized ? 'tari.notInitialized' : state.backupExportedAt ? 'tari.backupExported' : 'tari.backupMissing')}</Row>
        <p>{t('tari.localWarning')}</p><button className='wallet-button' disabled={!state.initialized} onClick={openExport}><Download size={16} />{t('tari.export')}</button>
        <button className='wallet-button wallet-button--secondary' onClick={() => setSheet('import')}><Upload size={16} />{t('tari.import')}</button>
        {sheet === 'settings' && <Remove state={state} onClose={close} errorText={errorText} />}</>}
      {sheet === 'export' && <Export state={state} onClose={close} onSuccess={() => setFeedback(t('tari.backupExported'))} errorText={errorText} />}
      {sheet === 'import' && <Import state={state} onClose={close} errorText={errorText} />}
      {sheet === 'send' && <Send state={state} onClose={close} errorText={errorText} onSuccess={() => setFeedback(t('tari.sent'))} />}
      {sheet === 'history' && <>{!state.history.length && <p>{t('tari.emptyHistory')}</p>}{[...state.history].reverse().map((tx) => <article className='tari-history' key={tx.id}>
        <Row label={t(`tari.${tx.direction}`)}>{formatMicro(tx.amountMicro)} {t('tari.symbol')}</Row><Row label={t(`tari.${tx.status}`)}>{new Date(tx.createdAt).toLocaleString()}</Row>
        {tx.recipient && <p className='tari-address'>{tx.recipient}</p>}<Row label={t('tari.fee')}>{formatMicro(tx.feeMicro)} {t('tari.symbol')}</Row>{tx.minedHeight != null && <Row label={t('tari.height')}>{tx.minedHeight}</Row>}
      </article>)}</>}
    </Sheet>}
  </>
}

function Export ({ state, onClose, onSuccess, errorText }) {
  const { t } = useI18n()
  const [password, setPassword] = useState(''), [confirm, setConfirm] = useState(''), [show, setShow] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState('')
  const submit = async (e) => {
    e.preventDefault()
    if (busy) return
    if (password !== confirm) { setError(t('tari.passwordMismatch')); return }
    setBusy(true)
    try {
      const manager = state.manager.current
      const file = await manager.export(password)
      const url = URL.createObjectURL(file)
      const link = document.createElement('a')
      link.href = url
      link.download = `outruna-tari-mainnet-${new Date().toISOString().slice(0, 10)}.backup`
      document.body.appendChild(link)
      link.click()
      link.remove()
      setTimeout(() => URL.revokeObjectURL(url), 60000)
      setPassword(''); setConfirm('')
      await manager.exported()
      onSuccess(); onClose()
    } catch (e) { setError(errorText(e)) } finally { setBusy(false) }
  }
  return <form className='tari-stack' onSubmit={submit}><p>{t('tari.exportDescription')}</p>
    <Password label={t('tari.password')} value={password} onInput={setPassword} show={show} autoComplete='new-password' />
    <Password label={t('tari.confirmPassword')} value={confirm} onInput={setConfirm} show={show} autoComplete='new-password' />
    <label><input type='checkbox' checked={show} onChange={(e) => setShow(e.currentTarget.checked)} />{t('tari.showPassword')}</label>
    <div className='deposit-safety-note'><Info size={15} /><span>{t('tari.passwordNotice')}</span></div>{error && <p role='alert' className='swap-error'>{error}</p>}
    <button className='wallet-button' disabled={busy}>{t(busy ? 'tari.encrypting' : 'tari.download')}</button></form>
}

function Import ({ state, onClose, errorText }) {
  const { t } = useI18n()
  const [envelope, setEnvelope] = useState(null), [password, setPassword] = useState(''), [show, setShow] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState(''), [replacement, setReplacement] = useState(null)
  const accept = async () => { await state.manager.current.acceptImport(); state.manager.current.refresh(); onClose() }
  const submit = async (e) => {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    try {
      const result = await state.manager.current.inspectImport(envelope, password)
      setPassword('')
      if (result.replacement) setReplacement(result.address)
      else await accept()
    } catch (e) { setError(errorText(e)) } finally { setBusy(false) }
  }
  return replacement ? <><h3>{t('tari.replaceTitle')}</h3><p>{t('tari.replaceWarning')}</p><Row label={t('tari.current')}>{state.address}</Row><Row label={t('tari.imported')}>{replacement}</Row>
    {error && <p role='alert'>{error}</p>}<button className='wallet-button wallet-button--secondary' onClick={onClose}>{t('common.cancel')}</button>
    <button className='wallet-button tari-danger' disabled={busy} onClick={async () => { setBusy(true); try { await accept() } catch (e) { setError(errorText(e)) } finally { setBusy(false) } }}>{t('tari.replace')}</button></>
    : <form className='tari-stack' onSubmit={submit}><label className='form-field'><span>{t('tari.chooseFile')}</span><input type='file' accept='.backup,application/vnd.outruna.tari-backup+json' disabled={busy} onChange={async (e) => {
      setEnvelope(null); setError(''); try { setEnvelope(await readBackup(e.currentTarget.files[0])) } catch (e) { setError(errorText(e)) }
    }} /></label>
      {envelope && <><Row label={t('wallet.network')}>{t('tari.name')}</Row><p className='tari-address'>{envelope.address}</p><Row label={t('tari.creationDate')}>{new Date(envelope.createdAt).toLocaleString()}</Row>
        <Password label={t('tari.password')} value={password} onInput={setPassword} show={show} autoComplete='current-password' />
        <label><input type='checkbox' checked={show} onChange={(e) => setShow(e.currentTarget.checked)} />{t('tari.showPassword')}</label></>}
      {error && <p role='alert' className='swap-error'>{error}</p>}<button className='wallet-button' disabled={busy || !envelope}>{t(busy ? 'tari.decrypting' : 'tari.restore')}</button></form>
}

function Remove ({ state, onClose, errorText }) {
  const { t } = useI18n()
  const [confirm, setConfirm] = useState(false), [error, setError] = useState('')
  return <>{confirm && <aside className='tari-warning' role='alert'><AlertTriangle size={18} /><div><strong>{t('tari.removeTitle')}</strong><p>{t('tari.removeWarning')}</p>{!state.backupExportedAt && <p>{t('tari.removeUnbacked')}</p>}<button className='wallet-button wallet-button--secondary' onClick={() => setConfirm(false)}>{t('common.cancel')}</button></div></aside>}
    {error && <p role='alert'>{error}</p>}<button className='wallet-button tari-danger' disabled={!state.initialized || state.busy} onClick={async () => {
      if (!confirm) { setConfirm(true); return }
      try { await state.manager.current.remove(); onClose() } catch (e) { setError(errorText(e)) }
    }}><Trash2 size={16} />{t('tari.remove')}</button></>
}

function Send ({ state, onClose, onSuccess, errorText }) {
  const { t } = useI18n()
  const [recipient, setRecipient] = useState(''), [amount, setAmount] = useState(''), [review, setReview] = useState(null), [busy, setBusy] = useState(false), [error, setError] = useState('')
  const [fee, setFee] = useState(null)
  useEffect(() => {
    let cancelled = false
    state.manager.current.estimate(amount).then((value) => { if (!cancelled) setFee(value) }).catch(() => { if (!cancelled) setFee(null) })
    return () => { cancelled = true }
  }, [amount, state.availableMicro])
  const action = async (fn) => { if (busy) return; setBusy(true); setError(''); try { await fn() } catch (e) { setError(errorText(e)) } finally { setBusy(false) } }
  return <>{review ? <><h3>{t('tari.review')}</h3><Row label={t('tari.recipient')}>{review.recipient}</Row><Row label={t('tari.amount')}>{formatMicro(review.amountMicro)} {t('tari.symbol')}</Row><Row label={t('wallet.network')}>{t('tari.name')}</Row><Row label={t('tari.fee')}>{formatMicro(review.feeMicro)} {t('tari.symbol')}</Row><Row label={t('tari.total')}>{formatMicro(review.amountMicro + review.feeMicro)} {t('tari.symbol')}</Row>
    <button className='wallet-button wallet-button--secondary' disabled={busy} onClick={() => setReview(null)}>{t('tari.back')}</button>
    <button className='wallet-button' disabled={busy} onClick={() => action(async () => { await state.manager.current.send(review); onSuccess(); state.manager.current.refresh(); onClose() })}>{t(busy ? 'tari.signing' : 'tari.confirmSend')}</button></>
    : <form className='tari-stack' onSubmit={(e) => { e.preventDefault(); action(async () => setReview(await state.manager.current.prepare(recipient, amount))) }}>
      <label className='form-field'><span>{t('tari.recipient')}</span><input maxLength={INPUT_LIMITS.address} value={recipient} onInput={(e) => setRecipient(e.currentTarget.value)} placeholder={t('tari.recipientPlaceholder')} autoCapitalize='off' spellCheck={false} /></label>
      <label className='form-field'><span>{t('tari.amount')} ({t('tari.symbol')})</span>
        <div className='swap-amount-card wallet-amount-card'><input maxLength={INPUT_LIMITS.amount} inputMode='decimal' value={amount} onInput={(e) => setAmount(e.currentTarget.value)} placeholder='0.00' />
          <button type='button' className='wallet-button wallet-button--compact wallet-button--ghost swap-max-button' disabled={busy || !state.known} onClick={() => action(async () => setAmount(formatMicro(await state.manager.current.max())))}>{t('common.max')}</button></div>
      </label>
      <Row label={t('tari.available')}>{state.known ? formatMicro(state.availableMicro) : t('tari.unknown')} {t('tari.symbol')}</Row>
      <Row label={t('tari.fee')}>{fee == null ? t('tari.unavailable') : formatMicro(fee)} {t('tari.symbol')}</Row>
      <Row label={t('tari.locked')}>{formatMicro(state.lockedMicro)} {t('tari.symbol')}</Row><Row label={t('tari.pendingBalance')}>{formatMicro(state.pendingMicro)} {t('tari.symbol')}</Row>
      <button className='wallet-button' disabled={busy || !state.known || state.syncing || state.availableMicro <= 0n}>{t('tari.review')}</button></form>}
    {error && <p role='alert' className='swap-error'>{error}</p>}</>
}
