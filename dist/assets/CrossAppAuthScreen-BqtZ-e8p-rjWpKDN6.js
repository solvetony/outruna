import { dl as le, dq as g, dr as l, f8 as Q, df as d, dC as s, dh as y, f9 as oi, eJ as g$1, dk as u, di as T, eK as r, dy as i } from "./index-Cw7cGahV.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-C70FdWNt.js";
import { n } from "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
const h = ({ providerApp: t, success: o, error: i2, onClose: a2 }) => {
  let { title: s2, subtitle: n$1 } = T((() => o ? { title: `Successfully connected with ${t.name}`, subtitle: "You're good to go!" } : i2 ? { title: "Authentication failed", subtitle: i2.message } : { title: `Connecting to ${t.name}`, subtitle: `Please check the pop-up from ${t.name} to continue` }), [o, i2, t.name]);
  return u(n, { title: s2, subtitle: n$1, icon: t.logoUrl, iconVariant: "loading", iconLoadingStatus: { success: o, fail: !!i2 }, onBack: a2, watermark: true });
}, j = { component: () => {
  let r$1 = le(), { data: f, navigate: j2, setModalData: v, onUserCloseViaDialogOrKeybindRef: y$1 } = g(), { crossAppAuthFlow: g$2, updateWallets: A, closePrivyModal: S, createAnalyticsEvent: b } = l(), { logout: w } = Q(), [C, I] = d({}), k = f == null ? void 0 : f.crossAppAuth, x = new s(`There was an issue connecting your ${k == null ? void 0 : k.name} account. Please try again.`), T2 = new oi((async (e) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    if (k == null ? void 0 : k.popup) try {
      let t = await g$2({ appId: e, popup: k.popup, action: k.action, disableSignup: k.disableSignup });
      I({ data: t });
    } catch (e2) {
      if (e2 instanceof s) I({ error: e2 });
      else if (e2 instanceof r) {
        if (e2.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && ((_b = (_a = e2.data) == null ? void 0 : _a.data) == null ? void 0 : _b.nonce)) return v({ accountTransfer: { nonce: (_d = (_c = e2.data) == null ? void 0 : _c.data) == null ? void 0 : _d.nonce, account: (_f = (_e = e2.data) == null ? void 0 : _e.data) == null ? void 0 : _f.subject, displayName: (_i = (_h = (_g = e2.data) == null ? void 0 : _g.data) == null ? void 0 : _h.account) == null ? void 0 : _i.displayName, linkMethod: `privy:${k.appId}`, embeddedWalletAddress: (_l = (_k = (_j = e2.data) == null ? void 0 : _j.data) == null ? void 0 : _k.otherUser) == null ? void 0 : _l.embeddedWalletAddress, oAuthUserInfo: (_o = (_n = (_m = e2.data) == null ? void 0 : _m.data) == null ? void 0 : _n.otherUser) == null ? void 0 : _o.oAuthUserInfo } }), void j2("LinkConflictScreen");
        k.popup && k.popup.close(), I({ error: x });
      } else I({ error: x });
    }
    else I({ error: x });
  })), U = () => {
    C.data && (A(), k == null ? void 0 : k.onSuccess(C.data), S({ shouldCallAuthOnSuccess: true, isSuccess: true })), k == null ? void 0 : k.onError(C.error ?? new s("User canceled flow")), S({ shouldCallAuthOnSuccess: false, isSuccess: false });
  };
  return y$1.current = U, y((() => {
    var _a;
    ((_a = k == null ? void 0 : k.appId) == null ? void 0 : _a.length) && T2.execute(k.appId);
  }), [k == null ? void 0 : k.appId]), y((() => {
    if (!C.data) return;
    let e = C.data;
    if (r$1.legal.requireUsersAcceptTerms && !e.hasAcceptedTerms) {
      let e2 = setTimeout((() => {
        j2("AffirmativeConsentScreen");
      }), g$1);
      return () => clearTimeout(e2);
    }
    if (a(e, r$1.embeddedWallets)) {
      let e2 = setTimeout((() => {
        v({ createWallet: { onSuccess: () => {
        }, onFailure: (e3) => {
          console.error(e3), b({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, provider: `privy:${k == null ? void 0 : k.appId}`, screen: "CrossAppAuthScreen" } }), w();
        }, callAuthOnSuccessOnClose: true } }), j2("EmbeddedWalletOnAccountCreateScreen");
      }), g$1);
      return () => clearTimeout(e2);
    }
    let t = setTimeout(U, g$1);
    return () => clearTimeout(t);
  }), [C.data]), (k == null ? void 0 : k.appId) ? /* @__PURE__ */ u(h, { providerApp: { id: k == null ? void 0 : k.appId, logoUrl: k == null ? void 0 : k.logoUrl, name: k == null ? void 0 : k.name }, success: !!C.data, error: C.error, onClose: U }) : (console.warn("Missing data for Screen"), null);
}, isShownBeforeReady: true };
export {
  j as CrossAppAuthScreen,
  h as CrossAppAuthScreenView,
  j as default
};
