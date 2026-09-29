import { dw as u, ds as We, dx as l, dl as d, dr as u$1 } from './index-rPHJETNO.js';
import { F as ForwardRef } from './PhoneIcon-MN30mQV6.js';
import { y } from './ConnectPhoneForm-CSL588et-ChDOleDV.js';
import { n } from './ScreenLayout-XFsWudNK-DRWbUTUm.js';
import './ModalFooter-BldNwiHO-D54d5Pwl.js';
import './Chip-CZKIKt9K-DGUwkcii.js';
import './LoadingSkeleton-BMsgO5PV-_5DeBknc.js';
import './Screen-Dtn4lspb-B2aRBf0T.js';
import './index-CWARkn2w-Bd0gFDpa.js';

const s=({title:i="Connect your phone",subtitle:m="Add your number to your account",onSubmit:n$1,isSubmitting:s=false})=>{let[c,p]=d(null),u=async()=>{c?.qualifiedPhoneNumber&&await n$1(c);};return u$1(n,{title:i,subtitle:m,icon:ForwardRef,primaryCta:{label:s?"Submitting":"Submit",onClick:u,disabled:!c?.isValid||s},watermark:true,children:/*#__PURE__*/u$1(y,{onChange:t=>{p(t);},onSubmit:u,noIncludeSubmitButton:true,hideRecent:true})})},c={component:()=>{let{currentScreen:o,data:e,navigate:a,setModalData:c}=u(),p=We(),{initLoginWithSms:u$2}=l(),[l$1,d$1]=d(false);return u$1(s,{subtitle:`Add your number to your ${p?.name} account`,onSubmit:async t=>{d$1(true);try{await u$2({phoneNumber:t.qualifiedPhoneNumber,withPrivyUi:!0}),a("AwaitingPasswordlessCodeScreen");}catch(t){c({errorModalData:{error:t,previousScreen:e?.errorModalData?.previousScreen||o||"LinkPhoneScreen"}}),a("ErrorScreen");}finally{d$1(false);}},isSubmitting:l$1})}};

export { c as LinkPhoneScreen, s as LinkPhoneScreenView, c as default };
