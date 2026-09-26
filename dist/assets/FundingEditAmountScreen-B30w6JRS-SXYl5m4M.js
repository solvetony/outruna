import { dq as g, dg as A, dk as u, dG as S } from './index-BzZ64suB.js';
import { k, u as u$1 } from './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import { d } from './Layouts-BlFm53ED-D7svCVXI.js';
import { t } from './FundWalletMethodHeader-G5sXf6Zt-yG3Yb3In.js';
import { t as t$1 } from './index-Dq_xe9dz-BhpFabhk.js';
import { e } from './Title-BnzYV3Is-BliqABbd.js';
import { c } from './useGetTokenPrice-_x6xp2Po-B3JZVC7r.js';
import { n } from './ethers-DFE0Hz-t-ClsgIU61.js';
import { a, p, d as d$1, c as c$1, l } from './styles-DLlsr-XC-DNNFSxBu.js';
import './useGetSolPrice-x7gfUIHJ-hkyRlqNS.js';
import './LinkPasskeyScreen-C2ClLwr7-B7PK6rNm.js';
import './TodoList-CgrU7uwu-BTm_u8JK.js';
import './x-EDsv0Kna.js';
import './createLucideIcon-BUXdLDa7.js';
import './check-B4HAls8G.js';
import './ScreenLayout-b9cixoV5-uyh6cti0.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './circle-check-big-x7Y16n9a.js';
import './fingerprint-pattern-BZwHaQsC.js';

const v={component:()=>{let{data:v,setModalData:g$1}=g(),C=v?.funding,x="solana"===C.chainType,k$1=A(null),{tokenPrice:S$1}=c(x?"solana":C.chain.id),D=x?void 0:C,T=!(!D?.erc20Address||D?.erc20ContractInfo),F=x?C.isUSDC?"USDC":"SOL":C.erc20Address?C.erc20ContractInfo?.symbol:C.chain.nativeCurrency.symbol||"ETH",A$1=parseFloat(C.amount),I=!isNaN(A$1)&&A$1>0,L=S$1?n(C.amount,S$1):void 0;return u(S,{children:[/*#__PURE__*/u(t,{}),/*#__PURE__*/u(e,{children:"Confirm or edit amount"}),/*#__PURE__*/u(d,{style:{marginTop:"32px"},children:[/*#__PURE__*/u(a,{children:T?/*#__PURE__*/u(t$1,{size:"50px"}):/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(p,{onClick:()=>k$1.current?.focus(),children:[/*#__PURE__*/u(d$1,{ref:k$1,value:C.amount,onChange:t=>{let o=t.target.value;/^[0-9.]*$/.test(o)&&o.split(".").length-1<=1&&g$1({...v,funding:{...C,amount:o},solanaFundingData:v?.solanaFundingData?{...v.solanaFundingData,amount:o}:void 0});}}),/*#__PURE__*/u(c$1,{children:F})]}),!D?.erc20Address&&!(x&&C.isUSDC)&&/*#__PURE__*/u(l,{children:L&&I?`${L} USD`:""})]})}),/*#__PURE__*/u(k,{style:{marginTop:"1rem"},disabled:!I,onClick:C.onContinueWithExternalWallet,children:"Continue"})]}),/*#__PURE__*/u(u$1,{})]})}};

export { v as FundingAmountEditScreen, v as default };
