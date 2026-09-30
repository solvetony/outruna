import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-T4wFPK-1.js';
import { G } from './ConnectWalletView-BLywHxyt-bUiq9GZf.js';
import './QrCode-cA9rnMIN-CP0DPy9c.js';
import './ModalFooter-BldNwiHO-DOq4X--X.js';
import './CopyableText-CQapvaMr-CKltITDe.js';
import './check-CEYGhwsS.js';
import './createLucideIcon-D2QVbWEk.js';
import './copy-BbArdKMg.js';
import './Link-BdDilT2T-DdKZRrvo.js';
import './EmailInputForm-Cqo1mda8-D4chwA50.js';
import './ErrorMessage-D8VaAP5m-Bua5MTgz.js';
import './useI18n-DJGbXMkU-CLTK7NlS.js';
import './WalletCards-DH1rqayz-BdPf_m0g.js';
import './styles-DVyDvTdj-gcJw1J1w.js';
import './Screen-Dtn4lspb-D1wqSy9e.js';
import './index-CWARkn2w-DtN5UQ2e.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
