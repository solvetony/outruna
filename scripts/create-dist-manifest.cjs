'use strict'

const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const root = path.resolve(__dirname, '..')
const dist = path.resolve(root, process.argv[2] || 'dist')
const output = path.join(dist, 'SHA256SUMS')
const excluded = new Set(['SHA256SUMS', 'SHA256SUMS.sig'])

function collectFiles (directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return collectFiles(absolutePath)
    return [absolutePath]
  })
}

if (!fs.existsSync(dist)) {
  console.error(`Dist directory does not exist: ${dist}`)
  process.exit(1)
}

const files = collectFiles(dist)
  .filter((file) => !excluded.has(path.basename(file)))
  .map((file) => path.relative(dist, file).split(path.sep).join('/'))
  .sort()

const lines = files.map((relativePath) => {
  const absolutePath = path.join(dist, relativePath)
  const hash = crypto.createHash('sha256').update(fs.readFileSync(absolutePath)).digest('hex')
  return `${hash}  ${relativePath}`
})

fs.writeFileSync(output, `${lines.join('\n')}\n`)
console.log(`Wrote ${output} (${files.length} files)`)
