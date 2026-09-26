import { dq as g, dl as le, dr as l, df as d, dk as u } from './index-CMy8GldA.js';
import { F as ForwardRef } from './PhoneIcon-BZ7wmk9x.js';
import { w } from './ConnectPhoneForm-CbYkcsf6-CqBAWO72.js';
import { n } from './ScreenLayout-b9cixoV5-BlKz-rU6.js';
import './ModalHeader-C1WIsRkF-Cv84eb10.js';
import './Chip-D2-wZOHJ-5BKWBVk9.js';
import './LoadingSkeleton-U6-3yFwI-BWRL3Ao9.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './index-Dq_xe9dz-hJh_mla6.js';

const s=({title:i="Connect your phone",subtitle:n$1="Add your number to your account",onSubmit:m,isSubmitting:s=false})=>{let[c,u$1]=d(null),p=async()=>{c?.qualifiedPhoneNumber&&await m(c);};return u(n,{title:i,subtitle:n$1,icon:ForwardRef,primaryCta:{label:s?"Submitting":"Submit",onClick:p,disabled:!c?.isValid||s},watermark:true,children:/*#__PURE__*/u(w,{onChange:t=>{u$1(t);},onSubmit:p,noIncludeSubmitButton:true,hideRecent:true})})},c={component:()=>{let{currentScreen:e,data:r,navigate:a,setModalData:c}=g(),u$1=le(),{initLoginWithSms:p}=l(),[l$1,d$1]=d(false);return u(s,{subtitle:`Add your number to your ${u$1?.name} account`,onSubmit:async t=>{d$1(true);try{await p({phoneNumber:t.qualifiedPhoneNumber,withPrivyUi:!0}),a("AwaitingPasswordlessCodeScreen");}catch(t){c({errorModalData:{error:t,previousScreen:r?.errorModalData?.previousScreen||e||"LinkPhoneScreen"}}),a("ErrorScreen");}finally{d$1(false);}},isSubmitting:l$1})}};

export { c as LinkPhoneScreen, s as LinkPhoneScreenView, c as default };
