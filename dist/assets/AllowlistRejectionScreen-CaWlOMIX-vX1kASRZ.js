import { dq as g, dl as le, dk as u } from './index-CMy8GldA.js';
import { n } from './safe-url-D7SRPu33-B4C4HSRI.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-BlKz-rU6.js';
import { L as Lock } from './lock-oBmaExMf.js';
import './ModalHeader-C1WIsRkF-Cv84eb10.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './index-Dq_xe9dz-hJh_mla6.js';
import './createLucideIcon-CGZvvyHL.js';

const m=({title:e="You don't have access to this app",subtitle:r="Have you been invited?",ctaText:m="Try another account",ctaLink:a,onCtaClick:s})=>/*#__PURE__*/u(n$1,{title:e,subtitle:r,icon:Lock,iconVariant:"warning",primaryCta:{label:m,onClick:()=>{let t=n(a);t?window.open(t,"_blank","noopener,noreferrer"):s?.();}},watermark:true}),a={component:()=>{let{navigate:o}=g(),i=le(),n=i?.allowlistConfig.errorTitle||"You don't have access to this app",a=i?.allowlistConfig.errorDetail||"Have you been invited?",s=i?.allowlistConfig.errorCtaText||"Try another account",c=i?.allowlistConfig.errorCtaLink;return u(m,{title:n,subtitle:a,ctaText:s,ctaLink:c??void 0,onCtaClick:()=>{o("LandingScreen");}})}};

export { a as AllowlistRejectionScreen, m as AllowlistRejectionScreenView, a as default };
