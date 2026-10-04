import { decodeFunctionData, encodeFunctionData, erc20Abi, getAddress, isAddress, maxUint256 } from 'viem'
import { supportedChains } from '../chains.js'

export function validateTransaction (tx) {
  if (!isAddress(tx?.from || '') || !isAddress(tx?.to || '') || !supportedChains.some((chain) => chain.id === Number(tx.chainId))) throw new Error('safety.invalid')
  if (tx.data != null && (typeof tx.data !== 'string' || tx.data.length > 4194306 || !/^0x(?:[a-f0-9]{2})*$/i.test(tx.data))) throw new Error('safety.invalid')
  for (const name of ['value', 'gas', 'nonce', 'gasPrice', 'maxFeePerGas', 'maxPriorityFeePerGas']) {
    if (tx[name] == null) continue
    if (String(tx[name]).length > 78 || !/^(?:0x[0-9a-f]+|\d+)$/i.test(String(tx[name])) || BigInt(tx[name]) > maxUint256) throw new Error('safety.invalid')
  }
  return Object.freeze({ ...tx, chainId: Number(tx.chainId), from: getAddress(tx.from), to: getAddress(tx.to), data: tx.data || '0x', value: tx.value || '0x0' })
}

export function decodeTokenCall (data) {
  if (!/^0x(?:[a-f0-9]{2})*$/i.test(data || '')) throw new Error('safety.invalid')
  if (!['095ea7b3', 'a9059cbb', '23b872dd'].includes(data.slice(2, 10).toLowerCase())) return null
  try {
    const result = decodeFunctionData({ abi: erc20Abi, data })
    if (encodeFunctionData({ abi: erc20Abi, functionName: result.functionName, args: result.args }).toLowerCase() !== data.toLowerCase()) throw new Error()
    const approve = result.functionName === 'approve'
    return { type: approve ? 'approve' : 'send', recipient: getAddress(result.args[result.functionName === 'transferFrom' ? 1 : 0]), amount: result.args.at(-1), unlimited: approve && result.args[1] === maxUint256, from: result.functionName === 'transferFrom' ? getAddress(result.args[0]) : null }
  } catch { throw new Error('safety.invalid') }
}

export function encodeErc20ApproveData (spender, amount) {
  return encodeFunctionData({ abi: erc20Abi, functionName: 'approve', args: [getAddress(spender), BigInt(amount)] })
}

export function approvalIfNeeded (token, spender, amount, allowance) {
  return BigInt(allowance) >= BigInt(amount) ? null : { to: token, value: '0x0', data: encodeErc20ApproveData(spender, amount) }
}
