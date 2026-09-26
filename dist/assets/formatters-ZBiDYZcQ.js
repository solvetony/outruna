import { cg as formatUnits, ca as formatEther } from './index-YiUby3C-.js';

function n(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function t({wei:e,precision:n=3}){return parseFloat(formatEther(e)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"")}function i({amount:r,decimals:n}){return formatUnits(BigInt(r),n)}

export { i, n, t };
