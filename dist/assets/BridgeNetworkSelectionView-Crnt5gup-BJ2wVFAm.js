import { dP as gn, dm as A, dk as q$2, dn as y$2, dl as d, dp as T, dQ as p$2, dR as o$1, dS as l, dT as x$1, dU as X$1, dV as a$3, dW as E$1, dX as Y$1, dY as g$1, dZ as a$4, d_ as y$3, d$ as n, e0 as L$2, e1 as m, e2 as l$1, e3 as n$1, e4 as K$1, e5 as o$2, e6 as i, e7 as o$3, e8 as i$1, dt as k$1, e9 as n$2, ea as T$1, eb as k$2, ec as x$2, ed as k$3, ee as u$3, ef as G$2, eg as c$2, eh as S$2, ei as V$2, ej as u$4, ek as u$5, el as N$1, em as p$3, en as f$2, eo as y$4, ep as d$1, eq as x$3, er as le, es as H$2, dN as S$3, et as i$2, eu as A$1, ev as k$4, ew as c$3, ex as bn, ey as o$4, ez as R, eA as T$2, eB as K$2, eC as H$3, eD as I, C as createPublicClient, D as http, dL as n$3, eE as Si, dr as u$6, eF as $i, dA as gt$1 } from './index-B3PW-i17.js';
import { n as n$4 } from './getErc20Balance-jXNpFf0N-Cb6igCp6.js';
import { u as u$7, h as h$2 } from './ModalFooter-BldNwiHO-Dv7-KdAL.js';
import { c as c$4, s as s$6 } from './Layouts-BMRfo5hw-ByfVPExo.js';
import { t as t$1 } from './FundWalletMethodHeader-CBdY084Z-LgLp-gaF.js';
import { s as s$5, e as e$4, n as n$5 } from './Value-DTgR824E-D7fDiH2l.js';
import { e as e$5 } from './ErrorMessage-D8VaAP5m-D7tHplLt.js';
import { r as r$1 } from './Subtitle-CV-2yKE4-DKnW-4Yv.js';
import { e as e$2 } from './Title-BnzYV3Is-81Bz1weZ.js';
import { F as ForwardRef } from './WalletIcon-D7vOIqz3.js';
import { e as e$3 } from './getChainName-DjpPdUSc-D0Rbdx8r.js';
import { n as n$6 } from './Chip-CZKIKt9K-COjWfPh8.js';
import { w as w$2 } from './TransferOrBridgeLoadingScreen-BHVCJFXe-BxB9ivJu.js';
import { d as d$2, e as e$6 } from './shared-FM0rljBt-CplhoUdO.js';
import { F as ForwardRef$1 } from './ChevronDownIcon-Bw3fPHuL.js';
import { t as t$2 } from './formatErc20TokenAmount-BuPk9xcy-DM9dv5xw.js';
import { c as c$6 } from './ethers-DNxEwCFm-DJUn4P5z.js';
import { a as a$5, p as p$4, s as s$4, c as c$5, l as l$2 } from './styles-C4IROdYt-BmgvIuiT.js';
import { u as useFloating, i as inner, a as useInnerOffset, b as useInteractions } from './floating-ui.react-DXnigJjB.js';
import { o as offset, s as shift, f as flip, a as size, b as autoUpdate } from './floating-ui.react-dom-CtEA3RQe.js';

const $d447af545b77c9f1$export$b204af158042fbac = (el)=>{
    return el?.ownerDocument ?? document;
};
const $d447af545b77c9f1$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $d447af545b77c9f1$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType
 * property.
 */ function $d447af545b77c9f1$var$isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
function $d447af545b77c9f1$export$af51f0f06c0f328a(node) {
    return $d447af545b77c9f1$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in node;
}

let $6a20a7989e6c817a$var$_shadowDOM = false;
function $6a20a7989e6c817a$export$98658e8c59125e6a() {
    return $6a20a7989e6c817a$var$_shadowDOM;
}

// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16
/* eslint-disable rsp-rules/no-non-shadow-contains, rsp-rules/safe-event-target */ 

function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
    if (!($6a20a7989e6c817a$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (currentNode.tagName === 'SLOT' && currentNode.assignedSlot) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if (($d447af545b77c9f1$export$af51f0f06c0f328a)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document)=>{
    if (!($6a20a7989e6c817a$export$98658e8c59125e6a)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && activeElement.shadowRoot?.activeElement)activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
    if (($6a20a7989e6c817a$export$98658e8c59125e6a)() && event.target instanceof Element && event.target.shadowRoot) {
        if ('composedPath' in event) return event.composedPath()[0] ?? null;
        else if ('composedPath' in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
    }
    return event.target;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
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
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $1969ac565cfec8d0$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch  {
        // Ignore
        }
    }
    return $1969ac565cfec8d0$var$supportsPreventScrollCached;
}
function $1969ac565cfec8d0$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
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
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (gn).useLayoutEffect : ()=>{};

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = ()=>event.defaultPrevented;
    // cancelBubble is technically deprecated in the spec, but still supported in all browsers.
    event.isPropagationStopped = ()=>event.cancelBubble;
    event.persist = ()=>{};
    return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, 'target', {
        value: target
    });
    Object.defineProperty(event, 'currentTarget', {
        value: target
    });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
    let stateRef = (A)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    ($c4867b2f328c2698$export$e5c5a5f917a5871c)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    // This function is called during a React onFocus event.
    return (q$2)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        let eventTarget = ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
        if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = eventTarget;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) {
                    // For backward compatibility, dispatch a (fake) React synthetic event.
                    let event = $a92dc41f639950be$export$525bc4921d56d4a(e);
                    onBlur?.(event);
                }
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer?.disconnect();
                    let relatedTargetEl = target === ($23f2114a1b82827e$export$cd4e5573fbe2b576)() ? null : ($23f2114a1b82827e$export$cd4e5573fbe2b576)();
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        onBlur
    ]);
}
let $a92dc41f639950be$export$fda7da73ab5d4c48 = false;

