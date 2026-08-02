export function getTelegramWebApp () {
  if (typeof window === 'undefined') return null
  return window.Telegram?.WebApp || null
}

export function getTelegramInitData () {
  return getTelegramWebApp()?.initData || ''
}

export function applyTelegramTheme () {
  const webApp = getTelegramWebApp()
  if (!webApp) return null

  const themeParams = webApp.themeParams || {}
  const root = document.documentElement
  const body = document.body
  const set = (name, value) => {
    if (!value) return
    root.style.setProperty(name, String(value))
  }

  set('--bg', themeParams.bg_color)
  set('--panel', themeParams.secondary_bg_color)
  set('--panel-strong', themeParams.section_bg_color || themeParams.secondary_bg_color)
  set('--text', themeParams.text_color)
  set('--muted', themeParams.hint_color)
  set('--accent', themeParams.button_color || themeParams.link_color)
  set('--accent-strong', themeParams.button_color || themeParams.link_color)
  set('--line', themeParams.hint_color)
  set('--line-soft', themeParams.hint_color)
  set('--tg-theme-bg-color', themeParams.bg_color)
  set('--tg-theme-secondary-bg-color', themeParams.secondary_bg_color)
  set('--tg-theme-text-color', themeParams.text_color)
  set('--tg-theme-hint-color', themeParams.hint_color)
  set('--tg-theme-link-color', themeParams.link_color)
  set('--tg-theme-button-color', themeParams.button_color)
  set('--tg-theme-button-text-color', themeParams.button_text_color)
  set('--tg-theme-header-bg-color', themeParams.header_bg_color)
  set('--tg-theme-accent-text-color', themeParams.accent_text_color)
  set('--tg-theme-section-bg-color', themeParams.section_bg_color)
  set('--tg-theme-section-header-text-color', themeParams.section_header_text_color)
  set('--tg-theme-subtitle-text-color', themeParams.subtitle_text_color)
  set('--tg-theme-destructive-text-color', themeParams.destructive_text_color)

  if (webApp.colorScheme === 'light') {
    root.dataset.theme = 'light'
  } else {
    delete root.dataset.theme
  }

  if (body) {
    body.style.background = themeParams.bg_color || ''
    body.style.color = themeParams.text_color || ''
  }

  return themeParams
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
