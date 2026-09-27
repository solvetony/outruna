import { c7 as etherUnits } from './index-BLGlf-uE.js';
import { p as parseUnits } from './parseUnits-CoQdfwWE.js';

/**
 * Converts a string representation of ether to numerical wei.
 *
 * - Docs: https://viem.sh/docs/utilities/parseEther
 *
 * @example
 * import { parseEther } from 'viem'
 *
 * parseEther('420')
 * // 420000000000000000000n
 */
function parseEther(ether, unit = 'wei') {
    return parseUnits(ether, etherUnits[unit]);
}

export { parseEther as p };
