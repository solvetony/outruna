import { defineConfig } from '@playwright/test'
import { existsSync } from 'node:fs'

if (existsSync('.env')) process.loadEnvFile('.env')

const run = process.env.VISUAL_RUN ||= new Date().toISOString().replace(/[:.]/g, '-')

export default defineConfig({
  testDir: './test/visual',
  outputDir: `.artifacts/visual/${run}/screenshots`,
  snapshotPathTemplate: '{testDir}/snapshots/{projectName}/{arg}{ext}',
  reporter: [['list'], ['html', { outputFolder: `.artifacts/visual/${run}/report`, open: 'never' }]],
  workers: 1,
  timeout: 60000,
  use: {
    baseURL: 'http://127.0.0.1:5175',
    locale: 'en-US',
    timezoneId: 'UTC',
    colorScheme: 'light',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: { executablePath: process.env.CHROME_BIN || (existsSync('/usr/bin/google-chrome') ? '/usr/bin/google-chrome' : undefined) }
  },
  projects: [
    { name: 'mobile', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
    { name: 'narrow', use: { viewport: { width: 320, height: 740 }, isMobile: true, hasTouch: true } },
    { name: 'desktop', use: { viewport: { width: 1280, height: 900 } } }
  ],
  webServer: { command: 'npm run dev', url: 'http://127.0.0.1:5175', reuseExistingServer: !process.env.CI }
})
