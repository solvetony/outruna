import { dT as t, dN as e, dP as o$1, dR as t$1, dJ as t$2, dL as a, hf as t$3, dd as D, dm as k, dz as p, dr as l, hg as F, dq as g, dl as le, di as T, hh as p$1, ci as getAddress, dA as P, dh as y, dk as u$1, ge as j, dG as S, df as d, gG as t$7, hi as E, dC as s } from "./index-R3UC2dO4.js";
import { F as ForwardRef$2 } from "./ArrowsRightLeftIcon-hZ0L_ceU.js";
import { u as u$2 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { t as t$4 } from "./FundWalletMethodHeader-G5sXf6Zt-DJM9bH8h.js";
import { t as t$5 } from "./ErrorBanner-CQERa7bL-CRbjYS1-.js";
import { i } from "./InfoBanner-DkQEPd77-cGKlYRDu.js";
import { h as h$1, t as t$6 } from "./GooglePay-DA-Ff7zK-TW3u64pt.js";
import { e as e$2 } from "./WalletCards-DH1rqayz-DpmQiDe0.js";
import { a as a$1 } from "./getErc20TokenInfo-DdZupEXp-5h2U84UC.js";
import { l as l$1 } from "./index-C_EPea9--DBKnwT9A.js";
import { e as e$1, n as n$1, m as m$1, f } from "./styles-DLlsr-XC-zpliE5Tt.js";
import "./ExclamationCircleIcon-H5hBYS3U.js";
import "./analytics-mkkvFRju-3eV9Df16.js";
import "./LinkPasskeyScreen-C2ClLwr7-BS2f4LvO.js";
import "./TodoList-CgrU7uwu-CmvXiFwy.js";
import "./x-BGzNGWEl.js";
import "./createLucideIcon-COMOll4V.js";
import "./check-Di0e4xHX.js";
import "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
import "./circle-check-big-DBjOD95i.js";
import "./fingerprint-pattern-B_dYUbFY.js";
let n = /* @__PURE__ */ new Set([t.id, e.id, t$1.id, o$1.id, t$2.id, a.id, t$3.id]), c = /* @__PURE__ */ new Set([t.id, e.id, o$1.id, t$1.id, t$2.id, a.id, t$3.id]), o = { buy: "CARD", send: "CRYPTO_ACCOUNT" }, u = { USDC: "2b92315d-eab7-5bef-84fa-089a131333f5", ETH: "d85dce9b-5b73-5c3c-8978-522ce1d1c1b4", BTC: "5b71fc48-3dd3-540c-809b-f8c94d0e68b5", SOL: "4f039497-3af8-5bb3-951c-6df9afa9be1c", POL: "026bcc1e-9163-591c-a709-34dd18b2e7a1", MON: "92aa538f-b005-45cc-a237-71d6466f54d9" };
({ [t.id]: "ethereum", [e.id]: "base", [t$1.id]: "optimism", [o$1.id]: "polygon", [t$2.id]: "arbitrum", [a.id]: "avacchain" });
function b({ appId: e2, input: a2, amount: s2, blockchain: t2, asset: r, experience: d2 }) {
  let i2 = new URL("https://pay.coinbase.com/buy/select-asset");
  return i2.searchParams.set("appId", a2.app_id), i2.searchParams.set("sessionToken", a2.session_token), i2.searchParams.set("endPartnerName", `privy:${e2}`), i2.searchParams.set("defaultExperience", d2), i2.searchParams.set("presetCryptoAmount", s2.startsWith(".") ? `0${s2}` : s2), i2.searchParams.set("defaultNetwork", t2), i2.searchParams.set("defaultPaymentMethod", o[d2]), i2.searchParams.set("defaultAsset", u[r]), i2.searchParams.set("partnerUserId", a2.partner_user_id), { url: i2 };
}
const m = (e2, a2) => {
  switch (a2) {
    case "native-currency":
      return n.has(e2);
    case "USDC":
      return c.has(e2);
    default:
      return console.warn("Unknown asset passed to Coinbase Onramp"), false;
  }
};
function h(e2, a2) {
  return e2 === o$1.id ? "POL" : e2 === t$3.id ? "MON" : "ETH";
}
function CreditCardIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ k("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ D(CreditCardIcon);
function QrCodeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ k("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
  }), /* @__PURE__ */ k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
  }));
}
const ForwardRef = /* @__PURE__ */ D(QrCodeIcon);
const B = (e2) => {
  let [n2, t2] = d();
  return y((() => {
    e2().then(((e3) => {
      t2(e3);
    })).catch((() => {
    }));
  }), []), n2;
};
function G(e2) {
  let n2 = Q[e2];
  if (!n2) throw new s(`Unsupported chainId: ${e2} for Coinbase Onramp`);
  return n2;
}
let Q = { [t.id]: "ethereum", [e.id]: "base", [t$1.id]: "optimism", [o$1.id]: "polygon", [t$2.id]: "arbitrum", [a.id]: "avacchain", [t$3.id]: "monad" };
const $ = (e2, n2, t2, a2, o2, i2) => new Promise((async (r, d2) => {
  let s2 = t$7();
  if (!s2) return void d2(Error("Unable to initialize flow"));
  let c2 = "ethereum" === n2.chainType ? G(n2.chain.id) : "solana", l2 = n2.isUSDC ? "USDC" : "ethereum" === n2.chainType ? h(n2.chain.id) : "SOL", m2 = await e2.initCoinbaseOnRamp({ addresses: [{ address: n2.address, blockchains: [c2] }], assets: [l2] }), { url: p2 } = b({ appId: e2.getAppId(), input: m2, amount: n2.amount, blockchain: c2, asset: l2, experience: i2 });
  s2.location = p2.toString();
  let u2 = { ...o2 == null ? void 0 : o2.funding, showAlternateFundingMethod: true };
  n2.usingDefaultFundingMethod && (u2.usingDefaultFundingMethod = false), t2({ funding: u2, solanaFundingData: o2 == null ? void 0 : o2.solanaFundingData, coinbaseOnrampStatus: { popup: s2 } }), a2("CoinbaseOnrampStatusScreen"), e2.createAnalyticsEvent({ eventName: "sdk_fiat_on_ramp_started", payload: { provider: "coinbase-onramp", value: n2.amount, chainType: n2.chainType, chainId: "ethereum" === n2.chainType ? n2.chain.id : n2.chain } }), setTimeout((() => {
    t2({ funding: u2, solanaFundingData: o2 == null ? void 0 : o2.solanaFundingData, coinbaseOnrampStatus: { partnerUserId: m2.partner_user_id, popup: s2 } });
  }), 5e3), r();
})), X = async (e2, n2, t2, a2, o2, i2, r, d2) => {
  let s2 = t$7();
  if (!s2) throw Error("Unable to initialize flow");
  let c2 = "ethereum" === n2.chainType ? E(n2.chain.id, a2) : n2.isUSDC ? "USDC_SOL" : "SOL", { signedUrl: l2, externalTransactionId: m2 } = await e2.signMoonpayOnRampUrl({ address: n2.address, useSandbox: t2.fundingMethodConfig.moonpay.useSandbox ?? false, config: { uiConfig: { accentColor: t2.appearance.palette.accent, theme: t2.appearance.palette.colorScheme }, paymentMethod: d2, currencyCode: c2, quoteCurrencyAmount: l$1(n2.amount) } });
  e2.createAnalyticsEvent({ eventName: "sdk_fiat_on_ramp_started", payload: { provider: "moonpay", value: n2.amount, chainType: n2.chainType, chainId: "ethereum" === n2.chainType ? n2.chain.id : n2.chain } }), s2.location = l2;
  let p2 = { ...r == null ? void 0 : r.funding, showAlternateFundingMethod: true };
  n2.usingDefaultFundingMethod && (p2.usingDefaultFundingMethod = false), o2({ moonpayStatus: {}, funding: p2, solanaFundingData: r == null ? void 0 : r.solanaFundingData }), i2("MoonpayStatusScreen"), setTimeout((() => {
    o2({ moonpayStatus: { externalTransactionId: m2 }, funding: p2, solanaFundingData: r == null ? void 0 : r.solanaFundingData });
  }), 8e3);
};
let Y = async (e2) => "undefined" != typeof window && "PaymentRequest" in window && await new window.PaymentRequest([{ supportedMethods: e2 }], { id: "0", total: { label: "Item", amount: { currency: "USD", value: "1.00" } } }).canMakePayment();
const J = () => Y("https://apple.com/apple-pay"), K = () => Y("https://google.com/pay"), V = { component: () => {
  var _a, _b, _c, _d;
  let { wallets: r } = p(), { connectors: S$1 } = l(), W = S$1.filter(F).flatMap(((e2) => e2.wallets)), { navigate: I, data: M, setModalData: x } = g(), { client: T$1 } = l(), D2 = le(), k2 = M == null ? void 0 : M.funding, A = B(J), E2 = B(K), _ = "solana" === k2.chainType, P$1 = _ ? void 0 : k2, L = T((() => ((e2, n2, t2, a2, o2, i2) => {
    var _a2;
    let r2, d2, s2 = "solana" === t2.chainType, c2 = s2 ? void 0 : t2, l2 = t2.isUSDC ? "USDC" : (c2 == null ? void 0 : c2.erc20Address) ? void 0 : "native-currency", m$12 = !!s2 || l2 && p$1(Number(t2.chain.id), l2), p2 = !!s2 || l2 && m(Number(t2.chain.id), l2), u2 = [];
    for (let r3 of (t2.preferredCardProvider && t2.supportedOptions.sort(((e3) => e3.provider === t2.preferredCardProvider ? -1 : 1)), t2.supportedOptions)) "card" === r3.method && "coinbase" === r3.provider && p2 && u2.push((() => $(n2, t2, a2, o2, i2, "buy"))), "card" === r3.method && "moonpay" === r3.provider && m$12 && l2 && u2.push((() => X(n2, t2, e2, l2, a2, o2, i2, "credit_debit_card")));
    for (let e3 of t2.supportedOptions) "exchange" === e3.method && "coinbase" === e3.provider && p2 && (r2 = () => $(n2, t2, a2, o2, i2, "buy"));
    for (let e3 of ((_a2 = i2 == null ? void 0 : i2.funding) == null ? void 0 : _a2.supportedOptions) ?? []) "wallets" === e3.method && (d2 = () => o2("TransferFromWalletScreen"));
    return { onFundWithCard: u2, onFundWithExchange: r2, onFundWithWallet: d2 };
  })(D2, T$1, k2, x, I, M)), [D2, T$1, k2, M, x, I]), G2 = _ ? W.find((({ address: e2 }) => e2 === k2.address)) : r.find((({ address: e2 }) => getAddress(e2) === getAddress(k2.address))), Q2 = P((G2 == null ? void 0 : G2.walletClientType) || "unknown"), Y2 = (Q2 == null ? void 0 : Q2.name) || "wallet", V2 = G2 && "privy" !== G2.walletClientType ? Y2 : D2.name, Z = T((() => {
    var _a2, _b2, _c2, _d2;
    return ((_b2 = (_a2 = k2.uiConfig) == null ? void 0 : _a2.landing) == null ? void 0 : _b2.title) ? (_d2 = (_c2 = k2.uiConfig) == null ? void 0 : _c2.landing) == null ? void 0 : _d2.title : `Add funds to your ${(V2 == null ? void 0 : V2.toLowerCase().endsWith("wallet")) ? V2 : V2 + " wallet"}`;
  }), [(_b = (_a = k2.uiConfig) == null ? void 0 : _a.landing) == null ? void 0 : _b.title, V2]);
  y((() => {
    if ((k2 == null ? void 0 : k2.defaultFundingMethod) && k2.usingDefaultFundingMethod) switch (x({ funding: { ...k2, usingDefaultFundingMethod: false }, solanaFundingData: M == null ? void 0 : M.solanaFundingData }), k2 == null ? void 0 : k2.defaultFundingMethod) {
      case "card":
        L.onFundWithCard[0] && L.onFundWithCard[0]();
        break;
      case "exchange":
        L.onFundWithExchange && L.onFundWithExchange();
        break;
      case "wallet":
        L.onFundWithWallet && L.onFundWithWallet();
        break;
      case "manual":
        I("ManualTransferScreen");
    }
  }), []), y((() => {
    (P$1 == null ? void 0 : P$1.erc20Address) && !P$1.erc20ContractInfo && a$1({ address: P$1.erc20Address, chain: P$1.chain, rpcConfig: D2.rpcConfig, privyAppId: D2.id }).then(((e2) => {
      x({ ...M, funding: { ...P$1, erc20ContractInfo: e2 ? { symbol: e2.symbol, decimals: e2.decimals } : void 0 } });
    })).catch(console.error);
  }), [P$1 == null ? void 0 : P$1.erc20Address, P$1 == null ? void 0 : P$1.chain]);
  let ee = !(!(P$1 == null ? void 0 : P$1.erc20Address) || (P$1 == null ? void 0 : P$1.erc20ContractInfo));
  return u$1(S, { children: [/* @__PURE__ */ u$1(t$4, {}), /* @__PURE__ */ u$1("h3", { children: Z }), /* @__PURE__ */ u$1(e$1, { children: [k2.errorMessage && /* @__PURE__ */ u$1(t$5, { theme: D2.appearance.palette.colorScheme, children: k2.errorMessage }), ((_c = L.onFundWithCard) == null ? void 0 : _c[0]) && /* @__PURE__ */ u$1(j, { disabled: ee, onClick: L.onFundWithCard[0], children: [/* @__PURE__ */ u$1(n$1, { children: /* @__PURE__ */ u$1(ForwardRef$1, { style: { width: 24 } }) }), "Pay with card", A ? /* @__PURE__ */ u$1(h$1, { style: { marginLeft: "auto", maxWidth: "100%", width: "auto", height: "0.875rem" } }) : E2 ? /* @__PURE__ */ u$1(t$6, { style: { marginLeft: "auto", maxWidth: "100%", width: "auto", height: "0.875rem" } }) : null] }), L.onFundWithExchange && /* @__PURE__ */ u$1(j, { disabled: ee, onClick: L.onFundWithExchange, children: [/* @__PURE__ */ u$1(n$1, { children: /* @__PURE__ */ u$1(ForwardRef$2, { style: { width: 24 } }) }), "Transfer from an exchange"] }), L.onFundWithWallet && /* @__PURE__ */ u$1(j, { disabled: ee, onClick: L.onFundWithWallet, children: [/* @__PURE__ */ u$1(n$1, { children: /* @__PURE__ */ u$1(e$2, { style: { width: 24 } }) }), "Transfer from wallet"] }), /* @__PURE__ */ u$1(j, { disabled: ee, onClick: () => I("ManualTransferScreen"), children: [/* @__PURE__ */ u$1(n$1, { children: /* @__PURE__ */ u$1(ForwardRef, { style: { width: 24 } }) }), "Receive funds"] }), (k2 == null ? void 0 : k2.showAlternateFundingMethod) && ((_d = L.onFundWithCard) == null ? void 0 : _d[1]) && /* @__PURE__ */ u$1(i, { theme: D2.appearance.palette.colorScheme, children: /* @__PURE__ */ u$1(m$1, { children: ["Having trouble or facing location restrictions?", " ", /* @__PURE__ */ u$1(f, { onClick: L.onFundWithCard[1], children: "Try a different provider." })] }) })] }), /* @__PURE__ */ u$1(u$2, {})] });
} };
export {
  V as FundingMethodSelectionScreen,
  V as default
};
