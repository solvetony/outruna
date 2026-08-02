import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { createRequire } from 'node:module'
import { createHash } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { resolveSiteUrl } from './src/lib/seo.js'

const require = createRequire(import.meta.url)
const { resolveBuildMeta } = require('./scripts/build-meta.cjs')

const versionHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  Pragma: 'no-cache',
  Expires: '0',
  'Surrogate-Control': 'no-store',
  'Content-Type': 'application/json'
}

function rewriteDevSetCookie (cookie) {
  return cookie
    .replace(/;\s*Domain=[^;]*/gi, '')
    .replace(/;\s*Secure/gi, '')
}

function versionPayload () {
  const meta = resolveBuildMeta()
  const buildId = process.env.VITE_BUILD_ID || meta.buildId
  return JSON.stringify({
    buildId,
    commit: process.env.VITE_BUILD_COMMIT || meta.commit,
    version: process.env.VITE_APP_VERSION || meta.version
  })
}

function versionRoutePlugin () {
  function handler (req, res, next) {
    if (req.url !== '/napi/version') return next()
    Object.entries(versionHeaders).forEach(([key, value]) => res.setHeader(key, value))
    res.end(versionPayload())
  }

  return {
    name: 'outruna-version-route',
    configureServer (server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer (server) {
      server.middlewares.use(handler)
    }
  }
}

function coingeckoRoutePlugin () {
  async function fetchUpstream (url) {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json'
      }
    })

    const body = await response.text()
    return {
      body,
      response
    }
  }

  async function handler (req, res, next) {
    if (!req.url?.startsWith('/api/v1/coingecko/markets') && !req.url?.startsWith('/api/v1/coingecko/simple-price')) return next()

    try {
      const requestUrl = new URL(req.url, 'http://127.0.0.1')
      const ids = String(requestUrl.searchParams.get('ids') || '')
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean)

      const vsCurrency = String(requestUrl.searchParams.get('vs_currency') || 'usd').trim() || 'usd'
      const priceChangePercentage = String(requestUrl.searchParams.get('price_change_percentage') || '24h').trim() || '24h'

      let upstream

      if (req.url.startsWith('/api/v1/coingecko/simple-price')) {
        upstream = new URL('https://api.coingecko.com/api/v3/simple/price')
        upstream.searchParams.set('ids', ids.join(','))
        upstream.searchParams.set('vs_currencies', vsCurrency)
        upstream.searchParams.set('include_24hr_change', 'true')
      } else {
        upstream = new URL('https://api.coingecko.com/api/v3/coins/markets')
        upstream.searchParams.set('vs_currency', vsCurrency)
        upstream.searchParams.set('ids', ids.join(','))
        upstream.searchParams.set('price_change_percentage', priceChangePercentage)
      }

      const { body, response } = await fetchUpstream(upstream.toString())
      res.statusCode = response.status
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json')
      res.end(body)
    } catch (error) {
      res.statusCode = 502
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        error: error?.message || 'CoinGecko proxy failed'
      }))
    }
  }

  return {
    name: 'outruna-coingecko-route',
    configureServer (server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer (server) {
      server.middlewares.use(handler)
    }
  }
}

function sriForJavaScriptPlugin () {
  function getIntegrity (source) {
    return `sha384-${createHash('sha384').update(source).digest('base64')}`
  }

  function getAssetForUrl (url, bundle) {
    if (!url || /^(?:[a-z]+:)?\/\//i.test(url) || url.startsWith('data:')) return null
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]).replace(/^\//, '')
    return Object.values(bundle).find((item) => item.type === 'chunk' && item.fileName === pathname) || null
  }

  function addIntegrityToTag (tag, attribute, bundle) {
    const match = tag.match(new RegExp(`${attribute}=["']([^"']+)["']`, 'i'))
    if (!match) return tag

    const asset = getAssetForUrl(match[1], bundle)
    if (!asset || !asset.fileName.endsWith('.js')) return tag
    if (/\bintegrity=["']/i.test(tag)) return tag

    const openingTagEnd = tag.indexOf('>')
    if (openingTagEnd < 0) return tag

    const crossorigin = /\bcrossorigin(?:=["'][^"']*["'])?/i.test(tag)
      ? ''
      : ' crossorigin="anonymous"'
    return `${tag.slice(0, openingTagEnd)} integrity="${getIntegrity(asset.code)}"${crossorigin}${tag.slice(openingTagEnd)}`
  }

  return {
    name: 'outruna-sri-for-javascript',
    apply: 'build',
    async writeBundle (options, bundle) {
      const outputDirectory = options.dir || dirname(options.file)
      if (!outputDirectory) return

      for (const asset of Object.values(bundle)) {
        if (asset.type !== 'asset' || !asset.fileName.endsWith('.html')) continue

        const htmlPath = resolve(outputDirectory, asset.fileName)
        let html = await readFile(htmlPath, 'utf8')
        html = html.replace(/<script\b[^>]*\bsrc=["'][^"']+["'][^>]*>\s*<\/script>/gi, (tag) => {
          return addIntegrityToTag(tag, 'src', bundle)
        })
        html = html.replace(/<link\b[^>]*\brel=["']modulepreload["'][^>]*>/gi, (tag) => {
          return addIntegrityToTag(tag, 'href', bundle)
        })
        await writeFile(htmlPath, html)
      }
    }
  }
}

function seoHtmlPlugin () {
  return {
    name: 'outruna-seo-html',
    transformIndexHtml (html) {
      const siteUrl = resolveSiteUrl(process.env.VITE_SITE_URL)
      return html.replaceAll('__OUTRUNA_SITE_URL__', siteUrl)
    }
  }
}

export default defineConfig({
  plugins: [preact(), versionRoutePlugin(), coingeckoRoutePlugin(), seoHtmlPlugin(), sriForJavaScriptPlugin()],
  build: {
    chunkSizeWarningLimit: 2500,
    reportCompressedSize: false,
    rollupOptions: {
      onLog (level, log, handler) {
        if (log.message?.includes('contains an annotation')) return
        handler(level, log)
      },
      onwarn (warning, warn) {
        if (warning.code === 'INVALID_ANNOTATION') return
        if (warning.message?.includes('contains an annotation')) return
        warn(warning)
      }
    }
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  },
  server: {
    host: '127.0.0.1',
    port: 5175,
    proxy: {
      '/api': {
        target: 'https://outruna.top',
        changeOrigin: true,
        configure (proxy) {
          proxy.on('proxyRes', (proxyRes) => {
            const setCookie = proxyRes.headers['set-cookie']
            if (!setCookie) return
            proxyRes.headers['set-cookie'] = Array.isArray(setCookie)
              ? setCookie.map(rewriteDevSetCookie)
              : rewriteDevSetCookie(setCookie)
          })
        }
      }
    }
  }
})
