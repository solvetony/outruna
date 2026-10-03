import {
  ArrowLeftRight,
  ArrowUpFromLine,
  ArrowUpDown,
  BadgeRussianRuble,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Droplets,
  ExternalLink,
  Eye,
  EyeOff,
  Fuel,
  Github,
  Gem,
  History,
  Info,
  Languages,
  LayoutGrid,
  Plus,
  PiggyBank,
  LogOut,
  RefreshCcw,
  ShieldCheck,
  Wallet,
  X
} from 'lucide-preact'
import { useMfaEnrollment, usePrivy } from '@privy-io/react-auth'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { useEventListener } from './shared/hooks.js'
import qrcode from 'qrcode-generator'
import { BuildVersionGuard } from './components/BuildVersionGuard.jsx'
import { AddressRiskBadge } from './components/AddressRiskBadge.jsx'
import { CoinIcon } from './components/CoinIcon.jsx'
import { TariIcon, TariSettingsRow, TariWalletUI } from './components/TariWallet.jsx'
import { TariFaucet } from './components/TariFaucet.jsx'
import { NetworkSettings } from './components/NetworkPreferences.jsx'
import { ThemeSettings } from './components/ThemeSettings.jsx'
import { getWalletNetworks, normalizeWalletPreferences } from './lib/walletPreferences.js'
import { useTariWallet } from './tari/useTariWallet.js'
import { FiatP2P } from './components/FiatP2P.jsx'
import { TransactionRiskModal } from './components/TransactionRiskModal.jsx'
import { fetchJson, updateLanguage } from './lib/api.js'
import { api, externalUrls } from './lib/urls.js'
import {
  classifyFiatP2pInvoiceBalance,
  verifyFiatP2pInvoice
} from './lib/fiatP2pInvoice.js'
import {
  chainMap,
  defaultChain,
  getChainExplorerUrl,
  getChainLabel,
  getChainSymbol,
  getNetworkLogoUrl,
  normalizeChainId,
  supportedChains
} from './lib/chains.js'
import {
  encodeBalanceOf,
  formatAddress,
  formatNumber,
  formatPercent,
  formatUsd,
  formatUnits,
  parseBigIntValue
} from './lib/format.js'
import { Decimal, compareDecimalValues, toDecimal } from './lib/decimal.js'
import { fetchCoinGeckoPrices } from './lib/coingecko.js'
import {
  formatTokenAmountInput,
  getSwapTokensForChain,
  getSwapTokenAddress,
  getSwapTokenLogoUrl,
  isSwapSupportedChain,
  parseAmountToBaseUnits
} from './lib/swap.js'
import {
  getChainTokenRegistry,
  getDefaultTokenRegistry,
  getCustomTokensForChain,
  getDiscoveredTokensForChain,
  getDiscoveryStateForChain,
  getBuiltinTokensForChain,
  getTokenKey,
  loadTokenRegistry,
  normalizeTokenAddress,
  removeCustomToken,
  saveTokenRegistry,
  setDiscoveryStateForChain,
  upsertCustomToken,
  upsertDiscoveredTokens
} from './lib/tokenRegistry.js'
import { resolveCoinGeckoAsset, resolveCoinMarketCapAsset, resolveTokenLogoUrl } from './lib/coinmarketcap.js'
import { resolveTokenMetadata } from './lib/tokenMetadata.js'
import { discoverWalletTokens } from './lib/tokenDiscovery.js'
import { createReadRpcProvider, sendRawTransaction } from './lib/rpc.js'
import {
  canPayWithNativeBalance,
  estimateWalletGasLevels,
  getRequiredNativeBalance,
  WALLET_GAS_LEVELS
} from './lib/walletGas.js'
import { checkDestinationAddressRisk } from './lib/rabby/addressRisk.js'
import { checkWithdrawalTransactionRisk } from './lib/rabby/transactionRisk.js'
import {
  initTelegramWebApp
} from './lib/telegram.js'
import { LocalizedMessage, T, useI18n } from './i18n/index.jsx'
import {
  RABBY_CHAIN_SERVER_IDS,
  RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_FALLBACK,
  RABBY_GAS_ACCOUNT_DEPOSIT_ADDRESSES,
  checkRabbyGasAccountTxs,
  clearRabbyGasAccountSession,
  clearRabbyGasAccountSessionFromBackend,
  fetchRabbyGasAccountDepositSupport,
  fetchRabbyGasAccountHistory,
  fetchRabbyGasAccountInfo,
  fetchRabbyGasAccountSignText,
  fetchRabbyGasAccountWithdrawList,
  fetchSavedRabbyGasAccountSession,
  getSignedRawTransaction,
  getSignedTransactionHash,
  loadRabbyGasAccountSession,
  loginRabbyGasAccount,
  rechargeRabbyGasAccount,
  saveRabbyGasAccountSession,
  saveRabbyGasAccountSessionToBackend,
  submitRabbyGasAccountSignedTransaction,
  waitForRabbyGasFunding,
  withdrawRabbyGasAccount
} from './lib/rabbyGasAccount.js'

const SMALL_BALANCE_USD_THRESHOLD = new Decimal('0.10')
const RABBY_GAS_SNAPSHOT_TTL_MS = 60_000
const RABBY_CHAIN_LABELS = {
  eth: 'Ethereum',
  op: 'Optimism',
  matic: 'Polygon',
  base: 'Base',
  arb: 'Arbitrum One',
  avax: 'Avalanche C-Chain'
}

function rabbyGasSnapshotKey (accountId) {
  return `thewallet:rabby-gas-account-snapshot:${String(accountId || '').trim().toLowerCase()}`
}

function getRabbyChainLabel (chainId) {
  const id = String(chainId || '').trim()
  if (RABBY_CHAIN_LABELS[id]) return RABBY_CHAIN_LABELS[id]
  const chain = supportedChains.find((item) => RABBY_CHAIN_SERVER_IDS[item.id] === id)
  if (!chain) return id || 'Unknown network'
  return getChainLabel(chain)
}

function isRabbyRateLimitError (error) {
  const message = String(error?.message || error || '').toLowerCase()
  return error?.status === 429 ||
    error?.code === 'RABBY_API_RATE_LIMITED' ||
    error?.code === 'RABBY_GAS_ACCOUNT_RATE_LIMITED' ||
    message.includes('too many request') ||
    message.includes('rate limit') ||
    message.includes('temporarily busy')
}

function formatGasAccountMessage (value, fallback = '') {
  const message = String(value || fallback || '')
  return message
    .replace(/Rabby\s+GasAccount/gi, 'Gas Account')
    .replace(/Rabby\s+Gas\s+Account/gi, 'Gas Account')
    .replace(/GasAccount/gi, 'Gas Account')
    .replace(/Rabby\s+API/gi, 'Gas Account service')
    .replace(/Rabby/gi, 'Gas Account service')
}

const STABLECOIN_LOOKALIKE_PATTERNS = [
  'USDC',
  'USDT',
  'USDE',
  'USDP',
  'BUSD',
  'DAI',
  'TUSD',
  'FDUSD',
  'PYUSD',
  'FRAX',
  'EURC',
  'EUROC',
  'EURS',
  'TETHER',
  'USDCOIN'
]

function normalizeTokenRiskText (value) {
  return String(value || '')
    .normalize('NFKC')
    .toUpperCase()
    .replace(/[Ѕ]/g, 'S')
    .replace(/[С]/g, 'C')
    .replace(/[^A-Z0-9]/g, '')
}

function isStablecoinLookalike (symbol, name) {
  const values = [normalizeTokenRiskText(symbol), normalizeTokenRiskText(name)]
  return values.some((value) => STABLECOIN_LOOKALIKE_PATTERNS.some((pattern) => {
    return value === pattern || value.startsWith(pattern) || value.endsWith(pattern)
  }))
}

function isBuiltinContract (chainId, address) {
  const key = getTokenKey(chainId, address)
  return getBuiltinTokensForChain(chainId).some((token) => getTokenKey(token.chainId, token.address) === key)
}

async function classifyCustomToken ({ chainId, address, symbol, name }) {
  let cmcAsset = null
  try {
    cmcAsset = await resolveCoinMarketCapAsset({ symbol, name, chainId, address })
    if (!cmcAsset) {
      cmcAsset = await resolveCoinMarketCapAsset({ symbol, name, chainId, address, useProxies: true })
    }
  } catch {
    cmcAsset = null
  }

  let geckoAsset = null
  try {
    geckoAsset = await resolveCoinGeckoAsset({ symbol, name, chainId, address })
  } catch {
    geckoAsset = null
  }

  const knownByCmc = Boolean(cmcAsset)
  const knownByGecko = Boolean(geckoAsset)
  const stableLookalike = isStablecoinLookalike(symbol, name)
  const knownBuiltin = isBuiltinContract(chainId, address)
  const reasons = []

  if (!knownByCmc && !knownByGecko) reasons.push('This token is not recognized by CoinMarketCap or CoinGecko.')
  if (stableLookalike && !knownBuiltin) reasons.push('Its name or symbol resembles a well-known stablecoin, but the contract is not on the built-in token list.')

  return {
    suspicious: reasons.length > 0,
    reasons,
    knownByCmc,
    knownByGecko,
    stableLookalike
  }
}

function loadRabbyGasSnapshot (accountId) {
  try {
    const raw = window.localStorage.getItem(rabbyGasSnapshotKey(accountId))
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed.cachedAt !== 'number') return null
    return parsed
  } catch (_) {
    return null
  }
}

function saveRabbyGasSnapshot (accountId, snapshot) {
  try {
    window.localStorage.setItem(rabbyGasSnapshotKey(accountId), JSON.stringify({
      ...snapshot,
      cachedAt: Date.now()
    }))
  } catch (_) {

  }
}

function makeExplorerAddressUrl (chain, address) {
  return getChainExplorerUrl(chain, address)
}

function makeExplorerTxUrl (chain, txHash) {
  const explorer = chain?.blockExplorers?.default?.url
  if (!explorer || !txHash) return null
  return `${explorer}/tx/${txHash}`
}

function resolveWalletChain (wallet) {
  const chainId = normalizeChainId(wallet?.chainId)
  return chainMap.get(chainId) || defaultChain
}

function tokenDisplayAmount (token) {
  return formatUnits(parseBigIntValue(token?.rawBalance), token?.decimals || 18, 6)
}

function chainLabel (chain) {
  if (!chain) return 'Network'
  return `${chain.name}`
}

function shortenValue (value, left = 6, right = 4) {
  const text = String(value || '').trim()
  if (!text) return 'n/a'
  if (text.startsWith('0x')) return formatAddress(text, left, right)
  if (text.length <= left + right + 3) return text
  return `${text.slice(0, left)}...${text.slice(-right)}`
}

function resolveAssetChain (asset) {
  return chainMap.get(normalizeChainId(asset?.chain_id)) || null
}

function getAssetChainLabel (asset) {
  const chain = resolveAssetChain(asset)
  if (chain) return getChainLabel(chain)
  if (asset?.chain_id) return `Chain ${asset.chain_id}`
  return 'Unknown chain'
}

function getAssetTitle (asset) {
  if (!asset) return 'Select asset'
  return asset.symbol || asset.asset_code || 'Asset'
}

function getAssetSubtitle (asset) {
  if (!asset) return 'Search supported tokens'
  const parts = [asset.name || asset.asset_code || '']
  const chainLabel = getAssetChainLabel(asset)
  if (chainLabel) parts.push(chainLabel)
  return parts.filter(Boolean).join(' · ')
}

