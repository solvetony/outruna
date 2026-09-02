import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i } from "./index-lNx1hHWy.js";
import { G } from "./ConnectWalletView-CRfPxova-BhuH2oHG.js";
import "./QrCode-mmar0Iu7-CSGOoq2V.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./CopyableText-ChtfBWx4-GESDcx20.js";
import "./check-B9O9qcRC.js";
import "./createLucideIcon-BMDFWGQC.js";
import "./copy-CWKwr4tz.js";
import "./Link-DJ5gq9Di-DcG0EoHN.js";
import "./EmailInputForm-Dgoii4vf-CTopsP55.js";
import "./ErrorMessage-D8VaAP5m-fXJKPRNA.js";
import "./useI18n-DKN3yZtJ-By0UJr3j.js";
import "./WalletCards-DH1rqayz-CPxqOiXx.js";
import "./styles-DVyDvTdj-DFNPIyel.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
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
