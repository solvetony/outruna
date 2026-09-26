import { dd as D, dm as k, dr as l, df as d, dk as u, dG as S, dl as le$1, gd as k$1, hL as I, du as gt, q as isAddress } from './index-YiUby3C-.js';
import { T, g, m, u as u$1, V as V$1 } from './ModalHeader-C1WIsRkF-C8Dss9Lk.js';
import { t, s, e as e$1, n, a as t$1 } from './Value-tcJV9e0L-Dqb_yg-t.js';
import { e as e$2 } from './ErrorMessage-D8VaAP5m-CF4c2J-5.js';
import { r as r$1 } from './LabelXs-oqZNqbm_-CDhb_dLQ.js';
import { r } from './Subtitle-CV-2yKE4-CnZRRjLj.js';
import { e } from './Title-BnzYV3Is-BgQ1fbMV.js';
import { d as d$1 } from './Address--RvzbtOt-CL4POq29.js';
import { j } from './WalletInfoCard-pBDMfJDY-ClWXB5tr.js';
import { n as n$1 } from './LoadingSkeleton-U6-3yFwI-CSAm_3dT.js';
import { d as d$2 } from './shared-FM0rljBt-BYEhs0i-.js';
import { o, F as ForwardRef$5 } from './Checkbox-BhNoOKjX-DG3BFdr6.js';
import { t as t$3 } from './ErrorBanner-CQERa7bL-DIv2gS8d.js';
import { t as t$2 } from './WarningBanner-D5LqDt95-Bae0vGke.js';
import { F as ForwardRef$4 } from './ExclamationCircleIcon-B_OBXTJe.js';
import { F as ForwardRef$3 } from './ChevronDownIcon-D2oAX7sD.js';
import { i } from './formatters-ZBiDYZcQ.js';

function ArrowRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const ForwardRef$2 = /*#__PURE__*/ D(ArrowRightIcon);

function BoltIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
  }));
}
const ForwardRef$1 = /*#__PURE__*/ D(BoltIcon);

function ClipboardDocumentIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
  }));
}
const ForwardRef = /*#__PURE__*/ D(ClipboardDocumentIcon);

