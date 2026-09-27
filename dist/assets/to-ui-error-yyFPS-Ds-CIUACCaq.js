import { dd as D, dm as k, dr as l, dk as u, fJ as A, dG as S, dl as le, ge as j, fW as I, ht as Vi, hq as Hi, hr as Ti, dz as p$1, df as d$1, di as T$2, dh as y, hu as l$2, hv as Pi, d2 as toHex, du as gt } from './index-BLGlf-uE.js';
import { E, l as l$1, s, x, c, p, V, b, w, F as ForwardRef$3, T as T$1, d, u as u$1 } from './PinInput-YqT0dSuH-CFLBJ8sK.js';
import { F as ForwardRef$5 } from './FingerPrintIcon-BAMHGb0-.js';
import { F as ForwardRef$4 } from './PhoneIcon-BOecPtKm.js';
import { F as ForwardRef$2 } from './ShieldCheckIcon-BmhIkxLR.js';
import { T, m, g, $ } from './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import { n } from './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import { F as ForwardRef$1 } from './ExclamationTriangleIcon-CztF7Wet.js';
import { i } from './StackedContainer-B2vaEl56-BaMGFiRb.js';
import { c as c$1 } from './useGetTokenPrice-_x6xp2Po-gWCeM6DX.js';
import { $ as $$1 } from './TransactionDetails-cezbnGxz-CYmB4PuV.js';

function CalendarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ D(CalendarIcon);

