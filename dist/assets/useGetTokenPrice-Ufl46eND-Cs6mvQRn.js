import { dx as l, dl as d, dn as y, gg as ee, dI as P } from './index-EUcPO3t8.js';
import { t } from './useGetSolPrice-x7gfUIHJ-C2NlWCxd.js';

function c(c){let{tokenPrice:a,isTokenPriceLoading:s,tokenPriceError:l$1}=(t=>{let{showFiatPrices:c,getUsdTokenPrice:a,chains:s}=l(),[l$1,P$1]=d(true),[d$1,k]=d(void 0),[m,f]=d(void 0);return y((()=>{t||=ee;let r=P(s).find((r=>r.id===Number(t)));(async()=>{if(c){if(!r)return P$1(false),void k(Error(`Unable to fetch token price on chain id ${t}`));try{P$1(!0);let e=await a(r);e?f(e):k(Error(`Unable to fetch token price on chain id ${r.id}`));}catch(r){k(r);}finally{P$1(false);}}else P$1(false);})();}),[t]),{tokenPrice:m,isTokenPriceLoading:l$1,tokenPriceError:d$1}})("solana"===c?-1:c),{solPrice:P$1,isSolPriceLoading:d$1,solPriceError:k}=t({enabled:"solana"===c});return "solana"===c?{tokenPrice:P$1,isTokenPriceLoading:d$1,tokenPriceError:k}:{tokenPrice:a,isTokenPriceLoading:s,tokenPriceError:l$1}}

export { c };
