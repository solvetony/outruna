import { g1 as q, g2 as Z, dr as l, df as d, dh as y, g3 as H } from "./index-lNx1hHWy.js";
import { t } from "./useGetSolPrice-x7gfUIHJ-C3LAMCIz.js";
function n(n2) {
  let t2 = n2.filter(((o) => !q.has(o.id)));
  return Z.concat(t2);
}
function c(c2) {
  let { tokenPrice: a, isTokenPriceLoading: s, tokenPriceError: l$1 } = ((t2) => {
    let { showFiatPrices: c3, getUsdTokenPrice: a2, chains: s2 } = l(), [l$12, P2] = d(true), [d$12, k2] = d(void 0), [m, f] = d(void 0);
    return y((() => {
      t2 || (t2 = H);
      let r = n(s2).find(((r2) => r2.id === Number(t2)));
      (async () => {
        if (c3) {
          if (!r) return P2(false), void k2(Error(`Unable to fetch token price on chain id ${t2}`));
          try {
            P2(true);
            let e = await a2(r);
            e ? f(e) : k2(Error(`Unable to fetch token price on chain id ${r.id}`));
          } catch (r2) {
            k2(r2);
          } finally {
            P2(false);
          }
        } else P2(false);
      })();
    }), [t2]), { tokenPrice: m, isTokenPriceLoading: l$12, tokenPriceError: d$12 };
  })("solana" === c2 ? -1 : c2), { solPrice: P, isSolPriceLoading: d$1, solPriceError: k } = t({ enabled: "solana" === c2 });
  return "solana" === c2 ? { tokenPrice: P, isTokenPriceLoading: d$1, tokenPriceError: k } : { tokenPrice: a, isTokenPriceLoading: s, tokenPriceError: l$1 };
}
export {
  c,
  n
};
