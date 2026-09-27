import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-DzW10a_X.js';
import { G } from './ConnectWalletView-BLywHxyt-6XutiWn_.js';
import './QrCode-cA9rnMIN-C5xjKU9j.js';
import './ModalFooter-BldNwiHO-icJc5Gc0.js';
import './CopyableText-CQapvaMr-DrWFa_QP.js';
import './check-BCKs4uvT.js';
import './createLucideIcon-DhFLRiVw.js';
import './copy-BHi4oxaR.js';
import './Link-BdDilT2T-BTHN_dmY.js';
import './EmailInputForm-Cqo1mda8-DSLg9MqD.js';
import './ErrorMessage-D8VaAP5m-aLAqa4jt.js';
import './useI18n-DJGbXMkU-DLkRx_aK.js';
import './WalletCards-DH1rqayz-5gpiyFtE.js';
import './styles-DVyDvTdj-DkZFfpuI.js';
import './Screen-Dtn4lspb-Lsu5D_FU.js';
import './index-CWARkn2w-1np9INFJ.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
