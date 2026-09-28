import { useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { AlertTriangle, ArrowUpFromLine, Box, Check, ChevronRight, CircleDollarSign, Coins, Copy, Download, Eye, EyeOff, Globe2, Hash, History, Info, Plus, RefreshCcw, ShieldCheck, Trash2, Upload, Wallet, X } from 'lucide-preact'
import qrcode from 'qrcode-generator'
import { useI18n } from '../i18n/index.jsx'
import { supportedChains, getNetworkLogoUrl } from '../lib/chains.js'
import { formatAddress, formatUsd } from '../lib/format.js'
import { fetchCoinGeckoPrices } from '../lib/coingecko.js'
import { formatMicro } from '../tari/amount.js'
import { readBackup } from '../tari/backup.js'
import { INPUT_LIMITS } from '../tari/limits.js'
import { passwordStrength } from '../lib/passwordStrength.js'
import { useEventListener } from '../shared/hooks.js'
import builtinTokenRegistry from '../../shared/outruna-builtin-tokens.json'

const TARI_LOGO_URL = builtinTokenRegistry['tari:mainnet'][0].logoUrl

export function TariIcon ({ className = 'network-logo network-logo-sm' }) {
  return <img className={className} src={TARI_LOGO_URL} alt='' referrerPolicy='no-referrer' onError={(event) => {
    if (event.currentTarget.getAttribute('src') !== '/tari.png') event.currentTarget.src = '/tari.png'
  }} />
}

export function TariSettingsRow ({ state, onOpen }) {
  const { t } = useI18n()
  return <button className='settings-preference-row tari-settings-row' type='button' onClick={onOpen}>
    <span className='settings-preferences-icon' aria-hidden='true'><TariIcon /></span>
    <span className='security-preferences-copy'><strong>{t('tari.title')}</strong><span>{t('tari.settingsDescription')}</span>
      <small className={state.initialized && !state.backupExportedAt ? 'tari-status-missing' : ''}>{t(!state.initialized ? 'tari.notInitialized' : state.backupExportedAt ? 'tari.backupExported' : 'tari.backupMissing')}</small></span>
    <ChevronRight size={17} aria-hidden='true' />
  </button>
}

function Warning ({ state, onOpen }) {
  const { t } = useI18n()
  if (!state.initialized || (state.backupExportedAt && !state.needsPassword)) return null
  return <aside className='tari-warning' role='alert'><AlertTriangle size={18} />
    <div><strong>{t(state.needsPassword ? 'tari.setPasswordTitle' : 'tari.backupWarning')}</strong><p>{t(state.needsPassword ? 'tari.setPasswordBody' : 'tari.backupWarningBody')}</p>
      <button className='wallet-button wallet-button--secondary' onClick={onOpen}>{t(state.needsPassword ? 'tari.setPassword' : 'tari.manage')}</button></div></aside>
}

function Row ({ label, children }) {
  return <div className='detail-row tari-detail'><span>{label}</span><strong>{children}</strong></div>
}

function AssetDetailRow ({ icon: Icon, label, children }) {
  return <div className='tari-asset-details-row'><span className='tari-asset-details-label'><Icon size={15} aria-hidden='true' />{label}</span><strong className='tari-asset-details-value'>{children}</strong></div>
}

export function shortTariAddress (address) {
  const value = String(address || '')
  return value.length > 21 ? `${value.slice(0, 10)}…${value.slice(-8)}` : value
}

function TariAssetDetails ({ state, price, sync, copy, feedback, openExport, openImport }) {
  const { t } = useI18n()
  const backup = !state.initialized ? 'tari.notInitialized' : state.backupExportedAt ? 'tari.backupExported' : 'tari.backupMissing'
  return <div className='tari-asset-details'>
    <div className='tari-asset-details-list'>
      <AssetDetailRow icon={Globe2} label={t('wallet.network')}>{t('tari.name')}{sync === 'tari.synced' && <span className='tari-asset-details-dot tari-asset-details-dot--ready' aria-hidden='true' />}</AssetDetailRow>
      <AssetDetailRow icon={Wallet} label={t('tari.address')}><span className='tari-asset-details-address' title={state.address} aria-label={state.address || t('tari.notInitialized')}>{state.address ? shortTariAddress(state.address) : t('tari.notInitialized')}</span>{state.address && <button type='button' className='tari-asset-details-copy' onClick={copy} aria-label={t('wallet.copyAddress')} title={t('wallet.copyAddress')}>{feedback === t('tari.addressCopied') ? <Check size={16} aria-hidden='true' /> : <Copy size={16} aria-hidden='true' />}</button>}</AssetDetailRow>
      <AssetDetailRow icon={Coins} label={t('tari.symbol')}>{t('tari.symbol')}</AssetDetailRow>
      <AssetDetailRow icon={Hash} label={t('tari.decimals')}>6</AssetDetailRow>
      <AssetDetailRow icon={Box} label={t('tari.type')}>{t('tari.nativeAsset')}</AssetDetailRow>
      <AssetDetailRow icon={CircleDollarSign} label={t('tari.price')}>{price?.usd != null ? formatUsd(price.usd, 6) : t('tari.unavailable')}</AssetDetailRow>
      <AssetDetailRow icon={RefreshCcw} label={t('tari.sync')}>{t(sync)}{sync === 'tari.synced' && <span className='tari-asset-details-dot tari-asset-details-dot--ready' aria-hidden='true' />}</AssetDetailRow>
      <AssetDetailRow icon={ShieldCheck} label={t('tari.backup')}><span className={backup === 'tari.backupMissing' ? 'tari-status-missing' : ''}>{t(backup)}</span>{backup !== 'tari.notInitialized' && <span className={`tari-asset-details-dot ${backup === 'tari.backupExported' ? 'tari-asset-details-dot--ready' : 'tari-asset-details-dot--warning'}`} aria-hidden='true' />}</AssetDetailRow>
    </div>
    <div className='tari-asset-details-notice'><Info size={16} aria-hidden='true' /><span>{t('tari.localWarning')}</span></div>
    <div className='tari-asset-details-actions'>
      <button type='button' className='wallet-button' disabled={!state.initialized} onClick={openExport}><Download size={16} aria-hidden='true' />{t('tari.export')}</button>
      <button type='button' className='wallet-button wallet-button--secondary' onClick={openImport}><Upload size={16} aria-hidden='true' />{t('tari.import')}</button>
    </div>
  </div>
}

function TariSettings ({ state, copy, openExport, openImport, onClose, errorText }) {
  const { t } = useI18n()
  const backupStatus = !state.initialized ? 'tari.notInitialized' : state.backupExportedAt ? 'tari.backupExported' : 'tari.backupMissing'
  return <div className='tari-settings-panel'>
    <div className='tari-settings-info'>
      <div className='tari-settings-info-row'><TariIcon className='tari-settings-info-icon' /><div><span>{t('wallet.network')}</span><strong>{t('tari.name')}</strong></div></div>
      <div className='tari-settings-info-row'><Wallet className='tari-settings-info-icon' size={19} aria-hidden='true' /><div><span>{t('tari.address')}</span><strong className='tari-settings-address' title={state.address}>{state.address || t('tari.notInitialized')}</strong></div>
        {state.address && <button type='button' className='tari-settings-copy' onClick={copy} aria-label={t('wallet.copyAddress')} title={t('wallet.copyAddress')}><Copy size={17} /></button>}</div>
      <div className='tari-settings-info-row'><Info className='tari-settings-info-icon' size={19} aria-hidden='true' /><div><span>{t('tari.backup')}</span><strong className={!state.backupExportedAt && state.initialized ? 'tari-status-missing' : 'tari-status-ready'}>{t(backupStatus)}</strong></div></div>
    </div>
    <div className={!state.backupExportedAt && state.initialized ? 'tari-settings-notice tari-settings-notice--warning' : 'tari-settings-notice'}><Info size={15} aria-hidden='true' /><span>{t('tari.localWarning')}</span></div>
    <div className='tari-settings-actions'>
      <button type='button' className='tari-settings-action tari-settings-action--export' disabled={!state.initialized} onClick={openExport}><Download size={20} /><span>{t('tari.exportAction')}</span></button>
      <button type='button' className='tari-settings-action' onClick={openImport}><Upload size={20} /><span>{t('tari.importAction')}</span></button>
      <Remove state={state} onClose={onClose} errorText={errorText} compact />
    </div>
  </div>
}

function Sheet ({ title, subtitle, onClose, children }) {
  const { t } = useI18n()
  const ref = useRef()
  const closeRef = useRef(onClose)
  closeRef.current = onClose
  useEventListener(() => document, 'keydown', (e) => {
    if (e.key === 'Escape') closeRef.current()
    if (e.key !== 'Tab') return
    const items = [...ref.current.querySelectorAll('button:not(:disabled),input:not(:disabled),select,a[href]')]
    const first = items[0], last = items.at(-1)
    if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last?.focus() }
    if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus() }
  })
  useEffect(() => {
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    return () => { document.body.style.overflow = overflow; previous?.focus() }
  }, [])
  return <div className='deposit-modal' onClick={onClose}>
    <section ref={ref} tabIndex={-1} className='wallet-dialog wallet-dialog--sheet tari-sheet' role='dialog' aria-modal='true' aria-label={title} onClick={(e) => e.stopPropagation()}>
      <header className='wallet-dialog-header'><span className='wallet-dialog-header-icon'><TariIcon className='network-logo network-logo-md' /></span><div className='wallet-dialog-heading'><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>
        <button className='wallet-icon-button' onClick={onClose} aria-label={t('common.close')}><X size={18} /></button></header>
      <div className='wallet-dialog-body tari-stack'>{children}</div>
    </section>
  </div>
}

