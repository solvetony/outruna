import { Mail, Send } from 'lucide-preact'
import { usePrivy, useLoginWithOAuth, useWallets } from '@privy-io/react-auth'
import { useEffect, useRef, useState } from 'preact/hooks'
import { HttpError, isTransientHttpStatus, signWithPrivy } from '../lib/api.js'
import { getNetworkLogoUrl, supportedChains } from '../lib/chains.js'
import { LocalizedMessage, T, useI18n } from '../i18n/index.jsx'
import { loadRabbyGasAccountSession } from '../lib/rabbyGasAccount.js'
import { getTelegramInitData } from '../lib/telegram.js'
import { TariIcon } from './TariWallet.jsx'

const telegramOAuthProvider = import.meta.env.VITE_PRIVY_TELEGRAM_OAUTH_PROVIDER || 'telegram'

function hideBrokenDecoration (event) {
  event.currentTarget.closest('.auth-network-decoration')?.classList.add('is-hidden')
}

function AuthBrandVisual () {
  return (
    <div className='auth-brand-visual'>
      {supportedChains.map((chain) => {
        const logoUrl = getNetworkLogoUrl(chain.id)
        if (!logoUrl) return null

        return (
          <span className={`auth-network-decoration auth-network-decoration-${chain.id}`} key={chain.id} aria-hidden='true'>
            <img src={logoUrl} alt='' decoding='async' referrerPolicy='no-referrer' onError={hideBrokenDecoration} />
          </span>
        )
      })}
      <span className='auth-network-decoration auth-network-decoration-tari' aria-hidden='true'>
        <TariIcon className='' />
      </span>
      <span className='auth-logo-wrap'>
        <img
          src='/apple-touch-icon.png'
          alt='Outruna'
          className='auth-logo'
          decoding='async'
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = '/favicon-32.png'
          }}
        />
      </span>
    </div>
  )
}

function AuthCard ({ title, titleId, description, descriptionId, children, error = '' }) {
  return (
    <section className='auth-card'>
      <AuthBrandVisual />
      <h1 className='auth-title'><T id={titleId}>{title}</T></h1>
      <p className='auth-description'><T id={descriptionId}>{description}</T></p>
      {error ? <p className='auth-error'><LocalizedMessage message={error} /></p> : null}
      {children}
    </section>
  )
}

function AuthPage ({ children }) {
  return (
    <main className='auth-shell'>
      {children}
    </main>
  )
}

