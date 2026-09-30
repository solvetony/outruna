import { dj as D, dt as k, dx as l, dr as u, fY as i$1, dN as S, ds as We, gs as I, g9 as W, hT as ka, hQ as _a, hR as Ea, dF as v, dl as d$1, dp as T$1, dn as y, hU as l$2, hV as _i, d8 as toHex, dA as gt } from './index-T4wFPK-1.js';
import { E, l as l$1, s, x, c, p, V, b as b$1, w, F as ForwardRef$3, T, d, u as u$1 } from './PinInput-DbZ0b1i1-CCPjA1en.js';
import { F as ForwardRef$5 } from './FingerPrintIcon-CuT3OgYz.js';
import { F as ForwardRef$4 } from './PhoneIcon-Dp_MZLgd.js';
import { F as ForwardRef$2 } from './ShieldCheckIcon-MpRG4Rwg.js';
import { L, b, i as i$2, f } from './ModalFooter-BldNwiHO-DOq4X--X.js';
import { n } from './ScreenLayout-XFsWudNK-CIRucFgO.js';
import { F as ForwardRef$1 } from './ExclamationTriangleIcon-OMi8OV8U.js';
import { i } from './StackedContainer-B2vaEl56-CtBokB8N.js';
import { c as c$1 } from './useGetTokenPrice-Ufl46eND-BlADOtxi.js';
import { $ } from './TransactionDetails-BOeB1w20-C_F7fghx.js';

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

