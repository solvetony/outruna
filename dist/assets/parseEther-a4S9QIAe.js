import { eP as fromEther } from './index-DH2EW3Lt.js';

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
    return fromEther(ether, unit);
}

export { parseEther as p };
