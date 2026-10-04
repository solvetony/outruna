import { cm as formatUnits, dr as u$1, dN as S$1, dK as o, dA as gt } from './index-Cl25p6UW.js';
import { l, i, o as o$1, c } from './ethers-DNxEwCFm-CbUlqBBm.js';
import { r } from './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';
import { t } from './transaction-BNTP-bFm-pzOkNms_.js';

const p=({weiQuantities:t,tokenPrice:r,tokenSymbol:n})=>{let i$1=i(t),l=r?o$1(i$1,r):void 0,c$1=c(i$1,n);return u$1(u,{children:l||c$1})},h=({weiQuantities:n,tokenPrice:i$1,tokenSymbol:l})=>{let c$1=i(n),m=i$1?o$1(c$1,i$1):void 0,d=c(c$1,l);return u$1(u,{children:m?/*#__PURE__*/u$1(S$1,{children:[/*#__PURE__*/u$1(g,{children:"USD"}),"<$0.01"===m?
/*#__PURE__*/u$1(k,{children:[/*#__PURE__*/u$1(x,{children:"<"}),"$0.01"]}):m]}):d})},f=({quantities:n,tokenPrice:o,tokenSymbol:s="SOL",tokenDecimals:a=9})=>{let l=n.reduce(((e,t)=>e+t),0n),d=o&&"SOL"===s&&9===a?r(l,o):void 0,p="SOL"===s&&9===a?t(l):`${formatUnits(l,a)} ${s}`;return u$1(u,{children:d?/*#__PURE__*/u$1(S$1,{children:"<$0.01"===d?
/*#__PURE__*/u$1(k,{children:[/*#__PURE__*/u$1(x,{children:"<"}),"$0.01"]}):d}):p})};let u=gt.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,g=gt.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,x=gt.span`
  font-size: 10px;
`,k=gt.span`
  display: flex;
  align-items: center;
`;function y(e,t){return `https://explorer.solana.com/account/${e}?chain=${t}`}const S=t=>/*#__PURE__*/u$1($,{href:"ethereum"===t.chainType?l(t.chainId,t.walletAddress):y(t.walletAddress,t.chainId),target:"_blank",children:o(t.walletAddress)});let $=gt.a`
  &:hover {
    text-decoration: underline;
  }
`;

export { S, f, h, p };
