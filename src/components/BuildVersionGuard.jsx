import { useEffect, useState } from 'preact/hooks'
import { T } from '../i18n/index.jsx'
import { api } from '../lib/urls.js'

export function BuildVersionGuard () {
  const [version, setVersion] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadVersion () {
      try {
        const response = await fetch(api.version, {
          cache: 'no-store',
          credentials: 'include'
        })
        const payload = await response.json()
        if (!cancelled) setVersion(payload)
      } catch {
        if (!cancelled) setVersion(null)
      }
    }

    loadVersion()
    const timer = window.setInterval(loadVersion, 60000)
    return () => {
      cancelled = true
      window.clearInterval(timer)
    }
  }, [])

  if (!version) return null

  return version.buildId
}
