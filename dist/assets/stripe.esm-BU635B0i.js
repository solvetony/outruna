var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript$2 = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript$2 = function injectScript(params) {
  var queryString = '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper$1 = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.54.2",
    startTime: startTime
  });
};

var stripePromise$1 = null;
var loadScript$2 = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise$1 !== null) {
    return stripePromise$1;
  }

  stripePromise$1 = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript$2();

      if (script && params) ; else if (!script) {
        script = injectScript$2(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise$1;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper$1(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1$1 = Promise.resolve().then(function () {
  return loadScript$2(null);
});
var loadCalled$1 = false;
stripePromise$1$1["catch"](function (err) {
  if (!loadCalled$1) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled$1 = true;
  var startTime = Date.now();
  return stripePromise$1$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = true,
      _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) ; else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ONRAMP_URL = 'https://crypto-js.stripe.com/crypto-onramp-outer.js';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(ONRAMP_URL, "\"]"));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (ONRAMP_URL !== script.src) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript() {
  var script = document.createElement('script');
  script.src = ONRAMP_URL;
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe Crypto requires a <body> element.');
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper(stripe, startTime) {
  // TODO(forestfang): we do not have a mechanism to track metrics here yet
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: 'crypto-js',
    version: "1.1.3",
    startTime: startTime
  });
};
var stripePromise = null;
var loadScript = function loadScript() {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }
  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }
    if (window.StripeOnramp) {
      resolve(window.StripeOnramp);
      return;
    }
    try {
      var script = findScript();
      if (!script) {
        script = injectScript();
      }
      script.addEventListener('load', function () {
        if (window.StripeOnramp) {
          resolve(window.StripeOnramp);
        } else {
          reject(new Error('StripeOnramp not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load StripeOnramp'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripeOnramp = function initStripeOnramp(maybeStripeOnramp, args, startTime) {
  if (maybeStripeOnramp === null) {
    return null;
  }
  var stripeOnramp = maybeStripeOnramp.apply(undefined, args);
  registerWrapper(stripeOnramp, startTime);
  return stripeOnramp;
};

var EMBEDDED_COMPONENTS_ONRAMP_URL = 'https://js.stripe.com/crypto-onramp/v1/crypto-onramp.js';
var findScript$1 = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(EMBEDDED_COMPONENTS_ONRAMP_URL, "\"]"));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (EMBEDDED_COMPONENTS_ONRAMP_URL !== script.src) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript$1 = function injectScript() {
  var script = document.createElement('script');
  script.src = EMBEDDED_COMPONENTS_ONRAMP_URL;
  script.async = true;
  script.type = 'module';
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. loadCryptoOnrampAndInitialize requires a <body> element.');
  }
  headOrBody.appendChild(script);
  return script;
};
var cryptoOnrampPromise = null;
var loadScript$1 = function loadScript() {
  if (cryptoOnrampPromise !== null) {
    return cryptoOnrampPromise;
  }
  cryptoOnrampPromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }
    if (window.loadCryptoOnrampAndInitialize) {
      resolve(window.loadCryptoOnrampAndInitialize);
      return;
    }
    try {
      var script = findScript$1();
      if (!script) {
        script = injectScript$1();
      }
      script.addEventListener('load', function () {
        if (window.loadCryptoOnrampAndInitialize) {
          resolve(window.loadCryptoOnrampAndInitialize);
        } else {
          reject(new Error('loadCryptoOnrampAndInitialize not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load loadCryptoOnrampAndInitialize'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return cryptoOnrampPromise;
};
var loadCryptoOnrampAndInitialize = function loadCryptoOnrampAndInitialize(publishableKey, options) {
  return loadScript$1().then(function (maybeCryptoOnramp) {
    if (maybeCryptoOnramp === null) {
      return null;
    }
    return maybeCryptoOnramp(publishableKey, options);
  });
};

// Execute our own script injection after a tick to give users time to do their
// own script injection.
var stripeOnrampPromise = Promise.resolve().then(function () {
  return loadScript();
});
var loadCalled = false;
stripeOnrampPromise["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripeOnramp = function loadStripeOnramp() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return Promise.all([loadStripe.apply(void 0, args), stripeOnrampPromise]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      maybeStripeOnramp = _ref2[1];
    return initStripeOnramp(maybeStripeOnramp, args, startTime);
  });
};
var getStandaloneOnrampUrl = function getStandaloneOnrampUrl(options) {
  return stripeOnrampPromise.then(function (stripeOnramp) {
    // Resolve to null if promise returns null (happens serverside)
    if (stripeOnramp === null) {
      return null;
    }
    var standaloneOnramp = stripeOnramp.Standalone(options);
    return standaloneOnramp.getUrl();
  })["catch"](function () {
    // Resolve to null on all errors
    return null;
  });
};

export { getStandaloneOnrampUrl, loadCryptoOnrampAndInitialize, loadStripeOnramp };
