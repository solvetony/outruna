import test from 'node:test'
import assert from 'node:assert/strict'
import { passwordStrength } from '../src/lib/passwordStrength.js'

test('password strength weighs length and character variety', () => {
  const empty = passwordStrength('')
  const short = passwordStrength('tiny')
  const longLower = passwordStrength('correcthorsebattery')
  const mixed = passwordStrength('CorrectHorse')
  const numbered = passwordStrength('CorrectHorse42')
  const symbols = passwordStrength('CorrectHorse42!')
  const strong = passwordStrength('Correct-Horse-Battery-42!')

  assert.deepEqual(empty, { score: 0, level: 'very-weak', requirements: { uppercase: false, lowercase: false, number: false, symbol: false } })
  assert.equal(short.level, 'very-weak')
  assert.ok(longLower.score > short.score)
  assert.ok(mixed.score > short.score)
  assert.ok(numbered.score > mixed.score)
  assert.ok(symbols.score > numbered.score)
  assert.equal(strong.level, 'strong')
  assert.deepEqual(strong.requirements, { uppercase: true, lowercase: true, number: true, symbol: true })
})

test('password strength penalizes repetition and obvious sequences', () => {
  const repeated = passwordStrength('aaaaaaaaaaaaaaaa')
  const sequence = passwordStrength('abcdef123456')
  const comparable = passwordStrength('gardenrivercloud')

  assert.ok(repeated.score < comparable.score)
  assert.ok(sequence.score < passwordStrength('planetRiver483').score)
})

test('password strength levels use fixed boundaries and scores stay clamped', () => {
  for (const value of ['', 'a', 'A1!', 'a'.repeat(10000), 'Z9!'.repeat(1000)]) {
    const result = passwordStrength(value)
    assert.ok(result.score >= 0 && result.score <= 100)
    const expected = result.score < 20 ? 'very-weak' : result.score < 40 ? 'weak' : result.score < 60 ? 'fair' : result.score < 80 ? 'good' : 'strong'
    assert.equal(result.level, expected)
  }
})
