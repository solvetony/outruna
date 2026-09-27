import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-DEbwNYcQ.js';
import { G } from './ConnectWalletView-BLywHxyt-BFT3ISHG.js';
import './QrCode-cA9rnMIN-BP6WOt4m.js';
import './ModalFooter-BldNwiHO-DThenGPE.js';
import './CopyableText-CQapvaMr-D-XujDM3.js';
import './check-CWHeC4Xl.js';
import './createLucideIcon-B1GGFk-z.js';
import './copy-wl4rCDd_.js';
import './Link-BdDilT2T-CLiTozG7.js';
import './EmailInputForm-Cqo1mda8-dfr5ILay.js';
import './ErrorMessage-D8VaAP5m-CyvmLEo8.js';
import './useI18n-DJGbXMkU-D7z2bpld.js';
import './WalletCards-DH1rqayz-tIhEf8yE.js';
import './styles-DVyDvTdj-CVbkbha_.js';
import './Screen-Dtn4lspb-DzeyLZAC.js';
import './index-CWARkn2w-DFl7VzFA.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
