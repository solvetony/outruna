import { getCoinMarketCapLogoUrl } from './coinmarketcap.js'

const CHAIN_NAMES = {
  1: 'ethereum',
  10: 'optimism',
  137: 'polygon',
  8453: 'base',
  42161: 'arbitrum',
  43114: 'avalanche'
}

export const NATIVE_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000'
const ETH_LOGO_URL = getCoinMarketCapLogoUrl(1027)

const SWAP_TOKEN_MAP = {
  1: [
    { symbol: 'ETH', name: 'Ether', native: true, address: 'native', decimals: 18, cmcId: 1027 },
    { symbol: 'WXTM', name: 'Wrapped MinoTari', address: '0xfd36fa88bb3fea8d1264fc89d70723b6a2b56958', decimals: 18, cmcId: 4258 },
    { symbol: 'WETH', name: 'Wrapped Ether', address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', decimals: 18, cmcId: 2396, logoUrl: ETH_LOGO_URL },
    { symbol: 'USDC', name: 'USD Coin', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', decimals: 6, cmcId: 3408 },
    { symbol: 'USDT', name: 'Tether', address: '0xdac17f958d2ee523a2206206994597c13d831ec7', decimals: 6, cmcId: 825 },
    { symbol: 'EURC', name: 'Euro Coin', address: '0x1abaea1f7c830bd89acc67ec4af516284b1bc33c', decimals: 6, cmcId: 29690 }
  ],
  8453: [
    { symbol: 'ETH', name: 'Ether', native: true, address: 'native', decimals: 18, cmcId: 1027 },
    { symbol: 'WETH', name: 'Wrapped Ether', address: '0x4200000000000000000000000000000000000006', decimals: 18, cmcId: 2396, logoUrl: ETH_LOGO_URL },
    { symbol: 'USDC', name: 'USD Coin', address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913', decimals: 6, cmcId: 3408 },
    { symbol: 'EURC', name: 'Euro Coin', address: '0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42', decimals: 6, cmcId: 29690 }
  ],
  42161: [
    { symbol: 'ETH', name: 'Ether', native: true, address: 'native', decimals: 18, cmcId: 1027 },
    { symbol: 'WETH', name: 'Wrapped Ether', address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', decimals: 18, cmcId: 2396, logoUrl: ETH_LOGO_URL },
    { symbol: 'USDC', name: 'USD Coin', address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831', decimals: 6, cmcId: 3408 },
    { symbol: 'USDT', name: 'Tether', address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', decimals: 6, cmcId: 825 }
  ],
  137: [
    { symbol: 'POL', name: 'Polygon', native: true, address: 'native', decimals: 18, cmcId: 28321 },
    { symbol: 'WETH', name: 'Wrapped Ether', address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', decimals: 18, cmcId: 2396, logoUrl: ETH_LOGO_URL },
    { symbol: 'USDC', name: 'USD Coin', address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359', decimals: 6, cmcId: 3408 },
    { symbol: 'USDT', name: 'Tether', address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', decimals: 6, cmcId: 825 }
  ],
  10: [
    { symbol: 'ETH', name: 'Ether', native: true, address: 'native', decimals: 18, cmcId: 1027 },
    { symbol: 'WETH', name: 'Wrapped Ether', address: '0x4200000000000000000000000000000000000006', decimals: 18, cmcId: 2396, logoUrl: ETH_LOGO_URL },
    { symbol: 'USDC', name: 'USD Coin', address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85', decimals: 6, cmcId: 3408 },
    { symbol: 'USDT', name: 'Tether', address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58', decimals: 6, cmcId: 825 }
  ],
  43114: [
    { symbol: 'AVAX', name: 'Avalanche', native: true, address: 'native', decimals: 18, cmcId: 5805 },
    { symbol: 'USDC', name: 'USD Coin', address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', decimals: 6, cmcId: 3408 },
    { symbol: 'USDT', name: 'Tether', address: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7', decimals: 6, cmcId: 825 },
    { symbol: 'EURC', name: 'Euro Coin', address: '0xc891eb4cbdeff6e073e859e987815ed1505c2acd', decimals: 6, cmcId: 29690 }
  ]
}

function getChainKey (chainId) {
  return CHAIN_NAMES[Number(chainId)] || null
}

export function isSwapSupportedChain (chainId) {
  return Boolean(SWAP_TOKEN_MAP[Number(chainId)])
}

export function getSwapTokensForChain (chainId) {
  const key = Number(chainId)
  return SWAP_TOKEN_MAP[key] ? [...SWAP_TOKEN_MAP[key]] : []
}

export function getSwapTokenLogoUrl (token) {
  if (!token) return null
  return token.logoUrl || getCoinMarketCapLogoUrl(token.cmcId)
}

export function getSwapTokenBySymbol (chainId, symbol) {
  const key = String(symbol || '').trim().toUpperCase()
  if (!key) return null
  return getSwapTokensForChain(chainId).find((token) => token.symbol === key) || null
}

export function getSwapTokenAddress (token) {
  if (!token) return null
  if (token.native) return NATIVE_TOKEN_ADDRESS
  return String(token.address || '').trim().toLowerCase() || null
}

export function getSwapSupportedSymbols (chainId) {
  return getSwapTokensForChain(chainId).map((token) => token.symbol)
}

export function getSwapSupportedChainName (chainId) {
  return getChainKey(chainId)
}

export function parseAmountToBaseUnits (value, decimals = 18) {
  const text = String(value ?? '').trim().replace(/,/g, '')
  if (!text || !/^\d+(\.\d+)?$/.test(text)) return null

  const [wholePart, fractionPart = ''] = text.split('.')
  const safeDecimals = Math.max(0, Number(decimals) || 0)
  const whole = BigInt(wholePart || '0')
  const paddedFraction = `${fractionPart}${'0'.repeat(safeDecimals)}`.slice(0, safeDecimals)
  const fraction = paddedFraction ? BigInt(paddedFraction) : 0n
  const divisor = 10n ** BigInt(safeDecimals)

  return (whole * divisor) + fraction
}

export function formatTokenAmountInput (rawValue) {
  const text = String(rawValue ?? '').trim().replace(/,/g, '')
  if (!text) return ''
  return text
}
