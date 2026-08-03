import { dq as g, dk as u } from "./index-BDOBKk5h.js";
import { T } from "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
function t({ title: t2 }) {
  var _a, _b;
  let { currentScreen: r, navigateBack: i, navigate: o, data: d, setModalData: u$1 } = g();
  return u(T, { title: t2, backFn: "ManualTransferScreen" === r ? i : r === ((_a = d == null ? void 0 : d.funding) == null ? void 0 : _a.methodScreen) ? d.funding.comingFromSendTransactionScreen ? () => o("SendTransactionScreen") : void 0 : ((_b = d == null ? void 0 : d.funding) == null ? void 0 : _b.methodScreen) ? () => {
    let n = d.funding;
    n.usingDefaultFundingMethod && (n.usingDefaultFundingMethod = false), u$1({ funding: n, solanaFundingData: d == null ? void 0 : d.solanaFundingData }), o(n.methodScreen);
  } : void 0 });
}
export {
  t
};
