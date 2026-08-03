import { dv as k, dr as l, dq as g, df as d, dh as y, gI as O, f6 as S$1, hJ as N, hK as n, dk as u, eJ as g$1, du as gt, i as isHex, cw as hexToString, dG as S$2, hM as base64 } from "./index-CgfjQyaX.js";
import { h } from "./CopyToClipboard-DSTf_eKU-B0lh9vpA.js";
import { a } from "./Layouts-BlFm53ED-Dx6cwyr0.js";
import { a as a$1, i } from "./JsonTree-aPaJmPx7-BNjnf_K-.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
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
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
];
const SquarePen = createLucideIcon("square-pen", __iconNode);
const w = gt.img`
  && {
    height: ${(e) => "sm" === e.size ? "65px" : "140px"};
    width: ${(e) => "sm" === e.size ? "65px" : "140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;
let T = (e) => {
  if (!isHex(e)) return e;
  try {
    let t = hexToString(e);
    return t.includes("�") ? e : t;
  } catch {
    return e;
  }
}, S = (e) => {
  try {
    let t = base64.decode(e), o = new TextDecoder().decode(t);
    return o.includes("�") ? e : o;
  } catch {
    return e;
  }
}, E = (r) => {
  let { types: i2, primaryType: n2, ...a2 } = r.typedData;
  return u(S$2, { children: [/* @__PURE__ */ u(A, { data: a2 }), /* @__PURE__ */ u(h, { text: (s = r.typedData, JSON.stringify(s, null, 2)), itemName: "full payload to clipboard" }), " "] });
  var s;
};
const R = ({ method: o, messageData: r, copy: n2, iconUrl: a$12, isLoading: s, success: l2, walletProxyIsLoading: c, errorMessage: m, isCancellable: p, onSign: u$1, onCancel: g2, onClose: h2 }) => /* @__PURE__ */ u(n$1, { title: n2.title, subtitle: n2.description, showClose: true, onClose: h2, icon: SquarePen, iconVariant: "subtle", helpText: m ? /* @__PURE__ */ u(L, { children: m }) : void 0, primaryCta: { label: n2.buttonText, onClick: u$1, disabled: s || l2 || c, loading: s }, secondaryCta: p ? { label: "Not now", onClick: g2, disabled: s || l2 || c } : void 0, watermark: true, children: /* @__PURE__ */ u(a, { children: [a$12 ? /* @__PURE__ */ u(w, { style: { alignSelf: "center" }, size: "sm", src: a$12, alt: "app image" }) : null, /* @__PURE__ */ u(D, { children: ["personal_sign" === o && /* @__PURE__ */ u(U, { children: T(r) }), "eth_signTypedData_v4" === o && /* @__PURE__ */ u(E, { typedData: r }), "solana_signMessage" === o && /* @__PURE__ */ u(U, { children: S(r) })] })] }) }), _ = { component: () => {
  let { authenticated: t } = k(), { initializeWalletProxy: o, closePrivyModal: r } = l(), { navigate: i2, data: s, onUserCloseViaDialogOrKeybindRef: l$1 } = g(), [c, p] = d(true), [d$1, u$1] = d(""), [g$2, b] = d(), [w2, T2] = d(null), [S2, E2] = d(false);
  y((() => {
    t || i2("LandingScreen");
  }), [t]), y((() => {
    o(O).then(((e) => {
      p(false), e || (u$1("An error has occurred, please try again."), b(new S$1(new N(d$1, n.E32603_DEFAULT_INTERNAL_ERROR.eipCode))));
    }));
  }), []);
  let { method: _2, data: D2, confirmAndSign: L2, onSuccess: A2, onFailure: U2, uiOptions: M } = s.signMessage, I = { title: (M == null ? void 0 : M.title) || "Sign message", description: (M == null ? void 0 : M.description) || "Signing this message will not cost you any fees.", buttonText: (M == null ? void 0 : M.buttonText) || "Sign and continue" }, k$1 = (e) => {
    e ? A2(e) : U2(g$2 || new S$1(new N("The user rejected the request.", n.E4001_USER_REJECTED_REQUEST.eipCode))), r({ shouldCallAuthOnSuccess: false }), setTimeout((() => {
      T2(null), u$1(""), b(void 0);
    }), 200);
  };
  l$1.current = () => {
    k$1(w2);
  };
  return u(R, { method: _2, messageData: D2, copy: I, iconUrl: (M == null ? void 0 : M.iconUrl) && "string" == typeof M.iconUrl ? M.iconUrl : void 0, isLoading: S2, success: null !== w2, walletProxyIsLoading: c, errorMessage: d$1, isCancellable: M == null ? void 0 : M.isCancellable, onSign: async () => {
    E2(true), u$1("");
    try {
      let e = await L2();
      T2(e), E2(false), setTimeout((() => {
        k$1(e);
      }), g$1);
    } catch (e) {
      console.error(e), u$1("An error has occurred, please try again."), b(new S$1(new N(d$1, n.E32603_DEFAULT_INTERNAL_ERROR.eipCode))), E2(false);
    }
  }, onCancel: () => k$1(null), onClose: () => k$1(w2) });
} };
let D = gt.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, L = gt.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`, A = gt(a$1)`
  margin-top: 0;
`, U = gt(i)`
  margin-top: 0;
`;
export {
  _ as SignRequestScreen,
  R as SignRequestView,
  _ as default
};
