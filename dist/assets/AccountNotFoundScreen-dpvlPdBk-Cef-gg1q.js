import { dw as u, ds as We, dx as l, dr as u$1 } from './index-DH2EW3Lt.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-BlTVWJR3.js';
import { c as createLucideIcon } from './createLucideIcon-K5lVZHeY.js';
import './ModalFooter-BldNwiHO-CtorPV4s.js';
import './Screen-Dtn4lspb-DGpHO03i.js';
import './index-CWARkn2w-9yAptxdf.js';

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

const n=({title:r="Account not found",subtitle:e,appName:i="this app",ctaText:n="Try logging in again",onRetry:m})=>/*#__PURE__*/u$1(n$1,{title:r,subtitle:e||`Please try logging in again or go to ${i} to create an account.`,icon:CircleQuestionMark,iconVariant:"warning",primaryCta:{label:n,onClick:m},watermark:true}),m={component:()=>{let{navigate:t,setModalData:a,data:m}=u(),c=We(),{getAuthMeta:p,client:s}=l();return u$1(n,{appName:c?.name,onRetry:()=>{let o=p();a({...m,login:{...m?.login,...o?.disableSignup?{disableSignup:true}:{}}}),s?.authFlow&&(s.authFlow=void 0),t("LandingScreen");}})}};

export { m as AccountNotFoundScreen, n as AccountNotFoundScreenView, m as default };
