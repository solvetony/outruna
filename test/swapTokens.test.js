import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  getSwapTokenAddress,
  getSwapTokenLogoUrl,
  getSwapTokensForChain,
  NATIVE_TOKEN_ADDRESS
} from '../src/lib/swap.js'
import { getTokenLogoCandidates } from '../src/lib/coinmarketcap.js'

const WETH_CHAINS = [1, 10, 137, 8453, 42161]
const ETH_LOGO_URL = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
const BUILTIN_TOKENS = JSON.parse(readFileSync(new URL('../shared/outruna-builtin-tokens.json', import.meta.url), 'utf8'))

function tokenKey (chainId, token) {
  return `${chainId}:${String(token?.address || '').toLowerCase()}`
}

test('WXTM is an Ethereum ERC-20 with consistent wallet and swap metadata', () => {
  const builtin = BUILTIN_TOKENS['1'].find((token) => token.symbol === 'WXTM')
  const swap = getSwapTokensForChain(1).find((token) => token.symbol === 'WXTM')
  const address = '0xfd36fa88bb3fea8d1264fc89d70723b6a2b56958'

  assert.equal(builtin.address.toLowerCase(), address)
  assert.equal(getSwapTokenAddress(swap), address)
  assert.equal(builtin.decimals, 18)
  assert.equal(swap.decimals, 18)
  assert.equal(Boolean(builtin.native), false)
  assert.equal(Boolean(swap.native), false)
  assert.equal(getSwapTokenLogoUrl(swap), builtin.logoUrl)
  assert.equal(BUILTIN_TOKENS['tari:mainnet'][0].decimals, 6)
  for (const chainId of [10, 137, 8453, 42161, 43114]) {
    assert.equal(getSwapTokensForChain(chainId).some((token) => token.symbol === 'WXTM'), false)
    assert.equal(BUILTIN_TOKENS[String(chainId)].some((token) => token.symbol === 'WXTM'), false)
  }
})

test('WETH is a distinct whitelisted swap token on supported canonical networks', () => {
  for (const chainId of WETH_CHAINS) {
    const tokens = getSwapTokensForChain(chainId)
    const native = tokens.find((token) => token.native)
    const weth = tokens.find((token) => token.symbol === 'WETH')

    assert.ok(native)
    assert.ok(weth)
    assert.notEqual(tokenKey(chainId, native), tokenKey(chainId, weth))
    assert.equal(getSwapTokenAddress(native), NATIVE_TOKEN_ADDRESS)
    assert.match(getSwapTokenAddress(weth), /^0x[a-f0-9]{40}$/)
  }
})

test('WETH uses the same logo as native ETH without remote logo discovery', () => {
  for (const chainId of WETH_CHAINS) {
    const swapWeth = getSwapTokensForChain(chainId).find((token) => token.symbol === 'WETH')
    const builtinWeth = BUILTIN_TOKENS[String(chainId)].find((token) => token.symbol === 'WETH')

    assert.equal(getSwapTokenLogoUrl(swapWeth), ETH_LOGO_URL)
    assert.equal(builtinWeth.logoUrl, ETH_LOGO_URL)
  }
})

test('every whitelisted token has a preset logo URL', () => {
  for (const tokens of Object.values(BUILTIN_TOKENS)) {
    for (const token of tokens) {
      assert.match(token.logoUrl, /^https:\/\/s2\.coinmarketcap\.com\/static\/img\/coins\/64x64\/\d+\.png$/)
    }
  }
})

test('CoinGecko token images use the controlled proxy before the direct URL', () => {
  const sourceUrl = 'https://coin-images.coingecko.com/coins/images/29850/small/pepe-token.jpeg?1696528776'
  const candidates = getTokenLogoCandidates(sourceUrl)

  assert.match(candidates[0], /^https:\/\/cors\.outruna\.top\/corsproxy\/\?apiurl=/)
  assert.equal(candidates.at(-1), sourceUrl)
  assert.equal(candidates.some((url) => url.includes('proxy.killcors.com')), false)
})

test('whitelisted CoinMarketCap images remain direct-first', () => {
  const candidates = getTokenLogoCandidates(ETH_LOGO_URL)

  assert.equal(candidates[0], ETH_LOGO_URL)
  assert.match(candidates[1], /^https:\/\/cors\.outruna\.top\/corsproxy\/\?apiurl=/)
})
