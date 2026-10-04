import { test, expect } from '@playwright/test'

test.use({ trace: 'off', screenshot: 'off' })

test('live email login and EVM wallet screenshot', async ({ page }, info) => {
  test.skip(process.env.RUN_LIVE_EMAIL !== '1', 'Live email login is opt-in')
  test.setTimeout(180000)
  const { MAILTM_ADDRESS: address, MAILTM_PASSWORD: password } = process.env
  if (!address || !password) throw new Error('Configure MAILTM_ADDRESS and MAILTM_PASSWORD in .env')
  const base = process.env.MAILTM_API_BASE || 'https://api.mail.tm'
  const request = async (path, options = {}) => {
    const response = await fetch(new URL(path, base), { ...options, signal: AbortSignal.timeout(15000) })
    if (!response.ok) throw new Error(`mail.tm request failed (${response.status})`)
    return response.json()
  }
  const { token } = await request('/token', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ address, password }) })
  const headers = { Authorization: `Bearer ${token}` }
  const existing = new Set((await request('/messages', { headers }))['hydra:member'].map(message => message.id))
  await page.goto('/')
  await page.getByRole('button', { name: 'Continue With Email', exact: true }).click()
  await page.locator('input[type=email]').fill(address)
  await page.getByRole('button', { name: /Submit|Continue|Send.*code/i }).last().click()
  const inputs = page.locator('input[autocomplete=one-time-code], input[inputmode=numeric]')
  const rejected = page.getByRole('heading', { name: 'Something went wrong', exact: true })
  await expect(inputs.first().or(rejected)).toBeVisible({ timeout: 20000 })
  if (await rejected.isVisible()) throw new Error('Privy rejected the email-login request before sending a verification code')
  let code
  await expect.poll(async () => {
    const messages = (await request('/messages', { headers }))['hydra:member'] || []
    for (const message of messages) {
      if (existing.has(message.id) || !/privy|outruna|verification|login|sign.?in|code/i.test(`${message.subject || ''} ${message.from?.address || ''}`)) continue
      const detail = await request(`/messages/${encodeURIComponent(message.id)}`, { headers })
      const text = Array.isArray(detail.text) ? detail.text.join(' ') : detail.text
      code = (text || detail.intro || '').match(/\b(\d{6})\b/)?.[1]
      if (code) return true
    }
    return false
  }, { timeout: 90000, intervals: [2000, 3000, 5000] }).toBe(true)
  await expect(inputs.first()).toBeVisible()
  const count = await inputs.count()
  try {
    if (count === 1) await inputs.fill(code)
    else if (count === 6) for (let i = 0; i < 6; i++) await inputs.nth(i).fill(code[i])
    else throw new Error()
  } catch { throw new Error('Unable to enter the verification code') } finally { code = null }
  const setup = page.getByRole('heading', { name: 'Get started', exact: true })
  await expect(page.locator('.hero-number').or(setup)).toBeVisible({ timeout: 60000 })
  if (await setup.isVisible()) await page.getByRole('button', { name: /Continue/ }).click()
  await expect(page.locator('.hero-number')).toBeVisible({ timeout: 60000 })
  await expect(page.getByRole('button', { name: 'Continue With Telegram', exact: true })).toHaveCount(0)
  const path = info.outputPath('live-evm-wallet.png')
  await page.screenshot({ path, fullPage: true })
  await info.attach('Live EVM wallet', { path, contentType: 'image/png' })
})
