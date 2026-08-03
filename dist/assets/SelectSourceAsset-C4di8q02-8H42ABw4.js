import { dk as u$1, gH as wl, df as d, dg as A$1, ff as _, de as q, du as gt } from "./index-CgfjQyaX.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { C as ChevronDown } from "./chevron-down-CoB3pFF-.js";
const c = ({ currency: o = "usd", value: a, onChange: s, inputMode: c2 = "decimal", autoFocus: p2 }) => {
  var _a;
  let [g2, v2] = d("0"), [y2, b2] = d(null), w2 = A$1(null), x2 = A$1(null), k2 = a ?? g2, z2 = ((_a = wl[o]) == null ? void 0 : _a.symbol) ?? "$", C2 = k2.length > 9 ? "small" : k2.length > 6 ? "compact" : "default";
  _((() => {
    var _a2;
    let e = (_a2 = x2.current) == null ? void 0 : _a2.offsetWidth;
    b2(e ? Math.ceil(e) + 2 : null);
  }), [C2, k2]);
  let $2 = q(((e) => {
    let r = e.target.value, o2 = (r = r.replace(/[^\d.]/g, "")).split(".");
    o2.length > 2 && (r = o2[0] + "." + o2.slice(1).join(""));
    let [t = "", i] = r.split("."), n2 = t.replace(/^0+(?=\d)/, "");
    ("" === (r = void 0 !== i ? `${n2 || "0"}.${i}` : n2 || "0") || "." === r) && (r = "0"), s ? s(r) : v2(r);
  }), [s]), A2 = q(((e) => {
    !(["Delete", "Backspace", "Tab", "Escape", "Enter", ".", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key) || (e.ctrlKey || e.metaKey) && ["a", "c", "v", "x"].includes(e.key.toLowerCase())) && (e.key >= "0" && e.key <= "9" || e.preventDefault());
  }), []);
  return u$1(u, { $size: C2, onClick: () => {
    var _a2;
    return (_a2 = w2.current) == null ? void 0 : _a2.focus();
  }, children: [/* @__PURE__ */ u$1(h, { $size: C2, children: z2 }), /* @__PURE__ */ u$1(m, { ref: w2, type: "text", inputMode: c2, value: k2, onChange: $2, onKeyDown: A2, autoFocus: p2, placeholder: "0", "aria-label": "Amount", style: y2 ? { width: `${y2}px` } : void 0 }), /* @__PURE__ */ u$1(f, { ref: x2, "aria-hidden": "true", children: k2 }), /* @__PURE__ */ u$1(h, { $size: C2, style: { opacity: 0 }, children: z2 })] });
}, p = ({ selectedAsset: t, onEditSourceAsset: i }) => {
  let { icon: n2 } = wl[t];
  return u$1(g, { onClick: i, children: [/* @__PURE__ */ u$1(v, { children: n2 }), /* @__PURE__ */ u$1(y, { children: t.toLocaleUpperCase() }), /* @__PURE__ */ u$1(b, { children: /* @__PURE__ */ u$1(ChevronDown, {}) })] });
};
let u = gt.span`
  position: relative;
  background-color: var(--privy-color-background);
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  && {
    color: var(--privy-color-foreground);
    font-size: ${({ $size: e }) => "small" === e ? "2.25rem" : "compact" === e ? "3rem" : "3.75rem"};
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`, m = gt.input`
  appearance: none;
  align-self: flex-start;
  min-width: 1ch;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: left;
  caret-color: currentColor;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`, f = gt.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  pointer-events: none;
`, h = gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: ${({ $size: e }) => "small" === e ? "0.75rem" : "compact" === e ? "0.875rem" : "1rem"};
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`, g = gt.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`, v = gt.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`, y = gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`, b = gt.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
const w = ({ opts: o, isLoading: t, onSelectSource: i }) => /* @__PURE__ */ u$1(n, { showClose: false, showBack: true, onBack: () => i(o.source.selectedAsset), title: "Select currency", children: /* @__PURE__ */ u$1(x, { children: o.source.assets.map(((o2) => {
  let { icon: n2, name: l } = wl[o2];
  return u$1(k, { onClick: () => i(o2), disabled: t, children: /* @__PURE__ */ u$1(z, { children: [/* @__PURE__ */ u$1(C, { children: n2 }), /* @__PURE__ */ u$1($, { children: [/* @__PURE__ */ u$1(A, { children: l }), /* @__PURE__ */ u$1(S, { children: o2.toLocaleUpperCase() })] })] }) }, o2);
})) }) });
let x = gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`, k = gt.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`, z = gt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`, C = gt.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`, $ = gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`, A = gt.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`, S = gt.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;
export {
  c,
  p,
  w
};
