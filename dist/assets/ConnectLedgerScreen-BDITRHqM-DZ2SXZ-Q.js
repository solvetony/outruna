import { dq as g, dk as u, du as gt } from "./index-CgfjQyaX.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
const r = (e) => /* @__PURE__ */ u("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.625 12.48 397.647 399.546", width: "2500", height: "674", preserveAspectRatio: "none", ...e, children: /* @__PURE__ */ u("g", { children: /* @__PURE__ */ u("path", { fill: "#333745", d: "M 333.9 12.8 L 150.9 12.8 L 150.9 258.4 L 396.5 258.4 L 396.5 76.7 C 396.6 42.2 368.4 12.8 333.9 12.8 Z M 94.7 12.8 L 64 12.8 C 29.5 12.8 0 40.9 0 76.8 L 0 107.5 L 94.7 107.5 L 94.7 12.8 Z M 0 165 L 94.7 165 L 94.7 259.7 L 0 259.7 L 0 165 Z M 301.9 410.6 L 332.6 410.6 C 367.1 410.6 396.6 382.5 396.6 346.6 L 396.6 316 L 301.9 316 L 301.9 410.6 Z M 150.9 316 L 245.6 316 L 245.6 410.7 L 150.9 410.7 L 150.9 316 Z M 0 316 L 0 346.7 C 0 381.2 28.1 410.7 64 410.7 L 94.7 410.7 L 94.7 316 L 0 316 Z" }) }) }), n = ({ onContinueWithLedger: e, onContinueWithoutLedger: i, title: n2 = "Using a hardware wallet?", subtitle: m2 = "If you have a Ledger connected,\ncontinue to sign with Ledger" }) => /* @__PURE__ */ u(n$1, { title: n2, subtitle: /* @__PURE__ */ u(c, { children: m2 }), primaryCta: { label: "Continue with Ledger", onClick: e }, secondaryCta: { label: "Continue without Ledger", onClick: i }, watermark: true, children: /* @__PURE__ */ u(a, { children: /* @__PURE__ */ u(r, { style: { width: "48px", height: "48px" } }) }) });
function m() {
  let { data: e, setModalData: o, navigate: r2 } = g();
  return u(n, { onContinueWithLedger: function() {
    o({ ...e, login: { ...e == null ? void 0 : e.login, isSigningInWithLedgerSolana: true } }), r2("ConnectionStatusScreen");
  }, onContinueWithoutLedger: function() {
    o({ ...e, login: { ...e == null ? void 0 : e.login, isSigningInWithLedgerSolana: false } }), r2("ConnectionStatusScreen");
  } });
}
const s = { component: m };
let a = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--screen-space);
`, c = gt.span`
  white-space: pre-wrap;
`;
export {
  s as ConnectLedgerScreen,
  m as ConnectLedgerScreenComponent,
  n as ConnectLedgerScreenView,
  s as default
};
