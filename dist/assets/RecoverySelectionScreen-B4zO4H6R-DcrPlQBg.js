import { dj as D, dt as k, dl as d, dw as u, dB as Be, ds as We, dx as l, gG as F, dr as u$1, dN as S$1, gs as I, i7 as Ha, dA as gt } from './index-CObXCjNU.js';
import { F as ForwardRef$1 } from './LockClosedIcon-USN2vfxg.js';
import { L, h, F as ForwardRef$2, b as b$1 } from './ModalFooter-BldNwiHO-DmHp1Mus.js';
import { o } from './ScreenHeader-CHmc4-Lu-BTo51mnE.js';
import { o as o$1, d as d$1, e, p } from './styles-BsotlekN-DCKq8a15.js';

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
`,A={"google-drive":"Google Drive",icloud:"iCloud","user-passcode":"password",privy:"Privy","privy-v2":"Privy"},x=({onClose:t})=>/*#__PURE__*/u$1(p,{children:[/*#__PURE__*/u$1(o,{title:"Why do I need to secure my account?",icon:/*#__PURE__*/u$1(ForwardRef$2,{width:48}),description:/*#__PURE__*/u$1(S$1,{children:[/*#__PURE__*/u$1("p",{children:"Your app uses cryptography to secure your account. App secrets are split and encrypted so only you can access them."}),/*#__PURE__*/u$1("p",{children:"To use this app on new devices, secure account secrets using a password, your Google or your Apple account. It’s important you don’t lose access to the method you choose."})]})}),/*#__PURE__*/u$1(b$1,{onClick:t,children:"Select backup method"})]});const b={component:()=>{let[s,n]=d(false),{navigate:d$2,lastScreen:C,navigateBack:b,setModalData:M,data:P,onUserCloseViaDialogOrKeybindRef:I$1}=u(),{user:O}=Be(),{embeddedWallets:W}=We(),{closePrivyModal:R}=l(),F$1=F(O),B=null===F$1,{isInAccountCreateFlow:G,isResettingPassword:D,shouldCreateEth:E,shouldCreateSol:L$1}=P.recoverySelection,q=F$1&&"privy"!==F$1.recoveryMethod,U=q?/*#__PURE__*/u$1("span",{children:["Your account is currently secured using"," ",/*#__PURE__*/u$1("strong",{children:A[F$1?.recoveryMethod||"user-passcode"]}),"."]}):"Select a method for logging in on new devices and recovering your account.";function H(e){M({recoveryOAuthStatus:{provider:e,action:B?"create-wallet":"set-recovery",isInAccountCreateFlow:G,shouldCreateEth:E,shouldCreateSol:L$1}}),d$2("RecoveryOAuthScreen");}function T(){P?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),R({shouldCallAuthOnSuccess:P?.setWalletPassword?.callAuthOnSuccessOnClose??false});}return I$1.current=T,/*#__PURE__*/u$1(S$1,{children:[/*#__PURE__*/u$1(L,{onClose:T,backFn:s?()=>n(false):C?b:void 0,infoFn:C||s?void 0:()=>n(true)},"header"),s?/*#__PURE__*/u$1(x,{onClose:()=>n(false)}):/*#__PURE__*/u$1(S$1,{children:[/*#__PURE__*/u$1(o,{title:q?"Update backup method":"Secure your account",icon:/*#__PURE__*/u$1(ForwardRef$1,{width:48}),description:U}),/*#__PURE__*/u$1(o$1,{children:W.userOwnedRecoveryOptions.filter((e=>!["icloud","google-drive"].includes(F$1?.recoveryMethod||"")||e!==F$1?.recoveryMethod)).sort().map((r=>{switch(r){case "google-drive":return u$1(I,{onClick:()=>H("google-drive"),children:[/*#__PURE__*/u$1(S,{children:/*#__PURE__*/u$1(e,{style:{width:18}})}),"Back up to Google Drive"]},r);case "icloud":return u$1(I,{onClick:()=>H("icloud"),children:[/*#__PURE__*/u$1(S,{children:/*#__PURE__*/u$1(d$1,{style:{width:24}})}),"Back up to Apple iCloud"]},r);case "user-passcode":return u$1(I,{onClick:()=>{d$2(Ha({isCreatingWallet:B,skipSplashScreen:true}));},children:[/*#__PURE__*/u$1(S,{children:/*#__PURE__*/u$1(ForwardRef,{style:{width:18}})}),D?"Reset your":"Set a"," password"]},r);default:return null}}))})]}),/*#__PURE__*/u$1(h,{})]})}};

export { b as RecoverySelectionScreen, b as default };
