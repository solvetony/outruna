import { dj as D, dt as k$1, dw as u, ds as We, dx as l, dB as Be, dl as d, dn as y, eG as B, dr as u$1, eH as r, dE as i, eI as A$1, eJ as libExports, dA as gt } from './index-CObXCjNU.js';
import { F as ForwardRef$1 } from './EnvelopeIcon-B_rQP495.js';
import { F as ForwardRef$2 } from './PhoneIcon-D5q_b1jV.js';
import { o } from './Layouts-BMRfo5hw-CqliOw4v.js';
import { i as i$1 } from './Link-BdDilT2T-D6pO0-qR.js';
import { a } from './shouldProceedtoEmbeddedWalletCreationFlow-BxvaW_Vy-CkfZvbT5.js';
import { n } from './ScreenLayout-XFsWudNK-ULs6y5sZ.js';
import './ModalFooter-BldNwiHO-DmHp1Mus.js';
import './Screen-Dtn4lspb-aWIeOYd8.js';
import './index-CWARkn2w-C9ntnFS-.js';

function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k$1("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k$1("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k$1("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ D(CheckIcon);

const E=({contactMethod:c,authFlow:m,emailDomain:p,appName:u="Privy",whatsAppEnabled:f=false,onBack:v,onCodeSubmit:h,onResend:y$1,errorMessage:g,success:b=false,resendCountdown:E=0,onInvalidInput:w,onClearError:S})=>{let[A,k]=d(C);y((()=>{g||k(C);}),[g]);let T=async e=>{e.preventDefault();let r=e.currentTarget.value.replace(" ","");if(""===r)return;if(isNaN(Number(r)))return void w?.("Code should be numeric");S?.();let o=Number(e.currentTarget.name?.charAt(5)),t=[...r||[""]].slice(0,j-o),i=[...A.slice(0,o),...t,...A.slice(o+t.length)];k(i);let n=Math.min(Math.max(o+t.length,0),j-1);if(!isNaN(Number(e.currentTarget.value))){let e=document.querySelector(`input[name=code-${n}]`);e?.focus();}if(i.every((e=>e&&!isNaN(+e)))){let e=document.querySelector(`input[name=code-${n}]`);e?.blur(),await(h?.(i.join("")));}};return u$1(n,{title:"Enter confirmation code",subtitle:/*#__PURE__*/u$1("span","email"===m?{children:["Please check ",/*#__PURE__*/u$1(M,{children:c})," for an email from"," ",p??"privy.io"," and enter your code below."]}:{children:["Please check ",/*#__PURE__*/u$1(M,{children:c})," for a",f?" WhatsApp":""," message from ",u," and enter your code below."]}),icon:"email"===m?ForwardRef$1:ForwardRef$2,onBack:v,showBack:true,helpText:/*#__PURE__*/u$1(L,{children:[/*#__PURE__*/u$1("span",{children:["Didn't get ","email"===m?"an email":"a message","?"]}),E?/*#__PURE__*/u$1(R,{children:[/*#__PURE__*/u$1(ForwardRef,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),/*#__PURE__*/u$1("span",{children:"Code sent"})]}):/*#__PURE__*/u$1(i$1,{as:"button",size:"sm",onClick:y$1,children:"Resend code"})]}),children:/*#__PURE__*/u$1(N,{children:/*#__PURE__*/u$1(o,{children:/*#__PURE__*/u$1(_,{children:[/*#__PURE__*/u$1("div",{children:A.map(((r,o)=>/*#__PURE__*/u$1("input",{name:`code-${o}`,type:"text",value:A[o],onChange:T,onKeyUp:e=>{"Backspace"===e.key&&(e=>{if(S?.(),k([...A.slice(0,e),"",...A.slice(e+1)]),e>0){let r=document.querySelector(`input[name=code-${e-1}]`);r?.focus();}})(o);},inputMode:"numeric",autoFocus:0===o,pattern:"[0-9]",className:`${b?"success":""} ${g?"fail":""}`,autoComplete:libExports.isMobile?"one-time-code":"off"},o)))}),/*#__PURE__*/u$1(I,{$fail:!!g,$success:b,children:/*#__PURE__*/u$1("span",{children:"Invalid or expired verification code"===g?"Incorrect code":g||(b?"Success!":"")})})]})})})})};let j=6,C=Array(6).fill("");var w,S,A=((w=A||{})[w.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",w[w.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",w),k=((S=k||{})[S.EMAIL=0]="EMAIL",S[S.SMS=1]="SMS",S);const T={component:()=>{let{navigate:r$1,lastScreen:o,navigateBack:t,setModalData:i$1,onUserCloseViaDialogOrKeybindRef:s}=u(),c=We(),{closePrivyModal:l$1,resendEmailCode:d$1,resendSmsCode:x,getAuthMeta:j,loginWithCode:C,updateWallets:w,createAnalyticsEvent:S}=l(),{authenticated:A,logout:k,user:T}=Be(),{whatsAppEnabled:N}=We(),[_,I]=d(false),[L,R]=d(null),[M,D]=d(null),[O,P]=d(0);s.current=()=>null;let W=j()?.email?0:1,U=0===W?j()?.email||"":j()?.phoneNumber||"",F=B-500;y((()=>{if(O){let e=setTimeout((()=>{P(O-1);}),1e3);return ()=>clearTimeout(e)}}),[O]),y((()=>{if(A&&_&&T){if(c?.legal.requireUsersAcceptTerms&&!T.hasAcceptedTerms){let e=setTimeout((()=>{r$1("AffirmativeConsentScreen");}),F);return ()=>clearTimeout(e)}if(a(T,c.embeddedWallets)){let e=setTimeout((()=>{i$1({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),S({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AwaitingPasswordlessCodeScreen"}}),k();},callAuthOnSuccessOnClose:true}}),r$1("EmbeddedWalletOnAccountCreateScreen");}),F);return ()=>clearTimeout(e)}{w();let e=setTimeout((()=>l$1({shouldCallAuthOnSuccess:true,isSuccess:true})),B);return ()=>clearTimeout(e)}}}),[A,_,T]),y((()=>{if(L&&0===M){let e=setTimeout((()=>{R(null),D(null);let e=document.querySelector("input[name=code-0]");e?.focus();}),1400);return ()=>clearTimeout(e)}}),[L,M]);return u$1(E,{contactMethod:U,authFlow:0===W?"email":"sms",emailDomain:c?.appearance.emailDomain,appName:c?.name,whatsAppEnabled:N,onBack:()=>t(),onCodeSubmit:async e=>{try{await C(e),I(!0);}catch(e){if(e instanceof r&&e.privyErrorCode===i.INVALID_CREDENTIALS)R("Invalid or expired verification code"),D(0);else if(e instanceof r&&e.privyErrorCode===i.CANNOT_LINK_MORE_OF_TYPE)R(e.message);else {if(e instanceof r&&e.privyErrorCode===i.USER_LIMIT_REACHED)return console.error(new A$1(e).toString()),void r$1("UserLimitReachedScreen");if(e instanceof r&&e.privyErrorCode===i.USER_DOES_NOT_EXIST)return void r$1("AccountNotFoundScreen");if(e instanceof r&&e.privyErrorCode===i.LINKED_TO_ANOTHER_USER)return i$1({errorModalData:{error:e,previousScreen:o??"AwaitingPasswordlessCodeScreen"}}),void r$1("ErrorScreen",false);if(e instanceof r&&e.privyErrorCode===i.DISALLOWED_PLUS_EMAIL)return i$1({inlineError:{error:e}}),void r$1("ConnectOrCreateScreen",false);if(e instanceof r&&e.privyErrorCode===i.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return i$1({accountTransfer:{nonce:e.data?.data?.nonce,account:U,displayName:e.data?.data?.account?.displayName,linkMethod:0===W?"email":"sms",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress}}),void r$1("LinkConflictScreen");R("Issue verifying code"),D(0);}}},onResend:async()=>{P(30),0===W?await d$1():await x();},errorMessage:L||void 0,success:_,resendCountdown:O,onInvalidInput:e=>{R(e),D(1);},onClearError:()=>{1===M&&(R(null),D(null));}})}};let N=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,_=gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0);
    }
    33% {
      transform: translate(-1px, 0);
    }
    67% {
      transform: translate(-1px, 0);
    }
    100% {
      transform: translate(1px, 0);
    }
  }
`,I=gt.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.$success?"var(--privy-color-success-dark)":e.$fail?"var(--privy-color-error-dark)":"transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,L=gt.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,R=gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,M=gt.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;

export { T as AwaitingPasswordlessCodeScreen, E as AwaitingPasswordlessCodeScreenView, T as default };
