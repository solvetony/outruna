import { dr as l, dk as u } from "./index-lNx1hHWy.js";
import { n } from "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import { E as ExternalLink } from "./external-link-BG7PVdPl.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
import "./createLucideIcon-BMDFWGQC.js";
const i = ({ onClose: r }) => /* @__PURE__ */ u(n, { title: "Could not log in with provider", subtitle: "It looks like you're using an in-app browser. To log in, please try again using an external browser.", icon: ExternalLink, primaryCta: { label: "Close", onClick: r }, watermark: true }), m = { component: () => {
  let { closePrivyModal: t } = l();
  return u(i, { onClose: () => t() });
} };
export {
  m as InAppBrowserLoginNotPossible,
  i as InAppBrowserLoginNotPossibleView,
  m as default
};
