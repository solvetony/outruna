import { dq as g, dg as A, dk as u, dG as S } from './index-YiUby3C-.js';
import { k, u as u$1 } from './ModalHeader-C1WIsRkF-C8Dss9Lk.js';
import { d } from './Layouts-BlFm53ED-DRgPKdqs.js';
import { t } from './FundWalletMethodHeader-G5sXf6Zt-BP2Ykl1a.js';
import { t as t$1 } from './index-Dq_xe9dz-t6shERUf.js';
import { e } from './Title-BnzYV3Is-BgQ1fbMV.js';
import { c } from './useGetTokenPrice-_x6xp2Po-CCh-k3s6.js';
import { n } from './ethers-DFE0Hz-t-B1DDYQZO.js';
import { a, p, d as d$1, c as c$1, l } from './styles-DLlsr-XC-CvIIMEix.js';
import './useGetSolPrice-x7gfUIHJ-LdcZAhsL.js';
import './LinkPasskeyScreen-C2ClLwr7-BPLTqBHw.js';
import './TodoList-CgrU7uwu-D_qbVra_.js';
import './x-CUfpZY8h.js';
import './createLucideIcon-BHrOL54T.js';
import './check-QH6ZOCH0.js';
import './ScreenLayout-b9cixoV5-CH-hckRr.js';
import './Screen-My4NO62A-B0fsS_yH.js';
import './circle-check-big-BdX4XrBh.js';
import './fingerprint-pattern-D3brRCL7.js';

const v={component:()=>{let{data:v,setModalData:g$1}=g(),C=v?.funding,x="solana"===C.chainType,k$1=A(null),{tokenPrice:S$1}=c(x?"solana":C.chain.id),D=x?void 0:C,T=!(!D?.erc20Address||D?.erc20ContractInfo),F=x?C.isUSDC?"USDC":"SOL":C.erc20Address?C.erc20ContractInfo?.symbol:C.chain.nativeCurrency.symbol||"ETH",A$1=parseFloat(C.amount),I=!isNaN(A$1)&&A$1>0,L=S$1?n(C.amount,S$1):void 0;return u(S,{children:[/*#__PURE__*/u(t,{}),/*#__PURE__*/u(e,{children:"Confirm or edit amount"}),/*#__PURE__*/u(d,{style:{marginTop:"32px"},children:[/*#__PURE__*/u(a,{children:T?/*#__PURE__*/u(t$1,{size:"50px"}):/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(p,{onClick:()=>k$1.current?.focus(),children:[/*#__PURE__*/u(d$1,{ref:k$1,value:C.amount,onChange:t=>{let o=t.target.value;/^[0-9.]*$/.test(o)&&o.split(".").length-1<=1&&g$1({...v,funding:{...C,amount:o},solanaFundingData:v?.solanaFundingData?{...v.solanaFundingData,amount:o}:void 0});}}),/*#__PURE__*/u(c$1,{children:F})]}),!D?.erc20Address&&!(x&&C.isUSDC)&&/*#__PURE__*/u(l,{children:L&&I?`${L} USD`:""})]})}),/*#__PURE__*/u(k,{style:{marginTop:"1rem"},disabled:!I,onClick:C.onContinueWithExternalWallet,children:"Continue"})]}),/*#__PURE__*/u(u$1,{})]})}};

export { v as FundingAmountEditScreen, v as default };
