import { dv as k, dq as g, df as d, dk as u } from "./index-CgfjQyaX.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
const n = ({ title: e, subtitle: o, buttonText: i, buttonHref: n2, isLoading: l2 = false, helpText: a, onButtonClick: m }) => /* @__PURE__ */ u(n$1, { title: e, subtitle: o, primaryCta: { label: i, onClick: () => {
  n2 && window.open(n2, "_self"), m == null ? void 0 : m();
}, disabled: l2 }, helpText: a, watermark: true }), l = { component: () => {
  let { ready: r } = k(), { data: l2 } = g(), [a, m] = d(false);
  if (!(l2 == null ? void 0 : l2.installWalletModalData)) throw Error("Wallet data is missing");
  let { walletConfig: s, connectOnly: p, chainType: c } = l2.installWalletModalData, u$1 = s.getMobileRedirect({ useUniversalLink: !a, isSolana: "solana" === c, connectOnly: p }), d$1 = s.name.replace(/ wallet/gi, ""), h = { title: `Redirecting to ${d$1} Mobile Wallet`, description: `We'll take you to the ${d$1} Mobile Wallet app to continue your login experience.`, footnote: "" };
  return r && (h.description = `For the best experience, we'll automatically log you into the ${d$1} Mobile Wallet in-app browser.`, h.footnote = "You can always return here to login via other methods."), a && (h.title = "Still here?", h.description = `You may need to install the ${s.name} mobile app.`, h.footnote = `Once you're done, you can connect with ${s.name} wallet to complete the login.`), /* @__PURE__ */ u(n, { title: h.title, subtitle: h.description, buttonText: a ? "Go to App Store" : "Continue", buttonHref: u$1, isLoading: r && !u$1, helpText: h.footnote || void 0, onButtonClick: () => {
    setTimeout((() => m(true)), 1e3);
  } });
} };
export {
  l as WalletInterstitialScreen,
  n as WalletInterstitialScreenView,
  l as default
};
