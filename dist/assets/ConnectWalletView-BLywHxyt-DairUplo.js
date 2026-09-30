import { fZ as h, dm as A, dl as d, ex as bn, ft as _, dn as y, dj as D$1, dt as k, ds as We, dx as l, f_ as S, dk as q, f$ as u, g0 as n, g1 as E, g2 as P$1, g3 as Y$1, eG as B, dp as T, eJ as libExports, g4 as R$1, g5 as M, g6 as O, g7 as W, g8 as D$2, dr as u$1, dE as i, g9 as W$1, ga as O$1, dN as S$1, gb as _$1, dA as gt, gc as j } from './index-B3PW-i17.js';
import { v, t as t$1 } from './ModalFooter-BldNwiHO-Dv7-KdAL.js';
import { p } from './CopyableText-CQapvaMr-BSxgcf25.js';
import { i as i$2 } from './Link-BdDilT2T-BtlE00ZK.js';
import { x } from './QrCode-cA9rnMIN-ClbAa5SO.js';
import { i as i$1 } from './EmailInputForm-Cqo1mda8-dLUHCSLS.js';
import { t } from './useI18n-DJGbXMkU-CqycDq8A.js';
import { e } from './WalletCards-DH1rqayz-BUfVw9LV.js';
import { i as i$3, a, t as t$2 } from './styles-DVyDvTdj-D5ow2nPc.js';
import { w } from './Screen-Dtn4lspb-BhDTj3OO.js';

