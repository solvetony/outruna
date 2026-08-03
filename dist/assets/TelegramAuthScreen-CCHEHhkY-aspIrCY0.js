import { dv as k, dq as g$1, dl as le, dr as l, df as d, eV as $r, dh as y, eJ as g$2, dk as u, hT as Qr, eW as Kr, dy as i, eL as A } from "./index-BDOBKk5h.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-BRBz5tu8.js";
import { n } from "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import { c } from "./telegram-B-JqnkqZ-BPv2GWe1.js";
import "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
const g = ({ success: t, errorMessage: r, onRetry: o }) => {
  let i2 = t ? "Successfully connected with Telegram" : r ? r.message : "Verifying connection to Telegram";
  return u(n, { title: i2, subtitle: t ? "You're good to go!" : r ? r.detail : "Just a few moments more", icon: c, iconVariant: "loading", iconLoadingStatus: { success: t, fail: !!r }, secondaryCta: (r == null ? void 0 : r.retryable) && o ? { label: "Retry", onClick: o } : void 0, watermark: true });
}, f = { component: () => {
  let { authenticated: v, logout: y$1, ready: f2, user: h } = k(), { setModalData: j, navigate: A$1, resetNavigation: T, data: b } = g$1(), S = le(), { initLoginWithTelegram: C, loginWithTelegram: w, updateWallets: E, setReadyToTrue: R, closePrivyModal: W, createAnalyticsEvent: k$1, getAuthMeta: x } = l(), [_, L] = d(false), [M, I] = d(void 0), D = $r();
  async function N() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    try {
      let e = await (async function() {
        let e2;
        if (!v) {
          if (D.enabled && "error" === D.status) throw new Kr(D.error, null, i.CAPTCHA_FAILURE);
          return D.enabled && "success" !== D.status && (D.execute(), e2 = await D.waitForResult()), e2;
        }
      })();
      await w({ captchaToken: e }), L(true), R(true);
    } catch (e) {
      if ((e == null ? void 0 : e.privyErrorCode) === i.ALLOWLIST_REJECTED) return I(void 0), T(), void A$1("AllowlistRejectionScreen");
      if ((e == null ? void 0 : e.privyErrorCode) === i.USER_LIMIT_REACHED) return console.error(new A(e).toString()), I(void 0), T(), void A$1("UserLimitReachedScreen");
      if ((e == null ? void 0 : e.privyErrorCode) === i.USER_DOES_NOT_EXIST) return I(void 0), T(), void A$1("AccountNotFoundScreen");
      if ((e == null ? void 0 : e.privyErrorCode) === i.ACCOUNT_TRANSFER_REQUIRED && ((_b = (_a = e.data) == null ? void 0 : _a.data) == null ? void 0 : _b.nonce)) return I(void 0), T(), j({ accountTransfer: { nonce: (_d = (_c = e.data) == null ? void 0 : _c.data) == null ? void 0 : _d.nonce, account: (_f = (_e = e.data) == null ? void 0 : _e.data) == null ? void 0 : _f.subject, telegramAuthResult: (_g = x()) == null ? void 0 : _g.telegramAuthResult, telegramWebAppData: (_h = x()) == null ? void 0 : _h.telegramWebAppData, displayName: (_k = (_j = (_i = e.data) == null ? void 0 : _i.data) == null ? void 0 : _j.account) == null ? void 0 : _k.displayName, linkMethod: "telegram", embeddedWalletAddress: (_n = (_m = (_l = e.data) == null ? void 0 : _l.data) == null ? void 0 : _m.otherUser) == null ? void 0 : _n.embeddedWalletAddress } }), void A$1("LinkConflictScreen");
      let { retryable: t, detail: r } = Qr(e);
      I({ retryable: t, detail: r, message: "Authentication failed" });
    }
  }
  y((() => {
    N();
  }), []), y((() => {
    if (!(f2 && v && _ && h)) return;
    if ((S == null ? void 0 : S.legal.requireUsersAcceptTerms) && !h.hasAcceptedTerms) {
      let e2 = setTimeout((() => {
        A$1("AffirmativeConsentScreen");
      }), g$2);
      return () => clearTimeout(e2);
    }
    if (a(h, S.embeddedWallets)) {
      let e2 = setTimeout((() => {
        j({ createWallet: { onSuccess: () => {
        }, onFailure: (e3) => {
          console.error(e3), k$1({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, provider: "telegram", screen: "TelegramAuthScreen" } }), y$1();
        }, callAuthOnSuccessOnClose: true } }), A$1("EmbeddedWalletOnAccountCreateScreen");
      }), g$2);
      return () => clearTimeout(e2);
    }
    E();
    let e = setTimeout((() => W({ shouldCallAuthOnSuccess: true, isSuccess: true })), g$2);
    return () => clearTimeout(e);
  }), [f2, v, _, h]);
  return u(g, { success: _, errorMessage: M, onRetry: (M == null ? void 0 : M.retryable) ? async () => {
    var _a, _b;
    try {
      I(void 0), ((_a = b == null ? void 0 : b.telegramAuthModalData) == null ? void 0 : _a.seamlessAuth) || await C(void 0, (_b = b == null ? void 0 : b.login) == null ? void 0 : _b.disableSignup), await N();
    } catch (e) {
      let { retryable: t, detail: r } = Qr(e);
      I({ retryable: t, detail: r, message: "Authentication failed" });
    }
  } : void 0 });
}, isCaptchaRequired: true, isShownBeforeReady: true };
export {
  f as TelegramAuthScreen,
  g as TelegramAuthScreenView,
  f as default
};
