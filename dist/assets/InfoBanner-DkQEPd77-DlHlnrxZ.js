import { dd as D, dm as k, dk as u, du as gt } from "./index-CgfjQyaX.js";
function InformationCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ k("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const ForwardRef = /* @__PURE__ */ D(InformationCircleIcon);
const i = ({ children: t, theme: i2 }) => /* @__PURE__ */ u(l, { $theme: i2, children: [/* @__PURE__ */ u(ForwardRef, { width: "20px", height: "20px", color: "var(--privy-color-icon-muted)", strokeWidth: 1.5, style: { flexShrink: 0 } }), /* @__PURE__ */ u(n, { $theme: i2, children: t })] });
let l = gt.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`, n = gt.div`
  color: ${(r) => "dark" === r.$theme ? "var(--privy-color-foreground-2)" : "var(--privy-color-foreground)"};
  flex: 1;
  text-align: left;

  /* text-sm/font-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`;
export {
  i
};
