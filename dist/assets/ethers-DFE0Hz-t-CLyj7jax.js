import { ca as formatEther, dr as l$1, g5 as O } from './index-BLGlf-uE.js';

let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),s=r=>a.format(r);const n=(r,e)=>{let t=s(e*parseFloat(r));return "$0.00"!==t?t:"<$0.01"},o=(e,t)=>{let a=s(t*parseFloat(formatEther(e)));return "$0.00"===a?"<$0.01":a},c=(r,e,t=6,a=false)=>`${l(r,t,a)} ${e}`,l=(e,t=6,a=false)=>{let s=parseFloat(formatEther(e)).toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return a?s:`${"0"===s?"<0.001":s}`},m=r=>r.reduce(((r,e)=>r+e),0n),i=(r,a)=>{let{chains:s}=l$1(),n=`https://etherscan.io/address/${a}`,o=`${O(r,s)}/address/${a}`;if(!o)return n;try{new URL(o);}catch{return n}return o};

export { c, i, l, m, n, o };
