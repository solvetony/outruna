import { ArrowRight, Globe2, ShieldCheck } from 'lucide-preact'
import { useState } from 'preact/hooks'
import { useI18n } from '../i18n/index.jsx'
import { updateLanguage } from '../lib/api.js'
import { NetworkPreferences } from './NetworkPreferences.jsx'

export function FirstRunSetup ({ preferences, onComplete, mfaEnabled, onMfa }) {
  const { locale, setLocale, languageOptions, t } = useI18n()
  const [draft, setDraft] = useState(preferences)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  return <main className='wallet-page'><div className='wallet-shell'><section className='wallet-card first-run-setup'>
    <header className='setup-brand'><img src='/images/outruna-logo.webp' alt='' /><strong>{t('auth.title')}</strong></header>
    <div className='setup-heading'><h1>{t('setup.title')}</h1><p>{t('setup.subtitle')}</p></div>
    <label className='setup-language'><Globe2 size={18} aria-hidden='true' /><span>{t('language.label')}</span><select value={locale} onChange={(event) => setLocale(event.currentTarget.value)}>{languageOptions.map((option) => <option value={option.code} key={option.code}>{option.label}</option>)}</select></label>
    <NetworkPreferences preferences={draft} onChange={setDraft} />
    <div className='setup-security'><ShieldCheck size={21} aria-hidden='true' /><div><strong>{t('setup.twoFactor')}</strong><p>{t('setup.twoFactorHint')}</p><small>{t(mfaEnabled ? 'security.enabled' : 'security.disabled')}</small></div>
      <button type='button' className={mfaEnabled ? 'settings-toggle active' : 'settings-toggle'} role='switch' aria-checked={mfaEnabled} aria-label={t(mfaEnabled ? 'security.manageTwoFactor' : 'security.enableTwoFactor')} onClick={() => { try { onMfa() } catch { setError(t('setup.mfaError')) } }}><span aria-hidden='true' /></button>
    </div>
    {error && <p className='swap-error' role='alert'>{error}</p>}
    <button type='button' className='wallet-button setup-continue' disabled={busy} onClick={async () => {
      setBusy(true)
      setError('')
      try {
        setLocale(locale)
        updateLanguage(locale).catch(() => {})
        onComplete({ ...draft, onboardingCompleted: true })
      } catch { setError(t('setup.saveError')) } finally { setBusy(false) }
    }}>{t('setup.continue')}<ArrowRight size={18} aria-hidden='true' /></button>
  </section></div></main>
}