function Password ({ id, label, value, onInput, show, onToggle, autoComplete }) {
  const { t } = useI18n()
  return <div className='form-field'><label for={id}>{label}</label><div className='tari-password-input'>
    <input id={id} type={show ? 'text' : 'password'} maxLength={INPUT_LIMITS.password} value={value} onInput={(e) => onInput(e.currentTarget.value)} autoComplete={autoComplete} />
    <button type='button' onClick={onToggle} aria-label={t(show ? 'tari.hidePassword' : 'tari.showPassword')}>{show ? <EyeOff size={17} /> : <Eye size={17} />}</button>
  </div></div>
}

function PasswordStrength ({ password }) {
  const { t } = useI18n()
  const result = useMemo(() => passwordStrength(password), [password])
  if (!password) return null
  const name = result.level.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')
  const label = t(`tari.strength${name}`)
  const requirements = [['uppercase', 'A–Z'], ['lowercase', 'a–z'], ['number', '0–9'], ['symbol', '!@#']]
  return <section className={`tari-password-strength strength-${result.level}`}>
    <div className='tari-strength-summary'>
      <div className='tari-strength-ring' role='img' aria-label={`Password strength: ${label}, ${result.score} percent`}>
        <svg viewBox='0 0 44 44' aria-hidden='true'><circle className='tari-strength-track' cx='22' cy='22' r='18' pathLength='100' />
          <circle className='tari-strength-value' cx='22' cy='22' r='18' pathLength='100' strokeDasharray={`${result.score} 100`} /></svg>
        <strong>{result.score}%</strong>
      </div>
      <div className='tari-strength-copy'><strong>{label}</strong><span>{t(`tari.strength${name}Message`)}</span></div>
    </div>
    <div className='tari-strength-requirements'>{requirements.map(([key, text]) => {
      const met = result.requirements[key]
      return <span className={met ? 'is-met' : 'is-missing'} aria-label={`${text}: ${t(met ? 'tari.requirementMet' : 'tari.requirementMissing')}`} key={key}>{met ? <Check size={12} /> : <X size={12} />}{text}</span>
    })}</div>
  </section>
}

