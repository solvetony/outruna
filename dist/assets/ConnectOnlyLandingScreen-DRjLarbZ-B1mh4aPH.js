import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-T4wFPK-1.js';
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

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
