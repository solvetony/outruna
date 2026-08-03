import { df as d, dv as k$1, dr as l, dl as le, dq as g$1, dh as y$1, dk as u, dG as S, fl as e, du as gt, dg as A } from "./index-CgfjQyaX.js";
import { t } from "./WarningBanner-D5LqDt95-DtnGbxYu.js";
import { j } from "./WalletInfoCard-pBDMfJDY-0BWCNNAM.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import "./ExclamationTriangleIcon-BAkWm5uM.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./ErrorMessage-D8VaAP5m-umt8waQV.js";
import "./LabelXs-oqZNqbm_-Bh6p_OUd.js";
import "./Address--RvzbtOt-Kopf9RVe.js";
import "./check-2w7g-C8Q.js";
import "./createLucideIcon-Buh6I6L_.js";
import "./copy-aH_6aZ6z.js";
import "./shared-FM0rljBt-B1NdgcRQ.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
const y = ({ address: o, hideWalletAddress: i, accessToken: n$1, appConfigTheme: a, onClose: l2, exportButtonProps: p, onBack: c }) => /* @__PURE__ */ u(n, { title: "Export wallet", subtitle: /* @__PURE__ */ u(S, { children: ["Copy either your private key or seed phrase to export your wallet.", " ", /* @__PURE__ */ u("a", { href: "https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828", target: "blank", rel: "noopener noreferrer", children: "Learn more" })] }), onClose: l2, onBack: c, showBack: !!c, watermark: true, children: /* @__PURE__ */ u(f, { children: [/* @__PURE__ */ u(t, { theme: a, children: "Never share your private key or seed phrase with anyone." }), !i && /* @__PURE__ */ u(j, { title: "Your wallet", address: o, showCopyButton: true }), /* @__PURE__ */ u("div", { style: { width: "100%" }, children: n$1 && p && /* @__PURE__ */ u(v, { accessToken: n$1, dimensions: { height: "44px" }, ...p }) })] }) });
let f = gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;
function g({ chainType: e2, imported: t2, isUnifiedWallet: r }) {
  return !t2 && (r ? "ethereum" === e2 || "bitcoin-taproot" === e2 || "pearl" === e2 : "ethereum" === e2);
}
function v(r) {
  let [a, l2] = d(r.dimensions.width), [d$1, s] = d(false), [p, c] = d(void 0), m = A(null);
  y$1((() => {
    if (m.current && void 0 === a) {
      let { width: e3 } = m.current.getBoundingClientRect();
      l2(e3);
    }
    let e2 = getComputedStyle(document.documentElement);
    c({ background: e2.getPropertyValue("--privy-color-background"), background2: e2.getPropertyValue("--privy-color-background-2"), foreground3: e2.getPropertyValue("--privy-color-foreground-3"), foregroundAccent: e2.getPropertyValue("--privy-color-foreground-accent"), accent: e2.getPropertyValue("--privy-color-accent"), accentDark: e2.getPropertyValue("--privy-color-accent-dark"), success: e2.getPropertyValue("--privy-color-success"), colorScheme: e2.getPropertyValue("color-scheme") });
  }), []);
  let u$1 = g({ chainType: r.chainType, imported: r.imported, isUnifiedWallet: r.isUnifiedWallet });
  return u("div", { ref: m, children: a && /* @__PURE__ */ u(w, { children: [/* @__PURE__ */ u("iframe", { style: { position: "absolute", zIndex: 1, opacity: d$1 ? 1 : 0, transition: "opacity 50ms ease-in-out", pointerEvents: d$1 ? "auto" : "none" }, onLoad: () => setTimeout((() => s(true)), 1500), width: a, height: r.dimensions.height, allow: "clipboard-write self *", src: x({ origin: r.origin, appId: r.appId, appClientId: r.appClientId, walletId: r.walletId, entropyId: r.entropyId, entropyIdVerifier: r.entropyIdVerifier, hdWalletIndex: r.hdWalletIndex, chainType: r.chainType, accessToken: r.accessToken, clientAnalyticsId: r.clientAnalyticsId, width: a, palette: p, isUnifiedWallet: r.isUnifiedWallet, exportSeedPhrase: u$1 }) }), /* @__PURE__ */ u(k, { children: "Loading..." }), u$1 && /* @__PURE__ */ u(k, { children: "Loading..." })] }) });
}
const I = { component: () => {
  let [t2, r] = d(null), { authenticated: n2, user: a } = k$1(), { closePrivyModal: l$1, createAnalyticsEvent: d$1, clientAnalyticsId: s, client: h } = l(), f2 = le(), { data: g2, onUserCloseViaDialogOrKeybindRef: v2 } = g$1(), { onFailure: I2, onSuccess: x2, origin: w2, appId: k2, appClientId: j2, entropyId: b, entropyIdVerifier: T, walletId: W, hdWalletIndex: C, chainType: A2, address: _, uiOptions: P, isUnifiedWallet: V, imported: S2, showBackButton: B } = g2.keyExport, U = (e2) => {
    l$1({ shouldCallAuthOnSuccess: false }), I2("string" == typeof e2 ? Error(e2) : e2);
  }, L = () => {
    l$1({ shouldCallAuthOnSuccess: false }), x2(), d$1({ eventName: "embedded_wallet_key_export_completed", payload: { walletAddress: _ } });
  };
  return y$1((() => {
    if (!n2) return U("User must be authenticated before exporting their wallet");
    h.getAccessToken().then(r).catch(U);
  }), [n2, a]), v2.current = L, /* @__PURE__ */ u(y, { address: _, hideWalletAddress: P == null ? void 0 : P.hideWalletAddress, accessToken: t2, appConfigTheme: f2.appearance.palette.colorScheme, onClose: L, isLoading: !t2, onBack: B ? L : void 0, exportButtonProps: t2 ? { origin: w2, appId: k2, appClientId: j2, clientAnalyticsId: s, entropyId: b, entropyIdVerifier: T, walletId: W, hdWalletIndex: C, isUnifiedWallet: V, imported: S2, chainType: A2 } : void 0 });
} };
function x({ origin: e$1, appId: t2, appClientId: r, walletId: o, entropyId: i, entropyIdVerifier: n2, hdWalletIndex: a, chainType: d2, accessToken: s, clientAnalyticsId: p, width: c, palette: m, isUnifiedWallet: u2, exportSeedPhrase: h }) {
  return e({ origin: e$1, path: `/apps/${t2}/embedded-wallets/export`, query: u2 ? { v: "1-unified", wallet_id: o, client_id: r, width: `${c}px`, caid: p, phrase_export: h, ...m } : { v: "1", entropy_id: i, entropy_id_verifier: n2, hd_wallet_index: a, chain_type: d2, client_id: r, width: `${c}px`, caid: p, phrase_export: h, ...m }, hash: { token: s } });
}
let w = gt.div`
  overflow: visible;
  position: relative;
  height: 44px;
  display: flex;
  gap: 12px;
`, k = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`;
export {
  I as EmbeddedWalletKeyExportScreen,
  y as EmbeddedWalletKeyExportView,
  x as constructWalletExportIframeUrl,
  I as default,
  g as supportsSeedPhraseExport
};
