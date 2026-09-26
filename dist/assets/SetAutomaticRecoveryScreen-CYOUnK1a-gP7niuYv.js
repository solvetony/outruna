import { dv as k, dr as l, dq as g$1, df as d, dk as u, gd as k$1, gL as _, eJ as g$2, dG as S, du as gt } from './index-CMy8GldA.js';
import { F as ForwardRef } from './ExclamationTriangleIcon-Uyy4j0xN.js';
import { F as ForwardRef$1 } from './LockClosedIcon-D_pZVxMF.js';
import { T, k as k$2, u as u$1 } from './ModalHeader-C1WIsRkF-Cv84eb10.js';
import { r } from './Subtitle-CV-2yKE4-DtqYDZ_P.js';
import { e } from './Title-BnzYV3Is-Dxm52BGP.js';

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
`,w={component:()=>{let{user:d$1}=k(),{client:w,walletProxy:j,refreshSessionAndUser:x,closePrivyModal:b}=l(),I=g$1(),{entropyId:T$1,entropyIdVerifier:k$3}=I.data?.recoverWallet??{},[C,M]=d(false),[S$1,A]=d(null),[P,U]=d(null);function W(){if(!C){if(P)return I.data?.setWalletPassword?.onFailure(P),void b();if(!S$1)return I.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),void b()}}I.onUserCloseViaDialogOrKeybindRef.current=W;let E=!(!C&&!S$1);return u(S,P?{children:[/*#__PURE__*/u(T,{onClose:W},"header"),/*#__PURE__*/u(g,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:/*#__PURE__*/u(ForwardRef,{height:38,width:38,stroke:"var(--privy-color-error)"})}),/*#__PURE__*/u(e,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),/*#__PURE__*/u(k$1,{style:{minHeight:"2rem"}}),/*#__PURE__*/u(k$2,{onClick:()=>U(null),children:"Try again"}),/*#__PURE__*/u(u$1,{})]}:{children:[/*#__PURE__*/u(T,{onClose:W},"header"),/*#__PURE__*/u(ForwardRef$1,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),/*#__PURE__*/u(e,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),/*#__PURE__*/u(r,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),/*#__PURE__*/u(k$1,{style:{minHeight:"2rem"}}),/*#__PURE__*/u(k$2,{loading:C,disabled:E,onClick:()=>async function(){M(true);try{let e=await w.getAccessToken(),r=_(d$1,T$1);if(!e||!j||!r)return;if(!(await j.setRecovery({accessToken:e,entropyId:T$1,entropyIdVerifier:k$3,existingRecoveryMethod:r.recoveryMethod,recoveryMethod:"privy"})).entropyId)throw Error("Unable to set recovery on wallet");let o=await x();if(!o)throw Error("Unable to set recovery on wallet");let t=_(o,r.address);if(!t)throw Error("Unabled to set recovery on wallet");A(!!o),setTimeout((()=>{I.data?.setWalletPassword?.onSuccess(t),b();}),g$2);}catch(e){U(e);}finally{M(false);}}(),children:S$1?"Success":"Confirm"}),/*#__PURE__*/u(u$1,{})]})}};

export { w as SetAutomaticRecoveryScreen, w as default };
