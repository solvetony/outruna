import { dr as l, dk as u } from "./index-Cw7cGahV.js";
import { n } from "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import { E as ExternalLink } from "./external-link-CA24KiUi.js";
import "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
import "./createLucideIcon-vpjfwHTJ.js";
const i = ({ onClose: r }) => /* @__PURE__ */ u(n, { title: "Could not log in with provider", subtitle: "It looks like you're using an in-app browser. To log in, please try again using an external browser.", icon: ExternalLink, primaryCta: { label: "Close", onClick: r }, watermark: true }), m = { component: () => {
  let { closePrivyModal: t } = l();
  return u(i, { onClose: () => t() });
} };
export {
  m as InAppBrowserLoginNotPossible,
  i as InAppBrowserLoginNotPossibleView,
  m as default
};
