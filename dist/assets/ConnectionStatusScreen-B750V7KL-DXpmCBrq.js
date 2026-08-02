import { e$ as F, df as d, dv as k, dq as g, dl as le, dr as l, de as q, dh as y, eV as $r, dA as P, eM as libExports, eO as n$1, f0 as L, f1 as jr, f2 as C, f3 as ci, eJ as g$1, dg as A, f4 as Bt, dk as u, e_ as Dt, f5 as p, dG as S, dy as i, f6 as S$1, f7 as R, eL as A$1, i as isHex, ci as getAddress, du as gt } from "./index-Cw7cGahV.js";
import { n as n$2 } from "./Link-DJ5gq9Di-BpIfoUYW.js";
import { n } from "./useI18n-DKN3yZtJ-ClknEg9z.js";
import { a } from "./shouldProceedtoEmbeddedWalletCreationFlow-D6q3HcYd-C70FdWNt.js";
import { n as n$3 } from "./ScreenLayout-b9cixoV5-CVpoOVIn.js";
import "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import "./Screen-My4NO62A-C3KHyWB3.js";
import "./index-Dq_xe9dz-BBvQqKgm.js";
const x = (e) => {
  var _a;
  let t = (_a = localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")) == null ? void 0 : _a.split(" ").filter(((e2) => isHex(e2, { strict: true }))).map(((e2) => getAddress(e2)));
  return !!(t == null ? void 0 : t.length) && !!(e == null ? void 0 : e.linkedAccounts.filter(((e2) => "wallet" == e2.type && t.includes(e2.address))).length);
};
const N = (e) => (e == null ? void 0 : e.privyErrorCode) === i.LINKED_TO_ANOTHER_USER ? F.ERROR_USER_EXISTS : e instanceof S$1 && !e.details.default ? e.details : e instanceof R ? F.ERROR_TIMED_OUT : (e == null ? void 0 : e.privyErrorCode) === i.CANNOT_LINK_MORE_OF_TYPE ? F.ERROR_USER_LIMIT_REACHED : F.ERROR_WALLET_CONNECTION, M = ({ walletLogo: o, title: i2, subtitle: r, signSuccess: a2, errorMessage: c, connectSuccess: l2, separateConnectAndSign: s, signing: m, walletConnectRedirectUri: d2, walletConnectFallbackUniversalUri: p2, hasTabbedAway: u$1, showCoinbaseWalletResetCta: f, numRetries: w, onBack: y2, onSign: v, onRetry: C2, onCoinbaseReset: b, onDifferentWallet: T }) => {
  let { t: _ } = n(), E = f ? { label: "Use a different wallet", onClick: b, disabled: a2 } : c === F.ERROR_USER_EXISTS && y2 ? { label: "Use a different wallet", onClick: T } : l2 && !a2 && s ? { label: m ? "Signing" : "Sign with your wallet", onClick: v, disabled: m } : !a2 && (c == null ? void 0 : c.retryable) && w < 2 ? { label: "Retry", onClick: C2, disabled: false } : a2 || c ? void 0 : { label: _("connectionStatus.connecting"), onClick: () => {
  }, disabled: true };
  return u(n$3, { title: i2, subtitle: r, icon: o, iconVariant: "loading", iconLoadingStatus: { success: a2, fail: !!c }, primaryCta: E, onBack: y2, watermark: true, children: !l2 && d2 && !u$1 && /* @__PURE__ */ u(B, { children: [_("connectionStatus.stillHere"), " ", /* @__PURE__ */ u(n$2, { href: d2, target: "_blank", variant: "underlined", size: "sm", children: _("connectionStatus.tryConnectingAgain") }), p2 && /* @__PURE__ */ u(S, { children: [" ", _("connectionStatus.or"), " ", /* @__PURE__ */ u(n$2, { href: p2, target: "_blank", variant: "underlined", size: "sm", children: _("connectionStatus.useDifferentLink") })] })] }) });
}, D = { component: () => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  let t, [n$22, l$1] = d(false), [g$2, C$1] = d(false), [b, T] = d(void 0), { authenticated: _, logout: U } = k(), { navigate: D2, navigateBack: B2, lastScreen: F$1, currentScreen: P$1, setModalData: q$1, data: H } = g(), X = le(), { t: z } = n(), { getAuthFlow: Y, walletConnectionStatus: K, closePrivyModal: Q, initLoginWithWallet: V, loginWithWallet: J, updateWallets: $, createAnalyticsEvent: G } = l(), { walletConnectors: Z } = k(), [ee, te] = d(0), { user: ne } = k(), [oe] = d((ne == null ? void 0 : ne.linkedAccounts.length) || 0), [ie, re] = d(""), [ae, ce] = d(""), [le$1, se] = d(false), { hasTabbedAway: me } = (function() {
    let [e, t2] = d(false), n2 = q((() => {
      document.hidden && t2(true);
    }), []);
    return y((() => (document.addEventListener("visibilitychange", n2), () => document.removeEventListener("visibilitychange", n2))), [n2]), { hasTabbedAway: e, reset: () => t2(false) };
  })(), { enabled: de, token: pe } = $r(), ue = P(((_a = K == null ? void 0 : K.connector) == null ? void 0 : _a.walletClientType) || "unknown"), ge = libExports.isMobile && "wallet_connect_v2" === ((_b = K == null ? void 0 : K.connector) == null ? void 0 : _b.connectorType) || libExports.isMobile && "coinbase_wallet" === ((_c = K == null ? void 0 : K.connector) == null ? void 0 : _c.connectorType) || libExports.isMobile && "base_account" === ((_d = K == null ? void 0 : K.connector) == null ? void 0 : _d.connectorType) || libExports.isMobile && "injected" === ((_e2 = K == null ? void 0 : K.connector) == null ? void 0 : _e2.connectorType) && "phantom" === ((_f = K == null ? void 0 : K.connector) == null ? void 0 : _f.walletClientType) || libExports.isMobile && "solana_adapter" === ((_g = K == null ? void 0 : K.connector) == null ? void 0 : _g.connectorType) && "mobile_wallet_adapter" === K.connector.walletClientType, fe = "connected" === (K == null ? void 0 : K.status), we = "switching_to_supported_chain" === (K == null ? void 0 : K.status);
  y((() => {
    var _a2, _b2, _c2, _d2, _e3;
    let e = Y(), t2 = e instanceof ci || e instanceof jr ? e : void 0;
    fe && "solana" === ((_a2 = K.connector) == null ? void 0 : _a2.chainType) && n$1(L) && void 0 === ((_b2 = H == null ? void 0 : H.login) == null ? void 0 : _b2.isSigningInWithLedgerSolana) ? D2("ConnectLedgerScreen", false) : (fe && !t2 && (!de || pe || _ ? V(K.connectedWallet, pe, (_c2 = H == null ? void 0 : H.login) == null ? void 0 : _c2.disableSignup, ((_d2 = H == null ? void 0 : H.login) == null ? void 0 : _d2.isSigningInWithLedgerSolana) ? "offchain-message" : "plain").then((() => {
      se(true);
    })) : (q$1({ captchaModalData: { callback: (e2) => {
      var _a3, _b3;
      return V(K.connectedWallet, e2, (_a3 = H == null ? void 0 : H.login) == null ? void 0 : _a3.disableSignup, ((_b3 = H == null ? void 0 : H.login) == null ? void 0 : _b3.isSigningInWithLedgerSolana) ? "offchain-message" : "plain").then((() => {
        se(true);
      }));
    }, userIntentRequired: false, onSuccessNavigateTo: "ConnectionStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), D2("CaptchaScreen", false))), t2 instanceof jr && ((_e3 = H == null ? void 0 : H.login) == null ? void 0 : _e3.isSigningInWithLedgerSolana) && (t2.messageType = "offchain-message"), t2 && ge && fe && !t2.preparedMessage ? t2.buildMessage() : t2 && !ge && fe && (g$2 || (async () => {
      var _a3, _b3;
      C$1(true), T(void 0);
      try {
        "wallet_connect_v2" === ((_a3 = K == null ? void 0 : K.connector) == null ? void 0 : _a3.connectorType) && "metamask" === ((_b3 = K == null ? void 0 : K.connector) == null ? void 0 : _b3.walletClientType) && await C(2500), await Se();
      } catch (e2) {
        console.warn("Auto-prompted signature failed", e2);
      } finally {
        C$1(false);
      }
    })()));
  }), [ee, fe, le$1]), y((() => {
    if (ne && n$22) {
      let e = g$1 - 500;
      if ((X == null ? void 0 : X.legal.requireUsersAcceptTerms) && !ne.hasAcceptedTerms) {
        let t3 = setTimeout((() => {
          D2("AffirmativeConsentScreen");
        }), e);
        return () => clearTimeout(t3);
      }
      if (a(ne, X.embeddedWallets)) {
        let t3 = setTimeout((() => {
          q$1({ createWallet: { onSuccess: () => {
          }, onFailure: (e2) => {
            console.error(e2), G({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e2, screen: "ConnectionStatusScreen" } }), U();
          }, callAuthOnSuccessOnClose: true } }), D2("EmbeddedWalletOnAccountCreateScreen");
        }), e);
        return () => clearTimeout(t3);
      }
      $();
      let t2 = setTimeout((() => Q({ shouldCallAuthOnSuccess: true, isSuccess: true })), g$1);
      return () => clearTimeout(t2);
    }
  }), [ne, n$22]);
  let he = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2;
    if ((e == null ? void 0 : e.privyErrorCode) !== i.ALLOWLIST_REJECTED) {
      if ((e == null ? void 0 : e.privyErrorCode) === i.USER_LIMIT_REACHED) return console.error(new A$1(e).toString()), void D2("UserLimitReachedScreen");
      if ((e == null ? void 0 : e.privyErrorCode) !== i.USER_DOES_NOT_EXIST) return (e == null ? void 0 : e.privyErrorCode) === i.ACCOUNT_TRANSFER_REQUIRED && ((_b2 = (_a2 = e.data) == null ? void 0 : _a2.data) == null ? void 0 : _b2.nonce) ? (q$1({ accountTransfer: { nonce: (_d2 = (_c2 = e.data) == null ? void 0 : _c2.data) == null ? void 0 : _d2.nonce, account: (_e3 = Y()) == null ? void 0 : _e3.meta.address, displayName: (_h2 = (_g2 = (_f2 = e.data) == null ? void 0 : _f2.data) == null ? void 0 : _g2.account) == null ? void 0 : _h2.displayName, externalWalletMetadata: { walletClientType: (_i2 = Y()) == null ? void 0 : _i2.meta.walletClientType, chainId: (_j2 = Y()) == null ? void 0 : _j2.meta.chainId, connectorType: (_k2 = Y()) == null ? void 0 : _k2.meta.connectorType }, linkMethod: Y() instanceof ci ? "siwe" : "siws", embeddedWalletAddress: (_n2 = (_m2 = (_l2 = e.data) == null ? void 0 : _l2.data) == null ? void 0 : _m2.otherUser) == null ? void 0 : _n2.embeddedWalletAddress } }), void D2("LinkConflictScreen")) : void T(N(e));
      D2("AccountNotFoundScreen");
    } else D2("AllowlistRejectionScreen");
  };
  async function Se() {
    try {
      await J(), l$1(true);
    } catch (e) {
      he(e);
    } finally {
      C$1(false);
    }
  }
  y((() => {
    (K == null ? void 0 : K.connectError) && he(K == null ? void 0 : K.connectError);
  }), [K]), ((e, t2) => {
    let n2 = A((() => {
    }));
    y((() => {
      n2.current = e;
    })), y((() => {
      if (null !== t2) {
        let e2 = setInterval((() => n2.current()), t2 || 0);
        return () => clearInterval(e2);
      }
    }), [t2]);
  })((() => {
    let e = "wallet_connect_v2" === ye && (K == null ? void 0 : K.connector) instanceof Bt ? K.connector.redirectUri : void 0;
    e && re(e);
    let t2 = "wallet_connect_v2" === ye && (K == null ? void 0 : K.connector) instanceof Bt ? K.connector.fallbackUniversalRedirectUri : void 0;
    t2 && ce(t2);
  }), (K == null ? void 0 : K.connector) instanceof Bt && !ie ? 500 : null);
  let ye = ((_h = K == null ? void 0 : K.connector) == null ? void 0 : _h.connectorType) || "injected", ve = ((_i = K == null ? void 0 : K.connector) == null ? void 0 : _i.walletClientType) || "unknown", Ce = ((_j = ue == null ? void 0 : ue.metadata) == null ? void 0 : _j.shortName) || (ue == null ? void 0 : ue.name) || ((_k = K == null ? void 0 : K.connector) == null ? void 0 : _k.walletBranding.name) || "Browser Extension", be = ((_l = ue == null ? void 0 : ue.image_url) == null ? void 0 : _l.md) || ((_m = K == null ? void 0 : K.connector) == null ? void 0 : _m.walletBranding.icon) || ((t2) => /* @__PURE__ */ u(Dt, { ...t2 })), Te = "Browser Extension" === Ce ? Ce.toLowerCase() : Ce;
  t = n$22 ? z("connectionStatus.successfullyConnected", { walletName: Te }) : b ? z("connectionStatus.errorTitle", { errorMessage: b.message }) : we ? "Switching networks" : fe ? g$2 && ge ? "Signing" : "Sign to verify" : `Waiting for ${Te}`;
  let _e = z("connectionStatus.checkOtherWindows");
  n$22 ? _e = oe === ((ne == null ? void 0 : ne.linkedAccounts.length) || 0) ? "Wallet was already linked." : "You're good to go!" : ee >= 2 && b ? _e = "Unable to connect wallet" : b ? _e = b.detail : we ? _e = "Switch your wallet to the requested network." : fe && ge ? _e = "Sign the message in your wallet to verify it belongs to you." : "metamask" === ve && libExports.isMobile ? _e = "Click continue to open and connect MetaMask." : "metamask" === ve ? _e = "For the best experience, connect only one wallet at a time." : "wallet_connect" === ye ? _e = "Open your mobile wallet app to continue" : "coinbase_wallet" === ye ? p() || (_e = x(ne) ? "Continue with the Coinbase app. Not the right wallet? Reset your connection below." : "Confirm in the Coinbase app/popup to continue.") : ((_n = H == null ? void 0 : H.login) == null ? void 0 : _n.isSigningInWithLedgerSolana) && (_e = "Ledger requires a transaction to verify your identity. You'll sign a transaction that performs no onchain action.");
  let Ee = (_o = Z == null ? void 0 : Z.walletConnectors) == null ? void 0 : _o.find(((e) => "coinbase_wallet" === e.walletClientType)), Re = "coinbase_wallet" === ve && (x(ne) || b === F.ERROR_USER_EXISTS);
  return u(M, { walletLogo: be, title: t, subtitle: _e, signSuccess: n$22, errorMessage: b, connectSuccess: fe, separateConnectAndSign: ge, signing: g$2, walletConnectRedirectUri: ie, walletConnectFallbackUniversalUri: ae, hasTabbedAway: me, showCoinbaseWalletResetCta: Re, numRetries: ee, onBack: F$1 && P$1 !== F$1 ? B2 : void 0, onSign: () => {
    C$1(true), Se();
  }, onRetry: () => {
    te(ee + 1), T(void 0), fe ? (C$1(true), Se()) : K == null ? void 0 : K.connectRetry();
  }, onCoinbaseReset: () => {
    Ee && (Ee == null ? void 0 : Ee.disconnect());
  }, onDifferentWallet: B2 });
} };
let B = gt.p`
  text-align: center;
  color: var(--privy-color-foreground-2);
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`;
export {
  D as ConnectionStatusScreen,
  M as ConnectionStatusView,
  D as default,
  N as getErrorDetails
};
