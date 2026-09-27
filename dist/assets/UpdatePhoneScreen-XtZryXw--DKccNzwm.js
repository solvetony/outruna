import { dw as u, dB as Be, dx as l, dl as d, dr as u$1 } from './index-R8WYfo0z.js';
import { F as ForwardRef } from './PhoneIcon-DZKZ4nEq.js';
import { y } from './ConnectPhoneForm-CSL588et-DXKW7nwU.js';
import { n } from './ScreenLayout-XFsWudNK-e07oj7pS.js';
import './ModalFooter-BldNwiHO-6nqBQ_V2.js';
import './Chip-CZKIKt9K-BsaenX87.js';
import './LoadingSkeleton-BMsgO5PV-umopaen5.js';
import './Screen-Dtn4lspb-DNqqnSKh.js';
import './index-CWARkn2w-BdCWEcbj.js';

const s=({title:i="Update your phone number",subtitle:n$1="Add the phone number you'd like to use going forward. We'll send you a confirmation code",onSubmit:m,isSubmitting:s=false})=>{let[p,c]=d(null);return u$1(n,{title:i,subtitle:n$1,icon:ForwardRef,primaryCta:{label:s?"Submitting":"Update",onClick:async()=>{p?.qualifiedPhoneNumber&&await m(p);},disabled:!p?.isValid||s},watermark:true,children:/*#__PURE__*/u$1(y,{onChange:e=>{c(e);},onSubmit:async()=>{},noIncludeSubmitButton:true,hideRecent:true})})},p={component:()=>{let{currentScreen:o,data:t,navigate:a,setModalData:p}=u(),{user:c}=Be(),{initUpdatePhone:l$1}=l(),[u$2,d$1]=d(false);return u$1(s,{onSubmit:async e=>{d$1(true);try{if(!c?.phone?.number)throw Error("User is required to have an phone number to update it.");await l$1(c?.phone?.number,e.qualifiedPhoneNumber),a("AwaitingPasswordlessCodeScreen");}catch(e){p({errorModalData:{error:e,previousScreen:t?.errorModalData?.previousScreen||o||"LinkPhoneScreen"}}),a("ErrorScreen");}finally{d$1(false);}},isSubmitting:u$2})}};

export { p as UpdatePhoneScreen, s as UpdatePhoneScreenView, p as default };
