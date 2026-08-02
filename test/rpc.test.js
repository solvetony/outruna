import test from 'node:test'
import assert from 'node:assert/strict'
import { createReadRpcProvider, RPC_URLS, sendRawTransaction } from '../src/lib/rpc.js'

const CHAINS = [
  { chainId: 1, key: 'ethereum' },
  { chainId: 10, key: 'optimism' },
  { chainId: 137, key: 'polygon' },
  { chainId: 8453, key: 'base' },
  { chainId: 42161, key: 'arbitrum' },
  { chainId: 43114, key: 'avalanche' }
]

test('createReadRpcProvider falls back to public RPC for all supported chains on rate limit', async () => {
  const originalFetch = globalThis.fetch

  try {
    for (const chain of CHAINS) {
      const calls = []

      globalThis.fetch = async (url, init) => {
        calls.push({ url, body: JSON.parse(String(init.body || '{}')) })
        return {
          ok: true,
          async json () {
            return { result: '0x5208' }
          }
        }
      }

      const provider = createReadRpcProvider({
        async request () {
          const error = new Error('Too many requests')
          error.code = 429
          throw error
        }
      }, chain.chainId)

      const result = await provider.request({
        method: 'eth_estimateGas',
        params: [{ to: '0x0000000000000000000000000000000000000001', value: '0x0' }]
      })

      assert.equal(result, '0x5208')
      assert.equal(calls.length, 1)
      assert.equal(calls[0].url, RPC_URLS[chain.key][0])
      assert.equal(calls[0].body.method, 'eth_estimateGas')
    }
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('createReadRpcProvider rejects a primary provider on the wrong chain', async () => {
  const originalFetch = globalThis.fetch
  const calls = []

  try {
    globalThis.fetch = async (url, init) => {
      calls.push({ url, body: JSON.parse(String(init.body || '{}')) })
      return {
        ok: true,
        async json () {
          return { result: '0x42161' }
        }
      }
    }

    const provider = createReadRpcProvider({
      async request (args) {
        if (args.method === 'eth_chainId') return '0x89'
        throw new Error('wrong-chain provider should not serve reads')
      }
    }, 42161)

    const result = await provider.request({
      method: 'eth_getTransactionReceipt',
      params: ['0xabc']
    })

    assert.equal(result, '0x42161')
    assert.equal(calls[0].url, RPC_URLS.arbitrum[0])
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('createReadRpcProvider can prefer public RPC for a confirmed post-transaction read', async () => {
  const originalFetch = globalThis.fetch
  let primaryCalls = 0

  try {
    globalThis.fetch = async (url, init) => {
      const body = JSON.parse(String(init.body || '{}'))
      assert.equal(url, RPC_URLS.ethereum[0])
      assert.equal(body.method, 'eth_getBalance')
      return {
        ok: true,
        async json () {
          return { result: '0xfeed' }
        }
      }
    }

    const provider = createReadRpcProvider({
      async request () {
        primaryCalls += 1
        return '0xstale'
      }
    }, 1, { preferPublic: true })

    const result = await provider.request({
      method: 'eth_getBalance',
      params: ['0x0000000000000000000000000000000000000001', 'latest']
    })

    assert.equal(result, '0xfeed')
    assert.equal(primaryCalls, 0)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('sendRawTransaction broadcasts through the selected chain RPC', async () => {
  const originalFetch = globalThis.fetch

  try {
    globalThis.fetch = async (url, init) => {
      const body = JSON.parse(String(init.body || '{}'))
      assert.equal(url, RPC_URLS.arbitrum[0])
      assert.equal(body.method, 'eth_sendRawTransaction')
      assert.deepEqual(body.params, ['0xdeadbeef'])
      return {
        ok: true,
        async json () {
          return { result: '0xtransfer' }
        }
      }
    }

    assert.equal(await sendRawTransaction(42161, '0xdeadbeef'), '0xtransfer')
  } finally {
    globalThis.fetch = originalFetch
  }
})
