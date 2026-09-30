import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-B3PW-i17.js';
import { G } from './ConnectWalletView-BLywHxyt-DairUplo.js';
import './QrCode-cA9rnMIN-ClbAa5SO.js';
import './ModalFooter-BldNwiHO-Dv7-KdAL.js';
import './CopyableText-CQapvaMr-BSxgcf25.js';
import './check-CDTFnK48.js';
import './createLucideIcon-C9zXPgLd.js';
import './copy-pyzRHvZ_.js';
import './Link-BdDilT2T-BtlE00ZK.js';
import './EmailInputForm-Cqo1mda8-dLUHCSLS.js';
import './ErrorMessage-D8VaAP5m-D7tHplLt.js';
import './useI18n-DJGbXMkU-CqycDq8A.js';
import './WalletCards-DH1rqayz-BUfVw9LV.js';
import './styles-DVyDvTdj-D5ow2nPc.js';
import './Screen-Dtn4lspb-BhDTj3OO.js';
import './index-CWARkn2w-DuWnqa8v.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