const B=gt(e$1)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`;var W=({iconUrl:n,value:i,symbol:o,usdValue:t,nftName:l,nftCount:a,decimals:s,$isLoading:c})=>{if(c)return u(z,{$isLoading:c});let d=i&&t&&s?function(e,r,n){let i=parseFloat(e),o=parseFloat(n);if(0===i||0===o||Number.isNaN(i)||Number.isNaN(o))return e;let t=Math.ceil(-Math.log10(.01/(o/i))),l=Math.pow(10,t=Math.max(t=Math.min(t,r),1)),a=+(Math.floor(i*l)/l).toFixed(t).replace(/\.?0+$/,"");return Intl.NumberFormat(void 0,{maximumFractionDigits:r}).format(a)}(i,s,t):i;return u("div",{children:[/*#__PURE__*/u(z,{$isLoading:c,children:[n&&/*#__PURE__*/u(V,{src:n,alt:"Token icon"}),a&&a>1?a+"x":void 0," ",l,d," ",o]}),t&&/*#__PURE__*/u(R,{$isLoading:c,children:["$",t]})]})};let z=gt.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${n$1}
`;const R=gt.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${n$1}
`;let V=gt.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`;const U=i=>{let{chain:o,transactionDetails:t$1,isTokenContractInfoLoading:l,symbol:a}=i,{action:s$1,functionName:c}=t$1;return u(d$2,{children:/*#__PURE__*/u(t,{children:["transaction"!==s$1&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Action"}),/*#__PURE__*/u(n,{children:c})]}),"mint"===c&&"args"in t$1&&t$1.args.filter((e=>e)).map(((n$1,i)=>/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:`Param ${i}`}),/*#__PURE__*/u(n,{children:"string"==typeof n$1&&isAddress(n$1)?/*#__PURE__*/u(d$1,{address:n$1,url:o?.blockExplorers?.default?.url,showCopyIcon:false}):n$1?.toString()})]},i))),"setApprovalForAll"===c&&t$1.operator&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Operator"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:t$1.operator,url:o?.blockExplorers?.default?.url,showCopyIcon:false})})]}),"setApprovalForAll"===c&&void 0!==t$1.approved&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Set approval to"}),/*#__PURE__*/u(n,{children:t$1.approved?"true":"false"})]}),"transfer"===c||"transferWithMemo"===c||"transferFrom"===c||"safeTransferFrom"===c||"approve"===c?/*#__PURE__*/u(S,{children:["formattedAmount"in t$1&&t$1.formattedAmount&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount"}),/*#__PURE__*/u(n,{$isLoading:l,children:[t$1.formattedAmount," ",a]})]}),"tokenId"in t$1&&t$1.tokenId&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token ID"}),/*#__PURE__*/u(n,{children:t$1.tokenId.toString()})]})]}):null,"safeBatchTransferFrom"===c&&/*#__PURE__*/u(S,{children:["amounts"in t$1&&t$1.amounts&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amounts"}),/*#__PURE__*/u(n,{children:t$1.amounts.join(", ")})]}),"tokenIds"in t$1&&t$1.tokenIds&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token IDs"}),/*#__PURE__*/u(n,{children:t$1.tokenIds.join(", ")})]})]}),"approve"===c&&t$1.spender&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Spender"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:t$1.spender,url:o?.blockExplorers?.default?.url,showCopyIcon:false})})]}),("transferFrom"===c||"safeTransferFrom"===c||"safeBatchTransferFrom"===c)&&t$1.transferFrom&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Transferring from"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:t$1.transferFrom,url:o?.blockExplorers?.default?.url,showCopyIcon:false})})]}),("transferFrom"===c||"safeTransferFrom"===c||"safeBatchTransferFrom"===c)&&t$1.transferTo&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Transferring to"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:t$1.transferTo,url:o?.blockExplorers?.default?.url,showCopyIcon:false})})]})]})})},H=({variant:i,setPreventMaliciousTransaction:o$1,colorScheme:t="light",preventMaliciousTransaction:l})=>"warn"===i?/*#__PURE__*/u(q,{children:/*#__PURE__*/u(t$2,{theme:t,children:[/*#__PURE__*/u("span",{style:{fontWeight:"500"},children:"Warning: Suspicious transaction"}),/*#__PURE__*/u("br",{}),"This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk."]})}):"error"===i?/*#__PURE__*/u(S,{children:/*#__PURE__*/u(q,{children:[/*#__PURE__*/u(t$3,{theme:t,children:/*#__PURE__*/u("div",{children:[/*#__PURE__*/u("strong",{children:"This is a malicious transaction"}),/*#__PURE__*/u("br",{}),"This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets."]})}),/*#__PURE__*/u(J,{children:[/*#__PURE__*/u(o,{color:"var(--privy-color-error)",checked:!l,readOnly:true,onClick:()=>o$1(!l)}),/*#__PURE__*/u("span",{children:"I understand and want to proceed anyways."})]})]})}):null;let q=gt.div`
  margin-top: 1.5rem;
`,J=gt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;const Q=({transactionIndex:e,maxIndex:r})=>"number"!=typeof e||0===r?"":` (${e+1} / ${r+1})`,G=({img:a,submitError:s$1,prepareError:u$2,onClose:v,action:I,title:S$1,subtitle:M,to:$,tokenAddress:j,network:E,missingFunds:O,fee:N,from:D,cta:F,disabled:L,chain:P,isSubmitting:z,isPreparing:R,isTokenPriceLoading:V,isTokenContractInfoLoading:q,isSponsored:J,symbol:G,balance:K,onClick:Y,transactionDetails:ne,transactionIndex:ie,maxIndex:oe,onBack:te,chainName:le,validation:ae,hasScanDetails:se,setIsScanDetailsOpen:ce,preventMaliciousTransaction:de,setPreventMaliciousTransaction:he,tokensSent:me,tokensReceived:ue,isScanning:pe,isCancellable:ge,functionName:fe})=>{let{showTransactionDetails:ye,setShowTransactionDetails:ke,hasMoreDetails:xe,isErc20Ish:ve}=(e=>{let[r,n]=d(false),i=true,o=false;return (!e||e.isErc20Ish||"transaction"===e.action)&&(i=false),i&&(o=Object.entries(e||{}).some((([e,r])=>r&&!["action","isErc20Ish","isNFTIsh"].includes(e)))),{showTransactionDetails:r,setShowTransactionDetails:n,hasMoreDetails:i&&o,isErc20Ish:e?.isErc20Ish}})(ne),be=le$1(),we=ve&&q||R||V||pe;return u(S,{children:[/*#__PURE__*/u(T,{onClose:v,backFn:te}),a&&/*#__PURE__*/u(Z,{children:a}),/*#__PURE__*/u(e,{style:{marginTop:a?"1.5rem":0},children:[S$1,/*#__PURE__*/u(Q,{maxIndex:oe,transactionIndex:ie})]}),/*#__PURE__*/u(r,{children:M}),/*#__PURE__*/u(t,{style:{marginTop:"2rem"},children:[(!!me[0]||we)&&/*#__PURE__*/u(s,{children:[ue.length>0?/*#__PURE__*/u(e$1,{children:"Send"}):/*#__PURE__*/u(e$1,{children:"approve"===I?"Approval amount":"Amount"}),/*#__PURE__*/u("div",{className:"flex flex-col",children:me.map(((r,n)=>/*#__PURE__*/u(W,{iconUrl:r.iconUrl,value:"setApprovalForAll"===fe?"All":r.value,usdValue:r.usdValue,symbol:r.symbol,nftName:r.nftName,nftCount:r.nftCount,decimals:r.decimals},n)))})]}),ue.length>0&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Receive"}),/*#__PURE__*/u("div",{className:"flex flex-col",children:ue.map(((r,n)=>/*#__PURE__*/u(W,{iconUrl:r.iconUrl,value:r.value,usdValue:r.usdValue,symbol:r.symbol,nftName:r.nftName,nftCount:r.nftCount,decimals:r.decimals},n)))})]}),ne&&"spender"in ne&&ne?.spender?/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Spender"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:ne.spender,url:P?.blockExplorers?.default?.url})})]}):null,$&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"To"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:$,url:P?.blockExplorers?.default?.url,showCopyIcon:true})})]}),j&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token address"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:j,url:P?.blockExplorers?.default?.url})})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Network"}),/*#__PURE__*/u(n,{children:E})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Estimated fee"}),/*#__PURE__*/u(n,{$isLoading:R||V||void 0===J,children:J?/*#__PURE__*/u(ee,{children:[/*#__PURE__*/u(re,{children:["Sponsored by ",be.name]}),/*#__PURE__*/u(ForwardRef$1,{height:16,width:16})]}):N})]}),xe&&!se&&/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(s,{className:"cursor-pointer",onClick:()=>ke(!ye),children:/*#__PURE__*/u(t$1,{className:"flex items-center gap-x-1",children:["Details"," ",/*#__PURE__*/u(ForwardRef$3,{style:{width:"0.75rem",marginLeft:"0.25rem",transform:ye?"rotate(180deg)":void 0}})]})}),ye&&ne&&/*#__PURE__*/u(U,{action:I,chain:P,transactionDetails:ne,isTokenContractInfoLoading:q,symbol:G})]}),se&&/*#__PURE__*/u(s,{children:/*#__PURE__*/u(B,{onClick:()=>ce(true),children:[/*#__PURE__*/u("span",{className:"text-color-primary",children:"Details"}),/*#__PURE__*/u(ForwardRef$2,{height:"14px",width:"14px",strokeWidth:"2"})]})})]}),/*#__PURE__*/u(k$1,{}),s$1?/*#__PURE__*/u(e$2,{style:{marginTop:"2rem"},children:s$1.message}):u$2&&0===ie?
/*#__PURE__*/u(e$2,{style:{marginTop:"2rem"},children:u$2.shortMessage??_}):null,/*#__PURE__*/u(H,{variant:ae,preventMaliciousTransaction:de,setPreventMaliciousTransaction:he}),/*#__PURE__*/u(X,{$useSmallMargins:!(!u$2&&!s$1&&"warn"!==ae&&"error"!==ae),address:D,balance:K,errMsg:R||u$2||s$1||!O?void 0:`Add funds on ${P?.name??le} to complete transaction.`}),/*#__PURE__*/u(m,{style:{marginTop:"1rem"},loading:z,disabled:L||R,onClick:Y,children:F}),ge&&/*#__PURE__*/u(V$1,{style:{marginTop:"1rem"},onClick:v,isSubmitting:false,children:"Not now"}),/*#__PURE__*/u(u$1,{})]})},K=({img:o,title:a,subtitle:h,cta:u$2,instructions:f,network:I,blockExplorerUrl:S$1,isMissingFunds:M,submitError:$,parseError:j,total:E,swap:O,transactingWalletAddress:N,fee:D,balance:F,disabled:L,isSubmitting:P,isPreparing:W,isTokenPriceLoading:z,onClick:R,onClose:V,onBack:U,isSponsored:H})=>{let q=W||z,[J,Q]=d(false),G=le$1();return u(S,{children:[/*#__PURE__*/u(T,{onClose:V,backFn:U}),o&&/*#__PURE__*/u(Z,{children:o}),/*#__PURE__*/u(e,{style:{marginTop:o?"1.5rem":0},children:a}),/*#__PURE__*/u(r,{children:h}),/*#__PURE__*/u(t,{style:{marginTop:"2rem",marginBottom:".5rem"},children:[(E||q)&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount"}),/*#__PURE__*/u(n,{$isLoading:q,children:E})]}),O&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Swap"}),/*#__PURE__*/u(n,{children:O})]}),I&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Network"}),/*#__PURE__*/u(n,{children:I})]}),(D||q||void 0!==H)&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Estimated fee"}),/*#__PURE__*/u(n,{$isLoading:q,children:H&&!q?/*#__PURE__*/u(ee,{children:[/*#__PURE__*/u(re,{children:["Sponsored by ",G.name]}),/*#__PURE__*/u(ForwardRef$1,{height:16,width:16})]}):D})]})]}),/*#__PURE__*/u(s,{children:/*#__PURE__*/u(B,{onClick:()=>Q((e=>!e)),children:[/*#__PURE__*/u("span",{children:"Advanced"}),/*#__PURE__*/u(ForwardRef$3,{height:"16px",width:"16px",strokeWidth:"2",style:{transition:"all 300ms",transform:J?"rotate(180deg)":void 0}})]})}),J&&/*#__PURE__*/u(S,{children:f.map(((n$1,i$1)=>"sol-transfer"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:["Transfer ",n$1.withSeed?"with seed":""]})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount"}),/*#__PURE__*/u(n,{children:[i({amount:n$1.value,decimals:n$1.token.decimals})," ",n$1.token.symbol]})]}),!!n$1.toAccount&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Destination"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.toAccount,url:S$1})})]})]},i$1):"spl-transfer"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:["Transfer ",n$1.token.symbol]})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount"}),/*#__PURE__*/u(n,{children:n$1.value.toString()})]}),!!n$1.fromAta&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Source"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.fromAta,url:S$1})})]}),!!n$1.toAta&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Destination"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.toAta,url:S$1})})]}),!!n$1.token.address&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.token.address,url:S$1})})]})]},i$1):"ata-creation"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:"Create token account"})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Program ID"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.program,url:S$1})})]}),!!n$1.owner&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Owner"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.owner,url:S$1})})]})]},i$1):"create-account"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:["Create account ",n$1.withSeed?"with seed":""]})}),!!n$1.account&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Account"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.account,url:S$1})})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount"}),/*#__PURE__*/u(n,{children:[i({amount:n$1.value,decimals:9})," SOL"]})]})]},i$1):"spl-init-account"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:"Initialize token account"})}),!!n$1.account&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Account"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.account,url:S$1})})]}),!!n$1.mint&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Mint"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mint,url:S$1})})]}),!!n$1.owner&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Owner"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.owner,url:S$1})})]})]},i$1):"spl-close-account"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:"Close token account"})}),!!n$1.source&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Source"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.source,url:S$1})})]}),!!n$1.destination&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Destination"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.destination,url:S$1})})]}),!!n$1.owner&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Owner"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.owner,url:S$1})})]})]},i$1):"spl-sync-native"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:"Sync native"})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Program ID"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.program,url:S$1})})]})]},i$1):"raydium-swap-base-input"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:["Raydium swap"," ",n$1.tokenIn&&n$1.tokenOut?`${n$1.tokenIn.symbol} → ${n$1.tokenOut.symbol}`:""]})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount in"}),/*#__PURE__*/u(n,{children:n$1.amountIn.toString()})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Minimum amount out"}),/*#__PURE__*/u(n,{children:n$1.minimumAmountOut.toString()})]}),n$1.mintIn&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token in"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintIn,url:S$1})})]}),n$1.mintOut&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token out"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintOut,url:S$1})})]})]},i$1):"raydium-swap-base-output"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:["Raydium swap"," ",n$1.tokenIn&&n$1.tokenOut?`${n$1.tokenIn.symbol} → ${n$1.tokenOut.symbol}`:""]})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Max amount in"}),/*#__PURE__*/u(n,{children:n$1.maxAmountIn.toString()})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount out"}),/*#__PURE__*/u(n,{children:n$1.amountOut.toString()})]}),n$1.mintIn&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token in"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintIn,url:S$1})})]}),n$1.mintOut&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token out"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintOut,url:S$1})})]})]},i$1):"jupiter-swap-shared-accounts-route"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:["Jupiter swap"," ",n$1.tokenIn&&n$1.tokenOut?`${n$1.tokenIn.symbol} → ${n$1.tokenOut.symbol}`:""]})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"In amount"}),/*#__PURE__*/u(n,{children:n$1.inAmount.toString()})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Quoted out amount"}),/*#__PURE__*/u(n,{children:n$1.quotedOutAmount.toString()})]}),n$1.mintIn&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token in"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintIn,url:S$1})})]}),n$1.mintOut&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token out"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintOut,url:S$1})})]})]},i$1):"jupiter-swap-exact-out-route"===n$1.type?/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:/*#__PURE__*/u(r$1,{children:["Jupiter swap"," ",n$1.tokenIn&&n$1.tokenOut?`${n$1.tokenIn.symbol} → ${n$1.tokenOut.symbol}`:""]})}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Quoted in amount"}),/*#__PURE__*/u(n,{children:n$1.quotedInAmount.toString()})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Amount out"}),/*#__PURE__*/u(n,{children:n$1.outAmount.toString()})]}),n$1.mintIn&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token in"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintIn,url:S$1})})]}),n$1.mintOut&&/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Token out"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.mintOut,url:S$1})})]})]},i$1):/*#__PURE__*/u(Y,{children:[/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Program ID"}),/*#__PURE__*/u(n,{children:/*#__PURE__*/u(d$1,{address:n$1.program,url:S$1})})]}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e$1,{children:"Data"}),/*#__PURE__*/u(n,{children:n$1.discriminator})]})]},i$1)))}),/*#__PURE__*/u(k$1,{}),$?/*#__PURE__*/u(e$2,{style:{marginTop:"2rem"},children:$.message}):j?/*#__PURE__*/u(e$2,{style:{marginTop:"2rem"},children:_}):null,/*#__PURE__*/u(X,{$useSmallMargins:!(!j&&!$),title:"",address:N,balance:F,errMsg:W||j||$||!M?void 0:"Add funds on Solana to complete transaction."}),/*#__PURE__*/u(m,{style:{marginTop:"1rem"},loading:P,disabled:L||W,onClick:R,children:u$2}),/*#__PURE__*/u(u$1,{})]})};let X=gt(j)`
  ${e=>e.$useSmallMargins?"margin-top: 0.5rem;":"margin-top: 2rem;"}
`,Y=gt(t)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`,_="There was an error preparing your transaction. Your transaction request will likely fail.",Z=gt.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,ee=gt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`,re=gt.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;let ne=e=>e?.code===I.COMPLIANCE_BLOCKED,ie=()=>/*#__PURE__*/u(se,{children:[/*#__PURE__*/u(de,{}),/*#__PURE__*/u(ce,{})]});const oe=({transactionError:i,chainId:o,onClose:t,onRetry:a,chainType:s,transactionHash:d$1})=>{let{chains:h}=l(),[m,p]=d(false),{errorCode:g$1,errorMessage:f}=((e,r)=>{if("ethereum"===r)return ne(e)?{errorCode:"Transaction blocked",errorMessage:e.message}:{errorCode:e.details??e.message,errorMessage:e.shortMessage};let n=e.txSignature,i=e?.transactionMessage||"Something went wrong.";if(Array.isArray(e.logs)){let r=e.logs.find((e=>/insufficient (lamports|funds)/gi.test(e)));r&&(i=r);}return {transactionHash:n,errorMessage:i}})(i,s),y=ne(i),k=(({chains:e,chainId:r,chainType:n,transactionHash:i})=>"ethereum"===n?e.find((e=>e.id===r))?.blockExplorers?.default.url??"https://etherscan.io":function(e,r){return `https://explorer.solana.com/tx/${e}?chain=${r}`}(i||"",r))({chains:h,chainId:o,chainType:s,transactionHash:d$1});return u(S,{children:[/*#__PURE__*/u(T,{onClose:t}),/*#__PURE__*/u(te,{children:[/*#__PURE__*/u(ie,{}),/*#__PURE__*/u(le,{children:g$1}),/*#__PURE__*/u(ae,{children:y?"This transaction cannot be completed.":"Please try again."}),/*#__PURE__*/u(ue,{children:[/*#__PURE__*/u(me,{children:"Error message"}),/*#__PURE__*/u(ge,{$clickable:false,children:f})]}),d$1&&/*#__PURE__*/u(ue,{children:[/*#__PURE__*/u(me,{children:"Transaction hash"}),/*#__PURE__*/u(pe,{children:["Copy this hash to view details about the transaction on a"," ",/*#__PURE__*/u("u",{children:/*#__PURE__*/u("a",{href:k,children:"block explorer"})}),"."]}),/*#__PURE__*/u(ge,{$clickable:true,onClick:async()=>{await navigator.clipboard.writeText(d$1),p(true);},children:[d$1,/*#__PURE__*/u(ke,{clicked:m})]})]}),!y&&/*#__PURE__*/u(he,{onClick:()=>a({resetNonce:!!d$1}),children:"Retry transaction"})]}),/*#__PURE__*/u(g,{})]})};let te=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,le=gt.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,ae=gt.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,se=gt.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ce=gt(ForwardRef$4)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,de=gt.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,he=gt(m)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,me=gt.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,ue=gt.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,pe=gt.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`,ge=gt.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${e=>e.$clickable&&"cursor: pointer;\n  transition: background-color 0.3s;\n  padding-right: 45px;\n\n  &:hover {\n    background-color: var(--privy-color-foreground-4);\n  }"}
`,fe=gt(ForwardRef)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,ye=gt(ForwardRef$5)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,ke=({clicked:r})=>/*#__PURE__*/u(r?ye:fe,{});

export { G, K, oe as o };
