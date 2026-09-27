import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'

test('package arguments accept separate values and equals syntax', () => {
  const directory = mkdtempSync(join(tmpdir(), 'tari-package-'))
  const script = fileURLToPath(new URL('../scripts/prepare-package.mjs', import.meta.url))
  try {
    const filename = join(directory, 'package.json')
    writeFileSync(filename, JSON.stringify({ version: '5.6.0-pre.8-recon.1' }))
    for (const args of [
      ['--scope', '@outruna', '--pkg-dir', directory],
      ['--scope=@outruna', `--pkg-dir=${directory}`]
    ]) {
      execFileSync(process.execPath, [script, ...args])
      const result = JSON.parse(readFileSync(filename, 'utf8'))
      assert.equal(result.name, '@outruna/tari-l1-wasm')
      assert.equal(result.version, '5.6.0-pre.8-recon.1')
    }
  } finally { rmSync(directory, { recursive: true, force: true }) }
})
