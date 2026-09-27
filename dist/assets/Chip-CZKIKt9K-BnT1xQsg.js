import { dr as u, gh as Et, fX as ft, dA as gt } from './index-BvKZjSOd.js';
import { i } from './LoadingSkeleton-BMsgO5PV-Bl24h3nx.js';

const n=({children:o,color:i,isLoading:e,isPulsing:l,...n})=>/*#__PURE__*/u(a,{$color:i,$isLoading:e,$isPulsing:l,...n,children:o});let a=gt.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${r=>{let e,l;"green"===r.$color&&(e="var(--privy-color-success-dark)",l="var(--privy-color-success-light)"),"red"===r.$color&&(e="var(--privy-color-error)",l="var(--privy-color-error-light)"),"gray"===r.$color&&(e="var(--privy-color-foreground-2)",l="var(--privy-color-background-2)");let n=Et`
      from, to {
        background-color: ${l};
      }

      50% {
        background-color: rgba(${l}, 0.8);
      }
    `;return ft`
      color: ${e};
      background-color: ${l};
      ${r.$isPulsing&&ft`
        animation: ${n} 3s linear infinite;
      `};
    `}}

  ${i}
`;

export { n };
