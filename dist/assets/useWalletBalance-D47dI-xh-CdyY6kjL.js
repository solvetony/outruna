import { dr as l, df as d, di as T, y as createPublicClient, z as http, dE as n, de as q, dh as y } from './index-BzZ64suB.js';

function s({rpcConfig:s,appId:l$1,address:m,chain:d$1}){let{chains:p}=l(),[f,u]=d(0n),[h,g]=d(false),b=T((()=>{let r=d$1||p[0];if(r)return createPublicClient({chain:d$1,transport:http(n(r,s,l$1))})}),[d$1,s,l$1]),j=q((async()=>{if(!m||!b)return;g(true);let r=await b.getBalance({address:m}).catch(console.error);return r?(u(r),g(false),r):void 0}),[b,m,u]);return y((()=>{j().catch(console.error);}),[]),{balance:f,isLoading:h,reloadBalance:j}}

export { s };
