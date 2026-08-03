import { dq as g, dr as l, df as d$1, dA as P, dh as y, eJ as g$1, dk as u$1, e_ as Dt, eM as libExports, e$ as F } from "./index-BDOBKk5h.js";
import { n } from "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import { getErrorDetails as N } from "./ConnectionStatusScreen-B750V7KL-CaGqQbTb.js";
import "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
import "./Link-DJ5gq9Di-BQM8IO8i.js";
import "./useI18n-DKN3yZtJ-HL6RIcxE.js";
import "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-BRBz5tu8.js";
const u = ({ walletLogo: t, success: o, errorMessage: r, title: n$1, subtitle: a, onRetry: s, onUseDifferentWallet: m, onBack: c, numRetries: p, maxRetries: u2 }) => /* @__PURE__ */ u$1(n, { title: n$1, subtitle: a, icon: t, iconVariant: "loading", iconLoadingStatus: { success: o, fail: !!r }, primaryCta: r === F.ERROR_USER_EXISTS ? { label: "Use a different wallet", onClick: m } : !o && (r == null ? void 0 : r.retryable) && p < u2 ? { label: "Retry", onClick: s, disabled: !(r == null ? void 0 : r.retryable) || p >= u2 } : !o && r && p >= u2 ? { label: "Use a different wallet", onClick: m } : void 0, onBack: c, watermark: true }), d = { component: () => {
  var _a, _b, _c, _d, _e, _f, _g;
  let i, { navigateBack: l$1, navigate: d2, lastScreen: w, currentScreen: j, data: f, setModalData: y$1 } = g(), { walletConnectionStatus: g$2, closePrivyModal: v } = l(), [h, k] = d$1(void 0), [C, b] = d$1(0), x = P(((_a = g$2 == null ? void 0 : g$2.connector) == null ? void 0 : _a.walletClientType) || "unknown"), S = "connected" === (g$2 == null ? void 0 : g$2.status), R = "switching_to_supported_chain" === (g$2 == null ? void 0 : g$2.status);
  y((() => {
    var _a2, _b2;
    if (S) {
      let e;
      if ((_a2 = f == null ? void 0 : f.externalConnectWallet) == null ? void 0 : _a2.onCompleteNavigateTo) {
        let t = f.externalConnectWallet.onCompleteNavigateTo, o = (_b2 = g$2.connectedWallet) == null ? void 0 : _b2.address;
        e = setTimeout((() => {
          var _a3, _b3;
          if (f.funding && g$2.connector) {
            let e2 = g$2.connector.wallets.find(((e3) => e3.address === o));
            y$1({ ...f, funding: { ...f.funding, connectedWallet: e2 } });
          }
          d2(t({ address: o, walletClientType: (_a3 = g$2.connector) == null ? void 0 : _a3.walletClientType, walletChainType: (_b3 = g$2.connector) == null ? void 0 : _b3.chainType }));
        }), g$1);
      } else e = setTimeout(v, g$1);
      return () => clearTimeout(e);
    }
  }), [S]);
  y((() => {
    var e;
    (g$2 == null ? void 0 : g$2.connectError) && (e = g$2 == null ? void 0 : g$2.connectError, k(N(e)));
  }), [g$2]);
  let T = ((_b = g$2 == null ? void 0 : g$2.connector) == null ? void 0 : _b.connectorType) || "injected", W = ((_c = g$2 == null ? void 0 : g$2.connector) == null ? void 0 : _c.walletClientType) || "unknown", B = ((_d = x == null ? void 0 : x.metadata) == null ? void 0 : _d.shortName) || (x == null ? void 0 : x.name) || ((_e = g$2 == null ? void 0 : g$2.connector) == null ? void 0 : _e.walletBranding.name) || "Browser Extension", E = ((_f = x == null ? void 0 : x.image_url) == null ? void 0 : _f.md) || ((_g = g$2 == null ? void 0 : g$2.connector) == null ? void 0 : _g.walletBranding.icon) || ((t) => /* @__PURE__ */ u$1(Dt, { ...t })), M = "Browser Extension" === B ? B.toLowerCase() : B;
  i = S ? `Successfully connected with ${M}` : h ? h.message : R ? "Switching networks" : `Waiting for ${M}`;
  let _ = "Don’t see your wallet? Check your other browser windows.";
  return S ? _ = "You’re good to go!" : C >= 2 && h ? _ = "Unable to connect wallet" : h ? _ = h.detail : R ? _ = "Switch your wallet to the requested network." : "metamask" === W && libExports.isMobile ? _ = "Click to continue to open and connect MetaMask." : "metamask" === W ? _ = "For the best experience, connect only one wallet at a time." : "wallet_connect_v2" === T ? _ = "Open your mobile wallet app to continue" : "coinbase_wallet" === T && (_ = "Confirm in the Coinbase app/popup to continue."), /* @__PURE__ */ u$1(u, { walletName: B, walletLogo: E, success: S, errorMessage: h, title: i, subtitle: _, onRetry: () => {
    b(C + 1), k(void 0), g$2 == null ? void 0 : g$2.connectRetry();
  }, onUseDifferentWallet: l$1, onBack: j === w ? void 0 : l$1, numRetries: C, maxRetries: 2 });
} };
export {
  d as ConnectOnlyStatusScreen,
  u as ConnectOnlyStatusScreenView,
  d as default
};
