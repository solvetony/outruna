import { dx as l, dw as u, dr as u$1, dN as S, fG as u$2 } from './index-CJFVVi7O.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-DaDb_xfJ.js';
import { L as Lock } from './lock-SAZbJRNr.js';
import './ModalFooter-BldNwiHO-D0P01Kr1.js';
import './Screen-Dtn4lspb-C2e6NFJH.js';
import './index-CWARkn2w-AkhPUeIY.js';
import './createLucideIcon-D7t36zIR.js';

const n=({onClose:s,onProceed:i})=>/*#__PURE__*/u$1(n$1,{title:"Secure Your Account",subtitle:/*#__PURE__*/u$1(S,{children:["Please set a password to secure your account.",/*#__PURE__*/u$1("br",{}),"Losing access to this password and this device will make your account inaccessible."]}),icon:Lock,primaryCta:{label:"Add password",onClick:i},onClose:s,watermark:true}),m={component:()=>{let{closePrivyModal:e}=l(),{data:r,navigate:t,onUserCloseViaDialogOrKeybindRef:c}=u(),{onFailure:m}=r.setWalletPassword,l$1=()=>{m(new u$2("Exited before password was added to wallet")),e({shouldCallAuthOnSuccess:false});};return c.current=l$1,/*#__PURE__*/u$1(n,{onClose:l$1,onProceed:()=>{t("EmbeddedWalletPasswordUpdateScreen");}})}};

export { m as EmbeddedWalletPasswordUpdateSplashScreen, n as EmbeddedWalletPasswordUpdateSplashView, m as default };
