import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-rPHJETNO.js';
import { G } from './ConnectWalletView-BLywHxyt-DBw0w5y1.js';
import './QrCode-cA9rnMIN-ajiN3_9-.js';
import './ModalFooter-BldNwiHO-D54d5Pwl.js';
import './CopyableText-CQapvaMr-CJF-IAWo.js';
import './check-CvvMuKfr.js';
import './createLucideIcon-CoVYjJQE.js';
import './copy-BBUYwIJl.js';
import './Link-BdDilT2T-CIwuwO7I.js';
import './EmailInputForm-Cqo1mda8-1DLctyAF.js';
import './ErrorMessage-D8VaAP5m-JdQkPQ5L.js';
import './useI18n-DJGbXMkU-F3gzdML3.js';
import './WalletCards-DH1rqayz-Cy1yR4QS.js';
import './styles-DVyDvTdj-C4dDyQ4x.js';
import './Screen-Dtn4lspb-B2aRBf0T.js';
import './index-CWARkn2w-Bd0gFDpa.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
