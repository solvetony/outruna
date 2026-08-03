import { cg as formatUnits, ca as formatEther } from "./index-BDOBKk5h.js";
function n(e) {
  return e ? `${e.slice(0, 5)}…${e.slice(-4)}` : "";
}
function t({ wei: e, precision: n2 = 3 }) {
  return parseFloat(formatEther(e)).toFixed(n2).replace(/0+$/, "").replace(/\.$/, "");
}
function i({ amount: r, decimals: n2 }) {
  return formatUnits(BigInt(r), n2);
}
export {
  i,
  n,
  t
};
