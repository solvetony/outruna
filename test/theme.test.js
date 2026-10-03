import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile } from 'node:fs/promises'
import { applyTheme, setThemePreference, themePreference } from '../src/lib/theme.js'
import { themeMessages } from '../src/i18n/theme.js'

test('automatic Telegram/browser themes, manual override and unavailable storage', () => {
  const saved = new Map()
  globalThis.localStorage = { getItem: (key) => saved.get(key), setItem: (key, value) => saved.set(key, value) }
  globalThis.document = { documentElement: { dataset: {} } }
  globalThis.window = { Telegram: { WebApp: { initData: 'launch', colorScheme: 'dark' } }, matchMedia: () => ({ matches: false }), dispatchEvent () {} }
  assert.equal(applyTheme(), 'dark')
  setThemePreference('light')
  assert.equal(document.documentElement.dataset.theme, 'light')
  assert.equal(themePreference(), 'light')
  setThemePreference('eink')
  assert.equal(document.documentElement.dataset.theme, 'eink')
  setThemePreference('invalid')
  assert.equal(themePreference(), 'eink')
  setThemePreference('auto')
  window.Telegram.WebApp.colorScheme = 'light'
  assert.equal(applyTheme(), 'light')
  window.Telegram.WebApp.initData = ''
  window.matchMedia = () => ({ matches: true })
  assert.equal(applyTheme(), 'dark')
  globalThis.localStorage = { getItem () { throw new Error() }, setItem () { throw new Error() } }
  setThemePreference('light')
  assert.equal(applyTheme(), 'light')
})

test('theme messages cover all languages', () => {
  for (const locale of ['en', 'de', 'es', 'ru', 'zh', 'hi', 'bn']) assert.deepEqual(Object.keys(themeMessages[locale]), Object.keys(themeMessages.en))
})

test('text colors use theme tokens rather than fixed colors', async () => {
  const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.doesNotMatch(css, /(?:^|[;{\n])\s*color:\s*(?:#|rgba?\()/)
  assert.match(css, /\.deposit-qr-image \{ background: #fff; \}/)
})
