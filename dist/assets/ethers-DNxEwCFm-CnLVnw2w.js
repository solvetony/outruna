import { cg as formatEther, dx as l$1, gi as g } from './index-BvKZjSOd.js';

let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),s=r=>a.format(r);const n=(r,e)=>{let t=s(e*parseFloat(r));return "$0.00"!==t?t:"<$0.01"},o=(e,t)=>{let a=s(t*parseFloat(formatEther(e)));return "$0.00"===a?"<$0.01":a},c=(r,e,t=6,a=false)=>`${m(r,t,a)} ${e}`,m=(e,t=6,a=false)=>{let s=parseFloat(formatEther(e)).toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return a?s:`${"0"===s?"<0.001":s}`},i=r=>r.reduce(((r,e)=>r+e),0n),l=(r,a)=>{let{chains:s}=l$1(),n=`https://etherscan.io/address/${a}`,o=`${g(r,s)}/address/${a}`;if(!o)return n;try{new URL(o);}catch{return n}return o};

export { c, i, l, m, n, o };
