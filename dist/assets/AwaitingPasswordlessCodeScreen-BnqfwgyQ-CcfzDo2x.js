import { dd as D, dm as k$1, dq as g, dl as le, dr as l, dv as k$2, df as d, dh as y, eJ as g$1, dk as u, eK as r, dy as i, eL as A$1, eM as libExports, du as gt } from "./index-R3UC2dO4.js";
import { F as ForwardRef$1 } from "./EnvelopeIcon-ChzXscwH.js";
import { F as ForwardRef$2 } from "./PhoneIcon-DiD09pcZ.js";
import { o } from "./Layouts-BlFm53ED-CD0Nk718.js";
import { n } from "./Link-DJ5gq9Di-DfTbh8Hp.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-Ci4HGDhX.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ k$1("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ k$1("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ k$1("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ D(CheckIcon);
const b = ({ contactMethod: c, authFlow: m, emailDomain: p, appName: u$1 = "Privy", whatsAppEnabled: f = false, onBack: v, onCodeSubmit: h, onResend: y$1, errorMessage: g2, success: x = false, resendCountdown: b2 = 0, onInvalidInput: j2, onClearError: A2 }) => {
  let [w2, k2] = d(S);
  y((() => {
    g2 || k2(S);
  }), [g2]);
  let T2 = async (e) => {
    var _a;
    e.preventDefault();
    let r2 = e.currentTarget.value.replace(" ", "");
    if ("" === r2) return;
    if (isNaN(Number(r2))) return void (j2 == null ? void 0 : j2("Code should be numeric"));
    A2 == null ? void 0 : A2();
    let o2 = Number((_a = e.currentTarget.name) == null ? void 0 : _a.charAt(5)), t = [...r2 || [""]].slice(0, C - o2), i2 = [...w2.slice(0, o2), ...t, ...w2.slice(o2 + t.length)];
    k2(i2);
    let n2 = Math.min(Math.max(o2 + t.length, 0), C - 1);
    if (!isNaN(Number(e.currentTarget.value))) {
      let e2 = document.querySelector(`input[name=code-${n2}]`);
      e2 == null ? void 0 : e2.focus();
    }
    if (i2.every(((e2) => e2 && !isNaN(+e2)))) {
      let e2 = document.querySelector(`input[name=code-${n2}]`);
      e2 == null ? void 0 : e2.blur(), await (h == null ? void 0 : h(i2.join("")));
    }
  };
  return u(n$1, { title: "Enter confirmation code", subtitle: /* @__PURE__ */ u("span", "email" === m ? { children: ["Please check ", /* @__PURE__ */ u(M, { children: c }), " for an email from", " ", p ?? "privy.io", " and enter your code below."] } : { children: ["Please check ", /* @__PURE__ */ u(M, { children: c }), " for a", f ? " WhatsApp" : "", " message from ", u$1, " and enter your code below."] }), icon: "email" === m ? ForwardRef$1 : ForwardRef$2, onBack: v, showBack: true, helpText: /* @__PURE__ */ u(L, { children: [/* @__PURE__ */ u("span", { children: ["Didn't get ", "email" === m ? "an email" : "a message", "?"] }), b2 ? /* @__PURE__ */ u(R, { children: [/* @__PURE__ */ u(ForwardRef, { color: "var(--privy-color-foreground)", strokeWidth: 1.33, height: "12px", width: "12px" }), /* @__PURE__ */ u("span", { children: "Code sent" })] }) : /* @__PURE__ */ u(n, { as: "button", size: "sm", onClick: y$1, children: "Resend code" })] }), children: /* @__PURE__ */ u(N, { children: /* @__PURE__ */ u(o, { children: /* @__PURE__ */ u(_, { children: [/* @__PURE__ */ u("div", { children: w2.map(((r2, o2) => /* @__PURE__ */ u("input", { name: `code-${o2}`, type: "text", value: w2[o2], onChange: T2, onKeyUp: (e) => {
    "Backspace" === e.key && ((e2) => {
      if (A2 == null ? void 0 : A2(), k2([...w2.slice(0, e2), "", ...w2.slice(e2 + 1)]), e2 > 0) {
        let r3 = document.querySelector(`input[name=code-${e2 - 1}]`);
        r3 == null ? void 0 : r3.focus();
      }
    })(o2);
  }, inputMode: "numeric", autoFocus: 0 === o2, pattern: "[0-9]", className: `${x ? "success" : ""} ${g2 ? "fail" : ""}`, autoComplete: libExports.isMobile ? "one-time-code" : "off" }, o2))) }), /* @__PURE__ */ u(I, { $fail: !!g2, $success: x, children: /* @__PURE__ */ u("span", { children: "Invalid or expired verification code" === g2 ? "Incorrect code" : g2 || (x ? "Success!" : "") }) })] }) }) }) });
};
let C = 6, S = Array(6).fill("");
var j, A, w = ((j = w || {})[j.RESET_AFTER_DELAY = 0] = "RESET_AFTER_DELAY", j[j.CLEAR_ON_NEXT_VALID_INPUT = 1] = "CLEAR_ON_NEXT_VALID_INPUT", j), k = ((A = k || {})[A.EMAIL = 0] = "EMAIL", A[A.SMS = 1] = "SMS", A);
const T = { component: () => {
  var _a, _b, _c;
  let { navigate: r$1, lastScreen: o2, navigateBack: t, setModalData: i$1, onUserCloseViaDialogOrKeybindRef: s } = g(), c = le(), { closePrivyModal: l$1, resendEmailCode: d$1, resendSmsCode: E, getAuthMeta: C2, loginWithCode: S2, updateWallets: j2, createAnalyticsEvent: A2 } = l(), { authenticated: w2, logout: k2, user: T2 } = k$2(), { whatsAppEnabled: N2 } = le(), [_2, I2] = d(false), [L2, R2] = d(null), [M2, D2] = d(null), [O, P] = d(0);
  s.current = () => null;
  let U = ((_a = C2()) == null ? void 0 : _a.email) ? 0 : 1, W = 0 === U ? ((_b = C2()) == null ? void 0 : _b.email) || "" : ((_c = C2()) == null ? void 0 : _c.phoneNumber) || "", $ = g$1 - 500;
  y((() => {
    if (O) {
      let e = setTimeout((() => {
        P(O - 1);
      }), 1e3);
      return () => clearTimeout(e);
    }
  }), [O]), y((() => {
    if (w2 && _2 && T2) {
      if ((c == null ? void 0 : c.legal.requireUsersAcceptTerms) && !T2.hasAcceptedTerms) {
        let e = setTimeout((() => {
          r$1("AffirmativeConsentScreen");
        }), $);
        return () => clearTimeout(e);
      }
      if (a(T2, c.embeddedWallets)) {
        let e = setTimeout((() => {
          i$1({ createWallet: { onSuccess: () => {
          }, onFailure: (e2) => {
            console.error(e2), A2({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e2, screen: "AwaitingPasswordlessCodeScreen" } }), k2();
          }, callAuthOnSuccessOnClose: true } }), r$1("EmbeddedWalletOnAccountCreateScreen");
        }), $);
        return () => clearTimeout(e);
      }
      {
        j2();
        let e = setTimeout((() => l$1({ shouldCallAuthOnSuccess: true, isSuccess: true })), g$1);
        return () => clearTimeout(e);
      }
    }
  }), [w2, _2, T2]), y((() => {
    if (L2 && 0 === M2) {
      let e = setTimeout((() => {
        R2(null), D2(null);
        let e2 = document.querySelector("input[name=code-0]");
        e2 == null ? void 0 : e2.focus();
      }), 1400);
      return () => clearTimeout(e);
    }
  }), [L2, M2]);
  return u(b, { contactMethod: W, authFlow: 0 === U ? "email" : "sms", emailDomain: c == null ? void 0 : c.appearance.emailDomain, appName: c == null ? void 0 : c.name, whatsAppEnabled: N2, onBack: () => t(), onCodeSubmit: async (e) => {
    var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j;
    try {
      await S2(e), I2(true);
    } catch (e2) {
      if (e2 instanceof r && e2.privyErrorCode === i.INVALID_CREDENTIALS) R2("Invalid or expired verification code"), D2(0);
      else if (e2 instanceof r && e2.privyErrorCode === i.CANNOT_LINK_MORE_OF_TYPE) R2(e2.message);
      else {
        if (e2 instanceof r && e2.privyErrorCode === i.USER_LIMIT_REACHED) return console.error(new A$1(e2).toString()), void r$1("UserLimitReachedScreen");
        if (e2 instanceof r && e2.privyErrorCode === i.USER_DOES_NOT_EXIST) return void r$1("AccountNotFoundScreen");
        if (e2 instanceof r && e2.privyErrorCode === i.LINKED_TO_ANOTHER_USER) return i$1({ errorModalData: { error: e2, previousScreen: o2 ?? "AwaitingPasswordlessCodeScreen" } }), void r$1("ErrorScreen", false);
        if (e2 instanceof r && e2.privyErrorCode === i.DISALLOWED_PLUS_EMAIL) return i$1({ inlineError: { error: e2 } }), void r$1("ConnectOrCreateScreen", false);
        if (e2 instanceof r && e2.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && ((_b2 = (_a2 = e2.data) == null ? void 0 : _a2.data) == null ? void 0 : _b2.nonce)) return i$1({ accountTransfer: { nonce: (_d = (_c2 = e2.data) == null ? void 0 : _c2.data) == null ? void 0 : _d.nonce, account: W, displayName: (_g = (_f = (_e = e2.data) == null ? void 0 : _e.data) == null ? void 0 : _f.account) == null ? void 0 : _g.displayName, linkMethod: 0 === U ? "email" : "sms", embeddedWalletAddress: (_j = (_i = (_h = e2.data) == null ? void 0 : _h.data) == null ? void 0 : _i.otherUser) == null ? void 0 : _j.embeddedWalletAddress } }), void r$1("LinkConflictScreen");
        R2("Issue verifying code"), D2(0);
      }
    }
  }, onResend: async () => {
    P(30), 0 === U ? await d$1() : await E();
  }, errorMessage: L2 || void 0, success: _2, resendCountdown: O, onInvalidInput: (e) => {
    R2(e), D2(1);
  }, onClearError: () => {
    1 === M2 && (R2(null), D2(null));
  } });
} };
let N = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`, _ = gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`, I = gt.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${(e) => e.$success ? "var(--privy-color-success-dark)" : e.$fail ? "var(--privy-color-error-dark)" : "transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`, L = gt.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`, R = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`, M = gt.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;
export {
  T as AwaitingPasswordlessCodeScreen,
  b as AwaitingPasswordlessCodeScreenView,
  T as default
};
