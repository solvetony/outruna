import { dx as l, dw as u, dr as u$1 } from './index-EUcPO3t8.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-0BUZ2wqz.js';
import { C as CircleX } from './circle-x-xeyplM1M.js';
import './ModalFooter-BldNwiHO-cbbk5I2M.js';
import './Screen-Dtn4lspb-DHq1H6v0.js';
import './index-CWARkn2w-CNB395Bz.js';
import './createLucideIcon-Dr1CdE0w.js';

const a=({title:r="Could not connect with wallet",subtitle:e="Please check that Phantom multichain is enabled and try again.",primaryCtaText:a="Try again",secondaryCtaText:n="Cancel",onTryAgain:c,onCancel:m})=>/*#__PURE__*/u$1(n$1,{title:r,subtitle:e,icon:CircleX,iconVariant:"error",primaryCta:{label:a,onClick:c},secondaryCta:{label:n,onClick:m},watermark:true}),n={component:()=>{let{closePrivyModal:t}=l(),{navigate:i}=u();return u$1(a,{onTryAgain:()=>{i("LandingScreen");},onCancel:async()=>{await t();}})}};

export { n as LoginFailedScreen, a as LoginFailedScreenView, n as default };