function $2add3ce32c6007eb$var$testUserAgent(re) {
  if (typeof window === "undefined" || window.navigator == null) return false;
  let brands = window.navigator["userAgentData"]?.brands;
  return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $2add3ce32c6007eb$var$testPlatform(re) {
  return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform) : false;
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

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $b5c62b033c25b96d$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.pointerType === '' && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if (($2add3ce32c6007eb$export$a11b0059900ceec8)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}

function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if (($2add3ce32c6007eb$export$b7d78993b74f766d)() && window.event?.type?.startsWith("key") && target.target === "_blank") {
    if (($2add3ce32c6007eb$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = ($2add3ce32c6007eb$export$78551043582a6a98)() && ($2add3ce32c6007eb$export$9ac100e40613ea10)() && !($2add3ce32c6007eb$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
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
  ($1969ac565cfec8d0$export$de79e2c695e052f3)(target);
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
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
  for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e);
}
function $8f5a2122b0992be3$var$isValidKey(e) {
  return !(e.metaKey || !($2add3ce32c6007eb$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
  $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
  if (!($caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
    $8f5a2122b0992be3$var$currentModality = "keyboard";
    $8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e);
  }
}
function $8f5a2122b0992be3$var$handlePointerEvent(e) {
  $8f5a2122b0992be3$var$currentModality = "pointer";
  "pointerType" in e ? e.pointerType : "mouse";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e);
  }
}
function $8f5a2122b0992be3$var$handleClickEvent(e) {
  if (!($caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && ($b5c62b033c25b96d$export$60278871457622de)(e)) {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$currentModality = "virtual";
  }
}
function $8f5a2122b0992be3$var$handleFocusEvent(e) {
  let ownerWindow = ($d447af545b77c9f1$export$f21a1ffae260145a)(($23f2114a1b82827e$export$e58f029f0fbfdb29)(e));
  let ownerDocument = ($d447af545b77c9f1$export$b204af158042fbac)(($23f2114a1b82827e$export$e58f029f0fbfdb29)(e));
  if (($23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === ownerWindow || ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === ownerDocument || ($a92dc41f639950be$export$fda7da73ab5d4c48) || !e.isTrusted) return;
  if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
    $8f5a2122b0992be3$var$currentModality = "virtual";
    $8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e);
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
  const windowObject = ($d447af545b77c9f1$export$f21a1ffae260145a)(element);
  const documentObject = ($d447af545b77c9f1$export$b204af158042fbac)(element);
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
  const windowObject = ($d447af545b77c9f1$export$f21a1ffae260145a)(element);
  const documentObject = ($d447af545b77c9f1$export$b204af158042fbac)(element);
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
  const documentObject = ($d447af545b77c9f1$export$b204af158042fbac)(element);
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
function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  let eventTarget = e ? ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e) : void 0;
  let document1 = ($d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
  let ownerWindow = ($d447af545b77c9f1$export$f21a1ffae260145a)(eventTarget);
  const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
  let activeElement = ($23f2114a1b82827e$export$cd4e5573fbe2b576)(document1);
  isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $8f5a2122b0992be3$var$setupGlobalFocusEvents();
  (y$2)(() => {
    if (opts?.enabled === false) return;
    let handler = (modality, e) => {
      if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
      fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
    };
    $8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
    return () => {
      $8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
    };
  }, deps);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (q$2)((e)=>{
        if (($23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = ($a92dc41f639950be$export$715c682d09d639cc)(onBlur);
    const onFocus = (q$2)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
        const ownerDocument = ($d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
        const activeElement = ownerDocument ? ($23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument) : ($23f2114a1b82827e$export$cd4e5573fbe2b576)();
        if (eventTarget === e.currentTarget && eventTarget === activeElement) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
    let globalListeners = (A)(new Map());
    let addGlobalListener = (q$2)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = options?.once ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (q$2)((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (q$2)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (y$2)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions





function $2c9edc598a03d523$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (A)({
        isFocusWithin: false
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($48a7d519b337145d$export$4eaf04e54aa8eed6)();
    let onBlur = (q$2)((e)=>{
        // Ignore events bubbling through portals.
        if (!($23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !($23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = ($a92dc41f639950be$export$715c682d09d639cc)(onBlur);
    let onFocus = (q$2)((e)=>{
        // Ignore events bubbling through portals.
        if (!($23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
        const ownerDocument = ($d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
        const activeElement = ($23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === eventTarget) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                let eventTarget = ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
                if (state.current.isFocusWithin && !($23f2114a1b82827e$export$4282f70798064fe0)(currentTarget, eventTarget)) {
                    let nativeEvent = new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: eventTarget
                    });
                    ($a92dc41f639950be$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
                    let event = ($a92dc41f639950be$export$525bc4921d56d4a)(nativeEvent);
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
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (A)({
        isFocused: false,
        isFocusVisible: autoFocus || ($8f5a2122b0992be3$export$b9b3dfddab17db27)()
    });
    let [isFocused, setFocused] = (d)(false);
    let [isFocusVisibleState, setFocusVisible] = (d)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (q$2)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (q$2)((isFocused)=>{
        state.current.isFocused = isFocused;
        state.current.isFocusVisible = ($8f5a2122b0992be3$export$b9b3dfddab17db27)();
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    ($8f5a2122b0992be3$export$ec71b4b83ac08ec3)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [
        isTextInput,
        isFocused
    ], {
        enabled: isFocused,
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = ($1e74c67db218ce67$export$f8168d8dd8fd66e6)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = ($2c9edc598a03d523$export$420e68273165f4ec)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
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
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
  if (e.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
  let ownerDocument = ($d447af545b77c9f1$export$b204af158042fbac)(null);
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
  let [isHovered, setHovered] = (d)(false);
  let state = (A)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (y$2)($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = ($48a7d519b337145d$export$4eaf04e54aa8eed6)();
  let { hoverProps, triggerHoverEnd } = (T)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !($23f2114a1b82827e$export$4282f70798064fe0)(event.currentTarget, ($23f2114a1b82827e$export$e58f029f0fbfdb29)(event))) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener(($d447af545b77c9f1$export$b204af158042fbac)(($23f2114a1b82827e$export$e58f029f0fbfdb29)(event)), "pointerover", (e) => {
        if (state.isHovered && state.target && !($23f2114a1b82827e$export$4282f70798064fe0)(state.target, ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) triggerHoverEnd2(e, e.pointerType);
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
      hoverProps2.onPointerEnter = (e) => {
        if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
        triggerHoverStart(e, e.pointerType);
      };
      hoverProps2.onPointerLeave = (e) => {
        if (!isDisabled && ($23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, ($23f2114a1b82827e$export$e58f029f0fbfdb29)(e))) triggerHoverEnd2(e, e.pointerType);
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
  (y$2)(() => {
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

function E(e){let t=e.width/2,n=e.height/2;return {top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function P$1(e,t){return !(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}function w$1({disabled:e=false}={}){let t=A(null),[n,l$1]=d(false),r=p$2(),o=o$1(()=>{t.current=null,l$1(false),r.dispose();}),f=o$1(s=>{if(r.dispose(),t.current===null){t.current=s.currentTarget,l$1(true);{let i=l(s.currentTarget);r.addEventListener(i,"pointerup",o,false),r.addEventListener(i,"pointermove",c=>{if(t.current){let p=E(c);l$1(P$1(p,t.current.getBoundingClientRect()));}},false),r.addEventListener(i,"pointercancel",o,false);}}});return {pressed:n,pressProps:e?{}:{onPointerDown:f,onPointerUp:o,onClick:o}}}

let e$1=X$1(void 0);function u$2(){return x$1(e$1)}

function s$3(l){let e=l.parentElement,t=null;for(;e&&!a$3(e);)E$1(e)&&(t=e),e=e.parentElement;let i=(e==null?void 0:e.getAttribute("disabled"))==="";return i&&r(t)?false:i}function r(l){if(!l)return  false;let e=l.previousElementSibling;for(;e!==null;){if(E$1(e))return  false;e=e.previousElementSibling;}return  true}

let L$1=X$1(null);L$1.displayName="LabelContext";function C$1(){let n=x$1(L$1);if(n===null){let l=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(l,C$1),l}return n}function N(n){var a,e,o;let l=(e=(a=x$1(L$1))==null?void 0:a.value)!=null?e:void 0;return ((o=void 0)!=null?o:0)>0?[l,...n].filter(Boolean).join(" "):l}function V$1({inherit:n=false}={}){let l=N(),[a,e]=d([]),o=n?[l,...a].filter(Boolean):a;return [o.length>0?o.join(" "):void 0,T(()=>function(t){let p=o$1(i=>(e(u=>[...u,i]),()=>e(u=>{let d=u.slice(),f=d.indexOf(i);return f!==-1&&d.splice(f,1),d}))),b=T(()=>({register:p,slot:t.slot,name:t.name,props:t.props,value:t.value}),[p,t.slot,t.name,t.props,t.value]);return gn.createElement(L$1.Provider,{value:b},t.children)},[e])]}let G$1="label";function U$1(n$2,l){var y;let a=g$1(),e=C$1(),o=u$2(),T=a$4(),{id:t=`headlessui-label-${a}`,htmlFor:p=o!=null?o:(y=e.props)==null?void 0:y.htmlFor,passive:b=false,...i}=n$2,u=y$3(l);n(()=>e.register(t),[t,e.register]);let d=o$1(s=>{let g=s.currentTarget;if(!(s.target!==s.currentTarget&&L$2(s.target))&&(m(g)&&s.preventDefault(),e.props&&"onClick"in e.props&&typeof e.props.onClick=="function"&&e.props.onClick(s),m(g))){let r=document.getElementById(g.htmlFor);if(r){let E=r.getAttribute("disabled");if(E==="true"||E==="")return;let x=r.getAttribute("aria-disabled");if(x==="true"||x==="")return;(l$1(r)&&(r.type==="file"||r.type==="radio"||r.type==="checkbox")||r.role==="radio"||r.role==="checkbox"||r.role==="switch")&&r.click(),r.focus({preventScroll:true});}}}),f=n$1({...e.slot,disabled:T||false}),c={ref:u,...e.props,id:t,htmlFor:p,onClick:d};return b&&("onClick"in c&&(delete c.htmlFor,delete c.onClick),"onClick"in i&&delete i.onClick),K$1()({ourProps:c,theirProps:i,slot:f,defaultTag:p?G$1:"div",name:e.name||"Label"})}let j=Y$1(U$1);Object.assign(j,{});

function h$1(i){if(i===null)return {width:0,height:0};let{width:t,height:e}=i.getBoundingClientRect();return {width:t,height:e}}function w(i,t,e=false){let[r,f]=d(()=>h$1(t));return n(()=>{if(!t||!i)return;let n=o$2();return n.requestAnimationFrame(function s(){n.requestAnimationFrame(s),f(u=>{let o=h$1(t);return o.width===u.width&&o.height===u.height?u:o});}),()=>{n.dispose();}},[t,i]),e?{width:`${r.width}px`,height:`${r.height}px`}:r}

var g=(f=>(f[f.Left=0]="Left",f[f.Right=2]="Right",f))(g||{});

function s$2(t){let r=A(null),u=o$1(e=>{r.current=e.pointerType,!s$3(e.currentTarget)&&e.pointerType==="mouse"&&e.button===g.Left&&(e.preventDefault(),t(e));}),i=o$1(e=>{r.current!=="mouse"&&(s$3(e.currentTarget)||t(e));});return {onPointerDown:u,onClick:i}}

var H$1=(e=>(e[e.Ignore=0]="Ignore",e[e.Select=1]="Select",e[e.Close=2]="Close",e))(H$1||{});const S$1={Ignore:{kind:0},Select:r=>({kind:1,target:r}),Close:{kind:2}},M$1=200,f$1=5;function L(r,{trigger:n,action:T,close:e,select:p}){let l=A(null),i$2=A(null),u=A(null);i(r&&n!==null,"pointerdown",t=>{o$3(t==null?void 0:t.target)&&n!=null&&n.contains(t.target)&&(i$2.current=t.x,u.current=t.y,l.current=t.timeStamp);}),i(r&&n!==null,"pointerup",t=>{var s,m;let c=l.current;if(c===null||(l.current=null,!i$1(t.target))||Math.abs(t.x-((s=i$2.current)!=null?s:t.x))<f$1&&Math.abs(t.y-((m=u.current)!=null?m:t.y))<f$1)return;let a=T(t);switch(a.kind){case 0:return;case 1:{t.timeStamp-c>M$1&&(p(a.target),e());break}case 2:{e();break}}},{capture:true});}

function e(t,u){return T(()=>{var n;if(t.type)return t.type;let r=(n=t.as)!=null?n:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||(u==null?void 0:u.tagName)==="BUTTON"&&!u.hasAttribute("type"))return "button"},[t.type,t.as,u])}

function t(e){return [e.screenX,e.screenY]}function u$1(){let e=A([-1,-1]);return {wasMoved(r){let n=t(r);return e.current[0]===n[0]&&e.current[1]===n[1]?false:(e.current=n,true)},update(r){e.current=t(r);}}}

function F$1(c,{container:e,accept:t,walk:r}){let o=A(t),l$1=A(r);y$2(()=>{o.current=t,l$1.current=r;},[t,r]),n(()=>{if(!e||!c)return;let n=l(e);if(!n)return;let f=o.current,p=l$1.current,i=Object.assign(m=>f(m),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,false);for(;u.nextNode();)p(u.currentNode);},[e,c,o,l$1]);}

let y$1=X$1({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});y$1.displayName="FloatingContext";let $=X$1(null);$.displayName="PlacementContext";function ye(e){return T(()=>e?typeof e=="string"?{to:e}:e:null,[e])}function Fe(){return x$1(y$1).setReference}function be(){return x$1(y$1).getReferenceProps}function Te(){let{getFloatingProps:e,slot:t}=x$1(y$1);return q$2((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function Re(e=null){e===false&&(e=null),typeof e=="string"&&(e={to:e});let t=x$1($),n$1=T(()=>e,[JSON.stringify(e,(l,o)=>{var u;return (u=o==null?void 0:o.outerHTML)!=null?u:o})]);n(()=>{t==null||t(n$1!=null?n$1:null);},[t,n$1]);let r=x$1(y$1);return T(()=>[r.setFloating,e?r.styles:{}],[r.setFloating,e,r.styles])}let D$1=4;function Ae({children:e,enabled:t=true}){let[n$1,r]=d(null),[l,o]=d(0),u=A(null),[f,s]=d(null);ce(f);let i=t&&n$1!==null&&f!==null,{to:F="bottom",gap:E=0,offset:A$1=0,padding:c=0,inner:h}=ge(n$1,f),[a,p="center"]=F.split(" ");n(()=>{i&&o(0);},[i]);let{refs:b,floatingStyles:S,context:g}=useFloating({open:i,placement:a==="selection"?p==="center"?"bottom":`bottom-${p}`:p==="center"?`${a}`:`${a}-${p}`,strategy:"absolute",transform:false,middleware:[offset({mainAxis:a==="selection"?0:E,crossAxis:A$1}),shift({padding:c}),a!=="selection"&&flip({padding:c}),a==="selection"&&h?inner({...h,padding:c,overflowRef:u,offset:l,minItemsVisible:D$1,referenceOverflowThreshold:c,onFallbackChange(P){var L,N;if(!P)return;let d=g.elements.floating;if(!d)return;let M=parseFloat(getComputedStyle(d).scrollPaddingBottom)||0,I=Math.min(D$1,d.childElementCount),W=0,B=0;for(let m of (N=(L=g.elements.floating)==null?void 0:L.childNodes)!=null?N:[])if(n$2(m)){let x=m.offsetTop,k=x+m.clientHeight+M,H=d.scrollTop,U=H+d.clientHeight;if(x>=H&&k<=U)I--;else {B=Math.max(0,Math.min(k,U)-Math.max(x,H)),W=m.clientHeight;break}}I>=1&&o(m=>{let x=W*I-B+M;return m>=x?m:x});}}):null,size({padding:c,apply({availableWidth:P,availableHeight:d,elements:M}){Object.assign(M.floating.style,{overflow:"auto",maxWidth:`${P}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${d}px)`});}})].filter(Boolean),whileElementsMounted:autoUpdate}),[w=a,V=p]=g.placement.split("-");a==="selection"&&(w="selection");let G=T(()=>({anchor:[w,V].filter(Boolean).join(" ")}),[w,V]),K=useInnerOffset(g,{overflowRef:u,onChange:o}),{getReferenceProps:Q,getFloatingProps:X}=useInteractions([K]),Y=o$1(P=>{s(P),b.setFloating(P);});return k$1($.Provider,{value:r},k$1(y$1.Provider,{value:{setFloating:Y,setReference:b.setReference,styles:S,getReferenceProps:Q,getFloatingProps:X,slot:G}},e))}function ce(e){n(()=>{if(!e)return;let t=new MutationObserver(()=>{let n=window.getComputedStyle(e).maxHeight,r=parseFloat(n);if(isNaN(r))return;let l=parseInt(n);isNaN(l)||r!==l&&(e.style.maxHeight=`${Math.ceil(r)}px`);});return t.observe(e,{attributes:true,attributeFilter:["style"]}),()=>{t.disconnect();}},[e]);}function ge(e,t){var o,u,f;let n=O$1((o=e==null?void 0:e.gap)!=null?o:"var(--anchor-gap, 0)",t),r=O$1((u=e==null?void 0:e.offset)!=null?u:"var(--anchor-offset, 0)",t),l=O$1((f=e==null?void 0:e.padding)!=null?f:"var(--anchor-padding, 0)",t);return {...e,gap:n,offset:r,padding:l}}function O$1(e,t,n$1=void 0){let r=p$2(),l=o$1((s,i)=>{if(s==null)return [n$1,null];if(typeof s=="number")return [s,null];if(typeof s=="string"){if(!i)return [n$1,null];let F=J$1(s,i);return [F,E=>{let A=q$1(s);{let c=A.map(h=>window.getComputedStyle(i).getPropertyValue(h));r.requestAnimationFrame(function h(){r.nextFrame(h);let a=false;for(let[b,S]of A.entries()){let g=window.getComputedStyle(i).getPropertyValue(S);if(c[b]!==g){c[b]=g,a=true;break}}if(!a)return;let p=J$1(s,i);F!==p&&(E(p),F=p);});}return r.dispose}]}return [n$1,null]}),o=T(()=>l(e,t)[0],[e,t]),[u=o,f]=d();return n(()=>{let[s,i]=l(e,t);if(f(s),!!i)return i(f)},[e,t]),u}function q$1(e){let t=/var\((.*)\)/.exec(e);if(t){let n=t[1].indexOf(",");if(n===-1)return [t[1]];let r=t[1].slice(0,n).trim(),l=t[1].slice(n+1).trim();return l?[r,...q$1(l)]:[r]}return []}function J$1(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let r=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),r}

function u(l){throw new Error("Unexpected object: "+l)}var c$1=(i=>(i[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i))(c$1||{});function f(l,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),s=r!=null?r:-1;switch(l.focus){case 0:{for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 1:{s===-1&&(s=t.length);for(let e=s-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 2:{for(let e=s+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 3:{for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 4:{for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===l.id)return e;return r}case 5:return null;default:u(l);}}

const c={Idle:{kind:"Idle"},Tracked:e=>({kind:"Tracked",position:e}),Moved:{kind:"Moved"}};function a$2(e){let t=e.getBoundingClientRect();return `${t.x},${t.y}`}function p$1(e,t,i){let n=o$2();if(t.kind==="Tracked"){let o=function(){d!==a$2(e)&&(n.dispose(),i());};let{position:d}=t,s=new ResizeObserver(o);s.observe(e),n.add(()=>s.disconnect()),n.addEventListener(window,"scroll",o,{passive:true}),n.addEventListener(window,"resize",o);}return ()=>n.dispose()}

let a$1=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var l,n;let i=(l=e.innerText)!=null?l:"",t=e.cloneNode(true);if(!n$2(t))return i;let u=false;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=true;let r=u?(n=t.innerText)!=null?n:"":i;return a$1.test(r)&&(r=r.replace(a$1,"")),r}function F(e){let i=e.getAttribute("aria-label");if(typeof i=="string")return i.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map(r=>{let l=document.getElementById(r);if(l){let n=l.getAttribute("aria-label");return typeof n=="string"?n.trim():o(l).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}

function s$1(c){let t=A(""),r=A("");return o$1(()=>{let e=c.current;if(!e)return "";let u=e.innerText;if(t.current===u)return r.current;let n=F(e).trim().toLowerCase();return t.current=u,r.current=n,n})}

var y=Object.defineProperty;var M=(e,i,t)=>i in e?y(e,i,{enumerable:true,configurable:true,writable:true,value:t}):e[i]=t;var S=(e,i,t)=>(M(e,typeof i!="symbol"?i+"":i,t),t);var P=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(P||{}),D=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(D||{}),C=(o=>(o[o.OpenMenu=0]="OpenMenu",o[o.CloseMenu=1]="CloseMenu",o[o.GoToItem=2]="GoToItem",o[o.Search=3]="Search",o[o.ClearSearch=4]="ClearSearch",o[o.RegisterItems=5]="RegisterItems",o[o.UnregisterItems=6]="UnregisterItems",o[o.SetButtonElement=7]="SetButtonElement",o[o.SetItemsElement=8]="SetItemsElement",o[o.SortItems=9]="SortItems",o[o.MarkButtonAsMoved=10]="MarkButtonAsMoved",o))(C||{});function x(e,i=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,n=G$2(i(e.items.slice()),s=>s.dataRef.current.domRef.current),r=t?n.indexOf(t):null;return r===-1&&(r=null),{items:n,activeItemIndex:r}}let k={[1](e){if(e.menuState===1)return e;let i=e.buttonElement?c.Tracked(a$2(e.buttonElement)):e.buttonPositionState;return {...e,activeItemIndex:null,pendingFocus:{focus:c$1.Nothing},menuState:1,buttonPositionState:i}},[0](e,i){return e.menuState===0?e:{...e,__demoMode:false,pendingFocus:i.focus,menuState:0,buttonPositionState:c.Idle}},[2]:(e,i)=>{var s,l,a,I,f$1;if(e.menuState===1)return e;let t={...e,searchQuery:"",activationTrigger:(s=i.trigger)!=null?s:1,__demoMode:false};if(i.focus===c$1.Nothing)return {...t,activeItemIndex:null};if(i.focus===c$1.Specific)return {...t,activeItemIndex:e.items.findIndex(d=>d.id===i.id)};if(i.focus===c$1.Previous){let d=e.activeItemIndex;if(d!==null){let o=e.items[d].dataRef.current.domRef,c=f(i,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});if(c!==null){let u=e.items[c].dataRef.current.domRef;if(((l=o.current)==null?void 0:l.previousElementSibling)===u.current||((a=u.current)==null?void 0:a.previousElementSibling)===null)return {...t,activeItemIndex:c}}}}else if(i.focus===c$1.Next){let d=e.activeItemIndex;if(d!==null){let o=e.items[d].dataRef.current.domRef,c=f(i,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});if(c!==null){let u=e.items[c].dataRef.current.domRef;if(((I=o.current)==null?void 0:I.nextElementSibling)===u.current||((f$1=u.current)==null?void 0:f$1.nextElementSibling)===null)return {...t,activeItemIndex:c}}}}let n=x(e),r=f(i,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});return {...t,...n,activeItemIndex:r}},[3]:(e,i)=>{let n=e.searchQuery!==""?0:1,r=e.searchQuery+i.value.toLowerCase(),l=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(I=>{var f;return ((f=I.dataRef.current.textValue)==null?void 0:f.startsWith(r))&&!I.dataRef.current.disabled}),a=l?e.items.indexOf(l):-1;return a===-1||a===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:a,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,i)=>{let t=e.items.concat(i.items.map(r=>r)),n=e.activeItemIndex;return e.pendingFocus.focus!==c$1.Nothing&&(n=f(e.pendingFocus,{resolveItems:()=>t,resolveActiveIndex:()=>e.activeItemIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled})),{...e,items:t,activeItemIndex:n,pendingFocus:{focus:c$1.Nothing},pendingShouldSort:true}},[6]:(e,i)=>{let t=e.items,n=[],r=new Set(i.items);for(let[s,l]of t.entries())if(r.has(l.id)&&(n.push(s),r.delete(l.id),r.size===0))break;if(n.length>0){t=t.slice();for(let s of n.reverse())t.splice(s,1);}return {...e,items:t,activationTrigger:1}},[7]:(e,i)=>e.buttonElement===i.element?e:{...e,buttonElement:i.element},[8]:(e,i)=>e.itemsElement===i.element?e:{...e,itemsElement:i.element},[9]:e=>e.pendingShouldSort?{...e,...x(e),pendingShouldSort:false}:e,[10](e){return e.buttonPositionState.kind!=="Tracked"?e:{...e,buttonPositionState:c.Moved}}};class h extends T$1{constructor(t){super(t);S(this,"actions",{registerItem:k$2(()=>{let t=[],n=new Set;return [(r,s)=>{n.has(s)||(n.add(s),t.push({id:r,dataRef:s}));},()=>(n.clear(),this.send({type:5,items:t.splice(0)}))]}),unregisterItem:k$2(()=>{let t=[];return [n=>t.push(n),()=>this.send({type:6,items:t.splice(0)})]})});S(this,"selectors",{activeDescendantId(t){var s;let n=t.activeItemIndex,r=t.items;return n===null||(s=r[n])==null?void 0:s.id},isActive(t,n){var l;let r=t.activeItemIndex,s=t.items;return r!==null?((l=s[r])==null?void 0:l.id)===n:false},shouldScrollIntoView(t,n){return t.__demoMode||t.menuState!==0||t.activationTrigger===0?false:this.isActive(t,n)},didButtonMove(t){return t.buttonPositionState.kind==="Moved"}});this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9});});});{let n=this.state.id,r=x$2.get(null);this.disposables.add(r.on(k$3.Push,s=>{!r.selectors.isTop(s,n)&&this.state.menuState===0&&this.send({type:1});})),this.on(0,()=>r.actions.push(n)),this.on(1,()=>r.actions.pop(n));}this.disposables.group(n=>{this.on(1,r=>{r.buttonElement&&(n.dispose(),n.add(p$1(r.buttonElement,r.buttonPositionState,()=>{this.send({type:10});})));});});}static new({id:t,__demoMode:n=false}){return new h({id:t,__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:false,pendingFocus:{focus:c$1.Nothing},buttonPositionState:c.Idle})}reduce(t,n){return u$3(n.type,k,t,n)}}

const a=X$1(null);function p(t){let n=x$1(a);if(n===null){let e=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,s),e}return n}function s({id:t,__demoMode:n=false}){let e=T(()=>h.new({id:t,__demoMode:n}),[]);return c$2(()=>e.dispose()),e}

let Ze=S$3;function et(m,y){let l=g$1(),{__demoMode:a$1=false,...p}=m,s$1=s({id:l,__demoMode:a$1}),[n,M,f]=S$2(s$1,d=>[d.menuState,d.itemsElement,d.buttonElement]),_=y$3(y),o=x$2.get(null),F=S$2(o,q$2(d=>o.selectors.isTop(d,l),[o,l]));k$4(F,[f,M],(d,T)=>{var P;s$1.send({type:C.CloseMenu}),H$3(T,I.Loose)||(d.preventDefault(),(P=s$1.state.buttonElement)==null||P.focus());});let I$1=o$1(()=>{s$1.send({type:C.CloseMenu});}),b=n$1({open:n===P.Open,close:I$1}),i={ref:_},g=K$1();return gn.createElement(Ae,null,gn.createElement(a.Provider,{value:s$1},gn.createElement(c$3,{value:u$3(n,{[P.Open]:i$2.Open,[P.Closed]:i$2.Closed})},g({ourProps:i,theirProps:p,slot:b,defaultTag:Ze,name:"Menu"}))))}let tt="button";function ot(m,y){let l=p("Menu.Button"),a=g$1(),{id:p$1=`headlessui-menu-button-${a}`,disabled:s=false,autoFocus:n=false,...M}=m,f=A(null),_=be(),o=y$3(y,f,Fe(),o$1(t=>l.send({type:C.SetButtonElement,element:t}))),F=o$1(t=>{switch(t.key){case o$4.Space:case o$4.Enter:case o$4.ArrowDown:t.preventDefault(),t.stopPropagation(),l.send({type:C.OpenMenu,focus:{focus:c$1.First}});break;case o$4.ArrowUp:t.preventDefault(),t.stopPropagation(),l.send({type:C.OpenMenu,focus:{focus:c$1.Last}});break}}),I=o$1(t=>{switch(t.key){case o$4.Space:t.preventDefault();break}}),[b,i,g]=S$2(l,t=>[t.menuState,t.buttonElement,t.itemsElement]),d=b===P.Open;L(d,{trigger:i,action:q$2(t=>{if(i!=null&&i.contains(t.target))return S$1.Ignore;let S=t.target.closest('[role="menuitem"]:not([data-disabled])');return n$2(S)?S$1.Select(S):g!=null&&g.contains(t.target)?S$1.Ignore:S$1.Close},[i,g]),close:q$2(()=>l.send({type:C.CloseMenu}),[]),select:q$2(t=>t.click(),[])});let T=s$2(t=>{var S;s||(b===P.Open?(bn(()=>l.send({type:C.CloseMenu})),(S=f.current)==null||S.focus({preventScroll:true})):(t.preventDefault(),l.send({type:C.OpenMenu,focus:{focus:c$1.Nothing},trigger:D.Pointer})));}),{isFocusVisible:P$1,focusProps:L$1}=$0c4a58759813079a$export$4e328f61c538687f({autoFocus:n}),{isHovered:O,hoverProps:v}=$e969f22b6713ca4a$export$ae780daf29e6d456({isDisabled:s}),{pressed:D$1,pressProps:U}=w$1({disabled:s}),H=n$1({open:b===P.Open,active:D$1||b===P.Open,disabled:s,hover:O,focus:P$1,autofocus:n}),G=V$2(_(),{ref:o,id:p$1,type:e(m,f.current),"aria-haspopup":"menu","aria-controls":g==null?void 0:g.id,"aria-expanded":b===P.Open,disabled:s||void 0,autoFocus:n,onKeyDown:F,onKeyUp:I},T,L$1,v,U);return K$1()({ourProps:G,theirProps:M,slot:H,defaultTag:tt,name:"Menu.Button"})}let nt="div",rt=A$1.RenderStrategy|A$1.Static;function at(m,y){let l=g$1(),{id:a=`headlessui-menu-items-${l}`,anchor:p$1,portal:s=false,modal:n=true,transition:M=false,...f}=m,_=ye(p$1),o=p("Menu.Items"),[F,I]=Re(_),b=Te(),[i,g]=d(null),d$2=y$3(y,_?F:null,o$1(e=>o.send({type:C.SetItemsElement,element:e})),g),[T,P$1]=S$2(o,e=>[e.menuState,e.buttonElement]),L=u$4(P$1),O=u$4(i);_&&(s=true);let v=u$5(),[D,U]=N$1(M,i,v!==null?(v&i$2.Open)===i$2.Open:T===P.Open);p$3(D,P$1,()=>{o.send({type:C.CloseMenu});});let H=S$2(o,e=>e.__demoMode),G=H?false:n&&T===P.Open;f$2(G,O);let w$1=H?false:n&&T===P.Open;y$4(w$1,{allowed:q$2(()=>[P$1,i],[P$1,i])});let S=S$2(o,o.selectors.didButtonMove)?false:D;y$2(()=>{let e=i;e&&T===P.Open&&(d$1(e)||e.focus({preventScroll:true}));},[T,i]),F$1(T===P.Open,{container:i,accept(e){return e.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none");}});let z=p$2(),le$1=o$1(e=>{var N,Y,Z;switch(z.dispose(),e.key){case o$4.Space:if(o.state.searchQuery!=="")return e.preventDefault(),e.stopPropagation(),o.send({type:C.Search,value:e.key});case o$4.Enter:if(e.preventDefault(),e.stopPropagation(),o.state.activeItemIndex!==null){let{dataRef:de}=o.state.items[o.state.activeItemIndex];(Y=(N=de.current)==null?void 0:N.domRef.current)==null||Y.click();}o.send({type:C.CloseMenu}),K$2(o.state.buttonElement);break;case o$4.ArrowDown:return e.preventDefault(),e.stopPropagation(),o.send({type:C.GoToItem,focus:c$1.Next});case o$4.ArrowUp:return e.preventDefault(),e.stopPropagation(),o.send({type:C.GoToItem,focus:c$1.Previous});case o$4.Home:case o$4.PageUp:return e.preventDefault(),e.stopPropagation(),o.send({type:C.GoToItem,focus:c$1.First});case o$4.End:case o$4.PageDown:return e.preventDefault(),e.stopPropagation(),o.send({type:C.GoToItem,focus:c$1.Last});case o$4.Escape:e.preventDefault(),e.stopPropagation(),bn(()=>o.send({type:C.CloseMenu})),(Z=o.state.buttonElement)==null||Z.focus({preventScroll:true});break;case o$4.Tab:e.preventDefault(),e.stopPropagation(),bn(()=>o.send({type:C.CloseMenu})),R(o.state.buttonElement,e.shiftKey?T$2.Previous:T$2.Next);break;default:e.key.length===1&&(o.send({type:C.Search,value:e.key}),z.setTimeout(()=>o.send({type:C.ClearSearch}),350));break}}),pe=o$1(e=>{switch(e.key){case o$4.Space:e.preventDefault();break}}),ie=n$1({open:T===P.Open}),ue=V$2(_?b():{},{"aria-activedescendant":S$2(o,o.selectors.activeDescendantId),"aria-labelledby":S$2(o,e=>{var N;return (N=e.buttonElement)==null?void 0:N.id}),id:a,onKeyDown:le$1,onKeyUp:pe,role:"menu",tabIndex:T===P.Open?0:void 0,ref:d$2,style:{...f.style,...I,"--button-width":w(D,P$1,true).width},...x$3(U)}),me=K$1();return gn.createElement(le,{enabled:s?m.static||D:false,ownerDocument:L},me({ourProps:ue,theirProps:f,slot:ie,defaultTag:nt,features:rt,visible:S,name:"Menu.Items"}))}let st=S$3;function lt(m,y){let l=g$1(),{id:a=`headlessui-menu-item-${l}`,disabled:p$1=false,...s}=m,n$2=p("Menu.Item"),M=S$2(n$2,t=>n$2.selectors.isActive(t,a)),f=A(null),_=y$3(y,f),o=S$2(n$2,t=>n$2.selectors.shouldScrollIntoView(t,a));n(()=>{if(o)return o$2().requestAnimationFrame(()=>{var t,S;(S=(t=f.current)==null?void 0:t.scrollIntoView)==null||S.call(t,{block:"nearest"});})},[o,f]);let F=s$1(f),I=A({disabled:p$1,domRef:f,get textValue(){return F()}});n(()=>{I.current.disabled=p$1;},[I,p$1]),n(()=>(n$2.actions.registerItem(a,I),()=>n$2.actions.unregisterItem(a)),[I,a]);let b=o$1(()=>{n$2.send({type:C.CloseMenu});}),i=o$1(t=>{if(p$1)return t.preventDefault();n$2.send({type:C.CloseMenu}),K$2(n$2.state.buttonElement);}),g=o$1(()=>{if(p$1)return n$2.send({type:C.GoToItem,focus:c$1.Nothing});n$2.send({type:C.GoToItem,focus:c$1.Specific,id:a});}),d=u$1(),T=o$1(t=>d.update(t)),P=o$1(t=>{d.wasMoved(t)&&(p$1||M||n$2.send({type:C.GoToItem,focus:c$1.Specific,id:a,trigger:D.Pointer}));}),L=o$1(t=>{d.wasMoved(t)&&(p$1||M&&n$2.state.activationTrigger===D.Pointer&&n$2.send({type:C.GoToItem,focus:c$1.Nothing}));}),[O,v]=V$1(),[D$1,U]=H$2(),H=n$1({active:M,focus:M,disabled:p$1,close:b}),G={id:a,ref:_,role:"menuitem",tabIndex:p$1===true?void 0:-1,"aria-disabled":p$1===true?true:void 0,"aria-labelledby":O,"aria-describedby":D$1,disabled:void 0,onClick:i,onFocus:g,onPointerEnter:T,onMouseEnter:T,onPointerMove:P,onMouseMove:P,onPointerLeave:L,onMouseLeave:L},w=K$1();return gn.createElement(v,null,gn.createElement(U,null,w({ourProps:G,theirProps:s,slot:H,defaultTag:st,name:"Menu.Item"})))}let pt="div";function it(m,y){let[l,a]=V$1(),p=m,s={ref:y,"aria-labelledby":l,role:"group"},n=K$1();return gn.createElement(a,null,n({ourProps:s,theirProps:p,slot:{},defaultTag:pt,name:"Menu.Section"}))}let ut="header";function mt(m,y){let l=g$1(),{id:a=`headlessui-menu-heading-${l}`,...p}=m,s=C$1();n(()=>s.register(a),[a,s.register]);let n$1={id:a,ref:y,role:"presentation",...s.props};return K$1()({ourProps:n$1,theirProps:p,slot:{},defaultTag:ut,name:"Menu.Heading"})}let dt="div";function Tt(m,y){let l=m,a={ref:y,role:"separator"};return K$1()({ourProps:a,theirProps:l,slot:{},defaultTag:dt,name:"Menu.Separator"})}let ct=Y$1(et),ft=Y$1(ot),yt=Y$1(at),gt=Y$1(lt),Pt=Y$1(it),Et=Y$1(mt),Mt=Y$1(Tt),lo=Object.assign(ct,{Button:ft,Items:yt,Item:gt,Section:Pt,Heading:Et,Separator:Mt});

const U=({chains:o,appId:t,address:s,rpcConfig:c})=>Promise.all(o.map((async o=>{let m=createPublicClient({chain:o,transport:http(n$3(o,c,t))}),l=await m.getBalance({address:s}).catch((()=>0n)),d=null,h=Si[o.id];if(h){let{balance:e}=await n$4({address:s,chain:o,rpcConfig:c,appId:t,erc20Address:h});d=e;}return {balance:l,erc20Balance:d,erc20Address:h,chain:o}}))),W=({balance:e,className:r,chain:a})=>/*#__PURE__*/u$6(d$2,{className:r,$state:void 0,children:/*#__PURE__*/u$6(z,{balance:e,chain:a})}),z=({balance:e,chain:r})=>/*#__PURE__*/u$6(S$3,{children:[/*#__PURE__*/u$6(H,{children:[/*#__PURE__*/u$6(O,{chainId:"object"==typeof r?r.id:"solana"}),/*#__PURE__*/u$6(n$5,{children:"object"==typeof r?r.name:e$3(r)})]}),/*#__PURE__*/u$6(n$6,{isLoading:false,isPulsing:false,color:"gray",children:[/*#__PURE__*/u$6(K,{children:/*#__PURE__*/u$6(ForwardRef,{})}),e]})]});let H=gt$1.div`
  display: flex;
  align-items: center;
`,K=gt$1.div`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.2rem;
`,O=gt$1(w$2)`
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
  margin-right: 0.5rem;
  border-radius: 4px;
`;const V=({options:e,onSelect:r,selected:a,className:o})=>/*#__PURE__*/u$6(lo,{as:Y,children:[/*#__PURE__*/u$6(ft,{as:X,children:[/*#__PURE__*/u$6(z,{balance:a.balance,chain:a.chain}),/*#__PURE__*/u$6(J,{height:16})]}),/*#__PURE__*/u$6(yt,{as:G,className:o,children:e.map(((e,a)=>/*#__PURE__*/u$6(gt,{as:q,onClick:()=>r(a),children:/*#__PURE__*/u$6(z,{balance:e.balance,chain:e.chain})},a)))})]});let Y=gt$1.div`
  width: 100%;
  position: relative;
`,G=gt$1.div`
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  background-color: var(--privy-color-background);
  border-radius: var(--privy-border-radius-md);
  overflow: hidden auto;
  box-shadow: var(--privy-shadow-popover);
  max-height: 11.75rem;

  && {
    border: solid 1px var(--privy-color-foreground-4);
  }

  z-index: 1;
`,q=gt$1.button`
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
`,J=gt$1(ForwardRef$1)`
  height: 1rem;
  margin-left: 0.5rem;
`,X=gt$1.button`
  ${e$6}

  /* Push the chip all the way to the right */
  span {
    margin-left: auto;
  }

  ${J} {
    transition: rotate 100ms ease-in;
  }

  &[aria-expanded='true'] {
    ${J} {
      rotate: -180deg;
    }
  }
`;const Z=({displayName:e,errorMessage:r,configuredFundingChain:a,formattedBalance:i,fundingAmount:n,fundingCurrency:b,fundingAmountInUsd:w,options:C,selectedOption:N,isPreparing:x,isSubmitting:T,addressToFund:B,fundingWalletAddress:S,onSubmit:I,onSelect:A$1,onAmountChange:$})=>{let E=A(null);return u$6(S$3,{children:[/*#__PURE__*/u$6(t$1,{}),/*#__PURE__*/u$6(c$4,{}),/*#__PURE__*/u$6(e$2,{children:"Transfer from another network"}),/*#__PURE__*/u$6(r$1,{children:["You need more funds on the"," ","object"==typeof a?a.name:e$3(a)," ","network. Bridge from another blockchain network."]}),/*#__PURE__*/u$6(a$5,{style:{marginTop:"2rem"},children:[/*#__PURE__*/u$6(p$4,{onClick:()=>E.current?.focus(),children:[/*#__PURE__*/u$6(s$4,{ref:E,value:n,onChange:e=>{let r=e.target.value;if(/^[0-9.]*$/.test(r)&&r.split(".").length-1<=1){let e=/\.$/.test(r)?".":"",a=Number(r.replace(/\.$/,"")||"0");if(Number.isNaN(a))return void $("0");$(a.toString()+e);}}}),/*#__PURE__*/u$6(c$5,{children:b})]}),w&&/*#__PURE__*/u$6(l$2,{children:w})]}),/*#__PURE__*/u$6(s$5,{style:{marginTop:"1.5rem"},children:[/*#__PURE__*/u$6(e$4,{children:"From"}),/*#__PURE__*/u$6(e$4,{children:$i(S)})]}),/*#__PURE__*/u$6(V,{selected:{chain:N.chain,balance:N.isErc20Quote?t$2({amount:N.erc20Balance??0n,decimals:6})+" USDC":c$6(N.balance,N.chain.nativeCurrency.symbol,3,true)},options:C.map((({chain:e,balance:r,isErc20Quote:a,erc20Balance:o})=>({chain:e,balance:a?t$2({amount:o??0n,decimals:6})+" USDC":c$6(r,e.nativeCurrency.symbol,3,true)}))),onSelect:A$1}),/*#__PURE__*/u$6(s$5,{style:{marginTop:"1.5rem"},children:[/*#__PURE__*/u$6(e$4,{children:"To"}),/*#__PURE__*/u$6(e$4,{children:$i(B)})]}),/*#__PURE__*/u$6(W,{chain:a,balance:i}),/*#__PURE__*/u$6(e$5,{style:{marginTop:"1rem"},children:r}),/*#__PURE__*/u$6(u$7,{style:{marginTop:"1rem"},loading:T||x,disabled:x||T,onClick:I,children:["Confirm with ",e]}),/*#__PURE__*/u$6(s$6,{}),/*#__PURE__*/u$6(h$2,{})]})};

export { U, Z };
