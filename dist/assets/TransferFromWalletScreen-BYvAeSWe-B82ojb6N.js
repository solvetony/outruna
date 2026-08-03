import { dr as l, dq as g, dl as le, dz as p, hg as F$1, df as d, dk as u, hU as It, hV as St, dh as y, hW as S, dG as S$1, ge as j, g7 as H, dA as P, hX as W, fS as M$1, eM as libExports, f5 as p$1, hY as na, du as gt } from "./index-BDOBKk5h.js";
import { T, u as u$1 } from "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import { o } from "./ScreenHeader-CHmc4-Lu-Cf3Iir_Y.js";
import { t } from "./FundWalletMethodHeader-G5sXf6Zt-Bbxeke97.js";
import { i } from "./InjectedWalletIcon-DLcYOGDj-CfzRR8dA.js";
import { n as n$1 } from "./Chip-D2-wZOHJ-BZeFFc0J.js";
import { r } from "./Subtitle-CV-2yKE4-BOIv64VM.js";
import { l as l$1 } from "./WalletOverflowButton-DE9SJ043-LMSbzo8U.js";
import { n } from "./styles-DLlsr-XC-BEBJuxAq.js";
import "./WalletIcon-CIbCIQY1.js";
import "./LoadingSkeleton-U6-3yFwI-CDkrgo6T.js";
import "./wallet-DNAF6wPb.js";
import "./createLucideIcon-Bh-mHKe7.js";
import "./LinkPasskeyScreen-C2ClLwr7-BmlGTjVT.js";
import "./TodoList-CgrU7uwu-BmqTu_1v.js";
import "./x-kwg8mEMW.js";
import "./check-BeAd3IiM.js";
import "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
import "./circle-check-big-Cj9Xmm_9.js";
import "./fingerprint-pattern-Cg7G4Ptd.js";
const D = ({ provider: t2, displayName: o2, logo: i$1, connectOnly: r2, connector: c }) => {
  var _a, _b, _c;
  let p2, { navigate: m, setModalData: d$1 } = g(), { connectWallet: w, walletConnectionStatus: C } = l(), g$1 = H(), [v, j2] = d(false), x = "wallet_connect_v2" === c.connectorType ? t2 : c.walletClientType, [k, $] = d(false);
  y((() => {
    k && ("connected" === (C == null ? void 0 : C.status) || (C == null ? void 0 : C.connectError)) && (m(r2 ? "ConnectOnlyStatusScreen" : "ConnectionStatusScreen"), $(false));
  }), [k, C]);
  let O = P(t2), D2 = window.matchMedia("(display-mode: standalone)").matches, B2 = W({ connectorType: c.connectorType, walletClientType: x });
  p2 = B2 && B2.chainTypes.includes(c.chainType) ? () => {
    B2.isInstalled || "solana" === c.chainType && "isInstalled" in c && c.isInstalled ? (w(c, x), m(r2 ? "ConnectOnlyStatusScreen" : "ConnectionStatusScreen")) : M$1({ isMobile: libExports.isMobile, walletConfig: B2 }) ? (d$1(((e) => ({ ...e, externalConnectWallet: { ...e == null ? void 0 : e.externalConnectWallet, preSelectedWalletId: t2, walletChainType: "solana" === c.chainType ? "solana-only" : "ethereum-only" } }))), m(r2 ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen")) : libExports.isMobile ? (d$1({ installWalletModalData: { walletConfig: B2, chainType: c.chainType, connectOnly: r2 } }), m("WalletInterstitialScreen")) : (d$1({ installWalletModalData: { walletConfig: B2, chainType: c.chainType, connectOnly: r2 } }), m("InstallWalletScreen"));
  } : "coinbase_wallet" !== c.connectorType || "eoaOnly" !== ((_a = c.coinbaseWalletConfig.preference) == null ? void 0 : _a.options) || !libExports.isMobile || D2 || p$1() ? () => {
    if (!na(window.navigator.userAgent) || (event == null ? void 0 : event.isTrusted)) {
      if ("mobile_wallet_adapter" === c.walletClientType) return w(c, x), void $(true);
      w(c, x), r2 ? "wallet_connect_v2" === c.connectorType ? (d$1(((e) => ({ ...e, externalConnectWallet: { ...e == null ? void 0 : e.externalConnectWallet, preSelectedWalletId: "wallet_connect_qr" } }))), m("ConnectOnlyLandingScreen")) : m("ConnectOnlyStatusScreen") : m("ConnectionStatusScreen");
    }
  } : () => {
    window.location.href = `https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`;
  };
  let E2 = o2 || ((_b = O == null ? void 0 : O.metadata) == null ? void 0 : _b.shortName) || (O == null ? void 0 : O.name) || c.walletClientType;
  return u(I, { onClick: () => {
    v || (j2(true), setTimeout((() => j2(false)), 2e3), p2());
  }, disabled: v, children: [/* @__PURE__ */ u(i, { icon: i$1 || ((_c = O == null ? void 0 : O.image_url) == null ? void 0 : _c.md), name: E2 }), /* @__PURE__ */ u("span", { children: E2 }), /* @__PURE__ */ u(A, { id: "chip-container", children: [(g$1 == null ? void 0 : g$1.walletClientType) === x && (g$1 == null ? void 0 : g$1.chainType) === c.chainType ? /* @__PURE__ */ u(M, { color: "gray", children: "Recent" }) : /* @__PURE__ */ u("span", { id: "connect-text", children: "Connect" }), "solana" === c.chainType && /* @__PURE__ */ u(M, { color: "gray", children: "Solana" })] })] });
};
let I = gt(j)`
  /* Wallet name text color */
  > span {
    color: var(--privy-color-foreground);
  }

  /* Show "Connect" on hover */
  > #chip-container > #connect-text {
    font-weight: 500;
    color: var(--privy-color-accent);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  :hover > #chip-container > #connect-text {
    opacity: 1;
  }

  @media (max-width: 440px) {
    > #chip-container > #connect-text {
      display: none;
    }
  }
`, M = gt(n$1)`
  margin-left: auto;
`, A = gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: auto;
`;
const B = ["coinbase_wallet", "base_account"];
let E = ["metamask", "okx_wallet", "rainbow", "uniswap", "bybit_wallet", "ronin_wallet", "haha_wallet", "uniswap_extension", "zerion", "rabby_wallet", "cryptocom", "binance", "kraken_wallet", "robinhood_wallet"];
const F = ["safe"], L = ["phantom", "backpack", "solflare", "jupiter", "universal_profile"], N = { component: () => {
  var _a, _b, _c, _d;
  let s, { connectors: p$12 } = l(), { setModalData: y$1, data: u$2, navigate: h } = g(), _ = le(), { wallets: x } = p(), S$2 = p$12.filter(F$1).flatMap(((e) => e.wallets)), [W2, b] = d("default"), k = "solana" === ((_a = u$2 == null ? void 0 : u$2.funding) == null ? void 0 : _a.chainType), O = !!((_b = u$2 == null ? void 0 : u$2.funding) == null ? void 0 : _b.crossChainBridgingEnabled);
  s = "ethereum" === ((_c = u$2 == null ? void 0 : u$2.funding) == null ? void 0 : _c.chainType) ? u$2.funding.erc20Address && !u$2.funding.isUSDC ? "ethereum-only" : O && !u$2.funding.chain.testnet ? "ethereum-and-solana" : "ethereum-only" : O && !((_d = u$2.funding) == null ? void 0 : _d.isUSDC) ? "ethereum-and-solana" : "solana-only";
  let I2 = x.filter(((e) => "privy" !== e.walletClientType)), M2 = I2.map(((e) => e.walletClientType)), A2 = S$2.filter(((e) => "privy" !== e.walletClientType)), N2 = A2.map(((e) => e.walletClientType)), P2 = [], H2 = { ...u$2.funding };
  H2.usingDefaultFundingMethod && (H2.usingDefaultFundingMethod = false);
  let R = ({ wallet: e, walletChainType: n2 }) => {
    y$1({ ...u$2, funding: { ...H2, connectedWallet: e, onContinueWithExternalWallet: () => h(z({ destChainType: k ? "solana" : "ethereum", sourceChainType: n2 })) }, solanaFundingData: (u$2 == null ? void 0 : u$2.solanaFundingData) ? { ...u$2.solanaFundingData, sourceWalletData: { address: e.address, walletClientType: e.walletClientType } } : void 0 }), h("FundingAmountEditScreen");
  };
  "solana-only" !== s && P2.push(...I2.map(((e, t2) => /* @__PURE__ */ u(q, { onClick: () => R({ wallet: e, walletChainType: "ethereum" }), icon: e.meta.icon, name: e.meta.name, chainType: e.type }, t2)))), "ethereum-only" !== s && P2.push(...A2.map(((e, t2) => /* @__PURE__ */ u(q, { onClick: () => R({ wallet: e, walletChainType: "solana" }), icon: e.meta.icon, name: e.meta.name, chainType: e.type }, t2)))), P2.push(...(({ walletList: e, walletChainType: t2, connectors: l2, connectOnly: a, ignore: o2, walletConnectEnabled: i2, forceWallet: r2 }) => {
    var _a2, _b2;
    let c = [], s2 = [], p2 = [], m = l2.filter(((e2) => "ethereum-only" === t2 ? "ethereum" === e2.chainType : "solana-only" !== t2 || "solana" === e2.chainType)), d2 = m.find(((e2) => "wallet_connect_v2" === e2.connectorType));
    for (let [l3, y2] of (r2 ? [r2.wallet] : e).entries()) {
      if ("detected_ethereum_wallets" === y2) for (let [e2, t3] of m.filter((({ chainType: e3, connectorType: n2, walletClientType: t4 }) => "solana" !== e3 && ("uniswap_wallet_extension" === t4 || "uniswap_extension" === t4 ? !o2.includes("uniswap") : "crypto.com_wallet_extension" === t4 || "crypto.com_onchain" === t4 ? !o2.includes("cryptocom") : "injected" === n2 && !o2.includes(t4)))).entries()) {
        let { walletClientType: o3, walletBranding: i3, chainType: r3 } = t3;
        ("unknown" === o3 ? s2 : c).push(/* @__PURE__ */ u(D, { connectOnly: a, provider: o3, logo: i3.icon, displayName: i3.name, connector: t3 }, `${l3}-${y2}-${o3}-${r3}-${e2}`));
      }
      if ("detected_solana_wallets" === y2) for (let [e2, i3] of m.filter((({ chainType: e3, walletClientType: n2 }) => {
        if ("solana" === e3) return "ethereum-only" !== t2 && !o2.includes(n2);
      })).entries()) {
        let { walletClientType: t3, walletBranding: o3, chainType: r3 } = i3;
        ("unknown" === t3 ? s2 : c).push(/* @__PURE__ */ u(D, { connectOnly: a, provider: t3, logo: o3.icon, displayName: o3.name, connector: i3 }, `${l3}-${y2}-${t3}-${r3}-${e2}`));
      }
      if (L.includes(y2)) {
        let e2 = m.find(((e3) => "injected" === e3.connectorType && e3.walletClientType === y2 || e3.connectorType === y2));
        if (e2 && c.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, connector: e2 }, `${l3}-${y2}`)), "solana-only" === t2 || "ethereum-and-solana" === t2) {
          let e3 = m.find((({ chainType: e4, walletClientType: n2 }) => "solana" === e4 && n2 === y2));
          e3 && c.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, connector: e3 }, `${y2}-solana`));
        }
      } else if (E.includes(y2)) {
        let e2 = m.find(((e3) => "uniswap" === y2 ? "uniswap_wallet_extension" === e3.walletClientType || "uniswap_extension" === e3.walletClientType : "cryptocom" === y2 ? "crypto.com_wallet_extension" === e3.walletClientType || "crypto.com_onchain" === e3.walletClientType : "injected" === e3.connectorType && e3.walletClientType === y2));
        if (i2 && !e2 && (e2 = d2), e2 && c.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, connector: e2, logo: "injected" === e2.connectorType ? e2.walletBranding.icon : void 0, displayName: "injected" === e2.connectorType ? e2.walletBranding.name : void 0 }, `${l3}-${y2}`)), "solana-only" === t2 || "ethereum-and-solana" === t2) {
          let e3 = m.find((({ chainType: e4, walletClientType: n2 }) => "solana" === e4 && n2 === y2));
          e3 && c.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, connector: e3 }, `${y2}-solana`));
        }
      } else if (B.includes(y2)) {
        let e2 = m.find((({ connectorType: e3 }) => e3 === y2));
        e2 && c.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, connector: e2, displayName: "coinbase_wallet" === e2.walletClientType ? "Coinbase" : "Base", logo: "coinbase_wallet" === e2.walletClientType ? It : St }, `${l3}-${y2}`));
      } else if (F.includes(y2)) d2 && p2.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, connector: d2 }, `${l3}-${y2}`));
      else if ("wallet_connect" === y2) d2 && p2.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, connector: d2, logo: d2.walletBranding.icon, displayName: "WalletConnect" }, `${l3}-${y2}`));
      else if (y2 === (r2 == null ? void 0 : r2.wallet)) {
        let t3 = "ethereum" === r2.chainType && e.includes("detected_ethereum_wallets"), o3 = "solana" === r2.chainType && e.includes("detected_solana_wallets");
        if (t3 || o3) {
          let e2 = m.find((({ walletClientType: e3 }) => e3 === y2));
          e2 && c.push(/* @__PURE__ */ u(D, { connectOnly: a, provider: y2, displayName: (_a2 = e2.walletBranding) == null ? void 0 : _a2.name, logo: (_b2 = e2.walletBranding) == null ? void 0 : _b2.icon, connector: e2 }, `${l3}-${y2}`));
        }
      }
    }
    return [...s2, ...c, ...p2];
  })({ walletList: _.appearance.walletList.filter(((e) => !I2.some(((n2) => n2.walletClientType === e)) && !A2.some(((n2) => n2.walletClientType === e)))), walletChainType: s, connectors: p$12, connectOnly: true, ignore: [..._.appearance.walletList, ...M2, ...N2], walletConnectEnabled: _.externalWallets.walletConnect.enabled }));
  let U = /* @__PURE__ */ u(l$1, { text: "More wallets", onClick: () => b("overflow") }), z = ({ sourceChainType: e, destChainType: n2 }) => "ethereum" === e && "solana" === n2 ? "AwaitingEvmToSolBridgingScreen" : "ethereum" === e && "ethereum" === n2 ? "AwaitingExternalEthereumTransferScreen" : "solana" === e && "ethereum" === n2 ? "AwaitingSolToEvmBridgingScreen" : H2.externalSolanaFundingScreen;
  return y((() => {
    y$1({ ...u$2, externalConnectWallet: { onCompleteNavigateTo: ({ address: e, walletClientType: n2, walletChainType: t2 }) => {
      let l2 = t2 ?? "ethereum", a = "ethereum" === l2 ? I2.find(((t3) => t3.address === e && t3.walletClientType === n2)) : A2.find(((t3) => t3.address === e && t3.walletClientType === n2));
      return y$1({ ...u$2, funding: { ...H2, connectedWallet: a, onContinueWithExternalWallet: () => {
        h(z({ destChainType: k ? "solana" : "ethereum", sourceChainType: l2 }));
      } }, solanaFundingData: (u$2 == null ? void 0 : u$2.solanaFundingData) ? { ...u$2.solanaFundingData, sourceWalletData: { address: e || "", walletClientType: n2 || "" } } : void 0 }), "FundingAmountEditScreen";
    } } });
  }), []), /* @__PURE__ */ u(S$1, "overflow" === W2 ? { children: [/* @__PURE__ */ u(T, { backFn: () => b("default") }, "header"), /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(r, { style: { color: "var(--privy-color-foreground-3)", textAlign: "left" }, children: "More wallets" }), P2] }), /* @__PURE__ */ u(u$1, {})] } : { children: [/* @__PURE__ */ u(t, {}), /* @__PURE__ */ u(o, { title: "Transfer from wallet", description: "Connect a wallet to deposit funds or send funds manually to your wallet address." }), /* @__PURE__ */ u(S, { children: [P2.length > 4 ? P2.slice(0, 3) : P2, P2.length > 4 && U] }), /* @__PURE__ */ u(u$1, {})] });
} };
let q = ({ onClick: t2, icon: l2, name: a, chainType: o2 }) => /* @__PURE__ */ u(j, { onClick: t2, children: [/* @__PURE__ */ u(n, { style: { width: 20 }, children: /* @__PURE__ */ u(i, { icon: l2, name: a }) }), a, /* @__PURE__ */ u(n$1, { color: "gray", style: { marginLeft: "auto" }, children: "Connected" }), "solana" === o2 && /* @__PURE__ */ u(n$1, { color: "gray", children: "Solana" })] });
export {
  N as TransferFromWalletScreen,
  N as default
};
