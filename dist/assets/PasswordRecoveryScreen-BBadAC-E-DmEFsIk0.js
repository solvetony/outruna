import { dl as d, dB as Be, dx as l, dw as u, dn as y, dr as u$1, h_ as C, h$ as Ta, fG as u$2, dA as gt, fX as ft } from './index-2F2mWfLd.js';
import { F as ForwardRef } from './ShieldCheckIcon-Cb81ah-d.js';
import { b as b$1 } from './ModalFooter-BldNwiHO-DVsGMP5N.js';
import { l as l$1 } from './Layouts-BMRfo5hw-BVFc69CW.js';
import { g, h, y as y$1, w as w$1, k as k$1 } from './shared-C4KM7VSO-BbznLGxm.js';
import { w } from './Screen-Dtn4lspb-DZihvCaW.js';
import './index-CWARkn2w-Bqpwq4ni.js';

const b={component:()=>{let[s,a]=d(true),{authenticated:l$2,user:b}=Be(),{walletProxy:C$1,closePrivyModal:I,createAnalyticsEvent:P,client:S}=l(),{navigate:W,data:T,onUserCloseViaDialogOrKeybindRef:_}=u(),[E,M]=d(void 0),[R,V]=d(""),[F,H]=d(false),{entropyId:N,entropyIdVerifier:U,onCompleteNavigateTo:L,onSuccess:O,onFailure:$}=T.recoverWallet,q=(e="User exited before their wallet could be recovered")=>{I({shouldCallAuthOnSuccess:false}),$("string"==typeof e?new u$2(e):e);};_.current=q,y((()=>{if(!l$2)return q("User must be authenticated and have a Privy wallet before it can be recovered")}),[l$2]);return u$1(w,{children:[/*#__PURE__*/u$1(w.Header,{icon:ForwardRef,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:true,onClose:q}),/*#__PURE__*/u$1(w.Body,{children:/*#__PURE__*/u$1(k,{children:/*#__PURE__*/u$1("div",{children:[/*#__PURE__*/u$1(g,{children:[/*#__PURE__*/u$1(h,{type:s?"password":"text",onChange:e=>(e=>{e&&M(e);})(e.target.value),disabled:F,style:{paddingRight:"2.3rem"}}),/*#__PURE__*/u$1(y$1,{style:{right:"0.75rem"},children:s?/*#__PURE__*/u$1(w$1,{onClick:()=>a(false)}):/*#__PURE__*/u$1(k$1,{onClick:()=>a(true)})})]}),!!R&&/*#__PURE__*/u$1(x,{children:R})]})})}),/*#__PURE__*/u$1(w.Footer,{children:[/*#__PURE__*/u$1(w.HelpText,{children:/*#__PURE__*/u$1(l$1,{children:[/*#__PURE__*/u$1("h4",{children:"Why is this necessary?"}),/*#__PURE__*/u$1("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),/*#__PURE__*/u$1(w.Actions,{children:/*#__PURE__*/u$1(A,{loading:F||!C$1,disabled:!E,onClick:async()=>{H(true);let e=await S.getAccessToken(),r=C(b,N);if(!e||!r||null===E)return q("User must be authenticated and have a Privy wallet before it can be recovered");try{P({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:r.address}}),await(C$1?.recover({accessToken:e,entropyId:N,entropyIdVerifier:U,recoveryPassword:E})),V(""),L?W(L):I({shouldCallAuthOnSuccess:!1}),O?.(r),P({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:r.address}});}catch(e){Ta(e)?V("Invalid recovery password, please try again."):V("An error has occurred, please try again.");}finally{H(false);}},$hideAnimations:!N&&F,children:"Recover your account"})}),/*#__PURE__*/u$1(w.Watermark,{})]})]})}};let k=gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,x=gt.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,A=gt(b$1)`
  ${({$hideAnimations:e})=>e&&ft`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;

export { b as PasswordRecoveryScreen, b as default };
