import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i, de as q } from "./index-CgfjQyaX.js";
import { G } from "./ConnectWalletView-CRfPxova-CacaQN-W.js";
import "./QrCode-mmar0Iu7-DGm2SHXF.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./CopyableText-ChtfBWx4-Capfc98f.js";
import "./check-2w7g-C8Q.js";
import "./createLucideIcon-Buh6I6L_.js";
import "./copy-aH_6aZ6z.js";
import "./Link-DJ5gq9Di-kobDJZqS.js";
import "./EmailInputForm-Dgoii4vf-pRwzKga0.js";
import "./ErrorMessage-D8VaAP5m-umt8waQV.js";
import "./useI18n-DKN3yZtJ-DSX3AHwt.js";
import "./WalletCards-DH1rqayz-3HZBg3dP.js";
import "./styles-DVyDvTdj-BXh9kezW.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
import "./dijkstra-DpzGW89u.js";
const s = { component: () => {
  var _a, _b, _c, _d, _e, _f;
  let { setWalletConnectionStatus: s2, closePrivyModal: p, inProgressAuthFlowRef: u$2 } = l(), { data: d, navigate: j } = g(), C = le(), W = u(), x = (_a = d == null ? void 0 : d.externalConnectWallet) == null ? void 0 : _a.description, f = A(((_b = d == null ? void 0 : d.externalConnectWallet) == null ? void 0 : _b.walletList) ?? C.appearance.walletList), v = A(((_c = d == null ? void 0 : d.externalConnectWallet) == null ? void 0 : _c.walletChainType) ?? C.appearance.walletChainType), w = f.current, E = v.current, h = "link" === u$2.current ? void 0 : () => j("LandingScreen");
  return u$1(G, { walletList: w, walletChainType: E, onClose: p, onConnect: q((({ connector: e, wallet: t2 }) => {
    var _a2;
    W("connectWallet", "onSuccess", { wallet: t2 }), s2({ status: "connected", connectedWallet: t2, connector: e, connectError: null, connectRetry: () => null }), j("ConnectionStatusScreen", !((_a2 = d == null ? void 0 : d.externalConnectWallet) == null ? void 0 : _a2.preSelectedWalletId));
  }), [s2, j, (_d = d == null ? void 0 : d.login) == null ? void 0 : _d.disableSignup, (_e = d == null ? void 0 : d.externalConnectWallet) == null ? void 0 : _e.preSelectedWalletId]), onConnectError: (e) => {
    e instanceof t ? (console.warn(e.cause ? e.cause : e.message), W("connectWallet", "onError", e.privyErrorCode || i.GENERIC_CONNECT_WALLET_ERROR)) : (console.warn(e), W("connectWallet", "onError", i.UNKNOWN_CONNECT_WALLET_ERROR));
  }, onBack: h, customDescription: x || "", preSelectedWalletId: (_f = d == null ? void 0 : d.externalConnectWallet) == null ? void 0 : _f.preSelectedWalletId, app: C });
}, isUnauthenticatedScreem: true };
export {
  s as AuthenticateWithWalletScreen,
  s as default
};
