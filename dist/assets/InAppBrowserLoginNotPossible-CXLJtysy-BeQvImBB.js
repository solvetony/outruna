import { dr as l, dk as u } from "./index-CgfjQyaX.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { E as ExternalLink } from "./external-link-CiWO72_q.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
import "./createLucideIcon-Buh6I6L_.js";
const i = ({ onClose: r }) => /* @__PURE__ */ u(n, { title: "Could not log in with provider", subtitle: "It looks like you're using an in-app browser. To log in, please try again using an external browser.", icon: ExternalLink, primaryCta: { label: "Close", onClick: r }, watermark: true }), m = { component: () => {
  let { closePrivyModal: t } = l();
  return u(i, { onClose: () => t() });
} };
export {
  m as InAppBrowserLoginNotPossible,
  i as InAppBrowserLoginNotPossibleView,
  m as default
};
