import { dA as gt, dr as u, dP as gn } from './index-Cesj8QNb.js';
import { X } from './x-D-nQcPVZ.js';
import { C as Check } from './check-DU5FKAb2.js';

const a=gt.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;gt.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;const c=({children:n,variant:a="default",icon:c})=>{let p=()=>{switch(a){case "success":return "var(--privy-color-icon-success)";case "error":return "var(--privy-color-icon-error)";default:return "var(--privy-color-icon-muted)"}};return u(l,{children:[/*#__PURE__*/u(s,{$variant:a,"data-variant":a,children:(()=>{if(c)
return gn.isValidElement(c)?/*#__PURE__*/gn.cloneElement(c,{stroke:p(),strokeWidth:2}):c;switch(a){case "success":default:return u(Check,{size:12,stroke:p(),strokeWidth:3});case "error":return u(X,{size:12,stroke:p(),strokeWidth:3})}})()}),n]})};let s=gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$variant:r})=>{switch(r){case "success":return "var(--privy-color-success-bg)";case "error":return "var(--privy-color-error-bg)";default:return "var(--privy-color-background-2)"}}};
  flex-shrink: 0;
`,l=gt.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align all elements to the top */
  text-align: left;
  gap: 8px;

  && {
    a {
      color: var(--privy-color-accent);
    }
  }
`;

export { a, c };
