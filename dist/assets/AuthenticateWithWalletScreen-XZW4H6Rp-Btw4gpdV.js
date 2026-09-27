import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-CPWVoOsP.js';
import { G } from './ConnectWalletView-BLywHxyt-Ck_KIMHx.js';
import './QrCode-cA9rnMIN-BaS5NaEj.js';
import './ModalFooter-BldNwiHO-D8r0EtXN.js';
import './CopyableText-CQapvaMr-BC6EPVyg.js';
import './check-BXl8y-gf.js';
import './createLucideIcon-7kZA5_hm.js';
import './copy-xj9gnyrS.js';
import './Link-BdDilT2T-DK8BWx-4.js';
import './EmailInputForm-Cqo1mda8-XOxmYzx5.js';
import './ErrorMessage-D8VaAP5m-BgSPkV-n.js';
import './useI18n-DJGbXMkU-BAkUWLlE.js';
import './WalletCards-DH1rqayz-OAg4N9V2.js';
import './styles-DVyDvTdj-C1riE7XH.js';
import './Screen-Dtn4lspb-D7quXLJv.js';
import './index-CWARkn2w-BCsAGrk1.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
