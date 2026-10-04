import { dr as u, dA as gt, dN as S } from './index-Cl25p6UW.js';

const n=({title:e,description:n,children:o,...c})=>
/*#__PURE__*/u(l,{...c,children:/*#__PURE__*/u(S,{children:[/*#__PURE__*/u("h3",{children:e}),"string"==typeof n?/*#__PURE__*/u("p",{children:n}):n,o]})});gt(n)`
  margin-bottom: 24px;
`;const o=({title:i,description:e,icon:n,children:o,...l})=>/*#__PURE__*/u(c,{...l,children:[n||null,/*#__PURE__*/u("h3",{children:i}),e&&"string"==typeof e?/*#__PURE__*/u("p",{children:e}):e,o]});let l=gt.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,c=gt(l)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;

export { n, o };
