import { createHash } from 'node:crypto'
import { externalUrls } from '../src/lib/urls.js'

export function securityHeaders (html, development = false) {
  const hashes = [...html.matchAll(/\bintegrity="(sha384-[^"]+)"/g)].map((m) => `'${m[1]}'`)
  for (const [, content] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    hashes.push(`'sha384-${createHash('sha384').update(content).digest('base64')}'`)
  }
  const connections = [...new Set([
    externalUrls.appOrigin, externalUrls.tariRpc, externalUrls.rabbyApi, new URL(externalUrls.coinGeckoApi).origin,
    new URL(externalUrls.coinGeckoCorsProxy).origin, ...Object.values(externalUrls.rpc).flat().map((url) => new URL(url).origin),
    'https://auth.privy.io', 'https://*.rpc.privy.systems', 'https://explorer-api.walletconnect.com',
    'wss://relay.walletconnect.com', 'wss://relay.walletconnect.org', 'wss://www.walletlink.org',
    ...(development ? ['ws://127.0.0.1:5175', 'ws://localhost:5175'] : [])
  ])]
  const policy = [
    "default-src 'none'", `script-src 'self' 'wasm-unsafe-eval' ${hashes.join(' ')}`,
    "script-src-attr 'none'", "style-src 'self' 'unsafe-inline'", "img-src 'self' https: data: blob:",
    "font-src 'self' data:", `connect-src 'self' ${connections.join(' ')}`, "worker-src 'self'",
    'frame-src https://auth.privy.io https://oauth.telegram.org https://verify.walletconnect.com https://verify.walletconnect.org https://challenges.cloudflare.com',
    "frame-ancestors 'self' https://web.telegram.org https://*.web.telegram.org",
    "object-src 'none'", "base-uri 'none'", "form-action 'self'", "manifest-src 'self'"
  ].join('; ')
  return {
    'Content-Security-Policy': policy,
    'Content-Security-Policy-Report-Only': "require-trusted-types-for 'script'; trusted-types 'none'",
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), clipboard-write=(self)',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  }
}

export function metaPolicy (policy) {
  return policy.split('; ').filter((part) => !part.startsWith('frame-ancestors ')).join('; ')
}
