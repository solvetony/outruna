import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-C7w8lBI1.js';
import { G } from './ConnectWalletView-BLywHxyt-D903x7ZH.js';
import './QrCode-cA9rnMIN-CLmMQoBG.js';
import './ModalFooter-BldNwiHO-DiYMjA97.js';
import './CopyableText-CQapvaMr-B9XHgxOq.js';
import './check-CrWZEvri.js';
import './createLucideIcon-DmRQAkH4.js';
import './copy-Cb4CPv3U.js';
import './Link-BdDilT2T-gVGI5-wp.js';
import './EmailInputForm-Cqo1mda8-BqwlyJsY.js';
import './ErrorMessage-D8VaAP5m-BOyEKyUu.js';
import './useI18n-DJGbXMkU-BGHWJjy8.js';
import './WalletCards-DH1rqayz-Ddk9CGrO.js';
import './styles-DVyDvTdj-BEzUP9Zf.js';
import './Screen-Dtn4lspb-D_DqtKfk.js';
import './index-CWARkn2w-D2mE-dew.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
