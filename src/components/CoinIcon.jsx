import { useEffect, useState } from 'preact/hooks'
import { getTokenLogoCandidates, resolveTokenLogoUrl } from '../lib/coinmarketcap.js'

const LOGO_LOAD_TIMEOUT_MS = 7000
const LOADED_LOGO_URLS = new Set()

export function CoinIcon ({ symbol, label, logoUrl: preferredLogoUrl = null, chainId, address, name, className = '', onLogoLoad, onLogoError }) {
  const initialCandidates = getTokenLogoCandidates(preferredLogoUrl)
  const [logoSourceUrl, setLogoSourceUrl] = useState(preferredLogoUrl)
  const [logoUrl, setLogoUrl] = useState(initialCandidates[0] || null)
  const [logoAttempt, setLogoAttempt] = useState(0)
  const [logoLoaded, setLogoLoaded] = useState(Boolean(initialCandidates[0] && LOADED_LOGO_URLS.has(initialCandidates[0])))

  useEffect(() => {
    let cancelled = false

    function useLogoSource (url) {
      const candidates = getTokenLogoCandidates(url)
      const firstCandidate = candidates[0] || null
      setLogoSourceUrl(url || null)
      setLogoAttempt(0)
      setLogoUrl(firstCandidate)
      setLogoLoaded(Boolean(firstCandidate && LOADED_LOGO_URLS.has(firstCandidate)))
    }

    async function loadLogo () {
      if (preferredLogoUrl) {
        useLogoSource(preferredLogoUrl)
        return
      }
      try {
        const url = await resolveTokenLogoUrl(symbol, null, { chainId, address, name: name || label })
        if (!cancelled) {
          useLogoSource(url)
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
    LOADED_LOGO_URLS.delete(logoUrl)
    setLogoLoaded(false)

    const candidates = getTokenLogoCandidates(logoSourceUrl || logoUrl)
    const nextAttempt = logoAttempt + 1
    if (nextAttempt < candidates.length) {
      setLogoAttempt(nextAttempt)
      setLogoUrl(candidates[nextAttempt])
      return
    }

    const fallbackUrl = await resolveTokenLogoUrl(
      symbol,
      logoSourceUrl,
      { chainId, address, name: name || label }
    )
    const fallbackCandidates = getTokenLogoCandidates(fallbackUrl)
    setLogoSourceUrl(fallbackUrl)
    setLogoAttempt(0)
    setLogoUrl(fallbackCandidates[0] || null)
  }

  useEffect(() => {
    if (!logoUrl || logoLoaded) return undefined

    const timer = window.setTimeout(() => {
      advanceLogo()
    }, LOGO_LOAD_TIMEOUT_MS)

    return () => window.clearTimeout(timer)
  }, [logoAttempt, logoLoaded, logoUrl])

  function handleLogoLoad () {
    LOADED_LOGO_URLS.add(logoUrl)
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
