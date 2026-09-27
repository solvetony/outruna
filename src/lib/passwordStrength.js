const LEVELS = [
  [20, 'very-weak'],
  [40, 'weak'],
  [60, 'fair'],
  [80, 'good'],
  [101, 'strong']
]

function hasSequence (password) {
  const value = password.toLowerCase()
  for (let start = 0; start <= value.length - 4; start++) {
    const codes = [...value.slice(start, start + 4)].map((character) => character.codePointAt(0))
    if (codes.every((code, index) => index === 0 || code === codes[index - 1] + 1) ||
      codes.every((code, index) => index === 0 || code === codes[index - 1] - 1)) return true
  }
  return false
}

export function passwordStrength (password) {
  const value = typeof password === 'string' ? password : ''
  const length = Array.from(value).length
  const requirements = {
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    number: /\d/.test(value),
    symbol: /[^A-Za-z0-9\s]/.test(value)
  }
  if (!length) return { score: 0, level: 'very-weak', requirements }

  let score = Math.min(length, 20) * 3 + Math.min(Math.max(length - 20, 0), 20)
  score += Object.values(requirements).filter(Boolean).length * 7
  if (length < 8) score -= 20
  else if (length < 12) score -= 10
  if (/^(.)\1+$/u.test(value)) score -= 35
  else if (/(.)\1{3,}/u.test(value)) score -= 20
  if (hasSequence(value)) score -= 20
  score = Math.max(0, Math.min(100, score))

  return { score, level: LEVELS.find(([limit]) => score < limit)[1], requirements }
}
