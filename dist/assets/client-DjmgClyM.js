import { getRabbySignedHeaders, getRabbyApiIdentityHeaders } from './signHeaders-CWvHLN6d.js';
import { e as externalUrls } from './index-YiUby3C-.js';

const RABBY_HOST = externalUrls.rabbyApi;
const CLIENT_NAME = 'Rabby';
const CLIENT_VERSION = '0.93.98';

function rabbyJsonReplacer (key, value) {
  if (typeof value === 'bigint') return value.toString()
  return value
}

function serializeRabbyTransaction (tx) {
  return JSON.stringify(tx, rabbyJsonReplacer)
}

function buildUrl (path, params) {
  const url = new URL(path, RABBY_HOST);

  for (const [key, value] of Object.entries(params || {})) {
    if (value !== null && value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  return url.toString()
}

async function rabbyFetch ({ method, path, params, body, timeout = 8000 }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const signedHeaders = await getRabbySignedHeaders({
      method,
      path,
      params: method === 'GET' ? params : {}
    });

    const headers = {
      'X-Client': CLIENT_NAME,
      'X-Version': CLIENT_VERSION,
      ...getRabbyApiIdentityHeaders(),
      ...signedHeaders
    };

    if (method !== 'GET') {
      headers['Content-Type'] = 'application/json';
    }

    const res = await fetch(buildUrl(path, method === 'GET' ? params : undefined), {
      method,
      headers,
      body: method === 'GET' ? undefined : JSON.stringify(body || {}),
      signal: controller.signal
    });

    const text = await res.text();
    let data = null;

    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = text;
    }

    if (!res.ok) {
      const err = new Error(`Rabby API failed: ${res.status}`);
      err.status = res.status;
      err.data = data;
      throw err
    }

    return data
  } finally {
    clearTimeout(timer);
  }
}

function rabbyGet (path, params, options) {
  return rabbyFetch({
    method: 'GET',
    path,
    params,
    ...options
  })
}

function rabbyPost (path, body, options) {
  return rabbyFetch({
    method: 'POST',
    path,
    body,
    ...options
  })
}

async function rabbyAddrDesc (address) {
  return rabbyGet('/v1/engine/addr/desc', { id: address }, { timeout: 3000 })
}

async function rabbyHasTransferAllChain (fromAddress, toAddress) {
  return rabbyGet('/v2/engine/addr/has_transfer', {
    from_addr: fromAddress,
    to_addr: toAddress
  }, { timeout: 3000 })
}

async function rabbyCheckTx ({ tx, origin, userAddress, updateNonce = false }) {
  return rabbyPost('/v1/wallet/check_tx', {
    user_addr: userAddress,
    origin,
    // Rabby validates this field as a JSON-encoded transaction string.
    tx: serializeRabbyTransaction(tx),
    update_nonce: updateNonce
  }, { timeout: 8000 })
}

export { rabbyAddrDesc, rabbyCheckTx, rabbyGet, rabbyHasTransferAllChain, rabbyPost, serializeRabbyTransaction };
