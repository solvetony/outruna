import { dr as l, dq as g, dk as u } from './index-BzZ64suB.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { C as CircleX } from './circle-x-cml7Ywvh.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';
import './createLucideIcon-BUXdLDa7.js';

const n=({title:o="Could not connect with wallet",subtitle:r="Please check that Phantom multichain is enabled and try again.",primaryCtaText:n="Try again",secondaryCtaText:m="Cancel",onTryAgain:a,onCancel:c})=>/*#__PURE__*/u(n$1,{title:o,subtitle:r,icon:CircleX,iconVariant:"error",primaryCta:{label:n,onClick:a},secondaryCta:{label:m,onClick:c},watermark:true}),m={component:()=>{let{closePrivyModal:e}=l(),{navigate:i}=g();return u(n,{onTryAgain:()=>{i("LandingScreen");},onCancel:async()=>{await e();}})}};

export { m as LoginFailedScreen, n as LoginFailedScreenView, m as default };
