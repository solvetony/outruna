import { ca as formatEther, dr as l$1, g5 as O } from "./index-R3UC2dO4.js";
let a = new Intl.NumberFormat(void 0, { style: "currency", currency: "USD", maximumFractionDigits: 2 }), s = (r) => a.format(r);
const n = (r, e) => {
  let t = s(e * parseFloat(r));
  return "$0.00" !== t ? t : "<$0.01";
}, o = (e, t) => {
  let a2 = s(t * parseFloat(formatEther(e)));
  return "$0.00" === a2 ? "<$0.01" : a2;
}, c = (r, e, t = 6, a2 = false) => `${l(r, t, a2)} ${e}`, l = (e, t = 6, a2 = false) => {
  let s2 = parseFloat(formatEther(e)).toFixed(t).replace(/0+$/, "").replace(/\.$/, "");
  return a2 ? s2 : `${"0" === s2 ? "<0.001" : s2}`;
}, m = (r) => r.reduce(((r2, e) => r2 + e), 0n), i = (r, a2) => {
  let { chains: s2 } = l$1(), n2 = `https://etherscan.io/address/${a2}`, o2 = `${O(r, s2)}/address/${a2}`;
  if (!o2) return n2;
  try {
    new URL(o2);
  } catch {
    return n2;
  }
  return o2;
};
export {
  c,
  i,
  l,
  m,
  n,
  o
};
