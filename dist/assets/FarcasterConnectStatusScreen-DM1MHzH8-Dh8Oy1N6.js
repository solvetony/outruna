import { dv as k, dq as g, dl as le, dr as l, df as d, dg as A$1, dh as y, dy as i, eL as A$2, eJ as g$1, dk as u, eM as libExports, eX as P, du as gt, dG as S } from "./index-Cw7cGahV.js";
import { n } from "./OpenLink-DZHy38vr-C0TrQY3f.js";
import { C } from "./QrCode-mmar0Iu7-WAqIc_VT.js";
import { $ as $$1 } from "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import { r } from "./LabelXs-oqZNqbm_-BQGqCeZm.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-C70FdWNt.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import { l as l$1 } from "./farcaster-DPlSjvF5-BO2AKm14.js";
import { C as Check } from "./check-pJYqNiWi.js";
import { C as Copy } from "./copy-Dc_XQleO.js";
import "./dijkstra-DpzGW89u.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
import "./createLucideIcon-vpjfwHTJ.js";
let E = gt.div`
  width: 100%;
`, T = gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${(e) => e.$disabled ? "var(--privy-color-background-2)" : "var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${(e) => e.$disabled ? "var(--privy-color-foreground-4)" : "var(--privy-color-foreground-3)"};
  }
