import { dq as g, dl as le, eV as $r, dk as u, dG as S, dC as s, dy as i, gp as _i, dx as t, eK as r, du as gt } from "./index-CgfjQyaX.js";
import { m } from "./reservoir-B7XIq5qj-BCf5FrdM.js";
import { n } from "./safe-url-D7SRPu33-BDTGvdDK.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { T as TriangleAlert } from "./triangle-alert-BTH59Rgy.js";
import { c as createLucideIcon } from "./createLucideIcon-Buh6I6L_.js";
import { L as Lock } from "./lock-CbZf879C.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const f = ({ error: n$2, allowlistConfig: s$1, onRetry: c, onCaptchaReset: T, onBack: f2 }) => {
  let v2 = ((n2, s$12) => {
    if (n2 instanceof m) return { title: "Transaction failed", detail: /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u("span", { children: n2.message }), /* @__PURE__ */ u("span", { children: [" ", "Check the", " ", /* @__PURE__ */ u(w, { href: n2.relayLink, target: "_blank", children: "refund status" }), "."] })] }), ctaText: "Try again", icon: TriangleAlert };
    if (n2 instanceof s) switch (n2.privyErrorCode) {
      case i.CLIENT_REQUEST_TIMEOUT:
        return { title: "Timed out", detail: n2.message, ctaText: "Try again", icon: TriangleAlert };
      case i.INSUFFICIENT_BALANCE:
        return { title: "Insufficient balance", detail: n2.message, ctaText: "Try again", icon: TriangleAlert };
      case i.TRANSACTION_FAILURE:
        return { title: "Transaction failure", detail: n2.message, ctaText: "Try again", icon: TriangleAlert };
      default:
        return { title: "Something went wrong", detail: "Try again later", ctaText: "Try again", icon: TriangleAlert };
    }
    else {
      if (n2 instanceof _i && "twilio_verification_failed" === n2.type) return { title: "Something went wrong", detail: n2.message, ctaText: "Try again", icon: Phone };
      if (!(n2 instanceof t)) return n2 instanceof r && n2.status && [400, 422].includes(n2.status) ? { title: "Something went wrong", detail: n2.message, ctaText: "Try again", icon: TriangleAlert } : { title: "Something went wrong", detail: "Try again later", ctaText: "Try again", icon: TriangleAlert };
      switch (n2.privyErrorCode) {
        case i.INVALID_CAPTCHA:
          return { title: "Something went wrong", detail: "Please try again.", ctaText: "Try again", icon: TriangleAlert };
        case i.DISALLOWED_LOGIN_METHOD:
          return { title: "Not allowed", detail: n2.message, ctaText: "Try another method", icon: TriangleAlert };
        case i.ALLOWLIST_REJECTED:
          return { title: s$12.errorTitle || "You don't have access to this app", detail: s$12.errorDetail || "Have you been invited?", ctaText: s$12.errorCtaText || "Try another account", icon: Lock };
        case i.CAPTCHA_FAILURE:
          return { title: "Something went wrong", detail: "You did not pass CAPTCHA. Please try again.", ctaText: "Try again", icon: null };
        case i.CAPTCHA_TIMEOUT:
          return { title: "Something went wrong", detail: "Something went wrong! Please try again later.", ctaText: "Try again", icon: null };
        case i.LINKED_TO_ANOTHER_USER:
          return { title: "Authentication failed", detail: "This account has already been linked to another user.", ctaText: "Try again", icon: TriangleAlert };
        case i.NOT_SUPPORTED:
          return { title: "This region is not supported", detail: "SMS authentication from this region is not available", ctaText: "Try another method", icon: TriangleAlert };
        case i.TOO_MANY_REQUESTS:
          return { title: "Request failed", detail: "Too many attempts.", ctaText: "Try again later", icon: TriangleAlert };
        default:
          return { title: "Something went wrong", detail: "Try again later", ctaText: "Try again", icon: TriangleAlert };
      }
    }
  })(n$2, s$1);
  return u(n$1, { title: v2.title, subtitle: v2.detail, icon: v2.icon, onBack: f2, iconVariant: "error", primaryCta: { label: v2.ctaText, onClick: () => {
    if (n$2 instanceof t && (n$2.privyErrorCode === i.INVALID_CAPTCHA && (T == null ? void 0 : T()), n$2.privyErrorCode === i.ALLOWLIST_REJECTED)) {
      let t2 = n(s$1.errorCtaLink);
      if (t2) return void window.open(t2, "_blank", "noopener,noreferrer");
    }
    c == null ? void 0 : c();
  }, variant: "error" }, watermark: true });
}, v = { component: () => {
  var _a, _b;
  let { navigate: e, data: r2, lastScreen: i2, currentScreen: o } = g(), a = le(), { reset: n2 } = $r(), m2 = ((_a = r2 == null ? void 0 : r2.errorModalData) == null ? void 0 : _a.previousScreen) || (i2 === o ? void 0 : i2);
  return u(f, { error: ((_b = r2 == null ? void 0 : r2.errorModalData) == null ? void 0 : _b.error) || Error(), allowlistConfig: a.allowlistConfig, onRetry: () => {
    e(m2 || "LandingScreen", false);
  }, onCaptchaReset: n2 });
} };
let w = gt.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`;
export {
  v as ErrorScreen,
  f as ErrorScreenView,
  v as default
};