export function AuthGate ({ children }) {
  const { isLocaleExplicit, setLocale, t } = useI18n()
  const { ready, authenticated, login, logout, user, getAccessToken } = usePrivy()
  const { initOAuth } = useLoginWithOAuth()
  const wallets = useWallets()
  const [sessionReady, setSessionReady] = useState(false)
  const [sessionAuthMeta, setSessionAuthMeta] = useState(null)
  const [error, setError] = useState(null)
  const sessionRetryCountRef = useRef(0)
  const retryTimerRef = useRef(null)
  const telegramInitData = getTelegramInitData()
  const isTelegramLaunch = Boolean(telegramInitData)

  function loginWithTelegramOAuth () {
    return initOAuth({ provider: telegramOAuthProvider })
  }

  useEffect(() => {
    let cancelled = false

    async function exchange () {
      if (!ready || !authenticated) return
      setError(null)
      try {
        if (!wallets.ready) return
        const token = await getAccessToken()
        const ethereumWallet = wallets.wallets.find((wallet) => wallet.type === 'ethereum')
        const rabbyGasAccount = ethereumWallet?.address
          ? loadRabbyGasAccountSession(ethereumWallet.address)
          : null

        const session = await signWithPrivy(token, {
          telegramInitData: isTelegramLaunch ? telegramInitData : '',
          rabbyGasAccount
        })
        if (!cancelled) {
          setSessionAuthMeta(session)
          if (!isLocaleExplicit && session.language) {
            setLocale(session.language, { explicit: false })
          }
          sessionRetryCountRef.current = 0
          if (retryTimerRef.current) {
            window.clearTimeout(retryTimerRef.current)
            retryTimerRef.current = null
          }
          setSessionReady(true)
        }
      } catch (err) {
        if (cancelled) return
        if (err instanceof HttpError && isTransientHttpStatus(err.status)) {
          setSessionReady(false)
          setError(null)
          sessionRetryCountRef.current += 1
          const backoffMs = Math.min(15000, 1000 * (sessionRetryCountRef.current + 1))
          retryTimerRef.current = window.setTimeout(() => {
            exchange().catch(() => {})
          }, backoffMs)
          return
        }
        setError(err.message || 'Privy session exchange failed')
      }
    }

    exchange()
    return () => {
      cancelled = true
      if (retryTimerRef.current) {
        window.clearTimeout(retryTimerRef.current)
        retryTimerRef.current = null
      }
    }
  }, [ready, authenticated, getAccessToken, isLocaleExplicit, isTelegramLaunch, setLocale, telegramInitData, wallets.ready, wallets.wallets])

  useEffect(() => {
    if (!authenticated) {
      setSessionReady(false)
      setSessionAuthMeta(null)
    }
  }, [authenticated])

  useEffect(() => {
    if (authenticated) return
    sessionRetryCountRef.current = 0
    if (retryTimerRef.current) {
      window.clearTimeout(retryTimerRef.current)
      retryTimerRef.current = null
    }
  }, [authenticated])

  if (!ready) {
    return (
      <AuthPage>
        <AuthCard
          title='Preparing authentication'
          titleId='auth.preparing'
          description='Setting up your secure wallet experience.'
          descriptionId='auth.preparingDescription'
        >
          <span className='auth-loader' aria-label={t('auth.loading')} role='status' />
        </AuthCard>
      </AuthPage>
    )
  }

  if (!authenticated) {
    return (
      <AuthPage>
        <AuthCard
          title='Outruna'
          titleId='auth.title'
          descriptionId={isTelegramLaunch ? 'auth.telegramDescription' : 'auth.browserDescription'}
          description={isTelegramLaunch
            ? 'Open your embedded EVM wallet securely with Telegram.'
            : 'Sign in to open your embedded EVM wallet.'}
        >
          <div className='auth-methods'>
            <button className='auth-button auth-button-primary' type='button' onClick={() => loginWithTelegramOAuth()}>
              <Send className='auth-button-icon' size={17} />
              <T id='auth.continueTelegram'>Continue With Telegram</T>
            </button>
            <button className='auth-button auth-button-secondary' type='button' onClick={login}>
              <Mail className='auth-button-icon' size={17} />
              <T id='auth.continueEmail'>Continue With Email</T>
            </button>
          </div>
        </AuthCard>
      </AuthPage>
    )
  }

  if (error) {
    return (
      <AuthPage>
        <AuthCard title='Unable to open wallet' titleId='auth.unable' description='' error={error}>
          {isTelegramLaunch
            ? (
              <button className='auth-button auth-button-primary' type='button' onClick={() => loginWithTelegramOAuth()}>
                <Send className='auth-button-icon' size={17} />
                <T id='auth.retryTelegram'>Retry With Telegram</T>
              </button>
              )
            : null}
          <button className='auth-button auth-button-secondary' type='button' onClick={logout}><T id='auth.signOut'>Sign Out</T></button>
        </AuthCard>
      </AuthPage>
    )
  }

  if (!sessionReady || !wallets.ready) {
    return (
      <AuthPage>
        <AuthCard
          title='Opening wallet'
          titleId='auth.opening'
          description='Preparing your wallet and syncing your account.'
          descriptionId='auth.openingDescription'
        >
          <span className='auth-loader' aria-label={t('auth.loading')} role='status' />
        </AuthCard>
      </AuthPage>
    )
  }

  return children({
    user,
    logout,
    wallets: wallets.wallets,
    authMeta: {
      walletCount: wallets.wallets.length,
      ready: wallets.ready,
      telegram: sessionAuthMeta?.telegram || { status: 'absent', user: null }
    }
  })
}
