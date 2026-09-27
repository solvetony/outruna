import { dw as u, ds as We, eZ as Gr, dr as u$1, dN as S, dJ as a, dE as i, gJ as Aa, dD as t, eH as r, dA as gt } from './index-CPWVoOsP.js';
import { m } from './reservoir-x-nGuZkT-Xfkjb5te.js';
import { n } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-Dy0L-ckL.js';
import { T as TriangleAlert } from './triangle-alert-CU0sXlkj.js';
import { c as createLucideIcon } from './createLucideIcon-7kZA5_hm.js';
import { L as Lock } from './lock-_f6VDjiT.js';
import './ModalFooter-BldNwiHO-D8r0EtXN.js';
import './Screen-Dtn4lspb-D7quXLJv.js';
import './index-CWARkn2w-BCsAGrk1.js';

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

const f=({error:n$2,allowlistConfig:s,onRetry:m$1,onCaptchaReset:T,onBack:f})=>{let w=((n,s)=>{if(n instanceof m)return {title:"Transaction failed",detail:/*#__PURE__*/u$1(S,{children:[/*#__PURE__*/u$1("span",{children:n.message}),/*#__PURE__*/u$1("span",{children:[" ","Check the"," ",/*#__PURE__*/u$1(j,{href:n.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:TriangleAlert};if(n instanceof a)switch(n.privyErrorCode){case i.CLIENT_REQUEST_TIMEOUT:return {title:"Timed out",detail:n.message,ctaText:"Try again",icon:TriangleAlert};case i.INSUFFICIENT_BALANCE:return {title:"Insufficient balance",detail:n.message,ctaText:"Try again",icon:TriangleAlert};case i.TRANSACTION_FAILURE:return {title:"Transaction failure",detail:n.message,ctaText:"Try again",icon:TriangleAlert};default:return {title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:TriangleAlert}}else {if(n instanceof Aa&&"twilio_verification_failed"===n.type)return {title:"Something went wrong",detail:n.message,ctaText:"Try again",icon:Phone};if(!(n instanceof t))return n instanceof r&&n.status&&[400,422].includes(n.status)?{title:"Something went wrong",detail:n.message,ctaText:"Try again",icon:TriangleAlert}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:TriangleAlert};switch(n.privyErrorCode){case i.INVALID_CAPTCHA:return {title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:TriangleAlert};case i.DISALLOWED_LOGIN_METHOD:return {title:"Not allowed",detail:n.message,ctaText:"Try another method",icon:TriangleAlert};case i.ALLOWLIST_REJECTED:return {title:s.errorTitle||"You don't have access to this app",detail:s.errorDetail||"Have you been invited?",ctaText:s.errorCtaText||"Try another account",icon:Lock};case i.CAPTCHA_FAILURE:return {title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case i.CAPTCHA_TIMEOUT:return {title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case i.LINKED_TO_ANOTHER_USER:return {title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:TriangleAlert};case i.NOT_SUPPORTED:return {title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:TriangleAlert};case i.TOO_MANY_REQUESTS:return {title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:TriangleAlert};default:return {title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:TriangleAlert}}}})(n$2,s);return u$1(n$1,{title:w.title,subtitle:w.detail,icon:w.icon,onBack:f,iconVariant:"error",primaryCta:{label:w.ctaText,onClick:()=>{if(n$2 instanceof t&&(n$2.privyErrorCode===i.INVALID_CAPTCHA&&T?.(),n$2.privyErrorCode===i.ALLOWLIST_REJECTED)){let t=n(s.errorCtaLink);if(t)return void window.open(t,"_blank","noopener,noreferrer")}m$1?.();},variant:"error"},watermark:true})},w={component:()=>{let{navigate:e,data:r,lastScreen:i,currentScreen:o}=u(),a=We(),{reset:n}=Gr(),c=r?.errorModalData?.previousScreen||(i===o?void 0:i);return u$1(f,{error:r?.errorModalData?.error||Error(),allowlistConfig:a.allowlistConfig,onRetry:()=>{e(c||"LandingScreen",false);},onCaptchaReset:n})}};let j=gt.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`;

export { w as ErrorScreen, f as ErrorScreenView, w as default };
