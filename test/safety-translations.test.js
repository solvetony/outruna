import test from 'node:test'
import assert from 'node:assert/strict'
import { transactionSafetyMessages, transactionSafetyTranslations, backupVerificationMessages } from '../src/i18n/transactionSafety.js'

test('transaction safety and backup verification cover every supported language', () => {
  for (const locale of ['en', 'de', 'es', 'ru', 'zh', 'hi', 'bn']) {
    assert.deepEqual(Object.keys(transactionSafetyTranslations[locale]).sort(), Object.keys(transactionSafetyMessages).sort())
    assert.deepEqual(Object.keys(backupVerificationMessages[locale]).sort(), Object.keys(backupVerificationMessages.en).sort())
    for (const text of [...Object.values(transactionSafetyTranslations[locale]), ...Object.values(backupVerificationMessages[locale])]) assert.ok(typeof text === 'string' && text.length > 0)
  }
})
