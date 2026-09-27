import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-DDjfO02D.js';
import { G } from './ConnectWalletView-BLywHxyt-07LRHkvK.js';
import './QrCode-cA9rnMIN-DJPng1s6.js';
import './ModalFooter-BldNwiHO-BklRY9cv.js';
import './CopyableText-CQapvaMr-C3Mvcytz.js';
import './check-Dmr-8dGC.js';
import './createLucideIcon-CWMX0QqL.js';
import './copy-BJ5CBitb.js';
import './Link-BdDilT2T-a8stdtNe.js';
import './EmailInputForm-Cqo1mda8-FLrKbuOy.js';
import './ErrorMessage-D8VaAP5m-qLAmHK2H.js';
import './useI18n-DJGbXMkU-BBs9teAr.js';
import './WalletCards-DH1rqayz-B4TZYc2R.js';
import './styles-DVyDvTdj-Q510vQ8C.js';
import './Screen-Dtn4lspb-nV3xrt6d.js';
import './index-CWARkn2w-DWGx9aSh.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
