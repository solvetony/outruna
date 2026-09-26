import { dd as D, dm as k$1, dq as g, dl as le, dr as l, dv as k$2, df as d, dh as y, eJ as g$1, dk as u, eK as r, dy as i, eL as A$1, eM as libExports, du as gt } from './index-BzZ64suB.js';
import { F as ForwardRef$1 } from './EnvelopeIcon-BYQNFuuU.js';
import { F as ForwardRef$2 } from './PhoneIcon-CYybrbT0.js';
import { o } from './Layouts-BlFm53ED-D7svCVXI.js';
import { n } from './Link-DJ5gq9Di-BtQzNMdI.js';
import { a } from './shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-BAPibJUr.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

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

const b=({contactMethod:c,authFlow:m,emailDomain:p,appName:u$1="Privy",whatsAppEnabled:f=false,onBack:v,onCodeSubmit:h,onResend:y$1,errorMessage:g,success:x=false,resendCountdown:b=0,onInvalidInput:j,onClearError:A})=>{let[w,k]=d(S);y((()=>{g||k(S);}),[g]);let T=async e=>{e.preventDefault();let r=e.currentTarget.value.replace(" ","");if(""===r)return;if(isNaN(Number(r)))return void j?.("Code should be numeric");A?.();let o=Number(e.currentTarget.name?.charAt(5)),t=[...r||[""]].slice(0,C-o),i=[...w.slice(0,o),...t,...w.slice(o+t.length)];k(i);let n=Math.min(Math.max(o+t.length,0),C-1);if(!isNaN(Number(e.currentTarget.value))){let e=document.querySelector(`input[name=code-${n}]`);e?.focus();}if(i.every((e=>e&&!isNaN(+e)))){let e=document.querySelector(`input[name=code-${n}]`);e?.blur(),await(h?.(i.join("")));}};return u(n$1,{title:"Enter confirmation code",subtitle:/*#__PURE__*/u("span","email"===m?{children:["Please check ",/*#__PURE__*/u(M,{children:c})," for an email from"," ",p??"privy.io"," and enter your code below."]}:{children:["Please check ",/*#__PURE__*/u(M,{children:c})," for a",f?" WhatsApp":""," message from ",u$1," and enter your code below."]}),icon:"email"===m?ForwardRef$1:ForwardRef$2,onBack:v,showBack:true,helpText:/*#__PURE__*/u(L,{children:[/*#__PURE__*/u("span",{children:["Didn't get ","email"===m?"an email":"a message","?"]}),b?/*#__PURE__*/u(R,{children:[/*#__PURE__*/u(ForwardRef,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),/*#__PURE__*/u("span",{children:"Code sent"})]}):/*#__PURE__*/u(n,{as:"button",size:"sm",onClick:y$1,children:"Resend code"})]}),children:/*#__PURE__*/u(N,{children:/*#__PURE__*/u(o,{children:/*#__PURE__*/u(_,{children:[/*#__PURE__*/u("div",{children:w.map(((r,o)=>/*#__PURE__*/u("input",{name:`code-${o}`,type:"text",value:w[o],onChange:T,onKeyUp:e=>{"Backspace"===e.key&&(e=>{if(A?.(),k([...w.slice(0,e),"",...w.slice(e+1)]),e>0){let r=document.querySelector(`input[name=code-${e-1}]`);r?.focus();}})(o);},inputMode:"numeric",autoFocus:0===o,pattern:"[0-9]",className:`${x?"success":""} ${g?"fail":""}`,autoComplete:libExports.isMobile?"one-time-code":"off"},o)))}),/*#__PURE__*/u(I,{$fail:!!g,$success:x,children:/*#__PURE__*/u("span",{children:"Invalid or expired verification code"===g?"Incorrect code":g||(x?"Success!":"")})})]})})})})};let C=6,S=Array(6).fill("");var j,A,w=((j=w||{})[j.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",j[j.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",j),k=((A=k||{})[A.EMAIL=0]="EMAIL",A[A.SMS=1]="SMS",A);const T={component:()=>{let{navigate:r$1,lastScreen:o,navigateBack:t,setModalData:i$1,onUserCloseViaDialogOrKeybindRef:s}=g(),c=le(),{closePrivyModal:l$1,resendEmailCode:d$1,resendSmsCode:E,getAuthMeta:C,loginWithCode:S,updateWallets:j,createAnalyticsEvent:A}=l(),{authenticated:w,logout:k,user:T}=k$2(),{whatsAppEnabled:N}=le(),[_,I]=d(false),[L,R]=d(null),[M,D]=d(null),[O,P]=d(0);s.current=()=>null;let U=C()?.email?0:1,W=0===U?C()?.email||"":C()?.phoneNumber||"",$=g$1-500;y((()=>{if(O){let e=setTimeout((()=>{P(O-1);}),1e3);return ()=>clearTimeout(e)}}),[O]),y((()=>{if(w&&_&&T){if(c?.legal.requireUsersAcceptTerms&&!T.hasAcceptedTerms){let e=setTimeout((()=>{r$1("AffirmativeConsentScreen");}),$);return ()=>clearTimeout(e)}if(a(T,c.embeddedWallets)){let e=setTimeout((()=>{i$1({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),A({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AwaitingPasswordlessCodeScreen"}}),k();},callAuthOnSuccessOnClose:true}}),r$1("EmbeddedWalletOnAccountCreateScreen");}),$);return ()=>clearTimeout(e)}{j();let e=setTimeout((()=>l$1({shouldCallAuthOnSuccess:true,isSuccess:true})),g$1);return ()=>clearTimeout(e)}}}),[w,_,T]),y((()=>{if(L&&0===M){let e=setTimeout((()=>{R(null),D(null);let e=document.querySelector("input[name=code-0]");e?.focus();}),1400);return ()=>clearTimeout(e)}}),[L,M]);return u(b,{contactMethod:W,authFlow:0===U?"email":"sms",emailDomain:c?.appearance.emailDomain,appName:c?.name,whatsAppEnabled:N,onBack:()=>t(),onCodeSubmit:async e=>{try{await S(e),I(!0);}catch(e){if(e instanceof r&&e.privyErrorCode===i.INVALID_CREDENTIALS)R("Invalid or expired verification code"),D(0);else if(e instanceof r&&e.privyErrorCode===i.CANNOT_LINK_MORE_OF_TYPE)R(e.message);else {if(e instanceof r&&e.privyErrorCode===i.USER_LIMIT_REACHED)return console.error(new A$1(e).toString()),void r$1("UserLimitReachedScreen");if(e instanceof r&&e.privyErrorCode===i.USER_DOES_NOT_EXIST)return void r$1("AccountNotFoundScreen");if(e instanceof r&&e.privyErrorCode===i.LINKED_TO_ANOTHER_USER)return i$1({errorModalData:{error:e,previousScreen:o??"AwaitingPasswordlessCodeScreen"}}),void r$1("ErrorScreen",false);if(e instanceof r&&e.privyErrorCode===i.DISALLOWED_PLUS_EMAIL)return i$1({inlineError:{error:e}}),void r$1("ConnectOrCreateScreen",false);if(e instanceof r&&e.privyErrorCode===i.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return i$1({accountTransfer:{nonce:e.data?.data?.nonce,account:W,displayName:e.data?.data?.account?.displayName,linkMethod:0===U?"email":"sms",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress}}),void r$1("LinkConflictScreen");R("Issue verifying code"),D(0);}}},onResend:async()=>{P(30),0===U?await d$1():await E();},errorMessage:L||void 0,success:_,resendCountdown:O,onInvalidInput:e=>{R(e),D(1);},onClearError:()=>{1===M&&(R(null),D(null));}})}};let N=gt.div`
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
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
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

export { T as AwaitingPasswordlessCodeScreen, b as AwaitingPasswordlessCodeScreenView, T as default };
