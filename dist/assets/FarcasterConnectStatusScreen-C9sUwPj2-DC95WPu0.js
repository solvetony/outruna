import { dB as Be, dw as u, ds as We, dx as l, dl as d, dm as A$1, dn as y, dE as i, eI as A$2, eG as B, dr as u$1, eJ as libExports, e$ as a$1, dA as gt, dN as S } from './index-R8WYfo0z.js';
import { n } from './OpenLink-CUpJ1mOr-xRA56NqE.js';
import { x } from './QrCode-cA9rnMIN-C0IOpL1l.js';
import { f } from './ModalFooter-BldNwiHO-6nqBQ_V2.js';
import { r } from './LabelXs-oqZNqbm_-vfT-QoYT.js';
import { a } from './shouldProceedtoEmbeddedWalletCreationFlow-BxvaW_Vy-CWlJujtc.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-e07oj7pS.js';
import { l as l$1 } from './farcaster-DPlSjvF5-DlmyrVGu.js';
import { C as Check } from './check-DfkoJN2-.js';
import { C as Copy } from './copy-CoC9cbpm.js';
import './dijkstra-3x-KSy8X.js';
import './Screen-Dtn4lspb-DNqqnSKh.js';
import './index-CWARkn2w-BdCWEcbj.js';
import './createLucideIcon-CaOmkA1M.js';

let k=gt.div`
  width: 100%;
`,T=gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${e=>e.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${e=>e.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,A=gt.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,L=gt.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,F=gt(L)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,O=gt(r)`
  margin-bottom: 0.5rem;
`,_=gt(f)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;const I=({value:a,title:n,placeholder:s,className:l,showCopyButton:c=true,truncate:d$1,maxLength:m=40,disabled:h=false})=>{let[f,g]=d(false),v=d$1&&a?((e,r,t)=>{if((e=e.startsWith("https://")?e.slice(8):e).length<=t)return e;if("middle"===r){let r=Math.ceil(t/2)-2,i=Math.floor(t/2)-1;return `${e.slice(0,r)}...${e.slice(-i)}`}return `${e.slice(0,t-3)}...`})(a,d$1,m):a;return y((()=>{if(f){let e=setTimeout((()=>g(false)),3e3);return ()=>clearTimeout(e)}}),[f]),/*#__PURE__*/u$1(k,{className:l,children:[n&&/*#__PURE__*/u$1(O,{children:n}),/*#__PURE__*/u$1(T,{$disabled:h,children:[/*#__PURE__*/u$1(A,{children:a?/*#__PURE__*/u$1(L,{$disabled:h,title:a,children:v}):/*#__PURE__*/u$1(F,{$disabled:h,children:s||"No value"})}),c&&a&&/*#__PURE__*/u$1(_,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(a).then((()=>g(true))).catch(console.error);},size:"sm",children:/*#__PURE__*/u$1(S,f?{children:["Copied",/*#__PURE__*/u$1(Check,{size:14})]}:{children:["Copy",/*#__PURE__*/u$1(Copy,{size:14})]})})]})]})},N=({connectUri:t,loading:i,success:o,errorMessage:a,onBack:l,onClose:p,onOpenFarcaster:u})=>/*#__PURE__*/u$1(n$1,libExports.isMobile||i?libExports.isIOS?{title:a?a.message:"Sign in with Farcaster",subtitle:a?a.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:o,fail:!!a},primaryCta:t&&u?{label:"Open Farcaster app",onClick:u}:void 0,onBack:l,onClose:p,watermark:true}:{title:a?a.message:"Signing in with Farcaster",subtitle:a?a.detail:"This should only take a moment",icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:o,fail:!!a},onBack:l,onClose:p,watermark:true,children:t&&libExports.isMobile&&/*#__PURE__*/u$1(M,{children:/*#__PURE__*/u$1(n,{text:"Take me to Farcaster",url:t,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:l,onClose:p,watermark:true,children:/*#__PURE__*/u$1(U,{children:[/*#__PURE__*/u$1(W,{children:t?/*#__PURE__*/u$1(x,{url:t,size:275,squareLogoElement:l$1}):/*#__PURE__*/u$1(z,{children:/*#__PURE__*/u$1(a$1,{})})}),/*#__PURE__*/u$1($,{children:[/*#__PURE__*/u$1(D,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),t&&/*#__PURE__*/u$1(I,{value:t,truncate:"end",maxLength:30,showCopyButton:true,disabled:true})]})]})}),R={component:()=>{let{authenticated:e,logout:t,ready:n,user:s}=Be(),{lastScreen:l$1,navigate:c,navigateBack:d$1,setModalData:m}=u(),p=We(),{getAuthFlow:u$2,loginWithFarcaster:h,closePrivyModal:f,createAnalyticsEvent:C}=l(),[E,k]=d(void 0),[T,A]=d(false),[L,F]=d(false),O=A$1([]),_=u$2(),I=_?.meta.connectUri;return y((()=>{let e=Date.now(),r=setInterval((async()=>{let t=await _.pollForReady.execute(),i$1=Date.now()-e;if(t){clearInterval(r),A(true);try{await h(),F(!0);}catch(e){let r={retryable:false,message:"Authentication failed"};if(e?.privyErrorCode===i.ALLOWLIST_REJECTED)return void c("AllowlistRejectionScreen");if(e?.privyErrorCode===i.USER_LIMIT_REACHED)return console.error(new A$2(e).toString()),void c("UserLimitReachedScreen");if(e?.privyErrorCode===i.USER_DOES_NOT_EXIST)return void c("AccountNotFoundScreen");if(e?.privyErrorCode===i.LINKED_TO_ANOTHER_USER)r.detail=e.message??"This account has already been linked to another user.";else {if(e?.privyErrorCode===i.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return m({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:"farcaster",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:e.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void c("LinkConflictScreen");e?.privyErrorCode===i.INVALID_CREDENTIALS?(r.retryable=true,r.detail="Something went wrong. Try again."):e?.privyErrorCode===i.TOO_MANY_REQUESTS&&(r.detail="Too many requests. Please wait before trying again.");}k(r);}}else i$1>12e4&&(clearInterval(r),k({retryable:true,message:"Authentication failed",detail:"The request timed out. Try again."}));}),2e3);return ()=>{clearInterval(r),O.current.forEach((e=>clearTimeout(e)));}}),[]),y((()=>{if(n&&e&&L&&s){if(p?.legal.requireUsersAcceptTerms&&!s.hasAcceptedTerms){let e=setTimeout((()=>{c("AffirmativeConsentScreen");}),B);return ()=>clearTimeout(e)}L&&(a(s,p.embeddedWallets)?O.current.push(setTimeout((()=>{m({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),C({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"FarcasterConnectStatusScreen"}}),t();},callAuthOnSuccessOnClose:true}}),c("EmbeddedWalletOnAccountCreateScreen");}),B)):O.current.push(setTimeout((()=>f({shouldCallAuthOnSuccess:true,isSuccess:true})),B)));}}),[L,n,e,s]),/*#__PURE__*/u$1(N,{connectUri:I,loading:T,success:L,errorMessage:E,onBack:l$1?d$1:void 0,onClose:f,onOpenFarcaster:()=>{I&&(window.location.href=I);}})}};let M=gt.div`
  margin-top: 24px;
`,U=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,W=gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,$=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,D=gt.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,z=gt.div`
  position: relative;
  width: 82px;
  height: 82px;
`;

export { R as FarcasterConnectStatusScreen, N as FarcasterConnectStatusView, R as default };
