import { dq as g, dl as le, dk as u } from './index-YiUby3C-.js';
import { n } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-CH-hckRr.js';
import { L as Lock } from './lock-B4F7S7M0.js';
import './ModalHeader-C1WIsRkF-C8Dss9Lk.js';
import './Screen-My4NO62A-B0fsS_yH.js';
import './index-Dq_xe9dz-t6shERUf.js';
import './createLucideIcon-BHrOL54T.js';

const m=({title:e="You don't have access to this app",subtitle:r="Have you been invited?",ctaText:m="Try another account",ctaLink:a,onCtaClick:s})=>/*#__PURE__*/u(n$1,{title:e,subtitle:r,icon:Lock,iconVariant:"warning",primaryCta:{label:m,onClick:()=>{let t=n(a);t?window.open(t,"_blank","noopener,noreferrer"):s?.();}},watermark:true}),a={component:()=>{let{navigate:o}=g(),i=le(),n=i?.allowlistConfig.errorTitle||"You don't have access to this app",a=i?.allowlistConfig.errorDetail||"Have you been invited?",s=i?.allowlistConfig.errorCtaText||"Try another account",c=i?.allowlistConfig.errorCtaLink;return u(m,{title:n,subtitle:a,ctaText:s,ctaLink:c??void 0,onCtaClick:()=>{o("LandingScreen");}})}};

export { a as AllowlistRejectionScreen, m as AllowlistRejectionScreenView, a as default };
