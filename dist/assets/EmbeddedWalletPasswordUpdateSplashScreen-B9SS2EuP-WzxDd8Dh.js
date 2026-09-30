import { dx as l, dw as u, dr as u$1, dN as S, fG as u$2 } from './index-Dq2VaVGI.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-CN4cWQHJ.js';
import { L as Lock } from './lock-w0LZaXQl.js';
import './ModalFooter-BldNwiHO-C05ODpwE.js';
import './Screen-Dtn4lspb-DO_UP8l-.js';
import './index-CWARkn2w-Cp1mFdPg.js';
import './createLucideIcon-nJAUx3Zv.js';

const n=({onClose:s,onProceed:i})=>/*#__PURE__*/u$1(n$1,{title:"Secure Your Account",subtitle:/*#__PURE__*/u$1(S,{children:["Please set a password to secure your account.",/*#__PURE__*/u$1("br",{}),"Losing access to this password and this device will make your account inaccessible."]}),icon:Lock,primaryCta:{label:"Add password",onClick:i},onClose:s,watermark:true}),m={component:()=>{let{closePrivyModal:e}=l(),{data:r,navigate:t,onUserCloseViaDialogOrKeybindRef:c}=u(),{onFailure:m}=r.setWalletPassword,l$1=()=>{m(new u$2("Exited before password was added to wallet")),e({shouldCallAuthOnSuccess:false});};return c.current=l$1,/*#__PURE__*/u$1(n,{onClose:l$1,onProceed:()=>{t("EmbeddedWalletPasswordUpdateScreen");}})}};

export { m as EmbeddedWalletPasswordUpdateSplashScreen, n as EmbeddedWalletPasswordUpdateSplashView, m as default };
