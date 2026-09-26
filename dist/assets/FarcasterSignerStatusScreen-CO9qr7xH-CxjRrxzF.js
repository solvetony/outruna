import { dq as g, dl as le, dr as l, df as d, dg as A, dh as y$1, eJ as g$1, dk as u, eM as libExports, eX as P, du as gt } from './index-BzZ64suB.js';
import { h } from './CopyToClipboard-DSTf_eKU-DATJRmFK.js';
import { n } from './OpenLink-DZHy38vr-DCzc34TW.js';
import { C as C$1 } from './QrCode-mmar0Iu7-ZFgO0LQJ.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { l as l$1 } from './farcaster-DPlSjvF5-CbEPLu93.js';
import './dijkstra-3x-KSy8X.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

let y="#8a63d2";const j=({appName:r,loading:o,success:a,errorMessage:n$2,connectUri:d,onBack:u$1,onClose:g,onOpenFarcaster:h$1})=>/*#__PURE__*/u(n$1,libExports.isMobile||o?libExports.isIOS?{title:n$2?n$2.message:"Add a signer to Farcaster",subtitle:n$2?n$2.detail:`This will allow ${r} to add casts, likes, follows, and more on your behalf.`,icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:a,fail:!!n$2},primaryCta:d&&h$1?{label:"Open Farcaster app",onClick:h$1}:void 0,onBack:u$1,onClose:g,watermark:true}:{title:n$2?n$2.message:"Requesting signer from Farcaster",subtitle:n$2?n$2.detail:"This should only take a moment",icon:l$1,iconVariant:"loading",iconLoadingStatus:{success:a,fail:!!n$2},onBack:u$1,onClose:g,watermark:true,children:d&&libExports.isMobile&&/*#__PURE__*/u(x,{children:/*#__PURE__*/u(n,{text:"Take me to Farcaster",url:d,color:y})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${r} to add casts, likes, follows, and more on your behalf.`,onBack:u$1,onClose:g,watermark:true,children:/*#__PURE__*/u(k,{children:[/*#__PURE__*/u(w,{children:d?/*#__PURE__*/u(C$1,{url:d,size:275,squareLogoElement:l$1}):/*#__PURE__*/u(b,{children:/*#__PURE__*/u(P,{})})}),/*#__PURE__*/u(C,{children:[/*#__PURE__*/u(S,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),d&&/*#__PURE__*/u(h,{text:d,itemName:"link",color:y})]})]})});let x=gt.div`
  margin-top: 24px;
`,k=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,w=gt.div`
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
`,S=gt.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,b=gt.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const T={component:()=>{let{lastScreen:t,navigateBack:i,data:s}=g(),n=le(),{requestFarcasterSignerStatus:l$1,closePrivyModal:c}=l(),[m,p]=d(void 0),[f,v]=d(false),[y,x]=d(false),k=A([]),w=s?.farcasterSigner;y$1((()=>{let e=Date.now(),t=setInterval((async()=>{if(!w?.public_key)return clearInterval(t),void p({retryable:true,message:"Connect failed",detail:"Something went wrong. Please try again."});"approved"===w.status&&(clearInterval(t),v(false),x(true),k.current.push(setTimeout((()=>c({shouldCallAuthOnSuccess:false,isSuccess:true})),g$1)));let r=await l$1(w?.public_key),o=Date.now()-e;"approved"===r.status?(clearInterval(t),v(false),x(true),k.current.push(setTimeout((()=>c({shouldCallAuthOnSuccess:false,isSuccess:true})),g$1))):o>3e5?(clearInterval(t),p({retryable:true,message:"Connect failed",detail:"The request timed out. Try again."})):"revoked"===r.status&&(clearInterval(t),p({retryable:true,message:"Request rejected",detail:"The request was rejected. Please try again."}));}),2e3);return ()=>{clearInterval(t),k.current.forEach((e=>clearTimeout(e)));}}),[]);let C="pending_approval"===w?.status?w.signer_approval_url:void 0;return u(j,{appName:n.name,loading:f,success:y,errorMessage:m,connectUri:C,onBack:t?i:void 0,onClose:c,onOpenFarcaster:()=>{C&&(window.location.href=C);}})}};

export { T as FarcasterSignerStatusScreen, j as FarcasterSignerStatusView, T as default };
