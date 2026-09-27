import { fX as ft, gh as Et } from './index-BvKZjSOd.js';

const a=Et`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,i=ft`
  ${r=>r.$isLoading?ft`
          width: 35%;
          animation: ${a} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;

export { i };
