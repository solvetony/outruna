import { dw as u, ds as We, dx as l, dl as d, dm as A, dn as y$1, eG as B, dr as u$1, eJ as libExports, e$ as a, dA as gt } from './index-3FkWxgIP.js';
import { h } from './CopyToClipboard-i_OQSBJr-BygJwLFM.js';
import { n } from './OpenLink-CUpJ1mOr-DG4fh8xj.js';
import { x as x$1 } from './QrCode-cA9rnMIN-jV0FRQkI.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-DNV7SJP2.js';
import { l as l$1 } from './farcaster-DPlSjvF5-DJiZ87IT.js';
import './dijkstra-3x-KSy8X.js';
import './ModalFooter-BldNwiHO-t9A6RP80.js';
import './Screen-Dtn4lspb-C9H50C6b.js';
import './index-CWARkn2w-B0bmebIK.js';

let y="#8a63d2";const k=({appName:t,loading:o,success:a$1,errorMessage:n$2,connectUri:d,onBack:u,onClose:g,onOpenFarcaster:h$1})=>/*#__PURE__*/u$1(n$1,libExports.isMobile||o?libExports.isIOS?{title:n$2?n$2.message:"Add a signer to Farcaster",subtitle:n$2?n$2.detail:`This will allow ${t} to add casts, likes, follows, and more on your behalf.`,icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:a$1,fail:!!n$2},primaryCta:d&&h$1?{label:"Open Farcaster app",onClick:h$1}:void 0,onBack:u,onClose:g,watermark:true}:{title:n$2?n$2.message:"Requesting signer from Farcaster",subtitle:n$2?n$2.detail:"This should only take a moment",icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:a$1,fail:!!n$2},onBack:u,onClose:g,watermark:true,children:d&&libExports.isMobile&&/*#__PURE__*/u$1(j,{children:/*#__PURE__*/u$1(n,{text:"Take me to Farcaster",url:d,color:y})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${t} to add casts, likes, follows, and more on your behalf.`,onBack:u,onClose:g,watermark:true,children:/*#__PURE__*/u$1(w,{children:[/*#__PURE__*/u$1(x,{children:d?/*#__PURE__*/u$1(x$1,{url:d,size:275,squareLogoElement:l$1}):/*#__PURE__*/u$1(S,{children:/*#__PURE__*/u$1(a,{})})}),/*#__PURE__*/u$1(C,{children:[/*#__PURE__*/u$1(b,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),d&&/*#__PURE__*/u$1(h,{text:d,itemName:"link",color:y})]})]})});let j=gt.div`
  margin-top: 24px;
`,w=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,x=gt.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,C=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,b=gt.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,S=gt.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const F={component:()=>{let{lastScreen:r,navigateBack:i,data:s}=u(),n=We(),{requestFarcasterSignerStatus:l$1,closePrivyModal:c}=l(),[m,p]=d(void 0),[f,v]=d(false),[y,j]=d(false),w=A([]),x=s?.farcasterSigner;y$1((()=>{let e=Date.now(),r=setInterval((async()=>{if(!x?.public_key)return clearInterval(r),void p({retryable:true,message:"Connect failed",detail:"Something went wrong. Please try again."});"approved"===x.status&&(clearInterval(r),v(false),j(true),w.current.push(setTimeout((()=>c({shouldCallAuthOnSuccess:false,isSuccess:true})),B)));let t=await l$1(x?.public_key),o=Date.now()-e;"approved"===t.status?(clearInterval(r),v(false),j(true),w.current.push(setTimeout((()=>c({shouldCallAuthOnSuccess:false,isSuccess:true})),B))):o>3e5?(clearInterval(r),p({retryable:true,message:"Connect failed",detail:"The request timed out. Try again."})):"revoked"===t.status&&(clearInterval(r),p({retryable:true,message:"Request rejected",detail:"The request was rejected. Please try again."}));}),2e3);return ()=>{clearInterval(r),w.current.forEach((e=>clearTimeout(e)));}}),[]);let C="pending_approval"===x?.status?x.signer_approval_url:void 0;return u$1(k,{appName:n.name,loading:f,success:y,errorMessage:m,connectUri:C,onBack:r?i:void 0,onClose:c,onOpenFarcaster:()=>{C&&(window.location.href=C);}})}};

export { F as FarcasterSignerStatusScreen, k as FarcasterSignerStatusView, F as default };
