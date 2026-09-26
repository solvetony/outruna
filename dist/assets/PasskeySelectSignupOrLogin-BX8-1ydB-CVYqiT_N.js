import { eV as $r, dq as g, dr as l, dk as u } from './index-BzZ64suB.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { F as FingerprintPattern } from './fingerprint-pattern-BZwHaQsC.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';
import './createLucideIcon-BUXdLDa7.js';

const s=({title:o="Log in or create a new account?",subtitle:i="Create a new account with a passkey or use a passkey to log in to an existing account.",onSignup:r,onLogin:s})=>/*#__PURE__*/u(n$1,{title:o,subtitle:i,icon:FingerprintPattern,primaryCta:{label:"Create new account",onClick:r},secondaryCta:{label:"Log in with a passkey",onClick:s},watermark:true}),n={component:()=>{let{enabled:e,token:a}=$r(),{navigate:n,setModalData:m}=g(),{initSignupWithPasskey:p,initLoginWithPasskey:c}=l();return u(s,{onSignup:async()=>{e&&!a?(m({passkeyAuthModalData:{passkeySignupFlow:true},captchaModalData:{callback:t=>p({captchaToken:t,withPrivyUi:true}),userIntentRequired:false,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),n("CaptchaScreen")):(await p({withPrivyUi:true,captchaToken:a}),m({passkeyAuthModalData:{passkeySignupFlow:true}}),n("PasskeyStatusScreen"));},onLogin:async()=>{e&&!a?(m({passkeyAuthModalData:{passkeySignupFlow:false},captchaModalData:{callback:t=>c({captchaToken:t,withPrivyUi:true}),userIntentRequired:false,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),n("CaptchaScreen")):(await c({withPrivyUi:true,captchaToken:a}),m({passkeyAuthModalData:{passkeySignupFlow:false}}),n("PasskeyStatusScreen"));}})}};

export { n as PasskeySelectSignupOrLogin, s as PasskeySelectSignupOrLoginView, n as default };