`, A = gt.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`, L = gt.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${(e) => e.$disabled ? "var(--privy-color-foreground-2)" : "var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  /* Use single-line truncation without nowrap to respect container width */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`, F = gt(L)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`, O = gt(r)`
  margin-bottom: 0.5rem;
`, _ = gt($$1)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;
const I = ({ value: a2, title: n2, placeholder: s, className: l2, showCopyButton: c = true, truncate: d$1, maxLength: m = 40, disabled: h = false }) => {
  let [v, f] = d(false), g2 = d$1 && a2 ? ((e, r2, t) => {
    if ((e = e.startsWith("https://") ? e.slice(8) : e).length <= t) return e;
    if ("middle" === r2) {
      let r3 = Math.ceil(t / 2) - 2, o = Math.floor(t / 2) - 1;
      return `${e.slice(0, r3)}...${e.slice(-o)}`;
    }
    return `${e.slice(0, t - 3)}...`;
  })(a2, d$1, m) : a2;
  return y((() => {
    if (v) {
      let e = setTimeout((() => f(false)), 3e3);
      return () => clearTimeout(e);
    }
  }), [v]), /* @__PURE__ */ u(E, { className: l2, children: [n2 && /* @__PURE__ */ u(O, { children: n2 }), /* @__PURE__ */ u(T, { $disabled: h, children: [/* @__PURE__ */ u(A, { children: a2 ? /* @__PURE__ */ u(L, { $disabled: h, title: a2, children: g2 }) : /* @__PURE__ */ u(F, { $disabled: h, children: s || "No value" }) }), c && a2 && /* @__PURE__ */ u(_, { onClick: function(e) {
    e.stopPropagation(), navigator.clipboard.writeText(a2).then((() => f(true))).catch(console.error);
  }, size: "sm", children: /* @__PURE__ */ u(S, v ? { children: ["Copied", /* @__PURE__ */ u(Check, { size: 14 })] } : { children: ["Copy", /* @__PURE__ */ u(Copy, { size: 14 })] }) })] })] });
}, R = ({ connectUri: t, loading: o, success: i2, errorMessage: a2, onBack: l2, onClose: p, onOpenFarcaster: u$1 }) => /* @__PURE__ */ u(n$1, libExports.isMobile || o ? libExports.isIOS ? { title: a2 ? a2.message : "Sign in with Farcaster", subtitle: a2 ? a2.detail : "To sign in with Farcaster, please open the Farcaster app.", icon: l$1, iconVariant: "loading", iconLoadingStatus: { success: i2, fail: !!a2 }, primaryCta: t && u$1 ? { label: "Open Farcaster app", onClick: u$1 } : void 0, onBack: l2, onClose: p, watermark: true } : { title: a2 ? a2.message : "Signing in with Farcaster", subtitle: a2 ? a2.detail : "This should only take a moment", icon: l$1, iconVariant: "loading", iconLoadingStatus: { success: i2, fail: !!a2 }, onBack: l2, onClose: p, watermark: true, children: t && libExports.isMobile && /* @__PURE__ */ u(U, { children: /* @__PURE__ */ u(n, { text: "Take me to Farcaster", url: t, color: "#8a63d2" }) }) } : { title: "Sign in with Farcaster", subtitle: "Scan with your phone's camera to continue.", onBack: l2, onClose: p, watermark: true, children: /* @__PURE__ */ u(M, { children: [/* @__PURE__ */ u($, { children: t ? /* @__PURE__ */ u(C, { url: t, size: 275, squareLogoElement: l$1 }) : /* @__PURE__ */ u(z, { children: /* @__PURE__ */ u(P, {}) }) }), /* @__PURE__ */ u(W, { children: [/* @__PURE__ */ u(D, { children: "Or copy this link and paste it into a phone browser to open the Farcaster app." }), t && /* @__PURE__ */ u(I, { value: t, truncate: "end", maxLength: 30, showCopyButton: true, disabled: true })] })] }) }), N = { component: () => {
  let { authenticated: e, logout: t, ready: n2, user: s } = k(), { lastScreen: l$12, navigate: c, navigateBack: d$1, setModalData: m } = g(), p = le(), { getAuthFlow: u$1, loginWithFarcaster: h, closePrivyModal: v, createAnalyticsEvent: C2 } = l(), [S2, E2] = d(void 0), [T2, A2] = d(false), [L2, F2] = d(false), O2 = A$1([]), _2 = u$1(), I2 = _2 == null ? void 0 : _2.meta.connectUri;
  return y((() => {
    let e2 = Date.now(), r2 = setInterval((async () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      let t2 = await _2.pollForReady.execute(), o = Date.now() - e2;
      if (t2) {
        clearInterval(r2), A2(true);
        try {
          await h(), F2(true);
        } catch (e3) {
          let r3 = { retryable: false, message: "Authentication failed" };
          if ((e3 == null ? void 0 : e3.privyErrorCode) === i.ALLOWLIST_REJECTED) return void c("AllowlistRejectionScreen");
          if ((e3 == null ? void 0 : e3.privyErrorCode) === i.USER_LIMIT_REACHED) return console.error(new A$2(e3).toString()), void c("UserLimitReachedScreen");
          if ((e3 == null ? void 0 : e3.privyErrorCode) === i.USER_DOES_NOT_EXIST) return void c("AccountNotFoundScreen");
          if ((e3 == null ? void 0 : e3.privyErrorCode) === i.LINKED_TO_ANOTHER_USER) r3.detail = e3.message ?? "This account has already been linked to another user.";
          else {
            if ((e3 == null ? void 0 : e3.privyErrorCode) === i.ACCOUNT_TRANSFER_REQUIRED && ((_b = (_a = e3.data) == null ? void 0 : _a.data) == null ? void 0 : _b.nonce)) return m({ accountTransfer: { nonce: (_d = (_c = e3.data) == null ? void 0 : _c.data) == null ? void 0 : _d.nonce, account: (_f = (_e = e3.data) == null ? void 0 : _e.data) == null ? void 0 : _f.subject, displayName: (_i = (_h = (_g = e3.data) == null ? void 0 : _g.data) == null ? void 0 : _h.account) == null ? void 0 : _i.displayName, linkMethod: "farcaster", embeddedWalletAddress: (_l = (_k = (_j = e3.data) == null ? void 0 : _j.data) == null ? void 0 : _k.otherUser) == null ? void 0 : _l.embeddedWalletAddress, farcasterEmbeddedAddress: (_o = (_n = (_m = e3.data) == null ? void 0 : _m.data) == null ? void 0 : _n.otherUser) == null ? void 0 : _o.farcasterEmbeddedAddress } }), void c("LinkConflictScreen");
            (e3 == null ? void 0 : e3.privyErrorCode) === i.INVALID_CREDENTIALS ? (r3.retryable = true, r3.detail = "Something went wrong. Try again.") : (e3 == null ? void 0 : e3.privyErrorCode) === i.TOO_MANY_REQUESTS && (r3.detail = "Too many requests. Please wait before trying again.");
          }
          E2(r3);
        }
      } else o > 12e4 && (clearInterval(r2), E2({ retryable: true, message: "Authentication failed", detail: "The request timed out. Try again." }));
    }), 2e3);
    return () => {
      clearInterval(r2), O2.current.forEach(((e3) => clearTimeout(e3)));
    };
  }), []), y((() => {
    if (n2 && e && L2 && s) {
      if ((p == null ? void 0 : p.legal.requireUsersAcceptTerms) && !s.hasAcceptedTerms) {
        let e2 = setTimeout((() => {
          c("AffirmativeConsentScreen");
        }), g$1);
        return () => clearTimeout(e2);
      }
      L2 && (a(s, p.embeddedWallets) ? O2.current.push(setTimeout((() => {
        m({ createWallet: { onSuccess: () => {
        }, onFailure: (e2) => {
          console.error(e2), C2({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e2, screen: "FarcasterConnectStatusScreen" } }), t();
        }, callAuthOnSuccessOnClose: true } }), c("EmbeddedWalletOnAccountCreateScreen");
      }), g$1)) : O2.current.push(setTimeout((() => v({ shouldCallAuthOnSuccess: true, isSuccess: true })), g$1)));
    }
  }), [L2, n2, e, s]), /* @__PURE__ */ u(R, { connectUri: I2, loading: T2, success: L2, errorMessage: S2, onBack: l$12 ? d$1 : void 0, onClose: v, onOpenFarcaster: () => {
    I2 && (window.location.href = I2);
  } });
} };
let U = gt.div`
  margin-top: 24px;
`, M = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`, $ = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`, W = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`, D = gt.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`, z = gt.div`
  position: relative;
  width: 82px;
  height: 82px;
`;
export {
  N as FarcasterConnectStatusScreen,
  R as FarcasterConnectStatusView,
  N as default
};
