import { dz as p, dr as l, hg as F, dq as g, dl as le, df as d, dD as A, dk as u, dG as S, dh as y, dB as la, cg as formatUnits, di as T, ho as Ea } from "./index-R3UC2dO4.js";
import { m, u as u$1 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { d as d$1 } from "./Layouts-BlFm53ED-CD0Nk718.js";
import { C } from "./QrCode-mmar0Iu7-CAmcovrw.js";
import { t as t$3 } from "./FundWalletMethodHeader-G5sXf6Zt-DJM9bH8h.js";
import { i as i$1 } from "./InfoBanner-DkQEPd77-cGKlYRDu.js";
import { r as r$1 } from "./Subtitle-CV-2yKE4-CTV7F8m2.js";
import { e as e$1 } from "./Title-BnzYV3Is-DndUIwx1.js";
import { j } from "./WalletInfoCard-pBDMfJDY-C_qah6r9.js";
import { s } from "./useWalletBalance-D47dI-xh-lP7YzPZE.js";
import { t } from "./analytics-mkkvFRju-3eV9Df16.js";
import { e } from "./getChainName-DjpPdUSc-D27InAbL.js";
import { r } from "./getUsdcMintAddress-DFI1hv05-Bo_W7NzI.js";
import { t as t$1 } from "./transaction-CnfuREWo-41oAee1p.js";
import { n } from "./getErc20Balance-DHgWH7_1-CBd_GacW.js";
import { i, t as t$2 } from "./formatters-DLIlwORE.js";
import "./dijkstra-DpzGW89u.js";
import "./ErrorMessage-D8VaAP5m-Bjrm8AQj.js";
import "./LabelXs-oqZNqbm_-DtEeHQng.js";
import "./Address--RvzbtOt-CHKyld_u.js";
import "./check-Di0e4xHX.js";
import "./createLucideIcon-COMOll4V.js";
import "./copy-C3pj4YGq.js";
import "./shared-FM0rljBt-DdwZ02wA.js";
import "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
const x = { component: () => {
  var _a, _b, _c;
  let { wallets: T$1 } = p(), { connectors: x2 } = l(), E = x2.filter(F).flatMap(((e2) => e2.wallets)), { data: $, setModalData: L, navigate: P, lastScreen: W } = g(), { rpcConfig: O, appId: q, createAnalyticsEvent: H, closePrivyModal: N } = l(), z = le(), [Q, R] = d(void 0), [X, J] = d(false), V = $ == null ? void 0 : $.funding, { reloadBalance: Y } = s({ rpcConfig: O, appId: q, address: "ethereum" === V.chainType ? V.address : void 0, chain: "ethereum" === V.chainType ? V.chain : void 0 }), G = "solana" === V.chainType, K = G ? V.isUSDC ? "USDC" : "SOL" : V.erc20Address ? (_a = V.erc20ContractInfo) == null ? void 0 : _a.symbol : V.chain.nativeCurrency.symbol, Z = G ? E.find((({ address: e2 }) => e2 === V.address)) : T$1.find((({ address: e2 }) => A(e2) === A(V.address)));
  if (!V) return L({ errorModalData: { error: Error("Couldn't find funding config"), previousScreen: W || "FundingMethodSelectionScreen" }, funding: $ == null ? void 0 : $.funding, solanaFundingData: $ == null ? void 0 : $.solanaFundingData, sendTransaction: $ == null ? void 0 : $.sendTransaction }), P("ErrorScreen"), /* @__PURE__ */ u(S, {});
  y((() => {
    let e2 = G ? async function() {
      if ("solana" !== V.chainType) return;
      let e3 = z.solanaRpcs[V.chain];
      e3 ? (V.isUSDC ? (async function({ rpc: e4, address: r2, mintAddress: t2 }) {
        var _a2;
        let o = await e4.getTokenAccountsByOwner(r2, { mint: t2 }, { encoding: "jsonParsed", commitment: "confirmed" }).send(), i2 = (_a2 = o.value[0]) == null ? void 0 : _a2.account;
        return i2 ? BigInt(i2.data.parsed.info.tokenAmount.amount) : 0n;
      })({ rpc: e3.rpc, address: V.address, mintAddress: r(V.chain) }) : la({ rpc: e3.rpc, address: V.address })).then(((e4) => {
        let r2 = BigInt(e4);
        Q && r2 > Q && (J(true), H({ eventName: t, payload: { provider: "manual", status: "success", chainType: "solana", address: Z == null ? void 0 : Z.address, value: V.isUSDC ? formatUnits(r2 - Q, 6) : formatUnits(r2 - Q, 9), token: V.isUSDC ? "USDC" : "SOL" } })), R(r2);
      })) : console.warn("Unable to load solana rpc, skipping balance");
    } : async function() {
      "ethereum" === V.chainType && (async () => {
        if (!V.erc20Address) return await Y() ?? BigInt(0);
        {
          let { balance: e3 } = await n({ chain: V.chain, address: V.address, erc20Address: V.erc20Address, rpcConfig: O, appId: q });
          return e3;
        }
      })().then(((e3) => {
        var _a2, _b2;
        Q && e3 > Q && (J(true), H({ eventName: t, payload: { provider: "manual", status: "success", chainType: "ethereum", address: Z == null ? void 0 : Z.address, chainId: V.chain.id, value: formatUnits(e3 - Q, ((_a2 = V.erc20ContractInfo) == null ? void 0 : _a2.decimals) ?? 18), token: ((_b2 = V.erc20ContractInfo) == null ? void 0 : _b2.symbol) ?? V.erc20Address ?? "ETH" } })), R(e3);
      })).catch((() => R(void 0)));
    }, r$12 = setInterval(e2, 2e3);
    return e2(), () => clearInterval(r$12);
  }), [Q]);
  let _ = T((() => {
    var _a2;
    return null == Q ? "" : V.isUSDC ? i({ amount: Q, decimals: 6 }) : G ? t$1(Q, 3, true, true) : null != ((_a2 = V.erc20ContractInfo) == null ? void 0 : _a2.decimals) ? i({ amount: Q, decimals: V.erc20ContractInfo.decimals }) : t$2({ wei: Q });
  }), [Q, G, V]), ee = "ethereum" === V.chainType ? V.chain.name : e(V.chain), re = T((() => {
    var _a2, _b2;
    return "" === ((_a2 = V.uiConfig) == null ? void 0 : _a2.receiveFundsTitle) ? null : /* @__PURE__ */ u(e$1, { children: ((_b2 = V.uiConfig) == null ? void 0 : _b2.receiveFundsTitle) ?? `Receive ${V.amount} ${K ?? ""}`.trim() });
  }), [(_b = V.uiConfig) == null ? void 0 : _b.receiveFundsTitle, V.amount, K]), te = T((() => {
    var _a2, _b2;
    return "" === ((_a2 = V.uiConfig) == null ? void 0 : _a2.receiveFundsSubtitle) ? null : /* @__PURE__ */ u(r$1, { children: ((_b2 = V.uiConfig) == null ? void 0 : _b2.receiveFundsSubtitle) ?? `Scan this code or copy your wallet address to receive funds on ${ee}.` });
  }), [(_c = V.uiConfig) == null ? void 0 : _c.receiveFundsSubtitle, ee]), oe = "solana" === V.chainType && V.isUSDC && r(V.chain) ? `?spl-token=${r(V.chain)}` : "";
  return u(S, { children: [/* @__PURE__ */ u(t$3, {}), re, te, /* @__PURE__ */ u(d$1, { style: { gap: "1rem", margin: re || te ? "1rem 0" : "0" }, children: [/* @__PURE__ */ u(C, { url: `${V.chainType}:${V.address}${oe}`, size: 200, squareLogoElement: U }), /* @__PURE__ */ u(i$1, { theme: z.appearance.palette.colorScheme, children: ["Make sure to send funds on ", ee, "."] }), /* @__PURE__ */ u(j, { title: "Your wallet", errMsg: void 0, showCopyButton: true, balance: `${_} ${K}`, address: V.address }), X && /* @__PURE__ */ u(m, { onClick: () => N({ shouldCallAuthOnSuccess: false, isSuccess: true }), children: "Continue" })] }), /* @__PURE__ */ u(u$1, {})] });
} };
let U = ({ ...r2 }) => /* @__PURE__ */ u(Ea, { color: "black", ...r2 });
export {
  x as ManualTransferScreen,
  x as default
};
