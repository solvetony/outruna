import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-BvKZjSOd.js';
import { G } from './ConnectWalletView-BLywHxyt-COyflY6g.js';
import './QrCode-cA9rnMIN-D4hAlneu.js';
import './ModalFooter-BldNwiHO-BdZNxpF8.js';
import './CopyableText-CQapvaMr-D6TK_uzn.js';
import './check-CTyk0ge-.js';
import './createLucideIcon-z0RpTqKX.js';
import './copy-CQ1LAeNo.js';
import './Link-BdDilT2T-C5RFG0b0.js';
import './EmailInputForm-Cqo1mda8-WUKb9bc5.js';
import './ErrorMessage-D8VaAP5m-BizPBBMi.js';
import './useI18n-DJGbXMkU-CDyqY7C6.js';
import './WalletCards-DH1rqayz-Ch9uE557.js';
import './styles-DVyDvTdj-C8DXjba6.js';
import './Screen-Dtn4lspb-DIvav982.js';
import './index-CWARkn2w-DQI0U1vt.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
