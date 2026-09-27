import { dx as l, dw as u, dr as u$1 } from './index-DEbwNYcQ.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-y3UXmd8X.js';
import { C as CircleX } from './circle-x-Q6F3U0WW.js';
import './ModalFooter-BldNwiHO-DThenGPE.js';
import './Screen-Dtn4lspb-DzeyLZAC.js';
import './index-CWARkn2w-DFl7VzFA.js';
import './createLucideIcon-B1GGFk-z.js';

const a=({title:r="Could not connect with wallet",subtitle:e="Please check that Phantom multichain is enabled and try again.",primaryCtaText:a="Try again",secondaryCtaText:n="Cancel",onTryAgain:c,onCancel:m})=>/*#__PURE__*/u$1(n$1,{title:r,subtitle:e,icon:CircleX,iconVariant:"error",primaryCta:{label:a,onClick:c},secondaryCta:{label:n,onClick:m},watermark:true}),n={component:()=>{let{closePrivyModal:t}=l(),{navigate:i}=u();return u$1(a,{onTryAgain:()=>{i("LandingScreen");},onCancel:async()=>{await t();}})}};

export { n as LoginFailedScreen, a as LoginFailedScreenView, n as default };
