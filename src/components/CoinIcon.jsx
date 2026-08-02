import { useEffect, useState } from 'preact/hooks'
import { getLogoProxyUrls, resolveTokenLogoUrl } from '../lib/coinmarketcap.js'

const LOGO_LOAD_TIMEOUT_MS = 7000
const LOADED_LOGO_URLS = new Set()

function addLogoRetryParam (url) {
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}logo_retry=${Date.now()}`
}

function removeLogoRetryParam (url) {
  return String(url || '').replace(/[?&]logo_retry=\d+/, '').replace(/[?&]$/, '')
}

export function CoinIcon ({ symbol, label, logoUrl: preferredLogoUrl = null, chainId, address, name, className = '', onLogoLoad, onLogoError }) {
  const [logoUrl, setLogoUrl] = useState(preferredLogoUrl)
  const [logoAttempt, setLogoAttempt] = useState(0)
  const [logoLoaded, setLogoLoaded] = useState(Boolean(preferredLogoUrl && LOADED_LOGO_URLS.has(preferredLogoUrl)))

  useEffect(() => {
    let cancelled = false

    setLogoAttempt(0)
    setLogoLoaded(Boolean(preferredLogoUrl && LOADED_LOGO_URLS.has(preferredLogoUrl)))

    async function loadLogo () {
      if (preferredLogoUrl) {
        setLogoUrl(preferredLogoUrl)
        return
      }
      try {
        const url = await resolveTokenLogoUrl(symbol, null, { chainId, address, name: name || label })
        if (!cancelled) {
          setLogoUrl(url)
          setLogoLoaded(Boolean(url && LOADED_LOGO_URLS.has(url)))
        }
      } catch {
        if (!cancelled) {
          setLogoUrl(null)
          setLogoLoaded(false)
        }
      }
    }

    loadLogo()
    return () => {
      cancelled = true
    }
  }, [address, chainId, label, name, preferredLogoUrl, symbol])

  async function advanceLogo () {
    if (typeof onLogoError === 'function') onLogoError()
    if (!logoUrl) return
    LOADED_LOGO_URLS.delete(removeLogoRetryParam(logoUrl))
    setLogoLoaded(false)

    if (logoAttempt === 0) {
      setLogoAttempt(1)
      setLogoUrl(addLogoRetryParam(preferredLogoUrl || logoUrl))
      return
    }

    const sourceUrl = removeLogoRetryParam(preferredLogoUrl || logoUrl)
    const proxyUrls = getLogoProxyUrls(sourceUrl)
    const proxyIndex = logoAttempt - 1
    if (proxyIndex < proxyUrls.length) {
      setLogoAttempt(logoAttempt + 1)
      setLogoUrl(proxyUrls[proxyIndex])
      return
    }

    const fallbackUrl = await resolveTokenLogoUrl(
      symbol,
      sourceUrl,
      { chainId, address, name: name || label }
    )
    setLogoAttempt(2)
    setLogoUrl(fallbackUrl)
  }

  useEffect(() => {
    if (!logoUrl || logoLoaded) return undefined

    const timer = window.setTimeout(() => {
      advanceLogo()
    }, LOGO_LOAD_TIMEOUT_MS)

    return () => window.clearTimeout(timer)
  }, [logoAttempt, logoLoaded, logoUrl])

  function handleLogoLoad () {
    LOADED_LOGO_URLS.add(removeLogoRetryParam(logoUrl))
    setLogoLoaded(true)
    if (typeof onLogoLoad === 'function') onLogoLoad()
  }

  if (logoUrl) {
    return (
      <img
        className={`coin-icon ${className}`.trim()}
        src={logoUrl}
        alt={label || symbol}
        decoding='async'
        referrerPolicy='no-referrer'
        onLoad={handleLogoLoad}
        onError={advanceLogo}
      />
    )
  }

  const initials = String(symbol || label || '?').trim().slice(0, 2).toUpperCase()
  return <span className={`coin-icon coin-icon-fallback ${className}`.trim()}>{initials}</span>
}
