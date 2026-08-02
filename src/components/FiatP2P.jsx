import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Landmark,
  RefreshCcw,
  Send,
  ShieldCheck,
  Smartphone
} from 'lucide-preact'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { CoinIcon } from './CoinIcon.jsx'
import { fetchJson, postJson } from '../lib/api.js'
import { api } from '../lib/urls.js'
import { chainMap, getChainExplorerUrl, getChainLabel, getChainSymbol, getNetworkLogoUrl } from '../lib/chains.js'
import { formatFiatP2pAmountInput } from '../lib/fiatP2pAmount.js'
import { calculateRapiraReceiveAmount, getRapiraP2pRate } from '../lib/rapiraP2p.js'
import {
  findRestorableFiatP2pOpenInvoice,
  loadFiatP2pOpenInvoice,
  loadFiatP2pPayments,
  removeFiatP2pOpenInvoice,
  removeFiatP2pPayment,
  saveFiatP2pOpenInvoice,
  saveFiatP2pPayment
} from '../lib/fiatP2pPayments.js'
import { formatAddress } from '../lib/format.js'
import { LocalizedMessage, T, useI18n } from '../i18n/index.jsx'

const EMPTY_DRAFT = {
  network: '',
  tokenAddress: '',
  amount: '',
  payoutMethod: 'phone',
  bankName: '',
  payoutTarget: ''
}

const EMPTY_DEPOSIT_CHECK = {
  orderId: null,
  status: 'idle',
  error: null
}

function statusLabel (status) {
  const labels = {
    awaiting_deposit: 'p2p.waitingDeposit',
    sweeping: 'p2p.verifyingDeposit',
    pending_payout: 'p2p.payoutPending',
    completed: 'p2p.completed',
    cancelled: 'p2p.cancelled',
    failed: 'p2p.needsAttention'
  }
  return labels[status] || status
}

function networkLabel (network) {
  return getChainLabel(chainMap.get(Number(network?.chainId))) || network?.network
}

function sameTokenAddress (first, second) {
  return String(first || '').toLowerCase() === String(second || '').toLowerCase()
}

