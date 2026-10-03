import { dl as d, dn as y$1, dr as u$1, dN as S, dA as gt } from './index-CObXCjNU.js';
import { f as f$1 } from './ModalFooter-BldNwiHO-DmHp1Mus.js';
import { e } from './ErrorMessage-D8VaAP5m-CydC6APn.js';
import { r } from './LabelXs-oqZNqbm_-CMnqF4R8.js';
import { d as d$1 } from './Address-DMC9FYV2-DuLjrcas.js';
import { d as d$2 } from './shared-FM0rljBt-CxMCVzfd.js';
import { C as Check } from './check-BO9_MTpw.js';
import { C as Copy } from './copy-DvWUZpX4.js';

let h=gt(d$2)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,f=gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,g=gt.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,u=gt.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,x=gt(r)`
  text-align: left;
  margin-bottom: 0.5rem;
`,v=gt(e)`
  margin-top: 0.25rem;
`,y=gt(f$1)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const j=({errMsg:n,balance:m,address:l,className:d$2,title:p,showCopyButton:j=false})=>{let[b,w]=d(false);return y$1((()=>{if(b){let e=setTimeout((()=>w(false)),3e3);return ()=>clearTimeout(e)}}),[b]),/*#__PURE__*/u$1("div",{children:[p&&/*#__PURE__*/u$1(x,{children:p}),/*#__PURE__*/u$1(h,{className:d$2,$state:n?"error":void 0,children:/*#__PURE__*/u$1(f,{children:[/*#__PURE__*/u$1(g,{children:[/*#__PURE__*/u$1(d$1,{address:l,showCopyIcon:false}),void 0!==m&&/*#__PURE__*/u$1(u,{children:m})]}),j&&/*#__PURE__*/u$1(y,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(l).then((()=>w(true))).catch(console.error);},size:"sm",children:/*#__PURE__*/u$1(S,b?{children:["Copied",/*#__PURE__*/u$1(Check,{size:14})]}:{children:["Copy",/*#__PURE__*/u$1(Copy,{size:14})]})})]})}),n&&/*#__PURE__*/u$1(v,{children:n})]})};

export { j };
