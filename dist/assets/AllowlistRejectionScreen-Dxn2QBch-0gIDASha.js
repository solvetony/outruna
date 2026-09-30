import { dw as u, ds as We, dr as u$1 } from './index-Dq2VaVGI.js';
import { n as n$1 } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$2 } from './ScreenLayout-XFsWudNK-CN4cWQHJ.js';
import { L as Lock } from './lock-w0LZaXQl.js';
import './ModalFooter-BldNwiHO-C05ODpwE.js';
import './Screen-Dtn4lspb-DO_UP8l-.js';
import './index-CWARkn2w-Cp1mFdPg.js';
import './createLucideIcon-nJAUx3Zv.js';

const n=({title:r="You don't have access to this app",subtitle:e="Have you been invited?",ctaText:n="Try another account",ctaLink:c,onCtaClick:l})=>/*#__PURE__*/u$1(n$2,{title:r,subtitle:e,icon:Lock,iconVariant:"warning",primaryCta:{label:n,onClick:()=>{let o=n$1(c);o?window.open(o,"_blank","noopener,noreferrer"):l?.();}},watermark:true}),c={component:()=>{let{navigate:t}=u(),i=We(),a=i?.allowlistConfig.errorTitle||"You don't have access to this app",c=i?.allowlistConfig.errorDetail||"Have you been invited?",l=i?.allowlistConfig.errorCtaText||"Try another account",m=i?.allowlistConfig.errorCtaLink;return u$1(n,{title:a,subtitle:c,ctaText:l,ctaLink:m??void 0,onCtaClick:()=>{t("LandingScreen");}})}};

export { c as AllowlistRejectionScreen, n as AllowlistRejectionScreenView, c as default };