export function FiatP2P ({ walletAddress, verifyInvoice, checkInvoiceBalance, sendPayment, finalizeInvoice }) {
  const { t } = useI18n()
  const [config, setConfig] = useState(null)
  const [orders, setOrders] = useState([])
  const [draft, setDraft] = useState(EMPTY_DRAFT)
  const [activeOrder, setActiveOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [action, setAction] = useState('idle')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [copied, setCopied] = useState(false)
  const [contractCopied, setContractCopied] = useState(false)
  const [networkPickerOpen, setNetworkPickerOpen] = useState(false)
  const [submittedPayments, setSubmittedPayments] = useState(() => loadFiatP2pPayments(walletAddress))
  const [trackedOpenInvoice, setTrackedOpenInvoice] = useState(() => loadFiatP2pOpenInvoice(walletAddress))
  const [depositCheck, setDepositCheck] = useState(EMPTY_DEPOSIT_CHECK)
  const [rapiraRate, setRapiraRate] = useState(null)
  const depositCheckInFlightRef = useRef(null)
  const rapiraRateRequestRef = useRef(null)

  useEffect(() => {
    setSubmittedPayments(loadFiatP2pPayments(walletAddress))
    setTrackedOpenInvoice(loadFiatP2pOpenInvoice(walletAddress))
  }, [walletAddress])

  const loadP2P = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [nextConfig, history] = await Promise.all([
        fetchJson(api.fiatP2p.config),
        fetchJson(api.fiatP2p.orders)
      ])
      const nextOrders = history.orders || []
      const trackedPayments = loadFiatP2pPayments(walletAddress)
      let savedOpenInvoice = loadFiatP2pOpenInvoice(walletAddress)
      if (!savedOpenInvoice) {
        const submittedOrder = nextOrders.find(order => (
          order.status === 'awaiting_deposit' && trackedPayments[order.id]
        ))
        if (submittedOrder) {
          savedOpenInvoice = saveFiatP2pOpenInvoice({
            walletAddress,
            order: submittedOrder,
            activatedBy: 'send_from_wallet'
          })
        }
      }
      const restorableOrder = findRestorableFiatP2pOpenInvoice(nextOrders, savedOpenInvoice)

      const availableNetwork = nextConfig.networks?.find(item => item.available && item.tokens?.length)
      setConfig(nextConfig)
      setOrders(nextOrders)
      setSubmittedPayments(trackedPayments)
      if (restorableOrder) {
        setTrackedOpenInvoice(savedOpenInvoice)
        setActiveOrder(current => current || restorableOrder)
      } else if (savedOpenInvoice) {
        setTrackedOpenInvoice(removeFiatP2pOpenInvoice(walletAddress, savedOpenInvoice.orderId))
      }
      setDraft(current => {
        const network = nextConfig.networks?.find(item => item.network === current.network && item.available) || availableNetwork
        const token = network?.tokens?.find(item => sameTokenAddress(item.address, current.tokenAddress)) || network?.tokens?.[0]
        return {
          ...current,
          network: network?.network || '',
          tokenAddress: token?.address || ''
        }
      })
    } catch (loadError) {
      setError(loadError.message || 'Unable to load P2P')
    } finally {
      setLoading(false)
    }
  }, [walletAddress])

  useEffect(() => {
    loadP2P()
  }, [loadP2P])

  const selectedNetwork = useMemo(
    () => config?.networks?.find(item => item.network === draft.network) || null,
    [config?.networks, draft.network]
  )
  const selectedToken = useMemo(
    () => selectedNetwork?.tokens?.find(item => sameTokenAddress(item.address, draft.tokenAddress)) || null,
    [draft.tokenAddress, selectedNetwork]
  )
  const minimumAmountUsd = Number(config?.minimumAmountUsd || 50)
  const maximumAmountUsd = Number(config?.maximumAmountUsd || 150)
  const amountIsWithinLimits = useMemo(() => {
    const amount = Number(draft.amount)
    return Number.isFinite(amount) && amount >= minimumAmountUsd && amount <= maximumAmountUsd
  }, [draft.amount, maximumAmountUsd, minimumAmountUsd])
  const approximateReceiveAmount = useMemo(
    () => calculateRapiraReceiveAmount(draft.amount, rapiraRate?.rate),
    [draft.amount, rapiraRate?.rate]
  )

  useEffect(() => {
    if (!draft.amount || rapiraRate || rapiraRateRequestRef.current) return
    const promise = getRapiraP2pRate()
      .then(setRapiraRate)
      .catch(() => null)
      .finally(() => {
        rapiraRateRequestRef.current = null
      })
    rapiraRateRequestRef.current = promise
  }, [draft.amount, rapiraRate])
  const activeConfiguredToken = useMemo(() => {
    if (!activeOrder?.token?.address) return null
    return config?.networks
      ?.find(item => Number(item.chainId) === Number(activeOrder.chainId))
      ?.tokens?.find(item => sameTokenAddress(item.address, activeOrder.token.address)) || null
  }, [activeOrder, config?.networks])
  const activeChain = activeOrder ? chainMap.get(Number(activeOrder.chainId)) : null
  const activeTokenExplorerUrl = activeOrder?.token?.address
    ? getChainExplorerUrl(activeChain, activeOrder.token.address)
    : null
  const trackOpenInvoice = useCallback((order, activatedBy) => {
    setTrackedOpenInvoice(saveFiatP2pOpenInvoice({
      walletAddress,
      order,
      activatedBy
    }))
  }, [walletAddress])
  const checkInvoiceDeposit = useCallback(async (order = activeOrder) => {
    if (!order?.id || typeof checkInvoiceBalance !== 'function') {
      return { status: 'unavailable', error: 'Invoice balance check is unavailable' }
    }
    if (depositCheckInFlightRef.current?.orderId === order.id) {
      return depositCheckInFlightRef.current.promise
    }

    setDepositCheck({ orderId: order.id, status: 'checking', error: null })
    const promise = (async () => {
      try {
        const result = await checkInvoiceBalance(order)
        setDepositCheck({ orderId: order.id, status: result.status, error: null })
        return result
      } catch (checkError) {
        const result = {
          status: 'unavailable',
          error: checkError.message || 'Unable to check the invoice balance'
        }
        setDepositCheck({ orderId: order.id, ...result })
        return result
      } finally {
        if (depositCheckInFlightRef.current?.orderId === order.id) {
          depositCheckInFlightRef.current = null
        }
      }
    })()
    depositCheckInFlightRef.current = { orderId: order.id, promise }
    return promise
  }, [activeOrder, checkInvoiceBalance])
  const updateDraft = useCallback((field, value) => {
    setError(null)
    setMessage(null)
    setDraft(current => ({ ...current, [field]: value }))
  }, [])

  const selectNetwork = useCallback((networkName) => {
    const network = config?.networks?.find(item => item.network === networkName)
    const token = network?.tokens?.find(item => sameTokenAddress(item.address, draft.tokenAddress)) || network?.tokens?.[0]
    setError(null)
    setMessage(null)
    setNetworkPickerOpen(false)
    setDraft(current => ({
      ...current,
      network: networkName,
      tokenAddress: token?.address || ''
    }))
  }, [config?.networks, draft.tokenAddress])

  const createOrder = useCallback(async (event) => {
    event.preventDefault()
    setAction('creating')
    setError(null)
    setMessage(null)
    try {
      const result = await postJson(api.fiatP2p.orders, draft)
      await verifyInvoice(result.order)
      setActiveOrder(result.order)
      setOrders(current => [result.order, ...current.filter(item => item.id !== result.order.id)])
      setDraft(current => ({
        ...current,
        amount: '',
        bankName: '',
        payoutTarget: ''
      }))
      setMessage('Invoice ready. Send the exact stablecoin amount to continue.')
    } catch (createError) {
      setError(createError.message || 'Unable to create P2P order')
    } finally {
      setAction('idle')
    }
  }, [draft, verifyInvoice])

  const finalizeOrder = useCallback(async (order = activeOrder) => {
    if (!order) return
    setAction('preparing')
    setError(null)
    setMessage('Checking the exact stablecoin deposit…')
    try {
      const balanceCheck = await checkInvoiceDeposit(order)
      if (balanceCheck.status !== 'matched') {
        if (balanceCheck.status === 'overpaid') {
          throw new Error('The invoice contains more than the expected amount. Contact support before continuing.')
        }
        if (balanceCheck.status === 'unavailable') {
          throw new Error('The invoice balance could not be checked. Please try again shortly.')
        }
        throw new Error(`Exact deposit not detected. Send exactly ${order.amount} ${order.token.symbol}.`)
      }
      const prepared = await postJson(api.fiatP2p.prepare(order.id), {})
      setAction('finalizing')
      setMessage('Confirm deposit collection in your wallet.')
      const settlementTransactionHash = await finalizeInvoice(
        order,
        prepared.transactions
      )
      setAction('confirming')
      setMessage('Settlement confirmed onchain. Notifying the payout operator…')
      const result = await postJson(api.fiatP2p.confirm(order.id), {
        settlementTransactionHash
      })
      setActiveOrder(result.order)
      setOrders(current => current.map(item => item.id === result.order.id ? result.order : item))
      setTrackedOpenInvoice(removeFiatP2pOpenInvoice(walletAddress, result.order.id))
      setMessage('Deposit verified. The operator has received your payout instructions.')
    } catch (confirmError) {
      setMessage(null)
      setError(confirmError.message || 'Unable to verify the deposit')
    } finally {
      setAction('idle')
    }
  }, [activeOrder, checkInvoiceDeposit, finalizeInvoice, walletAddress])

  const payFromWallet = useCallback(async () => {
    if (!activeOrder) return
    trackOpenInvoice(activeOrder, 'send_from_wallet')
    setAction('sending')
    setError(null)
    setMessage('Verifying the invoice address…')
    try {
      await verifyInvoice(activeOrder)
      setMessage('Confirm the stablecoin transfer in your wallet.')
      let submittedHash = ''
      const trackSubmittedPayment = (txHash) => {
        submittedHash = txHash
        setSubmittedPayments(saveFiatP2pPayment({
          walletAddress,
          order: activeOrder,
          txHash
        }))
      }
      const txHash = await sendPayment(activeOrder, {
        onSubmitted: trackSubmittedPayment,
        onReverted: () => {
          setSubmittedPayments(removeFiatP2pPayment(walletAddress, activeOrder.id))
        }
      })
      if (!submittedHash && txHash) trackSubmittedPayment(txHash)
      setMessage('Transfer confirmed onchain. Checking the invoice balance…')
      await checkInvoiceDeposit(activeOrder)
      setMessage(null)
    } catch (sendError) {
      setError(sendError.message || 'Unable to send the stablecoin transfer')
      setMessage(null)
    } finally {
      setAction('idle')
    }
  }, [activeOrder, checkInvoiceDeposit, sendPayment, trackOpenInvoice, verifyInvoice, walletAddress])

  const openOrder = useCallback(async (order) => {
    setAction('verifying')
    setError(null)
    setMessage('Verifying the invoice address…')
    try {
      await verifyInvoice(order)
      setActiveOrder(order)
      setMessage(null)
    } catch (verifyError) {
      setError(verifyError.message || 'Unable to verify the invoice')
      setMessage(null)
    } finally {
      setAction('idle')
    }
  }, [verifyInvoice])

  const copyInvoiceAddress = useCallback(async () => {
    if (!activeOrder?.invoiceAddress) return
    await navigator.clipboard.writeText(activeOrder.invoiceAddress)
    trackOpenInvoice(activeOrder, 'copy_address')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
    checkInvoiceDeposit(activeOrder)
  }, [activeOrder, checkInvoiceDeposit, trackOpenInvoice])

  const copyTokenContract = useCallback(async () => {
    if (!activeOrder?.token?.address) return
    await navigator.clipboard.writeText(activeOrder.token.address)
    setContractCopied(true)
    window.setTimeout(() => setContractCopied(false), 1600)
  }, [activeOrder])

  const closeInvoice = useCallback(() => {
    setActiveOrder(null)
    setError(null)
    setMessage(null)
    setCopied(false)
    setContractCopied(false)
  }, [])

  const activePayment = activeOrder ? submittedPayments[activeOrder.id] : null
  const activeInvoiceTracked = activeOrder?.id === trackedOpenInvoice?.orderId
  const activeDepositCheck = depositCheck.orderId === activeOrder?.id ? depositCheck : EMPTY_DEPOSIT_CHECK
  const depositMatched = activeDepositCheck.status === 'matched'
  const depositOverpaid = activeDepositCheck.status === 'overpaid'
  const depositChecking = activeDepositCheck.status === 'checking'

  useEffect(() => {
    if (!activeOrder?.id || activeOrder.status !== 'awaiting_deposit' || !activeInvoiceTracked) return
    if (depositMatched || depositOverpaid) return

    let stopped = false
    let timer
    const poll = async () => {
      const result = await checkInvoiceDeposit(activeOrder)
      if (stopped || result.status === 'matched' || result.status === 'overpaid') return
      timer = window.setTimeout(poll, 15000)
    }
    poll()

    return () => {
      stopped = true
      window.clearTimeout(timer)
    }
  }, [activeInvoiceTracked, activeOrder, checkInvoiceDeposit, depositMatched, depositOverpaid])

  if (loading) {
    return (
      <section className='fiat-p2p-screen'>
        <div className='fiat-p2p-loading'>
          <RefreshCcw size={18} className='spin' />
          <span><T id='p2p.opening'>Opening P2P exchange...</T></span>
        </div>
      </section>
    )
  }

  return (
    <section className='fiat-p2p-screen'>
      <header className='fiat-p2p-head'>
        <div>
          <h2><T id='p2p.title'>Sell stablecoins for fiat</T></h2>
          <p><T id='p2p.description'>Send a supported stablecoin. An operator verifies it & sends the payout to your bank.</T></p>
        </div>
      </header>

      <div className='fiat-p2p-steps' aria-label='How P2P works'>
        <div><span>1</span><strong><T id='p2p.createInvoice'>Create invoice</T></strong></div>
        <ArrowRight size={14} />
        <div><span>2</span><strong><T id='p2p.sendCrypto'>Send crypto</T></strong></div>
        <ArrowRight size={14} />
        <div><span>3</span><strong><T id='p2p.receiveFiat'>Receive fiat</T></strong></div>
      </div>

      {error
        ? <div className='fiat-p2p-error'><LocalizedMessage message={error} /></div>
        : message
          ? <div className='fiat-p2p-message'><LocalizedMessage message={message} /></div>
          : null}

      {activeOrder
        ? (
          <div className='fiat-p2p-invoice'>
            <div className='fiat-p2p-invoice-head'>
              <div>
                <span><T id='p2p.invoiceAmount'>Invoice amount</T></span>
                <strong>{activeOrder.amount} {activeOrder.token.symbol}</strong>
                <em>{getChainLabel(chainMap.get(activeOrder.chainId))}</em>
              </div>
              <span className={`fiat-p2p-status fiat-p2p-status-${depositMatched ? 'deposit_detected' : activePayment && activeOrder.status === 'awaiting_deposit' ? 'payment_submitted' : activeOrder.status}`}>
                {depositMatched
                  ? <T id='p2p.depositDetected'>Deposit detected</T>
                  : activePayment && activeOrder.status === 'awaiting_deposit'
                    ? <T id='p2p.paymentSubmitted'>Payment submitted</T>
                    : <T id={statusLabel(activeOrder.status)}>{activeOrder.status}</T>}
              </span>
            </div>

            {activeOrder.status === 'awaiting_deposit'
              ? (
                <>
                  <div className='fiat-p2p-address'>
                    <CoinIcon
                      symbol={activeOrder.token.symbol}
                      label={activeOrder.token.symbol}
                      logoUrl={activeConfiguredToken?.logoUrl}
                    />
                    <div>
                      <span><T id='p2p.depositAddress'>Deposit address</T></span>
                      <strong title={activeOrder.invoiceAddress}>{formatAddress(activeOrder.invoiceAddress, 10, 8)}</strong>
                    </div>
                    <button type='button' onClick={copyInvoiceAddress} aria-label='Copy invoice address'>
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>

                  <div className='fiat-p2p-contract'>
                    <div>
                      <span><T id='p2p.tokenContract'>Token contract</T></span>
                      <strong title={activeOrder.token.address}>{formatAddress(activeOrder.token.address, 10, 8)}</strong>
                      <small>{activeOrder.token.symbol} · {activeOrder.token.decimals} <T id='p2p.decimals'>decimals</T></small>
                    </div>
                    <div className='fiat-p2p-contract-actions'>
                      <button type='button' onClick={copyTokenContract} aria-label='Copy token contract'>
                        {contractCopied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                      {activeTokenExplorerUrl
                        ? (
                          <a href={activeTokenExplorerUrl} target='_blank' rel='noreferrer' aria-label='Open token contract in explorer'>
                            <ExternalLink size={16} />
                          </a>
                          )
                        : null}
                    </div>
                  </div>

                  <div className='fiat-p2p-invoice-note'>
                    <ShieldCheck size={16} />
                    <span><T id='p2p.operatorNotice' fields={{ symbol: activeOrder.token.symbol, chain: getChainLabel(chainMap.get(activeOrder.chainId)) }}>Send only {activeOrder.token.symbol} on {getChainLabel(chainMap.get(activeOrder.chainId))}. The operator is notified only after the exact deposit is verified.</T></span>
                  </div>

                  {activeInvoiceTracked
                    ? (
                      <div className={`fiat-p2p-deposit-check fiat-p2p-deposit-check-${activeDepositCheck.status}`}>
                        {depositMatched
                          ? <Check size={17} />
                          : <RefreshCcw className={depositChecking ? 'spin' : ''} size={17} />}
                        <div>
                          <strong>
                            {depositMatched
                              ? <T id='p2p.exactDepositDetected'>Exact deposit detected</T>
                              : depositOverpaid
                                ? <T id='p2p.depositMismatch'>Deposit amount does not match</T>
                                : depositChecking
                                  ? <T id='p2p.checkingBalance'>Checking invoice balance</T>
                                  : activeDepositCheck.status === 'unavailable'
                                    ? <T id='p2p.balanceUnavailable'>Balance check unavailable</T>
                                    : <T id='p2p.waitingExactDeposit'>Waiting for exact deposit</T>}
                          </strong>
                          <span>
                            {depositMatched
                              ? <T id='p2p.readyToCollect'>Your stablecoin is ready to collect and send for payout.</T>
                              : depositOverpaid
                                ? <T id='p2p.mismatchHelp'>The invoice contains more than expected. Contact support before continuing.</T>
                                : activeDepositCheck.status === 'unavailable'
                                  ? <T id='p2p.retryingRpc'>RPC providers are temporarily unavailable. Retrying automatically.</T>
                                  : <T id='p2p.lookingFor' fields={{ amount: activeOrder.amount, symbol: activeOrder.token.symbol }}>Looking for exactly {activeOrder.amount} {activeOrder.token.symbol}.</T>}
                          </span>
                        </div>
                      </div>
                      )
                    : null}

                  {depositMatched
                    ? (
                      <button
                        className='fiat-p2p-primary'
                        type='button'
                        onClick={() => finalizeOrder(activeOrder)}
                        disabled={action !== 'idle'}
                      >
                        <ShieldCheck size={16} />
                        {action !== 'idle' ? <T id='p2p.requestingPayout'>Requesting payout...</T> : <T id='p2p.requestPayout'>Request fiat payout</T>}
                      </button>
                      )
                    : (
                      <>
                        {!activePayment
                          ? (
                            <button
                              className='fiat-p2p-primary'
                              type='button'
                              onClick={payFromWallet}
                              disabled={action !== 'idle' || !walletAddress || depositOverpaid}
                            >
                              <Send size={16} />
                              {action !== 'idle' ? <T id='p2p.processingTransfer'>Processing transfer...</T> : <T id='p2p.sendFromWallet'>Send from wallet</T>}
                            </button>
                            )
                          : null}
                        {activeInvoiceTracked
                          ? (
                            <button
                              className='fiat-p2p-secondary'
                              type='button'
                              onClick={() => checkInvoiceDeposit(activeOrder)}
                              disabled={depositChecking || action !== 'idle' || depositOverpaid}
                            >
                              <RefreshCcw className={depositChecking ? 'spin' : ''} size={15} />
                              {depositChecking ? <T id='p2p.checkingDeposit'>Checking deposit...</T> : <T id='p2p.checkDeposit'>Check deposit</T>}
                            </button>
                            )
                          : null}
                      </>
                      )}
                </>
                )
              : (
                <div className='fiat-p2p-complete'>
                  <Check size={20} />
                  <div>
                    <strong><T id='p2p.cryptoReceived'>Crypto received</T></strong>
                    <span><T id='p2p.payoutWithOperator' fields={{ target: activeOrder.payoutDestination }}>Your payout to {activeOrder.payoutDestination} is now with the operator.</T></span>
                  </div>
                </div>
                )}

            <button className='fiat-p2p-text-button' type='button' onClick={closeInvoice}>
              {activeOrder.status === 'awaiting_deposit'
                ? activeInvoiceTracked ? <T id='p2p.backToP2p'>Back to P2P</T> : <T id='p2p.createAnother'>Create another invoice</T>
                : <T id='p2p.done'>Done</T>}
            </button>
          </div>
          )
        : (
          <form className='fiat-p2p-form' onSubmit={createOrder}>
            <div className='fiat-p2p-section-head'>
              <span>1</span>
              <div>
                <strong><T id='p2p.chooseSend'>Choose what to send</T></strong>
                <small><T id='p2p.stablecoinValue'>Stablecoins are valued at $1 for this payout.</T></small>
              </div>
            </div>

            <div className='fiat-p2p-network-field'>
              <span className='fiat-p2p-field-label'><T id='wallet.network'>Network</T></span>
              <button
                className='fiat-p2p-network-control'
                type='button'
                onClick={() => setNetworkPickerOpen(value => !value)}
                aria-expanded={networkPickerOpen}
                aria-label={`Choose P2P network, current network ${networkLabel(selectedNetwork)}`}
              >
                <span className='fiat-p2p-network-icon'>
                  <CoinIcon
                    symbol={getChainSymbol(chainMap.get(Number(selectedNetwork?.chainId)))}
                    label={networkLabel(selectedNetwork)}
                    logoUrl={getNetworkLogoUrl(selectedNetwork?.chainId)}
                    className='network-logo network-logo-md'
                  />
                </span>
                <span className='fiat-p2p-network-copy'>
                  <strong>{networkLabel(selectedNetwork)}</strong>
                  <small><T id='p2p.chooseNetwork'>Choose where you will send the stablecoin</T></small>
                </span>
                <ChevronDown className={networkPickerOpen ? 'is-open' : ''} size={17} />
              </button>

              {networkPickerOpen
                ? (
                  <div className='fiat-p2p-network-picker'>
                    <div className='chain-strip-scroll' aria-label='P2P networks'>
                      {config?.networks?.map(network => {
                        const chain = chainMap.get(Number(network.chainId))
                        const active = network.network === draft.network
                        return (
                          <button
                            className={active ? 'chain-pill active' : 'chain-pill'}
                            type='button'
                            key={network.network}
                            onClick={() => selectNetwork(network.network)}
                            disabled={!network.available}
                            aria-pressed={active}
                          >
                            <CoinIcon
                              symbol={getChainSymbol(chain)}
                              label={networkLabel(network)}
                              logoUrl={getNetworkLogoUrl(network.chainId)}
                              className='network-logo network-logo-sm'
                            />
                            {networkLabel(network)}
                          </button>
                        )
                      })}
                    </div>
                    <div className='chain-strip-fade' aria-hidden='true' />
                  </div>
                  )
                : null}
            </div>

            <div className='fiat-p2p-token-options'>
              {selectedNetwork?.tokens?.map(token => (
                <button
                  key={token.address}
                  className={sameTokenAddress(draft.tokenAddress, token.address) ? 'active' : ''}
                  type='button'
                  onClick={() => updateDraft('tokenAddress', token.address)}
                  aria-pressed={sameTokenAddress(draft.tokenAddress, token.address)}
                >
                  <CoinIcon symbol={token.symbol} label={token.name} logoUrl={token.logoUrl} />
                  <span title={token.name}>{token.symbol}</span>
                </button>
              ))}
            </div>

            <label className='form-field fiat-p2p-amount-field'>
              <span><T id='p2p.invoiceAmount'>Amount</T></span>
              <input
                type='text'
                inputMode='decimal'
                placeholder={`${minimumAmountUsd.toFixed(2)}`}
                value={draft.amount}
                onInput={(event) => updateDraft('amount', formatFiatP2pAmountInput(event.currentTarget.value))}
                required
              />
              <em>{t('p2p.amountRange', { minimum: minimumAmountUsd, maximum: maximumAmountUsd })}{draft.amount ? ` · ≈ $${draft.amount}` : ''}</em>
              {approximateReceiveAmount !== null
                ? <small className='fiat-p2p-approximate-receive'><T id='p2p.approximateReceive' fields={{ amount: approximateReceiveAmount.toFixed(2) }}>Approximate receive: {approximateReceiveAmount.toFixed(2)} RUB</T></small>
                : null}
            </label>

            <div className='fiat-p2p-divider' />

            <div className='fiat-p2p-section-head'>
              <span>2</span>
              <div>
                <strong><T id='p2p.choosePayout'>Choose your payout</T></strong>
                <small><T id='p2p.encrypted'>These details are encrypted & shown only to the operator.</T></small>
              </div>
            </div>

            <div className='fiat-p2p-payout-tabs'>
              <button
                className={draft.payoutMethod === 'phone' ? 'active' : ''}
                type='button'
                onClick={() => updateDraft('payoutMethod', 'phone')}
              >
                <Smartphone size={16} />
                <T id='p2p.phone'>Phone</T>
              </button>
              <button
                className={draft.payoutMethod === 'card' ? 'active' : ''}
                type='button'
                onClick={() => updateDraft('payoutMethod', 'card')}
              >
                <Landmark size={16} />
                <T id='p2p.bankCard'>Bank card</T>
              </button>
            </div>

            <label className='form-field'>
              <span><T id='p2p.bankName'>Bank name</T></span>
              <div className='fiat-p2p-input-icon'>
                <Building2 size={16} />
                <input
                  type='text'
                  autoComplete='organization'
                  placeholder={t('p2p.yourBank')}
                  value={draft.bankName}
                  onInput={(event) => updateDraft('bankName', event.currentTarget.value)}
                  required
                />
              </div>
            </label>

            <label className='form-field'>
              <span>{draft.payoutMethod === 'card' ? <T id='p2p.cardNumber'>Card number</T> : <T id='p2p.phoneNumber'>Phone number</T>}</span>
              <input
                type='text'
                inputMode={draft.payoutMethod === 'card' ? 'numeric' : 'tel'}
                autoComplete={draft.payoutMethod === 'card' ? 'cc-number' : 'tel'}
                placeholder={draft.payoutMethod === 'card' ? '0000 0000 0000 0000' : '+7 965 000 0000'}
                value={draft.payoutTarget}
                onInput={(event) => updateDraft('payoutTarget', event.currentTarget.value)}
                required
              />
            </label>

            <div className='fiat-p2p-safety'>
              <ShieldCheck size={17} />
              <span><T id='p2p.securityNotice'>Never enter a PIN, CVV, expiry date, password, or verification code.</T></span>
            </div>

            <button
              className='fiat-p2p-primary'
              type='submit'
              disabled={action !== 'idle' || !selectedToken || !amountIsWithinLimits || !draft.bankName || !draft.payoutTarget}
            >
              {action === 'creating' ? <T id='p2p.creatingInvoice'>Creating invoice...</T> : <T id='p2p.createInvoiceButton'>Create deposit invoice</T>}
              {action === 'idle' ? <ArrowRight size={16} /> : null}
            </button>
          </form>
          )}

      <div className='fiat-p2p-history'>
        <div className='fiat-p2p-history-head'>
          <strong><T id='p2p.recentOrders'>Recent orders</T></strong>
          <button type='button' onClick={loadP2P} disabled={loading} aria-label='Refresh P2P orders'>
            <RefreshCcw size={14} />
          </button>
        </div>
        {orders.length
          ? orders.slice(0, 8).map(order => (
            <button className='fiat-p2p-order-row' type='button' key={order.id} onClick={() => openOrder(order)} disabled={action !== 'idle'}>
              <CoinIcon
                symbol={order.token.symbol}
                label={order.token.symbol}
                logoUrl={config?.networks?.find(item => Number(item.chainId) === Number(order.chainId))?.tokens?.find(item => sameTokenAddress(item.address, order.token.address))?.logoUrl}
              />
              <div>
                <strong>{order.amount} {order.token.symbol}</strong>
                <span>{getChainLabel(chainMap.get(order.chainId))} · {order.payoutDestination}</span>
              </div>
              <em><T id={statusLabel(order.status)}>{order.status}</T></em>
            </button>
          ))
          : <div className='fiat-p2p-empty'><T id='p2p.empty'>No P2P orders yet.</T></div>}
      </div>
    </section>
  )
}
