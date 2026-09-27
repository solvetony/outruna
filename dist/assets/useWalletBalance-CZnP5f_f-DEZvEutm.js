import { dx as l, dl as d, dp as T, C as createPublicClient, D as http, dL as n, dk as q, dn as y } from './index-DsU0Cpsn.js';

function s({rpcConfig:s,appId:l$1,address:m,chain:p}){let{chains:d$1}=l(),[f,u]=d(0n),[h,g]=d(false),b=T((()=>{let r=p||d$1[0];if(r)return createPublicClient({chain:p,transport:http(n(r,s,l$1))})}),[p,s,l$1]),j=q((async()=>{if(!m||!b)return;g(true);let r=await b.getBalance({address:m}).catch(console.error);return r?(u(r),g(false),r):void 0}),[b,m,u]);return y((()=>{j().catch(console.error);}),[]),{balance:f,isLoading:h,reloadBalance:j}}

export { s };
