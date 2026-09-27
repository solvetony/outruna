import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-DDjfO02D.js';
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

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
