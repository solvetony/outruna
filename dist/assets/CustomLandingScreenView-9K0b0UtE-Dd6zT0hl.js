import { dd as D, dm as k, dr as l, dq as g, dl as le, g7 as H, di as T, g8 as sa, df as d, dh as y, fY as z, g9 as w, dk as u, ga as z$1, gb as $, gc as C, dG as S, fL as I, du as gt, fW as I$1, gd as k$1, ge as j, eV as $r, gf as r, gg as M, gh as W, dU as gn, dg as A, gi as O, dv as k$2, fH as _, gj as B$1 } from "./index-R3UC2dO4.js";
import { T as T$1, h, u as u$1, F as ForwardRef$2 } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { H as H$1, D as D$1, Y } from "./ConnectWalletView-CRfPxova-EfAzxOZ9.js";
import { j as j$1 } from "./ConnectEmailForm-B4W3bSzM-BFbW3ZOy.js";
import { n as n$3 } from "./Chip-D2-wZOHJ-CEw4ZuYL.js";
import { l as l$3 } from "./farcaster-DPlSjvF5-3-Zkol4D.js";
import { F as ForwardRef$1 } from "./FingerPrintIcon-d0WpYljt.js";
import { n as n$1 } from "./Link-DJ5gq9Di-DfTbh8Hp.js";
import { w as w$1 } from "./ConnectPhoneForm-CbYkcsf6-uDxZay3L.js";
import { B, C as C$1, o, d as d$1, h as h$1, s, n as n$2, r as r$1, l as l$2, e as e$1, i } from "./twitch-5IOe4sIQ-CunD484O.js";
import { c } from "./telegram-B-JqnkqZ-CASEcuuY.js";
import { l as l$1 } from "./WalletOverflowButton-DE9SJ043-C6L21gv2.js";
import { n } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import { M as Mail } from "./mail-DpHMku5e.js";
import { S as Smartphone } from "./smartphone-BymtDnl2.js";
import { c as createLucideIcon } from "./createLucideIcon-COMOll4V.js";
const e = (e2, c2 = true) => e2.reduce(((e3, o2) => ({ ...e3, [o2]: c2 })), {});
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
];
const CircleUser = createLucideIcon("circle-user", __iconNode);
function UserCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ k("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /* @__PURE__ */ D(UserCircleIcon);
const ce = () => {
  var _a;
  let t = le(), i2 = (_a = t == null ? void 0 : t.appearance) == null ? void 0 : _a.logo, a = `${t == null ? void 0 : t.name} logo`, r2 = { maxHeight: "90px", maxWidth: "180px" };
  return i2 ? "string" == typeof i2 ? /* @__PURE__ */ u("img", { src: i2, alt: a, style: r2 }) : "svg" === i2.type || "img" === i2.type ? /* @__PURE__ */ gn.cloneElement(i2, { alt: a, style: r2 }) : (console.warn("`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered."), null) : null;
}, de = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  flex-grow: 1;
  justify-content: center;
`, pe = ({ name: t, logoUrl: i2, size: a = "38px" }) => "string" == typeof i2 ? /* @__PURE__ */ u("img", { src: i2, alt: `${t ?? "Provider app"} logo`, style: { width: a, height: a, maxHeight: "90px", maxWidth: "180px", borderRadius: "8px" } }) : /* @__PURE__ */ u("span", {}), ue = ({ appId: a }) => {
  let [l$12, o2] = d(void 0), { startCrossAppAuthFlow: s2 } = B$1(), { authenticated: c2 } = k$2(), { data: d$12 } = g(), { client: p } = l();
  return y((() => {
    (async () => {
      p && o2(await p.getCrossAppProviderDetails(a));
    })();
  }), [p]), /* @__PURE__ */ u(j, { onClick: () => {
    var _a;
    return s2({ appId: a, action: c2 ? "link" : "login", disableSignup: (_a = d$12 == null ? void 0 : d$12.login) == null ? void 0 : _a.disableSignup });
  }, disabled: !l$12, children: l$12 ? /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(I$1, { $fullSize: true, children: /* @__PURE__ */ u(pe, { name: l$12.name, logoUrl: l$12.icon_url || void 0, size: "32px" }) }), l$12.name] }) : /* @__PURE__ */ u(_, {}) });
}, he = ({ isEditable: a, setIsEditable: l2, defaultValue: r2 }) => {
  let n2 = A(null);
  return u(S, { children: [/* @__PURE__ */ u(O, { $if: !a, children: /* @__PURE__ */ u(j$1, { ref: n2, defaultValue: r2 }) }), /* @__PURE__ */ u(O, { $if: a, children: /* @__PURE__ */ u(j, { onClick: () => {
    l2(), setTimeout((() => {
      var _a;
      (_a = n2.current) == null ? void 0 : _a.focus();
    }), 0);
  }, children: [/* @__PURE__ */ u(I$1, { children: /* @__PURE__ */ u(Mail, {}) }), "Continue with Email"] }) })] });
}, me = () => {
  let [i2, a] = d(false), { currentScreen: l$12, navigate: n2, setModalData: o2, data: s2 } = g(), { enabled: c2, token: d$12 } = $r(), { initLoginWithFarcaster: p } = l(), { accountType: u$12 } = H();
  return u(j, { onClick: async () => {
    var _a;
    a(true);
    try {
      c2 && !d$12 ? (o2({ captchaModalData: { callback: (e2) => {
        var _a2;
        return p(e2, (_a2 = s2 == null ? void 0 : s2.login) == null ? void 0 : _a2.disableSignup);
      }, userIntentRequired: true, onSuccessNavigateTo: "FarcasterConnectStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), n2("CaptchaScreen")) : (await p(d$12, (_a = s2 == null ? void 0 : s2.login) == null ? void 0 : _a.disableSignup), n2("FarcasterConnectStatusScreen"));
    } catch (e2) {
      o2({ errorModalData: { error: e2, previousScreen: l$12 || "LandingScreen" } }), n2("ErrorScreen");
    } finally {
      a(false);
    }
  }, disabled: false, children: [/* @__PURE__ */ u(l$3, { width: 32, height: 32 }), " Farcaster", i2 && /* @__PURE__ */ u(_, {}), "farcaster" === u$12 && /* @__PURE__ */ u(ge, { color: "gray", children: "Recent" })] });
};
let ge = gt(n$3)`
  margin-left: auto;
`;
const fe = ({ ...i2 }) => /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", viewBox: "0 0 25 25", fill: "none", ...i2, children: [/* @__PURE__ */ u("g", { clipPath: "url(#clip0_2856_1743)", children: [/* @__PURE__ */ u("path", { d: "M22.1673 8.24075V16.3642C22.1673 17.3256 21.3421 18.105 20.3241 18.105H17.0028M22.1673 8.24075C22.1673 7.27936 21.3421 6.5 20.3241 6.5H11.5302M22.1673 8.24075V8.42852C22.1673 9.03302 21.8352 9.59423 21.2901 9.91105L15.1463 13.4818C14.5539 13.8261 13.8067 13.8261 13.2143 13.4818L10.1621 11.5401", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ u("path", { d: "M3.12913 6.64816C0.508085 12.9507 3.49251 20.1847 9.79504 22.8057L11.5068 23.5176C12.4522 23.9108 13.7783 23.2222 14.1714 22.2768L14.6054 21.2333C14.7687 20.8406 14.6438 20.3871 14.3024 20.1334L11.2872 17.8927C10.9878 17.6702 10.5843 17.6488 10.2632 17.8384L9.11575 18.5156C8.78274 18.7121 8.3597 18.6844 8.07552 18.4221C5.94293 16.4542 4.77629 13.6264 4.90096 10.7273C4.91757 10.3409 5.19796 10.023 5.57269 9.92753L6.86381 9.59869C7.22522 9.50664 7.49627 9.20696 7.55169 8.83815L8.10986 5.12321C8.17306 4.70259 7.94188 4.29293 7.54915 4.1296L6.50564 3.69564C5.56026 3.30248 4.23416 3.99103 3.84101 4.9364L3.12913 6.64816Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }), /* @__PURE__ */ u("defs", { children: /* @__PURE__ */ u("clipPath", { id: "clip0_2856_1743", children: /* @__PURE__ */ u("rect", { x: "0.5", y: "0.5", width: "24", height: "24", rx: "6", fill: "white" }) }) })] }), ye = ({ chainType: i2, withPadding: a }) => {
  let l2 = "";
  return l2 = "ethereum-only" === i2 || "ethereum-and-solana" === i2 ? "Rainbow, Phantom, or Coinbase Wallet" : "Phantom or Solflare", /* @__PURE__ */ u(W, { $withPadding: a, children: /* @__PURE__ */ u(M, { children: [/* @__PURE__ */ u(ForwardRef$2, { style: { color: "var(--privy-color-warn)", height: 48, width: 48 } }), /* @__PURE__ */ u("h3", { children: "No wallets available" }), /* @__PURE__ */ u("p", { children: ["Please download an external wallet provider, like ", l2, "."] })] }) }, "empty-wallet-state");
}, we = () => {
  let { enabled: i2, token: a } = $r(), { navigate: l$12, setModalData: r2, data: n2 } = g(), o2 = le(), { initLoginWithPasskey: c2 } = l(), d2 = () => {
    o2.loginConfig.passkeysForSignupEnabled ? l$12("PasskeySelectSignupOrLogin") : (async () => {
      i2 && !a ? (r2({ passkeyAuthModalData: { passkeySignupFlow: false }, captchaModalData: { callback: (e2) => c2({ captchaToken: e2, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "PasskeyStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), l$12("CaptchaScreen")) : (await c2({ withPrivyUi: true, captchaToken: a }), r2({ passkeyAuthModalData: { passkeySignupFlow: false } }), l$12("PasskeyStatusScreen"));
    })();
  };
  return 0 === T((() => {
    var _a;
    let e2 = (_a = n2 == null ? void 0 : n2.login) == null ? void 0 : _a.loginMethods;
    return e2 ? e2.filter(((e3) => "passkey" !== e3)).length : Object.entries(o2.loginMethods).filter((([e3, t]) => t)).filter((([e3]) => "passkey" !== e3)).length;
  }), [o2.loginMethods, n2 == null ? void 0 : n2.login]) ? /* @__PURE__ */ u(j, { onClick: d2, children: [/* @__PURE__ */ u(ForwardRef$1, {}), " Continue with passkey"] }) : /* @__PURE__ */ u(n$1, { as: "button", onClick: d2, size: "sm", variant: "navigation", style: { width: "100%", justifyContent: "center" }, children: "I have a passkey" });
}, ve = ({ isEditable: a, setIsEditable: l$12, defaultValue: r2 }) => {
  let n2 = A(null), { authenticated: s2 } = k$2(), { navigate: c2, setModalData: d2, currentScreen: p, data: u$12 } = g(), { initLoginWithSms: m } = l(), { enabled: g$1, token: v } = $r(), { whatsAppEnabled: C2 } = le();
  return u(S, { children: [/* @__PURE__ */ u(O, { $if: !a, children: /* @__PURE__ */ u(w$1, { ref: n2, onSubmit: async function({ qualifiedPhoneNumber: e2 }) {
    var _a;
    if (!g$1 || v || s2) try {
      await m({ phoneNumber: e2, captchaToken: v, withPrivyUi: true, disableSignup: (_a = u$12 == null ? void 0 : u$12.login) == null ? void 0 : _a.disableSignup }), c2("AwaitingPasswordlessCodeScreen");
    } catch (e3) {
      d2({ errorModalData: { error: e3, previousScreen: p || "LandingScreen" } }), c2("ErrorScreen");
    }
    else d2({ captchaModalData: { callback: (t) => {
      var _a2;
      return m({ phoneNumber: e2, captchaToken: t, withPrivyUi: true, disableSignup: (_a2 = u$12 == null ? void 0 : u$12.login) == null ? void 0 : _a2.disableSignup });
    }, userIntentRequired: false, onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen", onErrorNavigateTo: "ErrorScreen" } }), c2("CaptchaScreen");
  }, defaultValue: r2 }) }), /* @__PURE__ */ u(O, { $if: a, children: /* @__PURE__ */ u(j, { onClick: () => {
    l$12(), setTimeout((() => {
      var _a;
      (_a = n2.current) == null ? void 0 : _a.focus();
    }), 0);
  }, children: [/* @__PURE__ */ u(I$1, { children: /* @__PURE__ */ u(Smartphone, {}) }), "Continue with ", C2 ? "WhatsApp" : "SMS"] }) })] });
};
let Ce = { apple: { logo: i, displayName: "Apple" }, discord: { logo: e$1, displayName: "Discord" }, github: { logo: l$2, displayName: "GitHub" }, google: { logo: r$1, displayName: "Google" }, linkedin: { logo: n$2, displayName: "LinkedIn" }, spotify: { logo: s, displayName: "Spotify" }, instagram: { logo: h$1, displayName: "Instagram" }, telegram: { logo: c, displayName: "Telegram" }, twitter: { logo: d$1, displayName: "Twitter" }, tiktok: { logo: o, displayName: "TikTok" }, line: { logo: C$1, displayName: "LINE" }, twitch: { logo: B, displayName: "Twitch" } };
const be = ({ provider: i2 }) => {
  let { enabled: a, token: l$12 } = $r(), { navigate: n2, setModalData: o2, data: c2 } = g(), [d$12, p] = d(false), u$12 = le(), { initLoginWithOAuth: m } = l(), { accountType: g$1 } = H(), C2 = T((() => g$1 && "guest" !== g$1 && "authorization_key" !== g$1 && "cross_app" !== g$1 ? sa(g$1) : null), [g$1]), { displayName: b, logo: k2 } = T((() => {
    if (r(i2)) {
      let t = u$12.customOAuthProviders.find(((e2) => e2.provider === i2)), a2 = t.provider_icon_url, l2 = t.provider_display_name;
      return { displayName: l2, logo: ({ style: t2 }) => /* @__PURE__ */ u("img", { alt: `${l2} logo`, src: a2, style: t2 }) };
    }
    return Ce[i2];
  }), [i2, u$12.customOAuthProviders]);
  return u(j, { onClick: () => {
    var _a;
    p(true), setTimeout((() => {
      p(false);
    }), 2e3), a && !l$12 ? (o2({ captchaModalData: { callback: (e2) => {
      var _a2;
      return m(i2, e2, (_a2 = c2 == null ? void 0 : c2.login) == null ? void 0 : _a2.disableSignup);
    }, userIntentRequired: true, onSuccessNavigateTo: null, onErrorNavigateTo: "ErrorScreen" } }), n2("CaptchaScreen")) : m(i2, void 0, (_a = c2 == null ? void 0 : c2.login) == null ? void 0 : _a.disableSignup);
  }, disabled: d$12, children: [/* @__PURE__ */ u(I$1, { $fullSize: true, children: /* @__PURE__ */ u(k2, { style: { width: "32px", height: "32px" } }) }), b, (C2 == null ? void 0 : C2.loginMethod) === i2 && /* @__PURE__ */ u(ke, { color: "gray", children: "Recent" })] });
};
let ke = gt(n$3)`
  margin-left: auto;
`;
const Se = () => {
  let { enabled: i2, token: a } = $r(), { navigate: l$12, setModalData: n2, data: o2 } = g(), [s2, c$1] = d(false), { initLoginWithTelegram: d$12 } = l(), { accountType: p } = H();
  async function u$12(e2) {
    var _a;
    try {
      await d$12(e2, (_a = o2 == null ? void 0 : o2.login) == null ? void 0 : _a.disableSignup), n2({ telegramAuthModalData: { seamlessAuth: false } }), l$12("TelegramAuthScreen");
    } catch (e3) {
      console.error(e3), c$1(false);
    }
  }
  return u(j, { onClick: async function() {
    if (c$1(true), i2 && !a) return n2({ captchaModalData: { callback: u$12, userIntentRequired: true, onSuccessNavigateTo: null, onErrorNavigateTo: "ErrorScreen" } }), void l$12("CaptchaScreen");
    await u$12(a);
  }, disabled: s2, children: [/* @__PURE__ */ u(c, { width: 32, height: 32 }), "Telegram", "telegram" === p && /* @__PURE__ */ u(Te, { color: "gray", children: "Recent" })] });
};
let Te = gt(n$3)`
  margin-left: auto;
`;
const Me = ({ onClick: i2, text: a, icon: l2 }) => /* @__PURE__ */ u(j, { onClick: i2, children: [/* @__PURE__ */ u(I$1, { children: l2 }), /* @__PURE__ */ u(k$1, { children: a })] }), xe = ({ connectOnly: a }) => {
  var _a;
  let { closePrivyModal: l$22 } = l(), { data: o2, setModalData: c2, onUserCloseViaDialogOrKeybindRef: p, navigate: u$12 } = g(), g$1 = le(), w2 = o2 == null ? void 0 : o2.login, S$1 = g$1.appearance.walletList, T$12 = (w2 == null ? void 0 : w2.walletChainType) ?? g$1.appearance.walletChainType, { accountType: M2, walletClientType: x, chainType: L } = H(), W2 = T((() => M2 && "guest" !== M2 && "authorization_key" !== M2 && "cross_app" !== M2 ? sa(M2) : null), [M2]), { email: E, sms: I$12, google: N, twitter: j2, discord: D2, github: R, spotify: V, instagram: _2, tiktok: U, line: F, twitch: H$2, linkedin: z2, apple: G, wallet: q, farcaster: B2, telegram: K } = T((() => (w2 == null ? void 0 : w2.loginMethods) ? e(w2.loginMethods, true) : null), [w2]) ?? g$1.loginMethods, { wallets: Q } = H$1({ enabled: I(q ? S$1 : []), walletList: S$1, walletChainType: T$12 }), Y$1 = g$1.customOAuthProviders, Z = g$1.crossAppProviders, { passkey: J } = g$1.loginMethods, X = [E && "email", I$12 && "sms", N && "google", j2 && "twitter", D2 && "discord", R && "github", V && "spotify", _2 && "instagram", U && "tiktok", F && "line", H$2 && "twitch", z2 && "linkedin", G && "apple", B2 && "farcaster", K && "telegram", ...Y$1.map(((e2) => e2.provider)), ...Z].filter(((e2) => !!e2)), ee = X.length > 0, te = T((() => q && !ee ? "web3-first" : q && (g$1 == null ? void 0 : g$1.appearance.loginGroupPriority) || "web2-first"), [q, ee, g$1 == null ? void 0 : g$1.appearance.loginGroupPriority]), ie = g$1 == null ? void 0 : g$1.appearance.hideDirectWeb2Inputs, [ae, le$1] = d("default"), [re, ne] = d(Ie({ mostRecentlyUsedAccountType: M2, smsAvailable: I$12, emailAvailable: E, prefilledType: (_a = w2 == null ? void 0 : w2.prefill) == null ? void 0 : _a.type }));
  y((() => {
    var _a2;
    ne(Ie({ mostRecentlyUsedAccountType: M2, smsAvailable: I$12, emailAvailable: E, prefilledType: (_a2 = w2 == null ? void 0 : w2.prefill) == null ? void 0 : _a2.type }));
  }), [E, I$12, M2]);
  let de2 = () => {
    l$22({ shouldCallAuthOnSuccess: true }), setTimeout((() => {
      le$1("default");
    }), 150);
  };
  p.current = de2;
  let pe2 = [];
  x && q ? pe2.push(x) : (W2 == null ? void 0 : W2.loginMethod) && X.includes(W2.loginMethod) && pe2.push(W2.loginMethod);
  let ge2 = (t) => {
    var _a2, _b;
    if ("email" === t) return u(he, { isEditable: "email" === re, setIsEditable: () => {
      ne("email");
    }, defaultValue: "email" === ((_a2 = w2 == null ? void 0 : w2.prefill) == null ? void 0 : _a2.type) ? w2.prefill.value : void 0 }, t);
    if ("sms" === t) return u(ve, { isEditable: "sms" === re, setIsEditable: () => {
      ne("sms");
    }, defaultValue: "phone" === ((_b = w2 == null ? void 0 : w2.prefill) == null ? void 0 : _b.type) ? w2.prefill.value : void 0 }, t);
    if ("apple" === t) return u(be, { provider: "apple" }, t);
    if ("discord" === t) return u(be, { provider: "discord" }, t);
    if ("farcaster" === t) return u(me, {}, t);
    if ("github" === t) return u(be, { provider: "github" }, t);
    if ("google" === t) return u(be, { provider: "google" }, t);
    if ("linkedin" === t) return u(be, { provider: "linkedin" }, t);
    if ("tiktok" === t) return u(be, { provider: "tiktok" }, t);
    if ("line" === t) return u(be, { provider: "line" }, t);
    if ("twitch" === t) return u(be, { provider: "twitch" }, t);
    if ("spotify" === t) return u(be, { provider: "spotify" }, t);
    if ("instagram" === t) return u(be, { provider: "instagram" }, t);
    if ("twitter" === t) return u(be, { provider: "twitter" }, t);
    if ("telegram" === t) return g$1.loginConfig.telegramHasHmacCredentials ? /* @__PURE__ */ u(Se, {}, t) : /* @__PURE__ */ u(be, { provider: "telegram" }, t);
    if (r(t)) return u(be, { provider: t }, t);
    if (t.startsWith("privy:")) {
      let i3 = t.split(":")[1];
      if (!i3) throw Error("Invalid cross-app provider format. App ID missing.");
      return u(ue, { appId: i3 }, t);
    }
    let i2 = Q.findIndex((({ id: e2 }) => e2 === D$1.normalize(t))), l2 = "solana" === L ? "solana-only" : "ethereum-only";
    return u(Y, { recent: true, index: i2, data: { wallets: Q, walletChainType: l2, handleWalletClick(e2) {
      c2(((t2) => ({ ...t2, externalConnectWallet: { walletList: S$1, walletChainType: l2, preSelectedWalletId: e2.id } }))), u$12(a ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
    } } });
  }, fe2 = Q.filter(((e2) => e2.id !== D$1.normalize(x || ""))), Ce2 = fe2.map(((t, i2) => /* @__PURE__ */ u(Y, { index: i2, data: { walletChainType: T$12, wallets: fe2, handleWalletClick(e2) {
    c2(((t2) => ({ ...t2, externalConnectWallet: { walletList: S$1, walletChainType: T$12, preSelectedWalletId: e2.id } }))), u$12(a ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
  } } }, t.id))), ke2 = X.filter(((e2) => e2 !== (W2 == null ? void 0 : W2.loginMethod))).flatMap(ge2), Te2 = pe2.flatMap(ge2);
  "web3-first" === te && "default" === ae ? Ce2.unshift(...Te2) : "web2-first" === te && ke2.unshift(...Te2);
  let xe2 = "web2-overflow" === ae ? () => le$1("default") : void 0, Ne2 = X.filter(((e2) => "email" !== e2 && "sms" !== e2)), je2 = We({ priority: te, email: E, sms: I$12, social: Ne2 }), De2 = Ee({ priority: te, email: E, sms: I$12, social: Ne2 }), Oe = /* @__PURE__ */ u(l$1, { text: Pe({ priority: te }), onClick: () => {
    c2({ ...o2, externalConnectWallet: { walletChainType: (w2 == null ? void 0 : w2.walletChainType) ?? g$1.appearance.walletChainType } }), u$12(a ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
  } }), Re = /* @__PURE__ */ u(Me, { text: je2, icon: De2, onClick: () => le$1("web2-overflow") }), Ve = ie ? 0 : 1, _e = q && Ce2.length > 0, Ue = 0 === ke2.length && q && 0 === Ce2.length, Fe = 5 - (_e ? 1 : 0), He = "default" === ae && (g$1 == null ? void 0 : g$1.appearance.logo), ze = "default" === ae && g$1.appearance.loginMessage;
  return u(n, { title: g$1.appearance.landingHeader, icon: He ? /* @__PURE__ */ u(ce, {}) : void 0, iconVariant: He ? "logo" : void 0, onClose: de2, showClose: true, onBack: xe2, showBack: !!xe2, helpText: g$1 || J && "default" === ae ? /* @__PURE__ */ u(S, { children: [J && "default" === ae && !g$1.globalDisablePasskeys && /* @__PURE__ */ u(we, {}), g$1 && /* @__PURE__ */ u(h, { app: g$1 })] }) : void 0, watermark: true, children: [ze && ("string" == typeof g$1.appearance.loginMessage ? /* @__PURE__ */ u(Ae, { children: g$1.appearance.loginMessage }) : /* @__PURE__ */ u(Le, { children: g$1.appearance.loginMessage })), /* @__PURE__ */ u(C, { $colorScheme: g$1.appearance.palette.colorScheme, children: "default" === ae && "web2-first" === te ? /* @__PURE__ */ u(S, { children: [ke2.length > Fe ? ke2.slice(0, Fe - 1) : ke2, ke2.length > Fe && Re, _e && Oe, Ue && /* @__PURE__ */ u(ye, { chainType: g$1.appearance.walletChainType })] }) : "default" === ae && "web3-first" === te ? /* @__PURE__ */ u(S, { children: [q && /* @__PURE__ */ u(S, { children: [Ce2.length > Fe ? Ce2.slice(0, Fe - 1) : Ce2, Ce2.length > Fe && Oe] }), ke2.length > Ve && Re, ke2.length === Ve && ke2[0], Ue && /* @__PURE__ */ u(ye, { chainType: g$1.appearance.walletChainType })] }) : "web2-overflow" === ae ? /* @__PURE__ */ u(S, { children: "web3-first" === te ? ke2 : ke2.slice(3) }) : null })] });
};
let Ae = gt.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`, Le = gt.div`
  margin-bottom: 24px;
`, We = ({ priority: e2, email: t, sms: i2, social: a }) => "web2-first" === e2 ? "Other socials" : t && i2 && a.length > 0 || t && a.length > 0 ? "Log in with email or socials" : i2 && a.length > 0 ? "Log in with sms or socials" : t && i2 ? "Continue with email or sms" : t ? "Continue with email" : i2 ? "Continue with sms" : "Log in with a social account", Ee = ({ priority: t, email: i2, sms: a, social: l2 }) => "web2-first" === t || l2.length > 0 ? /* @__PURE__ */ u(CircleUser, {}) : i2 && a ? /* @__PURE__ */ u(fe, {}) : i2 ? /* @__PURE__ */ u(Mail, {}) : a ? /* @__PURE__ */ u(Smartphone, {}) : null, Pe = ({ priority: e2 }) => "web2-first" === e2 ? "Continue with a wallet" : "Other wallets";
const Ie = ({ mostRecentlyUsedAccountType: e2, smsAvailable: t, emailAvailable: i2, prefilledType: a }) => i2 && ("email" === e2 && "phone" !== a || "email" === a) || !t || "phone" !== e2 && "phone" !== a ? "email" : "sms", Ne = ({ connectOnly: l$12 }) => {
  var _a, _b, _c;
  let { closePrivyModal: o2, connectors: c2 } = l(), { data: m, setModalData: w$12, onUserCloseViaDialogOrKeybindRef: C$12, navigate: S$1 } = g(), T$2 = le(), M2 = T$2.appearance.palette.colorScheme, { accountType: x, walletClientType: L } = H(), W2 = T((() => x && "guest" !== x && "authorization_key" !== x && "cross_app" !== x ? sa(x) : null), [x]), E = ((_a = T$2.loginMethodsAndOrder) == null ? void 0 : _a.primary) ?? [], D2 = ((_b = T$2.loginMethodsAndOrder) == null ? void 0 : _b.overflow) ?? [], O2 = T((() => [...E, ...D2]), [E, D2]), R = T$2.loginMethods.passkey, V = m == null ? void 0 : m.login, _2 = [];
  L && O2.includes(L) ? _2.push(L) : x && O2.includes(W2 == null ? void 0 : W2.loginMethod) && _2.push(W2 == null ? void 0 : W2.loginMethod);
  let [U, F] = d("default"), [H$12, z$2] = d(Ie({ mostRecentlyUsedAccountType: x, smsAvailable: O2.includes("sms"), emailAvailable: O2.includes("email"), prefilledType: (_c = V == null ? void 0 : V.prefill) == null ? void 0 : _c.type }));
  y((() => {
    var _a2;
    z$2(Ie({ mostRecentlyUsedAccountType: x, smsAvailable: O2.includes("sms"), emailAvailable: O2.includes("email"), prefilledType: (_a2 = V == null ? void 0 : V.prefill) == null ? void 0 : _a2.type }));
  }), [O2, x]), y((() => {
    "phone" === x && z$2("sms");
    let e2 = O2.indexOf("sms"), t = O2.indexOf("email");
    e2 > -1 && e2 < t && z$2("sms");
  }), [x, E, D2]);
  let $$1 = () => {
    o2({ shouldCallAuthOnSuccess: true }), setTimeout((() => {
      F("default");
    }), 150);
  };
  C$12.current = $$1;
  let { listings: G } = z(), q = (t) => {
    var _a2, _b2;
    if ("email" === t) return u(he, { isEditable: "email" === H$12, setIsEditable: () => {
      z$2("email");
    }, defaultValue: "email" === ((_a2 = V == null ? void 0 : V.prefill) == null ? void 0 : _a2.type) ? V.prefill.value : void 0 }, t);
    if ("sms" === t) return u(ve, { isEditable: "sms" === H$12, setIsEditable: () => {
      z$2("sms");
    }, defaultValue: "phone" === ((_b2 = V == null ? void 0 : V.prefill) == null ? void 0 : _b2.type) ? V.prefill.value : void 0 }, t);
    if ("apple" === t) return u(be, { provider: "apple" }, t);
    if ("discord" === t) return u(be, { provider: "discord" }, t);
    if ("farcaster" === t) return u(me, {}, t);
    if ("github" === t) return u(be, { provider: "github" }, t);
    if ("google" === t) return u(be, { provider: "google" }, t);
    if ("linkedin" === t) return u(be, { provider: "linkedin" }, t);
    if ("spotify" === t) return u(be, { provider: "spotify" }, t);
    if ("instagram" === t) return u(be, { provider: "instagram" }, t);
    if ("tiktok" === t) return u(be, { provider: "tiktok" }, t);
    if ("line" === t) return u(be, { provider: "line" }, t);
    if ("twitch" === t) return u(be, { provider: "twitch" }, t);
    if ("twitter" === t) return u(be, { provider: "twitter" }, t);
    if ("telegram" === t) return T$2.loginConfig.telegramHasHmacCredentials ? /* @__PURE__ */ u(Se, {}, t) : /* @__PURE__ */ u(be, { provider: "telegram" }, t);
    if (t.startsWith("privy:")) return u(ue, { appId: t.replace("privy:", "") }, t);
    let i2 = T$2.appearance.walletChainType, a = new D$1(i2, [t]).getWallets(c2, G);
    return a.wallets.map(((t2, r2) => /* @__PURE__ */ u(Y, { index: r2, data: { wallets: a.wallets, walletChainType: i2, handleWalletClick(e2) {
      w$12(((t3) => ({ ...t3, externalConnectWallet: { walletList: O2, walletChainType: i2, preSelectedWalletId: e2.id } }))), S$1(l$12 ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen");
    } } }, t2.id + r2)));
  }, B2 = _2.flatMap(q), K = E.filter(((e2) => e2 !== L && e2 !== (W2 == null ? void 0 : W2.loginMethod))).flatMap(q), Q = D2.filter(((e2) => e2 !== L && e2 !== (W2 == null ? void 0 : W2.loginMethod))).flatMap(q), [Y$1, Z] = w([...B2, ...K, ...Q], je({ primary: K.length + B2.length, overflow: Q.length }));
  return u(S, { children: [/* @__PURE__ */ u(T$1, { title: T$2.appearance.landingHeader, onClose: $$1, backFn: "default" === U ? void 0 : () => {
    F("default");
  } }), "default" === U && /* @__PURE__ */ u(De, {}), "default" === U && ("string" == typeof T$2.appearance.loginMessage ? /* @__PURE__ */ u(z$1, { children: T$2.appearance.loginMessage }) : T$2.appearance.loginMessage), /* @__PURE__ */ u($, { style: { overflow: "hidden" }, children: /* @__PURE__ */ u(C, { $colorScheme: M2, children: ["default" === U && /* @__PURE__ */ u(S, { children: [Y$1, Z.length > 0 && /* @__PURE__ */ u(Me, { text: "More options", icon: /* @__PURE__ */ u(ForwardRef, {}), onClick: () => F("overflow") })] }), "overflow" === U && /* @__PURE__ */ u(S, { children: Z }), R && "default" === U && /* @__PURE__ */ u(we, {})] }) }), T$2 && /* @__PURE__ */ u(h, { app: T$2 }), /* @__PURE__ */ u(u$1, {})] });
};
let je = ({ primary: e2, overflow: t }) => e2 < 5 ? e2 : 5 === e2 && 0 === t ? 5 : 4, De = gt(((t) => {
  let i2 = le();
  return (i2 == null ? void 0 : i2.appearance.logo) ? /* @__PURE__ */ u(de, { ...t, children: /* @__PURE__ */ u(ce, {}) }) : null;
}))`
  margin-bottom: 16px;
`;
export {
  Ne as N,
  xe as x
};
