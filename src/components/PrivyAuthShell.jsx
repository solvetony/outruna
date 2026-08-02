import { PrivyProvider } from '@privy-io/react-auth'
import { defaultChain, supportedChains } from '../lib/chains.js'

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
    accentColor: '#7be2d0',
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
  return (
    <PrivyProvider
      appId={privyAppId}
      config={privyConfig}
    >
      {children}
    </PrivyProvider>
  )
}
