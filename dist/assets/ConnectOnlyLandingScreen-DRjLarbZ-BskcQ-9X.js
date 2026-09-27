import { dx as l, dw as u, ds as We, dC as P, dm as A, dr as u$1, dD as t, dE as i } from './index-EUcPO3t8.js';
import { G } from './ConnectWalletView-BLywHxyt-CIadGse-.js';
import './QrCode-cA9rnMIN-BtNlu0N8.js';
import './ModalFooter-BldNwiHO-cbbk5I2M.js';
import './CopyableText-CQapvaMr-BUrN7grB.js';
import './check-C3PxgdAj.js';
import './createLucideIcon-Dr1CdE0w.js';
import './copy-qZJMsZFA.js';
import './Link-BdDilT2T-_pLlLiNe.js';
import './EmailInputForm-Cqo1mda8-Cbn0INFc.js';
import './ErrorMessage-D8VaAP5m-Bvdsi86Y.js';
import './useI18n-DJGbXMkU-DggkBp2P.js';
import './WalletCards-DH1rqayz-CwxJkmiK.js';
import './styles-DVyDvTdj-DQihKTP4.js';
import './Screen-Dtn4lspb-DHq1H6v0.js';
import './index-CWARkn2w-CNB395Bz.js';
import './dijkstra-3x-KSy8X.js';

const s={component:()=>{let{closePrivyModal:s}=l(),{data:c,navigate:p}=u(),d=We(),u$2=P(),C=c?.externalConnectWallet?.description,j=A(c?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(c?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:c?.externalConnectWallet?.preSelectedWalletId,hideHeader:c?.externalConnectWallet?.hideHeader,onBack:c?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),s();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=c?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):s();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { s as ConnectOnlyLandingScreen, s as default };
