import { dv as C, dr as u, dl as d, dN as S, dA as gt, dm as A, dk as q$1, dK as o } from './index-gvgysxtU.js';
import { m, g, p, f, v, a, u as u$1, h, b as b$1, t } from './styles-BSL8-rdX-CeB9n6A3.js';
import { n } from './ScreenLayout-XFsWudNK-G4gl9C4E.js';
import { b } from './ModalFooter-BldNwiHO-CgJHKx6-.js';
import { x } from './QrCode-cA9rnMIN-DL9K1wvs.js';
import { u as useFloating, c as useHover, s as safePolygon, d as useFocus, b as useInteractions, e as useClick, f as useDismiss, g as useRole, h as useTransitionStyles, F as FloatingPortal } from './floating-ui.react-D-Io4JOS.js';
import { p as p$1 } from './CopyableText-CQapvaMr-BZenPKfU.js';
import { H as Hourglass } from './hourglass-D5GDcKHX.js';
import { C as Check } from './check-BoeD0i71.js';
import { c as createLucideIcon } from './createLucideIcon-SFhWQtk1.js';
import { C as ChevronDown } from './chevron-down-BExIkFV6.js';
import { T as TriangleAlert } from './triangle-alert-586gQxTM.js';
import { b as autoUpdate, o as offset, f as flip, s as shift } from './floating-ui.react-dom-Bm4eQ79a.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$2);

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
];
const QrCode = createLucideIcon("qr-code", __iconNode);

