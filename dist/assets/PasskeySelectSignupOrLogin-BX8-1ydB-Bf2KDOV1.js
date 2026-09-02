import { eV as $r, dq as g, dr as l, dk as u } from "./index-R3UC2dO4.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import { F as FingerprintPattern } from "./fingerprint-pattern-B_dYUbFY.js";
import "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
import "./createLucideIcon-COMOll4V.js";
const s = ({ title: o = "Log in or create a new account?", subtitle: i = "Create a new account with a passkey or use a passkey to log in to an existing account.", onSignup: r, onLogin: s2 }) => /* @__PURE__ */ u(n$1, { title: o, subtitle: i, icon: FingerprintPattern, primaryCta: { label: "Create new account", onClick: r }, secondaryCta: { label: "Log in with a passkey", onClick: s2 }, watermark: true }), n = { component: () => {
  let { enabled: e, token: a } = $r(), { navigate: n2, setModalData: m } = g(), { initSignupWithPasskey: p, initLoginWithPasskey: c } = l();
  return u(s, { onSignup: async () => {
    e && !a ? (m({ passkeyAuthModalData: { passkeySignupFlow: true }, captchaModalData: { callback: (t) => p({ captchaToken: t, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "PasskeyStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), n2("CaptchaScreen")) : (await p({ withPrivyUi: true, captchaToken: a }), m({ passkeyAuthModalData: { passkeySignupFlow: true } }), n2("PasskeyStatusScreen"));
  }, onLogin: async () => {
    e && !a ? (m({ passkeyAuthModalData: { passkeySignupFlow: false }, captchaModalData: { callback: (t) => c({ captchaToken: t, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "PasskeyStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), n2("CaptchaScreen")) : (await c({ withPrivyUi: true, captchaToken: a }), m({ passkeyAuthModalData: { passkeySignupFlow: false } }), n2("PasskeyStatusScreen"));
  } });
} };
export {
  n as PasskeySelectSignupOrLogin,
  s as PasskeySelectSignupOrLoginView,
  n as default
};
