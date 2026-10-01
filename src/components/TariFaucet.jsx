import { useEffect, useRef, useState } from 'preact/hooks'
import { Copy, Droplets, RefreshCcw } from 'lucide-preact'
import { useI18n } from '../i18n/index.jsx'
import { api } from '../lib/urls.js'
import { fetchJson, postJson } from '../lib/api.js'
import { loadTurnstile } from '../lib/turnstile.js'
import { formatAddress } from '../lib/format.js'
import { formatMicro } from '../tari/amount.js'
import { FAUCET } from '../tari/faucet.js'
import { useFaucetHistory } from '../tari/useFaucetHistory.js'

export function TariFaucet ({ wallet }) {
  const { t, locale } = useI18n()
  const [revision, setRevision] = useState(0)
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')
  const [feedback, setFeedback] = useState('')
  const [token, setToken] = useState('')
  const [busy, setBusy] = useState(false)
  const container = useRef(null); const widget = useRef(null)
  const funding = useFaucetHistory(revision)
  useEffect(() => {
    const controller = new AbortController()
    const load = () => fetchJson(api.tariFaucet.status, { signal: controller.signal }).then(setStatus).catch(() => { if (!controller.signal.aborted) setError('faucet.unavailable') })
    load()
    const timer = setInterval(load, 30000)
    return () => { clearInterval(timer); controller.abort() }
  }, [revision])
  useEffect(() => {
    let cancelled = false
    setToken('')
    loadTurnstile().then((turnstile) => {
      if (cancelled) return
      widget.current = turnstile.render(container.current, {
        sitekey: FAUCET.siteKey,
        action: 'tari-faucet',
        size: 'flexible',
        language: locale === 'bn' ? 'en' : locale,
        callback: setToken,
        'expired-callback': () => setToken(''),
        'error-callback': () => { setToken(''); setError('faucet.verificationFailed') }
      })
    }).catch(() => { if (!cancelled) setError('faucet.verificationFailed') })
    return () => { cancelled = true; if (widget.current != null) globalThis.turnstile?.remove(widget.current); widget.current = null }
  }, [locale])
  const coolingDown = status?.nextClaimAt > Date.now()
  async function claim () {
    if (busy || !token || !wallet.address || coolingDown) return
    setBusy(true); setError(''); setFeedback('')
    try {
      const result = await postJson(api.tariFaucet.claim, { recipient: wallet.address, turnstileToken: token })
      setStatus((old) => ({ ...old, nextClaimAt: result.nextClaimAt }))
      setFeedback(result.payout.status === 'unknown' ? 'faucet.unknownPending' : 'faucet.accepted')
      setRevision((old) => old + 1)
      wallet.manager.current?.refresh()
    } catch (e) {
      setError(e.payload?.error?.startsWith('faucet.') ? e.payload.error : 'faucet.unavailable')
      if (e.payload?.nextClaimAt) setStatus((old) => ({ ...old, nextClaimAt: e.payload.nextClaimAt }))
    } finally {
      setToken(''); setBusy(false)
      if (widget.current != null) globalThis.turnstile?.reset(widget.current)
    }
  }
  const payouts = status?.payouts || []
  const changeCommitments = new Set(status?.changeCommitments || [])
  const deposits = status ? funding.entries.filter((entry) => !changeCommitments.has(entry.id)) : []
  return <section className='tari-faucet'>
    <div className='tari-faucet-claim'><Droplets size={24} aria-hidden='true' /><h2>{t('faucet.title')}</h2><p>{t('faucet.description')}</p>
      <span className='tari-faucet-recipient' title={wallet.address}>{t('faucet.recipient')}: {wallet.address ? formatAddress(wallet.address, 10, 8) : t('tari.notInitialized')}</span>
      <div ref={container} className='tari-faucet-captcha' />
      <button type='button' className='wallet-button wallet-button--primary' disabled={busy || !token || !wallet.address || !status?.ready || coolingDown} onClick={claim}>{t(busy ? 'common.processing' : 'faucet.claim')}</button>
      {coolingDown && <p>{t('faucet.nextClaim')} {new Date(status.nextClaimAt).toLocaleString(locale)}</p>}
      {status && !status.ready && <p role='status'>{t('faucet.unavailable')}</p>}
      {error && <p className='swap-error' role='alert'>{t(error)}</p>}{feedback && <p role='status'>{t(feedback)}</p>}
    </div>
    <div className='tari-faucet-address'><span>{t('faucet.address')}</span><code title={FAUCET.address}>{formatAddress(FAUCET.address, 10, 8)}</code><button type='button' className='icon-button' aria-label={t('wallet.copyAddress')} onClick={async () => {
      try { await navigator.clipboard.writeText(FAUCET.address); setFeedback('tari.addressCopied') } catch { setError('faucet.copyFailed') }
    }}><Copy size={16} /></button></div>
    <p className='tari-faucet-note'>{t('faucet.publicHistory')}</p>
    <div className='tari-faucet-balance'><span>{t('faucet.balance')}</span><strong>{funding.balanceMicro == null ? '20000 XTM' : `${formatMicro(funding.balanceMicro)} XTM`}</strong>
      <button className='icon-button' type='button' disabled={busy || funding.syncing} aria-label={t('common.refresh')} onClick={() => { setError(''); setRevision((old) => old + 1) }}><RefreshCcw size={18} /></button></div>
    <p className='tari-faucet-note' role='status'>{t(funding.syncing ? 'tari.syncing' : funding.error ? 'tari.syncError' : 'tari.synced')}</p>
    <h3>{t('faucet.funding')}</h3>
    {deposits.length === 0 && <p className='tari-faucet-note'>{t(funding.syncing ? 'common.loading' : funding.error ? 'tari.syncError' : 'faucet.empty')}</p>}
    {deposits.map((entry) => <div className='tari-faucet-history-row' key={entry.id}><span>{new Date(entry.createdAt).toLocaleString(locale)}</span><strong>+{formatMicro(entry.amountMicro)} XTM</strong></div>)}
    <h3>{t('faucet.payouts')}</h3>
    {!payouts.length && <p className='tari-faucet-note'>{t('faucet.empty')}</p>}
    {payouts.map((payout) => <div className='tari-faucet-history-row' key={payout.id}><div><span title={payout.recipient}>{formatAddress(payout.recipient, 8, 6)}</span><small>{new Date(payout.createdAt).toLocaleString(locale)} · {t(payout.status === 'confirmed' ? 'tari.confirmed' : payout.status === 'failed' ? 'tari.failed' : payout.status === 'unknown' || payout.status === 'broadcasting' ? 'faucet.unknownPending' : 'tari.pending')}</small></div><strong>{formatMicro(payout.amountMicro)} XTM</strong></div>)}
  </section>
}
