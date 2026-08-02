import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i, de as q } from "./index-Cw7cGahV.js";
import { G } from "./ConnectWalletView-CRfPxova-D3p00Ops.js";
import "./QrCode-mmar0Iu7-WAqIc_VT.js";
import "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import "./CopyableText-ChtfBWx4-DF8vOgAn.js";
import "./check-pJYqNiWi.js";
import "./createLucideIcon-vpjfwHTJ.js";
import "./copy-Dc_XQleO.js";
import "./Link-DJ5gq9Di-BpIfoUYW.js";
import "./EmailInputForm-Dgoii4vf-C7QIrqSR.js";
import "./ErrorMessage-D8VaAP5m-ClsdzmKI.js";
import "./useI18n-DKN3yZtJ-ClknEg9z.js";
import "./WalletCards-DH1rqayz-BHKg1kSO.js";
import "./styles-DVyDvTdj-ow5EEkXR.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
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
