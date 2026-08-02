const STORAGE_PREFIX = 'outruna:fiat-p2p-payments:v1'
const OPEN_INVOICE_STORAGE_PREFIX = 'outruna:fiat-p2p-open-invoice:v1'
const MAX_TRACKED_PAYMENTS = 50

function getStorage (storage) {
  if (storage) return storage
  try {
    return globalThis.window?.localStorage || globalThis.localStorage || null
  } catch {
    return null
  }
}

function storageKey (walletAddress) {
  const wallet = String(walletAddress || '').trim().toLowerCase()
  return wallet ? `${STORAGE_PREFIX}:${wallet}` : ''
}

function openInvoiceStorageKey (walletAddress) {
  const wallet = String(walletAddress || '').trim().toLowerCase()
  return wallet ? `${OPEN_INVOICE_STORAGE_PREFIX}:${wallet}` : ''
}

export function loadFiatP2pPayments (walletAddress, storage) {
  const key = storageKey(walletAddress)
  const target = getStorage(storage)
  if (!key || !target) return {}

  try {
    const value = JSON.parse(target.getItem(key) || '{}')
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
  } catch {
    return {}
  }
}

export function saveFiatP2pPayment ({ walletAddress, order, txHash }, storage) {
  const key = storageKey(walletAddress)
  const target = getStorage(storage)
  const orderId = String(order?.id || '').trim()
  const transactionHash = String(txHash || '').trim()
  if (!key || !target || !orderId || !/^0x[0-9a-f]{64}$/i.test(transactionHash)) {
    return loadFiatP2pPayments(walletAddress, target)
  }

  const current = loadFiatP2pPayments(walletAddress, target)
  const next = {
    ...current,
    [orderId]: {
      txHash: transactionHash,
      chainId: Number(order?.chainId) || null,
      invoiceAddress: String(order?.invoiceAddress || ''),
      submittedAt: Date.now()
    }
  }
  const bounded = Object.fromEntries(
    Object.entries(next)
      .sort(([, left], [, right]) => Number(right?.submittedAt || 0) - Number(left?.submittedAt || 0))
      .slice(0, MAX_TRACKED_PAYMENTS)
  )

  try {
    target.setItem(key, JSON.stringify(bounded))
  } catch {
    return bounded
  }
  return bounded
}

export function removeFiatP2pPayment (walletAddress, orderId, storage) {
  const key = storageKey(walletAddress)
  const target = getStorage(storage)
  const current = loadFiatP2pPayments(walletAddress, target)
  if (!key || !target || !current[orderId]) return current

  const next = { ...current }
  delete next[orderId]
  try {
    target.setItem(key, JSON.stringify(next))
  } catch {
    return next
  }
  return next
}

export function loadFiatP2pOpenInvoice (walletAddress, storage) {
  const key = openInvoiceStorageKey(walletAddress)
  const target = getStorage(storage)
  if (!key || !target) return null

  try {
    const value = JSON.parse(target.getItem(key) || 'null')
    return value?.orderId && value?.invoiceAddress ? value : null
  } catch {
    return null
  }
}

export function saveFiatP2pOpenInvoice ({ walletAddress, order, activatedBy }, storage) {
  const key = openInvoiceStorageKey(walletAddress)
  const target = getStorage(storage)
  const orderId = String(order?.id || '').trim()
  const invoiceAddress = String(order?.invoiceAddress || '').trim()
  if (!key || !target || !orderId || !invoiceAddress) return null

  const value = {
    orderId,
    invoiceAddress,
    chainId: Number(order?.chainId) || null,
    tokenSymbol: String(order?.token?.symbol || ''),
    amount: String(order?.amount || ''),
    activatedBy: activatedBy === 'copy_address' ? 'copy_address' : 'send_from_wallet',
    activatedAt: Date.now()
  }
  try {
    target.setItem(key, JSON.stringify(value))
  } catch {
    return value
  }
  return value
}

export function removeFiatP2pOpenInvoice (walletAddress, orderId, storage) {
  const key = openInvoiceStorageKey(walletAddress)
  const target = getStorage(storage)
  const current = loadFiatP2pOpenInvoice(walletAddress, target)
  if (!key || !target || !current) return null
  if (orderId && current.orderId !== orderId) return current

  try {
    target.removeItem(key)
  } catch {
    return null
  }
  return null
}

export function findRestorableFiatP2pOpenInvoice (orders, trackedInvoice) {
  if (!trackedInvoice?.orderId || !trackedInvoice?.invoiceAddress) return null

  return (Array.isArray(orders) ? orders : []).find(order => (
    order?.id === trackedInvoice.orderId &&
    order?.status === 'awaiting_deposit' &&
    String(order?.invoiceAddress || '').toLowerCase() === String(trackedInvoice.invoiceAddress).toLowerCase()
  )) || null
}