const K=({handleClose:r,mfaMethods:h,onSelect:p})=>/*#__PURE__*/u(n,{title:"Verify your identity",subtitle:"Choose a verification method",icon:ForwardRef$2,iconVariant:"subtle",onClose:r,showClose:true,watermark:true,children:[/*#__PURE__*/u(u$1,{children:[h.includes("totp")&&/*#__PURE__*/u(I,{onClick:()=>p("totp"),children:[/*#__PURE__*/u(W,{children:/*#__PURE__*/u(ForwardRef$3,{})}),"Authenticator app"]},"totp"),h.includes("sms")&&/*#__PURE__*/u(I,{onClick:()=>p("sms"),children:[/*#__PURE__*/u(W,{children:/*#__PURE__*/u(ForwardRef$4,{})}),"SMS"]},"sms"),h.includes("passkey")&&/*#__PURE__*/u(I,{onClick:()=>p("passkey"),children:[/*#__PURE__*/u(W,{children:/*#__PURE__*/u(ForwardRef$5,{})}),"Passkey"]},"passkey")]}),/*#__PURE__*/u(i$2,{})]}),O=({pendingTransaction:e})=>{let{wallets:r}=v(),{walletProxy:n,rpcConfig:i,chains:t,appId:a,nativeTokenSymbolForChainId:s}=l(),[c,l$1]=d$1(null),[d,m]=d$1(e),{tokenPrice:h}=c$1(d.chainId),p=s(e.chainId)||"ETH",u$1=T$1((()=>r.find((e=>"privy"===e.walletClientType))),[r]);return y((()=>{(async function(){if(!n||!u$1)return d;let e=l$2(d.chainId,t,i,{appId:a}),o=await _i(d,e,u$1.address);return l$1(toHex(BigInt(o.gas??0))),o})().then(m).catch(console.error);}),[n]),u$1?/*#__PURE__*/u(Q,{children:/*#__PURE__*/u($,{from:u$1.address,to:d.to,txn:d,gas:c??void 0,tokenPrice:h,tokenSymbol:p})}):null};let Q=gt.div`
  width: 100%;
  padding: 1rem 0;
`;const R=({hasBlockingError:n,error:i$3,onClose:t,onBack:c$1,handleSubmit:l$2,account:d,submitSuccess:m})=>{let{pendingTransaction:T}=l();return u(S,{children:[/*#__PURE__*/u(L,{onClose:t},"header"),/*#__PURE__*/u(i,{children:/*#__PURE__*/u("div",{children:[/*#__PURE__*/u(i$1,{success:m,fail:!!i$3}),/*#__PURE__*/u(i$3?ForwardRef$1:E,{style:{width:"38px",height:"38px"}})]})}),/*#__PURE__*/u(l$1,{style:{marginTop:"1rem"},children:"Verifying with passkey"}),/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(x,{children:[/*#__PURE__*/u(c,{children:/*#__PURE__*/u(ForwardRef$2,{})}),"Approve this action using your touch, face, PIN, or hardware key."]}),/*#__PURE__*/u(x,{children:[/*#__PURE__*/u(c,{children:/*#__PURE__*/u(ForwardRef,{})}),"You last added a passkey on"," ",d?.firstVerifiedAt?.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),"."]})]}),T&&/*#__PURE__*/u(p,{children:/*#__PURE__*/u(O,{pendingTransaction:T})}),i$3&&/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(V,{style:{marginTop:"1.25rem"},children:i$3.message}),/*#__PURE__*/u(b,{disabled:n,onClick:l$2,style:{margin:"1.25rem auto 0"},children:"Try again"})]}),c$1&&/*#__PURE__*/u(b$1,{style:{marginTop:"1rem"},onClick:c$1,children:"Choose another method"}),/*#__PURE__*/u(i$2,{})]})},U=({selectedMethod:i,submitSuccess:a,hasBlockingError:c,onClose:l$2,onBack:d$1,handleSubmitCode:m})=>{let h=We(),{pendingTransaction:u$1}=l();switch(i){case "sms":return u(S,{children:[/*#__PURE__*/u(L,{onClose:l$2},"header"),/*#__PURE__*/u(w,{style:{marginBottom:"1.5rem"},children:/*#__PURE__*/u(ForwardRef$4,{})}),/*#__PURE__*/u(l$1,{children:"Enter verification code"}),/*#__PURE__*/u(p,{children:[/*#__PURE__*/u(T,{success:a,disabled:c,onChange:m}),/*#__PURE__*/u(d,{children:["To continue, please enter the 6-digit code sent to your ",/*#__PURE__*/u("strong",{children:"mobile device"})]}),u$1&&/*#__PURE__*/u(O,{pendingTransaction:u$1})]}),d$1&&/*#__PURE__*/u(b$1,{theme:h?.appearance.palette.colorScheme,onClick:d$1,children:"Choose another method"}),/*#__PURE__*/u(f,{onClick:l$2,children:"Cancel"}),/*#__PURE__*/u(i$2,{})]});case "totp":return u(S,{children:[/*#__PURE__*/u(L,{onClose:l$2},"header"),/*#__PURE__*/u(w,{style:{marginBottom:"1.5rem"},children:/*#__PURE__*/u(ForwardRef$3,{})}),/*#__PURE__*/u(l$1,{children:"Enter verification code"}),/*#__PURE__*/u(p,{children:[/*#__PURE__*/u(T,{success:a,disabled:c,onChange:m}),/*#__PURE__*/u(d,{children:["To continue, please enter the 6-digit code generated from your"," ",/*#__PURE__*/u("strong",{children:"authenticator app"})]}),u$1&&/*#__PURE__*/u(O,{pendingTransaction:u$1})]}),d$1&&/*#__PURE__*/u(b$1,{theme:h?.appearance.palette.colorScheme,onClick:d$1,children:"Choose another method"}),/*#__PURE__*/u(f,{onClick:l$2,children:"Cancel"}),/*#__PURE__*/u(i$2,{})]});default:return null}},X=e=>ka(e)?{isBlocking:true,error:Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.")}:_a(e)?{isBlocking:false,error:Error("The code you entered is not valid")}:Ea(e)?{isBlocking:true,error:Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.")}:(console.error(e),{isBlocking:false,error:Error("Something went wrong.")});

export { K, R, U, X };
