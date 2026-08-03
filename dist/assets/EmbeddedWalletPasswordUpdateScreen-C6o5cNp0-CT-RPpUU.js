import { df as d, dv as k, dr as l, dq as g, dl as le, gm as h, dh as y, gn as c, dk as u$1, go as f, fs as u$2 } from "./index-CgfjQyaX.js";
import { o as oe, u as ue } from "./SetWalletPasswordForm-CK1EXLLt-Dvnzy-GO.js";
import "./ExclamationTriangleIcon-BAkWm5uM.js";
import "./Layouts-BlFm53ED-Dx6cwyr0.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./shared-CCjguPOO-BLgtUr4z.js";
import "./Checkbox-BhNoOKjX-C3LXTr2v.js";
import "./CheckCircleIcon-Cuj84K4c.js";
import "./ScreenHeader-CHmc4-Lu-DLFsu6uf.js";
const u = { component: () => {
  let [u2, y$1] = d(null), [w, h$1] = d(false), [v, g$1] = d(null), [f$1, j] = d(""), { authenticated: _, user: A } = k(), { client: I, walletProxy: M, refreshSessionAndUser: x, closePrivyModal: C, createAnalyticsEvent: R } = l(), { navigate: b, data: P, onUserCloseViaDialogOrKeybindRef: S } = g(), E = le(), { onSuccess: k$1, onFailure: N } = P.setWalletPassword, D = h(A), O = "user-passcode" === (u2 == null ? void 0 : u2.recoveryMethod), L = "user-passcode" === (D == null ? void 0 : D.recoveryMethod);
  y((() => {
    _ || (b("LandingScreen"), N(new c("User must be authenticated before setting a password on a Privy wallet")));
  }), [_]);
  let T = () => v ? (N(v), void C({ shouldCallAuthOnSuccess: false })) : O ? (k$1(u2), void C({ shouldCallAuthOnSuccess: false })) : (N(new u$2("Exited before password was added to wallet")), void C({ shouldCallAuthOnSuccess: false }));
  S.current = T;
  return u$1(ue, { appName: (E == null ? void 0 : E.name) || "privy", config: { initiatedBy: "user", onCancel: T }, error: v ? "An error has occurred, please try again." : void 0, buttonLoading: w, buttonHideAnimations: false, password: f$1, isResettingPassword: L, onPasswordGenerate: () => j(oe()), onPasswordChange: j, onSubmit: async () => {
    O ? (k$1(u2), C({ shouldCallAuthOnSuccess: false })) : (h$1(true), g$1(null), await (async () => {
      let e = await I.getAccessToken();
      if (e && A && (D == null ? void 0 : D.address) && f$1 && M) try {
        R({ eventName: "embedded_wallet_set_recovery_started", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: L } });
        let { entropyId: o, entropyIdVerifier: r } = f(A);
        if (!(await M.setRecovery({ accessToken: e, entropyId: o, entropyIdVerifier: r, recoveryPassword: f$1, recoveryMethod: "user-passcode" })).entropyId) return g$1(new u$2("Error setting password on privy wallet")), void R({ eventName: "embedded_wallet_set_recovery_failed", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: L, reason: "error setting password" } });
        let t = await x(), i = h(t);
        if (!i) return g$1(new u$2("Error setting password on privy wallet")), void R({ eventName: "embedded_wallet_set_recovery_failed", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: L, reason: "wallet disconnected" } });
        y$1(i), R({ eventName: "embedded_wallet_set_recovery_completed", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: L } });
      } catch (e2) {
        console.warn(e2), g$1(e2 instanceof Error ? e2 : Error("Error setting password on privy wallet")), R({ eventName: "embedded_wallet_set_password_failed", payload: { walletAddress: D.address, reason: e2 } });
      }
    })(), h$1(false));
  }, onClose: T });
} };
export {
  u as EmbeddedWalletPasswordUpdateScreen,
  u as default
};
