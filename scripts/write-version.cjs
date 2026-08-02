'use strict'

const fs = require('node:fs')
const path = require('node:path')
const { resolveBuildMeta } = require('./build-meta.cjs')

const meta = resolveBuildMeta()
const outputDir = path.resolve(__dirname, '..', 'public', 'napi')
const outputPath = path.join(outputDir, 'version')

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify(meta)}\n`)

console.log(`Wrote /napi/version buildId=${meta.buildId} commit=${meta.commit}`)
