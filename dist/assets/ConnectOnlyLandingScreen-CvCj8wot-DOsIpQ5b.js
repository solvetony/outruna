import { dr as l, dq as g, dl as le, dw as u, dg as A, dk as u$1, dx as t, dy as i } from './index-CMy8GldA.js';
import { G } from './ConnectWalletView-CRfPxova-3H0SLBj_.js';
import './QrCode-mmar0Iu7-CmBmTovL.js';
import './ModalHeader-C1WIsRkF-Cv84eb10.js';
import './CopyableText-ChtfBWx4-DvWts8WT.js';
import './check-CUZKcW1m.js';
import './createLucideIcon-CGZvvyHL.js';
import './copy-1Bdb-AWp.js';
import './Link-DJ5gq9Di-CoDq-VtJ.js';
import './EmailInputForm-Dgoii4vf-yJ5ppvtv.js';
import './ErrorMessage-D8VaAP5m-BtOlOmCK.js';
import './useI18n-DKN3yZtJ-vMYNLHDS.js';
import './WalletCards-DH1rqayz-BACrr7bo.js';
import './styles-DVyDvTdj-D_ReNtuD.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './index-Dq_xe9dz-hJh_mla6.js';
import './dijkstra-3x-KSy8X.js';

const c={component:()=>{let{closePrivyModal:c}=l(),{data:s,navigate:p}=g(),d=le(),u$2=u(),C=s?.externalConnectWallet?.description,j=A(s?.externalConnectWallet?.walletList??d.appearance.walletList),E=A(s?.externalConnectWallet?.walletChainType??d.appearance.walletChainType);return u$1(G,{walletList:j.current,walletChainType:E.current,preSelectedWalletId:s?.externalConnectWallet?.preSelectedWalletId,hideHeader:s?.externalConnectWallet?.hideHeader,onBack:s?.funding?()=>p("FundingMethodSelectionScreen"):void 0,onClose:()=>{u$2("connectWallet","onError",i.GENERIC_CONNECT_WALLET_ERROR),c();},onConnect:({connector:e,wallet:t})=>{u$2("connectWallet","onSuccess",{wallet:t});let o=s?.externalConnectWallet?.onCompleteNavigateTo;o?p(o({address:t.address,walletClientType:e?.walletClientType,walletChainType:e?.chainType})):c();},onConnectError:e=>{e instanceof t?(console.warn(e.cause?e.cause:e.message),u$2("connectWallet","onError",e.privyErrorCode||i.GENERIC_CONNECT_WALLET_ERROR)):(console.warn(e),u$2("connectWallet","onError",i.UNKNOWN_CONNECT_WALLET_ERROR));},customDescription:C,app:d,connectOnly:true})},isUnauthenticatedScreem:true};

export { c as ConnectOnlyLandingScreen, c as default };
