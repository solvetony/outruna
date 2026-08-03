import { dr as l, dk as u } from "./index-BDOBKk5h.js";
import { n } from "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import { E as ExternalLink } from "./external-link-Cq7_cWr3.js";
import "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
import "./createLucideIcon-Bh-mHKe7.js";
const i = ({ onClose: r }) => /* @__PURE__ */ u(n, { title: "Could not log in with provider", subtitle: "It looks like you're using an in-app browser. To log in, please try again using an external browser.", icon: ExternalLink, primaryCta: { label: "Close", onClick: r }, watermark: true }), m = { component: () => {
  let { closePrivyModal: t } = l();
  return u(i, { onClose: () => t() });
} };
export {
  m as InAppBrowserLoginNotPossible,
  i as InAppBrowserLoginNotPossibleView,
  m as default
};
