import { dw as u, dr as u$1 } from './index-R8WYfo0z.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-e07oj7pS.js';
import './ModalFooter-BldNwiHO-6nqBQ_V2.js';
import './Screen-Dtn4lspb-DNqqnSKh.js';
import './index-CWARkn2w-BdCWEcbj.js';

const r=({style:t,...e})=>/*#__PURE__*/u$1("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"38px",width:"38px",...t},...e,children:/*#__PURE__*/u$1("path",{d:"M20 13.6V20M20 26.4H20.016M36 20C36 28.8365 28.8366 36 20 36C11.1635 36 4.00001 28.8365 4.00001 20C4.00001 11.1634 11.1635 3.99999 20 3.99999C28.8366 3.99999 36 11.1634 36 20Z",stroke:"currentColor",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round"})}),i=({title:t="Unable to sign in",subtitle:i="This is a test application that has reached its user limit. To allow more users, this app needs to be upgraded to production.",onGoBack:n})=>/*#__PURE__*/u$1(n$1,{title:t,subtitle:i,icon:r,iconVariant:"subtle",primaryCta:{label:"Go back",onClick:n},showBack:true,onBack:n,watermark:true}),n={component:()=>{let{navigate:e}=u();return u$1(i,{onGoBack:()=>{e("LandingScreen");}})}};

export { n as UserLimitReachedScreen, i as UserLimitReachedScreenView, n as default };