export function TariWalletUI ({ state, selected, showAssets, sheet, setSheet, onEvm, logoUrl = '/images/outruna-logo.webp', logoClickCount = 0, logoNameVisible = false, logoHighlightClass = '', onLogoClick = () => {} }) {
  const { t } = useI18n()
  const [picker, setPicker] = useState(false)
  const [price, setPrice] = useState(null)
  const [feedback, setFeedback] = useState('')
  const feedbackTimer = useRef()
  const prompted = useRef('')
  const manager = () => state.manager.current
  const errorText = (e) => t(e?.message?.startsWith('tari.') ? e.message : 'tari.generalError')
  useEffect(() => {
    if (!selected) return
    let cancelled = false
    fetchCoinGeckoPrices(['XTM']).then((p) => { if (!cancelled) setPrice(p.XTM) }).catch(() => {})
    return () => { cancelled = true }
  }, [selected])
  useEffect(() => {
    if (selected && state.needsPassword && state.address && prompted.current !== state.address && !sheet) {
      prompted.current = state.address
      setSheet('export')
    }
  }, [selected, state.needsPassword, state.address, sheet])
  useEffect(() => () => window.clearTimeout(feedbackTimer.current), [])
  const showFeedback = (message, duration = 1200) => {
    window.clearTimeout(feedbackTimer.current)
    setFeedback(message)
    feedbackTimer.current = window.setTimeout(() => setFeedback(''), duration)
  }
  const copy = async () => {
    window.clearTimeout(feedbackTimer.current)
    try {
      await navigator.clipboard.writeText(state.address)
      showFeedback(t('tari.addressCopied'))
    } catch (e) {
      showFeedback(errorText(e))
    }
  }
  const openExport = () => setSheet('export')
  const fiat = state.displayKnown && price?.usd != null ? formatUsd(Number(formatMicro(state.displayTotalMicro)) * price.usd) : t('tari.unavailable')
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
  const close = () => { if (manager()?.cancelOperation() !== false) { if (sheet === 'send') manager()?.lockSpend(); setSheet(null) } }
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
            <button className='hero-wallet-action' disabled={!state.initialized} onClick={() => setSheet(name === 'send' && state.needsPassword ? 'export' : name)}><Icon size={18} /><span>{t(label)}</span></button>)}</div>
        </div></div>
      {state.error && <p role='alert' className='swap-error'>{errorText({ message: state.error })}</p>}
      {!state.persisted && <aside className='tari-warning' role='alert'><Info size={18} /><div>{t('tari.sessionOnly')}</div></aside>}
      <Warning state={state} onOpen={() => setSheet(state.needsPassword ? 'export' : 'settings')} />
      {!state.initialized && <><button className='wallet-button' disabled={state.busy} onClick={() => manager()?.open(true).then(() => manager()?.refresh()).catch((e) => setFeedback(errorText(e)))}>{t('tari.create')}</button>
        <button className='toggle-button' onClick={() => setSheet('settings')}>{t('tari.manageWallet')}</button></>}
      {showAssets && state.initialized && <section className='assets-section'><div className='assets-list'>
        <button className='asset-row asset-row-clickable tari-asset' onClick={() => setSheet('details')}><div className='asset-left'><TariIcon className='coin-icon' /><div className='asset-copy'><strong>{t('tari.symbol')}</strong><p>{t('tari.name')}</p><span className='asset-price'>{price?.usd != null ? formatUsd(price.usd, 6) : t('tari.unavailable')}</span></div></div>
          <div className='asset-right'><strong>{state.displayKnown ? `${formatMicro(state.displayTotalMicro)} ${t('tari.symbol')}` : t('tari.unknown')}</strong><span>{fiat}</span></div></button>
      </div></section>}
    </>}
    {feedback && <p role='status' className='tari-feedback'>{feedback}</p>}
    {sheet && <Sheet key={sheet} title={t({ receive: 'tari.receive', send: 'tari.send', history: 'tari.history', settings: 'tari.title', export: 'tari.exportTitle', import: 'tari.import', details: 'tari.details' }[sheet])} subtitle={sheet === 'details' ? t('tari.name') : null} onClose={close}>
      {sheet === 'receive' && <><div className='deposit-steps'>
        <div className='deposit-step deposit-qr-layout'>
          <span className='deposit-step-number'>1</span>
          <div className='deposit-step-content'><strong className='deposit-step-title'>{t('deposit.scan')}</strong><span className='deposit-step-description'>{t('tari.receiveSubtitle')}</span></div>
          <div className='deposit-qr-card'><div className='deposit-qr-image' role='img' aria-label={t('tari.qr')}>{qr}</div></div>
        </div>
        <div className='deposit-step'>
          <span className='deposit-step-number'>2</span>
          <div className='deposit-step-content'><strong className='deposit-step-title'>{t('deposit.copyTitle')}</strong><span className='deposit-step-description'>{t('deposit.copyDescription')}</span>
            <div className='deposit-address-control'><TariIcon className='deposit-address-network-icon' /><span className='deposit-address-text tari-address' title={state.address}>{formatAddress(state.address, 18, 16)}</span>
              <button className='deposit-address-copy' type='button' onClick={copy} disabled={!state.address} aria-label={t('wallet.copyAddress')} title={t('wallet.copyAddress')}>{feedback ? <Check size={15} /> : <Copy size={15} />}</button></div>
            {feedback && <span className='deposit-copy-feedback'><Check size={12} />{feedback}</span>}
          </div>
        </div>
        <div className='deposit-safety-note'><Info size={15} /><span>{t('tari.receiveNotice')}</span></div>
      </div></>}
      {sheet === 'settings' && <TariSettings state={state} copy={copy} openExport={openExport} openImport={() => setSheet('import')} onClose={close} errorText={errorText} />}
      {sheet === 'details' && <TariAssetDetails state={state} price={price} sync={sync} copy={copy} feedback={feedback} openExport={openExport} openImport={() => setSheet('import')} />}
      {sheet === 'export' && <Export state={state} onClose={close} onSuccess={() => setFeedback(t('tari.backupExported'))} errorText={errorText} />}
      {sheet === 'import' && <Import state={state} onClose={close} errorText={errorText} />}
      {sheet === 'send' && <Send state={state} onClose={close} errorText={errorText} onSuccess={() => showFeedback(t('tari.sent'), 2000)} />}
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
  return <form className='tari-stack tari-backup-form' onSubmit={submit}><div className='tari-backup-intro'><Download size={20} /><p>{t(state.needsPassword ? 'tari.setPasswordBody' : 'tari.exportExistingPassword')}</p></div>
    <Password id='tari-export-password' label={t('tari.password')} value={password} onInput={setPassword} show={show} onToggle={() => setShow(!show)} autoComplete='new-password' />
    <PasswordStrength password={password} />
    <Password id='tari-export-confirm' label={t('tari.confirmPassword')} value={confirm} onInput={setConfirm} show={show} onToggle={() => setShow(!show)} autoComplete='new-password' />
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
    : <form className='tari-stack tari-backup-form' onSubmit={submit}><label className='form-field tari-file-picker'><span><Upload size={16} />{t('tari.chooseFile')}</span><input type='file' accept='.backup,application/vnd.outruna.tari-backup+json' disabled={busy} onChange={async (e) => {
      setEnvelope(null); setError(''); try { setEnvelope(await readBackup(e.currentTarget.files[0])) } catch (e) { setError(errorText(e)) }
    }} /></label>
      {envelope && <><div className='tari-backup-metadata'><Row label={t('wallet.network')}>{t('tari.name')}</Row><p className='tari-address' title={envelope.address}>{formatAddress(envelope.address, 14, 12)}</p><Row label={t('tari.creationDate')}>{new Date(envelope.createdAt).toLocaleString()}</Row></div>
        <Password id='tari-import-password' label={t('tari.password')} value={password} onInput={setPassword} show={show} onToggle={() => setShow(!show)} autoComplete='current-password' />
        <p className='tari-unlock-note'><Info size={15} aria-hidden='true' />{t('tari.importPasswordNotice')}</p></>}
      {error && <p role='alert' className='swap-error'>{error}</p>}<button className='wallet-button' disabled={busy || !envelope}>{t(busy ? 'tari.decrypting' : 'tari.restore')}</button></form>
}

