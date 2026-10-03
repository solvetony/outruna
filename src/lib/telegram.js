import { applyTheme } from './theme.js'

export function getTelegramWebApp () {
  if (typeof window === 'undefined') return null
  return window.Telegram?.WebApp || null
}

export function getTelegramInitData () {
  return getTelegramWebApp()?.initData || ''
}

export function applyTelegramTheme () {
  applyTheme()
  return getTelegramWebApp()?.themeParams || null
}

export function applyTelegramViewport () {
  const webApp = getTelegramWebApp()
  if (!webApp) return null

  const root = document.documentElement
  const viewportHeight = Number(webApp.viewportHeight || 0)
  const viewportStableHeight = Number(webApp.viewportStableHeight || 0)

  if (viewportHeight > 0) {
    root.style.setProperty('--tg-viewport-height', `${viewportHeight}px`)
    root.style.setProperty('--tg-app-height', `${viewportHeight}px`)
  }
  if (viewportStableHeight > 0) {
    root.style.setProperty('--tg-viewport-stable-height', `${viewportStableHeight}px`)
  }

  return { viewportHeight, viewportStableHeight }
}

export function initTelegramWebApp () {
  const webApp = getTelegramWebApp()
  if (!webApp) return null

  webApp.ready()
  if (typeof webApp.expand === 'function') webApp.expand()
  applyTelegramTheme()
  applyTelegramViewport()

  const onThemeChanged = () => applyTelegramTheme()
  const onViewportChanged = () => applyTelegramViewport()

  webApp.onEvent('themeChanged', onThemeChanged)
  webApp.onEvent('viewportChanged', onViewportChanged)

  return () => {
    webApp.offEvent('themeChanged', onThemeChanged)
    webApp.offEvent('viewportChanged', onViewportChanged)
  }
}
