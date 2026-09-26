import { dv as k, dq as g, dl as le, dr as l, df as d, dg as A$1, dh as y, dy as i, eL as A$2, eJ as g$1, dk as u, eM as libExports, eX as P, du as gt, dG as S } from './index-BzZ64suB.js';
import { n } from './OpenLink-DZHy38vr-DCzc34TW.js';
import { C } from './QrCode-mmar0Iu7-ZFgO0LQJ.js';
import { $ as $$1 } from './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import { r } from './LabelXs-oqZNqbm_-BeisgTpq.js';
import { a } from './shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-BAPibJUr.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { l as l$1 } from './farcaster-DPlSjvF5-CbEPLu93.js';
import { C as Check } from './check-B4HAls8G.js';
import { C as Copy } from './copy-BHYMHz7f.js';
import './dijkstra-3x-KSy8X.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';
import './createLucideIcon-BUXdLDa7.js';

let E=gt.div`
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
  /* Use single-line truncation without nowrap to respect container width */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,F=gt(L)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,O=gt(r)`
  margin-bottom: 0.5rem;
`,_=gt($$1)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;const I=({value:a,title:n,placeholder:s,className:l,showCopyButton:c=true,truncate:d$1,maxLength:m=40,disabled:h=false})=>{let[v,f]=d(false),g=d$1&&a?((e,r,t)=>{if((e=e.startsWith("https://")?e.slice(8):e).length<=t)return e;if("middle"===r){let r=Math.ceil(t/2)-2,o=Math.floor(t/2)-1;return `${e.slice(0,r)}...${e.slice(-o)}`}return `${e.slice(0,t-3)}...`})(a,d$1,m):a;return y((()=>{if(v){let e=setTimeout((()=>f(false)),3e3);return ()=>clearTimeout(e)}}),[v]),/*#__PURE__*/u(E,{className:l,children:[n&&/*#__PURE__*/u(O,{children:n}),/*#__PURE__*/u(T,{$disabled:h,children:[/*#__PURE__*/u(A,{children:a?/*#__PURE__*/u(L,{$disabled:h,title:a,children:g}):/*#__PURE__*/u(F,{$disabled:h,children:s||"No value"})}),c&&a&&/*#__PURE__*/u(_,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(a).then((()=>f(true))).catch(console.error);},size:"sm",children:/*#__PURE__*/u(S,v?{children:["Copied",/*#__PURE__*/u(Check,{size:14})]}:{children:["Copy",/*#__PURE__*/u(Copy,{size:14})]})})]})]})},R=({connectUri:t,loading:o,success:i,errorMessage:a,onBack:l,onClose:p,onOpenFarcaster:u$1})=>/*#__PURE__*/u(n$1,libExports.isMobile||o?libExports.isIOS?{title:a?a.message:"Sign in with Farcaster",subtitle:a?a.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!a},primaryCta:t&&u$1?{label:"Open Farcaster app",onClick:u$1}:void 0,onBack:l,onClose:p,watermark:true}:{title:a?a.message:"Signing in with Farcaster",subtitle:a?a.detail:"This should only take a moment",icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:i,fail:!!a},onBack:l,onClose:p,watermark:true,children:t&&libExports.isMobile&&/*#__PURE__*/u(U,{children:/*#__PURE__*/u(n,{text:"Take me to Farcaster",url:t,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:l,onClose:p,watermark:true,children:/*#__PURE__*/u(M,{children:[/*#__PURE__*/u($,{children:t?/*#__PURE__*/u(C,{url:t,size:275,squareLogoElement:l$1}):/*#__PURE__*/u(z,{children:/*#__PURE__*/u(P,{})})}),/*#__PURE__*/u(W,{children:[/*#__PURE__*/u(D,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),t&&/*#__PURE__*/u(I,{value:t,truncate:"end",maxLength:30,showCopyButton:true,disabled:true})]})]})}),N={component:()=>{let{authenticated:e,logout:t,ready:n,user:s}=k(),{lastScreen:l$1,navigate:c,navigateBack:d$1,setModalData:m}=g(),p=le(),{getAuthFlow:u$1,loginWithFarcaster:h,closePrivyModal:v,createAnalyticsEvent:C}=l(),[S,E]=d(void 0),[T,A]=d(false),[L,F]=d(false),O=A$1([]),_=u$1(),I=_?.meta.connectUri;return y((()=>{let e=Date.now(),r=setInterval((async()=>{let t=await _.pollForReady.execute(),o=Date.now()-e;if(t){clearInterval(r),A(true);try{await h(),F(!0);}catch(e){let r={retryable:false,message:"Authentication failed"};if(e?.privyErrorCode===i.ALLOWLIST_REJECTED)return void c("AllowlistRejectionScreen");if(e?.privyErrorCode===i.USER_LIMIT_REACHED)return console.error(new A$2(e).toString()),void c("UserLimitReachedScreen");if(e?.privyErrorCode===i.USER_DOES_NOT_EXIST)return void c("AccountNotFoundScreen");if(e?.privyErrorCode===i.LINKED_TO_ANOTHER_USER)r.detail=e.message??"This account has already been linked to another user.";else {if(e?.privyErrorCode===i.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return m({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:"farcaster",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:e.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void c("LinkConflictScreen");e?.privyErrorCode===i.INVALID_CREDENTIALS?(r.retryable=true,r.detail="Something went wrong. Try again."):e?.privyErrorCode===i.TOO_MANY_REQUESTS&&(r.detail="Too many requests. Please wait before trying again.");}E(r);}}else o>12e4&&(clearInterval(r),E({retryable:true,message:"Authentication failed",detail:"The request timed out. Try again."}));}),2e3);return ()=>{clearInterval(r),O.current.forEach((e=>clearTimeout(e)));}}),[]),y((()=>{if(n&&e&&L&&s){if(p?.legal.requireUsersAcceptTerms&&!s.hasAcceptedTerms){let e=setTimeout((()=>{c("AffirmativeConsentScreen");}),g$1);return ()=>clearTimeout(e)}L&&(a(s,p.embeddedWallets)?O.current.push(setTimeout((()=>{m({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),C({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"FarcasterConnectStatusScreen"}}),t();},callAuthOnSuccessOnClose:true}}),c("EmbeddedWalletOnAccountCreateScreen");}),g$1)):O.current.push(setTimeout((()=>v({shouldCallAuthOnSuccess:true,isSuccess:true})),g$1)));}}),[L,n,e,s]),/*#__PURE__*/u(R,{connectUri:I,loading:T,success:L,errorMessage:S,onBack:l$1?d$1:void 0,onClose:v,onOpenFarcaster:()=>{I&&(window.location.href=I);}})}};let U=gt.div`
  margin-top: 24px;
`,M=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,$=gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,W=gt.div`
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

export { N as FarcasterConnectStatusScreen, R as FarcasterConnectStatusView, N as default };
