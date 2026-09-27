import { dw as u$1, ds as We, dx as l, dl as d$1, dn as y, fd as I, dr as u$2, dJ as a } from './index-DsU0Cpsn.js';
import { n } from './ScreenLayout-XFsWudNK-Bimst8L2.js';
import { C as CircleAlert } from './circle-alert-B_duGw0W.js';
import { C as CircleCheckBig } from './circle-check-big-D3kCHZcc.js';
import { c as createLucideIcon } from './createLucideIcon-CQWz50lu.js';
import './ModalFooter-BldNwiHO-DaeXXHpR.js';
import './Screen-Dtn4lspb-CYbOG2S4.js';
import './index-CWARkn2w-Ctvle-0L.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Ban = createLucideIcon("ban", __iconNode);

const u=({appName:n$1,success:i,error:s,onRevoke:a,onDeny:c,onClose:m})=>/*#__PURE__*/u$2(n,i||s?{title:s?"Something went wrong":"Success!",subtitle:s?"Please try again.":"You've successfully revoked permissions.",icon:s?CircleAlert:CircleCheckBig,iconVariant:s?"error":"success",onBack:m,watermark:true}:{title:"Revoke offline access to wallet",subtitle:`By confirming, ${n$1} will no longer be able to use this wallet on your behalf when you are not online.`,icon:Ban,primaryCta:{label:"Confirm",onClick:a},secondaryCta:{label:"Deny",onClick:c},onBack:m,watermark:true}),d={component:()=>{let{data:o}=u$1(),r=We(),{closePrivyModal:t}=l(),[p,d]=d$1(false),[y$1,f]=d$1(),{onRevoke:k,onSuccess:h,onError:w}=o.delegatedActions.revoke,j=async()=>{p?h():w(y$1??new a("User declined revoking access to their delegated wallet.")),t({shouldCallAuthOnSuccess:false});};return y((()=>{if(!p&&!y$1)return;let e=setTimeout(j,I);return ()=>clearTimeout(e)}),[p,y$1]),/*#__PURE__*/u$2(u,{appName:r.name,success:p,error:y$1,onRevoke:async()=>{try{await k(),d(!0);}catch(e){f(e);}},onDeny:()=>{j();},onClose:j})}};

export { d as DelegatedActionsRevokeScreen, u as DelegatedActionsRevokeScreenView, d as default };
