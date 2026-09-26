import { y as createPublicClient, z as http, dE as n } from './index-YiUby3C-.js';

const a=async({address:a,chain:s,rpcConfig:r,privyAppId:o})=>{try{let l=createPublicClient({chain:s,transport:http(n(s,r,o))}),[m,c]=await Promise.all([l.readContract({abi:i,address:a,functionName:"symbol"}),l.readContract({abi:i,address:a,functionName:"decimals"})]);return {decimals:c,symbol:m}}catch(t){return console.log(t),null}};let i=[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];

export { a };
