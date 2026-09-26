import { dk as u, g3 as H$1, dl as le, dY as x$1, dG as S$2, du as gt, df as d$1, dZ as X } from './index-BzZ64suB.js';
import { p, S as S$1, h } from './WalletLink-BD2FWKMu-xp87ddCr.js';
import { c } from './ethers-DFE0Hz-t-ClsgIU61.js';
import { d } from './Layouts-BlFm53ED-D7svCVXI.js';
import { F as ForwardRef } from './ChevronDownIcon-CBYa2-dJ.js';

const g=({label:t,children:n,valueStyles:r})=>/*#__PURE__*/u(f,{children:[/*#__PURE__*/u("div",{children:t}),/*#__PURE__*/u(x,{style:{...r},children:n})]});let f=gt.div`
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
`;const m=({gas:t,tokenPrice:n,tokenSymbol:l})=>/*#__PURE__*/u(d,{style:{paddingBottom:"12px"},children:[/*#__PURE__*/u(b,{children:[/*#__PURE__*/u(k,{children:"Est. Fees"}),/*#__PURE__*/u("div",{children:/*#__PURE__*/u(h,{weiQuantities:[BigInt(t)],tokenPrice:n,tokenSymbol:l})})]}),n&&/*#__PURE__*/u(w,{children:`${c(BigInt(t),l)}`})]}),y=({value:t,gas:n,tokenPrice:l,tokenSymbol:o})=>{let c$1=BigInt(t??0)+BigInt(n);return u(d,{children:[/*#__PURE__*/u(b,{children:[/*#__PURE__*/u(k,{children:"Total (including fees)"}),/*#__PURE__*/u("div",{children:/*#__PURE__*/u(h,{weiQuantities:[BigInt(t||0),BigInt(n)],tokenPrice:l,tokenSymbol:o})})]}),l&&/*#__PURE__*/u(w,{children:c(c$1,o)})]})};let b=gt.div`
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
`;const P=/*#__PURE__*/X(void 0),I=/*#__PURE__*/X(void 0),S=({defaultValue:e,children:t})=>{let[n,r]=d$1(e||null);return u(P.Provider,{value:{activePanel:n,togglePanel:e=>{r(n===e?null:e);}},children:/*#__PURE__*/u(z,{children:t})})},j=({value:e,children:t})=>{let{activePanel:n,togglePanel:r}=x$1(P),l=n===e;return u(I.Provider,{value:{onToggle:()=>r(e),value:e},children:/*#__PURE__*/u(C,{isActive:l?"true":"false","data-open":String(l),children:t})})},B=({children:n})=>{let{activePanel:r}=x$1(P),{onToggle:l,value:o}=x$1(I),d=r===o;
return u(S$2,{children:[/*#__PURE__*/u(F,{onClick:l,"data-open":String(d),children:[/*#__PURE__*/u(W,{children:n}),/*#__PURE__*/u(V,{isactive:d?"true":"false",children:/*#__PURE__*/u(ForwardRef,{height:"16px",width:"16px",strokeWidth:"2"})})]}),/*#__PURE__*/u(Q,{})]})},T=({children:e})=>{let{activePanel:t}=x$1(P),{value:n}=x$1(I);return u(D,{"data-open":String(t===n),children:/*#__PURE__*/u(L,{children:e})})},A=({children:e})=>{let{activePanel:t}=x$1(P),{value:n}=x$1(I);return u(L,{children:"function"==typeof e?e({isActive:t===n}):e})};let z=gt.div`
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
`;const $=({from:t,to:n,txn:r,transactionInfo:d,tokenPrice:a,gas:c,tokenSymbol:s})=>{let h=BigInt(r?.value||0);
return u(S,{...le().render.standalone?{defaultValue:"details"}:{},children:/*#__PURE__*/u(j,{value:"details",children:[/*#__PURE__*/u(B,{children:/*#__PURE__*/u(E,{children:[/*#__PURE__*/u("div",{children:d?.title||"Details"}),/*#__PURE__*/u(H,{children:/*#__PURE__*/u(p,{weiQuantities:[h],tokenPrice:a,tokenSymbol:s})})]})}),/*#__PURE__*/u(T,{children:[/*#__PURE__*/u(g,{label:"From",children:/*#__PURE__*/u(S$1,{walletAddress:t,chainId:r.chainId||H$1,chainType:"ethereum"})}),/*#__PURE__*/u(g,{label:"To",children:/*#__PURE__*/u(S$1,{walletAddress:n,chainId:r.chainId||H$1,chainType:"ethereum"})}),d&&d.action&&/*#__PURE__*/u(g,{label:"Action",children:d.action}),c&&/*#__PURE__*/u(m,{value:r.value,gas:c,tokenPrice:a,tokenSymbol:s})]}),/*#__PURE__*/u(A,{children:({isActive:e})=>/*#__PURE__*/u(y,{value:r.value,displayFee:e,gas:c||"0x0",tokenPrice:a,tokenSymbol:s})})]})})};let E=gt.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,H=gt.div`
  flex-shrink: 0;
  padding-left: 8px;
`;

export { $ };
