import { dq as g, dl as le, dr as l, dv as k, df as d, dg as A, dh as y, eJ as g$1, dk as u, dx as t, dy as i, du as gt } from "./index-CgfjQyaX.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-BVvCFODt.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { F as FingerprintPattern } from "./fingerprint-pattern-Db1NpKzq.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
import "./createLucideIcon-Buh6I6L_.js";
const f = ({ status: t$1, passkeySignupFlow: o = false, error: i$1, onRetry: s }) => /* @__PURE__ */ u(n, { title: (() => {
  switch (t$1) {
    case "loading":
      return "Waiting for passkey";
    case "success":
      return "Success";
    case "error":
      return "Something went wrong";
  }
})(), subtitle: /* @__PURE__ */ u(v, { children: (() => {
  switch (t$1) {
    case "loading":
      return o ? "Please follow prompts to register your passkey." : "Please follow prompts to verify your passkey.\nYou will have to sign up with another method first to register a passkey for your account.";
    case "success":
      return "You've successfully logged in with your passkey.";
    case "error":
      if (i$1 instanceof t) {
        if (i$1.privyErrorCode === i.CANNOT_LINK_MORE_OF_TYPE) return "Cannot link more passkeys to account.";
        if (i$1.privyErrorCode === i.PASSKEY_NOT_ALLOWED) return "Passkey request timed out or rejected by user.\nYou will have to sign up with another method first to register a passkey for your account.";
      }
      return "An unknown error occurred.\nYou will have to sign up with another method first to register a passkey for your account.";
  }
})() }), icon: FingerprintPattern, iconVariant: "loading", iconLoadingStatus: { success: "success" === t$1, fail: "error" === t$1 }, primaryCta: "error" === t$1 && s ? { label: "Retry", onClick: s } : "success" === t$1 ? { label: "Continue", disabled: true } : void 0, watermark: true }), h = { component: () => {
  let { data: r, setModalData: s, navigate: c } = g(), y$1 = le(), { loginWithPasskey: h2, signupWithPasskey: v2, closePrivyModal: g$2, createAnalyticsEvent: j } = l(), { user: w, logout: k$1, ready: S, authenticated: E } = k(), { passkeySignupFlow: C } = (r == null ? void 0 : r.passkeyAuthModalData) ?? {}, A$1 = g$1 - 500, [b, _] = d("loading"), [T, P] = d(null), x = A([]), O = (e) => {
    x.current = [e, ...x.current];
  };
  y((() => () => {
    x.current.forEach(((e) => clearTimeout(e))), x.current = [];
  }), []);
  let L = async () => {
    _("loading");
    try {
      C ? await v2() : await h2(), _("success");
    } catch (e) {
      if ((e == null ? void 0 : e.privyErrorCode) === i.USER_DOES_NOT_EXIST) return void c("AccountNotFoundScreen");
      if ((e == null ? void 0 : e.privyErrorCode) === i.ALLOWLIST_REJECTED) return void c("AllowlistRejectionScreen");
      if ((e == null ? void 0 : e.privyErrorCode) === i.USER_LIMIT_REACHED) return void c("UserLimitReachedScreen");
      P(e), _("error");
    }
  };
  return y((() => {
    if (S && E && "success" === b && w) {
      if ((y$1 == null ? void 0 : y$1.legal.requireUsersAcceptTerms) && !w.hasAcceptedTerms) return void O(setTimeout((() => {
        c("AffirmativeConsentScreen");
      }), A$1));
      if (!a(w, y$1 == null ? void 0 : y$1.embeddedWallets)) return void O(setTimeout((() => {
        g$2({ shouldCallAuthOnSuccess: true, isSuccess: true });
      }), g$1));
      O(setTimeout((() => {
        s({ createWallet: { onSuccess: () => {
        }, onFailure: (e) => {
          console.error(e), j({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e, screen: "PasskeyStatusScreen" } }), k$1();
        }, callAuthOnSuccessOnClose: true } }), c("EmbeddedWalletOnAccountCreateScreen");
      }), A$1));
    }
  }), [S, E, w, b]), y((() => {
    L();
  }), []), /* @__PURE__ */ u(f, { status: b, passkeySignupFlow: C, error: T, onRetry: L });
} };
let v = gt.span`
  white-space: pre-wrap;
`;
export {
  h as PasskeyStatusScreen,
  f as PasskeyStatusScreenView,
  h as default
};
