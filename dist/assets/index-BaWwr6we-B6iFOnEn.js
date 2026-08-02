import { dq as g, dr as l, dv as k, dl as le$1, df as d, dk as u, f6 as S, di as T, dh as y, y as createPublicClient, z as http, hI as s$1, de as q, hu as l$1, dG as S$1, dD as A, ca as formatEther, eJ as g$1, hJ as N, hK as n, hv as Pi, gd as k$1, bR as decodeFunctionData, bO as decodeAbiParameters, d2 as toHex, du as gt } from "./index-Cw7cGahV.js";
import { d as d$1 } from "./Address--RvzbtOt-m8U8kCUS.js";
import { c } from "./useGetTokenPrice-_x6xp2Po-CptJXGGn.js";
import { s } from "./useWalletBalance-D47dI-xh-Dp4-PRli.js";
import { a } from "./getErc20TokenInfo-DdZupEXp-lW_lY6fl.js";
import { t } from "./formatErc20TokenAmount-BuPk9xcy-DA50wSFk.js";
import { c as c$1, o, l as l$2 } from "./ethers-DFE0Hz-t-CVcjYk0m.js";
import { ErrorScreenView as f } from "./ErrorScreen-DkigBJc0-gTmv_8ut.js";
import { T as T$1, u as u$1, m } from "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import { a as a$1 } from "./JsonTree-aPaJmPx7--8Na4Iy0.js";
import { o as oe$1, G } from "./TransactionErrorView-CS96Nd-U-DxvXdo7A.js";
import { s as s$2 } from "./Layouts-BlFm53ED-sn3bL9j4.js";
import { n as n$1 } from "./ScreenHeader-CHmc4-Lu-AkOZquqG.js";
import { $ } from "./TransactionDetails-cezbnGxz-B0t4vC_a.js";
import { t as t$1 } from "./transfer-6YztDh-t-BvdOhwuP.js";
import { i } from "./formatters-BV0McdBE.js";
import "./check-pJYqNiWi.js";
import "./createLucideIcon-vpjfwHTJ.js";
import "./copy-Dc_XQleO.js";
import "./useGetSolPrice-x7gfUIHJ-Cwf4hWsa.js";
import "./reservoir-B7XIq5qj-DE3jLfCP.js";
import "./safe-url-D7SRPu33-BDTGvdDK.js";
import "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
import "./triangle-alert-a7hRzZKA.js";
import "./lock-CjS6tMf_.js";
import "./Value-tcJV9e0L-B2MkJpNo.js";
import "./LoadingSkeleton-U6-3yFwI-BXCg8yiC.js";
import "./ErrorMessage-D8VaAP5m-ClsdzmKI.js";
import "./LabelXs-oqZNqbm_-BQGqCeZm.js";
import "./Subtitle-CV-2yKE4-DYO6m2P4.js";
import "./Title-BnzYV3Is-C0li3V44.js";
import "./WalletInfoCard-pBDMfJDY-B0_gkbLl.js";
import "./shared-FM0rljBt-rCzEWQL2.js";
import "./Checkbox-BhNoOKjX-CY55Hz-u.js";
import "./ErrorBanner-CQERa7bL-Bgxt1UmM.js";
import "./ExclamationCircleIcon-bAP_o2Bv.js";
import "./WarningBanner-D5LqDt95-DaNg9h3u.js";
import "./ExclamationTriangleIcon-YfFR3qty.js";
import "./ChevronDownIcon-RazvJHs6.js";
import "./WalletLink-BD2FWKMu-S7_8l0KX.js";
import "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
import "./transaction-CnfuREWo-41oAee1p.js";
let z = [{ constant: true, inputs: [{ name: "_owner", type: "address" }], name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }], J = gt.div`
  display: flex;
  flex-direction: column;
  min-height: 72px;
`;
var Q = ({ onBack: n2, details: a2 }) => /* @__PURE__ */ u(J, { children: [/* @__PURE__ */ u(T$1, { backFn: n2 }), /* @__PURE__ */ u(a$1, { data: a2 }), /* @__PURE__ */ u(u$1, {})] });
let X = ({ gasUsed: e, effectiveGasPrice: t2 }) => {
  if (e && t2) try {
    return toHex(e * t2);
  } catch (e2) {
    return;
  }
};
const Y = ({ txn: a2, receipt: s2, transactionInfo: i2, onClose: o2, tokenPrice: r, tokenSymbol: p, receiptHeader: l2, receiptDescription: u$2 }) => /* @__PURE__ */ u(S$1, { children: [/* @__PURE__ */ u(T$1, { onClose: o2 }), /* @__PURE__ */ u(n$1, { title: l2 ?? "Transaction complete!", description: u$2 ?? "You're all set." }), /* @__PURE__ */ u($, { tokenPrice: r, from: s2.from, to: s2.to, gas: X(s2), txn: a2, transactionInfo: i2, tokenSymbol: p }), /* @__PURE__ */ u(k$1, {}), /* @__PURE__ */ u(K, { loading: false, onClick: o2, children: "All Done" }), /* @__PURE__ */ u(s$2, {}), /* @__PURE__ */ u(u$1, {})] });
let K = gt(m)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;
const Z = [{ constant: false, inputs: [{ name: "_salt", type: "bytes32" }, { name: "_initializer", type: "bytes" }], name: "deployAccount", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }], ee = [{ name: "from", type: "address" }, { name: "param2", type: "address" }, { name: "param3", type: "bytes" }, { name: "param4", type: "tuple", components: [] }, { type: "tuple", components: [{ name: "param5", type: "address" }, { name: "param6", type: "uint256" }, { name: "param7", type: "uint256" }, { name: "encodedInitData", type: "bytes" }] }], te = [{ constant: false, inputs: [{ name: "spender", type: "address" }, { name: "value", type: "uint256" }], name: "approve", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }], ne = [{ inputs: [{ name: "to", type: "address" }, { name: "amount", type: "uint256" }, { name: "memo", type: "bytes32" }], name: "transferWithMemo", outputs: [{ name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }], ae = [{ inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "mint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "mint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "mint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "mint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "quantity", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "quantity", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" }, { internalType: "uint256[]", name: "quantities", type: "uint256[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mintBatch", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" }, { internalType: "uint256[]", name: "quantities", type: "uint256[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "mintBatch", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }], name: "mint", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "string", name: "uri", type: "string" }], name: "safeMint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "batchMint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "batchMint", outputs: [], stateMutability: "payable", type: "function" }], se = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }], ie = [{ constant: false, inputs: [{ name: "_operator", type: "address" }, { name: "_approved", type: "bool" }], name: "setApprovalForAll", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }], oe = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }], name: "transferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }], re = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenIds", type: "uint256[]" }, { name: "_amounts", type: "uint256[]" }, { name: "_data", type: "bytes" }], name: "safeBatchTransferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }], pe = [{ constant: false, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }, { name: "_amount", type: "uint256" }, { name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [{ name: "", type: "bool" }], payable: false, stateMutability: "nonpayable", type: "function" }], le = (e, t2) => {
  let n2 = ue(te, e);
  if (n2) return { action: "approve", functionName: "approve", isErc20Ish: true, isNFTIsh: false, spender: n2.args[0], amount: n2.args[1] };
  let a2 = ue(t$1, e);
  if (a2) return { action: "transfer", functionName: "transfer", isErc20Ish: true, isNFTIsh: false, transferTo: a2.args[0], amount: a2.args[1] };
  let s2 = ue(ne, e);
  if (s2) return { action: "transfer", functionName: "transferWithMemo", isErc20Ish: true, isNFTIsh: false, transferTo: s2.args[0], amount: s2.args[1] };
  if (!t2) return { action: "transaction", functionName: "", isErc20Ish: false, isNFTIsh: false };
  let i2 = ue(Z, e);
  if (i2 && "string" == typeof i2.args[1]) {
    let e2 = me(i2.args[1]);
    if (e2 && e2[4].encodedInitData) return le(e2[4].encodedInitData, t2);
  }
  let o2 = ue(ie, e);
  if (o2) return { action: "approve", functionName: "setApprovalForAll", isNFTIsh: true, isErc20Ish: false, operator: o2.args[0], approved: o2.args[1] };
  let r = ue(oe, e);
  if (r) return { action: "transfer", functionName: "transferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: r.args[0], transferTo: r.args[1], tokenId: r.args[2] };
  let p = ue(se, e);
  if (p) return { action: "transfer", functionName: "safeTransferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: p.args[0], transferTo: p.args[1], tokenId: p.args[2] };
  let l2 = ue(pe, e);
  if (l2) return { action: "transfer", functionName: "safeTransferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: l2.args[0], transferTo: l2.args[1], tokenId: l2.args[2], amount: l2.args[3] };
  let u2 = ue(re, e);
  if (u2) return { action: "batch transfer", functionName: "safeBatchTransferFrom", isNFTIsh: true, isErc20Ish: false, transferFrom: u2.args[0], transferTo: u2.args[1], tokenIds: u2.args[2], amounts: u2.args[3] };
  let m2 = ue(ae, e);
  return m2 ? { action: "mint", functionName: m2.functionName, isNFTIsh: true, isErc20Ish: false, args: m2.args } : { action: "transaction", isErc20Ish: false, isNFTIsh: false };
};
let ue = (e, t2) => {
  try {
    let n2 = decodeFunctionData({ abi: e, data: t2 });
    return { functionName: n2.functionName, args: n2.args || [] };
  } catch (e2) {
    return null;
  }
}, me = (e) => {
  try {
    if ("string" == typeof e) return decodeAbiParameters(ee, `0x${e.slice(10)}`);
  } catch (e2) {
    return null;
  }
}, ce = (e) => `${parseFloat(e).toFixed(2)}`;
function de(e, t2) {
  var _a, _b, _c, _d, _e;
  let n2 = [], a2 = /* @__PURE__ */ new Map();
  if (e) {
    for (let t3 of e) if (t3.in[0]) {
      let e2;
      e2 = "ERC721" === t3.asset.type || "approve_for_all" === t3.in[0].value ? { id: `nft:${t3.asset.name}`, nftName: t3.asset.name, nftCount: t3.in.length } : { id: `token:${t3.asset.type}:${t3.asset.symbol}:${t3.asset.name}`, iconUrl: t3.asset.logo_url, value: t3.in[0].value, symbol: t3.asset.symbol, usdValue: t3.in[0].usd_price ? ce(t3.in[0].usd_price) : void 0, decimals: t3.asset.decimals }, n2.push(e2);
    } else if ((_a = t3.out[0]) == null ? void 0 : _a.value) {
      let e2;
      e2 = "ERC721" === t3.asset.type || "approve_for_all" === t3.out[0].value ? { id: `nft:${t3.asset.name}`, nftName: t3.asset.name } : { id: `token:${t3.asset.type}:${t3.asset.symbol}:${t3.asset.name}`, iconUrl: t3.asset.logo_url, value: t3.out[0].value, symbol: t3.asset.symbol, usdValue: t3.out[0].usd_price ? ce(t3.out[0].usd_price) : void 0, decimals: t3.asset.decimals }, a2.has(e2.id) || a2.set(e2.id, e2);
    }
  }
  for (let e2 of t2) for (let t3 of Object.keys(e2.spenders)) {
    let n3;
    n3 = "ERC721" === e2.asset.type || "approve_for_all" === ((_b = e2.spenders[t3]) == null ? void 0 : _b.value) ? { id: `nft:${e2.asset.name}`, nftName: e2.asset.name } : { id: `token:${e2.asset.type}:${e2.asset.symbol}:${e2.asset.name}`, iconUrl: e2.asset.logo_url, value: (_c = e2.spenders[t3]) == null ? void 0 : _c.value, symbol: e2.asset.symbol, usdValue: ((_d = e2.spenders[t3]) == null ? void 0 : _d.usd_price) ? ce((_e = e2.spenders[t3]) == null ? void 0 : _e.usd_price) : void 0, decimals: e2.asset.decimals }, a2.has(n3.id) || a2.set(n3.id, n3);
  }
  return { assetsIn: n2, assetsOut: Array.from(a2.values()) };
}
const ye = (e, t2, n2, s2) => {
  let [i2, r] = d(null), { walletProxy: p } = l();
  return y((() => {
    i2 && r(null), (async () => {
      if (!p || !t2) return null;
      let a2 = [], i3 = true, o2 = await Pi(e, n2, t2, s2).catch(((t3) => (t3.message && t3.message.includes("Insufficient balance for transaction") || t3.message && t3.message.includes("Insufficient funds for gas * price + value") || t3.details && t3.details.includes("insufficient funds") || t3.details && t3.details.includes("gas required exceeds allowance") ? i3 = false : a2.push(t3), e)));
      return { tx: o2, totalGasEstimate: o2.gas, hasFunds: i3, errors: a2 };
    })().then(r);
  }), [e]), i2;
};
let fe = new S(new N("There was an issue preparing your transaction", n.E32603_DEFAULT_INTERNAL_ERROR.eipCode)), be = (e, t2) => (e == null ? void 0 : e.sendTransaction) ? "transactionRequest" in e.sendTransaction ? e.sendTransaction.transactionRequest : e.sendTransaction.transactionRequests[t2] : void 0;
const Te = { component: () => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  let { data: l$3, onUserCloseViaDialogOrKeybindRef: u$12, setModalData: m2, navigate: O } = g(), { client: R, rpcConfig: D, chains: P, closePrivyModal: $2, walletProxy: L, showFiatPrices: W } = l(), { user: U } = k(), V = le$1(), [G$1, H] = d(0), [J2, X2] = d(0), [K2, Z2] = d(be(l$3, G$1)), [ee2, te2] = d(null), [ne2, ae2] = d(), [se2, ie2] = d(false), [oe2, re2] = d(null), [pe2, ue2] = d(null), [me2, ce2] = d(null), [Te2, he] = d(void 0), [ge, ve] = d(void 0), [Ie, ke] = d(false), [je, Ee] = d(false), [Me, Ce] = d([]), [we, xe] = d([]), [Fe, _e] = d("uninitiated"), [Ne, Ae] = d(void 0);
  if (!K2 || !(l$3 == null ? void 0 : l$3.sendTransaction) || !(l$3 == null ? void 0 : l$3.sendTransaction)) return u(f, { error: Error("Invalid transaction request"), allowlistConfig: V.allowlistConfig, onRetry: () => {
    var _a2;
    (_a2 = l$3 == null ? void 0 : l$3.sendTransaction) == null ? void 0 : _a2.onFailure(fe), $2({ shouldCallAuthOnSuccess: false });
  } });
  let { transactingWalletAddress: Se } = l$3.sendTransaction, Oe = T((() => P.find(((e) => Number(e.id) === Number(K2.chainId)))), [K2.chainId]), Re = (Oe == null ? void 0 : Oe.nativeCurrency.symbol) ?? "ETH", De = T((() => le(K2.data, !!V.embeddedWallets.extendedCalldataDecoding)), [K2.data]), { action: Pe, isErc20Ish: $e, isNFTIsh: Be, functionName: qe } = De, { toAddress: Le, tokenAddress: We } = T((() => ({ toAddress: De.isErc20Ish ? De.transferTo : K2.to ?? void 0, tokenAddress: De.isErc20Ish ? K2.to : void 0 })), [De]);
  y((() => {
    K2.to && Oe && $e && a({ address: K2.to, chain: Oe, rpcConfig: V.rpcConfig, privyAppId: V.id }).then(te2).catch(console.error);
  }), [K2.to, Oe]);
  let { tokenPrice: Ue, isTokenPriceLoading: Ve } = c(K2.chainId), { balance: Ge } = s({ rpcConfig: V.rpcConfig, appId: V.id, address: Se, chain: Oe }), He = (function({ rpcConfig: e, appId: t2, address: n2, chain: l$12, tokenInfo: u2 }) {
    let { chains: m3 } = l(), [c2, f2] = d(null), [b, T$12] = d(false), h = T((() => {
      let n3 = l$12 || m3[0];
      if (n3) return createPublicClient({ chain: l$12, transport: http(s$1(n3, e, t2)) });
    }), [l$12, e, t2]), g2 = q((async () => {
      if (n2 && h && u2.address) try {
        return T$12(true), await h.readContract({ address: u2.address, abi: z, functionName: "balanceOf", args: [n2] });
      } catch (e2) {
        console.error(e2);
      } finally {
        T$12(false);
      }
    }), [h, n2, u2 == null ? void 0 : u2.address, l$12]);
    return y((() => {
      g2().then(((e2) => null != e2 && f2(e2)));
    }), [g2]), { balance: c2, isLoading: b && null == c2, formattedBalance: i({ amount: c2 ?? BigInt(0), decimals: u2.decimals }) };
  })({ rpcConfig: V.rpcConfig, appId: V.id, address: Se, tokenInfo: { address: We || "", decimals: (ee2 == null ? void 0 : ee2.decimals) ?? 18 }, chain: Oe }), ze = T((() => l$1(Number(K2.chainId), P, D, { appId: V.id })), [K2.chainId, D]), Je = ye(K2, Se, ze, (_a = l$3 == null ? void 0 : l$3.sendTransaction) == null ? void 0 : _a.prepareTransactionRequest);
  y((() => {
    Z2(be(l$3, G$1));
  }), [G$1]), y((() => {
    var _a2;
    ((_a2 = l$3.sendTransaction) == null ? void 0 : _a2.getIsSponsored) ? l$3.sendTransaction.getIsSponsored().then(ae2).catch(console.error) : ae2(false);
  }), [l$3.sendTransaction.getIsSponsored]);
  let Qe = () => {
    var _a2, _b2, _c2;
    if (!se2) return oe2 ? (_a2 = l$3 == null ? void 0 : l$3.sendTransaction) == null ? void 0 : _a2.onSuccess({ hash: oe2 }) : me2 || (Je == null ? void 0 : Je.errors[0]) ? (_b2 = l$3 == null ? void 0 : l$3.sendTransaction) == null ? void 0 : _b2.onFailure(me2 ?? (Je == null ? void 0 : Je.errors[0]) ?? fe) : (_c2 = l$3 == null ? void 0 : l$3.sendTransaction) == null ? void 0 : _c2.onFailure(new S(new N("The user rejected the request", n.E4001_USER_REJECTED_REQUEST.eipCode))), $2({ shouldCallAuthOnSuccess: false });
  };
  u$12.current = Qe;
  let Xe = !!(l$3.funding && l$3.funding.supportedOptions.length > 0), Ye = c$1(BigInt((Je == null ? void 0 : Je.totalGasEstimate) ?? 0n), Re), Ke = W && Ue ? o(BigInt((Je == null ? void 0 : Je.totalGasEstimate) ?? 0n), Ue) : void 0, Ze = c$1(Ge ?? 0n, Re, void 0, true), et = W && Ue ? o(Ge ?? 0n, Ue) : void 0, tt = ee2 && !He.isLoading && $e && "approve" !== Pe ? `${He.formattedBalance} ${ee2.symbol}` : void 0, nt = (_d = (_c = (_b = l$3.sendTransaction) == null ? void 0 : _b.uiOptions) == null ? void 0 : _c.transactionInfo) == null ? void 0 : _d.title;
  nt || (nt = "approve" === Pe ? $e ? "Confirm address" : "Confirm action" : `Approve ${Pe}`);
  let at = T((() => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
    if ((_b2 = (_a2 = l$3.sendTransaction) == null ? void 0 : _a2.uiOptions) == null ? void 0 : _b2.description) return (_d2 = (_c2 = l$3.sendTransaction) == null ? void 0 : _c2.uiOptions) == null ? void 0 : _d2.description;
    if ("approve" === Pe && "setApprovalForAll" === qe && De.approved) {
      let a2 = /* @__PURE__ */ u(d$1, { address: De.operator || "", url: (_f2 = (_e3 = Oe == null ? void 0 : Oe.blockExplorers) == null ? void 0 : _e3.default) == null ? void 0 : _f2.url });
      return u(S$1, { children: [V.name, " would like your permission for ", a2, " to transfer tokens on your behalf."] });
    }
    if ("approve" === Pe && "setApprovalForAll" === qe && !De.approved) {
      let a2 = /* @__PURE__ */ u(d$1, { address: De.operator || "", url: (_h2 = (_g2 = Oe == null ? void 0 : Oe.blockExplorers) == null ? void 0 : _g2.default) == null ? void 0 : _h2.url });
      return u(S$1, { children: [V.name, " would like your permission to revoke permissions of ", a2, " from transferring tokens on your behalf."] });
    }
    return $e && "approve" === Pe || $e && "approve" === Pe ? `${V.name} would like your permission for ${A(De.spender)} to spend tokens on your behalf.` : `${V.name} wants your permission to approve the following transaction.`;
  }), [V.name, $e, De, (_e2 = l$3.sendTransaction) == null ? void 0 : _e2.uiOptions.description, qe]), st = ((_i = (_h = (_g = (_f = l$3.sendTransaction) == null ? void 0 : _f.uiOptions) == null ? void 0 : _g.transactionInfo) == null ? void 0 : _h.contractInfo) == null ? void 0 : _i.imgUrl) ? /* @__PURE__ */ u("img", { src: l$3.sendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl, alt: l$3.sendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText }) : null, it = !(!Je || Je.errors[0] || Je.hasFunds || false !== ne2), ot = it && Xe, rt = ot ? "Add funds" : ((_k = (_j = l$3.sendTransaction) == null ? void 0 : _j.uiOptions) == null ? void 0 : _k.buttonText) || (G$1 < J2 ? "Continue" : "Approve"), pt = (e) => {
    if (!e) throw Error("Transaction scan failed");
    if ("Success" === e.validation.status && ("Benign" === e.validation.result_type ? ve("safe") : "Warning" === e.validation.result_type ? ve("warn") : "Malicious" === e.validation.result_type && (ve("error"), Ee(true))), "Success" !== e.simulation.status) throw Error("Simulation failed");
    {
      he(e.simulation.params);
      let { assetsIn: t2, assetsOut: n2 } = de(e.simulation.assets_diffs, e.simulation.exposures);
      if (0 === n2.length && 0 === t2.length) throw Error("No tokens found");
      Ce(n2), xe(t2);
    }
  };
  if (y((() => {
    var _a2;
    ((_a2 = l$3.sendTransaction) == null ? void 0 : _a2.scanTransaction) && V.embeddedWallets.transactionScanning.enabled && "uninitiated" === Fe && (_e("in progress"), l$3.sendTransaction.scanTransaction().then(((e) => {
      pt(e), _e("completed");
    })).catch((() => _e("failed"))));
  }), [!!((_l = l$3.sendTransaction) == null ? void 0 : _l.scanTransaction)]), y((() => {
    var _a2;
    ((_a2 = l$3.sendTransaction) == null ? void 0 : _a2.scanTransaction) && "failed" !== Fe || ((e, t$12, n2) => {
      if (X2(((e2) => (e2 == null ? void 0 : e2.sendTransaction) ? "transactionRequest" in e2.sendTransaction ? 0 : e2.sendTransaction.transactionRequests.length - 1 : 0)(l$3)), t$12.isErc20Ish && t$12.amount && n2) {
        let e2 = t({ amount: t$12.amount, decimals: n2.decimals });
        Ae(e2), Ce([{ value: e2, symbol: n2 == null ? void 0 : n2.symbol, decimals: n2 == null ? void 0 : n2.decimals }]);
      } else if (e.value) {
        let t2 = BigInt(e.value), n3 = Ue ? o(t2, Ue) : void 0;
        Ce(W && n3 ? [{ value: n3 }] : [{ value: l$2(t2), symbol: Re, decimals: 18, usdValue: n3 }]);
      } else Ce(W ? [{ value: "$0" }] : [{ value: "0", symbol: Re, decimals: 18 }]);
    })((Je == null ? void 0 : Je.tx) ?? K2, De, ee2);
  }), [K2, Je == null ? void 0 : Je.tx, De, ee2, Fe]), pe2) return u(Y, { txn: (Je == null ? void 0 : Je.tx) ?? K2, onClose: Qe, receipt: pe2, transactionInfo: (_m = l$3.sendTransaction) == null ? void 0 : _m.uiOptions.transactionInfo, tokenPrice: Ue, tokenSymbol: Re, receiptHeader: (_n = l$3.sendTransaction) == null ? void 0 : _n.uiOptions.successHeader, receiptDescription: (_o = l$3.sendTransaction) == null ? void 0 : _o.uiOptions.successDescription });
  if (me2) return u(oe$1, { transactionError: me2, transactionHash: oe2 ?? void 0, chainType: "ethereum", chainId: (Je == null ? void 0 : Je.tx.chainId) ?? K2.chainId, onClose: Qe, onRetry: ({ resetNonce: e }) => {
    ce2(null);
    let t2 = { ...(Je == null ? void 0 : Je.tx) ?? K2 };
    e && (t2.nonce = void 0), Z2(t2);
  } });
  let lt = 0 !== J2 && "number" == typeof G$1 && 0 !== G$1 ? () => {
    H(G$1 - 1);
  } : void 0;
  return Ie && Te2 ? /* @__PURE__ */ u(Q, { details: Te2, onBack: () => ke(false) }) : /* @__PURE__ */ u(G, { transactionIndex: G$1, onBack: lt, maxIndex: J2, disabled: it && !Xe || je, isSubmitting: se2, submitError: me2, isPreparing: !Je, isTokenPriceLoading: Ve, isTokenContractInfoLoading: !Be && !ee2, prepareError: Je == null ? void 0 : Je.errors[0], symbol: ee2 == null ? void 0 : ee2.symbol, chain: Oe, img: st, title: nt, subtitle: at, txValue: K2.value, fee: Ke ?? Ye, isSponsored: ne2, from: Se ?? "", to: Le, tokenAddress: We ?? void 0, network: ((_p = V.chains.find(((e) => e.id === K2.chainId))) == null ? void 0 : _p.name) ?? "", transactionDetails: { ...De, formattedAmount: Ne }, cta: rt, missingFunds: it, action: Pe, balance: tt ?? et ?? Ze, onClose: Qe, onClick: ot ? async () => {
    var _a2;
    if (!Se) return;
    if (!Xe) throw Error("Funding wallet is not enabled");
    let e = "FundingMethodSelectionScreen";
    m2({ ...l$3, funding: { ...l$3.funding, methodScreen: e, chainType: "ethereum", amount: formatEther(BigInt((Je == null ? void 0 : Je.tx.value) ?? 0) + BigInt(((_a2 = Je == null ? void 0 : Je.totalGasEstimate) == null ? void 0 : _a2.toString()) ?? 0)), chain: Oe }, solanaFundingData: l$3 == null ? void 0 : l$3.solanaFundingData }), O(e);
  } : async () => {
    var _a2, _b2;
    if (G$1 < J2) H(G$1 + 1);
    else {
      ie2(true);
      try {
        let e = await R.getAccessToken();
        if (se2 || !e || !L || !U) return;
        let t2 = await l$3.sendTransaction.onConfirm({ transactionRequest: (Je == null ? void 0 : Je.tx) ?? K2 });
        if (re2(t2), (_a2 = l$3.sendTransaction) == null ? void 0 : _a2.signOnly) return await new Promise(((e2) => setTimeout(e2, g$1))), (_b2 = l$3 == null ? void 0 : l$3.sendTransaction) == null ? void 0 : _b2.onSuccess({ hash: t2 }), $2({ shouldCallAuthOnSuccess: false });
        let n2 = await ze.waitForTransactionReceipt({ hash: t2 });
        if ("reverted" === n2.status) throw Error("Transaction failed");
        ue2(n2);
      } catch (e) {
        console.warn({ transaction: (Je == null ? void 0 : Je.tx) ?? K2, error: e }), ce2(e);
      } finally {
        ie2(false);
      }
    }
  }, validation: ge, hasScanDetails: !!Te2, setIsScanDetailsOpen: ke, preventMaliciousTransaction: je, setPreventMaliciousTransaction: Ee, tokensSent: Me, tokensReceived: we, isScanning: "in progress" === Fe, isCancellable: ((_r = (_q = l$3.sendTransaction) == null ? void 0 : _q.uiOptions) == null ? void 0 : _r.isCancellable) ?? false, functionName: qe });
} };
export {
  Te as SendTransactionScreen,
  Te as default
};
