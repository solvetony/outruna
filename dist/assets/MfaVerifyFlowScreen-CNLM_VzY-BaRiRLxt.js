import { dv as k, dl as le, di as T, df as d, hx as $a, dh as y, dg as A, dk as u$1 } from "./index-Cw7cGahV.js";
import { K, O, q, Q } from "./to-ui-error-yyFPS-Ds-Ctib9u2K.js";
import "./PinInput-YqT0dSuH-BPolJI_1.js";
import "./FingerPrintIcon-7X0Tym-1.js";
import "./PhoneIcon-YqK7Yqjc.js";
import "./ShieldCheckIcon-FaB_b2GM.js";
import "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
import "./ExclamationTriangleIcon-YfFR3qty.js";
import "./StackedContainer-B2vaEl56-DlECcPFs.js";
import "./useGetTokenPrice-_x6xp2Po-CptJXGGn.js";
import "./useGetSolPrice-x7gfUIHJ-Cwf4hWsa.js";
import "./TransactionDetails-cezbnGxz-B0t4vC_a.js";
import "./WalletLink-BD2FWKMu-S7_8l0KX.js";
import "./ethers-DFE0Hz-t-CVcjYk0m.js";
import "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
import "./transaction-CnfuREWo-41oAee1p.js";
import "./Layouts-BlFm53ED-sn3bL9j4.js";
import "./ChevronDownIcon-RazvJHs6.js";
const u = ({ onClose: u2 }) => {
  let { user: d$1 } = k(), h = le(), j = T((() => (d$1 == null ? void 0 : d$1.mfaMethods.filter(((o) => "passkey" !== o || !h.globalDisablePasskeys))) ?? []), [d$1 == null ? void 0 : d$1.mfaMethods, h.globalDisablePasskeys]), [f, v] = d(j[0] ?? null), { init: y$1, cancel: k$1, submit: g } = $a(), [b, w] = d(false), [x, C] = d(null), [I, P] = d();
  y((() => {
    v(j[0] ?? null);
  }), [j]);
  let S = A(false);
  async function M(o) {
    P(void 0);
    try {
      if (!o || !f) return;
      await g(f, o), w(true), P(void 0), u2();
    } catch (o2) {
      throw Q(o2).error;
    }
  }
  async function A$1(o) {
    if ("passkey" !== o) try {
      v(o), await y$1(o);
    } catch (o2) {
      console.error(o2);
    }
    else try {
      v(o);
      let t = await y$1(o);
      if (!t) throw Error("something went wrong");
      C(t), await g(o, t), w(true), P(void 0), u2();
    } catch (o2) {
      P(Q(o2));
    }
  }
  y((() => {
    !S.current && f && (S.current = true, A$1(f).finally((() => {
      S.current = false;
    })));
  }), []);
  let B = () => {
    v(null), P(void 0), k$1(), u2();
  };
  return d$1 ? "passkey" === f ? /* @__PURE__ */ u$1(K, { account: d$1.linkedAccounts.filter(((o) => "passkey" === o.type && o.enrolledInMfa)).sort(((o, t) => t.firstVerifiedAt.valueOf() - o.firstVerifiedAt.valueOf()))[0], submitSuccess: b, hasBlockingError: (I == null ? void 0 : I.isBlocking) ?? false, error: I == null ? void 0 : I.error, onClose: B, onBack: () => {
    v(null), P(void 0);
  }, handleSubmit: () => M(x).catch(P) }) : f ? /* @__PURE__ */ u$1(O, { submitSuccess: b, hasBlockingError: (I == null ? void 0 : I.isBlocking) ?? false, handleSubmitCode: M, selectedMethod: f, onClose: B, onBack: j.length > 1 ? () => v(null) : void 0 }) : /* @__PURE__ */ u$1(q, { mfaMethods: j, onSelect: A$1, handleClose: B }) : null;
};
export {
  u as MfaVerifyFlowScreen,
  u as default
};
