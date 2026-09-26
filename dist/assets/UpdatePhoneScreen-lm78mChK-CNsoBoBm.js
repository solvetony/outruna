import { dq as g, dv as k, dr as l, df as d, dk as u } from './index-BzZ64suB.js';
import { F as ForwardRef } from './PhoneIcon-CYybrbT0.js';
import { w } from './ConnectPhoneForm-CbYkcsf6-CU8YCR_p.js';
import { n } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Chip-D2-wZOHJ-CilmQmas.js';
import './LoadingSkeleton-U6-3yFwI-BY_FY6Mi.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

const s=({title:i="Update your phone number",subtitle:n$1="Add the phone number you'd like to use going forward. We'll send you a confirmation code",onSubmit:m,isSubmitting:s=false})=>{let[c,p]=d(null);return u(n,{title:i,subtitle:n$1,icon:ForwardRef,primaryCta:{label:s?"Submitting":"Update",onClick:async()=>{c?.qualifiedPhoneNumber&&await m(c);},disabled:!c?.isValid||s},watermark:true,children:/*#__PURE__*/u(w,{onChange:e=>{p(e);},onSubmit:async()=>{},noIncludeSubmitButton:true,hideRecent:true})})},c={component:()=>{let{currentScreen:t,data:r,navigate:a,setModalData:c}=g(),{user:p}=k(),{initUpdatePhone:u$1}=l(),[l$1,d$1]=d(false);return u(s,{onSubmit:async e=>{d$1(true);try{if(!p?.phone?.number)throw Error("User is required to have an phone number to update it.");await u$1(p?.phone?.number,e.qualifiedPhoneNumber),a("AwaitingPasswordlessCodeScreen");}catch(e){c({errorModalData:{error:e,previousScreen:r?.errorModalData?.previousScreen||t||"LinkPhoneScreen"}}),a("ErrorScreen");}finally{d$1(false);}},isSubmitting:l$1})}};

export { c as UpdatePhoneScreen, s as UpdatePhoneScreenView, c as default };
