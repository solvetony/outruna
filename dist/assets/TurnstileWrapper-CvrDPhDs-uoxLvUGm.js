import { dd as D, de as q, df as d, dg as A, dh as y$1, di as T, dj as F, dk as u$1, dl as le } from "./index-lNx1hHWy.js";
var c = D(({ as: e = `div`, ...t }, n) => u$1(e, { ...t, ref: n }));
const l = `https://challenges.cloudflare.com/turnstile/v0/api.js`, u = `cf-turnstile-script`, f = `onloadTurnstileCallback`, p = (e) => !!document.getElementById(e), m = ({ render: e = `explicit`, onLoadCallbackName: t = f, scriptOptions: { nonce: n = ``, defer: r = true, async: i = true, id: a = ``, appendTo: o2, onError: s, crossOrigin: c2 = `` } = {} }) => {
  let u2 = a || `cf-turnstile-script`;
  if (p(u2)) return;
  let d2 = document.createElement(`script`);
  d2.id = u2, d2.src = `${l}?onload=${t}&render=${e}`, !document.querySelector(`script[src="${d2.src}"]`) && (d2.defer = !!r, d2.async = !!i, n && d2.setAttribute(`nonce`, n), c2 && (d2.crossOrigin = c2), s && (d2.onerror = s, delete window[t]), (o2 === `body` ? document.body : document.getElementsByTagName(`head`)[0]).appendChild(d2));
}, h = { normal: { width: 300, height: 65 }, compact: { width: 150, height: 140 }, invisible: { width: 0, height: 0, overflow: `hidden` }, flexible: { minWidth: 300, width: `100%`, height: 65 }, interactionOnly: { width: `fit-content`, height: `auto`, display: `flex` } };
function g(e) {
  if (e !== `invisible` && e !== `interactionOnly`) return e;
}
function _(e = u) {
  let [t, r] = d(false);
  return y$1(() => {
    let t2 = () => {
      p(e) && r(true);
    }, n = new MutationObserver(t2);
    return n.observe(document, { childList: true, subtree: true }), t2(), () => {
      n.disconnect();
    };
  }, [e]), t;
}
let v = `unloaded`, y;
const b = new Promise((e, t) => {
  y = { resolve: e, reject: t }, v === `ready` && e(void 0);
}), x = (e = f) => (v === `unloaded` && (v = `loading`, window[e] = () => {
  y.resolve(), v = `ready`, delete window[e];
}), b), S = D((e, l2) => {
  let { scriptOptions: u2, options: d$1 = {}, siteKey: f2, onWidgetLoad: p2, onSuccess: y2, onExpire: b2, onError: S2, onBeforeInteractive: C, onAfterInteractive: w, onUnsupported: T$1, onTimeout: E, onLoadScript: D2, id: O, style: k, as: A$1 = `div`, injectScript: j = true, rerenderOnCallbackChange: M = false, ...N } = e, P = d$1.size, F$1 = q(() => P === void 0 ? {} : d$1.execution === `execute` ? h.invisible : d$1.appearance === `interaction-only` ? h.interactionOnly : h[P], [d$1.execution, P, d$1.appearance]), [I, L] = d(F$1()), R = A(null), [z, B] = d(false), V = A(void 0), H = A(false), U = O || `cf-turnstile`, W = A({ onSuccess: y2, onError: S2, onExpire: b2, onBeforeInteractive: C, onAfterInteractive: w, onUnsupported: T$1, onTimeout: E });
  y$1(() => {
    M || (W.current = { onSuccess: y2, onError: S2, onExpire: b2, onBeforeInteractive: C, onAfterInteractive: w, onUnsupported: T$1, onTimeout: E });
  });
  let G = (u2 == null ? void 0 : u2.id) || `cf-turnstile-script`, K = _(G), q$1 = (u2 == null ? void 0 : u2.onLoadCallbackName) || `onloadTurnstileCallback`, J = d$1.appearance || `always`, Y = T(() => ({ sitekey: f2, action: d$1.action, cData: d$1.cData, theme: d$1.theme || `auto`, language: d$1.language || `auto`, tabindex: d$1.tabIndex, "response-field": d$1.responseField, "response-field-name": d$1.responseFieldName, size: g(P), retry: d$1.retry || `auto`, "retry-interval": d$1.retryInterval || 8e3, "refresh-expired": d$1.refreshExpired || `auto`, "refresh-timeout": d$1.refreshTimeout || `auto`, execution: d$1.execution || `render`, appearance: d$1.appearance || `always`, "feedback-enabled": d$1.feedbackEnabled ?? true, callback: (e2) => {
    var _a, _b;
    H.current = true, M ? y2 == null ? void 0 : y2(e2) : (_b = (_a = W.current).onSuccess) == null ? void 0 : _b.call(_a, e2);
  }, "error-callback": M ? S2 : (...e2) => {
    var _a, _b;
    return (_b = (_a = W.current).onError) == null ? void 0 : _b.call(_a, ...e2);
  }, "expired-callback": M ? b2 : (...e2) => {
    var _a, _b;
    return (_b = (_a = W.current).onExpire) == null ? void 0 : _b.call(_a, ...e2);
  }, "before-interactive-callback": M ? C : (...e2) => {
    var _a, _b;
    return (_b = (_a = W.current).onBeforeInteractive) == null ? void 0 : _b.call(_a, ...e2);
  }, "after-interactive-callback": M ? w : (...e2) => {
    var _a, _b;
    return (_b = (_a = W.current).onAfterInteractive) == null ? void 0 : _b.call(_a, ...e2);
  }, "unsupported-callback": M ? T$1 : (...e2) => {
    var _a, _b;
    return (_b = (_a = W.current).onUnsupported) == null ? void 0 : _b.call(_a, ...e2);
  }, "timeout-callback": M ? E : (...e2) => {
    var _a, _b;
    return (_b = (_a = W.current).onTimeout) == null ? void 0 : _b.call(_a, ...e2);
  } }), [d$1.action, d$1.appearance, d$1.cData, d$1.execution, d$1.language, d$1.refreshExpired, d$1.responseField, d$1.responseFieldName, d$1.retry, d$1.retryInterval, d$1.tabIndex, d$1.theme, d$1.feedbackEnabled, d$1.refreshTimeout, f2, P, M, M ? y2 : null, M ? S2 : null, M ? b2 : null, M ? C : null, M ? w : null, M ? T$1 : null, M ? E : null]), X = q(() => typeof window < `u` && !!window.turnstile, []);
  return y$1(function() {
    j && !z && (x(q$1), m({ onLoadCallbackName: q$1, scriptOptions: { ...u2, id: G } }));
  }, [j, z, u2, G, q$1]), y$1(function() {
    v !== `ready` && x(q$1).then(() => B(true)).catch(console.error);
  }, [q$1]), y$1(function() {
    if (!R.current || !z) return;
    let e2 = false;
    return (async () => {
      e2 || !R.current || (V.current = window.turnstile.render(R.current, Y), V.current && (p2 == null ? void 0 : p2(V.current)));
    })(), () => {
      e2 = true, V.current && (window.turnstile.remove(V.current), H.current = false);
    };
  }, [U, z, Y]), F(l2, () => {
    let { turnstile: e2 } = window;
    return { getResponse() {
      if (!(e2 == null ? void 0 : e2.getResponse) || !V.current || !X()) {
        console.warn(`Turnstile has not been loaded`);
        return;
      }
      return e2.getResponse(V.current);
    }, async getResponsePromise(e3 = 3e4, t = 100) {
      return new Promise((n, r) => {
        let i, a = async () => {
          if (H.current && window.turnstile && V.current) try {
            let e4 = window.turnstile.getResponse(V.current);
            return i && clearTimeout(i), e4 ? n(e4) : r(Error(`No response received`));
          } catch (e4) {
            return i && clearTimeout(i), console.warn(`Failed to get response`, e4), r(Error(`Failed to get response`));
          }
          i || (i = setTimeout(() => {
            i && clearTimeout(i), r(Error(`Timeout`));
          }, e3)), await new Promise((e4) => setTimeout(e4, t)), await a();
        };
        a();
      });
    }, reset() {
      if (!(e2 == null ? void 0 : e2.reset) || !V.current || !X()) {
        console.warn(`Turnstile has not been loaded`);
        return;
      }
      d$1.execution === `execute` && L(h.invisible);
      try {
        H.current = false, e2.reset(V.current);
      } catch (e3) {
        console.warn(`Failed to reset Turnstile widget ${V.current}`, e3);
      }
    }, remove() {
      if (!(e2 == null ? void 0 : e2.remove) || !V.current || !X()) {
        console.warn(`Turnstile has not been loaded`);
        return;
      }
      L(h.invisible), H.current = false, e2.remove(V.current), V.current = null;
    }, render() {
      if (!(e2 == null ? void 0 : e2.render) || !R.current || !X() || V.current) {
        console.warn(`Turnstile has not been loaded or container not found`);
        return;
      }
      let t = e2.render(R.current, Y);
      return V.current = t, V.current && (p2 == null ? void 0 : p2(V.current)), d$1.execution !== `execute` && L(P ? h[P] : {}), t;
    }, execute() {
      if (d$1.execution !== `execute`) {
        console.warn(`Execution mode is not set to "execute"`);
        return;
      }
      if (!(e2 == null ? void 0 : e2.execute) || !R.current || !V.current || !X()) {
        console.warn(`Turnstile has not been loaded or container not found`);
        return;
      }
      e2.execute(R.current), L(P ? h[P] : {});
    }, isExpired() {
      return !(e2 == null ? void 0 : e2.isExpired) || !V.current || !X() ? (console.warn(`Turnstile has not been loaded`), false) : e2.isExpired(V.current);
    } };
  }, [V, d$1.execution, P, Y, R, X, z, p2]), y$1(() => {
    if (z || !K) return;
    if (window.turnstile) {
      B(true);
      return;
    }
    let e2 = setInterval(() => {
      window.turnstile && (B(true), clearInterval(e2));
    }, 50);
    return () => {
      clearInterval(e2);
    };
  }, [z, K]), y$1(() => {
    L(F$1());
  }, [d$1.execution, P, J]), y$1(() => {
    !K || typeof D2 != `function` || D2();
  }, [K]), u$1(c, { ref: R, as: A$1, id: U, style: { ...I, ...k }, ...N });
});
S.displayName = `Turnstile`;
const o = ({ delayedExecution: o2, captchaContext: n, ...i }) => {
  let { appId: s, setError: c2, setToken: p2, setExecuting: a, siteKey: u2, ref: d2 } = n, { scriptNonce: x2 } = le();
  return u$1(S, { ...i, ref: d2, siteKey: u2 ?? "", scriptOptions: x2 ? { nonce: x2 } : void 0, options: { action: s, size: "invisible", ...o2 ? { appearance: "execute", execution: "execute" } : { appearance: "always", execution: "render" } }, onUnsupported: () => {
    var _a;
    (_a = i.onUnsupported) == null ? void 0 : _a.call(i), console.warn("Browser does not support Turnstile.");
  }, onError: (e) => {
    var _a;
    (_a = i.onError) == null ? void 0 : _a.call(i, e), c2("Captcha failed"), a(false);
  }, onSuccess: (e) => {
    var _a;
    (_a = i.onSuccess) == null ? void 0 : _a.call(i, e), p2(e), a(false);
  }, onExpire: (e) => {
    var _a, _b;
    (_a = i.onExpire) == null ? void 0 : _a.call(i, e);
    try {
      (_b = d2.current) == null ? void 0 : _b.reset(), c2(void 0), p2(void 0);
    } catch (e2) {
      c2("expired_and_failed_reset");
    }
  } });
};
export {
  o as TurnstileWrapper,
  o as default
};
