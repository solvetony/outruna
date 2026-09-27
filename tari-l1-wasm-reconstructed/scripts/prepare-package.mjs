#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { parseArgs } from 'node:util'

const { values } = parseArgs({ options: {
  scope: { type: 'string', default: '@chironbuilder' },
  'pkg-dir': { type: 'string', default: 'pkg' }
} })
const scope = values.scope
if (!/^@[a-z0-9][a-z0-9._-]*$/.test(scope)) throw new Error('Invalid package scope')
const pkgDir = values['pkg-dir']
const pkgPath = path.resolve(pkgDir, 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

pkg.name = `${scope}/tari-l1-wasm`
pkg.description = 'WebAssembly bindings for Tari L1 core primitives, including watch-only private-view-key output recovery'
pkg.license = 'BSD-3-Clause'
pkg.repository = {
  type: 'git',
  url: 'https://github.com/tari-project/tari',
  directory: 'base_layer/tari_l1_wasm'
}
pkg.publishConfig = { access: 'public' }
pkg.keywords = ['tari', 'minotari', 'wasm', 'webassembly', 'blockchain', 'crypto', 'view-key', 'watch-only']

fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
console.log(`prepared ${pkg.name} in ${pkgDir}`)
