import { dv as k, dq as g, df as d, dg as A$1, de as q, gG as t, dk as u, dG as S$1, he as fl, eM as libExports, du as gt } from './index-BzZ64suB.js';
import { p as p$1 } from './CopyableText-ChtfBWx4-By_tlTRH.js';
import { n } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { i } from './InfoBanner-DkQEPd77-GpYX095_.js';
import { w, c, p } from './SelectSourceAsset-C4di8q02-D_5_Yf5B.js';
import { r } from './chevron-down-C8xkiv2v.js';
import { c as createLucideIcon } from './createLucideIcon-BUXdLDa7.js';
import { H as Hourglass } from './hourglass-SDIWq2uT.js';
import { C as Check } from './check-B4HAls8G.js';
import { C as CircleX } from './circle-x-cml7Ywvh.js';
import './copy-BHYMHz7f.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);

const j=e=>{try{return e.location.origin}catch{return}},x=({data:r,onClose:o})=>/*#__PURE__*/u(n,{showClose:true,onClose:o,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:o},watermark:false,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:/*#__PURE__*/u(A,{children:(fl[r.deposit_instructions.asset]||[]).map((([o,s],i)=>{let a=r.deposit_instructions[o];if(!a||Array.isArray(a))return null;let n="asset"===o?a.toUpperCase():a,c=n.length>100?`${n.slice(0,9)}...${n.slice(-9)}`:n;return u(S,{children:[/*#__PURE__*/u(E,{children:s}),/*#__PURE__*/u(p$1,{value:n,includeChildren:libExports.isMobile,children:/*#__PURE__*/u(I,{children:c})})]},i)}))})});let A=gt.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,S=gt.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,E=gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,I=gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`;const T=({onClose:t})=>/*#__PURE__*/u(n,{showClose:true,onClose:t,icon:CircleX,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:t},watermark:true}),U=({onClose:t,reason:r})=>{let o=r?r.charAt(0).toLowerCase()+r.slice(1):void 0;return u(n,{showClose:true,onClose:t,icon:CircleX,iconVariant:"error",title:"Identity verification failed",subtitle:o?`We can't complete identity verification because ${o}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:t},watermark:true})},_=({onClose:r,email:o})=>/*#__PURE__*/u(n,{showClose:true,onClose:r,icon:Hourglass,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:r},watermark:true,children:/*#__PURE__*/u(i,{theme:"light",children:["You'll receive an email at ",o," once approved with instructions for completing your deposit."]})}),L=({onClose:o,onAcceptTerms:s,isLoading:i})=>/*#__PURE__*/u(n,{showClose:true,onClose:o,icon:UserCheck,title:"Verify your identity to continue",subtitle:"Finish verification with Persona — it takes just a few minutes and requires a government ID.",helpText:/*#__PURE__*/u(S$1,{children:['This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge\'s'," ",/*#__PURE__*/u("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",/*#__PURE__*/u("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:s,loading:i},watermark:true}),P=({onClose:t})=>/*#__PURE__*/u(n,{showClose:true,onClose:t,icon:Check,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:true},watermark:true}),W=({opts:r,onClose:o,onEditSourceAsset:s,onSelectAmount:i,isLoading:a})=>/*#__PURE__*/u(n,{showClose:true,onClose:o,headerTitle:`Buy ${r.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:i,loading:a},watermark:true,children:[/*#__PURE__*/u(c,{currency:r.source.selectedAsset,inputMode:"decimal",autoFocus:true}),/*#__PURE__*/u(p,{selectedAsset:r.source.selectedAsset,onEditSourceAsset:s})]}),B=({onClose:t,onAcceptTerms:r,onSelectAmount:o,onSelectSource:s,onEditSourceAsset:i,opts:a,state:n,email:c,isLoading:l})=>"select-amount"===n.status?/*#__PURE__*/u(W,{onClose:t,onSelectAmount:o,onEditSourceAsset:i,opts:a,isLoading:l}):"select-source-asset"===n.status?/*#__PURE__*/u(w,{onSelectSource:s,opts:a,isLoading:l}):"kyc-prompt"===n.status?/*#__PURE__*/u(L,{onClose:t,onAcceptTerms:r,opts:a,isLoading:l}):"kyc-incomplete"===n.status?/*#__PURE__*/u(_,{onClose:t,email:c}):"kyc-success"===n.status?/*#__PURE__*/u(P,{onClose:t}):"kyc-error"===n.status?/*#__PURE__*/u(U,{onClose:t,reason:n.reason}):"account-details"===n.status?/*#__PURE__*/u(x,{onClose:t,data:n.data}):"create-customer-error"===n.status||"get-customer-error"===n.status?/*#__PURE__*/u(T,{onClose:t}):null,z={component:()=>{let{user:t$1}=k(),r$1=g().data;if(!r$1?.FundWithBankDepositScreen)throw Error("Missing data");let{onSuccess:u$1,onFailure:m,opts:d$1,createOrUpdateCustomer:p,getCustomer:f,getOrCreateVirtualAccount:y}=r$1.FundWithBankDepositScreen,[h,g$1]=d(d$1),[v,C]=d({status:"select-amount"}),[w,b]=d(null),[k$1,x]=d(false),A=A$1(null),S=q((async()=>{let e;x(true),b(null);try{e=await f({kycRedirectUrl:window.location.origin});}catch(e){if(!e||"object"!=typeof e||!("status"in e)||404!==e.status)return C({status:"get-customer-error"}),b(e),void x(false)}if(!e)try{e=await p({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin});}catch(e){return C({status:"create-customer-error"}),b(e),void x(false)}if(!e)return C({status:"create-customer-error"}),b(Error("Unable to create customer")),void x(false);if("not_started"===e.status&&e.kyc_url)return C({status:"kyc-prompt",kycUrl:e.kyc_url}),void x(false);if("not_started"===e.status)return C({status:"get-customer-error"}),b(Error("Unexpected user state")),void x(false);if("rejected"===e.status)return C({status:"kyc-error",reason:e.rejection_reasons?.[0]?.reason}),b(Error("User KYC rejected.")),void x(false);if("incomplete"===e.status)return C({status:"kyc-incomplete"}),void x(false);if("active"!==e.status)return C({status:"get-customer-error"}),b(Error("Unexpected user state")),void x(false);e.status;try{let e=await y({destination:h.destination,provider:h.provider,source:{asset:h.source.selectedAsset}});C({status:"account-details",data:e});}catch(e){return C({status:"create-customer-error"}),b(e),void x(false)}}),[h]),E=q((async()=>{if(b(null),x(true),"kyc-prompt"!==v.status)return b(Error("Unexpected state")),void x(false);let e=t({location:v.kycUrl});if(await p({hasAcceptedTerms:true}),!e)return b(Error("Unable to begin kyc flow.")),x(false),void C({status:"create-customer-error"});A.current=new AbortController;let t$1=await(async(e,t)=>{let r$1=await r({operation:async()=>({done:j(e)===window.location.origin,closed:e.closed}),until:({done:e,closed:t})=>e||t,delay:0,interval:500,attempts:360,signal:t});return "aborted"===r$1.status?(e.close(),{status:"aborted"}):"max_attempts"===r$1.status?{status:"timeout"}:r$1.result.done?(e.close(),{status:"redirected"}):{status:"closed"}})(e,A.current.signal);if("aborted"===t$1.status)return;if("closed"===t$1.status)return void x(false);t$1.status;let r$1=await r({operation:()=>f({}),until:e=>"active"===e.status||"rejected"===e.status,delay:0,interval:2e3,attempts:60,signal:A.current.signal});if("aborted"!==r$1.status){if("max_attempts"===r$1.status)return C({status:"kyc-incomplete"}),void x(false);if(r$1.status,"rejected"===r$1.result.status)return C({status:"kyc-error",reason:r$1.result.rejection_reasons?.[0]?.reason}),b(Error("User KYC rejected.")),void x(false);if("active"!==r$1.result.status)return C({status:"kyc-incomplete"}),void x(false);e.closed||e.close(),r$1.result.status;try{C({status:"kyc-success"});let e=await y({destination:h.destination,provider:h.provider,source:{asset:h.source.selectedAsset}});C({status:"account-details",data:e});}catch(e){C({status:"create-customer-error"}),b(e);}finally{x(false);}}}),[C,b,x,p,y,v,h,A]),I=q((e=>{C({status:"select-amount"}),g$1({...h,source:{...h.source,selectedAsset:e}});}),[C,g$1]),T=q((()=>{C({status:"select-source-asset"});}),[C]);return u(B,{onClose:q((async()=>{A.current?.abort(),w?m(w):await u$1();}),[w,A]),opts:h,state:v,isLoading:k$1,email:t$1.email.address,onAcceptTerms:E,onSelectAmount:S,onSelectSource:I,onEditSourceAsset:T})}};

export { z as FundWithBankDepositScreen, z as default };
