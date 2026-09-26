import { dk as u, dd as D, df as d, dv as k, dr as l, dq as g, eV as $r, dl as le, gk as m, fW as I, dG as S$1 } from './index-YiUby3C-.js';
import { F as ForwardRef } from './EnvelopeIcon-B__nH6rW.js';
import { e } from './Layouts-BlFm53ED-DRgPKdqs.js';
import { V, m as m$1 } from './ModalHeader-C1WIsRkF-C8Dss9Lk.js';
import { t, e as e$2 } from './EmailInputForm-Dgoii4vf-SuiWQK5b.js';
import { e as e$1 } from './ErrorMessage-D8VaAP5m-CF4c2J-5.js';
import { n } from './ScreenLayout-b9cixoV5-CH-hckRr.js';
import { M as Mail } from './mail-CH2-oFEo.js';
import './Screen-My4NO62A-B0fsS_yH.js';
import './index-Dq_xe9dz-t6shERUf.js';
import './createLucideIcon-BHrOL54T.js';

const w=/*#__PURE__*/D(((o,i)=>{let[s,f]=d(""),[y,k$1]=d(""),[w,E]=d(false),{authenticated:x,user:A}=k(),{initUpdateEmail:C}=l(),{navigate:P,setModalData:I$1,currentScreen:M}=g(),{enabled:T,token:q}=$r(),L=le(),U=m(s)&&(L.disablePlusEmails&&s.includes("+")?(y||k$1("Please enter a valid email address without a '+'."),false):(y&&k$1(""),true)),D=w||!U,W=()=>{D||(!T||q||x?(async e=>{if(!A?.email)throw Error("User is required to have an email address to update it.");E(true);try{await C({oldAddress:A.email.address,newAddress:s,captchaToken:e}),P("AwaitingPasswordlessCodeScreen");}catch(e){I$1({errorModalData:{error:e,previousScreen:M||"LandingScreen"}}),P("ErrorScreen");}E(false);})(q):(I$1({captchaModalData:{callback:e=>{if(!A?.email)throw Error("User is required to have an email address to update it.");return C({oldAddress:A.email.address,newAddress:s,captchaToken:e})},userIntentRequired:false,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),P("CaptchaScreen")));};return u(S$1,{children:[/*#__PURE__*/u(b,{children:[y&&/*#__PURE__*/u(e$1,{style:{marginTop:"0.25rem",textAlign:"left"},children:y}),/*#__PURE__*/u(S,{$error:!!y,children:[/*#__PURE__*/u(I,{children:/*#__PURE__*/u(Mail,{})}),/*#__PURE__*/u("input",{ref:i,id:"email-input",type:"email",placeholder:"your@email.com",onChange:e=>f(e.target.value),onKeyUp:e=>{"Enter"===e.key&&W();},value:s,autoComplete:"email"}),o.stacked?null:/*#__PURE__*/u(V,{isSubmitting:w,onClick:W,disabled:D,children:"Submit"})]})]}),o.stacked?/*#__PURE__*/u(m$1,{loadingText:null,loading:w,disabled:D,onClick:W,style:{width:"100%"},children:"Submit"}):null]})}));let b=t,S=e$2;const E=({title:e$1="Update your email",subtitle:r="Add the email address you'd like to use going forward. We'll send you a confirmation code"})=>/*#__PURE__*/u(n,{title:e$1,subtitle:r,icon:ForwardRef,watermark:true,children:/*#__PURE__*/u(e,{children:/*#__PURE__*/u(w,{stacked:true})})}),x={component:()=>/*#__PURE__*/u(E,{})};

export { x as UpdateEmailScreen, E as UpdateEmailScreenView, x as default };
