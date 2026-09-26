import { dq as g, dl as le, dr as l, df as d$1, dh as y, fa as h, dk as u, dC as s } from './index-BzZ64suB.js';
import { j as j$1 } from './WalletInfoCard-pBDMfJDY-DJrc2ggC.js';
import { n } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { C as CircleAlert } from './circle-alert-CwjyFp2j.js';
import { C as CircleCheckBig } from './circle-check-big-x7Y16n9a.js';
import { c as createLucideIcon } from './createLucideIcon-BUXdLDa7.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './ErrorMessage-D8VaAP5m-DSCgb487.js';
import './LabelXs-oqZNqbm_-BeisgTpq.js';
import './Address--RvzbtOt-Bgdklx2l.js';
import './check-B4HAls8G.js';
import './copy-BHYMHz7f.js';
import './shared-FM0rljBt-DZjf9ARM.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
];
const CloudUpload = createLucideIcon("cloud-upload", __iconNode);

const d=({appName:i,address:s,success:m,error:a,onAccept:c,onDecline:l,onClose:p})=>/*#__PURE__*/u(n,m||a?{title:a?"Something went wrong":"Success!",subtitle:a?"Please try again.":`You've successfully granted delegated action permissions to ${i}.`,icon:a?CircleAlert:CircleCheckBig,iconVariant:a?"error":"success",onBack:p,watermark:true}:{title:"Enable offline access",subtitle:`By confirming, ${i} will be able to use your wallet for you even when you're not around. You can revoke this later.`,icon:CloudUpload,primaryCta:{label:"Accept",onClick:c},secondaryCta:{label:"Not now",onClick:l},onBack:p,watermark:true,children:/*#__PURE__*/u(j$1,{address:s,title:"Wallet"})}),j={component:()=>{let{data:t}=g(),o=le(),{closePrivyModal:r}=l(),[n,u$1]=d$1(false),[j,f]=d$1(),{address:y$1,onDelegate:h$1,onSuccess:g$1,onError:v}=t.delegatedActions.consent,w=async()=>{n?g$1():v(j??new s("User declined delegating actions.")),r({shouldCallAuthOnSuccess:false});};return y((()=>{if(!n&&!j)return;let e=setTimeout(w,h);return ()=>clearTimeout(e)}),[n,j]),/*#__PURE__*/u(d,{appName:o.name,address:y$1,success:n,error:j,onAccept:async()=>{try{await h$1(),u$1(!0);}catch(e){f(e);}},onDecline:()=>{w();},onClose:w})}};

export { j as DelegatedActionsConsentScreen, d as DelegatedActionsConsentScreenView, j as default };
