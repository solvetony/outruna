import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-DsU0Cpsn.js';
import { G } from './ConnectWalletView-BLywHxyt-DQfI35lt.js';
import './QrCode-cA9rnMIN-6DCaARSH.js';
import './ModalFooter-BldNwiHO-DaeXXHpR.js';
import './CopyableText-CQapvaMr-B6bP8aAw.js';
import './check-DC2UsDMi.js';
import './createLucideIcon-CQWz50lu.js';
import './copy-Bjm2I6RS.js';
import './Link-BdDilT2T-BgwfURgs.js';
import './EmailInputForm-Cqo1mda8-BY8lp7D2.js';
import './ErrorMessage-D8VaAP5m-B_hbcbmH.js';
import './useI18n-DJGbXMkU-CiMkK-uL.js';
import './WalletCards-DH1rqayz-63Adz5AJ.js';
import './styles-DVyDvTdj-BJeNSFTN.js';
import './Screen-Dtn4lspb-CYbOG2S4.js';
import './index-CWARkn2w-Ctvle-0L.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
