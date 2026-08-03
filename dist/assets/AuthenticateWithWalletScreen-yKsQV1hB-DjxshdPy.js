import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i, de as q } from "./index-BDOBKk5h.js";
import { G } from "./ConnectWalletView-CRfPxova-BuNARTz-.js";
import "./QrCode-mmar0Iu7-DTW8t88O.js";
import "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import "./CopyableText-ChtfBWx4-BMdPMhWy.js";
import "./check-BeAd3IiM.js";
import "./createLucideIcon-Bh-mHKe7.js";
import "./copy-Ws1Rb_R3.js";
import "./Link-DJ5gq9Di-BQM8IO8i.js";
import "./EmailInputForm-Dgoii4vf-8SPcv9_o.js";
import "./ErrorMessage-D8VaAP5m-Dl-cYhnb.js";
import "./useI18n-DKN3yZtJ-HL6RIcxE.js";
import "./WalletCards-DH1rqayz-DuA_2fhr.js";
import "./styles-DVyDvTdj-BNn7dsEb.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
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
