import { dq as g, eV as $r, dg as A, df as d, dh as y, dk as u, di as T, eW as Kr } from "./index-CgfjQyaX.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import { C as CircleCheckBig } from "./circle-check-big-CeJfwGeZ.js";
import { C as CircleX } from "./circle-x-DDYAG7vC.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
import "./createLucideIcon-Buh6I6L_.js";
const p = ({ status: i, title: o, description: s, userIntentRequired: n$1, retriesRemaining: m, hasSelectedCta: c, onContinue: p2, onRetry: l2 }) => {
  let d2 = T((() => {
    switch (i) {
      case "loading":
      default:
        return;
      case "success":
        return n$1 ? { label: c ? "Continuing..." : "Continue", onClick: p2, disabled: c, loading: c } : void 0;
      case "error":
        return m > 0 ? { label: "Retry", onClick: l2 } : void 0;
    }
  }), [i, c, p2, l2]), j = T((() => ({ loading: "loading", ready: "subtle", disabled: "subtle", success: "success", error: "error" })[i] || "loading"), [i]);
  return u(n, { icon: "loading" === i || "ready" === i ? void 0 : "success" === i ? CircleCheckBig : CircleX, iconVariant: j, title: o, subtitle: s, primaryCta: d2, watermark: true });
}, l = { component: () => {
  let { lastScreen: t, data: r, navigate: a, setModalData: u$1 } = g(), { status: l2, token: d$1, waitForResult: j, reset: y$1, execute: g$1 } = $r(), h = A([]), v = (e) => {
    h.current = [e, ...h.current];
  }, [f, C] = d(true);
  y((() => (v(setTimeout(C, 1e3, false)), () => {
    h.current.forEach(((e) => clearTimeout(e))), h.current = [];
  })), []);
  let [b, k] = d(""), [w, S] = d("Checking that you are a human..."), [x, R] = d(false), [I, T2] = d(3), q = r == null ? void 0 : r.captchaModalData, A$1 = async (e) => {
    try {
      await (q == null ? void 0 : q.callback(e)), (q == null ? void 0 : q.onSuccessNavigateTo) && a(q == null ? void 0 : q.onSuccessNavigateTo, false);
    } catch (e2) {
      if (e2 instanceof Kr) return;
      u$1({ errorModalData: { error: e2, previousScreen: t || "LandingScreen" } }), a((q == null ? void 0 : q.onErrorNavigateTo) || "ErrorScreen", false);
    }
  };
  y((() => {
    "success" === l2 ? v(setTimeout((async () => {
      let e = await j();
      !e || (q == null ? void 0 : q.userIntentRequired) || A$1(e);
    }), 1e3)) : "ready" === l2 && v(setTimeout((() => {
      "ready" === l2 && g$1();
    }), 500));
  }), [l2]), y((() => {
    if (!f) switch (l2) {
      case "success":
        k("Success!"), S("CAPTCHA passed successfully."), (q == null ? void 0 : q.userIntentRequired) || setTimeout((() => {
          R(true), A$1(d$1);
        }), 2e3);
        break;
      case "loading":
        k(""), S("Checking that you are a human...");
        break;
      case "error":
        k("Something went wrong"), S(I <= 0 ? "If you use an adblocker or VPN, try disabling and re-attempting." : "You did not pass CAPTCHA. Please try again.");
    }
  }), [l2, f, x]);
  return u(p, { status: l2, title: b, description: w, userIntentRequired: q == null ? void 0 : q.userIntentRequired, retriesRemaining: I, hasSelectedCta: x, onContinue: () => {
    R(true), A$1(d$1);
  }, onRetry: async () => {
    if (I <= 0) return;
    T2(((e2) => e2 - 1)), y$1(), g$1();
    let e = await j();
    !e || (q == null ? void 0 : q.userIntentRequired) || A$1(e);
  } });
} };
export {
  l as CaptchaScreen,
  p as CaptchaScreenView,
  l as default
};
