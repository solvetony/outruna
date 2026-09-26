import { dq as g, dl as le, eV as $r, dk as u, dG as S, dC as s, dy as i, gp as _i, dx as t, eK as r, du as gt } from './index-BzZ64suB.js';
import { m } from './reservoir-B7XIq5qj-CJEPyVDi.js';
import { n } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { T as TriangleAlert } from './triangle-alert-CS5j2lFh.js';
import { c as createLucideIcon } from './createLucideIcon-BUXdLDa7.js';
import { L as Lock } from './lock-DDPhO-Is.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);

const f=({error:n$2,allowlistConfig:s$1,onRetry:c,onCaptchaReset:T,onBack:f})=>{let v=((n,s$1)=>{if(n instanceof m)return {title:"Transaction failed",detail:/*#__PURE__*/u(S,{children:[/*#__PURE__*/u("span",{children:n.message}),/*#__PURE__*/u("span",{children:[" ","Check the"," ",/*#__PURE__*/u(w,{href:n.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:TriangleAlert};if(n instanceof s)switch(n.privyErrorCode){case i.CLIENT_REQUEST_TIMEOUT:return {title:"Timed out",detail:n.message,ctaText:"Try again",icon:TriangleAlert};case i.INSUFFICIENT_BALANCE:return {title:"Insufficient balance",detail:n.message,ctaText:"Try again",icon:TriangleAlert};case i.TRANSACTION_FAILURE:return {title:"Transaction failure",detail:n.message,ctaText:"Try again",icon:TriangleAlert};default:return {title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:TriangleAlert}}else {if(n instanceof _i&&"twilio_verification_failed"===n.type)return {title:"Something went wrong",detail:n.message,ctaText:"Try again",icon:Phone};if(!(n instanceof t))return n instanceof r&&n.status&&[400,422].includes(n.status)?{title:"Something went wrong",detail:n.message,ctaText:"Try again",icon:TriangleAlert}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:TriangleAlert};switch(n.privyErrorCode){case i.INVALID_CAPTCHA:return {title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:TriangleAlert};case i.DISALLOWED_LOGIN_METHOD:return {title:"Not allowed",detail:n.message,ctaText:"Try another method",icon:TriangleAlert};case i.ALLOWLIST_REJECTED:return {title:s$1.errorTitle||"You don't have access to this app",detail:s$1.errorDetail||"Have you been invited?",ctaText:s$1.errorCtaText||"Try another account",icon:Lock};case i.CAPTCHA_FAILURE:return {title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case i.CAPTCHA_TIMEOUT:return {title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case i.LINKED_TO_ANOTHER_USER:return {title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:TriangleAlert};case i.NOT_SUPPORTED:return {title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:TriangleAlert};case i.TOO_MANY_REQUESTS:return {title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:TriangleAlert};default:return {title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:TriangleAlert}}}})(n$2,s$1);return u(n$1,{title:v.title,subtitle:v.detail,icon:v.icon,onBack:f,iconVariant:"error",primaryCta:{label:v.ctaText,onClick:()=>{if(n$2 instanceof t&&(n$2.privyErrorCode===i.INVALID_CAPTCHA&&T?.(),n$2.privyErrorCode===i.ALLOWLIST_REJECTED)){let t=n(s$1.errorCtaLink);if(t)return void window.open(t,"_blank","noopener,noreferrer")}c?.();},variant:"error"},watermark:true})},v={component:()=>{let{navigate:e,data:r,lastScreen:i,currentScreen:o}=g(),a=le(),{reset:n}=$r(),m=r?.errorModalData?.previousScreen||(i===o?void 0:i);return u(f,{error:r?.errorModalData?.error||Error(),allowlistConfig:a.allowlistConfig,onRetry:()=>{e(m||"LandingScreen",false);},onCaptchaReset:n})}};let w=gt.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`;

export { v as ErrorScreen, f as ErrorScreenView, v as default };
