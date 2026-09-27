import { cg as formatUnits, dk as u$1, dG as S$1, dD as A, du as gt } from './index-BLGlf-uE.js';
import { i, m, o, c } from './ethers-DFE0Hz-t-CLyj7jax.js';
import { C } from './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';
import { t } from './transaction-CnfuREWo-DJd_FbTW.js';

const p=({weiQuantities:t,tokenPrice:r,tokenSymbol:n})=>{let i=m(t),l=r?o(i,r):void 0,c$1=c(i,n);return u$1(u,{children:l||c$1})},h=({weiQuantities:n,tokenPrice:i,tokenSymbol:l})=>{let c$1=m(n),d=i?o(c$1,i):void 0,m$1=c(c$1,l);return u$1(u,{children:d?/*#__PURE__*/u$1(S$1,{children:[/*#__PURE__*/u$1(x,{children:"USD"}),"<$0.01"===d?
/*#__PURE__*/u$1(k,{children:[/*#__PURE__*/u$1(g,{children:"<"}),"$0.01"]}):d]}):m$1})},f=({quantities:n,tokenPrice:o,tokenSymbol:s="SOL",tokenDecimals:a=9})=>{let l=n.reduce(((e,t)=>e+t),0n),m=o&&"SOL"===s&&9===a?C(l,o):void 0,p="SOL"===s&&9===a?t(l):`${formatUnits(l,a)} ${s}`;return u$1(u,{children:m?/*#__PURE__*/u$1(S$1,{children:"<$0.01"===m?
/*#__PURE__*/u$1(k,{children:[/*#__PURE__*/u$1(g,{children:"<"}),"$0.01"]}):m}):p})};let u=gt.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,x=gt.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,g=gt.span`
  font-size: 10px;
`,k=gt.span`
  display: flex;
  align-items: center;
`;function y(e,t){return `https://explorer.solana.com/account/${e}?chain=${t}`}const S=t=>/*#__PURE__*/u$1($,{href:"ethereum"===t.chainType?i(t.chainId,t.walletAddress):y(t.walletAddress,t.chainId),target:"_blank",children:A(t.walletAddress)});let $=gt.a`
  &:hover {
    text-decoration: underline;
  }
`;

export { S, f, h, p };
