import { fb as t, fc as create, dr as l, de as q, dq as g, dh as y, dk as u$1, dp as C, df as d$3, di as T, eX as P, du as gt, dG as S, fd as r$2, dg as A, dD as A$1 } from './index-CMy8GldA.js';
import { i as i$2, d as d$4, t as t$1, l as l$1, y as y$1, c as c$1, n as n$4, a as a$1, s as s$2, Q as QrCode, m, g as g$1, p as p$2, f as f$1, v, u as u$2, h, b } from './styles-BEdolEbW-CSWRowXa.js';
import { n as n$2 } from './ScreenLayout-b9cixoV5-BlKz-rU6.js';
import { n as n$3 } from './styles-DVyDvTdj-D_ReNtuD.js';
import { m as m$1 } from './ModalHeader-C1WIsRkF-Cv84eb10.js';
import { C as C$1 } from './QrCode-mmar0Iu7-CmBmTovL.js';
import { u as useFloating, c as useHover, s as safePolygon, d as useFocus, b as useInteractions, e as useClick, f as useDismiss, g as useRole, h as useTransitionStyles, F as FloatingPortal } from './floating-ui.react-4a1Jn8vo.js';
import { m as m$2 } from './CopyableText-ChtfBWx4-DvWts8WT.js';
import { T as TriangleAlert } from './triangle-alert-Pv-9fOUy.js';
import { c as createLucideIcon } from './createLucideIcon-CGZvvyHL.js';
import { r as r$1, C as ChevronDown } from './chevron-down-BTM3J_EU.js';
import { C as Check } from './check-CUZKcW1m.js';
import { H as Hourglass } from './hourglass-Ba0p6iq5.js';
import { I as Info } from './info-ClBR-K6Y.js';
import { b as autoUpdate, o as offset, f as flip, s as shift } from './floating-ui.react-dom-BRBdk49a.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './index-Dq_xe9dz-hJh_mla6.js';
import './dijkstra-3x-KSy8X.js';
import './copy-1Bdb-AWp.js';

const d$2={path:"/api/v1/onramp/deposit_addresses/quote",method:"POST"},s$1={path:"/api/v1/onramp/deposit_addresses/orders/:order_id",method:"GET"},o$1={path:"/api/v1/onramp/deposit_addresses/:deposit_address_id/next_order",method:"GET"},p$1={path:"/api/v1/onramp/deposit_addresses/deposit_config",method:"GET"};

function r(t){return t.startsWith("eip155:")?"ethereum":t.startsWith("solana:")?"solana":t.startsWith("bip122:")?"bitcoin-segwit":t.startsWith("tron:")?"tron":void 0}async function e(e){let{user:i}=await e.privy.user.get();if(!i)return {ok:false,error:"NOT_AUTHENTICATED"};let a=function(t,e){let i=r(t);if(!i)return;let a=e.linked_accounts.find((t=>"wallet"===t.type&&t.chain_type===i&&"address"in t&&t.address));return a&&"address"in a?a.address:void 0}(e.caip2,i);if(a)return {ok:true,address:a};let s=r(e.caip2);if(!s)return {ok:false,error:"UNSUPPORTED_CHAIN"};try{let r=await e.privy.fetchPrivyRoute(t,{body:{chain_type:s}});return await(e.onWalletCreated?.()),{ok:!0,address:r.address}}catch{return {ok:false,error:"REFUND_WALLET_CREATION_FAILED"}}}

async function i$1(i){let{user:s}=await i.privy.user.get();if(!s)throw Error("NOT_AUTHENTICATED");let t=i.refundAddress;if(!t){let r=await e({privy:i.privy,caip2:i.sourceChain,onWalletCreated:i.onWalletCreated});if(!r.ok)throw Error(r.error);t=r.address;}return await i.privy.fetchPrivyRoute(d$2,{body:{source_chain:i.sourceChain,source_currency:i.sourceCurrency,destination_chain:i.destinationChain,destination_currency:i.destinationCurrency,destination_address:i.destinationAddress,refund_address:t,...null!=i.slippageBps?{slippage_bps:i.slippageBps}:{}}})}

