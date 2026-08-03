import { dr as l, dq as g, dl as le, dz as p, df as d, dh as y, dA as P, bN as createWalletClient, cN as publicActions, y as createPublicClient, z as http, dE as n, c1 as encodeFunctionData, dC as s, dD as A, dy as i, dH as ia, cg as formatUnits, dF as f$1, dk as u$1, dG as S } from "./index-BDOBKk5h.js";
import { F as ForwardRef } from "./CheckCircleIcon-rmdD1dew.js";
import { c as c$2, n as n$4, s as s$1 } from "./Layouts-BlFm53ED-yBJtLUJO.js";
import { u as u$2 } from "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import { o as o$2 } from "./ScreenHeader-CHmc4-Lu-Cf3Iir_Y.js";
import { t as t$2 } from "./FundWalletMethodHeader-G5sXf6Zt-Bbxeke97.js";
import { t as t$4 } from "./index-Dq_xe9dz-q3L4r6Lr.js";
import { c, n as n$2 } from "./useGetTokenPrice-_x6xp2Po-B7i-7B59.js";
import { t, a } from "./transfer-6YztDh-t-BvdOhwuP.js";
import { t as t$3 } from "./formatErc20TokenAmount-BuPk9xcy-DA50wSFk.js";
import { n as n$3, o as o$1, c as c$1, m } from "./ethers-DFE0Hz-t-Cc0adSz8.js";
import { t as t$1 } from "./analytics-mkkvFRju-3eV9Df16.js";
import { o, l as l$1, f, u, h } from "./reservoir-B7XIq5qj-D5KrYfaA.js";
import { W, Z } from "./BridgeNetworkSelectionView-CS9y26Vs-DVgt78CO.js";
import { n as n$1 } from "./getErc20Balance-DHgWH7_1-B9Fsu5gj.js";
import { I } from "./TransferOrBridgeLoadingScreen-Bi6Efsb0-ZWCRuxsh.js";
import { p as parseEther } from "./parseEther-D2NGKAC5.js";
import { c as custom } from "./custom-Da3qeNkW.js";
import "./useGetSolPrice-x7gfUIHJ-9vbFGzyf.js";
import "./Value-tcJV9e0L-CSPaXLry.js";
import "./LoadingSkeleton-U6-3yFwI-CDkrgo6T.js";
import "./ErrorMessage-D8VaAP5m-Dl-cYhnb.js";
import "./Subtitle-CV-2yKE4-BOIv64VM.js";
import "./Title-BnzYV3Is-CKGQ4bhs.js";
import "./WalletIcon-CIbCIQY1.js";
import "./getChainName-DjpPdUSc-D27InAbL.js";
import "./Chip-D2-wZOHJ-BZeFFc0J.js";
import "./shared-FM0rljBt-ZsFHMSZj.js";
import "./ChevronDownIcon-BqsgRWtO.js";
import "./styles-DLlsr-XC-BEBJuxAq.js";
import "./LinkPasskeyScreen-C2ClLwr7-BmlGTjVT.js";
import "./TodoList-CgrU7uwu-BmqTu_1v.js";
import "./x-kwg8mEMW.js";
import "./createLucideIcon-Bh-mHKe7.js";
import "./check-BeAd3IiM.js";
import "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./circle-check-big-Cj9Xmm_9.js";
import "./fingerprint-pattern-Cg7G4Ptd.js";
import "./formatters-Cj6oAVGc.js";
import "./floating-ui.react-CEl1M9cJ.js";
import "./floating-ui.react-dom-D-q8Ex0X.js";
import "./InjectedWalletIcon-DLcYOGDj-CfzRR8dA.js";
import "./Address--RvzbtOt-DYV2Nw9s.js";
import "./copy-Ws1Rb_R3.js";
import "./GlobeAltIcon-BxPdabs8.js";
import "./parseUnits-BKCwu7RB.js";
const X = { component: () => {
  var _a, _b, _c, _d, _e2;
  let { rpcConfig: X2, appId: Z$1, closePrivyModal: K, createAnalyticsEvent: ee } = l(), { navigate: te, setModalData: re, data: ie } = g(), ae = le(), { wallets: ne } = p(), [oe, se] = d(false), [de, ce] = d(0n), [le$1, me] = d(false), [ue, pe] = d(null), [he, fe] = d(null), [ge, ve] = d([]), [ye, Ce] = d(0), [je, Ie] = d([]), [we, Te] = d(false), [be, Ee] = d(false), [Se, Ne] = d(false), [Ae, xe] = d(false), [Fe, ke] = d(), [Be, Pe] = d();
  if (!(ie == null ? void 0 : ie.funding) || "ethereum" !== ie.funding.chainType) throw Error("Invalid funding data");
  let { erc20ContractInfo: Le, chain: Me, connectedWallet: We } = ie.funding, qe = ie.funding.address, Ue = ie.funding.erc20Address, [He, $e] = d(ie.funding.amount);
  y((() => {
    Ue && !Le && pe(Error("Unable to fetch token details"));
  }), []);
  let Ge = !!Ue && !!Le, De = Ge ? BigInt(parseFloat(He) * 10 ** Le.decimals) : parseEther(He), Re = ("ethereum" === (We == null ? void 0 : We.type) ? We : void 0) ?? ne[0], _e = P((Re == null ? void 0 : Re.walletClientType) || "unknown"), Qe = (_e == null ? void 0 : _e.name) || "wallet", [Ve, Oe] = d(null);
  y((() => {
    (async () => {
      if (!Re) return;
      let e = await Re.getEthereumProvider();
      Oe(createWalletClient({ account: Re.address, transport: custom(e) }).extend(publicActions));
    })().catch(console.error);
  }), [Re]);
  let [ze, Ye] = d(0n);
  y((() => {
    createPublicClient({ chain: Me, transport: http(n(Me, X2, Z$1)) }).getBalance({ address: qe }).then(Ye).catch(console.error);
  }), []);
  let [Je, Xe] = d(0n);
  y((() => {
    Ge && n$1({ chain: Me, address: qe, appId: Z$1, rpcConfig: X2, erc20Address: Ue }).then(((e) => Xe(e.balance))).catch(console.error);
  }), []);
  let { tokenPrice: Ze } = c(Me.id), [Ke, et] = d({ to: qe, chain: Me, value: De, data: void 0 });
  y((() => {
    (async () => {
      let e, t$22;
      if (!Ve || !Re || we || Se) return;
      Te(true);
      let r = createPublicClient({ chain: Ke.chain, transport: http(n(Ke.chain, X2, Z$1)) });
      if (Ge && !Ke.data) return await r.simulateContract({ address: Ue, chain: Ke.chain, abi: t, functionName: "transfer", args: [qe, De], account: Re.address }).catch(((e2) => {
        var _a2, _b2;
        if ("ContractFunctionZeroDataError" === ((_a2 = e2 == null ? void 0 : e2.cause) == null ? void 0 : _a2.name) || ((_b2 = e2 == null ? void 0 : e2.message) == null ? void 0 : _b2.includes("returned no data"))) return r.simulateContract({ address: Ue, chain: Ke.chain, abi: a, functionName: "transfer", args: [qe, De], account: Re.address }).catch(((e3) => {
          console.warn("Simulated token transfer failed with error, fetching bridge options.", e3);
        }));
        console.warn("Simulated token transfer failed with error, fetching bridge options.", e2);
      })) ? (Te(false), void et({ to: Ue, chain: Ke.chain, data: encodeFunctionData({ abi: t, functionName: "transfer", args: [qe, De] }), value: "0x0" })) : (Te(false), void me(true));
      try {
        e = await r.prepareTransactionRequest({ account: Re.address, to: Ke.to, chain: Ke.chain, data: Ke.data, value: BigInt(Ke.value ?? 0) });
      } catch (e2) {
        if (console.error(e2), ge.length > 1) fe(e2.shortMessage ?? "Something went wrong");
        else if (be && 0 === ge.length) return void pe(new s(`Wallet ${A(Re.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      }
      if (!e) return Te(false), void me(true);
      "eip1559" === e.type || "eip4844" === e.type || "eip7702" === e.type ? void 0 !== e.gasPrice && delete e.gasPrice : ("legacy" === e.type || "eip2930" === e.type) && (void 0 !== e.maxFeePerGas && delete e.maxFeePerGas, void 0 !== e.maxPriorityFeePerGas && delete e.maxPriorityFeePerGas), Te(false), Ne(true), se(true), ce(e.gas);
      try {
        await Ve.switchChain({ id: Ke.chain.id });
      } catch (e2) {
        await Ve.addChain({ chain: Ke.chain }), await Ve.switchChain({ id: Ke.chain.id });
      }
      try {
        t$22 = await Ve.sendTransaction(e);
      } catch (e2) {
        if (console.error(e2), "TransactionExecutionError" === e2.name) if (ge.length < 1) {
          let t2 = e2.shortMessage;
          (e2.shortMessage.includes("rejected the request") || e2.details.includes("rejected the request")) && (t2 = "User rejected the request."), pe(new s(t2, void 0, i.TRANSACTION_FAILURE));
        } else fe(e2.shortMessage ?? "Something went wrong");
      }
      if (t$22) {
        if (await Ve.waitForTransactionReceipt({ hash: t$22 }), Ne(false), be) {
          if (je.length > 0) {
            let [e2, ...t2] = je;
            if (!e2) return;
            return Ie(t2), void et(e2);
          }
          return ke(t$22), void Pe("pending");
        }
        xe(true), re(ia(ie, "completed", t$22, Re == null ? void 0 : Re.walletClientType, Ge, Le, Me)), ee({ eventName: t$1, payload: { provider: "external", status: "success", txHash: t$22, address: Re.address, chainId: Ke.chain.id, chainType: "ethereum", value: Ke.value ? formatUnits(BigInt(Ke.value), (Le == null ? void 0 : Le.decimals) ?? 18) : void 0, token: (Le == null ? void 0 : Le.symbol) ?? Ue ?? "ETH", destinationAddress: qe, destinationChainId: Me.id, destinationChainType: "ethereum", destinationValue: De ? formatUnits(De, (Le == null ? void 0 : Le.decimals) ?? 18) : void 0, destinationToken: (Le == null ? void 0 : Le.symbol) ?? Ue ?? Me.nativeCurrency.name } });
      } else Ne(false);
    })().catch(console.error);
  }), [Ve, Ke]), y((() => {
    (async () => {
      if (!le$1 || !Ve || !Re) return;
      let e = n$2(ae.chains).filter(((e2) => e2.id !== Me.id && !!e2.testnet == !!Me.testnet));
      Ge && e.unshift(Me);
      let t2 = await W({ chains: e, address: Re.address, appId: Z$1, rpcConfig: X2 }), r = Ge ? t2.filter(((e2) => e2.balance > 0n)) : t2.filter(((e2) => e2.balance > De)), i$1 = Ge && t2.every(((e2) => 0n === e2.balance));
      if (r.length < 1) return void pe(new s(i$1 ? `Wallet ${A(Re.address)} doesn't have enough funds to cover gas fees. Top up your wallet and try again.` : `Wallet ${A(Re.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      r.sort(((e2, t3) => Number(Ge ? (t3.erc20Balance ?? 0n) - (e2.erc20Balance ?? 0n) : t3.balance - e2.balance)));
      let a2 = r.flatMap(((e2) => {
        let t3 = [{ ...e2, isErc20Quote: false, isTestnet: !!Me.testnet, input: o({ appId: Z$1, amount: De.toString(), user: Re.address, recipient: qe, destinationChainId: Me.id, destinationCurrency: Ue, originChainId: e2.chain.id }) }];
        return Ge && Ue && (e2.erc20Balance ?? 0n) > 0n && t3.push({ ...e2, isErc20Quote: true, isTestnet: !!Me.testnet, input: o({ appId: Z$1, amount: De.toString(), user: Re.address, recipient: qe, destinationChainId: Me.id, destinationCurrency: Ue, originChainId: e2.chain.id, originCurrency: e2.erc20Address }) }), t3;
      })), n2 = (await Promise.allSettled(a2.map((async (e2) => ({ ...e2, quote: await l$1(e2) }))))).filter(((e2) => "fulfilled" === e2.status)).map(((e2) => e2.value));
      if (n2.length < 1) return void pe(new s(`Wallet ${A(Re.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let o$12 = n2.map(((e2) => ({ bridgeTx: u(e2.quote), allTxSteps: f(e2.quote), balance: e2.balance, chain: e2.chain, erc20Balance: e2.erc20Balance, isErc20Quote: e2.isErc20Quote }))).filter(((e2) => !!e2.bridgeTx));
      if (o$12.length > 1) return void ve(o$12);
      let s$12 = o$12[0];
      if (!s$12) return void pe(new s(`Wallet ${A(Re.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let [d2, ...c2] = s$12.allTxSteps ?? [s$12.bridgeTx];
      d2 ? (Ee(true), Ie(c2.map(((e2) => ({ ...e2, chain: s$12.chain })))), et({ data: d2.data, to: d2.to, value: d2.value, chain: s$12.chain })) : pe(new s(`Wallet ${A(Re.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
    })().catch(console.error);
  }), [le$1]), h({ transactionHash: Fe, isTestnet: !!Me.testnet, bridgingStatus: Be, setBridgingStatus: Pe, onSuccess({ transactionHash: e }) {
    Ee(false), xe(true), re(ia(ie, "completed", e, Re == null ? void 0 : Re.walletClientType, Ge, Le, Me)), ee({ eventName: t$1, payload: { provider: "external", status: "success", txHash: e, address: Re == null ? void 0 : Re.address, chainId: Ke.chain.id, chainType: "ethereum", value: Ke.value ? formatUnits(BigInt(Ke.value), (Le == null ? void 0 : Le.decimals) ?? 18) : void 0, token: (Le == null ? void 0 : Le.symbol) ?? Ue ?? "ETH", destinationAddress: qe, destinationChainId: Me.id, destinationChainType: "ethereum", destinationValue: De ? formatUnits(De, (Le == null ? void 0 : Le.decimals) ?? 18) : void 0, destinationToken: (Le == null ? void 0 : Le.symbol) ?? Ue ?? Me.nativeCurrency.name } });
  }, onFailure({ error: e }) {
    Ee(false), pe(e);
  } }), y((() => {
    ue && (re({ funding: ie == null ? void 0 : ie.funding, solanaFundingData: ie == null ? void 0 : ie.solanaFundingData, sendTransaction: ie == null ? void 0 : ie.sendTransaction, errorModalData: { error: ue, previousScreen: "TransferFromWalletScreen" } }), te("ErrorScreen", false));
  }), [ue]);
  let tt = !Ge && Ze ? n$3(He ?? "0", Ze) : void 0, rt = Ge ? de : m([de, De]), it = rt && Ze ? o$1(rt, Ze) : void 0, at = rt ? c$1(rt, ((_a = ie == null ? void 0 : ie.funding) == null ? void 0 : _a.erc20Address) ? ((_c = (_b = ie == null ? void 0 : ie.funding) == null ? void 0 : _b.erc20ContractInfo) == null ? void 0 : _c.symbol) || "ETH" : ((_d = ie == null ? void 0 : ie.funding) == null ? void 0 : _d.chain.nativeCurrency.symbol) || "ETH") : void 0, nt = de && Ze ? o$1(de, Ze) : void 0, ot = de ? c$1(de, ((_e2 = Me == null ? void 0 : Me.nativeCurrency) == null ? void 0 : _e2.symbol) || "ETH") : void 0;
  if (y((() => {
    if (!Ae) return;
    let e = setTimeout(K, f$1);
    return () => clearTimeout(e);
  }), [Ae]), Ae) return u$1(S, { children: [/* @__PURE__ */ u$1(t$2, {}), /* @__PURE__ */ u$1(c$2, {}), /* @__PURE__ */ u$1(n$4, { children: [/* @__PURE__ */ u$1(ForwardRef, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ u$1(o$2, { title: "Success!", description: `You’ve successfully added ${He} ${Ge ? Le.symbol : Me.nativeCurrency.symbol} to your ${ae.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ u$1(s$1, {}), /* @__PURE__ */ u$1(u$2, {})] });
  let st = Ge ? `${t$3({ amount: Je, decimals: Le.decimals })}  ${Le.symbol}` : c$1(ze, Me.nativeCurrency.symbol, 3, true), dt = ge[ye];
  return ge.length > 1 && dt ? /* @__PURE__ */ u$1(Z, { displayName: Qe, configuredFundingChain: Me, formattedBalance: st, fundingAmount: He, fundingCurrency: Ge ? Le.symbol : Me.nativeCurrency.symbol, fundingAmountInUsd: tt, options: ge, selectedOption: dt, isPreparing: we, isSubmitting: Se, addressToFund: qe, fundingWalletAddress: (Re == null ? void 0 : Re.address) || "", errorMessage: he, onSubmit: () => {
    var _a2;
    if (((_a2 = ie.funding) == null ? void 0 : _a2.amount) === He) {
      let [e, ...t2] = dt.allTxSteps ?? [dt.bridgeTx];
      if (!e) return;
      return Ee(true), Ie(t2.map(((e2) => ({ ...e2, chain: dt.chain })))), void et({ to: e.to, data: e.data, value: e.value, chain: dt.chain });
    }
    (async function() {
      if (Re && dt) try {
        let e = await l$1({ isTestnet: !!Me.testnet, input: o({ appId: Z$1, amount: De.toString(), user: Re.address, recipient: qe, destinationChainId: Me.id, destinationCurrency: Ue, originChainId: dt.chain.id }) }), [t2, ...r] = f(e);
        if (!t2) throw Error("Invalid transaction request");
        Ee(true), Ie(r.map(((e2) => ({ ...e2, chain: dt.chain })))), et({ data: t2.data, to: t2.to, value: t2.value, chain: dt.chain });
      } catch (e) {
        console.error(e), pe(new s("Unable to fetch quotes for bridging", e, i.INSUFFICIENT_BALANCE));
      }
    })().catch(console.error);
  }, onSelect: (e) => {
    e !== ye && (fe(null), Ce(e));
  }, onAmountChange: $e }) : oe && de && Re && (ie == null ? void 0 : ie.funding) ? /* @__PURE__ */ u$1(I, { walletClientType: (Re == null ? void 0 : Re.walletClientType) || "unknown", displayName: Qe, addressToFund: qe, isBridging: be, isErc20Flow: Ge, totalPriceInUsd: it, totalPriceInNativeCurrency: at, gasPriceInUsd: nt, gasPriceInNativeCurrency: ot, chainId: Me.id, chainName: Me.name }) : /* @__PURE__ */ u$1(S, { children: [/* @__PURE__ */ u$1(t$2, {}), /* @__PURE__ */ u$1(t$4, {}), /* @__PURE__ */ u$1("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ u$1(u$2, {})] });
} };
export {
  X as AwaitingExternalEthereumTransferScreen,
  X as default
};
