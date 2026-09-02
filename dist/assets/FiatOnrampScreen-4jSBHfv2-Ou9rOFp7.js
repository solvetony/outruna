var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { dg as A, df as d, de as q, ff as _, fg as React, gq as require$$0, gr as an, gs as P, dh as y, dd as D, dk as u, gt as hn, gu as L, gv as mn, dm as k, di as T, fe as $, dG as S, dZ as X, dY as x, eC as bn, dj as F, gw as N, dq as g, gx as Ml, gy as kl, gz as Al, gA as bl, gB as Sl, gC as vl, gD as Zl, gE as _l, gF as El, _ as __vitePreload, gG as t$1, dl as le$1, dy as i$1, du as gt$1, dC as s$1, dD as A$1 } from "./index-R3UC2dO4.js";
import { w, c, p as p$1 } from "./SelectSourceAsset-C4di8q02-CLMnVHGE.js";
import { Z } from "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import { n } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import { w as w$1 } from "./ConnectPhoneForm-CbYkcsf6-uDxZay3L.js";
import { m } from "./CopyableText-ChtfBWx4-DFbzGFnx.js";
import { t as t$2, h } from "./GooglePay-DA-Ff7zK-TW3u64pt.js";
import { r as r$1 } from "./chevron-down-BEXO1fb9.js";
import { I as Info } from "./info-B6Bfgzgu.js";
import { T as TriangleAlert } from "./triangle-alert-BBmiTmRd.js";
import { c as createLucideIcon } from "./createLucideIcon-COMOll4V.js";
import { C as CircleX } from "./circle-x-Dlr4sq2Y.js";
import { C as Check } from "./check-Di0e4xHX.js";
import { C as CreditCard } from "./credit-card-2elgrZtU.js";
import { X as X$1 } from "./x-BGzNGWEl.js";
import { L as Lock } from "./lock-CoZpUPHP.js";
import { W as Wallet } from "./wallet-DpDhZaTG.js";
import { S as Smartphone } from "./smartphone-BymtDnl2.js";
import { i as isShadowRoot, c as isHTMLElement, q as getComputedStyle, t as floor, v as getNodeName, w as isNode, g as getWindow, d as isElement, n as isLastTraversableNode, p as getParentNode, u as useFloating$1, j as evaluate, x as getPaddingObject, y as getAlignmentAxis, z as getAlignment, A as getAxisLength, B as clamp, C as hide$1, o as offset, f as flip, s as shift, D as limitShift, a as size, E as getSide, F as getSideAxis, b as autoUpdate, G as isOverflowElement } from "./floating-ui.react-dom-WjtiPCEh.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
import "./Chip-D2-wZOHJ-CEw4ZuYL.js";
import "./LoadingSkeleton-U6-3yFwI-DJcpe7Sx.js";
import "./copy-C3pj4YGq.js";
const t = { path: "/api/v1/onramp/stripe/create_link_auth_intent", method: "POST" }, e = { path: "/api/v1/onramp/stripe/exchange_tokens", method: "POST" }, p = { path: "/api/v1/onramp/stripe/customer", method: "GET" }, a = { path: "/api/v1/onramp/stripe/customer/wallets", method: "GET" }, o = { path: "/api/v1/onramp/stripe/customer/payment_tokens", method: "GET" }, s = { path: "/api/v1/onramp/stripe/create_onramp_session", method: "POST" }, i = { path: "/api/v1/onramp/stripe/quote/:session_id", method: "POST" }, r = { path: "/api/v1/onramp/stripe/checkout/:session_id", method: "POST" };
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
];
const Building = createLucideIcon("building", __iconNode$9);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$8);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$7);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$6);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$5);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M10 18v-7", key: "wt116b" }],
  [
    "path",
    {
      d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
      key: "1m329m"
    }
  ],
  ["path", { d: "M14 18v-7", key: "vav6t3" }],
  ["path", { d: "M18 18v-7", key: "aexdmj" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M6 18v-7", key: "1ivflk" }]
];
const Landmark = createLucideIcon("landmark", __iconNode$4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$3);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = A(controlled !== void 0);
  const [valueState, setValue] = d(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = q((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
const noop = () => {
};
const useIsoLayoutEffect = typeof document !== "undefined" ? _ : noop;
function useOnFirstRender(fn) {
  const ref = A(true);
  if (ref.current) {
    ref.current = false;
    fn();
  }
}
const SafeReact = {
  ...React
};
const UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = A(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
const useInsertionEffect = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => {
      var _a2;
      return (_a2 = stable.callback) == null ? void 0 : _a2.call(stable, ...args);
    },
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
}
function useMergedRefs(a2, b, c2, d2) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a2, b, c2, d2)) {
    update(forkRef, [a2, b, c2, d2]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a2, b, c2, d2) {
  return forkRef.refs[0] !== a2 || forkRef.refs[1] !== b || forkRef.refs[2] !== c2 || forkRef.refs[3] !== d2;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index) => ref !== newRefs[index]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i2 = 0; i2 < refs.length; i2 += 1) {
        const ref = refs[i2];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i2] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
        }
      }
      forkRef.cleanup = () => {
        for (let i2 = 0; i2 < refs.length; i2 += 1) {
          const ref = refs[i2];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i2];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
          }
        }
      };
    }
  };
}
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}
const visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
const visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  top: 0,
  left: 0
};
const visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: "absolute"
};
function createFormatErrorMessage(baseUrl, prefix) {
  return function formatErrorMessage2(code, ...args) {
    const url = new URL(baseUrl);
    url.searchParams.set("code", code.toString());
    args.forEach((arg) => url.searchParams.append("args[]", arg));
    return `${prefix} error #${code}; visit ${url} for the full message.`;
  };
}
const formatErrorMessage = createFormatErrorMessage("https://base-ui.com/production-error", "Base UI");
const createSelector = (a2, b, c2, d2, e2, f, ...other) => {
  if (other.length > 0) {
    throw new Error(formatErrorMessage(1));
  }
  let selector;
  if (a2) {
    selector = a2;
  } else {
    throw (
      /* minify-error-disabled */
      new Error("Missing arguments")
    );
  }
  return selector;
};
var shim = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_production;
function requireUseSyncExternalStoreShim_production() {
  if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
  hasRequiredUseSyncExternalStoreShim_production = 1;
  var React2 = require$$0;
  function is(x2, y2) {
    return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React2.useState, useEffect = React2.useEffect, useLayoutEffect = React2.useLayoutEffect, useDebugValue = React2.useDebugValue;
  function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(
      function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      },
      [subscribe, value, getSnapshot]
    );
    useEffect(
      function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      },
      [subscribe]
    );
    useDebugValue(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
  }
  var shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
  useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React2.useSyncExternalStore ? React2.useSyncExternalStore : shim2;
  return useSyncExternalStoreShim_production;
}
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim) return shim.exports;
  hasRequiredShim = 1;
  {
    shim.exports = requireUseSyncExternalStoreShim_production();
  }
  return shim.exports;
}
var shimExports = requireShim();
var withSelector = { exports: {} };
var withSelector_production = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_production;
function requireWithSelector_production() {
  if (hasRequiredWithSelector_production) return withSelector_production;
  hasRequiredWithSelector_production = 1;
  var React2 = require$$0, shim2 = requireShim();
  function is(x2, y2) {
    return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim2.useSyncExternalStore, useRef = React2.useRef, useEffect = React2.useEffect, useMemo = React2.useMemo, useDebugValue = React2.useDebugValue;
  withSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue(value);
    return value;
  };
  return withSelector_production;
}
var hasRequiredWithSelector;
function requireWithSelector() {
  if (hasRequiredWithSelector) return withSelector.exports;
  hasRequiredWithSelector = 1;
  {
    withSelector.exports = requireWithSelector_production();
  }
  return withSelector.exports;
}
var withSelectorExports = requireWithSelector();
const majorVersion = parseInt(an, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}
const canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
const useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = q(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return shimExports.useSyncExternalStore(store.subscribe, getSelection, getSelection);
}
function useStoreFast(store, selector, a1, a2, a3) {
  {
    return useStoreR19(store, selector, a1, a2, a3);
  }
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return withSelectorExports.useSyncExternalStoreWithSelector(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}
class Store {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  // Internal state to handle recursive `setState()` calls
  constructor(state) {
    /**
     * Registers a listener that will be called whenever the store's state changes.
     *
     * @param fn The listener function to be called on state changes.
     * @returns A function to unsubscribe the listener.
     */
    __publicField(this, "subscribe", (fn) => {
      this.listeners.add(fn);
      return () => {
        this.listeners.delete(fn);
      };
    });
    /**
     * Returns the current state of the store.
     */
    __publicField(this, "getSnapshot", () => {
      return this.state;
    });
    this.state = state;
    this.listeners = /* @__PURE__ */ new Set();
    this.updateTick = 0;
  }
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        return;
      }
      listener(newState);
    }
  }
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState({
          ...this.state,
          ...changes
        });
        return;
      }
    }
  }
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState({
        ...this.state,
        [key]: value
      });
    }
  }
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const newState = {
      ...this.state
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    return useStore(this, selector, a1, a2, a3);
  }
}
function NOOP() {
}
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});
class ReactStore extends Store {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state, context = {}, selectors2) {
    super(state);
    this.context = context;
    this.selectors = selectors2;
  }
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(key, value) {
    P(key);
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
    }, [store, key, value]);
  }
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(key, value) {
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
      return () => {
        store.set(key, void 0);
      };
    }, [store, key, value]);
  }
  /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(statePart) {
    const store = this;
    const dependencies = Object.values(statePart);
    useIsoLayoutEffect(() => {
      store.update(statePart);
    }, [store, ...dependencies]);
  }
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(key, controlled) {
    P(key);
    const store = this;
    const isControlled = controlled !== void 0;
    useIsoLayoutEffect(() => {
      if (isControlled && !Object.is(store.state[key], controlled)) {
        store.setState({
          ...store.state,
          [key]: controlled
        });
      }
    }, [store, key, controlled, isControlled]);
  }
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select(key, a1, a2, a3) {
    const selector = this.selectors[key];
    return selector(this.state, a1, a2, a3);
  }
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState(key, a1, a2, a3) {
    P(key);
    return useStore(this, this.selectors[key], a1, a2, a3);
  }
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(key, fn) {
    P(key);
    const stableFunction = useStableCallback(fn ?? NOOP);
    this.context[key] = stableFunction;
  }
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(key) {
    const ref = A(void 0);
    if (ref.current === void 0) {
      ref.current = (value) => {
        this.set(key, value);
      };
    }
    return ref.current;
  }
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe(selector, listener) {
    let selectFn;
    if (typeof selector === "function") {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe((nextState) => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
}
function mergeCleanups(...cleanups) {
  return () => {
    for (let i2 = 0; i2 < cleanups.length; i2 += 1) {
      const cleanup = cleanups[i2];
      if (cleanup) {
        cleanup();
      }
    }
  };
}
function ownerDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}
const EMPTY$2 = [];
function useOnMount(fn) {
  y(fn, EMPTY$2);
}
const EMPTY$1 = null;
class Scheduler {
  constructor() {
    /* This implementation uses an array as a backing data-structure for frame callbacks.
     * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
     * never calls the native `cancelAnimationFrame` if there are no frames left. This can
     * be much more efficient if there is a call pattern that alterns as
     * "request-cancel-request-cancel-…".
     * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
     * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
    __publicField(this, "callbacks", []);
    __publicField(this, "callbacksCount", 0);
    __publicField(this, "nextId", 1);
    __publicField(this, "startId", 1);
    __publicField(this, "isScheduled", false);
    __publicField(this, "tick", (timestamp) => {
      var _a2;
      this.isScheduled = false;
      const currentCallbacks = this.callbacks;
      const currentCallbacksCount = this.callbacksCount;
      this.callbacks = [];
      this.callbacksCount = 0;
      this.startId = this.nextId;
      if (currentCallbacksCount > 0) {
        for (let i2 = 0; i2 < currentCallbacks.length; i2 += 1) {
          (_a2 = currentCallbacks[i2]) == null ? void 0 : _a2.call(currentCallbacks, timestamp);
        }
      }
    });
  }
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange = false;
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index = id - this.startId;
    if (index < 0 || index >= this.callbacks.length) {
      return;
    }
    this.callbacks[index] = null;
    this.callbacksCount -= 1;
  }
}
const scheduler = new Scheduler();
class AnimationFrame {
  constructor() {
    __publicField(this, "currentId", EMPTY$1);
    __publicField(this, "cancel", () => {
      if (this.currentId !== EMPTY$1) {
        scheduler.cancel(this.currentId);
        this.currentId = EMPTY$1;
      }
    });
    __publicField(this, "disposeEffect", () => {
      return this.cancel;
    });
  }
  static create() {
    return new AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY$1;
      fn();
    });
  }
}
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
const EMPTY = 0;
class Timeout {
  constructor() {
    __publicField(this, "currentId", EMPTY);
    __publicField(this, "clear", () => {
      if (this.currentId !== EMPTY) {
        clearTimeout(this.currentId);
        this.currentId = EMPTY;
      }
    });
    __publicField(this, "disposeEffect", () => {
      return this.clear;
    });
  }
  static create() {
    return new Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY;
  }
}
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
function readRawData() {
  if (typeof navigator === "undefined") {
    return {
      userAgent: "",
      platform: "",
      maxTouchPoints: 0
    };
  }
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? 0
  };
}
const {
  userAgent,
  platform,
  maxTouchPoints
} = readRawData();
const lowerUserAgent = userAgent.toLowerCase();
const lowerPlatform = platform.toLowerCase();
const ios = /^i(os$|p)/.test(lowerPlatform) || lowerPlatform === "macintel" && maxTouchPoints > 1;
const ANDROID_STRING = "android";
const android = lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
const mac = !ios && lowerPlatform.startsWith("mac");
lowerPlatform.startsWith("win");
const apple = mac || ios;
const webkit = typeof CSS !== "undefined" && !!((_a = CSS.supports) == null ? void 0 : _a.call(CSS, "-webkit-backdrop-filter:none"));
const gecko = !webkit && lowerUserAgent.includes("firefox");
!webkit && lowerUserAgent.includes("chrom");
const voiceOver = apple;
const jsdom = /jsdom|happydom/.test(lowerUserAgent);
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isVirtualClick(event) {
  if (event.pointerType === "" && event.isTrusted) {
    return true;
  }
  if (android && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (jsdom) {
    return false;
  }
  return !android && event.width === 0 && event.height === 0 || android && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  return values.includes(pointerType);
}
function isClickLikeEvent(event) {
  const type = event.type;
  return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}
const FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
function activeElement(doc) {
  var _a2;
  let element = doc.activeElement;
  while (((_a2 = element == null ? void 0 : element.shadowRoot) == null ? void 0 : _a2.activeElement) != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  var _a2;
  if (!parent || !child) {
    return false;
  }
  const rootNode = (_a2 = child.getRootNode) == null ? void 0 : _a2.call(child);
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const eventAgain = event;
  return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
  return element.matches("html,body");
}
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isTypeableCombobox(element) {
  if (!element) {
    return false;
  }
  return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) || floatingElement;
}
const none = "none";
const triggerPress = "trigger-press";
const triggerHover = "trigger-hover";
const outsidePress = "outside-press";
const itemPress = "item-press";
const closePress = "close-press";
const inputChange = "input-change";
const inputClear = "input-clear";
const inputPress = "input-press";
const focusOut = "focus-out";
const escapeKey = "escape-key";
const listNavigation = "list-navigation";
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}
function createGenericEventDetails(reason, event, customProperties) {
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    ...custom
  };
  return details;
}
const FocusGuard = /* @__PURE__ */ D(function FocusGuard2(props, ref) {
  const [role, setRole] = d();
  useIsoLayoutEffect(() => {
    if (voiceOver && webkit) {
      setRole("button");
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /* @__PURE__ */ u("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
function isDifferentGridRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfListBounds(list, index) {
  return index < 0 || index >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    disabledIndices
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledListIndex(list, {
  startingIndex = -1,
  decrement = false,
  disabledIndices,
  amount = 1
} = {}) {
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (index >= 0 && index <= list.length - 1 && isListIndexDisabled(list, index, disabledIndices));
  return index;
}
function getGridNavigatedIndex(list, {
  event,
  orientation,
  loopFocus,
  onLoop,
  rtl,
  cols,
  disabledIndices,
  minIndex,
  maxIndex,
  prevIndex,
  stopEvent: stop = false
}) {
  let nextIndex = prevIndex;
  let verticalDirection;
  if (event.key === ARROW_UP) {
    verticalDirection = "up";
  } else if (event.key === ARROW_DOWN) {
    verticalDirection = "down";
  }
  if (verticalDirection) {
    const rows = [];
    const rowIndexMap = [];
    let hasRoleRow = false;
    let visibleItemCount = 0;
    {
      let currentRowEl = null;
      let currentRowIndex = -1;
      list.forEach((el, idx) => {
        if (el == null) {
          return;
        }
        visibleItemCount += 1;
        const rowEl = el.closest('[role="row"]');
        if (rowEl) {
          hasRoleRow = true;
        }
        if (rowEl !== currentRowEl || currentRowIndex === -1) {
          currentRowEl = rowEl;
          currentRowIndex += 1;
          rows[currentRowIndex] = [];
        }
        rows[currentRowIndex].push(idx);
        rowIndexMap[idx] = currentRowIndex;
      });
    }
    let hasDomRows = false;
    let inferredDomCols = 0;
    if (hasRoleRow) {
      for (const row of rows) {
        const rowLength = row.length;
        if (rowLength > inferredDomCols) {
          inferredDomCols = rowLength;
        }
        if (rowLength !== cols) {
          hasDomRows = true;
        }
      }
    }
    const hasVirtualizedGaps = hasDomRows && visibleItemCount < list.length;
    const verticalCols = inferredDomCols || cols;
    const navigateVertically = (direction) => {
      if (!hasDomRows || prevIndex === -1) {
        return void 0;
      }
      const currentRow = rowIndexMap[prevIndex];
      if (currentRow == null) {
        return void 0;
      }
      const colInRow = rows[currentRow].indexOf(prevIndex);
      const step = direction === "up" ? -1 : 1;
      for (let nextRow = currentRow + step, i2 = 0; i2 < rows.length; i2 += 1, nextRow += step) {
        if (nextRow < 0 || nextRow >= rows.length) {
          if (!loopFocus || hasVirtualizedGaps) {
            return void 0;
          }
          nextRow = nextRow < 0 ? rows.length - 1 : 0;
          if (onLoop) {
            const clampedCol = Math.min(colInRow, rows[nextRow].length - 1);
            const targetItemIndex = rows[nextRow][clampedCol] ?? rows[nextRow][0];
            const returnedItemIndex = onLoop(event, prevIndex, targetItemIndex);
            nextRow = rowIndexMap[returnedItemIndex] ?? nextRow;
          }
        }
        const targetRow = rows[nextRow];
        for (let col = Math.min(colInRow, targetRow.length - 1); col >= 0; col -= 1) {
          const candidate = targetRow[col];
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return void 0;
    };
    const navigateVerticallyWithInferredRows = (direction) => {
      if (!hasVirtualizedGaps || prevIndex === -1) {
        return void 0;
      }
      const colInRow = prevIndex % verticalCols;
      const rowStep = direction === "up" ? -verticalCols : verticalCols;
      const lastRowStart = maxIndex - maxIndex % verticalCols;
      const rowCount = floor(maxIndex / verticalCols) + 1;
      for (let rowStart = prevIndex - colInRow + rowStep, i2 = 0; i2 < rowCount; i2 += 1, rowStart += rowStep) {
        if (rowStart < 0 || rowStart > maxIndex) {
          if (!loopFocus) {
            return void 0;
          }
          rowStart = rowStart < 0 ? lastRowStart : 0;
        }
        const rowEnd = Math.min(rowStart + verticalCols - 1, maxIndex);
        for (let candidate = Math.min(rowStart + colInRow, rowEnd); candidate >= rowStart; candidate -= 1) {
          if (!isListIndexDisabled(list, candidate, disabledIndices)) {
            return candidate;
          }
        }
      }
      return void 0;
    };
    if (stop) {
      stopEvent(event);
    }
    const verticalCandidate = navigateVertically(verticalDirection) ?? navigateVerticallyWithInferredRows(verticalDirection);
    if (verticalCandidate !== void 0) {
      nextIndex = verticalCandidate;
    } else if (prevIndex === -1) {
      nextIndex = verticalDirection === "up" ? maxIndex : minIndex;
    } else {
      nextIndex = findNonDisabledListIndex(list, {
        startingIndex: prevIndex,
        amount: verticalCols,
        decrement: verticalDirection === "up",
        disabledIndices
      });
      if (loopFocus) {
        if (verticalDirection === "up" && (prevIndex - verticalCols < minIndex || nextIndex < 0)) {
          const col = prevIndex % verticalCols;
          const maxCol = maxIndex % verticalCols;
          const offset2 = maxIndex - (maxCol - col);
          if (maxCol === col) {
            nextIndex = maxIndex;
          } else {
            nextIndex = maxCol > col ? offset2 : offset2 - verticalCols;
          }
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
        if (verticalDirection === "down" && prevIndex + verticalCols > maxIndex) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex % verticalCols - verticalCols,
            amount: verticalCols,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      }
    }
    if (isIndexOutOfListBounds(list, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
      if (stop) {
        stopEvent(event);
      }
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
      if (stop) {
        stopEvent(event);
      }
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(list, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
          if (onLoop) {
            nextIndex = onLoop(event, prevIndex, nextIndex);
          }
        }
      } else if (loopFocus) {
        nextIndex = findNonDisabledListIndex(list, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfListBounds(list, nextIndex)) {
      if (loopFocus && lastRow) {
        nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledListIndex(list, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
        if (onLoop) {
          nextIndex = onLoop(event, prevIndex, nextIndex);
        }
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function isListIndexDisabled(list, index, disabledIndices) {
  const isExplicitlyDisabled = typeof disabledIndices === "function" ? disabledIndices(index) : (disabledIndices == null ? void 0 : disabledIndices.includes(index)) ?? false;
  if (isExplicitlyDisabled) {
    return true;
  }
  const element = list[index];
  if (!element) {
    return false;
  }
  if (!isElementVisible(element)) {
    return true;
  }
  return !disabledIndices && (element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true");
}
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}
const CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return (radio == null ? void 0 : radio.name) === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return (radio == null ? void 0 : radio.name) === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function isTabbable(element) {
  return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return void 0;
  }
  const active = activeElement(ownerDocument(container));
  const index = list.indexOf(active);
  const nextIndex = index === -1 ? dir === 1 ? 0 : len - 1 : index + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, "[data-tabindex]", elements);
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter((node) => node.parentId === id);
  return directChildren.flatMap((child) => {
    var _a2;
    return [...!onlyOpenChildren || ((_a2 = child.context) == null ? void 0 : _a2.open) ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)];
  });
}
function getNodeAncestors(nodes, id) {
  var _a2;
  let allAncestors = [];
  let currentParentId = (_a2 = nodes.find((node) => node.id === id)) == null ? void 0 : _a2.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
function createAttribute(name) {
  return `data-base-ui-${name}`;
}
let rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = false,
    sync = false,
    shouldFocus
  } = options;
  cancelAnimationFrame(rafId);
  function exec() {
    if (shouldFocus && !shouldFocus()) {
      return;
    }
    el == null ? void 0 : el.focus({
      preventScroll
    });
  }
  if (sync) {
    exec();
    return NOOP;
  }
  const currentRafId = requestAnimationFrame(exec);
  rafId = currentRafId;
  return () => {
    if (rafId === currentRafId) {
      cancelAnimationFrame(currentRafId);
      rafId = 0;
    }
  };
}
const counters = {
  inert: /* @__PURE__ */ new WeakMap(),
  "aria-hidden": /* @__PURE__ */ new WeakMap()
};
const markerName = "data-base-ui-inert";
const uncontrolledElementsSets = {
  inert: /* @__PURE__ */ new WeakSet(),
  "aria-hidden": /* @__PURE__ */ new WeakSet()
};
let markerCounterMap = /* @__PURE__ */ new WeakMap();
let lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
  return uncontrolledElementsSets[controlAttribute];
}
function unwrapHost(node) {
  if (!node) {
    return null;
  }
  return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
const correctElements = (parent, targets) => targets.map((target) => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter((x2) => x2 != null);
const buildKeepSet = (targets) => {
  const keep = /* @__PURE__ */ new Set();
  targets.forEach((target) => {
    let node = target;
    while (node && !keep.has(node)) {
      keep.add(node);
      node = node.parentNode;
    }
  });
  return keep;
};
const collectOutsideElements = (root, keepElements, stopElements) => {
  const outside = [];
  const walk = (parent) => {
    if (!parent || stopElements.has(parent)) {
      return;
    }
    Array.from(parent.children).forEach((node) => {
      if (getNodeName(node) === "script") {
        return;
      }
      if (keepElements.has(node)) {
        walk(node);
      } else {
        outside.push(node);
      }
    });
  };
  walk(root);
  return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, {
  mark = true
}) {
  let controlAttribute = null;
  if (inert) {
    controlAttribute = "inert";
  } else if (ariaHidden) {
    controlAttribute = "aria-hidden";
  }
  let counterMap = null;
  let uncontrolledElementsSet = null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)) : [];
  const hiddenElements = [];
  const markedElements = [];
  if (controlAttribute) {
    const map = counters[controlAttribute];
    const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
    uncontrolledElementsSet = currentUncontrolledElementsSet;
    counterMap = map;
    const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
    const controlElements = avoidElements.concat(ariaLiveElements);
    const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
    controlTargets.forEach((node) => {
      const attr2 = node.getAttribute(controlAttribute);
      const alreadyHidden = attr2 !== null && attr2 !== "false";
      const counterValue = (map.get(node) || 0) + 1;
      map.set(node, counterValue);
      hiddenElements.push(node);
      if (counterValue === 1 && alreadyHidden) {
        currentUncontrolledElementsSet.add(node);
      }
      if (!alreadyHidden) {
        node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
      }
    });
  }
  if (mark) {
    markerTargets.forEach((node) => {
      const markerValue = (markerCounterMap.get(node) || 0) + 1;
      markerCounterMap.set(node, markerValue);
      markedElements.push(node);
      if (markerValue === 1) {
        node.setAttribute(markerName, "");
      }
    });
  }
  lockCount += 1;
  return () => {
    if (counterMap) {
      hiddenElements.forEach((element) => {
        const currentCounterValue = counterMap.get(element) || 0;
        const counterValue = currentCounterValue - 1;
        counterMap.set(element, counterValue);
        if (!counterValue) {
          if (!(uncontrolledElementsSet == null ? void 0 : uncontrolledElementsSet.has(element)) && controlAttribute) {
            element.removeAttribute(controlAttribute);
          }
          uncontrolledElementsSet == null ? void 0 : uncontrolledElementsSet.delete(element);
        }
      });
    }
    if (mark) {
      markedElements.forEach((element) => {
        const markerValue = (markerCounterMap.get(element) || 0) - 1;
        markerCounterMap.set(element, markerValue);
        if (!markerValue) {
          element.removeAttribute(markerName);
        }
      });
    }
    lockCount -= 1;
    if (!lockCount) {
      counters.inert = /* @__PURE__ */ new WeakMap();
      counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
      uncontrolledElementsSets.inert = /* @__PURE__ */ new WeakSet();
      uncontrolledElementsSets["aria-hidden"] = /* @__PURE__ */ new WeakSet();
      markerCounterMap = /* @__PURE__ */ new WeakMap();
    }
  };
}
function markOthers(avoidElements, options = {}) {
  const {
    ariaHidden = false,
    inert = false,
    mark = true
  } = options;
  const body = ownerDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, {
    mark
  });
}
let globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const [defaultId, setDefaultId] = d(idOverride);
  const id = idOverride || defaultId;
  y(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
const maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}
function getReactElementRef(element) {
  if (!/* @__PURE__ */ hn(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef == null ? void 0 : propsWithRef.ref : reactElement.ref) ?? null;
}
function mergeObjects(a2, b) {
  if (a2 && !b) {
    return a2;
  }
  if (!a2 && b) {
    return b;
  }
  if (a2 || b) {
    return {
      ...a2,
      ...b
    };
  }
  return void 0;
}
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping == null ? void 0 : customMapping.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}
const EMPTY_PROPS = {};
function mergeProps(a2, b, c2, d2, e2) {
  if (!c2 && !d2 && !e2 && !a2) {
    return createInitialMergedProps(b);
  }
  let merged = createInitialMergedProps(a2);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c2) {
    merged = mergeInto(merged, c2);
  }
  if (d2) {
    merged = mergeInto(merged, d2);
  }
  if (e2) {
    merged = mergeInto(merged, e2);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i2 = 1; i2 < props.length; i2 += 1) {
    merged = mergeInto(merged, props[i2]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler == null ? void 0 : ourHandler(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler == null ? void 0 : ourHandler(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping2,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping2) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
const REACT_LAZY_TYPE = Symbol.for("react.lazy");
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    let newElement = render;
    if ((newElement == null ? void 0 : newElement.$$typeof) === REACT_LAZY_TYPE) {
      const children = L.toArray(render);
      newElement = children[0];
    }
    return /* @__PURE__ */ mn(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(formatErrorMessage(8));
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ k("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ k("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ k(Tag, props);
}
const DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: "none"
  }
};
const CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
const DROPDOWN_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "none"
};
const ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};
const PortalContext = /* @__PURE__ */ X(null);
const usePortalContext = () => x(PortalContext);
const attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext == null ? void 0 : portalContext.portalNode;
  const [containerElement, setContainerElement] = d(null);
  const [portalNode, setPortalNode] = d(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = A(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (uniqueId == null) {
      return;
    }
    const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode, uniqueId]);
  const portalElement = useRenderElement("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ""
    }, elementProps]
  });
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ $(portalElement, containerElement) : null;
  return {
    portalNode,
    portalSubtree
  };
}
const FloatingPortal = /* @__PURE__ */ D(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    container,
    renderGuards,
    ...elementProps
  } = componentProps;
  const {
    portalNode,
    portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = A(null);
  const afterOutsideRef = A(null);
  const beforeInsideRef = A(null);
  const afterInsideRef = A(null);
  const [focusManagerState, setFocusManagerState] = d(null);
  const focusInsideDisabledRef = A(false);
  const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
  const open = focusManagerState == null ? void 0 : focusManagerState.open;
  const shouldRenderGuards = typeof renderGuards === "boolean" ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  y(() => {
    if (!portalNode || modal) {
      return void 0;
    }
    function onFocus(event) {
      if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
        if (event.type === "focusin") {
          if (focusInsideDisabledRef.current) {
            enableFocusInside(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          disableFocusInside(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }
    return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
  }, [portalNode, modal]);
  useIsoLayoutEffect(() => {
    if (!portalNode || open !== true || !focusInsideDisabledRef.current) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open, portalNode]);
  const portalContextValue = T(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ u(S, {
    children: [portalSubtree, /* @__PURE__ */ u(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ u(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          var _a2;
          if (isOutsideEvent(event, portalNode)) {
            (_a2 = beforeInsideRef.current) == null ? void 0 : _a2.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable == null ? void 0 : prevTabbable.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ u("span", {
        "aria-owns": portalNode.id,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ $(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ u(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          var _a2;
          if (isOutsideEvent(event, portalNode)) {
            (_a2 = afterInsideRef.current) == null ? void 0 : _a2.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable == null ? void 0 : nextTabbable.focus();
            if (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) {
              focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, createChangeEventDetails(focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _a2;
      (_a2 = map.get(event)) == null ? void 0 : _a2.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      var _a2;
      (_a2 = map.get(event)) == null ? void 0 : _a2.delete(listener);
    }
  };
}
const FloatingNodeContext = /* @__PURE__ */ X(null);
const FloatingTreeContext = /* @__PURE__ */ X(null);
const useFloatingParentNodeId = () => {
  var _a2;
  return ((_a2 = x(FloatingNodeContext)) == null ? void 0 : _a2.id) || null;
};
const useFloatingTree = (externalTree) => {
  const contextTree = x(FloatingTreeContext);
  return externalTree ?? contextTree;
};
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}
function getEventType(event, lastInteractionType) {
  const win = getWindow(getTarget(event));
  if (event instanceof win.KeyboardEvent) {
    return "keyboard";
  }
  if (event instanceof win.FocusEvent) {
    return lastInteractionType || "keyboard";
  }
  if ("pointerType" in event) {
    return event.pointerType || "keyboard";
  }
  if ("touches" in event) {
    return "touch";
  }
  if (event instanceof win.MouseEvent) {
    return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
  }
  return "";
}
const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
  previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
    var _a2;
    return (_a2 = entry.deref()) == null ? void 0 : _a2.isConnected;
  });
}
function addPreviouslyFocusedElement(element) {
  clearDisconnectedPreviouslyFocusedElements();
  if (element && getNodeName(element) !== "body") {
    previouslyFocusedElements.push(new WeakRef(element));
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  var _a2;
  clearDisconnectedPreviouslyFocusedElements();
  return (_a2 = previouslyFocusedElements[previouslyFocusedElements.length - 1]) == null ? void 0 : _a2.deref();
}
function getFirstTabbableElement(container) {
  if (!container) {
    return null;
  }
  if (isTabbable(container)) {
    return container;
  }
  return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement) {
  var _a2;
  if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) {
    return;
  }
  if (!((_a2 = floatingFocusElement.getAttribute("role")) == null ? void 0 : _a2.includes("dialog"))) {
    return;
  }
  const focusableElements = focusable(floatingFocusElement);
  const tabbableContent = focusableElements.filter((element) => {
    const dataTabIndex = element.getAttribute("data-tabindex") || "";
    return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
  });
  const tabIndex = floatingFocusElement.getAttribute("tabindex");
  if (tabbableContent.length === 0) {
    if (tabIndex !== "0") {
      floatingFocusElement.setAttribute("tabindex", "0");
      floatingFocusElement.setAttribute("data-tabindex", "0");
    }
  } else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
    floatingFocusElement.setAttribute("tabindex", "-1");
    floatingFocusElement.setAttribute("data-tabindex", "-1");
  }
}
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    initialFocus = true,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    closeOnFocusOut = true,
    openInteractionType = "",
    nextFocusableElement,
    previousFocusableElement,
    beforeContentFocusGuardRef,
    externalTree,
    getInsideElements
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const domReference = store.useState("domReferenceElement");
  const floating = store.useState("floatingElement");
  const {
    events,
    dataRef
  } = store.context;
  const getNodeId = useStableCallback(() => {
    var _a2;
    return (_a2 = dataRef.current.floatingContext) == null ? void 0 : _a2.nodeId;
  });
  const ignoreInitialFocus = initialFocus === false;
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
  const initialFocusRef = useValueAsRef(initialFocus);
  const returnFocusRef = useValueAsRef(returnFocus);
  const openInteractionTypeRef = useValueAsRef(openInteractionType);
  const openRef = useValueAsRef(open);
  const tree = useFloatingTree(externalTree);
  const portalContext = usePortalContext();
  const preventReturnFocusRef = A(false);
  const isPointerDownRef = A(false);
  const pointerDownOutsideRef = A(false);
  const lastFocusedTabbableRef = A(null);
  const closeTypeRef = A("");
  const lastInteractionTypeRef = A("");
  const beforeGuardRef = A(null);
  const afterGuardRef = A(null);
  const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext == null ? void 0 : portalContext.beforeInsideRef);
  const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext == null ? void 0 : portalContext.afterInsideRef);
  const blurTimeout = useTimeout();
  const pointerDownTimeout = useTimeout();
  const restoreFocusFrame = useAnimationFrame();
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = getFloatingFocusElement(floating);
  const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
    return container ? tabbable(container) : [];
  });
  const getResolvedInsideElements = useStableCallback(() => (getInsideElements == null ? void 0 : getInsideElements().filter((element) => element != null)) ?? []);
  y(() => {
    if (disabled || !modal) {
      return void 0;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
      }
    }
    const doc = ownerDocument(floatingFocusElement);
    return addEventListener(doc, "keydown", onKeyDown);
  }, [disabled, floatingFocusElement, modal, isUntrappedTypeableCombobox, getTabbableContent]);
  y(() => {
    if (disabled || !open) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function clearPointerDownOutside() {
      pointerDownOutsideRef.current = false;
    }
    function onPointerDown(event) {
      const target = getTarget(event);
      const insideElements = getResolvedInsideElements();
      const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext == null ? void 0 : portalContext.portalNode, target) || insideElements.some((element) => element === target || contains(element, target));
      pointerDownOutsideRef.current = !pointerTargetInside;
      lastInteractionTypeRef.current = event.pointerType || "keyboard";
      if (target == null ? void 0 : target.closest(`[${CLICK_TRIGGER_IDENTIFIER}]`)) {
        isPointerDownRef.current = true;
        pointerDownTimeout.start(0, () => {
          isPointerDownRef.current = false;
        });
      }
    }
    function onKeyDown() {
      lastInteractionTypeRef.current = "keyboard";
    }
    return mergeCleanups(
      addEventListener(doc, "pointerdown", onPointerDown, true),
      addEventListener(doc, "pointerup", clearPointerDownOutside, true),
      addEventListener(doc, "pointercancel", clearPointerDownOutside, true),
      addEventListener(doc, "keydown", onKeyDown, true),
      // Avoid a stale `true` leaking into the next open (e.g. keep-mounted popups)
      // if the popup dismissed between pointerdown and pointerup.
      clearPointerDownOutside
    );
  }, [disabled, floating, domReference, floatingFocusElement, open, portalContext, pointerDownTimeout, getResolvedInsideElements]);
  y(() => {
    if (disabled || !closeOnFocusOut) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function handlePointerDown() {
      isPointerDownRef.current = true;
      pointerDownTimeout.start(0, () => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusIn(event) {
      const target = getTarget(event);
      if (isTabbable(target)) {
        lastFocusedTabbableRef.current = target;
      }
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const currentTarget = event.currentTarget;
      const target = getTarget(event);
      if (modal && relatedTarget == null && target != null && contains(floating, target)) {
        addPreviouslyFocusedElement(target);
      }
      queueMicrotask(() => {
        const nodeId = getNodeId();
        const triggers = store.context.triggerElements;
        const insideElements = getResolvedInsideElements();
        const isRelatedFocusGuard = (relatedTarget == null ? void 0 : relatedTarget.hasAttribute(createAttribute("focus-guard"))) && [beforeGuardRef.current, afterGuardRef.current, portalContext == null ? void 0 : portalContext.beforeInsideRef.current, portalContext == null ? void 0 : portalContext.afterInsideRef.current, portalContext == null ? void 0 : portalContext.beforeOutsideRef.current, portalContext == null ? void 0 : portalContext.afterOutsideRef.current, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement)].includes(relatedTarget);
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || relatedTarget != null && triggers.hasElement(relatedTarget) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => {
          var _a2, _b;
          return contains((_a2 = node.context) == null ? void 0 : _a2.elements.floating, relatedTarget) || contains((_b = node.context) == null ? void 0 : _b.elements.domReference, relatedTarget);
        }) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => {
          var _a2, _b, _c;
          return [(_a2 = node.context) == null ? void 0 : _a2.elements.floating, getFloatingFocusElement((_b = node.context) == null ? void 0 : _b.elements.floating)].includes(relatedTarget) || ((_c = node.context) == null ? void 0 : _c.elements.domReference) === relatedTarget;
        })));
        if (currentTarget === domReference && floatingFocusElement) {
          handleTabIndex(floatingFocusElement);
        }
        if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
          if (isHTMLElement(floatingFocusElement)) {
            floatingFocusElement.focus();
            if (restoreFocus === "popup") {
              restoreFocusFrame.request(() => {
                floatingFocusElement.focus();
              });
              return;
            }
          }
          const tabbableContent = getTabbableContent();
          const prevTabbable = lastFocusedTabbableRef.current;
          const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
          if (isHTMLElement(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }
        if (dataRef.current.insideReactTree) {
          dataRef.current.insideReactTree = false;
          return;
        }
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        // For an "untrapped" typeable combobox (input role=combobox with
        // initialFocus=false), re-opening the popup and tabbing out should still close it even
        // when the previously focused element (e.g. the next tabbable outside the popup) is
        // focused again. Otherwise, the popup remains open on the second Tab sequence:
        // click input -> Tab (closes) -> click input -> Tab.
        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
        (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
          preventReturnFocusRef.current = true;
          store.setOpen(false, createChangeEventDetails(focusOut, event));
        }
      });
    }
    function markInsideReactTree() {
      if (pointerDownOutsideRef.current) {
        return;
      }
      dataRef.current.insideReactTree = true;
      blurTimeout.start(0, () => {
        dataRef.current.insideReactTree = false;
      });
    }
    const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
    if (!floating && !domReferenceElement) {
      return void 0;
    }
    return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
  }, [disabled, domReference, floating, floatingFocusElement, modal, tree, portalContext, store, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox, getNodeId, dataRef, blurTimeout, pointerDownTimeout, restoreFocusFrame, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  y(() => {
    var _a2, _b, _c;
    if (disabled || !floating || !open) {
      return void 0;
    }
    const portalNodes = Array.from(((_a2 = portalContext == null ? void 0 : portalContext.portalNode) == null ? void 0 : _a2.querySelectorAll(`[${createAttribute("portal")}]`)) || []);
    const ancestors = tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : [];
    const rootAncestorComboboxDomReference = (_c = (_b = ancestors.find((node) => {
      var _a3;
      return isTypeableCombobox(((_a3 = node.context) == null ? void 0 : _a3.elements.domReference) || null);
    })) == null ? void 0 : _b.context) == null ? void 0 : _c.elements.domReference;
    const controlInsideElements = [floating, ...portalNodes, beforeGuardRef.current, afterGuardRef.current, portalContext == null ? void 0 : portalContext.beforeOutsideRef.current, portalContext == null ? void 0 : portalContext.afterOutsideRef.current, ...getResolvedInsideElements()];
    const insideElements = [...controlInsideElements, rootAncestorComboboxDomReference, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement), isUntrappedTypeableCombobox ? domReference : null].filter((x2) => x2 != null);
    const ariaHiddenCleanup = markOthers(insideElements, {
      ariaHidden: modal || isUntrappedTypeableCombobox,
      mark: false
    });
    const markerInsideElements = [floating, ...portalNodes].filter((x2) => x2 != null);
    const markerCleanup = markOthers(markerInsideElements);
    return () => {
      markerCleanup();
      ariaHiddenCleanup();
    };
  }, [open, disabled, domReference, floating, modal, portalContext, isUntrappedTypeableCombobox, tree, getNodeId, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!open || disabled || !isHTMLElement(floatingFocusElement)) {
      return;
    }
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const initialFocusValueOrFn = initialFocusRef.current;
      const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
      if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) {
        return;
      }
      const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
      if (focusAlreadyInsideFloatingEl) {
        return;
      }
      let focusableElements = null;
      const getDefaultFocusElement = () => {
        if (focusableElements == null) {
          focusableElements = getTabbableContent(floatingFocusElement);
        }
        return focusableElements[0] || floatingFocusElement;
      };
      let elToFocus;
      if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
        elToFocus = getDefaultFocusElement();
      } else {
        elToFocus = resolveRef(resolvedInitialFocus);
      }
      elToFocus = elToFocus || getDefaultFocusElement();
      const hadFocusInside = contains(floatingFocusElement, activeElement(doc));
      enqueueFocus(elToFocus, {
        preventScroll: elToFocus === floatingFocusElement,
        shouldFocus() {
          if (!openRef.current) {
            return false;
          }
          if (hadFocusInside) {
            return true;
          }
          const currentActiveElement = activeElement(doc);
          const focusMovedInside = currentActiveElement !== elToFocus && contains(floatingFocusElement, currentActiveElement);
          return !focusMovedInside;
        }
      });
    });
  }, [disabled, open, floatingFocusElement, getTabbableContent, initialFocusRef, openInteractionTypeRef, openRef]);
  useIsoLayoutEffect(() => {
    if (disabled || !floatingFocusElement) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    const elementFocusedBeforeOpen = activeElement(doc);
    const preferPreviousFocus = openInteractionTypeRef.current == null;
    addPreviouslyFocusedElement(elementFocusedBeforeOpen);
    function onOpenChangeLocal(details) {
      if (!details.open) {
        closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
      }
      if (details.reason === triggerHover && details.nativeEvent.type === "mouseleave") {
        preventReturnFocusRef.current = true;
      }
      if (details.reason !== outsidePress) {
        return;
      }
      if (details.nested) {
        preventReturnFocusRef.current = false;
      } else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) {
        preventReturnFocusRef.current = false;
      } else {
        let isPreventScrollSupported = false;
        ownerDocument(floatingFocusElement).createElement("div").focus({
          get preventScroll() {
            isPreventScrollSupported = true;
            return false;
          }
        });
        if (isPreventScrollSupported) {
          preventReturnFocusRef.current = false;
        } else {
          preventReturnFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    function getReturnElement() {
      const returnFocusValueOrFn = returnFocusRef.current;
      let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeTypeRef.current) : returnFocusValueOrFn;
      if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) {
        return null;
      }
      if (resolvedReturnFocusValue === null) {
        resolvedReturnFocusValue = true;
      }
      const referenceReturnElement = (domReference == null ? void 0 : domReference.isConnected) ? domReference : null;
      const previousReturnElement = (elementFocusedBeforeOpen == null ? void 0 : elementFocusedBeforeOpen.isConnected) && getNodeName(elementFocusedBeforeOpen) !== "body" ? elementFocusedBeforeOpen : null;
      let defaultReturnElement = preferPreviousFocus ? previousReturnElement || referenceReturnElement : referenceReturnElement || previousReturnElement;
      if (!defaultReturnElement) {
        defaultReturnElement = getPreviouslyFocusedElement() || null;
      }
      if (typeof resolvedReturnFocusValue === "boolean") {
        return defaultReturnElement;
      }
      return resolveRef(resolvedReturnFocusValue) || defaultReturnElement || null;
    }
    return () => {
      events.off("openchange", onOpenChangeLocal);
      const activeEl = activeElement(doc);
      const insideElements = getResolvedInsideElements();
      const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => {
        var _a2;
        return contains((_a2 = node.context) == null ? void 0 : _a2.elements.floating, activeEl);
      });
      const returnFocusValueOrFn = returnFocusRef.current;
      const returnElement = getReturnElement();
      queueMicrotask(() => {
        const tabbableReturnElement = getFirstTabbableElement(returnElement);
        const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== "boolean";
        if (returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          tabbableReturnElement.focus({
            preventScroll: true
          });
        }
        preventReturnFocusRef.current = false;
      });
    };
  }, [disabled, floating, floatingFocusElement, returnFocusRef, openInteractionTypeRef, events, tree, domReference, getNodeId, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!webkit || open || !floating) {
      return;
    }
    const activeEl = activeElement(ownerDocument(floating));
    if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) {
      return;
    }
    if (contains(floating, activeEl)) {
      activeEl.blur();
    }
  }, [open, floating]);
  useIsoLayoutEffect(() => {
    if (disabled || !portalContext) {
      return void 0;
    }
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange: store.setOpen,
      domReference
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, store, closeOnFocusOut, domReference]);
  useIsoLayoutEffect(() => {
    if (disabled || !floatingFocusElement) {
      return void 0;
    }
    handleTabIndex(floatingFocusElement);
    return () => {
      queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
    };
  }, [disabled, floatingFocusElement]);
  const shouldRenderGuards = !disabled && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /* @__PURE__ */ u(S, {
    children: [shouldRenderGuards && /* @__PURE__ */ u(FocusGuard, {
      "data-type": "inside",
      ref: mergedBeforeGuardRef,
      onFocus: (event) => {
        var _a2;
        if (modal) {
          const els = getTabbableContent();
          enqueueFocus(els[els.length - 1]);
        } else if (portalContext == null ? void 0 : portalContext.portalNode) {
          preventReturnFocusRef.current = false;
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable == null ? void 0 : nextTabbable.focus();
          } else {
            (_a2 = resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)) == null ? void 0 : _a2.focus();
          }
        }
      }
    }), children, shouldRenderGuards && /* @__PURE__ */ u(FocusGuard, {
      "data-type": "inside",
      ref: mergedAfterGuardRef,
      onFocus: (event) => {
        var _a2;
        if (modal) {
          enqueueFocus(getTabbableContent()[0]);
        } else if (portalContext == null ? void 0 : portalContext.portalNode) {
          if (closeOnFocusOut) {
            preventReturnFocusRef.current = true;
          }
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable == null ? void 0 : prevTabbable.focus();
          } else {
            (_a2 = resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)) == null ? void 0 : _a2.focus();
          }
        }
      }
    })]
  });
}
function useClick(context, props = {}) {
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    stickIfOpen = true,
    touchOpenDelay = 0,
    reason = triggerPress
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const dataRef = store.context.dataRef;
  const pointerTypeRef = A(void 0);
  const frame = useAnimationFrame();
  const touchOpenTimeout = useTimeout();
  const reference = T(() => {
    function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
      const details = createChangeEventDetails(reason, nativeEvent, target);
      if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
        touchOpenTimeout.start(touchOpenDelay, () => {
          store.setOpen(true, details);
        });
      } else {
        store.setOpen(nextOpen, details);
      }
    }
    function getNextOpen(open, currentTarget, isClickLikeOpenEvent) {
      const openEvent = dataRef.current.openEvent;
      const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== currentTarget;
      if (open && hasClickedOnInactiveTrigger) {
        return true;
      }
      if (!open) {
        return true;
      }
      if (!toggle) {
        return true;
      }
      if (openEvent && stickIfOpen) {
        return !isClickLikeOpenEvent(openEvent.type);
      }
      return false;
    }
    return {
      onPointerDown(event) {
        pointerTypeRef.current = event.pointerType;
      },
      onMouseDown(event) {
        const pointerType = pointerTypeRef.current;
        const nativeEvent = event.nativeEvent;
        const open = store.select("open");
        if (event.button !== 0 || eventOption === "click" || isMouseLikePointerType(pointerType) && ignoreMouse) {
          return;
        }
        const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown");
        const target = getTarget(nativeEvent);
        if (isTypeableElement(target)) {
          setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType);
          return;
        }
        const eventCurrentTarget = event.currentTarget;
        frame.request(() => {
          setOpenWithTouchDelay(nextOpen, nativeEvent, eventCurrentTarget, pointerType);
        });
      },
      onClick(event) {
        if (eventOption === "mousedown-only") {
          return;
        }
        const pointerType = pointerTypeRef.current;
        if (eventOption === "mousedown" && pointerType) {
          pointerTypeRef.current = void 0;
          return;
        }
        if (isMouseLikePointerType(pointerType) && ignoreMouse) {
          return;
        }
        const open = store.select("open");
        const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown" || openEventType === "keydown" || openEventType === "keyup");
        setOpenWithTouchDelay(nextOpen, event.nativeEvent, event.currentTarget, pointerType);
      },
      onKeyDown() {
        pointerTypeRef.current = void 0;
      }
    };
  }, [dataRef, eventOption, ignoreMouse, reason, store, stickIfOpen, toggle, frame, touchOpenTimeout, touchOpenDelay]);
  return T(() => enabled ? {
    reference
  } : EMPTY_OBJECT, [enabled, reference]);
}
function alwaysFalse() {
  return false;
}
function normalizeProp(normalizable) {
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : (normalizable == null ? void 0 : normalizable.escapeKey) ?? false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : (normalizable == null ? void 0 : normalizable.outsidePress) ?? true
  };
}
function useDismiss(context, props = {}) {
  const {
    enabled = true,
    escapeKey: escapeKey$1 = true,
    outsidePress: outsidePressProp = true,
    outsidePressEvent = "sloppy",
    referencePress = alwaysFalse,
    bubbles,
    externalTree
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const {
    dataRef
  } = store.context;
  const tree = useFloatingTree(externalTree);
  const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
  const outsidePress$1 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
  const outsidePressEnabled = outsidePress$1 !== false;
  const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const pressStartedInsideRef = A(false);
  const pressStartPreventedRef = A(false);
  const suppressNextOutsideClickRef = A(false);
  const isComposingRef = A(false);
  const currentPointerTypeRef = A("");
  const touchStateRef = A(null);
  const cancelDismissOnEndTimeout = useTimeout();
  const clearInsideReactTreeTimeout = useTimeout();
  const clearInsideReactTree = useStableCallback(() => {
    clearInsideReactTreeTimeout.clear();
    dataRef.current.insideReactTree = false;
  });
  const hasBlockingChild = useStableCallback((bubbleKey) => {
    var _a2;
    const nodeId = (_a2 = dataRef.current.floatingContext) == null ? void 0 : _a2.nodeId;
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    return children.some((child) => {
      var _a3;
      return ((_a3 = child.context) == null ? void 0 : _a3.open) && !child.context.dataRef.current[bubbleKey];
    });
  });
  const isEventWithinOwnElements = useStableCallback((event) => {
    return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"));
  });
  const closeOnReferencePress = useStableCallback((event) => {
    if (!referencePress()) {
      return;
    }
    store.setOpen(false, createChangeEventDetails(triggerPress, event.nativeEvent));
  });
  const closeOnEscapeKeyDown = useStableCallback((event) => {
    if (!open || !enabled || !escapeKey$1 || event.key !== "Escape") {
      return;
    }
    if (isComposingRef.current) {
      return;
    }
    if (!escapeKeyBubbles && hasBlockingChild("__escapeKeyBubbles")) {
      return;
    }
    const native = isReactEvent(event) ? event.nativeEvent : event;
    const eventDetails = createChangeEventDetails(escapeKey, native);
    store.setOpen(false, eventDetails);
    if (!eventDetails.isCanceled) {
      event.preventDefault();
    }
    if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
      event.stopPropagation();
    }
  });
  const markInsideReactTree = useStableCallback(() => {
    dataRef.current.insideReactTree = true;
    clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
  });
  const markPressStartedInsideReactTree = useStableCallback((event) => {
    if (!open || !enabled || event.button !== 0) {
      return;
    }
    const target = getTarget(event.nativeEvent);
    if (!contains(store.select("floatingElement"), target)) {
      return;
    }
    if (!pressStartedInsideRef.current) {
      pressStartedInsideRef.current = true;
      pressStartPreventedRef.current = false;
    }
  });
  const markInsidePressStartPrevented = useStableCallback((event) => {
    if (!open || !enabled) {
      return;
    }
    if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
      return;
    }
    if (pressStartedInsideRef.current) {
      pressStartPreventedRef.current = true;
    }
  });
  y(() => {
    if (!open || !enabled) {
      return void 0;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    const compositionTimeout = new Timeout();
    const preventedPressSuppressionTimeout = new Timeout();
    function handleCompositionStart() {
      compositionTimeout.clear();
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      compositionTimeout.start(
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        webkit ? 5 : 0,
        () => {
          isComposingRef.current = false;
        }
      );
    }
    function suppressImmediateOutsideClickAfterPreventedStart() {
      suppressNextOutsideClickRef.current = true;
      preventedPressSuppressionTimeout.start(0, () => {
        suppressNextOutsideClickRef.current = false;
      });
    }
    function resetPressStartState() {
      pressStartedInsideRef.current = false;
      pressStartPreventedRef.current = false;
    }
    function getOutsidePressEvent() {
      const type = currentPointerTypeRef.current;
      const computedType = type === "pen" || !type ? "mouse" : type;
      const outsidePressEventValue = getOutsidePressEventProp();
      const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
      if (typeof resolved === "string") {
        return resolved;
      }
      return resolved[computedType];
    }
    function shouldIgnoreEvent(event) {
      const computedOutsidePressEvent = getOutsidePressEvent();
      return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
    }
    function isEventWithinFloatingTree(event) {
      var _a2;
      const nodeId = (_a2 = dataRef.current.floatingContext) == null ? void 0 : _a2.nodeId;
      const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => {
        var _a3;
        return isEventTargetWithin(event, (_a3 = node.context) == null ? void 0 : _a3.elements.floating);
      });
      return isEventWithinOwnElements(event) || targetIsInsideChildren;
    }
    function closeOnPressOutside(event) {
      if (shouldIgnoreEvent(event)) {
        if (event.type !== "click" && !isEventWithinOwnElements(event)) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
        }
        clearInsideReactTree();
        return;
      }
      if (dataRef.current.insideReactTree) {
        clearInsideReactTree();
        return;
      }
      const target = getTarget(event);
      const inertSelector = `[${createAttribute("inert")}]`;
      const targetRoot = isElement(target) ? target.getRootNode() : null;
      const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
      const triggers = store.context.triggerElements;
      if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) {
        return;
      }
      let targetRootAncestor = isElement(target) ? target : null;
      while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
        const nextParent = getParentNode(targetRootAncestor);
        if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
          break;
        }
        targetRootAncestor = nextParent;
      }
      if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
      !contains(target, store.select("floatingElement")) && // If the target root element contains none of the markers, then the
      // element was injected after the floating element rendered.
      markers.every((marker) => !contains(targetRootAncestor, marker))) {
        return;
      }
      if (isHTMLElement(target) && !("touches" in event)) {
        const lastTraversableNode = isLastTraversableNode(target);
        const style = getComputedStyle(target);
        const scrollRe = /auto|scroll/;
        const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
        const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
        const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
        const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
        const isRTL = style.direction === "rtl";
        const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
        const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
        if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
          return;
        }
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (getOutsidePressEvent() === "intentional" && suppressNextOutsideClickRef.current) {
        preventedPressSuppressionTimeout.clear();
        suppressNextOutsideClickRef.current = false;
        return;
      }
      if (typeof outsidePress$1 === "function" && !outsidePress$1(event)) {
        return;
      }
      if (hasBlockingChild("__outsidePressBubbles")) {
        return;
      }
      store.setOpen(false, createChangeEventDetails(outsidePress, event));
      clearInsideReactTree();
    }
    function handlePointerDown(event) {
      if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      closeOnPressOutside(event);
    }
    function handleTouchStart(event) {
      if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (touch) {
        touchStateRef.current = {
          startTime: Date.now(),
          startX: touch.clientX,
          startY: touch.clientY,
          dismissOnTouchEnd: false,
          dismissOnMouseDown: true
        };
        cancelDismissOnEndTimeout.start(1e3, () => {
          if (touchStateRef.current) {
            touchStateRef.current.dismissOnTouchEnd = false;
            touchStateRef.current.dismissOnMouseDown = false;
          }
        });
      }
    }
    function addTargetEventListenerOnce(event, listener) {
      const target = getTarget(event);
      if (!target) {
        return;
      }
      const unsubscribe2 = addEventListener(target, event.type, () => {
        listener(event);
        unsubscribe2();
      });
    }
    function handleTouchStartCapture(event) {
      currentPointerTypeRef.current = "touch";
      addTargetEventListenerOnce(event, handleTouchStart);
    }
    function closeOnPressOutsideCapture(event) {
      cancelDismissOnEndTimeout.clear();
      if (event.type === "pointerdown") {
        currentPointerTypeRef.current = event.pointerType;
      }
      if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
        return;
      }
      addTargetEventListenerOnce(event, (targetEvent) => {
        if (targetEvent.type === "pointerdown") {
          handlePointerDown(targetEvent);
        } else {
          closeOnPressOutside(targetEvent);
        }
      });
    }
    function handlePressEndCapture(event) {
      if (!pressStartedInsideRef.current) {
        return;
      }
      const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
      resetPressStartState();
      if (getOutsidePressEvent() !== "intentional") {
        return;
      }
      if (event.type === "pointercancel") {
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
        }
        return;
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (pressStartedInsideDefaultPrevented) {
        suppressImmediateOutsideClickAfterPreventedStart();
        return;
      }
      if (typeof outsidePress$1 === "function" && !outsidePress$1(event)) {
        return;
      }
      preventedPressSuppressionTimeout.clear();
      suppressNextOutsideClickRef.current = true;
      clearInsideReactTree();
    }
    function handleTouchMove(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 5) {
        touchStateRef.current.dismissOnTouchEnd = true;
      }
      if (distance > 10) {
        closeOnPressOutside(event);
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
    }
    function handleTouchMoveCapture(event) {
      addTargetEventListenerOnce(event, handleTouchMove);
    }
    function handleTouchEnd(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) {
        return;
      }
      if (touchStateRef.current.dismissOnTouchEnd) {
        closeOnPressOutside(event);
      }
      cancelDismissOnEndTimeout.clear();
      touchStateRef.current = null;
    }
    function handleTouchEndCapture(event) {
      addTargetEventListenerOnce(event, handleTouchEnd);
    }
    const doc = ownerDocument(floatingElement);
    const unsubscribe = mergeCleanups(escapeKey$1 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, true), addEventListener(doc, "touchmove", handleTouchMoveCapture, true), addEventListener(doc, "touchend", handleTouchEndCapture, true)));
    return () => {
      unsubscribe();
      compositionTimeout.clear();
      preventedPressSuppressionTimeout.clear();
      resetPressStartState();
      suppressNextOutsideClickRef.current = false;
    };
  }, [dataRef, floatingElement, escapeKey$1, outsidePressEnabled, outsidePress$1, open, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, clearInsideReactTree, getOutsidePressEventProp, hasBlockingChild, isEventWithinOwnElements, tree, store, cancelDismissOnEndTimeout]);
  y(clearInsideReactTree, [outsidePress$1, clearInsideReactTree]);
  const reference = T(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onPointerDown: closeOnReferencePress,
    onClick: closeOnReferencePress
  }), [closeOnEscapeKeyDown, closeOnReferencePress]);
  const floating = T(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    // `onMouseDown` may be blocked if `event.preventDefault()` is called in
    // `onPointerDown`, such as with <NumberField.ScrubArea>.
    // See https://github.com/mui/base-ui/pull/3379
    onPointerDown: markInsidePressStartPrevented,
    onMouseDown: markInsidePressStartPrevented,
    onClickCapture: markInsideReactTree,
    onMouseDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onPointerDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onMouseUpCapture: markInsideReactTree,
    onTouchEndCapture: markInsideReactTree,
    onTouchMoveCapture: markInsideReactTree
  }), [closeOnEscapeKeyDown, markInsideReactTree, markPressStartedInsideReactTree, markInsidePressStartPrevented]);
  return T(() => enabled ? {
    reference,
    floating,
    trigger: reference
  } : {}, [enabled, reference, floating]);
}
const selectors$1 = {
  open: createSelector((state) => state.open),
  transitionStatus: createSelector((state) => state.transitionStatus),
  domReferenceElement: createSelector((state) => state.domReferenceElement),
  referenceElement: createSelector((state) => state.positionReference ?? state.referenceElement),
  floatingElement: createSelector((state) => state.floatingElement),
  floatingId: createSelector((state) => state.floatingId)
};
class FloatingRootStore extends ReactStore {
  constructor(options) {
    const {
      syncOnly,
      nested,
      onOpenChange,
      triggerElements,
      ...initialState
    } = options;
    super({
      ...initialState,
      positionReference: initialState.referenceElement,
      domReferenceElement: initialState.referenceElement
    }, {
      onOpenChange,
      dataRef: {
        current: {}
      },
      events: createEventEmitter(),
      nested,
      triggerElements
    }, selectors$1);
    /**
     * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
     */
    __publicField(this, "syncOpenEvent", (newOpen, event) => {
      if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
      // click events to upgrade a hover-open.
      event != null && isClickLikeEvent(event)) {
        this.context.dataRef.current.openEvent = newOpen ? event : void 0;
      }
    });
    /**
     * Runs the root-owned side effects for an open state change.
     */
    __publicField(this, "dispatchOpenChange", (newOpen, eventDetails) => {
      this.syncOpenEvent(newOpen, eventDetails.event);
      const details = {
        open: newOpen,
        reason: eventDetails.reason,
        nativeEvent: eventDetails.event,
        nested: this.context.nested,
        triggerElement: eventDetails.trigger
      };
      this.context.events.emit("openchange", details);
    });
    /**
     * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
     *
     * @param newOpen The new open state.
     * @param eventDetails Details about the event that triggered the open state change.
     */
    __publicField(this, "setOpen", (newOpen, eventDetails) => {
      var _a2, _b, _c, _d;
      if (this.syncOnly) {
        (_b = (_a2 = this.context).onOpenChange) == null ? void 0 : _b.call(_a2, newOpen, eventDetails);
        return;
      }
      this.dispatchOpenChange(newOpen, eventDetails);
      (_d = (_c = this.context).onOpenChange) == null ? void 0 : _d.call(_c, newOpen, eventDetails);
    });
    this.syncOnly = syncOnly;
  }
}
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = d(open && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = d(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return void 0;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}
let TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
  TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes2;
})({});
const STARTING_HOOK = {
  [TransitionStatusDataAttributes.startingStyle]: ""
};
const ENDING_HOOK = {
  [TransitionStatusDataAttributes.endingStyle]: ""
};
const transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      bn(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!(signal == null ? void 0 : signal.aborted)) {
          done();
        }
      }).catch(() => {
        if (treatAbortedAsFinished) {
          if (!(signal == null ? void 0 : signal.aborted)) {
            done();
          }
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (!(signal == null ? void 0 : signal.aborted) && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
        }
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal == null ? void 0 : signal.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
  y(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}
const FOCUSABLE_POPUP_PROPS = {
  tabIndex: -1,
  [FOCUSABLE_ATTRIBUTE]: ""
};
class PopupTriggerMap {
  constructor() {
    this.elementsSet = /* @__PURE__ */ new Set();
    this.idMap = /* @__PURE__ */ new Map();
  }
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id, element) {
    const existingElement = this.idMap.get(id);
    if (existingElement === element) {
      return;
    }
    if (existingElement !== void 0) {
      this.elementsSet.delete(existingElement);
    }
    this.elementsSet.add(element);
    this.idMap.set(id, element);
  }
  /**
   * Removes the trigger element with the given ID.
   */
  delete(id) {
    const element = this.idMap.get(id);
    if (element) {
      this.elementsSet.delete(element);
      this.idMap.delete(id);
    }
  }
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element) {
    return this.elementsSet.has(element);
  }
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate) {
    for (const element of this.elementsSet) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id) {
    return this.idMap.get(id);
  }
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.elementsSet.values();
  }
  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
}
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange,
    elements = {}
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  const store = useRefWithInit(() => new FloatingRootStore({
    open,
    transitionStatus: void 0,
    onOpenChange,
    referenceElement: elements.reference ?? null,
    floatingElement: elements.floating ?? null,
    triggerElements: new PopupTriggerMap(),
    floatingId,
    syncOnly: false,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId
    };
    if (elements.reference !== void 0) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
    }
    if (elements.floating !== void 0) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}
