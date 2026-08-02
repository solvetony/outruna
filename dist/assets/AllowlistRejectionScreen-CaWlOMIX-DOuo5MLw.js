import { dq as g, dl as le, dk as u } from "./index-Cw7cGahV.js";
import { n } from "./safe-url-D7SRPu33-BDTGvdDK.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import { L as Lock } from "./lock-CjS6tMf_.js";
import "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
import "./createLucideIcon-vpjfwHTJ.js";
const m = ({ title: e = "You don't have access to this app", subtitle: r = "Have you been invited?", ctaText: m2 = "Try another account", ctaLink: a2, onCtaClick: s }) => /* @__PURE__ */ u(n$1, { title: e, subtitle: r, icon: Lock, iconVariant: "warning", primaryCta: { label: m2, onClick: () => {
  let t = n(a2);
  t ? window.open(t, "_blank", "noopener,noreferrer") : s == null ? void 0 : s();
} }, watermark: true }), a = { component: () => {
  let { navigate: o } = g(), i = le(), n2 = (i == null ? void 0 : i.allowlistConfig.errorTitle) || "You don't have access to this app", a2 = (i == null ? void 0 : i.allowlistConfig.errorDetail) || "Have you been invited?", s = (i == null ? void 0 : i.allowlistConfig.errorCtaText) || "Try another account", c = i == null ? void 0 : i.allowlistConfig.errorCtaLink;
  return u(m, { title: n2, subtitle: a2, ctaText: s, ctaLink: c ?? void 0, onCtaClick: () => {
    o("LandingScreen");
  } });
} };
export {
  a as AllowlistRejectionScreen,
  m as AllowlistRejectionScreenView,
  a as default
};
