import { y as createPublicClient, z as http, dE as n$1 } from "./index-BDOBKk5h.js";
const n = async ({ chain: n2, address: s, appId: c, rpcConfig: i, erc20Address: o }) => {
  let p = createPublicClient({ chain: n2, transport: http(n$1(n2, i, c)) });
  return { balance: await p.readContract({ address: o, abi: r, functionName: "balanceOf", args: [s] }).catch((() => 0n)), chain: n2 };
};
let r = [{ constant: true, inputs: [{ name: "_owner", type: "address" }], name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }], payable: false, stateMutability: "view", type: "function" }];
export {
  n
};
