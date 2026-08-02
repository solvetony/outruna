import Decimal from 'decimal.js'

Decimal.set({
  precision: 40,
  rounding: Decimal.ROUND_HALF_UP
})

export { Decimal }

export function toDecimal (value) {
  if (value instanceof Decimal) return value
  if (value === null || typeof value === 'undefined' || value === '') return null

  try {
    if (typeof value === 'bigint') return new Decimal(value.toString())
    if (typeof value === 'number' && !Number.isFinite(value)) return null

    const input = typeof value === 'string' ? value.trim() : value
    if (input === '') return null
    return new Decimal(input)
  } catch {
    return null
  }
}

export function decimalToNumber (value, fallback = null) {
  const decimal = toDecimal(value)
  if (!decimal) return fallback

  const number = decimal.toNumber()
  return Number.isFinite(number) ? number : fallback
}

export function compareDecimalValues (left, right) {
  const leftDecimal = toDecimal(left) || new Decimal(0)
  const rightDecimal = toDecimal(right) || new Decimal(0)
  return leftDecimal.comparedTo(rightDecimal)
}