function createLazyMeasurementsView(count, flat, getItemKey) {
  const cache = new Array(count);
  return new Proxy(cache, {
    get(target, prop, receiver) {
      if (typeof prop === "string") {
        const c = prop.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const i = +prop;
          if (Number.isInteger(i) && i >= 0 && i < count) {
            let v = target[i];
            if (!v) {
              const s = flat[i * 2];
              v = target[i] = {
                index: i,
                key: getItemKey(i),
                start: s,
                size: flat[i * 2 + 1],
                end: s + flat[i * 2 + 1],
                lane: 0
              };
            }
            return v;
          }
        }
        if (prop === "length") return count;
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}

function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  let isInitial = true;
  function memoizedFunction() {
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    result = fn(...newDeps);
    if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) {
      opts.onChange(result);
    }
    isInitial = false;
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${""}`);
  } else {
    return value;
  }
}
const approxEqual = (a, b) => Math.abs(a - b) < 1.01;
const debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

let _isIOSResult;
const isIOSWebKit = () => {
  if (_isIOSResult !== void 0) return _isIOSResult;
  if (typeof navigator === "undefined") return _isIOSResult = false;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _isIOSResult = true;
  const mtp = navigator.maxTouchPoints;
  return _isIOSResult = navigator.platform === "MacIntel" && mtp !== void 0 && mtp > 0;
};
const getRect = (element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
};
const defaultKeyExtractor = (index) => index;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const len = end - start + 1;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = start + i;
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const addEventListenerOptions = {
  passive: true
};
const supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
const observeOffset = (instance, cb, readOffset) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  let offset = 0;
  const fallback = registerScrollendEvent ? null : debounce(
    targetWindow,
    () => cb(offset, false),
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    offset = readOffset(element);
    fallback == null ? void 0 : fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  element.addEventListener("scroll", handler, addEventListenerOptions);
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
};
const observeElementOffset = (instance, cb) => observeOffset(instance, cb, (el) => {
  const { horizontal, isRtl } = instance.options;
  return horizontal ? el.scrollLeft * (isRtl && -1 || 1) : el.scrollTop;
});
const measureElement = (element, entry, instance) => {
  if (instance.options.useCachedMeasurements) {
    const index = instance.indexFromElement(element);
    const key = instance.options.getItemKey(index);
    return instance.itemSizeCache.get(key) ?? instance.options.estimateSize(index);
  }
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  if (!entry) {
    const index = instance.indexFromElement(element);
    const key = instance.options.getItemKey(index);
    const cachedSize = instance.itemSizeCache.get(key);
    if (cachedSize !== void 0) {
      return cachedSize;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
const scrollWithAdjustments = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: offset + adjustments,
    behavior
  });
};
const elementScroll = scrollWithAdjustments;
class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollState = null;
    this.measurementsCache = [];
    this._flatMeasurements = null;
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.itemSizeCacheVersion = 0;
    this.laneAssignments = /* @__PURE__ */ new Map();
    this.pendingMin = null;
    this.prevLanes = void 0;
    this.lanesChangedFlag = false;
    this.lanesSettling = false;
    this.pendingScrollAnchor = null;
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this._iosDeferredAdjustment = 0;
    this._iosTouching = false;
    this._iosJustTouchEnded = false;
    this._iosTouchEndTimerId = null;
    this._intendedScrollOffset = null;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.now = () => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
    };
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              const node = entry.target;
              const index = this.indexFromElement(node);
              if (!node.isConnected) {
                this.observer.unobserve(node);
                for (const [cacheKey, cachedNode] of this.elementsCache) {
                  if (cachedNode === node) {
                    this.elementsCache.delete(cacheKey);
                    break;
                  }
                }
                return;
              }
              if (this.shouldMeasureDuringScroll(index)) {
                this.resizeItem(
                  index,
                  this.options.measureElement(node, entry, this)
                );
              }
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      var _a, _b;
      const merged = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: false,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: false
      };
      for (const key in opts2) {
        const v = opts2[key];
        if (v !== void 0) merged[key] = v;
      }
      const prevOptions = this.options;
      let anchor = null;
      let followOnAppend = null;
      let edgeKeysChanged = false;
      if (prevOptions !== void 0 && prevOptions.enabled && merged.enabled && merged.anchorTo === "end" && this.scrollElement !== null) {
        const prevCount = prevOptions.count;
        const nextCount = merged.count;
        const measurements = this.getMeasurements();
        const prevFirstKey = prevCount > 0 ? ((_a = measurements[0]) == null ? void 0 : _a.key) ?? prevOptions.getItemKey(0) : null;
        const prevLastKey = prevCount > 0 ? ((_b = measurements[prevCount - 1]) == null ? void 0 : _b.key) ?? prevOptions.getItemKey(prevCount - 1) : null;
        const didCountChange = nextCount !== prevCount;
        const didEdgeKeysChange = didCountChange || prevCount > 0 && nextCount > 0 && (merged.getItemKey(0) !== prevFirstKey || merged.getItemKey(nextCount - 1) !== prevLastKey);
        if (didEdgeKeysChange) {
          edgeKeysChanged = true;
          const item = prevCount > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? measurements[0] : null;
          if (item) {
            anchor = [item.key, this.getScrollOffset() - item.start];
          }
          const behavior = merged.followOnAppend === true ? "auto" : merged.followOnAppend || null;
          if (behavior && nextCount > prevCount && this.isAtEnd(prevOptions.scrollEndThreshold) && (prevCount === 0 || merged.getItemKey(nextCount - 1) !== prevLastKey)) {
            followOnAppend = behavior;
          }
        }
      }
      this.options = merged;
      if (edgeKeysChanged) {
        this.pendingMin = 0;
        this.itemSizeCacheVersion++;
      }
      let anchorResolved = false;
      let anchorDelta = 0;
      if (anchor && this.scrollOffset !== null) {
        const [anchorKey, anchorOffset] = anchor;
        const newMeasurements = this.getMeasurements();
        const { count, getItemKey } = this.options;
        let idx = 0;
        while (idx < count && getItemKey(idx) !== anchorKey) {
          idx++;
        }
        if (idx < count) {
          const anchorItem = newMeasurements[idx];
          if (anchorItem) {
            const newOffset = anchorItem.start + anchorOffset;
            if (newOffset !== this.scrollOffset) {
              anchorDelta = newOffset - this.scrollOffset;
              this.scrollOffset = newOffset;
              anchorResolved = true;
            }
          }
        }
      }
      if (anchorResolved || followOnAppend) {
        this.pendingScrollAnchor = [
          anchorResolved ? anchor[0] : null,
          anchorResolved ? anchor[1] : 0,
          followOnAppend,
          anchorDelta
        ];
      }
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      if (this.rafId != null && this.targetWindow) {
        this.targetWindow.cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.scrollState = null;
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            if (this._intendedScrollOffset !== null && Math.abs(offset - this._intendedScrollOffset) < 1.5) {
              offset = this._intendedScrollOffset;
            }
            this._intendedScrollOffset = null;
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this._flushIosDeferredIfReady();
            if (this.scrollState) {
              this.scheduleScrollReconcile();
            }
            this.maybeNotify();
          })
        );
        if ("addEventListener" in this.scrollElement) {
          const scrollEl = this.scrollElement;
          const onTouchStart = () => {
            this._iosTouching = true;
            this._iosJustTouchEnded = false;
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          };
          const onTouchEnd = () => {
            this._iosTouching = false;
            if (!isIOSWebKit() || this.targetWindow == null) {
              return;
            }
            this._iosJustTouchEnded = true;
            this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = false;
              this._iosTouchEndTimerId = null;
              this._flushIosDeferredIfReady();
            }, 150);
          };
          scrollEl.addEventListener(
            "touchstart",
            onTouchStart,
            addEventListenerOptions
          );
          scrollEl.addEventListener(
            "touchend",
            onTouchEnd,
            addEventListenerOptions
          );
          this.unsubs.push(() => {
            scrollEl.removeEventListener("touchstart", onTouchStart);
            scrollEl.removeEventListener("touchend", onTouchEnd);
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const anchor = this.pendingScrollAnchor;
      this.pendingScrollAnchor = null;
      if (anchor && this.scrollElement && this.options.enabled) {
        const [key, _offset, followOnAppend, anchorDelta] = anchor;
        if (key !== null && !followOnAppend) {
          if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
            if (anchorDelta !== 0) {
              this._iosDeferredAdjustment += anchorDelta;
            }
          } else {
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: void 0,
              behavior: void 0
            });
          }
        }
        if (followOnAppend) {
          this.scrollToEnd({ behavior: followOnAppend });
        }
      }
    };
    this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0) return;
      if (this.isScrolling) return;
      if (this._iosTouching) return;
      if (this._iosJustTouchEnded) return;
      const cur = this.getScrollOffset();
      const max = this.getMaxScrollOffset();
      if (cur < 0 || cur > max) return;
      const delta = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0;
      this._scrollToOffset(cur, {
        adjustments: this.scrollAdjustments += delta,
        behavior: void 0
      });
    };
    this.rafId = null;
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode) => {
        const lanesChanged = this.prevLanes !== void 0 && this.prevLanes !== lanes;
        if (lanesChanged) {
          this.lanesChangedFlag = true;
        }
        this.prevLanes = lanes;
        this.pendingMin = null;
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled,
          lanes,
          laneAssignmentMode
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count,
        paddingStart,
        scrollMargin,
        getItemKey,
        enabled,
        lanes,
        laneAssignmentMode
      }, _itemSizeCacheVersion) => {
        const itemSizeCache = this.itemSizeCache;
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          return [];
        }
        if (this.laneAssignments.size > count) {
          for (const index of this.laneAssignments.keys()) {
            if (index >= count) {
              this.laneAssignments.delete(index);
            }
          }
        }
        if (this.lanesChangedFlag) {
          this.lanesChangedFlag = false;
          this.lanesSettling = true;
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          this.pendingMin = null;
        }
        if (this.measurementsCache.length === 0 && !this.lanesSettling) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        this.pendingMin = null;
        if (this.lanesSettling && this.measurementsCache.length === count) {
          this.lanesSettling = false;
        }
        if (lanes === 1) {
          const gap = this.options.gap;
          const need = count * 2;
          let flat = this._flatMeasurements;
          if (!flat || flat.length < need) {
            const next = new Float64Array(need);
            if (flat && min > 0) next.set(flat.subarray(0, min * 2));
            flat = next;
            this._flatMeasurements = flat;
          }
          let runningStart;
          if (min === 0) {
            runningStart = paddingStart + scrollMargin;
          } else {
            const prevIdx = min - 1;
            runningStart = flat[prevIdx * 2] + flat[prevIdx * 2 + 1] + gap;
          }
          for (let i = min; i < count; i++) {
            const key = getItemKey(i);
            const measuredSize = itemSizeCache.get(key);
            const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
            flat[i * 2] = runningStart;
            flat[i * 2 + 1] = size;
            runningStart += size + gap;
          }
          const view = createLazyMeasurementsView(count, flat, getItemKey);
          this.measurementsCache = view;
          return view;
        }
        const measurements = this.measurementsCache.slice(0, min);
        const laneLastIndex = new Array(lanes).fill(
          void 0
        );
        for (let m = 0; m < min; m++) {
          const item = measurements[m];
          if (item) {
            laneLastIndex[item.lane] = m;
          }
        }
        for (let i = min; i < count; i++) {
          const key = getItemKey(i);
          const cachedLane = this.laneAssignments.get(i);
          let lane;
          let start;
          const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
          if (cachedLane !== void 0 && this.options.lanes > 1) {
            lane = cachedLane;
            const prevIndex = laneLastIndex[lane];
            const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
            start = prevInLane ? prevInLane.end + this.options.gap : paddingStart + scrollMargin;
          } else {
            const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
            start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
            lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
            if (this.options.lanes > 1 && shouldCacheLane) {
              this.laneAssignments.set(i, lane);
            }
          }
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
          laneLastIndex[lane] = i;
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset,
          lanes,
          // Pass the typed array so binary search + forward-walk can
          // read start/end directly from Float64Array, skipping the
          // Proxy traps that materialize a full VirtualItem per probe.
          flat: lanes === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
        }) : null;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this.shouldMeasureDuringScroll = (index) => {
      var _a;
      if (!this.scrollState || this.scrollState.behavior !== "smooth") {
        return true;
      }
      const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index);
      if (scrollIndex !== void 0 && this.range) {
        const bufferSize = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        );
        const minIndex = Math.max(0, scrollIndex - bufferSize);
        const maxIndex = Math.min(
          this.options.count - 1,
          scrollIndex + bufferSize
        );
        return index >= minIndex && index <= maxIndex;
      }
      return true;
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key2) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key2);
          }
        });
        return;
      }
      const index = this.indexFromElement(node);
      const key = this.options.getItemKey(index);
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) {
        this.resizeItem(index, this.options.measureElement(node, void 0, this));
      }
    };
    this.resizeItem = (index, size) => {
      var _a, _b;
      if (index < 0 || index >= this.options.count) return;
      let cachedSize;
      let itemStart;
      let key;
      const flat = this._flatMeasurements;
      if (this.options.lanes === 1 && flat !== null) {
        key = this.options.getItemKey(index);
        itemStart = flat[index * 2];
        cachedSize = flat[index * 2 + 1];
      } else {
        const item = this.measurementsCache[index];
        if (!item) return;
        key = item.key;
        itemStart = item.start;
        cachedSize = item.size;
      }
      const itemSize = this.itemSizeCache.get(key) ?? cachedSize;
      const delta = size - itemSize;
      if (delta !== 0) {
        const wasAtEnd = this.options.anchorTo === "end" && ((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold;
        const prevTotalSize = wasAtEnd ? this.getTotalSize() : 0;
        const shouldAdjustScroll = ((_b = this.scrollState) == null ? void 0 : _b.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[index] ?? {
            index,
            key,
            start: itemStart,
            size: cachedSize,
            end: itemStart + cachedSize,
            lane: 0
          },
          delta,
          this
        ) : (
          // Default: adjust when the resize is an above-viewport item.
          // First measurement (!has(key)): always adjust — the item
          // has never been sized, so the estimate→actual delta must
          // be compensated regardless of scroll direction.
          // Re-measurement (has(key)): skip during backward scroll
          // to avoid the "items jump while scrolling up" cascade.
          itemStart < this.getScrollOffset() + this.scrollAdjustments && (!this.itemSizeCache.has(key) || this.scrollDirection !== "backward")
        ));
        if (this.pendingMin === null || index < this.pendingMin) {
          this.pendingMin = index;
        }
        this.itemSizeCache.set(key, size);
        this.itemSizeCacheVersion++;
        if (wasAtEnd) {
          this.applyScrollAdjustment(this.getTotalSize() - prevTotalSize);
        } else if (shouldAdjustScroll) {
          this.applyScrollAdjustment(delta);
        }
        this.notify(false);
      }
    };
    this.getVirtualItems = memo(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      const flat = this._flatMeasurements;
      const useFlat = this.options.lanes === 1 && flat != null;
      const idx = findNearestBinarySearch(
        0,
        measurements.length - 1,
        useFlat ? (i) => flat[i * 2] : (i) => notUndefined(measurements[i]).start,
        offset
      );
      return notUndefined(measurements[idx]);
    };
    this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement) {
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      } else {
        const doc = this.scrollElement.document.documentElement;
        return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
      }
    };
    this.getVirtualDistanceFromEnd = () => {
      return Math.max(
        this.getTotalSize() - this.getSize() - this.getScrollOffset(),
        0
      );
    };
    this.getDistanceFromEnd = () => {
      return Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0);
    };
    this.isAtEnd = (threshold = this.options.scrollEndThreshold) => {
      return this.getDistanceFromEnd() <= threshold;
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      if (!this.scrollElement) return 0;
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size) / 2;
      } else if (align === "end") {
        toOffset -= size;
      }
      const maxOffset = this.getMaxScrollOffset();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      const item = this.measurementsCache[index];
      if (!item) return;
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      if (align === "end" && index === this.options.count - 1) {
        return [this.getMaxScrollOffset(), align];
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
      const offset = this.getOffsetForAlignment(toOffset, align);
      const now = this.now();
      this.scrollState = {
        index: null,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToIndex = (index, {
      align: initialAlign = "auto",
      behavior = "auto"
    } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const offsetInfo = this.getOffsetForIndex(index, initialAlign);
      if (!offsetInfo) {
        return;
      }
      const [offset, align] = offsetInfo;
      const now = this.now();
      this.scrollState = {
        index,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollBy = (delta, { behavior = "auto" } = {}) => {
      const offset = this.getScrollOffset() + delta;
      const now = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToEnd = ({ behavior = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        const lastIdx = measurements.length - 1;
        const flat = this._flatMeasurements;
        if (flat != null) {
          end = flat[lastIdx * 2] + flat[lastIdx * 2 + 1];
        } else {
          end = ((_a = measurements[lastIdx]) == null ? void 0 : _a.end) ?? 0;
        }
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this.takeSnapshot = () => {
      const snapshot = [];
      if (this.itemSizeCache.size === 0) return snapshot;
      const m = this.getMeasurements();
      for (const item of m) {
        if (item && this.itemSizeCache.has(item.key)) {
          snapshot.push({
            index: item.index,
            key: item.key,
            start: item.start,
            size: item.size,
            end: item.end,
            lane: item.lane
          });
        }
      }
      return snapshot;
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this._intendedScrollOffset = offset + (adjustments ?? 0);
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.pendingMin = null;
      this.itemSizeCache.clear();
      this.laneAssignments.clear();
      this.itemSizeCacheVersion++;
      this.notify(false);
    };
    this.setOptions(opts);
  }
  applyScrollAdjustment(delta, behavior) {
    if (delta === 0) return;
    if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
      this._iosDeferredAdjustment += delta;
    } else {
      this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += delta,
        behavior
      });
    }
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    if (this.rafId != null) return;
    this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null;
      this.reconcileScroll();
    });
  }
  reconcileScroll() {
    if (!this.scrollState) return;
    const el = this.scrollElement;
    if (!el) return;
    const MAX_RECONCILE_MS = 5e3;
    if (this.now() - this.scrollState.startedAt > MAX_RECONCILE_MS) {
      this.scrollState = null;
      return;
    }
    const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
    const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
    const STABLE_FRAMES = 1;
    const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
    if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
      this.scrollState.stableFrames++;
      if (this.scrollState.stableFrames >= STABLE_FRAMES) {
        if (this.getScrollOffset() !== targetOffset) {
          this._scrollToOffset(targetOffset, {
            adjustments: void 0,
            behavior: "auto"
          });
        }
        this.scrollState = null;
        return;
      }
    } else {
      this.scrollState.stableFrames = 0;
      if (targetChanged) {
        const viewport = this.getSize() || 600;
        const distance = Math.abs(targetOffset - this.getScrollOffset());
        const keepSmooth = this.scrollState.behavior === "smooth" && distance > viewport;
        this.scrollState.lastTargetOffset = targetOffset;
        if (!keepSmooth) {
          this.scrollState.behavior = "auto";
        }
        this._scrollToOffset(targetOffset, {
          adjustments: void 0,
          behavior: keepSmooth ? "smooth" : "auto"
        });
      }
    }
    this.scheduleScrollReconcile();
  }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset,
  lanes,
  flat
}) {
  const lastIndex = measurements.length - 1;
  const getStart = flat ? (index) => flat[index * 2] : (index) => measurements[index].start;
  const getEnd = flat ? (index) => flat[index * 2] + flat[index * 2 + 1] : (index) => measurements[index].end;
  if (measurements.length <= lanes) {
    return {
      startIndex: 0,
      endIndex: lastIndex
    };
  }
  let startIndex = findNearestBinarySearch(0, lastIndex, getStart, scrollOffset);
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && getEnd(endIndex) < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}

const useIsomorphicLayoutEffect = typeof document !== "undefined" ? _ : y;
function useVirtualizerBase({
  useFlushSync = true,
  directDomUpdates = false,
  directDomUpdatesMode = "transform",
  ...options
}) {
  const rerender = h((x) => x + 1, 0)[1];
  const directRef = A({
    enabled: directDomUpdates,
    mode: directDomUpdatesMode,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  directRef.current.enabled = directDomUpdates;
  directRef.current.mode = directDomUpdatesMode;
  const applyDirectStyles = (instance2) => {
    const state = directRef.current;
    if (!state.enabled || !state.container) return;
    const totalSize = instance2.getTotalSize();
    if (totalSize !== state.lastSize) {
      state.lastSize = totalSize;
      const sizeAxis = instance2.options.horizontal ? "width" : "height";
      state.container.style[sizeAxis] = `${totalSize}px`;
    }
    const horizontal = !!instance2.options.horizontal;
    const useTransform = state.mode === "transform";
    const posAxis = horizontal ? "left" : "top";
    const scrollMargin = instance2.options.scrollMargin;
    const items = instance2.getVirtualItems();
    for (const item of items) {
      const next = item.start - scrollMargin;
      const el = instance2.elementsCache.get(item.key);
      if (!el) continue;
      if (state.lastPositions.get(el) === next) continue;
      state.lastPositions.set(el, next);
      if (useTransform) {
        el.style.transform = horizontal ? `translate3d(${next}px, 0, 0)` : `translate3d(0, ${next}px, 0)`;
      } else {
        el.style[posAxis] = `${next}px`;
      }
    }
  };
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      const state = directRef.current;
      let shouldRerender = true;
      if (state.enabled) {
        applyDirectStyles(instance2);
        const range = instance2.range;
        const prev = state.prevRange;
        shouldRerender = !prev || prev.isScrolling !== instance2.isScrolling || prev.startIndex !== (range == null ? void 0 : range.startIndex) || prev.endIndex !== (range == null ? void 0 : range.endIndex);
        if (shouldRerender) {
          state.prevRange = range ? {
            startIndex: range.startIndex,
            endIndex: range.endIndex,
            isScrolling: instance2.isScrolling
          } : null;
        }
      }
      if (shouldRerender) {
        if (useFlushSync && sync) {
          bn(rerender);
        } else {
          rerender();
        }
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = d(() => {
    const v = new Virtualizer(resolvedOptions);
    return Object.assign(v, {
      containerRef: (node) => {
        const state = directRef.current;
        state.container = node;
        state.lastSize = null;
        if (node && state.enabled) {
          const total = v.getTotalSize();
          state.lastSize = total;
          const axis = v.options.horizontal ? "width" : "height";
          node.style[axis] = `${total}px`;
        }
      }
    });
  });
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  useIsomorphicLayoutEffect(() => {
    applyDirectStyles(instance);
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

function MagnifyingGlassIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef = /*#__PURE__*/ D$1(MagnifyingGlassIcon);

const Q={phantom:{mobile:{native:"phantom://",universal:"https://phantom.app/ul/"}},solflare:{mobile:{native:void 0,universal:"https://solflare.com/ul/v1/"}},metamask:{image_url:{sm:O,md:O}},"okx-wallet":{mobile:{native:"okex://main",universal:"okex://main"}},"okx-wallet-1":{mobile:{native:"okxwallet://main",universal:"okxwallet://main"}}};class D{static normalize(e){return e.replace(/[-_]wallet$/,"").replace(/[-_]extension$/,"").toLowerCase()}isEth(e){return e.chains.some((e=>e.includes("eip155:")))}isSol(e){return e.chains.some((e=>e.includes("solana:")))}inAllowList(e,n){if(!this.normalizedAllowList||0===this.normalizedAllowList.length||"listing"===n&&this.includeWalletConnect)return  true;let t=D.normalize(e);return this.normalizedAllowList.some((e=>t===D.normalize(e)))}inDenyList(e,n){return "listing"===n&&"rabby"===e||"agw"===D.normalize(e)}chainMatches(e){return "ethereum-only"===this.chainFilter?"ethereum"===e:"solana-only"!==this.chainFilter||"solana"===e}getAllowListKey(e,n,t,l){let i=D.normalize(e);for(let e of this.normalizedAllowList||[])if(i===D.normalize(e))return e;if("connector"===n){if(("injected"===t||"solana_adapter"===t)&&"ethereum"===l&&this.detectedEth)return "detected_ethereum_wallets";if(("injected"===t||"solana_adapter"===t)&&"solana"===l&&this.detectedSol)return "detected_solana_wallets"}if("listing"===n&&this.includeWalletConnect)return "wallet_connect"}connectorOk(e){return !!("null"!==e.connectorType&&"walletconnect_solana"!==e.walletBranding.id&&this.chainMatches(e.chainType)&&(this.inAllowList(e.walletClientType,"connector")||("injected"===e.connectorType||"solana_adapter"===e.connectorType)&&("ethereum"===e.chainType&&this.detectedEth||"solana"===e.chainType&&this.detectedSol)))}listingOk(e){if(e.slug.includes("coinbase"))return  false;if("ethereum-only"===this.chainFilter){if(!this.isEth(e))return  false}else if("solana-only"===this.chainFilter&&!this.isSol(e))return  false;return !(!this.inAllowList(e.slug,"listing")||this.inDenyList(e.slug,"listing"))}getWallets(e,n){let t=new Map,l=e=>{let n=t.get(e.id);if(n){n.chainType!==e.chainType&&(n.chainType="multi");let t=new Set(n.chains);e.chains.forEach((e=>t.add(e))),n.chains=Array.from(t),!n.icon&&e.icon&&(n.icon=e.icon),!n.url&&e.url&&(n.url=e.url),!n.listing&&e.listing&&(n.listing=e.listing),!n.allowListKey&&e.allowListKey&&(n.allowListKey=e.allowListKey);}else t.set(e.id,e);};e.filter((e=>this.connectorOk(e))).forEach((e=>{let n=D.normalize(e.walletClientType);l({id:n,label:e.walletBranding?.name??n,source:"connector",connector:e,chainType:e.chainType,icon:e.walletBranding?.icon,url:void 0,chains:["ethereum"===e.chainType?"eip155":"solana"],allowListKey:this.getAllowListKey(e.walletClientType,"connector",e.connectorType,e.chainType)});}));let i=e.find((e=>"wallet_connect_v2"===e.connectorType)),a=e.find((e=>"walletconnect_solana"===e.walletBranding.id));n.filter((e=>this.listingOk(e))).forEach((n=>{let t=[...n.chains].filter((e=>e.includes("eip155:")||e.includes("solana:")));if(e.some((e=>D.normalize(e.walletClientType)===D.normalize(n.slug)&&"ethereum"===e.chainType&&"null"!==e.connectorType))||i||n.mobile.native||n.mobile.universal||R$1[n.slug]?.chainTypes.includes("ethereum")||(t=t.filter((e=>!e.includes("eip155:")))),e.some((e=>D.normalize(e.walletClientType)===D.normalize(n.slug)&&"solana"===e.chainType&&"null"!==e.connectorType))||a||n.mobile.native||n.mobile.universal||R$1[n.slug]?.chainTypes.includes("solana")||(t=t.filter((e=>!e.includes("solana:")))),!t.length)return;let o=D.normalize(n.slug),r=Q[n.slug],c=r?.image_url?.sm||n.image_url?.sm;t.some((e=>e.includes("eip155:")))&&l({id:o,label:n.name||o,source:"listing",listing:n,chainType:"ethereum",icon:c,url:n.homepage,chains:t,allowListKey:this.getAllowListKey(n.slug,"listing")}),t.some((e=>e.includes("solana:")))&&l({id:o,label:n.name||o,source:"listing",listing:n,chainType:"solana",icon:c,url:n.homepage,chains:t,allowListKey:this.getAllowListKey(n.slug,"listing")});})),this.includeWalletConnectQr&&i&&l({id:"wallet_connect_qr",label:"WalletConnect",source:"connector",connector:i,chainType:"ethereum",icon:j,url:void 0,chains:["eip155"],allowListKey:"wallet_connect_qr"}),this.includeWalletConnectQrSolana&&a&&l({id:"wallet_connect_qr_solana",label:"WalletConnect",source:"connector",connector:a,chainType:"solana",icon:j,url:void 0,chains:["solana"],allowListKey:"wallet_connect_qr_solana"});let o=Array.from(t.values());o.forEach((e=>{let n=Q[e.listing?.slug||e.id];n?.image_url?.sm&&(e.icon=n.image_url.sm);}));let r=new Map;return this.normalizedAllowList?.forEach(((e,n)=>{r.set(D.normalize(e),n);})),{wallets:o.slice().sort(((e,n)=>{if(e.allowListKey&&n.allowListKey){let t=this.normalizedAllowList?.findIndex((n=>D.normalize(n)===D.normalize(e.allowListKey)))??-1,l=this.normalizedAllowList?.findIndex((e=>D.normalize(e)===D.normalize(n.allowListKey)))??-1;if(t!==l&&t>=0&&l>=0)return t-l}if(e.allowListKey&&!n.allowListKey)return  -1;if(!e.allowListKey&&n.allowListKey)return 1;let t=D.normalize(e.id),l=D.normalize(n.id);"binance-defi"===t?t="binance":"universalprofiles"===t?t="universal_profile":"cryptocom-defi"===t?t="cryptocom":"bitkeep"===t&&(t="bitget_wallet"),"binance-defi"===l?l="binance":"universalprofiles"===l?l="universal_profile":"cryptocom-defi"===l?l="cryptocom":"bitkeep"===l&&(l="bitget_wallet");let i=r.has(t),a=r.has(l);return i&&a?r.get(t)-r.get(l):i?-1:a?1:"connector"===e.source&&"listing"===n.source?-1:"listing"===e.source&&"connector"===n.source?1:e.label.toLowerCase().localeCompare(n.label.toLowerCase())})),walletCount:o.length}}constructor(e,n){if(this.chainFilter=e,n&&n.length>0){if(this.normalizedAllowList=n.map(String),this.normalizedAllowList.includes("binance")){let e=this.normalizedAllowList.indexOf("binance");this.normalizedAllowList.splice(e+1,0,"binance-defi-wallet");}if(this.normalizedAllowList.includes("bitget_wallet")){let e=this.normalizedAllowList.indexOf("bitget_wallet");this.normalizedAllowList.splice(e+1,0,"bitkeep");}}this.detectedEth=this.normalizedAllowList?.includes("detected_ethereum_wallets")??false,this.detectedSol=this.normalizedAllowList?.includes("detected_solana_wallets")??false,this.includeWalletConnect=this.normalizedAllowList?.includes("wallet_connect")??false,this.includeWalletConnectQr=this.normalizedAllowList?.includes("wallet_connect_qr")??false,this.includeWalletConnectQrSolana=this.normalizedAllowList?.includes("wallet_connect_qr_solana")??false;}}var P=t=>/*#__PURE__*/u$1("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t,children:[/*#__PURE__*/u$1("path",{d:"m0 0h32v32h-32z",fill:"#5469d4"}),/*#__PURE__*/u$1("path",{d:"m15.997 5.333-.143.486v14.106l.143.143 6.548-3.87z",fill:"#c2ccf4"}),/*#__PURE__*/u$1("path",{d:"m15.996 5.333-6.548 10.865 6.548 3.87z",fill:"#fff"}),/*#__PURE__*/u$1("path",{d:"m15.997 21.306-.08.098v5.025l.08.236 6.552-9.227z",fill:"#c2ccf4"}),/*#__PURE__*/u$1("path",{d:"m15.996 26.665v-5.36l-6.548-3.867z",fill:"#fff"}),/*#__PURE__*/u$1("path",{d:"m15.995 20.07 6.548-3.87-6.548-2.976v6.847z",fill:"#8698e8"}),/*#__PURE__*/u$1("path",{d:"m9.448 16.2 6.548 3.87v-6.846z",fill:"#c2ccf4"})]}),V=t=>/*#__PURE__*/u$1("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t,children:[/*#__PURE__*/u$1("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"7.233",x2:"24.766",y1:"24.766",y2:"7.234",children:[/*#__PURE__*/u$1("stop",{offset:"0",stopColor:"#9945ff"}),/*#__PURE__*/u$1("stop",{offset:".2",stopColor:"#7962e7"}),/*#__PURE__*/u$1("stop",{offset:"1",stopColor:"#00d18c"})]}),/*#__PURE__*/u$1("path",{d:"m0 0h32v32h-32z",fill:"#10111a"}),/*#__PURE__*/u$1("path",{clipRule:"evenodd",d:"m9.873 20.41a.645.645 0 0 1 .476-.21l14.662.012a.323.323 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54zm15.376-2.862a.322.322 0 0 1 -.238.54l-14.662.012a.642.642 0 0 1 -.476-.21l-3.122-3.44a.323.323 0 0 1 .238-.54l14.662-.012a.644.644 0 0 1 .475.21zm-15.376-9.738a.644.644 0 0 1 .476-.21l14.662.012a.322.322 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54z",fill:"url(#a)",fillRule:"evenodd"})]});function H({enabled:e=true,walletList:n,walletChainType:t}){let l$1=We(),{connectors:i}=l(),{listings:r,loading:c}=_$1(e),s=t??l$1.appearance.walletChainType,d$1=n??l$1.appearance?.walletList,m=T((()=>new D(s,d$1)),[s,d$1]),{wallets:h,walletCount:u}=T((()=>m.getWallets(i,r)),[m,i,r]),[p,w]=d(""),g=T((()=>p?h.filter((e=>e.label.toLowerCase().includes(p.toLowerCase()))):h),[p,h]),[f,v]=d();return {selected:f,setSelected:v,search:p,setSearch:w,loadingListings:c,wallets:g,walletCount:u}}let R=e=>!e||"string"!=typeof e&&(e instanceof W||e instanceof D$2);const Y=({index:l,style:i,data:a$1,recent:o})=>{let r=a$1.wallets[l],{walletChainType:c,handleWalletClick:s}=a$1,{t:d}=t(),m={...i,boxSizing:"border-box"};return r?/*#__PURE__*/u$1(Z,{style:m,onClick:()=>s(r),children:[r.icon&&(r.connector&&!R(r.connector)?/*#__PURE__*/u$1(a,{children:"string"==typeof r.icon?/*#__PURE__*/u$1(i$3,{src:r.icon}):/*#__PURE__*/u$1(r.icon,{style:{width:"32px",height:"32px"}})}):"string"==typeof r.icon?/*#__PURE__*/u$1(i$3,{src:r.icon}):/*#__PURE__*/u$1(r.icon,{style:{width:"32px",height:"32px"}})),/*#__PURE__*/u$1(te,{children:r.label}),o?/*#__PURE__*/u$1(S$1,{children:[/*#__PURE__*/u$1(t$2,{children:d("connectWallet.lastUsed")}),/*#__PURE__*/u$1(ee,{children:/*#__PURE__*/u$1(S$1,{children:["ethereum-only"===c&&/*#__PURE__*/u$1(P,{}),"solana-only"===c&&/*#__PURE__*/u$1(V,{})]})})]}):/*#__PURE__*/u$1(ee,{children:!("ethereum-only"===c||"solana-only"===c)&&/*#__PURE__*/u$1(S$1,{children:[r.chains?.some((e=>e.startsWith("eip155")))&&/*#__PURE__*/u$1(P,{}),r.chains?.some((e=>e.startsWith("solana")))&&/*#__PURE__*/u$1(V,{})]})})]}):null};var G=({className:m,customDescription:u$2,connectOnly:C,preSelectedWalletId:_,hideHeader:S$2,...M$1})=>{let F=We(),{t:G}=t(),{connectors:ae}=l(),oe=M$1.walletChainType||F.appearance.walletChainType,re=M$1.walletList||F.appearance?.walletList,{onBack:ce,onClose:se,app:de}=M$1,{selected:me,setSelected:he,qrUrl:ue,setQrUrl:pe,connecting:we,uiState:ge,errorCode:fe,wallets:ye,walletCount:ve,handleConnect:be,handleBack:Ce,showSearchBar:Te,isInitialConnectView:_e,title:We$1,search:Le,setSearch:xe}=function({onConnect:e,onBack:n$1,onClose:t$1,onConnectError:l$1,walletList:i,walletChainType:c,app:s}){let m=We(),{connectors:h}=l(),{t:u$1}=t(),{wallets:p,walletCount:w,search:g,setSearch:f,selected:C,setSelected:T$1}=H({enabled:S(i??[]),walletList:i,walletChainType:c}),[_,x]=d(),[z,k]=d(),[S$1,j]=d(),[B$1,N]=d(),q$1=!C&&!S$1&&!B$1,I=q$1&&(w>6||g.length>0),M=h.find((e=>"wallet_connect_v2"===e.connectorType)),F=q((async(n$1,t)=>{if(!n$1)return;let i=t?.name??"Wallet";if(B$1?.connector!==n$1||"loading"!==_){if(x("loading"),"string"==typeof n$1)return u.debug("Connecting wallet via deeplink",{wallet:i,url:n$1.length>80?`${n$1.slice(0,80)}...`:n$1}),N({connector:n$1,name:i,icon:t?.icon,id:t?.id,url:t?.url}),void window.open(n$1,"_blank");u.debug("Connecting wallet via connector",{wallet:i,connectorType:n$1.connectorType}),N({connector:n$1,name:t?.name??n$1.walletBranding.name??"Wallet",icon:t?.icon??n$1.walletBranding.icon,id:t?.id,url:t?.url});try{let t=await n$1.connect({showPrompt:!0});if(!t)return u.warn("Wallet connection returned null",{wallet:i,connectorType:n$1.connectorType}),x("error"),k(void 0),void l$1?.(new n("Unable to connect wallet"));u.debug("Wallet connection successful",{wallet:i,connectorType:n$1.connectorType}),E(t)&&await P$1(t,m),x("success"),k(void 0),Y$1({address:t.address,client:t.walletClientType,appId:m.id}),setTimeout((()=>{e({connector:n$1,wallet:t});}),B);}catch(e){if(e?.message?.includes("already pending for origin")||e?.message?.includes("wallet_requestPermissions"))return void u.debug("Connection request already pending, maintaining loading state",{wallet:i});let t=e instanceof Error?e.message:String(e?.message||"Unknown error");u.error("Wallet connection failed",e,{wallet:i,connectorType:n$1.connectorType,errorCode:e?.privyErrorCode}),x("error"),k(e?.privyErrorCode),l$1?.(e instanceof Error?e:new n(t||"Unable to connect wallet"));}}else u.debug("Duplicate connection attempt prevented",{wallet:i});}),[m.id,e,B$1,_]),$=q((()=>S$1?(x(void 0),k(void 0),N(void 0),void j(void 0)):B$1?(x(void 0),k(void 0),void N(void 0)):C?(x(void 0),k(void 0),N(void 0),void T$1(void 0)):"error"===_||"loading"===_?(x(void 0),k(void 0),void N(void 0)):void n$1?.()),[S$1,B$1,C,_,n$1]),Q=T((()=>B$1?.connector===M&&S$1&&libExports.isMobile&&B$1?.name?u$1("connectWallet.goToWallet",{walletName:B$1.name}):B$1?.connector===M&&S$1&&B$1?.name?u$1("connectWallet.scanToConnect",{walletName:B$1.name}):S$1&&B$1?.name?u$1(libExports.isMobile?"connectWallet.goToWallet":"connectWallet.scanToConnect",{walletName:B$1.name}):"string"==typeof B$1?.connector?u$1("connectWallet.openOrInstall",{walletName:B$1.name}):C&&!B$1?u$1("connectWallet.selectNetwork"):B$1?null:u$1("connectWallet.selectYourWallet")),[B$1,S$1,C,M,u$1]);return {selected:C,setSelected:T$1,qrUrl:S$1,setQrUrl:j,connecting:B$1,uiState:_,errorCode:z,search:g,setSearch:f,wallets:p,walletCount:w,wc:M,isInitialConnectView:q$1,showSearchBar:I,title:Q,handleConnect:F,handleBack:$,onClose:t$1,onConnect:e,app:s}}({...M$1,walletList:re,walletChainType:oe}),ze=ae.find((e=>"wallet_connect_v2"===e.connectorType)),ke=ae.find((e=>"walletconnect_solana"===e.walletBranding.id)),Se=A(null),Ae=useVirtualizer({count:ye.length,getScrollElement:()=>Se.current,estimateSize:()=>56,overscan:6,gap:5}),je=q((async e=>{let n="solana-only"!==oe&&e.chains?.some((e=>e.startsWith("eip155"))),t="ethereum-only"!==oe&&e.chains?.some((e=>e.startsWith("solana"))),l=(()=>{let n=e.id;return R$1[n]||R$1[`${n}_wallet`]})(),i=n=>{let t=D.normalize(e.id);return ae.find((e=>D.normalize(e.walletClientType)===t&&e.chainType===n&&"wallet_connect_v2"!==e.connectorType&&!("ethereum"===e.chainType&&e instanceof W||"solana"===e.chainType&&e instanceof D$2)))},a=n?i("ethereum"):void 0,o=t?i("solana"):void 0;if(l&&M({isMobile:libExports.isMobile,walletConfig:l})&&!a&&!o)return u.debug("Using install flow for wallets that do not support WalletConnect.",{wallet:e.id}),void await be(l.installLink,{name:e.label,icon:e.icon,id:e.id,url:e.url});let r=async()=>{if(!ze||!e.listing)return  false;let n=Q[e.listing.slug]?{...e.listing,...Q[e.listing.slug]}:e.listing;return ze.setWalletEntry(n,pe),await ze.resetConnection(e.id),await be(ze,{name:e.label,icon:e.icon,id:e.id,url:e.url}),true},c=async()=>!!ke&&!!e.listing&&(await ke.disconnect(),ke.wallet.setWalletEntry(e.listing,pe),await new Promise((e=>setTimeout(e,100))),await be(ke,{name:e.label,icon:e.icon,id:e.id,url:e.url}),true),s=async n=>{let t=(e=>{if(l)return l.getMobileRedirect({isSolana:e,connectOnly:!!C,useUniversalLink:false})})(n);return !!t&&(await be(t,{name:e.label,icon:e.icon,id:e.id,url:e.url}),true)};if(n&&t)he(e);else {if(n&&!t){if(a&&!R(a))return u.debug("Attempting injected EVM connection",{wallet:e.id,connectorType:a.connectorType}),void await be(a,{name:e.label,icon:e.icon,id:e.id,url:e.url});if(libExports.isMobile&&l){if(await s(false)||await r())return}else if(await r()||await s(false))return}if(t&&!n){if(o&&!R(o))return u.debug("Attempting injected Solana connection",{wallet:e.id,connectorType:o.connectorType}),void await be(o,{name:e.label,icon:e.icon,id:e.id,url:e.url});if(libExports.isMobile){if(await s(true)||await c())return}else if(await c()||await s(true))return}if(!R(e.connector)){if(u.debug("Using fallback direct connector",{wallet:e.id,connectorType:e.connector?.connectorType}),ze&&"wallet_connect_v2"===e.connector?.connectorType)if(await ze.resetConnection(e.id),"wallet_connect_qr"!==e.id&&e.listing){let n=Q[e.listing.slug]?{...e.listing,...Q[e.listing.slug]}:e.listing;ze.setWalletEntry(n,pe);}else ze.setWalletEntry({id:"wallet_connect_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect",homepage:"",chains:["eip155"],mobile:{native:"",universal:void 0}},pe);return ke&&"walletconnect_solana"===e.connector?.walletBranding.id&&(await ke.disconnect(),"wallet_connect_qr_solana"!==e.id&&e.listing?ke.wallet.setWalletEntry(e.listing,pe):ke.wallet.setWalletEntry({id:"wallet_connect_solana_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect-solana",homepage:"",chains:["solana"],mobile:{native:"",universal:void 0}},pe),await new Promise((e=>setTimeout(e,100)))),void await be(e.connector,{name:e.label,icon:e.icon,id:e.id,url:e.url})}e.url?await be(e.url,{name:e.label,icon:e.icon,id:e.id,url:e.url}):u.warn("No available connection method for wallet",{wallet:e.id});}}),[ze,ke,be,he,pe,oe,C,ae]);return y((()=>{if(!_)return;let e=ye.find((({id:e})=>e===_));e&&je(e).catch(console.error);}),[_]),/*#__PURE__*/u$1(w,{className:m,children:[/*#__PURE__*/u$1(w.Header,{icon:S$2&&_e?void 0:we&&!ue||ue&&libExports.isMobile&&we?.icon?we.icon:we?void 0:e,iconVariant:we&&!ue||ue&&libExports.isMobile?"loading":void 0,iconLoadingStatus:we&&!ue||ue&&libExports.isMobile?{success:"success"===ge,fail:"error"===ge}:void 0,title:S$2&&_e?void 0:we&&!ue?G("connectWallet.waitingForWallet",{walletName:we.name}):ue&&libExports.isMobile?G("connectWallet.waitingForWallet",{walletName:we?.name??"connection"}):We$1,subtitle:S$2&&_e?void 0:we&&!ue&&"string"==typeof we.connector?G("connectWallet.installAndConnect",{walletName:we.name}):we&&!ue&&"string"!=typeof we.connector?"error"===ge?fe===i.NO_SOLANA_ACCOUNTS?`The connected wallet has no Solana accounts. Please add a Solana account in ${we.name} and try again.`:G("connectWallet.tryConnectingAgain"):G("coinbase_wallet"===we.connector.connectorType?"coinbaseWallet.connectingSubtitle":"connectionStatus.connectOneWallet"):_e?u$2??(de?G("connectWallet.connectToAccount",{appName:de.name}):null):null,showBack:!!ce||!_e,showClose:true,onBack:ce||Ce,onClose:se}),/*#__PURE__*/u$1(w.Body,{ref:Se,$colorScheme:F.appearance.palette.colorScheme,style:{marginBottom:ue?"0.5rem":void 0},children:[Te&&/*#__PURE__*/u$1(J,{children:/*#__PURE__*/u$1(i$1,{style:{background:"transparent"},children:[/*#__PURE__*/u$1(W$1,{children:/*#__PURE__*/u$1(ForwardRef,{})}),/*#__PURE__*/u$1("input",{className:"login-method-button",type:"text",placeholder:G("connectWallet.searchPlaceholder",{count:String(ve)}),onChange:e=>xe(e.target.value),value:Le})]})}),ue&&libExports.isMobile&&"loading"===ge&&/*#__PURE__*/u$1("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[/*#__PURE__*/u$1(v,{variant:"primary",onClick:()=>window.open(ue.universal??ue.native,"_blank"),style:{width:"100%"},children:G("connectWallet.openInApp")}),/*#__PURE__*/u$1(le,{value:ue.universal??ue.native,iconOnly:true,children:"Copy link"})]}),ue&&!libExports.isMobile&&"loading"===ge&&/*#__PURE__*/u$1("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:/*#__PURE__*/u$1(le,{value:ue.universal??ue.native,iconOnly:true,children:G("connectWallet.copyLink")})}),ue&&!libExports.isMobile&&/*#__PURE__*/u$1(x,{size:280,url:ue.universal??ue.native,squareLogoElement:we?.icon?"string"==typeof we.icon?e=>/*#__PURE__*/u$1("svg",{...e,children:/*#__PURE__*/u$1("image",{href:we.icon,height:e.height,width:e.width})}):we.icon:O$1}),ue&&!libExports.isMobile&&we?.url&&("binance"===we.id||"binanceus"===we.id||"binance-defi"===we.id||"robinhood"===we.id)&&/*#__PURE__*/u$1(ie,{children:[/*#__PURE__*/u$1("span",{children:["Don't have ",we.name,"? "]}),/*#__PURE__*/u$1(i$2,{href:we.url,target:"_blank",size:"sm",children:"Download here"})]}),/*#__PURE__*/u$1(X,{children:[we&&!ue&&"string"==typeof we.connector&&/*#__PURE__*/u$1(Z,{onClick:()=>window.open(we.connector,"_blank"),children:[we.icon&&("string"==typeof we.icon?/*#__PURE__*/u$1(i$3,{src:we.icon}):/*#__PURE__*/u$1(we.icon,{})),/*#__PURE__*/u$1(te,{children:we.name})]}),me?.chains.some((e=>e.startsWith("eip155")))&&!we&&/*#__PURE__*/u$1(Z,{onClick:()=>je({...me,chains:me.chains.filter((e=>e.startsWith("eip155")))}),children:[me.icon&&("string"==typeof me.icon?/*#__PURE__*/u$1(i$3,{src:me.icon}):/*#__PURE__*/u$1(me.icon,{})),/*#__PURE__*/u$1(te,{children:me.label}),/*#__PURE__*/u$1(ee,{children:/*#__PURE__*/u$1(P,{})})]}),me?.chains.some((e=>e.startsWith("solana")))&&!we&&/*#__PURE__*/u$1(Z,{onClick:()=>je({...me,chains:me.chains.filter((e=>e.startsWith("solana")))}),children:[me.icon&&("string"==typeof me.icon?/*#__PURE__*/u$1(i$3,{src:me.icon}):/*#__PURE__*/u$1(me.icon,{})),/*#__PURE__*/u$1(te,{children:me.label}),/*#__PURE__*/u$1(ee,{children:/*#__PURE__*/u$1(V,{})})]}),_e&&/*#__PURE__*/u$1(S$1,{children:[!(ve>0)&&/*#__PURE__*/u$1(ne,{children:G("connectWallet.noWalletsFound")}),ve>0&&!ue&&/*#__PURE__*/u$1("div",{style:{maxHeight:56*Math.min(ye.length,5)+5,width:"100%"},children:/*#__PURE__*/u$1("div",{style:{height:`${Ae.getTotalSize()}px`,width:"100%",position:"relative"},children:Ae.getVirtualItems().map((e=>/*#__PURE__*/u$1(Y,{index:e.index,style:{position:"absolute",top:0,left:0,height:`${e.size}px`,transform:`translateY(${e.start}px)`},data:{wallets:ye,walletChainType:oe,handleWalletClick:je}},e.key)))})})]})]})]}),/*#__PURE__*/u$1(w.Footer,{children:[we&&!ue&&"string"!=typeof we.connector&&"error"===ge&&/*#__PURE__*/u$1(w.Actions,{children:/*#__PURE__*/u$1(v,{style:{width:"100%",alignItems:"center"},variant:"error",onClick:()=>be(we.connector,{name:we.name,icon:we.icon,id:we.id,url:we.url}),children:G("connectWallet.retry")})}),!!(de&&de.legal.privacyPolicyUrl&&de.legal.termsAndConditionsUrl)&&/*#__PURE__*/u$1(t$1,{app:de,alwaysShowImplicitConsent:true}),/*#__PURE__*/u$1(w.Watermark,{})]})]})};let J=gt.div`
  position: sticky;
  /* Offset by negative margin to account for focus outline */
  margin-top: -3px;
  padding-top: 3px;
  top: -3px;
  z-index: 1;
  background: var(--privy-color-background);
  padding-bottom: calc(var(--screen-space) / 2);
`,X=gt.div`
  display: flex;
  flex-direction: column;
  gap: ${5}px;
`,Z=gt.button`
  && {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    position: relative;
    text-align: left;
    font-weight: 500;
    transition: background 200ms ease-in;
    width: calc(100% - 4px);
    border-radius: var(--privy-border-radius-md);
    padding: 0.75em;
    border: 1px solid var(--privy-color-foreground-4);
    justify-content: space-between;
  }

  &:hover {
    background: var(--privy-color-background-2);
  }
`,ee=gt.span`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  & > svg {
    border-radius: var(--privy-border-radius-full);
    stroke-width: 2.5;
    width: 100%;
    max-height: 1rem;
    max-width: 1rem;
    flex-shrink: 0;
  }

  & > svg:not(:last-child) {
    border-radius: var(--privy-border-radius-full);
    margin-right: -0.375rem;
  }
`,ne=gt.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,te=gt.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--privy-color-foreground);
  font-weight: 400;
  flex: 1;
`,le=gt(p)`
  && {
    margin: 0.5rem auto 0;
  }
`,ie=gt.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground-3);
`;

export { D, G, H, Y };
