import { dw as u, ds as We, dr as u$1 } from './index-R8WYfo0z.js';
import { n as n$1 } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$2 } from './ScreenLayout-XFsWudNK-e07oj7pS.js';
import { L as Lock } from './lock-D8xYoBOs.js';
import './ModalFooter-BldNwiHO-6nqBQ_V2.js';
import './Screen-Dtn4lspb-DNqqnSKh.js';
import './index-CWARkn2w-BdCWEcbj.js';
import './createLucideIcon-CaOmkA1M.js';

const n=({title:r="You don't have access to this app",subtitle:e="Have you been invited?",ctaText:n="Try another account",ctaLink:c,onCtaClick:l})=>/*#__PURE__*/u$1(n$2,{title:r,subtitle:e,icon:Lock,iconVariant:"warning",primaryCta:{label:n,onClick:()=>{let o=n$1(c);o?window.open(o,"_blank","noopener,noreferrer"):l?.();}},watermark:true}),c={component:()=>{let{navigate:t}=u(),i=We(),a=i?.allowlistConfig.errorTitle||"You don't have access to this app",c=i?.allowlistConfig.errorDetail||"Have you been invited?",l=i?.allowlistConfig.errorCtaText||"Try another account",m=i?.allowlistConfig.errorCtaLink;return u$1(n,{title:a,subtitle:c,ctaText:l,ctaLink:m??void 0,onCtaClick:()=>{t("LandingScreen");}})}};

export { c as AllowlistRejectionScreen, n as AllowlistRejectionScreenView, c as default };
