import { dq as g, dl as le, df as d, dv as k, dr as l, fm as d$1, fn as fa, fo as La, fp as pa, fq as ma, dh as y, fr as Qi, f9 as oi, dk as u, fs as u$1 } from "./index-lNx1hHWy.js";
import { n } from "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import { C as CircleX } from "./circle-x-BHMHXhSK.js";
import "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
import "./createLucideIcon-BMDFWGQC.js";
async function t(t2, e) {
  let r = `${t2}-auto-${"ethereum" === e ? "eth" : "sol"}`, n2 = new TextEncoder().encode(r);
  return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", n2))).map(((t3) => t3.toString(16).padStart(2, "0"))).join("");
}
const j = ({ errorMessage: r, onClose: o }) => /* @__PURE__ */ u(n, r ? { title: "Something went wrong", subtitle: r, icon: CircleX, iconVariant: "error", primaryCta: { label: "Close", onClick: o }, watermark: true } : { title: "Creating your wallet", subtitle: "Please wait...", iconVariant: "loading", watermark: false }), f = { component: () => {
  var _a;
  let { setModalData: t$1, navigate: v, data: f2, onUserCloseViaDialogOrKeybindRef: g$1 } = g(), C = le(), [b, x] = d(""), { embeddedWallets: S } = le(), { authenticated: W, user: k$1 } = k(), { closePrivyModal: A, walletProxy: O, client: P } = l(), { onSuccess: I, onFailure: M, callAuthOnSuccessOnClose: R, shouldCreateEth: U, shouldCreateSol: E } = f2.createWallet, T = d$1(), K = k$1 ? (_a = T(fa)) == null ? void 0 : _a.shouldCreateWallet({ user: k$1 }) : void 0, L = !!k$1 && La(k$1, C.embeddedWallets.ethereum.createOnLogin, K), V = !!k$1 && pa(k$1, C.embeddedWallets.solana.createOnLogin, K), q = "legacy-embedded-wallets-only" === C.embeddedWallets.mode && true === (C == null ? void 0 : C.embeddedWallets.requireUserOwnedRecoveryOnCreate), [F, D] = d(null), { create: z } = ma(), H = U ?? L, Q = E ?? V, X = new oi((async () => {
    let e = await P.getAccessToken();
    if (k$1 && e && O) try {
      let e2, t$12 = await t(k$1.id, "ethereum"), r = await t(k$1.id, "solana");
      if (H && Q) e2 = await z({ chainType: "ethereum", walletIndex: 0, latestUser: k$1, idempotencyKey: t$12 }), e2 = await z({ chainType: "solana", walletIndex: 0, latestUser: e2.user, idempotencyKey: r });
      else if (Q) e2 = await z({ chainType: "solana", walletIndex: 0, latestUser: k$1, idempotencyKey: r });
      else {
        if (!H) return void A({ shouldCallAuthOnSuccess: R });
        e2 = await z({ chainType: "ethereum", walletIndex: 0, latestUser: k$1, idempotencyKey: t$12 });
      }
      D(e2), v("EmbeddedWalletCreatedScreen");
    } catch (e2) {
      x(e2.message);
    }
  }));
  return y((() => W && k$1 ? q ? (t$1({ ...f2, createWallet: { ...f2.createWallet, shouldCreateEth: H, shouldCreateSol: Q }, recoverySelection: { ...f2 == null ? void 0 : f2.recoverySelection, isInAccountCreateFlow: true, shouldCreateEth: H, shouldCreateSol: Q } }), v(Qi({ walletAction: "create", showAutomaticRecovery: false, availableRecoveryMethods: S.userOwnedRecoveryOptions, legacySetWalletPasswordFlow: false, isResettingPassword: false }))) : void X.execute() : (v("LandingScreen"), void M(Error("User must be authenticated before creating a Privy wallet")))), [q, W]), g$1.current = () => null, u(j, { errorMessage: b || void 0, onClose: () => {
    F ? (I(F), A({ shouldCallAuthOnSuccess: R })) : (M(new u$1("User wallet creation failed")), A({ shouldCallAuthOnSuccess: false }));
  } });
} };
export {
  f as EmbeddedWalletOnAccountCreateScreen,
  j as EmbeddedWalletOnAccountCreateView,
  f as default
};
