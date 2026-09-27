import { dq as g, dg as A, dk as u, dG as S } from './index-BLGlf-uE.js';
import { k, u as u$1 } from './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import { d } from './Layouts-BlFm53ED-CYqWOXMK.js';
import { t } from './FundWalletMethodHeader-G5sXf6Zt-BBtvzkm-.js';
import { t as t$1 } from './index-Dq_xe9dz-eZF2dpYh.js';
import { e } from './Title-BnzYV3Is-BHhQlvgp.js';
import { c } from './useGetTokenPrice-_x6xp2Po-gWCeM6DX.js';
import { n } from './ethers-DFE0Hz-t-CLyj7jax.js';
import { a, p, d as d$1, c as c$1, l } from './styles-DLlsr-XC-D0J9JdC1.js';
import './useGetSolPrice-x7gfUIHJ-C-pExW28.js';
import './LinkPasskeyScreen-C2ClLwr7-GppVq678.js';
import './TodoList-CgrU7uwu-DaSh8bWY.js';
import './x-CMFCmYZQ.js';
import './createLucideIcon-BFwUy9WP.js';
import './check-C7hZ0Smk.js';
import './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './circle-check-big-wJaeONI3.js';
import './fingerprint-pattern-nxVZEGHV.js';

const v={component:()=>{let{data:v,setModalData:g$1}=g(),C=v?.funding,x="solana"===C.chainType,k$1=A(null),{tokenPrice:S$1}=c(x?"solana":C.chain.id),D=x?void 0:C,T=!(!D?.erc20Address||D?.erc20ContractInfo),F=x?C.isUSDC?"USDC":"SOL":C.erc20Address?C.erc20ContractInfo?.symbol:C.chain.nativeCurrency.symbol||"ETH",A$1=parseFloat(C.amount),I=!isNaN(A$1)&&A$1>0,L=S$1?n(C.amount,S$1):void 0;return u(S,{children:[/*#__PURE__*/u(t,{}),/*#__PURE__*/u(e,{children:"Confirm or edit amount"}),/*#__PURE__*/u(d,{style:{marginTop:"32px"},children:[/*#__PURE__*/u(a,{children:T?/*#__PURE__*/u(t$1,{size:"50px"}):/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(p,{onClick:()=>k$1.current?.focus(),children:[/*#__PURE__*/u(d$1,{ref:k$1,value:C.amount,onChange:t=>{let o=t.target.value;/^[0-9.]*$/.test(o)&&o.split(".").length-1<=1&&g$1({...v,funding:{...C,amount:o},solanaFundingData:v?.solanaFundingData?{...v.solanaFundingData,amount:o}:void 0});}}),/*#__PURE__*/u(c$1,{children:F})]}),!D?.erc20Address&&!(x&&C.isUSDC)&&/*#__PURE__*/u(l,{children:L&&I?`${L} USD`:""})]})}),/*#__PURE__*/u(k,{style:{marginTop:"1rem"},disabled:!I,onClick:C.onContinueWithExternalWallet,children:"Continue"})]}),/*#__PURE__*/u(u$1,{})]})}};

export { v as FundingAmountEditScreen, v as default };
