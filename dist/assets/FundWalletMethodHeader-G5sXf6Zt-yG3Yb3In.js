import { dq as g, dk as u } from './index-BzZ64suB.js';
import { T } from './ModalHeader-C1WIsRkF-BOWOE0Hu.js';

function t({title:t}){let{currentScreen:r,navigateBack:i,navigate:o,data:d,setModalData:u$1}=g();return u(T,{title:t,backFn:"ManualTransferScreen"===r?i:r===d?.funding?.methodScreen?d.funding.comingFromSendTransactionScreen?()=>o("SendTransactionScreen"):void 0:d?.funding?.methodScreen?()=>{let n=d.funding;n.usingDefaultFundingMethod&&(n.usingDefaultFundingMethod=false),u$1({funding:n,solanaFundingData:d?.solanaFundingData}),o(n.methodScreen);}:void 0})}

export { t };
