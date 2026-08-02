import * as signModule from '@rabby-wallet/rabby-sign/umd/sign-wasm-rabby'

let initPromise

async function initSigner (webHf) {
  if (!initPromise) {
    if (typeof globalThis.browser === 'undefined') globalThis.browser = {}
    initPromise = signModule.lW(webHf)
  }
  return initPromise
}

function serializeError (error) {
  const message = String(error?.message || error || 'Gas Account request signing failed')
  return {
    message,
    code: /memory access out of bounds|out of bounds/i.test(message)
      ? 'RABBY_SIGNER_MEMORY_ERROR'
      : 'RABBY_SIGNER_ERROR'
  }
}

globalThis.onmessage = async ({ data }) => {
  try {
    await initSigner(data.webHf)
    const signed = signModule.cattleGsW(data.params, data.method, data.path)
    globalThis.postMessage({ id: data.id, signed })
  } catch (error) {
    globalThis.postMessage({ id: data.id, error: serializeError(error) })
  }
}
