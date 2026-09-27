import { dd as D, dm as k, df as d, dq as g, dv as k$1, dl as le, dr as l, gm as h, dk as u, dG as S$1, ge as j, hH as Yi, du as gt } from './index-BLGlf-uE.js';
import { F as ForwardRef$1 } from './LockClosedIcon-BEJn2Q8i.js';
import { T, u as u$1, F as ForwardRef$2, m } from './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import { o } from './ScreenHeader-CHmc4-Lu-irPWKUq4.js';
import { o as o$1, d as d$1, e, p } from './styles-BsotlekN-C7pJe8Ao.js';

function PencilSquareIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
  }));
}
const ForwardRef = /*#__PURE__*/ D(PencilSquareIcon);

let S=gt.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`,x={"google-drive":"Google Drive",icloud:"iCloud","user-passcode":"password",privy:"Privy","privy-v2":"Privy"},A=({onClose:t})=>/*#__PURE__*/u(p,{children:[/*#__PURE__*/u(o,{title:"Why do I need to secure my account?",icon:/*#__PURE__*/u(ForwardRef$2,{width:48}),description:/*#__PURE__*/u(S$1,{children:[/*#__PURE__*/u("p",{children:"Your app uses cryptography to secure your account. App secrets are split and encrypted so only you can access them."}),/*#__PURE__*/u("p",{children:"To use this app on new devices, secure account secrets using a password, your Google or your Apple account. It’s important you don’t lose access to the method you choose."})]})}),/*#__PURE__*/u(m,{onClick:t,children:"Select backup method"})]});const P={component:()=>{let[s,n]=d(false),{navigate:d$2,lastScreen:C,navigateBack:P,setModalData:b,data:I,onUserCloseViaDialogOrKeybindRef:M}=g(),{user:O}=k$1(),{embeddedWallets:R}=le(),{closePrivyModal:W}=l(),F=h(O),q=null===F,{isInAccountCreateFlow:B,isResettingPassword:D,shouldCreateEth:E,shouldCreateSol:G}=I.recoverySelection,U=F&&"privy"!==F.recoveryMethod,H=U?/*#__PURE__*/u("span",{children:["Your account is currently secured using"," ",/*#__PURE__*/u("strong",{children:x[F?.recoveryMethod||"user-passcode"]}),"."]}):"Select a method for logging in on new devices and recovering your account.";function L(e){b({recoveryOAuthStatus:{provider:e,action:q?"create-wallet":"set-recovery",isInAccountCreateFlow:B,shouldCreateEth:E,shouldCreateSol:G}}),d$2("RecoveryOAuthScreen");}function V(){I?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),W({shouldCallAuthOnSuccess:I?.setWalletPassword?.callAuthOnSuccessOnClose??false});}return M.current=V,/*#__PURE__*/u(S$1,{children:[/*#__PURE__*/u(T,{onClose:V,backFn:s?()=>n(false):C?P:void 0,infoFn:C||s?void 0:()=>n(true)},"header"),s?/*#__PURE__*/u(A,{onClose:()=>n(false)}):/*#__PURE__*/u(S$1,{children:[/*#__PURE__*/u(o,{title:U?"Update backup method":"Secure your account",icon:/*#__PURE__*/u(ForwardRef$1,{width:48}),description:H}),/*#__PURE__*/u(o$1,{children:R.userOwnedRecoveryOptions.filter((e=>!["icloud","google-drive"].includes(F?.recoveryMethod||"")||e!==F?.recoveryMethod)).sort().map((r=>{switch(r){case "google-drive":return u(j,{onClick:()=>L("google-drive"),children:[/*#__PURE__*/u(S,{children:/*#__PURE__*/u(e,{style:{width:18}})}),"Back up to Google Drive"]},r);case "icloud":return u(j,{onClick:()=>L("icloud"),children:[/*#__PURE__*/u(S,{children:/*#__PURE__*/u(d$1,{style:{width:24}})}),"Back up to Apple iCloud"]},r);case "user-passcode":return u(j,{onClick:()=>{d$2(Yi({isCreatingWallet:q,skipSplashScreen:true}));},children:[/*#__PURE__*/u(S,{children:/*#__PURE__*/u(ForwardRef,{style:{width:18}})}),D?"Reset your":"Set a"," password"]},r);default:return null}}))})]}),/*#__PURE__*/u(u$1,{})]})}};

export { P as RecoverySelectionScreen, P as default };
