import { dl as le, dr as l, dq as g, dz as p, df as d, dA as P, dh as y, bN as createWalletClient, cN as publicActions, dB as la, dC as s, dD as A, dy as i, y as createPublicClient, z as http, dE as n$2, cg as formatUnits, dF as f, dk as u$1, dG as S } from "./index-Cw7cGahV.js";
import { F as ForwardRef } from "./CheckCircleIcon-Cm_QCBP9.js";
import { c as c$1, n as n$3, s as s$2 } from "./Layouts-BlFm53ED-sn3bL9j4.js";
import { u as u$2 } from "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import { o as o$1 } from "./ScreenHeader-CHmc4-Lu-AkOZquqG.js";
import { t as t$2 } from "./FundWalletMethodHeader-G5sXf6Zt-BiiZpNCn.js";
import { t as t$3 } from "./index-Dq_xe9dz-BBvQqKgm.js";
import { c, n as n$1 } from "./useGetTokenPrice-_x6xp2Po-CptJXGGn.js";
import { t as t$1 } from "./analytics-mkkvFRju-3eV9Df16.js";
import { l as l$1, o, s as s$1, r, u, h } from "./reservoir-B7XIq5qj-DE3jLfCP.js";
import { e } from "./getChainName-DjpPdUSc-D27InAbL.js";
import { t, n } from "./transaction-CnfuREWo-41oAee1p.js";
import { W, Z } from "./BridgeNetworkSelectionView-CS9y26Vs-CLznaq3E.js";
import { I } from "./TransferOrBridgeLoadingScreen-Bi6Efsb0-DFRsV5NU.js";
import { c as custom } from "./custom-Bu-PKexr.js";
import "./useGetSolPrice-x7gfUIHJ-Cwf4hWsa.js";
import "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
import "./getErc20Balance-DHgWH7_1-88g-TlBV.js";
import "./Value-tcJV9e0L-B2MkJpNo.js";
import "./LoadingSkeleton-U6-3yFwI-BXCg8yiC.js";
import "./ErrorMessage-D8VaAP5m-ClsdzmKI.js";
import "./Subtitle-CV-2yKE4-DYO6m2P4.js";
import "./Title-BnzYV3Is-C0li3V44.js";
import "./WalletIcon-CUBGtC_3.js";
import "./Chip-D2-wZOHJ-B2XlgAss.js";
import "./shared-FM0rljBt-rCzEWQL2.js";
import "./ChevronDownIcon-RazvJHs6.js";
import "./formatErc20TokenAmount-BuPk9xcy-DA50wSFk.js";
import "./ethers-DFE0Hz-t-CVcjYk0m.js";
import "./styles-DLlsr-XC-CVLrKLhV.js";
import "./LinkPasskeyScreen-C2ClLwr7-Dwo01okY.js";
import "./TodoList-CgrU7uwu-BT8sysbM.js";
import "./x-B8CpVFCb.js";
import "./createLucideIcon-vpjfwHTJ.js";
import "./check-pJYqNiWi.js";
import "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./circle-check-big-IM5tivlQ.js";
import "./fingerprint-pattern-BqeFrF0e.js";
import "./formatters-BV0McdBE.js";
import "./floating-ui.react-CYyT2_ig.js";
import "./floating-ui.react-dom-C4gaCUET.js";
import "./InjectedWalletIcon-DLcYOGDj-D0ChJWqD.js";
import "./Address--RvzbtOt-m8U8kCUS.js";
import "./copy-Dc_XQleO.js";
import "./GlobeAltIcon-BdXRZRJB.js";
const V = { component: () => {
  let V2 = le(), { rpcConfig: _, appId: z, closePrivyModal: Q, createAnalyticsEvent: Y } = l(), { navigate: J, setModalData: X, data: K } = g(), Z$1 = le(), { wallets: ee } = p(), [te, ie] = d(null), [re, ae] = d(null), [oe, ne] = d([]), [se, me] = d(0), [de, ce] = d(false), [le$1, pe] = d(false), [ue, he] = d(false), [ge, fe] = d(false), [ve, je] = d(), [ye, Ie] = d();
  if (!(K == null ? void 0 : K.funding) || "solana" !== K.funding.chainType) throw Error("Invalid funding data");
  let { address: we, chain: Te, connectedWallet: Ce } = K.funding, [be, Se] = d(K.funding.amount), xe = ("ethereum" === (Ce == null ? void 0 : Ce.type) ? Ce : void 0) ?? ee[0], Ne = P((xe == null ? void 0 : xe.walletClientType) || "unknown"), ke = (Ne == null ? void 0 : Ne.name) || "wallet", [Ae, Fe] = d(null);
  y((() => {
    (async () => {
      if (!xe) return;
      let e2 = await xe.getEthereumProvider();
      Fe(createWalletClient({ account: xe.address, transport: custom(e2) }).extend(publicActions));
    })().catch(console.error);
  }), [xe]);
  let [Pe, Ee] = d(0n), Be = t(Pe);
  y((() => {
    let e2 = V2.solanaRpcs[Te];
    e2 ? la({ rpc: e2.rpc, address: we }).then(((e3) => Ee(BigInt(e3)))).catch(console.error) : console.warn("Unable to load solana rpc, skipping balance");
  }), []);
  let [Le, Ue] = d(), { tokenPrice: Me } = c("solana"), { fundingAmountInBaseUnit: We, fundingAmountInUsd: qe } = n({ amount: be, fee: 0n, tokenPrice: Me, isUsdc: K.funding.isUSDC });
  if (y((() => {
    (async () => {
      if (!Ae || !xe) return;
      let e2 = ["solana:testnet", "solana:devnet"].includes(Te);
      e2 && console.warn("Solana testnets are not supported for bridging");
      let t2 = n$1(Z$1.chains).filter((({ testnet: t3 }) => !!t3 === e2)), i$1 = (await W({ chains: t2, address: xe.address, appId: z, rpcConfig: _ })).filter(((e3) => e3.balance > 0n));
      if (i$1.length < 1) return void ie(new s(`Wallet ${A(xe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      i$1.sort(((e3, t3) => Number(t3.balance - e3.balance)));
      let r$1 = (await Promise.allSettled(i$1.map((async (e3) => ({ ...e3, quote: await l$1({ isTestnet: false, input: o({ appId: z, amount: We.toString(), user: xe.address, recipient: we, destinationChainId: r, destinationCurrency: s$1, originChainId: e3.chain.id }) }) }))))).filter(((e3) => "fulfilled" === e3.status)).map(((e3) => e3.value));
      if (r$1.length < 1) return void ie(new s(`Unable to fetch quotes for bridging. Wallet ${A(xe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let a = r$1.map((({ quote: e3, balance: t3, chain: i2 }) => ({ bridgeTx: u(e3), balance: t3, chain: i2, isErc20Quote: false }))).filter((({ bridgeTx: e3 }) => !!e3));
      if (a.length > 1) return void ne(a);
      let o$12 = a.at(0);
      o$12 ? (pe(true), Ue({ data: o$12.bridgeTx.data, to: o$12.bridgeTx.to, value: o$12.bridgeTx.value, chain: o$12.chain })) : ie(new s(`Unable to select bridge option from quotes. Wallet ${A(xe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
    })().catch(console.error);
  }), [Ae]), y((() => {
    (async () => {
      let e2, t2;
      if (!Ae || !xe || de || ue || !Le) return;
      ce(true);
      let i$1 = createPublicClient({ chain: Le.chain, transport: http(n$2(Le.chain, _, z)) });
      try {
        e2 = await i$1.prepareTransactionRequest({ account: xe.address, to: Le.to, chain: Le.chain, data: Le.data, value: BigInt(Le.value ?? 0) });
      } catch (e3) {
        console.error(e3), oe.length > 1 && ae(e3.shortMessage ?? "Something went wrong");
      }
      if (e2) {
        "eip1559" === e2.type || "eip4844" === e2.type || "eip7702" === e2.type ? void 0 !== e2.gasPrice && delete e2.gasPrice : ("legacy" === e2.type || "eip2930" === e2.type) && (void 0 !== e2.maxFeePerGas && delete e2.maxFeePerGas, void 0 !== e2.maxPriorityFeePerGas && delete e2.maxPriorityFeePerGas), ce(false), he(true);
        try {
          await Ae.switchChain({ id: Le.chain.id });
        } catch (e3) {
          await Ae.addChain({ chain: Le.chain }), await Ae.switchChain({ id: Le.chain.id });
        }
        try {
          t2 = await Ae.sendTransaction(e2);
        } catch (e3) {
          console.error(e3), "TransactionExecutionError" === e3.name && (oe.length < 1 ? ie(new s(e3.shortMessage, void 0, i.TRANSACTION_FAILURE)) : ae(e3.shortMessage ?? "Something went wrong"));
        }
        if (t2) return await Ae.waitForTransactionReceipt({ hash: t2 }), le$1 ? (Ie("pending"), void je(t2)) : (he(false), fe(true), void Y({ eventName: t$1, payload: { provider: "external", status: "success", txHash: t2, address: xe.address, chainId: Le.chain.id, chainType: "ethereum", value: Le.value ? formatUnits(BigInt(Le.value), 18) : void 0, token: "ETH", destination: we, destinationClusterName: "mainnet-beta", destinationChainType: "solana", destinationValue: formatUnits(We, 9), destinationToken: "SOL" } }));
        he(false);
      } else ce(false);
    })().catch(console.error);
  }), [Ae, Le]), h({ transactionHash: ve, isTestnet: false, bridgingStatus: ye, setBridgingStatus: Ie, onSuccess({ transactionHash: e2 }) {
    pe(false), fe(true), Y({ eventName: t$1, payload: { provider: "external", status: "success", txHash: e2, address: xe == null ? void 0 : xe.address, chainId: Le == null ? void 0 : Le.chain.id, chainType: "ethereum", value: (Le == null ? void 0 : Le.value) ? formatUnits(BigInt(Le.value), 18) : void 0, token: "ETH", destination: we, destinationClusterName: "mainnet-beta", destinationChainType: "solana", destinationValue: formatUnits(We, 9), destinationToken: "SOL" } });
  }, onFailure({ error: e2 }) {
    pe(false), ie(e2);
  } }), y((() => {
    te && (X({ funding: K == null ? void 0 : K.funding, solanaFundingData: K == null ? void 0 : K.solanaFundingData, sendTransaction: K == null ? void 0 : K.sendTransaction, errorModalData: { error: te, previousScreen: "TransferFromWalletScreen" } }), J("ErrorScreen", false));
  }), [te]), y((() => {
    if (!ge) return;
    let e2 = setTimeout(Q, f);
    return () => clearTimeout(e2);
  }), [ge]), ge) return u$1(S, { children: [/* @__PURE__ */ u$1(t$2, {}), /* @__PURE__ */ u$1(c$1, {}), /* @__PURE__ */ u$1(n$3, { children: [/* @__PURE__ */ u$1(ForwardRef, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ u$1(o$1, { title: "Success!", description: `You’ve successfully added ${be} SOL to your ${Z$1.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ u$1(s$2, {}), /* @__PURE__ */ u$1(u$2, {})] });
  let He = oe[se];
  return oe.length > 1 && He ? /* @__PURE__ */ u$1(Z, { displayName: ke, configuredFundingChain: Te, formattedBalance: Be, fundingAmount: be, fundingCurrency: "SOL", fundingAmountInUsd: qe, options: oe, selectedOption: He, isPreparing: de, isSubmitting: ue, addressToFund: we, fundingWalletAddress: (xe == null ? void 0 : xe.address) || "", errorMessage: re, onSubmit: () => {
    var _a;
    ((_a = K.funding) == null ? void 0 : _a.amount) !== be ? (async function() {
      if (xe && He) try {
        let e2 = await l$1({ isTestnet: false, input: o({ appId: z, amount: We.toString(), user: xe.address, recipient: we, destinationChainId: r, destinationCurrency: s$1, originChainId: He.chain.id }) }), t2 = u(e2);
        if (!t2) throw Error("Invalid transaction request");
        pe(true), Ue({ data: t2.data, to: t2.to, value: t2.value, chain: He.chain });
      } catch (e2) {
        console.error(e2), ie(new s("Unable to fetch quotes for bridging", e2, i.INSUFFICIENT_BALANCE));
      }
    })().catch(console.error) : Ue({ to: He.bridgeTx.to, data: He.bridgeTx.data, value: He.bridgeTx.value, chain: He.chain });
  }, onSelect: (e2) => {
    e2 !== se && (ae(null), me(e2));
  }, onAmountChange: Se }) : ue && xe ? /* @__PURE__ */ u$1(I, { walletClientType: (xe == null ? void 0 : xe.walletClientType) || "unknown", displayName: ke, addressToFund: we, isBridging: le$1, isErc20Flow: false, chainId: "solana", chainName: e(Te), totalPriceInUsd: void 0, totalPriceInNativeCurrency: void 0, gasPriceInUsd: void 0, gasPriceInNativeCurrency: void 0 }) : /* @__PURE__ */ u$1(S, { children: [/* @__PURE__ */ u$1(t$2, {}), /* @__PURE__ */ u$1(t$3, {}), /* @__PURE__ */ u$1("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ u$1(u$2, {})] });
} };
export {
  V as AwaitingEvmToSolBridgingScreen,
  V as default
};
