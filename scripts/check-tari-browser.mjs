import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const directory = await mkdtemp(join(tmpdir(), 'outruna-tari-browser-'))
const chrome = spawn(process.env.CHROME_BIN || '/usr/bin/google-chrome', ['--headless=new', '--no-sandbox', '--disable-gpu', '--remote-debugging-port=0', `--user-data-dir=${directory}`, 'about:blank'], { stdio: 'ignore' })
let socket
let diagnose = async () => ''
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
async function until (fn) {
  for (let i = 0; i < 300; i++) { const value = await fn().catch(() => null); if (value) return value; await sleep(100) }
  throw new Error(`Browser check timed out: ${await diagnose()}`)
}
try {
  const port = await until(async () => (await readFile(join(directory, 'DevToolsActivePort'), 'utf8')).split('\n')[0])
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json()
  socket = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }))
  let id = 0
  const requests = new Map()
  const errors = []
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data)
    if (message.id) { const pair = requests.get(message.id); requests.delete(message.id); message.error ? pair.reject(message.error) : pair.resolve(message.result) }
    if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text)
    if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') errors.push(message.params.args.map((a) => a.value || a.description).join(' '))
  })
  const call = (method, params = {}) => new Promise((resolve, reject) => { requests.set(++id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })) })
  const evaluate = async (expression) => {
    const result = await call('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true, userGesture: true })
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text)
    return result.result.value
  }
  diagnose = async () => JSON.stringify({ errors, page: await evaluate('JSON.stringify({url:location.href,ready:document.readyState,error:window.tariCheck?.error,known:window.tariCheck?.known,violations:window.policyViolations,text:document.body.innerText.slice(-1000)})') })
  const click = (text) => evaluate(`(() => { const root = document.querySelector('[role=dialog]') || document; const b = [...root.querySelectorAll('button')].find(b => b.textContent.trim() === ${JSON.stringify(text)}); if (!b || b.disabled) throw new Error('Button unavailable: ' + ${JSON.stringify(text)}); b.click() })()`)
  const input = (selector, value) => evaluate(`(() => { const el = document.querySelector(${JSON.stringify(selector)}); el.value = ${JSON.stringify(value)}; el.dispatchEvent(new Event('input', {bubbles:true})) })()`)
  await call('Runtime.enable')
  await call('Page.enable')
  const pageResponse = await fetch('http://127.0.0.1:5175/test/tari-browser.html')
  assert.match(pageResponse.headers.get('Content-Security-Policy'), /worker-src 'self'/)
  await call('Page.addScriptToEvaluateOnNewDocument', { source: "window.policyViolations = []; document.addEventListener('securitypolicyviolation', e => { if (e.disposition === 'enforce') window.policyViolations.push(e.effectiveDirective) })" })
  await call('Emulation.setFocusEmulationEnabled', { enabled: true })
  await call('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: directory })
  await call('Browser.grantPermissions', { permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'], origin: 'http://127.0.0.1:5175' })
  await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 740, deviceScaleFactor: 1, mobile: true })
  await call('Page.navigate', { url: 'http://127.0.0.1:5175/test/tari-browser.html' })
  await until(() => evaluate('window.tariCheck?.known'))
  await evaluate(`(() => {
    const inline = document.createElement('script'); inline.textContent = 'window.injectedScriptRan = true'; document.head.append(inline);
    const remote = document.createElement('script'); remote.src = 'https://unexpected.invalid/inject.js'; document.head.append(remote);
    fetch('https://unexpected.invalid/data').catch(() => {});
    const url = URL.createObjectURL(new Blob(['postMessage(true)'], {type:'text/javascript'}));
    try { const worker = new Worker(url); worker.onerror = event => { event.preventDefault(); worker.terminate() } } catch {}
    URL.revokeObjectURL(url);
  })()`)
  await until(() => evaluate("['script-src-elem','connect-src','worker-src'].every(d => window.policyViolations.includes(d))"))
  assert.equal(await evaluate('window.injectedScriptRan === undefined'), true)
  await evaluate(`(() => { const write = navigator.clipboard.writeText.bind(navigator.clipboard); navigator.clipboard.writeText = async text => { window.copiedAddress = text; return write(text) } })()`)
  const address = await evaluate('window.tariCheck.address')
  assert.ok(address.length > 50)
  await click('Deposit')
  await until(() => evaluate('!!document.querySelector(".deposit-qr-image svg")'))
  assert.equal(await evaluate('document.querySelector(".deposit-address-text").textContent !== window.tariCheck.address'), true)
  assert.equal(await evaluate('document.querySelector(".deposit-address-text").title'), address)
  await evaluate('document.querySelector(".deposit-address-copy").click()')
  await until(() => evaluate('document.body.textContent.includes("Address copied")'))
  assert.equal(await evaluate('window.copiedAddress'), address)
  await evaluate('document.querySelector("[aria-label=Close]").click()')
  await click('Manage backup')
  await click('Export encrypted backup')
  await until(() => evaluate('document.querySelectorAll("input[type=password]").length === 2'))
  await evaluate(`document.querySelectorAll('input[autocomplete=new-password]').forEach(e => { e.value='Browser-check-password-42!'; e.dispatchEvent(new Event('input',{bubbles:true})) })`)
  assert.equal(await evaluate('document.querySelector(".tari-password-strength").classList.contains("strength-strong")'), true)
  assert.equal(await evaluate('document.querySelectorAll(".tari-strength-requirements .is-met").length'), 4)
  await click('Download encrypted backup')
  const filename = await until(async () => (await readdir(directory)).find((name) => name.endsWith('.backup')))
  const file = await readFile(join(directory, filename), 'utf8')
  assert.equal(JSON.parse(file).address, address)
  await until(() => evaluate('!document.querySelector("[role=dialog]")'))
  await evaluate(`document.querySelector('.tari-settings-row').click()`)
  await click('Remove from this device')
  await click('Remove from this device')
  await until(() => evaluate('!window.tariCheck.initialized'))
  await click('Tari wallet options')
  await click('Import backup')
  await until(() => evaluate('!!document.querySelector("input[type=file]")'))
  await evaluate(`(() => { const d = new DataTransfer(); d.items.add(new File([${JSON.stringify(file)}], 'wallet.backup')); const el=document.querySelector('input[type=file]'); el.files=d.files; el.dispatchEvent(new Event('change',{bubbles:true})) })()`)
  await until(() => evaluate('!!document.querySelector("input[type=password]")'))
  await input('input[type=password]', 'Browser-check-password-42!')
  await click('Restore Tari wallet')
  await until(() => evaluate('window.tariCheck.known && !document.querySelector("[role=dialog]")'))
  assert.equal(await evaluate('window.tariCheck.address'), address)
  await evaluate('window.tariCheck.fundFixture()')
  await until(() => evaluate('window.tariCheck.known'))
  await click('Withdraw')
  await input('input[placeholder="Enter Tari address..."]', address)
  await click('Max')
  await until(() => evaluate('document.querySelector("input[inputmode=decimal]").value !== ""'))
  await click('Review transaction')
  await until(() => evaluate('document.body.textContent.includes("Confirm & send")'))
  const signed = await evaluate('window.tariCheck.signOnly()')
  assert.equal(signed.signed, true)
  assert.deepEqual(errors, [])
  await call('Page.addScriptToEvaluateOnNewDocument', { source: "window.telegramEvents = []; window.TelegramWebviewProxy = {postEvent: (name) => window.telegramEvents.push(name)}" })
  await call('Page.navigate', { url: 'http://127.0.0.1:5175/' })
  await until(() => evaluate('!!window.Telegram?.WebApp && !!document.querySelector(".auth-card")'))
  await evaluate('window.Telegram.WebApp.ready()')
  assert.equal(await evaluate('window.telegramEvents.includes("web_app_ready")'), true)
  assert.deepEqual(await evaluate('window.policyViolations'), [])
  console.log('PASS: CSP blocks injections, unexpected connections and blob workers; pinned Telegram bridge, auth rendering, mobile Tari create/QR/backup/restore/scan/Max/review/local signing (no broadcast)')
} finally {
  socket?.close()
  chrome.kill('SIGTERM')
  await new Promise((resolve) => chrome.once('exit', resolve))
  await rm(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
}
