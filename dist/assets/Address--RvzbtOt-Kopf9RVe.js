import { df as d$1, dh as y, dk as u, dD as A, dG as S, du as gt } from "./index-CgfjQyaX.js";
import { $ } from "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import { C as Check } from "./check-2w7g-C8Q.js";
import { C as Copy } from "./copy-aH_6aZ6z.js";
const d = ({ address: s, showCopyIcon: d2, url: h, className: u$1 }) => {
  let [g, x] = d$1(false);
  function y$1(e) {
    e.stopPropagation(), navigator.clipboard.writeText(s).then((() => x(true))).catch(console.error);
  }
  return y((() => {
    if (g) {
      let e = setTimeout((() => x(false)), 3e3);
      return () => clearTimeout(e);
    }
  }), [g]), /* @__PURE__ */ u(m, h ? { children: [/* @__PURE__ */ u(f, { title: s, className: u$1, href: `${h}/address/${s}`, target: "_blank", children: A(s) }), d2 && /* @__PURE__ */ u($, { onClick: y$1, size: "sm", style: { gap: "0.375rem" }, children: /* @__PURE__ */ u(S, g ? { children: ["Copied", /* @__PURE__ */ u(Check, { size: 16 })] } : { children: ["Copy", /* @__PURE__ */ u(Copy, { size: 16 })] }) })] } : { children: [/* @__PURE__ */ u(p, { title: s, className: u$1, children: A(s) }), d2 && /* @__PURE__ */ u($, { onClick: y$1, size: "sm", style: { gap: "0.375rem", fontSize: "14px" }, children: /* @__PURE__ */ u(S, g ? { children: ["Copied", /* @__PURE__ */ u(Check, { size: 14 })] } : { children: ["Copy", /* @__PURE__ */ u(Copy, { size: 14 })] }) })] });
};
let m = gt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`, p = gt.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`, f = gt.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export {
  d
};
