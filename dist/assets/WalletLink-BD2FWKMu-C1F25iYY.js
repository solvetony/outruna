import { cg as formatUnits, dk as u$1, dG as S$1, dD as A, du as gt } from "./index-BDOBKk5h.js";
import { i, m, o, c } from "./ethers-DFE0Hz-t-Cc0adSz8.js";
import { C } from "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
import { t } from "./transaction-CnfuREWo-41oAee1p.js";
const p = ({ weiQuantities: t2, tokenPrice: r, tokenSymbol: n }) => {
  let i2 = m(t2), l = r ? o(i2, r) : void 0, c$1 = c(i2, n);
  return u$1(u, { children: l || c$1 });
}, h = ({ weiQuantities: n, tokenPrice: i2, tokenSymbol: l }) => {
  let c$1 = m(n), d = i2 ? o(c$1, i2) : void 0, m$1 = c(c$1, l);
  return u$1(u, { children: d ? /* @__PURE__ */ u$1(S$1, { children: [/* @__PURE__ */ u$1(x, { children: "USD" }), "<$0.01" === d ? /* @__PURE__ */ u$1(k, { children: [/* @__PURE__ */ u$1(g, { children: "<" }), "$0.01"] }) : d] }) : m$1 });
}, f = ({ quantities: n, tokenPrice: o2, tokenSymbol: s = "SOL", tokenDecimals: a = 9 }) => {
  let l = n.reduce(((e, t2) => e + t2), 0n), m2 = o2 && "SOL" === s && 9 === a ? C(l, o2) : void 0, p2 = "SOL" === s && 9 === a ? t(l) : `${formatUnits(l, a)} ${s}`;
  return u$1(u, { children: m2 ? /* @__PURE__ */ u$1(S$1, { children: "<$0.01" === m2 ? /* @__PURE__ */ u$1(k, { children: [/* @__PURE__ */ u$1(g, { children: "<" }), "$0.01"] }) : m2 }) : p2 });
};
let u = gt.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`, x = gt.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`, g = gt.span`
  font-size: 10px;
`, k = gt.span`
  display: flex;
  align-items: center;
`;
function y(e, t2) {
  return `https://explorer.solana.com/account/${e}?chain=${t2}`;
}
const S = (t2) => /* @__PURE__ */ u$1($, { href: "ethereum" === t2.chainType ? i(t2.chainId, t2.walletAddress) : y(t2.walletAddress, t2.chainId), target: "_blank", children: A(t2.walletAddress) });
let $ = gt.a`
  &:hover {
    text-decoration: underline;
  }
`;
export {
  S,
  f,
  h,
  p
};
