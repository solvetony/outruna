export const apiBase = 'https://outruna.top'
export const apiVersion = 'v1'
export const apiRoot = `${import.meta.env?.DEV ? '' : apiBase}/api/${apiVersion}`

export const api = {
  tariFaucet: { status: `${apiRoot}/tari/faucet`, claim: `${apiRoot}/tari/faucet/claim` },
  tariBroadcast: '/rpc/tari/mainnet/json_rpc',
  version: `${apiBase}/napi/version`,
  telegram: {
    verify: `${apiRoot}/telegram/verify`
  },
  privy: {
    sign: `${apiRoot}/privy/sign`
  },
  language: `${apiRoot}/language`,
  swap: {
    quote: `${apiRoot}/swap/quote`,
    build: `${apiRoot}/swap/build`
  },
  fiatP2p: {
    config: `${apiRoot}/fiat-p2p/config`,
    rate: `${apiRoot}/fiat-p2p/rate`,
    orders: `${apiRoot}/fiat-p2p/orders`,
    prepare: (id) => `${apiRoot}/fiat-p2p/orders/${encodeURIComponent(id)}/prepare`,
    confirm: (id) => `${apiRoot}/fiat-p2p/orders/${encodeURIComponent(id)}/confirm`
  },
  uniswap: {
    checkApproval: `${apiRoot}/uniswap/check-approval`
  },
  rabbyGasAccount: {
    session: `${apiRoot}/thewallet/rabby-gas-account/session`
  },
  risk: {
    address: (address, chainId) => {
      const url = new URL(`${apiRoot}/thewallet/risk/address/${encodeURIComponent(address)}`, apiBase)
      if (chainId) url.searchParams.set('chain_id', String(chainId))
      return apiRoot.startsWith('/') ? `${url.pathname}${url.search}` : url.toString()
    }
  },
  coingecko: {
    markets: (ids) => `${apiRoot}/coingecko/markets?vs_currency=usd&ids=${encodeURIComponent(ids.join(','))}&price_change_percentage=24h`,
    simplePrice: (ids) => `${apiRoot}/coingecko/simple-price?ids=${encodeURIComponent(ids.join(','))}&vs_currencies=usd&include_24hr_change=true`
  }
}

export const externalUrls = {
  turnstile: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
  tariRpc: 'https://rpc.tari.com',
  appOrigin: apiBase,
  github: 'https://github.com/solvetony/outruna',
  rabbyApi: 'https://api.rabby.io',
  coinGeckoApi: 'https://api.coingecko.com/api/v3',
  coinGeckoCorsProxy: 'https://cors.outruna.top/corsproxy/?apiurl={url}',
  coinMarketCapLogo: (id) => `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`,
  trustWalletNetworkLogo: {
    1: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    8453: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png',
    137: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
    10: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
    43114: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png',
    42161: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png'
  },
  coinGeckoCorsProxies: [
    'https://cors.outruna.top/corsproxy/?apiurl={url}'
  ],
  coinGeckoSearch: (query) => `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(query)}`,
  coinGeckoContract: (platform, address) => `https://api.coingecko.com/api/v3/coins/${platform}/contract/${address}`,
  coinGeckoMarkets: (ids) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${encodeURIComponent(ids.join(','))}&price_change_percentage=24h`,
  coinGeckoSimplePrice: (ids) => `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(ids.join(','))}&vs_currencies=usd&include_24hr_change=true`,
  rpc: {
    ethereum: ['https://ethereum-rpc.publicnode.com', 'https://rpc.ankr.com/eth'],
    base: ['https://mainnet.base.org', 'https://developer-access-mainnet.base.org', 'https://base-rpc.publicnode.com', 'https://base.gateway.tenderly.co'],
    polygon: ['https://polygon-rpc.com', 'https://polygon-bor-rpc.publicnode.com', 'https://polygon.gateway.tenderly.co', 'https://polygon.drpc.org'],
    optimism: ['https://mainnet.optimism.io', 'https://optimism-rpc.publicnode.com', 'https://optimism.gateway.tenderly.co', 'https://rpc.ankr.com/optimism'],
    avalanche: ['https://api.avax.network/ext/bc/C/rpc', 'https://avalanche-c-chain-rpc.publicnode.com', 'https://avalanche.drpc.org', 'https://rpc.ankr.com/avalanche'],
    arbitrum: ['https://arb1.arbitrum.io/rpc', 'https://arbitrum-one-rpc.publicnode.com', 'https://arbitrum.gateway.tenderly.co', 'https://rpc.ankr.com/arbitrum']
  },
  explorer: {
    ethereum: 'https://etherscan.io',
    base: 'https://basescan.org',
    polygon: 'https://polygonscan.com',
    optimism: 'https://optimistic.etherscan.io',
    avalanche: 'https://snowtrace.io',
    arbitrum: 'https://arbiscan.io'
  }
}

export function buildProxyUrl (template, targetUrl) {
  return template
    .replace('{url}', encodeURIComponent(targetUrl))
    .replace('{fullUrl}', targetUrl)
}
