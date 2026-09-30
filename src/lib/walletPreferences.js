import { DEFAULT_NETWORK_ORDER, supportedChains } from './chains.js'
import tokenRegistry from '../../shared/outruna-builtin-tokens.json' with { type: 'json' }

export { DEFAULT_NETWORK_ORDER }

const tariAsset = tokenRegistry['tari:mainnet'][0]
const networks = new Map([
  ...supportedChains.map((chain) => [String(chain.id), { ...chain, key: String(chain.id), symbol: chain.nativeCurrency.symbol }]),
  ['tari:mainnet', { key: 'tari:mainnet', family: 'tari', network: 'mainnet', name: tariAsset.name, symbol: tariAsset.symbol }]
])

export function normalizeWalletPreferences (value) {
  const supported = (items) => [...new Set((Array.isArray(items) ? items : []).map(String).filter((key) => networks.has(key)))]
  const order = supported(value?.networkOrder)
  const enabled = supported(value?.enabledNetworks)
  return {
    version: 1,
    onboardingCompleted: value?.version === 1 && value.onboardingCompleted === true,
    networkOrder: [...order, ...DEFAULT_NETWORK_ORDER.filter((key) => !order.includes(key))],
    enabledNetworks: enabled.length ? enabled : [...DEFAULT_NETWORK_ORDER]
  }
}

export function getWalletNetworks (preferences, enabledOnly = true) {
  const value = normalizeWalletPreferences(preferences)
  return value.networkOrder.filter((key) => !enabledOnly || value.enabledNetworks.includes(key)).map((key) => networks.get(key))
}

export function toggleNetwork (preferences, key) {
  const value = normalizeWalletPreferences(preferences)
  if (!networks.has(key)) return value
  if (value.enabledNetworks.includes(key)) {
    if (value.enabledNetworks.length === 1) return value
    return { ...value, enabledNetworks: value.enabledNetworks.filter((item) => item !== key) }
  }
  return { ...value, enabledNetworks: [...value.enabledNetworks, key] }
}

export function reorderNetwork (preferences, key, target) {
  const value = normalizeWalletPreferences(preferences)
  const from = value.networkOrder.indexOf(key), to = value.networkOrder.indexOf(target)
  if (from < 0 || to < 0 || from === to) return value
  const networkOrder = [...value.networkOrder]
  networkOrder.splice(from, 1)
  networkOrder.splice(to, 0, key)
  return { ...value, networkOrder }
}

const storageKey = (userId) => `outruna:wallet-preferences:${userId}`

export function loadWalletPreferences (userId, storage) {
  try { return normalizeWalletPreferences(JSON.parse((storage || globalThis.localStorage).getItem(storageKey(userId)))) } catch { return normalizeWalletPreferences() }
}

export function saveWalletPreferences (userId, value, storage) {
  if (!userId || !Array.isArray(value?.enabledNetworks) || !value.enabledNetworks.some((key) => networks.has(String(key)))) throw new Error('setup.saveError')
  const preferences = normalizeWalletPreferences(value)
  try { (storage || globalThis.localStorage).setItem(storageKey(userId), JSON.stringify(preferences)) } catch { throw new Error('setup.saveError') }
  return preferences
}
