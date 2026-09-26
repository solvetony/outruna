import { dq as g, dg as A, dk as u, dG as S } from './index-CMy8GldA.js';
import { k, u as u$1 } from './ModalHeader-C1WIsRkF-Cv84eb10.js';
import { d } from './Layouts-BlFm53ED-D7TXiMXw.js';
import { t } from './FundWalletMethodHeader-G5sXf6Zt-DWsuSUS5.js';
import { t as t$1 } from './index-Dq_xe9dz-hJh_mla6.js';
import { e } from './Title-BnzYV3Is-Dxm52BGP.js';
import { c } from './useGetTokenPrice-_x6xp2Po-ru-89GYj.js';
import { n } from './ethers-DFE0Hz-t-CvDvjl37.js';
import { a, p, d as d$1, c as c$1, l } from './styles-DLlsr-XC-BoRdtuGx.js';
import './useGetSolPrice-x7gfUIHJ-D5dwMtB6.js';
import './LinkPasskeyScreen-C2ClLwr7-DujX7AQC.js';
import './TodoList-CgrU7uwu-W8gp_mue.js';
import './x-DqcucJLE.js';
import './createLucideIcon-CGZvvyHL.js';
import './check-CUZKcW1m.js';
import './ScreenLayout-b9cixoV5-BlKz-rU6.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './circle-check-big-DRjTNw8X.js';
import './fingerprint-pattern-BUapEfQd.js';

const v={component:()=>{let{data:v,setModalData:g$1}=g(),C=v?.funding,x="solana"===C.chainType,k$1=A(null),{tokenPrice:S$1}=c(x?"solana":C.chain.id),D=x?void 0:C,T=!(!D?.erc20Address||D?.erc20ContractInfo),F=x?C.isUSDC?"USDC":"SOL":C.erc20Address?C.erc20ContractInfo?.symbol:C.chain.nativeCurrency.symbol||"ETH",A$1=parseFloat(C.amount),I=!isNaN(A$1)&&A$1>0,L=S$1?n(C.amount,S$1):void 0;return u(S,{children:[/*#__PURE__*/u(t,{}),/*#__PURE__*/u(e,{children:"Confirm or edit amount"}),/*#__PURE__*/u(d,{style:{marginTop:"32px"},children:[/*#__PURE__*/u(a,{children:T?/*#__PURE__*/u(t$1,{size:"50px"}):/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(p,{onClick:()=>k$1.current?.focus(),children:[/*#__PURE__*/u(d$1,{ref:k$1,value:C.amount,onChange:t=>{let o=t.target.value;/^[0-9.]*$/.test(o)&&o.split(".").length-1<=1&&g$1({...v,funding:{...C,amount:o},solanaFundingData:v?.solanaFundingData?{...v.solanaFundingData,amount:o}:void 0});}}),/*#__PURE__*/u(c$1,{children:F})]}),!D?.erc20Address&&!(x&&C.isUSDC)&&/*#__PURE__*/u(l,{children:L&&I?`${L} USD`:""})]})}),/*#__PURE__*/u(k,{style:{marginTop:"1rem"},disabled:!I,onClick:C.onContinueWithExternalWallet,children:"Continue"})]}),/*#__PURE__*/u(u$1,{})]})}};

export { v as FundingAmountEditScreen, v as default };
