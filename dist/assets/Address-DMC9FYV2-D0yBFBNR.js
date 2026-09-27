import { dl as d$1, dn as y, dr as u, dK as o, dN as S, dA as gt } from './index-DzW10a_X.js';
import { f as f$1 } from './ModalFooter-BldNwiHO-icJc5Gc0.js';
import { C as Check } from './check-BCKs4uvT.js';
import { C as Copy } from './copy-BHi4oxaR.js';

const d=({address:a,showCopyIcon:d,url:h,className:g})=>{let[u$1,x]=d$1(false);function y$1(e){e.stopPropagation(),navigator.clipboard.writeText(a).then((()=>x(true))).catch(console.error);}return y((()=>{if(u$1){let e=setTimeout((()=>x(false)),3e3);return ()=>clearTimeout(e)}}),[u$1]),/*#__PURE__*/u(m,h?{children:[/*#__PURE__*/u(f,{title:a,className:g,href:`${h}/address/${a}`,target:"_blank",children:o(a)}),d&&/*#__PURE__*/u(f$1,{onClick:y$1,size:"sm",style:{gap:"0.375rem"},children:/*#__PURE__*/u(S,u$1?{children:["Copied",/*#__PURE__*/u(Check,{size:16})]}:{children:["Copy",/*#__PURE__*/u(Copy,{size:16})]})})]}:{children:[/*#__PURE__*/u(p,{title:a,className:g,children:o(a)}),d&&/*#__PURE__*/u(f$1,{onClick:y$1,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:/*#__PURE__*/u(S,u$1?{children:["Copied",/*#__PURE__*/u(Check,{size:14})]}:{children:["Copy",/*#__PURE__*/u(Copy,{size:14})]})})]})};let m=gt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,p=gt.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,f=gt.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export { d };
