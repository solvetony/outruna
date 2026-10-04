import { dw as u, dm as A, dr as u$1, dN as S } from './index-Cl25p6UW.js';
import { u as u$2, h } from './ModalFooter-BldNwiHO-DYI_DD7F.js';
import { a } from './Layouts-BMRfo5hw-msKvZJfN.js';
import { t } from './FundWalletMethodHeader-CBdY084Z-DVqjZ_QC.js';
import { n as n$1 } from './index-CWARkn2w-dlG1gzXv.js';
import { e } from './Title-BnzYV3Is-MhCOK0fa.js';
import { c } from './useGetTokenPrice-Ufl46eND-B4o0qxDu.js';
import { n } from './ethers-DNxEwCFm-CbUlqBBm.js';
import { a as a$1, p, d, c as c$1, l } from './styles-C4IROdYt-DOP_3j5a.js';
import './useGetSolPrice-x7gfUIHJ-TTwznGGz.js';
import './LinkPasskeyScreen-BjrBgk8F-C4cZPS9z.js';
import './TodoList-DnyULl18-Bkl0VJUn.js';
import './x-CIkVxhwJ.js';
import './createLucideIcon-BxaKzdjV.js';
import './check-CUIZ2C5m.js';
import './ScreenLayout-XFsWudNK-D79MMBEv.js';
import './Screen-Dtn4lspb-DcAaoYDV.js';
import './circle-check-big-C8I0gR75.js';
import './fingerprint-pattern-viZ1buWG.js';

const y={component:()=>{let{data:y,setModalData:v}=u(),C=y?.funding,k="solana"===C.chainType,x=A(null),{tokenPrice:D}=c(k?"solana":C.chain.id),S$1=k?void 0:C,F=!(!S$1?.erc20Address||S$1?.erc20ContractInfo),T=k?C.isUSDC?"USDC":"SOL":C.erc20Address?C.erc20ContractInfo?.symbol:C.chain.nativeCurrency.symbol||"ETH",b=parseFloat(C.amount),I=!isNaN(b)&&b>0,L=D?n(C.amount,D):void 0;return u$1(S,{children:[/*#__PURE__*/u$1(t,{}),/*#__PURE__*/u$1(e,{children:"Confirm or edit amount"}),/*#__PURE__*/u$1(a,{style:{marginTop:"32px"},children:[/*#__PURE__*/u$1(a$1,{children:F?/*#__PURE__*/u$1(n$1,{size:"50px"}):/*#__PURE__*/u$1(S,{children:[/*#__PURE__*/u$1(p,{onClick:()=>x.current?.focus(),children:[/*#__PURE__*/u$1(d,{ref:x,value:C.amount,onChange:o=>{let r=o.target.value;/^[0-9.]*$/.test(r)&&r.split(".").length-1<=1&&v({...y,funding:{...C,amount:r},solanaFundingData:y?.solanaFundingData?{...y.solanaFundingData,amount:r}:void 0});}}),/*#__PURE__*/u$1(c$1,{children:T})]}),!S$1?.erc20Address&&!(k&&C.isUSDC)&&/*#__PURE__*/u$1(l,{children:L&&I?`${L} USD`:""})]})}),/*#__PURE__*/u$1(u$2,{style:{marginTop:"1rem"},disabled:!I,onClick:C.onContinueWithExternalWallet,children:"Continue"})]}),/*#__PURE__*/u$1(h,{})]})}};

export { y as FundingAmountEditScreen, y as default };
