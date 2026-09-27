import { dB as Be, dw as u, dl as d, dm as A$1, dk as q, g$ as t, fp as Ea, dr as u$1, dN as S$1, hz as FC, eJ as libExports, dA as gt } from './index-CPWVoOsP.js';
import { h } from './CopyableText-CQapvaMr-BC6EPVyg.js';
import { n } from './ScreenLayout-XFsWudNK-Dy0L-ckL.js';
import { t as t$1 } from './InfoBanner-Cb3p1z12-BH1coNOU.js';
import { w, c, p } from './SelectSourceAsset-BE6EzMW7-C_sAbSiz.js';
import { c as createLucideIcon } from './createLucideIcon-7kZA5_hm.js';
import { H as Hourglass } from './hourglass-Dg6FbQFF.js';
import { C as Check } from './check-BXl8y-gf.js';
import { C as CircleX } from './circle-x-D2R0R00P.js';
import './copy-xj9gnyrS.js';
import './ModalFooter-BldNwiHO-D8r0EtXN.js';
import './Screen-Dtn4lspb-D7quXLJv.js';
import './index-CWARkn2w-BCsAGrk1.js';
import './chevron-down-N0v1MYZ0.js';

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

const j=e=>{try{return e.location.origin}catch{return}},A=({data:r,onClose:o})=>/*#__PURE__*/u$1(n,{showClose:true,onClose:o,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:o},watermark:false,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:/*#__PURE__*/u$1(x,{children:(FC[r.deposit_instructions.asset]||[]).map((([o,s],i)=>{let a=r.deposit_instructions[o];if(!a||Array.isArray(a))return null;let n="asset"===o?a.toUpperCase():a,c=n.length>100?`${n.slice(0,9)}...${n.slice(-9)}`:n;return u$1(S,{children:[/*#__PURE__*/u$1(B,{children:s}),/*#__PURE__*/u$1(h,{value:n,includeChildren:libExports.isMobile,children:/*#__PURE__*/u$1(U,{children:c})})]},i)}))})});let x=gt.ol`
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
`,B=gt.span`
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
`,U=gt.span`
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
`;const E=({onClose:t})=>/*#__PURE__*/u$1(n,{showClose:true,onClose:t,icon:CircleX,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:t},watermark:true}),I=({onClose:t,reason:r})=>{let o=r?r.charAt(0).toLowerCase()+r.slice(1):void 0;return u$1(n,{showClose:true,onClose:t,icon:CircleX,iconVariant:"error",title:"Identity verification failed",subtitle:o?`We can't complete identity verification because ${o}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:t},watermark:true})},T=({onClose:r,email:o})=>/*#__PURE__*/u$1(n,{showClose:true,onClose:r,icon:Hourglass,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:r},watermark:true,children:/*#__PURE__*/u$1(t$1,{theme:"light",children:["You'll receive an email at ",o," once approved with instructions for completing your deposit."]})}),_=({onClose:o,onAcceptTerms:s,isLoading:i})=>/*#__PURE__*/u$1(n,{showClose:true,onClose:o,icon:UserCheck,title:"Verify your identity to continue",subtitle:"Finish verification with Persona — it takes just a few minutes and requires a government ID.",helpText:/*#__PURE__*/u$1(S$1,{children:['This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge\'s'," ",/*#__PURE__*/u$1("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",/*#__PURE__*/u$1("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:s,loading:i},watermark:true}),L=({onClose:t})=>/*#__PURE__*/u$1(n,{showClose:true,onClose:t,icon:Check,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:true},watermark:true}),P=({opts:r,onClose:o,onBack:s,onEditSourceAsset:i,onSelectAmount:a,isLoading:n$1})=>/*#__PURE__*/u$1(n,{showClose:true,onClose:o,showBack:!!s,onBack:s,headerTitle:`Buy ${r.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:a,loading:n$1},watermark:true,children:[/*#__PURE__*/u$1(c,{currency:r.source.selectedAsset,inputMode:"decimal",autoFocus:true}),/*#__PURE__*/u$1(p,{selectedAsset:r.source.selectedAsset,onEditSourceAsset:i})]}),W=({onClose:t,onBack:r,onAcceptTerms:o,onSelectAmount:s,onSelectSource:i,onEditSourceAsset:a,opts:n,state:c,email:l,isLoading:u})=>"select-amount"===c.status?/*#__PURE__*/u$1(P,{onClose:t,onBack:r,onSelectAmount:s,onEditSourceAsset:a,opts:n,isLoading:u}):"select-source-asset"===c.status?/*#__PURE__*/u$1(w,{onSelectSource:i,opts:n,isLoading:u}):"kyc-prompt"===c.status?/*#__PURE__*/u$1(_,{onClose:t,onAcceptTerms:o,opts:n,isLoading:u}):"kyc-incomplete"===c.status?/*#__PURE__*/u$1(T,{onClose:t,email:l}):"kyc-success"===c.status?/*#__PURE__*/u$1(L,{onClose:t}):"kyc-error"===c.status?/*#__PURE__*/u$1(I,{onClose:t,reason:c.reason}):"account-details"===c.status?/*#__PURE__*/u$1(A,{onClose:t,data:c.data}):"create-customer-error"===c.status||"get-customer-error"===c.status?/*#__PURE__*/u$1(E,{onClose:t}):null,z={component:()=>{let{user:t$1}=Be(),r=u().data;if(!r?.FundWithBankDepositScreen)throw Error("Missing data");let{onSuccess:u$2,onFailure:d$1,onBack:m,opts:p,createOrUpdateCustomer:f,getCustomer:y,getOrCreateVirtualAccount:h}=r.FundWithBankDepositScreen,[g,v]=d(p),[k,w]=d({status:"select-amount"}),[C,b]=d(null),[A,x]=d(false),S=A$1(null),B=q((async()=>{let e;x(true),b(null);try{e=await y({kycRedirectUrl:window.location.origin});}catch(e){if(!e||"object"!=typeof e||!("status"in e)||404!==e.status)return w({status:"get-customer-error"}),b(e),void x(false)}if(!e)try{e=await f({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin});}catch(e){return w({status:"create-customer-error"}),b(e),void x(false)}if(!e)return w({status:"create-customer-error"}),b(Error("Unable to create customer")),void x(false);if("not_started"===e.status&&e.kyc_url)return w({status:"kyc-prompt",kycUrl:e.kyc_url}),void x(false);if("not_started"===e.status)return w({status:"get-customer-error"}),b(Error("Unexpected user state")),void x(false);if("rejected"===e.status)return w({status:"kyc-error",reason:e.rejection_reasons?.[0]?.reason}),b(Error("User KYC rejected.")),void x(false);if("incomplete"===e.status)return w({status:"kyc-incomplete"}),void x(false);if("active"!==e.status)return w({status:"get-customer-error"}),b(Error("Unexpected user state")),void x(false);e.status;try{let e=await h({destination:g.destination,provider:g.provider,source:{asset:g.source.selectedAsset}});w({status:"account-details",data:e});}catch(e){return w({status:"create-customer-error"}),b(e),void x(false)}}),[g]),U=q((async()=>{if(b(null),x(true),"kyc-prompt"!==k.status)return b(Error("Unexpected state")),void x(false);let e=t({location:k.kycUrl});if(await f({hasAcceptedTerms:true}),!e)return b(Error("Unable to begin kyc flow.")),x(false),void w({status:"create-customer-error"});S.current=new AbortController;let t$1=await(async(e,t)=>{let r=await Ea({operation:async()=>({done:j(e)===window.location.origin,closed:e.closed}),until:({done:e,closed:t})=>e||t,delay:0,interval:500,attempts:360,signal:t});return "aborted"===r.status?(e.close(),{status:"aborted"}):"max_attempts"===r.status?{status:"timeout"}:r.result.done?(e.close(),{status:"redirected"}):{status:"closed"}})(e,S.current.signal);if("aborted"===t$1.status)return;if("closed"===t$1.status)return void x(false);t$1.status;let r=await Ea({operation:()=>y({}),until:e=>"active"===e.status||"rejected"===e.status,delay:0,interval:2e3,attempts:60,signal:S.current.signal});if("aborted"!==r.status){if("max_attempts"===r.status)return w({status:"kyc-incomplete"}),void x(false);if(r.status,"rejected"===r.result.status)return w({status:"kyc-error",reason:r.result.rejection_reasons?.[0]?.reason}),b(Error("User KYC rejected.")),void x(false);if("active"!==r.result.status)return w({status:"kyc-incomplete"}),void x(false);e.closed||e.close(),r.result.status;try{w({status:"kyc-success"});let e=await h({destination:g.destination,provider:g.provider,source:{asset:g.source.selectedAsset}});w({status:"account-details",data:e});}catch(e){w({status:"create-customer-error"}),b(e);}finally{x(false);}}}),[w,b,x,f,h,k,g,S]),E=q((e=>{w({status:"select-amount"}),v({...g,source:{...g.source,selectedAsset:e}});}),[w,v]),I=q((()=>{w({status:"select-source-asset"});}),[w]);return u$1(W,{onClose:q((async()=>{S.current?.abort(),!g.showBackButton||"select-amount"!==k.status&&"select-source-asset"!==k.status?C?d$1(C):await u$2():d$1(Error("User cancelled funding"));}),[C,S,d$1,u$2,g.showBackButton,k.status]),onBack:m,opts:g,state:k,isLoading:A,email:t$1.email.address,onAcceptTerms:U,onSelectAmount:B,onSelectSource:E,onEditSourceAsset:I})}};

export { z as FundWithBankDepositScreen, z as default };
