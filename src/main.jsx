import { render } from 'preact'
import { App } from './App.jsx'
import { AuthGate } from './components/AuthGate.jsx'
import { PrivyAuthShell } from './components/PrivyAuthShell.jsx'
import { I18nProvider } from './i18n/index.jsx'
import { WalletSetup } from './components/WalletSetup.jsx'
import './styles.css'
import { initTheme } from './lib/theme.js'

initTheme()

render(
  <I18nProvider>
    <PrivyAuthShell>
      <AuthGate>
        {({ user, logout, wallets, authMeta }) => (
          <WalletSetup key={user?.id} user={user}>{({ preferences, updatePreferences }) => (
            <App user={user} logout={logout} wallets={wallets} authMeta={authMeta} preferences={preferences} updatePreferences={updatePreferences} />
          )}</WalletSetup>
        )}
      </AuthGate>
    </PrivyAuthShell>
  </I18nProvider>,
  document.getElementById('app')
)
