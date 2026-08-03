import { dr as l, dq as g, dk as u } from "./index-CgfjQyaX.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { C as CircleX } from "./circle-x-DDYAG7vC.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
import "./createLucideIcon-Buh6I6L_.js";
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
