import { dk as u$1, du as gt, dU as gn, fJ as A } from "./index-BDOBKk5h.js";
import { T, u as u$2 } from "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import { t } from "./index-Dq_xe9dz-q3L4r6Lr.js";
const c = gt.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`, d = gt.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`, s = gt.div`
  position: relative;
  display: flex;
  flex-direction: column;
`, p = gt(T)`
  margin: 0 -8px;
`, g = gt.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({ $colorScheme: e }) => "light" === e ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;" : "dark" === e ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;" : void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`, h = gt.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;
let v = gt.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`, u = gt.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, f = gt.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`, m = gt.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`, x = gt.div`
  background: ${({ $variant: e }) => {
  switch (e) {
    case "success":
      return "var(--privy-color-success-bg, #EAFCEF)";
    case "warning":
      return "var(--privy-color-warn, #FEF3C7)";
    case "error":
      return "var(--privy-color-error-bg, #FEE2E2)";
    case "loading":
    case "logo":
      return "transparent";
    default:
      return "var(--privy-color-background-2)";
  }
}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`, b = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`, y = gt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
const w = ({ children: r, ...i }) => /* @__PURE__ */ u$1(c, { children: /* @__PURE__ */ u$1(d, { ...i, children: r }) });
let k = gt.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`, E = gt(u$2)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`, F = gt.div`
  height: 100%;
  width: ${({ pct: e }) => e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`, j = ({ step: r }) => r ? /* @__PURE__ */ u$1(k, { children: /* @__PURE__ */ u$1(F, { pct: Math.min(100, r.current / r.total * 100) }) }) : null;
w.Header = ({ title: i, subtitle: o, icon: n, iconVariant: t2, iconLoadingStatus: a, showBack: l, onBack: c2, showInfo: d2, onInfo: g2, showClose: h2, onClose: x2, step: b2, headerTitle: y2, eyebrow: k2, ...E2 }) => /* @__PURE__ */ u$1(s, { ...E2, children: [/* @__PURE__ */ u$1(p, { backFn: l ? c2 : void 0, infoFn: d2 ? g2 : void 0, onClose: h2 ? x2 : void 0, title: y2, eyebrow: k2, closeable: h2 }), (n || t2 || i || o) && /* @__PURE__ */ u$1(v, { children: [n || t2 ? /* @__PURE__ */ u$1(w.Icon, { icon: n, variant: t2, loadingStatus: a }) : null, !(!i && !o) && /* @__PURE__ */ u$1(u, { children: [i && /* @__PURE__ */ u$1(f, { children: i }), o && /* @__PURE__ */ u$1(m, { children: o })] })] }), b2 && /* @__PURE__ */ u$1(j, { step: b2 })] }), (w.Body = /* @__PURE__ */ gn.forwardRef((({ children: r, ...i }, o) => /* @__PURE__ */ u$1(g, { ref: o, ...i, children: r })))).displayName = "Screen.Body", w.Footer = ({ children: r, ...i }) => /* @__PURE__ */ u$1(h, { id: "privy-content-footer-container", ...i, children: r }), w.Actions = ({ children: r, ...i }) => /* @__PURE__ */ u$1($, { ...i, children: r }), w.HelpText = ({ children: r, ...i }) => /* @__PURE__ */ u$1(z, { ...i, children: r }), w.FooterText = ({ children: r, ...i }) => /* @__PURE__ */ u$1(C, { ...i, children: r }), w.Watermark = () => /* @__PURE__ */ u$1(E, {}), w.Icon = ({ icon: o, variant: t$1 = "subtle", loadingStatus: a }) => "logo" === t$1 && o ? /* @__PURE__ */ u$1(b, "string" == typeof o ? { children: /* @__PURE__ */ u$1("img", { src: o, alt: "" }) } : /* @__PURE__ */ gn.isValidElement(o) ? { children: o } : { children: /* @__PURE__ */ gn.createElement(o) }) : "loading" === t$1 ? o ? /* @__PURE__ */ u$1(y, { children: /* @__PURE__ */ u$1("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: [/* @__PURE__ */ u$1(A, { success: a == null ? void 0 : a.success, fail: a == null ? void 0 : a.fail }), "string" == typeof o ? /* @__PURE__ */ u$1("span", { style: { background: `url('${o}') 0 0 / contain`, height: "38px", width: "38px", borderRadius: "6px", margin: "auto", backgroundSize: "contain" } }) : /* @__PURE__ */ gn.isValidElement(o) ? /* @__PURE__ */ gn.cloneElement(o, { style: { width: "38px", height: "38px" } }) : /* @__PURE__ */ gn.createElement(o, { style: { width: "38px", height: "38px" } })] }) }) : /* @__PURE__ */ u$1(x, { $variant: t$1, children: /* @__PURE__ */ u$1(t, { size: "64px" }) }) : /* @__PURE__ */ u$1(x, { $variant: t$1, children: o && ("string" == typeof o ? /* @__PURE__ */ u$1("img", { src: o, alt: "", style: { width: "32px", height: "32px", borderRadius: "6px" } }) : /* @__PURE__ */ gn.isValidElement(o) ? o : /* @__PURE__ */ gn.createElement(o, { width: 32, height: 32, stroke: (() => {
  switch (t$1) {
    case "success":
      return "var(--privy-color-icon-success)";
    case "warning":
      return "var(--privy-color-icon-warning)";
    case "error":
      return "var(--privy-color-icon-error)";
    default:
      return "var(--privy-color-icon-muted)";
  }
})(), strokeWidth: 2 })) });
let $ = gt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`, z = gt.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 13px;
    line-height: 20px;

    & a {
      text-decoration: underline;
    }
  }
`, C = gt.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`;
export {
  w
};
