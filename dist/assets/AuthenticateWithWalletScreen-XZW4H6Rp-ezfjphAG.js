import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i, dk as q } from './index-CObXCjNU.js';
import { G } from './ConnectWalletView-BLywHxyt-BJy6aFQy.js';
import './QrCode-cA9rnMIN-d8VYkjjw.js';
import './ModalFooter-BldNwiHO-DmHp1Mus.js';
import './CopyableText-CQapvaMr-BNNcfLOm.js';
import './check-BO9_MTpw.js';
import './createLucideIcon-CBt3MOOf.js';
import './copy-DvWUZpX4.js';
import './Link-BdDilT2T-D6pO0-qR.js';
import './EmailInputForm-Cqo1mda8-BQMVdv3t.js';
import './ErrorMessage-D8VaAP5m-CydC6APn.js';
import './useI18n-DJGbXMkU-CqwFXLYI.js';
import './WalletCards-DH1rqayz-B9FxVKlm.js';
import './styles-DVyDvTdj-Cj8JQumq.js';
import './Screen-Dtn4lspb-aWIeOYd8.js';
import './index-CWARkn2w-C9ntnFS-.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{setWalletConnectionStatus:s,closePrivyModal:p,inProgressAuthFlowRef:u$2}=l(),{data:d,navigate:j}=u(),C=We(),W=P(),w=d?.externalConnectWallet?.description,f=A(d?.externalConnectWallet?.walletList??C.appearance.walletList),E=A(d?.externalConnectWallet?.walletChainType??C.appearance.walletChainType),h=f.current,v=E.current,x="link"===u$2.current?void 0:()=>j("LandingScreen");return u$1(G,{walletList:h,walletChainType:v,onClose:p,onConnect:q((({connector:e,wallet:t})=>{W("connectWallet","onSuccess",{wallet:t}),s({status:"connected",connectedWallet:t,connector:e,connectError:null,connectRetry:()=>null}),j("ConnectionStatusScreen",!d?.externalConnectWallet?.preSelectedWalletId);}),[s,j,d?.login?.disableSignup,d?.externalConnectWallet?.preSelectedWalletId]),onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),W("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),W("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},onBack:x,customDescription:w||"",preSelectedWalletId:d?.externalConnectWallet?.preSelectedWalletId,app:C})},isUnauthenticatedScreem:true};

export { s as AuthenticateWithWalletScreen, s as default };
