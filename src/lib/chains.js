import { externalUrls } from './urls.js'

export const WALLET_FAMILIES = Object.freeze({ EVM: 'evm', TARI: 'tari' })
export const DEFAULT_NETWORK_ORDER = Object.freeze(['1', '8453', 'tari:mainnet', '137', '10', '42161', '43114'])

export const supportedChains = [
  {
    id: 1,
    name: 'Ethereum',
    network: 'homestead',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: {
      default: {
        http: [externalUrls.rpc.ethereum[0]]
      }
    },
    blockExplorers: {
      default: {
        name: 'Etherscan',
        url: externalUrls.explorer.ethereum
      }
    }
  },
  {
    id: 8453,
    name: 'Base',
    network: 'base',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: {
      default: {
        http: [externalUrls.rpc.base[0]]
      }
    },
    blockExplorers: {
      default: {
        name: 'Basescan',
        url: externalUrls.explorer.base
      }
    }
  },
  {
    id: 137,
    name: 'Polygon',
    network: 'polygon',
    nativeCurrency: {
      name: 'POL',
      symbol: 'POL',
      decimals: 18
    },
    rpcUrls: {
      default: {
        http: [externalUrls.rpc.polygon[0]]
      }
    },
    blockExplorers: {
      default: {
        name: 'Polygonscan',
        url: externalUrls.explorer.polygon
      }
    }
  },
  {
    id: 10,
    name: 'Optimism',
    network: 'optimism',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: {
      default: {
        http: [externalUrls.rpc.optimism[0]]
      }
    },
    blockExplorers: {
      default: {
        name: 'Optimism Etherscan',
        url: externalUrls.explorer.optimism
      }
    }
  },
  {
    id: 43114,
    name: 'Avalanche',
    network: 'avalanche',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: {
      default: {
        http: [externalUrls.rpc.avalanche[0]]
      }
    },
    blockExplorers: {
      default: {
        name: 'Snowtrace',
        url: externalUrls.explorer.avalanche
      }
    }
  },
  {
    id: 42161,
    name: 'Arbitrum',
    network: 'arbitrum-one',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: {
      default: {
        http: [externalUrls.rpc.arbitrum[0]]
      }
    },
    blockExplorers: {
      default: {
        name: 'Arbiscan',
        url: externalUrls.explorer.arbitrum
      }
    }
  }
].map((chain) => ({ ...chain, family: WALLET_FAMILIES.EVM }))
  .sort((a, b) => DEFAULT_NETWORK_ORDER.indexOf(String(a.id)) - DEFAULT_NETWORK_ORDER.indexOf(String(b.id)))

export const defaultChain = supportedChains[0]

export const chainMap = new Map(supportedChains.map((chain) => [chain.id, chain]))

export function normalizeChainId (value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  const text = String(value || '').trim()
  const split = text.includes(':') ? text.split(':').pop() : text
  const number = /^0x[0-9a-f]+$/i.test(split)
    ? Number.parseInt(split, 16)
    : Number(split)
  return Number.isFinite(number) ? number : defaultChain.id
}

export function getChainLabel (chain) {
  if (!chain) return 'Unknown chain'
  return chain.name || chain.network || `Chain ${chain.id}`
}

export function getNetworkLogoUrl (chainId) {
  return externalUrls.trustWalletNetworkLogo[normalizeChainId(chainId)] || null
}

export function getChainSymbol (chain) {
  if (!chain?.nativeCurrency?.symbol) return 'ETH'
  return chain.nativeCurrency.symbol
}

export function getChainExplorerUrl (chain, address) {
  const explorer = chain?.blockExplorers?.default?.url
  if (!explorer || !address) return null
  return `${explorer}/address/${address}`
}
