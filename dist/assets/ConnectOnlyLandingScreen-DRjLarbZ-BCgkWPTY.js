import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-CObXCjNU.js';
import { G } from './ConnectWalletView-BLywHxyt-BJy6aFQy.js';
import './QrCode-cA9rnMIN-d8VYkjjw.js';
import './ModalFooter-BldNwiHO-DmHp1Mus.js';
import './CopyableText-CQapvaMr-BNNcfLOm.js';
import './check-BO9_MTpw.js';
import './createLucideIcon-CBt3MOOf.js';
import './copy-DvWUZpX4.js';
import './Link-BdDilT2T-D6pO0-qR.js';
import './EmailInputForm-Cqo1mda8-BQMVdv3t.js';
import './ErrorMessage-D8VaAP5m-CydC6APn.js';
import './useI18n-DJGbXMkU-CqwFXLYI.js';
import './WalletCards-DH1rqayz-B9FxVKlm.js';
import './styles-DVyDvTdj-Cj8JQumq.js';
import './Screen-Dtn4lspb-aWIeOYd8.js';
import './index-CWARkn2w-C9ntnFS-.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