class Q extends C{static getDerivedStateFromError(){return {hasError:true}}componentDidCatch(e,r){this.props.onError(e);}componentDidUpdate(e){e.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:false});}render(){return this.state.hasError?null:this.props.children}constructor(...e){super(...e),this.state={hasError:false};}}function q(e,r,n){let i=Number(e);if(!Number.isFinite(i)||0===i)return `1 ${r} ≈ ${e} ${n}`;if(i>=.01){return `1 ${r} ≈ ${V(i)} ${n}`}return `${V(1/i)} ${r} ≈ 1 ${n}`}function V(e){return e>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(e):new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(e)}function Y(e,r){let n=Number(e);if(!Number.isFinite(n)||0===n)return e;let i=null!=r?n/10**r:n;return i>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(i):i>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(i):i>=1e-4?new Intl.NumberFormat("en-US",{maximumFractionDigits:6}).format(i):new Intl.NumberFormat("en-US",{maximumSignificantDigits:4}).format(i)}function H({address:e,caip2:r,config:n}){for(let i of n.currencies){let n=i.chains.find((n=>n.caip2===r&&n.address.toLowerCase()===e.toLowerCase()));if(n)return {symbol:i.symbol.toUpperCase(),decimals:n.decimals}}return {symbol:e,decimals:void 0}}function K(e,r){let n=r[e];return n?.displayName??n?.display_name??e}function X(e,r){return e.chains.filter((e=>true===e.can_be_relay_deposit_source)).map((e=>{let n=r.chains[e.caip2];return n?{caip2:e.caip2,displayName:n.displayName,iconUrl:n.iconUrl,vmType:n.vmType,currencyAddress:e.address,currencyDecimals:e.decimals}:null})).filter((e=>null!==e))}function G(e,r){if(!e.chains[r.destinationChain])return `Unsupported destination chain: "${r.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let n=r.destinationCurrency.toLowerCase();return e.currencies.some((e=>e.chains.some((e=>e.caip2===r.destinationChain&&e.address.toLowerCase()===n))))?null:`Unsupported destination currency "${r.destinationCurrency}" on chain "${r.destinationChain}". Check that this token address is supported on the specified chain.`}let J=new Set(["ROUTE_UNAVAILABLE","UNEXPECTED_STATE","TIMEOUT_WAITING_FOR_NEXT_ORDER","TIMEOUT_ORDER_COMPLETION","DEPOSIT_FAILED","DEPOSIT_REFUNDED","USER_EXITED","AMOUNT_TOO_LOW","INSUFFICIENT_LIQUIDITY","UNSUPPORTED_CHAIN","UNSUPPORTED_CURRENCY","UNSUPPORTED_ROUTE","NO_SWAP_ROUTES_FOUND","NO_INTERNAL_SWAP_ROUTES_FOUND","NO_QUOTES","SANCTIONED_WALLET_ADDRESS","REFUND_WALLET_CREATION_FAILED","DEPOSIT_ADDRESSES_NOT_ENABLED","NOT_AUTHENTICATED"]);function Z(e){return J.has(e)}function ee(e){return Z(e)?e:"UNKNOWN_ERROR"}const re=({trackingUrl:e,onViewBlockExplorer:r,onClose:n$1})=>{let i=e&&r?()=>{r(),window.open(e,"_blank","noopener,noreferrer");}:void 0;return u(n,{icon:Hourglass,iconVariant:"subtle",title:"Transfer in progress",subtitle:"Your deposit was received and the transfer is now processing.",showClose:true,onClose:n$1,secondaryCta:i?{label:"View on block explorer ↗",onClick:i}:void 0,watermark:false,children:/*#__PURE__*/u(m,{children:[/*#__PURE__*/u(g,{children:[/*#__PURE__*/u(p,{$status:"done",children:/*#__PURE__*/u(Check,{size:14,color:"var(--privy-color-icon-success)",strokeWidth:2})}),/*#__PURE__*/u(f,{children:"Deposit received"})]}),/*#__PURE__*/u(v,{}),/*#__PURE__*/u(g,{children:[/*#__PURE__*/u(p,{$status:"active",children:/*#__PURE__*/u(ne,{})}),/*#__PURE__*/u(f,{children:"Bridging"})]}),/*#__PURE__*/u(v,{}),/*#__PURE__*/u(g,{children:[/*#__PURE__*/u(p,{$status:"pending"}),/*#__PURE__*/u(f,{children:"Funds arrived"})]})]})})};let ne=gt.span`
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
`;function ie({address:e,onClick:n}){let[i,s]=d(false);return u(S,{children:i?/*#__PURE__*/u(oe,{onClick:()=>s(false),style:{marginTop:"1.5rem"},children:/*#__PURE__*/u(x,{url:e,size:312,hideLogo:true})}):/*#__PURE__*/u(te,{title:"Click to copy address",onClick:n,style:{marginTop:"1.5rem"},children:[/*#__PURE__*/u(ae,{children:[/*#__PURE__*/u(se,{children:"Deposit address"}),/*#__PURE__*/u(de,{children:e})]}),/*#__PURE__*/u(le,{children:/*#__PURE__*/u(ce,{type:"button",onClick:e=>{e.stopPropagation(),s(true);},children:/*#__PURE__*/u(QrCode,{size:16,color:"var(--privy-color-icon-muted)"})})})]})})}let oe=gt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,te=gt.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,ae=gt.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,se=gt.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,de=gt.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,le=gt.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,ce=gt.button`
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
`,me=e=>/^0x/i.test(e)||e.length>16;function ue({quote:e,selectedCurrency:a$1,selectedChain:s,destinationSymbol:d$1,destinationChainName:l,destinationAsset:p}){let[h$1,g]=d(false),f=a$1.symbol.toUpperCase(),y=s.displayName,v=A(null);return u(pe,{children:[/*#__PURE__*/u(he,{onClick:q$1((()=>{let e=document.getElementById("privy-modal-content");e&&(v.current&&clearTimeout(v.current),e.style.transition="none",v.current=setTimeout((()=>{e.style.transition="",v.current=null;}),160)),g((e=>!e));}),[]),children:[/*#__PURE__*/u(ge,{children:[a$1.logoURI&&/*#__PURE__*/u(a,{src:a$1.logoURI,alt:f,style:{width:"2rem",height:"2rem"}}),s.iconUrl&&/*#__PURE__*/u(fe,{src:s.iconUrl,alt:y})]}),/*#__PURE__*/u(ye,{children:[/*#__PURE__*/u(ve,{children:"You send"}),/*#__PURE__*/u(be,{children:[f," on ",y]})]}),/*#__PURE__*/u(Ce,{children:/*#__PURE__*/u(h$1?ChevronUp:ChevronDown,{size:16})})]}),/*#__PURE__*/u(we,{$expanded:h$1,children:/*#__PURE__*/u(Ue,{children:/*#__PURE__*/u(xe,{children:[e.indicative_rate&&/*#__PURE__*/u(u$1,{children:[/*#__PURE__*/u(h,{children:"Conversion rate"}),/*#__PURE__*/u(b$1,{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[q(e.indicative_rate,f,d$1.toUpperCase()),/*#__PURE__*/u(ke,{content:"Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing."})]})]}),/*#__PURE__*/u(u$1,{children:[/*#__PURE__*/u(h,{children:"Receive"}),/*#__PURE__*/u(b$1,{children:[d$1&&!me(d$1)?d$1.toUpperCase():me(p)?o(p):p.toUpperCase(),l?` on ${l}`:""]})]}),null!=e.slippage_bps&&/*#__PURE__*/u(u$1,{children:[/*#__PURE__*/u(h,{children:"Max slippage"}),/*#__PURE__*/u(b$1,{children:[(e.slippage_bps/100).toFixed(1),"%"]})]}),e.refund_address&&/*#__PURE__*/u(u$1,{children:[/*#__PURE__*/u(h,{children:"Refund address"}),/*#__PURE__*/u(b$1,{children:/*#__PURE__*/u(p$1,{value:e.refund_address,iconOnly:true,iconSize:11,children:o(e.refund_address,4,4)})})]})]})})}),/*#__PURE__*/u(Ee,{children:[/*#__PURE__*/u(TriangleAlert,{size:16,color:"var(--privy-color-icon-muted)",style:{flexShrink:0}}),/*#__PURE__*/u(Ne,{children:["Only send ",/*#__PURE__*/u("strong",{children:f})," on ",/*#__PURE__*/u("strong",{children:y}),". Other assets may be lost."]})]})]})}let pe=gt.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,he=gt.button`
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
`,ge=gt.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,fe=gt(t)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid var(--privy-color-background);
    background-color: var(--privy-color-background);
  }
`,ye=gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ve=gt.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,be=gt.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,Ce=gt.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked);
  color: var(--privy-color-foreground-3);
