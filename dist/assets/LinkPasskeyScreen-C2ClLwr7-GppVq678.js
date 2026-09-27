import { du as gt, dv as k$1, g6 as G, dr as l, dq as g, df as d, dh as y, dk as u, dx as t, dy as i, fI as ft, fH as _ } from './index-BLGlf-uE.js';
import { c, a } from './TodoList-CgrU7uwu-DaSh8bWY.js';
import { n } from './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import { C as CircleCheckBig } from './circle-check-big-wJaeONI3.js';
import { F as FingerprintPattern } from './fingerprint-pattern-nxVZEGHV.js';
import { c as createLucideIcon } from './createLucideIcon-BFwUy9WP.js';
import './x-CMFCmYZQ.js';
import './check-C7hZ0Smk.js';
import './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './index-Dq_xe9dz-eZF2dpYh.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);

const k=({passkeys:i,name:n$1,isLoading:a,errorReason:s,success:c,expanded:l,onLinkPasskey:d,onUnlinkPasskey:m,onExpand:p,onBack:h,onClose:u$1})=>c?/*#__PURE__*/u(n,{title:"Passkeys updated",icon:CircleCheckBig,iconVariant:"success",primaryCta:{label:"Done",onClick:u$1},onClose:u$1,watermark:true}):l?/*#__PURE__*/u(n,{icon:FingerprintPattern,title:"Your passkeys",onBack:h,onClose:u$1,watermark:true,children:/*#__PURE__*/u(C,{passkeys:i,expanded:l,onUnlink:m,onExpand:p})}):/*#__PURE__*/u(n,{icon:FingerprintPattern,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:d,loading:a},onClose:u$1,watermark:true,helpText:s||void 0,children:[0===i.length?/*#__PURE__*/u(A,{}):/*#__PURE__*/u(x,{children:/*#__PURE__*/u(C,{passkeys:i,expanded:l,onUnlink:m,onExpand:p})}),n$1?/*#__PURE__*/u(w,{children:[/*#__PURE__*/u(j,{children:"New Passkey Name"}),/*#__PURE__*/u(b,{children:n$1})]}):null]});let x=gt.div`
  margin-bottom: 0.75rem;
`,w=gt.div`
  margin-top: 0.25rem;
`,j=gt.div`
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,b=gt.div`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
`,C=({passkeys:o,expanded:t,onUnlink:a,onExpand:s})=>{let[c,d$1]=d([]),m=t?o.length:2;return u("div",{children:[/*#__PURE__*/u(z,{children:"Your passkeys"}),/*#__PURE__*/u(N,{children:[o.slice(0,m).map((o=>{return u(M,{children:[/*#__PURE__*/u("div",{children:[/*#__PURE__*/u(S,{children:(t=o,t.authenticatorName?t.createdWithBrowser?`${t.authenticatorName} on ${t.createdWithBrowser}`:t.authenticatorName:t.createdWithBrowser?t.createdWithOs?`${t.createdWithBrowser} on ${t.createdWithOs}`:`${t.createdWithBrowser}`:"Unknown device")}),/*#__PURE__*/u(T,{children:["Last used:"," ",(o.latestVerifiedAt??o.firstVerifiedAt)?.toLocaleString()??"N/A"]})]}),/*#__PURE__*/u(W,{disabled:c.includes(o.credentialId),onClick:()=>(async e=>{d$1((r=>r.concat([e]))),await a(e),d$1((r=>r.filter((r=>r!==e))));})(o.credentialId),children:c.includes(o.credentialId)?/*#__PURE__*/u(_,{}):/*#__PURE__*/u(Trash2,{size:16})})]},o.credentialId);var t;})),o.length>2&&!t&&/*#__PURE__*/u(L,{onClick:s,children:"View all"})]})]})},A=()=>/*#__PURE__*/u(a,{style:{color:"var(--privy-color-foreground)"},children:[/*#__PURE__*/u(c,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),/*#__PURE__*/u(c,{children:"Takes seconds to set up and use"}),/*#__PURE__*/u(c,{children:"Use your passkey to verify transactions and login to your account"})]});const I={component:()=>{let{user:r}=k$1(),{unlink:o}=G(),{linkWithPasskey:t$1,closePrivyModal:i$1}=l(),{data:s}=g(),c=r?.linkedAccounts.filter((e=>"passkey"===e.type)),[l$1,d$1]=d(false),[m,g$1]=d(""),[x,w]=d(false),[j,b]=d(false);y((()=>{0===c.length&&b(false);}),[c.length]);return u(k,{passkeys:c,name:s?.passkeyAuthModalData?.name,isLoading:l$1,errorReason:m,success:x,expanded:j,onLinkPasskey:()=>{d$1(true),t$1({name:s?.passkeyAuthModalData?.name}).then((()=>w(true))).catch((e=>{if(e instanceof t){if(e.privyErrorCode===i.CANNOT_LINK_MORE_OF_TYPE)return void g$1("Cannot link more passkeys to account.");if(e.privyErrorCode===i.PASSKEY_NOT_ALLOWED)return void g$1("Passkey request timed out or rejected by user.")}g$1("Unknown error occurred.");})).finally((()=>{d$1(false);}));},onUnlinkPasskey:async e=>(d$1(true),await o({credentialId:e}).then((()=>w(true))).catch((e=>{e instanceof t&&e.privyErrorCode===i.MISSING_MFA_CREDENTIALS?g$1("Cannot unlink a passkey enrolled in MFA"):g$1("Unknown error occurred.");})).finally((()=>{d$1(false);}))),onExpand:()=>b(true),onBack:()=>b(false),onClose:()=>i$1()})}},E=gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`;let P=ft`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;const L=gt.button`
  ${P}
`;let N=gt.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,z=gt.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-beginning;
  width: 100%;
`,S=gt.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,T=gt.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64668b;
  padding: 0.2em 0;
`,M=gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e2e3f0 !important;
  width: 100%;
  height: 5em;
`,U=ft`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,W=gt.button`
  ${U}
`;

export { E as DoubleIconWrapper, L as LinkButton, I as LinkPasskeyScreen, k as LinkPasskeyView, I as default };
