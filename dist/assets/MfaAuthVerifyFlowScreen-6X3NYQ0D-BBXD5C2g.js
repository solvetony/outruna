import { dv as k, dl as le, di as T, dq as g, df as d, dh as y, dg as A, dk as u$1 } from "./index-lNx1hHWy.js";
import { K, O, q, Q } from "./to-ui-error-yyFPS-Ds-2NvzjLxu.js";
import "./PinInput-YqT0dSuH-iX3Fs83p.js";
import "./FingerPrintIcon-BgOHSv6n.js";
import "./PhoneIcon-CyypAhcb.js";
import "./ShieldCheckIcon-CmhxfBvf.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
import "./ExclamationTriangleIcon-BLUqFLPf.js";
import "./StackedContainer-B2vaEl56-mDxvrlDg.js";
import "./useGetTokenPrice-_x6xp2Po-CmIIasnY.js";
import "./useGetSolPrice-x7gfUIHJ-C3LAMCIz.js";
import "./TransactionDetails-cezbnGxz-FzE8abzK.js";
import "./WalletLink-BD2FWKMu-MCjY7FaA.js";
import "./ethers-DFE0Hz-t-BTnUwHgh.js";
import "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
import "./transaction-CnfuREWo-41oAee1p.js";
import "./Layouts-BlFm53ED-vFipr686.js";
import "./ChevronDownIcon-C_qtQzfq.js";
const u = { component: () => {
  let { user: u2 } = k(), d$1 = le(), h = T((() => (u2 == null ? void 0 : u2.mfaMethods.filter(((o) => "passkey" !== o || !d$1.globalDisablePasskeys))) ?? []), [u2 == null ? void 0 : u2.mfaMethods, d$1.globalDisablePasskeys]), { data: j } = g(), [f, y$1] = d(h[0]), [v, k$1] = d(false), [g$1, w] = d(), [b, C] = d();
  if (y((() => {
    y$1(h[0]);
  }), [h]), !(j == null ? void 0 : j.mfaVerify)) throw Error("Missing modal data for MFA verification screen.");
  let { onFailure: x, onSuccess: S, generateOptions: I, verifyTotpCode: M, verifyPasskey: P, verifySmsCode: A$1, sendSmsCode: E } = j.mfaVerify, B = async (o) => {
    if ("passkey" !== o) try {
      y$1(o), "sms" === o && (y$1(o), await E()), "totp" === o && y$1(o);
    } catch (o2) {
      console.error(o2);
    }
    else try {
      y$1(o);
      let e = await I();
      if (!e) throw Error("something went wrong");
      w(e), await P(e), k$1(true), C(void 0), S();
    } catch (o2) {
      C(Q(o2));
    }
  }, F = async (o) => {
    C(void 0);
    try {
      if (!o || !f) return;
      if ("passkey" === f) {
        if (!g$1) throw Error("Missing passkey challenge");
        await P(g$1);
      } else "sms" === f ? await A$1(o) : "totp" === f && await M(o);
      C(void 0), k$1(true), S();
    } catch (o2) {
      throw Q(o2).error;
    }
  }, V = () => {
    b || !v ? x((b == null ? void 0 : b.error) ?? Error("Canceled MFA verification.")) : S();
  }, D = A(false);
  return y((() => {
    !D.current && f && (D.current = true, B(f).finally((() => {
      D.current = false;
    })));
  }), [open]), u2 ? "passkey" === f ? /* @__PURE__ */ u$1(K, { account: u2.linkedAccounts.filter(((o) => "passkey" === o.type && o.enrolledInMfa)).sort(((o, e) => e.firstVerifiedAt.valueOf() - o.firstVerifiedAt.valueOf()))[0], submitSuccess: v, hasBlockingError: (b == null ? void 0 : b.isBlocking) ?? false, error: b == null ? void 0 : b.error, onClose: V, onBack: () => {
    y$1(void 0), C(void 0);
  }, handleSubmit: () => F(g$1).catch(C) }) : "sms" === f || "totp" === f ? /* @__PURE__ */ u$1(O, { selectedMethod: f, submitSuccess: v, hasBlockingError: (b == null ? void 0 : b.isBlocking) ?? false, handleSubmitCode: F, onClose: V, onBack: h.length > 1 ? () => y$1(void 0) : void 0 }) : /* @__PURE__ */ u$1(q, { mfaMethods: h, onSelect: B, handleClose: V }) : null;
} };
export {
  u as MfaAuthVerifyFlowScreen,
  u as default
};
