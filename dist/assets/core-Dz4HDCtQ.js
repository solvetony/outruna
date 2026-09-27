const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BBBogHUM.js","assets/index-DDjfO02D.js","assets/index-gMSXcKfv.css","assets/custom-Dm2Ty-xk.js","assets/fallback-LJ7f1ENV.js","assets/parseSignature-MAHXPV1b.js","assets/ccip-ClEpRwj5.js","assets/parseEther-CiBnsXAI.js","assets/secp256k1-D9IKRcEe.js","assets/features-B_rtJqSW.js","assets/basic-Px1masP5.js","assets/index-nun_gZJ2.js","assets/dijkstra-3x-KSy8X.js","assets/w3m-modal-G38nJ-Fj.js"])))=>i.map(i=>d[i]);
import { cm as formatUnits, _ as __vitePreload, ca as erc20Abi, iL as requireQuickFormatUnescaped, gd as getDefaultExportFromCjs, iM as safeJsonStringify, iN as IEvents, iO as cjsExports, iP as fromString, iQ as toString, iR as cjsExports$1, iS as cjsExports$2, iT as C$5, iU as detect, iV as concat, iW as sn$1, iX as bs58, iY as decode, iZ as encode, i_ as base32, i$ as blakejsExports, j0 as eventsExports, j1 as i$7, j2 as h$4, j3 as formatJsonRpcRequest, j4 as r$3, j5 as o$4, j6 as f$7, j7 as isJsonRpcRequest, j8 as isJsonRpcResponse, j9 as formatJsonRpcResult, ja as xe$1, jb as Po$2, jc as Qe$2, jd as Qo$2, je as safeJsonParse, jf as getBigIntRpcId, jg as formatJsonRpcError, jh as isJsonRpcResult, ji as isJsonRpcError, jj as payloadId, jk as f$8, D as http, d8 as toHex$1 } from './index-DDjfO02D.js';
import { f as fallback } from './fallback-LJ7f1ENV.js';

var define_process_env_default$3 = {};
const ConstantsUtil$3 = {
  WC_NAME_SUFFIX: ".reown.id",
  WC_NAME_SUFFIX_LEGACY: ".wcn.id",
  BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
  PULSE_API_URL: "https://pulse.walletconnect.org",
  W3M_API_URL: "https://api.web3modal.org",
  CONNECTOR_ID: {
    WALLET_CONNECT: "walletConnect",
    INJECTED: "injected",
    WALLET_STANDARD: "announced",
    COINBASE: "coinbaseWallet",
    COINBASE_SDK: "coinbaseWalletSDK",
    SAFE: "safe",
    LEDGER: "ledger",
    OKX: "okx",
    EIP6963: "eip6963",
    AUTH: "ID_AUTH"
  },
  CONNECTOR_NAMES: {
    AUTH: "Auth"
  },
  AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
  LIMITS: {
    PENDING_TRANSACTIONS: 99
  },
  CHAIN: {
    EVM: "eip155",
    SOLANA: "solana",
    POLKADOT: "polkadot",
    BITCOIN: "bip122"
  },
  CHAIN_NAME_MAP: {
    eip155: "EVM Networks",
    solana: "Solana",
    polkadot: "Polkadot",
    bip122: "Bitcoin",
    cosmos: "Cosmos",
    sui: "Sui",
    stacks: "Stacks"
  },
  ADAPTER_TYPES: {
    BITCOIN: "bitcoin",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5"
  },
  USDT_CONTRACT_ADDRESSES: [
    "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    "0x919C1c267BC06a7039e03fcc2eF738525769109c",
    "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
    "0x55d398326f99059fF775485246999027B3197955",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
  ],
  SOLANA_SPL_TOKEN_ADDRESSES: {
    SOL: "So11111111111111111111111111111111111111112"
  },
  HTTP_STATUS_CODES: {
    SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
    SERVICE_UNAVAILABLE: 503,
    FORBIDDEN: 403
  },
  UNSUPPORTED_NETWORK_NAME: "Unknown Network",
  SECURE_SITE_SDK_ORIGIN: (typeof process !== "undefined" && typeof define_process_env_default$3 !== "undefined" ? define_process_env_default$3["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org",
  REMOTE_FEATURES_ALERTS: {
    MULTI_WALLET_NOT_ENABLED: {
      DEFAULT: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."
      },
      CONNECTIONS_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."
      },
      CONNECTION_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."
      }
    }
  },
  IS_DEVELOPMENT: typeof process !== "undefined" && false
};

const NetworkUtil$1 = {
    caipNetworkIdToNumber(caipnetworkId) {
        return caipnetworkId ? Number(caipnetworkId.split(':')[1]) : undefined;
    },
    parseEvmChainId(chainId) {
        return typeof chainId === 'string'
            ? this.caipNetworkIdToNumber(chainId)
            : chainId;
    },
    getNetworksByNamespace(networks, namespace) {
        return networks?.filter(network => network.chainNamespace === namespace) || [];
    },
    getFirstNetworkByNamespace(networks, namespace) {
        return this.getNetworksByNamespace(networks, namespace)[0];
    },
    getNetworkNameByCaipNetworkId(caipNetworks, caipNetworkId) {
        if (!caipNetworkId) {
            return undefined;
        }
        const caipNetwork = caipNetworks.find(network => network.caipNetworkId === caipNetworkId);
        if (caipNetwork) {
            return caipNetwork.name;
        }
        const [namespace] = caipNetworkId.split(':');
        return ConstantsUtil$3.CHAIN_NAME_MAP?.[namespace] || undefined;
    }
};
const AVAILABLE_NAMESPACES = [
    'eip155',
    'solana',
    'polkadot',
    'bip122',
    'cosmos',
    'sui',
    'stacks'
];

/*
 *  big.js v6.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2024 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */


/************************************** EDITABLE DEFAULTS *****************************************/


  // The default values below must be integers within the stated ranges.

  /*
   * The maximum number of decimal places (DP) of the results of operations involving division:
   * div and sqrt, and pow with negative exponents.
   */
var DP = 20,          // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,             // 0, 1, 2 or 3

  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,       // 0 to 1000000

  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,    // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,            // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
   */
  PE = 21,            // 0 to 1000000

  /*
   * When true, an error will be thrown if a primitive number is passed to the Big constructor,
   * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
   * primitive number without a loss of precision.
   */
  STRICT = false,     // true or false


/**************************************************************************************************/


  // Error messages.
  NAME = '[big.js] ',
  INVALID = NAME + 'Invalid ',
  INVALID_DP = INVALID + 'decimal places',
  INVALID_RM = INVALID + 'rounding mode',
  DIV_BY_ZERO = NAME + 'Division by zero',

  // The shared prototype object.
  P$4 = {},
  UNDEFINED = void 0,
  NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;


/*
 * Create and return a Big constructor.
 */
function _Big_() {

  /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */
  function Big(n) {
    var x = this;

    // Enable constructor usage without new.
    if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

    // Duplicate.
    if (n instanceof Big) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      if (typeof n !== 'string') {
        if (Big.strict === true && typeof n !== 'bigint') {
          throw TypeError(INVALID + 'value');
        }

        // Minus zero?
        n = n === 0 && 1 / n < 0 ? '-0' : String(n);
      }

      parse(x, n);
    }

    // Retain a reference to this Big constructor.
    // Shadow Big.prototype.constructor which points to Object.
    x.constructor = Big;
  }

  Big.prototype = P$4;
  Big.DP = DP;
  Big.RM = RM;
  Big.NE = NE;
  Big.PE = PE;
  Big.strict = STRICT;
  Big.roundDown = 0;
  Big.roundHalfUp = 1;
  Big.roundHalfEven = 2;
  Big.roundUp = 3;

  return Big;
}


/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
  var e, i, nl;

  if (!NUMERIC.test(n)) {
    throw Error(INVALID + 'number');
  }

  // Determine sign.
  x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

  // Decimal point?
  if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

  // Exponential form?
  if ((i = n.search(/e/i)) > 0) {

    // Determine exponent.
    if (e < 0) e = i;
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {

    // Integer.
    e = n.length;
  }

  nl = n.length;

  // Determine leading zeros.
  for (i = 0; i < nl && n.charAt(i) == '0';) ++i;

  if (i == nl) {

    // Zero.
    x.c = [x.e = 0];
  } else {

    // Determine trailing zeros.
    for (; nl > 0 && n.charAt(--nl) == '0';);
    x.e = e - i - 1;
    x.c = [];

    // Convert string to array of digits without leading/trailing zeros.
    for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
  }

  return x;
}


/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, sd, rm, more) {
  var xc = x.c;

  if (rm === UNDEFINED) rm = x.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }

  if (sd < 1) {
    more =
      rm === 3 && (more || !!xc[0]) || sd === 0 && (
      rm === 1 && xc[0] >= 5 ||
      rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED))
    );

    xc.length = 1;

    if (more) {

      // 1, 0.1, 0.01, 0.001, 0.0001 etc.
      x.e = x.e - sd + 1;
      xc[0] = 1;
    } else {

      // Zero.
      xc[0] = x.e = 0;
    }
  } else if (sd < xc.length) {

    // xc[sd] is the digit after the digit that may be rounded up.
    more =
      rm === 1 && xc[sd] >= 5 ||
      rm === 2 && (xc[sd] > 5 || xc[sd] === 5 &&
        (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) ||
      rm === 3 && (more || !!xc[0]);

    // Remove any digits after the required precision.
    xc.length = sd;

    // Round up?
    if (more) {

      // Rounding up may mean the previous digit has to be rounded up.
      for (; ++xc[--sd] > 9;) {
        xc[sd] = 0;
        if (sd === 0) {
          ++x.e;
          xc.unshift(1);
          break;
        }
      }
    }

    // Remove trailing zeros.
    for (sd = xc.length; !xc[--sd];) xc.pop();
  }

  return x;
}


/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */
function stringify(x, doExponential, isNonzero) {
  var e = x.e,
    s = x.c.join(''),
    n = s.length;

  // Exponential notation?
  if (doExponential) {
    s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

  // Normal notation.
  } else if (e < 0) {
    for (; ++e;) s = '0' + s;
    s = '0.' + s;
  } else if (e > 0) {
    if (++e > n) {
      for (e -= n; e--;) s += '0';
    } else if (e < n) {
      s = s.slice(0, e) + '.' + s.slice(e);
    }
  } else if (n > 1) {
    s = s.charAt(0) + '.' + s.slice(1);
  }

  return x.s < 0 && isNonzero ? '-' + s : s;
}


// Prototype/instance methods


/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P$4.abs = function () {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};


/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */
P$4.cmp = function (y) {
  var isneg,
    x = this,
    xc = x.c,
    yc = (y = new x.constructor(y)).c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;

  isneg = i < 0;

  // Compare exponents.
  if (k != l) return k > l ^ isneg ? 1 : -1;

  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = -1; ++i < j;) {
    if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
  }

  // Compare lengths.
  return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};


/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P$4.div = function (y) {
  var x = this,
    Big = x.constructor,
    a = x.c,                  // dividend
    b = (y = new Big(y)).c,   // divisor
    k = x.s == y.s ? 1 : -1,
    dp = Big.DP;

  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }

  // Divisor is zero?
  if (!b[0]) {
    throw Error(DIV_BY_ZERO);
  }

  // Dividend is 0? Return +-0.
  if (!a[0]) {
    y.s = k;
    y.c = [y.e = 0];
    return y;
  }

  var bl, bt, n, cmp, ri,
    bz = b.slice(),
    ai = bl = b.length,
    al = a.length,
    r = a.slice(0, bl),   // remainder
    rl = r.length,
    q = y,                // quotient
    qc = q.c = [],
    qi = 0,
    p = dp + (q.e = x.e - y.e) + 1;    // precision of the result

  q.s = k;
  k = p < 0 ? 0 : p;

  // Create version of divisor with leading zero.
  bz.unshift(0);

  // Add zeros to make remainder as long as divisor.
  for (; rl++ < bl;) r.push(0);

  do {

    // n is how many times the divisor goes into current remainder.
    for (n = 0; n < 10; n++) {

      // Compare divisor and remainder.
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl;) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      }

      // If divisor < remainder, subtract divisor from remainder.
      if (cmp < 0) {

        // Remainder can't be more than 1 digit longer than divisor.
        // Equalise lengths using divisor with extra leading zero?
        for (bt = rl == bl ? b : bz; rl;) {
          if (r[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r[--ri];) r[ri] = 9;
            --r[ri];
            r[rl] += 10;
          }
          r[rl] -= bt[rl];
        }

        for (; !r[0];) r.shift();
      } else {
        break;
      }
    }

    // Add the digit n to the result array.
    qc[qi++] = cmp ? n : ++n;

    // Update the remainder.
    if (r[0] && cmp) r[rl] = a[ai] || 0;
    else r = [a[ai]];

  } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

  // Leading zero? Do not remove if result is simply zero (qi == 1).
  if (!qc[0] && qi != 1) {

    // There can't be more than one zero.
    qc.shift();
    q.e--;
    p--;
  }

  // Round?
  if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);

  return q;
};


/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P$4.eq = function (y) {
  return this.cmp(y) === 0;
};


/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P$4.gt = function (y) {
  return this.cmp(y) > 0;
};


/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P$4.gte = function (y) {
  return this.cmp(y) > -1;
};


/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P$4.lt = function (y) {
  return this.cmp(y) < 0;
};


/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P$4.lte = function (y) {
  return this.cmp(y) < 1;
};


/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P$4.minus = P$4.sub = function (y) {
  var i, j, t, xlty,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  // Signs differ?
  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }

  var xc = x.c.slice(),
    xe = x.e,
    yc = y.c,
    ye = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y.s = -b;
    } else if (xc[0]) {
      y = new Big(x);
    } else {
      y.s = 1;
    }
    return y;
  }

  // Determine which is the bigger number. Prepend zeros to equalise exponents.
  if (a = xe - ye) {

    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }

    t.reverse();
    for (b = a; b--;) t.push(0);
    t.reverse();
  } else {

    // Exponents equal. Check digit by digit.
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;

    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }

  // x < y? Point xc to the array of the bigger number.
  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }

  /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */
  if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

  // Subtract yc from xc.
  for (b = i; j > a;) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i];) xc[i] = 9;
      --xc[i];
      xc[j] += 10;
    }

    xc[j] -= yc[j];
  }

  // Remove trailing zeros.
  for (; xc[--b] === 0;) xc.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xc[0] === 0;) {
    xc.shift();
    --ye;
  }

  if (!xc[0]) {

    // n - n = +0
    y.s = 1;

    // Result must be zero.
    xc = [ye = 0];
  }

  y.c = xc;
  y.e = ye;

  return y;
};


/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P$4.mod = function (y) {
  var ygtx,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  if (!y.c[0]) {
    throw Error(DIV_BY_ZERO);
  }

  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;

  if (ygtx) return new Big(x);

  a = Big.DP;
  b = Big.RM;
  Big.DP = Big.RM = 0;
  x = x.div(y);
  Big.DP = a;
  Big.RM = b;

  return this.minus(x.times(y));
};


/*
 * Return a new Big whose value is the value of this Big negated.
 */
P$4.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s;
  return x;
};


/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P$4.plus = P$4.add = function (y) {
  var e, k, t,
    x = this,
    Big = x.constructor;

  y = new Big(y);

  // Signs differ?
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }

  var xe = x.e,
    xc = x.c,
    ye = y.e,
    yc = y.c;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y = new Big(x);
      } else {
        y.s = x.s;
      }
    }
    return y;
  }

  xc = xc.slice();

  // Prepend zeros to equalise exponents.
  // Note: reverse faster than unshifts.
  if (e = xe - ye) {
    if (e > 0) {
      ye = xe;
      t = yc;
    } else {
      e = -e;
      t = xc;
    }

    t.reverse();
    for (; e--;) t.push(0);
    t.reverse();
  }

  // Point xc to the longer array.
  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }

  e = yc.length;

  // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
  for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;

  // No need to check for zero, as +x + +y != 0 && -x + -y != 0

  if (k) {
    xc.unshift(k);
    ++ye;
  }

  // Remove trailing zeros.
  for (e = xc.length; xc[--e] === 0;) xc.pop();

  y.c = xc;
  y.e = ye;

  return y;
};


/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P$4.pow = function (n) {
  var x = this,
    one = new x.constructor('1'),
    y = one,
    isneg = n < 0;

  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
    throw Error(INVALID + 'exponent');
  }

  if (isneg) n = -n;

  for (;;) {
    if (n & 1) y = y.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }

  return isneg ? one.div(y) : y;
};


/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P$4.prec = function (sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + 'precision');
  }
  return round(new this.constructor(this), sd, rm);
};


/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P$4.round = function (dp, rm) {
  if (dp === UNDEFINED) dp = 0;
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};


/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P$4.sqrt = function () {
  var r, c, t,
    x = this,
    Big = x.constructor,
    s = x.s,
    e = x.e,
    half = new Big('0.5');

  // Zero?
  if (!x.c[0]) return new Big(x);

  // Negative?
  if (s < 0) {
    throw Error(NAME + 'No square root');
  }

  // Estimate.
  s = Math.sqrt(+stringify(x, true, true));

  // Math.sqrt underflow/overflow?
  // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
  if (s === 0 || s === 1 / 0) {
    c = x.c.join('');
    if (!(c.length + e & 1)) c += '0';
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
  } else {
    r = new Big(s + '');
  }

  e = r.e + (Big.DP += 4);

  // Newton-Raphson iteration.
  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

  return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};


/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P$4.times = P$4.mul = function (y) {
  var c,
    x = this,
    Big = x.constructor,
    xc = x.c,
    yc = (y = new Big(y)).c,
    a = xc.length,
    b = yc.length,
    i = x.e,
    j = y.e;

  // Determine sign of result.
  y.s = x.s == y.s ? 1 : -1;

  // Return signed 0 if either 0.
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }

  // Initialise exponent of result as x.e + y.e.
  y.e = i + j;

  // If array xc has fewer digits than yc, swap xc and yc, and lengths.
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }

  // Initialise coefficient array of result with zeros.
  for (c = new Array(j = a + b); j--;) c[j] = 0;

  // Multiply.

  // i is initially xc.length.
  for (i = b; i--;) {
    b = 0;

    // a is yc.length.
    for (j = a + i; j > i;) {

      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;

      // carry
      b = b / 10 | 0;
    }

    c[j] = b;
  }

  // Increment result exponent if there is a final carry, otherwise remove leading zero.
  if (b) ++y.e;
  else c.shift();

  // Remove trailing zeros.
  for (i = c.length; !c[--i];) c.pop();
  y.c = c;

  return y;
};


/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P$4.toExponential = function (dp, rm) {
  var x = this,
    n = x.c[0];

  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), ++dp, rm);
    for (; x.c.length < dp;) x.c.push(0);
  }

  return stringify(x, true, !!n);
};


/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P$4.toFixed = function (dp, rm) {
  var x = this,
    n = x.c[0];

  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), dp + x.e + 1, rm);

    // x.e may have changed if the value is rounded up.
    for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
  }

  return stringify(x, false, !!n);
};


/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P$4[Symbol.for('nodejs.util.inspect.custom')] = P$4.toJSON = P$4.toString = function () {
  var x = this,
    Big = x.constructor;
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};


/*
 * Return the value of this Big as a primitve number.
 */
P$4.toNumber = function () {
  var n = +stringify(this, true, true);
  if (this.constructor.strict === true && !this.eq(n.toString())) {
    throw Error(NAME + 'Imprecise conversion');
  }
  return n;
};


/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P$4.toPrecision = function (sd, rm) {
  var x = this,
    Big = x.constructor,
    n = x.c[0];

  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + 'precision');
    }
    x = round(new Big(x), sd, rm);
    for (; x.c.length < sd;) x.c.push(0);
  }

  return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};


/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P$4.valueOf = function () {
  var x = this,
    Big = x.constructor;
  if (Big.strict === true) {
    throw Error(NAME + 'valueOf disallowed');
  }
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};


// Export


var Big = _Big_();

const NumberUtil = {
    bigNumber(value) {
        if (!value) {
            return new Big(0);
        }
        return new Big(value);
    },
    multiply(a, b) {
        if (a === undefined || b === undefined) {
            return new Big(0);
        }
        const aBigNumber = new Big(a);
        const bBigNumber = new Big(b);
        return aBigNumber.times(bBigNumber);
    },
    toFixed(value, decimals = 2) {
        if (value === undefined || value === '') {
            return new Big(0).toFixed(decimals);
        }
        return new Big(value).toFixed(decimals);
    },
    formatNumberToLocalString(value, decimals = 2) {
        if (value === undefined || value === '') {
            return '0.00';
        }
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals,
                roundingMode: 'floor'
            });
        }
        return parseFloat(value).toLocaleString('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals,
            roundingMode: 'floor'
        });
    },
    parseLocalStringToNumber(value) {
        if (value === undefined || value === '') {
            return 0;
        }
        const sanitizedValue = value.replace(/,/gu, '');
        return new Big(sanitizedValue).toNumber();
    }
};

const erc20ABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_from',
                type: 'address'
            },
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
];

const swapABI = [
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'amount', type: 'uint256' }
        ],
        outputs: [{ type: 'bool' }]
    }
];

const usdtABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
];

const ContractUtil = {
    getERC20Abi: (tokenAddress) => {
        if (ConstantsUtil$3.USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
            return usdtABI;
        }
        return erc20ABI;
    },
    getSwapAbi: () => swapABI
};

const ParseUtil = {
    validateCaipAddress(address) {
        if (address.split(':')?.length !== 3) {
            throw new Error('Invalid CAIP Address');
        }
        return address;
    },
    parseCaipAddress(caipAddress) {
        const parts = caipAddress.split(':');
        if (parts.length !== 3) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        const [chainNamespace, chainId, address] = parts;
        if (!chainNamespace || !chainId || !address) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId,
            address
        };
    },
    parseCaipNetworkId(caipNetworkId) {
        const parts = caipNetworkId.split(':');
        if (parts.length !== 2) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        const [chainNamespace, chainId] = parts;
        if (!chainNamespace || !chainId) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId
        };
    }
};

const ErrorUtil$1 = {
    RPC_ERROR_CODE: {
        USER_REJECTED_REQUEST: 4001
    },
    PROVIDER_RPC_ERROR_NAME: {
        PROVIDER_RPC: 'ProviderRpcError',
        USER_REJECTED_REQUEST: 'UserRejectedRequestError'
    },
    isRpcProviderError(error) {
        try {
            if (typeof error === 'object' && error !== null) {
                const objErr = error;
                const hasMessage = typeof objErr['message'] === 'string';
                const hasCode = typeof objErr['code'] === 'number';
                return hasMessage && hasCode;
            }
            return false;
        }
        catch {
            return false;
        }
    },
    isUserRejectedMessage(message) {
        return (message.toLowerCase().includes('user rejected') ||
            message.toLowerCase().includes('user cancelled') ||
            message.toLowerCase().includes('user canceled'));
    },
    isUserRejectedRequestError(error) {
        if (ErrorUtil$1.isRpcProviderError(error)) {
            const isUserRejectedCode = error.code === ErrorUtil$1.RPC_ERROR_CODE.USER_REJECTED_REQUEST;
            return isUserRejectedCode || ErrorUtil$1.isUserRejectedMessage(error.message);
        }
        if (error instanceof Error) {
            return ErrorUtil$1.isUserRejectedMessage(error.message);
        }
        return false;
    }
};
class ProviderRpcError extends Error {
    constructor(cause, options) {
        super(options.message, { cause });
        this.name = ErrorUtil$1.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC;
        this.code = options.code;
    }
}
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ErrorUtil$1.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
            message: 'User rejected the request'
        });
        this.name = ErrorUtil$1.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
}

const SafeLocalStorageKeys = {
    WALLET_ID: '@appkit/wallet_id',
    WALLET_NAME: '@appkit/wallet_name',
    SOLANA_WALLET: '@appkit/solana_wallet',
    SOLANA_CAIP_CHAIN: '@appkit/solana_caip_chain',
    ACTIVE_CAIP_NETWORK_ID: '@appkit/active_caip_network_id',
    CONNECTED_SOCIAL: '@appkit/connected_social',
    CONNECTED_SOCIAL_USERNAME: '@appkit-wallet/SOCIAL_USERNAME',
    RECENT_WALLETS: '@appkit/recent_wallets',
    RECENT_WALLET: '@appkit/recent_wallet',
    DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
    ACTIVE_NAMESPACE: '@appkit/active_namespace',
    CONNECTED_NAMESPACES: '@appkit/connected_namespaces',
    CONNECTION_STATUS: '@appkit/connection_status',
    SIWX_AUTH_TOKEN: '@appkit/siwx-auth-token',
    SIWX_NONCE_TOKEN: '@appkit/siwx-nonce-token',
    TELEGRAM_SOCIAL_PROVIDER: '@appkit/social_provider',
    NATIVE_BALANCE_CACHE: '@appkit/native_balance_cache',
    PORTFOLIO_CACHE: '@appkit/portfolio_cache',
    ENS_CACHE: '@appkit/ens_cache',
    IDENTITY_CACHE: '@appkit/identity_cache',
    PREFERRED_ACCOUNT_TYPES: '@appkit/preferred_account_types',
    CONNECTIONS: '@appkit/connections',
    DISCONNECTED_CONNECTOR_IDS: '@appkit/disconnected_connector_ids',
    HISTORY_TRANSACTIONS_CACHE: '@appkit/history_transactions_cache',
    TOKEN_PRICE_CACHE: '@appkit/token_price_cache',
    RECENT_EMAILS: '@appkit/recent_emails',
    LATEST_APPKIT_VERSION: '@appkit/latest_version'
};
function getSafeConnectorIdKey(namespace) {
    if (!namespace) {
        throw new Error('Namespace is required for CONNECTED_CONNECTOR_ID');
    }
    return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage = {
    setItem(key, value) {
        if (isSafe() && value !== undefined) {
            localStorage.setItem(key, value);
        }
    },
    getItem(key) {
        if (isSafe()) {
            return localStorage.getItem(key) || undefined;
        }
        return undefined;
    },
    removeItem(key) {
        if (isSafe()) {
            localStorage.removeItem(key);
        }
    },
    clear() {
        if (isSafe()) {
            localStorage.clear();
        }
    }
};
function isSafe() {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function getW3mThemeVariables(themeVariables, themeType) {
    if (themeType === 'light') {
        return {
            '--w3m-accent': themeVariables?.['--w3m-accent'] || 'hsla(231, 100%, 70%, 1)',
            '--w3m-background': '#fff'
        };
    }
    return {
        '--w3m-accent': themeVariables?.['--w3m-accent'] || 'hsla(230, 100%, 67%, 1)',
        '--w3m-background': '#202020'
    };
}

/* eslint @typescript-eslint/no-explicit-any: off */
// symbols
const GET_ORIGINAL_SYMBOL = Symbol();
// get object prototype
const getProto = Object.getPrototypeOf;
const objectsToTrack = new WeakMap();
// check if obj is a plain object or an array
const isObjectToTrack = (obj) => obj &&
    (objectsToTrack.has(obj)
        ? objectsToTrack.get(obj)
        : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
/**
 * Unwrap proxy to get the original object.
 *
 * Used to retrieve the original object used to create the proxy instance with `createProxy`.
 *
 * @param {Proxy<object>} obj -  The proxy wrapper of the originial object.
 * @returns {object | null} - Return either the unwrapped object if exists.
 *
 * @example
 * import { createProxy, getUntracked } from 'proxy-compare';
 *
 * const original = { a: "1", c: "2", d: { e: "3" } };
 * const affected = new WeakMap();
 *
 * const proxy = createProxy(original, affected);
 * const originalFromProxy = getUntracked(proxy)
 *
 * Object.is(original, originalFromProxy) // true
 * isChanged(original, originalFromProxy, affected) // false
 */
const getUntracked = (obj) => {
    if (isObjectToTrack(obj)) {
        return obj[GET_ORIGINAL_SYMBOL] || null;
    }
    return null;
};
/**
 * Mark object to be tracked.
 *
 * This function marks an object that will be passed into `createProxy`
 * as marked to track or not. By default only Array and Object are marked to track,
 * so this is useful for example to mark a class instance to track or to mark a object
 * to be untracked when creating your proxy.
 *
 * @param obj - Object to mark as tracked or not.
 * @param mark - Boolean indicating whether you want to track this object or not.
 * @returns - No return.
 *
 * @example
 * import { createProxy, markToTrack, isChanged } from 'proxy-compare';
 *
 * const nested = { e: "3" }
 *
 * markToTrack(nested, false)
 *
 * const original = { a: "1", c: "2", d: nested };
 * const affected = new WeakMap();
 *
 * const proxy = createProxy(original, affected);
 *
 * proxy.d.e
 *
 * isChanged(original, { d: { e: "3" } }, affected) // true
 */
const markToTrack = (obj, mark = true) => {
    objectsToTrack.set(obj, mark);
};

const __vite_import_meta_env__ = {};
const isObject = (x) => typeof x === "object" && x !== null;
const canProxyDefault = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer) && !(x instanceof Promise);
const createSnapshotDefault = (target, version) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  markToTrack(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const { enumerable } = Reflect.getOwnPropertyDescriptor(
      target,
      key
    );
    const desc = {
      value,
      enumerable,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      markToTrack(value, false);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshotDefault(target2, ensureVersion());
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
};
const createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
  deleteProperty(target, prop) {
    const prevValue = Reflect.get(target, prop);
    removePropListener(prop);
    const deleted = Reflect.deleteProperty(target, prop);
    if (deleted) {
      notifyUpdate(["delete", [prop], prevValue]);
    }
    return deleted;
  },
  set(target, prop, value, receiver) {
    const hasPrevValue = !isInitializing() && Reflect.has(target, prop);
    const prevValue = Reflect.get(target, prop, receiver);
    if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
      return true;
    }
    removePropListener(prop);
    if (isObject(value)) {
      value = getUntracked(value) || value;
    }
    const nextValue = !proxyStateMap.has(value) && canProxy(value) ? proxy(value) : value;
    addPropListener(prop, nextValue);
    Reflect.set(target, prop, nextValue, receiver);
    notifyUpdate(["set", [prop], value, prevValue]);
    return true;
  }
});
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const snapCache = /* @__PURE__ */ new WeakMap();
const versionHolder = [1];
const proxyCache = /* @__PURE__ */ new WeakMap();
let objectIs = Object.is;
let newProxy = (target, handler) => new Proxy(target, handler);
let canProxy = canProxyDefault;
let createSnapshot = createSnapshotDefault;
let createHandler = createHandlerDefault;
function proxy(baseObject = {}) {
  if (!isObject(baseObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(baseObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      checkVersion = version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = version;
  const ensureVersion = (nextCheckVersion = versionHolder[0]) => {
    if (checkVersion !== nextCheckVersion) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propValue) => {
    const propProxyState = !refSet.has(propValue) && proxyStateMap.get(propValue);
    if (propProxyState) {
      if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  let initializing = true;
  const handler = createHandler(
    () => initializing,
    addPropListener,
    removePropListener,
    notifyUpdate
  );
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(baseObject, proxyObject);
  const proxyState = [baseObject, ensureVersion, addListener];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(baseObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      baseObject,
      key
    );
    if ("value" in desc && desc.writable) {
      proxyObject[key] = baseObject[key];
    }
  });
  initializing = false;
  return proxyObject;
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[2];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion] = proxyState;
  return createSnapshot(target, ensureVersion());
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
function unstable_getInternalStates() {
  return {
    proxyStateMap,
    refSet,
    snapCache,
    versionHolder,
    proxyCache
  };
}

function subscribeKey(proxyObject, key, callback, notifyInSync) {
  let prevValue = proxyObject[key];
  return subscribe(
    proxyObject,
    () => {
      const nextValue = proxyObject[key];
      if (!Object.is(prevValue, nextValue)) {
        callback(prevValue = nextValue);
      }
    });
}
const { proxyStateMap: proxyStateMap$1, snapCache: snapCache$1 } = unstable_getInternalStates();
const isProxy$1 = (x) => proxyStateMap$1.has(x);
function proxyMap(entries) {
  const initialData = [];
  let initialIndex = 0;
  const indexMap = /* @__PURE__ */ new Map();
  const snapMapCache = /* @__PURE__ */ new WeakMap();
  const registerSnapMap = () => {
    const cache = snapCache$1.get(vObject);
    const latestSnap = cache == null ? void 0 : cache[1];
    if (latestSnap && !snapMapCache.has(latestSnap)) {
      const clonedMap = new Map(indexMap);
      snapMapCache.set(latestSnap, clonedMap);
    }
  };
  const getMapForThis = (x) => snapMapCache.get(x) || indexMap;
  const vObject = {
    data: initialData,
    index: initialIndex,
    epoch: 0,
    get size() {
      if (!isProxy$1(this)) {
        registerSnapMap();
      }
      const map = getMapForThis(this);
      return map.size;
    },
    get(key) {
      const map = getMapForThis(this);
      const index = map.get(key);
      if (index === void 0) {
        this.epoch;
        return void 0;
      }
      return this.data[index];
    },
    has(key) {
      const map = getMapForThis(this);
      this.epoch;
      return map.has(key);
    },
    set(key, value) {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const index = indexMap.get(key);
      if (index === void 0) {
        indexMap.set(key, this.index);
        this.data[this.index++] = value;
      } else {
        this.data[index] = value;
      }
      this.epoch++;
      return this;
    },
    delete(key) {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const index = indexMap.get(key);
      if (index === void 0) {
        return false;
      }
      delete this.data[index];
      indexMap.delete(key);
      this.epoch++;
      return true;
    },
    clear() {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      this.data.length = 0;
      this.index = 0;
      this.epoch++;
      indexMap.clear();
    },
    forEach(cb) {
      this.epoch;
      const map = getMapForThis(this);
      map.forEach((index, key) => {
        cb(this.data[index], key, this);
      });
    },
    *entries() {
      this.epoch;
      const map = getMapForThis(this);
      for (const [key, index] of map) {
        yield [key, this.data[index]];
      }
    },
    *keys() {
      this.epoch;
      const map = getMapForThis(this);
      for (const key of map.keys()) {
        yield key;
      }
    },
    *values() {
      this.epoch;
      const map = getMapForThis(this);
      for (const index of map.values()) {
        yield this.data[index];
      }
    },
    [Symbol.iterator]() {
      return this.entries();
    },
    get [Symbol.toStringTag]() {
      return "Map";
    },
    toJSON() {
      return new Map(this.entries());
    }
  };
  const proxiedObject = proxy(vObject);
  Object.defineProperties(proxiedObject, {
    size: { enumerable: false },
    index: { enumerable: false },
    epoch: { enumerable: false },
    data: { enumerable: false },
    toJSON: { enumerable: false }
  });
  Object.seal(proxiedObject);
  return proxiedObject;
}

var define_process_env_default$2 = {};
const SECURE_SITE = (
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  (typeof process !== "undefined" && typeof define_process_env_default$2 !== "undefined" ? define_process_env_default$2["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org"
);
const ONRAMP_PROVIDERS = [
  {
    label: "Meld.io",
    name: "meld",
    feeRange: "1-2%",
    url: "https://meldcrypto.com",
    supportedChains: ["eip155", "solana"]
  }
];
const MELD_PUBLIC_KEY = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
const ConstantsUtil$2 = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  FIVE_SEC_MS: 5e3,
  THREE_SEC_MS: 3e3,
  ONE_SEC_MS: 1e3,
  SECURE_SITE,
  SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
  SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
  SOLANA_NATIVE_TOKEN_ADDRESS: "So11111111111111111111111111111111111111111",
  RESTRICTED_TIMEZONES: [
    "ASIA/SHANGHAI",
    "ASIA/URUMQI",
    "ASIA/CHONGQING",
    "ASIA/HARBIN",
    "ASIA/KASHGAR",
    "ASIA/MACAU",
    "ASIA/HONG_KONG",
    "ASIA/MACAO",
    "ASIA/BEIJING",
    "ASIA/HARBIN"
  ],
  SWAP_SUGGESTED_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP"
  ],
  SWAP_POPULAR_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP",
    "METAL",
    "DAI",
    "CHAMP",
    "WOLF",
    "SALE",
    "BAL",
    "BUSD",
    "MUST",
    "BTCpx",
    "ROUTE",
    "HEX",
    "WELT",
    "amDAI",
    "VSQ",
    "VISION",
    "AURUM",
    "pSP",
    "SNX",
    "VC",
    "LINK",
    "CHP",
    "amUSDT",
    "SPHERE",
    "FOX",
    "GIDDY",
    "GFC",
    "OMEN",
    "OX_OLD",
    "DE",
    "WNT"
  ],
  BALANCE_SUPPORTED_CHAINS: [
    ConstantsUtil$3.CHAIN.EVM,
    ConstantsUtil$3.CHAIN.SOLANA
  ],
  SEND_PARAMS_SUPPORTED_CHAINS: [ConstantsUtil$3.CHAIN.EVM],
  SWAP_SUPPORTED_NETWORKS: [
    // Ethereum'
    "eip155:1",
    // Arbitrum One'
    "eip155:42161",
    // Optimism'
    "eip155:10",
    // ZKSync Era'
    "eip155:324",
    // Base'
    "eip155:8453",
    // BNB Smart Chain'
    "eip155:56",
    // Polygon'
    "eip155:137",
    // Gnosis'
    "eip155:100",
    // Avalanche'
    "eip155:43114",
    // Fantom'
    "eip155:250",
    // Klaytn'
    "eip155:8217",
    // Aurora
    "eip155:1313161554"
  ],
  NAMES_SUPPORTED_CHAIN_NAMESPACES: [ConstantsUtil$3.CHAIN.EVM],
  ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
    ConstantsUtil$3.CHAIN.EVM,
    ConstantsUtil$3.CHAIN.SOLANA
  ],
  PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
    ConstantsUtil$3.CHAIN.EVM,
    ConstantsUtil$3.CHAIN.SOLANA
  ],
  ACTIVITY_ENABLED_CHAIN_NAMESPACES: [ConstantsUtil$3.CHAIN.EVM],
  NATIVE_TOKEN_ADDRESS: {
    eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    solana: "So11111111111111111111111111111111111111111",
    polkadot: "0x",
    bip122: "0x",
    cosmos: "0x",
    sui: "0x",
    stacks: "0x"
  },
  CONVERT_SLIPPAGE_TOLERANCE: 1,
  CONNECT_LABELS: {
    MOBILE: "Open and continue in the wallet app",
    WEB: "Open and continue in the wallet app"
  },
  SEND_SUPPORTED_NAMESPACES: [
    ConstantsUtil$3.CHAIN.EVM,
    ConstantsUtil$3.CHAIN.SOLANA
  ],
  DEFAULT_REMOTE_FEATURES: {
    swaps: ["1inch"],
    onramp: ["meld"],
    email: true,
    socials: [
      "google",
      "x",
      "discord",
      "farcaster",
      "github",
      "apple",
      "facebook"
    ],
    activity: true,
    reownBranding: true,
    multiWallet: false,
    emailCapture: false,
    payWithExchange: false,
    payments: false,
    reownAuthentication: false
  },
  DEFAULT_REMOTE_FEATURES_DISABLED: {
    email: false,
    socials: false,
    swaps: false,
    onramp: false,
    activity: false,
    reownBranding: false,
    emailCapture: false,
    reownAuthentication: false
  },
  DEFAULT_FEATURES: {
    receive: true,
    send: true,
    emailShowWallets: true,
    connectorTypeOrder: [
      "walletConnect",
      "recent",
      "injected",
      "featured",
      "custom",
      "external",
      "recommended"
    ],
    analytics: true,
    allWallets: true,
    legalCheckbox: false,
    smartSessions: false,
    collapseWallets: false,
    walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
    connectMethodsOrder: void 0,
    pay: false,
    reownAuthentication: false
  },
  DEFAULT_SOCIALS: [
    "google",
    "x",
    "farcaster",
    "discord",
    "apple",
    "github",
    "facebook"
  ],
  DEFAULT_ACCOUNT_TYPES: {
    bip122: "payment",
    eip155: "smartAccount",
    polkadot: "eoa",
    solana: "eoa"
  },
  ADAPTER_TYPES: {
    UNIVERSAL: "universal",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5",
    BITCOIN: "bitcoin"
  },
  SIWX_DEFAULTS: {
    signOutOnDisconnect: true
  }
};

/* eslint-disable no-console */
// -- Utility -----------------------------------------------------------------
const StorageUtil = {
    // Cache expiry in milliseconds
    cacheExpiry: {
        portfolio: 30000,
        nativeBalance: 30000,
        ens: 300000,
        identity: 300000,
        transactionsHistory: 15000,
        tokenPrice: 15000,
        // 7 Days
        latestAppKitVersion: 604_800_000
    },
    isCacheExpired(timestamp, cacheExpiry) {
        return Date.now() - timestamp > cacheExpiry;
    },
    getActiveNetworkProps() {
        const namespace = StorageUtil.getActiveNamespace();
        const caipNetworkId = StorageUtil.getActiveCaipNetworkId();
        const stringChainId = caipNetworkId ? caipNetworkId.split(':')[1] : undefined;
        // eslint-disable-next-line no-nested-ternary
        const chainId = stringChainId
            ? isNaN(Number(stringChainId))
                ? stringChainId
                : Number(stringChainId)
            : undefined;
        return {
            namespace,
            caipNetworkId,
            chainId
        };
    },
    setWalletConnectDeepLink({ name, href }) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.DEEPLINK_CHOICE, JSON.stringify({ href, name }));
        }
        catch {
            console.info('Unable to set WalletConnect deep link');
        }
    },
    getWalletConnectDeepLink() {
        try {
            const deepLink = SafeLocalStorage.getItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
            if (deepLink) {
                return JSON.parse(deepLink);
            }
        }
        catch {
            console.info('Unable to get WalletConnect deep link');
        }
        return undefined;
    },
    deleteWalletConnectDeepLink() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
        }
        catch {
            console.info('Unable to delete WalletConnect deep link');
        }
    },
    setActiveNamespace(namespace) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE, namespace);
        }
        catch {
            console.info('Unable to set active namespace');
        }
    },
    setActiveCaipNetworkId(caipNetworkId) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
            StorageUtil.setActiveNamespace(caipNetworkId.split(':')[0]);
        }
        catch {
            console.info('Unable to set active caip network id');
        }
    },
    getActiveCaipNetworkId() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        }
        catch {
            console.info('Unable to get active caip network id');
            return undefined;
        }
    },
    deleteActiveCaipNetworkId() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        }
        catch {
            console.info('Unable to delete active caip network id');
        }
    },
    deleteConnectedConnectorId(namespace) {
        try {
            const key = getSafeConnectorIdKey(namespace);
            SafeLocalStorage.removeItem(key);
        }
        catch {
            console.info('Unable to delete connected connector id');
        }
    },
    setAppKitRecent(wallet) {
        try {
            const recentWallets = StorageUtil.getRecentWallets();
            const exists = recentWallets.find(w => w.id === wallet.id);
            if (!exists) {
                recentWallets.unshift(wallet);
                if (recentWallets.length > 2) {
                    recentWallets.pop();
                }
                SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLETS, JSON.stringify(recentWallets));
                SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLET, JSON.stringify(wallet));
            }
        }
        catch {
            console.info('Unable to set AppKit recent');
        }
    },
    getRecentWallets() {
        try {
            const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLETS);
            return recent ? JSON.parse(recent) : [];
        }
        catch {
            console.info('Unable to get AppKit recent');
        }
        return [];
    },
    getRecentWallet() {
        try {
            const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLET);
            return recent ? JSON.parse(recent) : null;
        }
        catch {
            console.info('Unable to get AppKit recent');
        }
        return null;
    },
    deleteRecentWallet() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.RECENT_WALLET);
        }
        catch {
            console.info('Unable to delete AppKit recent');
        }
    },
    setConnectedConnectorId(namespace, connectorId) {
        try {
            const key = getSafeConnectorIdKey(namespace);
            SafeLocalStorage.setItem(key, connectorId);
        }
        catch {
            console.info('Unable to set Connected Connector Id');
        }
    },
    getActiveNamespace() {
        try {
            const activeNamespace = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE);
            return activeNamespace;
        }
        catch {
            console.info('Unable to get active namespace');
        }
        return undefined;
    },
    getConnectedConnectorId(namespace) {
        if (!namespace) {
            return undefined;
        }
        try {
            const key = getSafeConnectorIdKey(namespace);
            return SafeLocalStorage.getItem(key);
        }
        catch (e) {
            console.info('Unable to get connected connector id in namespace', namespace);
        }
        return undefined;
    },
    setConnectedSocialProvider(socialProvider) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_SOCIAL, socialProvider);
        }
        catch {
            console.info('Unable to set connected social provider');
        }
    },
    getConnectedSocialProvider() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
        }
        catch {
            console.info('Unable to get connected social provider');
        }
        return undefined;
    },
    deleteConnectedSocialProvider() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
        }
        catch {
            console.info('Unable to delete connected social provider');
        }
    },
    getConnectedSocialUsername() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME);
        }
        catch {
            console.info('Unable to get connected social username');
        }
        return undefined;
    },
    getStoredActiveCaipNetworkId() {
        const storedCaipNetworkId = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
        const networkId = storedCaipNetworkId?.split(':')?.[1];
        return networkId;
    },
    setConnectionStatus(status) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTION_STATUS, status);
        }
        catch {
            console.info('Unable to set connection status');
        }
    },
    getConnectionStatus() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTION_STATUS);
        }
        catch {
            return undefined;
        }
    },
    getConnectedNamespaces() {
        try {
            const namespaces = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES);
            if (!namespaces?.length) {
                return [];
            }
            return namespaces.split(',');
        }
        catch {
            return [];
        }
    },
    setConnectedNamespaces(namespaces) {
        try {
            const uniqueNamespaces = Array.from(new Set(namespaces));
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES, uniqueNamespaces.join(','));
        }
        catch {
            console.info('Unable to set namespaces in storage');
        }
    },
    addConnectedNamespace(namespace) {
        try {
            const namespaces = StorageUtil.getConnectedNamespaces();
            if (!namespaces.includes(namespace)) {
                namespaces.push(namespace);
                StorageUtil.setConnectedNamespaces(namespaces);
            }
        }
        catch {
            console.info('Unable to add connected namespace');
        }
    },
    removeConnectedNamespace(namespace) {
        try {
            const namespaces = StorageUtil.getConnectedNamespaces();
            const index = namespaces.indexOf(namespace);
            if (index > -1) {
                namespaces.splice(index, 1);
                StorageUtil.setConnectedNamespaces(namespaces);
            }
        }
        catch {
            console.info('Unable to remove connected namespace');
        }
    },
    getTelegramSocialProvider() {
        try {
            return SafeLocalStorage.getItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
        }
        catch {
            console.info('Unable to get telegram social provider');
            return null;
        }
    },
    setTelegramSocialProvider(socialProvider) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER, socialProvider);
        }
        catch {
            console.info('Unable to set telegram social provider');
        }
    },
    removeTelegramSocialProvider() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
        }
        catch {
            console.info('Unable to remove telegram social provider');
        }
    },
    getBalanceCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromBalanceCache(caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify({ ...cache, [caipAddress]: undefined }));
        }
        catch {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getBalanceCacheForCaipAddress(caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            const balanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (balanceCache &&
                !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) {
                return balanceCache.balance;
            }
            StorageUtil.removeAddressFromBalanceCache(caipAddress);
        }
        catch {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateBalanceCache(params) {
        try {
            const cache = StorageUtil.getBalanceCache();
            cache[params.caipAddress] = params;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update balance cache', params);
        }
    },
    getNativeBalanceCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get balance cache');
        }
        return cache;
    },
    removeAddressFromNativeBalanceCache(caipAddress) {
        try {
            const cache = StorageUtil.getBalanceCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify({ ...cache, [caipAddress]: undefined }));
        }
        catch {
            console.info('Unable to remove address from balance cache', caipAddress);
        }
    },
    getNativeBalanceCacheForCaipAddress(caipAddress) {
        try {
            const cache = StorageUtil.getNativeBalanceCache();
            const nativeBalanceCache = cache[caipAddress];
            // We want to discard cache if it's older than the cache expiry
            if (nativeBalanceCache &&
                !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) {
                return nativeBalanceCache;
            }
            console.info('Discarding cache for address', caipAddress);
            StorageUtil.removeAddressFromBalanceCache(caipAddress);
        }
        catch {
            console.info('Unable to get balance cache for address', caipAddress);
        }
        return undefined;
    },
    updateNativeBalanceCache(params) {
        try {
            const cache = StorageUtil.getNativeBalanceCache();
            cache[params.caipAddress] = params;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update balance cache', params);
        }
    },
    getEnsCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.ENS_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get ens name cache');
        }
        return cache;
    },
    getEnsFromCacheForAddress(address) {
        try {
            const cache = StorageUtil.getEnsCache();
            const ensCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) {
                return ensCache.ens;
            }
            StorageUtil.removeEnsFromCache(address);
        }
        catch {
            console.info('Unable to get ens name from cache', address);
        }
        return undefined;
    },
    updateEnsCache(params) {
        try {
            const cache = StorageUtil.getEnsCache();
            cache[params.address] = params;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update ens name cache', params);
        }
    },
    removeEnsFromCache(address) {
        try {
            const cache = StorageUtil.getEnsCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify({ ...cache, [address]: undefined }));
        }
        catch {
            console.info('Unable to remove ens name from cache', address);
        }
    },
    getIdentityCache() {
        let cache = {};
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.IDENTITY_CACHE);
            cache = result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get identity cache');
        }
        return cache;
    },
    getIdentityFromCacheForAddress(address) {
        try {
            const cache = StorageUtil.getIdentityCache();
            const identityCache = cache[address];
            // We want to discard cache if it's older than the cache expiry
            if (identityCache &&
                !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) {
                return identityCache.identity;
            }
            StorageUtil.removeIdentityFromCache(address);
        }
        catch {
            console.info('Unable to get identity from cache', address);
        }
        return undefined;
    },
    updateIdentityCache(params) {
        try {
            const cache = StorageUtil.getIdentityCache();
            cache[params.address] = {
                identity: params.identity,
                timestamp: params.timestamp
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update identity cache', params);
        }
    },
    removeIdentityFromCache(address) {
        try {
            const cache = StorageUtil.getIdentityCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify({ ...cache, [address]: undefined }));
        }
        catch {
            console.info('Unable to remove identity from cache', address);
        }
    },
    clearAddressCache() {
        try {
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.ENS_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.IDENTITY_CACHE);
            SafeLocalStorage.removeItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
        }
        catch {
            console.info('Unable to clear address cache');
        }
    },
    setPreferredAccountTypes(accountTypes) {
        try {
            SafeLocalStorage.setItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
        }
        catch {
            console.info('Unable to set preferred account types', accountTypes);
        }
    },
    getPreferredAccountTypes() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);
            if (!result) {
                return {};
            }
            return JSON.parse(result);
        }
        catch {
            console.info('Unable to get preferred account types');
        }
        return {};
    },
    setConnections(connections, chainNamespace) {
        try {
            const existingConnections = StorageUtil.getConnections();
            const existing = existingConnections[chainNamespace] ?? [];
            const connectorConnectionMap = new Map();
            for (const conn of existing) {
                connectorConnectionMap.set(conn.connectorId, { ...conn });
            }
            for (const conn of connections) {
                const existingConn = connectorConnectionMap.get(conn.connectorId);
                const isAuth = conn.connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
                if (existingConn && !isAuth) {
                    const existingAddrs = new Set(existingConn.accounts.map(a => a.address.toLowerCase()));
                    const newAccounts = conn.accounts.filter(a => !existingAddrs.has(a.address.toLowerCase()));
                    existingConn.accounts.push(...newAccounts);
                }
                else {
                    connectorConnectionMap.set(conn.connectorId, { ...conn });
                }
            }
            const dedupedConnections = {
                ...existingConnections,
                [chainNamespace]: Array.from(connectorConnectionMap.values())
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify(dedupedConnections));
        }
        catch (error) {
            console.error('Unable to sync connections to storage', error);
        }
    },
    getConnections() {
        try {
            const connectionsStorage = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTIONS);
            if (!connectionsStorage) {
                return {};
            }
            return JSON.parse(connectionsStorage);
        }
        catch (error) {
            console.error('Unable to get connections from storage', error);
            return {};
        }
    },
    deleteAddressFromConnection({ connectorId, address, namespace }) {
        try {
            const connections = StorageUtil.getConnections();
            const namespaceConnections = connections[namespace] ?? [];
            const connectionMap = new Map(namespaceConnections.map(conn => [conn.connectorId, conn]));
            const connector = connectionMap.get(connectorId);
            if (connector) {
                const updatedAccounts = connector.accounts.filter(acc => acc.address.toLowerCase() !== address.toLowerCase());
                if (updatedAccounts.length === 0) {
                    connectionMap.delete(connectorId);
                }
                else {
                    connectionMap.set(connectorId, {
                        ...connector,
                        accounts: connector.accounts.filter(acc => acc.address.toLowerCase() !== address.toLowerCase())
                    });
                }
            }
            SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify({
                ...connections,
                [namespace]: Array.from(connectionMap.values())
            }));
        }
        catch {
            console.error(`Unable to remove address "${address}" from connector "${connectorId}" in namespace "${namespace}"`);
        }
    },
    getDisconnectedConnectorIds() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS);
            if (!result) {
                return {};
            }
            return JSON.parse(result);
        }
        catch {
            console.info('Unable to get disconnected connector ids');
        }
        return {};
    },
    addDisconnectedConnectorId(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
            const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            disconnectedConnectorIdsByNamespace.push(connectorId);
            SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                ...currentDisconnectedConnectorIds,
                [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
            }));
        }
        catch {
            console.error(`Unable to set disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
    },
    removeDisconnectedConnectorId(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
            let disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            disconnectedConnectorIdsByNamespace = disconnectedConnectorIdsByNamespace.filter(id => id.toLowerCase() !== connectorId.toLowerCase());
            SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                ...currentDisconnectedConnectorIds,
                [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
            }));
        }
        catch {
            console.error(`Unable to remove disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
    },
    isConnectorDisconnected(connectorId, chainNamespace) {
        try {
            const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
            const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
            return disconnectedConnectorIdsByNamespace.some(id => id.toLowerCase() === connectorId.toLowerCase());
        }
        catch {
            console.info(`Unable to get disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
        }
        return false;
    },
    getTransactionsCache() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get transactions cache');
        }
        return {};
    },
    getTransactionsCacheForAddress({ address, chainId = '' }) {
        try {
            const cache = StorageUtil.getTransactionsCache();
            const transactionsCache = cache[address]?.[chainId];
            // We want to discard cache if it's older than the cache expiry
            if (transactionsCache &&
                !this.isCacheExpired(transactionsCache.timestamp, this.cacheExpiry.transactionsHistory)) {
                return transactionsCache.transactions;
            }
            StorageUtil.removeTransactionsCache({ address, chainId });
        }
        catch {
            console.info('Unable to get transactions cache');
        }
        return undefined;
    },
    updateTransactionsCache({ address, chainId = '', timestamp, transactions }) {
        try {
            const cache = StorageUtil.getTransactionsCache();
            cache[address] = {
                ...cache[address],
                [chainId]: {
                    timestamp,
                    transactions
                }
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update transactions cache', {
                address,
                chainId,
                timestamp,
                transactions
            });
        }
    },
    removeTransactionsCache({ address, chainId }) {
        try {
            const cache = StorageUtil.getTransactionsCache();
            const addressCache = cache?.[address] || {};
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [chainId]: _removed, ...updatedChainData } = addressCache;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
                ...cache,
                [address]: updatedChainData
            }));
        }
        catch {
            console.info('Unable to remove transactions cache', { address, chainId });
        }
    },
    getTokenPriceCache() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get token price cache');
        }
        return {};
    },
    getTokenPriceCacheForAddresses(addresses) {
        try {
            const cache = StorageUtil.getTokenPriceCache();
            const tokenPriceCache = cache[addresses.join(',')];
            if (tokenPriceCache &&
                !this.isCacheExpired(tokenPriceCache.timestamp, this.cacheExpiry.tokenPrice)) {
                return tokenPriceCache.tokenPrice;
            }
            StorageUtil.removeTokenPriceCache(addresses);
        }
        catch {
            console.info('Unable to get token price cache for addresses', addresses);
        }
        return undefined;
    },
    updateTokenPriceCache(params) {
        try {
            const cache = StorageUtil.getTokenPriceCache();
            cache[params.addresses.join(',')] = {
                timestamp: params.timestamp,
                tokenPrice: params.tokenPrice
            };
            SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update token price cache', params);
        }
    },
    removeTokenPriceCache(addresses) {
        try {
            const cache = StorageUtil.getTokenPriceCache();
            SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify({ ...cache, [addresses.join(',')]: undefined }));
        }
        catch {
            console.info('Unable to remove token price cache', addresses);
        }
    },
    /* ----- AppKit Latest Version ------------------------- */
    getLatestAppKitVersion() {
        try {
            const result = this.getLatestAppKitVersionCache();
            const version = result?.version;
            if (version && !this.isCacheExpired(result.timestamp, this.cacheExpiry.latestAppKitVersion)) {
                return version;
            }
            return undefined;
        }
        catch {
            console.info('Unable to get latest AppKit version');
        }
        return undefined;
    },
    getLatestAppKitVersionCache() {
        try {
            const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION);
            return result ? JSON.parse(result) : {};
        }
        catch {
            console.info('Unable to get latest AppKit version cache');
        }
        return {};
    },
    updateLatestAppKitVersion(params) {
        try {
            const cache = StorageUtil.getLatestAppKitVersionCache();
            cache.timestamp = params.timestamp;
            cache.version = params.version;
            SafeLocalStorage.setItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION, JSON.stringify(cache));
        }
        catch {
            console.info('Unable to update latest AppKit version on local storage', params);
        }
    }
};

const CoreHelperUtil = {
    isMobile() {
        if (this.isClient()) {
            return Boolean((window?.matchMedia &&
                typeof window.matchMedia === 'function' &&
                window.matchMedia('(pointer:coarse)')?.matches) ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
        }
        return false;
    },
    checkCaipNetwork(network, networkName = '') {
        return network?.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
    },
    isAndroid() {
        if (!this.isMobile()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return CoreHelperUtil.isMobile() && ua.includes('android');
    },
    isIos() {
        if (!this.isMobile()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('iphone') || ua.includes('ipad');
    },
    isSafari() {
        if (!this.isClient()) {
            return false;
        }
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('safari');
    },
    isClient() {
        return typeof window !== 'undefined';
    },
    isPairingExpired(expiry) {
        return expiry ? expiry - Date.now() <= ConstantsUtil$2.TEN_SEC_MS : true;
    },
    isAllowedRetry(lastRetry, differenceMs = ConstantsUtil$2.ONE_SEC_MS) {
        return Date.now() - lastRetry >= differenceMs;
    },
    copyToClopboard(text) {
        navigator.clipboard.writeText(text);
    },
    isIframe() {
        try {
            return window?.self !== window?.top;
        }
        catch (e) {
            return false;
        }
    },
    isSafeApp() {
        if (CoreHelperUtil.isClient() && window.self !== window.top) {
            try {
                const ancestor = window?.location?.ancestorOrigins?.[0];
                const safeAppUrl = 'https://app.safe.global';
                if (ancestor) {
                    const ancestorUrl = new URL(ancestor);
                    const safeUrl = new URL(safeAppUrl);
                    return ancestorUrl.hostname === safeUrl.hostname;
                }
            }
            catch {
                return false;
            }
        }
        return false;
    },
    getPairingExpiry() {
        return Date.now() + ConstantsUtil$2.FOUR_MINUTES_MS;
    },
    getNetworkId(caipAddress) {
        return caipAddress?.split(':')[1];
    },
    getPlainAddress(caipAddress) {
        return caipAddress?.split(':')[2];
    },
    async wait(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debounce(func, timeout = 500) {
        let timer = undefined;
        return (...args) => {
            function next() {
                func(...args);
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(next, timeout);
        };
    },
    isHttpUrl(url) {
        return url.startsWith('http://') || url.startsWith('https://');
    },
    formatNativeUrl(appUrl, wcUri, universalLink = null) {
        if (CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatUniversalUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        let safeUniversalLink = universalLink;
        if (safeAppUrl) {
            if (!safeAppUrl.includes('://')) {
                safeAppUrl = appUrl.replaceAll('/', '').replaceAll(':', '');
                safeAppUrl = `${safeAppUrl}://`;
            }
            if (!safeAppUrl.endsWith('/')) {
                safeAppUrl = `${safeAppUrl}/`;
            }
        }
        if (safeUniversalLink && !safeUniversalLink?.endsWith('/')) {
            safeUniversalLink = `${safeUniversalLink}/`;
        }
        // Android deeplinks in tg context require the uri to be encoded twice
        if (this.isTelegram() && this.isAndroid()) {
            // eslint-disable-next-line no-param-reassign
            wcUri = encodeURIComponent(wcUri);
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            redirectUniversalLink: safeUniversalLink
                ? `${safeUniversalLink}wc?uri=${encodedWcUrl}`
                : undefined,
            href: safeAppUrl
        };
    },
    formatUniversalUrl(appUrl, wcUri) {
        if (!CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatNativeUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            href: safeAppUrl
        };
    },
    getOpenTargetForPlatform(target) {
        if (target === 'popupWindow') {
            return target;
        }
        // Only '_blank' deeplinks work in Telegram context
        if (this.isTelegram()) {
            // But for social login, we need to load the page in the same context
            if (StorageUtil.getTelegramSocialProvider()) {
                return '_top';
            }
            return '_blank';
        }
        return target;
    },
    openHref(href, target, features) {
        window?.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    returnOpenHref(href, target, features) {
        return window?.open(href, this.getOpenTargetForPlatform(target), features || 'noreferrer noopener');
    },
    isTelegram() {
        return (typeof window !== 'undefined' &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (Boolean(window.TelegramWebviewProxy) ||
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Boolean(window.Telegram) ||
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Boolean(window.TelegramWebviewProxyProto)));
    },
    isPWA() {
        if (typeof window === 'undefined') {
            return false;
        }
        const isStandaloneDisplayMode = window?.matchMedia && typeof window.matchMedia === 'function'
            ? window.matchMedia('(display-mode: standalone)')?.matches
            : false;
        const isIOSStandalone = window?.navigator?.standalone;
        return Boolean(isStandaloneDisplayMode || isIOSStandalone);
    },
    async preloadImage(src) {
        const imagePromise = new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.crossOrigin = 'anonymous';
            image.src = src;
        });
        return Promise.race([imagePromise, CoreHelperUtil.wait(2000)]);
    },
    parseBalance(balance, symbol) {
        let formattedBalance = '0.000';
        if (typeof balance === 'string') {
            const number = Number(balance);
            if (!isNaN(number)) {
                const formattedValue = (Math.floor(number * 1000) / 1000).toFixed(3);
                if (formattedValue) {
                    formattedBalance = formattedValue;
                }
            }
        }
        const [valueString, decimalsString] = formattedBalance.split('.');
        const value = valueString || '0';
        const decimals = decimalsString || '000';
        const formattedText = `${value}.${decimals}${symbol ? ` ${symbol}` : ''}`;
        return {
            formattedText,
            value,
            decimals,
            symbol
        };
    },
    getApiUrl() {
        return ConstantsUtil$3.W3M_API_URL;
    },
    getBlockchainApiUrl() {
        return ConstantsUtil$3.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
        return ConstantsUtil$3.PULSE_API_URL;
    },
    getUUID() {
        if (crypto?.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, c => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseError(error) {
        if (typeof error === 'string') {
            return error;
        }
        else if (typeof error?.issues?.[0]?.message === 'string') {
            return error.issues[0].message;
        }
        else if (error instanceof Error) {
            return error.message;
        }
        return 'Unknown error';
    },
    sortRequestedNetworks(approvedIds, requestedNetworks = []) {
        const approvedIndexMap = {};
        if (requestedNetworks && approvedIds) {
            approvedIds.forEach((id, index) => {
                approvedIndexMap[id] = index;
            });
            requestedNetworks.sort((a, b) => {
                const indexA = approvedIndexMap[a.id];
                const indexB = approvedIndexMap[b.id];
                if (indexA !== undefined && indexB !== undefined) {
                    return indexA - indexB;
                }
                else if (indexA !== undefined) {
                    return -1;
                }
                else if (indexB !== undefined) {
                    return 1;
                }
                return 0;
            });
        }
        return requestedNetworks;
    },
    calculateBalance(array) {
        let sum = 0;
        for (const item of array) {
            sum += item.value ?? 0;
        }
        return sum;
    },
    formatTokenBalance(number) {
        const roundedNumber = number.toFixed(2);
        const [dollars, pennies] = roundedNumber.split('.');
        return { dollars, pennies };
    },
    isAddress(address, chain = 'eip155') {
        switch (chain) {
            case 'eip155':
                if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
                    return false;
                }
                else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) ||
                    /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
                    return true;
                }
                return false;
            case 'solana':
                return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
            default:
                return false;
        }
    },
    uniqueBy(arr, key) {
        const set = new Set();
        return arr.filter(item => {
            const keyValue = item[key];
            if (set.has(keyValue)) {
                return false;
            }
            set.add(keyValue);
            return true;
        });
    },
    generateSdkVersion(adapters, platform, version) {
        const hasNoAdapters = adapters.length === 0;
        const adapterNames = (hasNoAdapters
            ? ConstantsUtil$2.ADAPTER_TYPES.UNIVERSAL
            : adapters.map(adapter => adapter.adapterType).join(','));
        return `${platform}-${adapterNames}-${version}`;
    },
    // eslint-disable-next-line max-params
    createAccount(namespace, address, type, publicKey, path) {
        return {
            namespace,
            address,
            type,
            publicKey,
            path
        };
    },
    isCaipAddress(address) {
        if (typeof address !== 'string') {
            return false;
        }
        const sections = address.split(':');
        const namespace = sections[0];
        return (sections.filter(Boolean).length === 3 &&
            namespace in ConstantsUtil$3.CHAIN_NAME_MAP);
    },
    getAccount(account) {
        if (!account) {
            return {
                address: undefined,
                chainId: undefined
            };
        }
        if (typeof account === 'string') {
            return {
                address: account,
                chainId: undefined
            };
        }
        return {
            address: account.address,
            chainId: account.chainId
        };
    },
    isMac() {
        const ua = window?.navigator.userAgent.toLowerCase();
        return ua.includes('macintosh') && !ua.includes('safari');
    },
    formatTelegramSocialLoginUrl(url) {
        const valueToInject = `--${encodeURIComponent(window?.location.href)}`;
        const paramToInject = 'state=';
        const parsedUrl = new URL(url);
        if (parsedUrl.host === 'auth.magic.link') {
            const providerParam = 'provider_authorization_url=';
            const providerUrl = url.substring(url.indexOf(providerParam) + providerParam.length);
            const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
            return url.replace(providerUrl, encodeURIComponent(resultUrl));
        }
        return this.injectIntoUrl(url, paramToInject, valueToInject);
    },
    injectIntoUrl(url, key, appendString) {
        // Find the position of "key" e.g. "state=" in the URL
        const keyIndex = url.indexOf(key);
        if (keyIndex === -1) {
            throw new Error(`${key} parameter not found in the URL: ${url}`);
        }
        // Find the position of the next "&" after "key"
        const keyEndIndex = url.indexOf('&', keyIndex);
        const keyLength = key.length;
        // If there is no "&" after key, it means "key" is the last parameter
        // eslint-disable-next-line no-negated-condition
        const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
        // Extract the part of the URL before the key value
        const beforeKeyValue = url.substring(0, keyIndex + keyLength);
        // Extract the current key value
        const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
        // Extract the part of the URL after the key value
        const afterKeyValue = url.substring(keyEndIndex);
        // Append the new string to the key value
        const newKeyValue = currentKeyValue + appendString;
        // Reconstruct the URL with the appended key value
        const newUrl = beforeKeyValue + newKeyValue + afterKeyValue;
        return newUrl;
    }
};

async function fetchData(...args) {
    const response = await fetch(...args);
    if (!response.ok) {
        // Create error object and reject if not a 2xx response code
        const err = new Error(`HTTP status code: ${response.status}`, {
            cause: response
        });
        throw err;
    }
    return response;
}
// -- Utility --------------------------------------------------------------------
class FetchUtil {
    constructor({ baseUrl, clientId }) {
        this.baseUrl = baseUrl;
        this.clientId = clientId;
    }
    async get({ headers, signal, cache, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, { method: 'GET', headers, signal, cache });
        return response.json();
    }
    async getBlob({ headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, { method: 'GET', headers, signal });
        return response.blob();
    }
    async post({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'POST',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async put({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'PUT',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    async delete({ body, headers, signal, ...args }) {
        const url = this.createUrl(args);
        const response = await fetchData(url, {
            method: 'DELETE',
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal
        });
        return response.json();
    }
    createUrl({ path, params }) {
        const url = new URL(path, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value) {
                    url.searchParams.append(key, value);
                }
            });
        }
        if (this.clientId) {
            url.searchParams.append('clientId', this.clientId);
        }
        return url;
    }
    sendBeacon({ body, ...args }) {
        const url = this.createUrl(args);
        return navigator.sendBeacon(url.toString(), body ? JSON.stringify(body) : undefined);
    }
}

const OptionsUtil = {
    getFeatureValue(key, features) {
        const optionValue = features?.[key];
        if (optionValue === undefined) {
            return ConstantsUtil$2.DEFAULT_FEATURES[key];
        }
        return optionValue;
    },
    filterSocialsByPlatform(socials) {
        if (!socials || !socials.length) {
            return socials;
        }
        if (CoreHelperUtil.isTelegram()) {
            if (CoreHelperUtil.isIos()) {
                return socials.filter(s => s !== 'google');
            }
            if (CoreHelperUtil.isMac()) {
                return socials.filter(s => s !== 'x');
            }
            if (CoreHelperUtil.isAndroid()) {
                return socials.filter(s => !['facebook', 'x'].includes(s));
            }
        }
        return socials;
    },
    isSocialsEnabled() {
        return ((Array.isArray(OptionsController.state.features?.socials) &&
            OptionsController.state.features?.socials.length > 0) ||
            (Array.isArray(OptionsController.state.remoteFeatures?.socials) &&
                OptionsController.state.remoteFeatures?.socials.length > 0));
    },
    isEmailEnabled() {
        return Boolean(OptionsController.state.features?.email || OptionsController.state.remoteFeatures?.email);
    }
};

// -- State --------------------------------------------- //
const state$k = proxy({
    features: ConstantsUtil$2.DEFAULT_FEATURES,
    projectId: '',
    sdkType: 'appkit',
    sdkVersion: 'html-wagmi-undefined',
    defaultAccountTypes: ConstantsUtil$2.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false
});
// -- Controller ---------------------------------------- //
const OptionsController = {
    state: state$k,
    subscribeKey(key, callback) {
        return subscribeKey(state$k, key, callback);
    },
    setOptions(options) {
        Object.assign(state$k, options);
    },
    setRemoteFeatures(remoteFeatures) {
        if (!remoteFeatures) {
            return;
        }
        const newRemoteFeatures = { ...state$k.remoteFeatures, ...remoteFeatures };
        state$k.remoteFeatures = newRemoteFeatures;
        if (state$k.remoteFeatures?.socials) {
            state$k.remoteFeatures.socials = OptionsUtil.filterSocialsByPlatform(state$k.remoteFeatures.socials);
        }
        if (state$k.features?.pay) {
            state$k.remoteFeatures.email = false;
            state$k.remoteFeatures.socials = false;
        }
    },
    setFeatures(features) {
        if (!features) {
            return;
        }
        if (!state$k.features) {
            state$k.features = ConstantsUtil$2.DEFAULT_FEATURES;
        }
        const newFeatures = { ...state$k.features, ...features };
        state$k.features = newFeatures;
        if (state$k.features?.pay && state$k.remoteFeatures) {
            state$k.remoteFeatures.email = false;
            state$k.remoteFeatures.socials = false;
        }
    },
    setProjectId(projectId) {
        state$k.projectId = projectId;
    },
    setCustomRpcUrls(customRpcUrls) {
        state$k.customRpcUrls = customRpcUrls;
    },
    setAllWallets(allWallets) {
        state$k.allWallets = allWallets;
    },
    setIncludeWalletIds(includeWalletIds) {
        state$k.includeWalletIds = includeWalletIds;
    },
    setExcludeWalletIds(excludeWalletIds) {
        state$k.excludeWalletIds = excludeWalletIds;
    },
    setFeaturedWalletIds(featuredWalletIds) {
        state$k.featuredWalletIds = featuredWalletIds;
    },
    setTokens(tokens) {
        state$k.tokens = tokens;
    },
    setTermsConditionsUrl(termsConditionsUrl) {
        state$k.termsConditionsUrl = termsConditionsUrl;
    },
    setPrivacyPolicyUrl(privacyPolicyUrl) {
        state$k.privacyPolicyUrl = privacyPolicyUrl;
    },
    setCustomWallets(customWallets) {
        state$k.customWallets = customWallets;
    },
    setIsSiweEnabled(isSiweEnabled) {
        state$k.isSiweEnabled = isSiweEnabled;
    },
    setIsUniversalProvider(isUniversalProvider) {
        state$k.isUniversalProvider = isUniversalProvider;
    },
    setSdkVersion(sdkVersion) {
        state$k.sdkVersion = sdkVersion;
    },
    setMetadata(metadata) {
        state$k.metadata = metadata;
    },
    setDisableAppend(disableAppend) {
        state$k.disableAppend = disableAppend;
    },
    setEIP6963Enabled(enableEIP6963) {
        state$k.enableEIP6963 = enableEIP6963;
    },
    setDebug(debug) {
        state$k.debug = debug;
    },
    setEnableWalletGuide(enableWalletGuide) {
        state$k.enableWalletGuide = enableWalletGuide;
    },
    setEnableAuthLogger(enableAuthLogger) {
        state$k.enableAuthLogger = enableAuthLogger;
    },
    setEnableWallets(enableWallets) {
        state$k.enableWallets = enableWallets;
    },
    setPreferUniversalLinks(preferUniversalLinks) {
        state$k.experimental_preferUniversalLinks = preferUniversalLinks;
    },
    setSIWX(siwx) {
        if (siwx) {
            for (const [key, isVal] of Object.entries(ConstantsUtil$2.SIWX_DEFAULTS)) {
                /*
                 * Only writes when siwx[key] is null or undefined
                 * (use ||= if you only want to check “falsy”, not recommended here)
                 */
                siwx[key] ??= isVal;
            }
        }
        state$k.siwx = siwx;
    },
    setConnectMethodsOrder(connectMethodsOrder) {
        state$k.features = {
            ...state$k.features,
            connectMethodsOrder
        };
    },
    setWalletFeaturesOrder(walletFeaturesOrder) {
        state$k.features = {
            ...state$k.features,
            walletFeaturesOrder
        };
    },
    setSocialsOrder(socialsOrder) {
        state$k.remoteFeatures = {
            ...state$k.remoteFeatures,
            socials: socialsOrder
        };
    },
    setCollapseWallets(collapseWallets) {
        state$k.features = {
            ...state$k.features,
            collapseWallets
        };
    },
    setEnableEmbedded(enableEmbedded) {
        state$k.enableEmbedded = enableEmbedded;
    },
    setAllowUnsupportedChain(allowUnsupportedChain) {
        state$k.allowUnsupportedChain = allowUnsupportedChain;
    },
    setManualWCControl(manualWCControl) {
        state$k.manualWCControl = manualWCControl;
    },
    setEnableNetworkSwitch(enableNetworkSwitch) {
        state$k.enableNetworkSwitch = enableNetworkSwitch;
    },
    setEnableMobileFullScreen(enableMobileFullScreen) {
        state$k.enableMobileFullScreen = CoreHelperUtil.isMobile() && enableMobileFullScreen;
    },
    setEnableReconnect(enableReconnect) {
        state$k.enableReconnect = enableReconnect;
    },
    setDefaultAccountTypes(defaultAccountType = {}) {
        Object.entries(defaultAccountType).forEach(([namespace, accountType]) => {
            if (accountType) {
                // @ts-expect-error - Keys are validated by the param type
                state$k.defaultAccountTypes[namespace] = accountType;
            }
        });
    },
    setUniversalProviderConfigOverride(universalProviderConfigOverride) {
        state$k.universalProviderConfigOverride = universalProviderConfigOverride;
    },
    getUniversalProviderConfigOverride() {
        return state$k.universalProviderConfigOverride;
    },
    getSnapshot() {
        return snapshot(state$k);
    }
};

// -- Constants ----------------------------------------- //
const DEFAULT_STATE$1 = Object.freeze({
    message: '',
    variant: 'success',
    svg: undefined,
    open: false,
    autoClose: true
});
// -- State --------------------------------------------- //
const state$j = proxy({
    ...DEFAULT_STATE$1
});
// -- Controller ---------------------------------------- //
const controller$c = {
    state: state$j,
    subscribeKey(key, callback) {
        return subscribeKey(state$j, key, callback);
    },
    showLoading(message, options = {}) {
        this._showMessage({ message, variant: 'loading', ...options });
    },
    showSuccess(message) {
        this._showMessage({ message, variant: 'success' });
    },
    showSvg(message, svg) {
        this._showMessage({ message, svg });
    },
    showError(message) {
        const errorMessage = CoreHelperUtil.parseError(message);
        this._showMessage({ message: errorMessage, variant: 'error' });
    },
    hide() {
        state$j.message = DEFAULT_STATE$1.message;
        state$j.variant = DEFAULT_STATE$1.variant;
        state$j.svg = DEFAULT_STATE$1.svg;
        state$j.open = DEFAULT_STATE$1.open;
        state$j.autoClose = DEFAULT_STATE$1.autoClose;
    },
    _showMessage({ message, svg, variant = 'success', autoClose = DEFAULT_STATE$1.autoClose }) {
        if (state$j.open) {
            state$j.open = false;
            setTimeout(() => {
                state$j.message = message;
                state$j.variant = variant;
                state$j.svg = svg;
                state$j.open = true;
                state$j.autoClose = autoClose;
            }, 150);
        }
        else {
            state$j.message = message;
            state$j.variant = variant;
            state$j.svg = svg;
            state$j.open = true;
            state$j.autoClose = autoClose;
        }
    }
};
const SnackController = controller$c;

const DEFAULT_OPTIONS = {
    purchaseCurrencies: [
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'USD Coin',
            symbol: 'USDC',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        },
        {
            id: '2b92315d-eab7-5bef-84fa-089a131333f5',
            name: 'Ether',
            symbol: 'ETH',
            networks: [
                {
                    name: 'ethereum-mainnet',
                    display_name: 'Ethereum',
                    chain_id: '1',
                    contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
                },
                {
                    name: 'polygon-mainnet',
                    display_name: 'Polygon',
                    chain_id: '137',
                    contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            ]
        }
    ],
    paymentCurrencies: [
        {
            id: 'USD',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        },
        {
            id: 'EUR',
            payment_method_limits: [
                {
                    id: 'card',
                    min: '10.00',
                    max: '7500.00'
                },
                {
                    id: 'ach_bank_account',
                    min: '10.00',
                    max: '25000.00'
                }
            ]
        }
    ]
};
// -- Helpers ------------------------------------------- //
const baseUrl$2 = CoreHelperUtil.getBlockchainApiUrl();
// -- State --------------------------------------------- //
const state$i = proxy({
    clientId: null,
    api: new FetchUtil({ baseUrl: baseUrl$2, clientId: null }),
    supportedChains: { http: [], ws: [] }
});
// -- Controller ---------------------------------------- //
const BlockchainApiController = {
    state: state$i,
    async get(request) {
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const projectId = OptionsController.state.projectId;
        const params = {
            ...(request.params || {}),
            st,
            sv,
            projectId
        };
        return state$i.api.get({
            ...request,
            params
        });
    },
    getSdkProperties() {
        const { sdkType, sdkVersion } = OptionsController.state;
        return {
            st: sdkType || 'unknown',
            sv: sdkVersion || 'unknown'
        };
    },
    async isNetworkSupported(networkId) {
        if (!networkId) {
            return false;
        }
        try {
            if (!state$i.supportedChains.http.length) {
                await BlockchainApiController.getSupportedNetworks();
            }
        }
        catch (e) {
            return false;
        }
        return state$i.supportedChains.http.includes(networkId);
    },
    async getSupportedNetworks() {
        try {
            const supportedChains = await BlockchainApiController.get({
                path: 'v1/supported-chains'
            });
            state$i.supportedChains = supportedChains;
            return supportedChains;
        }
        catch {
            return state$i.supportedChains;
        }
    },
    async fetchIdentity({ address }) {
        const identityCache = StorageUtil.getIdentityFromCacheForAddress(address);
        if (identityCache) {
            return identityCache;
        }
        const result = await BlockchainApiController.get({
            path: `/v1/identity/${address}`,
            params: {
                sender: ChainController.state.activeCaipAddress
                    ? CoreHelperUtil.getPlainAddress(ChainController.state.activeCaipAddress)
                    : undefined
            }
        });
        StorageUtil.updateIdentityCache({
            address,
            identity: result,
            timestamp: Date.now()
        });
        return result;
    },
    async fetchTransactions({ account, cursor, signal, cache, chainId }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { data: [], next: undefined };
        }
        const transactionsCache = StorageUtil.getTransactionsCacheForAddress({
            address: account,
            chainId
        });
        if (transactionsCache) {
            return transactionsCache;
        }
        const result = await BlockchainApiController.get({
            path: `/v1/account/${account}/history`,
            params: {
                cursor,
                chainId
            },
            signal,
            cache
        });
        StorageUtil.updateTransactionsCache({
            address: account,
            chainId,
            timestamp: Date.now(),
            transactions: result
        });
        return result;
    },
    async fetchSwapQuote({ amount, userAddress, from, to, gasPrice }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { quotes: [] };
        }
        return BlockchainApiController.get({
            path: `/v1/convert/quotes`,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                amount,
                userAddress,
                from,
                to,
                gasPrice
            }
        });
    },
    async fetchSwapTokens({ chainId }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { tokens: [] };
        }
        return BlockchainApiController.get({
            path: `/v1/convert/tokens`,
            params: { chainId }
        });
    },
    async fetchTokenPrice({ addresses }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { fungibles: [] };
        }
        const tokenPriceCache = StorageUtil.getTokenPriceCacheForAddresses(addresses);
        if (tokenPriceCache) {
            return tokenPriceCache;
        }
        const result = await state$i.api.post({
            path: '/v1/fungible/price',
            body: {
                currency: 'usd',
                addresses,
                projectId: OptionsController.state.projectId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        StorageUtil.updateTokenPriceCache({
            addresses,
            timestamp: Date.now(),
            tokenPrice: result
        });
        return result;
    },
    async fetchSwapAllowance({ tokenAddress, userAddress }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { allowance: '0' };
        }
        return BlockchainApiController.get({
            path: `/v1/convert/allowance`,
            params: {
                tokenAddress,
                userAddress
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    async fetchGasPrice({ chainId }) {
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Gas Price');
        }
        return BlockchainApiController.get({
            path: `/v1/convert/gas-price`,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                chainId,
                st,
                sv
            }
        });
    },
    async generateSwapCalldata({ amount, from, to, userAddress, disableEstimate }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Swaps');
        }
        return state$i.api.post({
            path: '/v1/convert/build-transaction',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                amount,
                eip155: {
                    slippage: ConstantsUtil$2.CONVERT_SLIPPAGE_TOLERANCE
                },
                projectId: OptionsController.state.projectId,
                from,
                to,
                userAddress,
                disableEstimate
            }
        });
    },
    async generateApproveCalldata({ from, to, userAddress }) {
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            throw new Error('Network not supported for Swaps');
        }
        return BlockchainApiController.get({
            path: `/v1/convert/build-approve`,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                userAddress,
                from,
                to,
                st,
                sv
            }
        });
    },
    async getBalance(address, chainId, forceUpdate) {
        const { st, sv } = BlockchainApiController.getSdkProperties();
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            SnackController.showError('Token Balance Unavailable');
            return { balances: [] };
        }
        const caipAddress = `${chainId}:${address}`;
        const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
        if (cachedBalance) {
            return cachedBalance;
        }
        const balance = await BlockchainApiController.get({
            path: `/v1/account/${address}/balance`,
            params: {
                currency: 'usd',
                chainId,
                forceUpdate,
                st,
                sv
            }
        });
        StorageUtil.updateBalanceCache({
            caipAddress,
            balance,
            timestamp: Date.now()
        });
        return balance;
    },
    async lookupEnsName(name) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { addresses: {}, attributes: [] };
        }
        return BlockchainApiController.get({
            path: `/v1/profile/account/${name}`,
            params: { apiVersion: '2' }
        });
    },
    async reverseLookupEnsName({ address }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return [];
        }
        const sender = ChainController.getAccountData()?.address;
        return BlockchainApiController.get({
            path: `/v1/profile/reverse/${address}`,
            params: {
                sender,
                apiVersion: '2'
            }
        });
    },
    async getEnsNameSuggestions(name) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { suggestions: [] };
        }
        return BlockchainApiController.get({
            path: `/v1/profile/suggestions/${name}`,
            params: { zone: 'reown.id' }
        });
    },
    async registerEnsName({ coinType, address, message, signature }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { success: false };
        }
        return state$i.api.post({
            path: `/v1/profile/account`,
            body: { coin_type: coinType, address, message, signature },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return '';
        }
        const response = await state$i.api.post({
            path: `/v1/generators/onrampurl`,
            params: {
                projectId: OptionsController.state.projectId
            },
            body: {
                destinationWallets,
                defaultNetwork,
                partnerUserId,
                defaultExperience: 'buy',
                presetCryptoAmount: purchaseAmount,
                presetFiatAmount: paymentAmount
            }
        });
        return response.url;
    },
    async getOnrampOptions() {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { paymentCurrencies: [], purchaseCurrencies: [] };
        }
        try {
            const response = await BlockchainApiController.get({
                path: `/v1/onramp/options`
            });
            return response;
        }
        catch (e) {
            return DEFAULT_OPTIONS;
        }
    },
    async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
        try {
            const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
            if (!isSupported) {
                return null;
            }
            const response = await state$i.api.post({
                path: `/v1/onramp/quote`,
                params: {
                    projectId: OptionsController.state.projectId
                },
                body: {
                    purchaseCurrency,
                    paymentCurrency,
                    amount,
                    network
                }
            });
            return response;
        }
        catch (e) {
            // Mocking response as 1:1 until endpoint is ready
            return {
                networkFee: { amount, currency: paymentCurrency.id },
                paymentSubtotal: { amount, currency: paymentCurrency.id },
                paymentTotal: { amount, currency: paymentCurrency.id },
                purchaseAmount: { amount, currency: paymentCurrency.id },
                quoteId: 'mocked-quote-id'
            };
        }
    },
    async getSmartSessions(caipAddress) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return [];
        }
        return BlockchainApiController.get({
            path: `/v1/sessions/${caipAddress}`
        });
    },
    async revokeSmartSession(address, pci, signature) {
        const isSupported = await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId);
        if (!isSupported) {
            return { success: false };
        }
        return state$i.api.post({
            path: `/v1/sessions/${address}/revoke`,
            params: {
                projectId: OptionsController.state.projectId
            },
            body: {
                pci,
                signature
            }
        });
    },
    setClientId(clientId) {
        state$i.clientId = clientId;
        state$i.api = new FetchUtil({ baseUrl: baseUrl$2, clientId });
    }
};

const W3mFrameRpcConstants = {
  SAFE_RPC_METHODS: [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getAccount",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_sendRawTransaction",
    "eth_syncing",
    "eth_uninstallFilter",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "eth_getUserOperationReceipt",
    "eth_estimateUserOperationGas",
    "eth_getUserOperationByHash",
    "eth_supportedEntryPoints",
    "wallet_getAssets"
  ],
  NOT_SAFE_RPC_METHODS: [
    "personal_sign",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "solana_signMessage",
    "solana_signTransaction",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction",
    "wallet_sendCalls",
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    "eth_sendUserOperation"
  ],
  GET_CHAIN_ID: "eth_chainId",
  RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
  ACCOUNT_TYPES: {
    EOA: "eoa",
    SMART_ACCOUNT: "smartAccount"
  }
};

/*
 * Exclude wallets that do not support relay connections but have custom deeplink mechanisms
 * Excludes:
 * - Phantom
 * - Coinbase
 */
const CUSTOM_DEEPLINK_WALLETS = {
    PHANTOM: {
        id: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        url: 'https://phantom.app'
    },
    SOLFLARE: {
        id: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        url: 'https://solflare.com'
    },
    COINBASE: {
        id: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        url: 'https://go.cb-w.com'
    },
    /*
     * Got details from their npm package:
     * https://www.npmjs.com/package/@binance/w3w-utils?activeTab=code
     * https://developers.binance.com/docs/binance-w3w/evm-compatible-provider#getdeeplink
     */
    BINANCE: {
        id: '2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25',
        appId: 'yFK5FCqYprrXDiVFbhyRx7',
        deeplink: 'bnc://app.binance.com/mp/app',
        url: 'https://app.binance.com/en/download'
    }
};
const MobileWalletUtil = {
    /**
     * Handles mobile wallet redirection for wallets that have Universal Links and doesn't support WalletConnect Deep Links.
     *
     * @param {string} id - The id of the wallet.
     * @param {ChainNamespace} namespace - The namespace of the chain.
     */
    handleMobileDeeplinkRedirect(id, namespace) {
        /**
         * Universal Links requires explicit user interaction to open the wallet app.
         * Previously we've been calling this with the life-cycle methods in the Solana clients by listening the SELECT_WALLET event of EventController.
         * But this breaks the UL functionality for some wallets like Phantom.
         */
        const href = window.location.href;
        const encodedHref = encodeURIComponent(href);
        if (id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id && !('phantom' in window)) {
            const protocol = href.startsWith('https') ? 'https' : 'http';
            const host = href.split('/')[2];
            const encodedRef = encodeURIComponent(`${protocol}://${host}`);
            window.location.href = `${CUSTOM_DEEPLINK_WALLETS.PHANTOM.url}/ul/browse/${encodedHref}?ref=${encodedRef}`;
        }
        if (id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id && !('solflare' in window)) {
            window.location.href = `${CUSTOM_DEEPLINK_WALLETS.SOLFLARE.url}/ul/v1/browse/${encodedHref}?ref=${encodedHref}`;
        }
        if (namespace === ConstantsUtil$3.CHAIN.SOLANA) {
            if (id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id && !('coinbaseSolana' in window)) {
                window.location.href = `${CUSTOM_DEEPLINK_WALLETS.COINBASE.url}/dapp?cb_url=${encodedHref}`;
            }
        }
        /*
         * Binance Web3 Wallet doesn't support WalletConnect for Bitcoin.
         * For now we use their deeplink to open the in-app browser instead.
         */
        if (namespace === ConstantsUtil$3.CHAIN.BITCOIN) {
            if (id === CUSTOM_DEEPLINK_WALLETS.BINANCE.id && !('binancew3w' in window)) {
                const activeCaipNetwork = ChainController.state.activeCaipNetwork;
                const startPagePath = window.btoa('/pages/browser/index');
                const startPageQuery = window.btoa(`url=${encodedHref}&defaultChainId=${activeCaipNetwork?.id ?? 1}`);
                const deeplink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.deeplink);
                deeplink.searchParams.set('appId', CUSTOM_DEEPLINK_WALLETS.BINANCE.appId);
                deeplink.searchParams.set('startPagePath', startPagePath);
                deeplink.searchParams.set('startPageQuery', startPageQuery);
                const universalLink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.url);
                universalLink.searchParams.set('_dp', window.btoa(deeplink.toString()));
                window.location.href = universalLink.toString();
            }
        }
    }
};

// -- Constants ----------------------------------------- //
const DEFAULT_STATE = Object.freeze({
    enabled: true,
    events: []
});
const api$2 = new FetchUtil({ baseUrl: CoreHelperUtil.getAnalyticsUrl(), clientId: null });
// Rate limiting constants
const MAX_ERRORS_PER_MINUTE = 5;
const ONE_MINUTE_MS = 60 * 1000;
// -- State --------------------------------------------- //
const state$h = proxy({
    ...DEFAULT_STATE
});
// -- Controller ---------------------------------------- //
const TelemetryController = {
    state: state$h,
    subscribeKey(key, callback) {
        return subscribeKey(state$h, key, callback);
    },
    async sendError(error, category) {
        if (!state$h.enabled) {
            return;
        }
        // Check rate limiting using events array
        const now = Date.now();
        const recentErrors = state$h.events.filter(event => {
            const eventTime = new Date(event.properties.timestamp || '').getTime();
            return now - eventTime < ONE_MINUTE_MS;
        });
        if (recentErrors.length >= MAX_ERRORS_PER_MINUTE) {
            // Exit silently
            return;
        }
        const errorEvent = {
            type: 'error',
            event: category,
            properties: {
                errorType: error.name,
                errorMessage: error.message,
                stackTrace: error.stack,
                timestamp: new Date().toISOString()
            }
        };
        state$h.events.push(errorEvent);
        try {
            if (typeof window === 'undefined') {
                return;
            }
            const { projectId, sdkType, sdkVersion } = OptionsController.state;
            await api$2.post({
                path: '/e',
                params: {
                    projectId,
                    st: sdkType,
                    sv: sdkVersion || 'html-wagmi-4.2.2'
                },
                body: {
                    eventId: CoreHelperUtil.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: new Date().toISOString(),
                    props: {
                        type: 'error',
                        event: category,
                        errorType: error.name,
                        errorMessage: error.message,
                        stackTrace: error.stack
                    }
                }
            });
        }
        catch {
            // Do nothing
        }
    },
    enable() {
        state$h.enabled = true;
    },
    disable() {
        state$h.enabled = false;
    },
    clearEvents() {
        state$h.events = [];
    }
};

class AppKitError extends Error {
    constructor(message, category, originalError) {
        super(message);
        this.originalName = 'AppKitError';
        this.name = 'AppKitError';
        this.category = category;
        this.originalError = originalError;
        if (originalError && originalError instanceof Error) {
            this.originalName = originalError.name;
        }
        // Ensure `this instanceof AppKitError` is true, important for custom errors.
        Object.setPrototypeOf(this, AppKitError.prototype);
        let isStackConstructedFromOriginal = false;
        if (originalError instanceof Error &&
            typeof originalError.stack === 'string' &&
            originalError.stack) {
            const originalErrorStack = originalError.stack;
            /**
             * Most error stacks start with "ErrorName: ErrorMessage\n...frames..."
             * We want to take the "...frames..." part.
             */
            const firstNewlineIndex = originalErrorStack.indexOf('\n');
            if (firstNewlineIndex > -1) {
                const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
                this.stack = `${this.name}: ${this.message}\n${originalFrames}`;
                isStackConstructedFromOriginal = true;
            }
        }
        if (!isStackConstructedFromOriginal) {
            /**
             * If stack was not (or could not be) constructed from originalError,
             * generate a standard stack trace for this AppKitError instance.
             * This will point to where `new AppKitError()` was called.
             */
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, AppKitError);
            }
            else if (!this.stack) {
                /**
                 * Fallback for environments without Error.captureStackTrace.
                 * `super(message)` might have set a stack.
                 * If `this.stack` is still undefined/empty, provide a minimal one.
                 * Node.js and modern browsers typically set `this.stack` from `super(message)`.
                 */
                this.stack = `${this.name}: ${this.message}`;
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function errorHandler(err, defaultCategory) {
    let errMessage = '';
    try {
        if (err instanceof Error) {
            errMessage = err.message;
        }
        else if (typeof err === 'string') {
            errMessage = err;
        }
        else if (typeof err === 'object' && err !== null) {
            if (Object.keys(err).length === 0) {
                errMessage = 'Unknown error';
            }
            else {
                errMessage = err?.message || JSON.stringify(err);
            }
        }
        else {
            errMessage = String(err);
        }
    }
    catch (_error) {
        errMessage = 'Unknown error';
        // eslint-disable-next-line no-console
        console.error('Error parsing error message', _error);
    }
    const error = err instanceof AppKitError ? err : new AppKitError(errMessage, defaultCategory, err);
    TelemetryController.sendError(error, error.category);
    throw error;
}
function withErrorBoundary(controller, defaultCategory = 'INTERNAL_SDK_ERROR') {
    const newController = {};
    Object.keys(controller).forEach(key => {
        const original = controller[key];
        if (typeof original === 'function') {
            let wrapped = original;
            if (original.constructor.name === 'AsyncFunction') {
                wrapped = async (...args) => {
                    try {
                        return await original(...args);
                    }
                    catch (err) {
                        return errorHandler(err, defaultCategory);
                    }
                };
            }
            else {
                wrapped = (...args) => {
                    try {
                        return original(...args);
                    }
                    catch (err) {
                        return errorHandler(err, defaultCategory);
                    }
                };
            }
            newController[key] = wrapped;
        }
        else {
            newController[key] = original;
        }
    });
    return newController;
}

// -- State --------------------------------------------- //
const state$g = proxy({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
});
// -- Controller ---------------------------------------- //
const controller$b = {
    state: state$g,
    subscribeNetworkImages(callback) {
        return subscribe(state$g.networkImages, () => callback(state$g.networkImages));
    },
    subscribeKey(key, callback) {
        return subscribeKey(state$g, key, callback);
    },
    subscribe(callback) {
        return subscribe(state$g, () => callback(state$g));
    },
    setWalletImage(key, value) {
        state$g.walletImages[key] = value;
    },
    setNetworkImage(key, value) {
        state$g.networkImages[key] = value;
    },
    setChainImage(key, value) {
        state$g.chainImages[key] = value;
    },
    setConnectorImage(key, value) {
        state$g.connectorImages = { ...state$g.connectorImages, [key]: value };
    },
    setTokenImage(key, value) {
        state$g.tokenImages[key] = value;
    },
    setCurrencyImage(key, value) {
        state$g.currencyImages[key] = value;
    }
};
// Export the controller wrapped with our error boundary
const AssetController = withErrorBoundary(controller$b);

const namespaceImageIds = {
    // Ethereum
    eip155: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
    // Solana
    solana: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
    // Polkadot
    polkadot: '',
    // Bitcoin
    bip122: '0b4838db-0161-4ffe-022d-532bf03dba00',
    // Cosmos
    cosmos: '',
    // Sui
    sui: '',
    // Stacks
    stacks: ''
};
// -- State --------------------------------------------- //
const state$f = proxy({
    networkImagePromises: {}
});
// -- Util ---------------------------------------- //
const AssetUtil = {
    async fetchWalletImage(imageId) {
        if (!imageId) {
            return undefined;
        }
        await ApiController._fetchWalletImage(imageId);
        return this.getWalletImageById(imageId);
    },
    async fetchNetworkImage(imageId) {
        if (!imageId) {
            return undefined;
        }
        const existingImage = this.getNetworkImageById(imageId);
        // Check if the image already exists
        if (existingImage) {
            return existingImage;
        }
        // Check if the promise is already created
        if (!state$f.networkImagePromises[imageId]) {
            state$f.networkImagePromises[imageId] = ApiController._fetchNetworkImage(imageId);
        }
        await state$f.networkImagePromises[imageId];
        return this.getNetworkImageById(imageId);
    },
    getWalletImageById(imageId) {
        if (!imageId) {
            return undefined;
        }
        return AssetController.state.walletImages[imageId];
    },
    getWalletImage(wallet) {
        if (wallet?.image_url) {
            return wallet?.image_url;
        }
        if (wallet?.image_id) {
            return AssetController.state.walletImages[wallet.image_id];
        }
        return undefined;
    },
    getNetworkImage(network) {
        if (network?.assets?.imageUrl) {
            return network?.assets?.imageUrl;
        }
        if (network?.assets?.imageId) {
            return AssetController.state.networkImages[network.assets.imageId];
        }
        return undefined;
    },
    getNetworkImageById(imageId) {
        if (!imageId) {
            return undefined;
        }
        return AssetController.state.networkImages[imageId];
    },
    getConnectorImage(connector) {
        if (connector?.imageUrl) {
            return connector.imageUrl;
        }
        if (connector?.info?.icon) {
            return connector.info.icon;
        }
        if (connector?.imageId) {
            return AssetController.state.connectorImages[connector.imageId];
        }
        return undefined;
    },
    getChainImage(chain) {
        return AssetController.state.networkImages[namespaceImageIds[chain]];
    },
    getTokenImage(symbol) {
        if (!symbol) {
            return undefined;
        }
        return AssetController.state.tokenImages[symbol];
    }
};

// -- Helpers ------------------------------------------- //
const baseUrl$1 = CoreHelperUtil.getAnalyticsUrl();
const api$1 = new FetchUtil({ baseUrl: baseUrl$1, clientId: null });
const excluded = ['MODAL_CREATED'];
// SendBeacon payload limit is 64KB, using 45KB for a safe margin, also 45KB is approx ~200 events which is plenty
const MAX_PENDING_EVENTS_KB = 45;
// Flush events every 10 seconds
const FLUSH_EVENTS_INTERVAL_MS = 1000 * 10;
// -- State --------------------------------------------- //
const state$e = proxy({
    timestamp: Date.now(),
    lastFlush: Date.now(),
    reportedErrors: {},
    data: {
        type: 'track',
        event: 'MODAL_CREATED'
    },
    pendingEvents: [],
    subscribedToVisibilityChange: false,
    walletImpressions: []
});
// -- Controller ---------------------------------------- //
const EventsController = {
    state: state$e,
    subscribe(callback) {
        return subscribe(state$e, () => callback(state$e));
    },
    getSdkProperties() {
        const { projectId, sdkType, sdkVersion } = OptionsController.state;
        return {
            projectId,
            st: sdkType,
            sv: sdkVersion || 'html-wagmi-4.2.2'
        };
    },
    shouldFlushEvents() {
        const isOverMaxSize = JSON.stringify(state$e.pendingEvents).length / 1024 > MAX_PENDING_EVENTS_KB;
        const isExpired = state$e.lastFlush + FLUSH_EVENTS_INTERVAL_MS < Date.now();
        return isOverMaxSize || isExpired;
    },
    _setPendingEvent(payload) {
        try {
            let address = ChainController.getAccountData()?.address;
            if ('address' in payload.data && payload.data.address) {
                address = payload.data.address;
            }
            if (excluded.includes(payload.data.event) || typeof window === 'undefined') {
                return;
            }
            const caipNetworkId = ChainController.getActiveCaipNetwork()?.caipNetworkId;
            this.state.pendingEvents.push({
                eventId: CoreHelperUtil.getUUID(),
                url: window.location.href,
                domain: window.location.hostname,
                timestamp: payload.timestamp,
                props: {
                    ...payload.data,
                    address,
                    properties: {
                        ...('properties' in payload.data ? payload.data.properties : {}),
                        caipNetworkId
                    }
                }
            });
            state$e.reportedErrors['FORBIDDEN'] = false;
            const shouldFlush = EventsController.shouldFlushEvents();
            // If the pending events are too large, submit them as sendBeacon has a limit of 64KB
            if (shouldFlush) {
                EventsController._submitPendingEvents();
            }
        }
        catch (err) {
            console.warn('_setPendingEvent', err);
        }
    },
    sendEvent(data) {
        state$e.timestamp = Date.now();
        state$e.data = data;
        const MANDATORY_EVENTS = [
            'INITIALIZE',
            'CONNECT_SUCCESS',
            'SOCIAL_LOGIN_SUCCESS'
        ];
        if (OptionsController.state.features?.analytics || MANDATORY_EVENTS.includes(data.event)) {
            EventsController._setPendingEvent(state$e);
        }
        // Calling this function here to make sure document is ready and defined before subscribing to visibility change
        this.subscribeToFlushTriggers();
    },
    /**
     * Adds a wallet impression item to the aggregated list. These are flushed as a single
     * WALLET_IMPRESSION batch in _submitPendingEvents.
     */
    sendWalletImpressionEvent(item) {
        state$e.walletImpressions.push(item);
    },
    _transformPendingEventsForBatch(events) {
        try {
            return events.filter(evt => {
                const eventName = evt.props.event;
                return eventName !== 'WALLET_IMPRESSION';
            });
        }
        catch {
            return events;
        }
    },
    _submitPendingEvents() {
        state$e.lastFlush = Date.now();
        if (state$e.pendingEvents.length === 0 && state$e.walletImpressions.length === 0) {
            return;
        }
        try {
            const batch = EventsController._transformPendingEventsForBatch(state$e.pendingEvents);
            if (state$e.walletImpressions.length) {
                batch.push({
                    eventId: CoreHelperUtil.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: Date.now(),
                    props: {
                        type: 'track',
                        event: 'WALLET_IMPRESSION',
                        items: [...state$e.walletImpressions]
                    }
                });
            }
            api$1.sendBeacon({
                path: '/batch',
                params: EventsController.getSdkProperties(),
                body: batch
            });
            state$e.reportedErrors['FORBIDDEN'] = false;
            state$e.pendingEvents = [];
            state$e.walletImpressions = [];
        }
        catch (err) {
            state$e.reportedErrors['FORBIDDEN'] = true;
        }
    },
    subscribeToFlushTriggers() {
        if (state$e.subscribedToVisibilityChange) {
            return;
        }
        if (typeof document === 'undefined') {
            return;
        }
        state$e.subscribedToVisibilityChange = true;
        // Submit pending events when the document is hidden
        document?.addEventListener?.('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                EventsController._submitPendingEvents();
            }
        });
        // Submit pending events when the document is frozen (triggered on mobile)
        document?.addEventListener?.('freeze', () => {
            EventsController._submitPendingEvents();
        });
        // Submit pending events when the window is hidden
        window?.addEventListener?.('pagehide', () => {
            EventsController._submitPendingEvents();
        });
        // Submit pending events every 10 seconds
        setInterval(() => {
            EventsController._submitPendingEvents();
        }, FLUSH_EVENTS_INTERVAL_MS);
    }
};

// -- Helpers ------------------------------------------- //
const baseUrl = CoreHelperUtil.getApiUrl();
const api = new FetchUtil({
    baseUrl,
    clientId: null
});
const entries = 40;
const recommendedEntries = 4;
const imageCountToFetch = 20;
// -- State --------------------------------------------- //
const state$d = proxy({
    promises: {},
    page: 1,
    count: 0,
    featured: [],
    allFeatured: [],
    recommended: [],
    allRecommended: [],
    wallets: [],
    filteredWallets: [],
    search: [],
    isAnalyticsEnabled: false,
    excludedWallets: [],
    isFetchingRecommendedWallets: false,
    explorerWallets: [],
    explorerFilteredWallets: []
});
// -- Controller ---------------------------------------- //
const ApiController = {
    state: state$d,
    subscribeKey(key, callback) {
        return subscribeKey(state$d, key, callback);
    },
    _getSdkProperties() {
        const { projectId, sdkType, sdkVersion } = OptionsController.state;
        return {
            projectId,
            st: sdkType || 'appkit',
            sv: sdkVersion || 'html-wagmi-4.2.2'
        };
    },
    _filterOutExtensions(wallets) {
        if (OptionsController.state.isUniversalProvider) {
            return wallets.filter(w => Boolean(w.mobile_link || w.desktop_link || w.webapp_link));
        }
        return wallets;
    },
    async _fetchWalletImage(imageId) {
        const imageUrl = `${api.baseUrl}/getWalletImage/${imageId}`;
        const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
        AssetController.setWalletImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchNetworkImage(imageId) {
        const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
        const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
        AssetController.setNetworkImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchConnectorImage(imageId) {
        const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
        const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
        AssetController.setConnectorImage(imageId, URL.createObjectURL(blob));
    },
    async _fetchCurrencyImage(countryCode) {
        const imageUrl = `${api.baseUrl}/public/getCurrencyImage/${countryCode}`;
        const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
        AssetController.setCurrencyImage(countryCode, URL.createObjectURL(blob));
    },
    async _fetchTokenImage(symbol) {
        const imageUrl = `${api.baseUrl}/public/getTokenImage/${symbol}`;
        const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
        AssetController.setTokenImage(symbol, URL.createObjectURL(blob));
    },
    _filterWalletsByPlatform(wallets) {
        const walletsLength = wallets.length;
        const filteredWallets = CoreHelperUtil.isMobile()
            ? wallets?.filter(w => {
                if (w.mobile_link || w.webapp_link) {
                    return true;
                }
                const customDeeplinkWalletIds = Object.values(CUSTOM_DEEPLINK_WALLETS).map(wallet => wallet.id);
                return customDeeplinkWalletIds.includes(w.id);
            })
            : wallets;
        const mobileFilteredOutWalletsLength = walletsLength - filteredWallets.length;
        return { filteredWallets, mobileFilteredOutWalletsLength };
    },
    async fetchProjectConfig() {
        const response = await api.get({
            path: '/appkit/v1/config',
            params: ApiController._getSdkProperties()
        });
        return response.features;
    },
    async fetchAllowedOrigins() {
        try {
            const { allowedOrigins } = await api.get({
                path: '/projects/v1/origins',
                params: ApiController._getSdkProperties()
            });
            return allowedOrigins;
        }
        catch (error) {
            if (error instanceof Error && error.cause instanceof Response) {
                const status = error.cause.status;
                if (status === ConstantsUtil$3.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) {
                    throw new Error('RATE_LIMITED', { cause: error });
                }
                if (status >= ConstantsUtil$3.HTTP_STATUS_CODES.SERVER_ERROR && status < 600) {
                    throw new Error('SERVER_ERROR', { cause: error });
                }
                return [];
            }
            return [];
        }
    },
    async fetchNetworkImages() {
        const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
        const ids = requestedCaipNetworks
            ?.map(({ assets }) => assets?.imageId)
            .filter(Boolean)
            .filter(imageId => !AssetUtil.getNetworkImageById(imageId));
        if (ids) {
            await Promise.allSettled(ids.map(id => ApiController._fetchNetworkImage(id)));
        }
    },
    async fetchConnectorImages() {
        const { connectors } = ConnectorController.state;
        const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
        await Promise.allSettled(ids.map(id => ApiController._fetchConnectorImage(id)));
    },
    async fetchCurrencyImages(currencies = []) {
        await Promise.allSettled(currencies.map(currency => ApiController._fetchCurrencyImage(currency)));
    },
    async fetchTokenImages(tokens = []) {
        await Promise.allSettled(tokens.map(token => ApiController._fetchTokenImage(token)));
    },
    async fetchWallets(params) {
        const exclude = params.exclude ?? [];
        const sdkProperties = ApiController._getSdkProperties();
        if (sdkProperties.sv.startsWith('html-core-')) {
            exclude.push(...Object.values(CUSTOM_DEEPLINK_WALLETS).map(w => w.id));
        }
        const wallets = await api.get({
            path: '/getWallets',
            params: {
                ...ApiController._getSdkProperties(),
                ...params,
                page: String(params.page),
                entries: String(params.entries),
                include: params.include?.join(','),
                exclude: exclude.join(',')
            }
        });
        const { filteredWallets, mobileFilteredOutWalletsLength } = ApiController._filterWalletsByPlatform(wallets?.data);
        return {
            data: filteredWallets || [],
            // Keep original count for display on main page
            count: wallets?.count,
            mobileFilteredOutWalletsLength
        };
    },
    async prefetchWalletRanks() {
        const connectors = ConnectorController.state.connectors;
        if (!connectors?.length) {
            return;
        }
        const params = {
            page: 1,
            entries: 20,
            badge: 'certified'
        };
        params.names = connectors.map(c => c.name).join(',');
        if (ChainController.state.activeChain === ConstantsUtil$3.CHAIN.EVM) {
            const rdnsCandidates = [
                ...connectors.flatMap(c => c.connectors?.map(sc => sc.info?.rdns) || []),
                ...connectors.map(c => c.info?.rdns)
            ].filter((val) => typeof val === 'string' && val.length > 0);
            if (rdnsCandidates.length) {
                params.rdns = rdnsCandidates.join(',');
            }
        }
        const { data } = await ApiController.fetchWallets(params);
        state$d.explorerWallets = data;
        const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(',');
        state$d.explorerFilteredWallets = data.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
    },
    async fetchFeaturedWallets() {
        const { featuredWalletIds } = OptionsController.state;
        if (featuredWalletIds?.length) {
            const params = {
                ...ApiController._getSdkProperties(),
                page: 1,
                entries: featuredWalletIds?.length ?? recommendedEntries,
                include: featuredWalletIds
            };
            const { data } = await ApiController.fetchWallets(params);
            const sortedData = [...data].sort((a, b) => featuredWalletIds.indexOf(a.id) - featuredWalletIds.indexOf(b.id));
            const images = sortedData.map(d => d.image_id).filter(Boolean);
            await Promise.allSettled(images.map(id => ApiController._fetchWalletImage(id)));
            state$d.featured = sortedData;
            state$d.allFeatured = sortedData;
        }
    },
    async fetchRecommendedWallets() {
        try {
            state$d.isFetchingRecommendedWallets = true;
            const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
            const exclude = [...(excludeWalletIds ?? []), ...(featuredWalletIds ?? [])].filter(Boolean);
            const chains = ChainController.getRequestedCaipNetworkIds().join(',');
            const params = {
                page: 1,
                entries: recommendedEntries,
                include: includeWalletIds,
                exclude,
                chains
            };
            const { data, count } = await ApiController.fetchWallets(params);
            const recent = StorageUtil.getRecentWallets();
            const recommendedImages = data.map(d => d.image_id).filter(Boolean);
            const recentImages = recent.map(r => r.image_id).filter(Boolean);
            await Promise.allSettled([...recommendedImages, ...recentImages].map(id => ApiController._fetchWalletImage(id)));
            state$d.recommended = data;
            state$d.allRecommended = data;
            state$d.count = count ?? 0;
        }
        catch {
            // Catch silently
        }
        finally {
            state$d.isFetchingRecommendedWallets = false;
        }
    },
    async fetchWalletsByPage({ page }) {
        const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
        const chains = ChainController.getRequestedCaipNetworkIds().join(',');
        const exclude = [
            ...state$d.recommended.map(({ id }) => id),
            ...(excludeWalletIds ?? []),
            ...(featuredWalletIds ?? [])
        ].filter(Boolean);
        const params = {
            page,
            entries,
            include: includeWalletIds,
            exclude,
            chains
        };
        const { data, count, mobileFilteredOutWalletsLength } = await ApiController.fetchWallets(params);
        state$d.mobileFilteredOutWalletsLength =
            mobileFilteredOutWalletsLength + (state$d.mobileFilteredOutWalletsLength ?? 0);
        const images = data
            .slice(0, imageCountToFetch)
            .map(w => w.image_id)
            .filter(Boolean);
        await Promise.allSettled(images.map(id => ApiController._fetchWalletImage(id)));
        state$d.wallets = CoreHelperUtil.uniqueBy([...state$d.wallets, ...ApiController._filterOutExtensions(data)], 'id').filter(w => w.chains?.some(chain => chains.includes(chain)));
        state$d.count = count > state$d.count ? count : state$d.count;
        state$d.page = page;
    },
    async initializeExcludedWallets({ ids }) {
        const params = {
            page: 1,
            entries: ids.length,
            include: ids
        };
        const { data } = await ApiController.fetchWallets(params);
        if (data) {
            data.forEach(wallet => {
                state$d.excludedWallets.push({ rdns: wallet.rdns, name: wallet.name });
            });
        }
    },
    async searchWallet({ search, badge }) {
        const { includeWalletIds, excludeWalletIds } = OptionsController.state;
        const chains = ChainController.getRequestedCaipNetworkIds().join(',');
        state$d.search = [];
        const params = {
            page: 1,
            entries: 100,
            search: search?.trim(),
            badge_type: badge,
            include: includeWalletIds,
            exclude: excludeWalletIds,
            chains
        };
        const { data } = await ApiController.fetchWallets(params);
        EventsController.sendEvent({
            type: 'track',
            event: 'SEARCH_WALLET',
            properties: { badge: badge ?? '', search: search ?? '' }
        });
        const images = data.map(w => w.image_id).filter(Boolean);
        await Promise.allSettled([
            ...images.map(id => ApiController._fetchWalletImage(id)),
            CoreHelperUtil.wait(300)
        ]);
        state$d.search = ApiController._filterOutExtensions(data);
    },
    initPromise(key, fetchFn) {
        const existingPromise = state$d.promises[key];
        if (existingPromise) {
            return existingPromise;
        }
        return (state$d.promises[key] = fetchFn());
    },
    prefetch({ fetchConnectorImages = true, fetchFeaturedWallets = true, fetchRecommendedWallets = true, fetchNetworkImages = true, fetchWalletRanks = true } = {}) {
        const promises = [
            fetchConnectorImages &&
                ApiController.initPromise('connectorImages', ApiController.fetchConnectorImages),
            fetchFeaturedWallets &&
                ApiController.initPromise('featuredWallets', ApiController.fetchFeaturedWallets),
            fetchRecommendedWallets &&
                ApiController.initPromise('recommendedWallets', ApiController.fetchRecommendedWallets),
            fetchNetworkImages &&
                ApiController.initPromise('networkImages', ApiController.fetchNetworkImages),
            fetchWalletRanks &&
                ApiController.initPromise('walletRanks', ApiController.prefetchWalletRanks)
        ].filter(Boolean);
        return Promise.allSettled(promises);
    },
    prefetchAnalyticsConfig() {
        if (OptionsController.state.features?.analytics) {
            ApiController.fetchAnalyticsConfig();
        }
    },
    async fetchAnalyticsConfig() {
        try {
            const { isAnalyticsEnabled } = await api.get({
                path: '/getAnalyticsConfig',
                params: ApiController._getSdkProperties()
            });
            OptionsController.setFeatures({ analytics: isAnalyticsEnabled });
        }
        catch (error) {
            OptionsController.setFeatures({ analytics: false });
        }
    },
    filterByNamespaces(namespaces) {
        if (!namespaces?.length) {
            state$d.featured = state$d.allFeatured;
            state$d.recommended = state$d.allRecommended;
            return;
        }
        const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(',');
        state$d.featured = state$d.allFeatured.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        state$d.recommended = state$d.allRecommended.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        state$d.filteredWallets = state$d.wallets.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
    },
    clearFilterByNamespaces() {
        state$d.filteredWallets = [];
    },
    setFilterByNamespace(namespace) {
        if (!namespace) {
            state$d.featured = state$d.allFeatured;
            state$d.recommended = state$d.allRecommended;
            return;
        }
        const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(',');
        state$d.featured = state$d.allFeatured.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        state$d.recommended = state$d.allRecommended.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
        state$d.filteredWallets = state$d.wallets.filter(wallet => wallet.chains?.some(chain => caipNetworkIds.includes(chain)));
    }
};

// -- State --------------------------------------------- //
const state$c = proxy({
    view: 'Connect',
    history: ['Connect'],
    transactionStack: []
});
// -- Controller ---------------------------------------- //
const controller$a = {
    state: state$c,
    subscribeKey(key, callback) {
        return subscribeKey(state$c, key, callback);
    },
    pushTransactionStack(action) {
        state$c.transactionStack.push(action);
    },
    popTransactionStack(status) {
        const action = state$c.transactionStack.pop();
        if (!action) {
            return;
        }
        const { onSuccess, onError, onCancel } = action;
        switch (status) {
            case 'success':
                onSuccess?.();
                break;
            case 'error':
                onError?.();
                RouterController.goBack();
                break;
            case 'cancel':
                onCancel?.();
                RouterController.goBack();
                break;
        }
    },
    push(view, data) {
        if (view !== state$c.view) {
            state$c.view = view;
            state$c.history.push(view);
            state$c.data = data;
        }
    },
    reset(view, data) {
        state$c.view = view;
        state$c.history = [view];
        state$c.data = data;
    },
    replace(view, data) {
        const lastView = state$c.history.at(-1);
        const isSameView = lastView === view;
        if (!isSameView) {
            state$c.view = view;
            state$c.history[state$c.history.length - 1] = view;
            state$c.data = data;
        }
    },
    goBack() {
        const isConnected = ChainController.state.activeCaipAddress;
        const isFarcasterView = RouterController.state.view === 'ConnectingFarcaster';
        const shouldReload = !isConnected && isFarcasterView;
        if (state$c.history.length > 1) {
            state$c.history.pop();
            const [last] = state$c.history.slice(-1);
            if (last) {
                const isConnectView = last === 'Connect';
                if (isConnected && isConnectView) {
                    state$c.view = 'Account';
                }
                else {
                    state$c.view = last;
                }
            }
        }
        else {
            ModalController.close();
        }
        if (state$c.data?.wallet) {
            state$c.data.wallet = undefined;
        }
        if (state$c.data?.redirectView) {
            state$c.data.redirectView = undefined;
        }
        // Reloading the iframe contentwindow and doing the view animation in the modal causes a small freeze in the transition. Doing these separately fixes that.
        setTimeout(() => {
            if (shouldReload) {
                ChainController.setAccountProp('farcasterUrl', undefined, ChainController.state.activeChain);
                const authConnector = ConnectorController.getAuthConnector();
                authConnector?.provider?.reload();
                const optionsState = snapshot(OptionsController.state);
                authConnector?.provider?.syncDappData?.({
                    metadata: optionsState.metadata,
                    sdkVersion: optionsState.sdkVersion,
                    projectId: optionsState.projectId,
                    sdkType: optionsState.sdkType
                });
            }
        }, 100);
    },
    goBackToIndex(historyIndex) {
        if (state$c.history.length > 1) {
            state$c.history = state$c.history.slice(0, historyIndex + 1);
            const [last] = state$c.history.slice(-1);
            if (last) {
                state$c.view = last;
            }
        }
    },
    goBackOrCloseModal() {
        if (RouterController.state.history.length > 1) {
            RouterController.goBack();
        }
        else {
            ModalController.close();
        }
    }
};
// Export the controller wrapped with our error boundary
const RouterController = withErrorBoundary(controller$a);

// -- State --------------------------------------------- //
const state$b = proxy({
    themeMode: 'dark',
    themeVariables: {},
    w3mThemeVariables: undefined
});
// -- Controller ---------------------------------------- //
const controller$9 = {
    state: state$b,
    subscribe(callback) {
        return subscribe(state$b, () => callback(state$b));
    },
    setThemeMode(themeMode) {
        state$b.themeMode = themeMode;
        try {
            const authConnector = ConnectorController.getAuthConnector();
            if (authConnector) {
                const themeVariables = controller$9.getSnapshot().themeVariables;
                authConnector.provider.syncTheme({
                    themeMode,
                    themeVariables,
                    w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
                });
            }
        }
        catch {
            // eslint-disable-next-line no-console
            console.info('Unable to sync theme to auth connector');
        }
    },
    setThemeVariables(themeVariables) {
        state$b.themeVariables = { ...state$b.themeVariables, ...themeVariables };
        try {
            const authConnector = ConnectorController.getAuthConnector();
            if (authConnector) {
                const themeVariablesSnapshot = controller$9.getSnapshot().themeVariables;
                authConnector.provider.syncTheme({
                    themeVariables: themeVariablesSnapshot,
                    w3mThemeVariables: getW3mThemeVariables(state$b.themeVariables, state$b.themeMode)
                });
            }
        }
        catch {
            // eslint-disable-next-line no-console
            console.info('Unable to sync theme to auth connector');
        }
    },
    getSnapshot() {
        return snapshot(state$b);
    }
};
// Export the controller wrapped with our error boundary
const ThemeController = withErrorBoundary(controller$9);

const defaultActiveConnectors = Object.fromEntries(AVAILABLE_NAMESPACES.map(namespace => [namespace, undefined]));
const defaultFilterByNamespaceMap = Object.fromEntries(AVAILABLE_NAMESPACES.map(namespace => [namespace, true]));
// -- State --------------------------------------------- //
const state$a = proxy({
    allConnectors: [],
    connectors: [],
    activeConnector: undefined,
    filterByNamespace: undefined,
    activeConnectorIds: defaultActiveConnectors,
    filterByNamespaceMap: defaultFilterByNamespaceMap
});
// -- Controller ---------------------------------------- //
const controller$8 = {
    state: state$a,
    subscribe(callback) {
        return subscribe(state$a, () => {
            callback(state$a);
        });
    },
    subscribeKey(key, callback) {
        return subscribeKey(state$a, key, callback);
    },
    initialize(namespaces) {
        namespaces.forEach(namespace => {
            const connectorId = StorageUtil.getConnectedConnectorId(namespace);
            if (connectorId) {
                ConnectorController.setConnectorId(connectorId, namespace);
            }
        });
    },
    setActiveConnector(connector) {
        if (connector) {
            state$a.activeConnector = ref(connector);
        }
    },
    setConnectors(connectors) {
        const newConnectors = connectors.filter(newConnector => !state$a.allConnectors.some(existingConnector => existingConnector.id === newConnector.id &&
            ConnectorController.getConnectorName(existingConnector.name) ===
                ConnectorController.getConnectorName(newConnector.name) &&
            existingConnector.chain === newConnector.chain));
        /**
         * We are reassigning the state of the proxy to a new array of new objects, ConnectorController can cause issues. So it is better to use ref in ConnectorController case.
         * Check more about proxy on https://valtio.dev/docs/api/basic/proxy#Gotchas
         * Check more about ref on https://valtio.dev/docs/api/basic/ref
         */
        newConnectors.forEach(connector => {
            if (connector.type !== 'MULTI_CHAIN') {
                state$a.allConnectors.push(ref(connector));
            }
        });
        const enabledNamespaces = ConnectorController.getEnabledNamespaces();
        const connectorsFilteredByNamespaces = ConnectorController.getEnabledConnectors(enabledNamespaces);
        state$a.connectors = ConnectorController.mergeMultiChainConnectors(connectorsFilteredByNamespaces);
    },
    filterByNamespaces(enabledNamespaces) {
        Object.keys(state$a.filterByNamespaceMap).forEach(namespace => {
            state$a.filterByNamespaceMap[namespace] = false;
        });
        enabledNamespaces.forEach(namespace => {
            state$a.filterByNamespaceMap[namespace] = true;
        });
        ConnectorController.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(namespace, enabled) {
        state$a.filterByNamespaceMap[namespace] = enabled;
        ConnectorController.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
        const enabledNamespaces = ConnectorController.getEnabledNamespaces();
        const enabledConnectors = ConnectorController.getEnabledConnectors(enabledNamespaces);
        const areAllNamespacesEnabled = ConnectorController.areAllNamespacesEnabled();
        state$a.connectors = ConnectorController.mergeMultiChainConnectors(enabledConnectors);
        if (areAllNamespacesEnabled) {
            ApiController.clearFilterByNamespaces();
        }
        else {
            ApiController.filterByNamespaces(enabledNamespaces);
        }
    },
    getEnabledNamespaces() {
        return Object.entries(state$a.filterByNamespaceMap)
            .filter(([_, enabled]) => enabled)
            .map(([namespace]) => namespace);
    },
    getEnabledConnectors(enabledNamespaces) {
        return state$a.allConnectors.filter(connector => enabledNamespaces.includes(connector.chain));
    },
    areAllNamespacesEnabled() {
        return Object.values(state$a.filterByNamespaceMap).every(enabled => enabled);
    },
    mergeMultiChainConnectors(connectors) {
        const connectorsByNameMap = ConnectorController.generateConnectorMapByName(connectors);
        const mergedConnectors = [];
        connectorsByNameMap.forEach(keyConnectors => {
            const firstItem = keyConnectors[0];
            const isAuthConnector = firstItem?.id === ConstantsUtil$3.CONNECTOR_ID.AUTH;
            if (keyConnectors.length > 1 && firstItem) {
                mergedConnectors.push({
                    name: firstItem.name,
                    imageUrl: firstItem.imageUrl,
                    imageId: firstItem.imageId,
                    connectors: [...keyConnectors],
                    type: isAuthConnector ? 'AUTH' : 'MULTI_CHAIN',
                    // These values are just placeholders, we don't use them in multi-chain connector select screen
                    chain: 'eip155',
                    id: firstItem?.id || ''
                });
            }
            else if (firstItem) {
                mergedConnectors.push(firstItem);
            }
        });
        return mergedConnectors;
    },
    generateConnectorMapByName(connectors) {
        const connectorsByNameMap = new Map();
        connectors.forEach(connector => {
            const { name } = connector;
            const connectorName = ConnectorController.getConnectorName(name);
            if (!connectorName) {
                return;
            }
            const connectorsByName = connectorsByNameMap.get(connectorName) || [];
            const haveSameConnector = connectorsByName.find(c => c.chain === connector.chain);
            if (!haveSameConnector) {
                connectorsByName.push(connector);
            }
            connectorsByNameMap.set(connectorName, connectorsByName);
        });
        return connectorsByNameMap;
    },
    getConnectorName(name) {
        if (!name) {
            return name;
        }
        const nameOverrideMap = {
            'Trust Wallet': 'Trust'
        };
        return nameOverrideMap[name] || name;
    },
    getUniqueConnectorsByName(connectors) {
        const uniqueConnectors = [];
        connectors.forEach(c => {
            if (!uniqueConnectors.find(uc => uc.chain === c.chain)) {
                uniqueConnectors.push(c);
            }
        });
        return uniqueConnectors;
    },
    addConnector(connector) {
        if (connector.id === ConstantsUtil$3.CONNECTOR_ID.AUTH) {
            const authConnector = connector;
            const optionsState = snapshot(OptionsController.state);
            const themeMode = ThemeController.getSnapshot().themeMode;
            const themeVariables = ThemeController.getSnapshot().themeVariables;
            authConnector?.provider?.syncDappData?.({
                metadata: optionsState.metadata,
                sdkVersion: optionsState.sdkVersion,
                projectId: optionsState.projectId,
                sdkType: optionsState.sdkType
            });
            authConnector?.provider?.syncTheme({
                themeMode,
                themeVariables,
                w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
            });
            ConnectorController.setConnectors([connector]);
        }
        else {
            ConnectorController.setConnectors([connector]);
        }
    },
    getAuthConnector(chainNamespace) {
        const activeNamespace = chainNamespace || ChainController.state.activeChain;
        const authConnector = state$a.connectors.find(c => c.id === ConstantsUtil$3.CONNECTOR_ID.AUTH);
        if (!authConnector) {
            return undefined;
        }
        if (authConnector?.connectors?.length) {
            const connector = authConnector.connectors.find(c => c.chain === activeNamespace);
            return connector;
        }
        return authConnector;
    },
    getAnnouncedConnectorRdns() {
        return state$a.connectors.filter(c => c.type === 'ANNOUNCED').map(c => c.info?.rdns);
    },
    getConnectorById(id) {
        return state$a.allConnectors.find(c => c.id === id);
    },
    getConnector({ id, rdns, namespace }) {
        const namespaceToUse = namespace || ChainController.state.activeChain;
        const connectorsByNamespace = state$a.allConnectors.filter(c => c.chain === namespaceToUse);
        return connectorsByNamespace.find(c => c.explorerId === id || c.info?.rdns === rdns);
    },
    syncIfAuthConnector(connector) {
        if (connector.id !== 'ID_AUTH') {
            return;
        }
        const authConnector = connector;
        const optionsState = snapshot(OptionsController.state);
        const themeMode = ThemeController.getSnapshot().themeMode;
        const themeVariables = ThemeController.getSnapshot().themeVariables;
        authConnector?.provider?.syncDappData?.({
            metadata: optionsState.metadata,
            sdkVersion: optionsState.sdkVersion,
            sdkType: optionsState.sdkType,
            projectId: optionsState.projectId
        });
        authConnector.provider.syncTheme({
            themeMode,
            themeVariables,
            w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
        });
    },
    /**
     * Returns the connectors filtered by namespace.
     * @param namespace - The namespace to filter the connectors by.
     * @returns ConnectorWithProviders[].
     */
    getConnectorsByNamespace(namespace) {
        const namespaceConnectors = state$a.allConnectors.filter(connector => connector.chain === namespace);
        return ConnectorController.mergeMultiChainConnectors(namespaceConnectors);
    },
    canSwitchToSmartAccount(namespace) {
        const isSmartAccountEnabled = ChainController.checkIfSmartAccountEnabled();
        return (isSmartAccountEnabled &&
            getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA);
    },
    selectWalletConnector(wallet) {
        const redirectView = RouterController.state.data?.redirectView;
        const connector = ConnectorController.getConnector({
            id: wallet.id,
            rdns: wallet.rdns
        });
        MobileWalletUtil.handleMobileDeeplinkRedirect(connector?.explorerId || wallet.id, ChainController.state.activeChain);
        if (connector) {
            RouterController.push('ConnectingExternal', { connector, wallet, redirectView });
        }
        else {
            RouterController.push('ConnectingWalletConnect', { wallet, redirectView });
        }
    },
    /**
     * Returns the connectors. If a namespace is provided, the connectors are filtered by namespace.
     * @param namespace - The namespace to filter the connectors by. If not provided, all connectors are returned.
     * @returns ConnectorWithProviders[].
     */
    getConnectors(namespace) {
        if (namespace) {
            return ConnectorController.getConnectorsByNamespace(namespace);
        }
        return ConnectorController.mergeMultiChainConnectors(state$a.allConnectors);
    },
    /**
     * Sets the filter by namespace and updates the connectors.
     * @param namespace - The namespace to filter the connectors by.
     */
    setFilterByNamespace(namespace) {
        state$a.filterByNamespace = namespace;
        state$a.connectors = ConnectorController.getConnectors(namespace);
        ApiController.setFilterByNamespace(namespace);
    },
    setConnectorId(connectorId, namespace) {
        if (connectorId) {
            state$a.activeConnectorIds = {
                ...state$a.activeConnectorIds,
                [namespace]: connectorId
            };
            StorageUtil.setConnectedConnectorId(namespace, connectorId);
        }
    },
    removeConnectorId(namespace) {
        state$a.activeConnectorIds = {
            ...state$a.activeConnectorIds,
            [namespace]: undefined
        };
        StorageUtil.deleteConnectedConnectorId(namespace);
    },
    getConnectorId(namespace) {
        if (!namespace) {
            return undefined;
        }
        return state$a.activeConnectorIds[namespace];
    },
    isConnected(namespace) {
        if (!namespace) {
            return Object.values(state$a.activeConnectorIds).some(id => Boolean(id));
        }
        return Boolean(state$a.activeConnectorIds[namespace]);
    },
    resetConnectorIds() {
        state$a.activeConnectorIds = { ...defaultActiveConnectors };
    }
};
// Export the controller wrapped with our error boundary
const ConnectorController = withErrorBoundary(controller$8);

/* eslint-disable max-depth */
// -- Constants ------------------------------------------ //
const UPDATE_EMAIL_INTERVAL_MS = 1_000;
const ConnectorControllerUtil = {
    checkNamespaceConnectorId(namespace, connectorId) {
        return ConnectorController.getConnectorId(namespace) === connectorId;
    },
    isSocialProvider(socialProvider) {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.socials.includes(socialProvider);
    },
    connectWalletConnect({ walletConnect, connector, closeModalOnConnect = true, redirectViewOnModalClose = 'Connect', onOpen, onConnect }) {
        return new Promise((resolve, reject) => {
            if (walletConnect) {
                ConnectorController.setActiveConnector(connector);
            }
            onOpen?.(CoreHelperUtil.isMobile() && walletConnect);
            if (redirectViewOnModalClose) {
                const unsubscribeModalController = ModalController.subscribeKey('open', val => {
                    if (!val) {
                        if (RouterController.state.view !== redirectViewOnModalClose) {
                            RouterController.replace(redirectViewOnModalClose);
                        }
                        unsubscribeModalController();
                        reject(new Error('Modal closed'));
                    }
                });
            }
            const unsubscribeChainController = ChainController.subscribeKey('activeCaipAddress', val => {
                if (val) {
                    onConnect?.();
                    if (closeModalOnConnect) {
                        ModalController.close();
                    }
                    unsubscribeChainController();
                    resolve(ParseUtil.parseCaipAddress(val));
                }
            });
        });
    },
    connectExternal(connector) {
        return new Promise((resolve, reject) => {
            const unsubscribeChainController = ChainController.subscribeKey('activeCaipAddress', val => {
                if (val) {
                    ModalController.close();
                    unsubscribeChainController();
                    resolve(ParseUtil.parseCaipAddress(val));
                }
            });
            ConnectionController.connectExternal(connector, connector.chain).catch(() => {
                unsubscribeChainController();
                reject(new Error('Connection rejected'));
            });
        });
    },
    connectSocial({ social, namespace, closeModalOnConnect = true, onOpenFarcaster, onConnect }) {
        const accountData = ChainController.getAccountData(namespace);
        let socialWindow = accountData?.socialWindow;
        let socialProvider = accountData?.socialProvider;
        let isConnectingSocial = false;
        let popupWindow = null;
        const namespaceToUse = namespace || ChainController.state.activeChain;
        const unsubscribeChainController = ChainController.subscribeKey('activeCaipAddress', val => {
            if (val) {
                if (closeModalOnConnect) {
                    ModalController.close();
                }
                unsubscribeChainController();
            }
        });
        return new Promise((resolve, reject) => {
            async function handleSocialConnection(event) {
                if (event.data?.resultUri) {
                    if (event.origin === ConstantsUtil$3.SECURE_SITE_SDK_ORIGIN) {
                        window.removeEventListener('message', handleSocialConnection, false);
                        try {
                            const authConnector = ConnectorController.getAuthConnector(namespaceToUse);
                            if (authConnector && !isConnectingSocial) {
                                const _accountData = ChainController.getAccountData(namespaceToUse);
                                if (socialWindow) {
                                    socialWindow.close();
                                    ChainController.setAccountProp('socialWindow', undefined, namespaceToUse);
                                    socialWindow = _accountData?.socialWindow;
                                }
                                isConnectingSocial = true;
                                const uri = event.data.resultUri;
                                if (socialProvider) {
                                    EventsController.sendEvent({
                                        type: 'track',
                                        event: 'SOCIAL_LOGIN_REQUEST_USER_DATA',
                                        properties: { provider: socialProvider }
                                    });
                                }
                                if (socialProvider) {
                                    StorageUtil.setConnectedSocialProvider(socialProvider);
                                    await ConnectionController.connectExternal({
                                        id: authConnector.id,
                                        type: authConnector.type,
                                        socialUri: uri
                                    }, authConnector.chain);
                                    const caipAddress = ChainController.state.activeCaipAddress;
                                    if (!caipAddress) {
                                        reject(new Error('Failed to connect'));
                                        return;
                                    }
                                    resolve(ParseUtil.parseCaipAddress(caipAddress));
                                    EventsController.sendEvent({
                                        type: 'track',
                                        event: 'SOCIAL_LOGIN_SUCCESS',
                                        properties: { provider: socialProvider }
                                    });
                                }
                            }
                        }
                        catch (err) {
                            if (socialProvider) {
                                EventsController.sendEvent({
                                    type: 'track',
                                    event: 'SOCIAL_LOGIN_ERROR',
                                    properties: { provider: socialProvider, message: CoreHelperUtil.parseError(err) }
                                });
                            }
                            reject(new Error('Failed to connect'));
                        }
                    }
                    else if (socialProvider) {
                        EventsController.sendEvent({
                            type: 'track',
                            event: 'SOCIAL_LOGIN_ERROR',
                            properties: { provider: socialProvider, message: 'Untrusted Origin' }
                        });
                    }
                }
            }
            async function connectSocial() {
                if (social) {
                    const _accountData = ChainController.getAccountData(namespaceToUse);
                    ChainController.setAccountProp('socialProvider', social, namespaceToUse);
                    socialProvider = _accountData?.socialProvider;
                    EventsController.sendEvent({
                        type: 'track',
                        event: 'SOCIAL_LOGIN_STARTED',
                        properties: { provider: socialProvider }
                    });
                }
                if (socialProvider === 'farcaster') {
                    onOpenFarcaster?.();
                    const unsubscribeModalController = ModalController.subscribeKey('open', val => {
                        if (!val && social === 'farcaster') {
                            reject(new Error('Popup closed'));
                            onConnect?.();
                            unsubscribeModalController();
                        }
                    });
                    const authConnector = ConnectorController.getAuthConnector();
                    if (authConnector) {
                        const _accountData = ChainController.getAccountData(namespaceToUse);
                        if (!_accountData?.farcasterUrl) {
                            try {
                                const { url } = await authConnector.provider.getFarcasterUri();
                                ChainController.setAccountProp('farcasterUrl', url, namespaceToUse);
                            }
                            catch {
                                reject(new Error('Failed to connect to farcaster'));
                            }
                        }
                    }
                }
                else {
                    const authConnector = ConnectorController.getAuthConnector();
                    popupWindow = CoreHelperUtil.returnOpenHref(`${ConstantsUtil$3.SECURE_SITE_SDK_ORIGIN}/loading`, 'popupWindow', 'width=600,height=800,scrollbars=yes');
                    try {
                        if (authConnector && socialProvider) {
                            const { uri } = await authConnector.provider.getSocialRedirectUri({
                                provider: socialProvider
                            });
                            if (popupWindow && uri) {
                                ChainController.setAccountProp('socialWindow', ref(popupWindow), namespaceToUse);
                                socialWindow = accountData?.socialWindow;
                                popupWindow.location.href = uri;
                                const interval = setInterval(() => {
                                    if (socialWindow?.closed && !isConnectingSocial) {
                                        reject(new Error('Popup closed'));
                                        clearInterval(interval);
                                    }
                                }, 1000);
                                window.addEventListener('message', handleSocialConnection, false);
                            }
                            else {
                                popupWindow?.close();
                                reject(new Error('Failed to initiate social connection'));
                            }
                        }
                    }
                    catch {
                        reject(new Error('Failed to initiate social connection'));
                        popupWindow?.close();
                    }
                }
            }
            connectSocial();
        });
    },
    connectEmail({ closeModalOnConnect = true, redirectViewOnModalClose = 'Connect', onOpen, onConnect }) {
        return new Promise((resolve, reject) => {
            onOpen?.();
            if (redirectViewOnModalClose) {
                const unsubscribeModalController = ModalController.subscribeKey('open', val => {
                    if (!val) {
                        if (RouterController.state.view !== redirectViewOnModalClose) {
                            RouterController.replace(redirectViewOnModalClose);
                        }
                        unsubscribeModalController();
                        reject(new Error('Modal closed'));
                    }
                });
            }
            const unsubscribeChainController = ChainController.subscribeKey('activeCaipAddress', val => {
                if (val) {
                    onConnect?.();
                    if (closeModalOnConnect) {
                        ModalController.close();
                    }
                    unsubscribeChainController();
                    resolve(ParseUtil.parseCaipAddress(val));
                }
            });
        });
    },
    async updateEmail() {
        const connectorId = StorageUtil.getConnectedConnectorId(ChainController.state.activeChain);
        const authConnector = ConnectorController.getAuthConnector();
        if (!authConnector) {
            throw new Error('No auth connector found');
        }
        if (connectorId !== ConstantsUtil$3.CONNECTOR_ID.AUTH) {
            throw new Error('Not connected to email or social');
        }
        const initialEmail = authConnector.provider.getEmail() ?? '';
        await ModalController.open({
            view: 'UpdateEmailWallet',
            data: {
                email: initialEmail,
                redirectView: undefined
            }
        });
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                const newEmail = authConnector.provider.getEmail() ?? '';
                if (newEmail !== initialEmail) {
                    ModalController.close();
                    clearInterval(interval);
                    unsubscribeModalController();
                    resolve({ email: newEmail });
                }
            }, UPDATE_EMAIL_INTERVAL_MS);
            const unsubscribeModalController = ModalController.subscribeKey('open', val => {
                if (!val) {
                    if (RouterController.state.view !== 'Connect') {
                        RouterController.push('Connect');
                    }
                    clearInterval(interval);
                    unsubscribeModalController();
                    reject(new Error('Modal closed'));
                }
            });
        });
    },
    canSwitchToSmartAccount(namespace) {
        const isSmartAccountEnabled = ChainController.checkIfSmartAccountEnabled();
        return (isSmartAccountEnabled &&
            getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA);
    }
};

/**
 * Get the active network token address
 * @returns The active network token address
 */
function getActiveNetworkTokenAddress() {
    const namespace = ChainController.state.activeCaipNetwork?.chainNamespace || 'eip155';
    const chainId = ChainController.state.activeCaipNetwork?.id || 1;
    const address = ConstantsUtil$2.NATIVE_TOKEN_ADDRESS[namespace];
    return `${namespace}:${chainId}:${address}`;
}
/**
 * Get the preferred account type for a given namespace
 * @param namespace - The namespace of the account
 * @returns The preferred account type
 */
function getPreferredAccountType(namespace) {
    const preferredAccountType = ChainController.getAccountData(namespace)?.preferredAccountType;
    return preferredAccountType;
}
/**
 * Get the active CAIP network for a given chain namespace, if no namespace is provided, it returns the active CAIP network
 * @param chainNamespace - The chain namespace to get the active CAIP network for
 * @returns The active CAIP network
 */
function getActiveCaipNetwork(chainNamespace) {
    return ChainController.state.activeCaipNetwork;
}

// -- Utils ------------------------------------------ //
const ConnectionControllerUtil = {
    getConnectionStatus(connection, namespace) {
        const connectedConnectorId = ConnectorController.state.activeConnectorIds[namespace];
        const connections = ConnectionController.getConnections(namespace);
        const isConnectorConnected = Boolean(connectedConnectorId) && connection.connectorId === connectedConnectorId;
        if (isConnectorConnected) {
            return 'connected';
        }
        const isConnectionConnected = connections.some(c => c.connectorId.toLowerCase() === connection.connectorId.toLowerCase());
        if (isConnectionConnected) {
            return 'active';
        }
        return 'disconnected';
    },
    excludeConnectorAddressFromConnections({ connections, connectorId, addresses }) {
        return connections.map(connection => {
            const isConnectorMatch = connectorId
                ? connection.connectorId.toLowerCase() === connectorId.toLowerCase()
                : false;
            if (isConnectorMatch && addresses) {
                const filteredAccounts = connection.accounts.filter(account => {
                    const isAddressIncluded = addresses.some(address => address.toLowerCase() === account.address.toLowerCase());
                    return !isAddressIncluded;
                });
                return { ...connection, accounts: filteredAccounts };
            }
            return connection;
        });
    },
    excludeExistingConnections(connectorIds, newConnections) {
        const existingConnectorIds = new Set(connectorIds);
        return newConnections.filter(c => !existingConnectorIds.has(c.connectorId));
    },
    getConnectionsByConnectorId(connections, connectorId) {
        return connections.filter(c => c.connectorId.toLowerCase() === connectorId.toLowerCase());
    },
    getConnectionsData(namespace) {
        const isMultiWalletEnabled = Boolean(OptionsController.state.remoteFeatures?.multiWallet);
        const activeConnectorId = ConnectorController.state.activeConnectorIds[namespace];
        const connections = ConnectionController.getConnections(namespace);
        const recentConnections = ConnectionController.state.recentConnections.get(namespace) ?? [];
        const recentConnectionsWithCurrentActiveConnectors = recentConnections.filter(connection => ConnectorController.getConnectorById(connection.connectorId));
        const dedupedRecentConnections = ConnectionControllerUtil.excludeExistingConnections([...connections.map(c => c.connectorId), ...(activeConnectorId ? [activeConnectorId] : [])], recentConnectionsWithCurrentActiveConnectors);
        if (!isMultiWalletEnabled) {
            return {
                connections: connections.filter(c => c.connectorId.toLowerCase() === activeConnectorId?.toLowerCase()),
                recentConnections: []
            };
        }
        return {
            connections,
            recentConnections: dedupedRecentConnections
        };
    }
};

// -- State --------------------------------------------- //
const state$9 = proxy({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: undefined,
    loading: false,
    empty: false,
    next: undefined
});
// -- Controller ---------------------------------------- //
const controller$7 = {
    state: state$9,
    subscribe(callback) {
        return subscribe(state$9, () => callback(state$9));
    },
    setLastNetworkInView(lastNetworkInView) {
        state$9.lastNetworkInView = lastNetworkInView;
    },
    async fetchTransactions(accountAddress) {
        if (!accountAddress) {
            throw new Error("Transactions can't be fetched without an accountAddress");
        }
        state$9.loading = true;
        try {
            const response = await BlockchainApiController.fetchTransactions({
                account: accountAddress,
                cursor: state$9.next,
                chainId: ChainController.state.activeCaipNetwork?.caipNetworkId
            });
            const nonSpamTransactions = TransactionsController.filterSpamTransactions(response.data);
            const sameChainTransactions = TransactionsController.filterByConnectedChain(nonSpamTransactions);
            const filteredTransactions = [...state$9.transactions, ...sameChainTransactions];
            state$9.loading = false;
            state$9.transactions = filteredTransactions;
            state$9.transactionsByYear = TransactionsController.groupTransactionsByYearAndMonth(state$9.transactionsByYear, sameChainTransactions);
            state$9.empty = filteredTransactions.length === 0;
            state$9.next = response.next ? response.next : undefined;
        }
        catch (error) {
            const activeChainNamespace = ChainController.state.activeChain;
            EventsController.sendEvent({
                type: 'track',
                event: 'ERROR_FETCH_TRANSACTIONS',
                properties: {
                    address: accountAddress,
                    projectId: OptionsController.state.projectId,
                    cursor: state$9.next,
                    isSmartAccount: getPreferredAccountType(activeChainNamespace) ===
                        W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
                }
            });
            SnackController.showError('Failed to fetch transactions');
            state$9.loading = false;
            state$9.empty = true;
            state$9.next = undefined;
        }
    },
    groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
        const grouped = transactionsMap;
        transactions.forEach(transaction => {
            const year = new Date(transaction.metadata.minedAt).getFullYear();
            const month = new Date(transaction.metadata.minedAt).getMonth();
            const yearTransactions = grouped[year] ?? {};
            const monthTransactions = yearTransactions[month] ?? [];
            // If there's a transaction with the same id, remove the old one
            const newMonthTransactions = monthTransactions.filter(tx => tx.id !== transaction.id);
            grouped[year] = {
                ...yearTransactions,
                [month]: [...newMonthTransactions, transaction].sort((a, b) => new Date(b.metadata.minedAt).getTime() - new Date(a.metadata.minedAt).getTime())
            };
        });
        return grouped;
    },
    filterSpamTransactions(transactions) {
        return transactions.filter(transaction => {
            const isAllSpam = transaction.transfers.every(transfer => transfer.nft_info?.flags.is_spam === true);
            return !isAllSpam;
        });
    },
    filterByConnectedChain(transactions) {
        const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
        const filteredTransactions = transactions.filter(transaction => transaction.metadata.chain === chainId);
        return filteredTransactions;
    },
    clearCursor() {
        state$9.next = undefined;
    },
    resetTransactions() {
        state$9.transactions = [];
        state$9.transactionsByYear = {};
        state$9.lastNetworkInView = undefined;
        state$9.loading = false;
        state$9.empty = false;
        state$9.next = undefined;
    }
};
// Export the controller wrapped with our error boundary
const TransactionsController = withErrorBoundary(controller$7, 'API_ERROR');

/* eslint-disable no-console */
// -- State --------------------------------------------- //
const state$8 = proxy({
    connections: new Map(),
    recentConnections: new Map(),
    isSwitchingConnection: false,
    wcError: false,
    buffering: false,
    status: 'disconnected'
});
// eslint-disable-next-line init-declarations
let wcConnectionPromise;
// -- Controller ---------------------------------------- //
const controller$6 = {
    state: state$8,
    subscribe(callback) {
        return subscribe(state$8, () => callback(state$8));
    },
    subscribeKey(key, callback) {
        return subscribeKey(state$8, key, callback);
    },
    _getClient() {
        return state$8._client;
    },
    setClient(client) {
        state$8._client = ref(client);
    },
    initialize(adapters) {
        const namespaces = adapters
            .filter((a) => Boolean(a.namespace))
            .map(a => a.namespace);
        ConnectionController.syncStorageConnections(namespaces);
    },
    syncStorageConnections(namespaces) {
        const storageConnections = StorageUtil.getConnections();
        const namespacesToSync = namespaces ?? Array.from(ChainController.state.chains.keys());
        for (const namespace of namespacesToSync) {
            const storageConnectionsByNamespace = storageConnections[namespace] ?? [];
            const recentConnectionsMap = new Map(state$8.recentConnections);
            recentConnectionsMap.set(namespace, storageConnectionsByNamespace);
            state$8.recentConnections = recentConnectionsMap;
        }
    },
    getConnections(namespace) {
        return namespace ? (state$8.connections.get(namespace) ?? []) : [];
    },
    hasAnyConnection(connectorId) {
        const connections = ConnectionController.state.connections;
        return Array.from(connections.values())
            .flatMap(_connections => _connections)
            .some(({ connectorId: _connectorId }) => _connectorId === connectorId);
    },
    async connectWalletConnect({ cache = 'auto' } = {}) {
        const isInTelegramOrSafariIos = CoreHelperUtil.isTelegram() || (CoreHelperUtil.isSafari() && CoreHelperUtil.isIos());
        if (cache === 'always' || (cache === 'auto' && isInTelegramOrSafariIos)) {
            if (wcConnectionPromise) {
                await wcConnectionPromise;
                wcConnectionPromise = undefined;
                return;
            }
            if (!CoreHelperUtil.isPairingExpired(state$8?.wcPairingExpiry)) {
                const link = state$8.wcUri;
                state$8.wcUri = link;
                return;
            }
            wcConnectionPromise = ConnectionController._getClient()
                ?.connectWalletConnect?.()
                .catch(() => undefined);
            ConnectionController.state.status = 'connecting';
            await wcConnectionPromise;
            wcConnectionPromise = undefined;
            state$8.wcPairingExpiry = undefined;
            ConnectionController.state.status = 'connected';
        }
        else {
            await ConnectionController._getClient()?.connectWalletConnect?.();
        }
    },
    async connectExternal(options, chain, setChain = true) {
        const connectData = await ConnectionController._getClient()?.connectExternal?.(options);
        if (setChain) {
            ChainController.setActiveNamespace(chain);
        }
        return connectData;
    },
    async reconnectExternal(options) {
        await ConnectionController._getClient()?.reconnectExternal?.(options);
        const namespace = options.chain || ChainController.state.activeChain;
        if (namespace) {
            ConnectorController.setConnectorId(options.id, namespace);
        }
    },
    async setPreferredAccountType(accountType, namespace) {
        if (!namespace) {
            return;
        }
        ModalController.setLoading(true, ChainController.state.activeChain);
        const authConnector = ConnectorController.getAuthConnector();
        if (!authConnector) {
            return;
        }
        ChainController.setAccountProp('preferredAccountType', accountType, namespace);
        await authConnector.provider.setPreferredAccount(accountType);
        StorageUtil.setPreferredAccountTypes(Object.entries(ChainController.state.chains).reduce((acc, [key, _]) => {
            const namespace = key;
            const accountType = getPreferredAccountType(namespace);
            if (accountType !== undefined) {
                acc[namespace] = accountType;
            }
            return acc;
        }, {}));
        await ConnectionController.reconnectExternal(authConnector);
        ModalController.setLoading(false, ChainController.state.activeChain);
        EventsController.sendEvent({
            type: 'track',
            event: 'SET_PREFERRED_ACCOUNT_TYPE',
            properties: {
                accountType,
                network: ChainController.state.activeCaipNetwork?.caipNetworkId || ''
            }
        });
    },
    async signMessage(message) {
        return ConnectionController._getClient()?.signMessage(message);
    },
    parseUnits(value, decimals) {
        return ConnectionController._getClient()?.parseUnits(value, decimals);
    },
    formatUnits(value, decimals) {
        return ConnectionController._getClient()?.formatUnits(value, decimals);
    },
    updateBalance(namespace) {
        return ConnectionController._getClient()?.updateBalance(namespace);
    },
    async sendTransaction(args) {
        return ConnectionController._getClient()?.sendTransaction(args);
    },
    async getCapabilities(params) {
        return ConnectionController._getClient()?.getCapabilities(params);
    },
    async grantPermissions(params) {
        return ConnectionController._getClient()?.grantPermissions(params);
    },
    async walletGetAssets(params) {
        return ConnectionController._getClient()?.walletGetAssets(params) ?? {};
    },
    async estimateGas(args) {
        return ConnectionController._getClient()?.estimateGas(args);
    },
    async writeContract(args) {
        return ConnectionController._getClient()?.writeContract(args);
    },
    async getEnsAddress(value) {
        return ConnectionController._getClient()?.getEnsAddress(value);
    },
    async getEnsAvatar(value) {
        return ConnectionController._getClient()?.getEnsAvatar(value);
    },
    checkInstalled(ids) {
        return ConnectionController._getClient()?.checkInstalled?.(ids) || false;
    },
    resetWcConnection() {
        state$8.wcUri = undefined;
        state$8.wcPairingExpiry = undefined;
        state$8.wcLinking = undefined;
        state$8.recentWallet = undefined;
        state$8.status = 'disconnected';
        TransactionsController.resetTransactions();
        StorageUtil.deleteWalletConnectDeepLink();
        StorageUtil.deleteRecentWallet();
    },
    resetUri() {
        state$8.wcUri = undefined;
        state$8.wcPairingExpiry = undefined;
        wcConnectionPromise = undefined;
    },
    finalizeWcConnection(address) {
        const { wcLinking, recentWallet } = ConnectionController.state;
        if (wcLinking) {
            StorageUtil.setWalletConnectDeepLink(wcLinking);
        }
        if (recentWallet) {
            StorageUtil.setAppKitRecent(recentWallet);
        }
        if (address) {
            EventsController.sendEvent({
                type: 'track',
                event: 'CONNECT_SUCCESS',
                address,
                properties: {
                    method: wcLinking ? 'mobile' : 'qrcode',
                    name: RouterController.state.data?.wallet?.name || 'Unknown',
                    view: RouterController.state.view,
                    walletRank: recentWallet?.order
                }
            });
        }
    },
    setWcBasic(wcBasic) {
        state$8.wcBasic = wcBasic;
    },
    setUri(uri) {
        state$8.wcUri = uri;
        state$8.wcPairingExpiry = CoreHelperUtil.getPairingExpiry();
    },
    setWcLinking(wcLinking) {
        state$8.wcLinking = wcLinking;
    },
    setWcError(wcError) {
        state$8.wcError = wcError;
        state$8.buffering = false;
    },
    setRecentWallet(wallet) {
        state$8.recentWallet = wallet;
    },
    setBuffering(buffering) {
        state$8.buffering = buffering;
    },
    setStatus(status) {
        state$8.status = status;
    },
    setIsSwitchingConnection(isSwitchingConnection) {
        state$8.isSwitchingConnection = isSwitchingConnection;
    },
    async disconnect({ id, namespace, initialDisconnect } = {}) {
        try {
            await ConnectionController._getClient()?.disconnect({
                id,
                chainNamespace: namespace,
                initialDisconnect
            });
        }
        catch (error) {
            throw new AppKitError('Failed to disconnect', 'INTERNAL_SDK_ERROR', error);
        }
    },
    async disconnectConnector({ id, namespace }) {
        try {
            await ConnectionController._getClient()?.disconnectConnector({ id, namespace });
        }
        catch (error) {
            throw new AppKitError('Failed to disconnect connector', 'INTERNAL_SDK_ERROR', error);
        }
    },
    setConnections(connections, chainNamespace) {
        const connectionsMap = new Map(state$8.connections);
        connectionsMap.set(chainNamespace, connections);
        state$8.connections = connectionsMap;
    },
    async handleAuthAccountSwitch({ address, namespace }) {
        const accountData = ChainController.getAccountData(namespace);
        const smartAccount = accountData?.user?.accounts?.find(c => c.type === 'smartAccount');
        const accountType = smartAccount &&
            smartAccount.address.toLowerCase() === address.toLowerCase() &&
            ConnectorControllerUtil.canSwitchToSmartAccount(namespace)
            ? 'smartAccount'
            : 'eoa';
        await ConnectionController.setPreferredAccountType(accountType, namespace);
    },
    async handleActiveConnection({ connection, namespace, address }) {
        const connector = ConnectorController.getConnectorById(connection.connectorId);
        const isAuthConnector = connection.connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
        if (!connector) {
            throw new Error(`No connector found for connection: ${connection.connectorId}`);
        }
        if (!isAuthConnector) {
            const connectData = await ConnectionController.connectExternal({
                id: connector.id,
                type: connector.type,
                provider: connector.provider,
                address,
                chain: namespace
            }, namespace);
            return connectData?.address;
        }
        else if (isAuthConnector && address) {
            await ConnectionController.handleAuthAccountSwitch({ address, namespace });
        }
        return address;
    },
    async handleDisconnectedConnection({ connection, namespace, address, closeModalOnConnect }) {
        const connector = ConnectorController.getConnectorById(connection.connectorId);
        const authName = connection.auth?.name?.toLowerCase();
        const isAuthConnector = connection.connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
        const isWCConnector = connection.connectorId === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
        if (!connector) {
            throw new Error(`No connector found for connection: ${connection.connectorId}`);
        }
        let newAddress = undefined;
        if (isAuthConnector) {
            if (authName && ConnectorControllerUtil.isSocialProvider(authName)) {
                const { address: socialAddress } = await ConnectorControllerUtil.connectSocial({
                    social: authName,
                    closeModalOnConnect,
                    onOpenFarcaster() {
                        ModalController.open({ view: 'ConnectingFarcaster' });
                    },
                    onConnect() {
                        RouterController.replace('ProfileWallets');
                    }
                });
                newAddress = socialAddress;
            }
            else {
                const { address: emailAddress } = await ConnectorControllerUtil.connectEmail({
                    closeModalOnConnect,
                    onOpen() {
                        ModalController.open({ view: 'EmailLogin' });
                    },
                    onConnect() {
                        RouterController.replace('ProfileWallets');
                    }
                });
                newAddress = emailAddress;
            }
        }
        else if (isWCConnector) {
            const { address: wcAddress } = await ConnectorControllerUtil.connectWalletConnect({
                walletConnect: true,
                connector,
                closeModalOnConnect,
                onOpen(isMobile) {
                    const view = isMobile ? 'AllWallets' : 'ConnectingWalletConnect';
                    if (ModalController.state.open) {
                        RouterController.push(view);
                    }
                    else {
                        ModalController.open({ view });
                    }
                },
                onConnect() {
                    RouterController.replace('ProfileWallets');
                }
            });
            newAddress = wcAddress;
        }
        else {
            const connectData = await ConnectionController.connectExternal({
                id: connector.id,
                type: connector.type,
                provider: connector.provider,
                chain: namespace
            }, namespace);
            if (connectData) {
                newAddress = connectData.address;
            }
        }
        if (isAuthConnector && address) {
            await ConnectionController.handleAuthAccountSwitch({ address, namespace });
        }
        return newAddress;
    },
    async switchConnection({ connection, address, namespace, closeModalOnConnect, onChange }) {
        let currentAddress = undefined;
        const caipAddress = ChainController.getAccountData(namespace)?.caipAddress;
        if (caipAddress) {
            const { address: currentAddressParsed } = ParseUtil.parseCaipAddress(caipAddress);
            currentAddress = currentAddressParsed;
        }
        const status = ConnectionControllerUtil.getConnectionStatus(connection, namespace);
        switch (status) {
            case 'connected':
            case 'active': {
                const newAddress = await ConnectionController.handleActiveConnection({
                    connection,
                    namespace,
                    address
                });
                if (currentAddress && newAddress) {
                    const hasSwitchedAccount = newAddress.toLowerCase() !== currentAddress.toLowerCase();
                    onChange?.({
                        address: newAddress,
                        namespace,
                        hasSwitchedAccount,
                        hasSwitchedWallet: status === 'active'
                    });
                }
                break;
            }
            case 'disconnected': {
                const newAddress = await ConnectionController.handleDisconnectedConnection({
                    connection,
                    namespace,
                    address,
                    closeModalOnConnect
                });
                if (newAddress) {
                    onChange?.({
                        address: newAddress,
                        namespace,
                        hasSwitchedAccount: true,
                        hasSwitchedWallet: true
                    });
                }
                break;
            }
            default:
                throw new Error(`Invalid connection status: ${status}`);
        }
    }
};
// Export the controller wrapped with our error boundary
const ConnectionController = withErrorBoundary(controller$6);

const ERC7811Utils = {
    /**
     * Creates a Balance object from an ERC7811 Asset object
     * @param asset - Asset object to convert
     * @param chainId - Chain ID in CAIP-2 format
     * @returns Balance object
     */
    createBalance(asset, chainId) {
        const metadata = {
            name: (asset.metadata['name'] || ''),
            symbol: (asset.metadata['symbol'] || ''),
            decimals: (asset.metadata['decimals'] || 0),
            value: (asset.metadata['value'] || 0),
            price: (asset.metadata['price'] || 0),
            iconUrl: (asset.metadata['iconUrl'] || '')
        };
        return {
            name: metadata.name,
            symbol: metadata.symbol,
            chainId,
            address: asset.address === 'native'
                ? undefined
                : this.convertAddressToCAIP10Address(asset.address, chainId),
            value: metadata.value,
            price: metadata.price,
            quantity: {
                decimals: metadata.decimals.toString(),
                numeric: this.convertHexToBalance({
                    hex: asset.balance,
                    decimals: metadata.decimals
                })
            },
            iconUrl: metadata.iconUrl
        };
    },
    /**
     * Converts a hex string to a Balance object
     * @param hex - Hex string to convert
     * @param decimals - Number of decimals to use
     * @returns Balance object
     */
    convertHexToBalance({ hex, decimals }) {
        return formatUnits(BigInt(hex), decimals);
    },
    /**
     * Converts an address to a CAIP-10 address
     * @param address - Address to convert
     * @param chainId - Chain ID in CAIP-2 format
     * @returns CAIP-10 address
     */
    convertAddressToCAIP10Address(address, chainId) {
        return `${chainId}:${address}`;
    },
    /**
     *  Creates a CAIP-2 Chain ID from a chain ID and namespace
     * @param chainId  - Chain ID in hex format
     * @param namespace  - Chain namespace
     * @returns
     */
    createCAIP2ChainId(chainId, namespace) {
        return `${namespace}:${parseInt(chainId, 16)}`;
    },
    /**
     * Gets the chain ID in hex format from a CAIP-2 Chain ID
     * @param caip2ChainId - CAIP-2 Chain ID
     * @returns Chain ID in hex format
     */
    getChainIdHexFromCAIP2ChainId(caip2ChainId) {
        const parts = caip2ChainId.split(':');
        if (parts.length < 2 || !parts[1]) {
            return '0x0';
        }
        const chainPart = parts[1];
        const parsed = parseInt(chainPart, 10);
        return isNaN(parsed) ? '0x0' : `0x${parsed.toString(16)}`;
    },
    /**
     * Checks if a response is a valid WalletGetAssetsResponse
     * @param response - The response to check
     * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
     */
    isWalletGetAssetsResponse(response) {
        // Check if response is an object and has the expected structure
        if (typeof response !== 'object' || response === null) {
            return false;
        }
        // Check if all values are arrays and conform to the expected asset structure
        return Object.values(response).every(value => Array.isArray(value) && value.every(asset => this.isValidAsset(asset)));
    },
    /**
     * Checks if an asset object is valid.
     * @param asset - The asset object to check.
     * @returns True if the asset is valid, false otherwise.
     */
    isValidAsset(asset) {
        return (typeof asset === 'object' &&
            asset !== null &&
            typeof asset.address === 'string' &&
            typeof asset.balance === 'string' &&
            (asset.type === 'ERC20' || asset.type === 'NATIVE') &&
            typeof asset.metadata === 'object' &&
            asset.metadata !== null &&
            typeof asset.metadata['name'] === 'string' &&
            typeof asset.metadata['symbol'] === 'string' &&
            typeof asset.metadata['decimals'] === 'number' &&
            typeof asset.metadata['price'] === 'number' &&
            typeof asset.metadata['iconUrl'] === 'string');
    }
};

// -- Constants ----------------------------------------------------------------
let cachedViemUtils = undefined;
// -- Helpers ------------------------------------------------------------------
async function loadViemUtils() {
    if (!cachedViemUtils) {
        const { createPublicClient, http, defineChain } = await __vitePreload(async () => { const { createPublicClient, http, defineChain } = await import('./index-BBBogHUM.js');return { createPublicClient, http, defineChain }},true              ?__vite__mapDeps([0,1,2,3,4,5,6,7]):void 0);
        cachedViemUtils = {
            createPublicClient,
            http,
            defineChain
        };
    }
    return cachedViemUtils;
}
// -- Utils --------------------------------------------------------------------
const ViemUtil = {
    getBlockchainApiRpcUrl(caipNetworkId, projectId) {
        const url = new URL('https://rpc.walletconnect.org/v1/');
        url.searchParams.set('chainId', caipNetworkId);
        url.searchParams.set('projectId', projectId);
        return url.toString();
    },
    async getViemChain(caipNetwork) {
        const { defineChain } = await loadViemUtils();
        const { chainId } = ParseUtil.parseCaipNetworkId(caipNetwork.caipNetworkId);
        return defineChain({ ...caipNetwork, id: Number(chainId) });
    },
    async createViemPublicClient(caipNetwork) {
        const { createPublicClient, http } = await loadViemUtils();
        const projectId = OptionsController.state.projectId;
        const viemChain = await ViemUtil.getViemChain(caipNetwork);
        if (!viemChain) {
            throw new Error(`Chain ${caipNetwork.caipNetworkId} not found in viem/chains`);
        }
        return createPublicClient({
            chain: viemChain,
            transport: http(ViemUtil.getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId))
        });
    }
};

// -- Controller ---------------------------------------- //
const BalanceUtil = {
    /**
     * Get the balances of the user's tokens. If user connected with Auth provider or and on the EIP155 network,
     * it'll use the `wallet_getAssets` and `wallet_getCapabilities` calls to fetch the balance rather than Blockchain API
     * @param forceUpdate - If true, the balances will be fetched from the server
     * @returns The balances of the user's tokens
     */
    async getMyTokensWithBalance(forceUpdate) {
        const address = ChainController.getAccountData()?.address;
        const caipNetwork = ChainController.state.activeCaipNetwork;
        const isAuthConnector = ConnectorController.getConnectorId('eip155') === ConstantsUtil$3.CONNECTOR_ID.AUTH;
        if (!address || !caipNetwork) {
            return [];
        }
        const caipAddress = `${caipNetwork.caipNetworkId}:${address}`;
        const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
        if (cachedBalance) {
            return cachedBalance.balances;
        }
        // Extract EIP-155 specific logic
        if (caipNetwork.chainNamespace === ConstantsUtil$3.CHAIN.EVM && isAuthConnector) {
            const eip155Balances = await this.getEIP155Balances(address, caipNetwork);
            if (eip155Balances) {
                return this.filterLowQualityTokens(eip155Balances);
            }
        }
        // Fallback to 1Inch API
        const response = await BlockchainApiController.getBalance(address, caipNetwork.caipNetworkId, forceUpdate);
        return this.filterLowQualityTokens(response.balances);
    },
    /**
     * Get the balances of the user's tokens on the EIP155 network using native `wallet_getAssets` and `wallet_getCapabilities` calls
     * @param address - The address of the user
     * @param caipNetwork - The CAIP network
     * @returns The balances of the user's tokens on the EIP155 network
     */
    async getEIP155Balances(address, caipNetwork) {
        try {
            const chainIdHex = ERC7811Utils.getChainIdHexFromCAIP2ChainId(caipNetwork.caipNetworkId);
            const walletCapabilities = (await ConnectionController.getCapabilities(address));
            if (!walletCapabilities?.[chainIdHex]?.['assetDiscovery']?.supported) {
                return null;
            }
            const walletGetAssetsResponse = await ConnectionController.walletGetAssets({
                account: address,
                chainFilter: [chainIdHex]
            });
            if (!ERC7811Utils.isWalletGetAssetsResponse(walletGetAssetsResponse)) {
                return null;
            }
            const assets = walletGetAssetsResponse[chainIdHex] || [];
            const filteredAssets = assets.map(asset => ERC7811Utils.createBalance(asset, caipNetwork.caipNetworkId));
            StorageUtil.updateBalanceCache({
                caipAddress: `${caipNetwork.caipNetworkId}:${address}`,
                balance: { balances: filteredAssets },
                timestamp: Date.now()
            });
            return filteredAssets;
        }
        catch (error) {
            return null;
        }
    },
    /**
     * The 1Inch API includes many low-quality tokens in the balance response,
     * which appear inconsistently. This filter prevents them from being displayed.
     */
    filterLowQualityTokens(balances) {
        return balances.filter(balance => balance.quantity.decimals !== '0');
    },
    async fetchERC20Balance({ caipAddress, assetAddress, caipNetwork }) {
        const publicClient = await ViemUtil.createViemPublicClient(caipNetwork);
        const { address } = ParseUtil.parseCaipAddress(caipAddress);
        const [{ result: name }, { result: symbol }, { result: balance }, { result: decimals }] = await publicClient.multicall({
            contracts: [
                {
                    address: assetAddress,
                    functionName: 'name',
                    args: [],
                    abi: erc20Abi
                },
                {
                    address: assetAddress,
                    functionName: 'symbol',
                    args: [],
                    abi: erc20Abi
                },
                {
                    address: assetAddress,
                    functionName: 'balanceOf',
                    args: [address],
                    abi: erc20Abi
                },
                {
                    address: assetAddress,
                    functionName: 'decimals',
                    args: [],
                    abi: erc20Abi
                }
            ]
        });
        return {
            name,
            symbol,
            decimals,
            balance: balance && decimals ? formatUnits(balance, decimals) : '0'
        };
    }
};

// -- State --------------------------------------------- //
const state$7 = proxy({
    loading: false,
    open: false,
    selectedNetworkId: undefined,
    activeChain: undefined,
    initialized: false
});
// -- Controller ---------------------------------------- //
const PublicStateController = {
    state: state$7,
    subscribe(callback) {
        return subscribe(state$7, () => callback(state$7));
    },
    subscribeOpen(callback) {
        return subscribeKey(state$7, 'open', callback);
    },
    set(newState) {
        Object.assign(state$7, { ...state$7, ...newState });
    }
};

// -- Controller ---------------------------------------- //
const SwapApiUtil = {
    async getTokenList(caipNetworkId) {
        const response = await BlockchainApiController.fetchSwapTokens({
            chainId: caipNetworkId
        });
        const tokens = response?.tokens?.map(token => ({
            ...token,
            eip2612: false,
            quantity: {
                decimals: '0',
                numeric: '0'
            },
            price: 0,
            value: 0
        })) || [];
        return tokens;
    },
    async fetchGasPrice() {
        const caipNetwork = ChainController.state.activeCaipNetwork;
        if (!caipNetwork) {
            return null;
        }
        try {
            switch (caipNetwork.chainNamespace) {
                case 'solana':
                    // eslint-disable-next-line no-case-declarations
                    const lamportsPerSignature = (await ConnectionController?.estimateGas({ chainNamespace: 'solana' }))?.toString();
                    return {
                        standard: lamportsPerSignature,
                        fast: lamportsPerSignature,
                        instant: lamportsPerSignature
                    };
                case 'eip155':
                default:
                    return await BlockchainApiController.fetchGasPrice({
                        chainId: caipNetwork.caipNetworkId
                    });
            }
        }
        catch {
            return null;
        }
    },
    async fetchSwapAllowance({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
        const response = await BlockchainApiController.fetchSwapAllowance({
            tokenAddress,
            userAddress
        });
        if (response?.allowance && sourceTokenAmount && sourceTokenDecimals) {
            const parsedValue = ConnectionController.parseUnits(sourceTokenAmount, sourceTokenDecimals) || 0;
            const hasAllowance = BigInt(response.allowance) >= parsedValue;
            return hasAllowance;
        }
        return false;
    },
    async getMyTokensWithBalance(forceUpdate) {
        const balances = await BalanceUtil.getMyTokensWithBalance(forceUpdate);
        ChainController.setAccountProp('tokenBalance', balances, ChainController.state.activeChain);
        return this.mapBalancesToSwapTokens(balances);
    },
    /**
     * Maps the balances from Blockchain API to SwapTokenWithBalance array
     * @param balances
     * @returns SwapTokenWithBalance[]
     */
    mapBalancesToSwapTokens(balances) {
        return (balances?.map(token => ({
            ...token,
            address: token?.address ? token.address : getActiveNetworkTokenAddress(),
            decimals: parseInt(token.quantity.decimals, 10),
            logoUri: token.iconUrl,
            eip2612: false
        })) || []);
    },
    async handleSwapError(error) {
        try {
            const cause = error?.cause;
            if (!cause?.json) {
                return undefined;
            }
            const response = await cause.json();
            const reason = response?.reasons?.[0]?.description;
            if (reason?.includes('insufficient liquidity')) {
                return 'Insufficient liquidity';
            }
            return undefined;
        }
        catch {
            return undefined;
        }
    }
};

// -- State --------------------------------------------- //
const state$6 = proxy({
    tokenBalances: [],
    loading: false
});
// -- Controller ---------------------------------------- //
const controller$5 = {
    state: state$6,
    subscribe(callback) {
        return subscribe(state$6, () => callback(state$6));
    },
    subscribeKey(key, callback) {
        return subscribeKey(state$6, key, callback);
    },
    setToken(token) {
        if (token) {
            state$6.token = ref(token);
        }
    },
    setTokenAmount(sendTokenAmount) {
        state$6.sendTokenAmount = sendTokenAmount;
    },
    setReceiverAddress(receiverAddress) {
        state$6.receiverAddress = receiverAddress;
    },
    setReceiverProfileImageUrl(receiverProfileImageUrl) {
        state$6.receiverProfileImageUrl = receiverProfileImageUrl;
    },
    setReceiverProfileName(receiverProfileName) {
        state$6.receiverProfileName = receiverProfileName;
    },
    setNetworkBalanceInUsd(networkBalanceInUSD) {
        state$6.networkBalanceInUSD = networkBalanceInUSD;
    },
    setLoading(loading) {
        state$6.loading = loading;
    },
    getSdkEventProperties(error) {
        return {
            message: CoreHelperUtil.parseError(error),
            isSmartAccount: getPreferredAccountType(ChainController.state.activeChain) ===
                W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: state$6.token?.symbol || '',
            amount: state$6.sendTokenAmount ?? 0,
            network: ChainController.state.activeCaipNetwork?.caipNetworkId || ''
        };
    },
    async sendToken() {
        try {
            SendController.setLoading(true);
            switch (ChainController.state.activeCaipNetwork?.chainNamespace) {
                case 'eip155':
                    await SendController.sendEvmToken();
                    return;
                case 'solana':
                    await SendController.sendSolanaToken();
                    return;
                default:
                    throw new Error('Unsupported chain');
            }
        }
        catch (err) {
            if (ErrorUtil$1.isUserRejectedRequestError(err)) {
                throw new UserRejectedRequestError(err);
            }
            throw err;
        }
        finally {
            SendController.setLoading(false);
        }
    },
    async sendEvmToken() {
        const activeChainNamespace = ChainController.state.activeChain;
        if (!activeChainNamespace) {
            throw new Error('SendController:sendEvmToken - activeChainNamespace is required');
        }
        const activeAccountType = getPreferredAccountType(activeChainNamespace);
        if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
            throw new Error('An amount and receiver address are required');
        }
        if (!SendController.state.token) {
            throw new Error('A token is required');
        }
        if (SendController.state.token?.address) {
            EventsController.sendEvent({
                type: 'track',
                event: 'SEND_INITIATED',
                properties: {
                    isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token.address,
                    amount: SendController.state.sendTokenAmount,
                    network: ChainController.state.activeCaipNetwork?.caipNetworkId || ''
                }
            });
            const { hash } = await SendController.sendERC20Token({
                receiverAddress: SendController.state.receiverAddress,
                tokenAddress: SendController.state.token.address,
                sendTokenAmount: SendController.state.sendTokenAmount,
                decimals: SendController.state.token.quantity.decimals
            });
            if (hash) {
                state$6.hash = hash;
            }
        }
        else {
            EventsController.sendEvent({
                type: 'track',
                event: 'SEND_INITIATED',
                properties: {
                    isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token.symbol || '',
                    amount: SendController.state.sendTokenAmount,
                    network: ChainController.state.activeCaipNetwork?.caipNetworkId || ''
                }
            });
            const { hash } = await SendController.sendNativeToken({
                receiverAddress: SendController.state.receiverAddress,
                sendTokenAmount: SendController.state.sendTokenAmount,
                decimals: SendController.state.token.quantity.decimals
            });
            if (hash) {
                state$6.hash = hash;
            }
        }
    },
    async fetchTokenBalance(onError) {
        state$6.loading = true;
        const namespace = ChainController.state.activeChain;
        const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
        const chain = ChainController.state.activeCaipNetwork?.chainNamespace;
        const caipAddress = ChainController.getAccountData(namespace)?.caipAddress ??
            ChainController.state.activeCaipAddress;
        const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : undefined;
        if (state$6.lastRetry &&
            !CoreHelperUtil.isAllowedRetry(state$6.lastRetry, 30 * ConstantsUtil$2.ONE_SEC_MS)) {
            state$6.loading = false;
            return [];
        }
        try {
            if (address && chainId && chain) {
                const balances = await BalanceUtil.getMyTokensWithBalance();
                state$6.tokenBalances = balances;
                state$6.lastRetry = undefined;
                return balances;
            }
        }
        catch (error) {
            state$6.lastRetry = Date.now();
            onError?.(error);
            SnackController.showError('Token Balance Unavailable');
        }
        finally {
            state$6.loading = false;
        }
        return [];
    },
    fetchNetworkBalance() {
        if (state$6.tokenBalances.length === 0) {
            return;
        }
        const networkTokenBalances = SwapApiUtil.mapBalancesToSwapTokens(state$6.tokenBalances);
        if (!networkTokenBalances) {
            return;
        }
        const networkToken = networkTokenBalances.find(token => token.address === getActiveNetworkTokenAddress());
        if (!networkToken) {
            return;
        }
        state$6.networkBalanceInUSD = networkToken
            ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString()
            : '0';
    },
    async sendNativeToken(params) {
        RouterController.pushTransactionStack({});
        const to = params.receiverAddress;
        const address = ChainController.getAccountData()?.address;
        const value = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
        const data = '0x';
        const hash = await ConnectionController.sendTransaction({
            chainNamespace: ConstantsUtil$3.CHAIN.EVM,
            to,
            address,
            data,
            value: value ?? BigInt(0)
        });
        EventsController.sendEvent({
            type: 'track',
            event: 'SEND_SUCCESS',
            properties: {
                isSmartAccount: getPreferredAccountType('eip155') === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: SendController.state.token?.symbol || '',
                amount: params.sendTokenAmount,
                network: ChainController.state.activeCaipNetwork?.caipNetworkId || '',
                hash: hash || ''
            }
        });
        ConnectionController._getClient()?.updateBalance('eip155');
        SendController.resetSend();
        return { hash };
    },
    async sendERC20Token(params) {
        RouterController.pushTransactionStack({
            onSuccess() {
                RouterController.replace('Account');
            }
        });
        const amount = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
        const address = ChainController.getAccountData()?.address;
        if (address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
            const tokenAddress = CoreHelperUtil.getPlainAddress(params.tokenAddress);
            if (!tokenAddress) {
                throw new Error('SendController:sendERC20Token - tokenAddress is required');
            }
            const hash = await ConnectionController.writeContract({
                fromAddress: address,
                tokenAddress,
                args: [params.receiverAddress, amount ?? BigInt(0)],
                method: 'transfer',
                abi: ContractUtil.getERC20Abi(tokenAddress),
                chainNamespace: ConstantsUtil$3.CHAIN.EVM
            });
            EventsController.sendEvent({
                type: 'track',
                event: 'SEND_SUCCESS',
                properties: {
                    isSmartAccount: getPreferredAccountType('eip155') === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: SendController.state.token?.symbol || '',
                    amount: params.sendTokenAmount,
                    network: ChainController.state.activeCaipNetwork?.caipNetworkId || '',
                    hash: hash || ''
                }
            });
            SendController.resetSend();
            return { hash };
        }
        return { hash: undefined };
    },
    async sendSolanaToken() {
        if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
            throw new Error('An amount and receiver address are required');
        }
        RouterController.pushTransactionStack({
            onSuccess() {
                RouterController.replace('Account');
            }
        });
        let tokenMint = undefined;
        if (SendController.state.token &&
            SendController.state.token.address !== ConstantsUtil$2.SOLANA_NATIVE_TOKEN_ADDRESS) {
            if (CoreHelperUtil.isCaipAddress(SendController.state.token.address)) {
                tokenMint = CoreHelperUtil.getPlainAddress(SendController.state.token.address);
            }
            else {
                tokenMint = SendController.state.token.address;
            }
        }
        const hash = await ConnectionController.sendTransaction({
            chainNamespace: 'solana',
            tokenMint,
            to: SendController.state.receiverAddress,
            value: SendController.state.sendTokenAmount
        });
        if (hash) {
            state$6.hash = hash;
        }
        ConnectionController._getClient()?.updateBalance('solana');
        SendController.resetSend();
    },
    resetSend() {
        state$6.token = undefined;
        state$6.sendTokenAmount = undefined;
        state$6.receiverAddress = undefined;
        state$6.receiverProfileImageUrl = undefined;
        state$6.receiverProfileName = undefined;
        state$6.loading = false;
        state$6.tokenBalances = [];
    }
};
// Export the controller wrapped with our error boundary
const SendController = withErrorBoundary(controller$5);

// -- Constants ----------------------------------------- //
const defaultAccountState = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: new Map(),
    user: undefined,
    preferredAccountType: undefined
};
const networkState = {
    caipNetwork: undefined,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
};
// -- State --------------------------------------------- //
const state$5 = proxy({
    chains: proxyMap(),
    activeCaipAddress: undefined,
    activeChain: undefined,
    activeCaipNetwork: undefined,
    noAdapters: false,
    universalAdapter: {
        networkControllerClient: undefined,
        connectionControllerClient: undefined
    },
    isSwitchingNamespace: false
});
// -- Controller ---------------------------------------- //
const controller$4 = {
    state: state$5,
    subscribe(callback) {
        return subscribe(state$5, () => {
            callback(state$5);
        });
    },
    subscribeKey(key, callback) {
        return subscribeKey(state$5, key, callback);
    },
    subscribeAccountStateProp(property, callback, chain) {
        const activeChain = chain || state$5.activeChain;
        if (!activeChain) {
            return () => undefined;
        }
        return subscribeKey(state$5.chains.get(activeChain)?.accountState || {}, property, callback);
    },
    subscribeChainProp(property, callback, chain) {
        let prev = undefined;
        return subscribe(state$5.chains, () => {
            const activeChain = chain || state$5.activeChain;
            if (activeChain) {
                const nextValue = state$5.chains.get(activeChain)?.[property];
                if (prev !== nextValue) {
                    prev = nextValue;
                    callback(nextValue);
                }
            }
        });
    },
    initialize(adapters, caipNetworks, clients) {
        const { chainId: activeChainId, namespace: activeNamespace } = StorageUtil.getActiveNetworkProps();
        const activeCaipNetwork = caipNetworks?.find(network => network.id.toString() === activeChainId?.toString());
        const defaultAdapter = adapters.find(adapter => adapter?.namespace === activeNamespace);
        const adapterToActivate = defaultAdapter || adapters?.[0];
        const namespacesFromAdapters = adapters.map(a => a.namespace).filter(n => n !== undefined);
        /**
         * If the AppKit is in embedded mode (for Demo app), we should get the available namespaces from the adapters.
         */
        const namespaces = OptionsController.state.enableEmbedded
            ? new Set([...namespacesFromAdapters])
            : new Set([...(caipNetworks?.map(network => network.chainNamespace) ?? [])]);
        if (adapters?.length === 0 || !adapterToActivate) {
            state$5.noAdapters = true;
        }
        if (!state$5.noAdapters) {
            state$5.activeChain = adapterToActivate?.namespace;
            state$5.activeCaipNetwork = activeCaipNetwork;
            ChainController.setChainNetworkData(adapterToActivate?.namespace, {
                caipNetwork: activeCaipNetwork
            });
            if (state$5.activeChain) {
                PublicStateController.set({ activeChain: adapterToActivate?.namespace });
            }
        }
        namespaces.forEach(namespace => {
            const namespaceNetworks = caipNetworks?.filter(network => network.chainNamespace === namespace);
            const storedAccountTypes = StorageUtil.getPreferredAccountTypes() || {};
            const defaultTypes = { ...OptionsController.state.defaultAccountTypes, ...storedAccountTypes };
            ChainController.state.chains.set(namespace, {
                namespace,
                networkState: proxy({ ...networkState, caipNetwork: namespaceNetworks?.[0] }),
                accountState: proxy({
                    ...defaultAccountState,
                    preferredAccountType: defaultTypes[namespace]
                }),
                caipNetworks: namespaceNetworks ?? [],
                ...clients
            });
            ChainController.setRequestedCaipNetworks(namespaceNetworks ?? [], namespace);
        });
    },
    removeAdapter(namespace) {
        if (state$5.activeChain === namespace) {
            const nextAdapter = Array.from(state$5.chains.entries()).find(([chainNamespace]) => chainNamespace !== namespace);
            if (nextAdapter) {
                const caipNetwork = nextAdapter[1]?.caipNetworks?.[0];
                if (caipNetwork) {
                    ChainController.setActiveCaipNetwork(caipNetwork);
                }
            }
        }
        state$5.chains.delete(namespace);
    },
    addAdapter(adapter, { networkControllerClient, connectionControllerClient }, caipNetworks) {
        if (!adapter.namespace) {
            throw new Error('ChainController:addAdapter - adapter must have a namespace');
        }
        state$5.chains.set(adapter.namespace, {
            namespace: adapter.namespace,
            networkState: { ...networkState, caipNetwork: caipNetworks[0] },
            accountState: { ...defaultAccountState },
            caipNetworks,
            connectionControllerClient,
            networkControllerClient
        });
        ChainController.setRequestedCaipNetworks(caipNetworks?.filter(caipNetwork => caipNetwork.chainNamespace === adapter.namespace) ?? [], adapter.namespace);
    },
    addNetwork(network) {
        const chainAdapter = state$5.chains.get(network.chainNamespace);
        if (chainAdapter) {
            const newNetworks = [...(chainAdapter.caipNetworks || [])];
            if (!chainAdapter.caipNetworks?.find(caipNetwork => caipNetwork.id === network.id)) {
                newNetworks.push(network);
            }
            state$5.chains.set(network.chainNamespace, { ...chainAdapter, caipNetworks: newNetworks });
            ChainController.setRequestedCaipNetworks(newNetworks, network.chainNamespace);
            ConnectorController.filterByNamespace(network.chainNamespace, true);
        }
    },
    removeNetwork(namespace, networkId) {
        const chainAdapter = state$5.chains.get(namespace);
        if (chainAdapter) {
            // Check if network being removed is active network
            const isActiveNetwork = state$5.activeCaipNetwork?.id === networkId;
            // Filter out the network being removed
            const newCaipNetworksOfAdapter = [
                ...(chainAdapter.caipNetworks?.filter(network => network.id !== networkId) || [])
            ];
            // If active network was removed and there are other networks available, switch to first one
            if (isActiveNetwork && chainAdapter?.caipNetworks?.[0]) {
                ChainController.setActiveCaipNetwork(chainAdapter.caipNetworks[0]);
            }
            state$5.chains.set(namespace, { ...chainAdapter, caipNetworks: newCaipNetworksOfAdapter });
            ChainController.setRequestedCaipNetworks(newCaipNetworksOfAdapter || [], namespace);
            if (newCaipNetworksOfAdapter.length === 0) {
                ConnectorController.filterByNamespace(namespace, false);
            }
        }
    },
    setAdapterNetworkState(chain, props) {
        const chainAdapter = state$5.chains.get(chain);
        if (chainAdapter) {
            chainAdapter.networkState = {
                ...(chainAdapter.networkState || networkState),
                ...props
            };
            state$5.chains.set(chain, chainAdapter);
        }
    },
    setChainAccountData(chain, accountProps, _unknown = true) {
        if (!chain) {
            throw new Error('Chain is required to update chain account data');
        }
        const chainAdapter = state$5.chains.get(chain);
        if (chainAdapter) {
            const newAccountState = {
                ...(chainAdapter.accountState || defaultAccountState),
                ...accountProps
            };
            state$5.chains.set(chain, { ...chainAdapter, accountState: newAccountState });
            if (state$5.chains.size === 1 || state$5.activeChain === chain) {
                if (accountProps.caipAddress) {
                    state$5.activeCaipAddress = accountProps.caipAddress;
                }
            }
        }
    },
    setChainNetworkData(chain, networkProps) {
        if (!chain) {
            return;
        }
        const chainAdapter = state$5.chains.get(chain);
        if (chainAdapter) {
            const newNetworkState = { ...(chainAdapter.networkState || networkState), ...networkProps };
            state$5.chains.set(chain, { ...chainAdapter, networkState: newNetworkState });
        }
    },
    // eslint-disable-next-line max-params
    setAccountProp(prop, value, chain, replaceState = true) {
        ChainController.setChainAccountData(chain, { [prop]: value }, replaceState);
    },
    setActiveNamespace(chain) {
        state$5.activeChain = chain;
        const newAdapter = chain ? state$5.chains.get(chain) : undefined;
        const caipNetwork = newAdapter?.networkState?.caipNetwork;
        if (caipNetwork?.id && chain) {
            state$5.activeCaipAddress = newAdapter?.accountState?.caipAddress;
            state$5.activeCaipNetwork = caipNetwork;
            ChainController.setChainNetworkData(chain, { caipNetwork });
            StorageUtil.setActiveCaipNetworkId(caipNetwork?.caipNetworkId);
            PublicStateController.set({
                activeChain: chain,
                selectedNetworkId: caipNetwork?.caipNetworkId
            });
        }
    },
    setActiveCaipNetwork(caipNetwork) {
        if (!caipNetwork) {
            return;
        }
        const isSameNamespace = state$5.activeChain === caipNetwork.chainNamespace;
        if (!isSameNamespace) {
            ChainController.setIsSwitchingNamespace(true);
        }
        const newAdapter = state$5.chains.get(caipNetwork.chainNamespace);
        state$5.activeChain = caipNetwork.chainNamespace;
        state$5.activeCaipNetwork = caipNetwork;
        ChainController.setChainNetworkData(caipNetwork.chainNamespace, { caipNetwork });
        let address = newAdapter?.accountState?.address;
        if (address) {
            state$5.activeCaipAddress = `${caipNetwork.chainNamespace}:${caipNetwork.id}:${address}`;
        }
        else if (isSameNamespace && state$5.activeCaipAddress) {
            const { address: parsedAddress } = ParseUtil.parseCaipAddress(state$5.activeCaipAddress);
            address = parsedAddress;
            state$5.activeCaipAddress = `${caipNetwork.caipNetworkId}:${address}`;
        }
        else {
            state$5.activeCaipAddress = undefined;
        }
        ChainController.setChainAccountData(caipNetwork.chainNamespace, {
            address,
            caipAddress: state$5.activeCaipAddress
        });
        // Reset send state when switching networks
        SendController.resetSend();
        PublicStateController.set({
            activeChain: state$5.activeChain,
            selectedNetworkId: state$5.activeCaipNetwork?.caipNetworkId
        });
        StorageUtil.setActiveCaipNetworkId(caipNetwork.caipNetworkId);
        const isSupported = ChainController.checkIfSupportedNetwork(caipNetwork.chainNamespace);
        if (!isSupported &&
            OptionsController.state.enableNetworkSwitch &&
            !OptionsController.state.allowUnsupportedChain &&
            !ConnectionController.state.wcBasic) {
            ChainController.showUnsupportedChainUI();
        }
    },
    addCaipNetwork(caipNetwork) {
        if (!caipNetwork) {
            return;
        }
        const chain = state$5.chains.get(caipNetwork.chainNamespace);
        if (chain) {
            chain?.caipNetworks?.push(caipNetwork);
        }
    },
    async switchActiveNamespace(namespace) {
        if (!namespace) {
            return;
        }
        const isDifferentChain = namespace !== ChainController.state.activeChain;
        const caipNetworkOfNamespace = ChainController.getNetworkData(namespace)?.caipNetwork;
        const firstNetworkWithChain = ChainController.getCaipNetworkByNamespace(namespace, caipNetworkOfNamespace?.id);
        if (isDifferentChain && firstNetworkWithChain) {
            await ChainController.switchActiveNetwork(firstNetworkWithChain);
        }
    },
    async switchActiveNetwork(network, { throwOnFailure = false } = {}) {
        const namespace = ChainController.state.activeChain;
        if (!namespace) {
            throw new Error('ChainController:switchActiveNetwork - namespace is required');
        }
        const activeAdapter = ChainController.state.chains.get(namespace);
        const unsupportedNetwork = !activeAdapter?.caipNetworks?.some(caipNetwork => caipNetwork.id === state$5.activeCaipNetwork?.id);
        const networkControllerClient = ChainController.getNetworkControllerClient(network.chainNamespace);
        if (networkControllerClient) {
            try {
                await networkControllerClient.switchCaipNetwork(network);
                if (unsupportedNetwork) {
                    ModalController.close();
                }
            }
            catch (error) {
                if (throwOnFailure) {
                    throw error;
                }
                RouterController.goBack();
            }
            EventsController.sendEvent({
                type: 'track',
                event: 'SWITCH_NETWORK',
                properties: { network: network.caipNetworkId }
            });
        }
    },
    getNetworkControllerClient(chainNamespace) {
        const chain = chainNamespace || state$5.activeChain;
        if (!chain) {
            throw new Error('ChainController:getNetworkControllerClient - chain is required');
        }
        const chainAdapter = state$5.chains.get(chain);
        if (!chainAdapter) {
            throw new Error('Chain adapter not found');
        }
        if (!chainAdapter.networkControllerClient) {
            throw new Error('NetworkController client not set');
        }
        return chainAdapter.networkControllerClient;
    },
    getConnectionControllerClient(_chain) {
        const chain = _chain || state$5.activeChain;
        if (!chain) {
            throw new Error('Chain is required to get connection controller client');
        }
        const chainAdapter = state$5.chains.get(chain);
        if (!chainAdapter?.connectionControllerClient) {
            throw new Error('ConnectionController client not set');
        }
        return chainAdapter.connectionControllerClient;
    },
    getNetworkProp(key, namespace) {
        const chainNetworkState = state$5.chains.get(namespace)?.networkState;
        if (!chainNetworkState) {
            return undefined;
        }
        return chainNetworkState[key];
    },
    getRequestedCaipNetworks(chainToFilter) {
        const adapter = state$5.chains.get(chainToFilter);
        const { approvedCaipNetworkIds = [], requestedCaipNetworks = [] } = adapter?.networkState || {};
        const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        const filteredNetworks = sortedNetworks.filter(network => network?.id);
        return filteredNetworks;
    },
    getAllRequestedCaipNetworks() {
        const requestedCaipNetworks = [];
        state$5.chains.forEach(chainAdapter => {
            if (!chainAdapter.namespace) {
                throw new Error('ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace');
            }
            const caipNetworks = ChainController.getRequestedCaipNetworks(chainAdapter.namespace);
            requestedCaipNetworks.push(...caipNetworks);
        });
        return requestedCaipNetworks;
    },
    setRequestedCaipNetworks(caipNetworks, chain) {
        ChainController.setAdapterNetworkState(chain, { requestedCaipNetworks: caipNetworks });
        const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
        const namespaces = allRequestedCaipNetworks.map(network => network.chainNamespace);
        const uniqueNamespaces = Array.from(new Set(namespaces));
        ConnectorController.filterByNamespaces(uniqueNamespaces);
    },
    getAllApprovedCaipNetworkIds() {
        const approvedCaipNetworkIds = [];
        state$5.chains.forEach(chainAdapter => {
            if (!chainAdapter.namespace) {
                throw new Error('ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace');
            }
            const approvedIds = ChainController.getApprovedCaipNetworkIds(chainAdapter.namespace);
            approvedCaipNetworkIds.push(...approvedIds);
        });
        return approvedCaipNetworkIds;
    },
    getActiveCaipNetwork(chainNamespace) {
        if (chainNamespace) {
            return state$5.chains.get(chainNamespace)?.networkState?.caipNetwork;
        }
        return state$5.activeCaipNetwork;
    },
    getActiveCaipAddress() {
        return state$5.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(namespace) {
        const adapter = state$5.chains.get(namespace);
        const approvedCaipNetworkIds = adapter?.networkState?.approvedCaipNetworkIds || [];
        return approvedCaipNetworkIds;
    },
    async setApprovedCaipNetworksData(namespace) {
        const networkControllerClient = ChainController.getNetworkControllerClient();
        const data = await networkControllerClient?.getApprovedCaipNetworksData();
        ChainController.setAdapterNetworkState(namespace, {
            approvedCaipNetworkIds: data?.approvedCaipNetworkIds,
            supportsAllNetworks: data?.supportsAllNetworks
        });
    },
    checkIfSupportedNetwork(namespace, caipNetworkId) {
        const activeCaipNetworkId = caipNetworkId || state$5.activeCaipNetwork?.caipNetworkId;
        const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(namespace);
        if (!requestedCaipNetworks.length) {
            return true;
        }
        return requestedCaipNetworks?.some(network => network.caipNetworkId === activeCaipNetworkId);
    },
    checkIfSupportedChainId(chainId) {
        if (!state$5.activeChain) {
            return true;
        }
        const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(state$5.activeChain);
        return requestedCaipNetworks?.some(network => network.id === chainId);
    },
    // Smart Account Network Handlers
    setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, chain) {
        ChainController.setAdapterNetworkState(chain, { smartAccountEnabledNetworks });
    },
    checkIfSmartAccountEnabled() {
        const networkId = NetworkUtil$1.caipNetworkIdToNumber(state$5.activeCaipNetwork?.caipNetworkId);
        const activeChain = state$5.activeChain;
        if (!activeChain || !networkId) {
            return false;
        }
        const smartAccountEnabledNetworks = ChainController.getNetworkProp('smartAccountEnabledNetworks', activeChain);
        return Boolean(smartAccountEnabledNetworks?.includes(Number(networkId)));
    },
    showUnsupportedChainUI() {
        ModalController.open({ view: 'UnsupportedChain' });
    },
    checkIfNamesSupported() {
        const activeCaipNetwork = state$5.activeCaipNetwork;
        return Boolean(activeCaipNetwork?.chainNamespace &&
            ConstantsUtil$2.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(activeCaipNetwork.chainNamespace));
    },
    resetNetwork(namespace) {
        ChainController.setAdapterNetworkState(namespace, {
            approvedCaipNetworkIds: undefined,
            supportsAllNetworks: true
        });
    },
    resetAccount(chain) {
        const chainToWrite = chain;
        if (!chainToWrite) {
            throw new Error('Chain is required to set account prop');
        }
        const currentAccountType = ChainController.state.chains.get(chainToWrite)?.accountState?.preferredAccountType;
        const optionsAccountType = OptionsController.state.defaultAccountTypes[chainToWrite];
        state$5.activeCaipAddress = undefined;
        ChainController.setChainAccountData(chainToWrite, {
            smartAccountDeployed: false,
            currentTab: 0,
            caipAddress: undefined,
            address: undefined,
            balance: undefined,
            balanceSymbol: undefined,
            profileName: undefined,
            profileImage: undefined,
            addressExplorerUrl: undefined,
            tokenBalance: [],
            connectedWalletInfo: undefined,
            preferredAccountType: optionsAccountType || currentAccountType,
            socialProvider: undefined,
            socialWindow: undefined,
            farcasterUrl: undefined,
            user: undefined,
            status: 'disconnected'
        });
        ConnectorController.removeConnectorId(chainToWrite);
    },
    setIsSwitchingNamespace(isSwitchingNamespace) {
        state$5.isSwitchingNamespace = isSwitchingNamespace;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
        const availableChains = [];
        let firstCaipNetwork = undefined;
        state$5.chains.forEach(chain => {
            if (ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(ns => ns === chain.namespace)) {
                if (chain.namespace) {
                    availableChains.push(chain.namespace);
                }
            }
        });
        if (availableChains.length > 0) {
            const firstAvailableChain = availableChains[0];
            firstCaipNetwork = firstAvailableChain
                ? state$5.chains.get(firstAvailableChain)?.caipNetworks?.[0]
                : undefined;
            return firstCaipNetwork;
        }
        return undefined;
    },
    getAccountData(chainNamespace) {
        const namespace = chainNamespace || state$5.activeChain;
        if (!namespace) {
            return undefined;
        }
        return ChainController.state.chains.get(namespace)?.accountState;
    },
    getNetworkData(chainNamespace) {
        const namespace = chainNamespace || state$5.activeChain;
        if (!namespace) {
            return undefined;
        }
        return ChainController.state.chains.get(namespace)?.networkState;
    },
    getCaipNetworkByNamespace(chainNamespace, chainId) {
        if (!chainNamespace) {
            return undefined;
        }
        const chain = ChainController.state.chains.get(chainNamespace);
        const byChainId = chain?.caipNetworks?.find(network => network.id === chainId);
        if (byChainId) {
            return byChainId;
        }
        return chain?.networkState?.caipNetwork || chain?.caipNetworks?.[0];
    },
    /**
     * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
     * @param namespace - The namespace to get the requested CaipNetwork IDs for
     * @returns The requested CaipNetwork IDs
     */
    getRequestedCaipNetworkIds() {
        const namespace = ConnectorController.state.filterByNamespace;
        const chains = namespace ? [state$5.chains.get(namespace)] : Array.from(state$5.chains.values());
        return chains
            .flatMap(chain => chain?.caipNetworks || [])
            .map(caipNetwork => caipNetwork.caipNetworkId);
    },
    getCaipNetworks(namespace) {
        if (namespace) {
            return ChainController.getRequestedCaipNetworks(namespace);
        }
        return ChainController.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(id, namespace) {
        return controller$4
            .getCaipNetworks(namespace)
            .find(n => n.id.toString() === id.toString() || n.caipNetworkId.toString() === id.toString());
    },
    setLastConnectedSIWECaipNetwork(network) {
        state$5.lastConnectedSIWECaipNetwork = network;
    },
    getLastConnectedSIWECaipNetwork() {
        return state$5.lastConnectedSIWECaipNetwork;
    },
    async fetchTokenBalance(onError) {
        const accountState = ChainController.getAccountData();
        if (!accountState) {
            return [];
        }
        const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
        const chain = ChainController.state.activeCaipNetwork?.chainNamespace;
        const caipAddress = ChainController.state.activeCaipAddress;
        const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : undefined;
        ChainController.setAccountProp('balanceLoading', true, chain);
        if (accountState.lastRetry &&
            !CoreHelperUtil.isAllowedRetry(accountState.lastRetry, 30 * ConstantsUtil$2.ONE_SEC_MS)) {
            ChainController.setAccountProp('balanceLoading', false, chain);
            return [];
        }
        try {
            if (address && chainId && chain) {
                const balance = await BalanceUtil.getMyTokensWithBalance();
                ChainController.setAccountProp('tokenBalance', balance, chain);
                ChainController.setAccountProp('lastRetry', undefined, chain);
                ChainController.setAccountProp('balanceLoading', false, chain);
                return balance;
            }
        }
        catch (error) {
            ChainController.setAccountProp('lastRetry', Date.now(), chain);
            onError?.(error);
            SnackController.showError('Token Balance Unavailable');
        }
        finally {
            ChainController.setAccountProp('balanceLoading', false, chain);
        }
        return [];
    },
    isCaipNetworkDisabled(network) {
        const networkNamespace = network.chainNamespace;
        const isNextNamespaceConnected = Boolean(ChainController.getAccountData(networkNamespace)?.caipAddress);
        const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
        const shouldSupportAllNetworks = ChainController.getNetworkProp('supportsAllNetworks', networkNamespace) !== false;
        const connectorId = ConnectorController.getConnectorId(networkNamespace);
        const authConnector = ConnectorController.getAuthConnector();
        const isConnectedWithAuth = connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH && authConnector;
        if (!isNextNamespaceConnected || shouldSupportAllNetworks || isConnectedWithAuth) {
            return false;
        }
        return !approvedCaipNetworkIds?.includes(network.caipNetworkId);
    }
};
// Export the controller wrapped with our error boundary
const ChainController = withErrorBoundary(controller$4);

const NetworkUtil = {
    /**
     * Function to handle the network switch.
     * This function has variety of conditions to handle the network switch depending on the connectors or namespace's connection states.
     * @param args.network - The network to switch to.
     * @param args.shouldConfirmSwitch - Whether to confirm the switch. If true, the user will be asked to confirm the switch if necessary.
     * @returns void
     */
    onSwitchNetwork({ network, ignoreSwitchConfirmation = false }) {
        const currentNetwork = ChainController.state.activeCaipNetwork;
        const currentNamespace = ChainController.state.activeChain;
        const routerData = RouterController.state.data;
        const isSameNetwork = network.id === currentNetwork?.id;
        if (isSameNetwork) {
            return;
        }
        const isCurrentNamespaceConnected = Boolean(ChainController.getAccountData(currentNamespace)?.address);
        const isNextNamespaceConnected = Boolean(ChainController.getAccountData(network.chainNamespace)?.address);
        const isDifferentNamespace = network.chainNamespace !== currentNamespace;
        const connectorId = ConnectorController.getConnectorId(currentNamespace);
        /**
         * If the network is supported by the auth connector, we don't need to show switch active chain view.
         * But there are some cases like switching from Ethereum to Bitcoin where Bitcoin is not supported by the auth connector and users should connect with another connector.
         */
        const isConnectedWithAuth = connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
        const isSupportedForAuthConnector = ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(c => c === network.chainNamespace);
        /**
         * 1. If the ignoreSwitchConfirmation is set to true, we should switch to the network,
         * 2. If user connected with auth connector and the next network is supported by the auth connector,
         * we should switch to the network without confirmation screen.
         */
        if (ignoreSwitchConfirmation || (isConnectedWithAuth && isSupportedForAuthConnector)) {
            RouterController.push('SwitchNetwork', { ...routerData, network });
        }
        else if (
        /**
         * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first.
         */
        isCurrentNamespaceConnected &&
            isDifferentNamespace &&
            !isNextNamespaceConnected) {
            RouterController.push('SwitchActiveChain', {
                switchToChain: network.chainNamespace,
                navigateTo: 'Connect',
                navigateWithReplace: true,
                network
            });
        }
        else {
            RouterController.push('SwitchNetwork', { ...routerData, network });
        }
    }
};

// -- State --------------------------------------------- //
const state$4 = proxy({
    loading: false,
    loadingNamespaceMap: new Map(),
    open: false,
    shake: false,
    namespace: undefined
});
// -- Controller ---------------------------------------- //
const controller$3 = {
    state: state$4,
    subscribe(callback) {
        return subscribe(state$4, () => callback(state$4));
    },
    subscribeKey(key, callback) {
        return subscribeKey(state$4, key, callback);
    },
    async open(options) {
        const namespace = options?.namespace;
        const currentNamespace = ChainController.state.activeChain;
        const isSwitchingNamespace = namespace && namespace !== currentNamespace;
        const caipAddress = ChainController.getAccountData(options?.namespace)?.caipAddress;
        const hasNoAdapters = ChainController.state.noAdapters;
        if (ConnectionController.state.wcBasic) {
            // No need to add an await here if we are use basic
            ApiController.prefetch({
                fetchNetworkImages: false,
                fetchConnectorImages: false,
                fetchWalletRanks: false
            });
        }
        else {
            await ApiController.prefetch();
        }
        ConnectorController.setFilterByNamespace(options?.namespace);
        ModalController.setLoading(true, namespace);
        if (namespace && isSwitchingNamespace) {
            const namespaceNetwork = ChainController.getNetworkData(namespace)?.caipNetwork ||
                ChainController.getRequestedCaipNetworks(namespace)[0];
            if (namespaceNetwork) {
                if (hasNoAdapters) {
                    await ChainController.switchActiveNetwork(namespaceNetwork);
                    RouterController.push('ConnectingWalletConnectBasic');
                }
                else {
                    NetworkUtil.onSwitchNetwork({ network: namespaceNetwork, ignoreSwitchConfirmation: true });
                }
            }
        }
        else if (OptionsController.state.manualWCControl || (hasNoAdapters && !caipAddress)) {
            if (CoreHelperUtil.isMobile()) {
                RouterController.reset('AllWallets');
            }
            else {
                RouterController.reset('ConnectingWalletConnectBasic');
            }
        }
        else if (options?.view) {
            RouterController.reset(options.view, options.data);
        }
        else if (caipAddress) {
            RouterController.reset('Account');
        }
        else {
            RouterController.reset('Connect');
        }
        state$4.open = true;
        PublicStateController.set({ open: true });
        EventsController.sendEvent({
            type: 'track',
            event: 'MODAL_OPEN',
            properties: { connected: Boolean(caipAddress) }
        });
    },
    close() {
        const isEmbeddedEnabled = OptionsController.state.enableEmbedded;
        const isConnected = Boolean(ChainController.state.activeCaipAddress);
        // Only send the event if the modal is open and is about to be closed
        if (state$4.open) {
            EventsController.sendEvent({
                type: 'track',
                event: 'MODAL_CLOSE',
                properties: { connected: isConnected }
            });
        }
        state$4.open = false;
        RouterController.reset('Connect');
        ModalController.clearLoading();
        if (isEmbeddedEnabled) {
            if (isConnected) {
                RouterController.replace('Account');
            }
            else {
                RouterController.push('Connect');
            }
        }
        else {
            PublicStateController.set({ open: false });
        }
        ConnectionController.resetUri();
    },
    setLoading(loading, namespace) {
        if (namespace) {
            state$4.loadingNamespaceMap.set(namespace, loading);
        }
        state$4.loading = loading;
        PublicStateController.set({ loading });
    },
    clearLoading() {
        state$4.loadingNamespaceMap.clear();
        state$4.loading = false;
        PublicStateController.set({ loading: false });
    },
    shake() {
        if (state$4.shake) {
            return;
        }
        state$4.shake = true;
        setTimeout(() => {
            state$4.shake = false;
        }, 500);
    }
};
// Export the controller wrapped with our error boundary
const ModalController = withErrorBoundary(controller$3);

const CLEAN_PROVIDERS_STATE = {
    eip155: undefined,
    solana: undefined,
    polkadot: undefined,
    bip122: undefined,
    cosmos: undefined,
    sui: undefined,
    stacks: undefined
};
const state$3 = proxy({
    providers: { ...CLEAN_PROVIDERS_STATE },
    providerIds: { ...CLEAN_PROVIDERS_STATE }
});
const ProviderController = {
    state: state$3,
    subscribeKey(key, callback) {
        return subscribeKey(state$3, key, callback);
    },
    subscribe(callback) {
        return subscribe(state$3, () => {
            callback(state$3);
        });
    },
    subscribeProviders(callback) {
        return subscribe(state$3.providers, () => callback(state$3.providers));
    },
    setProvider(chainNamespace, provider) {
        if (chainNamespace && provider) {
            state$3.providers[chainNamespace] = ref(provider);
        }
    },
    getProvider(chainNamespace) {
        if (!chainNamespace) {
            return undefined;
        }
        return state$3.providers[chainNamespace];
    },
    setProviderId(chainNamespace, providerId) {
        if (providerId) {
            state$3.providerIds[chainNamespace] = providerId;
        }
    },
    getProviderId(chainNamespace) {
        if (!chainNamespace) {
            return undefined;
        }
        return state$3.providerIds[chainNamespace];
    },
    reset() {
        state$3.providers = { ...CLEAN_PROVIDERS_STATE };
        state$3.providerIds = { ...CLEAN_PROVIDERS_STATE };
    },
    resetChain(chainNamespace) {
        state$3.providers[chainNamespace] = undefined;
        state$3.providerIds[chainNamespace] = undefined;
    }
};

const USDC_CURRENCY_DEFAULT = {
    id: '2b92315d-eab7-5bef-84fa-089a131333f5',
    name: 'USD Coin',
    symbol: 'USDC',
    networks: [
        {
            name: 'ethereum-mainnet',
            display_name: 'Ethereum',
            chain_id: '1',
            contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
        },
        {
            name: 'polygon-mainnet',
            display_name: 'Polygon',
            chain_id: '137',
            contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
        }
    ]
};
const USD_CURRENCY_DEFAULT = {
    id: 'USD',
    payment_method_limits: [
        {
            id: 'card',
            min: '10.00',
            max: '7500.00'
        },
        {
            id: 'ach_bank_account',
            min: '10.00',
            max: '25000.00'
        }
    ]
};
const defaultState = {
    providers: ONRAMP_PROVIDERS,
    selectedProvider: null,
    error: null,
    purchaseCurrency: USDC_CURRENCY_DEFAULT,
    paymentCurrency: USD_CURRENCY_DEFAULT,
    purchaseCurrencies: [USDC_CURRENCY_DEFAULT],
    paymentCurrencies: [],
    quotesLoading: false
};
// -- State --------------------------------------------- //
const state$2 = proxy(defaultState);
// -- Controller ---------------------------------------- //
const controller$2 = {
    state: state$2,
    subscribe(callback) {
        return subscribe(state$2, () => callback(state$2));
    },
    subscribeKey(key, callback) {
        return subscribeKey(state$2, key, callback);
    },
    setSelectedProvider(provider) {
        if (provider && provider.name === 'meld') {
            const activeChain = ChainController.state.activeChain;
            const currency = activeChain === ConstantsUtil$3.CHAIN.SOLANA ? 'SOL' : 'USDC';
            const address = activeChain
                ? (ChainController.state.chains.get(activeChain)?.accountState?.address ?? '')
                : '';
            const url = new URL(provider.url);
            url.searchParams.append('publicKey', MELD_PUBLIC_KEY);
            url.searchParams.append('destinationCurrencyCode', currency);
            url.searchParams.append('walletAddress', address);
            url.searchParams.append('externalCustomerId', OptionsController.state.projectId);
            state$2.selectedProvider = { ...provider, url: url.toString() };
        }
        else {
            state$2.selectedProvider = provider;
        }
    },
    setOnrampProviders(providers) {
        if (Array.isArray(providers) && providers.every(item => typeof item === 'string')) {
            const validOnramp = providers;
            const newProviders = ONRAMP_PROVIDERS.filter(provider => validOnramp.includes(provider.name));
            state$2.providers = newProviders;
        }
        else {
            state$2.providers = [];
        }
    },
    setPurchaseCurrency(currency) {
        state$2.purchaseCurrency = currency;
    },
    setPaymentCurrency(currency) {
        state$2.paymentCurrency = currency;
    },
    setPurchaseAmount(amount) {
        OnRampController.state.purchaseAmount = amount;
    },
    setPaymentAmount(amount) {
        OnRampController.state.paymentAmount = amount;
    },
    async getAvailableCurrencies() {
        const options = await BlockchainApiController.getOnrampOptions();
        state$2.purchaseCurrencies = options.purchaseCurrencies;
        state$2.paymentCurrencies = options.paymentCurrencies;
        state$2.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
        state$2.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
        await ApiController.fetchCurrencyImages(options.paymentCurrencies.map(currency => currency.id));
        await ApiController.fetchTokenImages(options.purchaseCurrencies.map(currency => currency.symbol));
    },
    async getQuote() {
        state$2.quotesLoading = true;
        try {
            const quote = await BlockchainApiController.getOnrampQuote({
                purchaseCurrency: state$2.purchaseCurrency,
                paymentCurrency: state$2.paymentCurrency,
                amount: state$2.paymentAmount?.toString() || '0',
                network: state$2.purchaseCurrency?.symbol
            });
            state$2.quotesLoading = false;
            state$2.purchaseAmount = Number(quote?.purchaseAmount.amount);
            return quote;
        }
        catch (error) {
            state$2.error = error.message;
            state$2.quotesLoading = false;
            return null;
        }
        finally {
            state$2.quotesLoading = false;
        }
    },
    resetState() {
        state$2.selectedProvider = null;
        state$2.error = null;
        state$2.purchaseCurrency = USDC_CURRENCY_DEFAULT;
        state$2.paymentCurrency = USD_CURRENCY_DEFAULT;
        state$2.purchaseCurrencies = [USDC_CURRENCY_DEFAULT];
        state$2.paymentCurrencies = [];
        state$2.paymentAmount = undefined;
        state$2.purchaseAmount = undefined;
        state$2.quotesLoading = false;
    }
};
// Export the controller wrapped with our error boundary
const OnRampController = withErrorBoundary(controller$2);

// -- State --------------------------------------------- //
const state$1 = proxy({
    message: '',
    variant: 'info',
    open: false
});
// -- Controller ---------------------------------------- //
const controller$1 = {
    state: state$1,
    subscribeKey(key, callback) {
        return subscribeKey(state$1, key, callback);
    },
    open(message, variant) {
        const { debug } = OptionsController.state;
        const { code, displayMessage, debugMessage } = message;
        if (displayMessage && debug) {
            state$1.message = displayMessage;
            state$1.variant = variant;
            state$1.open = true;
        }
        if (debugMessage) {
            // eslint-disable-next-line no-console
            console.error(typeof debugMessage === 'function' ? debugMessage() : debugMessage, code ? { code } : undefined);
        }
    },
    warn(title, description, code) {
        state$1.open = true;
        state$1.message = title;
        state$1.variant = 'warning';
        if (description) {
            console.warn(description, code);
        }
    },
    close() {
        state$1.open = false;
        state$1.message = '';
        state$1.variant = 'info';
    }
};
// Export the controller wrapped with our error boundary
const AlertController = withErrorBoundary(controller$1);

const SLIP44_MSB = 0x80000000;
const EnsUtil = {
    convertEVMChainIdToCoinType(chainId) {
        if (chainId >= SLIP44_MSB) {
            throw new Error('Invalid chainId');
        }
        return (SLIP44_MSB | chainId) >>> 0;
    }
};

// -- State --------------------------------------------- //
const state = proxy({
    suggestions: [],
    loading: false
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe(callback) {
        return subscribe(state, () => callback(state));
    },
    subscribeKey(key, callback) {
        return subscribeKey(state, key, callback);
    },
    async resolveName(name) {
        try {
            return await BlockchainApiController.lookupEnsName(name);
        }
        catch (e) {
            const error = e;
            throw new Error(error?.reasons?.[0]?.description || 'Error resolving name');
        }
    },
    async isNameRegistered(name) {
        try {
            await BlockchainApiController.lookupEnsName(name);
            return true;
        }
        catch {
            return false;
        }
    },
    async getSuggestions(value) {
        try {
            state.loading = true;
            state.suggestions = [];
            const response = await BlockchainApiController.getEnsNameSuggestions(value);
            state.suggestions = response.suggestions || [];
            return state.suggestions;
        }
        catch (e) {
            const errorMessage = EnsController.parseEnsApiError(e, 'Error fetching name suggestions');
            throw new Error(errorMessage);
        }
        finally {
            state.loading = false;
        }
    },
    async getNamesForAddress(address) {
        try {
            const network = ChainController.state.activeCaipNetwork;
            if (!network) {
                return [];
            }
            const cachedEns = StorageUtil.getEnsFromCacheForAddress(address);
            if (cachedEns) {
                return cachedEns;
            }
            const response = await BlockchainApiController.reverseLookupEnsName({ address });
            StorageUtil.updateEnsCache({
                address,
                ens: response,
                timestamp: Date.now()
            });
            return response;
        }
        catch (e) {
            const errorMessage = EnsController.parseEnsApiError(e, 'Error fetching names for address');
            throw new Error(errorMessage);
        }
    },
    async registerName(name) {
        const network = ChainController.state.activeCaipNetwork;
        const address = ChainController.getAccountData(network?.chainNamespace)?.address;
        const emailConnector = ConnectorController.getAuthConnector();
        if (!network) {
            throw new Error('Network not found');
        }
        if (!address || !emailConnector) {
            throw new Error('Address or auth connector not found');
        }
        state.loading = true;
        try {
            const message = JSON.stringify({
                name,
                attributes: {},
                // Unix timestamp
                timestamp: Math.floor(Date.now() / 1000)
            });
            RouterController.pushTransactionStack({
                onCancel() {
                    RouterController.replace('RegisterAccountName');
                }
            });
            const signature = await ConnectionController.signMessage(message);
            state.loading = false;
            const networkId = network.id;
            if (!networkId) {
                throw new Error('Network not found');
            }
            const coinType = EnsUtil.convertEVMChainIdToCoinType(Number(networkId));
            await BlockchainApiController.registerEnsName({
                coinType,
                address: address,
                signature: signature,
                message
            });
            ChainController.setAccountProp('profileName', name, network.chainNamespace);
            StorageUtil.updateEnsCache({
                address,
                ens: [
                    {
                        name,
                        registered_at: new Date().toISOString(),
                        updated_at: undefined,
                        addresses: {},
                        attributes: []
                    }
                ],
                timestamp: Date.now()
            });
            RouterController.replace('RegisterAccountNameSuccess');
        }
        catch (e) {
            const errorMessage = EnsController.parseEnsApiError(e, `Error registering name ${name}`);
            RouterController.replace('RegisterAccountName');
            throw new Error(errorMessage);
        }
        finally {
            state.loading = false;
        }
    },
    validateName(name) {
        return /^[a-zA-Z0-9-]{4,}$/u.test(name);
    },
    parseEnsApiError(error, defaultError) {
        const ensError = error;
        return ensError?.reasons?.[0]?.description || defaultError;
    }
};
// Export the controller wrapped with our error boundary
const EnsController = withErrorBoundary(controller);

const baseUSDC = {
    asset: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'};
const baseSepoliaUSDC = {
    asset: '0x036CbD53842c5426634e7929541eC2318f3dCF7e'};

var browser$2;
var hasRequiredBrowser$2;

function requireBrowser$2 () {
	if (hasRequiredBrowser$2) return browser$2;
	hasRequiredBrowser$2 = 1;

	const format = requireQuickFormatUnescaped();

	browser$2 = pino;

	const _console = pfGlobalThisOrFallback().console || {};
	const stdSerializers = {
	  mapHttpRequest: mock,
	  mapHttpResponse: mock,
	  wrapRequestSerializer: passthrough,
	  wrapResponseSerializer: passthrough,
	  wrapErrorSerializer: passthrough,
	  req: mock,
	  res: mock,
	  err: asErrValue
	};

	function shouldSerialize (serialize, serializers) {
	  if (Array.isArray(serialize)) {
	    const hasToFilter = serialize.filter(function (k) {
	      return k !== '!stdSerializers.err'
	    });
	    return hasToFilter
	  } else if (serialize === true) {
	    return Object.keys(serializers)
	  }

	  return false
	}

	function pino (opts) {
	  opts = opts || {};
	  opts.browser = opts.browser || {};

	  const transmit = opts.browser.transmit;
	  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

	  const proto = opts.browser.write || _console;
	  if (opts.browser.write) opts.browser.asObject = true;
	  const serializers = opts.serializers || {};
	  const serialize = shouldSerialize(opts.browser.serialize, serializers);
	  let stdErrSerialize = opts.browser.serialize;

	  if (
	    Array.isArray(opts.browser.serialize) &&
	    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
	  ) stdErrSerialize = false;

	  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'];

	  if (typeof proto === 'function') {
	    proto.error = proto.fatal = proto.warn =
	    proto.info = proto.debug = proto.trace = proto;
	  }
	  if (opts.enabled === false) opts.level = 'silent';
	  const level = opts.level || 'info';
	  const logger = Object.create(proto);
	  if (!logger.log) logger.log = noop;

	  Object.defineProperty(logger, 'levelVal', {
	    get: getLevelVal
	  });
	  Object.defineProperty(logger, 'level', {
	    get: getLevel,
	    set: setLevel
	  });

	  const setOpts = {
	    transmit,
	    serialize,
	    asObject: opts.browser.asObject,
	    levels,
	    timestamp: getTimeFunction(opts)
	  };
	  logger.levels = pino.levels;
	  logger.level = level;

	  logger.setMaxListeners = logger.getMaxListeners =
	  logger.emit = logger.addListener = logger.on =
	  logger.prependListener = logger.once =
	  logger.prependOnceListener = logger.removeListener =
	  logger.removeAllListeners = logger.listeners =
	  logger.listenerCount = logger.eventNames =
	  logger.write = logger.flush = noop;
	  logger.serializers = serializers;
	  logger._serialize = serialize;
	  logger._stdErrSerialize = stdErrSerialize;
	  logger.child = child;

	  if (transmit) logger._logEvent = createLogEventShape();

	  function getLevelVal () {
	    return this.level === 'silent'
	      ? Infinity
	      : this.levels.values[this.level]
	  }

	  function getLevel () {
	    return this._level
	  }
	  function setLevel (level) {
	    if (level !== 'silent' && !this.levels.values[level]) {
	      throw Error('unknown level ' + level)
	    }
	    this._level = level;

	    set(setOpts, logger, 'error', 'log'); // <-- must stay first
	    set(setOpts, logger, 'fatal', 'error');
	    set(setOpts, logger, 'warn', 'error');
	    set(setOpts, logger, 'info', 'log');
	    set(setOpts, logger, 'debug', 'log');
	    set(setOpts, logger, 'trace', 'log');
	  }

	  function child (bindings, childOptions) {
	    if (!bindings) {
	      throw new Error('missing bindings for child Pino')
	    }
	    childOptions = childOptions || {};
	    if (serialize && bindings.serializers) {
	      childOptions.serializers = bindings.serializers;
	    }
	    const childOptionsSerializers = childOptions.serializers;
	    if (serialize && childOptionsSerializers) {
	      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
	      var childSerialize = opts.browser.serialize === true
	        ? Object.keys(childSerializers)
	        : serialize;
	      delete bindings.serializers;
	      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
	    }
	    function Child (parent) {
	      this._childLevel = (parent._childLevel | 0) + 1;
	      this.error = bind(parent, bindings, 'error');
	      this.fatal = bind(parent, bindings, 'fatal');
	      this.warn = bind(parent, bindings, 'warn');
	      this.info = bind(parent, bindings, 'info');
	      this.debug = bind(parent, bindings, 'debug');
	      this.trace = bind(parent, bindings, 'trace');
	      if (childSerializers) {
	        this.serializers = childSerializers;
	        this._serialize = childSerialize;
	      }
	      if (transmit) {
	        this._logEvent = createLogEventShape(
	          [].concat(parent._logEvent.bindings, bindings)
	        );
	      }
	    }
	    Child.prototype = this;
	    return new Child(this)
	  }
	  return logger
	}

	pino.levels = {
	  values: {
	    fatal: 60,
	    error: 50,
	    warn: 40,
	    info: 30,
	    debug: 20,
	    trace: 10
	  },
	  labels: {
	    10: 'trace',
	    20: 'debug',
	    30: 'info',
	    40: 'warn',
	    50: 'error',
	    60: 'fatal'
	  }
	};

	pino.stdSerializers = stdSerializers;
	pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });

	function set (opts, logger, level, fallback) {
	  const proto = Object.getPrototypeOf(logger);
	  logger[level] = logger.levelVal > logger.levels.values[level]
	    ? noop
	    : (proto[level] ? proto[level] : (_console[level] || _console[fallback] || noop));

	  wrap(opts, logger, level);
	}

	function wrap (opts, logger, level) {
	  if (!opts.transmit && logger[level] === noop) return

	  logger[level] = (function (write) {
	    return function LOG () {
	      const ts = opts.timestamp();
	      const args = new Array(arguments.length);
	      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this;
	      for (var i = 0; i < args.length; i++) args[i] = arguments[i];

	      if (opts.serialize && !opts.asObject) {
	        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
	      }
	      if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
	      else write.apply(proto, args);

	      if (opts.transmit) {
	        const transmitLevel = opts.transmit.level || logger.level;
	        const transmitValue = pino.levels.values[transmitLevel];
	        const methodValue = pino.levels.values[level];
	        if (methodValue < transmitValue) return
	        transmit(this, {
	          ts,
	          methodLevel: level,
	          methodValue,
	          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
	          send: opts.transmit.send,
	          val: logger.levelVal
	        }, args);
	      }
	    }
	  })(logger[level]);
	}

	function asObject (logger, level, args, ts) {
	  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
	  const argsCloned = args.slice();
	  let msg = argsCloned[0];
	  const o = {};
	  if (ts) {
	    o.time = ts;
	  }
	  o.level = pino.levels.values[level];
	  let lvl = (logger._childLevel | 0) + 1;
	  if (lvl < 1) lvl = 1;
	  // deliberate, catching objects, arrays
	  if (msg !== null && typeof msg === 'object') {
	    while (lvl-- && typeof argsCloned[0] === 'object') {
	      Object.assign(o, argsCloned.shift());
	    }
	    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
	  } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
	  if (msg !== undefined) o.msg = msg;
	  return o
	}

	function applySerializers (args, serialize, serializers, stdErrSerialize) {
	  for (const i in args) {
	    if (stdErrSerialize && args[i] instanceof Error) {
	      args[i] = pino.stdSerializers.err(args[i]);
	    } else if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
	      for (const k in args[i]) {
	        if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
	          args[i][k] = serializers[k](args[i][k]);
	        }
	      }
	    }
	  }
	}

	function bind (parent, bindings, level) {
	  return function () {
	    const args = new Array(1 + arguments.length);
	    args[0] = bindings;
	    for (var i = 1; i < args.length; i++) {
	      args[i] = arguments[i - 1];
	    }
	    return parent[level].apply(this, args)
	  }
	}

	function transmit (logger, opts, args) {
	  const send = opts.send;
	  const ts = opts.ts;
	  const methodLevel = opts.methodLevel;
	  const methodValue = opts.methodValue;
	  const val = opts.val;
	  const bindings = logger._logEvent.bindings;

	  applySerializers(
	    args,
	    logger._serialize || Object.keys(logger.serializers),
	    logger.serializers,
	    logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
	  );
	  logger._logEvent.ts = ts;
	  logger._logEvent.messages = args.filter(function (arg) {
	    // bindings can only be objects, so reference equality check via indexOf is fine
	    return bindings.indexOf(arg) === -1
	  });

	  logger._logEvent.level.label = methodLevel;
	  logger._logEvent.level.value = methodValue;

	  send(methodLevel, logger._logEvent, val);

	  logger._logEvent = createLogEventShape(bindings);
	}

	function createLogEventShape (bindings) {
	  return {
	    ts: 0,
	    messages: [],
	    bindings: bindings || [],
	    level: { label: '', value: 0 }
	  }
	}

	function asErrValue (err) {
	  const obj = {
	    type: err.constructor.name,
	    msg: err.message,
	    stack: err.stack
	  };
	  for (const key in err) {
	    if (obj[key] === undefined) {
	      obj[key] = err[key];
	    }
	  }
	  return obj
	}

	function getTimeFunction (opts) {
	  if (typeof opts.timestamp === 'function') {
	    return opts.timestamp
	  }
	  if (opts.timestamp === false) {
	    return nullTime
	  }
	  return epochTime
	}

	function mock () { return {} }
	function passthrough (a) { return a }
	function noop () {}

	function nullTime () { return false }
	function epochTime () { return Date.now() }
	function unixTime () { return Math.round(Date.now() / 1000.0) }
	function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

	/* eslint-disable */
	/* istanbul ignore next */
	function pfGlobalThisOrFallback () {
	  function defd (o) { return typeof o !== 'undefined' && o }
	  try {
	    if (typeof globalThis !== 'undefined') return globalThis
	    Object.defineProperty(Object.prototype, 'globalThis', {
	      get: function () {
	        delete Object.prototype.globalThis;
	        return (this.globalThis = this)
	      },
	      configurable: true
	    });
	    return globalThis
	  } catch (e) {
	    return defd(self) || defd(window) || defd(this) || {}
	  }
	}
	/* eslint-enable */
	return browser$2;
}

requireBrowser$2();

/**
 * SIWXUtil holds the methods to interact with the SIWX plugin and must be called internally on AppKit.
 */
let addEmbeddedWalletSessionPromise = null;
const SIWXUtil = {
    getSIWX() {
        return OptionsController.state.siwx;
    },
    async initializeIfEnabled(caipAddress = ChainController.getActiveCaipAddress()) {
        const siwx = OptionsController.state.siwx;
        if (!(siwx && caipAddress)) {
            return;
        }
        const [namespace, chainId, address] = caipAddress.split(':');
        if (!ChainController.checkIfSupportedNetwork(namespace, `${namespace}:${chainId}`)) {
            return;
        }
        try {
            if (OptionsController.state.remoteFeatures?.emailCapture) {
                const user = ChainController.getAccountData(namespace)?.user;
                await ModalController.open({
                    view: 'DataCapture',
                    data: {
                        email: user?.email ?? undefined
                    }
                });
                return;
            }
            if (addEmbeddedWalletSessionPromise) {
                await addEmbeddedWalletSessionPromise;
            }
            const sessions = await siwx.getSessions(`${namespace}:${chainId}`, address);
            if (sessions.length) {
                return;
            }
            await ModalController.open({
                view: 'SIWXSignMessage'
            });
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.error('SIWXUtil:initializeIfEnabled', error);
            EventsController.sendEvent({
                type: 'track',
                event: 'SIWX_AUTH_ERROR',
                properties: this.getSIWXEventProperties(error)
            });
            // eslint-disable-next-line no-console
            await ConnectionController._getClient()?.disconnect().catch(console.error);
            RouterController.reset('Connect');
            SnackController.showError('A problem occurred while trying initialize authentication');
        }
    },
    async requestSignMessage() {
        const siwx = OptionsController.state.siwx;
        const address = CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress());
        const network = getActiveCaipNetwork();
        const client = ConnectionController._getClient();
        if (!siwx) {
            throw new Error('SIWX is not enabled');
        }
        if (!address) {
            throw new Error('No ActiveCaipAddress found');
        }
        if (!network) {
            throw new Error('No ActiveCaipNetwork or client found');
        }
        if (!client) {
            throw new Error('No ConnectionController client found');
        }
        try {
            const siwxMessage = await siwx.createMessage({
                chainId: network.caipNetworkId,
                accountAddress: address
            });
            const message = siwxMessage.toString();
            const connectorId = ConnectorController.getConnectorId(network.chainNamespace);
            if (connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH) {
                RouterController.pushTransactionStack({});
            }
            const signature = await client.signMessage(message);
            await siwx.addSession({
                data: siwxMessage,
                message,
                signature
            });
            ChainController.setLastConnectedSIWECaipNetwork(network);
            ModalController.close();
            EventsController.sendEvent({
                type: 'track',
                event: 'SIWX_AUTH_SUCCESS',
                properties: this.getSIWXEventProperties()
            });
        }
        catch (error) {
            if (!ModalController.state.open || RouterController.state.view === 'ApproveTransaction') {
                await ModalController.open({
                    view: 'SIWXSignMessage'
                });
            }
            SnackController.showError('Error signing message');
            EventsController.sendEvent({
                type: 'track',
                event: 'SIWX_AUTH_ERROR',
                properties: this.getSIWXEventProperties(error)
            });
            // eslint-disable-next-line no-console
            console.error('SWIXUtil:requestSignMessage', error);
        }
    },
    async cancelSignMessage() {
        try {
            const siwx = this.getSIWX();
            const isRequired = siwx?.getRequired?.();
            if (isRequired) {
                const lastNetwork = ChainController.getLastConnectedSIWECaipNetwork();
                if (lastNetwork) {
                    const sessions = await siwx?.getSessions(lastNetwork?.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || '');
                    if (sessions && sessions.length > 0) {
                        await ChainController.switchActiveNetwork(lastNetwork);
                    }
                    else {
                        await ConnectionController.disconnect();
                    }
                }
                else {
                    await ConnectionController.disconnect();
                }
            }
            else {
                ModalController.close();
            }
            ModalController.close();
            EventsController.sendEvent({
                event: 'CLICK_CANCEL_SIWX',
                type: 'track',
                properties: this.getSIWXEventProperties()
            });
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.error('SIWXUtil:cancelSignMessage', error);
        }
    },
    async getAllSessions() {
        const siwx = this.getSIWX();
        const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
        const sessions = [];
        await Promise.all(allRequestedCaipNetworks.map(async (caipNetwork) => {
            const session = await siwx?.getSessions(caipNetwork.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || '');
            if (session) {
                sessions.push(...session);
            }
        }));
        return sessions;
    },
    async getSessions(args) {
        const siwx = OptionsController.state.siwx;
        let address = args?.address;
        if (!address) {
            const activeCaipAddress = ChainController.getActiveCaipAddress();
            address = CoreHelperUtil.getPlainAddress(activeCaipAddress);
        }
        let network = args?.caipNetworkId;
        if (!network) {
            const activeCaipNetwork = ChainController.getActiveCaipNetwork();
            network = activeCaipNetwork?.caipNetworkId;
        }
        if (!(siwx && address && network)) {
            return [];
        }
        return siwx.getSessions(network, address);
    },
    async isSIWXCloseDisabled() {
        const siwx = this.getSIWX();
        if (siwx) {
            const isApproveSignScreen = RouterController.state.view === 'ApproveTransaction';
            const isSiwxSignMessage = RouterController.state.view === 'SIWXSignMessage';
            if (isApproveSignScreen || isSiwxSignMessage) {
                return siwx.getRequired?.() && (await this.getSessions()).length === 0;
            }
        }
        return false;
    },
    async authConnectorAuthenticate({ authConnector, chainId, socialUri, preferredAccountType, chainNamespace }) {
        const siwx = SIWXUtil.getSIWX();
        const network = getActiveCaipNetwork();
        if (!siwx ||
            !chainNamespace.includes(ConstantsUtil$3.CHAIN.EVM) ||
            // Request to input email and sign message when email capture is enabled
            OptionsController.state.remoteFeatures?.emailCapture) {
            const result = await authConnector.connect({
                chainId,
                socialUri,
                preferredAccountType
            });
            return {
                address: result.address,
                chainId: result.chainId,
                accounts: result.accounts
            };
        }
        const caipNetwork = `${chainNamespace}:${chainId}`;
        const siwxMessage = await siwx.createMessage({
            chainId: caipNetwork,
            accountAddress: '<<AccountAddress>>'
        });
        // Extract only the serializable data properties for postMessage, toString() is not possible to include in the postMessage
        const siwxMessageData = {
            accountAddress: siwxMessage.accountAddress,
            chainId: siwxMessage.chainId,
            domain: siwxMessage.domain,
            uri: siwxMessage.uri,
            version: siwxMessage.version,
            nonce: siwxMessage.nonce,
            notBefore: siwxMessage.notBefore,
            statement: siwxMessage.statement,
            resources: siwxMessage.resources,
            requestId: siwxMessage.requestId,
            issuedAt: siwxMessage.issuedAt,
            expirationTime: siwxMessage.expirationTime,
            serializedMessage: siwxMessage.toString()
        };
        const result = await authConnector.connect({
            chainId,
            socialUri,
            siwxMessage: siwxMessageData,
            preferredAccountType
        });
        siwxMessageData.accountAddress = result.address;
        siwxMessageData.serializedMessage = result.message || '';
        if (result.signature && result.message) {
            const promise = SIWXUtil.addEmbeddedWalletSession(siwxMessageData, result.message, result.signature);
            await promise;
        }
        ChainController.setLastConnectedSIWECaipNetwork(network);
        return {
            address: result.address,
            chainId: result.chainId,
            accounts: result.accounts
        };
    },
    async addEmbeddedWalletSession(siwxMessageData, message, signature) {
        if (addEmbeddedWalletSessionPromise) {
            return addEmbeddedWalletSessionPromise;
        }
        const siwx = SIWXUtil.getSIWX();
        if (!siwx) {
            return Promise.resolve();
        }
        addEmbeddedWalletSessionPromise = siwx
            .addSession({
            data: siwxMessageData,
            message,
            signature
        })
            .finally(() => {
            addEmbeddedWalletSessionPromise = null;
        });
        return addEmbeddedWalletSessionPromise;
    },
    async universalProviderAuthenticate({ universalProvider, chains, methods }) {
        const siwx = SIWXUtil.getSIWX();
        const network = getActiveCaipNetwork();
        const namespaces = new Set(chains.map(chain => chain.split(':')[0]));
        if (!siwx || namespaces.size !== 1 || !namespaces.has('eip155')) {
            return false;
        }
        // Ignores chainId and account address to get other message data
        const siwxMessage = await siwx.createMessage({
            chainId: getActiveCaipNetwork()?.caipNetworkId || '',
            accountAddress: ''
        });
        const result = await universalProvider.authenticate({
            nonce: siwxMessage.nonce,
            domain: siwxMessage.domain,
            uri: siwxMessage.uri,
            exp: siwxMessage.expirationTime,
            iat: siwxMessage.issuedAt,
            nbf: siwxMessage.notBefore,
            requestId: siwxMessage.requestId,
            version: siwxMessage.version,
            resources: siwxMessage.resources,
            statement: siwxMessage.statement,
            chainId: siwxMessage.chainId,
            methods,
            // The first chainId is what is used for universal provider to build the message
            chains: [siwxMessage.chainId, ...chains.filter(chain => chain !== siwxMessage.chainId)]
        });
        SnackController.showLoading('Authenticating...', { autoClose: false });
        const walletInfo = {
            ...result.session.peer.metadata,
            name: result.session.peer.metadata.name,
            icon: result.session.peer.metadata.icons?.[0],
            type: 'WALLET_CONNECT'
        };
        ChainController.setAccountProp('connectedWalletInfo', walletInfo, Array.from(namespaces)[0]);
        if (result?.auths?.length) {
            const sessions = result.auths.map(cacao => {
                const message = universalProvider.client.formatAuthMessage({
                    request: cacao.p,
                    iss: cacao.p.iss
                });
                return {
                    data: {
                        ...cacao.p,
                        accountAddress: cacao.p.iss.split(':').slice(-1).join(''),
                        chainId: cacao.p.iss.split(':').slice(2, 4).join(':'),
                        uri: cacao.p.aud,
                        version: cacao.p.version || siwxMessage.version,
                        expirationTime: cacao.p.exp,
                        issuedAt: cacao.p.iat,
                        notBefore: cacao.p.nbf
                    },
                    message,
                    signature: cacao.s.s,
                    cacao
                };
            });
            try {
                await siwx.setSessions(sessions);
                if (network) {
                    ChainController.setLastConnectedSIWECaipNetwork(network);
                }
                EventsController.sendEvent({
                    type: 'track',
                    event: 'SIWX_AUTH_SUCCESS',
                    properties: SIWXUtil.getSIWXEventProperties()
                });
            }
            catch (error) {
                // eslint-disable-next-line no-console
                console.error('SIWX:universalProviderAuth - failed to set sessions', error);
                EventsController.sendEvent({
                    type: 'track',
                    event: 'SIWX_AUTH_ERROR',
                    properties: SIWXUtil.getSIWXEventProperties(error)
                });
                // eslint-disable-next-line no-console
                await universalProvider.disconnect().catch(console.error);
                throw error;
            }
            finally {
                SnackController.hide();
            }
        }
        return true;
    },
    getSIWXEventProperties(error) {
        const namespace = ChainController.state.activeChain;
        if (!namespace) {
            throw new Error('SIWXUtil:getSIWXEventProperties - namespace is required');
        }
        return {
            network: ChainController.state.activeCaipNetwork?.caipNetworkId || '',
            isSmartAccount: getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
            message: error ? CoreHelperUtil.parseError(error) : undefined
        };
    },
    async clearSessions() {
        const siwx = this.getSIWX();
        if (siwx) {
            await siwx.setSessions([]);
        }
    }
};

var browser$1;
var hasRequiredBrowser$1;

function requireBrowser$1 () {
	if (hasRequiredBrowser$1) return browser$1;
	hasRequiredBrowser$1 = 1;

	const format = requireQuickFormatUnescaped();

	browser$1 = pino;

	const _console = pfGlobalThisOrFallback().console || {};
	const stdSerializers = {
	  mapHttpRequest: mock,
	  mapHttpResponse: mock,
	  wrapRequestSerializer: passthrough,
	  wrapResponseSerializer: passthrough,
	  wrapErrorSerializer: passthrough,
	  req: mock,
	  res: mock,
	  err: asErrValue
	};

	function shouldSerialize (serialize, serializers) {
	  if (Array.isArray(serialize)) {
	    const hasToFilter = serialize.filter(function (k) {
	      return k !== '!stdSerializers.err'
	    });
	    return hasToFilter
	  } else if (serialize === true) {
	    return Object.keys(serializers)
	  }

	  return false
	}

	function pino (opts) {
	  opts = opts || {};
	  opts.browser = opts.browser || {};

	  const transmit = opts.browser.transmit;
	  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

	  const proto = opts.browser.write || _console;
	  if (opts.browser.write) opts.browser.asObject = true;
	  const serializers = opts.serializers || {};
	  const serialize = shouldSerialize(opts.browser.serialize, serializers);
	  let stdErrSerialize = opts.browser.serialize;

	  if (
	    Array.isArray(opts.browser.serialize) &&
	    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
	  ) stdErrSerialize = false;

	  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'];

	  if (typeof proto === 'function') {
	    proto.error = proto.fatal = proto.warn =
	    proto.info = proto.debug = proto.trace = proto;
	  }
	  if (opts.enabled === false) opts.level = 'silent';
	  const level = opts.level || 'info';
	  const logger = Object.create(proto);
	  if (!logger.log) logger.log = noop;

	  Object.defineProperty(logger, 'levelVal', {
	    get: getLevelVal
	  });
	  Object.defineProperty(logger, 'level', {
	    get: getLevel,
	    set: setLevel
	  });

	  const setOpts = {
	    transmit,
	    serialize,
	    asObject: opts.browser.asObject,
	    levels,
	    timestamp: getTimeFunction(opts)
	  };
	  logger.levels = pino.levels;
	  logger.level = level;

	  logger.setMaxListeners = logger.getMaxListeners =
	  logger.emit = logger.addListener = logger.on =
	  logger.prependListener = logger.once =
	  logger.prependOnceListener = logger.removeListener =
	  logger.removeAllListeners = logger.listeners =
	  logger.listenerCount = logger.eventNames =
	  logger.write = logger.flush = noop;
	  logger.serializers = serializers;
	  logger._serialize = serialize;
	  logger._stdErrSerialize = stdErrSerialize;
	  logger.child = child;

	  if (transmit) logger._logEvent = createLogEventShape();

	  function getLevelVal () {
	    return this.level === 'silent'
	      ? Infinity
	      : this.levels.values[this.level]
	  }

	  function getLevel () {
	    return this._level
	  }
	  function setLevel (level) {
	    if (level !== 'silent' && !this.levels.values[level]) {
	      throw Error('unknown level ' + level)
	    }
	    this._level = level;

	    set(setOpts, logger, 'error', 'log'); // <-- must stay first
	    set(setOpts, logger, 'fatal', 'error');
	    set(setOpts, logger, 'warn', 'error');
	    set(setOpts, logger, 'info', 'log');
	    set(setOpts, logger, 'debug', 'log');
	    set(setOpts, logger, 'trace', 'log');
	  }

	  function child (bindings, childOptions) {
	    if (!bindings) {
	      throw new Error('missing bindings for child Pino')
	    }
	    childOptions = childOptions || {};
	    if (serialize && bindings.serializers) {
	      childOptions.serializers = bindings.serializers;
	    }
	    const childOptionsSerializers = childOptions.serializers;
	    if (serialize && childOptionsSerializers) {
	      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
	      var childSerialize = opts.browser.serialize === true
	        ? Object.keys(childSerializers)
	        : serialize;
	      delete bindings.serializers;
	      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
	    }
	    function Child (parent) {
	      this._childLevel = (parent._childLevel | 0) + 1;
	      this.error = bind(parent, bindings, 'error');
	      this.fatal = bind(parent, bindings, 'fatal');
	      this.warn = bind(parent, bindings, 'warn');
	      this.info = bind(parent, bindings, 'info');
	      this.debug = bind(parent, bindings, 'debug');
	      this.trace = bind(parent, bindings, 'trace');
	      if (childSerializers) {
	        this.serializers = childSerializers;
	        this._serialize = childSerialize;
	      }
	      if (transmit) {
	        this._logEvent = createLogEventShape(
	          [].concat(parent._logEvent.bindings, bindings)
	        );
	      }
	    }
	    Child.prototype = this;
	    return new Child(this)
	  }
	  return logger
	}

	pino.levels = {
	  values: {
	    fatal: 60,
	    error: 50,
	    warn: 40,
	    info: 30,
	    debug: 20,
	    trace: 10
	  },
	  labels: {
	    10: 'trace',
	    20: 'debug',
	    30: 'info',
	    40: 'warn',
	    50: 'error',
	    60: 'fatal'
	  }
	};

	pino.stdSerializers = stdSerializers;
	pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });

	function set (opts, logger, level, fallback) {
	  const proto = Object.getPrototypeOf(logger);
	  logger[level] = logger.levelVal > logger.levels.values[level]
	    ? noop
	    : (proto[level] ? proto[level] : (_console[level] || _console[fallback] || noop));

	  wrap(opts, logger, level);
	}

	function wrap (opts, logger, level) {
	  if (!opts.transmit && logger[level] === noop) return

	  logger[level] = (function (write) {
	    return function LOG () {
	      const ts = opts.timestamp();
	      const args = new Array(arguments.length);
	      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this;
	      for (var i = 0; i < args.length; i++) args[i] = arguments[i];

	      if (opts.serialize && !opts.asObject) {
	        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
	      }
	      if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
	      else write.apply(proto, args);

	      if (opts.transmit) {
	        const transmitLevel = opts.transmit.level || logger.level;
	        const transmitValue = pino.levels.values[transmitLevel];
	        const methodValue = pino.levels.values[level];
	        if (methodValue < transmitValue) return
	        transmit(this, {
	          ts,
	          methodLevel: level,
	          methodValue,
	          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
	          send: opts.transmit.send,
	          val: logger.levelVal
	        }, args);
	      }
	    }
	  })(logger[level]);
	}

	function asObject (logger, level, args, ts) {
	  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
	  const argsCloned = args.slice();
	  let msg = argsCloned[0];
	  const o = {};
	  if (ts) {
	    o.time = ts;
	  }
	  o.level = pino.levels.values[level];
	  let lvl = (logger._childLevel | 0) + 1;
	  if (lvl < 1) lvl = 1;
	  // deliberate, catching objects, arrays
	  if (msg !== null && typeof msg === 'object') {
	    while (lvl-- && typeof argsCloned[0] === 'object') {
	      Object.assign(o, argsCloned.shift());
	    }
	    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
	  } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
	  if (msg !== undefined) o.msg = msg;
	  return o
	}

	function applySerializers (args, serialize, serializers, stdErrSerialize) {
	  for (const i in args) {
	    if (stdErrSerialize && args[i] instanceof Error) {
	      args[i] = pino.stdSerializers.err(args[i]);
	    } else if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
	      for (const k in args[i]) {
	        if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
	          args[i][k] = serializers[k](args[i][k]);
	        }
	      }
	    }
	  }
	}

	function bind (parent, bindings, level) {
	  return function () {
	    const args = new Array(1 + arguments.length);
	    args[0] = bindings;
	    for (var i = 1; i < args.length; i++) {
	      args[i] = arguments[i - 1];
	    }
	    return parent[level].apply(this, args)
	  }
	}

	function transmit (logger, opts, args) {
	  const send = opts.send;
	  const ts = opts.ts;
	  const methodLevel = opts.methodLevel;
	  const methodValue = opts.methodValue;
	  const val = opts.val;
	  const bindings = logger._logEvent.bindings;

	  applySerializers(
	    args,
	    logger._serialize || Object.keys(logger.serializers),
	    logger.serializers,
	    logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
	  );
	  logger._logEvent.ts = ts;
	  logger._logEvent.messages = args.filter(function (arg) {
	    // bindings can only be objects, so reference equality check via indexOf is fine
	    return bindings.indexOf(arg) === -1
	  });

	  logger._logEvent.level.label = methodLevel;
	  logger._logEvent.level.value = methodValue;

	  send(methodLevel, logger._logEvent, val);

	  logger._logEvent = createLogEventShape(bindings);
	}

	function createLogEventShape (bindings) {
	  return {
	    ts: 0,
	    messages: [],
	    bindings: bindings || [],
	    level: { label: '', value: 0 }
	  }
	}

	function asErrValue (err) {
	  const obj = {
	    type: err.constructor.name,
	    msg: err.message,
	    stack: err.stack
	  };
	  for (const key in err) {
	    if (obj[key] === undefined) {
	      obj[key] = err[key];
	    }
	  }
	  return obj
	}

	function getTimeFunction (opts) {
	  if (typeof opts.timestamp === 'function') {
	    return opts.timestamp
	  }
	  if (opts.timestamp === false) {
	    return nullTime
	  }
	  return epochTime
	}

	function mock () { return {} }
	function passthrough (a) { return a }
	function noop () {}

	function nullTime () { return false }
	function epochTime () { return Date.now() }
	function unixTime () { return Math.round(Date.now() / 1000.0) }
	function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

	/* eslint-disable */
	/* istanbul ignore next */
	function pfGlobalThisOrFallback () {
	  function defd (o) { return typeof o !== 'undefined' && o }
	  try {
	    if (typeof globalThis !== 'undefined') return globalThis
	    Object.defineProperty(Object.prototype, 'globalThis', {
	      get: function () {
	        delete Object.prototype.globalThis;
	        return (this.globalThis = this)
	      },
	      configurable: true
	    });
	    return globalThis
	  } catch (e) {
	    return defd(self) || defd(window) || defd(this) || {}
	  }
	}
	/* eslint-enable */
	return browser$1;
}

var browserExports$1 = requireBrowser$1();
const Ne$1 = /*@__PURE__*/getDefaultExportFromCjs(browserExports$1);

const c$6={level:"info"},n$3="custom_context",l$3=1e3*1024;let O$3 = class O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null;}get value(){return this.nodeValue}get size(){return this.sizeInBytes}};let d$6 = class d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0;}append(e){const t=new O$3(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size;}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size;}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return {next:()=>{if(!e)return {done:true,value:null};const t=e.value;return e=e.next,{done:false,value:t}}}}};let L$3 = class L{constructor(e,t=l$3){this.level=e??"error",this.levelValue=browserExports$1.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new d$6(this.MAX_LOG_SIZE_IN_BYTES);}forwardToConsole(e,t){t===browserExports$1.levels.values.error?console.error(e):t===browserExports$1.levels.values.warn?console.warn(e):t===browserExports$1.levels.values.debug?console.debug(e):t===browserExports$1.levels.values.trace?console.trace(e):console.log(e);}appendToLogs(e){this.logs.append(safeJsonStringify({timestamp:new Date().toISOString(),log:e}));const t=typeof e=="string"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t);}getLogs(){return this.logs}clearLogs(){this.logs=new d$6(this.MAX_LOG_SIZE_IN_BYTES);}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push(safeJsonStringify({extraMetadata:e})),new Blob(t,{type:"application/json"})}};let m$4 = class m{constructor(e,t=l$3){this.baseChunkLogger=new L$3(e,t);}write(e){this.baseChunkLogger.appendToLogs(e);}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs();}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t);}};let B$4 = class B{constructor(e,t=l$3){this.baseChunkLogger=new L$3(e,t);}write(e){this.baseChunkLogger.appendToLogs(e);}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs();}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}};var x$4=Object.defineProperty,S$6=Object.defineProperties,_$3=Object.getOwnPropertyDescriptors,p$4=Object.getOwnPropertySymbols,T$3=Object.prototype.hasOwnProperty,z$5=Object.prototype.propertyIsEnumerable,f$6=(r,e,t)=>e in r?x$4(r,e,{enumerable:true,configurable:true,writable:true,value:t}):r[e]=t,i$6=(r,e)=>{for(var t in e||(e={}))T$3.call(e,t)&&f$6(r,t,e[t]);if(p$4)for(var t of p$4(e))z$5.call(e,t)&&f$6(r,t,e[t]);return r},g$4=(r,e)=>S$6(r,_$3(e));function k$3(r){return g$4(i$6({},r),{level:r?.level||c$6.level})}function v$4(r,e=n$3){return r[e]||""}function b$4(r,e,t=n$3){return r[t]=e,r}function y$4(r,e=n$3){let t="";return typeof r.bindings>"u"?t=v$4(r,e):t=r.bindings().context||"",t}function w$2(r,e,t=n$3){const o=y$4(r,t);return o.trim()?`${o}/${e}`:e}function E$2(r,e,t=n$3){const o=w$2(r,e,t),a=r.child({context:o});return b$4(a,o,t)}function C$4(r){var e,t;const o=new m$4((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return {logger:Ne$1(g$4(i$6({},r.opts),{level:"trace",browser:g$4(i$6({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I$3(r){var e;const t=new B$4((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return {logger:Ne$1(g$4(i$6({},r.opts),{level:"trace"}),t),chunkLoggerController:t}}function A$4(r){return typeof r.loggerOverride<"u"&&typeof r.loggerOverride!="string"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<"u"?C$4(r):I$3(r)}

var a$2=Object.defineProperty,u$2=(e,s,r)=>s in e?a$2(e,s,{enumerable:true,configurable:true,writable:true,value:r}):e[s]=r,c$5=(e,s,r)=>u$2(e,typeof s!="symbol"?s+"":s,r);let h$3 = class h extends IEvents{constructor(s){super(),this.opts=s,c$5(this,"protocol","wc"),c$5(this,"version",2);}};var p$3=Object.defineProperty,b$3=(e,s,r)=>s in e?p$3(e,s,{enumerable:true,configurable:true,writable:true,value:r}):e[s]=r,v$3=(e,s,r)=>b$3(e,s+"",r);let I$2 = class I extends IEvents{constructor(s,r){super(),this.core=s,this.logger=r,v$3(this,"records",new Map);}};let y$3 = class y{constructor(s,r){this.logger=s,this.core=r;}};let m$3 = class m extends IEvents{constructor(s,r){super(),this.relayer=s,this.logger=r;}};let d$5 = class d extends IEvents{constructor(s){super();}};let f$5 = class f{constructor(s,r,t,q){this.core=s,this.logger=r,this.name=t;}};let P$3 = class P extends IEvents{constructor(s,r){super(),this.relayer=s,this.logger=r;}};let S$5 = class S extends IEvents{constructor(s,r){super(),this.core=s,this.logger=r;}};let M$4 = class M{constructor(s,r,t){this.core=s,this.logger=r,this.store=t;}};let O$2 = class O{constructor(s,r){this.projectId=s,this.logger=r;}};let R$3 = class R{constructor(s,r,t){this.core=s,this.logger=r,this.telemetryEnabled=t;}};var T$2=Object.defineProperty,k$2=(e,s,r)=>s in e?T$2(e,s,{enumerable:true,configurable:true,writable:true,value:r}):e[s]=r,i$5=(e,s,r)=>k$2(e,typeof s!="symbol"?s+"":s,r);let J$3 = class J{constructor(s){this.opts=s,i$5(this,"protocol","wc"),i$5(this,"version",2);}};let V$2 = class V{constructor(s){this.client=s;}};

function isHex(value, { strict = true } = {}) {
    if (!value)
        return false;
    if (typeof value !== 'string')
        return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
}

/**
 * @description Retrieves the size of the value (in bytes).
 *
 * @param value The value (hex or byte array) to retrieve the size of.
 * @returns The size of the value (in bytes).
 */
function size(value) {
    if (isHex(value, { strict: false }))
        return Math.ceil((value.length - 2) / 2);
    return value.length;
}

const version = '2.36.0';

let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = '', docsSlug, }) => docsPath
        ? `${docsBaseUrl ?? 'https://viem.sh'}${docsPath}${docsSlug ? `#${docsSlug}` : ''}`
        : undefined,
    version: `viem@${version}`,
};
class BaseError extends Error {
    constructor(shortMessage, args = {}) {
        const details = (() => {
            if (args.cause instanceof BaseError)
                return args.cause.details;
            if (args.cause?.message)
                return args.cause.message;
            return args.details;
        })();
        const docsPath = (() => {
            if (args.cause instanceof BaseError)
                return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...(args.metaMessages ? [...args.metaMessages, ''] : []),
            ...(docsUrl ? [`Docs: ${docsUrl}`] : []),
            ...(details ? [`Details: ${details}`] : []),
            ...(errorConfig.version ? [`Version: ${errorConfig.version}`] : []),
        ].join('\n');
        super(message, args.cause ? { cause: args.cause } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err &&
        typeof err === 'object' &&
        'cause' in err &&
        err.cause !== undefined)
        return walk(err.cause, fn);
    return fn ? null : err;
}

class SizeExceedsPaddingSizeError extends BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, { name: 'SizeExceedsPaddingSizeError' });
    }
}

function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string')
        return padHex(hexOrBytes, { dir, size });
    return padBytes(hexOrBytes, { dir, size });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null)
        return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2)
        throw new SizeExceedsPaddingSizeError({
            size: Math.ceil(hex.length / 2),
            targetSize: size,
            type: 'hex',
        });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null)
        return bytes;
    if (bytes.length > size)
        throw new SizeExceedsPaddingSizeError({
            size: bytes.length,
            targetSize: size,
            type: 'bytes',
        });
    const paddedBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] =
            bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}

class IntegerOutOfRangeError extends BaseError {
    constructor({ max, min, signed, size, value, }) {
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: 'IntegerOutOfRangeError' });
    }
}
class SizeOverflowError extends BaseError {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: 'SizeOverflowError' });
    }
}

function assertSize(hexOrBytes, { size: size$1 }) {
    if (size(hexOrBytes) > size$1)
        throw new SizeOverflowError({
            givenSize: size(hexOrBytes),
            maxSize: size$1,
        });
}
/**
 * Decodes a hex value into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextobigint
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x1a4', { signed: true })
 * // 420n
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420n
 */
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size)
        assertSize(hex, { size: opts.size });
    const value = BigInt(hex);
    if (!signed)
        return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << (BigInt(size) * 8n - 1n)) - 1n;
    if (value <= max)
        return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
/**
 * Decodes a hex string into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextonumber
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToNumber('0x1a4')
 * // 420
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420
 */
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}

const hexes$1 = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, '0'));
/**
 * Encodes a string, number, bigint, or ByteArray into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex
 * - Example: https://viem.sh/docs/utilities/toHex#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world')
 * // '0x48656c6c6f20776f726c6421'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex(420)
 * // '0x1a4'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world', { size: 32 })
 * // '0x48656c6c6f20776f726c64210000000000000000000000000000000000000000'
 */
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean')
        return boolToHex(value, opts);
    return bytesToHex$1(value, opts);
}
/**
 * Encodes a boolean into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#booltohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true)
 * // '0x1'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(false)
 * // '0x0'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true, { size: 32 })
 * // '0x0000000000000000000000000000000000000000000000000000000000000001'
 */
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        assertSize(hex, { size: opts.size });
        return pad(hex, { size: opts.size });
    }
    return hex;
}
/**
 * Encodes a bytes array into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#bytestohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]), { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function bytesToHex$1(value, opts = {}) {
    let string = '';
    for (let i = 0; i < value.length; i++) {
        string += hexes$1[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        assertSize(hex, { size: opts.size });
        return pad(hex, { dir: 'right', size: opts.size });
    }
    return hex;
}
/**
 * Encodes a number or bigint into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#numbertohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420)
 * // '0x1a4'
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420, { size: 32 })
 * // '0x00000000000000000000000000000000000000000000000000000000000001a4'
 */
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed)
            maxValue = (1n << (BigInt(size) * 8n - 1n)) - 1n;
        else
            maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    }
    else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if ((maxValue && value > maxValue) || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`,
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size)
        return pad(hex, { size });
    return hex;
}
const encoder$1 = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#stringtohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function stringToHex(value_, opts = {}) {
    const value = encoder$1.encode(value_);
    return bytesToHex$1(value, opts);
}

const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string, hex value, bigint, number or boolean to a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes
 * - Example: https://viem.sh/docs/utilities/toBytes#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes('Hello world')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function toBytes$1(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToBytes(value, opts);
    if (typeof value === 'boolean')
        return boolToBytes(value, opts);
    if (isHex(value))
        return hexToBytes$1(value, opts);
    return stringToBytes(value, opts);
}
/**
 * Encodes a boolean into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#booltobytes
 *
 * @param value Boolean value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true)
 * // Uint8Array([1])
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true, { size: 32 })
 * // Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 */
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        assertSize(bytes, { size: opts.size });
        return pad(bytes, { size: opts.size });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/**
 * Encodes a hex string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#hextobytes
 *
 * @param hex Hex string to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function hexToBytes$1(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, { size: opts.size });
        hex = pad(hex, { dir: 'right', size: opts.size });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#numbertobytes
 *
 * @param value Number to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function numberToBytes(value, opts) {
    const hex = numberToHex(value, opts);
    return hexToBytes$1(hex);
}
/**
 * Encodes a UTF-8 string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#stringtobytes
 *
 * @param value String to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        assertSize(bytes, { size: opts.size });
        return pad(bytes, { dir: 'right', size: opts.size });
    }
    return bytes;
}

/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for (let i = 0; i < len; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));

const crypto$1 = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
/** Asserts something is positive integer. */
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error('positive integer expected, got ' + n);
}
/** Asserts something is Uint8Array. */
function abytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function')
        throw new Error('Hash should be wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
/** Cast u8 / u16 / u32 to u32. */
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
/** Zeroize a byte array. Warning: JS provides no guarantees. */
function clean(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
        arrays[i].fill(0);
    }
}
/** Create DataView of an array for easy byte-level manipulation. */
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr(word, shift) {
    return (word << (32 - shift)) | (word >>> shift);
}
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
const isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44)();
/** The byte swap operation for uint32 */
function byteSwap(word) {
    return (((word << 24) & 0xff000000) |
        ((word << 8) & 0xff0000) |
        ((word >>> 8) & 0xff00) |
        ((word >>> 24) & 0xff));
}
/** In place byte swap for Uint32Array */
function byteSwap32(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE
    ? (u) => u
    : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (() => 
// @ts-ignore
typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string. Uses built-in function, when available.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin)
        return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
        return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F)
        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f)
        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array. Uses built-in function, when available.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin)
        return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
/**
 * Converts string to bytes using UTF8 encoding.
 * @example utf8ToBytes('abc') // Uint8Array.from([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    abytes(data);
    return data;
}
/** Copies several Uint8Arrays into one. */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
/** For runtime check if class implements interface */
class Hash {
}
/** Wraps hash function, creating an interface on top of it */
function createHasher(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes(bytesLength = 32) {
    if (crypto$1 && typeof crypto$1.getRandomValues === 'function') {
        return crypto$1.getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (crypto$1 && typeof crypto$1.randomBytes === 'function') {
        return Uint8Array.from(crypto$1.randomBytes(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
}

/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */
// No __PURE__ annotations in sha3 header:
// EVERYTHING is in fact used on every export.
// Various per round constants calculations
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(0x71);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    // Pi
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((((round + 1) * (round + 2)) / 2) % 64);
    // Iota
    let t = _0n;
    for (let j = 0; j < 7; j++) {
        R = ((R << _1n) ^ ((R >> _7n) * _0x71n)) % _256n;
        if (R & _2n)
            t ^= _1n << ((_1n << /* @__PURE__ */ BigInt(j)) - _1n);
    }
    _SHA3_IOTA.push(t);
}
const IOTAS = split(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s) => (s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s));
const rotlL = (h, l, s) => (s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s));
/** `keccakf1600` internal function, additionally allows to adjust round count. */
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for (let round = 24 - rounds; round < 24; round++) {
        // Theta θ
        for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
                B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
                s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    clean(B);
}
/** Keccak sponge function. */
class Keccak extends Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        // Can be passed from user as dkLen
        anumber(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (!(0 < blockLen && blockLen < 200))
            throw new Error('only keccak-f1600 function is supported');
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        swap32IfBE(this.state32);
        keccakP(this.state32, this.rounds);
        swap32IfBE(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        aexists(this);
        data = toBytes(data);
        abytes(data);
        const { blockLen, state } = this;
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
                state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
                this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished)
            return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1)
            this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        aexists(this, false);
        abytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len;) {
            if (this.posOut >= blockLen)
                this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        anumber(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        aoutput(out, this);
        if (this.finished)
            throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        clean(this.state);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen) => createHasher(() => new Keccak(blockLen, suffix, outputLen));
/** keccak-256 hash function. Different from SHA3-256. */
const keccak_256 = /* @__PURE__ */ (() => gen(0x01, 136, 256 / 8))();

function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes$1(value) : value);
    if (to === 'bytes')
        return bytes;
    return toHex(bytes);
}

/**
 * Map with a LRU (Least recently used) policy.
 *
 * @link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */
class LruMap extends Map {
    constructor(size) {
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey)
                this.delete(firstKey);
        }
        return this;
    }
}

const checksumAddressCache = /*#__PURE__*/ new LruMap(8192);
function checksumAddress(address_, 
/**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */
chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`))
        return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = address_.substring(2).toLowerCase();
    const hash = keccak256(stringToBytes(hexAddress), 'bytes');
    const address = (hexAddress).split('');
    for (let i = 0; i < 40; i += 2) {
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}

/**
 * @description Converts an ECDSA public key to an address.
 *
 * @param publicKey The public key to convert.
 *
 * @returns The address.
 */
function publicKeyToAddress(publicKey) {
    const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
    return checksumAddress(`0x${address}`);
}

async function recoverPublicKey({ hash, signature, }) {
    const hashHex = isHex(hash) ? hash : toHex(hash);
    const { secp256k1 } = await __vitePreload(async () => { const { secp256k1 } = await import('./secp256k1-D9IKRcEe.js');return { secp256k1 }},true              ?__vite__mapDeps([8,1,2,4]):void 0);
    const signature_ = (() => {
        // typeof signature: `Signature`
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit);
        }
        // typeof signature: `Hex | ByteArray`
        const signatureHex = isHex(signature) ? signature : toHex(signature);
        if (size(signatureHex) !== 65)
            throw new Error('invalid signature length');
        const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_
        .recoverPublicKey(hashHex.substring(2))
        .toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1)
        return yParityOrV;
    if (yParityOrV === 27)
        return 0;
    if (yParityOrV === 28)
        return 1;
    throw new Error('Invalid yParityOrV value');
}

async function recoverAddress({ hash, signature, }) {
    return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

var define_process_env_default$1 = {};
const Ae$1 = ":";
function Je$2(t) {
  const [e, n] = t.split(Ae$1);
  return { namespace: e, reference: n };
}
function Ie$1(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var Qs$1 = Object.defineProperty, ti$1 = Object.defineProperties, ei$1 = Object.getOwnPropertyDescriptors, ar$1 = Object.getOwnPropertySymbols, ni$1 = Object.prototype.hasOwnProperty, ri$1 = Object.prototype.propertyIsEnumerable, en$1 = (t, e, n) => e in t ? Qs$1(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, ur$1 = (t, e) => {
  for (var n in e || (e = {})) ni$1.call(e, n) && en$1(t, n, e[n]);
  if (ar$1) for (var n of ar$1(e)) ri$1.call(e, n) && en$1(t, n, e[n]);
  return t;
}, oi$1 = (t, e) => ti$1(t, ei$1(e)), lr$1 = (t, e, n) => en$1(t, typeof e != "symbol" ? e + "" : e, n);
const dr$1 = "ReactNative", et$2 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, pr$1 = "js";
function rn$1() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function At$2() {
  return !cjsExports$2.getDocument() && !!cjsExports$2.getNavigator() && navigator.product === dr$1;
}
function ci$1() {
  return At$2() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function fi$1() {
  return At$2() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Wt$2() {
  return !rn$1() && !!cjsExports$2.getNavigator() && !!cjsExports$2.getDocument();
}
function Vt$2() {
  return At$2() ? et$2.reactNative : rn$1() ? et$2.node : Wt$2() ? et$2.browser : et$2.unknown;
}
function ai$1() {
  var t;
  try {
    return At$2() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function gr$1(t, e) {
  const n = new URLSearchParams(t);
  return Object.entries(e).sort(([r], [o]) => r.localeCompare(o)).forEach(([r, o]) => {
    o != null && n.set(r, String(o));
  }), n.toString();
}
function ui$1(t) {
  var e, n;
  const r = br$1();
  try {
    return t != null && t.url && r.url && new URL(t.url).host !== new URL(r.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`), t.url = r.url), (e = t?.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((o) => o !== "")), oi$1(ur$1(ur$1({}, r), t), { url: t?.url || r.url, name: t?.name || r.name, description: t?.description || r.description, icons: (n = t?.icons) != null && n.length && t.icons.length > 0 ? t.icons : r.icons });
  } catch (o) {
    return console.warn("Error populating app metadata", o), t || r;
  }
}
function br$1() {
  return cjsExports.getWindowMetadata() || { name: "", description: "", url: "", icons: [""] };
}
function yr$1() {
  if (Vt$2() === et$2.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n, Version: r } = global.Platform;
    return [n, r].join("-");
  }
  const t = detect();
  if (t === null) return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function mr$1() {
  var t;
  const e = Vt$2();
  return e === et$2.browser ? [e, ((t = cjsExports$2.getLocation()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function wr$1(t, e, n) {
  const r = yr$1(), o = mr$1();
  return [[t, e].join("-"), [pr$1, n].join("-"), r, o].join("/");
}
function di$1({ protocol: t, version: e, relayUrl: n, sdkVersion: r, auth: o, projectId: s, useOnCloseEvent: i, bundleId: c, packageName: f }) {
  const u = n.split("?"), a = wr$1(t, e, r), l = { auth: o, ua: a, projectId: s, useOnCloseEvent: i, packageName: f || void 0, bundleId: c || void 0 }, d = gr$1(u[1] || "", l);
  return u[0] + "?" + d;
}
function It$3(t, e) {
  return t.filter((n) => e.includes(n)).length === t.length;
}
function bi$1(t) {
  return Object.fromEntries(t.entries());
}
function yi$1(t) {
  return new Map(Object.entries(t));
}
function xi$1(t = cjsExports$1.FIVE_MINUTES, e) {
  const n = cjsExports$1.toMiliseconds(t || cjsExports$1.FIVE_MINUTES);
  let r, o, s, i;
  return { resolve: (c) => {
    s && r && (clearTimeout(s), r(c), i = Promise.resolve(c));
  }, reject: (c) => {
    s && o && (clearTimeout(s), o(c));
  }, done: () => new Promise((c, f) => {
    if (i) return c(i);
    s = setTimeout(() => {
      const u = new Error(e);
      i = Promise.reject(u), f(u);
    }, n), r = c, o = f;
  }) };
}
function Ei$1(t, e, n) {
  return new Promise(async (r, o) => {
    const s = setTimeout(() => o(new Error(n)), e);
    try {
      const i = await t;
      r(i);
    } catch (i) {
      o(i);
    }
    clearTimeout(s);
  });
}
function on$1(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function Bi$1(t) {
  return on$1("topic", t);
}
function Ai$1(t) {
  return on$1("id", t);
}
function Ii$1(t) {
  const [e, n] = t.split(":"), r = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof n == "string") r.topic = n;
  else if (e === "id" && Number.isInteger(Number(n))) r.id = Number(n);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);
  return r;
}
function Si$1(t, e) {
  return cjsExports$1.fromMiliseconds((Date.now()) + cjsExports$1.toMiliseconds(t));
}
function Oi$1(t) {
  return Date.now() >= cjsExports$1.toMiliseconds(t);
}
function Ni$1(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function ut$2(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function Ui$1({ id: t, topic: e, wcDeepLink: n }) {
  var r;
  try {
    if (!n) return;
    const o = typeof n == "string" ? JSON.parse(n) : n, s = o?.href;
    if (typeof s != "string") return;
    const i = Br$1(s, t, e), c = Vt$2();
    if (c === et$2.browser) {
      if (!((r = cjsExports$2.getDocument()) != null && r.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      Ar$1(i);
    } else c === et$2.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (o) {
    console.error(o);
  }
}
function Br$1(t, e, n) {
  const r = `requestId=${e}&sessionTopic=${n}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let o = `${t}`;
  if (t.startsWith("https://t.me")) {
    const s = t.includes("?") ? "&startapp=" : "?startapp=";
    o = `${o}${s}${Or$1(r, true)}`;
  } else o = `${o}/wc?${r}`;
  return o;
}
function Ar$1(t) {
  let e = "_self";
  Sr$1() ? e = "_top" : (Ir$1() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function _i$1(t, e) {
  let n = "";
  try {
    if (Wt$2() && (n = localStorage.getItem(e), n)) return n;
    n = await t.getItem(e);
  } catch (r) {
    console.error(r);
  }
  return n;
}
function Ri$1(t, e) {
  if (!t.includes(e)) return null;
  const n = t.split(/([&,?,=])/), r = n.indexOf(e);
  return n[r + 2];
}
function $i$1() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Ti$1() {
  return typeof process < "u" && define_process_env_default$1.IS_VITEST === "true";
}
function Ir$1() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function Sr$1() {
  try {
    return window.self !== window.top;
  } catch {
    return false;
  }
}
function Or$1(t, e = false) {
  const n = Buffer.from(t).toString("base64");
  return e ? n.replace(/[=]/g, "") : n;
}
function cn$1(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function Ci$1(t) {
  return new Promise((e) => setTimeout(e, t));
}
let ji$1 = class ji {
  constructor({ limit: e }) {
    lr$1(this, "limit"), lr$1(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
  }
  add(e) {
    if (!this.set.has(e)) {
      if (this.set.size >= this.limit) {
        const n = this.set.values().next().value;
        n && this.set.delete(n);
      }
      this.set.add(e);
    }
  }
  has(e) {
    return this.set.has(e);
  }
};
const Oe$2 = BigInt(2 ** 32 - 1), Nr$1 = BigInt(32);
function Ur$1(t, e = false) {
  return e ? { h: Number(t & Oe$2), l: Number(t >> Nr$1 & Oe$2) } : { h: Number(t >> Nr$1 & Oe$2) | 0, l: Number(t & Oe$2) | 0 };
}
function _r$1(t, e = false) {
  const n = t.length;
  let r = new Uint32Array(n), o = new Uint32Array(n);
  for (let s = 0; s < n; s++) {
    const { h: i, l: c } = Ur$1(t[s], e);
    [r[s], o[s]] = [i, c];
  }
  return [r, o];
}
const Rr$1 = (t, e, n) => t >>> n, $r$1 = (t, e, n) => t << 32 - n | e >>> n, St$3 = (t, e, n) => t >>> n | e << 32 - n, Ot$2 = (t, e, n) => t << 32 - n | e >>> n, de$1 = (t, e, n) => t << 64 - n | e >>> n - 32, he$2 = (t, e, n) => t >>> n - 32 | e << 64 - n, Li$1 = (t, e) => e, ki$1 = (t, e) => t, Pi$1 = (t, e, n) => t << n | e >>> 32 - n, Hi$1 = (t, e, n) => e << n | t >>> 32 - n, Di$1 = (t, e, n) => e << n - 32 | t >>> 64 - n, Vi$1 = (t, e, n) => t << n - 32 | e >>> 64 - n;
function dt$2(t, e, n, r) {
  const o = (e >>> 0) + (r >>> 0);
  return { h: t + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const fn$1 = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), an$1 = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0, Mi$1 = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), Ki$1 = (t, e, n, r, o) => e + n + r + o + (t / 2 ** 32 | 0) | 0, qi$1 = (t, e, n, r, o) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0), Fi$1 = (t, e, n, r, o, s) => e + n + r + o + s + (t / 2 ** 32 | 0) | 0, Xt$2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Ne(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function mt$2(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function ht$1(t, ...e) {
  if (!Ne(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Ue$2(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  mt$2(t.outputLen), mt$2(t.blockLen);
}
function Nt$2(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function un$1(t, e) {
  ht$1(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
function pe$3(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function lt$1(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function ln$1(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function bt$1(t, e) {
  return t << 32 - e | t >>> e;
}
const Tr$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Cr$1(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
const wt$2 = Tr$1 ? (t) => t : (t) => Cr$1(t);
function Zi(t) {
  for (let e = 0; e < t.length; e++) t[e] = Cr$1(t[e]);
  return t;
}
const Ut$2 = Tr$1 ? (t) => t : Zi, jr$1 = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Gi$1 = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Jt$2(t) {
  if (ht$1(t), jr$1) return t.toHex();
  let e = "";
  for (let n = 0; n < t.length; n++) e += Gi$1[t[n]];
  return e;
}
const vt$2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Lr$1(t) {
  if (t >= vt$2._0 && t <= vt$2._9) return t - vt$2._0;
  if (t >= vt$2.A && t <= vt$2.F) return t - (vt$2.A - 10);
  if (t >= vt$2.a && t <= vt$2.f) return t - (vt$2.a - 10);
}
function _e$1(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  if (jr$1) return Uint8Array.fromHex(t);
  const e = t.length, n = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(n);
  for (let o = 0, s = 0; o < n; o++, s += 2) {
    const i = Lr$1(t.charCodeAt(s)), c = Lr$1(t.charCodeAt(s + 1));
    if (i === void 0 || c === void 0) {
      const f = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + f + '" at index ' + s);
    }
    r[o] = i * 16 + c;
  }
  return r;
}
function kr$1(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function pt$1(t) {
  return typeof t == "string" && (t = kr$1(t)), ht$1(t), t;
}
function _t$2(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    ht$1(o), e += o.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, o = 0; r < t.length; r++) {
    const s = t[r];
    n.set(s, o), o += s.length;
  }
  return n;
}
class Re {
}
function ge$1(t) {
  const e = (r) => t().update(pt$1(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function zi$1(t) {
  const e = (r, o) => t(o).update(pt$1(r)).digest(), n = t({});
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (r) => t(r), e;
}
function Mt$2(t = 32) {
  if (Xt$2 && typeof Xt$2.getRandomValues == "function") return Xt$2.getRandomValues(new Uint8Array(t));
  if (Xt$2 && typeof Xt$2.randomBytes == "function") return Uint8Array.from(Xt$2.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const Yi$1 = BigInt(0), be$2 = BigInt(1), Wi$1 = BigInt(2), Xi = BigInt(7), Ji = BigInt(256), Qi = BigInt(113), Pr$1 = [], Hr$1 = [], Dr$1 = [];
for (let t = 0, e = be$2, n = 1, r = 0; t < 24; t++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Pr$1.push(2 * (5 * r + n)), Hr$1.push((t + 1) * (t + 2) / 2 % 64);
  let o = Yi$1;
  for (let s = 0; s < 7; s++) e = (e << be$2 ^ (e >> Xi) * Qi) % Ji, e & Wi$1 && (o ^= be$2 << (be$2 << BigInt(s)) - be$2);
  Dr$1.push(o);
}
const Vr$1 = _r$1(Dr$1, true), tc = Vr$1[0], ec = Vr$1[1], Mr$1 = (t, e, n) => n > 32 ? Di$1(t, e, n) : Pi$1(t, e, n), Kr$1 = (t, e, n) => n > 32 ? Vi$1(t, e, n) : Hi$1(t, e, n);
function nc(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let i = 0; i < 10; i++) n[i] = t[i] ^ t[i + 10] ^ t[i + 20] ^ t[i + 30] ^ t[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const c = (i + 8) % 10, f = (i + 2) % 10, u = n[f], a = n[f + 1], l = Mr$1(u, a, 1) ^ n[c], d = Kr$1(u, a, 1) ^ n[c + 1];
      for (let h = 0; h < 50; h += 10) t[i + h] ^= l, t[i + h + 1] ^= d;
    }
    let o = t[2], s = t[3];
    for (let i = 0; i < 24; i++) {
      const c = Hr$1[i], f = Mr$1(o, s, c), u = Kr$1(o, s, c), a = Pr$1[i];
      o = t[a], s = t[a + 1], t[a] = f, t[a + 1] = u;
    }
    for (let i = 0; i < 50; i += 10) {
      for (let c = 0; c < 10; c++) n[c] = t[i + c];
      for (let c = 0; c < 10; c++) t[i + c] ^= ~n[(c + 2) % 10] & n[(c + 4) % 10];
    }
    t[0] ^= tc[r], t[1] ^= ec[r];
  }
  lt$1(n);
}
let Jn$1 = class Jn extends Re {
  constructor(e, n, r, o = false, s = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = o, this.rounds = s, mt$2(r), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = pe$3(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Ut$2(this.state32), nc(this.state32, this.rounds), Ut$2(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Nt$2(this), e = pt$1(e), ht$1(e);
    const { blockLen: n, state: r } = this, o = e.length;
    for (let s = 0; s < o; ) {
      const i = Math.min(n - this.pos, o - s);
      for (let c = 0; c < i; c++) r[this.pos++] ^= e[s++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: e, suffix: n, pos: r, blockLen: o } = this;
    e[r] ^= n, (n & 128) !== 0 && r === o - 1 && this.keccak(), e[o - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Nt$2(this, false), ht$1(e), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let o = 0, s = e.length; o < s; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, s - o);
      e.set(n.subarray(this.posOut, this.posOut + i), o), this.posOut += i, o += i;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return mt$2(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (un$1(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, lt$1(this.state);
  }
  _cloneInto(e) {
    const { blockLen: n, suffix: r, outputLen: o, rounds: s, enableXOF: i } = this;
    return e || (e = new Jn(n, r, o, i, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = o, e.enableXOF = i, e.destroyed = this.destroyed, e;
  }
};
const rc = (t, e, n) => ge$1(() => new Jn$1(e, t, n)), oc = rc(1, 136, 256 / 8);
function sc(t, e, n, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
  const o = BigInt(32), s = BigInt(4294967295), i = Number(n >> o & s), c = Number(n & s), f = r ? 4 : 0, u = r ? 0 : 4;
  t.setUint32(e + f, i, r), t.setUint32(e + u, c, r);
}
function ic(t, e, n) {
  return t & e ^ ~t & n;
}
function cc(t, e, n) {
  return t & e ^ t & n ^ e & n;
}
let qr$1 = class qr extends Re {
  constructor(e, n, r, o) {
    super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = o, this.buffer = new Uint8Array(e), this.view = ln$1(this.buffer);
  }
  update(e) {
    Nt$2(this), e = pt$1(e), ht$1(e);
    const { view: n, buffer: r, blockLen: o } = this, s = e.length;
    for (let i = 0; i < s; ) {
      const c = Math.min(o - this.pos, s - i);
      if (c === o) {
        const f = ln$1(e);
        for (; o <= s - i; i += o) this.process(f, i);
        continue;
      }
      r.set(e.subarray(i, i + c), this.pos), this.pos += c, i += c, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Nt$2(this), un$1(e, this), this.finished = true;
    const { buffer: n, view: r, blockLen: o, isLE: s } = this;
    let { pos: i } = this;
    n[i++] = 128, lt$1(this.buffer.subarray(i)), this.padOffset > o - i && (this.process(r, 0), i = 0);
    for (let l = i; l < o; l++) n[l] = 0;
    sc(r, o - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const c = ln$1(e), f = this.outputLen;
    if (f % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = f / 4, a = this.get();
    if (u > a.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < u; l++) c.setUint32(4 * l, a[l], s);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: o, finished: s, destroyed: i, pos: c } = this;
    return e.destroyed = i, e.finished = s, e.length = o, e.pos = c, o % n && e.buffer.set(r), e;
  }
  clone() {
    return this._cloneInto();
  }
};
const Rt$3 = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), X$1 = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]), J$2 = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]), fc = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), $t$2 = new Uint32Array(64);
class ac extends qr$1 {
  constructor(e = 32) {
    super(64, e, 8, false), this.A = Rt$3[0] | 0, this.B = Rt$3[1] | 0, this.C = Rt$3[2] | 0, this.D = Rt$3[3] | 0, this.E = Rt$3[4] | 0, this.F = Rt$3[5] | 0, this.G = Rt$3[6] | 0, this.H = Rt$3[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: o, E: s, F: i, G: c, H: f } = this;
    return [e, n, r, o, s, i, c, f];
  }
  set(e, n, r, o, s, i, c, f) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = o | 0, this.E = s | 0, this.F = i | 0, this.G = c | 0, this.H = f | 0;
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4) $t$2[l] = e.getUint32(n, false);
    for (let l = 16; l < 64; l++) {
      const d = $t$2[l - 15], h = $t$2[l - 2], y = bt$1(d, 7) ^ bt$1(d, 18) ^ d >>> 3, m = bt$1(h, 17) ^ bt$1(h, 19) ^ h >>> 10;
      $t$2[l] = m + $t$2[l - 7] + y + $t$2[l - 16] | 0;
    }
    let { A: r, B: o, C: s, D: i, E: c, F: f, G: u, H: a } = this;
    for (let l = 0; l < 64; l++) {
      const d = bt$1(c, 6) ^ bt$1(c, 11) ^ bt$1(c, 25), h = a + d + ic(c, f, u) + fc[l] + $t$2[l] | 0, m = (bt$1(r, 2) ^ bt$1(r, 13) ^ bt$1(r, 22)) + cc(r, o, s) | 0;
      a = u, u = f, f = c, c = i + h | 0, i = s, s = o, o = r, r = h + m | 0;
    }
    r = r + this.A | 0, o = o + this.B | 0, s = s + this.C | 0, i = i + this.D | 0, c = c + this.E | 0, f = f + this.F | 0, u = u + this.G | 0, a = a + this.H | 0, this.set(r, o, s, i, c, f, u, a);
  }
  roundClean() {
    lt$1($t$2);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), lt$1(this.buffer);
  }
}
const Fr$1 = _r$1(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))), uc = Fr$1[0], lc = Fr$1[1], Tt$2 = new Uint32Array(80), Ct$2 = new Uint32Array(80);
let dn$1 = class dn extends qr$1 {
  constructor(e = 64) {
    super(128, e, 16, false), this.Ah = J$2[0] | 0, this.Al = J$2[1] | 0, this.Bh = J$2[2] | 0, this.Bl = J$2[3] | 0, this.Ch = J$2[4] | 0, this.Cl = J$2[5] | 0, this.Dh = J$2[6] | 0, this.Dl = J$2[7] | 0, this.Eh = J$2[8] | 0, this.El = J$2[9] | 0, this.Fh = J$2[10] | 0, this.Fl = J$2[11] | 0, this.Gh = J$2[12] | 0, this.Gl = J$2[13] | 0, this.Hh = J$2[14] | 0, this.Hl = J$2[15] | 0;
  }
  get() {
    const { Ah: e, Al: n, Bh: r, Bl: o, Ch: s, Cl: i, Dh: c, Dl: f, Eh: u, El: a, Fh: l, Fl: d, Gh: h, Gl: y, Hh: m, Hl: v } = this;
    return [e, n, r, o, s, i, c, f, u, a, l, d, h, y, m, v];
  }
  set(e, n, r, o, s, i, c, f, u, a, l, d, h, y, m, v) {
    this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = s | 0, this.Cl = i | 0, this.Dh = c | 0, this.Dl = f | 0, this.Eh = u | 0, this.El = a | 0, this.Fh = l | 0, this.Fl = d | 0, this.Gh = h | 0, this.Gl = y | 0, this.Hh = m | 0, this.Hl = v | 0;
  }
  process(e, n) {
    for (let R = 0; R < 16; R++, n += 4) Tt$2[R] = e.getUint32(n), Ct$2[R] = e.getUint32(n += 4);
    for (let R = 16; R < 80; R++) {
      const Z = Tt$2[R - 15] | 0, H = Ct$2[R - 15] | 0, j = St$3(Z, H, 1) ^ St$3(Z, H, 8) ^ Rr$1(Z, H, 7), L = Ot$2(Z, H, 1) ^ Ot$2(Z, H, 8) ^ $r$1(Z, H, 7), k = Tt$2[R - 2] | 0, O = Ct$2[R - 2] | 0, T = St$3(k, O, 19) ^ de$1(k, O, 61) ^ Rr$1(k, O, 6), C = Ot$2(k, O, 19) ^ he$2(k, O, 61) ^ $r$1(k, O, 6), _ = Mi$1(L, C, Ct$2[R - 7], Ct$2[R - 16]), p = Ki$1(_, j, T, Tt$2[R - 7], Tt$2[R - 16]);
      Tt$2[R] = p | 0, Ct$2[R] = _ | 0;
    }
    let { Ah: r, Al: o, Bh: s, Bl: i, Ch: c, Cl: f, Dh: u, Dl: a, Eh: l, El: d, Fh: h, Fl: y, Gh: m, Gl: v, Hh: U, Hl: F } = this;
    for (let R = 0; R < 80; R++) {
      const Z = St$3(l, d, 14) ^ St$3(l, d, 18) ^ de$1(l, d, 41), H = Ot$2(l, d, 14) ^ Ot$2(l, d, 18) ^ he$2(l, d, 41), j = l & h ^ ~l & m, L = d & y ^ ~d & v, k = qi$1(F, H, L, lc[R], Ct$2[R]), O = Fi$1(k, U, Z, j, uc[R], Tt$2[R]), T = k | 0, C = St$3(r, o, 28) ^ de$1(r, o, 34) ^ de$1(r, o, 39), _ = Ot$2(r, o, 28) ^ he$2(r, o, 34) ^ he$2(r, o, 39), p = r & s ^ r & c ^ s & c, b = o & i ^ o & f ^ i & f;
      U = m | 0, F = v | 0, m = h | 0, v = y | 0, h = l | 0, y = d | 0, { h: l, l: d } = dt$2(u | 0, a | 0, O | 0, T | 0), u = c | 0, a = f | 0, c = s | 0, f = i | 0, s = r | 0, i = o | 0;
      const g = fn$1(T, _, b);
      r = an$1(g, O, C, p), o = g | 0;
    }
    (({ h: r, l: o } = dt$2(this.Ah | 0, this.Al | 0, r | 0, o | 0))), { h: s, l: i } = dt$2(this.Bh | 0, this.Bl | 0, s | 0, i | 0), { h: c, l: f } = dt$2(this.Ch | 0, this.Cl | 0, c | 0, f | 0), { h: u, l: a } = dt$2(this.Dh | 0, this.Dl | 0, u | 0, a | 0), { h: l, l: d } = dt$2(this.Eh | 0, this.El | 0, l | 0, d | 0), { h, l: y } = dt$2(this.Fh | 0, this.Fl | 0, h | 0, y | 0), { h: m, l: v } = dt$2(this.Gh | 0, this.Gl | 0, m | 0, v | 0), { h: U, l: F } = dt$2(this.Hh | 0, this.Hl | 0, U | 0, F | 0), this.set(r, o, s, i, c, f, u, a, l, d, h, y, m, v, U, F);
  }
  roundClean() {
    lt$1(Tt$2, Ct$2);
  }
  destroy() {
    lt$1(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
class dc extends dn$1 {
  constructor() {
    super(48), this.Ah = X$1[0] | 0, this.Al = X$1[1] | 0, this.Bh = X$1[2] | 0, this.Bl = X$1[3] | 0, this.Ch = X$1[4] | 0, this.Cl = X$1[5] | 0, this.Dh = X$1[6] | 0, this.Dl = X$1[7] | 0, this.Eh = X$1[8] | 0, this.El = X$1[9] | 0, this.Fh = X$1[10] | 0, this.Fl = X$1[11] | 0, this.Gh = X$1[12] | 0, this.Gl = X$1[13] | 0, this.Hh = X$1[14] | 0, this.Hl = X$1[15] | 0;
  }
}
const Q = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
class hc extends dn$1 {
  constructor() {
    super(32), this.Ah = Q[0] | 0, this.Al = Q[1] | 0, this.Bh = Q[2] | 0, this.Bl = Q[3] | 0, this.Ch = Q[4] | 0, this.Cl = Q[5] | 0, this.Dh = Q[6] | 0, this.Dl = Q[7] | 0, this.Eh = Q[8] | 0, this.El = Q[9] | 0, this.Fh = Q[10] | 0, this.Fl = Q[11] | 0, this.Gh = Q[12] | 0, this.Gl = Q[13] | 0, this.Hh = Q[14] | 0, this.Hl = Q[15] | 0;
  }
}
const $e$2 = ge$1(() => new ac()), pc = ge$1(() => new dn$1()), gc = ge$1(() => new dc()), bc = ge$1(() => new hc()), yc = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]), z$4 = Uint32Array.from([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]), S$4 = new Uint32Array(32);
function jt$2(t, e, n, r, o, s) {
  const i = o[s], c = o[s + 1];
  let f = S$4[2 * t], u = S$4[2 * t + 1], a = S$4[2 * e], l = S$4[2 * e + 1], d = S$4[2 * n], h = S$4[2 * n + 1], y = S$4[2 * r], m = S$4[2 * r + 1], v = fn$1(f, a, i);
  u = an$1(v, u, l, c), f = v | 0, { Dh: m, Dl: y } = { Dh: m ^ u, Dl: y ^ f }, { Dh: m, Dl: y } = { Dh: Li$1(m, y), Dl: ki$1(m) }, { h, l: d } = dt$2(h, d, m, y), { Bh: l, Bl: a } = { Bh: l ^ h, Bl: a ^ d }, { Bh: l, Bl: a } = { Bh: St$3(l, a, 24), Bl: Ot$2(l, a, 24) }, S$4[2 * t] = f, S$4[2 * t + 1] = u, S$4[2 * e] = a, S$4[2 * e + 1] = l, S$4[2 * n] = d, S$4[2 * n + 1] = h, S$4[2 * r] = y, S$4[2 * r + 1] = m;
}
function Lt$2(t, e, n, r, o, s) {
  const i = o[s], c = o[s + 1];
  let f = S$4[2 * t], u = S$4[2 * t + 1], a = S$4[2 * e], l = S$4[2 * e + 1], d = S$4[2 * n], h = S$4[2 * n + 1], y = S$4[2 * r], m = S$4[2 * r + 1], v = fn$1(f, a, i);
  u = an$1(v, u, l, c), f = v | 0, { Dh: m, Dl: y } = { Dh: m ^ u, Dl: y ^ f }, { Dh: m, Dl: y } = { Dh: St$3(m, y, 16), Dl: Ot$2(m, y, 16) }, { h, l: d } = dt$2(h, d, m, y), { Bh: l, Bl: a } = { Bh: l ^ h, Bl: a ^ d }, { Bh: l, Bl: a } = { Bh: de$1(l, a, 63), Bl: he$2(l, a, 63) }, S$4[2 * t] = f, S$4[2 * t + 1] = u, S$4[2 * e] = a, S$4[2 * e + 1] = l, S$4[2 * n] = d, S$4[2 * n + 1] = h, S$4[2 * r] = y, S$4[2 * r + 1] = m;
}
function mc(t, e = {}, n, r, o) {
  if (mt$2(n), t < 0 || t > n) throw new Error("outputLen bigger than keyLen");
  const { key: s, salt: i, personalization: c } = e;
  if (s !== void 0 && (s.length < 1 || s.length > n)) throw new Error("key length must be undefined or 1.." + n);
  if (i !== void 0 && i.length !== r) throw new Error("salt must be undefined or " + r);
  if (c !== void 0 && c.length !== o) throw new Error("personalization must be undefined or " + o);
}
class wc extends Re {
  constructor(e, n) {
    super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, mt$2(e), mt$2(n), this.blockLen = e, this.outputLen = n, this.buffer = new Uint8Array(e), this.buffer32 = pe$3(this.buffer);
  }
  update(e) {
    Nt$2(this), e = pt$1(e), ht$1(e);
    const { blockLen: n, buffer: r, buffer32: o } = this, s = e.length, i = e.byteOffset, c = e.buffer;
    for (let f = 0; f < s; ) {
      this.pos === n && (Ut$2(o), this.compress(o, 0, false), Ut$2(o), this.pos = 0);
      const u = Math.min(n - this.pos, s - f), a = i + f;
      if (u === n && !(a % 4) && f + u < s) {
        const l = new Uint32Array(c, a, Math.floor((s - f) / 4));
        Ut$2(l);
        for (let d = 0; f + n < s; d += o.length, f += n) this.length += n, this.compress(l, d, false);
        Ut$2(l);
        continue;
      }
      r.set(e.subarray(f, f + u), this.pos), this.pos += u, this.length += u, f += u;
    }
    return this;
  }
  digestInto(e) {
    Nt$2(this), un$1(e, this);
    const { pos: n, buffer32: r } = this;
    this.finished = true, lt$1(this.buffer.subarray(n)), Ut$2(r), this.compress(r, 0, true), Ut$2(r);
    const o = pe$3(e);
    this.get().forEach((s, i) => o[i] = wt$2(s));
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    const { buffer: n, length: r, finished: o, destroyed: s, outputLen: i, pos: c } = this;
    return e || (e = new this.constructor({ dkLen: i })), e.set(...this.get()), e.buffer.set(n), e.destroyed = s, e.finished = o, e.length = r, e.pos = c, e.outputLen = i, e;
  }
  clone() {
    return this._cloneInto();
  }
}
class vc extends wc {
  constructor(e = {}) {
    const n = e.dkLen === void 0 ? 64 : e.dkLen;
    super(128, n), this.v0l = z$4[0] | 0, this.v0h = z$4[1] | 0, this.v1l = z$4[2] | 0, this.v1h = z$4[3] | 0, this.v2l = z$4[4] | 0, this.v2h = z$4[5] | 0, this.v3l = z$4[6] | 0, this.v3h = z$4[7] | 0, this.v4l = z$4[8] | 0, this.v4h = z$4[9] | 0, this.v5l = z$4[10] | 0, this.v5h = z$4[11] | 0, this.v6l = z$4[12] | 0, this.v6h = z$4[13] | 0, this.v7l = z$4[14] | 0, this.v7h = z$4[15] | 0, mc(n, e, 64, 16, 16);
    let { key: r, personalization: o, salt: s } = e, i = 0;
    if (r !== void 0 && (r = pt$1(r), i = r.length), this.v0l ^= this.outputLen | i << 8 | 65536 | 1 << 24, s !== void 0) {
      s = pt$1(s);
      const c = pe$3(s);
      this.v4l ^= wt$2(c[0]), this.v4h ^= wt$2(c[1]), this.v5l ^= wt$2(c[2]), this.v5h ^= wt$2(c[3]);
    }
    if (o !== void 0) {
      o = pt$1(o);
      const c = pe$3(o);
      this.v6l ^= wt$2(c[0]), this.v6h ^= wt$2(c[1]), this.v7l ^= wt$2(c[2]), this.v7h ^= wt$2(c[3]);
    }
    if (r !== void 0) {
      const c = new Uint8Array(this.blockLen);
      c.set(r), this.update(c);
    }
  }
  get() {
    let { v0l: e, v0h: n, v1l: r, v1h: o, v2l: s, v2h: i, v3l: c, v3h: f, v4l: u, v4h: a, v5l: l, v5h: d, v6l: h, v6h: y, v7l: m, v7h: v } = this;
    return [e, n, r, o, s, i, c, f, u, a, l, d, h, y, m, v];
  }
  set(e, n, r, o, s, i, c, f, u, a, l, d, h, y, m, v) {
    this.v0l = e | 0, this.v0h = n | 0, this.v1l = r | 0, this.v1h = o | 0, this.v2l = s | 0, this.v2h = i | 0, this.v3l = c | 0, this.v3h = f | 0, this.v4l = u | 0, this.v4h = a | 0, this.v5l = l | 0, this.v5h = d | 0, this.v6l = h | 0, this.v6h = y | 0, this.v7l = m | 0, this.v7h = v | 0;
  }
  compress(e, n, r) {
    this.get().forEach((f, u) => S$4[u] = f), S$4.set(z$4, 16);
    let { h: o, l: s } = Ur$1(BigInt(this.length));
    S$4[24] = z$4[8] ^ s, S$4[25] = z$4[9] ^ o, r && (S$4[28] = ~S$4[28], S$4[29] = ~S$4[29]);
    let i = 0;
    const c = yc;
    for (let f = 0; f < 12; f++) jt$2(0, 4, 8, 12, e, n + 2 * c[i++]), Lt$2(0, 4, 8, 12, e, n + 2 * c[i++]), jt$2(1, 5, 9, 13, e, n + 2 * c[i++]), Lt$2(1, 5, 9, 13, e, n + 2 * c[i++]), jt$2(2, 6, 10, 14, e, n + 2 * c[i++]), Lt$2(2, 6, 10, 14, e, n + 2 * c[i++]), jt$2(3, 7, 11, 15, e, n + 2 * c[i++]), Lt$2(3, 7, 11, 15, e, n + 2 * c[i++]), jt$2(0, 5, 10, 15, e, n + 2 * c[i++]), Lt$2(0, 5, 10, 15, e, n + 2 * c[i++]), jt$2(1, 6, 11, 12, e, n + 2 * c[i++]), Lt$2(1, 6, 11, 12, e, n + 2 * c[i++]), jt$2(2, 7, 8, 13, e, n + 2 * c[i++]), Lt$2(2, 7, 8, 13, e, n + 2 * c[i++]), jt$2(3, 4, 9, 14, e, n + 2 * c[i++]), Lt$2(3, 4, 9, 14, e, n + 2 * c[i++]);
    this.v0l ^= S$4[0] ^ S$4[16], this.v0h ^= S$4[1] ^ S$4[17], this.v1l ^= S$4[2] ^ S$4[18], this.v1h ^= S$4[3] ^ S$4[19], this.v2l ^= S$4[4] ^ S$4[20], this.v2h ^= S$4[5] ^ S$4[21], this.v3l ^= S$4[6] ^ S$4[22], this.v3h ^= S$4[7] ^ S$4[23], this.v4l ^= S$4[8] ^ S$4[24], this.v4h ^= S$4[9] ^ S$4[25], this.v5l ^= S$4[10] ^ S$4[26], this.v5h ^= S$4[11] ^ S$4[27], this.v6l ^= S$4[12] ^ S$4[28], this.v6h ^= S$4[13] ^ S$4[29], this.v7l ^= S$4[14] ^ S$4[30], this.v7h ^= S$4[15] ^ S$4[31], lt$1(S$4);
  }
  destroy() {
    this.destroyed = true, lt$1(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const xc = zi$1((t) => new vc(t)), Ec = "https://rpc.walletconnect.org/v1";
function hn$1(t) {
  const e = `Ethereum Signed Message:
${t.length}`, n = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(oc(n)).toString("hex");
}
async function Zr$1(t, e, n, r, o, s) {
  switch (n.t) {
    case "eip191":
      return await Gr$1(t, e, n.s);
    case "eip1271":
      return await zr$1(t, e, n.s, r, o, s);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`);
  }
}
async function Gr$1(t, e, n) {
  return (await recoverAddress({ hash: hn$1(e), signature: n })).toLowerCase() === t.toLowerCase();
}
async function zr$1(t, e, n, r, o, s) {
  const i = Je$2(r);
  if (!i.namespace || !i.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);
  try {
    const c = "0x1626ba7e", f = "0000000000000000000000000000000000000000000000000000000000000040", u = n.substring(2), a = (u.length / 2).toString(16).padStart(64, "0"), l = (e.startsWith("0x") ? e : hn$1(e)).substring(2), d = c + l + f + a + u, h = await fetch(`${s || Ec}/?chainId=${r}&projectId=${o}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: Bc(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: d }, "latest"] }) }), { result: y } = await h.json();
    return y ? y.slice(0, c.length).toLowerCase() === c.toLowerCase() : false;
  } catch (c) {
    return console.error("isValidEip1271Signature: ", c), false;
  }
}
function Bc() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Ac(t) {
  const e = atob(t), n = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
  const r = n[0];
  if (r === 0) throw new Error("No signatures found");
  const o = 1 + r * 64;
  if (n.length < o) throw new Error("Transaction data too short for claimed signature count");
  if (n.length < 100) throw new Error("Transaction too short");
  const s = Buffer.from(t, "base64").slice(1, 65);
  return bs58.encode(s);
}
function Ic(t) {
  const e = new Uint8Array(Buffer.from(t, "base64")), n = Array.from("TransactionData::").map((s) => s.charCodeAt(0)), r = new Uint8Array(n.length + e.length);
  r.set(n), r.set(e, n.length);
  const o = xc(r, { dkLen: 32 });
  return bs58.encode(o);
}
function Sc(t) {
  const e = new Uint8Array($e$2(Yr$1(t)));
  return bs58.encode(e);
}
function Yr$1(t) {
  if (t instanceof Uint8Array) return t;
  if (Array.isArray(t)) return new Uint8Array(t);
  if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
  if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
  throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function Oc(t) {
  const e = Buffer.from(t, "base64"), n = decode(e).txn;
  if (!n) throw new Error("Invalid signed transaction: missing 'txn' field");
  const r = encode(n), o = Buffer.from("TX"), s = Buffer.concat([o, Buffer.from(r)]), i = bc(s);
  return base32.encode(i).replace(/=+$/, "");
}
function pn$1(t) {
  const e = [];
  let n = BigInt(t);
  for (; n >= BigInt(128); ) e.push(Number(n & BigInt(127) | BigInt(128))), n >>= BigInt(7);
  return e.push(Number(n)), Buffer.from(e);
}
function Nc(t) {
  const e = Buffer.from(t.signed.bodyBytes, "base64"), n = Buffer.from(t.signed.authInfoBytes, "base64"), r = Buffer.from(t.signature.signature, "base64"), o = [];
  o.push(Buffer.from([10])), o.push(pn$1(e.length)), o.push(e), o.push(Buffer.from([18])), o.push(pn$1(n.length)), o.push(n), o.push(Buffer.from([26])), o.push(pn$1(r.length)), o.push(r);
  const s = Buffer.concat(o), i = $e$2(s);
  return Buffer.from(i).toString("hex").toUpperCase();
}
function Uc(t) {
  var e, n;
  const r = [];
  try {
    if (typeof t == "string") return r.push(t), r;
    if (typeof t != "object") return r;
    t != null && t.id && r.push(t.id);
    const o = (n = (e = t?.capabilities) == null ? void 0 : e.caip345) == null ? void 0 : n.transactionHashes;
    o && r.push(...o);
  } catch (o) {
    console.warn("getWalletSendCallsHashes failed: ", o);
  }
  return r;
}
var _c = Object.defineProperty, Rc = Object.defineProperties, $c = Object.getOwnPropertyDescriptors, Wr$1 = Object.getOwnPropertySymbols, Tc = Object.prototype.hasOwnProperty, Cc = Object.prototype.propertyIsEnumerable, Xr$1 = (t, e, n) => e in t ? _c(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, gn$1 = (t, e) => {
  for (var n in e || (e = {})) Tc.call(e, n) && Xr$1(t, n, e[n]);
  if (Wr$1) for (var n of Wr$1(e)) Cc.call(e, n) && Xr$1(t, n, e[n]);
  return t;
}, Jr$1 = (t, e) => Rc(t, $c(e));
const jc = "did:pkh:", Te$1 = (t) => t?.split(":"), Qr$1 = (t) => {
  const e = t && Te$1(t);
  if (e) return t.includes(jc) ? e[3] : e[1];
}, to$1 = (t) => {
  const e = t && Te$1(t);
  if (e) return e[2] + ":" + e[3];
}, bn$1 = (t) => {
  const e = t && Te$1(t);
  if (e) return e.pop();
};
async function Lc(t) {
  const { cacao: e, projectId: n } = t, { s: r, p: o } = e, s = eo$1(o, o.iss), i = bn$1(o.iss);
  return await Zr$1(i, s, r, to$1(o.iss), n);
}
const eo$1 = (t, e) => {
  const n = `${t.domain} wants you to sign in with your Ethereum account:`, r = bn$1(e);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o = t.statement || void 0;
  const s = `URI: ${t.aud || t.uri}`, i = `Version: ${t.version}`, c = `Chain ID: ${Qr$1(e)}`, f = `Nonce: ${t.nonce}`, u = `Issued At: ${t.iat}`, a = t.exp ? `Expiration Time: ${t.exp}` : void 0, l = t.nbf ? `Not Before: ${t.nbf}` : void 0, d = t.requestId ? `Request ID: ${t.requestId}` : void 0, h = t.resources ? `Resources:${t.resources.map((m) => `
- ${m}`).join("")}` : void 0, y = je(t.resources);
  if (y) {
    const m = kt$2(y);
    o = wn$1(o, m);
  }
  return [n, r, "", o, "", s, i, c, f, u, a, l, d, h].filter((m) => m != null).join(`
`);
};
function so$1(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function io$1(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function yt$2(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((n) => {
    const r = t.att[n];
    if (Array.isArray(r)) throw new Error(`Resource must be an object: ${n}`);
    if (typeof r != "object") throw new Error(`Resource must be an object: ${n}`);
    if (!Object.keys(r).length) throw new Error(`Resource object is empty: ${n}`);
    Object.keys(r).forEach((o) => {
      const s = r[o];
      if (!Array.isArray(s)) throw new Error(`Ability limits ${o} must be an array of objects, found: ${s}`);
      if (!s.length) throw new Error(`Value of ${o} is empty array, must be an array with objects`);
      s.forEach((i) => {
        if (typeof i != "object") throw new Error(`Ability limits (${o}) must be an array of objects, found: ${i}`);
      });
    });
  });
}
function co$1(t, e, n, r = {}) {
  return n?.sort((o, s) => o.localeCompare(s)), { att: { [t]: yn$1(e, n, r) } };
}
function yn$1(t, e, n = {}) {
  e = e?.sort((o, s) => o.localeCompare(s));
  const r = e.map((o) => ({ [`${t}/${o}`]: [n] }));
  return Object.assign({}, ...r);
}
function Ce(t) {
  return yt$2(t), `urn:recap:${so$1(t).replace(/=/g, "")}`;
}
function kt$2(t) {
  const e = io$1(t.replace("urn:recap:", ""));
  return yt$2(e), e;
}
function Vc(t, e, n) {
  const r = co$1(t, e, n);
  return Ce(r);
}
function mn$1(t) {
  return t && t.includes("urn:recap:");
}
function Mc(t, e) {
  const n = kt$2(t), r = kt$2(e), o = ao$1(n, r);
  return Ce(o);
}
function ao$1(t, e) {
  yt$2(t), yt$2(e);
  const n = Object.keys(t.att).concat(Object.keys(e.att)).sort((o, s) => o.localeCompare(s)), r = { att: {} };
  return n.forEach((o) => {
    var s, i;
    Object.keys(((s = t.att) == null ? void 0 : s[o]) || {}).concat(Object.keys(((i = e.att) == null ? void 0 : i[o]) || {})).sort((c, f) => c.localeCompare(f)).forEach((c) => {
      var f, u;
      r.att[o] = Jr$1(gn$1({}, r.att[o]), { [c]: ((f = t.att[o]) == null ? void 0 : f[c]) || ((u = e.att[o]) == null ? void 0 : u[c]) });
    });
  }), r;
}
function wn$1(t = "", e) {
  yt$2(e);
  const n = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(n)) return t;
  const r = [];
  let o = 0;
  Object.keys(e.att).forEach((c) => {
    const f = Object.keys(e.att[c]).map((l) => ({ ability: l.split("/")[0], action: l.split("/")[1] }));
    f.sort((l, d) => l.action.localeCompare(d.action));
    const u = {};
    f.forEach((l) => {
      u[l.ability] || (u[l.ability] = []), u[l.ability].push(l.action);
    });
    const a = Object.keys(u).map((l) => (o++, `(${o}) '${l}': '${u[l].join("', '")}' for '${c}'.`));
    r.push(a.join(", ").replace(".,", "."));
  });
  const s = r.join(" "), i = `${n}${s}`;
  return `${t ? t + " " : ""}${i}`;
}
function Kc(t) {
  var e;
  const n = kt$2(t);
  yt$2(n);
  const r = (e = n.att) == null ? void 0 : e.eip155;
  return r ? Object.keys(r).map((o) => o.split("/")[1]) : [];
}
function qc(t) {
  const e = kt$2(t);
  yt$2(e);
  const n = [];
  return Object.values(e.att).forEach((r) => {
    Object.values(r).forEach((o) => {
      var s;
      (s = o?.[0]) != null && s.chains && n.push(o[0].chains);
    });
  }), [...new Set(n.flat())];
}
function je(t) {
  if (!t) return;
  const e = t?.[t.length - 1];
  return mn$1(e) ? e : void 0;
}
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
function lo$1(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function vn$1(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function xn$1(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function ot$1(t, ...e) {
  if (!lo$1(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function ho$1(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Fc(t, e) {
  ot$1(t);
  const n = e.outputLen;
  if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
function Pt$2(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Qt$2(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function Zc(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
const Gc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function zc(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function En$1(t) {
  if (typeof t == "string") t = zc(t);
  else if (lo$1(t)) t = Bn$1(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function Yc(t, e) {
  if (e == null || typeof e != "object") throw new Error("options must be defined");
  return Object.assign(t, e);
}
function Wc(t, e) {
  if (t.length !== e.length) return false;
  let n = 0;
  for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
  return n === 0;
}
const Xc = (t, e) => {
  function n(r, ...o) {
    if (ot$1(r), !Gc) throw new Error("Non little-endian hardware is not yet supported");
    if (t.nonceLength !== void 0) {
      const a = o[0];
      if (!a) throw new Error("nonce / iv required");
      t.varSizeNonce ? ot$1(a) : ot$1(a, t.nonceLength);
    }
    const s = t.tagLength;
    s && o[1] !== void 0 && ot$1(o[1]);
    const i = e(r, ...o), c = (a, l) => {
      if (l !== void 0) {
        if (a !== 2) throw new Error("cipher output not supported");
        ot$1(l);
      }
    };
    let f = false;
    return { encrypt(a, l) {
      if (f) throw new Error("cannot encrypt() twice with same key + nonce");
      return f = true, ot$1(a), c(i.encrypt.length, l), i.encrypt(a, l);
    }, decrypt(a, l) {
      if (ot$1(a), s && a.length < s) throw new Error("invalid ciphertext length: smaller than tagLength=" + s);
      return c(i.decrypt.length, l), i.decrypt(a, l);
    } };
  }
  return Object.assign(n, t), n;
};
function po$1(t, e, n = true) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
  if (n && !Qc(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function go$1(t, e, n, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
  const o = BigInt(32), s = BigInt(4294967295), i = Number(n >> o & s), c = Number(n & s), f = 4 , u = 0 ;
  t.setUint32(e + f, i, r), t.setUint32(e + u, c, r);
}
function Jc(t, e, n) {
  vn$1(n);
  const r = new Uint8Array(16), o = Zc(r);
  return go$1(o, 0, BigInt(e), n), go$1(o, 8, BigInt(t), n), r;
}
function Qc(t) {
  return t.byteOffset % 4 === 0;
}
function Bn$1(t) {
  return Uint8Array.from(t);
}
const bo$1 = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), tf = bo$1("expand 16-byte k"), ef = bo$1("expand 32-byte k"), nf = Pt$2(tf), rf = Pt$2(ef);
function K$1(t, e) {
  return t << e | t >>> 32 - e;
}
function An$1(t) {
  return t.byteOffset % 4 === 0;
}
const Le$2 = 64, of = 16, yo$1 = 2 ** 32 - 1, mo$1 = new Uint32Array();
function sf(t, e, n, r, o, s, i, c) {
  const f = o.length, u = new Uint8Array(Le$2), a = Pt$2(u), l = An$1(o) && An$1(s), d = l ? Pt$2(o) : mo$1, h = l ? Pt$2(s) : mo$1;
  for (let y = 0; y < f; i++) {
    if (t(e, n, r, a, i, c), i >= yo$1) throw new Error("arx: counter overflow");
    const m = Math.min(Le$2, f - y);
    if (l && m === Le$2) {
      const v = y / 4;
      if (y % 4 !== 0) throw new Error("arx: invalid block position");
      for (let U = 0, F; U < of; U++) F = v + U, h[F] = d[F] ^ a[U];
      y += Le$2;
      continue;
    }
    for (let v = 0, U; v < m; v++) U = y + v, s[U] = o[U] ^ u[v];
    y += m;
  }
}
function cf(t, e) {
  const { allowShortKeys: n, extendNonceFn: r, counterLength: o, counterRight: s, rounds: i } = Yc({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, e);
  if (typeof t != "function") throw new Error("core must be a function");
  return xn$1(o), xn$1(i), vn$1(s), vn$1(n), (c, f, u, a, l = 0) => {
    ot$1(c), ot$1(f), ot$1(u);
    const d = u.length;
    if (a === void 0 && (a = new Uint8Array(d)), ot$1(a), xn$1(l), l < 0 || l >= yo$1) throw new Error("arx: counter overflow");
    if (a.length < d) throw new Error(`arx: output (${a.length}) is shorter than data (${d})`);
    const h = [];
    let y = c.length, m, v;
    if (y === 32) h.push(m = Bn$1(c)), v = rf;
    else if (y === 16 && n) m = new Uint8Array(32), m.set(c), m.set(c, 16), v = nf, h.push(m);
    else throw new Error(`arx: invalid 32-byte key, got length=${y}`);
    An$1(f) || h.push(f = Bn$1(f));
    const U = Pt$2(m);
    if (r) {
      if (f.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r(v, U, Pt$2(f.subarray(0, 16)), U), f = f.subarray(16);
    }
    const F = 16 - o;
    if (F !== f.length) throw new Error(`arx: nonce must be ${F} or 16 bytes`);
    if (F !== 12) {
      const Z = new Uint8Array(12);
      Z.set(f, s ? 0 : 12 - f.length), f = Z, h.push(f);
    }
    const R = Pt$2(f);
    return sf(t, v, U, R, u, a, l, i), Qt$2(...h), a;
  };
}
const W$2 = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
class ff {
  constructor(e) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = En$1(e), ot$1(e, 32);
    const n = W$2(e, 0), r = W$2(e, 2), o = W$2(e, 4), s = W$2(e, 6), i = W$2(e, 8), c = W$2(e, 10), f = W$2(e, 12), u = W$2(e, 14);
    this.r[0] = n & 8191, this.r[1] = (n >>> 13 | r << 3) & 8191, this.r[2] = (r >>> 10 | o << 6) & 7939, this.r[3] = (o >>> 7 | s << 9) & 8191, this.r[4] = (s >>> 4 | i << 12) & 255, this.r[5] = i >>> 1 & 8190, this.r[6] = (i >>> 14 | c << 2) & 8191, this.r[7] = (c >>> 11 | f << 5) & 8065, this.r[8] = (f >>> 8 | u << 8) & 8191, this.r[9] = u >>> 5 & 127;
    for (let a = 0; a < 8; a++) this.pad[a] = W$2(e, 16 + 2 * a);
  }
  process(e, n, r = false) {
    const o = r ? 0 : 2048, { h: s, r: i } = this, c = i[0], f = i[1], u = i[2], a = i[3], l = i[4], d = i[5], h = i[6], y = i[7], m = i[8], v = i[9], U = W$2(e, n + 0), F = W$2(e, n + 2), R = W$2(e, n + 4), Z = W$2(e, n + 6), H = W$2(e, n + 8), j = W$2(e, n + 10), L = W$2(e, n + 12), k = W$2(e, n + 14);
    let O = s[0] + (U & 8191), T = s[1] + ((U >>> 13 | F << 3) & 8191), C = s[2] + ((F >>> 10 | R << 6) & 8191), _ = s[3] + ((R >>> 7 | Z << 9) & 8191), p = s[4] + ((Z >>> 4 | H << 12) & 8191), b = s[5] + (H >>> 1 & 8191), g = s[6] + ((H >>> 14 | j << 2) & 8191), x = s[7] + ((j >>> 11 | L << 5) & 8191), E = s[8] + ((L >>> 8 | k << 8) & 8191), A = s[9] + (k >>> 5 | o), w = 0, B = w + O * c + T * (5 * v) + C * (5 * m) + _ * (5 * y) + p * (5 * h);
    w = B >>> 13, B &= 8191, B += b * (5 * d) + g * (5 * l) + x * (5 * a) + E * (5 * u) + A * (5 * f), w += B >>> 13, B &= 8191;
    let I = w + O * f + T * c + C * (5 * v) + _ * (5 * m) + p * (5 * y);
    w = I >>> 13, I &= 8191, I += b * (5 * h) + g * (5 * d) + x * (5 * l) + E * (5 * a) + A * (5 * u), w += I >>> 13, I &= 8191;
    let N = w + O * u + T * f + C * c + _ * (5 * v) + p * (5 * m);
    w = N >>> 13, N &= 8191, N += b * (5 * y) + g * (5 * h) + x * (5 * d) + E * (5 * l) + A * (5 * a), w += N >>> 13, N &= 8191;
    let D = w + O * a + T * u + C * f + _ * c + p * (5 * v);
    w = D >>> 13, D &= 8191, D += b * (5 * m) + g * (5 * y) + x * (5 * h) + E * (5 * d) + A * (5 * l), w += D >>> 13, D &= 8191;
    let P = w + O * l + T * a + C * u + _ * f + p * c;
    w = P >>> 13, P &= 8191, P += b * (5 * v) + g * (5 * m) + x * (5 * y) + E * (5 * h) + A * (5 * d), w += P >>> 13, P &= 8191;
    let $ = w + O * d + T * l + C * a + _ * u + p * f;
    w = $ >>> 13, $ &= 8191, $ += b * c + g * (5 * v) + x * (5 * m) + E * (5 * y) + A * (5 * h), w += $ >>> 13, $ &= 8191;
    let V = w + O * h + T * d + C * l + _ * a + p * u;
    w = V >>> 13, V &= 8191, V += b * f + g * c + x * (5 * v) + E * (5 * m) + A * (5 * y), w += V >>> 13, V &= 8191;
    let q = w + O * y + T * h + C * d + _ * l + p * a;
    w = q >>> 13, q &= 8191, q += b * u + g * f + x * c + E * (5 * v) + A * (5 * m), w += q >>> 13, q &= 8191;
    let G = w + O * m + T * y + C * h + _ * d + p * l;
    w = G >>> 13, G &= 8191, G += b * a + g * u + x * f + E * c + A * (5 * v), w += G >>> 13, G &= 8191;
    let M = w + O * v + T * m + C * y + _ * h + p * d;
    w = M >>> 13, M &= 8191, M += b * l + g * a + x * u + E * f + A * c, w += M >>> 13, M &= 8191, w = (w << 2) + w | 0, w = w + B | 0, B = w & 8191, w = w >>> 13, I += w, s[0] = B, s[1] = I, s[2] = N, s[3] = D, s[4] = P, s[5] = $, s[6] = V, s[7] = q, s[8] = G, s[9] = M;
  }
  finalize() {
    const { h: e, pad: n } = this, r = new Uint16Array(10);
    let o = e[1] >>> 13;
    e[1] &= 8191;
    for (let c = 2; c < 10; c++) e[c] += o, o = e[c] >>> 13, e[c] &= 8191;
    e[0] += o * 5, o = e[0] >>> 13, e[0] &= 8191, e[1] += o, o = e[1] >>> 13, e[1] &= 8191, e[2] += o, r[0] = e[0] + 5, o = r[0] >>> 13, r[0] &= 8191;
    for (let c = 1; c < 10; c++) r[c] = e[c] + o, o = r[c] >>> 13, r[c] &= 8191;
    r[9] -= 8192;
    let s = (o ^ 1) - 1;
    for (let c = 0; c < 10; c++) r[c] &= s;
    s = ~s;
    for (let c = 0; c < 10; c++) e[c] = e[c] & s | r[c];
    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
    let i = e[0] + n[0];
    e[0] = i & 65535;
    for (let c = 1; c < 8; c++) i = (e[c] + n[c] | 0) + (i >>> 16) | 0, e[c] = i & 65535;
    Qt$2(r);
  }
  update(e) {
    ho$1(this), e = En$1(e), ot$1(e);
    const { buffer: n, blockLen: r } = this, o = e.length;
    for (let s = 0; s < o; ) {
      const i = Math.min(r - this.pos, o - s);
      if (i === r) {
        for (; r <= o - s; s += r) this.process(e, s);
        continue;
      }
      n.set(e.subarray(s, s + i), this.pos), this.pos += i, s += i, this.pos === r && (this.process(n, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Qt$2(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e) {
    ho$1(this), Fc(e, this), this.finished = true;
    const { buffer: n, h: r } = this;
    let { pos: o } = this;
    if (o) {
      for (n[o++] = 1; o < 16; o++) n[o] = 0;
      this.process(n, 0, true);
    }
    this.finalize();
    let s = 0;
    for (let i = 0; i < 8; i++) e[s++] = r[i] >>> 0, e[s++] = r[i] >>> 8;
    return e;
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
}
function af(t) {
  const e = (r, o) => t(o).update(En$1(r)).digest(), n = t(new Uint8Array(32));
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (r) => t(r), e;
}
const uf = af((t) => new ff(t));
function lf(t, e, n, r, o, s = 20) {
  let i = t[0], c = t[1], f = t[2], u = t[3], a = e[0], l = e[1], d = e[2], h = e[3], y = e[4], m = e[5], v = e[6], U = e[7], F = o, R = n[0], Z = n[1], H = n[2], j = i, L = c, k = f, O = u, T = a, C = l, _ = d, p = h, b = y, g = m, x = v, E = U, A = F, w = R, B = Z, I = H;
  for (let D = 0; D < s; D += 2) j = j + T | 0, A = K$1(A ^ j, 16), b = b + A | 0, T = K$1(T ^ b, 12), j = j + T | 0, A = K$1(A ^ j, 8), b = b + A | 0, T = K$1(T ^ b, 7), L = L + C | 0, w = K$1(w ^ L, 16), g = g + w | 0, C = K$1(C ^ g, 12), L = L + C | 0, w = K$1(w ^ L, 8), g = g + w | 0, C = K$1(C ^ g, 7), k = k + _ | 0, B = K$1(B ^ k, 16), x = x + B | 0, _ = K$1(_ ^ x, 12), k = k + _ | 0, B = K$1(B ^ k, 8), x = x + B | 0, _ = K$1(_ ^ x, 7), O = O + p | 0, I = K$1(I ^ O, 16), E = E + I | 0, p = K$1(p ^ E, 12), O = O + p | 0, I = K$1(I ^ O, 8), E = E + I | 0, p = K$1(p ^ E, 7), j = j + C | 0, I = K$1(I ^ j, 16), x = x + I | 0, C = K$1(C ^ x, 12), j = j + C | 0, I = K$1(I ^ j, 8), x = x + I | 0, C = K$1(C ^ x, 7), L = L + _ | 0, A = K$1(A ^ L, 16), E = E + A | 0, _ = K$1(_ ^ E, 12), L = L + _ | 0, A = K$1(A ^ L, 8), E = E + A | 0, _ = K$1(_ ^ E, 7), k = k + p | 0, w = K$1(w ^ k, 16), b = b + w | 0, p = K$1(p ^ b, 12), k = k + p | 0, w = K$1(w ^ k, 8), b = b + w | 0, p = K$1(p ^ b, 7), O = O + T | 0, B = K$1(B ^ O, 16), g = g + B | 0, T = K$1(T ^ g, 12), O = O + T | 0, B = K$1(B ^ O, 8), g = g + B | 0, T = K$1(T ^ g, 7);
  let N = 0;
  r[N++] = i + j | 0, r[N++] = c + L | 0, r[N++] = f + k | 0, r[N++] = u + O | 0, r[N++] = a + T | 0, r[N++] = l + C | 0, r[N++] = d + _ | 0, r[N++] = h + p | 0, r[N++] = y + b | 0, r[N++] = m + g | 0, r[N++] = v + x | 0, r[N++] = U + E | 0, r[N++] = F + A | 0, r[N++] = R + w | 0, r[N++] = Z + B | 0, r[N++] = H + I | 0;
}
const df = cf(lf, { counterRight: false, counterLength: 4, allowShortKeys: false }), hf = new Uint8Array(16), wo$1 = (t, e) => {
  t.update(e);
  const n = e.length % 16;
  n && t.update(hf.subarray(n));
}, pf = new Uint8Array(32);
function vo$1(t, e, n, r, o) {
  const s = t(e, n, pf), i = uf.create(s);
  o && wo$1(i, o), wo$1(i, r);
  const c = Jc(r.length, o ? o.length : 0, true);
  i.update(c);
  const f = i.digest();
  return Qt$2(s, c), f;
}
const gf = (t) => (e, n, r) => ({ encrypt(s, i) {
  const c = s.length;
  i = po$1(c + 16, i, false), i.set(s);
  const f = i.subarray(0, -16);
  t(e, n, f, f, 1);
  const u = vo$1(t, e, n, f, r);
  return i.set(u, c), Qt$2(u), i;
}, decrypt(s, i) {
  i = po$1(s.length - 16, i, false);
  const c = s.subarray(0, -16), f = s.subarray(-16), u = vo$1(t, e, n, c, r);
  if (!Wc(f, u)) throw new Error("invalid tag");
  return i.set(s.subarray(0, -16)), t(e, n, i, i, 1), Qt$2(u), i;
} }), xo$1 = Xc({ blockSize: 64, nonceLength: 12, tagLength: 16 }, gf(df));
let Eo$1 = class Eo extends Re {
  constructor(e, n) {
    super(), this.finished = false, this.destroyed = false, Ue$2(e);
    const r = pt$1(n);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o = this.blockLen, s = new Uint8Array(o);
    s.set(r.length > o ? e.create().update(r).digest() : r);
    for (let i = 0; i < s.length; i++) s[i] ^= 54;
    this.iHash.update(s), this.oHash = e.create();
    for (let i = 0; i < s.length; i++) s[i] ^= 106;
    this.oHash.update(s), lt$1(s);
  }
  update(e) {
    return Nt$2(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Nt$2(this), ht$1(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: o, destroyed: s, blockLen: i, outputLen: c } = this;
    return e = e, e.finished = o, e.destroyed = s, e.blockLen = i, e.outputLen = c, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
const ke$2 = (t, e, n) => new Eo$1(t, e).update(n).digest();
ke$2.create = (t, e) => new Eo$1(t, e);
function bf(t, e, n) {
  return Ue$2(t), n === void 0 && (n = new Uint8Array(t.outputLen)), ke$2(t, pt$1(n), pt$1(e));
}
const In$1 = Uint8Array.from([0]), Bo$1 = Uint8Array.of();
function yf(t, e, n, r = 32) {
  Ue$2(t), mt$2(r);
  const o = t.outputLen;
  if (r > 255 * o) throw new Error("Length should be <= 255*HashLen");
  const s = Math.ceil(r / o);
  n === void 0 && (n = Bo$1);
  const i = new Uint8Array(s * o), c = ke$2.create(t, e), f = c._cloneInto(), u = new Uint8Array(c.outputLen);
  for (let a = 0; a < s; a++) In$1[0] = a + 1, f.update(a === 0 ? Bo$1 : u).update(n).update(In$1).digestInto(u), i.set(u, o * a), c._cloneInto(f);
  return c.destroy(), f.destroy(), lt$1(u, In$1), i.slice(0, r);
}
const mf = (t, e, n, r, o) => yf(t, bf(t, e, n), r, o), Pe$2 = $e$2, Sn$1 = BigInt(0), On$1 = BigInt(1);
function He$2(t, e = "") {
  if (typeof t != "boolean") {
    const n = e && `"${e}"`;
    throw new Error(n + "expected boolean, got type=" + typeof t);
  }
  return t;
}
function Kt$2(t, e, n = "") {
  const r = Ne(t), o = t?.length, s = e !== void 0;
  if (!r || s && o !== e) {
    const i = n && `"${n}" `, c = s ? ` of length ${e}` : "", f = r ? `length=${o}` : `type=${typeof t}`;
    throw new Error(i + "expected Uint8Array" + c + ", got " + f);
  }
  return t;
}
function De$2(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Ao$1(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? Sn$1 : BigInt("0x" + t);
}
function Ve$3(t) {
  return Ao$1(Jt$2(t));
}
function Me$3(t) {
  return ht$1(t), Ao$1(Jt$2(Uint8Array.from(t).reverse()));
}
function Nn$1(t, e) {
  return _e$1(t.toString(16).padStart(e * 2, "0"));
}
function Un$1(t, e) {
  return Nn$1(t, e).reverse();
}
function tt$2(t, e, n) {
  let r;
  if (typeof e == "string") try {
    r = _e$1(e);
  } catch (s) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s);
  }
  else if (Ne(e)) r = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o = r.length;
  if (typeof n == "number" && o !== n) throw new Error(t + " of length " + n + " expected, got " + o);
  return r;
}
const _n$1 = (t) => typeof t == "bigint" && Sn$1 <= t;
function wf(t, e, n) {
  return _n$1(t) && _n$1(e) && _n$1(n) && e <= t && t < n;
}
function Rn$1(t, e, n, r) {
  if (!wf(e, n, r)) throw new Error("expected valid " + t + ": " + n + " <= n < " + r + ", got " + e);
}
function Io$1(t) {
  let e;
  for (e = 0; t > Sn$1; t >>= On$1, e += 1) ;
  return e;
}
const ye$2 = (t) => (On$1 << BigInt(t)) - On$1;
function vf(t, e, n) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof n != "function") throw new Error("hmacFn must be a function");
  const r = (h) => new Uint8Array(h), o = (h) => Uint8Array.of(h);
  let s = r(t), i = r(t), c = 0;
  const f = () => {
    s.fill(1), i.fill(0), c = 0;
  }, u = (...h) => n(i, s, ...h), a = (h = r(0)) => {
    i = u(o(0), h), s = u(), h.length !== 0 && (i = u(o(1), h), s = u());
  }, l = () => {
    if (c++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let h = 0;
    const y = [];
    for (; h < e; ) {
      s = u();
      const m = s.slice();
      y.push(m), h += s.length;
    }
    return _t$2(...y);
  };
  return (h, y) => {
    f(), a(h);
    let m;
    for (; !(m = y(l())); ) a();
    return f(), m;
  };
}
function Ke$3(t, e, n = {}) {
  if (!t || typeof t != "object") throw new Error("expected valid options object");
  function r(o, s, i) {
    const c = t[o];
    if (i && c === void 0) return;
    const f = typeof c;
    if (f !== s || c === null) throw new Error(`param "${o}" is invalid: expected ${s}, got ${f}`);
  }
  Object.entries(e).forEach(([o, s]) => r(o, s, false)), Object.entries(n).forEach(([o, s]) => r(o, s, true));
}
function So$1(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (n, ...r) => {
    const o = e.get(n);
    if (o !== void 0) return o;
    const s = t(n, ...r);
    return e.set(n, s), s;
  };
}
const st$1 = BigInt(0), nt$1 = BigInt(1), qt$2 = BigInt(2), Oo$1 = BigInt(3), No$1 = BigInt(4), Uo$1 = BigInt(5), xf = BigInt(7), _o$1 = BigInt(8), Ef = BigInt(9), Ro$1 = BigInt(16);
function ct$1(t, e) {
  const n = t % e;
  return n >= st$1 ? n : e + n;
}
function gt$2(t, e, n) {
  let r = t;
  for (; e-- > st$1; ) r *= r, r %= n;
  return r;
}
function $o$1(t, e) {
  if (t === st$1) throw new Error("invert: expected non-zero number");
  if (e <= st$1) throw new Error("invert: expected positive modulus, got " + e);
  let n = ct$1(t, e), r = e, o = st$1, s = nt$1;
  for (; n !== st$1; ) {
    const c = r / n, f = r % n, u = o - s * c;
    r = n, n = f, o = s, s = u;
  }
  if (r !== nt$1) throw new Error("invert: does not exist");
  return ct$1(o, e);
}
function $n$1(t, e, n) {
  if (!t.eql(t.sqr(e), n)) throw new Error("Cannot find square root");
}
function To$1(t, e) {
  const n = (t.ORDER + nt$1) / No$1, r = t.pow(e, n);
  return $n$1(t, r, e), r;
}
function Bf(t, e) {
  const n = (t.ORDER - Uo$1) / _o$1, r = t.mul(e, qt$2), o = t.pow(r, n), s = t.mul(e, o), i = t.mul(t.mul(s, qt$2), o), c = t.mul(s, t.sub(i, t.ONE));
  return $n$1(t, c, e), c;
}
function Af(t) {
  const e = Ht$2(t), n = Co$1(t), r = n(e, e.neg(e.ONE)), o = n(e, r), s = n(e, e.neg(r)), i = (t + xf) / Ro$1;
  return (c, f) => {
    let u = c.pow(f, i), a = c.mul(u, r);
    const l = c.mul(u, o), d = c.mul(u, s), h = c.eql(c.sqr(a), f), y = c.eql(c.sqr(l), f);
    u = c.cmov(u, a, h), a = c.cmov(d, l, y);
    const m = c.eql(c.sqr(a), f), v = c.cmov(u, a, m);
    return $n$1(c, v, f), v;
  };
}
function Co$1(t) {
  if (t < Oo$1) throw new Error("sqrt is not defined for small field");
  let e = t - nt$1, n = 0;
  for (; e % qt$2 === st$1; ) e /= qt$2, n++;
  let r = qt$2;
  const o = Ht$2(t);
  for (; Lo$1(o, r) === 1; ) if (r++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (n === 1) return To$1;
  let s = o.pow(r, e);
  const i = (e + nt$1) / qt$2;
  return function(f, u) {
    if (f.is0(u)) return u;
    if (Lo$1(f, u) !== 1) throw new Error("Cannot find square root");
    let a = n, l = f.mul(f.ONE, s), d = f.pow(u, e), h = f.pow(u, i);
    for (; !f.eql(d, f.ONE); ) {
      if (f.is0(d)) return f.ZERO;
      let y = 1, m = f.sqr(d);
      for (; !f.eql(m, f.ONE); ) if (y++, m = f.sqr(m), y === a) throw new Error("Cannot find square root");
      const v = nt$1 << BigInt(a - y - 1), U = f.pow(l, v);
      a = y, l = f.sqr(U), d = f.mul(d, l), h = f.mul(h, U);
    }
    return h;
  };
}
function If(t) {
  return t % No$1 === Oo$1 ? To$1 : t % _o$1 === Uo$1 ? Bf : t % Ro$1 === Ef ? Af(t) : Co$1(t);
}
const Sf = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Of(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, n = Sf.reduce((r, o) => (r[o] = "function", r), e);
  return Ke$3(t, n), t;
}
function Nf(t, e, n) {
  if (n < st$1) throw new Error("invalid exponent, negatives unsupported");
  if (n === st$1) return t.ONE;
  if (n === nt$1) return e;
  let r = t.ONE, o = e;
  for (; n > st$1; ) n & nt$1 && (r = t.mul(r, o)), o = t.sqr(o), n >>= nt$1;
  return r;
}
function jo$1(t, e, n = false) {
  const r = new Array(e.length).fill(n ? t.ZERO : void 0), o = e.reduce((i, c, f) => t.is0(c) ? i : (r[f] = i, t.mul(i, c)), t.ONE), s = t.inv(o);
  return e.reduceRight((i, c, f) => t.is0(c) ? i : (r[f] = t.mul(i, r[f]), t.mul(i, c)), s), r;
}
function Lo$1(t, e) {
  const n = (t.ORDER - nt$1) / qt$2, r = t.pow(e, n), o = t.eql(r, t.ONE), s = t.eql(r, t.ZERO), i = t.eql(r, t.neg(t.ONE));
  if (!o && !s && !i) throw new Error("invalid Legendre symbol result");
  return o ? 1 : s ? 0 : -1;
}
function ko$1(t, e) {
  e !== void 0 && mt$2(e);
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Ht$2(t, e, n = false, r = {}) {
  if (t <= st$1) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let o, s, i = false, c;
  if (typeof e == "object" && e != null) {
    if (r.sqrt || n) throw new Error("cannot specify opts in two arguments");
    const d = e;
    d.BITS && (o = d.BITS), d.sqrt && (s = d.sqrt), typeof d.isLE == "boolean" && (n = d.isLE), typeof d.modFromBytes == "boolean" && (i = d.modFromBytes), c = d.allowedLengths;
  } else typeof e == "number" && (o = e), r.sqrt && (s = r.sqrt);
  const { nBitLength: f, nByteLength: u } = ko$1(t, o);
  if (u > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a;
  const l = Object.freeze({ ORDER: t, isLE: n, BITS: f, BYTES: u, MASK: ye$2(f), ZERO: st$1, ONE: nt$1, allowedLengths: c, create: (d) => ct$1(d, t), isValid: (d) => {
    if (typeof d != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof d);
    return st$1 <= d && d < t;
  }, is0: (d) => d === st$1, isValidNot0: (d) => !l.is0(d) && l.isValid(d), isOdd: (d) => (d & nt$1) === nt$1, neg: (d) => ct$1(-d, t), eql: (d, h) => d === h, sqr: (d) => ct$1(d * d, t), add: (d, h) => ct$1(d + h, t), sub: (d, h) => ct$1(d - h, t), mul: (d, h) => ct$1(d * h, t), pow: (d, h) => Nf(l, d, h), div: (d, h) => ct$1(d * $o$1(h, t), t), sqrN: (d) => d * d, addN: (d, h) => d + h, subN: (d, h) => d - h, mulN: (d, h) => d * h, inv: (d) => $o$1(d, t), sqrt: s || ((d) => (a || (a = If(t)), a(l, d))), toBytes: (d) => n ? Un$1(d, u) : Nn$1(d, u), fromBytes: (d, h = true) => {
    if (c) {
      if (!c.includes(d.length) || d.length > u) throw new Error("Field.fromBytes: expected " + c + " bytes, got " + d.length);
      const m = new Uint8Array(u);
      m.set(d, n ? 0 : m.length - d.length), d = m;
    }
    if (d.length !== u) throw new Error("Field.fromBytes: expected " + u + " bytes, got " + d.length);
    let y = n ? Me$3(d) : Ve$3(d);
    if (i && (y = ct$1(y, t)), !h && !l.isValid(y)) throw new Error("invalid field element: outside of range 0..ORDER");
    return y;
  }, invertBatch: (d) => jo$1(l, d), cmov: (d, h, y) => y ? h : d });
  return Object.freeze(l);
}
function Po$1(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Ho$1(t) {
  const e = Po$1(t);
  return e + Math.ceil(e / 2);
}
function Uf(t, e, n = false) {
  const r = t.length, o = Po$1(e), s = Ho$1(e);
  if (r < 16 || r < s || r > 1024) throw new Error("expected " + s + "-1024 bytes of input, got " + r);
  const i = n ? Me$3(t) : Ve$3(t), c = ct$1(i, e - nt$1) + nt$1;
  return n ? Un$1(c, o) : Nn$1(c, o);
}
const te$1 = BigInt(0), Ft$2 = BigInt(1);
function qe$1(t, e) {
  const n = e.negate();
  return t ? n : e;
}
function Tn$1(t, e) {
  const n = jo$1(t.Fp, e.map((r) => r.Z));
  return e.map((r, o) => t.fromAffine(r.toAffine(n[o])));
}
function Do$1(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Cn$1(t, e) {
  Do$1(t, e);
  const n = Math.ceil(e / t) + 1, r = 2 ** (t - 1), o = 2 ** t, s = ye$2(t), i = BigInt(t);
  return { windows: n, windowSize: r, mask: s, maxNumber: o, shiftBy: i };
}
function Vo$1(t, e, n) {
  const { windowSize: r, mask: o, maxNumber: s, shiftBy: i } = n;
  let c = Number(t & o), f = t >> i;
  c > r && (c -= s, f += Ft$2);
  const u = e * r, a = u + Math.abs(c) - 1, l = c === 0, d = c < 0, h = e % 2 !== 0;
  return { nextN: f, offset: a, isZero: l, isNeg: d, isNegF: h, offsetF: u };
}
function _f(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n, r) => {
    if (!(n instanceof e)) throw new Error("invalid point at index " + r);
  });
}
function Rf(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n, r) => {
    if (!e.isValid(n)) throw new Error("invalid scalar at index " + r);
  });
}
const jn$1 = /* @__PURE__ */ new WeakMap(), Mo$1 = /* @__PURE__ */ new WeakMap();
function Ln$1(t) {
  return Mo$1.get(t) || 1;
}
function Ko$1(t) {
  if (t !== te$1) throw new Error("invalid wNAF");
}
class $f {
  constructor(e, n) {
    this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = n;
  }
  _unsafeLadder(e, n, r = this.ZERO) {
    let o = e;
    for (; n > te$1; ) n & Ft$2 && (r = r.add(o)), o = o.double(), n >>= Ft$2;
    return r;
  }
  precomputeWindow(e, n) {
    const { windows: r, windowSize: o } = Cn$1(n, this.bits), s = [];
    let i = e, c = i;
    for (let f = 0; f < r; f++) {
      c = i, s.push(c);
      for (let u = 1; u < o; u++) c = c.add(i), s.push(c);
      i = c.double();
    }
    return s;
  }
  wNAF(e, n, r) {
    if (!this.Fn.isValid(r)) throw new Error("invalid scalar");
    let o = this.ZERO, s = this.BASE;
    const i = Cn$1(e, this.bits);
    for (let c = 0; c < i.windows; c++) {
      const { nextN: f, offset: u, isZero: a, isNeg: l, isNegF: d, offsetF: h } = Vo$1(r, c, i);
      r = f, a ? s = s.add(qe$1(d, n[h])) : o = o.add(qe$1(l, n[u]));
    }
    return Ko$1(r), { p: o, f: s };
  }
  wNAFUnsafe(e, n, r, o = this.ZERO) {
    const s = Cn$1(e, this.bits);
    for (let i = 0; i < s.windows && r !== te$1; i++) {
      const { nextN: c, offset: f, isZero: u, isNeg: a } = Vo$1(r, i, s);
      if (r = c, !u) {
        const l = n[f];
        o = o.add(a ? l.negate() : l);
      }
    }
    return Ko$1(r), o;
  }
  getPrecomputes(e, n, r) {
    let o = jn$1.get(n);
    return o || (o = this.precomputeWindow(n, e), e !== 1 && (typeof r == "function" && (o = r(o)), jn$1.set(n, o))), o;
  }
  cached(e, n, r) {
    const o = Ln$1(e);
    return this.wNAF(o, this.getPrecomputes(o, e, r), n);
  }
  unsafe(e, n, r, o) {
    const s = Ln$1(e);
    return s === 1 ? this._unsafeLadder(e, n, o) : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), n, o);
  }
  createCache(e, n) {
    Do$1(n, this.bits), Mo$1.set(e, n), jn$1.delete(e);
  }
  hasCache(e) {
    return Ln$1(e) !== 1;
  }
}
function Tf(t, e, n, r) {
  let o = e, s = t.ZERO, i = t.ZERO;
  for (; n > te$1 || r > te$1; ) n & Ft$2 && (s = s.add(o)), r & Ft$2 && (i = i.add(o)), o = o.double(), n >>= Ft$2, r >>= Ft$2;
  return { p1: s, p2: i };
}
function Cf(t, e, n, r) {
  _f(n, t), Rf(r, e);
  const o = n.length, s = r.length;
  if (o !== s) throw new Error("arrays of points and scalars must have equal length");
  const i = t.ZERO, c = Io$1(BigInt(o));
  let f = 1;
  c > 12 ? f = c - 3 : c > 4 ? f = c - 2 : c > 0 && (f = 2);
  const u = ye$2(f), a = new Array(Number(u) + 1).fill(i), l = Math.floor((e.BITS - 1) / f) * f;
  let d = i;
  for (let h = l; h >= 0; h -= f) {
    a.fill(i);
    for (let m = 0; m < s; m++) {
      const v = r[m], U = Number(v >> BigInt(h) & u);
      a[U] = a[U].add(n[m]);
    }
    let y = i;
    for (let m = a.length - 1, v = i; m > 0; m--) v = v.add(a[m]), y = y.add(v);
    if (d = d.add(y), h !== 0) for (let m = 0; m < f; m++) d = d.double();
  }
  return d;
}
function qo$1(t, e, n) {
  if (e) {
    if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return Of(e), e;
  } else return Ht$2(t, { isLE: n });
}
function jf(t, e, n = {}, r) {
  if (r === void 0 && (r = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
  for (const f of ["p", "n", "h"]) {
    const u = e[f];
    if (!(typeof u == "bigint" && u > te$1)) throw new Error(`CURVE.${f} must be positive bigint`);
  }
  const o = qo$1(e.p, n.Fp, r), s = qo$1(e.n, n.Fn, r), c = ["Gx", "Gy", "a", "b" ];
  for (const f of c) if (!o.isValid(e[f])) throw new Error(`CURVE.${f} must be valid field element of CURVE.Fp`);
  return e = Object.freeze(Object.assign({}, e)), { CURVE: e, Fp: o, Fn: s };
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8), kr$1("HashToScalar-");
const me$3 = BigInt(0), ee$2 = BigInt(1), Fe$2 = BigInt(2);
function Lf(t) {
  return Ke$3(t, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t });
}
function kf(t) {
  const e = Lf(t), { P: n, type: r, adjustScalarBytes: o, powPminus2: s, randomBytes: i } = e, c = r === "x25519";
  if (!c && r !== "x448") throw new Error("invalid type");
  const f = i || Mt$2, u = c ? 255 : 448, a = c ? 32 : 56, l = BigInt(c ? 9 : 5), d = BigInt(c ? 121665 : 39081), h = c ? Fe$2 ** BigInt(254) : Fe$2 ** BigInt(447), y = c ? BigInt(8) * Fe$2 ** BigInt(251) - ee$2 : BigInt(4) * Fe$2 ** BigInt(445) - ee$2, m = h + y + ee$2, v = (p) => ct$1(p, n), U = F(l);
  function F(p) {
    return Un$1(v(p), a);
  }
  function R(p) {
    const b = tt$2("u coordinate", p, a);
    return c && (b[31] &= 127), v(Me$3(b));
  }
  function Z(p) {
    return Me$3(o(tt$2("scalar", p, a)));
  }
  function H(p, b) {
    const g = k(R(b), Z(p));
    if (g === me$3) throw new Error("invalid private or public key received");
    return F(g);
  }
  function j(p) {
    return H(p, U);
  }
  function L(p, b, g) {
    const x = v(p * (b - g));
    return b = v(b - x), g = v(g + x), { x_2: b, x_3: g };
  }
  function k(p, b) {
    Rn$1("u", p, me$3, n), Rn$1("scalar", b, h, m);
    const g = b, x = p;
    let E = ee$2, A = me$3, w = p, B = ee$2, I = me$3;
    for (let D = BigInt(u - 1); D >= me$3; D--) {
      const P = g >> D & ee$2;
      I ^= P, { x_2: E, x_3: w } = L(I, E, w), { x_2: A, x_3: B } = L(I, A, B), I = P;
      const $ = E + A, V = v($ * $), q = E - A, G = v(q * q), M = V - G, Y = w + B, Yt = w - B, ce = v(Yt * $), fe = v(Y * q), Qn = ce + fe, tr = ce - fe;
      w = v(Qn * Qn), B = v(x * v(tr * tr)), E = v(V * G), A = v(M * (V + v(d * M)));
    }
    (({ x_2: E, x_3: w } = L(I, E, w))), { x_2: A, x_3: B } = L(I, A, B);
    const N = s(A);
    return v(E * N);
  }
  const O = { secretKey: a, publicKey: a, seed: a }, T = (p = f(a)) => (ht$1(p, O.seed), p);
  function C(p) {
    const b = T(p);
    return { secretKey: b, publicKey: j(b) };
  }
  return { keygen: C, getSharedSecret: (p, b) => H(p, b), getPublicKey: (p) => j(p), scalarMult: H, scalarMultBase: j, utils: { randomSecretKey: T, randomPrivateKey: T }, GuBytes: U.slice(), lengths: O };
}
const Pf = BigInt(1), Fo$1 = BigInt(2), Hf = BigInt(3), Df = BigInt(5); BigInt(8); const Zo$1 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), Mf = { p: Zo$1, n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
function Kf(t) {
  const e = BigInt(10), n = BigInt(20), r = BigInt(40), o = BigInt(80), s = Zo$1, c = t * t % s * t % s, f = gt$2(c, Fo$1, s) * c % s, u = gt$2(f, Pf, s) * t % s, a = gt$2(u, Df, s) * u % s, l = gt$2(a, e, s) * a % s, d = gt$2(l, n, s) * l % s, h = gt$2(d, r, s) * d % s, y = gt$2(h, o, s) * h % s, m = gt$2(y, o, s) * h % s, v = gt$2(m, e, s) * a % s;
  return { pow_p_5_8: gt$2(v, Fo$1, s) * t % s, b2: c };
}
function qf(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
const Ff = Ht$2(Mf.p, { isLE: true }), kn$1 = (() => {
  const t = Ff.ORDER;
  return kf({ P: t, type: "x25519", powPminus2: (e) => {
    const { pow_p_5_8: n, b2: r } = Kf(e);
    return ct$1(gt$2(n, Hf, t) * r, t);
  }, adjustScalarBytes: qf });
})(), Go$1 = (t, e) => (t + (t >= 0 ? e : -e) / zo$1) / e;
function Zf(t, e, n) {
  const [[r, o], [s, i]] = e, c = Go$1(i * t, n), f = Go$1(-o * t, n);
  let u = t - c * r - f * s, a = -c * o - f * i;
  const l = u < Et$2, d = a < Et$2;
  l && (u = -u), d && (a = -a);
  const h = ye$2(Math.ceil(Io$1(n) / 2)) + ne$1;
  if (u < Et$2 || u >= h || a < Et$2 || a >= h) throw new Error("splitScalar (endomorphism): failed, k=" + t);
  return { k1neg: l, k1: u, k2neg: d, k2: a };
}
function Pn$1(t) {
  if (!["compact", "recovered", "der"].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
  return t;
}
function Hn$1(t, e) {
  const n = {};
  for (let r of Object.keys(e)) n[r] = t[r] === void 0 ? e[r] : t[r];
  return He$2(n.lowS, "lowS"), He$2(n.prehash, "prehash"), n.format !== void 0 && Pn$1(n.format), n;
}
class Gf extends Error {
  constructor(e = "") {
    super(e);
  }
}
const xt$2 = { Err: Gf, _tlv: { encode: (t, e) => {
  const { Err: n } = xt$2;
  if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
  if (e.length & 1) throw new n("tlv.encode: unpadded data");
  const r = e.length / 2, o = De$2(r);
  if (o.length / 2 & 128) throw new n("tlv.encode: long form length too big");
  const s = r > 127 ? De$2(o.length / 2 | 128) : "";
  return De$2(t) + s + o + e;
}, decode(t, e) {
  const { Err: n } = xt$2;
  let r = 0;
  if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
  if (e.length < 2 || e[r++] !== t) throw new n("tlv.decode: wrong tlv");
  const o = e[r++], s = !!(o & 128);
  let i = 0;
  if (!s) i = o;
  else {
    const f = o & 127;
    if (!f) throw new n("tlv.decode(long): indefinite length not supported");
    if (f > 4) throw new n("tlv.decode(long): byte length is too big");
    const u = e.subarray(r, r + f);
    if (u.length !== f) throw new n("tlv.decode: length bytes not complete");
    if (u[0] === 0) throw new n("tlv.decode(long): zero leftmost byte");
    for (const a of u) i = i << 8 | a;
    if (r += f, i < 128) throw new n("tlv.decode(long): not minimal encoding");
  }
  const c = e.subarray(r, r + i);
  if (c.length !== i) throw new n("tlv.decode: wrong value length");
  return { v: c, l: e.subarray(r + i) };
} }, _int: { encode(t) {
  const { Err: e } = xt$2;
  if (t < Et$2) throw new e("integer: negative integers are not allowed");
  let n = De$2(t);
  if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return n;
}, decode(t) {
  const { Err: e } = xt$2;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return Ve$3(t);
} }, toSig(t) {
  const { Err: e, _int: n, _tlv: r } = xt$2, o = tt$2("signature", t), { v: s, l: i } = r.decode(48, o);
  if (i.length) throw new e("invalid signature: left bytes after parsing");
  const { v: c, l: f } = r.decode(2, s), { v: u, l: a } = r.decode(2, f);
  if (a.length) throw new e("invalid signature: left bytes after parsing");
  return { r: n.decode(c), s: n.decode(u) };
}, hexFromSig(t) {
  const { _tlv: e, _int: n } = xt$2, r = e.encode(2, n.encode(t.r)), o = e.encode(2, n.encode(t.s)), s = r + o;
  return e.encode(48, s);
} }, Et$2 = BigInt(0), ne$1 = BigInt(1), zo$1 = BigInt(2), Ze$2 = BigInt(3), zf = BigInt(4);
function re$1(t, e) {
  const { BYTES: n } = t;
  let r;
  if (typeof e == "bigint") r = e;
  else {
    let o = tt$2("private key", e);
    try {
      r = t.fromBytes(o);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`);
    }
  }
  if (!t.isValidNot0(r)) throw new Error("invalid private key: out of range [1..N-1]");
  return r;
}
function Yf(t, e = {}) {
  const n = jf("weierstrass", t, e), { Fp: r, Fn: o } = n;
  let s = n.CURVE;
  const { h: i, n: c } = s;
  Ke$3(e, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
  const { endo: f } = e;
  if (f && (!r.is0(s.a) || typeof f.beta != "bigint" || !Array.isArray(f.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  const u = Wo$1(r, o);
  function a() {
    if (!r.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function l(_, p, b) {
    const { x: g, y: x } = p.toAffine(), E = r.toBytes(g);
    if (He$2(b, "isCompressed"), b) {
      a();
      const A = !r.isOdd(x);
      return _t$2(Yo$1(A), E);
    } else return _t$2(Uint8Array.of(4), E, r.toBytes(x));
  }
  function d(_) {
    Kt$2(_, void 0, "Point");
    const { publicKey: p, publicKeyUncompressed: b } = u, g = _.length, x = _[0], E = _.subarray(1);
    if (g === p && (x === 2 || x === 3)) {
      const A = r.fromBytes(E);
      if (!r.isValid(A)) throw new Error("bad point: is not on curve, wrong x");
      const w = m(A);
      let B;
      try {
        B = r.sqrt(w);
      } catch (D) {
        const P = D instanceof Error ? ": " + D.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + P);
      }
      a();
      const I = r.isOdd(B);
      return (x & 1) === 1 !== I && (B = r.neg(B)), { x: A, y: B };
    } else if (g === b && x === 4) {
      const A = r.BYTES, w = r.fromBytes(E.subarray(0, A)), B = r.fromBytes(E.subarray(A, A * 2));
      if (!v(w, B)) throw new Error("bad point: is not on curve");
      return { x: w, y: B };
    } else throw new Error(`bad point: got length ${g}, expected compressed=${p} or uncompressed=${b}`);
  }
  const h = e.toBytes || l, y = e.fromBytes || d;
  function m(_) {
    const p = r.sqr(_), b = r.mul(p, _);
    return r.add(r.add(b, r.mul(_, s.a)), s.b);
  }
  function v(_, p) {
    const b = r.sqr(p), g = m(_);
    return r.eql(b, g);
  }
  if (!v(s.Gx, s.Gy)) throw new Error("bad curve params: generator point");
  const U = r.mul(r.pow(s.a, Ze$2), zf), F = r.mul(r.sqr(s.b), BigInt(27));
  if (r.is0(r.add(U, F))) throw new Error("bad curve params: a or b");
  function R(_, p, b = false) {
    if (!r.isValid(p) || b && r.is0(p)) throw new Error(`bad point coordinate ${_}`);
    return p;
  }
  function Z(_) {
    if (!(_ instanceof O)) throw new Error("ProjectivePoint expected");
  }
  function H(_) {
    if (!f || !f.basises) throw new Error("no endo");
    return Zf(_, f.basises, o.ORDER);
  }
  const j = So$1((_, p) => {
    const { X: b, Y: g, Z: x } = _;
    if (r.eql(x, r.ONE)) return { x: b, y: g };
    const E = _.is0();
    p == null && (p = E ? r.ONE : r.inv(x));
    const A = r.mul(b, p), w = r.mul(g, p), B = r.mul(x, p);
    if (E) return { x: r.ZERO, y: r.ZERO };
    if (!r.eql(B, r.ONE)) throw new Error("invZ was invalid");
    return { x: A, y: w };
  }), L = So$1((_) => {
    if (_.is0()) {
      if (e.allowInfinityPoint && !r.is0(_.Y)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: p, y: b } = _.toAffine();
    if (!r.isValid(p) || !r.isValid(b)) throw new Error("bad point: x or y not field elements");
    if (!v(p, b)) throw new Error("bad point: equation left != right");
    if (!_.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  function k(_, p, b, g, x) {
    return b = new O(r.mul(b.X, _), b.Y, b.Z), p = qe$1(g, p), b = qe$1(x, b), p.add(b);
  }
  class O {
    constructor(p, b, g) {
      this.X = R("x", p), this.Y = R("y", b, true), this.Z = R("z", g), Object.freeze(this);
    }
    static CURVE() {
      return s;
    }
    static fromAffine(p) {
      const { x: b, y: g } = p || {};
      if (!p || !r.isValid(b) || !r.isValid(g)) throw new Error("invalid affine point");
      if (p instanceof O) throw new Error("projective point not allowed");
      return r.is0(b) && r.is0(g) ? O.ZERO : new O(b, g, r.ONE);
    }
    static fromBytes(p) {
      const b = O.fromAffine(y(Kt$2(p, void 0, "point")));
      return b.assertValidity(), b;
    }
    static fromHex(p) {
      return O.fromBytes(tt$2("pointHex", p));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(p = 8, b = true) {
      return C.createCache(this, p), b || this.multiply(Ze$2), this;
    }
    assertValidity() {
      L(this);
    }
    hasEvenY() {
      const { y: p } = this.toAffine();
      if (!r.isOdd) throw new Error("Field doesn't support isOdd");
      return !r.isOdd(p);
    }
    equals(p) {
      Z(p);
      const { X: b, Y: g, Z: x } = this, { X: E, Y: A, Z: w } = p, B = r.eql(r.mul(b, w), r.mul(E, x)), I = r.eql(r.mul(g, w), r.mul(A, x));
      return B && I;
    }
    negate() {
      return new O(this.X, r.neg(this.Y), this.Z);
    }
    double() {
      const { a: p, b } = s, g = r.mul(b, Ze$2), { X: x, Y: E, Z: A } = this;
      let w = r.ZERO, B = r.ZERO, I = r.ZERO, N = r.mul(x, x), D = r.mul(E, E), P = r.mul(A, A), $ = r.mul(x, E);
      return $ = r.add($, $), I = r.mul(x, A), I = r.add(I, I), w = r.mul(p, I), B = r.mul(g, P), B = r.add(w, B), w = r.sub(D, B), B = r.add(D, B), B = r.mul(w, B), w = r.mul($, w), I = r.mul(g, I), P = r.mul(p, P), $ = r.sub(N, P), $ = r.mul(p, $), $ = r.add($, I), I = r.add(N, N), N = r.add(I, N), N = r.add(N, P), N = r.mul(N, $), B = r.add(B, N), P = r.mul(E, A), P = r.add(P, P), N = r.mul(P, $), w = r.sub(w, N), I = r.mul(P, D), I = r.add(I, I), I = r.add(I, I), new O(w, B, I);
    }
    add(p) {
      Z(p);
      const { X: b, Y: g, Z: x } = this, { X: E, Y: A, Z: w } = p;
      let B = r.ZERO, I = r.ZERO, N = r.ZERO;
      const D = s.a, P = r.mul(s.b, Ze$2);
      let $ = r.mul(b, E), V = r.mul(g, A), q = r.mul(x, w), G = r.add(b, g), M = r.add(E, A);
      G = r.mul(G, M), M = r.add($, V), G = r.sub(G, M), M = r.add(b, x);
      let Y = r.add(E, w);
      return M = r.mul(M, Y), Y = r.add($, q), M = r.sub(M, Y), Y = r.add(g, x), B = r.add(A, w), Y = r.mul(Y, B), B = r.add(V, q), Y = r.sub(Y, B), N = r.mul(D, M), B = r.mul(P, q), N = r.add(B, N), B = r.sub(V, N), N = r.add(V, N), I = r.mul(B, N), V = r.add($, $), V = r.add(V, $), q = r.mul(D, q), M = r.mul(P, M), V = r.add(V, q), q = r.sub($, q), q = r.mul(D, q), M = r.add(M, q), $ = r.mul(V, M), I = r.add(I, $), $ = r.mul(Y, M), B = r.mul(G, B), B = r.sub(B, $), $ = r.mul(G, V), N = r.mul(Y, N), N = r.add(N, $), new O(B, I, N);
    }
    subtract(p) {
      return this.add(p.negate());
    }
    is0() {
      return this.equals(O.ZERO);
    }
    multiply(p) {
      const { endo: b } = e;
      if (!o.isValidNot0(p)) throw new Error("invalid scalar: out of range");
      let g, x;
      const E = (A) => C.cached(this, A, (w) => Tn$1(O, w));
      if (b) {
        const { k1neg: A, k1: w, k2neg: B, k2: I } = H(p), { p: N, f: D } = E(w), { p: P, f: $ } = E(I);
        x = D.add($), g = k(b.beta, N, P, A, B);
      } else {
        const { p: A, f: w } = E(p);
        g = A, x = w;
      }
      return Tn$1(O, [g, x])[0];
    }
    multiplyUnsafe(p) {
      const { endo: b } = e, g = this;
      if (!o.isValid(p)) throw new Error("invalid scalar: out of range");
      if (p === Et$2 || g.is0()) return O.ZERO;
      if (p === ne$1) return g;
      if (C.hasCache(this)) return this.multiply(p);
      if (b) {
        const { k1neg: x, k1: E, k2neg: A, k2: w } = H(p), { p1: B, p2: I } = Tf(O, g, E, w);
        return k(b.beta, B, I, x, A);
      } else return C.unsafe(g, p);
    }
    multiplyAndAddUnsafe(p, b, g) {
      const x = this.multiplyUnsafe(b).add(p.multiplyUnsafe(g));
      return x.is0() ? void 0 : x;
    }
    toAffine(p) {
      return j(this, p);
    }
    isTorsionFree() {
      const { isTorsionFree: p } = e;
      return i === ne$1 ? true : p ? p(O, this) : C.unsafe(this, c).is0();
    }
    clearCofactor() {
      const { clearCofactor: p } = e;
      return i === ne$1 ? this : p ? p(O, this) : this.multiplyUnsafe(i);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i).is0();
    }
    toBytes(p = true) {
      return He$2(p, "isCompressed"), this.assertValidity(), h(O, this, p);
    }
    toHex(p = true) {
      return Jt$2(this.toBytes(p));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(p = true) {
      return this.toBytes(p);
    }
    _setWindowSize(p) {
      this.precompute(p);
    }
    static normalizeZ(p) {
      return Tn$1(O, p);
    }
    static msm(p, b) {
      return Cf(O, o, p, b);
    }
    static fromPrivateKey(p) {
      return O.BASE.multiply(re$1(o, p));
    }
  }
  O.BASE = new O(s.Gx, s.Gy, r.ONE), O.ZERO = new O(r.ZERO, r.ONE, r.ZERO), O.Fp = r, O.Fn = o;
  const T = o.BITS, C = new $f(O, e.endo ? Math.ceil(T / 2) : T);
  return O.BASE.precompute(8), O;
}
function Yo$1(t) {
  return Uint8Array.of(t ? 2 : 3);
}
function Wo$1(t, e) {
  return { secretKey: e.BYTES, publicKey: 1 + t.BYTES, publicKeyUncompressed: 1 + 2 * t.BYTES, publicKeyHasPrefix: true, signature: 2 * e.BYTES };
}
function Wf(t, e = {}) {
  const { Fn: n } = t, r = e.randomBytes || Mt$2, o = Object.assign(Wo$1(t.Fp, n), { seed: Ho$1(n.ORDER) });
  function s(h) {
    try {
      return !!re$1(n, h);
    } catch {
      return false;
    }
  }
  function i(h, y) {
    const { publicKey: m, publicKeyUncompressed: v } = o;
    try {
      const U = h.length;
      return y === true && U !== m || y === false && U !== v ? false : !!t.fromBytes(h);
    } catch {
      return false;
    }
  }
  function c(h = r(o.seed)) {
    return Uf(Kt$2(h, o.seed, "seed"), n.ORDER);
  }
  function f(h, y = true) {
    return t.BASE.multiply(re$1(n, h)).toBytes(y);
  }
  function u(h) {
    const y = c(h);
    return { secretKey: y, publicKey: f(y) };
  }
  function a(h) {
    if (typeof h == "bigint") return false;
    if (h instanceof t) return true;
    const { secretKey: y, publicKey: m, publicKeyUncompressed: v } = o;
    if (n.allowedLengths || y === m) return;
    const U = tt$2("key", h).length;
    return U === m || U === v;
  }
  function l(h, y, m = true) {
    if (a(h) === true) throw new Error("first arg must be private key");
    if (a(y) === false) throw new Error("second arg must be public key");
    const v = re$1(n, h);
    return t.fromHex(y).multiply(v).toBytes(m);
  }
  return Object.freeze({ getPublicKey: f, getSharedSecret: l, keygen: u, Point: t, utils: { isValidSecretKey: s, isValidPublicKey: i, randomSecretKey: c, isValidPrivateKey: s, randomPrivateKey: c, normPrivateKeyToScalar: (h) => re$1(n, h), precompute(h = 8, y = t.BASE) {
    return y.precompute(h, false);
  } }, lengths: o });
}
function Xf(t, e, n = {}) {
  Ue$2(e), Ke$3(n, {}, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
  const r = n.randomBytes || Mt$2, o = n.hmac || ((b, ...g) => ke$2(e, b, _t$2(...g))), { Fp: s, Fn: i } = t, { ORDER: c, BITS: f } = i, { keygen: u, getPublicKey: a, getSharedSecret: l, utils: d, lengths: h } = Wf(t, n), y = { prehash: false, lowS: typeof n.lowS == "boolean" ? n.lowS : false, format: void 0, extraEntropy: false }, m = "compact";
  function v(b) {
    const g = c >> ne$1;
    return b > g;
  }
  function U(b, g) {
    if (!i.isValidNot0(g)) throw new Error(`invalid signature ${b}: out of range 1..Point.Fn.ORDER`);
    return g;
  }
  function F(b, g) {
    Pn$1(g);
    const x = h.signature, E = g === "compact" ? x : g === "recovered" ? x + 1 : void 0;
    return Kt$2(b, E, `${g} signature`);
  }
  class R {
    constructor(g, x, E) {
      this.r = U("r", g), this.s = U("s", x), E != null && (this.recovery = E), Object.freeze(this);
    }
    static fromBytes(g, x = m) {
      F(g, x);
      let E;
      if (x === "der") {
        const { r: I, s: N } = xt$2.toSig(Kt$2(g));
        return new R(I, N);
      }
      x === "recovered" && (E = g[0], x = "compact", g = g.subarray(1));
      const A = i.BYTES, w = g.subarray(0, A), B = g.subarray(A, A * 2);
      return new R(i.fromBytes(w), i.fromBytes(B), E);
    }
    static fromHex(g, x) {
      return this.fromBytes(_e$1(g), x);
    }
    addRecoveryBit(g) {
      return new R(this.r, this.s, g);
    }
    recoverPublicKey(g) {
      const x = s.ORDER, { r: E, s: A, recovery: w } = this;
      if (w == null || ![0, 1, 2, 3].includes(w)) throw new Error("recovery id invalid");
      if (c * zo$1 < x && w > 1) throw new Error("recovery id is ambiguous for h>1 curve");
      const I = w === 2 || w === 3 ? E + c : E;
      if (!s.isValid(I)) throw new Error("recovery id 2 or 3 invalid");
      const N = s.toBytes(I), D = t.fromBytes(_t$2(Yo$1((w & 1) === 0), N)), P = i.inv(I), $ = H(tt$2("msgHash", g)), V = i.create(-$ * P), q = i.create(A * P), G = t.BASE.multiplyUnsafe(V).add(D.multiplyUnsafe(q));
      if (G.is0()) throw new Error("point at infinify");
      return G.assertValidity(), G;
    }
    hasHighS() {
      return v(this.s);
    }
    toBytes(g = m) {
      if (Pn$1(g), g === "der") return _e$1(xt$2.hexFromSig(this));
      const x = i.toBytes(this.r), E = i.toBytes(this.s);
      if (g === "recovered") {
        if (this.recovery == null) throw new Error("recovery bit must be present");
        return _t$2(Uint8Array.of(this.recovery), x, E);
      }
      return _t$2(x, E);
    }
    toHex(g) {
      return Jt$2(this.toBytes(g));
    }
    assertValidity() {
    }
    static fromCompact(g) {
      return R.fromBytes(tt$2("sig", g), "compact");
    }
    static fromDER(g) {
      return R.fromBytes(tt$2("sig", g), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new R(this.r, i.neg(this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return Jt$2(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return Jt$2(this.toBytes("compact"));
    }
  }
  const Z = n.bits2int || function(g) {
    if (g.length > 8192) throw new Error("input is too large");
    const x = Ve$3(g), E = g.length * 8 - f;
    return E > 0 ? x >> BigInt(E) : x;
  }, H = n.bits2int_modN || function(g) {
    return i.create(Z(g));
  }, j = ye$2(f);
  function L(b) {
    return Rn$1("num < 2^" + f, b, Et$2, j), i.toBytes(b);
  }
  function k(b, g) {
    return Kt$2(b, void 0, "message"), g ? Kt$2(e(b), void 0, "prehashed message") : b;
  }
  function O(b, g, x) {
    if (["recovered", "canonical"].some((V) => V in x)) throw new Error("sign() legacy options not supported");
    const { lowS: E, prehash: A, extraEntropy: w } = Hn$1(x, y);
    b = k(b, A);
    const B = H(b), I = re$1(i, g), N = [L(I), L(B)];
    if (w != null && w !== false) {
      const V = w === true ? r(h.secretKey) : w;
      N.push(tt$2("extraEntropy", V));
    }
    const D = _t$2(...N), P = B;
    function $(V) {
      const q = Z(V);
      if (!i.isValidNot0(q)) return;
      const G = i.inv(q), M = t.BASE.multiply(q).toAffine(), Y = i.create(M.x);
      if (Y === Et$2) return;
      const Yt = i.create(G * i.create(P + Y * I));
      if (Yt === Et$2) return;
      let ce = (M.x === Y ? 0 : 2) | Number(M.y & ne$1), fe = Yt;
      return E && v(Yt) && (fe = i.neg(Yt), ce ^= 1), new R(Y, fe, ce);
    }
    return { seed: D, k2sig: $ };
  }
  function T(b, g, x = {}) {
    b = tt$2("message", b);
    const { seed: E, k2sig: A } = O(b, g, x);
    return vf(e.outputLen, i.BYTES, o)(E, A);
  }
  function C(b) {
    let g;
    const x = typeof b == "string" || Ne(b), E = !x && b !== null && typeof b == "object" && typeof b.r == "bigint" && typeof b.s == "bigint";
    if (!x && !E) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (E) g = new R(b.r, b.s);
    else if (x) {
      try {
        g = R.fromBytes(tt$2("sig", b), "der");
      } catch (A) {
        if (!(A instanceof xt$2.Err)) throw A;
      }
      if (!g) try {
        g = R.fromBytes(tt$2("sig", b), "compact");
      } catch {
        return false;
      }
    }
    return g || false;
  }
  function _(b, g, x, E = {}) {
    const { lowS: A, prehash: w, format: B } = Hn$1(E, y);
    if (x = tt$2("publicKey", x), g = k(tt$2("message", g), w), "strict" in E) throw new Error("options.strict was renamed to lowS");
    const I = B === void 0 ? C(b) : R.fromBytes(tt$2("sig", b), B);
    if (I === false) return false;
    try {
      const N = t.fromBytes(x);
      if (A && I.hasHighS()) return false;
      const { r: D, s: P } = I, $ = H(g), V = i.inv(P), q = i.create($ * V), G = i.create(D * V), M = t.BASE.multiplyUnsafe(q).add(N.multiplyUnsafe(G));
      return M.is0() ? false : i.create(M.x) === D;
    } catch {
      return false;
    }
  }
  function p(b, g, x = {}) {
    const { prehash: E } = Hn$1(x, y);
    return g = k(g, E), R.fromBytes(b, "recovered").recoverPublicKey(g).toBytes();
  }
  return Object.freeze({ keygen: u, getPublicKey: a, getSharedSecret: l, utils: d, lengths: h, Point: t, sign: T, verify: _, recoverPublicKey: p, Signature: R, hash: e });
}
function Jf(t) {
  const e = { a: t.a, b: t.b, p: t.Fp.ORDER, n: t.n, h: t.h, Gx: t.Gx, Gy: t.Gy }, n = t.Fp;
  let r = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((i) => Math.ceil(i / 2)))) : void 0;
  const o = Ht$2(e.n, { BITS: t.nBitLength, allowedLengths: r, modFromBytes: t.wrapPrivateKey }), s = { Fp: n, Fn: o, allowInfinityPoint: t.allowInfinityPoint, endo: t.endo, isTorsionFree: t.isTorsionFree, clearCofactor: t.clearCofactor, fromBytes: t.fromBytes, toBytes: t.toBytes };
  return { CURVE: e, curveOpts: s };
}
function Qf(t) {
  const { CURVE: e, curveOpts: n } = Jf(t), r = { hmac: t.hmac, randomBytes: t.randomBytes, lowS: t.lowS, bits2int: t.bits2int, bits2int_modN: t.bits2int_modN };
  return { CURVE: e, curveOpts: n, hash: t.hash, ecdsaOpts: r };
}
function ta$1(t, e) {
  const n = e.Point;
  return Object.assign({}, e, { ProjectivePoint: n, CURVE: Object.assign({}, t, ko$1(n.Fn.ORDER, n.Fn.BITS)) });
}
function ea$1(t) {
  const { CURVE: e, curveOpts: n, hash: r, ecdsaOpts: o } = Qf(t), s = Yf(e, n), i = Xf(s, r, o);
  return ta$1(t, i);
}
function Dn$1(t, e) {
  const n = (r) => ea$1({ ...t, hash: r });
  return { ...n(e), create: n };
}
const Xo$1 = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") }, Jo$1 = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") }, Qo$1 = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") }, na = Ht$2(Xo$1.p), ra = Ht$2(Jo$1.p), oa = Ht$2(Qo$1.p), sa = Dn$1({ ...Xo$1, Fp: na, lowS: false }, $e$2);
Dn$1({ ...Jo$1, Fp: ra, lowS: false }, gc), Dn$1({ ...Qo$1, Fp: oa, lowS: false, allowedPrivateKeyLengths: [130, 131, 132] }, pc);
const ia = sa, Vn$1 = "base10", rt$1 = "base16", oe$2 = "base64pad", Ge$2 = "base64url", se$1 = "utf8", Mn$1 = 0, ie$1 = 1, we$3 = 2, ca = 0, ts$1 = 1, ve$2 = 12, Kn$1 = 32;
function fa() {
  const t = kn$1.utils.randomPrivateKey(), e = kn$1.getPublicKey(t);
  return { privateKey: toString(t, rt$1), publicKey: toString(e, rt$1) };
}
function aa() {
  const t = Mt$2(Kn$1);
  return toString(t, rt$1);
}
function ua(t, e) {
  const n = kn$1.getSharedSecret(fromString(t, rt$1), fromString(e, rt$1)), r = mf(Pe$2, n, void 0, void 0, Kn$1);
  return toString(r, rt$1);
}
function la(t) {
  const e = Pe$2(fromString(t, rt$1));
  return toString(e, rt$1);
}
function da(t) {
  const e = Pe$2(fromString(t, se$1));
  return toString(e, rt$1);
}
function qn$1(t) {
  return fromString(`${t}`, Vn$1);
}
function Zt$2(t) {
  return Number(toString(t, Vn$1));
}
function es$1(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function ns$1(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), n = (4 - e.length % 4) % 4;
  return e + "=".repeat(n);
}
function ha(t) {
  const e = qn$1(typeof t.type < "u" ? t.type : Mn$1);
  if (Zt$2(e) === ie$1 && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n = typeof t.senderPublicKey < "u" ? fromString(t.senderPublicKey, rt$1) : void 0, r = typeof t.iv < "u" ? fromString(t.iv, rt$1) : Mt$2(ve$2), o = fromString(t.symKey, rt$1), s = xo$1(o, r).encrypt(fromString(t.message, se$1)), i = Fn$1({ type: e, sealed: s, iv: r, senderPublicKey: n });
  return t.encoding === Ge$2 ? es$1(i) : i;
}
function pa(t) {
  const e = fromString(t.symKey, rt$1), { sealed: n, iv: r } = ze$1({ encoded: t.encoded, encoding: t.encoding }), o = xo$1(e, r).decrypt(n);
  if (o === null) throw new Error("Failed to decrypt");
  return toString(o, se$1);
}
function ga(t, e) {
  const n = qn$1(we$3), r = Mt$2(ve$2), o = fromString(t, se$1), s = Fn$1({ type: n, sealed: o, iv: r });
  return e === Ge$2 ? es$1(s) : s;
}
function ba(t, e) {
  const { sealed: n } = ze$1({ encoded: t, encoding: e });
  return toString(n, se$1);
}
function Fn$1(t) {
  if (Zt$2(t.type) === we$3) return toString(concat([t.type, t.sealed]), oe$2);
  if (Zt$2(t.type) === ie$1) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([t.type, t.senderPublicKey, t.iv, t.sealed]), oe$2);
  }
  return toString(concat([t.type, t.iv, t.sealed]), oe$2);
}
function ze$1(t) {
  const e = (t.encoding || oe$2) === Ge$2 ? ns$1(t.encoded) : t.encoded, n = fromString(e, oe$2), r = n.slice(ca, ts$1), o = ts$1;
  if (Zt$2(r) === ie$1) {
    const f = o + Kn$1, u = f + ve$2, a = n.slice(o, f), l = n.slice(f, u), d = n.slice(u);
    return { type: r, sealed: d, iv: l, senderPublicKey: a };
  }
  if (Zt$2(r) === we$3) {
    const f = n.slice(o), u = Mt$2(ve$2);
    return { type: r, sealed: f, iv: u };
  }
  const s = o + ve$2, i = n.slice(o, s), c = n.slice(s);
  return { type: r, sealed: c, iv: i };
}
function ya(t, e) {
  const n = ze$1({ encoded: t, encoding: e?.encoding });
  return rs({ type: Zt$2(n.type), senderPublicKey: typeof n.senderPublicKey < "u" ? toString(n.senderPublicKey, rt$1) : void 0, receiverPublicKey: e?.receiverPublicKey });
}
function rs(t) {
  const e = t?.type || Mn$1;
  if (e === ie$1) {
    if (typeof t?.senderPublicKey > "u") throw new Error("missing sender public key");
    if (typeof t?.receiverPublicKey > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t?.senderPublicKey, receiverPublicKey: t?.receiverPublicKey };
}
function ma(t) {
  return t.type === ie$1 && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function wa(t) {
  return t.type === we$3;
}
function os(t) {
  const e = Buffer.from(t.x, "base64"), n = Buffer.from(t.y, "base64");
  return concat([new Uint8Array([4]), e, n]);
}
function va(t, e) {
  const [n, r, o] = t.split("."), s = Buffer.from(ns$1(o), "base64");
  if (s.length !== 64) throw new Error("Invalid signature length");
  const i = s.slice(0, 32), c = s.slice(32, 64), f = `${n}.${r}`, u = Pe$2(f), a = os(e);
  if (!ia.verify(concat([i, c]), u, a)) throw new Error("Invalid signature");
  return sn$1(t).payload;
}
const ss$1 = "irn";
function xa(t) {
  return t?.relay || { protocol: ss$1 };
}
function Ea(t) {
  const e = C$5[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Ba = Object.defineProperty, Aa = Object.defineProperties, Ia = Object.getOwnPropertyDescriptors, is$1 = Object.getOwnPropertySymbols, Sa = Object.prototype.hasOwnProperty, Oa = Object.prototype.propertyIsEnumerable, cs = (t, e, n) => e in t ? Ba(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, Zn$1 = (t, e) => {
  for (var n in e || (e = {})) Sa.call(e, n) && cs(t, n, e[n]);
  if (is$1) for (var n of is$1(e)) Oa.call(e, n) && cs(t, n, e[n]);
  return t;
}, Na = (t, e) => Aa(t, Ia(e));
function fs(t, e = "-") {
  const n = {}, r = "relay" + e;
  return Object.keys(t).forEach((o) => {
    if (o.startsWith(r)) {
      const s = o.replace(r, ""), i = t[o];
      n[s] = i;
    }
  }), n;
}
function Ua(t) {
  if (!t.includes("wc:")) {
    const u = cn$1(t);
    u != null && u.includes("wc:") && (t = u);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), n = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r = t.substring(0, e), o = t.substring(e + 1, n).split("@"), s = typeof n < "u" ? t.substring(n) : "", i = new URLSearchParams(s), c = Object.fromEntries(i.entries()), f = typeof c.methods == "string" ? c.methods.split(",") : void 0;
  return { protocol: r, topic: as(o[0]), version: parseInt(o[1], 10), symKey: c.symKey, relay: fs(c), methods: f, expiryTimestamp: c.expiryTimestamp ? parseInt(c.expiryTimestamp, 10) : void 0 };
}
function as(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function us(t, e = "-") {
  const n = "relay", r = {};
  return Object.keys(t).forEach((o) => {
    const s = o, i = n + e + s;
    t[s] && (r[i] = t[s]);
  }), r;
}
function _a(t) {
  const e = new URLSearchParams(), n = Zn$1(Zn$1(Na(Zn$1({}, us(t.relay)), { symKey: t.symKey }), t.expiryTimestamp && { expiryTimestamp: t.expiryTimestamp.toString() }), t.methods && { methods: t.methods.join(",") });
  return Object.entries(n).sort(([r], [o]) => r.localeCompare(o)).forEach(([r, o]) => {
    o !== void 0 && e.append(r, String(o));
  }), `${t.protocol}:${t.topic}@${t.version}?${e}`;
}
function Ra(t, e, n) {
  return `${t}?wc_ev=${n}&topic=${e}`;
}
var $a = Object.defineProperty, Ta = Object.defineProperties, Ca = Object.getOwnPropertyDescriptors, ls = Object.getOwnPropertySymbols, ja = Object.prototype.hasOwnProperty, La = Object.prototype.propertyIsEnumerable, ds = (t, e, n) => e in t ? $a(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, ka = (t, e) => {
  for (var n in e || (e = {})) ja.call(e, n) && ds(t, n, e[n]);
  if (ls) for (var n of ls(e)) La.call(e, n) && ds(t, n, e[n]);
  return t;
}, Pa = (t, e) => Ta(t, Ca(e));
function Gt$2(t) {
  const e = [];
  return t.forEach((n) => {
    const [r, o] = n.split(":");
    e.push(`${r}:${o}`);
  }), e;
}
function hs(t) {
  const e = [];
  return Object.values(t).forEach((n) => {
    e.push(...Gt$2(n.accounts));
  }), e;
}
function ps(t, e) {
  const n = [];
  return Object.values(t).forEach((r) => {
    Gt$2(r.accounts).includes(e) && n.push(...r.methods);
  }), n;
}
function gs(t, e) {
  const n = [];
  return Object.values(t).forEach((r) => {
    Gt$2(r.accounts).includes(e) && n.push(...r.events);
  }), n;
}
function Gn$1(t) {
  return t.includes(":");
}
function bs$1(t) {
  return Gn$1(t) ? t.split(":")[0] : t;
}
function xe(t) {
  var e, n, r;
  const o = {};
  if (!Ye$2(t)) return o;
  for (const [s, i] of Object.entries(t)) {
    const c = Gn$1(s) ? [s] : i.chains, f = i.methods || [], u = i.events || [], a = bs$1(s);
    o[a] = Pa(ka({}, o[a]), { chains: ut$2(c, (e = o[a]) == null ? void 0 : e.chains), methods: ut$2(f, (n = o[a]) == null ? void 0 : n.methods), events: ut$2(u, (r = o[a]) == null ? void 0 : r.events) });
  }
  return o;
}
function ys(t) {
  const e = {};
  return t?.forEach((n) => {
    var r;
    const [o, s] = n.split(":");
    e[o] || (e[o] = { accounts: [], chains: [], events: [], methods: [] }), e[o].accounts.push(n), (r = e[o].chains) == null || r.push(`${o}:${s}`);
  }), e;
}
function Va(t, e) {
  e = e.map((r) => r.replace("did:pkh:", ""));
  const n = ys(e);
  for (const [r, o] of Object.entries(n)) o.methods ? o.methods = ut$2(o.methods, t) : o.methods = t, o.events = ["chainChanged", "accountsChanged"];
  return n;
}
function Ma(t, e) {
  var n, r, o, s, i, c;
  const f = xe(t), u = xe(e), a = {}, l = Object.keys(f).concat(Object.keys(u));
  for (const d of l) a[d] = { chains: ut$2((n = f[d]) == null ? void 0 : n.chains, (r = u[d]) == null ? void 0 : r.chains), methods: ut$2((o = f[d]) == null ? void 0 : o.methods, (s = u[d]) == null ? void 0 : s.methods), events: ut$2((i = f[d]) == null ? void 0 : i.events, (c = u[d]) == null ? void 0 : c.events) };
  return a;
}
const ms = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, ws = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Bt$2(t, e) {
  const { message: n, code: r } = ws[t];
  return { message: e ? `${n} ${e}` : n, code: r };
}
function zt$2(t, e) {
  const { message: n, code: r } = ms[t];
  return { message: e ? `${n} ${e}` : n, code: r };
}
function Ee$1(t, e) {
  return Array.isArray(t) ? true : false;
}
function Ye$2(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Dt$1(t) {
  return typeof t > "u";
}
function ft$2(t, e) {
  return e && Dt$1(t) ? true : typeof t == "string" && !!t.trim().length;
}
function We$2(t, e) {
  return e && Dt$1(t) ? true : typeof t == "number" && !isNaN(t);
}
function Ka(t, e) {
  const { requiredNamespaces: n } = e, r = Object.keys(t.namespaces), o = Object.keys(n);
  let s = true;
  return It$3(o, r) ? (r.forEach((i) => {
    const { accounts: c, methods: f, events: u } = t.namespaces[i], a = Gt$2(c), l = n[i];
    (!It$3(Ie$1(i, l), a) || !It$3(l.methods, f) || !It$3(l.events, u)) && (s = false);
  }), s) : false;
}
function Be$2(t) {
  return ft$2(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
}
function vs(t) {
  if (ft$2(t, false) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const n = e[0] + ":" + e[1];
      return !!e[2] && Be$2(n);
    }
  }
  return false;
}
function qa(t) {
  function e(n) {
    try {
      return typeof new URL(n) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (ft$2(t, false)) {
      if (e(t)) return true;
      const n = cn$1(t);
      return e(n);
    }
  } catch {
  }
  return false;
}
function Fa(t) {
  var e;
  return (e = t?.proposer) == null ? void 0 : e.publicKey;
}
function Za(t) {
  return t?.topic;
}
function Ga(t, e) {
  let n = null;
  return ft$2(t?.publicKey, false) || (n = Bt$2("MISSING_OR_INVALID", `${e} controller public key should be a string`)), n;
}
function zn$1(t) {
  let e = true;
  return Ee$1(t) ? t.length && (e = t.every((n) => ft$2(n, false))) : e = false, e;
}
function xs$1(t, e, n) {
  let r = null;
  return Ee$1(e) && e.length ? e.forEach((o) => {
    r || Be$2(o) || (r = zt$2("UNSUPPORTED_CHAINS", `${n}, chain ${o} should be a string and conform to "namespace:chainId" format`));
  }) : Be$2(t) || (r = zt$2("UNSUPPORTED_CHAINS", `${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r;
}
function Es(t, e, n) {
  let r = null;
  return Object.entries(t).forEach(([o, s]) => {
    if (r) return;
    const i = xs$1(o, Ie$1(o, s), `${e} ${n}`);
    i && (r = i);
  }), r;
}
function Bs(t, e) {
  let n = null;
  return Ee$1(t) ? t.forEach((r) => {
    n || vs(r) || (n = zt$2("UNSUPPORTED_ACCOUNTS", `${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
  }) : n = zt$2("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n;
}
function As$1(t, e) {
  let n = null;
  return Object.values(t).forEach((r) => {
    if (n) return;
    const o = Bs(r?.accounts, `${e} namespace`);
    o && (n = o);
  }), n;
}
function Is(t, e) {
  let n = null;
  return zn$1(t?.methods) ? zn$1(t?.events) || (n = zt$2("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : n = zt$2("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), n;
}
function Yn$1(t, e) {
  let n = null;
  return Object.values(t).forEach((r) => {
    if (n) return;
    const o = Is(r, `${e}, namespace`);
    o && (n = o);
  }), n;
}
function za(t, e, n) {
  let r = null;
  if (t && Ye$2(t)) {
    const o = Yn$1(t, e);
    o && (r = o);
    const s = Es(t, e, n);
    s && (r = s);
  } else r = Bt$2("MISSING_OR_INVALID", `${e}, ${n} should be an object with data`);
  return r;
}
function Ss(t, e) {
  let n = null;
  if (t && Ye$2(t)) {
    const r = Yn$1(t, e);
    r && (n = r);
    const o = As$1(t, e);
    o && (n = o);
  } else n = Bt$2("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return n;
}
function Os(t) {
  return ft$2(t.protocol, true);
}
function Ya(t, e) {
  let n = false;
  return !t ? n = true : t && Ee$1(t) && t.length && t.forEach((r) => {
    n = Os(r);
  }), n;
}
function Wa(t) {
  return typeof t == "number";
}
function Xa(t) {
  return typeof t < "u" && typeof t !== null;
}
function Ja(t) {
  return !(!t || typeof t != "object" || !t.code || !We$2(t.code, false) || !t.message || !ft$2(t.message, false));
}
function Qa(t) {
  return !(Dt$1(t) || !ft$2(t.method, false));
}
function tu(t) {
  return !(Dt$1(t) || Dt$1(t.result) && Dt$1(t.error) || !We$2(t.id, false) || !ft$2(t.jsonrpc, false));
}
function eu(t) {
  return !(Dt$1(t) || !ft$2(t.name, false));
}
function nu(t, e) {
  return !(!Be$2(e) || !hs(t).includes(e));
}
function ru(t, e, n) {
  return ft$2(n, false) ? ps(t, e).includes(n) : false;
}
function ou(t, e, n) {
  return ft$2(n, false) ? gs(t, e).includes(n) : false;
}
function Ns(t, e, n) {
  let r = null;
  const o = su(t), s = iu(e), i = Object.keys(o), c = Object.keys(s), f = Us$1(Object.keys(t)), u = Us$1(Object.keys(e)), a = f.filter((l) => !u.includes(l));
  return a.length && (r = Bt$2("NON_CONFORMING_NAMESPACES", `${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a.toString()}
      Received: ${Object.keys(e).toString()}`)), It$3(i, c) || (r = Bt$2("NON_CONFORMING_NAMESPACES", `${n} namespaces chains don't satisfy required namespaces.
      Required: ${i.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((l) => {
    if (!l.includes(":") || r) return;
    const d = Gt$2(e[l].accounts);
    d.includes(l) || (r = Bt$2("NON_CONFORMING_NAMESPACES", `${n} namespaces accounts don't satisfy namespace accounts for ${l}
        Required: ${l}
        Approved: ${d.toString()}`));
  }), i.forEach((l) => {
    r || (It$3(o[l].methods, s[l].methods) ? It$3(o[l].events, s[l].events) || (r = Bt$2("NON_CONFORMING_NAMESPACES", `${n} namespaces events don't satisfy namespace events for ${l}`)) : r = Bt$2("NON_CONFORMING_NAMESPACES", `${n} namespaces methods don't satisfy namespace methods for ${l}`));
  }), r;
}
function su(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    var r;
    n.includes(":") ? e[n] = t[n] : (r = t[n].chains) == null || r.forEach((o) => {
      e[o] = { methods: t[n].methods, events: t[n].events };
    });
  }), e;
}
function Us$1(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function iu(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    if (n.includes(":")) e[n] = t[n];
    else {
      const r = Gt$2(t[n].accounts);
      r?.forEach((o) => {
        e[o] = { accounts: t[n].accounts.filter((s) => s.includes(`${o}:`)), methods: t[n].methods, events: t[n].events };
      });
    }
  }), e;
}
function cu(t, e) {
  return We$2(t, false) && t <= e.max && t >= e.min;
}
function fu() {
  const t = Vt$2();
  return new Promise((e) => {
    switch (t) {
      case et$2.browser:
        e(_s());
        break;
      case et$2.reactNative:
        e(Rs());
        break;
      case et$2.node:
        e($s$1());
        break;
      default:
        e(true);
    }
  });
}
function _s() {
  return Wt$2() && navigator?.onLine;
}
async function Rs() {
  if (At$2() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t?.isConnected;
  }
  return true;
}
function $s$1() {
  return true;
}
function au(t) {
  switch (Vt$2()) {
    case et$2.browser:
      Ts(t);
      break;
    case et$2.reactNative:
      Cs$1(t);
      break;
  }
}
function Ts(t) {
  !At$2() && Wt$2() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
}
function Cs$1(t) {
  At$2() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((e) => t(e?.isConnected));
}
function uu() {
  var t;
  return Wt$2() && cjsExports$2.getDocument() ? ((t = cjsExports$2.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : true;
}
const Wn$1 = {};
class lu {
  static get(e) {
    return Wn$1[e];
  }
  static set(e, n) {
    Wn$1[e] = n;
  }
  static delete(e) {
    delete Wn$1[e];
  }
}
function js$1(t) {
  const e = bs58.decode(t);
  if (e.length < 33) throw new Error("Too short to contain a public key");
  return e.slice(1, 33);
}
function Ls$1({ publicKey: t, signature: e, payload: n }) {
  var r;
  const o = Xn$1(n.method), s = 128 | parseInt(((r = n.version) == null ? void 0 : r.toString()) || "4"), i = hu(n.address), c = n.era === "00" ? new Uint8Array([0]) : Xn$1(n.era);
  if (c.length !== 1 && c.length !== 2) throw new Error("Invalid era length");
  const f = parseInt(n.nonce, 16), u = new Uint8Array([f & 255, f >> 8 & 255]), a = BigInt(`0x${du(n.tip)}`), l = gu(a), d = new Uint8Array([0, ...t, i, ...e, ...c, ...u, ...l, ...o]), h = pu(d.length + 1);
  return new Uint8Array([...h, s, ...d]);
}
function ks$1(t) {
  const e = Xn$1(t), n = blakejsExports.blake2b(e, void 0, 32);
  return "0x" + Buffer.from(n).toString("hex");
}
function Xn$1(t) {
  return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
function du(t) {
  return t.startsWith("0x") ? t.slice(2) : t;
}
function hu(t) {
  const e = bs58.decode(t)[0];
  return e === 42 ? 0 : e === 60 ? 2 : 1;
}
function pu(t) {
  if (t < 64) return new Uint8Array([t << 2]);
  if (t < 16384) {
    const e = t << 2 | 1;
    return new Uint8Array([e & 255, e >> 8 & 255]);
  } else if (t < 1 << 30) {
    const e = t << 2 | 2;
    return new Uint8Array([e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function gu(t) {
  if (t < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t << BigInt(2))]);
  if (t < BigInt(1) << BigInt(14)) {
    const e = t << BigInt(2) | BigInt(1);
    return new Uint8Array([Number(e & BigInt(255)), Number(e >> BigInt(8) & BigInt(255))]);
  } else if (t < BigInt(1) << BigInt(30)) {
    const e = t << BigInt(2) | BigInt(2);
    return new Uint8Array([Number(e & BigInt(255)), Number(e >> BigInt(8) & BigInt(255)), Number(e >> BigInt(16) & BigInt(255)), Number(e >> BigInt(24) & BigInt(255))]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function bu(t) {
  const e = Uint8Array.from(Buffer.from(t.signature, "hex")), n = js$1(t.transaction.address), r = Ls$1({ publicKey: n, signature: e, payload: t.transaction }), o = Buffer.from(r).toString("hex");
  return ks$1(o);
}

var define_process_env_default = {};
const Ue$1 = "wc", Fe$1 = 2, pe$2 = "core", W$1 = `${Ue$1}@2:${pe$2}:`, It$2 = { logger: "error" }, Tt$1 = { database: ":memory:" }, Ct$1 = "crypto", Me$2 = "client_ed25519_seed", Pt$1 = cjsExports$1.ONE_DAY, St$2 = "keychain", Ot$1 = "0.3", Rt$2 = "messages", At$1 = "0.3", xt$1 = cjsExports$1.SIX_HOURS, Nt$1 = "publisher", $t$1 = "irn", zt$1 = "error", Ke$2 = "wss://relay.walletconnect.org", Lt$1 = "relayer", C$3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, kt$1 = "_subscription", M$3 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, jt$1 = 0.1, Pe$1 = "2.21.9", ee$1 = { link_mode: "link_mode", relay: "relay" }, ye$1 = { inbound: "inbound", outbound: "outbound" }, Ut$1 = "0.3", Ft$1 = "WALLETCONNECT_CLIENT_ID", Be$1 = "WALLETCONNECT_LINK_MODE_APPS", U$1 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Mt$1 = "subscription", Kt$1 = "0.3", Bt$1 = "pairing", Vt$1 = "0.3", oe$1 = { wc_pairingDelete: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjsExports$1.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjsExports$1.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 0 } } }, ae$1 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, V$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, qt$1 = "history", Gt$1 = "0.3", Wt$1 = "expirer", q = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Ht$1 = "0.3", Yt$1 = "verify-api", ir = "https://verify.walletconnect.com", Jt$1 = "https://verify.walletconnect.org", be$1 = Jt$1, Xt$1 = `${be$1}/v3`, Zt$1 = [ir, Jt$1], Qt$1 = "echo", ei = "https://echo.walletconnect.com", Y = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, X = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, rr = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, nr = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, or = { authenticated_session_approve_started: "authenticated_session_approve_started", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve"}, ar = { no_internet_connection: "no_internet_connection", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, ti = 0.1, ii = "event-client", si = 86400, ri = "https://pulse.walletconnect.org/batch";
function cr(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var n = r.charAt(s), o = n.charCodeAt(0);
    if (t[o] !== 255) throw new TypeError(n + " is ambiguous");
    t[o] = s;
  }
  var a = r.length, c = r.charAt(0), h = Math.log(a) / Math.log(256), l = Math.log(256) / Math.log(a);
  function p(u) {
    if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u.length === 0) return "";
    for (var m = 0, D = 0, _ = 0, E = u.length; _ !== E && u[_] === 0; ) _++, m++;
    for (var L = (E - _) * l + 1 >>> 0, I = new Uint8Array(L); _ !== E; ) {
      for (var k = u[_], T = 0, S = L - 1; (k !== 0 || T < D) && S !== -1; S--, T++) k += 256 * I[S] >>> 0, I[S] = k % a >>> 0, k = k / a >>> 0;
      if (k !== 0) throw new Error("Non-zero carry");
      D = T, _++;
    }
    for (var O = L - D; O !== L && I[O] === 0; ) O++;
    for (var te = c.repeat(m); O < L; ++O) te += r.charAt(I[O]);
    return te;
  }
  function y(u) {
    if (typeof u != "string") throw new TypeError("Expected String");
    if (u.length === 0) return new Uint8Array();
    var m = 0;
    if (u[m] !== " ") {
      for (var D = 0, _ = 0; u[m] === c; ) D++, m++;
      for (var E = (u.length - m) * h + 1 >>> 0, L = new Uint8Array(E); u[m]; ) {
        var I = t[u.charCodeAt(m)];
        if (I === 255) return;
        for (var k = 0, T = E - 1; (I !== 0 || k < _) && T !== -1; T--, k++) I += a * L[T] >>> 0, L[T] = I % 256 >>> 0, I = I / 256 >>> 0;
        if (I !== 0) throw new Error("Non-zero carry");
        _ = k, m++;
      }
      if (u[m] !== " ") {
        for (var S = E - _; S !== E && L[S] === 0; ) S++;
        for (var O = new Uint8Array(D + (E - S)), te = D; S !== E; ) O[te++] = L[S++];
        return O;
      }
    }
  }
  function w(u) {
    var m = y(u);
    if (m) return m;
    throw new Error(`Non-${e} character`);
  }
  return { encode: p, decodeUnsafe: y, decode: w };
}
var hr = cr, lr = hr;
const ni = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
  if (r instanceof ArrayBuffer) return new Uint8Array(r);
  if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, ur = (r) => new TextEncoder().encode(r), dr = (r) => new TextDecoder().decode(r);
class gr {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class pr {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return oi(this, e);
  }
}
class yr {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return oi(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const oi = (r, e) => new yr({ ...r.decoders || { [r.prefix]: r }, ...e.decoders || { [e.prefix]: e } });
class br {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new gr(e, t, i), this.decoder = new pr(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Se$1 = ({ name: r, prefix: e, encode: t, decode: i }) => new br(r, e, t, i), me$2 = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = lr(t, e);
  return Se$1({ prefix: r, name: e, encode: i, decode: (n) => ni(s(n)) });
}, mr = (r, e, t, i) => {
  const s = {};
  for (let l = 0; l < e.length; ++l) s[e[l]] = l;
  let n = r.length;
  for (; r[n - 1] === "="; ) --n;
  const o = new Uint8Array(n * t / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let l = 0; l < n; ++l) {
    const p = s[r[l]];
    if (p === void 0) throw new SyntaxError(`Non-${i} character`);
    c = c << t | p, a += t, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= t || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, fr = (r, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < r.length; ++c) for (a = a << 8 | r[c], o += 8; o > t; ) o -= t, n += e[s & a >> o];
  if (o && (n += e[s & a << t - o]), i) for (; n.length * t & 7; ) n += "=";
  return n;
}, A$3 = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => Se$1({ prefix: e, name: r, encode(s) {
  return fr(s, i, t);
}, decode(s) {
  return mr(s, i, t, r);
} }), Dr = Se$1({ prefix: "\0", name: "identity", encode: (r) => dr(r), decode: (r) => ur(r) });
var vr = Object.freeze({ __proto__: null, identity: Dr });
const wr = A$3({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var _r = Object.freeze({ __proto__: null, base2: wr });
const Er = A$3({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Ir = Object.freeze({ __proto__: null, base8: Er });
const Tr = me$2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Cr = Object.freeze({ __proto__: null, base10: Tr });
const Pr = A$3({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Sr = A$3({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Or = Object.freeze({ __proto__: null, base16: Pr, base16upper: Sr });
const Rr = A$3({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Ar = A$3({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), xr = A$3({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Nr = A$3({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), $r = A$3({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), zr = A$3({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Lr = A$3({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), kr = A$3({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), jr = A$3({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Ur = Object.freeze({ __proto__: null, base32: Rr, base32upper: Ar, base32pad: xr, base32padupper: Nr, base32hex: $r, base32hexupper: zr, base32hexpad: Lr, base32hexpadupper: kr, base32z: jr });
const Fr = me$2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Mr = me$2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Kr = Object.freeze({ __proto__: null, base36: Fr, base36upper: Mr });
const Br = me$2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Vr = me$2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var qr = Object.freeze({ __proto__: null, base58btc: Br, base58flickr: Vr });
const Gr = A$3({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Wr = A$3({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Hr = A$3({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Yr = A$3({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Jr = Object.freeze({ __proto__: null, base64: Gr, base64pad: Wr, base64url: Hr, base64urlpad: Yr });
const ai = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Xr = ai.reduce((r, e, t) => (r[t] = e, r), []), Zr = ai.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function Qr(r) {
  return r.reduce((e, t) => (e += Xr[t], e), "");
}
function en(r) {
  const e = [];
  for (const t of r) {
    const i = Zr[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const tn = Se$1({ prefix: "🚀", name: "base256emoji", encode: Qr, decode: en });
var sn = Object.freeze({ __proto__: null, base256emoji: tn }), rn = hi, ci = 128, on = -128, an = Math.pow(2, 31);
function hi(r, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; r >= an; ) e[t++] = r & 255 | ci, r /= 128;
  for (; r & on; ) e[t++] = r & 255 | ci, r >>>= 7;
  return e[t] = r | 0, hi.bytes = t - i + 1, e;
}
var cn = Ve$2, hn = 128, li = 127;
function Ve$2(r, i) {
  var t = 0, i = i || 0, s = 0, n = i, o, a = r.length;
  do {
    if (n >= a) throw Ve$2.bytes = 0, new RangeError("Could not decode varint");
    o = r[n++], t += s < 28 ? (o & li) << s : (o & li) * Math.pow(2, s), s += 7;
  } while (o >= hn);
  return Ve$2.bytes = n - i, t;
}
var ln = Math.pow(2, 7), un = Math.pow(2, 14), dn = Math.pow(2, 21), gn = Math.pow(2, 28), pn = Math.pow(2, 35), yn = Math.pow(2, 42), bn = Math.pow(2, 49), mn = Math.pow(2, 56), fn = Math.pow(2, 63), Dn = function(r) {
  return r < ln ? 1 : r < un ? 2 : r < dn ? 3 : r < gn ? 4 : r < pn ? 5 : r < yn ? 6 : r < bn ? 7 : r < mn ? 8 : r < fn ? 9 : 10;
}, vn = { encode: rn, decode: cn, encodingLength: Dn }, ui = vn;
const di = (r, e, t = 0) => (ui.encode(r, e, t), e), gi = (r) => ui.encodingLength(r), qe = (r, e) => {
  const t = e.byteLength, i = gi(r), s = i + gi(t), n = new Uint8Array(s + t);
  return di(r, n, 0), di(t, n, i), n.set(e, s), new wn(r, t, e, n);
};
class wn {
  constructor(e, t, i, s) {
    this.code = e, this.size = t, this.digest = i, this.bytes = s;
  }
}
const pi = ({ name: r, code: e, encode: t }) => new _n(r, e, t);
class _n {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? qe(this.code, t) : t.then((i) => qe(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
}
const yi = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)), En = pi({ name: "sha2-256", code: 18, encode: yi("SHA-256") }), In = pi({ name: "sha2-512", code: 19, encode: yi("SHA-512") });
var Tn = Object.freeze({ __proto__: null, sha256: En, sha512: In });
const bi = 0, Cn = "identity", mi = ni, Pn = (r) => qe(bi, mi(r)), Sn = { code: bi, name: Cn, encode: mi, digest: Pn };
var On = Object.freeze({ __proto__: null, identity: Sn });
new TextEncoder(), new TextDecoder();
const fi = { ...vr, ..._r, ...Ir, ...Cr, ...Or, ...Ur, ...Kr, ...qr, ...Jr, ...sn };
({ ...Tn, ...On });
function Di(r) {
  return globalThis.Buffer != null ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r;
}
function Rn(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Di(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r);
}
function vi(r, e, t, i) {
  return { name: r, prefix: e, encoder: { name: r, prefix: e, encode: t }, decoder: { decode: i } };
}
const wi = vi("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), Ge$1 = vi("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = Rn(r.length);
  for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
  return e;
}), An = { utf8: wi, "utf-8": wi, hex: fi.base16, latin1: Ge$1, ascii: Ge$1, binary: Ge$1, ...fi };
function xn(r, e = "utf8") {
  const t = An[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Di(globalThis.Buffer.from(r, "utf-8")) : t.decoder.decode(`${t.prefix}${r}`);
}
var Nn = Object.defineProperty, $n = (r, e, t) => e in r ? Nn(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, J$1 = (r, e, t) => $n(r, typeof e != "symbol" ? e + "" : e, t);
class _i {
  constructor(e, t) {
    this.core = e, this.logger = t, J$1(this, "keychain", /* @__PURE__ */ new Map()), J$1(this, "name", St$2), J$1(this, "version", Ot$1), J$1(this, "initialized", false), J$1(this, "storagePrefix", W$1), J$1(this, "init", async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = true;
      }
    }), J$1(this, "has", (i) => (this.isInitialized(), this.keychain.has(i))), J$1(this, "set", async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }), J$1(this, "get", (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: n } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n);
      }
      return s;
    }), J$1(this, "del", async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }), this.core = e, this.logger = E$2(t, this.name);
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, bi$1(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? yi$1(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var zn = Object.defineProperty, Ln = (r, e, t) => e in r ? zn(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, x$3 = (r, e, t) => Ln(r, typeof e != "symbol" ? e + "" : e, t);
class Ei {
  constructor(e, t, i) {
    this.core = e, this.logger = t, x$3(this, "name", Ct$1), x$3(this, "keychain"), x$3(this, "randomSessionIdentifier", aa()), x$3(this, "initialized", false), x$3(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), x$3(this, "hasKeys", (s) => (this.isInitialized(), this.keychain.has(s))), x$3(this, "getClientId", async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n = Po$2(s);
      return Qe$2(n.publicKey);
    }), x$3(this, "generateKeyPair", () => {
      this.isInitialized();
      const s = fa();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }), x$3(this, "signJWT", async (s) => {
      this.isInitialized();
      const n = await this.getClientSeed(), o = Po$2(n), a = this.randomSessionIdentifier, c = Pt$1;
      return await Qo$2(a, s, c, o);
    }), x$3(this, "generateSharedKey", (s, n, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(s), c = ua(a, n);
      return this.setSymKey(c, o);
    }), x$3(this, "setSymKey", async (s, n) => {
      this.isInitialized();
      const o = n || la(s);
      return await this.keychain.set(o, s), o;
    }), x$3(this, "deleteKeyPair", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), x$3(this, "deleteSymKey", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), x$3(this, "encode", async (s, n, o) => {
      this.isInitialized();
      const a = rs(o), c = safeJsonStringify(n);
      if (wa(a)) return ga(c, o?.encoding);
      if (ma(a)) {
        const y = a.senderPublicKey, w = a.receiverPublicKey;
        s = await this.generateSharedKey(y, w);
      }
      const h = this.getSymKey(s), { type: l, senderPublicKey: p } = a;
      return ha({ type: l, symKey: h, message: c, senderPublicKey: p, encoding: o?.encoding });
    }), x$3(this, "decode", async (s, n, o) => {
      this.isInitialized();
      const a = ya(n, o);
      if (wa(a)) {
        const c = ba(n, o?.encoding);
        return safeJsonParse(c);
      }
      if (ma(a)) {
        const c = a.receiverPublicKey, h = a.senderPublicKey;
        s = await this.generateSharedKey(c, h);
      }
      try {
        const c = this.getSymKey(s), h = pa({ symKey: c, encoded: n, encoding: o?.encoding });
        return safeJsonParse(h);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }), x$3(this, "getPayloadType", (s, n = oe$2) => {
      const o = ze$1({ encoded: s, encoding: n });
      return Zt$2(o.type);
    }), x$3(this, "getPayloadSenderPublicKey", (s, n = oe$2) => {
      const o = ze$1({ encoded: s, encoding: n });
      return o.senderPublicKey ? toString(o.senderPublicKey, rt$1) : void 0;
    }), this.core = e, this.logger = E$2(t, this.name), this.keychain = i || new _i(this.core, this.logger);
  }
  get context() {
    return y$4(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Me$2);
    } catch {
      e = aa(), await this.keychain.set(Me$2, e);
    }
    return xn(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var kn = Object.defineProperty, jn = Object.defineProperties, Un = Object.getOwnPropertyDescriptors, Ii = Object.getOwnPropertySymbols, Fn = Object.prototype.hasOwnProperty, Mn = Object.prototype.propertyIsEnumerable, We$1 = (r, e, t) => e in r ? kn(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, Kn = (r, e) => {
  for (var t in e || (e = {})) Fn.call(e, t) && We$1(r, t, e[t]);
  if (Ii) for (var t of Ii(e)) Mn.call(e, t) && We$1(r, t, e[t]);
  return r;
}, Bn = (r, e) => jn(r, Un(e)), K = (r, e, t) => We$1(r, typeof e != "symbol" ? e + "" : e, t);
class Ti extends y$3 {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, K(this, "messages", /* @__PURE__ */ new Map()), K(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), K(this, "name", Rt$2), K(this, "version", At$1), K(this, "initialized", false), K(this, "storagePrefix", W$1), K(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i);
          const s = await this.getRelayerMessagesWithoutClientAck();
          typeof s < "u" && (this.messagesWithoutClientAck = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = true;
        }
      }
    }), K(this, "set", async (i, s, n) => {
      this.isInitialized();
      const o = da(s);
      let a = this.messages.get(i);
      if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
      if (a[o] = s, this.messages.set(i, a), n === ye$1.inbound) {
        const c = this.messagesWithoutClientAck.get(i) || {};
        this.messagesWithoutClientAck.set(i, Bn(Kn({}, c), { [o]: s }));
      }
      return await this.persist(), o;
    }), K(this, "get", (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }), K(this, "getWithoutAck", (i) => {
      this.isInitialized();
      const s = {};
      for (const n of i) {
        const o = this.messagesWithoutClientAck.get(n) || {};
        s[n] = Object.values(o);
      }
      return s;
    }), K(this, "has", (i, s) => {
      this.isInitialized();
      const n = this.get(i), o = da(s);
      return typeof n[o] < "u";
    }), K(this, "ack", async (i, s) => {
      this.isInitialized();
      const n = this.messagesWithoutClientAck.get(i);
      if (typeof n > "u") return;
      const o = da(s);
      delete n[o], Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(i) : this.messagesWithoutClientAck.set(i, n), await this.persist();
    }), K(this, "del", async (i) => {
      this.isInitialized(), this.messages.delete(i), this.messagesWithoutClientAck.delete(i), await this.persist();
    }), this.logger = E$2(e, this.name), this.core = t;
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, bi$1(e));
  }
  async setRelayerMessagesWithoutClientAck(e) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, bi$1(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? yi$1(e) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e < "u" ? yi$1(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var Vn = Object.defineProperty, qn = Object.defineProperties, Gn = Object.getOwnPropertyDescriptors, Ci = Object.getOwnPropertySymbols, Wn = Object.prototype.hasOwnProperty, Hn = Object.prototype.propertyIsEnumerable, He$1 = (r, e, t) => e in r ? Vn(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, ce$1 = (r, e) => {
  for (var t in e || (e = {})) Wn.call(e, t) && He$1(r, t, e[t]);
  if (Ci) for (var t of Ci(e)) Hn.call(e, t) && He$1(r, t, e[t]);
  return r;
}, Pi = (r, e) => qn(r, Gn(e)), G$1 = (r, e, t) => He$1(r, typeof e != "symbol" ? e + "" : e, t);
class Yn extends m$3 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, G$1(this, "events", new eventsExports.EventEmitter()), G$1(this, "name", Nt$1), G$1(this, "queue", /* @__PURE__ */ new Map()), G$1(this, "publishTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_MINUTE)), G$1(this, "initialPublishTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND * 15)), G$1(this, "needsTransportRestart", false), G$1(this, "publish", async (i, s, n) => {
      var o, a, c, h, l;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n } });
      const p = n?.ttl || xt$1, y = n?.prompt || false, w = n?.tag || 0, u = n?.id || getBigIntRpcId().toString(), m = Ea(xa().protocol), D = { id: u, method: n?.publishMethod || m.publish, params: ce$1({ topic: i, message: s, ttl: p, prompt: y, tag: w, attestation: n?.attestation }, n?.tvf) }, _ = `Failed to publish payload, please try again. id:${u} tag:${w}`;
      try {
        Dt$1((o = D.params) == null ? void 0 : o.prompt) && ((a = D.params) == null || delete a.prompt), Dt$1((c = D.params) == null ? void 0 : c.tag) && ((h = D.params) == null || delete h.tag);
        const E = new Promise(async (L) => {
          const I = ({ id: T }) => {
            var S;
            ((S = D.id) == null ? void 0 : S.toString()) === T.toString() && (this.removeRequestFromQueue(T), this.relayer.events.removeListener(C$3.publish, I), L());
          };
          this.relayer.events.on(C$3.publish, I);
          const k = Ei$1(new Promise((T, S) => {
            this.rpcPublish(D, n).then(T).catch((O) => {
              this.logger.warn(O, O?.message), S(O);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u} tag:${w}`);
          try {
            await k, this.events.removeListener(C$3.publish, I);
          } catch (T) {
            this.queue.set(u, { request: D, opts: n, attempt: 1 }), this.logger.warn(T, T?.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: u, topic: i, message: s, opts: n } }), await Ei$1(E, this.publishTimeout, _);
      } catch (E) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(E), (l = n?.internal) != null && l.throwOnFailedPublish) throw E;
      } finally {
        this.queue.delete(u);
      }
    }), G$1(this, "publishCustom", async (i) => {
      var s, n, o, a, c;
      this.logger.debug("Publishing custom payload"), this.logger.trace({ type: "method", method: "publishCustom", params: i });
      const { payload: h, opts: l = {} } = i, { attestation: p, tvf: y, publishMethod: w, prompt: u, tag: m, ttl: D = cjsExports$1.FIVE_MINUTES } = l, _ = l.id || getBigIntRpcId().toString(), E = Ea(xa().protocol), L = w || E.publish, I = { id: _, method: L, params: ce$1(Pi(ce$1({}, h), { ttl: D, prompt: u, tag: m, attestation: p }), y) }, k = `Failed to publish custom payload, please try again. id:${_} tag:${m}`;
      try {
        Dt$1((s = I.params) == null ? void 0 : s.prompt) && ((n = I.params) == null || delete n.prompt), Dt$1((o = I.params) == null ? void 0 : o.tag) && ((a = I.params) == null || delete a.tag);
        const T = new Promise(async (S) => {
          const O = ({ id: Z }) => {
            var _e;
            ((_e = I.id) == null ? void 0 : _e.toString()) === Z.toString() && (this.removeRequestFromQueue(Z), this.relayer.events.removeListener(C$3.publish, O), S());
          };
          this.relayer.events.on(C$3.publish, O);
          const te = Ei$1(new Promise((Z, _e) => {
            this.rpcPublish(I, l).then(Z).catch((Ee) => {
              this.logger.warn(Ee, Ee?.message), _e(Ee);
            });
          }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${L} id:${_} tag:${m}`);
          try {
            await te, this.events.removeListener(C$3.publish, O);
          } catch (Z) {
            this.queue.set(_, { request: I, opts: l, attempt: 1 }), this.logger.warn(Z, Z?.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: _, payload: h, opts: l } }), await Ei$1(T, this.publishTimeout, k);
      } catch (T) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(T), (c = l?.internal) != null && c.throwOnFailedPublish) throw T;
      } finally {
        this.queue.delete(_);
      }
    }), G$1(this, "on", (i, s) => {
      this.events.on(i, s);
    }), G$1(this, "once", (i, s) => {
      this.events.once(i, s);
    }), G$1(this, "off", (i, s) => {
      this.events.off(i, s);
    }), G$1(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), this.relayer = e, this.logger = E$2(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y$4(this.logger);
  }
  async rpcPublish(e, t) {
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: e });
    const i = await this.relayer.request(e);
    return this.relayer.events.emit(C$3.publish, ce$1(ce$1({}, e), t)), this.logger.debug("Successfully Published Payload"), i;
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e, t) => {
      var i;
      const s = e.attempt + 1;
      this.queue.set(t, Pi(ce$1({}, e), { attempt: s })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(i = e.request.params) == null ? void 0 : i.tag}, attempt: ${s}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r$3.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(C$3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(C$3.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
var Jn = Object.defineProperty, Xn = (r, e, t) => e in r ? Jn(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, he$1 = (r, e, t) => Xn(r, typeof e != "symbol" ? e + "" : e, t);
class Zn {
  constructor() {
    he$1(this, "map", /* @__PURE__ */ new Map()), he$1(this, "set", (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }), he$1(this, "get", (e) => this.map.get(e) || []), he$1(this, "exists", (e, t) => this.get(e).includes(t)), he$1(this, "delete", (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i = this.get(e);
      if (!this.exists(e, t)) return;
      const s = i.filter((n) => n !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }), he$1(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Qn = Object.defineProperty, eo = Object.defineProperties, to = Object.getOwnPropertyDescriptors, Si = Object.getOwnPropertySymbols, io = Object.prototype.hasOwnProperty, so = Object.prototype.propertyIsEnumerable, Ye$1 = (r, e, t) => e in r ? Qn(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, fe$2 = (r, e) => {
  for (var t in e || (e = {})) io.call(e, t) && Ye$1(r, t, e[t]);
  if (Si) for (var t of Si(e)) so.call(e, t) && Ye$1(r, t, e[t]);
  return r;
}, Je$1 = (r, e) => eo(r, to(e)), f$4 = (r, e, t) => Ye$1(r, typeof e != "symbol" ? e + "" : e, t);
class Oi extends P$3 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, f$4(this, "subscriptions", /* @__PURE__ */ new Map()), f$4(this, "topicMap", new Zn()), f$4(this, "events", new eventsExports.EventEmitter()), f$4(this, "name", Mt$1), f$4(this, "version", Kt$1), f$4(this, "pending", /* @__PURE__ */ new Map()), f$4(this, "cached", []), f$4(this, "initialized", false), f$4(this, "storagePrefix", W$1), f$4(this, "subscribeTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_MINUTE)), f$4(this, "initialSubscribeTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND * 15)), f$4(this, "clientId"), f$4(this, "batchSubscribeTopicsLimit", 500), f$4(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), f$4(this, "subscribe", async (i, s) => {
      var n;
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const o = xa(s), a = { topic: i, relay: o, transportType: s?.transportType };
        (n = s?.internal) != null && n.skipSubscribe || this.pending.set(i, a);
        const c = await this.rpcSubscribe(i, o, s);
        return typeof c == "string" && (this.onSubscribe(c, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } })), c;
      } catch (o) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o), o;
      }
    }), f$4(this, "unsubscribe", async (i, s) => {
      this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }), f$4(this, "isSubscribed", (i) => new Promise((s) => {
      s(this.topicMap.topics.includes(i));
    })), f$4(this, "isKnownTopic", (i) => new Promise((s) => {
      s(this.topicMap.topics.includes(i) || this.pending.has(i) || this.cached.some((n) => n.topic === i));
    })), f$4(this, "on", (i, s) => {
      this.events.on(i, s);
    }), f$4(this, "once", (i, s) => {
      this.events.once(i, s);
    }), f$4(this, "off", (i, s) => {
      this.events.off(i, s);
    }), f$4(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), f$4(this, "start", async () => {
      await this.onConnect();
    }), f$4(this, "stop", async () => {
      await this.onDisconnect();
    }), f$4(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), f$4(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i = [];
      this.pending.forEach((s) => {
        i.push(s);
      }), await this.batchSubscribe(i);
    }), f$4(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r$3.pulse, async () => {
        await this.checkPending();
      }), this.events.on(U$1.created, async (i) => {
        const s = U$1.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: i }), await this.persist();
      }), this.events.on(U$1.deleted, async (i) => {
        const s = U$1.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: i }), await this.persist();
      });
    }), this.relayer = e, this.logger = E$2(t, this.name), this.clientId = "";
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e, t) {
    let i = false;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {
    }
    return i;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    try {
      const s = xa(i);
      await this.restartToComplete({ topic: e, id: t, relay: s }), await this.rpcUnsubscribe(e, t, s);
      const n = zt$2("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t, i) {
    var s, n;
    const o = await this.getSubscriptionId(e);
    if ((s = i?.internal) != null && s.skipSubscribe) return o;
    (!i || i?.transportType === ee$1.relay) && await this.restartToComplete({ topic: e, id: e, relay: t });
    const a = { method: Ea(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a });
    const c = (n = i?.internal) == null ? void 0 : n.throwOnFailedPublish;
    try {
      if (i?.transportType === ee$1.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a).catch((p) => this.logger.warn(p));
      }, cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND)), o;
      const h = new Promise(async (p) => {
        const y = (w) => {
          w.topic === e && (this.events.removeListener(U$1.created, y), p(w.id));
        };
        this.events.on(U$1.created, y);
        try {
          const w = await Ei$1(new Promise((u, m) => {
            this.relayer.request(a).catch((D) => {
              this.logger.warn(D, D?.message), m(D);
            }).then(u);
          }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
          this.events.removeListener(U$1.created, y), p(w);
        } catch {
        }
      }), l = await Ei$1(h, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
      if (!l && c) throw new Error(`Subscribing to ${e} failed, please try again`);
      return l ? o : null;
    } catch (h) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C$3.connection_stalled), c) throw h;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay, i = { method: Ea(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await Ei$1(new Promise((s) => {
        this.relayer.request(i).catch((n) => this.logger.warn(n)).then(s);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(C$3.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const t = e[0].relay, i = { method: Ea(t.protocol).batchFetchMessages, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let s;
    try {
      s = await await Ei$1(new Promise((n, o) => {
        this.relayer.request(i).catch((a) => {
          this.logger.warn(a), o(a);
        }).then(n);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(C$3.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, t, i) {
    const s = { method: Ea(i.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, Je$1(fe$2({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, fe$2({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t);
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, fe$2({}, t)), this.topicMap.set(t.topic, e), this.events.emit(U$1.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(U$1.deleted, Je$1(fe$2({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(U$1.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i = 0; i < t; i++) {
        const s = e.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(U$1.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size && !e.every((t) => {
        var i;
        return t.topic === ((i = this.subscriptions.get(t.id)) == null ? void 0 : i.topic);
      })) {
        const { message: t } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (t) => Je$1(fe$2({}, t), { id: await this.getSubscriptionId(t.topic) })))));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e);
    t && t.messages && (await Ci$1(cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete(e) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e) {
    return da(e + await this.getClientId());
  }
}
var ro = Object.defineProperty, Ri = Object.getOwnPropertySymbols, no = Object.prototype.hasOwnProperty, oo = Object.prototype.propertyIsEnumerable, Xe$1 = (r, e, t) => e in r ? ro(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, Ai = (r, e) => {
  for (var t in e || (e = {})) no.call(e, t) && Xe$1(r, t, e[t]);
  if (Ri) for (var t of Ri(e)) oo.call(e, t) && Xe$1(r, t, e[t]);
  return r;
}, g$3 = (r, e, t) => Xe$1(r, typeof e != "symbol" ? e + "" : e, t);
class xi extends d$5 {
  constructor(e) {
    super(e), g$3(this, "protocol", "wc"), g$3(this, "version", 2), g$3(this, "core"), g$3(this, "logger"), g$3(this, "events", new eventsExports.EventEmitter()), g$3(this, "provider"), g$3(this, "messages"), g$3(this, "subscriber"), g$3(this, "publisher"), g$3(this, "name", Lt$1), g$3(this, "transportExplicitlyClosed", false), g$3(this, "initialized", false), g$3(this, "connectionAttemptInProgress", false), g$3(this, "relayUrl"), g$3(this, "projectId"), g$3(this, "packageName"), g$3(this, "bundleId"), g$3(this, "hasExperiencedNetworkDisruption", false), g$3(this, "pingTimeout"), g$3(this, "heartBeatTimeout", cjsExports$1.toMiliseconds(cjsExports$1.THIRTY_SECONDS + cjsExports$1.FIVE_SECONDS)), g$3(this, "reconnectTimeout"), g$3(this, "connectPromise"), g$3(this, "reconnectInProgress", false), g$3(this, "requestsInFlight", []), g$3(this, "connectTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND * 15)), g$3(this, "request", async (t) => {
      var i, s;
      this.logger.debug("Publishing Request Payload");
      const n = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n, method: t.method, topic: (i = t.params) == null ? void 0 : i.topic }, "relayer.request - publishing...");
        const o = `${n}:${((s = t.params) == null ? void 0 : s.tag) || ""}`;
        this.requestsInFlight.push(o);
        const a = await this.provider.request(t);
        return this.requestsInFlight = this.requestsInFlight.filter((c) => c !== o), a;
      } catch (o) {
        throw this.logger.debug(`Failed to Publish Request: ${n}`), o;
      }
    }), g$3(this, "resetPingTimeout", () => {
      rn$1() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var t, i, s, n;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n = (s = (i = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i.socket) == null ? void 0 : s.terminate) == null || n.call(s);
        } catch (o) {
          this.logger.warn(o, o?.message);
        }
      }, this.heartBeatTimeout));
    }), g$3(this, "onPayloadHandler", (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }), g$3(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(C$3.connect);
    }), g$3(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), g$3(this, "onProviderErrorHandler", (t) => {
      this.logger.fatal(`Fatal socket error: ${t.message}`), this.events.emit(C$3.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), g$3(this, "registerProviderListeners", () => {
      this.provider.on(M$3.payload, this.onPayloadHandler), this.provider.on(M$3.connect, this.onConnectHandler), this.provider.on(M$3.disconnect, this.onDisconnectHandler), this.provider.on(M$3.error, this.onProviderErrorHandler);
    }), this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? E$2(e.logger, this.name) : Ne$1(k$3({ level: e.logger || zt$1 })), this.messages = new Ti(this.logger, e.core), this.subscriber = new Oi(this, this.logger), this.publisher = new Yn(this, this.logger), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || Ke$2, ci$1() ? this.packageName = ai$1() : fi$1() && (this.bundleId = ai$1()), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.transportOpen().catch((e) => this.logger.warn(e, e?.message));
  }
  get context() {
    return y$4(this.logger);
  }
  get connected() {
    var e, t, i;
    return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 1 || false;
  }
  get connecting() {
    var e, t, i;
    return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now(), transportType: ee$1.relay }, ye$1.outbound);
  }
  async publishCustom(e) {
    this.isInitialized(), await this.publisher.publishCustom(e);
  }
  async subscribe(e, t) {
    var i, s, n;
    this.isInitialized(), (!(t != null && t.transportType) || t?.transportType === "relay") && await this.toEstablishConnection();
    const o = typeof ((i = t?.internal) == null ? void 0 : i.throwOnFailedPublish) > "u" ? true : (s = t?.internal) == null ? void 0 : s.throwOnFailedPublish;
    let a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c;
    const h = (l) => {
      l.topic === e && (this.subscriber.off(U$1.created, h), c());
    };
    return await Promise.all([new Promise((l) => {
      c = l, this.subscriber.on(U$1.created, h);
    }), new Promise(async (l, p) => {
      a = await this.subscriber.subscribe(e, Ai({ internal: { throwOnFailedPublish: o } }, t)).catch((y) => {
        o && p(y);
      }) || a, l();
    })]), a;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Ei$1(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, i) => {
      await this.connect(e).then(t).catch(i).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await fu()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if (e?.length === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e.sort((i, s) => i.publishedAt - s.publishedAt);
    this.logger.debug(`Batch of ${t.length} message events sorted`);
    for (const i of t) try {
      await this.onMessageEvent(i);
    } catch (s) {
      this.logger.warn(s, "Error while processing batch message event: " + s?.message);
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e, t) {
    const { topic: i } = e;
    if (!t.sessionExists) {
      const s = Si$1(cjsExports$1.FIVE_MINUTES), n = { topic: i, expiry: s, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(i, n);
    }
    this.events.emit(C$3.message, e), await this.recordMessageEvent(e, ye$1.inbound);
  }
  async connect(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t = 1;
    for (; t < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (i, s) => {
          const n = () => {
            s(new Error("Connection interrupted while trying to connect"));
          };
          this.provider.once(M$3.disconnect, n), await Ei$1(new Promise((o, a) => {
            this.provider.connect().then(o).catch(a);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
            s(o);
          }).finally(() => {
            this.provider.off(M$3.disconnect, n), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o, a) => {
            const c = () => {
              s(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(M$3.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
              this.provider.off(M$3.disconnect, c);
            });
          }), this.hasExperiencedNetworkDisruption = false, i();
        });
      } catch (i) {
        await this.subscriber.stop();
        const s = i;
        this.logger.warn({}, s.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
        break;
      }
      await new Promise((i) => setTimeout(i, cjsExports$1.toMiliseconds(t * 1))), t++;
    }
  }
  startPingTimeout() {
    var e, t, i, s, n;
    if (rn$1()) try {
      (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((n = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || n.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o) {
      this.logger.warn(o, o?.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o$4(new f$7(di$1({ sdkVersion: Pe$1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e, t) {
    const { topic: i, message: s } = e;
    await this.messages.set(i, s, t);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    if (!i || i.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i}`), true;
    if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), true;
    const s = this.messages.has(t, i);
    return s && this.logger.warn(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(kt$1)) return;
      const t = e.params, { topic: i, message: s, publishedAt: n, attestation: o } = t.data, a = { topic: i, message: s, publishedAt: n, transportType: ee$1.relay, attestation: o };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ai({ type: "event", event: t.id }, a)), this.events.emit(t.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else isJsonRpcResponse(e) && this.events.emit(C$3.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, ye$1.inbound), this.events.emit(C$3.message, e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(M$3.payload, this.onPayloadHandler), this.provider.off(M$3.connect, this.onConnectHandler), this.provider.off(M$3.disconnect, this.onDisconnectHandler), this.provider.off(M$3.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await fu();
    au(async (t) => {
      e !== t && (e = t, t ? await this.transportOpen().catch((i) => this.logger.error(i, i?.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    }), this.core.heartbeat.on(r$3.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && uu()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (t) {
        this.logger.warn(t, t?.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(C$3.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e, e?.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, cjsExports$1.toMiliseconds(jt$1)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectPromise) {
        await this.connectPromise;
        return;
      }
      await this.connect();
    }
  }
}
function ao(r, e) {
  return r === e || Number.isNaN(r) && Number.isNaN(e);
}
function Ni(r) {
  return Object.getOwnPropertySymbols(r).filter((e) => Object.prototype.propertyIsEnumerable.call(r, e));
}
function $i(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
const co = "[object RegExp]", ho = "[object String]", lo = "[object Number]", uo = "[object Boolean]", zi = "[object Arguments]", go = "[object Symbol]", po = "[object Date]", yo = "[object Map]", bo = "[object Set]", mo = "[object Array]", fo = "[object Function]", Do = "[object ArrayBuffer]", Ze$1 = "[object Object]", vo = "[object Error]", wo = "[object DataView]", _o = "[object Uint8Array]", Eo = "[object Uint8ClampedArray]", Io = "[object Uint16Array]", To = "[object Uint32Array]", Co = "[object BigUint64Array]", Po = "[object Int8Array]", So = "[object Int16Array]", Oo = "[object Int32Array]", Ro = "[object BigInt64Array]", Ao = "[object Float32Array]", xo = "[object Float64Array]";
function No() {
}
function Li(r) {
  if (!r || typeof r != "object") return false;
  const e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(r) === "[object Object]" : false;
}
function $o(r, e, t) {
  return De$1(r, e, void 0, void 0, void 0, void 0, t);
}
function De$1(r, e, t, i, s, n, o) {
  const a = o(r, e, t, i, s, n);
  if (a !== void 0) return a;
  if (typeof r == typeof e) switch (typeof r) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return r === e;
    case "number":
      return r === e || Object.is(r, e);
    case "function":
      return r === e;
    case "object":
      return ve$1(r, e, n, o);
  }
  return ve$1(r, e, n, o);
}
function ve$1(r, e, t, i) {
  if (Object.is(r, e)) return true;
  let s = $i(r), n = $i(e);
  if (s === zi && (s = Ze$1), n === zi && (n = Ze$1), s !== n) return false;
  switch (s) {
    case ho:
      return r.toString() === e.toString();
    case lo: {
      const c = r.valueOf(), h = e.valueOf();
      return ao(c, h);
    }
    case uo:
    case po:
    case go:
      return Object.is(r.valueOf(), e.valueOf());
    case co:
      return r.source === e.source && r.flags === e.flags;
    case fo:
      return r === e;
  }
  t = t ?? /* @__PURE__ */ new Map();
  const o = t.get(r), a = t.get(e);
  if (o != null && a != null) return o === e;
  t.set(r, e), t.set(e, r);
  try {
    switch (s) {
      case yo: {
        if (r.size !== e.size) return false;
        for (const [c, h] of r.entries()) if (!e.has(c) || !De$1(h, e.get(c), c, r, e, t, i)) return false;
        return true;
      }
      case bo: {
        if (r.size !== e.size) return false;
        const c = Array.from(r.values()), h = Array.from(e.values());
        for (let l = 0; l < c.length; l++) {
          const p = c[l], y = h.findIndex((w) => De$1(p, w, void 0, r, e, t, i));
          if (y === -1) return false;
          h.splice(y, 1);
        }
        return true;
      }
      case mo:
      case _o:
      case Eo:
      case Io:
      case To:
      case Co:
      case Po:
      case So:
      case Oo:
      case Ro:
      case Ao:
      case xo: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r) !== Buffer.isBuffer(e) || r.length !== e.length) return false;
        for (let c = 0; c < r.length; c++) if (!De$1(r[c], e[c], c, r, e, t, i)) return false;
        return true;
      }
      case Do:
        return r.byteLength !== e.byteLength ? false : ve$1(new Uint8Array(r), new Uint8Array(e), t, i);
      case wo:
        return r.byteLength !== e.byteLength || r.byteOffset !== e.byteOffset ? false : ve$1(new Uint8Array(r), new Uint8Array(e), t, i);
      case vo:
        return r.name === e.name && r.message === e.message;
      case Ze$1: {
        if (!(ve$1(r.constructor, e.constructor, t, i) || Li(r) && Li(e))) return false;
        const h = [...Object.keys(r), ...Ni(r)], l = [...Object.keys(e), ...Ni(e)];
        if (h.length !== l.length) return false;
        for (let p = 0; p < h.length; p++) {
          const y = h[p], w = r[y];
          if (!Object.hasOwn(e, y)) return false;
          const u = e[y];
          if (!De$1(w, u, y, r, e, t, i)) return false;
        }
        return true;
      }
      default:
        return false;
    }
  } finally {
    t.delete(r), t.delete(e);
  }
}
function zo(r, e) {
  return $o(r, e, No);
}
var Lo = Object.defineProperty, ki = Object.getOwnPropertySymbols, ko = Object.prototype.hasOwnProperty, jo = Object.prototype.propertyIsEnumerable, Qe$1 = (r, e, t) => e in r ? Lo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, ji = (r, e) => {
  for (var t in e || (e = {})) ko.call(e, t) && Qe$1(r, t, e[t]);
  if (ki) for (var t of ki(e)) jo.call(e, t) && Qe$1(r, t, e[t]);
  return r;
}, F$1 = (r, e, t) => Qe$1(r, typeof e != "symbol" ? e + "" : e, t);
class Ui extends f$5 {
  constructor(e, t, i, s = W$1, n = void 0) {
    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, F$1(this, "map", /* @__PURE__ */ new Map()), F$1(this, "version", Ut$1), F$1(this, "cached", []), F$1(this, "initialized", false), F$1(this, "getKey"), F$1(this, "storagePrefix", W$1), F$1(this, "recentlyDeleted", []), F$1(this, "recentlyDeletedLimit", 200), F$1(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !Dt$1(o) ? this.map.set(this.getKey(o), o) : Fa(o) ? this.map.set(o.id, o) : Za(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = true);
    }), F$1(this, "set", async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }), F$1(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o))), F$1(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => zo(a[c], o[c]))) : this.values)), F$1(this, "update", async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const c = ji(ji({}, this.getData(o)), a);
      this.map.set(o, c), await this.persist();
    }), F$1(this, "delete", async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
    }), this.logger = E$2(t, this.name), this.storagePrefix = s, this.getKey = n;
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = Bt$2("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(s), new Error(s);
      }
      const { message: i } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var Uo = Object.defineProperty, Fo = (r, e, t) => e in r ? Uo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, d$4 = (r, e, t) => Fo(r, typeof e != "symbol" ? e + "" : e, t);
class Fi {
  constructor(e, t) {
    this.core = e, this.logger = t, d$4(this, "name", Bt$1), d$4(this, "version", Vt$1), d$4(this, "events", new xe$1()), d$4(this, "pairings"), d$4(this, "initialized", false), d$4(this, "storagePrefix", W$1), d$4(this, "ignoredPayloadTypes", [ie$1]), d$4(this, "registeredMethods", []), d$4(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), d$4(this, "register", ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }), d$4(this, "create", async (i) => {
      this.isInitialized();
      const s = aa(), n = await this.core.crypto.setSymKey(s), o = Si$1(cjsExports$1.FIVE_MINUTES), a = { protocol: $t$1 }, c = { topic: n, expiry: o, relay: a, active: false, methods: i?.methods }, h = _a({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: s, relay: a, expiryTimestamp: o, methods: i?.methods });
      return this.events.emit(ae$1.create, c), this.core.expirer.set(n, o), await this.pairings.set(n, c), await this.core.relayer.subscribe(n, { transportType: i?.transportType, internal: i?.internal }), { topic: n, uri: h };
    }), d$4(this, "pair", async (i) => {
      this.isInitialized();
      const s = this.core.eventClient.createEvent({ properties: { topic: i?.uri, trace: [Y.pairing_started] } });
      this.isValidPair(i, s);
      const { topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: h } = Ua(i.uri);
      s.props.properties.topic = n, s.addTrace(Y.pairing_uri_validation_success), s.addTrace(Y.pairing_uri_not_expired);
      let l;
      if (this.pairings.keys.includes(n)) {
        if (l = this.pairings.get(n), s.addTrace(Y.existing_pairing), l.active) throw s.setError(X.active_pairing_already_exists), new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
        s.addTrace(Y.pairing_not_expired);
      }
      const p = c || Si$1(cjsExports$1.FIVE_MINUTES), y = { topic: n, relay: a, expiry: p, active: false, methods: h };
      this.core.expirer.set(n, p), await this.pairings.set(n, y), s.addTrace(Y.store_new_pairing), i.activatePairing && await this.activate({ topic: n }), this.events.emit(ae$1.create, y), s.addTrace(Y.emit_inactive_pairing), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n), s.addTrace(Y.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s.setError(X.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n, { relay: a });
      } catch (w) {
        throw s.setError(X.subscribe_pairing_topic_failure), w;
      }
      return s.addTrace(Y.subscribe_pairing_topic_success), y;
    }), d$4(this, "activate", async ({ topic: i }) => {
      this.isInitialized();
      const s = Si$1(cjsExports$1.FIVE_MINUTES);
      this.core.expirer.set(i, s), await this.pairings.update(i, { active: true, expiry: s });
    }), d$4(this, "ping", async (i) => {
      this.isInitialized(), await this.isValidPing(i), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = xi$1();
        this.events.once(Ni$1("pairing_ping", n), ({ error: h }) => {
          h ? c(h) : a();
        }), await o();
      }
    }), d$4(this, "updateExpiry", async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }), d$4(this, "updateMetadata", async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }), d$4(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), d$4(this, "disconnect", async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", zt$2("USER_DISCONNECTED")), await this.deletePairing(s));
    }), d$4(this, "formatUriFromPairing", (i) => {
      this.isInitialized();
      const { topic: s, relay: n, expiry: o, methods: a } = i, c = this.core.crypto.keychain.get(s);
      return _a({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: c, relay: n, expiryTimestamp: o, methods: a });
    }), d$4(this, "sendRequest", async (i, s, n) => {
      const o = formatJsonRpcRequest(s, n), a = await this.core.crypto.encode(i, o), c = oe$1[s].req;
      return this.core.history.set(i, o), this.core.relayer.publish(i, a, c), o.id;
    }), d$4(this, "sendResult", async (i, s, n) => {
      const o = formatJsonRpcResult(i, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, i)).request.method, h = oe$1[c].res;
      await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
    }), d$4(this, "sendError", async (i, s, n) => {
      const o = formatJsonRpcError(i, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, i)).request.method, h = oe$1[c] ? oe$1[c].res : oe$1.unregistered_method.res;
      await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
    }), d$4(this, "deletePairing", async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, zt$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }), d$4(this, "cleanup", async () => {
      const i = this.pairings.getAll().filter((s) => Oi$1(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }), d$4(this, "onRelayEventRequest", async (i) => {
      const { topic: s, payload: n } = i;
      switch (n.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s, n);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s, n);
        default:
          return await this.onUnknownRpcMethodRequest(s, n);
      }
    }), d$4(this, "onRelayEventResponse", async (i) => {
      const { topic: s, payload: n } = i, o = (await this.core.history.get(s, n.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }), d$4(this, "onPairingPingRequest", async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(n, i, true), this.events.emit(ae$1.ping, { id: n, topic: i });
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }), d$4(this, "onPairingPingResponse", (i, s) => {
      const { id: n } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(Ni$1("pairing_ping", n), {}) : isJsonRpcError(s) && this.events.emit(Ni$1("pairing_ping", n), { error: s.error });
      }, 500);
    }), d$4(this, "onPairingDeleteRequest", async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(ae$1.delete, { id: n, topic: i });
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }), d$4(this, "onUnknownRpcMethodRequest", async (i, s) => {
      const { id: n, method: o } = s;
      try {
        if (this.registeredMethods.includes(o)) return;
        const a = zt$2("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(n, i, a), this.logger.error(a);
      }
    }), d$4(this, "onUnknownRpcMethodResponse", (i) => {
      this.registeredMethods.includes(i) || this.logger.error(zt$2("WC_METHOD_UNSUPPORTED", i));
    }), d$4(this, "isValidPair", (i, s) => {
      var n;
      if (!Xa(i)) {
        const { message: a } = Bt$2("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw s.setError(X.malformed_pairing_uri), new Error(a);
      }
      if (!qa(i.uri)) {
        const { message: a } = Bt$2("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw s.setError(X.malformed_pairing_uri), new Error(a);
      }
      const o = Ua(i?.uri);
      if (!((n = o?.relay) != null && n.protocol)) {
        const { message: a } = Bt$2("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s.setError(X.malformed_pairing_uri), new Error(a);
      }
      if (!(o != null && o.symKey)) {
        const { message: a } = Bt$2("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s.setError(X.malformed_pairing_uri), new Error(a);
      }
      if (o != null && o.expiryTimestamp && cjsExports$1.toMiliseconds(o?.expiryTimestamp) < Date.now()) {
        s.setError(X.pairing_expired);
        const { message: a } = Bt$2("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }), d$4(this, "isValidPing", async (i) => {
      if (!Xa(i)) {
        const { message: n } = Bt$2("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }), d$4(this, "isValidDisconnect", async (i) => {
      if (!Xa(i)) {
        const { message: n } = Bt$2("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }), d$4(this, "isValidPairingTopic", async (i) => {
      if (!ft$2(i, false)) {
        const { message: s } = Bt$2("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = Bt$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (Oi$1(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = Bt$2("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }), this.core = e, this.logger = E$2(t, this.name), this.pairings = new Ui(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y$4(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(C$3.message, async (e) => {
      const { topic: t, message: i, transportType: s } = e;
      if (this.pairings.keys.includes(t) && s !== ee$1.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) try {
        const n = await this.core.crypto.decode(t, i);
        isJsonRpcRequest(n) ? (this.core.history.set(t, n), await this.onRelayEventRequest({ topic: t, payload: n })) : isJsonRpcResponse(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: t, payload: n }), this.core.history.delete(t, n.id)), await this.core.relayer.messages.ack(t, i);
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(q.expired, async (e) => {
      const { topic: t } = Ii$1(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(ae$1.expire, { topic: t }));
    });
  }
}
var Mo = Object.defineProperty, Ko = (r, e, t) => e in r ? Mo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, N$2 = (r, e, t) => Ko(r, typeof e != "symbol" ? e + "" : e, t);
class Mi extends I$2 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, N$2(this, "records", /* @__PURE__ */ new Map()), N$2(this, "events", new eventsExports.EventEmitter()), N$2(this, "name", qt$1), N$2(this, "version", Gt$1), N$2(this, "cached", []), N$2(this, "initialized", false), N$2(this, "storagePrefix", W$1), N$2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), N$2(this, "set", (i, s, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: n }), this.records.has(s.id)) return;
      const o = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: n, expiry: Si$1(cjsExports$1.THIRTY_DAYS) };
      this.records.set(o.id, o), this.persist(), this.events.emit(V$1.created, o);
    }), N$2(this, "resolve", async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id)) return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = isJsonRpcError(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.persist(), this.events.emit(V$1.updated, s));
    }), N$2(this, "get", async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s))), N$2(this, "delete", (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n) => {
        if (n.topic === i) {
          if (typeof s < "u" && n.id !== s) return;
          this.records.delete(n.id), this.events.emit(V$1.deleted, n);
        }
      }), this.persist();
    }), N$2(this, "exists", async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : false)), N$2(this, "on", (i, s) => {
      this.events.on(i, s);
    }), N$2(this, "once", (i, s) => {
      this.events.once(i, s);
    }), N$2(this, "off", (i, s) => {
      this.events.off(i, s);
    }), N$2(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), this.logger = E$2(t, this.name);
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(V$1.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(V$1.created, (e) => {
      const t = V$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(V$1.updated, (e) => {
      const t = V$1.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(V$1.deleted, (e) => {
      const t = V$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.core.heartbeat.on(r$3.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = false;
      this.records.forEach((t) => {
        cjsExports$1.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(V$1.deleted, t, false), e = true);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var Bo = Object.defineProperty, Vo = (r, e, t) => e in r ? Bo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, z$3 = (r, e, t) => Vo(r, typeof e != "symbol" ? e + "" : e, t);
class Ki extends S$5 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, z$3(this, "expirations", /* @__PURE__ */ new Map()), z$3(this, "events", new eventsExports.EventEmitter()), z$3(this, "name", Wt$1), z$3(this, "version", Ht$1), z$3(this, "cached", []), z$3(this, "initialized", false), z$3(this, "storagePrefix", W$1), z$3(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), z$3(this, "has", (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return false;
      }
    }), z$3(this, "set", (i, s) => {
      this.isInitialized();
      const n = this.formatTarget(i), o = { target: n, expiry: s };
      this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(q.created, { target: n, expiration: o });
    }), z$3(this, "get", (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }), z$3(this, "del", (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), n = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(q.deleted, { target: s, expiration: n });
      }
    }), z$3(this, "on", (i, s) => {
      this.events.on(i, s);
    }), z$3(this, "once", (i, s) => {
      this.events.once(i, s);
    }), z$3(this, "off", (i, s) => {
      this.events.off(i, s);
    }), z$3(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), this.logger = E$2(t, this.name);
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return Bi$1(e);
    if (typeof e == "number") return Ai$1(e);
    const { message: t } = Bt$2("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(q.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    cjsExports$1.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(q.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r$3.pulse, () => this.checkExpirations()), this.events.on(q.created, (e) => {
      const t = q.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(q.expired, (e) => {
      const t = q.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(q.deleted, (e) => {
      const t = q.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var qo = Object.defineProperty, Go = (r, e, t) => e in r ? qo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, P$2 = (r, e, t) => Go(r, typeof e != "symbol" ? e + "" : e, t);
class Bi extends M$4 {
  constructor(e, t, i) {
    super(e, t, i), this.core = e, this.logger = t, this.store = i, P$2(this, "name", Yt$1), P$2(this, "abortController"), P$2(this, "isDevEnv"), P$2(this, "verifyUrlV3", Xt$1), P$2(this, "storagePrefix", W$1), P$2(this, "version", Fe$1), P$2(this, "publicKey"), P$2(this, "fetchPromise"), P$2(this, "init", async () => {
      var s;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && cjsExports$1.toMiliseconds((s = this.publicKey) == null ? void 0 : s.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), P$2(this, "register", async (s) => {
      if (!Wt$2() || this.isDevEnv) return;
      const n = window.location.origin, { id: o, decryptedId: a } = s, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
      try {
        const h = cjsExports$2.getDocument(), l = this.startAbortTimer(cjsExports$1.ONE_SECOND * 5), p = await new Promise((y, w) => {
          const u = () => {
            window.removeEventListener("message", D), h.body.removeChild(m), w("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", u);
          const m = h.createElement("iframe");
          m.src = c, m.style.display = "none", m.addEventListener("error", u, { signal: this.abortController.signal });
          const D = (_) => {
            if (_.data && typeof _.data == "string") try {
              const E = JSON.parse(_.data);
              if (E.type === "verify_attestation") {
                if (sn$1(E.attestation).payload.id !== o) return;
                clearInterval(l), h.body.removeChild(m), this.abortController.signal.removeEventListener("abort", u), window.removeEventListener("message", D), y(E.attestation === null ? "" : E.attestation);
              }
            } catch (E) {
              this.logger.warn(E);
            }
          };
          h.body.appendChild(m), window.addEventListener("message", D, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", p), p;
      } catch (h) {
        this.logger.warn(h);
      }
      return "";
    }), P$2(this, "resolve", async (s) => {
      if (this.isDevEnv) return "";
      const { attestationId: n, hash: o, encryptedId: a } = s;
      if (n === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n) {
        if (sn$1(n).payload.id !== a) return;
        const h = await this.isValidJwtAttestation(n);
        if (h) {
          if (!h.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h;
        }
      }
      if (!o) return;
      const c = this.getVerifyUrl(s?.verifyUrl);
      return this.fetchAttestation(o, c);
    }), P$2(this, "fetchAttestation", async (s, n) => {
      this.logger.debug(`resolving attestation: ${s} from url: ${n}`);
      const o = this.startAbortTimer(cjsExports$1.ONE_SECOND * 5), a = await fetch(`${n}/attestation/${s}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
    }), P$2(this, "getVerifyUrl", (s) => {
      let n = s || be$1;
      return Zt$1.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${be$1}`), n = be$1), n;
    }), P$2(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s = this.startAbortTimer(cjsExports$1.FIVE_SECONDS), n = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s), await n.json();
      } catch (s) {
        this.logger.warn(s);
      }
    }), P$2(this, "persistPublicKey", async (s) => {
      this.logger.debug("persisting public key to local storage", s), await this.store.setItem(this.storeKey, s), this.publicKey = s;
    }), P$2(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), P$2(this, "isValidJwtAttestation", async (s) => {
      const n = await this.getPublicKey();
      try {
        if (n) return this.validateAttestation(s, n);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
      const o = await this.fetchAndPersistPublicKey();
      try {
        if (o) return this.validateAttestation(s, o);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
    }), P$2(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), P$2(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n) => {
        const o = await this.fetchPublicKey();
        o && (await this.persistPublicKey(o), n(o));
      });
      const s = await this.fetchPromise;
      return this.fetchPromise = void 0, s;
    }), P$2(this, "validateAttestation", (s, n) => {
      const o = va(s, n.publicKey), a = { hasExpired: cjsExports$1.toMiliseconds(o.exp) < Date.now(), payload: o };
      if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a.payload.origin, isScam: a.payload.isScam, isVerified: a.payload.isVerified };
    }), this.logger = E$2(t, this.name), this.abortController = new AbortController(), this.isDevEnv = Ti$1(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y$4(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjsExports$1.toMiliseconds(e));
  }
}
var Wo = Object.defineProperty, Ho = (r, e, t) => e in r ? Wo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, Vi = (r, e, t) => Ho(r, typeof e != "symbol" ? e + "" : e, t);
class qi extends O$2 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, Vi(this, "context", Qt$1), Vi(this, "registerDeviceToken", async (i) => {
      const { clientId: s, token: n, notificationType: o, enableEncrypted: a = false } = i, c = `${ei}/${this.projectId}/clients`;
      await fetch(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o, token: n, always_raw: a }) });
    }), this.logger = E$2(t, this.context);
  }
}
var Yo = Object.defineProperty, Gi = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Xo = Object.prototype.propertyIsEnumerable, et$1 = (r, e, t) => e in r ? Yo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, we$2 = (r, e) => {
  for (var t in e || (e = {})) Jo.call(e, t) && et$1(r, t, e[t]);
  if (Gi) for (var t of Gi(e)) Xo.call(e, t) && et$1(r, t, e[t]);
  return r;
}, R$2 = (r, e, t) => et$1(r, typeof e != "symbol" ? e + "" : e, t);
class Wi extends R$3 {
  constructor(e, t, i = true) {
    super(e, t, i), this.core = e, this.logger = t, R$2(this, "context", ii), R$2(this, "storagePrefix", W$1), R$2(this, "storageVersion", ti), R$2(this, "events", /* @__PURE__ */ new Map()), R$2(this, "shouldPersist", false), R$2(this, "init", async () => {
      if (!Ti$1()) try {
        const s = { eventId: $i$1(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: wr$1(this.core.relayer.protocol, this.core.relayer.version, Pe$1) } } };
        await this.sendEvent([s]);
      } catch (s) {
        this.logger.warn(s);
      }
    }), R$2(this, "createEvent", (s) => {
      const { event: n = "ERROR", type: o = "", properties: { topic: a, trace: c } } = s, h = $i$1(), l = this.core.projectId || "", p = Date.now(), y = we$2({ eventId: h, timestamp: p, props: { event: n, type: o, properties: { topic: a, trace: c } }, bundleId: l, domain: this.getAppDomain() }, this.setMethods(h));
      return this.telemetryEnabled && (this.events.set(h, y), this.shouldPersist = true), y;
    }), R$2(this, "getEvent", (s) => {
      const { eventId: n, topic: o } = s;
      if (n) return this.events.get(n);
      const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
      if (a) return we$2(we$2({}, a), this.setMethods(a.eventId));
    }), R$2(this, "deleteEvent", (s) => {
      const { eventId: n } = s;
      this.events.delete(n), this.shouldPersist = true;
    }), R$2(this, "setEventListeners", () => {
      this.core.heartbeat.on(r$3.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s) => {
          cjsExports$1.fromMiliseconds(Date.now()) - cjsExports$1.fromMiliseconds(s.timestamp) > si && (this.events.delete(s.eventId), this.shouldPersist = true);
        });
      });
    }), R$2(this, "setMethods", (s) => ({ addTrace: (n) => this.addTrace(s, n), setError: (n) => this.setError(s, n) })), R$2(this, "addTrace", (s, n) => {
      const o = this.events.get(s);
      o && (o.props.properties.trace.push(n), this.events.set(s, o), this.shouldPersist = true);
    }), R$2(this, "setError", (s, n) => {
      const o = this.events.get(s);
      o && (o.props.type = n, o.timestamp = Date.now(), this.events.set(s, o), this.shouldPersist = true);
    }), R$2(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), R$2(this, "restore", async () => {
      try {
        const s = await this.core.storage.getItem(this.storageKey) || [];
        if (!s.length) return;
        s.forEach((n) => {
          this.events.set(n.eventId, we$2(we$2({}, n), this.setMethods(n.eventId)));
        });
      } catch (s) {
        this.logger.warn(s);
      }
    }), R$2(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s = [];
      for (const [n, o] of this.events) o.props.type && s.push(o);
      if (s.length !== 0) try {
        if ((await this.sendEvent(s)).ok) for (const n of s) this.events.delete(n.eventId), this.shouldPersist = true;
      } catch (n) {
        this.logger.warn(n);
      }
    }), R$2(this, "sendEvent", async (s) => {
      const n = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${ri}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Pe$1}${n}`, { method: "POST", body: JSON.stringify(s) });
    }), R$2(this, "getAppDomain", () => br$1().url), this.logger = E$2(t, this.context), this.telemetryEnabled = i, i ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var Zo = Object.defineProperty, Hi = Object.getOwnPropertySymbols, Qo = Object.prototype.hasOwnProperty, ea = Object.prototype.propertyIsEnumerable, tt$1 = (r, e, t) => e in r ? Zo(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, Yi = (r, e) => {
  for (var t in e || (e = {})) Qo.call(e, t) && tt$1(r, t, e[t]);
  if (Hi) for (var t of Hi(e)) ea.call(e, t) && tt$1(r, t, e[t]);
  return r;
}, v$2 = (r, e, t) => tt$1(r, typeof e != "symbol" ? e + "" : e, t);
let Oe$1 = class Oe extends h$3 {
  constructor(e) {
    var t;
    super(e), v$2(this, "protocol", Ue$1), v$2(this, "version", Fe$1), v$2(this, "name", pe$2), v$2(this, "relayUrl"), v$2(this, "projectId"), v$2(this, "customStoragePrefix"), v$2(this, "events", new eventsExports.EventEmitter()), v$2(this, "logger"), v$2(this, "heartbeat"), v$2(this, "relayer"), v$2(this, "crypto"), v$2(this, "storage"), v$2(this, "history"), v$2(this, "expirer"), v$2(this, "pairing"), v$2(this, "verify"), v$2(this, "echoClient"), v$2(this, "linkModeSupportedApps"), v$2(this, "eventClient"), v$2(this, "initialized", false), v$2(this, "logChunkController"), v$2(this, "on", (a, c) => this.events.on(a, c)), v$2(this, "once", (a, c) => this.events.once(a, c)), v$2(this, "off", (a, c) => this.events.off(a, c)), v$2(this, "removeListener", (a, c) => this.events.removeListener(a, c)), v$2(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: h }) => {
      if (!a || !c) return;
      const l = { topic: a, message: c, publishedAt: Date.now(), transportType: ee$1.link_mode };
      this.relayer.onLinkMessageEvent(l, { sessionExists: h });
    });
    const i = this.getGlobalCore(e?.customStoragePrefix);
    if (i) try {
      return this.customStoragePrefix = i.customStoragePrefix, this.logger = i.logger, this.heartbeat = i.heartbeat, this.crypto = i.crypto, this.history = i.history, this.expirer = i.expirer, this.storage = i.storage, this.relayer = i.relayer, this.pairing = i.pairing, this.verify = i.verify, this.echoClient = i.echoClient, this.linkModeSupportedApps = i.linkModeSupportedApps, this.eventClient = i.eventClient, this.initialized = i.initialized, this.logChunkController = i.logChunkController, i;
    } catch (a) {
      console.warn("Failed to copy global core", a);
    }
    this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || Ke$2, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const s = k$3({ level: typeof e?.logger == "string" && e.logger ? e.logger : It$2.logger, name: pe$2 }), { logger: n, chunkLoggerController: o } = A$4({ opts: s, maxSizeInBytes: e?.maxLogBlobSizeInBytes, loggerOverride: e?.logger });
    this.logChunkController = o, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a, c;
      (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E$2(n, this.name), this.heartbeat = new i$7(), this.crypto = new Ei(this, this.logger, e?.keychain), this.history = new Mi(this, this.logger), this.expirer = new Ki(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h$4(Yi(Yi({}, Tt$1), e?.storageOptions)), this.relayer = new xi({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Fi(this, this.logger), this.verify = new Bi(this, this.logger, this.storage), this.echoClient = new qi(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Wi(this, this.logger, e?.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e) {
    const t = new Oe(e);
    await t.initialize();
    const i = await t.crypto.getClientId();
    return await t.storage.setItem(Ft$1, i), t;
  }
  get context() {
    return y$4(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(Be$1, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Be$1) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
  getGlobalCore(e = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const t = `_walletConnectCore_${e}`, i = `${t}_count`;
      return globalThis[i] = (globalThis[i] || 0) + 1, globalThis[i] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`), globalThis[t];
    } catch (t) {
      console.warn("Failed to get global WalletConnect core", t);
      return;
    }
  }
  setGlobalCore(e) {
    var t;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i = `_walletConnectCore_${((t = e.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
      globalThis[i] = e;
    } catch (i) {
      console.warn("Failed to set global WalletConnect core", i);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && define_process_env_default.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return true;
    }
  }
};
const ta = Oe$1;

const Ve$1="wc",ke$1=2,De="client",we$1=`${Ve$1}@${ke$1}:${De}:`,me$1={name:De,logger:"error"},Le$1="WALLETCONNECT_DEEPLINK_CHOICE",dt$1="proposal",Me$1="Proposal expired",ut$1="session",B$3=cjsExports$1.SEVEN_DAYS,gt$1="engine",P$1={wc_sessionPropose:{req:{ttl:cjsExports$1.FIVE_MINUTES,prompt:true,tag:1100},res:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1101},reject:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1120},autoReject:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1121}},wc_sessionSettle:{req:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1102},res:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1103}},wc_sessionUpdate:{req:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1104},res:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1105}},wc_sessionExtend:{req:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1106},res:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1107}},wc_sessionRequest:{req:{ttl:cjsExports$1.FIVE_MINUTES,prompt:true,tag:1108},res:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1109}},wc_sessionEvent:{req:{ttl:cjsExports$1.FIVE_MINUTES,prompt:true,tag:1110},res:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1111}},wc_sessionDelete:{req:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1112},res:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1113}},wc_sessionPing:{req:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1114},res:{ttl:cjsExports$1.ONE_DAY,prompt:false,tag:1115}},wc_sessionAuthenticate:{req:{ttl:cjsExports$1.ONE_HOUR,prompt:true,tag:1116},res:{ttl:cjsExports$1.ONE_HOUR,prompt:false,tag:1117},reject:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1118},autoReject:{ttl:cjsExports$1.FIVE_MINUTES,prompt:false,tag:1119}}},_e={min:cjsExports$1.FIVE_MINUTES,max:cjsExports$1.SEVEN_DAYS},M$2={idle:"IDLE",active:"ACTIVE"},yt$1={eth_sendTransaction:{key:""},eth_sendRawTransaction:{key:""},wallet_sendCalls:{key:""},solana_signTransaction:{key:"signature"},solana_signAllTransactions:{key:"transactions"},solana_signAndSendTransaction:{key:"signature"},sui_signAndExecuteTransaction:{key:"digest"},sui_signTransaction:{key:""},hedera_signAndExecuteTransaction:{key:"transactionId"},hedera_executeTransaction:{key:"transactionId"},near_signTransaction:{key:""},near_signTransactions:{key:""},tron_signTransaction:{key:"txID"},xrpl_signTransaction:{key:""},xrpl_signTransactionFor:{key:""},algo_signTxn:{key:""},sendTransfer:{key:"txid"},stacks_stxTransfer:{key:"txId"},polkadot_signTransaction:{key:""},cosmos_signDirect:{key:""}},wt$1="request",mt$1=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],_t$1="wc",ft$1="auth",St$1="authKeys",Et$1="pairingTopics",Rt$1="requests",le$1=`${_t$1}@${1.5}:${ft$1}:`,pe$1=`${le$1}:PUB_KEY`;var bs=Object.defineProperty,As=Object.defineProperties,xs=Object.getOwnPropertyDescriptors,vt$1=Object.getOwnPropertySymbols,Cs=Object.prototype.hasOwnProperty,Vs=Object.prototype.propertyIsEnumerable,$e$1=(S,o,t)=>o in S?bs(S,o,{enumerable:true,configurable:true,writable:true,value:t}):S[o]=t,R$1=(S,o)=>{for(var t in o||(o={}))Cs.call(o,t)&&$e$1(S,t,o[t]);if(vt$1)for(var t of vt$1(o))Vs.call(o,t)&&$e$1(S,t,o[t]);return S},O$1=(S,o)=>As(S,xs(o)),c$4=(S,o,t)=>$e$1(S,typeof o!="symbol"?o+"":o,t);class ks extends V$2{constructor(o){super(o),c$4(this,"name",gt$1),c$4(this,"events",new xe$1),c$4(this,"initialized",false),c$4(this,"requestQueue",{state:M$2.idle,queue:[]}),c$4(this,"sessionRequestQueue",{state:M$2.idle,queue:[]}),c$4(this,"emittedSessionRequests",new ji$1({limit:500})),c$4(this,"requestQueueDelay",cjsExports$1.ONE_SECOND),c$4(this,"expectedPairingMethodMap",new Map),c$4(this,"recentlyDeletedMap",new Map),c$4(this,"recentlyDeletedLimit",200),c$4(this,"relayMessageCache",[]),c$4(this,"pendingSessions",new Map),c$4(this,"init",async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(P$1)}),this.initialized=true,setTimeout(async()=>{await this.processPendingMessageEvents(),this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue();},cjsExports$1.toMiliseconds(this.requestQueueDelay)));}),c$4(this,"connect",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const e=O$1(R$1({},t),{requiredNamespaces:t.requiredNamespaces||{},optionalNamespaces:t.optionalNamespaces||{}});await this.isValidConnect(e),e.optionalNamespaces=Ma(e.requiredNamespaces,e.optionalNamespaces),e.requiredNamespaces={};const{pairingTopic:s,requiredNamespaces:i,optionalNamespaces:r,sessionProperties:n,scopedProperties:a,relays:l}=e;let p=s,h,u=false;try{if(p){const T=this.client.core.pairing.pairings.get(p);this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),u=T.active;}}catch(T){throw this.client.logger.error(`connect() -> pairing.get(${p}) failed`),T}if(!p||!u){const{topic:T,uri:$}=await this.client.core.pairing.create({internal:{skipSubscribe:true}});p=T,h=$;}if(!p){const{message:T}=Bt$2("NO_MATCHING_KEY",`connect() pairing topic: ${p}`);throw new Error(T)}const d=await this.client.core.crypto.generateKeyPair(),y=P$1.wc_sessionPropose.req.ttl||cjsExports$1.FIVE_MINUTES,w=Si$1(y),m=O$1(R$1(R$1({requiredNamespaces:i,optionalNamespaces:r,relays:l??[{protocol:$t$1}],proposer:{publicKey:d,metadata:this.client.metadata},expiryTimestamp:w,pairingTopic:p},n&&{sessionProperties:n}),a&&{scopedProperties:a}),{id:payloadId()}),E=Ni$1("session_connect",m.id),{reject:_,resolve:b,done:V}=xi$1(y,Me$1),I=({id:T})=>{T===m.id&&(this.client.events.off("proposal_expire",I),this.pendingSessions.delete(m.id),this.events.emit(E,{error:{message:Me$1,code:0}}));};return this.client.events.on("proposal_expire",I),this.events.once(E,({error:T,session:$})=>{this.client.events.off("proposal_expire",I),T?_(T):$&&b($);}),await this.sendProposeSession({proposal:m,publishOpts:{internal:{throwOnFailedPublish:true},tvf:{correlationId:m.id}}}),await this.setProposal(m.id,m),{uri:h,approval:V}}),c$4(this,"pair",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(t)}catch(e){throw this.client.logger.error("pair() failed"),e}}),c$4(this,"approve",async t=>{var e,s,i;const r=this.client.core.eventClient.createEvent({properties:{topic:(e=t?.id)==null?void 0:e.toString(),trace:[rr.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow();}catch(N){throw r.setError(nr.no_internet_connection),N}try{await this.isValidProposalId(t?.id);}catch(N){throw this.client.logger.error(`approve() -> proposal.get(${t?.id}) failed`),r.setError(nr.proposal_not_found),N}try{await this.isValidApprove(t);}catch(N){throw this.client.logger.error("approve() -> isValidApprove() failed"),r.setError(nr.session_approve_namespace_validation_failure),N}const{id:n,relayProtocol:a,namespaces:l,sessionProperties:p,scopedProperties:h,sessionConfig:u}=t,d=this.client.proposal.get(n);this.client.core.eventClient.deleteEvent({eventId:r.eventId});const{pairingTopic:y,proposer:w,requiredNamespaces:m,optionalNamespaces:E}=d;let _=(s=this.client.core.eventClient)==null?void 0:s.getEvent({topic:y});_||(_=(i=this.client.core.eventClient)==null?void 0:i.createEvent({type:rr.session_approve_started,properties:{topic:y,trace:[rr.session_approve_started,rr.session_namespaces_validation_success]}}));const b=await this.client.core.crypto.generateKeyPair(),V=w.publicKey,I=await this.client.core.crypto.generateSharedKey(b,V),T=R$1(R$1(R$1({relay:{protocol:a??"irn"},namespaces:l,controller:{publicKey:b,metadata:this.client.metadata},expiry:Si$1(B$3)},p&&{sessionProperties:p}),h&&{scopedProperties:h}),u&&{sessionConfig:u}),$=ee$1.relay;_.addTrace(rr.subscribing_session_topic);try{await this.client.core.relayer.subscribe(I,{transportType:$,internal:{skipSubscribe:!0}});}catch(N){throw _.setError(nr.subscribe_session_topic_failure),N}_.addTrace(rr.subscribe_session_topic_success);const Se=O$1(R$1({},T),{topic:I,requiredNamespaces:m,optionalNamespaces:E,pairingTopic:y,acknowledged:false,self:T.controller,peer:{publicKey:w.publicKey,metadata:w.metadata},controller:b,transportType:ee$1.relay});await this.client.session.set(I,Se),_.addTrace(rr.store_session);try{await this.sendApproveSession({sessionTopic:I,proposal:d,pairingProposalResponse:{relay:{protocol:a??"irn"},responderPublicKey:b},sessionSettleRequest:T,publishOpts:{internal:{throwOnFailedPublish:!0},tvf:{correlationId:n}}}),_.addTrace(rr.session_approve_publish_success);}catch(N){throw this.client.logger.error(N),this.client.session.delete(I,zt$2("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(I),N}return this.client.core.eventClient.deleteEvent({eventId:_.eventId}),await this.client.core.pairing.updateMetadata({topic:y,metadata:w.metadata}),await this.deleteProposal(n),await this.client.core.pairing.activate({topic:y}),await this.setExpiry(I,Si$1(B$3)),{topic:I,acknowledged:()=>Promise.resolve(this.client.session.get(I))}}),c$4(this,"reject",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(t);}catch(r){throw this.client.logger.error("reject() -> isValidReject() failed"),r}const{id:e,reason:s}=t;let i;try{i=this.client.proposal.get(e).pairingTopic;}catch(r){throw this.client.logger.error(`reject() -> proposal.get(${e}) failed`),r}i&&await this.sendError({id:e,topic:i,error:s,rpcOpts:P$1.wc_sessionPropose.reject}),await this.deleteProposal(e);}),c$4(this,"update",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(t);}catch(h){throw this.client.logger.error("update() -> isValidUpdate() failed"),h}const{topic:e,namespaces:s}=t,{done:i,resolve:r,reject:n}=xi$1(),a=payloadId(),l=getBigIntRpcId().toString(),p=this.client.session.get(e).namespaces;return this.events.once(Ni$1("session_update",a),({error:h})=>{h?n(h):r();}),await this.client.session.update(e,{namespaces:s}),await this.sendRequest({topic:e,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:true,clientRpcId:a,relayRpcId:l}).catch(h=>{this.client.logger.error(h),this.client.session.update(e,{namespaces:p}),n(h);}),{acknowledged:i}}),c$4(this,"extend",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(t);}catch(a){throw this.client.logger.error("extend() -> isValidExtend() failed"),a}const{topic:e}=t,s=payloadId(),{done:i,resolve:r,reject:n}=xi$1();return this.events.once(Ni$1("session_extend",s),({error:a})=>{a?n(a):r();}),await this.setExpiry(e,Si$1(B$3)),this.sendRequest({topic:e,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:true}).catch(a=>{n(a);}),{acknowledged:i}}),c$4(this,"request",async t=>{this.isInitialized();try{await this.isValidRequest(t);}catch(m){throw this.client.logger.error("request() -> isValidRequest() failed"),m}const{chainId:e,request:s,topic:i,expiry:r=P$1.wc_sessionRequest.req.ttl}=t,n=this.client.session.get(i);n?.transportType===ee$1.relay&&await this.confirmOnlineStateOrThrow();const a=payloadId(),l=getBigIntRpcId().toString(),{done:p,resolve:h,reject:u}=xi$1(r,"Request expired. Please try again.");this.events.once(Ni$1("session_request",a),({error:m,result:E})=>{m?u(m):h(E);});const d="wc_sessionRequest",y=this.getAppLinkIfEnabled(n.peer.metadata,n.transportType);if(y)return await this.sendRequest({clientRpcId:a,relayRpcId:l,topic:i,method:d,params:{request:O$1(R$1({},s),{expiryTimestamp:Si$1(r)}),chainId:e},expiry:r,throwOnFailedPublish:true,appLink:y}).catch(m=>u(m)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:e,id:a}),await p();const w={request:O$1(R$1({},s),{expiryTimestamp:Si$1(r)}),chainId:e};return await Promise.all([new Promise(async m=>{await this.sendRequest({clientRpcId:a,relayRpcId:l,topic:i,method:d,params:w,expiry:r,throwOnFailedPublish:true,tvf:this.getTVFParams(a,w)}).catch(E=>u(E)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:e,id:a}),m();}),new Promise(async m=>{var E;if(!((E=n.sessionConfig)!=null&&E.disableDeepLink)){const _=await _i$1(this.client.core.storage,Le$1);await Ui$1({id:a,topic:i,wcDeepLink:_});}m();}),p()]).then(m=>m[2])}),c$4(this,"respond",async t=>{this.isInitialized(),await this.isValidRespond(t);const{topic:e,response:s}=t,{id:i}=s,r=this.client.session.get(e);r.transportType===ee$1.relay&&await this.confirmOnlineStateOrThrow();const n=this.getAppLinkIfEnabled(r.peer.metadata,r.transportType);isJsonRpcResult(s)?await this.sendResult({id:i,topic:e,result:s.result,throwOnFailedPublish:true,appLink:n}):isJsonRpcError(s)&&await this.sendError({id:i,topic:e,error:s.error,appLink:n}),this.cleanupAfterResponse(t);}),c$4(this,"ping",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(t);}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:e}=t;if(this.client.session.keys.includes(e)){const s=payloadId(),i=getBigIntRpcId().toString(),{done:r,resolve:n,reject:a}=xi$1();this.events.once(Ni$1("session_ping",s),({error:l})=>{l?a(l):n();}),await Promise.all([this.sendRequest({topic:e,method:"wc_sessionPing",params:{},throwOnFailedPublish:true,clientRpcId:s,relayRpcId:i}),r()]);}else this.client.core.pairing.pairings.keys.includes(e)&&(this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),await this.client.core.pairing.ping({topic:e}));}),c$4(this,"emit",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(t);const{topic:e,event:s,chainId:i}=t,r=getBigIntRpcId().toString(),n=payloadId();await this.sendRequest({topic:e,method:"wc_sessionEvent",params:{event:s,chainId:i},throwOnFailedPublish:true,relayRpcId:r,clientRpcId:n});}),c$4(this,"disconnect",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(t);const{topic:e}=t;if(this.client.session.keys.includes(e))await this.sendRequest({topic:e,method:"wc_sessionDelete",params:zt$2("USER_DISCONNECTED"),throwOnFailedPublish:true}),await this.deleteSession({topic:e,emitEvent:false});else if(this.client.core.pairing.pairings.keys.includes(e))await this.client.core.pairing.disconnect({topic:e});else {const{message:s}=Bt$2("MISMATCHED_TOPIC",`Session or pairing topic not found: ${e}`);throw new Error(s)}}),c$4(this,"find",t=>(this.isInitialized(),this.client.session.getAll().filter(e=>Ka(e,t)))),c$4(this,"getPendingSessionRequests",()=>this.client.pendingRequest.getAll()),c$4(this,"authenticate",async(t,e)=>{var s;this.isInitialized(),this.isValidAuthenticate(t);const i=e&&this.client.core.linkModeSupportedApps.includes(e)&&((s=this.client.metadata.redirect)==null?void 0:s.linkMode),r=i?ee$1.link_mode:ee$1.relay;r===ee$1.relay&&await this.confirmOnlineStateOrThrow();const{chains:n,statement:a="",uri:l,domain:p,nonce:h,type:u,exp:d,nbf:y,methods:w=[],expiry:m}=t,E=[...t.resources||[]],{topic:_,uri:b}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:r});this.client.logger.info({message:"Generated new pairing",pairing:{topic:_,uri:b}});const V=await this.client.core.crypto.generateKeyPair(),I=la(V);if(await Promise.all([this.client.auth.authKeys.set(pe$1,{responseTopic:I,publicKey:V}),this.client.auth.pairingTopics.set(I,{topic:I,pairingTopic:_})]),await this.client.core.relayer.subscribe(I,{transportType:r}),this.client.logger.info(`sending request to new pairing topic: ${_}`),w.length>0){const{namespace:A}=Je$2(n[0]);let k=Vc(A,"request",w);je(E)&&(k=Mc(k,E.pop())),E.push(k);}const T=m&&m>P$1.wc_sessionAuthenticate.req.ttl?m:P$1.wc_sessionAuthenticate.req.ttl,$={authPayload:{type:u??"caip122",chains:n,statement:a,aud:l,domain:p,version:"1",nonce:h,iat:new Date().toISOString(),exp:d,nbf:y,resources:E},requester:{publicKey:V,metadata:this.client.metadata},expiryTimestamp:Si$1(T)},Se={eip155:{chains:n,methods:[...new Set(["personal_sign",...w])],events:["chainChanged","accountsChanged"]}},N={requiredNamespaces:{},optionalNamespaces:Se,relays:[{protocol:"irn"}],pairingTopic:_,proposer:{publicKey:V,metadata:this.client.metadata},expiryTimestamp:Si$1(P$1.wc_sessionPropose.req.ttl),id:payloadId()},{done:Tt,resolve:Ue,reject:Ee}=xi$1(T,"Request expired"),se=payloadId(),he=Ni$1("session_connect",N.id),Re=Ni$1("session_request",se),de=async({error:A,session:k})=>{this.events.off(Re,ve),A?Ee(A):k&&Ue({session:k});},ve=async A=>{var k,Ge,je$1;if(await this.deletePendingAuthRequest(se,{message:"fulfilled",code:0}),A.error){const re=zt$2("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return A.error.code===re.code?void 0:(this.events.off(he,de),Ee(A.error.message))}await this.deleteProposal(N.id),this.events.off(he,de);const{cacaos:Fe,responder:H}=A.result,Te=[],Qe=[];for(const re of Fe){await Lc({cacao:re,projectId:this.client.core.projectId})||(this.client.logger.error(re,"Signature verification failed"),Ee(zt$2("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:qe}=re,Pe=je(qe.resources),He=[to$1(qe.iss)],qt=bn$1(qe.iss);if(Pe){const Ne=Kc(Pe),Pt=qc(Pe);Te.push(...Ne),He.push(...Pt);}for(const Ne of He)Qe.push(`${Ne}:${qt}`);}const ie=await this.client.core.crypto.generateSharedKey(V,H.publicKey);let ue;Te.length>0&&(ue={topic:ie,acknowledged:true,self:{publicKey:V,metadata:this.client.metadata},peer:H,controller:H.publicKey,expiry:Si$1(B$3),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:_,namespaces:Va([...new Set(Te)],[...new Set(Qe)]),transportType:r},await this.client.core.relayer.subscribe(ie,{transportType:r}),await this.client.session.set(ie,ue),_&&await this.client.core.pairing.updateMetadata({topic:_,metadata:H.metadata}),ue=this.client.session.get(ie)),(k=this.client.metadata.redirect)!=null&&k.linkMode&&(Ge=H.metadata.redirect)!=null&&Ge.linkMode&&(je$1=H.metadata.redirect)!=null&&je$1.universal&&e&&(this.client.core.addLinkModeSupportedApp(H.metadata.redirect.universal),this.client.session.update(ie,{transportType:ee$1.link_mode})),Ue({auths:Fe,session:ue});};this.events.once(he,de),this.events.once(Re,ve);let Ie;try{if(i){const A=formatJsonRpcRequest("wc_sessionAuthenticate",$,se);this.client.core.history.set(_,A);const k=await this.client.core.crypto.encode("",A,{type:we$3,encoding:Ge$2});Ie=Ra(e,_,k);}else await Promise.all([this.sendRequest({topic:_,method:"wc_sessionAuthenticate",params:$,expiry:t.expiry,throwOnFailedPublish:!0,clientRpcId:se}),this.sendRequest({topic:_,method:"wc_sessionPropose",params:N,expiry:P$1.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:N.id})]);}catch(A){throw this.events.off(he,de),this.events.off(Re,ve),A}return await this.setProposal(N.id,N),await this.setAuthRequest(se,{request:O$1(R$1({},$),{verifyContext:{}}),pairingTopic:_,transportType:r}),{uri:Ie??b,response:Tt}}),c$4(this,"approveSessionAuthenticate",async t=>{const{id:e,auths:s}=t,i=this.client.core.eventClient.createEvent({properties:{topic:e.toString(),trace:[or.authenticated_session_approve_started]}});try{this.isInitialized();}catch(m){throw i.setError(ar.no_internet_connection),m}const r=this.getPendingAuthRequest(e);if(!r)throw i.setError(ar.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${e}`);const n=r.transportType||ee$1.relay;n===ee$1.relay&&await this.confirmOnlineStateOrThrow();const a=r.requester.publicKey,l=await this.client.core.crypto.generateKeyPair(),p=la(a),h={type:ie$1,receiverPublicKey:a,senderPublicKey:l},u=[],d=[];for(const m of s){if(!await Lc({cacao:m,projectId:this.client.core.projectId})){i.setError(ar.invalid_cacao);const I=zt$2("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:e,topic:p,error:I,encodeOpts:h}),new Error(I.message)}i.addTrace(or.cacaos_verified);const{p:E}=m,_=je(E.resources),b=[to$1(E.iss)],V=bn$1(E.iss);if(_){const I=Kc(_),T=qc(_);u.push(...I),b.push(...T);}for(const I of b)d.push(`${I}:${V}`);}const y=await this.client.core.crypto.generateSharedKey(l,a);i.addTrace(or.create_authenticated_session_topic);let w;if(u?.length>0){w={topic:y,acknowledged:true,self:{publicKey:l,metadata:this.client.metadata},peer:{publicKey:a,metadata:r.requester.metadata},controller:a,expiry:Si$1(B$3),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:r.pairingTopic,namespaces:Va([...new Set(u)],[...new Set(d)]),transportType:n},i.addTrace(or.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(y,{transportType:n});}catch(m){throw i.setError(ar.subscribe_authenticated_session_topic_failure),m}i.addTrace(or.subscribe_authenticated_session_topic_success),await this.client.session.set(y,w),i.addTrace(or.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:r.pairingTopic,metadata:r.requester.metadata});}i.addTrace(or.publishing_authenticated_session_approve);try{await this.sendResult({topic:p,id:e,result:{cacaos:s,responder:{publicKey:l,metadata:this.client.metadata}},encodeOpts:h,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(r.requester.metadata,n)});}catch(m){throw i.setError(ar.authenticated_session_approve_publish_failure),m}return await this.client.auth.requests.delete(e,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:r.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:i.eventId}),{session:w}}),c$4(this,"rejectSessionAuthenticate",async t=>{this.isInitialized();const{id:e,reason:s}=t,i=this.getPendingAuthRequest(e);if(!i)throw new Error(`Could not find pending auth request with id ${e}`);i.transportType===ee$1.relay&&await this.confirmOnlineStateOrThrow();const r=i.requester.publicKey,n=await this.client.core.crypto.generateKeyPair(),a=la(r),l={type:ie$1,receiverPublicKey:r,senderPublicKey:n};await this.sendError({id:e,topic:a,error:s,encodeOpts:l,rpcOpts:P$1.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(i.requester.metadata,i.transportType)}),await this.client.auth.requests.delete(e,{message:"rejected",code:0}),await this.deleteProposal(e);}),c$4(this,"formatAuthMessage",t=>{this.isInitialized();const{request:e,iss:s}=t;return eo$1(e,s)}),c$4(this,"processRelayMessageCache",()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const t=this.relayMessageCache.shift();t&&await this.onRelayMessage(t);}catch(t){this.client.logger.error(t);}},50);}),c$4(this,"cleanupDuplicatePairings",async t=>{if(t.pairingTopic)try{const e=this.client.core.pairing.pairings.get(t.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(i=>{var r,n;return ((r=i.peerMetadata)==null?void 0:r.url)&&((n=i.peerMetadata)==null?void 0:n.url)===t.peer.metadata.url&&i.topic&&i.topic!==e.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(i=>this.client.core.pairing.disconnect({topic:i.topic}))),this.client.logger.info("Duplicate pairings clean up finished");}catch(e){this.client.logger.error(e);}}),c$4(this,"deleteSession",async t=>{var e;const{topic:s,expirerHasDeleted:i=false,emitEvent:r=true,id:n=0}=t,{self:a}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,zt$2("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(a.publicKey)&&await this.client.core.crypto.deleteKeyPair(a.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),i||this.client.core.expirer.del(s),this.client.core.storage.removeItem(Le$1).catch(l=>this.client.logger.warn(l)),this.getPendingSessionRequests().forEach(l=>{l.topic===s&&this.deletePendingSessionRequest(l.id,zt$2("USER_DISCONNECTED"));}),s===((e=this.sessionRequestQueue.queue[0])==null?void 0:e.topic)&&(this.sessionRequestQueue.state=M$2.idle),r&&this.client.events.emit("session_delete",{id:n,topic:s});}),c$4(this,"deleteProposal",async(t,e)=>{if(e)try{const s=this.client.proposal.get(t),i=this.client.core.eventClient.getEvent({topic:s.pairingTopic});i?.setError(nr.proposal_expired);}catch{}await Promise.all([this.client.proposal.delete(t,zt$2("USER_DISCONNECTED")),e?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"proposal");}),c$4(this,"deletePendingSessionRequest",async(t,e,s=false)=>{await Promise.all([this.client.pendingRequest.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(i=>i.id!==t),s&&(this.sessionRequestQueue.state=M$2.idle,this.client.events.emit("session_request_expire",{id:t}));}),c$4(this,"deletePendingAuthRequest",async(t,e,s=false)=>{await Promise.all([this.client.auth.requests.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)]);}),c$4(this,"setExpiry",async(t,e)=>{this.client.session.keys.includes(t)&&(this.client.core.expirer.set(t,e),await this.client.session.update(t,{expiry:e}));}),c$4(this,"setProposal",async(t,e)=>{this.client.core.expirer.set(t,Si$1(P$1.wc_sessionPropose.req.ttl)),await this.client.proposal.set(t,e);}),c$4(this,"setAuthRequest",async(t,e)=>{const{request:s,pairingTopic:i,transportType:r=ee$1.relay}=e;this.client.core.expirer.set(t,s.expiryTimestamp),await this.client.auth.requests.set(t,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:t,pairingTopic:i,verifyContext:s.verifyContext,transportType:r});}),c$4(this,"setPendingSessionRequest",async t=>{const{id:e,topic:s,params:i,verifyContext:r}=t,n=i.request.expiryTimestamp||Si$1(P$1.wc_sessionRequest.req.ttl);this.client.core.expirer.set(e,n),await this.client.pendingRequest.set(e,{id:e,topic:s,params:i,verifyContext:r});}),c$4(this,"sendRequest",async t=>{const{topic:e,method:s,params:i,expiry:r,relayRpcId:n,clientRpcId:a,throwOnFailedPublish:l,appLink:p,tvf:h,publishOpts:u={}}=t,d=formatJsonRpcRequest(s,i,a);let y;const w=!!p;try{const _=w?Ge$2:oe$2;y=await this.client.core.crypto.encode(e,d,{encoding:_});}catch(_){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e} failed`),_}let m;if(mt$1.includes(s)){const _=da(JSON.stringify(d)),b=da(y);m=await this.client.core.verify.register({id:b,decryptedId:_});}const E=R$1(R$1({},P$1[s].req),u);if(E.attestation=m,r&&(E.ttl=r),n&&(E.id=n),this.client.core.history.set(e,d),w){const _=Ra(p,e,y);await global.Linking.openURL(_,this.client.name);}else E.tvf=O$1(R$1({},h),{correlationId:d.id}),l?(E.internal=O$1(R$1({},E.internal),{throwOnFailedPublish:true}),await this.client.core.relayer.publish(e,y,E)):this.client.core.relayer.publish(e,y,E).catch(_=>this.client.logger.error(_));return d.id}),c$4(this,"sendProposeSession",async t=>{const{proposal:e,publishOpts:s}=t,i=formatJsonRpcRequest("wc_sessionPropose",e,e.id);this.client.core.history.set(e.pairingTopic,i);const r=await this.client.core.crypto.encode(e.pairingTopic,i,{encoding:oe$2}),n=da(JSON.stringify(i)),a=da(r),l=await this.client.core.verify.register({id:a,decryptedId:n});await this.client.core.relayer.publishCustom({payload:{pairingTopic:e.pairingTopic,sessionProposal:r},opts:O$1(R$1({},s),{publishMethod:"wc_proposeSession",attestation:l})});}),c$4(this,"sendApproveSession",async t=>{const{sessionTopic:e,pairingProposalResponse:s,proposal:i,sessionSettleRequest:r,publishOpts:n}=t,a=formatJsonRpcResult(i.id,s),l=await this.client.core.crypto.encode(i.pairingTopic,a,{encoding:oe$2}),p=formatJsonRpcRequest("wc_sessionSettle",r,n?.id),h=await this.client.core.crypto.encode(e,p,{encoding:oe$2});this.client.core.history.set(e,p),await this.client.core.relayer.publishCustom({payload:{sessionTopic:e,pairingTopic:i.pairingTopic,sessionProposalResponse:l,sessionSettlementRequest:h},opts:O$1(R$1({},n),{publishMethod:"wc_approveSession"})});}),c$4(this,"sendResult",async t=>{const{id:e,topic:s,result:i,throwOnFailedPublish:r,encodeOpts:n,appLink:a}=t,l=formatJsonRpcResult(e,i);let p;const h=a&&typeof(global==null?void 0:global.Linking)<"u";try{const y=h?Ge$2:oe$2;p=await this.client.core.crypto.encode(s,l,O$1(R$1({},n||{}),{encoding:y}));}catch(y){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),y}let u,d;try{u=await this.client.core.history.get(s,e);const y=u.request;try{d=this.getTVFParams(e,y.params,i);}catch(w){this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${w?.message}`);}}catch(y){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${e}) failed`),y}if(h){const y=Ra(a,s,p);await global.Linking.openURL(y,this.client.name);}else {const y=u.request.method,w=P$1[y].res;w.tvf=O$1(R$1({},d),{correlationId:e}),r?(w.internal=O$1(R$1({},w.internal),{throwOnFailedPublish:true}),await this.client.core.relayer.publish(s,p,w)):this.client.core.relayer.publish(s,p,w).catch(m=>this.client.logger.error(m));}await this.client.core.history.resolve(l);}),c$4(this,"sendError",async t=>{const{id:e,topic:s,error:i,encodeOpts:r,rpcOpts:n,appLink:a}=t,l=formatJsonRpcError(e,i);let p;const h=a&&typeof(global==null?void 0:global.Linking)<"u";try{const d=h?Ge$2:oe$2;p=await this.client.core.crypto.encode(s,l,O$1(R$1({},r||{}),{encoding:d}));}catch(d){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),d}let u;try{u=await this.client.core.history.get(s,e);}catch(d){throw this.client.logger.error(`sendError() -> history.get(${s}, ${e}) failed`),d}if(h){const d=Ra(a,s,p);await global.Linking.openURL(d,this.client.name);}else {const d=u.request.method,y=n||P$1[d].res;this.client.core.relayer.publish(s,p,y);}await this.client.core.history.resolve(l);}),c$4(this,"cleanup",async()=>{const t=[],e=[];this.client.session.getAll().forEach(s=>{let i=false;Oi$1(s.expiry)&&(i=true),this.client.core.crypto.keychain.has(s.topic)||(i=true),i&&t.push(s.topic);}),this.client.proposal.getAll().forEach(s=>{Oi$1(s.expiryTimestamp)&&e.push(s.id);}),await Promise.all([...t.map(s=>this.deleteSession({topic:s})),...e.map(s=>this.deleteProposal(s))]);}),c$4(this,"onProviderMessageEvent",async t=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(t):await this.onRelayMessage(t);}),c$4(this,"onRelayEventRequest",async t=>{this.requestQueue.queue.push(t),await this.processRequestsQueue();}),c$4(this,"processRequestsQueue",async()=>{if(this.requestQueue.state===M$2.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=M$2.active;const t=this.requestQueue.queue.shift();if(t)try{await this.processRequest(t);}catch(e){this.client.logger.warn(e);}}this.requestQueue.state=M$2.idle;}),c$4(this,"processRequest",async t=>{const{topic:e,payload:s,attestation:i,transportType:r,encryptedId:n}=t,a=s.method;if(!this.shouldIgnorePairingRequest({topic:e,requestMethod:a}))switch(a){case "wc_sessionPropose":return await this.onSessionProposeRequest({topic:e,payload:s,attestation:i,encryptedId:n});case "wc_sessionSettle":return await this.onSessionSettleRequest(e,s);case "wc_sessionUpdate":return await this.onSessionUpdateRequest(e,s);case "wc_sessionExtend":return await this.onSessionExtendRequest(e,s);case "wc_sessionPing":return await this.onSessionPingRequest(e,s);case "wc_sessionDelete":return await this.onSessionDeleteRequest(e,s);case "wc_sessionRequest":return await this.onSessionRequest({topic:e,payload:s,attestation:i,encryptedId:n,transportType:r});case "wc_sessionEvent":return await this.onSessionEventRequest(e,s);case "wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:e,payload:s,attestation:i,encryptedId:n,transportType:r});default:return this.client.logger.info(`Unsupported request method ${a}`)}}),c$4(this,"onRelayEventResponse",async t=>{const{topic:e,payload:s,transportType:i}=t,r=(await this.client.core.history.get(e,s.id)).request.method;switch(r){case "wc_sessionPropose":return this.onSessionProposeResponse(e,s,i);case "wc_sessionSettle":return this.onSessionSettleResponse(e,s);case "wc_sessionUpdate":return this.onSessionUpdateResponse(e,s);case "wc_sessionExtend":return this.onSessionExtendResponse(e,s);case "wc_sessionPing":return this.onSessionPingResponse(e,s);case "wc_sessionRequest":return this.onSessionRequestResponse(e,s);case "wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(e,s);default:return this.client.logger.info(`Unsupported response method ${r}`)}}),c$4(this,"onRelayEventUnknownPayload",t=>{const{topic:e}=t,{message:s}=Bt$2("MISSING_OR_INVALID",`Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)}),c$4(this,"shouldIgnorePairingRequest",t=>{const{topic:e,requestMethod:s}=t,i=this.expectedPairingMethodMap.get(e);return !i||i.includes(s)?false:!!(i.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)}),c$4(this,"onSessionProposeRequest",async t=>{const{topic:e,payload:s,attestation:i,encryptedId:r}=t,{params:n,id:a}=s;try{const l=this.client.core.eventClient.getEvent({topic:e});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),l?.setError(X.proposal_listener_not_found)),this.isValidConnect(R$1({},s.params));const p=n.expiryTimestamp||Si$1(P$1.wc_sessionPropose.req.ttl),h=R$1({id:a,pairingTopic:e,expiryTimestamp:p,attestation:i,encryptedId:r},n);await this.setProposal(a,h);const u=await this.getVerifyContext({attestationId:i,hash:da(JSON.stringify(s)),encryptedId:r,metadata:h.proposer.metadata});l?.addTrace(Y.emit_session_proposal),this.client.events.emit("session_proposal",{id:a,params:h,verifyContext:u});}catch(l){await this.sendError({id:a,topic:e,error:l,rpcOpts:P$1.wc_sessionPropose.autoReject}),this.client.logger.error(l);}}),c$4(this,"onSessionProposeResponse",async(t,e,s)=>{const{id:i}=e;if(isJsonRpcResult(e)){const{result:r}=e;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:r});const n=this.client.proposal.get(i);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:n});const a=n.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:a});const l=r.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:l});const p=await this.client.core.crypto.generateSharedKey(a,l);this.pendingSessions.set(i,{sessionTopic:p,pairingTopic:t,proposalId:i,publicKey:a});const h=await this.client.core.relayer.subscribe(p,{transportType:s});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:h}),await this.client.core.pairing.activate({topic:t});}else if(isJsonRpcError(e)){await this.deleteProposal(i);const r=Ni$1("session_connect",i);if(this.events.listenerCount(r)===0)throw new Error(`emitting ${r} without any listeners, 954`);this.events.emit(r,{error:e.error});}}),c$4(this,"onSessionSettleRequest",async(t,e)=>{const{id:s,params:i}=e;try{this.isValidSessionSettleRequest(i);const{relay:r,controller:n,expiry:a,namespaces:l,sessionProperties:p,scopedProperties:h,sessionConfig:u}=e.params,d=[...this.pendingSessions.values()].find(m=>m.sessionTopic===t);if(!d)return this.client.logger.error(`Pending session not found for topic ${t}`);const y=this.client.proposal.get(d.proposalId),w=O$1(R$1(R$1(R$1({topic:t,relay:r,expiry:a,namespaces:l,acknowledged:!0,pairingTopic:d.pairingTopic,requiredNamespaces:y.requiredNamespaces,optionalNamespaces:y.optionalNamespaces,controller:n.publicKey,self:{publicKey:d.publicKey,metadata:this.client.metadata},peer:{publicKey:n.publicKey,metadata:n.metadata}},p&&{sessionProperties:p}),h&&{scopedProperties:h}),u&&{sessionConfig:u}),{transportType:ee$1.relay});await this.client.session.set(w.topic,w),await this.setExpiry(w.topic,w.expiry),await this.client.core.pairing.updateMetadata({topic:d.pairingTopic,metadata:w.peer.metadata}),this.client.events.emit("session_connect",{session:w}),this.events.emit(Ni$1("session_connect",d.proposalId),{session:w}),this.pendingSessions.delete(d.proposalId),this.deleteProposal(d.proposalId,!1),this.cleanupDuplicatePairings(w),await this.sendResult({id:e.id,topic:t,result:!0});}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r);}}),c$4(this,"onSessionSettleResponse",async(t,e)=>{const{id:s}=e;isJsonRpcResult(e)?(await this.client.session.update(t,{acknowledged:true}),this.events.emit(Ni$1("session_approve",s),{})):isJsonRpcError(e)&&(await this.client.session.delete(t,zt$2("USER_DISCONNECTED")),this.events.emit(Ni$1("session_approve",s),{error:e.error}));}),c$4(this,"onSessionUpdateRequest",async(t,e)=>{const{params:s,id:i}=e;try{const r=`${t}_session_update`,n=lu.get(r);if(n&&this.isRequestOutOfSync(n,i)){this.client.logger.warn(`Discarding out of sync request - ${i}`),this.sendError({id:i,topic:t,error:zt$2("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(R$1({topic:t},s));try{lu.set(r,i),await this.client.session.update(t,{namespaces:s.namespaces}),await this.sendResult({id:i,topic:t,result:!0});}catch(a){throw lu.delete(r),a}this.client.events.emit("session_update",{id:i,topic:t,params:s});}catch(r){await this.sendError({id:i,topic:t,error:r}),this.client.logger.error(r);}}),c$4(this,"isRequestOutOfSync",(t,e)=>e.toString().slice(0,-3)<t.toString().slice(0,-3)),c$4(this,"onSessionUpdateResponse",(t,e)=>{const{id:s}=e,i=Ni$1("session_update",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(Ni$1("session_update",s),{}):isJsonRpcError(e)&&this.events.emit(Ni$1("session_update",s),{error:e.error});}),c$4(this,"onSessionExtendRequest",async(t,e)=>{const{id:s}=e;try{this.isValidExtend({topic:t}),await this.setExpiry(t,Si$1(B$3)),await this.sendResult({id:s,topic:t,result:!0}),this.client.events.emit("session_extend",{id:s,topic:t});}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i);}}),c$4(this,"onSessionExtendResponse",(t,e)=>{const{id:s}=e,i=Ni$1("session_extend",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(Ni$1("session_extend",s),{}):isJsonRpcError(e)&&this.events.emit(Ni$1("session_extend",s),{error:e.error});}),c$4(this,"onSessionPingRequest",async(t,e)=>{const{id:s}=e;try{this.isValidPing({topic:t}),await this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:t});}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i);}}),c$4(this,"onSessionPingResponse",(t,e)=>{const{id:s}=e,i=Ni$1("session_ping",s);setTimeout(()=>{if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners 2176`);isJsonRpcResult(e)?this.events.emit(Ni$1("session_ping",s),{}):isJsonRpcError(e)&&this.events.emit(Ni$1("session_ping",s),{error:e.error});},500);}),c$4(this,"onSessionDeleteRequest",async(t,e)=>{const{id:s}=e;try{this.isValidDisconnect({topic:t,reason:e.params}),await Promise.all([new Promise(i=>{this.client.core.relayer.once(C$3.publish,async()=>{i(await this.deleteSession({topic:t,id:s}));});}),this.sendResult({id:s,topic:t,result:!0}),this.cleanupPendingSentRequestsForTopic({topic:t,error:zt$2("USER_DISCONNECTED")})]).catch(i=>this.client.logger.error(i));}catch(i){this.client.logger.error(i);}}),c$4(this,"onSessionRequest",async t=>{var e,s,i;const{topic:r,payload:n,attestation:a,encryptedId:l,transportType:p}=t,{id:h,params:u}=n;try{await this.isValidRequest(R$1({topic:r},u));const d=this.client.session.get(r),y=await this.getVerifyContext({attestationId:a,hash:da(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest",u,h))),encryptedId:l,metadata:d.peer.metadata,transportType:p}),w={id:h,topic:r,params:u,verifyContext:y};await this.setPendingSessionRequest(w),p===ee$1.link_mode&&(e=d.peer.metadata.redirect)!=null&&e.universal&&this.client.core.addLinkModeSupportedApp((s=d.peer.metadata.redirect)==null?void 0:s.universal),(i=this.client.signConfig)!=null&&i.disableRequestQueue?this.emitSessionRequest(w):(this.addSessionRequestToSessionRequestQueue(w),this.processSessionRequestQueue());}catch(d){await this.sendError({id:h,topic:r,error:d}),this.client.logger.error(d);}}),c$4(this,"onSessionRequestResponse",(t,e)=>{const{id:s}=e,i=Ni$1("session_request",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(Ni$1("session_request",s),{result:e.result}):isJsonRpcError(e)&&this.events.emit(Ni$1("session_request",s),{error:e.error});}),c$4(this,"onSessionEventRequest",async(t,e)=>{const{id:s,params:i}=e;try{const r=`${t}_session_event_${i.event.name}`,n=lu.get(r);if(n&&this.isRequestOutOfSync(n,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(R$1({topic:t},i)),this.client.events.emit("session_event",{id:s,topic:t,params:i}),lu.set(r,s);}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r);}}),c$4(this,"onSessionAuthenticateResponse",(t,e)=>{const{id:s}=e;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:t,payload:e}),isJsonRpcResult(e)?this.events.emit(Ni$1("session_request",s),{result:e.result}):isJsonRpcError(e)&&this.events.emit(Ni$1("session_request",s),{error:e.error});}),c$4(this,"onSessionAuthenticateRequest",async t=>{var e;const{topic:s,payload:i,attestation:r,encryptedId:n,transportType:a}=t;try{const{requester:l,authPayload:p,expiryTimestamp:h}=i.params,u=await this.getVerifyContext({attestationId:r,hash:da(JSON.stringify(i)),encryptedId:n,metadata:l.metadata,transportType:a}),d={requester:l,pairingTopic:s,id:i.id,authPayload:p,verifyContext:u,expiryTimestamp:h};await this.setAuthRequest(i.id,{request:d,pairingTopic:s,transportType:a}),a===ee$1.link_mode&&(e=l.metadata.redirect)!=null&&e.universal&&this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:s,params:i.params,id:i.id,verifyContext:u});}catch(l){this.client.logger.error(l);const p=i.params.requester.publicKey,h=await this.client.core.crypto.generateKeyPair(),u=this.getAppLinkIfEnabled(i.params.requester.metadata,a),d={type:ie$1,receiverPublicKey:p,senderPublicKey:h};await this.sendError({id:i.id,topic:s,error:l,encodeOpts:d,rpcOpts:P$1.wc_sessionAuthenticate.autoReject,appLink:u});}}),c$4(this,"addSessionRequestToSessionRequestQueue",t=>{this.sessionRequestQueue.queue.push(t);}),c$4(this,"cleanupAfterResponse",t=>{this.deletePendingSessionRequest(t.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=M$2.idle,this.processSessionRequestQueue();},cjsExports$1.toMiliseconds(this.requestQueueDelay));}),c$4(this,"cleanupPendingSentRequestsForTopic",({topic:t,error:e})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(i=>i.topic===t&&i.request.method==="wc_sessionRequest").forEach(i=>{const r=i.request.id,n=Ni$1("session_request",r);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);this.events.emit(Ni$1("session_request",i.request.id),{error:e});});}),c$4(this,"processSessionRequestQueue",()=>{if(this.sessionRequestQueue.state===M$2.active){this.client.logger.info("session request queue is already active.");return}const t=this.sessionRequestQueue.queue[0];if(!t){this.client.logger.info("session request queue is empty.");return}try{this.emitSessionRequest(t);}catch(e){this.client.logger.error(e);}}),c$4(this,"emitSessionRequest",t=>{if(this.emittedSessionRequests.has(t.id)){this.client.logger.warn({id:t.id},`Skipping emitting \`session_request\` event for duplicate request. id: ${t.id}`);return}this.sessionRequestQueue.state=M$2.active,this.emittedSessionRequests.add(t.id),this.client.events.emit("session_request",t);}),c$4(this,"onPairingCreated",t=>{if(t.methods&&this.expectedPairingMethodMap.set(t.topic,t.methods),t.active)return;const e=this.client.proposal.getAll().find(s=>s.pairingTopic===t.topic);e&&this.onSessionProposeRequest({topic:t.topic,payload:formatJsonRpcRequest("wc_sessionPropose",O$1(R$1({},e),{requiredNamespaces:e.requiredNamespaces,optionalNamespaces:e.optionalNamespaces,relays:e.relays,proposer:e.proposer,sessionProperties:e.sessionProperties,scopedProperties:e.scopedProperties}),e.id),attestation:e.attestation,encryptedId:e.encryptedId});}),c$4(this,"isValidConnect",async t=>{if(!Xa(t)){const{message:l}=Bt$2("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(t)}`);throw new Error(l)}const{pairingTopic:e,requiredNamespaces:s,optionalNamespaces:i,sessionProperties:r,scopedProperties:n,relays:a}=t;if(Dt$1(e)||await this.isValidPairingTopic(e),!Ya(a)){const{message:l}=Bt$2("MISSING_OR_INVALID",`connect() relays: ${a}`);throw new Error(l)}if(!Dt$1(s)&&Ye$2(s)!==0){const l="requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";["fatal","error","silent"].includes(this.client.logger.level)?console.warn(l):this.client.logger.warn(l),this.validateNamespaces(s,"requiredNamespaces");}if(!Dt$1(i)&&Ye$2(i)!==0&&this.validateNamespaces(i,"optionalNamespaces"),Dt$1(r)||this.validateSessionProps(r,"sessionProperties"),!Dt$1(n)){this.validateSessionProps(n,"scopedProperties");const l=Object.keys(s||{}).concat(Object.keys(i||{}));if(!Object.keys(n).every(p=>l.includes(p.split(":")[0])))throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n)}, required/optional namespaces: ${JSON.stringify(l)}`)}}),c$4(this,"validateNamespaces",(t,e)=>{const s=za(t,"connect()",e);if(s)throw new Error(s.message)}),c$4(this,"isValidApprove",async t=>{if(!Xa(t))throw new Error(Bt$2("MISSING_OR_INVALID",`approve() params: ${t}`).message);const{id:e,namespaces:s,relayProtocol:i,sessionProperties:r,scopedProperties:n}=t;this.checkRecentlyDeleted(e),await this.isValidProposalId(e);const a=this.client.proposal.get(e),l=Ss(s,"approve()");if(l)throw new Error(l.message);const p=Ns(a.requiredNamespaces,s,"approve()");if(p)throw new Error(p.message);if(!ft$2(i,true)){const{message:h}=Bt$2("MISSING_OR_INVALID",`approve() relayProtocol: ${i}`);throw new Error(h)}if(Dt$1(r)||this.validateSessionProps(r,"sessionProperties"),!Dt$1(n)){this.validateSessionProps(n,"scopedProperties");const h=new Set(Object.keys(s));if(!Object.keys(n).every(u=>h.has(u.split(":")[0])))throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n)}, approved namespaces: ${Array.from(h).join(", ")}`)}}),c$4(this,"isValidReject",async t=>{if(!Xa(t)){const{message:i}=Bt$2("MISSING_OR_INVALID",`reject() params: ${t}`);throw new Error(i)}const{id:e,reason:s}=t;if(this.checkRecentlyDeleted(e),await this.isValidProposalId(e),!Ja(s)){const{message:i}=Bt$2("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(i)}}),c$4(this,"isValidSessionSettleRequest",t=>{if(!Xa(t)){const{message:l}=Bt$2("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${t}`);throw new Error(l)}const{relay:e,controller:s,namespaces:i,expiry:r}=t;if(!Os(e)){const{message:l}=Bt$2("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(l)}const n=Ga(s,"onSessionSettleRequest()");if(n)throw new Error(n.message);const a=Ss(i,"onSessionSettleRequest()");if(a)throw new Error(a.message);if(Oi$1(r)){const{message:l}=Bt$2("EXPIRED","onSessionSettleRequest()");throw new Error(l)}}),c$4(this,"isValidUpdate",async t=>{if(!Xa(t)){const{message:a}=Bt$2("MISSING_OR_INVALID",`update() params: ${t}`);throw new Error(a)}const{topic:e,namespaces:s}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const i=this.client.session.get(e),r=Ss(s,"update()");if(r)throw new Error(r.message);const n=Ns(i.requiredNamespaces,s,"update()");if(n)throw new Error(n.message)}),c$4(this,"isValidExtend",async t=>{if(!Xa(t)){const{message:s}=Bt$2("MISSING_OR_INVALID",`extend() params: ${t}`);throw new Error(s)}const{topic:e}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);}),c$4(this,"isValidRequest",async t=>{if(!Xa(t)){const{message:a}=Bt$2("MISSING_OR_INVALID",`request() params: ${t}`);throw new Error(a)}const{topic:e,request:s,chainId:i,expiry:r}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const{namespaces:n}=this.client.session.get(e);if(!nu(n,i)){const{message:a}=Bt$2("MISSING_OR_INVALID",`request() chainId: ${i}`);throw new Error(a)}if(!Qa(s)){const{message:a}=Bt$2("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(a)}if(!ru(n,i,s.method)){const{message:a}=Bt$2("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(a)}if(r&&!cu(r,_e)){const{message:a}=Bt$2("MISSING_OR_INVALID",`request() expiry: ${r}. Expiry must be a number (in seconds) between ${_e.min} and ${_e.max}`);throw new Error(a)}}),c$4(this,"isValidRespond",async t=>{var e;if(!Xa(t)){const{message:r}=Bt$2("MISSING_OR_INVALID",`respond() params: ${t}`);throw new Error(r)}const{topic:s,response:i}=t;try{await this.isValidSessionTopic(s);}catch(r){throw (e=t?.response)!=null&&e.id&&this.cleanupAfterResponse(t),r}if(!tu(i)){const{message:r}=Bt$2("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(r)}}),c$4(this,"isValidPing",async t=>{if(!Xa(t)){const{message:s}=Bt$2("MISSING_OR_INVALID",`ping() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e);}),c$4(this,"isValidEmit",async t=>{if(!Xa(t)){const{message:n}=Bt$2("MISSING_OR_INVALID",`emit() params: ${t}`);throw new Error(n)}const{topic:e,event:s,chainId:i}=t;await this.isValidSessionTopic(e);const{namespaces:r}=this.client.session.get(e);if(!nu(r,i)){const{message:n}=Bt$2("MISSING_OR_INVALID",`emit() chainId: ${i}`);throw new Error(n)}if(!eu(s)){const{message:n}=Bt$2("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}if(!ou(r,i,s.name)){const{message:n}=Bt$2("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}}),c$4(this,"isValidDisconnect",async t=>{if(!Xa(t)){const{message:s}=Bt$2("MISSING_OR_INVALID",`disconnect() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e);}),c$4(this,"isValidAuthenticate",t=>{const{chains:e,uri:s,domain:i,nonce:r}=t;if(!Array.isArray(e)||e.length===0)throw new Error("chains is required and must be a non-empty array");if(!ft$2(s,false))throw new Error("uri is required parameter");if(!ft$2(i,false))throw new Error("domain is required parameter");if(!ft$2(r,false))throw new Error("nonce is required parameter");if([...new Set(e.map(a=>Je$2(a).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:n}=Je$2(e[0]);if(n!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")}),c$4(this,"getVerifyContext",async t=>{const{attestationId:e,hash:s,encryptedId:i,metadata:r,transportType:n}=t,a={verified:{verifyUrl:r.verifyUrl||be$1,validation:"UNKNOWN",origin:r.url||""}};try{if(n===ee$1.link_mode){const p=this.getAppLinkIfEnabled(r,n);return a.verified.validation=p&&new URL(p).origin===new URL(r.url).origin?"VALID":"INVALID",a}const l=await this.client.core.verify.resolve({attestationId:e,hash:s,encryptedId:i,verifyUrl:r.verifyUrl});l&&(a.verified.origin=l.origin,a.verified.isScam=l.isScam,a.verified.validation=l.origin===new URL(r.url).origin?"VALID":"INVALID");}catch(l){this.client.logger.warn(l);}return this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`),a}),c$4(this,"validateSessionProps",(t,e)=>{Object.values(t).forEach((s,i)=>{if(s==null){const{message:r}=Bt$2("MISSING_OR_INVALID",`${e} must contain an existing value for each key. Received: ${s} for key ${Object.keys(t)[i]}`);throw new Error(r)}});}),c$4(this,"getPendingAuthRequest",t=>{const e=this.client.auth.requests.get(t);return typeof e=="object"?e:void 0}),c$4(this,"addToRecentlyDeleted",(t,e)=>{if(this.recentlyDeletedMap.set(t,e),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const i=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(s++>=i)break;this.recentlyDeletedMap.delete(r);}}}),c$4(this,"checkRecentlyDeleted",t=>{const e=this.recentlyDeletedMap.get(t);if(e){const{message:s}=Bt$2("MISSING_OR_INVALID",`Record was recently deleted - ${e}: ${t}`);throw new Error(s)}}),c$4(this,"isLinkModeEnabled",(t,e)=>{var s,i,r,n,a,l,p,h,u;return !t||e!==ee$1.link_mode?false:((i=(s=this.client.metadata)==null?void 0:s.redirect)==null?void 0:i.linkMode)===true&&((n=(r=this.client.metadata)==null?void 0:r.redirect)==null?void 0:n.universal)!==void 0&&((l=(a=this.client.metadata)==null?void 0:a.redirect)==null?void 0:l.universal)!==""&&((p=t?.redirect)==null?void 0:p.universal)!==void 0&&((h=t?.redirect)==null?void 0:h.universal)!==""&&((u=t?.redirect)==null?void 0:u.linkMode)===true&&this.client.core.linkModeSupportedApps.includes(t.redirect.universal)&&typeof(global==null?void 0:global.Linking)<"u"}),c$4(this,"getAppLinkIfEnabled",(t,e)=>{var s;return this.isLinkModeEnabled(t,e)?(s=t?.redirect)==null?void 0:s.universal:void 0}),c$4(this,"handleLinkModeMessage",({url:t})=>{if(!t||!t.includes("wc_ev")||!t.includes("topic"))return;const e=Ri$1(t,"topic")||"",s=decodeURIComponent(Ri$1(t,"wc_ev")||""),i=this.client.session.keys.includes(e);i&&this.client.session.update(e,{transportType:ee$1.link_mode}),this.client.core.dispatchEnvelope({topic:e,message:s,sessionExists:i});}),c$4(this,"registerLinkModeListeners",async()=>{var t;if(Ti$1()||At$2()&&(t=this.client.metadata.redirect)!=null&&t.linkMode){const e=global==null?void 0:global.Linking;if(typeof e<"u"){e.addEventListener("url",this.handleLinkModeMessage,this.client.name);const s=await e.getInitialURL();s&&setTimeout(()=>{this.handleLinkModeMessage({url:s});},50);}}}),c$4(this,"getTVFParams",(t,e,s)=>{var i,r,n;if(!((i=e.request)!=null&&i.method))return {};const a={correlationId:t,rpcMethods:[e.request.method],chainId:e.chainId};try{const l=this.extractTxHashesFromResult(e.request,s);a.txHashes=l,a.contractAddresses=this.isValidContractData(e.request.params)?[(n=(r=e.request.params)==null?void 0:r[0])==null?void 0:n.to]:[];}catch(l){this.client.logger.warn("Error getting TVF params",l);}return a}),c$4(this,"isValidContractData",t=>{var e;if(!t)return  false;try{const s=t?.data||((e=t?.[0])==null?void 0:e.data);if(!s.startsWith("0x"))return !1;const i=s.slice(2);return /^[0-9a-fA-F]*$/.test(i)?i.length%2===0:!1}catch{}return  false}),c$4(this,"extractTxHashesFromResult",(t,e)=>{var s;try{if(!e)return [];const i=t.method,r=yt$1[i];if(i==="sui_signTransaction")return [Ic(e.transactionBytes)];if(i==="near_signTransaction")return [Sc(e)];if(i==="near_signTransactions")return e.map(a=>Sc(a));if(i==="xrpl_signTransactionFor"||i==="xrpl_signTransaction")return [(s=e.tx_json)==null?void 0:s.hash];if(i==="polkadot_signTransaction")return [bu({transaction:t.params.transactionPayload,signature:e.signature})];if(i==="algo_signTxn")return Ee$1(e)?e.map(a=>Oc(a)):[Oc(e)];if(i==="cosmos_signDirect")return [Nc(e)];if(i==="wallet_sendCalls")return Uc(e);if(typeof e=="string")return [e];const n=e[r.key];if(Ee$1(n))return i==="solana_signAllTransactions"?n.map(a=>Ac(a)):n;if(typeof n=="string")return [n]}catch(i){this.client.logger.warn("Error extracting tx hashes from result",i);}return []});}async processPendingMessageEvents(){try{const o=this.client.session.keys,t=this.client.core.relayer.messages.getWithoutAck(o);for(const[e,s]of Object.entries(t))for(const i of s)try{await this.onProviderMessageEvent({topic:e,message:i,publishedAt:Date.now()});}catch{this.client.logger.warn(`Error processing pending message event for topic: ${e}, message: ${i}`);}}catch(o){this.client.logger.warn("processPendingMessageEvents failed",o);}}isInitialized(){if(!this.initialized){const{message:o}=Bt$2("NOT_INITIALIZED",this.name);throw new Error(o)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow();}registerRelayerEvents(){this.client.core.relayer.on(C$3.message,o=>{this.onProviderMessageEvent(o);});}async onRelayMessage(o){const{topic:t,message:e,attestation:s,transportType:i}=o,{publicKey:r}=this.client.auth.authKeys.keys.includes(pe$1)?this.client.auth.authKeys.get(pe$1):{publicKey:void 0};try{const n=await this.client.core.crypto.decode(t,e,{receiverPublicKey:r,encoding:i===ee$1.link_mode?Ge$2:oe$2});isJsonRpcRequest(n)?(this.client.core.history.set(t,n),await this.onRelayEventRequest({topic:t,payload:n,attestation:s,transportType:i,encryptedId:da(e)})):isJsonRpcResponse(n)?(await this.client.core.history.resolve(n),await this.onRelayEventResponse({topic:t,payload:n,transportType:i}),this.client.core.history.delete(t,n.id)):await this.onRelayEventUnknownPayload({topic:t,payload:n,transportType:i}),await this.client.core.relayer.messages.ack(t,e);}catch(n){this.client.logger.error(n);}}registerExpirerEvents(){this.client.core.expirer.on(q.expired,async o=>{const{topic:t,id:e}=Ii$1(o.target);if(e&&this.client.pendingRequest.keys.includes(e))return await this.deletePendingSessionRequest(e,Bt$2("EXPIRED"),true);if(e&&this.client.auth.requests.keys.includes(e))return await this.deletePendingAuthRequest(e,Bt$2("EXPIRED"),true);t?this.client.session.keys.includes(t)&&(await this.deleteSession({topic:t,expirerHasDeleted:true}),this.client.events.emit("session_expire",{topic:t})):e&&(await this.deleteProposal(e,true),this.client.events.emit("proposal_expire",{id:e}));});}registerPairingEvents(){this.client.core.pairing.events.on(ae$1.create,o=>this.onPairingCreated(o)),this.client.core.pairing.events.on(ae$1.delete,o=>{this.addToRecentlyDeleted(o.topic,"pairing");});}isValidPairingTopic(o){if(!ft$2(o,false)){const{message:t}=Bt$2("MISSING_OR_INVALID",`pairing topic should be a string: ${o}`);throw new Error(t)}if(!this.client.core.pairing.pairings.keys.includes(o)){const{message:t}=Bt$2("NO_MATCHING_KEY",`pairing topic doesn't exist: ${o}`);throw new Error(t)}if(Oi$1(this.client.core.pairing.pairings.get(o).expiry)){const{message:t}=Bt$2("EXPIRED",`pairing topic: ${o}`);throw new Error(t)}}async isValidSessionTopic(o){if(!ft$2(o,false)){const{message:t}=Bt$2("MISSING_OR_INVALID",`session topic should be a string: ${o}`);throw new Error(t)}if(this.checkRecentlyDeleted(o),!this.client.session.keys.includes(o)){const{message:t}=Bt$2("NO_MATCHING_KEY",`session topic doesn't exist: ${o}`);throw new Error(t)}if(Oi$1(this.client.session.get(o).expiry)){await this.deleteSession({topic:o});const{message:t}=Bt$2("EXPIRED",`session topic: ${o}`);throw new Error(t)}if(!this.client.core.crypto.keychain.has(o)){const{message:t}=Bt$2("MISSING_OR_INVALID",`session topic does not exist in keychain: ${o}`);throw await this.deleteSession({topic:o}),new Error(t)}}async isValidSessionOrPairingTopic(o){if(this.checkRecentlyDeleted(o),this.client.session.keys.includes(o))await this.isValidSessionTopic(o);else if(this.client.core.pairing.pairings.keys.includes(o))this.isValidPairingTopic(o);else if(ft$2(o,false)){const{message:t}=Bt$2("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${o}`);throw new Error(t)}else {const{message:t}=Bt$2("MISSING_OR_INVALID",`session or pairing topic should be a string: ${o}`);throw new Error(t)}}async isValidProposalId(o){if(!Wa(o)){const{message:t}=Bt$2("MISSING_OR_INVALID",`proposal id should be a number: ${o}`);throw new Error(t)}if(!this.client.proposal.keys.includes(o)){const{message:t}=Bt$2("NO_MATCHING_KEY",`proposal id doesn't exist: ${o}`);throw new Error(t)}if(Oi$1(this.client.proposal.get(o).expiryTimestamp)){await this.deleteProposal(o);const{message:t}=Bt$2("EXPIRED",`proposal id: ${o}`);throw new Error(t)}}}class Ds extends Ui{constructor(o,t){super(o,t,dt$1,we$1),this.core=o,this.logger=t;}}let It$1 = class It extends Ui{constructor(o,t){super(o,t,ut$1,we$1),this.core=o,this.logger=t;}};class Ls extends Ui{constructor(o,t){super(o,t,wt$1,we$1,e=>e.id),this.core=o,this.logger=t;}}class Ms extends Ui{constructor(o,t){super(o,t,St$1,le$1,()=>pe$1),this.core=o,this.logger=t;}}class $s extends Ui{constructor(o,t){super(o,t,Et$1,le$1),this.core=o,this.logger=t;}}class Ks extends Ui{constructor(o,t){super(o,t,Rt$1,le$1,e=>e.id),this.core=o,this.logger=t;}}var Us=Object.defineProperty,Gs=(S,o,t)=>o in S?Us(S,o,{enumerable:true,configurable:true,writable:true,value:t}):S[o]=t,Ke$1=(S,o,t)=>Gs(S,typeof o!="symbol"?o+"":o,t);class js{constructor(o,t){this.core=o,this.logger=t,Ke$1(this,"authKeys"),Ke$1(this,"pairingTopics"),Ke$1(this,"requests"),this.authKeys=new Ms(this.core,this.logger),this.pairingTopics=new $s(this.core,this.logger),this.requests=new Ks(this.core,this.logger);}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init();}}var Fs=Object.defineProperty,Qs=(S,o,t)=>o in S?Fs(S,o,{enumerable:true,configurable:true,writable:true,value:t}):S[o]=t,f$3=(S,o,t)=>Qs(S,typeof o!="symbol"?o+"":o,t);let fe$1 = class fe extends J$3{constructor(o){super(o),f$3(this,"protocol",Ve$1),f$3(this,"version",ke$1),f$3(this,"name",me$1.name),f$3(this,"metadata"),f$3(this,"core"),f$3(this,"logger"),f$3(this,"events",new eventsExports.EventEmitter),f$3(this,"engine"),f$3(this,"session"),f$3(this,"proposal"),f$3(this,"pendingRequest"),f$3(this,"auth"),f$3(this,"signConfig"),f$3(this,"on",(e,s)=>this.events.on(e,s)),f$3(this,"once",(e,s)=>this.events.once(e,s)),f$3(this,"off",(e,s)=>this.events.off(e,s)),f$3(this,"removeListener",(e,s)=>this.events.removeListener(e,s)),f$3(this,"removeAllListeners",e=>this.events.removeAllListeners(e)),f$3(this,"connect",async e=>{try{return await this.engine.connect(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"pair",async e=>{try{return await this.engine.pair(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"approve",async e=>{try{return await this.engine.approve(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"reject",async e=>{try{return await this.engine.reject(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"update",async e=>{try{return await this.engine.update(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"extend",async e=>{try{return await this.engine.extend(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"request",async e=>{try{return await this.engine.request(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"respond",async e=>{try{return await this.engine.respond(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"ping",async e=>{try{return await this.engine.ping(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"emit",async e=>{try{return await this.engine.emit(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"disconnect",async e=>{try{return await this.engine.disconnect(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"find",e=>{try{return this.engine.find(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"getPendingSessionRequests",()=>{try{return this.engine.getPendingSessionRequests()}catch(e){throw this.logger.error(e.message),e}}),f$3(this,"authenticate",async(e,s)=>{try{return await this.engine.authenticate(e,s)}catch(i){throw this.logger.error(i.message),i}}),f$3(this,"formatAuthMessage",e=>{try{return this.engine.formatAuthMessage(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"approveSessionAuthenticate",async e=>{try{return await this.engine.approveSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}}),f$3(this,"rejectSessionAuthenticate",async e=>{try{return await this.engine.rejectSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}}),this.name=o?.name||me$1.name,this.metadata=ui$1(o?.metadata),this.signConfig=o?.signConfig;const t=typeof o?.logger<"u"&&typeof o?.logger!="string"?o.logger:Ne$1(k$3({level:o?.logger||me$1.logger}));this.core=o?.core||new ta(o),this.logger=E$2(t,this.name),this.session=new It$1(this.core,this.logger),this.proposal=new Ds(this.core,this.logger),this.pendingRequest=new Ls(this.core,this.logger),this.engine=new ks(this),this.auth=new js(this.core,this.logger);}static async init(o){const t=new fe(o);return await t.initialize(),t}get context(){return y$4(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success");}catch(o){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(o.message),o}}};

const Z$1="error",Fe="wss://relay.walletconnect.org",He="wc",Ue="universal_provider",$$1=`${He}@2:${Ue}:`,T$1="https://rpc.walletconnect.org/v1/",ee="generic",Be=`${T$1}bundler`,y$2="call_status",Le=86400,_$2={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};function x$2(t){return t==null||typeof t!="object"&&typeof t!="function"}function te(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function se(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Me="[object RegExp]",ie="[object String]",ne="[object Number]",re="[object Boolean]",ae="[object Arguments]",ze="[object Symbol]",Ge="[object Date]",We="[object Map]",Je="[object Set]",Ke="[object Array]",Ve="[object ArrayBuffer]",Ye="[object Object]",Xe="[object DataView]",ke="[object Uint8Array]",Qe="[object Uint8ClampedArray]",Ze="[object Uint16Array]",Te="[object Uint32Array]",et="[object Int8Array]",tt="[object Int16Array]",st="[object Int32Array]",it="[object Float32Array]",nt="[object Float64Array]";function F(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function rt(t,e){return v$1(t,void 0,t,new Map,e)}function v$1(t,e,s,i=new Map,r=void 0){const a=r?.(t,e,s,i);if(a!=null)return a;if(x$2(t))return t;if(i.has(t))return i.get(t);if(Array.isArray(t)){const n=new Array(t.length);i.set(t,n);for(let c=0;c<t.length;c++)n[c]=v$1(t[c],c,s,i,r);return Object.hasOwn(t,"index")&&(n.index=t.index),Object.hasOwn(t,"input")&&(n.input=t.input),n}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp){const n=new RegExp(t.source,t.flags);return n.lastIndex=t.lastIndex,n}if(t instanceof Map){const n=new Map;i.set(t,n);for(const[c,o]of t)n.set(c,v$1(o,c,s,i,r));return n}if(t instanceof Set){const n=new Set;i.set(t,n);for(const c of t)n.add(v$1(c,void 0,s,i,r));return n}if(typeof Buffer<"u"&&Buffer.isBuffer(t))return t.subarray();if(F(t)){const n=new(Object.getPrototypeOf(t)).constructor(t.length);i.set(t,n);for(let c=0;c<t.length;c++)n[c]=v$1(t[c],c,s,i,r);return n}if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);if(t instanceof DataView){const n=new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);return i.set(t,n),m$2(n,t,s,i,r),n}if(typeof File<"u"&&t instanceof File){const n=new File([t],t.name,{type:t.type});return i.set(t,n),m$2(n,t,s,i,r),n}if(t instanceof Blob){const n=new Blob([t],{type:t.type});return i.set(t,n),m$2(n,t,s,i,r),n}if(t instanceof Error){const n=new t.constructor;return i.set(t,n),n.message=t.message,n.name=t.name,n.stack=t.stack,n.cause=t.cause,m$2(n,t,s,i,r),n}if(typeof t=="object"&&at(t)){const n=Object.create(Object.getPrototypeOf(t));return i.set(t,n),m$2(n,t,s,i,r),n}return t}function m$2(t,e,s=t,i,r){const a=[...Object.keys(e),...te(e)];for(let n=0;n<a.length;n++){const c=a[n],o=Object.getOwnPropertyDescriptor(t,c);(o==null||o.writable)&&(t[c]=v$1(e[c],c,s,i,r));}}function at(t){switch(se(t)){case ae:case Ke:case Ve:case Xe:case re:case Ge:case it:case nt:case et:case tt:case st:case We:case ne:case Ye:case Me:case Je:case ie:case ze:case ke:case Qe:case Ze:case Te:return  true;default:return  false}}function ct(t,e){return rt(t,(s,i,r,a)=>{if(typeof t=="object")switch(Object.prototype.toString.call(t)){case ne:case ie:case re:{const c=new t.constructor(t?.valueOf());return m$2(c,t),c}case ae:{const c={};return m$2(c,t),c.length=t.length,c[Symbol.iterator]=t[Symbol.iterator],c}default:return}})}function ce(t){return ct(t)}function oe(t){return t!==null&&typeof t=="object"&&se(t)==="[object Arguments]"}function pe(t){return typeof t=="object"&&t!==null}function ot(){}function pt(t){return F(t)}function ht(t){if(typeof t!="object"||t==null)return  false;if(Object.getPrototypeOf(t)===null)return  true;if(Object.prototype.toString.call(t)!=="[object Object]"){const s=t[Symbol.toStringTag];return s==null||!Object.getOwnPropertyDescriptor(t,Symbol.toStringTag)?.writable?false:t.toString()===`[object ${s}]`}let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function lt(t){if(x$2(t))return t;if(Array.isArray(t)||F(t)||t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);const e=Object.getPrototypeOf(t),s=e.constructor;if(t instanceof Date||t instanceof Map||t instanceof Set)return new s(t);if(t instanceof RegExp){const i=new s(t);return i.lastIndex=t.lastIndex,i}if(t instanceof DataView)return new s(t.buffer.slice(0));if(t instanceof Error){const i=new s(t.message);return i.stack=t.stack,i.name=t.name,i.cause=t.cause,i}if(typeof File<"u"&&t instanceof File)return new s([t],t.name,{type:t.type,lastModified:t.lastModified});if(typeof t=="object"){const i=Object.create(e);return Object.assign(i,t)}return t}function ut(t,...e){const s=e.slice(0,-1),i=e[e.length-1];let r=t;for(let a=0;a<s.length;a++){const n=s[a];r=A$2(r,n,i,new Map);}return r}function A$2(t,e,s,i){if(x$2(t)&&(t=Object(t)),e==null||typeof e!="object")return t;if(i.has(e))return lt(i.get(e));if(i.set(e,t),Array.isArray(e)){e=e.slice();for(let a=0;a<e.length;a++)e[a]=e[a]??void 0;}const r=[...Object.keys(e),...te(e)];for(let a=0;a<r.length;a++){const n=r[a];let c=e[n],o=t[n];if(oe(c)&&(c={...c}),oe(o)&&(o={...o}),typeof Buffer<"u"&&Buffer.isBuffer(c)&&(c=ce(c)),Array.isArray(c))if(typeof o=="object"&&o!=null){const l=[],p=Reflect.ownKeys(o);for(let f=0;f<p.length;f++){const u=p[f];l[u]=o[u];}o=l;}else o=[];const h=s(o,c,n,t,e,i);h!=null?t[n]=h:Array.isArray(c)||pe(o)&&pe(c)?t[n]=A$2(o,c,s,i):o==null&&ht(c)?t[n]=A$2({},c,s,i):o==null&&pt(c)?t[n]=ce(c):(o===void 0||c!==void 0)&&(t[n]=c);}return t}function dt(t,...e){return ut(t,...e,ot)}var ft=Object.defineProperty,mt=Object.defineProperties,gt=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,le=(t,e,s)=>e in t?ft(t,e,{enumerable:true,configurable:true,writable:true,value:s}):t[e]=s,E$1=(t,e)=>{for(var s in e||(e={}))yt.call(e,s)&&le(t,s,e[s]);if(he)for(var s of he(e))vt.call(e,s)&&le(t,s,e[s]);return t},wt=(t,e)=>mt(t,gt(e));function ue(t,e,s){var i;const r=Je$2(t);return ((i=e.rpcMap)==null?void 0:i[r.reference])||`${T$1}?chainId=${r.namespace}:${r.reference}&projectId=${s}`}function bt(t){return t.includes(":")?t.split(":")[1]:t}function de(t){return t.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)}function Pt(t,e){const s=Object.keys(e.namespaces).filter(r=>r.includes(t));if(!s.length)return [];const i=[];return s.forEach(r=>{const a=e.namespaces[r].accounts;i.push(...a);}),i}function fe(t){return Object.fromEntries(Object.entries(t).filter(([e,s])=>{var i,r;return ((i=s?.chains)==null?void 0:i.length)&&((r=s?.chains)==null?void 0:r.length)>0}))}function j(t={},e={}){const s=fe(me(t)),i=fe(me(e));return dt(s,i)}function me(t){var e,s,i,r,a;const n={};if(!Ye$2(t))return n;for(const[c,o]of Object.entries(t)){const h=Gn$1(c)?[c]:o.chains,l=o.methods||[],p=o.events||[],f=o.rpcMap||{},u=bs$1(c);n[u]=wt(E$1(E$1({},n[u]),o),{chains:ut$2(h,(e=n[u])==null?void 0:e.chains),methods:ut$2(l,(s=n[u])==null?void 0:s.methods),events:ut$2(p,(i=n[u])==null?void 0:i.events)}),(Ye$2(f)||Ye$2(((r=n[u])==null?void 0:r.rpcMap)||{}))&&(n[u].rpcMap=E$1(E$1({},f),(a=n[u])==null?void 0:a.rpcMap));}return n}function ge(t){return t.includes(":")?t.split(":")[2]:t}function ye(t){const e={};for(const[s,i]of Object.entries(t)){const r=i.methods||[],a=i.events||[],n=i.accounts||[],c=Gn$1(s)?[s]:i.chains?i.chains:de(i.accounts);e[s]={chains:c,methods:r,events:a,accounts:n};}return e}function H$1(t){return typeof t=="number"?t:t.includes("0x")?parseInt(t,16):(t=t.includes(":")?t.split(":")[1]:t,isNaN(Number(t))?t:Number(t))}function Ot(t){try{const e=JSON.parse(t);return typeof e=="object"&&e!==null&&!Array.isArray(e)}catch{return  false}}const ve={},w$1=t=>ve[t],U=(t,e)=>{ve[t]=e;};var It=Object.defineProperty,we=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,be=(t,e,s)=>e in t?It(t,e,{enumerable:true,configurable:true,writable:true,value:s}):t[e]=s,Pe=(t,e)=>{for(var s in e||(e={}))St.call(e,s)&&be(t,s,e[s]);if(we)for(var s of we(e))$t.call(e,s)&&be(t,s,e[s]);return t};const Oe="eip155",At=["atomic","flow-control","paymasterService","sessionKeys","auxiliaryFunds"],Et=t=>t&&t.startsWith("0x")?BigInt(t).toString(10):t,B$2=t=>t&&t.startsWith("0x")?t:`0x${BigInt(t).toString(16)}`,Ie=t=>Object.keys(t).filter(e=>At.includes(e)).reduce((e,s)=>(e[s]=jt(t[s]),e),{}),jt=t=>typeof t=="string"&&Ot(t)?JSON.parse(t):t,Ct=(t,e,s)=>{const{sessionProperties:i={},scopedProperties:r={}}=t,a={};if(!Ye$2(r)&&!Ye$2(i))return;const n=Ie(i);for(const c of s){const o=Et(c);if(!o)continue;a[B$2(o)]=n;const h=r?.[`${Oe}:${o}`];if(h){const l=h?.[`${Oe}:${o}:${e}`];a[B$2(o)]=Pe(Pe({},a[B$2(o)]),Ie(l||h));}}for(const[c,o]of Object.entries(a))Object.keys(o).length===0&&delete a[c];return Object.keys(a).length>0?a:void 0};var Nt=Object.defineProperty,Dt=(t,e,s)=>e in t?Nt(t,e,{enumerable:true,configurable:true,writable:true,value:s}):t[e]=s,qt=(t,e,s)=>Dt(t,e+"",s);let L$2;class J{constructor(e){qt(this,"storage"),this.storage=e;}async getItem(e){return await this.storage.getItem(e)}async setItem(e,s){return await this.storage.setItem(e,s)}async removeItem(e){return await this.storage.removeItem(e)}static getStorage(e){return L$2||(L$2=new J(e)),L$2}}var Rt=Object.defineProperty,_t=Object.defineProperties,xt=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,$e=(t,e,s)=>e in t?Rt(t,e,{enumerable:true,configurable:true,writable:true,value:s}):t[e]=s,Ut=(t,e)=>{for(var s in e||(e={}))Ft.call(e,s)&&$e(t,s,e[s]);if(Se)for(var s of Se(e))Ht.call(e,s)&&$e(t,s,e[s]);return t},Bt=(t,e)=>_t(t,xt(e));async function Lt(t,e){const s=Je$2(t.result.capabilities.caip345.caip2),i=t.result.capabilities.caip345.transactionHashes,r=await Promise.allSettled(i.map(p=>Mt(s.reference,p,e))),a=r.filter(p=>p.status==="fulfilled").map(p=>p.value).filter(p=>p);r.filter(p=>p.status==="rejected").forEach(p=>console.warn("Failed to fetch transaction receipt:",p.reason));const n=!a.length||a.some(p=>!p),c=a.every(p=>p?.status==="0x1"),o=a.every(p=>p?.status==="0x0"),h=a.some(p=>p?.status==="0x0");let l;return n?l=100:c?l=200:o?l=500:h&&(l=600),{id:t.result.id,version:t.request.version,atomic:t.request.atomicRequired,chainId:t.request.chainId,capabilities:t.result.capabilities,receipts:a,status:l}}async function Mt(t,e,s){return await s(parseInt(t)).request(formatJsonRpcRequest("eth_getTransactionReceipt",[e]))}async function zt({sendCalls:t,storage:e}){const s=await e.getItem(y$2);await e.setItem(y$2,Bt(Ut({},s),{[t.result.id]:{request:t.request,result:t.result,expiry:Si$1(Le)}}));}async function Gt({resultId:t,storage:e}){const s=await e.getItem(y$2);if(s){delete s[t],await e.setItem(y$2,s);for(const i in s)Oi$1(s[i].expiry)&&delete s[i];await e.setItem(y$2,s);}}async function Wt({resultId:t,storage:e}){const s=await e.getItem(y$2),i=s?.[t];if(i&&!Oi$1(i.expiry))return i;await Gt({resultId:t,storage:e});}var Jt=Object.defineProperty,Kt=Object.defineProperties,Vt=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,M$1=(t,e,s)=>e in t?Jt(t,e,{enumerable:true,configurable:true,writable:true,value:s}):t[e]=s,z$2=(t,e)=>{for(var s in e||(e={}))Yt.call(e,s)&&M$1(t,s,e[s]);if(Ae)for(var s of Ae(e))Xt.call(e,s)&&M$1(t,s,e[s]);return t},G=(t,e)=>Kt(t,Vt(e)),g$2=(t,e,s)=>M$1(t,typeof e!="symbol"?e+"":e,s);class kt{constructor(e){g$2(this,"name","eip155"),g$2(this,"client"),g$2(this,"chainId"),g$2(this,"namespace"),g$2(this,"httpProviders"),g$2(this,"events"),g$2(this,"storage"),this.namespace=e.namespace,this.events=w$1("events"),this.client=w$1("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain()),this.storage=J.getStorage(this.client.core.storage);}async request(e){switch(e.request.method){case "eth_requestAccounts":return this.getAccounts();case "eth_accounts":return this.getAccounts();case "wallet_switchEthereumChain":return await this.handleSwitchChain(e);case "eth_chainId":return parseInt(this.getDefaultChain());case "wallet_getCapabilities":return await this.getCapabilities(e);case "wallet_getCallsStatus":return await this.getCallStatus(e);case "wallet_sendCalls":return await this.sendCalls(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e);}setDefaultChain(e,s){this.httpProviders[e]||this.setHttpProvider(parseInt(e),s);const i=this.chainId;this.chainId=parseInt(e),this.events.emit(_$2.DEFAULT_CHAIN_CHANGED,{currentCaipChainId:`${this.name}:${e}`,previousCaipChainId:`${this.name}:${i}`});}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,s){const i=s||ue(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new o$4(new f$8(i,w$1("disableProviderPing")))}setHttpProvider(e,s){const i=this.createHttpProvider(e,s);i&&(this.httpProviders[e]=i);}createHttpProviders(){const e={};return this.namespace.chains.forEach(s=>{var i;const r=parseInt(bt(s));e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[s]);}),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(s=>s.split(":")[1]===this.chainId.toString()).map(s=>s.split(":")[2]))]:[]}getHttpProvider(e){const s=e||this.chainId;return this.httpProviders[s]||(this.httpProviders=G(z$2({},this.httpProviders),{[s]:this.createHttpProvider(s)}),this.httpProviders[s])}async handleSwitchChain(e){var s,i;let r=e.request.params?(s=e.request.params[0])==null?void 0:s.chainId:"0x0";r=r.startsWith("0x")?r:`0x${r}`;const a=parseInt(r,16);if(this.isChainApproved(a))this.setDefaultChain(`${a}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:r}]},chainId:(i=this.namespace.chains)==null?void 0:i[0]}),this.setDefaultChain(`${a}`);else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var s,i,r,a,n;const c=(i=(s=e.request)==null?void 0:s.params)==null?void 0:i[0],o=((a=(r=e.request)==null?void 0:r.params)==null?void 0:a[1])||[];if(!c)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const h=this.client.session.get(e.topic),l=((n=h?.sessionProperties)==null?void 0:n.capabilities)||{},p=`${c}${o.join(",")}`,f=l?.[p];if(f)return f;let u;try{u=Ct(h,c,o);}catch(D){console.warn("Failed to extract capabilities from session",D);}if(u)return u;const K=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:G(z$2({},h.sessionProperties||{}),{capabilities:G(z$2({},l||{}),{[p]:K})})});}catch(D){console.warn("Failed to update session with capabilities",D);}return K}async getCallStatus(e){var s,i,r;const a=this.client.session.get(e.topic),n=(s=a.sessionProperties)==null?void 0:s.bundler_name;if(n){const h=this.getBundlerUrl(e.chainId,n);try{return await this.getUserOperationReceipt(h,e)}catch(l){console.warn("Failed to fetch call status from bundler",l,h);}}const c=(i=a.sessionProperties)==null?void 0:i.bundler_url;if(c)try{return await this.getUserOperationReceipt(c,e)}catch(h){console.warn("Failed to fetch call status from custom bundler",h,c);}const o=await Wt({resultId:(r=e.request.params)==null?void 0:r[0],storage:this.storage});if(o)try{return await Lt(o,this.getHttpProvider.bind(this))}catch(h){console.warn("Failed to fetch call status from stored send calls",h,o);}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,s){var i;const r=new URL(e),a=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt",[(i=s.request.params)==null?void 0:i[0]]))});if(!a.ok)throw new Error(`Failed to fetch user operation receipt - ${a.status}`);return await a.json()}getBundlerUrl(e,s){return `${Be}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`}async sendCalls(e){var s,i,r;const a=await this.client.request(e),n=(s=e.request.params)==null?void 0:s[0],c=a?.id,o=a?.capabilities||{},h=(i=o?.caip345)==null?void 0:i.caip2,l=(r=o?.caip345)==null?void 0:r.transactionHashes;return !c||!h||!(l!=null&&l.length)||await zt({sendCalls:{request:n,result:a},storage:this.storage}),a}}var Qt=Object.defineProperty,Zt=(t,e,s)=>e in t?Qt(t,e,{enumerable:true,configurable:true,writable:true,value:s}):t[e]=s,b$2=(t,e,s)=>Zt(t,typeof e!="symbol"?e+"":e,s);class Tt{constructor(e){b$2(this,"name",ee),b$2(this,"client"),b$2(this,"httpProviders"),b$2(this,"events"),b$2(this,"namespace"),b$2(this,"chainId"),this.namespace=e.namespace,this.events=w$1("events"),this.client=w$1("client"),this.chainId=this.getDefaultChain(),this.name=this.getNamespaceName(),this.httpProviders=this.createHttpProviders();}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders();}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,s){this.httpProviders[e]||this.setHttpProvider(e,s);const i=this.chainId;this.chainId=e,this.events.emit(_$2.DEFAULT_CHAIN_CHANGED,{currentCaipChainId:`${this.name}:${e}`,previousCaipChainId:`${this.name}:${i}`});}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getNamespaceName(){const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return Je$2(e).namespace}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(s=>s.split(":")[1]===this.chainId.toString()).map(s=>s.split(":")[2]))]:[]}createHttpProviders(){var e,s;const i={};return (s=(e=this.namespace)==null?void 0:e.accounts)==null||s.forEach(r=>{var a,n;const c=Je$2(r),o=(n=(a=this.namespace)==null?void 0:a.rpcMap)==null?void 0:n[`${c.namespace}:${c.reference}`];i[c.reference]=this.createHttpProvider(r,o);}),i}getHttpProvider(e){const s=Je$2(e).reference,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,s){const i=this.createHttpProvider(e,s);i&&(this.httpProviders[e]=i);}createHttpProvider(e,s){const i=s||ue(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new o$4(new f$8(i,w$1("disableProviderPing")))}}var es=Object.defineProperty,ts=Object.defineProperties,ss=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,is=Object.prototype.hasOwnProperty,ns=Object.prototype.propertyIsEnumerable,W=(t,e,s)=>e in t?es(t,e,{enumerable:true,configurable:true,writable:true,value:s}):t[e]=s,S$3=(t,e)=>{for(var s in e||(e={}))is.call(e,s)&&W(t,s,e[s]);if(Ee)for(var s of Ee(e))ns.call(e,s)&&W(t,s,e[s]);return t},C$2=(t,e)=>ts(t,ss(e)),d$3=(t,e,s)=>W(t,typeof e!="symbol"?e+"":e,s);let N$1 = class N{constructor(e){d$3(this,"client"),d$3(this,"namespaces"),d$3(this,"optionalNamespaces"),d$3(this,"sessionProperties"),d$3(this,"scopedProperties"),d$3(this,"events",new xe$1),d$3(this,"rpcProviders",{}),d$3(this,"session"),d$3(this,"providerOpts"),d$3(this,"logger"),d$3(this,"uri"),d$3(this,"disableProviderPing",false),this.providerOpts=e,this.logger=typeof e?.logger<"u"&&typeof e?.logger!="string"?e.logger:Ne$1(k$3({level:e?.logger||Z$1})),this.disableProviderPing=e?.disableProviderPing||false;}static async init(e){const s=new N(e);return await s.initialize(),s}async request(e,s,i){const[r,a]=this.validateChain(s);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(r).request({request:S$3({},e),chainId:`${r}:${a}`,topic:this.session.topic,expiry:i})}sendAsync(e,s,i,r){const a=new Date().getTime();this.request(e,i,r).then(n=>s(null,formatJsonRpcResult(a,n))).catch(n=>s(n,void 0));}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(e=this.session)==null?void 0:e.topic,reason:zt$2("USER_DISCONNECTED")}),await this.cleanup();}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,s){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:i,response:r}=await this.client.authenticate(e,s);i&&(this.uri=i,this.events.emit("display_uri",i));const a=await r();if(this.session=a.session,this.session){const n=ye(this.session.namespaces);this.namespaces=j(this.namespaces,n),await this.persist("namespaces",this.namespaces),this.onConnect();}return a}on(e,s){this.events.on(e,s);}once(e,s){this.events.once(e,s);}removeListener(e,s){this.events.removeListener(e,s);}off(e,s){this.events.off(e,s);}get isWalletConnect(){return  true}async pair(e){const{uri:s,approval:i}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties});s&&(this.uri=s,this.events.emit("display_uri",s));const r=await i();this.session=r;const a=ye(r.namespaces);return this.namespaces=j(this.namespaces,a),await this.persist("namespaces",this.namespaces),await this.persist("optionalNamespaces",this.optionalNamespaces),this.onConnect(),this.session}setDefaultChain(e,s){try{if(!this.session)return;const[i,r]=this.validateChain(e);this.getProvider(i).setDefaultChain(r,s);}catch(i){if(!/Please call connect/.test(i.message))throw i}}async cleanupPendingPairings(e={}){try{this.logger.info("Cleaning up inactive pairings...");const s=this.client.pairing.getAll();if(!Ee$1(s))return;for(const i of s)e.deletePairings?this.client.core.expirer.set(i.topic,0):await this.client.core.relayer.subscriber.unsubscribe(i.topic);this.logger.info(`Inactive pairings cleared: ${s.length}`);}catch(s){this.logger.warn("Failed to cleanup pending pairings",s);}}abortPairingAttempt(){this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");}async checkStorage(){this.namespaces=await this.getFromStore("namespaces")||{},this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.session&&this.createProviders();}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners();}async createClient(){var e,s;if(this.client=this.providerOpts.client||await fe$1.init({core:this.providerOpts.core,logger:this.providerOpts.logger||Z$1,relayUrl:this.providerOpts.relayUrl||Fe,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.providerOpts.session)try{this.session=this.client.session.get(this.providerOpts.session.topic);}catch(i){throw this.logger.error("Failed to get session",i),new Error(`The provided session: ${(s=(e=this.providerOpts)==null?void 0:e.session)==null?void 0:s.topic} doesn't exist in the Sign client`)}else {const i=this.client.session.getAll();this.session=i[0];}this.logger.trace("SignClient Initialized");}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map(s=>bs$1(s)))];U("client",this.client),U("events",this.events),U("disableProviderPing",this.disableProviderPing),e.forEach(s=>{if(!this.session)return;const i=Pt(s,this.session);if(i?.length===0)return;const r=de(i),a=j(this.namespaces,this.optionalNamespaces),n=C$2(S$3({},a[s]),{accounts:i,chains:r});switch(s){case "eip155":this.rpcProviders[s]=new kt({namespace:n});break;default:this.rpcProviders[s]=new Tt({namespace:n});}});}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",e=>{var s;const{topic:i}=e;i===((s=this.session)==null?void 0:s.topic)&&this.events.emit("session_ping",e);}),this.client.on("session_event",e=>{var s;const{params:i,topic:r}=e;if(r!==((s=this.session)==null?void 0:s.topic))return;const{event:a}=i;if(a.name==="accountsChanged"){const n=a.data;n&&Ee$1(n)&&this.events.emit("accountsChanged",n.map(ge));}else if(a.name==="chainChanged"){const n=i.chainId,c=i.event.data,o=bs$1(n),h=H$1(n)!==H$1(c)?`${o}:${H$1(c)}`:n;this.onChainChanged({currentCaipChainId:h});}else this.events.emit(a.name,a.data);this.events.emit("session_event",e);}),this.client.on("session_update",({topic:e,params:s})=>{var i,r;if(e!==((i=this.session)==null?void 0:i.topic))return;const{namespaces:a}=s,n=(r=this.client)==null?void 0:r.session.get(e);this.session=C$2(S$3({},n),{namespaces:a}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:s});}),this.client.on("session_delete",async e=>{var s;e.topic===((s=this.session)==null?void 0:s.topic)&&(await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",C$2(S$3({},zt$2("USER_DISCONNECTED")),{data:e.topic})));}),this.on(_$2.DEFAULT_CHAIN_CHANGED,e=>{this.onChainChanged(C$2(S$3({},e),{internal:true}));});}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[ee]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(e=>{var s;this.getProvider(e).updateNamespace((s=this.session)==null?void 0:s.namespaces[e]);});}setNamespaces(e){const{namespaces:s={},optionalNamespaces:i={},sessionProperties:r,scopedProperties:a}=e;this.optionalNamespaces=j(s,i),this.sessionProperties=r,this.scopedProperties=a;}validateChain(e){const[s,i]=e?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return [s,i];if(s&&!Object.keys(this.namespaces||{}).map(n=>bs$1(n)).includes(s))throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);if(s&&i)return [s,i];const r=bs$1(Object.keys(this.namespaces)[0]),a=this.rpcProviders[r].getDefaultChain();return [r,a]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}async onChainChanged({currentCaipChainId:e,previousCaipChainId:s,internal:i=false}){if(!this.namespaces)return;const[r,a]=this.validateChain(e);a&&(this.updateNamespaceChain(r,a),i?(this.events.emit("chainChanged",a),this.emitAccountsChangedOnChainChange({namespace:r,currentCaipChainId:e,previousCaipChainId:s})):this.getProvider(r).setDefaultChain(a),await this.persist("namespaces",this.namespaces));}emitAccountsChangedOnChainChange({namespace:e,currentCaipChainId:s,previousCaipChainId:i}){var r,a;try{if(i===s)return;const n=(a=(r=this.session)==null?void 0:r.namespaces[e])==null?void 0:a.accounts;if(!n)return;const c=n.filter(o=>o.includes(`${s}:`)).map(ge);if(!Ee$1(c))return;this.events.emit("accountsChanged",c);}catch(n){this.logger.warn("Failed to emit accountsChanged on chain change",n);}}updateNamespaceChain(e,s){if(!this.namespaces)return;const i=this.namespaces[e]?e:`${e}:${s}`,r={chains:[],methods:[],events:[],defaultChain:s};this.namespaces[i]?this.namespaces[i]&&(this.namespaces[i].defaultChain=s):this.namespaces[i]=r;}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session});}async cleanup(){this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,await this.deleteFromStore("namespaces"),await this.deleteFromStore("optionalNamespaces"),await this.deleteFromStore("sessionProperties"),this.session=void 0,this.cleanupPendingPairings({deletePairings:true}),await this.cleanupStorage();}async persist(e,s){var i;const r=((i=this.session)==null?void 0:i.topic)||"";await this.client.core.storage.setItem(`${$$1}/${e}${r}`,s);}async getFromStore(e){var s;const i=((s=this.session)==null?void 0:s.topic)||"";return await this.client.core.storage.getItem(`${$$1}/${e}${i}`)}async deleteFromStore(e){var s;const i=((s=this.session)==null?void 0:s.topic)||"";await this.client.core.storage.removeItem(`${$$1}/${e}${i}`);}async cleanupStorage(){var e;try{if(((e=this.client)==null?void 0:e.session.length)>0)return;const s=await this.client.core.storage.getKeys();for(const i of s)i.startsWith($$1)&&await this.client.core.storage.removeItem(i);}catch(s){this.logger.warn("Failed to cleanup storage",s);}}};

const ConstantsUtil$1 = {
    EIP155: ConstantsUtil$3.CHAIN.EVM,
    CONNECTOR_TYPE_WALLET_CONNECT: 'WALLET_CONNECT',
    CONNECTOR_TYPE_INJECTED: 'INJECTED',
    CONNECTOR_TYPE_ANNOUNCED: 'ANNOUNCED',
    CONNECTOR_TYPE_AUTH: 'AUTH'};

const PresetsUtil = {
    NetworkImageIds: {
        // Ethereum
        1: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        // Arbitrum
        42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
        // Avalanche
        43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
        // Binance Smart Chain
        56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
        // Fantom
        250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
        // Optimism
        10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
        // Polygon
        137: '41d04d42-da3b-4453-8506-668cc0727900',
        // Mantle
        5000: 'e86fae9b-b770-4eea-e520-150e12c81100',
        // Hedera Mainnet
        295: '6a97d510-cac8-4e58-c7ce-e8681b044c00',
        // Sepolia
        11_155_111: 'e909ea0a-f92a-4512-c8fc-748044ea6800',
        // Base Sepolia
        84532: 'a18a7ecd-e307-4360-4746-283182228e00',
        // Unichain Sepolia
        1301: '4eeea7ef-0014-4649-5d1d-07271a80f600',
        // Unichain Mainnet
        130: '2257980a-3463-48c6-cbac-a42d2a956e00',
        // Monad Testnet
        10_143: '0a728e83-bacb-46db-7844-948f05434900',
        // Gnosis
        100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
        // EVMos
        9001: 'f926ff41-260d-4028-635e-91913fc28e00',
        // ZkSync
        324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
        // Filecoin
        314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
        // Iotx
        4689: '34e68754-e536-40da-c153-6ef2e7188a00',
        // Metis,
        1088: '3897a66d-40b9-4833-162f-a2c90531c900',
        // Moonbeam
        1284: '161038da-44ae-4ec7-1208-0ea569454b00',
        // Moonriver
        1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
        // Zora
        7777777: '845c60df-d429-4991-e687-91ae45791600',
        // Celo
        42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
        // Base
        8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
        // Aurora
        1313161554: '3ff73439-a619-4894-9262-4470c773a100',
        // Ronin Mainnet
        2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        // Saigon Testnet (a.k.a. Ronin)
        2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        // Berachain Mainnet
        80094: 'e329c2c9-59b0-4a02-83e4-212ff3779900',
        // Abstract Mainnet
        2741: 'fc2427d1-5af9-4a9c-8da5-6f94627cd900',
        // Solana networks
        '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        // Bitcoin
        '000000000019d6689c085ae165831e93': '0b4838db-0161-4ffe-022d-532bf03dba00',
        // Bitcoin Testnet
        '000000000933ea01ad0ee984209779ba': '39354064-d79b-420b-065d-f980c4b78200',
        // Bitcoin Signet
        '00000008819873e925422c1ff0f99f7c': 'b3406e4a-bbfc-44fb-e3a6-89673c78b700'
    },
    ConnectorImageIds: {
        [ConstantsUtil$3.CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [ConstantsUtil$3.CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [ConstantsUtil$3.CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [ConstantsUtil$3.CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [ConstantsUtil$3.CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [ConstantsUtil$3.CONNECTOR_ID.INJECTED]: 'Browser Wallet',
        [ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
        [ConstantsUtil$3.CONNECTOR_ID.COINBASE]: 'Coinbase',
        [ConstantsUtil$3.CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
        [ConstantsUtil$3.CONNECTOR_ID.LEDGER]: 'Ledger',
        [ConstantsUtil$3.CONNECTOR_ID.SAFE]: 'Safe'
    }};

const HelpersUtil = {
    getCaipTokens(tokens) {
        if (!tokens) {
            return undefined;
        }
        const caipTokens = {};
        Object.entries(tokens).forEach(([id, token]) => {
            caipTokens[`${ConstantsUtil$1.EIP155}:${id}`] = token;
        });
        return caipTokens;
    },
    isLowerCaseMatch(str1, str2) {
        return str1?.toLowerCase() === str2?.toLowerCase();
    },
    /**
     * Iterates the Auth connector supported chains and returns the namespace that is last connected to the active chain.
     * @returns ChainNamespace | undefined
     */
    getActiveNamespaceConnectedToAuth() {
        const activeChain = ChainController.state.activeChain;
        return ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(chain => ConnectorController.getConnectorId(chain) === ConstantsUtil$3.CONNECTOR_ID.AUTH &&
            chain === activeChain);
    },
    /**
     * Runs a condition function again and again until it returns true or the max number of tries is reached.
     *
     * @param conditionFn - A function (can be async) that returns true when the condition is met.
     * @param intervalMs - Time to wait between tries, in milliseconds.
     * @param maxRetries - Maximum number of times to try before stopping.
     * @returns A Promise that resolves to true if the condition becomes true in time, or false if it doesn't.
     */
    withRetry({ conditionFn, intervalMs, maxRetries }) {
        let attempts = 0;
        return new Promise(resolve => {
            async function tryCheck() {
                attempts += 1;
                const result = await conditionFn();
                if (result) {
                    return resolve(true);
                }
                if (attempts >= maxRetries) {
                    return resolve(false);
                }
                setTimeout(tryCheck, intervalMs);
                return null;
            }
            tryCheck();
        });
    },
    /**
     * Returns the chain namespace from user's chainId which is returned from Auth provider.
     * @param chainId - The chainId to parse.
     * @returns The chain namespace.
     */
    userChainIdToChainNamespace(chainId) {
        if (typeof chainId === 'number') {
            return ConstantsUtil$3.CHAIN.EVM;
        }
        const [namespace] = chainId.split(':');
        return namespace;
    },
    /**
     * Get all auth namespaces except the active one
     * @param activeNamespace - The active namespace
     * @returns All auth namespaces except the active one
     */
    getOtherAuthNamespaces(activeNamespace) {
        if (!activeNamespace) {
            return [];
        }
        const authNamespaces = ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS;
        const otherAuthNamespaces = authNamespaces.filter(ns => ns !== activeNamespace);
        return otherAuthNamespaces;
    },
    /**
     * Gets the storage info for a connector
     * @param connectorId - The ID of the connector
     * @param namespace - The namespace of the connector
     * @returns
     */
    getConnectorStorageInfo(connectorId, namespace) {
        const storageConnectionsByNamespace = StorageUtil.getConnections();
        const storageConnections = storageConnectionsByNamespace[namespace] ?? [];
        return {
            hasDisconnected: StorageUtil.isConnectorDisconnected(connectorId, namespace),
            hasConnected: storageConnections.some(c => HelpersUtil.isLowerCaseMatch(c.connectorId, connectorId))
        };
    }
};

const SemVerUtils = {
    extractVersion(version) {
        if (!version || typeof version !== 'string') {
            return null;
        }
        /*
         * Match semantic version patterns with optional pre-release suffixes and version range operators
         * Examples: 1.7.1, 1.7.1-canary.3, 1.7.1-beta.1, 1.7, 1, ^1.8.3, >=1.x.x, <=1.x.x, etc.
         */
        const versionRegex = /(?:[~^>=<]+\s*)?(?<version>\d+(?:\.\d+){0,2})(?:-[a-zA-Z]+\.\d+)?/u;
        const match = version.match(versionRegex);
        return match?.groups?.['version'] || null;
    },
    checkSDKVersion(version) {
        this.extractVersion(version);
        {
            return;
        }
    },
    isValidVersion(version) {
        return typeof version === 'string' && /^\d+\.\d+\.\d+$/u.test(version);
    },
    isOlder(currentVersion, latestVersion) {
        const currentVersionNumber = this.extractVersion(currentVersion);
        const latestVersionNumber = this.extractVersion(latestVersion);
        if (!currentVersionNumber || !latestVersionNumber) {
            return false;
        }
        // Normalize versions to ensure they have at least 3 parts
        function normalizeVersion(version) {
            const parts = version.split('.').map(Number);
            while (parts.length < 3) {
                parts.push(0);
            }
            return parts;
        }
        const current = normalizeVersion(currentVersionNumber);
        const latest = normalizeVersion(latestVersionNumber);
        for (let i = 0; i < Math.max(current.length, latest.length); i += 1) {
            const currentPart = current[i] || 0;
            const latestPart = latest[i] || 0;
            if (currentPart < latestPart) {
                return true;
            }
            else if (currentPart > latestPart) {
                return false;
            }
        }
        return false;
    }
};

const abortController = new AbortController();
const ErrorUtil = {
    EmbeddedWalletAbortController: abortController,
    /**
     * Universal Provider errors. Make sure the `message` is matching with the errors thrown by the Universal Provider.
     * We use the `alertErrorKey` to map the error to the correct AppKit alert error.
     */
    UniversalProviderErrors: {
        UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: 'Unauthorized: origin not allowed',
            alertErrorKey: 'ORIGIN_NOT_ALLOWED'
        },
        JWT_VALIDATION_ERROR: {
            message: 'JWT validation error: JWT Token is not yet valid',
            alertErrorKey: 'JWT_TOKEN_NOT_VALID'
        },
        INVALID_KEY: {
            message: 'Unauthorized: invalid key',
            alertErrorKey: 'INVALID_PROJECT_ID'
        }
    },
    ALERT_ERRORS: {
        SWITCH_NETWORK_NOT_FOUND: {
            code: 'APKT001',
            displayMessage: 'Network Not Found',
            debugMessage: 'The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration.'
        },
        ORIGIN_NOT_ALLOWED: {
            code: 'APKT002',
            displayMessage: 'Invalid App Configuration',
            debugMessage: () => `The origin ${isSafe() ? window.origin : 'unknown'} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com.`
        },
        IFRAME_LOAD_FAILED: {
            code: 'APKT003',
            displayMessage: 'Network Error: Wallet Load Failed',
            debugMessage: () => 'Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists.'
        },
        IFRAME_REQUEST_TIMEOUT: {
            code: 'APKT004',
            displayMessage: 'Wallet Request Timeout',
            debugMessage: () => 'The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists.'
        },
        UNVERIFIED_DOMAIN: {
            code: 'APKT005',
            displayMessage: 'Unverified Domain',
            debugMessage: () => 'Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com.'
        },
        JWT_TOKEN_NOT_VALID: {
            code: 'APKT006',
            displayMessage: 'Session Expired',
            debugMessage: 'Your session is invalid or expired. Please check your system’s date and time settings, then reconnect.'
        },
        INVALID_PROJECT_ID: {
            code: 'APKT007',
            displayMessage: 'Invalid Project ID',
            debugMessage: 'The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID.'
        },
        PROJECT_ID_NOT_CONFIGURED: {
            code: 'APKT008',
            displayMessage: 'Project ID Missing',
            debugMessage: 'No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com.'
        },
        SERVER_ERROR_APP_CONFIGURATION: {
            code: 'APKT009',
            displayMessage: 'Server Error',
            debugMessage: (errorMessage) => `Unable to fetch App Configuration. ${errorMessage}. Please check your network connection and try again shortly. Contact support if the issue persists.`
        },
        RATE_LIMITED_APP_CONFIGURATION: {
            code: 'APKT010',
            displayMessage: 'Rate Limited',
            debugMessage: 'You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists.'
        }
    },
    ALERT_WARNINGS: {
        LOCAL_CONFIGURATION_IGNORED: {
            debugMessage: (warningMessage) => `[Reown Config Notice] ${warningMessage}`
        },
        INACTIVE_NAMESPACE_NOT_CONNECTED: {
            code: 'APKTW001',
            displayMessage: 'Inactive Namespace Not Connected',
            debugMessage: (namespace, errorMessage) => `An error occurred while connecting an inactive namespace ${namespace}: "${errorMessage}"`
        },
        INVALID_EMAIL: {
            code: 'APKTW002',
            displayMessage: 'Invalid Email Address',
            debugMessage: 'Please enter a valid email address'
        }
    }
};

const TokenUtil = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
        USDC: {
            8453: baseUSDC.asset,
            84532: baseSepoliaUSDC.asset
        }
    },
    getTokenSymbolByAddress(tokenAddress) {
        if (!tokenAddress) {
            return undefined;
        }
        const [symbol] = Object.entries(TokenUtil.TOKEN_ADDRESSES_BY_SYMBOL).find(([_, addressesByChain]) => Object.values(addressesByChain).includes(tokenAddress)) ?? [];
        return symbol;
    }
};

var browser;
var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser;
	hasRequiredBrowser = 1;

	const format = requireQuickFormatUnescaped();

	browser = pino;

	const _console = pfGlobalThisOrFallback().console || {};
	const stdSerializers = {
	  mapHttpRequest: mock,
	  mapHttpResponse: mock,
	  wrapRequestSerializer: passthrough,
	  wrapResponseSerializer: passthrough,
	  wrapErrorSerializer: passthrough,
	  req: mock,
	  res: mock,
	  err: asErrValue
	};

	function shouldSerialize (serialize, serializers) {
	  if (Array.isArray(serialize)) {
	    const hasToFilter = serialize.filter(function (k) {
	      return k !== '!stdSerializers.err'
	    });
	    return hasToFilter
	  } else if (serialize === true) {
	    return Object.keys(serializers)
	  }

	  return false
	}

	function pino (opts) {
	  opts = opts || {};
	  opts.browser = opts.browser || {};

	  const transmit = opts.browser.transmit;
	  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

	  const proto = opts.browser.write || _console;
	  if (opts.browser.write) opts.browser.asObject = true;
	  const serializers = opts.serializers || {};
	  const serialize = shouldSerialize(opts.browser.serialize, serializers);
	  let stdErrSerialize = opts.browser.serialize;

	  if (
	    Array.isArray(opts.browser.serialize) &&
	    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
	  ) stdErrSerialize = false;

	  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'];

	  if (typeof proto === 'function') {
	    proto.error = proto.fatal = proto.warn =
	    proto.info = proto.debug = proto.trace = proto;
	  }
	  if (opts.enabled === false) opts.level = 'silent';
	  const level = opts.level || 'info';
	  const logger = Object.create(proto);
	  if (!logger.log) logger.log = noop;

	  Object.defineProperty(logger, 'levelVal', {
	    get: getLevelVal
	  });
	  Object.defineProperty(logger, 'level', {
	    get: getLevel,
	    set: setLevel
	  });

	  const setOpts = {
	    transmit,
	    serialize,
	    asObject: opts.browser.asObject,
	    levels,
	    timestamp: getTimeFunction(opts)
	  };
	  logger.levels = pino.levels;
	  logger.level = level;

	  logger.setMaxListeners = logger.getMaxListeners =
	  logger.emit = logger.addListener = logger.on =
	  logger.prependListener = logger.once =
	  logger.prependOnceListener = logger.removeListener =
	  logger.removeAllListeners = logger.listeners =
	  logger.listenerCount = logger.eventNames =
	  logger.write = logger.flush = noop;
	  logger.serializers = serializers;
	  logger._serialize = serialize;
	  logger._stdErrSerialize = stdErrSerialize;
	  logger.child = child;

	  if (transmit) logger._logEvent = createLogEventShape();

	  function getLevelVal () {
	    return this.level === 'silent'
	      ? Infinity
	      : this.levels.values[this.level]
	  }

	  function getLevel () {
	    return this._level
	  }
	  function setLevel (level) {
	    if (level !== 'silent' && !this.levels.values[level]) {
	      throw Error('unknown level ' + level)
	    }
	    this._level = level;

	    set(setOpts, logger, 'error', 'log'); // <-- must stay first
	    set(setOpts, logger, 'fatal', 'error');
	    set(setOpts, logger, 'warn', 'error');
	    set(setOpts, logger, 'info', 'log');
	    set(setOpts, logger, 'debug', 'log');
	    set(setOpts, logger, 'trace', 'log');
	  }

	  function child (bindings, childOptions) {
	    if (!bindings) {
	      throw new Error('missing bindings for child Pino')
	    }
	    childOptions = childOptions || {};
	    if (serialize && bindings.serializers) {
	      childOptions.serializers = bindings.serializers;
	    }
	    const childOptionsSerializers = childOptions.serializers;
	    if (serialize && childOptionsSerializers) {
	      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
	      var childSerialize = opts.browser.serialize === true
	        ? Object.keys(childSerializers)
	        : serialize;
	      delete bindings.serializers;
	      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
	    }
	    function Child (parent) {
	      this._childLevel = (parent._childLevel | 0) + 1;
	      this.error = bind(parent, bindings, 'error');
	      this.fatal = bind(parent, bindings, 'fatal');
	      this.warn = bind(parent, bindings, 'warn');
	      this.info = bind(parent, bindings, 'info');
	      this.debug = bind(parent, bindings, 'debug');
	      this.trace = bind(parent, bindings, 'trace');
	      if (childSerializers) {
	        this.serializers = childSerializers;
	        this._serialize = childSerialize;
	      }
	      if (transmit) {
	        this._logEvent = createLogEventShape(
	          [].concat(parent._logEvent.bindings, bindings)
	        );
	      }
	    }
	    Child.prototype = this;
	    return new Child(this)
	  }
	  return logger
	}

	pino.levels = {
	  values: {
	    fatal: 60,
	    error: 50,
	    warn: 40,
	    info: 30,
	    debug: 20,
	    trace: 10
	  },
	  labels: {
	    10: 'trace',
	    20: 'debug',
	    30: 'info',
	    40: 'warn',
	    50: 'error',
	    60: 'fatal'
	  }
	};

	pino.stdSerializers = stdSerializers;
	pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });

	function set (opts, logger, level, fallback) {
	  const proto = Object.getPrototypeOf(logger);
	  logger[level] = logger.levelVal > logger.levels.values[level]
	    ? noop
	    : (proto[level] ? proto[level] : (_console[level] || _console[fallback] || noop));

	  wrap(opts, logger, level);
	}

	function wrap (opts, logger, level) {
	  if (!opts.transmit && logger[level] === noop) return

	  logger[level] = (function (write) {
	    return function LOG () {
	      const ts = opts.timestamp();
	      const args = new Array(arguments.length);
	      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this;
	      for (var i = 0; i < args.length; i++) args[i] = arguments[i];

	      if (opts.serialize && !opts.asObject) {
	        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
	      }
	      if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
	      else write.apply(proto, args);

	      if (opts.transmit) {
	        const transmitLevel = opts.transmit.level || logger.level;
	        const transmitValue = pino.levels.values[transmitLevel];
	        const methodValue = pino.levels.values[level];
	        if (methodValue < transmitValue) return
	        transmit(this, {
	          ts,
	          methodLevel: level,
	          methodValue,
	          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
	          send: opts.transmit.send,
	          val: logger.levelVal
	        }, args);
	      }
	    }
	  })(logger[level]);
	}

	function asObject (logger, level, args, ts) {
	  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
	  const argsCloned = args.slice();
	  let msg = argsCloned[0];
	  const o = {};
	  if (ts) {
	    o.time = ts;
	  }
	  o.level = pino.levels.values[level];
	  let lvl = (logger._childLevel | 0) + 1;
	  if (lvl < 1) lvl = 1;
	  // deliberate, catching objects, arrays
	  if (msg !== null && typeof msg === 'object') {
	    while (lvl-- && typeof argsCloned[0] === 'object') {
	      Object.assign(o, argsCloned.shift());
	    }
	    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
	  } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
	  if (msg !== undefined) o.msg = msg;
	  return o
	}

	function applySerializers (args, serialize, serializers, stdErrSerialize) {
	  for (const i in args) {
	    if (stdErrSerialize && args[i] instanceof Error) {
	      args[i] = pino.stdSerializers.err(args[i]);
	    } else if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
	      for (const k in args[i]) {
	        if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
	          args[i][k] = serializers[k](args[i][k]);
	        }
	      }
	    }
	  }
	}

	function bind (parent, bindings, level) {
	  return function () {
	    const args = new Array(1 + arguments.length);
	    args[0] = bindings;
	    for (var i = 1; i < args.length; i++) {
	      args[i] = arguments[i - 1];
	    }
	    return parent[level].apply(this, args)
	  }
	}

	function transmit (logger, opts, args) {
	  const send = opts.send;
	  const ts = opts.ts;
	  const methodLevel = opts.methodLevel;
	  const methodValue = opts.methodValue;
	  const val = opts.val;
	  const bindings = logger._logEvent.bindings;

	  applySerializers(
	    args,
	    logger._serialize || Object.keys(logger.serializers),
	    logger.serializers,
	    logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
	  );
	  logger._logEvent.ts = ts;
	  logger._logEvent.messages = args.filter(function (arg) {
	    // bindings can only be objects, so reference equality check via indexOf is fine
	    return bindings.indexOf(arg) === -1
	  });

	  logger._logEvent.level.label = methodLevel;
	  logger._logEvent.level.value = methodValue;

	  send(methodLevel, logger._logEvent, val);

	  logger._logEvent = createLogEventShape(bindings);
	}

	function createLogEventShape (bindings) {
	  return {
	    ts: 0,
	    messages: [],
	    bindings: bindings || [],
	    level: { label: '', value: 0 }
	  }
	}

	function asErrValue (err) {
	  const obj = {
	    type: err.constructor.name,
	    msg: err.message,
	    stack: err.stack
	  };
	  for (const key in err) {
	    if (obj[key] === undefined) {
	      obj[key] = err[key];
	    }
	  }
	  return obj
	}

	function getTimeFunction (opts) {
	  if (typeof opts.timestamp === 'function') {
	    return opts.timestamp
	  }
	  if (opts.timestamp === false) {
	    return nullTime
	  }
	  return epochTime
	}

	function mock () { return {} }
	function passthrough (a) { return a }
	function noop () {}

	function nullTime () { return false }
	function epochTime () { return Date.now() }
	function unixTime () { return Math.round(Date.now() / 1000.0) }
	function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

	/* eslint-disable */
	/* istanbul ignore next */
	function pfGlobalThisOrFallback () {
	  function defd (o) { return typeof o !== 'undefined' && o }
	  try {
	    if (typeof globalThis !== 'undefined') return globalThis
	    Object.defineProperty(Object.prototype, 'globalThis', {
	      get: function () {
	        delete Object.prototype.globalThis;
	        return (this.globalThis = this)
	      },
	      configurable: true
	    });
	    return globalThis
	  } catch (e) {
	    return defd(self) || defd(window) || defd(this) || {}
	  }
	}
	/* eslint-enable */
	return browser;
}

var browserExports = requireBrowser();
const h$2 = /*@__PURE__*/getDefaultExportFromCjs(browserExports);

const c$3={level:"info"},l$2=1e3*1024;class O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null;}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}let d$2 = class d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0;}append(e){const t=new O(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size;}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size;}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return {next:()=>{if(!e)return {done:true,value:null};const t=e.value;return e=e.next,{done:false,value:t}}}}};let L$1 = class L{constructor(e,t=l$2){this.level=e??"error",this.levelValue=browserExports.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new d$2(this.MAX_LOG_SIZE_IN_BYTES);}forwardToConsole(e,t){t===browserExports.levels.values.error?console.error(e):t===browserExports.levels.values.warn?console.warn(e):t===browserExports.levels.values.debug?console.debug(e):t===browserExports.levels.values.trace?console.trace(e):console.log(e);}appendToLogs(e){this.logs.append(safeJsonStringify({timestamp:new Date().toISOString(),log:e}));const t=typeof e=="string"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t);}getLogs(){return this.logs}clearLogs(){this.logs=new d$2(this.MAX_LOG_SIZE_IN_BYTES);}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push(safeJsonStringify({extraMetadata:e})),new Blob(t,{type:"application/json"})}};let m$1 = class m{constructor(e,t=l$2){this.baseChunkLogger=new L$1(e,t);}write(e){this.baseChunkLogger.appendToLogs(e);}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs();}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t);}};let B$1 = class B{constructor(e,t=l$2){this.baseChunkLogger=new L$1(e,t);}write(e){this.baseChunkLogger.appendToLogs(e);}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs();}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}};var x$1=Object.defineProperty,S$2=Object.defineProperties,_$1=Object.getOwnPropertyDescriptors,p$2=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z$1=Object.prototype.propertyIsEnumerable,f$2=(r,e,t)=>e in r?x$1(r,e,{enumerable:true,configurable:true,writable:true,value:t}):r[e]=t,i$4=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&f$2(r,t,e[t]);if(p$2)for(var t of p$2(e))z$1.call(e,t)&&f$2(r,t,e[t]);return r},g$1=(r,e)=>S$2(r,_$1(e));function k$1(r){return g$1(i$4({},r),{level:r?.level||c$3.level})}function C$1(r){var e,t;const o=new m$1((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return {logger:h$2(g$1(i$4({},r.opts),{level:"trace",browser:g$1(i$4({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I$1(r){var e;const t=new B$1((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return {logger:h$2(g$1(i$4({},r.opts),{level:"trace"}),t),chunkLoggerController:t}}function A$1(r){return typeof r.loggerOverride<"u"&&typeof r.loggerOverride!="string"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<"u"?C$1(r):I$1(r)}

const LoggerUtil = {
    createLogger(onError, level = 'error') {
        const loggerOptions = k$1({
            level
        });
        const { logger } = A$1({
            opts: loggerOptions
        });
        logger.error = (...args) => {
            for (const arg of args) {
                if (arg instanceof Error) {
                    onError(arg, ...args);
                    return;
                }
            }
            onError(undefined, ...args);
        };
        return logger;
    }
};

const RPC_URL_HOST = 'rpc.walletconnect.org';
function getBlockchainApiRpcUrl(caipNetworkId, projectId) {
    const url = new URL('https://rpc.walletconnect.org/v1/');
    url.searchParams.set('chainId', caipNetworkId);
    url.searchParams.set('projectId', projectId);
    return url.toString();
}
const WC_HTTP_RPC_SUPPORTED_CHAINS = [
    'near:mainnet',
    'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    'eip155:1101',
    'eip155:56',
    'eip155:42161',
    'eip155:7777777',
    'eip155:59144',
    'eip155:324',
    'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    'eip155:5000',
    'solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz',
    'eip155:80084',
    'eip155:5003',
    'eip155:100',
    'eip155:8453',
    'eip155:42220',
    'eip155:1313161555',
    'eip155:17000',
    'eip155:1',
    'eip155:300',
    'eip155:1313161554',
    'eip155:1329',
    'eip155:84532',
    'eip155:421614',
    'eip155:11155111',
    'eip155:8217',
    'eip155:43114',
    'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    'eip155:999999999',
    'eip155:11155420',
    'eip155:80002',
    'eip155:97',
    'eip155:43113',
    'eip155:137',
    'eip155:10',
    'eip155:1301',
    'eip155:80094',
    'eip155:80069',
    'eip155:560048',
    'eip155:31',
    'eip155:2818',
    'eip155:57054',
    'eip155:911867',
    'eip155:534351',
    'eip155:1112',
    'eip155:534352',
    'eip155:1111',
    'eip155:146',
    'eip155:130',
    'eip155:1284',
    'eip155:30',
    'eip155:2810',
    'bip122:000000000019d6689c085ae165831e93',
    'bip122:000000000933ea01ad0ee984209779ba'
];
const CaipNetworksUtil = {
    /**
     * Extends the RPC URL with the project ID if the RPC URL is a Reown URL
     * @param rpcUrl - The RPC URL to extend
     * @param projectId - The project ID to extend the RPC URL with
     * @returns The extended RPC URL
     */
    extendRpcUrlWithProjectId(rpcUrl, projectId) {
        let isReownUrl = false;
        try {
            const url = new URL(rpcUrl);
            isReownUrl = url.host === RPC_URL_HOST;
        }
        catch (e) {
            isReownUrl = false;
        }
        if (isReownUrl) {
            const url = new URL(rpcUrl);
            if (!url.searchParams.has('projectId')) {
                url.searchParams.set('projectId', projectId);
            }
            return url.toString();
        }
        return rpcUrl;
    },
    isCaipNetwork(network) {
        return 'chainNamespace' in network && 'caipNetworkId' in network;
    },
    getChainNamespace(network) {
        if (this.isCaipNetwork(network)) {
            return network.chainNamespace;
        }
        return ConstantsUtil$3.CHAIN.EVM;
    },
    getCaipNetworkId(network) {
        if (this.isCaipNetwork(network)) {
            return network.caipNetworkId;
        }
        return `${ConstantsUtil$3.CHAIN.EVM}:${network.id}`;
    },
    // eslint-disable-next-line max-params
    getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId) {
        const defaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetworkId)) {
            return getBlockchainApiRpcUrl(caipNetworkId, projectId);
        }
        return defaultRpcUrl || '';
    },
    /**
     * Extends the CaipNetwork object with the image ID and image URL if the image ID is not provided
     * @param params - The parameters object
     * @param params.caipNetwork - The CaipNetwork object to extend
     * @param params.networkImageIds - The network image IDs
     * @param params.customNetworkImageUrls - The custom network image URLs
     * @param params.projectId - The project ID
     * @param params.customRpc - Boolean to indicate if the custom RPC URL should be used
     * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
     * @returns The extended array of CaipNetwork objects
     */
    extendCaipNetwork(caipNetwork, { customNetworkImageUrls, projectId, customRpcUrls }) {
        const chainNamespace = this.getChainNamespace(caipNetwork);
        const caipNetworkId = this.getCaipNetworkId(caipNetwork);
        const networkDefaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
        const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId);
        const chainDefaultRpcUrl = caipNetwork?.rpcUrls?.['chainDefault']?.http?.[0] || networkDefaultRpcUrl;
        const customRpcUrlsOfNetwork = customRpcUrls?.[caipNetworkId]?.map(i => i.url) || [];
        const rpcUrls = [...customRpcUrlsOfNetwork, ...(reownRpcUrl ? [reownRpcUrl] : [])];
        const rpcUrlsWithoutReown = [...customRpcUrlsOfNetwork];
        if (chainDefaultRpcUrl && !rpcUrlsWithoutReown.includes(chainDefaultRpcUrl)) {
            rpcUrlsWithoutReown.push(chainDefaultRpcUrl);
        }
        return {
            ...caipNetwork,
            chainNamespace,
            caipNetworkId,
            assets: {
                imageId: PresetsUtil.NetworkImageIds[caipNetwork.id],
                imageUrl: customNetworkImageUrls?.[caipNetwork.id]
            },
            rpcUrls: {
                ...caipNetwork.rpcUrls,
                default: {
                    http: rpcUrls
                },
                // Save the networks original RPC URL default
                chainDefault: {
                    http: rpcUrlsWithoutReown
                }
            }
        };
    },
    /**
     * Extends the array of CaipNetwork objects with the image ID and image URL if the image ID is not provided
     * @param caipNetworks - The array of CaipNetwork objects to extend
     * @param params - The parameters object
     * @param params.networkImageIds - The network image IDs
     * @param params.customNetworkImageUrls - The custom network image URLs
     * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
     * @param params.projectId - The project ID
     * @returns The extended array of CaipNetwork objects
     */
    extendCaipNetworks(caipNetworks, { customNetworkImageUrls, projectId, customRpcUrls }) {
        return caipNetworks.map(caipNetwork => CaipNetworksUtil.extendCaipNetwork(caipNetwork, {
            customNetworkImageUrls,
            customRpcUrls,
            projectId
        }));
    },
    getViemTransport(caipNetwork, projectId, customRpcUrls) {
        const transports = [];
        // Add custom RPC URLs
        customRpcUrls?.forEach(rpcUrl => {
            transports.push(http(rpcUrl.url, rpcUrl.config));
        });
        // Add Reown RPC URL
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            transports.push(http(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), {
                /*
                 * The Blockchain API uses "Content-Type: text/plain" to avoid OPTIONS preflight requests
                 * It will only work for viem >= 2.17.7
                 */
                fetchOptions: {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }
            }));
        }
        // Add original fallback transports
        caipNetwork?.rpcUrls?.default?.http?.forEach(rpcUrl => {
            transports.push(http(rpcUrl));
        });
        return fallback(transports);
    },
    extendWagmiTransports(caipNetwork, projectId, transport) {
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetwork.caipNetworkId, projectId);
            return fallback([transport, http(reownRpcUrl)]);
        }
        return transport;
    },
    /**
     * Generates the unsupported network object with the given CaipNetwork ID
     * @param caipNetworkId - The CAIP network ID
     * @returns The unsupported CAIP network object
     */
    getUnsupportedNetwork(caipNetworkId) {
        return {
            id: caipNetworkId.split(':')[1],
            caipNetworkId,
            name: ConstantsUtil$3.UNSUPPORTED_NETWORK_NAME,
            chainNamespace: caipNetworkId.split(':')[0],
            nativeCurrency: {
                name: '',
                decimals: 0,
                symbol: ''
            },
            rpcUrls: {
                default: {
                    http: []
                }
            }
        };
    },
    /**
     * Gets the CaipNetwork object from the storage if `@appkit/active_caip_network_id` is being set
     * @returns CaipNetwork or undefined
     */
    getCaipNetworkFromStorage(defaultCaipNetwork) {
        const caipNetworkIdFromStorage = StorageUtil.getActiveCaipNetworkId();
        const caipNetworks = ChainController.getAllRequestedCaipNetworks();
        const availableNamespaces = Array.from(ChainController.state.chains?.keys() || []);
        const namespace = caipNetworkIdFromStorage?.split(':')[0];
        const isNamespaceAvailable = namespace ? availableNamespaces.includes(namespace) : false;
        const caipNetwork = caipNetworks?.find(cn => cn.caipNetworkId === caipNetworkIdFromStorage);
        const isUnsupportedNetwork = isNamespaceAvailable && !caipNetwork && caipNetworkIdFromStorage;
        if (isUnsupportedNetwork) {
            return this.getUnsupportedNetwork(caipNetworkIdFromStorage);
        }
        if (caipNetwork) {
            return caipNetwork;
        }
        if (defaultCaipNetwork) {
            return defaultCaipNetwork;
        }
        return caipNetworks?.[0];
    }
};

const ConstantsUtil = {
  ACCOUNT_TABS: [{ label: "Tokens" }, { label: "Activity" }],
  VIEW_DIRECTION: {
    Next: "next",
    Prev: "prev"
  },
  DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
  ANIMATION_DURATIONS: {
    HeaderText: 120},
  VIEWS_WITH_LEGAL_FOOTER: [
    "Connect",
    "ConnectWallets",
    "OnRampTokenSelect",
    "OnRampFiatSelect",
    "OnRampProviders"
  ],
  VIEWS_WITH_DEFAULT_FOOTER: ["Networks"]
};

const WalletUtil = {
    filterOutDuplicatesByRDNS(wallets) {
        const connectors = OptionsController.state.enableEIP6963
            ? ConnectorController.state.connectors
            : [];
        const recent = StorageUtil.getRecentWallets();
        const connectorRDNSs = connectors
            .map(connector => connector.info?.rdns)
            .filter(Boolean);
        const recentRDNSs = recent.map(wallet => wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && CoreHelperUtil.isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter(wallet => {
            if (wallet?.rdns && allRDNSs.includes(String(wallet.rdns))) {
                return false;
            }
            if (!wallet?.rdns) {
                const hasMatchingConnectorName = connectors.some(connector => connector.name === wallet.name);
                if (hasMatchingConnectorName) {
                    return false;
                }
            }
            return true;
        });
        return filtered;
    },
    filterOutDuplicatesByIds(wallets) {
        const connectors = ConnectorController.state.connectors.filter(connector => connector.type === 'ANNOUNCED' || connector.type === 'INJECTED');
        const recent = StorageUtil.getRecentWallets();
        const connectorIds = connectors.map(connector => connector.explorerId);
        const recentIds = recent.map(wallet => wallet.id);
        const allIds = connectorIds.concat(recentIds);
        const filtered = wallets.filter(wallet => !allIds.includes(wallet?.id));
        return filtered;
    },
    filterOutDuplicateWallets(wallets) {
        const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
        const uniqueWallets = this.filterOutDuplicatesByIds(uniqueByRDNS);
        return uniqueWallets;
    },
    markWalletsAsInstalled(wallets) {
        const { connectors } = ConnectorController.state;
        const { featuredWalletIds } = OptionsController.state;
        const installedWalletRdnsMap = connectors
            .filter(connector => connector.type === 'ANNOUNCED')
            .reduce((rdnsMap, connector) => {
            if (!connector.info?.rdns) {
                return rdnsMap;
            }
            rdnsMap[connector.info.rdns] = true;
            return rdnsMap;
        }, {});
        const walletsWithInstallationStatus = wallets.map(wallet => ({
            ...wallet,
            installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[wallet.rdns ?? ''])
        }));
        const sortedWallets = walletsWithInstallationStatus.sort((walletA, walletB) => {
            const installationComparison = Number(walletB.installed) - Number(walletA.installed);
            if (installationComparison !== 0) {
                return installationComparison;
            }
            if (featuredWalletIds?.length) {
                const walletAFeaturedIndex = featuredWalletIds.indexOf(walletA.id);
                const walletBFeaturedIndex = featuredWalletIds.indexOf(walletB.id);
                if (walletAFeaturedIndex !== -1 && walletBFeaturedIndex !== -1) {
                    return walletAFeaturedIndex - walletBFeaturedIndex;
                }
                if (walletAFeaturedIndex !== -1) {
                    return -1;
                }
                if (walletBFeaturedIndex !== -1) {
                    return 1;
                }
            }
            return 0;
        });
        return sortedWallets;
    },
    getConnectOrderMethod(_features, _connectors) {
        const connectMethodOrder = _features?.connectMethodsOrder || OptionsController.state.features?.connectMethodsOrder;
        const connectors = _connectors || ConnectorController.state.connectors;
        if (connectMethodOrder) {
            return connectMethodOrder;
        }
        const { injected, announced } = ConnectorUtil.getConnectorsByType(connectors, ApiController.state.recommended, ApiController.state.featured);
        const shownInjected = injected.filter(ConnectorUtil.showConnector);
        const shownAnnounced = announced.filter(ConnectorUtil.showConnector);
        if (shownInjected.length || shownAnnounced.length) {
            return ['wallet', 'email', 'social'];
        }
        return ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(wallet) {
        const isRDNSExcluded = Boolean(wallet.rdns) && ApiController.state.excludedWallets.some(w => w.rdns === wallet.rdns);
        const isNameExcluded = Boolean(wallet.name) &&
            ApiController.state.excludedWallets.some(w => HelpersUtil.isLowerCaseMatch(w.name, wallet.name));
        return isRDNSExcluded || isNameExcluded;
    },
    markWalletsWithDisplayIndex(wallets) {
        return wallets.map((w, index) => ({ ...w, display_index: index }));
    }
};

const ConnectorUtil = {
    getConnectorsByType(connectors, recommended, featured) {
        const { customWallets } = OptionsController.state;
        const recent = StorageUtil.getRecentWallets();
        const filteredRecommended = WalletUtil.filterOutDuplicateWallets(recommended);
        const filteredFeatured = WalletUtil.filterOutDuplicateWallets(featured);
        const multiChain = connectors.filter(connector => connector.type === 'MULTI_CHAIN');
        const announced = connectors.filter(connector => connector.type === 'ANNOUNCED');
        const injected = connectors.filter(connector => connector.type === 'INJECTED');
        const external = connectors.filter(connector => connector.type === 'EXTERNAL');
        return {
            custom: customWallets,
            recent,
            external,
            multiChain,
            announced,
            injected,
            recommended: filteredRecommended,
            featured: filteredFeatured
        };
    },
    showConnector(connector) {
        const rdns = connector.info?.rdns;
        const isRDNSExcluded = Boolean(rdns) &&
            ApiController.state.excludedWallets.some(wallet => Boolean(wallet.rdns) && wallet.rdns === rdns);
        const isNameExcluded = Boolean(connector.name) &&
            ApiController.state.excludedWallets.some(wallet => HelpersUtil.isLowerCaseMatch(wallet.name, connector.name));
        if (connector.type === 'INJECTED') {
            const isBrowserWallet = connector.name === 'Browser Wallet';
            if (isBrowserWallet) {
                if (!CoreHelperUtil.isMobile()) {
                    return false;
                }
                if (CoreHelperUtil.isMobile() && !rdns && !ConnectionController.checkInstalled()) {
                    return false;
                }
            }
            if (isRDNSExcluded || isNameExcluded) {
                return false;
            }
        }
        if ((connector.type === 'ANNOUNCED' || connector.type === 'EXTERNAL') &&
            (isRDNSExcluded || isNameExcluded)) {
            return false;
        }
        return true;
    },
    getIsConnectedWithWC() {
        const chains = Array.from(ChainController.state.chains.values());
        const isConnectedWithWC = chains.some(chain => {
            const connectorId = ConnectorController.getConnectorId(chain.namespace);
            return connectorId === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
        });
        return isConnectedWithWC;
    },
    getConnectorTypeOrder({ recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = OptionsController.state.features?.connectorTypeOrder ?? [] }) {
        const allConnectors = [
            { type: 'walletConnect', isEnabled: true },
            { type: 'recent', isEnabled: recent.length > 0 },
            { type: 'injected', isEnabled: [...injected, ...announced, ...multiChain].length > 0 },
            { type: 'featured', isEnabled: featured.length > 0 },
            { type: 'custom', isEnabled: custom && custom.length > 0 },
            { type: 'external', isEnabled: external.length > 0 },
            { type: 'recommended', isEnabled: recommended.length > 0 }
        ];
        const enabledConnectors = allConnectors.filter(option => option.isEnabled);
        const enabledConnectorTypes = new Set(enabledConnectors.map(option => option.type));
        const prioritizedConnectors = overriddenConnectors
            .filter(type => enabledConnectorTypes.has(type))
            .map(type => ({ type, isEnabled: true }));
        const remainingConnectors = enabledConnectors.filter(({ type: enabledConnectorType }) => {
            const hasPrioritizedConnector = prioritizedConnectors.some(({ type: prioritizedConnectorType }) => prioritizedConnectorType === enabledConnectorType);
            return !hasPrioritizedConnector;
        });
        return Array.from(new Set([...prioritizedConnectors, ...remainingConnectors].map(({ type }) => type)));
    },
    sortConnectorsByExplorerWallet(connectors) {
        return [...connectors].sort((a, b) => {
            if (a.explorerWallet && b.explorerWallet) {
                return (a.explorerWallet.order ?? 0) - (b.explorerWallet.order ?? 0);
            }
            if (a.explorerWallet) {
                return -1;
            }
            if (b.explorerWallet) {
                return 1;
            }
            return 0;
        });
    },
    getAuthName({ email, socialUsername, socialProvider }) {
        if (socialUsername) {
            if (socialProvider && socialProvider === 'discord' && socialUsername.endsWith('0')) {
                return socialUsername.slice(0, -1);
            }
            return socialUsername;
        }
        return email.length > 30 ? `${email.slice(0, -3)}...` : email;
    },
    async fetchProviderData(connector) {
        try {
            if (connector.name === 'Browser Wallet' && !CoreHelperUtil.isMobile()) {
                return { accounts: [], chainId: undefined };
            }
            if (connector.id === ConstantsUtil$3.CONNECTOR_ID.AUTH) {
                return { accounts: [], chainId: undefined };
            }
            const [accounts, chainId] = await Promise.all([
                connector.provider?.request({ method: 'eth_accounts' }),
                connector.provider
                    ?.request({ method: 'eth_chainId' })
                    .then(hexChainId => Number(hexChainId))
            ]);
            return { accounts, chainId };
        }
        catch (err) {
            console.warn(`Failed to fetch provider data for ${connector.name}`, err);
            return { accounts: [], chainId: undefined };
        }
    },
    getFilteredCustomWallets(wallets) {
        const recent = StorageUtil.getRecentWallets();
        const connectorRDNSs = ConnectorController.state.connectors
            .map(connector => connector.info?.rdns)
            .filter(Boolean);
        const recentRDNSs = recent.map(wallet => wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && CoreHelperUtil.isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter(wallet => !allRDNSs.includes(String(wallet?.rdns)));
        return filtered;
    },
    hasWalletConnector(wallet) {
        return ConnectorController.state.connectors.some(connector => connector.id === wallet.id || connector.name === wallet.name);
    },
    isWalletCompatibleWithCurrentChain(wallet) {
        const currentNamespace = ChainController.state.activeChain;
        if (currentNamespace && wallet.chains) {
            return wallet.chains.some(c => {
                const chainNamespace = c.split(':')[0];
                return currentNamespace === chainNamespace;
            });
        }
        return true;
    },
    getFilteredRecentWallets() {
        const recentWallets = StorageUtil.getRecentWallets();
        const filteredRecentWallets = recentWallets
            .filter(wallet => !WalletUtil.isExcluded(wallet))
            .filter(wallet => !this.hasWalletConnector(wallet))
            .filter(wallet => this.isWalletCompatibleWithCurrentChain(wallet));
        return filteredRecentWallets;
    },
    getCappedRecommendedWallets(wallets) {
        const { connectors } = ConnectorController.state;
        const { customWallets, featuredWalletIds } = OptionsController.state;
        const wcConnector = connectors.find(c => c.id === 'walletConnect');
        const injectedConnectors = connectors.filter(c => c.type === 'INJECTED' || c.type === 'ANNOUNCED' || c.type === 'MULTI_CHAIN');
        if (!wcConnector && !injectedConnectors.length && !customWallets?.length) {
            return [];
        }
        const isEmailEnabled = OptionsUtil.isEmailEnabled();
        const isSocialsEnabled = OptionsUtil.isSocialsEnabled();
        const injectedWallets = injectedConnectors.filter(i => i.name !== 'Browser Wallet');
        const featuredWalletAmount = featuredWalletIds?.length || 0;
        const customWalletAmount = customWallets?.length || 0;
        const injectedWalletAmount = injectedWallets.length || 0;
        const emailWalletAmount = isEmailEnabled ? 1 : 0;
        const socialWalletAmount = isSocialsEnabled ? 1 : 0;
        const walletsDisplayed = featuredWalletAmount +
            customWalletAmount +
            injectedWalletAmount +
            emailWalletAmount +
            socialWalletAmount;
        const DISPLAYED_WALLETS_AMOUNT = 4;
        const sliceAmount = Math.max(0, DISPLAYED_WALLETS_AMOUNT - walletsDisplayed);
        if (sliceAmount <= 0) {
            return [];
        }
        const filtered = WalletUtil.filterOutDuplicateWallets(wallets);
        return filtered.slice(0, sliceAmount);
    }
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),w=x(2),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

const colors = {
    black: '#202020',
    white: '#FFFFFF',
    white010: 'rgba(255, 255, 255, 0.1)',
    accent010: 'rgba(9, 136, 240, 0.1)',
    accent020: 'rgba(9, 136, 240, 0.2)',
    accent030: 'rgba(9, 136, 240, 0.3)',
    accent040: 'rgba(9, 136, 240, 0.4)',
    accent050: 'rgba(9, 136, 240, 0.5)',
    accent060: 'rgba(9, 136, 240, 0.6)',
    accent070: 'rgba(9, 136, 240, 0.7)',
    accent080: 'rgba(9, 136, 240, 0.8)',
    accent090: 'rgba(9, 136, 240, 0.9)',
    accent100: 'rgba(9, 136, 240, 1.0)',
    accentSecondary010: 'rgba(199, 185, 148, 0.1)',
    accentSecondary020: 'rgba(199, 185, 148, 0.2)',
    accentSecondary030: 'rgba(199, 185, 148, 0.3)',
    accentSecondary040: 'rgba(199, 185, 148, 0.4)',
    accentSecondary050: 'rgba(199, 185, 148, 0.5)',
    accentSecondary060: 'rgba(199, 185, 148, 0.6)',
    accentSecondary070: 'rgba(199, 185, 148, 0.7)',
    accentSecondary080: 'rgba(199, 185, 148, 0.8)',
    accentSecondary090: 'rgba(199, 185, 148, 0.9)',
    accentSecondary100: 'rgba(199, 185, 148, 1.0)',
    productWalletKit: '#FFB800',
    productAppKit: '#FF573B',
    productCloud: '#0988F0',
    productDocumentation: '#008847',
    neutrals050: '#F6F6F6',
    neutrals100: '#F3F3F3',
    neutrals200: '#E9E9E9',
    neutrals300: '#D0D0D0',
    neutrals400: '#BBB',
    neutrals500: '#9A9A9A',
    neutrals600: '#6C6C6C',
    neutrals700: '#4F4F4F',
    neutrals800: '#363636',
    neutrals900: '#2A2A2A',
    neutrals1000: '#252525',
    semanticSuccess010: 'rgba(48, 164, 107, 0.1)',
    semanticSuccess020: 'rgba(48, 164, 107, 0.2)',
    semanticSuccess030: 'rgba(48, 164, 107, 0.3)',
    semanticSuccess040: 'rgba(48, 164, 107, 0.4)',
    semanticSuccess050: 'rgba(48, 164, 107, 0.5)',
    semanticSuccess060: 'rgba(48, 164, 107, 0.6)',
    semanticSuccess070: 'rgba(48, 164, 107, 0.7)',
    semanticSuccess080: 'rgba(48, 164, 107, 0.8)',
    semanticSuccess090: 'rgba(48, 164, 107, 0.9)',
    semanticSuccess100: 'rgba(48, 164, 107, 1.0)',
    semanticError010: 'rgba(223, 74, 52, 0.1)',
    semanticError020: 'rgba(223, 74, 52, 0.2)',
    semanticError030: 'rgba(223, 74, 52, 0.3)',
    semanticError040: 'rgba(223, 74, 52, 0.4)',
    semanticError050: 'rgba(223, 74, 52, 0.5)',
    semanticError060: 'rgba(223, 74, 52, 0.6)',
    semanticError070: 'rgba(223, 74, 52, 0.7)',
    semanticError080: 'rgba(223, 74, 52, 0.8)',
    semanticError090: 'rgba(223, 74, 52, 0.9)',
    semanticError100: 'rgba(223, 74, 52, 1.0)',
    semanticWarning010: 'rgba(243, 161, 63, 0.1)',
    semanticWarning020: 'rgba(243, 161, 63, 0.2)',
    semanticWarning030: 'rgba(243, 161, 63, 0.3)',
    semanticWarning040: 'rgba(243, 161, 63, 0.4)',
    semanticWarning050: 'rgba(243, 161, 63, 0.5)',
    semanticWarning060: 'rgba(243, 161, 63, 0.6)',
    semanticWarning070: 'rgba(243, 161, 63, 0.7)',
    semanticWarning080: 'rgba(243, 161, 63, 0.8)',
    semanticWarning090: 'rgba(243, 161, 63, 0.9)',
    semanticWarning100: 'rgba(243, 161, 63, 1.0)'
};
const tokens = {
    core: {
        backgroundAccentPrimary: '#0988F0',
        backgroundAccentCertified: '#C7B994',
        backgroundWalletKit: '#FFB800',
        backgroundAppKit: '#FF573B',
        backgroundCloud: '#0988F0',
        backgroundDocumentation: '#008847',
        backgroundSuccess: 'rgba(48, 164, 107, 0.20)',
        backgroundError: 'rgba(223, 74, 52, 0.20)',
        backgroundWarning: 'rgba(243, 161, 63, 0.20)',
        textAccentPrimary: '#0988F0',
        textAccentCertified: '#C7B994',
        textWalletKit: '#FFB800',
        textAppKit: '#FF573B',
        textCloud: '#0988F0',
        textDocumentation: '#008847',
        textSuccess: '#30A46B',
        textError: '#DF4A34',
        textWarning: '#F3A13F',
        borderAccentPrimary: '#0988F0',
        borderSecondary: '#C7B994',
        borderSuccess: '#30A46B',
        borderError: '#DF4A34',
        borderWarning: '#F3A13F',
        foregroundAccent010: 'rgba(9, 136, 240, 0.1)',
        foregroundAccent020: 'rgba(9, 136, 240, 0.2)',
        foregroundAccent040: 'rgba(9, 136, 240, 0.4)',
        foregroundAccent060: 'rgba(9, 136, 240, 0.6)',
        foregroundSecondary020: 'rgba(199, 185, 148, 0.2)',
        foregroundSecondary040: 'rgba(199, 185, 148, 0.4)',
        foregroundSecondary060: 'rgba(199, 185, 148, 0.6)',
        iconAccentPrimary: '#0988F0',
        iconAccentCertified: '#C7B994',
        iconSuccess: '#30A46B',
        iconError: '#DF4A34',
        iconWarning: '#F3A13F',
        glass010: 'rgba(255, 255, 255, 0.1)',
        zIndex: '9999'
    },
    dark: {
        overlay: 'rgba(0, 0, 0, 0.50)',
        backgroundPrimary: '#202020',
        backgroundInvert: '#FFFFFF',
        textPrimary: '#FFFFFF',
        textSecondary: '#9A9A9A',
        textTertiary: '#BBBBBB',
        textInvert: '#202020',
        borderPrimary: '#2A2A2A',
        borderPrimaryDark: '#363636',
        borderSecondary: '#4F4F4F',
        foregroundPrimary: '#252525',
        foregroundSecondary: '#2A2A2A',
        foregroundTertiary: '#363636',
        iconDefault: '#9A9A9A',
        iconInverse: '#FFFFFF'
    },
    light: {
        overlay: 'rgba(230 , 230, 230, 0.5)',
        backgroundPrimary: '#FFFFFF',
        borderPrimaryDark: '#E9E9E9',
        backgroundInvert: '#202020',
        textPrimary: '#202020',
        textSecondary: '#9A9A9A',
        textTertiary: '#6C6C6C',
        textInvert: '#FFFFFF',
        borderPrimary: '#E9E9E9',
        borderSecondary: '#D0D0D0',
        foregroundPrimary: '#F3F3F3',
        foregroundSecondary: '#E9E9E9',
        foregroundTertiary: '#D0D0D0',
        iconDefault: '#9A9A9A',
        iconInverse: '#202020'
    }
};
const borderRadius = {
    '1': '4px',
    '2': '8px',
    '10': '10px',
    '3': '12px',
    '4': '16px',
    '6': '24px',
    '5': '20px',
    '8': '32px',
    '16': '64px',
    '20': '80px',
    '32': '128px',
    '64': '256px',
    '128': '512px',
    round: '9999px'
};
const spacing = {
    '0': '0px',
    '01': '2px',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
    '12': '48px',
    '14': '56px',
    '16': '64px',
    '20': '80px',
    '32': '128px',
    '64': '256px'
};
const fontFamily = {
    regular: 'KHTeka',
    mono: 'KHTekaMono'
};
const fontWeight = {
    regular: '400',
    medium: '500'
};
const textSize = {
    h1: '50px',
    h2: '44px',
    h3: '38px',
    h4: '32px',
    h5: '26px',
    h6: '20px',
    large: '16px',
    medium: '14px',
    small: '12px'
};
const typography = {
    'h1-regular-mono': { lineHeight: '50px', letterSpacing: '-3px' },
    'h1-regular': { lineHeight: '50px', letterSpacing: '-1px' },
    'h1-medium': { lineHeight: '50px', letterSpacing: '-0.84px' },
    'h2-regular-mono': { lineHeight: '44px', letterSpacing: '-2.64px' },
    'h2-regular': { lineHeight: '44px', letterSpacing: '-0.88px' },
    'h2-medium': { lineHeight: '44px', letterSpacing: '-0.88px' },
    'h3-regular-mono': { lineHeight: '38px', letterSpacing: '-2.28px' },
    'h3-regular': { lineHeight: '38px', letterSpacing: '-0.76px' },
    'h3-medium': { lineHeight: '38px', letterSpacing: '-0.76px' },
    'h4-regular-mono': { lineHeight: '32px', letterSpacing: '-1.92px' },
    'h4-regular': { lineHeight: '32px', letterSpacing: '-0.32px' },
    'h4-medium': { lineHeight: '32px', letterSpacing: '-0.32px' },
    'h5-regular-mono': { lineHeight: '26px', letterSpacing: '-1.56px' },
    'h5-regular': { lineHeight: '26px', letterSpacing: '-0.26px' },
    'h5-medium': { lineHeight: '26px', letterSpacing: '-0.26px' },
    'h6-regular-mono': { lineHeight: '20px', letterSpacing: '-1.2px' },
    'h6-regular': { lineHeight: '20px', letterSpacing: '-0.6px' },
    'h6-medium': { lineHeight: '20px', letterSpacing: '-0.6px' },
    'lg-regular-mono': { lineHeight: '16px', letterSpacing: '-0.96px' },
    'lg-regular': { lineHeight: '18px', letterSpacing: '-0.16px' },
    'lg-medium': { lineHeight: '18px', letterSpacing: '-0.16px' },
    'md-regular-mono': { lineHeight: '14px', letterSpacing: '-0.84px' },
    'md-regular': { lineHeight: '16px', letterSpacing: '-0.14px' },
    'md-medium': { lineHeight: '16px', letterSpacing: '-0.14px' },
    'sm-regular-mono': { lineHeight: '12px', letterSpacing: '-0.72px' },
    'sm-regular': { lineHeight: '14px', letterSpacing: '-0.12px' },
    'sm-medium': { lineHeight: '14px', letterSpacing: '-0.12px' }
};
const easings = {
    'ease-out-power-2': 'cubic-bezier(0.23, 0.09, 0.08, 1.13)',
    'ease-out-power-1': 'cubic-bezier(0.12, 0.04, 0.2, 1.06)',
    'ease-in-power-2': 'cubic-bezier(0.92, -0.13, 0.77, 0.91)',
    'ease-in-power-1': 'cubic-bezier(0.88, -0.06, 0.8, 0.96)',
    'ease-inout-power-2': 'cubic-bezier(0.77, 0.09, 0.23, 1.13)',
    'ease-inout-power-1': 'cubic-bezier(0.88, 0.04, 0.12, 1.06)'
};
const durations = {
    xl: '400ms',
    lg: '200ms',
    md: '125ms',
    sm: '75ms'
};
const styles = {
    colors,
    fontFamily,
    fontWeight,
    textSize,
    typography,
    tokens: {
        core: tokens.core,
        theme: tokens.dark
    },
    borderRadius,
    spacing,
    durations,
    easings
};

const PREFIX_VAR = '--apkt';
const ThemeHelperUtil = {
    createCSSVariables(styles) {
        const cssVariables = {};
        const cssVariablesVarPrefix = {};
        function createVars(_styles, parent, currentVar = '') {
            for (const [styleKey, styleValue] of Object.entries(_styles)) {
                const variable = currentVar ? `${currentVar}-${styleKey}` : styleKey;
                if (styleValue && typeof styleValue === 'object' && Object.keys(styleValue).length) {
                    parent[styleKey] = {};
                    createVars(styleValue, parent[styleKey], variable);
                }
                else if (typeof styleValue === 'string') {
                    parent[styleKey] = `${PREFIX_VAR}-${variable}`;
                }
            }
        }
        function addVarsPrefix(_styles, parent) {
            for (const [key, value] of Object.entries(_styles)) {
                if (value && typeof value === 'object') {
                    parent[key] = {};
                    addVarsPrefix(value, parent[key]);
                }
                else if (typeof value === 'string') {
                    parent[key] = `var(${value})`;
                }
            }
        }
        createVars(styles, cssVariables);
        addVarsPrefix(cssVariables, cssVariablesVarPrefix);
        return { cssVariables, cssVariablesVarPrefix };
    },
    assignCSSVariables(vars, styles) {
        const assignedCSSVariables = {};
        function assignVars(_vars, _styles, variable) {
            for (const [varKey, varValue] of Object.entries(_vars)) {
                const nextVariable = variable ? `${variable}-${varKey}` : varKey;
                const styleValues = _styles[varKey];
                if (varValue && typeof varValue === 'object') {
                    assignVars(varValue, styleValues, nextVariable);
                }
                else if (typeof styleValues === 'string') {
                    assignedCSSVariables[`${PREFIX_VAR}-${nextVariable}`] = styleValues;
                }
            }
        }
        assignVars(vars, styles);
        return assignedCSSVariables;
    },
    createRootStyles(theme, themeVariables) {
        const styles$1 = {
            ...styles,
            tokens: { ...styles.tokens, theme: theme === 'light' ? tokens.light : tokens.dark }
        };
        const { cssVariables } = ThemeHelperUtil.createCSSVariables(styles$1);
        const assignedCSSVariables = ThemeHelperUtil.assignCSSVariables(cssVariables, styles$1);
        const w3mVariables = ThemeHelperUtil.generateW3MVariables(themeVariables);
        const w3mOverrides = ThemeHelperUtil.generateW3MOverrides(themeVariables);
        const scaledVariables = ThemeHelperUtil.generateScaledVariables(themeVariables);
        const baseVariables = ThemeHelperUtil.generateBaseVariables(assignedCSSVariables);
        const allVariables = {
            ...assignedCSSVariables,
            ...baseVariables,
            ...w3mVariables,
            ...w3mOverrides,
            ...scaledVariables
        };
        const colorMixVariables = ThemeHelperUtil.applyColorMixToVariables(themeVariables, allVariables);
        const finalVariables = {
            ...allVariables,
            ...colorMixVariables
        };
        const rootStyles = Object.entries(finalVariables)
            .map(([key, style]) => `${key}:${style.replace('/[:;{}</>]/g', '')};`)
            .join('');
        return `:root {${rootStyles}}`;
    },
    generateW3MVariables(themeVariables) {
        if (!themeVariables) {
            return {};
        }
        const variables = {};
        variables['--w3m-font-family'] = themeVariables['--w3m-font-family'] || 'KHTeka';
        variables['--w3m-accent'] = themeVariables['--w3m-accent'] || '#0988F0';
        variables['--w3m-color-mix'] = themeVariables['--w3m-color-mix'] || '#000';
        variables['--w3m-color-mix-strength'] = `${themeVariables['--w3m-color-mix-strength'] || 0}%`;
        variables['--w3m-font-size-master'] = themeVariables['--w3m-font-size-master'] || '10px';
        variables['--w3m-border-radius-master'] = themeVariables['--w3m-border-radius-master'] || '4px';
        return variables;
    },
    generateW3MOverrides(themeVariables) {
        if (!themeVariables) {
            return {};
        }
        const overrides = {};
        if (themeVariables['--w3m-accent']) {
            const accentColor = themeVariables['--w3m-accent'];
            overrides['--apkt-tokens-core-iconAccentPrimary'] = accentColor;
            overrides['--apkt-tokens-core-borderAccentPrimary'] = accentColor;
            overrides['--apkt-tokens-core-textAccentPrimary'] = accentColor;
            overrides['--apkt-tokens-core-backgroundAccentPrimary'] = accentColor;
        }
        if (themeVariables['--w3m-font-family']) {
            overrides['--apkt-fontFamily-regular'] = themeVariables['--w3m-font-family'];
        }
        if (themeVariables['--w3m-z-index']) {
            overrides['--apkt-tokens-core-zIndex'] = `${themeVariables['--w3m-z-index']}`;
        }
        return overrides;
    },
    generateScaledVariables(themeVariables) {
        if (!themeVariables) {
            return {};
        }
        const scaledVars = {};
        if (themeVariables['--w3m-font-size-master']) {
            const masterSize = parseFloat(themeVariables['--w3m-font-size-master'].replace('px', ''));
            scaledVars['--apkt-textSize-h1'] = `${Number(masterSize) * 5}px`;
            scaledVars['--apkt-textSize-h2'] = `${Number(masterSize) * 4.4}px`;
            scaledVars['--apkt-textSize-h3'] = `${Number(masterSize) * 3.8}px`;
            scaledVars['--apkt-textSize-h4'] = `${Number(masterSize) * 3.2}px`;
            scaledVars['--apkt-textSize-h5'] = `${Number(masterSize) * 2.6}px`;
            scaledVars['--apkt-textSize-h6'] = `${Number(masterSize) * 2}px`;
            scaledVars['--apkt-textSize-large'] = `${Number(masterSize) * 1.6}px`;
            scaledVars['--apkt-textSize-medium'] = `${Number(masterSize) * 1.4}px`;
            scaledVars['--apkt-textSize-small'] = `${Number(masterSize) * 1.2}px`;
        }
        if (themeVariables['--w3m-border-radius-master']) {
            const masterRadius = parseFloat(themeVariables['--w3m-border-radius-master'].replace('px', ''));
            scaledVars['--apkt-borderRadius-1'] = `${Number(masterRadius)}px`;
            scaledVars['--apkt-borderRadius-2'] = `${Number(masterRadius) * 2}px`;
            scaledVars['--apkt-borderRadius-3'] = `${Number(masterRadius) * 3}px`;
            scaledVars['--apkt-borderRadius-4'] = `${Number(masterRadius) * 4}px`;
            scaledVars['--apkt-borderRadius-5'] = `${Number(masterRadius) * 5}px`;
            scaledVars['--apkt-borderRadius-6'] = `${Number(masterRadius) * 6}px`;
            scaledVars['--apkt-borderRadius-8'] = `${Number(masterRadius) * 8}px`;
            scaledVars['--apkt-borderRadius-16'] = `${Number(masterRadius) * 16}px`;
            scaledVars['--apkt-borderRadius-20'] = `${Number(masterRadius) * 20}px`;
            scaledVars['--apkt-borderRadius-32'] = `${Number(masterRadius) * 32}px`;
            scaledVars['--apkt-borderRadius-64'] = `${Number(masterRadius) * 64}px`;
            scaledVars['--apkt-borderRadius-128'] = `${Number(masterRadius) * 128}px`;
        }
        return scaledVars;
    },
    generateColorMixCSS(themeVariables, allVariables) {
        if (!themeVariables?.['--w3m-color-mix'] || !themeVariables['--w3m-color-mix-strength']) {
            return '';
        }
        const colorMix = themeVariables['--w3m-color-mix'];
        const strength = themeVariables['--w3m-color-mix-strength'];
        if (!strength || strength === 0) {
            return '';
        }
        const colorVariables = Object.keys(allVariables || {}).filter(key => {
            const isColorToken = key.includes('-tokens-core-background') ||
                key.includes('-tokens-core-text') ||
                key.includes('-tokens-core-border') ||
                key.includes('-tokens-core-foreground') ||
                key.includes('-tokens-core-icon') ||
                key.includes('-tokens-theme-background') ||
                key.includes('-tokens-theme-text') ||
                key.includes('-tokens-theme-border') ||
                key.includes('-tokens-theme-foreground') ||
                key.includes('-tokens-theme-icon');
            const isDimensional = key.includes('-borderRadius-') ||
                key.includes('-spacing-') ||
                key.includes('-textSize-') ||
                key.includes('-fontFamily-') ||
                key.includes('-fontWeight-') ||
                key.includes('-typography-') ||
                key.includes('-duration-') ||
                key.includes('-ease-') ||
                key.includes('-path-') ||
                key.includes('-width-') ||
                key.includes('-height-') ||
                key.includes('-visual-size-') ||
                key.includes('-modal-width') ||
                key.includes('-cover');
            return isColorToken && !isDimensional;
        });
        if (colorVariables.length === 0) {
            return '';
        }
        const colorMixVariables = colorVariables
            .map(key => {
            const originalValue = allVariables?.[key] || '';
            if (originalValue.includes('color-mix') ||
                originalValue.startsWith('#') ||
                originalValue.startsWith('rgb')) {
                return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue});`;
            }
            return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}));`;
        })
            .join('');
        return ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${colorMixVariables}
      }
    }`;
    },
    generateBaseVariables(assignedCSSVariables) {
        const baseVariables = {};
        const themeBackgroundPrimary = assignedCSSVariables['--apkt-tokens-theme-backgroundPrimary'];
        if (themeBackgroundPrimary) {
            baseVariables['--apkt-tokens-theme-backgroundPrimary-base'] = themeBackgroundPrimary;
        }
        const coreBackgroundAccentPrimary = assignedCSSVariables['--apkt-tokens-core-backgroundAccentPrimary'];
        if (coreBackgroundAccentPrimary) {
            baseVariables['--apkt-tokens-core-backgroundAccentPrimary-base'] = coreBackgroundAccentPrimary;
        }
        return baseVariables;
    },
    applyColorMixToVariables(themeVariables, allVariables) {
        const colorMixVariables = {};
        if (allVariables?.['--apkt-tokens-theme-backgroundPrimary']) {
            colorMixVariables['--apkt-tokens-theme-backgroundPrimary'] =
                'var(--apkt-tokens-theme-backgroundPrimary-base)';
        }
        if (allVariables?.['--apkt-tokens-core-backgroundAccentPrimary']) {
            colorMixVariables['--apkt-tokens-core-backgroundAccentPrimary'] =
                'var(--apkt-tokens-core-backgroundAccentPrimary-base)';
        }
        if (!themeVariables?.['--w3m-color-mix'] || !themeVariables['--w3m-color-mix-strength']) {
            return colorMixVariables;
        }
        const colorMix = themeVariables['--w3m-color-mix'];
        const strength = themeVariables['--w3m-color-mix-strength'];
        if (!strength || strength === 0) {
            return colorMixVariables;
        }
        const colorVariables = Object.keys(allVariables || {}).filter(key => {
            const isColorToken = key.includes('-tokens-core-background') ||
                key.includes('-tokens-core-text') ||
                key.includes('-tokens-core-border') ||
                key.includes('-tokens-core-foreground') ||
                key.includes('-tokens-core-icon') ||
                key.includes('-tokens-theme-background') ||
                key.includes('-tokens-theme-text') ||
                key.includes('-tokens-theme-border') ||
                key.includes('-tokens-theme-foreground') ||
                key.includes('-tokens-theme-icon') ||
                key.includes('-tokens-theme-overlay');
            const isDimensional = key.includes('-borderRadius-') ||
                key.includes('-spacing-') ||
                key.includes('-textSize-') ||
                key.includes('-fontFamily-') ||
                key.includes('-fontWeight-') ||
                key.includes('-typography-') ||
                key.includes('-duration-') ||
                key.includes('-ease-') ||
                key.includes('-path-') ||
                key.includes('-width-') ||
                key.includes('-height-') ||
                key.includes('-visual-size-') ||
                key.includes('-modal-width') ||
                key.includes('-cover');
            return isColorToken && !isDimensional;
        });
        if (colorVariables.length === 0) {
            return colorMixVariables;
        }
        colorVariables.forEach(key => {
            const originalValue = allVariables?.[key] || '';
            if (key.endsWith('-base')) {
                return;
            }
            if (key === '--apkt-tokens-theme-backgroundPrimary' ||
                key === '--apkt-tokens-core-backgroundAccentPrimary') {
                colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base))`;
            }
            else if (originalValue.includes('color-mix') ||
                originalValue.startsWith('#') ||
                originalValue.startsWith('rgb')) {
                colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue})`;
            }
            else {
                colorMixVariables[key] =
                    `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}))`;
            }
        });
        return colorMixVariables;
    }
};
const { cssVariablesVarPrefix: vars } = ThemeHelperUtil.createCSSVariables(styles);
function css(strings, ...values) {
    return i$3(strings, ...values.map(value => typeof value === 'function' ? r$2(value(vars)) : r$2(value)));
}

let apktTag = undefined;
let themeTag = undefined;
let darkModeTag = undefined;
let lightModeTag = undefined;
let currentThemeVariables = undefined;
const fonts = {
    'KHTeka-500-woff2': 'https://fonts.reown.com/KHTeka-Medium.woff2',
    'KHTeka-400-woff2': 'https://fonts.reown.com/KHTeka-Regular.woff2',
    'KHTeka-300-woff2': 'https://fonts.reown.com/KHTeka-Light.woff2',
    'KHTekaMono-400-woff2': 'https://fonts.reown.com/KHTekaMono-Regular.woff2',
    'KHTeka-500-woff': 'https://fonts.reown.com/KHTeka-Light.woff',
    'KHTeka-400-woff': 'https://fonts.reown.com/KHTeka-Regular.woff',
    'KHTeka-300-woff': 'https://fonts.reown.com/KHTeka-Light.woff',
    'KHTekaMono-400-woff': 'https://fonts.reown.com/KHTekaMono-Regular.woff'
};
function createAppKitTheme(themeVariables, theme = 'dark') {
    if (apktTag) {
        document.head.removeChild(apktTag);
    }
    apktTag = document.createElement('style');
    apktTag.textContent = ThemeHelperUtil.createRootStyles(theme, themeVariables);
    document.head.appendChild(apktTag);
}
function initializeTheming(themeVariables, themeMode = 'dark') {
    currentThemeVariables = themeVariables;
    themeTag = document.createElement('style');
    darkModeTag = document.createElement('style');
    lightModeTag = document.createElement('style');
    themeTag.textContent = createRootStyles(themeVariables).core.cssText;
    darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
    lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
    document.head.appendChild(themeTag);
    document.head.appendChild(darkModeTag);
    document.head.appendChild(lightModeTag);
    createAppKitTheme(themeVariables, themeMode);
    setColorTheme(themeMode);
    if (!themeVariables?.['--w3m-font-family']) {
        for (const [key, url] of Object.entries(fonts)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = 'font';
            link.type = key.includes('woff2') ? 'font/woff2' : 'font/woff';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        }
    }
    setColorTheme(themeMode);
}
function setColorTheme(themeMode = 'dark') {
    if (darkModeTag && lightModeTag && apktTag) {
        if (themeMode === 'light') {
            createAppKitTheme(currentThemeVariables, themeMode);
            darkModeTag.removeAttribute('media');
            lightModeTag.media = 'enabled';
        }
        else {
            createAppKitTheme(currentThemeVariables, themeMode);
            lightModeTag.removeAttribute('media');
            darkModeTag.media = 'enabled';
        }
    }
}
function setThemeVariables(_themeVariables) {
    currentThemeVariables = _themeVariables;
    if (themeTag && darkModeTag && lightModeTag) {
        themeTag.textContent = createRootStyles(_themeVariables).core.cssText;
        darkModeTag.textContent = createRootStyles(_themeVariables).dark.cssText;
        lightModeTag.textContent = createRootStyles(_themeVariables).light.cssText;
        if (_themeVariables?.['--w3m-font-family']) {
            const fontFamily = _themeVariables['--w3m-font-family'];
            themeTag.textContent = themeTag.textContent?.replace('font-family: KHTeka', `font-family: ${fontFamily}`);
            darkModeTag.textContent = darkModeTag.textContent?.replace('font-family: KHTeka', `font-family: ${fontFamily}`);
            lightModeTag.textContent = lightModeTag.textContent?.replace('font-family: KHTeka', `font-family: ${fontFamily}`);
        }
    }
    if (apktTag) {
        const currentMode = lightModeTag?.media === 'enabled' ? 'light' : 'dark';
        createAppKitTheme(_themeVariables, currentMode);
    }
}
function createRootStyles(_themeVariables) {
    const hasCustomFontFamily = Boolean(_themeVariables?.['--w3m-font-family']);
    return {
        core: i$3 `
      ${hasCustomFontFamily
            ? i$3 ``
            : i$3 `
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts['KHTeka-400-woff2'])}) format('woff2'),
                url(${r$2(fonts['KHTeka-400-woff'])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts['KHTeka-300-woff2'])}) format('woff2'),
                url(${r$2(fonts['KHTeka-300-woff'])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${r$2(fonts['KHTekaMono-400-woff2'])}) format('woff2'),
                url(${r$2(fonts['KHTekaMono-400-woff'])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts['KHTeka-400-woff2'])}) format('woff2'),
                url(${r$2(fonts['KHTeka-400-woff'])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
        dark: i$3 `
      :root {
      }
    `,
        light: i$3 `
      :root {
      }
    `
    };
}
const resetStyles = i$3 `
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`;
const elementStyles = i$3 `
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;

const EthersHelpersUtil = {
    hexStringToNumber(value) {
        const string = value.startsWith('0x') ? value.slice(2) : value;
        const number = parseInt(string, 16);
        return number;
    },
    numberToHexString(value) {
        return `0x${value.toString(16)}`;
    },
    async getUserInfo(provider) {
        const [addresses, chainId] = await Promise.all([
            EthersHelpersUtil.getAddresses(provider),
            EthersHelpersUtil.getChainId(provider)
        ]);
        return { chainId, addresses };
    },
    async getChainId(provider) {
        const chainId = await provider.request({ method: 'eth_chainId' });
        return Number(chainId);
    },
    async getAddress(provider) {
        const [address] = await provider.request({ method: 'eth_accounts' });
        return address;
    },
    async getAddresses(provider) {
        const addresses = await provider.request({ method: 'eth_accounts' });
        return addresses;
    },
    async addEthereumChain(provider, caipNetwork) {
        const rpcUrls = caipNetwork.rpcUrls['chainDefault']?.http || [];
        await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: EthersHelpersUtil.numberToHexString(caipNetwork.id),
                    rpcUrls: [...rpcUrls],
                    chainName: caipNetwork.name,
                    nativeCurrency: {
                        name: caipNetwork.nativeCurrency.name,
                        decimals: caipNetwork.nativeCurrency.decimals,
                        symbol: caipNetwork.nativeCurrency.symbol
                    },
                    blockExplorerUrls: [caipNetwork.blockExplorers?.default.url],
                    iconUrls: [PresetsUtil.NetworkImageIds[caipNetwork.id]]
                }
            ]
        });
    }
};

const BitcoinConstantsUtil = {
    ACCOUNT_INDEXES: {
        PAYMENT: 0,
        ORDINAL: 1
    }
};

function defineChain(chain) {
    return {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain
    };
}

const solana = defineChain({
    id: '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    name: 'Solana',
    network: 'solana-mainnet',
    nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
    rpcUrls: {
        default: { http: ['https://rpc.walletconnect.org/v1'] }
    },
    blockExplorers: { default: { name: 'Solscan', url: 'https://solscan.io' } },
    testnet: false,
    chainNamespace: 'solana',
    caipNetworkId: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    deprecatedCaipNetworkId: 'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ'
});

const solanaDevnet = defineChain({
    id: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    name: 'Solana Devnet',
    network: 'solana-devnet',
    nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
    rpcUrls: {
        default: { http: ['https://rpc.walletconnect.org/v1'] }
    },
    blockExplorers: { default: { name: 'Solscan', url: 'https://solscan.io' } },
    testnet: true,
    chainNamespace: 'solana',
    caipNetworkId: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    deprecatedCaipNetworkId: 'solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K'
});

defineChain({
    id: '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    name: 'Solana Testnet',
    network: 'solana-testnet',
    nativeCurrency: { name: 'Solana', symbol: 'SOL', decimals: 9 },
    rpcUrls: {
        default: { http: ['https://rpc.walletconnect.org/v1'] }
    },
    blockExplorers: { default: { name: 'Solscan', url: 'https://solscan.io' } },
    testnet: true,
    chainNamespace: 'solana',
    caipNetworkId: 'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z'
});

defineChain({
    id: '000000000019d6689c085ae165831e93',
    caipNetworkId: 'bip122:000000000019d6689c085ae165831e93',
    chainNamespace: 'bip122',
    name: 'Bitcoin',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 8
    },
    rpcUrls: {
        default: { http: ['https://rpc.walletconnect.org/v1'] }
    }
});
defineChain({
    id: '000000000933ea01ad0ee984209779ba',
    caipNetworkId: 'bip122:000000000933ea01ad0ee984209779ba',
    chainNamespace: 'bip122',
    name: 'Bitcoin Testnet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 8
    },
    rpcUrls: {
        default: { http: ['https://rpc.walletconnect.org/v1'] }
    },
    testnet: true
});
defineChain({
    id: '00000008819873e925422c1ff0f99f7c',
    caipNetworkId: 'bip122:00000008819873e925422c1ff0f99f7c',
    chainNamespace: 'bip122',
    name: 'Bitcoin Signet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 8
    },
    rpcUrls: {
        default: { http: ['https://rpc.walletconnect.org/v1'] }
    },
    testnet: true
});

const DEFAULT_METHODS = {
    solana: [
        'solana_signMessage',
        'solana_signTransaction',
        'solana_requestAccounts',
        'solana_getAccounts',
        'solana_signAllTransactions',
        'solana_signAndSendTransaction'
    ],
    eip155: [
        'eth_accounts',
        'eth_requestAccounts',
        'eth_sendRawTransaction',
        'eth_sign',
        'eth_signTransaction',
        'eth_signTypedData',
        'eth_signTypedData_v3',
        'eth_signTypedData_v4',
        'eth_sendTransaction',
        'personal_sign',
        'wallet_switchEthereumChain',
        'wallet_addEthereumChain',
        'wallet_getPermissions',
        'wallet_requestPermissions',
        'wallet_registerOnboarding',
        'wallet_watchAsset',
        'wallet_scanQRCode',
        // EIP-5792
        'wallet_getCallsStatus',
        'wallet_showCallsStatus',
        'wallet_sendCalls',
        'wallet_getCapabilities',
        // EIP-7715
        'wallet_grantPermissions',
        'wallet_revokePermissions',
        //EIP-7811
        'wallet_getAssets'
    ],
    bip122: ['sendTransfer', 'signMessage', 'signPsbt', 'getAccountAddresses']
};
const WcHelpersUtil = {
    RPC_ERROR_CODE: {
        USER_REJECTED: 5000,
        USER_REJECTED_METHODS: 5002
    },
    getMethodsByChainNamespace(chainNamespace) {
        return DEFAULT_METHODS[chainNamespace] || [];
    },
    createDefaultNamespace(chainNamespace) {
        return {
            methods: this.getMethodsByChainNamespace(chainNamespace),
            events: ['accountsChanged', 'chainChanged'],
            chains: [],
            rpcMap: {}
        };
    },
    applyNamespaceOverrides(baseNamespaces, overrides) {
        if (!overrides) {
            return { ...baseNamespaces };
        }
        const result = { ...baseNamespaces };
        const namespacesToOverride = new Set();
        if (overrides.methods) {
            Object.keys(overrides.methods).forEach(ns => namespacesToOverride.add(ns));
        }
        if (overrides.chains) {
            Object.keys(overrides.chains).forEach(ns => namespacesToOverride.add(ns));
        }
        if (overrides.events) {
            Object.keys(overrides.events).forEach(ns => namespacesToOverride.add(ns));
        }
        if (overrides.rpcMap) {
            Object.keys(overrides.rpcMap).forEach(chainId => {
                const [ns] = chainId.split(':');
                if (ns) {
                    namespacesToOverride.add(ns);
                }
            });
        }
        namespacesToOverride.forEach(ns => {
            if (!result[ns]) {
                result[ns] = this.createDefaultNamespace(ns);
            }
        });
        if (overrides.methods) {
            Object.entries(overrides.methods).forEach(([ns, methods]) => {
                if (result[ns]) {
                    result[ns].methods = methods;
                }
            });
        }
        if (overrides.chains) {
            Object.entries(overrides.chains).forEach(([ns, chains]) => {
                if (result[ns]) {
                    result[ns].chains = chains;
                }
            });
        }
        if (overrides.events) {
            Object.entries(overrides.events).forEach(([ns, events]) => {
                if (result[ns]) {
                    result[ns].events = events;
                }
            });
        }
        if (overrides.rpcMap) {
            const processedNamespaces = new Set();
            Object.entries(overrides.rpcMap).forEach(([chainId, rpcUrl]) => {
                const [ns, id] = chainId.split(':');
                if (!ns || !id || !result[ns]) {
                    return;
                }
                if (!result[ns].rpcMap) {
                    result[ns].rpcMap = {};
                }
                if (!processedNamespaces.has(ns)) {
                    result[ns].rpcMap = {};
                    processedNamespaces.add(ns);
                }
                result[ns].rpcMap[id] = rpcUrl;
            });
        }
        return result;
    },
    createNamespaces(caipNetworks, configOverride) {
        const defaultNamespaces = caipNetworks.reduce((acc, chain) => {
            const { id, chainNamespace, rpcUrls } = chain;
            const rpcUrl = rpcUrls.default.http[0];
            if (!acc[chainNamespace]) {
                acc[chainNamespace] = this.createDefaultNamespace(chainNamespace);
            }
            const caipNetworkId = `${chainNamespace}:${id}`;
            // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
            const namespace = acc[chainNamespace];
            namespace.chains.push(caipNetworkId);
            // Workaround for wallets that only support deprecated Solana network ID
            switch (caipNetworkId) {
                case solana.caipNetworkId:
                    namespace.chains.push(solana.deprecatedCaipNetworkId);
                    break;
                case solanaDevnet.caipNetworkId:
                    namespace.chains.push(solanaDevnet.deprecatedCaipNetworkId);
                    break;
            }
            if (namespace?.rpcMap && rpcUrl) {
                namespace.rpcMap[id] = rpcUrl;
            }
            return acc;
        }, {});
        return this.applyNamespaceOverrides(defaultNamespaces, configOverride);
    },
    resolveReownName: async (name) => {
        const wcNameAddress = await EnsController.resolveName(name);
        const networkNameAddresses = Object.values(wcNameAddress?.addresses) || [];
        return networkNameAddresses[0]?.address || false;
    },
    getChainsFromNamespaces(namespaces = {}) {
        return Object.values(namespaces).flatMap(namespace => {
            const chains = (namespace.chains || []);
            const accountsChains = namespace.accounts.map(account => {
                const [chainNamespace, chainId] = account.split(':');
                return `${chainNamespace}:${chainId}`;
            });
            return Array.from(new Set([...chains, ...accountsChains]));
        });
    },
    isSessionEventData(data) {
        return (typeof data === 'object' &&
            data !== null &&
            'id' in data &&
            'topic' in data &&
            'params' in data &&
            typeof data.params === 'object' &&
            data.params !== null &&
            'chainId' in data.params &&
            'event' in data.params &&
            typeof data.params.event === 'object' &&
            data.params.event !== null);
    },
    isUserRejectedRequestError(error) {
        try {
            if (typeof error === 'object' && error !== null) {
                const objErr = error;
                const hasCode = typeof objErr['code'] === 'number';
                const hasUserRejectedMethods = hasCode && objErr['code'] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
                const hasUserRejected = hasCode && objErr['code'] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED;
                return hasUserRejectedMethods || hasUserRejected;
            }
            return false;
        }
        catch {
            return false;
        }
    },
    isOriginAllowed(currentOrigin, allowedPatterns, defaultAllowedOrigins) {
        for (const pattern of [...allowedPatterns, ...defaultAllowedOrigins]) {
            if (pattern.includes('*')) {
                // Convert wildcard pattern to regex, escape special chars, replace *, match whole string
                const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
                const regexString = `^${escapedPattern.replace(/\\\*/gu, '.*')}$`;
                const regex = new RegExp(regexString, 'u');
                if (regex.test(currentOrigin)) {
                    return true;
                }
            }
            else {
                /**
                 * There are some cases where pattern is getting just the origin, where using new URL(pattern).origin will throw an error
                 * thus we a try catch to handle this case
                 */
                try {
                    if (new URL(pattern).origin === currentOrigin) {
                        return true;
                    }
                }
                catch (e) {
                    if (pattern === currentOrigin) {
                        return true;
                    }
                }
            }
        }
        // No match found
        return false;
    },
    listenWcProvider({ universalProvider, namespace, onConnect, onDisconnect, onAccountsChanged, onChainChanged, onDisplayUri }) {
        if (onConnect) {
            universalProvider.on('connect', () => {
                const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, namespace);
                onConnect(accounts);
            });
        }
        if (onDisconnect) {
            universalProvider.on('disconnect', () => {
                onDisconnect();
            });
        }
        if (onAccountsChanged) {
            /*
             * In multichain scenario - every adapter will listen to accountsChanged event
             * so make sure to call `onAccountsChanged` only on the namespace that actually has accounts changed
             */
            universalProvider.on('accountsChanged', (accounts) => {
                try {
                    const allAccounts = universalProvider.session?.namespaces?.[namespace]?.accounts || [];
                    const defaultChain = universalProvider.rpcProviders?.[namespace]?.getDefaultChain();
                    const parsedAccounts = accounts
                        .map(account => {
                        const caipAccount = allAccounts.find(acc => acc.includes(`${namespace}:${defaultChain}:${account}`));
                        if (!caipAccount) {
                            return undefined;
                        }
                        const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(caipAccount);
                        return {
                            address: account,
                            chainId,
                            chainNamespace
                        };
                    })
                        .filter(account => account !== undefined);
                    // Emit accountsChanged event only if there are accounts
                    if (parsedAccounts.length > 0) {
                        onAccountsChanged(parsedAccounts);
                    }
                }
                catch (error) {
                    console.warn('Failed to parse accounts for namespace on accountsChanged event', namespace, accounts, error);
                }
            });
        }
        if (onChainChanged) {
            universalProvider.on('chainChanged', (chainId) => {
                onChainChanged(chainId);
            });
        }
        if (onDisplayUri) {
            universalProvider.on('display_uri', (uri) => {
                onDisplayUri(uri);
            });
        }
    },
    getWalletConnectAccounts(universalProvider, namespace) {
        const accountsAdded = new Set();
        const accounts = universalProvider?.session?.namespaces?.[namespace]?.accounts
            ?.map(account => ParseUtil.parseCaipAddress(account))
            .filter(({ address }) => {
            if (accountsAdded.has(address.toLowerCase())) {
                return false;
            }
            accountsAdded.add(address.toLowerCase());
            return true;
        });
        if (accounts && accounts.length > 0) {
            return accounts;
        }
        return [];
    }
};

// -- Class ------------------------------------------------------------------
class ConnectionManager {
    constructor(params) {
        this.namespace = params.namespace;
    }
    async syncConnections(params) {
        switch (this.namespace) {
            case ConstantsUtil$3.CHAIN.EVM:
                await this.syncEVMConnections(params);
                break;
            case ConstantsUtil$3.CHAIN.SOLANA:
                await this.syncSolanaConnections(params);
                break;
            case ConstantsUtil$3.CHAIN.BITCOIN:
                await this.syncBitcoinConnections(params);
                break;
            default:
                throw new Error(`Unsupported chain namespace: ${this.namespace}`);
        }
    }
    async syncEVMConnections({ connectors, caipNetworks, universalProvider, onConnection, onListenProvider }) {
        await Promise.all(connectors
            .filter(c => {
            const { hasDisconnected, hasConnected } = HelpersUtil.getConnectorStorageInfo(c.id, this.namespace);
            return !hasDisconnected && hasConnected;
        })
            .map(async (connector) => {
            if (connector.id === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
                const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, this.namespace);
                const caipNetwork = caipNetworks.find(n => n.chainNamespace === this.namespace &&
                    n.id.toString() === accounts[0]?.chainId?.toString());
                if (accounts.length > 0) {
                    onConnection({
                        connectorId: connector.id,
                        accounts: accounts.map(account => ({ address: account.address })),
                        caipNetwork
                    });
                }
            }
            else {
                const { accounts, chainId } = await ConnectorUtil.fetchProviderData(connector);
                if (accounts.length > 0 && chainId) {
                    const caipNetwork = caipNetworks.find(n => n.chainNamespace === this.namespace && n.id.toString() === chainId.toString());
                    onConnection({
                        connectorId: connector.id,
                        accounts: accounts.map(address => ({ address })),
                        caipNetwork
                    });
                    if (connector.provider &&
                        connector.id !== ConstantsUtil$3.CONNECTOR_ID.AUTH &&
                        connector.id !== ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
                        onListenProvider(connector.id, connector.provider);
                    }
                }
            }
        }));
    }
    async syncSolanaConnections({ connectors, caipNetwork, universalProvider, onConnection, onListenProvider }) {
        await Promise.all(connectors
            .filter(c => {
            const { hasDisconnected, hasConnected } = HelpersUtil.getConnectorStorageInfo(c.id, this.namespace);
            return !hasDisconnected && hasConnected;
        })
            .map(async (connector) => {
            if (connector.id === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
                const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, this.namespace);
                if (accounts.length > 0) {
                    onConnection({
                        connectorId: connector.id,
                        accounts: accounts.map(account => ({ address: account.address })),
                        caipNetwork
                    });
                }
            }
            else {
                const address = await connector.connect({
                    chainId: caipNetwork?.id
                });
                if (address) {
                    onConnection({
                        connectorId: connector.id,
                        accounts: [{ address }],
                        caipNetwork
                    });
                    onListenProvider(connector.id, connector.provider);
                }
            }
        }));
    }
    async syncBitcoinConnections({ connectors, caipNetwork, universalProvider, onConnection, onListenProvider }) {
        await Promise.all(connectors
            .filter(c => {
            const { hasDisconnected, hasConnected } = HelpersUtil.getConnectorStorageInfo(c.id, this.namespace);
            return !hasDisconnected && hasConnected;
        })
            .map(async (connector) => {
            if (connector.id === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
                const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, this.namespace);
                if (accounts.length > 0) {
                    onConnection({
                        connectorId: connector.id,
                        accounts: accounts.map(account => ({ address: account.address })),
                        caipNetwork
                    });
                }
                return;
            }
            const address = await connector.connect();
            const addresses = await connector.getAccountAddresses();
            let accounts = addresses?.map(a => CoreHelperUtil.createAccount(ConstantsUtil$3.CHAIN.BITCOIN, a.address, a.purpose || 'payment', a.publicKey, a.path));
            if (accounts && accounts.length > 1) {
                accounts = [
                    {
                        namespace: ConstantsUtil$3.CHAIN.BITCOIN,
                        publicKey: accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.PAYMENT]?.publicKey ?? '',
                        path: accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.PAYMENT]?.path ?? '',
                        address: accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.PAYMENT]?.address ?? '',
                        type: 'payment'
                    },
                    {
                        namespace: ConstantsUtil$3.CHAIN.BITCOIN,
                        publicKey: accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.ORDINAL]?.publicKey ?? '',
                        path: accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.ORDINAL]?.path ?? '',
                        address: accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.ORDINAL]?.address ?? '',
                        type: 'ordinal'
                    }
                ];
            }
            const chain = connector.chains.find(c => c.id === caipNetwork?.id) || connector.chains[0];
            if (!chain) {
                throw new Error('The connector does not support any of the requested chains');
            }
            if (address) {
                onListenProvider(connector.id, connector.provider);
                onConnection({
                    connectorId: connector.id,
                    accounts: accounts.map(a => ({
                        address: a.address,
                        type: a.type,
                        publicKey: a.publicKey,
                        path: a.path
                    })),
                    caipNetwork
                });
            }
        }));
    }
    /**
     * Gets a connection based on provided parameters.
     * If connectorId is provided, returns connection for that specific connector.
     * Otherwise, returns the first available valid connection.
     *
     * @param params - Connection parameters
     * @param params.address - Optional address to filter by
     * @param params.connectorId - Optional connector ID to filter by
     * @param params.connections - List of available connections
     * @param params.connectors - List of available connectors
     * @returns Connection or null if none found
     */
    getConnection({ address, connectorId, connections, connectors }) {
        if (connectorId) {
            const connection = connections.find(c => HelpersUtil.isLowerCaseMatch(c.connectorId, connectorId));
            if (!connection) {
                return null;
            }
            const connector = connectors.find(c => HelpersUtil.isLowerCaseMatch(c.id, connection.connectorId));
            const account = address
                ? connection.accounts.find(a => HelpersUtil.isLowerCaseMatch(a.address, address))
                : connection.accounts[0];
            return { ...connection, account, connector };
        }
        const validConnection = connections.find(c => c.accounts.length > 0 &&
            connectors.some(conn => HelpersUtil.isLowerCaseMatch(conn.id, c.connectorId)));
        if (validConnection) {
            const [account] = validConnection.accounts;
            const connector = connectors.find(c => HelpersUtil.isLowerCaseMatch(c.id, validConnection.connectorId));
            return {
                ...validConnection,
                account,
                connector
            };
        }
        return null;
    }
}

const WcConstantsUtil = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5000,
    ERROR_INVALID_CHAIN_ID: 32603,
    DEFAULT_ALLOWED_ANCESTORS: [
        'http://localhost:*',
        'https://localhost:*',
        'http://127.0.0.1:*',
        'https://127.0.0.1:*',
        'https://*.pages.dev',
        'https://*.vercel.app',
        'https://*.ngrok-free.app',
        'https://secure-mobile.walletconnect.com',
        'https://secure-mobile.walletconnect.org'
    ]
};

class WalletConnectConnector {
    constructor({ provider, namespace }) {
        this.id = ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
        this.name = PresetsUtil.ConnectorNamesMap[ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT];
        this.type = 'WALLET_CONNECT';
        this.imageId = PresetsUtil.ConnectorImageIds[ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT];
        this.getCaipNetworks = ChainController.getCaipNetworks.bind(ChainController);
        this.caipNetworks = this.getCaipNetworks();
        this.provider = provider;
        this.chain = namespace;
    }
    get chains() {
        return this.getCaipNetworks();
    }
    async connectWalletConnect() {
        const isAuthenticated = await this.authenticate();
        if (!isAuthenticated) {
            const caipNetworks = this.getCaipNetworks();
            const universalProviderConfigOverride = OptionsController.state.universalProviderConfigOverride;
            const namespaces = WcHelpersUtil.createNamespaces(caipNetworks, universalProviderConfigOverride);
            await this.provider.connect({ optionalNamespaces: namespaces });
        }
        return {
            clientId: await this.provider.client.core.crypto.getClientId(),
            session: this.provider.session
        };
    }
    async disconnect() {
        await this.provider.disconnect();
    }
    async authenticate() {
        const chains = this.chains.map(network => network.caipNetworkId);
        return SIWXUtil.universalProviderAuthenticate({
            universalProvider: this.provider,
            chains,
            methods: OPTIONAL_METHODS
        });
    }
}
const OPTIONAL_METHODS = [
    'eth_accounts',
    'eth_requestAccounts',
    'eth_sendRawTransaction',
    'eth_sign',
    'eth_signTransaction',
    'eth_signTypedData',
    'eth_signTypedData_v3',
    'eth_signTypedData_v4',
    'eth_sendTransaction',
    'personal_sign',
    'wallet_switchEthereumChain',
    'wallet_addEthereumChain',
    'wallet_getPermissions',
    'wallet_requestPermissions',
    'wallet_registerOnboarding',
    'wallet_watchAsset',
    'wallet_scanQRCode',
    // EIP-5792
    'wallet_getCallsStatus',
    'wallet_sendCalls',
    'wallet_getCapabilities',
    // EIP-7715
    'wallet_grantPermissions',
    'wallet_revokePermissions',
    //EIP-7811
    'wallet_getAssets'
];

const IGNORED_CONNECTOR_IDS_FOR_LISTENER = [
    ConstantsUtil$3.CONNECTOR_ID.AUTH,
    ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT
];
/**
 * Abstract class representing a chain adapter blueprint.
 * @template Connector - The type of connector extending ChainAdapterConnector
 */
class AdapterBlueprint {
    /**
     * Creates an instance of AdapterBlueprint.
     * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
     */
    constructor(params) {
        this.availableConnectors = [];
        this.availableConnections = [];
        this.providerHandlers = {};
        this.eventListeners = new Map();
        this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
        this.getConnectorId = (namespace) => ConnectorController.getConnectorId(namespace);
        if (params) {
            this.construct(params);
        }
        if (params?.namespace) {
            this.connectionManager = new ConnectionManager({
                namespace: params.namespace
            });
        }
    }
    /**
     * Initializes the adapter with the given parameters.
     * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
     */
    construct(params) {
        this.projectId = params.projectId;
        this.namespace = params.namespace;
        this.adapterType = params.adapterType;
    }
    /**
     * Gets the available connectors.
     * @returns {Connector[]} An array of available connectors
     */
    get connectors() {
        return this.availableConnectors;
    }
    /**
     * Gets the available connections.
     * @returns {Connection[]} An array of available connections
     */
    get connections() {
        return this.availableConnections;
    }
    /**
     * Gets the supported networks.
     * @returns {CaipNetwork[]} An array of supported networks
     */
    get networks() {
        return this.getCaipNetworks(this.namespace);
    }
    /**
     * Handles the auth connected event.
     * @param {W3mFrameTypes.Responses['FrameGetUserResponse']} user - The user response
     */
    onAuthConnected({ accounts, chainId }) {
        const caipNetwork = this.getCaipNetworks()
            .filter(n => n.chainNamespace === this.namespace)
            .find(n => n.id.toString() === chainId?.toString());
        if (accounts && caipNetwork) {
            this.addConnection({
                connectorId: ConstantsUtil$3.CONNECTOR_ID.AUTH,
                accounts,
                caipNetwork
            });
        }
    }
    /**
     * Sets the auth provider.
     * @param {W3mFrameProvider} authProvider - The auth provider instance
     */
    setAuthProvider(authProvider) {
        authProvider.onConnect(this.onAuthConnected.bind(this));
        authProvider.onSocialConnected(this.onAuthConnected.bind(this));
        this.addConnector({
            id: ConstantsUtil$3.CONNECTOR_ID.AUTH,
            type: 'AUTH',
            name: ConstantsUtil$3.CONNECTOR_NAMES.AUTH,
            provider: authProvider,
            imageId: PresetsUtil.ConnectorImageIds[ConstantsUtil$3.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: []
        });
    }
    /**
     * Adds one or more connectors to the available connectors list.
     * @param {...Connector} connectors - The connectors to add
     */
    addConnector(...connectors) {
        const connectorsAdded = new Set();
        this.availableConnectors = [...connectors, ...this.availableConnectors].filter(connector => {
            if (connectorsAdded.has(connector.id)) {
                return false;
            }
            connectorsAdded.add(connector.id);
            return true;
        });
        this.emit('connectors', this.availableConnectors);
    }
    /**
     * Adds connections to the available connections list
     * @param {...Connection} connections - The connections to add
     */
    addConnection(...connections) {
        const connectionsAdded = new Set();
        this.availableConnections = [...connections, ...this.availableConnections].filter(connection => {
            if (connectionsAdded.has(connection.connectorId.toLowerCase())) {
                return false;
            }
            connectionsAdded.add(connection.connectorId.toLowerCase());
            return true;
        });
        this.emit('connections', this.availableConnections);
    }
    /**
     * Deletes a connection from the available connections list
     * @param {string} connectorId - The connector ID of the connection to delete
     */
    deleteConnection(connectorId) {
        this.availableConnections = this.availableConnections.filter(c => !HelpersUtil.isLowerCaseMatch(c.connectorId, connectorId));
        this.emit('connections', this.availableConnections);
    }
    /**
     * Clears all connections from the available connections list
     * @param {boolean} emit - Whether to emit the connections event
     */
    clearConnections(emit = false) {
        this.availableConnections = [];
        if (emit) {
            this.emit('connections', this.availableConnections);
        }
    }
    setStatus(status, chainNamespace) {
        ChainController.setAccountProp('status', status, chainNamespace);
    }
    /**
     * Adds an event listener for a specific event.
     * @template T
     * @param {T} eventName - The name of the event
     * @param {EventCallback<T>} callback - The callback function to be called when the event is emitted
     */
    on(eventName, callback) {
        if (!this.eventListeners.has(eventName)) {
            this.eventListeners.set(eventName, new Set());
        }
        this.eventListeners.get(eventName)?.add(callback);
    }
    /**
     * Removes an event listener for a specific event.
     * @template T
     * @param {T} eventName - The name of the event
     * @param {EventCallback<T>} callback - The callback function to be removed
     */
    off(eventName, callback) {
        const listeners = this.eventListeners.get(eventName);
        if (listeners) {
            listeners.delete(callback);
        }
    }
    /**
     * Removes all event listeners.
     */
    removeAllEventListeners() {
        this.eventListeners.forEach(listeners => {
            listeners.clear();
        });
    }
    /**
     * Emits an event with the given name and optional data.
     * @template T
     * @param {T} eventName - The name of the event to emit
     * @param {EventData[T]} [data] - The optional data to be passed to the event listeners
     */
    emit(eventName, data) {
        const listeners = this.eventListeners.get(eventName);
        if (listeners) {
            listeners.forEach(callback => callback(data));
        }
    }
    /**
     * Connects to WalletConnect.
     * @param {number | string} [_chainId] - Optional chain ID to connect to
     */
    async connectWalletConnect(_chainId) {
        try {
            const connector = this.getWalletConnectConnector();
            const result = await connector.connectWalletConnect();
            return { clientId: result.clientId };
        }
        catch (err) {
            if (WcHelpersUtil.isUserRejectedRequestError(err)) {
                throw new UserRejectedRequestError(err);
            }
            throw err;
        }
    }
    /**
     * Switches the network.
     * @param {AdapterBlueprint.SwitchNetworkParams} params - Network switching parameters
     */
    async switchNetwork(params) {
        const { caipNetwork, providerType } = params;
        if (!params.provider) {
            return;
        }
        const provider = 'provider' in params.provider ? params.provider.provider : params.provider;
        if (providerType === 'WALLET_CONNECT') {
            provider.setDefaultChain(caipNetwork.caipNetworkId);
            return;
        }
        if (provider && providerType === 'AUTH') {
            const authProvider = provider;
            const preferredAccountType = getPreferredAccountType(caipNetwork.chainNamespace);
            await authProvider.switchNetwork({ chainId: caipNetwork.caipNetworkId });
            const user = await authProvider.getUser({
                chainId: caipNetwork.caipNetworkId,
                preferredAccountType
            });
            this.emit('switchNetwork', user);
        }
    }
    getWalletConnectConnector() {
        const connector = this.connectors.find(c => c instanceof WalletConnectConnector);
        if (!connector) {
            throw new Error('WalletConnectConnector not found');
        }
        return connector;
    }
    /**
     * Handles connect event for a specific connector.
     * @param {string[]} accounts - The accounts that changed
     * @param {string} connectorId - The ID of the connector
     */
    onConnect(accounts, connectorId) {
        if (accounts.length > 0) {
            const { address, chainId } = CoreHelperUtil.getAccount(accounts[0]);
            const caipNetwork = this.getCaipNetworks()
                .filter(n => n.chainNamespace === this.namespace)
                .find(n => n.id.toString() === chainId?.toString());
            const connector = this.connectors.find(c => c.id === connectorId);
            if (address) {
                this.emit('accountChanged', {
                    address,
                    chainId,
                    connector
                });
                this.addConnection({
                    connectorId,
                    accounts: accounts.map(_account => {
                        const { address } = CoreHelperUtil.getAccount(_account);
                        return { address: address };
                    }),
                    caipNetwork
                });
            }
        }
    }
    /**
     * Handles accounts changed event for a specific connector.
     * @param {string[]} accounts - The accounts that changed
     * @param {string} connectorId - The ID of the connector
     */
    onAccountsChanged(accounts, connectorId, disconnectIfNoAccounts = true) {
        if (accounts.length > 0) {
            const { address } = CoreHelperUtil.getAccount(accounts[0]);
            const connection = this.connectionManager?.getConnection({
                connectorId,
                connections: this.connections,
                connectors: this.connectors
            });
            if (address &&
                HelpersUtil.isLowerCaseMatch(this.getConnectorId(ConstantsUtil$3.CHAIN.EVM), connectorId)) {
                this.emit('accountChanged', {
                    address,
                    chainId: connection?.caipNetwork?.id,
                    connector: connection?.connector
                });
            }
            this.addConnection({
                connectorId,
                accounts: accounts.map(_account => {
                    const { address } = CoreHelperUtil.getAccount(_account);
                    return { address: address };
                }),
                caipNetwork: connection?.caipNetwork
            });
        }
        else if (disconnectIfNoAccounts) {
            this.onDisconnect(connectorId);
        }
    }
    /**
     * Handles disconnect event for a specific connector.
     * @param {string} connectorId - The ID of the connector
     */
    onDisconnect(connectorId) {
        this.removeProviderListeners(connectorId);
        this.deleteConnection(connectorId);
        if (HelpersUtil.isLowerCaseMatch(this.getConnectorId(ConstantsUtil$3.CHAIN.EVM), connectorId)) {
            this.emitFirstAvailableConnection();
        }
        if (this.connections.length === 0) {
            this.emit('disconnect');
        }
    }
    /**
     * Handles chain changed event for a specific connector.
     * @param {string} chainId - The ID of the chain that changed
     * @param {string} connectorId - The ID of the connector
     */
    onChainChanged(chainId, connectorId) {
        const formattedChainId = typeof chainId === 'string' && chainId.startsWith('0x')
            ? EthersHelpersUtil.hexStringToNumber(chainId).toString()
            : chainId.toString();
        const connection = this.connectionManager?.getConnection({
            connectorId,
            connections: this.connections,
            connectors: this.connectors
        });
        const caipNetwork = this.getCaipNetworks()
            .filter(n => n.chainNamespace === this.namespace)
            .find(n => n.id.toString() === formattedChainId);
        if (connection) {
            this.addConnection({
                connectorId,
                accounts: connection.accounts,
                caipNetwork
            });
        }
        if (HelpersUtil.isLowerCaseMatch(this.getConnectorId(ConstantsUtil$3.CHAIN.EVM), connectorId)) {
            this.emit('switchNetwork', { chainId: formattedChainId });
        }
    }
    /**
     * Listens to provider events for a specific connector.
     * @param {string} connectorId - The ID of the connector
     * @param {Provider | CombinedProvider} provider - The provider to listen to
     */
    listenProviderEvents(connectorId, provider) {
        if (IGNORED_CONNECTOR_IDS_FOR_LISTENER.includes(connectorId)) {
            return;
        }
        const accountsChangedHandler = (accounts) => this.onAccountsChanged(accounts, connectorId);
        const chainChangedHandler = (chainId) => this.onChainChanged(chainId, connectorId);
        const disconnectHandler = () => this.onDisconnect(connectorId);
        if (!this.providerHandlers[connectorId]) {
            provider.on('disconnect', disconnectHandler);
            provider.on('accountsChanged', accountsChangedHandler);
            provider.on('chainChanged', chainChangedHandler);
            this.providerHandlers[connectorId] = {
                provider,
                disconnect: disconnectHandler,
                accountsChanged: accountsChangedHandler,
                chainChanged: chainChangedHandler
            };
        }
    }
    /**
     * Removes provider listeners for a specific connector.
     * @param {string} connectorId - The ID of the connector
     */
    removeProviderListeners(connectorId) {
        if (this.providerHandlers[connectorId]) {
            const { provider, disconnect, accountsChanged, chainChanged } = this.providerHandlers[connectorId];
            provider.removeListener('disconnect', disconnect);
            provider.removeListener('accountsChanged', accountsChanged);
            provider.removeListener('chainChanged', chainChanged);
            this.providerHandlers[connectorId] = null;
        }
    }
    /**
     * Emits the first available connection.
     */
    emitFirstAvailableConnection() {
        const connection = this.connectionManager?.getConnection({
            connections: this.connections,
            connectors: this.connectors
        });
        if (connection) {
            const [account] = connection.accounts;
            this.emit('accountChanged', {
                address: account?.address,
                chainId: connection.caipNetwork?.id,
                connector: connection.connector
            });
        }
    }
}

class UniversalAdapter extends AdapterBlueprint {
    async setUniversalProvider(universalProvider) {
        if (!this.namespace) {
            throw new Error('UniversalAdapter:setUniversalProvider - namespace is required');
        }
        this.addConnector(new WalletConnectConnector({
            provider: universalProvider,
            caipNetworks: this.getCaipNetworks(),
            namespace: this.namespace
        }));
        return Promise.resolve();
    }
    async connect(params) {
        return Promise.resolve({
            id: 'WALLET_CONNECT',
            type: 'WALLET_CONNECT',
            chainId: Number(params.chainId),
            provider: this.provider,
            address: ''
        });
    }
    async disconnect() {
        try {
            const connector = this.getWalletConnectConnector();
            await connector.disconnect();
            this.emit('disconnect');
        }
        catch (error) {
            console.warn('UniversalAdapter:disconnect - error', error);
        }
        return { connections: [] };
    }
    syncConnections() {
        return Promise.resolve();
    }
    async getAccounts({ namespace }) {
        const provider = this.provider;
        const addresses = (provider?.session?.namespaces?.[namespace]?.accounts
            ?.map(account => {
            const [, , address] = account.split(':');
            return address;
        })
            .filter((address, index, self) => self.indexOf(address) === index) || []);
        return Promise.resolve({
            accounts: addresses.map(address => CoreHelperUtil.createAccount(namespace, address, namespace === 'bip122' ? 'payment' : 'eoa'))
        });
    }
    async syncConnectors() {
        return Promise.resolve();
    }
    async getBalance(params) {
        const isBalanceSupported = params.caipNetwork &&
            ConstantsUtil$2.BALANCE_SUPPORTED_CHAINS.includes(params.caipNetwork?.chainNamespace);
        if (!isBalanceSupported || params.caipNetwork?.testnet) {
            return {
                balance: '0.00',
                symbol: params.caipNetwork?.nativeCurrency.symbol || ''
            };
        }
        const accountData = ChainController.getAccountData();
        if (accountData?.balanceLoading &&
            params.chainId === ChainController.state.activeCaipNetwork?.id) {
            return {
                balance: accountData?.balance || '0.00',
                symbol: accountData?.balanceSymbol || ''
            };
        }
        const balances = await ChainController.fetchTokenBalance();
        const balance = balances.find(b => b.chainId === `${params.caipNetwork?.chainNamespace}:${params.chainId}` &&
            b.symbol === params.caipNetwork?.nativeCurrency.symbol);
        return {
            balance: balance?.quantity.numeric || '0.00',
            symbol: balance?.symbol || params.caipNetwork?.nativeCurrency.symbol || ''
        };
    }
    async signMessage(params) {
        const { provider, message, address } = params;
        if (!provider) {
            throw new Error('UniversalAdapter:signMessage - provider is undefined');
        }
        let signature = '';
        if (ChainController.state.activeCaipNetwork?.chainNamespace === ConstantsUtil$3.CHAIN.SOLANA) {
            const response = await provider.request({
                method: 'solana_signMessage',
                params: {
                    message: bs58.encode(new TextEncoder().encode(message)),
                    pubkey: address
                }
            }, ChainController.state.activeCaipNetwork?.caipNetworkId);
            signature = response.signature;
        }
        else {
            signature = await provider.request({
                method: 'personal_sign',
                params: [message, address]
            }, ChainController.state.activeCaipNetwork?.caipNetworkId);
        }
        return { signature };
    }
    // -- Transaction methods ---------------------------------------------------
    /**
     *
     * These methods are supported only on `wagmi` and `ethers` since the Solana SDK does not support them in the same way.
     * These function definition is to have a type parity between the clients. Currently not in use.
     */
    async estimateGas() {
        return Promise.resolve({
            gas: BigInt(0)
        });
    }
    async sendTransaction() {
        return Promise.resolve({
            hash: ''
        });
    }
    walletGetAssets(_params) {
        return Promise.resolve({});
    }
    async writeContract() {
        return Promise.resolve({
            hash: ''
        });
    }
    emitFirstAvailableConnection() {
        return undefined;
    }
    parseUnits() {
        return 0n;
    }
    formatUnits() {
        return '0';
    }
    async getCapabilities() {
        return Promise.resolve({});
    }
    async grantPermissions() {
        return Promise.resolve({});
    }
    async revokePermissions() {
        return Promise.resolve('0x');
    }
    async syncConnection() {
        return Promise.resolve({
            id: 'WALLET_CONNECT',
            type: 'WALLET_CONNECT',
            chainId: 1,
            provider: this.provider,
            address: ''
        });
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async switchNetwork(params) {
        const { caipNetwork } = params;
        const connector = this.getWalletConnectConnector();
        if (caipNetwork.chainNamespace === ConstantsUtil$3.CHAIN.EVM) {
            try {
                await connector.provider?.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: toHex$1(caipNetwork.id) }]
                });
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (switchError) {
                if (switchError.code === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
                    switchError.code === WcConstantsUtil.ERROR_INVALID_CHAIN_ID ||
                    switchError.code === WcConstantsUtil.ERROR_CODE_DEFAULT ||
                    switchError?.data?.originalError?.code ===
                        WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
                    try {
                        await connector.provider?.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: toHex$1(caipNetwork.id),
                                    rpcUrls: [caipNetwork?.rpcUrls['chainDefault']?.http],
                                    chainName: caipNetwork.name,
                                    nativeCurrency: caipNetwork.nativeCurrency,
                                    blockExplorerUrls: [caipNetwork.blockExplorers?.default.url]
                                }
                            ]
                        });
                    }
                    catch (error) {
                        throw new Error('Chain is not supported');
                    }
                }
            }
        }
        connector.provider.setDefaultChain(caipNetwork.caipNetworkId);
    }
    getWalletConnectProvider() {
        const connector = this.connectors.find(c => c.type === 'WALLET_CONNECT');
        const provider = connector?.provider;
        return provider;
    }
}

const FEATURE_KEYS = [
    'email',
    'socials',
    'swaps',
    'onramp',
    'activity',
    'reownBranding',
    'multiWallet',
    'emailCapture',
    'payWithExchange',
    'payments',
    'reownAuthentication'
];
const featureConfig = {
    email: {
        apiFeatureName: 'social_login',
        localFeatureName: 'email',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => {
            if (!apiConfig?.config) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.includes('email');
        },
        processFallback: (localValue) => {
            if (localValue === undefined) {
                return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.email;
            }
            return Boolean(localValue);
        }
    },
    socials: {
        apiFeatureName: 'social_login',
        localFeatureName: 'socials',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => {
            if (!apiConfig?.config) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.length > 0
                ? config.filter((s) => s !== 'email')
                : false;
        },
        processFallback: (localValue) => {
            if (localValue === undefined) {
                return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.socials;
            }
            if (typeof localValue === 'boolean') {
                return localValue ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.socials : false;
            }
            return localValue;
        }
    },
    swaps: {
        apiFeatureName: 'swap',
        localFeatureName: 'swaps',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => {
            if (!apiConfig?.config) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
        },
        processFallback: (localValue) => {
            if (localValue === undefined) {
                return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.swaps;
            }
            if (typeof localValue === 'boolean') {
                return localValue ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.swaps : false;
            }
            return localValue;
        }
    },
    onramp: {
        apiFeatureName: 'onramp',
        localFeatureName: 'onramp',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => {
            if (!apiConfig?.config) {
                return false;
            }
            const config = apiConfig.config;
            return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
        },
        processFallback: (localValue) => {
            if (localValue === undefined) {
                return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.onramp;
            }
            if (typeof localValue === 'boolean') {
                return localValue ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.onramp : false;
            }
            return localValue;
        }
    },
    activity: {
        apiFeatureName: 'activity',
        localFeatureName: 'history',
        returnType: false,
        isLegacy: true,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
        processFallback: (localValue) => {
            if (localValue === undefined) {
                return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.activity;
            }
            return Boolean(localValue);
        }
    },
    reownBranding: {
        apiFeatureName: 'reown_branding',
        localFeatureName: 'reownBranding',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
        processFallback: (localValue) => {
            if (localValue === undefined) {
                return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.reownBranding;
            }
            return Boolean(localValue);
        }
    },
    emailCapture: {
        apiFeatureName: 'email_capture',
        localFeatureName: 'emailCapture',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => apiConfig.isEnabled && (apiConfig.config ?? []),
        processFallback: (_localValue) => false
    },
    multiWallet: {
        apiFeatureName: 'multi_wallet',
        localFeatureName: 'multiWallet',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
        processFallback: () => ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.multiWallet
    },
    payWithExchange: {
        apiFeatureName: 'fund_from_exchange',
        localFeatureName: 'payWithExchange',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
        processFallback: () => ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.payWithExchange
    },
    payments: {
        apiFeatureName: 'payments',
        localFeatureName: 'payments',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
        processFallback: () => ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.payments
    },
    reownAuthentication: {
        apiFeatureName: 'reown_authentication',
        localFeatureName: 'reownAuthentication',
        returnType: false,
        isLegacy: false,
        isAvailableOnBasic: false,
        processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
        processFallback: (localValue) => {
            if (typeof localValue === 'undefined') {
                return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.reownAuthentication;
            }
            return Boolean(localValue);
        }
    }
};
const ConfigUtil = {
    localSettingsOverridden: new Set(),
    getApiConfig(id, apiProjectConfig) {
        return apiProjectConfig?.find((f) => f.id === id);
    },
    addWarning(localFeatureValue, featureKey) {
        if (localFeatureValue !== undefined) {
            const config = featureConfig[featureKey];
            const warningName = config.isLegacy
                ? `"features.${config.localFeatureName}" (now "${featureKey}")`
                : `"features.${featureKey}"`;
            this.localSettingsOverridden.add(warningName);
        }
    },
    processFeature(featureKey, localFeatures, apiProjectConfig, useApi, isBasic) {
        const config = featureConfig[featureKey];
        const localValue = localFeatures[config.localFeatureName];
        if (isBasic && !config.isAvailableOnBasic) {
            return false;
        }
        if (useApi) {
            const apiConfig = this.getApiConfig(config.apiFeatureName, apiProjectConfig);
            if (apiConfig?.config === null) {
                return this.processFallbackFeature(featureKey, localValue);
            }
            if (!apiConfig?.config) {
                return false;
            }
            if (localValue !== undefined) {
                this.addWarning(localValue, featureKey);
            }
            return this.processApiFeature(featureKey, apiConfig);
        }
        return this.processFallbackFeature(featureKey, localValue);
    },
    processApiFeature(featureKey, apiConfig) {
        return featureConfig[featureKey].processApi(apiConfig);
    },
    processFallbackFeature(featureKey, localValue) {
        return featureConfig[featureKey].processFallback(localValue);
    },
    async fetchRemoteFeatures(config) {
        const isBasic = config.basic ?? false;
        const localFeatures = config.features || {};
        this.localSettingsOverridden.clear();
        let apiProjectConfig = null;
        let shouldUseApiConfig = false;
        try {
            apiProjectConfig = await ApiController.fetchProjectConfig();
            shouldUseApiConfig = apiProjectConfig !== null && apiProjectConfig !== undefined;
        }
        catch (e) {
            console.warn('[Reown Config] Failed to fetch remote project configuration. Using local/default values.', e);
        }
        const remoteFeaturesConfig = shouldUseApiConfig && !isBasic
            ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES
            : ConstantsUtil$2.DEFAULT_REMOTE_FEATURES_DISABLED;
        try {
            for (const featureKey of FEATURE_KEYS) {
                const result = this.processFeature(featureKey, localFeatures, apiProjectConfig, shouldUseApiConfig, isBasic);
                Object.assign(remoteFeaturesConfig, { [featureKey]: result });
            }
        }
        catch (e) {
            console.warn('[Reown Config] Failed to process the configuration from Cloud. Using default values.', e);
            return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES;
        }
        if (shouldUseApiConfig && this.localSettingsOverridden.size > 0) {
            const warningMessage = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(', ')} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
            AlertController.open({
                debugMessage: ErrorUtil.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(warningMessage)
            }, 'warning');
        }
        return remoteFeaturesConfig;
    }
};

class AppKitBaseClient {
    constructor(options) {
        this.chainNamespaces = [];
        this.features = {};
        this.remoteFeatures = {};
        this.reportedAlertErrors = {};
        // -- Public Internal ---------------------------------------------------
        this.getCaipNetwork = (chainNamespace, id) => {
            if (chainNamespace) {
                const caipNetworkWithId = ChainController.getCaipNetworks(chainNamespace)?.find(c => c.id === id);
                if (caipNetworkWithId) {
                    return caipNetworkWithId;
                }
                const namespaceCaipNetwork = ChainController.getNetworkData(chainNamespace)?.caipNetwork;
                if (namespaceCaipNetwork) {
                    return namespaceCaipNetwork;
                }
                const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(chainNamespace);
                return requestedCaipNetworks.filter(c => c.chainNamespace === chainNamespace)?.[0];
            }
            return ChainController.state.activeCaipNetwork || this.defaultCaipNetwork;
        };
        this.getCaipNetworkId = () => {
            const network = this.getCaipNetwork();
            if (network) {
                return network.id;
            }
            return undefined;
        };
        this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
        this.getActiveChainNamespace = () => ChainController.state.activeChain;
        this.setRequestedCaipNetworks = (requestedCaipNetworks, chain) => {
            ChainController.setRequestedCaipNetworks(requestedCaipNetworks, chain);
        };
        this.getApprovedCaipNetworkIds = () => ChainController.getAllApprovedCaipNetworkIds();
        this.getCaipAddress = (chainNamespace) => {
            if (ChainController.state.activeChain === chainNamespace || !chainNamespace) {
                return ChainController.state.activeCaipAddress;
            }
            return ChainController.state.chains.get(chainNamespace)?.accountState?.caipAddress;
        };
        this.setClientId = clientId => {
            BlockchainApiController.setClientId(clientId);
        };
        this.getProvider = (namespace) => ProviderController.getProvider(namespace);
        this.getProviderType = (namespace) => ProviderController.getProviderId(namespace);
        this.getPreferredAccountType = (namespace) => getPreferredAccountType(namespace);
        this.setCaipAddress = (caipAddress, chain, shouldRefresh = false) => {
            ChainController.setAccountProp('caipAddress', caipAddress, chain, shouldRefresh);
            ChainController.setAccountProp('address', CoreHelperUtil.getPlainAddress(caipAddress), chain, shouldRefresh);
        };
        this.setBalance = (balance, balanceSymbol, chain) => {
            ChainController.setAccountProp('balance', balance, chain);
            ChainController.setAccountProp('balanceSymbol', balanceSymbol, chain);
        };
        this.setProfileName = (profileName, chain) => {
            ChainController.setAccountProp('profileName', profileName, chain);
        };
        this.setProfileImage = (profileImage, chain) => {
            ChainController.setAccountProp('profileImage', profileImage, chain);
        };
        this.setUser = (user, chain) => {
            ChainController.setAccountProp('user', user, chain);
        };
        this.resetAccount = (chain) => {
            ChainController.resetAccount(chain);
        };
        this.setCaipNetwork = caipNetwork => {
            ChainController.setActiveCaipNetwork(caipNetwork);
        };
        this.setCaipNetworkOfNamespace = (caipNetwork, chainNamespace) => {
            ChainController.setChainNetworkData(chainNamespace, { caipNetwork });
        };
        this.setStatus = (status, chain) => {
            ChainController.setAccountProp('status', status, chain);
            // If at least one namespace is connected, set the connection status
            if (ConnectorController.isConnected()) {
                StorageUtil.setConnectionStatus('connected');
            }
            else {
                StorageUtil.setConnectionStatus('disconnected');
            }
        };
        this.getAddressByChainNamespace = (chainNamespace) => ChainController.getAccountData(chainNamespace)?.address;
        this.setConnectors = connectors => {
            const allConnectors = [...ConnectorController.state.allConnectors, ...connectors];
            ConnectorController.setConnectors(allConnectors);
        };
        this.setConnections = (connections, chainNamespace) => {
            StorageUtil.setConnections(connections, chainNamespace);
            ConnectionController.setConnections(connections, chainNamespace);
        };
        this.fetchIdentity = request => BlockchainApiController.fetchIdentity(request);
        this.getReownName = address => EnsController.getNamesForAddress(address);
        this.getConnectors = () => ConnectorController.getConnectors();
        this.getConnectorImage = connector => AssetUtil.getConnectorImage(connector);
        this.getConnections = (namespace) => {
            if (!this.remoteFeatures.multiWallet) {
                AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, 'info');
                return [];
            }
            return ConnectionControllerUtil.getConnectionsData(namespace).connections;
        };
        this.getRecentConnections = (namespace) => {
            if (!this.remoteFeatures.multiWallet) {
                AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, 'info');
                return [];
            }
            return ConnectionControllerUtil.getConnectionsData(namespace).recentConnections;
        };
        this.switchConnection = async (params) => {
            if (!this.remoteFeatures.multiWallet) {
                AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, 'info');
                return;
            }
            await ConnectionController.switchConnection(params);
        };
        this.deleteConnection = params => {
            if (!this.remoteFeatures.multiWallet) {
                AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, 'info');
                return;
            }
            StorageUtil.deleteAddressFromConnection(params);
            ConnectionController.syncStorageConnections();
        };
        this.setConnectedWalletInfo = (connectedWalletInfo, chain) => {
            const type = ProviderController.getProviderId(chain);
            const walletInfo = connectedWalletInfo ? { ...connectedWalletInfo, type } : undefined;
            ChainController.setAccountProp('connectedWalletInfo', walletInfo, chain);
        };
        this.getIsConnectedState = () => Boolean(ChainController.state.activeCaipAddress);
        this.addAddressLabel = (address, label, chain) => {
            const addressLabels = ChainController.getAccountData(chain)?.addressLabels || {};
            ChainController.setAccountProp('addressLabels', { ...addressLabels, [address]: label }, chain);
        };
        this.removeAddressLabel = (address, chain) => {
            const addressLabels = ChainController.getAccountData(chain)?.addressLabels || {};
            ChainController.setAccountProp('addressLabels', { ...addressLabels, [address]: undefined }, chain);
        };
        this.getAddress = (chainNamespace) => {
            const namespace = chainNamespace || ChainController.state.activeChain;
            return ChainController.getAccountData(namespace)?.address;
        };
        this.setApprovedCaipNetworksData = namespace => ChainController.setApprovedCaipNetworksData(namespace);
        this.resetNetwork = (namespace) => {
            ChainController.resetNetwork(namespace);
        };
        this.addConnector = connector => {
            ConnectorController.addConnector(connector);
        };
        this.resetWcConnection = () => {
            ConnectionController.resetWcConnection();
        };
        this.setAddressExplorerUrl = (addressExplorerUrl, chain) => {
            ChainController.setAccountProp('addressExplorerUrl', addressExplorerUrl, chain);
        };
        this.setSmartAccountDeployed = (isDeployed, chain) => {
            ChainController.setAccountProp('smartAccountDeployed', isDeployed, chain);
        };
        this.setPreferredAccountType = (preferredAccountType, chain) => {
            ChainController.setAccountProp('preferredAccountType', preferredAccountType, chain);
        };
        this.setEIP6963Enabled = enabled => {
            OptionsController.setEIP6963Enabled(enabled);
        };
        this.handleUnsafeRPCRequest = () => {
            if (this.isOpen()) {
                // If we are on the modal but there is no transaction stack, close the modal
                if (this.isTransactionStackEmpty()) {
                    return;
                }
                // Check if we need to replace or redirect
                this.redirect('ApproveTransaction');
            }
            else {
                // If called from outside the modal, open ApproveTransaction
                this.open({ view: 'ApproveTransaction' });
            }
        };
        this.options = options;
        this.version = options.sdkVersion;
        this.caipNetworks = this.extendCaipNetworks(options);
        this.chainNamespaces = this.getChainNamespacesSet(options.adapters, this.caipNetworks);
        this.defaultCaipNetwork = this.extendDefaultCaipNetwork(options);
        this.chainAdapters = this.createAdapters(options.adapters);
        this.readyPromise = this.initialize(options);
        SemVerUtils.checkSDKVersion(options.sdkVersion);
    }
    getChainNamespacesSet(adapters, caipNetworks) {
        const adapterNamespaces = adapters
            ?.map(adapter => adapter.namespace)
            .filter((namespace) => Boolean(namespace));
        if (adapterNamespaces?.length) {
            return [...new Set(adapterNamespaces)];
        }
        const networkNamespaces = caipNetworks?.map(network => network.chainNamespace);
        return [...new Set(networkNamespaces)];
    }
    async initialize(options) {
        this.initializeProjectSettings(options);
        this.initControllers(options);
        await this.initChainAdapters();
        this.sendInitializeEvent(options);
        if (OptionsController.state.enableReconnect) {
            await this.syncExistingConnection();
            await this.syncAdapterConnections();
        }
        else {
            await this.unSyncExistingConnection();
        }
        this.remoteFeatures = await ConfigUtil.fetchRemoteFeatures(options);
        OptionsController.setRemoteFeatures(this.remoteFeatures);
        if (this.remoteFeatures.onramp) {
            OnRampController.setOnrampProviders(this.remoteFeatures.onramp);
        }
        // Check allowed origins only if email or social features are enabled
        if (OptionsController.state.remoteFeatures?.email ||
            (Array.isArray(OptionsController.state.remoteFeatures?.socials) &&
                OptionsController.state.remoteFeatures?.socials.length > 0)) {
            await this.checkAllowedOrigins();
        }
        if (OptionsController.state.features?.reownAuthentication ||
            OptionsController.state.remoteFeatures?.reownAuthentication) {
            const { ReownAuthentication } = await __vitePreload(async () => { const { ReownAuthentication } = await import('./features-B_rtJqSW.js');return { ReownAuthentication }},true              ?__vite__mapDeps([9,1,2,4]):void 0);
            const currentSIWX = OptionsController.state.siwx;
            if (!(currentSIWX instanceof ReownAuthentication)) {
                if (currentSIWX) {
                    console.warn('ReownAuthentication option is enabled, SIWX configuration will be overridden.');
                }
                OptionsController.setSIWX(new ReownAuthentication());
            }
            // If siwx is already configured for ReownAuthentication we keep the current instance
        }
    }
    async openSend(args) {
        const namespaceToUse = args.namespace || ChainController.state.activeChain;
        const caipAddress = this.getCaipAddress(namespaceToUse);
        const chainId = this.getCaipNetwork(namespaceToUse)?.id;
        if (!caipAddress) {
            throw new Error('openSend: caipAddress not found');
        }
        if (chainId?.toString() !== args.chainId.toString()) {
            const caipNetwork = ChainController.getCaipNetworkById(args.chainId, namespaceToUse);
            if (!caipNetwork) {
                throw new Error(`openSend: caipNetwork with chainId ${args.chainId} not found`);
            }
            await this.switchNetwork(caipNetwork, { throwOnFailure: true });
        }
        try {
            const symbol = TokenUtil.getTokenSymbolByAddress(args.assetAddress);
            if (symbol) {
                await ApiController.fetchTokenImages([symbol]);
            }
        }
        catch {
            /* Ignore */
        }
        await ModalController.open({
            view: 'WalletSend',
            data: { send: args }
        });
        return new Promise((resolve, reject) => {
            const unsubscribe = SendController.subscribeKey('hash', hash => {
                if (hash) {
                    cleanup();
                    resolve({ hash });
                }
            });
            const unsubscribeModal = ModalController.subscribe(modal => {
                if (!modal.open) {
                    cleanup();
                    reject(new Error('Modal closed'));
                }
            });
            const cleanup = this.createCleanupHandler([unsubscribe, unsubscribeModal]);
        });
    }
    toModalOptions() {
        function isSwap(options) {
            return options?.view === 'Swap';
        }
        function isSend(options) {
            return options?.view === 'WalletSend';
        }
        return {
            isSwap,
            isSend
        };
    }
    async checkAllowedOrigins() {
        try {
            const allowedOrigins = await ApiController.fetchAllowedOrigins();
            if (!CoreHelperUtil.isClient()) {
                return;
            }
            const currentOrigin = window.location.origin;
            const isOriginAllowed = WcHelpersUtil.isOriginAllowed(currentOrigin, allowedOrigins, WcConstantsUtil.DEFAULT_ALLOWED_ANCESTORS);
            if (!isOriginAllowed) {
                AlertController.open(ErrorUtil.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, 'error');
            }
        }
        catch (error) {
            if (!(error instanceof Error)) {
                return;
            }
            switch (error.message) {
                case 'RATE_LIMITED':
                    AlertController.open(ErrorUtil.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, 'error');
                    break;
                case 'SERVER_ERROR': {
                    const originalError = error.cause instanceof Error ? error.cause : error;
                    AlertController.open({
                        displayMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
                        debugMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(originalError.message)
                    }, 'error');
                    break;
                }
            }
        }
    }
    createCleanupHandler(unsubscribeFunctions) {
        return () => {
            unsubscribeFunctions.forEach(unsubscribe => {
                try {
                    unsubscribe();
                }
                catch {
                    // Ignore cleanup errors
                }
            });
        };
    }
    sendInitializeEvent(options) {
        const { ...optionsCopy } = options;
        delete optionsCopy.adapters;
        delete optionsCopy.universalProvider;
        EventsController.sendEvent({
            type: 'track',
            event: 'INITIALIZE',
            properties: {
                ...optionsCopy,
                networks: options.networks.map(n => n.id),
                siweConfig: {
                    options: options.siweConfig?.options || {}
                }
            }
        });
    }
    // -- Controllers initialization ---------------------------------------------------
    initControllers(options) {
        this.initializeOptionsController(options);
        this.initializeChainController(options);
        this.initializeThemeController(options);
        this.initializeConnectionController(options);
        this.initializeConnectorController();
    }
    initializeThemeController(options) {
        if (options.themeMode) {
            ThemeController.setThemeMode(options.themeMode);
        }
        if (options.themeVariables) {
            ThemeController.setThemeVariables(options.themeVariables);
        }
    }
    initializeChainController(options) {
        if (!this.connectionControllerClient || !this.networkControllerClient) {
            throw new Error('ConnectionControllerClient and NetworkControllerClient must be set');
        }
        ChainController.initialize(options.adapters ?? [], this.caipNetworks, {
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient
        });
        const network = this.getDefaultNetwork();
        if (network) {
            ChainController.setActiveCaipNetwork(network);
        }
    }
    initializeConnectionController(options) {
        ConnectionController.initialize(options.adapters ?? []);
        ConnectionController.setWcBasic(options.basic ?? false);
    }
    initializeConnectorController() {
        ConnectorController.initialize(this.chainNamespaces);
    }
    initializeProjectSettings(options) {
        OptionsController.setProjectId(options.projectId);
        OptionsController.setSdkVersion(options.sdkVersion);
    }
    initializeOptionsController(options) {
        OptionsController.setDebug(options.debug !== false);
        // On by default
        OptionsController.setEnableWalletGuide(options.enableWalletGuide !== false);
        OptionsController.setEnableWallets(options.enableWallets !== false);
        OptionsController.setEIP6963Enabled(options.enableEIP6963 !== false);
        OptionsController.setEnableNetworkSwitch(options.enableNetworkSwitch !== false);
        OptionsController.setEnableReconnect(options.enableReconnect !== false);
        OptionsController.setEnableMobileFullScreen(options.enableMobileFullScreen === true);
        OptionsController.setEnableAuthLogger(options.enableAuthLogger !== false);
        OptionsController.setCustomRpcUrls(options.customRpcUrls);
        OptionsController.setEnableEmbedded(options.enableEmbedded);
        OptionsController.setAllWallets(options.allWallets);
        OptionsController.setIncludeWalletIds(options.includeWalletIds);
        OptionsController.setExcludeWalletIds(options.excludeWalletIds);
        OptionsController.setFeaturedWalletIds(options.featuredWalletIds);
        OptionsController.setTokens(options.tokens);
        OptionsController.setTermsConditionsUrl(options.termsConditionsUrl);
        OptionsController.setPrivacyPolicyUrl(options.privacyPolicyUrl);
        OptionsController.setCustomWallets(options.customWallets);
        OptionsController.setFeatures(options.features);
        OptionsController.setAllowUnsupportedChain(options.allowUnsupportedChain);
        OptionsController.setUniversalProviderConfigOverride(options.universalProviderConfigOverride);
        OptionsController.setPreferUniversalLinks(options.experimental_preferUniversalLinks);
        // Save option in controller
        OptionsController.setDefaultAccountTypes(options.defaultAccountTypes);
        const defaultMetaData = this.getDefaultMetaData();
        if (!options.metadata && defaultMetaData) {
            options.metadata = defaultMetaData;
        }
        OptionsController.setMetadata(options.metadata);
        OptionsController.setDisableAppend(options.disableAppend);
        OptionsController.setEnableEmbedded(options.enableEmbedded);
        OptionsController.setSIWX(options.siwx);
        this.features = OptionsController.state.features ?? {};
        if (!options.projectId) {
            AlertController.open(ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, 'error');
            return;
        }
        const evmAdapter = options.adapters?.find(adapter => adapter.namespace === ConstantsUtil$3.CHAIN.EVM);
        // Set the SIWE client for EVM chains
        if (evmAdapter) {
            if (options.siweConfig) {
                if (options.siwx) {
                    throw new Error('Cannot set both `siweConfig` and `siwx` options');
                }
                OptionsController.setSIWX(options.siweConfig.mapToSIWX());
            }
        }
    }
    getDefaultMetaData() {
        if (CoreHelperUtil.isClient()) {
            return {
                name: document.getElementsByTagName('title')?.[0]?.textContent || '',
                description: document.querySelector('meta[property="og:description"]')?.content || '',
                url: window.location.origin,
                icons: [document.querySelector('link[rel~="icon"]')?.href || '']
            };
        }
        return null;
    }
    // -- Network Initialization ---------------------------------------------------
    setUnsupportedNetwork(chainId) {
        const namespace = this.getActiveChainNamespace();
        if (namespace) {
            const unsupportedNetwork = CaipNetworksUtil.getUnsupportedNetwork(`${namespace}:${chainId}`);
            ChainController.setActiveCaipNetwork(unsupportedNetwork);
        }
    }
    getDefaultNetwork() {
        return CaipNetworksUtil.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(network, options) {
        const extendedNetwork = CaipNetworksUtil.extendCaipNetwork(network, {
            customNetworkImageUrls: options.chainImages,
            projectId: options.projectId
        });
        return extendedNetwork;
    }
    extendCaipNetworks(options) {
        const extendedNetworks = CaipNetworksUtil.extendCaipNetworks(options.networks, {
            customNetworkImageUrls: options.chainImages,
            customRpcUrls: options.customRpcUrls,
            projectId: options.projectId
        });
        return extendedNetworks;
    }
    extendDefaultCaipNetwork(options) {
        const defaultNetwork = options.networks.find(n => n.id === options.defaultNetwork?.id);
        const extendedNetwork = defaultNetwork
            ? CaipNetworksUtil.extendCaipNetwork(defaultNetwork, {
                customNetworkImageUrls: options.chainImages,
                customRpcUrls: options.customRpcUrls,
                projectId: options.projectId
            })
            : undefined;
        return extendedNetwork;
    }
    /**
     * Disconnects a connector with the given namespace and id. If the connector id is not provided, disconnects the adapter (namespace).
     * @param namespace ChainNamespace
     * @param id string
     * @returns
     */
    async disconnectConnector(namespace, id) {
        try {
            this.setLoading(true, namespace);
            let disconnectResult = {
                connections: []
            };
            const adapter = this.getAdapter(namespace);
            const caipAddress = ChainController.state.chains.get(namespace)?.accountState?.caipAddress;
            /**
             * When the page loaded, the controller doesn't have address yet.
             * To disconnect, we are checking enableReconnect flag to disconnect the namespace.
             */
            if ((caipAddress || !OptionsController.state.enableReconnect) && adapter?.disconnect) {
                disconnectResult = await adapter.disconnect({ id });
            }
            this.setLoading(false, namespace);
            return disconnectResult;
        }
        catch (error) {
            this.setLoading(false, namespace);
            throw new Error(`Failed to disconnect chains: ${error.message}`);
        }
    }
    // -- Client Initialization ---------------------------------------------------
    createClients() {
        this.connectionControllerClient = {
            connectWalletConnect: async () => {
                const activeChain = ChainController.state.activeChain;
                const adapter = this.getAdapter(activeChain);
                const chainId = this.getCaipNetwork(activeChain)?.id;
                const connections = ConnectionController.getConnections(activeChain);
                const isMultiWallet = this.remoteFeatures.multiWallet;
                const hasConnections = connections.length > 0;
                if (!adapter) {
                    throw new Error('Adapter not found');
                }
                const result = await adapter.connectWalletConnect(chainId);
                const shouldClose = !hasConnections || !isMultiWallet;
                if (shouldClose) {
                    this.close();
                }
                this.setClientId(result?.clientId || null);
                StorageUtil.setConnectedNamespaces([...ChainController.state.chains.keys()]);
                await this.syncWalletConnectAccount();
                await SIWXUtil.initializeIfEnabled();
            },
            connectExternal: async (params) => {
                const connectResult = await this.onConnectExternal(params);
                await this.connectInactiveNamespaces(params, connectResult);
                return connectResult ? { address: connectResult.address } : undefined;
            },
            reconnectExternal: async ({ id, info, type, provider }) => {
                const namespace = ChainController.state.activeChain;
                const adapter = this.getAdapter(namespace);
                if (!namespace) {
                    throw new Error('reconnectExternal: namespace not found');
                }
                if (!adapter) {
                    throw new Error('reconnectExternal: adapter not found');
                }
                if (adapter?.reconnect) {
                    await adapter?.reconnect({ id, info, type, provider, chainId: this.getCaipNetwork()?.id });
                    StorageUtil.addConnectedNamespace(namespace);
                    this.syncConnectedWalletInfo(namespace);
                }
            },
            disconnectConnector: async (params) => {
                await this.disconnectConnector(params.namespace, params.id);
            },
            disconnect: async (params) => {
                const { id: connectorIdParam, chainNamespace, initialDisconnect } = params || {};
                const namespace = chainNamespace || ChainController.state.activeChain;
                const namespaceConnectorId = ConnectorController.getConnectorId(namespace);
                const isAuth = connectorIdParam === ConstantsUtil$3.CONNECTOR_ID.AUTH ||
                    namespaceConnectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
                const isWalletConnect = connectorIdParam === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT ||
                    namespaceConnectorId === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
                try {
                    const namespaces = Array.from(ChainController.state.chains.keys());
                    let namespacesToDisconnect = chainNamespace ? [chainNamespace] : namespaces;
                    /*
                     * If the connector is WalletConnect or Auth, disconnect all namespaces
                     * since they share a single connector instance across all adapters
                     */
                    if (isWalletConnect || isAuth) {
                        namespacesToDisconnect = namespaces;
                    }
                    const disconnectPromises = namespacesToDisconnect.map(async (ns) => {
                        const currentConnectorId = ConnectorController.getConnectorId(ns);
                        const connectorIdToDisconnect = connectorIdParam || currentConnectorId;
                        const disconnectData = await this.disconnectConnector(ns, connectorIdToDisconnect);
                        if (disconnectData) {
                            if (isAuth) {
                                StorageUtil.deleteConnectedSocialProvider();
                            }
                            disconnectData.connections.forEach(connection => {
                                StorageUtil.addDisconnectedConnectorId(connection.connectorId, ns);
                            });
                        }
                        if (initialDisconnect) {
                            this.onDisconnectNamespace({ chainNamespace: ns, closeModal: false });
                        }
                    });
                    const disconnectResults = await Promise.allSettled(disconnectPromises);
                    SendController.resetSend();
                    ConnectionController.resetWcConnection();
                    if (SIWXUtil.getSIWX()?.signOutOnDisconnect) {
                        await SIWXUtil.clearSessions();
                    }
                    ConnectorController.setFilterByNamespace(undefined);
                    ConnectionController.syncStorageConnections();
                    const failures = disconnectResults.filter((result) => result.status === 'rejected');
                    if (failures.length > 0) {
                        throw new Error(failures.map(f => f.reason.message).join(', '));
                    }
                    EventsController.sendEvent({
                        type: 'track',
                        event: 'DISCONNECT_SUCCESS',
                        properties: {
                            namespace: chainNamespace || 'all'
                        }
                    });
                }
                catch (error) {
                    throw new Error(`Failed to disconnect chains: ${error.message}`);
                }
            },
            checkInstalled: (ids) => {
                if (!ids) {
                    return Boolean(window.ethereum);
                }
                return ids.some(id => Boolean(window.ethereum?.[String(id)]));
            },
            signMessage: async (message) => {
                const namespace = ChainController.state.activeChain;
                const adapter = this.getAdapter(ChainController.state.activeChain);
                if (!namespace) {
                    throw new Error('signMessage: namespace not found');
                }
                if (!adapter) {
                    throw new Error('signMessage: adapter not found');
                }
                const address = this.getAddress(namespace);
                if (!address) {
                    throw new Error('signMessage: address not found');
                }
                const result = await adapter?.signMessage({
                    message,
                    address,
                    provider: ProviderController.getProvider(namespace)
                });
                return result?.signature || '';
            },
            sendTransaction: async (args) => {
                const namespace = args.chainNamespace;
                if (!namespace) {
                    throw new Error('sendTransaction: namespace not found');
                }
                if (ConstantsUtil$2.SEND_SUPPORTED_NAMESPACES.includes(namespace)) {
                    const adapter = this.getAdapter(namespace);
                    if (!adapter) {
                        throw new Error('sendTransaction: adapter not found');
                    }
                    const provider = ProviderController.getProvider(namespace);
                    const result = await adapter?.sendTransaction({
                        ...args,
                        caipNetwork: this.getCaipNetwork(),
                        provider
                    });
                    return result?.hash || '';
                }
                return '';
            },
            estimateGas: async (args) => {
                const namespace = args.chainNamespace;
                if (namespace === ConstantsUtil$3.CHAIN.EVM) {
                    const adapter = this.getAdapter(namespace);
                    if (!adapter) {
                        throw new Error('estimateGas: adapter is required but got undefined');
                    }
                    const provider = ProviderController.getProvider(namespace);
                    const caipNetwork = this.getCaipNetwork();
                    if (!caipNetwork) {
                        throw new Error('estimateGas: caipNetwork is required but got undefined');
                    }
                    const result = await adapter?.estimateGas({ ...args, provider, caipNetwork });
                    return result?.gas || 0n;
                }
                return 0n;
            },
            getEnsAvatar: async () => {
                const namespace = ChainController.state.activeChain;
                if (!namespace) {
                    throw new Error('getEnsAvatar: namespace is required but got undefined');
                }
                const address = this.getAddress(namespace);
                if (!address) {
                    throw new Error('getEnsAvatar: address not found');
                }
                await this.syncIdentity({
                    address,
                    chainId: Number(this.getCaipNetwork()?.id),
                    chainNamespace: namespace
                });
                const accountData = ChainController.getAccountData();
                return accountData?.profileImage || false;
            },
            getEnsAddress: async (name) => await WcHelpersUtil.resolveReownName(name),
            writeContract: async (args) => {
                const namespace = ChainController.state.activeChain;
                const adapter = this.getAdapter(namespace);
                if (!namespace) {
                    throw new Error('writeContract: namespace is required but got undefined');
                }
                if (!adapter) {
                    throw new Error('writeContract: adapter is required but got undefined');
                }
                const caipNetwork = this.getCaipNetwork();
                const caipAddress = this.getCaipAddress();
                const provider = ProviderController.getProvider(namespace);
                if (!caipNetwork || !caipAddress) {
                    throw new Error('writeContract: caipNetwork or caipAddress is required but got undefined');
                }
                const result = await adapter?.writeContract({ ...args, caipNetwork, provider, caipAddress });
                return result?.hash;
            },
            parseUnits: (value, decimals) => {
                const adapter = this.getAdapter(ChainController.state.activeChain);
                if (!adapter) {
                    throw new Error('parseUnits: adapter is required but got undefined');
                }
                return adapter?.parseUnits({ value, decimals }) ?? 0n;
            },
            formatUnits: (value, decimals) => {
                const adapter = this.getAdapter(ChainController.state.activeChain);
                if (!adapter) {
                    throw new Error('formatUnits: adapter is required but got undefined');
                }
                return adapter?.formatUnits({ value, decimals }) ?? '0';
            },
            getCapabilities: async (params) => {
                const adapter = this.getAdapter(ChainController.state.activeChain);
                if (!adapter) {
                    throw new Error('getCapabilities: adapter is required but got undefined');
                }
                return await adapter?.getCapabilities(params);
            },
            grantPermissions: async (params) => {
                const adapter = this.getAdapter(ChainController.state.activeChain);
                if (!adapter) {
                    throw new Error('grantPermissions: adapter is required but got undefined');
                }
                return await adapter?.grantPermissions(params);
            },
            revokePermissions: async (params) => {
                const adapter = this.getAdapter(ChainController.state.activeChain);
                if (!adapter) {
                    throw new Error('revokePermissions: adapter is required but got undefined');
                }
                if (adapter?.revokePermissions) {
                    return await adapter.revokePermissions(params);
                }
                return '0x';
            },
            walletGetAssets: async (params) => {
                const adapter = this.getAdapter(ChainController.state.activeChain);
                if (!adapter) {
                    throw new Error('walletGetAssets: adapter is required but got undefined');
                }
                return (await adapter?.walletGetAssets(params)) ?? {};
            },
            updateBalance: (namespace) => {
                const address = this.getAddress(namespace);
                const caipNetwork = this.getCaipNetwork(namespace);
                if (!caipNetwork || !address) {
                    return;
                }
                this.updateNativeBalance(address, caipNetwork?.id, namespace);
            }
        };
        this.networkControllerClient = {
            switchCaipNetwork: async (caipNetwork) => await this.switchCaipNetwork(caipNetwork),
            // eslint-disable-next-line @typescript-eslint/require-await
            getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData()
        };
        ConnectionController.setClient(this.connectionControllerClient);
    }
    async onConnectExternal(params) {
        const activeChain = ChainController.state.activeChain;
        const namespace = params.chain || activeChain;
        const adapter = this.getAdapter(namespace);
        let shouldUpdateNetwork = true;
        if (params.type === ConstantsUtil$1.CONNECTOR_TYPE_AUTH) {
            const authNamespaces = ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS;
            const hasConnectedAuthNamespace = authNamespaces.some(namespace => ConnectorController.getConnectorId(namespace) === ConstantsUtil$3.CONNECTOR_ID.AUTH);
            if (hasConnectedAuthNamespace && params.chain !== activeChain) {
                shouldUpdateNetwork = false;
            }
        }
        if (params.chain && params.chain !== activeChain && !params.caipNetwork) {
            const toConnectNetwork = this.getCaipNetworks().find(network => network.chainNamespace === params.chain);
            if (toConnectNetwork && shouldUpdateNetwork) {
                this.setCaipNetwork(toConnectNetwork);
            }
        }
        if (!namespace) {
            throw new Error('connectExternal: namespace not found');
        }
        if (!adapter) {
            throw new Error('connectExternal: adapter not found');
        }
        const fallbackCaipNetwork = this.getCaipNetwork(namespace);
        const caipNetworkToUse = params.caipNetwork || fallbackCaipNetwork;
        const res = await adapter.connect({
            id: params.id,
            address: params.address,
            info: params.info,
            type: params.type,
            provider: params.provider,
            socialUri: params.socialUri,
            chainId: params.caipNetwork?.id || fallbackCaipNetwork?.id,
            rpcUrl: params.caipNetwork?.rpcUrls?.default?.http?.[0] ||
                fallbackCaipNetwork?.rpcUrls?.default?.http?.[0]
        });
        if (!res) {
            return undefined;
        }
        StorageUtil.addConnectedNamespace(namespace);
        this.syncProvider({ ...res, chainNamespace: namespace });
        this.setStatus('connected', namespace);
        this.syncConnectedWalletInfo(namespace);
        StorageUtil.removeDisconnectedConnectorId(params.id, namespace);
        return { address: res.address, connectedCaipNetwork: caipNetworkToUse };
    }
    async connectInactiveNamespaces(params, connectResult) {
        const isConnectingToAuth = params.type === ConstantsUtil$1.CONNECTOR_TYPE_AUTH;
        const otherAuthNamespaces = HelpersUtil.getOtherAuthNamespaces(connectResult?.connectedCaipNetwork?.chainNamespace);
        const activeCaipNetwork = ChainController.state.activeCaipNetwork;
        const activeAdapter = this.getAdapter(activeCaipNetwork?.chainNamespace);
        const activeProvider = ProviderController.getProvider(activeCaipNetwork?.chainNamespace);
        if (isConnectingToAuth) {
            await Promise.all(otherAuthNamespaces.map(async (ns) => {
                try {
                    const provider = ProviderController.getProvider(ns);
                    const caipNetworkToUse = this.getCaipNetwork(ns);
                    const adapter = this.getAdapter(ns);
                    const res = await adapter?.connect({
                        ...params,
                        provider,
                        socialUri: undefined,
                        chainId: caipNetworkToUse?.id,
                        rpcUrl: caipNetworkToUse?.rpcUrls?.default?.http?.[0]
                    });
                    if (res) {
                        StorageUtil.addConnectedNamespace(ns);
                        StorageUtil.removeDisconnectedConnectorId(params.id, ns);
                        this.setStatus('connected', ns);
                        this.syncConnectedWalletInfo(ns);
                    }
                }
                catch (error) {
                    AlertController.warn(ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(ns, error instanceof Error ? error.message : undefined), ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
                }
            }));
            // Make the secure site back to current network after reconnecting the other namespaces
            if (activeCaipNetwork) {
                await activeAdapter?.switchNetwork({
                    caipNetwork: activeCaipNetwork,
                    provider: activeProvider,
                    providerType: params.type
                });
            }
        }
    }
    getApprovedCaipNetworksData() {
        const providerType = ProviderController.getProviderId(ChainController.state.activeChain);
        if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT) {
            const namespaces = this.universalProvider?.session?.namespaces;
            return {
                /*
                 * MetaMask Wallet only returns 1 namespace in the session object. This makes it imposible
                 * to switch to other networks. Setting supportsAllNetworks to true for MetaMask Wallet
                 * will make it possible to switch to other networks.
                 */
                supportsAllNetworks: this.universalProvider?.session?.peer?.metadata.name === 'MetaMask Wallet',
                approvedCaipNetworkIds: this.getChainsFromNamespaces(namespaces)
            };
        }
        return { supportsAllNetworks: true, approvedCaipNetworkIds: [] };
    }
    async switchCaipNetwork(caipNetwork) {
        const networkNamespace = caipNetwork.chainNamespace;
        const namespaceAddress = this.getAddressByChainNamespace(caipNetwork.chainNamespace);
        if (namespaceAddress) {
            const provider = ProviderController.getProvider(networkNamespace);
            const providerType = ProviderController.getProviderId(networkNamespace);
            if (caipNetwork.chainNamespace === ChainController.state.activeChain) {
                const adapter = this.getAdapter(networkNamespace);
                await adapter?.switchNetwork({ caipNetwork, provider, providerType });
            }
            else {
                this.setCaipNetwork(caipNetwork);
                if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT) {
                    this.syncWalletConnectAccount();
                }
                else {
                    const address = this.getAddressByChainNamespace(networkNamespace);
                    if (address) {
                        this.syncAccount({
                            address,
                            chainId: caipNetwork.id,
                            chainNamespace: networkNamespace
                        });
                    }
                }
            }
        }
        else {
            this.setCaipNetwork(caipNetwork);
        }
    }
    getChainsFromNamespaces(namespaces = {}) {
        return Object.values(namespaces).flatMap((namespace) => {
            const chains = (namespace.chains || []);
            const accountsChains = namespace.accounts.map(account => {
                const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(account);
                return `${chainNamespace}:${chainId}`;
            });
            return Array.from(new Set([...chains, ...accountsChains]));
        });
    }
    // -- Adapter Initialization ---------------------------------------------------
    createAdapters(blueprints) {
        this.createClients();
        return this.chainNamespaces.reduce((adapters, namespace) => {
            const blueprint = blueprints?.find(b => b.namespace === namespace);
            if (blueprint) {
                blueprint.construct({
                    namespace,
                    projectId: this.options?.projectId,
                    networks: this.caipNetworks?.filter(({ chainNamespace }) => chainNamespace === namespace)
                });
                adapters[namespace] = blueprint;
            }
            else {
                adapters[namespace] = new UniversalAdapter({
                    namespace,
                    networks: this.getCaipNetworks()
                });
            }
            return adapters;
            // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
        }, {});
    }
    async initChainAdapter(namespace) {
        this.onConnectors(namespace);
        this.listenAdapter(namespace);
        await this.chainAdapters?.[namespace].syncConnectors(this.options, this);
        await this.createUniversalProviderForAdapter(namespace);
    }
    async initChainAdapters() {
        await Promise.all(this.chainNamespaces.map(async (namespace) => {
            await this.initChainAdapter(namespace);
        }));
    }
    onConnectors(chainNamespace) {
        const adapter = this.getAdapter(chainNamespace);
        adapter?.on('connectors', this.setConnectors.bind(this));
    }
    listenAdapter(chainNamespace) {
        const adapter = this.getAdapter(chainNamespace);
        if (!adapter) {
            return;
        }
        const connectionStatus = StorageUtil.getConnectionStatus();
        if (OptionsController.state.enableReconnect === false) {
            this.setStatus('disconnected', chainNamespace);
        }
        else if (connectionStatus === 'connected') {
            this.setStatus('connecting', chainNamespace);
        }
        else if (connectionStatus === 'disconnected') {
            /*
             * Address cache is kept after disconnecting from the wallet
             * but should be cleared if appkit is launched in disconnected state
             */
            StorageUtil.clearAddressCache();
            this.setStatus(connectionStatus, chainNamespace);
        }
        else {
            this.setStatus(connectionStatus, chainNamespace);
        }
        adapter.on('switchNetwork', ({ address, chainId }) => {
            const caipNetwork = this.getCaipNetworks().find(n => n.id.toString() === chainId.toString() ||
                n.caipNetworkId.toString() === chainId.toString());
            const isSameNamespace = ChainController.state.activeChain === chainNamespace;
            const accountAddress = ChainController.state.chains.get(chainNamespace)?.accountState?.address;
            if (caipNetwork) {
                const account = isSameNamespace && address ? address : accountAddress;
                if (account) {
                    this.syncAccount({ address: account, chainId: caipNetwork.id, chainNamespace });
                }
            }
            else {
                this.setUnsupportedNetwork(chainId);
            }
        });
        adapter.on('disconnect', () => {
            const isMultiWallet = this.remoteFeatures.multiWallet;
            const allConnections = Array.from(ConnectionController.state.connections.values()).flat();
            this.onDisconnectNamespace({
                chainNamespace,
                closeModal: !isMultiWallet || allConnections.length === 0
            });
        });
        adapter.on('connections', connections => {
            this.setConnections(connections, chainNamespace);
        });
        adapter.on('pendingTransactions', () => {
            const address = this.getAddress(chainNamespace);
            const activeCaipNetwork = ChainController.state.activeCaipNetwork;
            if (!address || !activeCaipNetwork?.id) {
                return;
            }
            this.updateNativeBalance(address, activeCaipNetwork.id, activeCaipNetwork.chainNamespace);
        });
        adapter.on('accountChanged', ({ address, chainId, connector }) => {
            this.handlePreviousConnectorConnection(connector);
            const isActiveChain = ChainController.state.activeChain === chainNamespace;
            if (connector?.provider) {
                this.syncProvider({
                    id: connector.id,
                    type: connector.type,
                    provider: connector?.provider,
                    chainNamespace
                });
                this.syncConnectedWalletInfo(chainNamespace);
            }
            const namespaceNetworkId = ChainController.getNetworkData(chainNamespace)?.caipNetwork?.id;
            const syncAccountChainId = chainId || namespaceNetworkId;
            if (isActiveChain && syncAccountChainId) {
                this.syncAccount({
                    address,
                    chainId: syncAccountChainId,
                    chainNamespace
                });
            }
            else if (!isActiveChain && syncAccountChainId) {
                this.syncAccountInfo(address, syncAccountChainId, chainNamespace);
                this.syncBalance({ address, chainId: syncAccountChainId, chainNamespace });
            }
            else {
                this.syncAccountInfo(address, chainId, chainNamespace);
            }
            StorageUtil.addConnectedNamespace(chainNamespace);
        });
    }
    /**
     * Checks the incoming connector and handles the previous connection in the connector's namespace, and if necessary (i.e multi-wallet is disabled) disconnects the previous connector
     * @param connector
     */
    async handlePreviousConnectorConnection(connector) {
        const namespace = connector?.chain;
        const newConnectorId = connector?.id;
        const currentConnectorId = ConnectorController.getConnectorId(namespace);
        const isMultiWalletEnabled = OptionsController.state.remoteFeatures?.multiWallet;
        const hasNewConnectorConnected = currentConnectorId !== newConnectorId;
        const shouldDisconnectPreviousConnector = namespace &&
            newConnectorId &&
            currentConnectorId &&
            hasNewConnectorConnected &&
            !isMultiWalletEnabled;
        try {
            if (shouldDisconnectPreviousConnector) {
                await ConnectionController.disconnect({ id: currentConnectorId, namespace });
            }
        }
        catch (error) {
            console.warn('Error disconnecting previous connector', error);
        }
    }
    async createUniversalProviderForAdapter(chainNamespace) {
        await this.getUniversalProvider();
        if (this.universalProvider) {
            await this.chainAdapters?.[chainNamespace]?.setUniversalProvider?.(this.universalProvider);
        }
    }
    // -- Connection Sync ---------------------------------------------------
    async syncExistingConnection() {
        await Promise.allSettled(this.chainNamespaces.map(namespace => this.syncNamespaceConnection(namespace)));
    }
    async unSyncExistingConnection() {
        try {
            await Promise.allSettled(this.chainNamespaces.map(namespace => ConnectionController.disconnect({ namespace, initialDisconnect: true })));
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error disconnecting existing connections:', error);
        }
    }
    async reconnectWalletConnect() {
        await this.syncWalletConnectAccount();
        const address = this.getAddress();
        if (!this.getCaipAddress()) {
            StorageUtil.deleteRecentWallet();
        }
        const recentWallet = StorageUtil.getRecentWallet();
        EventsController.sendEvent({
            type: 'track',
            event: 'CONNECT_SUCCESS',
            address,
            properties: {
                method: CoreHelperUtil.isMobile() ? 'mobile' : 'qrcode',
                name: recentWallet?.name || 'Unknown',
                reconnect: true,
                view: RouterController.state.view,
                walletRank: recentWallet?.order
            }
        });
    }
    async syncNamespaceConnection(namespace) {
        try {
            if (namespace === ConstantsUtil$3.CHAIN.EVM && CoreHelperUtil.isSafeApp()) {
                ConnectorController.setConnectorId(ConstantsUtil$3.CONNECTOR_ID.SAFE, namespace);
            }
            const connectorId = ConnectorController.getConnectorId(namespace);
            this.setStatus('connecting', namespace);
            switch (connectorId) {
                case ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT:
                    await this.reconnectWalletConnect();
                    break;
                case ConstantsUtil$3.CONNECTOR_ID.AUTH:
                    // Handled during initialization of adapters' auth provider
                    break;
                default:
                    await this.syncAdapterConnection(namespace);
            }
        }
        catch (err) {
            console.warn("AppKit couldn't sync existing connection", err);
            this.setStatus('disconnected', namespace);
        }
    }
    onDisconnectNamespace(options) {
        const { chainNamespace, closeModal } = options || {};
        ChainController.resetAccount(chainNamespace);
        ChainController.resetNetwork(chainNamespace);
        StorageUtil.removeConnectedNamespace(chainNamespace);
        const namespaces = Array.from(ChainController.state.chains.keys());
        const namespacesToDisconnect = chainNamespace ? [chainNamespace] : namespaces;
        namespacesToDisconnect.forEach(ns => StorageUtil.addDisconnectedConnectorId(ConnectorController.getConnectorId(ns) || '', ns));
        ConnectorController.removeConnectorId(chainNamespace);
        ProviderController.resetChain(chainNamespace);
        this.setUser(null, chainNamespace);
        this.setStatus('disconnected', chainNamespace);
        this.setConnectedWalletInfo(null, chainNamespace);
        if (closeModal !== false) {
            ModalController.close();
        }
    }
    async syncAdapterConnections() {
        await Promise.allSettled(this.chainNamespaces.map(namespace => {
            const adapter = this.getAdapter(namespace);
            const caipAddress = this.getCaipAddress(namespace);
            const caipNetwork = this.getCaipNetwork(namespace);
            return adapter?.syncConnections({
                connectToFirstConnector: !caipAddress,
                caipNetwork
            });
        }));
    }
    async syncAdapterConnection(namespace) {
        const adapter = this.getAdapter(namespace);
        const caipNetwork = this.getCaipNetwork(namespace);
        const connectorId = ConnectorController.getConnectorId(namespace);
        const connectors = ConnectorController.getConnectors(namespace);
        const connector = connectors.find(c => c.id === connectorId);
        try {
            if (!adapter || !connector) {
                throw new Error(`Adapter or connector not found for namespace ${namespace}`);
            }
            if (!caipNetwork?.id) {
                throw new Error('CaipNetwork not found');
            }
            const connection = await adapter?.syncConnection({
                namespace,
                id: connector.id,
                chainId: caipNetwork.id,
                rpcUrl: caipNetwork?.rpcUrls?.default?.http?.[0]
            });
            if (connection) {
                this.syncProvider({ ...connection, chainNamespace: namespace });
                await this.syncAccount({ ...connection, chainNamespace: namespace });
                this.setStatus('connected', namespace);
                EventsController.sendEvent({
                    type: 'track',
                    event: 'CONNECT_SUCCESS',
                    address: connection.address,
                    properties: {
                        method: 'browser',
                        name: connector.info?.name || connector.name || 'Unknown',
                        reconnect: true,
                        view: RouterController.state.view,
                        walletRank: undefined
                    }
                });
            }
            else {
                this.setStatus('disconnected', namespace);
            }
        }
        catch (e) {
            this.onDisconnectNamespace({ chainNamespace: namespace, closeModal: false });
        }
    }
    async syncWalletConnectAccount() {
        const sessionNamespaces = Object.keys(this.universalProvider?.session?.namespaces || {});
        const syncTasks = this.chainNamespaces.map(async (chainNamespace) => {
            const adapter = this.getAdapter(chainNamespace);
            if (!adapter) {
                return;
            }
            const namespaceAccounts = this.universalProvider?.session?.namespaces?.[chainNamespace]?.accounts || [];
            // We try and find the address for this network in the session object.
            const activeChainId = ChainController.state.activeCaipNetwork?.id;
            const sessionAddress = namespaceAccounts.find(account => {
                const { chainId } = ParseUtil.parseCaipAddress(account);
                return chainId === activeChainId?.toString();
            }) || namespaceAccounts[0];
            if (sessionAddress) {
                const caipAddress = ParseUtil.validateCaipAddress(sessionAddress);
                const { chainId, address } = ParseUtil.parseCaipAddress(caipAddress);
                ProviderController.setProviderId(chainNamespace, ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT);
                if (this.caipNetworks &&
                    ChainController.state.activeCaipNetwork &&
                    adapter.namespace !== ConstantsUtil$3.CHAIN.EVM) {
                    const provider = adapter.getWalletConnectProvider({
                        caipNetworks: this.getCaipNetworks(),
                        provider: this.universalProvider,
                        activeCaipNetwork: ChainController.state.activeCaipNetwork
                    });
                    ProviderController.setProvider(chainNamespace, provider);
                }
                else {
                    ProviderController.setProvider(chainNamespace, this.universalProvider);
                }
                ConnectorController.setConnectorId(ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT, chainNamespace);
                StorageUtil.addConnectedNamespace(chainNamespace);
                await this.syncAccount({
                    address,
                    chainId,
                    chainNamespace
                });
            }
            else if (sessionNamespaces.includes(chainNamespace)) {
                this.setStatus('disconnected', chainNamespace);
            }
            this.syncConnectedWalletInfo(chainNamespace);
            await ChainController.setApprovedCaipNetworksData(chainNamespace);
        });
        await Promise.all(syncTasks);
    }
    syncProvider({ type, provider, id, chainNamespace }) {
        ProviderController.setProviderId(chainNamespace, type);
        ProviderController.setProvider(chainNamespace, provider);
        ConnectorController.setConnectorId(id, chainNamespace);
    }
    async syncAccount(params) {
        const isActiveNamespace = params.chainNamespace === ChainController.state.activeChain;
        const networkOfChain = ChainController.getCaipNetworkByNamespace(params.chainNamespace, params.chainId);
        const { address, chainId, chainNamespace } = params;
        const { chainId: activeChainId } = StorageUtil.getActiveNetworkProps();
        const chainIdToUse = chainId || activeChainId;
        const isUnsupportedNetwork = ChainController.state.activeCaipNetwork?.name === ConstantsUtil$3.UNSUPPORTED_NETWORK_NAME;
        const shouldSupportAllNetworks = ChainController.getNetworkProp('supportsAllNetworks', chainNamespace);
        this.setStatus('connected', chainNamespace);
        if (isUnsupportedNetwork && !shouldSupportAllNetworks) {
            return;
        }
        if (chainIdToUse) {
            let caipNetwork = this.getCaipNetworks().find(n => n.id.toString() === chainIdToUse.toString());
            let fallbackCaipNetwork = this.getCaipNetworks().find(n => n.chainNamespace === chainNamespace);
            // If doesn't support all networks, we need to use approved networks
            if (!shouldSupportAllNetworks && !caipNetwork && !fallbackCaipNetwork) {
                // Connection can be requested for a chain that is not supported by the wallet so we need to use approved networks here
                const caipNetworkIds = this.getApprovedCaipNetworkIds() || [];
                const caipNetworkId = caipNetworkIds.find(id => ParseUtil.parseCaipNetworkId(id)?.chainId === chainIdToUse.toString());
                const fallBackCaipNetworkId = caipNetworkIds.find(id => ParseUtil.parseCaipNetworkId(id)?.chainNamespace === chainNamespace);
                caipNetwork = this.getCaipNetworks().find(n => n.caipNetworkId === caipNetworkId);
                fallbackCaipNetwork = this.getCaipNetworks().find(n => n.caipNetworkId === fallBackCaipNetworkId ||
                    // This is a workaround used in Solana network to support deprecated caipNetworkId
                    ('deprecatedCaipNetworkId' in n && n.deprecatedCaipNetworkId === fallBackCaipNetworkId));
            }
            const network = caipNetwork || fallbackCaipNetwork;
            if (network?.chainNamespace === ChainController.state.activeChain) {
                // If the network is unsupported and the user doesn't allow unsupported chains, we show the unsupported chain UI
                if (OptionsController.state.enableNetworkSwitch &&
                    !OptionsController.state.allowUnsupportedChain &&
                    ChainController.state.activeCaipNetwork?.name === ConstantsUtil$3.UNSUPPORTED_NETWORK_NAME) {
                    ChainController.showUnsupportedChainUI();
                }
                else {
                    this.setCaipNetwork(network);
                }
            }
            else if (!isActiveNamespace) {
                if (networkOfChain) {
                    this.setCaipNetworkOfNamespace(networkOfChain, chainNamespace);
                }
            }
            this.syncConnectedWalletInfo(chainNamespace);
            const currentAddress = this.getAddress(chainNamespace);
            if (!HelpersUtil.isLowerCaseMatch(address, currentAddress)) {
                this.syncAccountInfo(address, network?.id, chainNamespace);
            }
            if (isActiveNamespace) {
                await this.syncBalance({ address, chainId: network?.id, chainNamespace });
            }
            else {
                await this.syncBalance({ address, chainId: networkOfChain?.id, chainNamespace });
            }
            this.syncIdentity({
                address,
                chainId,
                chainNamespace
            });
        }
    }
    async syncAccountInfo(address, chainId, chainNamespace) {
        const caipAddress = this.getCaipAddress(chainNamespace);
        const newChainId = chainId || caipAddress?.split(':')[1];
        if (!newChainId) {
            return;
        }
        const newCaipAddress = `${chainNamespace}:${newChainId}:${address}`;
        this.setCaipAddress(newCaipAddress, chainNamespace, true);
        await this.syncIdentity({
            address,
            chainId: newChainId,
            chainNamespace
        });
    }
    async syncReownName(address, chainNamespace) {
        try {
            const registeredWcNames = await this.getReownName(address);
            if (registeredWcNames[0]) {
                const wcName = registeredWcNames[0];
                this.setProfileName(wcName.name, chainNamespace);
            }
            else {
                this.setProfileName(null, chainNamespace);
            }
        }
        catch {
            this.setProfileName(null, chainNamespace);
        }
    }
    syncConnectedWalletInfo(chainNamespace) {
        const connectorId = ConnectorController.getConnectorId(chainNamespace);
        const providerType = ProviderController.getProviderId(chainNamespace);
        if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_ANNOUNCED ||
            providerType === ConstantsUtil$1.CONNECTOR_TYPE_INJECTED) {
            if (connectorId) {
                const connectors = this.getConnectors();
                const connector = connectors.find(c => {
                    const isConnectorId = c.id === connectorId;
                    const isRdns = c.info?.rdns === connectorId;
                    const hasMultiChainConnector = c.connectors?.some(_c => _c.id === connectorId || _c.info?.rdns === connectorId);
                    return isConnectorId || isRdns || Boolean(hasMultiChainConnector);
                });
                if (connector) {
                    const { info, name, imageUrl } = connector;
                    const icon = imageUrl || this.getConnectorImage(connector);
                    this.setConnectedWalletInfo({ name, icon, ...info }, chainNamespace);
                }
            }
        }
        else if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT) {
            const provider = ProviderController.getProvider(chainNamespace);
            if (provider?.session) {
                this.setConnectedWalletInfo({
                    ...provider.session.peer.metadata,
                    name: provider.session.peer.metadata.name,
                    icon: provider.session.peer.metadata.icons?.[0]
                }, chainNamespace);
            }
        }
        else if (connectorId) {
            if (connectorId === ConstantsUtil$3.CONNECTOR_ID.COINBASE_SDK ||
                connectorId === ConstantsUtil$3.CONNECTOR_ID.COINBASE) {
                const connector = this.getConnectors().find(c => c.id === connectorId);
                const name = connector?.name || 'Coinbase Wallet';
                const icon = connector?.imageUrl || this.getConnectorImage(connector);
                const info = connector?.info;
                this.setConnectedWalletInfo({
                    ...info,
                    name,
                    icon
                }, chainNamespace);
            }
        }
    }
    async syncBalance(params) {
        const caipNetwork = NetworkUtil$1.getNetworksByNamespace(this.getCaipNetworks(), params.chainNamespace).find(n => n.id.toString() === params.chainId?.toString());
        if (!caipNetwork || !params.chainId) {
            return;
        }
        await this.updateNativeBalance(params.address, params.chainId, params.chainNamespace);
    }
    async ready() {
        await this.readyPromise;
    }
    async updateNativeBalance(address, chainId, namespace) {
        const adapter = this.getAdapter(namespace);
        const caipNetwork = ChainController.getCaipNetworkByNamespace(namespace, chainId);
        if (adapter) {
            const balance = await adapter.getBalance({
                address,
                chainId,
                caipNetwork,
                tokens: this.options.tokens
            });
            this.setBalance(balance.balance, balance.symbol, namespace);
            return balance;
        }
        return undefined;
    }
    // -- Universal Provider ---------------------------------------------------
    async initializeUniversalAdapter() {
        const logger = LoggerUtil.createLogger((error, ...args) => {
            if (error) {
                this.handleAlertError(error);
            }
            // eslint-disable-next-line no-console
            console.error(...args);
        });
        const universalProviderOptions = {
            projectId: this.options?.projectId,
            metadata: {
                name: this.options?.metadata ? this.options?.metadata.name : '',
                description: this.options?.metadata ? this.options?.metadata.description : '',
                url: this.options?.metadata ? this.options?.metadata.url : '',
                icons: this.options?.metadata ? this.options?.metadata.icons : ['']
            },
            logger
        };
        OptionsController.setManualWCControl(Boolean(this.options?.manualWCControl));
        this.universalProvider =
            this.options.universalProvider ?? (await N$1.init(universalProviderOptions));
        // Clear the session if we don't want to reconnect on init
        if (OptionsController.state.enableReconnect === false && this.universalProvider.session) {
            await this.universalProvider.disconnect();
        }
        this.listenWalletConnect();
    }
    listenWalletConnect() {
        if (this.universalProvider) {
            this.chainNamespaces.forEach(namespace => {
                WcHelpersUtil.listenWcProvider({
                    universalProvider: this.universalProvider,
                    namespace,
                    onDisplayUri: uri => {
                        ConnectionController.setUri(uri);
                    },
                    onConnect: accounts => {
                        const { address } = CoreHelperUtil.getAccount(accounts[0]);
                        ConnectionController.finalizeWcConnection(address);
                    },
                    onDisconnect: () => {
                        if (ChainController.state.noAdapters) {
                            this.resetAccount(namespace);
                        }
                        ConnectionController.resetWcConnection();
                    },
                    onChainChanged: chainId => {
                        const activeNamespace = ChainController.state.activeChain;
                        const isCurrentConnectorWalletConnect = activeNamespace &&
                            ConnectorController.state.activeConnectorIds[activeNamespace] ===
                                ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
                        if (activeNamespace === namespace &&
                            (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
                            const caipNetwork = this.getCaipNetworks().find(n => n.id.toString() === chainId.toString() ||
                                n.caipNetworkId.toString() === chainId.toString());
                            const currentCaipNetwork = this.getCaipNetwork();
                            if (!caipNetwork) {
                                this.setUnsupportedNetwork(chainId);
                                return;
                            }
                            if (currentCaipNetwork?.id.toString() !== caipNetwork?.id.toString() &&
                                currentCaipNetwork?.chainNamespace === caipNetwork?.chainNamespace) {
                                this.setCaipNetwork(caipNetwork);
                            }
                        }
                    },
                    onAccountsChanged: accounts => {
                        const activeNamespace = ChainController.state.activeChain;
                        const isCurrentConnectorWalletConnect = activeNamespace &&
                            ConnectorController.state.activeConnectorIds[activeNamespace] ===
                                ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
                        if (activeNamespace === namespace &&
                            (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
                            const account = accounts?.[0];
                            if (account) {
                                this.syncAccount({
                                    address: account.address,
                                    chainId: account.chainId,
                                    chainNamespace: account.chainNamespace
                                });
                            }
                        }
                    }
                });
            });
        }
    }
    createUniversalProvider() {
        if (!this.universalProviderInitPromise &&
            CoreHelperUtil.isClient() &&
            this.options?.projectId) {
            this.universalProviderInitPromise = this.initializeUniversalAdapter();
        }
        return this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
        if (!this.universalProvider) {
            try {
                await this.createUniversalProvider();
            }
            catch (err) {
                EventsController.sendEvent({
                    type: 'error',
                    event: 'INTERNAL_SDK_ERROR',
                    properties: {
                        errorType: 'UniversalProviderInitError',
                        errorMessage: err instanceof Error ? err.message : 'Unknown',
                        uncaught: false
                    }
                });
                // eslint-disable-next-line no-console
                console.error('AppKit:getUniversalProvider - Cannot create provider', err);
            }
        }
        return this.universalProvider;
    }
    getDisabledCaipNetworks() {
        const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
        const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
        const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        return sortedNetworks.filter(network => ChainController.isCaipNetworkDisabled(network));
    }
    // - Utils -------------------------------------------------------------------
    handleAlertError(error) {
        const matchedUniversalProviderError = Object.entries(ErrorUtil.UniversalProviderErrors).find(([, { message }]) => error.message.includes(message));
        const [errorKey, errorValue] = matchedUniversalProviderError ?? [];
        const { message, alertErrorKey } = errorValue ?? {};
        if (errorKey && message && !this.reportedAlertErrors[errorKey]) {
            const alertError = ErrorUtil.ALERT_ERRORS[alertErrorKey];
            if (alertError) {
                AlertController.open(alertError, 'error');
                this.reportedAlertErrors[errorKey] = true;
            }
        }
    }
    getAdapter(namespace) {
        if (!namespace) {
            return undefined;
        }
        return this.chainAdapters?.[namespace];
    }
    createAdapter(blueprint) {
        if (!blueprint) {
            return;
        }
        const namespace = blueprint.namespace;
        if (!namespace) {
            return;
        }
        this.createClients();
        const adapterBlueprint = blueprint;
        adapterBlueprint.namespace = namespace;
        adapterBlueprint.construct({
            namespace,
            projectId: this.options?.projectId,
            networks: this.caipNetworks?.filter(({ chainNamespace }) => chainNamespace === namespace)
        });
        if (!this.chainNamespaces.includes(namespace)) {
            this.chainNamespaces.push(namespace);
        }
        if (this.chainAdapters) {
            this.chainAdapters[namespace] = adapterBlueprint;
        }
    }
    // -- Public -------------------------------------------------------------------
    async open(options) {
        await this.injectModalUi();
        if (options?.uri) {
            ConnectionController.setUri(options.uri);
        }
        const { isSwap, isSend } = this.toModalOptions();
        if (isSwap(options)) {
            return ModalController.open({
                ...options,
                data: { swap: options.arguments }
            });
        }
        else if (isSend(options)) {
            if (options.arguments) {
                return this.openSend(options.arguments);
            }
        }
        return ModalController.open(options);
    }
    async close() {
        await this.injectModalUi();
        ModalController.close();
    }
    setLoading(loading, namespace) {
        ModalController.setLoading(loading, namespace);
    }
    async disconnect(chainNamespace) {
        await ConnectionController.disconnect({ namespace: chainNamespace });
    }
    getSIWX() {
        return OptionsController.state.siwx;
    }
    // -- review these -------------------------------------------------------------------
    getError() {
        return '';
    }
    getChainId() {
        return ChainController.state.activeCaipNetwork?.id;
    }
    async switchNetwork(appKitNetwork, { throwOnFailure = false } = {}) {
        const network = this.getCaipNetworks().find(n => n.id === appKitNetwork.id);
        if (!network) {
            AlertController.open(ErrorUtil.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, 'error');
            return;
        }
        await ChainController.switchActiveNetwork(network, { throwOnFailure });
    }
    getWalletProvider() {
        return ChainController.state.activeChain
            ? ProviderController.state.providers[ChainController.state.activeChain]
            : null;
    }
    getWalletProviderType() {
        return ProviderController.getProviderId(ChainController.state.activeChain);
    }
    subscribeProviders(callback) {
        return ProviderController.subscribeProviders(callback);
    }
    getThemeMode() {
        return ThemeController.state.themeMode;
    }
    getThemeVariables() {
        return ThemeController.state.themeVariables;
    }
    setThemeMode(themeMode) {
        ThemeController.setThemeMode(themeMode);
        setColorTheme(ThemeController.state.themeMode);
    }
    setTermsConditionsUrl(termsConditionsUrl) {
        OptionsController.setTermsConditionsUrl(termsConditionsUrl);
    }
    setPrivacyPolicyUrl(privacyPolicyUrl) {
        OptionsController.setPrivacyPolicyUrl(privacyPolicyUrl);
    }
    setThemeVariables(themeVariables) {
        ThemeController.setThemeVariables(themeVariables);
        setThemeVariables(ThemeController.state.themeVariables);
    }
    subscribeTheme(callback) {
        return ThemeController.subscribe(callback);
    }
    subscribeConnections(callback) {
        if (!this.remoteFeatures.multiWallet) {
            AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, 'info');
            return () => undefined;
        }
        return ConnectionController.subscribe(callback);
    }
    getWalletInfo(namespace) {
        if (namespace) {
            return ChainController.state.chains.get(namespace)?.accountState?.connectedWalletInfo;
        }
        const accountData = ChainController.getAccountData();
        return accountData?.connectedWalletInfo;
    }
    getAccount(_namespace) {
        const namespace = _namespace || ChainController.state.activeChain;
        const authConnector = ConnectorController.getAuthConnector(namespace);
        const accountState = ChainController.getAccountData(namespace);
        const activeConnectorId = StorageUtil.getConnectedConnectorId(ChainController.state.activeChain);
        const connections = ConnectionController.getConnections(namespace);
        if (!namespace) {
            throw new Error('AppKit:getAccount - namespace is required');
        }
        const allAccounts = connections.flatMap(connection => connection.accounts.map(({ address, type, publicKey }) => CoreHelperUtil.createAccount(namespace, address, (type || 'eoa'), publicKey)));
        if (!accountState) {
            return undefined;
        }
        return {
            allAccounts,
            caipAddress: accountState.caipAddress,
            address: CoreHelperUtil.getPlainAddress(accountState.caipAddress),
            isConnected: Boolean(accountState.caipAddress),
            status: accountState.status,
            embeddedWalletInfo: authConnector && activeConnectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH
                ? {
                    user: accountState.user
                        ? {
                            ...accountState.user,
                            /*
                             * Getting the username from the chain controller works well for social logins,
                             * but Farcaster uses a different connection flow and doesn't emit the username via events.
                             * Since the username is stored in local storage before the chain controller updates,
                             * it's safe to use the local storage value here.
                             */
                            username: StorageUtil.getConnectedSocialUsername()
                        }
                        : undefined,
                    authProvider: accountState.socialProvider || 'email',
                    accountType: getPreferredAccountType(namespace),
                    isSmartAccountDeployed: Boolean(accountState.smartAccountDeployed)
                }
                : undefined
        };
    }
    subscribeAccount(callback, namespace) {
        const updateVal = () => {
            const account = this.getAccount(namespace);
            if (!account) {
                return;
            }
            callback(account);
        };
        if (namespace) {
            ChainController.subscribeChainProp('accountState', updateVal, namespace);
        }
        else {
            ChainController.subscribe(updateVal);
        }
        ConnectorController.subscribe(updateVal);
    }
    subscribeNetwork(callback) {
        return ChainController.subscribe(({ activeCaipNetwork }) => {
            callback({
                caipNetwork: activeCaipNetwork,
                chainId: activeCaipNetwork?.id,
                caipNetworkId: activeCaipNetwork?.caipNetworkId
            });
        });
    }
    subscribeWalletInfo(callback, namespace) {
        if (namespace) {
            return ChainController.subscribeChainProp('accountState', accountState => callback(accountState?.connectedWalletInfo), namespace);
        }
        return ChainController.subscribeChainProp('accountState', accountState => callback(accountState?.connectedWalletInfo));
    }
    subscribeShouldUpdateToAddress(callback) {
        ChainController.subscribeChainProp('accountState', accountState => callback(accountState?.shouldUpdateToAddress));
    }
    subscribeCaipNetworkChange(callback) {
        ChainController.subscribeKey('activeCaipNetwork', callback);
    }
    getState() {
        return PublicStateController.state;
    }
    getRemoteFeatures() {
        return OptionsController.state.remoteFeatures;
    }
    subscribeState(callback) {
        return PublicStateController.subscribe(callback);
    }
    subscribeRemoteFeatures(callback) {
        return OptionsController.subscribeKey('remoteFeatures', callback);
    }
    showErrorMessage(message) {
        SnackController.showError(message);
    }
    showSuccessMessage(message) {
        SnackController.showSuccess(message);
    }
    getEvent() {
        return { ...EventsController.state };
    }
    subscribeEvents(callback) {
        return EventsController.subscribe(callback);
    }
    replace(route) {
        RouterController.replace(route);
    }
    redirect(route) {
        RouterController.push(route);
    }
    popTransactionStack(status) {
        RouterController.popTransactionStack(status);
    }
    isOpen() {
        return ModalController.state.open;
    }
    isTransactionStackEmpty() {
        return RouterController.state.transactionStack.length === 0;
    }
    static getInstance() {
        return this.instance;
    }
    updateFeatures(newFeatures) {
        OptionsController.setFeatures(newFeatures);
    }
    updateRemoteFeatures(newRemoteFeatures) {
        OptionsController.setRemoteFeatures(newRemoteFeatures);
    }
    updateOptions(newOptions) {
        const currentOptions = OptionsController.state || {};
        const updatedOptions = { ...currentOptions, ...newOptions };
        OptionsController.setOptions(updatedOptions);
    }
    setConnectMethodsOrder(connectMethodsOrder) {
        OptionsController.setConnectMethodsOrder(connectMethodsOrder);
    }
    setWalletFeaturesOrder(walletFeaturesOrder) {
        OptionsController.setWalletFeaturesOrder(walletFeaturesOrder);
    }
    setCollapseWallets(collapseWallets) {
        OptionsController.setCollapseWallets(collapseWallets);
    }
    setSocialsOrder(socialsOrder) {
        OptionsController.setSocialsOrder(socialsOrder);
    }
    getConnectMethodsOrder() {
        return WalletUtil.getConnectOrderMethod(OptionsController.state.features, ConnectorController.getConnectors());
    }
    /**
     * Adds a network to an existing adapter in AppKit.
     * @param namespace - The chain namespace to add the network to (e.g. 'eip155', 'solana')
     * @param network - The network configuration to add
     * @throws Error if adapter for namespace doesn't exist
     */
    addNetwork(namespace, network) {
        if (this.chainAdapters && !this.chainAdapters[namespace]) {
            throw new Error(`Adapter for namespace ${namespace} doesn't exist`);
        }
        const extendedNetwork = this.extendCaipNetwork(network, this.options);
        if (!this.getCaipNetworks().find(n => n.id === extendedNetwork.id)) {
            ChainController.addNetwork(extendedNetwork);
        }
    }
    /**
     * Removes a network from an existing adapter in AppKit.
     * @param namespace - The chain namespace the network belongs to
     * @param networkId - The network ID to remove
     * @throws Error if adapter for namespace doesn't exist or if removing last network
     */
    removeNetwork(namespace, networkId) {
        if (this.chainAdapters && !this.chainAdapters[namespace]) {
            throw new Error(`Adapter for namespace ${namespace} doesn't exist`);
        }
        const networkToRemove = this.getCaipNetworks().find(n => n.id === networkId);
        if (!networkToRemove) {
            return;
        }
        ChainController.removeNetwork(namespace, networkId);
    }
}

// -- Helpers -------------------------------------------------------------------
let isInitialized = false;
// -- Client --------------------------------------------------------------------
class AppKit extends AppKitBaseClient {
    // -- Overrides --------------------------------------------------------------
    async open(options) {
        // Only open modal when not connected
        const isConnected = ConnectorController.isConnected();
        if (!isConnected) {
            await super.open(options);
        }
    }
    async close() {
        await super.close();
        if (this.options.manualWCControl) {
            const address = ChainController.getAccountData(this.activeChainNamespace)?.address;
            ConnectionController.finalizeWcConnection(address);
        }
    }
    async syncIdentity(_request) {
        return Promise.resolve();
    }
    async syncBalance(_params) {
        return Promise.resolve();
    }
    async injectModalUi() {
        if (!isInitialized && CoreHelperUtil.isClient()) {
            await __vitePreload(() => import('./basic-Px1masP5.js'),true              ?__vite__mapDeps([10,11,1,2,12,4]):void 0);
            await __vitePreload(() => import('./w3m-modal-G38nJ-Fj.js'),true              ?__vite__mapDeps([13,11,1,2,4]):void 0);
            const isElementCreated = document.querySelector('w3m-modal');
            if (!isElementCreated) {
                const modal = document.createElement('w3m-modal');
                if (!OptionsController.state.disableAppend && !OptionsController.state.enableEmbedded) {
                    document.body.insertAdjacentElement('beforeend', modal);
                }
            }
            isInitialized = true;
        }
    }
}

const PACKAGE_VERSION = '1.8.7';

function createAppKit(options) {
    return new AppKit({
        ...options,
        basic: true,
        sdkVersion: `html-core-${PACKAGE_VERSION}`
    });
}

const core = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    AppKit,
    createAppKit
}, Symbol.toStringTag, { value: 'Module' }));

export { SafeLocalStorage as $, ApiController as A, W3mFrameRpcConstants as B, ConnectorController as C, BlockchainApiController as D, EventsController as E, SwapApiUtil as F, AlertController as G, HelpersUtil as H, BalanceUtil as I, getActiveNetworkTokenAddress as J, subscribeKey as K, subscribe as L, ModalController as M, NumberUtil as N, OptionsController as O, proxy as P, SIWXUtil as Q, RouterController as R, SnackController as S, ThemeController as T, ConstantsUtil as U, initializeTheming as V, WalletUtil as W, ParseUtil as X, NetworkUtil$1 as Y, SafeLocalStorageKeys as Z, getActiveCaipNetwork as _, CoreHelperUtil as a, Hash as a0, createView as a1, aexists as a2, toBytes as a3, abytes as a4, aoutput as a5, clean as a6, createHasher as a7, rotr as a8, ahash as a9, bytesToHex as aa, isBytes as ab, hexToBytes as ac, concatBytes as ad, anumber as ae, randomBytes as af, core as ag, ConnectionController as b, ConstantsUtil$3 as c, b as d, css as e, AssetController as f, ConnectorUtil as g, AssetUtil as h, i, elementStyles as j, AppKitError as k, ErrorUtil$1 as l, ConstantsUtil$2 as m, ChainController as n, CaipNetworksUtil as o, StorageUtil as p, A as q, resetStyles as r, i$3 as s, f$1 as t, u$1 as u, vars as v, w, E as x, withErrorBoundary as y, getPreferredAccountType as z };
