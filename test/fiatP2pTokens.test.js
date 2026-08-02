import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const BUILTIN_TOKENS = JSON.parse(readFileSync(new URL('../shared/outruna-builtin-tokens.json', import.meta.url), 'utf8'))
const P2P_TOKEN_ADDRESSES = JSON.parse(readFileSync(new URL('../shared/outruna-fiat-p2p-tokens.json', import.meta.url), 'utf8'))
const CHAIN_IDS = {
  ethereum: 1,
  base: 8453,
  polygon: 137,
  arbitrum: 42161
}

test('every P2P token is included in the wallet built-in asset registry', () => {
  for (const [network, addresses] of Object.entries(P2P_TOKEN_ADDRESSES)) {
    const walletAddresses = new Set(
      BUILTIN_TOKENS[String(CHAIN_IDS[network])].map(token => token.address.toLowerCase())
    )

    for (const address of addresses) {
      assert.equal(walletAddresses.has(address.toLowerCase()), true, `${network}:${address}`)
    }
  }
})
