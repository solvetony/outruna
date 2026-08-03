import { dq as g, dl as le, df as d, fq as ma, dv as k, dr as l, dh as y, dk as u$1, f9 as oi, fs as u$2 } from "./index-CgfjQyaX.js";
import { o as oe, u as ue } from "./SetWalletPasswordForm-CK1EXLLt-Dvnzy-GO.js";
import "./ExclamationTriangleIcon-BAkWm5uM.js";
import "./Layouts-BlFm53ED-Dx6cwyr0.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./shared-CCjguPOO-BLgtUr4z.js";
import "./Checkbox-BhNoOKjX-C3LXTr2v.js";
import "./CheckCircleIcon-Cuj84K4c.js";
import "./ScreenHeader-CHmc4-Lu-DLFsu6uf.js";
const u = { component: () => {
  let { navigate: u2, data: d$1, onUserCloseViaDialogOrKeybindRef: h } = g(), w = le(), [y$1, j] = d(""), [v, f] = d(false), [g$1, C] = d(), [x, I] = d(null), { create: b } = ma(), { authenticated: P, user: S } = k(), { closePrivyModal: k$1, isNewUserThisSession: A, initializeWalletProxy: U } = l(), { onSuccess: E, onFailure: M, callAuthOnSuccessOnClose: T, shouldCreateEth: O, shouldCreateSol: W } = d$1.createWallet, [D, L] = d(null), R = new oi((async () => {
    try {
      let e;
      if (O && W) e = await b({ recoveryMethod: "user-passcode", recoveryPassword: g$1, chainType: "ethereum", walletIndex: 0, latestUser: S }), e = await b({ chainType: "solana", walletIndex: 0, latestUser: e.user });
      else if (W) e = await b({ recoveryMethod: "user-passcode", recoveryPassword: g$1, chainType: "solana", walletIndex: 0, latestUser: S });
      else {
        if (!O) throw Error("Invalid args to create wallet");
        e = await b({ recoveryMethod: "user-passcode", recoveryPassword: g$1, chainType: "ethereum", walletIndex: 0, latestUser: S });
      }
      L(e), A ? u2("EmbeddedWalletCreatedScreen") : (E(e), k$1({ shouldCallAuthOnSuccess: T }));
    } catch (e) {
      j(e.message);
    }
  }));
  y((() => {
    x || U(3e4).then(((e) => I(e)));
  }), [x]), y((() => {
    if (!P || !S) return u2("LandingScreen"), void M(Error("User must be authenticated before creating a Privy wallet"));
  }), [P]), h.current = () => null;
  return u$1(ue, { config: { initiatedBy: "automatic" }, appName: (w == null ? void 0 : w.name) || "privy", loading: !x, buttonLoading: v, buttonHideAnimations: !D && v, isResettingPassword: false, error: y$1, password: g$1 || "", onClose: () => {
    D && "user-passcode" !== D.account.recoveryMethod ? (M(new u$2("User created a wallet but failed to set a password for it")), k$1({ shouldCallAuthOnSuccess: false })) : D ? (E(D), k$1({ shouldCallAuthOnSuccess: T })) : (M(new u$2("User wallet creation failed")), k$1({ shouldCallAuthOnSuccess: false }));
  }, onPasswordChange: C, onPasswordGenerate: () => C(oe()), onSubmit: async () => (f(true), R.execute().then((() => new Promise(((e) => setTimeout(e, 250))))).finally((() => f(false)))) });
} };
export {
  u as EmbeddedWalletPasswordCreateScreen,
  u as default
};
