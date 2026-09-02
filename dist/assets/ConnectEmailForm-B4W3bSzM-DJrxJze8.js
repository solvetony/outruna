import { dd as D, df as d, dv as k$1, dr as l, dq as g, eV as $r, g7 as H, dl as le, gk as m, dk as u, dG as S, du as gt, fW as I } from "./index-lNx1hHWy.js";
import { V, m as m$1 } from "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import { n } from "./Chip-D2-wZOHJ-BdnE--3W.js";
import { t, a } from "./EmailInputForm-Dgoii4vf-CTopsP55.js";
import { e } from "./ErrorMessage-D8VaAP5m-fXJKPRNA.js";
import { M as Mail } from "./mail-D2YuCpka.js";
const j = /* @__PURE__ */ D(((t2, n$1) => {
  let [u$1, v] = d(t2.defaultValue || ""), [S$1, j2] = d(""), [C, w] = d(false), { authenticated: P } = k$1(), { initLoginWithEmail: T } = l(), { navigate: M, setModalData: A, currentScreen: D2, data: I2 } = g(), { enabled: L, token: N } = $r(), [U, F] = d(false), { accountType: R } = H(), W = le(), q = m(u$1) && (W.disablePlusEmails && u$1.includes("+") ? (S$1 || j2("Please enter a valid email address without a '+'."), false) : (S$1 && j2(""), true)), H$1 = C || !q, K = () => {
    var _a;
    var e2;
    H$1 || (A({ login: I2 == null ? void 0 : I2.login, inlineError: void 0 }), !L || N || P ? (e2 = N, w(true), T({ email: u$1, captchaToken: e2, disableSignup: (_a = I2 == null ? void 0 : I2.login) == null ? void 0 : _a.disableSignup, withPrivyUi: true }).then((() => {
      M("AwaitingPasswordlessCodeScreen");
    })).catch(((e3) => {
      A({ errorModalData: { error: e3, previousScreen: D2 || "LandingScreen" } }), M("ErrorScreen");
    })).finally((() => {
      w(false);
    }))) : (A({ captchaModalData: { callback: (e3) => T({ email: u$1, captchaToken: e3, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen", onErrorNavigateTo: "ErrorScreen" } }), M("CaptchaScreen")));
  };
  return u(S, { children: [/* @__PURE__ */ u(k, { children: [S$1 && /* @__PURE__ */ u(e, { style: { display: "block", marginTop: "0.25rem", textAlign: "left" }, children: S$1 }), /* @__PURE__ */ u(E, { stacked: t2.stacked, $error: !!S$1, children: [/* @__PURE__ */ u(x, { children: /* @__PURE__ */ u(Mail, {}) }), /* @__PURE__ */ u("input", { ref: n$1, id: "email-input", className: "login-method-button", type: "email", placeholder: "your@email.com", onFocus: () => F(true), onChange: (e2) => v(e2.target.value), onKeyUp: (e2) => {
    "Enter" === e2.key && K();
  }, value: u$1, autoComplete: "email" }), "email" !== R || U ? t2.stacked ? /* @__PURE__ */ u("span", {}) : /* @__PURE__ */ u(V, { isSubmitting: C, onClick: K, disabled: H$1, children: "Submit" }) : /* @__PURE__ */ u(n, { color: "gray", children: "Recent" })] })] }), t2.stacked ? /* @__PURE__ */ u(m$1, { loadingText: null, loading: C, disabled: H$1, onClick: K, style: { width: "100%" }, children: "Submit" }) : null] });
}));
let k = t, E = a, x = gt(I)`
  display: inline-flex;
`;
export {
  j
};
