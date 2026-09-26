import { dq as g, dr as l, df as d, dg as A, dh as y, dk as u, dG as S, di as T$1, du as gt, eX as P, eY as R, eZ as Pt } from './index-CMy8GldA.js';
import { F as ForwardRef$1 } from './ArrowsRightLeftIcon-2rKkVwKs.js';
import { F as ForwardRef } from './CheckCircleIcon-DCX6R4Zy.js';
import { T, u as u$1, m } from './ModalHeader-C1WIsRkF-Cv84eb10.js';
import { a } from './Layouts-BlFm53ED-D7TXiMXw.js';
import { t } from './analytics-mkkvFRju-DEN03uoI.js';

const b={component:()=>{let{data:o,setModalData:i,navigate:c,navigateBack:m}=g(),{closePrivyModal:u$2,createAnalyticsEvent:p,client:g$1}=l(),[f,j]=d("pending-in-flow"),b=A(0),C={...o?.funding,showAlternateFundingMethod:true};C.usingDefaultFundingMethod&&(C.usingDefaultFundingMethod=false);let{partnerUserId:k,popup:x}=o?.coinbaseOnrampStatus??{};return y((()=>{if("pending-in-flow"===f||"pending-after-flow"===f){let e=setInterval((async()=>{if(k)try{let{status:e}=await g$1.getCoinbaseOnRampStatus({partnerUserId:k});if("success"===e)return void j("success");if("failure"===e)throw Error("There was an error completing Coinbase Onramp flow.");if(b.current>=3)return i({funding:C,solanaFundingData:o?.solanaFundingData}),void c("FundingMethodSelectionScreen");x?.closed&&(b.current=b.current+1,j("pending-after-flow"));}catch(e){console.error(e),j("error"),p({eventName:t,payload:{status:"failure",provider:"coinbase-onramp",error:e.message}}),i({funding:{...C,errorMessage:"Something went wrong adding funds. Please try again or use another method."},solanaFundingData:o?.solanaFundingData}),c("FundingMethodSelectionScreen");}}),1500);return ()=>clearInterval(e)}}),[k,x,f]),/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(T,{title:"Fund account",backFn:()=>{i({funding:C,solanaFundingData:o?.solanaFundingData}),m();}},"header"),/*#__PURE__*/u(w,{status:f,onClickCta:u$2}),/*#__PURE__*/u(u$1,{})]})}};let w=({status:o,onClickCta:i})=>{let{title:n,body:a$1,cta:s}=T$1((()=>(e=>{switch(e){case "success":return {title:"You've funded your account!",body:"It may take a few minutes for the assets to appear.",cta:"Continue"};case "pending-after-flow":return {title:"In Progress",body:"Almost done. Retrieving transaction status from Coinbase",cta:""};case "error":case "pending-in-flow":return {title:"In Progress",body:"Go back to Coinbase Onramp to finish funding your account.",cta:""}}})(o)),[o]);return u(S,{children:[/*#__PURE__*/u(x,{children:[/*#__PURE__*/u(C,{isSucccess:"success"===o}),/*#__PURE__*/u(a,{children:[/*#__PURE__*/u("h3",{children:n}),/*#__PURE__*/u(k,{children:a$1})]})]}),s&&/*#__PURE__*/u(m,{onClick:i,children:s})]})},C=({isSucccess:r})=>{if(!r){let r="var(--privy-color-foreground-4)";return u("div",{style:{position:"relative"},children:[/*#__PURE__*/u(P,{color:r,style:{position:"absolute"}}),/*#__PURE__*/u(R,{color:r}),/*#__PURE__*/u(Pt,{style:{position:"absolute",width:"2.8rem",height:"2.8rem",top:"1.2rem",left:"1.2rem"}})]})}let n=r?ForwardRef:()=>/*#__PURE__*/u(ForwardRef$1,{width:"3rem",height:"3rem",style:{backgroundColor:"var(--privy-color-foreground-4)",color:"var(--privy-color-background)",borderRadius:"100%",padding:"0.5rem",margin:"0.5rem"}}),a=r?"var(--privy-color-success)":"var(--privy-color-foreground-4)";return u("div",{style:{borderColor:a,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",borderWidth:2,padding:"0.5rem",marginBottom:"0.5rem"},children:n&&/*#__PURE__*/u(n,{width:"4rem",height:"4rem",color:a})})},k=gt.p`
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

export { b as CoinbaseOnrampStatusScreen, b as default };
