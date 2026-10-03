import { PrivyProvider } from '@privy-io/react-auth'
import { defaultChain, supportedChains } from '../lib/chains.js'
import { useEffect, useState } from 'preact/hooks'

const privyAppId = import.meta.env.VITE_PRIVY_APP_ID || 'cmqmb52p1004p0cl5mtqzkfun'
const oauthRedirectUrl = import.meta.env.VITE_PRIVY_OAUTH_REDIRECT_URL || (
  typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : undefined
)

const privyConfig = {
  // Telegram is started through useLoginWithOAuth below. Keeping it out of
  // loginMethods avoids initializing the legacy bot/Login Widget path.
  loginMethods: ['email'],
  supportedChains,
  defaultChain,
  // Keep the OAuth return URL stable in Telegram WebView. The default browser
  // URL can contain Telegram launch parameters and is not a stable redirect.
  customOAuthRedirectUrl: oauthRedirectUrl,
  allowOAuthInEmbeddedBrowsers: true,
  appearance: {
    theme: 'light',
    logo: '/images/outruna-logo.webp'
  },
  showWalletUIs: false,
  embeddedWallets: {
    ethereum: {
      createOnLogin: 'all-users'
    }
  }
}

export function PrivyAuthShell ({ children }) {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  useEffect(() => {
    const update = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
    window.addEventListener('outruna-theme-changed', update)
    return () => window.removeEventListener('outruna-theme-changed', update)
  }, [])
  return (
    <PrivyProvider
      appId={privyAppId}
      config={{ ...privyConfig, appearance: { ...privyConfig.appearance, theme, accentColor: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() } }}
    >
      {children}
    </PrivyProvider>
  )
}
