import { eZ as Gr, dw as u, dx as l, dr as u$1 } from './index-Dq2VaVGI.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-CN4cWQHJ.js';
import { F as FingerprintPattern } from './fingerprint-pattern-nlmPkBRK.js';
import './ModalFooter-BldNwiHO-C05ODpwE.js';
import './Screen-Dtn4lspb-DO_UP8l-.js';
import './index-CWARkn2w-Cp1mFdPg.js';
import './createLucideIcon-nJAUx3Zv.js';

const s=({title:o="Log in or create a new account?",subtitle:i="Create a new account with a passkey or use a passkey to log in to an existing account.",onSignup:r,onLogin:s})=>/*#__PURE__*/u$1(n$1,{title:o,subtitle:i,icon:FingerprintPattern,primaryCta:{label:"Create new account",onClick:r},secondaryCta:{label:"Log in with a passkey",onClick:s},watermark:true}),n={component:()=>{let{enabled:e,token:a}=Gr(),{navigate:n,setModalData:m}=u(),{initSignupWithPasskey:p,initLoginWithPasskey:c}=l();return u$1(s,{onSignup:async()=>{e&&!a?(m({passkeyAuthModalData:{passkeySignupFlow:true},captchaModalData:{callback:t=>p({captchaToken:t,withPrivyUi:true}),userIntentRequired:false,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),n("CaptchaScreen")):(await p({withPrivyUi:true,captchaToken:a}),m({passkeyAuthModalData:{passkeySignupFlow:true}}),n("PasskeyStatusScreen"));},onLogin:async()=>{e&&!a?(m({passkeyAuthModalData:{passkeySignupFlow:false},captchaModalData:{callback:t=>c({captchaToken:t,withPrivyUi:true}),userIntentRequired:false,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),n("CaptchaScreen")):(await c({withPrivyUi:true,captchaToken:a}),m({passkeyAuthModalData:{passkeySignupFlow:false}}),n("PasskeyStatusScreen"));}})}};

export { n as PasskeySelectSignupOrLogin, s as PasskeySelectSignupOrLoginView, n as default };
