import { dl as le, dr as l, dq as g, dg as A, df as d, di as T, dC as s, eN as r, eO as n, eP as j, dA as P$1, eQ as G, dh as y, eR as y$1, dy as i, dF as f, dk as u, dG as S } from "./index-R3UC2dO4.js";
import { F as ForwardRef } from "./CheckCircleIcon-7SJv_Xsw.js";
import { c, n as n$1, s as s$1 } from "./Layouts-BlFm53ED-CD0Nk718.js";
import { u as u$1 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { o as o$1 } from "./ScreenHeader-CHmc4-Lu-BTpsk-7m.js";
import { t } from "./FundWalletMethodHeader-G5sXf6Zt-DJM9bH8h.js";
import { t as t$1 } from "./index-Dq_xe9dz-CSIqWJSY.js";
import { t as t$2 } from "./analytics-mkkvFRju-3eV9Df16.js";
import { l as l$1, o, h, n as n$2, s as s$2, r as r$1 } from "./reservoir-B7XIq5qj-BtGH4Z1f.js";
import { I } from "./TransferOrBridgeLoadingScreen-Bi6Efsb0-oUZDOU2G.js";
import { p as parseEther } from "./parseEther-BxWAscJo.js";
import "./InjectedWalletIcon-DLcYOGDj-BpqC5hPN.js";
import "./WalletIcon-CNZGRrot.js";
import "./Value-tcJV9e0L-Boz156Le.js";
import "./LoadingSkeleton-U6-3yFwI-DJcpe7Sx.js";
import "./Address--RvzbtOt-CHKyld_u.js";
import "./check-Di0e4xHX.js";
import "./createLucideIcon-COMOll4V.js";
import "./copy-C3pj4YGq.js";
import "./GlobeAltIcon-CSEIDQ2q.js";
import "./parseUnits-o6Cv7VQR.js";
const P = { component: function() {
  let P2 = le(), { closePrivyModal: B, createAnalyticsEvent: D, connectors: $ } = l(), { navigate: H, setModalData: M, data: q } = g(), O = le(), _ = A(false), [z, G$1] = d(false), [Q, V] = d(false), [X, Y] = d(null), [J, K] = d(), [Z, ee] = d();
  if (!(q == null ? void 0 : q.funding) || "ethereum" !== q.funding.chainType) throw Error("Invalid funding data");
  let { amount: te, connectedWallet: re, chain: oe, solanaChain: ne, isUSDC: ae } = q.funding, ie = q.funding.address, se = q.funding.erc20Address, ce = q.funding.isUSDC ? "USDC" : oe.nativeCurrency.symbol, le$1 = T((() => "solana" === (re == null ? void 0 : re.type) ? re.provider : (function({ connectors: e, connectedWalletAddress: t2 }) {
    let r$12 = e.find(((e2) => "solana" === e2.chainType && e2.wallets.some(((e3) => e3.address === t2)))), o2 = r$12 == null ? void 0 : r$12.wallet.accounts.find(((e2) => e2.address === t2));
    if (!r$12 || !o2) throw new s("Unable to find source wallet connector");
    return new r({ wallet: r$12.wallet, account: o2 });
  })({ connectors: $, connectedWalletAddress: (re == null ? void 0 : re.address) || "" })), [re, $]), de = T((() => {
    let e = n(j);
    if (!e) throw new s("Unable to load solana plugin");
    let t2 = P2.solanaRpcs["solana:mainnet"];
    if (!t2) throw new s("Unable to load mainnet RPC");
    return e.getSolanaRpcClient({ rpc: t2.rpc, rpcSubscriptions: t2.rpcSubscriptions, chain: "solana:mainnet", blockExplorerUrl: t2.blockExplorerUrl ?? "https://explorer.solana.com" });
  }), []), me = P$1(G((le$1 == null ? void 0 : le$1.standardWallet.name) || "unknown")), ue = (me == null ? void 0 : me.name) || "wallet";
  return y((() => {
    (async function() {
      if (!le$1 || !oe || _.current) return;
      let e = n(j);
      if (!e) return void Y(new s("Unable to solana plugin"));
      _.current = true, (oe == null ? void 0 : oe.testnet) && console.warn("Solana testnets are not supported for bridging");
      let t2 = ae ? 1e6 * parseFloat(te) : parseEther(te), r2 = await l$1({ isTestnet: !!oe.testnet, input: o({ appId: O.id, amount: t2.toString(), user: le$1.address, recipient: ie, destinationChainId: oe.id, originChainId: r$1, originCurrency: ae ? n$2 : s$2, destinationCurrency: ae ? se : void 0 }) }).catch(console.error);
      if (!r2) return void Y(new s(`Unable to fetch quotes for bridging. Wallet ${y$1(le$1.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let o$12 = await e.createTransactionFromRelayQuote({ quote: r2, source: le$1.address, solanaClient: de });
      if (o$12) try {
        G$1(true);
        let t3 = await e.simulateTransaction({ solanaClient: de, tx: o$12 });
        if (t3.hasError) return t3.hasFunds ? (console.error("Transaction failed:", t3.error), void Y(new s("Something went wrong", void 0, i.TRANSACTION_FAILURE))) : void Y(new s(`Wallet ${y$1(le$1 == null ? void 0 : le$1.address)} does not have enough funds. ${r2.details.currencyIn.amountFormatted} ${ce} are needed to complete the transaction.`, void 0, i.INSUFFICIENT_BALANCE));
        let { signature: n2 } = await le$1.signAndSendTransaction({ chain: "solana:mainnet", transaction: o$12 }), a = e.getAddressFromBuffer(n2);
        K(a), ee("pending");
      } catch (e2) {
        if (console.error(e2), /user rejected the request/gi.test(e2.message || "")) return void Y(new s("Transaction was rejected by the user", void 0, i.TRANSACTION_FAILURE));
        Y(new s("Something went wrong", void 0, i.TRANSACTION_FAILURE));
      }
      else Y(new s(`Unable to select bridge option from quotes. Wallet ${y$1(le$1.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
    })().catch(console.error);
  }), []), h({ transactionHash: J, isTestnet: false, bridgingStatus: Z, setBridgingStatus: ee, onSuccess({ transactionHash: e }) {
    G$1(false), V(true), D({ eventName: t$2, payload: { provider: "external", status: "success", txHash: e, address: le$1.address, chainType: "solana", clusterName: ne, token: "SOL", destinationAddress: ie, destinationChainId: oe.id, destinationChainType: "ethereum", destinationValue: te, destinationToken: ae ? "USDC" : "ETH" } });
  }, onFailure({ error: e }) {
    G$1(false), Y(e);
  } }), y((() => {
    if (!Q) return;
    let e = setTimeout(B, f);
    return () => clearTimeout(e);
  }), [Q]), y((() => {
    X && (M({ funding: q == null ? void 0 : q.funding, solanaFundingData: q == null ? void 0 : q.solanaFundingData, sendTransaction: q == null ? void 0 : q.sendTransaction, errorModalData: { error: X, previousScreen: "TransferFromWalletScreen" } }), H("ErrorScreen", false));
  }), [X]), Q ? /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(t, {}), /* @__PURE__ */ u(c, {}), /* @__PURE__ */ u(n$1, { children: [/* @__PURE__ */ u(ForwardRef, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ u(o$1, { title: "Success!", description: `You’ve successfully added ${te} ${ce} to your ${O.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ u(s$1, {}), /* @__PURE__ */ u(u$1, {})] }) : z && le$1 ? /* @__PURE__ */ u(I, { walletClientType: G((le$1 == null ? void 0 : le$1.standardWallet.name) || "unknown"), displayName: ue, addressToFund: ie, isBridging: z, isErc20Flow: false, chainId: oe.id, chainName: oe.name, totalPriceInUsd: void 0, totalPriceInNativeCurrency: void 0, gasPriceInUsd: void 0, gasPriceInNativeCurrency: void 0 }) : /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(t, {}), /* @__PURE__ */ u(t$1, {}), /* @__PURE__ */ u("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ u(u$1, {})] });
} };
export {
  P as AwaitingSolToEvmBridgingScreen,
  P as default
};
