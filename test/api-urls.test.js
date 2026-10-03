import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

for (const development of [true, false]) {
  test(`API URLs use ${development ? 'the Vite proxy' : 'the production origin'}`, async () => {
    const source = await readFile(new URL('../src/lib/urls.js', import.meta.url), 'utf8')
    const { api, apiRoot, externalUrls } = await import(`data:text/javascript;base64,${Buffer.from(source.replace('import.meta.env?.DEV', String(development))).toString('base64')}`)
    const root = `${development ? '' : 'https://outruna.top'}/api/v1`
    assert.equal(apiRoot, root)
    assert.equal(api.privy.sign, `${root}/privy/sign`)
    assert.equal(api.language, `${root}/language`)
    assert.equal(api.tariFaucet.status, `${root}/tari/faucet`)
    assert.equal(api.risk.address('0x123', 1), `${root}/thewallet/risk/address/0x123?chain_id=1`)
    assert.equal(api.risk.address('0x123'), `${root}/thewallet/risk/address/0x123`)
    assert.equal(externalUrls.appOrigin, 'https://outruna.top')
    assert.equal(api.version, 'https://outruna.top/napi/version')
    assert.equal(api.tariBroadcast, '/rpc/tari/mainnet/json_rpc')
  })
}
