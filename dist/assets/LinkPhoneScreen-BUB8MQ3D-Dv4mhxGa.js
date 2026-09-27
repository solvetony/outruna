import { dq as g, dl as le, dr as l, df as d, dk as u } from './index-BLGlf-uE.js';
import { F as ForwardRef } from './PhoneIcon-BOecPtKm.js';
import { w } from './ConnectPhoneForm-CbYkcsf6-C9sOSj-p.js';
import { n } from './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import './Chip-D2-wZOHJ-CU3EI0dv.js';
import './LoadingSkeleton-U6-3yFwI-KdekT1D-.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './index-Dq_xe9dz-eZF2dpYh.js';

const s=({title:i="Connect your phone",subtitle:n$1="Add your number to your account",onSubmit:m,isSubmitting:s=false})=>{let[c,u$1]=d(null),p=async()=>{c?.qualifiedPhoneNumber&&await m(c);};return u(n,{title:i,subtitle:n$1,icon:ForwardRef,primaryCta:{label:s?"Submitting":"Submit",onClick:p,disabled:!c?.isValid||s},watermark:true,children:/*#__PURE__*/u(w,{onChange:t=>{u$1(t);},onSubmit:p,noIncludeSubmitButton:true,hideRecent:true})})},c={component:()=>{let{currentScreen:e,data:r,navigate:a,setModalData:c}=g(),u$1=le(),{initLoginWithSms:p}=l(),[l$1,d$1]=d(false);return u(s,{subtitle:`Add your number to your ${u$1?.name} account`,onSubmit:async t=>{d$1(true);try{await p({phoneNumber:t.qualifiedPhoneNumber,withPrivyUi:!0}),a("AwaitingPasswordlessCodeScreen");}catch(t){c({errorModalData:{error:t,previousScreen:r?.errorModalData?.previousScreen||e||"LinkPhoneScreen"}}),a("ErrorScreen");}finally{d$1(false);}},isSubmitting:l$1})}};

export { c as LinkPhoneScreen, s as LinkPhoneScreenView, c as default };
