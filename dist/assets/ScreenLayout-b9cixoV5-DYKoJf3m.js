import { dk as u, dG as S } from "./index-CgfjQyaX.js";
import { y } from "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import { w } from "./Screen-My4NO62A-Bp_AUTwc.js";
const n = ({ primaryCta: n2, secondaryCta: i, helpText: d, footerText: o, watermark: c = true, children: s, ...m }) => {
  let h = n2 || i ? /* @__PURE__ */ u(S, { children: [n2 && (() => {
    let { label: e, ...r } = n2, a = r.variant || "primary";
    return u(y, { ...r, variant: a, style: { width: "100%", ...r.style }, children: e });
  })(), i && (() => {
    let { label: e, ...r } = i, a = r.variant || "secondary";
    return u(y, { ...r, variant: a, style: { width: "100%", ...r.style }, children: e });
  })()] }) : null;
  return u(w, { id: m.id, className: m.className, children: [/* @__PURE__ */ u(w.Header, { ...m }), s ? /* @__PURE__ */ u(w.Body, { children: s }) : null, d || h || c ? /* @__PURE__ */ u(w.Footer, { children: [d ? /* @__PURE__ */ u(w.HelpText, { children: d }) : null, h ? /* @__PURE__ */ u(w.Actions, { children: h }) : null, c ? /* @__PURE__ */ u(w.Watermark, {}) : null] }) : null, o ? /* @__PURE__ */ u(w.FooterText, { children: o }) : null] });
};
export {
  n
};