function useFloating(options = {}) {
  const {
    nodeId,
    externalTree
  } = options;
  const internalStore = useFloatingRootContext(options);
  const store = options.rootContext || internalStore;
  const referenceElement = store.useState("referenceElement");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const open = store.useState("open");
  const floatingId = store.useState("floatingId");
  const [positionReference, setPositionReferenceRaw] = d(null);
  const [localDomReference, setLocalDomReference] = d(void 0);
  const [localFloatingElement, setLocalFloatingElement] = d(void 0);
  const domReferenceRef = A(null);
  const tree = useFloatingTree(externalTree);
  const storeElements = T(() => ({
    reference: referenceElement,
    floating: floatingElement,
    domReference: domReferenceElement
  }), [referenceElement, floatingElement, domReferenceElement]);
  const position = useFloating$1({
    ...options,
    elements: {
      ...storeElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const localDomReferenceElement = isElement(localDomReference) ? localDomReference : null;
  const syncedFloatingElement = localFloatingElement === void 0 ? store.state.floatingElement : localFloatingElement;
  store.useSyncedValue("referenceElement", localDomReference ?? null);
  store.useSyncedValue("domReferenceElement", localDomReference === void 0 ? domReferenceElement : localDomReferenceElement);
  store.useSyncedValue("floatingElement", syncedFloatingElement);
  const setPositionReference = q((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = q((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setLocalDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs, setLocalDomReference]);
  const setFloating = q((node) => {
    setLocalFloatingElement(node);
    position.refs.setFloating(node);
  }, [position.refs]);
  const refs = T(() => ({
    ...position.refs,
    setReference,
    setFloating,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setFloating, setPositionReference]);
  const elements = T(() => ({
    ...position.elements,
    domReference: domReferenceElement
  }), [position.elements, domReferenceElement]);
  const context = T(() => ({
    ...position,
    dataRef: store.context.dataRef,
    open,
    onOpenChange: store.setOpen,
    events: store.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: store
  }), [position, refs, elements, nodeId, store, open, floatingId]);
  useIsoLayoutEffect(() => {
    if (domReferenceElement) {
      domReferenceRef.current = domReferenceElement;
    }
  }, [domReferenceElement]);
  useIsoLayoutEffect(() => {
    store.context.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((n2) => n2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return T(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: store
  }), [position, refs, elements, context, store]);
}
const ESCAPE = "Escape";
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, grid) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  if (orientation === "both" || orientation === "horizontal" && grid) {
    return key === ESCAPE;
  }
  return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
  const {
    listRef,
    activeIndex,
    onNavigate: onNavigateProp = () => {
    },
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loopFocus = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    parentOrientation,
    id,
    resetOnPointerLeave = true,
    externalTree,
    grid: navigateGrid
  } = props;
  const isGrid = navigateGrid != null;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const dataRef = store.context.dataRef;
  const floatingFocusElement = getFloatingFocusElement(floatingElement);
  const typeableComboboxReference = isTypeableCombobox(domReferenceElement);
  const floatingFocusElementRef = useValueAsRef(floatingFocusElement);
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree(externalTree);
  const focusItemOnOpenRef = A(focusItemOnOpen);
  const indexRef = A(selectedIndex ?? -1);
  const keyRef = A(null);
  const isPointerModalityRef = A(true);
  const onNavigate = useStableCallback((event) => {
    onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
  });
  const previousMountedRef = A(!!floatingElement);
  const previousOpenRef = A(open);
  const forceSyncFocusRef = A(false);
  const forceScrollIntoViewRef = A(false);
  const cancelQueuedFocusRef = A(null);
  const disabledIndicesRef = useValueAsRef(disabledIndices);
  const latestOpenRef = useValueAsRef(open);
  const selectedIndexRef = useValueAsRef(selectedIndex);
  const resetOnPointerLeaveRef = useValueAsRef(resetOnPointerLeave);
  const focusFrame = useAnimationFrame();
  const waitForListPopulatedFrame = useAnimationFrame();
  const focusItem = useStableCallback(() => {
    function runFocus(item2) {
      if (virtual) {
        tree == null ? void 0 : tree.events.emit("virtualfocus", item2);
      } else {
        cancelQueuedFocusRef.current = enqueueFocus(item2, {
          sync: forceSyncFocusRef.current,
          preventScroll: true
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    const forceScrollIntoView = forceScrollIntoViewRef.current;
    if (initialItem) {
      runFocus(initialItem);
    }
    const scheduler2 = forceSyncFocusRef.current ? (callback) => callback() : (callback) => focusFrame.request(callback);
    scheduler2(() => {
      var _a2;
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) {
        return;
      }
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const shouldScrollIntoView = (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        item && (forceScrollIntoView || !isPointerModalityRef.current)
      );
      if (shouldScrollIntoView) {
        (_a2 = waitedItem.scrollIntoView) == null ? void 0 : _a2.call(waitedItem, {
          block: "nearest",
          inline: "nearest"
        });
      }
    });
  });
  useIsoLayoutEffect(() => {
    dataRef.current.orientation = orientation;
  }, [dataRef, orientation]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (open && floatingElement) {
      indexRef.current = selectedIndex ?? -1;
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate();
      }
    } else if (previousMountedRef.current) {
      indexRef.current = -1;
      onNavigate();
    }
  }, [enabled, open, floatingElement, selectedIndex, onNavigate]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (!open) {
      forceSyncFocusRef.current = false;
      return;
    }
    if (!floatingElement) {
      return;
    }
    if (activeIndex == null) {
      forceSyncFocusRef.current = false;
      if (selectedIndexRef.current != null) {
        return;
      }
      if (previousMountedRef.current) {
        indexRef.current = -1;
        focusItem();
      }
      if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
        let runs = 0;
        const waitForListPopulated = () => {
          if (listRef.current[0] == null) {
            if (runs < 2) {
              const scheduler2 = runs ? (callback) => waitForListPopulatedFrame.request(callback) : queueMicrotask;
              scheduler2(waitForListPopulated);
            }
            runs += 1;
          } else {
            indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef) : getMaxListIndex(listRef);
            keyRef.current = null;
            onNavigate();
          }
        };
        waitForListPopulated();
      }
    } else if (!isIndexOutOfListBounds(listRef.current, activeIndex)) {
      indexRef.current = activeIndex;
      focusItem();
      forceScrollIntoViewRef.current = false;
    }
  }, [enabled, open, floatingElement, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, waitForListPopulatedFrame]);
  useIsoLayoutEffect(() => {
    var _a2, _b;
    if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = (_b = (_a2 = nodes.find((node) => node.id === parentId)) == null ? void 0 : _a2.context) == null ? void 0 : _b.elements.floating;
    const activeEl = activeElement(ownerDocument(domReferenceElement ?? parent ?? null));
    const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, floatingElement, domReferenceElement, tree, parentId, virtual]);
  useIsoLayoutEffect(() => {
    previousOpenRef.current = open;
    previousMountedRef.current = !!floatingElement;
  });
  useIsoLayoutEffect(() => {
    if (!open) {
      keyRef.current = null;
      focusItemOnOpenRef.current = focusItemOnOpen;
    }
  }, [open, focusItemOnOpen]);
  const hasActiveIndex = activeIndex != null;
  const syncCurrentTarget = useStableCallback((event) => {
    if (!latestOpenRef.current) {
      return;
    }
    const index = listRef.current.indexOf(event.currentTarget);
    if (index !== -1 && (indexRef.current !== index || activeIndex !== index)) {
      indexRef.current = index;
      onNavigate(event);
    }
  });
  const getParentOrientation = useStableCallback(() => {
    var _a2, _b, _c;
    return parentOrientation ?? ((_c = (_b = (_a2 = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : _a2.context) == null ? void 0 : _b.dataRef) == null ? void 0 : _c.current.orientation);
  });
  const getMinEnabledIndex = useStableCallback(() => {
    return getMinListIndex(listRef, disabledIndicesRef.current);
  });
  const commonOnKeyDown = useStableCallback((event) => {
    isPointerModalityRef.current = false;
    forceSyncFocusRef.current = true;
    if (event.which === 229) {
      return;
    }
    if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
      return;
    }
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, isGrid)) {
      if (!isMainOrientationKey(event.key, getParentOrientation())) {
        stopEvent(event);
      }
      store.setOpen(false, createChangeEventDetails(listNavigation, event.nativeEvent));
      if (isHTMLElement(domReferenceElement)) {
        if (virtual) {
          tree == null ? void 0 : tree.events.emit("virtualfocus", domReferenceElement);
        } else {
          domReferenceElement.focus();
        }
      }
      return;
    }
    const currentIndex = indexRef.current;
    const minIndex = getMinListIndex(listRef, disabledIndices);
    const maxIndex = getMaxListIndex(listRef, disabledIndices);
    if (!typeableComboboxReference) {
      if (event.key === "Home") {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(event);
      }
      if (event.key === "End") {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(event);
      }
    }
    if (navigateGrid != null) {
      const index = navigateGrid(event, indexRef.current, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex);
      if (index != null) {
        indexRef.current = index;
        onNavigate(event);
      }
      if (orientation === "both") {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      stopEvent(event);
      if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
        onNavigate(event);
        return;
      }
      if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
        if (loopFocus) {
          if (currentIndex >= maxIndex) {
            if (allowEscape && currentIndex !== listRef.current.length) {
              indexRef.current = -1;
            } else {
              forceSyncFocusRef.current = false;
              indexRef.current = minIndex;
            }
          } else {
            indexRef.current = findNonDisabledListIndex(listRef.current, {
              startingIndex: currentIndex,
              disabledIndices
            });
          }
        } else {
          indexRef.current = Math.min(maxIndex, findNonDisabledListIndex(listRef.current, {
            startingIndex: currentIndex,
            disabledIndices
          }));
        }
      } else if (loopFocus) {
        if (currentIndex <= minIndex) {
          if (allowEscape && currentIndex !== -1) {
            indexRef.current = listRef.current.length;
          } else {
            forceSyncFocusRef.current = false;
            indexRef.current = maxIndex;
          }
        } else {
          indexRef.current = findNonDisabledListIndex(listRef.current, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          });
        }
      } else {
        indexRef.current = Math.max(minIndex, findNonDisabledListIndex(listRef.current, {
          startingIndex: currentIndex,
          decrement: true,
          disabledIndices
        }));
      }
      if (isIndexOutOfListBounds(listRef.current, indexRef.current)) {
        indexRef.current = -1;
      }
      onNavigate(event);
    }
  });
  const item = T(() => {
    const itemProps = {
      onFocus(event) {
        forceSyncFocusRef.current = true;
        syncCurrentTarget(event);
      },
      onClick: ({
        currentTarget
      }) => currentTarget.focus({
        preventScroll: true
      }),
      // Safari
      onMouseMove(event) {
        forceSyncFocusRef.current = true;
        forceScrollIntoViewRef.current = false;
        if (focusItemOnHover) {
          syncCurrentTarget(event);
        }
      },
      onPointerLeave(event) {
        var _a2;
        if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === "touch") {
          return;
        }
        forceSyncFocusRef.current = true;
        const relatedTarget = event.relatedTarget;
        if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
          return;
        }
        if (!resetOnPointerLeaveRef.current) {
          return;
        }
        (_a2 = cancelQueuedFocusRef.current) == null ? void 0 : _a2.call(cancelQueuedFocusRef);
        cancelQueuedFocusRef.current = null;
        indexRef.current = -1;
        onNavigate(event);
        if (!virtual) {
          const floatingFocusEl = floatingFocusElementRef.current;
          const activeEl = activeElement(ownerDocument(floatingFocusEl));
          if (floatingFocusEl && contains(floatingFocusEl, activeEl)) {
            floatingFocusEl.focus({
              preventScroll: true
            });
          }
        }
      }
    };
    return itemProps;
  }, [syncCurrentTarget, latestOpenRef, floatingFocusElementRef, focusItemOnHover, listRef, onNavigate, resetOnPointerLeaveRef, virtual]);
  const ariaActiveDescendantProp = T(() => {
    return virtual && open && hasActiveIndex && {
      "aria-activedescendant": `${id}-${activeIndex}`
    };
  }, [virtual, open, hasActiveIndex, id, activeIndex]);
  const floating = T(() => {
    return {
      "aria-orientation": orientation === "both" ? void 0 : orientation,
      ...!typeableComboboxReference ? ariaActiveDescendantProp : {},
      onKeyDown(event) {
        if (event.key === "Tab" && event.shiftKey && open && !virtual) {
          const target = getTarget(event.nativeEvent);
          if (target && !contains(floatingFocusElementRef.current, target)) {
            return;
          }
          stopEvent(event);
          store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent));
          if (isHTMLElement(domReferenceElement)) {
            domReferenceElement.focus();
          }
          return;
        }
        commonOnKeyDown(event);
      },
      onPointerMove() {
        isPointerModalityRef.current = true;
      }
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, floatingFocusElementRef, orientation, typeableComboboxReference, store, open, virtual, domReferenceElement]);
  const trigger = T(() => {
    function openOnNavigationKeyDown(event) {
      store.setOpen(true, createChangeEventDetails(listNavigation, event.nativeEvent, event.currentTarget));
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = !virtual;
      }
    }
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      onKeyDown(event) {
        const currentOpen = store.select("open");
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.startsWith("Arrow");
        const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
        const isMainKey = isMainOrientationKey(event.key, orientation);
        const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
        if (virtual && currentOpen) {
          return commonOnKeyDown(event);
        }
        if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
          return void 0;
        }
        if (isNavigationKey) {
          const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
          keyRef.current = nested && isParentMainKey ? null : event.key;
        }
        if (nested) {
          if (isParentCrossOpenKey) {
            stopEvent(event);
            if (currentOpen) {
              indexRef.current = getMinEnabledIndex();
              onNavigate(event);
            } else {
              openOnNavigationKeyDown(event);
            }
          }
          return void 0;
        }
        if (isMainKey) {
          if (selectedIndexRef.current != null) {
            indexRef.current = selectedIndexRef.current;
          }
          stopEvent(event);
          if (!currentOpen && openOnArrowKeyDown) {
            openOnNavigationKeyDown(event);
          } else {
            commonOnKeyDown(event);
          }
          if (currentOpen) {
            onNavigate(event);
          }
        }
        return void 0;
      },
      onFocus(event) {
        if (store.select("open") && !virtual) {
          indexRef.current = -1;
          onNavigate(event);
        }
      },
      onPointerDown: checkVirtualPointer,
      onPointerEnter: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [commonOnKeyDown, focusItemOnOpen, getMinEnabledIndex, nested, onNavigate, store, openOnArrowKeyDown, orientation, getParentOrientation, rtl, selectedIndexRef, virtual]);
  const reference = T(() => {
    return {
      ...ariaActiveDescendantProp,
      ...trigger
    };
  }, [ariaActiveDescendantProp, trigger]);
  return T(() => enabled ? {
    reference,
    floating,
    item,
    trigger
  } : {}, [enabled, reference, floating, trigger, item]);
}
function gridNavigation(event, prevIndex, listRef, orientation, loopFocus, rtl, disabledIndices, minIndex, maxIndex, cols = 2) {
  const nextIndex = getGridNavigatedIndex(listRef.current, {
    event,
    orientation,
    loopFocus,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    // An out-of-range previous index falls back to the first enabled item.
    prevIndex: prevIndex > maxIndex ? minIndex : prevIndex,
    stopEvent: true
  });
  return isIndexOutOfListBounds(listRef.current, nextIndex) ? void 0 : nextIndex;
}
const ComboboxRootContext = /* @__PURE__ */ X(void 0);
const ComboboxFloatingContext = /* @__PURE__ */ X(void 0);
const ComboboxDerivedItemsContext = /* @__PURE__ */ X(void 0);
const ComboboxHasItemsContext = /* @__PURE__ */ X(false);
const ComboboxInputValueContext = /* @__PURE__ */ X("");
function useComboboxRootContext() {
  const context = x(ComboboxRootContext);
  if (!context) {
    throw new Error(formatErrorMessage(22));
  }
  return context;
}
function useComboboxFloatingContext() {
  const context = x(ComboboxFloatingContext);
  if (!context) {
    throw new Error(formatErrorMessage(23));
  }
  return context;
}
function useComboboxDerivedItemsContext() {
  const context = x(ComboboxDerivedItemsContext);
  if (!context) {
    throw new Error(formatErrorMessage(24));
  }
  return context;
}
function useComboboxInputValueContext() {
  return x(ComboboxInputValueContext);
}
function useComboboxHasItemsContext() {
  return x(ComboboxHasItemsContext);
}
const defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
  if (itemValue == null || selectedValue == null) {
    return Object.is(itemValue, selectedValue);
  }
  return comparer(itemValue, selectedValue);
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
  if (!selectedValues || selectedValues.length === 0) {
    return false;
  }
  return selectedValues.some((selectedValue) => {
    if (selectedValue === void 0) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function findItemIndex(itemValues, selectedValue, comparer) {
  if (!itemValues || itemValues.length === 0) {
    return -1;
  }
  return itemValues.findIndex((itemValue) => {
    if (itemValue === void 0) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function removeItem(selectedValues, itemValue, comparer) {
  return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
}
function serializeValue(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}
function isGroupedItems(items) {
  return items != null && items.length > 0 && typeof items[0] === "object" && items[0] != null && "items" in items[0];
}
function hasNullItemLabel(items) {
  if (!Array.isArray(items)) {
    return items != null && "null" in items;
  }
  const arrayItems = items;
  if (isGroupedItems(arrayItems)) {
    for (const group of arrayItems) {
      for (const item of group.items) {
        if (item && item.value == null && item.label != null) {
          return true;
        }
      }
    }
    return false;
  }
  for (const item of arrayItems) {
    if (item && item.value == null && item.label != null) {
      return true;
    }
  }
  return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
  if (itemToStringLabel && item != null) {
    return itemToStringLabel(item) ?? "";
  }
  if (item && typeof item === "object") {
    if ("label" in item && item.label != null) {
      return String(item.label);
    }
    if ("value" in item) {
      return String(item.value);
    }
  }
  return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
  if (itemToStringValue && item != null) {
    return itemToStringValue(item) ?? "";
  }
  if (item && typeof item === "object" && "value" in item && "label" in item) {
    return serializeValue(item.value);
  }
  return serializeValue(item);
}
const selectors = {
  id: createSelector((state) => state.id),
  labelId: createSelector((state) => state.labelId),
  items: createSelector((state) => state.items),
  selectedValue: createSelector((state) => state.selectedValue),
  hasSelectionChips: createSelector((state) => {
    const selectedValue = state.selectedValue;
    return Array.isArray(selectedValue) && selectedValue.length > 0;
  }),
  hasSelectedValue: createSelector((state) => {
    const {
      selectedValue,
      selectionMode
    } = state;
    if (selectedValue == null) {
      return false;
    }
    if (selectionMode === "multiple" && Array.isArray(selectedValue)) {
      return selectedValue.length > 0;
    }
    return true;
  }),
  hasNullItemLabel: createSelector((state, enabled) => {
    return enabled ? hasNullItemLabel(state.items) : false;
  }),
  open: createSelector((state) => state.open),
  mounted: createSelector((state) => state.mounted),
  forceMounted: createSelector((state) => state.forceMounted),
  inline: createSelector((state) => state.inline),
  activeIndex: createSelector((state) => state.activeIndex),
  selectedIndex: createSelector((state) => state.selectedIndex),
  isActive: createSelector((state, index) => state.activeIndex === index),
  isSelected: createSelector((state, itemValue) => {
    const comparer = state.isItemEqualToValue;
    const selectedValue = state.selectedValue;
    if (Array.isArray(selectedValue)) {
      return selectedValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  }),
  transitionStatus: createSelector((state) => state.transitionStatus),
  popupProps: createSelector((state) => state.popupProps),
  inputProps: createSelector((state) => state.inputProps),
  triggerProps: createSelector((state) => state.triggerProps),
  itemProps: createSelector((state) => state.itemProps),
  positionerElement: createSelector((state) => state.positionerElement),
  listElement: createSelector((state) => state.listElement),
  popupId: createSelector((state) => state.popupId),
  triggerElement: createSelector((state) => state.triggerElement),
  inputElement: createSelector((state) => state.inputElement),
  inputGroupElement: createSelector((state) => state.inputGroupElement),
  popupSide: createSelector((state) => state.popupSide),
  openMethod: createSelector((state) => state.openMethod),
  inputInsidePopup: createSelector((state) => state.inputInsidePopup),
  inputOwnsFormValue: createSelector((state) => state.inputOwnsFormValue),
  selectionMode: createSelector((state) => state.selectionMode),
  name: createSelector((state) => state.name),
  form: createSelector((state) => state.form),
  disabled: createSelector((state) => state.disabled),
  readOnly: createSelector((state) => state.readOnly),
  required: createSelector((state) => state.required),
  grid: createSelector((state) => state.grid),
  virtualized: createSelector((state) => state.virtualized),
  itemToStringLabel: createSelector((state) => state.itemToStringLabel),
  isItemEqualToValue: createSelector((state) => state.isItemEqualToValue),
  modal: createSelector((state) => state.modal),
  autoHighlight: createSelector((state) => state.autoHighlight),
  submitOnItemClick: createSelector((state) => state.submitOnItemClick)
};
let FieldControlDataAttributes = /* @__PURE__ */ (function(FieldControlDataAttributes2) {
  FieldControlDataAttributes2["disabled"] = "data-disabled";
  FieldControlDataAttributes2["valid"] = "data-valid";
  FieldControlDataAttributes2["invalid"] = "data-invalid";
  FieldControlDataAttributes2["touched"] = "data-touched";
  FieldControlDataAttributes2["dirty"] = "data-dirty";
  FieldControlDataAttributes2["filled"] = "data-filled";
  FieldControlDataAttributes2["focused"] = "data-focused";
  return FieldControlDataAttributes2;
})({});
const DEFAULT_VALIDITY_STATE = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: null,
  valueMissing: false
};
const DEFAULT_FIELD_STATE_ATTRIBUTES = {
  valid: null,
  touched: false,
  dirty: false,
  filled: false,
  focused: false
};
const DEFAULT_FIELD_ROOT_STATE = {
  disabled: false,
  ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
const fieldValidityMapping = {
  valid(value) {
    if (value === null) {
      return null;
    }
    if (value) {
      return {
        [FieldControlDataAttributes.valid]: ""
      };
    }
    return {
      [FieldControlDataAttributes.invalid]: ""
    };
  }
};
const DEFAULT_FIELD_ROOT_CONTEXT = {
  invalid: void 0,
  name: void 0,
  validityData: {
    state: DEFAULT_VALIDITY_STATE,
    errors: [],
    error: "",
    value: "",
    initialValue: null
  },
  setValidityData: NOOP,
  disabled: void 0,
  touched: DEFAULT_FIELD_STATE_ATTRIBUTES.touched,
  setTouched: NOOP,
  dirty: DEFAULT_FIELD_STATE_ATTRIBUTES.dirty,
  setDirty: NOOP,
  filled: DEFAULT_FIELD_STATE_ATTRIBUTES.filled,
  setFilled: NOOP,
  focused: DEFAULT_FIELD_STATE_ATTRIBUTES.focused,
  setFocused: NOOP,
  validate: () => null,
  validationMode: "onSubmit",
  validationDebounceTime: 0,
  shouldValidateOnChange: () => false,
  state: DEFAULT_FIELD_ROOT_STATE,
  markedDirtyRef: {
    current: false
  },
  registerFieldControl: NOOP,
  validation: {
    getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
    inputRef: {
      current: null
    },
    registerInput: NOOP,
    commit: async () => {
    },
    change: NOOP
  }
};
const FieldRootContext = /* @__PURE__ */ X(DEFAULT_FIELD_ROOT_CONTEXT);
function useFieldRootContext(optional = true) {
  const context = x(FieldRootContext);
  if (context.setValidityData === NOOP && !optional) {
    throw new Error(formatErrorMessage(28));
  }
  return context;
}
function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
  const {
    registerFieldControl
  } = useFieldRootContext();
  const sourceRef = A(null);
  if (!sourceRef.current) {
    sourceRef.current = Symbol();
  }
  useIsoLayoutEffect(() => {
    const source = sourceRef.current;
    if (!source || !enabled) {
      return void 0;
    }
    const registration = {
      controlRef,
      getValue: getFormValueOverride,
      id,
      name,
      value
    };
    registerFieldControl(source, registration);
    return () => {
      registerFieldControl(source, void 0);
    };
  }, [controlRef, enabled, getFormValueOverride, id, name, registerFieldControl, value]);
}
const FormContext = /* @__PURE__ */ X({
  formRef: {
    current: {
      fields: /* @__PURE__ */ new Map()
    }
  },
  errors: {},
  clearErrors: NOOP,
  validationMode: "onSubmit",
  submitAttemptedRef: {
    current: false
  }
});
function useFormContext() {
  return x(FormContext);
}
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}
const LabelableContext = /* @__PURE__ */ X({
  controlId: void 0,
  registerControlId: NOOP,
  labelId: void 0,
  setLabelId: NOOP,
  messageIds: [],
  setMessageIds: NOOP,
  getDescriptionProps: (externalProps) => externalProps
});
function useLabelableContext() {
  return x(LabelableContext);
}
function useLabelableId(params = {}) {
  const {
    id,
    implicit = false,
    controlRef
  } = params;
  const {
    controlId,
    registerControlId
  } = useLabelableContext();
  const defaultId = useBaseUiId(id);
  const controlIdForEffect = implicit ? controlId : void 0;
  const controlSourceRef = useRefWithInit(() => Symbol("labelable-control"));
  const hasRegisteredRef = A(false);
  const hadExplicitIdRef = A(id != null);
  const unregisterControlId = useStableCallback(() => {
    if (!hasRegisteredRef.current || registerControlId === NOOP) {
      return;
    }
    hasRegisteredRef.current = false;
    registerControlId(controlSourceRef.current, void 0);
  });
  useIsoLayoutEffect(() => {
    if (registerControlId === NOOP) {
      return void 0;
    }
    let nextId;
    if (implicit) {
      const elem = controlRef == null ? void 0 : controlRef.current;
      if (isElement(elem) && elem.closest("label") != null) {
        nextId = id ?? null;
      } else {
        nextId = controlIdForEffect ?? defaultId;
      }
    } else if (id != null) {
      hadExplicitIdRef.current = true;
      nextId = id;
    } else if (hadExplicitIdRef.current) {
      nextId = defaultId;
    } else {
      unregisterControlId();
      return void 0;
    }
    if (nextId === void 0) {
      unregisterControlId();
      return void 0;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, nextId);
    return void 0;
  }, [id, controlRef, controlIdForEffect, registerControlId, implicit, defaultId, controlSourceRef, unregisterControlId]);
  y(() => {
    return unregisterControlId;
  }, [unregisterControlId]);
  return controlId ?? defaultId;
}
function getComboboxPopupId(rootId) {
  return rootId == null ? void 0 : `${rootId}-popup`;
}
function createCollatorItemFilter(collatorFilter, itemToStringLabel) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    const itemString = stringifyAsLabel(item, itemToStringLabel);
    return collatorFilter.contains(itemString, query);
  };
}
function createSingleSelectionCollatorFilter(collatorFilter, itemToStringLabel, selectedValue) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    if (!query) {
      return true;
    }
    const itemString = stringifyAsLabel(item, itemToStringLabel);
    const selectedString = selectedValue != null ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
    if (selectedString && collatorFilter.contains(selectedString, query) && selectedString.length === query.length) {
      return true;
    }
    return collatorFilter.contains(itemString, query);
  };
}
function stringifyLocale(locale) {
  if (Array.isArray(locale)) {
    return locale.map((value) => stringifyLocale(value)).join(",");
  }
  if (locale == null) {
    return "";
  }
  return String(locale);
}
const filterCache = /* @__PURE__ */ new Map();
function getFilter(options = {}) {
  const mergedOptions = {
    usage: "search",
    sensitivity: "base",
    ignorePunctuation: true,
    ...options
  };
  const cacheKey = `${stringifyLocale(options.locale)}|${JSON.stringify(mergedOptions)}`;
  const cachedFilter = filterCache.get(cacheKey);
  if (cachedFilter) {
    return cachedFilter;
  }
  const collator = new Intl.Collator(options.locale, mergedOptions);
  const filter = {
    contains(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      for (let i2 = 0; i2 <= itemString.length - query.length; i2 += 1) {
        if (collator.compare(itemString.slice(i2, i2 + query.length), query) === 0) {
          return true;
        }
      }
      return false;
    },
    startsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      return collator.compare(itemString.slice(0, query.length), query) === 0;
    },
    endsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      const queryLength = query.length;
      return itemString.length >= queryLength && collator.compare(itemString.slice(itemString.length - queryLength), query) === 0;
    }
  };
  filterCache.set(cacheKey, filter);
  return filter;
}
const useCoreFilter = getFilter;
function useEnhancedClickHandler(handler) {
  const lastClickInteractionTypeRef = A("");
  const handlePointerDown = q((event) => {
    if (event.defaultPrevented) {
      return;
    }
    lastClickInteractionTypeRef.current = event.pointerType;
    handler(event, event.pointerType);
  }, [handler]);
  const handleClick = q((event) => {
    if (event.detail === 0) {
      handler(event, "keyboard");
      return;
    }
    if ("pointerType" in event) {
      handler(event, event.pointerType);
    } else {
      handler(event, lastClickInteractionTypeRef.current);
    }
    lastClickInteractionTypeRef.current = "";
  }, [handler]);
  return {
    onClick: handleClick,
    onPointerDown: handlePointerDown
  };
}
function useValueChanged(value, onChange) {
  const valueRef = A(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current === value) {
      return;
    }
    onChangeCallback(valueRef.current);
  }, [value, onChangeCallback]);
  useIsoLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
}
function useOpenMethodTriggerProps(open, setOpenMethod) {
  const handleTriggerClick = useStableCallback((_2, interactionType) => {
    const isOpen = typeof open === "function" ? open() : open;
    if (!isOpen) {
      setOpenMethod(interactionType || // On iOS Safari, the hitslop around touch targets means tapping outside an element's
      // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
      // will be "" in that case.
      (ios ? "touch" : ""));
    }
  });
  const {
    onClick,
    onPointerDown
  } = useEnhancedClickHandler(handleTriggerClick);
  return T(() => ({
    onClick,
    onPointerDown
  }), [onClick, onPointerDown]);
}
function useOpenInteractionType(open) {
  const [openMethod, setOpenMethod] = d(null);
  const triggerProps = useOpenMethodTriggerProps(open, setOpenMethod);
  useValueChanged(open, (previousOpen) => {
    if (previousOpen && !open) {
      setOpenMethod(null);
    }
  });
  return T(() => ({
    openMethod,
    triggerProps
  }), [openMethod, triggerProps]);
}
function areArraysEqual(array1, array2, itemComparer = (a2, b) => a2 === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}
const NO_ACTIVE_VALUE = Symbol("none");
const INITIAL_LAST_HIGHLIGHT = {
  value: NO_ACTIVE_VALUE,
  index: -1
};
const DirectionContext = /* @__PURE__ */ X(void 0);
function useDirection() {
  const context = x(DirectionContext);
  return (context == null ? void 0 : context.direction) ?? "ltr";
}
function AriaCombobox(props) {
  const {
    id: idProp,
    onOpenChangeComplete: onOpenChangeCompleteProp,
    defaultSelectedValue = null,
    selectedValue: selectedValueProp,
    onSelectedValueChange,
    defaultInputValue: defaultInputValueProp,
    inputValue: inputValueProp,
    open: openProp,
    defaultOpen = false,
    selectionMode = "none",
    onItemHighlighted: onItemHighlightedProp,
    name: nameProp,
    form,
    disabled: disabledProp = false,
    readOnly = false,
    required = false,
    inputRef: inputRefProp,
    grid = false,
    items,
    filteredItems: filteredItemsProp,
    filter: filterProp,
    openOnInputClick = true,
    autoHighlight = false,
    keepHighlight = false,
    highlightItemOnHover = true,
    loopFocus = true,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue = defaultItemEquality,
    virtualized = false,
    inline: inlineProp = false,
    fillInputOnItemPress = true,
    modal = false,
    limit = -1,
    autoComplete = "list",
    formAutoComplete,
    locale,
    submitOnItemClick = false
  } = props;
  const {
    clearErrors
  } = useFormContext();
  const {
    setDirty,
    validityData,
    setFilled,
    name: fieldName,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const direction = useDirection();
  const id = useLabelableId({
    id: idProp
  });
  const collatorFilter = useCoreFilter({
    locale
  });
  const [queryChangedAfterOpen, setQueryChangedAfterOpen] = d(false);
  const [closeQuery, setCloseQuery] = d(null);
  const listRef = A([]);
  const labelsRef = A([]);
  const popupRef = A(null);
  const inputRef = A(null);
  const startDismissRef = A(null);
  const endDismissRef = A(null);
  const emptyRef = A(null);
  const keyboardActiveRef = A(true);
  const hadInputClearRef = A(false);
  const chipsContainerRef = A(null);
  const clearRef = A(null);
  const selectionEventRef = A(null);
  const lastHighlightRef = A(INITIAL_LAST_HIGHLIGHT);
  const pendingQueryHighlightRef = A(null);
  const valuesRef = A([]);
  const allValuesRef = A([]);
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const multiple = selectionMode === "multiple";
  const single = selectionMode === "single";
  const hasInputValue = inputValueProp !== void 0 || defaultInputValueProp !== void 0;
  const hasItems = items !== void 0;
  const hasFilteredItemsProp = filteredItemsProp !== void 0;
  let autoHighlightMode;
  if (autoHighlight === "always") {
    autoHighlightMode = "always";
  } else {
    autoHighlightMode = autoHighlight ? "input-change" : false;
  }
  const [selectedValue, setSelectedValueUnwrapped] = useControlled({
    controlled: selectedValueProp,
    default: multiple ? defaultSelectedValue ?? EMPTY_ARRAY : defaultSelectedValue,
    name: "Combobox",
    state: "selectedValue"
  });
  const filter = T(() => {
    if (filterProp === null) {
      return () => true;
    }
    if (filterProp !== void 0) {
      return filterProp;
    }
    if (single && !queryChangedAfterOpen) {
      return createSingleSelectionCollatorFilter(collatorFilter, itemToStringLabel, selectedValue);
    }
    return createCollatorItemFilter(collatorFilter, itemToStringLabel);
  }, [filterProp, single, selectedValue, queryChangedAfterOpen, collatorFilter, itemToStringLabel]);
  const initialDefaultInputValue = useRefWithInit(() => {
    if (hasInputValue) {
      return defaultInputValueProp ?? "";
    }
    if (single) {
      return stringifyAsLabel(selectedValue, itemToStringLabel);
    }
    return "";
  }).current;
  const [inputValue, setInputValueUnwrapped] = useControlled({
    controlled: inputValueProp,
    default: initialDefaultInputValue,
    name: "Combobox",
    state: "inputValue"
  });
  const [open, setOpenUnwrapped] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Combobox",
    state: "open"
  });
  const isGrouped = isGroupedItems(items);
  const query = closeQuery ?? (inputValue === "" ? "" : String(inputValue).trim());
  const selectedLabelString = single ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
  const shouldBypassFiltering = single && !queryChangedAfterOpen && query !== "" && selectedLabelString !== "" && selectedLabelString.length === query.length && collatorFilter.contains(selectedLabelString, query);
  const filterQuery = shouldBypassFiltering ? "" : query;
  const shouldIgnoreExternalFiltering = hasItems && hasFilteredItemsProp && shouldBypassFiltering;
  const flatItems = T(() => {
    if (!items) {
      return EMPTY_ARRAY;
    }
    if (isGrouped) {
      return items.flatMap((group) => group.items);
    }
    return items;
  }, [items, isGrouped]);
  const filteredItems = T(() => {
    if (filteredItemsProp && !shouldIgnoreExternalFiltering) {
      return filteredItemsProp;
    }
    if (!items) {
      return EMPTY_ARRAY;
    }
    if (isGrouped) {
      const groupedItems = items;
      const resultingGroups = [];
      let currentCount = 0;
      for (const group of groupedItems) {
        if (limit > -1 && currentCount >= limit) {
          break;
        }
        const candidateItems = filterQuery === "" ? group.items : group.items.filter((item) => filter(item, filterQuery, itemToStringLabel));
        if (candidateItems.length === 0) {
          continue;
        }
        const remainingLimit = limit > -1 ? limit - currentCount : Infinity;
        const itemsToTake = candidateItems.slice(0, remainingLimit);
        if (itemsToTake.length > 0) {
          const newGroup = {
            ...group,
            items: itemsToTake
          };
          resultingGroups.push(newGroup);
          currentCount += itemsToTake.length;
        }
      }
      return resultingGroups;
    }
    if (filterQuery === "") {
      return limit > -1 ? flatItems.slice(0, limit) : (
        // The cast here is done as `flatItems` is readonly.
        // valuesRef.current, a mutable ref, can be set to `flatFilteredItems`, which may
        // reference this exact readonly value, creating a mutation risk.
        // However, <Combobox.Item> can never mutate this value as the mutating effect
        // bails early when `items` is provided, and this is only ever returned
        // when `items` is provided due to the early return at the top of this hook.
        flatItems
      );
    }
    const limitedItems = [];
    for (const item of flatItems) {
      if (limit > -1 && limitedItems.length >= limit) {
        break;
      }
      if (filter(item, filterQuery, itemToStringLabel)) {
        limitedItems.push(item);
      }
    }
    return limitedItems;
  }, [filteredItemsProp, shouldIgnoreExternalFiltering, items, isGrouped, filterQuery, limit, filter, itemToStringLabel, flatItems]);
  const flatFilteredItems = T(() => {
    if (isGrouped) {
      const groups = filteredItems;
      return groups.flatMap((g2) => g2.items);
    }
    return filteredItems;
  }, [filteredItems, isGrouped]);
  const store = useRefWithInit(() => new Store({
    id,
    labelId: void 0,
    selectedValue,
    open,
    filter,
    query,
    items,
    selectionMode,
    listRef,
    labelsRef,
    popupRef,
    emptyRef,
    inputRef,
    startDismissRef,
    endDismissRef,
    keyboardActiveRef,
    chipsContainerRef,
    clearRef,
    valuesRef,
    allValuesRef,
    selectionEventRef,
    name,
    form,
    disabled,
    readOnly,
    required,
    grid,
    isGrouped,
    virtualized,
    openOnInputClick,
    itemToStringLabel,
    isItemEqualToValue,
    modal,
    autoHighlight: autoHighlightMode,
    submitOnItemClick,
    hasInputValue,
    mounted: false,
    forceMounted: false,
    transitionStatus: "idle",
    inline: inlineProp,
    activeIndex: null,
    selectedIndex: null,
    popupProps: {},
    inputProps: {},
    triggerProps: {},
    itemProps: EMPTY_OBJECT,
    positionerElement: null,
    listElement: null,
    popupId: void 0,
    triggerElement: null,
    inputElement: null,
    inputGroupElement: null,
    popupSide: null,
    openMethod: null,
    inputInsidePopup: true,
    // Avoid duplicate names in the server HTML. Popup inputs aren't rendered
    // until after hydration, so the hidden input takes over then if needed.
    inputOwnsFormValue: selectionMode === "none",
    onOpenChangeComplete: onOpenChangeCompleteProp || NOOP,
    // Placeholder callbacks replaced on first render
    setOpen: NOOP,
    setInputValue: NOOP,
    setSelectedValue: NOOP,
    setIndices: NOOP,
    onItemHighlighted: NOOP,
    handleSelection: NOOP,
    forceMount: NOOP,
    requestSubmit: NOOP
  })).current;
  const fieldRawValue = selectionMode === "none" ? inputValue : selectedValue;
  const fieldStringValue = T(() => {
    if (selectionMode === "none") {
      return fieldRawValue;
    }
    if (Array.isArray(selectedValue)) {
      return selectedValue.map((value) => stringifyAsValue(value, itemToStringValue));
    }
    return stringifyAsValue(selectedValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue, selectionMode, selectedValue]);
  const onItemHighlighted = useStableCallback(onItemHighlightedProp);
  const onOpenChangeComplete = useStableCallback(onOpenChangeCompleteProp);
  const activeIndex = useStore(store, selectors.activeIndex);
  const selectedIndex = useStore(store, selectors.selectedIndex);
  const positionerElement = useStore(store, selectors.positionerElement);
  const listElement = useStore(store, selectors.listElement);
  const triggerElement = useStore(store, selectors.triggerElement);
  const inputElement = useStore(store, selectors.inputElement);
  const inputGroupElement = useStore(store, selectors.inputGroupElement);
  const inline = useStore(store, selectors.inline);
  const inputInsidePopup = useStore(store, selectors.inputInsidePopup);
  const inputOwnsFormValue = useStore(store, selectors.inputOwnsFormValue);
  const triggerRef = useValueAsRef(triggerElement);
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  const {
    openMethod,
    triggerProps
  } = useOpenInteractionType(open);
  const getStringifiedValueForForm = useStableCallback(() => fieldStringValue);
  useRegisterFieldControl(inputInsidePopup ? triggerRef : inputRef, id, fieldRawValue, getStringifiedValueForForm, !disabled, nameProp);
  const forceMount = useStableCallback(() => {
    if (items) {
      labelsRef.current = flatFilteredItems.map((item) => stringifyAsLabel(item, itemToStringLabel));
    } else {
      store.set("forceMounted", true);
    }
  });
  const initialSelectedValueRef = A(selectedValue);
  useIsoLayoutEffect(() => {
    if (selectedValue !== initialSelectedValueRef.current) {
      forceMount();
    }
  }, [forceMount, selectedValue]);
  const setIndices = useStableCallback((options) => {
    store.update(options);
    const type = options.type || "none";
    if (options.activeIndex === void 0) {
      return;
    }
    if (options.activeIndex === null) {
      if (lastHighlightRef.current !== INITIAL_LAST_HIGHLIGHT) {
        lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
        onItemHighlighted(void 0, createGenericEventDetails(type, void 0, {
          index: -1
        }));
      }
    } else {
      const activeValue = valuesRef.current[options.activeIndex];
      lastHighlightRef.current = {
        value: activeValue,
        index: options.activeIndex
      };
      onItemHighlighted(activeValue, createGenericEventDetails(type, void 0, {
        index: options.activeIndex
      }));
    }
  });
  const setInputValue = useStableCallback((next, eventDetails) => {
    var _a2;
    hadInputClearRef.current = eventDetails.reason === inputClear;
    (_a2 = props.onInputValueChange) == null ? void 0 : _a2.call(props, next, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (eventDetails.reason === inputChange) {
      const event = eventDetails.event;
      const inputType = event.inputType;
      const isTypedInput = event.type === "compositionend" || inputType != null && inputType !== "" && inputType !== "insertReplacementText";
      if (isTypedInput) {
        const hasQuery = next.trim() !== "";
        if (hasQuery) {
          setQueryChangedAfterOpen(true);
        }
        pendingQueryHighlightRef.current = {
          hasQuery
        };
        if (hasQuery && autoHighlightMode && store.state.activeIndex == null) {
          store.set("activeIndex", 0);
        }
      }
    }
    setInputValueUnwrapped(next);
  });
  const setOpen = useStableCallback((nextOpen, eventDetails) => {
    var _a2;
    if (open === nextOpen) {
      return;
    }
    if (eventDetails.reason === "escape-key" && hasItems && flatFilteredItems.length === 0 && !store.state.emptyRef.current) {
      eventDetails.allowPropagation();
    }
    (_a2 = props.onOpenChange) == null ? void 0 : _a2.call(props, nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (nextOpen && multiple && inputInsidePopup && !inline && closeQuery !== null) {
      setQueryChangedAfterOpen(false);
      setCloseQuery(null);
      if (inputValue !== "") {
        setInputValue("", createChangeEventDetails(inputClear, eventDetails.event));
      }
    }
    if (!nextOpen && queryChangedAfterOpen) {
      if (single) {
        if (!inline) {
          setCloseQuery(query);
        }
        if (query === "") {
          setQueryChangedAfterOpen(false);
        }
      } else if (multiple) {
        if (!inline) {
          setCloseQuery(query);
        }
        if (inputInsidePopup) {
          setIndices({
            activeIndex: null
          });
        }
        if (!inputInsidePopup || inline) {
          setInputValue("", createChangeEventDetails(inputClear, eventDetails.event));
        }
      }
    }
    setOpenUnwrapped(nextOpen);
    if (!nextOpen && inputInsidePopup && (eventDetails.reason === focusOut || eventDetails.reason === outsidePress)) {
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
        validation.commit(valueToValidate);
      }
    }
  });
  const setSelectedValue = useStableCallback((nextValue, eventDetails) => {
    onSelectedValueChange == null ? void 0 : onSelectedValueChange(nextValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setSelectedValueUnwrapped(nextValue);
    const shouldFillInput = selectionMode === "none" && popupRef.current && fillInputOnItemPress || single && !store.state.inputInsidePopup;
    if (shouldFillInput) {
      setInputValue(stringifyAsLabel(nextValue, itemToStringLabel), createChangeEventDetails(eventDetails.reason, eventDetails.event));
    }
    if (single && nextValue != null && eventDetails.reason !== inputChange && queryChangedAfterOpen && !inline) {
      setCloseQuery(query);
    }
  });
  const handleSelection = useStableCallback((event, passedValue) => {
    var _a2;
    let itemValue = passedValue;
    if (itemValue === void 0) {
      if (activeIndex === null) {
        return;
      }
      itemValue = valuesRef.current[activeIndex];
    }
    const targetEl = getTarget(event);
    const overrideEvent = selectionEventRef.current ?? event;
    selectionEventRef.current = null;
    const eventDetails = createChangeEventDetails(itemPress, overrideEvent);
    const href = (_a2 = targetEl == null ? void 0 : targetEl.closest("a")) == null ? void 0 : _a2.getAttribute("href");
    if (href) {
      if (href.startsWith("#")) {
        setOpen(false, eventDetails);
      }
      return;
    }
    if (multiple) {
      const currentSelectedValue = Array.isArray(selectedValue) ? selectedValue : [];
      const isCurrentlySelected = selectedValueIncludes(currentSelectedValue, itemValue, store.state.isItemEqualToValue);
      const nextValue = isCurrentlySelected ? removeItem(currentSelectedValue, itemValue, store.state.isItemEqualToValue) : [...currentSelectedValue, itemValue];
      setSelectedValue(nextValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      const wasFiltering = inputRef.current ? inputRef.current.value.trim() !== "" : false;
      if (!wasFiltering) {
        return;
      }
      if (store.state.inputInsidePopup) {
        setInputValue("", createChangeEventDetails(inputClear, eventDetails.event));
      } else {
        setOpen(false, eventDetails);
      }
    } else {
      setSelectedValue(itemValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setOpen(false, eventDetails);
    }
  });
  const requestSubmit = useStableCallback(() => {
    var _a2, _b;
    if (!store.state.submitOnItemClick) {
      return;
    }
    const formElement = ((_a2 = validation.inputRef.current) == null ? void 0 : _a2.form) ?? ((_b = store.state.inputElement) == null ? void 0 : _b.form);
    if (formElement && typeof formElement.requestSubmit === "function") {
      formElement.requestSubmit();
    }
  });
  const handleUnmount = useStableCallback(() => {
    setMounted(false);
    onOpenChangeComplete == null ? void 0 : onOpenChangeComplete(false);
    setQueryChangedAfterOpen(false);
    setCloseQuery(null);
    if (selectionMode === "none") {
      setIndices({
        activeIndex: null,
        selectedIndex: null
      });
    } else {
      setIndices({
        activeIndex: null
      });
    }
    if (multiple && inputRef.current && inputRef.current.value !== "" && !hadInputClearRef.current) {
      setInputValue("", createChangeEventDetails(inputClear));
    }
    if (single) {
      if (store.state.inputInsidePopup) {
        if (inputRef.current && inputRef.current.value !== "") {
          setInputValue("", createChangeEventDetails(inputClear));
        }
      } else {
        const stringVal = stringifyAsLabel(selectedValue, itemToStringLabel);
        if (inputRef.current && inputRef.current.value !== stringVal) {
          const reason = stringVal === "" ? inputClear : none;
          setInputValue(stringVal, createChangeEventDetails(reason));
        }
      }
    }
  });
  const resolvedPopupRef = T(() => {
    if (inline && positionerElement) {
      return {
        current: positionerElement.closest('[role="dialog"]')
      };
    }
    return popupRef;
  }, [inline, positionerElement]);
  useOpenChangeComplete({
    enabled: !props.actionsRef,
    open,
    ref: resolvedPopupRef,
    onComplete() {
      if (!open) {
        handleUnmount();
      }
    }
  });
  F(props.actionsRef, () => ({
    unmount: handleUnmount
  }), [handleUnmount]);
  useIsoLayoutEffect(function syncSelectedIndex() {
    if (open || selectionMode === "none") {
      return;
    }
    const registry = items ? flatItems : allValuesRef.current;
    if (multiple) {
      const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
      const lastValue = currentValue[currentValue.length - 1];
      const lastIndex = findItemIndex(registry, lastValue, isItemEqualToValue);
      setIndices({
        selectedIndex: lastIndex === -1 ? null : lastIndex
      });
    } else {
      const index = findItemIndex(registry, selectedValue, isItemEqualToValue);
      setIndices({
        selectedIndex: index === -1 ? null : index
      });
    }
  }, [open, selectedValue, items, selectionMode, flatItems, multiple, isItemEqualToValue, setIndices]);
  useIsoLayoutEffect(() => {
    if (items) {
      valuesRef.current = flatFilteredItems;
      listRef.current.length = flatFilteredItems.length;
    }
  }, [items, flatFilteredItems]);
  useIsoLayoutEffect(() => {
    const pendingHighlight = pendingQueryHighlightRef.current;
    if (pendingHighlight) {
      if (pendingHighlight.hasQuery) {
        if (autoHighlightMode) {
          store.set("activeIndex", 0);
        }
      } else if (autoHighlightMode === "always") {
        store.set("activeIndex", 0);
      }
      pendingQueryHighlightRef.current = null;
    }
    if (!open && !inline) {
      return;
    }
    const shouldUseFlatFilteredItems = hasItems || hasFilteredItemsProp;
    const candidateItems = shouldUseFlatFilteredItems ? flatFilteredItems : valuesRef.current;
    const storeActiveIndex = store.state.activeIndex;
    if (storeActiveIndex == null) {
      if (autoHighlightMode === "always" && candidateItems.length > 0) {
        store.set("activeIndex", 0);
        return;
      }
      if (lastHighlightRef.current !== INITIAL_LAST_HIGHLIGHT) {
        lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
        store.state.onItemHighlighted(void 0, createGenericEventDetails(none, void 0, {
          index: -1
        }));
      }
      return;
    }
    if (storeActiveIndex >= candidateItems.length) {
      if (lastHighlightRef.current !== INITIAL_LAST_HIGHLIGHT) {
        lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
        store.state.onItemHighlighted(void 0, createGenericEventDetails(none, void 0, {
          index: -1
        }));
      }
      store.set("activeIndex", null);
      return;
    }
    const itemValue = candidateItems[storeActiveIndex];
    const previouslyHighlightedItemValue = lastHighlightRef.current.value;
    const isSameItem = previouslyHighlightedItemValue !== NO_ACTIVE_VALUE && compareItemEquality(itemValue, previouslyHighlightedItemValue, store.state.isItemEqualToValue);
    if (lastHighlightRef.current.index !== storeActiveIndex || !isSameItem) {
      lastHighlightRef.current = {
        value: itemValue,
        index: storeActiveIndex
      };
      store.state.onItemHighlighted(itemValue, createGenericEventDetails(none, void 0, {
        index: storeActiveIndex
      }));
    }
  }, [activeIndex, autoHighlightMode, hasFilteredItemsProp, hasItems, flatFilteredItems, inline, open, store]);
  useIsoLayoutEffect(() => {
    if (selectionMode === "none") {
      setFilled(String(inputValue) !== "");
      return;
    }
    setFilled(multiple ? Array.isArray(selectedValue) && selectedValue.length > 0 : selectedValue != null);
  }, [setFilled, selectionMode, inputValue, selectedValue, multiple]);
  y(() => {
    if (hasItems && autoHighlightMode && flatFilteredItems.length === 0) {
      setIndices({
        activeIndex: null
      });
    }
  }, [hasItems, autoHighlightMode, flatFilteredItems.length, setIndices]);
  function isSelectedValueDirty(value) {
    const initialValue = validityData.initialValue;
    if (Array.isArray(value) && Array.isArray(initialValue)) {
      return !areArraysEqual(value, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, isItemEqualToValue));
    }
    return value !== initialValue;
  }
  useValueChanged(query, () => {
    if (!open || query === "" || query === String(initialDefaultInputValue)) {
      return;
    }
    setQueryChangedAfterOpen(true);
  });
  useValueChanged(selectedValue, () => {
    if (selectionMode === "none") {
      return;
    }
    clearErrors(name);
    setDirty(isSelectedValueDirty(selectedValue));
    validation.change(selectedValue);
    if (single && !hasInputValue && !inputInsidePopup) {
      const nextInputValue = stringifyAsLabel(selectedValue, itemToStringLabel);
      if (inputValue !== nextInputValue) {
        setInputValue(nextInputValue, createChangeEventDetails(none));
      }
    }
  });
  useValueChanged(inputValue, () => {
    if (selectionMode !== "none") {
      return;
    }
    clearErrors(name);
    setDirty(inputValue !== validityData.initialValue);
    validation.change(inputValue);
  });
  useValueChanged(items, () => {
    if (!single || hasInputValue || inputInsidePopup || queryChangedAfterOpen) {
      return;
    }
    const nextInputValue = stringifyAsLabel(selectedValue, itemToStringLabel);
    if (inputValue !== nextInputValue) {
      setInputValue(nextInputValue, createChangeEventDetails(none));
    }
  });
  const floatingRootContext = useFloatingRootContext({
    open: inline ? true : open,
    onOpenChange: setOpen,
    elements: {
      reference: inputInsidePopup ? triggerElement : inputElement,
      floating: positionerElement
    }
  });
  let ariaHasPopup;
  let ariaExpanded;
  if (!inline) {
    ariaHasPopup = grid ? "grid" : "listbox";
    ariaExpanded = open ? "true" : "false";
  }
  const role = T(() => {
    const isPlainInput = (inputElement == null ? void 0 : inputElement.tagName) === "INPUT";
    const shouldTreatAsInput = inputElement == null || isPlainInput;
    const shouldApplyAria = shouldTreatAsInput || open;
    const reference = shouldTreatAsInput ? {
      autoComplete: "off",
      spellCheck: "false",
      autoCorrect: "off",
      autoCapitalize: "none"
    } : {};
    if (shouldApplyAria) {
      reference.role = "combobox";
      reference["aria-expanded"] = ariaExpanded;
      reference["aria-haspopup"] = ariaHasPopup;
      reference["aria-controls"] = open ? listElement == null ? void 0 : listElement.id : void 0;
      reference["aria-autocomplete"] = autoComplete;
    }
    return {
      reference,
      floating: {
        role: "presentation"
      }
    };
  }, [inputElement, open, ariaExpanded, ariaHasPopup, listElement == null ? void 0 : listElement.id, autoComplete]);
  const click = useClick(floatingRootContext, {
    enabled: !readOnly && !disabled && openOnInputClick,
    event: "mousedown-only",
    toggle: false,
    // Apply a small delay for touch to let mobile viewport/keyboard positioning settle.
    // This avoids top-bottom flip flickers if the preferred position is "top" when first tapping.
    touchOpenDelay: inputInsidePopup ? 0 : 100,
    reason: inputPress
  });
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !readOnly && !disabled && !inline,
    outsidePressEvent: {
      mouse: "sloppy",
      // The visual viewport (affected by the mobile software keyboard) can be
      // somewhat small. The user may want to scroll the screen to see more of
      // the popup.
      touch: "intentional"
    },
    // Without a popup, let the Escape key bubble the event up to other popups' handlers.
    bubbles: inline ? true : void 0,
    outsidePress(event) {
      const target = getTarget(event);
      return !contains(triggerElement, target) && !contains(clearRef.current, target) && !contains(chipsContainerRef.current, target) && !contains(inputGroupElement, target);
    }
  });
  const listNavigation2 = useListNavigation(floatingRootContext, {
    enabled: !readOnly && !disabled,
    id,
    listRef,
    activeIndex,
    selectedIndex,
    virtual: true,
    loopFocus,
    allowEscape: loopFocus && !autoHighlightMode,
    focusItemOnOpen: queryChangedAfterOpen || selectionMode === "none" && !autoHighlightMode ? false : "auto",
    focusItemOnHover: highlightItemOnHover,
    resetOnPointerLeave: !keepHighlight,
    orientation: grid ? "horizontal" : void 0,
    rtl: direction === "rtl",
    disabledIndices: EMPTY_ARRAY,
    grid: grid ? gridNavigation : void 0,
    onNavigate(nextActiveIndex, event) {
      if (!event && !open || transitionStatus === "ending") {
        return;
      }
      if (!event) {
        setIndices({
          activeIndex: nextActiveIndex
        });
      } else {
        setIndices({
          activeIndex: nextActiveIndex,
          type: keyboardActiveRef.current ? "keyboard" : "pointer"
        });
      }
    }
  });
  const inputProps = T(() => mergeProps(listNavigation2.reference, {
    onKeyDown(event) {
      if (grid && store.state.activeIndex == null && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventBaseUIHandler();
      }
    }
  }, dismiss.reference, click.reference, role.reference), [listNavigation2.reference, dismiss.reference, click.reference, role.reference, grid, store]);
  const popupProps = T(() => mergeProps(FOCUSABLE_POPUP_PROPS, listNavigation2.floating, dismiss.floating, role.floating), [listNavigation2.floating, dismiss.floating, role.floating]);
  const itemProps = T(() => {
    const listNavigationItemProps = listNavigation2.item;
    if (!listNavigationItemProps) {
      return EMPTY_OBJECT;
    }
    return {
      ...listNavigationItemProps,
      onFocus: void 0
    };
  }, [listNavigation2.item]);
  useOnFirstRender(() => {
    store.update({
      inline: inlineProp,
      popupProps,
      inputProps,
      triggerProps,
      itemProps,
      setOpen,
      setInputValue,
      setSelectedValue,
      setIndices,
      onItemHighlighted,
      handleSelection,
      forceMount,
      requestSubmit
    });
  });
  useIsoLayoutEffect(() => {
    store.update({
      id,
      selectedValue,
      open,
      mounted,
      transitionStatus,
      items,
      inline: inlineProp,
      popupProps,
      inputProps,
      triggerProps,
      openMethod,
      itemProps,
      selectionMode,
      name,
      form,
      disabled,
      readOnly,
      required,
      grid,
      isGrouped,
      virtualized,
      onOpenChangeComplete,
      openOnInputClick,
      itemToStringLabel,
      modal,
      autoHighlight: autoHighlightMode,
      isItemEqualToValue,
      submitOnItemClick,
      hasInputValue,
      requestSubmit,
      inputOwnsFormValue: selectionMode === "none" && (inlineProp || !store.state.inputInsidePopup)
    });
  }, [store, id, selectedValue, open, mounted, transitionStatus, items, popupProps, inputProps, itemProps, openMethod, triggerProps, selectionMode, name, disabled, readOnly, required, validation, grid, isGrouped, virtualized, onOpenChangeComplete, openOnInputClick, itemToStringLabel, modal, isItemEqualToValue, submitOnItemClick, hasInputValue, inlineProp, requestSubmit, autoHighlightMode, form]);
  const hiddenInputRef = useMergedRefs(inputRefProp, validation.inputRef);
  const itemsContextValue = T(() => ({
    query,
    hasItems,
    filteredItems,
    flatFilteredItems
  }), [query, hasItems, filteredItems, flatFilteredItems]);
  const serializedValue = T(() => {
    if (Array.isArray(fieldRawValue)) {
      return "";
    }
    return stringifyAsValue(fieldRawValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue]);
  const hasMultipleSelection = multiple && Array.isArray(selectedValue) && selectedValue.length > 0;
  const hiddenInputName = multiple || selectionMode === "none" && inputOwnsFormValue ? void 0 : name;
  const hiddenInputs = T(() => {
    if (!multiple || !Array.isArray(selectedValue) || !name) {
      return null;
    }
    return selectedValue.map((value) => {
      const currentSerializedValue = stringifyAsValue(value, itemToStringValue);
      return /* @__PURE__ */ u("input", {
        type: "hidden",
        form,
        name,
        value: currentSerializedValue,
        disabled
      }, currentSerializedValue);
    });
  }, [multiple, selectedValue, form, name, itemToStringValue, disabled]);
  const children = /* @__PURE__ */ u(S, {
    children: [props.children, /* @__PURE__ */ u("input", {
      ...validation.getValidationProps(disabled, {
        // Move focus when the hidden input is focused.
        onFocus() {
          var _a2;
          if (inputInsidePopup) {
            triggerElement == null ? void 0 : triggerElement.focus();
            return;
          }
          (_a2 = inputRef.current || triggerElement) == null ? void 0 : _a2.focus();
        },
        // Handle browser autofill.
        onChange(event) {
          if (event.nativeEvent.defaultPrevented || disabled || readOnly) {
            return;
          }
          const nextValue = event.currentTarget.value;
          const nextValueLower = nextValue.toLowerCase();
          const details = createChangeEventDetails(none, event.nativeEvent);
          const findSerializedMatchIndex = () => valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
          function handleChange() {
            if (multiple) {
              return;
            }
            if (selectionMode === "none") {
              setInputValue(nextValue, details);
              return;
            }
            let matchingIndex = findSerializedMatchIndex();
            if (matchingIndex === -1) {
              matchingIndex = valuesRef.current.findIndex((_2, index) => {
                const renderedLabel = labelsRef.current[index];
                return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
              });
            }
            const matchingValue = matchingIndex === -1 ? void 0 : valuesRef.current[matchingIndex];
            if (matchingValue != null) {
              setSelectedValue == null ? void 0 : setSelectedValue(matchingValue, details);
            }
          }
          if (single) {
            forceMount();
            if (items && findSerializedMatchIndex() === -1) {
              store.set("forceMounted", true);
            }
          }
          queueMicrotask(handleChange);
        }
      }),
      id: id && hiddenInputName == null ? `${id}-hidden-input` : void 0,
      form,
      name: hiddenInputName,
      autoComplete: formAutoComplete,
      disabled,
      required: required && !hasMultipleSelection,
      readOnly,
      value: serializedValue,
      ref: hiddenInputRef,
      style: hiddenInputName ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      "aria-hidden": true,
      suppressHydrationWarning: true
    }), hiddenInputs]
  });
  return /* @__PURE__ */ u(ComboboxRootContext.Provider, {
    value: store,
    children: /* @__PURE__ */ u(ComboboxFloatingContext.Provider, {
      value: floatingRootContext,
      children: /* @__PURE__ */ u(ComboboxHasItemsContext.Provider, {
        value: hasItems,
        children: /* @__PURE__ */ u(ComboboxDerivedItemsContext.Provider, {
          value: itemsContextValue,
          children: /* @__PURE__ */ u(ComboboxInputValueContext.Provider, {
            value: inputValue,
            children
          })
        })
      })
    })
  });
}
function ComboboxRoot(props) {
  const {
    multiple = false,
    defaultValue,
    value,
    onValueChange,
    autoComplete,
    ...other
  } = props;
  return /* @__PURE__ */ u(AriaCombobox, {
    ...other,
    selectionMode: multiple ? "multiple" : "single",
    selectedValue: value,
    defaultSelectedValue: defaultValue,
    onSelectedValueChange: onValueChange,
    formAutoComplete: autoComplete
  });
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
  return fieldLabelId ?? localLabelId;
}
let CommonPopupDataAttributes = (function(CommonPopupDataAttributes2) {
  CommonPopupDataAttributes2["open"] = "data-open";
  CommonPopupDataAttributes2["closed"] = "data-closed";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  CommonPopupDataAttributes2["anchorHidden"] = "data-anchor-hidden";
  CommonPopupDataAttributes2["side"] = "data-side";
  CommonPopupDataAttributes2["align"] = "data-align";
  return CommonPopupDataAttributes2;
})({});
let CommonTriggerDataAttributes = /* @__PURE__ */ (function(CommonTriggerDataAttributes2) {
  CommonTriggerDataAttributes2["popupOpen"] = "data-popup-open";
  CommonTriggerDataAttributes2["pressed"] = "data-pressed";
  return CommonTriggerDataAttributes2;
})({});
const PRESSABLE_TRIGGER_HOOK = {
  [CommonTriggerDataAttributes.popupOpen]: "",
  [CommonTriggerDataAttributes.pressed]: ""
};
const POPUP_OPEN_HOOK = {
  [CommonPopupDataAttributes.open]: ""
};
const POPUP_CLOSED_HOOK = {
  [CommonPopupDataAttributes.closed]: ""
};
const ANCHOR_HIDDEN_HOOK = {
  [CommonPopupDataAttributes.anchorHidden]: ""
};
const pressableTriggerOpenStateMapping = {
  open(value) {
    if (value) {
      return PRESSABLE_TRIGGER_HOOK;
    }
    return null;
  }
};
const popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};
const triggerStateAttributesMapping = {
  ...pressableTriggerOpenStateMapping,
  ...fieldValidityMapping,
  popupSide: (side) => side ? {
    "data-popup-side": side
  } : null,
  listEmpty: (empty) => empty ? {
    "data-list-empty": ""
  } : null
};
const ComboboxChipsContext = /* @__PURE__ */ X(void 0);
function useComboboxChipsContext() {
  return x(ComboboxChipsContext);
}
const ComboboxPositionerContext = /* @__PURE__ */ X(void 0);
function useComboboxPositionerContext(optional) {
  const context = x(ComboboxPositionerContext);
  if (context === void 0 && !optional) {
    throw new Error(formatErrorMessage(21));
  }
  return context;
}
const CompositeRootContext = /* @__PURE__ */ X(void 0);
function useCompositeRootContext(optional = false) {
  const context = x(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(formatErrorMessage(16));
  }
  return context;
}
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = T(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
      additionalProps["aria-disabled"] = disabled;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled;
    }
    return additionalProps;
  }, [composite, disabled, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = A(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  const updateDisabled = q(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = q((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    return mergeProps({
      onClick(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnClick == null ? void 0 : externalOnClick(event);
      },
      onMouseDown(event) {
        if (!disabled) {
          externalOnMouseDown == null ? void 0 : externalOnMouseDown(event);
        }
      },
      onKeyDown(event) {
        if (disabled) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyDown == null ? void 0 : externalOnKeyDown(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = (role == null ? void 0 : role.startsWith("menuitem")) || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (isLink || isNativeButton && isButton) {
            currentTarget.click();
            event.preventBaseUIHandler();
          } else if (shouldClick) {
            externalOnClick == null ? void 0 : externalOnClick(event);
            event.preventBaseUIHandler();
          }
          return;
        }
        if (shouldClick) {
          if (!isNativeButton && (isSpaceKey || isEnterKey)) {
            event.preventDefault();
          }
          if (!isNativeButton && isEnterKey) {
            externalOnClick == null ? void 0 : externalOnClick(event);
          }
        }
      },
      onKeyUp(event) {
        if (disabled) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyUp == null ? void 0 : externalOnKeyUp(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") {
          externalOnClick == null ? void 0 : externalOnClick(event);
        }
      },
      onPointerDown(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown == null ? void 0 : externalOnPointerDown(event);
      }
    }, isNativeButton ? {
      type: "button"
    } : {
      role: "button"
    }, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return Boolean((elem == null ? void 0 : elem.tagName) === "A" && (elem == null ? void 0 : elem.href));
}
const ComboboxInternalDismissButton = /* @__PURE__ */ D(function ComboboxInternalDismissButton2(_2, forwardedRef) {
  const store = useComboboxRootContext();
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: false
  });
  const mergedRef = useMergedRefs(forwardedRef, buttonRef);
  function handleDismiss(event) {
    store.state.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent, event.currentTarget));
  }
  const dismissProps = getButtonProps({
    onClick: handleDismiss
  });
  return /* @__PURE__ */ u("span", {
    ref: mergedRef,
    ...dismissProps,
    "aria-label": "Dismiss",
    tabIndex: void 0,
    style: visuallyHiddenInput
  });
});
const ComboboxInput = /* @__PURE__ */ D(function ComboboxInput2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const comboboxChipsContext = useComboboxChipsContext();
  const positioning = useComboboxPositionerContext(true);
  const hasPositionerParent = Boolean(positioning);
  const store = useComboboxRootContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const inputValue = useComboboxInputValueContext();
  const direction = useDirection();
  const required = useStore(store, selectors.required);
  const comboboxDisabled = useStore(store, selectors.disabled);
  const readOnly = useStore(store, selectors.readOnly);
  const name = useStore(store, selectors.name);
  const form = useStore(store, selectors.form);
  const selectionMode = useStore(store, selectors.selectionMode);
  const autoHighlightMode = useStore(store, selectors.autoHighlight);
  const inputProps = useStore(store, selectors.inputProps);
  const triggerProps = useStore(store, selectors.triggerProps);
  const open = useStore(store, selectors.open);
  const mounted = useStore(store, selectors.mounted);
  const selectedValue = useStore(store, selectors.selectedValue);
  const popupSideValue = useStore(store, selectors.popupSide);
  const positionerElement = useStore(store, selectors.positionerElement);
  const rootId = useStore(store, selectors.id);
  const inline = useStore(store, selectors.inline);
  const modal = useStore(store, selectors.modal);
  const autoHighlightEnabled = Boolean(autoHighlightMode);
  const popupSide = mounted && positionerElement ? popupSideValue : null;
  const disabled = fieldDisabled || comboboxDisabled || disabledProp;
  const listEmpty = filteredItems.length === 0;
  const isInsidePopup = hasPositionerParent || inline;
  const focusManagerModal = !isInsidePopup || modal;
  const id = useBaseUiId(idProp ?? (!isInsidePopup ? rootId : void 0));
  const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, void 0);
  const fieldStateForInput = hasPositionerParent ? DEFAULT_FIELD_STATE_ATTRIBUTES : fieldState;
  const [composingValue, setComposingValue] = d(null);
  const isComposingRef = A(false);
  const lastActiveIndexRef = A(null);
  const shouldRestoreActiveIndexRef = A(false);
  const inputOwnsFormValue = selectionMode === "none" && !hasPositionerParent;
  const setInputElement = useStableCallback((element2) => {
    const nextIsInsidePopup = hasPositionerParent || store.state.inline;
    if (nextIsInsidePopup && !store.state.hasInputValue) {
      store.state.setInputValue("", createChangeEventDetails(none));
    }
    store.update({
      inputElement: element2,
      inputInsidePopup: nextIsInsidePopup,
      inputOwnsFormValue
    });
  });
  const validationProps = hasPositionerParent || !validation ? elementProps : validation.getValidationProps(disabled, elementProps);
  const state = {
    ...fieldStateForInput,
    open,
    disabled,
    readOnly,
    popupSide,
    listEmpty
  };
  function handleKeyDown(event) {
    if (!comboboxChipsContext) {
      return void 0;
    }
    let nextIndex;
    const {
      highlightedChipIndex
    } = comboboxChipsContext;
    const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
    const isRtl = direction === "rtl";
    const previousChipKey = isRtl ? "ArrowRight" : "ArrowLeft";
    const nextChipKey = isRtl ? "ArrowLeft" : "ArrowRight";
    if (highlightedChipIndex !== void 0) {
      if (event.key === previousChipKey) {
        event.preventDefault();
        if (highlightedChipIndex > 0) {
          nextIndex = highlightedChipIndex - 1;
        } else {
          nextIndex = void 0;
        }
      } else if (event.key === nextChipKey) {
        event.preventDefault();
        if (highlightedChipIndex < renderedChipsCount - 1) {
          nextIndex = highlightedChipIndex + 1;
        } else {
          nextIndex = void 0;
        }
      } else if (event.key === "Backspace" || event.key === "Delete") {
        event.preventDefault();
        const computedNextIndex = highlightedChipIndex >= selectedValue.length - 1 ? selectedValue.length - 2 : highlightedChipIndex;
        nextIndex = computedNextIndex >= 0 ? computedNextIndex : void 0;
        store.state.setIndices({
          activeIndex: null,
          selectedIndex: null,
          type: "keyboard"
        });
      }
      return nextIndex;
    }
    if (event.key === previousChipKey && (event.currentTarget.selectionStart ?? 0) === 0 && selectedValue.length > 0) {
      event.preventDefault();
      nextIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : void 0;
    } else if (event.key === "Backspace" && event.currentTarget.value === "" && selectedValue.length > 0) {
      store.state.setIndices({
        activeIndex: null,
        selectedIndex: null,
        type: "keyboard"
      });
      event.preventDefault();
    }
    return nextIndex;
  }
  const element = useRenderElement("input", componentProps, {
    state,
    ref: [forwardedRef, store.state.inputRef, setInputElement],
    props: [inputProps, triggerProps, {
      type: "text",
      value: componentProps.value ?? composingValue ?? inputValue,
      "aria-readonly": readOnly || void 0,
      "aria-required": required || void 0,
      "aria-labelledby": ariaLabelledBy,
      disabled,
      readOnly,
      required: selectionMode === "none" ? required : void 0,
      form,
      ...inputOwnsFormValue && name && {
        name
      },
      id,
      onFocus() {
        setFocused(true);
        if (!inline || !shouldRestoreActiveIndexRef.current) {
          return;
        }
        shouldRestoreActiveIndexRef.current = false;
        const nextActiveIndex = lastActiveIndexRef.current;
        if (nextActiveIndex == null || // `valuesRef` can be sparse, so guard against restoring a removed slot.
        !Object.hasOwn(store.state.valuesRef.current, nextActiveIndex)) {
          return;
        }
        store.state.setIndices({
          activeIndex: nextActiveIndex
        });
      },
      onBlur() {
        setTouched(true);
        setFocused(false);
        const activeIndex = store.state.activeIndex;
        if (inline && activeIndex !== null && autoHighlightMode !== "always") {
          lastActiveIndexRef.current = activeIndex;
          shouldRestoreActiveIndexRef.current = true;
          store.state.setIndices({
            activeIndex: null
          });
        }
        if (validationMode === "onBlur") {
          const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
          validation.commit(valueToValidate);
        }
      },
      onCompositionStart(event) {
        if (android) {
          return;
        }
        isComposingRef.current = true;
        setComposingValue(event.currentTarget.value);
      },
      onCompositionEnd(event) {
        isComposingRef.current = false;
        const next = event.currentTarget.value;
        setComposingValue(null);
        store.state.setInputValue(next, createChangeEventDetails(inputChange, event.nativeEvent));
      },
      onChange(event) {
        const inputType = event.nativeEvent.inputType;
        const autofillLikeInput = !inputType || inputType === "insertReplacementText";
        const shouldOpenOnInput = isComposingRef.current || !autofillLikeInput;
        if (isComposingRef.current) {
          const nextVal = event.currentTarget.value;
          setComposingValue(nextVal);
          if (nextVal === "" && !store.state.openOnInputClick && !store.state.inputInsidePopup) {
            store.state.setOpen(false, createChangeEventDetails(inputClear, event.nativeEvent));
          }
          const trimmed2 = nextVal.trim();
          const shouldMaintainHighlight = autoHighlightEnabled && trimmed2 !== "";
          if (!readOnly && !disabled && trimmed2) {
            if (shouldOpenOnInput) {
              store.state.setOpen(true, createChangeEventDetails(inputChange, event.nativeEvent));
              if (!autoHighlightEnabled) {
                store.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
                });
              }
            }
          }
          if (open && store.state.activeIndex !== null && !shouldMaintainHighlight) {
            store.state.setIndices({
              activeIndex: null,
              selectedIndex: null,
              type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
            });
          }
          return;
        }
        const inputChangeDetails = createChangeEventDetails(inputChange, event.nativeEvent);
        store.state.setInputValue(event.currentTarget.value, inputChangeDetails);
        if (inputChangeDetails.isCanceled) {
          return;
        }
        const empty = event.currentTarget.value === "";
        const clearDetails = createChangeEventDetails(inputClear, event.nativeEvent);
        if (empty && !store.state.inputInsidePopup) {
          if (selectionMode === "single") {
            store.state.setSelectedValue(null, clearDetails);
          }
          if (!store.state.openOnInputClick) {
            store.state.setOpen(false, clearDetails);
          }
        }
        const trimmed = event.currentTarget.value.trim();
        if (!readOnly && !disabled && trimmed) {
          if (shouldOpenOnInput) {
            store.state.setOpen(true, createChangeEventDetails(inputChange, event.nativeEvent));
            if (!autoHighlightEnabled) {
              store.state.setIndices({
                activeIndex: null,
                selectedIndex: null,
                type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
              });
            }
          }
        }
        if (open && store.state.activeIndex !== null && !autoHighlightEnabled) {
          store.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
          });
        }
      },
      onKeyDown(event) {
        var _a2, _b;
        if (disabled || readOnly) {
          return;
        }
        if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
          return;
        }
        store.state.keyboardActiveRef.current = true;
        const input = event.currentTarget;
        const scrollAmount = input.scrollWidth - input.clientWidth;
        const isRTL = direction === "rtl";
        if (event.key === "Home") {
          stopEvent(event);
          const cursor = gecko && isRTL ? input.value.length : 0;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = 0;
          return;
        }
        if (event.key === "End") {
          stopEvent(event);
          const cursor = gecko && isRTL ? 0 : input.value.length;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = isRTL ? -scrollAmount : scrollAmount;
          return;
        }
        if (!mounted && event.key === "Escape") {
          const isClear = selectionMode === "multiple" && Array.isArray(selectedValue) ? selectedValue.length === 0 : selectedValue === null;
          const details = createChangeEventDetails(escapeKey, event.nativeEvent);
          const value = selectionMode === "multiple" ? [] : null;
          store.state.setInputValue("", details);
          store.state.setSelectedValue(value, details);
          if (!isClear && !store.state.inline && !details.isPropagationAllowed) {
            event.stopPropagation();
          }
          return;
        }
        if (comboboxChipsContext && event.key === "Backspace" && input.value === "" && comboboxChipsContext.highlightedChipIndex === void 0 && Array.isArray(selectedValue) && selectedValue.length > 0) {
          const renderedChipsCount = comboboxChipsContext.chipsRef.current.length;
          const removalIndex = renderedChipsCount > 0 ? renderedChipsCount - 1 : selectedValue.length - 1;
          const newValue = selectedValue.filter((_2, index) => index !== removalIndex);
          store.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
          });
          store.state.setSelectedValue(newValue, createChangeEventDetails(none, event.nativeEvent));
          return;
        }
        const hadHighlightedChip = (comboboxChipsContext == null ? void 0 : comboboxChipsContext.highlightedChipIndex) !== void 0;
        const nextIndex = handleKeyDown(event);
        comboboxChipsContext == null ? void 0 : comboboxChipsContext.setHighlightedChipIndex(nextIndex);
        if (nextIndex !== void 0) {
          (_a2 = comboboxChipsContext == null ? void 0 : comboboxChipsContext.chipsRef.current[nextIndex]) == null ? void 0 : _a2.focus();
        } else if (hadHighlightedChip) {
          (_b = store.state.inputRef.current) == null ? void 0 : _b.focus();
        }
        if (event.which === 229) {
          return;
        }
        if (event.key === "Enter" && open) {
          const activeIndex = store.state.activeIndex;
          const nativeEvent = event.nativeEvent;
          if (activeIndex === null) {
            if (inline) {
              return;
            }
            store.state.setOpen(false, createChangeEventDetails(none, nativeEvent));
            return;
          }
          stopEvent(event);
          const listItem = store.state.listRef.current[activeIndex];
          if (listItem) {
            store.state.selectionEventRef.current = nativeEvent;
            listItem.click();
            store.state.selectionEventRef.current = null;
          }
        }
      },
      onPointerMove() {
        store.state.keyboardActiveRef.current = false;
      },
      onPointerDown() {
        store.state.keyboardActiveRef.current = false;
      }
    }, validationProps],
    stateAttributesMapping: triggerStateAttributesMapping
  });
  const renderedInput = hasPositionerParent ? /* @__PURE__ */ u(FieldRootContext.Provider, {
    value: DEFAULT_FIELD_ROOT_CONTEXT,
    children: element
  }) : element;
  return /* @__PURE__ */ u(S, {
    children: [open && focusManagerModal && /* @__PURE__ */ u(ComboboxInternalDismissButton, {
      ref: store.state.startDismissRef
    }), renderedInput]
  });
});
const GroupCollectionContext = /* @__PURE__ */ X(null);
function useGroupCollectionContext() {
  return x(GroupCollectionContext);
}
function ComboboxCollection(props) {
  const {
    children
  } = props;
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const groupContext = useGroupCollectionContext();
  const itemsToRender = groupContext ? groupContext.items : filteredItems;
  if (!itemsToRender) {
    return null;
  }
  return /* @__PURE__ */ u(S, {
    children: itemsToRender.map(children)
  });
}
const CompositeListContext = /* @__PURE__ */ X({
  register: () => {
  },
  unregister: () => {
  },
  subscribeMapChange: () => {
    return () => {
    };
  },
  elementsRef: {
    current: []
  },
  nextIndexRef: {
    current: 0
  }
});
function useCompositeListContext() {
  return x(CompositeListContext);
}
function CompositeList(props) {
  const {
    children,
    elementsRef,
    labelsRef,
    onMapChange: onMapChangeProp
  } = props;
  const onMapChange = useStableCallback(onMapChangeProp);
  const nextIndexRef = A(0);
  const listeners = useRefWithInit(createListeners).current;
  const map = useRefWithInit(createMap).current;
  const [mapTick, setMapTick] = d(0);
  const lastTickRef = A(mapTick);
  const register = useStableCallback((node, metadata) => {
    map.set(node, metadata ?? null);
    lastTickRef.current += 1;
    setMapTick(lastTickRef.current);
  });
  const unregister = useStableCallback((node) => {
    map.delete(node);
    lastTickRef.current += 1;
    setMapTick(lastTickRef.current);
  });
  const sortedMap = T(() => {
    const newMap = /* @__PURE__ */ new Map();
    const sortedNodes = Array.from(map.keys()).filter((node) => node.isConnected).sort(sortByDocumentPosition);
    sortedNodes.forEach((node, index) => {
      const metadata = map.get(node) ?? {};
      newMap.set(node, {
        ...metadata,
        index
      });
    });
    return newMap;
  }, [map, mapTick]);
  useIsoLayoutEffect(() => {
    if (typeof MutationObserver !== "function" || sortedMap.size === 0) {
      return void 0;
    }
    const mutationObserver = new MutationObserver((entries) => {
      const diff = /* @__PURE__ */ new Set();
      const updateDiff = (node) => diff.has(node) ? diff.delete(node) : diff.add(node);
      entries.forEach((entry) => {
        entry.removedNodes.forEach(updateDiff);
        entry.addedNodes.forEach(updateDiff);
      });
      if (diff.size === 0) {
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
      }
    });
    sortedMap.forEach((_2, node) => {
      if (node.parentElement) {
        mutationObserver.observe(node.parentElement, {
          childList: true
        });
      }
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, [sortedMap]);
  useIsoLayoutEffect(() => {
    const shouldUpdateLengths = lastTickRef.current === mapTick;
    if (shouldUpdateLengths) {
      if (elementsRef.current.length !== sortedMap.size) {
        elementsRef.current.length = sortedMap.size;
      }
      if (labelsRef && labelsRef.current.length !== sortedMap.size) {
        labelsRef.current.length = sortedMap.size;
      }
      nextIndexRef.current = sortedMap.size;
    }
    onMapChange(sortedMap);
  }, [onMapChange, sortedMap, elementsRef, labelsRef, mapTick]);
  useIsoLayoutEffect(() => {
    return () => {
      elementsRef.current = [];
    };
  }, [elementsRef]);
  useIsoLayoutEffect(() => {
    return () => {
      if (labelsRef) {
        labelsRef.current = [];
      }
    };
  }, [labelsRef]);
  const subscribeMapChange = useStableCallback((fn) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  });
  useIsoLayoutEffect(() => {
    listeners.forEach((l) => l(sortedMap));
  }, [listeners, sortedMap]);
  const contextValue = T(() => ({
    register,
    unregister,
    subscribeMapChange,
    elementsRef,
    labelsRef,
    nextIndexRef
  }), [register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef]);
  return /* @__PURE__ */ u(CompositeListContext.Provider, {
    value: contextValue,
    children
  });
}
function createMap() {
  return /* @__PURE__ */ new Map();
}
function createListeners() {
  return /* @__PURE__ */ new Set();
}
function sortByDocumentPosition(a2, b) {
  const position = a2.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
const ComboboxList = /* @__PURE__ */ D(function ComboboxList2(componentProps, forwardedRef) {
  var _ComboboxCollection;
  const {
    render,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const floatingRootContext = useComboboxFloatingContext();
  const hasPositionerContext = Boolean(useComboboxPositionerContext(true));
  const {
    filteredItems,
    hasItems
  } = useComboboxDerivedItemsContext();
  const selectionMode = useStore(store, selectors.selectionMode);
  const grid = useStore(store, selectors.grid);
  const popupProps = useStore(store, selectors.popupProps);
  const virtualized = useStore(store, selectors.virtualized);
  const forceMounted = useStore(store, selectors.forceMounted);
  const multiple = selectionMode === "multiple";
  const empty = filteredItems.length === 0;
  const setPositionerElement = useStableCallback((element2) => {
    store.set("positionerElement", element2);
  });
  const setListElement = useStableCallback((element2) => {
    store.set("listElement", element2);
  });
  const resolvedChildren = T(() => {
    if (typeof children === "function") {
      return _ComboboxCollection || (_ComboboxCollection = /* @__PURE__ */ u(ComboboxCollection, {
        children
      }));
    }
    return children;
  }, [children]);
  const state = {
    empty
  };
  const floatingId = floatingRootContext.useState("floatingId");
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, setListElement, hasPositionerContext ? null : setPositionerElement],
    props: [popupProps, {
      children: resolvedChildren,
      tabIndex: -1,
      id: floatingId,
      role: grid ? "grid" : "listbox",
      "aria-multiselectable": multiple ? "true" : void 0,
      onKeyDown(event) {
        if (store.state.disabled || store.state.readOnly) {
          return;
        }
        if (event.key === "Enter") {
          const activeIndex = store.state.activeIndex;
          if (activeIndex == null) {
            return;
          }
          stopEvent(event);
          const nativeEvent = event.nativeEvent;
          const listItem = store.state.listRef.current[activeIndex];
          if (listItem) {
            store.state.selectionEventRef.current = nativeEvent;
            listItem.click();
            store.state.selectionEventRef.current = null;
          }
        }
      },
      onKeyDownCapture() {
        store.state.keyboardActiveRef.current = true;
      },
      onPointerMoveCapture() {
        store.state.keyboardActiveRef.current = false;
      }
    }, elementProps]
  });
  if (virtualized) {
    return element;
  }
  const labelsRef = hasItems && !forceMounted ? void 0 : store.state.labelsRef;
  return /* @__PURE__ */ u(CompositeList, {
    elementsRef: store.state.listRef,
    labelsRef,
    children: element
  });
});
const ComboboxPortalContext = /* @__PURE__ */ X(void 0);
function useComboboxPortalContext() {
  const context = x(ComboboxPortalContext);
  if (context === void 0) {
    throw new Error(formatErrorMessage(20));
  }
  return context;
}
const ComboboxPortal = /* @__PURE__ */ D(function ComboboxPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = useComboboxRootContext();
  const mounted = useStore(store, selectors.mounted);
  const forceMounted = useStore(store, selectors.forceMounted);
  const shouldRender = mounted || keepMounted || forceMounted;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ u(ComboboxPortalContext.Provider, {
    value: keepMounted,
    children: /* @__PURE__ */ u(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}
const baseArrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    var _a2, _b;
    const {
      x: x2,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0,
      offsetParent = "real"
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = offsetParent === "real" ? await ((_a2 = platform2.getOffsetParent) == null ? void 0 : _a2.call(platform2, element)) : elements.floating;
    let clientSize = elements.floating[clientProp] || rects.floating[length];
    if (!clientSize || !await ((_b = platform2.isElement) == null ? void 0 : _b.call(platform2, arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min, center, max);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min ? center - min : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const arrow = (options, deps) => ({
  ...baseArrow(options),
  options: [options, deps]
});
const nativeHideFn = hide$1().fn;
const hide = {
  name: "hide",
  async fn(state) {
    var _a2;
    const {
      width,
      height,
      x: x2,
      y: y2
    } = state.rects.reference;
    const anchorHidden = width === 0 && height === 0 && x2 === 0 && y2 === 0;
    const nativeHideResult = await nativeHideFn(state);
    return {
      data: {
        referenceHidden: ((_a2 = nativeHideResult.data) == null ? void 0 : _a2.referenceHidden) || anchorHidden
      }
    };
  }
};
const DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top"
};
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
  const logicalRight = isRtl ? "inline-start" : "inline-end";
  const logicalLeft = isRtl ? "inline-end" : "inline-start";
  return {
    top: "top",
    right: isLogicalSideParam ? logicalRight : "right",
    bottom: "bottom",
    left: isLogicalSideParam ? logicalLeft : "left"
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const {
    rects,
    placement
  } = state;
  const data = {
    side: getLogicalSide(sideParam, getSide(placement), isRtl),
    align: getAlignment(placement) || "center",
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height
    }
  };
  return data;
}
function useAnchorPositioning(params) {
  var _a2, _b;
  const {
    // Public parameters
    anchor,
    positionMethod = "absolute",
    side: sideParam = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    inline: inlineMiddleware,
    // Private parameters
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shiftCrossAxis = false,
    nodeId,
    adaptiveOrigin,
    lazyFlip = false,
    externalTree
  } = params;
  const [mountSide, setMountSide] = d(null);
  if (!mounted && mountSide !== null) {
    setMountSide(null);
  }
  const collisionAvoidanceSide = collisionAvoidance.side || "flip";
  const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
  const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
  const anchorFn = typeof anchor === "function" ? anchor : void 0;
  const anchorFnCallback = useStableCallback(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = useValueAsRef(anchor);
  const mountedRef = useValueAsRef(mounted);
  const direction = useDirection();
  const isRtl = direction === "rtl";
  const side = mountSide || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": isRtl ? "left" : "right",
    "inline-start": isRtl ? "right" : "left"
  }[sideParam];
  const placement = align === "center" ? side : `${side}-${align}`;
  let collisionPadding = collisionPaddingParam;
  const bias = 1;
  const biasTop = sideParam === "bottom" ? bias : 0;
  const biasBottom = sideParam === "top" ? bias : 0;
  const biasLeft = sideParam === "right" ? bias : 0;
  const biasRight = sideParam === "left" ? bias : 0;
  if (typeof collisionPadding === "number") {
    collisionPadding = {
      top: collisionPadding + biasTop,
      right: collisionPadding + biasRight,
      bottom: collisionPadding + biasBottom,
      left: collisionPadding + biasLeft
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: (collisionPadding.top || 0) + biasTop,
      right: (collisionPadding.right || 0) + biasRight,
      bottom: (collisionPadding.bottom || 0) + biasBottom,
      left: (collisionPadding.left || 0) + biasLeft
    };
  }
  const commonCollisionProps = {
    boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
    padding: collisionPadding
  };
  const arrowRef = A(null);
  const sideOffsetRef = useValueAsRef(sideOffset);
  const alignOffsetRef = useValueAsRef(alignOffset);
  const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
  const middleware = [];
  if (inlineMiddleware) {
    middleware.push(inlineMiddleware);
  }
  middleware.push(offset((state) => {
    const data = getOffsetData(state, sideParam, isRtl);
    const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
    const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
    return {
      mainAxis: sideAxis,
      crossAxis: alignAxis,
      alignmentAxis: alignAxis
    };
  }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam]));
  const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
  const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
  const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip({
    ...commonCollisionProps,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: collisionPadding.top + bias,
      right: collisionPadding.right + bias,
      bottom: collisionPadding.bottom + bias,
      left: collisionPadding.left + bias
    },
    mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
    crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
    fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
  });
  const shiftMiddleware = shiftDisabled ? null : shift((data) => {
    const html = ownerDocument(data.elements.floating).documentElement;
    return {
      ...commonCollisionProps,
      // Use the Layout Viewport to avoid shifting around when pinch-zooming
      // for context menus.
      rootBoundary: shiftCrossAxis ? {
        x: 0,
        y: 0,
        width: html.clientWidth,
        height: html.clientHeight
      } : void 0,
      mainAxis: collisionAvoidanceAlign !== "none",
      crossAxis: crossAxisShiftEnabled,
      limiter: sticky || shiftCrossAxis ? void 0 : limitShift((limitData) => {
        if (!arrowRef.current) {
          return {};
        }
        const {
          width,
          height
        } = arrowRef.current.getBoundingClientRect();
        const sideAxis = getSideAxis(getSide(limitData.placement));
        const arrowSize = sideAxis === "y" ? width : height;
        const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
        return {
          offset: arrowSize / 2 + offsetAmount / 2
        };
      })
    };
  }, [commonCollisionProps, sticky, shiftCrossAxis, collisionPadding, collisionAvoidanceAlign]);
  if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || align === "center") {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push(size({
    ...commonCollisionProps,
    apply({
      elements: {
        floating
      },
      availableWidth,
      availableHeight,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty("--available-width", `${availableWidth}px`);
      floatingStyle.setProperty("--available-height", `${availableHeight}px`);
      const dpr = getWindow(floating).devicePixelRatio || 1;
      const {
        x: x3,
        y: y2,
        width,
        height
      } = rects.reference;
      const anchorWidth = (Math.round((x3 + width) * dpr) - Math.round(x3 * dpr)) / dpr;
      const anchorHeight = (Math.round((y2 + height) * dpr) - Math.round(y2 * dpr)) / dpr;
      floatingStyle.setProperty("--anchor-width", `${anchorWidth}px`);
      floatingStyle.setProperty("--anchor-height", `${anchorHeight}px`);
    }
  }), arrow((state) => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
    padding: arrowPadding,
    offsetParent: "floating"
  }), [arrowPadding]), {
    name: "transformOrigin",
    fn(state) {
      var _a3, _b2, _c;
      const {
        elements: elements2,
        middlewareData: middlewareData2,
        placement: renderedPlacement2,
        rects,
        y: y2
      } = state;
      const currentRenderedSide = getSide(renderedPlacement2);
      const currentRenderedAxis = getSideAxis(currentRenderedSide);
      const arrowEl = arrowRef.current;
      const arrowX = ((_a3 = middlewareData2.arrow) == null ? void 0 : _a3.x) || 0;
      const arrowY = ((_b2 = middlewareData2.arrow) == null ? void 0 : _b2.y) || 0;
      const arrowWidth = (arrowEl == null ? void 0 : arrowEl.clientWidth) || 0;
      const arrowHeight = (arrowEl == null ? void 0 : arrowEl.clientHeight) || 0;
      const transformX = arrowX + arrowWidth / 2;
      const transformY = arrowY + arrowHeight / 2;
      const shiftY = Math.abs(((_c = middlewareData2.shift) == null ? void 0 : _c.y) || 0);
      const halfAnchorHeight = rects.reference.height / 2;
      const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      const isOverlappingAnchor = shiftY > sideOffsetValue;
      const adjacentTransformOrigin = {
        top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
        bottom: `${transformX}px ${-sideOffsetValue}px`,
        left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
        right: `${-sideOffsetValue}px ${transformY}px`
      }[currentRenderedSide];
      const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y2}px`;
      elements2.floating.style.setProperty("--transform-origin", crossAxisShiftEnabled && currentRenderedAxis === "y" && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
      return {};
    }
  }, hide, adaptiveOrigin);
  useIsoLayoutEffect(() => {
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = T(() => ({
    elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
    layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
  }), [disableAnchorTracking]);
  const {
    refs,
    elements,
    x: x2,
    y: y$1,
    middlewareData,
    update: update2,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles
  } = useFloating({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : void 0,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
    nodeId,
    externalTree
  });
  const {
    sideX,
    sideY
  } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
  const resolvedPosition = isPositioned ? positionMethod : "fixed";
  const floatingStyles = T(() => {
    const base = adaptiveOrigin ? {
      position: resolvedPosition,
      [sideX]: x2,
      [sideY]: y$1
    } : {
      position: resolvedPosition,
      ...originalFloatingStyles
    };
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [adaptiveOrigin, resolvedPosition, sideX, x2, sideY, y$1, originalFloatingStyles, isPositioned]);
  const registeredPositionReferenceRef = A(null);
  useIsoLayoutEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
    const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  y(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    if (typeof anchorValue === "function") {
      return;
    }
    if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  y(() => {
    if (keepMounted && mounted && elements.reference && elements.floating) {
      return autoUpdate(elements.reference, elements.floating, update2, autoUpdateOptions);
    }
    return void 0;
  }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden = Boolean((_a2 = middlewareData.hide) == null ? void 0 : _a2.referenceHidden);
  useIsoLayoutEffect(() => {
    if (lazyFlip && mounted && isPositioned) {
      setMountSide(renderedSide);
    }
  }, [lazyFlip, mounted, isPositioned, renderedSide]);
  const arrowStyles = T(() => {
    var _a3, _b2;
    return {
      position: "absolute",
      top: (_a3 = middlewareData.arrow) == null ? void 0 : _a3.y,
      left: (_b2 = middlewareData.arrow) == null ? void 0 : _b2.x
    };
  }, [middlewareData.arrow]);
  const arrowUncentered = ((_b = middlewareData.arrow) == null ? void 0 : _b.centerOffset) !== 0;
  return T(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden,
    refs,
    context,
    isPositioned,
    update: update2
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden, refs, context, isPositioned, update2]);
}
function isRef(param) {
  return param != null && "current" in param;
}
const InternalBackdrop = /* @__PURE__ */ D(function InternalBackdrop2(props, ref) {
  const {
    cutout,
    ...otherProps
  } = props;
  let clipPath;
  if (cutout) {
    const rect = cutout.getBoundingClientRect();
    clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
  }
  return /* @__PURE__ */ u("div", {
    ref,
    role: "presentation",
    "data-base-ui-inert": "",
    ...otherProps,
    style: {
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath
    }
  });
});
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}
function usePositioner(componentProps, state, {
  styles,
  transitionStatus,
  props,
  refs,
  hidden,
  inert = false
}) {
  const style = {
    ...styles
  };
  if (inert) {
    style.pointerEvents = "none";
  }
  return useRenderElement("div", componentProps, {
    state,
    ref: refs,
    props: [{
      role: "presentation",
      hidden,
      style
    }, getDisabledMountTransitionStyles(transitionStatus), props],
    stateAttributesMapping: popupStateMapping
  });
}
let originalHtmlStyles = {};
let originalBodyStyles = {};
let originalHtmlScrollBehavior = "";
function hasInsetScrollbars(referenceElement) {
  if (typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const win = getWindow(doc);
  return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
  const supported = typeof CSS !== "undefined" && CSS.supports && CSS.supports("scrollbar-gutter", "stable");
  if (!supported || typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const scrollContainer = isOverflowElement(html) ? html : body;
  const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
  const originalHtmlStyleGutter = html.style.scrollbarGutter;
  html.style.scrollbarGutter = "stable";
  scrollContainer.style.overflowY = "scroll";
  const before = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = "hidden";
  const after = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = originalScrollContainerOverflowY;
  html.style.scrollbarGutter = originalHtmlStyleGutter;
  return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const elementToLock = isOverflowElement(html) ? html : body;
  const originalElementToLockStyles = {
    overflowY: elementToLock.style.overflowY,
    overflowX: elementToLock.style.overflowX
  };
  Object.assign(elementToLock.style, {
    overflowY: "hidden",
    overflowX: "hidden"
  });
  return () => {
    Object.assign(elementToLock.style, originalElementToLockStyles);
  };
}
function preventScrollInsetScrollbars(referenceElement) {
  var _a2;
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const win = getWindow(html);
  let scrollTop = 0;
  let scrollLeft = 0;
  let updateGutterOnly = false;
  const resizeFrame = AnimationFrame.create();
  if (webkit && (((_a2 = win.visualViewport) == null ? void 0 : _a2.scale) ?? 1) !== 1) {
    return () => {
    };
  }
  function lockScroll() {
    const htmlStyles = win.getComputedStyle(html);
    const bodyStyles = win.getComputedStyle(body);
    const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || "";
    const hasBothEdges = htmlScrollbarGutterValue.includes("both-edges");
    const scrollbarGutterValue = hasBothEdges ? "stable both-edges" : "stable";
    scrollTop = html.scrollTop;
    scrollLeft = html.scrollLeft;
    originalHtmlStyles = {
      scrollbarGutter: html.style.scrollbarGutter,
      overflowY: html.style.overflowY,
      overflowX: html.style.overflowX
    };
    originalHtmlScrollBehavior = html.style.scrollBehavior;
    originalBodyStyles = {
      position: body.style.position,
      height: body.style.height,
      width: body.style.width,
      boxSizing: body.style.boxSizing,
      overflowY: body.style.overflowY,
      overflowX: body.style.overflowX,
      scrollBehavior: body.style.scrollBehavior
    };
    const isScrollableY = html.scrollHeight > html.clientHeight;
    const isScrollableX = html.scrollWidth > html.clientWidth;
    const hasConstantOverflowY = htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
    const hasConstantOverflowX = htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
    const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
    const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
    const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
    const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
    const elementToLock = isOverflowElement(html) ? html : body;
    updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
    if (updateGutterOnly) {
      html.style.scrollbarGutter = scrollbarGutterValue;
      elementToLock.style.overflowY = "hidden";
      elementToLock.style.overflowX = "hidden";
      return;
    }
    Object.assign(html.style, {
      scrollbarGutter: scrollbarGutterValue,
      overflowY: "hidden",
      overflowX: "hidden"
    });
    if (isScrollableY || hasConstantOverflowY) {
      html.style.overflowY = "scroll";
    }
    if (isScrollableX || hasConstantOverflowX) {
      html.style.overflowX = "scroll";
    }
    Object.assign(body.style, {
      position: "relative",
      height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : "100dvh",
      width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : "100vw",
      boxSizing: "border-box",
      overflow: "hidden",
      scrollBehavior: "unset"
    });
    body.scrollTop = scrollTop;
    body.scrollLeft = scrollLeft;
    html.setAttribute("data-base-ui-scroll-locked", "");
    html.style.scrollBehavior = "unset";
  }
  function cleanup() {
    Object.assign(html.style, originalHtmlStyles);
    Object.assign(body.style, originalBodyStyles);
    if (!updateGutterOnly) {
      html.scrollTop = scrollTop;
      html.scrollLeft = scrollLeft;
      html.removeAttribute("data-base-ui-scroll-locked");
      html.style.scrollBehavior = originalHtmlScrollBehavior;
    }
  }
  function handleResize() {
    cleanup();
    resizeFrame.request(lockScroll);
  }
  lockScroll();
  const unsubscribeResize = addEventListener(win, "resize", handleResize);
  return () => {
    resizeFrame.cancel();
    cleanup();
    if (typeof win.removeEventListener === "function") {
      unsubscribeResize();
    }
  };
}
class ScrollLocker {
  constructor() {
    __publicField(this, "lockCount", 0);
    __publicField(this, "restore", null);
    __publicField(this, "timeoutLock", Timeout.create());
    __publicField(this, "timeoutUnlock", Timeout.create());
    __publicField(this, "release", () => {
      this.lockCount -= 1;
      if (this.lockCount === 0 && this.restore) {
        this.timeoutUnlock.start(0, this.unlock);
      }
    });
    __publicField(this, "unlock", () => {
      var _a2;
      if (this.lockCount === 0 && this.restore) {
        (_a2 = this.restore) == null ? void 0 : _a2.call(this);
        this.restore = null;
      }
    });
  }
  acquire(referenceElement) {
    this.lockCount += 1;
    if (this.lockCount === 1 && this.restore === null) {
      this.timeoutLock.start(0, () => this.lock(referenceElement));
    }
    return this.release;
  }
  lock(referenceElement) {
    if (this.lockCount === 0 || this.restore !== null) {
      return;
    }
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const htmlOverflowY = getWindow(html).getComputedStyle(html).overflowY;
    if (htmlOverflowY === "hidden" || htmlOverflowY === "clip") {
      this.restore = NOOP;
      return;
    }
    const hasOverlayScrollbars = ios || !hasInsetScrollbars(referenceElement);
    this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
  }
}
const SCROLL_LOCKER = new ScrollLocker();
function useScrollLock(enabled = true, referenceElement = null) {
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return void 0;
    }
    return SCROLL_LOCKER.acquire(referenceElement);
  }, [enabled, referenceElement]);
}
const VIEWPORT_WIDTH_TOLERANCE_PX = 20;
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
  const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = d(false);
  useIsoLayoutEffect(() => {
    if (!enabled || !touchOpen || positionerElement == null) {
      setTouchOpenShouldLockScroll(false);
      return;
    }
    const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
    const popupWidth = positionerElement.offsetWidth;
    setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
  }, [enabled, touchOpen, positionerElement]);
  useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}
const ComboboxPositioner = /* @__PURE__ */ D(function ComboboxPositioner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    positionMethod = "absolute",
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE,
    style: styleProp,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const floatingRootContext = useComboboxFloatingContext();
  const keepMounted = useComboboxPortalContext();
  const modal = useStore(store, selectors.modal);
  const open = useStore(store, selectors.open);
  const mounted = useStore(store, selectors.mounted);
  const openMethod = useStore(store, selectors.openMethod);
  const positionerElement = useStore(store, selectors.positionerElement);
  const triggerElement = useStore(store, selectors.triggerElement);
  const inputElement = useStore(store, selectors.inputElement);
  const inputGroupElement = useStore(store, selectors.inputGroupElement);
  const inputInsidePopup = useStore(store, selectors.inputInsidePopup);
  const transitionStatus = useStore(store, selectors.transitionStatus);
  const empty = filteredItems.length === 0;
  const resolvedAnchor = anchor ?? (inputInsidePopup ? triggerElement : inputGroupElement ?? inputElement);
  const positioning = useAnchorPositioning({
    anchor: resolvedAnchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    collisionAvoidance,
    lazyFlip: true
  });
  useAnchoredPopupScrollLock(open && modal, openMethod === "touch", positionerElement, triggerElement);
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    empty
  };
  useIsoLayoutEffect(() => {
    store.set("popupSide", positioning.side);
  }, [store, positioning.side]);
  const setPositionerElement = useStableCallback((element2) => {
    store.set("positionerElement", element2);
  });
  const element = usePositioner(componentProps, state, {
    styles: positioning.positionerStyles,
    transitionStatus,
    props: elementProps,
    refs: [forwardedRef, setPositionerElement],
    hidden: !mounted,
    inert: !open
  });
  return /* @__PURE__ */ u(ComboboxPositionerContext.Provider, {
    value: positioning,
    children: [mounted && modal && /* @__PURE__ */ u(InternalBackdrop, {
      inert: inertValue(!open),
      cutout: inputGroupElement ?? inputElement ?? triggerElement
    }), element]
  });
});
const stateAttributesMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
const ComboboxPopup = /* @__PURE__ */ D(function ComboboxPopup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    initialFocus,
    finalFocus,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const positioning = useComboboxPositionerContext();
  const floatingRootContext = useComboboxFloatingContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const mounted = useStore(store, selectors.mounted);
  const open = useStore(store, selectors.open);
  const openMethod = useStore(store, selectors.openMethod);
  const transitionStatus = useStore(store, selectors.transitionStatus);
  const inputInsidePopup = useStore(store, selectors.inputInsidePopup);
  const inputElement = useStore(store, selectors.inputElement);
  const modal = useStore(store, selectors.modal);
  const rootId = useStore(store, selectors.id);
  const empty = filteredItems.length === 0;
  const popupId = elementProps.id ?? (inputInsidePopup ? getComboboxPopupId(rootId) : void 0);
  useIsoLayoutEffect(() => {
    var _a2;
    store.set("popupId", ((_a2 = store.state.popupRef.current) == null ? void 0 : _a2.id) || popupId);
    return () => {
      store.set("popupId", void 0);
    };
  }, [store, popupId]);
  useOpenChangeComplete({
    open,
    ref: store.state.popupRef,
    onComplete() {
      if (open) {
        store.state.onOpenChangeComplete(true);
      }
    }
  });
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    transitionStatus,
    empty
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.state.popupRef],
    props: [{
      id: popupId,
      role: inputInsidePopup ? "dialog" : "presentation",
      tabIndex: -1,
      onFocus(event) {
        var _a2;
        const target = getTarget(event.nativeEvent);
        if (openMethod !== "touch" && (contains(store.state.listElement, target) || target === event.currentTarget)) {
          (_a2 = store.state.inputRef.current) == null ? void 0 : _a2.focus();
        }
      }
    }, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping
  });
  const computedDefaultInitialFocus = inputInsidePopup ? (interactionType) => interactionType === "touch" ? store.state.popupRef.current : inputElement : false;
  const resolvedInitialFocus = initialFocus === void 0 ? computedDefaultInitialFocus : initialFocus;
  let resolvedFinalFocus;
  if (finalFocus != null) {
    resolvedFinalFocus = finalFocus;
  } else {
    resolvedFinalFocus = inputInsidePopup ? void 0 : false;
  }
  const focusManagerModal = !inputInsidePopup || modal;
  return /* @__PURE__ */ u(FloatingFocusManager, {
    context: floatingRootContext,
    disabled: !mounted,
    modal: focusManagerModal,
    openInteractionType: openMethod,
    initialFocus: resolvedInitialFocus,
    returnFocus: resolvedFinalFocus,
    getInsideElements: () => [store.state.startDismissRef.current, store.state.endDismissRef.current],
    children: /* @__PURE__ */ u(S, {
      children: [element, focusManagerModal && /* @__PURE__ */ u(ComboboxInternalDismissButton, {
        ref: store.state.endDismissRef
      })]
    })
  });
});
let IndexGuessBehavior = /* @__PURE__ */ (function(IndexGuessBehavior2) {
  IndexGuessBehavior2[IndexGuessBehavior2["None"] = 0] = "None";
  IndexGuessBehavior2[IndexGuessBehavior2["GuessFromOrder"] = 1] = "GuessFromOrder";
  return IndexGuessBehavior2;
})({});
function useCompositeListItem(params = {}) {
  const {
    label,
    metadata,
    textRef,
    indexGuessBehavior,
    index: externalIndex
  } = params;
  const {
    register,
    unregister,
    subscribeMapChange,
    elementsRef,
    labelsRef,
    nextIndexRef
  } = useCompositeListContext();
  const indexRef = A(-1);
  const [index, setIndex] = d(externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? () => {
    if (indexRef.current === -1) {
      const newIndex = nextIndexRef.current;
      nextIndexRef.current += 1;
      indexRef.current = newIndex;
    }
    return indexRef.current;
  } : -1));
  const componentRef = A(null);
  const ref = q((node) => {
    var _a2;
    componentRef.current = node;
    if (index !== -1 && node !== null) {
      elementsRef.current[index] = node;
      if (labelsRef) {
        const isLabelDefined = label !== void 0;
        labelsRef.current[index] = isLabelDefined ? label : ((_a2 = textRef == null ? void 0 : textRef.current) == null ? void 0 : _a2.textContent) ?? node.textContent;
      }
    }
  }, [index, elementsRef, labelsRef, label, textRef]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    const node = componentRef.current;
    if (node) {
      register(node, metadata);
      return () => {
        unregister(node);
      };
    }
    return void 0;
  }, [externalIndex, register, unregister, metadata]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    return subscribeMapChange((map) => {
      var _a2;
      const i2 = componentRef.current ? (_a2 = map.get(componentRef.current)) == null ? void 0 : _a2.index : null;
      if (i2 != null) {
        setIndex(i2);
      }
    });
  }, [externalIndex, subscribeMapChange, setIndex]);
  return {
    ref,
    index
  };
}
const ComboboxItemContext = /* @__PURE__ */ X(void 0);
const ComboboxRowContext = /* @__PURE__ */ X(false);
function useComboboxRowContext() {
  return x(ComboboxRowContext);
}
function ComboboxItemInner(props) {
  const {
    componentProps,
    forwardedRef,
    virtualized,
    indexFromFilter
  } = props;
  const {
    render,
    className,
    style,
    value: itemValue = null,
    index: indexProp,
    disabled = false,
    nativeButton = false,
    ...elementProps
  } = componentProps;
  const didPointerDownRef = A(false);
  const textRef = A(null);
  const listItem = useCompositeListItem({
    index: indexProp,
    textRef,
    indexGuessBehavior: IndexGuessBehavior.GuessFromOrder
  });
  const store = useComboboxRootContext();
  const isRow = useComboboxRowContext();
  const hasItems = useComboboxHasItemsContext();
  const open = useStore(store, selectors.open);
  const selectionMode = useStore(store, selectors.selectionMode);
  const readOnly = useStore(store, selectors.readOnly);
  const isItemEqualToValue = useStore(store, selectors.isItemEqualToValue);
  const selectable = selectionMode !== "none";
  const index = indexProp ?? (virtualized ? indexFromFilter ?? -1 : listItem.index);
  const hasRegistered = listItem.index !== -1;
  const rootId = useStore(store, selectors.id);
  const highlighted = useStore(store, selectors.isActive, index);
  const matchesSelectedValue = useStore(store, selectors.isSelected, itemValue);
  const itemProps = useStore(store, selectors.itemProps);
  const itemRef = A(null);
  const id = rootId != null && hasRegistered ? `${rootId}-${index}` : void 0;
  const selected = matchesSelectedValue && selectable;
  useIsoLayoutEffect(() => {
    const shouldRun = hasRegistered && (virtualized || indexProp != null);
    if (!shouldRun) {
      return void 0;
    }
    const list = store.state.listRef.current;
    list[index] = itemRef.current;
    return () => {
      delete list[index];
    };
  }, [hasRegistered, virtualized, index, indexProp, store]);
  useIsoLayoutEffect(() => {
    if (!hasRegistered || hasItems) {
      return void 0;
    }
    const visibleMap = store.state.valuesRef.current;
    visibleMap[index] = itemValue;
    if (selectionMode !== "none") {
      store.state.allValuesRef.current.push(itemValue);
    }
    return () => {
      delete visibleMap[index];
    };
  }, [hasRegistered, hasItems, index, itemValue, store, selectionMode]);
  useIsoLayoutEffect(() => {
    if (!open) {
      didPointerDownRef.current = false;
      return;
    }
    if (!hasRegistered || hasItems) {
      return;
    }
    const selectedValue = store.state.selectedValue;
    const lastSelectedValue = Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue;
    if (compareItemEquality(itemValue, lastSelectedValue, isItemEqualToValue)) {
      store.set("selectedIndex", index);
    }
  }, [hasRegistered, hasItems, open, store, index, itemValue, isItemEqualToValue]);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true
  });
  const state = {
    disabled,
    selected,
    highlighted
  };
  function commitSelection(nativeEvent) {
    function selectItem() {
      store.state.handleSelection(nativeEvent, itemValue);
    }
    if (store.state.submitOnItemClick) {
      bn(selectItem);
      store.state.requestSubmit();
    } else {
      selectItem();
    }
  }
  const defaultProps = {
    id,
    role: isRow ? "gridcell" : "option",
    "aria-selected": selectable ? selected : void 0,
    // Focusable items steal focus from the input upon mouseup.
    // Warn if the user renders a natively focusable element like `<button>`,
    // as it should be a `<div>` instead.
    tabIndex: void 0,
    onPointerDownCapture(event) {
      didPointerDownRef.current = true;
      event.preventDefault();
    },
    onMouseDown(event) {
      event.preventDefault();
    },
    onClick(event) {
      if (disabled || readOnly) {
        return;
      }
      commitSelection(event.nativeEvent);
    },
    onMouseUp(event) {
      const pointerStartedOnItem = didPointerDownRef.current;
      didPointerDownRef.current = false;
      if (disabled || readOnly || event.button !== 0 || pointerStartedOnItem || !highlighted) {
        return;
      }
      commitSelection(event.nativeEvent);
    }
  };
  const element = useRenderElement("div", componentProps, {
    ref: [buttonRef, forwardedRef, listItem.ref, itemRef],
    state,
    props: [itemProps, defaultProps, elementProps, getButtonProps]
  });
  const contextValue = T(() => ({
    selected,
    textRef
  }), [selected, textRef]);
  return /* @__PURE__ */ u(ComboboxItemContext.Provider, {
    value: contextValue,
    children: element
  });
}
function ComboboxItemVirtualizedIndex(props) {
  const {
    componentProps,
    forwardedRef
  } = props;
  const store = useComboboxRootContext();
  const isItemEqualToValue = useStore(store, selectors.isItemEqualToValue);
  const {
    flatFilteredItems
  } = useComboboxDerivedItemsContext();
  const indexFromFilter = findItemIndex(flatFilteredItems, componentProps.value ?? null, isItemEqualToValue);
  return /* @__PURE__ */ u(ComboboxItemInner, {
    componentProps,
    forwardedRef,
    virtualized: true,
    indexFromFilter
  });
}
const ComboboxItem = /* @__PURE__ */ N(/* @__PURE__ */ D(function ComboboxItem2(componentProps, forwardedRef) {
  const store = useComboboxRootContext();
  const virtualized = useStore(store, selectors.virtualized);
  if (virtualized && componentProps.index == null) {
    return /* @__PURE__ */ u(ComboboxItemVirtualizedIndex, {
      componentProps,
      forwardedRef
    });
  }
  return /* @__PURE__ */ u(ComboboxItemInner, {
    componentProps,
    forwardedRef,
    virtualized,
    indexFromFilter: void 0
  });
}));
const se = (e2) => {
  vl({ amount: e2, localQuotes: [], localSelectedQuote: null, quotesWarning: null, quotesErrors: null, isLoading: true });
  let { opts: t2 } = Al();
  _l(e2, t2);
}, le = async () => {
  let { error: e2, state: t2, onFailure: r2, onSuccess: o2 } = Al();
  bl(), Sl();
  let i2 = ((e3, t3) => t3 ? { type: "failure", error: t3 } : "provider-success" === e3.status ? { type: "success", value: { status: "confirmed" } } : "provider-confirming" === e3.status ? { type: "success", value: { status: "submitted" } } : { type: "failure", error: Error("User exited flow") })(t2, e2);
  "success" === i2.type ? await o2(i2.value) : r2(i2.error);
}, ce = async (e2, { environment: t2 }) => (await e2.fetchPrivyRoute(p, { query: { environment: t2 } })).data, de = (e2, t2, r2 = "us", o2) => {
  if ("eu" === r2) return ue(t2, o2);
  let i2 = (e3) => t2.includes(e3), n2 = i2("first_name") && i2("last_name"), a2 = i2("address_line_1") && i2("address_city") && i2("address_state") && i2("address_postal_code"), s2 = i2("dob"), l = i2("id_number");
  return "l0" === e2 ? n2 ? a2 ? null : "collect-address" : "collect-name" : n2 ? s2 ? l ? a2 ? null : "collect-address" : "collect-ssn" : "collect-dob" : "collect-name";
}, ue = (e2, t2) => {
  let r2 = (t3) => e2.includes(t3);
  if ("pending" !== t2 && "verified" !== t2 && "rejected" !== t2) {
    if (!r2("first_name") || !r2("last_name")) return "collect-name";
    if (!r2("dob")) return "collect-dob";
    if (!r2("nationalities")) return "collect-nationality";
    if (!r2("birth_city") || !r2("birth_country")) return "collect-birth-location";
    if (!r2("address_line_1")) return "collect-address";
  }
  return r2("identifiers") ? r2("attestation") ? "verified" !== t2 ? "verify-documents" : null : "eu-attestation" : "collect-identifiers";
}, me = (e2) => {
  let t2 = ["collect-name", "collect-dob", "collect-nationality", "collect-birth-location", "collect-address", "collect-identifiers", "eu-attestation", "verify-documents", "select-payment"], r2 = t2.indexOf(e2);
  return -1 === r2 ? "select-payment" : t2[r2 + 1] ?? "select-payment";
}, pe = (e2) => {
  var _a2;
  return (_a2 = e2 == null ? void 0 : e2.find(((e3) => "l2" === e3.tier))) == null ? void 0 : _a2.verification_status;
}, ye = (e2) => {
  var _a2, _b;
  return ((_b = (_a2 = e2 == null ? void 0 : e2.find(((e3) => "l2" === e3.tier && "rejected" === e3.verification_status))) == null ? void 0 : _a2.verification_errors) == null ? void 0 : _b.includes("user_has_reached_max_verification_attempts")) ?? false;
};
let he = (e2) => e2.replace(/[\s/-]/g, "").toUpperCase(), fe = (e2) => he(e2).split("").map(Number), ge = (e2, t2, r2) => Number(e2.slice(t2, r2)), ve = (e2, t2, r2) => e2 >= t2 && e2 <= r2, be = (e2) => ve(e2, 1, 12), Ce = (e2) => ve(e2, 1, 31), we = (e2) => Math.floor(e2 / 10) + e2 % 10, ke = (e2, t2, r2) => {
  let o2 = fe(e2);
  return r2(t2.reduce(((e3, t3, r3) => e3 + o2[r3] * t3), 0)) === o2[t2.length];
}, _e = (e2) => {
  let t2 = fe(e2), r2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1].reduce(((e3, r3, o3) => e3 + t2[o3] * r3), 0), o2 = r2 % 11;
  return 10 === o2 && 10 == (o2 = (r2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3].reduce(((e3, r3, o3) => e3 + t2[o3] * r3), 0)) % 11) && (o2 = 0), o2 === t2[10];
}, xe = (e2, t2) => {
  let r2 = fe(e2);
  return (10 - t2.reduce(((e3, t3, o2) => e3 + we(r2[o2] * t3)), 0) % 10) % 10 === r2[t2.length];
}, Se = { at_stn: (e2) => {
  let t2 = he(e2);
  return /^\d{9}$/.test(t2) && xe(t2, [1, 2, 1, 2, 1, 2, 1, 2]);
}, be_nrn: (e2) => {
  let t2 = he(e2);
  if (!/^\d{11}$/.test(t2) || !be(ge(t2, 2, 4)) || !Ce(ge(t2, 4, 6))) return false;
  let r2 = Number(t2.slice(0, 9)), o2 = ge(t2, 9, 11);
  return 97 - r2 % 97 === o2 || 97 - Number(`2${t2.slice(0, 9)}`) % 97 === o2;
}, bg_ucn: (e2) => {
  let t2 = he(e2), r2 = ge(t2, 2, 4);
  return /^\d{10}$/.test(t2) && (ve(r2, 1, 12) || ve(r2, 21, 32) || ve(r2, 41, 52)) && Ce(ge(t2, 4, 6)) && ke(t2, [2, 4, 8, 5, 10, 9, 7, 3, 6], ((e3) => e3 % 11 == 10 ? 0 : e3 % 11));
}, hr_oib: (e2) => /^\d{11}$/.test(he(e2)) && ((e3) => {
  let t2 = fe(e3), r2 = 10;
  for (let e4 = 0; e4 < 10; e4++) {
    let o3 = (t2[e4] + r2) % 10;
    0 === o3 && (o3 = 10), r2 = 2 * o3 % 11;
  }
  let o2 = 11 - r2;
  return 10 === o2 && (o2 = 0), o2 === t2[10];
})(he(e2)), cy_tic: (e2) => {
  let t2 = he(e2);
  if (!/^[069]\d{7}[A-Z]$/.test(t2)) return false;
  let r2 = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 };
  return String.fromCharCode(65 + ([0, 2, 4, 6].reduce(((e3, o2) => e3 + r2[t2[o2]]), 0) + [1, 3, 5, 7].reduce(((e3, r3) => e3 + Number(t2[r3])), 0)) % 26) === t2[8];
}, cz_rc: (e2) => {
  let t2 = he(e2), r2 = ge(t2, 2, 4);
  return /^\d{9,10}$/.test(t2) && (ve(r2, 1, 12) || ve(r2, 51, 62) || 10 === t2.length && (ve(r2, 21, 32) || ve(r2, 71, 82))) && Ce(ge(t2, 4, 6));
}, dk_cpr: (e2) => {
  let t2 = he(e2);
  return /^\d{10}$/.test(t2) && Ce(ge(t2, 0, 2)) && be(ge(t2, 2, 4)) && ke(t2, [4, 3, 2, 7, 6, 5, 4, 3, 2], ((e3) => {
    let t3 = e3 % 11;
    return 1 === t3 ? -1 : 0 === t3 ? 0 : 11 - t3;
  }));
}, ee_ik: (e2) => {
  let t2 = he(e2);
  return /^\d{11}$/.test(t2) && ve(ge(t2, 0, 1), 1, 6) && be(ge(t2, 3, 5)) && Ce(ge(t2, 5, 7)) && ve(ge(t2, 7, 10), 1, 710) && _e(t2);
}, es_nif: (e2) => {
  let t2 = he(e2);
  return !!/^([KLMXYZ]?\d{7}[A-Z]|\d{8}[A-Z])$/.test(t2) && "TRWAGMYFPDXBNJZSQVHLCKE"[Number(/^\d/.test(t2) ? t2.slice(0, 8) : `${{ X: "0", Y: "1", Z: "2", K: "0", L: "0", M: "0" }[t2[0]]}${t2.slice(1, 8)}`) % 23] === t2[8];
}, fi_hetu: (e2) => {
  let t2 = e2.replace(/\s/g, "").toUpperCase();
  return !!/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[+\-A-FU-Y]\d{3}[A-Z0-9]$/.test(t2) && "0123456789ABCDEFHJKLMNPRSTUVWXY"[Number(`${t2.slice(0, 6)}${t2.slice(7, 10)}`) % 31] === t2[10];
}, fr_nir: (e2) => {
  let t2 = he(e2);
  return /^[0-3]\d{12}$/.test(t2) && String(Number(t2.slice(0, 10)) % 511).padStart(3, "0") === t2.slice(10);
}, fr_spi: (e2) => {
  let t2 = he(e2);
  return /^[0-3]\d{12}$/.test(t2) && String(Number(t2.slice(0, 10)) % 511).padStart(3, "0") === t2.slice(10);
}, de_stn: (e2) => {
  let t2 = he(e2);
  if (/^\d{13}$/.test(t2)) return "0" === t2[4];
  if (!/^\d{11}$/.test(t2) || "0" === t2[0] || /(\d)\1\1/.test(t2) || ![...new Set(t2.slice(0, 10))].map(((e3) => t2.slice(0, 10).split(e3).length - 1)).some(((e3) => 2 === e3 || 3 === e3))) return false;
  let r2 = fe(t2), o2 = 10;
  for (let e3 = 0; e3 < 10; e3++) {
    let t3 = (r2[e3] + o2) % 10;
    0 === t3 && (t3 = 10), o2 = 2 * t3 % 11;
  }
  return (11 - o2 == 10 ? 0 : 11 - o2) === r2[10];
}, gr_afm: (e2) => /^\d{9}$/.test(he(e2)), hu_ad: (e2) => /^8\d{9}$/.test(he(e2)) && ke(he(e2), [1, 2, 3, 4, 5, 6, 7, 8, 9], ((e3) => e3 % 11)), ie_ppsn: (e2) => {
  let t2 = he(e2);
  if (!/^\d{7}[A-W][A-IW]?$/.test(t2)) return false;
  let r2 = (9 * (9 === t2.length ? "W" === t2[8] ? 0 : t2.charCodeAt(8) - 64 : 0) + [8, 7, 6, 5, 4, 3, 2].reduce(((e3, r3, o2) => e3 + Number(t2[o2]) * r3), 0)) % 23;
  return (0 === r2 ? "W" : String.fromCharCode(64 + r2)) === t2[7];
}, is_kt: (e2) => {
  let t2 = he(e2);
  return /^\d{10}$/.test(t2) && Ce(ge(t2, 0, 2)) && be(ge(t2, 2, 4)) && ("9" === t2[9] || "0" === t2[9]);
}, it_cf: (e2) => {
  let t2 = he(e2);
  if (!/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/.test(t2) || !"ABCDEHLMPRST".includes(t2[8]) || ![...Array(31).keys()].some(((e3) => ge(t2, 9, 11) === e3 + 1 || ge(t2, 9, 11) === e3 + 41))) return false;
  let r2 = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21, A: 1, B: 0, C: 5, D: 7, E: 9, F: 13, G: 15, H: 17, I: 19, J: 21, K: 2, L: 4, M: 18, N: 20, O: 11, P: 3, Q: 6, R: 8, S: 12, T: 14, U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23 }, o2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce(((e3, t3, r3) => ({ ...e3, [t3]: r3 < 10 ? r3 : r3 - 10 })), {});
  return String.fromCharCode(65 + t2.slice(0, 15).split("").reduce(((e3, t3, i2) => e3 + ((i2 + 1) % 2 ? r2[t3] : o2[t3])), 0) % 26) === t2[15];
}, lv_pk: (e2) => {
  let t2 = he(e2);
  return /^(0[1-9]|[12]\d|3[01])(0[0-9]|1[0-2])\d{7}$|^32\d{9}$/.test(t2) && (t2.startsWith("32") || ["0", "1", "2"].includes(t2[6]));
}, lt_ak: (e2) => {
  let t2 = he(e2);
  return /^\d{11}$/.test(t2) && ve(ge(t2, 0, 1), 1, 6) && be(ge(t2, 3, 5)) && Ce(ge(t2, 5, 7)) && _e(t2);
}, lu_nif: (e2) => {
  let t2 = he(e2);
  return !!(/^\d{13}$/.test(t2) && ve(ge(t2, 0, 4), 1800, 2100) && be(ge(t2, 4, 6)) && Ce(ge(t2, 6, 8))) && [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1].reduce(((e3, r2, o2) => e3 + we(Number(t2[o2]) * r2)), 0) % 10 == 0 && ((e3) => {
    let t3 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], r2 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], o2 = 0, i2 = fe(e3).reverse();
    for (let e4 = 0; e4 < i2.length; e4++) o2 = t3[o2][r2[e4 % 8][i2[e4]]];
    return 0 === o2;
  })(`${t2.slice(0, 11)}${t2[12]}`);
}, mt_nic: (e2) => {
  let t2 = he(e2);
  return /^\d{7}[MGAPLHBZ]$/.test(t2) || /^\d{9}$/.test(t2) && ["11", "22", "33", "44", "55", "66", "77", "88"].includes(t2.slice(0, 2));
}, mt_pp: (e2) => /^\d{7}$/.test(he(e2)), nl_bsn: (e2) => /^\d{9}$/.test(he(e2)) && ke(he(e2), [9, 8, 7, 6, 5, 4, 3, 2], ((e3) => e3 % 11 == 10 ? -1 : e3 % 11)), pl_nip: (e2) => /^\d{10}$/.test(he(e2)) && ke(he(e2), [6, 5, 7, 2, 3, 4, 5, 6, 7], ((e3) => e3 % 11 == 10 ? -1 : e3 % 11)), pl_pesel: (e2) => {
  let t2 = he(e2), r2 = ge(t2, 2, 4);
  return /^\d{11}$/.test(t2) && (be(r2) || ve(r2, 21, 32) || ve(r2, 41, 52) || ve(r2, 61, 72) || ve(r2, 81, 92)) && Ce(ge(t2, 4, 6)) && ke(t2, [1, 3, 7, 9, 1, 3, 7, 9, 1, 3], ((e3) => (10 - e3 % 10) % 10));
}, pt_nif: (e2) => /^\d{9}$/.test(he(e2)) && ke(he(e2), [9, 8, 7, 6, 5, 4, 3, 2], ((e3) => {
  let t2 = 11 - e3 % 11;
  return t2 >= 10 ? 0 : t2;
})), ro_cnp: (e2) => {
  let t2 = he(e2), r2 = ge(t2, 7, 9), o2 = "9" === t2[0] && "000" === t2.slice(1, 4);
  return /^\d{13}$/.test(t2) && ve(ge(t2, 0, 1), 1, 9) && (o2 || be(ge(t2, 3, 5)) && Ce(ge(t2, 5, 7))) && (ve(r2, 1, 47) || 51 === r2 || 52 === r2) && ke(t2, [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], ((e3) => e3 % 11 == 10 ? 1 : e3 % 11));
}, sk_rc: (e2) => {
  let t2 = he(e2), r2 = ge(t2, 2, 4);
  return /^\d{9,10}$/.test(t2) && (be(r2) || ve(r2, 51, 62)) && Ce(ge(t2, 4, 6));
}, si_pin: (e2) => {
  let t2 = he(e2);
  return /^\d{8}$/.test(t2) && ve(ge(t2, 0, 7), 1e6, 9999999) && ke(t2, [8, 7, 6, 5, 4, 3, 2], ((e3) => {
    let t3 = 11 - e3 % 11;
    return 10 === t3 ? 0 : 11 === t3 ? -1 : t3;
  }));
}, se_pin: (e2) => {
  let t2 = he(e2);
  if (!/^\d{10}$|^\d{12}$/.test(t2)) return false;
  if (12 === t2.length) {
    if (!["18", "19", "20"].includes(t2.slice(0, 2))) return false;
    t2 = t2.slice(2);
  }
  let r2 = ge(t2, 4, 6);
  return be(ge(t2, 2, 4)) && (Ce(r2) || ve(r2, 61, 91)) && xe(t2, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
} };
const Ee = { at_stn: "Steuernummer (Austria)", be_nrn: "National Registration Number (Belgium)", bg_ucn: "Unified Civil Number (Bulgaria)", hr_oib: "OIB (Croatia)", cy_tic: "Tax Identification Code (Cyprus)", cz_rc: "Rodné číslo (Czech Republic)", dk_cpr: "CPR (Denmark)", ee_ik: "Isikukood (Estonia)", es_nif: "NIF (Spain)", fi_hetu: "HETU (Finland)", fr_spi: "Numéro fiscal (France)", fr_nir: "NIR (France)", de_stn: "Steuer-ID (Germany)", gr_afm: "AFM (Greece)", hu_ad: "Adóazonosító (Hungary)", ie_ppsn: "PPSN (Ireland)", is_kt: "Kennitala (Iceland)", it_cf: "Codice fiscale (Italy)", lv_pk: "Personas kods (Latvia)", lt_ak: "Asmens kodas (Lithuania)", lu_nif: "NIF (Luxembourg)", mt_nic: "National Identity Card (Malta)", mt_pp: "Passport (Malta)", nl_bsn: "BSN (Netherlands)", pl_pesel: "PESEL (Poland)", pl_nip: "NIP (Poland)", pt_nif: "NIF (Portugal)", ro_cnp: "CNP (Romania)", sk_rc: "Rodné číslo (Slovakia)", si_pin: "EMŠO (Slovenia)", se_pin: "Personnummer (Sweden)" }, Ae = () => {
  let e2 = Al().stripeSession;
  if (!e2) throw Error("No active Stripe onramp session");
  return e2;
}, Pe = () => {
  var _a2;
  let { stripeSession: e2, controller: t2 } = Al();
  return null !== e2 && !(((_a2 = t2.current) == null ? void 0 : _a2.signal.aborted) ?? 1);
}, Ie = () => {
  let { controller: e2 } = Al();
  if (!e2.current) throw Error("No active abort controller");
  return e2.current.signal;
}, Le = async () => {
  let e2 = Ae().onramp;
  if (!e2.getMissingIdentifiers) throw Error("Stripe onramp getMissingIdentifiers is unavailable");
  let t2 = await e2.getMissingIdentifiers();
  if (!Pe()) return false;
  let r2 = Ae();
  return vl({ stripeSession: { ...r2, context: { ...r2.context, kycMissingIdentifiers: t2.identifiers, kycMissingAlternatives: t2.alternatives } } }), (({ identifiers: e3 }) => e3.length > 0)(t2);
}, $e = ({ stripeKycRegion: e2, sourceCurrency: t2 }) => {
  if ("eu" === e2 || "us" === e2) return e2;
  let r2 = t2.toUpperCase();
  if ("EUR" === r2) return "eu";
  if ("USD" === r2) return "us";
  throw Error(`Unsupported source currency for Stripe onramp: ${r2}`);
}, Ne = (e2) => ({ providedFields: "active" === e2.status ? e2.provided_fields : [], kycTiers: "active" === e2.status ? e2.kyc_tiers : void 0 }), Te = ({ customer: e2, region: t2 }) => "active" === e2.status && ("eu" === t2 ? ((e3, t3) => "verified" === t3 && e3.includes("identifiers") && e3.includes("attestation"))(e2.provided_fields, pe(e2.kyc_tiers)) : e2.verifications.some(((e3) => "verified" === e3.status))), Re = async ({ customer: e2, region: t2, tier: r2 = "l0" }) => {
  let { providedFields: o2, kycTiers: i2 } = Ne(e2);
  if ("eu" !== t2) return de(r2, o2, t2);
  if (ye(i2)) throw Error("Document verification was rejected. Contact Stripe support for help.");
  let n2 = (({ kycTiers: e3, providedFields: t3 }) => {
    let r3 = pe(e3);
    return ue(t3, r3);
  })({ kycTiers: i2, providedFields: o2 });
  return "collect-identifiers" !== n2 || await Le() || (n2 = me("collect-identifiers")), n2;
}, Me = (e2, t2, r2) => {
  let { promise: o2, reject: i2 } = Promise.withResolvers(), n2 = setTimeout((() => i2(Error(`Timed out after ${t2}ms`))), t2);
  return r2.addEventListener("abort", (() => clearTimeout(n2)), { once: true }), Promise.race([e2, o2]);
}, Fe = async (e2, { environment: t2 }) => (await e2.fetchPrivyRoute(o, { query: { environment: t2 } })).data, De = ["aptos", "avalanche", "arbitrum", "base", "bitcoin", "ethereum", "optimism", "polygon", "solana", "stellar", "sui", "tempo", "worldchain", "xrpl"], Ue = 2e3;
const Be = (e2) => {
  if (((e3) => De.some(((t2) => t2 === e3)))(e2)) return e2;
  throw Error(`Unsupported Stripe onramp network: ${e2}`);
}, je = async (e2, t2) => await e2.fetchPrivyRoute(s, { body: { session_id: t2.sessionId, environment: t2.environment, session: t2.session } }), ze = (e2) => {
  var _a2, _b;
  let t2 = qe((_a2 = e2 == null ? void 0 : e2.source_currency) == null ? void 0 : _a2.toLowerCase());
  return { currencySymbol: t2, paymentMethodLabel: null, fee: (e2 == null ? void 0 : e2.fee) && t2 ? `${t2}${e2.fee}` : null, destinationAmount: Ve(e2 == null ? void 0 : e2.destination_amount), destinationToken: ((_b = e2 == null ? void 0 : e2.destination_currency) == null ? void 0 : _b.toUpperCase()) ?? null, destinationNetwork: Ke(e2 == null ? void 0 : e2.destination_network), sourceAmount: (e2 == null ? void 0 : e2.source_total_amount) ?? null, quoteExpiresAt: (e2 == null ? void 0 : e2.quote_expiration) ?? null };
};
let qe = (e2) => "usd" === e2 ? "$" : "eur" === e2 ? "€" : "gbp" === e2 ? "£" : null, Ve = (e2) => e2 ? e2.replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1") : null, Ke = (e2) => e2 ? e2.split(/[-_]/).map(((e3) => `${e3.slice(0, 1).toUpperCase()}${e3.slice(1)}`)).join(" ") : null;
let Oe = (e2) => {
  if (!e2 || "object" != typeof e2) return null;
  if ("code" in e2 && "string" == typeof e2.code) return e2.code;
  if ("error" in e2) {
    let t2 = e2.error;
    if (t2 && "object" == typeof t2 && "code" in t2 && "string" == typeof t2.code) return t2.code;
  }
  return null;
}, We = (e2) => {
  if (!e2) return "";
  let t2 = [];
  if (e2 instanceof Error ? t2.push(e2.name, e2.message) : t2.push(String(e2)), "object" == typeof e2 && ("code" in e2 && t2.push(String(e2.code)), "type" in e2 && t2.push(String(e2.type)), "error" in e2)) {
    let r2 = e2.error;
    "object" == typeof r2 && r2 && "message" in r2 && t2.push(String(r2.message)), "object" == typeof r2 && r2 && "code" in r2 && t2.push(String(r2.code));
  }
  return t2.join(" ");
};
const He = (e2, t2) => {
  let r2 = e2.find(((e3) => e3.id === t2));
  if (!(r2 == null ? void 0 : r2.card)) return null;
  let o2 = r2.card.brand ? `${r2.card.brand.charAt(0).toUpperCase()}${r2.card.brand.slice(1)}` : "Card";
  return r2.card.last4 ? `${o2} •••• ${r2.card.last4}` : o2;
}, Ye = (e2) => {
  let t2 = e2 instanceof Error ? e2 : Error(String(e2));
  console.error("[FiatOnramp:Stripe]", t2), vl({ state: { status: "provider-error" }, error: t2, isLoading: false });
}, Ze = async ({ paymentToken: e2, loader: t2 }) => {
  let r2 = Ae();
  try {
    let o2, a2, { opts: s2, amount: l } = Al(), { config: c2, cryptoCustomerId: d2 } = r2.context;
    if (!d2) throw Error("Missing cryptoCustomerId");
    "inline" === t2 ? vl({ stripeSession: { ...r2, context: { ...r2.context, paymentToken: e2 } }, isLoading: true }) : "screen" === t2 && vl({ stripeSession: { ...r2, context: { ...r2.context, paymentToken: e2 } }, state: { status: "stripe-flow", step: "checkout" }, isLoading: false });
    let u2 = { crypto_customer_id: d2, payment_token: e2, source_amount: l || "0", source_currency: s2.source.selectedAsset.toUpperCase(), destination_currency: s2.destination.asset, destination_network: c2.network, wallet_address: s2.destination.address };
    try {
      let e3 = await je(r2.privy, { sessionId: c2.sessionId, environment: c2.environment, session: u2 });
      o2 = e3.id, a2 = e3.transaction_details;
    } catch (e3) {
      let o3 = ((e4) => {
        let t3 = Oe(e4);
        if (t3 === i$1.ONRAMP_MINIMUM_IDENTITY_VERIFICATION_REQUIRED) return "l0";
        if (t3 === i$1.ONRAMP_IDENTITY_VERIFICATION_REQUIRED) return "l1";
        if (t3 === i$1.ONRAMP_DOCUMENT_VERIFICATION_REQUIRED) return "l2";
        if ("crypto_onramp_missing_minimum_identity_verification" === t3) return "l0";
        if ("crypto_onramp_missing_identity_verification" === t3) return "l1";
        if ("crypto_onramp_missing_document_verification" === t3) return "l2";
        let r3 = We(e4);
        return r3.includes("crypto_onramp_missing_minimum_identity_verification") ? "l0" : r3.includes("crypto_onramp_missing_identity_verification") ? "l1" : r3.includes("crypto_onramp_missing_document_verification") ? "l2" : r3.toLowerCase().includes("minimum identity verification") ? "l0" : r3.toLowerCase().includes("identity verification") ? "l1" : r3.toLowerCase().includes("document verification") ? "l2" : null;
      })(e3);
      if (!o3) throw e3;
      if (!Pe()) return;
      let n2 = await ce(r2.privy, { environment: c2.environment });
      if (!Pe()) return;
      let { providedFields: a3 } = Ne(n2), s3 = Ae(), l2 = s3.context.kycRegion ?? "us";
      if ("eu" === l2) {
        let e4 = await Re({ customer: n2, region: l2 });
        if (!Pe()) return;
        if (!e4) throw Error("Unexpected: EU user fully verified but session creation failed with KYC error");
        return s3 = Ae(), void vl({ stripeSession: { ...s3, context: { ...s3.context, documentVerificationAction: { type: "retry-payment", loader: t2 }, kycTier: o3, kycProvidedFields: a3 } }, state: { status: "stripe-flow", step: e4 }, isLoading: false });
      }
      let d3 = await Re({ customer: n2, region: l2, tier: o3 });
      if (!Pe()) return;
      let u3 = { ...(s3 = Ae()).context, ..."l2" === o3 ? { documentVerificationAction: { type: "retry-payment", loader: t2 } } : {}, kycTier: o3, kycProvidedFields: a3 };
      if (d3) return void vl({ stripeSession: { ...s3, context: u3 }, state: { status: "stripe-flow", step: d3 }, isLoading: false });
      if ("l2" === o3) return void vl({ stripeSession: { ...s3, context: u3 }, state: { status: "stripe-flow", step: "verify-documents" }, isLoading: false });
      throw Error(`Unexpected: all fields already provided for KYC tier '${o3}'`);
    }
    if (!Pe()) return;
    let m2 = Ae().context.paymentMethodLabel ?? null;
    if (!m2) try {
      let t3 = await Fe(r2.privy, { environment: c2.environment });
      m2 = He(t3, e2);
    } catch {
    }
    let p2 = { ...ze(a2), paymentMethodLabel: m2 }, y2 = Ae();
    vl({ stripeSession: { ...y2, context: { ...y2.context, stripeSessionId: o2, checkoutDetails: p2 } }, stripeConfirmCheckoutDetails: p2, state: { status: "stripe-flow", step: "confirm-checkout" }, isLoading: false });
  } catch (e3) {
    Ye(e3);
  }
}, Qe = async (e2) => {
  let t2 = Ae();
  try {
    let { opts: r2 } = Al(), o2 = t2.context.config.network, a$1 = await (async (e3, { environment: t3 }) => (await e3.fetchPrivyRoute(a, { query: { environment: t3 } })).data)(t2.privy, { environment: t2.context.config.environment });
    if (!Pe()) return;
    if (!a$1.some(((e3) => e3.wallet_address === r2.destination.address && e3.network === o2))) {
      try {
        await t2.onramp.registerWalletAddress(r2.destination.address, Be(o2));
      } catch (e3) {
        console.warn("[FiatOnramp:Stripe] registerWalletAddress failed:", e3);
      }
      if (!Pe()) return;
    }
    if (!(e2 == null ? void 0 : e2.skipTokenCheck)) {
      let e3 = [];
      try {
        e3 = await Fe(t2.privy, { environment: t2.context.config.environment });
      } catch {
      }
      if (!Pe()) return;
      if (e3.length > 0) {
        let t3 = /* @__PURE__ */ new Set(), r3 = e3.filter(((e4) => {
          var _a2, _b;
          let r4 = `${e4.type}:${((_a2 = e4.card) == null ? void 0 : _a2.brand) ?? ""}:${((_b = e4.card) == null ? void 0 : _b.last4) ?? ""}`;
          return !t3.has(r4) && (t3.add(r4), true);
        })), o3 = Ae();
        return void vl({ stripeSession: { ...o3, context: { ...o3.context, savedPaymentTokens: r3 } }, state: { status: "stripe-flow", step: "select-payment" }, isLoading: false });
      }
    }
    vl({ stripeElement: null, state: { status: "stripe-flow", step: "payment" }, isLoading: false });
    let s2 = t2.context.kycRegion ?? "us", l = await Me(t2.onramp.collectPaymentMethod({ payment_method_types: "eu" === s2 ? ["card"] : ["card", "us_bank_account"], wallets: { applePay: "auto", googlePay: "auto" } }, ((e3) => {
      if (Pe()) {
        if (!e3.cryptoPaymentToken) return void Ye(Error("Payment method selection was cancelled"));
        Ze({ paymentToken: e3.cryptoPaymentToken, loader: "screen" });
      }
    })).catch(((e3) => (Ye(e3), null))), 3e4, Ie());
    Pe() && l && vl({ stripeElement: l });
  } catch (e3) {
    Ye(e3);
  }
}, Ge = async () => {
  var _a2, _b;
  let e2, t2 = El();
  if (!t2) return;
  let r2 = t2.provider;
  if ("stripe" === r2 || "stripe-sandbox" === r2) {
    vl({ isLoading: true });
    let { opts: e3, amount: o3, getProviderUrl: a3, email: s3, phone: c2 } = Al();
    try {
      let d3 = await a3({ source: { asset: e3.source.selectedAsset.toUpperCase(), amount: o3 || "0" }, destination: { asset: e3.destination.asset, chain: e3.destination.chain, address: e3.destination.address }, provider: t2.provider, sub_provider: t2.sub_provider ?? void 0, payment_method: t2.payment_method }), u3 = Xe(d3), m3 = "stripe" === r2 ? "production" : "sandbox";
      await (async (e4, t3) => {
        let r3;
        Sl();
        try {
          ({ loadCryptoOnrampAndInitialize: r3 } = await __vitePreload(() => import("./react-auth-DpmATBqm.js"), true ? [] : void 0));
        } catch {
          throw Error("@stripe/crypto is required for Stripe onramp but could not be loaded. Ensure the package is installed.");
        }
        let { controller: o4 } = Al();
        o4.current = new AbortController();
        let a4 = await Me(Promise.resolve(r3(t3.publishableKey, { theme: "stripe" })), 15e3, o4.current.signal);
        if (!a4) throw Error("Stripe crypto SDK unavailable");
        let s4 = crypto.randomUUID();
        vl({ stripeSession: { id: s4, onramp: a4, privy: e4, context: { sessionId: s4, config: t3 } } });
      })(Al().privy, { publishableKey: u3.publishable_key, network: u3.network, sessionId: u3.session_id, userEmail: s3 ?? "", userPhone: c2, environment: m3 });
      let p2 = Ae();
      if (!p2) return;
      let y2 = await ce(p2.privy, { environment: m3 });
      if (!Pe()) return;
      if ("active" === y2.status) {
        let t3 = Ae(), r3 = $e({ stripeKycRegion: y2.kyc_region, sourceCurrency: e3.source.selectedAsset });
        if (vl({ stripeSession: { ...t3, context: { ...t3.context, cryptoCustomerId: y2.crypto_customer_id, kycRegion: r3, kycProvidedFields: y2.provided_fields } }, isLoading: true }), "eu" === r3) if (Te({ customer: y2, region: r3 })) await Qe();
        else {
          let e4 = await Re({ customer: y2, region: r3 }) ?? "collect-name";
          if (!Pe()) return;
          vl({ state: { status: "stripe-flow", step: e4 }, isLoading: false });
        }
        else Te({ customer: y2, region: r3 }) ? await Qe() : vl({ state: { status: "stripe-flow", step: "collect-name" }, isLoading: false });
      } else vl({ state: { status: "stripe-flow", step: "choose-email" }, isLoading: false });
    } catch (e4) {
      console.error("[FiatOnramp:Stripe] Init failed:", e4), vl({ state: { status: "provider-error" }, isLoading: false, error: Error("Something went wrong setting up checkout. Please try again.") });
    }
    return;
  }
  let o2 = t$1();
  if (!o2) return void vl({ state: { status: "provider-error" }, error: Error("Unable to open payment window") });
  vl({ isLoading: true });
  let { opts: a2, amount: s2, getProviderUrl: d2, getStatus: u2, controller: m2 } = Al(), h2 = () => {
    try {
      o2.closed || o2.close();
    } catch {
    }
  };
  m2.current = new AbortController();
  try {
    let r3 = await d2({ source: { asset: a2.source.selectedAsset.toUpperCase(), amount: s2 || "0" }, destination: { asset: a2.destination.asset, chain: a2.destination.chain, address: a2.destination.address }, provider: t2.provider, sub_provider: t2.sub_provider ?? void 0, payment_method: t2.payment_method, redirect_url: window.location.origin });
    if ("url" !== r3.type) throw Error("Expected URL response for popup-based provider");
    o2.location.href = r3.url, e2 = r3.session_id;
  } catch (e3) {
    return h2(), void vl({ state: { status: "provider-error" }, isLoading: false, error: Error("Unable to start payment session") });
  }
  vl({ isLoading: false }), vl({ state: { status: "provider-confirming" } });
  let f = await r$1({ operation: () => u2({ session_id: e2, provider: t2.provider }), until: (e3) => "completed" === e3.status || "failed" === e3.status || "cancelled" === e3.status, delay: 0, interval: 2e3, attempts: 60, signal: m2.current.signal });
  if ("aborted" !== f.status) {
    if ("max_attempts" === f.status) return h2(), f.error ? (console.error(f.error), void vl({ state: { status: "select-amount" }, isLoading: false, error: Error("Unable to check payment status. Please try again.") })) : void vl({ state: { status: "provider-error" }, error: Error("Could not confirm payment status yet.") });
    "completed" === ((_a2 = f.result) == null ? void 0 : _a2.status) ? (h2(), vl({ state: { status: "provider-success" } })) : (h2(), vl({ state: { status: "provider-error" }, error: Error(`Transaction ${((_b = f.result) == null ? void 0 : _b.status) ?? "failed"}`) }));
  }
};
let Xe = (e2) => {
  if (e2 && "object" == typeof e2 && "publishable_key" in e2 && "network" in e2 && "session_id" in e2) return e2;
  throw Error("Unexpected response shape from provider_session_url for Stripe");
};
const Je = () => {
  let e2 = Zl();
  e2 && e2.length > 0 && vl({ state: { status: "select-payment-method", quotes: e2 } });
}, et = () => {
  vl({ state: { status: "select-source-asset" } });
}, tt = () => {
  vl({ error: null, state: { status: "select-amount" } });
}, rt = (e2) => {
  vl({ localSelectedQuote: e2, state: { status: "select-amount" } });
}, ot = (e2) => {
  let { opts: t2, amount: r2 } = Al(), o2 = { ...t2, source: { ...t2.source, selectedAsset: e2 } };
  vl({ opts: o2, state: { status: "select-amount" }, localQuotes: [], localSelectedQuote: null, quotesWarning: null, quotesErrors: null, isLoading: true }), _l(r2, o2);
}, it = ({ element: t2, minHeight: r2, bleed: o2 = false }) => {
  let i2 = A(null);
  return y((() => (i2.current && t2 && i2.current.replaceChildren(t2), () => {
    i2.current && i2.current.replaceChildren();
  })), [t2]), /* @__PURE__ */ u("div", { ref: i2, style: { minHeight: r2, margin: o2 ? "0 -1rem" : void 0 } });
}, nt = (e2, t2) => {
  var _a2;
  return "collect-address" !== e2 || "eu" !== t2.kycRegion || ((_a2 = t2.kycAddress) == null ? void 0 : _a2.country) ? e2 : "collect-country";
}, at = (e2) => {
  Pe() && vl({ state: { status: "stripe-flow", step: nt(e2, Ae().context) } });
}, st = ({ city: e2, country: t2 }) => {
  let r2 = Ae(), o2 = r2.context, n2 = [...o2.kycProvidedFields ?? [], "birth_city", "birth_country"];
  vl({ stripeSession: { ...r2, context: { ...o2, kycBirthCity: e2, kycBirthCountry: t2, kycProvidedFields: n2 } } }), at(me("collect-birth-location"));
}, lt = async (e2, t2) => (await e2.fetchPrivyRoute(r, { params: { session_id: t2 } })).client_secret, ct = async (e2, t2) => {
  let r2 = await e2.fetchPrivyRoute(i, { params: { session_id: t2 } });
  return { quoteExpiresAt: r2.quote_expiration, sourceTotalAmount: r2.source_total_amount, fee: r2.fee, destinationAmount: r2.destination_amount };
}, dt = (e2) => {
  if (!e2 || "object" != typeof e2) return null;
  let t2 = e2.transaction_details;
  return (t2 == null ? void 0 : t2.last_error) ?? null;
};
let ut = /* @__PURE__ */ new Set(["transaction_limit_reached", "location_not_supported", "transaction_failed"]), mt = (e2) => "transaction_limit_reached" === e2 ? new s$1("Checkout failed: transaction_limit_reached", void 0, i$1.ONRAMP_TRANSACTION_LIMIT_REACHED) : Error(`Checkout failed: ${e2 ?? "unknown error"}`), pt = (e2) => !!(e2 && "object" == typeof e2 && "message" in e2 && "string" == typeof e2.message && e2.message.toLowerCase().includes("quote expired"));
const yt = async () => {
  let e2 = Ae();
  try {
    let { stripeSessionId: t2 } = e2.context;
    if (!t2) throw Error("Missing stripeSessionId");
    vl({ isLoading: true });
    for (let r2 = 0; r2 < 3; r2++) {
      let r3;
      if (!Pe()) return;
      try {
        r3 = await e2.onramp.performCheckout(t2, (async (t3) => await lt(e2.privy, t3)));
      } catch (r4) {
        if (!pt(r4)) throw r4;
        await ct(e2.privy, t2);
        continue;
      }
      if (r3.successful) {
        if (!Pe()) return;
        return void vl({ state: { status: "provider-success" }, isLoading: false });
      }
      let o2 = dt(r3);
      if (!o2 || ut.has(o2)) throw mt(o2);
      if (!Pe()) return;
      if ("charged_with_expired_quote" === o2) await ct(e2.privy, t2);
      else if ("quote_rate_drifted" === o2) {
        let { opts: r4, amount: o3 } = Al(), { config: a2, cryptoCustomerId: s2, paymentToken: l } = e2.context;
        if (!s2 || !l) throw Error("Cannot recreate session: missing customer or payment token");
        t2 = (await je(e2.privy, { sessionId: a2.sessionId, environment: a2.environment, session: { crypto_customer_id: s2, payment_token: l, source_amount: o3 || "0", source_currency: r4.source.selectedAsset.toUpperCase(), destination_currency: r4.destination.asset, destination_network: a2.network, wallet_address: r4.destination.address } })).id;
        let c2 = Ae();
        vl({ stripeSession: { ...c2, context: { ...c2.context, stripeSessionId: t2 } } });
      } else {
        if ("missing_kyc" === o2) {
          let t3 = await ce(e2.privy, { environment: e2.context.config.environment });
          if (!Pe()) return;
          let { providedFields: r4 } = Ne(t3), o3 = Ae(), n2 = o3.context.kycRegion ?? "us", a2 = await Re({ customer: t3, region: n2, tier: "l0" });
          if (!Pe()) return;
          if (o3 = Ae(), !a2) throw Error("Checkout failed: missing_kyc but all fields already provided");
          return void vl({ stripeSession: { ...o3, context: { ...o3.context, documentVerificationAction: { type: "retry-checkout" }, kycTier: "l0", kycProvidedFields: r4 } }, state: { status: "stripe-flow", step: a2 } });
        }
        if ("missing_document_verification" === o2) {
          let t3 = await ce(e2.privy, { environment: e2.context.config.environment });
          if (!Pe()) return;
          let { providedFields: r4 } = Ne(t3), o3 = Ae(), n2 = o3.context.kycRegion ?? "us", a2 = await Re({ customer: t3, region: n2, tier: "l2" });
          if (!Pe()) return;
          let s2 = { ...(o3 = Ae()).context, documentVerificationAction: { type: "retry-checkout" }, kycTier: "l2", kycProvidedFields: r4 };
          return a2 ? void vl({ stripeSession: { ...o3, context: s2 }, state: { status: "stripe-flow", step: a2 }, isLoading: false }) : void vl({ stripeSession: { ...o3, context: s2 }, state: { status: "stripe-flow", step: "verify-documents" }, isLoading: false });
        }
        if ("missing_consumer_wallet" !== o2) throw Error(`Checkout failed: ${o2}`);
        {
          let { opts: t3 } = Al();
          await e2.onramp.registerWalletAddress(t3.destination.address, Be(e2.context.config.network));
        }
      }
    }
    throw Error("Checkout failed after maximum retry attempts");
  } catch (e3) {
    Ye(e3);
  }
}, ht = [{ code: "AT", name: "Austria" }, { code: "BE", name: "Belgium" }, { code: "BG", name: "Bulgaria" }, { code: "HR", name: "Croatia" }, { code: "CY", name: "Cyprus" }, { code: "CZ", name: "Czech Republic" }, { code: "DK", name: "Denmark" }, { code: "EE", name: "Estonia" }, { code: "FI", name: "Finland" }, { code: "FR", name: "France" }, { code: "DE", name: "Germany" }, { code: "GR", name: "Greece" }, { code: "HU", name: "Hungary" }, { code: "IS", name: "Iceland" }, { code: "IE", name: "Ireland" }, { code: "IT", name: "Italy" }, { code: "LV", name: "Latvia" }, { code: "LT", name: "Lithuania" }, { code: "LU", name: "Luxembourg" }, { code: "MT", name: "Malta" }, { code: "NL", name: "Netherlands" }, { code: "PL", name: "Poland" }, { code: "PT", name: "Portugal" }, { code: "RO", name: "Romania" }, { code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" }, { code: "ES", name: "Spain" }, { code: "SE", name: "Sweden" }], ft = new Set(ht.map(((e2) => e2.code))), gt = (e2) => {
  if (!ft.has(e2)) return void Ye(Error("Stripe EU onramp is not available in this country"));
  let t2 = Ae(), r2 = t2.context, o2 = r2.cryptoCustomerId ? "collect-address" : "create-link-account";
  vl({ stripeSession: { ...t2, context: { ...r2, kycRegion: "eu", kycAddress: { ...r2.kycAddress ?? { addressLine1: "", city: "", state: "", postalCode: "" }, country: e2 } } }, state: { status: "stripe-flow", step: o2 } });
}, vt = async (e2, { email: t$12, environment: r2 }) => (await e2.fetchPrivyRoute(t, { body: { email: t$12, environment: r2 } })).data, bt = (e2) => {
  let t2 = Ae();
  vl({ stripeSession: { ...t2, context: { ...t2.context, ...e2 } } });
}, Ct = async (e$1, t2) => {
  let r2 = Ae();
  try {
    if (await (async (e$12, { authIntentId: t3, cryptoCustomerId: r3, environment: o3 }) => {
      await e$12.fetchPrivyRoute(e, { body: { auth_intent_id: t3, crypto_customer_id: r3, environment: o3 } });
    })(r2.privy, { authIntentId: t2, cryptoCustomerId: e$1, environment: r2.context.config.environment }), !Pe()) return;
    bt({ cryptoCustomerId: e$1 });
    let o2 = await ce(r2.privy, { environment: r2.context.config.environment });
    if (!Pe()) return;
    if ("active" !== o2.status) throw Error("Session unexpectedly inactive after authentication");
    let { opts: i2 } = Al(), a2 = $e({ stripeKycRegion: o2.kyc_region, sourceCurrency: i2.source.selectedAsset });
    if (bt({ kycRegion: a2, kycProvidedFields: o2.provided_fields }), "eu" === a2) if (Te({ customer: o2, region: a2 })) await Qe();
    else {
      let e2 = await Re({ customer: o2, region: a2 }) ?? "collect-name";
      if (!Pe()) return;
      at(e2);
    }
    else Te({ customer: o2, region: a2 }) ? await Qe() : at("collect-name");
  } catch (e2) {
    Ye(e2);
  }
}, wt = async (e2) => {
  let t2 = Ae();
  try {
    vl({ isLoading: true });
    let r2 = await vt(t2.privy, { email: e2, environment: t2.context.config.environment });
    if (!Pe()) return;
    if (vl({ isLoading: false }), "no_account" === r2.status) {
      let { opts: r3 } = Al(), o2 = "EUR" === r3.source.selectedAsset.toUpperCase();
      vl({ stripeSession: { ...t2, context: { ...t2.context, pendingEmail: e2 } }, state: { status: "stripe-flow", step: o2 ? "collect-country" : "create-link-account" }, email: e2 });
    } else {
      vl({ stripeSession: { ...t2, context: { ...t2.context, authIntentId: r2.id, pendingEmail: e2 } }, state: { status: "stripe-flow", step: "authenticating" }, email: e2 });
      let o2 = await Me(t2.onramp.authenticate(r2.id, ((e3) => {
        Pe() && ("success" === e3.result && e3.crypto_customer_id ? Ct(e3.crypto_customer_id, r2.id) : Ye(Error(`Link authentication ${e3.result}`)));
      })), 3e4, Ie());
      Pe() && o2 && vl({ stripeElement: o2 });
    }
  } catch (e3) {
    Ye(e3);
  }
}, kt = async (e2) => {
  let t2 = Ae(), r2 = t2.context, o2 = t2.onramp, n2 = await o2.updateKycInfo(e2).catch(((e3) => (Ye(e3), null)));
  if (!n2) return;
  let a2 = [...r2.kycProvidedFields ?? []];
  n2.completed && a2.push("identifiers"), vl({ stripeSession: { ...t2, context: { ...r2, kycProvidedFields: a2, kycMissingIdentifiers: n2.identifiers ?? [], kycMissingAlternatives: n2.alternatives ?? [], kycInvalidIdentifiers: n2.invalid_identifiers ?? [] } } }), n2.completed && at(me("collect-identifiers"));
}, _t = async () => {
  let e2 = Ae();
  try {
    let { kycSsn: t2, kycTier: r2, kycRegion: o2, config: n2 } = e2.context, a2 = { ...xt(e2.context), ...St(e2.context), ...Et(e2.context), ...At(e2.context), ...Pt(e2.context) };
    if (at("kyc"), await e2.onramp.submitKycInfo(a2), t2) {
      let e3 = Ae();
      vl({ stripeSession: { ...e3, context: { ...e3.context, kycSsn: void 0 } } });
    }
    if (!Pe()) return;
    let s2 = "eu" === o2 ? "l2" : "l2" === r2 ? "l1" : r2 ?? "l0", l = await r$1({ operation: () => ce(e2.privy, { environment: n2.environment }), until: (e3) => {
      var _a2, _b;
      if ("active" !== e3.status) return false;
      if ("eu" === o2) {
        let t3 = (_a2 = e3.kyc_tiers) == null ? void 0 : _a2.find(((e4) => "l2" === e4.tier));
        return "pending" === (t3 == null ? void 0 : t3.verification_status) || "verified" === (t3 == null ? void 0 : t3.verification_status);
      }
      if ((_b = e3.kyc_tiers) == null ? void 0 : _b.length) {
        let t3 = e3.kyc_tiers.find(((e4) => e4.tier === s2));
        if (t3) return "verified" === t3.verification_status;
      }
      return e3.verifications.some(((e4) => "verified" === e4.status));
    }, delay: 0, interval: Ue, attempts: Math.ceil(30), signal: Ie() });
    if (!Pe() || "aborted" === l.status) return;
    if ("max_attempts" === l.status) throw Error("KYC verification timed out");
    if ("l2" === r2) {
      let e3 = Ae(), t3 = e3.context.documentVerificationAction ?? { type: "retry-payment", loader: "screen" };
      return void vl({ stripeSession: { ...e3, context: { ...e3.context, documentVerificationAction: t3 } }, state: { status: "stripe-flow", step: "verify-documents" }, isLoading: false });
    }
    await Qe();
  } catch (e3) {
    Ye(e3);
  }
};
let xt = ({ kycName: e2 }) => e2 ? { given_name: e2.firstName, surname: e2.lastName } : {}, St = ({ kycDob: e2 }) => e2 ? { date_of_birth: { day: e2.day, month: e2.month, year: e2.year } } : {}, Et = ({ kycRegion: e2, kycSsn: t2 }) => "eu" !== e2 && t2 ? { id_number: { type: "us_ssn", value: t2 } } : {}, At = ({ kycAddress: e2 }) => e2 ? { address: { line1: e2.addressLine1, city: e2.city, ...e2.state ? { state: e2.state } : {}, postal_code: e2.postalCode, country: e2.country } } : {}, Pt = ({ kycRegion: e2, kycNationalities: t2, kycBirthCity: r2, kycBirthCountry: o2 }) => "eu" === e2 ? { ...(t2 == null ? void 0 : t2.length) ? { nationalities: t2 } : {}, ...r2 ? { birth_city: r2 } : {}, ...o2 ? { birth_country: o2 } : {} } : {};
const It = async (e2) => {
  var _a2;
  let t2 = Ae(), r2 = t2.context, o2 = (_a2 = r2.kycAddress) == null ? void 0 : _a2.country;
  if (!("eu" !== r2.kycRegion || o2 && ft.has(o2))) return void Ye(Error("Stripe EU onramp is not available in this country"));
  let n2 = "eu" === r2.kycRegion && o2 ? { ...e2, country: o2 } : e2;
  vl({ stripeSession: { ...t2, context: { ...r2, kycAddress: n2, kycProvidedFields: [...r2.kycProvidedFields ?? [], "address_line_1", "address_city", ...n2.state ? ["address_state"] : [], "address_postal_code"] } } }), "eu" !== r2.kycRegion ? await _t() : await (async () => {
    let e3 = Ae();
    try {
      let { kycName: t3, kycDob: r3, kycAddress: o3, kycNationalities: i2, kycBirthCity: n3, kycBirthCountry: a2 } = e3.context, s2 = { ...t3 ? { given_name: t3.firstName, surname: t3.lastName } : {}, ...r3 ? { date_of_birth: { day: r3.day, month: r3.month, year: r3.year } } : {}, ...o3 ? { address: { line1: o3.addressLine1, city: o3.city, ...o3.state ? { state: o3.state } : {}, postal_code: o3.postalCode, country: o3.country } } : {}, ...(i2 == null ? void 0 : i2.length) ? { nationalities: i2 } : {}, ...n3 ? { birth_city: n3 } : {}, ...a2 ? { birth_country: a2 } : {} };
      if (at("kyc"), await e3.onramp.submitKycInfo(s2), !Pe()) return;
      let l = await Le();
      if (!Pe()) return;
      at(l ? "collect-identifiers" : me("collect-identifiers"));
    } catch (e4) {
      Ye(e4);
    }
  })();
}, Lt = ({ day: e2, month: t2, year: r2 }) => {
  let o2 = Ae(), n2 = o2.context, a2 = n2.kycTier ?? "l1", s2 = n2.kycRegion ?? "us", l = [...n2.kycProvidedFields ?? [], "dob"], c2 = de(a2, l, s2), d2 = { ...n2, kycDob: { day: e2, month: t2, year: r2 }, kycProvidedFields: l }, u2 = c2 ? { status: "stripe-flow", step: nt(c2, d2) } : void 0;
  vl({ stripeSession: { ...o2, context: d2 }, ...u2 ? { state: u2 } : {} }), c2 || _t();
}, $t = ({ firstName: e2, lastName: t2 }) => {
  let r2 = Ae(), o2 = r2.context, n2 = o2.kycTier ?? "l0", a2 = o2.kycRegion ?? "us", s2 = [...o2.kycProvidedFields ?? [], "first_name", "last_name"], l = de(n2, s2, a2), c2 = { ...o2, kycName: { firstName: e2, lastName: t2 }, kycProvidedFields: s2 }, d2 = l ? { status: "stripe-flow", step: nt(l, c2) } : void 0;
  vl({ stripeSession: { ...r2, context: c2 }, ...d2 ? { state: d2 } : {} }), l || _t();
}, Nt = (e2) => {
  let t2 = Ae(), r2 = t2.context, o2 = r2.kycTier ?? "l1", n2 = [...r2.kycProvidedFields ?? [], "id_number"], a2 = de(o2, n2);
  vl({ stripeSession: { ...t2, context: { ...r2, kycSsn: e2, kycProvidedFields: n2 } }, ...a2 ? { state: { status: "stripe-flow", step: a2 } } : {} }), a2 || _t();
}, Tt = (e2) => {
  var _a2;
  return ((_a2 = e2.kycAddress) == null ? void 0 : _a2.country) ? e2.kycAddress.country : "US";
}, Rt = async (e2) => {
  let t2 = Ae();
  try {
    let r2 = t2.context.pendingEmail;
    if (!r2) throw Error("No email in session context");
    if ("create" === e2) {
      let e3 = t2.context.config.userPhone;
      if (!e3) return void at("collect-contact");
      let o3 = Tt(t2.context), i2 = await t2.onramp.registerLinkUser(r2, e3, o3);
      if (!Pe()) return;
      if (!i2.created) throw Error("Failed to register Stripe Link account");
    }
    let o2 = await vt(t2.privy, { email: r2, environment: t2.context.config.environment });
    if (!Pe()) return;
    if ("created" !== o2.status) throw Error("Failed to create Link auth intent after registration");
    vl({ stripeSession: { ...t2, context: { ...t2.context, authIntentId: o2.id } }, state: { status: "stripe-flow", step: "authenticating" } });
    let n2 = await Me(t2.onramp.authenticate(o2.id, ((e3) => {
      Pe() && ("success" === e3.result && e3.crypto_customer_id ? Ct(e3.crypto_customer_id, o2.id) : Ye(Error(`Link authentication ${e3.result}`)));
    })), 3e4, Ie());
    Pe() && n2 && vl({ stripeElement: n2 });
  } catch (e3) {
    Ye(e3);
  }
}, Mt = (e2) => {
  let t2 = Ae(), r2 = t2.context, o2 = [...r2.kycProvidedFields ?? [], "nationalities"];
  vl({ stripeSession: { ...t2, context: { ...r2, kycNationalities: e2, kycProvidedFields: o2 } } }), at(me("collect-nationality"));
}, Ft = (e2) => {
  let t2 = Ae(), r2 = He([e2], e2.id);
  vl({ stripeSession: { ...t2, context: { ...t2.context, paymentToken: e2.id, paymentMethodLabel: r2 } } }), Ze({ paymentToken: e2.id, loader: "inline" });
}, Dt = async (e2) => {
  let t2 = Ae();
  try {
    let r2 = t2.context.pendingEmail;
    if (!r2) throw Error("No email in session context");
    let o2 = Tt(t2.context), i2 = await t2.onramp.registerLinkUser(r2, e2, o2);
    if (!Pe()) return;
    if (!i2.created) throw Error("Failed to register Stripe Link account");
    await Rt("connect");
  } catch (e3) {
    Ye(e3);
  }
}, Ut = async () => {
  try {
    if (!Pe()) return;
    let e2 = Ae(), t2 = e2.context.stripeSessionId;
    if (!t2) return;
    let r2 = await ct(e2.privy, t2);
    if (!Pe()) return;
    let o2 = e2.context.checkoutDetails;
    if (o2) {
      let e3 = o2.currencySymbol, t3 = { ...o2, quoteExpiresAt: r2.quoteExpiresAt, sourceAmount: r2.sourceTotalAmount ?? o2.sourceAmount, destinationAmount: r2.destinationAmount ?? o2.destinationAmount, fee: r2.fee && e3 ? `${e3}${r2.fee}` : o2.fee };
      vl({ stripeConfirmCheckoutDetails: t3 });
    }
  } catch (e2) {
    Ye(e2);
  }
}, Bt = ({ height: r2 = 24, ...o2 }) => /* @__PURE__ */ u("svg", { height: r2, viewBox: "120 0 72 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o2, children: [/* @__PURE__ */ u("path", { d: "M132.258 24C138.856 24 144.205 18.6274 144.205 12C144.205 5.37257 138.856 0 132.258 0C125.66 0 120.312 5.37257 120.312 12C120.312 18.6274 125.66 24 132.258 24Z", fill: "#00D66F" }), /* @__PURE__ */ u("path", { d: "M156.317 3.81824C156.317 2.69024 157.263 1.77344 158.377 1.77344C159.49 1.77344 160.436 2.69504 160.436 3.81824C160.436 4.94144 159.524 5.88704 158.377 5.88704C157.23 5.88704 156.317 4.97024 156.317 3.81824Z", fill: "#011E0F" }), /* @__PURE__ */ u("path", { d: "M150.205 2.06143H153.789V22.2214H150.205V2.06143Z", fill: "#011E0F" }), /* @__PURE__ */ u("path", { d: "M160.188 7.82143H156.575V22.2214H160.188V7.82143Z", fill: "#011E0F" }), /* @__PURE__ */ u("path", { d: "M186.16 14.5319C188.879 12.8519 190.728 10.3511 191.459 7.81665H187.847C186.905 10.2359 184.745 12.0551 182.37 12.8279V2.05665H178.758V22.2167H182.37V16.2214C185.128 16.9126 187.307 19.3079 188.052 22.2167H191.689C191.134 19.1639 189.056 16.3079 186.16 14.5319Z", fill: "#011E0F" }), /* @__PURE__ */ u("path", { d: "M166.591 9.43425C167.537 8.17185 169.382 7.43744 170.878 7.43744C173.668 7.43744 175.976 9.48705 175.981 12.5831V22.2167H172.369V13.3846C172.369 12.1126 171.805 10.6438 169.974 10.6438C167.824 10.6438 166.586 12.5591 166.586 14.8007V22.2262H162.974V7.83104H166.591V9.43425Z", fill: "#011E0F" }), /* @__PURE__ */ u("path", { d: "M131.61 4.7998H127.958C128.668 7.80941 130.743 10.3822 133.339 11.9998C130.738 13.6174 128.668 16.1902 127.958 19.1998H131.61C132.515 16.4158 135.021 13.9966 138.1 13.5022V10.4926C135.016 10.003 132.51 7.58381 131.61 4.7998Z", fill: "#011E0F" })] }), jt = gt$1.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`, zt = gt$1.input`
  && {
    width: 100%;
    padding: 0.75rem 1rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${(e2) => e2.$hasError ? "var(--privy-color-error, #dc3545)" : "var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 1px var(--privy-color-accent-light);
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`, qt = gt$1.p`
  color: var(--privy-color-error, #dc3545);
  font-size: 0.8125rem;
  margin: 0.375rem 0 0;
`, Vt = gt$1.select`
  && {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${(e2) => e2.$hasError ? "var(--privy-color-error, #dc3545)" : "var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.15s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2rem;

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 1px var(--privy-color-accent-light);
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`, Kt = gt$1.div`
  display: flex;
  gap: 0.5rem;
`, Ot = gt$1(ComboboxRoot)`
  width: 100%;
`, Wt = gt$1.div`
  position: relative;
  width: 100%;
`, Ht = gt$1(ComboboxInput)`
  && {
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--privy-color-foreground);
    background: var(--privy-color-background);
    border: 1px solid
      ${(e2) => e2.$hasError ? "var(--privy-color-error, #dc3545)" : "var(--privy-color-foreground-4)"};
    border-radius: 0.5rem;
    outline: none;
    box-sizing: border-box;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      background-color 0.15s ease;

    &:hover:not(:disabled) {
      border-color: var(--privy-color-foreground-3);
    }

    &:focus {
      border-color: var(--privy-color-accent);
      box-shadow: 0 0 0 2px var(--privy-color-accent-light);
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }

    &:disabled {
      color: var(--privy-color-foreground-3);
      background: var(--privy-color-background-2);
      cursor: not-allowed;
    }

    @media (min-width: 441px) {
      font-size: 0.875rem;
    }
  }
`, Yt = gt$1.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--privy-color-foreground-2);
  pointer-events: none;
  transform: translateY(-50%);

  ${Ht}:focus + & {
    color: var(--privy-color-accent);
  }

  ${Ht}:disabled + & {
    color: var(--privy-color-foreground-3);
  }
`, Zt = ComboboxPortal, Qt = gt$1(ComboboxPositioner)`
  z-index: 2147483647;
`, Gt = gt$1(ComboboxPopup)`
  width: var(--anchor-width);
  max-height: min(16rem, var(--available-height));
  overflow: auto;
  padding: 0.25rem 0;
  font-family: inherit;
  background: var(--privy-color-background);
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 8%);
  box-sizing: border-box;
`, Xt = gt$1(ComboboxList)`
  display: flex;
  flex-direction: column;
  gap: 0;
`, Jt = gt$1.span`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  line-height: 1rem;
`, er = gt$1(ComboboxItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.125rem;
  padding: 0 0.75rem;
  font-family: inherit;
  color: var(--privy-color-foreground);
  background: transparent;
  border: 0;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  span {
    font-family: inherit;
  }

  &:hover,
  &[data-highlighted] {
    background: var(--privy-color-background-2);
  }

  &[data-focus-visible] {
    background: var(--privy-color-background-2);
    box-shadow: inset 0 0 0 1px var(--privy-color-accent-light);
  }

  &[data-selected] {
    background: transparent;
    color: var(--privy-color-foreground);
  }

  &[data-disabled] {
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }
`, tr = gt$1.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0;
  margin: 0.25rem 0 0;
  list-style: none;
`, rr = gt$1.li`
  display: block;
`, or = gt$1(Z)`
  && {
    gap: 0.375rem;
    width: auto;
    height: 2rem;
    padding: 0 0.625rem;
    color: var(--privy-color-foreground);
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
gt$1.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: var(--privy-color-background-2, #f9f9f9);
  border-radius: var(--privy-border-radius-md, 0.5rem);
`, gt$1.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, gt$1.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
`, gt$1.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--privy-color-foreground);
`;
const ir = gt$1.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1rem 0.75rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 0.75rem;
`, nr = gt$1.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`, ar = gt$1.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`, sr = gt$1.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
`, lr = gt$1.img`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100px;
  border: 1.5px solid white;
`, cr = gt$1.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`, dr = gt$1.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground-3);
`, ur = gt$1.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`, mr = gt$1.div`
  display: flex;
  flex-direction: column;
`, pr = gt$1.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--privy-color-foreground-4);
  font-size: 0.75rem;
  line-height: 1.125rem;

  &:last-child {
    border-bottom: none;
  }
`, yr = gt$1.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`, hr = gt$1.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
`, fr = gt$1.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding: 0.75rem 1rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: 999px;
  color: var(--privy-color-foreground);
  background: var(--privy-color-background);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`, gr = ({ onClose: r2, onEmailChosen: o2, onEmailBack: i2, userEmail: n$1 }) => {
  let [a2, s2] = d(n$1 ?? ""), [l, c2] = d(null), [d$1, u$1] = d(false), m2 = async () => {
    let e2 = a2.trim();
    if (e2) if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e2)) {
      u$1(true);
      try {
        await (o2 == null ? void 0 : o2(e2));
      } catch {
        u$1(false);
      }
    } else c2("Enter a valid email address");
    else c2("Email is required");
  };
  return u(n, { showClose: true, onClose: r2, showBack: !!i2, onBack: i2 ?? void 0, icon: /* @__PURE__ */ u(Bt, { height: 24 }), iconVariant: "logo", title: "Add email", subtitle: "Enter your email address to continue with Link.", primaryCta: { label: "Submit", onClick: m2, loading: d$1 }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(zt, { type: "email", placeholder: "email@example.com", value: a2, onChange: (e2) => {
    s2(e2.target.value), c2(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && m2(), $hasError: !!l, autoFocus: true }), l && /* @__PURE__ */ u(qt, { children: l })] }) });
};
let vr = { addressPlaceholder: "Street and house number", addressAriaLabel: "Street and house number", cityPlaceholder: "City", cityAriaLabel: "City", postalPlaceholder: "Postal code", postalAriaLabel: "Postal code", postalInputMode: "text", postalMaxWidth: "7rem", postalFirst: true, missingAddressError: "Street and house number, city, and postal code are required" }, br = { addressPlaceholder: "Street address", addressAriaLabel: "Street address", cityPlaceholder: "City", cityAriaLabel: "City", postalPlaceholder: "ZIP", postalAriaLabel: "ZIP code", postalInputMode: "numeric", postalMaxWidth: "6.25rem", postalFirst: false, missingAddressError: "Street address, city, and ZIP are required", adminPlaceholder: "State", adminAriaLabel: "State", adminRequiredError: "State is required", adminMaxWidth: "5.5rem", adminOptions: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"] }, Cr = { US: br, IE: { ...vr, addressPlaceholder: "Street address", addressAriaLabel: "Street address", cityPlaceholder: "Town or city", cityAriaLabel: "Town or city", postalPlaceholder: "Eircode", postalAriaLabel: "Eircode", missingAddressError: "Street address, town or city, and Eircode are required", adminPlaceholder: "County", adminAriaLabel: "County", adminRequiredError: "County is required" } }, wr = (e2) => {
  var _a2;
  return "US" === e2 ? "United States" : ((_a2 = ht.find(((t2) => t2.code === e2))) == null ? void 0 : _a2.name) ?? e2;
};
const kr = ({ onClose: t2, onAddressSubmitted: r2, onBack: o2 }) => {
  let i2 = Ml(((e2) => {
    var _a2;
    return ((_a2 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a2.context.kycRegion) ?? "us";
  })), n2 = Ml(((e2) => {
    var _a2, _b;
    return ((_b = (_a2 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a2.context.kycAddress) == null ? void 0 : _b.country) ?? "";
  }));
  return u(_r, { onClose: t2, onAddressSubmitted: r2, onBack: o2, region: i2, country: "eu" === i2 ? n2 : "US" });
}, _r = ({ onClose: o2, onAddressSubmitted: i2, onBack: n$1, region: a2, country: s2 }) => {
  var _a2;
  let l = "eu" === a2, [c2, d$1] = d(""), [u$1, m2] = d(""), [p2, y2] = d(""), [h2, f] = d(""), [g2, v] = d(null), [b, C] = d(false), w2 = ((e2, t2) => "eu" !== e2 ? br : (t2 ? Cr[t2] : null) ?? vr)(a2, s2), k2 = !!w2.adminPlaceholder, _2 = () => {
    c2.trim() && u$1.trim() && h2.trim() ? s2 ? !k2 || p2.trim() ? (C(true), i2 == null ? void 0 : i2({ addressLine1: c2.trim(), city: u$1.trim(), state: p2.trim(), postalCode: h2.trim(), country: s2 })) : v(w2.adminRequiredError ?? "State is required") : v("Country is required") : v(w2.missingAddressError);
  };
  return u(n, { showClose: true, onClose: o2, showBack: !!n$1, onBack: n$1 ?? void 0, icon: MapPin, title: "Add address", subtitle: "Enter your residential address as it appears on your government-issued ID.", primaryCta: { label: "Continue", onClick: _2, loading: b }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(zt, { placeholder: w2.addressPlaceholder, value: c2, onChange: (e2) => {
    d$1(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _2(), $hasError: !!g2 && !c2.trim(), autoFocus: true, "aria-label": w2.addressAriaLabel, autoComplete: "address-line1" }), l ? /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(Kt, { children: [w2.postalFirst && /* @__PURE__ */ u(zt, { placeholder: w2.postalPlaceholder, value: h2, onChange: (e2) => {
    f(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _2(), $hasError: !!g2 && !h2.trim(), style: { maxWidth: w2.postalMaxWidth }, "aria-label": w2.postalAriaLabel, autoComplete: "postal-code", inputMode: w2.postalInputMode }), /* @__PURE__ */ u(zt, { placeholder: w2.cityPlaceholder, value: u$1, onChange: (e2) => {
    m2(e2.target.value), v(null);
  }, $hasError: !!g2 && !u$1.trim(), "aria-label": w2.cityAriaLabel, autoComplete: "address-level2" }), !w2.postalFirst && /* @__PURE__ */ u(zt, { placeholder: w2.postalPlaceholder, value: h2, onChange: (e2) => {
    f(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _2(), $hasError: !!g2 && !h2.trim(), style: { maxWidth: w2.postalMaxWidth }, "aria-label": w2.postalAriaLabel, autoComplete: "postal-code", inputMode: w2.postalInputMode })] }), /* @__PURE__ */ u(Kt, { children: [w2.adminPlaceholder && /* @__PURE__ */ u(zt, { placeholder: w2.adminPlaceholder, value: p2, onChange: (e2) => {
    y2(e2.target.value), v(null);
  }, $hasError: !!g2 && !p2.trim(), "aria-label": w2.adminAriaLabel ?? w2.adminPlaceholder, autoComplete: "address-level1" }), /* @__PURE__ */ u(zt, { value: wr(s2), readOnly: true, $hasError: false, style: { opacity: 0.7 }, "aria-label": "Country", autoComplete: "country-name", tabIndex: -1 })] })] }) : /* @__PURE__ */ u(Kt, { children: [/* @__PURE__ */ u(zt, { placeholder: w2.cityPlaceholder, value: u$1, onChange: (e2) => {
    m2(e2.target.value), v(null);
  }, $hasError: !!g2 && !u$1.trim(), "aria-label": w2.cityAriaLabel, autoComplete: "address-level2" }), /* @__PURE__ */ u(Vt, { value: p2, onChange: (e2) => {
    y2(e2.target.value), v(null);
  }, $hasError: !!g2 && !p2, style: { maxWidth: w2.adminMaxWidth }, "aria-label": w2.adminAriaLabel, autoComplete: "address-level1", children: [/* @__PURE__ */ u("option", { value: "", disabled: true, children: w2.adminPlaceholder }), (_a2 = w2.adminOptions) == null ? void 0 : _a2.map(((t2) => /* @__PURE__ */ u("option", { value: t2, children: t2 }, t2)))] }), /* @__PURE__ */ u(zt, { placeholder: w2.postalPlaceholder, value: h2, onChange: (e2) => {
    f(e2.target.value), v(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && _2(), $hasError: !!g2 && !h2.trim(), style: { maxWidth: w2.postalMaxWidth }, "aria-label": w2.postalAriaLabel, autoComplete: "postal-code", inputMode: w2.postalInputMode })] }), g2 && /* @__PURE__ */ u(qt, { children: g2 })] }) });
}, xr = ({ onClose: r2, onSubmit: o2 }) => {
  let [i2, n$1] = d(""), [a2, s2] = d(""), [l, c2] = d(null), d$1 = () => {
    i2.trim() ? a2 ? o2({ city: i2.trim(), country: a2 }) : c2("Birth country is required") : c2("Birth city is required");
  };
  return u(n, { showClose: true, onClose: r2, icon: MapPin, title: "Place of birth", subtitle: "Enter your city and country of birth.", primaryCta: { label: "Continue", onClick: d$1 }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(zt, { placeholder: "City of birth", value: i2, onChange: (e2) => {
    n$1(e2.target.value), c2(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && d$1(), $hasError: !!l && !i2.trim(), autoFocus: true, "aria-label": "City of birth", autoComplete: "off" }), /* @__PURE__ */ u(Vt, { value: a2, onChange: (e2) => {
    s2(e2.target.value), c2(null);
  }, $hasError: !!l && !a2, "aria-label": "Country of birth", autoComplete: "country", children: [/* @__PURE__ */ u("option", { value: "", disabled: true, children: "Select birth country" }), ht.map(((t2) => /* @__PURE__ */ u("option", { value: t2.code, children: t2.name }, t2.code)))] }), l && /* @__PURE__ */ u(qt, { children: l })] }) });
}, Sr = ({ onClose: r2, onSubmit: o2 }) => {
  let [i2, n$1] = d(""), [a2, s2] = d(null);
  return u(n, { showClose: true, onClose: r2, icon: Globe, title: "Country of residence", subtitle: "Select your country of residence. This determines your verification requirements.", primaryCta: { label: "Continue", onClick: () => {
    i2 ? o2(i2) : s2("Please select your country of residence");
  } }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(Vt, { value: i2, onChange: (e2) => {
    n$1(e2.target.value), s2(null);
  }, $hasError: !!a2, "aria-label": "Country of residence", autoComplete: "country", children: [/* @__PURE__ */ u("option", { value: "", disabled: true, children: "Select country" }), ht.map(((t2) => /* @__PURE__ */ u("option", { value: t2.code, children: t2.name }, t2.code)))] }), a2 && /* @__PURE__ */ u(qt, { children: a2 })] }) });
}, Er = ({ onClose: r2, onDobSubmitted: o2, region: i2 = "us" }) => {
  let [n$1, a2] = d(""), [s2, l] = d(""), [c2, d$1] = d(""), [u$1, m2] = d(null), p2 = "eu" === i2, y2 = () => {
    let e2 = Number.parseInt(n$1, 10), t2 = Number.parseInt(s2, 10), r3 = Number.parseInt(c2, 10);
    !e2 || !t2 || !r3 || e2 < 1 || e2 > 12 || t2 < 1 || t2 > 31 || r3 < 1900 || r3 > (/* @__PURE__ */ new Date()).getFullYear() ? m2("Enter a valid date of birth") : o2 == null ? void 0 : o2({ day: t2, month: e2, year: r3 });
  }, h2 = /* @__PURE__ */ u(zt, { placeholder: "DD", value: s2, onChange: (e2) => {
    l(e2.target.value), m2(null);
  }, $hasError: !!u$1, style: { flex: 1 }, inputMode: "numeric", autoFocus: p2 });
  return u(n, { showClose: true, onClose: r2, icon: Calendar, title: "Add date of birth", subtitle: "You must be at least 18 years old.", primaryCta: { label: "Continue", onClick: y2 }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(Kt, { children: [p2 && h2, /* @__PURE__ */ u(zt, { placeholder: "MM", value: n$1, onChange: (e2) => {
    a2(e2.target.value), m2(null);
  }, $hasError: !!u$1, style: { flex: 1 }, inputMode: "numeric", autoFocus: !p2 }), !p2 && h2, /* @__PURE__ */ u(zt, { placeholder: "YYYY", value: c2, onChange: (e2) => {
    d$1(e2.target.value), m2(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && y2(), $hasError: !!u$1, style: { flex: 2 }, inputMode: "numeric" })] }), u$1 && /* @__PURE__ */ u(qt, { children: u$1 })] }) });
}, Ar = ({ onClose: r2, onSubmit: o2 }) => {
  let i2 = Ml(((e2) => {
    var _a2;
    return (_a2 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a2.context.kycMissingIdentifiers;
  })), n$1 = Ml(((e2) => {
    var _a2;
    return (_a2 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a2.context.kycMissingAlternatives;
  })), a2 = Ml(((e2) => {
    var _a2;
    return (_a2 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a2.context.kycInvalidIdentifiers;
  })), [s2, l] = d({}), [c2, d$1] = d({}), [m2, p2] = d(null);
  return u(n, { showClose: true, onClose: r2, icon: FileText, title: "Identity verification", subtitle: "Provide your national identity numbers.", primaryCta: { label: "Continue", onClick: () => {
    var _a2;
    let e2 = [];
    for (let t3 of i2 ?? []) {
      let r3 = (n$1 ?? []).find(((e3) => e3.original_missing_identifiers.includes(t3.type))) && c2[t3.type] || t3.type, o3 = (_a2 = s2[r3]) == null ? void 0 : _a2.trim();
      if (!o3) return void p2(`Please provide your ${Ee[r3] ?? r3}`);
      e2.push({ type: r3, value: o3 });
    }
    let t2 = e2.find(((e3) => !(({ type: e4, value: t3 }) => {
      let r3 = Se[e4];
      return !r3 || r3(t3);
    })(e3)));
    t2 ? p2(`Enter a valid ${Ee[t2.type] ?? t2.type}`) : o2(e2);
  } }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [(i2 ?? []).map(((r3) => {
    var _a2, _b;
    let o3 = (n$1 ?? []).find(((e2) => e2.original_missing_identifiers.includes(r3.type)));
    if (o3) {
      let i3 = c2[r3.type] || r3.type;
      return u(Kt, { children: [/* @__PURE__ */ u("select", { value: i3, onChange: (e2) => {
        d$1(((t2) => ({ ...t2, [r3.type]: e2.target.value }))), p2(null);
      }, style: { flex: "0 0 auto", padding: "6px" }, children: [r3.type, ...o3.alternative_missing_identifiers].map(((t2) => /* @__PURE__ */ u("option", { value: t2, children: Ee[t2] ?? t2 }, t2))) }), /* @__PURE__ */ u(zt, { placeholder: Ee[i3] ?? i3, value: s2[i3] ?? "", onChange: (e2) => {
        l(((t2) => ({ ...t2, [i3]: e2.target.value }))), p2(null);
      }, $hasError: !!m2 && !((_a2 = s2[i3]) == null ? void 0 : _a2.trim()) })] }, r3.type);
    }
    return u(zt, { placeholder: Ee[r3.type] ?? r3.type, value: s2[r3.type] ?? "", onChange: (e2) => {
      l(((t2) => ({ ...t2, [r3.type]: e2.target.value }))), p2(null);
    }, $hasError: !!m2 && !((_b = s2[r3.type]) == null ? void 0 : _b.trim()) }, r3.type);
  })), m2 && /* @__PURE__ */ u(qt, { children: m2 }), a2 && a2.length > 0 && /* @__PURE__ */ u(qt, { children: ["Invalid format for:", " ", a2.map(((e2) => Ee[e2] ?? e2)).join(", ")] })] }) });
}, Pr = ({ onClose: r2, onNameSubmitted: o2, isSandbox: i2 }) => {
  let [n$1, a2] = d(""), [s2, l] = d(i2 ? "Verified" : ""), [c2, d$1] = d(null), u$1 = () => {
    n$1.trim() && s2.trim() ? o2 == null ? void 0 : o2({ firstName: n$1.trim(), lastName: s2.trim() }) : d$1("First and last name are required");
  };
  return u(n, { showClose: true, onClose: r2, icon: User, title: "Add name", subtitle: "Please enter your full legal name as it appears on your government-issued ID.", primaryCta: { label: "Continue", onClick: u$1 }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(zt, { placeholder: "First name", value: n$1, onChange: (e2) => {
    a2(e2.target.value), d$1(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && u$1(), $hasError: !!c2 && !n$1.trim(), autoFocus: true }), /* @__PURE__ */ u(zt, { placeholder: "Last name", value: s2, onChange: (e2) => {
    l(e2.target.value), d$1(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && u$1(), $hasError: !!c2 && !s2.trim(), readOnly: i2 }), c2 && /* @__PURE__ */ u(qt, { children: c2 })] }) });
}, Ir = ({ onClose: r2, onSubmit: o2 }) => {
  let [i2, n$1] = d([]), [a2, s2] = d(""), [l, c2] = d(null), d$1 = A(false), u$1 = ht.filter(((e2) => !i2.includes(e2.code))), m2 = i2.map(((e2) => ht.find(((t2) => t2.code === e2)))).filter(((e2) => !!e2)), p2 = (e2) => {
    let t2 = e2.trim().toLowerCase();
    return ht.find(((e3) => e3.code.toLowerCase() === t2 || e3.name.toLowerCase() === t2));
  }, y2 = (e2) => {
    let t2 = e2.trim().toLowerCase();
    return t2 ? ht.filter(((e3) => e3.code.toLowerCase().includes(t2) || e3.name.toLowerCase().includes(t2))) : ht;
  }, h2 = y2(a2), f = h2.map(((e2) => e2.name)), g2 = (e2) => {
    let t2 = y2(e2), r3 = p2(e2) ?? (1 === t2.length ? t2[0] : void 0);
    r3 && (n$1(((e3) => e3.includes(r3.code) ? e3 : [...e3, r3.code])), s2(""), c2(null));
  };
  return u(n, { showClose: true, onClose: r2, icon: Globe, title: "Nationality", subtitle: "Select your nationality or nationalities.", primaryCta: { label: "Continue", onClick: () => {
    let e2 = p2(a2), t2 = e2 && !i2.includes(e2.code) ? [...i2, e2.code] : i2;
    t2.length ? o2(t2) : c2("Please select at least one nationality");
  } }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(Ot, { items: f, value: null, inputValue: a2, onInputValueChange: (e2) => {
    d$1.current && (d$1.current = false, p2(e2)) || s2(e2);
  }, onValueChange: (e2) => ((e3) => {
    e3 && (d$1.current = true, g2(e3));
  })("string" == typeof e2 ? e2 : null), children: [/* @__PURE__ */ u(Wt, { children: [/* @__PURE__ */ u(Ht, { $hasError: !!l, "aria-label": "Nationality", autoComplete: "country", disabled: !u$1.length, placeholder: i2.length ? "Add another nationality" : "Search nationality", onKeyDown: (e2) => {
    "Enter" === e2.key && (e2.preventDefault(), g2(e2.currentTarget.value));
  } }), /* @__PURE__ */ u(Yt, { "aria-hidden": "true", children: /* @__PURE__ */ u(Search, { size: 18 }) })] }), /* @__PURE__ */ u(Zt, { children: /* @__PURE__ */ u(Qt, { side: "bottom", sideOffset: 4, collisionAvoidance: { side: "none", align: "shift", fallbackAxisSide: "none" }, children: /* @__PURE__ */ u(Gt, { children: /* @__PURE__ */ u(Xt, { children: (r3) => {
    let o3 = h2.find(((e2) => e2.name === r3));
    return o3 ? /* @__PURE__ */ u(er, { value: o3.name, children: [/* @__PURE__ */ u("span", { children: o3.name }), /* @__PURE__ */ u(Jt, { children: i2.includes(o3.code) ? /* @__PURE__ */ u(Check, { size: 16 }) : o3.code })] }, o3.code) : null;
  } }) }) }) })] }), !!m2.length && /* @__PURE__ */ u(tr, { "aria-label": "Selected nationalities", children: m2.map(((r3) => /* @__PURE__ */ u(rr, { children: /* @__PURE__ */ u(or, { type: "button", onClick: () => ((e2) => {
    n$1(((t2) => t2.filter(((t3) => t3 !== e2)))), c2(null);
  })(r3.code), "aria-label": `Remove ${r3.name}`, size: "sm", children: [/* @__PURE__ */ u("span", { children: r3.name }), /* @__PURE__ */ u(X$1, { size: 14 })] }) }, r3.code))) }), l && /* @__PURE__ */ u(qt, { children: l })] }) });
};
let Lr = (e2) => e2.replace(/[\s()-]/g, "");
const $r = ({ onClose: t2, onPhoneSubmitted: r2, onPhoneBack: o2, defaultCountry: i2 }) => {
  let n$1 = A(null), [a2, s2] = d(false), [l, c2] = d(false);
  return u(n, { showClose: true, onClose: t2, showBack: !!o2, onBack: o2 ?? void 0, icon: /* @__PURE__ */ u(Bt, { height: 24 }), iconVariant: "logo", title: "Add phone number", subtitle: "Enter your phone number to continue with Link.", primaryCta: { label: "Submit", onClick: () => {
    var _a2;
    ((_a2 = n$1.current) == null ? void 0 : _a2.isValid) && (c2(true), r2 == null ? void 0 : r2(Lr(n$1.current.qualifiedPhoneNumber)));
  }, disabled: !a2, loading: l }, watermark: true, children: /* @__PURE__ */ u(w$1, { stacked: true, noIncludeSubmitButton: true, hideRecent: true, defaultCountry: i2, onChange: (e2) => {
    n$1.current = e2, s2(e2.isValid);
  }, onSubmit: async (e2) => {
    c2(true), r2 == null ? void 0 : r2(Lr(e2.qualifiedPhoneNumber));
  } }) });
}, Nr = ({ onClose: r2, onSsnSubmitted: o2, appName: i2 }) => {
  let [n$1, a2] = d(""), [s2, l] = d(null), c2 = () => {
    let e2 = n$1.replace(/\D/g, "");
    9 === e2.length ? o2 == null ? void 0 : o2(e2) : l("Enter your full 9-digit SSN");
  };
  return u(n, { showClose: true, onClose: r2, icon: Lock, title: "Add social security number", subtitle: `Required to verify your identity. ${i2} will not store your SSN.`, primaryCta: { label: "Continue", onClick: c2 }, watermark: true, children: /* @__PURE__ */ u(jt, { children: [/* @__PURE__ */ u(zt, { placeholder: "XXX-XX-XXXX", value: n$1, onChange: (e2) => {
    a2(e2.target.value), l(null);
  }, onKeyDown: (e2) => "Enter" === e2.key && c2(), $hasError: !!s2, type: "password", inputMode: "numeric", autoComplete: "off", autoFocus: true }), s2 && /* @__PURE__ */ u(qt, { children: s2 })] }) });
}, Tr = ({ onClose: r2, amount: o2, appName: i2, currencySymbol: n$1, paymentMethodLabel: a2, fee: s2, destinationAmount: l, destinationToken: c2, destinationNetwork: d$1, tokenIconUrl: u$1, networkIconUrl: m$1, opts: p2, onConfirmCheckout: y$1, quoteExpiresAt: h2, onRefreshQuote: f, initialLoading: g2 = false }) => {
  let [v, b] = d(g2), [C, w2] = d(false), k2 = A(null);
  y((() => {
    if (!h2 || !f) return;
    let e2 = Math.max(h2 - Date.now() - 1e4, 0);
    return k2.current = setTimeout((() => {
      w2(true), f().finally((() => w2(false)));
    }), e2), () => {
      k2.current && clearTimeout(k2.current);
    };
  }), [h2, f]);
  let _2 = (p2 == null ? void 0 : p2.destination.address) ?? "", x2 = A$1(_2, 4, 4);
  return u(n, { showClose: true, onClose: r2, title: "Approve transaction", subtitle: `${i2} wants your permission for this transaction.`, primaryCta: { label: "Approve", onClick: () => {
    k2.current && clearTimeout(k2.current), b(true), y$1 == null ? void 0 : y$1();
  }, loading: v, disabled: C }, watermark: true, children: /* @__PURE__ */ u(ir, { children: [u$1 || m$1 ? /* @__PURE__ */ u(nr, { children: [/* @__PURE__ */ u(ar, { children: [u$1 && /* @__PURE__ */ u(sr, { src: u$1, alt: c2 }), m$1 && /* @__PURE__ */ u(lr, { src: m$1, alt: d$1 })] }), /* @__PURE__ */ u(cr, { children: [/* @__PURE__ */ u(dr, { children: "You receive" }), /* @__PURE__ */ u(ur, { children: [l, " ", c2, " on ", d$1] })] })] }) : /* @__PURE__ */ u(cr, { children: [/* @__PURE__ */ u(dr, { children: "You receive" }), /* @__PURE__ */ u(ur, { children: [l, " ", c2, " on ", d$1] })] }), /* @__PURE__ */ u(mr, { children: [/* @__PURE__ */ u(pr, { children: [/* @__PURE__ */ u(yr, { children: "Total amount" }), /* @__PURE__ */ u(hr, { children: [n$1, o2] })] }), a2 && /* @__PURE__ */ u(pr, { children: [/* @__PURE__ */ u(yr, { children: "From" }), /* @__PURE__ */ u(hr, { children: a2 })] }), /* @__PURE__ */ u(pr, { children: [/* @__PURE__ */ u(yr, { children: "To" }), /* @__PURE__ */ u(m, { iconOnly: true, value: _2, iconSize: 16, children: x2 })] }), /* @__PURE__ */ u(pr, { children: [/* @__PURE__ */ u(yr, { children: "Estimated fee" }), /* @__PURE__ */ u(hr, { children: s2 })] }), /* @__PURE__ */ u(pr, { children: [/* @__PURE__ */ u(yr, { children: "Processing time" }), /* @__PURE__ */ u(hr, { children: "Instant" })] })] })] }) });
}, Rr = ({ onClose: t2 }) => {
  let r2 = A(false), [o2, n$1] = d(null);
  return y((() => {
    r2.current || (r2.current = true, (async () => {
      let e2 = Ae().onramp;
      try {
        if (!e2.promptUserAttestation) throw Error("Stripe onramp promptUserAttestation is unavailable");
        return await e2.promptUserAttestation("eu_carf", (({ result: e3 }) => {
          if (Pe() && "confirmed" === e3) {
            let e4 = Ae(), t3 = [...e4.context.kycProvidedFields ?? [], "attestation"];
            vl({ stripeSession: { ...e4, context: { ...e4.context, kycProvidedFields: t3 } } }), at(me("eu-attestation"));
          }
        }));
      } catch (e3) {
        return Ye(e3), null;
      }
    })().then(((e2) => {
      e2 && n$1(e2);
    })));
  }), []), o2 ? /* @__PURE__ */ u(it, { element: o2, minHeight: 480 }) : /* @__PURE__ */ u(n, { showClose: true, onClose: t2, iconVariant: "loading", title: "Loading attestation...", watermark: true });
}, Mr = ({ size: r2 = 64, ...o2 }) => /* @__PURE__ */ u("svg", { width: r2, height: r2, viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o2, children: [/* @__PURE__ */ u("path", { d: "M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z", fill: "#00D66F" }), /* @__PURE__ */ u("path", { d: "M30.5274 12.8003H20.6587C22.5787 20.8259 28.1851 27.6867 35.1995 32.0003C28.1723 36.3139 22.5787 43.1747 20.6587 51.2003H30.5274C32.9722 43.7763 39.7435 37.3251 48.0634 36.0067V27.9811C39.7307 26.6755 32.9594 20.2243 30.5274 12.8003Z", fill: "#011E0F" })] }), Fr = ({ mode: t2, onClose: r2, onLinkAccountConfirmed: o2, onLinkAccountBack: i2, userEmail: n$1 }) => {
  let a2 = le$1(), s2 = (a2 == null ? void 0 : a2.name) ?? "This app", l = "connect" === t2 ? { title: "Connect to Link", subtitle: `${s2} uses Link for quicker and easier checkout.`, description: `${s2} will be able to view your Link account details, identity information, and saved payments.`, cta: "Continue" } : { title: "Create a Link account", subtitle: "With Link, you can securely save your information for faster checkout.", description: null, cta: "Continue" };
  return u(n, { showClose: true, onClose: r2, showBack: !!i2, onBack: i2 ?? void 0, icon: /* @__PURE__ */ u(Mr, { size: 64 }), iconVariant: "logo", title: l.title, subtitle: l.subtitle, primaryCta: { label: l.cta, onClick: () => o2 == null ? void 0 : o2() }, helpText: l.description ?? void 0, watermark: true, children: "create" === t2 && n$1 && /* @__PURE__ */ u(fr, { children: n$1 }) });
}, Dr = ({ onClose: r2, tokens: o2, onSelectToken: i2, onAddNew: n$1, isLoading: a2 }) => {
  var _a2;
  let [s2, l] = d(((_a2 = o2[0]) == null ? void 0 : _a2.id) ?? null);
  return u(n, { showClose: true, onClose: r2, icon: /* @__PURE__ */ u(Bt, { height: 24 }), iconVariant: "logo", title: "Select payment method", subtitle: "Choose from your saved cards. Debit cards typically have higher success rates than credit cards.", primaryCta: { label: "Continue", onClick: () => {
    let e2 = o2.find(((e3) => e3.id === s2));
    e2 && i2(e2);
  }, loading: a2, disabled: !s2 }, watermark: true, children: /* @__PURE__ */ u(Br, { children: /* @__PURE__ */ u(jr, { children: [o2.map(((r3) => {
    var _a3, _b, _c;
    return /* @__PURE__ */ u(zr, { $selected: s2 === r3.id, onClick: () => l(r3.id), disabled: a2, children: [/* @__PURE__ */ u(qr, { children: /* @__PURE__ */ u(CreditCard, { size: 16 }) }), /* @__PURE__ */ u(Vr, { children: [/* @__PURE__ */ u(Kr, { children: Ur((_a3 = r3.card) == null ? void 0 : _a3.brand, (_b = r3.card) == null ? void 0 : _b.funding) }), /* @__PURE__ */ u(Or, { children: [/* @__PURE__ */ u(Wr, { children: "••••" }), " ", ((_c = r3.card) == null ? void 0 : _c.last4) ?? ""] })] })] }, r3.id);
  })), /* @__PURE__ */ u(Hr, { onClick: n$1, disabled: a2, children: [/* @__PURE__ */ u(Plus, { size: 14 }), /* @__PURE__ */ u("span", { children: "Add new card" })] })] }) }) });
};
let Ur = (e2, t2) => {
  if (!e2) return "Card";
  let r2 = e2.charAt(0).toUpperCase() + e2.slice(1);
  return t2 ? `${r2} ${t2.charAt(0).toUpperCase()}${t2.slice(1)}` : r2;
}, Br = gt$1.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`, jr = gt$1.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`, zr = gt$1.button`
  && {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    background: ${(e2) => e2.$selected ? "var(--privy-color-background-2, #f8f9ff)" : "transparent"};
    border: ${(e2) => e2.$selected ? "1.5px solid var(--privy-color-accent)" : "1px solid var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md, 0.5rem);
    cursor: pointer;
    transition: border-color 0.15s ease;
    box-shadow: ${(e2) => e2.$selected ? "0px 2px 6px rgba(50, 50, 93, 0.06), 0px 1px 1.5px rgba(0, 0, 0, 0.06)" : "none"};
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`, qr = gt$1.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--privy-color-foreground-3);
`, Vr = gt$1.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`, Kr = gt$1.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  letter-spacing: -0.15px;
`, Or = gt$1.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`, Wr = gt$1.span`
  font-weight: 500;
`, Hr = gt$1.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: var(--privy-color-accent);
    cursor: pointer;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const Yr = ({ onClose: t2, onVerified: r2 }) => {
  let o2 = A(false), [i2, n$1] = d(false), a2 = q((async () => {
    n$1(false);
    let e2 = await (async (e3 = {}) => {
      var _a2;
      let t3 = Ae();
      try {
        let r3 = await t3.onramp.verifyDocuments();
        if (!Pe()) return "inactive";
        if ("abandoned" === (r3 == null ? void 0 : r3.result)) return "abandoned";
        at("kyc");
        let o3 = await r$1({ operation: () => ce(t3.privy, { environment: t3.context.config.environment }), until: (e4) => {
          var _a3;
          if ("active" !== e4.status) return false;
          let t4 = (_a3 = e4.kyc_tiers) == null ? void 0 : _a3.find(((e5) => "l2" === e5.tier));
          return "verified" === (t4 == null ? void 0 : t4.verification_status);
        }, delay: 0, interval: Ue, attempts: Math.ceil(30), signal: Ie() });
        if (!Pe() || "aborted" === o3.status) return "inactive";
        if ("max_attempts" === o3.status) {
          let e4 = await ce(t3.privy, { environment: t3.context.config.environment });
          if ("active" === e4.status) {
            let t4 = (_a2 = e4.kyc_tiers) == null ? void 0 : _a2.find(((e5) => "l2" === e5.tier));
            if ("rejected" === (t4 == null ? void 0 : t4.verification_status)) {
              if (ye(e4.kyc_tiers)) throw Error("Document verification was rejected. Contact Stripe support for help.");
              throw Error("Document verification was rejected. Try again.");
            }
          }
        }
        return (e3.proceedToPayment ?? true) && await Qe(), "done";
      } catch (e4) {
        return Ye(e4), "error";
      }
    })({ proceedToPayment: !r2 });
    "abandoned" === e2 && n$1(true), "done" === e2 && (r2 == null ? void 0 : r2());
  }), [r2]);
  return y((() => {
    o2.current || (o2.current = true, a2());
  }), [a2]), /* @__PURE__ */ u(n, i2 ? { showClose: true, onClose: t2, icon: CircleX, iconVariant: "error", title: "Verification canceled", subtitle: "Try again to finish identity verification.", primaryCta: { label: "Try again", onClick: a2 }, watermark: true } : { showClose: true, onClose: t2, iconVariant: "loading", title: "Verifying identity", subtitle: "Please complete document and selfie verification...", watermark: true });
};
let Zr = [];
const Qr = ({ step: t2, element: r2, onClose: o2, isLoading: n$1 }) => {
  var _a2;
  let a2 = le$1(), s2 = (a2 == null ? void 0 : a2.name) ?? "This app", c2 = Ml(((e2) => (e2 == null ? void 0 : e2.email) ?? null)), d2 = Ml(((e2) => (e2 == null ? void 0 : e2.amount) ?? "")), m2 = Ml(((e2) => (e2 == null ? void 0 : e2.opts) ?? null)), p2 = Ml(((e2) => (e2 == null ? void 0 : e2.stripeConfirmCheckoutDetails) ?? null)), y2 = Ml(((e2) => (e2 == null ? void 0 : e2.destinationCurrencyIconUrl) ?? null)), h2 = Ml(((e2) => (e2 == null ? void 0 : e2.destinationNetworkIconUrl) ?? null)), f = Ml(((e2) => (e2 == null ? void 0 : e2.destinationCurrencySymbol) ?? null)), g2 = Ml(((e2) => {
    var _a3, _b;
    return (_b = (_a3 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a3.context.kycAddress) == null ? void 0 : _b.country;
  })), v = Ml(((e2) => {
    var _a3;
    return (_a3 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a3.context.savedPaymentTokens;
  })) ?? Zr, b = Ml(((e2) => {
    var _a3;
    return (_a3 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a3.context.documentVerificationAction;
  })), C = Ml(((e2) => {
    var _a3;
    return ((_a3 = e2 == null ? void 0 : e2.stripeSession) == null ? void 0 : _a3.context.kycRegion) ?? "us";
  })), w2 = () => {
    Sl(), vl({ state: { status: "select-amount" }, isLoading: false });
  }, k2 = b ? () => {
    let e2 = Ae();
    if ((() => {
      let e3 = Ae(), { documentVerificationAction: t4, ...r3 } = e3.context;
      vl({ stripeSession: { ...e3, context: r3 } });
    })(), "retry-checkout" === b.type) return void yt();
    let t3 = e2.context.paymentToken;
    t3 && Ze({ paymentToken: t3, loader: b.loader });
  } : void 0;
  switch (t2) {
    case "choose-email":
      return u(gr, { onClose: o2, onEmailChosen: wt, onEmailBack: w2, userEmail: c2 });
    case "connect-link":
      return u(Fr, { mode: "connect", onClose: o2, onLinkAccountConfirmed: () => {
        Rt("connect");
      }, onLinkAccountBack: w2, userEmail: c2 });
    case "create-link-account":
      return u(Fr, { mode: "create", onClose: o2, onLinkAccountConfirmed: () => {
        Rt("create");
      }, onLinkAccountBack: w2, userEmail: c2 });
    case "collect-country":
      return u(Sr, { onClose: o2, onSubmit: gt });
    case "collect-contact":
      return u($r, { onClose: o2, onPhoneSubmitted: Dt, onPhoneBack: w2, defaultCountry: g2 });
    case "collect-name":
      return u(Pr, { onClose: o2, onNameSubmitted: $t, isSandbox: "production" !== (m2 == null ? void 0 : m2.environment) });
    case "collect-dob":
      return u(Er, { onClose: o2, onDobSubmitted: Lt, region: C });
    case "collect-ssn":
      return u(Nr, { onClose: o2, onSsnSubmitted: Nt, appName: s2 });
    case "collect-address":
      return u(kr, { onClose: o2, onAddressSubmitted: It, onBack: w2 });
    case "collect-nationality":
      return u(Ir, { onClose: o2, onSubmit: Mt });
    case "collect-birth-location":
      return u(xr, { onClose: o2, onSubmit: st });
    case "collect-identifiers":
      return u(Ar, { onClose: o2, onSubmit: kt });
    case "eu-attestation":
      return u(Rr, { onClose: o2 });
    case "verify-documents":
      return u(Yr, { onClose: o2, onVerified: k2 });
    case "authenticating":
      return u(it, { element: r2, minHeight: 300, bleed: true });
    case "kyc":
      return u(n, { showClose: true, onClose: o2, iconVariant: "loading", title: "Verifying identity", subtitle: "This may take a moment...", watermark: true });
    case "select-payment":
      return u(Dr, { onClose: o2, tokens: v, onSelectToken: Ft, onAddNew: () => {
        Qe({ skipTokenCheck: true });
      }, isLoading: n$1 });
    case "payment":
      return u(n, { showClose: true, onClose: o2, showBack: true, onBack: w2, headerTitle: "Add payment method", watermark: true, children: /* @__PURE__ */ u(it, { element: r2, minHeight: 300 }) });
    case "confirm-checkout":
      return u(Tr, { onClose: o2, amount: (p2 == null ? void 0 : p2.sourceAmount) ?? d2, appName: s2, currencySymbol: (p2 == null ? void 0 : p2.currencySymbol) ?? "$", paymentMethodLabel: (p2 == null ? void 0 : p2.paymentMethodLabel) ?? null, fee: (p2 == null ? void 0 : p2.fee) ?? "Included", destinationAmount: (p2 == null ? void 0 : p2.destinationAmount) ?? d2, destinationToken: (p2 == null ? void 0 : p2.destinationToken) ?? f ?? ((_a2 = m2 == null ? void 0 : m2.destination.asset) == null ? void 0 : _a2.toUpperCase()) ?? "", destinationNetwork: (p2 == null ? void 0 : p2.destinationNetwork) ?? "", tokenIconUrl: y2, networkIconUrl: h2, opts: m2, onConfirmCheckout: yt, quoteExpiresAt: (p2 == null ? void 0 : p2.quoteExpiresAt) ?? null, onRefreshQuote: Ut });
    case "checkout":
      return u(n, { showClose: true, onClose: o2, iconVariant: "loading", watermark: true });
    default:
      return null;
  }
}, Gr = ({ onClose: t2 }) => /* @__PURE__ */ u(n, { showClose: true, onClose: t2, iconVariant: "loading", title: "Processing transaction", subtitle: "Your purchase is in progress. You can leave this screen — we’ll notify you when it’s complete.", primaryCta: { label: "Done", onClick: t2 }, watermark: true });
let Xr = { title: "Something went wrong", subtitle: "We couldn't complete your transaction. Please try again.", primaryCtaLabel: "Try again" }, Jr = { [i$1.ONRAMP_UNSUPPORTED_INFORMATION]: { ...Xr, subtitle: "This payment method is not available in your region. Try another payment method." }, [i$1.ONRAMP_TRANSACTION_LIMIT_REACHED]: { title: "Purchase limit reached", subtitle: "This purchase is above the current limit. Try a smaller amount.", primaryCtaLabel: "Edit amount" } };
const eo = (e2) => {
  let t2 = ((e3) => e3 ? "privyErrorCode" in e3 && "string" == typeof e3.privyErrorCode ? e3.privyErrorCode : "code" in e3 && "string" == typeof e3.code ? e3.code : null : null)(e2);
  return t2 ? Jr[t2] ?? Xr : Xr;
}, to = ({ onClose: t2, onRetry: r2, error: o2 }) => {
  let i2 = eo(o2);
  return u(n, { showClose: true, onClose: t2, icon: CircleX, iconVariant: "error", title: i2.title, subtitle: i2.subtitle, primaryCta: { label: i2.primaryCtaLabel, onClick: r2 }, secondaryCta: { label: "Close", onClick: t2 }, watermark: true });
}, ro = ({ onClose: t2 }) => /* @__PURE__ */ u(n, { showClose: true, onClose: t2, icon: Check, iconVariant: "success", title: "Transaction confirmed", subtitle: "Your purchase is processing. Funds should arrive in your wallet within a few minutes.", primaryCta: { label: "Done", onClick: t2 }, watermark: true });
let oo = { CREDIT_DEBIT_CARD: "card", APPLE_PAY: "Apple Pay", GOOGLE_PAY: "Google Pay", BANK: "bank deposit", BANK_TRANSFER: "bank deposit", SEPA: "bank deposit", PIX: "PIX", STRIPE_LINK: "Link" }, io = (e2) => oo[e2] ?? e2.replace(/_/g, " ").toLowerCase().replace(/^\w/, ((e3) => e3.toUpperCase())), no = { CREDIT_DEBIT_CARD: /* @__PURE__ */ u(CreditCard, { size: 14 }), APPLE_PAY: /* @__PURE__ */ u(Smartphone, { size: 14 }), GOOGLE_PAY: /* @__PURE__ */ u(Smartphone, { size: 14 }), BANK: /* @__PURE__ */ u(Building, { size: 14 }), BANK_TRANSFER: /* @__PURE__ */ u(Building, { size: 14 }), SEPA: /* @__PURE__ */ u(Building, { size: 14 }), PIX: /* @__PURE__ */ u(Wallet, { size: 14 }), STRIPE_LINK: /* @__PURE__ */ u(Mr, { size: 14 }) }, ao = (t2) => no[t2] ?? /* @__PURE__ */ u(CreditCard, { size: 14 });
const so = ({ opts: o2, onClose: i2, onBack: n$1, onEditSourceAsset: a2, onEditPaymentMethod: s2, onContinue: l, onAmountChange: c$1, amount: d2, selectedQuote: u$1, quotesWarning: m2, quotesErrors: p2, quotesCount: y2, isLoading: h2, destinationCurrencySymbol: f }) => {
  var _a2;
  let g2 = (({ destinationCurrencySymbol: e2 }) => e2 ?? "crypto")({ destinationCurrencySymbol: f });
  return u(n, { showClose: true, onClose: i2, showBack: !!n$1, onBack: n$1, headerTitle: `Buy ${g2}`, primaryCta: { label: "Continue", onClick: l, loading: h2, disabled: !u$1 }, helpText: m2 ? /* @__PURE__ */ u(lo, { children: [/* @__PURE__ */ u(TriangleAlert, { size: 16, strokeWidth: 2 }), /* @__PURE__ */ u(uo, { children: /* @__PURE__ */ u(S, "amount_too_low" === m2 ? { children: [/* @__PURE__ */ u(mo, { children: "Amount too low" }), /* @__PURE__ */ u(po, { children: "Please choose a higher amount to continue." })] } : { children: [/* @__PURE__ */ u(mo, { children: "Unable to get quotes" }), /* @__PURE__ */ u(po, { children: ((_a2 = p2 == null ? void 0 : p2[0]) == null ? void 0 : _a2.error) ?? "Something went wrong. Please try again." })] }) })] }) : u$1 && y2 > 1 ? /* @__PURE__ */ u(yo, { onClick: s2, children: [ao(u$1.payment_method_category ?? u$1.payment_method), /* @__PURE__ */ u("span", { children: ["Pay with", " ", io(u$1.payment_method_category ?? u$1.payment_method)] }), /* @__PURE__ */ u(ChevronRight, { size: 14 })] }) : null, watermark: true, children: [(u$1 == null ? void 0 : u$1.warning) && /* @__PURE__ */ u(co, { children: [/* @__PURE__ */ u(Info, { size: 16, strokeWidth: 2 }), /* @__PURE__ */ u(uo, { children: /* @__PURE__ */ u(po, { children: u$1.warning }) })] }), /* @__PURE__ */ u(c, { currency: o2.source.selectedAsset, value: d2, onChange: c$1, inputMode: "decimal", autoFocus: true }), /* @__PURE__ */ u(p$1, { selectedAsset: o2.source.selectedAsset, onEditSourceAsset: a2 })] });
};
let lo = gt$1.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--privy-color-warn-bg, #fffbbb);
  border: 1px solid var(--privy-color-border-warning, #facd63);
  overflow: clip;
  width: 100%;

  svg {
    flex-shrink: 0;
    color: var(--privy-color-icon-warning, #facd63);
  }
`, co = gt$1.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--privy-color-info-bg, #f0f4ff);
  border: 1px solid var(--privy-color-border-info, #bfcfff);
  overflow: clip;
  width: 100%;
  margin-bottom: 0.75rem;

  svg {
    flex-shrink: 0;
    color: var(--privy-color-icon-info, #6b8aed);
  }
`, uo = gt$1.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  font-feature-settings:
    'calt' 0,
    'kern' 0;
  text-align: left;
`, mo = gt$1.span`
  font-weight: 600;
`, po = gt$1.span`
  font-weight: 400;
`, yo = gt$1.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;

  && {
    padding: 0;
    color: var(--privy-color-accent);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
`, ho = { CREDIT_DEBIT_CARD: "Credit / debit card", APPLE_PAY: "Apple Pay", GOOGLE_PAY: "Google Pay", BANK: "Bank transfer", BANK_TRANSFER: "Bank transfer", SEPA: "SEPA", PIX: "PIX", STRIPE_LINK: "Link" }, fo = (e2) => ho[e2] ?? e2.replace(/_/g, " ").toLowerCase().replace(/^\w/, ((e3) => e3.toUpperCase())), go = { CREDIT_DEBIT_CARD: /* @__PURE__ */ u(CreditCard, { size: 20 }), APPLE_PAY: /* @__PURE__ */ u(h, { width: 20, height: 20 }), GOOGLE_PAY: /* @__PURE__ */ u(t$2, { width: 20, height: 20 }), BANK: /* @__PURE__ */ u(Landmark, { size: 20 }), BANK_TRANSFER: /* @__PURE__ */ u(Landmark, { size: 20 }), SEPA: /* @__PURE__ */ u(Landmark, { size: 20 }), PIX: /* @__PURE__ */ u(Landmark, { size: 20 }), STRIPE_LINK: /* @__PURE__ */ u(Mr, { size: 20 }) }, vo = (t2) => go[t2] ?? /* @__PURE__ */ u(CreditCard, { size: 20 });
const bo = ({ onClose: r2, onSelectPaymentMethod: o2, quotes: i2, isLoading: n$1 }) => /* @__PURE__ */ u(n, { showClose: true, onClose: r2, title: "Select payment method", subtitle: "Choose how you'd like to pay", watermark: true, children: /* @__PURE__ */ u(Co, { children: i2.map(((r3, i3) => {
  let a2 = r3.payment_method_category ?? r3.payment_method;
  return u(wo, { onClick: () => o2(r3), disabled: n$1, children: /* @__PURE__ */ u(ko, { children: [/* @__PURE__ */ u(_o, { children: vo(a2) }), /* @__PURE__ */ u(xo, { children: /* @__PURE__ */ u(So, { children: fo(a2) }) })] }) }, `${r3.provider}-${r3.payment_method}-${i3}`);
})) }) });
let Co = gt$1.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`, wo = gt$1.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-md);
  border-style: solid;
  display: flex;

  && {
    padding: 1rem 1rem;
  }
`, ko = gt$1.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`, _o = gt$1.div`
  color: var(--privy-color-foreground-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, xo = gt$1.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1;
`, So = gt$1.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;
const Eo = ({ onClose: t2, onBack: r2, onContinue: o2, onAmountChange: i2, onSelectSource: n$1, onEditSourceAsset: a2, onEditPaymentMethod: s2, onSelectPaymentMethod: l, onRetry: c2, opts: d2, state: u$1, amount: m2, error: p2, selectedQuote: y2, quotesWarning: h2, quotesErrors: f, destinationCurrencySymbol: g2, quotesCount: v, isLoading: b, isInitialQuoteLoading: C, stripeElement: w$12 }) => "select-amount" === u$1.status ? C ? /* @__PURE__ */ u(n, { showClose: true, onClose: t2, iconVariant: "loading" }) : /* @__PURE__ */ u(so, { onClose: t2, onBack: r2, onContinue: o2, onAmountChange: i2, onEditSourceAsset: a2, onEditPaymentMethod: s2, opts: d2, amount: m2, selectedQuote: y2, quotesWarning: h2, quotesErrors: f, quotesCount: v, destinationCurrencySymbol: g2, isLoading: b }) : "select-source-asset" === u$1.status ? /* @__PURE__ */ u(w, { onSelectSource: n$1, opts: d2, isLoading: b }) : "select-payment-method" === u$1.status ? /* @__PURE__ */ u(bo, { onClose: t2, onSelectPaymentMethod: l, quotes: u$1.quotes, isLoading: b }) : "stripe-flow" === u$1.status ? /* @__PURE__ */ u(Qr, { step: u$1.step, element: w$12, onClose: t2, isLoading: b }) : "provider-confirming" === u$1.status ? /* @__PURE__ */ u(Gr, { onClose: t2 }) : "provider-error" === u$1.status ? /* @__PURE__ */ u(to, { onClose: t2, onRetry: c2, error: p2 }) : "provider-success" === u$1.status ? /* @__PURE__ */ u(ro, { onClose: t2 }) : null, Ao = { component: () => {
  var _a2;
  let { onUserCloseViaDialogOrKeybindRef: t2 } = g(), r2 = Ml();
  if (!r2) return null;
  let { opts: i2, state: n2, error: a2, isLoading: s2, amount: l, quotesWarning: c2, quotesErrors: d2, localQuotes: p2, localSelectedQuote: y2, initialQuotes: h2, initialSelectedQuote: f, destinationCurrencySymbol: g$1, stripeElement: v, onBack: b } = r2;
  return t2.current = le, /* @__PURE__ */ u(Eo, { onClose: le, onBack: b, opts: i2, state: n2, error: a2, isLoading: s2, isInitialQuoteLoading: null == h2, amount: l, selectedQuote: kl({ localQuotes: p2, localSelectedQuote: y2, initialSelectedQuote: f }), quotesWarning: c2, quotesErrors: d2, quotesCount: ((_a2 = p2 ?? h2) == null ? void 0 : _a2.length) ?? 0, destinationCurrencySymbol: g$1, onAmountChange: se, onContinue: Ge, onSelectSource: ot, onEditSourceAsset: et, onEditPaymentMethod: Je, onSelectPaymentMethod: rt, onRetry: tt, stripeElement: v });
} };
export {
  Ao as FiatOnrampScreen,
  Ao as default
};
