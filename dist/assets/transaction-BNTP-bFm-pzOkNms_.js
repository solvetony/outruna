import { r } from './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';

function t(e,t=6,n=false,r=false){let o=(parseFloat(e.toString())/1e9).toFixed(t).replace(/0+$/,"").replace(/\.$/,""),i=r?"":" SOL";return n?`${o}${i}`:`${"0"===o?"<0.001":o}${i}`}function n({amount:n,fee:r$1,tokenPrice:o,isUsdc:i}){let a=BigInt(Math.floor(parseFloat(n)*10**(i?6:9))),s=i?a:a+r$1;return {fundingAmountInBaseUnit:a,fundingAmountInUsd:o?r(a,o):void 0,totalPriceInUsd:o?r(s,o):void 0,totalPriceInNativeCurrency:t(s),feePriceInNativeCurrency:t(r$1),feePriceInUsd:o?r(r$1,o):void 0}}

export { n, t };
