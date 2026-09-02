import { dd as D, dm as k$1, dr as l, dq as g, df as d, dk as u, dG as S$1, dl as le, du as gt } from "./index-R3UC2dO4.js";
import { F as ForwardRef$1 } from "./ExclamationTriangleIcon-Lzgwx4vO.js";
import { F as ForwardRef$2 } from "./WalletIcon-CNZGRrot.js";
import { T as T$1, m, $ as $$1, u as u$1 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { i } from "./StackedContainer-B2vaEl56-Dn2chFG6.js";
import { d as d$1 } from "./Address--RvzbtOt-CHKyld_u.js";
import { e } from "./capitalizeFirstLetter-DmLYqXsO-IVpzf22j.js";
import { F as ForwardRef$3 } from "./ExclamationCircleIcon-H5hBYS3U.js";
import "./check-Di0e4xHX.js";
import "./createLucideIcon-COMOll4V.js";
import "./copy-C3pj4YGq.js";
function Square2StackIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ k$1("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ k$1("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ k$1("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
  }));
}
const ForwardRef = /* @__PURE__ */ D(Square2StackIcon);
const v = gt.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${(e2) => e2.color ?? "var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
    border-bottom-color: ${(e2) => e2.color ?? "var(--privy-color-accent)"};
  }
