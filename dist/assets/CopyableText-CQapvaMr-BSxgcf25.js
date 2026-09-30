import { dl as d$1, dr as u, dN as S, dA as gt } from './index-B3PW-i17.js';
import { C as Check } from './check-CDTFnK48.js';
import { C as Copy } from './copy-pyzRHvZ_.js';

let l=gt.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,a=gt.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,s=gt(Check)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,d=gt(Copy)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function p({children:o,iconOnly:i,value:n,hideCopyIcon:c,onCopy:p,iconSize:h=14,...m}){let[u$1,f]=d$1(false);return u(l,{...m,onClick:()=>{navigator.clipboard.writeText(n||("string"==typeof o?o:"")).then((()=>p?.())).catch(console.error),f(true),setTimeout((()=>f(false)),1500);},children:[o," ",u$1?/*#__PURE__*/u(a,{children:[/*#__PURE__*/u(s,{size:h})," ",!i&&"Copied"]}):!c&&/*#__PURE__*/u(d,{size:h})]})}const h=({value:i,includeChildren:n,children:c,...p})=>{let[h,m]=d$1(false),u$1=()=>{navigator.clipboard.writeText(i).catch(console.error),m(true),setTimeout((()=>m(false)),1500);};return u(S,{children:[n?/*#__PURE__*/u(l,{...p,onClick:u$1,children:c}):/*#__PURE__*/u(S,{children:c}),/*#__PURE__*/u(l,{...p,onClick:u$1,children:h?/*#__PURE__*/u(a,{children:/*#__PURE__*/u(s,{})}):/*#__PURE__*/u(d,{})})]})};

export { h, p };
