import { dq as g, dk as u } from "./index-R3UC2dO4.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
const r = ({ style: o, ...e }) => /* @__PURE__ */ u("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { height: "38px", width: "38px", ...o }, ...e, children: /* @__PURE__ */ u("path", { d: "M20 13.6V20M20 26.4H20.016M36 20C36 28.8365 28.8366 36 20 36C11.1635 36 4.00001 28.8365 4.00001 20C4.00001 11.1634 11.1635 3.99999 20 3.99999C28.8366 3.99999 36 11.1634 36 20Z", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }) }), i = ({ title: o = "Unable to sign in", subtitle: i2 = "This is a test application that has reached its user limit. To allow more users, this app needs to be upgraded to production.", onGoBack: n2 }) => /* @__PURE__ */ u(n$1, { title: o, subtitle: i2, icon: r, iconVariant: "subtle", primaryCta: { label: "Go back", onClick: n2 }, showBack: true, onBack: n2, watermark: true }), n = { component: () => {
  let { navigate: e } = g();
  return u(i, { onGoBack: () => {
    e("LandingScreen");
  } });
} };
export {
  n as UserLimitReachedScreen,
  i as UserLimitReachedScreenView,
  n as default
};
