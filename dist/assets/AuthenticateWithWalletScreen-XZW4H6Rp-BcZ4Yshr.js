import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-CJFVVi7O.js';
import { G } from './ConnectWalletView-BLywHxyt-B7NHkMOF.js';
import './QrCode-cA9rnMIN-BCSeuZgg.js';
import './ModalFooter-BldNwiHO-D0P01Kr1.js';
import './CopyableText-CQapvaMr-BH4imqMy.js';
import './check-jNi6zo6s.js';
import './createLucideIcon-D7t36zIR.js';
import './copy-DpjgEwtJ.js';
import './Link-BdDilT2T-CR0_eLbo.js';
import './EmailInputForm-Cqo1mda8-CcW8gRjH.js';
import './ErrorMessage-D8VaAP5m-wjwy_aip.js';
import './useI18n-DJGbXMkU-QI_IFwbB.js';
import './WalletCards-DH1rqayz-CWIy9Z0r.js';
import './styles-DVyDvTdj-BQCOJf_K.js';
import './Screen-Dtn4lspb-C2e6NFJH.js';
import './index-CWARkn2w-AkhPUeIY.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
