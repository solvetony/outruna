import { dk as u, dd as D, df as d, dv as k, dr as l, dq as g, eV as $r, dl as le, gk as m, fW as I, dG as S$1 } from "./index-R3UC2dO4.js";
import { F as ForwardRef } from "./EnvelopeIcon-ChzXscwH.js";
import { e } from "./Layouts-BlFm53ED-CD0Nk718.js";
import { V, m as m$1 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { t, e as e$2 } from "./EmailInputForm-Dgoii4vf-DTn08qeQ.js";
import { e as e$1 } from "./ErrorMessage-D8VaAP5m-Bjrm8AQj.js";
import { n } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import { M as Mail } from "./mail-DpHMku5e.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
import "./createLucideIcon-COMOll4V.js";
const w = /* @__PURE__ */ D(((o, i) => {
  let [s, f] = d(""), [y, k$1] = d(""), [w2, E2] = d(false), { authenticated: x2, user: A } = k(), { initUpdateEmail: C } = l(), { navigate: P, setModalData: I$1, currentScreen: M } = g(), { enabled: T, token: q } = $r(), L = le(), U = m(s) && (L.disablePlusEmails && s.includes("+") ? (y || k$1("Please enter a valid email address without a '+'."), false) : (y && k$1(""), true)), D2 = w2 || !U, W = () => {
    D2 || (!T || q || x2 ? (async (e2) => {
      if (!(A == null ? void 0 : A.email)) throw Error("User is required to have an email address to update it.");
      E2(true);
      try {
        await C({ oldAddress: A.email.address, newAddress: s, captchaToken: e2 }), P("AwaitingPasswordlessCodeScreen");
      } catch (e3) {
        I$1({ errorModalData: { error: e3, previousScreen: M || "LandingScreen" } }), P("ErrorScreen");
      }
      E2(false);
    })(q) : (I$1({ captchaModalData: { callback: (e2) => {
      if (!(A == null ? void 0 : A.email)) throw Error("User is required to have an email address to update it.");
      return C({ oldAddress: A.email.address, newAddress: s, captchaToken: e2 });
    }, userIntentRequired: false, onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen", onErrorNavigateTo: "ErrorScreen" } }), P("CaptchaScreen")));
  };
  return u(S$1, { children: [/* @__PURE__ */ u(b, { children: [y && /* @__PURE__ */ u(e$1, { style: { marginTop: "0.25rem", textAlign: "left" }, children: y }), /* @__PURE__ */ u(S, { $error: !!y, children: [/* @__PURE__ */ u(I, { children: /* @__PURE__ */ u(Mail, {}) }), /* @__PURE__ */ u("input", { ref: i, id: "email-input", type: "email", placeholder: "your@email.com", onChange: (e2) => f(e2.target.value), onKeyUp: (e2) => {
    "Enter" === e2.key && W();
  }, value: s, autoComplete: "email" }), o.stacked ? null : /* @__PURE__ */ u(V, { isSubmitting: w2, onClick: W, disabled: D2, children: "Submit" })] })] }), o.stacked ? /* @__PURE__ */ u(m$1, { loadingText: null, loading: w2, disabled: D2, onClick: W, style: { width: "100%" }, children: "Submit" }) : null] });
}));
let b = t, S = e$2;
const E = ({ title: e$12 = "Update your email", subtitle: r = "Add the email address you'd like to use going forward. We'll send you a confirmation code" }) => /* @__PURE__ */ u(n, { title: e$12, subtitle: r, icon: ForwardRef, watermark: true, children: /* @__PURE__ */ u(e, { children: /* @__PURE__ */ u(w, { stacked: true }) }) }), x = { component: () => /* @__PURE__ */ u(E, {}) };
export {
  x as UpdateEmailScreen,
  E as UpdateEmailScreenView,
  x as default
};
