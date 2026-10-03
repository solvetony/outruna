const key = 'outruna-theme-v1'
let fallback = 'auto'
export const themeOptions = ['auto', 'light', 'dark', 'eink']

export function themePreference () {
  try {
    const value = localStorage.getItem(key)
    return themeOptions.includes(value) ? value : fallback
  } catch { return fallback }
}

export function applyTheme () {
  const preference = themePreference()
  const telegram = window.Telegram?.WebApp
  const automatic = telegram?.initData ? telegram.colorScheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const theme = preference === 'auto' ? automatic === 'dark' ? 'dark' : 'light' : preference
  document.documentElement.dataset.theme = theme
  window.dispatchEvent(new Event('outruna-theme-changed'))
  return theme
}

export function setThemePreference (value) {
  if (!themeOptions.includes(value)) return
  fallback = value
  try { localStorage.setItem(key, value) } catch {}
  applyTheme()
}

export function initTheme () {
  applyTheme()
  window.Telegram?.WebApp?.onEvent?.('themeChanged', applyTheme)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme)
  window.addEventListener('storage', (event) => { if (event.key === key || event.key === null) { fallback = 'auto'; applyTheme() } })
}
