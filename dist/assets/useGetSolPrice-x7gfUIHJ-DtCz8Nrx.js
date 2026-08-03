import { dr as l, df as d, dh as y } from "./index-CgfjQyaX.js";
const t = ({ enabled: t2 = true } = {}) => {
  let { showFiatPrices: i, getUsdPriceForSol: a } = l(), [c, l$1] = d(true), [s, n] = d(void 0), [d$1, f] = d(void 0);
  return y((() => {
    (async () => {
      if (i && t2) try {
        l$1(true);
        let r = await a();
        r ? f(r) : n(Error("Unable to fetch SOL price"));
      } catch (r) {
        n(r);
      } finally {
        l$1(false);
      }
      else l$1(false);
    })();
  }), []), { solPrice: d$1, isSolPriceLoading: c, solPriceError: s };
};
export {
  t
};
