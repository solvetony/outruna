import { dr as u, dl as d, dB as Be, dx as l, dw as u$1, eZ as Gr, ds as We, gy as r, g9 as W, dN as S } from './index-DDjfO02D.js';
import { F as ForwardRef } from './EnvelopeIcon-BEjmh2Q2.js';
import { e } from './Layouts-BMRfo5hw-JJ1RtY0b.js';
import { b } from './ModalFooter-BldNwiHO-BklRY9cv.js';
import { t, i } from './EmailInputForm-Cqo1mda8-FLrKbuOy.js';
import { e as e$1 } from './ErrorMessage-D8VaAP5m-qLAmHK2H.js';
import { n } from './ScreenLayout-XFsWudNK-ByJtya4K.js';
import { M as Mail } from './mail-DfxigHpX.js';
import './Screen-Dtn4lspb-nV3xrt6d.js';
import './index-CWARkn2w-DWGx9aSh.js';
import './createLucideIcon-CWMX0QqL.js';

const g=()=>{let[o,i$1]=d(""),[f,g]=d(""),[w,k]=d(false),{authenticated:b$1,user:E}=Be(),{initUpdateEmail:S$1}=l(),{navigate:x,setModalData:A,currentScreen:C}=u$1(),{enabled:I,token:M}=Gr(),P=We(),T=r(o)&&(P.disablePlusEmails&&o.includes("+")?(f||g("Please enter a valid email address without a '+'."),false):(f&&g(""),true)),q=w||!T,L=()=>{q||(!I||M||b$1?(async e=>{if(!E?.email)throw Error("User is required to have an email address to update it.");k(true);try{await S$1({oldAddress:E.email.address,newAddress:o,captchaToken:e}),x("AwaitingPasswordlessCodeScreen");}catch(e){A({errorModalData:{error:e,previousScreen:C||"LandingScreen"}}),x("ErrorScreen");}k(false);})(M):(A({captchaModalData:{callback:e=>{if(!E?.email)throw Error("User is required to have an email address to update it.");return S$1({oldAddress:E.email.address,newAddress:o,captchaToken:e})},userIntentRequired:false,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),x("CaptchaScreen")));};return u(S,{children:[/*#__PURE__*/u(t,{children:[f&&/*#__PURE__*/u(e$1,{style:{marginTop:"0.25rem",textAlign:"left"},children:f}),/*#__PURE__*/u(i,{$error:!!f,children:[/*#__PURE__*/u(W,{children:/*#__PURE__*/u(Mail,{})}),/*#__PURE__*/u("input",{id:"email-input",type:"email",placeholder:"your@email.com",onChange:e=>i$1(e.target.value),onKeyUp:e=>{"Enter"===e.key&&L();},value:o,autoComplete:"email"})]})]}),/*#__PURE__*/u(b,{loadingText:null,loading:w,disabled:q,onClick:L,style:{width:"100%"},children:"Submit"})]})},w=({title:e$1="Update your email",subtitle:r="Add the email address you'd like to use going forward. We'll send you a confirmation code"})=>/*#__PURE__*/u(n,{title:e$1,subtitle:r,icon:ForwardRef,watermark:true,children:/*#__PURE__*/u(e,{children:/*#__PURE__*/u(g,{})})}),k={component:()=>/*#__PURE__*/u(w,{})};

export { k as UpdateEmailScreen, w as UpdateEmailScreenView, k as default };
