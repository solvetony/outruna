import { test, expect } from '@playwright/test'
import { randomUUID } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import qrcode from 'qrcode-generator'
import { transactionSafetyTranslations, backupVerificationMessages } from '../../src/i18n/transactionSafety.js'

async function capture (page, info, name) {
  await page.evaluate(() => document.fonts.ready)
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  const options = {
    fullPage: true,
    animations: 'disabled'
  }
  const path = info.outputPath(`${name}.png`)
  await page.screenshot({ ...options, path })
  await info.attach(name, { path, contentType: 'image/png' })
  if (process.env.VISUAL_COMPARE !== '1') return
  const address = '124kkopguzMsC1rxRkqmkGEcv5K2oauC8fxgEqtuu3TcEZFKmSNd5cNFBu6dKywvF9Fssyy737RLA2GhfATni9qQcX5'
  const qr = qrcode(0, 'M')
  qr.addData(address)
  qr.make()
  const originals = await page.evaluateHandle(({ address, svg }) => {
    if (!window.tariCheck?.address) return []
    const originals = []
    for (const element of document.querySelectorAll('.hero-account-address, .deposit-address-text, .tari-settings-address, .tari-address, .tari-asset-details-address, .tari-backup-address')) {
      originals.push([element, element.innerHTML])
      const parts = element.textContent.match(/^(.*?)(\.\.\.|…)(.*)$/)
      element.textContent = parts ? `${address.slice(0, parts[1].length)}${parts[2]}${address.slice(-parts[3].length)}` : address
    }
    const container = document.querySelector('.deposit-qr-image')
    if (container) { originals.push([container, container.innerHTML]); container.innerHTML = svg }
    return originals
  }, { address, svg: qr.createSvgTag({ cellSize: 1, margin: 4, scalable: true }) })
  try { await expect(page).toHaveScreenshot(`${name}.png`, options) } finally {
    await originals.evaluate(entries => { for (const [element, html] of entries) element.innerHTML = html })
    await originals.dispose()
  }
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('outruna:language', 'en'))
  await page.clock.setFixedTime(new Date('2026-10-03T12:00:00Z'))
})

test('onboarding and network preferences', async ({ page }, info) => {
  await page.goto('/test/setup-browser.html')
  await expect(page.getByRole('heading', { name: 'Get started' })).toBeVisible()
  await capture(page, info, 'onboarding')
  await page.getByRole('button', { name: /Continue/ }).click()
  await expect(page.locator('.settings-preference-row')).not.toHaveCount(0)
  await capture(page, info, 'preferences')
})

