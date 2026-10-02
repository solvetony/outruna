import { render } from 'preact'
import { I18nProvider, useI18n } from '../src/i18n/index.jsx'
import { TariFaucet } from '../src/components/TariFaucet.jsx'
import { TariWalletUI } from '../src/components/TariWallet.jsx'
import { FAUCET } from '../src/tari/faucet.js'
import { createWallet, loadWasm, restoreViewWallet, ownsOutput, walletAddress } from '../src/tari/wallet.js'
import '../src/styles.css'

const sender = await createWallet()
const watch = await restoreViewWallet(FAUCET.viewKeyHex, FAUCET.address)
const { WasmTxBuilder } = await loadWasm()
const input = sender.createSelfUtxo(3000000n)
const builder = new WasmTxBuilder(sender)
builder.addInput(input); builder.addRecipient(FAUCET.address, 1000000n); builder.addRecipient(FAUCET.address, 100000n); builder.withFeePerGram(5n); builder.withTipHeight(353163n)
const signed = builder.build()
const recipient = walletAddress(sender)
const bytes = (hex) => Uint8Array.from(hex.match(/../g), (b) => parseInt(b, 16))
const b64 = (hex) => btoa(String.fromCharCode(...bytes(hex)))
const hash = '12'.repeat(32), timestamp = Math.floor(Date.now() / 1000)
const outputs = JSON.parse(signed.toJson()).body.outputs.map((raw, index) => ({ raw, projection: {
  commitmentHex: raw.commitment, outputHashHex: (index + 1).toString(16).padStart(2, '0').repeat(32), encryptedDataHex: raw.encrypted_data.data, senderOffsetPubHex: raw.sender_offset_public_key
} })).filter((o) => ownsOutput(watch, o.projection))
signed.free(); input.free(); sender.free(); watch.free()
const change = outputs.find((o) => o !== outputs[0])?.projection.commitmentHex
const payouts = [{ id: 'payout', recipient, amountMicro: '750000', feeMicro: '1000', status: 'confirmed', createdAt: new Date().toISOString(), minedHeight: 353163 }]
let captcha, nextClaimAt = 0
window.faucetClaims = []
window.turnstile = {
  render (container, options) {
    if (!['en', 'de', 'es', 'ru', 'zh', 'hi'].includes(options.language)) throw new Error('Unsupported Turnstile language')
    captcha = options; window.faucetConfirm = () => options.callback('valid-token'); return 'widget'
  },
  reset () {}, remove () {}
}
const original = window.fetch
window.fetch = async (url, init) => {
  if (String(url).includes('coingecko')) return new Response('[]', { headers: { 'Content-Type': 'application/json' } })
  const u = new URL(url, location.origin)
  if (u.pathname === '/api/v1/tari/faucet') return new Response(JSON.stringify({ ready: true, address: FAUCET.address, payouts, changeCommitments: [change], nextClaimAt }), { headers: { 'Content-Type': 'application/json' } })
  if (u.pathname === '/api/v1/tari/faucet/claim') {
    const claim = JSON.parse(init.body)
    if (claim.recipient !== recipient || claim.turnstileToken !== 'valid-token') throw new Error('Incorrect faucet claim')
    window.faucetClaims.push(claim)
    nextClaimAt = Date.now() + 86400000
    const payout = { ...payouts[0], id: 'new-payout', status: 'pending' }
    payouts.unshift(payout)
    return new Response(JSON.stringify({ payout, nextClaimAt }), { status: 202, headers: { 'Content-Type': 'application/json' } })
  }
  if (u.hostname !== 'rpc.tari.com') return original(url, init)
  if (window.faucetOffline) return new Response('{}', { status: 400 })
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
  const { setLocale } = useI18n()
  window.faucetCheck = { setLocale, recipient, expire: () => captcha['expired-callback']() }
  const wallet = { address: recipient, initialized: true, known: true, manager: { current: { refresh () {} } } }
  return <main className='wallet-page'><div className='wallet-shell'><section className='wallet-card'>
    <TariWalletUI state={wallet} selected showOverview={false} sheet={null} setSheet={() => {}} logoNameVisible onLogoClick={() => { window.faucetLogoClicks = (window.faucetLogoClicks || 0) + 1 }} />
    <TariFaucet wallet={wallet} />
  </section></div></main>
}
render(<I18nProvider><Harness /></I18nProvider>, document.getElementById('app'))
window.faucetRemount = () => {
  render(null, document.getElementById('app'))
  render(<I18nProvider><Harness /></I18nProvider>, document.getElementById('app'))
}
