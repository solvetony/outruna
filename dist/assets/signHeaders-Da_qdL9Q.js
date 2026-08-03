const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sign-wasm-rabby-BKWDvvB2.js","assets/index-CgfjQyaX.js","assets/index-B-hcGMM2.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-CgfjQyaX.js";
const SIGN_HEADERS = [
  "x-api-ts",
  "x-api-nonce",
  "x-api-ver",
  "x-api-sign"
];
const API_KEY_STORAGE_KEY = "outruna:rabby-api-key";
const API_TIME_STORAGE_KEY = "outruna:rabby-api-time";
const SIGNER_WORKER_TIMEOUT_MS = 1e4;
let initPromise;
let signModulePromise;
let apiIdentity;
let signQueue = Promise.resolve();
let signerWorker;
let signerWorkerDisabled = false;
let signerWorkerRequestId = 0;
const signerWorkerRequests = /* @__PURE__ */ new Map();
function getStorage() {
  var _a;
  try {
    return ((_a = globalThis.window) == null ? void 0 : _a.localStorage) || globalThis.localStorage || null;
  } catch (_) {
    return null;
  }
}
function createApiKey() {
  var _a, _b;
  if ((_a = globalThis.crypto) == null ? void 0 : _a.randomUUID) return globalThis.crypto.randomUUID();
  const bytes = new Uint8Array(16);
  if ((_b = globalThis.crypto) == null ? void 0 : _b.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  bytes[6] = bytes[6] & 15 | 64;
  bytes[8] = bytes[8] & 63 | 128;
  const hex = Array.from(bytes, (value) => value.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
function getRabbyApiIdentityHeaders() {
  if (!apiIdentity) {
    let apiKey = "";
    let apiTime = "";
    const storage = getStorage();
    try {
      apiKey = (storage == null ? void 0 : storage.getItem(API_KEY_STORAGE_KEY)) || "";
      apiTime = (storage == null ? void 0 : storage.getItem(API_TIME_STORAGE_KEY)) || "";
    } catch (error) {
      apiKey = "";
      apiTime = "";
    }
    apiIdentity = {
      apiKey: apiKey || createApiKey(),
      apiTime: apiTime || String(Math.floor(Date.now() / 1e3))
    };
    try {
      storage == null ? void 0 : storage.setItem(API_KEY_STORAGE_KEY, apiIdentity.apiKey);
      storage == null ? void 0 : storage.setItem(API_TIME_STORAGE_KEY, apiIdentity.apiTime);
    } catch (error) {
      apiIdentity.persisted = false;
    }
  }
  return {
    "X-API-Key": apiIdentity.apiKey,
    "X-API-Time": apiIdentity.apiTime
  };
}
function updateRabbyApiKey(nextApiKey) {
  var _a;
  const normalized = String(nextApiKey || "").trim();
  if (!normalized) return false;
  getRabbyApiIdentityHeaders();
  if (apiIdentity.apiKey === normalized) return false;
  apiIdentity = {
    ...apiIdentity,
    apiKey: normalized
  };
  try {
    (_a = getStorage()) == null ? void 0 : _a.setItem(API_KEY_STORAGE_KEY, normalized);
  } catch (error) {
    apiIdentity.persisted = false;
  }
  return true;
}
function updateRabbyApiKeyFromResponse(response) {
  var _a;
  if (!(response == null ? void 0 : response.ok) || typeof ((_a = response.headers) == null ? void 0 : _a.get) !== "function") return false;
  return updateRabbyApiKey(response.headers.get("x-set-api-key"));
}
async function getSignModule() {
  if (!signModulePromise) {
    if (typeof globalThis.browser === "undefined") globalThis.browser = {};
    signModulePromise = __vitePreload(() => import("./sign-wasm-rabby-BKWDvvB2.js").then((n) => n.s), true ? __vite__mapDeps([0,1,2]) : void 0);
  }
  return signModulePromise;
}
function getWebHf() {
  var _a, _b, _c, _d, _e;
  const chromeRuntime = globalThis.chrome;
  const extensionUrl = ((_b = (_a = chromeRuntime == null ? void 0 : chromeRuntime.runtime) == null ? void 0 : _a.getURL) == null ? void 0 : _b.call(_a, "bridge.html")) || ((_d = (_c = chromeRuntime == null ? void 0 : chromeRuntime.extension) == null ? void 0 : _c.getURL) == null ? void 0 : _d.call(_c, "bridge.html")) || "";
  const webOrigin = (_e = globalThis.location) == null ? void 0 : _e.origin;
  return extensionUrl || (webOrigin ? `${webOrigin}/` : "");
}
async function initRabbySigner() {
  if (!initPromise) {
    initPromise = getSignModule().then(({ lW }) => lW(getWebHf())).catch((error) => {
      const normalized = normalizeSignerError(error);
      initPromise = null;
      throw normalized;
    });
  }
  return initPromise;
}
function isSignerMemoryError(error) {
  const message = String((error == null ? void 0 : error.message) || error || "");
  return /memory access out of bounds|out of bounds/i.test(message);
}
function normalizeSignerError(error) {
  if (!isSignerMemoryError(error)) return error;
  const normalized = new Error("Gas Account request signing failed. Please try again.");
  normalized.code = "RABBY_SIGNER_MEMORY_ERROR";
  normalized.cause = error;
  return normalized;
}
function rejectSignerWorkerRequests(error) {
  for (const { reject, timer } of signerWorkerRequests.values()) {
    clearTimeout(timer);
    reject(error);
  }
  signerWorkerRequests.clear();
}
function stopSignerWorker(error) {
  signerWorker == null ? void 0 : signerWorker.terminate();
  signerWorker = null;
  if (error) rejectSignerWorkerRequests(error);
}
function getSignerWorker() {
  if (signerWorkerDisabled || typeof globalThis.Worker !== "function") return null;
  if (signerWorker) return signerWorker;
  try {
    const worker = new Worker(new URL(
      /* @vite-ignore */
      "/assets/signWorker-D_xWyEtT.js",
      import.meta.url
    ), {
      type: "module",
      name: "outruna-rabby-signer"
    });
    worker.onmessage = ({ data }) => {
      const request = signerWorkerRequests.get(data == null ? void 0 : data.id);
      if (!request) return;
      signerWorkerRequests.delete(data.id);
      clearTimeout(request.timer);
      if (data.error) {
        const error = new Error(data.error.message || "Gas Account request signing failed");
        error.code = data.error.code;
        request.reject(error);
        return;
      }
      request.resolve(data.signed);
    };
    worker.onerror = () => {
      signerWorkerDisabled = true;
      stopSignerWorker(new Error("Gas Account signing worker failed"));
    };
    worker.onmessageerror = () => {
      signerWorkerDisabled = true;
      stopSignerWorker(new Error("Gas Account signing worker returned an invalid response"));
    };
    signerWorker = worker;
    return worker;
  } catch (_) {
    signerWorkerDisabled = true;
    return null;
  }
}
function signWithWorker({ method, path, params }) {
  const worker = getSignerWorker();
  if (!worker) return null;
  const id = ++signerWorkerRequestId;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      signerWorkerRequests.delete(id);
      reject(new Error("Gas Account signing worker timed out"));
    }, SIGNER_WORKER_TIMEOUT_MS);
    signerWorkerRequests.set(id, { resolve, reject, timer });
    worker.postMessage({
      id,
      method,
      path,
      params,
      webHf: getWebHf()
    });
  });
}
async function signOnMainThread({ method, path, params }) {
  await initRabbySigner();
  const { cattleGsW } = await getSignModule();
  return cattleGsW(params, method, path);
}
async function signRequest(request) {
  const workerRequest = signWithWorker(request);
  if (!workerRequest) return signOnMainThread(request);
  try {
    return await workerRequest;
  } catch (error) {
    if ((error == null ? void 0 : error.code) === "RABBY_SIGNER_MEMORY_ERROR") {
      stopSignerWorker();
      const retry = signWithWorker(request);
      if (retry) {
        try {
          return await retry;
        } catch (_) {
          signerWorkerDisabled = true;
          stopSignerWorker();
          return signOnMainThread(request);
        }
      }
    }
    signerWorkerDisabled = true;
    stopSignerWorker();
    return signOnMainThread(request);
  }
}
function scheduleSigning(task) {
  const scheduled = signQueue.then(task, task);
  signQueue = scheduled.catch(() => {
  });
  return scheduled;
}
function cleanParams(params) {
  const clean = {};
  for (const [key, value] of Object.entries(params || {})) {
    if (value !== null && value !== void 0) {
      clean[key] = value;
    }
  }
  return clean;
}
async function getRabbySignedHeaders({ method, path, params }) {
  return scheduleSigning(async () => {
    try {
      const signed = await signRequest({
        params: cleanParams(params),
        method: method.toUpperCase(),
        path
      });
      return {
        [SIGN_HEADERS[0]]: encodeURIComponent(signed.ts),
        [SIGN_HEADERS[1]]: encodeURIComponent(signed.nonce),
        [SIGN_HEADERS[2]]: encodeURIComponent(signed.version),
        [SIGN_HEADERS[3]]: encodeURIComponent(signed.signature)
      };
    } catch (error) {
      throw normalizeSignerError(error);
    }
  });
}
export {
  getRabbyApiIdentityHeaders,
  getRabbySignedHeaders,
  initRabbySigner,
  updateRabbyApiKey,
  updateRabbyApiKeyFromResponse
};
