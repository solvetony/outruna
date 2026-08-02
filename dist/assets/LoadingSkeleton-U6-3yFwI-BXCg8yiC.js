import { fI as ft, g4 as Et } from "./index-Cw7cGahV.js";
let i = Et`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`;
const n = ft`
  ${(o) => o.$isLoading ? ft`
          width: 35%;
          animation: ${i} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        ` : ""}
`;
export {
  n
};