const q=({handleClose:r,mfaMethods:c,onSelect:l})=>/*#__PURE__*/u(n,{title:"Verify your identity",subtitle:"Choose a verification method",icon:ForwardRef$2,iconVariant:"subtle",onClose:r,showClose:true,watermark:true,children:[/*#__PURE__*/u(u$1,{children:[c.includes("totp")&&/*#__PURE__*/u(j,{onClick:()=>l("totp"),children:[/*#__PURE__*/u(I,{children:/*#__PURE__*/u(ForwardRef$3,{})}),"Authenticator app"]},"totp"),c.includes("sms")&&/*#__PURE__*/u(j,{onClick:()=>l("sms"),children:[/*#__PURE__*/u(I,{children:/*#__PURE__*/u(ForwardRef$4,{})}),"SMS"]},"sms"),c.includes("passkey")&&/*#__PURE__*/u(j,{onClick:()=>l("passkey"),children:[/*#__PURE__*/u(I,{children:/*#__PURE__*/u(ForwardRef$5,{})}),"Passkey"]},"passkey")]}),/*#__PURE__*/u(g,{})]}),z=({pendingTransaction:e})=>{let{wallets:r}=p$1(),{walletProxy:n,rpcConfig:i,chains:t,appId:a,nativeTokenSymbolForChainId:s}=l(),[c,l$1]=d$1(null),[d,m]=d$1(e),{tokenPrice:h}=c$1(d.chainId),p=s(e.chainId)||"ETH",u$1=T$2((()=>r.find((e=>"privy"===e.walletClientType))),[r]);return y((()=>{(async function(){if(!n||!u$1)return d;let e=l$2(d.chainId,t,i,{appId:a}),o=await Pi(d,e,u$1.address);return l$1(toHex(BigInt(o.gas??0))),o})().then(m).catch(console.error);}),[n]),u$1?/*#__PURE__*/u(J,{children:/*#__PURE__*/u($$1,{from:u$1.address,to:d.to,txn:d,gas:c??void 0,tokenPrice:h,tokenSymbol:p})}):null};let J=gt.div`
  width: 100%;
  padding: 1rem 0;
`;const K=({hasBlockingError:n,error:i$1,onClose:t,onBack:d,handleSubmit:m$1,account:h,submitSuccess:p$1})=>{let{pendingTransaction:g$1}=l();return u(S,{children:[/*#__PURE__*/u(T,{onClose:t},"header"),/*#__PURE__*/u(i,{children:/*#__PURE__*/u("div",{children:[/*#__PURE__*/u(A,{success:p$1,fail:!!i$1}),/*#__PURE__*/u(i$1?ForwardRef$1:E,{style:{width:"38px",height:"38px"}})]})}),/*#__PURE__*/u(l$1,{style:{marginTop:"1rem"},children:"Verifying with passkey"}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(x,{children:[/*#__PURE__*/u(c,{children:/*#__PURE__*/u(ForwardRef$2,{})}),"Approve this action using your touch, face, PIN, or hardware key."]}),/*#__PURE__*/u(x,{children:[/*#__PURE__*/u(c,{children:/*#__PURE__*/u(ForwardRef,{})}),"You last added a passkey on"," ",h?.firstVerifiedAt?.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),"."]})]}),g$1&&/*#__PURE__*/u(p,{children:/*#__PURE__*/u(z,{pendingTransaction:g$1})}),i$1&&/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(V,{style:{marginTop:"1.25rem"},children:i$1.message}),/*#__PURE__*/u(m,{disabled:n,onClick:m$1,style:{margin:"1.25rem auto 0"},children:"Try again"})]}),d&&/*#__PURE__*/u(b,{style:{marginTop:"1rem"},onClick:d,children:"Choose another method"}),/*#__PURE__*/u(g,{})]})},O=({selectedMethod:i,submitSuccess:a,hasBlockingError:l$2,onClose:m,onBack:h,handleSubmitCode:p$1})=>{let u$1=le(),{pendingTransaction:g$1}=l();switch(i){case "sms":return u(S,{children:[/*#__PURE__*/u(T,{onClose:m},"header"),/*#__PURE__*/u(w,{style:{marginBottom:"1.5rem"},children:/*#__PURE__*/u(ForwardRef$4,{})}),/*#__PURE__*/u(l$1,{children:"Enter verification code"}),/*#__PURE__*/u(p,{children:[/*#__PURE__*/u(T$1,{success:a,disabled:l$2,onChange:p$1}),/*#__PURE__*/u(d,{children:["To continue, please enter the 6-digit code sent to your ",/*#__PURE__*/u("strong",{children:"mobile device"})]}),g$1&&/*#__PURE__*/u(z,{pendingTransaction:g$1})]}),h&&/*#__PURE__*/u(b,{theme:u$1?.appearance.palette.colorScheme,onClick:h,children:"Choose another method"}),/*#__PURE__*/u($,{onClick:m,children:"Cancel"}),/*#__PURE__*/u(g,{})]});case "totp":return u(S,{children:[/*#__PURE__*/u(T,{onClose:m},"header"),/*#__PURE__*/u(w,{style:{marginBottom:"1.5rem"},children:/*#__PURE__*/u(ForwardRef$3,{})}),/*#__PURE__*/u(l$1,{children:"Enter verification code"}),/*#__PURE__*/u(p,{children:[/*#__PURE__*/u(T$1,{success:a,disabled:l$2,onChange:p$1}),/*#__PURE__*/u(d,{children:["To continue, please enter the 6-digit code generated from your"," ",/*#__PURE__*/u("strong",{children:"authenticator app"})]}),g$1&&/*#__PURE__*/u(z,{pendingTransaction:g$1})]}),h&&/*#__PURE__*/u(b,{theme:u$1?.appearance.palette.colorScheme,onClick:h,children:"Choose another method"}),/*#__PURE__*/u($,{onClick:m,children:"Cancel"}),/*#__PURE__*/u(g,{})]});default:return null}},Q=e=>Vi(e)?{isBlocking:true,error:Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.")}:Hi(e)?{isBlocking:false,error:Error("The code you entered is not valid")}:Ti(e)?{isBlocking:true,error:Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.")}:(console.error(e),{isBlocking:false,error:Error("Something went wrong.")});

export { K, O, Q, q };
