import { fb as t, fc as create, dr as l, de as q, dq as g, dh as y, dk as u$1, dp as C, df as d$3, di as T, eX as P, du as gt, dG as S, fd as r$2, dg as A, dD as A$1 } from "./index-Cw7cGahV.js";
import { i as i$2, d as d$4, t as t$1, l as l$1, y as y$1, c as c$1, n as n$4, a as a$1, s as s$2, Q as QrCode, m, g as g$1, p as p$2, f as f$1, v, u as u$2, h, b } from "./styles-BEdolEbW-C8Ffzpyi.js";
import { n as n$2 } from "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import { n as n$3 } from "./styles-DVyDvTdj-ow5EEkXR.js";
import { m as m$1 } from "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import { C as C$1 } from "./QrCode-mmar0Iu7-WAqIc_VT.js";
import { u as useFloating, c as useHover, s as safePolygon, d as useFocus, b as useInteractions, e as useClick, f as useDismiss, g as useRole, h as useTransitionStyles, F as FloatingPortal } from "./floating-ui.react-CYyT2_ig.js";
import { m as m$2 } from "./CopyableText-ChtfBWx4-DF8vOgAn.js";
import { T as TriangleAlert } from "./triangle-alert-a7hRzZKA.js";
import { c as createLucideIcon } from "./createLucideIcon-vpjfwHTJ.js";
import { r as r$1, C as ChevronDown } from "./chevron-down-CIrpHt2-.js";
import { C as Check } from "./check-pJYqNiWi.js";
import { H as Hourglass } from "./hourglass-C-F2AWFm.js";
import { I as Info } from "./info-B8yNFTHQ.js";
import { b as autoUpdate, o as offset, f as flip, s as shift } from "./floating-ui.react-dom-C4gaCUET.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
import "./dijkstra-DpzGW89u.js";
import "./copy-Dc_XQleO.js";
const d$2 = { path: "/api/v1/onramp/deposit_addresses/quote", method: "POST" }, s$1 = { path: "/api/v1/onramp/deposit_addresses/orders/:order_id", method: "GET" }, o$1 = { path: "/api/v1/onramp/deposit_addresses/:deposit_address_id/next_order", method: "GET" }, p$1 = { path: "/api/v1/onramp/deposit_addresses/deposit_config", method: "GET" };
function r(t2) {
  return t2.startsWith("eip155:") ? "ethereum" : t2.startsWith("solana:") ? "solana" : t2.startsWith("bip122:") ? "bitcoin-segwit" : t2.startsWith("tron:") ? "tron" : void 0;
}
async function e(e2) {
  var _a;
  let { user: i2 } = await e2.privy.user.get();
  if (!i2) return { ok: false, error: "NOT_AUTHENTICATED" };
  let a2 = (function(t2, e3) {
    let i3 = r(t2);
    if (!i3) return;
    let a3 = e3.linked_accounts.find(((t3) => "wallet" === t3.type && t3.chain_type === i3 && "address" in t3 && t3.address));
    return a3 && "address" in a3 ? a3.address : void 0;
  })(e2.caip2, i2);
  if (a2) return { ok: true, address: a2 };
  let s2 = r(e2.caip2);
  if (!s2) return { ok: false, error: "UNSUPPORTED_CHAIN" };
  try {
    let r2 = await e2.privy.fetchPrivyRoute(t, { body: { chain_type: s2 } });
    return await ((_a = e2.onWalletCreated) == null ? void 0 : _a.call(e2)), { ok: true, address: r2.address };
  } catch {
    return { ok: false, error: "REFUND_WALLET_CREATION_FAILED" };
  }
}
async function i$1(i2) {
  let { user: s2 } = await i2.privy.user.get();
  if (!s2) throw Error("NOT_AUTHENTICATED");
  let t2 = i2.refundAddress;
  if (!t2) {
    let r2 = await e({ privy: i2.privy, caip2: i2.sourceChain, onWalletCreated: i2.onWalletCreated });
    if (!r2.ok) throw Error(r2.error);
    t2 = r2.address;
  }
  return await i2.privy.fetchPrivyRoute(d$2, { body: { source_chain: i2.sourceChain, source_currency: i2.sourceCurrency, destination_chain: i2.destinationChain, destination_currency: i2.destinationCurrency, destination_address: i2.destinationAddress, refund_address: t2, ...null != i2.slippageBps ? { slippage_bps: i2.slippageBps } : {} } });
}
function s(t2, r2) {
  return Math.ceil(r2 / t2);
}
function i(t2) {
  return "success" === t2.status ? t2.result ? { status: "success", order: t2.result } : { status: "timeout" } : "aborted" === t2.status ? { status: "aborted", error: t2.error } : { status: "timeout", error: t2.error };
}
async function o(r2) {
  return await r2.privy.fetchPrivyRoute(s$1, { params: { order_id: r2.orderId } });
}
async function a(o2) {
  let a2 = o2.pollIntervalMs ?? 2e3, n2 = o2.timeoutMs ?? 18e5, u2 = o2.signal ?? new AbortController().signal;
  return i(await r$1({ operation: async () => {
    let e2 = await o2.privy.fetchPrivyRoute(o$1, { params: { deposit_address_id: o2.depositAddressId }, query: { after: o2.quoteCreatedAt } });
    if (e2.order) return await o2.privy.fetchPrivyRoute(s$1, { params: { order_id: e2.order.id } });
  }, until: (t2) => void 0 !== t2, delay: a2, interval: a2, attempts: s(a2, n2), signal: u2 }));
}
async function n$1(r2) {
  let o2 = r2.pollIntervalMs ?? 2e3, a2 = r2.timeoutMs ?? 18e5, n2 = r2.signal ?? new AbortController().signal;
  return i(await r$1({ operation: () => r2.privy.fetchPrivyRoute(s$1, { params: { order_id: r2.orderId } }), until: (t2) => "executing" !== t2.status, delay: o2, interval: o2, attempts: s(o2, a2), signal: n2 }));
}
async function n(r2) {
  let o2 = await r2.fetchPrivyRoute(p$1, {});
  return { currencies: o2.currencies, chains: o2.chains };
}
var d$1 = /* @__PURE__ */ Object.freeze({ __proto__: null, generateDepositAddress: i$1, getConfig: n, getDeposit: o, resolveRefundAddress: e, waitForCompletion: n$1, waitForDeposit: a });
const d = create((() => null)), c = (r2) => {
  null !== d.getState() && d.setState(r2);
};
async function u(r2, t2) {
  let o2 = await r2.fetchPrivyRoute(p$1, {}), a2 = { config: { status: "ready", data: { currencies: o2.currencies, chains: o2.chains } } };
  (t2 == null ? void 0 : t2.aborted) || c(a2);
}
function p() {
  let t2 = d(), { closePrivyModal: e2, privy: a2 } = l(), n2 = (t2 == null ? void 0 : t2.params) ?? null, s2 = (t2 == null ? void 0 : t2.config) ?? { status: "loading" }, i2 = q(((r2) => {
    c({ modalState: r2 });
  }), []), l$12 = q((async () => {
    let r2 = t2 == null ? void 0 : t2.controller;
    if (n2 && r2 && !r2.signal.aborted) {
      c({ config: { status: "loading" } });
      try {
        await u(a2, r2.signal);
      } catch (t3) {
        if (r2.signal.aborted) return;
        throw c({ config: { status: "error", error: t3 instanceof Error ? t3 : Error("Failed to load deposit config") } }), t3;
      }
    }
  }), [n2, a2, t2 == null ? void 0 : t2.controller]), p2 = q((() => {
    if (!t2) return;
    let { modalState: r2 } = t2;
    "complete" === r2.step ? t2.onComplete() : "failed" === r2.step ? t2.onError(Error("DEPOSIT_FAILED")) : "error" === r2.step ? t2.onError(Error(r2.code)) : "refunded" === r2.step ? t2.onError(Error("DEPOSIT_REFUNDED")) : t2.onError(Error("USER_EXITED")), e2({ shouldCallAuthOnSuccess: false });
  }), [t2, e2]);
  return { modalState: (t2 == null ? void 0 : t2.modalState) ?? { step: "intro" }, setModalState: i2, config: s2, retryConfig: l$12, params: n2, close: p2, onBack: t2 == null ? void 0 : t2.onBack };
}
function f(r2) {
  let { modalState: t2, config: e2, params: o2, ...a2 } = p();
  if ((function(r3, t3) {
    if (r3.step !== t3) throw Error("UNEXPECTED_STATE");
  })(t2, r2), !o2 || "ready" !== e2.status) throw Error("UNEXPECTED_STATE");
  return { state: t2, configData: e2.data, params: o2, ...a2 };
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$1);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
];
const Undo2 = createLucideIcon("undo-2", __iconNode);
class de extends C {
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(e2, r2) {
    this.props.onError(e2);
  }
  componentDidUpdate(e2) {
    e2.resetKey !== this.props.resetKey && this.state.hasError && this.setState({ hasError: false });
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
  constructor(...e2) {
    super(...e2), this.state = { hasError: false };
  }
}
function ue(e2, r2, t2) {
  let n2 = Number(e2);
  if (!Number.isFinite(n2) || 0 === n2) return `1 ${r2} ≈ ${e2} ${t2}`;
  if (n2 >= 0.01) {
    return `1 ${r2} ≈ ${me(n2)} ${t2}`;
  }
  return `${me(1 / n2)} ${r2} ≈ 1 ${t2}`;
}
function me(e2) {
  return e2 >= 1e3 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(e2)) : e2 >= 100 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(e2) : e2 >= 1 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(e2) : new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }).format(e2);
}
function pe(e2, r2) {
  let t2 = Number(e2);
  if (!Number.isFinite(t2) || 0 === t2) return e2;
  let n2 = null != r2 ? t2 / 10 ** r2 : t2;
  return n2 >= 1e3 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n2) : n2 >= 1 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }).format(n2) : n2 >= 1e-4 ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 6 }).format(n2) : new Intl.NumberFormat("en-US", { maximumSignificantDigits: 4 }).format(n2);
}
function he({ address: e2, caip2: r2, config: t2 }) {
  for (let n2 of t2.currencies) {
    let t3 = n2.chains.find(((t4) => t4.caip2 === r2 && t4.address.toLowerCase() === e2.toLowerCase()));
    if (t3) return { symbol: n2.symbol.toUpperCase(), decimals: t3.decimals };
  }
  return { symbol: e2, decimals: void 0 };
}
function fe(e2, r2) {
  var _a;
  return ((_a = r2[e2]) == null ? void 0 : _a.displayName) ?? e2;
}
function ge(e2, r2) {
  if (!e2.chains[r2.destinationChain]) return `Unsupported destination chain: "${r2.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;
  let t2 = r2.destinationCurrency.toLowerCase();
  return e2.currencies.some(((e3) => e3.chains.some(((e4) => e4.caip2 === r2.destinationChain && e4.address.toLowerCase() === t2)))) ? null : `Unsupported destination currency "${r2.destinationCurrency}" on chain "${r2.destinationChain}". Check that this token address is supported on the specified chain.`;
}
let ye = /* @__PURE__ */ new Set(["ROUTE_UNAVAILABLE", "UNEXPECTED_STATE", "TIMEOUT_WAITING_FOR_NEXT_ORDER", "TIMEOUT_ORDER_COMPLETION", "DEPOSIT_FAILED", "DEPOSIT_REFUNDED", "USER_EXITED", "AMOUNT_TOO_LOW", "INSUFFICIENT_LIQUIDITY", "UNSUPPORTED_CHAIN", "UNSUPPORTED_CURRENCY", "UNSUPPORTED_ROUTE", "NO_SWAP_ROUTES_FOUND", "NO_INTERNAL_SWAP_ROUTES_FOUND", "NO_QUOTES", "SANCTIONED_WALLET_ADDRESS", "REFUND_WALLET_CREATION_FAILED", "DEPOSIT_ADDRESSES_NOT_ENABLED", "NOT_AUTHENTICATED"]);
function be(e2) {
  return ye.has(e2);
}
function Ce(e2) {
  return be(e2) ? e2 : "UNKNOWN_ERROR";
}
function ve() {
  let { params: e2, setModalState: r2 } = p(), { privy: t2 } = l(), n2 = (function() {
    let { privy: e3, refreshSessionAndUser: r3 } = l();
    return q(((t3, n3) => n3 ? Promise.resolve({ ok: true, address: n3 }) : d$1.resolveRefundAddress({ privy: e3, caip2: t3, onWalletCreated: r3 })), [e3, r3]);
  })(), [a2, s2] = d$3(false);
  return { fetchQuote: q((async (o2, i2, a3) => {
    if (e2) {
      s2(true);
      try {
        let s3 = await n2(o2.caip2, e2.refundAddress);
        if (!s3.ok) return void r2({ step: "error", code: Ce(s3.error) });
        let l2 = await t2.fetchPrivyRoute(d$2, { body: { source_chain: o2.caip2, source_currency: o2.currencyAddress, destination_chain: e2.destinationChain, destination_currency: e2.destinationCurrency, destination_address: e2.destinationAddress, refund_address: s3.address, ...null != e2.slippageBps ? { slippage_bps: e2.slippageBps } : {} } });
        r2({ step: "address", selectedCurrency: i2, selectedChain: o2, availableChains: a3, quote: l2 });
      } catch (e3) {
        let t3 = e3 instanceof Error ? e3 : Error(String(e3)), n3 = "status" in t3 && "number" == typeof t3.status ? t3.status : void 0;
        r2({ step: "error", code: t3 instanceof r$2 && "feature_not_enabled" === t3.code ? "DEPOSIT_ADDRESSES_NOT_ENABLED" : n3 && n3 >= 500 ? "UNKNOWN_ERROR" : Ce(t3.message), message: t3.message });
      } finally {
        s2(false);
      }
    }
  }), [e2, t2, n2, r2]), isFetching: a2 };
}
function we(e2, r2) {
  switch (e2.status) {
    case "completed":
      return r2({ step: "complete", order: e2 });
    case "refunded":
      return r2({ step: "refunded", order: e2 });
    case "failed":
      return r2({ step: "failed", order: e2 });
    case "executing":
      return r2({ step: "processing", order: e2 });
    default:
      return;
  }
}
const Ee = ({ sourceAmount: r2, sourceSymbol: t2, sourceChainName: n2, sourceDecimals: o2, destinationAmount: i2, destSymbol: a2, destChainName: s2, destDecimals: l2, onClose: c2 }) => /* @__PURE__ */ u$1(i$2, { icon: Check, iconVariant: "success", title: "Transfer complete", subtitle: i2 ? `Received ${pe(r2, o2)} ${t2} on ${n2} and converted it to ${pe(i2, l2)} ${a2} on ${s2}. Funds are available to use.` : `Your ${t2} has been received and is now available in your wallet.`, showClose: true, onClose: c2, primaryCta: { label: "Done", onClick: c2 }, watermark: false });
function Te() {
  let { state: r2, configData: t2, close: n2 } = f("complete"), { order: o2 } = r2, { sourceSymbol: i2, sourceChainName: a2, sourceDecimals: l2, destSymbol: c2, destChainName: d2, destDecimals: u2 } = T((() => {
    let e2 = he({ address: o2.source_currency, caip2: o2.source_chain, config: t2 }), r3 = he({ address: o2.destination_currency, caip2: o2.destination_chain, config: t2 });
    return { sourceSymbol: e2.symbol, sourceChainName: fe(o2.source_chain, t2.chains), sourceDecimals: e2.decimals, destSymbol: r3.symbol, destChainName: fe(o2.destination_chain, t2.chains), destDecimals: r3.decimals };
  }), [o2, t2]);
  return u$1(Ee, { sourceAmount: o2.source_amount, sourceSymbol: i2, sourceChainName: a2, sourceDecimals: l2, destinationAmount: o2.destination_amount, destSymbol: c2, destChainName: d2, destDecimals: u2, onClose: n2 });
}
function _e() {
  let { modalState: r2, setModalState: t2, config: n2, retryConfig: o2, close: a2 } = p();
  if ("error" !== r2.step) throw Error("UNEXPECTED_STATE");
  let { code: s2 } = r2, { title: l2, subtitle: c2, detail: u2, iconVariant: m2 } = ((e2) => {
    switch (e2) {
      case "AMOUNT_TOO_LOW":
        return { title: "Amount too low", subtitle: "The deposit amount is below the minimum for this route.", detail: "Try a larger amount or a different token.", iconVariant: "warning" };
      case "INSUFFICIENT_LIQUIDITY":
        return { title: "Insufficient liquidity", subtitle: "There isn't enough liquidity for this route right now.", detail: "Try a smaller amount or a different network.", iconVariant: "warning" };
      case "UNSUPPORTED_CHAIN":
        return { title: "Unsupported chain", subtitle: "Deposits from this chain type aren't supported yet. Try a different network.", iconVariant: "warning" };
      case "UNSUPPORTED_CURRENCY":
      case "UNSUPPORTED_ROUTE":
      case "ROUTE_UNAVAILABLE":
      case "NO_SWAP_ROUTES_FOUND":
      case "NO_INTERNAL_SWAP_ROUTES_FOUND":
      case "NO_QUOTES":
        return { title: "Route not available", subtitle: "This deposit route isn't supported right now. Try a different token or network.", iconVariant: "warning" };
      case "SANCTIONED_WALLET_ADDRESS":
        return { title: "Address restricted", subtitle: "This address cannot be used for deposits due to compliance restrictions.", iconVariant: "warning" };
      case "REFUND_WALLET_CREATION_FAILED":
        return { title: "Unable to set up refund address", subtitle: "We couldn't create a wallet to receive refunds on this chain. Please try again or select a different network.", iconVariant: "warning" };
      case "DEPOSIT_ADDRESSES_NOT_ENABLED":
        return { title: "Not enabled", subtitle: "Deposit addresses are not enabled for this app.", iconVariant: "warning" };
      case "NOT_AUTHENTICATED":
        return { title: "Not signed in", subtitle: "Please sign in to continue with your deposit.", iconVariant: "warning" };
      case "TIMEOUT_WAITING_FOR_NEXT_ORDER":
      case "TIMEOUT_ORDER_COMPLETION":
        return { title: "Taking longer than expected", subtitle: "Your funds are safe. The deposit is still being processed — check back later.", iconVariant: "subtle" };
      default:
        return { title: "Something went wrong", subtitle: "We couldn't complete your request. Please try again.", iconVariant: "subtle" };
    }
  })(s2), [p$12, f2] = d$3(false);
  return u$1(i$2, { icon: TriangleAlert, iconVariant: m2, title: l2, subtitle: u2 ? `${c2} ${u2}` : c2, showClose: true, onClose: a2, primaryCta: { label: "Try again", onClick: async () => {
    if ("ready" !== n2.status) {
      f2(true);
      try {
        await o2(), t2({ step: "token" });
      } catch {
        f2(false);
      }
    } else t2({ step: "token" });
  }, loading: p$12 }, watermark: true });
}
function ke() {
  let { state: t2, close: n2 } = f("failed"), { order: o2 } = t2;
  return u$1(n$2, { icon: TriangleAlert, iconVariant: "error", title: "Transfer failed", subtitle: "Something went wrong processing your transfer.", showClose: true, onClose: n2, primaryCta: { label: "Done", onClick: n2 }, secondaryCta: { label: "Learn about manual recovery", onClick: () => window.open("https://docs.privy.io", "_blank", "noopener,noreferrer") }, watermark: true, children: /* @__PURE__ */ u$1(Ne, { href: o2.tracking_url, target: "_blank", rel: "noopener noreferrer", children: ["Reference: ", o2.provider_request_id] }) });
}
let Ne = gt.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;
function Se() {
  let { close: r2, setModalState: t2, config: n2, params: o2, onBack: s2 } = p(), [l2, c2] = d$3(false);
  return y((() => {
    if (l2 && o2) {
      if ("ready" === n2.status) {
        let e2 = ge(n2.data, o2);
        t2(e2 ? { step: "error", code: "ROUTE_UNAVAILABLE", message: e2 } : { step: "token" });
      }
      "error" === n2.status && t2({ step: "error", code: "ROUTE_UNAVAILABLE" });
    }
  }), [l2, n2, o2, t2]), /* @__PURE__ */ u$1(i$2, { icon: QrCode, iconVariant: "subtle", title: "Add funds", subtitle: "Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.", showClose: true, onClose: r2, showBack: !!s2, onBack: s2, primaryCta: { label: "Continue", onClick: () => {
    if ("ready" === n2.status && o2) {
      let e2 = ge(n2.data, o2);
      t2(e2 ? { step: "error", code: "ROUTE_UNAVAILABLE", message: e2 } : { step: "token" });
    } else "error" === n2.status ? t2({ step: "error", code: "ROUTE_UNAVAILABLE" }) : c2(true);
  }, loading: l2 && "loading" === n2.status, loadingText: null }, watermark: true });
}
function Ue() {
  let { state: t2, setModalState: n2, close: a2 } = f("network"), [s2, l2] = d$3(-1), { availableChains: c2 } = t2, { confirm: p$12, isFetching: h2 } = (function() {
    let e2 = d(), { params: r2 } = p(), { fetchQuote: t3, isFetching: n3 } = ve();
    return { confirm: q((async (n4) => {
      if (!n4 || !r2) return;
      let o2 = e2 == null ? void 0 : e2.modalState;
      o2 && "network" === o2.step && await t3(n4, o2.selectedCurrency, o2.availableChains);
    }), [r2, e2, t3]), isFetching: n3 };
  })();
  return u$1(n$2, { title: "Select network", eyebrow: /* @__PURE__ */ u$1("span", { style: { display: "flex", alignItems: "center", gap: "0.375rem" }, children: [/* @__PURE__ */ u$1("img", { src: t2.selectedCurrency.logoURI, alt: "", style: { width: "1rem", height: "1rem", borderRadius: "50%" } }), "Send ", t2.selectedCurrency.symbol] }), showBack: true, onBack: () => n2({ step: "token" }), showClose: true, onClose: a2, watermark: true, children: /* @__PURE__ */ u$1(n$3, { style: { marginTop: "1rem", height: "22rem" }, $colorScheme: "light", children: c2.map(((t3, n3) => /* @__PURE__ */ u$1(d$4, { $selected: s2 === n3, disabled: h2, onClick: () => {
    l2(n3), p$12(t3);
  }, children: [/* @__PURE__ */ u$1(t$1, { src: t3.iconUrl, alt: t3.displayName }), /* @__PURE__ */ u$1(l$1, { children: t3.displayName }), h2 && n3 === s2 && /* @__PURE__ */ u$1(y$1, {})] }, t3.caip2))) }) });
}
const Ie = ({ trackingUrl: t2, onClose: n2 }) => /* @__PURE__ */ u$1(n$2, { icon: Hourglass, iconVariant: "subtle", title: "Transfer in progress", subtitle: "Your deposit was received and the transfer is now processing.", showClose: true, onClose: n2, secondaryCta: { label: "View on block explorer ↗", onClick: () => window.open(t2, "_blank", "noopener,noreferrer") }, watermark: false, children: /* @__PURE__ */ u$1(m, { children: [/* @__PURE__ */ u$1(g$1, { children: [/* @__PURE__ */ u$1(p$2, { $status: "done", children: /* @__PURE__ */ u$1(Check, { size: 14, color: "var(--privy-color-icon-success)", strokeWidth: 2 }) }), /* @__PURE__ */ u$1(f$1, { children: "Deposit received" })] }), /* @__PURE__ */ u$1(v, {}), /* @__PURE__ */ u$1(g$1, { children: [/* @__PURE__ */ u$1(p$2, { $status: "active", children: /* @__PURE__ */ u$1(Oe, {}) }), /* @__PURE__ */ u$1(f$1, { children: "Bridging" })] }), /* @__PURE__ */ u$1(v, {}), /* @__PURE__ */ u$1(g$1, { children: [/* @__PURE__ */ u$1(p$2, { $status: "pending" }), /* @__PURE__ */ u$1(f$1, { children: "Funds arrived" })] })] }) });
let Oe = gt.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
function Ae() {
  let { state: r2, close: t2 } = f("processing");
  return (function({ orderId: e2, enabled: r3 }) {
    let { privy: t3 } = l(), { setModalState: n2 } = p();
    y((() => {
      let r4 = new AbortController();
      return d$1.waitForCompletion({ privy: t3, orderId: e2, signal: r4.signal }).then(((e3) => {
        r4.signal.aborted || ("success" === e3.status ? we(e3.order, n2) : "timeout" === e3.status && n2({ step: "error", code: "TIMEOUT_ORDER_COMPLETION" }));
      })), () => {
        r4.abort();
      };
    }), [r3, e2, t3, n2]);
  })({ orderId: r2.order.id, enabled: true }), /* @__PURE__ */ u$1(Ie, { trackingUrl: r2.order.tracking_url, onClose: t2 });
}
function De() {
  let { state: r2, close: t2 } = f("refunded"), { order: n2 } = r2;
  return u$1(i$2, { icon: Undo2, iconVariant: "subtle", title: "Transfer refunded", subtitle: "Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.", showClose: true, onClose: t2, primaryCta: { label: "Done", onClick: t2 }, secondaryCta: { label: "View transaction details", onClick: () => window.open(n2.tracking_url, "_blank", "noopener,noreferrer") }, watermark: true });
}
function Re() {
  let { close: t2, setModalState: n2, config: a2 } = p(), { confirm: s2, currencies: l2, isFetching: c2 } = (function() {
    let { config: e2, setModalState: r2 } = p(), { fetchQuote: t3, isFetching: n3 } = ve(), i2 = "ready" === e2.status ? e2.data.currencies : [];
    return { confirm: q((async (n4) => {
      if ("ready" !== e2.status || !n4) return;
      let o2 = (function(e3, r3) {
        return e3.chains.map(((e4) => {
          let t4 = r3.chains[e4.caip2];
          return t4 ? { caip2: e4.caip2, displayName: t4.displayName, iconUrl: t4.iconUrl, vmType: t4.vmType, currencyAddress: e4.address, currencyDecimals: e4.decimals } : null;
        })).filter(((e4) => null !== e4));
      })(n4, e2.data);
      if (1 !== o2.length) r2({ step: "network", selectedCurrency: n4, availableChains: o2 });
      else {
        let e3 = o2[0];
        await t3(e3, n4, o2);
      }
    }), [e2, t3, r2]), currencies: i2, isFetching: n3 };
  })(), [u2, m2] = d$3(-1);
  return u$1(n$2, { title: "Select token", showBack: true, onBack: () => n2({ step: "intro" }), showClose: true, onClose: t2, watermark: true, children: "error" === a2.status ? /* @__PURE__ */ u$1(c$1, { children: /* @__PURE__ */ u$1(n$4, { children: "Failed to load tokens" }) }) : "loading" === a2.status ? /* @__PURE__ */ u$1(c$1, { children: /* @__PURE__ */ u$1(P, {}) }) : /* @__PURE__ */ u$1(n$3, { style: { marginTop: "1rem", height: "22rem" }, $colorScheme: "light", children: l2.map(((t3, n3) => /* @__PURE__ */ u$1(d$4, { $selected: u2 === n3, disabled: c2, onClick: () => {
    m2(n3), s2(t3);
  }, children: [/* @__PURE__ */ u$1(a$1, { src: t3.logoURI, alt: t3.symbol }), /* @__PURE__ */ u$1(l$1, { children: t3.name }), c2 && n3 === u2 ? /* @__PURE__ */ u$1(y$1, {}) : /* @__PURE__ */ u$1(s$2, { children: t3.symbol })] }, t3.symbol))) }) });
}
function xe({ address: n2, onClick: o2 }) {
  let [a2, s2] = d$3(false);
  return u$1(S, { children: a2 ? /* @__PURE__ */ u$1(Fe, { onClick: () => s2(false), style: { marginTop: "1.5rem" }, children: /* @__PURE__ */ u$1(C$1, { url: n2, size: 312, hideLogo: true }) }) : /* @__PURE__ */ u$1(Le, { title: "Click to copy address", onClick: o2, style: { marginTop: "1.5rem" }, children: [/* @__PURE__ */ u$1(Pe, { children: [/* @__PURE__ */ u$1($e, { children: "Deposit address" }), /* @__PURE__ */ u$1(je, { children: n2 })] }), /* @__PURE__ */ u$1(Me, { children: /* @__PURE__ */ u$1(Be, { type: "button", onClick: (e2) => {
    e2.stopPropagation(), s2(true);
  }, children: /* @__PURE__ */ u$1(QrCode, { size: 16, color: "var(--privy-color-icon-muted)" }) }) })] }) });
}
let Fe = gt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`, Le = gt.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`, Pe = gt.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`, $e = gt.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`, je = gt.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`, Me = gt.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`, Be = gt.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;
function Ve({ quote: t2, selectedCurrency: n2, selectedChain: a2, destinationSymbol: s2 }) {
  let [c2, d2] = d$3(false), u2 = n2.symbol.toUpperCase(), m2 = a2.displayName, p2 = A(null);
  return u$1(ze, { children: [/* @__PURE__ */ u$1(We, { onClick: q((() => {
    let e2 = document.getElementById("privy-modal-content");
    e2 && (p2.current && clearTimeout(p2.current), e2.style.transition = "none", p2.current = setTimeout((() => {
      e2.style.transition = "", p2.current = null;
    }), 160)), d2(((e3) => !e3));
  }), []), children: [/* @__PURE__ */ u$1(qe, { children: [n2.logoURI && /* @__PURE__ */ u$1(a$1, { src: n2.logoURI, alt: u2, style: { width: "2rem", height: "2rem" } }), a2.iconUrl && /* @__PURE__ */ u$1(Qe, { src: a2.iconUrl, alt: m2 })] }), /* @__PURE__ */ u$1(Ye, { children: [/* @__PURE__ */ u$1(Xe, { children: "You send" }), /* @__PURE__ */ u$1(Ke, { children: [u2, " on ", m2] })] }), /* @__PURE__ */ u$1(He, { children: /* @__PURE__ */ u$1(c2 ? ChevronUp : ChevronDown, { size: 16 }) })] }), /* @__PURE__ */ u$1(er, { $expanded: c2, children: /* @__PURE__ */ u$1(rr, { children: /* @__PURE__ */ u$1(Ge, { children: [
    t2.indicative_rate && /* @__PURE__ */ u$1(u$2, { children: [/* @__PURE__ */ u$1(h, { children: "Conversion rate" }), /* @__PURE__ */ u$1(b, { style: { display: "flex", alignItems: "center", gap: "0.25rem" }, children: [ue(t2.indicative_rate, u2, s2.toUpperCase()), /* @__PURE__ */ u$1(tr, { content: "Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing." })] })] }),
    /* @__PURE__ */ u$1(u$2, { children: [/* @__PURE__ */ u$1(h, { children: "Max slippage" }), /* @__PURE__ */ u$1(b, { children: [(t2.slippage_bps / 100).toFixed(1), "%"] })] }),
    /* @__PURE__ */ u$1(u$2, { children: [/* @__PURE__ */ u$1(h, { children: "Refund address" }), /* @__PURE__ */ u$1(b, { children: /* @__PURE__ */ u$1(m$2, { value: t2.refund_address, iconOnly: true, iconSize: 11, children: A$1(t2.refund_address, 4, 4) }) })] })
  ] }) }) }), /* @__PURE__ */ u$1(Je, { children: [/* @__PURE__ */ u$1(TriangleAlert, { size: 16, color: "var(--privy-color-icon-muted)", style: { flexShrink: 0 } }), /* @__PURE__ */ u$1(Ze, { children: ["Only send ", /* @__PURE__ */ u$1("strong", { children: u2 }), " on ", /* @__PURE__ */ u$1("strong", { children: m2 }), ". Other assets may be lost."] })] })] });
}
let ze = gt.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`, We = gt.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`, qe = gt.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`, Qe = gt(t$1)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
    background-color: #fff;
  }