`,xe=gt.div`
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
`,Ee=gt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: var(--privy-color-background-2);
`,Ne=gt.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,we=gt.div`
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 150ms ease-out;
`,Ue=gt.div`
  overflow: hidden;
`;function ke({content:e}){let[n,i]=d(false),{refs:s,floatingStyles:d$1,context:l}=useFloating({open:n,onOpenChange:i,placement:"top",whileElementsMounted:autoUpdate,middleware:[offset(6),flip(),shift({padding:8})]}),c=useHover(l,{move:false,handleClose:safePolygon()}),m=useFocus(l),{getReferenceProps:u$1,getFloatingProps:h}=useInteractions([c,m,useClick(l),useDismiss(l),useRole(l,{role:"tooltip"})]),{isMounted:g,styles:f}=useTransitionStyles(l,{duration:150});return u(S,{children:[/*#__PURE__*/u("button",{ref:s.setReference,type:"button","aria-label":"More information about conversion rate",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:"none",background:"none",color:"var(--privy-color-icon-muted)",cursor:"pointer"},...u$1(),children:/*#__PURE__*/u(Info,{size:14})}),g&&/*#__PURE__*/u(FloatingPortal,{root:document.getElementById("privy-modal-content")??void 0,children:/*#__PURE__*/u(_e,{ref:s.setFloating,style:{...d$1,...f},...h(),children:e})})]})}let _e=gt.div`
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
`;const Te=({quote:e,selectedCurrency:n$1,selectedChain:i,destinationSymbol:s,destinationChainName:l,destinationAsset:c,onBack:m,onClose:u$1})=>{let[p,h]=d(false),g=n$1?.symbol?.toUpperCase()??"funds",f=i?.displayName??"",y=async()=>{p||(await navigator.clipboard.writeText(e.deposit_address),h(true),setTimeout((()=>h(false)),2e3));};return u(n,{title:`Send ${g}${f?` on ${f}`:""}`,subtitle:"Send funds to the address below. Conversion and routing handled by Relay.",showBack:true,onBack:m,showClose:true,onClose:u$1,watermark:false,children:[/*#__PURE__*/u(ue,{quote:e,selectedCurrency:n$1,selectedChain:i,destinationSymbol:s,destinationChainName:l,destinationAsset:c}),/*#__PURE__*/u(ie,{address:e.deposit_address,onClick:y}),/*#__PURE__*/u(b,{style:{marginTop:"1rem",marginBottom:"0.5rem",...p?{backgroundColor:"var(--privy-color-icon-success)",borderColor:"var(--privy-color-icon-success)"}:{}},onClick:y,children:p?/*#__PURE__*/u(S,{children:["Copied ",/*#__PURE__*/u(Check,{size:16,style:{marginLeft:"0.25rem"}})]}):"Copy address"}),/*#__PURE__*/u(Se,{children:"Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes."})]})};let Se=gt.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;

export { G, H, K, Q, Te as T, X, Y, QrCode as a, ee as e, re as r };
