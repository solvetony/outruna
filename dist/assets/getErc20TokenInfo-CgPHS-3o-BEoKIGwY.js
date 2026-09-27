import { C as createPublicClient, D as http, dL as n$1 } from './index-R8WYfo0z.js';

const n=async({address:n,chain:s,rpcConfig:r,privyAppId:o})=>{try{let l=createPublicClient({chain:s,transport:http(n$1(s,r,o))}),[m,p]=await Promise.all([l.readContract({abi:i,address:n,functionName:"symbol"}),l.readContract({abi:i,address:n,functionName:"decimals"})]);return {decimals:p,symbol:m}}catch(t){return console.log(t),null}};let i=[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];

export { n };
