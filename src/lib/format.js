import { Decimal, toDecimal } from './decimal.js'

export function formatUsd (value, digits = 2) {
  const decimal = toDecimal(value)
  if (!decimal) return 'n/a'

  const number = decimal.toDecimalPlaces(digits, Decimal.ROUND_HALF_UP).toNumber()
  if (!Number.isFinite(number)) return 'n/a'
  return number.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })
}

export function formatNumber (value, digits = 4) {
  const decimal = toDecimal(value)
  if (!decimal) return 'n/a'

  const number = decimal.toDecimalPlaces(digits, Decimal.ROUND_HALF_UP).toNumber()
  if (!Number.isFinite(number)) return 'n/a'
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  })
}

export function formatPercent (value, digits = 2) {
  const decimal = toDecimal(value)
  if (!decimal) return 'n/a'
  return `${decimal.toDecimalPlaces(digits, Decimal.ROUND_HALF_UP).toFixed(digits)}%`
}

export function formatAddress (address, left = 6, right = 4) {
  const text = String(address || '').trim()
  if (!text) return 'n/a'
  if (text.length <= left + right + 3) return text
  return `${text.slice(0, left)}...${text.slice(-right)}`
}

export function formatHexWei (wei, digits = 4) {
  try {
    const value = parseBigIntValue(wei)
    return formatUnits(value, 18, digits)
  } catch {
    return 'n/a'
  }
}

export function formatUnits (value, decimals = 18, digits = 4) {
  try {
    const raw = typeof value === 'bigint' ? value : BigInt(String(value || '0'))
    const negative = raw < 0n
    const absolute = negative ? -raw : raw
    const divisor = 10n ** BigInt(decimals)
    const whole = absolute / divisor
    const fraction = absolute % divisor
    if (digits <= 0) return `${negative ? '-' : ''}${whole.toString()}`
    const scaled = (fraction * 10n ** BigInt(digits)) / divisor
    const fractionText = scaled.toString().padStart(digits, '0').replace(/0+$/, '')
    return `${negative ? '-' : ''}${whole.toString()}${fractionText ? `.${fractionText}` : ''}`
  } catch {
    return 'n/a'
  }
}

export function parseBigIntValue (value) {
  if (value === null || value === undefined || value === '') return 0n
  if (typeof value === 'bigint') return value
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return 0n
    return BigInt(Math.trunc(value))
  }

  const text = String(value).trim()
  if (!text) return 0n

  try {
    return BigInt(text)
  } catch {
    return 0n
  }
}

export function normalizeChainId (value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  const text = String(value || '').trim()
  const extracted = text.includes(':') ? text.split(':').pop() : text
  const number = Number(extracted)
  return Number.isFinite(number) ? number : 1
}

export function toHexQuantity (value) {
  const number = typeof value === 'bigint' ? value : BigInt(String(value || '0'))
  return `0x${number.toString(16)}`
}

export function encodeBalanceOf (address) {
  const normalized = String(address || '').replace(/^0x/, '').padStart(64, '0')
  return `0x70a08231${normalized}`
}