test('Tari views, themes, backup dialogs and transaction review', async ({ page }, info) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/test/tari-browser.html')
  await expect.poll(() => page.evaluate(() => window.tariCheck?.initialized && !window.tariCheck.syncing)).toBe(true)
  await expect(page.locator('#tari-export-password')).toBeVisible()
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  for (const theme of ['light', 'dark', 'eink']) {
    await page.evaluate(theme => import('/src/lib/theme.js').then(module => module.setThemePreference(theme)), theme)
    await expect(page.locator('html')).toHaveAttribute('data-theme', theme)
    await capture(page, info, `tari-wallet-${theme}`)
    await page.locator('.tari-asset').click()
    await expect(page.locator('.tari-asset-details-list')).toBeVisible()
    await capture(page, info, `tari-details-${theme}`)
    await page.getByRole('button', { name: 'Close', exact: true }).click()
    await page.locator('.tari-settings-row').click()
    await expect(page.locator('.tari-settings-panel')).toBeVisible()
    await capture(page, info, `tari-settings-${theme}`)
    await page.getByRole('button', { name: 'Close', exact: true }).click()
  }
  await page.evaluate(() => import('/src/lib/theme.js').then(module => module.setThemePreference('light')))
  await page.getByRole('button', { name: 'Deposit', exact: true }).click()
  await expect(page.locator('.deposit-qr-image svg')).toBeVisible()
  await capture(page, info, 'tari-deposit')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await page.locator('.tari-settings-row').click()
  await page.getByRole('button', { name: 'Export backup', exact: true }).click()
  const password = `Local-visual-password-${randomUUID()}!`
  await page.locator('#tari-export-password').fill(password)
  await page.locator('#tari-export-confirm').fill(password)
  await capture(page, info, 'tari-export-strength')
  const address = await page.evaluate(() => window.tariCheck.address)
  const downloadEvent = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download encrypted backup', exact: true }).click()
  const download = await downloadEvent
  const backupPath = info.outputPath(download.suggestedFilename())
  await download.saveAs(backupPath)
  const envelope = JSON.parse(await readFile(backupPath, 'utf8'))
  expect(envelope.format).toBe('outruna-tari-backup')
  expect(envelope.address).toBe(address)
  expect(envelope.cipher.name).toBe('AES-256-GCM')
  expect(JSON.stringify(envelope)).not.toContain(password)
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.locator('.tari-settings-row').click()
  await page.getByRole('button', { name: 'Import backup', exact: true }).click()
  await capture(page, info, 'tari-import')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await page.locator('.tari-settings-row').click()
  await page.getByRole('button', { name: 'Verify backup', exact: true }).click()
  await capture(page, info, 'tari-verify')
  await page.locator('input[type=file]').setInputFiles(backupPath)
  await expect(page.locator('.tari-backup-address')).toHaveAttribute('title', address)
  await expect(page.locator('.tari-backup-address')).toBeVisible()
  await capture(page, info, 'tari-verify-uploaded')
  await page.locator('#tari-import-password').fill('Wrong-visual-password-42!')
  await page.getByRole('button', { name: 'Verify backup', exact: true }).click()
  await expect(page.locator('[role=alert]')).toBeVisible()
  await capture(page, info, 'tari-verify-wrong-password')
  await page.locator('#tari-import-password').fill(password)
  await page.getByRole('button', { name: 'Verify backup', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Backup verified', exact: true })).toBeVisible()
  expect(await page.evaluate(() => window.tariCheck.address)).toBe(address)
  await expect(page.locator('.tari-backup-address')).toHaveAttribute('title', address)
  await expect(page.locator('.tari-backup-address')).toHaveText(`${address.slice(0, 10)}…${address.slice(-8)}`)
  await expect(page.locator('.tari-backup-address')).toBeVisible()
  await capture(page, info, 'tari-verified')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await page.evaluate(async () => {
    const { encodeErc20ApproveData } = await import('/src/lib/transactions/decode.js')
    window.transactionDecision = 'warning'
    void window.transactionCheck({ from: '0x1111111111111111111111111111111111111111', to: '0x2222222222222222222222222222222222222222', chainId: 1, value: '0x0', data: encodeErc20ApproveData('0x3333333333333333333333333333333333333333', (1n << 256n) - 1n) }, { purpose: 'approval' })
  })
  await expect(page.locator('.risk-modal-summary')).toBeVisible()
  await expect(page.locator('.risk-modal-actions button').last()).toBeDisabled()
  await capture(page, info, 'unlimited-approval-review')
  await page.getByRole('button', { name: 'Go back', exact: true }).click()
  expect(errors).toEqual([])
})

test('translated backup verification and transaction warnings', async ({ page }, info) => {
  for (const locale of ['ru', 'zh']) {
    await page.addInitScript(locale => localStorage.setItem('outruna:language', locale), locale)
    await page.goto('/test/tari-browser.html')
    await expect(page.locator('#tari-export-password')).toBeVisible()
    await page.locator('.tari-sheet .wallet-icon-button').click()
    await page.locator('.tari-settings-row').click()
    await expect(page.getByRole('button', { name: backupVerificationMessages[locale].verifyBackup, exact: true })).toBeVisible()
    await capture(page, info, `tari-settings-${locale}`)
    await page.locator('.tari-sheet .wallet-icon-button').click()
    await page.evaluate(() => {
      window.transactionDecision = 'warning'
      void window.transactionCheck({ from: '0x1111111111111111111111111111111111111111', to: '0x2222222222222222222222222222222222222222', chainId: 1, value: '0x0', data: '0x12345678' }, { purpose: 'swap', amountIn: '100 USDC', expectedOut: '0.031 ETH', provider: '0x' })
    })
    await expect(page.getByText(transactionSafetyTranslations[locale].unknown, { exact: true })).toBeVisible()
    await capture(page, info, `transaction-warning-${locale}`)
  }
})

test('EVM wallet, deposit, withdrawal and settings', async ({ page }, info) => {
  await page.route('**/*react-auth*.js*', route => route.fulfill({ contentType: 'application/javascript', body: 'export const usePrivy = () => ({user: null}); export const useMfaEnrollment = () => ({showMfaEnrollmentModal: async () => {}})' }))
  await page.goto('/test/evm-browser.html')
  await expect(page.locator('.hero-number')).toBeVisible()
  await expect(page.locator('.asset-row').first()).toBeVisible()
  for (const theme of ['light', 'dark', 'eink']) {
    await page.evaluate(theme => import('/src/lib/theme.js').then(module => module.setThemePreference(theme)), theme)
    await capture(page, info, `evm-wallet-${theme}`)
  }
  await page.getByRole('button', { name: 'Deposit', exact: true }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.locator('.deposit-qr-image svg')).toBeVisible()
  await capture(page, info, 'evm-deposit')
  await page.getByRole('dialog').getByRole('button', { name: /Close/ }).click()
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await capture(page, info, 'evm-withdraw')
  await page.getByRole('dialog').getByRole('button', { name: /Close/ }).click()
  await page.getByRole('button', { name: 'More', exact: true }).click()
  await expect(page.locator('.settings-preference-row').first()).toBeVisible()
  await capture(page, info, 'evm-settings')
})
