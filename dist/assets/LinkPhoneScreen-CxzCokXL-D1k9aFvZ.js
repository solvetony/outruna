import { dw as u, ds as We, dx as l, dl as d, dr as u$1 } from './index-BvKZjSOd.js';
import { F as ForwardRef } from './PhoneIcon-WxAxH_tj.js';
import { y } from './ConnectPhoneForm-CSL588et-BKBD-Rcd.js';
import { n } from './ScreenLayout-XFsWudNK-ByIq7oEG.js';
import './ModalFooter-BldNwiHO-BdZNxpF8.js';
import './Chip-CZKIKt9K-BnT1xQsg.js';
import './LoadingSkeleton-BMsgO5PV-Bl24h3nx.js';
import './Screen-Dtn4lspb-DIvav982.js';
import './index-CWARkn2w-DQI0U1vt.js';

const s=({title:i="Connect your phone",subtitle:m="Add your number to your account",onSubmit:n$1,isSubmitting:s=false})=>{let[c,p]=d(null),u=async()=>{c?.qualifiedPhoneNumber&&await n$1(c);};return u$1(n,{title:i,subtitle:m,icon:ForwardRef,primaryCta:{label:s?"Submitting":"Submit",onClick:u,disabled:!c?.isValid||s},watermark:true,children:/*#__PURE__*/u$1(y,{onChange:t=>{p(t);},onSubmit:u,noIncludeSubmitButton:true,hideRecent:true})})},c={component:()=>{let{currentScreen:o,data:e,navigate:a,setModalData:c}=u(),p=We(),{initLoginWithSms:u$2}=l(),[l$1,d$1]=d(false);return u$1(s,{subtitle:`Add your number to your ${p?.name} account`,onSubmit:async t=>{d$1(true);try{await u$2({phoneNumber:t.qualifiedPhoneNumber,withPrivyUi:!0}),a("AwaitingPasswordlessCodeScreen");}catch(t){c({errorModalData:{error:t,previousScreen:e?.errorModalData?.previousScreen||o||"LinkPhoneScreen"}}),a("ErrorScreen");}finally{d$1(false);}},isSubmitting:l$1})}};

export { c as LinkPhoneScreen, s as LinkPhoneScreenView, c as default };