function AssetPicker ({
  label,
  value,
  options,
  onSelect,
  placeholder = 'Select asset',
  helper = '',
  mobileSheet = false,
  searchable = true,
  getOptionValue = (asset) => asset.asset_code,
  getOptionTitle = getAssetTitle,
  getOptionSubtitle = getAssetSubtitle,
  getOptionSymbol = (asset) => asset.symbol || '?',
  getOptionLogoUrl = () => null,
  getOptionChainId = (asset) => asset.chainId,
  getOptionAddress = (asset) => asset.address,
  getOptionName = (asset) => asset.name,
  getEmptyTitle = () => 'No supported token found.',
  getEmptySubtitle = () => 'No compatible wallet asset is available.'
}) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const translatedPlaceholder = placeholder === 'Select asset' ? t('common.selectToken') : placeholder
  const selectedAsset = useMemo(
    () => options.find((asset) => getOptionValue(asset) === value) || null,
    [getOptionValue, options, value]
  )

  const filteredOptions = useMemo(() => {
    if (!searchable) return options
    const normalizedQuery = String(query || '').trim().toLowerCase()
    if (!normalizedQuery) return options
    return options.filter((asset) => {
      const haystack = [
        asset.asset_code,
        asset.symbol,
        asset.name,
        getOptionTitle(asset),
        getOptionSubtitle(asset)
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [getOptionSubtitle, getOptionTitle, options, query, searchable])

  const selectAsset = useCallback((assetCode) => {
    onSelect(assetCode)
    setOpen(false)
    setQuery('')
  }, [onSelect])

  return (
    <div className='wallet-asset-picker'>
      <span className='wallet-field-label'>{label}</span>
      <button
        className={open ? 'wallet-asset-picker-button active' : 'wallet-asset-picker-button'}
        type='button'
        onClick={() => setOpen((current) => !current)}
      >
        <span className='wallet-asset-picker-meta'>
          <CoinIcon
            symbol={selectedAsset ? getOptionSymbol(selectedAsset) : '?'}
            label={selectedAsset ? getOptionTitle(selectedAsset) : translatedPlaceholder}
            logoUrl={selectedAsset ? getOptionLogoUrl(selectedAsset) : null}
            chainId={selectedAsset ? getOptionChainId(selectedAsset) : null}
            address={selectedAsset ? getOptionAddress(selectedAsset) : null}
            name={selectedAsset ? getOptionName(selectedAsset) : null}
            className='coin-icon coin-icon-sm'
          />
          <span>
            <strong>{selectedAsset ? getOptionTitle(selectedAsset) : translatedPlaceholder}</strong>
            <em>{selectedAsset ? getOptionSubtitle(selectedAsset) : helper}</em>
          </span>
        </span>
        <ChevronDown size={14} />
      </button>
      {open
        ? (
          <div className={mobileSheet ? 'wallet-asset-picker-sheet' : 'wallet-asset-picker-dropdown'}>
            {mobileSheet
              ? <button className='wallet-sheet-backdrop' type='button' onClick={() => setOpen(false)} aria-label='Close asset picker' />
              : null}
            <div className={mobileSheet ? 'wallet-asset-picker-sheet-card' : 'wallet-asset-picker-dropdown-card'}>
              {mobileSheet
                ? (
                  <div className='wallet-sheet-head'>
                    <strong>{label}</strong>
                    <button className='mini-link-button' type='button' onClick={() => setOpen(false)}><T id='common.close'>Close</T></button>
                  </div>
                  )
                : null}
              {searchable
                ? (
                  <input
                    className='wallet-asset-picker-search'
                    type='text'
                    inputMode='search'
                    value={query}
                    onInput={(event) => setQuery(event.currentTarget.value)}
                    placeholder={t('common.searchTokenOrChain')}
                  />
                  )
                : null}
              <div className='wallet-asset-picker-list'>
                {filteredOptions.length
                  ? filteredOptions.map((asset) => (
                    <button
                      key={getOptionValue(asset)}
                      className={getOptionValue(asset) === value ? 'wallet-asset-option active' : 'wallet-asset-option'}
                      type='button'
                      onClick={() => selectAsset(getOptionValue(asset))}
                    >
                      <span className='wallet-asset-picker-meta'>
                        <CoinIcon
                          symbol={getOptionSymbol(asset)}
                          label={getOptionTitle(asset)}
                          logoUrl={getOptionLogoUrl(asset)}
                          chainId={getOptionChainId(asset)}
                          address={getOptionAddress(asset)}
                          name={getOptionName(asset)}
                          className='coin-icon coin-icon-sm'
                        />
                        <span>
                          <strong>{getOptionTitle(asset)}</strong>
                          <em>{getOptionSubtitle(asset)}</em>
                        </span>
                      </span>
                    </button>
                  ))
                  : (
                    <div className='empty-state empty-state-tight'>
                      <p>{getEmptyTitle()}</p>
                      <span>{getEmptySubtitle()}</span>
                    </div>
                    )}
              </div>
            </div>
          </div>
          )
        : null}
    </div>
  )
}

function getSwapTokenKey (token, chainId) {
  const normalizedChainId = normalizeChainId(token?.chainId || chainId)
  if (token?.native) return `${normalizedChainId}:native`
  return `${normalizedChainId}:${normalizeTokenAddress(token?.address)}`
}

function SwapTokenField ({ label, token, balance, networkLabel, open, onOpen, disabled, buttonRef }) {
  const { t } = useI18n()
  const balanceText = token?.native
    ? t('swap.balance', { amount: balance || '0', symbol: token.symbol })
    : balance
      ? t('swap.balance', { amount: balance, symbol: token.symbol })
      : networkLabel
  const subtitle = [token?.name || token?.symbol || t('swap.chooseToken'), balanceText].filter(Boolean).join(' · ')

  return (
    <button
      ref={buttonRef}
      className='swap-token-picker'
      type='button'
      aria-expanded={open}
      onClick={onOpen}
      disabled={disabled}
    >
      <span className='swap-token-field-copy'>
        <span className='swap-token-field-label'><T id={label === 'You pay' ? 'swap.youPay' : 'swap.youReceive'}>{label}</T></span>
        <span className='swap-token-meta'>
          <CoinIcon
            symbol={token?.symbol}
            label={token?.name || token?.symbol}
            logoUrl={token?.logoUrl}
            chainId={token?.chainId}
            address={token?.address}
            name={token?.name}
            className='coin-icon-sm'
          />
          <span className='swap-token-text'>
            <strong>{token?.symbol || <T id='swap.chooseToken'>Select token</T>}</strong>
            <em>{subtitle}</em>
          </span>
        </span>
      </span>
      <ChevronDown size={16} />
    </button>
  )
}

function SwapTokenPickerSheet ({ title, tokens, selectedToken, excludedToken, chainId, networkLabel, onSelect, onClose }) {
  const { t } = useI18n()
  const [query, setQuery] = useState('')

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [])
  useEventListener(() => window, 'keydown', (event) => {
    if (event.key === 'Escape') onClose()
  })

  const filteredTokens = useMemo(() => {
    const normalizedQuery = String(query || '').trim().toLowerCase()
    if (!normalizedQuery) return tokens
    return tokens.filter((token) => [token.symbol, token.name, networkLabel].filter(Boolean).join(' ').toLowerCase().includes(normalizedQuery))
  }, [networkLabel, query, tokens])

  return (
    <div className='swap-token-sheet' role='dialog' aria-modal='true' aria-label={`${title} token picker`}>
      <button className='swap-token-sheet-backdrop' type='button' onClick={onClose} aria-label='Close token picker' />
      <div className='swap-token-sheet-card'>
        <div className='swap-token-sheet-head'>
          <strong>{title}</strong>
          <button className='swap-token-sheet-close' type='button' onClick={onClose}><T id='common.close'>Close</T></button>
        </div>
        <input
          className='swap-token-search'
          type='search'
          inputMode='search'
          value={query}
          onInput={(event) => setQuery(event.currentTarget.value)}
          placeholder={t('swap.searchToken')}
          autoFocus
        />
        <div className='swap-token-options'>
          {filteredTokens.length
            ? filteredTokens.map((token) => {
              const selected = getSwapTokenKey(token, chainId) === getSwapTokenKey(selectedToken, chainId)
              const excluded = getSwapTokenKey(token, chainId) === getSwapTokenKey(excludedToken, chainId)
              const balance = tokenDisplayAmount(token)
              return (
                <button
                  key={getSwapTokenKey(token, chainId)}
                  className={selected ? 'swap-token-option active' : 'swap-token-option'}
                  type='button'
                  disabled={excluded}
                  onClick={() => onSelect(token)}
                >
                  <span className='swap-token-meta'>
                    <CoinIcon
                      symbol={token.symbol}
                      label={token.name || token.symbol}
                      logoUrl={token.logoUrl}
                      chainId={token.chainId}
                      address={token.address}
                      name={token.name}
                      className='coin-icon-sm'
                    />
                    <span className='swap-token-text'>
                      <strong>{token.symbol || 'TOKEN'}</strong>
                      <em>{[token.name || t('swap.unknownToken'), networkLabel, balance ? t('swap.balanceAmount', { amount: balance }) : ''].filter(Boolean).join(' · ')}</em>
                    </span>
                  </span>
                  {selected ? <span aria-label='Selected'>✓</span> : null}
                </button>
              )
            })
            : <div className='swap-token-options-empty'><p><T id='swap.noTokensFound'>No tokens found</T></p><span><T id='swap.tryAnother'>Try another symbol or name.</T></span></div>}
        </div>
      </div>
    </div>
  )
}

function displayTokenSymbol (value) {
  const normalized = String(value || '')
    .normalize('NFKC')
    .split('')
    .filter((character) => {
      const code = character.charCodeAt(0)
      return code >= 32 && code !== 127
    })
    .join('')
    .trim()
    .toUpperCase()
  const safe = normalized.replace(/[^A-Z0-9._-]/g, '').slice(0, 20)
  if (safe === 'USDC.E') return 'USDC.e'
  return safe || 'TOKEN'
}

function chainLogoSymbol (chain) {
  const chainId = normalizeChainId(chain?.id)
  return getChainSymbol(chainId === 137 ? { nativeCurrency: { symbol: 'POL' } } : chain)
}

const NETWORK_ICON_SYMBOLS = {
  1: 'ETH',
  8453: 'BASE',
  137: 'POLYGON',
  10: 'OP',
  43114: 'AVAX',
  42161: 'ARB'
}

function chainIconSymbol (chain) {
  return NETWORK_ICON_SYMBOLS[normalizeChainId(chain?.id)] || chainLogoSymbol(chain)
}

function chainLogoUrl (chain) {
  return getNetworkLogoUrl(chain?.id)
}

function makeAssetPriceInfo (price, unavailableText = 'Price unavailable') {
  if (!price?.usd) {
    return {
      priceText: unavailableText,
      changeText: '',
      changePositive: true
    }
  }

  return {
    priceText: formatUsd(price.usd, price.usd >= 100 ? 2 : 4),
    changeText: price.change24h === null || price.change24h === undefined
      ? ''
      : formatPercent(price.change24h, 2),
    changePositive: price.change24h >= 0
  }
}

async function readNativeBalance (provider, address) {
  return provider.request({
    method: 'eth_getBalance',
    params: [address, 'latest']
  })
}

async function readTokenBalance (provider, token, address) {
  if (token.native) {
    const wei = await readNativeBalance(provider, address)
    return {
      ...token,
      rawBalance: wei
    }
  }

  const rawBalance = await provider.request({
    method: 'eth_call',
    params: [
      {
        to: normalizeTokenAddress(token.address),
        data: encodeBalanceOf(address)
      },
      'latest'
    ]
  })

  return {
    ...token,
    rawBalance
  }
}

function toHexQuantity (value) {
  const bigint = typeof value === 'bigint' ? value : BigInt(value || 0)
  return `0x${bigint.toString(16)}`
}

function toRpcQuantity (value) {
  if (typeof value === 'undefined' || value === null || value === '') return undefined
  if (typeof value === 'number') return `0x${Math.trunc(value).toString(16)}`
  if (typeof value === 'bigint') return `0x${value.toString(16)}`
  const raw = String(value)
  if (/^0x[0-9a-f]+$/i.test(raw)) return raw
  if (/^\d+$/.test(raw)) return `0x${BigInt(raw).toString(16)}`
  return raw
}

function encodeErc20TransferData (to, amount) {
  const normalizedAddress = String(to || '').trim().toLowerCase().replace(/^0x/, '')
  const paddedAddress = normalizedAddress.padStart(64, '0')
  const paddedAmount = BigInt(amount || 0).toString(16).padStart(64, '0')
  return `0xa9059cbb${paddedAddress}${paddedAmount}`
}

function encodeErc20ApproveData (spender, amount) {
  const normalizedAddress = String(spender || '').trim().toLowerCase().replace(/^0x/, '')
  const paddedAddress = normalizedAddress.padStart(64, '0')
  const paddedAmount = BigInt(amount || 0).toString(16).padStart(64, '0')
  return `0x095ea7b3${paddedAddress}${paddedAmount}`
}

function isValidEvmAddress (value) {
  return /^0x[a-fA-F0-9]{40}$/.test(String(value || '').trim())
}

async function waitForTransactionReceipt (provider, txHash, timeoutMs = 300000, onRetry) {
  const startedAt = Date.now()
  let delayMs = 2000
  let lastError = null

  while ((Date.now() - startedAt) < timeoutMs) {
    try {
      const receipt = await provider.request({
        method: 'eth_getTransactionReceipt',
        params: [txHash]
      })
      if (receipt) return receipt
    } catch (error) {
      lastError = error
      if (typeof onRetry === 'function') onRetry(error)
    }

    await new Promise((resolve) => window.setTimeout(resolve, delayMs))
    delayMs = Math.min(10000, Math.round(delayMs * 1.35))
  }

  if (lastError) {
    throw new Error(`Transaction confirmation timed out: ${lastError.message || 'RPC unavailable'}`)
  }
  throw new Error('Transaction confirmation timed out')
}

export function App ({ user, logout, wallets = [], authMeta = {}, preferences = normalizeWalletPreferences(), updatePreferences }) {
  const { locale, setLocale, languageOptions, t } = useI18n()
  const { showMfaEnrollmentModal } = useMfaEnrollment()
  const { user: currentPrivyUser } = usePrivy()
  const ethereumWallet = useMemo(() => wallets.find((wallet) => wallet.type === 'ethereum'), [wallets])
  const currentChain = useMemo(() => resolveWalletChain(ethereumWallet), [ethereumWallet])
  const walletNetworks = useMemo(() => getWalletNetworks(preferences), [preferences])
  const evmNetworks = useMemo(() => walletNetworks.filter((network) => network.family === 'evm'), [walletNetworks])
  const [selectedChainId, setSelectedChainId] = useState(() => evmNetworks[0]?.id || defaultChain.id)
  const [walletFamily, setWalletFamily] = useState(() => walletNetworks[0].family)
  const [preferencesError, setPreferencesError] = useState('')
  const [tariSheet, setTariSheet] = useState(null)
  const tari = useTariWallet(user?.id, walletFamily === 'tari')
  const [nativeBalance, setNativeBalance] = useState(null)
  const [tokenBalances, setTokenBalances] = useState([])
  const [loadingBalances, setLoadingBalances] = useState(false)
  const [balanceError, setBalanceError] = useState(null)
  const [copied, setCopied] = useState(false)
  const [telegramStatus] = useState(authMeta.telegram?.status || 'absent')
  const [telegramInfo] = useState(authMeta.telegram?.user ? { user: authMeta.telegram.user } : null)
  const [showSmallBalances, setShowSmallBalances] = useState(false)
  const [activeTab, setActiveTab] = useState('wallet')
  const p2pEnabled = locale === 'ru'
  const mfaEnabled = (currentPrivyUser || user)?.mfaMethods?.length > 0
  const [networkPickerOpen, setNetworkPickerOpen] = useState(false)
  const [logoClickCount, setLogoClickCount] = useState(0)
  const [logoNameVisible, setLogoNameVisible] = useState(false)
  const logoNameTimerRef = useRef(null)
  const logoHighlightClass = logoClickCount === 0
    ? ''
    : logoClickCount % 2 === 0
      ? 'is-highlighted-alt'
      : 'is-highlighted'

  useEffect(() => {
    document.body.classList.add('wallet-open')
    return () => document.body.classList.remove('wallet-open')
  }, [])

  useEffect(() => {
    return () => {
      if (logoNameTimerRef.current) window.clearTimeout(logoNameTimerRef.current)
    }
  }, [])

  function handleLogoClick () {
    setLogoClickCount((count) => count + 1)
    setLogoNameVisible(true)
    if (logoNameTimerRef.current) window.clearTimeout(logoNameTimerRef.current)
    logoNameTimerRef.current = window.setTimeout(() => {
      setLogoNameVisible(false)
      logoNameTimerRef.current = null
    }, 1100)
  }

  async function handleLanguageChange (event) {
    const nextLocale = event.currentTarget.value
    setLocale(nextLocale)
    try {
      await updateLanguage(nextLocale)
    } catch (error) {
      console.warn('Failed to save language preference', error)
    }
  }
  const [assetPrices, setAssetPrices] = useState({})
  const [showPortfolioValue, setShowPortfolioValue] = useState(true)
  const [depositOpen, setDepositOpen] = useState(false)
  const [withdrawOpen, setWithdrawOpen] = useState(false)
  const [tokenRegistry, setTokenRegistry] = useState(getDefaultTokenRegistry())
  const [customTokenOpen, setCustomTokenOpen] = useState(false)
  const [assetDetailsToken, setAssetDetailsToken] = useState(null)
  const [assetContractCopied, setAssetContractCopied] = useState(false)
  const [assetLogoLoaded, setAssetLogoLoaded] = useState(false)
  const [assetLogoUpdateState, setAssetLogoUpdateState] = useState('idle')
  const [assetLogoUpdateError, setAssetLogoUpdateError] = useState(null)
  const [assetPriceUpdateState, setAssetPriceUpdateState] = useState('idle')
  const [assetPriceUpdateError, setAssetPriceUpdateError] = useState(null)
  const [customTokenDraft, setCustomTokenDraft] = useState({
    chainId: currentChain.id,
    address: '',
    symbol: '',
    name: '',
    decimals: '18'
  })
  const [customTokenError, setCustomTokenError] = useState(null)
  const [customTokenLookup, setCustomTokenLookup] = useState(null)
  const [customTokenSafety, setCustomTokenSafety] = useState(null)
  const [customTokenAcknowledged, setCustomTokenAcknowledged] = useState(false)
  const [swapFromSymbol, setSwapFromSymbol] = useState('')
  const [swapToSymbol, setSwapToSymbol] = useState('')
  const [swapFromKey, setSwapFromKey] = useState('')
  const [swapToKey, setSwapToKey] = useState('')
  const [swapPickerField, setSwapPickerField] = useState(null)
  const [swapProvider, setSwapProvider] = useState('auto')
  const [swapAmount, setSwapAmount] = useState('')
  const [swapQuote, setSwapQuote] = useState(null)
  const [swapQuoteState, setSwapQuoteState] = useState('idle')
  const [swapQuoteError, setSwapQuoteError] = useState(null)
  const [swapAction, setSwapAction] = useState(null)
  const [swapActionState, setSwapActionState] = useState('idle')
  const [swapActionError, setSwapActionError] = useState(null)
  const [copiedUtilityValue, setCopiedUtilityValue] = useState('')
  const [gasSponsorshipStatus, setGasSponsorshipStatus] = useState('idle')
  const [gasSponsorshipError, setGasSponsorshipError] = useState(null)
  const [gasSponsorshipMessage, setGasSponsorshipMessage] = useState(null)
  const [gasSponsorshipActionId, setGasSponsorshipActionId] = useState(null)
  const [walletWithdrawDraft, setWalletWithdrawDraft] = useState({ assetKey: '', amount: '', destinationAddress: '', gasMode: 'native' })
  const [walletWithdrawGasLevel, setWalletWithdrawGasLevel] = useState('normal')
  const [walletWithdrawCustomGwei, setWalletWithdrawCustomGwei] = useState('')
  const [walletWithdrawGasQuotes, setWalletWithdrawGasQuotes] = useState([])
  const [walletWithdrawGasError, setWalletWithdrawGasError] = useState(null)
  const [walletWithdrawState, setWalletWithdrawState] = useState('idle')
  const [walletWithdrawError, setWalletWithdrawError] = useState(null)
  const [walletWithdrawMessage, setWalletWithdrawMessage] = useState(null)
  const [walletWithdrawTxLink, setWalletWithdrawTxLink] = useState(null)
  const [walletWithdrawProgress, setWalletWithdrawProgress] = useState(null)
  const [walletAddressRisk, setWalletAddressRisk] = useState(null)
  const [walletAddressRiskLoading, setWalletAddressRiskLoading] = useState(false)
  const swapFromPickerRef = useRef(null)
  const swapToPickerRef = useRef(null)

  const resetSwapResult = useCallback(() => {
    setSwapQuote(null)
    setSwapQuoteState('idle')
    setSwapQuoteError(null)
    setSwapAction(null)
    setSwapActionState('idle')
    setSwapActionError(null)
  }, [])
  const [walletAddressRiskConfirmed, setWalletAddressRiskConfirmed] = useState(false)
  const [walletTxRisk, setWalletTxRisk] = useState(null)
  const [walletTxRiskLoading, setWalletTxRiskLoading] = useState(false)
  const [walletTxRiskConfirmed, setWalletTxRiskConfirmed] = useState(false)
  const [walletTxRiskOpen, setWalletTxRiskOpen] = useState(false)
  const [rabbyGasSession, setRabbyGasSession] = useState(null)
  const [rabbyGasSessionLoading, setRabbyGasSessionLoading] = useState(true)
  const [rabbyGasInfo, setRabbyGasInfo] = useState(null)
  const [rabbyGasHistory, setRabbyGasHistory] = useState([])
  const [rabbyGasHistoryOpen, setRabbyGasHistoryOpen] = useState(false)
  const [rabbyGasLoading, setRabbyGasLoading] = useState(false)
  const [rabbyGasActionState, setRabbyGasActionState] = useState('idle')
  const [rabbyGasError, setRabbyGasError] = useState(null)
  const [rabbyGasMessage, setRabbyGasMessage] = useState(null)
  const [rabbyGasTxCheck, setRabbyGasTxCheck] = useState(null)
  const [rabbyGasWithdrawList, setRabbyGasWithdrawList] = useState([])
  const [rabbyGasDepositSupport, setRabbyGasDepositSupport] = useState(RABBY_GAS_ACCOUNT_DEPOSIT_SUPPORT_FALLBACK)
  const [rabbyGasDepositDraft, setRabbyGasDepositDraft] = useState({ tokenKey: '', amount: '', reportTxHash: '' })
  const [rabbyGasWithdrawDraft, setRabbyGasWithdrawDraft] = useState({ address: '', chainId: '' })
  const chainButtonRefs = useRef({})
  const prepareWalletTransactionRef = useRef(null)
  const sendWalletTransactionRef = useRef(null)
  const discoveryLockRef = useRef(false)
  const balanceRequestRef = useRef(0)
  const rabbyGasRefreshInFlightRef = useRef(null)

  useEffect(() => {
    if (!p2pEnabled && activeTab === 'p2p') setActiveTab('wallet')
  }, [activeTab, p2pEnabled])

  useEffect(() => {
    try {
      const cachedGasLevel = window.localStorage.getItem('thewallet:gas-level')
      if (cachedGasLevel && [...WALLET_GAS_LEVELS.map((item) => item.level), 'custom'].includes(cachedGasLevel)) {
        setWalletWithdrawGasLevel(cachedGasLevel)
      }
      const cachedCustomGwei = window.localStorage.getItem('thewallet:custom-gwei')
      if (cachedCustomGwei) setWalletWithdrawCustomGwei(cachedCustomGwei)
    } catch (_) {

    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem('thewallet:gas-level', walletWithdrawGasLevel)
      window.localStorage.setItem('thewallet:custom-gwei', walletWithdrawCustomGwei)
    } catch (_) {

    }
  }, [walletWithdrawCustomGwei, walletWithdrawGasLevel])

  useEffect(() => {
    setWalletAddressRiskConfirmed(false)
    setWalletTxRisk(null)
    setWalletTxRiskConfirmed(false)
    setWalletTxRiskOpen(false)

    const trimmed = walletWithdrawDraft.destinationAddress.trim()

    if (!trimmed || !isValidEvmAddress(trimmed)) {
      setWalletAddressRisk(null)
      setWalletAddressRiskLoading(false)
      return
    }

    let cancelled = false
    setWalletAddressRiskLoading(true)

    const timer = window.setTimeout(async () => {
      const result = await checkDestinationAddressRisk({
        fromAddress: ethereumWallet?.address,
        toAddress: trimmed,
        chainId: selectedChainId
      })

      if (!cancelled) {
        setWalletAddressRisk(result)
        setWalletAddressRiskLoading(false)
      }
    }, 500)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [ethereumWallet?.address, selectedChainId, walletWithdrawDraft.destinationAddress])

  useEffect(() => {
    setWalletTxRisk(null)
    setWalletTxRiskConfirmed(false)
    setWalletTxRiskOpen(false)
  }, [selectedChainId, walletWithdrawDraft.amount, walletWithdrawDraft.assetKey, walletWithdrawDraft.gasMode])

  useEffect(() => {
    setTokenRegistry(loadTokenRegistry(ethereumWallet?.address))
  }, [ethereumWallet?.address])

  useEffect(() => {
    saveTokenRegistry(ethereumWallet?.address, tokenRegistry)
  }, [ethereumWallet?.address, tokenRegistry])

  useEffect(() => {
    const cleanup = initTelegramWebApp()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  const selectedChain = useMemo(
    () => chainMap.get(selectedChainId) || currentChain || defaultChain,
    [currentChain, selectedChainId]
  )

  const nativeSymbol = getChainSymbol(selectedChain)
  const swapSupported = isSwapSupportedChain(selectedChainId)
  const chainTokenRegistry = useMemo(
    () => getChainTokenRegistry(selectedChainId, tokenRegistry),
    [selectedChainId, tokenRegistry]
  )
  const chainDiscoveryState = useMemo(
    () => getDiscoveryStateForChain(tokenRegistry, selectedChainId),
    [selectedChainId, tokenRegistry]
  )
  const explorerUrl = useMemo(
    () => makeExplorerAddressUrl(selectedChain, ethereumWallet?.address),
    [ethereumWallet?.address, selectedChain]
  )

  const balanceTargets = useMemo(() => {
    return chainTokenRegistry
  }, [chainTokenRegistry])

  const priceSymbols = useMemo(() => {
    return balanceTargets
      .map((token) => ({
        symbol: token.cmcSymbol || token.symbol,
        name: token.name,
        chainId: token.chainId,
        address: token.address,
        trustTier: token.trustTier
      }))
      .filter((token) => String(token.symbol || '').trim())
  }, [balanceTargets])

  useEffect(() => {
    const button = chainButtonRefs.current[selectedChainId]
    if (button && typeof button.scrollIntoView === 'function') {
      button.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [networkPickerOpen, selectedChainId])

  useEffect(() => {
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') return undefined
    if (discoveryLockRef.current) return undefined

    const lastRunAt = Number(chainDiscoveryState?.lastRunAt || 0)
    if (lastRunAt && (Date.now() - lastRunAt) < 60_000) return undefined

    let cancelled = false

    async function runDiscovery () {
      discoveryLockRef.current = true
      try {
        const provider = await ethereumWallet.getEthereumProvider()
        const readProvider = createReadRpcProvider(provider, selectedChainId)
        const result = await discoverWalletTokens(readProvider, selectedChainId, ethereumWallet.address, chainDiscoveryState || {})
        if (cancelled || !result) return

        setTokenRegistry((current) => {
          let next = current
          if (Array.isArray(result.tokens) && result.tokens.length > 0) {
            next = upsertDiscoveredTokens(next, result.tokens)
          }
          return setDiscoveryStateForChain(next, selectedChainId, result.state)
        })
      } catch {
        if (!cancelled) {
          setTokenRegistry((current) => setDiscoveryStateForChain(current, selectedChainId, {
            chainId: selectedChainId,
            lastRunAt: Date.now(),
            lastScannedBlock: chainDiscoveryState?.lastScannedBlock || null,
            lastError: 'token-discovery-failed'
          }))
        }
      } finally {
        discoveryLockRef.current = false
      }
    }

    runDiscovery()
    return () => {
      cancelled = true
    }
  }, [chainDiscoveryState, ethereumWallet, selectedChainId])

  const reloadBalances = useCallback(async (options = {}) => {
    const requestId = balanceRequestRef.current + 1
    balanceRequestRef.current = requestId

    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      setLoadingBalances(false)
      setTokenBalances([])
      setNativeBalance(null)
      return
    }

    const chainId = normalizeChainId(selectedChainId)
    const walletAddress = ethereumWallet.address
    const targets = balanceTargets
    setLoadingBalances(true)
    setBalanceError(null)

    try {
      const provider = await ethereumWallet.getEthereumProvider()
      const readProvider = createReadRpcProvider(provider, chainId, {
        fallbackOnAnyError: true,
        preferPublic: Boolean(options?.preferPublic)
      })
      const tokenRows = await Promise.all(
        targets.map(async (token) => {
          const resolvedToken = await resolveTokenMetadata(readProvider, chainId, token)
          return readTokenBalance(readProvider, resolvedToken, walletAddress)
        })
      )
      const nativeToken = tokenRows.find((token) => token.native) || null

      if (balanceRequestRef.current !== requestId) return
      setNativeBalance(nativeToken?.rawBalance || null)
      setTokenBalances(tokenRows.filter((token) => !token.native))
    } catch (err) {
      if (balanceRequestRef.current !== requestId) return
      setBalanceError(err.message || 'Balance refresh failed')
      setTokenBalances([])
      setNativeBalance(null)
    } finally {
      if (balanceRequestRef.current === requestId) {
        setLoadingBalances(false)
      }
    }
  }, [balanceTargets, ethereumWallet, selectedChainId])

  useEffect(() => {
    if (walletFamily === 'evm') reloadBalances()
  }, [reloadBalances, selectedChainId, walletFamily])

  useEffect(() => {
    let cancelled = false

    async function loadPrices () {
      try {
        const payload = await fetchCoinGeckoPrices(priceSymbols)
        if (!cancelled) setAssetPrices(payload)
      } catch {
        if (!cancelled) setAssetPrices({})
      }
    }

    loadPrices()
    return () => {
      cancelled = true
    }
  }, [priceSymbols])

  const switchChain = useCallback(async (chain) => {
    setWalletFamily('evm')
    setSelectedChainId(chain.id)
    if (!ethereumWallet?.switchChain) return
    balanceRequestRef.current += 1
    setBalanceError(null)
    setTokenBalances([])
    setNativeBalance(null)
    setAssetPrices({})
    setLoadingBalances(true)
    setSelectedChainId(chain.id)
    try {
      await ethereumWallet.switchChain(chain.id)
    } catch (err) {
      setLoadingBalances(false)
      setBalanceError(err.message || 'Unable to switch network')
      throw err
    }
  }, [ethereumWallet])

  useEffect(() => {
    const activeKey = walletFamily === 'tari' ? 'tari:mainnet' : String(selectedChainId)
    if (walletNetworks.some((network) => network.key === activeKey)) return
    const first = walletNetworks[0]
    setNetworkPickerOpen(false)
    setTariSheet(null)
    setActiveTab((current) => current === 'more' ? current : 'wallet')
    if (first.family === 'tari') setWalletFamily('tari')
    else switchChain(first).catch(() => {})
  }, [walletNetworks, walletFamily, selectedChainId, switchChain])

  const copyAddress = useCallback(async () => {
    if (!ethereumWallet?.address) return
    await navigator.clipboard.writeText(ethereumWallet.address)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }, [ethereumWallet?.address])

  const openCustomTokenModal = useCallback(() => {
    setCustomTokenError(null)
    setCustomTokenSafety(null)
    setCustomTokenAcknowledged(false)
    setCustomTokenDraft({
      chainId: selectedChainId,
      address: '',
      symbol: '',
      name: '',
      decimals: '18'
    })
    setCustomTokenOpen(true)
  }, [selectedChainId])

  const submitCustomToken = useCallback(async () => {
    setCustomTokenError(null)

    const chainId = normalizeChainId(customTokenDraft.chainId)
    const address = normalizeTokenAddress(customTokenDraft.address)
    if (!ethereumWallet?.address) {
      setCustomTokenError('Connect a wallet first')
      return
    }

    if (!address || address === 'native' || !/^0x[a-f0-9]{40}$/.test(address)) {
      setCustomTokenError('Enter a valid token contract address')
      return
    }

    try {
      const provider = typeof ethereumWallet.getEthereumProvider === 'function'
        ? await ethereumWallet.getEthereumProvider()
        : null
      const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })
      const resolved = await resolveTokenMetadata(readProvider, chainId, {
        chainId,
        address,
        symbol: String(customTokenDraft.symbol || '').trim().toUpperCase(),
        name: String(customTokenDraft.name || '').trim(),
        decimals: Number(customTokenDraft.decimals)
      }, { forceLookup: true })

      const symbol = String(resolved?.symbol || customTokenDraft.symbol || '').trim().toUpperCase()
      const name = String(resolved?.name || customTokenDraft.name || symbol).trim()
      const decimals = Number.isFinite(Number(resolved?.decimals))
        ? Number(resolved.decimals)
        : Number(customTokenDraft.decimals)

      if (!symbol) {
        setCustomTokenError('Unable to resolve token symbol from chain')
        return
      }

      if (!Number.isFinite(decimals) || decimals < 0 || decimals > 36) {
        setCustomTokenError('Enter valid decimals')
        return
      }

      const safety = await classifyCustomToken({ chainId, address, symbol, name })
      setCustomTokenSafety(safety)
      if (safety.suspicious && !customTokenAcknowledged) {
        setCustomTokenError('Review the warning & confirm that you understand the risk before adding this token.')
        return
      }

      setTokenRegistry((current) => upsertCustomToken(current, {
        chainId,
        address,
        symbol,
        name,
        decimals,
        cmcSymbol: resolved?.cmcSymbol || symbol,
        logoUrl: resolved?.logoUrl || null,
        securityStatus: 'reviewed',
        securityReasons: safety.reasons
      }))
      setCustomTokenOpen(false)
    } catch (err) {
      setCustomTokenError(err.message || 'Unable to resolve token metadata')
    }
  }, [customTokenAcknowledged, customTokenDraft.address, customTokenDraft.chainId, customTokenDraft.decimals, customTokenDraft.name, customTokenDraft.symbol, ethereumWallet?.address])

  useEffect(() => {
    if (!customTokenOpen) {
      setCustomTokenLookup(null)
      return undefined
    }

    const chainId = normalizeChainId(customTokenDraft.chainId)
    const address = normalizeTokenAddress(customTokenDraft.address)
    if (!/^0x[a-f0-9]{40}$/.test(address)) {
      setCustomTokenLookup(null)
      setCustomTokenSafety(null)
      setCustomTokenAcknowledged(false)
      return undefined
    }

    setCustomTokenSafety(null)
    setCustomTokenAcknowledged(false)

    let cancelled = false
    const timeoutId = window.setTimeout(async () => {
      try {
        const provider = typeof ethereumWallet?.getEthereumProvider === 'function'
          ? await ethereumWallet.getEthereumProvider()
          : null
        const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })
        const resolved = await resolveTokenMetadata(readProvider, chainId, { address }, { forceLookup: true })
        if (cancelled || !resolved) return
        setCustomTokenLookup(resolved)
        setCustomTokenDraft((current) => ({
          chainId: current.chainId,
          address: current.address,
          symbol: String(current.symbol || resolved.symbol || '').trim(),
          name: String(current.name || resolved.name || '').trim(),
          decimals: String(
            current.decimals && current.decimals !== '18'
              ? current.decimals
              : (resolved.decimals ?? current.decimals ?? 18)
          )
        }))
        const safety = await classifyCustomToken({
          chainId,
          address,
          symbol: resolved.symbol,
          name: resolved.name
        })
        if (!cancelled) setCustomTokenSafety(safety)
      } catch {
        if (!cancelled) {
          setCustomTokenLookup(null)
          setCustomTokenSafety({
            suspicious: true,
            reasons: ['Token metadata or market identity could not be verified.']
          })
        }
      }
    }, 500)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [customTokenDraft.address, customTokenDraft.chainId, customTokenOpen, ethereumWallet])

  const isEmbeddedWallet = String(ethereumWallet?.walletClientType || '').includes('privy')
  const walletClientLabel = isEmbeddedWallet ? t('wallet.embeddedWalletLabel') : (ethereumWallet?.walletClientType || t('wallet.connectedWallet'))
  const address = ethereumWallet?.address || 'n/a'
  const linkedTelegramAccount = user?.linkedAccounts?.find((account) => String(account.type || '').includes('telegram')) || null
  const telegramUser = telegramInfo?.user || linkedTelegramAccount
  const telegramStatusLabel = telegramStatus === 'verified'
    ? t('wallet.telegramVerified')
    : telegramStatus === 'verifying'
      ? t('wallet.telegramVerifying')
      : telegramStatus === 'error'
        ? t('wallet.telegramError')
        : linkedTelegramAccount
          ? (linkedTelegramAccount.latestVerifiedAt || linkedTelegramAccount.firstVerifiedAt ? t('wallet.telegramVerified') : t('wallet.telegramLinked'))
          : t('wallet.telegramNotPresent')
  const activeNetworkLabel = chainLabel(selectedChain)
  const rabbyGasBalance = rabbyGasInfo?.balance || '0'
  const hasRabbyGasSession = Boolean(rabbyGasSession?.sig)
  const activeNetworkLogo = chainLogoSymbol(selectedChain)
  const appLogoUrl = '/images/outruna-logo.webp'
  const portfolioAssets = useMemo(() => {
    const builtinNativeAsset = getBuiltinTokensForChain(selectedChainId).find((token) => token.native) || {}
    const nativeAsset = {
      ...builtinNativeAsset,
      chainId: selectedChainId,
      symbol: nativeSymbol,
      name: getChainLabel(selectedChain),
      native: true,
      address: 'native',
      decimals: 18,
      cmcSymbol: nativeSymbol,
      rawBalance: nativeBalance
    }

    const balanceKeys = new Set(tokenBalances.map((token) => getTokenKey(token.chainId, token.address)))
    const customAssetsWithoutBalanceRow = getCustomTokensForChain(tokenRegistry, selectedChainId)
      .filter((token) => !balanceKeys.has(getTokenKey(token.chainId, token.address)))
      .map((token) => ({ ...token, rawBalance: '0x0' }))

    return [nativeAsset, ...tokenBalances, ...customAssetsWithoutBalanceRow]
  }, [nativeBalance, nativeSymbol, selectedChain, selectedChainId, tokenBalances, tokenRegistry])

  const openAssetDetails = useCallback((token) => {
    setAssetContractCopied(false)
    setAssetLogoLoaded(false)
    setAssetLogoUpdateState('idle')
    setAssetLogoUpdateError(null)
    setAssetPriceUpdateState('idle')
    setAssetPriceUpdateError(null)
    setAssetDetailsToken(token)
  }, [])

  const copyAssetContract = useCallback(async () => {
    const address = assetDetailsToken?.native ? '' : assetDetailsToken?.address
    if (!address || !navigator?.clipboard) return
    await navigator.clipboard.writeText(address)
    setAssetContractCopied(true)
    window.setTimeout(() => setAssetContractCopied(false), 1600)
  }, [assetDetailsToken])

  const removeAssetCustomToken = useCallback(() => {
    if (!assetDetailsToken || assetDetailsToken.trustTier !== 'custom') return
    setTokenRegistry((current) => removeCustomToken(current, assetDetailsToken.chainId, assetDetailsToken.address))
    setAssetLogoLoaded(false)
    setAssetLogoUpdateState('idle')
    setAssetLogoUpdateError(null)
    setAssetDetailsToken(null)
  }, [assetDetailsToken])

  const updateCustomTokenLogo = useCallback(async () => {
    if (!assetDetailsToken || assetDetailsToken.trustTier !== 'custom' || assetDetailsToken.native) return
    setAssetLogoUpdateState('loading')
    setAssetLogoUpdateError(null)
    try {
      const logoUrl = await resolveTokenLogoUrl(
        assetDetailsToken.symbol,
        assetDetailsToken.logoUrl,
        {
          chainId: assetDetailsToken.chainId,
          address: assetDetailsToken.address,
          name: assetDetailsToken.name
        }
      )
      if (!logoUrl) throw new Error('Logo not found for this token')
      setTokenRegistry((current) => upsertCustomToken(current, {
        ...assetDetailsToken,
        logoUrl
      }))
      setAssetDetailsToken((current) => current ? { ...current, logoUrl } : current)
      setAssetLogoUpdateState('done')
    } catch (error) {
      setAssetLogoUpdateState('error')
      setAssetLogoUpdateError(error.message || 'Unable to update token logo')
    }
  }, [assetDetailsToken])

  const updateCustomTokenPrice = useCallback(async () => {
    if (!assetDetailsToken || assetDetailsToken.trustTier !== 'custom' || assetDetailsToken.native) return
    setAssetPriceUpdateState('loading')
    setAssetPriceUpdateError(null)

    try {
      const priceKey = String(assetDetailsToken.cmcSymbol || assetDetailsToken.symbol || '').trim().toUpperCase()
      const payload = await fetchCoinGeckoPrices([assetDetailsToken], { force: true })
      const market = payload?.[priceKey]
      if (!market?.usd) throw new Error('Price is not available for this token')

      setAssetPrices((current) => ({ ...current, ...payload }))
      setAssetDetailsToken((current) => current ? { ...current, market } : current)
      setAssetPriceUpdateState('done')
    } catch (error) {
      setAssetPriceUpdateState('error')
      setAssetPriceUpdateError(error.message || 'Unable to update token price')
    }
  }, [assetDetailsToken])

  const displayedAssets = useMemo(() => {
    const rows = portfolioAssets
      .map((token) => {
        const amountText = tokenDisplayAmount(token)
        const priceKey = String(token.cmcSymbol || token.symbol || '').trim().toUpperCase()
        const market = assetPrices[priceKey] || null
        const amount = toDecimal(amountText)
        const usdPrice = toDecimal(market?.usd)
        const usdValue = amount && usdPrice ? amount.mul(usdPrice).toString() : null
        return {
          ...token,
          displaySymbol: displayTokenSymbol(token.symbol),
          amountText,
          priceKey,
          market,
          usdValue
        }
      })
      .filter((token) => {
        const rawBalance = parseBigIntValue(token?.rawBalance)
        if (token.native) return rawBalance > 0n
        if (token.trustTier === 'custom') return rawBalance > 0n || token.trustTier === 'custom'
        if (rawBalance <= 0n || showSmallBalances) return rawBalance > 0n

        // Keep assets with no quote visible; hiding them would make an unavailable
        // price look like a missing balance. Small-balance filtering is USD-based.
        const usdValue = toDecimal(token.usdValue)
        if (!usdValue) return true
        return compareDecimalValues(usdValue, SMALL_BALANCE_USD_THRESHOLD) >= 0
      })

    rows.sort((a, b) => {
      const usdCompare = compareDecimalValues(b.usdValue, a.usdValue)
      if (usdCompare !== 0) return usdCompare
      if (a.native !== b.native) return a.native ? -1 : 1
      return String(a.symbol || '').localeCompare(String(b.symbol || ''))
    })

    return rows
  }, [assetPrices, portfolioAssets, showSmallBalances])

  const walletTransferAssets = useMemo(() => {
    return portfolioAssets
      .filter((token) => parseBigIntValue(token?.rawBalance) > 0n)
      .map((token) => ({
        ...token,
        key: token.native ? `native:${normalizeChainId(selectedChainId)}` : `${normalizeChainId(selectedChainId)}:${normalizeTokenAddress(token.address)}`,
        logoUrl: getSwapTokenLogoUrl(token)
      }))
  }, [portfolioAssets, selectedChainId])

  const portfolioSummary = useMemo(() => {
    return displayedAssets.reduce((sum, token) => {
      const value = toDecimal(token.usdValue) || new Decimal(0)
      return sum.add(value)
    }, new Decimal(0)).toString()
  }, [displayedAssets])

  const swapTokens = useMemo(() => {
    if (!swapSupported) return []
    return displayedAssets
      .filter((token) => parseBigIntValue(token.rawBalance) > 0n || token.native)
      .map((token) => ({
        ...token,
        logoUrl: getSwapTokenLogoUrl(token)
      }))
  }, [displayedAssets, swapSupported])

  const swapDestinationTokens = useMemo(() => {
    if (!swapSupported) return []
    const tokens = [
      ...getBuiltinTokensForChain(selectedChainId),
      ...getCustomTokensForChain(tokenRegistry, selectedChainId),
      ...getDiscoveredTokensForChain(tokenRegistry, selectedChainId),
      ...displayedAssets
    ]
    const seen = new Set()
    return tokens
      .filter((token) => {
        const trustTier = String(token?.trustTier || '').toLowerCase()
        if (!token?.native && !['core', 'verified', 'custom'].includes(trustTier)) return false
        const key = getTokenKey(selectedChainId, token.address)
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
      .map((token) => ({
        ...token,
        logoUrl: token.logoUrl || getSwapTokenLogoUrl(token)
      }))
  }, [displayedAssets, selectedChainId, swapSupported, tokenRegistry])

  useEffect(() => {
    let cancelled = false

    fetchRabbyGasAccountDepositSupport()
      .then((support) => {
        if (!cancelled && support) {
          setRabbyGasDepositSupport(support)
        }
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [])

  const rabbyGasChainServerId = RABBY_CHAIN_SERVER_IDS[selectedChainId] || null
  const rabbyGasDepositAddress = RABBY_GAS_ACCOUNT_DEPOSIT_ADDRESSES[selectedChainId] || ''
  const rabbyGasDirectDepositSupportSet = useMemo(() => {
    return new Set(
      (rabbyGasDepositSupport?.wallet_tokens || [])
        .map((item) => {
          const chainServerId = String(item?.chain_id || '').trim().toLowerCase()
          const tokenId = normalizeTokenAddress(item?.token_id)
          if (!chainServerId || !tokenId || tokenId === 'native') return null
          return `${chainServerId}:${tokenId}`
        })
        .filter(Boolean)
    )
  }, [rabbyGasDepositSupport?.wallet_tokens])
  const rabbyGasDepositNetworkOptions = useMemo(() => {
    return evmNetworks.filter((chain) => {
      const chainServerId = RABBY_CHAIN_SERVER_IDS[chain.id]
      if (!chainServerId || !RABBY_GAS_ACCOUNT_DEPOSIT_ADDRESSES[chain.id]) return false
      return getSwapTokensForChain(chain.id).some((token) => {
        if (token.native) return false
        return rabbyGasDirectDepositSupportSet.has(`${chainServerId}:${normalizeTokenAddress(token.address)}`)
      })
    })
  }, [rabbyGasDirectDepositSupportSet, evmNetworks])
  const rabbyGasDepositTokens = useMemo(() => {
    const chainServerId = RABBY_CHAIN_SERVER_IDS[selectedChainId]
    if (!chainServerId) return []
    return getSwapTokensForChain(selectedChainId)
      .filter((token) => {
        if (token.native) return false
        return rabbyGasDirectDepositSupportSet.has(`${chainServerId}:${normalizeTokenAddress(token.address)}`)
      })
      .map((token) => ({
        ...token,
        key: `${normalizeChainId(selectedChainId)}:${normalizeTokenAddress(token.address)}`,
        logoUrl: getSwapTokenLogoUrl(token)
      }))
  }, [rabbyGasDirectDepositSupportSet, selectedChainId])

  const selectedRabbyGasDepositToken = useMemo(() => {
    if (!rabbyGasDepositTokens.length) return null
    return rabbyGasDepositTokens.find((token) => token.key === rabbyGasDepositDraft.tokenKey) || rabbyGasDepositTokens[0]
  }, [rabbyGasDepositDraft.tokenKey, rabbyGasDepositTokens])

  const selectedRabbyGasDepositBalance = useMemo(() => {
    if (!selectedRabbyGasDepositToken) return null
    const selectedAddress = normalizeTokenAddress(selectedRabbyGasDepositToken.address)
    return portfolioAssets.find((asset) => {
      if (asset.native) return false
      return normalizeTokenAddress(asset.address) === selectedAddress
    }) || null
  }, [portfolioAssets, selectedRabbyGasDepositToken])

  const selectedRabbyGasWithdrawAddress = useMemo(() => {
    if (!rabbyGasWithdrawList.length) return null
    return rabbyGasWithdrawList.find((item) => item.recharge_addr === rabbyGasWithdrawDraft.address) || rabbyGasWithdrawList[0]
  }, [rabbyGasWithdrawDraft.address, rabbyGasWithdrawList])

  const rabbyGasWithdrawChains = useMemo(() => {
    return selectedRabbyGasWithdrawAddress?.recharge_chain_list || []
  }, [selectedRabbyGasWithdrawAddress])

  const selectedRabbyGasWithdrawChain = useMemo(() => {
    if (!rabbyGasWithdrawChains.length) return null
    return rabbyGasWithdrawChains.find((chain) => chain.chain_id === rabbyGasWithdrawDraft.chainId) || rabbyGasWithdrawChains[0]
  }, [rabbyGasWithdrawChains, rabbyGasWithdrawDraft.chainId])

  const switchRabbyGasDepositNetwork = useCallback((chainId) => {
    const chain = chainMap.get(normalizeChainId(chainId))
    if (!chain) return
    switchChain(chain).catch(() => {})
  }, [switchChain])

  const getRabbyGasDepositNetworkTitle = useCallback((chain) => {
    if (!chain) return t('gas.selectNetwork')
    if (chain.id === 1) return 'Ethereum Mainnet'
    return getChainLabel(chain)
  }, [t])

  const getRabbyGasDepositNetworkSubtitle = useCallback((chain) => {
    const chainServerId = RABBY_CHAIN_SERVER_IDS[chain?.id]
    const tokenCount = getSwapTokensForChain(chain?.id)
      .filter((token) => {
        if (token.native || !chainServerId) return false
        return rabbyGasDirectDepositSupportSet.has(`${chainServerId}:${normalizeTokenAddress(token.address)}`)
      })
      .length
    return `${tokenCount} ${t(tokenCount === 1 ? 'gas.supportedToken' : 'gas.supportedTokens')}`
  }, [rabbyGasDirectDepositSupportSet, t])

  const getRabbyGasTokenSubtitle = useCallback((token) => {
    if (!token) return t('gas.chooseStablecoin')
    const balance = selectedRabbyGasDepositBalance && selectedRabbyGasDepositToken?.key === token.key
      ? tokenDisplayAmount(selectedRabbyGasDepositBalance)
      : null
    return `${activeNetworkLabel}${balance ? ` · ${balance} ${token.symbol}` : ''}`
  }, [activeNetworkLabel, selectedRabbyGasDepositBalance, selectedRabbyGasDepositToken?.key, t])

  const getRabbyGasDestinationTitle = useCallback(() => {
    return t('gas.yourWallet')
  }, [t])

  const getRabbyGasDestinationSubtitle = useCallback((item) => {
    const chainCount = Array.isArray(item?.recharge_chain_list) ? item.recharge_chain_list.length : 0
    const addressLabel = shortenValue(item?.recharge_addr || ethereumWallet?.address || '', 8, 6)
    const chainLabel = `${chainCount || 0} ${t(chainCount === 1 ? 'gas.supportedChain' : 'gas.supportedChains')}`
    return `${addressLabel} · ${chainLabel}`
  }, [ethereumWallet?.address, t])

  const getRabbyGasChainTitle = useCallback((chain) => {
    return getRabbyChainLabel(chain?.chain_id)
  }, [])

  const getRabbyGasChainSubtitle = useCallback((chain) => {
    if (!chain) return t('gas.chooseWithdrawNetwork')
    const fee = formatUsd(chain.withdraw_fee || 0, 4)
    const limit = formatUsd(chain.withdraw_limit || rabbyGasInfo?.withdrawable_balance || rabbyGasInfo?.balance || 0, 4)
    return `${t('gas.fee')} ${fee} · ${t('gas.limit')} ${limit}`
  }, [rabbyGasInfo?.balance, rabbyGasInfo?.withdrawable_balance, t])

  const selectedWalletWithdrawAsset = useMemo(() => {
    if (!walletTransferAssets.length) return null
    return walletTransferAssets.find((asset) => asset.key === walletWithdrawDraft.assetKey) || walletTransferAssets[0]
  }, [walletTransferAssets, walletWithdrawDraft.assetKey])

  const selectedWalletWithdrawGasQuote = useMemo(() => {
    if (walletWithdrawGasLevel === 'custom') {
      const gasLimit = walletWithdrawGasQuotes[0]?.gasLimit
      const customGwei = toDecimal(walletWithdrawCustomGwei)
      if (!gasLimit || !customGwei || customGwei.lte(0)) return null

      const priceKey = String(getChainSymbol(chainMap.get(selectedChainId) || selectedChain)).trim().toUpperCase()
      const nativeTokenPrice = toDecimal(assetPrices[priceKey]?.usd) || new Decimal(0)
      const gasPriceWei = BigInt(customGwei.mul(1e9).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toFixed(0))
      const weiCost = gasLimit * gasPriceWei
      return {
        level: 'custom',
        label: 'Custom',
        gasLimit,
        support1559: false,
        gasPrice: gasPriceWei,
        weiCost,
        usdCost: nativeTokenPrice.gt(0)
          ? new Decimal(weiCost.toString()).div('1e18').mul(nativeTokenPrice).toString()
          : '0'
      }
    }

    if (!walletWithdrawGasQuotes.length) return null
    return walletWithdrawGasQuotes.find((quote) => quote.level === walletWithdrawGasLevel) || walletWithdrawGasQuotes.find((quote) => quote.level === 'normal') || walletWithdrawGasQuotes[0]
  }, [assetPrices, selectedChain, selectedChainId, walletWithdrawCustomGwei, walletWithdrawGasLevel, walletWithdrawGasQuotes])

  const getWalletTransferAssetTitle = useCallback((asset) => {
    if (!asset) return 'Select asset'
    return asset.symbol || 'Asset'
  }, [])

  const getWalletTransferAssetSubtitle = useCallback((asset) => {
    if (!asset) return 'Choose a wallet balance'
    return `${asset.native ? activeNetworkLabel : (asset.name || asset.symbol || 'Token')} · ${tokenDisplayAmount(asset)} ${asset.symbol || ''}`.trim()
  }, [activeNetworkLabel])

  const getWalletGasLevelSubtitle = useCallback((quote) => {
    if (!quote) return ''
    return `~${formatUsd(quote.usdCost || 0, 4)}`
  }, [])

  const canEstimateWalletWithdrawGas = useMemo(() => {
    if (!withdrawOpen || !selectedWalletWithdrawAsset || !ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') return false
    if (!walletWithdrawDraft.amount) return false
    if (!isValidEvmAddress(walletWithdrawDraft.destinationAddress)) return false
    const amountBaseUnits = parseAmountToBaseUnits(walletWithdrawDraft.amount, selectedWalletWithdrawAsset.decimals || 18)
    return amountBaseUnits !== null && amountBaseUnits > 0n
  }, [ethereumWallet?.address, selectedWalletWithdrawAsset, walletWithdrawDraft.amount, walletWithdrawDraft.destinationAddress, withdrawOpen])

  const estimateGasLevels = useCallback(async (provider, txRequest, chainId) => {
    const priceKey = String(getChainSymbol(chainMap.get(chainId) || selectedChain)).trim().toUpperCase()
    return estimateWalletGasLevels({
      provider,
      chainId,
      txRequest: {
        ...txRequest,
        chainId: toRpcQuantity(chainId)
      },
      from: txRequest.from || ethereumWallet?.address,
      nativeTokenPrice: assetPrices[priceKey]?.usd || 0
    })
  }, [assetPrices, ethereumWallet?.address, selectedChain])

  useEffect(() => {
    if (!swapSupported) {
      setSwapFromKey('')
      setSwapToKey('')
      resetSwapResult()
      return
    }

    const fromFallback = swapTokens[0] || null
    const fromKey = getSwapTokenKey(fromFallback, selectedChainId)
    const toFallback = swapDestinationTokens.find((token) => getSwapTokenKey(token, selectedChainId) !== fromKey) || null

    if (fromFallback && !swapTokens.some((token) => getSwapTokenKey(token, selectedChainId) === swapFromKey)) {
      setSwapFromKey(fromKey)
      setSwapFromSymbol(fromFallback.symbol)
    }

    if (toFallback && !swapDestinationTokens.some((token) => getSwapTokenKey(token, selectedChainId) === swapToKey) && getSwapTokenKey(toFallback, selectedChainId) !== fromKey) {
      setSwapToKey(getSwapTokenKey(toFallback, selectedChainId))
      setSwapToSymbol(toFallback.symbol)
    }
  }, [resetSwapResult, selectedChainId, swapDestinationTokens, swapFromKey, swapSupported, swapToKey, swapTokens])

  useEffect(() => {
    if (!rabbyGasDepositTokens.length) {
      setRabbyGasDepositDraft((current) => ({ ...current, tokenKey: '' }))
      return
    }
    if (!rabbyGasDepositTokens.some((token) => token.key === rabbyGasDepositDraft.tokenKey)) {
      setRabbyGasDepositDraft((current) => ({ ...current, tokenKey: rabbyGasDepositTokens[0].key }))
    }
  }, [rabbyGasDepositDraft.tokenKey, rabbyGasDepositTokens])

  useEffect(() => {
    if (!rabbyGasWithdrawList.length) {
      setRabbyGasWithdrawDraft({ address: '', chainId: '' })
      return
    }

    const address = selectedRabbyGasWithdrawAddress?.recharge_addr || rabbyGasWithdrawList[0]?.recharge_addr || ''
    const chainList = selectedRabbyGasWithdrawAddress?.recharge_chain_list || rabbyGasWithdrawList[0]?.recharge_chain_list || []
    const chainId = chainList.some((chain) => chain.chain_id === rabbyGasWithdrawDraft.chainId)
      ? rabbyGasWithdrawDraft.chainId
      : (chainList[0]?.chain_id || '')

    if (address !== rabbyGasWithdrawDraft.address || chainId !== rabbyGasWithdrawDraft.chainId) {
      setRabbyGasWithdrawDraft({ address, chainId })
    }
  }, [rabbyGasWithdrawDraft.address, rabbyGasWithdrawDraft.chainId, rabbyGasWithdrawList, selectedRabbyGasWithdrawAddress])

  useEffect(() => {
    if (!walletTransferAssets.length) {
      setWalletWithdrawDraft((current) => ({ ...current, assetKey: '' }))
      return
    }

    setWalletWithdrawDraft((current) => {
      const hasCurrentAsset = walletTransferAssets.some((asset) => asset.key === current.assetKey)
      const nextGasMode = current.gasMode === 'gas_account' && !hasRabbyGasSession
        ? 'native'
        : current.gasMode === 'native' && hasRabbyGasSession
          ? 'gas_account'
          : current.gasMode
      return {
        ...current,
        assetKey: hasCurrentAsset ? current.assetKey : walletTransferAssets[0].key,
        gasMode: nextGasMode
      }
    })
  }, [hasRabbyGasSession, walletTransferAssets])

  useEffect(() => {
    if (!canEstimateWalletWithdrawGas) {
      setWalletWithdrawGasQuotes([])
      setWalletWithdrawGasError(null)
      return
    }

    const amountBaseUnits = parseAmountToBaseUnits(walletWithdrawDraft.amount, selectedWalletWithdrawAsset.decimals || 18)

    const txRequest = selectedWalletWithdrawAsset.native
      ? {
          from: ethereumWallet.address,
          to: walletWithdrawDraft.destinationAddress.trim(),
          value: toHexQuantity(amountBaseUnits)
        }
      : {
          from: ethereumWallet.address,
          to: normalizeTokenAddress(selectedWalletWithdrawAsset.address),
          data: encodeErc20TransferData(walletWithdrawDraft.destinationAddress.trim(), amountBaseUnits),
          value: '0x0'
        }

    let cancelled = false
    setWalletWithdrawGasError(null)
    setWalletWithdrawGasQuotes([])

    ethereumWallet.getEthereumProvider()
      .then((provider) => estimateGasLevels(provider, txRequest, selectedChainId))
      .then((quotes) => {
        if (cancelled) return
        setWalletWithdrawGasQuotes(quotes)
      })
      .catch((err) => {
        if (cancelled) return
        setWalletWithdrawGasQuotes([])
        setWalletWithdrawGasError(err.message || 'Failed to estimate network fee')
      })

    return () => {
      cancelled = true
    }
  }, [canEstimateWalletWithdrawGas, estimateGasLevels, ethereumWallet, selectedChainId, selectedWalletWithdrawAsset, walletWithdrawDraft.amount, walletWithdrawDraft.destinationAddress])

  const swapFromToken = useMemo(() => {
    if (!swapTokens.length) return null
    return swapTokens.find((token) => getSwapTokenKey(token, selectedChainId) === swapFromKey) || swapTokens.find((token) => token.symbol === swapFromSymbol) || swapTokens[0] || null
  }, [selectedChainId, swapFromKey, swapFromSymbol, swapTokens])

  const swapToToken = useMemo(() => {
    if (!swapDestinationTokens.length) return null
    const fromKey = getSwapTokenKey(swapFromToken, selectedChainId)
    const fallback = swapDestinationTokens.find((token) => getSwapTokenKey(token, selectedChainId) !== fromKey) || null
    return swapDestinationTokens.find((token) => getSwapTokenKey(token, selectedChainId) === swapToKey && getSwapTokenKey(token, selectedChainId) !== fromKey) || swapDestinationTokens.find((token) => token.symbol === swapToSymbol && getSwapTokenKey(token, selectedChainId) !== fromKey) || fallback
  }, [selectedChainId, swapDestinationTokens, swapFromToken, swapToKey, swapToSymbol])

  const swapReceiveTokens = useMemo(() => {
    const sourceKey = getSwapTokenKey(swapFromToken, selectedChainId)
    return swapDestinationTokens.filter((token) => getSwapTokenKey(token, selectedChainId) !== sourceKey)
  }, [selectedChainId, swapDestinationTokens, swapFromToken])

  const portfolioSummaryText = showPortfolioValue
    ? formatUsd(portfolioSummary, 2)
    : '•••'

  const depositQrSvg = useMemo(() => {
    if (!ethereumWallet?.address) return null

    try {
      const qr = qrcode(0, 'M')
      qr.addData(ethereumWallet.address)
      qr.make()
      return qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true })
    } catch {
      return null
    }
  }, [ethereumWallet?.address])

  useEffect(() => {
    let cancelled = false
    const localSession = loadRabbyGasAccountSession(ethereumWallet?.address)

    setRabbyGasSessionLoading(Boolean(ethereumWallet?.address))
    setRabbyGasSession(localSession)
    const cached = loadRabbyGasSnapshot(ethereumWallet?.address)
    setRabbyGasInfo(cached?.account || null)
    setRabbyGasHistory(Array.isArray(cached?.history) ? cached.history : [])
    setRabbyGasWithdrawList(Array.isArray(cached?.withdrawList) ? cached.withdrawList : [])
    setRabbyGasTxCheck(null)
    setRabbyGasError(null)
    setRabbyGasMessage(null)

    if (!ethereumWallet?.address) {
      setRabbyGasSessionLoading(false)
      return
    }

    fetchSavedRabbyGasAccountSession()
      .then((savedSession) => {
        if (cancelled) return
        if (savedSession?.sig && savedSession?.accountId) {
          saveRabbyGasAccountSession(ethereumWallet.address, savedSession)
          setRabbyGasSession(savedSession)
          setRabbyGasSessionLoading(false)
          return
        }

        if (localSession?.sig && localSession?.accountId) {
          saveRabbyGasAccountSessionToBackend(localSession).catch(() => {})
        }
        setRabbyGasSessionLoading(false)
      })
      .catch(() => {
        if (localSession?.sig && localSession?.accountId) {
          saveRabbyGasAccountSessionToBackend(localSession).catch(() => {})
        }
        setRabbyGasSessionLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [ethereumWallet?.address])

  const buildSwapRequestBody = useCallback(() => {
    if (!ethereumWallet?.address) throw new Error('Embedded Wallet Not Available')
    if (!swapSupported) throw new Error('Swaps are unavailable on this network')
    if (!swapFromToken || !swapToToken) throw new Error('Choose both swap tokens')
    const amountBaseUnits = parseAmountToBaseUnits(swapAmount, swapFromToken.decimals || 18)
    if (!amountBaseUnits || amountBaseUnits <= 0n) throw new Error('Enter a valid swap amount')
    const tokenIn = getSwapTokenAddress(swapFromToken)
    const tokenOut = getSwapTokenAddress(swapToToken)
    if (!tokenIn || !tokenOut || tokenIn === tokenOut) throw new Error('Choose two different tokens')
    return {
      type: 'EXACT_INPUT',
      amount: amountBaseUnits.toString(),
      tokenInChainId: normalizeChainId(selectedChainId),
      tokenOutChainId: normalizeChainId(selectedChainId),
      tokenIn,
      tokenOut,
      swapper: ethereumWallet.address,
      provider: swapProvider === 'auto' ? undefined : swapProvider,
      slippageTolerance: 0.5,
      routingPreference: 'BEST_PRICE',
      protocols: ['V2', 'V3', 'V4']
    }
  }, [ethereumWallet?.address, selectedChainId, swapAmount, swapFromToken, swapProvider, swapSupported, swapToToken])

  const normalizeSwapQuote = useCallback((payload) => {
    const quote = payload?.quote || payload
    const output = payload?.est_output_amount || quote?.output?.amount || quote?.aggregatedOutputs?.[0]?.amount || quote?.buyAmount || quote?.toTokenAmount || quote?.data?.routeSummary?.amountOut || null
    const minimum = payload?.minimum_output_amount || quote?.output?.minimumAmount || quote?.output?.minAmount || quote?.aggregatedOutputs?.[0]?.minAmount || quote?.minBuyAmount || quote?.toTokenAmount || quote?.data?.routeSummary?.amountOut || null
    return { ...payload, quote, est_output_amount: output, minimum_output_amount: minimum }
  }, [])

  const swapQuoteHasSimulationError = useCallback((payload) => {
    const values = []
    const collect = (value) => {
      if (Array.isArray(value)) {
        values.push(...value)
        return
      }
      if (value && typeof value === 'object') {
        for (const [key, nested] of Object.entries(value)) {
          if (key === 'txFailureReasons' || key === 'tx_failure_reasons') collect(nested)
          else if (nested && typeof nested === 'object') collect(nested)
        }
      }
    }
    collect(payload)
    return values.some((value) => String(value || '').toUpperCase() === 'SIMULATION_ERROR')
  }, [])

  const requestSwapQuote = useCallback(async (requestBody) => {
    const requestedProvider = swapProvider === 'auto' ? null : swapProvider
    const providers = requestedProvider ? [requestedProvider] : ['uniswap', '0x', 'kyberswap']
    const errors = []

    for (let index = 0; index < providers.length; index++) {
      const provider = providers[index]
      const body = requestedProvider || index === 0
        ? requestBody
        : { ...requestBody, provider }

      try {
        const payload = normalizeSwapQuote(await fetchJson(api.swap.quote, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        }))

        if (swapQuoteHasSimulationError(payload)) {
          errors.push(`${provider}: provider simulation failed`)
          continue
        }

        return payload
      } catch (error) {
        errors.push(`${provider}: ${error.message || 'quote failed'}`)
      }
    }

    throw new Error(errors.length ? errors.join('; ') : 'No swap provider returned a usable quote')
  }, [normalizeSwapQuote, swapProvider, swapQuoteHasSimulationError])

  const fetchSwapQuote = useCallback(async () => {
    setSwapActionState('idle')
    setSwapAction(null)
    setSwapActionError(null)
    setSwapQuoteError(null)
    let requestBody
    try {
      requestBody = buildSwapRequestBody()
    } catch (err) {
      setSwapQuote(null)
      setSwapQuoteState('idle')
      setSwapQuoteError(err.message || 'Unable to build swap request')
      return
    }
    setSwapQuoteState('loading')
    try {
      const payload = await requestSwapQuote(requestBody)
      setSwapQuote(payload)
      setSwapQuoteState('ready')
    } catch (err) {
      setSwapQuote(null)
      setSwapQuoteState('error')
      setSwapQuoteError(err.message || 'Quote request failed')
    }
  }, [buildSwapRequestBody, requestSwapQuote])

  const executeSwap = useCallback(async () => {
    let requestBody
    try {
      requestBody = buildSwapRequestBody()
    } catch (err) {
      setSwapActionError(err.message || 'Unable to build swap request')
      return
    }
    setSwapActionState('loading')
    setSwapActionError(null)

    try {
      let quotePayload = swapQuote
      if (!quotePayload?.quote) {
        quotePayload = await requestSwapQuote(requestBody)
        setSwapQuote(quotePayload)
      }
      if (swapQuoteHasSimulationError(quotePayload)) {
        throw new Error('This swap quote failed provider simulation. Choose another route.')
      }

      const provider = await ethereumWallet.getEthereumProvider()
      const readProvider = createReadRpcProvider(provider, selectedChainId, { fallbackOnAnyError: true })
      const sendRawSwapTransaction = async (transaction) => {
        const balance = parseBigIntValue(await readNativeBalance(readProvider, ethereumWallet.address))
        const estimateRequest = { ...transaction, from: ethereumWallet.address }
        delete estimateRequest.gas
        delete estimateRequest.gasLimit
        let gasLimit
        try {
          const estimatedGas = await readProvider.request({
            method: 'eth_estimateGas',
            params: [estimateRequest]
          })
          gasLimit = parseBigIntValue(estimatedGas)
        } catch (error) {
          const message = String(error?.message || error || '').toLowerCase()
          const insufficientFunds = message.includes('insufficient funds') || message.includes('gas required exceeds allowance')
          if (!insufficientFunds) throw error

          // Nodes reject eth_estimateGas when the wallet cannot currently pay
          // gas. Preserve the provider/quote estimate for Gas Account.
          const quoteGas = quotePayload?.quote?.gasEstimates?.[0]?.gasLimit ||
            quotePayload?.quote?.quote?.gasEstimates?.[0]?.gasLimit ||
            quotePayload?.quote?.gasUseEstimate ||
            quotePayload?.quote?.quote?.gasUseEstimate
          const isApproval = String(transaction.data || '').toLowerCase().startsWith('0x095ea7b3')
          const fallbackGas = transaction.gas || transaction.gasLimit || quoteGas || (isApproval ? '0x186a0' : '0x15f90')
          gasLimit = parseBigIntValue(fallbackGas)
        }
        if (gasLimit <= 0n) throw new Error('Swap transaction gas estimation returned zero')
        if (!prepareWalletTransactionRef.current) {
          throw new Error('Wallet transaction preparation is not ready')
        }
        const preparedTransaction = await prepareWalletTransactionRef.current(provider, {
          ...transaction,
          from: ethereumWallet.address,
          chainId: selectedChainId,
          gas: toRpcQuantity(gasLimit)
        }, selectedChainId)
        const gasPrice = parseBigIntValue(preparedTransaction.maxFeePerGas || preparedTransaction.gasPrice)
        if (gasPrice <= 0n) throw new Error('Swap transaction gas price is unavailable')
        const gasCost = gasLimit * gasPrice
        const transactionValue = parseBigIntValue(preparedTransaction.value || 0)
        const requiredNativeBalance = gasCost + transactionValue
        let gasSession = rabbyGasSession
        if (balance < requiredNativeBalance && (!gasSession?.sig || !gasSession?.accountId)) {
          const savedSession = await fetchSavedRabbyGasAccountSession().catch(() => null)
          if (savedSession?.sig && savedSession?.accountId) {
            saveRabbyGasAccountSession(ethereumWallet.address, savedSession)
            setRabbyGasSession(savedSession)
            gasSession = savedSession
          }
        }
        const hasGasAccount = Boolean(gasSession?.sig && gasSession?.accountId)
        if (transactionValue > 0n && balance < transactionValue) {
          throw new Error('Not enough native token to swap this amount')
        }
        if (balance < requiredNativeBalance && rabbyGasSessionLoading) {
          throw new Error('Gas Account is still loading. Please try the swap again.')
        }
        if (balance < requiredNativeBalance && !hasGasAccount) {
          throw new Error(`Not enough ${activeNetworkLogo} for swap gas`)
        }
        const gasMode = balance < requiredNativeBalance
          ? hasGasAccount
            ? 'gas_account'
            : 'native'
          : 'native'
        const latestBalance = parseBigIntValue(await readNativeBalance(readProvider, ethereumWallet.address))
        if (gasMode === 'native' && latestBalance < requiredNativeBalance) {
          if (rabbyGasSessionLoading) {
            throw new Error('Gas Account is still loading. Please try the swap again.')
          }
          let currentGasSession = gasSession
          if (!currentGasSession?.sig || !currentGasSession?.accountId) {
            const savedSession = await fetchSavedRabbyGasAccountSession().catch(() => null)
            if (savedSession?.sig && savedSession?.accountId) {
              saveRabbyGasAccountSession(ethereumWallet.address, savedSession)
              setRabbyGasSession(savedSession)
              currentGasSession = savedSession
            }
          }
          if (currentGasSession?.sig && currentGasSession?.accountId) {
            return sendWalletTransactionRef.current(preparedTransaction, {
              chainId: selectedChainId,
              gasMode: 'gas_account',
              requiredNativeBalance
            })
          }
          throw new Error(`Not enough ${activeNetworkLogo} for swap gas`)
        }
        const sendPreparedTransaction = (mode) => sendWalletTransactionRef.current(preparedTransaction, {
          chainId: selectedChainId,
          gasMode: mode,
          requiredNativeBalance
        })

        try {
          return await sendPreparedTransaction(gasMode)
        } catch (error) {
          const message = String(error?.message || error || '').toLowerCase()
          const insufficientNativeGas = message.includes('insufficient funds') && message.includes('gas')
          if (gasMode !== 'gas_account' && hasGasAccount && insufficientNativeGas) {
            return sendPreparedTransaction('gas_account')
          }
          throw error
        }
      }

      if (!swapFromToken.native) {
        let approvalTransactions = []
        if (quotePayload.provider === 'uniswap') {
          const approval = await fetchJson(api.uniswap.checkApproval, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ walletAddress: ethereumWallet.address, amount: requestBody.amount, token: requestBody.tokenIn, tokenOut: requestBody.tokenOut, chainId: selectedChainId, tokenOutChainId: selectedChainId })
          })
          approvalTransactions = [approval?.cancel, approval?.approval].filter((item) => item?.to && item?.data)
        } else if (quotePayload.approvalTarget) {
          const allowanceData = `0xdd62ed3e${ethereumWallet.address.toLowerCase().replace(/^0x/, '').padStart(64, '0')}${quotePayload.approvalTarget.toLowerCase().replace(/^0x/, '').padStart(64, '0')}`
          const allowance = parseBigIntValue(await readProvider.request({
            method: 'eth_call',
            params: [{ to: requestBody.tokenIn, data: allowanceData }, 'latest']
          }))
          if (allowance < BigInt(requestBody.amount)) {
            approvalTransactions = [{
              to: requestBody.tokenIn,
              data: encodeErc20ApproveData(quotePayload.approvalTarget, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
              value: '0x0'
            }]
          }
        }
        for (const transaction of approvalTransactions) {
          const hash = await sendRawSwapTransaction(transaction)
          const receipt = await waitForTransactionReceipt(readProvider, hash)
          if (String(receipt?.status || '').toLowerCase() === '0x0' || receipt?.status === 0) throw new Error('Token approval transaction failed')
        }
      }

      const response = await fetchJson(api.swap.build, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request: requestBody, quote: quotePayload })
      })
      if (!response?.swap?.to || !response?.swap?.data) throw new Error('Swap provider returned no transaction')
      const hash = await sendRawSwapTransaction(response.swap)
      setSwapAction({ id: hash, txHash: hash, status: 'pending', requestId: response.requestId })
      const receipt = await waitForTransactionReceipt(readProvider, hash)
      if (String(receipt?.status || '').toLowerCase() === '0x0' || receipt?.status === 0) throw new Error('Swap transaction failed')
      setSwapAction({ id: hash, txHash: hash, status: 'succeeded', requestId: response.requestId })
      setSwapActionState('succeeded')
      await reloadBalances({ preferPublic: true })
    } catch (err) {
      setSwapActionState('error')
      setSwapActionError(err.message || 'Swap failed')
    }
  }, [activeNetworkLogo, buildSwapRequestBody, ethereumWallet, rabbyGasSession, rabbyGasSessionLoading, reloadBalances, requestSwapQuote, selectedChainId, swapFromToken, swapQuote, swapQuoteHasSimulationError])

  useEffect(() => {
    if (!swapSupported || !swapFromToken || !swapToToken || !String(swapAmount || '').trim()) {
      setSwapQuote(null)
      setSwapQuoteState('idle')
      return undefined
    }
    const timeoutId = window.setTimeout(fetchSwapQuote, 500)
    return () => window.clearTimeout(timeoutId)
  }, [fetchSwapQuote, swapAmount, swapFromToken, swapSupported, swapToToken])

  const swapSourceBalance = useMemo(() => {
    if (!swapFromToken) return null
    return tokenDisplayAmount(swapFromToken)
  }, [swapFromToken])

  const swapQuoteLabel = swapQuote?.est_output_amount
    ? `${formatUnits(swapQuote.est_output_amount, swapToToken?.decimals || 18, 6)} ${swapToToken?.symbol || ''}`.trim()
    : 'n/a'
  const swapMinimumLabel = swapQuote?.minimum_output_amount
    ? `${formatUnits(swapQuote.minimum_output_amount, swapToToken?.decimals || 18, 6)} ${swapToToken?.symbol || ''}`.trim()
    : 'n/a'
  const swapFeeLabel = swapQuote?.fee?.amount
    ? `${formatUnits(swapQuote.fee.amount, swapToToken?.decimals || 18, 8)} ${swapToToken?.symbol || ''} (${swapQuote.fee.percentage || 0.5}%)`.trim()
    : '0.5%'

  const swapToUsdValue = useMemo(() => {
    if (!swapQuote?.est_output_amount || !swapToToken) return null
    const priceKey = String(swapToToken.cmcSymbol || swapToToken.symbol || '').trim().toUpperCase()
    const market = assetPrices[priceKey] || null
    const usdPrice = toDecimal(market?.usd)
    const amount = toDecimal(formatUnits(swapQuote.est_output_amount, swapToToken.decimals || 18, 8))
    if (!usdPrice || !amount) return null
    return amount.mul(usdPrice).toString()
  }, [assetPrices, swapQuote?.est_output_amount, swapToToken])

  const swapMinimumUsdValue = useMemo(() => {
    if (!swapQuote?.minimum_output_amount || !swapToToken) return null
    const priceKey = String(swapToToken.cmcSymbol || swapToToken.symbol || '').trim().toUpperCase()
    const market = assetPrices[priceKey] || null
    const usdPrice = toDecimal(market?.usd)
    const amount = toDecimal(formatUnits(swapQuote.minimum_output_amount, swapToToken.decimals || 18, 8))
    if (!usdPrice || !amount) return null
    return amount.mul(usdPrice).toString()
  }, [assetPrices, swapQuote?.minimum_output_amount, swapToToken])

  const selectSwapToken = useCallback((field, token) => {
    if (!token) return
    const tokenKey = getSwapTokenKey(token, selectedChainId)
    const oppositeKey = field === 'from'
      ? getSwapTokenKey(swapToToken, selectedChainId)
      : getSwapTokenKey(swapFromToken, selectedChainId)
    if (tokenKey === oppositeKey) return

    if (field === 'from') {
      setSwapFromKey(tokenKey)
      setSwapFromSymbol(token.symbol)
    } else {
      setSwapToKey(tokenKey)
      setSwapToSymbol(token.symbol)
    }
    resetSwapResult()
    const ref = field === 'from' ? swapFromPickerRef : swapToPickerRef
    setSwapPickerField(null)
    window.setTimeout(() => ref.current?.focus(), 0)
  }, [resetSwapResult, selectedChainId, swapFromToken, swapToToken])

  const closeSwapPicker = useCallback(() => {
    const field = swapPickerField
    setSwapPickerField(null)
    const ref = field === 'from' ? swapFromPickerRef : swapToPickerRef
    window.setTimeout(() => ref.current?.focus(), 0)
  }, [swapPickerField])

  const reverseSwap = useCallback(() => {
    if (!swapFromToken || !swapToToken) return
    const fromKey = getSwapTokenKey(swapFromToken, selectedChainId)
    const toKey = getSwapTokenKey(swapToToken, selectedChainId)
    setSwapFromKey(toKey)
    setSwapFromSymbol(swapToToken.symbol)
    setSwapToKey(fromKey)
    setSwapToSymbol(swapFromToken.symbol)
    resetSwapResult()
  }, [resetSwapResult, selectedChainId, swapFromToken, swapToToken])

  useEffect(() => {
    resetSwapResult()
  }, [resetSwapResult, selectedChainId])

  const swapPairIsValid = Boolean(
    swapFromToken &&
    swapToToken &&
    getSwapTokenKey(swapFromToken, selectedChainId) !== getSwapTokenKey(swapToToken, selectedChainId)
  )

  const applyRabbyGasSnapshot = useCallback((snapshot) => {
    const withdrawList = Array.isArray(snapshot?.withdrawList) ? snapshot.withdrawList : []
    setRabbyGasInfo(snapshot?.account || null)
    setRabbyGasHistory(Array.isArray(snapshot?.history) ? snapshot.history : [])
    setRabbyGasWithdrawList(withdrawList)
    return snapshot?.account || null
  }, [])

  const refreshRabbyGasAccount = useCallback(async (session = rabbyGasSession, options = {}) => {
    if (!session?.sig || !session?.accountId) return null
    const force = Boolean(options.force)
    const cached = loadRabbyGasSnapshot(session.accountId)
    const cachedIsFresh = cached && (Date.now() - cached.cachedAt) < RABBY_GAS_SNAPSHOT_TTL_MS

    if (!force && cachedIsFresh) {
      return applyRabbyGasSnapshot(cached)
    }

    if (rabbyGasRefreshInFlightRef.current) {
      return rabbyGasRefreshInFlightRef.current
    }

    setRabbyGasLoading(true)
    setRabbyGasError(null)

    const refreshPromise = (async () => {
      try {
        const infoPayload = await fetchRabbyGasAccountInfo(session)
        const historyPayload = await fetchRabbyGasAccountHistory({ ...session, start: 0, limit: 20 })
          .catch((err) => {
            if (isRabbyRateLimitError(err)) throw err
            return { history_list: cached?.history || [] }
          })
        const withdrawPayload = await fetchRabbyGasAccountWithdrawList(session)
          .catch((err) => {
            if (isRabbyRateLimitError(err)) throw err
            return { list: cached?.withdrawList || [] }
          })
        const withdrawList = Array.isArray(withdrawPayload)
          ? withdrawPayload
          : (withdrawPayload?.list || withdrawPayload?.withdraw_list || [])
        const snapshot = {
          account: infoPayload?.account || null,
          history: historyPayload?.history_list || [],
          withdrawList
        }
        saveRabbyGasSnapshot(session.accountId, snapshot)
        return applyRabbyGasSnapshot(snapshot)
      } catch (err) {
        if (isRabbyRateLimitError(err)) {
          if (cached) {
            setRabbyGasMessage(t('gas.rateLimitedCached'))
            return applyRabbyGasSnapshot(cached)
          }
          setRabbyGasError('Gas Account service is temporarily busy. Please try again shortly.')
          return null
        }
        setRabbyGasError(formatGasAccountMessage(err.message, 'Failed to load Gas Account'))
        return null
      } finally {
        setRabbyGasLoading(false)
        rabbyGasRefreshInFlightRef.current = null
      }
    })()

    rabbyGasRefreshInFlightRef.current = refreshPromise
    return refreshPromise
  }, [applyRabbyGasSnapshot, rabbyGasSession, t])

  useEffect(() => {
    if (!rabbyGasSession?.sig) return
    refreshRabbyGasAccount(rabbyGasSession)
  }, [rabbyGasSession, refreshRabbyGasAccount])

  const connectRabbyGasAccount = useCallback(async () => {
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      setRabbyGasError('Embedded Wallet Not Available')
      return
    }

    setRabbyGasActionState('loading')
    setRabbyGasError(null)
    setRabbyGasMessage(null)

    try {
      const signPayload = await fetchRabbyGasAccountSignText(ethereumWallet.address)
      const message = signPayload?.text
      if (!message) throw new Error('Gas Account sign request is unavailable')

      const provider = await ethereumWallet.getEthereumProvider()
      const sig = await provider.request({
        method: 'personal_sign',
        params: [message, ethereumWallet.address]
      })
      const login = await loginRabbyGasAccount({
        sig,
        accountId: ethereumWallet.address
      })
      if (!login?.success) throw new Error('Gas Account login rejected')

      const session = {
        sig,
        accountId: ethereumWallet.address,
        connectedAt: Date.now()
      }
      saveRabbyGasAccountSession(ethereumWallet.address, session)
      await saveRabbyGasAccountSessionToBackend(session)
      setRabbyGasSession(session)
      await refreshRabbyGasAccount(session, { force: true })
      setRabbyGasMessage(t('gas.connectedMessage'))
      setRabbyGasActionState('done')
    } catch (err) {
      setRabbyGasActionState('error')
      setRabbyGasError(formatGasAccountMessage(err.message, 'Gas Account connection failed'))
    }
  }, [ethereumWallet, refreshRabbyGasAccount, t])

  const disconnectRabbyGasAccount = useCallback(() => {
    clearRabbyGasAccountSession(ethereumWallet?.address)
    clearRabbyGasAccountSessionFromBackend().catch(() => {})
    setRabbyGasSession(null)
    setRabbyGasInfo(null)
    setRabbyGasHistory([])
    setRabbyGasWithdrawList([])
    setRabbyGasTxCheck(null)
    setRabbyGasMessage('Gas Account disconnected.')
    setRabbyGasError(null)
  }, [ethereumWallet?.address])

  const addHexQuantities = useCallback(async (provider, txRequest, chainId, options = {}) => {
    const readProvider = createReadRpcProvider(provider, chainId)
    const tx = {
      ...txRequest,
      from: txRequest.from || ethereumWallet?.address,
      chainId: toRpcQuantity(chainId)
    }

    const quantityFields = ['chainId', 'gas', 'gasLimit', 'nonce', 'value', 'gasPrice', 'maxFeePerGas', 'maxPriorityFeePerGas']
    for (const field of quantityFields) {
      if (tx[field] !== undefined && tx[field] !== null && tx[field] !== '') {
        tx[field] = toRpcQuantity(tx[field])
      }
    }
    if (!tx.gas && tx.gasLimit) tx.gas = tx.gasLimit
    delete tx.gasLimit

    // A type-2 transaction must not contain a legacy gasPrice. Some wallet
    // providers otherwise serialize gas as both gas_limit and gas_price.
    const isType2 = String(tx.type || '').toLowerCase() === '0x2' || tx.type === 2
    const hasInvalidGasPrice = tx.gasPrice && tx.gas && tx.gasPrice === tx.gas
    if (tx.maxFeePerGas || tx.maxPriorityFeePerGas || isType2 || hasInvalidGasPrice) {
      delete tx.gasPrice
      if (tx.maxFeePerGas || tx.maxPriorityFeePerGas || isType2) tx.type = '0x2'
    }

    if (!tx.gas && !tx.gasLimit) {
      tx.gas = await readProvider.request({
        method: 'eth_estimateGas',
        params: [tx]
      })
    }

    if (!tx.nonce) {
      tx.nonce = await readProvider.request({
        method: 'eth_getTransactionCount',
        params: [tx.from, 'pending']
      })
    }

    if (!tx.gasPrice && !tx.maxFeePerGas && !tx.maxPriorityFeePerGas) {
      const preferredLevel = String(options.gasLevel || 'normal').trim().toLowerCase()
      if (preferredLevel === 'custom') {
        const customGwei = toDecimal(options.customGwei)
        if (!customGwei || customGwei.lte(0)) {
          throw new Error('Enter a valid custom gwei')
        }
        const customWei = BigInt(customGwei.mul(1e9).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toFixed(0))
        tx.gasPrice = toRpcQuantity(customWei)
      } else {
        const gasLevels = await estimateGasLevels(provider, txRequest, chainId)
        const selectedLevel = gasLevels.find((item) => item.level === preferredLevel) || gasLevels.find((item) => item.level === 'normal') || gasLevels[0]
        if (selectedLevel?.support1559) {
          tx.maxPriorityFeePerGas = toRpcQuantity(selectedLevel.maxPriorityFeePerGas)
          tx.maxFeePerGas = toRpcQuantity(selectedLevel.maxFeePerGas)
          delete tx.gasPrice
          tx.type = '0x2'
        } else if (selectedLevel?.gasPrice) {
          tx.gasPrice = toRpcQuantity(selectedLevel.gasPrice)
          delete tx.maxFeePerGas
          delete tx.maxPriorityFeePerGas
          delete tx.type
        } else {
          tx.gasPrice = await readProvider.request({ method: 'eth_gasPrice', params: [] })
          delete tx.maxFeePerGas
          delete tx.maxPriorityFeePerGas
          delete tx.type
        }
      }
    }

    return tx
  }, [estimateGasLevels, ethereumWallet?.address])

  prepareWalletTransactionRef.current = addHexQuantities

  const sendEmbeddedWalletTransaction = useCallback(async (txRequest, options = {}) => {
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }

    const chainId = normalizeChainId(options.chainId || selectedChainId)
    const provider = options.provider || await ethereumWallet.getEthereumProvider()
    const txForWallet = await addHexQuantities(provider, txRequest, chainId, options)
    if (options.requiredNativeBalance !== undefined) {
      const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })
      const currentBalance = parseBigIntValue(await readNativeBalance(readProvider, ethereumWallet.address))
      const requiredBalance = parseBigIntValue(options.requiredNativeBalance)
      if (currentBalance < requiredBalance) {
        throw new Error('Not enough native token for swap gas')
      }
    }
    const txHash = await provider.request({
      method: 'eth_sendTransaction',
      params: [txForWallet]
    })

    if (!txHash) throw new Error('Wallet did not return a transaction hash')
    return {
      txHash,
      nonce: Number(BigInt(txForWallet.nonce || 0))
    }
  }, [addHexQuantities, ethereumWallet, selectedChainId])

  const sendWithRabbyGasAccount = useCallback(async (txRequest, options = {}) => {
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }

    const chainId = normalizeChainId(options.chainId || selectedChainId)
    setGasSponsorshipError(null)
    setGasSponsorshipActionId(null)
    setRabbyGasTxCheck(null)
    setWalletWithdrawProgress((current) => ({ ...current, phase: 'checking_gas', detail: null }))

    let gasSession = rabbyGasSession
    if (!gasSession?.sig || !gasSession?.accountId) {
      const savedSession = await fetchSavedRabbyGasAccountSession().catch(() => null)
      if (savedSession?.sig && savedSession?.accountId) {
        saveRabbyGasAccountSession(ethereumWallet.address, savedSession)
        setRabbyGasSession(savedSession)
        gasSession = savedSession
      }
    }

    if (!gasSession?.sig || !gasSession?.accountId) {
      throw new Error('Connect Gas Account before sending transactions')
    }

    const provider = options.provider || await ethereumWallet.getEthereumProvider()
    const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })
    const txForGasAccount = await addHexQuantities(provider, txRequest, chainId, options)
    const nativeBalanceBeforeSubmit = parseBigIntValue(await readNativeBalance(readProvider, ethereumWallet.address))
    const gasLimit = parseBigIntValue(txForGasAccount.gas || txForGasAccount.gasLimit)
    const gasPrice = parseBigIntValue(txForGasAccount.maxFeePerGas || txForGasAccount.gasPrice)
    const transactionValue = parseBigIntValue(txForGasAccount.value || 0)
    const requiredNativeBalance = options.requiredNativeBalance !== undefined
      ? parseBigIntValue(options.requiredNativeBalance)
      : (gasLimit * gasPrice) + transactionValue
    let gasCheck
    try {
      gasCheck = await checkRabbyGasAccountTxs({
        sig: gasSession.sig,
        accountId: gasSession.accountId,
        txList: [{ ...txForGasAccount, chainId }],
        onRateLimit: ({ delayMs }) => {
          const retrySeconds = Math.max(1, Math.ceil(delayMs / 1000))
          const detail = `Gas Account is busy. Retrying in ${retrySeconds} seconds…`
          setGasSponsorshipMessage(detail)
          setWalletWithdrawProgress((current) => ({ ...current, phase: 'checking_gas', detail }))
        }
      })
    } catch (error) {
      throw new Error(formatGasAccountMessage(error?.message, 'Gas Account eligibility check did not complete'))
    }
    setRabbyGasTxCheck(gasCheck)
    setGasSponsorshipMessage(null)

    if (gasCheck?.chain_not_support) {
      throw new Error('Gas Account does not support this network')
    }
    if (!gasCheck?.balance_is_enough) {
      const requiredCost = gasCheck?.gas_account_cost?.total_cost
      const currentBalance = rabbyGasInfo?.balance
      const requiredAmount = toDecimal(requiredCost)
      const balanceAmount = toDecimal(currentBalance)
      const requiredLabel = requiredAmount ? formatUsd(requiredAmount.toString(), 4) : null
      const balanceLabel = balanceAmount ? formatUsd(balanceAmount.toString(), 4) : null
      let suggestedTopUpLabel = null
      if (requiredAmount) {
        const shortfall = requiredAmount.minus(balanceAmount || 0)
        const positiveShortfall = shortfall.gt(0) ? shortfall : new Decimal(0)
        const proportionalBuffer = requiredAmount.mul('0.10')
        const safetyBuffer = proportionalBuffer.gt('0.10') ? proportionalBuffer : new Decimal('0.10')
        const suggestedTopUp = positiveShortfall
          .plus(safetyBuffer)
          .toDecimalPlaces(2, Decimal.ROUND_UP)
        suggestedTopUpLabel = formatUsd(suggestedTopUp.toString(), 2)
      }
      const costMessage = requiredLabel
        ? `Gas Account needs ${requiredLabel}${balanceLabel ? `; available ${balanceLabel}` : ''}.${suggestedTopUpLabel ? ` Suggested minimum top-up: ${suggestedTopUpLabel}.` : ''}`
        : 'Gas Account balance is not enough. Top up Gas Account & retry.'
      throw new Error(costMessage)
    }
    if (gasCheck?.err_msg) {
      throw new Error(formatGasAccountMessage(gasCheck.err_msg))
    }
    if (!gasCheck?.is_gas_account) {
      throw new Error('Gas Account does not support this transaction')
    }

    setGasSponsorshipStatus('rabby_signing')
    setWalletWithdrawProgress((current) => ({ ...current, phase: 'signing', detail: null }))
    let signedTransaction
    try {
      signedTransaction = await provider.request({
        method: 'eth_signTransaction',
        params: [txForGasAccount]
      })
    } catch (error) {
      throw new Error(`Wallet transaction signing failed: ${error?.message || 'request failed'}`)
    }
    const signedTransactionHash = await getSignedTransactionHash(signedTransaction)
    const signedRawTransaction = getSignedRawTransaction(signedTransaction)
    if (!signedTransactionHash) {
      throw new Error('Unable to derive the signed transaction hash')
    }

    setGasSponsorshipStatus('rabby_submitting')
    setGasSponsorshipMessage('Gas Account is funding gas & submitting the transaction…')
    let result
    try {
      result = await submitRabbyGasAccountSignedTransaction({
        sig: gasSession.sig,
        signedTransaction,
        txRequest: txForGasAccount,
        origin: window.location.origin || externalUrls.appOrigin
      })
    } catch (error) {
      throw new Error(`Gas Account submission failed: ${formatGasAccountMessage(error?.message, 'request failed')}`)
    }

    const actionId = result?.tx_id
    if (result?.err) {
      throw new Error(`Gas Account submission failed: ${formatGasAccountMessage(result.err)}`)
    }
    if (!actionId) {
      throw new Error(formatGasAccountMessage(result?.err, 'Gas Account submission returned no action ID'))
    }
    setGasSponsorshipActionId(actionId)

    setGasSponsorshipStatus('rabby_submitted')
    const requiresFunding = nativeBalanceBeforeSubmit < requiredNativeBalance
    if (requiresFunding) {
      setWalletWithdrawProgress((current) => ({ ...current, phase: 'funding', txHash: null }))
      setGasSponsorshipMessage('Gas Account is funding network gas…')
      await waitForRabbyGasFunding({
        initialBalance: nativeBalanceBeforeSubmit,
        readBalance: () => readNativeBalance(readProvider, ethereumWallet.address),
        hasBroadcastTransaction: async () => Boolean(await readProvider.request({
          method: 'eth_getTransactionByHash',
          params: [signedTransactionHash]
        }).catch(() => null)),
        onPoll: ({ remainingMs }) => {
          const remainingSeconds = Math.max(1, Math.ceil(remainingMs / 1000))
          setGasSponsorshipMessage(`Gas Account is funding network gas. Waiting up to ${remainingSeconds} seconds…`)
        }
      })
    }

    setWalletWithdrawProgress((current) => ({ ...current, phase: 'sending', txHash: null }))
    setGasSponsorshipMessage('Network gas is ready. Broadcasting transaction…')
    let broadcastHash = signedTransactionHash
    const existingTransaction = await readProvider.request({
      method: 'eth_getTransactionByHash',
      params: [signedTransactionHash]
    }).catch(() => null)

    if (!existingTransaction) {
      try {
        broadcastHash = await sendRawTransaction(chainId, signedRawTransaction) || signedTransactionHash
      } catch (error) {
        const transactionAfterError = await readProvider.request({
          method: 'eth_getTransactionByHash',
          params: [signedTransactionHash]
        }).catch(() => null)
        if (!transactionAfterError) throw error
      }
    }

    setWalletWithdrawProgress((current) => ({ ...current, phase: 'confirming', txHash: broadcastHash }))
    setGasSponsorshipMessage('Transaction broadcast. Waiting for confirmation…')
    refreshRabbyGasAccount(gasSession, { force: true }).catch(() => {})
    return broadcastHash
  }, [addHexQuantities, ethereumWallet, rabbyGasInfo?.balance, rabbyGasSession, refreshRabbyGasAccount, selectedChainId])

  const sendWalletTransaction = useCallback(async (txRequest, options = {}) => {
    const gasMode = String(options.gasMode || 'auto').trim().toLowerCase()
    const allowFallback = Boolean(options.allowFallback)

    if (gasMode === 'native') {
      const result = await sendEmbeddedWalletTransaction(txRequest, options)
      return result.txHash
    }

    if (gasMode === 'gas_account') {
      return sendWithRabbyGasAccount(txRequest, options)
    }

    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }

    const chainId = normalizeChainId(options.chainId || selectedChainId)
    const provider = options.provider || await ethereumWallet.getEthereumProvider()
    const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })
    const preparedTransaction = await addHexQuantities(provider, txRequest, chainId, options)
    const nativeBalance = await readNativeBalance(readProvider, ethereumWallet.address)
    const requiredNativeBalance = getRequiredNativeBalance(
      preparedTransaction,
      options.requiredNativeBalance
    )
    const preparedOptions = {
      ...options,
      chainId,
      provider,
      requiredNativeBalance
    }

    if (canPayWithNativeBalance({
      balance: nativeBalance,
      tx: preparedTransaction,
      requiredBalance: requiredNativeBalance
    })) {
      const result = await sendEmbeddedWalletTransaction(preparedTransaction, preparedOptions)
      return result.txHash
    }

    try {
      return await sendWithRabbyGasAccount(preparedTransaction, preparedOptions)
    } catch (err) {
      if (!allowFallback) throw err
      setGasSponsorshipMessage('Gas Account send failed. Falling back to wallet gas.')
      const result = await sendEmbeddedWalletTransaction(preparedTransaction, preparedOptions)
      return result.txHash
    }
  }, [addHexQuantities, ethereumWallet, selectedChainId, sendEmbeddedWalletTransaction, sendWithRabbyGasAccount])

  sendWalletTransactionRef.current = sendWalletTransaction

  const sendFiatP2pPayment = useCallback(async (order, callbacks = {}) => {
    const chainId = normalizeChainId(order?.chainId)
    const chain = chainMap.get(chainId)
    const tokenAddress = normalizeTokenAddress(order?.token?.address)
    const invoiceAddress = String(order?.invoiceAddress || '').trim()
    const amountBaseUnits = String(order?.amountBaseUnits || '')

    if (!chain) throw new Error('Unsupported P2P network')
    if (!isValidEvmAddress(tokenAddress) || !isValidEvmAddress(invoiceAddress)) {
      throw new Error('Invalid P2P invoice')
    }
    if (!/^\d+$/.test(amountBaseUnits) || BigInt(amountBaseUnits) <= 0n) {
      throw new Error('Invalid P2P amount')
    }
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }

    if (selectedChainId !== chainId) await switchChain(chain)
    const provider = await ethereumWallet.getEthereumProvider()
    const txHash = await sendWalletTransactionRef.current({
      from: ethereumWallet.address,
      to: tokenAddress,
      value: '0x0',
      data: encodeErc20TransferData(invoiceAddress, amountBaseUnits)
    }, {
      chainId,
      gasMode: 'auto'
    })
    callbacks.onSubmitted?.(txHash)
    const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })
    const receipt = await waitForTransactionReceipt(readProvider, txHash)
    if (String(receipt?.status).toLowerCase() === '0x0') {
      callbacks.onReverted?.(txHash)
      throw new Error('Stablecoin transfer reverted')
    }
    return txHash
  }, [ethereumWallet, selectedChainId, switchChain])

  const verifyFiatP2pOrder = useCallback(async (order) => {
    const chainId = normalizeChainId(order?.chainId)
    if (!chainMap.has(chainId)) throw new Error('Unsupported P2P network')
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }

    const provider = await ethereumWallet.getEthereumProvider()
    const readProvider = createReadRpcProvider(provider, chainId, {
      fallbackOnAnyError: true
    })
    return verifyFiatP2pInvoice(readProvider, order)
  }, [ethereumWallet])

  const checkFiatP2pInvoiceBalance = useCallback(async (order) => {
    const chainId = normalizeChainId(order?.chainId)
    const tokenAddress = normalizeTokenAddress(order?.token?.address)
    const invoiceAddress = String(order?.invoiceAddress || '').trim()
    const expectedBalance = String(order?.amountBaseUnits || '')

    if (!chainMap.has(chainId)) throw new Error('Unsupported P2P network')
    if (!isValidEvmAddress(tokenAddress) || !isValidEvmAddress(invoiceAddress)) {
      throw new Error('Invalid P2P invoice')
    }
    if (!/^\d+$/.test(expectedBalance) || BigInt(expectedBalance) <= 0n) {
      throw new Error('Invalid P2P amount')
    }
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }

    const provider = await ethereumWallet.getEthereumProvider()
    const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })
    await verifyFiatP2pInvoice(readProvider, order)
    const rawBalance = await readProvider.request({
      method: 'eth_call',
      params: [
        {
          to: tokenAddress,
          data: encodeBalanceOf(invoiceAddress)
        },
        'latest'
      ]
    })
    const balance = parseBigIntValue(rawBalance)

    return {
      status: classifyFiatP2pInvoiceBalance(balance, expectedBalance),
      balance: balance.toString(),
      expectedBalance
    }
  }, [ethereumWallet])

  const finalizeFiatP2pInvoice = useCallback(async (order, transactions) => {
    const chainId = normalizeChainId(order?.chainId)
    const chain = chainMap.get(chainId)
    if (!chain) throw new Error('Unsupported P2P network')
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }
    if (!transactions?.sweep?.to || !transactions?.sweep?.data) {
      throw new Error('Invalid P2P invoice transactions')
    }

    if (selectedChainId !== chainId) await switchChain(chain)
    const provider = await ethereumWallet.getEthereumProvider()
    const readProvider = createReadRpcProvider(provider, chainId, { fallbackOnAnyError: true })

    const sendInvoiceTransaction = async (transaction) => {
      if (!isValidEvmAddress(transaction?.to) || !/^0x[0-9a-f]+$/i.test(String(transaction?.data || ''))) {
        throw new Error('Invalid P2P invoice transaction')
      }
      const txHash = await sendWalletTransactionRef.current({
        from: ethereumWallet.address,
        to: transaction.to,
        value: transaction.value || '0x0',
        data: transaction.data
      }, {
        chainId,
        gasMode: 'auto'
      })
      const receipt = await waitForTransactionReceipt(readProvider, txHash)
      if (String(receipt?.status).toLowerCase() === '0x0') {
        throw new Error('P2P invoice transaction reverted')
      }
      return txHash
    }

    if (transactions.deploymentRequired) {
      if (!transactions.deploy) throw new Error('Invoice deployment transaction is missing')
      return sendInvoiceTransaction(transactions.deploy)
    }

    return sendInvoiceTransaction(transactions.sweep)
  }, [ethereumWallet, selectedChainId, switchChain])

  const reportRabbyGasTopUpTx = useCallback(async ({ txHash, amount }) => {
    const normalizedTxHash = String(txHash || '').trim()
    if (!/^0x[a-f0-9]{64}$/i.test(normalizedTxHash)) {
      throw new Error('Enter a valid transaction hash')
    }
    if (!rabbyGasSession?.sig || !rabbyGasSession?.accountId) {
      throw new Error('Connect Gas Account first')
    }
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      throw new Error('Embedded Wallet Not Available')
    }
    if (!rabbyGasChainServerId) {
      throw new Error('Gas Account top-up is not available on this network')
    }

    const amountBaseUnits = parseAmountToBaseUnits(amount, selectedRabbyGasDepositToken?.decimals || 6)
    if (amountBaseUnits === null || amountBaseUnits <= 0n) {
      throw new Error('Enter the top-up amount before reporting the tx')
    }

    const provider = await ethereumWallet.getEthereumProvider()
    const readProvider = createReadRpcProvider(provider, selectedChainId)
    await waitForTransactionReceipt(readProvider, normalizedTxHash)
    const tx = await readProvider.request({
      method: 'eth_getTransactionByHash',
      params: [normalizedTxHash]
    })
    if (!tx?.nonce) throw new Error('Unable to resolve top-up transaction nonce')

    const recharge = await rechargeRabbyGasAccount({
      sig: rabbyGasSession.sig,
      accountId: rabbyGasSession.accountId,
      txHash: normalizedTxHash,
      chainServerId: rabbyGasChainServerId,
      amountUsd: amount,
      userAddress: ethereumWallet.address,
      nonce: Number(BigInt(tx.nonce))
    })

    if (recharge?.success === false || recharge?.error) {
      throw new Error(formatGasAccountMessage(recharge?.error || recharge?.msg, 'Gas Account rejected the top-up report'))
    }

    setRabbyGasDepositDraft((current) => ({ ...current, reportTxHash: '' }))
    setRabbyGasMessage(`Top-up reported to Rabby: ${shortenValue(normalizedTxHash, 8, 6)}`)
    await refreshRabbyGasAccount(rabbyGasSession, { force: true })
    return recharge
  }, [ethereumWallet, rabbyGasChainServerId, rabbyGasSession, refreshRabbyGasAccount, selectedChainId, selectedRabbyGasDepositToken?.decimals])

  const submitRabbyGasTopUp = useCallback(async () => {
    if (!rabbyGasSession?.sig || !rabbyGasSession?.accountId) {
      setRabbyGasError('Connect Gas Account first')
      return
    }
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      setRabbyGasError('Embedded Wallet Not Available')
      return
    }
    if (!rabbyGasChainServerId || !rabbyGasDepositAddress) {
      setRabbyGasError('Gas Account top-up is not available on this network')
      return
    }
    if (!selectedRabbyGasDepositToken?.address) {
      setRabbyGasError('Select a supported stablecoin')
      return
    }

    const amountBaseUnits = parseAmountToBaseUnits(rabbyGasDepositDraft.amount, selectedRabbyGasDepositToken.decimals || 6)
    if (amountBaseUnits === null || amountBaseUnits <= 0n) {
      setRabbyGasError('Enter a valid top-up amount')
      return
    }

    const availableRaw = parseBigIntValue(selectedRabbyGasDepositBalance?.rawBalance)
    if (availableRaw < amountBaseUnits) {
      setRabbyGasError(`Not enough ${selectedRabbyGasDepositToken.symbol} on ${activeNetworkLabel}`)
      return
    }

    setRabbyGasActionState('loading')
    setRabbyGasError(null)
    setRabbyGasMessage(null)
    let sentTxHash = ''

    try {
      const provider = await ethereumWallet.getEthereumProvider()
      const readProvider = createReadRpcProvider(provider, selectedChainId)
      const nativeGasBalance = parseBigIntValue(await readNativeBalance(readProvider, ethereumWallet.address))
      if (nativeGasBalance <= 0n) {
        throw new Error(`Top-up requires ${activeNetworkLogo} for network gas. Add a small amount of ${activeNetworkLogo} to this wallet first.`)
      }

      const txRequest = {
        from: ethereumWallet.address,
        to: normalizeTokenAddress(selectedRabbyGasDepositToken.address),
        data: encodeErc20TransferData(rabbyGasDepositAddress, amountBaseUnits),
        value: '0x0'
      }

      const { txHash } = await sendEmbeddedWalletTransaction(txRequest, {
        chainId: selectedChainId,
        provider
      })
      sentTxHash = txHash
      await reportRabbyGasTopUpTx({
        txHash,
        amount: rabbyGasDepositDraft.amount
      })

      setRabbyGasDepositDraft((current) => ({ ...current, amount: '' }))
      setRabbyGasMessage(`Top-up sent & reported to Rabby: ${shortenValue(txHash, 8, 6)}`)
      setRabbyGasActionState('done')
      await Promise.all([refreshRabbyGasAccount(rabbyGasSession, { force: true }), reloadBalances()])
    } catch (err) {
      if (sentTxHash) {
        setRabbyGasDepositDraft((current) => ({ ...current, reportTxHash: sentTxHash }))
      }
      setRabbyGasActionState('error')
      setRabbyGasError(formatGasAccountMessage(err.message, 'Gas Account top-up failed'))
    }
  }, [activeNetworkLabel, activeNetworkLogo, ethereumWallet, rabbyGasChainServerId, rabbyGasDepositAddress, rabbyGasDepositDraft.amount, rabbyGasSession, refreshRabbyGasAccount, reloadBalances, reportRabbyGasTopUpTx, selectedChainId, selectedRabbyGasDepositBalance, selectedRabbyGasDepositToken, sendEmbeddedWalletTransaction])

  const submitRabbyGasWithdraw = useCallback(async () => {
    if (!rabbyGasSession?.sig || !rabbyGasSession?.accountId) {
      setRabbyGasError('Connect Gas Account first')
      return
    }
    if (!selectedRabbyGasWithdrawAddress?.recharge_addr || !selectedRabbyGasWithdrawChain?.chain_id) {
      setRabbyGasError('Select a withdraw destination')
      return
    }

    const balance = toDecimal(rabbyGasInfo?.balance) || new Decimal(0)
    const withdrawable = toDecimal(rabbyGasInfo?.withdrawable_balance) || balance
    const routeLimit = toDecimal(selectedRabbyGasWithdrawChain.withdraw_limit) || withdrawable
    const amountUsd = Decimal.min(withdrawable, routeLimit)
    if (amountUsd.lte(0)) {
      setRabbyGasError('No Gas Account balance available to withdraw')
      return
    }

    setRabbyGasActionState('loading')
    setRabbyGasError(null)
    setRabbyGasMessage(null)

    try {
      const result = await withdrawRabbyGasAccount({
        sig: rabbyGasSession.sig,
        accountId: rabbyGasSession.accountId,
        amountUsd: amountUsd.toString(),
        userAddress: selectedRabbyGasWithdrawAddress.recharge_addr,
        chainServerId: selectedRabbyGasWithdrawChain.chain_id,
        feeUsd: selectedRabbyGasWithdrawChain.withdraw_fee || 0
      })

      if (result?.success === false || result?.error) {
        throw new Error(formatGasAccountMessage(result?.error, 'Gas Account rejected the withdrawal'))
      }

      setRabbyGasMessage(`Withdrawal requested for ${formatUsd(amountUsd, 4)}.`)
      setRabbyGasActionState('done')
      await refreshRabbyGasAccount(rabbyGasSession, { force: true })
    } catch (err) {
      setRabbyGasActionState('error')
      setRabbyGasError(formatGasAccountMessage(err.message, 'Gas Account withdrawal failed'))
    }
  }, [rabbyGasInfo?.balance, rabbyGasInfo?.withdrawable_balance, rabbyGasSession, refreshRabbyGasAccount, selectedRabbyGasWithdrawAddress, selectedRabbyGasWithdrawChain])

  const submitWalletWithdraw = useCallback(async (options = {}) => {
    const skipRiskCheck = Boolean(options?.skipRiskCheck)
    if (!ethereumWallet?.address || typeof ethereumWallet.getEthereumProvider !== 'function') {
      setWalletWithdrawError('Embedded Wallet Not Available')
      setWalletWithdrawState('error')
      return
    }

    if (!selectedWalletWithdrawAsset) {
      setWalletWithdrawError('Choose an asset to withdraw')
      setWalletWithdrawState('error')
      return
    }

    if (!isValidEvmAddress(walletWithdrawDraft.destinationAddress)) {
      setWalletWithdrawError('Enter a valid EVM destination address')
      setWalletWithdrawState('error')
      return
    }

    const amountBaseUnits = parseAmountToBaseUnits(walletWithdrawDraft.amount, selectedWalletWithdrawAsset.decimals || 18)
    if (amountBaseUnits === null || amountBaseUnits <= 0n) {
      setWalletWithdrawError('Enter a valid withdraw amount')
      setWalletWithdrawState('error')
      return
    }

    const availableRaw = parseBigIntValue(selectedWalletWithdrawAsset.rawBalance)
    if (availableRaw < amountBaseUnits) {
      setWalletWithdrawError(`Not enough ${selectedWalletWithdrawAsset.symbol} on ${activeNetworkLabel}`)
      setWalletWithdrawState('error')
      return
    }

    const destinationAddress = walletWithdrawDraft.destinationAddress.trim()

    if (walletAddressRisk?.level === 'forbidden') {
      setWalletWithdrawError('Sending to this address is blocked by the local risk database')
      setWalletWithdrawState('error')
      return
    }

    if (walletAddressRisk?.level === 'danger' && !walletAddressRiskConfirmed) {
      setWalletWithdrawError('Acknowledge the destination address risk before sending')
      setWalletWithdrawState('error')
      return
    }

    let provider = await ethereumWallet.getEthereumProvider()
    const providerChainId = normalizeChainId(await provider.request({ method: 'eth_chainId', params: [] }))
    if (providerChainId !== selectedChainId) {
      if (typeof ethereumWallet.switchChain !== 'function') {
        throw new Error(`Wallet provider is on chain ${providerChainId}, expected ${selectedChainId}`)
      }
      await ethereumWallet.switchChain(selectedChainId)
      provider = await ethereumWallet.getEthereumProvider()
      const switchedChainId = normalizeChainId(await provider.request({ method: 'eth_chainId', params: [] }))
      if (switchedChainId !== selectedChainId) {
        throw new Error(`Unable to switch wallet provider to ${selectedChain.name}`)
      }
    }
    const readProvider = createReadRpcProvider(provider, selectedChainId)
    const nativeGasBalance = parseBigIntValue(await readNativeBalance(readProvider, ethereumWallet.address))
    const requestedGasMode = walletWithdrawDraft.gasMode === 'gas_account' ? 'gas_account' : 'native'
    const estimatedGasCost = selectedWalletWithdrawGasQuote?.weiCost || 0n
    const nativeGasCanCover = estimatedGasCost > 0n && nativeGasBalance >= estimatedGasCost
    const gasMode = requestedGasMode === 'gas_account' && nativeGasCanCover ? 'native' : requestedGasMode

    if (gasMode === 'native' && nativeGasBalance <= 0n) {
      setWalletWithdrawError(`Native sends require ${activeNetworkLogo} for network gas.`)
      setWalletWithdrawState('error')
      return
    }

    if (gasMode === 'native' && selectedWalletWithdrawAsset.native && amountBaseUnits + estimatedGasCost >= availableRaw) {
      setWalletWithdrawError(`Leave some ${activeNetworkLogo} for gas or switch to Gas Account mode.`)
      setWalletWithdrawState('error')
      return
    }

    const txRequest = selectedWalletWithdrawAsset.native
      ? {
          from: ethereumWallet.address,
          to: destinationAddress,
          value: toHexQuantity(amountBaseUnits)
        }
      : {
          from: ethereumWallet.address,
          to: normalizeTokenAddress(selectedWalletWithdrawAsset.address),
          data: encodeErc20TransferData(destinationAddress, amountBaseUnits),
          value: '0x0'
        }

    if (!skipRiskCheck) {
      setWalletTxRisk(null)
      setWalletTxRiskConfirmed(false)
      setWalletTxRiskOpen(true)
      setWalletTxRiskLoading(true)

      const risk = await checkWithdrawalTransactionRisk({
        tx: {
          ...txRequest,
          chainId: selectedChainId
        },
        origin: window.location.origin || externalUrls.appOrigin,
        fromAddress: ethereumWallet.address
      })

      setWalletTxRisk(risk)
      setWalletTxRiskLoading(false)

      if (risk.blocking) {
        setWalletWithdrawError(risk.title || 'Transaction blocked')
        setWalletWithdrawState('error')
        return
      }

      if (risk.requiresConfirmation) {
        setWalletWithdrawState('idle')
        return
      }

      setWalletTxRiskOpen(false)
    }

    setWalletWithdrawState('loading')
    setWalletWithdrawError(null)
    setWalletWithdrawMessage(null)
    setWalletWithdrawTxLink(null)
    setWalletWithdrawProgress({
      phase: 'sending',
      gasAccount: gasMode === 'gas_account',
      assetSymbol: selectedWalletWithdrawAsset.symbol,
      fundingHash: null,
      txHash: null
    })

    try {
      const txHash = await sendWalletTransaction(txRequest, {
        chainId: selectedChainId,
        gasMode,
        gasLevel: walletWithdrawGasLevel,
        customGwei: walletWithdrawCustomGwei,
        provider
      })
      setWalletWithdrawProgress((current) => ({ ...current, phase: 'confirming', txHash }))
      const receiptProvider = createReadRpcProvider(provider, selectedChainId)
      const receipt = await waitForTransactionReceipt(receiptProvider, txHash)
      if (String(receipt?.status || '').toLowerCase() === '0x0') {
        throw new Error('Withdrawal transaction failed onchain')
      }
      setWalletWithdrawProgress((current) => ({ ...current, phase: 'confirmed', txHash }))
      setWalletWithdrawDraft((current) => ({
        ...current,
        amount: '',
        destinationAddress: ''
      }))
      setWalletWithdrawMessage(`Withdrawal sent: ${shortenValue(txHash, 8, 6)}`)
      setWalletWithdrawTxLink({
        hash: txHash,
        url: makeExplorerTxUrl(selectedChain, txHash),
        explorerName: selectedChain?.blockExplorers?.default?.name || 'block explorer'
      })
      setWalletWithdrawState('done')
      await reloadBalances()
    } catch (err) {
      setWalletWithdrawProgress((current) => ({ ...current, phase: 'failed' }))
      setWalletWithdrawState('error')
      setWalletWithdrawError(err.message || 'Wallet withdrawal failed')
    }
  }, [activeNetworkLabel, activeNetworkLogo, ethereumWallet, reloadBalances, selectedChain, selectedChainId, selectedWalletWithdrawAsset, selectedWalletWithdrawGasQuote, sendWalletTransaction, walletAddressRisk?.level, walletAddressRiskConfirmed, walletWithdrawCustomGwei, walletWithdrawDraft.amount, walletWithdrawDraft.destinationAddress, walletWithdrawDraft.gasMode, walletWithdrawGasLevel])

  const closeWalletWithdraw = useCallback(() => {
    setWithdrawOpen(false)
    setWalletWithdrawState('idle')
    setWalletWithdrawError(null)
    setWalletWithdrawMessage(null)
    setWalletWithdrawTxLink(null)
    setWalletWithdrawProgress(null)
    setWalletWithdrawGasQuotes([])
    setWalletWithdrawGasError(null)
    setWalletAddressRisk(null)
    setWalletAddressRiskLoading(false)
    setWalletAddressRiskConfirmed(false)
    setWalletTxRisk(null)
    setWalletTxRiskLoading(false)
    setWalletTxRiskConfirmed(false)
    setWalletTxRiskOpen(false)
    setGasSponsorshipStatus('idle')
    setGasSponsorshipError(null)
    setGasSponsorshipMessage(null)
    setRabbyGasTxCheck(null)
  }, [])

  const copyUtilityValue = useCallback(async (value) => {
    const text = String(value || '').trim()
    if (!text || !navigator?.clipboard?.writeText) return
    await navigator.clipboard.writeText(text)
    setCopiedUtilityValue(text)
    window.setTimeout(() => {
      setCopiedUtilityValue((current) => (current === text ? '' : current))
    }, 1200)
  }, [])

  const gasSponsorshipPanel = (
    <div className='wallet-tool-panel gas-sponsorship-panel'>

      <div className='gas-sponsorship-status-card'>
        <div>
          <span><T id='gas.embeddedWallet'>Embedded Wallet</T></span>
          <strong title={ethereumWallet?.address || ''}>{shortenValue(ethereumWallet?.address || t('gas.notConnected'), 8, 6)}</strong>
        </div>
        <div>
          <span><T id='gas.mode'>Mode</T></span>
          <strong><T id='gas.gasAccount'>Gas Account</T></strong>
        </div>
        <div>
          <span><T id='gas.walletType'>Wallet type</T></span>
          <strong>{walletClientLabel}</strong>
        </div>
        <div>
          <span><T id='gas.latestSend'>Latest send</T></span>
          <strong>{t(`gas.status.${gasSponsorshipStatus}`)}</strong>
        </div>
        <div>
          <span><T id='gas.latestAction'>Latest action ID</T></span>
          <strong title={gasSponsorshipActionId || ''}>{gasSponsorshipActionId ? shortenValue(gasSponsorshipActionId, 8, 6) : <T id='common.none'>None</T>}</strong>
        </div>
        <div>
          <span><T id='gas.account'>Account</T></span>
          <strong>{rabbyGasSession?.accountId ? shortenValue(rabbyGasSession.accountId, 8, 6) : <T id='gas.notConnected'>Not connected</T>}</strong>
        </div>
        <div>
          <span><T id='gas.balance'>Balance</T></span>
          <strong>{rabbyGasInfo ? formatUsd(rabbyGasInfo.balance || 0, 4) : <T id='common.unavailable'>Unavailable</T>}</strong>
        </div>
      </div>

      <div className='custom-token-form wallet-form'>
        <div className='wallet-status'>
          <div className='wallet-status-head'>
            <span><T id='gas.howItWorks'>How it works</T></span>
          </div>
          <p className='wallet-status-copy'>
            <T id='gas.eligibilityDescription'>Outruna checks Gas Account eligibility, asks the Embedded Wallet to sign the transaction, then submits it.</T>
          </p>
        </div>

        <div className='wallet-inline-card rabby-gas-card'>
          <div className='wallet-status-head'>
            <strong>{rabbyGasSession?.sig ? <T id='gas.connected'>Connected</T> : <T id='gas.signatureRequired'>Signature required</T>}</strong>
          </div>
          <p>
            <T id='gas.hostedService'>This uses hosted Gas Account services.</T>
          </p>
          <div className='wallet-status-actions'>
            {!rabbyGasSession?.sig
              ? (
                <button className='wallet-button wallet-button--primary wallet-button--full' type='button' onClick={connectRabbyGasAccount} disabled={!ethereumWallet?.address || rabbyGasActionState === 'loading'}>
                  {rabbyGasActionState === 'loading' ? <T id='common.processing'>Processing...</T> : <T id='gas.connect'>Connect Gas Account</T>}
                </button>
                )
              : (
                <>
                  <button className='wallet-button wallet-button--primary wallet-button--full' type='button' onClick={() => refreshRabbyGasAccount()} disabled={rabbyGasLoading}>
                    {rabbyGasLoading ? <T id='common.processing'>Processing...</T> : <T id='gas.refreshBalance'>Refresh balance</T>}
                  </button>
                  <button className='wallet-button wallet-button--secondary wallet-button--full' type='button' onClick={disconnectRabbyGasAccount}>
                    <T id='common.disconnect'>Disconnect</T>
                  </button>
                </>
                )}
          </div>
        </div>

        {rabbyGasSession?.sig
          ? (
            <div className='gas-account-actions-grid'>
              <div className='wallet-inline-card rabby-gas-card'>
                <div className='wallet-status-head'>
                  <span><T id='gas.topUp'>Top up</T></span>
                  {/* <strong>{rabbyGasChainServerId ? activeNetworkLabel : 'Unsupported chain'}</strong> */}
                </div>
                <AssetPicker
                  label={t('gas.network')}
                  value={String(selectedChainId)}
                  options={rabbyGasDepositNetworkOptions}
                  onSelect={switchRabbyGasDepositNetwork}
                  placeholder={t('gas.selectNetwork')}
                  helper={t('gas.chooseTopUpNetwork')}
                  mobileSheet
                  getOptionValue={(chain) => String(chain.id)}
                  getOptionTitle={getRabbyGasDepositNetworkTitle}
                  getOptionSubtitle={getRabbyGasDepositNetworkSubtitle}
                  getOptionSymbol={(chain) => chainIconSymbol(chain)}
                  getOptionLogoUrl={(chain) => chainLogoUrl(chain)}
                  getEmptyTitle={() => t('gas.noTopUpNetwork')}
                  getEmptySubtitle={() => t('gas.noTopUpNetworks')}
                />
                <AssetPicker
                  label={t('gas.token')}
                  value={selectedRabbyGasDepositToken?.key || ''}
                  options={rabbyGasDepositTokens}
                  onSelect={(tokenKey) => setRabbyGasDepositDraft((current) => ({ ...current, tokenKey }))}
                  placeholder={t('gas.selectToken')}
                  helper={t('gas.chooseStablecoin')}
                  mobileSheet
                  getOptionValue={(token) => token.key}
                  getOptionTitle={(token) => token.symbol || t('gas.token')}
                  getOptionSubtitle={getRabbyGasTokenSubtitle}
                  getOptionSymbol={(token) => token.symbol || '?'}
                  getEmptyTitle={() => t('gas.noSupportedTopUpToken')}
                  getEmptySubtitle={() => t('gas.noTopUpTokens')}
                />
                <label className='form-field'>
                  <span><T id='gas.amount'>Amount</T></span>
                  <input
                    value={rabbyGasDepositDraft.amount}
                    onInput={(event) => setRabbyGasDepositDraft((current) => ({ ...current, amount: formatTokenAmountInput(event.currentTarget.value) }))}
                    inputMode='decimal'
                    placeholder='10.00'
                    disabled={rabbyGasActionState === 'loading'}
                  />
                </label>
                <div className='gas-account-meta-row'>
                  <span><T id='gas.walletBalance'>Wallet balance</T></span>
                  <strong>
                    {selectedRabbyGasDepositBalance
                      ? `${tokenDisplayAmount(selectedRabbyGasDepositBalance)} ${selectedRabbyGasDepositBalance.symbol}`
                      : `0 ${selectedRabbyGasDepositToken?.symbol || ''}`}
                  </strong>
                </div>
                <div className='wallet-asset-picker'>
                  <span className='wallet-field-label'><T id='gas.gasDeposit'>Gas Deposit</T></span>
                  <div className='wallet-asset-picker-button rabby-gas-address-card'>
                    <span className='wallet-asset-picker-meta'>
                      <CoinIcon
                        symbol='G'
                        label={t('gas.destination')}
                        className='coin-icon coin-icon-sm'
                      />
                      <span>
                        <strong><T id='gas.gasAccount'>Gas Account</T></strong>
                        <em title={rabbyGasDepositAddress || ''}>
                          {rabbyGasDepositAddress
                            ? `${shortenValue(rabbyGasDepositAddress, 8, 6)} · ${activeNetworkLabel}`
                            : t('gas.depositAddressNotConfigured')}
                        </em>
                      </span>
                    </span>
                    {rabbyGasDepositAddress
                      ? (
                        <button
                          className={copiedUtilityValue === rabbyGasDepositAddress ? 'wallet-icon-button rabby-gas-address-copy copied' : 'wallet-icon-button rabby-gas-address-copy'}
                          type='button'
                          onClick={() => copyUtilityValue(rabbyGasDepositAddress)}
                          aria-label={t('gas.copyDepositAddress')}
                          title={copiedUtilityValue === rabbyGasDepositAddress ? t('common.copied') : t('gas.copyDepositAddress')}
                        >
                          {copiedUtilityValue === rabbyGasDepositAddress ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                        )
                      : null}
                  </div>
                </div>
                <button
                  className='wallet-button wallet-button--primary wallet-button--full gas-top-up-button'
                  type='button'
                  onClick={submitRabbyGasTopUp}
                  disabled={rabbyGasActionState === 'loading' || !rabbyGasChainServerId || !rabbyGasDepositAddress || !selectedRabbyGasDepositToken}
                >
                  {rabbyGasActionState === 'loading' ? <T id='common.processing'>Processing...</T> : <T id='gas.topUp'>Top up</T>}
                </button>
                {/* <label className='form-field'>
                <span><T id='gas.reportTransaction'>Report existing top-up transaction</T></span>
                  <input
                    value={rabbyGasDepositDraft.reportTxHash}
                    onInput={(event) => setRabbyGasDepositDraft((current) => ({ ...current, reportTxHash: event.currentTarget.value.trim() }))}
                  placeholder={t('gas.transactionHashPlaceholder')}
                    disabled={rabbyGasActionState === 'loading'}
                  />
                </label>
                <button
                  className='wallet-button wallet-button--secondary wallet-button--full'
                  type='button'
                  onClick={submitRabbyGasTopUpReport}
                  disabled={rabbyGasActionState === 'loading' || !rabbyGasDepositDraft.reportTxHash || !rabbyGasDepositDraft.amount}
                >
                  Report top-up tx
                </button> */}
              </div>

              <div className='wallet-inline-card rabby-gas-card'>
                <div className='wallet-status-head'>
                  <span><T id='common.withdraw'>Withdraw</T></span>
                  <strong>{formatUsd(rabbyGasInfo?.withdrawable_balance ?? rabbyGasInfo?.balance ?? 0, 4)}</strong>
                </div>
                <AssetPicker
                  label={t('gas.withdrawTo')}
                  value={selectedRabbyGasWithdrawAddress?.recharge_addr || ''}
                  options={rabbyGasWithdrawList}
                  onSelect={(address) => setRabbyGasWithdrawDraft((current) => ({ ...current, address }))}
                  placeholder={t('gas.yourWallet')}
                  helper={t('gas.embeddedWalletDestination')}
                  mobileSheet
                  searchable={false}
                  getOptionValue={(item) => item.recharge_addr}
                  getOptionTitle={getRabbyGasDestinationTitle}
                  getOptionSubtitle={getRabbyGasDestinationSubtitle}
                  getOptionSymbol={() => 'W'}
                  getEmptyTitle={() => t('gas.noWalletDestination')}
                  getEmptySubtitle={() => t('gas.noDestinations')}
                />
                <AssetPicker
                  label={t('gas.network')}
                  value={selectedRabbyGasWithdrawChain?.chain_id || ''}
                  options={rabbyGasWithdrawChains}
                  onSelect={(chainId) => setRabbyGasWithdrawDraft((current) => ({ ...current, chainId }))}
                  placeholder={t('gas.selectNetwork')}
                  helper={t('gas.chooseWithdrawNetwork')}
                  mobileSheet
                  searchable={false}
                  getOptionValue={(chain) => chain.chain_id}
                  getOptionTitle={getRabbyGasChainTitle}
                  getOptionSubtitle={getRabbyGasChainSubtitle}
                  getOptionSymbol={(chain) => String(chain.chain_name || chain.chain_id || '?').slice(0, 4)}
                  getEmptyTitle={() => t('gas.noWithdrawNetwork')}
                  getEmptySubtitle={() => t('gas.noDestinationOptions')}
                />
                <div className='gas-account-meta-row'>
                  <span><T id='gas.fee'>Fee</T></span>
                  <strong>{formatUsd(selectedRabbyGasWithdrawChain?.withdraw_fee || 0, 4)}</strong>
                </div>
                <div className='gas-account-meta-row'>
                  <span><T id='gas.limit'>Limit</T></span>
                  <strong>{formatUsd(selectedRabbyGasWithdrawChain?.withdraw_limit || rabbyGasInfo?.withdrawable_balance || rabbyGasInfo?.balance || 0, 4)}</strong>
                </div>
                <button
                  className='wallet-button wallet-button--secondary wallet-button--full'
                  type='button'
                  onClick={submitRabbyGasWithdraw}
                  disabled={rabbyGasActionState === 'loading' || !selectedRabbyGasWithdrawAddress || !selectedRabbyGasWithdrawChain}
                >
                  {rabbyGasActionState === 'loading' ? <T id='common.processing'>Processing...</T> : <T id='gas.withdrawMax'>Withdraw max</T>}
                </button>
              </div>
            </div>
            )
          : null}

        {rabbyGasTxCheck
          ? (
            <div className='wallet-inline-card rabby-gas-card'>
              <div className='wallet-status-head'>
                <span><T id='gas.latestCheck'>Latest eligibility check</T></span>
                <strong>{rabbyGasTxCheck.balance_is_enough ? <T id='gas.enoughBalance'>Enough balance</T> : <T id='gas.notUsable'>Not usable</T>}</strong>
              </div>
              <p>
                {rabbyGasTxCheck.err_msg
                  ? formatGasAccountMessage(rabbyGasTxCheck.err_msg)
                  : rabbyGasTxCheck.is_gas_account
                    ? <T id='gas.supportsTransaction'>Gas Account supports this transaction.</T>
                    : <T id='gas.doesNotSupportTransaction'>Gas Account does not support this transaction.</T>}
              </p>
              {rabbyGasTxCheck.gas_account_cost
                ? (
                  <div className='gas-cost-grid'>
                    <span><T id='gas.total'>Total</T> {formatUsd(rabbyGasTxCheck.gas_account_cost.total_cost || 0, 4)}</span>
                    <span><T id='gas.gas'>Gas</T> {formatUsd(rabbyGasTxCheck.gas_account_cost.gas_cost || 0, 4)}</span>
                  </div>
                  )
                : null}
            </div>
            )
          : null}

        {rabbyGasHistory.length
          ? (
            <div className='rabby-gas-history'>
              <div className='rabby-gas-history-head'>
                <strong><T id='gas.transactions'>Transactions</T></strong>
                {rabbyGasHistory.length > 3
                  ? (
                    <button
                      className='wallet-button wallet-button--compact wallet-button--secondary rabby-gas-history-toggle'
                      type='button'
                      onClick={() => setRabbyGasHistoryOpen((value) => !value)}
                      aria-expanded={rabbyGasHistoryOpen}
                    >
                      {rabbyGasHistoryOpen ? <T id='common.collapse'>Collapse</T> : <T id='common.expand'>Expand</T>}
                      {rabbyGasHistoryOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    )
                  : null}
              </div>
              <div className='token-registry-list wallet-list'>
                {(rabbyGasHistoryOpen ? rabbyGasHistory : rabbyGasHistory.slice(0, 3)).map((item) => (
                  <div className='wallet-list-row' key={item.id || `${item.history_type}-${item.tx_id}-${item.create_at}`}>
                    <div className='wallet-list-main'>
                      <span className='wallet-list-label'>{item.history_type || 'gas'}</span>
                      <strong>{formatUsd(item.usd_value || item.gas_cost_usd_value || 0, 4)}</strong>
                      <em title={item.tx_id}>{shortenValue(item.tx_id || item.source || t('gas.gasAccount'), 8, 6)}</em>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )
          : null}
      </div>
    </div>
  )

  return (
    <main className='wallet-page'>
      <div className='wallet-shell'>
        <section className='wallet-card'>
          <TariWalletUI state={tari} selected={walletFamily === 'tari'} showOverview={activeTab !== 'faucet'} showAssets={activeTab === 'wallet'} sheet={tariSheet} setSheet={setTariSheet} networks={walletNetworks} onEvm={(chain) => switchChain(chain).catch(() => {})}
            logoUrl={appLogoUrl} logoClickCount={logoClickCount} logoNameVisible={logoNameVisible} logoHighlightClass={logoHighlightClass} onLogoClick={handleLogoClick} />
          {walletFamily === 'tari' && activeTab === 'faucet' && <TariFaucet wallet={tari} />}
          {walletFamily === 'evm' && <>
          <header className='wallet-header'>
            <div className='wallet-title-block'>
              <button
                key={logoClickCount}
                className={`wallet-mark ${logoHighlightClass}`}
                type='button'
                onClick={handleLogoClick}
                aria-label={t('auth.title')}
                title={t('auth.title')}
              >
                <img className='wallet-logo-image' src={appLogoUrl} alt='Outruna logo' />
              </button>
              <div>
                {logoNameVisible
                  ? <span className={`wallet-brand-name ${logoHighlightClass}`}><T id='auth.title'>Outruna</T></span>
                  : null}
                <div className='wallet-subtitle'>
                  <CoinIcon symbol={chainIconSymbol(selectedChain)} label={selectedChain.name} logoUrl={chainLogoUrl(selectedChain)} className='network-logo network-logo-sm' />
                  <span>{activeNetworkLabel}</span>
                  <span className='online-dot' />
                </div>
              </div>
            </div>

            <div className='wallet-header-actions'>
              <button
                className='pill badge-muted portfolio-toggle'
                type='button'
                onClick={() => setShowPortfolioValue((value) => !value)}
                aria-pressed={showPortfolioValue}
                aria-label={showPortfolioValue ? 'Hide portfolio value' : 'Show portfolio value'}
              >
                {showPortfolioValue ? <EyeOff size={13} /> : <Eye size={13} />}
              </button>
              <button className='icon-button' type='button' onClick={reloadBalances} disabled={loadingBalances} aria-label={t('wallet.refreshBalances')}>
                <RefreshCcw size={16} />
              </button>
            </div>
          </header>

          <div className='hero-card'>
            <div className='hero-balance-copy'>
              <p className='hero-label'><T id='wallet.portfolio'>Total portfolio value</T></p>
              <div className='hero-number-row'>
                <strong className='hero-number'>{loadingBalances ? <T id='common.loading'>Loading...</T> : portfolioSummaryText}</strong>
              </div>
            </div>

            <div className='hero-wallet-row'>
              <div className='hero-account-control'>
                <button
                  className='hero-network-trigger'
                  type='button'
                  onClick={() => setNetworkPickerOpen((value) => !value)}
                  aria-expanded={networkPickerOpen}
                  aria-label={`Switch network, current network ${selectedChain.name}`}
                  title={t('wallet.switchNetwork')}
                >
                  <CoinIcon symbol={chainIconSymbol(selectedChain)} label={selectedChain.name} logoUrl={chainLogoUrl(selectedChain)} className='network-logo network-logo-md' />
                </button>
                <span className='hero-account-address' title={address}>
                  {balanceError || formatAddress(address, 8, 6)}
                </span>
                <button
                  className={copied ? 'hero-copy-button copied' : 'hero-copy-button'}
                  type='button'
                  onClick={copyAddress}
                  disabled={!ethereumWallet?.address}
                  aria-label={t('wallet.copyAddress')}
                  title={copied ? t('common.copied') : t('wallet.copyAddress')}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              {networkPickerOpen
                ? (
                  <div className='hero-network-picker' aria-label={t('wallet.supportedNetworks')}>
                    <div className='chain-strip-scroll'>
                      {walletNetworks.map((chain) => {
                        if (chain.family === 'tari') return <button key={chain.key} className='chain-pill' type='button' aria-label={chain.name} title={chain.name} onClick={() => {
                          setNetworkPickerOpen(false)
                          setWalletFamily('tari')
                          setActiveTab('wallet')
                        }}><TariIcon /></button>
                        const active = chain.id === selectedChainId
                        return (
                          <button
                            key={chain.id}
                            ref={(node) => {
                              if (node) {
                                chainButtonRefs.current[chain.id] = node
                              } else {
                                delete chainButtonRefs.current[chain.id]
                              }
                            }}
                            className={active ? 'chain-pill active' : 'chain-pill'}
                            type='button'
                            aria-label={chain.name}
                            title={chain.name}
                            onClick={() => {
                              setNetworkPickerOpen(false)
                              switchChain(chain).catch(() => {})
                            }}
                          >
                            <CoinIcon symbol={chainIconSymbol(chain)} label={chain.name} logoUrl={chainLogoUrl(chain)} className='network-logo network-logo-sm' />
                            {active ? chain.name : null}
                          </button>
                        )
                      })}
                    </div>
                    <div className='chain-strip-fade' aria-hidden='true' />
                  </div>
                  )
                : null}

              <div className='hero-wallet-actions'>
                <button className='hero-wallet-action' type='button' onClick={() => setDepositOpen(true)} aria-label={t('common.deposit')}>
                  <Plus size={18} />
                  <span><T id='common.deposit'>Deposit</T></span>
                </button>
                <button className='hero-wallet-action' type='button' onClick={() => setWithdrawOpen(true)} aria-label={t('common.withdraw')}>
                  <ArrowUpFromLine size={18} />
                  <span><T id='common.withdraw'>Withdraw</T></span>
                </button>
                {explorerUrl
                  ? (
                    <a className='hero-wallet-action' href={explorerUrl} target='_blank' rel='noreferrer' aria-label={t('wallet.accountHistory')} title={t('wallet.accountHistory')}>
                      <History size={18} />
                      <span><T id='common.history'>History</T></span>
                    </a>
                    )
                  : (
                    <button className='hero-wallet-action' type='button' disabled aria-disabled='true' aria-label={t('wallet.accountHistory')} title={t('wallet.accountHistory')}>
                      <History size={18} />
                      <span><T id='common.history'>History</T></span>
                    </button>
                    )}
              </div>
            </div>
          </div>

          </>}

          {activeTab === 'wallet' && walletFamily === 'evm'
            ? (
              <>
                <section className='assets-section'>
                  <div className='section-head assets-section-head'>
                    <div className='section-head-actions'>
                      <button className='toggle-button asset-header-action' type='button' onClick={openCustomTokenModal} title={t('wallet.addCustomToken')}>
                        <Gem size={15} strokeWidth={2.4} />
                        <span className='asset-header-label'><T id='wallet.customToken'>Custom token</T></span>
                      </button>
                      <button
                        className='toggle-button asset-header-action'
                        type='button'
                        onClick={() => setShowSmallBalances((value) => !value)}
                        title={t(showSmallBalances ? 'wallet.hideSmallBalances' : 'wallet.showSmallBalances')}
                      >
                        {showSmallBalances ? <Eye size={15} strokeWidth={2.4} /> : <EyeOff size={15} strokeWidth={2.4} />}
                        <span className='asset-header-label'><T id={showSmallBalances ? 'wallet.hideSmallBalances' : 'wallet.showSmallBalances'}>{showSmallBalances ? 'Hide small balances' : 'Show small balances'}</T></span>
                      </button>
                    </div>
                  </div>

                  <div className='assets-list'>
                    {displayedAssets.length > 0
                      ? displayedAssets.map((token) => {
                        const priceInfo = makeAssetPriceInfo(token.market, t('wallet.priceUnavailable'))
                        const fiatValueText = token.usdValue !== null ? formatUsd(token.usdValue, 2) : 'n/a'

                        return (
                          <article
                            className='asset-row asset-row-clickable'
                            key={`${token.chainId}-${token.symbol}-${token.address || 'native'}`}
                            role='button'
                            tabIndex='0'
                            onClick={() => openAssetDetails(token)}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                openAssetDetails(token)
                              }
                            }}
                            aria-label={`View details for ${token.displaySymbol}`}
                          >
                            <div className='asset-left'>
                              <CoinIcon
                                symbol={token.displaySymbol}
                                label={token.name || token.displaySymbol}
                                name={token.name}
                                chainId={token.chainId}
                                address={token.address}
                                logoUrl={token.logoUrl}
                              />
                              <div className='asset-copy'>
                                <div className='asset-title-row'>
                                  <strong>{token.displaySymbol}</strong>
                                </div>
                                <p>{token.name}</p>
                                <span className='asset-price'>
                                  <span>{priceInfo.priceText}</span>
                                  {priceInfo.changeText
                                    ? (
                                      <span className={priceInfo.changePositive ? 'asset-price-change' : 'asset-price-change negative'}>
                                        {priceInfo.changePositive ? '+' : ''}
                                        {priceInfo.changeText}
                                      </span>
                                      )
                                    : null}
                                </span>
                              </div>
                            </div>

                            <div className='asset-right'>
                              <strong>{loadingBalances ? <T id='common.loading'>Loading...</T> : `${token.amountText} ${token.displaySymbol}`}</strong>
                              <span>{fiatValueText}</span>
                            </div>
                          </article>
                        )
                      })
                      : (
                        <div className='empty-state'>
                          <p><T id='wallet.noBalances'>No visible balances on this chain.</T></p>
                          <span><T id='wallet.noBalancesHint'>Toggle small balances or switch network.</T></span>
                        </div>
                        )}
                  </div>
                </section>

              </>
              )
            : null}

          {assetDetailsToken
            ? (() => {
                const detailsChain = chainMap.get(normalizeChainId(assetDetailsToken.chainId)) || selectedChain
                const contractAddress = assetDetailsToken.native ? null : assetDetailsToken.address
                const contractExplorerUrl = contractAddress ? makeExplorerAddressUrl(detailsChain, contractAddress) : null
                const suspiciousToken = assetDetailsToken.trustTier === 'custom' && assetDetailsToken.securityStatus !== 'reviewed'
                const detailsPriceKey = String(assetDetailsToken.priceKey || assetDetailsToken.cmcSymbol || assetDetailsToken.symbol || '').trim().toUpperCase()
                const detailsMarket = assetPrices[detailsPriceKey] || assetDetailsToken.market || null
                const priceUnavailable = !detailsMarket?.usd

                return (
                  <div className='deposit-modal' role='presentation' onClick={() => setAssetDetailsToken(null)}>
                    <section
                      className='deposit-sheet asset-details-sheet'
                      role='dialog'
                      aria-modal='true'
                      aria-label={`${assetDetailsToken.displaySymbol || assetDetailsToken.symbol} token details`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <div className='deposit-sheet-head'>
                        <div className='asset-details-title'>
                          <div className='asset-details-logo'>
                            <CoinIcon
                              symbol={assetDetailsToken.displaySymbol || assetDetailsToken.symbol}
                              label={assetDetailsToken.name || assetDetailsToken.symbol}
                              name={assetDetailsToken.name}
                              chainId={assetDetailsToken.chainId}
                              address={assetDetailsToken.address}
                              logoUrl={assetDetailsToken.logoUrl}
                              onLogoLoad={() => setAssetLogoLoaded(true)}
                              onLogoError={() => setAssetLogoLoaded(false)}
                            />
                            {assetDetailsToken.trustTier === 'custom' && !assetLogoLoaded
                              ? (
                                <button
                                  className='asset-logo-update-button'
                                  type='button'
                                  onClick={updateCustomTokenLogo}
                                  disabled={assetLogoUpdateState === 'loading'}
                                  aria-label='Update token logo'
                                >
                                  {assetLogoUpdateState === 'loading' ? <T id='wallet.updatingPrice'>Updating...</T> : <T id='wallet.updateLogo'>Update logo</T>}
                                </button>
                                )
                              : null}
                            {assetLogoUpdateError && !assetDetailsToken.logoUrl
                              ? <small className='asset-logo-update-error'><LocalizedMessage message={assetLogoUpdateError} /></small>
                              : null}
                          </div>
                          <div>
                            <p className='eyebrow'><T id='wallet.tokenDetails'>Token details</T></p>
                            <h2>{assetDetailsToken.name || assetDetailsToken.displaySymbol || assetDetailsToken.symbol}</h2>
                          </div>
                        </div>
                        <button className='icon-button icon-button-sm' type='button' onClick={() => setAssetDetailsToken(null)} aria-label='Close token details'>
                          <X size={14} />
                        </button>
                      </div>

                      <div className='asset-details-list'>
                        <div><span><T id='wallet.network'>Network</T></span><strong>{getChainLabel(detailsChain)}</strong></div>
                        <div><span><T id='wallet.symbol'>Symbol</T></span><strong>{assetDetailsToken.displaySymbol || displayTokenSymbol(assetDetailsToken.symbol)}</strong></div>
                        <div><span><T id='wallet.decimals'>Decimals</T></span><strong>{Number.isFinite(Number(assetDetailsToken.decimals)) ? assetDetailsToken.decimals : <T id='common.unknown'>Unknown</T>}</strong></div>
                        <div><span><T id='wallet.type'>Type</T></span><strong>{assetDetailsToken.native ? <T id='wallet.nativeAsset'>Native asset</T> : <T id='wallet.erc20'>ERC-20 token</T>}</strong></div>
                        <div><span><T id='wallet.price'>Price</T></span><strong>{priceUnavailable ? <T id='wallet.priceUnavailable'>Price unavailable</T> : formatUsd(detailsMarket.usd, detailsMarket.usd >= 100 ? 2 : 4)}</strong></div>
                      </div>

                      {assetDetailsToken.trustTier === 'custom' && priceUnavailable
                        ? (
                          <div className='asset-price-update'>
                            <button
                              className='asset-price-update-button'
                              type='button'
                              onClick={updateCustomTokenPrice}
                              disabled={assetPriceUpdateState === 'loading'}
                            >
                              {assetPriceUpdateState === 'loading' ? <T id='wallet.updatingPrice'>Updating...</T> : <T id='wallet.updatePrice'>Update price</T>}
                            </button>
                            {assetPriceUpdateError
                              ? <small className='asset-price-update-error'><LocalizedMessage message={assetPriceUpdateError} /></small>
                              : null}
                          </div>
                          )
                        : null}

                      {contractAddress
                        ? (
                          <div className={suspiciousToken ? 'asset-contract-details suspicious' : 'asset-contract-details'}>
                            <span><T id='wallet.contract'>Contract</T></span>
                            <strong title={contractAddress}>{contractAddress}</strong>
                            {suspiciousToken
                              ? <p className='asset-contract-warning'><T id='wallet.contractWarning'>Review this contract carefully before sending or approving transactions.</T></p>
                              : null}
                            <div className='asset-details-actions'>
                              <button className='deposit-copy-button' type='button' onClick={copyAssetContract}>
                                <Copy size={14} />
                                {assetContractCopied ? <T id='common.copied'>Copied</T> : <T id='wallet.copyContract'>Copy contract</T>}
                              </button>
                              {contractExplorerUrl
                                ? (
                                  <a className='deposit-copy-button' href={contractExplorerUrl} target='_blank' rel='noreferrer'>
                                    <ExternalLink size={14} />
                                    <T id='common.explorer'>Explorer</T>
                                  </a>
                                  )
                                : null}
                            </div>
                          </div>
                          )
                        : <p className='asset-details-native-note'><T id='wallet.nativeNote' fields={{ chain: getChainLabel(detailsChain) }}>This is the native gas asset for {getChainLabel(detailsChain)}.</T></p>}
                      {assetDetailsToken.trustTier === 'custom'
                        ? (
                          <div className='asset-custom-actions'>
                            <button className='asset-remove-token button-danger' type='button' onClick={removeAssetCustomToken}>
                              <T id='wallet.removeCustomToken'>Remove custom token</T>
                            </button>
                          </div>
                          )
                        : null}
                    </section>
                  </div>
                )
              })()
            : null}

          {activeTab === 'more'
            ? (
              <section className='details-sheet settings-sheet'>
                <div className='settings-preference-row more-preferences'>
                  <div className='settings-preferences-icon' aria-hidden='true'>
                    <Languages size={18} />
                  </div>
                  <div className='more-preferences-copy'>
                    <strong><T id='language.preferences'>Preferences</T></strong>
                    <span><T id='language.hint'>Choose the language used across Outruna.</T></span>
                  </div>
                  <label className='language-control'>
                    <select value={locale} onChange={handleLanguageChange}>
                      {languageOptions.map((option) => (
                        <option value={option.code} key={option.code}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className='settings-preference-row security-preferences'>
                  <div className='security-preferences-icon' aria-hidden='true'>
                    <ShieldCheck size={18} />
                  </div>
                  <div className='security-preferences-copy'>
                    <strong><T id='security.twoFactor'>2FA</T></strong>
                    <span><T id='security.twoFactorDescription'>Use Google Authenticator or another authenticator app.</T></span>
                    <small><T id={mfaEnabled ? 'security.enabled' : 'security.disabled'}>{mfaEnabled ? 'Enabled' : 'Disabled'}</T></small>
                  </div>
                  <button
                    className={mfaEnabled ? 'settings-toggle active' : 'settings-toggle'}
                    type='button'
                    role='switch'
                    aria-checked={mfaEnabled}
                    onClick={() => showMfaEnrollmentModal()}
                    aria-label={t(mfaEnabled ? 'security.manageTwoFactor' : 'security.enableTwoFactor')}
                  >
                    <span aria-hidden='true' />
                  </button>
                </div>

                <TariSettingsRow state={tari} onOpen={() => {
                  setTariSheet('settings')
                  tari.manager.current?.open(false).catch(() => {})
                }} />

                <NetworkSettings preferences={preferences} error={preferencesError} onChange={(next) => {
                    try { updatePreferences(next); setPreferencesError('') } catch { setPreferencesError(t('setup.saveError')) }
                }} />

                <ThemeSettings />

                <div className='details-grid'>
                  <div className='detail-row'>
                    <span><T id='wallet.walletType'>Wallet type</T></span>
                    <strong>{walletClientLabel}</strong>
                  </div>
                  <div className='detail-row'>
                    <span><T id='wallet.accountSource'>Account source</T></span>
                    <strong>{user?.email?.address || user?.wallet?.address || 'Authenticated'}</strong>
                  </div>
                  <div className='detail-row'>
                    <span><T id='wallet.linkedWallets'>Linked wallets</T></span>
                    <strong>{formatNumber(authMeta.walletCount || wallets.length, 0)}</strong>
                  </div>
                  <div className='detail-row'>
                    <span><T id='wallet.telegramUser'>Telegram user</T></span>
                    <strong>{telegramUser?.username ? `@${telegramUser.username}` : (telegramUser?.firstName || telegramUser?.name || 'n/a')}</strong>
                  </div>
                  <div className='detail-row'>
                    <span><T id='wallet.telegramStatus'>Telegram status</T></span>
                    <strong>{telegramStatusLabel}</strong>
                  </div>
                  <div className='detail-row'>
                    <span><T id='common.version'>Version</T></span>
                    <strong><BuildVersionGuard /></strong>
                  </div>
                  <a
                    className='detail-row detail-row-link'
                    href={externalUrls.github}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Open Outruna source code on GitHub'
                  >
                    <span><T id='common.sourceCode'>Source code</T></span>
                    <strong><Github size={15} /> GitHub</strong>
                  </a>
                </div>
              </section>
              )
            : null}

          {activeTab === 'gas' && (
            <section className='tab-card wallet-tool-tab-card gas-sponsorship-tab-card'>
              <div className='tab-card-head' />

              {gasSponsorshipError ? <div className='swap-error'><LocalizedMessage message={gasSponsorshipError} /></div> : null}
              {gasSponsorshipMessage ? <div className='swap-success'><LocalizedMessage message={gasSponsorshipMessage} /></div> : null}
              {rabbyGasError ? <div className='swap-error'><LocalizedMessage message={rabbyGasError} /></div> : null}
              {rabbyGasMessage ? <div className='swap-success'><LocalizedMessage message={rabbyGasMessage} /></div> : null}

              <div className='wallet-tool-layout'>
                <div className='wallet-tool-stack'>
                  {gasSponsorshipPanel}
                </div>
              </div>
            </section>
          )}

          {p2pEnabled && activeTab === 'p2p' && (
            <FiatP2P
              preferences={preferences}
              walletAddress={ethereumWallet?.address || ''}
              verifyInvoice={verifyFiatP2pOrder}
              checkInvoiceBalance={checkFiatP2pInvoiceBalance}
              sendPayment={sendFiatP2pPayment}
              finalizeInvoice={finalizeFiatP2pInvoice}
            />
          )}

          {activeTab === 'swap' && (
            <section className='tab-card'>
              {!swapSupported
                ? (
                  <div className='swap-empty-state'>
                    <p><T id='swap.unavailable'>Swaps are not available on this network.</T></p>
                    <span><T id='swap.supportedChainHint'>Switch to a supported EVM chain.</T></span>
                  </div>
                  )
                : !swapTokens.length || !swapReceiveTokens.length
                    ? (
                      <div className='swap-empty-state'>
                        <p><T id='swap.noTokens'>No held tokens available to swap.</T></p>
                        <span><T id='swap.depositFirst'>Deposit to the Wallet first.</T></span>
                      </div>
                      )
                    : (
                      <div className='swap-panel'>
                        <div className='swap-selector-grid'>
                          <SwapTokenField
                            label={t('swap.youPay')}
                            token={swapFromToken}
                            balance={swapSourceBalance}
                            networkLabel={activeNetworkLabel}
                            open={swapPickerField === 'from'}
                            onOpen={() => setSwapPickerField('from')}
                            buttonRef={swapFromPickerRef}
                            disabled={!swapFromToken}
                          />

                          <button
                            className='swap-flip-button'
                            type='button'
                            onClick={reverseSwap}
                            disabled={!swapFromToken || !swapToToken}
                            aria-label={t('swap.reverse')}
                          >
                            <ArrowUpDown size={16} />
                          </button>

                          <SwapTokenField
                            label={t('swap.youReceive')}
                            token={swapToToken}
                            balance={tokenDisplayAmount(swapToToken)}
                            networkLabel={activeNetworkLabel}
                            open={swapPickerField === 'to'}
                            onOpen={() => setSwapPickerField('to')}
                            buttonRef={swapToPickerRef}
                            disabled={!swapReceiveTokens.length}
                          />
                        </div>

                        <small className='swap-custom-token-notice'><T id='swap.customNotice'>To swap a custom token, add it to your wallet first.</T></small>

                        <label className='swap-provider-control'>
                          <span><T id='swap.route'>Route</T></span>
                          <select
                            className='swap-provider-select'
                            value={swapProvider}
                            onChange={(event) => {
                              setSwapProvider(event.currentTarget.value)
                              resetSwapResult()
                            }}
                          >
                            <option value='auto'><T id='swap.autoRoute'>Auto · best available</T></option>
                            <option value='uniswap'>Uniswap</option>
                            <option value='0x'>0x</option>
                            <option value='kyberswap'>KyberSwap</option>
                          </select>
                        </label>

                        {swapPickerField
                          ? (
                            <SwapTokenPickerSheet
                              title={swapPickerField === 'from' ? t('swap.choosePay') : t('swap.chooseReceive')}
                              tokens={swapPickerField === 'from' ? swapTokens : swapReceiveTokens}
                              selectedToken={swapPickerField === 'from' ? swapFromToken : swapToToken}
                              excludedToken={swapPickerField === 'from' ? swapToToken : swapFromToken}
                              chainId={selectedChainId}
                              networkLabel={activeNetworkLabel}
                              onSelect={(token) => selectSwapToken(swapPickerField, token)}
                              onClose={closeSwapPicker}
                            />
                            )
                          : null}

                        <label className='swap-amount-card'>
                          <span><T id='swap.amount'>Amount</T></span>
                          <input
                            type='text'
                            inputMode='decimal'
                            value={swapAmount}
                            onInput={(event) => {
                              setSwapAmount(formatTokenAmountInput(event.currentTarget.value))
                              resetSwapResult()
                            }}
                            placeholder={`0.0 ${swapFromToken?.symbol || ''}`.trim()}
                          />
                          <button
                            className='swap-max-button'
                            type='button'
                            onClick={() => {
                              setSwapAmount(swapSourceBalance || '')
                              resetSwapResult()
                            }}
                            disabled={!swapSourceBalance}
                          >
                            <T id='common.max'>Max</T>
                          </button>
                        </label>

                        <div className='swap-quote-card'>
                          <div className='swap-quote-row'>
                            <span><T id='swap.exchange'>Exchange</T></span>
                            <strong>{swapQuote?.provider ? (swapQuote.provider === 'kyberswap' ? 'KyberSwap' : swapQuote.provider === '0x' ? '0x' : 'Uniswap') : <T id='common.unavailable'>Unavailable</T>}</strong>
                          </div>
                          <div className='swap-quote-row'>
                            <span><T id='swap.estimatedOutput'>Estimated output</T></span>
                            <strong>{swapQuoteLabel}</strong>
                          </div>
                          <div className='swap-quote-row'>
                            <span><T id='swap.minimumReceived'>Minimum received</T></span>
                            <strong>{swapMinimumLabel}</strong>
                          </div>
                          <div className='swap-quote-row'>
                            <span><T id='swap.outrunaFee'>Outruna fee</T></span>
                            <strong>{swapFeeLabel}</strong>
                          </div>
                          <div className='swap-quote-row'>
                            <span><T id='swap.estimatedUsd'>Estimated USD</T></span>
                            <strong>{swapToUsdValue !== null ? formatUsd(swapToUsdValue, 2) : <T id='common.unavailable'>Unavailable</T>}</strong>
                          </div>
                          <div className='swap-quote-row'>
                            <span><T id='swap.minimumUsd'>Minimum USD</T></span>
                            <strong>{swapMinimumUsdValue !== null ? formatUsd(swapMinimumUsdValue, 2) : <T id='common.unavailable'>Unavailable</T>}</strong>
                          </div>
                        </div>

                        {swapQuoteError
                          ? <div className='swap-error'><LocalizedMessage message={swapQuoteError} /></div>
                          : null}
                        {swapActionError
                          ? <div className='swap-error'><LocalizedMessage message={swapActionError} /></div>
                          : null}

                        <div className='swap-actions'>
                          <button className='swap-primary-button' type='button' onClick={fetchSwapQuote} disabled={!swapAmount || !swapPairIsValid || swapQuoteState === 'loading'}>
                            {swapQuoteState === 'loading' ? <T id='swap.quoting'>Quoting...</T> : <T id='swap.getQuote'>Get quote</T>}
                          </button>
                          <button
                            className='swap-secondary-button'
                            type='button'
                            onClick={executeSwap}
                            disabled={!swapAmount || !swapSupported || !swapPairIsValid || swapActionState === 'loading'}
                          >
                            {swapActionState === 'loading' ? <T id='swap.swapping'>Swapping...</T> : <T id='swap.title'>Swap</T>}
                          </button>
                        </div>

                        <div className='swap-status-line'>
                          <span><T id='swap.status'>Status</T></span>
                          <strong>
                            {swapActionState === 'succeeded'
                              ? <T id='swap.succeeded'>Succeeded</T>
                              : swapActionState === 'loading'
                                ? <T id='common.swapping'>Swapping...</T>
                                : <T id='swap.idle'>Idle</T>}
                          </strong>
                        </div>

                        {swapAction?.txHash
                          ? (
                            <div className='swap-action-card'>
                              <span><T id='swap.transactionHash'>Transaction hash</T></span>
                              <strong>{swapAction.txHash}</strong>
                            </div>
                            )
                          : null}
                      </div>
                      )}
            </section>
          )}

          {activeTab === 'more'
            ? (
              <button className='text-action signout-inline' type='button' onClick={logout}>
                <LogOut size={14} />
                <T id='auth.signOut'>Sign out</T>
              </button>
              )
            : null}

          {depositOpen
            ? (
              <div
                className='deposit-modal'
                role='presentation'
                onClick={() => setDepositOpen(false)}
              >
                <section
                  className='wallet-dialog wallet-dialog--sheet deposit-sheet deposit-crypto-sheet'
                  role='dialog'
                  aria-modal='true'
                  aria-labelledby='deposit-dialog-title'
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className='wallet-dialog-handle' aria-hidden='true' />
                  <header className='wallet-dialog-header'>
                    <span className='wallet-dialog-header-icon'>
                      <Plus size={21} />
                    </span>
                    <div className='wallet-dialog-heading'>
                      <h2 id='deposit-dialog-title'><T id='deposit.title'>Deposit Crypto</T></h2>
                      <p><T id='deposit.subtitle'>Follow the steps below to deposit.</T></p>
                    </div>
                    <button
                      className='wallet-icon-button wallet-dialog-close'
                      type='button'
                      onClick={() => setDepositOpen(false)}
                      aria-label={t('deposit.close')}
                    >
                      <X size={17} />
                    </button>
                  </header>

                  <div className='deposit-steps'>
                    <div className='deposit-step deposit-qr-layout'>
                      <span className='deposit-step-number'>1</span>
                      <div className='deposit-step-content'>
                        <strong className='deposit-step-title'><T id='deposit.scan'>Scan QR code</T></strong>
                        <span className='deposit-step-description'><T id='deposit.scanDescription'>Open your wallet app & scan the code to get address.</T></span>
                      </div>
                      <div className='deposit-qr-card'>
                        {depositQrSvg
                          ? <div className='deposit-qr-image' role='img' aria-label='Deposit QR code' dangerouslySetInnerHTML={{ __html: depositQrSvg }} />
                          : <div className='deposit-qr-fallback'><T id='deposit.fallbackQr'>QR</T></div>}
                      </div>
                    </div>

                    <div className='deposit-step'>
                      <span className='deposit-step-number'>2</span>
                      <div className='deposit-step-content'>
                        <strong className='deposit-step-title'><T id='deposit.copyTitle'>Or copy wallet address</T></strong>
                        <span className='deposit-step-description'><T id='deposit.copyDescription'>Paste this address in your wallet & send your crypto.</T></span>
                        <div className='deposit-address-control'>
                          <CoinIcon
                            symbol={chainIconSymbol(defaultChain)}
                            label='Ethereum'
                            logoUrl={chainLogoUrl(defaultChain)}
                            className='deposit-address-network-icon'
                          />
                          <span className='deposit-address-text' title={ethereumWallet?.address || ''}>{formatAddress(address, 8, 6)}</span>
                          <button className='deposit-address-copy' type='button' onClick={copyAddress} disabled={!ethereumWallet?.address} aria-label='Copy wallet address' title={copied ? 'Copied' : 'Copy wallet address'}>
                            {copied ? <Check size={15} /> : <Copy size={15} />}
                          </button>
                        </div>
                        {copied
                          ? <span className='deposit-copy-feedback'><Check size={12} /> <T id='deposit.copied'>Copied!</T></span>
                          : null}
                      </div>
                    </div>

                    <div className='deposit-step'>
                      <span className='deposit-step-number'>3</span>
                      <div className='deposit-step-content'>
                        <strong className='deposit-step-title'><T id='deposit.networks'>Works on all supported networks</T></strong>
                        <div className='deposit-network-strip' aria-label='Supported networks'>
                          {evmNetworks.map((chain) => (
                            <div className='deposit-network-item' key={chain.id}>
                              <span className='deposit-network-icon'>
                                <CoinIcon symbol={chainIconSymbol(chain)} label={chain.name} logoUrl={chainLogoUrl(chain)} className='network-logo network-logo-sm' />
                              </span>
                              <span className='deposit-network-name'>{getChainLabel(chain)}</span>
                            </div>
                          ))}
                        </div>
                        <div className='deposit-safety-note'>
                          <Info size={15} />
                          <span><T id='deposit.safety'>Only send supported assets on the networks shown above.</T></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              )
            : null}

          {withdrawOpen
            ? (
              <div
                className='deposit-modal'
                role='presentation'
                onClick={closeWalletWithdraw}
              >
                <section
                  className='wallet-dialog wallet-dialog--sheet deposit-sheet custom-token-sheet'
                  role='dialog'
                  aria-modal='true'
                  aria-labelledby='withdraw-dialog-title'
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className='wallet-dialog-handle' aria-hidden='true' />
                  <header className='wallet-dialog-header'>
                    <span className='wallet-dialog-header-icon'><ArrowUpFromLine size={21} /></span>
                    <div className='wallet-dialog-heading'>
                      <h2 id='withdraw-dialog-title'><T id='withdraw.title'>Send from wallet</T></h2>
                      <p><T id='withdraw.subtitle'>Withdraw assets from your wallet</T></p>
                    </div>
                    <button className='wallet-icon-button wallet-dialog-close' type='button' onClick={closeWalletWithdraw} aria-label={t('withdraw.close')}>
                      <X size={17} />
                    </button>
                  </header>

                  <div className='wallet-dialog-body'>

                    {walletWithdrawProgress
                      ? (
                        <div className='wallet-withdraw-progress' aria-live='polite'>
                          <div className='wallet-withdraw-progress-steps'>
                            {walletWithdrawProgress.gasAccount
                              ? (
                                <>
                                  <span className={['checking_gas', 'signing'].includes(walletWithdrawProgress.phase) ? 'active' : ['funding', 'sending', 'confirming', 'confirmed'].includes(walletWithdrawProgress.phase) ? 'done' : ''}>1. <T id='withdraw.prepare'>Prepare</T></span>
                                  <span className={walletWithdrawProgress.phase === 'funding' ? 'active' : ['sending', 'confirming', 'confirmed'].includes(walletWithdrawProgress.phase) ? 'done' : ''}>2. <T id='withdraw.fundGas'>Fund gas</T></span>
                                  <span className={['sending', 'confirming'].includes(walletWithdrawProgress.phase) ? 'active' : walletWithdrawProgress.phase === 'confirmed' ? 'done' : ''}>3. <T id='withdraw.sendAsset' fields={{ asset: walletWithdrawProgress.assetSymbol || 'asset' }}>Send {walletWithdrawProgress.assetSymbol || 'asset'}</T></span>
                                </>
                                )
                              : (
                                <>
                                  <span className={walletWithdrawProgress.phase === 'sending' ? 'active' : ['confirming', 'confirmed'].includes(walletWithdrawProgress.phase) ? 'done' : ''}>1. <T id='common.send'>Send</T></span>
                                  <span className={walletWithdrawProgress.phase === 'confirming' ? 'active' : walletWithdrawProgress.phase === 'confirmed' ? 'done' : ''}>2. <T id='withdraw.confirm'>Confirm</T></span>
                                </>
                                )}
                          </div>
                          <p>
                            {walletWithdrawProgress.phase === 'checking_gas'
                              ? (walletWithdrawProgress.detail
                                  ? <LocalizedMessage message={walletWithdrawProgress.detail} />
                                  : <T id='withdraw.checkingGasCoverage'>Checking Gas Account coverage...</T>)
                              : walletWithdrawProgress.phase === 'signing'
                                ? <T id='withdraw.approveInWallet'>Approve the transaction in your wallet...</T>
                                : walletWithdrawProgress.phase === 'funding'
                                  ? <T id='withdraw.fundingNetworkGas' fields={{ asset: walletWithdrawProgress.assetSymbol || t('common.asset') }}>Funding network gas before sending {walletWithdrawProgress.assetSymbol || 'asset'}...</T>
                                  : walletWithdrawProgress.phase === 'confirming'
                                    ? <T id='withdraw.waitingTransferConfirmation' fields={{ asset: walletWithdrawProgress.assetSymbol || t('common.asset') }}>Waiting for the {walletWithdrawProgress.assetSymbol || 'asset'} transfer to confirm...</T>
                                    : walletWithdrawProgress.phase === 'confirmed'
                                      ? <T id='withdraw.transferConfirmed'>Transfer confirmed onchain.</T>
                                      : walletWithdrawProgress.phase === 'failed'
                                        ? <T id='withdraw.transferFailed'>Transfer failed.</T>
                                        : <T id='withdraw.preparingTransaction'>Preparing transaction...</T>}
                          </p>
                        </div>
                        )
                      : null}

                    {walletWithdrawError ? <div className='swap-error'><LocalizedMessage message={walletWithdrawError} /></div> : null}
                    {walletWithdrawMessage
                      ? (
                        <div className='swap-success'>
                          <span><LocalizedMessage message={walletWithdrawMessage} /></span>
                          {walletWithdrawTxLink?.url
                            ? (
                              <button
                                className='wallet-withdraw-copy-link'
                                type='button'
                                onClick={() => copyUtilityValue(walletWithdrawTxLink.url)}
                              >
                                <Copy size={13} />
                                <span>{copiedUtilityValue === walletWithdrawTxLink.url ? <T id='common.copied'>Copied</T> : <T id='common.copyExplorerLink'>Copy explorer link</T>}</span>
                              </button>
                              )
                            : null}
                        </div>
                        )
                      : null}

                    <div className='custom-token-form wallet-withdraw-form'>
                      <AssetPicker
                        label={t('withdraw.asset')}
                        value={selectedWalletWithdrawAsset?.key || ''}
                        options={walletTransferAssets}
                        onSelect={(assetKey) => setWalletWithdrawDraft((current) => ({ ...current, assetKey }))}
                        helper={t('withdraw.chooseBalance')}
                        mobileSheet
                        getOptionValue={(asset) => asset.key}
                        getOptionTitle={getWalletTransferAssetTitle}
                        getOptionSubtitle={getWalletTransferAssetSubtitle}
                        getOptionSymbol={(asset) => asset.symbol || '?'}
                        getOptionLogoUrl={(asset) => asset.logoUrl}
                        getOptionChainId={(asset) => asset.chainId}
                        getOptionAddress={(asset) => asset.address}
                        getOptionName={(asset) => asset.name}
                        getEmptyTitle={() => t('withdraw.noBalance')}
                        getEmptySubtitle={() => t('withdraw.depositFunds')}
                      />

                      <label className='form-field'>
                        <span><T id='withdraw.amount'>Amount</T></span>
                        <div className='swap-amount-card wallet-amount-card'>
                          <input
                            type='text'
                            inputMode='decimal'
                            value={walletWithdrawDraft.amount}
                            onInput={(event) => setWalletWithdrawDraft((current) => ({ ...current, amount: formatTokenAmountInput(event.currentTarget.value) }))}
                            placeholder='10.0'
                          />
                          <button
                            className='wallet-button wallet-button--compact wallet-button--ghost swap-max-button'
                            type='button'
                            onClick={() => setWalletWithdrawDraft((current) => ({ ...current, amount: selectedWalletWithdrawAsset ? tokenDisplayAmount(selectedWalletWithdrawAsset) : current.amount }))}
                            disabled={!selectedWalletWithdrawAsset}
                          >
                            <T id='common.max'>Max</T>
                          </button>
                        </div>
                      </label>

                      <label className='form-field'>
                        <span><T id='withdraw.destination'>Destination</T></span>
                        <input
                          type='text'
                          value={walletWithdrawDraft.destinationAddress}
                          onInput={(event) => setWalletWithdrawDraft((current) => ({ ...current, destinationAddress: event.currentTarget.value.trim() }))}
                          placeholder='0x...'
                        />
                      </label>

                      <AddressRiskBadge
                        loading={walletAddressRiskLoading}
                        risk={walletAddressRisk}
                        confirmed={walletAddressRiskConfirmed}
                        onConfirm={() => setWalletAddressRiskConfirmed(true)}
                      />

                      <div className='wallet-withdraw-mode'>
                        <span className='wallet-field-label'><T id='withdraw.gasMode'>Gas mode</T></span>
                        <div className='wallet-segmented-control'>
                          <button
                            className={walletWithdrawDraft.gasMode === 'gas_account' ? 'wallet-segment-tab active' : 'wallet-segment-tab'}
                            type='button'
                            onClick={() => setWalletWithdrawDraft((current) => ({ ...current, gasMode: 'gas_account' }))}
                            disabled={!hasRabbyGasSession}
                          >
                            <T id='withdraw.gasAccount'>Gas Account</T>
                          </button>
                          <button
                            className={walletWithdrawDraft.gasMode === 'native' ? 'wallet-segment-tab active' : 'wallet-segment-tab'}
                            type='button'
                            onClick={() => setWalletWithdrawDraft((current) => ({ ...current, gasMode: 'native' }))}
                          >
                            <T id='withdraw.nativeGas'>Native gas</T>
                          </button>
                        </div>
                        <p className='wallet-form-note'>
                          {walletWithdrawDraft.gasMode === 'gas_account'
                            ? <T id='withdraw.gasAccountHint'>Uses wallet gas when available; Gas Account funds gas only when native gas balance is insufficient.</T>
                            : <T id='withdraw.nativeGasHint' fields={{ symbol: activeNetworkLogo }}>Wallet pays gas directly in {activeNetworkLogo}.</T>}
                        </p>
                      </div>

                      {canEstimateWalletWithdrawGas
                        ? (
                          <div className='wallet-withdraw-mode'>
                            <span className='wallet-field-label'><T id='withdraw.speed'>Speed</T></span>
                            <div className={`wallet-segmented-control wallet-gas-level-tabs wallet-gas-level-tabs--${[...WALLET_GAS_LEVELS, ...(walletWithdrawDraft.gasMode === 'native' ? [{ level: 'custom', label: 'Custom' }] : [])].length}`}>
                              {[...WALLET_GAS_LEVELS, ...(walletWithdrawDraft.gasMode === 'native' ? [{ level: 'custom', label: 'Custom' }] : [])].map((item) => {
                                const gasLevelLabel = {
                                  slow: t('withdraw.standard'),
                                  normal: t('withdraw.fast'),
                                  fast: t('withdraw.instant'),
                                  custom: t('withdraw.custom')
                                }[item.level] || item.label
                                const quote = item.level === 'custom'
                                  ? (walletWithdrawGasLevel === 'custom' ? selectedWalletWithdrawGasQuote : null)
                                  : walletWithdrawGasQuotes.find((entry) => entry.level === item.level) || null
                                return (
                                  <button
                                    key={item.level}
                                    className={walletWithdrawGasLevel === item.level ? 'wallet-segment-tab active wallet-gas-level-tab' : 'wallet-segment-tab wallet-gas-level-tab'}
                                    type='button'
                                    onClick={() => setWalletWithdrawGasLevel(item.level)}
                                  >
                                    <span>{gasLevelLabel}</span>
                                    <em>{quote ? getWalletGasLevelSubtitle(quote) : ''}</em>
                                  </button>
                                )
                              })}
                            </div>
                            {walletWithdrawDraft.gasMode === 'native' && walletWithdrawGasLevel === 'custom'
                              ? (
                                <label className='form-field'>
                                  <span><T id='withdraw.customGwei'>Custom gwei</T></span>
                                  <input
                                    type='text'
                                    inputMode='decimal'
                                    value={walletWithdrawCustomGwei}
                                    onInput={(event) => setWalletWithdrawCustomGwei(formatTokenAmountInput(event.currentTarget.value))}
                                    placeholder='1.5'
                                  />
                                </label>
                                )
                              : null}
                            {walletWithdrawGasError
                              ? <p className='wallet-form-note'><LocalizedMessage message={walletWithdrawGasError} /></p>
                              : null}
                            {selectedWalletWithdrawGasQuote
                              ? (
                                <p className='wallet-form-note'>
                                  <T id='withdraw.estimatedFee' fields={{ amount: formatUsd(selectedWalletWithdrawGasQuote.usdCost || 0, 4) }}>Estimated fee: ~{formatUsd(selectedWalletWithdrawGasQuote.usdCost || 0, 4)}</T>
                                </p>
                                )
                              : null}
                          </div>
                          )
                        : null}

                    </div>
                  </div>
                  <footer className='wallet-dialog-footer'>
                    <button
                      className='wallet-button wallet-button--primary wallet-button--full'
                      type='button'
                      onClick={() => submitWalletWithdraw()}
                      disabled={!selectedWalletWithdrawAsset || !walletWithdrawDraft.amount || !walletWithdrawDraft.destinationAddress || walletWithdrawState === 'loading' || walletAddressRiskLoading || walletTxRiskLoading || (canEstimateWalletWithdrawGas && !selectedWalletWithdrawGasQuote && !walletWithdrawGasError) || walletAddressRisk?.level === 'forbidden' || (walletAddressRisk?.level === 'danger' && !walletAddressRiskConfirmed) || walletTxRisk?.level === 'forbidden'}
                    >
                      {walletWithdrawState === 'loading' ? <T id='withdraw.sending'>Sending...</T> : <T id='common.send'>Send</T>}
                    </button>
                  </footer>
                </section>
              </div>
              )
            : null}

          {walletTxRiskOpen || walletTxRiskLoading
            ? (
              <TransactionRiskModal
                loading={walletTxRiskLoading}
                risk={walletTxRisk}
                confirmed={walletTxRiskConfirmed}
                onConfirmedChange={setWalletTxRiskConfirmed}
                onCancel={() => setWalletTxRiskOpen(false)}
                onContinue={() => {
                  setWalletTxRiskConfirmed(true)
                  setWalletTxRiskOpen(false)
                  submitWalletWithdraw({ skipRiskCheck: true })
                }}
              />
              )
            : null}

          {customTokenOpen
            ? (
              <div
                className='deposit-modal'
                role='presentation'
                onClick={() => setCustomTokenOpen(false)}
              >
                <section
                  className='wallet-dialog wallet-dialog--sheet deposit-sheet custom-token-sheet'
                  role='dialog'
                  aria-modal='true'
                  aria-labelledby='custom-token-dialog-title'
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className='wallet-dialog-handle' aria-hidden='true' />
                  <header className='wallet-dialog-header'>
                    <span className='wallet-dialog-header-icon'>
                      {customTokenSafety?.stableLookalike && !customTokenSafety.knownByCmc
                        ? <PiggyBank size={21} />
                        : <Gem size={21} />}
                    </span>
                    <div className='wallet-dialog-heading'>
                      <h2 id='custom-token-dialog-title'><T id='customToken.title'>Add token</T></h2>
                      <p><T id='customToken.subtitle'>Add a custom token to your wallet</T></p>
                    </div>
                    <button className='wallet-icon-button wallet-dialog-close' type='button' onClick={() => setCustomTokenOpen(false)} aria-label={t('customToken.close')}>
                      <X size={17} />
                    </button>
                  </header>

                  <div className='wallet-dialog-body'>
                    <div className='custom-token-form'>
                      <div className='custom-token-notice'>
                        <Info size={20} aria-hidden='true' />
                        <div>
                          <strong><T id='customToken.trustTitle'>Only add tokens you trust</T></strong>
                          <span><T id='customToken.trustDescription'>Anyone can create a token with a familiar name or symbol. Check the contract on the block explorer before adding it. You are responsible for verifying the token.</T></span>
                        </div>
                      </div>
                      <label className='form-field'>
                        <span><T id='customToken.contractAddress'>Contract address</T></span>
                        <input
                          type='text'
                          className={customTokenSafety?.suspicious ? 'custom-token-input suspicious' : ''}
                          value={customTokenDraft.address}
                          onInput={(event) => setCustomTokenDraft((current) => ({ ...current, address: event.currentTarget.value }))}
                          placeholder='0x...'
                        />
                      </label>
                      {customTokenSafety?.suspicious
                        ? (
                          <div className='custom-token-warning'>
                            <strong><T id='customToken.reviewTitle'>Review this token carefully</T></strong>
                            <ul>
                              {customTokenSafety.reasons.map((reason) => <li key={reason}>{reason}</li>)}
                            </ul>
                            <label className='custom-token-acknowledge'>
                              <input
                                type='checkbox'
                                checked={customTokenAcknowledged}
                                onChange={(event) => setCustomTokenAcknowledged(event.currentTarget.checked)}
                              />
                              <span><T id='customToken.unsafeAcknowledgement'>I checked the contract & understand this token may be unsafe.</T></span>
                            </label>
                          </div>
                          )
                        : null}
                      {customTokenLookup
                        ? (
                          <div className='token-lookup-hint'>
                            <span><T id='customToken.lookup'>On-chain lookup</T></span>
                            <strong>
                              {customTokenLookup.symbol || 'Unknown'}
                              {customTokenLookup.name ? ` · ${customTokenLookup.name}` : ''}
                              {Number.isFinite(Number(customTokenLookup.decimals)) ? ` · ${Number(customTokenLookup.decimals)} decimals` : ''}
                            </strong>
                          </div>
                          )
                        : null}
                      <label className='form-field'>
                        <span><T id='customToken.symbol'>Symbol</T></span>
                        <input
                          type='text'
                          value={customTokenDraft.symbol}
                          onInput={(event) => setCustomTokenDraft((current) => ({ ...current, symbol: event.currentTarget.value }))}
                          placeholder='TOKEN'
                        />
                      </label>
                      <label className='form-field'>
                        <span><T id='customToken.name'>Name</T></span>
                        <input
                          type='text'
                          value={customTokenDraft.name}
                          onInput={(event) => setCustomTokenDraft((current) => ({ ...current, name: event.currentTarget.value }))}
                          placeholder='Token name'
                        />
                      </label>
                      <label className='form-field'>
                        <span><T id='customToken.decimals'>Decimals</T></span>
                        <input
                          type='number'
                          min='0'
                          max='36'
                          value={customTokenDraft.decimals}
                          onInput={(event) => setCustomTokenDraft((current) => ({ ...current, decimals: event.currentTarget.value }))}
                          placeholder='18'
                        />
                      </label>
                      {customTokenError ? <div className='swap-error'><LocalizedMessage message={customTokenError} /></div> : null}
                    </div>
                  </div>

                  <footer className='wallet-dialog-footer custom-token-actions'>
                    <button className='wallet-button wallet-button--secondary wallet-button--full' type='button' onClick={() => setCustomTokenOpen(false)}>
                      <T id='common.cancel'>Cancel</T>
                    </button>
                    <button className='wallet-button wallet-button--primary wallet-button--full' type='button' onClick={submitCustomToken} disabled={customTokenSafety?.suspicious && !customTokenAcknowledged}>
                      <T id='customToken.add'>Add token</T>
                    </button>
                  </footer>
                </section>
              </div>
              )
            : null}

          <nav className={walletFamily === 'tari' ? 'primary-nav primary-nav--tari' : p2pEnabled ? 'primary-nav primary-nav--with-p2p' : 'primary-nav primary-nav--without-p2p'} aria-label={t('nav.sections')}>
            <button className={activeTab === 'wallet' ? 'primary-nav-item active' : 'primary-nav-item'} type='button' onClick={() => setActiveTab('wallet')}>
              <Wallet size={22} strokeWidth={2.2} />
              <span><T id='nav.wallet'>Wallet</T></span>
            </button>
            {walletFamily === 'tari' && <button className={activeTab === 'faucet' ? 'primary-nav-item active' : 'primary-nav-item'} type='button' onClick={() => setActiveTab('faucet')}><Droplets size={22} /><span>{t('faucet.title')}</span></button>}
            {walletFamily !== 'tari' && <button className={activeTab === 'swap' ? 'primary-nav-item active' : 'primary-nav-item'} type='button' onClick={() => { setWalletFamily('evm'); setActiveTab('swap') }}>
              <ArrowLeftRight size={22} strokeWidth={2.2} />
              <span><T id='nav.swap'>Swap</T></span>
            </button>}
            {p2pEnabled && walletFamily !== 'tari'
              ? (
                <button className={activeTab === 'p2p' ? 'primary-nav-item active' : 'primary-nav-item'} type='button' onClick={() => { setWalletFamily('evm'); setActiveTab('p2p') }}>
                  <BadgeRussianRuble size={21} strokeWidth={2.2} />
                  <span><T id='nav.p2p'>P2P</T></span>
                </button>
                )
              : null}
            {walletFamily !== 'tari' && <button className={activeTab === 'gas' ? 'primary-nav-item active' : 'primary-nav-item'} type='button' onClick={() => { setWalletFamily('evm'); setActiveTab('gas') }}>
              <Fuel className={hasRabbyGasSession ? 'primary-nav-gas-icon' : 'primary-nav-gas-icon primary-nav-gas-icon--standalone'} size={22} strokeWidth={2.2} />
              <span className='primary-nav-gas-label'>
                <T id='nav.gas'>Gas</T>
                {hasRabbyGasSession
                  ? (
                    <em className='primary-nav-balance' aria-hidden='true'>
                      {formatUsd(rabbyGasBalance, 2)}
                    </em>
                    )
                  : null}
              </span>
            </button>}
            <button className={activeTab === 'more' ? 'primary-nav-item active' : 'primary-nav-item'} type='button' onClick={() => setActiveTab('more')}>
              <LayoutGrid size={22} strokeWidth={2.2} />
              <span><T id='nav.more'>More</T></span>
            </button>
          </nav>

        </section>
      </div>
    </main>
  )
}
