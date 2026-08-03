import { dq as g, dl as le, dr as l, dk as u } from "./index-BDOBKk5h.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import { c as createLucideIcon } from "./createLucideIcon-Bh-mHKe7.js";
import "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode);
const n = ({ title: e = "Account not found", subtitle: i, appName: r = "this app", ctaText: n2 = "Try logging in again", onRetry: a2 }) => /* @__PURE__ */ u(n$1, { title: e, subtitle: i || `Please try logging in again or go to ${r} to create an account.`, icon: CircleQuestionMark, iconVariant: "warning", primaryCta: { label: n2, onClick: a2 }, watermark: true }), a = { component: () => {
  let { navigate: o, setModalData: m, data: a2 } = g(), s = le(), { getAuthMeta: p, client: c } = l();
  return u(n, { appName: s == null ? void 0 : s.name, onRetry: () => {
    let t = p();
    m({ ...a2, login: { ...a2 == null ? void 0 : a2.login, ...(t == null ? void 0 : t.disableSignup) ? { disableSignup: true } : {} } }), (c == null ? void 0 : c.authFlow) && (c.authFlow = void 0), o("LandingScreen");
  } });
} };
export {
  a as AccountNotFoundScreen,
  n as AccountNotFoundScreenView,
  a as default
};
