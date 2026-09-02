import { dq as g, dg as A, dk as u, dG as S } from "./index-R3UC2dO4.js";
import { k, u as u$1 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { d } from "./Layouts-BlFm53ED-CD0Nk718.js";
import { t } from "./FundWalletMethodHeader-G5sXf6Zt-DJM9bH8h.js";
import { t as t$1 } from "./index-Dq_xe9dz-CSIqWJSY.js";
import { e } from "./Title-BnzYV3Is-DndUIwx1.js";
import { c } from "./useGetTokenPrice-_x6xp2Po-CwWfjldP.js";
import { n } from "./ethers-DFE0Hz-t-CD6nZkop.js";
import { a, p, d as d$1, c as c$1, l } from "./styles-DLlsr-XC-zpliE5Tt.js";
import "./useGetSolPrice-x7gfUIHJ-Cjqf_OFw.js";
import "./LinkPasskeyScreen-C2ClLwr7-BS2f4LvO.js";
import "./TodoList-CgrU7uwu-CmvXiFwy.js";
import "./x-BGzNGWEl.js";
import "./createLucideIcon-COMOll4V.js";
import "./check-Di0e4xHX.js";
import "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./circle-check-big-DBjOD95i.js";
import "./fingerprint-pattern-B_dYUbFY.js";
const v = { component: () => {
  var _a;
  let { data: v2, setModalData: g$1 } = g(), C = v2 == null ? void 0 : v2.funding, x = "solana" === C.chainType, k$1 = A(null), { tokenPrice: S$1 } = c(x ? "solana" : C.chain.id), D = x ? void 0 : C, T = !(!(D == null ? void 0 : D.erc20Address) || (D == null ? void 0 : D.erc20ContractInfo)), F = x ? C.isUSDC ? "USDC" : "SOL" : C.erc20Address ? (_a = C.erc20ContractInfo) == null ? void 0 : _a.symbol : C.chain.nativeCurrency.symbol || "ETH", A$1 = parseFloat(C.amount), I = !isNaN(A$1) && A$1 > 0, L = S$1 ? n(C.amount, S$1) : void 0;
  return u(S, { children: [/* @__PURE__ */ u(t, {}), /* @__PURE__ */ u(e, { children: "Confirm or edit amount" }), /* @__PURE__ */ u(d, { style: { marginTop: "32px" }, children: [/* @__PURE__ */ u(a, { children: T ? /* @__PURE__ */ u(t$1, { size: "50px" }) : /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(p, { onClick: () => {
    var _a2;
    return (_a2 = k$1.current) == null ? void 0 : _a2.focus();
  }, children: [/* @__PURE__ */ u(d$1, { ref: k$1, value: C.amount, onChange: (t2) => {
    let o = t2.target.value;
    /^[0-9.]*$/.test(o) && o.split(".").length - 1 <= 1 && g$1({ ...v2, funding: { ...C, amount: o }, solanaFundingData: (v2 == null ? void 0 : v2.solanaFundingData) ? { ...v2.solanaFundingData, amount: o } : void 0 });
  } }), /* @__PURE__ */ u(c$1, { children: F })] }), !(D == null ? void 0 : D.erc20Address) && !(x && C.isUSDC) && /* @__PURE__ */ u(l, { children: L && I ? `${L} USD` : "" })] }) }), /* @__PURE__ */ u(k, { style: { marginTop: "1rem" }, disabled: !I, onClick: C.onContinueWithExternalWallet, children: "Continue" })] }), /* @__PURE__ */ u(u$1, {})] });
} };
export {
  v as FundingAmountEditScreen,
  v as default
};
