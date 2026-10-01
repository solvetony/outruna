import { dw as u, dr as u$1 } from './index-gvgysxtU.js';
import { L } from './ModalFooter-BldNwiHO-CgJHKx6-.js';

function t({title:t}){let{currentScreen:r,navigateBack:i,navigate:o,data:d,setModalData:u$2}=u();return u$1(L,{title:t,backFn:"ManualTransferScreen"===r?i:r===d?.funding?.methodScreen?d.funding.comingFromSendTransactionScreen?()=>o("SendTransactionScreen"):void 0:d?.funding?.methodScreen?()=>{let n=d.funding;n.usingDefaultFundingMethod&&(n.usingDefaultFundingMethod=false),u$2({funding:n,solanaFundingData:d?.solanaFundingData}),o(n.methodScreen);}:void 0})}

export { t };