function s(t,r){return Math.ceil(r/t)}function i(t){return "success"===t.status?t.result?{status:"success",order:t.result}:{status:"timeout"}:"aborted"===t.status?{status:"aborted",error:t.error}:{status:"timeout",error:t.error}}async function o(r){return await r.privy.fetchPrivyRoute(s$1,{params:{order_id:r.orderId}})}async function a(o){let a=o.pollIntervalMs??2e3,n=o.timeoutMs??18e5,u=o.signal??(new AbortController).signal;return i(await r$1({operation:async()=>{let e=await o.privy.fetchPrivyRoute(o$1,{params:{deposit_address_id:o.depositAddressId},query:{after:o.quoteCreatedAt}});if(e.order)return await o.privy.fetchPrivyRoute(s$1,{params:{order_id:e.order.id}})},until:t=>void 0!==t,delay:a,interval:a,attempts:s(a,n),signal:u}))}async function n$1(r){let o=r.pollIntervalMs??2e3,a=r.timeoutMs??18e5,n=r.signal??(new AbortController).signal;return i(await r$1({operation:()=>r.privy.fetchPrivyRoute(s$1,{params:{order_id:r.orderId}}),until:t=>"executing"!==t.status,delay:o,interval:o,attempts:s(o,a),signal:n}))}

async function n(r){let o=await r.fetchPrivyRoute(p$1,{});return {currencies:o.currencies,chains:o.chains}}var d$1=/*#__PURE__*/Object.freeze({__proto__:null,generateDepositAddress:i$1,getConfig:n,getDeposit:o,resolveRefundAddress:e,waitForCompletion:n$1,waitForDeposit:a});

const d=create((()=>null)),c=r=>{null!==d.getState()&&d.setState(r);};async function u(r,t){let o=await r.fetchPrivyRoute(p$1,{}),a={config:{status:"ready",data:{currencies:o.currencies,chains:o.chains}}};t?.aborted||c(a);}function p(){let t=d(),{closePrivyModal:e,privy:a}=l(),n=t?.params??null,s=t?.config??{status:"loading"},i=q((r=>{c({modalState:r});}),[]),l$1=q((async()=>{let r=t?.controller;if(n&&r&&!r.signal.aborted){c({config:{status:"loading"}});try{await u(a,r.signal);}catch(t){if(r.signal.aborted)return;throw c({config:{status:"error",error:t instanceof Error?t:Error("Failed to load deposit config")}}),t}}}),[n,a,t?.controller]),p=q((()=>{if(!t)return;let{modalState:r}=t;"complete"===r.step?t.onComplete():"failed"===r.step?t.onError(Error("DEPOSIT_FAILED")):"error"===r.step?t.onError(Error(r.code)):"refunded"===r.step?t.onError(Error("DEPOSIT_REFUNDED")):t.onError(Error("USER_EXITED")),e({shouldCallAuthOnSuccess:false});}),[t,e]);return {modalState:t?.modalState??{step:"intro"},setModalState:i,config:s,retryConfig:l$1,params:n,close:p,onBack:t?.onBack}}function f(r){let{modalState:t,config:e,params:o,...a}=p();if(function(r,t){if(r.step!==t)throw Error("UNEXPECTED_STATE")}(t,r),!o||"ready"!==e.status)throw Error("UNEXPECTED_STATE");return {state:t,configData:e.data,params:o,...a}}

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$1);

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
];
const Undo2 = createLucideIcon("undo-2", __iconNode);

