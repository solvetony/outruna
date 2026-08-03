import { dq as g, dl as le, dr as l, df as d$1, dh as y, fa as h, dk as u$1, dC as s } from "./index-CgfjQyaX.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { C as CircleAlert } from "./circle-alert-BgtxDUlJ.js";
import { C as CircleCheckBig } from "./circle-check-big-CeJfwGeZ.js";
import { c as createLucideIcon } from "./createLucideIcon-Buh6I6L_.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Ban = createLucideIcon("ban", __iconNode);
const u = ({ appName: i, success: n$1, error: s2, onRevoke: m, onDeny: a, onClose: c }) => /* @__PURE__ */ u$1(n, n$1 || s2 ? { title: s2 ? "Something went wrong" : "Success!", subtitle: s2 ? "Please try again." : "You've successfully revoked permissions.", icon: s2 ? CircleAlert : CircleCheckBig, iconVariant: s2 ? "error" : "success", onBack: c, watermark: true } : { title: "Revoke offline access to wallet", subtitle: `By confirming, ${i} will no longer be able to use this wallet on your behalf when you are not online.`, icon: Ban, primaryCta: { label: "Confirm", onClick: m }, secondaryCta: { label: "Deny", onClick: a }, onBack: c, watermark: true }), d = { component: () => {
  let { data: o } = g(), t = le(), { closePrivyModal: r } = l(), [p, d2] = d$1(false), [y$1, f] = d$1(), { onRevoke: j, onSuccess: v, onError: h$1 } = o.delegatedActions.revoke, k = async () => {
    p ? v() : h$1(y$1 ?? new s("User declined revoking access to their delegated wallet.")), r({ shouldCallAuthOnSuccess: false });
  };
  return y((() => {
    if (!p && !y$1) return;
    let e = setTimeout(k, h);
    return () => clearTimeout(e);
  }), [p, y$1]), /* @__PURE__ */ u$1(u, { appName: t.name, success: p, error: y$1, onRevoke: async () => {
    try {
      await j(), d2(true);
    } catch (e) {
      f(e);
    }
  }, onDeny: () => {
    k();
  }, onClose: k });
} };
export {
  d as DelegatedActionsRevokeScreen,
  u as DelegatedActionsRevokeScreenView,
  d as default
};
