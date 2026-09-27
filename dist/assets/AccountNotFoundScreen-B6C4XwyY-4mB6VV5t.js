import { dq as g, dl as le, dr as l, dk as u } from './index-BLGlf-uE.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import { c as createLucideIcon } from './createLucideIcon-BFwUy9WP.js';
import './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './index-Dq_xe9dz-eZF2dpYh.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode);

const n=({title:e="Account not found",subtitle:i,appName:r="this app",ctaText:n="Try logging in again",onRetry:a})=>/*#__PURE__*/u(n$1,{title:e,subtitle:i||`Please try logging in again or go to ${r} to create an account.`,icon:CircleQuestionMark,iconVariant:"warning",primaryCta:{label:n,onClick:a},watermark:true}),a={component:()=>{let{navigate:o,setModalData:m,data:a}=g(),s=le(),{getAuthMeta:p,client:c}=l();return u(n,{appName:s?.name,onRetry:()=>{let t=p();m({...a,login:{...a?.login,...t?.disableSignup?{disableSignup:true}:{}}}),c?.authFlow&&(c.authFlow=void 0),o("LandingScreen");}})}};

export { a as AccountNotFoundScreen, n as AccountNotFoundScreenView, a as default };
