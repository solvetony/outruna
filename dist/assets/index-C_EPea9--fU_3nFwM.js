import { df as d, dr as l$1, dq as g, dg as A, dh as y$1, hj as ofetch, hk as P, hl as U, hm as j, hn as q } from "./index-Cw7cGahV.js";
import { t } from "./analytics-mkkvFRju-3eV9Df16.js";
const m = "moonpay";
function l(e) {
  return parseFloat(e);
}
function y(l2, y2 = false) {
  let [f, p] = d(null), { createAnalyticsEvent: g$1 } = l$1(), { data: h, navigate: v, setModalData: A$1 } = g(), F = h == null ? void 0 : h.funding, w = A(0);
  return y$1((() => {
    let t$1 = setInterval((async () => {
      var _a, _b;
      if (l2) try {
        let [n] = await (async function(t2, n2) {
          return ofetch(`${n2 ? P : U}/transactions/ext/${t2}`, { query: { apiKey: n2 ? j : q } });
        })(l2, y2), a = "waitingAuthorization" === n.status && "credit_debit_card" === n.paymentMethod ? "pending" : n.status;
        if (["failed", "completed", "awaitingAuthorization"].includes(a) && (g$1({ eventName: t, payload: { status: a, provider: m, paymentMethod: n.paymentMethod, cardPaymentType: n.cardPaymentType, currency: (_a = n.currency) == null ? void 0 : _a.code, baseCurrencyAmount: n.baseCurrencyAmount, quoteCurrencyAmount: n.quoteCurrencyAmount, feeAmount: n.feeAmount, extraFeeAmount: n.extraFeeAmount, networkFeeAmount: n.networkFeeAmount, isSandbox: y2 } }), clearInterval(t$1)), "failed" === a || "serviceFailure" === a) return A$1({ funding: { ...F, errorMessage: "Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet." }, solanaFundingData: h == null ? void 0 : h.solanaFundingData }), void v("FundingMethodSelectionScreen");
        p(a);
      } catch (e) {
        404 !== ((_b = e.response) == null ? void 0 : _b.status) && (w.current += 1), w.current >= 3 && (g$1({ eventName: t, payload: { status: "serviceFailure", provider: m } }), clearInterval(t$1), A$1({ funding: { ...F, errorMessage: "Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet." }, solanaFundingData: h == null ? void 0 : h.solanaFundingData }), v("FundingMethodSelectionScreen"));
      }
    }), 3e3);
    return () => clearInterval(t$1);
  }), [l2, w]), f;
}
export {
  l,
  y
};
