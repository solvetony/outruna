import { dd as D, dm as k, dr as l, df as d, dk as u, dG as S, dl as le$1, gd as k$1, hL as I, du as gt, q as isAddress } from "./index-BDOBKk5h.js";
import { T, g, m, u as u$1, V as V$1 } from "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import { t, s, e as e$1, n, a as t$1 } from "./Value-tcJV9e0L-CSPaXLry.js";
import { e as e$2 } from "./ErrorMessage-D8VaAP5m-Dl-cYhnb.js";
import { r as r$1 } from "./LabelXs-oqZNqbm_-DCbVuFgS.js";
import { r } from "./Subtitle-CV-2yKE4-BOIv64VM.js";
import { e } from "./Title-BnzYV3Is-CKGQ4bhs.js";
import { d as d$1 } from "./Address--RvzbtOt-DYV2Nw9s.js";
import { j } from "./WalletInfoCard-pBDMfJDY-CMisRrym.js";
import { n as n$1 } from "./LoadingSkeleton-U6-3yFwI-CDkrgo6T.js";
import { d as d$2 } from "./shared-FM0rljBt-ZsFHMSZj.js";
import { o, F as ForwardRef$5 } from "./Checkbox-BhNoOKjX-DyjDEwox.js";
import { t as t$3 } from "./ErrorBanner-CQERa7bL-DnRTOmCK.js";
import { t as t$2 } from "./WarningBanner-D5LqDt95-D57f0GNK.js";
import { F as ForwardRef$4 } from "./ExclamationCircleIcon-B6P_kkYu.js";
import { F as ForwardRef$3 } from "./ChevronDownIcon-BqsgRWtO.js";
import { i } from "./formatters-Cj6oAVGc.js";
function ArrowRightIcon({
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
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const ForwardRef$2 = /* @__PURE__ */ D(ArrowRightIcon);
function BoltIcon({
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
    d: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ D(BoltIcon);
function ClipboardDocumentIcon({
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
    d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
  }));
}
const ForwardRef = /* @__PURE__ */ D(ClipboardDocumentIcon);
const B = gt(e$1)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`;
var W = ({ iconUrl: n2, value: i2, symbol: o2, usdValue: t2, nftName: l2, nftCount: a, decimals: s2, $isLoading: c }) => {
  if (c) return u(z, { $isLoading: c });
  let d2 = i2 && t2 && s2 ? (function(e2, r2, n3) {
    let i3 = parseFloat(e2), o3 = parseFloat(n3);
    if (0 === i3 || 0 === o3 || Number.isNaN(i3) || Number.isNaN(o3)) return e2;
    let t3 = Math.ceil(-Math.log10(0.01 / (o3 / i3))), l3 = Math.pow(10, t3 = Math.max(t3 = Math.min(t3, r2), 1)), a2 = +(Math.floor(i3 * l3) / l3).toFixed(t3).replace(/\.?0+$/, "");
    return Intl.NumberFormat(void 0, { maximumFractionDigits: r2 }).format(a2);
  })(i2, s2, t2) : i2;
  return u("div", { children: [/* @__PURE__ */ u(z, { $isLoading: c, children: [n2 && /* @__PURE__ */ u(V, { src: n2, alt: "Token icon" }), a && a > 1 ? a + "x" : void 0, " ", l2, d2, " ", o2] }), t2 && /* @__PURE__ */ u(R, { $isLoading: c, children: ["$", t2] })] });
};
let z = gt.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${n$1}
`;
const R = gt.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${n$1}
`;
let V = gt.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`;
const U = (i2) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let { chain: o2, transactionDetails: t$12, isTokenContractInfoLoading: l2, symbol: a } = i2, { action: s$1, functionName: c } = t$12;
  return u(d$2, { children: /* @__PURE__ */ u(t, { children: ["transaction" !== s$1 && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Action" }), /* @__PURE__ */ u(n, { children: c })] }), "mint" === c && "args" in t$12 && t$12.args.filter(((e2) => e2)).map(((n$12, i3) => {
    var _a2, _b2;
    return /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: `Param ${i3}` }), /* @__PURE__ */ u(n, { children: "string" == typeof n$12 && isAddress(n$12) ? /* @__PURE__ */ u(d$1, { address: n$12, url: (_b2 = (_a2 = o2 == null ? void 0 : o2.blockExplorers) == null ? void 0 : _a2.default) == null ? void 0 : _b2.url, showCopyIcon: false }) : n$12 == null ? void 0 : n$12.toString() })] }, i3);
  })), "setApprovalForAll" === c && t$12.operator && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Operator" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: t$12.operator, url: (_b = (_a = o2 == null ? void 0 : o2.blockExplorers) == null ? void 0 : _a.default) == null ? void 0 : _b.url, showCopyIcon: false }) })] }), "setApprovalForAll" === c && void 0 !== t$12.approved && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Set approval to" }), /* @__PURE__ */ u(n, { children: t$12.approved ? "true" : "false" })] }), "transfer" === c || "transferWithMemo" === c || "transferFrom" === c || "safeTransferFrom" === c || "approve" === c ? /* @__PURE__ */ u(S, { children: ["formattedAmount" in t$12 && t$12.formattedAmount && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount" }), /* @__PURE__ */ u(n, { $isLoading: l2, children: [t$12.formattedAmount, " ", a] })] }), "tokenId" in t$12 && t$12.tokenId && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token ID" }), /* @__PURE__ */ u(n, { children: t$12.tokenId.toString() })] })] }) : null, "safeBatchTransferFrom" === c && /* @__PURE__ */ u(S, { children: ["amounts" in t$12 && t$12.amounts && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amounts" }), /* @__PURE__ */ u(n, { children: t$12.amounts.join(", ") })] }), "tokenIds" in t$12 && t$12.tokenIds && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token IDs" }), /* @__PURE__ */ u(n, { children: t$12.tokenIds.join(", ") })] })] }), "approve" === c && t$12.spender && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Spender" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: t$12.spender, url: (_d = (_c = o2 == null ? void 0 : o2.blockExplorers) == null ? void 0 : _c.default) == null ? void 0 : _d.url, showCopyIcon: false }) })] }), ("transferFrom" === c || "safeTransferFrom" === c || "safeBatchTransferFrom" === c) && t$12.transferFrom && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Transferring from" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: t$12.transferFrom, url: (_f = (_e = o2 == null ? void 0 : o2.blockExplorers) == null ? void 0 : _e.default) == null ? void 0 : _f.url, showCopyIcon: false }) })] }), ("transferFrom" === c || "safeTransferFrom" === c || "safeBatchTransferFrom" === c) && t$12.transferTo && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Transferring to" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: t$12.transferTo, url: (_h = (_g = o2 == null ? void 0 : o2.blockExplorers) == null ? void 0 : _g.default) == null ? void 0 : _h.url, showCopyIcon: false }) })] })] }) });
}, H = ({ variant: i2, setPreventMaliciousTransaction: o$1, colorScheme: t2 = "light", preventMaliciousTransaction: l2 }) => "warn" === i2 ? /* @__PURE__ */ u(q, { children: /* @__PURE__ */ u(t$2, { theme: t2, children: [/* @__PURE__ */ u("span", { style: { fontWeight: "500" }, children: "Warning: Suspicious transaction" }), /* @__PURE__ */ u("br", {}), "This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk."] }) }) : "error" === i2 ? /* @__PURE__ */ u(S, { children: /* @__PURE__ */ u(q, { children: [/* @__PURE__ */ u(t$3, { theme: t2, children: /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u("strong", { children: "This is a malicious transaction" }), /* @__PURE__ */ u("br", {}), "This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets."] }) }), /* @__PURE__ */ u(J, { children: [/* @__PURE__ */ u(o, { color: "var(--privy-color-error)", checked: !l2, readOnly: true, onClick: () => o$1(!l2) }), /* @__PURE__ */ u("span", { children: "I understand and want to proceed anyways." })] })] }) }) : null;
let q = gt.div`
  margin-top: 1.5rem;
`, J = gt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;
const Q = ({ transactionIndex: e2, maxIndex: r2 }) => "number" != typeof e2 || 0 === r2 ? "" : ` (${e2 + 1} / ${r2 + 1})`, G = ({ img: a, submitError: s$1, prepareError: u$2, onClose: v, action: I2, title: S$1, subtitle: M, to: $, tokenAddress: j2, network: E, missingFunds: O, fee: N, from: D2, cta: F, disabled: L, chain: P, isSubmitting: z2, isPreparing: R2, isTokenPriceLoading: V2, isTokenContractInfoLoading: q2, isSponsored: J2, symbol: G2, balance: K2, onClick: Y2, transactionDetails: ne2, transactionIndex: ie2, maxIndex: oe2, onBack: te2, chainName: le2, validation: ae2, hasScanDetails: se2, setIsScanDetailsOpen: ce2, preventMaliciousTransaction: de2, setPreventMaliciousTransaction: he2, tokensSent: me2, tokensReceived: ue2, isScanning: pe2, isCancellable: ge2, functionName: fe2 }) => {
  var _a, _b, _c, _d, _e, _f;
  let { showTransactionDetails: ye2, setShowTransactionDetails: ke2, hasMoreDetails: xe, isErc20Ish: ve } = ((e2) => {
    let [r2, n2] = d(false), i2 = true, o2 = false;
    return (!e2 || e2.isErc20Ish || "transaction" === e2.action) && (i2 = false), i2 && (o2 = Object.entries(e2 || {}).some((([e3, r3]) => r3 && !["action", "isErc20Ish", "isNFTIsh"].includes(e3)))), { showTransactionDetails: r2, setShowTransactionDetails: n2, hasMoreDetails: i2 && o2, isErc20Ish: e2 == null ? void 0 : e2.isErc20Ish };
  })(ne2), be = le$1(), we = ve && q2 || R2 || V2 || pe2;
  return u(S, { children: [/* @__PURE__ */ u(T, { onClose: v, backFn: te2 }), a && /* @__PURE__ */ u(Z, { children: a }), /* @__PURE__ */ u(e, { style: { marginTop: a ? "1.5rem" : 0 }, children: [S$1, /* @__PURE__ */ u(Q, { maxIndex: oe2, transactionIndex: ie2 })] }), /* @__PURE__ */ u(r, { children: M }), /* @__PURE__ */ u(t, { style: { marginTop: "2rem" }, children: [(!!me2[0] || we) && /* @__PURE__ */ u(s, { children: [ue2.length > 0 ? /* @__PURE__ */ u(e$1, { children: "Send" }) : /* @__PURE__ */ u(e$1, { children: "approve" === I2 ? "Approval amount" : "Amount" }), /* @__PURE__ */ u("div", { className: "flex flex-col", children: me2.map(((r2, n2) => /* @__PURE__ */ u(W, { iconUrl: r2.iconUrl, value: "setApprovalForAll" === fe2 ? "All" : r2.value, usdValue: r2.usdValue, symbol: r2.symbol, nftName: r2.nftName, nftCount: r2.nftCount, decimals: r2.decimals }, n2))) })] }), ue2.length > 0 && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Receive" }), /* @__PURE__ */ u("div", { className: "flex flex-col", children: ue2.map(((r2, n2) => /* @__PURE__ */ u(W, { iconUrl: r2.iconUrl, value: r2.value, usdValue: r2.usdValue, symbol: r2.symbol, nftName: r2.nftName, nftCount: r2.nftCount, decimals: r2.decimals }, n2))) })] }), ne2 && "spender" in ne2 && (ne2 == null ? void 0 : ne2.spender) ? /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Spender" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: ne2.spender, url: (_b = (_a = P == null ? void 0 : P.blockExplorers) == null ? void 0 : _a.default) == null ? void 0 : _b.url }) })] }) : null, $ && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "To" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: $, url: (_d = (_c = P == null ? void 0 : P.blockExplorers) == null ? void 0 : _c.default) == null ? void 0 : _d.url, showCopyIcon: true }) })] }), j2 && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token address" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: j2, url: (_f = (_e = P == null ? void 0 : P.blockExplorers) == null ? void 0 : _e.default) == null ? void 0 : _f.url }) })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Network" }), /* @__PURE__ */ u(n, { children: E })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Estimated fee" }), /* @__PURE__ */ u(n, { $isLoading: R2 || V2 || void 0 === J2, children: J2 ? /* @__PURE__ */ u(ee, { children: [/* @__PURE__ */ u(re, { children: ["Sponsored by ", be.name] }), /* @__PURE__ */ u(ForwardRef$1, { height: 16, width: 16 })] }) : N })] }), xe && !se2 && /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(s, { className: "cursor-pointer", onClick: () => ke2(!ye2), children: /* @__PURE__ */ u(t$1, { className: "flex items-center gap-x-1", children: ["Details", " ", /* @__PURE__ */ u(ForwardRef$3, { style: { width: "0.75rem", marginLeft: "0.25rem", transform: ye2 ? "rotate(180deg)" : void 0 } })] }) }), ye2 && ne2 && /* @__PURE__ */ u(U, { action: I2, chain: P, transactionDetails: ne2, isTokenContractInfoLoading: q2, symbol: G2 })] }), se2 && /* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(B, { onClick: () => ce2(true), children: [/* @__PURE__ */ u("span", { className: "text-color-primary", children: "Details" }), /* @__PURE__ */ u(ForwardRef$2, { height: "14px", width: "14px", strokeWidth: "2" })] }) })] }), /* @__PURE__ */ u(k$1, {}), s$1 ? /* @__PURE__ */ u(e$2, { style: { marginTop: "2rem" }, children: s$1.message }) : u$2 && 0 === ie2 ? /* @__PURE__ */ u(e$2, { style: { marginTop: "2rem" }, children: u$2.shortMessage ?? _ }) : null, /* @__PURE__ */ u(H, { variant: ae2, preventMaliciousTransaction: de2, setPreventMaliciousTransaction: he2 }), /* @__PURE__ */ u(X, { $useSmallMargins: !(!u$2 && !s$1 && "warn" !== ae2 && "error" !== ae2), address: D2, balance: K2, errMsg: R2 || u$2 || s$1 || !O ? void 0 : `Add funds on ${(P == null ? void 0 : P.name) ?? le2} to complete transaction.` }), /* @__PURE__ */ u(m, { style: { marginTop: "1rem" }, loading: z2, disabled: L || R2, onClick: Y2, children: F }), ge2 && /* @__PURE__ */ u(V$1, { style: { marginTop: "1rem" }, onClick: v, isSubmitting: false, children: "Not now" }), /* @__PURE__ */ u(u$1, {})] });
}, K = ({ img: o2, title: a, subtitle: h, cta: u$2, instructions: f, network: I2, blockExplorerUrl: S$1, isMissingFunds: M, submitError: $, parseError: j2, total: E, swap: O, transactingWalletAddress: N, fee: D2, balance: F, disabled: L, isSubmitting: P, isPreparing: W2, isTokenPriceLoading: z2, onClick: R2, onClose: V2, onBack: U2, isSponsored: H2 }) => {
  let q2 = W2 || z2, [J2, Q2] = d(false), G2 = le$1();
  return u(S, { children: [/* @__PURE__ */ u(T, { onClose: V2, backFn: U2 }), o2 && /* @__PURE__ */ u(Z, { children: o2 }), /* @__PURE__ */ u(e, { style: { marginTop: o2 ? "1.5rem" : 0 }, children: a }), /* @__PURE__ */ u(r, { children: h }), /* @__PURE__ */ u(t, { style: { marginTop: "2rem", marginBottom: ".5rem" }, children: [(E || q2) && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount" }), /* @__PURE__ */ u(n, { $isLoading: q2, children: E })] }), O && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Swap" }), /* @__PURE__ */ u(n, { children: O })] }), I2 && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Network" }), /* @__PURE__ */ u(n, { children: I2 })] }), (D2 || q2 || void 0 !== H2) && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Estimated fee" }), /* @__PURE__ */ u(n, { $isLoading: q2, children: H2 && !q2 ? /* @__PURE__ */ u(ee, { children: [/* @__PURE__ */ u(re, { children: ["Sponsored by ", G2.name] }), /* @__PURE__ */ u(ForwardRef$1, { height: 16, width: 16 })] }) : D2 })] })] }), /* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(B, { onClick: () => Q2(((e2) => !e2)), children: [/* @__PURE__ */ u("span", { children: "Advanced" }), /* @__PURE__ */ u(ForwardRef$3, { height: "16px", width: "16px", strokeWidth: "2", style: { transition: "all 300ms", transform: J2 ? "rotate(180deg)" : void 0 } })] }) }), J2 && /* @__PURE__ */ u(S, { children: f.map(((n$12, i$1) => "sol-transfer" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: ["Transfer ", n$12.withSeed ? "with seed" : ""] }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount" }), /* @__PURE__ */ u(n, { children: [i({ amount: n$12.value, decimals: n$12.token.decimals }), " ", n$12.token.symbol] })] }), !!n$12.toAccount && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Destination" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.toAccount, url: S$1 }) })] })] }, i$1) : "spl-transfer" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: ["Transfer ", n$12.token.symbol] }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount" }), /* @__PURE__ */ u(n, { children: n$12.value.toString() })] }), !!n$12.fromAta && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Source" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.fromAta, url: S$1 }) })] }), !!n$12.toAta && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Destination" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.toAta, url: S$1 }) })] }), !!n$12.token.address && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.token.address, url: S$1 }) })] })] }, i$1) : "ata-creation" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: "Create token account" }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Program ID" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.program, url: S$1 }) })] }), !!n$12.owner && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Owner" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.owner, url: S$1 }) })] })] }, i$1) : "create-account" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: ["Create account ", n$12.withSeed ? "with seed" : ""] }) }), !!n$12.account && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Account" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.account, url: S$1 }) })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount" }), /* @__PURE__ */ u(n, { children: [i({ amount: n$12.value, decimals: 9 }), " SOL"] })] })] }, i$1) : "spl-init-account" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: "Initialize token account" }) }), !!n$12.account && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Account" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.account, url: S$1 }) })] }), !!n$12.mint && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Mint" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mint, url: S$1 }) })] }), !!n$12.owner && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Owner" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.owner, url: S$1 }) })] })] }, i$1) : "spl-close-account" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: "Close token account" }) }), !!n$12.source && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Source" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.source, url: S$1 }) })] }), !!n$12.destination && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Destination" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.destination, url: S$1 }) })] }), !!n$12.owner && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Owner" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.owner, url: S$1 }) })] })] }, i$1) : "spl-sync-native" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: "Sync native" }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Program ID" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.program, url: S$1 }) })] })] }, i$1) : "raydium-swap-base-input" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: ["Raydium swap", " ", n$12.tokenIn && n$12.tokenOut ? `${n$12.tokenIn.symbol} → ${n$12.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount in" }), /* @__PURE__ */ u(n, { children: n$12.amountIn.toString() })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Minimum amount out" }), /* @__PURE__ */ u(n, { children: n$12.minimumAmountOut.toString() })] }), n$12.mintIn && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token in" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintIn, url: S$1 }) })] }), n$12.mintOut && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token out" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintOut, url: S$1 }) })] })] }, i$1) : "raydium-swap-base-output" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: ["Raydium swap", " ", n$12.tokenIn && n$12.tokenOut ? `${n$12.tokenIn.symbol} → ${n$12.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Max amount in" }), /* @__PURE__ */ u(n, { children: n$12.maxAmountIn.toString() })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount out" }), /* @__PURE__ */ u(n, { children: n$12.amountOut.toString() })] }), n$12.mintIn && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token in" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintIn, url: S$1 }) })] }), n$12.mintOut && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token out" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintOut, url: S$1 }) })] })] }, i$1) : "jupiter-swap-shared-accounts-route" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: ["Jupiter swap", " ", n$12.tokenIn && n$12.tokenOut ? `${n$12.tokenIn.symbol} → ${n$12.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "In amount" }), /* @__PURE__ */ u(n, { children: n$12.inAmount.toString() })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Quoted out amount" }), /* @__PURE__ */ u(n, { children: n$12.quotedOutAmount.toString() })] }), n$12.mintIn && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token in" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintIn, url: S$1 }) })] }), n$12.mintOut && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token out" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintOut, url: S$1 }) })] })] }, i$1) : "jupiter-swap-exact-out-route" === n$12.type ? /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: /* @__PURE__ */ u(r$1, { children: ["Jupiter swap", " ", n$12.tokenIn && n$12.tokenOut ? `${n$12.tokenIn.symbol} → ${n$12.tokenOut.symbol}` : ""] }) }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Quoted in amount" }), /* @__PURE__ */ u(n, { children: n$12.quotedInAmount.toString() })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Amount out" }), /* @__PURE__ */ u(n, { children: n$12.outAmount.toString() })] }), n$12.mintIn && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token in" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintIn, url: S$1 }) })] }), n$12.mintOut && /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Token out" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.mintOut, url: S$1 }) })] })] }, i$1) : /* @__PURE__ */ u(Y, { children: [/* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Program ID" }), /* @__PURE__ */ u(n, { children: /* @__PURE__ */ u(d$1, { address: n$12.program, url: S$1 }) })] }), /* @__PURE__ */ u(s, { children: [/* @__PURE__ */ u(e$1, { children: "Data" }), /* @__PURE__ */ u(n, { children: n$12.discriminator })] })] }, i$1))) }), /* @__PURE__ */ u(k$1, {}), $ ? /* @__PURE__ */ u(e$2, { style: { marginTop: "2rem" }, children: $.message }) : j2 ? /* @__PURE__ */ u(e$2, { style: { marginTop: "2rem" }, children: _ }) : null, /* @__PURE__ */ u(X, { $useSmallMargins: !(!j2 && !$), title: "", address: N, balance: F, errMsg: W2 || j2 || $ || !M ? void 0 : "Add funds on Solana to complete transaction." }), /* @__PURE__ */ u(m, { style: { marginTop: "1rem" }, loading: P, disabled: L || W2, onClick: R2, children: u$2 }), /* @__PURE__ */ u(u$1, {})] });
};
let X = gt(j)`
  ${(e2) => e2.$useSmallMargins ? "margin-top: 0.5rem;" : "margin-top: 2rem;"}
`, Y = gt(t)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`, _ = "There was an error preparing your transaction. Your transaction request will likely fail.", Z = gt.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`, ee = gt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`, re = gt.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;
let ne = (e2) => (e2 == null ? void 0 : e2.code) === I.COMPLIANCE_BLOCKED, ie = () => /* @__PURE__ */ u(se, { children: [/* @__PURE__ */ u(de, {}), /* @__PURE__ */ u(ce, {})] });
const oe = ({ transactionError: i2, chainId: o2, onClose: t2, onRetry: a, chainType: s2, transactionHash: d$12 }) => {
  let { chains: h } = l(), [m2, p] = d(false), { errorCode: g$1, errorMessage: f } = ((e2, r2) => {
    if ("ethereum" === r2) return ne(e2) ? { errorCode: "Transaction blocked", errorMessage: e2.message } : { errorCode: e2.details ?? e2.message, errorMessage: e2.shortMessage };
    let n2 = e2.txSignature, i3 = (e2 == null ? void 0 : e2.transactionMessage) || "Something went wrong.";
    if (Array.isArray(e2.logs)) {
      let r3 = e2.logs.find(((e3) => /insufficient (lamports|funds)/gi.test(e3)));
      r3 && (i3 = r3);
    }
    return { transactionHash: n2, errorMessage: i3 };
  })(i2, s2), y = ne(i2), k2 = (({ chains: e2, chainId: r2, chainType: n2, transactionHash: i3 }) => {
    var _a, _b;
    return "ethereum" === n2 ? ((_b = (_a = e2.find(((e3) => e3.id === r2))) == null ? void 0 : _a.blockExplorers) == null ? void 0 : _b.default.url) ?? "https://etherscan.io" : (function(e3, r3) {
      return `https://explorer.solana.com/tx/${e3}?chain=${r3}`;
    })(i3 || "", r2);
  })({ chains: h, chainId: o2, chainType: s2, transactionHash: d$12 });
  return u(S, { children: [/* @__PURE__ */ u(T, { onClose: t2 }), /* @__PURE__ */ u(te, { children: [/* @__PURE__ */ u(ie, {}), /* @__PURE__ */ u(le, { children: g$1 }), /* @__PURE__ */ u(ae, { children: y ? "This transaction cannot be completed." : "Please try again." }), /* @__PURE__ */ u(ue, { children: [/* @__PURE__ */ u(me, { children: "Error message" }), /* @__PURE__ */ u(ge, { $clickable: false, children: f })] }), d$12 && /* @__PURE__ */ u(ue, { children: [/* @__PURE__ */ u(me, { children: "Transaction hash" }), /* @__PURE__ */ u(pe, { children: ["Copy this hash to view details about the transaction on a", " ", /* @__PURE__ */ u("u", { children: /* @__PURE__ */ u("a", { href: k2, children: "block explorer" }) }), "."] }), /* @__PURE__ */ u(ge, { $clickable: true, onClick: async () => {
    await navigator.clipboard.writeText(d$12), p(true);
  }, children: [d$12, /* @__PURE__ */ u(ke, { clicked: m2 })] })] }), !y && /* @__PURE__ */ u(he, { onClick: () => a({ resetNonce: !!d$12 }), children: "Retry transaction" })] }), /* @__PURE__ */ u(g, {})] });
};
let te = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`, le = gt.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`, ae = gt.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`, se = gt.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`, ce = gt(ForwardRef$4)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`, de = gt.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`, he = gt(m)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`, me = gt.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`, ue = gt.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`, pe = gt.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`, ge = gt.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${(e2) => e2.$clickable && "cursor: pointer;\n  transition: background-color 0.3s;\n  padding-right: 45px;\n\n  &:hover {\n    background-color: var(--privy-color-foreground-4);\n  }"}
`, fe = gt(ForwardRef)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`, ye = gt(ForwardRef$5)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`, ke = ({ clicked: r2 }) => /* @__PURE__ */ u(r2 ? ye : fe, {});
export {
  G,
  K,
  oe as o
};
