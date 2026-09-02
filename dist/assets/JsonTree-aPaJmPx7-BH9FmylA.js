import { dk as u, du as gt } from "./index-R3UC2dO4.js";
let o = ({ data: t }) => {
  let o2 = (t2) => "object" == typeof t2 && null !== t2 ? /* @__PURE__ */ u(n, { children: Object.entries(t2).map((([r, t3]) => /* @__PURE__ */ u("li", { children: [/* @__PURE__ */ u("strong", { children: [r, ":"] }), " ", o2(t3)] }, r))) }) : /* @__PURE__ */ u("span", { children: String(t2) });
  return u("div", { children: o2(t) });
};
const i = gt.div`
  margin-top: 1.5rem;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  padding: 12px;
  text-align: left;
  max-height: 310px;
  overflow: scroll;
  white-space: pre-wrap;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground);
  line-height: 1.5;

  // hide the scrollbars
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
let n = gt.ul`
  margin-left: 12px !important;
  white-space: nowrap;

  &:first-child {
    margin-left: 0 !important;
  }

  strong {
    font-weight: 500 !important;
  }
`;
const a = ({ data: e, className: t }) => /* @__PURE__ */ u(i, { className: t, children: /* @__PURE__ */ u(o, { data: e }) });
export {
  a,
  i
};
