import { dq as g, dk as u, dG as S } from "./index-R3UC2dO4.js";
import { n } from "./Link-DJ5gq9Di-DfTbh8Hp.js";
import { a, c } from "./TodoList-CgrU7uwu-CmvXiFwy.js";
import { n as n$1 } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import "./x-BGzNGWEl.js";
import "./createLucideIcon-COMOll4V.js";
import "./check-Di0e4xHX.js";
import "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
const s = ({ walletName: a$1, installLink: s2, title: m2, subtitle: c$1 = "Follow the instructions below to get started.", onReload: p, onBack: d }) => {
  let h = m2 || `Create a ${a$1} wallet`.replace(/wallet wallet/gi, "wallet");
  return u(n$1, { title: h, subtitle: c$1, onBack: d, showBack: true, primaryCta: { label: "Reload the page to use your wallet", onClick: p }, helpText: /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u("span", { children: "Still not sure? " }), /* @__PURE__ */ u(n, { size: "sm", target: "_blank", href: "https://solana.com/docs/intro/wallets", children: "Learn more" })] }), watermark: true, children: /* @__PURE__ */ u(a, { children: [/* @__PURE__ */ u(c, { children: /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u("span", { children: "Install the " }), " ", /* @__PURE__ */ u(n, { href: s2, target: "_blank", children: [a$1, " browser extension"] })] }) }), /* @__PURE__ */ u(c, { children: "Set up your first wallet" }), /* @__PURE__ */ u(c, { children: "Store your recovery phrase in a safe place!" })] }) });
}, m = { component: () => {
  let { navigateBack: e, data: r } = g();
  if (!(r == null ? void 0 : r.installWalletModalData)) throw Error("Wallet data is missing");
  let { walletConfig: o } = r.installWalletModalData;
  return u(s, { walletName: o.name, installLink: o.installLink, onReload: () => {
    window.location.reload();
  }, onBack: e });
} };
export {
  m as InstallWalletScreen,
  s as InstallWalletScreenView,
  m as default
};
