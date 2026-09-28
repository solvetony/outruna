import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-CJFVVi7O.js';
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

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
