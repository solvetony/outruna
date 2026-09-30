#!/bin/sh
set -eu

case "${1-}" in
  '') ;;
  --check) ;;
  *) printf 'Usage: sh scripts/generate-tari-faucet.sh [--check]\n' >&2; exit 1 ;;
esac

cd "$(dirname "$0")/.."
node --input-type=module - "$@" <<'NODE'
import assert from 'node:assert/strict'
import { createWallet, restoreWallet, restoreViewWallet, walletAddress } from './src/tari/wallet.js'

const wallet = await createWallet()
let restored, watch
try {
  const address = walletAddress(wallet)
  const viewKey = wallet.exportPrivateViewKeyHex()
  const backupHex = wallet.getBackupHex()
  restored = await restoreWallet(backupHex)
  watch = await restoreViewWallet(viewKey, address)
  assert.equal(walletAddress(restored), address)
  assert.equal(restored.canSpend, true)
  assert.equal(walletAddress(watch), address)
  assert.equal(watch.canSpend, false)
  if (process.argv.includes('--check')) {
    process.stdout.write('Tari Mainnet generation, spending restore and view-only restore passed.\n')
  } else {
    process.stderr.write('The view key is intentionally public for this faucet. TARI_FAUCET_BACKUP_HEX grants spending access: keep it server-only. Output is not saved to a file.\n')
    process.stdout.write(`TARI_FAUCET_ADDRESS=${address}\nTARI_FAUCET_VIEW_KEY_HEX=${viewKey}\nTARI_FAUCET_BACKUP_HEX=${backupHex}\nTARI_FAUCET_BIRTHDAY_MS=${Date.now()}\n`)
  }
} finally {
  watch?.free()
  restored?.free()
  wallet.free()
}
NODE
