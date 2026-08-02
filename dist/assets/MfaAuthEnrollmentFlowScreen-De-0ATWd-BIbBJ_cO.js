import { dv as k, dq as g, dl as le, df as d, dk as u, eX as P, dG as S } from "./index-Cw7cGahV.js";
import { T, g as g$1, F as ForwardRef, m as m$1 } from "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import { F as ForwardRef$1 } from "./ShieldCheckIcon-FaB_b2GM.js";
import { o as oe, y as ye, l as le$1, i as ie } from "./EnrollTotp-Bqnei-2B-oQDAy6Ui.js";
import { o, p, w, l, d as d$1, m } from "./PinInput-YqT0dSuH-BPolJI_1.js";
import "./QrCode-mmar0Iu7-WAqIc_VT.js";
import "./FingerPrintIcon-7X0Tym-1.js";
import "./PhoneIcon-YqK7Yqjc.js";
import "./Chip-D2-wZOHJ-B2XlgAss.js";
import "./LoadingSkeleton-U6-3yFwI-BXCg8yiC.js";
import "./ErrorScreen-DkigBJc0-gTmv_8ut.js";
import "./reservoir-B7XIq5qj-DE3jLfCP.js";
import "./safe-url-D7SRPu33-BDTGvdDK.js";
import "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
import "./triangle-alert-a7hRzZKA.js";
import "./createLucideIcon-vpjfwHTJ.js";
import "./lock-CjS6tMf_.js";
import "./LinkPasskeyScreen-C2ClLwr7-Dwo01okY.js";
import "./TodoList-CgrU7uwu-BT8sysbM.js";
import "./x-B8CpVFCb.js";
import "./check-pJYqNiWi.js";
import "./circle-check-big-IM5tivlQ.js";
import "./fingerprint-pattern-BqeFrF0e.js";
import "./CopyToClipboard-DSTf_eKU-CHDMz19u.js";
import "./Layouts-BlFm53ED-sn3bL9j4.js";
import "./LabelXs-oqZNqbm_-BQGqCeZm.js";
import "./Subtitle-CV-2yKE4-DYO6m2P4.js";
import "./Title-BnzYV3Is-C0li3V44.js";
import "./shared-FM0rljBt-rCzEWQL2.js";
import "./dijkstra-DpzGW89u.js";
const M = { component: () => {
  let { user: M2, ready: b } = k(), { data: I, onUserCloseViaDialogOrKeybindRef: A } = g(), P$1 = le(), [S$1, x] = d(null), [R, E] = d(null), [T$1, F] = d(null), [L, B] = d(false), [U, W] = d(false), [q, D] = d(), O = async () => {
    q ? H(q) : M2 ? await N({ user: M2 }) : H(Error("Must be logged in to manage MFA")), setTimeout((() => {
      x(null), E(null);
    }), 500);
  };
  if (A.current = O, !(I == null ? void 0 : I.mfaEnroll)) throw Error("Missing modal data for MFA enrollment screen.");
  let { onFailure: H, onSuccess: N, onBack: Q, mfaMethods: V, verify: X, generateTotpSecret: $, enrollTotp: z, unenrollTotp: K, enrollPasskey: Y } = I.mfaEnroll, Z = M2 == null ? void 0 : M2.mfaMethods.includes("sms"), G = M2 == null ? void 0 : M2.mfaMethods.includes("totp"), J = M2 == null ? void 0 : M2.mfaMethods.includes("passkey"), _ = !!(M2 == null ? void 0 : M2.phone), ee = (M2 == null ? void 0 : M2.linkedAccounts.filter(((e) => "passkey" === e.type)).map(((e) => e.credentialId))) ?? [];
  function oe$1() {
    x(null), E(null), D(void 0);
  }
  async function te(e = ee) {
    try {
      D(void 0), W(true);
      let o2 = await Y(e);
      return await N({ user: o2 });
    } catch (e2) {
      D(e2);
    } finally {
      W(false), B(false);
    }
  }
  if (!b || !M2 || !P$1) return u(S, { children: [/* @__PURE__ */ u(T, { onClose: O, backFn: Q }, "header"), /* @__PURE__ */ u(o, { children: /* @__PURE__ */ u(oe, {}) }), /* @__PURE__ */ u(p, { children: /* @__PURE__ */ u(P, {}) }), /* @__PURE__ */ u(g$1, {})] });
  if ("sms" === S$1) return null;
  if ("totp" === S$1) return u(S, { children: [/* @__PURE__ */ u(T, { backFn: oe$1, onClose: O }, "header"), /* @__PURE__ */ u(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ u(ForwardRef, {}) }), /* @__PURE__ */ u(l, { children: "Remove authenticator app verification?" }), /* @__PURE__ */ u(d$1, { children: ["MFA adds an extra layer of security to your ", P$1 == null ? void 0 : P$1.name, " account. Make sure you have other methods to secure your account."] }), /* @__PURE__ */ u(m, { children: /* @__PURE__ */ u(m$1, { $warn: true, onClick: async function() {
    try {
      D(void 0), W(true);
      let e = await K();
      return await N({ user: e });
    } catch (e) {
      D(e);
    } finally {
      W(false), x(null);
    }
  }, loading: U, children: "Remove" }) }), /* @__PURE__ */ u(g$1, {})] });
  if ("passkey" === S$1) {
    let i = I.mfaEnroll.shouldUnlinkOnUnenrollMfa ?? true;
    return u(S, { children: [/* @__PURE__ */ u(T, { backFn: oe$1, onClose: O }, "header"), /* @__PURE__ */ u(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ u(ForwardRef, {}) }), /* @__PURE__ */ u(l, { children: "Are you sure you want to remove this passkey?" }), /* @__PURE__ */ u(d$1, { children: i ? "Removing your passkey will remove as both a verification method and a login method." : "Removing your passkey will remove as a verification method." }), /* @__PURE__ */ u(m, { children: /* @__PURE__ */ u(m$1, { $warn: true, onClick: async function() {
      try {
        D(void 0), W(true);
        let e = await Y([]);
        return await N({ user: e });
      } catch (e) {
        D(e);
      } finally {
        W(false), x(null);
      }
    }, loading: U, children: "Remove" }) }), /* @__PURE__ */ u(g$1, {})] });
  }
  return 0 !== V.length || Z || G || J ? "sms" === R ? null : "totp" === R && T$1 ? /* @__PURE__ */ u(ye, { onClose: O, onReset: oe$1, submitEnrollmentWithTotp: (e) => (async function(e2) {
    try {
      D(void 0), W(true);
      let o2 = await z(e2);
      return await N({ user: o2 });
    } catch (e3) {
      D(e3);
    } finally {
      W(false), x(null);
    }
  })(e.mfaCode), error: q, totpInfo: { ...T$1, appName: (P$1 == null ? void 0 : P$1.name) || "Privy" } }) : "passkey" === R ? /* @__PURE__ */ u(le$1, { onReset: oe$1, onClose: O, submitEnrollmentWithPasskey: te }) : /* @__PURE__ */ u(ie, { showIntro: true, userMfaMethods: M2.mfaMethods, appMfaMethods: P$1.mfa.methods, userHasAuthSms: _, backFn: Q, handleSelectMethod: async function(e) {
    D(void 0);
    try {
      await X();
    } catch (e2) {
      return void D(e2);
    }
    return "totp" === e ? (E(e), F(null), void $().then((({ totpSecret: e2, totpAuthUrl: o2 }) => {
      F({ authUrl: o2, secret: e2 });
    })).catch((() => {
      F(null), oe$1();
    }))) : "passkey" === e && 1 === ee.length ? await te() : void E(e);
  }, isTotpLoading: "totp" === R && !T$1, isPasskeyLoading: L, error: q, onClose: O, setRemovingMfaMethod: async function(e) {
    D(void 0);
    try {
      await X();
    } catch (e2) {
      return void D(e2);
    }
    x(e);
  } }) : /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(T, { onClose: O, backFn: Q }, "header"), /* @__PURE__ */ u(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ u(ForwardRef$1, {}) }), /* @__PURE__ */ u(l, { children: "Add more security" }), /* @__PURE__ */ u(d$1, { children: [P$1 == null ? void 0 : P$1.name, " does not have any verification methods enabled."] }), /* @__PURE__ */ u(m, { children: /* @__PURE__ */ u(m$1, { onClick: O, children: "Close" }) }), /* @__PURE__ */ u(g$1, {})] });
} };
export {
  M as MfaAuthEnrollmentFlowScreen,
  M as default
};
