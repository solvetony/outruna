import { dw as u$1, ds as We, dx as l, dl as d, dn as y, fd as I, dr as u$2, dJ as a } from './index-R8WYfo0z.js';
import { j } from './WalletInfoCard-zmo6O2YN-tyN1SExS.js';
import { n } from './ScreenLayout-XFsWudNK-e07oj7pS.js';
import { C as CircleAlert } from './circle-alert-D7pVPyYV.js';
import { C as CircleCheckBig } from './circle-check-big-Dq9T0Kuk.js';
import { c as createLucideIcon } from './createLucideIcon-CaOmkA1M.js';
import './ModalFooter-BldNwiHO-6nqBQ_V2.js';
import './ErrorMessage-D8VaAP5m-DFUAiJhE.js';
import './LabelXs-oqZNqbm_-vfT-QoYT.js';
import './Address-DMC9FYV2-D5oNewkx.js';
import './check-DfkoJN2-.js';
import './copy-CoC9cbpm.js';
import './shared-FM0rljBt-CGUN434C.js';
import './Screen-Dtn4lspb-DNqqnSKh.js';
import './index-CWARkn2w-BdCWEcbj.js';

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

const u=({appName:s,address:i,success:n$1,error:c,onAccept:m,onDecline:l,onClose:p})=>/*#__PURE__*/u$2(n,n$1||c?{title:c?"Something went wrong":"Success!",subtitle:c?"Please try again.":`You've successfully granted delegated action permissions to ${s}.`,icon:c?CircleAlert:CircleCheckBig,iconVariant:c?"error":"success",onBack:p,watermark:true}:{title:"Enable offline access",subtitle:`By confirming, ${s} will be able to use your wallet for you even when you're not around. You can revoke this later.`,icon:CloudUpload,primaryCta:{label:"Accept",onClick:m},secondaryCta:{label:"Not now",onClick:l},onBack:p,watermark:true,children:/*#__PURE__*/u$2(j,{address:i,title:"Wallet"})}),f={component:()=>{let{data:o}=u$1(),r=We(),{closePrivyModal:t}=l(),[a$1,d$1]=d(false),[f,j]=d(),{address:y$1,onDelegate:h,onSuccess:g,onError:w}=o.delegatedActions.consent,b=async()=>{a$1?g():w(f??new a("User declined delegating actions.")),t({shouldCallAuthOnSuccess:false});};return y((()=>{if(!a$1&&!f)return;let e=setTimeout(b,I);return ()=>clearTimeout(e)}),[a$1,f]),/*#__PURE__*/u$2(u,{appName:r.name,address:y$1,success:a$1,error:f,onAccept:async()=>{try{await h(),d$1(!0);}catch(e){j(e);}},onDecline:()=>{b();},onClose:b})}};

export { f as DelegatedActionsConsentScreen, u as DelegatedActionsConsentScreenView, f as default };
