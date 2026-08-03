import { dv as k, dq as g, dl as le, dr as l, dk as u$1, du as gt } from "./index-BDOBKk5h.js";
import { y as y$1 } from "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-BRBz5tu8.js";
import { n } from "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import { c as createLucideIcon } from "./createLucideIcon-Bh-mHKe7.js";
import { E as ExternalLink } from "./external-link-Cq7_cWr3.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode);
const d = { component: () => {
  let { user: t, logout: r } = k(), { onUserCloseViaDialogOrKeybindRef: o, setModalData: i, navigate: s } = g(), p = le(), { acceptTerms: d2, closePrivyModal: y2, createAnalyticsEvent: j } = l(), v = (e) => {
    e == null ? void 0 : e.preventDefault(), y2({ shouldCallAuthOnSuccess: false }), r();
  };
  o.current = v;
  return u$1(u, { termsAndConditionsUrl: p == null ? void 0 : p.legal.termsAndConditionsUrl, privacyPolicyUrl: p == null ? void 0 : p.legal.privacyPolicyUrl, onAccept: async (e) => {
    e == null ? void 0 : e.preventDefault(), await d2(), t && a(t, p.embeddedWallets) ? (i({ createWallet: { onSuccess: () => {
    }, onFailure: (e2) => {
      console.error(e2), j({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e2, screen: "AffirmativeConsentScreen" } }), r();
    }, callAuthOnSuccessOnClose: true } }), s("EmbeddedWalletOnAccountCreateScreen")) : y2();
  }, onDecline: v });
} }, u = ({ termsAndConditionsUrl: i, privacyPolicyUrl: m, onAccept: n$1, onDecline: a2, title: l2 = "One last step", subtitle: c = "By signing up, you agree to our terms and privacy policy." }) => /* @__PURE__ */ u$1(n, { title: l2, subtitle: c, icon: FileCheck, primaryCta: { label: "Accept", onClick: n$1 }, secondaryCta: { label: "No thanks", onClick: a2 }, watermark: true, children: (i || m) && /* @__PURE__ */ u$1(y, { children: [i && /* @__PURE__ */ u$1(y$1, { variant: "muted", href: i, target: "_blank", size: "lg", style: { justifyContent: "space-between" }, as: "a", children: ["View Terms", /* @__PURE__ */ u$1(ExternalLink, { width: 16, height: 16, strokeWidth: 2.25 })] }), m && /* @__PURE__ */ u$1(y$1, { variant: "muted", href: m, target: "_blank", size: "lg", style: { justifyContent: "space-between" }, as: "a", children: ["View Privacy Policy", /* @__PURE__ */ u$1(ExternalLink, { width: 16, height: 16, strokeWidth: 2.25 })] })] }) });
let y = gt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: var(--screen-space);
`;
export {
  d as AffirmativeConsentScreen,
  u as AffirmativeConsentScreenView,
  d as default
};
