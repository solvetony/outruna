import { dI as r$1, dJ as t$1, dK as t$2, dL as a$3, dM as e$2, dN as e$3, dO as o$1, dP as o$2, dQ as t$3, dR as t$4, dS as e$4, dT as t$5, dU as gn, dg as A, de as q$2, dh as y$2, df as d, di as T, dV as p$2, dW as o$3, dX as l, dY as x$1, dZ as X$1, d_ as a$4, d$ as E$2, e0 as Y$1, e1 as g$1, e2 as a$5, e3 as y$3, e4 as n, e5 as L$2, e6 as m, e7 as l$1, e8 as n$1, e9 as K$1, ea as o$4, eb as i, ec as o$5, ed as i$1, dm as k$1, ee as n$2, ef as T$1, eg as k$2, eh as x$2, ei as k$3, ej as u$3, ek as G$2, el as c$2, em as S$2, en as V$2, eo as u$4, ep as u$5, eq as N$1, er as p$3, es as f$2, et as y$4, eu as d$1, ev as x$3, ew as le, ex as H$2, dG as S$3, ey as i$2, ez as A$1, eA as k$4, eB as c$3, eC as bn, eD as o$6, eE as R, eF as T$2, eG as K$2, eH as H$3, eI as I, y as createPublicClient, z as http, dE as n$3, dk as u$6, du as gt$1 } from "./index-Cw7cGahV.js";
import { n as n$4 } from "./getErc20Balance-DHgWH7_1-88g-TlBV.js";
import { k as k$5, u as u$7 } from "./ModalHeader-C1WIsRkF-CdF_tbkR.js";
import { c as c$4, s as s$6 } from "./Layouts-BlFm53ED-sn3bL9j4.js";
import { t as t$6 } from "./FundWalletMethodHeader-G5sXf6Zt-BiiZpNCn.js";
import { s as s$5, e as e$7, n as n$6 } from "./Value-tcJV9e0L-B2MkJpNo.js";
import { e as e$8 } from "./ErrorMessage-D8VaAP5m-ClsdzmKI.js";
import { r as r$2 } from "./Subtitle-CV-2yKE4-DYO6m2P4.js";
import { e as e$5 } from "./Title-BnzYV3Is-C0li3V44.js";
import { F as ForwardRef } from "./WalletIcon-CUBGtC_3.js";
import { e as e$6 } from "./getChainName-DjpPdUSc-D27InAbL.js";
import { n as n$7 } from "./Chip-D2-wZOHJ-B2XlgAss.js";
import { w as w$2 } from "./TransferOrBridgeLoadingScreen-Bi6Efsb0-DFRsV5NU.js";
import { d as d$2, e as e$9 } from "./shared-FM0rljBt-rCzEWQL2.js";
import { F as ForwardRef$1 } from "./ChevronDownIcon-RazvJHs6.js";
import { t as t$7 } from "./formatErc20TokenAmount-BuPk9xcy-DA50wSFk.js";
import { c as c$6 } from "./ethers-DFE0Hz-t-CVcjYk0m.js";
import { a as a$6, p as p$4, s as s$4, c as c$5, l as l$2 } from "./styles-DLlsr-XC-CVLrKLhV.js";
import { n as n$5 } from "./formatters-BV0McdBE.js";
import { u as useFloating, i as inner, a as useInnerOffset, b as useInteractions } from "./floating-ui.react-CYyT2_ig.js";
import { o as offset, s as shift, f as flip, a as size, b as autoUpdate } from "./floating-ui.react-dom-C4gaCUET.js";
const E$1 = { [t$5.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", [e$4.id]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", [t$4.id]: "0x0b2c639c533813f4aa9d7837caf62653d097ff85", [t$3.id]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7", [o$2.id]: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359", [o$1.id]: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582", [e$3.id]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", [e$2.id]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", [a$3.id]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", [t$2.id]: "0x5425890298aed601595a70ab815c96711a31bc65", [t$1.id]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", [r$1.id]: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d" };
const $d447af545b77c9f1$export$b204af158042fbac = (el) => {
  return (el == null ? void 0 : el.ownerDocument) ?? document;
};
const $d447af545b77c9f1$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $d447af545b77c9f1$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $d447af545b77c9f1$var$isNode(value) {
  return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $d447af545b77c9f1$export$af51f0f06c0f328a(node) {
  return $d447af545b77c9f1$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}
let $6a20a7989e6c817a$var$_shadowDOM = false;
function $6a20a7989e6c817a$export$98658e8c59125e6a() {
  return $6a20a7989e6c817a$var$_shadowDOM;
}
function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
  if (!$6a20a7989e6c817a$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : false;
  if (!node || !otherNode) return false;
  let currentNode = otherNode;
  while (currentNode !== null) {
    if (currentNode === node) return true;
    if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
      currentNode = currentNode.assignedSlot.parentNode;
    else if ($d447af545b77c9f1$export$af51f0f06c0f328a(currentNode))
      currentNode = currentNode.host;
    else currentNode = currentNode.parentNode;
  }
  return false;
}
const $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document) => {
  var _a;
  if (!$6a20a7989e6c817a$export$98658e8c59125e6a()) return doc.activeElement;
  let activeElement = doc.activeElement;
  while (activeElement && "shadowRoot" in activeElement && ((_a = activeElement.shadowRoot) == null ? void 0 : _a.activeElement)) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
  if ($6a20a7989e6c817a$export$98658e8c59125e6a() && event.target instanceof Element && event.target.shadowRoot) {
    if ("composedPath" in event) return event.composedPath()[0] ?? null;
    else if ("composedPath" in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
  }
  return event.target;
}
function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
  if ($1969ac565cfec8d0$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
    element.focus();
    $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
  }
}
let $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
function $1969ac565cfec8d0$var$supportsPreventScroll() {
  if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
    $1969ac565cfec8d0$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $1969ac565cfec8d0$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch {
    }
  }
  return $1969ac565cfec8d0$var$supportsPreventScrollCached;
}
function $1969ac565cfec8d0$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
const $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== "undefined" ? gn.useLayoutEffect : () => {
};
function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {
  };
  return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
  let stateRef = A({
    isFocused: false,
    observer: null
  });
  $c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  return q$2((e2) => {
    let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e2);
    if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = eventTarget;
      let onBlurHandler = (e3) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $a92dc41f639950be$export$525bc4921d56d4a(e3);
          onBlur == null ? void 0 : onBlur(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        var _a;
        if (stateRef.current.isFocused && target.disabled) {
          (_a = stateRef.current.observer) == null ? void 0 : _a.disconnect();
          let relatedTargetEl = target === $23f2114a1b82827e$export$cd4e5573fbe2b576() ? null : $23f2114a1b82827e$export$cd4e5573fbe2b576();
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    onBlur
  ]);
}
let $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
function $2add3ce32c6007eb$var$testUserAgent(re) {
  var _a;
  if (typeof window === "undefined" || window.navigator == null) return false;
  let brands = (_a = window.navigator["userAgentData"]) == null ? void 0 : _a.brands;
  return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $2add3ce32c6007eb$var$testPlatform(re) {
  var _a;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_a = window.navigator["userAgentData"]) == null ? void 0 : _a.platform) || window.navigator.platform) : false;
}
function $2add3ce32c6007eb$var$cached(fn) {
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
const $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
});
const $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && !$2add3ce32c6007eb$export$6446a186d09e379e();
});
const $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Chrome/i);
});
const $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
});
const $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Firefox/i);
});
function $b5c62b033c25b96d$export$60278871457622de(event) {
  if (event.pointerType === "" && event.isTrusted) return true;
  if ($2add3ce32c6007eb$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _a, _b;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ($2add3ce32c6007eb$export$b7d78993b74f766d() && ((_b = (_a = window.event) == null ? void 0 : _a.type) == null ? void 0 : _b.startsWith("key")) && target.target === "_blank") {
    if ($2add3ce32c6007eb$export$9ac100e40613ea10()) metaKey = true;
    else ctrlKey = true;
  }
  let event = $2add3ce32c6007eb$export$78551043582a6a98() && $2add3ce32c6007eb$export$9ac100e40613ea10() && !$2add3ce32c6007eb$export$7bef049ce92e4224() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    detail: 1,
    bubbles: true,
    cancelable: true
  });
  $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
  $1969ac565cfec8d0$export$de79e2c695e052f3(target);
  target.dispatchEvent(event);
  $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
}
$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
let $8f5a2122b0992be3$var$currentModality = null;
const $8f5a2122b0992be3$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
let $8f5a2122b0992be3$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
let $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
let $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
const $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e2);
}
function $8f5a2122b0992be3$var$isValidKey(e2) {
  return !(e2.metaKey || !$2add3ce32c6007eb$export$9ac100e40613ea10() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e2) {
  $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
  if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $8f5a2122b0992be3$var$isValidKey(e2)) {
    $8f5a2122b0992be3$var$currentModality = "keyboard";
    $8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e2);
  }
}
function $8f5a2122b0992be3$var$handlePointerEvent(e2) {
  $8f5a2122b0992be3$var$currentModality = "pointer";
  "pointerType" in e2 ? e2.pointerType : "mouse";
  if (e2.type === "mousedown" || e2.type === "pointerdown") {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e2);
  }
}
function $8f5a2122b0992be3$var$handleClickEvent(e2) {
  if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $b5c62b033c25b96d$export$60278871457622de(e2)) {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$currentModality = "virtual";
  }
}
function $8f5a2122b0992be3$var$handleFocusEvent(e2) {
  let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a($23f2114a1b82827e$export$e58f029f0fbfdb29(e2));
  let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(e2));
  if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e2) === ownerWindow || $23f2114a1b82827e$export$e58f029f0fbfdb29(e2) === ownerDocument || $a92dc41f639950be$export$fda7da73ab5d4c48 || !e2.isTrusted) return;
  if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
    $8f5a2122b0992be3$var$currentModality = "virtual";
    $8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e2);
  }
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
}
function $8f5a2122b0992be3$var$handleWindowBlur() {
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
}
function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
  const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
  if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
  const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  }
  $8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
};
function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
  const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $8f5a2122b0992be3$export$2f1888112f558a7d();
