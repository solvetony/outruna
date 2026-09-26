import { ds as Tl, dq as g$1, dl as le, dg as A, dh as y, de as q, dt as Hl, dk as u, du as gt } from './index-CMy8GldA.js';
import { n } from './styles-DVyDvTdj-D_ReNtuD.js';
import { i, d, l, Q as QrCode } from './styles-BEdolEbW-CSWRowXa.js';
import { c as createLucideIcon } from './createLucideIcon-CGZvvyHL.js';
import { C as CreditCard } from './credit-card-CZUYmqNX.js';
import './ScreenLayout-b9cixoV5-BlKz-rU6.js';
import './ModalHeader-C1WIsRkF-Cv84eb10.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './index-Dq_xe9dz-hJh_mla6.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode);

const f={component:()=>{let a=Tl(),{onUserCloseViaDialogOrKeybindRef:f}=g$1(),C=le(),b=A(false);y((()=>{a&&(b.current=false);}),[a]);let x=q((async()=>{!b.current&&a&&(b.current=true,Hl(),await a.onCancel());}),[a]);if(y((()=>(f.current=x,()=>{f.current===x&&(f.current=null);})),[x,f]),!a)return null;if(a.error)return u(i,{icon:Banknote,iconVariant:"warning",title:"Unable to add funds",subtitle:a.error,showClose:true,onClose:x,primaryCta:{label:"Close",onClick:x}});return u(i,{icon:Banknote,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:true,onClose:x,children:/*#__PURE__*/u(n,{style:{marginTop:"1rem"},$colorScheme:C.appearance.palette.colorScheme,children:[a.startFiat&&/*#__PURE__*/u(d,{onClick:async()=>{b.current||(b.current=true,await(a.startFiat?.()));},children:[/*#__PURE__*/u(v,{children:/*#__PURE__*/u(CreditCard,{})}),/*#__PURE__*/u(g,{children:[/*#__PURE__*/u(l,{children:"Pay with fiat"}),/*#__PURE__*/u(w,{children:"Apple Pay, Google Pay, or debit card"})]})]}),a.startCrypto&&/*#__PURE__*/u(d,{onClick:async()=>{b.current||(b.current=true,await(a.startCrypto?.()));},children:[/*#__PURE__*/u(v,{children:/*#__PURE__*/u(QrCode,{})}),/*#__PURE__*/u(g,{children:[/*#__PURE__*/u(l,{children:"Transfer from wallet"}),/*#__PURE__*/u(w,{children:"Send crypto from any wallet"})]})]})]})})}};let v=gt.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--color-icon-muted, #64668b);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,g=gt.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,w=gt.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;

export { f as AddFundsSelectionScreen, f as default };
