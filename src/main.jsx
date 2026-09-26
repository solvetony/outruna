import { render } from 'preact'
import { App } from './App.jsx'
import { AuthGate } from './components/AuthGate.jsx'
import { PrivyAuthShell } from './components/PrivyAuthShell.jsx'
import { I18nProvider } from './i18n/index.jsx'
import './styles.css'

render(
  <I18nProvider>
    <PrivyAuthShell>
      <AuthGate>
        {({ user, logout, wallets, authMeta }) => (
          <App
            key={user?.id}
            user={user}
            logout={logout}
            wallets={wallets}
            authMeta={authMeta}
          />
        )}
      </AuthGate>
    </PrivyAuthShell>
  </I18nProvider>,
  document.getElementById('app')
)
