import { dq as g, dr as l, df as d, dg as A, dh as y, dk as u, dG as S, di as T$1, du as gt, eX as P, eY as R, eZ as Pt } from "./index-lNx1hHWy.js";
import { F as ForwardRef$1 } from "./ArrowsRightLeftIcon-sDo0rEay.js";
import { F as ForwardRef } from "./CheckCircleIcon-D8xyoJTu.js";
import { T, u as u$1, m } from "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import { a } from "./Layouts-BlFm53ED-vFipr686.js";
import { t } from "./analytics-mkkvFRju-3eV9Df16.js";
const b = { component: () => {
  let { data: o, setModalData: i, navigate: c, navigateBack: m2 } = g(), { closePrivyModal: u$2, createAnalyticsEvent: p, client: g$1 } = l(), [f, j] = d("pending-in-flow"), b2 = A(0), C2 = { ...o == null ? void 0 : o.funding, showAlternateFundingMethod: true };
  C2.usingDefaultFundingMethod && (C2.usingDefaultFundingMethod = false);
  let { partnerUserId: k2, popup: x2 } = (o == null ? void 0 : o.coinbaseOnrampStatus) ?? {};
  return y((() => {
    if ("pending-in-flow" === f || "pending-after-flow" === f) {
      let e = setInterval((async () => {
        if (k2) try {
          let { status: e2 } = await g$1.getCoinbaseOnRampStatus({ partnerUserId: k2 });
          if ("success" === e2) return void j("success");
          if ("failure" === e2) throw Error("There was an error completing Coinbase Onramp flow.");
          if (b2.current >= 3) return i({ funding: C2, solanaFundingData: o == null ? void 0 : o.solanaFundingData }), void c("FundingMethodSelectionScreen");
          (x2 == null ? void 0 : x2.closed) && (b2.current = b2.current + 1, j("pending-after-flow"));
        } catch (e2) {
          console.error(e2), j("error"), p({ eventName: t, payload: { status: "failure", provider: "coinbase-onramp", error: e2.message } }), i({ funding: { ...C2, errorMessage: "Something went wrong adding funds. Please try again or use another method." }, solanaFundingData: o == null ? void 0 : o.solanaFundingData }), c("FundingMethodSelectionScreen");
        }
      }), 1500);
      return () => clearInterval(e);
    }
  }), [k2, x2, f]), /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(T, { title: "Fund account", backFn: () => {
    i({ funding: C2, solanaFundingData: o == null ? void 0 : o.solanaFundingData }), m2();
  } }, "header"), /* @__PURE__ */ u(w, { status: f, onClickCta: u$2 }), /* @__PURE__ */ u(u$1, {})] });
} };
let w = ({ status: o, onClickCta: i }) => {
  let { title: n, body: a$1, cta: s } = T$1((() => ((e) => {
    switch (e) {
      case "success":
        return { title: "You've funded your account!", body: "It may take a few minutes for the assets to appear.", cta: "Continue" };
      case "pending-after-flow":
        return { title: "In Progress", body: "Almost done. Retrieving transaction status from Coinbase", cta: "" };
      case "error":
      case "pending-in-flow":
        return { title: "In Progress", body: "Go back to Coinbase Onramp to finish funding your account.", cta: "" };
    }
  })(o)), [o]);
  return u(S, { children: [/* @__PURE__ */ u(x, { children: [/* @__PURE__ */ u(C, { isSucccess: "success" === o }), /* @__PURE__ */ u(a, { children: [/* @__PURE__ */ u("h3", { children: n }), /* @__PURE__ */ u(k, { children: a$1 })] })] }), s && /* @__PURE__ */ u(m, { onClick: i, children: s })] });
}, C = ({ isSucccess: r }) => {
  if (!r) {
    let r2 = "var(--privy-color-foreground-4)";
    return u("div", { style: { position: "relative" }, children: [/* @__PURE__ */ u(P, { color: r2, style: { position: "absolute" } }), /* @__PURE__ */ u(R, { color: r2 }), /* @__PURE__ */ u(Pt, { style: { position: "absolute", width: "2.8rem", height: "2.8rem", top: "1.2rem", left: "1.2rem" } })] });
  }
  let n = r ? ForwardRef : () => /* @__PURE__ */ u(ForwardRef$1, { width: "3rem", height: "3rem", style: { backgroundColor: "var(--privy-color-foreground-4)", color: "var(--privy-color-background)", borderRadius: "100%", padding: "0.5rem", margin: "0.5rem" } }), a2 = r ? "var(--privy-color-success)" : "var(--privy-color-foreground-4)";
  return u("div", { style: { borderColor: a2, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "100%", borderWidth: 2, padding: "0.5rem", marginBottom: "0.5rem" }, children: n && /* @__PURE__ */ u(n, { width: "4rem", height: "4rem", color: a2 }) });
}, k = gt.p`
  font-size: 1rem;
  color: var(--privy-color-foreground-3);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`, x = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  padding: 2rem 0;
`;
export {
  b as CoinbaseOnrampStatusScreen,
  b as default
};
