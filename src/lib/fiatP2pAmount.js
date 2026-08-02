export function formatFiatP2pAmountInput (value) {
  const normalized = String(value || '')
    .replace(',', '.')
    .replace(/[^\d.]/g, '')
  const separator = normalized.indexOf('.')
  if (separator === -1) return normalized

  const integer = normalized.slice(0, separator)
  const decimals = normalized.slice(separator + 1).replaceAll('.', '').slice(0, 2)
  return `${integer || '0'}.${decimals}`
}
