import { test, expect } from '@playwright/test'
import { randomUUID } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import qrcode from 'qrcode-generator'
import { transactionSafetyTranslations, backupVerificationMessages } from '../../src/i18n/transactionSafety.js'
import { walletFeedbackMessages } from '../../src/i18n/walletFeedback.js'

async function capture (page, info, name) {
  await page.evaluate(() => document.fonts.ready)
  await page.evaluate(async () => {
    window.scrollTo(0, 0)
    document.querySelector('[role=dialog] .wallet-dialog-header .wallet-icon-button')?.focus({ preventScroll: true })
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  })
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  if (await page.locator('.deposit-qr-image svg').count()) {
    const bounds = await page.locator('.deposit-qr-card').evaluate(card => {
      const box = card.getBoundingClientRect()
      const svg = card.querySelector('svg').getBoundingClientRect()
      const style = getComputedStyle(card)
      const inset = side => parseFloat(style[`padding${side}`]) + parseFloat(style[`border${side}Width`])
      return {
        square: Math.abs(svg.width - svg.height) < 1,
        contained: svg.left >= box.left + inset('Left') - 1 && svg.right <= box.right - inset('Right') + 1 && svg.top >= box.top + inset('Top') - 1 && svg.bottom <= box.bottom - inset('Bottom') + 1,
        size: Math.min(svg.width, svg.height)
      }
    })
    expect(bounds.square, 'QR must remain square').toBe(true)
    expect(bounds.contained, 'Complete QR must fit inside its padded container').toBe(true)
    expect(bounds.size).toBeGreaterThanOrEqual(140)
  }
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
    for (const element of document.querySelectorAll('.hero-account-address, .deposit-address-text, .tari-settings-address, .tari-address, .tari-asset-details-address, .tari-backup-address, .tari-sheet .tari-detail > strong')) {
      if (element.matches('.tari-detail > strong') && element.textContent !== window.tariCheck.address) continue
      originals.push([element, element.innerHTML])
      const reference = element.title && element.title !== window.tariCheck.address ? address.replace(/^124/, '125') : address
      const parts = element.textContent.match(/^(.*?)(\.\.\.|…)(.*)$/)
      if (element.querySelector('.tari-address-prefix')) {
        element.querySelector('.tari-address-prefix').textContent = address.slice(0, 10)
        element.querySelector('.tari-address-suffix').textContent = address.slice(-8)
      } else element.textContent = parts ? `${reference.slice(0, parts[1].length)}${parts[2]}${reference.slice(-parts[3].length)}` : reference
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

test('Tari views, themes, backup dialogs and transaction review', async ({ page, context }, info) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/test/tari-browser.html?priced')
  await expect.poll(() => page.evaluate(() => window.tariCheck?.initialized && !window.tariCheck.syncing)).toBe(true)
  await expect(page.locator('#tari-export-password')).toBeVisible()
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  for (const theme of ['light', 'dark', 'eink']) {
    await page.evaluate(theme => import('/src/lib/theme.js').then(module => module.setThemePreference(theme)), theme)
    await expect(page.locator('html')).toHaveAttribute('data-theme', theme)
    await capture(page, info, `tari-wallet-${theme}`)
    await page.locator('.tari-asset').click()
    await expect(page.locator('.tari-asset-details-list')).toBeVisible()
    const address = await page.evaluate(() => window.tariCheck.address)
    await expect(page.locator('.tari-asset-details-address')).toHaveText(`${address.slice(0, 10)}…${address.slice(-8)}`)
    await expect(page.locator('.tari-asset-details-address')).toHaveAttribute('title', address)
    await expect(page.locator('.tari-asset-details-address')).toHaveAttribute('aria-label', address)
    await expect(page.locator('.tari-asset-details-address')).toHaveCSS('white-space', 'nowrap')
    expect(await page.locator('.tari-address-suffix').evaluate(element => {
      const value = element.getBoundingClientRect()
      const parent = element.parentElement.getBoundingClientRect()
      return value.right <= parent.right + 1 && value.left >= parent.left
    })).toBe(true)
    await expect(page.locator('.tari-asset-details-actions .wallet-button--primary')).toBeEnabled()
    await capture(page, info, `tari-details-${theme}`)
    if (theme === 'light') {
      await page.locator('.tari-asset-details-copy').click()
      expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(address)
      await expect(page.locator('.tari-feedback')).toHaveCount(0)
    }
    await page.getByRole('button', { name: 'Close', exact: true }).click()
    await page.locator('.tari-settings-row').click()
    await expect(page.locator('.tari-settings-panel')).toBeVisible()
    await capture(page, info, `tari-settings-${theme}`)
    await page.getByRole('button', { name: 'Close', exact: true }).click()
  }
  await page.evaluate(() => import('/src/lib/theme.js').then(module => module.setThemePreference('light')))
  await page.getByRole('button', { name: 'Deposit', exact: true }).click()
  await expect(page.locator('.deposit-qr-image svg')).toBeVisible()
  const receiveAddress = await page.evaluate(() => window.tariCheck.address)
  const code = qrcode(0, 'M')
  code.addData(receiveAddress)
  code.make()
  let path = ''
  for (let y = 0; y < code.getModuleCount(); y++) for (let x = 0; x < code.getModuleCount(); x++) if (code.isDark(y, x)) path += `M${x + 4},${y + 4}h1v1h-1z`
  await expect(page.locator('.deposit-qr-image path')).toHaveAttribute('d', path)
  await page.locator('.deposit-address-copy').click()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(receiveAddress)
  await expect(page.locator('.tari-feedback')).toHaveCount(0)
  await capture(page, info, 'tari-deposit')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await page.locator('.tari-settings-row').click()
  await page.getByRole('button', { name: 'Export backup', exact: true }).click()
  let password = `Local-visual-password-${randomUUID()}!`
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
  await expect(page.locator('.tari-selected-filename')).toHaveText(download.suggestedFilename())
  await page.locator('#tari-import-password').fill(password)
  await page.getByRole('button', { name: 'Verify backup', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Backup verified', exact: true })).toBeVisible()
  expect(await page.evaluate(() => window.tariCheck.address)).toBe(address)
  await expect(page.locator('.tari-backup-address')).toHaveAttribute('title', address)
  await expect(page.locator('.tari-backup-address')).toHaveText(`${address.slice(0, 10)}…${address.slice(-8)}`)
  await expect(page.locator('.tari-backup-address')).toBeVisible()
  await capture(page, info, 'tari-verified')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await page.locator('.tari-settings-row').click()
  await capture(page, info, 'tari-settings-verified')
  await page.locator('.tari-settings-action--remove').click()
  await expect(page.locator('.tari-remove-confirmation')).toBeVisible()
  await capture(page, info, 'tari-remove-confirmation')
  await page.getByRole('button', { name: 'Cancel', exact: true }).click()
  expect(await page.evaluate(() => window.tariCheck.address)).toBe(address)
  await page.getByRole('button', { name: 'Change password', exact: true }).click()
  await capture(page, info, 'tari-change-password')
  const nextPassword = `${password}-changed`
  await page.locator('#tari-old-password').fill(password)
  await page.locator('#tari-export-password').fill(nextPassword)
  await page.locator('#tari-export-confirm').fill(nextPassword)
  const changedDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download encrypted backup', exact: true }).click()
  const changed = await changedDownload
  const changedPath = info.outputPath(`changed-${changed.suggestedFilename()}`)
  await changed.saveAs(changedPath)
  expect(JSON.parse(await readFile(changedPath, 'utf8')).address).toBe(address)
  password = nextPassword
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.evaluate(password => window.tariCheck.fundFixture(password), password)
  await expect.poll(() => page.evaluate(() => window.tariCheck.known)).toBe(true)
  await expect(page.locator('.asset-right strong')).toHaveText('1 XTM')
  await capture(page, info, 'tari-funded')
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click()
  await capture(page, info, 'tari-send')
  await page.locator('input[placeholder="Enter Tari address..."]').fill(address)
  await page.locator('input[inputmode=decimal]').fill('0.01')
  await page.getByRole('button', { name: 'Review transaction', exact: true }).click()
  await expect(page.locator('#tari-spend-password')).toBeVisible()
  await capture(page, info, 'tari-send-review')
  await page.locator('#tari-spend-password').fill(password)
  await page.getByRole('button', { name: 'Unlock for 1 minute', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Confirm & send', exact: true })).toBeVisible()
  await capture(page, info, 'tari-send-unlocked')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await page.evaluate(() => window.tariCheck.historyFixture())
  await page.getByRole('button', { name: 'History', exact: true }).click()
  await capture(page, info, 'tari-history')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await page.evaluate(() => { window.tariFixture.pause = true; void window.tariCheck.refresh() })
  await expect.poll(() => page.evaluate(() => window.tariCheck.syncing)).toBe(true)
  await expect(page.locator('.asset-right strong')).not.toHaveText('n/a')
  await capture(page, info, 'tari-refresh-cached')
  await page.evaluate(() => { window.tariFixture.pause = false; window.tariFixture.resumes.splice(0).forEach(resolve => resolve()) })
  await expect.poll(() => page.evaluate(() => !window.tariCheck.syncing)).toBe(true)
  await page.evaluate(() => { window.tariFixture.fail = true; void window.tariCheck.refresh() })
  await expect.poll(() => page.evaluate(() => window.tariCheck.error)).toBeTruthy()
  await capture(page, info, 'tari-sync-error')
  await page.evaluate(() => { window.tariFixture.fail = false; void window.tariCheck.refresh() })
  await expect.poll(() => page.evaluate(() => window.tariCheck.known)).toBe(true)
  await page.locator('.tari-settings-row').click()
  await page.getByRole('button', { name: 'Import backup', exact: true }).click()
  await page.locator('input[type=file]').setInputFiles(backupPath)
  await capture(page, info, 'tari-import-uploaded')
  const replacement = await page.evaluate(password => window.tariCheck.createBackup(password), password)
  await page.locator('input[type=file]').setInputFiles({ name: 'different-wallet.backup', mimeType: 'application/vnd.outruna.tari-backup+json', buffer: Buffer.from(replacement) })
  await page.locator('#tari-import-password').fill(password)
  await page.getByRole('button', { name: 'Restore Tari wallet', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Replace Tari wallet on this device?', exact: true })).toBeVisible()
  await capture(page, info, 'tari-import-replacement')
  await page.getByRole('button', { name: 'Cancel', exact: true }).click()
  expect(await page.evaluate(() => window.tariCheck.address)).toBe(address)
  await page.evaluate(async () => {
    const { encodeErc20ApproveData } = await import('/src/lib/transactions/decode.js')
    window.transactionDecision = 'warning'
    void window.transactionCheck({ from: '0x1111111111111111111111111111111111111111', to: '0x2222222222222222222222222222222222222222', chainId: 1, value: '0x0', data: encodeErc20ApproveData('0x3333333333333333333333333333333333333333', (1n << 256n) - 1n) }, { purpose: 'approval' })
  })
  await expect(page.locator('.risk-modal-summary')).toBeVisible()
  await expect(page.locator('.risk-modal-actions button').last()).toBeDisabled()
  if (await page.locator('.risk-modal-body').evaluate(body => body.scrollHeight > body.clientHeight + 2)) await expect(page.locator('.risk-scroll-note')).toBeVisible()
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
    const acknowledgement = page.locator('.risk-confirmation input')
    await acknowledgement.scrollIntoViewIfNeeded()
    await expect(acknowledgement).toBeInViewport()
    await expect(page.locator('.risk-modal-actions .wallet-button--danger')).toBeDisabled()
    await acknowledgement.check()
    await expect(page.locator('.risk-modal-actions .wallet-button--danger')).toBeEnabled()
    await capture(page, info, `transaction-warning-acknowledged-${locale}`)
  }
})

test('deposit QR codes remain square and unclipped in all themes', async ({ page }, info) => {
  await page.route('**/*react-auth*.js*', route => route.fulfill({ contentType: 'application/javascript', body: 'export const usePrivy = () => ({user: null}); export const useMfaEnrollment = () => ({showMfaEnrollmentModal: async () => {}})' }))
  for (const family of ['evm', 'tari']) {
    await page.goto(`/test/${family}-browser.html`)
    if (family === 'tari') {
      await expect(page.locator('#tari-export-password')).toBeVisible()
      await page.getByRole('button', { name: 'Close', exact: true }).click()
    }
    for (const theme of ['light', 'dark', 'eink']) {
      await page.evaluate(theme => import('/src/lib/theme.js').then(module => module.setThemePreference(theme)), theme)
      await page.getByRole('button', { name: 'Deposit', exact: true }).click()
      await expect(page.locator('.deposit-qr-image svg')).toBeVisible()
      await capture(page, info, `${family}-deposit-${theme}`)
      if ((family === 'evm' && theme === 'eink') || (family === 'tari' && theme === 'light')) await capture(page, info, `${family}-deposit`)
      await page.getByRole('dialog').getByRole('button', { name: /Close/ }).click()
    }
  }
})

test('EVM wallet, deposit, withdrawal and settings', async ({ page }, info) => {
  await page.route('**/*react-auth*.js*', route => route.fulfill({ contentType: 'application/javascript', body: 'export const usePrivy = () => ({user: null}); export const useMfaEnrollment = () => ({showMfaEnrollmentModal: async () => {}})' }))
  await page.goto('/test/evm-browser.html')
  await expect(page.locator('.hero-number')).toBeVisible()
  await expect(page.locator('.asset-row').first()).toBeVisible()
  await expect(page.locator('.hero-number')).not.toHaveText('$0.00')
  for (const theme of ['light', 'dark', 'eink']) {
    await page.evaluate(theme => import('/src/lib/theme.js').then(module => module.setThemePreference(theme)), theme)
    await capture(page, info, `evm-wallet-${theme}`)
    await page.getByRole('button', { name: 'Deposit', exact: true }).click()
    await expect(page.locator('.deposit-qr-image svg')).toBeVisible()
    await capture(page, info, `evm-deposit-${theme}`)
    await page.getByRole('dialog').getByRole('button', { name: /Close/ }).click()
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click()
    await capture(page, info, `evm-withdraw-${theme}`)
    await page.getByRole('dialog').getByRole('button', { name: /Close/ }).click()
    await page.getByRole('button', { name: 'More', exact: true }).click()
    await capture(page, info, `evm-settings-${theme}`)
    await page.locator('.settings-account summary').click()
    await capture(page, info, `evm-account-${theme}`)
    await page.getByRole('button', { name: 'Wallet', exact: true }).click()
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

test('EVM valuation, cached refresh and edited withdrawal feedback', async ({ page }, info) => {
  await page.addInitScript(() => localStorage.removeItem('thewallet:coingecko-prices:v1'))
  await page.route('**/*react-auth*.js*', route => route.fulfill({ contentType: 'application/javascript', body: 'export const usePrivy = () => ({user: null}); export const useMfaEnrollment = () => ({showMfaEnrollmentModal: async () => {}})' }))
  for (const mode of ['known', 'partial', 'zero']) {
    await page.goto(`/test/evm-browser.html?prices=${mode === 'zero' ? 'known&zero=1' : mode}`)
    if (mode === 'partial') await expect(page.locator('.portfolio-value-note')).toContainText('Some prices')
    else if (mode === 'zero') await expect(page.locator('.hero-number')).toHaveText('$0.00')
    else await expect(page.locator('.hero-number')).toContainText('$6,')
    await capture(page, info, `evm-valuation-${mode}`)
  }
  await page.goto('/test/evm-browser.html?prices=known')
  await expect(page.locator('.hero-number')).toContainText('$6,')
  const previous = await page.locator('.hero-number').textContent()
  await page.evaluate(() => { window.evmFixture.pause = true })
  await page.getByRole('button', { name: 'Refresh balances', exact: true }).click()
  await expect(page.locator('.portfolio-value-note')).toContainText('previous balance')
  await expect(page.locator('.hero-number')).toHaveText(previous)
  await capture(page, info, 'evm-refresh-cached')
  await page.evaluate(() => { window.evmFixture.pause = false; window.evmFixture.resume() })
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click()
  const amount = page.getByRole('textbox', { name: 'Amount', exact: true })
  const recipient = page.getByRole('textbox', { name: 'Destination', exact: true })
  await expect(amount).toHaveValue('')
  await amount.fill('10')
  await expect(page.locator('#withdraw-amount-feedback')).toHaveText(walletFeedbackMessages.en.amountBalance)
  await recipient.focus()
  await recipient.blur()
  await expect(page.locator('#withdraw-recipient-feedback')).toHaveText(walletFeedbackMessages.en.recipientRequired)
  await capture(page, info, 'evm-withdraw-insufficient')
  await recipient.fill('invalid')
  await expect(page.locator('#withdraw-recipient-feedback')).toHaveText(walletFeedbackMessages.en.recipientInvalid)
  await recipient.fill('0x2222222222222222222222222222222222222222')
  await amount.fill('1')
  await expect(page.getByRole('button', { name: 'Send', exact: true })).toBeEnabled()
  await capture(page, info, 'evm-withdraw-valid-native')
  await amount.fill('2')
  await expect(page.locator('#withdraw-amount-feedback')).toHaveText(walletFeedbackMessages.en.amountFee)
  await capture(page, info, 'evm-withdraw-fee-insufficient')
  await page.locator('.wallet-asset-picker-button').click()
  await page.locator('.wallet-asset-option').filter({ hasText: 'USDC' }).first().click()
  await amount.fill('0.5')
  await expect(page.getByRole('button', { name: 'Send', exact: true })).toBeEnabled()
  await capture(page, info, 'evm-withdraw-valid-erc20')
  await page.evaluate(() => { window.evmFixture.feeError = true })
  await amount.fill('0.4')
  await expect(page.locator('.wallet-form-note').filter({ hasText: 'Fixture fee service unavailable' })).toBeVisible()
  await capture(page, info, 'evm-withdraw-fee-error')
})

test('network preferences expand, reorder by keyboard and pointer, and persist', async ({ page }, info) => {
  await page.goto('/test/setup-browser.html')
  await page.getByRole('button', { name: /Continue/ }).click()
  await page.locator('.settings-networks > summary').click()
  await capture(page, info, 'networks-expanded')
  const row = page.locator('[data-network-key="tari:mainnet"]')
  await row.locator('.network-preferences-grip').focus()
  await page.keyboard.press('ArrowUp')
  await expect.poll(() => page.evaluate(() => window.setupCheck.preferences.networkOrder[1])).toBe('tari:mainnet')
  await capture(page, info, 'networks-keyboard-reordered')
  const grip = await row.locator('.network-preferences-grip').boundingBox()
  const target = await page.locator('[data-network-key="1"]').boundingBox()
  await page.mouse.move(grip.x + grip.width / 2, grip.y + grip.height / 2)
  await page.mouse.down()
  await page.mouse.move(target.x + target.width / 2, target.y + target.height / 2, { steps: 5 })
  await page.mouse.up()
  await expect.poll(() => page.evaluate(() => window.setupCheck.preferences.networkOrder[0])).toBe('tari:mainnet')
  await page.reload()
  await page.locator('.settings-networks > summary').click()
  await expect(page.locator('.network-preferences-row').first()).toHaveAttribute('data-network-key', 'tari:mainnet')
  await page.locator('[data-network-key="tari:mainnet"] [role=switch]').click()
  await expect(page.locator('[data-network-key="tari:mainnet"] [role=switch]')).toHaveAttribute('aria-checked', 'false')
  await capture(page, info, 'networks-reordered-disabled')
})

test('all supported locales remain usable with enlarged text', async ({ page }, info) => {
  test.setTimeout(120000)
  const enlarge = () => {
    const elements = [...document.querySelectorAll('.setup-heading, .setup-language, .network-preferences, .setup-security, .setup-continue, .tari-settings-panel, .wallet-dialog-heading, .risk-modal-body, .risk-modal-actions, .theme-settings')]
    const sizes = new Map()
    for (const parent of elements) for (const element of [parent, ...parent.querySelectorAll('h1,h2,h3,p,span,strong,label,button,select')]) sizes.set(element, parseFloat(getComputedStyle(element).fontSize) * 1.25)
    for (const [element, size] of sizes) element.style.fontSize = `${size}px`
  }
  for (const locale of ['en', 'bn', 'de', 'es', 'hi', 'ru', 'zh']) {
    await page.addInitScript(locale => { localStorage.setItem('outruna:language', locale); localStorage.removeItem('outruna:wallet-preferences:setup-browser') }, locale)
    await page.goto('/test/setup-browser.html')
    await expect(page.locator('.setup-continue')).toBeVisible()
    await page.evaluate(enlarge)
    await capture(page, info, `onboarding-enlarged-${locale}`)
    await page.locator('.setup-continue').click()
    await page.evaluate(enlarge)
    await page.locator('.theme-settings select').selectOption('eink')
    expect(await page.locator('.theme-settings select').evaluate(select => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      context.font = getComputedStyle(select).font
      return select.clientWidth >= context.measureText(select.selectedOptions[0].textContent).width + 28
    })).toBe(true)
    await capture(page, info, `preferences-enlarged-${locale}`)
    await page.goto('/test/tari-browser.html')
    await expect(page.locator('#tari-export-password')).toBeVisible()
    await page.locator('.tari-sheet .wallet-icon-button').click()
    await page.locator('.tari-settings-row').click()
    await page.evaluate(enlarge)
    await expect(page.locator('.tari-settings-action--remove')).toBeDisabled()
    await page.locator('.tari-sheet .wallet-dialog-body').evaluate(body => { body.scrollTop = 0 })
    await capture(page, info, `tari-settings-enlarged-${locale}`)
    await page.locator('.tari-recovery-row .wallet-button').focus()
    await page.keyboard.press('Tab')
    await expect(page.locator('.tari-sheet .wallet-icon-button')).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).toHaveCount(0)
    await page.evaluate(() => {
      window.transactionDecision = 'warning'
      void window.transactionCheck({ from: '0x1111111111111111111111111111111111111111', to: '0x2222222222222222222222222222222222222222', chainId: 1, value: '0x0', data: '0x12345678' }, { purpose: 'swap', amountIn: '100 USDC', expectedOut: '0.031 ETH', provider: '0x' })
    })
    await expect(page.locator('.risk-confirmation')).toBeVisible()
    await page.evaluate(enlarge)
    await page.locator('.risk-confirmation input').focus()
    await page.keyboard.press('Space')
    await expect(page.locator('.risk-modal-actions .wallet-button--danger')).toBeEnabled()
    await page.locator('.risk-modal-body').evaluate(body => { body.scrollTop = body.scrollHeight })
    await capture(page, info, `risk-enlarged-${locale}`)
    await page.keyboard.press('Escape')
  }
})

test('details text contrast meets AA in all themes and QR retains its white background', async ({ page }, info) => {
  await page.goto('/test/tari-browser.html')
  await expect(page.locator('#tari-export-password')).toBeVisible()
  await page.locator('.tari-sheet .wallet-icon-button').click()
  for (const theme of ['light', 'dark', 'eink']) {
    await page.evaluate(theme => import('/src/lib/theme.js').then(module => module.setThemePreference(theme)), theme)
    await page.locator('.tari-asset').click()
    const ratios = await page.evaluate(() => {
      const rgba = color => color.match(/[\d.]+/g).map(Number)
      const blend = (front, back) => front.slice(0, 3).map((value, index) => value * (front[3] ?? 1) + back[index] * (1 - (front[3] ?? 1)))
      const luminance = color => color.map(value => { const n = value / 255; return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4 }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0)
      return [...document.querySelectorAll('.tari-asset-details-label, .tari-asset-details-value, .tari-asset-details-notice, .tari-asset-details-actions .wallet-button--primary')].map(element => {
        const parents = []
        for (let node = element; node; node = node.parentElement) parents.unshift(node)
        const background = parents.reduce((color, node) => blend(rgba(getComputedStyle(node).backgroundColor), color), [255, 255, 255])
        const foreground = blend(rgba(getComputedStyle(element).color), background)
        const values = [luminance(background), luminance(foreground)].sort((a, b) => b - a)
        return { text: element.textContent, ratio: (values[0] + 0.05) / (values[1] + 0.05) }
      })
    })
    await info.attach(`contrast-${theme}`, { body: JSON.stringify(ratios, null, 2), contentType: 'application/json' })
    for (const result of ratios) expect(result.ratio, `${theme}: ${result.text}`).toBeGreaterThanOrEqual(4.5)
    await page.locator('.tari-sheet .wallet-icon-button').click()
    await page.getByRole('button', { name: 'Deposit', exact: true }).click()
    await expect(page.locator('.deposit-qr-image')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
    await expect(page.locator('.deposit-qr-image rect')).toHaveAttribute('fill', 'white')
    await page.locator('.tari-sheet .wallet-icon-button').click()
  }
})
