import { dA as gt, gh as Et } from './index-DH6ifob4.js';
import { x as x$1 } from './ModalFooter-BldNwiHO-DpW95LgU.js';
import { LinkButton as L } from './LinkPasskeyScreen-BjrBgk8F-CGxb-GHY.js';

const e=gt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,n=gt.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,a=gt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,p=gt.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;gt.div`
  font-size: 42px !important;
`;const s=gt.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`,d=gt(s)`
  && {
    font-size: 42px;
  }
`;gt.button`
  cursor: pointer;
  padding-left: 4px;
`;const c=gt.div`
  font-size: 18px;
`,l=gt.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  /* we need this container to maintain a static height if there's no content */
  height: 20px;
`;gt.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin: auto;
  }
`,gt(L)`
  margin-top: 16px;
`;let x=Et`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;gt(x$1)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${x} 0.3s ease-in-out;
`;const m=gt.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;

export { a, c, d, e, l, m, n, p, s };
