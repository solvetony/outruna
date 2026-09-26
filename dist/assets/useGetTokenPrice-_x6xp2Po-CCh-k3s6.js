import { g1 as q, g2 as Z, dr as l, df as d, dh as y, g3 as H } from './index-YiUby3C-.js';
import { t } from './useGetSolPrice-x7gfUIHJ-LdcZAhsL.js';

function n(n){let t=n.filter((o=>!q.has(o.id)));return Z.concat(t)}

function c(c){let{tokenPrice:a,isTokenPriceLoading:s,tokenPriceError:l$1}=(t=>{let{showFiatPrices:c,getUsdTokenPrice:a,chains:s}=l(),[l$1,P]=d(true),[d$1,k]=d(void 0),[m,f]=d(void 0);return y((()=>{t||=H;let r=n(s).find((r=>r.id===Number(t)));(async()=>{if(c){if(!r)return P(false),void k(Error(`Unable to fetch token price on chain id ${t}`));try{P(!0);let e=await a(r);e?f(e):k(Error(`Unable to fetch token price on chain id ${r.id}`));}catch(r){k(r);}finally{P(false);}}else P(false);})();}),[t]),{tokenPrice:m,isTokenPriceLoading:l$1,tokenPriceError:d$1}})("solana"===c?-1:c),{solPrice:P,isSolPriceLoading:d$1,solPriceError:k}=t({enabled:"solana"===c});return "solana"===c?{tokenPrice:P,isTokenPriceLoading:d$1,tokenPriceError:k}:{tokenPrice:a,isTokenPriceLoading:s,tokenPriceError:l$1}}

export { c, n };
