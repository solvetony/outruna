import { dk as u, du as gt, dG as S } from "./index-BDOBKk5h.js";
const n = ({ title: e, description: n2, children: o2, ...c2 }) => /* @__PURE__ */ u(l, { ...c2, children: /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u("h3", { children: e }), "string" == typeof n2 ? /* @__PURE__ */ u("p", { children: n2 }) : n2, o2] }) });
gt(n)`
  margin-bottom: 24px;
`;
const o = ({ title: i, description: e, icon: n2, children: o2, ...l2 }) => /* @__PURE__ */ u(c, { ...l2, children: [n2 || null, /* @__PURE__ */ u("h3", { children: i }), e && "string" == typeof e ? /* @__PURE__ */ u("p", { children: e }) : e, o2] });
let l = gt.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`, c = gt(l)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;
export {
  n,
  o
};
