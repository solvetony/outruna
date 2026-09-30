import { render } from 'preact'
import { useState } from 'preact/hooks'
import { I18nProvider, useI18n } from '../src/i18n/index.jsx'
import { FirstRunSetup } from '../src/components/FirstRunSetup.jsx'
import { NetworkPreferences } from '../src/components/NetworkPreferences.jsx'
import { TariWalletUI } from '../src/components/TariWallet.jsx'
import { getWalletNetworks, loadWalletPreferences, saveWalletPreferences } from '../src/lib/walletPreferences.js'
import '../src/styles.css'

const originalFetch = window.fetch
window.fetch = (url, init) => String(url).includes('/language') || String(url).includes('coingecko')
  ? Promise.resolve(new Response('{}', { headers: { 'Content-Type': 'application/json' } }))
  : originalFetch(url, init)

function Harness () {
  const { locale, setLocale } = useI18n()
  const [preferences, setPreferences] = useState(() => loadWalletPreferences('setup-browser'))
  const [mfaMethods, setMfaMethods] = useState([])
  const [sheet, setSheet] = useState(null)
  const update = (next) => setPreferences(saveWalletPreferences('setup-browser', next))
  window.setupCheck = { preferences, locale, setLocale, setMfaMethods }
  const onMfa = () => {
    window.enrollmentCalls = (window.enrollmentCalls || 0) + 1
    if (window.enrollmentResult === 'error') throw new Error('test error')
    if (window.enrollmentResult === 'success') setMfaMethods(['totp'])
  }
  if (!preferences.onboardingCompleted) return <FirstRunSetup preferences={preferences} onComplete={update} mfaEnabled={mfaMethods.length > 0} onMfa={onMfa} />
  const state = { initialized: false, ready: true, busy: false, history: [], utxos: [], manager: { current: { refresh () {} } } }
  return <main className='wallet-page'><div className='wallet-shell'><section className='wallet-card'>
    <TariWalletUI state={state} selected showAssets sheet={sheet} setSheet={setSheet} networks={getWalletNetworks(preferences)} onEvm={() => {}} />
    <NetworkPreferences preferences={preferences} onChange={update} />
  </section></div></main>
}

render(<I18nProvider><Harness /></I18nProvider>, document.getElementById('app'))