function Remove ({ state, onClose, errorText, compact = false }) {
  const { t } = useI18n()
  const [confirm, setConfirm] = useState(false), [error, setError] = useState('')
  return <>{confirm && <aside className='tari-warning tari-remove-confirmation' role='alert'><AlertTriangle size={18} /><div><strong>{t('tari.removeTitle')}</strong><p>{t('tari.removeWarning')}</p>{!state.backupExportedAt && <p>{t('tari.removeUnbacked')}</p>}<button className='wallet-button wallet-button--secondary' onClick={() => setConfirm(false)}>{t('common.cancel')}</button></div></aside>}
    {error && <p role='alert'>{error}</p>}<button className={compact ? 'tari-settings-action tari-settings-action--remove' : 'wallet-button tari-danger'} disabled={!state.initialized || state.busy} onClick={async () => {
      if (!confirm) { setConfirm(true); return }
      try { await state.manager.current.remove(); onClose() } catch (e) { setError(errorText(e)) }
    }}><Trash2 size={compact ? 20 : 16} /><span>{t(compact && !confirm ? 'tari.removeAction' : 'tari.remove')}</span></button></>
}

function Send ({ state, onClose, onSuccess, errorText }) {
  const { t } = useI18n()
  const [recipient, setRecipient] = useState(''), [amount, setAmount] = useState(''), [review, setReview] = useState(null), [busy, setBusy] = useState(false), [error, setError] = useState('')
  const [password, setPassword] = useState(''), [show, setShow] = useState(false)
  const [fee, setFee] = useState(null)
  useEffect(() => {
    let cancelled = false
    state.manager.current.estimate(amount).then((value) => { if (!cancelled) setFee(value) }).catch(() => { if (!cancelled) setFee(null) })
    return () => { cancelled = true }
  }, [amount, state.availableMicro])
  const action = async (fn) => { if (busy) return; setBusy(true); setError(''); try { await fn() } catch (e) { setError(errorText(e)) } finally { setBusy(false) } }
  return <>{review ? <><h3>{t('tari.review')}</h3><Row label={t('tari.recipient')}>{review.recipient}</Row><Row label={t('tari.amount')}>{formatMicro(review.amountMicro)} {t('tari.symbol')}</Row><Row label={t('wallet.network')}>{t('tari.name')}</Row><Row label={t('tari.fee')}>{formatMicro(review.feeMicro)} {t('tari.symbol')}</Row><Row label={t('tari.total')}>{formatMicro(review.amountMicro + review.feeMicro)} {t('tari.symbol')}</Row>
    <button className='wallet-button wallet-button--secondary' disabled={busy} onClick={() => setReview(null)}>{t('tari.back')}</button>
    {!state.unlocked && <><Password id='tari-spend-password' label={t('tari.unlockPassword')} value={password} onInput={setPassword} show={show} onToggle={() => setShow(!show)} autoComplete='current-password' />
      <button className='wallet-button' disabled={busy || !password} onClick={() => action(async () => { await state.manager.current.unlockSpend(password); setPassword('') })}>{t(busy ? 'tari.decrypting' : 'tari.unlockMinute')}</button></>}
    {state.unlocked && <><p className='tari-unlock-note'><Info size={15} aria-hidden='true' />{t('tari.unlockNotice')}</p>
      <button className='wallet-button' disabled={busy} onClick={() => action(async () => { await state.manager.current.send(review); onSuccess(); state.manager.current.refresh(); onClose() })}>{t(busy ? 'tari.signing' : 'tari.confirmSend')}</button></>}</>
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
