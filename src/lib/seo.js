const productionSiteUrl = 'https://outruna.top'

function normalizeSiteUrl (value) {
  try {
    const url = new URL(value)
    if (!['http:', 'https:'].includes(url.protocol)) return productionSiteUrl
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname === '::1') return productionSiteUrl
    return url.toString().replace(/\/$/, '')
  } catch {
    return productionSiteUrl
  }
}

export function resolveSiteUrl (value) {
  return normalizeSiteUrl(value || import.meta.env?.VITE_SITE_URL || productionSiteUrl)
}

export const siteConfig = {
  siteName: 'Outruna',
  siteUrl: resolveSiteUrl(),
  title: 'Outruna - Secure crypto, made effortless with Telegram or email',
  description: 'Open-source multi-chain EVM wallet for Telegram or email with swaps, transaction 2FA, Rabby risk checks, curated tokens, and six supported networks.',
  authorName: 'Outruna',
  defaultImage: 'https://outruna.top/images/outruna-logo.png',
  githubUrl: 'https://github.com/solvetony/outruna'
}
