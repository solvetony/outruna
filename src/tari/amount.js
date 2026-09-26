import { MAX_MICRO } from './constants.js'
import { formatUnits } from '../lib/format.js'

export function parseAmount (text) {
  if (typeof text !== 'string' || !/^\d+(?:\.\d{1,6})?$/.test(text)) throw new Error('tari.invalidAmount')
  const [whole, fraction = ''] = text.split('.')
  const value = BigInt(whole) * 1000000n + BigInt(fraction.padEnd(6, '0'))
  if (value <= 0n || value > MAX_MICRO) throw new Error('tari.invalidAmount')
  return value
}

export const formatMicro = (value) => formatUnits(value, 6, 6)
