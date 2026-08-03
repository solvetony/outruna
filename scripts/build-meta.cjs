'use strict'

const { execSync } = require('node:child_process')
const path = require('node:path')
const packageJson = require('../package.json')

const repoRoot = path.resolve(__dirname, '..')

const SOURCES = [
  'BUILD_ID',
  'VERCEL_GIT_COMMIT_SHA',
  'GITHUB_SHA',
  'COMMIT_SHA'
]

function normalizeBuildId (value) {
  const normalized = String(value || '')
    .trim()
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[._-]+|[._-]+$/g, '')

  return normalized.slice(0, 32)
}

function gitRevParse (args) {
  try {
    return String(execSync(`git rev-parse ${args}`, {
      stdio: ['ignore', 'pipe', 'ignore'],
      cwd: repoRoot
    }) || '').trim()
  } catch {
    return ''
  }
}

function resolveBuildId (env = process.env) {
  for (const key of SOURCES) {
    const value = normalizeBuildId(env[key])
    if (value) return value
  }

  const gitCommit = normalizeBuildId(gitRevParse('--short=12 HEAD'))
  if (gitCommit) return gitCommit

  const versionFallback = normalizeBuildId(env.npm_package_version || packageJson.version)
  if (versionFallback) return versionFallback
  return 'dev'
}

function resolveBuildMeta (env = process.env) {
  const buildId = resolveBuildId(env)
  const fullCommit = gitRevParse('HEAD')
  const envCommit = env.VERCEL_GIT_COMMIT_SHA || env.GITHUB_SHA || env.COMMIT_SHA
  const commit = String(envCommit || fullCommit || buildId).trim() || buildId

  return {
    buildId,
    commit,
    version: packageJson.version || '0.0.0'
  }
}

module.exports = {
  normalizeBuildId,
  resolveBuildId,
  resolveBuildMeta
}
