import test from 'node:test'
import assert from 'node:assert/strict'
import { supportedChains } from '../src/lib/chains.js'
import { DEFAULT_NETWORK_ORDER, getWalletNetworks, loadWalletPreferences, normalizeWalletPreferences, reorderNetwork, saveWalletPreferences, toggleNetwork } from '../src/lib/walletPreferences.js'
import { setupMessages } from '../src/i18n/setup.js'

const memoryStorage = () => {
  const data = new Map()
  return { getItem: (key) => data.get(key) || null, setItem: (key, value) => data.set(key, value) }
}

test('default preferences include Tari third without numeric chain normalization', () => {
  const value = normalizeWalletPreferences()
  assert.deepEqual(value.networkOrder, ['1', '8453', 'tari:mainnet', '137', '10', '42161', '43114'])
  assert.deepEqual(value.enabledNetworks, DEFAULT_NETWORK_ORDER)
  assert.equal(value.onboardingCompleted, false)
  assert.deepEqual(getWalletNetworks().map((network) => network.name), ['Ethereum', 'Base', 'Tari', 'Polygon', 'Optimism', 'Arbitrum', 'Avalanche'])
  const tari = getWalletNetworks()[2]
  assert.equal(tari.key, 'tari:mainnet')
  assert.equal(tari.symbol, 'XTM')
  assert.equal(tari.family, 'tari')
  assert.equal(tari.id, undefined)
  assert.deepEqual(supportedChains.map((chain) => String(chain.id)), DEFAULT_NETWORK_ORDER.filter((key) => key !== 'tari:mainnet'))
})

test('every network can be hidden and restored, but the last cannot be disabled', () => {
  const original = normalizeWalletPreferences()
  for (const key of DEFAULT_NETWORK_ORDER) {
    const disabled = toggleNetwork(original, key)
    assert.equal(getWalletNetworks(disabled).some((network) => network.key === key), false)
    assert.equal(getWalletNetworks(toggleNetwork(disabled, key)).some((network) => network.key === key), true)
    assert.deepEqual(disabled.networkOrder, original.networkOrder)
  }
  const onlyTari = { ...original, enabledNetworks: ['tari:mainnet'] }
  assert.deepEqual(toggleNetwork(onlyTari, 'tari:mainnet'), onlyTari)
  assert.equal(getWalletNetworks(onlyTari)[0].family, 'tari')
})

test('custom order, enabled networks and onboarding persist and are isolated by account', () => {
  const storage = memoryStorage()
  storage.setItem('unrelated-wallet-secret-record', 'unchanged')
  let value = reorderNetwork(normalizeWalletPreferences(), 'tari:mainnet', '1')
  value = toggleNetwork(value, '137')
  value.onboardingCompleted = true
  saveWalletPreferences('A', value, storage)
  const restored = loadWalletPreferences('A', storage)
  assert.deepEqual(restored, value)
  assert.equal(restored.onboardingCompleted, true)
  assert.deepEqual(getWalletNetworks(restored).map((network) => network.key), ['tari:mainnet', '1', '8453', '10', '42161', '43114'])
  assert.deepEqual(loadWalletPreferences('B', storage), normalizeWalletPreferences())
  assert.equal(storage.getItem('unrelated-wallet-secret-record'), 'unchanged')
})

test('malformed, missing and older preferences preserve all networks with safe defaults', () => {
  const storage = memoryStorage()
  storage.setItem('outruna:wallet-preferences:A', '{bad-json')
  assert.deepEqual(loadWalletPreferences('A', storage), normalizeWalletPreferences())
  const invalid = normalizeWalletPreferences({ networkOrder: ['tari:mainnet', 'tari:mainnet', 'unsupported', 1], enabledNetworks: [] })
  assert.deepEqual(invalid.networkOrder, ['tari:mainnet', '1', '8453', '137', '10', '42161', '43114'])
  assert.deepEqual(invalid.enabledNetworks, DEFAULT_NETWORK_ORDER)
  assert.equal(normalizeWalletPreferences({ version: 0, onboardingCompleted: true }).onboardingCompleted, false)
  assert.throws(() => saveWalletPreferences('A', { enabledNetworks: [] }, storage), /setup.saveError/)
  assert.throws(() => saveWalletPreferences('A', normalizeWalletPreferences(), { setItem () { throw new Error('quota') } }), /setup.saveError/)
})

test('reordering handles both directions and leaves caller state unchanged', () => {
  const original = normalizeWalletPreferences()
  assert.deepEqual(reorderNetwork(original, '1', 'tari:mainnet').networkOrder.slice(0, 3), ['8453', 'tari:mainnet', '1'])
  assert.deepEqual(reorderNetwork(original, '43114', '1').networkOrder.slice(0, 3), ['43114', '1', '8453'])
  assert.deepEqual(original.networkOrder, DEFAULT_NETWORK_ORDER)
  assert.deepEqual(reorderNetwork(original, 'missing', '1'), original)
})

test('all supported languages define every onboarding message', () => {
  for (const locale of ['en', 'bn', 'de', 'es', 'hi', 'ru', 'zh']) {
    assert.deepEqual(Object.keys(setupMessages[locale]).sort(), Object.keys(setupMessages.en).sort())
    assert.ok(Object.values(setupMessages[locale]).every((message) => typeof message === 'string' && message.length > 0))
  }
})
