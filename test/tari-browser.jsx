import { render } from 'preact'
import { useState } from 'preact/hooks'
import { I18nProvider } from '../src/i18n/index.jsx'
import { TariWalletUI, TariSettingsRow } from '../src/components/TariWallet.jsx'
import { useTariWallet } from '../src/tari/useTariWallet.js'
import { loadWasm, walletAddress } from '../src/tari/wallet.js'
import { normalizeOutput } from '../src/tari/rpc.js'
import { useTransactionReview } from '../src/components/TransactionReview.jsx'
import { mapRabbyCheckTxToRisk } from '../src/lib/rabby/transactionRisk.js'
import '../src/styles.css'

Object.defineProperty(navigator, 'hardwareConcurrency', { value: 2 })

const original = window.fetch
let outputs = []
const hash = '12'.repeat(32)
const timestamp = Math.floor(Date.now() / 1000)
const bytes = (hex) => Uint8Array.from(hex.match(/../g), (b) => parseInt(b, 16))
const b64 = (hex) => btoa(String.fromCharCode(...bytes(hex)))
window.fetch = async (url, init) => {
  const u = new URL(url, location.origin)
  if (u.pathname === '/rpc/tari/mainnet/json_rpc') throw new Error('Browser check forbids broadcasting')
  if (u.hostname !== 'rpc.tari.com') {
    if (String(url).includes('coingecko')) return new Response('[]')
    return original(url, init)
  }
  const responses = {
    '/get_tip_info': { metadata: { best_block_height: 353163, best_block_hash: hash, pruned_height: 0, timestamp }, is_synced: true },
    '/get_height_at_time': 353163,
    '/get_header_by_height': { hash: [...bytes(hash)], prev_hash: [...bytes(hash)], height: Number(u.searchParams.get('height')), timestamp },
    '/sync_utxos_by_block': { blocks: [{ header_hash: b64(hash), height: 353163, mined_timestamp: timestamp, inputs: [], outputs: outputs.map((o) => ({
      output_hash: b64(o.projection.outputHashHex), commitment: b64(o.raw.commitment), encrypted_data: b64(o.raw.encrypted_data.data), sender_offset_public_key: b64(o.raw.sender_offset_public_key)
    })) }], next_header_to_scan: '' },
    '/get_utxos_by_block': { header_hash: [...bytes(hash)], height: 353163, outputs: outputs.map((o) => o.raw) }
  }
  return new Response(JSON.stringify(responses[u.pathname]), { headers: { 'Content-Type': 'application/json' } })
}

function Harness () {
  const review = useTransactionReview('browser-check-A', async ({ tx }) => {
    window.checkedTransaction = tx
    return mapRabbyCheckTxToRisk({ decision: window.transactionDecision || 'pass' })
  })
  window.transactionCheck = async (tx, context) => {
    window.signedTransaction = null
    try { await review.reviewTransaction(tx, context); window.signedTransaction = tx } catch (error) { window.transactionError = error.message }
  }
  const [sheet, setSheet] = useState(null)
  const state = useTariWallet('browser-check-A', true)
  window.tariCheck = {
    address: state.address,
    known: state.known,
    initialized: state.initialized,
    syncing: state.syncing,
    error: state.error || state.syncError,
    async fundFixture () {
      const { WasmTxBuilder } = await loadWasm()
      await state.manager.current.unlockSpend('Browser-check-password-42!')
      const wallet = state.manager.current.spendWallet
      const input = wallet.createSelfUtxo(10000000n)
      const builder = new WasmTxBuilder(wallet)
      builder.addInput(input); builder.addRecipient(walletAddress(wallet), 1000000n); builder.withFeePerGram(5n); builder.withTipHeight(353163n)
      const signed = builder.build()
      try {
        const raw = JSON.parse(signed.toJson()).body.outputs[0]
        const projection = { commitmentHex: raw.commitment, outputHashHex: '34'.repeat(32), encryptedDataHex: raw.encrypted_data.data, senderOffsetPubHex: raw.sender_offset_public_key }
        normalizeOutput(raw, projection)
        outputs = [{ raw, projection }]
      } finally { signed.free(); input.free() }
      state.manager.current.lockSpend()
      await state.manager.current.refresh()
    },
    async signOnly () {
      const { signTransaction } = await import('../src/tari/transaction.js')
      const manager = state.manager.current
      const review = await manager.prepare(manager.data.address, '0.01')
      if (!manager.spendWallet) await manager.unlockSpend('Browser-check-password-42!')
      const result = await signTransaction(manager.spendWallet, review, manager.handles, manager.tipHeight)
      manager.lockSpend()
      return { signed: !!JSON.parse(result.json).body, fee: result.feeMicro }
    }
  }
  return <main className='wallet-page'><div className='wallet-shell'><section className='wallet-card'>
    <TariWalletUI state={state} selected showAssets sheet={sheet} setSheet={setSheet} onEvm={() => {}} />
    <TariSettingsRow state={state} onOpen={() => setSheet('settings')} />
    {review.dialog}
  </section></div></main>
}
render(<I18nProvider><Harness /></I18nProvider>, document.getElementById('app'))
