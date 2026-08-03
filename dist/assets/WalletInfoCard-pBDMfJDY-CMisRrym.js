import { df as d, dh as y$1, dk as u$1, dG as S, du as gt } from "./index-BDOBKk5h.js";
import { $ } from "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import { e } from "./ErrorMessage-D8VaAP5m-Dl-cYhnb.js";
import { r } from "./LabelXs-oqZNqbm_-DCbVuFgS.js";
import { d as d$1 } from "./Address--RvzbtOt-DYV2Nw9s.js";
import { d as d$2 } from "./shared-FM0rljBt-ZsFHMSZj.js";
import { C as Check } from "./check-BeAd3IiM.js";
import { C as Copy } from "./copy-Ws1Rb_R3.js";
let h = gt(d$2)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`, f = gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`, g = gt.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`, u = gt.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`, x = gt(r)`
  text-align: left;
  margin-bottom: 0.5rem;
`, v = gt(e)`
  margin-top: 0.25rem;
`, y = gt($)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;
const j = ({ errMsg: n, balance: m, address: l, className: d$22, title: p, showCopyButton: j2 = false }) => {
  let [b, w] = d(false);
  return y$1((() => {
    if (b) {
      let e2 = setTimeout((() => w(false)), 3e3);
      return () => clearTimeout(e2);
    }
  }), [b]), /* @__PURE__ */ u$1("div", { children: [p && /* @__PURE__ */ u$1(x, { children: p }), /* @__PURE__ */ u$1(h, { className: d$22, $state: n ? "error" : void 0, children: /* @__PURE__ */ u$1(f, { children: [/* @__PURE__ */ u$1(g, { children: [/* @__PURE__ */ u$1(d$1, { address: l, showCopyIcon: false }), void 0 !== m && /* @__PURE__ */ u$1(u, { children: m })] }), j2 && /* @__PURE__ */ u$1(y, { onClick: function(e2) {
    e2.stopPropagation(), navigator.clipboard.writeText(l).then((() => w(true))).catch(console.error);
  }, size: "sm", children: /* @__PURE__ */ u$1(S, b ? { children: ["Copied", /* @__PURE__ */ u$1(Check, { size: 14 })] } : { children: ["Copy", /* @__PURE__ */ u$1(Copy, { size: 14 })] }) })] }) }), n && /* @__PURE__ */ u$1(v, { children: n })] });
};
export {
  j
};
