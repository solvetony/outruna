import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('email authentication does not trigger Telegram account linking', async () => {
  const source = await readFile(new URL('../src/components/AuthGate.jsx', import.meta.url), 'utf8')
  assert.doesNotMatch(source, /useLinkAccount|linkOAuth|telegramLinkAttempted/)
  assert.match(source, /const isTelegramLaunch = Boolean\(telegramInitData\)/)
  assert.match(source, /return initOAuth\(\{ provider: telegramOAuthProvider \}\)/)
  const loginScreen = source.slice(source.indexOf('  if (!authenticated) {\n    return ('), source.indexOf('  if (error) {'))
  assert.match(loginScreen, /auth.continueTelegram/)
  assert.match(loginScreen, /auth.continueEmail/)
  assert.doesNotMatch(loginScreen, /\{isTelegramLaunch\s*\?\s*\(/)
})
