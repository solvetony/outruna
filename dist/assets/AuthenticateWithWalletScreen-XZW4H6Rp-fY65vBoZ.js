import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-DEbwNYcQ.js';
import { G } from './ConnectWalletView-BLywHxyt-BFT3ISHG.js';
import './QrCode-cA9rnMIN-BP6WOt4m.js';
import './ModalFooter-BldNwiHO-DThenGPE.js';
import './CopyableText-CQapvaMr-D-XujDM3.js';
import './check-CWHeC4Xl.js';
import './createLucideIcon-B1GGFk-z.js';
import './copy-wl4rCDd_.js';
import './Link-BdDilT2T-CLiTozG7.js';
import './EmailInputForm-Cqo1mda8-dfr5ILay.js';
import './ErrorMessage-D8VaAP5m-CyvmLEo8.js';
import './useI18n-DJGbXMkU-D7z2bpld.js';
import './WalletCards-DH1rqayz-tIhEf8yE.js';
import './styles-DVyDvTdj-CVbkbha_.js';
import './Screen-Dtn4lspb-DzeyLZAC.js';
import './index-CWARkn2w-DFl7VzFA.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