function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
  return $8f5a2122b0992be3$var$currentModality !== "pointer";
}
const $8f5a2122b0992be3$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
  let eventTarget = e2 ? $23f2114a1b82827e$export$e58f029f0fbfdb29(e2) : void 0;
  let document1 = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
  let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(eventTarget);
  const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
  let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(document1);
  isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
}
function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $8f5a2122b0992be3$var$setupGlobalFocusEvents();
  y$2(() => {
    if ((opts == null ? void 0 : opts.enabled) === false) return;
    let handler = (modality, e2) => {
      if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!(opts == null ? void 0 : opts.isTextInput), modality, e2)) return;
      fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
    };
    $8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
    return () => {
      $8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
    };
  }, deps);
}
function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = q$2((e2) => {
    if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e2) === e2.currentTarget) {
      if (onBlurProp) onBlurProp(e2);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
  const onFocus = q$2((e2) => {
    let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e2);
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
    const activeElement = ownerDocument ? $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument) : $23f2114a1b82827e$export$cd4e5573fbe2b576();
    if (eventTarget === e2.currentTarget && eventTarget === activeElement) {
      if (onFocusProp) onFocusProp(e2);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e2);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
  let globalListeners = A(/* @__PURE__ */ new Map());
  let addGlobalListener = q$2((eventTarget, type, listener, options) => {
    let fn = (options == null ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = q$2((eventTarget, type, listener, options) => {
    var _a;
    let fn = ((_a = globalListeners.current.get(listener)) == null ? void 0 : _a.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = q$2(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  y$2(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function $2c9edc598a03d523$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = A({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let onBlur = q$2((e2) => {
    if (!$23f2114a1b82827e$export$4282f70798064fe0(e2.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e2))) return;
    if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(e2.currentTarget, e2.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin) onBlurWithin(e2);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
  let onFocus = q$2((e2) => {
    if (!$23f2114a1b82827e$export$4282f70798064fe0(e2.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e2))) return;
    let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e2);
    const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
    const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === eventTarget) {
      if (onFocusWithin) onFocusWithin(e2);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e2);
      let currentTarget = e2.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e3) => {
        let eventTarget2 = $23f2114a1b82827e$export$e58f029f0fbfdb29(e3);
        if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(currentTarget, eventTarget2)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: eventTarget2
          });
          $a92dc41f639950be$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
          let event = $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled) return {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = A({
    isFocused: false,
    isFocusVisible: autoFocus || $8f5a2122b0992be3$export$b9b3dfddab17db27()
  });
  let [isFocused, setFocused] = d(false);
  let [isFocusVisibleState, setFocusVisible] = d(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = q$2(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = q$2((isFocused2) => {
    state.current.isFocused = isFocused2;
    state.current.isFocusVisible = $8f5a2122b0992be3$export$b9b3dfddab17db27();
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  $8f5a2122b0992be3$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [
    isTextInput,
    isFocused
  ], {
    enabled: isFocused,
    isTextInput
  });
  let { focusProps } = $1e74c67db218ce67$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
let $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
let $e969f22b6713ca4a$var$hoverCount = 0;
function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
  $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
  }, 500);
}
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e2) {
  if (e2.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
  let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(null);
  if (typeof ownerDocument === "undefined") return;
  if ($e969f22b6713ca4a$var$hoverCount === 0) {
    if (typeof PointerEvent !== "undefined") ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
  }
  $e969f22b6713ca4a$var$hoverCount++;
  return () => {
    $e969f22b6713ca4a$var$hoverCount--;
    if ($e969f22b6713ca4a$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
  };
}
function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = d(false);
  let state = A({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  y$2($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
  let { hoverProps, triggerHoverEnd } = T(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !$23f2114a1b82827e$export$4282f70798064fe0(event.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(event))) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener($d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(event)), "pointerover", (e2) => {
        if (state.isHovered && state.target && !$23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e2))) triggerHoverEnd2(e2, e2.pointerType);
      }, {
        capture: true
      });
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered || !target) return;
      state.isHovered = false;
      removeAllGlobalListeners();
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e2) => {
        if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse") return;
        triggerHoverStart(e2, e2.pointerType);
      };
      hoverProps2.onPointerLeave = (e2) => {
        if (!isDisabled && $23f2114a1b82827e$export$4282f70798064fe0(e2.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e2))) triggerHoverEnd2(e2, e2.pointerType);
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  y$2(() => {
    if (isDisabled) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}
function E(e2) {
  let t2 = e2.width / 2, n2 = e2.height / 2;
  return { top: e2.clientY - n2, right: e2.clientX + t2, bottom: e2.clientY + n2, left: e2.clientX - t2 };
}
function P$1(e2, t2) {
  return !(!e2 || !t2 || e2.right < t2.left || e2.left > t2.right || e2.bottom < t2.top || e2.top > t2.bottom);
}
function w$1({ disabled: e2 = false } = {}) {
  let t2 = A(null), [n2, l$12] = d(false), r2 = p$2(), o2 = o$3(() => {
    t2.current = null, l$12(false), r2.dispose();
  }), f2 = o$3((s2) => {
    if (r2.dispose(), t2.current === null) {
      t2.current = s2.currentTarget, l$12(true);
      {
        let i2 = l(s2.currentTarget);
        r2.addEventListener(i2, "pointerup", o2, false), r2.addEventListener(i2, "pointermove", (c2) => {
          if (t2.current) {
            let p2 = E(c2);
            l$12(P$1(p2, t2.current.getBoundingClientRect()));
          }
        }, false), r2.addEventListener(i2, "pointercancel", o2, false);
      }
    }
  });
  return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o2, onClick: o2 } };
}
let e$1 = X$1(void 0);
function u$2() {
  return x$1(e$1);
}
function s$3(l2) {
  let e2 = l2.parentElement, t2 = null;
  for (; e2 && !a$4(e2); ) E$2(e2) && (t2 = e2), e2 = e2.parentElement;
  let i2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return i2 && r(t2) ? false : i2;
}
function r(l2) {
  if (!l2) return false;
  let e2 = l2.previousElementSibling;
  for (; e2 !== null; ) {
    if (E$2(e2)) return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}
let L$1 = X$1(null);
L$1.displayName = "LabelContext";
function C$1() {
  let n2 = x$1(L$1);
  if (n2 === null) {
    let l2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l2, C$1), l2;
  }
  return n2;
}
function N(n2) {
  var a2, e2, o2;
  let l2 = (e2 = (a2 = x$1(L$1)) == null ? void 0 : a2.value) != null ? e2 : void 0;
  return ((o2 = void 0) != null ? o2 : 0) > 0 ? [l2, ...n2].filter(Boolean).join(" ") : l2;
}
function V$1({ inherit: n2 = false } = {}) {
  let l2 = N(), [a2, e2] = d([]), o2 = n2 ? [l2, ...a2].filter(Boolean) : a2;
  return [o2.length > 0 ? o2.join(" ") : void 0, T(() => function(t2) {
    let p2 = o$3((i2) => (e2((u2) => [...u2, i2]), () => e2((u2) => {
      let d2 = u2.slice(), f2 = d2.indexOf(i2);
      return f2 !== -1 && d2.splice(f2, 1), d2;
    }))), b = T(() => ({ register: p2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [p2, t2.slot, t2.name, t2.props, t2.value]);
    return gn.createElement(L$1.Provider, { value: b }, t2.children);
  }, [e2])];
}
let G$1 = "label";
function U(n$22, l2) {
  var y2;
  let a2 = g$1(), e2 = C$1(), o2 = u$2(), T2 = a$5(), { id: t2 = `headlessui-label-${a2}`, htmlFor: p2 = o2 != null ? o2 : (y2 = e2.props) == null ? void 0 : y2.htmlFor, passive: b = false, ...i2 } = n$22, u2 = y$3(l2);
  n(() => e2.register(t2), [t2, e2.register]);
  let d2 = o$3((s2) => {
    let g2 = s2.currentTarget;
    if (!(s2.target !== s2.currentTarget && L$2(s2.target)) && (m(g2) && s2.preventDefault(), e2.props && "onClick" in e2.props && typeof e2.props.onClick == "function" && e2.props.onClick(s2), m(g2))) {
      let r2 = document.getElementById(g2.htmlFor);
      if (r2) {
        let E2 = r2.getAttribute("disabled");
        if (E2 === "true" || E2 === "") return;
        let x2 = r2.getAttribute("aria-disabled");
        if (x2 === "true" || x2 === "") return;
        (l$1(r2) && (r2.type === "file" || r2.type === "radio" || r2.type === "checkbox") || r2.role === "radio" || r2.role === "checkbox" || r2.role === "switch") && r2.click(), r2.focus({ preventScroll: true });
      }
    }
  }), f2 = n$1({ ...e2.slot, disabled: T2 || false }), c2 = { ref: u2, ...e2.props, id: t2, htmlFor: p2, onClick: d2 };
  return b && ("onClick" in c2 && (delete c2.htmlFor, delete c2.onClick), "onClick" in i2 && delete i2.onClick), K$1()({ ourProps: c2, theirProps: i2, slot: f2, defaultTag: p2 ? G$1 : "div", name: e2.name || "Label" });
}
let j = Y$1(U);
Object.assign(j, {});
function h$1(i2) {
  if (i2 === null) return { width: 0, height: 0 };
  let { width: t2, height: e2 } = i2.getBoundingClientRect();
  return { width: t2, height: e2 };
}
function w(i2, t2, e2 = false) {
  let [r2, f2] = d(() => h$1(t2));
  return n(() => {
    if (!t2 || !i2) return;
    let n2 = o$4();
    return n2.requestAnimationFrame(function s2() {
      n2.requestAnimationFrame(s2), f2((u2) => {
        let o2 = h$1(t2);
        return o2.width === u2.width && o2.height === u2.height ? u2 : o2;
      });
    }), () => {
      n2.dispose();
    };
  }, [t2, i2]), e2 ? { width: `${r2.width}px`, height: `${r2.height}px` } : r2;
}
var g = ((f2) => (f2[f2.Left = 0] = "Left", f2[f2.Right = 2] = "Right", f2))(g || {});
function s$2(t2) {
  let r2 = A(null), u2 = o$3((e2) => {
    r2.current = e2.pointerType, !s$3(e2.currentTarget) && e2.pointerType === "mouse" && e2.button === g.Left && (e2.preventDefault(), t2(e2));
  }), i2 = o$3((e2) => {
    r2.current !== "mouse" && (s$3(e2.currentTarget) || t2(e2));
  });
  return { onPointerDown: u2, onClick: i2 };
}
var H$1 = ((e2) => (e2[e2.Ignore = 0] = "Ignore", e2[e2.Select = 1] = "Select", e2[e2.Close = 2] = "Close", e2))(H$1 || {});
const S$1 = { Ignore: { kind: 0 }, Select: (r2) => ({ kind: 1, target: r2 }), Close: { kind: 2 } }, M$1 = 200, f$1 = 5;
function L(r2, { trigger: n2, action: T2, close: e2, select: p2 }) {
  let l2 = A(null), i$22 = A(null), u2 = A(null);
  i(r2 && n2 !== null, "pointerdown", (t2) => {
    o$5(t2 == null ? void 0 : t2.target) && n2 != null && n2.contains(t2.target) && (i$22.current = t2.x, u2.current = t2.y, l2.current = t2.timeStamp);
  }), i(r2 && n2 !== null, "pointerup", (t2) => {
    var s2, m2;
    let c2 = l2.current;
    if (c2 === null || (l2.current = null, !i$1(t2.target)) || Math.abs(t2.x - ((s2 = i$22.current) != null ? s2 : t2.x)) < f$1 && Math.abs(t2.y - ((m2 = u2.current) != null ? m2 : t2.y)) < f$1) return;
    let a2 = T2(t2);
    switch (a2.kind) {
      case 0:
        return;
      case 1: {
        t2.timeStamp - c2 > M$1 && (p2(a2.target), e2());
        break;
      }
      case 2: {
        e2();
        break;
      }
    }
  }, { capture: true });
}
function e(t2, u2) {
  return T(() => {
    var n2;
    if (t2.type) return t2.type;
    let r2 = (n2 = t2.as) != null ? n2 : "button";
    if (typeof r2 == "string" && r2.toLowerCase() === "button" || (u2 == null ? void 0 : u2.tagName) === "BUTTON" && !u2.hasAttribute("type")) return "button";
  }, [t2.type, t2.as, u2]);
}
function t(e2) {
  return [e2.screenX, e2.screenY];
}
function u$1() {
  let e2 = A([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t(r2);
    return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
  }, update(r2) {
    e2.current = t(r2);
  } };
}
function F$1(c2, { container: e2, accept: t2, walk: r2 }) {
  let o2 = A(t2), l$12 = A(r2);
  y$2(() => {
    o2.current = t2, l$12.current = r2;
  }, [t2, r2]), n(() => {
    if (!e2 || !c2) return;
    let n2 = l(e2);
    if (!n2) return;
    let f2 = o2.current, p2 = l$12.current, i2 = Object.assign((m2) => f2(m2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, i2, false);
    for (; u2.nextNode(); ) p2(u2.currentNode);
  }, [e2, c2, o2, l$12]);
}
let y$1 = X$1({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y$1.displayName = "FloatingContext";
let $ = X$1(null);
$.displayName = "PlacementContext";
function ye(e2) {
  return T(() => e2 ? typeof e2 == "string" ? { to: e2 } : e2 : null, [e2]);
}
function Fe() {
  return x$1(y$1).setReference;
}
function be() {
  return x$1(y$1).getReferenceProps;
}
function Te() {
  let { getFloatingProps: e2, slot: t2 } = x$1(y$1);
  return q$2((...n2) => Object.assign({}, e2(...n2), { "data-anchor": t2.anchor }), [e2, t2]);
}
function Re(e2 = null) {
  e2 === false && (e2 = null), typeof e2 == "string" && (e2 = { to: e2 });
  let t2 = x$1($), n$12 = T(() => e2, [JSON.stringify(e2, (l2, o2) => {
    var u2;
    return (u2 = o2 == null ? void 0 : o2.outerHTML) != null ? u2 : o2;
  })]);
  n(() => {
    t2 == null || t2(n$12 != null ? n$12 : null);
  }, [t2, n$12]);
  let r2 = x$1(y$1);
  return T(() => [r2.setFloating, e2 ? r2.styles : {}], [r2.setFloating, e2, r2.styles]);
}
let D$1 = 4;
function Ae({ children: e2, enabled: t2 = true }) {
  let [n$12, r2] = d(null), [l2, o2] = d(0), u2 = A(null), [f2, s2] = d(null);
  ce(f2);
  let i2 = t2 && n$12 !== null && f2 !== null, { to: F2 = "bottom", gap: E2 = 0, offset: A$12 = 0, padding: c2 = 0, inner: h2 } = ge(n$12, f2), [a2, p2 = "center"] = F2.split(" ");
  n(() => {
    i2 && o2(0);
  }, [i2]);
  let { refs: b, floatingStyles: S2, context: g2 } = useFloating({ open: i2, placement: a2 === "selection" ? p2 === "center" ? "bottom" : `bottom-${p2}` : p2 === "center" ? `${a2}` : `${a2}-${p2}`, strategy: "absolute", transform: false, middleware: [offset({ mainAxis: a2 === "selection" ? 0 : E2, crossAxis: A$12 }), shift({ padding: c2 }), a2 !== "selection" && flip({ padding: c2 }), a2 === "selection" && h2 ? inner({ ...h2, padding: c2, overflowRef: u2, offset: l2, minItemsVisible: D$1, referenceOverflowThreshold: c2, onFallbackChange(P2) {
    var L2, N2;
    if (!P2) return;
    let d2 = g2.elements.floating;
    if (!d2) return;
    let M2 = parseFloat(getComputedStyle(d2).scrollPaddingBottom) || 0, I2 = Math.min(D$1, d2.childElementCount), W2 = 0, B = 0;
    for (let m2 of (N2 = (L2 = g2.elements.floating) == null ? void 0 : L2.childNodes) != null ? N2 : []) if (n$2(m2)) {
      let x2 = m2.offsetTop, k2 = x2 + m2.clientHeight + M2, H2 = d2.scrollTop, U2 = H2 + d2.clientHeight;
      if (x2 >= H2 && k2 <= U2) I2--;
      else {
        B = Math.max(0, Math.min(k2, U2) - Math.max(x2, H2)), W2 = m2.clientHeight;
        break;
      }
    }
    I2 >= 1 && o2((m2) => {
      let x2 = W2 * I2 - B + M2;
      return m2 >= x2 ? m2 : x2;
    });
  } }) : null, size({ padding: c2, apply({ availableWidth: P2, availableHeight: d2, elements: M2 }) {
    Object.assign(M2.floating.style, { overflow: "auto", maxWidth: `${P2}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d2}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [w2 = a2, V2 = p2] = g2.placement.split("-");
  a2 === "selection" && (w2 = "selection");
  let G2 = T(() => ({ anchor: [w2, V2].filter(Boolean).join(" ") }), [w2, V2]), K2 = useInnerOffset(g2, { overflowRef: u2, onChange: o2 }), { getReferenceProps: Q2, getFloatingProps: X2 } = useInteractions([K2]), Y2 = o$3((P2) => {
    s2(P2), b.setFloating(P2);
  });
  return k$1($.Provider, { value: r2 }, k$1(y$1.Provider, { value: { setFloating: Y2, setReference: b.setReference, styles: S2, getReferenceProps: Q2, getFloatingProps: X2, slot: G2 } }, e2));
}
function ce(e2) {
  n(() => {
    if (!e2) return;
    let t2 = new MutationObserver(() => {
      let n2 = window.getComputedStyle(e2).maxHeight, r2 = parseFloat(n2);
      if (isNaN(r2)) return;
      let l2 = parseInt(n2);
      isNaN(l2) || r2 !== l2 && (e2.style.maxHeight = `${Math.ceil(r2)}px`);
    });
    return t2.observe(e2, { attributes: true, attributeFilter: ["style"] }), () => {
      t2.disconnect();
    };
  }, [e2]);
}
function ge(e2, t2) {
  var o2, u2, f2;
  let n2 = O$1((o2 = e2 == null ? void 0 : e2.gap) != null ? o2 : "var(--anchor-gap, 0)", t2), r2 = O$1((u2 = e2 == null ? void 0 : e2.offset) != null ? u2 : "var(--anchor-offset, 0)", t2), l2 = O$1((f2 = e2 == null ? void 0 : e2.padding) != null ? f2 : "var(--anchor-padding, 0)", t2);
  return { ...e2, gap: n2, offset: r2, padding: l2 };
}
function O$1(e2, t2, n$12 = void 0) {
  let r2 = p$2(), l2 = o$3((s2, i2) => {
    if (s2 == null) return [n$12, null];
    if (typeof s2 == "number") return [s2, null];
    if (typeof s2 == "string") {
      if (!i2) return [n$12, null];
      let F2 = J$1(s2, i2);
      return [F2, (E2) => {
        let A2 = q$1(s2);
        {
          let c2 = A2.map((h2) => window.getComputedStyle(i2).getPropertyValue(h2));
          r2.requestAnimationFrame(function h2() {
            r2.nextFrame(h2);
            let a2 = false;
            for (let [b, S2] of A2.entries()) {
              let g2 = window.getComputedStyle(i2).getPropertyValue(S2);
              if (c2[b] !== g2) {
                c2[b] = g2, a2 = true;
                break;
              }
            }
            if (!a2) return;
            let p2 = J$1(s2, i2);
            F2 !== p2 && (E2(p2), F2 = p2);
          });
        }
        return r2.dispose;
      }];
    }
    return [n$12, null];
  }), o2 = T(() => l2(e2, t2)[0], [e2, t2]), [u2 = o2, f2] = d();
  return n(() => {
    let [s2, i2] = l2(e2, t2);
    if (f2(s2), !!i2) return i2(f2);
  }, [e2, t2]), u2;
}
function q$1(e2) {
  let t2 = /var\((.*)\)/.exec(e2);
  if (t2) {
    let n2 = t2[1].indexOf(",");
    if (n2 === -1) return [t2[1]];
    let r2 = t2[1].slice(0, n2).trim(), l2 = t2[1].slice(n2 + 1).trim();
    return l2 ? [r2, ...q$1(l2)] : [r2];
  }
  return [];
}
function J$1(e2, t2) {
  let n2 = document.createElement("div");
  t2.appendChild(n2), n2.style.setProperty("margin-top", "0px", "important"), n2.style.setProperty("margin-top", e2, "important");
  let r2 = parseFloat(window.getComputedStyle(n2).marginTop) || 0;
  return t2.removeChild(n2), r2;
}
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0) return null;
  let r2 = n2.resolveActiveIndex(), s2 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 1: {
      s2 === -1 && (s2 = t2.length);
      for (let e2 = s2 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s2 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
const c = { Idle: { kind: "Idle" }, Tracked: (e2) => ({ kind: "Tracked", position: e2 }), Moved: { kind: "Moved" } };
function a$2(e2) {
  let t2 = e2.getBoundingClientRect();
  return `${t2.x},${t2.y}`;
}
function p$1(e2, t2, i2) {
  let n2 = o$4();
  if (t2.kind === "Tracked") {
    let o2 = function() {
      d2 !== a$2(e2) && (n2.dispose(), i2());
    };
    let { position: d2 } = t2, s2 = new ResizeObserver(o2);
    s2.observe(e2), n2.add(() => s2.disconnect()), n2.addEventListener(window, "scroll", o2, { passive: true }), n2.addEventListener(window, "resize", o2);
  }
  return () => n2.dispose();
}
let a$1 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var l2, n2;
  let i2 = (l2 = e2.innerText) != null ? l2 : "", t2 = e2.cloneNode(true);
  if (!n$2(t2)) return i2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = true;
  let r2 = u2 ? (n2 = t2.innerText) != null ? n2 : "" : i2;
  return a$1.test(r2) && (r2 = r2.replace(a$1, "")), r2;
}
function F(e2) {
  let i2 = e2.getAttribute("aria-label");
  if (typeof i2 == "string") return i2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((r2) => {
      let l2 = document.getElementById(r2);
      if (l2) {
        let n2 = l2.getAttribute("aria-label");
        return typeof n2 == "string" ? n2.trim() : o(l2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0) return u2.join(", ");
  }
  return o(e2).trim();
}
function s$1(c2) {
  let t2 = A(""), r2 = A("");
  return o$3(() => {
    let e2 = c2.current;
    if (!e2) return "";
    let u2 = e2.innerText;
    if (t2.current === u2) return r2.current;
    let n2 = F(e2).trim().toLowerCase();
    return t2.current = u2, r2.current = n2, n2;
  });
}
var y = Object.defineProperty;
var M = (e2, i2, t2) => i2 in e2 ? y(e2, i2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[i2] = t2;
var S = (e2, i2, t2) => (M(e2, typeof i2 != "symbol" ? i2 + "" : i2, t2), t2);
var P = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(P || {}), D = ((t2) => (t2[t2.Pointer = 0] = "Pointer", t2[t2.Other = 1] = "Other", t2))(D || {}), C = ((o2) => (o2[o2.OpenMenu = 0] = "OpenMenu", o2[o2.CloseMenu = 1] = "CloseMenu", o2[o2.GoToItem = 2] = "GoToItem", o2[o2.Search = 3] = "Search", o2[o2.ClearSearch = 4] = "ClearSearch", o2[o2.RegisterItems = 5] = "RegisterItems", o2[o2.UnregisterItems = 6] = "UnregisterItems", o2[o2.SetButtonElement = 7] = "SetButtonElement", o2[o2.SetItemsElement = 8] = "SetItemsElement", o2[o2.SortItems = 9] = "SortItems", o2[o2.MarkButtonAsMoved = 10] = "MarkButtonAsMoved", o2))(C || {});
function x(e2, i2 = (t2) => t2) {
  let t2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, n2 = G$2(i2(e2.items.slice()), (s2) => s2.dataRef.current.domRef.current), r2 = t2 ? n2.indexOf(t2) : null;
  return r2 === -1 && (r2 = null), { items: n2, activeItemIndex: r2 };
}
let k = { [1](e2) {
  if (e2.menuState === 1) return e2;
  let i2 = e2.buttonElement ? c.Tracked(a$2(e2.buttonElement)) : e2.buttonPositionState;
  return { ...e2, activeItemIndex: null, pendingFocus: { focus: c$1.Nothing }, menuState: 1, buttonPositionState: i2 };
}, [0](e2, i2) {
  return e2.menuState === 0 ? e2 : { ...e2, __demoMode: false, pendingFocus: i2.focus, menuState: 0, buttonPositionState: c.Idle };
}, [2]: (e2, i2) => {
  var s2, l2, a2, I2, f$12;
  if (e2.menuState === 1) return e2;
  let t2 = { ...e2, searchQuery: "", activationTrigger: (s2 = i2.trigger) != null ? s2 : 1, __demoMode: false };
  if (i2.focus === c$1.Nothing) return { ...t2, activeItemIndex: null };
  if (i2.focus === c$1.Specific) return { ...t2, activeItemIndex: e2.items.findIndex((d2) => d2.id === i2.id) };
  if (i2.focus === c$1.Previous) {
    let d2 = e2.activeItemIndex;
    if (d2 !== null) {
      let o2 = e2.items[d2].dataRef.current.domRef, c2 = f(i2, { resolveItems: () => e2.items, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.current.disabled });
      if (c2 !== null) {
        let u2 = e2.items[c2].dataRef.current.domRef;
        if (((l2 = o2.current) == null ? void 0 : l2.previousElementSibling) === u2.current || ((a2 = u2.current) == null ? void 0 : a2.previousElementSibling) === null) return { ...t2, activeItemIndex: c2 };
      }
    }
  } else if (i2.focus === c$1.Next) {
    let d2 = e2.activeItemIndex;
    if (d2 !== null) {
      let o2 = e2.items[d2].dataRef.current.domRef, c2 = f(i2, { resolveItems: () => e2.items, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.current.disabled });
      if (c2 !== null) {
        let u2 = e2.items[c2].dataRef.current.domRef;
        if (((I2 = o2.current) == null ? void 0 : I2.nextElementSibling) === u2.current || ((f$12 = u2.current) == null ? void 0 : f$12.nextElementSibling) === null) return { ...t2, activeItemIndex: c2 };
      }
    }
  }
  let n2 = x(e2), r2 = f(i2, { resolveItems: () => n2.items, resolveActiveIndex: () => n2.activeItemIndex, resolveId: (d2) => d2.id, resolveDisabled: (d2) => d2.dataRef.current.disabled });
  return { ...t2, ...n2, activeItemIndex: r2 };
}, [3]: (e2, i2) => {
  let n2 = e2.searchQuery !== "" ? 0 : 1, r2 = e2.searchQuery + i2.value.toLowerCase(), l2 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + n2).concat(e2.items.slice(0, e2.activeItemIndex + n2)) : e2.items).find((I2) => {
    var f2;
    return ((f2 = I2.dataRef.current.textValue) == null ? void 0 : f2.startsWith(r2)) && !I2.dataRef.current.disabled;
  }), a2 = l2 ? e2.items.indexOf(l2) : -1;
  return a2 === -1 || a2 === e2.activeItemIndex ? { ...e2, searchQuery: r2 } : { ...e2, searchQuery: r2, activeItemIndex: a2, activationTrigger: 1 };
}, [4](e2) {
  return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e2, i2) => {
  let t2 = e2.items.concat(i2.items.map((r2) => r2)), n2 = e2.activeItemIndex;
  return e2.pendingFocus.focus !== c$1.Nothing && (n2 = f(e2.pendingFocus, { resolveItems: () => t2, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (r2) => r2.id, resolveDisabled: (r2) => r2.dataRef.current.disabled })), { ...e2, items: t2, activeItemIndex: n2, pendingFocus: { focus: c$1.Nothing }, pendingShouldSort: true };
}, [6]: (e2, i2) => {
  let t2 = e2.items, n2 = [], r2 = new Set(i2.items);
  for (let [s2, l2] of t2.entries()) if (r2.has(l2.id) && (n2.push(s2), r2.delete(l2.id), r2.size === 0)) break;
  if (n2.length > 0) {
    t2 = t2.slice();
    for (let s2 of n2.reverse()) t2.splice(s2, 1);
  }
  return { ...e2, items: t2, activationTrigger: 1 };
}, [7]: (e2, i2) => e2.buttonElement === i2.element ? e2 : { ...e2, buttonElement: i2.element }, [8]: (e2, i2) => e2.itemsElement === i2.element ? e2 : { ...e2, itemsElement: i2.element }, [9]: (e2) => e2.pendingShouldSort ? { ...e2, ...x(e2), pendingShouldSort: false } : e2, [10](e2) {
  return e2.buttonPositionState.kind !== "Tracked" ? e2 : { ...e2, buttonPositionState: c.Moved };
} };
class h extends T$1 {
  constructor(t2) {
    super(t2);
    S(this, "actions", { registerItem: k$2(() => {
      let t3 = [], n2 = /* @__PURE__ */ new Set();
      return [(r2, s2) => {
        n2.has(s2) || (n2.add(s2), t3.push({ id: r2, dataRef: s2 }));
      }, () => (n2.clear(), this.send({ type: 5, items: t3.splice(0) }))];
    }), unregisterItem: k$2(() => {
      let t3 = [];
      return [(n2) => t3.push(n2), () => this.send({ type: 6, items: t3.splice(0) })];
    }) });
    S(this, "selectors", { activeDescendantId(t3) {
      var s2;
      let n2 = t3.activeItemIndex, r2 = t3.items;
      return n2 === null || (s2 = r2[n2]) == null ? void 0 : s2.id;
    }, isActive(t3, n2) {
      var l2;
      let r2 = t3.activeItemIndex, s2 = t3.items;
      return r2 !== null ? ((l2 = s2[r2]) == null ? void 0 : l2.id) === n2 : false;
    }, shouldScrollIntoView(t3, n2) {
      return t3.__demoMode || t3.menuState !== 0 || t3.activationTrigger === 0 ? false : this.isActive(t3, n2);
    }, didButtonMove(t3) {
      return t3.buttonPositionState.kind === "Moved";
    } });
    this.on(5, () => {
      this.disposables.requestAnimationFrame(() => {
        this.send({ type: 9 });
      });
    });
    {
      let n2 = this.state.id, r2 = x$2.get(null);
      this.disposables.add(r2.on(k$3.Push, (s2) => {
        !r2.selectors.isTop(s2, n2) && this.state.menuState === 0 && this.send({ type: 1 });
      })), this.on(0, () => r2.actions.push(n2)), this.on(1, () => r2.actions.pop(n2));
    }
    this.disposables.group((n2) => {
      this.on(1, (r2) => {
        r2.buttonElement && (n2.dispose(), n2.add(p$1(r2.buttonElement, r2.buttonPositionState, () => {
          this.send({ type: 10 });
        })));
      });
    });
  }
  static new({ id: t2, __demoMode: n2 = false }) {
    return new h({ id: t2, __demoMode: n2, menuState: n2 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1, pendingShouldSort: false, pendingFocus: { focus: c$1.Nothing }, buttonPositionState: c.Idle });
  }
  reduce(t2, n2) {
    return u$3(n2.type, k, t2, n2);
  }
}
const a = X$1(null);
function p(t2) {
  let n2 = x$1(a);
  if (n2 === null) {
    let e2 = new Error(`<${t2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e2, s), e2;
  }
  return n2;
}
function s({ id: t2, __demoMode: n2 = false }) {
  let e2 = T(() => h.new({ id: t2, __demoMode: n2 }), []);
  return c$2(() => e2.dispose()), e2;
}
let Ze = S$3;
function et(m2, y2) {
  let l2 = g$1(), { __demoMode: a$12 = false, ...p2 } = m2, s$12 = s({ id: l2, __demoMode: a$12 }), [n2, M2, f2] = S$2(s$12, (d2) => [d2.menuState, d2.itemsElement, d2.buttonElement]), _ = y$3(y2), o2 = x$2.get(null), F2 = S$2(o2, q$2((d2) => o2.selectors.isTop(d2, l2), [o2, l2]));
  k$4(F2, [f2, M2], (d2, T2) => {
    var P2;
    s$12.send({ type: C.CloseMenu }), H$3(T2, I.Loose) || (d2.preventDefault(), (P2 = s$12.state.buttonElement) == null || P2.focus());
  });
  let I$1 = o$3(() => {
    s$12.send({ type: C.CloseMenu });
  }), b = n$1({ open: n2 === P.Open, close: I$1 }), i2 = { ref: _ }, g2 = K$1();
  return gn.createElement(Ae, null, gn.createElement(a.Provider, { value: s$12 }, gn.createElement(c$3, { value: u$3(n2, { [P.Open]: i$2.Open, [P.Closed]: i$2.Closed }) }, g2({ ourProps: i2, theirProps: p2, slot: b, defaultTag: Ze, name: "Menu" }))));
}
let tt = "button";
function ot(m2, y2) {
  let l2 = p("Menu.Button"), a2 = g$1(), { id: p$12 = `headlessui-menu-button-${a2}`, disabled: s2 = false, autoFocus: n2 = false, ...M2 } = m2, f2 = A(null), _ = be(), o2 = y$3(y2, f2, Fe(), o$3((t2) => l2.send({ type: C.SetButtonElement, element: t2 }))), F2 = o$3((t2) => {
    switch (t2.key) {
      case o$6.Space:
      case o$6.Enter:
      case o$6.ArrowDown:
        t2.preventDefault(), t2.stopPropagation(), l2.send({ type: C.OpenMenu, focus: { focus: c$1.First } });
        break;
      case o$6.ArrowUp:
        t2.preventDefault(), t2.stopPropagation(), l2.send({ type: C.OpenMenu, focus: { focus: c$1.Last } });
        break;
    }
  }), I2 = o$3((t2) => {
    switch (t2.key) {
      case o$6.Space:
        t2.preventDefault();
        break;
    }
  }), [b, i2, g2] = S$2(l2, (t2) => [t2.menuState, t2.buttonElement, t2.itemsElement]), d2 = b === P.Open;
  L(d2, { trigger: i2, action: q$2((t2) => {
    if (i2 != null && i2.contains(t2.target)) return S$1.Ignore;
    let S2 = t2.target.closest('[role="menuitem"]:not([data-disabled])');
    return n$2(S2) ? S$1.Select(S2) : g2 != null && g2.contains(t2.target) ? S$1.Ignore : S$1.Close;
  }, [i2, g2]), close: q$2(() => l2.send({ type: C.CloseMenu }), []), select: q$2((t2) => t2.click(), []) });
  let T2 = s$2((t2) => {
    var S2;
    s2 || (b === P.Open ? (bn(() => l2.send({ type: C.CloseMenu })), (S2 = f2.current) == null || S2.focus({ preventScroll: true })) : (t2.preventDefault(), l2.send({ type: C.OpenMenu, focus: { focus: c$1.Nothing }, trigger: D.Pointer })));
  }), { isFocusVisible: P$12, focusProps: L$12 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: n2 }), { isHovered: O2, hoverProps: v } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: s2 }), { pressed: D$12, pressProps: U2 } = w$1({ disabled: s2 }), H2 = n$1({ open: b === P.Open, active: D$12 || b === P.Open, disabled: s2, hover: O2, focus: P$12, autofocus: n2 }), G2 = V$2(_(), { ref: o2, id: p$12, type: e(m2, f2.current), "aria-haspopup": "menu", "aria-controls": g2 == null ? void 0 : g2.id, "aria-expanded": b === P.Open, disabled: s2 || void 0, autoFocus: n2, onKeyDown: F2, onKeyUp: I2 }, T2, L$12, v, U2);
  return K$1()({ ourProps: G2, theirProps: M2, slot: H2, defaultTag: tt, name: "Menu.Button" });
}
let nt = "div", rt = A$1.RenderStrategy | A$1.Static;
function at(m2, y2) {
  let l2 = g$1(), { id: a2 = `headlessui-menu-items-${l2}`, anchor: p$12, portal: s2 = false, modal: n2 = true, transition: M2 = false, ...f2 } = m2, _ = ye(p$12), o2 = p("Menu.Items"), [F2, I2] = Re(_), b = Te(), [i2, g2] = d(null), d$22 = y$3(y2, _ ? F2 : null, o$3((e2) => o2.send({ type: C.SetItemsElement, element: e2 })), g2), [T2, P$12] = S$2(o2, (e2) => [e2.menuState, e2.buttonElement]), L2 = u$4(P$12), O2 = u$4(i2);
  _ && (s2 = true);
  let v = u$5(), [D2, U2] = N$1(M2, i2, v !== null ? (v & i$2.Open) === i$2.Open : T2 === P.Open);
  p$3(D2, P$12, () => {
    o2.send({ type: C.CloseMenu });
  });
  let H2 = S$2(o2, (e2) => e2.__demoMode), G2 = H2 ? false : n2 && T2 === P.Open;
  f$2(G2, O2);
  let w$12 = H2 ? false : n2 && T2 === P.Open;
  y$4(w$12, { allowed: q$2(() => [P$12, i2], [P$12, i2]) });
  let S2 = S$2(o2, o2.selectors.didButtonMove) ? false : D2;
  y$2(() => {
    let e2 = i2;
    e2 && T2 === P.Open && (d$1(e2) || e2.focus({ preventScroll: true }));
  }, [T2, i2]), F$1(T2 === P.Open, { container: i2, accept(e2) {
    return e2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : e2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e2) {
    e2.setAttribute("role", "none");
  } });
  let z2 = p$2(), le$1 = o$3((e2) => {
    var N2, Y2, Z2;
    switch (z2.dispose(), e2.key) {
      case o$6.Space:
        if (o2.state.searchQuery !== "") return e2.preventDefault(), e2.stopPropagation(), o2.send({ type: C.Search, value: e2.key });
      case o$6.Enter:
        if (e2.preventDefault(), e2.stopPropagation(), o2.state.activeItemIndex !== null) {
          let { dataRef: de } = o2.state.items[o2.state.activeItemIndex];
          (Y2 = (N2 = de.current) == null ? void 0 : N2.domRef.current) == null || Y2.click();
        }
        o2.send({ type: C.CloseMenu }), K$2(o2.state.buttonElement);
        break;
      case o$6.ArrowDown:
        return e2.preventDefault(), e2.stopPropagation(), o2.send({ type: C.GoToItem, focus: c$1.Next });
      case o$6.ArrowUp:
        return e2.preventDefault(), e2.stopPropagation(), o2.send({ type: C.GoToItem, focus: c$1.Previous });
      case o$6.Home:
      case o$6.PageUp:
        return e2.preventDefault(), e2.stopPropagation(), o2.send({ type: C.GoToItem, focus: c$1.First });
      case o$6.End:
      case o$6.PageDown:
        return e2.preventDefault(), e2.stopPropagation(), o2.send({ type: C.GoToItem, focus: c$1.Last });
      case o$6.Escape:
        e2.preventDefault(), e2.stopPropagation(), bn(() => o2.send({ type: C.CloseMenu })), (Z2 = o2.state.buttonElement) == null || Z2.focus({ preventScroll: true });
        break;
      case o$6.Tab:
        e2.preventDefault(), e2.stopPropagation(), bn(() => o2.send({ type: C.CloseMenu })), R(o2.state.buttonElement, e2.shiftKey ? T$2.Previous : T$2.Next);
        break;
      default:
        e2.key.length === 1 && (o2.send({ type: C.Search, value: e2.key }), z2.setTimeout(() => o2.send({ type: C.ClearSearch }), 350));
        break;
    }
  }), pe = o$3((e2) => {
    switch (e2.key) {
      case o$6.Space:
        e2.preventDefault();
        break;
    }
  }), ie = n$1({ open: T2 === P.Open }), ue = V$2(_ ? b() : {}, { "aria-activedescendant": S$2(o2, o2.selectors.activeDescendantId), "aria-labelledby": S$2(o2, (e2) => {
    var N2;
    return (N2 = e2.buttonElement) == null ? void 0 : N2.id;
  }), id: a2, onKeyDown: le$1, onKeyUp: pe, role: "menu", tabIndex: T2 === P.Open ? 0 : void 0, ref: d$22, style: { ...f2.style, ...I2, "--button-width": w(D2, P$12, true).width }, ...x$3(U2) }), me = K$1();
  return gn.createElement(le, { enabled: s2 ? m2.static || D2 : false, ownerDocument: L2 }, me({ ourProps: ue, theirProps: f2, slot: ie, defaultTag: nt, features: rt, visible: S2, name: "Menu.Items" }));
}
let st = S$3;
function lt(m2, y2) {
  let l2 = g$1(), { id: a2 = `headlessui-menu-item-${l2}`, disabled: p$12 = false, ...s2 } = m2, n$22 = p("Menu.Item"), M2 = S$2(n$22, (t2) => n$22.selectors.isActive(t2, a2)), f2 = A(null), _ = y$3(y2, f2), o2 = S$2(n$22, (t2) => n$22.selectors.shouldScrollIntoView(t2, a2));
  n(() => {
    if (o2) return o$4().requestAnimationFrame(() => {
      var t2, S2;
      (S2 = (t2 = f2.current) == null ? void 0 : t2.scrollIntoView) == null || S2.call(t2, { block: "nearest" });
    });
  }, [o2, f2]);
  let F2 = s$1(f2), I2 = A({ disabled: p$12, domRef: f2, get textValue() {
    return F2();
  } });
  n(() => {
    I2.current.disabled = p$12;
  }, [I2, p$12]), n(() => (n$22.actions.registerItem(a2, I2), () => n$22.actions.unregisterItem(a2)), [I2, a2]);
  let b = o$3(() => {
    n$22.send({ type: C.CloseMenu });
  }), i2 = o$3((t2) => {
    if (p$12) return t2.preventDefault();
    n$22.send({ type: C.CloseMenu }), K$2(n$22.state.buttonElement);
  }), g2 = o$3(() => {
    if (p$12) return n$22.send({ type: C.GoToItem, focus: c$1.Nothing });
    n$22.send({ type: C.GoToItem, focus: c$1.Specific, id: a2 });
  }), d2 = u$1(), T2 = o$3((t2) => d2.update(t2)), P2 = o$3((t2) => {
    d2.wasMoved(t2) && (p$12 || M2 || n$22.send({ type: C.GoToItem, focus: c$1.Specific, id: a2, trigger: D.Pointer }));
  }), L2 = o$3((t2) => {
    d2.wasMoved(t2) && (p$12 || M2 && n$22.state.activationTrigger === D.Pointer && n$22.send({ type: C.GoToItem, focus: c$1.Nothing }));
  }), [O2, v] = V$1(), [D$12, U2] = H$2(), H2 = n$1({ active: M2, focus: M2, disabled: p$12, close: b }), G2 = { id: a2, ref: _, role: "menuitem", tabIndex: p$12 === true ? void 0 : -1, "aria-disabled": p$12 === true ? true : void 0, "aria-labelledby": O2, "aria-describedby": D$12, disabled: void 0, onClick: i2, onFocus: g2, onPointerEnter: T2, onMouseEnter: T2, onPointerMove: P2, onMouseMove: P2, onPointerLeave: L2, onMouseLeave: L2 }, w2 = K$1();
  return gn.createElement(v, null, gn.createElement(U2, null, w2({ ourProps: G2, theirProps: s2, slot: H2, defaultTag: st, name: "Menu.Item" })));
}
let pt = "div";
function it(m2, y2) {
  let [l2, a2] = V$1(), p2 = m2, s2 = { ref: y2, "aria-labelledby": l2, role: "group" }, n2 = K$1();
  return gn.createElement(a2, null, n2({ ourProps: s2, theirProps: p2, slot: {}, defaultTag: pt, name: "Menu.Section" }));
}
let ut = "header";
function mt(m2, y2) {
  let l2 = g$1(), { id: a2 = `headlessui-menu-heading-${l2}`, ...p2 } = m2, s2 = C$1();
  n(() => s2.register(a2), [a2, s2.register]);
  let n$12 = { id: a2, ref: y2, role: "presentation", ...s2.props };
  return K$1()({ ourProps: n$12, theirProps: p2, slot: {}, defaultTag: ut, name: "Menu.Heading" });
}
let dt = "div";
function Tt(m2, y2) {
  let l2 = m2, a2 = { ref: y2, role: "separator" };
  return K$1()({ ourProps: a2, theirProps: l2, slot: {}, defaultTag: dt, name: "Menu.Separator" });
}
let ct = Y$1(et), ft = Y$1(ot), yt = Y$1(at), gt = Y$1(lt), Pt = Y$1(it), Et = Y$1(mt), Mt = Y$1(Tt), lo = Object.assign(ct, { Button: ft, Items: yt, Item: gt, Section: Pt, Heading: Et, Separator: Mt });
const W = ({ chains: o2, appId: t2, address: s2, rpcConfig: c2 }) => Promise.all(o2.map((async (o3) => {
  let l2 = createPublicClient({ chain: o3, transport: http(n$3(o3, c2, t2)) }), m2 = await l2.getBalance({ address: s2 }).catch((() => 0n)), d2 = null, h2 = E$1[o3.id];
  if (h2) {
    let { balance: e2 } = await n$4({ address: s2, chain: o3, rpcConfig: c2, appId: t2, erc20Address: h2 });
    d2 = e2;
  }
  return { balance: m2, erc20Balance: d2, erc20Address: h2, chain: o3 };
}))), H = ({ balance: e2, className: r2, chain: a2 }) => /* @__PURE__ */ u$6(d$2, { className: r2, $state: void 0, children: /* @__PURE__ */ u$6(Q, { balance: e2, chain: a2 }) }), Q = ({ balance: e2, chain: r2 }) => /* @__PURE__ */ u$6(S$3, { children: [/* @__PURE__ */ u$6(V, { children: [/* @__PURE__ */ u$6(G, { chainId: "object" == typeof r2 ? r2.id : "solana" }), /* @__PURE__ */ u$6(n$6, { children: "object" == typeof r2 ? r2.name : e$6(r2) })] }), /* @__PURE__ */ u$6(n$7, { isLoading: false, isPulsing: false, color: "gray", children: [/* @__PURE__ */ u$6(z, { children: /* @__PURE__ */ u$6(ForwardRef, {}) }), e2] })] });
let V = gt$1.div`
  display: flex;
  align-items: center;
`, z = gt$1.div`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.2rem;
`, G = gt$1(w$2)`
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 4px;
`;
const J = ({ options: e2, onSelect: r2, selected: a2, className: o2 }) => /* @__PURE__ */ u$6(lo, { as: O, children: [/* @__PURE__ */ u$6(ft, { as: X, children: [/* @__PURE__ */ u$6(Q, { balance: a2.balance, chain: a2.chain }), /* @__PURE__ */ u$6(K, { height: 16 })] }), /* @__PURE__ */ u$6(yt, { as: Y, className: o2, children: e2.map(((e3, a3) => /* @__PURE__ */ u$6(gt, { as: q, onClick: () => r2(a3), children: /* @__PURE__ */ u$6(Q, { balance: e3.balance, chain: e3.chain }) }, a3))) })] });
let O = gt$1.div`
  width: 100%;
  position: relative;
`, Y = gt$1.div`
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  background-color: var(--privy-color-background);
  border-radius: var(--privy-border-radius-md);
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  max-height: 11.75rem;

  && {
    border: solid 1px var(--privy-color-foreground-4);
  }

  z-index: 1;
`, q = gt$1.button`
  width: 100%;
  display: flex;
  justify-content: space-between;

  && {
    padding: 1rem;
  }

  :not(:last-child) {
    border-bottom: solid 1px var(--privy-color-foreground-4);
  }

  :hover {
    background: var(--privy-color-background-2);
  }
`, K = gt$1(ForwardRef$1)`
  height: 1rem;
  margin-left: 0.5rem;
`, X = gt$1.button`
  ${e$9}

  /* Push the chip all the way to the right */
  span {
    margin-left: auto;
  }

  ${K} {
    transition: rotate 100ms ease-in;
  }

  &[aria-expanded='true'] {
    ${K} {
      rotate: -180deg;
    }
  }
`;
const Z = ({ displayName: e2, errorMessage: r2, configuredFundingChain: a2, formattedBalance: i2, fundingAmount: n2, fundingCurrency: b, fundingAmountInUsd: w2, options: C2, selectedOption: k2, isPreparing: N2, isSubmitting: B, addressToFund: T2, fundingWalletAddress: S2, onSubmit: A$12, onSelect: I2, onAmountChange: E2 }) => {
  let $2 = A(null);
  return u$6(S$3, { children: [/* @__PURE__ */ u$6(t$6, {}), /* @__PURE__ */ u$6(c$4, {}), /* @__PURE__ */ u$6(e$5, { children: "Transfer from another network" }), /* @__PURE__ */ u$6(r$2, { children: ["You need more funds on the", " ", "object" == typeof a2 ? a2.name : e$6(a2), " ", "network. Bridge from another blockchain network."] }), /* @__PURE__ */ u$6(a$6, { style: { marginTop: "2rem" }, children: [/* @__PURE__ */ u$6(p$4, { onClick: () => {
    var _a;
    return (_a = $2.current) == null ? void 0 : _a.focus();
  }, children: [/* @__PURE__ */ u$6(s$4, { ref: $2, value: n2, onChange: (e3) => {
    let r3 = e3.target.value;
    if (/^[0-9.]*$/.test(r3) && r3.split(".").length - 1 <= 1) {
      let e4 = /\.$/.test(r3) ? "." : "", a3 = Number(r3.replace(/\.$/, "") || "0");
      if (Number.isNaN(a3)) return void E2("0");
      E2(a3.toString() + e4);
    }
  } }), /* @__PURE__ */ u$6(c$5, { children: b })] }), w2 && /* @__PURE__ */ u$6(l$2, { children: w2 })] }), /* @__PURE__ */ u$6(s$5, { style: { marginTop: "1.5rem" }, children: [/* @__PURE__ */ u$6(e$7, { children: "From" }), /* @__PURE__ */ u$6(e$7, { children: n$5(S2) })] }), /* @__PURE__ */ u$6(J, { selected: { chain: k2.chain, balance: k2.isErc20Quote ? t$7({ amount: k2.erc20Balance ?? 0n, decimals: 6 }) + " USDC" : c$6(k2.balance, k2.chain.nativeCurrency.symbol, 3, true) }, options: C2.map((({ chain: e3, balance: r3, isErc20Quote: a3, erc20Balance: o2 }) => ({ chain: e3, balance: a3 ? t$7({ amount: o2 ?? 0n, decimals: 6 }) + " USDC" : c$6(r3, e3.nativeCurrency.symbol, 3, true) }))), onSelect: I2 }), /* @__PURE__ */ u$6(s$5, { style: { marginTop: "1.5rem" }, children: [/* @__PURE__ */ u$6(e$7, { children: "To" }), /* @__PURE__ */ u$6(e$7, { children: n$5(T2) })] }), /* @__PURE__ */ u$6(H, { chain: a2, balance: i2 }), /* @__PURE__ */ u$6(e$8, { style: { marginTop: "1rem" }, children: r2 }), /* @__PURE__ */ u$6(k$5, { style: { marginTop: "1rem" }, loading: B || N2, disabled: N2 || B, onClick: A$12, children: ["Confirm with ", e2] }), /* @__PURE__ */ u$6(s$6, {}), /* @__PURE__ */ u$6(u$7, {})] });
};
export {
  W,
  Z
};
