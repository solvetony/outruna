import { dr as l, dq as g, dk as u, dG as S, fs as u$1 } from "./index-lNx1hHWy.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import { L as Lock } from "./lock-BOsinXv-.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
import "./createLucideIcon-BMDFWGQC.js";
const n = ({ onClose: i, onProceed: s }) => /* @__PURE__ */ u(n$1, { title: "Secure Your Account", subtitle: /* @__PURE__ */ u(S, { children: ["Please set a password to secure your account.", /* @__PURE__ */ u("br", {}), "Losing access to this password and this device will make your account inaccessible."] }), icon: Lock, primaryCta: { label: "Add password", onClick: s }, onClose: i, watermark: true }), c = { component: () => {
  let { closePrivyModal: o } = l(), { data: t, navigate: r, onUserCloseViaDialogOrKeybindRef: a } = g(), { onFailure: c2 } = t.setWalletPassword, l$1 = () => {
    c2(new u$1("Exited before password was added to wallet")), o({ shouldCallAuthOnSuccess: false });
  };
  return a.current = l$1, /* @__PURE__ */ u(n, { onClose: l$1, onProceed: () => {
    r("EmbeddedWalletPasswordUpdateScreen");
  } });
} };
export {
  c as EmbeddedWalletPasswordUpdateSplashScreen,
  n as EmbeddedWalletPasswordUpdateSplashView,
  c as default
};
