import { C as createPublicClient, D as http, dL as n$1 } from './index-DEbwNYcQ.js';

const n=async({chain:n,address:s,appId:c,rpcConfig:i,erc20Address:o})=>{let p=createPublicClient({chain:n,transport:http(n$1(n,i,c))});return {balance:await p.readContract({address:o,abi:r,functionName:"balanceOf",args:[s]}).catch((()=>0n)),chain:n}};let r=[{constant:true,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:false,stateMutability:"view",type:"function"}];

export { n };
