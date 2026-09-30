import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-DxRFR8hM.js';
import { G } from './ConnectWalletView-BLywHxyt-D3Moly74.js';
import './QrCode-cA9rnMIN-D5Va9l6O.js';
import './ModalFooter-BldNwiHO-CAK259Rx.js';
import './CopyableText-CQapvaMr-DdJhhj-T.js';
import './check-WVyhGQqC.js';
import './createLucideIcon-7jC--uXn.js';
import './copy-z1OYu9qN.js';
import './Link-BdDilT2T-ByDlSUou.js';
import './EmailInputForm-Cqo1mda8-CZMGBxs-.js';
import './ErrorMessage-D8VaAP5m-Bh8Op0K7.js';
import './useI18n-DJGbXMkU-DtUJXBfU.js';
import './WalletCards-DH1rqayz-CObYWI4a.js';
import './styles-DVyDvTdj-xzCe7AHH.js';
import './Screen-Dtn4lspb-1YuYN1AW.js';
import './index-CWARkn2w-CpyfWGWH.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
