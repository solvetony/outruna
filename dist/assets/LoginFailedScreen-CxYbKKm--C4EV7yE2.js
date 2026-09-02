import { dr as l, dq as g, dk as u } from "./index-lNx1hHWy.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import { C as CircleX } from "./circle-x-BHMHXhSK.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
import "./createLucideIcon-BMDFWGQC.js";
const n = ({ title: o = "Could not connect with wallet", subtitle: r = "Please check that Phantom multichain is enabled and try again.", primaryCtaText: n2 = "Try again", secondaryCtaText: m2 = "Cancel", onTryAgain: a, onCancel: c }) => /* @__PURE__ */ u(n$1, { title: o, subtitle: r, icon: CircleX, iconVariant: "error", primaryCta: { label: n2, onClick: a }, secondaryCta: { label: m2, onClick: c }, watermark: true }), m = { component: () => {
  let { closePrivyModal: e } = l(), { navigate: i } = g();
  return u(n, { onTryAgain: () => {
    i("LandingScreen");
  }, onCancel: async () => {
    await e();
  } });
} };
export {
  m as LoginFailedScreen,
  n as LoginFailedScreenView,
  m as default
};