`, Ye = gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`, Xe = gt.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`, Ke = gt.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`, He = gt.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`, Ge = gt.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`, Je = gt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`, Ze = gt.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`, er = gt.div`
  display: grid;
  grid-template-rows: ${({ $expanded: e2 }) => e2 ? "1fr" : "0fr"};
  transition: grid-template-rows 150ms ease-out;
`, rr = gt.div`
  overflow: hidden;
`;
function tr({ content: n2 }) {
  let [o2, a2] = d$3(false), { refs: s2, floatingStyles: l2, context: c2 } = useFloating({ open: o2, onOpenChange: a2, placement: "top", whileElementsMounted: autoUpdate, middleware: [offset(6), flip(), shift({ padding: 8 })] }), d2 = useHover(c2, { move: false, handleClose: safePolygon() }), u2 = useFocus(c2), { getReferenceProps: m2, getFloatingProps: p2 } = useInteractions([d2, u2, useClick(c2), useDismiss(c2), useRole(c2, { role: "tooltip" })]), { isMounted: h2, styles: f2 } = useTransitionStyles(c2, { duration: 150 });
  return u$1(S, { children: [/* @__PURE__ */ u$1("button", { ref: s2.setReference, type: "button", "aria-label": "More information about conversion rate", style: { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0, border: "none", background: "none", color: "var(--privy-color-icon-muted)", cursor: "pointer" }, ...m2(), children: /* @__PURE__ */ u$1(Info, { size: 14 }) }), h2 && /* @__PURE__ */ u$1(FloatingPortal, { root: document.getElementById("privy-modal-content") ?? void 0, children: /* @__PURE__ */ u$1(nr, { ref: s2.setFloating, style: { ...l2, ...f2 }, ...p2(), children: n2 }) })] });
}
let nr = gt.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`;
const or = ({ quote: n2, selectedCurrency: o2, selectedChain: a2, destinationSymbol: s2, onBack: l2, onClose: c2 }) => {
  var _a;
  let [d2, u2] = d$3(false), m2 = ((_a = o2 == null ? void 0 : o2.symbol) == null ? void 0 : _a.toUpperCase()) ?? "funds", h2 = (a2 == null ? void 0 : a2.displayName) ?? "", f2 = async () => {
    d2 || (await navigator.clipboard.writeText(n2.deposit_address), u2(true), setTimeout((() => u2(false)), 2e3));
  };
  return u$1(n$2, { title: `Send ${m2}${h2 ? ` on ${h2}` : ""}`, subtitle: "Send funds to the address below. Conversion and routing handled by Relay.", showBack: true, onBack: l2, showClose: true, onClose: c2, watermark: false, children: [/* @__PURE__ */ u$1(Ve, { quote: n2, selectedCurrency: o2, selectedChain: a2, destinationSymbol: s2 }), /* @__PURE__ */ u$1(xe, { address: n2.deposit_address, onClick: f2 }), /* @__PURE__ */ u$1(m$1, { style: { marginTop: "1rem", marginBottom: "0.5rem", ...d2 ? { backgroundColor: "var(--privy-color-icon-success)", borderColor: "var(--privy-color-icon-success)" } : {} }, onClick: f2, children: d2 ? /* @__PURE__ */ u$1(S, { children: ["Copied ", /* @__PURE__ */ u$1(Check, { size: 16, style: { marginLeft: "0.25rem" } })] }) : "Copy address" }), /* @__PURE__ */ u$1(ir, { children: "Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes." })] });
};
let ir = gt.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;
function ar() {
  let { state: r2, configData: t2, setModalState: n2, close: o2, params: i2 } = f("address"), { quote: l$12, selectedCurrency: c2, selectedChain: u2, availableChains: p$12 } = r2;
  return (function({ depositAddressId: e2, enabled: r3, quoteCreatedAt: t3 }) {
    let { privy: n3 } = l(), { setModalState: o3 } = p();
    y((() => {
      if (!e2) return;
      let r4 = new AbortController();
      return d$1.waitForDeposit({ privy: n3, depositAddressId: e2, quoteCreatedAt: t3, signal: r4.signal }).then(((e3) => {
        r4.signal.aborted || ("success" === e3.status ? we(e3.order, o3) : "timeout" === e3.status && o3({ step: "error", code: "TIMEOUT_WAITING_FOR_NEXT_ORDER" }));
      })), () => {
        r4.abort();
      };
    }), [r3, e2, n3, t3, o3]);
  })({ depositAddressId: l$12.id, enabled: true, quoteCreatedAt: l$12.created_at }), /* @__PURE__ */ u$1(or, { quote: l$12, selectedCurrency: c2, selectedChain: u2, destinationSymbol: T((() => he({ address: i2.destinationCurrency, caip2: i2.destinationChain, config: t2 }).symbol), [i2, t2]), onBack: () => n2({ step: "network", selectedCurrency: c2, availableChains: p$12 }), onClose: o2 });
}
function sr() {
  let { modalState: r2, setModalState: t2 } = p();
  return u$1(de, { onError: (e2) => t2({ step: "error", code: "UNEXPECTED_STATE", message: e2.message }), resetKey: r2.step, children: /* @__PURE__ */ u$1(lr, {}) });
}
function lr() {
  let { modalState: r2 } = p();
  switch (r2.step) {
    case "intro":
      return u$1(Se, {});
    case "token":
      return u$1(Re, {});
    case "network":
      return u$1(Ue, {});
    case "address":
      return u$1(ar, {});
    case "processing":
      return u$1(Ae, {});
    case "complete":
      return u$1(Te, {});
    case "refunded":
      return u$1(De, {});
    case "failed":
      return u$1(ke, {});
    case "error":
      return u$1(_e, {});
    default:
      return null;
  }
}
var cr = { component: () => {
  let { onUserCloseViaDialogOrKeybindRef: r2 } = g(), t2 = d(), { close: n2, config: o2 } = p();
  return y((() => {
    r2.current = n2;
  }), [r2, n2]), y((() => {
    if ("ready" === o2.status) {
      for (let e2 of o2.data.currencies) new Image().src = e2.logoURI;
      for (let e2 of Object.values(o2.data.chains)) new Image().src = e2.iconUrl;
    }
  }), [o2]), t2 ? /* @__PURE__ */ u$1(sr, {}) : null;
} };
export {
  cr as default
};
