import { dd as D, df as d, dv as k$1, dr as l, dq as g, eV as $r, g7 as H, dl as le, gk as m, dk as u, dG as S, du as gt, fW as I } from './index-CMy8GldA.js';
import { V, m as m$1 } from './ModalHeader-C1WIsRkF-Cv84eb10.js';
import { n } from './Chip-D2-wZOHJ-5BKWBVk9.js';
import { t, a } from './EmailInputForm-Dgoii4vf-yJ5ppvtv.js';
import { e } from './ErrorMessage-D8VaAP5m-BtOlOmCK.js';
import { M as Mail } from './mail-P7M1_X7e.js';

const j=/*#__PURE__*/D(((t,n$1)=>{let[u$1,v]=d(t.defaultValue||""),[S$1,j]=d(""),[C,w]=d(false),{authenticated:P}=k$1(),{initLoginWithEmail:T}=l(),{navigate:M,setModalData:A,currentScreen:D,data:I}=g(),{enabled:L,token:N}=$r(),[U,F]=d(false),{accountType:R}=H(),W=le(),q=m(u$1)&&(W.disablePlusEmails&&u$1.includes("+")?(S$1||j("Please enter a valid email address without a '+'."),false):(S$1&&j(""),true)),H$1=C||!q,K=()=>{var e;H$1||(A({login:I?.login,inlineError:void 0}),!L||N||P?(e=N,w(true),T({email:u$1,captchaToken:e,disableSignup:I?.login?.disableSignup,withPrivyUi:true}).then((()=>{M("AwaitingPasswordlessCodeScreen");})).catch((e=>{A({errorModalData:{error:e,previousScreen:D||"LandingScreen"}}),M("ErrorScreen");})).finally((()=>{w(false);}))):(A({captchaModalData:{callback:e=>T({email:u$1,captchaToken:e,withPrivyUi:true}),userIntentRequired:false,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),M("CaptchaScreen")));};return u(S,{children:[/*#__PURE__*/u(k,{children:[S$1&&/*#__PURE__*/u(e,{style:{display:"block",marginTop:"0.25rem",textAlign:"left"},children:S$1}),/*#__PURE__*/u(E,{stacked:t.stacked,$error:!!S$1,children:[/*#__PURE__*/u(x,{children:/*#__PURE__*/u(Mail,{})}),/*#__PURE__*/u("input",{ref:n$1,id:"email-input",className:"login-method-button",type:"email",placeholder:"your@email.com",onFocus:()=>F(true),onChange:e=>v(e.target.value),onKeyUp:e=>{"Enter"===e.key&&K();},value:u$1,autoComplete:"email"}),"email"!==R||U?t.stacked?/*#__PURE__*/u("span",{}):/*#__PURE__*/u(V,{isSubmitting:C,onClick:K,disabled:H$1,children:"Submit"}):/*#__PURE__*/u(n,{color:"gray",children:"Recent"})]})]}),t.stacked?/*#__PURE__*/u(m$1,{loadingText:null,loading:C,disabled:H$1,onClick:K,style:{width:"100%"},children:"Submit"}):null]})}));let k=t,E=a,x=gt(I)`
  display: inline-flex;
`;

export { j };
