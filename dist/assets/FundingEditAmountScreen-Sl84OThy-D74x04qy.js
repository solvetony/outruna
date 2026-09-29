import { dw as u, dm as A, dr as u$1, dN as S } from './index-rPHJETNO.js';
import { u as u$2, h } from './ModalFooter-BldNwiHO-D54d5Pwl.js';
import { a } from './Layouts-BMRfo5hw-YjqlS4sE.js';
import { t } from './FundWalletMethodHeader-CBdY084Z-5CCSPhXn.js';
import { n as n$1 } from './index-CWARkn2w-Bd0gFDpa.js';
import { e } from './Title-BnzYV3Is-izQzfaSt.js';
import { c } from './useGetTokenPrice-Ufl46eND-BNq0qIHE.js';
import { n } from './ethers-DNxEwCFm-8OEpdhu8.js';
import { a as a$1, p, d, c as c$1, l } from './styles-C4IROdYt-B-ogwUD5.js';
import './useGetSolPrice-x7gfUIHJ-Bt0eSML4.js';
import './LinkPasskeyScreen-BjrBgk8F-BqA9OLYt.js';
import './TodoList-DnyULl18-DC9ZSlez.js';
import './x-DtdscceC.js';
import './createLucideIcon-CoVYjJQE.js';
import './check-CvvMuKfr.js';
import './ScreenLayout-XFsWudNK-DRWbUTUm.js';
import './Screen-Dtn4lspb-B2aRBf0T.js';
import './circle-check-big-B13Ll17y.js';
import './fingerprint-pattern-DV6wfuUl.js';

const y={component:()=>{let{data:y,setModalData:v}=u(),C=y?.funding,k="solana"===C.chainType,x=A(null),{tokenPrice:D}=c(k?"solana":C.chain.id),S$1=k?void 0:C,F=!(!S$1?.erc20Address||S$1?.erc20ContractInfo),T=k?C.isUSDC?"USDC":"SOL":C.erc20Address?C.erc20ContractInfo?.symbol:C.chain.nativeCurrency.symbol||"ETH",b=parseFloat(C.amount),I=!isNaN(b)&&b>0,L=D?n(C.amount,D):void 0;return u$1(S,{children:[/*#__PURE__*/u$1(t,{}),/*#__PURE__*/u$1(e,{children:"Confirm or edit amount"}),/*#__PURE__*/u$1(a,{style:{marginTop:"32px"},children:[/*#__PURE__*/u$1(a$1,{children:F?/*#__PURE__*/u$1(n$1,{size:"50px"}):/*#__PURE__*/u$1(S,{children:[/*#__PURE__*/u$1(p,{onClick:()=>x.current?.focus(),children:[/*#__PURE__*/u$1(d,{ref:x,value:C.amount,onChange:o=>{let r=o.target.value;/^[0-9.]*$/.test(r)&&r.split(".").length-1<=1&&v({...y,funding:{...C,amount:r},solanaFundingData:y?.solanaFundingData?{...y.solanaFundingData,amount:r}:void 0});}}),/*#__PURE__*/u$1(c$1,{children:T})]}),!S$1?.erc20Address&&!(k&&C.isUSDC)&&/*#__PURE__*/u$1(l,{children:L&&I?`${L} USD`:""})]})}),/*#__PURE__*/u$1(u$2,{style:{marginTop:"1rem"},disabled:!I,onClick:C.onContinueWithExternalWallet,children:"Continue"})]}),/*#__PURE__*/u$1(h,{})]})}};

export { y as FundingAmountEditScreen, y as default };
