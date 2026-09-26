import { dq as g, dl as le, dk as u } from './index-BzZ64suB.js';
import { n } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { L as Lock } from './lock-DDPhO-Is.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';
import './createLucideIcon-BUXdLDa7.js';

const m=({title:e="You don't have access to this app",subtitle:r="Have you been invited?",ctaText:m="Try another account",ctaLink:a,onCtaClick:s})=>/*#__PURE__*/u(n$1,{title:e,subtitle:r,icon:Lock,iconVariant:"warning",primaryCta:{label:m,onClick:()=>{let t=n(a);t?window.open(t,"_blank","noopener,noreferrer"):s?.();}},watermark:true}),a={component:()=>{let{navigate:o}=g(),i=le(),n=i?.allowlistConfig.errorTitle||"You don't have access to this app",a=i?.allowlistConfig.errorDetail||"Have you been invited?",s=i?.allowlistConfig.errorCtaText||"Try another account",c=i?.allowlistConfig.errorCtaLink;return u(m,{title:n,subtitle:a,ctaText:s,ctaLink:c??void 0,onCtaClick:()=>{o("LandingScreen");}})}};

export { a as AllowlistRejectionScreen, m as AllowlistRejectionScreenView, a as default };
