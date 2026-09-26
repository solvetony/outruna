import { df as d, dv as k$1, dr as l, dq as g, dh as y, dk as u, gL as _, hz as Fi, fs as u$2, du as gt, fI as ft } from './index-BzZ64suB.js';
import { F as ForwardRef } from './ShieldCheckIcon-wmXQYlts.js';
import { m } from './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import { l as l$1 } from './Layouts-BlFm53ED-D7svCVXI.js';
import { g as g$1, h, u as u$1, b as b$1, k as k$2 } from './shared-CCjguPOO-CNQfi5id.js';
import { w } from './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

const b={component:()=>{let[s,a]=d(true),{authenticated:c,user:b}=k$1(),{walletProxy:C,closePrivyModal:I,createAnalyticsEvent:P,client:S}=l(),{navigate:T,data:W,onUserCloseViaDialogOrKeybindRef:_$1}=g(),[E,R]=d(void 0),[H,M]=d(""),[U,V]=d(false),{entropyId:N,entropyIdVerifier:O,onCompleteNavigateTo:$,onSuccess:q,onFailure:z}=W.recoverWallet,F=(e="User exited before their wallet could be recovered")=>{I({shouldCallAuthOnSuccess:false}),z("string"==typeof e?new u$2(e):e);};_$1.current=F,y((()=>{if(!c)return F("User must be authenticated and have a Privy wallet before it can be recovered")}),[c]);return u(w,{children:[/*#__PURE__*/u(w.Header,{icon:ForwardRef,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:true,onClose:F}),/*#__PURE__*/u(w.Body,{children:/*#__PURE__*/u(x,{children:/*#__PURE__*/u("div",{children:[/*#__PURE__*/u(g$1,{children:[/*#__PURE__*/u(h,{type:s?"password":"text",onChange:e=>(e=>{e&&R(e);})(e.target.value),disabled:U,style:{paddingRight:"2.3rem"}}),/*#__PURE__*/u(u$1,{style:{right:"0.75rem"},children:s?/*#__PURE__*/u(b$1,{onClick:()=>a(false)}):/*#__PURE__*/u(k$2,{onClick:()=>a(true)})})]}),!!H&&/*#__PURE__*/u(k,{children:H})]})})}),/*#__PURE__*/u(w.Footer,{children:[/*#__PURE__*/u(w.HelpText,{children:/*#__PURE__*/u(l$1,{children:[/*#__PURE__*/u("h4",{children:"Why is this necessary?"}),/*#__PURE__*/u("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),/*#__PURE__*/u(w.Actions,{children:/*#__PURE__*/u(A,{loading:U||!C,disabled:!E,onClick:async()=>{V(true);let e=await S.getAccessToken(),r=_(b,N);if(!e||!r||null===E)return F("User must be authenticated and have a Privy wallet before it can be recovered");try{P({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:r.address}}),await(C?.recover({accessToken:e,entropyId:N,entropyIdVerifier:O,recoveryPassword:E})),M(""),$?T($):I({shouldCallAuthOnSuccess:!1}),q?.(r),P({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:r.address}});}catch(e){Fi(e)?M("Invalid recovery password, please try again."):M("An error has occurred, please try again.");}finally{V(false);}},$hideAnimations:!N&&U,children:"Recover your account"})}),/*#__PURE__*/u(w.Watermark,{})]})]})}};let x=gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,k=gt.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,A=gt(m)`
  ${({$hideAnimations:e})=>e&&ft`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`;

export { b as PasswordRecoveryScreen, b as default };
