import { dw as u, dx as l, dl as d, dm as A, dn as y, dr as u$1, dN as S, dp as T, dA as gt, e$ as a, f0 as n, f1 as It } from './index-T4wFPK-1.js';
import { F as ForwardRef$1 } from './ArrowsRightLeftIcon-DWO4-YwD.js';
import { F as ForwardRef } from './CheckCircleIcon-BHLU6247.js';
import { L, h, b as b$1 } from './ModalFooter-BldNwiHO-DOq4X--X.js';
import { d as d$1 } from './Layouts-BMRfo5hw-DPumlbyp.js';
import { t } from './analytics-mkkvFRju-DEN03uoI.js';

const b="If you've completed your purchase in Coinbase, your funds are on the way and may take a few minutes to appear.",j={component:()=>{let{data:o,setModalData:i,navigate:c,navigateBack:m}=u(),{closePrivyModal:d$1,createAnalyticsEvent:u$2,client:p}=l(),[f,w]=d("pending-in-flow"),[b,j]=d(false),C=A(0),I={...o?.funding,showAlternateFundingMethod:true};I.usingDefaultFundingMethod&&(I.usingDefaultFundingMethod=false);let{partnerUserId:F,popup:M}=o?.coinbaseOnrampStatus??{};return y((()=>{if("pending-in-flow"===f||"pending-after-flow"===f){let e=setInterval((async()=>{if(F)try{let{status:e}=await p.getCoinbaseOnRampStatus({partnerUserId:F});if("success"===e)return void w("success");if("failure"===e)throw Error("There was an error completing Coinbase Onramp flow.");if(C.current>=3)return i({funding:I,solanaFundingData:o?.solanaFundingData}),void c("FundingMethodSelectionScreen");M?.closed&&(C.current=C.current+1,w("pending-after-flow"));}catch(e){console.error(e),w("error"),u$2({eventName:t,payload:{status:"failure",provider:"coinbase-onramp",error:e.message}}),i({funding:{...I,errorMessage:"Something went wrong adding funds. Please try again or use another method."},solanaFundingData:o?.solanaFundingData}),c("FundingMethodSelectionScreen");}}),1500);return ()=>clearInterval(e)}}),[F,M,f]),y((()=>{let e=setTimeout((()=>j(true)),3e4);return ()=>clearTimeout(e)}),[]),/*#__PURE__*/u$1(S,{children:[/*#__PURE__*/u$1(L,{title:"Fund account",backFn:()=>{i({funding:I,solanaFundingData:o?.solanaFundingData}),m();}},"header"),/*#__PURE__*/u$1(k,{status:f,hasPendingTimedOut:b,onClickCta:d$1}),/*#__PURE__*/u$1(h,{})]})}},C=(e,r)=>{switch(e){case "success":return {title:"You've funded your account!",body:"It may take a few minutes for the assets to appear.",cta:"Continue"};case "pending-after-flow":return {title:"In progress",body:r?b:"Almost done. Retrieving transaction status from Coinbase",cta:"Done"};case "error":case "pending-in-flow":return {title:"In progress",body:r?b:"Go back to Coinbase Onramp to finish funding your account.",cta:"Done"}}};let k=({status:o,hasPendingTimedOut:i,onClickCta:n})=>{let{title:a,body:s,cta:m}=T((()=>C(o,i)),[o,i]);return u$1(S,{children:[/*#__PURE__*/u$1(x,{children:[/*#__PURE__*/u$1(F,{isSucccess:"success"===o}),/*#__PURE__*/u$1(d$1,{children:[/*#__PURE__*/u$1("h3",{children:a}),/*#__PURE__*/u$1(M,{children:s})]})]}),m&&/*#__PURE__*/u$1(b$1,{onClick:n,children:m})]})},I=e=>e?ForwardRef:()=>/*#__PURE__*/u$1(ForwardRef$1,{width:"3rem",height:"3rem",style:{backgroundColor:"var(--privy-color-foreground-4)",color:"var(--privy-color-background)",borderRadius:"100%",padding:"0.5rem",margin:"0.5rem"}}),F=({isSucccess:r})=>{if(!r){let r="var(--privy-color-foreground-4)";return u$1("div",{style:{position:"relative"},children:[/*#__PURE__*/u$1(a,{color:r,style:{position:"absolute"}}),/*#__PURE__*/u$1(n,{color:r}),/*#__PURE__*/u$1(It,{style:{position:"absolute",width:"2.8rem",height:"2.8rem",top:"1.2rem",left:"1.2rem"}})]})}let o=I(r),i=r?"var(--privy-color-success)":"var(--privy-color-foreground-4)";return u$1("div",{style:{borderColor:i,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",borderWidth:2,padding:"0.5rem",marginBottom:"0.5rem"},children:o&&/*#__PURE__*/u$1(o,{width:"4rem",height:"4rem",color:i})})},M=gt.p`
  font-size: 1rem;
  color: var(--privy-color-foreground-3);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,x=gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  padding: 2rem 0;
`;

export { j as CoinbaseOnrampStatusScreen, b as PENDING_TIMED_OUT_BODY, j as default, C as getStatusCopy };
