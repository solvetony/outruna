import { C } from "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
function t(e, t2 = 6, n2 = false, r = false) {
  let o = (parseFloat(e.toString()) / 1e9).toFixed(t2).replace(/0+$/, "").replace(/\.$/, ""), i = r ? "" : " SOL";
  return n2 ? `${o}${i}` : `${"0" === o ? "<0.001" : o}${i}`;
}
function n({ amount: n2, fee: r, tokenPrice: o, isUsdc: i }) {
  let a = BigInt(Math.floor(parseFloat(n2) * 10 ** (i ? 6 : 9))), s = i ? a : a + r;
  return { fundingAmountInBaseUnit: a, fundingAmountInUsd: o ? C(a, o) : void 0, totalPriceInUsd: o ? C(s, o) : void 0, totalPriceInNativeCurrency: t(s), feePriceInNativeCurrency: t(r), feePriceInUsd: o ? C(r, o) : void 0 };
}
export {
  n,
  t
};
