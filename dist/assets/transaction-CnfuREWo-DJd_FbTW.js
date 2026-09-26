import { C } from './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';

function t(e,t=6,n=false,r=false){let o=(parseFloat(e.toString())/1e9).toFixed(t).replace(/0+$/,"").replace(/\.$/,""),i=r?"":" SOL";return n?`${o}${i}`:`${"0"===o?"<0.001":o}${i}`}function n({amount:n,fee:r,tokenPrice:o,isUsdc:i}){let a=BigInt(Math.floor(parseFloat(n)*10**(i?6:9))),s=i?a:a+r;return {fundingAmountInBaseUnit:a,fundingAmountInUsd:o?C(a,o):void 0,totalPriceInUsd:o?C(s,o):void 0,totalPriceInNativeCurrency:t(s),feePriceInNativeCurrency:t(r),feePriceInUsd:o?C(r,o):void 0}}

export { n, t };
