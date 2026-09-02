import { dq as g, dl as le, dr as l, df as d$1, dh as y, fa as h, dk as u, dC as s } from "./index-lNx1hHWy.js";
import { j as j$1 } from "./WalletInfoCard-pBDMfJDY-DvtpYTvQ.js";
import { n } from "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import { C as CircleAlert } from "./circle-alert-Cdf4JDaM.js";
import { C as CircleCheckBig } from "./circle-check-big-Cof-Ai--.js";
import { c as createLucideIcon } from "./createLucideIcon-BMDFWGQC.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./ErrorMessage-D8VaAP5m-fXJKPRNA.js";
import "./LabelXs-oqZNqbm_-CvkZHJmS.js";
import "./Address--RvzbtOt-OvnKcGc6.js";
import "./check-B9O9qcRC.js";
import "./copy-CWKwr4tz.js";
import "./shared-FM0rljBt-DJ0HbPgU.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
];
const CloudUpload = createLucideIcon("cloud-upload", __iconNode);
const d = ({ appName: i, address: s2, success: m, error: a, onAccept: c, onDecline: l2, onClose: p }) => /* @__PURE__ */ u(n, m || a ? { title: a ? "Something went wrong" : "Success!", subtitle: a ? "Please try again." : `You've successfully granted delegated action permissions to ${i}.`, icon: a ? CircleAlert : CircleCheckBig, iconVariant: a ? "error" : "success", onBack: p, watermark: true } : { title: "Enable offline access", subtitle: `By confirming, ${i} will be able to use your wallet for you even when you're not around. You can revoke this later.`, icon: CloudUpload, primaryCta: { label: "Accept", onClick: c }, secondaryCta: { label: "Not now", onClick: l2 }, onBack: p, watermark: true, children: /* @__PURE__ */ u(j$1, { address: s2, title: "Wallet" }) }), j = { component: () => {
  let { data: t } = g(), o = le(), { closePrivyModal: r } = l(), [n2, u$1] = d$1(false), [j2, f] = d$1(), { address: y$1, onDelegate: h$1, onSuccess: g$1, onError: v } = t.delegatedActions.consent, w = async () => {
    n2 ? g$1() : v(j2 ?? new s("User declined delegating actions.")), r({ shouldCallAuthOnSuccess: false });
  };
  return y((() => {
    if (!n2 && !j2) return;
    let e = setTimeout(w, h);
    return () => clearTimeout(e);
  }), [n2, j2]), /* @__PURE__ */ u(d, { appName: o.name, address: y$1, success: n2, error: j2, onAccept: async () => {
    try {
      await h$1(), u$1(true);
    } catch (e) {
      f(e);
    }
  }, onDecline: () => {
    w();
  }, onClose: w });
} };
export {
  j as DelegatedActionsConsentScreen,
  d as DelegatedActionsConsentScreenView,
  j as default
};
