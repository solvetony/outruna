import test from 'node:test'
import assert from 'node:assert/strict'
import { snapshotUiMessages } from '../src/i18n/snapshotUi.js'

test('snapshot UI copy covers every supported locale without promising password safety', () => {
  assert.deepEqual(Object.keys(snapshotUiMessages).sort(), ['bn', 'de', 'en', 'es', 'hi', 'ru', 'zh'])
  for (const messages of Object.values(snapshotUiMessages)) {
    assert.ok(messages.network)
    assert.ok(messages.strengthStrongMessage)
    assert.ok(messages.receiveSubtitle)
    assert.ok(messages.receiveNotice)
  }
  assert.doesNotMatch(snapshotUiMessages.en.strengthStrongMessage, /safe to use/)
})
