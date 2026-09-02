import { dq as g, dl as le, dr as l, df as d, dg as A, dh as y$1, eJ as g$1, dk as u, eM as libExports, eX as P, du as gt } from "./index-lNx1hHWy.js";
import { h } from "./CopyToClipboard-DSTf_eKU-luczttZi.js";
import { n } from "./OpenLink-DZHy38vr-DlVFHELR.js";
import { C as C$1 } from "./QrCode-mmar0Iu7-CSGOoq2V.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import { l as l$1 } from "./farcaster-DPlSjvF5-Bxerj_2p.js";
import "./dijkstra-DpzGW89u.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
let y = "#8a63d2";
const j = ({ appName: r, loading: o, success: a, errorMessage: n$2, connectUri: d2, onBack: u$1, onClose: g2, onOpenFarcaster: h$1 }) => /* @__PURE__ */ u(n$1, libExports.isMobile || o ? libExports.isIOS ? { title: n$2 ? n$2.message : "Add a signer to Farcaster", subtitle: n$2 ? n$2.detail : `This will allow ${r} to add casts, likes, follows, and more on your behalf.`, icon: l$1, iconVariant: "loading", iconLoadingStatus: { success: a, fail: !!n$2 }, primaryCta: d2 && h$1 ? { label: "Open Farcaster app", onClick: h$1 } : void 0, onBack: u$1, onClose: g2, watermark: true } : { title: n$2 ? n$2.message : "Requesting signer from Farcaster", subtitle: n$2 ? n$2.detail : "This should only take a moment", icon: l$1, iconVariant: "loading", iconLoadingStatus: { success: a, fail: !!n$2 }, onBack: u$1, onClose: g2, watermark: true, children: d2 && libExports.isMobile && /* @__PURE__ */ u(x, { children: /* @__PURE__ */ u(n, { text: "Take me to Farcaster", url: d2, color: y }) }) } : { title: "Add a signer to Farcaster", subtitle: `This will allow ${r} to add casts, likes, follows, and more on your behalf.`, onBack: u$1, onClose: g2, watermark: true, children: /* @__PURE__ */ u(k, { children: [/* @__PURE__ */ u(w, { children: d2 ? /* @__PURE__ */ u(C$1, { url: d2, size: 275, squareLogoElement: l$1 }) : /* @__PURE__ */ u(b, { children: /* @__PURE__ */ u(P, {}) }) }), /* @__PURE__ */ u(C, { children: [/* @__PURE__ */ u(S, { children: "Or copy this link and paste it into a phone browser to open the Farcaster app." }), d2 && /* @__PURE__ */ u(h, { text: d2, itemName: "link", color: y })] })] }) });
let x = gt.div`
  margin-top: 24px;
`, k = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`, w = gt.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`, C = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`, S = gt.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`, b = gt.div`
  position: relative;
  width: 82px;
  height: 82px;
`;
const T = { component: () => {
  let { lastScreen: t, navigateBack: i, data: s } = g(), n2 = le(), { requestFarcasterSignerStatus: l$12, closePrivyModal: c } = l(), [m, p] = d(void 0), [f, v] = d(false), [y2, x2] = d(false), k2 = A([]), w2 = s == null ? void 0 : s.farcasterSigner;
  y$1((() => {
    let e = Date.now(), t2 = setInterval((async () => {
      if (!(w2 == null ? void 0 : w2.public_key)) return clearInterval(t2), void p({ retryable: true, message: "Connect failed", detail: "Something went wrong. Please try again." });
      "approved" === w2.status && (clearInterval(t2), v(false), x2(true), k2.current.push(setTimeout((() => c({ shouldCallAuthOnSuccess: false, isSuccess: true })), g$1)));
      let r = await l$12(w2 == null ? void 0 : w2.public_key), o = Date.now() - e;
      "approved" === r.status ? (clearInterval(t2), v(false), x2(true), k2.current.push(setTimeout((() => c({ shouldCallAuthOnSuccess: false, isSuccess: true })), g$1))) : o > 3e5 ? (clearInterval(t2), p({ retryable: true, message: "Connect failed", detail: "The request timed out. Try again." })) : "revoked" === r.status && (clearInterval(t2), p({ retryable: true, message: "Request rejected", detail: "The request was rejected. Please try again." }));
    }), 2e3);
    return () => {
      clearInterval(t2), k2.current.forEach(((e2) => clearTimeout(e2)));
    };
  }), []);
  let C2 = "pending_approval" === (w2 == null ? void 0 : w2.status) ? w2.signer_approval_url : void 0;
  return u(j, { appName: n2.name, loading: f, success: y2, errorMessage: m, connectUri: C2, onBack: t ? i : void 0, onClose: c, onOpenFarcaster: () => {
    C2 && (window.location.href = C2);
  } });
} };
export {
  T as FarcasterSignerStatusScreen,
  j as FarcasterSignerStatusView,
  T as default
};
