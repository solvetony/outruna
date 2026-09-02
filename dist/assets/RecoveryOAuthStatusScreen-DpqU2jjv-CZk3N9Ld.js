import { dv as k, dq as g, dr as l, dw as u, fq as ma, dC as s, dy as i, gm as h, go as f, df as d, dh as y, f9 as oi, eJ as g$1, de as q, dk as u$1, dG as S$1, hy as Nr, hA as v, hB as k$1, hC as y$1, hD as M$1, hE as L, hF as o$2, hG as N } from "./index-R3UC2dO4.js";
import { T, m, u as u$2 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { o as o$1 } from "./ScreenHeader-CHmc4-Lu-BTpsk-7m.js";
import { d as d$1, e, o } from "./styles-BsotlekN-C23pcwCC.js";
async function S({ url: e2, popup: t, provider: r }) {
  return t.location = e2, new Promise(((e3, r2) => {
    function o2() {
      t == null ? void 0 : t.close(), window.removeEventListener("message", a);
    }
    function a(t2) {
      t2.data && ("PRIVY_OAUTH_RESPONSE" === t2.data.type && t2.data.stateCode && t2.data.authorizationCode && (e3(t2.data), o2()), "https://cdn.apple-cloudkit.com" === t2.origin && t2.data.ckSession && (e3({ type: "PRIVY_OAUTH_RESPONSE", ckWebAuthToken: t2.data.ckSession }), o2()), "PRIVY_OAUTH_ERROR" === t2.data.type && (r2(t2.data.error), o2()));
    }
    window.addEventListener("message", a);
  }));
}
async function I({ api: e2, provider: t, stateCode: r, codeVerifier: o2, authorizationCode: a }) {
  if (!a || !r) throw new s("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");
  if ("undefined" === a) throw new s("User denied confirmation during OAuth flow");
  try {
    return (await e2.post(N, { authorization_code: a, state_code: r, code_verifier: o2, provider: t })).access_token;
  } catch (e3) {
    let t2 = o$2(e3);
    if (t2.privyErrorCode) throw new s(t2.message || "Invalid code during OAuth flow.", void 0, t2.privyErrorCode);
    if ("User denied confirmation during OAuth flow" === t2.message) throw new s("Invalid code during oauth flow.", void 0, i.OAUTH_USER_DENIED);
    throw new s("Invalid code during OAuth flow.", void 0, i.UNKNOWN_AUTH_ERROR);
  }
}
async function M({ api: e2, provider: t }) {
  let r = v(), o2 = k$1(), a = await y$1(r);
  try {
    return "icloud" === t ? { url: (await e2.post(M$1, { client_type: "web" })).url } : { url: (await e2.post(L, { redirect_to: window.location.href, code_challenge: a, state_code: o2 })).url, codeVerifier: r, stateCode: o2, provider: t };
  } catch (e3) {
    throw o$2(e3);
  }
}
let U = { "google-drive": { name: "Google Drive", component: e }, icloud: { name: "iCloud", component: d$1 } };
const W = { component: () => {
  var _a;
  let { logout: w } = k(), { navigate: f$1, setModalData: _, data: A } = g(), { closePrivyModal: E, createAnalyticsEvent: g$2 } = l(), { execute: C } = (() => {
    let { client: e2, walletProxy: t, refreshSessionAndUser: r } = l(), { data: o2 } = g(), { user: a } = k(), i$1 = u(), { create: c } = ma();
    return { execute: async ({ provider: s$1, action: n, popup: l2, shouldCreateEth: d2, shouldCreateSol: p }) => {
      var _a2, _b;
      let m2, u2;
      if (!e2) throw new s("Missing client");
      function w2(t2) {
        if (!t2 && e2) throw e2.createAnalyticsEvent({ eventName: "recovery_oauth_error", payload: { error: "Unable to open recovery OAuth popup", provider: s$1 } }), new s("Recovery OAuth failed");
      }
      switch (s$1) {
        case "google-drive": {
          let t2, r2, { url: o3, codeVerifier: a2, stateCode: i$12 } = await M({ api: e2.api, provider: s$1 });
          w2(o3);
          try {
            let a3 = await S({ url: o3, popup: l2, provider: s$1 });
            if (t2 = a3.stateCode, r2 = a3.authorizationCode, t2 !== i$12) throw e2.createAnalyticsEvent({ eventName: "possible_phishing_attempt", payload: { provider: s$1, storedStateCode: i$12 ?? "", returnedStateCode: t2 ?? "" } }), new s("Unexpected auth flow. This may be a phishing attempt.", void 0, i.OAUTH_UNEXPECTED);
          } catch (t3) {
            throw e2.createAnalyticsEvent({ eventName: "recovery_oauth_error", payload: { error: t3.toString(), provider: s$1 } }), new s("Recovery OAuth failed");
          }
          [m2, u2] = await Promise.all([e2.getAccessToken(), I({ api: e2.api, provider: s$1, codeVerifier: a2, stateCode: t2, authorizationCode: r2 })]);
          break;
        }
        case "icloud": {
          let { url: t2 } = await M({ api: e2.api, provider: s$1 });
          w2(t2);
          let { ckWebAuthToken: r2 } = await S({ url: t2, popup: l2, provider: s$1 });
          u2 = r2, m2 = await e2.getAccessToken();
        }
      }
      if (!t) throw new s("Cannot connect to wallet proxy");
      if (!m2) throw new s("Unable to authorize user");
      switch (n) {
        case "recover": {
          let r2 = (_a2 = o2 == null ? void 0 : o2.recoverWallet) == null ? void 0 : _a2.entropyId, a2 = (_b = o2 == null ? void 0 : o2.recoverWallet) == null ? void 0 : _b.entropyIdVerifier;
          if (!r2 || !a2) throw new s("Recovery OAuth failed");
          e2.createAnalyticsEvent({ eventName: "embedded_wallet_recovery_started", payload: { walletAddress: r2, recoveryMethod: s$1 } }), await t.recover({ accessToken: m2, entropyId: r2, entropyIdVerifier: a2, recoveryAccessToken: u2 }), e2.createAnalyticsEvent({ eventName: "embedded_wallet_recovery_completed", payload: { walletAddress: r2, recoveryMethod: s$1 } });
          break;
        }
        case "create-wallet": {
          let t2;
          if (e2.createAnalyticsEvent({ eventName: "embedded_wallet_creation_started" }), d2 && p) t2 = await c({ recoveryMethod: s$1, recoveryAccessToken: u2, chainType: "ethereum", walletIndex: 0, latestUser: a }), t2 = await c({ chainType: "solana", walletIndex: 0, latestUser: t2.user });
          else if (p) t2 = await c({ recoveryMethod: s$1, recoveryAccessToken: u2, chainType: "solana", walletIndex: 0, latestUser: a });
          else {
            if (!d2) throw Error("Invalid args to create wallet");
            t2 = await c({ recoveryMethod: s$1, recoveryAccessToken: u2, chainType: "ethereum", walletIndex: 0, latestUser: a });
          }
          if (!t2) throw i$1("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to create wallet");
          e2.createAnalyticsEvent({ eventName: "embedded_wallet_creation_completed", payload: { walletAddress: t2.account.address } }), i$1("createWallet", "onSuccess", { wallet: t2.account });
          break;
        }
        case "set-recovery": {
          let o3 = h(a);
          if (!o3) throw i$1("setWalletRecovery", "onError", i.EMBEDDED_WALLET_NOT_FOUND), Error("Embedded wallet not found");
          e2.createAnalyticsEvent({ eventName: "embedded_wallet_set_recovery_started", payload: { walletAddress: o3.address, existingRecoveryMethod: o3.recoveryMethod, targetRecoveryMethod: s$1 } });
          let { entropyId: c2, entropyIdVerifier: n2 } = f(a);
          await t.setRecovery({ accessToken: m2, entropyId: c2, entropyIdVerifier: n2, recoveryMethod: s$1, recoveryAccessToken: u2 });
          let l3 = h(await r());
          if (!l3) throw i$1("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to set recovery on wallet");
          e2.createAnalyticsEvent({ eventName: "embedded_wallet_set_recovery_completed", payload: { walletAddress: o3.address, existingRecoveryMethod: o3.recoveryMethod, targetRecoveryMethod: s$1 } }), i$1("setWalletRecovery", "onSuccess", { method: s$1, wallet: l3 });
          break;
        }
        default:
          throw new s("Unsupported recovery action");
      }
    } };
  })(), [O, x] = d(false), { provider: W2, action: P, isInAccountCreateFlow: D, shouldCreateEth: V, shouldCreateSol: L2 } = (A == null ? void 0 : A.recoveryOAuthStatus) ?? {}, [z, H] = d(void 0), [$, B] = d("create-wallet" === P);
  if ("user-passcode" === W2) throw Error("RecoveryOAuthScreen should never be called with a wallet that specifies recoveryMethod: `user-passcode`");
  let F = U[W2].name, q$1 = U[W2].component, G = (_a = A == null ? void 0 : A.recoverWallet) == null ? void 0 : _a.onCompleteNavigateTo, K = new oi((async (e2 = "create-wallet") => (B(true), new Promise(((t, r) => {
    setTimeout((async () => {
      try {
        let r2 = window.open();
        await C({ provider: W2, action: e2, popup: r2, shouldCreateEth: V, shouldCreateSol: L2 }), x(true), t();
      } catch (t2) {
        H({ message: `${"recover" === e2 ? "Recovery" : "Back up"} with ${F} unsuccessful`, detail: "recover" === P ? `Please verify that you are selecting the ${F} account associated with your backup.` : "", retryable: true }), r();
      }
    }), 0);
  })))));
  y((() => {
    "recover" !== P && K.execute(D ? "create-wallet" : "set-recovery");
  }), []), y((() => {
    if (!O) return;
    let e2 = setTimeout((() => {
      D ? (_({ createWallet: { onSuccess: () => {
      }, onFailure: (e3) => {
        g$2({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, screen: "RecoveryOAuthScreen" } }), w();
      }, callAuthOnSuccessOnClose: true, shouldCreateEth: false, shouldCreateSol: false } }), f$1("EmbeddedWalletCreatedScreen")) : E({ shouldCallAuthOnSuccess: false });
    }), g$1);
    return () => clearTimeout(e2);
  }), [O]);
  let Y = q((async () => {
    await K.execute("recover"), G ? f$1(G) : x(true);
  }), []), X = "google-drive" === W2 ? "Google Drive" : "Apple iCloud", Q = O && `Successfully ${"recover" === P ? "recovered" : "backed up"} with ${X}.` || z && z.message || `${"recover" === P ? "Recovering" : "Backing up"} with ${X}...`, J = z ? z.detail : "";
  return u$1(S$1, { children: [/* @__PURE__ */ u$1(T, {}), $ ? /* @__PURE__ */ u$1(S$1, { children: /* @__PURE__ */ u$1(o, { children: [/* @__PURE__ */ u$1(o$1, { title: Q, icon: /* @__PURE__ */ u$1(q$1, { style: { width: "38px", height: "38px" } }), description: J }), z && (z == null ? void 0 : z.retryable) ? /* @__PURE__ */ u$1(m, { onClick: () => {
    Nr(), H(void 0), "create-wallet" === P ? K.execute("create-wallet") : Y();
  }, disabled: !O && !(z == null ? void 0 : z.retryable), children: "Try again" }) : null] }) }) : /* @__PURE__ */ u$1(o, { children: [/* @__PURE__ */ u$1(o$1, { title: "Confirm it's really you", icon: /* @__PURE__ */ u$1(q$1, { style: { height: 42, width: 48 } }), description: `To confirm your identity, please log in to ${X} where your account is backed up.` }), /* @__PURE__ */ u$1(m, { onClick: Y, children: ["Confirm with ", X] })] }), /* @__PURE__ */ u$1(u$2, {})] });
} };
export {
  W as RecoveryOAuthScreen,
  W as default
};
