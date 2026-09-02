import { dr as l, dk as u } from "./index-R3UC2dO4.js";
import { n } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import { E as ExternalLink } from "./external-link-DpRN1gbV.js";
import "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
import "./createLucideIcon-COMOll4V.js";
const i = ({ onClose: r }) => /* @__PURE__ */ u(n, { title: "Could not log in with provider", subtitle: "It looks like you're using an in-app browser. To log in, please try again using an external browser.", icon: ExternalLink, primaryCta: { label: "Close", onClick: r }, watermark: true }), m = { component: () => {
  let { closePrivyModal: t } = l();
  return u(i, { onClose: () => t() });
} };
export {
  m as InAppBrowserLoginNotPossible,
  i as InAppBrowserLoginNotPossibleView,
  m as default
};
