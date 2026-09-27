import { dl as d, dn as y } from './index-R8WYfo0z.js';

const a=a=>{let[n,o]=d();return y((()=>{a().then((e=>{o(e);})).catch((()=>{}));}),[]),n};let n=async e=>"undefined"!=typeof window&&"PaymentRequest"in window&&await new window.PaymentRequest([{supportedMethods:e}],{id:"0",total:{label:"Item",amount:{currency:"USD",value:"1.00"}}}).canMakePayment();const o=()=>n("https://apple.com/apple-pay"),p=()=>n("https://google.com/pay");

export { a, o, p };
