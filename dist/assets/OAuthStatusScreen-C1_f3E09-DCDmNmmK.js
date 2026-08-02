import { dv as k$1, dq as g, dl as le, dr as l, df as d, dh as y, dy as i, eL as A, hy as Nr, eJ as g$1, dk as u, gf as r$1, dU as gn } from "./index-Cw7cGahV.js";
import { i as i$1, B, C, o, h, s, d as d$1, n as n$1, l as l$1, e, r } from "./twitch-5IOe4sIQ-Cpl9zLpj.js";
import { F as ForwardRef } from "./GlobeAltIcon-BdXRZRJB.js";
import { c } from "./telegram-B-JqnkqZ-rK34uSwZ.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-C70FdWNt.js";
import { n } from "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import { e as e$1 } from "./capitalizeFirstLetter-DmLYqXsO-IVpzf22j.js";
import "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
const R = ({ style: t }) => /* @__PURE__ */ u(ForwardRef, { style: { color: "var(--privy-color-error)", ...t } });
let N = { google: { name: "Google", component: r }, discord: { name: "Discord", component: e }, github: { name: "Github", component: l$1 }, linkedin: { name: "LinkedIn", component: n$1 }, twitter: { name: "Twitter", component: d$1 }, spotify: { name: "Spotify", component: s }, instagram: { name: "Instagram", component: h }, tiktok: { name: "Tiktok", component: o }, line: { name: "LINE", component: C }, twitch: { name: "Twitch", component: B }, apple: { name: "Apple", component: i$1 }, telegram: { name: "Telegram", component: c } }, k = ({ iconUrl: e2, ...r2 }) => gn.createElement("svg", { width: "33", height: "32", viewBox: "0 0 33 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r2 }, gn.createElement("foreignObject", { x: "2", y: "2", width: "29", height: "28" }, gn.createElement("img", { src: e2, width: "29", height: "28", style: { display: "block", objectFit: "contain", borderRadius: "4px" }, alt: "Provider icon" })));
const U = (e2, r2) => {
  if (e2 in N) return N[e2];
  if (r$1(e2) && r2) {
    let o2 = r2.find(((t) => t.provider === e2));
    if (o2) return { name: o2.provider_display_name, component: (e3) => gn.createElement(k, { ...e3, iconUrl: o2.provider_icon_url }) };
  }
  return { name: "Unknown", component: R };
};
function I(e2, t, r2) {
  let o2 = { detail: "", retryable: false }, i$12 = e$1(t);
  if ((e2 == null ? void 0 : e2.privyErrorCode) === i.LINKED_TO_ANOTHER_USER && (o2.detail = "This account has already been linked to another user."), (e2 == null ? void 0 : e2.privyErrorCode) === i.INVALID_CREDENTIALS && (o2.retryable = true, o2.detail = "Something went wrong. Try again."), e2.privyErrorCode === i.OAUTH_USER_DENIED && (o2.detail = `Retry and check ${i$12} to finish connecting your account.`, o2.retryable = true), (e2 == null ? void 0 : e2.privyErrorCode) === i.TOO_MANY_REQUESTS && (o2.detail = "Too many requests. Please wait before trying again."), (e2 == null ? void 0 : e2.privyErrorCode) === i.TOO_MANY_REQUESTS && e2.message.includes("provider rate limit")) {
    let e3 = U(t, r2).name;
    o2.detail = `Request limit reached for ${e3}. Please wait a moment and try again.`;
  }
  if ((e2 == null ? void 0 : e2.privyErrorCode) === i.OAUTH_ACCOUNT_SUSPENDED) {
    let e3 = U(t, r2).name;
    o2.detail = `Your ${e3} account is suspended. Please try another login method.`;
  }
  return (e2 == null ? void 0 : e2.privyErrorCode) === i.CANNOT_LINK_MORE_OF_TYPE && (o2.detail = "You cannot authorize more than one account for this user."), (e2 == null ? void 0 : e2.privyErrorCode) === i.OAUTH_UNEXPECTED && t.startsWith("privy:") && (o2.detail = "Something went wrong. Please try again."), o2;
}
const L = ({ providerName: t, ProviderLogo: r2, success: o2, errorMessage: i2, onRetry: n$12 }) => {
  let a2 = o2 ? `Successfully connected with ${t}` : i2 ? i2.message : `Verifying connection to ${t}`;
  return u(n, { title: a2, subtitle: o2 ? "You're good to go!" : i2 ? i2.detail : "Just a few moments more", icon: r2, iconVariant: "loading", iconLoadingStatus: { success: o2, fail: !!i2 }, secondaryCta: (i2 == null ? void 0 : i2.retryable) && n$12 ? { label: "Retry", onClick: n$12 } : void 0, watermark: true });
}, P = { component: () => {
  var _a;
  let { authenticated: t, logout: i$12, ready: a$1, user: s2 } = k$1(), { setModalData: m, navigate: c2, resetNavigation: l$12 } = g(), d$12 = le(), { getAuthMeta: p, initLoginWithOAuth: u$1, loginWithOAuth: h2, updateWallets: v, setReadyToTrue: y$1, closePrivyModal: g$2, createAnalyticsEvent: f } = l(), [_, b] = d(false), [R2, N2] = d(void 0), k2 = ((_a = p()) == null ? void 0 : _a.provider) || "google", { name: P2, component: x } = U(k2, d$12.customOAuthProviders);
  return y((() => {
    h2(k2).then((() => {
      b(true), y$1(true);
    })).catch(((e2) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      if (y$1(false), (e2 == null ? void 0 : e2.privyErrorCode) === i.ALLOWLIST_REJECTED) return N2(void 0), l$12(), void c2("AllowlistRejectionScreen");
      if ((e2 == null ? void 0 : e2.privyErrorCode) === i.USER_LIMIT_REACHED) return console.error(new A(e2).toString()), N2(void 0), l$12(), void c2("UserLimitReachedScreen");
      if ((e2 == null ? void 0 : e2.privyErrorCode) === i.USER_DOES_NOT_EXIST) return N2(void 0), l$12(), void c2("AccountNotFoundScreen");
      if ((e2 == null ? void 0 : e2.privyErrorCode) === i.ACCOUNT_TRANSFER_REQUIRED && ((_b = (_a2 = e2.data) == null ? void 0 : _a2.data) == null ? void 0 : _b.nonce)) return N2(void 0), l$12(), m({ accountTransfer: { nonce: (_d = (_c = e2.data) == null ? void 0 : _c.data) == null ? void 0 : _d.nonce, account: (_f = (_e = e2.data) == null ? void 0 : _e.data) == null ? void 0 : _f.subject, displayName: (_i = (_h = (_g = e2.data) == null ? void 0 : _g.data) == null ? void 0 : _h.account) == null ? void 0 : _i.displayName, linkMethod: (_j = p()) == null ? void 0 : _j.provider, embeddedWalletAddress: (_m = (_l = (_k = e2.data) == null ? void 0 : _k.data) == null ? void 0 : _l.otherUser) == null ? void 0 : _m.embeddedWalletAddress, oAuthUserInfo: (_p = (_o = (_n = e2.data) == null ? void 0 : _n.data) == null ? void 0 : _o.otherUser) == null ? void 0 : _p.oAuthUserInfo } }), void c2("LinkConflictScreen");
      let { retryable: t2, detail: r2 } = I(e2, k2, d$12.customOAuthProviders);
      N2({ retryable: t2, detail: r2, message: "Authentication failed" });
    })).finally((() => {
      Nr();
    }));
  }), [P2, k2]), y((() => {
    if (a$1 && t && _ && s2) {
      if ((d$12 == null ? void 0 : d$12.legal.requireUsersAcceptTerms) && !s2.hasAcceptedTerms) {
        let e2 = setTimeout((() => {
          c2("AffirmativeConsentScreen");
        }), g$1);
        return () => clearTimeout(e2);
      }
      if (a(s2, d$12.embeddedWallets)) {
        let e2 = setTimeout((() => {
          m({ createWallet: { onSuccess: () => {
          }, onFailure: (e3) => {
            console.error(e3), f({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, provider: k2, screen: "OAuthStatusScreen" } }), i$12();
          }, callAuthOnSuccessOnClose: true } }), c2("EmbeddedWalletOnAccountCreateScreen");
        }), g$1);
        return () => clearTimeout(e2);
      }
      {
        let e2 = setTimeout((() => g$2({ shouldCallAuthOnSuccess: true, isSuccess: true })), g$1);
        return v(), () => clearTimeout(e2);
      }
    }
  }), [a$1, t, _, s2]), /* @__PURE__ */ u(L, { providerName: P2, ProviderLogo: x, success: _, errorMessage: R2, onRetry: (R2 == null ? void 0 : R2.retryable) ? () => {
    Nr(), u$1(k2), N2(void 0);
  } : void 0 });
}, isShownBeforeReady: true };
export {
  P as OAuthStatusScreen,
  L as OAuthStatusScreenView,
  P as default
};
