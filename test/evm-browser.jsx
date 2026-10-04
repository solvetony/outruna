import { render } from 'preact'
import { App } from '../src/App.jsx'
import { I18nProvider } from '../src/i18n/index.jsx'
import { initTheme } from '../src/lib/theme.js'
import '../src/styles.css'

let chainId = 1
const address = '0x1111111111111111111111111111111111111111'
const params = new URLSearchParams(location.search)
window.evmFixture = { prices: params.get('prices'), zero: params.has('zero'), feeError: false }
const provider = { request: async ({ method, params = [] }) => {
  if (/send|sign/i.test(method)) throw new Error('Visual fixtures cannot sign or broadcast')
  if (method === 'eth_chainId') return `0x${chainId.toString(16)}`
  if (method === 'eth_getBalance') {
    if (window.evmFixture.pause) await new Promise(resolve => { window.evmFixture.resume = resolve })
    return window.evmFixture.zero ? '0x0' : '0x1bc16d674ec80000'
  }
  if (method === 'eth_call') {
    const funded = !window.evmFixture.prices || params[0]?.to?.toLowerCase() === '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
    return '0x' + (window.evmFixture.zero || !funded ? 0n : 1000000n).toString(16).padStart(64, '0')
  }
  if (method === 'eth_estimateGas') { if (window.evmFixture.feeError) throw new Error('Fixture fee service unavailable'); return '0x5208' }
  if (method === 'eth_gasPrice' || method === 'eth_maxPriorityFeePerGas') return '0x3b9aca00'
  if (method === 'eth_getTransactionCount') return '0x0'
  if (method === 'eth_feeHistory') return { baseFeePerGas: ['0x3b9aca00', '0x3b9aca00'], reward: [['0x3b9aca00']] }
  if (method === 'eth_getBlockByNumber') return { baseFeePerGas: '0x3b9aca00' }
  return '0x0'
} }
const originalFetch = window.fetch
window.fetch = async (url, init) => {
  let payload
  try { payload = JSON.parse(init?.body || '{}') } catch {}
  if (payload?.method) return Response.json({ jsonrpc: '2.0', id: payload.id, result: await provider.request(payload) })
  const u = new URL(url, location.origin)
  if (String(url).includes('coingecko')) {
    const ids = (u.searchParams.get('ids') || '').split(',').filter(id => window.evmFixture.prices === 'known' || (window.evmFixture.prices === 'partial' && id === 'ethereum'))
    return Response.json(u.pathname.includes('simple') ? Object.fromEntries(ids.map(id => [id, { usd: id === 'ethereum' ? 3000 : 1 }])) : ids.map(id => ({ id, current_price: id === 'ethereum' ? 3000 : 1 })))
  }
  if (u.pathname.startsWith('/api/') || String(url).includes('api.rabby.io')) return Response.json({})
  return originalFetch(url, init)
}
const wallet = { type: 'ethereum', walletClientType: 'privy', address, chainId: 'eip155:1', getEthereumProvider: async () => provider, switchChain: async id => { chainId = Number(id); wallet.chainId = `eip155:${id}` } }
initTheme()
render(<I18nProvider><App user={{ id: 'evm-visual', mfaMethods: [] }} wallets={[wallet]} logout={() => {}} /></I18nProvider>, document.getElementById('app'))
