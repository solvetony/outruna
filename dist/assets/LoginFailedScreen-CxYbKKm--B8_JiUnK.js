import { dr as l, dq as g, dk as u } from './index-BLGlf-uE.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import { C as CircleX } from './circle-x-CntZ4dTf.js';
import './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './index-Dq_xe9dz-eZF2dpYh.js';
import './createLucideIcon-BFwUy9WP.js';

const n=({title:o="Could not connect with wallet",subtitle:r="Please check that Phantom multichain is enabled and try again.",primaryCtaText:n="Try again",secondaryCtaText:m="Cancel",onTryAgain:a,onCancel:c})=>/*#__PURE__*/u(n$1,{title:o,subtitle:r,icon:CircleX,iconVariant:"error",primaryCta:{label:n,onClick:a},secondaryCta:{label:m,onClick:c},watermark:true}),m={component:()=>{let{closePrivyModal:e}=l(),{navigate:i}=g();return u(n,{onTryAgain:()=>{i("LandingScreen");},onCancel:async()=>{await e();}})}};

export { m as LoginFailedScreen, n as LoginFailedScreenView, m as default };