class de extends C{static getDerivedStateFromError(){return {hasError:true}}componentDidCatch(e,r){this.props.onError(e);}componentDidUpdate(e){e.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:false});}render(){return this.state.hasError?null:this.props.children}constructor(...e){super(...e),this.state={hasError:false};}}function ue(e,r,t){let n=Number(e);if(!Number.isFinite(n)||0===n)return `1 ${r} ≈ ${e} ${t}`;if(n>=.01){return `1 ${r} ≈ ${me(n)} ${t}`}return `${me(1/n)} ${r} ≈ 1 ${t}`}function me(e){return e>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(e):new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(e)}function pe(e,r){let t=Number(e);if(!Number.isFinite(t)||0===t)return e;let n=null!=r?t/10**r:t;return n>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(n):n>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(n):n>=1e-4?new Intl.NumberFormat("en-US",{maximumFractionDigits:6}).format(n):new Intl.NumberFormat("en-US",{maximumSignificantDigits:4}).format(n)}function he({address:e,caip2:r,config:t}){for(let n of t.currencies){let t=n.chains.find((t=>t.caip2===r&&t.address.toLowerCase()===e.toLowerCase()));if(t)return {symbol:n.symbol.toUpperCase(),decimals:t.decimals}}return {symbol:e,decimals:void 0}}function fe(e,r){return r[e]?.displayName??e}function ge(e,r){if(!e.chains[r.destinationChain])return `Unsupported destination chain: "${r.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let t=r.destinationCurrency.toLowerCase();return e.currencies.some((e=>e.chains.some((e=>e.caip2===r.destinationChain&&e.address.toLowerCase()===t))))?null:`Unsupported destination currency "${r.destinationCurrency}" on chain "${r.destinationChain}". Check that this token address is supported on the specified chain.`}let ye=new Set(["ROUTE_UNAVAILABLE","UNEXPECTED_STATE","TIMEOUT_WAITING_FOR_NEXT_ORDER","TIMEOUT_ORDER_COMPLETION","DEPOSIT_FAILED","DEPOSIT_REFUNDED","USER_EXITED","AMOUNT_TOO_LOW","INSUFFICIENT_LIQUIDITY","UNSUPPORTED_CHAIN","UNSUPPORTED_CURRENCY","UNSUPPORTED_ROUTE","NO_SWAP_ROUTES_FOUND","NO_INTERNAL_SWAP_ROUTES_FOUND","NO_QUOTES","SANCTIONED_WALLET_ADDRESS","REFUND_WALLET_CREATION_FAILED","DEPOSIT_ADDRESSES_NOT_ENABLED","NOT_AUTHENTICATED"]);function be(e){return ye.has(e)}function Ce(e){return be(e)?e:"UNKNOWN_ERROR"}function ve(){let{params:e,setModalState:r}=p(),{privy:t}=l(),n=function(){let{privy:e,refreshSessionAndUser:r}=l();return q(((t,n)=>n?Promise.resolve({ok:true,address:n}):d$1.resolveRefundAddress({privy:e,caip2:t,onWalletCreated:r})),[e,r])}(),[a,s]=d$3(false);return {fetchQuote:q((async(o,i,a)=>{if(e){s(true);try{let s=await n(o.caip2,e.refundAddress);if(!s.ok)return void r({step:"error",code:Ce(s.error)});let l=await t.fetchPrivyRoute(d$2,{body:{source_chain:o.caip2,source_currency:o.currencyAddress,destination_chain:e.destinationChain,destination_currency:e.destinationCurrency,destination_address:e.destinationAddress,refund_address:s.address,...null!=e.slippageBps?{slippage_bps:e.slippageBps}:{}}});r({step:"address",selectedCurrency:i,selectedChain:o,availableChains:a,quote:l});}catch(e){let t=e instanceof Error?e:Error(String(e)),n="status"in t&&"number"==typeof t.status?t.status:void 0;r({step:"error",code:t instanceof r$2&&"feature_not_enabled"===t.code?"DEPOSIT_ADDRESSES_NOT_ENABLED":n&&n>=500?"UNKNOWN_ERROR":Ce(t.message),message:t.message});}finally{s(false);}}}),[e,t,n,r]),isFetching:a}}function we(e,r){switch(e.status){case "completed":return r({step:"complete",order:e});case "refunded":return r({step:"refunded",order:e});case "failed":return r({step:"failed",order:e});case "executing":return r({step:"processing",order:e});default:return}}const Ee=({sourceAmount:r,sourceSymbol:t,sourceChainName:n,sourceDecimals:o,destinationAmount:i,destSymbol:a,destChainName:s,destDecimals:l,onClose:c})=>/*#__PURE__*/u$1(i$2,{icon:Check,iconVariant:"success",title:"Transfer complete",subtitle:i?`Received ${pe(r,o)} ${t} on ${n} and converted it to ${pe(i,l)} ${a} on ${s}. Funds are available to use.`:`Your ${t} has been received and is now available in your wallet.`,showClose:true,onClose:c,primaryCta:{label:"Done",onClick:c},watermark:false});function Te(){let{state:r,configData:t,close:n}=f("complete"),{order:o}=r,{sourceSymbol:i,sourceChainName:a,sourceDecimals:l,destSymbol:c,destChainName:d,destDecimals:u}=T((()=>{let e=he({address:o.source_currency,caip2:o.source_chain,config:t}),r=he({address:o.destination_currency,caip2:o.destination_chain,config:t});return {sourceSymbol:e.symbol,sourceChainName:fe(o.source_chain,t.chains),sourceDecimals:e.decimals,destSymbol:r.symbol,destChainName:fe(o.destination_chain,t.chains),destDecimals:r.decimals}}),[o,t]);return u$1(Ee,{sourceAmount:o.source_amount,sourceSymbol:i,sourceChainName:a,sourceDecimals:l,destinationAmount:o.destination_amount,destSymbol:c,destChainName:d,destDecimals:u,onClose:n})}function _e(){let{modalState:r,setModalState:t,config:n,retryConfig:o,close:a}=p();if("error"!==r.step)throw Error("UNEXPECTED_STATE");let{code:s}=r,{title:l,subtitle:c,detail:u,iconVariant:m}=(e=>{switch(e){case "AMOUNT_TOO_LOW":return {title:"Amount too low",subtitle:"The deposit amount is below the minimum for this route.",detail:"Try a larger amount or a different token.",iconVariant:"warning"};case "INSUFFICIENT_LIQUIDITY":return {title:"Insufficient liquidity",subtitle:"There isn't enough liquidity for this route right now.",detail:"Try a smaller amount or a different network.",iconVariant:"warning"};case "UNSUPPORTED_CHAIN":return {title:"Unsupported chain",subtitle:"Deposits from this chain type aren't supported yet. Try a different network.",iconVariant:"warning"};case "UNSUPPORTED_CURRENCY":case "UNSUPPORTED_ROUTE":case "ROUTE_UNAVAILABLE":case "NO_SWAP_ROUTES_FOUND":case "NO_INTERNAL_SWAP_ROUTES_FOUND":case "NO_QUOTES":return {title:"Route not available",subtitle:"This deposit route isn't supported right now. Try a different token or network.",iconVariant:"warning"};case "SANCTIONED_WALLET_ADDRESS":return {title:"Address restricted",subtitle:"This address cannot be used for deposits due to compliance restrictions.",iconVariant:"warning"};case "REFUND_WALLET_CREATION_FAILED":return {title:"Unable to set up refund address",subtitle:"We couldn't create a wallet to receive refunds on this chain. Please try again or select a different network.",iconVariant:"warning"};case "DEPOSIT_ADDRESSES_NOT_ENABLED":return {title:"Not enabled",subtitle:"Deposit addresses are not enabled for this app.",iconVariant:"warning"};case "NOT_AUTHENTICATED":return {title:"Not signed in",subtitle:"Please sign in to continue with your deposit.",iconVariant:"warning"};case "TIMEOUT_WAITING_FOR_NEXT_ORDER":case "TIMEOUT_ORDER_COMPLETION":return {title:"Taking longer than expected",subtitle:"Your funds are safe. The deposit is still being processed — check back later.",iconVariant:"subtle"};default:return {title:"Something went wrong",subtitle:"We couldn't complete your request. Please try again.",iconVariant:"subtle"}}})(s),[p$1,f]=d$3(false);return u$1(i$2,{icon:TriangleAlert,iconVariant:m,title:l,subtitle:u?`${c} ${u}`:c,showClose:true,onClose:a,primaryCta:{label:"Try again",onClick:async()=>{if("ready"!==n.status){f(true);try{await o(),t({step:"token"});}catch{f(false);}}else t({step:"token"});},loading:p$1},watermark:true})}function ke(){let{state:t,close:n}=f("failed"),{order:o}=t;return u$1(n$2,{icon:TriangleAlert,iconVariant:"error",title:"Transfer failed",subtitle:"Something went wrong processing your transfer.",showClose:true,onClose:n,primaryCta:{label:"Done",onClick:n},secondaryCta:{label:"Learn about manual recovery",onClick:()=>window.open("https://docs.privy.io","_blank","noopener,noreferrer")},watermark:true,children:/*#__PURE__*/u$1(Ne,{href:o.tracking_url,target:"_blank",rel:"noopener noreferrer",children:["Reference: ",o.provider_request_id]})})}let Ne=gt.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;function Se(){let{close:r,setModalState:t,config:n,params:o,onBack:s}=p(),[l,c]=d$3(false);return y((()=>{if(l&&o){if("ready"===n.status){let e=ge(n.data,o);t(e?{step:"error",code:"ROUTE_UNAVAILABLE",message:e}:{step:"token"});}"error"===n.status&&t({step:"error",code:"ROUTE_UNAVAILABLE"});}}),[l,n,o,t]),/*#__PURE__*/u$1(i$2,{icon:QrCode,iconVariant:"subtle",title:"Add funds",subtitle:"Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.",showClose:true,onClose:r,showBack:!!s,onBack:s,primaryCta:{label:"Continue",onClick:()=>{if("ready"===n.status&&o){let e=ge(n.data,o);t(e?{step:"error",code:"ROUTE_UNAVAILABLE",message:e}:{step:"token"});}else "error"===n.status?t({step:"error",code:"ROUTE_UNAVAILABLE"}):c(true);},loading:l&&"loading"===n.status,loadingText:null},watermark:true})}function Ue(){let{state:t,setModalState:n,close:a}=f("network"),[s,l]=d$3(-1),{availableChains:c}=t,{confirm:p$1,isFetching:h}=function(){let e=d(),{params:r}=p(),{fetchQuote:t,isFetching:n}=ve();return {confirm:q((async n=>{if(!n||!r)return;let o=e?.modalState;o&&"network"===o.step&&await t(n,o.selectedCurrency,o.availableChains);}),[r,e,t]),isFetching:n}}();return u$1(n$2,{title:"Select network",eyebrow:/*#__PURE__*/u$1("span",{style:{display:"flex",alignItems:"center",gap:"0.375rem"},children:[/*#__PURE__*/u$1("img",{src:t.selectedCurrency.logoURI,alt:"",style:{width:"1rem",height:"1rem",borderRadius:"50%"}}),"Send ",t.selectedCurrency.symbol]}),showBack:true,onBack:()=>n({step:"token"}),showClose:true,onClose:a,watermark:true,children:/*#__PURE__*/u$1(n$3,{style:{marginTop:"1rem",height:"22rem"},$colorScheme:"light",children:c.map(((t,n)=>/*#__PURE__*/u$1(d$4,{$selected:s===n,disabled:h,onClick:()=>{l(n),p$1(t);},children:[/*#__PURE__*/u$1(t$1,{src:t.iconUrl,alt:t.displayName}),/*#__PURE__*/u$1(l$1,{children:t.displayName}),h&&n===s&&/*#__PURE__*/u$1(y$1,{})]},t.caip2)))})})}const Ie=({trackingUrl:t,onClose:n})=>/*#__PURE__*/u$1(n$2,{icon:Hourglass,iconVariant:"subtle",title:"Transfer in progress",subtitle:"Your deposit was received and the transfer is now processing.",showClose:true,onClose:n,secondaryCta:{label:"View on block explorer ↗",onClick:()=>window.open(t,"_blank","noopener,noreferrer")},watermark:false,children:/*#__PURE__*/u$1(m,{children:[/*#__PURE__*/u$1(g$1,{children:[/*#__PURE__*/u$1(p$2,{$status:"done",children:/*#__PURE__*/u$1(Check,{size:14,color:"var(--privy-color-icon-success)",strokeWidth:2})}),/*#__PURE__*/u$1(f$1,{children:"Deposit received"})]}),/*#__PURE__*/u$1(v,{}),/*#__PURE__*/u$1(g$1,{children:[/*#__PURE__*/u$1(p$2,{$status:"active",children:/*#__PURE__*/u$1(Oe,{})}),/*#__PURE__*/u$1(f$1,{children:"Bridging"})]}),/*#__PURE__*/u$1(v,{}),/*#__PURE__*/u$1(g$1,{children:[/*#__PURE__*/u$1(p$2,{$status:"pending"}),/*#__PURE__*/u$1(f$1,{children:"Funds arrived"})]})]})});let Oe=gt.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function Ae(){let{state:r,close:t}=f("processing");return function({orderId:e,enabled:r}){let{privy:t}=l(),{setModalState:n}=p();y((()=>{let r=new AbortController;return d$1.waitForCompletion({privy:t,orderId:e,signal:r.signal}).then((e=>{r.signal.aborted||("success"===e.status?we(e.order,n):"timeout"===e.status&&n({step:"error",code:"TIMEOUT_ORDER_COMPLETION"}));})),()=>{r.abort();}}),[r,e,t,n]);}({orderId:r.order.id,enabled:true}),/*#__PURE__*/u$1(Ie,{trackingUrl:r.order.tracking_url,onClose:t})}function De(){let{state:r,close:t}=f("refunded"),{order:n}=r;return u$1(i$2,{icon:Undo2,iconVariant:"subtle",title:"Transfer refunded",subtitle:"Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.",showClose:true,onClose:t,primaryCta:{label:"Done",onClick:t},secondaryCta:{label:"View transaction details",onClick:()=>window.open(n.tracking_url,"_blank","noopener,noreferrer")},watermark:true})}function Re(){let{close:t,setModalState:n,config:a}=p(),{confirm:s,currencies:l,isFetching:c}=function(){let{config:e,setModalState:r}=p(),{fetchQuote:t,isFetching:n}=ve(),i="ready"===e.status?e.data.currencies:[];return {confirm:q((async n=>{if("ready"!==e.status||!n)return;let o=function(e,r){return e.chains.map((e=>{let t=r.chains[e.caip2];return t?{caip2:e.caip2,displayName:t.displayName,iconUrl:t.iconUrl,vmType:t.vmType,currencyAddress:e.address,currencyDecimals:e.decimals}:null})).filter((e=>null!==e))}(n,e.data);if(1!==o.length)r({step:"network",selectedCurrency:n,availableChains:o});else {let e=o[0];await t(e,n,o);}}),[e,t,r]),currencies:i,isFetching:n}}(),[u,m]=d$3(-1);return u$1(n$2,{title:"Select token",showBack:true,onBack:()=>n({step:"intro"}),showClose:true,onClose:t,watermark:true,children:"error"===a.status?/*#__PURE__*/u$1(c$1,{children:/*#__PURE__*/u$1(n$4,{children:"Failed to load tokens"})}):"loading"===a.status?/*#__PURE__*/u$1(c$1,{children:/*#__PURE__*/u$1(P,{})}):/*#__PURE__*/u$1(n$3,{style:{marginTop:"1rem",height:"22rem"},$colorScheme:"light",children:l.map(((t,n)=>/*#__PURE__*/u$1(d$4,{$selected:u===n,disabled:c,onClick:()=>{m(n),s(t);},children:[/*#__PURE__*/u$1(a$1,{src:t.logoURI,alt:t.symbol}),/*#__PURE__*/u$1(l$1,{children:t.name}),c&&n===u?/*#__PURE__*/u$1(y$1,{}):/*#__PURE__*/u$1(s$2,{children:t.symbol})]},t.symbol)))})})}function xe({address:n,onClick:o}){let[a,s]=d$3(false);return u$1(S,{children:a?/*#__PURE__*/u$1(Fe,{onClick:()=>s(false),style:{marginTop:"1.5rem"},children:/*#__PURE__*/u$1(C$1,{url:n,size:312,hideLogo:true})}):/*#__PURE__*/u$1(Le,{title:"Click to copy address",onClick:o,style:{marginTop:"1.5rem"},children:[/*#__PURE__*/u$1(Pe,{children:[/*#__PURE__*/u$1($e,{children:"Deposit address"}),/*#__PURE__*/u$1(je,{children:n})]}),/*#__PURE__*/u$1(Me,{children:/*#__PURE__*/u$1(Be,{type:"button",onClick:e=>{e.stopPropagation(),s(true);},children:/*#__PURE__*/u$1(QrCode,{size:16,color:"var(--privy-color-icon-muted)"})})})]})})}let Fe=gt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,Le=gt.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,Pe=gt.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,$e=gt.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,je=gt.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,Me=gt.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,Be=gt.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;function Ve({quote:t,selectedCurrency:n,selectedChain:a,destinationSymbol:s}){let[c,d]=d$3(false),u=n.symbol.toUpperCase(),m=a.displayName,p=A(null);return u$1(ze,{children:[/*#__PURE__*/u$1(We,{onClick:q((()=>{let e=document.getElementById("privy-modal-content");e&&(p.current&&clearTimeout(p.current),e.style.transition="none",p.current=setTimeout((()=>{e.style.transition="",p.current=null;}),160)),d((e=>!e));}),[]),children:[/*#__PURE__*/u$1(qe,{children:[n.logoURI&&/*#__PURE__*/u$1(a$1,{src:n.logoURI,alt:u,style:{width:"2rem",height:"2rem"}}),a.iconUrl&&/*#__PURE__*/u$1(Qe,{src:a.iconUrl,alt:m})]}),/*#__PURE__*/u$1(Ye,{children:[/*#__PURE__*/u$1(Xe,{children:"You send"}),/*#__PURE__*/u$1(Ke,{children:[u," on ",m]})]}),/*#__PURE__*/u$1(He,{children:/*#__PURE__*/u$1(c?ChevronUp:ChevronDown,{size:16})})]}),/*#__PURE__*/u$1(er,{$expanded:c,children:/*#__PURE__*/u$1(rr,{children:/*#__PURE__*/u$1(Ge,{children:[t.indicative_rate&&/*#__PURE__*/u$1(u$2,{children:[/*#__PURE__*/u$1(h,{children:"Conversion rate"}),/*#__PURE__*/u$1(b,{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[ue(t.indicative_rate,u,s.toUpperCase()),/*#__PURE__*/u$1(tr,{content:"Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing."})]})]}),/*#__PURE__*/u$1(u$2,{children:[/*#__PURE__*/u$1(h,{children:"Max slippage"}),/*#__PURE__*/u$1(b,{children:[(t.slippage_bps/100).toFixed(1),"%"]})]}),
/*#__PURE__*/u$1(u$2,{children:[/*#__PURE__*/u$1(h,{children:"Refund address"}),/*#__PURE__*/u$1(b,{children:/*#__PURE__*/u$1(m$2,{value:t.refund_address,iconOnly:true,iconSize:11,children:A$1(t.refund_address,4,4)})})]})]})})}),/*#__PURE__*/u$1(Je,{children:[/*#__PURE__*/u$1(TriangleAlert,{size:16,color:"var(--privy-color-icon-muted)",style:{flexShrink:0}}),/*#__PURE__*/u$1(Ze,{children:["Only send ",/*#__PURE__*/u$1("strong",{children:u})," on ",/*#__PURE__*/u$1("strong",{children:m}),". Other assets may be lost."]})]})]})}let ze=gt.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,We=gt.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,qe=gt.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,Qe=gt(t$1)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
    background-color: #fff;
  }
`,Ye=gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Xe=gt.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,Ke=gt.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,He=gt.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`,Ge=gt.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,Je=gt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`,Ze=gt.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,er=gt.div`
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 150ms ease-out;
`,rr=gt.div`
  overflow: hidden;
`;function tr({content:n}){let[o,a]=d$3(false),{refs:s,floatingStyles:l,context:c}=useFloating({open:o,onOpenChange:a,placement:"top",whileElementsMounted:autoUpdate,middleware:[offset(6),flip(),shift({padding:8})]}),d=useHover(c,{move:false,handleClose:safePolygon()}),u=useFocus(c),{getReferenceProps:m,getFloatingProps:p}=useInteractions([d,u,useClick(c),useDismiss(c),useRole(c,{role:"tooltip"})]),{isMounted:h,styles:f}=useTransitionStyles(c,{duration:150});return u$1(S,{children:[/*#__PURE__*/u$1("button",{ref:s.setReference,type:"button","aria-label":"More information about conversion rate",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:"none",background:"none",color:"var(--privy-color-icon-muted)",cursor:"pointer"},...m(),children:/*#__PURE__*/u$1(Info,{size:14})}),h&&/*#__PURE__*/u$1(FloatingPortal,{root:document.getElementById("privy-modal-content")??void 0,children:/*#__PURE__*/u$1(nr,{ref:s.setFloating,style:{...l,...f},...p(),children:n})})]})}let nr=gt.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`;const or=({quote:n,selectedCurrency:o,selectedChain:a,destinationSymbol:s,onBack:l,onClose:c})=>{let[d,u]=d$3(false),m=o?.symbol?.toUpperCase()??"funds",h=a?.displayName??"",f=async()=>{d||(await navigator.clipboard.writeText(n.deposit_address),u(true),setTimeout((()=>u(false)),2e3));};return u$1(n$2,{title:`Send ${m}${h?` on ${h}`:""}`,subtitle:"Send funds to the address below. Conversion and routing handled by Relay.",showBack:true,onBack:l,showClose:true,onClose:c,watermark:false,children:[/*#__PURE__*/u$1(Ve,{quote:n,selectedCurrency:o,selectedChain:a,destinationSymbol:s}),/*#__PURE__*/u$1(xe,{address:n.deposit_address,onClick:f}),/*#__PURE__*/u$1(m$1,{style:{marginTop:"1rem",marginBottom:"0.5rem",...d?{backgroundColor:"var(--privy-color-icon-success)",borderColor:"var(--privy-color-icon-success)"}:{}},onClick:f,children:d?/*#__PURE__*/u$1(S,{children:["Copied ",/*#__PURE__*/u$1(Check,{size:16,style:{marginLeft:"0.25rem"}})]}):"Copy address"}),/*#__PURE__*/u$1(ir,{children:"Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes."})]})};let ir=gt.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;function ar(){let{state:r,configData:t,setModalState:n,close:o,params:i}=f("address"),{quote:l$1,selectedCurrency:c,selectedChain:u,availableChains:p$1}=r;return function({depositAddressId:e,enabled:r,quoteCreatedAt:t}){let{privy:n}=l(),{setModalState:o}=p();y((()=>{if(!e)return;let r=new AbortController;return d$1.waitForDeposit({privy:n,depositAddressId:e,quoteCreatedAt:t,signal:r.signal}).then((e=>{r.signal.aborted||("success"===e.status?we(e.order,o):"timeout"===e.status&&o({step:"error",code:"TIMEOUT_WAITING_FOR_NEXT_ORDER"}));})),()=>{r.abort();}}),[r,e,n,t,o]);}({depositAddressId:l$1.id,enabled:true,quoteCreatedAt:l$1.created_at}),/*#__PURE__*/u$1(or,{quote:l$1,selectedCurrency:c,selectedChain:u,destinationSymbol:T((()=>he({address:i.destinationCurrency,caip2:i.destinationChain,config:t}).symbol),[i,t]),onBack:()=>n({step:"network",selectedCurrency:c,availableChains:p$1}),onClose:o})}function sr(){let{modalState:r,setModalState:t}=p();return u$1(de,{onError:e=>t({step:"error",code:"UNEXPECTED_STATE",message:e.message}),resetKey:r.step,children:/*#__PURE__*/u$1(lr,{})})}function lr(){let{modalState:r}=p();switch(r.step){case "intro":return u$1(Se,{});case "token":return u$1(Re,{});case "network":return u$1(Ue,{});case "address":return u$1(ar,{});case "processing":return u$1(Ae,{});case "complete":return u$1(Te,{});case "refunded":return u$1(De,{});case "failed":return u$1(ke,{});case "error":return u$1(_e,{});default:return null}}var cr={component:()=>{let{onUserCloseViaDialogOrKeybindRef:r}=g(),t=d(),{close:n,config:o}=p();return y((()=>{r.current=n;}),[r,n]),y((()=>{if("ready"===o.status){for(let e of o.data.currencies)(new Image).src=e.logoURI;for(let e of Object.values(o.data.chains))(new Image).src=e.iconUrl;}}),[o]),t?/*#__PURE__*/u$1(sr,{}):null}};

export { cr as default };
