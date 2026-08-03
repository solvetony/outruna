import { df as d$1, dk as u, dG as S, du as gt } from "./index-CgfjQyaX.js";
import { C as Check } from "./check-2w7g-C8Q.js";
import { C as Copy } from "./copy-aH_6aZ6z.js";
let l = gt.button`
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
`, a = gt.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`, s = gt(Check)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`, d = gt(Copy)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;
function m({ children: o, iconOnly: i, value: n, hideCopyIcon: c, iconSize: m2 = 14, ...p2 }) {
  let [h, u$1] = d$1(false);
  return u(l, { ...p2, onClick: () => {
    navigator.clipboard.writeText(n || ("string" == typeof o ? o : "")).catch(console.error), u$1(true), setTimeout((() => u$1(false)), 1500);
  }, children: [o, " ", h ? /* @__PURE__ */ u(a, { children: [/* @__PURE__ */ u(s, { size: m2 }), " ", !i && "Copied"] }) : !c && /* @__PURE__ */ u(d, { size: m2 })] });
}
const p = ({ value: i, includeChildren: n, children: c, ...m2 }) => {
  let [p2, h] = d$1(false), u$1 = () => {
    navigator.clipboard.writeText(i).catch(console.error), h(true), setTimeout((() => h(false)), 1500);
  };
  return u(S, { children: [n ? /* @__PURE__ */ u(l, { ...m2, onClick: u$1, children: c }) : /* @__PURE__ */ u(S, { children: c }), /* @__PURE__ */ u(l, { ...m2, onClick: u$1, children: p2 ? /* @__PURE__ */ u(a, { children: /* @__PURE__ */ u(s, {}) }) : /* @__PURE__ */ u(d, {}) })] });
};
export {
  m,
  p
};
