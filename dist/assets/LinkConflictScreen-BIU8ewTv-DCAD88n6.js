import { dj as D, dt as k$1, dx as l, dw as u, dl as d, dr as u$1, dN as S$1, ds as We, dA as gt } from './index-Cl25p6UW.js';
import { F as ForwardRef$1 } from './ExclamationTriangleIcon-SJsutE4X.js';
import { F as ForwardRef$2 } from './WalletIcon-BJAM1Ug5.js';
import { L as L$1, b as b$1, f, h } from './ModalFooter-BldNwiHO-DYI_DD7F.js';
import { i } from './StackedContainer-B2vaEl56-CexBZPIK.js';
import { d as d$1 } from './Address-DMC9FYV2-Bsonh0Ea.js';
import { e } from './capitalizeFirstLetter-DmLYqXsO-D0kFZm3E.js';
import { F as ForwardRef$3 } from './ExclamationCircleIcon-Dwvkg6ZB.js';
import './check-CUIZ2C5m.js';
import './createLucideIcon-BxaKzdjV.js';
import './copy-BrEjolja.js';

function Square2StackIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k$1("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k$1("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k$1("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
  }));
}
const ForwardRef = /*#__PURE__*/ D(Square2StackIcon);

const v=gt.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }
`;function w(o){return u$1("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...o,children:[/*#__PURE__*/u$1("circle",{cx:"12",cy:"12",r:"10"}),/*#__PURE__*/u$1("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),/*#__PURE__*/u$1("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]})}const T=({onTransfer:e,isTransferring:o,transferSuccess:t})=>/*#__PURE__*/u$1(b$1,{...t?{success:true,children:"Success!"}:{warn:true,loading:o,onClick:e,children:"Transfer and delete account"}}),b=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`,k=gt.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`,C=gt.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`,A=gt(ForwardRef$3)`
  position: relative;
  width: ${({$iconSize:e})=>`${e}px`};
  height: ${({$iconSize:e})=>`${e}px`};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,S=gt(ForwardRef)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,j=gt.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`,I=gt.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`,W=gt.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;let M=()=>/*#__PURE__*/u$1(W,{children:/*#__PURE__*/u$1(A,{$iconSize:60})});const $=({address:t,onClose:a,onRetry:i,onTransfer:c,isTransferring:l,transferSuccess:u})=>{let{defaultChain:p}=We(),m=p.blockExplorers?.default.url??"https://etherscan.io";return u$1(S$1,{children:[/*#__PURE__*/u$1(L$1,{onClose:a,backFn:i}),/*#__PURE__*/u$1(b,{children:[/*#__PURE__*/u$1(M,{}),/*#__PURE__*/u$1(k,{children:[/*#__PURE__*/u$1("h3",{children:"Check account assets before transferring"}),/*#__PURE__*/u$1("p",{children:"Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost."}),/*#__PURE__*/u$1(j,{children:[/*#__PURE__*/u$1("p",{children:" To check your balance, you can:"}),/*#__PURE__*/u$1(I,{children:"Log out and log back into the other account, or "}),/*#__PURE__*/u$1(I,{children:["Copy your wallet address and use a"," ",/*#__PURE__*/u$1("u",{children:/*#__PURE__*/u$1("a",{target:"_blank",href:m,children:"block explorer"})})," ","to see if the account holds any assets."]})]}),/*#__PURE__*/u$1(C,{onClick:()=>navigator.clipboard.writeText(t).catch(console.error),children:[/*#__PURE__*/u$1(ForwardRef$2,{color:"var(--privy-color-foreground)",strokeWidth:2,height:"28px",width:"28px"}),/*#__PURE__*/u$1(d$1,{address:t,showCopyIcon:false}),/*#__PURE__*/u$1(S,{})]}),/*#__PURE__*/u$1(T,{onTransfer:c,isTransferring:l,transferSuccess:u})]})]}),/*#__PURE__*/u$1(h,{})]})},z={component:()=>{let{initiateAccountTransfer:e,closePrivyModal:o}=l(),{data:t,navigate:n,lastScreen:i,setModalData:s}=u(),[c,l$1]=d(void 0),[d$1,u$2]=d(false),[h,f]=d(false),g=async()=>{try{if(!t?.accountTransfer?.nonce||!t?.accountTransfer?.account)throw Error("missing account transfer inputs");f(!0),await e({nonce:t?.accountTransfer?.nonce,account:t?.accountTransfer?.account,accountType:t?.accountTransfer?.linkMethod,externalWalletMetadata:t?.accountTransfer?.externalWalletMetadata,telegramWebAppData:t?.accountTransfer?.telegramWebAppData,telegramAuthResult:t?.accountTransfer?.telegramAuthResult,farcasterEmbeddedAddress:t?.accountTransfer?.farcasterEmbeddedAddress,oAuthUserInfo:t?.accountTransfer?.oAuthUserInfo}),u$2(!0),f(!1),setTimeout(o,1e3);}catch(e){s({errorModalData:{error:e,previousScreen:i||"LinkConflictScreen"}}),n("ErrorScreen",true);}};return c?/*#__PURE__*/u$1($,{address:c,onClose:o,onRetry:()=>l$1(void 0),onTransfer:g,isTransferring:h,transferSuccess:d$1}):/*#__PURE__*/u$1(E,{onClose:o,onInfo:()=>l$1(t?.accountTransfer?.embeddedWalletAddress),onContinue:()=>l$1(t?.accountTransfer?.embeddedWalletAddress),onTransfer:g,isTransferring:h,transferSuccess:d$1,data:t})}},E=({onClose:n,onContinue:a,onInfo:l,onTransfer:h$1,transferSuccess:p,isTransferring:m,data:g})=>{if(!g?.accountTransfer?.linkMethod||!g?.accountTransfer?.displayName)return;let y={method:g?.accountTransfer?.linkMethod,handle:g?.accountTransfer?.displayName,disclosedAccount:g?.accountTransfer?.embeddedWalletAddress?{type:"wallet",handle:g?.accountTransfer?.embeddedWalletAddress}:void 0};return u$1(S$1,{children:[/*#__PURE__*/u$1(L$1,{closeable:true}),/*#__PURE__*/u$1(b,{children:[/*#__PURE__*/u$1(i,{children:/*#__PURE__*/u$1("div",{children:[/*#__PURE__*/u$1(v,{color:"var(--privy-color-error)"}),/*#__PURE__*/u$1(ForwardRef$1,{height:38,width:38,stroke:"var(--privy-color-error)"})]})}),/*#__PURE__*/u$1(k,{children:[/*#__PURE__*/u$1("h3",{children:[function(e$1){switch(e$1){case "sms":return "Phone number";case "email":return "Email address";case "siwe":return "Wallet address";case "siws":return "Solana wallet address";case "linkedin":return "LinkedIn profile";case "google":case "apple":case "discord":case "github":case "instagram":case "spotify":case "tiktok":case "line":case "twitch":case "twitter":case "telegram":case "farcaster":return `${e(e$1.replace("_oauth",""))} profile`;default:return e$1.startsWith("privy:")?"Cross-app account":e$1}}(y.method)," is associated with another account"]}),/*#__PURE__*/u$1("p",{children:["Do you want to transfer",/*#__PURE__*/u$1("b",{children:y.handle?` ${y.handle}`:""})," to this account instead? This will delete your other account."]}),/*#__PURE__*/u$1(L,{onClick:l,disclosedAccount:y.disclosedAccount})]}),/*#__PURE__*/u$1(k,{style:{gap:12,marginTop:12},children:[g?.accountTransfer?.embeddedWalletAddress?/*#__PURE__*/u$1(b$1,{onClick:a,children:"Continue"}):/*#__PURE__*/u$1(T,{onTransfer:h$1,transferSuccess:p,isTransferring:m}),/*#__PURE__*/u$1(f,{onClick:n,children:"No thanks"})]})]}),/*#__PURE__*/u$1(h,{})]})};function L({disclosedAccount:o,onClick:t}){return o?/*#__PURE__*/u$1(C,{onClick:t,children:[/*#__PURE__*/u$1(ForwardRef$2,{color:"var(--privy-color-foreground)",strokeWidth:2,height:"28px",width:"28px"}),/*#__PURE__*/u$1(d$1,{address:o.handle,showCopyIcon:false}),/*#__PURE__*/u$1(w,{width:15,height:15,color:"var(--privy-color-foreground-3)",style:{marginLeft:"auto"}})]}):null}

export { z as LinkConflictScreen, E as LinkConflictScreenView, z as default };
