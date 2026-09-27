import { dB as Be, dx as l, dw as u, dl as d, dr as u$1, gr as $, h_ as C, eG as B, dN as S, dA as gt } from './index-DH6ifob4.js';
import { F as ForwardRef } from './ExclamationTriangleIcon-BRUlHkWe.js';
import { F as ForwardRef$1 } from './LockClosedIcon-DS8tAPXn.js';
import { L, u as u$2, h } from './ModalFooter-BldNwiHO-DpW95LgU.js';
import { r } from './Subtitle-CV-2yKE4-BuBahHnY.js';
import { e } from './Title-BnzYV3Is-D6WyktY0.js';

const g=gt.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${e=>e.$color??"var(--privy-color-accent)"};
  border-radius: 50%;
`,w={component:()=>{let{user:p}=Be(),{client:w,walletProxy:j,refreshSessionAndUser:b,closePrivyModal:k}=l(),x=u(),{entropyId:I,entropyIdVerifier:C$1}=x.data?.recoverWallet??{},[T,M]=d(false),[S$1,A]=d(null),[P,U]=d(null);function W(){if(!T){if(P)return x.data?.setWalletPassword?.onFailure(P),void k();if(!S$1)return x.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),void k()}}x.onUserCloseViaDialogOrKeybindRef.current=W;let E=!(!T&&!S$1);return u$1(S,P?{children:[/*#__PURE__*/u$1(L,{onClose:W},"header"),/*#__PURE__*/u$1(g,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:/*#__PURE__*/u$1(ForwardRef,{height:38,width:38,stroke:"var(--privy-color-error)"})}),/*#__PURE__*/u$1(e,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),/*#__PURE__*/u$1($,{style:{minHeight:"2rem"}}),/*#__PURE__*/u$1(u$2,{onClick:()=>U(null),children:"Try again"}),/*#__PURE__*/u$1(h,{})]}:{children:[/*#__PURE__*/u$1(L,{onClose:W},"header"),/*#__PURE__*/u$1(ForwardRef$1,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),/*#__PURE__*/u$1(e,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),/*#__PURE__*/u$1(r,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),/*#__PURE__*/u$1($,{style:{minHeight:"2rem"}}),/*#__PURE__*/u$1(u$2,{loading:T,disabled:E,onClick:()=>async function(){M(true);try{let e=await w.getAccessToken(),r=C(p,I);if(!e||!j||!r)return;if(!(await j.setRecovery({accessToken:e,entropyId:I,entropyIdVerifier:C$1,existingRecoveryMethod:r.recoveryMethod,recoveryMethod:"privy"})).entropyId)throw Error("Unable to set recovery on wallet");let o=await b();if(!o)throw Error("Unable to set recovery on wallet");let t=C(o,r.address);if(!t)throw Error("Unabled to set recovery on wallet");A(!!o),setTimeout((()=>{x.data?.setWalletPassword?.onSuccess(t),k();}),B);}catch(e){U(e);}finally{M(false);}}(),children:S$1?"Success":"Confirm"}),/*#__PURE__*/u$1(h,{})]})}};

export { w as SetAutomaticRecoveryScreen, w as default };
