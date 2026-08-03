import { dk as u, g4 as Et, fI as ft, du as gt } from "./index-CgfjQyaX.js";
import { n as n$1 } from "./LoadingSkeleton-U6-3yFwI-C21XxtIx.js";
const n = ({ children: o, color: i, isLoading: e, isPulsing: l, ...n2 }) => /* @__PURE__ */ u(a, { $color: i, $isLoading: e, $isPulsing: l, ...n2, children: o });
let a = gt.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${(r) => {
  let e, l;
  "green" === r.$color && (e = "var(--privy-color-success-dark)", l = "var(--privy-color-success-light)"), "red" === r.$color && (e = "var(--privy-color-error)", l = "var(--privy-color-error-light)"), "gray" === r.$color && (e = "var(--privy-color-foreground-2)", l = "var(--privy-color-background-2)");
  let n2 = Et`
      from, to {
        background-color: ${l};
      }

      50% {
        background-color: rgba(${l}, 0.8);
      }
    `;
  return ft`
      color: ${e};
      background-color: ${l};
      ${r.$isPulsing && ft`
        animation: ${n2} 3s linear infinite;
      `};
    `;
}}

  ${n$1}
`;
export {
  n
};
