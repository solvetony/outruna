import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i, de as q } from './index-BzZ64suB.js';
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

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=g(),C=le(),W=u(),x=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),v=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),w=f.current,E=v.current,h="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:w,walletChainType:E,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:h,customDescription:x||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
