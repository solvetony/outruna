import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-DxRFR8hM.js';
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

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
