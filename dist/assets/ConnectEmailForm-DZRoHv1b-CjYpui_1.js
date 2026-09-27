import { dj as D, dl as d, dB as Be, dx as l, dw as u, eZ as Gr, gk as D$1, ds as We, gy as r, dr as u$1, dN as S, dA as gt, g9 as W } from './index-R8WYfo0z.js';
import { w, b } from './ModalFooter-BldNwiHO-6nqBQ_V2.js';
import { n } from './Chip-CZKIKt9K-BsaenX87.js';
import { t, a } from './EmailInputForm-Cqo1mda8-CaQhpo7O.js';
import { e } from './ErrorMessage-D8VaAP5m-DFUAiJhE.js';
import { M as Mail } from './mail-CZwvPj6k.js';

const k=/*#__PURE__*/D(((t,n$1)=>{let[u$2,v]=d(t.defaultValue||""),[S$1,k]=d(""),[x,w$1]=d(false),{authenticated:T}=Be(),{initLoginWithEmail:P}=l(),{navigate:M,setModalData:A,currentScreen:N,data:D}=u(),{enabled:I,token:U}=Gr(),[F,L]=d(false),{accountType:R}=D$1(),W=We(),q=r(u$2)&&(W.disablePlusEmails&&u$2.includes("+")?(S$1||k("Please enter a valid email address without a '+'."),false):(S$1&&k(""),true)),H=x||!q,K=()=>{var e;H||(A({login:D?.login,inlineError:void 0}),!I||U||T?(e=U,w$1(true),P({email:u$2,captchaToken:e,disableSignup:D?.login?.disableSignup,withPrivyUi:true}).then((()=>{M("AwaitingPasswordlessCodeScreen");})).catch((e=>{A({errorModalData:{error:e,previousScreen:N||"LandingScreen"}}),M("ErrorScreen");})).finally((()=>{w$1(false);}))):(A({captchaModalData:{callback:e=>P({email:u$2,captchaToken:e,withPrivyUi:true}),userIntentRequired:false,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),M("CaptchaScreen")));};return u$1(S,{children:[/*#__PURE__*/u$1(j,{children:[S$1&&/*#__PURE__*/u$1(e,{style:{display:"block",marginTop:"0.25rem",textAlign:"left"},children:S$1}),/*#__PURE__*/u$1(E,{stacked:t.stacked,$error:!!S$1,children:[/*#__PURE__*/u$1(C,{children:/*#__PURE__*/u$1(Mail,{})}),/*#__PURE__*/u$1("input",{ref:n$1,id:"email-input",className:"login-method-button",type:"email",placeholder:"your@email.com",onFocus:()=>L(true),onChange:e=>v(e.target.value),onKeyUp:e=>{"Enter"===e.key&&K();},value:u$2,autoComplete:"email"}),"email"!==R||F?t.stacked?/*#__PURE__*/u$1("span",{}):/*#__PURE__*/u$1(w,{isSubmitting:x,onClick:K,disabled:H,children:"Submit"}):/*#__PURE__*/u$1(n,{color:"gray",children:"Recent"})]})]}),t.stacked?/*#__PURE__*/u$1(b,{loadingText:null,loading:x,disabled:H,onClick:K,style:{width:"100%"},children:"Submit"}):null]})}));let j=t,E=a,C=gt(W)`
  display: inline-flex;
`;

export { k };
