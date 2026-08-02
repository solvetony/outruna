import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateRapiraReceiveAmount, getRapiraP2pRate } from '../src/lib/rapiraP2p.js'

test('Rapira receive amount uses the net backend rate', () => {
  assert.equal(calculateRapiraReceiveAmount('50', 76.5712).toFixed(2), '3828.56')
})

test('Rapira rate uses a cached value for five minutes', async () => {
  const values = new Map()
  let requests = 0
  const storage = {
    getItem: key => values.get(key) || null,
    setItem: (key, value) => values.set(key, value)
  }
  const fetchImpl = async () => {
    requests += 1
    return { rate: '76.5712' }
  }

  await getRapiraP2pRate({ fetchImpl, storage, now: 1000 })
  await getRapiraP2pRate({ fetchImpl, storage, now: 1000 + 4 * 60 * 1000 })
  assert.equal(requests, 1)
})
