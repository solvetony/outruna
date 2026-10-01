import { dy as zC, dw as u, ds as We, dm as A, dl as d, dn as y, dk as q, dz as QC, dr as u$1, dA as gt } from './index-gvgysxtU.js';
import { n as n$1 } from './index-CWARkn2w-CtZReh3K.js';
import { h, t } from './GooglePay-B53WnudL-CwEJ1FGE.js';
import { a, o, p } from './isPaymentRequestAvailable-Bq1cemEn-Wt9JHux8.js';
import { n } from './styles-DVyDvTdj-BM1GEFFb.js';
import { i, l, s } from './styles-BSL8-rdX-CeB9n6A3.js';
import { C as CreditCard, L as Landmark } from './landmark-C2rhF-Oj.js';
import { W as Wallet } from './wallet-ChPJ-A9Z.js';
import './ScreenLayout-XFsWudNK-G4gl9C4E.js';
import './ModalFooter-BldNwiHO-CgJHKx6-.js';
import './Screen-Dtn4lspb-Cb1SCxwn.js';
import './createLucideIcon-SFhWQtk1.js';

const k={component:()=>{let m=zC(),{onUserCloseViaDialogOrKeybindRef:k}=u(),O=We(),F=A(false),E=a(o),_=a(p),[I,D]=d(false),R=E?"APPLE_PAY":false===E&&_?"GOOGLE_PAY":null,T=true===E||false===E&&void 0!==_,Y=!m?.startFiat||T||I;y((()=>{let r=window.setTimeout((()=>D(true)),2e3);return ()=>window.clearTimeout(r)}),[]),y((()=>{m&&(F.current=false);}),[m]);let M=A(null);y((()=>{m&&!m.error&&Y&&M.current!==m&&(M.current=m,m.recordRowsViewed?.({walletPay:m.startFiat?R:void 0,walletPayTimedOut:m.startFiat?!T:void 0}));}),[Y,m,R,T]);let S=q((async()=>{!F.current&&m&&(F.current=true,QC(),await m.onCancel());}),[m]);if(y((()=>(k.current=S,()=>{k.current===S&&(k.current=null);})),[S,k]),!m)return null;if(m.error)return u$1(i,{title:"Unable to add funds",subtitle:m.error,showClose:true,onClose:S,primaryCta:{label:"Close",onClick:S}});let z=async r=>{F.current||(F.current=true,await(m.startFiat?.(r)));};return u$1(i,{title:"Pay with",subtitle:"Debit cards typically have higher success rates than credit cards, even with Apple Pay or Google Pay.",showClose:true,onClose:S,children:Y?/*#__PURE__*/u$1(n,{style:{marginTop:"1rem"},$colorScheme:O.appearance.palette.colorScheme,children:[m.startFiat&&/*#__PURE__*/u$1(l,{onClick:()=>z("CREDIT_DEBIT_CARD"),children:[/*#__PURE__*/u$1(x,{children:/*#__PURE__*/u$1(CreditCard,{})}),/*#__PURE__*/u$1(L,{children:[/*#__PURE__*/u$1(s,{children:"Debit or credit card"}),/*#__PURE__*/u$1(G,{children:"Less than 10 minutes"})]})]}),m.startFiat&&"APPLE_PAY"===R&&/*#__PURE__*/u$1(l,{onClick:()=>z("APPLE_PAY"),children:[/*#__PURE__*/u$1(x,{children:/*#__PURE__*/u$1(h,{width:18,height:18})}),/*#__PURE__*/u$1(L,{children:[/*#__PURE__*/u$1(s,{children:"Apple Pay"}),/*#__PURE__*/u$1(G,{children:"Less than 10 minutes"})]})]}),m.startFiat&&"GOOGLE_PAY"===R&&/*#__PURE__*/u$1(l,{onClick:()=>z("GOOGLE_PAY"),children:[/*#__PURE__*/u$1(x,{children:/*#__PURE__*/u$1(t,{width:18,height:18})}),/*#__PURE__*/u$1(L,{children:[/*#__PURE__*/u$1(s,{children:"Google Pay"}),/*#__PURE__*/u$1(G,{children:"Less than 10 minutes"})]})]}),m.startFiat&&/*#__PURE__*/u$1(l,{onClick:()=>z("BANK"),children:[/*#__PURE__*/u$1(x,{children:/*#__PURE__*/u$1(Landmark,{})}),/*#__PURE__*/u$1(L,{children:[/*#__PURE__*/u$1(s,{children:"Bank account"}),/*#__PURE__*/u$1(G,{children:"1–2 days"})]})]}),m.startCrypto&&/*#__PURE__*/u$1(l,{onClick:async()=>{F.current||(F.current=true,await(m.startCrypto?.()));},children:[/*#__PURE__*/u$1(x,{children:/*#__PURE__*/u$1(Wallet,{})}),/*#__PURE__*/u$1(L,{children:[/*#__PURE__*/u$1(s,{children:"Crypto wallet or exchange"}),/*#__PURE__*/u$1(G,{children:"Instant"})]})]})]}):/*#__PURE__*/u$1(b,{children:/*#__PURE__*/u$1(n$1,{size:"50px"})})})}};let b=gt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-height: 8rem;
`,x=gt.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-icon-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,L=gt.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,G=gt.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;

export { k as AddFundsSelectionScreen, k as default };