`;
function b(o) {
  return u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", ...o, children: [/* @__PURE__ */ u("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ u("line", { x1: "12", x2: "12", y1: "8", y2: "12" }), /* @__PURE__ */ u("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })] });
}
const w = ({ onTransfer: e2, isTransferring: o, transferSuccess: t }) => /* @__PURE__ */ u(m, { ...t ? { success: true, children: "Success!" } : { warn: true, loading: o, onClick: e2, children: "Transfer and delete account" } }), T = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`, k = gt.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`, C = gt.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`, A = gt(ForwardRef$3)`
  position: relative;
  width: ${({ $iconSize: e2 }) => `${e2}px`};
  height: ${({ $iconSize: e2 }) => `${e2}px`};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`, j = gt(ForwardRef)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`, S = gt.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`, I = gt.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`, W = gt.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
let M = () => /* @__PURE__ */ u(W, { children: /* @__PURE__ */ u(A, { $iconSize: 60 }) });
const $ = ({ address: t, onClose: i2, onRetry: a, onTransfer: l2, isTransferring: d2, transferSuccess: u$2 }) => {
  var _a;
  let { defaultChain: m2 } = le(), h = ((_a = m2.blockExplorers) == null ? void 0 : _a.default.url) ?? "https://etherscan.io";
  return u(S$1, { children: [/* @__PURE__ */ u(T$1, { onClose: i2, backFn: a }), /* @__PURE__ */ u(T, { children: [/* @__PURE__ */ u(M, {}), /* @__PURE__ */ u(k, { children: [/* @__PURE__ */ u("h3", { children: "Check account assets before transferring" }), /* @__PURE__ */ u("p", { children: "Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost." }), /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u("p", { children: " To check your balance, you can:" }), /* @__PURE__ */ u(I, { children: "Log out and log back into the other account, or " }), /* @__PURE__ */ u(I, { children: ["Copy your wallet address and use a", " ", /* @__PURE__ */ u("u", { children: /* @__PURE__ */ u("a", { target: "_blank", href: h, children: "block explorer" }) }), " ", "to see if the account holds any assets."] })] }), /* @__PURE__ */ u(C, { onClick: () => navigator.clipboard.writeText(t).catch(console.error), children: [/* @__PURE__ */ u(ForwardRef$2, { color: "var(--privy-color-foreground-1)", strokeWidth: 2, height: "28px", width: "28px" }), /* @__PURE__ */ u(d$1, { address: t, showCopyIcon: false }), /* @__PURE__ */ u(j, {})] }), /* @__PURE__ */ u(w, { onTransfer: l2, isTransferring: d2, transferSuccess: u$2 })] })] }), /* @__PURE__ */ u(u$1, {})] });
}, z = { component: () => {
  let { initiateAccountTransfer: e2, closePrivyModal: o } = l(), { data: t, navigate: n, lastScreen: a, setModalData: s } = g(), [c, l$1] = d(void 0), [d$12, u$12] = d(false), [p, f] = d(false), g$1 = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    try {
      if (!((_a = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _a.nonce) || !((_b = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _b.account)) throw Error("missing account transfer inputs");
      f(true), await e2({ nonce: (_c = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _c.nonce, account: (_d = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _d.account, accountType: (_e = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _e.linkMethod, externalWalletMetadata: (_f = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _f.externalWalletMetadata, telegramWebAppData: (_g = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _g.telegramWebAppData, telegramAuthResult: (_h = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _h.telegramAuthResult, farcasterEmbeddedAddress: (_i = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _i.farcasterEmbeddedAddress, oAuthUserInfo: (_j = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _j.oAuthUserInfo }), u$12(true), f(false), setTimeout(o, 1e3);
    } catch (e3) {
      s({ errorModalData: { error: e3, previousScreen: a || "LinkConflictScreen" } }), n("ErrorScreen", true);
    }
  };
  return c ? /* @__PURE__ */ u($, { address: c, onClose: o, onRetry: () => l$1(void 0), onTransfer: g$1, isTransferring: p, transferSuccess: d$12 }) : /* @__PURE__ */ u(E, { onClose: o, onInfo: () => {
    var _a;
    return l$1((_a = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _a.embeddedWalletAddress);
  }, onContinue: () => {
    var _a;
    return l$1((_a = t == null ? void 0 : t.accountTransfer) == null ? void 0 : _a.embeddedWalletAddress);
  }, onTransfer: g$1, isTransferring: p, transferSuccess: d$12, data: t });
} }, E = ({ onClose: n, onContinue: i$1, onInfo: d2, onTransfer: p, transferSuccess: m$1, isTransferring: h, data: g2 }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!((_a = g2 == null ? void 0 : g2.accountTransfer) == null ? void 0 : _a.linkMethod) || !((_b = g2 == null ? void 0 : g2.accountTransfer) == null ? void 0 : _b.displayName)) return;
  let x = { method: (_c = g2 == null ? void 0 : g2.accountTransfer) == null ? void 0 : _c.linkMethod, handle: (_d = g2 == null ? void 0 : g2.accountTransfer) == null ? void 0 : _d.displayName, disclosedAccount: ((_e = g2 == null ? void 0 : g2.accountTransfer) == null ? void 0 : _e.embeddedWalletAddress) ? { type: "wallet", handle: (_f = g2 == null ? void 0 : g2.accountTransfer) == null ? void 0 : _f.embeddedWalletAddress } : void 0 };
  return u(S$1, { children: [/* @__PURE__ */ u(T$1, { closeable: true }), /* @__PURE__ */ u(T, { children: [/* @__PURE__ */ u(i, { children: /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u(v, { color: "var(--privy-color-error)" }), /* @__PURE__ */ u(ForwardRef$1, { height: 38, width: 38, stroke: "var(--privy-color-error)" })] }) }), /* @__PURE__ */ u(k, { children: [/* @__PURE__ */ u("h3", { children: [(function(e$1) {
    switch (e$1) {
      case "sms":
        return "Phone number";
      case "email":
        return "Email address";
      case "siwe":
        return "Wallet address";
      case "siws":
        return "Solana wallet address";
      case "linkedin":
        return "LinkedIn profile";
      case "google":
      case "apple":
      case "discord":
      case "github":
      case "instagram":
      case "spotify":
      case "tiktok":
      case "line":
      case "twitch":
      case "twitter":
      case "telegram":
      case "farcaster":
        return `${e(e$1.replace("_oauth", ""))} profile`;
      default:
        return e$1.startsWith("privy:") ? "Cross-app account" : e$1;
    }
  })(x.method), " is associated with another account"] }), /* @__PURE__ */ u("p", { children: ["Do you want to transfer", /* @__PURE__ */ u("b", { children: x.handle ? ` ${x.handle}` : "" }), " to this account instead? This will delete your other account."] }), /* @__PURE__ */ u(L, { onClick: d2, disclosedAccount: x.disclosedAccount })] }), /* @__PURE__ */ u(k, { style: { gap: 12, marginTop: 12 }, children: [((_g = g2 == null ? void 0 : g2.accountTransfer) == null ? void 0 : _g.embeddedWalletAddress) ? /* @__PURE__ */ u(m, { onClick: i$1, children: "Continue" }) : /* @__PURE__ */ u(w, { onTransfer: p, transferSuccess: m$1, isTransferring: h }), /* @__PURE__ */ u($$1, { onClick: n, children: "No thanks" })] })] }), /* @__PURE__ */ u(u$1, {})] });
};
function L({ disclosedAccount: o, onClick: t }) {
  return o ? /* @__PURE__ */ u(C, { onClick: t, children: [/* @__PURE__ */ u(ForwardRef$2, { color: "var(--privy-color-foreground-1)", strokeWidth: 2, height: "28px", width: "28px" }), /* @__PURE__ */ u(d$1, { address: o.handle, showCopyIcon: false }), /* @__PURE__ */ u(b, { width: 15, height: 15, color: "var(--privy-color-foreground-3)", style: { marginLeft: "auto" } })] }) : null;
}
export {
  z as LinkConflictScreen,
  E as LinkConflictScreenView,
  z as default
};
