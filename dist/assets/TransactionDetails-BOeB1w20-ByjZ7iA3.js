import { dr as u$1, gg as ee, ds as We, dT as x$1, dN as S$2, dA as gt, dl as d, dU as X } from './index-gvgysxtU.js';
import { p, S as S$1, h } from './WalletLink-wyEl6U-t-Cy02Is5r.js';
import { c } from './ethers-DNxEwCFm-DZuo-MbU.js';
import { a } from './Layouts-BMRfo5hw-Bl6vUmS_.js';
import { F as ForwardRef } from './ChevronDownIcon-4yKdOGZB.js';

const u=({label:t,children:r,valueStyles:n})=>/*#__PURE__*/u$1(f,{children:[/*#__PURE__*/u$1("div",{children:t}),/*#__PURE__*/u$1(x,{style:{...n},children:r})]});let f=gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,x=gt.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`;const m=({gas:t,tokenPrice:r,tokenSymbol:l})=>/*#__PURE__*/u$1(a,{style:{paddingBottom:"12px"},children:[/*#__PURE__*/u$1(b,{children:[/*#__PURE__*/u$1(k,{children:"Est. Fees"}),/*#__PURE__*/u$1("div",{children:/*#__PURE__*/u$1(h,{weiQuantities:[BigInt(t)],tokenPrice:r,tokenSymbol:l})})]}),r&&/*#__PURE__*/u$1(w,{children:`${c(BigInt(t),l)}`})]}),y=({value:t,gas:r,tokenPrice:l,tokenSymbol:o})=>{let c$1=BigInt(t??0)+BigInt(r);return u$1(a,{children:[/*#__PURE__*/u$1(b,{children:[/*#__PURE__*/u$1(k,{children:"Total (including fees)"}),/*#__PURE__*/u$1("div",{children:/*#__PURE__*/u$1(h,{weiQuantities:[BigInt(t||0),BigInt(r)],tokenPrice:l,tokenSymbol:o})})]}),l&&/*#__PURE__*/u$1(w,{children:c(c$1,o)})]})};let b=gt.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,w=gt.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,k=gt.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`;const P=/*#__PURE__*/X(void 0),I=/*#__PURE__*/X(void 0),S=({defaultValue:e,children:t})=>{let[r,n]=d(e||null);return u$1(P.Provider,{value:{activePanel:r,togglePanel:e=>{n(r===e?null:e);}},children:/*#__PURE__*/u$1(z,{children:t})})},j=({value:e,children:t})=>{let{activePanel:r,togglePanel:n}=x$1(P),l=r===e;return u$1(I.Provider,{value:{onToggle:()=>n(e),value:e},children:/*#__PURE__*/u$1(C,{isActive:l?"true":"false","data-open":String(l),children:t})})},B=({children:r})=>{let{activePanel:n}=x$1(P),{onToggle:l,value:o}=x$1(I),d=n===o;
return u$1(S$2,{children:[/*#__PURE__*/u$1(F,{onClick:l,"data-open":String(d),children:[/*#__PURE__*/u$1(W,{children:r}),/*#__PURE__*/u$1(V,{isactive:d?"true":"false",children:/*#__PURE__*/u$1(ForwardRef,{height:"16px",width:"16px",strokeWidth:"2"})})]}),/*#__PURE__*/u$1(Q,{})]})},T=({children:e})=>{let{activePanel:t}=x$1(P),{value:r}=x$1(I);return u$1(D,{"data-open":String(t===r),children:/*#__PURE__*/u$1(L,{children:e})})},A=({children:e})=>{let{activePanel:t}=x$1(P),{value:r}=x$1(I);return u$1(L,{children:"function"==typeof e?e({isActive:t===r}):e})};let z=gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,F=gt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,Q=gt.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,W=gt.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,C=gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,D=gt.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,L=gt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,V=gt.div`
  transform: ${e=>"true"===e.isactive?"rotate(180deg)":"rotate(0deg)"};
`;const $=({from:t,to:r,txn:n,transactionInfo:d,tokenPrice:a,gas:c,tokenSymbol:s})=>{let h=BigInt(n?.value||0);
return u$1(S,{...We().render.standalone?{defaultValue:"details"}:{},children:/*#__PURE__*/u$1(j,{value:"details",children:[/*#__PURE__*/u$1(B,{children:/*#__PURE__*/u$1(E,{children:[/*#__PURE__*/u$1("div",{children:d?.title||"Details"}),/*#__PURE__*/u$1(H,{children:/*#__PURE__*/u$1(p,{weiQuantities:[h],tokenPrice:a,tokenSymbol:s})})]})}),/*#__PURE__*/u$1(T,{children:[/*#__PURE__*/u$1(u,{label:"From",children:/*#__PURE__*/u$1(S$1,{walletAddress:t,chainId:n.chainId||ee,chainType:"ethereum"})}),/*#__PURE__*/u$1(u,{label:"To",children:/*#__PURE__*/u$1(S$1,{walletAddress:r,chainId:n.chainId||ee,chainType:"ethereum"})}),d&&d.action&&/*#__PURE__*/u$1(u,{label:"Action",children:d.action}),c&&/*#__PURE__*/u$1(m,{value:n.value,gas:c,tokenPrice:a,tokenSymbol:s})]}),/*#__PURE__*/u$1(A,{children:({isActive:e})=>/*#__PURE__*/u$1(y,{value:n.value,displayFee:e,gas:c||"0x0",tokenPrice:a,tokenSymbol:s})})]})})};let E=gt.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,H=gt.div`
  flex-shrink: 0;
  padding-left: 8px;
`;

export { $ };
