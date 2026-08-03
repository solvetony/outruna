import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i } from "./index-CgfjQyaX.js";
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
const c = { component: () => {
  var _a, _b, _c, _d, _e;
  let { closePrivyModal: c2 } = l(), { data: s, navigate: p } = g(), d = le(), u$2 = u(), C = (_a = s == null ? void 0 : s.externalConnectWallet) == null ? void 0 : _a.description, j = A(((_b = s == null ? void 0 : s.externalConnectWallet) == null ? void 0 : _b.walletList) ?? d.appearance.walletList), E = A(((_c = s == null ? void 0 : s.externalConnectWallet) == null ? void 0 : _c.walletChainType) ?? d.appearance.walletChainType);
  return u$1(G, { walletList: j.current, walletChainType: E.current, preSelectedWalletId: (_d = s == null ? void 0 : s.externalConnectWallet) == null ? void 0 : _d.preSelectedWalletId, hideHeader: (_e = s == null ? void 0 : s.externalConnectWallet) == null ? void 0 : _e.hideHeader, onBack: (s == null ? void 0 : s.funding) ? () => p("FundingMethodSelectionScreen") : void 0, onClose: () => {
    u$2("connectWallet", "onError", i.GENERIC_CONNECT_WALLET_ERROR), c2();
  }, onConnect: ({ connector: e, wallet: t2 }) => {
    var _a2;
    u$2("connectWallet", "onSuccess", { wallet: t2 });
    let o = (_a2 = s == null ? void 0 : s.externalConnectWallet) == null ? void 0 : _a2.onCompleteNavigateTo;
    o ? p(o({ address: t2.address, walletClientType: e == null ? void 0 : e.walletClientType, walletChainType: e == null ? void 0 : e.chainType })) : c2();
  }, onConnectError: (e) => {
    e instanceof t ? (console.warn(e.cause ? e.cause : e.message), u$2("connectWallet", "onError", e.privyErrorCode || i.GENERIC_CONNECT_WALLET_ERROR)) : (console.warn(e), u$2("connectWallet", "onError", i.UNKNOWN_CONNECT_WALLET_ERROR));
  }, customDescription: C, app: d, connectOnly: true });
}, isUnauthenticatedScreem: true };
export {
  c as ConnectOnlyLandingScreen,
  c as default
};
