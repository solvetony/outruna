import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i } from './index-BzZ64suB.js';
import { G } from './ConnectWalletView-CRfPxova-IT2Iuh0L.js';
import './QrCode-mmar0Iu7-ZFgO0LQJ.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './CopyableText-ChtfBWx4-By_tlTRH.js';
import './check-B4HAls8G.js';
import './createLucideIcon-BUXdLDa7.js';
import './copy-BHYMHz7f.js';
import './Link-DJ5gq9Di-BtQzNMdI.js';
import './EmailInputForm-Dgoii4vf-B5-gOGgx.js';
import './ErrorMessage-D8VaAP5m-DSCgb487.js';
import './useI18n-DKN3yZtJ-yVJx1OiU.js';
import './WalletCards-DH1rqayz-CVnPeSw5.js';
import './styles-DVyDvTdj-JOMSpsLc.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';
import './dijkstra-3x-KSy8X.js';

const c={component:()=>{let{closePrivyModal:c}=l(),{data:s,navigate:p}=g(),d=le(),u$2=u(),C=s?.externalConnectWallet?.description,j=A(s?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(s?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:s?.externalConnectWallet?.preSelectedWalletId,hideHeader:s?.externalConnectWallet?.hideHeader,onBack:s?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),c();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=s?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):c();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { c as ConnectOnlyLandingScreen, c as default };
