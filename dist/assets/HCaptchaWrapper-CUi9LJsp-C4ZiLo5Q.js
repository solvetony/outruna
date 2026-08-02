import { dm as k, dn as M$1, dp as C$1, dk as u } from "./index-Cw7cGahV.js";
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _setPrototypeOf(t2, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e2) {
    return t3.__proto__ = e2, t3;
  }, _setPrototypeOf(t2, e);
}
function _inheritsLoose(t2, o) {
  t2.prototype = Object.create(o.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o);
}
var G = Object.defineProperty, K = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var I = (t2, e, r) => e in t2 ? G(t2, e, { enumerable: true, configurable: true, writable: true, value: r }) : t2[e] = r, d = (t2, e) => {
  for (var r in e || (e = {})) P.call(e, r) && I(t2, r, e[r]);
  if (w) for (var r of w(e)) D.call(e, r) && I(t2, r, e[r]);
  return t2;
}, R = (t2, e) => K(t2, V(e));
var M = (t2, e) => {
  var r = {};
  for (var n in t2) P.call(t2, n) && e.indexOf(n) < 0 && (r[n] = t2[n]);
  if (t2 != null && w) for (var n of w(t2)) e.indexOf(n) < 0 && D.call(t2, n) && (r[n] = t2[n]);
  return r;
};
var l = (t2, e, r) => (I(t2, typeof e != "symbol" ? e + "" : e, r), r);
var x = (t2, e, r) => new Promise((n, s) => {
  var a = (c) => {
    try {
      o(r.next(c));
    } catch (i) {
      s(i);
    }
  }, u2 = (c) => {
    try {
      o(r.throw(c));
    } catch (i) {
      s(i);
    }
  }, o = (c) => c.done ? n(c.value) : Promise.resolve(c.value).then(a, u2);
  o((r = r.apply(t2, e)).next());
});
var L = "hCaptcha-script", b = "hCaptchaOnLoad", T = "script-error";
var g = "@hCaptcha/loader";
function U(t2) {
  return Object.entries(t2).filter(([, e]) => e || e === false).map(([e, r]) => `${encodeURIComponent(e)}=${encodeURIComponent(String(r))}`).join("&");
}
function O(t2) {
  let e = t2 && t2.ownerDocument || document, r = e.defaultView || e.parentWindow || window;
  return { document: e, window: r };
}
function S(t2) {
  return t2 || document.head;
}
function B(t2) {
  var e;
  t2.setTag("source", g), t2.setTag("url", document.URL), t2.setContext("os", { UA: navigator.userAgent }), t2.setContext("browser", d({}, z())), t2.setContext("device", R(d({}, J()), { screen_width_pixels: screen.width, screen_height_pixels: screen.height, language: navigator.language, orientation: ((e = screen.orientation) == null ? void 0 : e.type) || "Unknown", processor_count: navigator.hardwareConcurrency, platform: navigator.platform }));
}
function z() {
  var n, s, a, u2, o, c;
  let t2 = navigator.userAgent, e, r;
  return t2.indexOf("Firefox") !== -1 ? (e = "Firefox", r = (n = t2.match(/Firefox\/([\d.]+)/)) == null ? void 0 : n[1]) : t2.indexOf("Edg") !== -1 ? (e = "Microsoft Edge", r = (s = t2.match(/Edg\/([\d.]+)/)) == null ? void 0 : s[1]) : t2.indexOf("Chrome") !== -1 && t2.indexOf("Safari") !== -1 ? (e = "Chrome", r = (a = t2.match(/Chrome\/([\d.]+)/)) == null ? void 0 : a[1]) : t2.indexOf("Safari") !== -1 && t2.indexOf("Chrome") === -1 ? (e = "Safari", r = (u2 = t2.match(/Version\/([\d.]+)/)) == null ? void 0 : u2[1]) : t2.indexOf("Opera") !== -1 || t2.indexOf("OPR") !== -1 ? (e = "Opera", r = (o = t2.match(/(Opera|OPR)\/([\d.]+)/)) == null ? void 0 : o[2]) : t2.indexOf("MSIE") !== -1 || t2.indexOf("Trident") !== -1 ? (e = "Internet Explorer", r = (c = t2.match(/(MSIE |rv:)([\d.]+)/)) == null ? void 0 : c[2]) : (e = "Unknown", r = "Unknown"), { name: e, version: r };
}
function F(t2) {
  return new Promise((e) => setTimeout(e, t2));
}
function J() {
  let t2 = navigator.userAgent, e;
  t2.indexOf("Win") !== -1 ? e = "Windows" : t2.indexOf("Mac") !== -1 ? e = "Mac" : t2.indexOf("Linux") !== -1 ? e = "Linux" : t2.indexOf("Android") !== -1 ? e = "Android" : t2.indexOf("like Mac") !== -1 || t2.indexOf("iPhone") !== -1 || t2.indexOf("iPad") !== -1 ? e = "iOS" : e = "Unknown";
  let r;
  return /Mobile|iPhone|iPod|Android/i.test(t2) ? r = "Mobile" : /Tablet|iPad/i.test(t2) ? r = "Tablet" : r = "Desktop", { model: e, family: e, device: r };
}
var Q = class k2 {
  constructor(e) {
    l(this, "_parent");
    l(this, "breadcrumbs", []);
    l(this, "context", {});
    l(this, "extra", {});
    l(this, "tags", {});
    l(this, "request");
    l(this, "user");
    this._parent = e;
  }
  get parent() {
    return this._parent;
  }
  child() {
    return new k2(this);
  }
  setRequest(e) {
    return this.request = e, this;
  }
  removeRequest() {
    return this.request = void 0, this;
  }
  addBreadcrumb(e) {
    return typeof e.timestamp > "u" && (e.timestamp = (/* @__PURE__ */ new Date()).toISOString()), this.breadcrumbs.push(e), this;
  }
  setExtra(e, r) {
    return this.extra[e] = r, this;
  }
  removeExtra(e) {
    return delete this.extra[e], this;
  }
  setContext(e, r) {
    return typeof r.type > "u" && (r.type = e), this.context[e] = r, this;
  }
  removeContext(e) {
    return delete this.context[e], this;
  }
  setTags(e) {
    return this.tags = d(d({}, this.tags), e), this;
  }
  setTag(e, r) {
    return this.tags[e] = r, this;
  }
  removeTag(e) {
    return delete this.tags[e], this;
  }
  setUser(e) {
    return this.user = e, this;
  }
  removeUser() {
    return this.user = void 0, this;
  }
  toBody() {
    let e = [], r = this;
    for (; r; ) e.push(r), r = r.parent;
    return e.reverse().reduce((n, s) => {
      var a;
      return n.breadcrumbs = [...(a = n.breadcrumbs) != null ? a : [], ...s.breadcrumbs], n.extra = d(d({}, n.extra), s.extra), n.contexts = d(d({}, n.contexts), s.context), n.tags = d(d({}, n.tags), s.tags), s.user && (n.user = s.user), s.request && (n.request = s.request), n;
    }, { breadcrumbs: [], extra: {}, contexts: {}, tags: {}, request: void 0, user: void 0 });
  }
  clear() {
    this.breadcrumbs = [], this.context = {}, this.tags = {}, this.user = void 0;
  }
}, Z = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, ee = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, te = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, re = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/, A = "?", j = "An unknown error occurred", ne = "0.0.4";
function se(t2) {
  for (let e = 0; e < t2.length; e++) t2[e] = Math.floor(Math.random() * 256);
  return t2;
}
function p(t2) {
  return (t2 + 256).toString(16).substring(1);
}
function oe() {
  let t2 = se(new Array(16));
  return t2[6] = t2[6] & 15 | 64, t2[8] = t2[8] & 63 | 128, p(t2[0]) + p(t2[1]) + p(t2[2]) + p(t2[3]) + "-" + p(t2[4]) + p(t2[5]) + "-" + p(t2[6]) + p(t2[7]) + "-" + p(t2[8]) + p(t2[9]) + "-" + p(t2[10]) + p(t2[11]) + p(t2[12]) + p(t2[13]) + p(t2[14]) + p(t2[15]);
}
var ie = [[Z, "chrome"], [te, "winjs"], [ee, "gecko"]];
function ae(t2) {
  var n, s, a, u2;
  if (!t2.stack) return null;
  let e = [], r = (a = (s = (n = t2.stack).split) == null ? void 0 : s.call(n, `
`)) != null ? a : [];
  for (let o = 0; o < r.length; ++o) {
    let c = null, i = null, h = null;
    for (let [y, E] of ie) if (i = y.exec(r[o]), i) {
      h = E;
      break;
    }
    if (!(!i || !h)) {
      if (h === "chrome") c = { filename: (u2 = i[2]) != null && u2.startsWith("address at ") ? i[2].substring(11) : i[2], function: i[1] || A, lineno: i[3] ? +i[3] : null, colno: i[4] ? +i[4] : null };
      else if (h === "winjs") c = { filename: i[2], function: i[1] || A, lineno: +i[3], colno: i[4] ? +i[4] : null };
      else if (h === "gecko") o === 0 && !i[5] && t2.columnNumber !== void 0 && e.length > 0 && (e[0].column = t2.columnNumber + 1), c = { filename: i[3], function: i[1] || A, lineno: i[4] ? +i[4] : null, colno: i[5] ? +i[5] : null };
      else continue;
      !c.function && c.lineno && (c.function = A), e.push(c);
    }
  }
  return e.length ? e.reverse() : null;
}
function ce(t2) {
  let e = ae(t2);
  return { type: t2.name, value: t2.message, stacktrace: { frames: e != null ? e : [] } };
}
function ue(t2) {
  let e = re.exec(t2), r = e ? e.slice(1) : [];
  if (r.length !== 6) throw new Error("Invalid DSN");
  let n = r[5].split("/"), s = n.slice(0, -1).join("/");
  return r[0] + "://" + r[3] + (r[4] ? ":" + r[4] : "") + (s ? "/" + s : "") + "/api/" + n.pop() + "/envelope/?sentry_version=7&sentry_key=" + r[1] + (r[2] ? "&sentry_secret=" + r[2] : "");
}
function le(t2, e, r) {
  var s, a;
  let n = d({ event_id: oe().replaceAll("-", ""), platform: "javascript", sdk: { name: "@hcaptcha/sentry", version: ne }, environment: e, release: r, timestamp: Date.now() / 1e3 }, t2.scope.toBody());
  if (t2.type === "exception") {
    n.message = (a = (s = t2.error) == null ? void 0 : s.message) != null ? a : "Unknown error", n.fingerprint = [n.message];
    let u2 = [], o = t2.error;
    for (let c = 0; c < 5 && o && (u2.push(ce(o)), !(!o.cause || !(o.cause instanceof Error))); c++) o = o.cause;
    n.exception = { values: u2.reverse() };
  }
  return t2.type === "message" && (n.message = t2.message, n.level = t2.level), n;
}
function de(t2) {
  if (t2 instanceof Error) return t2;
  if (typeof t2 == "string") return new Error(t2);
  if (typeof t2 == "object" && t2 !== null && !Array.isArray(t2)) {
    let r = t2, { message: n } = r, s = M(r, ["message"]), a = new Error(typeof n == "string" ? n : j);
    return Object.assign(a, s);
  }
  let e = new Error(j);
  return Object.assign(e, { cause: t2 });
}
function pe(t2, e, r) {
  return x(this, null, function* () {
    var n, s;
    try {
      if (typeof fetch < "u" && typeof AbortSignal < "u") {
        let a;
        if (r) {
          let c = new AbortController();
          a = c.signal, setTimeout(() => c.abort(), r);
        }
        let u2 = yield fetch(t2, R(d({}, e), { signal: a })), o = yield u2.text();
        return { status: u2.status, body: o };
      }
      return yield new Promise((a, u2) => {
        var c, i;
        let o = new XMLHttpRequest();
        if (o.open((c = e == null ? void 0 : e.method) != null ? c : "GET", t2), o.onload = () => a({ status: o.status, body: o.responseText }), o.onerror = () => u2(new Error("XHR Network Error")), e == null ? void 0 : e.headers) for (let [h, y] of Object.entries(e.headers)) o.setRequestHeader(h, y);
        if (r) {
          let h = setTimeout(() => {
            o.abort(), u2(new Error("Request timed out"));
          }, r);
          o.onloadend = () => {
            clearTimeout(h);
          };
        }
        o.send((i = e == null ? void 0 : e.body) == null ? void 0 : i.toString());
      });
    } catch (a) {
      return { status: 0, body: (s = (n = a == null ? void 0 : a.toString) == null ? void 0 : n.call(a)) != null ? s : "Unknown error" };
    }
  });
}
var f, N = (f = class {
  constructor(e) {
    l(this, "apiURL");
    l(this, "dsn");
    l(this, "environment");
    l(this, "release");
    l(this, "sampleRate");
    l(this, "debug");
    l(this, "_scope");
    l(this, "shouldBuffer", false);
    l(this, "bufferlimit", 20);
    l(this, "buffer", []);
    var r, n, s, a, u2;
    this.environment = e.environment, this.release = e.release, this.sampleRate = (r = e.sampleRate) != null ? r : 1, this.debug = (n = e.debug) != null ? n : false, this._scope = (s = e.scope) != null ? s : new Q(), this.apiURL = ue(e.dsn), this.dsn = e.dsn, this.shouldBuffer = (a = e.buffer) != null ? a : false, this.bufferlimit = (u2 = e.bufferLimit) != null ? u2 : 20;
  }
  static init(e) {
    f._instance || (f._instance = new f(e));
  }
  static get instance() {
    if (!f._instance) throw new Error("Sentry has not been initialized");
    return f._instance;
  }
  log(...e) {
    this.debug && console.log(...e);
  }
  get scope() {
    return this._scope;
  }
  static get scope() {
    return f.instance.scope;
  }
  withScope(e) {
    let r = this._scope.child();
    e(r);
  }
  static withScope(e) {
    f.instance.withScope(e);
  }
  captureException(e, r) {
    this.captureEvent({ type: "exception", level: "error", error: de(e), scope: r != null ? r : this._scope });
  }
  static captureException(e, r) {
    f.instance.captureException(e, r);
  }
  captureMessage(e, r = "info", n) {
    this.captureEvent({ type: "message", level: r, message: e, scope: n != null ? n : this._scope });
  }
  static captureMessage(e, r = "info", n) {
    f.instance.captureMessage(e, r, n);
  }
  captureEvent(e) {
    if (Math.random() >= this.sampleRate) {
      this.log("Dropped event due to sample rate");
      return;
    }
    if (this.shouldBuffer) {
      if (this.buffer.length >= this.bufferlimit) return;
      this.buffer.push(e);
    } else this.sendEvent(e);
  }
  sendEvent(e, r = 5e3) {
    return x(this, null, function* () {
      try {
        this.log("Sending sentry event", e);
        let n = le(e, this.environment, this.release), s = { event_id: n.event_id, dsn: this.dsn }, a = { type: "event" }, u2 = JSON.stringify(s) + `
` + JSON.stringify(a) + `
` + JSON.stringify(n), o = yield pe(this.apiURL, { method: "POST", headers: { "Content-Type": "application/x-sentry-envelope" }, body: u2 }, r);
        this.log("Sentry response", o.status), o.status !== 200 && (console.log(o.body), console.error("Failed to send event to Sentry", o));
      } catch (n) {
        console.error("Failed to send event", n);
      }
    });
  }
  flush(e = 5e3) {
    return x(this, null, function* () {
      try {
        this.log("Flushing sentry events", this.buffer.length);
        let r = this.buffer.splice(0, this.buffer.length).map((n) => this.sendEvent(n, e));
        yield Promise.all(r), this.log("Flushed all events");
      } catch (r) {
        console.error("Failed to flush events", r);
      }
    });
  }
  static flush(e = 5e3) {
    return f.instance.flush(e);
  }
  static reset() {
    f._instance = void 0;
  }
}, l(f, "_instance"), f);
var fe = "https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6", he = "2.3.0", me = "production";
function H(t2 = true) {
  if (!t2) return q();
  N.init({ dsn: fe, release: he, environment: me });
  let e = N.scope;
  return B(e), q(e);
}
function q(t2 = null) {
  return { addBreadcrumb: (e) => {
    t2 && t2.addBreadcrumb(e);
  }, captureRequest: (e) => {
    t2 && t2.setRequest(e);
  }, captureException: (e) => {
    t2 && N.captureException(e, t2);
  } };
}
function W({ scriptLocation: t2, query: e, loadAsync: r = true, crossOrigin: n = "anonymous", apihost: s = "https://js.hcaptcha.com", cleanup: a = false, secureApi: u2 = false, scriptSource: o = "" } = {}, c) {
  let i = S(t2), h = O(i);
  return new Promise((y, E) => {
    let m = h.document.createElement("script");
    m.id = L, o ? m.src = `${o}?onload=${b}` : u2 ? m.src = `${s}/1/secure-api.js?onload=${b}` : m.src = `${s}/1/api.js?onload=${b}`, m.crossOrigin = n, m.async = r;
    let _ = (v, X) => {
      try {
        !u2 && a && i.removeChild(m), X(v);
      } catch (Y) {
        E(Y);
      }
    };
    m.onload = (v) => _(v, y), m.onerror = (v) => {
      c && c(m.src), _(v, E);
    }, m.src += e !== "" ? `&${e}` : "", i.appendChild(m);
  });
}
var C = [];
function be(t2 = { cleanup: false }, e) {
  try {
    e.addBreadcrumb({ category: g, message: "hCaptcha loader params", data: t2 });
    let r = S(t2.scriptLocation), n = O(r), s = C.find(({ scope: u2 }) => u2 === n.window);
    if (s) return e.addBreadcrumb({ category: g, message: "hCaptcha already loaded" }), s.promise;
    let a = new Promise((u2, o) => x(this, null, function* () {
      try {
        n.window[b] = () => {
          e.addBreadcrumb({ category: g, message: "hCaptcha script called onload function" }), u2(n.window.hcaptcha);
        };
        let c = U({ custom: t2.custom, render: t2.render, sentry: t2.sentry, assethost: t2.assethost, imghost: t2.imghost, reportapi: t2.reportapi, endpoint: t2.endpoint, host: t2.host, recaptchacompat: t2.recaptchacompat, hl: t2.hl, uj: t2.uj });
        yield W(d({ query: c }, t2), (i) => {
          e.captureRequest({ url: i, method: "GET" });
        }), e.addBreadcrumb({ category: g, message: "hCaptcha loaded", data: s });
      } catch (c) {
        e.addBreadcrumb({ category: g, message: "hCaptcha failed to load" });
        let i = C.findIndex((h) => h.scope === n.window);
        i !== -1 && C.splice(i, 1), o(new Error(T));
      }
    }));
    return C.push({ promise: a, scope: n.window }), a;
  } catch (r) {
    return e.captureException(r), Promise.reject(new Error(T));
  }
}
function $(t2, e, r = 0) {
  return x(this, null, function* () {
    var u2, o;
    let n = (u2 = t2.maxRetries) != null ? u2 : 2, s = (o = t2.retryDelay) != null ? o : 1e3, a = r < n ? "Retry loading hCaptcha Api" : "Exceeded maximum retries";
    try {
      return yield be(t2, e);
    } catch (c) {
      return e.addBreadcrumb({ category: g, message: a }), r >= n ? (e.captureException(c), Promise.reject(c)) : (e.addBreadcrumb({ category: g, message: `Waiting ${s}ms before retry attempt ${r + 1}` }), yield F(s), r += 1, $(t2, e, r));
    }
  });
}
function ye() {
  return x(this, arguments, function* (t2 = {}) {
    let e = H(t2.sentry);
    return yield $(t2, e);
  });
}
function getFrame(element) {
  var doc = element && element.ownerDocument || document;
  var win = doc.defaultView || doc.parentWindow || window;
  return {
    document: doc,
    window: win
  };
}
function getMountElement(element) {
  return element || document.head;
}
var HCaptcha = /* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(HCaptcha2, _React$Component);
  function HCaptcha2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this._hcaptcha = void 0;
    _this.renderCaptcha = _this.renderCaptcha.bind(_assertThisInitialized(_this));
    _this.resetCaptcha = _this.resetCaptcha.bind(_assertThisInitialized(_this));
    _this.removeCaptcha = _this.removeCaptcha.bind(_assertThisInitialized(_this));
    _this.isReady = _this.isReady.bind(_assertThisInitialized(_this));
    _this._onReady = null;
    _this.loadCaptcha = _this.loadCaptcha.bind(_assertThisInitialized(_this));
    _this.handleOnLoad = _this.handleOnLoad.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleExpire = _this.handleExpire.bind(_assertThisInitialized(_this));
    _this.handleError = _this.handleError.bind(_assertThisInitialized(_this));
    _this.handleOpen = _this.handleOpen.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    _this.handleChallengeExpired = _this.handleChallengeExpired.bind(_assertThisInitialized(_this));
    _this.ref = /* @__PURE__ */ M$1();
    _this.apiScriptRequested = false;
    _this.sentryHub = null;
    _this.captchaId = "";
    _this._pendingExecute = null;
    _this.state = {
      isApiReady: false,
      isRemoved: false,
      elementId: props.id
    };
    return _this;
  }
  var _proto = HCaptcha2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    var element = getMountElement(this.props.scriptLocation);
    var frame = getFrame(element);
    this._hcaptcha = frame.window.hcaptcha || void 0;
    var isApiReady = typeof this._hcaptcha !== "undefined";
    if (isApiReady) {
      this.setState({
        isApiReady: true
      }, function() {
        _this2.renderCaptcha();
      });
      return;
    }
    this.loadCaptcha();
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    this._cancelPendingExecute("react-component-unmounted");
    if (!this.isReady()) {
      return;
    }
    hcaptcha.reset(captchaId);
    hcaptcha.remove(captchaId);
  };
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isApiReady !== nextState.isApiReady || this.state.isRemoved !== nextState.isRemoved) {
      return false;
    }
    return true;
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this3 = this;
    var keys = ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"];
    var match = keys.every(function(key) {
      return prevProps[key] === _this3.props[key];
    });
    if (!match) {
      this.removeCaptcha(function() {
        _this3.renderCaptcha();
      });
    }
  };
  _proto.loadCaptcha = function loadCaptcha() {
    if (this.apiScriptRequested) {
      return;
    }
    var _this$props = this.props, apihost = _this$props.apihost, assethost = _this$props.assethost, endpoint = _this$props.endpoint, host = _this$props.host, imghost = _this$props.imghost, hl = _this$props.languageOverride, reCaptchaCompat = _this$props.reCaptchaCompat, reportapi = _this$props.reportapi, sentry = _this$props.sentry, custom = _this$props.custom, loadAsync = _this$props.loadAsync, scriptLocation = _this$props.scriptLocation, scriptSource = _this$props.scriptSource, secureApi = _this$props.secureApi, _this$props$cleanup = _this$props.cleanup, cleanup = _this$props$cleanup === void 0 ? true : _this$props$cleanup, userJourneys = _this$props.userJourneys;
    var mountParams = {
      render: "explicit",
      apihost,
      assethost,
      endpoint,
      hl,
      host,
      imghost,
      recaptchacompat: reCaptchaCompat === false ? "off" : null,
      reportapi,
      sentry,
      custom,
      loadAsync,
      scriptLocation,
      scriptSource,
      secureApi,
      cleanup,
      uj: userJourneys !== void 0 ? userJourneys : false
    };
    ye(mountParams).then(this.handleOnLoad, this.handleError)["catch"](this.handleError);
    this.apiScriptRequested = true;
  };
  _proto.renderCaptcha = function renderCaptcha(onRender) {
    var _this4 = this;
    var onReady = this.props.onReady;
    var isApiReady = this.state.isApiReady;
    var captchaId = this.captchaId;
    if (!isApiReady || captchaId) return;
    var renderParams = Object.assign({
      "open-callback": this.handleOpen,
      "close-callback": this.handleClose,
      "error-callback": this.handleError,
      "chalexpired-callback": this.handleChallengeExpired,
      "expired-callback": this.handleExpire,
      "callback": this.handleSubmit
    }, this.props, {
      hl: this.props.hl || this.props.languageOverride,
      languageOverride: void 0
    });
    var hcaptcha = this._hcaptcha;
    var id = hcaptcha.render(this.ref.current, renderParams);
    this.captchaId = id;
    this.setState({
      isRemoved: false
    }, function() {
      onRender && onRender();
      onReady && onReady();
      _this4._onReady && _this4._onReady(id);
    });
  };
  _proto.resetCaptcha = function resetCaptcha() {
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    if (!this.isReady()) {
      return;
    }
    hcaptcha.reset(captchaId);
    this._cancelPendingExecute("hcaptcha-reset");
  };
  _proto.removeCaptcha = function removeCaptcha(callback) {
    var _this5 = this;
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    this._cancelPendingExecute("hcaptcha-removed");
    if (!this.isReady()) {
      return;
    }
    this.setState({
      isRemoved: true
    }, function() {
      _this5.captchaId = "";
      hcaptcha.remove(captchaId);
      callback && callback();
    });
  };
  _proto.handleOnLoad = function handleOnLoad() {
    var _this6 = this;
    this.setState({
      isApiReady: true
    }, function() {
      var element = getMountElement(_this6.props.scriptLocation);
      var frame = getFrame(element);
      _this6._hcaptcha = frame.window.hcaptcha;
      _this6.renderCaptcha(function() {
        var onLoad = _this6.props.onLoad;
        if (onLoad) onLoad();
      });
    });
  };
  _proto.handleSubmit = function handleSubmit(event) {
    var onVerify = this.props.onVerify;
    var isRemoved = this.state.isRemoved;
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    if (typeof hcaptcha === "undefined" || isRemoved) return;
    var token = hcaptcha.getResponse(captchaId);
    var ekey = hcaptcha.getRespKey(captchaId);
    if (onVerify) onVerify(token, ekey);
  };
  _proto.handleExpire = function handleExpire() {
    var onExpire = this.props.onExpire;
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    if (!this.isReady()) {
      return;
    }
    hcaptcha.reset(captchaId);
    if (onExpire) onExpire();
  };
  _proto.handleError = function handleError(event) {
    var onError = this.props.onError;
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    if (this.isReady()) {
      hcaptcha.reset(captchaId);
    }
    if (onError) onError(event);
  };
  _proto.isReady = function isReady() {
    var _this$state = this.state, isApiReady = _this$state.isApiReady, isRemoved = _this$state.isRemoved;
    return isApiReady && !isRemoved;
  };
  _proto._cancelPendingExecute = function _cancelPendingExecute(reason) {
    if (!this._pendingExecute) {
      return;
    }
    var pending = this._pendingExecute;
    this._pendingExecute = null;
    var error = new Error(reason);
    pending.reject(error);
  };
  _proto.handleOpen = function handleOpen() {
    if (!this.isReady() || !this.props.onOpen) {
      return;
    }
    this.props.onOpen();
  };
  _proto.handleClose = function handleClose() {
    if (!this.isReady() || !this.props.onClose) {
      return;
    }
    this.props.onClose();
  };
  _proto.handleChallengeExpired = function handleChallengeExpired() {
    if (!this.isReady() || !this.props.onChalExpired) {
      return;
    }
    this.props.onChalExpired();
  };
  _proto.execute = function execute(opts) {
    var _this7 = this;
    if (opts === void 0) {
      opts = null;
    }
    opts = typeof opts === "object" ? opts : null;
    try {
      var hcaptcha = this._hcaptcha;
      var captchaId = this.captchaId;
      if (opts && opts.async && this._pendingExecute) {
        this._cancelPendingExecute("hcaptcha-execute-replaced");
      }
      if (!this.isReady()) {
        if (opts && opts.async) {
          return new Promise(function(resolve, reject) {
            _this7._pendingExecute = {
              resolve,
              reject
            };
            _this7._onReady = function(id) {
              if (!_this7._pendingExecute) {
                return;
              }
              try {
                var _result = hcaptcha.execute(id, opts);
                if (_result && typeof _result.then === "function") {
                  _result.then(function(val) {
                    _this7._pendingExecute = null;
                    resolve(val);
                  })["catch"](function(err) {
                    _this7._pendingExecute = null;
                    reject(err);
                  });
                } else {
                  _this7._pendingExecute = null;
                  reject(new Error("hcaptcha-execute-no-promise"));
                }
              } catch (e) {
                _this7._pendingExecute = null;
                reject(e);
              }
            };
          });
        } else {
          this._onReady = function(id) {
            hcaptcha.execute(id, opts);
          };
          return null;
        }
      }
      var result = hcaptcha.execute(captchaId, opts);
      if (opts && opts.async && result && typeof result.then === "function") {
        return new Promise(function(resolve, reject) {
          _this7._pendingExecute = {
            resolve,
            reject
          };
          result.then(function(val) {
            _this7._pendingExecute = null;
            resolve(val);
          })["catch"](function(err) {
            _this7._pendingExecute = null;
            reject(err);
          });
        });
      }
      return result;
    } catch (error) {
      if (opts && opts.async) {
        return Promise.reject(error);
      }
      return null;
    }
  };
  _proto.close = function close() {
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    this._cancelPendingExecute("hcaptcha-closed");
    if (!this.isReady()) {
      return;
    }
    return hcaptcha.close(captchaId);
  };
  _proto.setData = function setData(data) {
    var hcaptcha = this._hcaptcha;
    var captchaId = this.captchaId;
    if (!this.isReady()) {
      return;
    }
    if (data && typeof data !== "object") {
      data = null;
    }
    hcaptcha.setData(captchaId, data);
  };
  _proto.getResponse = function getResponse() {
    var hcaptcha = this._hcaptcha;
    return hcaptcha.getResponse(this.captchaId);
  };
  _proto.getRespKey = function getRespKey() {
    var hcaptcha = this._hcaptcha;
    return hcaptcha.getRespKey(this.captchaId);
  };
  _proto.render = function render() {
    var elementId = this.state.elementId;
    return /* @__PURE__ */ k("div", {
      ref: this.ref,
      id: elementId
    });
  };
  return HCaptcha2;
})(C$1);
const t = ({ delayedExecution: t2, captchaContext: o, ...a }) => {
  let { setError: c, setToken: i, setExecuting: n, execute: s, siteKey: p2, ref: d2 } = o;
  return u(HCaptcha, { ref: d2, sitekey: p2 ?? "", size: "invisible", onLoad: () => {
    t2 || s();
  }, onVerify: (e) => {
    var _a;
    (_a = a.onSuccess) == null ? void 0 : _a.call(a, e), i(e), n(false);
  }, onError: (e) => {
    var _a;
    (_a = a.onError) == null ? void 0 : _a.call(a, e), c("Captcha failed"), n(false);
  }, onExpire: () => {
    var _a, _b;
    (_a = a.onExpire) == null ? void 0 : _a.call(a, "");
    try {
      (_b = d2.current) == null ? void 0 : _b.resetCaptcha(), c(void 0), i(void 0);
    } catch (e) {
      c("expired_and_failed_reset");
    }
  } });
};
export {
  t as HCaptchaWrapper,
  t as default
};
