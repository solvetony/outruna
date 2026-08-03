import { dv as k, dq as g, df as d, dg as A$1, de as q, gG as t, dk as u, dG as S$1, he as fl, eM as libExports, du as gt } from "./index-CgfjQyaX.js";
import { p as p$1 } from "./CopyableText-ChtfBWx4-Capfc98f.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { i } from "./InfoBanner-DkQEPd77-DlHlnrxZ.js";
import { w, c, p } from "./SelectSourceAsset-C4di8q02-8H42ABw4.js";
import { r } from "./chevron-down-CoB3pFF-.js";
import { c as createLucideIcon } from "./createLucideIcon-Buh6I6L_.js";
import { H as Hourglass } from "./hourglass-D3txbrUU.js";
import { C as Check } from "./check-2w7g-C8Q.js";
import { C as CircleX } from "./circle-x-DDYAG7vC.js";
import "./copy-aH_6aZ6z.js";
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
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
const j = (e) => {
  try {
    return e.location.origin;
  } catch {
    return;
  }
}, x = ({ data: r2, onClose: o }) => /* @__PURE__ */ u(n, { showClose: true, onClose: o, title: "Initiate bank transfer", subtitle: "Use the details below to complete a bank transfer from your bank.", primaryCta: { label: "Done", onClick: o }, watermark: false, footerText: "Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately", children: /* @__PURE__ */ u(A, { children: (fl[r2.deposit_instructions.asset] || []).map((([o2, s], i2) => {
  let a = r2.deposit_instructions[o2];
  if (!a || Array.isArray(a)) return null;
  let n2 = "asset" === o2 ? a.toUpperCase() : a, c2 = n2.length > 100 ? `${n2.slice(0, 9)}...${n2.slice(-9)}` : n2;
  return u(S, { children: [/* @__PURE__ */ u(E, { children: s }), /* @__PURE__ */ u(p$1, { value: n2, includeChildren: libExports.isMobile, children: /* @__PURE__ */ u(I, { children: c2 }) })] }, i2);
})) }) });
let A = gt.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`, S = gt.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`, E = gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`, I = gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`;
const T = ({ onClose: t2 }) => /* @__PURE__ */ u(n, { showClose: true, onClose: t2, icon: CircleX, iconVariant: "error", title: "Something went wrong", subtitle: "We couldn't complete account setup. This isn't caused by anything you did.", primaryCta: { label: "Close", onClick: t2 }, watermark: true }), U = ({ onClose: t2, reason: r2 }) => {
  let o = r2 ? r2.charAt(0).toLowerCase() + r2.slice(1) : void 0;
  return u(n, { showClose: true, onClose: t2, icon: CircleX, iconVariant: "error", title: "Identity verification failed", subtitle: o ? `We can't complete identity verification because ${o}. Please try again or contact support for assistance.` : "We couldn't verify your identity. Please try again or contact support for assistance.", primaryCta: { label: "Close", onClick: t2 }, watermark: true });
}, _ = ({ onClose: r2, email: o }) => /* @__PURE__ */ u(n, { showClose: true, onClose: r2, icon: Hourglass, title: "Identity verification in progress", subtitle: "We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.", primaryCta: { label: "Done", onClick: r2 }, watermark: true, children: /* @__PURE__ */ u(i, { theme: "light", children: ["You'll receive an email at ", o, " once approved with instructions for completing your deposit."] }) }), L = ({ onClose: o, onAcceptTerms: s, isLoading: i2 }) => /* @__PURE__ */ u(n, { showClose: true, onClose: o, icon: UserCheck, title: "Verify your identity to continue", subtitle: "Finish verification with Persona — it takes just a few minutes and requires a government ID.", helpText: /* @__PURE__ */ u(S$1, { children: [`This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge's`, " ", /* @__PURE__ */ u("a", { href: "https://www.bridge.xyz/legal", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }), " ", "and", " ", /* @__PURE__ */ u("a", { href: "https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }), "."] }), primaryCta: { label: "Accept and continue", onClick: s, loading: i2 }, watermark: true }), P = ({ onClose: t2 }) => /* @__PURE__ */ u(n, { showClose: true, onClose: t2, icon: Check, iconVariant: "success", title: "Identity verified successfully", subtitle: "We've successfully verified your identity. Now initiate a bank transfer to view instructions.", primaryCta: { label: "Initiate bank transfer", onClick: () => {
}, loading: true }, watermark: true }), W = ({ opts: r2, onClose: o, onEditSourceAsset: s, onSelectAmount: i2, isLoading: a }) => /* @__PURE__ */ u(n, { showClose: true, onClose: o, headerTitle: `Buy ${r2.destination.asset.toLocaleUpperCase()}`, primaryCta: { label: "Continue", onClick: i2, loading: a }, watermark: true, children: [/* @__PURE__ */ u(c, { currency: r2.source.selectedAsset, inputMode: "decimal", autoFocus: true }), /* @__PURE__ */ u(p, { selectedAsset: r2.source.selectedAsset, onEditSourceAsset: s })] }), B = ({ onClose: t2, onAcceptTerms: r2, onSelectAmount: o, onSelectSource: s, onEditSourceAsset: i2, opts: a, state: n2, email: c2, isLoading: l }) => "select-amount" === n2.status ? /* @__PURE__ */ u(W, { onClose: t2, onSelectAmount: o, onEditSourceAsset: i2, opts: a, isLoading: l }) : "select-source-asset" === n2.status ? /* @__PURE__ */ u(w, { onSelectSource: s, opts: a, isLoading: l }) : "kyc-prompt" === n2.status ? /* @__PURE__ */ u(L, { onClose: t2, onAcceptTerms: r2, opts: a, isLoading: l }) : "kyc-incomplete" === n2.status ? /* @__PURE__ */ u(_, { onClose: t2, email: c2 }) : "kyc-success" === n2.status ? /* @__PURE__ */ u(P, { onClose: t2 }) : "kyc-error" === n2.status ? /* @__PURE__ */ u(U, { onClose: t2, reason: n2.reason }) : "account-details" === n2.status ? /* @__PURE__ */ u(x, { onClose: t2, data: n2.data }) : "create-customer-error" === n2.status || "get-customer-error" === n2.status ? /* @__PURE__ */ u(T, { onClose: t2 }) : null, z = { component: () => {
  let { user: t$1 } = k(), r$1 = g().data;
  if (!(r$1 == null ? void 0 : r$1.FundWithBankDepositScreen)) throw Error("Missing data");
  let { onSuccess: u$1, onFailure: m, opts: d$1, createOrUpdateCustomer: p2, getCustomer: f, getOrCreateVirtualAccount: y } = r$1.FundWithBankDepositScreen, [h, g$1] = d(d$1), [v, C] = d({ status: "select-amount" }), [w2, b] = d(null), [k$1, x2] = d(false), A2 = A$1(null), S2 = q((async () => {
    var _a, _b;
    let e;
    x2(true), b(null);
    try {
      e = await f({ kycRedirectUrl: window.location.origin });
    } catch (e2) {
      if (!e2 || "object" != typeof e2 || !("status" in e2) || 404 !== e2.status) return C({ status: "get-customer-error" }), b(e2), void x2(false);
    }
    if (!e) try {
      e = await p2({ hasAcceptedTerms: false, kycRedirectUrl: window.location.origin });
    } catch (e2) {
      return C({ status: "create-customer-error" }), b(e2), void x2(false);
    }
    if (!e) return C({ status: "create-customer-error" }), b(Error("Unable to create customer")), void x2(false);
    if ("not_started" === e.status && e.kyc_url) return C({ status: "kyc-prompt", kycUrl: e.kyc_url }), void x2(false);
    if ("not_started" === e.status) return C({ status: "get-customer-error" }), b(Error("Unexpected user state")), void x2(false);
    if ("rejected" === e.status) return C({ status: "kyc-error", reason: (_b = (_a = e.rejection_reasons) == null ? void 0 : _a[0]) == null ? void 0 : _b.reason }), b(Error("User KYC rejected.")), void x2(false);
    if ("incomplete" === e.status) return C({ status: "kyc-incomplete" }), void x2(false);
    if ("active" !== e.status) return C({ status: "get-customer-error" }), b(Error("Unexpected user state")), void x2(false);
    e.status;
    try {
      let e2 = await y({ destination: h.destination, provider: h.provider, source: { asset: h.source.selectedAsset } });
      C({ status: "account-details", data: e2 });
    } catch (e2) {
      return C({ status: "create-customer-error" }), b(e2), void x2(false);
    }
  }), [h]), E2 = q((async () => {
    var _a, _b;
    if (b(null), x2(true), "kyc-prompt" !== v.status) return b(Error("Unexpected state")), void x2(false);
    let e = t({ location: v.kycUrl });
    if (await p2({ hasAcceptedTerms: true }), !e) return b(Error("Unable to begin kyc flow.")), x2(false), void C({ status: "create-customer-error" });
    A2.current = new AbortController();
    let t$12 = await (async (e2, t2) => {
      let r$13 = await r({ operation: async () => ({ done: j(e2) === window.location.origin, closed: e2.closed }), until: ({ done: e3, closed: t3 }) => e3 || t3, delay: 0, interval: 500, attempts: 360, signal: t2 });
      return "aborted" === r$13.status ? (e2.close(), { status: "aborted" }) : "max_attempts" === r$13.status ? { status: "timeout" } : r$13.result.done ? (e2.close(), { status: "redirected" }) : { status: "closed" };
    })(e, A2.current.signal);
    if ("aborted" === t$12.status) return;
    if ("closed" === t$12.status) return void x2(false);
    t$12.status;
    let r$12 = await r({ operation: () => f({}), until: (e2) => "active" === e2.status || "rejected" === e2.status, delay: 0, interval: 2e3, attempts: 60, signal: A2.current.signal });
    if ("aborted" !== r$12.status) {
      if ("max_attempts" === r$12.status) return C({ status: "kyc-incomplete" }), void x2(false);
      if (r$12.status, "rejected" === r$12.result.status) return C({ status: "kyc-error", reason: (_b = (_a = r$12.result.rejection_reasons) == null ? void 0 : _a[0]) == null ? void 0 : _b.reason }), b(Error("User KYC rejected.")), void x2(false);
      if ("active" !== r$12.result.status) return C({ status: "kyc-incomplete" }), void x2(false);
      e.closed || e.close(), r$12.result.status;
      try {
        C({ status: "kyc-success" });
        let e2 = await y({ destination: h.destination, provider: h.provider, source: { asset: h.source.selectedAsset } });
        C({ status: "account-details", data: e2 });
      } catch (e2) {
        C({ status: "create-customer-error" }), b(e2);
      } finally {
        x2(false);
      }
    }
  }), [C, b, x2, p2, y, v, h, A2]), I2 = q(((e) => {
    C({ status: "select-amount" }), g$1({ ...h, source: { ...h.source, selectedAsset: e } });
  }), [C, g$1]), T2 = q((() => {
    C({ status: "select-source-asset" });
  }), [C]);
  return u(B, { onClose: q((async () => {
    var _a;
    (_a = A2.current) == null ? void 0 : _a.abort(), w2 ? m(w2) : await u$1();
  }), [w2, A2]), opts: h, state: v, isLoading: k$1, email: t$1.email.address, onAcceptTerms: E2, onSelectAmount: S2, onSelectSource: I2, onEditSourceAsset: T2 });
} };
export {
  z as FundWithBankDepositScreen,
  z as default
};
