import { dw as u, ds as We, dr as u$1 } from './index-DzW10a_X.js';
import { n as n$1 } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$2 } from './ScreenLayout-XFsWudNK-KSOTIx5K.js';
import { L as Lock } from './lock-DNB1l_Tm.js';
import './ModalFooter-BldNwiHO-icJc5Gc0.js';
import './Screen-Dtn4lspb-Lsu5D_FU.js';
import './index-CWARkn2w-1np9INFJ.js';
import './createLucideIcon-DhFLRiVw.js';

const n=({title:r="You don't have access to this app",subtitle:e="Have you been invited?",ctaText:n="Try another account",ctaLink:c,onCtaClick:l})=>/*#__PURE__*/u$1(n$2,{title:r,subtitle:e,icon:Lock,iconVariant:"warning",primaryCta:{label:n,onClick:()=>{let o=n$1(c);o?window.open(o,"_blank","noopener,noreferrer"):l?.();}},watermark:true}),c={component:()=>{let{navigate:t}=u(),i=We(),a=i?.allowlistConfig.errorTitle||"You don't have access to this app",c=i?.allowlistConfig.errorDetail||"Have you been invited?",l=i?.allowlistConfig.errorCtaText||"Try another account",m=i?.allowlistConfig.errorCtaLink;return u$1(n,{title:a,subtitle:c,ctaText:l,ctaLink:m??void 0,onCtaClick:()=>{t("LandingScreen");}})}};

export { c as AllowlistRejectionScreen, n as AllowlistRejectionScreenView, c as default };
