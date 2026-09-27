import { dA as gt, dB as Be, gj as ge, dx as l, dw as u, dl as d, dn as y, dr as u$1, dD as t, dE as i, fX as ft, fW as l$1 } from './index-EUcPO3t8.js';
import { c, a } from './TodoList-DnyULl18-DBQRLus-.js';
import { n } from './ScreenLayout-XFsWudNK-0BUZ2wqz.js';
import { C as CircleCheckBig } from './circle-check-big-Cd4-ZiED.js';
import { F as FingerprintPattern } from './fingerprint-pattern-CKmNiyDh.js';
import { c as createLucideIcon } from './createLucideIcon-Dr1CdE0w.js';
import './x-DfONinLj.js';
import './check-C3PxgdAj.js';
import './ModalFooter-BldNwiHO-cbbk5I2M.js';
import './Screen-Dtn4lspb-DHq1H6v0.js';
import './index-CWARkn2w-CNB395Bz.js';

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

const k=({passkeys:t,name:n$1,isLoading:a,errorReason:s,success:l,expanded:c,onLinkPasskey:d,onUnlinkPasskey:m,onExpand:p,onBack:h,onClose:u})=>l?/*#__PURE__*/u$1(n,{title:"Passkeys updated",icon:CircleCheckBig,iconVariant:"success",primaryCta:{label:"Done",onClick:u},onClose:u,watermark:true}):c?/*#__PURE__*/u$1(n,{icon:FingerprintPattern,title:"Your passkeys",onBack:h,onClose:u,watermark:true,children:/*#__PURE__*/u$1(C,{passkeys:t,expanded:c,onUnlink:m,onExpand:p})}):/*#__PURE__*/u$1(n,{icon:FingerprintPattern,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:d,loading:a},onClose:u,watermark:true,helpText:s||void 0,children:[0===t.length?/*#__PURE__*/u$1(I,{}):/*#__PURE__*/u$1(x,{children:/*#__PURE__*/u$1(C,{passkeys:t,expanded:c,onUnlink:m,onExpand:p})}),n$1?/*#__PURE__*/u$1(w,{children:[/*#__PURE__*/u$1(j,{children:"New Passkey Name"}),/*#__PURE__*/u$1(b,{children:n$1})]}):null]});let x=gt.div`
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
`,C=({passkeys:o,expanded:i,onUnlink:a,onExpand:s})=>{let[l,d$1]=d([]),m=i?o.length:2;return u$1("div",{children:[/*#__PURE__*/u$1(z,{children:"Your passkeys"}),/*#__PURE__*/u$1(N,{children:[o.slice(0,m).map((o=>{return u$1(S,{children:[/*#__PURE__*/u$1("div",{children:[/*#__PURE__*/u$1(M,{children:(i=o,i.authenticatorName?i.createdWithBrowser?`${i.authenticatorName} on ${i.createdWithBrowser}`:i.authenticatorName:i.createdWithBrowser?i.createdWithOs?`${i.createdWithBrowser} on ${i.createdWithOs}`:`${i.createdWithBrowser}`:"Unknown device")}),/*#__PURE__*/u$1(W,{children:["Last used:"," ",(o.latestVerifiedAt??o.firstVerifiedAt)?.toLocaleString()??"N/A"]})]}),/*#__PURE__*/u$1(U,{disabled:l.includes(o.credentialId),onClick:()=>(async e=>{d$1((r=>r.concat([e]))),await a(e),d$1((r=>r.filter((r=>r!==e))));})(o.credentialId),children:l.includes(o.credentialId)?/*#__PURE__*/u$1(l$1,{}):/*#__PURE__*/u$1(Trash2,{size:16})})]},o.credentialId);var i;})),o.length>2&&!i&&/*#__PURE__*/u$1(L,{onClick:s,children:"View all"})]})]})},I=()=>/*#__PURE__*/u$1(a,{style:{color:"var(--privy-color-foreground)"},children:[/*#__PURE__*/u$1(c,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),/*#__PURE__*/u$1(c,{children:"Takes seconds to set up and use"}),/*#__PURE__*/u$1(c,{children:"Use your passkey to verify transactions and login to your account"})]});const A={component:()=>{let{user:r}=Be(),{unlink:o}=ge(),{linkWithPasskey:i$1,closePrivyModal:t$1}=l(),{data:s}=u(),l$1=r?.linkedAccounts.filter((e=>"passkey"===e.type)),[c,d$1]=d(false),[m,g]=d(""),[x,w]=d(false),[j,b]=d(false);y((()=>{0===l$1.length&&b(false);}),[l$1.length]);return u$1(k,{passkeys:l$1,name:s?.passkeyAuthModalData?.name,isLoading:c,errorReason:m,success:x,expanded:j,onLinkPasskey:()=>{d$1(true),i$1({name:s?.passkeyAuthModalData?.name}).then((()=>w(true))).catch((e=>{if(e instanceof t){if(e.privyErrorCode===i.CANNOT_LINK_MORE_OF_TYPE)return void g("Cannot link more passkeys to account.");if(e.privyErrorCode===i.PASSKEY_NOT_ALLOWED)return void g("Passkey request timed out or rejected by user.")}g("Unknown error occurred.");})).finally((()=>{d$1(false);}));},onUnlinkPasskey:async e=>(d$1(true),await o({credentialId:e}).then((()=>w(true))).catch((e=>{e instanceof t&&e.privyErrorCode===i.MISSING_MFA_CREDENTIALS?g("Cannot unlink a passkey enrolled in MFA"):g("Unknown error occurred.");})).finally((()=>{d$1(false);}))),onExpand:()=>b(true),onBack:()=>b(false),onClose:()=>t$1()})}},P=gt.div`
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
`;let E=ft`
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
  ${E}
`;let N=gt.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0 0;
  flex-grow: 1;
  width: 100%;
`,z=gt.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`,M=gt.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,W=gt.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,S=gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid var(--privy-color-border-default) !important;
  width: 100%;
  height: 5em;
`,T=ft`
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
`,U=gt.button`
  ${T}
`;

export { P as DoubleIconWrapper, L as LinkButton, A as LinkPasskeyScreen, k as LinkPasskeyView, A as default };
