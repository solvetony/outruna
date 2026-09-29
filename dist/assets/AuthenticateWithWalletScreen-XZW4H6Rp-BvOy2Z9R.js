import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-3FkWxgIP.js';
import { G } from './ConnectWalletView-BLywHxyt-z6hW9gE1.js';
import './QrCode-cA9rnMIN-jV0FRQkI.js';
import './ModalFooter-BldNwiHO-t9A6RP80.js';
import './CopyableText-CQapvaMr-BRejzwSg.js';
import './check-DtUCCykb.js';
import './createLucideIcon-DuVQ7hVF.js';
import './copy-CCyYnzBd.js';
import './Link-BdDilT2T-DBpRnUDz.js';
import './EmailInputForm-Cqo1mda8-ItCaWCmP.js';
import './ErrorMessage-D8VaAP5m--2FrYoDi.js';
import './useI18n-DJGbXMkU-SQVDBn-8.js';
import './WalletCards-DH1rqayz-B81P7Fe3.js';
import './styles-DVyDvTdj-qSo8khmZ.js';
import './Screen-Dtn4lspb-C9H50C6b.js';
import './index-CWARkn2w-B0bmebIK.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
