const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C45_iBWu.js","assets/index-Cw7cGahV.js","assets/index-B-hcGMM2.css","assets/custom-Bu-PKexr.js","assets/fallback-CsCeEstV.js","assets/parseUnits-Cvyezg1f.js","assets/parseSignature-B0XdJygq.js","assets/ccip-DkhwmHpq.js","assets/parseEther-BLV6iXX2.js","assets/secp256k1-CGIaR7XP.js","assets/features-mCyaZk-O.js","assets/basic-CMaLMYbR.js","assets/index-KfoJzzjG.js","assets/dijkstra-DpzGW89u.js","assets/w3m-modal-CGmdZK2k.js"])))=>i.map(i=>d[i]);
var _b;
import { cg as formatUnits, _ as __vitePreload, c3 as erc20Abi, ig as requireQuickFormatUnescaped, f_ as getDefaultExportFromCjs, ih as safeJsonStringify, ii as IEvents, ij as cjsExports, ik as fromString, il as toString, im as cjsExports$1, io as cjsExports$2, ip as C$5, iq as detect, ir as concat, is as sn$1, it as bs58, iu as decode, iv as encode, iw as base32, ix as blakejsExports, iy as eventsExports, iz as i$7, iA as h$4, iB as formatJsonRpcRequest, iC as r$3, iD as o$4, iE as f$7, iF as isJsonRpcRequest, iG as isJsonRpcResponse, iH as formatJsonRpcResult, iI as xe$1, iJ as Po$2, iK as Qe$2, iL as Qo$2, iM as safeJsonParse, iN as getBigIntRpcId, iO as formatJsonRpcError, iP as isJsonRpcResult, iQ as isJsonRpcError, iR as payloadId, iS as f$8, z as http, d2 as toHex$1 } from "./index-Cw7cGahV.js";
import { f as fallback } from "./fallback-CsCeEstV.js";
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
    return caipnetworkId ? Number(caipnetworkId.split(":")[1]) : void 0;
  },
  parseEvmChainId(chainId) {
    return typeof chainId === "string" ? this.caipNetworkIdToNumber(chainId) : chainId;
  },
  getNetworksByNamespace(networks, namespace) {
    return (networks == null ? void 0 : networks.filter((network) => network.chainNamespace === namespace)) || [];
  },
  getFirstNetworkByNamespace(networks, namespace) {
    return this.getNetworksByNamespace(networks, namespace)[0];
  },
  getNetworkNameByCaipNetworkId(caipNetworks, caipNetworkId) {
    var _a2;
    if (!caipNetworkId) {
      return void 0;
    }
    const caipNetwork = caipNetworks.find((network) => network.caipNetworkId === caipNetworkId);
    if (caipNetwork) {
      return caipNetwork.name;
    }
    const [namespace] = caipNetworkId.split(":");
    return ((_a2 = ConstantsUtil$3.CHAIN_NAME_MAP) == null ? void 0 : _a2[namespace]) || void 0;
  }
};
const AVAILABLE_NAMESPACES = [
  "eip155",
  "solana",
  "polkadot",
  "bip122",
  "cosmos",
  "sui",
  "stacks"
];
var DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -7, PE = 21, STRICT = false, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", P$4 = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function _Big_() {
  function Big2(n3) {
    var x2 = this;
    if (!(x2 instanceof Big2)) return n3 === UNDEFINED ? _Big_() : new Big2(n3);
    if (n3 instanceof Big2) {
      x2.s = n3.s;
      x2.e = n3.e;
      x2.c = n3.c.slice();
    } else {
      if (typeof n3 !== "string") {
        if (Big2.strict === true && typeof n3 !== "bigint") {
          throw TypeError(INVALID + "value");
        }
        n3 = n3 === 0 && 1 / n3 < 0 ? "-0" : String(n3);
      }
      parse(x2, n3);
    }
    x2.constructor = Big2;
  }
  Big2.prototype = P$4;
  Big2.DP = DP;
  Big2.RM = RM;
  Big2.NE = NE;
  Big2.PE = PE;
  Big2.strict = STRICT;
  Big2.roundDown = 0;
  Big2.roundHalfUp = 1;
  Big2.roundHalfEven = 2;
  Big2.roundUp = 3;
  return Big2;
}
function parse(x2, n3) {
  var e2, i2, nl;
  if (!NUMERIC.test(n3)) {
    throw Error(INVALID + "number");
  }
  x2.s = n3.charAt(0) == "-" ? (n3 = n3.slice(1), -1) : 1;
  if ((e2 = n3.indexOf(".")) > -1) n3 = n3.replace(".", "");
  if ((i2 = n3.search(/e/i)) > 0) {
    if (e2 < 0) e2 = i2;
    e2 += +n3.slice(i2 + 1);
    n3 = n3.substring(0, i2);
  } else if (e2 < 0) {
    e2 = n3.length;
  }
  nl = n3.length;
  for (i2 = 0; i2 < nl && n3.charAt(i2) == "0"; ) ++i2;
  if (i2 == nl) {
    x2.c = [x2.e = 0];
  } else {
    for (; nl > 0 && n3.charAt(--nl) == "0"; ) ;
    x2.e = e2 - i2 - 1;
    x2.c = [];
    for (e2 = 0; i2 <= nl; ) x2.c[e2++] = +n3.charAt(i2++);
  }
  return x2;
}
function round(x2, sd, rm, more) {
  var xc2 = x2.c;
  if (rm === UNDEFINED) rm = x2.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc2[0]) || sd === 0 && (rm === 1 && xc2[0] >= 5 || rm === 2 && (xc2[0] > 5 || xc2[0] === 5 && (more || xc2[1] !== UNDEFINED)));
    xc2.length = 1;
    if (more) {
      x2.e = x2.e - sd + 1;
      xc2[0] = 1;
    } else {
      xc2[0] = x2.e = 0;
    }
  } else if (sd < xc2.length) {
    more = rm === 1 && xc2[sd] >= 5 || rm === 2 && (xc2[sd] > 5 || xc2[sd] === 5 && (more || xc2[sd + 1] !== UNDEFINED || xc2[sd - 1] & 1)) || rm === 3 && (more || !!xc2[0]);
    xc2.length = sd;
    if (more) {
      for (; ++xc2[--sd] > 9; ) {
        xc2[sd] = 0;
        if (sd === 0) {
          ++x2.e;
          xc2.unshift(1);
          break;
        }
      }
    }
    for (sd = xc2.length; !xc2[--sd]; ) xc2.pop();
  }
  return x2;
}
function stringify(x2, doExponential, isNonzero) {
  var e2 = x2.e, s2 = x2.c.join(""), n3 = s2.length;
  if (doExponential) {
    s2 = s2.charAt(0) + (n3 > 1 ? "." + s2.slice(1) : "") + (e2 < 0 ? "e" : "e+") + e2;
  } else if (e2 < 0) {
    for (; ++e2; ) s2 = "0" + s2;
    s2 = "0." + s2;
  } else if (e2 > 0) {
    if (++e2 > n3) {
      for (e2 -= n3; e2--; ) s2 += "0";
    } else if (e2 < n3) {
      s2 = s2.slice(0, e2) + "." + s2.slice(e2);
    }
  } else if (n3 > 1) {
    s2 = s2.charAt(0) + "." + s2.slice(1);
  }
  return x2.s < 0 && isNonzero ? "-" + s2 : s2;
}
P$4.abs = function() {
  var x2 = new this.constructor(this);
  x2.s = 1;
  return x2;
};
P$4.cmp = function(y4) {
  var isneg, x2 = this, xc2 = x2.c, yc2 = (y4 = new x2.constructor(y4)).c, i2 = x2.s, j2 = y4.s, k2 = x2.e, l2 = y4.e;
  if (!xc2[0] || !yc2[0]) return !xc2[0] ? !yc2[0] ? 0 : -j2 : i2;
  if (i2 != j2) return i2;
  isneg = i2 < 0;
  if (k2 != l2) return k2 > l2 ^ isneg ? 1 : -1;
  j2 = (k2 = xc2.length) < (l2 = yc2.length) ? k2 : l2;
  for (i2 = -1; ++i2 < j2; ) {
    if (xc2[i2] != yc2[i2]) return xc2[i2] > yc2[i2] ^ isneg ? 1 : -1;
  }
  return k2 == l2 ? 0 : k2 > l2 ^ isneg ? 1 : -1;
};
P$4.div = function(y4) {
  var x2 = this, Big2 = x2.constructor, a2 = x2.c, b2 = (y4 = new Big2(y4)).c, k2 = x2.s == y4.s ? 1 : -1, dp = Big2.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  if (!b2[0]) {
    throw Error(DIV_BY_ZERO);
  }
  if (!a2[0]) {
    y4.s = k2;
    y4.c = [y4.e = 0];
    return y4;
  }
  var bl, bt2, n3, cmp, ri2, bz = b2.slice(), ai2 = bl = b2.length, al = a2.length, r2 = a2.slice(0, bl), rl = r2.length, q2 = y4, qc2 = q2.c = [], qi2 = 0, p2 = dp + (q2.e = x2.e - y4.e) + 1;
  q2.s = k2;
  k2 = p2 < 0 ? 0 : p2;
  bz.unshift(0);
  for (; rl++ < bl; ) r2.push(0);
  do {
    for (n3 = 0; n3 < 10; n3++) {
      if (bl != (rl = r2.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri2 = -1, cmp = 0; ++ri2 < bl; ) {
          if (b2[ri2] != r2[ri2]) {
            cmp = b2[ri2] > r2[ri2] ? 1 : -1;
            break;
          }
        }
      }
      if (cmp < 0) {
        for (bt2 = rl == bl ? b2 : bz; rl; ) {
          if (r2[--rl] < bt2[rl]) {
            ri2 = rl;
            for (; ri2 && !r2[--ri2]; ) r2[ri2] = 9;
            --r2[ri2];
            r2[rl] += 10;
          }
          r2[rl] -= bt2[rl];
        }
        for (; !r2[0]; ) r2.shift();
      } else {
        break;
      }
    }
    qc2[qi2++] = cmp ? n3 : ++n3;
    if (r2[0] && cmp) r2[rl] = a2[ai2] || 0;
    else r2 = [a2[ai2]];
  } while ((ai2++ < al || r2[0] !== UNDEFINED) && k2--);
  if (!qc2[0] && qi2 != 1) {
    qc2.shift();
    q2.e--;
    p2--;
  }
  if (qi2 > p2) round(q2, p2, Big2.RM, r2[0] !== UNDEFINED);
  return q2;
};
P$4.eq = function(y4) {
  return this.cmp(y4) === 0;
};
P$4.gt = function(y4) {
  return this.cmp(y4) > 0;
};
P$4.gte = function(y4) {
  return this.cmp(y4) > -1;
};
P$4.lt = function(y4) {
  return this.cmp(y4) < 0;
};
P$4.lte = function(y4) {
  return this.cmp(y4) < 1;
};
P$4.minus = P$4.sub = function(y4) {
  var i2, j2, t2, xlty, x2 = this, Big2 = x2.constructor, a2 = x2.s, b2 = (y4 = new Big2(y4)).s;
  if (a2 != b2) {
    y4.s = -b2;
    return x2.plus(y4);
  }
  var xc2 = x2.c.slice(), xe2 = x2.e, yc2 = y4.c, ye2 = y4.e;
  if (!xc2[0] || !yc2[0]) {
    if (yc2[0]) {
      y4.s = -b2;
    } else if (xc2[0]) {
      y4 = new Big2(x2);
    } else {
      y4.s = 1;
    }
    return y4;
  }
  if (a2 = xe2 - ye2) {
    if (xlty = a2 < 0) {
      a2 = -a2;
      t2 = xc2;
    } else {
      ye2 = xe2;
      t2 = yc2;
    }
    t2.reverse();
    for (b2 = a2; b2--; ) t2.push(0);
    t2.reverse();
  } else {
    j2 = ((xlty = xc2.length < yc2.length) ? xc2 : yc2).length;
    for (a2 = b2 = 0; b2 < j2; b2++) {
      if (xc2[b2] != yc2[b2]) {
        xlty = xc2[b2] < yc2[b2];
        break;
      }
    }
  }
  if (xlty) {
    t2 = xc2;
    xc2 = yc2;
    yc2 = t2;
    y4.s = -y4.s;
  }
  if ((b2 = (j2 = yc2.length) - (i2 = xc2.length)) > 0) for (; b2--; ) xc2[i2++] = 0;
  for (b2 = i2; j2 > a2; ) {
    if (xc2[--j2] < yc2[j2]) {
      for (i2 = j2; i2 && !xc2[--i2]; ) xc2[i2] = 9;
      --xc2[i2];
      xc2[j2] += 10;
    }
    xc2[j2] -= yc2[j2];
  }
  for (; xc2[--b2] === 0; ) xc2.pop();
  for (; xc2[0] === 0; ) {
    xc2.shift();
    --ye2;
  }
  if (!xc2[0]) {
    y4.s = 1;
    xc2 = [ye2 = 0];
  }
  y4.c = xc2;
  y4.e = ye2;
  return y4;
};
P$4.mod = function(y4) {
  var ygtx, x2 = this, Big2 = x2.constructor, a2 = x2.s, b2 = (y4 = new Big2(y4)).s;
  if (!y4.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x2.s = y4.s = 1;
  ygtx = y4.cmp(x2) == 1;
  x2.s = a2;
  y4.s = b2;
  if (ygtx) return new Big2(x2);
  a2 = Big2.DP;
  b2 = Big2.RM;
  Big2.DP = Big2.RM = 0;
  x2 = x2.div(y4);
  Big2.DP = a2;
  Big2.RM = b2;
  return this.minus(x2.times(y4));
};
P$4.neg = function() {
  var x2 = new this.constructor(this);
  x2.s = -x2.s;
  return x2;
};
P$4.plus = P$4.add = function(y4) {
  var e2, k2, t2, x2 = this, Big2 = x2.constructor;
  y4 = new Big2(y4);
  if (x2.s != y4.s) {
    y4.s = -y4.s;
    return x2.minus(y4);
  }
  var xe2 = x2.e, xc2 = x2.c, ye2 = y4.e, yc2 = y4.c;
  if (!xc2[0] || !yc2[0]) {
    if (!yc2[0]) {
      if (xc2[0]) {
        y4 = new Big2(x2);
      } else {
        y4.s = x2.s;
      }
    }
    return y4;
  }
  xc2 = xc2.slice();
  if (e2 = xe2 - ye2) {
    if (e2 > 0) {
      ye2 = xe2;
      t2 = yc2;
    } else {
      e2 = -e2;
      t2 = xc2;
    }
    t2.reverse();
    for (; e2--; ) t2.push(0);
    t2.reverse();
  }
  if (xc2.length - yc2.length < 0) {
    t2 = yc2;
    yc2 = xc2;
    xc2 = t2;
  }
  e2 = yc2.length;
  for (k2 = 0; e2; xc2[e2] %= 10) k2 = (xc2[--e2] = xc2[e2] + yc2[e2] + k2) / 10 | 0;
  if (k2) {
    xc2.unshift(k2);
    ++ye2;
  }
  for (e2 = xc2.length; xc2[--e2] === 0; ) xc2.pop();
  y4.c = xc2;
  y4.e = ye2;
  return y4;
};
P$4.pow = function(n3) {
  var x2 = this, one = new x2.constructor("1"), y4 = one, isneg = n3 < 0;
  if (n3 !== ~~n3 || n3 < -MAX_POWER || n3 > MAX_POWER) {
    throw Error(INVALID + "exponent");
  }
  if (isneg) n3 = -n3;
  for (; ; ) {
    if (n3 & 1) y4 = y4.times(x2);
    n3 >>= 1;
    if (!n3) break;
    x2 = x2.times(x2);
  }
  return isneg ? one.div(y4) : y4;
};
P$4.prec = function(sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + "precision");
  }
  return round(new this.constructor(this), sd, rm);
};
P$4.round = function(dp, rm) {
  if (dp === UNDEFINED) dp = 0;
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};
P$4.sqrt = function() {
  var r2, c2, t2, x2 = this, Big2 = x2.constructor, s2 = x2.s, e2 = x2.e, half = new Big2("0.5");
  if (!x2.c[0]) return new Big2(x2);
  if (s2 < 0) {
    throw Error(NAME + "No square root");
  }
  s2 = Math.sqrt(+stringify(x2, true, true));
  if (s2 === 0 || s2 === 1 / 0) {
    c2 = x2.c.join("");
    if (!(c2.length + e2 & 1)) c2 += "0";
    s2 = Math.sqrt(c2);
    e2 = ((e2 + 1) / 2 | 0) - (e2 < 0 || e2 & 1);
    r2 = new Big2((s2 == 1 / 0 ? "5e" : (s2 = s2.toExponential()).slice(0, s2.indexOf("e") + 1)) + e2);
  } else {
    r2 = new Big2(s2 + "");
  }
  e2 = r2.e + (Big2.DP += 4);
  do {
    t2 = r2;
    r2 = half.times(t2.plus(x2.div(t2)));
  } while (t2.c.slice(0, e2).join("") !== r2.c.slice(0, e2).join(""));
  return round(r2, (Big2.DP -= 4) + r2.e + 1, Big2.RM);
};
P$4.times = P$4.mul = function(y4) {
  var c2, x2 = this, Big2 = x2.constructor, xc2 = x2.c, yc2 = (y4 = new Big2(y4)).c, a2 = xc2.length, b2 = yc2.length, i2 = x2.e, j2 = y4.e;
  y4.s = x2.s == y4.s ? 1 : -1;
  if (!xc2[0] || !yc2[0]) {
    y4.c = [y4.e = 0];
    return y4;
  }
  y4.e = i2 + j2;
  if (a2 < b2) {
    c2 = xc2;
    xc2 = yc2;
    yc2 = c2;
    j2 = a2;
    a2 = b2;
    b2 = j2;
  }
  for (c2 = new Array(j2 = a2 + b2); j2--; ) c2[j2] = 0;
  for (i2 = b2; i2--; ) {
    b2 = 0;
    for (j2 = a2 + i2; j2 > i2; ) {
      b2 = c2[j2] + yc2[i2] * xc2[j2 - i2 - 1] + b2;
      c2[j2--] = b2 % 10;
      b2 = b2 / 10 | 0;
    }
    c2[j2] = b2;
  }
  if (b2) ++y4.e;
  else c2.shift();
  for (i2 = c2.length; !c2[--i2]; ) c2.pop();
  y4.c = c2;
  return y4;
};
P$4.toExponential = function(dp, rm) {
  var x2 = this, n3 = x2.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x2 = round(new x2.constructor(x2), ++dp, rm);
    for (; x2.c.length < dp; ) x2.c.push(0);
  }
  return stringify(x2, true, !!n3);
};
P$4.toFixed = function(dp, rm) {
  var x2 = this, n3 = x2.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x2 = round(new x2.constructor(x2), dp + x2.e + 1, rm);
    for (dp = dp + x2.e + 1; x2.c.length < dp; ) x2.c.push(0);
  }
  return stringify(x2, false, !!n3);
};
P$4[Symbol.for("nodejs.util.inspect.custom")] = P$4.toJSON = P$4.toString = function() {
  var x2 = this, Big2 = x2.constructor;
  return stringify(x2, x2.e <= Big2.NE || x2.e >= Big2.PE, !!x2.c[0]);
};
P$4.toNumber = function() {
  var n3 = +stringify(this, true, true);
  if (this.constructor.strict === true && !this.eq(n3.toString())) {
    throw Error(NAME + "Imprecise conversion");
  }
  return n3;
};
P$4.toPrecision = function(sd, rm) {
  var x2 = this, Big2 = x2.constructor, n3 = x2.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + "precision");
    }
    x2 = round(new Big2(x2), sd, rm);
    for (; x2.c.length < sd; ) x2.c.push(0);
  }
  return stringify(x2, sd <= x2.e || x2.e <= Big2.NE || x2.e >= Big2.PE, !!n3);
};
P$4.valueOf = function() {
  var x2 = this, Big2 = x2.constructor;
  if (Big2.strict === true) {
    throw Error(NAME + "valueOf disallowed");
  }
  return stringify(x2, x2.e <= Big2.NE || x2.e >= Big2.PE, true);
};
var Big = _Big_();
const NumberUtil = {
  bigNumber(value) {
    if (!value) {
      return new Big(0);
    }
    return new Big(value);
  },
  multiply(a2, b2) {
    if (a2 === void 0 || b2 === void 0) {
      return new Big(0);
    }
    const aBigNumber = new Big(a2);
    const bBigNumber = new Big(b2);
    return aBigNumber.times(bBigNumber);
  },
  toFixed(value, decimals = 2) {
    if (value === void 0 || value === "") {
      return new Big(0).toFixed(decimals);
    }
    return new Big(value).toFixed(decimals);
  },
  formatNumberToLocalString(value, decimals = 2) {
    if (value === void 0 || value === "") {
      return "0.00";
    }
    if (typeof value === "number") {
      return value.toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
        roundingMode: "floor"
      });
    }
    return parseFloat(value).toLocaleString("en-US", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
      roundingMode: "floor"
    });
  },
  parseLocalStringToNumber(value) {
    if (value === void 0 || value === "") {
      return 0;
    }
    const sanitizedValue = value.replace(/,/gu, "");
    return new Big(sanitizedValue).toNumber();
  }
};
const erc20ABI = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];
const swapABI = [
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: [{ type: "bool" }]
  }
];
const usdtABI = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
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
    var _a2;
    if (((_a2 = address.split(":")) == null ? void 0 : _a2.length) !== 3) {
      throw new Error("Invalid CAIP Address");
    }
    return address;
  },
  parseCaipAddress(caipAddress) {
    const parts = caipAddress.split(":");
    if (parts.length !== 3) {
      throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
    }
    const [chainNamespace, chainId, address] = parts;
    if (!chainNamespace || !chainId || !address) {
      throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
    }
    return {
      chainNamespace,
      chainId,
      address
    };
  },
  parseCaipNetworkId(caipNetworkId) {
    const parts = caipNetworkId.split(":");
    if (parts.length !== 2) {
      throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
    }
    const [chainNamespace, chainId] = parts;
    if (!chainNamespace || !chainId) {
      throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
    }
    return {
      chainNamespace,
      chainId
    };
  }
};
const ErrorUtil$1 = {
  RPC_ERROR_CODE: {
    USER_REJECTED_REQUEST: 4001
  },
  PROVIDER_RPC_ERROR_NAME: {
    PROVIDER_RPC: "ProviderRpcError",
    USER_REJECTED_REQUEST: "UserRejectedRequestError"
  },
  isRpcProviderError(error) {
    try {
      if (typeof error === "object" && error !== null) {
        const objErr = error;
        const hasMessage = typeof objErr["message"] === "string";
        const hasCode = typeof objErr["code"] === "number";
        return hasMessage && hasCode;
      }
      return false;
    } catch {
      return false;
    }
  },
  isUserRejectedMessage(message) {
    return message.toLowerCase().includes("user rejected") || message.toLowerCase().includes("user cancelled") || message.toLowerCase().includes("user canceled");
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
      message: "User rejected the request"
    });
    this.name = ErrorUtil$1.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
  }
}
const SafeLocalStorageKeys = {
  WALLET_ID: "@appkit/wallet_id",
  WALLET_NAME: "@appkit/wallet_name",
  SOLANA_WALLET: "@appkit/solana_wallet",
  SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
  ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
  CONNECTED_SOCIAL: "@appkit/connected_social",
  CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
  RECENT_WALLETS: "@appkit/recent_wallets",
  RECENT_WALLET: "@appkit/recent_wallet",
  DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  ACTIVE_NAMESPACE: "@appkit/active_namespace",
  CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
  CONNECTION_STATUS: "@appkit/connection_status",
  SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
  SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
  TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
  NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
  PORTFOLIO_CACHE: "@appkit/portfolio_cache",
  ENS_CACHE: "@appkit/ens_cache",
  IDENTITY_CACHE: "@appkit/identity_cache",
  PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
  CONNECTIONS: "@appkit/connections",
  DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
  HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
  TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
  RECENT_EMAILS: "@appkit/recent_emails",
  LATEST_APPKIT_VERSION: "@appkit/latest_version"
};
function getSafeConnectorIdKey(namespace) {
  if (!namespace) {
    throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  }
  return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage = {
  setItem(key, value) {
    if (isSafe() && value !== void 0) {
      localStorage.setItem(key, value);
    }
  },
  getItem(key) {
    if (isSafe()) {
      return localStorage.getItem(key) || void 0;
    }
    return void 0;
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
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}
function getW3mThemeVariables(themeVariables, themeType) {
  if (themeType === "light") {
    return {
      "--w3m-accent": (themeVariables == null ? void 0 : themeVariables["--w3m-accent"]) || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    };
  }
  return {
    "--w3m-accent": (themeVariables == null ? void 0 : themeVariables["--w3m-accent"]) || "hsla(230, 100%, 67%, 1)",
    "--w3m-background": "#202020"
  };
}
const GET_ORIGINAL_SYMBOL = Symbol();
const getProto = Object.getPrototypeOf;
const objectsToTrack = /* @__PURE__ */ new WeakMap();
const isObjectToTrack = (obj) => obj && (objectsToTrack.has(obj) ? objectsToTrack.get(obj) : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
const getUntracked = (obj) => {
  if (isObjectToTrack(obj)) {
    return obj[GET_ORIGINAL_SYMBOL] || null;
  }
  return null;
};
const markToTrack = (obj, mark = true) => {
  objectsToTrack.set(obj, mark);
};
const __vite_import_meta_env__ = {};
const isObject = (x2) => typeof x2 === "object" && x2 !== null;
const canProxyDefault = (x2) => isObject(x2) && !refSet.has(x2) && (Array.isArray(x2) || !(Symbol.iterator in x2)) && !(x2 instanceof WeakMap) && !(x2 instanceof WeakSet) && !(x2 instanceof Error) && !(x2 instanceof Number) && !(x2 instanceof Date) && !(x2 instanceof String) && !(x2 instanceof RegExp) && !(x2 instanceof ArrayBuffer) && !(x2 instanceof Promise);
const createSnapshotDefault = (target, version2) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version2) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  markToTrack(snap, true);
  snapCache.set(target, [version2, snap]);
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
  let version2 = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version2 !== nextVersion) {
      checkVersion = version2 = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = version2;
  const ensureVersion = (nextCheckVersion = versionHolder[0]) => {
    if (checkVersion !== nextCheckVersion) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version2) {
          version2 = propVersion;
        }
      });
    }
    return version2;
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
    var _a2;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a2 = entry[1]) == null ? void 0 : _a2.call(entry);
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
    }
  );
}
const { proxyStateMap: proxyStateMap$1, snapCache: snapCache$1 } = unstable_getInternalStates();
const isProxy$1 = (x2) => proxyStateMap$1.has(x2);
function proxyMap(entries2) {
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
  const getMapForThis = (x2) => snapMapCache.get(x2) || indexMap;
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
const StorageUtil = {
  // Cache expiry in milliseconds
  cacheExpiry: {
    portfolio: 3e4,
    nativeBalance: 3e4,
    ens: 3e5,
    identity: 3e5,
    transactionsHistory: 15e3,
    tokenPrice: 15e3,
    // 7 Days
    latestAppKitVersion: 6048e5
  },
  isCacheExpired(timestamp, cacheExpiry) {
    return Date.now() - timestamp > cacheExpiry;
  },
  getActiveNetworkProps() {
    const namespace = StorageUtil.getActiveNamespace();
    const caipNetworkId = StorageUtil.getActiveCaipNetworkId();
    const stringChainId = caipNetworkId ? caipNetworkId.split(":")[1] : void 0;
    const chainId = stringChainId ? isNaN(Number(stringChainId)) ? stringChainId : Number(stringChainId) : void 0;
    return {
      namespace,
      caipNetworkId,
      chainId
    };
  },
  setWalletConnectDeepLink({ name, href }) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.DEEPLINK_CHOICE, JSON.stringify({ href, name }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const deepLink = SafeLocalStorage.getItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
      if (deepLink) {
        return JSON.parse(deepLink);
      }
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
    return void 0;
  },
  deleteWalletConnectDeepLink() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setActiveNamespace(namespace) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE, namespace);
    } catch {
      console.info("Unable to set active namespace");
    }
  },
  setActiveCaipNetworkId(caipNetworkId) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
      StorageUtil.setActiveNamespace(caipNetworkId.split(":")[0]);
    } catch {
      console.info("Unable to set active caip network id");
    }
  },
  getActiveCaipNetworkId() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to get active caip network id");
      return void 0;
    }
  },
  deleteActiveCaipNetworkId() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to delete active caip network id");
    }
  },
  deleteConnectedConnectorId(namespace) {
    try {
      const key = getSafeConnectorIdKey(namespace);
      SafeLocalStorage.removeItem(key);
    } catch {
      console.info("Unable to delete connected connector id");
    }
  },
  setAppKitRecent(wallet) {
    try {
      const recentWallets = StorageUtil.getRecentWallets();
      const exists = recentWallets.find((w2) => w2.id === wallet.id);
      if (!exists) {
        recentWallets.unshift(wallet);
        if (recentWallets.length > 2) {
          recentWallets.pop();
        }
        SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLETS, JSON.stringify(recentWallets));
        SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLET, JSON.stringify(wallet));
      }
    } catch {
      console.info("Unable to set AppKit recent");
    }
  },
  getRecentWallets() {
    try {
      const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLETS);
      return recent ? JSON.parse(recent) : [];
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return [];
  },
  getRecentWallet() {
    try {
      const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLET);
      return recent ? JSON.parse(recent) : null;
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return null;
  },
  deleteRecentWallet() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.RECENT_WALLET);
    } catch {
      console.info("Unable to delete AppKit recent");
    }
  },
  setConnectedConnectorId(namespace, connectorId) {
    try {
      const key = getSafeConnectorIdKey(namespace);
      SafeLocalStorage.setItem(key, connectorId);
    } catch {
      console.info("Unable to set Connected Connector Id");
    }
  },
  getActiveNamespace() {
    try {
      const activeNamespace = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE);
      return activeNamespace;
    } catch {
      console.info("Unable to get active namespace");
    }
    return void 0;
  },
  getConnectedConnectorId(namespace) {
    if (!namespace) {
      return void 0;
    }
    try {
      const key = getSafeConnectorIdKey(namespace);
      return SafeLocalStorage.getItem(key);
    } catch (e2) {
      console.info("Unable to get connected connector id in namespace", namespace);
    }
    return void 0;
  },
  setConnectedSocialProvider(socialProvider) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_SOCIAL, socialProvider);
    } catch {
      console.info("Unable to set connected social provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get connected social provider");
    }
    return void 0;
  },
  deleteConnectedSocialProvider() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to delete connected social provider");
    }
  },
  getConnectedSocialUsername() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get connected social username");
    }
    return void 0;
  },
  getStoredActiveCaipNetworkId() {
    var _a2;
    const storedCaipNetworkId = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    const networkId = (_a2 = storedCaipNetworkId == null ? void 0 : storedCaipNetworkId.split(":")) == null ? void 0 : _a2[1];
    return networkId;
  },
  setConnectionStatus(status) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTION_STATUS, status);
    } catch {
      console.info("Unable to set connection status");
    }
  },
  getConnectionStatus() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTION_STATUS);
    } catch {
      return void 0;
    }
  },
  getConnectedNamespaces() {
    try {
      const namespaces = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES);
      if (!(namespaces == null ? void 0 : namespaces.length)) {
        return [];
      }
      return namespaces.split(",");
    } catch {
      return [];
    }
  },
  setConnectedNamespaces(namespaces) {
    try {
      const uniqueNamespaces = Array.from(new Set(namespaces));
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES, uniqueNamespaces.join(","));
    } catch {
      console.info("Unable to set namespaces in storage");
    }
  },
  addConnectedNamespace(namespace) {
    try {
      const namespaces = StorageUtil.getConnectedNamespaces();
      if (!namespaces.includes(namespace)) {
        namespaces.push(namespace);
        StorageUtil.setConnectedNamespaces(namespaces);
      }
    } catch {
      console.info("Unable to add connected namespace");
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
    } catch {
      console.info("Unable to remove connected namespace");
    }
  },
  getTelegramSocialProvider() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to get telegram social provider");
      return null;
    }
  },
  setTelegramSocialProvider(socialProvider) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER, socialProvider);
    } catch {
      console.info("Unable to set telegram social provider");
    }
  },
  removeTelegramSocialProvider() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to remove telegram social provider");
    }
  },
  getBalanceCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return cache;
  },
  removeAddressFromBalanceCache(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify({ ...cache, [caipAddress]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", caipAddress);
    }
  },
  getBalanceCacheForCaipAddress(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      const balanceCache = cache[caipAddress];
      if (balanceCache && !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) {
        return balanceCache.balance;
      }
      StorageUtil.removeAddressFromBalanceCache(caipAddress);
    } catch {
      console.info("Unable to get balance cache for address", caipAddress);
    }
    return void 0;
  },
  updateBalanceCache(params) {
    try {
      const cache = StorageUtil.getBalanceCache();
      cache[params.caipAddress] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update balance cache", params);
    }
  },
  getNativeBalanceCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return cache;
  },
  removeAddressFromNativeBalanceCache(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify({ ...cache, [caipAddress]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", caipAddress);
    }
  },
  getNativeBalanceCacheForCaipAddress(caipAddress) {
    try {
      const cache = StorageUtil.getNativeBalanceCache();
      const nativeBalanceCache = cache[caipAddress];
      if (nativeBalanceCache && !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) {
        return nativeBalanceCache;
      }
      console.info("Discarding cache for address", caipAddress);
      StorageUtil.removeAddressFromBalanceCache(caipAddress);
    } catch {
      console.info("Unable to get balance cache for address", caipAddress);
    }
    return void 0;
  },
  updateNativeBalanceCache(params) {
    try {
      const cache = StorageUtil.getNativeBalanceCache();
      cache[params.caipAddress] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update balance cache", params);
    }
  },
  getEnsCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.ENS_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get ens name cache");
    }
    return cache;
  },
  getEnsFromCacheForAddress(address) {
    try {
      const cache = StorageUtil.getEnsCache();
      const ensCache = cache[address];
      if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) {
        return ensCache.ens;
      }
      StorageUtil.removeEnsFromCache(address);
    } catch {
      console.info("Unable to get ens name from cache", address);
    }
    return void 0;
  },
  updateEnsCache(params) {
    try {
      const cache = StorageUtil.getEnsCache();
      cache[params.address] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update ens name cache", params);
    }
  },
  removeEnsFromCache(address) {
    try {
      const cache = StorageUtil.getEnsCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify({ ...cache, [address]: void 0 }));
    } catch {
      console.info("Unable to remove ens name from cache", address);
    }
  },
  getIdentityCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.IDENTITY_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get identity cache");
    }
    return cache;
  },
  getIdentityFromCacheForAddress(address) {
    try {
      const cache = StorageUtil.getIdentityCache();
      const identityCache = cache[address];
      if (identityCache && !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) {
        return identityCache.identity;
      }
      StorageUtil.removeIdentityFromCache(address);
    } catch {
      console.info("Unable to get identity from cache", address);
    }
    return void 0;
  },
  updateIdentityCache(params) {
    try {
      const cache = StorageUtil.getIdentityCache();
      cache[params.address] = {
        identity: params.identity,
        timestamp: params.timestamp
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update identity cache", params);
    }
  },
  removeIdentityFromCache(address) {
    try {
      const cache = StorageUtil.getIdentityCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify({ ...cache, [address]: void 0 }));
    } catch {
      console.info("Unable to remove identity from cache", address);
    }
  },
  clearAddressCache() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.ENS_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.IDENTITY_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
    } catch {
      console.info("Unable to clear address cache");
    }
  },
  setPreferredAccountTypes(accountTypes) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
    } catch {
      console.info("Unable to set preferred account types", accountTypes);
    }
  },
  getPreferredAccountTypes() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);
      if (!result) {
        return {};
      }
      return JSON.parse(result);
    } catch {
      console.info("Unable to get preferred account types");
    }
    return {};
  },
  setConnections(connections, chainNamespace) {
    try {
      const existingConnections = StorageUtil.getConnections();
      const existing = existingConnections[chainNamespace] ?? [];
      const connectorConnectionMap = /* @__PURE__ */ new Map();
      for (const conn of existing) {
        connectorConnectionMap.set(conn.connectorId, { ...conn });
      }
      for (const conn of connections) {
        const existingConn = connectorConnectionMap.get(conn.connectorId);
        const isAuth = conn.connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
        if (existingConn && !isAuth) {
          const existingAddrs = new Set(existingConn.accounts.map((a2) => a2.address.toLowerCase()));
          const newAccounts = conn.accounts.filter((a2) => !existingAddrs.has(a2.address.toLowerCase()));
          existingConn.accounts.push(...newAccounts);
        } else {
          connectorConnectionMap.set(conn.connectorId, { ...conn });
        }
      }
      const dedupedConnections = {
        ...existingConnections,
        [chainNamespace]: Array.from(connectorConnectionMap.values())
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify(dedupedConnections));
    } catch (error) {
      console.error("Unable to sync connections to storage", error);
    }
  },
  getConnections() {
    try {
      const connectionsStorage = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTIONS);
      if (!connectionsStorage) {
        return {};
      }
      return JSON.parse(connectionsStorage);
    } catch (error) {
      console.error("Unable to get connections from storage", error);
      return {};
    }
  },
  deleteAddressFromConnection({ connectorId, address, namespace }) {
    try {
      const connections = StorageUtil.getConnections();
      const namespaceConnections = connections[namespace] ?? [];
      const connectionMap = new Map(namespaceConnections.map((conn) => [conn.connectorId, conn]));
      const connector = connectionMap.get(connectorId);
      if (connector) {
        const updatedAccounts = connector.accounts.filter((acc) => acc.address.toLowerCase() !== address.toLowerCase());
        if (updatedAccounts.length === 0) {
          connectionMap.delete(connectorId);
        } else {
          connectionMap.set(connectorId, {
            ...connector,
            accounts: connector.accounts.filter((acc) => acc.address.toLowerCase() !== address.toLowerCase())
          });
        }
      }
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify({
        ...connections,
        [namespace]: Array.from(connectionMap.values())
      }));
    } catch {
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
    } catch {
      console.info("Unable to get disconnected connector ids");
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
    } catch {
      console.error(`Unable to set disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
    }
  },
  removeDisconnectedConnectorId(connectorId, chainNamespace) {
    try {
      const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
      let disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
      disconnectedConnectorIdsByNamespace = disconnectedConnectorIdsByNamespace.filter((id) => id.toLowerCase() !== connectorId.toLowerCase());
      SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
        ...currentDisconnectedConnectorIds,
        [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
      }));
    } catch {
      console.error(`Unable to remove disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
    }
  },
  isConnectorDisconnected(connectorId, chainNamespace) {
    try {
      const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
      const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
      return disconnectedConnectorIdsByNamespace.some((id) => id.toLowerCase() === connectorId.toLowerCase());
    } catch {
      console.info(`Unable to get disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
    }
    return false;
  },
  getTransactionsCache() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
      return result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get transactions cache");
    }
    return {};
  },
  getTransactionsCacheForAddress({ address, chainId = "" }) {
    var _a2;
    try {
      const cache = StorageUtil.getTransactionsCache();
      const transactionsCache = (_a2 = cache[address]) == null ? void 0 : _a2[chainId];
      if (transactionsCache && !this.isCacheExpired(transactionsCache.timestamp, this.cacheExpiry.transactionsHistory)) {
        return transactionsCache.transactions;
      }
      StorageUtil.removeTransactionsCache({ address, chainId });
    } catch {
      console.info("Unable to get transactions cache");
    }
    return void 0;
  },
  updateTransactionsCache({ address, chainId = "", timestamp, transactions }) {
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
    } catch {
      console.info("Unable to update transactions cache", {
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
      const addressCache = (cache == null ? void 0 : cache[address]) || {};
      const { [chainId]: _removed, ...updatedChainData } = addressCache;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
        ...cache,
        [address]: updatedChainData
      }));
    } catch {
      console.info("Unable to remove transactions cache", { address, chainId });
    }
  },
  getTokenPriceCache() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE);
      return result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get token price cache");
    }
    return {};
  },
  getTokenPriceCacheForAddresses(addresses) {
    try {
      const cache = StorageUtil.getTokenPriceCache();
      const tokenPriceCache = cache[addresses.join(",")];
      if (tokenPriceCache && !this.isCacheExpired(tokenPriceCache.timestamp, this.cacheExpiry.tokenPrice)) {
        return tokenPriceCache.tokenPrice;
      }
      StorageUtil.removeTokenPriceCache(addresses);
    } catch {
      console.info("Unable to get token price cache for addresses", addresses);
    }
    return void 0;
  },
  updateTokenPriceCache(params) {
    try {
      const cache = StorageUtil.getTokenPriceCache();
      cache[params.addresses.join(",")] = {
        timestamp: params.timestamp,
        tokenPrice: params.tokenPrice
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update token price cache", params);
    }
  },
  removeTokenPriceCache(addresses) {
    try {
      const cache = StorageUtil.getTokenPriceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify({ ...cache, [addresses.join(",")]: void 0 }));
    } catch {
      console.info("Unable to remove token price cache", addresses);
    }
  },
  /* ----- AppKit Latest Version ------------------------- */
  getLatestAppKitVersion() {
    try {
      const result = this.getLatestAppKitVersionCache();
      const version2 = result == null ? void 0 : result.version;
      if (version2 && !this.isCacheExpired(result.timestamp, this.cacheExpiry.latestAppKitVersion)) {
        return version2;
      }
      return void 0;
    } catch {
      console.info("Unable to get latest AppKit version");
    }
    return void 0;
  },
  getLatestAppKitVersionCache() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION);
      return result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get latest AppKit version cache");
    }
    return {};
  },
  updateLatestAppKitVersion(params) {
    try {
      const cache = StorageUtil.getLatestAppKitVersionCache();
      cache.timestamp = params.timestamp;
      cache.version = params.version;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION, JSON.stringify(cache));
    } catch {
      console.info("Unable to update latest AppKit version on local storage", params);
    }
  }
};
const CoreHelperUtil = {
  isMobile() {
    var _a2;
    if (this.isClient()) {
      return Boolean((window == null ? void 0 : window.matchMedia) && typeof window.matchMedia === "function" && ((_a2 = window.matchMedia("(pointer:coarse)")) == null ? void 0 : _a2.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
    }
    return false;
  },
  checkCaipNetwork(network, networkName = "") {
    return network == null ? void 0 : network.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
  },
  isAndroid() {
    if (!this.isMobile()) {
      return false;
    }
    const ua2 = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return CoreHelperUtil.isMobile() && ua2.includes("android");
  },
  isIos() {
    if (!this.isMobile()) {
      return false;
    }
    const ua2 = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return ua2.includes("iphone") || ua2.includes("ipad");
  },
  isSafari() {
    if (!this.isClient()) {
      return false;
    }
    const ua2 = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return ua2.includes("safari");
  },
  isClient() {
    return typeof window !== "undefined";
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
      return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
    } catch (e2) {
      return false;
    }
  },
  isSafeApp() {
    var _a2, _b2;
    if (CoreHelperUtil.isClient() && window.self !== window.top) {
      try {
        const ancestor = (_b2 = (_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.ancestorOrigins) == null ? void 0 : _b2[0];
        const safeAppUrl = "https://app.safe.global";
        if (ancestor) {
          const ancestorUrl = new URL(ancestor);
          const safeUrl = new URL(safeAppUrl);
          return ancestorUrl.hostname === safeUrl.hostname;
        }
      } catch {
        return false;
      }
    }
    return false;
  },
  getPairingExpiry() {
    return Date.now() + ConstantsUtil$2.FOUR_MINUTES_MS;
  },
  getNetworkId(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[1];
  },
  getPlainAddress(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[2];
  },
  async wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce(func, timeout = 500) {
    let timer = void 0;
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
    return url.startsWith("http://") || url.startsWith("https://");
  },
  formatNativeUrl(appUrl, wcUri, universalLink = null) {
    if (CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    let safeUniversalLink = universalLink;
    if (safeAppUrl) {
      if (!safeAppUrl.includes("://")) {
        safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
        safeAppUrl = `${safeAppUrl}://`;
      }
      if (!safeAppUrl.endsWith("/")) {
        safeAppUrl = `${safeAppUrl}/`;
      }
    }
    if (safeUniversalLink && !(safeUniversalLink == null ? void 0 : safeUniversalLink.endsWith("/"))) {
      safeUniversalLink = `${safeUniversalLink}/`;
    }
    if (this.isTelegram() && this.isAndroid()) {
      wcUri = encodeURIComponent(wcUri);
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      redirectUniversalLink: safeUniversalLink ? `${safeUniversalLink}wc?uri=${encodedWcUrl}` : void 0,
      href: safeAppUrl
    };
  },
  formatUniversalUrl(appUrl, wcUri) {
    if (!CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      href: safeAppUrl
    };
  },
  getOpenTargetForPlatform(target) {
    if (target === "popupWindow") {
      return target;
    }
    if (this.isTelegram()) {
      if (StorageUtil.getTelegramSocialProvider()) {
        return "_top";
      }
      return "_blank";
    }
    return target;
  },
  openHref(href, target, features) {
    window == null ? void 0 : window.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
  },
  returnOpenHref(href, target, features) {
    return window == null ? void 0 : window.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
  },
  isTelegram() {
    return typeof window !== "undefined" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Boolean(window.TelegramWebviewProxy) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.Telegram) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.TelegramWebviewProxyProto));
  },
  isPWA() {
    var _a2, _b2;
    if (typeof window === "undefined") {
      return false;
    }
    const isStandaloneDisplayMode = (window == null ? void 0 : window.matchMedia) && typeof window.matchMedia === "function" ? (_a2 = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : _a2.matches : false;
    const isIOSStandalone = (_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.standalone;
    return Boolean(isStandaloneDisplayMode || isIOSStandalone);
  },
  async preloadImage(src) {
    const imagePromise = new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.crossOrigin = "anonymous";
      image.src = src;
    });
    return Promise.race([imagePromise, CoreHelperUtil.wait(2e3)]);
  },
  parseBalance(balance, symbol) {
    let formattedBalance = "0.000";
    if (typeof balance === "string") {
      const number = Number(balance);
      if (!isNaN(number)) {
        const formattedValue = (Math.floor(number * 1e3) / 1e3).toFixed(3);
        if (formattedValue) {
          formattedBalance = formattedValue;
        }
      }
    }
    const [valueString, decimalsString] = formattedBalance.split(".");
    const value = valueString || "0";
    const decimals = decimalsString || "000";
    const formattedText = `${value}.${decimals}${symbol ? ` ${symbol}` : ""}`;
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
    if (crypto == null ? void 0 : crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (c2) => {
      const r2 = Math.random() * 16 | 0;
      const v2 = c2 === "x" ? r2 : r2 & 3 | 8;
      return v2.toString(16);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseError(error) {
    var _a2, _b2;
    if (typeof error === "string") {
      return error;
    } else if (typeof ((_b2 = (_a2 = error == null ? void 0 : error.issues) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.message) === "string") {
      return error.issues[0].message;
    } else if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error";
  },
  sortRequestedNetworks(approvedIds, requestedNetworks = []) {
    const approvedIndexMap = {};
    if (requestedNetworks && approvedIds) {
      approvedIds.forEach((id, index) => {
        approvedIndexMap[id] = index;
      });
      requestedNetworks.sort((a2, b2) => {
        const indexA = approvedIndexMap[a2.id];
        const indexB = approvedIndexMap[b2.id];
        if (indexA !== void 0 && indexB !== void 0) {
          return indexA - indexB;
        } else if (indexA !== void 0) {
          return -1;
        } else if (indexB !== void 0) {
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
    const [dollars, pennies] = roundedNumber.split(".");
    return { dollars, pennies };
  },
  isAddress(address, chain = "eip155") {
    switch (chain) {
      case "eip155":
        if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
          return false;
        } else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
          return true;
        }
        return false;
      case "solana":
        return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
      default:
        return false;
    }
  },
  uniqueBy(arr, key) {
    const set = /* @__PURE__ */ new Set();
    return arr.filter((item) => {
      const keyValue = item[key];
      if (set.has(keyValue)) {
        return false;
      }
      set.add(keyValue);
      return true;
    });
  },
  generateSdkVersion(adapters, platform, version2) {
    const hasNoAdapters = adapters.length === 0;
    const adapterNames = hasNoAdapters ? ConstantsUtil$2.ADAPTER_TYPES.UNIVERSAL : adapters.map((adapter) => adapter.adapterType).join(",");
    return `${platform}-${adapterNames}-${version2}`;
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
    if (typeof address !== "string") {
      return false;
    }
    const sections = address.split(":");
    const namespace = sections[0];
    return sections.filter(Boolean).length === 3 && namespace in ConstantsUtil$3.CHAIN_NAME_MAP;
  },
  getAccount(account) {
    if (!account) {
      return {
        address: void 0,
        chainId: void 0
      };
    }
    if (typeof account === "string") {
      return {
        address: account,
        chainId: void 0
      };
    }
    return {
      address: account.address,
      chainId: account.chainId
    };
  },
  isMac() {
    const ua2 = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return ua2.includes("macintosh") && !ua2.includes("safari");
  },
  formatTelegramSocialLoginUrl(url) {
    const valueToInject = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`;
    const paramToInject = "state=";
    const parsedUrl = new URL(url);
    if (parsedUrl.host === "auth.magic.link") {
      const providerParam = "provider_authorization_url=";
      const providerUrl = url.substring(url.indexOf(providerParam) + providerParam.length);
      const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
      return url.replace(providerUrl, encodeURIComponent(resultUrl));
    }
    return this.injectIntoUrl(url, paramToInject, valueToInject);
  },
  injectIntoUrl(url, key, appendString) {
    const keyIndex = url.indexOf(key);
    if (keyIndex === -1) {
      throw new Error(`${key} parameter not found in the URL: ${url}`);
    }
    const keyEndIndex = url.indexOf("&", keyIndex);
    const keyLength = key.length;
    const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
    const beforeKeyValue = url.substring(0, keyIndex + keyLength);
    const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
    const afterKeyValue = url.substring(keyEndIndex);
    const newKeyValue = currentKeyValue + appendString;
    const newUrl = beforeKeyValue + newKeyValue + afterKeyValue;
    return newUrl;
  }
};
async function fetchData(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const err = new Error(`HTTP status code: ${response.status}`, {
      cause: response
    });
    throw err;
  }
  return response;
}
class FetchUtil {
  constructor({ baseUrl: baseUrl2, clientId }) {
    this.baseUrl = baseUrl2;
    this.clientId = clientId;
  }
  async get({ headers, signal, cache, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal, cache });
    return response.json();
  }
  async getBlob({ headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal });
    return response.blob();
  }
  async post({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "POST",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async put({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "PUT",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async delete({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "DELETE",
      headers,
      body: body ? JSON.stringify(body) : void 0,
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
      url.searchParams.append("clientId", this.clientId);
    }
    return url;
  }
  sendBeacon({ body, ...args }) {
    const url = this.createUrl(args);
    return navigator.sendBeacon(url.toString(), body ? JSON.stringify(body) : void 0);
  }
}
const OptionsUtil = {
  getFeatureValue(key, features) {
    const optionValue = features == null ? void 0 : features[key];
    if (optionValue === void 0) {
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
        return socials.filter((s2) => s2 !== "google");
      }
      if (CoreHelperUtil.isMac()) {
        return socials.filter((s2) => s2 !== "x");
      }
      if (CoreHelperUtil.isAndroid()) {
        return socials.filter((s2) => !["facebook", "x"].includes(s2));
      }
    }
    return socials;
  },
  isSocialsEnabled() {
    var _a2, _b2, _c2, _d;
    return Array.isArray((_a2 = OptionsController.state.features) == null ? void 0 : _a2.socials) && ((_b2 = OptionsController.state.features) == null ? void 0 : _b2.socials.length) > 0 || Array.isArray((_c2 = OptionsController.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d = OptionsController.state.remoteFeatures) == null ? void 0 : _d.socials.length) > 0;
  },
  isEmailEnabled() {
    var _a2, _b2;
    return Boolean(((_a2 = OptionsController.state.features) == null ? void 0 : _a2.email) || ((_b2 = OptionsController.state.remoteFeatures) == null ? void 0 : _b2.email));
  }
};
const state$k = proxy({
  features: ConstantsUtil$2.DEFAULT_FEATURES,
  projectId: "",
  sdkType: "appkit",
  sdkVersion: "html-wagmi-undefined",
  defaultAccountTypes: ConstantsUtil$2.DEFAULT_ACCOUNT_TYPES,
  enableNetworkSwitch: true,
  experimental_preferUniversalLinks: false,
  remoteFeatures: {},
  enableMobileFullScreen: false
});
const OptionsController = {
  state: state$k,
  subscribeKey(key, callback) {
    return subscribeKey(state$k, key, callback);
  },
  setOptions(options) {
    Object.assign(state$k, options);
  },
  setRemoteFeatures(remoteFeatures) {
    var _a2, _b2;
    if (!remoteFeatures) {
      return;
    }
    const newRemoteFeatures = { ...state$k.remoteFeatures, ...remoteFeatures };
    state$k.remoteFeatures = newRemoteFeatures;
    if ((_a2 = state$k.remoteFeatures) == null ? void 0 : _a2.socials) {
      state$k.remoteFeatures.socials = OptionsUtil.filterSocialsByPlatform(state$k.remoteFeatures.socials);
    }
    if ((_b2 = state$k.features) == null ? void 0 : _b2.pay) {
      state$k.remoteFeatures.email = false;
      state$k.remoteFeatures.socials = false;
    }
  },
  setFeatures(features) {
    var _a2;
    if (!features) {
      return;
    }
    if (!state$k.features) {
      state$k.features = ConstantsUtil$2.DEFAULT_FEATURES;
    }
    const newFeatures = { ...state$k.features, ...features };
    state$k.features = newFeatures;
    if (((_a2 = state$k.features) == null ? void 0 : _a2.pay) && state$k.remoteFeatures) {
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
  setTokens(tokens2) {
    state$k.tokens = tokens2;
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
        siwx[key] ?? (siwx[key] = isVal);
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
const DEFAULT_STATE$1 = Object.freeze({
  message: "",
  variant: "success",
  svg: void 0,
  open: false,
  autoClose: true
});
const state$j = proxy({
  ...DEFAULT_STATE$1
});
const controller$c = {
  state: state$j,
  subscribeKey(key, callback) {
    return subscribeKey(state$j, key, callback);
  },
  showLoading(message, options = {}) {
    this._showMessage({ message, variant: "loading", ...options });
  },
  showSuccess(message) {
    this._showMessage({ message, variant: "success" });
  },
  showSvg(message, svg) {
    this._showMessage({ message, svg });
  },
  showError(message) {
    const errorMessage = CoreHelperUtil.parseError(message);
    this._showMessage({ message: errorMessage, variant: "error" });
  },
  hide() {
    state$j.message = DEFAULT_STATE$1.message;
    state$j.variant = DEFAULT_STATE$1.variant;
    state$j.svg = DEFAULT_STATE$1.svg;
    state$j.open = DEFAULT_STATE$1.open;
    state$j.autoClose = DEFAULT_STATE$1.autoClose;
  },
  _showMessage({ message, svg, variant = "success", autoClose = DEFAULT_STATE$1.autoClose }) {
    if (state$j.open) {
      state$j.open = false;
      setTimeout(() => {
        state$j.message = message;
        state$j.variant = variant;
        state$j.svg = svg;
        state$j.open = true;
        state$j.autoClose = autoClose;
      }, 150);
    } else {
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
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "USD Coin",
      symbol: "USDC",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    },
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "Ether",
      symbol: "ETH",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    }
  ],
  paymentCurrencies: [
    {
      id: "USD",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    },
    {
      id: "EUR",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    }
  ]
};
const baseUrl$2 = CoreHelperUtil.getBlockchainApiUrl();
const state$i = proxy({
  clientId: null,
  api: new FetchUtil({ baseUrl: baseUrl$2, clientId: null }),
  supportedChains: { http: [], ws: [] }
});
const BlockchainApiController = {
  state: state$i,
  async get(request) {
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const projectId = OptionsController.state.projectId;
    const params = {
      ...request.params || {},
      st: st2,
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
      st: sdkType || "unknown",
      sv: sdkVersion || "unknown"
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
    } catch (e2) {
      return false;
    }
    return state$i.supportedChains.http.includes(networkId);
  },
  async getSupportedNetworks() {
    try {
      const supportedChains = await BlockchainApiController.get({
        path: "v1/supported-chains"
      });
      state$i.supportedChains = supportedChains;
      return supportedChains;
    } catch {
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
        sender: ChainController.state.activeCaipAddress ? CoreHelperUtil.getPlainAddress(ChainController.state.activeCaipAddress) : void 0
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
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { data: [], next: void 0 };
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
  async fetchSwapQuote({ amount, userAddress, from, to: to2, gasPrice }) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { quotes: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/quotes`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        amount,
        userAddress,
        from,
        to: to2,
        gasPrice
      }
    });
  },
  async fetchSwapTokens({ chainId }) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { tokens: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/tokens`,
      params: { chainId }
    });
  },
  async fetchTokenPrice({ addresses }) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { fungibles: [] };
    }
    const tokenPriceCache = StorageUtil.getTokenPriceCacheForAddresses(addresses);
    if (tokenPriceCache) {
      return tokenPriceCache;
    }
    const result = await state$i.api.post({
      path: "/v1/fungible/price",
      body: {
        currency: "usd",
        addresses,
        projectId: OptionsController.state.projectId
      },
      headers: {
        "Content-Type": "application/json"
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
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { allowance: "0" };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/allowance`,
      params: {
        tokenAddress,
        userAddress
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async fetchGasPrice({ chainId }) {
    var _a2;
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Gas Price");
    }
    return BlockchainApiController.get({
      path: `/v1/convert/gas-price`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        chainId,
        st: st2,
        sv
      }
    });
  },
  async generateSwapCalldata({ amount, from, to: to2, userAddress, disableEstimate }) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Swaps");
    }
    return state$i.api.post({
      path: "/v1/convert/build-transaction",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        amount,
        eip155: {
          slippage: ConstantsUtil$2.CONVERT_SLIPPAGE_TOLERANCE
        },
        projectId: OptionsController.state.projectId,
        from,
        to: to2,
        userAddress,
        disableEstimate
      }
    });
  },
  async generateApproveCalldata({ from, to: to2, userAddress }) {
    var _a2;
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Swaps");
    }
    return BlockchainApiController.get({
      path: `/v1/convert/build-approve`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        userAddress,
        from,
        to: to2,
        st: st2,
        sv
      }
    });
  },
  async getBalance(address, chainId, forceUpdate) {
    var _a2;
    const { st: st2, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      SnackController.showError("Token Balance Unavailable");
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
        currency: "usd",
        chainId,
        forceUpdate,
        st: st2,
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
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { addresses: {}, attributes: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/profile/account/${name}`,
      params: { apiVersion: "2" }
    });
  },
  async reverseLookupEnsName({ address }) {
    var _a2, _b2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return [];
    }
    const sender = (_b2 = ChainController.getAccountData()) == null ? void 0 : _b2.address;
    return BlockchainApiController.get({
      path: `/v1/profile/reverse/${address}`,
      params: {
        sender,
        apiVersion: "2"
      }
    });
  },
  async getEnsNameSuggestions(name) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { suggestions: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/profile/suggestions/${name}`,
      params: { zone: "reown.id" }
    });
  },
  async registerEnsName({ coinType, address, message, signature }) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { success: false };
    }
    return state$i.api.post({
      path: `/v1/profile/account`,
      body: { coin_type: coinType, address, message, signature },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return "";
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
        defaultExperience: "buy",
        presetCryptoAmount: purchaseAmount,
        presetFiatAmount: paymentAmount
      }
    });
    return response.url;
  },
  async getOnrampOptions() {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return { paymentCurrencies: [], purchaseCurrencies: [] };
    }
    try {
      const response = await BlockchainApiController.get({
        path: `/v1/onramp/options`
      });
      return response;
    } catch (e2) {
      return DEFAULT_OPTIONS;
    }
  },
  async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
    var _a2;
    try {
      const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
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
    } catch (e2) {
      return {
        networkFee: { amount, currency: paymentCurrency.id },
        paymentSubtotal: { amount, currency: paymentCurrency.id },
        paymentTotal: { amount, currency: paymentCurrency.id },
        purchaseAmount: { amount, currency: paymentCurrency.id },
        quoteId: "mocked-quote-id"
      };
    }
  },
  async getSmartSessions(caipAddress) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    if (!isSupported) {
      return [];
    }
    return BlockchainApiController.get({
      path: `/v1/sessions/${caipAddress}`
    });
  },
  async revokeSmartSession(address, pci, signature) {
    var _a2;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
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
const CUSTOM_DEEPLINK_WALLETS = {
  PHANTOM: {
    id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    url: "https://phantom.app"
  },
  SOLFLARE: {
    id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    url: "https://solflare.com"
  },
  COINBASE: {
    id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    url: "https://go.cb-w.com"
  },
  /*
   * Got details from their npm package:
   * https://www.npmjs.com/package/@binance/w3w-utils?activeTab=code
   * https://developers.binance.com/docs/binance-w3w/evm-compatible-provider#getdeeplink
   */
  BINANCE: {
    id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
    appId: "yFK5FCqYprrXDiVFbhyRx7",
    deeplink: "bnc://app.binance.com/mp/app",
    url: "https://app.binance.com/en/download"
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
    const href = window.location.href;
    const encodedHref = encodeURIComponent(href);
    if (id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id && !("phantom" in window)) {
      const protocol = href.startsWith("https") ? "https" : "http";
      const host = href.split("/")[2];
      const encodedRef = encodeURIComponent(`${protocol}://${host}`);
      window.location.href = `${CUSTOM_DEEPLINK_WALLETS.PHANTOM.url}/ul/browse/${encodedHref}?ref=${encodedRef}`;
    }
    if (id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id && !("solflare" in window)) {
      window.location.href = `${CUSTOM_DEEPLINK_WALLETS.SOLFLARE.url}/ul/v1/browse/${encodedHref}?ref=${encodedHref}`;
    }
    if (namespace === ConstantsUtil$3.CHAIN.SOLANA) {
      if (id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id && !("coinbaseSolana" in window)) {
        window.location.href = `${CUSTOM_DEEPLINK_WALLETS.COINBASE.url}/dapp?cb_url=${encodedHref}`;
      }
    }
    if (namespace === ConstantsUtil$3.CHAIN.BITCOIN) {
      if (id === CUSTOM_DEEPLINK_WALLETS.BINANCE.id && !("binancew3w" in window)) {
        const activeCaipNetwork = ChainController.state.activeCaipNetwork;
        const startPagePath = window.btoa("/pages/browser/index");
        const startPageQuery = window.btoa(`url=${encodedHref}&defaultChainId=${(activeCaipNetwork == null ? void 0 : activeCaipNetwork.id) ?? 1}`);
        const deeplink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.deeplink);
        deeplink.searchParams.set("appId", CUSTOM_DEEPLINK_WALLETS.BINANCE.appId);
        deeplink.searchParams.set("startPagePath", startPagePath);
        deeplink.searchParams.set("startPageQuery", startPageQuery);
        const universalLink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.url);
        universalLink.searchParams.set("_dp", window.btoa(deeplink.toString()));
        window.location.href = universalLink.toString();
      }
    }
  }
};
const DEFAULT_STATE = Object.freeze({
  enabled: true,
  events: []
});
const api$2 = new FetchUtil({ baseUrl: CoreHelperUtil.getAnalyticsUrl(), clientId: null });
const MAX_ERRORS_PER_MINUTE = 5;
const ONE_MINUTE_MS = 60 * 1e3;
const state$h = proxy({
  ...DEFAULT_STATE
});
const TelemetryController = {
  state: state$h,
  subscribeKey(key, callback) {
    return subscribeKey(state$h, key, callback);
  },
  async sendError(error, category) {
    if (!state$h.enabled) {
      return;
    }
    const now = Date.now();
    const recentErrors = state$h.events.filter((event) => {
      const eventTime = new Date(event.properties.timestamp || "").getTime();
      return now - eventTime < ONE_MINUTE_MS;
    });
    if (recentErrors.length >= MAX_ERRORS_PER_MINUTE) {
      return;
    }
    const errorEvent = {
      type: "error",
      event: category,
      properties: {
        errorType: error.name,
        errorMessage: error.message,
        stackTrace: error.stack,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    state$h.events.push(errorEvent);
    try {
      if (typeof window === "undefined") {
        return;
      }
      const { projectId, sdkType, sdkVersion } = OptionsController.state;
      await api$2.post({
        path: "/e",
        params: {
          projectId,
          st: sdkType,
          sv: sdkVersion || "html-wagmi-4.2.2"
        },
        body: {
          eventId: CoreHelperUtil.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          props: {
            type: "error",
            event: category,
            errorType: error.name,
            errorMessage: error.message,
            stackTrace: error.stack
          }
        }
      });
    } catch {
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
    this.originalName = "AppKitError";
    this.name = "AppKitError";
    this.category = category;
    this.originalError = originalError;
    if (originalError && originalError instanceof Error) {
      this.originalName = originalError.name;
    }
    Object.setPrototypeOf(this, AppKitError.prototype);
    let isStackConstructedFromOriginal = false;
    if (originalError instanceof Error && typeof originalError.stack === "string" && originalError.stack) {
      const originalErrorStack = originalError.stack;
      const firstNewlineIndex = originalErrorStack.indexOf("\n");
      if (firstNewlineIndex > -1) {
        const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
        this.stack = `${this.name}: ${this.message}
${originalFrames}`;
        isStackConstructedFromOriginal = true;
      }
    }
    if (!isStackConstructedFromOriginal) {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, AppKitError);
      } else if (!this.stack) {
        this.stack = `${this.name}: ${this.message}`;
      }
    }
  }
}
function errorHandler(err, defaultCategory) {
  let errMessage = "";
  try {
    if (err instanceof Error) {
      errMessage = err.message;
    } else if (typeof err === "string") {
      errMessage = err;
    } else if (typeof err === "object" && err !== null) {
      if (Object.keys(err).length === 0) {
        errMessage = "Unknown error";
      } else {
        errMessage = (err == null ? void 0 : err.message) || JSON.stringify(err);
      }
    } else {
      errMessage = String(err);
    }
  } catch (_error) {
    errMessage = "Unknown error";
    console.error("Error parsing error message", _error);
  }
  const error = err instanceof AppKitError ? err : new AppKitError(errMessage, defaultCategory, err);
  TelemetryController.sendError(error, error.category);
  throw error;
}
function withErrorBoundary(controller2, defaultCategory = "INTERNAL_SDK_ERROR") {
  const newController = {};
  Object.keys(controller2).forEach((key) => {
    const original = controller2[key];
    if (typeof original === "function") {
      let wrapped = original;
      if (original.constructor.name === "AsyncFunction") {
        wrapped = async (...args) => {
          try {
            return await original(...args);
          } catch (err) {
            return errorHandler(err, defaultCategory);
          }
        };
      } else {
        wrapped = (...args) => {
          try {
            return original(...args);
          } catch (err) {
            return errorHandler(err, defaultCategory);
          }
        };
      }
      newController[key] = wrapped;
    } else {
      newController[key] = original;
    }
  });
  return newController;
}
const state$g = proxy({
  walletImages: {},
  networkImages: {},
  chainImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
});
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
const AssetController = withErrorBoundary(controller$b);
const namespaceImageIds = {
  // Ethereum
  eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
  // Solana
  solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
  // Polkadot
  polkadot: "",
  // Bitcoin
  bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
  // Cosmos
  cosmos: "",
  // Sui
  sui: "",
  // Stacks
  stacks: ""
};
const state$f = proxy({
  networkImagePromises: {}
});
const AssetUtil = {
  async fetchWalletImage(imageId) {
    if (!imageId) {
      return void 0;
    }
    await ApiController._fetchWalletImage(imageId);
    return this.getWalletImageById(imageId);
  },
  async fetchNetworkImage(imageId) {
    if (!imageId) {
      return void 0;
    }
    const existingImage = this.getNetworkImageById(imageId);
    if (existingImage) {
      return existingImage;
    }
    if (!state$f.networkImagePromises[imageId]) {
      state$f.networkImagePromises[imageId] = ApiController._fetchNetworkImage(imageId);
    }
    await state$f.networkImagePromises[imageId];
    return this.getNetworkImageById(imageId);
  },
  getWalletImageById(imageId) {
    if (!imageId) {
      return void 0;
    }
    return AssetController.state.walletImages[imageId];
  },
  getWalletImage(wallet) {
    if (wallet == null ? void 0 : wallet.image_url) {
      return wallet == null ? void 0 : wallet.image_url;
    }
    if (wallet == null ? void 0 : wallet.image_id) {
      return AssetController.state.walletImages[wallet.image_id];
    }
    return void 0;
  },
  getNetworkImage(network) {
    var _a2, _b2, _c2;
    if ((_a2 = network == null ? void 0 : network.assets) == null ? void 0 : _a2.imageUrl) {
      return (_b2 = network == null ? void 0 : network.assets) == null ? void 0 : _b2.imageUrl;
    }
    if ((_c2 = network == null ? void 0 : network.assets) == null ? void 0 : _c2.imageId) {
      return AssetController.state.networkImages[network.assets.imageId];
    }
    return void 0;
  },
  getNetworkImageById(imageId) {
    if (!imageId) {
      return void 0;
    }
    return AssetController.state.networkImages[imageId];
  },
  getConnectorImage(connector) {
    var _a2;
    if (connector == null ? void 0 : connector.imageUrl) {
      return connector.imageUrl;
    }
    if ((_a2 = connector == null ? void 0 : connector.info) == null ? void 0 : _a2.icon) {
      return connector.info.icon;
    }
    if (connector == null ? void 0 : connector.imageId) {
      return AssetController.state.connectorImages[connector.imageId];
    }
    return void 0;
  },
  getChainImage(chain) {
    return AssetController.state.networkImages[namespaceImageIds[chain]];
  },
  getTokenImage(symbol) {
    if (!symbol) {
      return void 0;
    }
    return AssetController.state.tokenImages[symbol];
  }
};
const baseUrl$1 = CoreHelperUtil.getAnalyticsUrl();
const api$1 = new FetchUtil({ baseUrl: baseUrl$1, clientId: null });
const excluded = ["MODAL_CREATED"];
const MAX_PENDING_EVENTS_KB = 45;
const FLUSH_EVENTS_INTERVAL_MS = 1e3 * 10;
const state$e = proxy({
  timestamp: Date.now(),
  lastFlush: Date.now(),
  reportedErrors: {},
  data: {
    type: "track",
    event: "MODAL_CREATED"
  },
  pendingEvents: [],
  subscribedToVisibilityChange: false,
  walletImpressions: []
});
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
      sv: sdkVersion || "html-wagmi-4.2.2"
    };
  },
  shouldFlushEvents() {
    const isOverMaxSize = JSON.stringify(state$e.pendingEvents).length / 1024 > MAX_PENDING_EVENTS_KB;
    const isExpired = state$e.lastFlush + FLUSH_EVENTS_INTERVAL_MS < Date.now();
    return isOverMaxSize || isExpired;
  },
  _setPendingEvent(payload) {
    var _a2, _b2;
    try {
      let address = (_a2 = ChainController.getAccountData()) == null ? void 0 : _a2.address;
      if ("address" in payload.data && payload.data.address) {
        address = payload.data.address;
      }
      if (excluded.includes(payload.data.event) || typeof window === "undefined") {
        return;
      }
      const caipNetworkId = (_b2 = ChainController.getActiveCaipNetwork()) == null ? void 0 : _b2.caipNetworkId;
      this.state.pendingEvents.push({
        eventId: CoreHelperUtil.getUUID(),
        url: window.location.href,
        domain: window.location.hostname,
        timestamp: payload.timestamp,
        props: {
          ...payload.data,
          address,
          properties: {
            ..."properties" in payload.data ? payload.data.properties : {},
            caipNetworkId
          }
        }
      });
      state$e.reportedErrors["FORBIDDEN"] = false;
      const shouldFlush = EventsController.shouldFlushEvents();
      if (shouldFlush) {
        EventsController._submitPendingEvents();
      }
    } catch (err) {
      console.warn("_setPendingEvent", err);
    }
  },
  sendEvent(data) {
    var _a2;
    state$e.timestamp = Date.now();
    state$e.data = data;
    const MANDATORY_EVENTS = [
      "INITIALIZE",
      "CONNECT_SUCCESS",
      "SOCIAL_LOGIN_SUCCESS"
    ];
    if (((_a2 = OptionsController.state.features) == null ? void 0 : _a2.analytics) || MANDATORY_EVENTS.includes(data.event)) {
      EventsController._setPendingEvent(state$e);
    }
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
      return events.filter((evt) => {
        const eventName = evt.props.event;
        return eventName !== "WALLET_IMPRESSION";
      });
    } catch {
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
            type: "track",
            event: "WALLET_IMPRESSION",
            items: [...state$e.walletImpressions]
          }
        });
      }
      api$1.sendBeacon({
        path: "/batch",
        params: EventsController.getSdkProperties(),
        body: batch
      });
      state$e.reportedErrors["FORBIDDEN"] = false;
      state$e.pendingEvents = [];
      state$e.walletImpressions = [];
    } catch (err) {
      state$e.reportedErrors["FORBIDDEN"] = true;
    }
  },
  subscribeToFlushTriggers() {
    var _a2, _b2, _c2;
    if (state$e.subscribedToVisibilityChange) {
      return;
    }
    if (typeof document === "undefined") {
      return;
    }
    state$e.subscribedToVisibilityChange = true;
    (_a2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a2.call(document, "visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        EventsController._submitPendingEvents();
      }
    });
    (_b2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b2.call(document, "freeze", () => {
      EventsController._submitPendingEvents();
    });
    (_c2 = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c2.call(window, "pagehide", () => {
      EventsController._submitPendingEvents();
    });
    setInterval(() => {
      EventsController._submitPendingEvents();
    }, FLUSH_EVENTS_INTERVAL_MS);
  }
};
const baseUrl = CoreHelperUtil.getApiUrl();
const api = new FetchUtil({
  baseUrl,
  clientId: null
});
const entries = 40;
const recommendedEntries = 4;
const imageCountToFetch = 20;
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
const ApiController = {
  state: state$d,
  subscribeKey(key, callback) {
    return subscribeKey(state$d, key, callback);
  },
  _getSdkProperties() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      projectId,
      st: sdkType || "appkit",
      sv: sdkVersion || "html-wagmi-4.2.2"
    };
  },
  _filterOutExtensions(wallets) {
    if (OptionsController.state.isUniversalProvider) {
      return wallets.filter((w2) => Boolean(w2.mobile_link || w2.desktop_link || w2.webapp_link));
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
    const filteredWallets = CoreHelperUtil.isMobile() ? wallets == null ? void 0 : wallets.filter((w2) => {
      if (w2.mobile_link || w2.webapp_link) {
        return true;
      }
      const customDeeplinkWalletIds = Object.values(CUSTOM_DEEPLINK_WALLETS).map((wallet) => wallet.id);
      return customDeeplinkWalletIds.includes(w2.id);
    }) : wallets;
    const mobileFilteredOutWalletsLength = walletsLength - filteredWallets.length;
    return { filteredWallets, mobileFilteredOutWalletsLength };
  },
  async fetchProjectConfig() {
    const response = await api.get({
      path: "/appkit/v1/config",
      params: ApiController._getSdkProperties()
    });
    return response.features;
  },
  async fetchAllowedOrigins() {
    try {
      const { allowedOrigins } = await api.get({
        path: "/projects/v1/origins",
        params: ApiController._getSdkProperties()
      });
      return allowedOrigins;
    } catch (error) {
      if (error instanceof Error && error.cause instanceof Response) {
        const status = error.cause.status;
        if (status === ConstantsUtil$3.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) {
          throw new Error("RATE_LIMITED", { cause: error });
        }
        if (status >= ConstantsUtil$3.HTTP_STATUS_CODES.SERVER_ERROR && status < 600) {
          throw new Error("SERVER_ERROR", { cause: error });
        }
        return [];
      }
      return [];
    }
  },
  async fetchNetworkImages() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const ids = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.map(({ assets }) => assets == null ? void 0 : assets.imageId).filter(Boolean).filter((imageId) => !AssetUtil.getNetworkImageById(imageId));
    if (ids) {
      await Promise.allSettled(ids.map((id) => ApiController._fetchNetworkImage(id)));
    }
  },
  async fetchConnectorImages() {
    const { connectors } = ConnectorController.state;
    const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
    await Promise.allSettled(ids.map((id) => ApiController._fetchConnectorImage(id)));
  },
  async fetchCurrencyImages(currencies = []) {
    await Promise.allSettled(currencies.map((currency) => ApiController._fetchCurrencyImage(currency)));
  },
  async fetchTokenImages(tokens2 = []) {
    await Promise.allSettled(tokens2.map((token) => ApiController._fetchTokenImage(token)));
  },
  async fetchWallets(params) {
    var _a2;
    const exclude = params.exclude ?? [];
    const sdkProperties = ApiController._getSdkProperties();
    if (sdkProperties.sv.startsWith("html-core-")) {
      exclude.push(...Object.values(CUSTOM_DEEPLINK_WALLETS).map((w2) => w2.id));
    }
    const wallets = await api.get({
      path: "/getWallets",
      params: {
        ...ApiController._getSdkProperties(),
        ...params,
        page: String(params.page),
        entries: String(params.entries),
        include: (_a2 = params.include) == null ? void 0 : _a2.join(","),
        exclude: exclude.join(",")
      }
    });
    const { filteredWallets, mobileFilteredOutWalletsLength } = ApiController._filterWalletsByPlatform(wallets == null ? void 0 : wallets.data);
    return {
      data: filteredWallets || [],
      // Keep original count for display on main page
      count: wallets == null ? void 0 : wallets.count,
      mobileFilteredOutWalletsLength
    };
  },
  async prefetchWalletRanks() {
    const connectors = ConnectorController.state.connectors;
    if (!(connectors == null ? void 0 : connectors.length)) {
      return;
    }
    const params = {
      page: 1,
      entries: 20,
      badge: "certified"
    };
    params.names = connectors.map((c2) => c2.name).join(",");
    if (ChainController.state.activeChain === ConstantsUtil$3.CHAIN.EVM) {
      const rdnsCandidates = [
        ...connectors.flatMap((c2) => {
          var _a2;
          return ((_a2 = c2.connectors) == null ? void 0 : _a2.map((sc2) => {
            var _a3;
            return (_a3 = sc2.info) == null ? void 0 : _a3.rdns;
          })) || [];
        }),
        ...connectors.map((c2) => {
          var _a2;
          return (_a2 = c2.info) == null ? void 0 : _a2.rdns;
        })
      ].filter((val) => typeof val === "string" && val.length > 0);
      if (rdnsCandidates.length) {
        params.rdns = rdnsCandidates.join(",");
      }
    }
    const { data } = await ApiController.fetchWallets(params);
    state$d.explorerWallets = data;
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state$d.explorerFilteredWallets = data.filter((wallet) => {
      var _a2;
      return (_a2 = wallet.chains) == null ? void 0 : _a2.some((chain) => caipNetworkIds.includes(chain));
    });
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds } = OptionsController.state;
    if (featuredWalletIds == null ? void 0 : featuredWalletIds.length) {
      const params = {
        ...ApiController._getSdkProperties(),
        page: 1,
        entries: (featuredWalletIds == null ? void 0 : featuredWalletIds.length) ?? recommendedEntries,
        include: featuredWalletIds
      };
      const { data } = await ApiController.fetchWallets(params);
      const sortedData = [...data].sort((a2, b2) => featuredWalletIds.indexOf(a2.id) - featuredWalletIds.indexOf(b2.id));
      const images = sortedData.map((d5) => d5.image_id).filter(Boolean);
      await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
      state$d.featured = sortedData;
      state$d.allFeatured = sortedData;
    }
  },
  async fetchRecommendedWallets() {
    try {
      state$d.isFetchingRecommendedWallets = true;
      const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
      const exclude = [...excludeWalletIds ?? [], ...featuredWalletIds ?? []].filter(Boolean);
      const chains = ChainController.getRequestedCaipNetworkIds().join(",");
      const params = {
        page: 1,
        entries: recommendedEntries,
        include: includeWalletIds,
        exclude,
        chains
      };
      const { data, count } = await ApiController.fetchWallets(params);
      const recent = StorageUtil.getRecentWallets();
      const recommendedImages = data.map((d5) => d5.image_id).filter(Boolean);
      const recentImages = recent.map((r2) => r2.image_id).filter(Boolean);
      await Promise.allSettled([...recommendedImages, ...recentImages].map((id) => ApiController._fetchWalletImage(id)));
      state$d.recommended = data;
      state$d.allRecommended = data;
      state$d.count = count ?? 0;
    } catch {
    } finally {
      state$d.isFetchingRecommendedWallets = false;
    }
  },
  async fetchWalletsByPage({ page }) {
    const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
    const chains = ChainController.getRequestedCaipNetworkIds().join(",");
    const exclude = [
      ...state$d.recommended.map(({ id }) => id),
      ...excludeWalletIds ?? [],
      ...featuredWalletIds ?? []
    ].filter(Boolean);
    const params = {
      page,
      entries,
      include: includeWalletIds,
      exclude,
      chains
    };
    const { data, count, mobileFilteredOutWalletsLength } = await ApiController.fetchWallets(params);
    state$d.mobileFilteredOutWalletsLength = mobileFilteredOutWalletsLength + (state$d.mobileFilteredOutWalletsLength ?? 0);
    const images = data.slice(0, imageCountToFetch).map((w2) => w2.image_id).filter(Boolean);
    await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
    state$d.wallets = CoreHelperUtil.uniqueBy([...state$d.wallets, ...ApiController._filterOutExtensions(data)], "id").filter((w2) => {
      var _a2;
      return (_a2 = w2.chains) == null ? void 0 : _a2.some((chain) => chains.includes(chain));
    });
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
      data.forEach((wallet) => {
        state$d.excludedWallets.push({ rdns: wallet.rdns, name: wallet.name });
      });
    }
  },
  async searchWallet({ search, badge }) {
    const { includeWalletIds, excludeWalletIds } = OptionsController.state;
    const chains = ChainController.getRequestedCaipNetworkIds().join(",");
    state$d.search = [];
    const params = {
      page: 1,
      entries: 100,
      search: search == null ? void 0 : search.trim(),
      badge_type: badge,
      include: includeWalletIds,
      exclude: excludeWalletIds,
      chains
    };
    const { data } = await ApiController.fetchWallets(params);
    EventsController.sendEvent({
      type: "track",
      event: "SEARCH_WALLET",
      properties: { badge: badge ?? "", search: search ?? "" }
    });
    const images = data.map((w2) => w2.image_id).filter(Boolean);
    await Promise.allSettled([
      ...images.map((id) => ApiController._fetchWalletImage(id)),
      CoreHelperUtil.wait(300)
    ]);
    state$d.search = ApiController._filterOutExtensions(data);
  },
  initPromise(key, fetchFn) {
    const existingPromise = state$d.promises[key];
    if (existingPromise) {
      return existingPromise;
    }
    return state$d.promises[key] = fetchFn();
  },
  prefetch({ fetchConnectorImages = true, fetchFeaturedWallets = true, fetchRecommendedWallets = true, fetchNetworkImages = true, fetchWalletRanks = true } = {}) {
    const promises = [
      fetchConnectorImages && ApiController.initPromise("connectorImages", ApiController.fetchConnectorImages),
      fetchFeaturedWallets && ApiController.initPromise("featuredWallets", ApiController.fetchFeaturedWallets),
      fetchRecommendedWallets && ApiController.initPromise("recommendedWallets", ApiController.fetchRecommendedWallets),
      fetchNetworkImages && ApiController.initPromise("networkImages", ApiController.fetchNetworkImages),
      fetchWalletRanks && ApiController.initPromise("walletRanks", ApiController.prefetchWalletRanks)
    ].filter(Boolean);
    return Promise.allSettled(promises);
  },
  prefetchAnalyticsConfig() {
    var _a2;
    if ((_a2 = OptionsController.state.features) == null ? void 0 : _a2.analytics) {
      ApiController.fetchAnalyticsConfig();
    }
  },
  async fetchAnalyticsConfig() {
    try {
      const { isAnalyticsEnabled } = await api.get({
        path: "/getAnalyticsConfig",
        params: ApiController._getSdkProperties()
      });
      OptionsController.setFeatures({ analytics: isAnalyticsEnabled });
    } catch (error) {
      OptionsController.setFeatures({ analytics: false });
    }
  },
  filterByNamespaces(namespaces) {
    if (!(namespaces == null ? void 0 : namespaces.length)) {
      state$d.featured = state$d.allFeatured;
      state$d.recommended = state$d.allRecommended;
      return;
    }
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state$d.featured = state$d.allFeatured.filter((wallet) => {
      var _a2;
      return (_a2 = wallet.chains) == null ? void 0 : _a2.some((chain) => caipNetworkIds.includes(chain));
    });
    state$d.recommended = state$d.allRecommended.filter((wallet) => {
      var _a2;
      return (_a2 = wallet.chains) == null ? void 0 : _a2.some((chain) => caipNetworkIds.includes(chain));
    });
    state$d.filteredWallets = state$d.wallets.filter((wallet) => {
      var _a2;
      return (_a2 = wallet.chains) == null ? void 0 : _a2.some((chain) => caipNetworkIds.includes(chain));
    });
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
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state$d.featured = state$d.allFeatured.filter((wallet) => {
      var _a2;
      return (_a2 = wallet.chains) == null ? void 0 : _a2.some((chain) => caipNetworkIds.includes(chain));
    });
    state$d.recommended = state$d.allRecommended.filter((wallet) => {
      var _a2;
      return (_a2 = wallet.chains) == null ? void 0 : _a2.some((chain) => caipNetworkIds.includes(chain));
    });
    state$d.filteredWallets = state$d.wallets.filter((wallet) => {
      var _a2;
      return (_a2 = wallet.chains) == null ? void 0 : _a2.some((chain) => caipNetworkIds.includes(chain));
    });
  }
};
const state$c = proxy({
  view: "Connect",
  history: ["Connect"],
  transactionStack: []
});
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
      case "success":
        onSuccess == null ? void 0 : onSuccess();
        break;
      case "error":
        onError == null ? void 0 : onError();
        RouterController.goBack();
        break;
      case "cancel":
        onCancel == null ? void 0 : onCancel();
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
    var _a2, _b2;
    const isConnected = ChainController.state.activeCaipAddress;
    const isFarcasterView = RouterController.state.view === "ConnectingFarcaster";
    const shouldReload = !isConnected && isFarcasterView;
    if (state$c.history.length > 1) {
      state$c.history.pop();
      const [last] = state$c.history.slice(-1);
      if (last) {
        const isConnectView = last === "Connect";
        if (isConnected && isConnectView) {
          state$c.view = "Account";
        } else {
          state$c.view = last;
        }
      }
    } else {
      ModalController.close();
    }
    if ((_a2 = state$c.data) == null ? void 0 : _a2.wallet) {
      state$c.data.wallet = void 0;
    }
    if ((_b2 = state$c.data) == null ? void 0 : _b2.redirectView) {
      state$c.data.redirectView = void 0;
    }
    setTimeout(() => {
      var _a3, _b3, _c2;
      if (shouldReload) {
        ChainController.setAccountProp("farcasterUrl", void 0, ChainController.state.activeChain);
        const authConnector = ConnectorController.getAuthConnector();
        (_a3 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a3.reload();
        const optionsState = snapshot(OptionsController.state);
        (_c2 = (_b3 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _b3.syncDappData) == null ? void 0 : _c2.call(_b3, {
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
    } else {
      ModalController.close();
    }
  }
};
const RouterController = withErrorBoundary(controller$a);
const state$b = proxy({
  themeMode: "dark",
  themeVariables: {},
  w3mThemeVariables: void 0
});
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
    } catch {
      console.info("Unable to sync theme to auth connector");
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
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  getSnapshot() {
    return snapshot(state$b);
  }
};
const ThemeController = withErrorBoundary(controller$9);
const defaultActiveConnectors = Object.fromEntries(AVAILABLE_NAMESPACES.map((namespace) => [namespace, void 0]));
const defaultFilterByNamespaceMap = Object.fromEntries(AVAILABLE_NAMESPACES.map((namespace) => [namespace, true]));
const state$a = proxy({
  allConnectors: [],
  connectors: [],
  activeConnector: void 0,
  filterByNamespace: void 0,
  activeConnectorIds: defaultActiveConnectors,
  filterByNamespaceMap: defaultFilterByNamespaceMap
});
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
    namespaces.forEach((namespace) => {
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
    const newConnectors = connectors.filter((newConnector) => !state$a.allConnectors.some((existingConnector) => existingConnector.id === newConnector.id && ConnectorController.getConnectorName(existingConnector.name) === ConnectorController.getConnectorName(newConnector.name) && existingConnector.chain === newConnector.chain));
    newConnectors.forEach((connector) => {
      if (connector.type !== "MULTI_CHAIN") {
        state$a.allConnectors.push(ref(connector));
      }
    });
    const enabledNamespaces = ConnectorController.getEnabledNamespaces();
    const connectorsFilteredByNamespaces = ConnectorController.getEnabledConnectors(enabledNamespaces);
    state$a.connectors = ConnectorController.mergeMultiChainConnectors(connectorsFilteredByNamespaces);
  },
  filterByNamespaces(enabledNamespaces) {
    Object.keys(state$a.filterByNamespaceMap).forEach((namespace) => {
      state$a.filterByNamespaceMap[namespace] = false;
    });
    enabledNamespaces.forEach((namespace) => {
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
    } else {
      ApiController.filterByNamespaces(enabledNamespaces);
    }
  },
  getEnabledNamespaces() {
    return Object.entries(state$a.filterByNamespaceMap).filter(([_2, enabled]) => enabled).map(([namespace]) => namespace);
  },
  getEnabledConnectors(enabledNamespaces) {
    return state$a.allConnectors.filter((connector) => enabledNamespaces.includes(connector.chain));
  },
  areAllNamespacesEnabled() {
    return Object.values(state$a.filterByNamespaceMap).every((enabled) => enabled);
  },
  mergeMultiChainConnectors(connectors) {
    const connectorsByNameMap = ConnectorController.generateConnectorMapByName(connectors);
    const mergedConnectors = [];
    connectorsByNameMap.forEach((keyConnectors) => {
      const firstItem = keyConnectors[0];
      const isAuthConnector = (firstItem == null ? void 0 : firstItem.id) === ConstantsUtil$3.CONNECTOR_ID.AUTH;
      if (keyConnectors.length > 1 && firstItem) {
        mergedConnectors.push({
          name: firstItem.name,
          imageUrl: firstItem.imageUrl,
          imageId: firstItem.imageId,
          connectors: [...keyConnectors],
          type: isAuthConnector ? "AUTH" : "MULTI_CHAIN",
          // These values are just placeholders, we don't use them in multi-chain connector select screen
          chain: "eip155",
          id: (firstItem == null ? void 0 : firstItem.id) || ""
        });
      } else if (firstItem) {
        mergedConnectors.push(firstItem);
      }
    });
    return mergedConnectors;
  },
  generateConnectorMapByName(connectors) {
    const connectorsByNameMap = /* @__PURE__ */ new Map();
    connectors.forEach((connector) => {
      const { name } = connector;
      const connectorName = ConnectorController.getConnectorName(name);
      if (!connectorName) {
        return;
      }
      const connectorsByName = connectorsByNameMap.get(connectorName) || [];
      const haveSameConnector = connectorsByName.find((c2) => c2.chain === connector.chain);
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
      "Trust Wallet": "Trust"
    };
    return nameOverrideMap[name] || name;
  },
  getUniqueConnectorsByName(connectors) {
    const uniqueConnectors = [];
    connectors.forEach((c2) => {
      if (!uniqueConnectors.find((uc2) => uc2.chain === c2.chain)) {
        uniqueConnectors.push(c2);
      }
    });
    return uniqueConnectors;
  },
  addConnector(connector) {
    var _a2, _b2, _c2;
    if (connector.id === ConstantsUtil$3.CONNECTOR_ID.AUTH) {
      const authConnector = connector;
      const optionsState = snapshot(OptionsController.state);
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      (_b2 = (_a2 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
        metadata: optionsState.metadata,
        sdkVersion: optionsState.sdkVersion,
        projectId: optionsState.projectId,
        sdkType: optionsState.sdkType
      });
      (_c2 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _c2.syncTheme({
        themeMode,
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
      ConnectorController.setConnectors([connector]);
    } else {
      ConnectorController.setConnectors([connector]);
    }
  },
  getAuthConnector(chainNamespace) {
    var _a2;
    const activeNamespace = chainNamespace || ChainController.state.activeChain;
    const authConnector = state$a.connectors.find((c2) => c2.id === ConstantsUtil$3.CONNECTOR_ID.AUTH);
    if (!authConnector) {
      return void 0;
    }
    if ((_a2 = authConnector == null ? void 0 : authConnector.connectors) == null ? void 0 : _a2.length) {
      const connector = authConnector.connectors.find((c2) => c2.chain === activeNamespace);
      return connector;
    }
    return authConnector;
  },
  getAnnouncedConnectorRdns() {
    return state$a.connectors.filter((c2) => c2.type === "ANNOUNCED").map((c2) => {
      var _a2;
      return (_a2 = c2.info) == null ? void 0 : _a2.rdns;
    });
  },
  getConnectorById(id) {
    return state$a.allConnectors.find((c2) => c2.id === id);
  },
  getConnector({ id, rdns, namespace }) {
    const namespaceToUse = namespace || ChainController.state.activeChain;
    const connectorsByNamespace = state$a.allConnectors.filter((c2) => c2.chain === namespaceToUse);
    return connectorsByNamespace.find((c2) => {
      var _a2;
      return c2.explorerId === id || ((_a2 = c2.info) == null ? void 0 : _a2.rdns) === rdns;
    });
  },
  syncIfAuthConnector(connector) {
    var _a2, _b2;
    if (connector.id !== "ID_AUTH") {
      return;
    }
    const authConnector = connector;
    const optionsState = snapshot(OptionsController.state);
    const themeMode = ThemeController.getSnapshot().themeMode;
    const themeVariables = ThemeController.getSnapshot().themeVariables;
    (_b2 = (_a2 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
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
    const namespaceConnectors = state$a.allConnectors.filter((connector) => connector.chain === namespace);
    return ConnectorController.mergeMultiChainConnectors(namespaceConnectors);
  },
  canSwitchToSmartAccount(namespace) {
    const isSmartAccountEnabled = ChainController.checkIfSmartAccountEnabled();
    return isSmartAccountEnabled && getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;
  },
  selectWalletConnector(wallet) {
    var _a2;
    const redirectView = (_a2 = RouterController.state.data) == null ? void 0 : _a2.redirectView;
    const connector = ConnectorController.getConnector({
      id: wallet.id,
      rdns: wallet.rdns
    });
    MobileWalletUtil.handleMobileDeeplinkRedirect((connector == null ? void 0 : connector.explorerId) || wallet.id, ChainController.state.activeChain);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector, wallet, redirectView });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet, redirectView });
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
      [namespace]: void 0
    };
    StorageUtil.deleteConnectedConnectorId(namespace);
  },
  getConnectorId(namespace) {
    if (!namespace) {
      return void 0;
    }
    return state$a.activeConnectorIds[namespace];
  },
  isConnected(namespace) {
    if (!namespace) {
      return Object.values(state$a.activeConnectorIds).some((id) => Boolean(id));
    }
    return Boolean(state$a.activeConnectorIds[namespace]);
  },
  resetConnectorIds() {
    state$a.activeConnectorIds = { ...defaultActiveConnectors };
  }
};
const ConnectorController = withErrorBoundary(controller$8);
const UPDATE_EMAIL_INTERVAL_MS = 1e3;
const ConnectorControllerUtil = {
  checkNamespaceConnectorId(namespace, connectorId) {
    return ConnectorController.getConnectorId(namespace) === connectorId;
  },
  isSocialProvider(socialProvider) {
    return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.socials.includes(socialProvider);
  },
  connectWalletConnect({ walletConnect, connector, closeModalOnConnect = true, redirectViewOnModalClose = "Connect", onOpen, onConnect }) {
    return new Promise((resolve, reject) => {
      if (walletConnect) {
        ConnectorController.setActiveConnector(connector);
      }
      onOpen == null ? void 0 : onOpen(CoreHelperUtil.isMobile() && walletConnect);
      if (redirectViewOnModalClose) {
        const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
          if (!val) {
            if (RouterController.state.view !== redirectViewOnModalClose) {
              RouterController.replace(redirectViewOnModalClose);
            }
            unsubscribeModalController();
            reject(new Error("Modal closed"));
          }
        });
      }
      const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
        if (val) {
          onConnect == null ? void 0 : onConnect();
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
      const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
        if (val) {
          ModalController.close();
          unsubscribeChainController();
          resolve(ParseUtil.parseCaipAddress(val));
        }
      });
      ConnectionController.connectExternal(connector, connector.chain).catch(() => {
        unsubscribeChainController();
        reject(new Error("Connection rejected"));
      });
    });
  },
  connectSocial({ social, namespace, closeModalOnConnect = true, onOpenFarcaster, onConnect }) {
    const accountData = ChainController.getAccountData(namespace);
    let socialWindow = accountData == null ? void 0 : accountData.socialWindow;
    let socialProvider = accountData == null ? void 0 : accountData.socialProvider;
    let isConnectingSocial = false;
    let popupWindow = null;
    const namespaceToUse = namespace || ChainController.state.activeChain;
    const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
      if (val) {
        if (closeModalOnConnect) {
          ModalController.close();
        }
        unsubscribeChainController();
      }
    });
    return new Promise((resolve, reject) => {
      async function handleSocialConnection(event) {
        var _a2;
        if ((_a2 = event.data) == null ? void 0 : _a2.resultUri) {
          if (event.origin === ConstantsUtil$3.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", handleSocialConnection, false);
            try {
              const authConnector = ConnectorController.getAuthConnector(namespaceToUse);
              if (authConnector && !isConnectingSocial) {
                const _accountData = ChainController.getAccountData(namespaceToUse);
                if (socialWindow) {
                  socialWindow.close();
                  ChainController.setAccountProp("socialWindow", void 0, namespaceToUse);
                  socialWindow = _accountData == null ? void 0 : _accountData.socialWindow;
                }
                isConnectingSocial = true;
                const uri = event.data.resultUri;
                if (socialProvider) {
                  EventsController.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
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
                    reject(new Error("Failed to connect"));
                    return;
                  }
                  resolve(ParseUtil.parseCaipAddress(caipAddress));
                  EventsController.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_SUCCESS",
                    properties: { provider: socialProvider }
                  });
                }
              }
            } catch (err) {
              if (socialProvider) {
                EventsController.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_ERROR",
                  properties: { provider: socialProvider, message: CoreHelperUtil.parseError(err) }
                });
              }
              reject(new Error("Failed to connect"));
            }
          } else if (socialProvider) {
            EventsController.sendEvent({
              type: "track",
              event: "SOCIAL_LOGIN_ERROR",
              properties: { provider: socialProvider, message: "Untrusted Origin" }
            });
          }
        }
      }
      async function connectSocial() {
        if (social) {
          const _accountData = ChainController.getAccountData(namespaceToUse);
          ChainController.setAccountProp("socialProvider", social, namespaceToUse);
          socialProvider = _accountData == null ? void 0 : _accountData.socialProvider;
          EventsController.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: { provider: socialProvider }
          });
        }
        if (socialProvider === "farcaster") {
          onOpenFarcaster == null ? void 0 : onOpenFarcaster();
          const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
            if (!val && social === "farcaster") {
              reject(new Error("Popup closed"));
              onConnect == null ? void 0 : onConnect();
              unsubscribeModalController();
            }
          });
          const authConnector = ConnectorController.getAuthConnector();
          if (authConnector) {
            const _accountData = ChainController.getAccountData(namespaceToUse);
            if (!(_accountData == null ? void 0 : _accountData.farcasterUrl)) {
              try {
                const { url } = await authConnector.provider.getFarcasterUri();
                ChainController.setAccountProp("farcasterUrl", url, namespaceToUse);
              } catch {
                reject(new Error("Failed to connect to farcaster"));
              }
            }
          }
        } else {
          const authConnector = ConnectorController.getAuthConnector();
          popupWindow = CoreHelperUtil.returnOpenHref(`${ConstantsUtil$3.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
          try {
            if (authConnector && socialProvider) {
              const { uri } = await authConnector.provider.getSocialRedirectUri({
                provider: socialProvider
              });
              if (popupWindow && uri) {
                ChainController.setAccountProp("socialWindow", ref(popupWindow), namespaceToUse);
                socialWindow = accountData == null ? void 0 : accountData.socialWindow;
                popupWindow.location.href = uri;
                const interval = setInterval(() => {
                  if ((socialWindow == null ? void 0 : socialWindow.closed) && !isConnectingSocial) {
                    reject(new Error("Popup closed"));
                    clearInterval(interval);
                  }
                }, 1e3);
                window.addEventListener("message", handleSocialConnection, false);
              } else {
                popupWindow == null ? void 0 : popupWindow.close();
                reject(new Error("Failed to initiate social connection"));
              }
            }
          } catch {
            reject(new Error("Failed to initiate social connection"));
            popupWindow == null ? void 0 : popupWindow.close();
          }
        }
      }
      connectSocial();
    });
  },
  connectEmail({ closeModalOnConnect = true, redirectViewOnModalClose = "Connect", onOpen, onConnect }) {
    return new Promise((resolve, reject) => {
      onOpen == null ? void 0 : onOpen();
      if (redirectViewOnModalClose) {
        const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
          if (!val) {
            if (RouterController.state.view !== redirectViewOnModalClose) {
              RouterController.replace(redirectViewOnModalClose);
            }
            unsubscribeModalController();
            reject(new Error("Modal closed"));
          }
        });
      }
      const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
        if (val) {
          onConnect == null ? void 0 : onConnect();
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
      throw new Error("No auth connector found");
    }
    if (connectorId !== ConstantsUtil$3.CONNECTOR_ID.AUTH) {
      throw new Error("Not connected to email or social");
    }
    const initialEmail = authConnector.provider.getEmail() ?? "";
    await ModalController.open({
      view: "UpdateEmailWallet",
      data: {
        email: initialEmail,
        redirectView: void 0
      }
    });
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        const newEmail = authConnector.provider.getEmail() ?? "";
        if (newEmail !== initialEmail) {
          ModalController.close();
          clearInterval(interval);
          unsubscribeModalController();
          resolve({ email: newEmail });
        }
      }, UPDATE_EMAIL_INTERVAL_MS);
      const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
        if (!val) {
          if (RouterController.state.view !== "Connect") {
            RouterController.push("Connect");
          }
          clearInterval(interval);
          unsubscribeModalController();
          reject(new Error("Modal closed"));
        }
      });
    });
  },
  canSwitchToSmartAccount(namespace) {
    const isSmartAccountEnabled = ChainController.checkIfSmartAccountEnabled();
    return isSmartAccountEnabled && getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;
  }
};
function getActiveNetworkTokenAddress() {
  var _a2, _b2;
  const namespace = ((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) || "eip155";
  const chainId = ((_b2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _b2.id) || 1;
  const address = ConstantsUtil$2.NATIVE_TOKEN_ADDRESS[namespace];
  return `${namespace}:${chainId}:${address}`;
}
function getPreferredAccountType(namespace) {
  var _a2;
  const preferredAccountType = (_a2 = ChainController.getAccountData(namespace)) == null ? void 0 : _a2.preferredAccountType;
  return preferredAccountType;
}
function getActiveCaipNetwork(chainNamespace) {
  return ChainController.state.activeCaipNetwork;
}
const ConnectionControllerUtil = {
  getConnectionStatus(connection, namespace) {
    const connectedConnectorId = ConnectorController.state.activeConnectorIds[namespace];
    const connections = ConnectionController.getConnections(namespace);
    const isConnectorConnected = Boolean(connectedConnectorId) && connection.connectorId === connectedConnectorId;
    if (isConnectorConnected) {
      return "connected";
    }
    const isConnectionConnected = connections.some((c2) => c2.connectorId.toLowerCase() === connection.connectorId.toLowerCase());
    if (isConnectionConnected) {
      return "active";
    }
    return "disconnected";
  },
  excludeConnectorAddressFromConnections({ connections, connectorId, addresses }) {
    return connections.map((connection) => {
      const isConnectorMatch = connectorId ? connection.connectorId.toLowerCase() === connectorId.toLowerCase() : false;
      if (isConnectorMatch && addresses) {
        const filteredAccounts = connection.accounts.filter((account) => {
          const isAddressIncluded = addresses.some((address) => address.toLowerCase() === account.address.toLowerCase());
          return !isAddressIncluded;
        });
        return { ...connection, accounts: filteredAccounts };
      }
      return connection;
    });
  },
  excludeExistingConnections(connectorIds, newConnections) {
    const existingConnectorIds = new Set(connectorIds);
    return newConnections.filter((c2) => !existingConnectorIds.has(c2.connectorId));
  },
  getConnectionsByConnectorId(connections, connectorId) {
    return connections.filter((c2) => c2.connectorId.toLowerCase() === connectorId.toLowerCase());
  },
  getConnectionsData(namespace) {
    var _a2;
    const isMultiWalletEnabled = Boolean((_a2 = OptionsController.state.remoteFeatures) == null ? void 0 : _a2.multiWallet);
    const activeConnectorId = ConnectorController.state.activeConnectorIds[namespace];
    const connections = ConnectionController.getConnections(namespace);
    const recentConnections = ConnectionController.state.recentConnections.get(namespace) ?? [];
    const recentConnectionsWithCurrentActiveConnectors = recentConnections.filter((connection) => ConnectorController.getConnectorById(connection.connectorId));
    const dedupedRecentConnections = ConnectionControllerUtil.excludeExistingConnections([...connections.map((c2) => c2.connectorId), ...activeConnectorId ? [activeConnectorId] : []], recentConnectionsWithCurrentActiveConnectors);
    if (!isMultiWalletEnabled) {
      return {
        connections: connections.filter((c2) => c2.connectorId.toLowerCase() === (activeConnectorId == null ? void 0 : activeConnectorId.toLowerCase())),
        recentConnections: []
      };
    }
    return {
      connections,
      recentConnections: dedupedRecentConnections
    };
  }
};
const state$9 = proxy({
  transactions: [],
  transactionsByYear: {},
  lastNetworkInView: void 0,
  loading: false,
  empty: false,
  next: void 0
});
const controller$7 = {
  state: state$9,
  subscribe(callback) {
    return subscribe(state$9, () => callback(state$9));
  },
  setLastNetworkInView(lastNetworkInView) {
    state$9.lastNetworkInView = lastNetworkInView;
  },
  async fetchTransactions(accountAddress) {
    var _a2;
    if (!accountAddress) {
      throw new Error("Transactions can't be fetched without an accountAddress");
    }
    state$9.loading = true;
    try {
      const response = await BlockchainApiController.fetchTransactions({
        account: accountAddress,
        cursor: state$9.next,
        chainId: (_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId
      });
      const nonSpamTransactions = TransactionsController.filterSpamTransactions(response.data);
      const sameChainTransactions = TransactionsController.filterByConnectedChain(nonSpamTransactions);
      const filteredTransactions = [...state$9.transactions, ...sameChainTransactions];
      state$9.loading = false;
      state$9.transactions = filteredTransactions;
      state$9.transactionsByYear = TransactionsController.groupTransactionsByYearAndMonth(state$9.transactionsByYear, sameChainTransactions);
      state$9.empty = filteredTransactions.length === 0;
      state$9.next = response.next ? response.next : void 0;
    } catch (error) {
      const activeChainNamespace = ChainController.state.activeChain;
      EventsController.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: accountAddress,
          projectId: OptionsController.state.projectId,
          cursor: state$9.next,
          isSmartAccount: getPreferredAccountType(activeChainNamespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      SnackController.showError("Failed to fetch transactions");
      state$9.loading = false;
      state$9.empty = true;
      state$9.next = void 0;
    }
  },
  groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
    const grouped = transactionsMap;
    transactions.forEach((transaction) => {
      const year = new Date(transaction.metadata.minedAt).getFullYear();
      const month = new Date(transaction.metadata.minedAt).getMonth();
      const yearTransactions = grouped[year] ?? {};
      const monthTransactions = yearTransactions[month] ?? [];
      const newMonthTransactions = monthTransactions.filter((tx) => tx.id !== transaction.id);
      grouped[year] = {
        ...yearTransactions,
        [month]: [...newMonthTransactions, transaction].sort((a2, b2) => new Date(b2.metadata.minedAt).getTime() - new Date(a2.metadata.minedAt).getTime())
      };
    });
    return grouped;
  },
  filterSpamTransactions(transactions) {
    return transactions.filter((transaction) => {
      const isAllSpam = transaction.transfers.every((transfer) => {
        var _a2;
        return ((_a2 = transfer.nft_info) == null ? void 0 : _a2.flags.is_spam) === true;
      });
      return !isAllSpam;
    });
  },
  filterByConnectedChain(transactions) {
    var _a2;
    const chainId = (_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
    const filteredTransactions = transactions.filter((transaction) => transaction.metadata.chain === chainId);
    return filteredTransactions;
  },
  clearCursor() {
    state$9.next = void 0;
  },
  resetTransactions() {
    state$9.transactions = [];
    state$9.transactionsByYear = {};
    state$9.lastNetworkInView = void 0;
    state$9.loading = false;
    state$9.empty = false;
    state$9.next = void 0;
  }
};
const TransactionsController = withErrorBoundary(controller$7, "API_ERROR");
const state$8 = proxy({
  connections: /* @__PURE__ */ new Map(),
  recentConnections: /* @__PURE__ */ new Map(),
  isSwitchingConnection: false,
  wcError: false,
  buffering: false,
  status: "disconnected"
});
let wcConnectionPromise;
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
    const namespaces = adapters.filter((a2) => Boolean(a2.namespace)).map((a2) => a2.namespace);
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
    return namespace ? state$8.connections.get(namespace) ?? [] : [];
  },
  hasAnyConnection(connectorId) {
    const connections = ConnectionController.state.connections;
    return Array.from(connections.values()).flatMap((_connections) => _connections).some(({ connectorId: _connectorId }) => _connectorId === connectorId);
  },
  async connectWalletConnect({ cache = "auto" } = {}) {
    var _a2, _b2, _c2, _d;
    const isInTelegramOrSafariIos = CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari() && CoreHelperUtil.isIos();
    if (cache === "always" || cache === "auto" && isInTelegramOrSafariIos) {
      if (wcConnectionPromise) {
        await wcConnectionPromise;
        wcConnectionPromise = void 0;
        return;
      }
      if (!CoreHelperUtil.isPairingExpired(state$8 == null ? void 0 : state$8.wcPairingExpiry)) {
        const link = state$8.wcUri;
        state$8.wcUri = link;
        return;
      }
      wcConnectionPromise = (_b2 = (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.connectWalletConnect) == null ? void 0 : _b2.call(_a2).catch(() => void 0);
      ConnectionController.state.status = "connecting";
      await wcConnectionPromise;
      wcConnectionPromise = void 0;
      state$8.wcPairingExpiry = void 0;
      ConnectionController.state.status = "connected";
    } else {
      await ((_d = (_c2 = ConnectionController._getClient()) == null ? void 0 : _c2.connectWalletConnect) == null ? void 0 : _d.call(_c2));
    }
  },
  async connectExternal(options, chain, setChain = true) {
    var _a2, _b2;
    const connectData = await ((_b2 = (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.connectExternal) == null ? void 0 : _b2.call(_a2, options));
    if (setChain) {
      ChainController.setActiveNamespace(chain);
    }
    return connectData;
  },
  async reconnectExternal(options) {
    var _a2, _b2;
    await ((_b2 = (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.reconnectExternal) == null ? void 0 : _b2.call(_a2, options));
    const namespace = options.chain || ChainController.state.activeChain;
    if (namespace) {
      ConnectorController.setConnectorId(options.id, namespace);
    }
  },
  async setPreferredAccountType(accountType, namespace) {
    var _a2;
    if (!namespace) {
      return;
    }
    ModalController.setLoading(true, ChainController.state.activeChain);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    ChainController.setAccountProp("preferredAccountType", accountType, namespace);
    await authConnector.provider.setPreferredAccount(accountType);
    StorageUtil.setPreferredAccountTypes(Object.entries(ChainController.state.chains).reduce((acc, [key, _2]) => {
      const namespace2 = key;
      const accountType2 = getPreferredAccountType(namespace2);
      if (accountType2 !== void 0) {
        acc[namespace2] = accountType2;
      }
      return acc;
    }, {}));
    await ConnectionController.reconnectExternal(authConnector);
    ModalController.setLoading(false, ChainController.state.activeChain);
    EventsController.sendEvent({
      type: "track",
      event: "SET_PREFERRED_ACCOUNT_TYPE",
      properties: {
        accountType,
        network: ((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || ""
      }
    });
  },
  async signMessage(message) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.signMessage(message);
  },
  parseUnits(value, decimals) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.parseUnits(value, decimals);
  },
  formatUnits(value, decimals) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.formatUnits(value, decimals);
  },
  updateBalance(namespace) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.updateBalance(namespace);
  },
  async sendTransaction(args) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.sendTransaction(args);
  },
  async getCapabilities(params) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.getCapabilities(params);
  },
  async grantPermissions(params) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.grantPermissions(params);
  },
  async walletGetAssets(params) {
    var _a2;
    return ((_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.walletGetAssets(params)) ?? {};
  },
  async estimateGas(args) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.estimateGas(args);
  },
  async writeContract(args) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.writeContract(args);
  },
  async getEnsAddress(value) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.getEnsAddress(value);
  },
  async getEnsAvatar(value) {
    var _a2;
    return (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.getEnsAvatar(value);
  },
  checkInstalled(ids) {
    var _a2, _b2;
    return ((_b2 = (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.checkInstalled) == null ? void 0 : _b2.call(_a2, ids)) || false;
  },
  resetWcConnection() {
    state$8.wcUri = void 0;
    state$8.wcPairingExpiry = void 0;
    state$8.wcLinking = void 0;
    state$8.recentWallet = void 0;
    state$8.status = "disconnected";
    TransactionsController.resetTransactions();
    StorageUtil.deleteWalletConnectDeepLink();
    StorageUtil.deleteRecentWallet();
  },
  resetUri() {
    state$8.wcUri = void 0;
    state$8.wcPairingExpiry = void 0;
    wcConnectionPromise = void 0;
  },
  finalizeWcConnection(address) {
    var _a2, _b2;
    const { wcLinking, recentWallet } = ConnectionController.state;
    if (wcLinking) {
      StorageUtil.setWalletConnectDeepLink(wcLinking);
    }
    if (recentWallet) {
      StorageUtil.setAppKitRecent(recentWallet);
    }
    if (address) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address,
        properties: {
          method: wcLinking ? "mobile" : "qrcode",
          name: ((_b2 = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet) == null ? void 0 : _b2.name) || "Unknown",
          view: RouterController.state.view,
          walletRank: recentWallet == null ? void 0 : recentWallet.order
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
    var _a2;
    try {
      await ((_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.disconnect({
        id,
        chainNamespace: namespace,
        initialDisconnect
      }));
    } catch (error) {
      throw new AppKitError("Failed to disconnect", "INTERNAL_SDK_ERROR", error);
    }
  },
  async disconnectConnector({ id, namespace }) {
    var _a2;
    try {
      await ((_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.disconnectConnector({ id, namespace }));
    } catch (error) {
      throw new AppKitError("Failed to disconnect connector", "INTERNAL_SDK_ERROR", error);
    }
  },
  setConnections(connections, chainNamespace) {
    const connectionsMap = new Map(state$8.connections);
    connectionsMap.set(chainNamespace, connections);
    state$8.connections = connectionsMap;
  },
  async handleAuthAccountSwitch({ address, namespace }) {
    var _a2, _b2;
    const accountData = ChainController.getAccountData(namespace);
    const smartAccount = (_b2 = (_a2 = accountData == null ? void 0 : accountData.user) == null ? void 0 : _a2.accounts) == null ? void 0 : _b2.find((c2) => c2.type === "smartAccount");
    const accountType = smartAccount && smartAccount.address.toLowerCase() === address.toLowerCase() && ConnectorControllerUtil.canSwitchToSmartAccount(namespace) ? "smartAccount" : "eoa";
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
      return connectData == null ? void 0 : connectData.address;
    } else if (isAuthConnector && address) {
      await ConnectionController.handleAuthAccountSwitch({ address, namespace });
    }
    return address;
  },
  async handleDisconnectedConnection({ connection, namespace, address, closeModalOnConnect }) {
    var _a2, _b2;
    const connector = ConnectorController.getConnectorById(connection.connectorId);
    const authName = (_b2 = (_a2 = connection.auth) == null ? void 0 : _a2.name) == null ? void 0 : _b2.toLowerCase();
    const isAuthConnector = connection.connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
    const isWCConnector = connection.connectorId === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
    if (!connector) {
      throw new Error(`No connector found for connection: ${connection.connectorId}`);
    }
    let newAddress = void 0;
    if (isAuthConnector) {
      if (authName && ConnectorControllerUtil.isSocialProvider(authName)) {
        const { address: socialAddress } = await ConnectorControllerUtil.connectSocial({
          social: authName,
          closeModalOnConnect,
          onOpenFarcaster() {
            ModalController.open({ view: "ConnectingFarcaster" });
          },
          onConnect() {
            RouterController.replace("ProfileWallets");
          }
        });
        newAddress = socialAddress;
      } else {
        const { address: emailAddress } = await ConnectorControllerUtil.connectEmail({
          closeModalOnConnect,
          onOpen() {
            ModalController.open({ view: "EmailLogin" });
          },
          onConnect() {
            RouterController.replace("ProfileWallets");
          }
        });
        newAddress = emailAddress;
      }
    } else if (isWCConnector) {
      const { address: wcAddress } = await ConnectorControllerUtil.connectWalletConnect({
        walletConnect: true,
        connector,
        closeModalOnConnect,
        onOpen(isMobile) {
          const view = isMobile ? "AllWallets" : "ConnectingWalletConnect";
          if (ModalController.state.open) {
            RouterController.push(view);
          } else {
            ModalController.open({ view });
          }
        },
        onConnect() {
          RouterController.replace("ProfileWallets");
        }
      });
      newAddress = wcAddress;
    } else {
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
    var _a2;
    let currentAddress = void 0;
    const caipAddress = (_a2 = ChainController.getAccountData(namespace)) == null ? void 0 : _a2.caipAddress;
    if (caipAddress) {
      const { address: currentAddressParsed } = ParseUtil.parseCaipAddress(caipAddress);
      currentAddress = currentAddressParsed;
    }
    const status = ConnectionControllerUtil.getConnectionStatus(connection, namespace);
    switch (status) {
      case "connected":
      case "active": {
        const newAddress = await ConnectionController.handleActiveConnection({
          connection,
          namespace,
          address
        });
        if (currentAddress && newAddress) {
          const hasSwitchedAccount = newAddress.toLowerCase() !== currentAddress.toLowerCase();
          onChange == null ? void 0 : onChange({
            address: newAddress,
            namespace,
            hasSwitchedAccount,
            hasSwitchedWallet: status === "active"
          });
        }
        break;
      }
      case "disconnected": {
        const newAddress = await ConnectionController.handleDisconnectedConnection({
          connection,
          namespace,
          address,
          closeModalOnConnect
        });
        if (newAddress) {
          onChange == null ? void 0 : onChange({
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
      name: asset.metadata["name"] || "",
      symbol: asset.metadata["symbol"] || "",
      decimals: asset.metadata["decimals"] || 0,
      value: asset.metadata["value"] || 0,
      price: asset.metadata["price"] || 0,
      iconUrl: asset.metadata["iconUrl"] || ""
    };
    return {
      name: metadata.name,
      symbol: metadata.symbol,
      chainId,
      address: asset.address === "native" ? void 0 : this.convertAddressToCAIP10Address(asset.address, chainId),
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
    const parts = caip2ChainId.split(":");
    if (parts.length < 2 || !parts[1]) {
      return "0x0";
    }
    const chainPart = parts[1];
    const parsed = parseInt(chainPart, 10);
    return isNaN(parsed) ? "0x0" : `0x${parsed.toString(16)}`;
  },
  /**
   * Checks if a response is a valid WalletGetAssetsResponse
   * @param response - The response to check
   * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
   */
  isWalletGetAssetsResponse(response) {
    if (typeof response !== "object" || response === null) {
      return false;
    }
    return Object.values(response).every((value) => Array.isArray(value) && value.every((asset) => this.isValidAsset(asset)));
  },
  /**
   * Checks if an asset object is valid.
   * @param asset - The asset object to check.
   * @returns True if the asset is valid, false otherwise.
   */
  isValidAsset(asset) {
    return typeof asset === "object" && asset !== null && typeof asset.address === "string" && typeof asset.balance === "string" && (asset.type === "ERC20" || asset.type === "NATIVE") && typeof asset.metadata === "object" && asset.metadata !== null && typeof asset.metadata["name"] === "string" && typeof asset.metadata["symbol"] === "string" && typeof asset.metadata["decimals"] === "number" && typeof asset.metadata["price"] === "number" && typeof asset.metadata["iconUrl"] === "string";
  }
};
let cachedViemUtils = void 0;
async function loadViemUtils() {
  if (!cachedViemUtils) {
    const { createPublicClient, http: http2, defineChain: defineChain2 } = await __vitePreload(async () => {
      const { createPublicClient: createPublicClient2, http: http3, defineChain: defineChain3 } = await import("./index-C45_iBWu.js");
      return { createPublicClient: createPublicClient2, http: http3, defineChain: defineChain3 };
    }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0);
    cachedViemUtils = {
      createPublicClient,
      http: http2,
      defineChain: defineChain2
    };
  }
  return cachedViemUtils;
}
const ViemUtil = {
  getBlockchainApiRpcUrl(caipNetworkId, projectId) {
    const url = new URL("https://rpc.walletconnect.org/v1/");
    url.searchParams.set("chainId", caipNetworkId);
    url.searchParams.set("projectId", projectId);
    return url.toString();
  },
  async getViemChain(caipNetwork) {
    const { defineChain: defineChain2 } = await loadViemUtils();
    const { chainId } = ParseUtil.parseCaipNetworkId(caipNetwork.caipNetworkId);
    return defineChain2({ ...caipNetwork, id: Number(chainId) });
  },
  async createViemPublicClient(caipNetwork) {
    const { createPublicClient, http: http2 } = await loadViemUtils();
    const projectId = OptionsController.state.projectId;
    const viemChain = await ViemUtil.getViemChain(caipNetwork);
    if (!viemChain) {
      throw new Error(`Chain ${caipNetwork.caipNetworkId} not found in viem/chains`);
    }
    return createPublicClient({
      chain: viemChain,
      transport: http2(ViemUtil.getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId))
    });
  }
};
const BalanceUtil = {
  /**
   * Get the balances of the user's tokens. If user connected with Auth provider or and on the EIP155 network,
   * it'll use the `wallet_getAssets` and `wallet_getCapabilities` calls to fetch the balance rather than Blockchain API
   * @param forceUpdate - If true, the balances will be fetched from the server
   * @returns The balances of the user's tokens
   */
  async getMyTokensWithBalance(forceUpdate) {
    var _a2;
    const address = (_a2 = ChainController.getAccountData()) == null ? void 0 : _a2.address;
    const caipNetwork = ChainController.state.activeCaipNetwork;
    const isAuthConnector = ConnectorController.getConnectorId("eip155") === ConstantsUtil$3.CONNECTOR_ID.AUTH;
    if (!address || !caipNetwork) {
      return [];
    }
    const caipAddress = `${caipNetwork.caipNetworkId}:${address}`;
    const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
    if (cachedBalance) {
      return cachedBalance.balances;
    }
    if (caipNetwork.chainNamespace === ConstantsUtil$3.CHAIN.EVM && isAuthConnector) {
      const eip155Balances = await this.getEIP155Balances(address, caipNetwork);
      if (eip155Balances) {
        return this.filterLowQualityTokens(eip155Balances);
      }
    }
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
    var _a2, _b2;
    try {
      const chainIdHex = ERC7811Utils.getChainIdHexFromCAIP2ChainId(caipNetwork.caipNetworkId);
      const walletCapabilities = await ConnectionController.getCapabilities(address);
      if (!((_b2 = (_a2 = walletCapabilities == null ? void 0 : walletCapabilities[chainIdHex]) == null ? void 0 : _a2["assetDiscovery"]) == null ? void 0 : _b2.supported)) {
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
      const filteredAssets = assets.map((asset) => ERC7811Utils.createBalance(asset, caipNetwork.caipNetworkId));
      StorageUtil.updateBalanceCache({
        caipAddress: `${caipNetwork.caipNetworkId}:${address}`,
        balance: { balances: filteredAssets },
        timestamp: Date.now()
      });
      return filteredAssets;
    } catch (error) {
      return null;
    }
  },
  /**
   * The 1Inch API includes many low-quality tokens in the balance response,
   * which appear inconsistently. This filter prevents them from being displayed.
   */
  filterLowQualityTokens(balances) {
    return balances.filter((balance) => balance.quantity.decimals !== "0");
  },
  async fetchERC20Balance({ caipAddress, assetAddress, caipNetwork }) {
    const publicClient = await ViemUtil.createViemPublicClient(caipNetwork);
    const { address } = ParseUtil.parseCaipAddress(caipAddress);
    const [{ result: name }, { result: symbol }, { result: balance }, { result: decimals }] = await publicClient.multicall({
      contracts: [
        {
          address: assetAddress,
          functionName: "name",
          args: [],
          abi: erc20Abi
        },
        {
          address: assetAddress,
          functionName: "symbol",
          args: [],
          abi: erc20Abi
        },
        {
          address: assetAddress,
          functionName: "balanceOf",
          args: [address],
          abi: erc20Abi
        },
        {
          address: assetAddress,
          functionName: "decimals",
          args: [],
          abi: erc20Abi
        }
      ]
    });
    return {
      name,
      symbol,
      decimals,
      balance: balance && decimals ? formatUnits(balance, decimals) : "0"
    };
  }
};
const state$7 = proxy({
  loading: false,
  open: false,
  selectedNetworkId: void 0,
  activeChain: void 0,
  initialized: false
});
const PublicStateController = {
  state: state$7,
  subscribe(callback) {
    return subscribe(state$7, () => callback(state$7));
  },
  subscribeOpen(callback) {
    return subscribeKey(state$7, "open", callback);
  },
  set(newState) {
    Object.assign(state$7, { ...state$7, ...newState });
  }
};
const SwapApiUtil = {
  async getTokenList(caipNetworkId) {
    var _a2;
    const response = await BlockchainApiController.fetchSwapTokens({
      chainId: caipNetworkId
    });
    const tokens2 = ((_a2 = response == null ? void 0 : response.tokens) == null ? void 0 : _a2.map((token) => ({
      ...token,
      eip2612: false,
      quantity: {
        decimals: "0",
        numeric: "0"
      },
      price: 0,
      value: 0
    }))) || [];
    return tokens2;
  },
  async fetchGasPrice() {
    var _a2;
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (!caipNetwork) {
      return null;
    }
    try {
      switch (caipNetwork.chainNamespace) {
        case "solana":
          const lamportsPerSignature = (_a2 = await (ConnectionController == null ? void 0 : ConnectionController.estimateGas({ chainNamespace: "solana" }))) == null ? void 0 : _a2.toString();
          return {
            standard: lamportsPerSignature,
            fast: lamportsPerSignature,
            instant: lamportsPerSignature
          };
        case "eip155":
        default:
          return await BlockchainApiController.fetchGasPrice({
            chainId: caipNetwork.caipNetworkId
          });
      }
    } catch {
      return null;
    }
  },
  async fetchSwapAllowance({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
    const response = await BlockchainApiController.fetchSwapAllowance({
      tokenAddress,
      userAddress
    });
    if ((response == null ? void 0 : response.allowance) && sourceTokenAmount && sourceTokenDecimals) {
      const parsedValue = ConnectionController.parseUnits(sourceTokenAmount, sourceTokenDecimals) || 0;
      const hasAllowance = BigInt(response.allowance) >= parsedValue;
      return hasAllowance;
    }
    return false;
  },
  async getMyTokensWithBalance(forceUpdate) {
    const balances = await BalanceUtil.getMyTokensWithBalance(forceUpdate);
    ChainController.setAccountProp("tokenBalance", balances, ChainController.state.activeChain);
    return this.mapBalancesToSwapTokens(balances);
  },
  /**
   * Maps the balances from Blockchain API to SwapTokenWithBalance array
   * @param balances
   * @returns SwapTokenWithBalance[]
   */
  mapBalancesToSwapTokens(balances) {
    return (balances == null ? void 0 : balances.map((token) => ({
      ...token,
      address: (token == null ? void 0 : token.address) ? token.address : getActiveNetworkTokenAddress(),
      decimals: parseInt(token.quantity.decimals, 10),
      logoUri: token.iconUrl,
      eip2612: false
    }))) || [];
  },
  async handleSwapError(error) {
    var _a2, _b2;
    try {
      const cause = error == null ? void 0 : error.cause;
      if (!(cause == null ? void 0 : cause.json)) {
        return void 0;
      }
      const response = await cause.json();
      const reason = (_b2 = (_a2 = response == null ? void 0 : response.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description;
      if (reason == null ? void 0 : reason.includes("insufficient liquidity")) {
        return "Insufficient liquidity";
      }
      return void 0;
    } catch {
      return void 0;
    }
  }
};
const state$6 = proxy({
  tokenBalances: [],
  loading: false
});
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
    var _a2, _b2;
    return {
      message: CoreHelperUtil.parseError(error),
      isSmartAccount: getPreferredAccountType(ChainController.state.activeChain) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
      token: ((_a2 = state$6.token) == null ? void 0 : _a2.symbol) || "",
      amount: state$6.sendTokenAmount ?? 0,
      network: ((_b2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
    };
  },
  async sendToken() {
    var _a2;
    try {
      SendController.setLoading(true);
      switch ((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) {
        case "eip155":
          await SendController.sendEvmToken();
          return;
        case "solana":
          await SendController.sendSolanaToken();
          return;
        default:
          throw new Error("Unsupported chain");
      }
    } catch (err) {
      if (ErrorUtil$1.isUserRejectedRequestError(err)) {
        throw new UserRejectedRequestError(err);
      }
      throw err;
    } finally {
      SendController.setLoading(false);
    }
  },
  async sendEvmToken() {
    var _a2, _b2, _c2;
    const activeChainNamespace = ChainController.state.activeChain;
    if (!activeChainNamespace) {
      throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
    }
    const activeAccountType = getPreferredAccountType(activeChainNamespace);
    if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
      throw new Error("An amount and receiver address are required");
    }
    if (!SendController.state.token) {
      throw new Error("A token is required");
    }
    if ((_a2 = SendController.state.token) == null ? void 0 : _a2.address) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: SendController.state.token.address,
          amount: SendController.state.sendTokenAmount,
          network: ((_b2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
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
    } else {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: SendController.state.token.symbol || "",
          amount: SendController.state.sendTokenAmount,
          network: ((_c2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || ""
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
    var _a2, _b2, _c2;
    state$6.loading = true;
    const namespace = ChainController.state.activeChain;
    const chainId = (_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
    const chain = (_b2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace;
    const caipAddress = ((_c2 = ChainController.getAccountData(namespace)) == null ? void 0 : _c2.caipAddress) ?? ChainController.state.activeCaipAddress;
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    if (state$6.lastRetry && !CoreHelperUtil.isAllowedRetry(state$6.lastRetry, 30 * ConstantsUtil$2.ONE_SEC_MS)) {
      state$6.loading = false;
      return [];
    }
    try {
      if (address && chainId && chain) {
        const balances = await BalanceUtil.getMyTokensWithBalance();
        state$6.tokenBalances = balances;
        state$6.lastRetry = void 0;
        return balances;
      }
    } catch (error) {
      state$6.lastRetry = Date.now();
      onError == null ? void 0 : onError(error);
      SnackController.showError("Token Balance Unavailable");
    } finally {
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
    const networkToken = networkTokenBalances.find((token) => token.address === getActiveNetworkTokenAddress());
    if (!networkToken) {
      return;
    }
    state$6.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async sendNativeToken(params) {
    var _a2, _b2, _c2, _d;
    RouterController.pushTransactionStack({});
    const to2 = params.receiverAddress;
    const address = (_a2 = ChainController.getAccountData()) == null ? void 0 : _a2.address;
    const value = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    const data = "0x";
    const hash = await ConnectionController.sendTransaction({
      chainNamespace: ConstantsUtil$3.CHAIN.EVM,
      to: to2,
      address,
      data,
      value: value ?? BigInt(0)
    });
    EventsController.sendEvent({
      type: "track",
      event: "SEND_SUCCESS",
      properties: {
        isSmartAccount: getPreferredAccountType("eip155") === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_b2 = SendController.state.token) == null ? void 0 : _b2.symbol) || "",
        amount: params.sendTokenAmount,
        network: ((_c2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
        hash: hash || ""
      }
    });
    (_d = ConnectionController._getClient()) == null ? void 0 : _d.updateBalance("eip155");
    SendController.resetSend();
    return { hash };
  },
  async sendERC20Token(params) {
    var _a2, _b2, _c2;
    RouterController.pushTransactionStack({
      onSuccess() {
        RouterController.replace("Account");
      }
    });
    const amount = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    const address = (_a2 = ChainController.getAccountData()) == null ? void 0 : _a2.address;
    if (address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
      const tokenAddress = CoreHelperUtil.getPlainAddress(params.tokenAddress);
      if (!tokenAddress) {
        throw new Error("SendController:sendERC20Token - tokenAddress is required");
      }
      const hash = await ConnectionController.writeContract({
        fromAddress: address,
        tokenAddress,
        args: [params.receiverAddress, amount ?? BigInt(0)],
        method: "transfer",
        abi: ContractUtil.getERC20Abi(tokenAddress),
        chainNamespace: ConstantsUtil$3.CHAIN.EVM
      });
      EventsController.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: getPreferredAccountType("eip155") === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b2 = SendController.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: params.sendTokenAmount,
          network: ((_c2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: hash || ""
        }
      });
      SendController.resetSend();
      return { hash };
    }
    return { hash: void 0 };
  },
  async sendSolanaToken() {
    var _a2;
    if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
      throw new Error("An amount and receiver address are required");
    }
    RouterController.pushTransactionStack({
      onSuccess() {
        RouterController.replace("Account");
      }
    });
    let tokenMint = void 0;
    if (SendController.state.token && SendController.state.token.address !== ConstantsUtil$2.SOLANA_NATIVE_TOKEN_ADDRESS) {
      if (CoreHelperUtil.isCaipAddress(SendController.state.token.address)) {
        tokenMint = CoreHelperUtil.getPlainAddress(SendController.state.token.address);
      } else {
        tokenMint = SendController.state.token.address;
      }
    }
    const hash = await ConnectionController.sendTransaction({
      chainNamespace: "solana",
      tokenMint,
      to: SendController.state.receiverAddress,
      value: SendController.state.sendTokenAmount
    });
    if (hash) {
      state$6.hash = hash;
    }
    (_a2 = ConnectionController._getClient()) == null ? void 0 : _a2.updateBalance("solana");
    SendController.resetSend();
  },
  resetSend() {
    state$6.token = void 0;
    state$6.sendTokenAmount = void 0;
    state$6.receiverAddress = void 0;
    state$6.receiverProfileImageUrl = void 0;
    state$6.receiverProfileName = void 0;
    state$6.loading = false;
    state$6.tokenBalances = [];
  }
};
const SendController = withErrorBoundary(controller$5);
const defaultAccountState = {
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false,
  addressLabels: /* @__PURE__ */ new Map(),
  user: void 0,
  preferredAccountType: void 0
};
const networkState = {
  caipNetwork: void 0,
  supportsAllNetworks: true,
  smartAccountEnabledNetworks: []
};
const state$5 = proxy({
  chains: proxyMap(),
  activeCaipAddress: void 0,
  activeChain: void 0,
  activeCaipNetwork: void 0,
  noAdapters: false,
  universalAdapter: {
    networkControllerClient: void 0,
    connectionControllerClient: void 0
  },
  isSwitchingNamespace: false
});
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
    var _a2;
    const activeChain = chain || state$5.activeChain;
    if (!activeChain) {
      return () => void 0;
    }
    return subscribeKey(((_a2 = state$5.chains.get(activeChain)) == null ? void 0 : _a2.accountState) || {}, property, callback);
  },
  subscribeChainProp(property, callback, chain) {
    let prev = void 0;
    return subscribe(state$5.chains, () => {
      var _a2;
      const activeChain = chain || state$5.activeChain;
      if (activeChain) {
        const nextValue = (_a2 = state$5.chains.get(activeChain)) == null ? void 0 : _a2[property];
        if (prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      }
    });
  },
  initialize(adapters, caipNetworks, clients) {
    const { chainId: activeChainId, namespace: activeNamespace } = StorageUtil.getActiveNetworkProps();
    const activeCaipNetwork = caipNetworks == null ? void 0 : caipNetworks.find((network) => network.id.toString() === (activeChainId == null ? void 0 : activeChainId.toString()));
    const defaultAdapter = adapters.find((adapter) => (adapter == null ? void 0 : adapter.namespace) === activeNamespace);
    const adapterToActivate = defaultAdapter || (adapters == null ? void 0 : adapters[0]);
    const namespacesFromAdapters = adapters.map((a2) => a2.namespace).filter((n3) => n3 !== void 0);
    const namespaces = OptionsController.state.enableEmbedded ? /* @__PURE__ */ new Set([...namespacesFromAdapters]) : /* @__PURE__ */ new Set([...(caipNetworks == null ? void 0 : caipNetworks.map((network) => network.chainNamespace)) ?? []]);
    if ((adapters == null ? void 0 : adapters.length) === 0 || !adapterToActivate) {
      state$5.noAdapters = true;
    }
    if (!state$5.noAdapters) {
      state$5.activeChain = adapterToActivate == null ? void 0 : adapterToActivate.namespace;
      state$5.activeCaipNetwork = activeCaipNetwork;
      ChainController.setChainNetworkData(adapterToActivate == null ? void 0 : adapterToActivate.namespace, {
        caipNetwork: activeCaipNetwork
      });
      if (state$5.activeChain) {
        PublicStateController.set({ activeChain: adapterToActivate == null ? void 0 : adapterToActivate.namespace });
      }
    }
    namespaces.forEach((namespace) => {
      const namespaceNetworks = caipNetworks == null ? void 0 : caipNetworks.filter((network) => network.chainNamespace === namespace);
      const storedAccountTypes = StorageUtil.getPreferredAccountTypes() || {};
      const defaultTypes = { ...OptionsController.state.defaultAccountTypes, ...storedAccountTypes };
      ChainController.state.chains.set(namespace, {
        namespace,
        networkState: proxy({ ...networkState, caipNetwork: namespaceNetworks == null ? void 0 : namespaceNetworks[0] }),
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
    var _a2, _b2;
    if (state$5.activeChain === namespace) {
      const nextAdapter = Array.from(state$5.chains.entries()).find(([chainNamespace]) => chainNamespace !== namespace);
      if (nextAdapter) {
        const caipNetwork = (_b2 = (_a2 = nextAdapter[1]) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0];
        if (caipNetwork) {
          ChainController.setActiveCaipNetwork(caipNetwork);
        }
      }
    }
    state$5.chains.delete(namespace);
  },
  addAdapter(adapter, { networkControllerClient, connectionControllerClient }, caipNetworks) {
    if (!adapter.namespace) {
      throw new Error("ChainController:addAdapter - adapter must have a namespace");
    }
    state$5.chains.set(adapter.namespace, {
      namespace: adapter.namespace,
      networkState: { ...networkState, caipNetwork: caipNetworks[0] },
      accountState: { ...defaultAccountState },
      caipNetworks,
      connectionControllerClient,
      networkControllerClient
    });
    ChainController.setRequestedCaipNetworks((caipNetworks == null ? void 0 : caipNetworks.filter((caipNetwork) => caipNetwork.chainNamespace === adapter.namespace)) ?? [], adapter.namespace);
  },
  addNetwork(network) {
    var _a2;
    const chainAdapter = state$5.chains.get(network.chainNamespace);
    if (chainAdapter) {
      const newNetworks = [...chainAdapter.caipNetworks || []];
      if (!((_a2 = chainAdapter.caipNetworks) == null ? void 0 : _a2.find((caipNetwork) => caipNetwork.id === network.id))) {
        newNetworks.push(network);
      }
      state$5.chains.set(network.chainNamespace, { ...chainAdapter, caipNetworks: newNetworks });
      ChainController.setRequestedCaipNetworks(newNetworks, network.chainNamespace);
      ConnectorController.filterByNamespace(network.chainNamespace, true);
    }
  },
  removeNetwork(namespace, networkId) {
    var _a2, _b2, _c2;
    const chainAdapter = state$5.chains.get(namespace);
    if (chainAdapter) {
      const isActiveNetwork = ((_a2 = state$5.activeCaipNetwork) == null ? void 0 : _a2.id) === networkId;
      const newCaipNetworksOfAdapter = [
        ...((_b2 = chainAdapter.caipNetworks) == null ? void 0 : _b2.filter((network) => network.id !== networkId)) || []
      ];
      if (isActiveNetwork && ((_c2 = chainAdapter == null ? void 0 : chainAdapter.caipNetworks) == null ? void 0 : _c2[0])) {
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
        ...chainAdapter.networkState || networkState,
        ...props
      };
      state$5.chains.set(chain, chainAdapter);
    }
  },
  setChainAccountData(chain, accountProps, _unknown = true) {
    if (!chain) {
      throw new Error("Chain is required to update chain account data");
    }
    const chainAdapter = state$5.chains.get(chain);
    if (chainAdapter) {
      const newAccountState = {
        ...chainAdapter.accountState || defaultAccountState,
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
      const newNetworkState = { ...chainAdapter.networkState || networkState, ...networkProps };
      state$5.chains.set(chain, { ...chainAdapter, networkState: newNetworkState });
    }
  },
  // eslint-disable-next-line max-params
  setAccountProp(prop, value, chain, replaceState = true) {
    ChainController.setChainAccountData(chain, { [prop]: value }, replaceState);
  },
  setActiveNamespace(chain) {
    var _a2, _b2;
    state$5.activeChain = chain;
    const newAdapter = chain ? state$5.chains.get(chain) : void 0;
    const caipNetwork = (_a2 = newAdapter == null ? void 0 : newAdapter.networkState) == null ? void 0 : _a2.caipNetwork;
    if ((caipNetwork == null ? void 0 : caipNetwork.id) && chain) {
      state$5.activeCaipAddress = (_b2 = newAdapter == null ? void 0 : newAdapter.accountState) == null ? void 0 : _b2.caipAddress;
      state$5.activeCaipNetwork = caipNetwork;
      ChainController.setChainNetworkData(chain, { caipNetwork });
      StorageUtil.setActiveCaipNetworkId(caipNetwork == null ? void 0 : caipNetwork.caipNetworkId);
      PublicStateController.set({
        activeChain: chain,
        selectedNetworkId: caipNetwork == null ? void 0 : caipNetwork.caipNetworkId
      });
    }
  },
  setActiveCaipNetwork(caipNetwork) {
    var _a2, _b2;
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
    let address = (_a2 = newAdapter == null ? void 0 : newAdapter.accountState) == null ? void 0 : _a2.address;
    if (address) {
      state$5.activeCaipAddress = `${caipNetwork.chainNamespace}:${caipNetwork.id}:${address}`;
    } else if (isSameNamespace && state$5.activeCaipAddress) {
      const { address: parsedAddress } = ParseUtil.parseCaipAddress(state$5.activeCaipAddress);
      address = parsedAddress;
      state$5.activeCaipAddress = `${caipNetwork.caipNetworkId}:${address}`;
    } else {
      state$5.activeCaipAddress = void 0;
    }
    ChainController.setChainAccountData(caipNetwork.chainNamespace, {
      address,
      caipAddress: state$5.activeCaipAddress
    });
    SendController.resetSend();
    PublicStateController.set({
      activeChain: state$5.activeChain,
      selectedNetworkId: (_b2 = state$5.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId
    });
    StorageUtil.setActiveCaipNetworkId(caipNetwork.caipNetworkId);
    const isSupported = ChainController.checkIfSupportedNetwork(caipNetwork.chainNamespace);
    if (!isSupported && OptionsController.state.enableNetworkSwitch && !OptionsController.state.allowUnsupportedChain && !ConnectionController.state.wcBasic) {
      ChainController.showUnsupportedChainUI();
    }
  },
  addCaipNetwork(caipNetwork) {
    var _a2;
    if (!caipNetwork) {
      return;
    }
    const chain = state$5.chains.get(caipNetwork.chainNamespace);
    if (chain) {
      (_a2 = chain == null ? void 0 : chain.caipNetworks) == null ? void 0 : _a2.push(caipNetwork);
    }
  },
  async switchActiveNamespace(namespace) {
    var _a2;
    if (!namespace) {
      return;
    }
    const isDifferentChain = namespace !== ChainController.state.activeChain;
    const caipNetworkOfNamespace = (_a2 = ChainController.getNetworkData(namespace)) == null ? void 0 : _a2.caipNetwork;
    const firstNetworkWithChain = ChainController.getCaipNetworkByNamespace(namespace, caipNetworkOfNamespace == null ? void 0 : caipNetworkOfNamespace.id);
    if (isDifferentChain && firstNetworkWithChain) {
      await ChainController.switchActiveNetwork(firstNetworkWithChain);
    }
  },
  async switchActiveNetwork(network, { throwOnFailure = false } = {}) {
    var _a2;
    const namespace = ChainController.state.activeChain;
    if (!namespace) {
      throw new Error("ChainController:switchActiveNetwork - namespace is required");
    }
    const activeAdapter = ChainController.state.chains.get(namespace);
    const unsupportedNetwork = !((_a2 = activeAdapter == null ? void 0 : activeAdapter.caipNetworks) == null ? void 0 : _a2.some((caipNetwork) => {
      var _a3;
      return caipNetwork.id === ((_a3 = state$5.activeCaipNetwork) == null ? void 0 : _a3.id);
    }));
    const networkControllerClient = ChainController.getNetworkControllerClient(network.chainNamespace);
    if (networkControllerClient) {
      try {
        await networkControllerClient.switchCaipNetwork(network);
        if (unsupportedNetwork) {
          ModalController.close();
        }
      } catch (error) {
        if (throwOnFailure) {
          throw error;
        }
        RouterController.goBack();
      }
      EventsController.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: { network: network.caipNetworkId }
      });
    }
  },
  getNetworkControllerClient(chainNamespace) {
    const chain = chainNamespace || state$5.activeChain;
    if (!chain) {
      throw new Error("ChainController:getNetworkControllerClient - chain is required");
    }
    const chainAdapter = state$5.chains.get(chain);
    if (!chainAdapter) {
      throw new Error("Chain adapter not found");
    }
    if (!chainAdapter.networkControllerClient) {
      throw new Error("NetworkController client not set");
    }
    return chainAdapter.networkControllerClient;
  },
  getConnectionControllerClient(_chain) {
    const chain = _chain || state$5.activeChain;
    if (!chain) {
      throw new Error("Chain is required to get connection controller client");
    }
    const chainAdapter = state$5.chains.get(chain);
    if (!(chainAdapter == null ? void 0 : chainAdapter.connectionControllerClient)) {
      throw new Error("ConnectionController client not set");
    }
    return chainAdapter.connectionControllerClient;
  },
  getNetworkProp(key, namespace) {
    var _a2;
    const chainNetworkState = (_a2 = state$5.chains.get(namespace)) == null ? void 0 : _a2.networkState;
    if (!chainNetworkState) {
      return void 0;
    }
    return chainNetworkState[key];
  },
  getRequestedCaipNetworks(chainToFilter) {
    const adapter = state$5.chains.get(chainToFilter);
    const { approvedCaipNetworkIds = [], requestedCaipNetworks = [] } = (adapter == null ? void 0 : adapter.networkState) || {};
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    const filteredNetworks = sortedNetworks.filter((network) => network == null ? void 0 : network.id);
    return filteredNetworks;
  },
  getAllRequestedCaipNetworks() {
    const requestedCaipNetworks = [];
    state$5.chains.forEach((chainAdapter) => {
      if (!chainAdapter.namespace) {
        throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
      }
      const caipNetworks = ChainController.getRequestedCaipNetworks(chainAdapter.namespace);
      requestedCaipNetworks.push(...caipNetworks);
    });
    return requestedCaipNetworks;
  },
  setRequestedCaipNetworks(caipNetworks, chain) {
    ChainController.setAdapterNetworkState(chain, { requestedCaipNetworks: caipNetworks });
    const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const namespaces = allRequestedCaipNetworks.map((network) => network.chainNamespace);
    const uniqueNamespaces = Array.from(new Set(namespaces));
    ConnectorController.filterByNamespaces(uniqueNamespaces);
  },
  getAllApprovedCaipNetworkIds() {
    const approvedCaipNetworkIds = [];
    state$5.chains.forEach((chainAdapter) => {
      if (!chainAdapter.namespace) {
        throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
      }
      const approvedIds = ChainController.getApprovedCaipNetworkIds(chainAdapter.namespace);
      approvedCaipNetworkIds.push(...approvedIds);
    });
    return approvedCaipNetworkIds;
  },
  getActiveCaipNetwork(chainNamespace) {
    var _a2, _b2;
    if (chainNamespace) {
      return (_b2 = (_a2 = state$5.chains.get(chainNamespace)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b2.caipNetwork;
    }
    return state$5.activeCaipNetwork;
  },
  getActiveCaipAddress() {
    return state$5.activeCaipAddress;
  },
  getApprovedCaipNetworkIds(namespace) {
    var _a2;
    const adapter = state$5.chains.get(namespace);
    const approvedCaipNetworkIds = ((_a2 = adapter == null ? void 0 : adapter.networkState) == null ? void 0 : _a2.approvedCaipNetworkIds) || [];
    return approvedCaipNetworkIds;
  },
  async setApprovedCaipNetworksData(namespace) {
    const networkControllerClient = ChainController.getNetworkControllerClient();
    const data = await (networkControllerClient == null ? void 0 : networkControllerClient.getApprovedCaipNetworksData());
    ChainController.setAdapterNetworkState(namespace, {
      approvedCaipNetworkIds: data == null ? void 0 : data.approvedCaipNetworkIds,
      supportsAllNetworks: data == null ? void 0 : data.supportsAllNetworks
    });
  },
  checkIfSupportedNetwork(namespace, caipNetworkId) {
    var _a2;
    const activeCaipNetworkId = caipNetworkId || ((_a2 = state$5.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(namespace);
    if (!requestedCaipNetworks.length) {
      return true;
    }
    return requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.some((network) => network.caipNetworkId === activeCaipNetworkId);
  },
  checkIfSupportedChainId(chainId) {
    if (!state$5.activeChain) {
      return true;
    }
    const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(state$5.activeChain);
    return requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.some((network) => network.id === chainId);
  },
  // Smart Account Network Handlers
  setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, chain) {
    ChainController.setAdapterNetworkState(chain, { smartAccountEnabledNetworks });
  },
  checkIfSmartAccountEnabled() {
    var _a2;
    const networkId = NetworkUtil$1.caipNetworkIdToNumber((_a2 = state$5.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    const activeChain = state$5.activeChain;
    if (!activeChain || !networkId) {
      return false;
    }
    const smartAccountEnabledNetworks = ChainController.getNetworkProp("smartAccountEnabledNetworks", activeChain);
    return Boolean(smartAccountEnabledNetworks == null ? void 0 : smartAccountEnabledNetworks.includes(Number(networkId)));
  },
  showUnsupportedChainUI() {
    ModalController.open({ view: "UnsupportedChain" });
  },
  checkIfNamesSupported() {
    const activeCaipNetwork = state$5.activeCaipNetwork;
    return Boolean((activeCaipNetwork == null ? void 0 : activeCaipNetwork.chainNamespace) && ConstantsUtil$2.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(activeCaipNetwork.chainNamespace));
  },
  resetNetwork(namespace) {
    ChainController.setAdapterNetworkState(namespace, {
      approvedCaipNetworkIds: void 0,
      supportsAllNetworks: true
    });
  },
  resetAccount(chain) {
    var _a2, _b2;
    const chainToWrite = chain;
    if (!chainToWrite) {
      throw new Error("Chain is required to set account prop");
    }
    const currentAccountType = (_b2 = (_a2 = ChainController.state.chains.get(chainToWrite)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.preferredAccountType;
    const optionsAccountType = OptionsController.state.defaultAccountTypes[chainToWrite];
    state$5.activeCaipAddress = void 0;
    ChainController.setChainAccountData(chainToWrite, {
      smartAccountDeployed: false,
      currentTab: 0,
      caipAddress: void 0,
      address: void 0,
      balance: void 0,
      balanceSymbol: void 0,
      profileName: void 0,
      profileImage: void 0,
      addressExplorerUrl: void 0,
      tokenBalance: [],
      connectedWalletInfo: void 0,
      preferredAccountType: optionsAccountType || currentAccountType,
      socialProvider: void 0,
      socialWindow: void 0,
      farcasterUrl: void 0,
      user: void 0,
      status: "disconnected"
    });
    ConnectorController.removeConnectorId(chainToWrite);
  },
  setIsSwitchingNamespace(isSwitchingNamespace) {
    state$5.isSwitchingNamespace = isSwitchingNamespace;
  },
  getFirstCaipNetworkSupportsAuthConnector() {
    var _a2, _b2;
    const availableChains = [];
    let firstCaipNetwork = void 0;
    state$5.chains.forEach((chain) => {
      if (ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((ns2) => ns2 === chain.namespace)) {
        if (chain.namespace) {
          availableChains.push(chain.namespace);
        }
      }
    });
    if (availableChains.length > 0) {
      const firstAvailableChain = availableChains[0];
      firstCaipNetwork = firstAvailableChain ? (_b2 = (_a2 = state$5.chains.get(firstAvailableChain)) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0] : void 0;
      return firstCaipNetwork;
    }
    return void 0;
  },
  getAccountData(chainNamespace) {
    var _a2;
    const namespace = chainNamespace || state$5.activeChain;
    if (!namespace) {
      return void 0;
    }
    return (_a2 = ChainController.state.chains.get(namespace)) == null ? void 0 : _a2.accountState;
  },
  getNetworkData(chainNamespace) {
    var _a2;
    const namespace = chainNamespace || state$5.activeChain;
    if (!namespace) {
      return void 0;
    }
    return (_a2 = ChainController.state.chains.get(namespace)) == null ? void 0 : _a2.networkState;
  },
  getCaipNetworkByNamespace(chainNamespace, chainId) {
    var _a2, _b2, _c2;
    if (!chainNamespace) {
      return void 0;
    }
    const chain = ChainController.state.chains.get(chainNamespace);
    const byChainId = (_a2 = chain == null ? void 0 : chain.caipNetworks) == null ? void 0 : _a2.find((network) => network.id === chainId);
    if (byChainId) {
      return byChainId;
    }
    return ((_b2 = chain == null ? void 0 : chain.networkState) == null ? void 0 : _b2.caipNetwork) || ((_c2 = chain == null ? void 0 : chain.caipNetworks) == null ? void 0 : _c2[0]);
  },
  /**
   * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
   * @param namespace - The namespace to get the requested CaipNetwork IDs for
   * @returns The requested CaipNetwork IDs
   */
  getRequestedCaipNetworkIds() {
    const namespace = ConnectorController.state.filterByNamespace;
    const chains = namespace ? [state$5.chains.get(namespace)] : Array.from(state$5.chains.values());
    return chains.flatMap((chain) => (chain == null ? void 0 : chain.caipNetworks) || []).map((caipNetwork) => caipNetwork.caipNetworkId);
  },
  getCaipNetworks(namespace) {
    if (namespace) {
      return ChainController.getRequestedCaipNetworks(namespace);
    }
    return ChainController.getAllRequestedCaipNetworks();
  },
  getCaipNetworkById(id, namespace) {
    return controller$4.getCaipNetworks(namespace).find((n3) => n3.id.toString() === id.toString() || n3.caipNetworkId.toString() === id.toString());
  },
  setLastConnectedSIWECaipNetwork(network) {
    state$5.lastConnectedSIWECaipNetwork = network;
  },
  getLastConnectedSIWECaipNetwork() {
    return state$5.lastConnectedSIWECaipNetwork;
  },
  async fetchTokenBalance(onError) {
    var _a2, _b2;
    const accountState = ChainController.getAccountData();
    if (!accountState) {
      return [];
    }
    const chainId = (_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
    const chain = (_b2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace;
    const caipAddress = ChainController.state.activeCaipAddress;
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    ChainController.setAccountProp("balanceLoading", true, chain);
    if (accountState.lastRetry && !CoreHelperUtil.isAllowedRetry(accountState.lastRetry, 30 * ConstantsUtil$2.ONE_SEC_MS)) {
      ChainController.setAccountProp("balanceLoading", false, chain);
      return [];
    }
    try {
      if (address && chainId && chain) {
        const balance = await BalanceUtil.getMyTokensWithBalance();
        ChainController.setAccountProp("tokenBalance", balance, chain);
        ChainController.setAccountProp("lastRetry", void 0, chain);
        ChainController.setAccountProp("balanceLoading", false, chain);
        return balance;
      }
    } catch (error) {
      ChainController.setAccountProp("lastRetry", Date.now(), chain);
      onError == null ? void 0 : onError(error);
      SnackController.showError("Token Balance Unavailable");
    } finally {
      ChainController.setAccountProp("balanceLoading", false, chain);
    }
    return [];
  },
  isCaipNetworkDisabled(network) {
    var _a2;
    const networkNamespace = network.chainNamespace;
    const isNextNamespaceConnected = Boolean((_a2 = ChainController.getAccountData(networkNamespace)) == null ? void 0 : _a2.caipAddress);
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const shouldSupportAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", networkNamespace) !== false;
    const connectorId = ConnectorController.getConnectorId(networkNamespace);
    const authConnector = ConnectorController.getAuthConnector();
    const isConnectedWithAuth = connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH && authConnector;
    if (!isNextNamespaceConnected || shouldSupportAllNetworks || isConnectedWithAuth) {
      return false;
    }
    return !(approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.caipNetworkId));
  }
};
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
    var _a2, _b2;
    const currentNetwork = ChainController.state.activeCaipNetwork;
    const currentNamespace = ChainController.state.activeChain;
    const routerData = RouterController.state.data;
    const isSameNetwork = network.id === (currentNetwork == null ? void 0 : currentNetwork.id);
    if (isSameNetwork) {
      return;
    }
    const isCurrentNamespaceConnected = Boolean((_a2 = ChainController.getAccountData(currentNamespace)) == null ? void 0 : _a2.address);
    const isNextNamespaceConnected = Boolean((_b2 = ChainController.getAccountData(network.chainNamespace)) == null ? void 0 : _b2.address);
    const isDifferentNamespace = network.chainNamespace !== currentNamespace;
    const connectorId = ConnectorController.getConnectorId(currentNamespace);
    const isConnectedWithAuth = connectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
    const isSupportedForAuthConnector = ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((c2) => c2 === network.chainNamespace);
    if (ignoreSwitchConfirmation || isConnectedWithAuth && isSupportedForAuthConnector) {
      RouterController.push("SwitchNetwork", { ...routerData, network });
    } else if (
      /**
       * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first.
       */
      isCurrentNamespaceConnected && isDifferentNamespace && !isNextNamespaceConnected
    ) {
      RouterController.push("SwitchActiveChain", {
        switchToChain: network.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network
      });
    } else {
      RouterController.push("SwitchNetwork", { ...routerData, network });
    }
  }
};
const state$4 = proxy({
  loading: false,
  loadingNamespaceMap: /* @__PURE__ */ new Map(),
  open: false,
  shake: false,
  namespace: void 0
});
const controller$3 = {
  state: state$4,
  subscribe(callback) {
    return subscribe(state$4, () => callback(state$4));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$4, key, callback);
  },
  async open(options) {
    var _a2, _b2;
    const namespace = options == null ? void 0 : options.namespace;
    const currentNamespace = ChainController.state.activeChain;
    const isSwitchingNamespace = namespace && namespace !== currentNamespace;
    const caipAddress = (_a2 = ChainController.getAccountData(options == null ? void 0 : options.namespace)) == null ? void 0 : _a2.caipAddress;
    const hasNoAdapters = ChainController.state.noAdapters;
    if (ConnectionController.state.wcBasic) {
      ApiController.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      });
    } else {
      await ApiController.prefetch();
    }
    ConnectorController.setFilterByNamespace(options == null ? void 0 : options.namespace);
    ModalController.setLoading(true, namespace);
    if (namespace && isSwitchingNamespace) {
      const namespaceNetwork = ((_b2 = ChainController.getNetworkData(namespace)) == null ? void 0 : _b2.caipNetwork) || ChainController.getRequestedCaipNetworks(namespace)[0];
      if (namespaceNetwork) {
        if (hasNoAdapters) {
          await ChainController.switchActiveNetwork(namespaceNetwork);
          RouterController.push("ConnectingWalletConnectBasic");
        } else {
          NetworkUtil.onSwitchNetwork({ network: namespaceNetwork, ignoreSwitchConfirmation: true });
        }
      }
    } else if (OptionsController.state.manualWCControl || hasNoAdapters && !caipAddress) {
      if (CoreHelperUtil.isMobile()) {
        RouterController.reset("AllWallets");
      } else {
        RouterController.reset("ConnectingWalletConnectBasic");
      }
    } else if (options == null ? void 0 : options.view) {
      RouterController.reset(options.view, options.data);
    } else if (caipAddress) {
      RouterController.reset("Account");
    } else {
      RouterController.reset("Connect");
    }
    state$4.open = true;
    PublicStateController.set({ open: true });
    EventsController.sendEvent({
      type: "track",
      event: "MODAL_OPEN",
      properties: { connected: Boolean(caipAddress) }
    });
  },
  close() {
    const isEmbeddedEnabled = OptionsController.state.enableEmbedded;
    const isConnected = Boolean(ChainController.state.activeCaipAddress);
    if (state$4.open) {
      EventsController.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: { connected: isConnected }
      });
    }
    state$4.open = false;
    RouterController.reset("Connect");
    ModalController.clearLoading();
    if (isEmbeddedEnabled) {
      if (isConnected) {
        RouterController.replace("Account");
      } else {
        RouterController.push("Connect");
      }
    } else {
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
const ModalController = withErrorBoundary(controller$3);
const CLEAN_PROVIDERS_STATE = {
  eip155: void 0,
  solana: void 0,
  polkadot: void 0,
  bip122: void 0,
  cosmos: void 0,
  sui: void 0,
  stacks: void 0
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
      return void 0;
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
      return void 0;
    }
    return state$3.providerIds[chainNamespace];
  },
  reset() {
    state$3.providers = { ...CLEAN_PROVIDERS_STATE };
    state$3.providerIds = { ...CLEAN_PROVIDERS_STATE };
  },
  resetChain(chainNamespace) {
    state$3.providers[chainNamespace] = void 0;
    state$3.providerIds[chainNamespace] = void 0;
  }
};
const USDC_CURRENCY_DEFAULT = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
};
const USD_CURRENCY_DEFAULT = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
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
const state$2 = proxy(defaultState);
const controller$2 = {
  state: state$2,
  subscribe(callback) {
    return subscribe(state$2, () => callback(state$2));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$2, key, callback);
  },
  setSelectedProvider(provider) {
    var _a2, _b2;
    if (provider && provider.name === "meld") {
      const activeChain = ChainController.state.activeChain;
      const currency = activeChain === ConstantsUtil$3.CHAIN.SOLANA ? "SOL" : "USDC";
      const address = activeChain ? ((_b2 = (_a2 = ChainController.state.chains.get(activeChain)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address) ?? "" : "";
      const url = new URL(provider.url);
      url.searchParams.append("publicKey", MELD_PUBLIC_KEY);
      url.searchParams.append("destinationCurrencyCode", currency);
      url.searchParams.append("walletAddress", address);
      url.searchParams.append("externalCustomerId", OptionsController.state.projectId);
      state$2.selectedProvider = { ...provider, url: url.toString() };
    } else {
      state$2.selectedProvider = provider;
    }
  },
  setOnrampProviders(providers) {
    if (Array.isArray(providers) && providers.every((item) => typeof item === "string")) {
      const validOnramp = providers;
      const newProviders = ONRAMP_PROVIDERS.filter((provider) => validOnramp.includes(provider.name));
      state$2.providers = newProviders;
    } else {
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
    await ApiController.fetchCurrencyImages(options.paymentCurrencies.map((currency) => currency.id));
    await ApiController.fetchTokenImages(options.purchaseCurrencies.map((currency) => currency.symbol));
  },
  async getQuote() {
    var _a2, _b2;
    state$2.quotesLoading = true;
    try {
      const quote = await BlockchainApiController.getOnrampQuote({
        purchaseCurrency: state$2.purchaseCurrency,
        paymentCurrency: state$2.paymentCurrency,
        amount: ((_a2 = state$2.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
        network: (_b2 = state$2.purchaseCurrency) == null ? void 0 : _b2.symbol
      });
      state$2.quotesLoading = false;
      state$2.purchaseAmount = Number(quote == null ? void 0 : quote.purchaseAmount.amount);
      return quote;
    } catch (error) {
      state$2.error = error.message;
      state$2.quotesLoading = false;
      return null;
    } finally {
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
    state$2.paymentAmount = void 0;
    state$2.purchaseAmount = void 0;
    state$2.quotesLoading = false;
  }
};
const OnRampController = withErrorBoundary(controller$2);
const state$1 = proxy({
  message: "",
  variant: "info",
  open: false
});
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
      console.error(typeof debugMessage === "function" ? debugMessage() : debugMessage, code ? { code } : void 0);
    }
  },
  warn(title, description, code) {
    state$1.open = true;
    state$1.message = title;
    state$1.variant = "warning";
    if (description) {
      console.warn(description, code);
    }
  },
  close() {
    state$1.open = false;
    state$1.message = "";
    state$1.variant = "info";
  }
};
const AlertController = withErrorBoundary(controller$1);
const SLIP44_MSB = 2147483648;
const EnsUtil = {
  convertEVMChainIdToCoinType(chainId) {
    if (chainId >= SLIP44_MSB) {
      throw new Error("Invalid chainId");
    }
    return (SLIP44_MSB | chainId) >>> 0;
  }
};
const state = proxy({
  suggestions: [],
  loading: false
});
const controller = {
  state,
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  async resolveName(name) {
    var _a2, _b2;
    try {
      return await BlockchainApiController.lookupEnsName(name);
    } catch (e2) {
      const error = e2;
      throw new Error(((_b2 = (_a2 = error == null ? void 0 : error.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || "Error resolving name");
    }
  },
  async isNameRegistered(name) {
    try {
      await BlockchainApiController.lookupEnsName(name);
      return true;
    } catch {
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
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, "Error fetching name suggestions");
      throw new Error(errorMessage);
    } finally {
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
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, "Error fetching names for address");
      throw new Error(errorMessage);
    }
  },
  async registerName(name) {
    var _a2;
    const network = ChainController.state.activeCaipNetwork;
    const address = (_a2 = ChainController.getAccountData(network == null ? void 0 : network.chainNamespace)) == null ? void 0 : _a2.address;
    const emailConnector = ConnectorController.getAuthConnector();
    if (!network) {
      throw new Error("Network not found");
    }
    if (!address || !emailConnector) {
      throw new Error("Address or auth connector not found");
    }
    state.loading = true;
    try {
      const message = JSON.stringify({
        name,
        attributes: {},
        // Unix timestamp
        timestamp: Math.floor(Date.now() / 1e3)
      });
      RouterController.pushTransactionStack({
        onCancel() {
          RouterController.replace("RegisterAccountName");
        }
      });
      const signature = await ConnectionController.signMessage(message);
      state.loading = false;
      const networkId = network.id;
      if (!networkId) {
        throw new Error("Network not found");
      }
      const coinType = EnsUtil.convertEVMChainIdToCoinType(Number(networkId));
      await BlockchainApiController.registerEnsName({
        coinType,
        address,
        signature,
        message
      });
      ChainController.setAccountProp("profileName", name, network.chainNamespace);
      StorageUtil.updateEnsCache({
        address,
        ens: [
          {
            name,
            registered_at: (/* @__PURE__ */ new Date()).toISOString(),
            updated_at: void 0,
            addresses: {},
            attributes: []
          }
        ],
        timestamp: Date.now()
      });
      RouterController.replace("RegisterAccountNameSuccess");
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, `Error registering name ${name}`);
      RouterController.replace("RegisterAccountName");
      throw new Error(errorMessage);
    } finally {
      state.loading = false;
    }
  },
  validateName(name) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(name);
  },
  parseEnsApiError(error, defaultError) {
    var _a2, _b2;
    const ensError = error;
    return ((_b2 = (_a2 = ensError == null ? void 0 : ensError.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || defaultError;
  }
};
const EnsController = withErrorBoundary(controller);
const baseUSDC = {
  asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
};
const baseSepoliaUSDC = {
  asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
};
var browser$2;
var hasRequiredBrowser$2;
function requireBrowser$2() {
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
  function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
      const hasToFilter = serialize.filter(function(k2) {
        return k2 !== "!stdSerializers.err";
      });
      return hasToFilter;
    } else if (serialize === true) {
      return Object.keys(serializers);
    }
    return false;
  }
  function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit2 = opts.browser.transmit;
    if (transmit2 && typeof transmit2.send !== "function") {
      throw Error("pino: transmit option must have a send function");
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
    const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
    if (typeof proto === "function") {
      proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    }
    if (opts.enabled === false) opts.level = "silent";
    const level = opts.level || "info";
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    Object.defineProperty(logger, "levelVal", {
      get: getLevelVal
    });
    Object.defineProperty(logger, "level", {
      get: getLevel,
      set: setLevel
    });
    const setOpts = {
      transmit: transmit2,
      serialize,
      asObject: opts.browser.asObject,
      levels,
      timestamp: getTimeFunction(opts)
    };
    logger.levels = pino.levels;
    logger.level = level;
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = child;
    if (transmit2) logger._logEvent = createLogEventShape();
    function getLevelVal() {
      return this.level === "silent" ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
      return this._level;
    }
    function setLevel(level2) {
      if (level2 !== "silent" && !this.levels.values[level2]) {
        throw Error("unknown level " + level2);
      }
      this._level = level2;
      set(setOpts, logger, "error", "log");
      set(setOpts, logger, "fatal", "error");
      set(setOpts, logger, "warn", "error");
      set(setOpts, logger, "info", "log");
      set(setOpts, logger, "debug", "log");
      set(setOpts, logger, "trace", "log");
    }
    function child(bindings, childOptions) {
      if (!bindings) {
        throw new Error("missing bindings for child Pino");
      }
      childOptions = childOptions || {};
      if (serialize && bindings.serializers) {
        childOptions.serializers = bindings.serializers;
      }
      const childOptionsSerializers = childOptions.serializers;
      if (serialize && childOptionsSerializers) {
        var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
        var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
        delete bindings.serializers;
        applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
      }
      function Child(parent) {
        this._childLevel = (parent._childLevel | 0) + 1;
        this.error = bind(parent, bindings, "error");
        this.fatal = bind(parent, bindings, "fatal");
        this.warn = bind(parent, bindings, "warn");
        this.info = bind(parent, bindings, "info");
        this.debug = bind(parent, bindings, "debug");
        this.trace = bind(parent, bindings, "trace");
        if (childSerializers) {
          this.serializers = childSerializers;
          this._serialize = childSerialize;
        }
        if (transmit2) {
          this._logEvent = createLogEventShape(
            [].concat(parent._logEvent.bindings, bindings)
          );
        }
      }
      Child.prototype = this;
      return new Child(this);
    }
    return logger;
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
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  };
  pino.stdSerializers = stdSerializers;
  pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
  function set(opts, logger, level, fallback2) {
    const proto = Object.getPrototypeOf(logger);
    logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback2] || noop;
    wrap(opts, logger, level);
  }
  function wrap(opts, logger, level) {
    if (!opts.transmit && logger[level] === noop) return;
    logger[level] = /* @__PURE__ */ (function(write) {
      return function LOG() {
        const ts2 = opts.timestamp();
        const args = new Array(arguments.length);
        const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
        for (var i2 = 0; i2 < args.length; i2++) args[i2] = arguments[i2];
        if (opts.serialize && !opts.asObject) {
          applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
        }
        if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
        else write.apply(proto, args);
        if (opts.transmit) {
          const transmitLevel = opts.transmit.level || logger.level;
          const transmitValue = pino.levels.values[transmitLevel];
          const methodValue = pino.levels.values[level];
          if (methodValue < transmitValue) return;
          transmit(this, {
            ts: ts2,
            methodLevel: level,
            methodValue,
            transmitValue: pino.levels.values[opts.transmit.level || logger.level],
            send: opts.transmit.send,
            val: logger.levelVal
          }, args);
        }
      };
    })(logger[level]);
  }
  function asObject(logger, level, args, ts2) {
    if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o2 = {};
    if (ts2) {
      o2.time = ts2;
    }
    o2.level = pino.levels.values[level];
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (msg !== null && typeof msg === "object") {
      while (lvl-- && typeof argsCloned[0] === "object") {
        Object.assign(o2, argsCloned.shift());
      }
      msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
    } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
    if (msg !== void 0) o2.msg = msg;
    return o2;
  }
  function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for (const i2 in args) {
      if (stdErrSerialize && args[i2] instanceof Error) {
        args[i2] = pino.stdSerializers.err(args[i2]);
      } else if (typeof args[i2] === "object" && !Array.isArray(args[i2])) {
        for (const k2 in args[i2]) {
          if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
            args[i2][k2] = serializers[k2](args[i2][k2]);
          }
        }
      }
    }
  }
  function bind(parent, bindings, level) {
    return function() {
      const args = new Array(1 + arguments.length);
      args[0] = bindings;
      for (var i2 = 1; i2 < args.length; i2++) {
        args[i2] = arguments[i2 - 1];
      }
      return parent[level].apply(this, args);
    };
  }
  function transmit(logger, opts, args) {
    const send = opts.send;
    const ts2 = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    applySerializers(
      args,
      logger._serialize || Object.keys(logger.serializers),
      logger.serializers,
      logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
    );
    logger._logEvent.ts = ts2;
    logger._logEvent.messages = args.filter(function(arg) {
      return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
  }
  function createLogEventShape(bindings) {
    return {
      ts: 0,
      messages: [],
      bindings: bindings || [],
      level: { label: "", value: 0 }
    };
  }
  function asErrValue(err) {
    const obj = {
      type: err.constructor.name,
      msg: err.message,
      stack: err.stack
    };
    for (const key in err) {
      if (obj[key] === void 0) {
        obj[key] = err[key];
      }
    }
    return obj;
  }
  function getTimeFunction(opts) {
    if (typeof opts.timestamp === "function") {
      return opts.timestamp;
    }
    if (opts.timestamp === false) {
      return nullTime;
    }
    return epochTime;
  }
  function mock() {
    return {};
  }
  function passthrough(a2) {
    return a2;
  }
  function noop() {
  }
  function nullTime() {
    return false;
  }
  function epochTime() {
    return Date.now();
  }
  function unixTime() {
    return Math.round(Date.now() / 1e3);
  }
  function isoTime() {
    return new Date(Date.now()).toISOString();
  }
  function pfGlobalThisOrFallback() {
    function defd(o2) {
      return typeof o2 !== "undefined" && o2;
    }
    try {
      if (typeof globalThis !== "undefined") return globalThis;
      Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          delete Object.prototype.globalThis;
          return this.globalThis = this;
        },
        configurable: true
      });
      return globalThis;
    } catch (e2) {
      return defd(self) || defd(window) || defd(this) || {};
    }
  }
  return browser$2;
}
requireBrowser$2();
let addEmbeddedWalletSessionPromise = null;
const SIWXUtil = {
  getSIWX() {
    return OptionsController.state.siwx;
  },
  async initializeIfEnabled(caipAddress = ChainController.getActiveCaipAddress()) {
    var _a2, _b2, _c2;
    const siwx = OptionsController.state.siwx;
    if (!(siwx && caipAddress)) {
      return;
    }
    const [namespace, chainId, address] = caipAddress.split(":");
    if (!ChainController.checkIfSupportedNetwork(namespace, `${namespace}:${chainId}`)) {
      return;
    }
    try {
      if ((_a2 = OptionsController.state.remoteFeatures) == null ? void 0 : _a2.emailCapture) {
        const user = (_b2 = ChainController.getAccountData(namespace)) == null ? void 0 : _b2.user;
        await ModalController.open({
          view: "DataCapture",
          data: {
            email: (user == null ? void 0 : user.email) ?? void 0
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
        view: "SIWXSignMessage"
      });
    } catch (error) {
      console.error("SIWXUtil:initializeIfEnabled", error);
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties(error)
      });
      await ((_c2 = ConnectionController._getClient()) == null ? void 0 : _c2.disconnect().catch(console.error));
      RouterController.reset("Connect");
      SnackController.showError("A problem occurred while trying initialize authentication");
    }
  },
  async requestSignMessage() {
    const siwx = OptionsController.state.siwx;
    const address = CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress());
    const network = getActiveCaipNetwork();
    const client = ConnectionController._getClient();
    if (!siwx) {
      throw new Error("SIWX is not enabled");
    }
    if (!address) {
      throw new Error("No ActiveCaipAddress found");
    }
    if (!network) {
      throw new Error("No ActiveCaipNetwork or client found");
    }
    if (!client) {
      throw new Error("No ConnectionController client found");
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
        type: "track",
        event: "SIWX_AUTH_SUCCESS",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      if (!ModalController.state.open || RouterController.state.view === "ApproveTransaction") {
        await ModalController.open({
          view: "SIWXSignMessage"
        });
      }
      SnackController.showError("Error signing message");
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties(error)
      });
      console.error("SWIXUtil:requestSignMessage", error);
    }
  },
  async cancelSignMessage() {
    var _a2;
    try {
      const siwx = this.getSIWX();
      const isRequired = (_a2 = siwx == null ? void 0 : siwx.getRequired) == null ? void 0 : _a2.call(siwx);
      if (isRequired) {
        const lastNetwork = ChainController.getLastConnectedSIWECaipNetwork();
        if (lastNetwork) {
          const sessions = await (siwx == null ? void 0 : siwx.getSessions(lastNetwork == null ? void 0 : lastNetwork.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || ""));
          if (sessions && sessions.length > 0) {
            await ChainController.switchActiveNetwork(lastNetwork);
          } else {
            await ConnectionController.disconnect();
          }
        } else {
          await ConnectionController.disconnect();
        }
      } else {
        ModalController.close();
      }
      ModalController.close();
      EventsController.sendEvent({
        event: "CLICK_CANCEL_SIWX",
        type: "track",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      console.error("SIWXUtil:cancelSignMessage", error);
    }
  },
  async getAllSessions() {
    const siwx = this.getSIWX();
    const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const sessions = [];
    await Promise.all(allRequestedCaipNetworks.map(async (caipNetwork) => {
      const session = await (siwx == null ? void 0 : siwx.getSessions(caipNetwork.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || ""));
      if (session) {
        sessions.push(...session);
      }
    }));
    return sessions;
  },
  async getSessions(args) {
    const siwx = OptionsController.state.siwx;
    let address = args == null ? void 0 : args.address;
    if (!address) {
      const activeCaipAddress = ChainController.getActiveCaipAddress();
      address = CoreHelperUtil.getPlainAddress(activeCaipAddress);
    }
    let network = args == null ? void 0 : args.caipNetworkId;
    if (!network) {
      const activeCaipNetwork = ChainController.getActiveCaipNetwork();
      network = activeCaipNetwork == null ? void 0 : activeCaipNetwork.caipNetworkId;
    }
    if (!(siwx && address && network)) {
      return [];
    }
    return siwx.getSessions(network, address);
  },
  async isSIWXCloseDisabled() {
    var _a2;
    const siwx = this.getSIWX();
    if (siwx) {
      const isApproveSignScreen = RouterController.state.view === "ApproveTransaction";
      const isSiwxSignMessage = RouterController.state.view === "SIWXSignMessage";
      if (isApproveSignScreen || isSiwxSignMessage) {
        return ((_a2 = siwx.getRequired) == null ? void 0 : _a2.call(siwx)) && (await this.getSessions()).length === 0;
      }
    }
    return false;
  },
  async authConnectorAuthenticate({ authConnector, chainId, socialUri, preferredAccountType, chainNamespace }) {
    var _a2;
    const siwx = SIWXUtil.getSIWX();
    const network = getActiveCaipNetwork();
    if (!siwx || !chainNamespace.includes(ConstantsUtil$3.CHAIN.EVM) || // Request to input email and sign message when email capture is enabled
    ((_a2 = OptionsController.state.remoteFeatures) == null ? void 0 : _a2.emailCapture)) {
      const result2 = await authConnector.connect({
        chainId,
        socialUri,
        preferredAccountType
      });
      return {
        address: result2.address,
        chainId: result2.chainId,
        accounts: result2.accounts
      };
    }
    const caipNetwork = `${chainNamespace}:${chainId}`;
    const siwxMessage = await siwx.createMessage({
      chainId: caipNetwork,
      accountAddress: "<<AccountAddress>>"
    });
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
    siwxMessageData.serializedMessage = result.message || "";
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
    addEmbeddedWalletSessionPromise = siwx.addSession({
      data: siwxMessageData,
      message,
      signature
    }).finally(() => {
      addEmbeddedWalletSessionPromise = null;
    });
    return addEmbeddedWalletSessionPromise;
  },
  async universalProviderAuthenticate({ universalProvider, chains, methods }) {
    var _a2, _b2, _c2;
    const siwx = SIWXUtil.getSIWX();
    const network = getActiveCaipNetwork();
    const namespaces = new Set(chains.map((chain) => chain.split(":")[0]));
    if (!siwx || namespaces.size !== 1 || !namespaces.has("eip155")) {
      return false;
    }
    const siwxMessage = await siwx.createMessage({
      chainId: ((_a2 = getActiveCaipNetwork()) == null ? void 0 : _a2.caipNetworkId) || "",
      accountAddress: ""
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
      chains: [siwxMessage.chainId, ...chains.filter((chain) => chain !== siwxMessage.chainId)]
    });
    SnackController.showLoading("Authenticating...", { autoClose: false });
    const walletInfo = {
      ...result.session.peer.metadata,
      name: result.session.peer.metadata.name,
      icon: (_b2 = result.session.peer.metadata.icons) == null ? void 0 : _b2[0],
      type: "WALLET_CONNECT"
    };
    ChainController.setAccountProp("connectedWalletInfo", walletInfo, Array.from(namespaces)[0]);
    if ((_c2 = result == null ? void 0 : result.auths) == null ? void 0 : _c2.length) {
      const sessions = result.auths.map((cacao) => {
        const message = universalProvider.client.formatAuthMessage({
          request: cacao.p,
          iss: cacao.p.iss
        });
        return {
          data: {
            ...cacao.p,
            accountAddress: cacao.p.iss.split(":").slice(-1).join(""),
            chainId: cacao.p.iss.split(":").slice(2, 4).join(":"),
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
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: SIWXUtil.getSIWXEventProperties()
        });
      } catch (error) {
        console.error("SIWX:universalProviderAuth - failed to set sessions", error);
        EventsController.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: SIWXUtil.getSIWXEventProperties(error)
        });
        await universalProvider.disconnect().catch(console.error);
        throw error;
      } finally {
        SnackController.hide();
      }
    }
    return true;
  },
  getSIWXEventProperties(error) {
    var _a2;
    const namespace = ChainController.state.activeChain;
    if (!namespace) {
      throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
    }
    return {
      network: ((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || "",
      isSmartAccount: getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
      message: error ? CoreHelperUtil.parseError(error) : void 0
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
function requireBrowser$1() {
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
  function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
      const hasToFilter = serialize.filter(function(k2) {
        return k2 !== "!stdSerializers.err";
      });
      return hasToFilter;
    } else if (serialize === true) {
      return Object.keys(serializers);
    }
    return false;
  }
  function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit2 = opts.browser.transmit;
    if (transmit2 && typeof transmit2.send !== "function") {
      throw Error("pino: transmit option must have a send function");
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
    const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
    if (typeof proto === "function") {
      proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    }
    if (opts.enabled === false) opts.level = "silent";
    const level = opts.level || "info";
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    Object.defineProperty(logger, "levelVal", {
      get: getLevelVal
    });
    Object.defineProperty(logger, "level", {
      get: getLevel,
      set: setLevel
    });
    const setOpts = {
      transmit: transmit2,
      serialize,
      asObject: opts.browser.asObject,
      levels,
      timestamp: getTimeFunction(opts)
    };
    logger.levels = pino.levels;
    logger.level = level;
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = child;
    if (transmit2) logger._logEvent = createLogEventShape();
    function getLevelVal() {
      return this.level === "silent" ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
      return this._level;
    }
    function setLevel(level2) {
      if (level2 !== "silent" && !this.levels.values[level2]) {
        throw Error("unknown level " + level2);
      }
      this._level = level2;
      set(setOpts, logger, "error", "log");
      set(setOpts, logger, "fatal", "error");
      set(setOpts, logger, "warn", "error");
      set(setOpts, logger, "info", "log");
      set(setOpts, logger, "debug", "log");
      set(setOpts, logger, "trace", "log");
    }
    function child(bindings, childOptions) {
      if (!bindings) {
        throw new Error("missing bindings for child Pino");
      }
      childOptions = childOptions || {};
      if (serialize && bindings.serializers) {
        childOptions.serializers = bindings.serializers;
      }
      const childOptionsSerializers = childOptions.serializers;
      if (serialize && childOptionsSerializers) {
        var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
        var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
        delete bindings.serializers;
        applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
      }
      function Child(parent) {
        this._childLevel = (parent._childLevel | 0) + 1;
        this.error = bind(parent, bindings, "error");
        this.fatal = bind(parent, bindings, "fatal");
        this.warn = bind(parent, bindings, "warn");
        this.info = bind(parent, bindings, "info");
        this.debug = bind(parent, bindings, "debug");
        this.trace = bind(parent, bindings, "trace");
        if (childSerializers) {
          this.serializers = childSerializers;
          this._serialize = childSerialize;
        }
        if (transmit2) {
          this._logEvent = createLogEventShape(
            [].concat(parent._logEvent.bindings, bindings)
          );
        }
      }
      Child.prototype = this;
      return new Child(this);
    }
    return logger;
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
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  };
  pino.stdSerializers = stdSerializers;
  pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
  function set(opts, logger, level, fallback2) {
    const proto = Object.getPrototypeOf(logger);
    logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback2] || noop;
    wrap(opts, logger, level);
  }
  function wrap(opts, logger, level) {
    if (!opts.transmit && logger[level] === noop) return;
    logger[level] = /* @__PURE__ */ (function(write) {
      return function LOG() {
        const ts2 = opts.timestamp();
        const args = new Array(arguments.length);
        const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
        for (var i2 = 0; i2 < args.length; i2++) args[i2] = arguments[i2];
        if (opts.serialize && !opts.asObject) {
          applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
        }
        if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
        else write.apply(proto, args);
        if (opts.transmit) {
          const transmitLevel = opts.transmit.level || logger.level;
          const transmitValue = pino.levels.values[transmitLevel];
          const methodValue = pino.levels.values[level];
          if (methodValue < transmitValue) return;
          transmit(this, {
            ts: ts2,
            methodLevel: level,
            methodValue,
            transmitValue: pino.levels.values[opts.transmit.level || logger.level],
            send: opts.transmit.send,
            val: logger.levelVal
          }, args);
        }
      };
    })(logger[level]);
  }
  function asObject(logger, level, args, ts2) {
    if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o2 = {};
    if (ts2) {
      o2.time = ts2;
    }
    o2.level = pino.levels.values[level];
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (msg !== null && typeof msg === "object") {
      while (lvl-- && typeof argsCloned[0] === "object") {
        Object.assign(o2, argsCloned.shift());
      }
      msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
    } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
    if (msg !== void 0) o2.msg = msg;
    return o2;
  }
  function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for (const i2 in args) {
      if (stdErrSerialize && args[i2] instanceof Error) {
        args[i2] = pino.stdSerializers.err(args[i2]);
      } else if (typeof args[i2] === "object" && !Array.isArray(args[i2])) {
        for (const k2 in args[i2]) {
          if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
            args[i2][k2] = serializers[k2](args[i2][k2]);
          }
        }
      }
    }
  }
  function bind(parent, bindings, level) {
    return function() {
      const args = new Array(1 + arguments.length);
      args[0] = bindings;
      for (var i2 = 1; i2 < args.length; i2++) {
        args[i2] = arguments[i2 - 1];
      }
      return parent[level].apply(this, args);
    };
  }
  function transmit(logger, opts, args) {
    const send = opts.send;
    const ts2 = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    applySerializers(
      args,
      logger._serialize || Object.keys(logger.serializers),
      logger.serializers,
      logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
    );
    logger._logEvent.ts = ts2;
    logger._logEvent.messages = args.filter(function(arg) {
      return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
  }
  function createLogEventShape(bindings) {
    return {
      ts: 0,
      messages: [],
      bindings: bindings || [],
      level: { label: "", value: 0 }
    };
  }
  function asErrValue(err) {
    const obj = {
      type: err.constructor.name,
      msg: err.message,
      stack: err.stack
    };
    for (const key in err) {
      if (obj[key] === void 0) {
        obj[key] = err[key];
      }
    }
    return obj;
  }
  function getTimeFunction(opts) {
    if (typeof opts.timestamp === "function") {
      return opts.timestamp;
    }
    if (opts.timestamp === false) {
      return nullTime;
    }
    return epochTime;
  }
  function mock() {
    return {};
  }
  function passthrough(a2) {
    return a2;
  }
  function noop() {
  }
  function nullTime() {
    return false;
  }
  function epochTime() {
    return Date.now();
  }
  function unixTime() {
    return Math.round(Date.now() / 1e3);
  }
  function isoTime() {
    return new Date(Date.now()).toISOString();
  }
  function pfGlobalThisOrFallback() {
    function defd(o2) {
      return typeof o2 !== "undefined" && o2;
    }
    try {
      if (typeof globalThis !== "undefined") return globalThis;
      Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          delete Object.prototype.globalThis;
          return this.globalThis = this;
        },
        configurable: true
      });
      return globalThis;
    } catch (e2) {
      return defd(self) || defd(window) || defd(this) || {};
    }
  }
  return browser$1;
}
var browserExports$1 = requireBrowser$1();
const Ne$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports$1);
const c$6 = { level: "info" }, n$3 = "custom_context", l$3 = 1e3 * 1024;
let O$3 = class O {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
let d$6 = class d {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t2 = new O$3(e2);
    if (t2.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t2.size}`);
    for (; this.size + t2.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t2), this.tail = t2) : (this.head = t2, this.tail = t2), this.lengthInNodes++, this.sizeInBytes += t2.size;
  }
  shift() {
    if (!this.head) return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t2 = this.head;
    for (; t2 !== null; ) e2.push(t2.value), t2 = t2.next;
    return e2;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e2 = this.head;
    return { next: () => {
      if (!e2) return { done: true, value: null };
      const t2 = e2.value;
      return e2 = e2.next, { done: false, value: t2 };
    } };
  }
};
let L$3 = class L {
  constructor(e2, t2 = l$3) {
    this.level = e2 ?? "error", this.levelValue = browserExports$1.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t2, this.logs = new d$6(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t2) {
    t2 === browserExports$1.levels.values.error ? console.error(e2) : t2 === browserExports$1.levels.values.warn ? console.warn(e2) : t2 === browserExports$1.levels.values.debug ? console.debug(e2) : t2 === browserExports$1.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t2 = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t2 >= this.levelValue && this.forwardToConsole(e2, t2);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d$6(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t2 = this.getLogArray();
    return t2.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t2, { type: "application/json" });
  }
};
let m$4 = class m {
  constructor(e2, t2 = l$3) {
    this.baseChunkLogger = new L$3(e2, t2);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t2 = URL.createObjectURL(this.logsToBlob(e2)), o2 = document.createElement("a");
    o2.href = t2, o2.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o2), o2.click(), document.body.removeChild(o2), URL.revokeObjectURL(t2);
  }
};
let B$4 = class B {
  constructor(e2, t2 = l$3) {
    this.baseChunkLogger = new L$3(e2, t2);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x$4 = Object.defineProperty, S$6 = Object.defineProperties, _$3 = Object.getOwnPropertyDescriptors, p$4 = Object.getOwnPropertySymbols, T$3 = Object.prototype.hasOwnProperty, z$5 = Object.prototype.propertyIsEnumerable, f$6 = (r2, e2, t2) => e2 in r2 ? x$4(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, i$6 = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) T$3.call(e2, t2) && f$6(r2, t2, e2[t2]);
  if (p$4) for (var t2 of p$4(e2)) z$5.call(e2, t2) && f$6(r2, t2, e2[t2]);
  return r2;
}, g$4 = (r2, e2) => S$6(r2, _$3(e2));
function k$3(r2) {
  return g$4(i$6({}, r2), { level: (r2 == null ? void 0 : r2.level) || c$6.level });
}
function v$4(r2, e2 = n$3) {
  return r2[e2] || "";
}
function b$4(r2, e2, t2 = n$3) {
  return r2[t2] = e2, r2;
}
function y$4(r2, e2 = n$3) {
  let t2 = "";
  return typeof r2.bindings > "u" ? t2 = v$4(r2, e2) : t2 = r2.bindings().context || "", t2;
}
function w$2(r2, e2, t2 = n$3) {
  const o2 = y$4(r2, t2);
  return o2.trim() ? `${o2}/${e2}` : e2;
}
function E$2(r2, e2, t2 = n$3) {
  const o2 = w$2(r2, e2, t2), a2 = r2.child({ context: o2 });
  return b$4(a2, o2, t2);
}
function C$4(r2) {
  var e2, t2;
  const o2 = new m$4((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: Ne$1(g$4(i$6({}, r2.opts), { level: "trace", browser: g$4(i$6({}, (t2 = r2.opts) == null ? void 0 : t2.browser), { write: (a2) => o2.write(a2) }) })), chunkLoggerController: o2 };
}
function I$3(r2) {
  var e2;
  const t2 = new B$4((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: Ne$1(g$4(i$6({}, r2.opts), { level: "trace" }), t2), chunkLoggerController: t2 };
}
function A$4(r2) {
  return typeof r2.loggerOverride < "u" && typeof r2.loggerOverride != "string" ? { logger: r2.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C$4(r2) : I$3(r2);
}
var a$2 = Object.defineProperty, u$2 = (e2, s2, r2) => s2 in e2 ? a$2(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, c$5 = (e2, s2, r2) => u$2(e2, typeof s2 != "symbol" ? s2 + "" : s2, r2);
let h$3 = class h extends IEvents {
  constructor(s2) {
    super(), this.opts = s2, c$5(this, "protocol", "wc"), c$5(this, "version", 2);
  }
};
var p$3 = Object.defineProperty, b$3 = (e2, s2, r2) => s2 in e2 ? p$3(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, v$3 = (e2, s2, r2) => b$3(e2, s2 + "", r2);
let I$2 = class I extends IEvents {
  constructor(s2, r2) {
    super(), this.core = s2, this.logger = r2, v$3(this, "records", /* @__PURE__ */ new Map());
  }
};
let y$3 = class y {
  constructor(s2, r2) {
    this.logger = s2, this.core = r2;
  }
};
let m$3 = class m2 extends IEvents {
  constructor(s2, r2) {
    super(), this.relayer = s2, this.logger = r2;
  }
};
let d$5 = class d2 extends IEvents {
  constructor(s2) {
    super();
  }
};
let f$5 = class f {
  constructor(s2, r2, t2, q2) {
    this.core = s2, this.logger = r2, this.name = t2;
  }
};
let P$3 = class P extends IEvents {
  constructor(s2, r2) {
    super(), this.relayer = s2, this.logger = r2;
  }
};
let S$5 = class S extends IEvents {
  constructor(s2, r2) {
    super(), this.core = s2, this.logger = r2;
  }
};
let M$4 = class M {
  constructor(s2, r2, t2) {
    this.core = s2, this.logger = r2, this.store = t2;
  }
};
let O$2 = class O2 {
  constructor(s2, r2) {
    this.projectId = s2, this.logger = r2;
  }
};
let R$3 = class R {
  constructor(s2, r2, t2) {
    this.core = s2, this.logger = r2, this.telemetryEnabled = t2;
  }
};
var T$2 = Object.defineProperty, k$2 = (e2, s2, r2) => s2 in e2 ? T$2(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, i$5 = (e2, s2, r2) => k$2(e2, typeof s2 != "symbol" ? s2 + "" : s2, r2);
let J$3 = class J {
  constructor(s2) {
    this.opts = s2, i$5(this, "protocol", "wc"), i$5(this, "version", 2);
  }
};
let V$2 = class V {
  constructor(s2) {
    this.client = s2;
  }
};
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
const version = "2.36.0";
let errorConfig = {
  getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
  version: `viem@${version}`
};
class BaseError extends Error {
  constructor(shortMessage, args = {}) {
    var _a2;
    const details = (() => {
      var _a3;
      if (args.cause instanceof BaseError)
        return args.cause.details;
      if ((_a3 = args.cause) == null ? void 0 : _a3.message)
        return args.cause.message;
      return args.details;
    })();
    const docsPath = (() => {
      if (args.cause instanceof BaseError)
        return args.cause.docsPath || args.docsPath;
      return args.docsPath;
    })();
    const docsUrl = (_a2 = errorConfig.getDocsUrl) == null ? void 0 : _a2.call(errorConfig, { ...args, docsPath });
    const message = [
      shortMessage || "An error occurred.",
      "",
      ...args.metaMessages ? [...args.metaMessages, ""] : [],
      ...docsUrl ? [`Docs: ${docsUrl}`] : [],
      ...details ? [`Details: ${details}`] : [],
      ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
    ].join("\n");
    super(message, args.cause ? { cause: args.cause } : void 0);
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
      value: "BaseError"
    });
    this.details = details;
    this.docsPath = docsPath;
    this.metaMessages = args.metaMessages;
    this.name = args.name ?? this.name;
    this.shortMessage = shortMessage;
    this.version = version;
  }
  walk(fn2) {
    return walk(this, fn2);
  }
}
function walk(err, fn2) {
  if (fn2 == null ? void 0 : fn2(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause !== void 0)
    return walk(err.cause, fn2);
  return fn2 ? null : err;
}
class SizeExceedsPaddingSizeError extends BaseError {
  constructor({ size: size2, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
function pad(hexOrBytes, { dir, size: size2 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size2 });
  return padBytes(hexOrBytes, { dir, size: size2 });
}
function padHex(hex_, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return bytes;
  if (bytes.length > size2)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size2,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size2);
  for (let i2 = 0; i2 < size2; i2++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i2 : size2 - i2 - 1] = bytes[padEnd ? i2 : bytes.length - i2 - 1];
  }
  return paddedBytes;
}
class IntegerOutOfRangeError extends BaseError {
  constructor({ max, min, signed, size: size2, value }) {
    super(`Number "${value}" is not in safe ${size2 ? `${size2 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class SizeOverflowError extends BaseError {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
  }
}
function assertSize(hexOrBytes, { size: size$1 }) {
  if (size(hexOrBytes) > size$1)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size$1
    });
}
function hexToBigInt(hex, opts = {}) {
  const { signed } = opts;
  if (opts.size)
    assertSize(hex, { size: opts.size });
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size2 = (hex.length - 2) / 2;
  const max = (1n << BigInt(size2) * 8n - 1n) - 1n;
  if (value <= max)
    return value;
  return value - BigInt(`0x${"f".padStart(size2 * 2, "f")}`) - 1n;
}
function hexToNumber(hex, opts = {}) {
  return Number(hexToBigInt(hex, opts));
}
const hexes$1 = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i2) => i2.toString(16).padStart(2, "0"));
function toHex(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex$1(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex$1(value, opts = {}) {
  let string = "";
  for (let i2 = 0; i2 < value.length; i2++) {
    string += hexes$1[value[i2]];
  }
  const hex = `0x${string}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size2 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size2) {
    if (signed)
      maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size2) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size2)
    return pad(hex, { size: size2 });
  return hex;
}
const encoder$1 = /* @__PURE__ */ new TextEncoder();
function stringToHex(value_, opts = {}) {
  const value = encoder$1.encode(value_);
  return bytesToHex$1(value, opts);
}
const encoder = /* @__PURE__ */ new TextEncoder();
function toBytes$1(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes$1(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { size: opts.size });
  }
  return bytes;
}
const charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToBytes$1(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j2 = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j2++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j2++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j2 - 2]}${hexString[j2 - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes$1(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes = encoder.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { dir: "right", size: opts.size });
  }
  return bytes;
}
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n3, le2 = false) {
  if (le2)
    return { h: Number(n3 & U32_MASK64), l: Number(n3 >> _32n & U32_MASK64) };
  return { h: Number(n3 >> _32n & U32_MASK64) | 0, l: Number(n3 & U32_MASK64) | 0 };
}
function split(lst, le2 = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i2 = 0; i2 < len; i2++) {
    const { h: h3, l: l2 } = fromBig(lst[i2], le2);
    [Ah[i2], Al[i2]] = [h3, l2];
  }
  return [Ah, Al];
}
const rotlSH = (h3, l2, s2) => h3 << s2 | l2 >>> 32 - s2;
const rotlSL = (h3, l2, s2) => l2 << s2 | h3 >>> 32 - s2;
const rotlBH = (h3, l2, s2) => l2 << s2 - 32 | h3 >>> 64 - s2;
const rotlBL = (h3, l2, s2) => h3 << s2 - 32 | l2 >>> 64 - s2;
const crypto$1 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function isBytes(a2) {
  return a2 instanceof Uint8Array || ArrayBuffer.isView(a2) && a2.constructor.name === "Uint8Array";
}
function anumber(n3) {
  if (!Number.isSafeInteger(n3) || n3 < 0)
    throw new Error("positive integer expected, got " + n3);
}
function abytes(b2, ...lengths) {
  if (!isBytes(b2))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b2.length);
}
function ahash(h3) {
  if (typeof h3 !== "function" || typeof h3.create !== "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  anumber(h3.outputLen);
  anumber(h3.blockLen);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
  for (let i2 = 0; i2 < arrays.length; i2++) {
    arrays[i2].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
const isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i2 = 0; i2 < arr.length; i2++) {
    arr[i2] = byteSwap(arr[i2]);
  }
  return arr;
}
const swap32IfBE = isLE ? (u2) => u2 : byteSwap32;
const hasHexBuiltin = /* @__PURE__ */ (() => (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
))();
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
function bytesToHex(bytes) {
  abytes(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i2 = 0; i2 < bytes.length; i2++) {
    hex += hexes[bytes[i2]];
  }
  return hex;
}
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
  return;
}
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai2 = 0, hi2 = 0; ai2 < al; ai2++, hi2 += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi2));
    const n22 = asciiToBase16(hex.charCodeAt(hi2 + 1));
    if (n1 === void 0 || n22 === void 0) {
      const char = hex[hi2] + hex[hi2 + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi2);
    }
    array[ai2] = n1 * 16 + n22;
  }
  return array;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i2 = 0; i2 < arrays.length; i2++) {
    const a2 = arrays[i2];
    abytes(a2);
    sum += a2.length;
  }
  const res = new Uint8Array(sum);
  for (let i2 = 0, pad2 = 0; i2 < arrays.length; i2++) {
    const a2 = arrays[i2];
    res.set(a2, pad2);
    pad2 += a2.length;
  }
  return res;
}
class Hash {
}
function createHasher(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto$1 && typeof crypto$1.getRandomValues === "function") {
    return crypto$1.getRandomValues(new Uint8Array(bytesLength));
  }
  if (crypto$1 && typeof crypto$1.randomBytes === "function") {
    return Uint8Array.from(crypto$1.randomBytes(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(113);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
for (let round2 = 0, R3 = _1n, x2 = 1, y4 = 0; round2 < 24; round2++) {
  [x2, y4] = [y4, (2 * x2 + 3 * y4) % 5];
  SHA3_PI.push(2 * (5 * y4 + x2));
  SHA3_ROTL.push((round2 + 1) * (round2 + 2) / 2 % 64);
  let t2 = _0n;
  for (let j2 = 0; j2 < 7; j2++) {
    R3 = (R3 << _1n ^ (R3 >> _7n) * _0x71n) % _256n;
    if (R3 & _2n)
      t2 ^= _1n << (_1n << /* @__PURE__ */ BigInt(j2)) - _1n;
  }
  _SHA3_IOTA.push(t2);
}
const IOTAS = split(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
const rotlH = (h3, l2, s2) => s2 > 32 ? rotlBH(h3, l2, s2) : rotlSH(h3, l2, s2);
const rotlL = (h3, l2, s2) => s2 > 32 ? rotlBL(h3, l2, s2) : rotlSL(h3, l2, s2);
function keccakP(s2, rounds = 24) {
  const B4 = new Uint32Array(5 * 2);
  for (let round2 = 24 - rounds; round2 < 24; round2++) {
    for (let x2 = 0; x2 < 10; x2++)
      B4[x2] = s2[x2] ^ s2[x2 + 10] ^ s2[x2 + 20] ^ s2[x2 + 30] ^ s2[x2 + 40];
    for (let x2 = 0; x2 < 10; x2 += 2) {
      const idx1 = (x2 + 8) % 10;
      const idx0 = (x2 + 2) % 10;
      const B0 = B4[idx0];
      const B1 = B4[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B4[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B4[idx1 + 1];
      for (let y4 = 0; y4 < 50; y4 += 10) {
        s2[x2 + y4] ^= Th;
        s2[x2 + y4 + 1] ^= Tl;
      }
    }
    let curH = s2[2];
    let curL = s2[3];
    for (let t2 = 0; t2 < 24; t2++) {
      const shift = SHA3_ROTL[t2];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t2];
      curH = s2[PI];
      curL = s2[PI + 1];
      s2[PI] = Th;
      s2[PI + 1] = Tl;
    }
    for (let y4 = 0; y4 < 50; y4 += 10) {
      for (let x2 = 0; x2 < 10; x2++)
        B4[x2] = s2[y4 + x2];
      for (let x2 = 0; x2 < 10; x2++)
        s2[y4 + x2] ^= ~B4[(x2 + 2) % 10] & B4[(x2 + 4) % 10];
    }
    s2[0] ^= SHA3_IOTA_H[round2];
    s2[1] ^= SHA3_IOTA_L[round2];
  }
  clean(B4);
}
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
    anumber(outputLen);
    if (!(0 < blockLen && blockLen < 200))
      throw new Error("only keccak-f1600 function is supported");
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
    const { blockLen, state: state2 } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i2 = 0; i2 < take; i2++)
        state2[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state: state2, suffix, pos, blockLen } = this;
    state2[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state2[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    aexists(this, false);
    abytes(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
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
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes) {
    anumber(bytes);
    return this.xofInto(new Uint8Array(bytes));
  }
  digestInto(out) {
    aoutput(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
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
  _cloneInto(to2) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to2 || (to2 = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to2.state32.set(this.state32);
    to2.pos = this.pos;
    to2.posOut = this.posOut;
    to2.finished = this.finished;
    to2.rounds = rounds;
    to2.suffix = suffix;
    to2.outputLen = outputLen;
    to2.enableXOF = enableXOF;
    to2.destroyed = this.destroyed;
    return to2;
  }
}
const gen = (suffix, blockLen, outputLen) => createHasher(() => new Keccak(blockLen, suffix, outputLen));
const keccak_256 = /* @__PURE__ */ (() => gen(1, 136, 256 / 8))();
function keccak256(value, to_) {
  const to2 = to_ || "hex";
  const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes$1(value) : value);
  if (to2 === "bytes")
    return bytes;
  return toHex(bytes);
}
class LruMap extends Map {
  constructor(size2) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size2;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
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
const checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
function checksumAddress(address_, chainId) {
  if (checksumAddressCache.has(`${address_}.${chainId}`))
    return checksumAddressCache.get(`${address_}.${chainId}`);
  const hexAddress = address_.substring(2).toLowerCase();
  const hash = keccak256(stringToBytes(hexAddress), "bytes");
  const address = hexAddress.split("");
  for (let i2 = 0; i2 < 40; i2 += 2) {
    if (hash[i2 >> 1] >> 4 >= 8 && address[i2]) {
      address[i2] = address[i2].toUpperCase();
    }
    if ((hash[i2 >> 1] & 15) >= 8 && address[i2 + 1]) {
      address[i2 + 1] = address[i2 + 1].toUpperCase();
    }
  }
  const result = `0x${address.join("")}`;
  checksumAddressCache.set(`${address_}.${chainId}`, result);
  return result;
}
function publicKeyToAddress(publicKey) {
  const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address}`);
}
async function recoverPublicKey({ hash, signature }) {
  const hashHex = isHex(hash) ? hash : toHex(hash);
  const { secp256k1 } = await __vitePreload(async () => {
    const { secp256k1: secp256k12 } = await import("./secp256k1-CGIaR7XP.js");
    return { secp256k1: secp256k12 };
  }, true ? __vite__mapDeps([9,1,2,4]) : void 0);
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r: r2, s: s2, v: v2, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v2);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k1.Signature(hexToBigInt(r2), hexToBigInt(s2)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = isHex(signature) ? signature : toHex(signature);
    if (size(signatureHex) !== 65)
      throw new Error("invalid signature length");
    const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}
var define_process_env_default$1 = {};
const Ae$1 = ":";
function Je$2(t2) {
  const [e2, n3] = t2.split(Ae$1);
  return { namespace: e2, reference: n3 };
}
function Ie$1(t2, e2) {
  return t2.includes(":") ? [t2] : e2.chains || [];
}
var Qs$1 = Object.defineProperty, ti$1 = Object.defineProperties, ei$1 = Object.getOwnPropertyDescriptors, ar$1 = Object.getOwnPropertySymbols, ni$1 = Object.prototype.hasOwnProperty, ri$1 = Object.prototype.propertyIsEnumerable, en$1 = (t2, e2, n3) => e2 in t2 ? Qs$1(t2, e2, { enumerable: true, configurable: true, writable: true, value: n3 }) : t2[e2] = n3, ur$1 = (t2, e2) => {
  for (var n3 in e2 || (e2 = {})) ni$1.call(e2, n3) && en$1(t2, n3, e2[n3]);
  if (ar$1) for (var n3 of ar$1(e2)) ri$1.call(e2, n3) && en$1(t2, n3, e2[n3]);
  return t2;
}, oi$1 = (t2, e2) => ti$1(t2, ei$1(e2)), lr$1 = (t2, e2, n3) => en$1(t2, typeof e2 != "symbol" ? e2 + "" : e2, n3);
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
  var t2;
  try {
    return At$2() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t2 = global.Application) == null ? void 0 : t2.applicationId : void 0;
  } catch {
    return;
  }
}
function gr$1(t2, e2) {
  const n3 = new URLSearchParams(t2);
  return Object.entries(e2).sort(([r2], [o2]) => r2.localeCompare(o2)).forEach(([r2, o2]) => {
    o2 != null && n3.set(r2, String(o2));
  }), n3.toString();
}
function ui$1(t2) {
  var e2, n3;
  const r2 = br$1();
  try {
    return t2 != null && t2.url && r2.url && new URL(t2.url).host !== new URL(r2.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t2.url} differs from the actual page url:${r2.url}. This is probably unintended and can lead to issues.`), t2.url = r2.url), (e2 = t2 == null ? void 0 : t2.icons) != null && e2.length && t2.icons.length > 0 && (t2.icons = t2.icons.filter((o2) => o2 !== "")), oi$1(ur$1(ur$1({}, r2), t2), { url: (t2 == null ? void 0 : t2.url) || r2.url, name: (t2 == null ? void 0 : t2.name) || r2.name, description: (t2 == null ? void 0 : t2.description) || r2.description, icons: (n3 = t2 == null ? void 0 : t2.icons) != null && n3.length && t2.icons.length > 0 ? t2.icons : r2.icons });
  } catch (o2) {
    return console.warn("Error populating app metadata", o2), t2 || r2;
  }
}
function br$1() {
  return cjsExports.getWindowMetadata() || { name: "", description: "", url: "", icons: [""] };
}
function yr$1() {
  if (Vt$2() === et$2.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n3, Version: r2 } = global.Platform;
    return [n3, r2].join("-");
  }
  const t2 = detect();
  if (t2 === null) return "unknown";
  const e2 = t2.os ? t2.os.replace(" ", "").toLowerCase() : "unknown";
  return t2.type === "browser" ? [e2, t2.name, t2.version].join("-") : [e2, t2.version].join("-");
}
function mr$1() {
  var t2;
  const e2 = Vt$2();
  return e2 === et$2.browser ? [e2, ((t2 = cjsExports$2.getLocation()) == null ? void 0 : t2.host) || "unknown"].join(":") : e2;
}
function wr$1(t2, e2, n3) {
  const r2 = yr$1(), o2 = mr$1();
  return [[t2, e2].join("-"), [pr$1, n3].join("-"), r2, o2].join("/");
}
function di$1({ protocol: t2, version: e2, relayUrl: n3, sdkVersion: r2, auth: o2, projectId: s2, useOnCloseEvent: i2, bundleId: c2, packageName: f3 }) {
  const u2 = n3.split("?"), a2 = wr$1(t2, e2, r2), l2 = { auth: o2, ua: a2, projectId: s2, useOnCloseEvent: i2, packageName: f3 || void 0, bundleId: c2 || void 0 }, d5 = gr$1(u2[1] || "", l2);
  return u2[0] + "?" + d5;
}
function It$3(t2, e2) {
  return t2.filter((n3) => e2.includes(n3)).length === t2.length;
}
function bi$1(t2) {
  return Object.fromEntries(t2.entries());
}
function yi$1(t2) {
  return new Map(Object.entries(t2));
}
function xi$1(t2 = cjsExports$1.FIVE_MINUTES, e2) {
  const n3 = cjsExports$1.toMiliseconds(t2 || cjsExports$1.FIVE_MINUTES);
  let r2, o2, s2, i2;
  return { resolve: (c2) => {
    s2 && r2 && (clearTimeout(s2), r2(c2), i2 = Promise.resolve(c2));
  }, reject: (c2) => {
    s2 && o2 && (clearTimeout(s2), o2(c2));
  }, done: () => new Promise((c2, f3) => {
    if (i2) return c2(i2);
    s2 = setTimeout(() => {
      const u2 = new Error(e2);
      i2 = Promise.reject(u2), f3(u2);
    }, n3), r2 = c2, o2 = f3;
  }) };
}
function Ei$1(t2, e2, n3) {
  return new Promise(async (r2, o2) => {
    const s2 = setTimeout(() => o2(new Error(n3)), e2);
    try {
      const i2 = await t2;
      r2(i2);
    } catch (i2) {
      o2(i2);
    }
    clearTimeout(s2);
  });
}
function on$1(t2, e2) {
  if (typeof e2 == "string" && e2.startsWith(`${t2}:`)) return e2;
  if (t2.toLowerCase() === "topic") {
    if (typeof e2 != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e2}`;
  } else if (t2.toLowerCase() === "id") {
    if (typeof e2 != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e2}`;
  }
  throw new Error(`Unknown expirer target type: ${t2}`);
}
function Bi$1(t2) {
  return on$1("topic", t2);
}
function Ai$1(t2) {
  return on$1("id", t2);
}
function Ii$1(t2) {
  const [e2, n3] = t2.split(":"), r2 = { id: void 0, topic: void 0 };
  if (e2 === "topic" && typeof n3 == "string") r2.topic = n3;
  else if (e2 === "id" && Number.isInteger(Number(n3))) r2.id = Number(n3);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e2}:${n3}`);
  return r2;
}
function Si$1(t2, e2) {
  return cjsExports$1.fromMiliseconds(Date.now() + cjsExports$1.toMiliseconds(t2));
}
function Oi$1(t2) {
  return Date.now() >= cjsExports$1.toMiliseconds(t2);
}
function Ni$1(t2, e2) {
  return `${t2}${e2 ? `:${e2}` : ""}`;
}
function ut$2(t2 = [], e2 = []) {
  return [.../* @__PURE__ */ new Set([...t2, ...e2])];
}
async function Ui$1({ id: t2, topic: e2, wcDeepLink: n3 }) {
  var r2;
  try {
    if (!n3) return;
    const o2 = typeof n3 == "string" ? JSON.parse(n3) : n3, s2 = o2 == null ? void 0 : o2.href;
    if (typeof s2 != "string") return;
    const i2 = Br$1(s2, t2, e2), c2 = Vt$2();
    if (c2 === et$2.browser) {
      if (!((r2 = cjsExports$2.getDocument()) != null && r2.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      Ar$1(i2);
    } else c2 === et$2.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i2);
  } catch (o2) {
    console.error(o2);
  }
}
function Br$1(t2, e2, n3) {
  const r2 = `requestId=${e2}&sessionTopic=${n3}`;
  t2.endsWith("/") && (t2 = t2.slice(0, -1));
  let o2 = `${t2}`;
  if (t2.startsWith("https://t.me")) {
    const s2 = t2.includes("?") ? "&startapp=" : "?startapp=";
    o2 = `${o2}${s2}${Or$1(r2, true)}`;
  } else o2 = `${o2}/wc?${r2}`;
  return o2;
}
function Ar$1(t2) {
  let e2 = "_self";
  Sr$1() ? e2 = "_top" : (Ir$1() || t2.startsWith("https://") || t2.startsWith("http://")) && (e2 = "_blank"), window.open(t2, e2, "noreferrer noopener");
}
async function _i$1(t2, e2) {
  let n3 = "";
  try {
    if (Wt$2() && (n3 = localStorage.getItem(e2), n3)) return n3;
    n3 = await t2.getItem(e2);
  } catch (r2) {
    console.error(r2);
  }
  return n3;
}
function Ri$1(t2, e2) {
  if (!t2.includes(e2)) return null;
  const n3 = t2.split(/([&,?,=])/), r2 = n3.indexOf(e2);
  return n3[r2 + 2];
}
function $i$1() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t2) => {
    const e2 = Math.random() * 16 | 0;
    return (t2 === "x" ? e2 : e2 & 3 | 8).toString(16);
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
function Or$1(t2, e2 = false) {
  const n3 = Buffer.from(t2).toString("base64");
  return e2 ? n3.replace(/[=]/g, "") : n3;
}
function cn$1(t2) {
  return Buffer.from(t2, "base64").toString("utf-8");
}
function Ci$1(t2) {
  return new Promise((e2) => setTimeout(e2, t2));
}
let ji$1 = class ji {
  constructor({ limit: e2 }) {
    lr$1(this, "limit"), lr$1(this, "set"), this.limit = e2, this.set = /* @__PURE__ */ new Set();
  }
  add(e2) {
    if (!this.set.has(e2)) {
      if (this.set.size >= this.limit) {
        const n3 = this.set.values().next().value;
        n3 && this.set.delete(n3);
      }
      this.set.add(e2);
    }
  }
  has(e2) {
    return this.set.has(e2);
  }
};
const Oe$2 = BigInt(2 ** 32 - 1), Nr$1 = BigInt(32);
function Ur$1(t2, e2 = false) {
  return e2 ? { h: Number(t2 & Oe$2), l: Number(t2 >> Nr$1 & Oe$2) } : { h: Number(t2 >> Nr$1 & Oe$2) | 0, l: Number(t2 & Oe$2) | 0 };
}
function _r$1(t2, e2 = false) {
  const n3 = t2.length;
  let r2 = new Uint32Array(n3), o2 = new Uint32Array(n3);
  for (let s2 = 0; s2 < n3; s2++) {
    const { h: i2, l: c2 } = Ur$1(t2[s2], e2);
    [r2[s2], o2[s2]] = [i2, c2];
  }
  return [r2, o2];
}
const Rr$1 = (t2, e2, n3) => t2 >>> n3, $r$1 = (t2, e2, n3) => t2 << 32 - n3 | e2 >>> n3, St$3 = (t2, e2, n3) => t2 >>> n3 | e2 << 32 - n3, Ot$2 = (t2, e2, n3) => t2 << 32 - n3 | e2 >>> n3, de$1 = (t2, e2, n3) => t2 << 64 - n3 | e2 >>> n3 - 32, he$2 = (t2, e2, n3) => t2 >>> n3 - 32 | e2 << 64 - n3, Li$1 = (t2, e2) => e2, ki$1 = (t2, e2) => t2, Pi$1 = (t2, e2, n3) => t2 << n3 | e2 >>> 32 - n3, Hi$1 = (t2, e2, n3) => e2 << n3 | t2 >>> 32 - n3, Di$1 = (t2, e2, n3) => e2 << n3 - 32 | t2 >>> 64 - n3, Vi$1 = (t2, e2, n3) => t2 << n3 - 32 | e2 >>> 64 - n3;
function dt$2(t2, e2, n3, r2) {
  const o2 = (e2 >>> 0) + (r2 >>> 0);
  return { h: t2 + n3 + (o2 / 2 ** 32 | 0) | 0, l: o2 | 0 };
}
const fn$1 = (t2, e2, n3) => (t2 >>> 0) + (e2 >>> 0) + (n3 >>> 0), an$1 = (t2, e2, n3, r2) => e2 + n3 + r2 + (t2 / 2 ** 32 | 0) | 0, Mi$1 = (t2, e2, n3, r2) => (t2 >>> 0) + (e2 >>> 0) + (n3 >>> 0) + (r2 >>> 0), Ki$1 = (t2, e2, n3, r2, o2) => e2 + n3 + r2 + o2 + (t2 / 2 ** 32 | 0) | 0, qi$1 = (t2, e2, n3, r2, o2) => (t2 >>> 0) + (e2 >>> 0) + (n3 >>> 0) + (r2 >>> 0) + (o2 >>> 0), Fi$1 = (t2, e2, n3, r2, o2, s2) => e2 + n3 + r2 + o2 + s2 + (t2 / 2 ** 32 | 0) | 0, Xt$2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Ne(t2) {
  return t2 instanceof Uint8Array || ArrayBuffer.isView(t2) && t2.constructor.name === "Uint8Array";
}
function mt$2(t2) {
  if (!Number.isSafeInteger(t2) || t2 < 0) throw new Error("positive integer expected, got " + t2);
}
function ht$1(t2, ...e2) {
  if (!Ne(t2)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t2.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t2.length);
}
function Ue$2(t2) {
  if (typeof t2 != "function" || typeof t2.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  mt$2(t2.outputLen), mt$2(t2.blockLen);
}
function Nt$2(t2, e2 = true) {
  if (t2.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t2.finished) throw new Error("Hash#digest() has already been called");
}
function un$1(t2, e2) {
  ht$1(t2);
  const n3 = e2.outputLen;
  if (t2.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
function pe$3(t2) {
  return new Uint32Array(t2.buffer, t2.byteOffset, Math.floor(t2.byteLength / 4));
}
function lt$1(...t2) {
  for (let e2 = 0; e2 < t2.length; e2++) t2[e2].fill(0);
}
function ln$1(t2) {
  return new DataView(t2.buffer, t2.byteOffset, t2.byteLength);
}
function bt$1(t2, e2) {
  return t2 << 32 - e2 | t2 >>> e2;
}
const Tr$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Cr$1(t2) {
  return t2 << 24 & 4278190080 | t2 << 8 & 16711680 | t2 >>> 8 & 65280 | t2 >>> 24 & 255;
}
const wt$2 = Tr$1 ? (t2) => t2 : (t2) => Cr$1(t2);
function Zi(t2) {
  for (let e2 = 0; e2 < t2.length; e2++) t2[e2] = Cr$1(t2[e2]);
  return t2;
}
const Ut$2 = Tr$1 ? (t2) => t2 : Zi, jr$1 = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Gi$1 = Array.from({ length: 256 }, (t2, e2) => e2.toString(16).padStart(2, "0"));
function Jt$2(t2) {
  if (ht$1(t2), jr$1) return t2.toHex();
  let e2 = "";
  for (let n3 = 0; n3 < t2.length; n3++) e2 += Gi$1[t2[n3]];
  return e2;
}
const vt$2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Lr$1(t2) {
  if (t2 >= vt$2._0 && t2 <= vt$2._9) return t2 - vt$2._0;
  if (t2 >= vt$2.A && t2 <= vt$2.F) return t2 - (vt$2.A - 10);
  if (t2 >= vt$2.a && t2 <= vt$2.f) return t2 - (vt$2.a - 10);
}
function _e$1(t2) {
  if (typeof t2 != "string") throw new Error("hex string expected, got " + typeof t2);
  if (jr$1) return Uint8Array.fromHex(t2);
  const e2 = t2.length, n3 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r2 = new Uint8Array(n3);
  for (let o2 = 0, s2 = 0; o2 < n3; o2++, s2 += 2) {
    const i2 = Lr$1(t2.charCodeAt(s2)), c2 = Lr$1(t2.charCodeAt(s2 + 1));
    if (i2 === void 0 || c2 === void 0) {
      const f3 = t2[s2] + t2[s2 + 1];
      throw new Error('hex string expected, got non-hex character "' + f3 + '" at index ' + s2);
    }
    r2[o2] = i2 * 16 + c2;
  }
  return r2;
}
function kr$1(t2) {
  if (typeof t2 != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t2));
}
function pt$1(t2) {
  return typeof t2 == "string" && (t2 = kr$1(t2)), ht$1(t2), t2;
}
function _t$2(...t2) {
  let e2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++) {
    const o2 = t2[r2];
    ht$1(o2), e2 += o2.length;
  }
  const n3 = new Uint8Array(e2);
  for (let r2 = 0, o2 = 0; r2 < t2.length; r2++) {
    const s2 = t2[r2];
    n3.set(s2, o2), o2 += s2.length;
  }
  return n3;
}
class Re {
}
function ge$1(t2) {
  const e2 = (r2) => t2().update(pt$1(r2)).digest(), n3 = t2();
  return e2.outputLen = n3.outputLen, e2.blockLen = n3.blockLen, e2.create = () => t2(), e2;
}
function zi$1(t2) {
  const e2 = (r2, o2) => t2(o2).update(pt$1(r2)).digest(), n3 = t2({});
  return e2.outputLen = n3.outputLen, e2.blockLen = n3.blockLen, e2.create = (r2) => t2(r2), e2;
}
function Mt$2(t2 = 32) {
  if (Xt$2 && typeof Xt$2.getRandomValues == "function") return Xt$2.getRandomValues(new Uint8Array(t2));
  if (Xt$2 && typeof Xt$2.randomBytes == "function") return Uint8Array.from(Xt$2.randomBytes(t2));
  throw new Error("crypto.getRandomValues must be defined");
}
const Yi$1 = BigInt(0), be$2 = BigInt(1), Wi$1 = BigInt(2), Xi = BigInt(7), Ji = BigInt(256), Qi = BigInt(113), Pr$1 = [], Hr$1 = [], Dr$1 = [];
for (let t2 = 0, e2 = be$2, n3 = 1, r2 = 0; t2 < 24; t2++) {
  [n3, r2] = [r2, (2 * n3 + 3 * r2) % 5], Pr$1.push(2 * (5 * r2 + n3)), Hr$1.push((t2 + 1) * (t2 + 2) / 2 % 64);
  let o2 = Yi$1;
  for (let s2 = 0; s2 < 7; s2++) e2 = (e2 << be$2 ^ (e2 >> Xi) * Qi) % Ji, e2 & Wi$1 && (o2 ^= be$2 << (be$2 << BigInt(s2)) - be$2);
  Dr$1.push(o2);
}
const Vr$1 = _r$1(Dr$1, true), tc = Vr$1[0], ec = Vr$1[1], Mr$1 = (t2, e2, n3) => n3 > 32 ? Di$1(t2, e2, n3) : Pi$1(t2, e2, n3), Kr$1 = (t2, e2, n3) => n3 > 32 ? Vi$1(t2, e2, n3) : Hi$1(t2, e2, n3);
function nc(t2, e2 = 24) {
  const n3 = new Uint32Array(10);
  for (let r2 = 24 - e2; r2 < 24; r2++) {
    for (let i2 = 0; i2 < 10; i2++) n3[i2] = t2[i2] ^ t2[i2 + 10] ^ t2[i2 + 20] ^ t2[i2 + 30] ^ t2[i2 + 40];
    for (let i2 = 0; i2 < 10; i2 += 2) {
      const c2 = (i2 + 8) % 10, f3 = (i2 + 2) % 10, u2 = n3[f3], a2 = n3[f3 + 1], l2 = Mr$1(u2, a2, 1) ^ n3[c2], d5 = Kr$1(u2, a2, 1) ^ n3[c2 + 1];
      for (let h3 = 0; h3 < 50; h3 += 10) t2[i2 + h3] ^= l2, t2[i2 + h3 + 1] ^= d5;
    }
    let o2 = t2[2], s2 = t2[3];
    for (let i2 = 0; i2 < 24; i2++) {
      const c2 = Hr$1[i2], f3 = Mr$1(o2, s2, c2), u2 = Kr$1(o2, s2, c2), a2 = Pr$1[i2];
      o2 = t2[a2], s2 = t2[a2 + 1], t2[a2] = f3, t2[a2 + 1] = u2;
    }
    for (let i2 = 0; i2 < 50; i2 += 10) {
      for (let c2 = 0; c2 < 10; c2++) n3[c2] = t2[i2 + c2];
      for (let c2 = 0; c2 < 10; c2++) t2[i2 + c2] ^= ~n3[(c2 + 2) % 10] & n3[(c2 + 4) % 10];
    }
    t2[0] ^= tc[r2], t2[1] ^= ec[r2];
  }
  lt$1(n3);
}
let Jn$1 = class Jn extends Re {
  constructor(e2, n3, r2, o2 = false, s2 = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e2, this.suffix = n3, this.outputLen = r2, this.enableXOF = o2, this.rounds = s2, mt$2(r2), !(0 < e2 && e2 < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = pe$3(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Ut$2(this.state32), nc(this.state32, this.rounds), Ut$2(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e2) {
    Nt$2(this), e2 = pt$1(e2), ht$1(e2);
    const { blockLen: n3, state: r2 } = this, o2 = e2.length;
    for (let s2 = 0; s2 < o2; ) {
      const i2 = Math.min(n3 - this.pos, o2 - s2);
      for (let c2 = 0; c2 < i2; c2++) r2[this.pos++] ^= e2[s2++];
      this.pos === n3 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: e2, suffix: n3, pos: r2, blockLen: o2 } = this;
    e2[r2] ^= n3, (n3 & 128) !== 0 && r2 === o2 - 1 && this.keccak(), e2[o2 - 1] ^= 128, this.keccak();
  }
  writeInto(e2) {
    Nt$2(this, false), ht$1(e2), this.finish();
    const n3 = this.state, { blockLen: r2 } = this;
    for (let o2 = 0, s2 = e2.length; o2 < s2; ) {
      this.posOut >= r2 && this.keccak();
      const i2 = Math.min(r2 - this.posOut, s2 - o2);
      e2.set(n3.subarray(this.posOut, this.posOut + i2), o2), this.posOut += i2, o2 += i2;
    }
    return e2;
  }
  xofInto(e2) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e2);
  }
  xof(e2) {
    return mt$2(e2), this.xofInto(new Uint8Array(e2));
  }
  digestInto(e2) {
    if (un$1(e2, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e2), this.destroy(), e2;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, lt$1(this.state);
  }
  _cloneInto(e2) {
    const { blockLen: n3, suffix: r2, outputLen: o2, rounds: s2, enableXOF: i2 } = this;
    return e2 || (e2 = new Jn(n3, r2, o2, i2, s2)), e2.state32.set(this.state32), e2.pos = this.pos, e2.posOut = this.posOut, e2.finished = this.finished, e2.rounds = s2, e2.suffix = r2, e2.outputLen = o2, e2.enableXOF = i2, e2.destroyed = this.destroyed, e2;
  }
};
const rc = (t2, e2, n3) => ge$1(() => new Jn$1(e2, t2, n3)), oc = rc(1, 136, 256 / 8);
function sc(t2, e2, n3, r2) {
  if (typeof t2.setBigUint64 == "function") return t2.setBigUint64(e2, n3, r2);
  const o2 = BigInt(32), s2 = BigInt(4294967295), i2 = Number(n3 >> o2 & s2), c2 = Number(n3 & s2), f3 = r2 ? 4 : 0, u2 = r2 ? 0 : 4;
  t2.setUint32(e2 + f3, i2, r2), t2.setUint32(e2 + u2, c2, r2);
}
function ic(t2, e2, n3) {
  return t2 & e2 ^ ~t2 & n3;
}
function cc(t2, e2, n3) {
  return t2 & e2 ^ t2 & n3 ^ e2 & n3;
}
let qr$1 = class qr extends Re {
  constructor(e2, n3, r2, o2) {
    super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e2, this.outputLen = n3, this.padOffset = r2, this.isLE = o2, this.buffer = new Uint8Array(e2), this.view = ln$1(this.buffer);
  }
  update(e2) {
    Nt$2(this), e2 = pt$1(e2), ht$1(e2);
    const { view: n3, buffer: r2, blockLen: o2 } = this, s2 = e2.length;
    for (let i2 = 0; i2 < s2; ) {
      const c2 = Math.min(o2 - this.pos, s2 - i2);
      if (c2 === o2) {
        const f3 = ln$1(e2);
        for (; o2 <= s2 - i2; i2 += o2) this.process(f3, i2);
        continue;
      }
      r2.set(e2.subarray(i2, i2 + c2), this.pos), this.pos += c2, i2 += c2, this.pos === o2 && (this.process(n3, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    Nt$2(this), un$1(e2, this), this.finished = true;
    const { buffer: n3, view: r2, blockLen: o2, isLE: s2 } = this;
    let { pos: i2 } = this;
    n3[i2++] = 128, lt$1(this.buffer.subarray(i2)), this.padOffset > o2 - i2 && (this.process(r2, 0), i2 = 0);
    for (let l2 = i2; l2 < o2; l2++) n3[l2] = 0;
    sc(r2, o2 - 8, BigInt(this.length * 8), s2), this.process(r2, 0);
    const c2 = ln$1(e2), f3 = this.outputLen;
    if (f3 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u2 = f3 / 4, a2 = this.get();
    if (u2 > a2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l2 = 0; l2 < u2; l2++) c2.setUint32(4 * l2, a2[l2], s2);
  }
  digest() {
    const { buffer: e2, outputLen: n3 } = this;
    this.digestInto(e2);
    const r2 = e2.slice(0, n3);
    return this.destroy(), r2;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n3, buffer: r2, length: o2, finished: s2, destroyed: i2, pos: c2 } = this;
    return e2.destroyed = i2, e2.finished = s2, e2.length = o2, e2.pos = c2, o2 % n3 && e2.buffer.set(r2), e2;
  }
  clone() {
    return this._cloneInto();
  }
};
const Rt$3 = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), X$1 = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]), J$2 = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]), fc = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), $t$2 = new Uint32Array(64);
class ac extends qr$1 {
  constructor(e2 = 32) {
    super(64, e2, 8, false), this.A = Rt$3[0] | 0, this.B = Rt$3[1] | 0, this.C = Rt$3[2] | 0, this.D = Rt$3[3] | 0, this.E = Rt$3[4] | 0, this.F = Rt$3[5] | 0, this.G = Rt$3[6] | 0, this.H = Rt$3[7] | 0;
  }
  get() {
    const { A: e2, B: n3, C: r2, D: o2, E: s2, F: i2, G: c2, H: f3 } = this;
    return [e2, n3, r2, o2, s2, i2, c2, f3];
  }
  set(e2, n3, r2, o2, s2, i2, c2, f3) {
    this.A = e2 | 0, this.B = n3 | 0, this.C = r2 | 0, this.D = o2 | 0, this.E = s2 | 0, this.F = i2 | 0, this.G = c2 | 0, this.H = f3 | 0;
  }
  process(e2, n3) {
    for (let l2 = 0; l2 < 16; l2++, n3 += 4) $t$2[l2] = e2.getUint32(n3, false);
    for (let l2 = 16; l2 < 64; l2++) {
      const d5 = $t$2[l2 - 15], h3 = $t$2[l2 - 2], y4 = bt$1(d5, 7) ^ bt$1(d5, 18) ^ d5 >>> 3, m5 = bt$1(h3, 17) ^ bt$1(h3, 19) ^ h3 >>> 10;
      $t$2[l2] = m5 + $t$2[l2 - 7] + y4 + $t$2[l2 - 16] | 0;
    }
    let { A: r2, B: o2, C: s2, D: i2, E: c2, F: f3, G: u2, H: a2 } = this;
    for (let l2 = 0; l2 < 64; l2++) {
      const d5 = bt$1(c2, 6) ^ bt$1(c2, 11) ^ bt$1(c2, 25), h3 = a2 + d5 + ic(c2, f3, u2) + fc[l2] + $t$2[l2] | 0, m5 = (bt$1(r2, 2) ^ bt$1(r2, 13) ^ bt$1(r2, 22)) + cc(r2, o2, s2) | 0;
      a2 = u2, u2 = f3, f3 = c2, c2 = i2 + h3 | 0, i2 = s2, s2 = o2, o2 = r2, r2 = h3 + m5 | 0;
    }
    r2 = r2 + this.A | 0, o2 = o2 + this.B | 0, s2 = s2 + this.C | 0, i2 = i2 + this.D | 0, c2 = c2 + this.E | 0, f3 = f3 + this.F | 0, u2 = u2 + this.G | 0, a2 = a2 + this.H | 0, this.set(r2, o2, s2, i2, c2, f3, u2, a2);
  }
  roundClean() {
    lt$1($t$2);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), lt$1(this.buffer);
  }
}
const Fr$1 = _r$1(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t2) => BigInt(t2))), uc = Fr$1[0], lc = Fr$1[1], Tt$2 = new Uint32Array(80), Ct$2 = new Uint32Array(80);
let dn$1 = class dn extends qr$1 {
  constructor(e2 = 64) {
    super(128, e2, 16, false), this.Ah = J$2[0] | 0, this.Al = J$2[1] | 0, this.Bh = J$2[2] | 0, this.Bl = J$2[3] | 0, this.Ch = J$2[4] | 0, this.Cl = J$2[5] | 0, this.Dh = J$2[6] | 0, this.Dl = J$2[7] | 0, this.Eh = J$2[8] | 0, this.El = J$2[9] | 0, this.Fh = J$2[10] | 0, this.Fl = J$2[11] | 0, this.Gh = J$2[12] | 0, this.Gl = J$2[13] | 0, this.Hh = J$2[14] | 0, this.Hl = J$2[15] | 0;
  }
  get() {
    const { Ah: e2, Al: n3, Bh: r2, Bl: o2, Ch: s2, Cl: i2, Dh: c2, Dl: f3, Eh: u2, El: a2, Fh: l2, Fl: d5, Gh: h3, Gl: y4, Hh: m5, Hl: v2 } = this;
    return [e2, n3, r2, o2, s2, i2, c2, f3, u2, a2, l2, d5, h3, y4, m5, v2];
  }
  set(e2, n3, r2, o2, s2, i2, c2, f3, u2, a2, l2, d5, h3, y4, m5, v2) {
    this.Ah = e2 | 0, this.Al = n3 | 0, this.Bh = r2 | 0, this.Bl = o2 | 0, this.Ch = s2 | 0, this.Cl = i2 | 0, this.Dh = c2 | 0, this.Dl = f3 | 0, this.Eh = u2 | 0, this.El = a2 | 0, this.Fh = l2 | 0, this.Fl = d5 | 0, this.Gh = h3 | 0, this.Gl = y4 | 0, this.Hh = m5 | 0, this.Hl = v2 | 0;
  }
  process(e2, n3) {
    for (let R3 = 0; R3 < 16; R3++, n3 += 4) Tt$2[R3] = e2.getUint32(n3), Ct$2[R3] = e2.getUint32(n3 += 4);
    for (let R3 = 16; R3 < 80; R3++) {
      const Z2 = Tt$2[R3 - 15] | 0, H2 = Ct$2[R3 - 15] | 0, j2 = St$3(Z2, H2, 1) ^ St$3(Z2, H2, 8) ^ Rr$1(Z2, H2, 7), L4 = Ot$2(Z2, H2, 1) ^ Ot$2(Z2, H2, 8) ^ $r$1(Z2, H2, 7), k2 = Tt$2[R3 - 2] | 0, O4 = Ct$2[R3 - 2] | 0, T2 = St$3(k2, O4, 19) ^ de$1(k2, O4, 61) ^ Rr$1(k2, O4, 6), C2 = Ot$2(k2, O4, 19) ^ he$2(k2, O4, 61) ^ $r$1(k2, O4, 6), _2 = Mi$1(L4, C2, Ct$2[R3 - 7], Ct$2[R3 - 16]), p2 = Ki$1(_2, j2, T2, Tt$2[R3 - 7], Tt$2[R3 - 16]);
      Tt$2[R3] = p2 | 0, Ct$2[R3] = _2 | 0;
    }
    let { Ah: r2, Al: o2, Bh: s2, Bl: i2, Ch: c2, Cl: f3, Dh: u2, Dl: a2, Eh: l2, El: d5, Fh: h3, Fl: y4, Gh: m5, Gl: v2, Hh: U2, Hl: F2 } = this;
    for (let R3 = 0; R3 < 80; R3++) {
      const Z2 = St$3(l2, d5, 14) ^ St$3(l2, d5, 18) ^ de$1(l2, d5, 41), H2 = Ot$2(l2, d5, 14) ^ Ot$2(l2, d5, 18) ^ he$2(l2, d5, 41), j2 = l2 & h3 ^ ~l2 & m5, L4 = d5 & y4 ^ ~d5 & v2, k2 = qi$1(F2, H2, L4, lc[R3], Ct$2[R3]), O4 = Fi$1(k2, U2, Z2, j2, uc[R3], Tt$2[R3]), T2 = k2 | 0, C2 = St$3(r2, o2, 28) ^ de$1(r2, o2, 34) ^ de$1(r2, o2, 39), _2 = Ot$2(r2, o2, 28) ^ he$2(r2, o2, 34) ^ he$2(r2, o2, 39), p2 = r2 & s2 ^ r2 & c2 ^ s2 & c2, b2 = o2 & i2 ^ o2 & f3 ^ i2 & f3;
      U2 = m5 | 0, F2 = v2 | 0, m5 = h3 | 0, v2 = y4 | 0, h3 = l2 | 0, y4 = d5 | 0, { h: l2, l: d5 } = dt$2(u2 | 0, a2 | 0, O4 | 0, T2 | 0), u2 = c2 | 0, a2 = f3 | 0, c2 = s2 | 0, f3 = i2 | 0, s2 = r2 | 0, i2 = o2 | 0;
      const g2 = fn$1(T2, _2, b2);
      r2 = an$1(g2, O4, C2, p2), o2 = g2 | 0;
    }
    ({ h: r2, l: o2 } = dt$2(this.Ah | 0, this.Al | 0, r2 | 0, o2 | 0)), { h: s2, l: i2 } = dt$2(this.Bh | 0, this.Bl | 0, s2 | 0, i2 | 0), { h: c2, l: f3 } = dt$2(this.Ch | 0, this.Cl | 0, c2 | 0, f3 | 0), { h: u2, l: a2 } = dt$2(this.Dh | 0, this.Dl | 0, u2 | 0, a2 | 0), { h: l2, l: d5 } = dt$2(this.Eh | 0, this.El | 0, l2 | 0, d5 | 0), { h: h3, l: y4 } = dt$2(this.Fh | 0, this.Fl | 0, h3 | 0, y4 | 0), { h: m5, l: v2 } = dt$2(this.Gh | 0, this.Gl | 0, m5 | 0, v2 | 0), { h: U2, l: F2 } = dt$2(this.Hh | 0, this.Hl | 0, U2 | 0, F2 | 0), this.set(r2, o2, s2, i2, c2, f3, u2, a2, l2, d5, h3, y4, m5, v2, U2, F2);
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
function jt$2(t2, e2, n3, r2, o2, s2) {
  const i2 = o2[s2], c2 = o2[s2 + 1];
  let f3 = S$4[2 * t2], u2 = S$4[2 * t2 + 1], a2 = S$4[2 * e2], l2 = S$4[2 * e2 + 1], d5 = S$4[2 * n3], h3 = S$4[2 * n3 + 1], y4 = S$4[2 * r2], m5 = S$4[2 * r2 + 1], v2 = fn$1(f3, a2, i2);
  u2 = an$1(v2, u2, l2, c2), f3 = v2 | 0, { Dh: m5, Dl: y4 } = { Dh: m5 ^ u2, Dl: y4 ^ f3 }, { Dh: m5, Dl: y4 } = { Dh: Li$1(m5, y4), Dl: ki$1(m5) }, { h: h3, l: d5 } = dt$2(h3, d5, m5, y4), { Bh: l2, Bl: a2 } = { Bh: l2 ^ h3, Bl: a2 ^ d5 }, { Bh: l2, Bl: a2 } = { Bh: St$3(l2, a2, 24), Bl: Ot$2(l2, a2, 24) }, S$4[2 * t2] = f3, S$4[2 * t2 + 1] = u2, S$4[2 * e2] = a2, S$4[2 * e2 + 1] = l2, S$4[2 * n3] = d5, S$4[2 * n3 + 1] = h3, S$4[2 * r2] = y4, S$4[2 * r2 + 1] = m5;
}
function Lt$2(t2, e2, n3, r2, o2, s2) {
  const i2 = o2[s2], c2 = o2[s2 + 1];
  let f3 = S$4[2 * t2], u2 = S$4[2 * t2 + 1], a2 = S$4[2 * e2], l2 = S$4[2 * e2 + 1], d5 = S$4[2 * n3], h3 = S$4[2 * n3 + 1], y4 = S$4[2 * r2], m5 = S$4[2 * r2 + 1], v2 = fn$1(f3, a2, i2);
  u2 = an$1(v2, u2, l2, c2), f3 = v2 | 0, { Dh: m5, Dl: y4 } = { Dh: m5 ^ u2, Dl: y4 ^ f3 }, { Dh: m5, Dl: y4 } = { Dh: St$3(m5, y4, 16), Dl: Ot$2(m5, y4, 16) }, { h: h3, l: d5 } = dt$2(h3, d5, m5, y4), { Bh: l2, Bl: a2 } = { Bh: l2 ^ h3, Bl: a2 ^ d5 }, { Bh: l2, Bl: a2 } = { Bh: de$1(l2, a2, 63), Bl: he$2(l2, a2, 63) }, S$4[2 * t2] = f3, S$4[2 * t2 + 1] = u2, S$4[2 * e2] = a2, S$4[2 * e2 + 1] = l2, S$4[2 * n3] = d5, S$4[2 * n3 + 1] = h3, S$4[2 * r2] = y4, S$4[2 * r2 + 1] = m5;
}
function mc(t2, e2 = {}, n3, r2, o2) {
  if (mt$2(n3), t2 < 0 || t2 > n3) throw new Error("outputLen bigger than keyLen");
  const { key: s2, salt: i2, personalization: c2 } = e2;
  if (s2 !== void 0 && (s2.length < 1 || s2.length > n3)) throw new Error("key length must be undefined or 1.." + n3);
  if (i2 !== void 0 && i2.length !== r2) throw new Error("salt must be undefined or " + r2);
  if (c2 !== void 0 && c2.length !== o2) throw new Error("personalization must be undefined or " + o2);
}
class wc extends Re {
  constructor(e2, n3) {
    super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, mt$2(e2), mt$2(n3), this.blockLen = e2, this.outputLen = n3, this.buffer = new Uint8Array(e2), this.buffer32 = pe$3(this.buffer);
  }
  update(e2) {
    Nt$2(this), e2 = pt$1(e2), ht$1(e2);
    const { blockLen: n3, buffer: r2, buffer32: o2 } = this, s2 = e2.length, i2 = e2.byteOffset, c2 = e2.buffer;
    for (let f3 = 0; f3 < s2; ) {
      this.pos === n3 && (Ut$2(o2), this.compress(o2, 0, false), Ut$2(o2), this.pos = 0);
      const u2 = Math.min(n3 - this.pos, s2 - f3), a2 = i2 + f3;
      if (u2 === n3 && !(a2 % 4) && f3 + u2 < s2) {
        const l2 = new Uint32Array(c2, a2, Math.floor((s2 - f3) / 4));
        Ut$2(l2);
        for (let d5 = 0; f3 + n3 < s2; d5 += o2.length, f3 += n3) this.length += n3, this.compress(l2, d5, false);
        Ut$2(l2);
        continue;
      }
      r2.set(e2.subarray(f3, f3 + u2), this.pos), this.pos += u2, this.length += u2, f3 += u2;
    }
    return this;
  }
  digestInto(e2) {
    Nt$2(this), un$1(e2, this);
    const { pos: n3, buffer32: r2 } = this;
    this.finished = true, lt$1(this.buffer.subarray(n3)), Ut$2(r2), this.compress(r2, 0, true), Ut$2(r2);
    const o2 = pe$3(e2);
    this.get().forEach((s2, i2) => o2[i2] = wt$2(s2));
  }
  digest() {
    const { buffer: e2, outputLen: n3 } = this;
    this.digestInto(e2);
    const r2 = e2.slice(0, n3);
    return this.destroy(), r2;
  }
  _cloneInto(e2) {
    const { buffer: n3, length: r2, finished: o2, destroyed: s2, outputLen: i2, pos: c2 } = this;
    return e2 || (e2 = new this.constructor({ dkLen: i2 })), e2.set(...this.get()), e2.buffer.set(n3), e2.destroyed = s2, e2.finished = o2, e2.length = r2, e2.pos = c2, e2.outputLen = i2, e2;
  }
  clone() {
    return this._cloneInto();
  }
}
class vc extends wc {
  constructor(e2 = {}) {
    const n3 = e2.dkLen === void 0 ? 64 : e2.dkLen;
    super(128, n3), this.v0l = z$4[0] | 0, this.v0h = z$4[1] | 0, this.v1l = z$4[2] | 0, this.v1h = z$4[3] | 0, this.v2l = z$4[4] | 0, this.v2h = z$4[5] | 0, this.v3l = z$4[6] | 0, this.v3h = z$4[7] | 0, this.v4l = z$4[8] | 0, this.v4h = z$4[9] | 0, this.v5l = z$4[10] | 0, this.v5h = z$4[11] | 0, this.v6l = z$4[12] | 0, this.v6h = z$4[13] | 0, this.v7l = z$4[14] | 0, this.v7h = z$4[15] | 0, mc(n3, e2, 64, 16, 16);
    let { key: r2, personalization: o2, salt: s2 } = e2, i2 = 0;
    if (r2 !== void 0 && (r2 = pt$1(r2), i2 = r2.length), this.v0l ^= this.outputLen | i2 << 8 | 65536 | 1 << 24, s2 !== void 0) {
      s2 = pt$1(s2);
      const c2 = pe$3(s2);
      this.v4l ^= wt$2(c2[0]), this.v4h ^= wt$2(c2[1]), this.v5l ^= wt$2(c2[2]), this.v5h ^= wt$2(c2[3]);
    }
    if (o2 !== void 0) {
      o2 = pt$1(o2);
      const c2 = pe$3(o2);
      this.v6l ^= wt$2(c2[0]), this.v6h ^= wt$2(c2[1]), this.v7l ^= wt$2(c2[2]), this.v7h ^= wt$2(c2[3]);
    }
    if (r2 !== void 0) {
      const c2 = new Uint8Array(this.blockLen);
      c2.set(r2), this.update(c2);
    }
  }
  get() {
    let { v0l: e2, v0h: n3, v1l: r2, v1h: o2, v2l: s2, v2h: i2, v3l: c2, v3h: f3, v4l: u2, v4h: a2, v5l: l2, v5h: d5, v6l: h3, v6h: y4, v7l: m5, v7h: v2 } = this;
    return [e2, n3, r2, o2, s2, i2, c2, f3, u2, a2, l2, d5, h3, y4, m5, v2];
  }
  set(e2, n3, r2, o2, s2, i2, c2, f3, u2, a2, l2, d5, h3, y4, m5, v2) {
    this.v0l = e2 | 0, this.v0h = n3 | 0, this.v1l = r2 | 0, this.v1h = o2 | 0, this.v2l = s2 | 0, this.v2h = i2 | 0, this.v3l = c2 | 0, this.v3h = f3 | 0, this.v4l = u2 | 0, this.v4h = a2 | 0, this.v5l = l2 | 0, this.v5h = d5 | 0, this.v6l = h3 | 0, this.v6h = y4 | 0, this.v7l = m5 | 0, this.v7h = v2 | 0;
  }
  compress(e2, n3, r2) {
    this.get().forEach((f3, u2) => S$4[u2] = f3), S$4.set(z$4, 16);
    let { h: o2, l: s2 } = Ur$1(BigInt(this.length));
    S$4[24] = z$4[8] ^ s2, S$4[25] = z$4[9] ^ o2, r2 && (S$4[28] = ~S$4[28], S$4[29] = ~S$4[29]);
    let i2 = 0;
    const c2 = yc;
    for (let f3 = 0; f3 < 12; f3++) jt$2(0, 4, 8, 12, e2, n3 + 2 * c2[i2++]), Lt$2(0, 4, 8, 12, e2, n3 + 2 * c2[i2++]), jt$2(1, 5, 9, 13, e2, n3 + 2 * c2[i2++]), Lt$2(1, 5, 9, 13, e2, n3 + 2 * c2[i2++]), jt$2(2, 6, 10, 14, e2, n3 + 2 * c2[i2++]), Lt$2(2, 6, 10, 14, e2, n3 + 2 * c2[i2++]), jt$2(3, 7, 11, 15, e2, n3 + 2 * c2[i2++]), Lt$2(3, 7, 11, 15, e2, n3 + 2 * c2[i2++]), jt$2(0, 5, 10, 15, e2, n3 + 2 * c2[i2++]), Lt$2(0, 5, 10, 15, e2, n3 + 2 * c2[i2++]), jt$2(1, 6, 11, 12, e2, n3 + 2 * c2[i2++]), Lt$2(1, 6, 11, 12, e2, n3 + 2 * c2[i2++]), jt$2(2, 7, 8, 13, e2, n3 + 2 * c2[i2++]), Lt$2(2, 7, 8, 13, e2, n3 + 2 * c2[i2++]), jt$2(3, 4, 9, 14, e2, n3 + 2 * c2[i2++]), Lt$2(3, 4, 9, 14, e2, n3 + 2 * c2[i2++]);
    this.v0l ^= S$4[0] ^ S$4[16], this.v0h ^= S$4[1] ^ S$4[17], this.v1l ^= S$4[2] ^ S$4[18], this.v1h ^= S$4[3] ^ S$4[19], this.v2l ^= S$4[4] ^ S$4[20], this.v2h ^= S$4[5] ^ S$4[21], this.v3l ^= S$4[6] ^ S$4[22], this.v3h ^= S$4[7] ^ S$4[23], this.v4l ^= S$4[8] ^ S$4[24], this.v4h ^= S$4[9] ^ S$4[25], this.v5l ^= S$4[10] ^ S$4[26], this.v5h ^= S$4[11] ^ S$4[27], this.v6l ^= S$4[12] ^ S$4[28], this.v6h ^= S$4[13] ^ S$4[29], this.v7l ^= S$4[14] ^ S$4[30], this.v7h ^= S$4[15] ^ S$4[31], lt$1(S$4);
  }
  destroy() {
    this.destroyed = true, lt$1(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const xc = zi$1((t2) => new vc(t2)), Ec = "https://rpc.walletconnect.org/v1";
function hn$1(t2) {
  const e2 = `Ethereum Signed Message:
${t2.length}`, n3 = new TextEncoder().encode(e2 + t2);
  return "0x" + Buffer.from(oc(n3)).toString("hex");
}
async function Zr$1(t2, e2, n3, r2, o2, s2) {
  switch (n3.t) {
    case "eip191":
      return await Gr$1(t2, e2, n3.s);
    case "eip1271":
      return await zr$1(t2, e2, n3.s, r2, o2, s2);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n3.t}`);
  }
}
async function Gr$1(t2, e2, n3) {
  return (await recoverAddress({ hash: hn$1(e2), signature: n3 })).toLowerCase() === t2.toLowerCase();
}
async function zr$1(t2, e2, n3, r2, o2, s2) {
  const i2 = Je$2(r2);
  if (!i2.namespace || !i2.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r2}`);
  try {
    const c2 = "0x1626ba7e", f3 = "0000000000000000000000000000000000000000000000000000000000000040", u2 = n3.substring(2), a2 = (u2.length / 2).toString(16).padStart(64, "0"), l2 = (e2.startsWith("0x") ? e2 : hn$1(e2)).substring(2), d5 = c2 + l2 + f3 + a2 + u2, h3 = await fetch(`${s2 || Ec}/?chainId=${r2}&projectId=${o2}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: Bc(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t2, data: d5 }, "latest"] }) }), { result: y4 } = await h3.json();
    return y4 ? y4.slice(0, c2.length).toLowerCase() === c2.toLowerCase() : false;
  } catch (c2) {
    return console.error("isValidEip1271Signature: ", c2), false;
  }
}
function Bc() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Ac(t2) {
  const e2 = atob(t2), n3 = new Uint8Array(e2.length);
  for (let i2 = 0; i2 < e2.length; i2++) n3[i2] = e2.charCodeAt(i2);
  const r2 = n3[0];
  if (r2 === 0) throw new Error("No signatures found");
  const o2 = 1 + r2 * 64;
  if (n3.length < o2) throw new Error("Transaction data too short for claimed signature count");
  if (n3.length < 100) throw new Error("Transaction too short");
  const s2 = Buffer.from(t2, "base64").slice(1, 65);
  return bs58.encode(s2);
}
function Ic(t2) {
  const e2 = new Uint8Array(Buffer.from(t2, "base64")), n3 = Array.from("TransactionData::").map((s2) => s2.charCodeAt(0)), r2 = new Uint8Array(n3.length + e2.length);
  r2.set(n3), r2.set(e2, n3.length);
  const o2 = xc(r2, { dkLen: 32 });
  return bs58.encode(o2);
}
function Sc(t2) {
  const e2 = new Uint8Array($e$2(Yr$1(t2)));
  return bs58.encode(e2);
}
function Yr$1(t2) {
  if (t2 instanceof Uint8Array) return t2;
  if (Array.isArray(t2)) return new Uint8Array(t2);
  if (typeof t2 == "object" && t2 != null && t2.data) return new Uint8Array(Object.values(t2.data));
  if (typeof t2 == "object" && t2) return new Uint8Array(Object.values(t2));
  throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function Oc(t2) {
  const e2 = Buffer.from(t2, "base64"), n3 = decode(e2).txn;
  if (!n3) throw new Error("Invalid signed transaction: missing 'txn' field");
  const r2 = encode(n3), o2 = Buffer.from("TX"), s2 = Buffer.concat([o2, Buffer.from(r2)]), i2 = bc(s2);
  return base32.encode(i2).replace(/=+$/, "");
}
function pn$1(t2) {
  const e2 = [];
  let n3 = BigInt(t2);
  for (; n3 >= BigInt(128); ) e2.push(Number(n3 & BigInt(127) | BigInt(128))), n3 >>= BigInt(7);
  return e2.push(Number(n3)), Buffer.from(e2);
}
function Nc(t2) {
  const e2 = Buffer.from(t2.signed.bodyBytes, "base64"), n3 = Buffer.from(t2.signed.authInfoBytes, "base64"), r2 = Buffer.from(t2.signature.signature, "base64"), o2 = [];
  o2.push(Buffer.from([10])), o2.push(pn$1(e2.length)), o2.push(e2), o2.push(Buffer.from([18])), o2.push(pn$1(n3.length)), o2.push(n3), o2.push(Buffer.from([26])), o2.push(pn$1(r2.length)), o2.push(r2);
  const s2 = Buffer.concat(o2), i2 = $e$2(s2);
  return Buffer.from(i2).toString("hex").toUpperCase();
}
function Uc(t2) {
  var e2, n3;
  const r2 = [];
  try {
    if (typeof t2 == "string") return r2.push(t2), r2;
    if (typeof t2 != "object") return r2;
    t2 != null && t2.id && r2.push(t2.id);
    const o2 = (n3 = (e2 = t2 == null ? void 0 : t2.capabilities) == null ? void 0 : e2.caip345) == null ? void 0 : n3.transactionHashes;
    o2 && r2.push(...o2);
  } catch (o2) {
    console.warn("getWalletSendCallsHashes failed: ", o2);
  }
  return r2;
}
var _c = Object.defineProperty, Rc = Object.defineProperties, $c = Object.getOwnPropertyDescriptors, Wr$1 = Object.getOwnPropertySymbols, Tc = Object.prototype.hasOwnProperty, Cc = Object.prototype.propertyIsEnumerable, Xr$1 = (t2, e2, n3) => e2 in t2 ? _c(t2, e2, { enumerable: true, configurable: true, writable: true, value: n3 }) : t2[e2] = n3, gn$1 = (t2, e2) => {
  for (var n3 in e2 || (e2 = {})) Tc.call(e2, n3) && Xr$1(t2, n3, e2[n3]);
  if (Wr$1) for (var n3 of Wr$1(e2)) Cc.call(e2, n3) && Xr$1(t2, n3, e2[n3]);
  return t2;
}, Jr$1 = (t2, e2) => Rc(t2, $c(e2));
const jc = "did:pkh:", Te$1 = (t2) => t2 == null ? void 0 : t2.split(":"), Qr$1 = (t2) => {
  const e2 = t2 && Te$1(t2);
  if (e2) return t2.includes(jc) ? e2[3] : e2[1];
}, to$1 = (t2) => {
  const e2 = t2 && Te$1(t2);
  if (e2) return e2[2] + ":" + e2[3];
}, bn$1 = (t2) => {
  const e2 = t2 && Te$1(t2);
  if (e2) return e2.pop();
};
async function Lc(t2) {
  const { cacao: e2, projectId: n3 } = t2, { s: r2, p: o2 } = e2, s2 = eo$1(o2, o2.iss), i2 = bn$1(o2.iss);
  return await Zr$1(i2, s2, r2, to$1(o2.iss), n3);
}
const eo$1 = (t2, e2) => {
  const n3 = `${t2.domain} wants you to sign in with your Ethereum account:`, r2 = bn$1(e2);
  if (!t2.aud && !t2.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o2 = t2.statement || void 0;
  const s2 = `URI: ${t2.aud || t2.uri}`, i2 = `Version: ${t2.version}`, c2 = `Chain ID: ${Qr$1(e2)}`, f3 = `Nonce: ${t2.nonce}`, u2 = `Issued At: ${t2.iat}`, a2 = t2.exp ? `Expiration Time: ${t2.exp}` : void 0, l2 = t2.nbf ? `Not Before: ${t2.nbf}` : void 0, d5 = t2.requestId ? `Request ID: ${t2.requestId}` : void 0, h3 = t2.resources ? `Resources:${t2.resources.map((m5) => `
- ${m5}`).join("")}` : void 0, y4 = je(t2.resources);
  if (y4) {
    const m5 = kt$2(y4);
    o2 = wn$1(o2, m5);
  }
  return [n3, r2, "", o2, "", s2, i2, c2, f3, u2, a2, l2, d5, h3].filter((m5) => m5 != null).join(`
`);
};
function so$1(t2) {
  return Buffer.from(JSON.stringify(t2)).toString("base64");
}
function io$1(t2) {
  return JSON.parse(Buffer.from(t2, "base64").toString("utf-8"));
}
function yt$2(t2) {
  if (!t2) throw new Error("No recap provided, value is undefined");
  if (!t2.att) throw new Error("No `att` property found");
  const e2 = Object.keys(t2.att);
  if (!(e2 != null && e2.length)) throw new Error("No resources found in `att` property");
  e2.forEach((n3) => {
    const r2 = t2.att[n3];
    if (Array.isArray(r2)) throw new Error(`Resource must be an object: ${n3}`);
    if (typeof r2 != "object") throw new Error(`Resource must be an object: ${n3}`);
    if (!Object.keys(r2).length) throw new Error(`Resource object is empty: ${n3}`);
    Object.keys(r2).forEach((o2) => {
      const s2 = r2[o2];
      if (!Array.isArray(s2)) throw new Error(`Ability limits ${o2} must be an array of objects, found: ${s2}`);
      if (!s2.length) throw new Error(`Value of ${o2} is empty array, must be an array with objects`);
      s2.forEach((i2) => {
        if (typeof i2 != "object") throw new Error(`Ability limits (${o2}) must be an array of objects, found: ${i2}`);
      });
    });
  });
}
function co$1(t2, e2, n3, r2 = {}) {
  return n3 == null ? void 0 : n3.sort((o2, s2) => o2.localeCompare(s2)), { att: { [t2]: yn$1(e2, n3, r2) } };
}
function yn$1(t2, e2, n3 = {}) {
  e2 = e2 == null ? void 0 : e2.sort((o2, s2) => o2.localeCompare(s2));
  const r2 = e2.map((o2) => ({ [`${t2}/${o2}`]: [n3] }));
  return Object.assign({}, ...r2);
}
function Ce(t2) {
  return yt$2(t2), `urn:recap:${so$1(t2).replace(/=/g, "")}`;
}
function kt$2(t2) {
  const e2 = io$1(t2.replace("urn:recap:", ""));
  return yt$2(e2), e2;
}
function Vc(t2, e2, n3) {
  const r2 = co$1(t2, e2, n3);
  return Ce(r2);
}
function mn$1(t2) {
  return t2 && t2.includes("urn:recap:");
}
function Mc(t2, e2) {
  const n3 = kt$2(t2), r2 = kt$2(e2), o2 = ao$1(n3, r2);
  return Ce(o2);
}
function ao$1(t2, e2) {
  yt$2(t2), yt$2(e2);
  const n3 = Object.keys(t2.att).concat(Object.keys(e2.att)).sort((o2, s2) => o2.localeCompare(s2)), r2 = { att: {} };
  return n3.forEach((o2) => {
    var s2, i2;
    Object.keys(((s2 = t2.att) == null ? void 0 : s2[o2]) || {}).concat(Object.keys(((i2 = e2.att) == null ? void 0 : i2[o2]) || {})).sort((c2, f3) => c2.localeCompare(f3)).forEach((c2) => {
      var f3, u2;
      r2.att[o2] = Jr$1(gn$1({}, r2.att[o2]), { [c2]: ((f3 = t2.att[o2]) == null ? void 0 : f3[c2]) || ((u2 = e2.att[o2]) == null ? void 0 : u2[c2]) });
    });
  }), r2;
}
function wn$1(t2 = "", e2) {
  yt$2(e2);
  const n3 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t2.includes(n3)) return t2;
  const r2 = [];
  let o2 = 0;
  Object.keys(e2.att).forEach((c2) => {
    const f3 = Object.keys(e2.att[c2]).map((l2) => ({ ability: l2.split("/")[0], action: l2.split("/")[1] }));
    f3.sort((l2, d5) => l2.action.localeCompare(d5.action));
    const u2 = {};
    f3.forEach((l2) => {
      u2[l2.ability] || (u2[l2.ability] = []), u2[l2.ability].push(l2.action);
    });
    const a2 = Object.keys(u2).map((l2) => (o2++, `(${o2}) '${l2}': '${u2[l2].join("', '")}' for '${c2}'.`));
    r2.push(a2.join(", ").replace(".,", "."));
  });
  const s2 = r2.join(" "), i2 = `${n3}${s2}`;
  return `${t2 ? t2 + " " : ""}${i2}`;
}
function Kc(t2) {
  var e2;
  const n3 = kt$2(t2);
  yt$2(n3);
  const r2 = (e2 = n3.att) == null ? void 0 : e2.eip155;
  return r2 ? Object.keys(r2).map((o2) => o2.split("/")[1]) : [];
}
function qc(t2) {
  const e2 = kt$2(t2);
  yt$2(e2);
  const n3 = [];
  return Object.values(e2.att).forEach((r2) => {
    Object.values(r2).forEach((o2) => {
      var s2;
      (s2 = o2 == null ? void 0 : o2[0]) != null && s2.chains && n3.push(o2[0].chains);
    });
  }), [...new Set(n3.flat())];
}
function je(t2) {
  if (!t2) return;
  const e2 = t2 == null ? void 0 : t2[t2.length - 1];
  return mn$1(e2) ? e2 : void 0;
}
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
function lo$1(t2) {
  return t2 instanceof Uint8Array || ArrayBuffer.isView(t2) && t2.constructor.name === "Uint8Array";
}
function vn$1(t2) {
  if (typeof t2 != "boolean") throw new Error(`boolean expected, not ${t2}`);
}
function xn$1(t2) {
  if (!Number.isSafeInteger(t2) || t2 < 0) throw new Error("positive integer expected, got " + t2);
}
function ot$1(t2, ...e2) {
  if (!lo$1(t2)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t2.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t2.length);
}
function ho$1(t2, e2 = true) {
  if (t2.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t2.finished) throw new Error("Hash#digest() has already been called");
}
function Fc(t2, e2) {
  ot$1(t2);
  const n3 = e2.outputLen;
  if (t2.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
function Pt$2(t2) {
  return new Uint32Array(t2.buffer, t2.byteOffset, Math.floor(t2.byteLength / 4));
}
function Qt$2(...t2) {
  for (let e2 = 0; e2 < t2.length; e2++) t2[e2].fill(0);
}
function Zc(t2) {
  return new DataView(t2.buffer, t2.byteOffset, t2.byteLength);
}
const Gc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function zc(t2) {
  if (typeof t2 != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t2));
}
function En$1(t2) {
  if (typeof t2 == "string") t2 = zc(t2);
  else if (lo$1(t2)) t2 = Bn$1(t2);
  else throw new Error("Uint8Array expected, got " + typeof t2);
  return t2;
}
function Yc(t2, e2) {
  if (e2 == null || typeof e2 != "object") throw new Error("options must be defined");
  return Object.assign(t2, e2);
}
function Wc(t2, e2) {
  if (t2.length !== e2.length) return false;
  let n3 = 0;
  for (let r2 = 0; r2 < t2.length; r2++) n3 |= t2[r2] ^ e2[r2];
  return n3 === 0;
}
const Xc = (t2, e2) => {
  function n3(r2, ...o2) {
    if (ot$1(r2), !Gc) throw new Error("Non little-endian hardware is not yet supported");
    if (t2.nonceLength !== void 0) {
      const a2 = o2[0];
      if (!a2) throw new Error("nonce / iv required");
      t2.varSizeNonce ? ot$1(a2) : ot$1(a2, t2.nonceLength);
    }
    const s2 = t2.tagLength;
    s2 && o2[1] !== void 0 && ot$1(o2[1]);
    const i2 = e2(r2, ...o2), c2 = (a2, l2) => {
      if (l2 !== void 0) {
        if (a2 !== 2) throw new Error("cipher output not supported");
        ot$1(l2);
      }
    };
    let f3 = false;
    return { encrypt(a2, l2) {
      if (f3) throw new Error("cannot encrypt() twice with same key + nonce");
      return f3 = true, ot$1(a2), c2(i2.encrypt.length, l2), i2.encrypt(a2, l2);
    }, decrypt(a2, l2) {
      if (ot$1(a2), s2 && a2.length < s2) throw new Error("invalid ciphertext length: smaller than tagLength=" + s2);
      return c2(i2.decrypt.length, l2), i2.decrypt(a2, l2);
    } };
  }
  return Object.assign(n3, t2), n3;
};
function po$1(t2, e2, n3 = true) {
  if (e2 === void 0) return new Uint8Array(t2);
  if (e2.length !== t2) throw new Error("invalid output length, expected " + t2 + ", got: " + e2.length);
  if (n3 && !Qc(e2)) throw new Error("invalid output, must be aligned");
  return e2;
}
function go$1(t2, e2, n3, r2) {
  if (typeof t2.setBigUint64 == "function") return t2.setBigUint64(e2, n3, r2);
  const o2 = BigInt(32), s2 = BigInt(4294967295), i2 = Number(n3 >> o2 & s2), c2 = Number(n3 & s2), f3 = 4, u2 = 0;
  t2.setUint32(e2 + f3, i2, r2), t2.setUint32(e2 + u2, c2, r2);
}
function Jc(t2, e2, n3) {
  vn$1(n3);
  const r2 = new Uint8Array(16), o2 = Zc(r2);
  return go$1(o2, 0, BigInt(e2), n3), go$1(o2, 8, BigInt(t2), n3), r2;
}
function Qc(t2) {
  return t2.byteOffset % 4 === 0;
}
function Bn$1(t2) {
  return Uint8Array.from(t2);
}
const bo$1 = (t2) => Uint8Array.from(t2.split("").map((e2) => e2.charCodeAt(0))), tf = bo$1("expand 16-byte k"), ef = bo$1("expand 32-byte k"), nf = Pt$2(tf), rf = Pt$2(ef);
function K$1(t2, e2) {
  return t2 << e2 | t2 >>> 32 - e2;
}
function An$1(t2) {
  return t2.byteOffset % 4 === 0;
}
const Le$2 = 64, of = 16, yo$1 = 2 ** 32 - 1, mo$1 = new Uint32Array();
function sf(t2, e2, n3, r2, o2, s2, i2, c2) {
  const f3 = o2.length, u2 = new Uint8Array(Le$2), a2 = Pt$2(u2), l2 = An$1(o2) && An$1(s2), d5 = l2 ? Pt$2(o2) : mo$1, h3 = l2 ? Pt$2(s2) : mo$1;
  for (let y4 = 0; y4 < f3; i2++) {
    if (t2(e2, n3, r2, a2, i2, c2), i2 >= yo$1) throw new Error("arx: counter overflow");
    const m5 = Math.min(Le$2, f3 - y4);
    if (l2 && m5 === Le$2) {
      const v2 = y4 / 4;
      if (y4 % 4 !== 0) throw new Error("arx: invalid block position");
      for (let U2 = 0, F2; U2 < of; U2++) F2 = v2 + U2, h3[F2] = d5[F2] ^ a2[U2];
      y4 += Le$2;
      continue;
    }
    for (let v2 = 0, U2; v2 < m5; v2++) U2 = y4 + v2, s2[U2] = o2[U2] ^ u2[v2];
    y4 += m5;
  }
}
function cf(t2, e2) {
  const { allowShortKeys: n3, extendNonceFn: r2, counterLength: o2, counterRight: s2, rounds: i2 } = Yc({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, e2);
  if (typeof t2 != "function") throw new Error("core must be a function");
  return xn$1(o2), xn$1(i2), vn$1(s2), vn$1(n3), (c2, f3, u2, a2, l2 = 0) => {
    ot$1(c2), ot$1(f3), ot$1(u2);
    const d5 = u2.length;
    if (a2 === void 0 && (a2 = new Uint8Array(d5)), ot$1(a2), xn$1(l2), l2 < 0 || l2 >= yo$1) throw new Error("arx: counter overflow");
    if (a2.length < d5) throw new Error(`arx: output (${a2.length}) is shorter than data (${d5})`);
    const h3 = [];
    let y4 = c2.length, m5, v2;
    if (y4 === 32) h3.push(m5 = Bn$1(c2)), v2 = rf;
    else if (y4 === 16 && n3) m5 = new Uint8Array(32), m5.set(c2), m5.set(c2, 16), v2 = nf, h3.push(m5);
    else throw new Error(`arx: invalid 32-byte key, got length=${y4}`);
    An$1(f3) || h3.push(f3 = Bn$1(f3));
    const U2 = Pt$2(m5);
    if (r2) {
      if (f3.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r2(v2, U2, Pt$2(f3.subarray(0, 16)), U2), f3 = f3.subarray(16);
    }
    const F2 = 16 - o2;
    if (F2 !== f3.length) throw new Error(`arx: nonce must be ${F2} or 16 bytes`);
    if (F2 !== 12) {
      const Z2 = new Uint8Array(12);
      Z2.set(f3, s2 ? 0 : 12 - f3.length), f3 = Z2, h3.push(f3);
    }
    const R3 = Pt$2(f3);
    return sf(t2, v2, U2, R3, u2, a2, l2, i2), Qt$2(...h3), a2;
  };
}
const W$2 = (t2, e2) => t2[e2++] & 255 | (t2[e2++] & 255) << 8;
class ff {
  constructor(e2) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e2 = En$1(e2), ot$1(e2, 32);
    const n3 = W$2(e2, 0), r2 = W$2(e2, 2), o2 = W$2(e2, 4), s2 = W$2(e2, 6), i2 = W$2(e2, 8), c2 = W$2(e2, 10), f3 = W$2(e2, 12), u2 = W$2(e2, 14);
    this.r[0] = n3 & 8191, this.r[1] = (n3 >>> 13 | r2 << 3) & 8191, this.r[2] = (r2 >>> 10 | o2 << 6) & 7939, this.r[3] = (o2 >>> 7 | s2 << 9) & 8191, this.r[4] = (s2 >>> 4 | i2 << 12) & 255, this.r[5] = i2 >>> 1 & 8190, this.r[6] = (i2 >>> 14 | c2 << 2) & 8191, this.r[7] = (c2 >>> 11 | f3 << 5) & 8065, this.r[8] = (f3 >>> 8 | u2 << 8) & 8191, this.r[9] = u2 >>> 5 & 127;
    for (let a2 = 0; a2 < 8; a2++) this.pad[a2] = W$2(e2, 16 + 2 * a2);
  }
  process(e2, n3, r2 = false) {
    const o2 = r2 ? 0 : 2048, { h: s2, r: i2 } = this, c2 = i2[0], f3 = i2[1], u2 = i2[2], a2 = i2[3], l2 = i2[4], d5 = i2[5], h3 = i2[6], y4 = i2[7], m5 = i2[8], v2 = i2[9], U2 = W$2(e2, n3 + 0), F2 = W$2(e2, n3 + 2), R3 = W$2(e2, n3 + 4), Z2 = W$2(e2, n3 + 6), H2 = W$2(e2, n3 + 8), j2 = W$2(e2, n3 + 10), L4 = W$2(e2, n3 + 12), k2 = W$2(e2, n3 + 14);
    let O4 = s2[0] + (U2 & 8191), T2 = s2[1] + ((U2 >>> 13 | F2 << 3) & 8191), C2 = s2[2] + ((F2 >>> 10 | R3 << 6) & 8191), _2 = s2[3] + ((R3 >>> 7 | Z2 << 9) & 8191), p2 = s2[4] + ((Z2 >>> 4 | H2 << 12) & 8191), b2 = s2[5] + (H2 >>> 1 & 8191), g2 = s2[6] + ((H2 >>> 14 | j2 << 2) & 8191), x2 = s2[7] + ((j2 >>> 11 | L4 << 5) & 8191), E2 = s2[8] + ((L4 >>> 8 | k2 << 8) & 8191), A2 = s2[9] + (k2 >>> 5 | o2), w2 = 0, B4 = w2 + O4 * c2 + T2 * (5 * v2) + C2 * (5 * m5) + _2 * (5 * y4) + p2 * (5 * h3);
    w2 = B4 >>> 13, B4 &= 8191, B4 += b2 * (5 * d5) + g2 * (5 * l2) + x2 * (5 * a2) + E2 * (5 * u2) + A2 * (5 * f3), w2 += B4 >>> 13, B4 &= 8191;
    let I3 = w2 + O4 * f3 + T2 * c2 + C2 * (5 * v2) + _2 * (5 * m5) + p2 * (5 * y4);
    w2 = I3 >>> 13, I3 &= 8191, I3 += b2 * (5 * h3) + g2 * (5 * d5) + x2 * (5 * l2) + E2 * (5 * a2) + A2 * (5 * u2), w2 += I3 >>> 13, I3 &= 8191;
    let N3 = w2 + O4 * u2 + T2 * f3 + C2 * c2 + _2 * (5 * v2) + p2 * (5 * m5);
    w2 = N3 >>> 13, N3 &= 8191, N3 += b2 * (5 * y4) + g2 * (5 * h3) + x2 * (5 * d5) + E2 * (5 * l2) + A2 * (5 * a2), w2 += N3 >>> 13, N3 &= 8191;
    let D2 = w2 + O4 * a2 + T2 * u2 + C2 * f3 + _2 * c2 + p2 * (5 * v2);
    w2 = D2 >>> 13, D2 &= 8191, D2 += b2 * (5 * m5) + g2 * (5 * y4) + x2 * (5 * h3) + E2 * (5 * d5) + A2 * (5 * l2), w2 += D2 >>> 13, D2 &= 8191;
    let P3 = w2 + O4 * l2 + T2 * a2 + C2 * u2 + _2 * f3 + p2 * c2;
    w2 = P3 >>> 13, P3 &= 8191, P3 += b2 * (5 * v2) + g2 * (5 * m5) + x2 * (5 * y4) + E2 * (5 * h3) + A2 * (5 * d5), w2 += P3 >>> 13, P3 &= 8191;
    let $2 = w2 + O4 * d5 + T2 * l2 + C2 * a2 + _2 * u2 + p2 * f3;
    w2 = $2 >>> 13, $2 &= 8191, $2 += b2 * c2 + g2 * (5 * v2) + x2 * (5 * m5) + E2 * (5 * y4) + A2 * (5 * h3), w2 += $2 >>> 13, $2 &= 8191;
    let V3 = w2 + O4 * h3 + T2 * d5 + C2 * l2 + _2 * a2 + p2 * u2;
    w2 = V3 >>> 13, V3 &= 8191, V3 += b2 * f3 + g2 * c2 + x2 * (5 * v2) + E2 * (5 * m5) + A2 * (5 * y4), w2 += V3 >>> 13, V3 &= 8191;
    let q2 = w2 + O4 * y4 + T2 * h3 + C2 * d5 + _2 * l2 + p2 * a2;
    w2 = q2 >>> 13, q2 &= 8191, q2 += b2 * u2 + g2 * f3 + x2 * c2 + E2 * (5 * v2) + A2 * (5 * m5), w2 += q2 >>> 13, q2 &= 8191;
    let G2 = w2 + O4 * m5 + T2 * y4 + C2 * h3 + _2 * d5 + p2 * l2;
    w2 = G2 >>> 13, G2 &= 8191, G2 += b2 * a2 + g2 * u2 + x2 * f3 + E2 * c2 + A2 * (5 * v2), w2 += G2 >>> 13, G2 &= 8191;
    let M3 = w2 + O4 * v2 + T2 * m5 + C2 * y4 + _2 * h3 + p2 * d5;
    w2 = M3 >>> 13, M3 &= 8191, M3 += b2 * l2 + g2 * a2 + x2 * u2 + E2 * f3 + A2 * c2, w2 += M3 >>> 13, M3 &= 8191, w2 = (w2 << 2) + w2 | 0, w2 = w2 + B4 | 0, B4 = w2 & 8191, w2 = w2 >>> 13, I3 += w2, s2[0] = B4, s2[1] = I3, s2[2] = N3, s2[3] = D2, s2[4] = P3, s2[5] = $2, s2[6] = V3, s2[7] = q2, s2[8] = G2, s2[9] = M3;
  }
  finalize() {
    const { h: e2, pad: n3 } = this, r2 = new Uint16Array(10);
    let o2 = e2[1] >>> 13;
    e2[1] &= 8191;
    for (let c2 = 2; c2 < 10; c2++) e2[c2] += o2, o2 = e2[c2] >>> 13, e2[c2] &= 8191;
    e2[0] += o2 * 5, o2 = e2[0] >>> 13, e2[0] &= 8191, e2[1] += o2, o2 = e2[1] >>> 13, e2[1] &= 8191, e2[2] += o2, r2[0] = e2[0] + 5, o2 = r2[0] >>> 13, r2[0] &= 8191;
    for (let c2 = 1; c2 < 10; c2++) r2[c2] = e2[c2] + o2, o2 = r2[c2] >>> 13, r2[c2] &= 8191;
    r2[9] -= 8192;
    let s2 = (o2 ^ 1) - 1;
    for (let c2 = 0; c2 < 10; c2++) r2[c2] &= s2;
    s2 = ~s2;
    for (let c2 = 0; c2 < 10; c2++) e2[c2] = e2[c2] & s2 | r2[c2];
    e2[0] = (e2[0] | e2[1] << 13) & 65535, e2[1] = (e2[1] >>> 3 | e2[2] << 10) & 65535, e2[2] = (e2[2] >>> 6 | e2[3] << 7) & 65535, e2[3] = (e2[3] >>> 9 | e2[4] << 4) & 65535, e2[4] = (e2[4] >>> 12 | e2[5] << 1 | e2[6] << 14) & 65535, e2[5] = (e2[6] >>> 2 | e2[7] << 11) & 65535, e2[6] = (e2[7] >>> 5 | e2[8] << 8) & 65535, e2[7] = (e2[8] >>> 8 | e2[9] << 5) & 65535;
    let i2 = e2[0] + n3[0];
    e2[0] = i2 & 65535;
    for (let c2 = 1; c2 < 8; c2++) i2 = (e2[c2] + n3[c2] | 0) + (i2 >>> 16) | 0, e2[c2] = i2 & 65535;
    Qt$2(r2);
  }
  update(e2) {
    ho$1(this), e2 = En$1(e2), ot$1(e2);
    const { buffer: n3, blockLen: r2 } = this, o2 = e2.length;
    for (let s2 = 0; s2 < o2; ) {
      const i2 = Math.min(r2 - this.pos, o2 - s2);
      if (i2 === r2) {
        for (; r2 <= o2 - s2; s2 += r2) this.process(e2, s2);
        continue;
      }
      n3.set(e2.subarray(s2, s2 + i2), this.pos), this.pos += i2, s2 += i2, this.pos === r2 && (this.process(n3, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Qt$2(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e2) {
    ho$1(this), Fc(e2, this), this.finished = true;
    const { buffer: n3, h: r2 } = this;
    let { pos: o2 } = this;
    if (o2) {
      for (n3[o2++] = 1; o2 < 16; o2++) n3[o2] = 0;
      this.process(n3, 0, true);
    }
    this.finalize();
    let s2 = 0;
    for (let i2 = 0; i2 < 8; i2++) e2[s2++] = r2[i2] >>> 0, e2[s2++] = r2[i2] >>> 8;
    return e2;
  }
  digest() {
    const { buffer: e2, outputLen: n3 } = this;
    this.digestInto(e2);
    const r2 = e2.slice(0, n3);
    return this.destroy(), r2;
  }
}
function af(t2) {
  const e2 = (r2, o2) => t2(o2).update(En$1(r2)).digest(), n3 = t2(new Uint8Array(32));
  return e2.outputLen = n3.outputLen, e2.blockLen = n3.blockLen, e2.create = (r2) => t2(r2), e2;
}
const uf = af((t2) => new ff(t2));
function lf(t2, e2, n3, r2, o2, s2 = 20) {
  let i2 = t2[0], c2 = t2[1], f3 = t2[2], u2 = t2[3], a2 = e2[0], l2 = e2[1], d5 = e2[2], h3 = e2[3], y4 = e2[4], m5 = e2[5], v2 = e2[6], U2 = e2[7], F2 = o2, R3 = n3[0], Z2 = n3[1], H2 = n3[2], j2 = i2, L4 = c2, k2 = f3, O4 = u2, T2 = a2, C2 = l2, _2 = d5, p2 = h3, b2 = y4, g2 = m5, x2 = v2, E2 = U2, A2 = F2, w2 = R3, B4 = Z2, I3 = H2;
  for (let D2 = 0; D2 < s2; D2 += 2) j2 = j2 + T2 | 0, A2 = K$1(A2 ^ j2, 16), b2 = b2 + A2 | 0, T2 = K$1(T2 ^ b2, 12), j2 = j2 + T2 | 0, A2 = K$1(A2 ^ j2, 8), b2 = b2 + A2 | 0, T2 = K$1(T2 ^ b2, 7), L4 = L4 + C2 | 0, w2 = K$1(w2 ^ L4, 16), g2 = g2 + w2 | 0, C2 = K$1(C2 ^ g2, 12), L4 = L4 + C2 | 0, w2 = K$1(w2 ^ L4, 8), g2 = g2 + w2 | 0, C2 = K$1(C2 ^ g2, 7), k2 = k2 + _2 | 0, B4 = K$1(B4 ^ k2, 16), x2 = x2 + B4 | 0, _2 = K$1(_2 ^ x2, 12), k2 = k2 + _2 | 0, B4 = K$1(B4 ^ k2, 8), x2 = x2 + B4 | 0, _2 = K$1(_2 ^ x2, 7), O4 = O4 + p2 | 0, I3 = K$1(I3 ^ O4, 16), E2 = E2 + I3 | 0, p2 = K$1(p2 ^ E2, 12), O4 = O4 + p2 | 0, I3 = K$1(I3 ^ O4, 8), E2 = E2 + I3 | 0, p2 = K$1(p2 ^ E2, 7), j2 = j2 + C2 | 0, I3 = K$1(I3 ^ j2, 16), x2 = x2 + I3 | 0, C2 = K$1(C2 ^ x2, 12), j2 = j2 + C2 | 0, I3 = K$1(I3 ^ j2, 8), x2 = x2 + I3 | 0, C2 = K$1(C2 ^ x2, 7), L4 = L4 + _2 | 0, A2 = K$1(A2 ^ L4, 16), E2 = E2 + A2 | 0, _2 = K$1(_2 ^ E2, 12), L4 = L4 + _2 | 0, A2 = K$1(A2 ^ L4, 8), E2 = E2 + A2 | 0, _2 = K$1(_2 ^ E2, 7), k2 = k2 + p2 | 0, w2 = K$1(w2 ^ k2, 16), b2 = b2 + w2 | 0, p2 = K$1(p2 ^ b2, 12), k2 = k2 + p2 | 0, w2 = K$1(w2 ^ k2, 8), b2 = b2 + w2 | 0, p2 = K$1(p2 ^ b2, 7), O4 = O4 + T2 | 0, B4 = K$1(B4 ^ O4, 16), g2 = g2 + B4 | 0, T2 = K$1(T2 ^ g2, 12), O4 = O4 + T2 | 0, B4 = K$1(B4 ^ O4, 8), g2 = g2 + B4 | 0, T2 = K$1(T2 ^ g2, 7);
  let N3 = 0;
  r2[N3++] = i2 + j2 | 0, r2[N3++] = c2 + L4 | 0, r2[N3++] = f3 + k2 | 0, r2[N3++] = u2 + O4 | 0, r2[N3++] = a2 + T2 | 0, r2[N3++] = l2 + C2 | 0, r2[N3++] = d5 + _2 | 0, r2[N3++] = h3 + p2 | 0, r2[N3++] = y4 + b2 | 0, r2[N3++] = m5 + g2 | 0, r2[N3++] = v2 + x2 | 0, r2[N3++] = U2 + E2 | 0, r2[N3++] = F2 + A2 | 0, r2[N3++] = R3 + w2 | 0, r2[N3++] = Z2 + B4 | 0, r2[N3++] = H2 + I3 | 0;
}
const df = cf(lf, { counterRight: false, counterLength: 4, allowShortKeys: false }), hf = new Uint8Array(16), wo$1 = (t2, e2) => {
  t2.update(e2);
  const n3 = e2.length % 16;
  n3 && t2.update(hf.subarray(n3));
}, pf = new Uint8Array(32);
function vo$1(t2, e2, n3, r2, o2) {
  const s2 = t2(e2, n3, pf), i2 = uf.create(s2);
  o2 && wo$1(i2, o2), wo$1(i2, r2);
  const c2 = Jc(r2.length, o2 ? o2.length : 0, true);
  i2.update(c2);
  const f3 = i2.digest();
  return Qt$2(s2, c2), f3;
}
const gf = (t2) => (e2, n3, r2) => ({ encrypt(s2, i2) {
  const c2 = s2.length;
  i2 = po$1(c2 + 16, i2, false), i2.set(s2);
  const f3 = i2.subarray(0, -16);
  t2(e2, n3, f3, f3, 1);
  const u2 = vo$1(t2, e2, n3, f3, r2);
  return i2.set(u2, c2), Qt$2(u2), i2;
}, decrypt(s2, i2) {
  i2 = po$1(s2.length - 16, i2, false);
  const c2 = s2.subarray(0, -16), f3 = s2.subarray(-16), u2 = vo$1(t2, e2, n3, c2, r2);
  if (!Wc(f3, u2)) throw new Error("invalid tag");
  return i2.set(s2.subarray(0, -16)), t2(e2, n3, i2, i2, 1), Qt$2(u2), i2;
} }), xo$1 = Xc({ blockSize: 64, nonceLength: 12, tagLength: 16 }, gf(df));
let Eo$1 = class Eo extends Re {
  constructor(e2, n3) {
    super(), this.finished = false, this.destroyed = false, Ue$2(e2);
    const r2 = pt$1(n3);
    if (this.iHash = e2.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o2 = this.blockLen, s2 = new Uint8Array(o2);
    s2.set(r2.length > o2 ? e2.create().update(r2).digest() : r2);
    for (let i2 = 0; i2 < s2.length; i2++) s2[i2] ^= 54;
    this.iHash.update(s2), this.oHash = e2.create();
    for (let i2 = 0; i2 < s2.length; i2++) s2[i2] ^= 106;
    this.oHash.update(s2), lt$1(s2);
  }
  update(e2) {
    return Nt$2(this), this.iHash.update(e2), this;
  }
  digestInto(e2) {
    Nt$2(this), ht$1(e2, this.outputLen), this.finished = true, this.iHash.digestInto(e2), this.oHash.update(e2), this.oHash.digestInto(e2), this.destroy();
  }
  digest() {
    const e2 = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e2), e2;
  }
  _cloneInto(e2) {
    e2 || (e2 = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n3, iHash: r2, finished: o2, destroyed: s2, blockLen: i2, outputLen: c2 } = this;
    return e2 = e2, e2.finished = o2, e2.destroyed = s2, e2.blockLen = i2, e2.outputLen = c2, e2.oHash = n3._cloneInto(e2.oHash), e2.iHash = r2._cloneInto(e2.iHash), e2;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
const ke$2 = (t2, e2, n3) => new Eo$1(t2, e2).update(n3).digest();
ke$2.create = (t2, e2) => new Eo$1(t2, e2);
function bf(t2, e2, n3) {
  return Ue$2(t2), n3 === void 0 && (n3 = new Uint8Array(t2.outputLen)), ke$2(t2, pt$1(n3), pt$1(e2));
}
const In$1 = Uint8Array.from([0]), Bo$1 = Uint8Array.of();
function yf(t2, e2, n3, r2 = 32) {
  Ue$2(t2), mt$2(r2);
  const o2 = t2.outputLen;
  if (r2 > 255 * o2) throw new Error("Length should be <= 255*HashLen");
  const s2 = Math.ceil(r2 / o2);
  n3 === void 0 && (n3 = Bo$1);
  const i2 = new Uint8Array(s2 * o2), c2 = ke$2.create(t2, e2), f3 = c2._cloneInto(), u2 = new Uint8Array(c2.outputLen);
  for (let a2 = 0; a2 < s2; a2++) In$1[0] = a2 + 1, f3.update(a2 === 0 ? Bo$1 : u2).update(n3).update(In$1).digestInto(u2), i2.set(u2, o2 * a2), c2._cloneInto(f3);
  return c2.destroy(), f3.destroy(), lt$1(u2, In$1), i2.slice(0, r2);
}
const mf = (t2, e2, n3, r2, o2) => yf(t2, bf(t2, e2, n3), r2, o2), Pe$2 = $e$2, Sn$1 = BigInt(0), On$1 = BigInt(1);
function He$2(t2, e2 = "") {
  if (typeof t2 != "boolean") {
    const n3 = e2 && `"${e2}"`;
    throw new Error(n3 + "expected boolean, got type=" + typeof t2);
  }
  return t2;
}
function Kt$2(t2, e2, n3 = "") {
  const r2 = Ne(t2), o2 = t2 == null ? void 0 : t2.length, s2 = e2 !== void 0;
  if (!r2 || s2 && o2 !== e2) {
    const i2 = n3 && `"${n3}" `, c2 = s2 ? ` of length ${e2}` : "", f3 = r2 ? `length=${o2}` : `type=${typeof t2}`;
    throw new Error(i2 + "expected Uint8Array" + c2 + ", got " + f3);
  }
  return t2;
}
function De$2(t2) {
  const e2 = t2.toString(16);
  return e2.length & 1 ? "0" + e2 : e2;
}
function Ao$1(t2) {
  if (typeof t2 != "string") throw new Error("hex string expected, got " + typeof t2);
  return t2 === "" ? Sn$1 : BigInt("0x" + t2);
}
function Ve$3(t2) {
  return Ao$1(Jt$2(t2));
}
function Me$3(t2) {
  return ht$1(t2), Ao$1(Jt$2(Uint8Array.from(t2).reverse()));
}
function Nn$1(t2, e2) {
  return _e$1(t2.toString(16).padStart(e2 * 2, "0"));
}
function Un$1(t2, e2) {
  return Nn$1(t2, e2).reverse();
}
function tt$2(t2, e2, n3) {
  let r2;
  if (typeof e2 == "string") try {
    r2 = _e$1(e2);
  } catch (s2) {
    throw new Error(t2 + " must be hex string or Uint8Array, cause: " + s2);
  }
  else if (Ne(e2)) r2 = Uint8Array.from(e2);
  else throw new Error(t2 + " must be hex string or Uint8Array");
  const o2 = r2.length;
  if (typeof n3 == "number" && o2 !== n3) throw new Error(t2 + " of length " + n3 + " expected, got " + o2);
  return r2;
}
const _n$1 = (t2) => typeof t2 == "bigint" && Sn$1 <= t2;
function wf(t2, e2, n3) {
  return _n$1(t2) && _n$1(e2) && _n$1(n3) && e2 <= t2 && t2 < n3;
}
function Rn$1(t2, e2, n3, r2) {
  if (!wf(e2, n3, r2)) throw new Error("expected valid " + t2 + ": " + n3 + " <= n < " + r2 + ", got " + e2);
}
function Io$1(t2) {
  let e2;
  for (e2 = 0; t2 > Sn$1; t2 >>= On$1, e2 += 1) ;
  return e2;
}
const ye$2 = (t2) => (On$1 << BigInt(t2)) - On$1;
function vf(t2, e2, n3) {
  if (typeof t2 != "number" || t2 < 2) throw new Error("hashLen must be a number");
  if (typeof e2 != "number" || e2 < 2) throw new Error("qByteLen must be a number");
  if (typeof n3 != "function") throw new Error("hmacFn must be a function");
  const r2 = (h3) => new Uint8Array(h3), o2 = (h3) => Uint8Array.of(h3);
  let s2 = r2(t2), i2 = r2(t2), c2 = 0;
  const f3 = () => {
    s2.fill(1), i2.fill(0), c2 = 0;
  }, u2 = (...h3) => n3(i2, s2, ...h3), a2 = (h3 = r2(0)) => {
    i2 = u2(o2(0), h3), s2 = u2(), h3.length !== 0 && (i2 = u2(o2(1), h3), s2 = u2());
  }, l2 = () => {
    if (c2++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let h3 = 0;
    const y4 = [];
    for (; h3 < e2; ) {
      s2 = u2();
      const m5 = s2.slice();
      y4.push(m5), h3 += s2.length;
    }
    return _t$2(...y4);
  };
  return (h3, y4) => {
    f3(), a2(h3);
    let m5;
    for (; !(m5 = y4(l2())); ) a2();
    return f3(), m5;
  };
}
function Ke$3(t2, e2, n3 = {}) {
  if (!t2 || typeof t2 != "object") throw new Error("expected valid options object");
  function r2(o2, s2, i2) {
    const c2 = t2[o2];
    if (i2 && c2 === void 0) return;
    const f3 = typeof c2;
    if (f3 !== s2 || c2 === null) throw new Error(`param "${o2}" is invalid: expected ${s2}, got ${f3}`);
  }
  Object.entries(e2).forEach(([o2, s2]) => r2(o2, s2, false)), Object.entries(n3).forEach(([o2, s2]) => r2(o2, s2, true));
}
function So$1(t2) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n3, ...r2) => {
    const o2 = e2.get(n3);
    if (o2 !== void 0) return o2;
    const s2 = t2(n3, ...r2);
    return e2.set(n3, s2), s2;
  };
}
const st$1 = BigInt(0), nt$1 = BigInt(1), qt$2 = BigInt(2), Oo$1 = BigInt(3), No$1 = BigInt(4), Uo$1 = BigInt(5), xf = BigInt(7), _o$1 = BigInt(8), Ef = BigInt(9), Ro$1 = BigInt(16);
function ct$1(t2, e2) {
  const n3 = t2 % e2;
  return n3 >= st$1 ? n3 : e2 + n3;
}
function gt$2(t2, e2, n3) {
  let r2 = t2;
  for (; e2-- > st$1; ) r2 *= r2, r2 %= n3;
  return r2;
}
function $o$1(t2, e2) {
  if (t2 === st$1) throw new Error("invert: expected non-zero number");
  if (e2 <= st$1) throw new Error("invert: expected positive modulus, got " + e2);
  let n3 = ct$1(t2, e2), r2 = e2, o2 = st$1, s2 = nt$1;
  for (; n3 !== st$1; ) {
    const c2 = r2 / n3, f3 = r2 % n3, u2 = o2 - s2 * c2;
    r2 = n3, n3 = f3, o2 = s2, s2 = u2;
  }
  if (r2 !== nt$1) throw new Error("invert: does not exist");
  return ct$1(o2, e2);
}
function $n$1(t2, e2, n3) {
  if (!t2.eql(t2.sqr(e2), n3)) throw new Error("Cannot find square root");
}
function To$1(t2, e2) {
  const n3 = (t2.ORDER + nt$1) / No$1, r2 = t2.pow(e2, n3);
  return $n$1(t2, r2, e2), r2;
}
function Bf(t2, e2) {
  const n3 = (t2.ORDER - Uo$1) / _o$1, r2 = t2.mul(e2, qt$2), o2 = t2.pow(r2, n3), s2 = t2.mul(e2, o2), i2 = t2.mul(t2.mul(s2, qt$2), o2), c2 = t2.mul(s2, t2.sub(i2, t2.ONE));
  return $n$1(t2, c2, e2), c2;
}
function Af(t2) {
  const e2 = Ht$2(t2), n3 = Co$1(t2), r2 = n3(e2, e2.neg(e2.ONE)), o2 = n3(e2, r2), s2 = n3(e2, e2.neg(r2)), i2 = (t2 + xf) / Ro$1;
  return (c2, f3) => {
    let u2 = c2.pow(f3, i2), a2 = c2.mul(u2, r2);
    const l2 = c2.mul(u2, o2), d5 = c2.mul(u2, s2), h3 = c2.eql(c2.sqr(a2), f3), y4 = c2.eql(c2.sqr(l2), f3);
    u2 = c2.cmov(u2, a2, h3), a2 = c2.cmov(d5, l2, y4);
    const m5 = c2.eql(c2.sqr(a2), f3), v2 = c2.cmov(u2, a2, m5);
    return $n$1(c2, v2, f3), v2;
  };
}
function Co$1(t2) {
  if (t2 < Oo$1) throw new Error("sqrt is not defined for small field");
  let e2 = t2 - nt$1, n3 = 0;
  for (; e2 % qt$2 === st$1; ) e2 /= qt$2, n3++;
  let r2 = qt$2;
  const o2 = Ht$2(t2);
  for (; Lo$1(o2, r2) === 1; ) if (r2++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (n3 === 1) return To$1;
  let s2 = o2.pow(r2, e2);
  const i2 = (e2 + nt$1) / qt$2;
  return function(f3, u2) {
    if (f3.is0(u2)) return u2;
    if (Lo$1(f3, u2) !== 1) throw new Error("Cannot find square root");
    let a2 = n3, l2 = f3.mul(f3.ONE, s2), d5 = f3.pow(u2, e2), h3 = f3.pow(u2, i2);
    for (; !f3.eql(d5, f3.ONE); ) {
      if (f3.is0(d5)) return f3.ZERO;
      let y4 = 1, m5 = f3.sqr(d5);
      for (; !f3.eql(m5, f3.ONE); ) if (y4++, m5 = f3.sqr(m5), y4 === a2) throw new Error("Cannot find square root");
      const v2 = nt$1 << BigInt(a2 - y4 - 1), U2 = f3.pow(l2, v2);
      a2 = y4, l2 = f3.sqr(U2), d5 = f3.mul(d5, l2), h3 = f3.mul(h3, U2);
    }
    return h3;
  };
}
function If(t2) {
  return t2 % No$1 === Oo$1 ? To$1 : t2 % _o$1 === Uo$1 ? Bf : t2 % Ro$1 === Ef ? Af(t2) : Co$1(t2);
}
const Sf = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Of(t2) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, n3 = Sf.reduce((r2, o2) => (r2[o2] = "function", r2), e2);
  return Ke$3(t2, n3), t2;
}
function Nf(t2, e2, n3) {
  if (n3 < st$1) throw new Error("invalid exponent, negatives unsupported");
  if (n3 === st$1) return t2.ONE;
  if (n3 === nt$1) return e2;
  let r2 = t2.ONE, o2 = e2;
  for (; n3 > st$1; ) n3 & nt$1 && (r2 = t2.mul(r2, o2)), o2 = t2.sqr(o2), n3 >>= nt$1;
  return r2;
}
function jo$1(t2, e2, n3 = false) {
  const r2 = new Array(e2.length).fill(n3 ? t2.ZERO : void 0), o2 = e2.reduce((i2, c2, f3) => t2.is0(c2) ? i2 : (r2[f3] = i2, t2.mul(i2, c2)), t2.ONE), s2 = t2.inv(o2);
  return e2.reduceRight((i2, c2, f3) => t2.is0(c2) ? i2 : (r2[f3] = t2.mul(i2, r2[f3]), t2.mul(i2, c2)), s2), r2;
}
function Lo$1(t2, e2) {
  const n3 = (t2.ORDER - nt$1) / qt$2, r2 = t2.pow(e2, n3), o2 = t2.eql(r2, t2.ONE), s2 = t2.eql(r2, t2.ZERO), i2 = t2.eql(r2, t2.neg(t2.ONE));
  if (!o2 && !s2 && !i2) throw new Error("invalid Legendre symbol result");
  return o2 ? 1 : s2 ? 0 : -1;
}
function ko$1(t2, e2) {
  e2 !== void 0 && mt$2(e2);
  const n3 = e2 !== void 0 ? e2 : t2.toString(2).length, r2 = Math.ceil(n3 / 8);
  return { nBitLength: n3, nByteLength: r2 };
}
function Ht$2(t2, e2, n3 = false, r2 = {}) {
  if (t2 <= st$1) throw new Error("invalid field: expected ORDER > 0, got " + t2);
  let o2, s2, i2 = false, c2;
  if (typeof e2 == "object" && e2 != null) {
    if (r2.sqrt || n3) throw new Error("cannot specify opts in two arguments");
    const d5 = e2;
    d5.BITS && (o2 = d5.BITS), d5.sqrt && (s2 = d5.sqrt), typeof d5.isLE == "boolean" && (n3 = d5.isLE), typeof d5.modFromBytes == "boolean" && (i2 = d5.modFromBytes), c2 = d5.allowedLengths;
  } else typeof e2 == "number" && (o2 = e2), r2.sqrt && (s2 = r2.sqrt);
  const { nBitLength: f3, nByteLength: u2 } = ko$1(t2, o2);
  if (u2 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a2;
  const l2 = Object.freeze({ ORDER: t2, isLE: n3, BITS: f3, BYTES: u2, MASK: ye$2(f3), ZERO: st$1, ONE: nt$1, allowedLengths: c2, create: (d5) => ct$1(d5, t2), isValid: (d5) => {
    if (typeof d5 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof d5);
    return st$1 <= d5 && d5 < t2;
  }, is0: (d5) => d5 === st$1, isValidNot0: (d5) => !l2.is0(d5) && l2.isValid(d5), isOdd: (d5) => (d5 & nt$1) === nt$1, neg: (d5) => ct$1(-d5, t2), eql: (d5, h3) => d5 === h3, sqr: (d5) => ct$1(d5 * d5, t2), add: (d5, h3) => ct$1(d5 + h3, t2), sub: (d5, h3) => ct$1(d5 - h3, t2), mul: (d5, h3) => ct$1(d5 * h3, t2), pow: (d5, h3) => Nf(l2, d5, h3), div: (d5, h3) => ct$1(d5 * $o$1(h3, t2), t2), sqrN: (d5) => d5 * d5, addN: (d5, h3) => d5 + h3, subN: (d5, h3) => d5 - h3, mulN: (d5, h3) => d5 * h3, inv: (d5) => $o$1(d5, t2), sqrt: s2 || ((d5) => (a2 || (a2 = If(t2)), a2(l2, d5))), toBytes: (d5) => n3 ? Un$1(d5, u2) : Nn$1(d5, u2), fromBytes: (d5, h3 = true) => {
    if (c2) {
      if (!c2.includes(d5.length) || d5.length > u2) throw new Error("Field.fromBytes: expected " + c2 + " bytes, got " + d5.length);
      const m5 = new Uint8Array(u2);
      m5.set(d5, n3 ? 0 : m5.length - d5.length), d5 = m5;
    }
    if (d5.length !== u2) throw new Error("Field.fromBytes: expected " + u2 + " bytes, got " + d5.length);
    let y4 = n3 ? Me$3(d5) : Ve$3(d5);
    if (i2 && (y4 = ct$1(y4, t2)), !h3 && !l2.isValid(y4)) throw new Error("invalid field element: outside of range 0..ORDER");
    return y4;
  }, invertBatch: (d5) => jo$1(l2, d5), cmov: (d5, h3, y4) => y4 ? h3 : d5 });
  return Object.freeze(l2);
}
function Po$1(t2) {
  if (typeof t2 != "bigint") throw new Error("field order must be bigint");
  const e2 = t2.toString(2).length;
  return Math.ceil(e2 / 8);
}
function Ho$1(t2) {
  const e2 = Po$1(t2);
  return e2 + Math.ceil(e2 / 2);
}
function Uf(t2, e2, n3 = false) {
  const r2 = t2.length, o2 = Po$1(e2), s2 = Ho$1(e2);
  if (r2 < 16 || r2 < s2 || r2 > 1024) throw new Error("expected " + s2 + "-1024 bytes of input, got " + r2);
  const i2 = n3 ? Me$3(t2) : Ve$3(t2), c2 = ct$1(i2, e2 - nt$1) + nt$1;
  return n3 ? Un$1(c2, o2) : Nn$1(c2, o2);
}
const te$1 = BigInt(0), Ft$2 = BigInt(1);
function qe$1(t2, e2) {
  const n3 = e2.negate();
  return t2 ? n3 : e2;
}
function Tn$1(t2, e2) {
  const n3 = jo$1(t2.Fp, e2.map((r2) => r2.Z));
  return e2.map((r2, o2) => t2.fromAffine(r2.toAffine(n3[o2])));
}
function Do$1(t2, e2) {
  if (!Number.isSafeInteger(t2) || t2 <= 0 || t2 > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t2);
}
function Cn$1(t2, e2) {
  Do$1(t2, e2);
  const n3 = Math.ceil(e2 / t2) + 1, r2 = 2 ** (t2 - 1), o2 = 2 ** t2, s2 = ye$2(t2), i2 = BigInt(t2);
  return { windows: n3, windowSize: r2, mask: s2, maxNumber: o2, shiftBy: i2 };
}
function Vo$1(t2, e2, n3) {
  const { windowSize: r2, mask: o2, maxNumber: s2, shiftBy: i2 } = n3;
  let c2 = Number(t2 & o2), f3 = t2 >> i2;
  c2 > r2 && (c2 -= s2, f3 += Ft$2);
  const u2 = e2 * r2, a2 = u2 + Math.abs(c2) - 1, l2 = c2 === 0, d5 = c2 < 0, h3 = e2 % 2 !== 0;
  return { nextN: f3, offset: a2, isZero: l2, isNeg: d5, isNegF: h3, offsetF: u2 };
}
function _f(t2, e2) {
  if (!Array.isArray(t2)) throw new Error("array expected");
  t2.forEach((n3, r2) => {
    if (!(n3 instanceof e2)) throw new Error("invalid point at index " + r2);
  });
}
function Rf(t2, e2) {
  if (!Array.isArray(t2)) throw new Error("array of scalars expected");
  t2.forEach((n3, r2) => {
    if (!e2.isValid(n3)) throw new Error("invalid scalar at index " + r2);
  });
}
const jn$1 = /* @__PURE__ */ new WeakMap(), Mo$1 = /* @__PURE__ */ new WeakMap();
function Ln$1(t2) {
  return Mo$1.get(t2) || 1;
}
function Ko$1(t2) {
  if (t2 !== te$1) throw new Error("invalid wNAF");
}
class $f {
  constructor(e2, n3) {
    this.BASE = e2.BASE, this.ZERO = e2.ZERO, this.Fn = e2.Fn, this.bits = n3;
  }
  _unsafeLadder(e2, n3, r2 = this.ZERO) {
    let o2 = e2;
    for (; n3 > te$1; ) n3 & Ft$2 && (r2 = r2.add(o2)), o2 = o2.double(), n3 >>= Ft$2;
    return r2;
  }
  precomputeWindow(e2, n3) {
    const { windows: r2, windowSize: o2 } = Cn$1(n3, this.bits), s2 = [];
    let i2 = e2, c2 = i2;
    for (let f3 = 0; f3 < r2; f3++) {
      c2 = i2, s2.push(c2);
      for (let u2 = 1; u2 < o2; u2++) c2 = c2.add(i2), s2.push(c2);
      i2 = c2.double();
    }
    return s2;
  }
  wNAF(e2, n3, r2) {
    if (!this.Fn.isValid(r2)) throw new Error("invalid scalar");
    let o2 = this.ZERO, s2 = this.BASE;
    const i2 = Cn$1(e2, this.bits);
    for (let c2 = 0; c2 < i2.windows; c2++) {
      const { nextN: f3, offset: u2, isZero: a2, isNeg: l2, isNegF: d5, offsetF: h3 } = Vo$1(r2, c2, i2);
      r2 = f3, a2 ? s2 = s2.add(qe$1(d5, n3[h3])) : o2 = o2.add(qe$1(l2, n3[u2]));
    }
    return Ko$1(r2), { p: o2, f: s2 };
  }
  wNAFUnsafe(e2, n3, r2, o2 = this.ZERO) {
    const s2 = Cn$1(e2, this.bits);
    for (let i2 = 0; i2 < s2.windows && r2 !== te$1; i2++) {
      const { nextN: c2, offset: f3, isZero: u2, isNeg: a2 } = Vo$1(r2, i2, s2);
      if (r2 = c2, !u2) {
        const l2 = n3[f3];
        o2 = o2.add(a2 ? l2.negate() : l2);
      }
    }
    return Ko$1(r2), o2;
  }
  getPrecomputes(e2, n3, r2) {
    let o2 = jn$1.get(n3);
    return o2 || (o2 = this.precomputeWindow(n3, e2), e2 !== 1 && (typeof r2 == "function" && (o2 = r2(o2)), jn$1.set(n3, o2))), o2;
  }
  cached(e2, n3, r2) {
    const o2 = Ln$1(e2);
    return this.wNAF(o2, this.getPrecomputes(o2, e2, r2), n3);
  }
  unsafe(e2, n3, r2, o2) {
    const s2 = Ln$1(e2);
    return s2 === 1 ? this._unsafeLadder(e2, n3, o2) : this.wNAFUnsafe(s2, this.getPrecomputes(s2, e2, r2), n3, o2);
  }
  createCache(e2, n3) {
    Do$1(n3, this.bits), Mo$1.set(e2, n3), jn$1.delete(e2);
  }
  hasCache(e2) {
    return Ln$1(e2) !== 1;
  }
}
function Tf(t2, e2, n3, r2) {
  let o2 = e2, s2 = t2.ZERO, i2 = t2.ZERO;
  for (; n3 > te$1 || r2 > te$1; ) n3 & Ft$2 && (s2 = s2.add(o2)), r2 & Ft$2 && (i2 = i2.add(o2)), o2 = o2.double(), n3 >>= Ft$2, r2 >>= Ft$2;
  return { p1: s2, p2: i2 };
}
function Cf(t2, e2, n3, r2) {
  _f(n3, t2), Rf(r2, e2);
  const o2 = n3.length, s2 = r2.length;
  if (o2 !== s2) throw new Error("arrays of points and scalars must have equal length");
  const i2 = t2.ZERO, c2 = Io$1(BigInt(o2));
  let f3 = 1;
  c2 > 12 ? f3 = c2 - 3 : c2 > 4 ? f3 = c2 - 2 : c2 > 0 && (f3 = 2);
  const u2 = ye$2(f3), a2 = new Array(Number(u2) + 1).fill(i2), l2 = Math.floor((e2.BITS - 1) / f3) * f3;
  let d5 = i2;
  for (let h3 = l2; h3 >= 0; h3 -= f3) {
    a2.fill(i2);
    for (let m5 = 0; m5 < s2; m5++) {
      const v2 = r2[m5], U2 = Number(v2 >> BigInt(h3) & u2);
      a2[U2] = a2[U2].add(n3[m5]);
    }
    let y4 = i2;
    for (let m5 = a2.length - 1, v2 = i2; m5 > 0; m5--) v2 = v2.add(a2[m5]), y4 = y4.add(v2);
    if (d5 = d5.add(y4), h3 !== 0) for (let m5 = 0; m5 < f3; m5++) d5 = d5.double();
  }
  return d5;
}
function qo$1(t2, e2, n3) {
  if (e2) {
    if (e2.ORDER !== t2) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return Of(e2), e2;
  } else return Ht$2(t2, { isLE: n3 });
}
function jf(t2, e2, n3 = {}, r2) {
  if (r2 === void 0 && (r2 = t2 === "edwards"), !e2 || typeof e2 != "object") throw new Error(`expected valid ${t2} CURVE object`);
  for (const f3 of ["p", "n", "h"]) {
    const u2 = e2[f3];
    if (!(typeof u2 == "bigint" && u2 > te$1)) throw new Error(`CURVE.${f3} must be positive bigint`);
  }
  const o2 = qo$1(e2.p, n3.Fp, r2), s2 = qo$1(e2.n, n3.Fn, r2), c2 = ["Gx", "Gy", "a", "b"];
  for (const f3 of c2) if (!o2.isValid(e2[f3])) throw new Error(`CURVE.${f3} must be valid field element of CURVE.Fp`);
  return e2 = Object.freeze(Object.assign({}, e2)), { CURVE: e2, Fp: o2, Fn: s2 };
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8), kr$1("HashToScalar-");
const me$3 = BigInt(0), ee$2 = BigInt(1), Fe$2 = BigInt(2);
function Lf(t2) {
  return Ke$3(t2, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t2 });
}
function kf(t2) {
  const e2 = Lf(t2), { P: n3, type: r2, adjustScalarBytes: o2, powPminus2: s2, randomBytes: i2 } = e2, c2 = r2 === "x25519";
  if (!c2 && r2 !== "x448") throw new Error("invalid type");
  const f3 = i2 || Mt$2, u2 = c2 ? 255 : 448, a2 = c2 ? 32 : 56, l2 = BigInt(c2 ? 9 : 5), d5 = BigInt(c2 ? 121665 : 39081), h3 = c2 ? Fe$2 ** BigInt(254) : Fe$2 ** BigInt(447), y4 = c2 ? BigInt(8) * Fe$2 ** BigInt(251) - ee$2 : BigInt(4) * Fe$2 ** BigInt(445) - ee$2, m5 = h3 + y4 + ee$2, v2 = (p2) => ct$1(p2, n3), U2 = F2(l2);
  function F2(p2) {
    return Un$1(v2(p2), a2);
  }
  function R3(p2) {
    const b2 = tt$2("u coordinate", p2, a2);
    return c2 && (b2[31] &= 127), v2(Me$3(b2));
  }
  function Z2(p2) {
    return Me$3(o2(tt$2("scalar", p2, a2)));
  }
  function H2(p2, b2) {
    const g2 = k2(R3(b2), Z2(p2));
    if (g2 === me$3) throw new Error("invalid private or public key received");
    return F2(g2);
  }
  function j2(p2) {
    return H2(p2, U2);
  }
  function L4(p2, b2, g2) {
    const x2 = v2(p2 * (b2 - g2));
    return b2 = v2(b2 - x2), g2 = v2(g2 + x2), { x_2: b2, x_3: g2 };
  }
  function k2(p2, b2) {
    Rn$1("u", p2, me$3, n3), Rn$1("scalar", b2, h3, m5);
    const g2 = b2, x2 = p2;
    let E2 = ee$2, A2 = me$3, w2 = p2, B4 = ee$2, I3 = me$3;
    for (let D2 = BigInt(u2 - 1); D2 >= me$3; D2--) {
      const P3 = g2 >> D2 & ee$2;
      I3 ^= P3, { x_2: E2, x_3: w2 } = L4(I3, E2, w2), { x_2: A2, x_3: B4 } = L4(I3, A2, B4), I3 = P3;
      const $2 = E2 + A2, V3 = v2($2 * $2), q2 = E2 - A2, G2 = v2(q2 * q2), M3 = V3 - G2, Y2 = w2 + B4, Yt2 = w2 - B4, ce2 = v2(Yt2 * $2), fe3 = v2(Y2 * q2), Qn2 = ce2 + fe3, tr = ce2 - fe3;
      w2 = v2(Qn2 * Qn2), B4 = v2(x2 * v2(tr * tr)), E2 = v2(V3 * G2), A2 = v2(M3 * (V3 + v2(d5 * M3)));
    }
    ({ x_2: E2, x_3: w2 } = L4(I3, E2, w2)), { x_2: A2, x_3: B4 } = L4(I3, A2, B4);
    const N3 = s2(A2);
    return v2(E2 * N3);
  }
  const O4 = { secretKey: a2, publicKey: a2, seed: a2 }, T2 = (p2 = f3(a2)) => (ht$1(p2, O4.seed), p2);
  function C2(p2) {
    const b2 = T2(p2);
    return { secretKey: b2, publicKey: j2(b2) };
  }
  return { keygen: C2, getSharedSecret: (p2, b2) => H2(p2, b2), getPublicKey: (p2) => j2(p2), scalarMult: H2, scalarMultBase: j2, utils: { randomSecretKey: T2, randomPrivateKey: T2 }, GuBytes: U2.slice(), lengths: O4 };
}
const Pf = BigInt(1), Fo$1 = BigInt(2), Hf = BigInt(3), Df = BigInt(5);
BigInt(8);
const Zo$1 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), Mf = { p: Zo$1, n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
function Kf(t2) {
  const e2 = BigInt(10), n3 = BigInt(20), r2 = BigInt(40), o2 = BigInt(80), s2 = Zo$1, c2 = t2 * t2 % s2 * t2 % s2, f3 = gt$2(c2, Fo$1, s2) * c2 % s2, u2 = gt$2(f3, Pf, s2) * t2 % s2, a2 = gt$2(u2, Df, s2) * u2 % s2, l2 = gt$2(a2, e2, s2) * a2 % s2, d5 = gt$2(l2, n3, s2) * l2 % s2, h3 = gt$2(d5, r2, s2) * d5 % s2, y4 = gt$2(h3, o2, s2) * h3 % s2, m5 = gt$2(y4, o2, s2) * h3 % s2, v2 = gt$2(m5, e2, s2) * a2 % s2;
  return { pow_p_5_8: gt$2(v2, Fo$1, s2) * t2 % s2, b2: c2 };
}
function qf(t2) {
  return t2[0] &= 248, t2[31] &= 127, t2[31] |= 64, t2;
}
const Ff = Ht$2(Mf.p, { isLE: true }), kn$1 = (() => {
  const t2 = Ff.ORDER;
  return kf({ P: t2, type: "x25519", powPminus2: (e2) => {
    const { pow_p_5_8: n3, b2: r2 } = Kf(e2);
    return ct$1(gt$2(n3, Hf, t2) * r2, t2);
  }, adjustScalarBytes: qf });
})(), Go$1 = (t2, e2) => (t2 + (t2 >= 0 ? e2 : -e2) / zo$1) / e2;
function Zf(t2, e2, n3) {
  const [[r2, o2], [s2, i2]] = e2, c2 = Go$1(i2 * t2, n3), f3 = Go$1(-o2 * t2, n3);
  let u2 = t2 - c2 * r2 - f3 * s2, a2 = -c2 * o2 - f3 * i2;
  const l2 = u2 < Et$2, d5 = a2 < Et$2;
  l2 && (u2 = -u2), d5 && (a2 = -a2);
  const h3 = ye$2(Math.ceil(Io$1(n3) / 2)) + ne$1;
  if (u2 < Et$2 || u2 >= h3 || a2 < Et$2 || a2 >= h3) throw new Error("splitScalar (endomorphism): failed, k=" + t2);
  return { k1neg: l2, k1: u2, k2neg: d5, k2: a2 };
}
function Pn$1(t2) {
  if (!["compact", "recovered", "der"].includes(t2)) throw new Error('Signature format must be "compact", "recovered", or "der"');
  return t2;
}
function Hn$1(t2, e2) {
  const n3 = {};
  for (let r2 of Object.keys(e2)) n3[r2] = t2[r2] === void 0 ? e2[r2] : t2[r2];
  return He$2(n3.lowS, "lowS"), He$2(n3.prehash, "prehash"), n3.format !== void 0 && Pn$1(n3.format), n3;
}
class Gf extends Error {
  constructor(e2 = "") {
    super(e2);
  }
}
const xt$2 = { Err: Gf, _tlv: { encode: (t2, e2) => {
  const { Err: n3 } = xt$2;
  if (t2 < 0 || t2 > 256) throw new n3("tlv.encode: wrong tag");
  if (e2.length & 1) throw new n3("tlv.encode: unpadded data");
  const r2 = e2.length / 2, o2 = De$2(r2);
  if (o2.length / 2 & 128) throw new n3("tlv.encode: long form length too big");
  const s2 = r2 > 127 ? De$2(o2.length / 2 | 128) : "";
  return De$2(t2) + s2 + o2 + e2;
}, decode(t2, e2) {
  const { Err: n3 } = xt$2;
  let r2 = 0;
  if (t2 < 0 || t2 > 256) throw new n3("tlv.encode: wrong tag");
  if (e2.length < 2 || e2[r2++] !== t2) throw new n3("tlv.decode: wrong tlv");
  const o2 = e2[r2++], s2 = !!(o2 & 128);
  let i2 = 0;
  if (!s2) i2 = o2;
  else {
    const f3 = o2 & 127;
    if (!f3) throw new n3("tlv.decode(long): indefinite length not supported");
    if (f3 > 4) throw new n3("tlv.decode(long): byte length is too big");
    const u2 = e2.subarray(r2, r2 + f3);
    if (u2.length !== f3) throw new n3("tlv.decode: length bytes not complete");
    if (u2[0] === 0) throw new n3("tlv.decode(long): zero leftmost byte");
    for (const a2 of u2) i2 = i2 << 8 | a2;
    if (r2 += f3, i2 < 128) throw new n3("tlv.decode(long): not minimal encoding");
  }
  const c2 = e2.subarray(r2, r2 + i2);
  if (c2.length !== i2) throw new n3("tlv.decode: wrong value length");
  return { v: c2, l: e2.subarray(r2 + i2) };
} }, _int: { encode(t2) {
  const { Err: e2 } = xt$2;
  if (t2 < Et$2) throw new e2("integer: negative integers are not allowed");
  let n3 = De$2(t2);
  if (Number.parseInt(n3[0], 16) & 8 && (n3 = "00" + n3), n3.length & 1) throw new e2("unexpected DER parsing assertion: unpadded hex");
  return n3;
}, decode(t2) {
  const { Err: e2 } = xt$2;
  if (t2[0] & 128) throw new e2("invalid signature integer: negative");
  if (t2[0] === 0 && !(t2[1] & 128)) throw new e2("invalid signature integer: unnecessary leading zero");
  return Ve$3(t2);
} }, toSig(t2) {
  const { Err: e2, _int: n3, _tlv: r2 } = xt$2, o2 = tt$2("signature", t2), { v: s2, l: i2 } = r2.decode(48, o2);
  if (i2.length) throw new e2("invalid signature: left bytes after parsing");
  const { v: c2, l: f3 } = r2.decode(2, s2), { v: u2, l: a2 } = r2.decode(2, f3);
  if (a2.length) throw new e2("invalid signature: left bytes after parsing");
  return { r: n3.decode(c2), s: n3.decode(u2) };
}, hexFromSig(t2) {
  const { _tlv: e2, _int: n3 } = xt$2, r2 = e2.encode(2, n3.encode(t2.r)), o2 = e2.encode(2, n3.encode(t2.s)), s2 = r2 + o2;
  return e2.encode(48, s2);
} }, Et$2 = BigInt(0), ne$1 = BigInt(1), zo$1 = BigInt(2), Ze$2 = BigInt(3), zf = BigInt(4);
function re$1(t2, e2) {
  const { BYTES: n3 } = t2;
  let r2;
  if (typeof e2 == "bigint") r2 = e2;
  else {
    let o2 = tt$2("private key", e2);
    try {
      r2 = t2.fromBytes(o2);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${n3}, got ${typeof e2}`);
    }
  }
  if (!t2.isValidNot0(r2)) throw new Error("invalid private key: out of range [1..N-1]");
  return r2;
}
function Yf(t2, e2 = {}) {
  const n3 = jf("weierstrass", t2, e2), { Fp: r2, Fn: o2 } = n3;
  let s2 = n3.CURVE;
  const { h: i2, n: c2 } = s2;
  Ke$3(e2, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
  const { endo: f3 } = e2;
  if (f3 && (!r2.is0(s2.a) || typeof f3.beta != "bigint" || !Array.isArray(f3.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  const u2 = Wo$1(r2, o2);
  function a2() {
    if (!r2.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function l2(_2, p2, b2) {
    const { x: g2, y: x2 } = p2.toAffine(), E2 = r2.toBytes(g2);
    if (He$2(b2, "isCompressed"), b2) {
      a2();
      const A2 = !r2.isOdd(x2);
      return _t$2(Yo$1(A2), E2);
    } else return _t$2(Uint8Array.of(4), E2, r2.toBytes(x2));
  }
  function d5(_2) {
    Kt$2(_2, void 0, "Point");
    const { publicKey: p2, publicKeyUncompressed: b2 } = u2, g2 = _2.length, x2 = _2[0], E2 = _2.subarray(1);
    if (g2 === p2 && (x2 === 2 || x2 === 3)) {
      const A2 = r2.fromBytes(E2);
      if (!r2.isValid(A2)) throw new Error("bad point: is not on curve, wrong x");
      const w2 = m5(A2);
      let B4;
      try {
        B4 = r2.sqrt(w2);
      } catch (D2) {
        const P3 = D2 instanceof Error ? ": " + D2.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + P3);
      }
      a2();
      const I3 = r2.isOdd(B4);
      return (x2 & 1) === 1 !== I3 && (B4 = r2.neg(B4)), { x: A2, y: B4 };
    } else if (g2 === b2 && x2 === 4) {
      const A2 = r2.BYTES, w2 = r2.fromBytes(E2.subarray(0, A2)), B4 = r2.fromBytes(E2.subarray(A2, A2 * 2));
      if (!v2(w2, B4)) throw new Error("bad point: is not on curve");
      return { x: w2, y: B4 };
    } else throw new Error(`bad point: got length ${g2}, expected compressed=${p2} or uncompressed=${b2}`);
  }
  const h3 = e2.toBytes || l2, y4 = e2.fromBytes || d5;
  function m5(_2) {
    const p2 = r2.sqr(_2), b2 = r2.mul(p2, _2);
    return r2.add(r2.add(b2, r2.mul(_2, s2.a)), s2.b);
  }
  function v2(_2, p2) {
    const b2 = r2.sqr(p2), g2 = m5(_2);
    return r2.eql(b2, g2);
  }
  if (!v2(s2.Gx, s2.Gy)) throw new Error("bad curve params: generator point");
  const U2 = r2.mul(r2.pow(s2.a, Ze$2), zf), F2 = r2.mul(r2.sqr(s2.b), BigInt(27));
  if (r2.is0(r2.add(U2, F2))) throw new Error("bad curve params: a or b");
  function R3(_2, p2, b2 = false) {
    if (!r2.isValid(p2) || b2 && r2.is0(p2)) throw new Error(`bad point coordinate ${_2}`);
    return p2;
  }
  function Z2(_2) {
    if (!(_2 instanceof O4)) throw new Error("ProjectivePoint expected");
  }
  function H2(_2) {
    if (!f3 || !f3.basises) throw new Error("no endo");
    return Zf(_2, f3.basises, o2.ORDER);
  }
  const j2 = So$1((_2, p2) => {
    const { X: b2, Y: g2, Z: x2 } = _2;
    if (r2.eql(x2, r2.ONE)) return { x: b2, y: g2 };
    const E2 = _2.is0();
    p2 == null && (p2 = E2 ? r2.ONE : r2.inv(x2));
    const A2 = r2.mul(b2, p2), w2 = r2.mul(g2, p2), B4 = r2.mul(x2, p2);
    if (E2) return { x: r2.ZERO, y: r2.ZERO };
    if (!r2.eql(B4, r2.ONE)) throw new Error("invZ was invalid");
    return { x: A2, y: w2 };
  }), L4 = So$1((_2) => {
    if (_2.is0()) {
      if (e2.allowInfinityPoint && !r2.is0(_2.Y)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: p2, y: b2 } = _2.toAffine();
    if (!r2.isValid(p2) || !r2.isValid(b2)) throw new Error("bad point: x or y not field elements");
    if (!v2(p2, b2)) throw new Error("bad point: equation left != right");
    if (!_2.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  function k2(_2, p2, b2, g2, x2) {
    return b2 = new O4(r2.mul(b2.X, _2), b2.Y, b2.Z), p2 = qe$1(g2, p2), b2 = qe$1(x2, b2), p2.add(b2);
  }
  class O4 {
    constructor(p2, b2, g2) {
      this.X = R3("x", p2), this.Y = R3("y", b2, true), this.Z = R3("z", g2), Object.freeze(this);
    }
    static CURVE() {
      return s2;
    }
    static fromAffine(p2) {
      const { x: b2, y: g2 } = p2 || {};
      if (!p2 || !r2.isValid(b2) || !r2.isValid(g2)) throw new Error("invalid affine point");
      if (p2 instanceof O4) throw new Error("projective point not allowed");
      return r2.is0(b2) && r2.is0(g2) ? O4.ZERO : new O4(b2, g2, r2.ONE);
    }
    static fromBytes(p2) {
      const b2 = O4.fromAffine(y4(Kt$2(p2, void 0, "point")));
      return b2.assertValidity(), b2;
    }
    static fromHex(p2) {
      return O4.fromBytes(tt$2("pointHex", p2));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(p2 = 8, b2 = true) {
      return C2.createCache(this, p2), b2 || this.multiply(Ze$2), this;
    }
    assertValidity() {
      L4(this);
    }
    hasEvenY() {
      const { y: p2 } = this.toAffine();
      if (!r2.isOdd) throw new Error("Field doesn't support isOdd");
      return !r2.isOdd(p2);
    }
    equals(p2) {
      Z2(p2);
      const { X: b2, Y: g2, Z: x2 } = this, { X: E2, Y: A2, Z: w2 } = p2, B4 = r2.eql(r2.mul(b2, w2), r2.mul(E2, x2)), I3 = r2.eql(r2.mul(g2, w2), r2.mul(A2, x2));
      return B4 && I3;
    }
    negate() {
      return new O4(this.X, r2.neg(this.Y), this.Z);
    }
    double() {
      const { a: p2, b: b2 } = s2, g2 = r2.mul(b2, Ze$2), { X: x2, Y: E2, Z: A2 } = this;
      let w2 = r2.ZERO, B4 = r2.ZERO, I3 = r2.ZERO, N3 = r2.mul(x2, x2), D2 = r2.mul(E2, E2), P3 = r2.mul(A2, A2), $2 = r2.mul(x2, E2);
      return $2 = r2.add($2, $2), I3 = r2.mul(x2, A2), I3 = r2.add(I3, I3), w2 = r2.mul(p2, I3), B4 = r2.mul(g2, P3), B4 = r2.add(w2, B4), w2 = r2.sub(D2, B4), B4 = r2.add(D2, B4), B4 = r2.mul(w2, B4), w2 = r2.mul($2, w2), I3 = r2.mul(g2, I3), P3 = r2.mul(p2, P3), $2 = r2.sub(N3, P3), $2 = r2.mul(p2, $2), $2 = r2.add($2, I3), I3 = r2.add(N3, N3), N3 = r2.add(I3, N3), N3 = r2.add(N3, P3), N3 = r2.mul(N3, $2), B4 = r2.add(B4, N3), P3 = r2.mul(E2, A2), P3 = r2.add(P3, P3), N3 = r2.mul(P3, $2), w2 = r2.sub(w2, N3), I3 = r2.mul(P3, D2), I3 = r2.add(I3, I3), I3 = r2.add(I3, I3), new O4(w2, B4, I3);
    }
    add(p2) {
      Z2(p2);
      const { X: b2, Y: g2, Z: x2 } = this, { X: E2, Y: A2, Z: w2 } = p2;
      let B4 = r2.ZERO, I3 = r2.ZERO, N3 = r2.ZERO;
      const D2 = s2.a, P3 = r2.mul(s2.b, Ze$2);
      let $2 = r2.mul(b2, E2), V3 = r2.mul(g2, A2), q2 = r2.mul(x2, w2), G2 = r2.add(b2, g2), M3 = r2.add(E2, A2);
      G2 = r2.mul(G2, M3), M3 = r2.add($2, V3), G2 = r2.sub(G2, M3), M3 = r2.add(b2, x2);
      let Y2 = r2.add(E2, w2);
      return M3 = r2.mul(M3, Y2), Y2 = r2.add($2, q2), M3 = r2.sub(M3, Y2), Y2 = r2.add(g2, x2), B4 = r2.add(A2, w2), Y2 = r2.mul(Y2, B4), B4 = r2.add(V3, q2), Y2 = r2.sub(Y2, B4), N3 = r2.mul(D2, M3), B4 = r2.mul(P3, q2), N3 = r2.add(B4, N3), B4 = r2.sub(V3, N3), N3 = r2.add(V3, N3), I3 = r2.mul(B4, N3), V3 = r2.add($2, $2), V3 = r2.add(V3, $2), q2 = r2.mul(D2, q2), M3 = r2.mul(P3, M3), V3 = r2.add(V3, q2), q2 = r2.sub($2, q2), q2 = r2.mul(D2, q2), M3 = r2.add(M3, q2), $2 = r2.mul(V3, M3), I3 = r2.add(I3, $2), $2 = r2.mul(Y2, M3), B4 = r2.mul(G2, B4), B4 = r2.sub(B4, $2), $2 = r2.mul(G2, V3), N3 = r2.mul(Y2, N3), N3 = r2.add(N3, $2), new O4(B4, I3, N3);
    }
    subtract(p2) {
      return this.add(p2.negate());
    }
    is0() {
      return this.equals(O4.ZERO);
    }
    multiply(p2) {
      const { endo: b2 } = e2;
      if (!o2.isValidNot0(p2)) throw new Error("invalid scalar: out of range");
      let g2, x2;
      const E2 = (A2) => C2.cached(this, A2, (w2) => Tn$1(O4, w2));
      if (b2) {
        const { k1neg: A2, k1: w2, k2neg: B4, k2: I3 } = H2(p2), { p: N3, f: D2 } = E2(w2), { p: P3, f: $2 } = E2(I3);
        x2 = D2.add($2), g2 = k2(b2.beta, N3, P3, A2, B4);
      } else {
        const { p: A2, f: w2 } = E2(p2);
        g2 = A2, x2 = w2;
      }
      return Tn$1(O4, [g2, x2])[0];
    }
    multiplyUnsafe(p2) {
      const { endo: b2 } = e2, g2 = this;
      if (!o2.isValid(p2)) throw new Error("invalid scalar: out of range");
      if (p2 === Et$2 || g2.is0()) return O4.ZERO;
      if (p2 === ne$1) return g2;
      if (C2.hasCache(this)) return this.multiply(p2);
      if (b2) {
        const { k1neg: x2, k1: E2, k2neg: A2, k2: w2 } = H2(p2), { p1: B4, p2: I3 } = Tf(O4, g2, E2, w2);
        return k2(b2.beta, B4, I3, x2, A2);
      } else return C2.unsafe(g2, p2);
    }
    multiplyAndAddUnsafe(p2, b2, g2) {
      const x2 = this.multiplyUnsafe(b2).add(p2.multiplyUnsafe(g2));
      return x2.is0() ? void 0 : x2;
    }
    toAffine(p2) {
      return j2(this, p2);
    }
    isTorsionFree() {
      const { isTorsionFree: p2 } = e2;
      return i2 === ne$1 ? true : p2 ? p2(O4, this) : C2.unsafe(this, c2).is0();
    }
    clearCofactor() {
      const { clearCofactor: p2 } = e2;
      return i2 === ne$1 ? this : p2 ? p2(O4, this) : this.multiplyUnsafe(i2);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i2).is0();
    }
    toBytes(p2 = true) {
      return He$2(p2, "isCompressed"), this.assertValidity(), h3(O4, this, p2);
    }
    toHex(p2 = true) {
      return Jt$2(this.toBytes(p2));
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
    toRawBytes(p2 = true) {
      return this.toBytes(p2);
    }
    _setWindowSize(p2) {
      this.precompute(p2);
    }
    static normalizeZ(p2) {
      return Tn$1(O4, p2);
    }
    static msm(p2, b2) {
      return Cf(O4, o2, p2, b2);
    }
    static fromPrivateKey(p2) {
      return O4.BASE.multiply(re$1(o2, p2));
    }
  }
  O4.BASE = new O4(s2.Gx, s2.Gy, r2.ONE), O4.ZERO = new O4(r2.ZERO, r2.ONE, r2.ZERO), O4.Fp = r2, O4.Fn = o2;
  const T2 = o2.BITS, C2 = new $f(O4, e2.endo ? Math.ceil(T2 / 2) : T2);
  return O4.BASE.precompute(8), O4;
}
function Yo$1(t2) {
  return Uint8Array.of(t2 ? 2 : 3);
}
function Wo$1(t2, e2) {
  return { secretKey: e2.BYTES, publicKey: 1 + t2.BYTES, publicKeyUncompressed: 1 + 2 * t2.BYTES, publicKeyHasPrefix: true, signature: 2 * e2.BYTES };
}
function Wf(t2, e2 = {}) {
  const { Fn: n3 } = t2, r2 = e2.randomBytes || Mt$2, o2 = Object.assign(Wo$1(t2.Fp, n3), { seed: Ho$1(n3.ORDER) });
  function s2(h3) {
    try {
      return !!re$1(n3, h3);
    } catch {
      return false;
    }
  }
  function i2(h3, y4) {
    const { publicKey: m5, publicKeyUncompressed: v2 } = o2;
    try {
      const U2 = h3.length;
      return y4 === true && U2 !== m5 || y4 === false && U2 !== v2 ? false : !!t2.fromBytes(h3);
    } catch {
      return false;
    }
  }
  function c2(h3 = r2(o2.seed)) {
    return Uf(Kt$2(h3, o2.seed, "seed"), n3.ORDER);
  }
  function f3(h3, y4 = true) {
    return t2.BASE.multiply(re$1(n3, h3)).toBytes(y4);
  }
  function u2(h3) {
    const y4 = c2(h3);
    return { secretKey: y4, publicKey: f3(y4) };
  }
  function a2(h3) {
    if (typeof h3 == "bigint") return false;
    if (h3 instanceof t2) return true;
    const { secretKey: y4, publicKey: m5, publicKeyUncompressed: v2 } = o2;
    if (n3.allowedLengths || y4 === m5) return;
    const U2 = tt$2("key", h3).length;
    return U2 === m5 || U2 === v2;
  }
  function l2(h3, y4, m5 = true) {
    if (a2(h3) === true) throw new Error("first arg must be private key");
    if (a2(y4) === false) throw new Error("second arg must be public key");
    const v2 = re$1(n3, h3);
    return t2.fromHex(y4).multiply(v2).toBytes(m5);
  }
  return Object.freeze({ getPublicKey: f3, getSharedSecret: l2, keygen: u2, Point: t2, utils: { isValidSecretKey: s2, isValidPublicKey: i2, randomSecretKey: c2, isValidPrivateKey: s2, randomPrivateKey: c2, normPrivateKeyToScalar: (h3) => re$1(n3, h3), precompute(h3 = 8, y4 = t2.BASE) {
    return y4.precompute(h3, false);
  } }, lengths: o2 });
}
function Xf(t2, e2, n3 = {}) {
  Ue$2(e2), Ke$3(n3, {}, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
  const r2 = n3.randomBytes || Mt$2, o2 = n3.hmac || ((b2, ...g2) => ke$2(e2, b2, _t$2(...g2))), { Fp: s2, Fn: i2 } = t2, { ORDER: c2, BITS: f3 } = i2, { keygen: u2, getPublicKey: a2, getSharedSecret: l2, utils: d5, lengths: h3 } = Wf(t2, n3), y4 = { prehash: false, lowS: typeof n3.lowS == "boolean" ? n3.lowS : false, format: void 0, extraEntropy: false }, m5 = "compact";
  function v2(b2) {
    const g2 = c2 >> ne$1;
    return b2 > g2;
  }
  function U2(b2, g2) {
    if (!i2.isValidNot0(g2)) throw new Error(`invalid signature ${b2}: out of range 1..Point.Fn.ORDER`);
    return g2;
  }
  function F2(b2, g2) {
    Pn$1(g2);
    const x2 = h3.signature, E2 = g2 === "compact" ? x2 : g2 === "recovered" ? x2 + 1 : void 0;
    return Kt$2(b2, E2, `${g2} signature`);
  }
  class R3 {
    constructor(g2, x2, E2) {
      this.r = U2("r", g2), this.s = U2("s", x2), E2 != null && (this.recovery = E2), Object.freeze(this);
    }
    static fromBytes(g2, x2 = m5) {
      F2(g2, x2);
      let E2;
      if (x2 === "der") {
        const { r: I3, s: N3 } = xt$2.toSig(Kt$2(g2));
        return new R3(I3, N3);
      }
      x2 === "recovered" && (E2 = g2[0], x2 = "compact", g2 = g2.subarray(1));
      const A2 = i2.BYTES, w2 = g2.subarray(0, A2), B4 = g2.subarray(A2, A2 * 2);
      return new R3(i2.fromBytes(w2), i2.fromBytes(B4), E2);
    }
    static fromHex(g2, x2) {
      return this.fromBytes(_e$1(g2), x2);
    }
    addRecoveryBit(g2) {
      return new R3(this.r, this.s, g2);
    }
    recoverPublicKey(g2) {
      const x2 = s2.ORDER, { r: E2, s: A2, recovery: w2 } = this;
      if (w2 == null || ![0, 1, 2, 3].includes(w2)) throw new Error("recovery id invalid");
      if (c2 * zo$1 < x2 && w2 > 1) throw new Error("recovery id is ambiguous for h>1 curve");
      const I3 = w2 === 2 || w2 === 3 ? E2 + c2 : E2;
      if (!s2.isValid(I3)) throw new Error("recovery id 2 or 3 invalid");
      const N3 = s2.toBytes(I3), D2 = t2.fromBytes(_t$2(Yo$1((w2 & 1) === 0), N3)), P3 = i2.inv(I3), $2 = H2(tt$2("msgHash", g2)), V3 = i2.create(-$2 * P3), q2 = i2.create(A2 * P3), G2 = t2.BASE.multiplyUnsafe(V3).add(D2.multiplyUnsafe(q2));
      if (G2.is0()) throw new Error("point at infinify");
      return G2.assertValidity(), G2;
    }
    hasHighS() {
      return v2(this.s);
    }
    toBytes(g2 = m5) {
      if (Pn$1(g2), g2 === "der") return _e$1(xt$2.hexFromSig(this));
      const x2 = i2.toBytes(this.r), E2 = i2.toBytes(this.s);
      if (g2 === "recovered") {
        if (this.recovery == null) throw new Error("recovery bit must be present");
        return _t$2(Uint8Array.of(this.recovery), x2, E2);
      }
      return _t$2(x2, E2);
    }
    toHex(g2) {
      return Jt$2(this.toBytes(g2));
    }
    assertValidity() {
    }
    static fromCompact(g2) {
      return R3.fromBytes(tt$2("sig", g2), "compact");
    }
    static fromDER(g2) {
      return R3.fromBytes(tt$2("sig", g2), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new R3(this.r, i2.neg(this.s), this.recovery) : this;
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
  const Z2 = n3.bits2int || function(g2) {
    if (g2.length > 8192) throw new Error("input is too large");
    const x2 = Ve$3(g2), E2 = g2.length * 8 - f3;
    return E2 > 0 ? x2 >> BigInt(E2) : x2;
  }, H2 = n3.bits2int_modN || function(g2) {
    return i2.create(Z2(g2));
  }, j2 = ye$2(f3);
  function L4(b2) {
    return Rn$1("num < 2^" + f3, b2, Et$2, j2), i2.toBytes(b2);
  }
  function k2(b2, g2) {
    return Kt$2(b2, void 0, "message"), g2 ? Kt$2(e2(b2), void 0, "prehashed message") : b2;
  }
  function O4(b2, g2, x2) {
    if (["recovered", "canonical"].some((V3) => V3 in x2)) throw new Error("sign() legacy options not supported");
    const { lowS: E2, prehash: A2, extraEntropy: w2 } = Hn$1(x2, y4);
    b2 = k2(b2, A2);
    const B4 = H2(b2), I3 = re$1(i2, g2), N3 = [L4(I3), L4(B4)];
    if (w2 != null && w2 !== false) {
      const V3 = w2 === true ? r2(h3.secretKey) : w2;
      N3.push(tt$2("extraEntropy", V3));
    }
    const D2 = _t$2(...N3), P3 = B4;
    function $2(V3) {
      const q2 = Z2(V3);
      if (!i2.isValidNot0(q2)) return;
      const G2 = i2.inv(q2), M3 = t2.BASE.multiply(q2).toAffine(), Y2 = i2.create(M3.x);
      if (Y2 === Et$2) return;
      const Yt2 = i2.create(G2 * i2.create(P3 + Y2 * I3));
      if (Yt2 === Et$2) return;
      let ce2 = (M3.x === Y2 ? 0 : 2) | Number(M3.y & ne$1), fe3 = Yt2;
      return E2 && v2(Yt2) && (fe3 = i2.neg(Yt2), ce2 ^= 1), new R3(Y2, fe3, ce2);
    }
    return { seed: D2, k2sig: $2 };
  }
  function T2(b2, g2, x2 = {}) {
    b2 = tt$2("message", b2);
    const { seed: E2, k2sig: A2 } = O4(b2, g2, x2);
    return vf(e2.outputLen, i2.BYTES, o2)(E2, A2);
  }
  function C2(b2) {
    let g2;
    const x2 = typeof b2 == "string" || Ne(b2), E2 = !x2 && b2 !== null && typeof b2 == "object" && typeof b2.r == "bigint" && typeof b2.s == "bigint";
    if (!x2 && !E2) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (E2) g2 = new R3(b2.r, b2.s);
    else if (x2) {
      try {
        g2 = R3.fromBytes(tt$2("sig", b2), "der");
      } catch (A2) {
        if (!(A2 instanceof xt$2.Err)) throw A2;
      }
      if (!g2) try {
        g2 = R3.fromBytes(tt$2("sig", b2), "compact");
      } catch {
        return false;
      }
    }
    return g2 || false;
  }
  function _2(b2, g2, x2, E2 = {}) {
    const { lowS: A2, prehash: w2, format: B4 } = Hn$1(E2, y4);
    if (x2 = tt$2("publicKey", x2), g2 = k2(tt$2("message", g2), w2), "strict" in E2) throw new Error("options.strict was renamed to lowS");
    const I3 = B4 === void 0 ? C2(b2) : R3.fromBytes(tt$2("sig", b2), B4);
    if (I3 === false) return false;
    try {
      const N3 = t2.fromBytes(x2);
      if (A2 && I3.hasHighS()) return false;
      const { r: D2, s: P3 } = I3, $2 = H2(g2), V3 = i2.inv(P3), q2 = i2.create($2 * V3), G2 = i2.create(D2 * V3), M3 = t2.BASE.multiplyUnsafe(q2).add(N3.multiplyUnsafe(G2));
      return M3.is0() ? false : i2.create(M3.x) === D2;
    } catch {
      return false;
    }
  }
  function p2(b2, g2, x2 = {}) {
    const { prehash: E2 } = Hn$1(x2, y4);
    return g2 = k2(g2, E2), R3.fromBytes(b2, "recovered").recoverPublicKey(g2).toBytes();
  }
  return Object.freeze({ keygen: u2, getPublicKey: a2, getSharedSecret: l2, utils: d5, lengths: h3, Point: t2, sign: T2, verify: _2, recoverPublicKey: p2, Signature: R3, hash: e2 });
}
function Jf(t2) {
  const e2 = { a: t2.a, b: t2.b, p: t2.Fp.ORDER, n: t2.n, h: t2.h, Gx: t2.Gx, Gy: t2.Gy }, n3 = t2.Fp;
  let r2 = t2.allowedPrivateKeyLengths ? Array.from(new Set(t2.allowedPrivateKeyLengths.map((i2) => Math.ceil(i2 / 2)))) : void 0;
  const o2 = Ht$2(e2.n, { BITS: t2.nBitLength, allowedLengths: r2, modFromBytes: t2.wrapPrivateKey }), s2 = { Fp: n3, Fn: o2, allowInfinityPoint: t2.allowInfinityPoint, endo: t2.endo, isTorsionFree: t2.isTorsionFree, clearCofactor: t2.clearCofactor, fromBytes: t2.fromBytes, toBytes: t2.toBytes };
  return { CURVE: e2, curveOpts: s2 };
}
function Qf(t2) {
  const { CURVE: e2, curveOpts: n3 } = Jf(t2), r2 = { hmac: t2.hmac, randomBytes: t2.randomBytes, lowS: t2.lowS, bits2int: t2.bits2int, bits2int_modN: t2.bits2int_modN };
  return { CURVE: e2, curveOpts: n3, hash: t2.hash, ecdsaOpts: r2 };
}
function ta$1(t2, e2) {
  const n3 = e2.Point;
  return Object.assign({}, e2, { ProjectivePoint: n3, CURVE: Object.assign({}, t2, ko$1(n3.Fn.ORDER, n3.Fn.BITS)) });
}
function ea$1(t2) {
  const { CURVE: e2, curveOpts: n3, hash: r2, ecdsaOpts: o2 } = Qf(t2), s2 = Yf(e2, n3), i2 = Xf(s2, r2, o2);
  return ta$1(t2, i2);
}
function Dn$1(t2, e2) {
  const n3 = (r2) => ea$1({ ...t2, hash: r2 });
  return { ...n3(e2), create: n3 };
}
const Xo$1 = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") }, Jo$1 = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") }, Qo$1 = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") }, na = Ht$2(Xo$1.p), ra = Ht$2(Jo$1.p), oa = Ht$2(Qo$1.p), sa = Dn$1({ ...Xo$1, Fp: na, lowS: false }, $e$2);
Dn$1({ ...Jo$1, Fp: ra, lowS: false }, gc), Dn$1({ ...Qo$1, Fp: oa, lowS: false, allowedPrivateKeyLengths: [130, 131, 132] }, pc);
const ia = sa, Vn$1 = "base10", rt$1 = "base16", oe$2 = "base64pad", Ge$2 = "base64url", se$1 = "utf8", Mn$1 = 0, ie$1 = 1, we$3 = 2, ca = 0, ts$1 = 1, ve$2 = 12, Kn$1 = 32;
function fa() {
  const t2 = kn$1.utils.randomPrivateKey(), e2 = kn$1.getPublicKey(t2);
  return { privateKey: toString(t2, rt$1), publicKey: toString(e2, rt$1) };
}
function aa() {
  const t2 = Mt$2(Kn$1);
  return toString(t2, rt$1);
}
function ua(t2, e2) {
  const n3 = kn$1.getSharedSecret(fromString(t2, rt$1), fromString(e2, rt$1)), r2 = mf(Pe$2, n3, void 0, void 0, Kn$1);
  return toString(r2, rt$1);
}
function la(t2) {
  const e2 = Pe$2(fromString(t2, rt$1));
  return toString(e2, rt$1);
}
function da(t2) {
  const e2 = Pe$2(fromString(t2, se$1));
  return toString(e2, rt$1);
}
function qn$1(t2) {
  return fromString(`${t2}`, Vn$1);
}
function Zt$2(t2) {
  return Number(toString(t2, Vn$1));
}
function es$1(t2) {
  return t2.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function ns$1(t2) {
  const e2 = t2.replace(/-/g, "+").replace(/_/g, "/"), n3 = (4 - e2.length % 4) % 4;
  return e2 + "=".repeat(n3);
}
function ha(t2) {
  const e2 = qn$1(typeof t2.type < "u" ? t2.type : Mn$1);
  if (Zt$2(e2) === ie$1 && typeof t2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n3 = typeof t2.senderPublicKey < "u" ? fromString(t2.senderPublicKey, rt$1) : void 0, r2 = typeof t2.iv < "u" ? fromString(t2.iv, rt$1) : Mt$2(ve$2), o2 = fromString(t2.symKey, rt$1), s2 = xo$1(o2, r2).encrypt(fromString(t2.message, se$1)), i2 = Fn$1({ type: e2, sealed: s2, iv: r2, senderPublicKey: n3 });
  return t2.encoding === Ge$2 ? es$1(i2) : i2;
}
function pa(t2) {
  const e2 = fromString(t2.symKey, rt$1), { sealed: n3, iv: r2 } = ze$1({ encoded: t2.encoded, encoding: t2.encoding }), o2 = xo$1(e2, r2).decrypt(n3);
  if (o2 === null) throw new Error("Failed to decrypt");
  return toString(o2, se$1);
}
function ga(t2, e2) {
  const n3 = qn$1(we$3), r2 = Mt$2(ve$2), o2 = fromString(t2, se$1), s2 = Fn$1({ type: n3, sealed: o2, iv: r2 });
  return e2 === Ge$2 ? es$1(s2) : s2;
}
function ba(t2, e2) {
  const { sealed: n3 } = ze$1({ encoded: t2, encoding: e2 });
  return toString(n3, se$1);
}
function Fn$1(t2) {
  if (Zt$2(t2.type) === we$3) return toString(concat([t2.type, t2.sealed]), oe$2);
  if (Zt$2(t2.type) === ie$1) {
    if (typeof t2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([t2.type, t2.senderPublicKey, t2.iv, t2.sealed]), oe$2);
  }
  return toString(concat([t2.type, t2.iv, t2.sealed]), oe$2);
}
function ze$1(t2) {
  const e2 = (t2.encoding || oe$2) === Ge$2 ? ns$1(t2.encoded) : t2.encoded, n3 = fromString(e2, oe$2), r2 = n3.slice(ca, ts$1), o2 = ts$1;
  if (Zt$2(r2) === ie$1) {
    const f3 = o2 + Kn$1, u2 = f3 + ve$2, a2 = n3.slice(o2, f3), l2 = n3.slice(f3, u2), d5 = n3.slice(u2);
    return { type: r2, sealed: d5, iv: l2, senderPublicKey: a2 };
  }
  if (Zt$2(r2) === we$3) {
    const f3 = n3.slice(o2), u2 = Mt$2(ve$2);
    return { type: r2, sealed: f3, iv: u2 };
  }
  const s2 = o2 + ve$2, i2 = n3.slice(o2, s2), c2 = n3.slice(s2);
  return { type: r2, sealed: c2, iv: i2 };
}
function ya(t2, e2) {
  const n3 = ze$1({ encoded: t2, encoding: e2 == null ? void 0 : e2.encoding });
  return rs({ type: Zt$2(n3.type), senderPublicKey: typeof n3.senderPublicKey < "u" ? toString(n3.senderPublicKey, rt$1) : void 0, receiverPublicKey: e2 == null ? void 0 : e2.receiverPublicKey });
}
function rs(t2) {
  const e2 = (t2 == null ? void 0 : t2.type) || Mn$1;
  if (e2 === ie$1) {
    if (typeof (t2 == null ? void 0 : t2.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t2 == null ? void 0 : t2.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e2, senderPublicKey: t2 == null ? void 0 : t2.senderPublicKey, receiverPublicKey: t2 == null ? void 0 : t2.receiverPublicKey };
}
function ma(t2) {
  return t2.type === ie$1 && typeof t2.senderPublicKey == "string" && typeof t2.receiverPublicKey == "string";
}
function wa(t2) {
  return t2.type === we$3;
}
function os(t2) {
  const e2 = Buffer.from(t2.x, "base64"), n3 = Buffer.from(t2.y, "base64");
  return concat([new Uint8Array([4]), e2, n3]);
}
function va(t2, e2) {
  const [n3, r2, o2] = t2.split("."), s2 = Buffer.from(ns$1(o2), "base64");
  if (s2.length !== 64) throw new Error("Invalid signature length");
  const i2 = s2.slice(0, 32), c2 = s2.slice(32, 64), f3 = `${n3}.${r2}`, u2 = Pe$2(f3), a2 = os(e2);
  if (!ia.verify(concat([i2, c2]), u2, a2)) throw new Error("Invalid signature");
  return sn$1(t2).payload;
}
const ss$1 = "irn";
function xa(t2) {
  return (t2 == null ? void 0 : t2.relay) || { protocol: ss$1 };
}
function Ea(t2) {
  const e2 = C$5[t2];
  if (typeof e2 > "u") throw new Error(`Relay Protocol not supported: ${t2}`);
  return e2;
}
var Ba = Object.defineProperty, Aa = Object.defineProperties, Ia = Object.getOwnPropertyDescriptors, is$1 = Object.getOwnPropertySymbols, Sa = Object.prototype.hasOwnProperty, Oa = Object.prototype.propertyIsEnumerable, cs = (t2, e2, n3) => e2 in t2 ? Ba(t2, e2, { enumerable: true, configurable: true, writable: true, value: n3 }) : t2[e2] = n3, Zn$1 = (t2, e2) => {
  for (var n3 in e2 || (e2 = {})) Sa.call(e2, n3) && cs(t2, n3, e2[n3]);
  if (is$1) for (var n3 of is$1(e2)) Oa.call(e2, n3) && cs(t2, n3, e2[n3]);
  return t2;
}, Na = (t2, e2) => Aa(t2, Ia(e2));
function fs(t2, e2 = "-") {
  const n3 = {}, r2 = "relay" + e2;
  return Object.keys(t2).forEach((o2) => {
    if (o2.startsWith(r2)) {
      const s2 = o2.replace(r2, ""), i2 = t2[o2];
      n3[s2] = i2;
    }
  }), n3;
}
function Ua(t2) {
  if (!t2.includes("wc:")) {
    const u2 = cn$1(t2);
    u2 != null && u2.includes("wc:") && (t2 = u2);
  }
  t2 = t2.includes("wc://") ? t2.replace("wc://", "") : t2, t2 = t2.includes("wc:") ? t2.replace("wc:", "") : t2;
  const e2 = t2.indexOf(":"), n3 = t2.indexOf("?") !== -1 ? t2.indexOf("?") : void 0, r2 = t2.substring(0, e2), o2 = t2.substring(e2 + 1, n3).split("@"), s2 = typeof n3 < "u" ? t2.substring(n3) : "", i2 = new URLSearchParams(s2), c2 = Object.fromEntries(i2.entries()), f3 = typeof c2.methods == "string" ? c2.methods.split(",") : void 0;
  return { protocol: r2, topic: as(o2[0]), version: parseInt(o2[1], 10), symKey: c2.symKey, relay: fs(c2), methods: f3, expiryTimestamp: c2.expiryTimestamp ? parseInt(c2.expiryTimestamp, 10) : void 0 };
}
function as(t2) {
  return t2.startsWith("//") ? t2.substring(2) : t2;
}
function us(t2, e2 = "-") {
  const n3 = "relay", r2 = {};
  return Object.keys(t2).forEach((o2) => {
    const s2 = o2, i2 = n3 + e2 + s2;
    t2[s2] && (r2[i2] = t2[s2]);
  }), r2;
}
function _a(t2) {
  const e2 = new URLSearchParams(), n3 = Zn$1(Zn$1(Na(Zn$1({}, us(t2.relay)), { symKey: t2.symKey }), t2.expiryTimestamp && { expiryTimestamp: t2.expiryTimestamp.toString() }), t2.methods && { methods: t2.methods.join(",") });
  return Object.entries(n3).sort(([r2], [o2]) => r2.localeCompare(o2)).forEach(([r2, o2]) => {
    o2 !== void 0 && e2.append(r2, String(o2));
  }), `${t2.protocol}:${t2.topic}@${t2.version}?${e2}`;
}
function Ra(t2, e2, n3) {
  return `${t2}?wc_ev=${n3}&topic=${e2}`;
}
var $a = Object.defineProperty, Ta = Object.defineProperties, Ca = Object.getOwnPropertyDescriptors, ls = Object.getOwnPropertySymbols, ja = Object.prototype.hasOwnProperty, La = Object.prototype.propertyIsEnumerable, ds = (t2, e2, n3) => e2 in t2 ? $a(t2, e2, { enumerable: true, configurable: true, writable: true, value: n3 }) : t2[e2] = n3, ka = (t2, e2) => {
  for (var n3 in e2 || (e2 = {})) ja.call(e2, n3) && ds(t2, n3, e2[n3]);
  if (ls) for (var n3 of ls(e2)) La.call(e2, n3) && ds(t2, n3, e2[n3]);
  return t2;
}, Pa = (t2, e2) => Ta(t2, Ca(e2));
function Gt$2(t2) {
  const e2 = [];
  return t2.forEach((n3) => {
    const [r2, o2] = n3.split(":");
    e2.push(`${r2}:${o2}`);
  }), e2;
}
function hs(t2) {
  const e2 = [];
  return Object.values(t2).forEach((n3) => {
    e2.push(...Gt$2(n3.accounts));
  }), e2;
}
function ps(t2, e2) {
  const n3 = [];
  return Object.values(t2).forEach((r2) => {
    Gt$2(r2.accounts).includes(e2) && n3.push(...r2.methods);
  }), n3;
}
function gs(t2, e2) {
  const n3 = [];
  return Object.values(t2).forEach((r2) => {
    Gt$2(r2.accounts).includes(e2) && n3.push(...r2.events);
  }), n3;
}
function Gn$1(t2) {
  return t2.includes(":");
}
function bs$1(t2) {
  return Gn$1(t2) ? t2.split(":")[0] : t2;
}
function xe(t2) {
  var e2, n3, r2;
  const o2 = {};
  if (!Ye$2(t2)) return o2;
  for (const [s2, i2] of Object.entries(t2)) {
    const c2 = Gn$1(s2) ? [s2] : i2.chains, f3 = i2.methods || [], u2 = i2.events || [], a2 = bs$1(s2);
    o2[a2] = Pa(ka({}, o2[a2]), { chains: ut$2(c2, (e2 = o2[a2]) == null ? void 0 : e2.chains), methods: ut$2(f3, (n3 = o2[a2]) == null ? void 0 : n3.methods), events: ut$2(u2, (r2 = o2[a2]) == null ? void 0 : r2.events) });
  }
  return o2;
}
function ys(t2) {
  const e2 = {};
  return t2 == null ? void 0 : t2.forEach((n3) => {
    var r2;
    const [o2, s2] = n3.split(":");
    e2[o2] || (e2[o2] = { accounts: [], chains: [], events: [], methods: [] }), e2[o2].accounts.push(n3), (r2 = e2[o2].chains) == null || r2.push(`${o2}:${s2}`);
  }), e2;
}
function Va(t2, e2) {
  e2 = e2.map((r2) => r2.replace("did:pkh:", ""));
  const n3 = ys(e2);
  for (const [r2, o2] of Object.entries(n3)) o2.methods ? o2.methods = ut$2(o2.methods, t2) : o2.methods = t2, o2.events = ["chainChanged", "accountsChanged"];
  return n3;
}
function Ma(t2, e2) {
  var n3, r2, o2, s2, i2, c2;
  const f3 = xe(t2), u2 = xe(e2), a2 = {}, l2 = Object.keys(f3).concat(Object.keys(u2));
  for (const d5 of l2) a2[d5] = { chains: ut$2((n3 = f3[d5]) == null ? void 0 : n3.chains, (r2 = u2[d5]) == null ? void 0 : r2.chains), methods: ut$2((o2 = f3[d5]) == null ? void 0 : o2.methods, (s2 = u2[d5]) == null ? void 0 : s2.methods), events: ut$2((i2 = f3[d5]) == null ? void 0 : i2.events, (c2 = u2[d5]) == null ? void 0 : c2.events) };
  return a2;
}
const ms = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, ws = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Bt$2(t2, e2) {
  const { message: n3, code: r2 } = ws[t2];
  return { message: e2 ? `${n3} ${e2}` : n3, code: r2 };
}
function zt$2(t2, e2) {
  const { message: n3, code: r2 } = ms[t2];
  return { message: e2 ? `${n3} ${e2}` : n3, code: r2 };
}
function Ee$1(t2, e2) {
  return Array.isArray(t2) ? true : false;
}
function Ye$2(t2) {
  return Object.getPrototypeOf(t2) === Object.prototype && Object.keys(t2).length;
}
function Dt$1(t2) {
  return typeof t2 > "u";
}
function ft$2(t2, e2) {
  return e2 && Dt$1(t2) ? true : typeof t2 == "string" && !!t2.trim().length;
}
function We$2(t2, e2) {
  return e2 && Dt$1(t2) ? true : typeof t2 == "number" && !isNaN(t2);
}
function Ka(t2, e2) {
  const { requiredNamespaces: n3 } = e2, r2 = Object.keys(t2.namespaces), o2 = Object.keys(n3);
  let s2 = true;
  return It$3(o2, r2) ? (r2.forEach((i2) => {
    const { accounts: c2, methods: f3, events: u2 } = t2.namespaces[i2], a2 = Gt$2(c2), l2 = n3[i2];
    (!It$3(Ie$1(i2, l2), a2) || !It$3(l2.methods, f3) || !It$3(l2.events, u2)) && (s2 = false);
  }), s2) : false;
}
function Be$2(t2) {
  return ft$2(t2, false) && t2.includes(":") ? t2.split(":").length === 2 : false;
}
function vs(t2) {
  if (ft$2(t2, false) && t2.includes(":")) {
    const e2 = t2.split(":");
    if (e2.length === 3) {
      const n3 = e2[0] + ":" + e2[1];
      return !!e2[2] && Be$2(n3);
    }
  }
  return false;
}
function qa(t2) {
  function e2(n3) {
    try {
      return typeof new URL(n3) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (ft$2(t2, false)) {
      if (e2(t2)) return true;
      const n3 = cn$1(t2);
      return e2(n3);
    }
  } catch {
  }
  return false;
}
function Fa(t2) {
  var e2;
  return (e2 = t2 == null ? void 0 : t2.proposer) == null ? void 0 : e2.publicKey;
}
function Za(t2) {
  return t2 == null ? void 0 : t2.topic;
}
function Ga(t2, e2) {
  let n3 = null;
  return ft$2(t2 == null ? void 0 : t2.publicKey, false) || (n3 = Bt$2("MISSING_OR_INVALID", `${e2} controller public key should be a string`)), n3;
}
function zn$1(t2) {
  let e2 = true;
  return Ee$1(t2) ? t2.length && (e2 = t2.every((n3) => ft$2(n3, false))) : e2 = false, e2;
}
function xs$1(t2, e2, n3) {
  let r2 = null;
  return Ee$1(e2) && e2.length ? e2.forEach((o2) => {
    r2 || Be$2(o2) || (r2 = zt$2("UNSUPPORTED_CHAINS", `${n3}, chain ${o2} should be a string and conform to "namespace:chainId" format`));
  }) : Be$2(t2) || (r2 = zt$2("UNSUPPORTED_CHAINS", `${n3}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r2;
}
function Es(t2, e2, n3) {
  let r2 = null;
  return Object.entries(t2).forEach(([o2, s2]) => {
    if (r2) return;
    const i2 = xs$1(o2, Ie$1(o2, s2), `${e2} ${n3}`);
    i2 && (r2 = i2);
  }), r2;
}
function Bs(t2, e2) {
  let n3 = null;
  return Ee$1(t2) ? t2.forEach((r2) => {
    n3 || vs(r2) || (n3 = zt$2("UNSUPPORTED_ACCOUNTS", `${e2}, account ${r2} should be a string and conform to "namespace:chainId:address" format`));
  }) : n3 = zt$2("UNSUPPORTED_ACCOUNTS", `${e2}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n3;
}
function As$1(t2, e2) {
  let n3 = null;
  return Object.values(t2).forEach((r2) => {
    if (n3) return;
    const o2 = Bs(r2 == null ? void 0 : r2.accounts, `${e2} namespace`);
    o2 && (n3 = o2);
  }), n3;
}
function Is(t2, e2) {
  let n3 = null;
  return zn$1(t2 == null ? void 0 : t2.methods) ? zn$1(t2 == null ? void 0 : t2.events) || (n3 = zt$2("UNSUPPORTED_EVENTS", `${e2}, events should be an array of strings or empty array for no events`)) : n3 = zt$2("UNSUPPORTED_METHODS", `${e2}, methods should be an array of strings or empty array for no methods`), n3;
}
function Yn$1(t2, e2) {
  let n3 = null;
  return Object.values(t2).forEach((r2) => {
    if (n3) return;
    const o2 = Is(r2, `${e2}, namespace`);
    o2 && (n3 = o2);
  }), n3;
}
function za(t2, e2, n3) {
  let r2 = null;
  if (t2 && Ye$2(t2)) {
    const o2 = Yn$1(t2, e2);
    o2 && (r2 = o2);
    const s2 = Es(t2, e2, n3);
    s2 && (r2 = s2);
  } else r2 = Bt$2("MISSING_OR_INVALID", `${e2}, ${n3} should be an object with data`);
  return r2;
}
function Ss(t2, e2) {
  let n3 = null;
  if (t2 && Ye$2(t2)) {
    const r2 = Yn$1(t2, e2);
    r2 && (n3 = r2);
    const o2 = As$1(t2, e2);
    o2 && (n3 = o2);
  } else n3 = Bt$2("MISSING_OR_INVALID", `${e2}, namespaces should be an object with data`);
  return n3;
}
function Os(t2) {
  return ft$2(t2.protocol, true);
}
function Ya(t2, e2) {
  let n3 = false;
  return !t2 ? n3 = true : t2 && Ee$1(t2) && t2.length && t2.forEach((r2) => {
    n3 = Os(r2);
  }), n3;
}
function Wa(t2) {
  return typeof t2 == "number";
}
function Xa(t2) {
  return typeof t2 < "u" && typeof t2 !== null;
}
function Ja(t2) {
  return !(!t2 || typeof t2 != "object" || !t2.code || !We$2(t2.code, false) || !t2.message || !ft$2(t2.message, false));
}
function Qa(t2) {
  return !(Dt$1(t2) || !ft$2(t2.method, false));
}
function tu(t2) {
  return !(Dt$1(t2) || Dt$1(t2.result) && Dt$1(t2.error) || !We$2(t2.id, false) || !ft$2(t2.jsonrpc, false));
}
function eu(t2) {
  return !(Dt$1(t2) || !ft$2(t2.name, false));
}
function nu(t2, e2) {
  return !(!Be$2(e2) || !hs(t2).includes(e2));
}
function ru(t2, e2, n3) {
  return ft$2(n3, false) ? ps(t2, e2).includes(n3) : false;
}
function ou(t2, e2, n3) {
  return ft$2(n3, false) ? gs(t2, e2).includes(n3) : false;
}
function Ns(t2, e2, n3) {
  let r2 = null;
  const o2 = su(t2), s2 = iu(e2), i2 = Object.keys(o2), c2 = Object.keys(s2), f3 = Us$1(Object.keys(t2)), u2 = Us$1(Object.keys(e2)), a2 = f3.filter((l2) => !u2.includes(l2));
  return a2.length && (r2 = Bt$2("NON_CONFORMING_NAMESPACES", `${n3} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a2.toString()}
      Received: ${Object.keys(e2).toString()}`)), It$3(i2, c2) || (r2 = Bt$2("NON_CONFORMING_NAMESPACES", `${n3} namespaces chains don't satisfy required namespaces.
      Required: ${i2.toString()}
      Approved: ${c2.toString()}`)), Object.keys(e2).forEach((l2) => {
    if (!l2.includes(":") || r2) return;
    const d5 = Gt$2(e2[l2].accounts);
    d5.includes(l2) || (r2 = Bt$2("NON_CONFORMING_NAMESPACES", `${n3} namespaces accounts don't satisfy namespace accounts for ${l2}
        Required: ${l2}
        Approved: ${d5.toString()}`));
  }), i2.forEach((l2) => {
    r2 || (It$3(o2[l2].methods, s2[l2].methods) ? It$3(o2[l2].events, s2[l2].events) || (r2 = Bt$2("NON_CONFORMING_NAMESPACES", `${n3} namespaces events don't satisfy namespace events for ${l2}`)) : r2 = Bt$2("NON_CONFORMING_NAMESPACES", `${n3} namespaces methods don't satisfy namespace methods for ${l2}`));
  }), r2;
}
function su(t2) {
  const e2 = {};
  return Object.keys(t2).forEach((n3) => {
    var r2;
    n3.includes(":") ? e2[n3] = t2[n3] : (r2 = t2[n3].chains) == null || r2.forEach((o2) => {
      e2[o2] = { methods: t2[n3].methods, events: t2[n3].events };
    });
  }), e2;
}
function Us$1(t2) {
  return [...new Set(t2.map((e2) => e2.includes(":") ? e2.split(":")[0] : e2))];
}
function iu(t2) {
  const e2 = {};
  return Object.keys(t2).forEach((n3) => {
    if (n3.includes(":")) e2[n3] = t2[n3];
    else {
      const r2 = Gt$2(t2[n3].accounts);
      r2 == null ? void 0 : r2.forEach((o2) => {
        e2[o2] = { accounts: t2[n3].accounts.filter((s2) => s2.includes(`${o2}:`)), methods: t2[n3].methods, events: t2[n3].events };
      });
    }
  }), e2;
}
function cu(t2, e2) {
  return We$2(t2, false) && t2 <= e2.max && t2 >= e2.min;
}
function fu() {
  const t2 = Vt$2();
  return new Promise((e2) => {
    switch (t2) {
      case et$2.browser:
        e2(_s());
        break;
      case et$2.reactNative:
        e2(Rs());
        break;
      case et$2.node:
        e2($s$1());
        break;
      default:
        e2(true);
    }
  });
}
function _s() {
  return Wt$2() && (navigator == null ? void 0 : navigator.onLine);
}
async function Rs() {
  if (At$2() && typeof global < "u" && global != null && global.NetInfo) {
    const t2 = await (global == null ? void 0 : global.NetInfo.fetch());
    return t2 == null ? void 0 : t2.isConnected;
  }
  return true;
}
function $s$1() {
  return true;
}
function au(t2) {
  switch (Vt$2()) {
    case et$2.browser:
      Ts(t2);
      break;
    case et$2.reactNative:
      Cs$1(t2);
      break;
  }
}
function Ts(t2) {
  !At$2() && Wt$2() && (window.addEventListener("online", () => t2(true)), window.addEventListener("offline", () => t2(false)));
}
function Cs$1(t2) {
  At$2() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((e2) => t2(e2 == null ? void 0 : e2.isConnected)));
}
function uu() {
  var t2;
  return Wt$2() && cjsExports$2.getDocument() ? ((t2 = cjsExports$2.getDocument()) == null ? void 0 : t2.visibilityState) === "visible" : true;
}
const Wn$1 = {};
class lu {
  static get(e2) {
    return Wn$1[e2];
  }
  static set(e2, n3) {
    Wn$1[e2] = n3;
  }
  static delete(e2) {
    delete Wn$1[e2];
  }
}
function js$1(t2) {
  const e2 = bs58.decode(t2);
  if (e2.length < 33) throw new Error("Too short to contain a public key");
  return e2.slice(1, 33);
}
function Ls$1({ publicKey: t2, signature: e2, payload: n3 }) {
  var r2;
  const o2 = Xn$1(n3.method), s2 = 128 | parseInt(((r2 = n3.version) == null ? void 0 : r2.toString()) || "4"), i2 = hu(n3.address), c2 = n3.era === "00" ? new Uint8Array([0]) : Xn$1(n3.era);
  if (c2.length !== 1 && c2.length !== 2) throw new Error("Invalid era length");
  const f3 = parseInt(n3.nonce, 16), u2 = new Uint8Array([f3 & 255, f3 >> 8 & 255]), a2 = BigInt(`0x${du(n3.tip)}`), l2 = gu(a2), d5 = new Uint8Array([0, ...t2, i2, ...e2, ...c2, ...u2, ...l2, ...o2]), h3 = pu(d5.length + 1);
  return new Uint8Array([...h3, s2, ...d5]);
}
function ks$1(t2) {
  const e2 = Xn$1(t2), n3 = blakejsExports.blake2b(e2, void 0, 32);
  return "0x" + Buffer.from(n3).toString("hex");
}
function Xn$1(t2) {
  return new Uint8Array(t2.replace(/^0x/, "").match(/.{1,2}/g).map((e2) => parseInt(e2, 16)));
}
function du(t2) {
  return t2.startsWith("0x") ? t2.slice(2) : t2;
}
function hu(t2) {
  const e2 = bs58.decode(t2)[0];
  return e2 === 42 ? 0 : e2 === 60 ? 2 : 1;
}
function pu(t2) {
  if (t2 < 64) return new Uint8Array([t2 << 2]);
  if (t2 < 16384) {
    const e2 = t2 << 2 | 1;
    return new Uint8Array([e2 & 255, e2 >> 8 & 255]);
  } else if (t2 < 1 << 30) {
    const e2 = t2 << 2 | 2;
    return new Uint8Array([e2 & 255, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function gu(t2) {
  if (t2 < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t2 << BigInt(2))]);
  if (t2 < BigInt(1) << BigInt(14)) {
    const e2 = t2 << BigInt(2) | BigInt(1);
    return new Uint8Array([Number(e2 & BigInt(255)), Number(e2 >> BigInt(8) & BigInt(255))]);
  } else if (t2 < BigInt(1) << BigInt(30)) {
    const e2 = t2 << BigInt(2) | BigInt(2);
    return new Uint8Array([Number(e2 & BigInt(255)), Number(e2 >> BigInt(8) & BigInt(255)), Number(e2 >> BigInt(16) & BigInt(255)), Number(e2 >> BigInt(24) & BigInt(255))]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function bu(t2) {
  const e2 = Uint8Array.from(Buffer.from(t2.signature, "hex")), n3 = js$1(t2.transaction.address), r2 = Ls$1({ publicKey: n3, signature: e2, payload: t2.transaction }), o2 = Buffer.from(r2).toString("hex");
  return ks$1(o2);
}
var define_process_env_default = {};
const Ue$1 = "wc", Fe$1 = 2, pe$2 = "core", W$1 = `${Ue$1}@2:${pe$2}:`, It$2 = { logger: "error" }, Tt$1 = { database: ":memory:" }, Ct$1 = "crypto", Me$2 = "client_ed25519_seed", Pt$1 = cjsExports$1.ONE_DAY, St$2 = "keychain", Ot$1 = "0.3", Rt$2 = "messages", At$1 = "0.3", xt$1 = cjsExports$1.SIX_HOURS, Nt$1 = "publisher", $t$1 = "irn", zt$1 = "error", Ke$2 = "wss://relay.walletconnect.org", Lt$1 = "relayer", C$3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, kt$1 = "_subscription", M$3 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, jt$1 = 0.1, Pe$1 = "2.21.9", ee$1 = { link_mode: "link_mode", relay: "relay" }, ye$1 = { inbound: "inbound", outbound: "outbound" }, Ut$1 = "0.3", Ft$1 = "WALLETCONNECT_CLIENT_ID", Be$1 = "WALLETCONNECT_LINK_MODE_APPS", U$1 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Mt$1 = "subscription", Kt$1 = "0.3", Bt$1 = "pairing", Vt$1 = "0.3", oe$1 = { wc_pairingDelete: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjsExports$1.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjsExports$1.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 0 } } }, ae$1 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, V$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, qt$1 = "history", Gt$1 = "0.3", Wt$1 = "expirer", q = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Ht$1 = "0.3", Yt$1 = "verify-api", ir = "https://verify.walletconnect.com", Jt$1 = "https://verify.walletconnect.org", be$1 = Jt$1, Xt$1 = `${be$1}/v3`, Zt$1 = [ir, Jt$1], Qt$1 = "echo", ei = "https://echo.walletconnect.com", Y = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, X = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, rr = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, nr = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, or = { authenticated_session_approve_started: "authenticated_session_approve_started", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve" }, ar = { no_internet_connection: "no_internet_connection", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, ti = 0.1, ii = "event-client", si = 86400, ri = "https://pulse.walletconnect.org/batch";
function cr(r2, e2) {
  if (r2.length >= 255) throw new TypeError("Alphabet too long");
  for (var t2 = new Uint8Array(256), i2 = 0; i2 < t2.length; i2++) t2[i2] = 255;
  for (var s2 = 0; s2 < r2.length; s2++) {
    var n3 = r2.charAt(s2), o2 = n3.charCodeAt(0);
    if (t2[o2] !== 255) throw new TypeError(n3 + " is ambiguous");
    t2[o2] = s2;
  }
  var a2 = r2.length, c2 = r2.charAt(0), h3 = Math.log(a2) / Math.log(256), l2 = Math.log(256) / Math.log(a2);
  function p2(u2) {
    if (u2 instanceof Uint8Array || (ArrayBuffer.isView(u2) ? u2 = new Uint8Array(u2.buffer, u2.byteOffset, u2.byteLength) : Array.isArray(u2) && (u2 = Uint8Array.from(u2))), !(u2 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u2.length === 0) return "";
    for (var m5 = 0, D2 = 0, _2 = 0, E2 = u2.length; _2 !== E2 && u2[_2] === 0; ) _2++, m5++;
    for (var L4 = (E2 - _2) * l2 + 1 >>> 0, I3 = new Uint8Array(L4); _2 !== E2; ) {
      for (var k2 = u2[_2], T2 = 0, S3 = L4 - 1; (k2 !== 0 || T2 < D2) && S3 !== -1; S3--, T2++) k2 += 256 * I3[S3] >>> 0, I3[S3] = k2 % a2 >>> 0, k2 = k2 / a2 >>> 0;
      if (k2 !== 0) throw new Error("Non-zero carry");
      D2 = T2, _2++;
    }
    for (var O4 = L4 - D2; O4 !== L4 && I3[O4] === 0; ) O4++;
    for (var te2 = c2.repeat(m5); O4 < L4; ++O4) te2 += r2.charAt(I3[O4]);
    return te2;
  }
  function y4(u2) {
    if (typeof u2 != "string") throw new TypeError("Expected String");
    if (u2.length === 0) return new Uint8Array();
    var m5 = 0;
    if (u2[m5] !== " ") {
      for (var D2 = 0, _2 = 0; u2[m5] === c2; ) D2++, m5++;
      for (var E2 = (u2.length - m5) * h3 + 1 >>> 0, L4 = new Uint8Array(E2); u2[m5]; ) {
        var I3 = t2[u2.charCodeAt(m5)];
        if (I3 === 255) return;
        for (var k2 = 0, T2 = E2 - 1; (I3 !== 0 || k2 < _2) && T2 !== -1; T2--, k2++) I3 += a2 * L4[T2] >>> 0, L4[T2] = I3 % 256 >>> 0, I3 = I3 / 256 >>> 0;
        if (I3 !== 0) throw new Error("Non-zero carry");
        _2 = k2, m5++;
      }
      if (u2[m5] !== " ") {
        for (var S3 = E2 - _2; S3 !== E2 && L4[S3] === 0; ) S3++;
        for (var O4 = new Uint8Array(D2 + (E2 - S3)), te2 = D2; S3 !== E2; ) O4[te2++] = L4[S3++];
        return O4;
      }
    }
  }
  function w2(u2) {
    var m5 = y4(u2);
    if (m5) return m5;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: p2, decodeUnsafe: y4, decode: w2 };
}
var hr = cr, lr = hr;
const ni = (r2) => {
  if (r2 instanceof Uint8Array && r2.constructor.name === "Uint8Array") return r2;
  if (r2 instanceof ArrayBuffer) return new Uint8Array(r2);
  if (ArrayBuffer.isView(r2)) return new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength);
  throw new Error("Unknown type, must be binary type");
}, ur = (r2) => new TextEncoder().encode(r2), dr = (r2) => new TextDecoder().decode(r2);
class gr {
  constructor(e2, t2, i2) {
    this.name = e2, this.prefix = t2, this.baseEncode = i2;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class pr {
  constructor(e2, t2, i2) {
    if (this.name = e2, this.prefix = t2, t2.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t2.codePointAt(0), this.baseDecode = i2;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return oi(this, e2);
  }
}
class yr {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return oi(this, e2);
  }
  decode(e2) {
    const t2 = e2[0], i2 = this.decoders[t2];
    if (i2) return i2.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const oi = (r2, e2) => new yr({ ...r2.decoders || { [r2.prefix]: r2 }, ...e2.decoders || { [e2.prefix]: e2 } });
class br {
  constructor(e2, t2, i2, s2) {
    this.name = e2, this.prefix = t2, this.baseEncode = i2, this.baseDecode = s2, this.encoder = new gr(e2, t2, i2), this.decoder = new pr(e2, t2, s2);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
}
const Se$1 = ({ name: r2, prefix: e2, encode: t2, decode: i2 }) => new br(r2, e2, t2, i2), me$2 = ({ prefix: r2, name: e2, alphabet: t2 }) => {
  const { encode: i2, decode: s2 } = lr(t2, e2);
  return Se$1({ prefix: r2, name: e2, encode: i2, decode: (n3) => ni(s2(n3)) });
}, mr = (r2, e2, t2, i2) => {
  const s2 = {};
  for (let l2 = 0; l2 < e2.length; ++l2) s2[e2[l2]] = l2;
  let n3 = r2.length;
  for (; r2[n3 - 1] === "="; ) --n3;
  const o2 = new Uint8Array(n3 * t2 / 8 | 0);
  let a2 = 0, c2 = 0, h3 = 0;
  for (let l2 = 0; l2 < n3; ++l2) {
    const p2 = s2[r2[l2]];
    if (p2 === void 0) throw new SyntaxError(`Non-${i2} character`);
    c2 = c2 << t2 | p2, a2 += t2, a2 >= 8 && (a2 -= 8, o2[h3++] = 255 & c2 >> a2);
  }
  if (a2 >= t2 || 255 & c2 << 8 - a2) throw new SyntaxError("Unexpected end of data");
  return o2;
}, fr = (r2, e2, t2) => {
  const i2 = e2[e2.length - 1] === "=", s2 = (1 << t2) - 1;
  let n3 = "", o2 = 0, a2 = 0;
  for (let c2 = 0; c2 < r2.length; ++c2) for (a2 = a2 << 8 | r2[c2], o2 += 8; o2 > t2; ) o2 -= t2, n3 += e2[s2 & a2 >> o2];
  if (o2 && (n3 += e2[s2 & a2 << t2 - o2]), i2) for (; n3.length * t2 & 7; ) n3 += "=";
  return n3;
}, A$3 = ({ name: r2, prefix: e2, bitsPerChar: t2, alphabet: i2 }) => Se$1({ prefix: e2, name: r2, encode(s2) {
  return fr(s2, i2, t2);
}, decode(s2) {
  return mr(s2, i2, t2, r2);
} }), Dr = Se$1({ prefix: "\0", name: "identity", encode: (r2) => dr(r2), decode: (r2) => ur(r2) });
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
var qr2 = Object.freeze({ __proto__: null, base58btc: Br, base58flickr: Vr });
const Gr = A$3({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Wr = A$3({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Hr = A$3({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Yr = A$3({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Jr = Object.freeze({ __proto__: null, base64: Gr, base64pad: Wr, base64url: Hr, base64urlpad: Yr });
const ai = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Xr = ai.reduce((r2, e2, t2) => (r2[t2] = e2, r2), []), Zr = ai.reduce((r2, e2, t2) => (r2[e2.codePointAt(0)] = t2, r2), []);
function Qr(r2) {
  return r2.reduce((e2, t2) => (e2 += Xr[t2], e2), "");
}
function en(r2) {
  const e2 = [];
  for (const t2 of r2) {
    const i2 = Zr[t2.codePointAt(0)];
    if (i2 === void 0) throw new Error(`Non-base256emoji character: ${t2}`);
    e2.push(i2);
  }
  return new Uint8Array(e2);
}
const tn = Se$1({ prefix: "🚀", name: "base256emoji", encode: Qr, decode: en });
var sn = Object.freeze({ __proto__: null, base256emoji: tn }), rn = hi, ci = 128, on = -128, an = Math.pow(2, 31);
function hi(r2, e2, t2) {
  e2 = e2 || [], t2 = t2 || 0;
  for (var i2 = t2; r2 >= an; ) e2[t2++] = r2 & 255 | ci, r2 /= 128;
  for (; r2 & on; ) e2[t2++] = r2 & 255 | ci, r2 >>>= 7;
  return e2[t2] = r2 | 0, hi.bytes = t2 - i2 + 1, e2;
}
var cn = Ve$2, hn = 128, li = 127;
function Ve$2(r2, i2) {
  var t2 = 0, i2 = i2 || 0, s2 = 0, n3 = i2, o2, a2 = r2.length;
  do {
    if (n3 >= a2) throw Ve$2.bytes = 0, new RangeError("Could not decode varint");
    o2 = r2[n3++], t2 += s2 < 28 ? (o2 & li) << s2 : (o2 & li) * Math.pow(2, s2), s2 += 7;
  } while (o2 >= hn);
  return Ve$2.bytes = n3 - i2, t2;
}
var ln = Math.pow(2, 7), un = Math.pow(2, 14), dn2 = Math.pow(2, 21), gn = Math.pow(2, 28), pn = Math.pow(2, 35), yn = Math.pow(2, 42), bn = Math.pow(2, 49), mn = Math.pow(2, 56), fn = Math.pow(2, 63), Dn = function(r2) {
  return r2 < ln ? 1 : r2 < un ? 2 : r2 < dn2 ? 3 : r2 < gn ? 4 : r2 < pn ? 5 : r2 < yn ? 6 : r2 < bn ? 7 : r2 < mn ? 8 : r2 < fn ? 9 : 10;
}, vn = { encode: rn, decode: cn, encodingLength: Dn }, ui = vn;
const di = (r2, e2, t2 = 0) => (ui.encode(r2, e2, t2), e2), gi = (r2) => ui.encodingLength(r2), qe = (r2, e2) => {
  const t2 = e2.byteLength, i2 = gi(r2), s2 = i2 + gi(t2), n3 = new Uint8Array(s2 + t2);
  return di(r2, n3, 0), di(t2, n3, i2), n3.set(e2, s2), new wn(r2, t2, e2, n3);
};
class wn {
  constructor(e2, t2, i2, s2) {
    this.code = e2, this.size = t2, this.digest = i2, this.bytes = s2;
  }
}
const pi = ({ name: r2, code: e2, encode: t2 }) => new _n(r2, e2, t2);
class _n {
  constructor(e2, t2, i2) {
    this.name = e2, this.code = t2, this.encode = i2;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const t2 = this.encode(e2);
      return t2 instanceof Uint8Array ? qe(this.code, t2) : t2.then((i2) => qe(this.code, i2));
    } else throw Error("Unknown type, must be binary type");
  }
}
const yi = (r2) => async (e2) => new Uint8Array(await crypto.subtle.digest(r2, e2)), En = pi({ name: "sha2-256", code: 18, encode: yi("SHA-256") }), In = pi({ name: "sha2-512", code: 19, encode: yi("SHA-512") });
var Tn = Object.freeze({ __proto__: null, sha256: En, sha512: In });
const bi = 0, Cn = "identity", mi = ni, Pn = (r2) => qe(bi, mi(r2)), Sn = { code: bi, name: Cn, encode: mi, digest: Pn };
var On = Object.freeze({ __proto__: null, identity: Sn });
new TextEncoder(), new TextDecoder();
const fi = { ...vr, ..._r, ...Ir, ...Cr, ...Or, ...Ur, ...Kr, ...qr2, ...Jr, ...sn };
({ ...Tn, ...On });
function Di(r2) {
  return globalThis.Buffer != null ? new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength) : r2;
}
function Rn(r2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Di(globalThis.Buffer.allocUnsafe(r2)) : new Uint8Array(r2);
}
function vi(r2, e2, t2, i2) {
  return { name: r2, prefix: e2, encoder: { name: r2, prefix: e2, encode: t2 }, decoder: { decode: i2 } };
}
const wi = vi("utf8", "u", (r2) => "u" + new TextDecoder("utf8").decode(r2), (r2) => new TextEncoder().encode(r2.substring(1))), Ge$1 = vi("ascii", "a", (r2) => {
  let e2 = "a";
  for (let t2 = 0; t2 < r2.length; t2++) e2 += String.fromCharCode(r2[t2]);
  return e2;
}, (r2) => {
  r2 = r2.substring(1);
  const e2 = Rn(r2.length);
  for (let t2 = 0; t2 < r2.length; t2++) e2[t2] = r2.charCodeAt(t2);
  return e2;
}), An = { utf8: wi, "utf-8": wi, hex: fi.base16, latin1: Ge$1, ascii: Ge$1, binary: Ge$1, ...fi };
function xn(r2, e2 = "utf8") {
  const t2 = An[e2];
  if (!t2) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Di(globalThis.Buffer.from(r2, "utf-8")) : t2.decoder.decode(`${t2.prefix}${r2}`);
}
var Nn = Object.defineProperty, $n = (r2, e2, t2) => e2 in r2 ? Nn(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, J$1 = (r2, e2, t2) => $n(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class _i {
  constructor(e2, t2) {
    this.core = e2, this.logger = t2, J$1(this, "keychain", /* @__PURE__ */ new Map()), J$1(this, "name", St$2), J$1(this, "version", Ot$1), J$1(this, "initialized", false), J$1(this, "storagePrefix", W$1), J$1(this, "init", async () => {
      if (!this.initialized) {
        const i2 = await this.getKeyChain();
        typeof i2 < "u" && (this.keychain = i2), this.initialized = true;
      }
    }), J$1(this, "has", (i2) => (this.isInitialized(), this.keychain.has(i2))), J$1(this, "set", async (i2, s2) => {
      this.isInitialized(), this.keychain.set(i2, s2), await this.persist();
    }), J$1(this, "get", (i2) => {
      this.isInitialized();
      const s2 = this.keychain.get(i2);
      if (typeof s2 > "u") {
        const { message: n3 } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${i2}`);
        throw new Error(n3);
      }
      return s2;
    }), J$1(this, "del", async (i2) => {
      this.isInitialized(), this.keychain.delete(i2), await this.persist();
    }), this.core = e2, this.logger = E$2(t2, this.name);
  }
  get context() {
    return y$4(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e2) {
    await this.core.storage.setItem(this.storageKey, bi$1(e2));
  }
  async getKeyChain() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? yi$1(e2) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
var zn = Object.defineProperty, Ln = (r2, e2, t2) => e2 in r2 ? zn(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, x$3 = (r2, e2, t2) => Ln(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Ei {
  constructor(e2, t2, i2) {
    this.core = e2, this.logger = t2, x$3(this, "name", Ct$1), x$3(this, "keychain"), x$3(this, "randomSessionIdentifier", aa()), x$3(this, "initialized", false), x$3(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), x$3(this, "hasKeys", (s2) => (this.isInitialized(), this.keychain.has(s2))), x$3(this, "getClientId", async () => {
      this.isInitialized();
      const s2 = await this.getClientSeed(), n3 = Po$2(s2);
      return Qe$2(n3.publicKey);
    }), x$3(this, "generateKeyPair", () => {
      this.isInitialized();
      const s2 = fa();
      return this.setPrivateKey(s2.publicKey, s2.privateKey);
    }), x$3(this, "signJWT", async (s2) => {
      this.isInitialized();
      const n3 = await this.getClientSeed(), o2 = Po$2(n3), a2 = this.randomSessionIdentifier, c2 = Pt$1;
      return await Qo$2(a2, s2, c2, o2);
    }), x$3(this, "generateSharedKey", (s2, n3, o2) => {
      this.isInitialized();
      const a2 = this.getPrivateKey(s2), c2 = ua(a2, n3);
      return this.setSymKey(c2, o2);
    }), x$3(this, "setSymKey", async (s2, n3) => {
      this.isInitialized();
      const o2 = n3 || la(s2);
      return await this.keychain.set(o2, s2), o2;
    }), x$3(this, "deleteKeyPair", async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }), x$3(this, "deleteSymKey", async (s2) => {
      this.isInitialized(), await this.keychain.del(s2);
    }), x$3(this, "encode", async (s2, n3, o2) => {
      this.isInitialized();
      const a2 = rs(o2), c2 = safeJsonStringify(n3);
      if (wa(a2)) return ga(c2, o2 == null ? void 0 : o2.encoding);
      if (ma(a2)) {
        const y4 = a2.senderPublicKey, w2 = a2.receiverPublicKey;
        s2 = await this.generateSharedKey(y4, w2);
      }
      const h3 = this.getSymKey(s2), { type: l2, senderPublicKey: p2 } = a2;
      return ha({ type: l2, symKey: h3, message: c2, senderPublicKey: p2, encoding: o2 == null ? void 0 : o2.encoding });
    }), x$3(this, "decode", async (s2, n3, o2) => {
      this.isInitialized();
      const a2 = ya(n3, o2);
      if (wa(a2)) {
        const c2 = ba(n3, o2 == null ? void 0 : o2.encoding);
        return safeJsonParse(c2);
      }
      if (ma(a2)) {
        const c2 = a2.receiverPublicKey, h3 = a2.senderPublicKey;
        s2 = await this.generateSharedKey(c2, h3);
      }
      try {
        const c2 = this.getSymKey(s2), h3 = pa({ symKey: c2, encoded: n3, encoding: o2 == null ? void 0 : o2.encoding });
        return safeJsonParse(h3);
      } catch (c2) {
        this.logger.error(`Failed to decode message from topic: '${s2}', clientId: '${await this.getClientId()}'`), this.logger.error(c2);
      }
    }), x$3(this, "getPayloadType", (s2, n3 = oe$2) => {
      const o2 = ze$1({ encoded: s2, encoding: n3 });
      return Zt$2(o2.type);
    }), x$3(this, "getPayloadSenderPublicKey", (s2, n3 = oe$2) => {
      const o2 = ze$1({ encoded: s2, encoding: n3 });
      return o2.senderPublicKey ? toString(o2.senderPublicKey, rt$1) : void 0;
    }), this.core = e2, this.logger = E$2(t2, this.name), this.keychain = i2 || new _i(this.core, this.logger);
  }
  get context() {
    return y$4(this.logger);
  }
  async setPrivateKey(e2, t2) {
    return await this.keychain.set(e2, t2), e2;
  }
  getPrivateKey(e2) {
    return this.keychain.get(e2);
  }
  async getClientSeed() {
    let e2 = "";
    try {
      e2 = this.keychain.get(Me$2);
    } catch {
      e2 = aa(), await this.keychain.set(Me$2, e2);
    }
    return xn(e2, "base16");
  }
  getSymKey(e2) {
    return this.keychain.get(e2);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
var kn = Object.defineProperty, jn = Object.defineProperties, Un = Object.getOwnPropertyDescriptors, Ii = Object.getOwnPropertySymbols, Fn = Object.prototype.hasOwnProperty, Mn = Object.prototype.propertyIsEnumerable, We$1 = (r2, e2, t2) => e2 in r2 ? kn(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, Kn = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) Fn.call(e2, t2) && We$1(r2, t2, e2[t2]);
  if (Ii) for (var t2 of Ii(e2)) Mn.call(e2, t2) && We$1(r2, t2, e2[t2]);
  return r2;
}, Bn = (r2, e2) => jn(r2, Un(e2)), K = (r2, e2, t2) => We$1(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Ti extends y$3 {
  constructor(e2, t2) {
    super(e2, t2), this.logger = e2, this.core = t2, K(this, "messages", /* @__PURE__ */ new Map()), K(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), K(this, "name", Rt$2), K(this, "version", At$1), K(this, "initialized", false), K(this, "storagePrefix", W$1), K(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i2 = await this.getRelayerMessages();
          typeof i2 < "u" && (this.messages = i2);
          const s2 = await this.getRelayerMessagesWithoutClientAck();
          typeof s2 < "u" && (this.messagesWithoutClientAck = s2), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i2) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i2);
        } finally {
          this.initialized = true;
        }
      }
    }), K(this, "set", async (i2, s2, n3) => {
      this.isInitialized();
      const o2 = da(s2);
      let a2 = this.messages.get(i2);
      if (typeof a2 > "u" && (a2 = {}), typeof a2[o2] < "u") return o2;
      if (a2[o2] = s2, this.messages.set(i2, a2), n3 === ye$1.inbound) {
        const c2 = this.messagesWithoutClientAck.get(i2) || {};
        this.messagesWithoutClientAck.set(i2, Bn(Kn({}, c2), { [o2]: s2 }));
      }
      return await this.persist(), o2;
    }), K(this, "get", (i2) => {
      this.isInitialized();
      let s2 = this.messages.get(i2);
      return typeof s2 > "u" && (s2 = {}), s2;
    }), K(this, "getWithoutAck", (i2) => {
      this.isInitialized();
      const s2 = {};
      for (const n3 of i2) {
        const o2 = this.messagesWithoutClientAck.get(n3) || {};
        s2[n3] = Object.values(o2);
      }
      return s2;
    }), K(this, "has", (i2, s2) => {
      this.isInitialized();
      const n3 = this.get(i2), o2 = da(s2);
      return typeof n3[o2] < "u";
    }), K(this, "ack", async (i2, s2) => {
      this.isInitialized();
      const n3 = this.messagesWithoutClientAck.get(i2);
      if (typeof n3 > "u") return;
      const o2 = da(s2);
      delete n3[o2], Object.keys(n3).length === 0 ? this.messagesWithoutClientAck.delete(i2) : this.messagesWithoutClientAck.set(i2, n3), await this.persist();
    }), K(this, "del", async (i2) => {
      this.isInitialized(), this.messages.delete(i2), this.messagesWithoutClientAck.delete(i2), await this.persist();
    }), this.logger = E$2(e2, this.name), this.core = t2;
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
  async setRelayerMessages(e2) {
    await this.core.storage.setItem(this.storageKey, bi$1(e2));
  }
  async setRelayerMessagesWithoutClientAck(e2) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, bi$1(e2));
  }
  async getRelayerMessages() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? yi$1(e2) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e2 = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e2 < "u" ? yi$1(e2) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
var Vn = Object.defineProperty, qn = Object.defineProperties, Gn = Object.getOwnPropertyDescriptors, Ci = Object.getOwnPropertySymbols, Wn = Object.prototype.hasOwnProperty, Hn = Object.prototype.propertyIsEnumerable, He$1 = (r2, e2, t2) => e2 in r2 ? Vn(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, ce$1 = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) Wn.call(e2, t2) && He$1(r2, t2, e2[t2]);
  if (Ci) for (var t2 of Ci(e2)) Hn.call(e2, t2) && He$1(r2, t2, e2[t2]);
  return r2;
}, Pi = (r2, e2) => qn(r2, Gn(e2)), G$1 = (r2, e2, t2) => He$1(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Yn extends m$3 {
  constructor(e2, t2) {
    super(e2, t2), this.relayer = e2, this.logger = t2, G$1(this, "events", new eventsExports.EventEmitter()), G$1(this, "name", Nt$1), G$1(this, "queue", /* @__PURE__ */ new Map()), G$1(this, "publishTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_MINUTE)), G$1(this, "initialPublishTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND * 15)), G$1(this, "needsTransportRestart", false), G$1(this, "publish", async (i2, s2, n3) => {
      var o2, a2, c2, h3, l2;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s2, opts: n3 } });
      const p2 = (n3 == null ? void 0 : n3.ttl) || xt$1, y4 = (n3 == null ? void 0 : n3.prompt) || false, w2 = (n3 == null ? void 0 : n3.tag) || 0, u2 = (n3 == null ? void 0 : n3.id) || getBigIntRpcId().toString(), m5 = Ea(xa().protocol), D2 = { id: u2, method: (n3 == null ? void 0 : n3.publishMethod) || m5.publish, params: ce$1({ topic: i2, message: s2, ttl: p2, prompt: y4, tag: w2, attestation: n3 == null ? void 0 : n3.attestation }, n3 == null ? void 0 : n3.tvf) }, _2 = `Failed to publish payload, please try again. id:${u2} tag:${w2}`;
      try {
        Dt$1((o2 = D2.params) == null ? void 0 : o2.prompt) && ((a2 = D2.params) == null || delete a2.prompt), Dt$1((c2 = D2.params) == null ? void 0 : c2.tag) && ((h3 = D2.params) == null || delete h3.tag);
        const E2 = new Promise(async (L4) => {
          const I3 = ({ id: T2 }) => {
            var S3;
            ((S3 = D2.id) == null ? void 0 : S3.toString()) === T2.toString() && (this.removeRequestFromQueue(T2), this.relayer.events.removeListener(C$3.publish, I3), L4());
          };
          this.relayer.events.on(C$3.publish, I3);
          const k2 = Ei$1(new Promise((T2, S3) => {
            this.rpcPublish(D2, n3).then(T2).catch((O4) => {
              this.logger.warn(O4, O4 == null ? void 0 : O4.message), S3(O4);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u2} tag:${w2}`);
          try {
            await k2, this.events.removeListener(C$3.publish, I3);
          } catch (T2) {
            this.queue.set(u2, { request: D2, opts: n3, attempt: 1 }), this.logger.warn(T2, T2 == null ? void 0 : T2.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: u2, topic: i2, message: s2, opts: n3 } }), await Ei$1(E2, this.publishTimeout, _2);
      } catch (E2) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(E2), (l2 = n3 == null ? void 0 : n3.internal) != null && l2.throwOnFailedPublish) throw E2;
      } finally {
        this.queue.delete(u2);
      }
    }), G$1(this, "publishCustom", async (i2) => {
      var s2, n3, o2, a2, c2;
      this.logger.debug("Publishing custom payload"), this.logger.trace({ type: "method", method: "publishCustom", params: i2 });
      const { payload: h3, opts: l2 = {} } = i2, { attestation: p2, tvf: y4, publishMethod: w2, prompt: u2, tag: m5, ttl: D2 = cjsExports$1.FIVE_MINUTES } = l2, _2 = l2.id || getBigIntRpcId().toString(), E2 = Ea(xa().protocol), L4 = w2 || E2.publish, I3 = { id: _2, method: L4, params: ce$1(Pi(ce$1({}, h3), { ttl: D2, prompt: u2, tag: m5, attestation: p2 }), y4) }, k2 = `Failed to publish custom payload, please try again. id:${_2} tag:${m5}`;
      try {
        Dt$1((s2 = I3.params) == null ? void 0 : s2.prompt) && ((n3 = I3.params) == null || delete n3.prompt), Dt$1((o2 = I3.params) == null ? void 0 : o2.tag) && ((a2 = I3.params) == null || delete a2.tag);
        const T2 = new Promise(async (S3) => {
          const O4 = ({ id: Z2 }) => {
            var _e2;
            ((_e2 = I3.id) == null ? void 0 : _e2.toString()) === Z2.toString() && (this.removeRequestFromQueue(Z2), this.relayer.events.removeListener(C$3.publish, O4), S3());
          };
          this.relayer.events.on(C$3.publish, O4);
          const te2 = Ei$1(new Promise((Z2, _e2) => {
            this.rpcPublish(I3, l2).then(Z2).catch((Ee2) => {
              this.logger.warn(Ee2, Ee2 == null ? void 0 : Ee2.message), _e2(Ee2);
            });
          }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${L4} id:${_2} tag:${m5}`);
          try {
            await te2, this.events.removeListener(C$3.publish, O4);
          } catch (Z2) {
            this.queue.set(_2, { request: I3, opts: l2, attempt: 1 }), this.logger.warn(Z2, Z2 == null ? void 0 : Z2.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: _2, payload: h3, opts: l2 } }), await Ei$1(T2, this.publishTimeout, k2);
      } catch (T2) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(T2), (c2 = l2 == null ? void 0 : l2.internal) != null && c2.throwOnFailedPublish) throw T2;
      } finally {
        this.queue.delete(_2);
      }
    }), G$1(this, "on", (i2, s2) => {
      this.events.on(i2, s2);
    }), G$1(this, "once", (i2, s2) => {
      this.events.once(i2, s2);
    }), G$1(this, "off", (i2, s2) => {
      this.events.off(i2, s2);
    }), G$1(this, "removeListener", (i2, s2) => {
      this.events.removeListener(i2, s2);
    }), this.relayer = e2, this.logger = E$2(t2, this.name), this.registerEventListeners();
  }
  get context() {
    return y$4(this.logger);
  }
  async rpcPublish(e2, t2) {
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: e2 });
    const i2 = await this.relayer.request(e2);
    return this.relayer.events.emit(C$3.publish, ce$1(ce$1({}, e2), t2)), this.logger.debug("Successfully Published Payload"), i2;
  }
  removeRequestFromQueue(e2) {
    this.queue.delete(e2);
  }
  checkQueue() {
    this.queue.forEach(async (e2, t2) => {
      var i2;
      const s2 = e2.attempt + 1;
      this.queue.set(t2, Pi(ce$1({}, e2), { attempt: s2 })), this.logger.warn({}, `Publisher: queue->publishing: ${e2.request.id}, tag: ${(i2 = e2.request.params) == null ? void 0 : i2.tag}, attempt: ${s2}`), await this.rpcPublish(e2.request, e2.opts), this.logger.warn({}, `Publisher: queue->published: ${e2.request.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r$3.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(C$3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(C$3.message_ack, (e2) => {
      this.removeRequestFromQueue(e2.id.toString());
    });
  }
}
var Jn2 = Object.defineProperty, Xn = (r2, e2, t2) => e2 in r2 ? Jn2(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, he$1 = (r2, e2, t2) => Xn(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Zn {
  constructor() {
    he$1(this, "map", /* @__PURE__ */ new Map()), he$1(this, "set", (e2, t2) => {
      const i2 = this.get(e2);
      this.exists(e2, t2) || this.map.set(e2, [...i2, t2]);
    }), he$1(this, "get", (e2) => this.map.get(e2) || []), he$1(this, "exists", (e2, t2) => this.get(e2).includes(t2)), he$1(this, "delete", (e2, t2) => {
      if (typeof t2 > "u") {
        this.map.delete(e2);
        return;
      }
      if (!this.map.has(e2)) return;
      const i2 = this.get(e2);
      if (!this.exists(e2, t2)) return;
      const s2 = i2.filter((n3) => n3 !== t2);
      if (!s2.length) {
        this.map.delete(e2);
        return;
      }
      this.map.set(e2, s2);
    }), he$1(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Qn = Object.defineProperty, eo = Object.defineProperties, to = Object.getOwnPropertyDescriptors, Si = Object.getOwnPropertySymbols, io = Object.prototype.hasOwnProperty, so = Object.prototype.propertyIsEnumerable, Ye$1 = (r2, e2, t2) => e2 in r2 ? Qn(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, fe$2 = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) io.call(e2, t2) && Ye$1(r2, t2, e2[t2]);
  if (Si) for (var t2 of Si(e2)) so.call(e2, t2) && Ye$1(r2, t2, e2[t2]);
  return r2;
}, Je$1 = (r2, e2) => eo(r2, to(e2)), f$4 = (r2, e2, t2) => Ye$1(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Oi extends P$3 {
  constructor(e2, t2) {
    super(e2, t2), this.relayer = e2, this.logger = t2, f$4(this, "subscriptions", /* @__PURE__ */ new Map()), f$4(this, "topicMap", new Zn()), f$4(this, "events", new eventsExports.EventEmitter()), f$4(this, "name", Mt$1), f$4(this, "version", Kt$1), f$4(this, "pending", /* @__PURE__ */ new Map()), f$4(this, "cached", []), f$4(this, "initialized", false), f$4(this, "storagePrefix", W$1), f$4(this, "subscribeTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_MINUTE)), f$4(this, "initialSubscribeTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND * 15)), f$4(this, "clientId"), f$4(this, "batchSubscribeTopicsLimit", 500), f$4(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), f$4(this, "subscribe", async (i2, s2) => {
      var n3;
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s2 } });
      try {
        const o2 = xa(s2), a2 = { topic: i2, relay: o2, transportType: s2 == null ? void 0 : s2.transportType };
        (n3 = s2 == null ? void 0 : s2.internal) != null && n3.skipSubscribe || this.pending.set(i2, a2);
        const c2 = await this.rpcSubscribe(i2, o2, s2);
        return typeof c2 == "string" && (this.onSubscribe(c2, a2), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s2 } })), c2;
      } catch (o2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o2), o2;
      }
    }), f$4(this, "unsubscribe", async (i2, s2) => {
      this.isInitialized(), typeof (s2 == null ? void 0 : s2.id) < "u" ? await this.unsubscribeById(i2, s2.id, s2) : await this.unsubscribeByTopic(i2, s2);
    }), f$4(this, "isSubscribed", (i2) => new Promise((s2) => {
      s2(this.topicMap.topics.includes(i2));
    })), f$4(this, "isKnownTopic", (i2) => new Promise((s2) => {
      s2(this.topicMap.topics.includes(i2) || this.pending.has(i2) || this.cached.some((n3) => n3.topic === i2));
    })), f$4(this, "on", (i2, s2) => {
      this.events.on(i2, s2);
    }), f$4(this, "once", (i2, s2) => {
      this.events.once(i2, s2);
    }), f$4(this, "off", (i2, s2) => {
      this.events.off(i2, s2);
    }), f$4(this, "removeListener", (i2, s2) => {
      this.events.removeListener(i2, s2);
    }), f$4(this, "start", async () => {
      await this.onConnect();
    }), f$4(this, "stop", async () => {
      await this.onDisconnect();
    }), f$4(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), f$4(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i2 = [];
      this.pending.forEach((s2) => {
        i2.push(s2);
      }), await this.batchSubscribe(i2);
    }), f$4(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r$3.pulse, async () => {
        await this.checkPending();
      }), this.events.on(U$1.created, async (i2) => {
        const s2 = U$1.created;
        this.logger.info(`Emitting ${s2}`), this.logger.debug({ type: "event", event: s2, data: i2 }), await this.persist();
      }), this.events.on(U$1.deleted, async (i2) => {
        const s2 = U$1.deleted;
        this.logger.info(`Emitting ${s2}`), this.logger.debug({ type: "event", event: s2, data: i2 }), await this.persist();
      });
    }), this.relayer = e2, this.logger = E$2(t2, this.name), this.clientId = "";
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
  hasSubscription(e2, t2) {
    let i2 = false;
    try {
      i2 = this.getSubscription(e2).topic === t2;
    } catch {
    }
    return i2;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e2, t2) {
    const i2 = this.topicMap.get(e2);
    await Promise.all(i2.map(async (s2) => await this.unsubscribeById(e2, s2, t2)));
  }
  async unsubscribeById(e2, t2, i2) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t2, opts: i2 } });
    try {
      const s2 = xa(i2);
      await this.restartToComplete({ topic: e2, id: t2, relay: s2 }), await this.rpcUnsubscribe(e2, t2, s2);
      const n3 = zt$2("USER_DISCONNECTED", `${this.name}, ${e2}`);
      await this.onUnsubscribe(e2, t2, n3), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t2, opts: i2 } });
    } catch (s2) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s2), s2;
    }
  }
  async rpcSubscribe(e2, t2, i2) {
    var s2, n3;
    const o2 = await this.getSubscriptionId(e2);
    if ((s2 = i2 == null ? void 0 : i2.internal) != null && s2.skipSubscribe) return o2;
    (!i2 || (i2 == null ? void 0 : i2.transportType) === ee$1.relay) && await this.restartToComplete({ topic: e2, id: e2, relay: t2 });
    const a2 = { method: Ea(t2.protocol).subscribe, params: { topic: e2 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a2 });
    const c2 = (n3 = i2 == null ? void 0 : i2.internal) == null ? void 0 : n3.throwOnFailedPublish;
    try {
      if ((i2 == null ? void 0 : i2.transportType) === ee$1.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a2).catch((p2) => this.logger.warn(p2));
      }, cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND)), o2;
      const h3 = new Promise(async (p2) => {
        const y4 = (w2) => {
          w2.topic === e2 && (this.events.removeListener(U$1.created, y4), p2(w2.id));
        };
        this.events.on(U$1.created, y4);
        try {
          const w2 = await Ei$1(new Promise((u2, m5) => {
            this.relayer.request(a2).catch((D2) => {
              this.logger.warn(D2, D2 == null ? void 0 : D2.message), m5(D2);
            }).then(u2);
          }), this.initialSubscribeTimeout, `Subscribing to ${e2} failed, please try again`);
          this.events.removeListener(U$1.created, y4), p2(w2);
        } catch {
        }
      }), l2 = await Ei$1(h3, this.subscribeTimeout, `Subscribing to ${e2} failed, please try again`);
      if (!l2 && c2) throw new Error(`Subscribing to ${e2} failed, please try again`);
      return l2 ? o2 : null;
    } catch (h3) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C$3.connection_stalled), c2) throw h3;
    }
    return null;
  }
  async rpcBatchSubscribe(e2) {
    if (!e2.length) return;
    const t2 = e2[0].relay, i2 = { method: Ea(t2.protocol).batchSubscribe, params: { topics: e2.map((s2) => s2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    try {
      await await Ei$1(new Promise((s2) => {
        this.relayer.request(i2).catch((n3) => this.logger.warn(n3)).then(s2);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(C$3.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e2) {
    if (!e2.length) return;
    const t2 = e2[0].relay, i2 = { method: Ea(t2.protocol).batchFetchMessages, params: { topics: e2.map((n3) => n3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    let s2;
    try {
      s2 = await await Ei$1(new Promise((n3, o2) => {
        this.relayer.request(i2).catch((a2) => {
          this.logger.warn(a2), o2(a2);
        }).then(n3);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(C$3.connection_stalled);
    }
    return s2;
  }
  rpcUnsubscribe(e2, t2, i2) {
    const s2 = { method: Ea(i2.protocol).unsubscribe, params: { topic: e2, id: t2 } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 }), this.relayer.request(s2);
  }
  onSubscribe(e2, t2) {
    this.setSubscription(e2, Je$1(fe$2({}, t2), { id: e2 })), this.pending.delete(t2.topic);
  }
  onBatchSubscribe(e2) {
    e2.length && e2.forEach((t2) => {
      this.setSubscription(t2.id, fe$2({}, t2)), this.pending.delete(t2.topic);
    });
  }
  async onUnsubscribe(e2, t2, i2) {
    this.events.removeAllListeners(t2), this.hasSubscription(t2, e2) && this.deleteSubscription(t2, i2), await this.relayer.messages.del(e2);
  }
  async setRelayerSubscriptions(e2) {
    await this.relayer.core.storage.setItem(this.storageKey, e2);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e2, t2) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t2 }), this.addSubscription(e2, t2);
  }
  addSubscription(e2, t2) {
    this.subscriptions.set(e2, fe$2({}, t2)), this.topicMap.set(t2.topic, e2), this.events.emit(U$1.created, t2);
  }
  getSubscription(e2) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
    const t2 = this.subscriptions.get(e2);
    if (!t2) {
      const { message: i2 } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i2);
    }
    return t2;
  }
  deleteSubscription(e2, t2) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t2 });
    const i2 = this.getSubscription(e2);
    this.subscriptions.delete(e2), this.topicMap.delete(i2.topic, e2), this.events.emit(U$1.deleted, Je$1(fe$2({}, i2), { reason: t2 }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(U$1.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e2 = [...this.cached], t2 = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i2 = 0; i2 < t2; i2++) {
        const s2 = e2.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s2);
      }
    }
    this.events.emit(U$1.resubscribed);
  }
  async restore() {
    try {
      const e2 = await this.getRelayerSubscriptions();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.subscriptions.size && !e2.every((t2) => {
        var i2;
        return t2.topic === ((i2 = this.subscriptions.get(t2.id)) == null ? void 0 : i2.topic);
      })) {
        const { message: t2 } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t2);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
    }
  }
  async batchSubscribe(e2) {
    e2.length && (await this.rpcBatchSubscribe(e2), this.onBatchSubscribe(await Promise.all(e2.map(async (t2) => Je$1(fe$2({}, t2), { id: await this.getSubscriptionId(t2.topic) })))));
  }
  async batchFetchMessages(e2) {
    if (!e2.length) return;
    this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
    const t2 = await this.rpcBatchFetchMessages(e2);
    t2 && t2.messages && (await Ci$1(cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t2.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async restartToComplete(e2) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e2), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e2) {
    return da(e2 + await this.getClientId());
  }
}
var ro = Object.defineProperty, Ri = Object.getOwnPropertySymbols, no = Object.prototype.hasOwnProperty, oo = Object.prototype.propertyIsEnumerable, Xe$1 = (r2, e2, t2) => e2 in r2 ? ro(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, Ai = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) no.call(e2, t2) && Xe$1(r2, t2, e2[t2]);
  if (Ri) for (var t2 of Ri(e2)) oo.call(e2, t2) && Xe$1(r2, t2, e2[t2]);
  return r2;
}, g$3 = (r2, e2, t2) => Xe$1(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class xi extends d$5 {
  constructor(e2) {
    super(e2), g$3(this, "protocol", "wc"), g$3(this, "version", 2), g$3(this, "core"), g$3(this, "logger"), g$3(this, "events", new eventsExports.EventEmitter()), g$3(this, "provider"), g$3(this, "messages"), g$3(this, "subscriber"), g$3(this, "publisher"), g$3(this, "name", Lt$1), g$3(this, "transportExplicitlyClosed", false), g$3(this, "initialized", false), g$3(this, "connectionAttemptInProgress", false), g$3(this, "relayUrl"), g$3(this, "projectId"), g$3(this, "packageName"), g$3(this, "bundleId"), g$3(this, "hasExperiencedNetworkDisruption", false), g$3(this, "pingTimeout"), g$3(this, "heartBeatTimeout", cjsExports$1.toMiliseconds(cjsExports$1.THIRTY_SECONDS + cjsExports$1.FIVE_SECONDS)), g$3(this, "reconnectTimeout"), g$3(this, "connectPromise"), g$3(this, "reconnectInProgress", false), g$3(this, "requestsInFlight", []), g$3(this, "connectTimeout", cjsExports$1.toMiliseconds(cjsExports$1.ONE_SECOND * 15)), g$3(this, "request", async (t2) => {
      var i2, s2;
      this.logger.debug("Publishing Request Payload");
      const n3 = t2.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n3, method: t2.method, topic: (i2 = t2.params) == null ? void 0 : i2.topic }, "relayer.request - publishing...");
        const o2 = `${n3}:${((s2 = t2.params) == null ? void 0 : s2.tag) || ""}`;
        this.requestsInFlight.push(o2);
        const a2 = await this.provider.request(t2);
        return this.requestsInFlight = this.requestsInFlight.filter((c2) => c2 !== o2), a2;
      } catch (o2) {
        throw this.logger.debug(`Failed to Publish Request: ${n3}`), o2;
      }
    }), g$3(this, "resetPingTimeout", () => {
      rn$1() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var t2, i2, s2, n3;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n3 = (s2 = (i2 = (t2 = this.provider) == null ? void 0 : t2.connection) == null ? void 0 : i2.socket) == null ? void 0 : s2.terminate) == null || n3.call(s2);
        } catch (o2) {
          this.logger.warn(o2, o2 == null ? void 0 : o2.message);
        }
      }, this.heartBeatTimeout));
    }), g$3(this, "onPayloadHandler", (t2) => {
      this.onProviderPayload(t2), this.resetPingTimeout();
    }), g$3(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(C$3.connect);
    }), g$3(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), g$3(this, "onProviderErrorHandler", (t2) => {
      this.logger.fatal(`Fatal socket error: ${t2.message}`), this.events.emit(C$3.error, t2), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), g$3(this, "registerProviderListeners", () => {
      this.provider.on(M$3.payload, this.onPayloadHandler), this.provider.on(M$3.connect, this.onConnectHandler), this.provider.on(M$3.disconnect, this.onDisconnectHandler), this.provider.on(M$3.error, this.onProviderErrorHandler);
    }), this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? E$2(e2.logger, this.name) : Ne$1(k$3({ level: e2.logger || zt$1 })), this.messages = new Ti(this.logger, e2.core), this.subscriber = new Oi(this, this.logger), this.publisher = new Yn(this, this.logger), this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || Ke$2, ci$1() ? this.packageName = ai$1() : fi$1() && (this.bundleId = ai$1()), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.transportOpen().catch((e2) => this.logger.warn(e2, e2 == null ? void 0 : e2.message));
  }
  get context() {
    return y$4(this.logger);
  }
  get connected() {
    var e2, t2, i2;
    return ((i2 = (t2 = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t2.socket) == null ? void 0 : i2.readyState) === 1 || false;
  }
  get connecting() {
    var e2, t2, i2;
    return ((i2 = (t2 = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t2.socket) == null ? void 0 : i2.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e2, t2, i2) {
    this.isInitialized(), await this.publisher.publish(e2, t2, i2), await this.recordMessageEvent({ topic: e2, message: t2, publishedAt: Date.now(), transportType: ee$1.relay }, ye$1.outbound);
  }
  async publishCustom(e2) {
    this.isInitialized(), await this.publisher.publishCustom(e2);
  }
  async subscribe(e2, t2) {
    var i2, s2, n3;
    this.isInitialized(), (!(t2 != null && t2.transportType) || (t2 == null ? void 0 : t2.transportType) === "relay") && await this.toEstablishConnection();
    const o2 = typeof ((i2 = t2 == null ? void 0 : t2.internal) == null ? void 0 : i2.throwOnFailedPublish) > "u" ? true : (s2 = t2 == null ? void 0 : t2.internal) == null ? void 0 : s2.throwOnFailedPublish;
    let a2 = ((n3 = this.subscriber.topicMap.get(e2)) == null ? void 0 : n3[0]) || "", c2;
    const h3 = (l2) => {
      l2.topic === e2 && (this.subscriber.off(U$1.created, h3), c2());
    };
    return await Promise.all([new Promise((l2) => {
      c2 = l2, this.subscriber.on(U$1.created, h3);
    }), new Promise(async (l2, p2) => {
      a2 = await this.subscriber.subscribe(e2, Ai({ internal: { throwOnFailedPublish: o2 } }, t2)).catch((y4) => {
        o2 && p2(y4);
      }) || a2, l2();
    })]), a2;
  }
  async unsubscribe(e2, t2) {
    this.isInitialized(), await this.subscriber.unsubscribe(e2, t2);
  }
  on(e2, t2) {
    this.events.on(e2, t2);
  }
  once(e2, t2) {
    this.events.once(e2, t2);
  }
  off(e2, t2) {
    this.events.off(e2, t2);
  }
  removeListener(e2, t2) {
    this.events.removeListener(e2, t2);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Ei$1(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e2) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t2, i2) => {
      await this.connect(e2).then(t2).catch(i2).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e2) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await fu()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e2) {
    if ((e2 == null ? void 0 : e2.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t2 = e2.sort((i2, s2) => i2.publishedAt - s2.publishedAt);
    this.logger.debug(`Batch of ${t2.length} message events sorted`);
    for (const i2 of t2) try {
      await this.onMessageEvent(i2);
    } catch (s2) {
      this.logger.warn(s2, "Error while processing batch message event: " + (s2 == null ? void 0 : s2.message));
    }
    this.logger.trace(`Batch of ${t2.length} message events processed`);
  }
  async onLinkMessageEvent(e2, t2) {
    const { topic: i2 } = e2;
    if (!t2.sessionExists) {
      const s2 = Si$1(cjsExports$1.FIVE_MINUTES), n3 = { topic: i2, expiry: s2, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(i2, n3);
    }
    this.events.emit(C$3.message, e2), await this.recordMessageEvent(e2, ye$1.inbound);
  }
  async connect(e2) {
    await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t2 = 1;
    for (; t2 < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t2}...`), await this.createProvider(), await new Promise(async (i2, s2) => {
          const n3 = () => {
            s2(new Error("Connection interrupted while trying to connect"));
          };
          this.provider.once(M$3.disconnect, n3), await Ei$1(new Promise((o2, a2) => {
            this.provider.connect().then(o2).catch(a2);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o2) => {
            s2(o2);
          }).finally(() => {
            this.provider.off(M$3.disconnect, n3), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o2, a2) => {
            const c2 = () => {
              s2(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(M$3.disconnect, c2), await this.subscriber.start().then(o2).catch(a2).finally(() => {
              this.provider.off(M$3.disconnect, c2);
            });
          }), this.hasExperiencedNetworkDisruption = false, i2();
        });
      } catch (i2) {
        await this.subscriber.stop();
        const s2 = i2;
        this.logger.warn({}, s2.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t2}`);
        break;
      }
      await new Promise((i2) => setTimeout(i2, cjsExports$1.toMiliseconds(t2 * 1))), t2++;
    }
  }
  startPingTimeout() {
    var e2, t2, i2, s2, n3;
    if (rn$1()) try {
      (t2 = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t2.socket && ((n3 = (s2 = (i2 = this.provider) == null ? void 0 : i2.connection) == null ? void 0 : s2.socket) == null || n3.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o2) {
      this.logger.warn(o2, o2 == null ? void 0 : o2.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e2 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o$4(new f$7(di$1({ sdkVersion: Pe$1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e2, t2) {
    const { topic: i2, message: s2 } = e2;
    await this.messages.set(i2, s2, t2);
  }
  async shouldIgnoreMessageEvent(e2) {
    const { topic: t2, message: i2 } = e2;
    if (!i2 || i2.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i2}`), true;
    if (!await this.subscriber.isKnownTopic(t2)) return this.logger.warn(`Ignoring message for unknown topic ${t2}`), true;
    const s2 = this.messages.has(t2, i2);
    return s2 && this.logger.warn(`Ignoring duplicate message: ${i2}`), s2;
  }
  async onProviderPayload(e2) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
      if (!e2.method.endsWith(kt$1)) return;
      const t2 = e2.params, { topic: i2, message: s2, publishedAt: n3, attestation: o2 } = t2.data, a2 = { topic: i2, message: s2, publishedAt: n3, transportType: ee$1.relay, attestation: o2 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ai({ type: "event", event: t2.id }, a2)), this.events.emit(t2.id, a2), await this.acknowledgePayload(e2), await this.onMessageEvent(a2);
    } else isJsonRpcResponse(e2) && this.events.emit(C$3.message_ack, e2);
  }
  async onMessageEvent(e2) {
    await this.shouldIgnoreMessageEvent(e2) || (await this.recordMessageEvent(e2, ye$1.inbound), this.events.emit(C$3.message, e2));
  }
  async acknowledgePayload(e2) {
    const t2 = formatJsonRpcResult(e2.id, true);
    await this.provider.connection.send(t2);
  }
  unregisterProviderListeners() {
    this.provider.off(M$3.payload, this.onPayloadHandler), this.provider.off(M$3.connect, this.onConnectHandler), this.provider.off(M$3.disconnect, this.onDisconnectHandler), this.provider.off(M$3.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e2 = await fu();
    au(async (t2) => {
      e2 !== t2 && (e2 = t2, t2 ? await this.transportOpen().catch((i2) => this.logger.error(i2, i2 == null ? void 0 : i2.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    }), this.core.heartbeat.on(r$3.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && uu()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (t2) {
        this.logger.warn(t2, t2 == null ? void 0 : t2.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(C$3.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e2) => this.logger.error(e2, e2 == null ? void 0 : e2.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, cjsExports$1.toMiliseconds(jt$1)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
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
function ao(r2, e2) {
  return r2 === e2 || Number.isNaN(r2) && Number.isNaN(e2);
}
function Ni(r2) {
  return Object.getOwnPropertySymbols(r2).filter((e2) => Object.prototype.propertyIsEnumerable.call(r2, e2));
}
function $i(r2) {
  return r2 == null ? r2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r2);
}
const co = "[object RegExp]", ho = "[object String]", lo = "[object Number]", uo = "[object Boolean]", zi = "[object Arguments]", go = "[object Symbol]", po = "[object Date]", yo = "[object Map]", bo = "[object Set]", mo = "[object Array]", fo = "[object Function]", Do = "[object ArrayBuffer]", Ze$1 = "[object Object]", vo = "[object Error]", wo = "[object DataView]", _o = "[object Uint8Array]", Eo2 = "[object Uint8ClampedArray]", Io = "[object Uint16Array]", To = "[object Uint32Array]", Co = "[object BigUint64Array]", Po = "[object Int8Array]", So = "[object Int16Array]", Oo = "[object Int32Array]", Ro = "[object BigInt64Array]", Ao = "[object Float32Array]", xo = "[object Float64Array]";
function No() {
}
function Li(r2) {
  if (!r2 || typeof r2 != "object") return false;
  const e2 = Object.getPrototypeOf(r2);
  return e2 === null || e2 === Object.prototype || Object.getPrototypeOf(e2) === null ? Object.prototype.toString.call(r2) === "[object Object]" : false;
}
function $o(r2, e2, t2) {
  return De$1(r2, e2, void 0, void 0, void 0, void 0, t2);
}
function De$1(r2, e2, t2, i2, s2, n3, o2) {
  const a2 = o2(r2, e2, t2, i2, s2, n3);
  if (a2 !== void 0) return a2;
  if (typeof r2 == typeof e2) switch (typeof r2) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return r2 === e2;
    case "number":
      return r2 === e2 || Object.is(r2, e2);
    case "function":
      return r2 === e2;
    case "object":
      return ve$1(r2, e2, n3, o2);
  }
  return ve$1(r2, e2, n3, o2);
}
function ve$1(r2, e2, t2, i2) {
  if (Object.is(r2, e2)) return true;
  let s2 = $i(r2), n3 = $i(e2);
  if (s2 === zi && (s2 = Ze$1), n3 === zi && (n3 = Ze$1), s2 !== n3) return false;
  switch (s2) {
    case ho:
      return r2.toString() === e2.toString();
    case lo: {
      const c2 = r2.valueOf(), h3 = e2.valueOf();
      return ao(c2, h3);
    }
    case uo:
    case po:
    case go:
      return Object.is(r2.valueOf(), e2.valueOf());
    case co:
      return r2.source === e2.source && r2.flags === e2.flags;
    case fo:
      return r2 === e2;
  }
  t2 = t2 ?? /* @__PURE__ */ new Map();
  const o2 = t2.get(r2), a2 = t2.get(e2);
  if (o2 != null && a2 != null) return o2 === e2;
  t2.set(r2, e2), t2.set(e2, r2);
  try {
    switch (s2) {
      case yo: {
        if (r2.size !== e2.size) return false;
        for (const [c2, h3] of r2.entries()) if (!e2.has(c2) || !De$1(h3, e2.get(c2), c2, r2, e2, t2, i2)) return false;
        return true;
      }
      case bo: {
        if (r2.size !== e2.size) return false;
        const c2 = Array.from(r2.values()), h3 = Array.from(e2.values());
        for (let l2 = 0; l2 < c2.length; l2++) {
          const p2 = c2[l2], y4 = h3.findIndex((w2) => De$1(p2, w2, void 0, r2, e2, t2, i2));
          if (y4 === -1) return false;
          h3.splice(y4, 1);
        }
        return true;
      }
      case mo:
      case _o:
      case Eo2:
      case Io:
      case To:
      case Co:
      case Po:
      case So:
      case Oo:
      case Ro:
      case Ao:
      case xo: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r2) !== Buffer.isBuffer(e2) || r2.length !== e2.length) return false;
        for (let c2 = 0; c2 < r2.length; c2++) if (!De$1(r2[c2], e2[c2], c2, r2, e2, t2, i2)) return false;
        return true;
      }
      case Do:
        return r2.byteLength !== e2.byteLength ? false : ve$1(new Uint8Array(r2), new Uint8Array(e2), t2, i2);
      case wo:
        return r2.byteLength !== e2.byteLength || r2.byteOffset !== e2.byteOffset ? false : ve$1(new Uint8Array(r2), new Uint8Array(e2), t2, i2);
      case vo:
        return r2.name === e2.name && r2.message === e2.message;
      case Ze$1: {
        if (!(ve$1(r2.constructor, e2.constructor, t2, i2) || Li(r2) && Li(e2))) return false;
        const h3 = [...Object.keys(r2), ...Ni(r2)], l2 = [...Object.keys(e2), ...Ni(e2)];
        if (h3.length !== l2.length) return false;
        for (let p2 = 0; p2 < h3.length; p2++) {
          const y4 = h3[p2], w2 = r2[y4];
          if (!Object.hasOwn(e2, y4)) return false;
          const u2 = e2[y4];
          if (!De$1(w2, u2, y4, r2, e2, t2, i2)) return false;
        }
        return true;
      }
      default:
        return false;
    }
  } finally {
    t2.delete(r2), t2.delete(e2);
  }
}
function zo(r2, e2) {
  return $o(r2, e2, No);
}
var Lo = Object.defineProperty, ki = Object.getOwnPropertySymbols, ko = Object.prototype.hasOwnProperty, jo = Object.prototype.propertyIsEnumerable, Qe$1 = (r2, e2, t2) => e2 in r2 ? Lo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, ji2 = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) ko.call(e2, t2) && Qe$1(r2, t2, e2[t2]);
  if (ki) for (var t2 of ki(e2)) jo.call(e2, t2) && Qe$1(r2, t2, e2[t2]);
  return r2;
}, F$1 = (r2, e2, t2) => Qe$1(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Ui extends f$5 {
  constructor(e2, t2, i2, s2 = W$1, n3 = void 0) {
    super(e2, t2, i2, s2), this.core = e2, this.logger = t2, this.name = i2, F$1(this, "map", /* @__PURE__ */ new Map()), F$1(this, "version", Ut$1), F$1(this, "cached", []), F$1(this, "initialized", false), F$1(this, "getKey"), F$1(this, "storagePrefix", W$1), F$1(this, "recentlyDeleted", []), F$1(this, "recentlyDeletedLimit", 200), F$1(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o2) => {
        this.getKey && o2 !== null && !Dt$1(o2) ? this.map.set(this.getKey(o2), o2) : Fa(o2) ? this.map.set(o2.id, o2) : Za(o2) && this.map.set(o2.topic, o2);
      }), this.cached = [], this.initialized = true);
    }), F$1(this, "set", async (o2, a2) => {
      this.isInitialized(), this.map.has(o2) ? await this.update(o2, a2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o2, value: a2 }), this.map.set(o2, a2), await this.persist());
    }), F$1(this, "get", (o2) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o2 }), this.getData(o2))), F$1(this, "getAll", (o2) => (this.isInitialized(), o2 ? this.values.filter((a2) => Object.keys(o2).every((c2) => zo(a2[c2], o2[c2]))) : this.values)), F$1(this, "update", async (o2, a2) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o2, update: a2 });
      const c2 = ji2(ji2({}, this.getData(o2)), a2);
      this.map.set(o2, c2), await this.persist();
    }), F$1(this, "delete", async (o2, a2) => {
      this.isInitialized(), this.map.has(o2) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o2, reason: a2 }), this.map.delete(o2), this.addToRecentlyDeleted(o2), await this.persist());
    }), this.logger = E$2(t2, this.name), this.storagePrefix = s2, this.getKey = n3;
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
  addToRecentlyDeleted(e2) {
    this.recentlyDeleted.push(e2), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e2) {
    const t2 = this.map.get(e2);
    if (!t2) {
      if (this.recentlyDeleted.includes(e2)) {
        const { message: s2 } = Bt$2("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
        throw this.logger.error(s2), new Error(s2);
      }
      const { message: i2 } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.error(i2), new Error(i2);
    }
    return t2;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e2 = await this.getDataStore();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.map.size) {
        const { message: t2 } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), new Error(t2);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
var Uo = Object.defineProperty, Fo = (r2, e2, t2) => e2 in r2 ? Uo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, d$4 = (r2, e2, t2) => Fo(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Fi {
  constructor(e2, t2) {
    this.core = e2, this.logger = t2, d$4(this, "name", Bt$1), d$4(this, "version", Vt$1), d$4(this, "events", new xe$1()), d$4(this, "pairings"), d$4(this, "initialized", false), d$4(this, "storagePrefix", W$1), d$4(this, "ignoredPayloadTypes", [ie$1]), d$4(this, "registeredMethods", []), d$4(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), d$4(this, "register", ({ methods: i2 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i2])];
    }), d$4(this, "create", async (i2) => {
      this.isInitialized();
      const s2 = aa(), n3 = await this.core.crypto.setSymKey(s2), o2 = Si$1(cjsExports$1.FIVE_MINUTES), a2 = { protocol: $t$1 }, c2 = { topic: n3, expiry: o2, relay: a2, active: false, methods: i2 == null ? void 0 : i2.methods }, h3 = _a({ protocol: this.core.protocol, version: this.core.version, topic: n3, symKey: s2, relay: a2, expiryTimestamp: o2, methods: i2 == null ? void 0 : i2.methods });
      return this.events.emit(ae$1.create, c2), this.core.expirer.set(n3, o2), await this.pairings.set(n3, c2), await this.core.relayer.subscribe(n3, { transportType: i2 == null ? void 0 : i2.transportType, internal: i2 == null ? void 0 : i2.internal }), { topic: n3, uri: h3 };
    }), d$4(this, "pair", async (i2) => {
      this.isInitialized();
      const s2 = this.core.eventClient.createEvent({ properties: { topic: i2 == null ? void 0 : i2.uri, trace: [Y.pairing_started] } });
      this.isValidPair(i2, s2);
      const { topic: n3, symKey: o2, relay: a2, expiryTimestamp: c2, methods: h3 } = Ua(i2.uri);
      s2.props.properties.topic = n3, s2.addTrace(Y.pairing_uri_validation_success), s2.addTrace(Y.pairing_uri_not_expired);
      let l2;
      if (this.pairings.keys.includes(n3)) {
        if (l2 = this.pairings.get(n3), s2.addTrace(Y.existing_pairing), l2.active) throw s2.setError(X.active_pairing_already_exists), new Error(`Pairing already exists: ${n3}. Please try again with a new connection URI.`);
        s2.addTrace(Y.pairing_not_expired);
      }
      const p2 = c2 || Si$1(cjsExports$1.FIVE_MINUTES), y4 = { topic: n3, relay: a2, expiry: p2, active: false, methods: h3 };
      this.core.expirer.set(n3, p2), await this.pairings.set(n3, y4), s2.addTrace(Y.store_new_pairing), i2.activatePairing && await this.activate({ topic: n3 }), this.events.emit(ae$1.create, y4), s2.addTrace(Y.emit_inactive_pairing), this.core.crypto.keychain.has(n3) || await this.core.crypto.setSymKey(o2, n3), s2.addTrace(Y.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s2.setError(X.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n3, { relay: a2 });
      } catch (w2) {
        throw s2.setError(X.subscribe_pairing_topic_failure), w2;
      }
      return s2.addTrace(Y.subscribe_pairing_topic_success), y4;
    }), d$4(this, "activate", async ({ topic: i2 }) => {
      this.isInitialized();
      const s2 = Si$1(cjsExports$1.FIVE_MINUTES);
      this.core.expirer.set(i2, s2), await this.pairings.update(i2, { active: true, expiry: s2 });
    }), d$4(this, "ping", async (i2) => {
      this.isInitialized(), await this.isValidPing(i2), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s2 } = i2;
      if (this.pairings.keys.includes(s2)) {
        const n3 = await this.sendRequest(s2, "wc_pairingPing", {}), { done: o2, resolve: a2, reject: c2 } = xi$1();
        this.events.once(Ni$1("pairing_ping", n3), ({ error: h3 }) => {
          h3 ? c2(h3) : a2();
        }), await o2();
      }
    }), d$4(this, "updateExpiry", async ({ topic: i2, expiry: s2 }) => {
      this.isInitialized(), await this.pairings.update(i2, { expiry: s2 });
    }), d$4(this, "updateMetadata", async ({ topic: i2, metadata: s2 }) => {
      this.isInitialized(), await this.pairings.update(i2, { peerMetadata: s2 });
    }), d$4(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), d$4(this, "disconnect", async (i2) => {
      this.isInitialized(), await this.isValidDisconnect(i2);
      const { topic: s2 } = i2;
      this.pairings.keys.includes(s2) && (await this.sendRequest(s2, "wc_pairingDelete", zt$2("USER_DISCONNECTED")), await this.deletePairing(s2));
    }), d$4(this, "formatUriFromPairing", (i2) => {
      this.isInitialized();
      const { topic: s2, relay: n3, expiry: o2, methods: a2 } = i2, c2 = this.core.crypto.keychain.get(s2);
      return _a({ protocol: this.core.protocol, version: this.core.version, topic: s2, symKey: c2, relay: n3, expiryTimestamp: o2, methods: a2 });
    }), d$4(this, "sendRequest", async (i2, s2, n3) => {
      const o2 = formatJsonRpcRequest(s2, n3), a2 = await this.core.crypto.encode(i2, o2), c2 = oe$1[s2].req;
      return this.core.history.set(i2, o2), this.core.relayer.publish(i2, a2, c2), o2.id;
    }), d$4(this, "sendResult", async (i2, s2, n3) => {
      const o2 = formatJsonRpcResult(i2, n3), a2 = await this.core.crypto.encode(s2, o2), c2 = (await this.core.history.get(s2, i2)).request.method, h3 = oe$1[c2].res;
      await this.core.relayer.publish(s2, a2, h3), await this.core.history.resolve(o2);
    }), d$4(this, "sendError", async (i2, s2, n3) => {
      const o2 = formatJsonRpcError(i2, n3), a2 = await this.core.crypto.encode(s2, o2), c2 = (await this.core.history.get(s2, i2)).request.method, h3 = oe$1[c2] ? oe$1[c2].res : oe$1.unregistered_method.res;
      await this.core.relayer.publish(s2, a2, h3), await this.core.history.resolve(o2);
    }), d$4(this, "deletePairing", async (i2, s2) => {
      await this.core.relayer.unsubscribe(i2), await Promise.all([this.pairings.delete(i2, zt$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i2), s2 ? Promise.resolve() : this.core.expirer.del(i2)]);
    }), d$4(this, "cleanup", async () => {
      const i2 = this.pairings.getAll().filter((s2) => Oi$1(s2.expiry));
      await Promise.all(i2.map((s2) => this.deletePairing(s2.topic)));
    }), d$4(this, "onRelayEventRequest", async (i2) => {
      const { topic: s2, payload: n3 } = i2;
      switch (n3.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s2, n3);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s2, n3);
        default:
          return await this.onUnknownRpcMethodRequest(s2, n3);
      }
    }), d$4(this, "onRelayEventResponse", async (i2) => {
      const { topic: s2, payload: n3 } = i2, o2 = (await this.core.history.get(s2, n3.id)).request.method;
      switch (o2) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s2, n3);
        default:
          return this.onUnknownRpcMethodResponse(o2);
      }
    }), d$4(this, "onPairingPingRequest", async (i2, s2) => {
      const { id: n3 } = s2;
      try {
        this.isValidPing({ topic: i2 }), await this.sendResult(n3, i2, true), this.events.emit(ae$1.ping, { id: n3, topic: i2 });
      } catch (o2) {
        await this.sendError(n3, i2, o2), this.logger.error(o2);
      }
    }), d$4(this, "onPairingPingResponse", (i2, s2) => {
      const { id: n3 } = s2;
      setTimeout(() => {
        isJsonRpcResult(s2) ? this.events.emit(Ni$1("pairing_ping", n3), {}) : isJsonRpcError(s2) && this.events.emit(Ni$1("pairing_ping", n3), { error: s2.error });
      }, 500);
    }), d$4(this, "onPairingDeleteRequest", async (i2, s2) => {
      const { id: n3 } = s2;
      try {
        this.isValidDisconnect({ topic: i2 }), await this.deletePairing(i2), this.events.emit(ae$1.delete, { id: n3, topic: i2 });
      } catch (o2) {
        await this.sendError(n3, i2, o2), this.logger.error(o2);
      }
    }), d$4(this, "onUnknownRpcMethodRequest", async (i2, s2) => {
      const { id: n3, method: o2 } = s2;
      try {
        if (this.registeredMethods.includes(o2)) return;
        const a2 = zt$2("WC_METHOD_UNSUPPORTED", o2);
        await this.sendError(n3, i2, a2), this.logger.error(a2);
      } catch (a2) {
        await this.sendError(n3, i2, a2), this.logger.error(a2);
      }
    }), d$4(this, "onUnknownRpcMethodResponse", (i2) => {
      this.registeredMethods.includes(i2) || this.logger.error(zt$2("WC_METHOD_UNSUPPORTED", i2));
    }), d$4(this, "isValidPair", (i2, s2) => {
      var n3;
      if (!Xa(i2)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `pair() params: ${i2}`);
        throw s2.setError(X.malformed_pairing_uri), new Error(a2);
      }
      if (!qa(i2.uri)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `pair() uri: ${i2.uri}`);
        throw s2.setError(X.malformed_pairing_uri), new Error(a2);
      }
      const o2 = Ua(i2 == null ? void 0 : i2.uri);
      if (!((n3 = o2 == null ? void 0 : o2.relay) != null && n3.protocol)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s2.setError(X.malformed_pairing_uri), new Error(a2);
      }
      if (!(o2 != null && o2.symKey)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s2.setError(X.malformed_pairing_uri), new Error(a2);
      }
      if (o2 != null && o2.expiryTimestamp && cjsExports$1.toMiliseconds(o2 == null ? void 0 : o2.expiryTimestamp) < Date.now()) {
        s2.setError(X.pairing_expired);
        const { message: a2 } = Bt$2("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a2);
      }
    }), d$4(this, "isValidPing", async (i2) => {
      if (!Xa(i2)) {
        const { message: n3 } = Bt$2("MISSING_OR_INVALID", `ping() params: ${i2}`);
        throw new Error(n3);
      }
      const { topic: s2 } = i2;
      await this.isValidPairingTopic(s2);
    }), d$4(this, "isValidDisconnect", async (i2) => {
      if (!Xa(i2)) {
        const { message: n3 } = Bt$2("MISSING_OR_INVALID", `disconnect() params: ${i2}`);
        throw new Error(n3);
      }
      const { topic: s2 } = i2;
      await this.isValidPairingTopic(s2);
    }), d$4(this, "isValidPairingTopic", async (i2) => {
      if (!ft$2(i2, false)) {
        const { message: s2 } = Bt$2("MISSING_OR_INVALID", `pairing topic should be a string: ${i2}`);
        throw new Error(s2);
      }
      if (!this.pairings.keys.includes(i2)) {
        const { message: s2 } = Bt$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i2}`);
        throw new Error(s2);
      }
      if (Oi$1(this.pairings.get(i2).expiry)) {
        await this.deletePairing(i2);
        const { message: s2 } = Bt$2("EXPIRED", `pairing topic: ${i2}`);
        throw new Error(s2);
      }
    }), this.core = e2, this.logger = E$2(t2, this.name), this.pairings = new Ui(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y$4(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(C$3.message, async (e2) => {
      const { topic: t2, message: i2, transportType: s2 } = e2;
      if (this.pairings.keys.includes(t2) && s2 !== ee$1.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i2))) try {
        const n3 = await this.core.crypto.decode(t2, i2);
        isJsonRpcRequest(n3) ? (this.core.history.set(t2, n3), await this.onRelayEventRequest({ topic: t2, payload: n3 })) : isJsonRpcResponse(n3) && (await this.core.history.resolve(n3), await this.onRelayEventResponse({ topic: t2, payload: n3 }), this.core.history.delete(t2, n3.id)), await this.core.relayer.messages.ack(t2, i2);
      } catch (n3) {
        this.logger.error(n3);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(q.expired, async (e2) => {
      const { topic: t2 } = Ii$1(e2.target);
      t2 && this.pairings.keys.includes(t2) && (await this.deletePairing(t2, true), this.events.emit(ae$1.expire, { topic: t2 }));
    });
  }
}
var Mo = Object.defineProperty, Ko = (r2, e2, t2) => e2 in r2 ? Mo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, N$2 = (r2, e2, t2) => Ko(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Mi extends I$2 {
  constructor(e2, t2) {
    super(e2, t2), this.core = e2, this.logger = t2, N$2(this, "records", /* @__PURE__ */ new Map()), N$2(this, "events", new eventsExports.EventEmitter()), N$2(this, "name", qt$1), N$2(this, "version", Gt$1), N$2(this, "cached", []), N$2(this, "initialized", false), N$2(this, "storagePrefix", W$1), N$2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.records.set(i2.id, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), N$2(this, "set", (i2, s2, n3) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i2, request: s2, chainId: n3 }), this.records.has(s2.id)) return;
      const o2 = { id: s2.id, topic: i2, request: { method: s2.method, params: s2.params || null }, chainId: n3, expiry: Si$1(cjsExports$1.THIRTY_DAYS) };
      this.records.set(o2.id, o2), this.persist(), this.events.emit(V$1.created, o2);
    }), N$2(this, "resolve", async (i2) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i2 }), !this.records.has(i2.id)) return;
      const s2 = await this.getRecord(i2.id);
      typeof s2.response > "u" && (s2.response = isJsonRpcError(i2) ? { error: i2.error } : { result: i2.result }, this.records.set(s2.id, s2), this.persist(), this.events.emit(V$1.updated, s2));
    }), N$2(this, "get", async (i2, s2) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i2, id: s2 }), await this.getRecord(s2))), N$2(this, "delete", (i2, s2) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s2 }), this.values.forEach((n3) => {
        if (n3.topic === i2) {
          if (typeof s2 < "u" && n3.id !== s2) return;
          this.records.delete(n3.id), this.events.emit(V$1.deleted, n3);
        }
      }), this.persist();
    }), N$2(this, "exists", async (i2, s2) => (this.isInitialized(), this.records.has(s2) ? (await this.getRecord(s2)).topic === i2 : false)), N$2(this, "on", (i2, s2) => {
      this.events.on(i2, s2);
    }), N$2(this, "once", (i2, s2) => {
      this.events.once(i2, s2);
    }), N$2(this, "off", (i2, s2) => {
      this.events.off(i2, s2);
    }), N$2(this, "removeListener", (i2, s2) => {
      this.events.removeListener(i2, s2);
    }), this.logger = E$2(t2, this.name);
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
    const e2 = [];
    return this.values.forEach((t2) => {
      if (typeof t2.response < "u") return;
      const i2 = { topic: t2.topic, request: formatJsonRpcRequest(t2.request.method, t2.request.params, t2.id), chainId: t2.chainId };
      return e2.push(i2);
    }), e2;
  }
  async setJsonRpcRecords(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e2) {
    this.isInitialized();
    const t2 = this.records.get(e2);
    if (!t2) {
      const { message: i2 } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i2);
    }
    return t2;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(V$1.sync);
  }
  async restore() {
    try {
      const e2 = await this.getJsonRpcRecords();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.records.size) {
        const { message: t2 } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), new Error(t2);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
    }
  }
  registerEventListeners() {
    this.events.on(V$1.created, (e2) => {
      const t2 = V$1.created;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e2 });
    }), this.events.on(V$1.updated, (e2) => {
      const t2 = V$1.updated;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e2 });
    }), this.events.on(V$1.deleted, (e2) => {
      const t2 = V$1.deleted;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, record: e2 });
    }), this.core.heartbeat.on(r$3.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e2 = false;
      this.records.forEach((t2) => {
        cjsExports$1.toMiliseconds(t2.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t2.id}`), this.records.delete(t2.id), this.events.emit(V$1.deleted, t2, false), e2 = true);
      }), e2 && this.persist();
    } catch (e2) {
      this.logger.warn(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
var Bo = Object.defineProperty, Vo = (r2, e2, t2) => e2 in r2 ? Bo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, z$3 = (r2, e2, t2) => Vo(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Ki extends S$5 {
  constructor(e2, t2) {
    super(e2, t2), this.core = e2, this.logger = t2, z$3(this, "expirations", /* @__PURE__ */ new Map()), z$3(this, "events", new eventsExports.EventEmitter()), z$3(this, "name", Wt$1), z$3(this, "version", Ht$1), z$3(this, "cached", []), z$3(this, "initialized", false), z$3(this, "storagePrefix", W$1), z$3(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.expirations.set(i2.target, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), z$3(this, "has", (i2) => {
      try {
        const s2 = this.formatTarget(i2);
        return typeof this.getExpiration(s2) < "u";
      } catch {
        return false;
      }
    }), z$3(this, "set", (i2, s2) => {
      this.isInitialized();
      const n3 = this.formatTarget(i2), o2 = { target: n3, expiry: s2 };
      this.expirations.set(n3, o2), this.checkExpiry(n3, o2), this.events.emit(q.created, { target: n3, expiration: o2 });
    }), z$3(this, "get", (i2) => {
      this.isInitialized();
      const s2 = this.formatTarget(i2);
      return this.getExpiration(s2);
    }), z$3(this, "del", (i2) => {
      if (this.isInitialized(), this.has(i2)) {
        const s2 = this.formatTarget(i2), n3 = this.getExpiration(s2);
        this.expirations.delete(s2), this.events.emit(q.deleted, { target: s2, expiration: n3 });
      }
    }), z$3(this, "on", (i2, s2) => {
      this.events.on(i2, s2);
    }), z$3(this, "once", (i2, s2) => {
      this.events.once(i2, s2);
    }), z$3(this, "off", (i2, s2) => {
      this.events.off(i2, s2);
    }), z$3(this, "removeListener", (i2, s2) => {
      this.events.removeListener(i2, s2);
    }), this.logger = E$2(t2, this.name);
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
  formatTarget(e2) {
    if (typeof e2 == "string") return Bi$1(e2);
    if (typeof e2 == "number") return Ai$1(e2);
    const { message: t2 } = Bt$2("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
    throw new Error(t2);
  }
  async setExpirations(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(q.sync);
  }
  async restore() {
    try {
      const e2 = await this.getExpirations();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.expirations.size) {
        const { message: t2 } = Bt$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t2), new Error(t2);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
    }
  }
  getExpiration(e2) {
    const t2 = this.expirations.get(e2);
    if (!t2) {
      const { message: i2 } = Bt$2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.warn(i2), new Error(i2);
    }
    return t2;
  }
  checkExpiry(e2, t2) {
    const { expiry: i2 } = t2;
    cjsExports$1.toMiliseconds(i2) - Date.now() <= 0 && this.expire(e2, t2);
  }
  expire(e2, t2) {
    this.expirations.delete(e2), this.events.emit(q.expired, { target: e2, expiration: t2 });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e2, t2) => this.checkExpiry(t2, e2));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r$3.pulse, () => this.checkExpirations()), this.events.on(q.created, (e2) => {
      const t2 = q.created;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), this.persist();
    }), this.events.on(q.expired, (e2) => {
      const t2 = q.expired;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), this.persist();
    }), this.events.on(q.deleted, (e2) => {
      const t2 = q.deleted;
      this.logger.info(`Emitting ${t2}`), this.logger.debug({ type: "event", event: t2, data: e2 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
}
var qo = Object.defineProperty, Go = (r2, e2, t2) => e2 in r2 ? qo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, P$2 = (r2, e2, t2) => Go(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Bi extends M$4 {
  constructor(e2, t2, i2) {
    super(e2, t2, i2), this.core = e2, this.logger = t2, this.store = i2, P$2(this, "name", Yt$1), P$2(this, "abortController"), P$2(this, "isDevEnv"), P$2(this, "verifyUrlV3", Xt$1), P$2(this, "storagePrefix", W$1), P$2(this, "version", Fe$1), P$2(this, "publicKey"), P$2(this, "fetchPromise"), P$2(this, "init", async () => {
      var s2;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && cjsExports$1.toMiliseconds((s2 = this.publicKey) == null ? void 0 : s2.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), P$2(this, "register", async (s2) => {
      if (!Wt$2() || this.isDevEnv) return;
      const n3 = window.location.origin, { id: o2, decryptedId: a2 } = s2, c2 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n3}&id=${o2}&decryptedId=${a2}`;
      try {
        const h3 = cjsExports$2.getDocument(), l2 = this.startAbortTimer(cjsExports$1.ONE_SECOND * 5), p2 = await new Promise((y4, w2) => {
          const u2 = () => {
            window.removeEventListener("message", D2), h3.body.removeChild(m5), w2("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", u2);
          const m5 = h3.createElement("iframe");
          m5.src = c2, m5.style.display = "none", m5.addEventListener("error", u2, { signal: this.abortController.signal });
          const D2 = (_2) => {
            if (_2.data && typeof _2.data == "string") try {
              const E2 = JSON.parse(_2.data);
              if (E2.type === "verify_attestation") {
                if (sn$1(E2.attestation).payload.id !== o2) return;
                clearInterval(l2), h3.body.removeChild(m5), this.abortController.signal.removeEventListener("abort", u2), window.removeEventListener("message", D2), y4(E2.attestation === null ? "" : E2.attestation);
              }
            } catch (E2) {
              this.logger.warn(E2);
            }
          };
          h3.body.appendChild(m5), window.addEventListener("message", D2, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", p2), p2;
      } catch (h3) {
        this.logger.warn(h3);
      }
      return "";
    }), P$2(this, "resolve", async (s2) => {
      if (this.isDevEnv) return "";
      const { attestationId: n3, hash: o2, encryptedId: a2 } = s2;
      if (n3 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n3) {
        if (sn$1(n3).payload.id !== a2) return;
        const h3 = await this.isValidJwtAttestation(n3);
        if (h3) {
          if (!h3.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h3;
        }
      }
      if (!o2) return;
      const c2 = this.getVerifyUrl(s2 == null ? void 0 : s2.verifyUrl);
      return this.fetchAttestation(o2, c2);
    }), P$2(this, "fetchAttestation", async (s2, n3) => {
      this.logger.debug(`resolving attestation: ${s2} from url: ${n3}`);
      const o2 = this.startAbortTimer(cjsExports$1.ONE_SECOND * 5), a2 = await fetch(`${n3}/attestation/${s2}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o2), a2.status === 200 ? await a2.json() : void 0;
    }), P$2(this, "getVerifyUrl", (s2) => {
      let n3 = s2 || be$1;
      return Zt$1.includes(n3) || (this.logger.info(`verify url: ${n3}, not included in trusted list, assigning default: ${be$1}`), n3 = be$1), n3;
    }), P$2(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s2 = this.startAbortTimer(cjsExports$1.FIVE_SECONDS), n3 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s2), await n3.json();
      } catch (s2) {
        this.logger.warn(s2);
      }
    }), P$2(this, "persistPublicKey", async (s2) => {
      this.logger.debug("persisting public key to local storage", s2), await this.store.setItem(this.storeKey, s2), this.publicKey = s2;
    }), P$2(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), P$2(this, "isValidJwtAttestation", async (s2) => {
      const n3 = await this.getPublicKey();
      try {
        if (n3) return this.validateAttestation(s2, n3);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
      const o2 = await this.fetchAndPersistPublicKey();
      try {
        if (o2) return this.validateAttestation(s2, o2);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
    }), P$2(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), P$2(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n3) => {
        const o2 = await this.fetchPublicKey();
        o2 && (await this.persistPublicKey(o2), n3(o2));
      });
      const s2 = await this.fetchPromise;
      return this.fetchPromise = void 0, s2;
    }), P$2(this, "validateAttestation", (s2, n3) => {
      const o2 = va(s2, n3.publicKey), a2 = { hasExpired: cjsExports$1.toMiliseconds(o2.exp) < Date.now(), payload: o2 };
      if (a2.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a2.payload.origin, isScam: a2.payload.isScam, isVerified: a2.payload.isVerified };
    }), this.logger = E$2(t2, this.name), this.abortController = new AbortController(), this.isDevEnv = Ti$1(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y$4(this.logger);
  }
  startAbortTimer(e2) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjsExports$1.toMiliseconds(e2));
  }
}
var Wo = Object.defineProperty, Ho = (r2, e2, t2) => e2 in r2 ? Wo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, Vi = (r2, e2, t2) => Ho(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class qi extends O$2 {
  constructor(e2, t2) {
    super(e2, t2), this.projectId = e2, this.logger = t2, Vi(this, "context", Qt$1), Vi(this, "registerDeviceToken", async (i2) => {
      const { clientId: s2, token: n3, notificationType: o2, enableEncrypted: a2 = false } = i2, c2 = `${ei}/${this.projectId}/clients`;
      await fetch(c2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s2, type: o2, token: n3, always_raw: a2 }) });
    }), this.logger = E$2(t2, this.context);
  }
}
var Yo = Object.defineProperty, Gi = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Xo = Object.prototype.propertyIsEnumerable, et$1 = (r2, e2, t2) => e2 in r2 ? Yo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, we$2 = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) Jo.call(e2, t2) && et$1(r2, t2, e2[t2]);
  if (Gi) for (var t2 of Gi(e2)) Xo.call(e2, t2) && et$1(r2, t2, e2[t2]);
  return r2;
}, R$2 = (r2, e2, t2) => et$1(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
class Wi extends R$3 {
  constructor(e2, t2, i2 = true) {
    super(e2, t2, i2), this.core = e2, this.logger = t2, R$2(this, "context", ii), R$2(this, "storagePrefix", W$1), R$2(this, "storageVersion", ti), R$2(this, "events", /* @__PURE__ */ new Map()), R$2(this, "shouldPersist", false), R$2(this, "init", async () => {
      if (!Ti$1()) try {
        const s2 = { eventId: $i$1(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: wr$1(this.core.relayer.protocol, this.core.relayer.version, Pe$1) } } };
        await this.sendEvent([s2]);
      } catch (s2) {
        this.logger.warn(s2);
      }
    }), R$2(this, "createEvent", (s2) => {
      const { event: n3 = "ERROR", type: o2 = "", properties: { topic: a2, trace: c2 } } = s2, h3 = $i$1(), l2 = this.core.projectId || "", p2 = Date.now(), y4 = we$2({ eventId: h3, timestamp: p2, props: { event: n3, type: o2, properties: { topic: a2, trace: c2 } }, bundleId: l2, domain: this.getAppDomain() }, this.setMethods(h3));
      return this.telemetryEnabled && (this.events.set(h3, y4), this.shouldPersist = true), y4;
    }), R$2(this, "getEvent", (s2) => {
      const { eventId: n3, topic: o2 } = s2;
      if (n3) return this.events.get(n3);
      const a2 = Array.from(this.events.values()).find((c2) => c2.props.properties.topic === o2);
      if (a2) return we$2(we$2({}, a2), this.setMethods(a2.eventId));
    }), R$2(this, "deleteEvent", (s2) => {
      const { eventId: n3 } = s2;
      this.events.delete(n3), this.shouldPersist = true;
    }), R$2(this, "setEventListeners", () => {
      this.core.heartbeat.on(r$3.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s2) => {
          cjsExports$1.fromMiliseconds(Date.now()) - cjsExports$1.fromMiliseconds(s2.timestamp) > si && (this.events.delete(s2.eventId), this.shouldPersist = true);
        });
      });
    }), R$2(this, "setMethods", (s2) => ({ addTrace: (n3) => this.addTrace(s2, n3), setError: (n3) => this.setError(s2, n3) })), R$2(this, "addTrace", (s2, n3) => {
      const o2 = this.events.get(s2);
      o2 && (o2.props.properties.trace.push(n3), this.events.set(s2, o2), this.shouldPersist = true);
    }), R$2(this, "setError", (s2, n3) => {
      const o2 = this.events.get(s2);
      o2 && (o2.props.type = n3, o2.timestamp = Date.now(), this.events.set(s2, o2), this.shouldPersist = true);
    }), R$2(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), R$2(this, "restore", async () => {
      try {
        const s2 = await this.core.storage.getItem(this.storageKey) || [];
        if (!s2.length) return;
        s2.forEach((n3) => {
          this.events.set(n3.eventId, we$2(we$2({}, n3), this.setMethods(n3.eventId)));
        });
      } catch (s2) {
        this.logger.warn(s2);
      }
    }), R$2(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s2 = [];
      for (const [n3, o2] of this.events) o2.props.type && s2.push(o2);
      if (s2.length !== 0) try {
        if ((await this.sendEvent(s2)).ok) for (const n3 of s2) this.events.delete(n3.eventId), this.shouldPersist = true;
      } catch (n3) {
        this.logger.warn(n3);
      }
    }), R$2(this, "sendEvent", async (s2) => {
      const n3 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${ri}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Pe$1}${n3}`, { method: "POST", body: JSON.stringify(s2) });
    }), R$2(this, "getAppDomain", () => br$1().url), this.logger = E$2(t2, this.context), this.telemetryEnabled = i2, i2 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var Zo = Object.defineProperty, Hi = Object.getOwnPropertySymbols, Qo = Object.prototype.hasOwnProperty, ea = Object.prototype.propertyIsEnumerable, tt$1 = (r2, e2, t2) => e2 in r2 ? Zo(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, Yi = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) Qo.call(e2, t2) && tt$1(r2, t2, e2[t2]);
  if (Hi) for (var t2 of Hi(e2)) ea.call(e2, t2) && tt$1(r2, t2, e2[t2]);
  return r2;
}, v$2 = (r2, e2, t2) => tt$1(r2, typeof e2 != "symbol" ? e2 + "" : e2, t2);
let Oe$1 = class Oe extends h$3 {
  constructor(e2) {
    var t2;
    super(e2), v$2(this, "protocol", Ue$1), v$2(this, "version", Fe$1), v$2(this, "name", pe$2), v$2(this, "relayUrl"), v$2(this, "projectId"), v$2(this, "customStoragePrefix"), v$2(this, "events", new eventsExports.EventEmitter()), v$2(this, "logger"), v$2(this, "heartbeat"), v$2(this, "relayer"), v$2(this, "crypto"), v$2(this, "storage"), v$2(this, "history"), v$2(this, "expirer"), v$2(this, "pairing"), v$2(this, "verify"), v$2(this, "echoClient"), v$2(this, "linkModeSupportedApps"), v$2(this, "eventClient"), v$2(this, "initialized", false), v$2(this, "logChunkController"), v$2(this, "on", (a2, c2) => this.events.on(a2, c2)), v$2(this, "once", (a2, c2) => this.events.once(a2, c2)), v$2(this, "off", (a2, c2) => this.events.off(a2, c2)), v$2(this, "removeListener", (a2, c2) => this.events.removeListener(a2, c2)), v$2(this, "dispatchEnvelope", ({ topic: a2, message: c2, sessionExists: h3 }) => {
      if (!a2 || !c2) return;
      const l2 = { topic: a2, message: c2, publishedAt: Date.now(), transportType: ee$1.link_mode };
      this.relayer.onLinkMessageEvent(l2, { sessionExists: h3 });
    });
    const i2 = this.getGlobalCore(e2 == null ? void 0 : e2.customStoragePrefix);
    if (i2) try {
      return this.customStoragePrefix = i2.customStoragePrefix, this.logger = i2.logger, this.heartbeat = i2.heartbeat, this.crypto = i2.crypto, this.history = i2.history, this.expirer = i2.expirer, this.storage = i2.storage, this.relayer = i2.relayer, this.pairing = i2.pairing, this.verify = i2.verify, this.echoClient = i2.echoClient, this.linkModeSupportedApps = i2.linkModeSupportedApps, this.eventClient = i2.eventClient, this.initialized = i2.initialized, this.logChunkController = i2.logChunkController, i2;
    } catch (a2) {
      console.warn("Failed to copy global core", a2);
    }
    this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || Ke$2, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
    const s2 = k$3({ level: typeof (e2 == null ? void 0 : e2.logger) == "string" && e2.logger ? e2.logger : It$2.logger, name: pe$2 }), { logger: n3, chunkLoggerController: o2 } = A$4({ opts: s2, maxSizeInBytes: e2 == null ? void 0 : e2.maxLogBlobSizeInBytes, loggerOverride: e2 == null ? void 0 : e2.logger });
    this.logChunkController = o2, (t2 = this.logChunkController) != null && t2.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a2, c2;
      (a2 = this.logChunkController) != null && a2.downloadLogsBlobInBrowser && ((c2 = this.logChunkController) == null || c2.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E$2(n3, this.name), this.heartbeat = new i$7(), this.crypto = new Ei(this, this.logger, e2 == null ? void 0 : e2.keychain), this.history = new Mi(this, this.logger), this.expirer = new Ki(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h$4(Yi(Yi({}, Tt$1), e2 == null ? void 0 : e2.storageOptions)), this.relayer = new xi({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Fi(this, this.logger), this.verify = new Bi(this, this.logger, this.storage), this.echoClient = new qi(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Wi(this, this.logger, e2 == null ? void 0 : e2.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e2) {
    const t2 = new Oe(e2);
    await t2.initialize();
    const i2 = await t2.crypto.getClientId();
    return await t2.storage.setItem(Ft$1, i2), t2;
  }
  get context() {
    return y$4(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e2;
    return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e2) {
    this.linkModeSupportedApps.includes(e2) || (this.linkModeSupportedApps.push(e2), await this.storage.setItem(Be$1, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Be$1) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e2) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
    }
  }
  getGlobalCore(e2 = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const t2 = `_walletConnectCore_${e2}`, i2 = `${t2}_count`;
      return globalThis[i2] = (globalThis[i2] || 0) + 1, globalThis[i2] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i2]} times.`), globalThis[t2];
    } catch (t2) {
      console.warn("Failed to get global WalletConnect core", t2);
      return;
    }
  }
  setGlobalCore(e2) {
    var t2;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i2 = `_walletConnectCore_${((t2 = e2.opts) == null ? void 0 : t2.customStoragePrefix) || ""}`;
      globalThis[i2] = e2;
    } catch (i2) {
      console.warn("Failed to set global WalletConnect core", i2);
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
const Ve$1 = "wc", ke$1 = 2, De = "client", we$1 = `${Ve$1}@${ke$1}:${De}:`, me$1 = { name: De, logger: "error" }, Le$1 = "WALLETCONNECT_DEEPLINK_CHOICE", dt$1 = "proposal", Me$1 = "Proposal expired", ut$1 = "session", B$3 = cjsExports$1.SEVEN_DAYS, gt$1 = "engine", P$1 = { wc_sessionPropose: { req: { ttl: cjsExports$1.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjsExports$1.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjsExports$1.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: cjsExports$1.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: cjsExports$1.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: cjsExports$1.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: cjsExports$1.FIVE_MINUTES, prompt: false, tag: 1119 } } }, _e = { min: cjsExports$1.FIVE_MINUTES, max: cjsExports$1.SEVEN_DAYS }, M$2 = { idle: "IDLE", active: "ACTIVE" }, yt$1 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" }, sui_signAndExecuteTransaction: { key: "digest" }, sui_signTransaction: { key: "" }, hedera_signAndExecuteTransaction: { key: "transactionId" }, hedera_executeTransaction: { key: "transactionId" }, near_signTransaction: { key: "" }, near_signTransactions: { key: "" }, tron_signTransaction: { key: "txID" }, xrpl_signTransaction: { key: "" }, xrpl_signTransactionFor: { key: "" }, algo_signTxn: { key: "" }, sendTransfer: { key: "txid" }, stacks_stxTransfer: { key: "txId" }, polkadot_signTransaction: { key: "" }, cosmos_signDirect: { key: "" } }, wt$1 = "request", mt$1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], _t$1 = "wc", ft$1 = "auth", St$1 = "authKeys", Et$1 = "pairingTopics", Rt$1 = "requests", le$1 = `${_t$1}@${1.5}:${ft$1}:`, pe$1 = `${le$1}:PUB_KEY`;
var bs = Object.defineProperty, As = Object.defineProperties, xs = Object.getOwnPropertyDescriptors, vt$1 = Object.getOwnPropertySymbols, Cs = Object.prototype.hasOwnProperty, Vs = Object.prototype.propertyIsEnumerable, $e$1 = (S3, o2, t2) => o2 in S3 ? bs(S3, o2, { enumerable: true, configurable: true, writable: true, value: t2 }) : S3[o2] = t2, R$1 = (S3, o2) => {
  for (var t2 in o2 || (o2 = {})) Cs.call(o2, t2) && $e$1(S3, t2, o2[t2]);
  if (vt$1) for (var t2 of vt$1(o2)) Vs.call(o2, t2) && $e$1(S3, t2, o2[t2]);
  return S3;
}, O$1 = (S3, o2) => As(S3, xs(o2)), c$4 = (S3, o2, t2) => $e$1(S3, typeof o2 != "symbol" ? o2 + "" : o2, t2);
class ks extends V$2 {
  constructor(o2) {
    super(o2), c$4(this, "name", gt$1), c$4(this, "events", new xe$1()), c$4(this, "initialized", false), c$4(this, "requestQueue", { state: M$2.idle, queue: [] }), c$4(this, "sessionRequestQueue", { state: M$2.idle, queue: [] }), c$4(this, "emittedSessionRequests", new ji$1({ limit: 500 })), c$4(this, "requestQueueDelay", cjsExports$1.ONE_SECOND), c$4(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c$4(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c$4(this, "recentlyDeletedLimit", 200), c$4(this, "relayMessageCache", []), c$4(this, "pendingSessions", /* @__PURE__ */ new Map()), c$4(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(P$1) }), this.initialized = true, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, cjsExports$1.toMiliseconds(this.requestQueueDelay)));
    }), c$4(this, "connect", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const e2 = O$1(R$1({}, t2), { requiredNamespaces: t2.requiredNamespaces || {}, optionalNamespaces: t2.optionalNamespaces || {} });
      await this.isValidConnect(e2), e2.optionalNamespaces = Ma(e2.requiredNamespaces, e2.optionalNamespaces), e2.requiredNamespaces = {};
      const { pairingTopic: s2, requiredNamespaces: i2, optionalNamespaces: r2, sessionProperties: n3, scopedProperties: a2, relays: l2 } = e2;
      let p2 = s2, h3, u2 = false;
      try {
        if (p2) {
          const T2 = this.client.core.pairing.pairings.get(p2);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u2 = T2.active;
        }
      } catch (T2) {
        throw this.client.logger.error(`connect() -> pairing.get(${p2}) failed`), T2;
      }
      if (!p2 || !u2) {
        const { topic: T2, uri: $2 } = await this.client.core.pairing.create({ internal: { skipSubscribe: true } });
        p2 = T2, h3 = $2;
      }
      if (!p2) {
        const { message: T2 } = Bt$2("NO_MATCHING_KEY", `connect() pairing topic: ${p2}`);
        throw new Error(T2);
      }
      const d5 = await this.client.core.crypto.generateKeyPair(), y4 = P$1.wc_sessionPropose.req.ttl || cjsExports$1.FIVE_MINUTES, w2 = Si$1(y4), m5 = O$1(R$1(R$1({ requiredNamespaces: i2, optionalNamespaces: r2, relays: l2 ?? [{ protocol: $t$1 }], proposer: { publicKey: d5, metadata: this.client.metadata }, expiryTimestamp: w2, pairingTopic: p2 }, n3 && { sessionProperties: n3 }), a2 && { scopedProperties: a2 }), { id: payloadId() }), E2 = Ni$1("session_connect", m5.id), { reject: _2, resolve: b2, done: V3 } = xi$1(y4, Me$1), I3 = ({ id: T2 }) => {
        T2 === m5.id && (this.client.events.off("proposal_expire", I3), this.pendingSessions.delete(m5.id), this.events.emit(E2, { error: { message: Me$1, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", I3), this.events.once(E2, ({ error: T2, session: $2 }) => {
        this.client.events.off("proposal_expire", I3), T2 ? _2(T2) : $2 && b2($2);
      }), await this.sendProposeSession({ proposal: m5, publishOpts: { internal: { throwOnFailedPublish: true }, tvf: { correlationId: m5.id } } }), await this.setProposal(m5.id, m5), { uri: h3, approval: V3 };
    }), c$4(this, "pair", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(t2);
      } catch (e2) {
        throw this.client.logger.error("pair() failed"), e2;
      }
    }), c$4(this, "approve", async (t2) => {
      var e2, s2, i2;
      const r2 = this.client.core.eventClient.createEvent({ properties: { topic: (e2 = t2 == null ? void 0 : t2.id) == null ? void 0 : e2.toString(), trace: [rr.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (N3) {
        throw r2.setError(nr.no_internet_connection), N3;
      }
      try {
        await this.isValidProposalId(t2 == null ? void 0 : t2.id);
      } catch (N3) {
        throw this.client.logger.error(`approve() -> proposal.get(${t2 == null ? void 0 : t2.id}) failed`), r2.setError(nr.proposal_not_found), N3;
      }
      try {
        await this.isValidApprove(t2);
      } catch (N3) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r2.setError(nr.session_approve_namespace_validation_failure), N3;
      }
      const { id: n3, relayProtocol: a2, namespaces: l2, sessionProperties: p2, scopedProperties: h3, sessionConfig: u2 } = t2, d5 = this.client.proposal.get(n3);
      this.client.core.eventClient.deleteEvent({ eventId: r2.eventId });
      const { pairingTopic: y4, proposer: w2, requiredNamespaces: m5, optionalNamespaces: E2 } = d5;
      let _2 = (s2 = this.client.core.eventClient) == null ? void 0 : s2.getEvent({ topic: y4 });
      _2 || (_2 = (i2 = this.client.core.eventClient) == null ? void 0 : i2.createEvent({ type: rr.session_approve_started, properties: { topic: y4, trace: [rr.session_approve_started, rr.session_namespaces_validation_success] } }));
      const b2 = await this.client.core.crypto.generateKeyPair(), V3 = w2.publicKey, I3 = await this.client.core.crypto.generateSharedKey(b2, V3), T2 = R$1(R$1(R$1({ relay: { protocol: a2 ?? "irn" }, namespaces: l2, controller: { publicKey: b2, metadata: this.client.metadata }, expiry: Si$1(B$3) }, p2 && { sessionProperties: p2 }), h3 && { scopedProperties: h3 }), u2 && { sessionConfig: u2 }), $2 = ee$1.relay;
      _2.addTrace(rr.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(I3, { transportType: $2, internal: { skipSubscribe: true } });
      } catch (N3) {
        throw _2.setError(nr.subscribe_session_topic_failure), N3;
      }
      _2.addTrace(rr.subscribe_session_topic_success);
      const Se2 = O$1(R$1({}, T2), { topic: I3, requiredNamespaces: m5, optionalNamespaces: E2, pairingTopic: y4, acknowledged: false, self: T2.controller, peer: { publicKey: w2.publicKey, metadata: w2.metadata }, controller: b2, transportType: ee$1.relay });
      await this.client.session.set(I3, Se2), _2.addTrace(rr.store_session);
      try {
        await this.sendApproveSession({ sessionTopic: I3, proposal: d5, pairingProposalResponse: { relay: { protocol: a2 ?? "irn" }, responderPublicKey: b2 }, sessionSettleRequest: T2, publishOpts: { internal: { throwOnFailedPublish: true }, tvf: { correlationId: n3 } } }), _2.addTrace(rr.session_approve_publish_success);
      } catch (N3) {
        throw this.client.logger.error(N3), this.client.session.delete(I3, zt$2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(I3), N3;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: _2.eventId }), await this.client.core.pairing.updateMetadata({ topic: y4, metadata: w2.metadata }), await this.deleteProposal(n3), await this.client.core.pairing.activate({ topic: y4 }), await this.setExpiry(I3, Si$1(B$3)), { topic: I3, acknowledged: () => Promise.resolve(this.client.session.get(I3)) };
    }), c$4(this, "reject", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(t2);
      } catch (r2) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r2;
      }
      const { id: e2, reason: s2 } = t2;
      let i2;
      try {
        i2 = this.client.proposal.get(e2).pairingTopic;
      } catch (r2) {
        throw this.client.logger.error(`reject() -> proposal.get(${e2}) failed`), r2;
      }
      i2 && await this.sendError({ id: e2, topic: i2, error: s2, rpcOpts: P$1.wc_sessionPropose.reject }), await this.deleteProposal(e2);
    }), c$4(this, "update", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(t2);
      } catch (h3) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), h3;
      }
      const { topic: e2, namespaces: s2 } = t2, { done: i2, resolve: r2, reject: n3 } = xi$1(), a2 = payloadId(), l2 = getBigIntRpcId().toString(), p2 = this.client.session.get(e2).namespaces;
      return this.events.once(Ni$1("session_update", a2), ({ error: h3 }) => {
        h3 ? n3(h3) : r2();
      }), await this.client.session.update(e2, { namespaces: s2 }), await this.sendRequest({ topic: e2, method: "wc_sessionUpdate", params: { namespaces: s2 }, throwOnFailedPublish: true, clientRpcId: a2, relayRpcId: l2 }).catch((h3) => {
        this.client.logger.error(h3), this.client.session.update(e2, { namespaces: p2 }), n3(h3);
      }), { acknowledged: i2 };
    }), c$4(this, "extend", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(t2);
      } catch (a2) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a2;
      }
      const { topic: e2 } = t2, s2 = payloadId(), { done: i2, resolve: r2, reject: n3 } = xi$1();
      return this.events.once(Ni$1("session_extend", s2), ({ error: a2 }) => {
        a2 ? n3(a2) : r2();
      }), await this.setExpiry(e2, Si$1(B$3)), this.sendRequest({ topic: e2, method: "wc_sessionExtend", params: {}, clientRpcId: s2, throwOnFailedPublish: true }).catch((a2) => {
        n3(a2);
      }), { acknowledged: i2 };
    }), c$4(this, "request", async (t2) => {
      this.isInitialized();
      try {
        await this.isValidRequest(t2);
      } catch (m5) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), m5;
      }
      const { chainId: e2, request: s2, topic: i2, expiry: r2 = P$1.wc_sessionRequest.req.ttl } = t2, n3 = this.client.session.get(i2);
      (n3 == null ? void 0 : n3.transportType) === ee$1.relay && await this.confirmOnlineStateOrThrow();
      const a2 = payloadId(), l2 = getBigIntRpcId().toString(), { done: p2, resolve: h3, reject: u2 } = xi$1(r2, "Request expired. Please try again.");
      this.events.once(Ni$1("session_request", a2), ({ error: m5, result: E2 }) => {
        m5 ? u2(m5) : h3(E2);
      });
      const d5 = "wc_sessionRequest", y4 = this.getAppLinkIfEnabled(n3.peer.metadata, n3.transportType);
      if (y4) return await this.sendRequest({ clientRpcId: a2, relayRpcId: l2, topic: i2, method: d5, params: { request: O$1(R$1({}, s2), { expiryTimestamp: Si$1(r2) }), chainId: e2 }, expiry: r2, throwOnFailedPublish: true, appLink: y4 }).catch((m5) => u2(m5)), this.client.events.emit("session_request_sent", { topic: i2, request: s2, chainId: e2, id: a2 }), await p2();
      const w2 = { request: O$1(R$1({}, s2), { expiryTimestamp: Si$1(r2) }), chainId: e2 };
      return await Promise.all([new Promise(async (m5) => {
        await this.sendRequest({ clientRpcId: a2, relayRpcId: l2, topic: i2, method: d5, params: w2, expiry: r2, throwOnFailedPublish: true, tvf: this.getTVFParams(a2, w2) }).catch((E2) => u2(E2)), this.client.events.emit("session_request_sent", { topic: i2, request: s2, chainId: e2, id: a2 }), m5();
      }), new Promise(async (m5) => {
        var E2;
        if (!((E2 = n3.sessionConfig) != null && E2.disableDeepLink)) {
          const _2 = await _i$1(this.client.core.storage, Le$1);
          await Ui$1({ id: a2, topic: i2, wcDeepLink: _2 });
        }
        m5();
      }), p2()]).then((m5) => m5[2]);
    }), c$4(this, "respond", async (t2) => {
      this.isInitialized(), await this.isValidRespond(t2);
      const { topic: e2, response: s2 } = t2, { id: i2 } = s2, r2 = this.client.session.get(e2);
      r2.transportType === ee$1.relay && await this.confirmOnlineStateOrThrow();
      const n3 = this.getAppLinkIfEnabled(r2.peer.metadata, r2.transportType);
      isJsonRpcResult(s2) ? await this.sendResult({ id: i2, topic: e2, result: s2.result, throwOnFailedPublish: true, appLink: n3 }) : isJsonRpcError(s2) && await this.sendError({ id: i2, topic: e2, error: s2.error, appLink: n3 }), this.cleanupAfterResponse(t2);
    }), c$4(this, "ping", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(t2);
      } catch (s2) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s2;
      }
      const { topic: e2 } = t2;
      if (this.client.session.keys.includes(e2)) {
        const s2 = payloadId(), i2 = getBigIntRpcId().toString(), { done: r2, resolve: n3, reject: a2 } = xi$1();
        this.events.once(Ni$1("session_ping", s2), ({ error: l2 }) => {
          l2 ? a2(l2) : n3();
        }), await Promise.all([this.sendRequest({ topic: e2, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s2, relayRpcId: i2 }), r2()]);
      } else this.client.core.pairing.pairings.keys.includes(e2) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: e2 }));
    }), c$4(this, "emit", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(t2);
      const { topic: e2, event: s2, chainId: i2 } = t2, r2 = getBigIntRpcId().toString(), n3 = payloadId();
      await this.sendRequest({ topic: e2, method: "wc_sessionEvent", params: { event: s2, chainId: i2 }, throwOnFailedPublish: true, relayRpcId: r2, clientRpcId: n3 });
    }), c$4(this, "disconnect", async (t2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(t2);
      const { topic: e2 } = t2;
      if (this.client.session.keys.includes(e2)) await this.sendRequest({ topic: e2, method: "wc_sessionDelete", params: zt$2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: e2, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(e2)) await this.client.core.pairing.disconnect({ topic: e2 });
      else {
        const { message: s2 } = Bt$2("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e2}`);
        throw new Error(s2);
      }
    }), c$4(this, "find", (t2) => (this.isInitialized(), this.client.session.getAll().filter((e2) => Ka(e2, t2)))), c$4(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c$4(this, "authenticate", async (t2, e2) => {
      var s2;
      this.isInitialized(), this.isValidAuthenticate(t2);
      const i2 = e2 && this.client.core.linkModeSupportedApps.includes(e2) && ((s2 = this.client.metadata.redirect) == null ? void 0 : s2.linkMode), r2 = i2 ? ee$1.link_mode : ee$1.relay;
      r2 === ee$1.relay && await this.confirmOnlineStateOrThrow();
      const { chains: n3, statement: a2 = "", uri: l2, domain: p2, nonce: h3, type: u2, exp: d5, nbf: y4, methods: w2 = [], expiry: m5 } = t2, E2 = [...t2.resources || []], { topic: _2, uri: b2 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r2 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: _2, uri: b2 } });
      const V3 = await this.client.core.crypto.generateKeyPair(), I3 = la(V3);
      if (await Promise.all([this.client.auth.authKeys.set(pe$1, { responseTopic: I3, publicKey: V3 }), this.client.auth.pairingTopics.set(I3, { topic: I3, pairingTopic: _2 })]), await this.client.core.relayer.subscribe(I3, { transportType: r2 }), this.client.logger.info(`sending request to new pairing topic: ${_2}`), w2.length > 0) {
        const { namespace: A2 } = Je$2(n3[0]);
        let k2 = Vc(A2, "request", w2);
        je(E2) && (k2 = Mc(k2, E2.pop())), E2.push(k2);
      }
      const T2 = m5 && m5 > P$1.wc_sessionAuthenticate.req.ttl ? m5 : P$1.wc_sessionAuthenticate.req.ttl, $2 = { authPayload: { type: u2 ?? "caip122", chains: n3, statement: a2, aud: l2, domain: p2, version: "1", nonce: h3, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d5, nbf: y4, resources: E2 }, requester: { publicKey: V3, metadata: this.client.metadata }, expiryTimestamp: Si$1(T2) }, Se2 = { eip155: { chains: n3, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...w2])], events: ["chainChanged", "accountsChanged"] } }, N3 = { requiredNamespaces: {}, optionalNamespaces: Se2, relays: [{ protocol: "irn" }], pairingTopic: _2, proposer: { publicKey: V3, metadata: this.client.metadata }, expiryTimestamp: Si$1(P$1.wc_sessionPropose.req.ttl), id: payloadId() }, { done: Tt2, resolve: Ue2, reject: Ee2 } = xi$1(T2, "Request expired"), se2 = payloadId(), he2 = Ni$1("session_connect", N3.id), Re2 = Ni$1("session_request", se2), de2 = async ({ error: A2, session: k2 }) => {
        this.events.off(Re2, ve2), A2 ? Ee2(A2) : k2 && Ue2({ session: k2 });
      }, ve2 = async (A2) => {
        var k2, Ge2, je$1;
        if (await this.deletePendingAuthRequest(se2, { message: "fulfilled", code: 0 }), A2.error) {
          const re2 = zt$2("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return A2.error.code === re2.code ? void 0 : (this.events.off(he2, de2), Ee2(A2.error.message));
        }
        await this.deleteProposal(N3.id), this.events.off(he2, de2);
        const { cacaos: Fe2, responder: H2 } = A2.result, Te2 = [], Qe2 = [];
        for (const re2 of Fe2) {
          await Lc({ cacao: re2, projectId: this.client.core.projectId }) || (this.client.logger.error(re2, "Signature verification failed"), Ee2(zt$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: qe2 } = re2, Pe2 = je(qe2.resources), He2 = [to$1(qe2.iss)], qt2 = bn$1(qe2.iss);
          if (Pe2) {
            const Ne2 = Kc(Pe2), Pt2 = qc(Pe2);
            Te2.push(...Ne2), He2.push(...Pt2);
          }
          for (const Ne2 of He2) Qe2.push(`${Ne2}:${qt2}`);
        }
        const ie2 = await this.client.core.crypto.generateSharedKey(V3, H2.publicKey);
        let ue2;
        Te2.length > 0 && (ue2 = { topic: ie2, acknowledged: true, self: { publicKey: V3, metadata: this.client.metadata }, peer: H2, controller: H2.publicKey, expiry: Si$1(B$3), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: _2, namespaces: Va([...new Set(Te2)], [...new Set(Qe2)]), transportType: r2 }, await this.client.core.relayer.subscribe(ie2, { transportType: r2 }), await this.client.session.set(ie2, ue2), _2 && await this.client.core.pairing.updateMetadata({ topic: _2, metadata: H2.metadata }), ue2 = this.client.session.get(ie2)), (k2 = this.client.metadata.redirect) != null && k2.linkMode && (Ge2 = H2.metadata.redirect) != null && Ge2.linkMode && (je$1 = H2.metadata.redirect) != null && je$1.universal && e2 && (this.client.core.addLinkModeSupportedApp(H2.metadata.redirect.universal), this.client.session.update(ie2, { transportType: ee$1.link_mode })), Ue2({ auths: Fe2, session: ue2 });
      };
      this.events.once(he2, de2), this.events.once(Re2, ve2);
      let Ie2;
      try {
        if (i2) {
          const A2 = formatJsonRpcRequest("wc_sessionAuthenticate", $2, se2);
          this.client.core.history.set(_2, A2);
          const k2 = await this.client.core.crypto.encode("", A2, { type: we$3, encoding: Ge$2 });
          Ie2 = Ra(e2, _2, k2);
        } else await Promise.all([this.sendRequest({ topic: _2, method: "wc_sessionAuthenticate", params: $2, expiry: t2.expiry, throwOnFailedPublish: true, clientRpcId: se2 }), this.sendRequest({ topic: _2, method: "wc_sessionPropose", params: N3, expiry: P$1.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: N3.id })]);
      } catch (A2) {
        throw this.events.off(he2, de2), this.events.off(Re2, ve2), A2;
      }
      return await this.setProposal(N3.id, N3), await this.setAuthRequest(se2, { request: O$1(R$1({}, $2), { verifyContext: {} }), pairingTopic: _2, transportType: r2 }), { uri: Ie2 ?? b2, response: Tt2 };
    }), c$4(this, "approveSessionAuthenticate", async (t2) => {
      const { id: e2, auths: s2 } = t2, i2 = this.client.core.eventClient.createEvent({ properties: { topic: e2.toString(), trace: [or.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (m5) {
        throw i2.setError(ar.no_internet_connection), m5;
      }
      const r2 = this.getPendingAuthRequest(e2);
      if (!r2) throw i2.setError(ar.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${e2}`);
      const n3 = r2.transportType || ee$1.relay;
      n3 === ee$1.relay && await this.confirmOnlineStateOrThrow();
      const a2 = r2.requester.publicKey, l2 = await this.client.core.crypto.generateKeyPair(), p2 = la(a2), h3 = { type: ie$1, receiverPublicKey: a2, senderPublicKey: l2 }, u2 = [], d5 = [];
      for (const m5 of s2) {
        if (!await Lc({ cacao: m5, projectId: this.client.core.projectId })) {
          i2.setError(ar.invalid_cacao);
          const I3 = zt$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: e2, topic: p2, error: I3, encodeOpts: h3 }), new Error(I3.message);
        }
        i2.addTrace(or.cacaos_verified);
        const { p: E2 } = m5, _2 = je(E2.resources), b2 = [to$1(E2.iss)], V3 = bn$1(E2.iss);
        if (_2) {
          const I3 = Kc(_2), T2 = qc(_2);
          u2.push(...I3), b2.push(...T2);
        }
        for (const I3 of b2) d5.push(`${I3}:${V3}`);
      }
      const y4 = await this.client.core.crypto.generateSharedKey(l2, a2);
      i2.addTrace(or.create_authenticated_session_topic);
      let w2;
      if ((u2 == null ? void 0 : u2.length) > 0) {
        w2 = { topic: y4, acknowledged: true, self: { publicKey: l2, metadata: this.client.metadata }, peer: { publicKey: a2, metadata: r2.requester.metadata }, controller: a2, expiry: Si$1(B$3), authentication: s2, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r2.pairingTopic, namespaces: Va([...new Set(u2)], [...new Set(d5)]), transportType: n3 }, i2.addTrace(or.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(y4, { transportType: n3 });
        } catch (m5) {
          throw i2.setError(ar.subscribe_authenticated_session_topic_failure), m5;
        }
        i2.addTrace(or.subscribe_authenticated_session_topic_success), await this.client.session.set(y4, w2), i2.addTrace(or.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r2.pairingTopic, metadata: r2.requester.metadata });
      }
      i2.addTrace(or.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: p2, id: e2, result: { cacaos: s2, responder: { publicKey: l2, metadata: this.client.metadata } }, encodeOpts: h3, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r2.requester.metadata, n3) });
      } catch (m5) {
        throw i2.setError(ar.authenticated_session_approve_publish_failure), m5;
      }
      return await this.client.auth.requests.delete(e2, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r2.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i2.eventId }), { session: w2 };
    }), c$4(this, "rejectSessionAuthenticate", async (t2) => {
      this.isInitialized();
      const { id: e2, reason: s2 } = t2, i2 = this.getPendingAuthRequest(e2);
      if (!i2) throw new Error(`Could not find pending auth request with id ${e2}`);
      i2.transportType === ee$1.relay && await this.confirmOnlineStateOrThrow();
      const r2 = i2.requester.publicKey, n3 = await this.client.core.crypto.generateKeyPair(), a2 = la(r2), l2 = { type: ie$1, receiverPublicKey: r2, senderPublicKey: n3 };
      await this.sendError({ id: e2, topic: a2, error: s2, encodeOpts: l2, rpcOpts: P$1.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i2.requester.metadata, i2.transportType) }), await this.client.auth.requests.delete(e2, { message: "rejected", code: 0 }), await this.deleteProposal(e2);
    }), c$4(this, "formatAuthMessage", (t2) => {
      this.isInitialized();
      const { request: e2, iss: s2 } = t2;
      return eo$1(e2, s2);
    }), c$4(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const t2 = this.relayMessageCache.shift();
          t2 && await this.onRelayMessage(t2);
        } catch (t2) {
          this.client.logger.error(t2);
        }
      }, 50);
    }), c$4(this, "cleanupDuplicatePairings", async (t2) => {
      if (t2.pairingTopic) try {
        const e2 = this.client.core.pairing.pairings.get(t2.pairingTopic), s2 = this.client.core.pairing.pairings.getAll().filter((i2) => {
          var r2, n3;
          return ((r2 = i2.peerMetadata) == null ? void 0 : r2.url) && ((n3 = i2.peerMetadata) == null ? void 0 : n3.url) === t2.peer.metadata.url && i2.topic && i2.topic !== e2.topic;
        });
        if (s2.length === 0) return;
        this.client.logger.info(`Cleaning up ${s2.length} duplicate pairing(s)`), await Promise.all(s2.map((i2) => this.client.core.pairing.disconnect({ topic: i2.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (e2) {
        this.client.logger.error(e2);
      }
    }), c$4(this, "deleteSession", async (t2) => {
      var e2;
      const { topic: s2, expirerHasDeleted: i2 = false, emitEvent: r2 = true, id: n3 = 0 } = t2, { self: a2 } = this.client.session.get(s2);
      await this.client.core.relayer.unsubscribe(s2), await this.client.session.delete(s2, zt$2("USER_DISCONNECTED")), this.addToRecentlyDeleted(s2, "session"), this.client.core.crypto.keychain.has(a2.publicKey) && await this.client.core.crypto.deleteKeyPair(a2.publicKey), this.client.core.crypto.keychain.has(s2) && await this.client.core.crypto.deleteSymKey(s2), i2 || this.client.core.expirer.del(s2), this.client.core.storage.removeItem(Le$1).catch((l2) => this.client.logger.warn(l2)), this.getPendingSessionRequests().forEach((l2) => {
        l2.topic === s2 && this.deletePendingSessionRequest(l2.id, zt$2("USER_DISCONNECTED"));
      }), s2 === ((e2 = this.sessionRequestQueue.queue[0]) == null ? void 0 : e2.topic) && (this.sessionRequestQueue.state = M$2.idle), r2 && this.client.events.emit("session_delete", { id: n3, topic: s2 });
    }), c$4(this, "deleteProposal", async (t2, e2) => {
      if (e2) try {
        const s2 = this.client.proposal.get(t2), i2 = this.client.core.eventClient.getEvent({ topic: s2.pairingTopic });
        i2 == null ? void 0 : i2.setError(nr.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(t2, zt$2("USER_DISCONNECTED")), e2 ? Promise.resolve() : this.client.core.expirer.del(t2)]), this.addToRecentlyDeleted(t2, "proposal");
    }), c$4(this, "deletePendingSessionRequest", async (t2, e2, s2 = false) => {
      await Promise.all([this.client.pendingRequest.delete(t2, e2), s2 ? Promise.resolve() : this.client.core.expirer.del(t2)]), this.addToRecentlyDeleted(t2, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i2) => i2.id !== t2), s2 && (this.sessionRequestQueue.state = M$2.idle, this.client.events.emit("session_request_expire", { id: t2 }));
    }), c$4(this, "deletePendingAuthRequest", async (t2, e2, s2 = false) => {
      await Promise.all([this.client.auth.requests.delete(t2, e2), s2 ? Promise.resolve() : this.client.core.expirer.del(t2)]);
    }), c$4(this, "setExpiry", async (t2, e2) => {
      this.client.session.keys.includes(t2) && (this.client.core.expirer.set(t2, e2), await this.client.session.update(t2, { expiry: e2 }));
    }), c$4(this, "setProposal", async (t2, e2) => {
      this.client.core.expirer.set(t2, Si$1(P$1.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t2, e2);
    }), c$4(this, "setAuthRequest", async (t2, e2) => {
      const { request: s2, pairingTopic: i2, transportType: r2 = ee$1.relay } = e2;
      this.client.core.expirer.set(t2, s2.expiryTimestamp), await this.client.auth.requests.set(t2, { authPayload: s2.authPayload, requester: s2.requester, expiryTimestamp: s2.expiryTimestamp, id: t2, pairingTopic: i2, verifyContext: s2.verifyContext, transportType: r2 });
    }), c$4(this, "setPendingSessionRequest", async (t2) => {
      const { id: e2, topic: s2, params: i2, verifyContext: r2 } = t2, n3 = i2.request.expiryTimestamp || Si$1(P$1.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(e2, n3), await this.client.pendingRequest.set(e2, { id: e2, topic: s2, params: i2, verifyContext: r2 });
    }), c$4(this, "sendRequest", async (t2) => {
      const { topic: e2, method: s2, params: i2, expiry: r2, relayRpcId: n3, clientRpcId: a2, throwOnFailedPublish: l2, appLink: p2, tvf: h3, publishOpts: u2 = {} } = t2, d5 = formatJsonRpcRequest(s2, i2, a2);
      let y4;
      const w2 = !!p2;
      try {
        const _2 = w2 ? Ge$2 : oe$2;
        y4 = await this.client.core.crypto.encode(e2, d5, { encoding: _2 });
      } catch (_2) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e2} failed`), _2;
      }
      let m5;
      if (mt$1.includes(s2)) {
        const _2 = da(JSON.stringify(d5)), b2 = da(y4);
        m5 = await this.client.core.verify.register({ id: b2, decryptedId: _2 });
      }
      const E2 = R$1(R$1({}, P$1[s2].req), u2);
      if (E2.attestation = m5, r2 && (E2.ttl = r2), n3 && (E2.id = n3), this.client.core.history.set(e2, d5), w2) {
        const _2 = Ra(p2, e2, y4);
        await global.Linking.openURL(_2, this.client.name);
      } else E2.tvf = O$1(R$1({}, h3), { correlationId: d5.id }), l2 ? (E2.internal = O$1(R$1({}, E2.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(e2, y4, E2)) : this.client.core.relayer.publish(e2, y4, E2).catch((_2) => this.client.logger.error(_2));
      return d5.id;
    }), c$4(this, "sendProposeSession", async (t2) => {
      const { proposal: e2, publishOpts: s2 } = t2, i2 = formatJsonRpcRequest("wc_sessionPropose", e2, e2.id);
      this.client.core.history.set(e2.pairingTopic, i2);
      const r2 = await this.client.core.crypto.encode(e2.pairingTopic, i2, { encoding: oe$2 }), n3 = da(JSON.stringify(i2)), a2 = da(r2), l2 = await this.client.core.verify.register({ id: a2, decryptedId: n3 });
      await this.client.core.relayer.publishCustom({ payload: { pairingTopic: e2.pairingTopic, sessionProposal: r2 }, opts: O$1(R$1({}, s2), { publishMethod: "wc_proposeSession", attestation: l2 }) });
    }), c$4(this, "sendApproveSession", async (t2) => {
      const { sessionTopic: e2, pairingProposalResponse: s2, proposal: i2, sessionSettleRequest: r2, publishOpts: n3 } = t2, a2 = formatJsonRpcResult(i2.id, s2), l2 = await this.client.core.crypto.encode(i2.pairingTopic, a2, { encoding: oe$2 }), p2 = formatJsonRpcRequest("wc_sessionSettle", r2, n3 == null ? void 0 : n3.id), h3 = await this.client.core.crypto.encode(e2, p2, { encoding: oe$2 });
      this.client.core.history.set(e2, p2), await this.client.core.relayer.publishCustom({ payload: { sessionTopic: e2, pairingTopic: i2.pairingTopic, sessionProposalResponse: l2, sessionSettlementRequest: h3 }, opts: O$1(R$1({}, n3), { publishMethod: "wc_approveSession" }) });
    }), c$4(this, "sendResult", async (t2) => {
      const { id: e2, topic: s2, result: i2, throwOnFailedPublish: r2, encodeOpts: n3, appLink: a2 } = t2, l2 = formatJsonRpcResult(e2, i2);
      let p2;
      const h3 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const y4 = h3 ? Ge$2 : oe$2;
        p2 = await this.client.core.crypto.encode(s2, l2, O$1(R$1({}, n3 || {}), { encoding: y4 }));
      } catch (y4) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s2} failed`), y4;
      }
      let u2, d5;
      try {
        u2 = await this.client.core.history.get(s2, e2);
        const y4 = u2.request;
        try {
          d5 = this.getTVFParams(e2, y4.params, i2);
        } catch (w2) {
          this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${w2 == null ? void 0 : w2.message}`);
        }
      } catch (y4) {
        throw this.client.logger.error(`sendResult() -> history.get(${s2}, ${e2}) failed`), y4;
      }
      if (h3) {
        const y4 = Ra(a2, s2, p2);
        await global.Linking.openURL(y4, this.client.name);
      } else {
        const y4 = u2.request.method, w2 = P$1[y4].res;
        w2.tvf = O$1(R$1({}, d5), { correlationId: e2 }), r2 ? (w2.internal = O$1(R$1({}, w2.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s2, p2, w2)) : this.client.core.relayer.publish(s2, p2, w2).catch((m5) => this.client.logger.error(m5));
      }
      await this.client.core.history.resolve(l2);
    }), c$4(this, "sendError", async (t2) => {
      const { id: e2, topic: s2, error: i2, encodeOpts: r2, rpcOpts: n3, appLink: a2 } = t2, l2 = formatJsonRpcError(e2, i2);
      let p2;
      const h3 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d5 = h3 ? Ge$2 : oe$2;
        p2 = await this.client.core.crypto.encode(s2, l2, O$1(R$1({}, r2 || {}), { encoding: d5 }));
      } catch (d5) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s2} failed`), d5;
      }
      let u2;
      try {
        u2 = await this.client.core.history.get(s2, e2);
      } catch (d5) {
        throw this.client.logger.error(`sendError() -> history.get(${s2}, ${e2}) failed`), d5;
      }
      if (h3) {
        const d5 = Ra(a2, s2, p2);
        await global.Linking.openURL(d5, this.client.name);
      } else {
        const d5 = u2.request.method, y4 = n3 || P$1[d5].res;
        this.client.core.relayer.publish(s2, p2, y4);
      }
      await this.client.core.history.resolve(l2);
    }), c$4(this, "cleanup", async () => {
      const t2 = [], e2 = [];
      this.client.session.getAll().forEach((s2) => {
        let i2 = false;
        Oi$1(s2.expiry) && (i2 = true), this.client.core.crypto.keychain.has(s2.topic) || (i2 = true), i2 && t2.push(s2.topic);
      }), this.client.proposal.getAll().forEach((s2) => {
        Oi$1(s2.expiryTimestamp) && e2.push(s2.id);
      }), await Promise.all([...t2.map((s2) => this.deleteSession({ topic: s2 })), ...e2.map((s2) => this.deleteProposal(s2))]);
    }), c$4(this, "onProviderMessageEvent", async (t2) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t2) : await this.onRelayMessage(t2);
    }), c$4(this, "onRelayEventRequest", async (t2) => {
      this.requestQueue.queue.push(t2), await this.processRequestsQueue();
    }), c$4(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === M$2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = M$2.active;
        const t2 = this.requestQueue.queue.shift();
        if (t2) try {
          await this.processRequest(t2);
        } catch (e2) {
          this.client.logger.warn(e2);
        }
      }
      this.requestQueue.state = M$2.idle;
    }), c$4(this, "processRequest", async (t2) => {
      const { topic: e2, payload: s2, attestation: i2, transportType: r2, encryptedId: n3 } = t2, a2 = s2.method;
      if (!this.shouldIgnorePairingRequest({ topic: e2, requestMethod: a2 })) switch (a2) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: e2, payload: s2, attestation: i2, encryptedId: n3 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(e2, s2);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(e2, s2);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(e2, s2);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(e2, s2);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(e2, s2);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: e2, payload: s2, attestation: i2, encryptedId: n3, transportType: r2 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(e2, s2);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: e2, payload: s2, attestation: i2, encryptedId: n3, transportType: r2 });
        default:
          return this.client.logger.info(`Unsupported request method ${a2}`);
      }
    }), c$4(this, "onRelayEventResponse", async (t2) => {
      const { topic: e2, payload: s2, transportType: i2 } = t2, r2 = (await this.client.core.history.get(e2, s2.id)).request.method;
      switch (r2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(e2, s2, i2);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(e2, s2);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(e2, s2);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(e2, s2);
        case "wc_sessionPing":
          return this.onSessionPingResponse(e2, s2);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(e2, s2);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(e2, s2);
        default:
          return this.client.logger.info(`Unsupported response method ${r2}`);
      }
    }), c$4(this, "onRelayEventUnknownPayload", (t2) => {
      const { topic: e2 } = t2, { message: s2 } = Bt$2("MISSING_OR_INVALID", `Decoded payload on topic ${e2} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s2);
    }), c$4(this, "shouldIgnorePairingRequest", (t2) => {
      const { topic: e2, requestMethod: s2 } = t2, i2 = this.expectedPairingMethodMap.get(e2);
      return !i2 || i2.includes(s2) ? false : !!(i2.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), c$4(this, "onSessionProposeRequest", async (t2) => {
      const { topic: e2, payload: s2, attestation: i2, encryptedId: r2 } = t2, { params: n3, id: a2 } = s2;
      try {
        const l2 = this.client.core.eventClient.getEvent({ topic: e2 });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l2 == null ? void 0 : l2.setError(X.proposal_listener_not_found)), this.isValidConnect(R$1({}, s2.params));
        const p2 = n3.expiryTimestamp || Si$1(P$1.wc_sessionPropose.req.ttl), h3 = R$1({ id: a2, pairingTopic: e2, expiryTimestamp: p2, attestation: i2, encryptedId: r2 }, n3);
        await this.setProposal(a2, h3);
        const u2 = await this.getVerifyContext({ attestationId: i2, hash: da(JSON.stringify(s2)), encryptedId: r2, metadata: h3.proposer.metadata });
        l2 == null ? void 0 : l2.addTrace(Y.emit_session_proposal), this.client.events.emit("session_proposal", { id: a2, params: h3, verifyContext: u2 });
      } catch (l2) {
        await this.sendError({ id: a2, topic: e2, error: l2, rpcOpts: P$1.wc_sessionPropose.autoReject }), this.client.logger.error(l2);
      }
    }), c$4(this, "onSessionProposeResponse", async (t2, e2, s2) => {
      const { id: i2 } = e2;
      if (isJsonRpcResult(e2)) {
        const { result: r2 } = e2;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r2 });
        const n3 = this.client.proposal.get(i2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n3 });
        const a2 = n3.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a2 });
        const l2 = r2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l2 });
        const p2 = await this.client.core.crypto.generateSharedKey(a2, l2);
        this.pendingSessions.set(i2, { sessionTopic: p2, pairingTopic: t2, proposalId: i2, publicKey: a2 });
        const h3 = await this.client.core.relayer.subscribe(p2, { transportType: s2 });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h3 }), await this.client.core.pairing.activate({ topic: t2 });
      } else if (isJsonRpcError(e2)) {
        await this.deleteProposal(i2);
        const r2 = Ni$1("session_connect", i2);
        if (this.events.listenerCount(r2) === 0) throw new Error(`emitting ${r2} without any listeners, 954`);
        this.events.emit(r2, { error: e2.error });
      }
    }), c$4(this, "onSessionSettleRequest", async (t2, e2) => {
      const { id: s2, params: i2 } = e2;
      try {
        this.isValidSessionSettleRequest(i2);
        const { relay: r2, controller: n3, expiry: a2, namespaces: l2, sessionProperties: p2, scopedProperties: h3, sessionConfig: u2 } = e2.params, d5 = [...this.pendingSessions.values()].find((m5) => m5.sessionTopic === t2);
        if (!d5) return this.client.logger.error(`Pending session not found for topic ${t2}`);
        const y4 = this.client.proposal.get(d5.proposalId), w2 = O$1(R$1(R$1(R$1({ topic: t2, relay: r2, expiry: a2, namespaces: l2, acknowledged: true, pairingTopic: d5.pairingTopic, requiredNamespaces: y4.requiredNamespaces, optionalNamespaces: y4.optionalNamespaces, controller: n3.publicKey, self: { publicKey: d5.publicKey, metadata: this.client.metadata }, peer: { publicKey: n3.publicKey, metadata: n3.metadata } }, p2 && { sessionProperties: p2 }), h3 && { scopedProperties: h3 }), u2 && { sessionConfig: u2 }), { transportType: ee$1.relay });
        await this.client.session.set(w2.topic, w2), await this.setExpiry(w2.topic, w2.expiry), await this.client.core.pairing.updateMetadata({ topic: d5.pairingTopic, metadata: w2.peer.metadata }), this.client.events.emit("session_connect", { session: w2 }), this.events.emit(Ni$1("session_connect", d5.proposalId), { session: w2 }), this.pendingSessions.delete(d5.proposalId), this.deleteProposal(d5.proposalId, false), this.cleanupDuplicatePairings(w2), await this.sendResult({ id: e2.id, topic: t2, result: true });
      } catch (r2) {
        await this.sendError({ id: s2, topic: t2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$4(this, "onSessionSettleResponse", async (t2, e2) => {
      const { id: s2 } = e2;
      isJsonRpcResult(e2) ? (await this.client.session.update(t2, { acknowledged: true }), this.events.emit(Ni$1("session_approve", s2), {})) : isJsonRpcError(e2) && (await this.client.session.delete(t2, zt$2("USER_DISCONNECTED")), this.events.emit(Ni$1("session_approve", s2), { error: e2.error }));
    }), c$4(this, "onSessionUpdateRequest", async (t2, e2) => {
      const { params: s2, id: i2 } = e2;
      try {
        const r2 = `${t2}_session_update`, n3 = lu.get(r2);
        if (n3 && this.isRequestOutOfSync(n3, i2)) {
          this.client.logger.warn(`Discarding out of sync request - ${i2}`), this.sendError({ id: i2, topic: t2, error: zt$2("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(R$1({ topic: t2 }, s2));
        try {
          lu.set(r2, i2), await this.client.session.update(t2, { namespaces: s2.namespaces }), await this.sendResult({ id: i2, topic: t2, result: true });
        } catch (a2) {
          throw lu.delete(r2), a2;
        }
        this.client.events.emit("session_update", { id: i2, topic: t2, params: s2 });
      } catch (r2) {
        await this.sendError({ id: i2, topic: t2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$4(this, "isRequestOutOfSync", (t2, e2) => e2.toString().slice(0, -3) < t2.toString().slice(0, -3)), c$4(this, "onSessionUpdateResponse", (t2, e2) => {
      const { id: s2 } = e2, i2 = Ni$1("session_update", s2);
      if (this.events.listenerCount(i2) === 0) throw new Error(`emitting ${i2} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(Ni$1("session_update", s2), {}) : isJsonRpcError(e2) && this.events.emit(Ni$1("session_update", s2), { error: e2.error });
    }), c$4(this, "onSessionExtendRequest", async (t2, e2) => {
      const { id: s2 } = e2;
      try {
        this.isValidExtend({ topic: t2 }), await this.setExpiry(t2, Si$1(B$3)), await this.sendResult({ id: s2, topic: t2, result: true }), this.client.events.emit("session_extend", { id: s2, topic: t2 });
      } catch (i2) {
        await this.sendError({ id: s2, topic: t2, error: i2 }), this.client.logger.error(i2);
      }
    }), c$4(this, "onSessionExtendResponse", (t2, e2) => {
      const { id: s2 } = e2, i2 = Ni$1("session_extend", s2);
      if (this.events.listenerCount(i2) === 0) throw new Error(`emitting ${i2} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(Ni$1("session_extend", s2), {}) : isJsonRpcError(e2) && this.events.emit(Ni$1("session_extend", s2), { error: e2.error });
    }), c$4(this, "onSessionPingRequest", async (t2, e2) => {
      const { id: s2 } = e2;
      try {
        this.isValidPing({ topic: t2 }), await this.sendResult({ id: s2, topic: t2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s2, topic: t2 });
      } catch (i2) {
        await this.sendError({ id: s2, topic: t2, error: i2 }), this.client.logger.error(i2);
      }
    }), c$4(this, "onSessionPingResponse", (t2, e2) => {
      const { id: s2 } = e2, i2 = Ni$1("session_ping", s2);
      setTimeout(() => {
        if (this.events.listenerCount(i2) === 0) throw new Error(`emitting ${i2} without any listeners 2176`);
        isJsonRpcResult(e2) ? this.events.emit(Ni$1("session_ping", s2), {}) : isJsonRpcError(e2) && this.events.emit(Ni$1("session_ping", s2), { error: e2.error });
      }, 500);
    }), c$4(this, "onSessionDeleteRequest", async (t2, e2) => {
      const { id: s2 } = e2;
      try {
        this.isValidDisconnect({ topic: t2, reason: e2.params }), await Promise.all([new Promise((i2) => {
          this.client.core.relayer.once(C$3.publish, async () => {
            i2(await this.deleteSession({ topic: t2, id: s2 }));
          });
        }), this.sendResult({ id: s2, topic: t2, result: true }), this.cleanupPendingSentRequestsForTopic({ topic: t2, error: zt$2("USER_DISCONNECTED") })]).catch((i2) => this.client.logger.error(i2));
      } catch (i2) {
        this.client.logger.error(i2);
      }
    }), c$4(this, "onSessionRequest", async (t2) => {
      var e2, s2, i2;
      const { topic: r2, payload: n3, attestation: a2, encryptedId: l2, transportType: p2 } = t2, { id: h3, params: u2 } = n3;
      try {
        await this.isValidRequest(R$1({ topic: r2 }, u2));
        const d5 = this.client.session.get(r2), y4 = await this.getVerifyContext({ attestationId: a2, hash: da(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", u2, h3))), encryptedId: l2, metadata: d5.peer.metadata, transportType: p2 }), w2 = { id: h3, topic: r2, params: u2, verifyContext: y4 };
        await this.setPendingSessionRequest(w2), p2 === ee$1.link_mode && (e2 = d5.peer.metadata.redirect) != null && e2.universal && this.client.core.addLinkModeSupportedApp((s2 = d5.peer.metadata.redirect) == null ? void 0 : s2.universal), (i2 = this.client.signConfig) != null && i2.disableRequestQueue ? this.emitSessionRequest(w2) : (this.addSessionRequestToSessionRequestQueue(w2), this.processSessionRequestQueue());
      } catch (d5) {
        await this.sendError({ id: h3, topic: r2, error: d5 }), this.client.logger.error(d5);
      }
    }), c$4(this, "onSessionRequestResponse", (t2, e2) => {
      const { id: s2 } = e2, i2 = Ni$1("session_request", s2);
      if (this.events.listenerCount(i2) === 0) throw new Error(`emitting ${i2} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(Ni$1("session_request", s2), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(Ni$1("session_request", s2), { error: e2.error });
    }), c$4(this, "onSessionEventRequest", async (t2, e2) => {
      const { id: s2, params: i2 } = e2;
      try {
        const r2 = `${t2}_session_event_${i2.event.name}`, n3 = lu.get(r2);
        if (n3 && this.isRequestOutOfSync(n3, s2)) {
          this.client.logger.info(`Discarding out of sync request - ${s2}`);
          return;
        }
        this.isValidEmit(R$1({ topic: t2 }, i2)), this.client.events.emit("session_event", { id: s2, topic: t2, params: i2 }), lu.set(r2, s2);
      } catch (r2) {
        await this.sendError({ id: s2, topic: t2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$4(this, "onSessionAuthenticateResponse", (t2, e2) => {
      const { id: s2 } = e2;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: t2, payload: e2 }), isJsonRpcResult(e2) ? this.events.emit(Ni$1("session_request", s2), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(Ni$1("session_request", s2), { error: e2.error });
    }), c$4(this, "onSessionAuthenticateRequest", async (t2) => {
      var e2;
      const { topic: s2, payload: i2, attestation: r2, encryptedId: n3, transportType: a2 } = t2;
      try {
        const { requester: l2, authPayload: p2, expiryTimestamp: h3 } = i2.params, u2 = await this.getVerifyContext({ attestationId: r2, hash: da(JSON.stringify(i2)), encryptedId: n3, metadata: l2.metadata, transportType: a2 }), d5 = { requester: l2, pairingTopic: s2, id: i2.id, authPayload: p2, verifyContext: u2, expiryTimestamp: h3 };
        await this.setAuthRequest(i2.id, { request: d5, pairingTopic: s2, transportType: a2 }), a2 === ee$1.link_mode && (e2 = l2.metadata.redirect) != null && e2.universal && this.client.core.addLinkModeSupportedApp(l2.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s2, params: i2.params, id: i2.id, verifyContext: u2 });
      } catch (l2) {
        this.client.logger.error(l2);
        const p2 = i2.params.requester.publicKey, h3 = await this.client.core.crypto.generateKeyPair(), u2 = this.getAppLinkIfEnabled(i2.params.requester.metadata, a2), d5 = { type: ie$1, receiverPublicKey: p2, senderPublicKey: h3 };
        await this.sendError({ id: i2.id, topic: s2, error: l2, encodeOpts: d5, rpcOpts: P$1.wc_sessionAuthenticate.autoReject, appLink: u2 });
      }
    }), c$4(this, "addSessionRequestToSessionRequestQueue", (t2) => {
      this.sessionRequestQueue.queue.push(t2);
    }), c$4(this, "cleanupAfterResponse", (t2) => {
      this.deletePendingSessionRequest(t2.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = M$2.idle, this.processSessionRequestQueue();
      }, cjsExports$1.toMiliseconds(this.requestQueueDelay));
    }), c$4(this, "cleanupPendingSentRequestsForTopic", ({ topic: t2, error: e2 }) => {
      const s2 = this.client.core.history.pending;
      s2.length > 0 && s2.filter((i2) => i2.topic === t2 && i2.request.method === "wc_sessionRequest").forEach((i2) => {
        const r2 = i2.request.id, n3 = Ni$1("session_request", r2);
        if (this.events.listenerCount(n3) === 0) throw new Error(`emitting ${n3} without any listeners`);
        this.events.emit(Ni$1("session_request", i2.request.id), { error: e2 });
      });
    }), c$4(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === M$2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t2 = this.sessionRequestQueue.queue[0];
      if (!t2) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.emitSessionRequest(t2);
      } catch (e2) {
        this.client.logger.error(e2);
      }
    }), c$4(this, "emitSessionRequest", (t2) => {
      if (this.emittedSessionRequests.has(t2.id)) {
        this.client.logger.warn({ id: t2.id }, `Skipping emitting \`session_request\` event for duplicate request. id: ${t2.id}`);
        return;
      }
      this.sessionRequestQueue.state = M$2.active, this.emittedSessionRequests.add(t2.id), this.client.events.emit("session_request", t2);
    }), c$4(this, "onPairingCreated", (t2) => {
      if (t2.methods && this.expectedPairingMethodMap.set(t2.topic, t2.methods), t2.active) return;
      const e2 = this.client.proposal.getAll().find((s2) => s2.pairingTopic === t2.topic);
      e2 && this.onSessionProposeRequest({ topic: t2.topic, payload: formatJsonRpcRequest("wc_sessionPropose", O$1(R$1({}, e2), { requiredNamespaces: e2.requiredNamespaces, optionalNamespaces: e2.optionalNamespaces, relays: e2.relays, proposer: e2.proposer, sessionProperties: e2.sessionProperties, scopedProperties: e2.scopedProperties }), e2.id), attestation: e2.attestation, encryptedId: e2.encryptedId });
    }), c$4(this, "isValidConnect", async (t2) => {
      if (!Xa(t2)) {
        const { message: l2 } = Bt$2("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t2)}`);
        throw new Error(l2);
      }
      const { pairingTopic: e2, requiredNamespaces: s2, optionalNamespaces: i2, sessionProperties: r2, scopedProperties: n3, relays: a2 } = t2;
      if (Dt$1(e2) || await this.isValidPairingTopic(e2), !Ya(a2)) {
        const { message: l2 } = Bt$2("MISSING_OR_INVALID", `connect() relays: ${a2}`);
        throw new Error(l2);
      }
      if (!Dt$1(s2) && Ye$2(s2) !== 0) {
        const l2 = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l2) : this.client.logger.warn(l2), this.validateNamespaces(s2, "requiredNamespaces");
      }
      if (!Dt$1(i2) && Ye$2(i2) !== 0 && this.validateNamespaces(i2, "optionalNamespaces"), Dt$1(r2) || this.validateSessionProps(r2, "sessionProperties"), !Dt$1(n3)) {
        this.validateSessionProps(n3, "scopedProperties");
        const l2 = Object.keys(s2 || {}).concat(Object.keys(i2 || {}));
        if (!Object.keys(n3).every((p2) => l2.includes(p2.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n3)}, required/optional namespaces: ${JSON.stringify(l2)}`);
      }
    }), c$4(this, "validateNamespaces", (t2, e2) => {
      const s2 = za(t2, "connect()", e2);
      if (s2) throw new Error(s2.message);
    }), c$4(this, "isValidApprove", async (t2) => {
      if (!Xa(t2)) throw new Error(Bt$2("MISSING_OR_INVALID", `approve() params: ${t2}`).message);
      const { id: e2, namespaces: s2, relayProtocol: i2, sessionProperties: r2, scopedProperties: n3 } = t2;
      this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2);
      const a2 = this.client.proposal.get(e2), l2 = Ss(s2, "approve()");
      if (l2) throw new Error(l2.message);
      const p2 = Ns(a2.requiredNamespaces, s2, "approve()");
      if (p2) throw new Error(p2.message);
      if (!ft$2(i2, true)) {
        const { message: h3 } = Bt$2("MISSING_OR_INVALID", `approve() relayProtocol: ${i2}`);
        throw new Error(h3);
      }
      if (Dt$1(r2) || this.validateSessionProps(r2, "sessionProperties"), !Dt$1(n3)) {
        this.validateSessionProps(n3, "scopedProperties");
        const h3 = new Set(Object.keys(s2));
        if (!Object.keys(n3).every((u2) => h3.has(u2.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n3)}, approved namespaces: ${Array.from(h3).join(", ")}`);
      }
    }), c$4(this, "isValidReject", async (t2) => {
      if (!Xa(t2)) {
        const { message: i2 } = Bt$2("MISSING_OR_INVALID", `reject() params: ${t2}`);
        throw new Error(i2);
      }
      const { id: e2, reason: s2 } = t2;
      if (this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2), !Ja(s2)) {
        const { message: i2 } = Bt$2("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s2)}`);
        throw new Error(i2);
      }
    }), c$4(this, "isValidSessionSettleRequest", (t2) => {
      if (!Xa(t2)) {
        const { message: l2 } = Bt$2("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t2}`);
        throw new Error(l2);
      }
      const { relay: e2, controller: s2, namespaces: i2, expiry: r2 } = t2;
      if (!Os(e2)) {
        const { message: l2 } = Bt$2("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l2);
      }
      const n3 = Ga(s2, "onSessionSettleRequest()");
      if (n3) throw new Error(n3.message);
      const a2 = Ss(i2, "onSessionSettleRequest()");
      if (a2) throw new Error(a2.message);
      if (Oi$1(r2)) {
        const { message: l2 } = Bt$2("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l2);
      }
    }), c$4(this, "isValidUpdate", async (t2) => {
      if (!Xa(t2)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `update() params: ${t2}`);
        throw new Error(a2);
      }
      const { topic: e2, namespaces: s2 } = t2;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const i2 = this.client.session.get(e2), r2 = Ss(s2, "update()");
      if (r2) throw new Error(r2.message);
      const n3 = Ns(i2.requiredNamespaces, s2, "update()");
      if (n3) throw new Error(n3.message);
    }), c$4(this, "isValidExtend", async (t2) => {
      if (!Xa(t2)) {
        const { message: s2 } = Bt$2("MISSING_OR_INVALID", `extend() params: ${t2}`);
        throw new Error(s2);
      }
      const { topic: e2 } = t2;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
    }), c$4(this, "isValidRequest", async (t2) => {
      if (!Xa(t2)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `request() params: ${t2}`);
        throw new Error(a2);
      }
      const { topic: e2, request: s2, chainId: i2, expiry: r2 } = t2;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const { namespaces: n3 } = this.client.session.get(e2);
      if (!nu(n3, i2)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `request() chainId: ${i2}`);
        throw new Error(a2);
      }
      if (!Qa(s2)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `request() ${JSON.stringify(s2)}`);
        throw new Error(a2);
      }
      if (!ru(n3, i2, s2.method)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `request() method: ${s2.method}`);
        throw new Error(a2);
      }
      if (r2 && !cu(r2, _e)) {
        const { message: a2 } = Bt$2("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${_e.min} and ${_e.max}`);
        throw new Error(a2);
      }
    }), c$4(this, "isValidRespond", async (t2) => {
      var e2;
      if (!Xa(t2)) {
        const { message: r2 } = Bt$2("MISSING_OR_INVALID", `respond() params: ${t2}`);
        throw new Error(r2);
      }
      const { topic: s2, response: i2 } = t2;
      try {
        await this.isValidSessionTopic(s2);
      } catch (r2) {
        throw (e2 = t2 == null ? void 0 : t2.response) != null && e2.id && this.cleanupAfterResponse(t2), r2;
      }
      if (!tu(i2)) {
        const { message: r2 } = Bt$2("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i2)}`);
        throw new Error(r2);
      }
    }), c$4(this, "isValidPing", async (t2) => {
      if (!Xa(t2)) {
        const { message: s2 } = Bt$2("MISSING_OR_INVALID", `ping() params: ${t2}`);
        throw new Error(s2);
      }
      const { topic: e2 } = t2;
      await this.isValidSessionOrPairingTopic(e2);
    }), c$4(this, "isValidEmit", async (t2) => {
      if (!Xa(t2)) {
        const { message: n3 } = Bt$2("MISSING_OR_INVALID", `emit() params: ${t2}`);
        throw new Error(n3);
      }
      const { topic: e2, event: s2, chainId: i2 } = t2;
      await this.isValidSessionTopic(e2);
      const { namespaces: r2 } = this.client.session.get(e2);
      if (!nu(r2, i2)) {
        const { message: n3 } = Bt$2("MISSING_OR_INVALID", `emit() chainId: ${i2}`);
        throw new Error(n3);
      }
      if (!eu(s2)) {
        const { message: n3 } = Bt$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(n3);
      }
      if (!ou(r2, i2, s2.name)) {
        const { message: n3 } = Bt$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(n3);
      }
    }), c$4(this, "isValidDisconnect", async (t2) => {
      if (!Xa(t2)) {
        const { message: s2 } = Bt$2("MISSING_OR_INVALID", `disconnect() params: ${t2}`);
        throw new Error(s2);
      }
      const { topic: e2 } = t2;
      await this.isValidSessionOrPairingTopic(e2);
    }), c$4(this, "isValidAuthenticate", (t2) => {
      const { chains: e2, uri: s2, domain: i2, nonce: r2 } = t2;
      if (!Array.isArray(e2) || e2.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!ft$2(s2, false)) throw new Error("uri is required parameter");
      if (!ft$2(i2, false)) throw new Error("domain is required parameter");
      if (!ft$2(r2, false)) throw new Error("nonce is required parameter");
      if ([...new Set(e2.map((a2) => Je$2(a2).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: n3 } = Je$2(e2[0]);
      if (n3 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), c$4(this, "getVerifyContext", async (t2) => {
      const { attestationId: e2, hash: s2, encryptedId: i2, metadata: r2, transportType: n3 } = t2, a2 = { verified: { verifyUrl: r2.verifyUrl || be$1, validation: "UNKNOWN", origin: r2.url || "" } };
      try {
        if (n3 === ee$1.link_mode) {
          const p2 = this.getAppLinkIfEnabled(r2, n3);
          return a2.verified.validation = p2 && new URL(p2).origin === new URL(r2.url).origin ? "VALID" : "INVALID", a2;
        }
        const l2 = await this.client.core.verify.resolve({ attestationId: e2, hash: s2, encryptedId: i2, verifyUrl: r2.verifyUrl });
        l2 && (a2.verified.origin = l2.origin, a2.verified.isScam = l2.isScam, a2.verified.validation = l2.origin === new URL(r2.url).origin ? "VALID" : "INVALID");
      } catch (l2) {
        this.client.logger.warn(l2);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a2)}`), a2;
    }), c$4(this, "validateSessionProps", (t2, e2) => {
      Object.values(t2).forEach((s2, i2) => {
        if (s2 == null) {
          const { message: r2 } = Bt$2("MISSING_OR_INVALID", `${e2} must contain an existing value for each key. Received: ${s2} for key ${Object.keys(t2)[i2]}`);
          throw new Error(r2);
        }
      });
    }), c$4(this, "getPendingAuthRequest", (t2) => {
      const e2 = this.client.auth.requests.get(t2);
      return typeof e2 == "object" ? e2 : void 0;
    }), c$4(this, "addToRecentlyDeleted", (t2, e2) => {
      if (this.recentlyDeletedMap.set(t2, e2), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s2 = 0;
        const i2 = this.recentlyDeletedLimit / 2;
        for (const r2 of this.recentlyDeletedMap.keys()) {
          if (s2++ >= i2) break;
          this.recentlyDeletedMap.delete(r2);
        }
      }
    }), c$4(this, "checkRecentlyDeleted", (t2) => {
      const e2 = this.recentlyDeletedMap.get(t2);
      if (e2) {
        const { message: s2 } = Bt$2("MISSING_OR_INVALID", `Record was recently deleted - ${e2}: ${t2}`);
        throw new Error(s2);
      }
    }), c$4(this, "isLinkModeEnabled", (t2, e2) => {
      var s2, i2, r2, n3, a2, l2, p2, h3, u2;
      return !t2 || e2 !== ee$1.link_mode ? false : ((i2 = (s2 = this.client.metadata) == null ? void 0 : s2.redirect) == null ? void 0 : i2.linkMode) === true && ((n3 = (r2 = this.client.metadata) == null ? void 0 : r2.redirect) == null ? void 0 : n3.universal) !== void 0 && ((l2 = (a2 = this.client.metadata) == null ? void 0 : a2.redirect) == null ? void 0 : l2.universal) !== "" && ((p2 = t2 == null ? void 0 : t2.redirect) == null ? void 0 : p2.universal) !== void 0 && ((h3 = t2 == null ? void 0 : t2.redirect) == null ? void 0 : h3.universal) !== "" && ((u2 = t2 == null ? void 0 : t2.redirect) == null ? void 0 : u2.linkMode) === true && this.client.core.linkModeSupportedApps.includes(t2.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), c$4(this, "getAppLinkIfEnabled", (t2, e2) => {
      var s2;
      return this.isLinkModeEnabled(t2, e2) ? (s2 = t2 == null ? void 0 : t2.redirect) == null ? void 0 : s2.universal : void 0;
    }), c$4(this, "handleLinkModeMessage", ({ url: t2 }) => {
      if (!t2 || !t2.includes("wc_ev") || !t2.includes("topic")) return;
      const e2 = Ri$1(t2, "topic") || "", s2 = decodeURIComponent(Ri$1(t2, "wc_ev") || ""), i2 = this.client.session.keys.includes(e2);
      i2 && this.client.session.update(e2, { transportType: ee$1.link_mode }), this.client.core.dispatchEnvelope({ topic: e2, message: s2, sessionExists: i2 });
    }), c$4(this, "registerLinkModeListeners", async () => {
      var t2;
      if (Ti$1() || At$2() && (t2 = this.client.metadata.redirect) != null && t2.linkMode) {
        const e2 = global == null ? void 0 : global.Linking;
        if (typeof e2 < "u") {
          e2.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s2 = await e2.getInitialURL();
          s2 && setTimeout(() => {
            this.handleLinkModeMessage({ url: s2 });
          }, 50);
        }
      }
    }), c$4(this, "getTVFParams", (t2, e2, s2) => {
      var i2, r2, n3;
      if (!((i2 = e2.request) != null && i2.method)) return {};
      const a2 = { correlationId: t2, rpcMethods: [e2.request.method], chainId: e2.chainId };
      try {
        const l2 = this.extractTxHashesFromResult(e2.request, s2);
        a2.txHashes = l2, a2.contractAddresses = this.isValidContractData(e2.request.params) ? [(n3 = (r2 = e2.request.params) == null ? void 0 : r2[0]) == null ? void 0 : n3.to] : [];
      } catch (l2) {
        this.client.logger.warn("Error getting TVF params", l2);
      }
      return a2;
    }), c$4(this, "isValidContractData", (t2) => {
      var e2;
      if (!t2) return false;
      try {
        const s2 = (t2 == null ? void 0 : t2.data) || ((e2 = t2 == null ? void 0 : t2[0]) == null ? void 0 : e2.data);
        if (!s2.startsWith("0x")) return false;
        const i2 = s2.slice(2);
        return /^[0-9a-fA-F]*$/.test(i2) ? i2.length % 2 === 0 : false;
      } catch {
      }
      return false;
    }), c$4(this, "extractTxHashesFromResult", (t2, e2) => {
      var s2;
      try {
        if (!e2) return [];
        const i2 = t2.method, r2 = yt$1[i2];
        if (i2 === "sui_signTransaction") return [Ic(e2.transactionBytes)];
        if (i2 === "near_signTransaction") return [Sc(e2)];
        if (i2 === "near_signTransactions") return e2.map((a2) => Sc(a2));
        if (i2 === "xrpl_signTransactionFor" || i2 === "xrpl_signTransaction") return [(s2 = e2.tx_json) == null ? void 0 : s2.hash];
        if (i2 === "polkadot_signTransaction") return [bu({ transaction: t2.params.transactionPayload, signature: e2.signature })];
        if (i2 === "algo_signTxn") return Ee$1(e2) ? e2.map((a2) => Oc(a2)) : [Oc(e2)];
        if (i2 === "cosmos_signDirect") return [Nc(e2)];
        if (i2 === "wallet_sendCalls") return Uc(e2);
        if (typeof e2 == "string") return [e2];
        const n3 = e2[r2.key];
        if (Ee$1(n3)) return i2 === "solana_signAllTransactions" ? n3.map((a2) => Ac(a2)) : n3;
        if (typeof n3 == "string") return [n3];
      } catch (i2) {
        this.client.logger.warn("Error extracting tx hashes from result", i2);
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const o2 = this.client.session.keys, t2 = this.client.core.relayer.messages.getWithoutAck(o2);
      for (const [e2, s2] of Object.entries(t2)) for (const i2 of s2) try {
        await this.onProviderMessageEvent({ topic: e2, message: i2, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${e2}, message: ${i2}`);
      }
    } catch (o2) {
      this.client.logger.warn("processPendingMessageEvents failed", o2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: o2 } = Bt$2("NOT_INITIALIZED", this.name);
      throw new Error(o2);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(C$3.message, (o2) => {
      this.onProviderMessageEvent(o2);
    });
  }
  async onRelayMessage(o2) {
    const { topic: t2, message: e2, attestation: s2, transportType: i2 } = o2, { publicKey: r2 } = this.client.auth.authKeys.keys.includes(pe$1) ? this.client.auth.authKeys.get(pe$1) : { publicKey: void 0 };
    try {
      const n3 = await this.client.core.crypto.decode(t2, e2, { receiverPublicKey: r2, encoding: i2 === ee$1.link_mode ? Ge$2 : oe$2 });
      isJsonRpcRequest(n3) ? (this.client.core.history.set(t2, n3), await this.onRelayEventRequest({ topic: t2, payload: n3, attestation: s2, transportType: i2, encryptedId: da(e2) })) : isJsonRpcResponse(n3) ? (await this.client.core.history.resolve(n3), await this.onRelayEventResponse({ topic: t2, payload: n3, transportType: i2 }), this.client.core.history.delete(t2, n3.id)) : await this.onRelayEventUnknownPayload({ topic: t2, payload: n3, transportType: i2 }), await this.client.core.relayer.messages.ack(t2, e2);
    } catch (n3) {
      this.client.logger.error(n3);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(q.expired, async (o2) => {
      const { topic: t2, id: e2 } = Ii$1(o2.target);
      if (e2 && this.client.pendingRequest.keys.includes(e2)) return await this.deletePendingSessionRequest(e2, Bt$2("EXPIRED"), true);
      if (e2 && this.client.auth.requests.keys.includes(e2)) return await this.deletePendingAuthRequest(e2, Bt$2("EXPIRED"), true);
      t2 ? this.client.session.keys.includes(t2) && (await this.deleteSession({ topic: t2, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: t2 })) : e2 && (await this.deleteProposal(e2, true), this.client.events.emit("proposal_expire", { id: e2 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ae$1.create, (o2) => this.onPairingCreated(o2)), this.client.core.pairing.events.on(ae$1.delete, (o2) => {
      this.addToRecentlyDeleted(o2.topic, "pairing");
    });
  }
  isValidPairingTopic(o2) {
    if (!ft$2(o2, false)) {
      const { message: t2 } = Bt$2("MISSING_OR_INVALID", `pairing topic should be a string: ${o2}`);
      throw new Error(t2);
    }
    if (!this.client.core.pairing.pairings.keys.includes(o2)) {
      const { message: t2 } = Bt$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o2}`);
      throw new Error(t2);
    }
    if (Oi$1(this.client.core.pairing.pairings.get(o2).expiry)) {
      const { message: t2 } = Bt$2("EXPIRED", `pairing topic: ${o2}`);
      throw new Error(t2);
    }
  }
  async isValidSessionTopic(o2) {
    if (!ft$2(o2, false)) {
      const { message: t2 } = Bt$2("MISSING_OR_INVALID", `session topic should be a string: ${o2}`);
      throw new Error(t2);
    }
    if (this.checkRecentlyDeleted(o2), !this.client.session.keys.includes(o2)) {
      const { message: t2 } = Bt$2("NO_MATCHING_KEY", `session topic doesn't exist: ${o2}`);
      throw new Error(t2);
    }
    if (Oi$1(this.client.session.get(o2).expiry)) {
      await this.deleteSession({ topic: o2 });
      const { message: t2 } = Bt$2("EXPIRED", `session topic: ${o2}`);
      throw new Error(t2);
    }
    if (!this.client.core.crypto.keychain.has(o2)) {
      const { message: t2 } = Bt$2("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o2}`);
      throw await this.deleteSession({ topic: o2 }), new Error(t2);
    }
  }
  async isValidSessionOrPairingTopic(o2) {
    if (this.checkRecentlyDeleted(o2), this.client.session.keys.includes(o2)) await this.isValidSessionTopic(o2);
    else if (this.client.core.pairing.pairings.keys.includes(o2)) this.isValidPairingTopic(o2);
    else if (ft$2(o2, false)) {
      const { message: t2 } = Bt$2("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o2}`);
      throw new Error(t2);
    } else {
      const { message: t2 } = Bt$2("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o2}`);
      throw new Error(t2);
    }
  }
  async isValidProposalId(o2) {
    if (!Wa(o2)) {
      const { message: t2 } = Bt$2("MISSING_OR_INVALID", `proposal id should be a number: ${o2}`);
      throw new Error(t2);
    }
    if (!this.client.proposal.keys.includes(o2)) {
      const { message: t2 } = Bt$2("NO_MATCHING_KEY", `proposal id doesn't exist: ${o2}`);
      throw new Error(t2);
    }
    if (Oi$1(this.client.proposal.get(o2).expiryTimestamp)) {
      await this.deleteProposal(o2);
      const { message: t2 } = Bt$2("EXPIRED", `proposal id: ${o2}`);
      throw new Error(t2);
    }
  }
}
class Ds extends Ui {
  constructor(o2, t2) {
    super(o2, t2, dt$1, we$1), this.core = o2, this.logger = t2;
  }
}
let It$1 = class It extends Ui {
  constructor(o2, t2) {
    super(o2, t2, ut$1, we$1), this.core = o2, this.logger = t2;
  }
};
class Ls extends Ui {
  constructor(o2, t2) {
    super(o2, t2, wt$1, we$1, (e2) => e2.id), this.core = o2, this.logger = t2;
  }
}
class Ms extends Ui {
  constructor(o2, t2) {
    super(o2, t2, St$1, le$1, () => pe$1), this.core = o2, this.logger = t2;
  }
}
class $s extends Ui {
  constructor(o2, t2) {
    super(o2, t2, Et$1, le$1), this.core = o2, this.logger = t2;
  }
}
class Ks extends Ui {
  constructor(o2, t2) {
    super(o2, t2, Rt$1, le$1, (e2) => e2.id), this.core = o2, this.logger = t2;
  }
}
var Us = Object.defineProperty, Gs = (S3, o2, t2) => o2 in S3 ? Us(S3, o2, { enumerable: true, configurable: true, writable: true, value: t2 }) : S3[o2] = t2, Ke$1 = (S3, o2, t2) => Gs(S3, typeof o2 != "symbol" ? o2 + "" : o2, t2);
class js {
  constructor(o2, t2) {
    this.core = o2, this.logger = t2, Ke$1(this, "authKeys"), Ke$1(this, "pairingTopics"), Ke$1(this, "requests"), this.authKeys = new Ms(this.core, this.logger), this.pairingTopics = new $s(this.core, this.logger), this.requests = new Ks(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
var Fs = Object.defineProperty, Qs = (S3, o2, t2) => o2 in S3 ? Fs(S3, o2, { enumerable: true, configurable: true, writable: true, value: t2 }) : S3[o2] = t2, f$3 = (S3, o2, t2) => Qs(S3, typeof o2 != "symbol" ? o2 + "" : o2, t2);
let fe$1 = class fe extends J$3 {
  constructor(o2) {
    super(o2), f$3(this, "protocol", Ve$1), f$3(this, "version", ke$1), f$3(this, "name", me$1.name), f$3(this, "metadata"), f$3(this, "core"), f$3(this, "logger"), f$3(this, "events", new eventsExports.EventEmitter()), f$3(this, "engine"), f$3(this, "session"), f$3(this, "proposal"), f$3(this, "pendingRequest"), f$3(this, "auth"), f$3(this, "signConfig"), f$3(this, "on", (e2, s2) => this.events.on(e2, s2)), f$3(this, "once", (e2, s2) => this.events.once(e2, s2)), f$3(this, "off", (e2, s2) => this.events.off(e2, s2)), f$3(this, "removeListener", (e2, s2) => this.events.removeListener(e2, s2)), f$3(this, "removeAllListeners", (e2) => this.events.removeAllListeners(e2)), f$3(this, "connect", async (e2) => {
      try {
        return await this.engine.connect(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "pair", async (e2) => {
      try {
        return await this.engine.pair(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "approve", async (e2) => {
      try {
        return await this.engine.approve(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "reject", async (e2) => {
      try {
        return await this.engine.reject(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "update", async (e2) => {
      try {
        return await this.engine.update(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "extend", async (e2) => {
      try {
        return await this.engine.extend(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "request", async (e2) => {
      try {
        return await this.engine.request(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "respond", async (e2) => {
      try {
        return await this.engine.respond(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "ping", async (e2) => {
      try {
        return await this.engine.ping(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "emit", async (e2) => {
      try {
        return await this.engine.emit(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "disconnect", async (e2) => {
      try {
        return await this.engine.disconnect(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "find", (e2) => {
      try {
        return this.engine.find(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (e2) {
        throw this.logger.error(e2.message), e2;
      }
    }), f$3(this, "authenticate", async (e2, s2) => {
      try {
        return await this.engine.authenticate(e2, s2);
      } catch (i2) {
        throw this.logger.error(i2.message), i2;
      }
    }), f$3(this, "formatAuthMessage", (e2) => {
      try {
        return this.engine.formatAuthMessage(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "approveSessionAuthenticate", async (e2) => {
      try {
        return await this.engine.approveSessionAuthenticate(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), f$3(this, "rejectSessionAuthenticate", async (e2) => {
      try {
        return await this.engine.rejectSessionAuthenticate(e2);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), this.name = (o2 == null ? void 0 : o2.name) || me$1.name, this.metadata = ui$1(o2 == null ? void 0 : o2.metadata), this.signConfig = o2 == null ? void 0 : o2.signConfig;
    const t2 = typeof (o2 == null ? void 0 : o2.logger) < "u" && typeof (o2 == null ? void 0 : o2.logger) != "string" ? o2.logger : Ne$1(k$3({ level: (o2 == null ? void 0 : o2.logger) || me$1.logger }));
    this.core = (o2 == null ? void 0 : o2.core) || new ta(o2), this.logger = E$2(t2, this.name), this.session = new It$1(this.core, this.logger), this.proposal = new Ds(this.core, this.logger), this.pendingRequest = new Ls(this.core, this.logger), this.engine = new ks(this), this.auth = new js(this.core, this.logger);
  }
  static async init(o2) {
    const t2 = new fe(o2);
    return await t2.initialize(), t2;
  }
  get context() {
    return y$4(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
    } catch (o2) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o2.message), o2;
    }
  }
};
const Z$1 = "error", Fe = "wss://relay.walletconnect.org", He = "wc", Ue = "universal_provider", $$1 = `${He}@2:${Ue}:`, T$1 = "https://rpc.walletconnect.org/v1/", ee = "generic", Be = `${T$1}bundler`, y$2 = "call_status", Le = 86400, _$2 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function x$2(t2) {
  return t2 == null || typeof t2 != "object" && typeof t2 != "function";
}
function te(t2) {
  return Object.getOwnPropertySymbols(t2).filter((e2) => Object.prototype.propertyIsEnumerable.call(t2, e2));
}
function se(t2) {
  return t2 == null ? t2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t2);
}
const Me = "[object RegExp]", ie = "[object String]", ne = "[object Number]", re = "[object Boolean]", ae = "[object Arguments]", ze = "[object Symbol]", Ge = "[object Date]", We = "[object Map]", Je = "[object Set]", Ke = "[object Array]", Ve = "[object ArrayBuffer]", Ye = "[object Object]", Xe = "[object DataView]", ke = "[object Uint8Array]", Qe = "[object Uint8ClampedArray]", Ze = "[object Uint16Array]", Te = "[object Uint32Array]", et = "[object Int8Array]", tt = "[object Int16Array]", st = "[object Int32Array]", it = "[object Float32Array]", nt = "[object Float64Array]";
function F(t2) {
  return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
}
function rt(t2, e2) {
  return v$1(t2, void 0, t2, /* @__PURE__ */ new Map(), e2);
}
function v$1(t2, e2, s2, i2 = /* @__PURE__ */ new Map(), r2 = void 0) {
  const a2 = r2 == null ? void 0 : r2(t2, e2, s2, i2);
  if (a2 != null) return a2;
  if (x$2(t2)) return t2;
  if (i2.has(t2)) return i2.get(t2);
  if (Array.isArray(t2)) {
    const n3 = new Array(t2.length);
    i2.set(t2, n3);
    for (let c2 = 0; c2 < t2.length; c2++) n3[c2] = v$1(t2[c2], c2, s2, i2, r2);
    return Object.hasOwn(t2, "index") && (n3.index = t2.index), Object.hasOwn(t2, "input") && (n3.input = t2.input), n3;
  }
  if (t2 instanceof Date) return new Date(t2.getTime());
  if (t2 instanceof RegExp) {
    const n3 = new RegExp(t2.source, t2.flags);
    return n3.lastIndex = t2.lastIndex, n3;
  }
  if (t2 instanceof Map) {
    const n3 = /* @__PURE__ */ new Map();
    i2.set(t2, n3);
    for (const [c2, o2] of t2) n3.set(c2, v$1(o2, c2, s2, i2, r2));
    return n3;
  }
  if (t2 instanceof Set) {
    const n3 = /* @__PURE__ */ new Set();
    i2.set(t2, n3);
    for (const c2 of t2) n3.add(v$1(c2, void 0, s2, i2, r2));
    return n3;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t2)) return t2.subarray();
  if (F(t2)) {
    const n3 = new (Object.getPrototypeOf(t2)).constructor(t2.length);
    i2.set(t2, n3);
    for (let c2 = 0; c2 < t2.length; c2++) n3[c2] = v$1(t2[c2], c2, s2, i2, r2);
    return n3;
  }
  if (t2 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t2 instanceof SharedArrayBuffer) return t2.slice(0);
  if (t2 instanceof DataView) {
    const n3 = new DataView(t2.buffer.slice(0), t2.byteOffset, t2.byteLength);
    return i2.set(t2, n3), m$2(n3, t2, s2, i2, r2), n3;
  }
  if (typeof File < "u" && t2 instanceof File) {
    const n3 = new File([t2], t2.name, { type: t2.type });
    return i2.set(t2, n3), m$2(n3, t2, s2, i2, r2), n3;
  }
  if (t2 instanceof Blob) {
    const n3 = new Blob([t2], { type: t2.type });
    return i2.set(t2, n3), m$2(n3, t2, s2, i2, r2), n3;
  }
  if (t2 instanceof Error) {
    const n3 = new t2.constructor();
    return i2.set(t2, n3), n3.message = t2.message, n3.name = t2.name, n3.stack = t2.stack, n3.cause = t2.cause, m$2(n3, t2, s2, i2, r2), n3;
  }
  if (typeof t2 == "object" && at(t2)) {
    const n3 = Object.create(Object.getPrototypeOf(t2));
    return i2.set(t2, n3), m$2(n3, t2, s2, i2, r2), n3;
  }
  return t2;
}
function m$2(t2, e2, s2 = t2, i2, r2) {
  const a2 = [...Object.keys(e2), ...te(e2)];
  for (let n3 = 0; n3 < a2.length; n3++) {
    const c2 = a2[n3], o2 = Object.getOwnPropertyDescriptor(t2, c2);
    (o2 == null || o2.writable) && (t2[c2] = v$1(e2[c2], c2, s2, i2, r2));
  }
}
function at(t2) {
  switch (se(t2)) {
    case ae:
    case Ke:
    case Ve:
    case Xe:
    case re:
    case Ge:
    case it:
    case nt:
    case et:
    case tt:
    case st:
    case We:
    case ne:
    case Ye:
    case Me:
    case Je:
    case ie:
    case ze:
    case ke:
    case Qe:
    case Ze:
    case Te:
      return true;
    default:
      return false;
  }
}
function ct(t2, e2) {
  return rt(t2, (s2, i2, r2, a2) => {
    if (typeof t2 == "object") switch (Object.prototype.toString.call(t2)) {
      case ne:
      case ie:
      case re: {
        const c2 = new t2.constructor(t2 == null ? void 0 : t2.valueOf());
        return m$2(c2, t2), c2;
      }
      case ae: {
        const c2 = {};
        return m$2(c2, t2), c2.length = t2.length, c2[Symbol.iterator] = t2[Symbol.iterator], c2;
      }
      default:
        return;
    }
  });
}
function ce(t2) {
  return ct(t2);
}
function oe(t2) {
  return t2 !== null && typeof t2 == "object" && se(t2) === "[object Arguments]";
}
function pe(t2) {
  return typeof t2 == "object" && t2 !== null;
}
function ot() {
}
function pt(t2) {
  return F(t2);
}
function ht(t2) {
  var _a2;
  if (typeof t2 != "object" || t2 == null) return false;
  if (Object.getPrototypeOf(t2) === null) return true;
  if (Object.prototype.toString.call(t2) !== "[object Object]") {
    const s2 = t2[Symbol.toStringTag];
    return s2 == null || !((_a2 = Object.getOwnPropertyDescriptor(t2, Symbol.toStringTag)) == null ? void 0 : _a2.writable) ? false : t2.toString() === `[object ${s2}]`;
  }
  let e2 = t2;
  for (; Object.getPrototypeOf(e2) !== null; ) e2 = Object.getPrototypeOf(e2);
  return Object.getPrototypeOf(t2) === e2;
}
function lt(t2) {
  if (x$2(t2)) return t2;
  if (Array.isArray(t2) || F(t2) || t2 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t2 instanceof SharedArrayBuffer) return t2.slice(0);
  const e2 = Object.getPrototypeOf(t2), s2 = e2.constructor;
  if (t2 instanceof Date || t2 instanceof Map || t2 instanceof Set) return new s2(t2);
  if (t2 instanceof RegExp) {
    const i2 = new s2(t2);
    return i2.lastIndex = t2.lastIndex, i2;
  }
  if (t2 instanceof DataView) return new s2(t2.buffer.slice(0));
  if (t2 instanceof Error) {
    const i2 = new s2(t2.message);
    return i2.stack = t2.stack, i2.name = t2.name, i2.cause = t2.cause, i2;
  }
  if (typeof File < "u" && t2 instanceof File) return new s2([t2], t2.name, { type: t2.type, lastModified: t2.lastModified });
  if (typeof t2 == "object") {
    const i2 = Object.create(e2);
    return Object.assign(i2, t2);
  }
  return t2;
}
function ut(t2, ...e2) {
  const s2 = e2.slice(0, -1), i2 = e2[e2.length - 1];
  let r2 = t2;
  for (let a2 = 0; a2 < s2.length; a2++) {
    const n3 = s2[a2];
    r2 = A$2(r2, n3, i2, /* @__PURE__ */ new Map());
  }
  return r2;
}
function A$2(t2, e2, s2, i2) {
  if (x$2(t2) && (t2 = Object(t2)), e2 == null || typeof e2 != "object") return t2;
  if (i2.has(e2)) return lt(i2.get(e2));
  if (i2.set(e2, t2), Array.isArray(e2)) {
    e2 = e2.slice();
    for (let a2 = 0; a2 < e2.length; a2++) e2[a2] = e2[a2] ?? void 0;
  }
  const r2 = [...Object.keys(e2), ...te(e2)];
  for (let a2 = 0; a2 < r2.length; a2++) {
    const n3 = r2[a2];
    let c2 = e2[n3], o2 = t2[n3];
    if (oe(c2) && (c2 = { ...c2 }), oe(o2) && (o2 = { ...o2 }), typeof Buffer < "u" && Buffer.isBuffer(c2) && (c2 = ce(c2)), Array.isArray(c2)) if (typeof o2 == "object" && o2 != null) {
      const l2 = [], p2 = Reflect.ownKeys(o2);
      for (let f3 = 0; f3 < p2.length; f3++) {
        const u2 = p2[f3];
        l2[u2] = o2[u2];
      }
      o2 = l2;
    } else o2 = [];
    const h3 = s2(o2, c2, n3, t2, e2, i2);
    h3 != null ? t2[n3] = h3 : Array.isArray(c2) || pe(o2) && pe(c2) ? t2[n3] = A$2(o2, c2, s2, i2) : o2 == null && ht(c2) ? t2[n3] = A$2({}, c2, s2, i2) : o2 == null && pt(c2) ? t2[n3] = ce(c2) : (o2 === void 0 || c2 !== void 0) && (t2[n3] = c2);
  }
  return t2;
}
function dt(t2, ...e2) {
  return ut(t2, ...e2, ot);
}
var ft = Object.defineProperty, mt = Object.defineProperties, gt = Object.getOwnPropertyDescriptors, he = Object.getOwnPropertySymbols, yt = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, le = (t2, e2, s2) => e2 in t2 ? ft(t2, e2, { enumerable: true, configurable: true, writable: true, value: s2 }) : t2[e2] = s2, E$1 = (t2, e2) => {
  for (var s2 in e2 || (e2 = {})) yt.call(e2, s2) && le(t2, s2, e2[s2]);
  if (he) for (var s2 of he(e2)) vt.call(e2, s2) && le(t2, s2, e2[s2]);
  return t2;
}, wt = (t2, e2) => mt(t2, gt(e2));
function ue(t2, e2, s2) {
  var i2;
  const r2 = Je$2(t2);
  return ((i2 = e2.rpcMap) == null ? void 0 : i2[r2.reference]) || `${T$1}?chainId=${r2.namespace}:${r2.reference}&projectId=${s2}`;
}
function bt(t2) {
  return t2.includes(":") ? t2.split(":")[1] : t2;
}
function de(t2) {
  return t2.map((e2) => `${e2.split(":")[0]}:${e2.split(":")[1]}`);
}
function Pt(t2, e2) {
  const s2 = Object.keys(e2.namespaces).filter((r2) => r2.includes(t2));
  if (!s2.length) return [];
  const i2 = [];
  return s2.forEach((r2) => {
    const a2 = e2.namespaces[r2].accounts;
    i2.push(...a2);
  }), i2;
}
function fe2(t2) {
  return Object.fromEntries(Object.entries(t2).filter(([e2, s2]) => {
    var i2, r2;
    return ((i2 = s2 == null ? void 0 : s2.chains) == null ? void 0 : i2.length) && ((r2 = s2 == null ? void 0 : s2.chains) == null ? void 0 : r2.length) > 0;
  }));
}
function j(t2 = {}, e2 = {}) {
  const s2 = fe2(me(t2)), i2 = fe2(me(e2));
  return dt(s2, i2);
}
function me(t2) {
  var e2, s2, i2, r2, a2;
  const n3 = {};
  if (!Ye$2(t2)) return n3;
  for (const [c2, o2] of Object.entries(t2)) {
    const h3 = Gn$1(c2) ? [c2] : o2.chains, l2 = o2.methods || [], p2 = o2.events || [], f3 = o2.rpcMap || {}, u2 = bs$1(c2);
    n3[u2] = wt(E$1(E$1({}, n3[u2]), o2), { chains: ut$2(h3, (e2 = n3[u2]) == null ? void 0 : e2.chains), methods: ut$2(l2, (s2 = n3[u2]) == null ? void 0 : s2.methods), events: ut$2(p2, (i2 = n3[u2]) == null ? void 0 : i2.events) }), (Ye$2(f3) || Ye$2(((r2 = n3[u2]) == null ? void 0 : r2.rpcMap) || {})) && (n3[u2].rpcMap = E$1(E$1({}, f3), (a2 = n3[u2]) == null ? void 0 : a2.rpcMap));
  }
  return n3;
}
function ge(t2) {
  return t2.includes(":") ? t2.split(":")[2] : t2;
}
function ye(t2) {
  const e2 = {};
  for (const [s2, i2] of Object.entries(t2)) {
    const r2 = i2.methods || [], a2 = i2.events || [], n3 = i2.accounts || [], c2 = Gn$1(s2) ? [s2] : i2.chains ? i2.chains : de(i2.accounts);
    e2[s2] = { chains: c2, methods: r2, events: a2, accounts: n3 };
  }
  return e2;
}
function H$1(t2) {
  return typeof t2 == "number" ? t2 : t2.includes("0x") ? parseInt(t2, 16) : (t2 = t2.includes(":") ? t2.split(":")[1] : t2, isNaN(Number(t2)) ? t2 : Number(t2));
}
function Ot(t2) {
  try {
    const e2 = JSON.parse(t2);
    return typeof e2 == "object" && e2 !== null && !Array.isArray(e2);
  } catch {
    return false;
  }
}
const ve = {}, w$1 = (t2) => ve[t2], U = (t2, e2) => {
  ve[t2] = e2;
};
var It2 = Object.defineProperty, we = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, $t = Object.prototype.propertyIsEnumerable, be = (t2, e2, s2) => e2 in t2 ? It2(t2, e2, { enumerable: true, configurable: true, writable: true, value: s2 }) : t2[e2] = s2, Pe = (t2, e2) => {
  for (var s2 in e2 || (e2 = {})) St.call(e2, s2) && be(t2, s2, e2[s2]);
  if (we) for (var s2 of we(e2)) $t.call(e2, s2) && be(t2, s2, e2[s2]);
  return t2;
};
const Oe2 = "eip155", At = ["atomic", "flow-control", "paymasterService", "sessionKeys", "auxiliaryFunds"], Et = (t2) => t2 && t2.startsWith("0x") ? BigInt(t2).toString(10) : t2, B$2 = (t2) => t2 && t2.startsWith("0x") ? t2 : `0x${BigInt(t2).toString(16)}`, Ie = (t2) => Object.keys(t2).filter((e2) => At.includes(e2)).reduce((e2, s2) => (e2[s2] = jt(t2[s2]), e2), {}), jt = (t2) => typeof t2 == "string" && Ot(t2) ? JSON.parse(t2) : t2, Ct = (t2, e2, s2) => {
  const { sessionProperties: i2 = {}, scopedProperties: r2 = {} } = t2, a2 = {};
  if (!Ye$2(r2) && !Ye$2(i2)) return;
  const n3 = Ie(i2);
  for (const c2 of s2) {
    const o2 = Et(c2);
    if (!o2) continue;
    a2[B$2(o2)] = n3;
    const h3 = r2 == null ? void 0 : r2[`${Oe2}:${o2}`];
    if (h3) {
      const l2 = h3 == null ? void 0 : h3[`${Oe2}:${o2}:${e2}`];
      a2[B$2(o2)] = Pe(Pe({}, a2[B$2(o2)]), Ie(l2 || h3));
    }
  }
  for (const [c2, o2] of Object.entries(a2)) Object.keys(o2).length === 0 && delete a2[c2];
  return Object.keys(a2).length > 0 ? a2 : void 0;
};
var Nt = Object.defineProperty, Dt = (t2, e2, s2) => e2 in t2 ? Nt(t2, e2, { enumerable: true, configurable: true, writable: true, value: s2 }) : t2[e2] = s2, qt = (t2, e2, s2) => Dt(t2, e2 + "", s2);
let L$2;
class J2 {
  constructor(e2) {
    qt(this, "storage"), this.storage = e2;
  }
  async getItem(e2) {
    return await this.storage.getItem(e2);
  }
  async setItem(e2, s2) {
    return await this.storage.setItem(e2, s2);
  }
  async removeItem(e2) {
    return await this.storage.removeItem(e2);
  }
  static getStorage(e2) {
    return L$2 || (L$2 = new J2(e2)), L$2;
  }
}
var Rt = Object.defineProperty, _t = Object.defineProperties, xt = Object.getOwnPropertyDescriptors, Se = Object.getOwnPropertySymbols, Ft = Object.prototype.hasOwnProperty, Ht = Object.prototype.propertyIsEnumerable, $e = (t2, e2, s2) => e2 in t2 ? Rt(t2, e2, { enumerable: true, configurable: true, writable: true, value: s2 }) : t2[e2] = s2, Ut = (t2, e2) => {
  for (var s2 in e2 || (e2 = {})) Ft.call(e2, s2) && $e(t2, s2, e2[s2]);
  if (Se) for (var s2 of Se(e2)) Ht.call(e2, s2) && $e(t2, s2, e2[s2]);
  return t2;
}, Bt = (t2, e2) => _t(t2, xt(e2));
async function Lt(t2, e2) {
  const s2 = Je$2(t2.result.capabilities.caip345.caip2), i2 = t2.result.capabilities.caip345.transactionHashes, r2 = await Promise.allSettled(i2.map((p2) => Mt(s2.reference, p2, e2))), a2 = r2.filter((p2) => p2.status === "fulfilled").map((p2) => p2.value).filter((p2) => p2);
  r2.filter((p2) => p2.status === "rejected").forEach((p2) => console.warn("Failed to fetch transaction receipt:", p2.reason));
  const n3 = !a2.length || a2.some((p2) => !p2), c2 = a2.every((p2) => (p2 == null ? void 0 : p2.status) === "0x1"), o2 = a2.every((p2) => (p2 == null ? void 0 : p2.status) === "0x0"), h3 = a2.some((p2) => (p2 == null ? void 0 : p2.status) === "0x0");
  let l2;
  return n3 ? l2 = 100 : c2 ? l2 = 200 : o2 ? l2 = 500 : h3 && (l2 = 600), { id: t2.result.id, version: t2.request.version, atomic: t2.request.atomicRequired, chainId: t2.request.chainId, capabilities: t2.result.capabilities, receipts: a2, status: l2 };
}
async function Mt(t2, e2, s2) {
  return await s2(parseInt(t2)).request(formatJsonRpcRequest("eth_getTransactionReceipt", [e2]));
}
async function zt({ sendCalls: t2, storage: e2 }) {
  const s2 = await e2.getItem(y$2);
  await e2.setItem(y$2, Bt(Ut({}, s2), { [t2.result.id]: { request: t2.request, result: t2.result, expiry: Si$1(Le) } }));
}
async function Gt({ resultId: t2, storage: e2 }) {
  const s2 = await e2.getItem(y$2);
  if (s2) {
    delete s2[t2], await e2.setItem(y$2, s2);
    for (const i2 in s2) Oi$1(s2[i2].expiry) && delete s2[i2];
    await e2.setItem(y$2, s2);
  }
}
async function Wt({ resultId: t2, storage: e2 }) {
  const s2 = await e2.getItem(y$2), i2 = s2 == null ? void 0 : s2[t2];
  if (i2 && !Oi$1(i2.expiry)) return i2;
  await Gt({ resultId: t2, storage: e2 });
}
var Jt = Object.defineProperty, Kt = Object.defineProperties, Vt = Object.getOwnPropertyDescriptors, Ae = Object.getOwnPropertySymbols, Yt = Object.prototype.hasOwnProperty, Xt = Object.prototype.propertyIsEnumerable, M$1 = (t2, e2, s2) => e2 in t2 ? Jt(t2, e2, { enumerable: true, configurable: true, writable: true, value: s2 }) : t2[e2] = s2, z$2 = (t2, e2) => {
  for (var s2 in e2 || (e2 = {})) Yt.call(e2, s2) && M$1(t2, s2, e2[s2]);
  if (Ae) for (var s2 of Ae(e2)) Xt.call(e2, s2) && M$1(t2, s2, e2[s2]);
  return t2;
}, G = (t2, e2) => Kt(t2, Vt(e2)), g$2 = (t2, e2, s2) => M$1(t2, typeof e2 != "symbol" ? e2 + "" : e2, s2);
class kt {
  constructor(e2) {
    g$2(this, "name", "eip155"), g$2(this, "client"), g$2(this, "chainId"), g$2(this, "namespace"), g$2(this, "httpProviders"), g$2(this, "events"), g$2(this, "storage"), this.namespace = e2.namespace, this.events = w$1("events"), this.client = w$1("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = J2.getStorage(this.client.core.storage);
  }
  async request(e2) {
    switch (e2.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e2);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e2);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e2);
      case "wallet_sendCalls":
        return await this.sendCalls(e2);
    }
    return this.namespace.methods.includes(e2.request.method) ? await this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  setDefaultChain(e2, s2) {
    this.httpProviders[e2] || this.setHttpProvider(parseInt(e2), s2);
    const i2 = this.chainId;
    this.chainId = parseInt(e2), this.events.emit(_$2.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e2}`, previousCaipChainId: `${this.name}:${i2}` });
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  createHttpProvider(e2, s2) {
    const i2 = s2 || ue(`${this.name}:${e2}`, this.namespace, this.client.core.projectId);
    if (!i2) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$4(new f$8(i2, w$1("disableProviderPing")));
  }
  setHttpProvider(e2, s2) {
    const i2 = this.createHttpProvider(e2, s2);
    i2 && (this.httpProviders[e2] = i2);
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((s2) => {
      var i2;
      const r2 = parseInt(bt(s2));
      e2[r2] = this.createHttpProvider(r2, (i2 = this.namespace.rpcMap) == null ? void 0 : i2[s2]);
    }), e2;
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((s2) => s2.split(":")[1] === this.chainId.toString()).map((s2) => s2.split(":")[2]))] : [];
  }
  getHttpProvider(e2) {
    const s2 = e2 || this.chainId;
    return this.httpProviders[s2] || (this.httpProviders = G(z$2({}, this.httpProviders), { [s2]: this.createHttpProvider(s2) }), this.httpProviders[s2]);
  }
  async handleSwitchChain(e2) {
    var s2, i2;
    let r2 = e2.request.params ? (s2 = e2.request.params[0]) == null ? void 0 : s2.chainId : "0x0";
    r2 = r2.startsWith("0x") ? r2 : `0x${r2}`;
    const a2 = parseInt(r2, 16);
    if (this.isChainApproved(a2)) this.setDefaultChain(`${a2}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e2.topic, request: { method: e2.request.method, params: [{ chainId: r2 }] }, chainId: (i2 = this.namespace.chains) == null ? void 0 : i2[0] }), this.setDefaultChain(`${a2}`);
    else throw new Error(`Failed to switch to chain 'eip155:${a2}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e2) {
    return this.namespace.chains.includes(`${this.name}:${e2}`);
  }
  async getCapabilities(e2) {
    var s2, i2, r2, a2, n3;
    const c2 = (i2 = (s2 = e2.request) == null ? void 0 : s2.params) == null ? void 0 : i2[0], o2 = ((a2 = (r2 = e2.request) == null ? void 0 : r2.params) == null ? void 0 : a2[1]) || [];
    if (!c2) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const h3 = this.client.session.get(e2.topic), l2 = ((n3 = h3 == null ? void 0 : h3.sessionProperties) == null ? void 0 : n3.capabilities) || {}, p2 = `${c2}${o2.join(",")}`, f3 = l2 == null ? void 0 : l2[p2];
    if (f3) return f3;
    let u2;
    try {
      u2 = Ct(h3, c2, o2);
    } catch (D2) {
      console.warn("Failed to extract capabilities from session", D2);
    }
    if (u2) return u2;
    const K2 = await this.client.request(e2);
    try {
      await this.client.session.update(e2.topic, { sessionProperties: G(z$2({}, h3.sessionProperties || {}), { capabilities: G(z$2({}, l2 || {}), { [p2]: K2 }) }) });
    } catch (D2) {
      console.warn("Failed to update session with capabilities", D2);
    }
    return K2;
  }
  async getCallStatus(e2) {
    var s2, i2, r2;
    const a2 = this.client.session.get(e2.topic), n3 = (s2 = a2.sessionProperties) == null ? void 0 : s2.bundler_name;
    if (n3) {
      const h3 = this.getBundlerUrl(e2.chainId, n3);
      try {
        return await this.getUserOperationReceipt(h3, e2);
      } catch (l2) {
        console.warn("Failed to fetch call status from bundler", l2, h3);
      }
    }
    const c2 = (i2 = a2.sessionProperties) == null ? void 0 : i2.bundler_url;
    if (c2) try {
      return await this.getUserOperationReceipt(c2, e2);
    } catch (h3) {
      console.warn("Failed to fetch call status from custom bundler", h3, c2);
    }
    const o2 = await Wt({ resultId: (r2 = e2.request.params) == null ? void 0 : r2[0], storage: this.storage });
    if (o2) try {
      return await Lt(o2, this.getHttpProvider.bind(this));
    } catch (h3) {
      console.warn("Failed to fetch call status from stored send calls", h3, o2);
    }
    if (this.namespace.methods.includes(e2.request.method)) return await this.client.request(e2);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e2, s2) {
    var i2;
    const r2 = new URL(e2), a2 = await fetch(r2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(i2 = s2.request.params) == null ? void 0 : i2[0]])) });
    if (!a2.ok) throw new Error(`Failed to fetch user operation receipt - ${a2.status}`);
    return await a2.json();
  }
  getBundlerUrl(e2, s2) {
    return `${Be}?projectId=${this.client.core.projectId}&chainId=${e2}&bundler=${s2}`;
  }
  async sendCalls(e2) {
    var s2, i2, r2;
    const a2 = await this.client.request(e2), n3 = (s2 = e2.request.params) == null ? void 0 : s2[0], c2 = a2 == null ? void 0 : a2.id, o2 = (a2 == null ? void 0 : a2.capabilities) || {}, h3 = (i2 = o2 == null ? void 0 : o2.caip345) == null ? void 0 : i2.caip2, l2 = (r2 = o2 == null ? void 0 : o2.caip345) == null ? void 0 : r2.transactionHashes;
    return !c2 || !h3 || !(l2 != null && l2.length) || await zt({ sendCalls: { request: n3, result: a2 }, storage: this.storage }), a2;
  }
}
var Qt = Object.defineProperty, Zt = (t2, e2, s2) => e2 in t2 ? Qt(t2, e2, { enumerable: true, configurable: true, writable: true, value: s2 }) : t2[e2] = s2, b$2 = (t2, e2, s2) => Zt(t2, typeof e2 != "symbol" ? e2 + "" : e2, s2);
class Tt {
  constructor(e2) {
    b$2(this, "name", ee), b$2(this, "client"), b$2(this, "httpProviders"), b$2(this, "events"), b$2(this, "namespace"), b$2(this, "chainId"), this.namespace = e2.namespace, this.events = w$1("events"), this.client = w$1("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e2.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e2.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e2.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e2.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider(e2.chainId).request(e2.request);
  }
  setDefaultChain(e2, s2) {
    this.httpProviders[e2] || this.setHttpProvider(e2, s2);
    const i2 = this.chainId;
    this.chainId = e2, this.events.emit(_$2.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e2}`, previousCaipChainId: `${this.name}:${i2}` });
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getNamespaceName() {
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return Je$2(e2).namespace;
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((s2) => s2.split(":")[1] === this.chainId.toString()).map((s2) => s2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e2, s2;
    const i2 = {};
    return (s2 = (e2 = this.namespace) == null ? void 0 : e2.accounts) == null || s2.forEach((r2) => {
      var a2, n3;
      const c2 = Je$2(r2), o2 = (n3 = (a2 = this.namespace) == null ? void 0 : a2.rpcMap) == null ? void 0 : n3[`${c2.namespace}:${c2.reference}`];
      i2[c2.reference] = this.createHttpProvider(r2, o2);
    }), i2;
  }
  getHttpProvider(e2) {
    const s2 = Je$2(e2).reference, i2 = this.httpProviders[s2];
    if (typeof i2 > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return i2;
  }
  setHttpProvider(e2, s2) {
    const i2 = this.createHttpProvider(e2, s2);
    i2 && (this.httpProviders[e2] = i2);
  }
  createHttpProvider(e2, s2) {
    const i2 = s2 || ue(e2, this.namespace, this.client.core.projectId);
    if (!i2) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$4(new f$8(i2, w$1("disableProviderPing")));
  }
}
var es = Object.defineProperty, ts = Object.defineProperties, ss = Object.getOwnPropertyDescriptors, Ee = Object.getOwnPropertySymbols, is = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, W = (t2, e2, s2) => e2 in t2 ? es(t2, e2, { enumerable: true, configurable: true, writable: true, value: s2 }) : t2[e2] = s2, S$3 = (t2, e2) => {
  for (var s2 in e2 || (e2 = {})) is.call(e2, s2) && W(t2, s2, e2[s2]);
  if (Ee) for (var s2 of Ee(e2)) ns.call(e2, s2) && W(t2, s2, e2[s2]);
  return t2;
}, C$2 = (t2, e2) => ts(t2, ss(e2)), d$3 = (t2, e2, s2) => W(t2, typeof e2 != "symbol" ? e2 + "" : e2, s2);
let N$1 = class N {
  constructor(e2) {
    d$3(this, "client"), d$3(this, "namespaces"), d$3(this, "optionalNamespaces"), d$3(this, "sessionProperties"), d$3(this, "scopedProperties"), d$3(this, "events", new xe$1()), d$3(this, "rpcProviders", {}), d$3(this, "session"), d$3(this, "providerOpts"), d$3(this, "logger"), d$3(this, "uri"), d$3(this, "disableProviderPing", false), this.providerOpts = e2, this.logger = typeof (e2 == null ? void 0 : e2.logger) < "u" && typeof (e2 == null ? void 0 : e2.logger) != "string" ? e2.logger : Ne$1(k$3({ level: (e2 == null ? void 0 : e2.logger) || Z$1 })), this.disableProviderPing = (e2 == null ? void 0 : e2.disableProviderPing) || false;
  }
  static async init(e2) {
    const s2 = new N(e2);
    return await s2.initialize(), s2;
  }
  async request(e2, s2, i2) {
    const [r2, a2] = this.validateChain(s2);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(r2).request({ request: S$3({}, e2), chainId: `${r2}:${a2}`, topic: this.session.topic, expiry: i2 });
  }
  sendAsync(e2, s2, i2, r2) {
    const a2 = (/* @__PURE__ */ new Date()).getTime();
    this.request(e2, i2, r2).then((n3) => s2(null, formatJsonRpcResult(a2, n3))).catch((n3) => s2(n3, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e2;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e2 = this.session) == null ? void 0 : e2.topic, reason: zt$2("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e2) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e2), this.cleanupPendingPairings(), !e2.skipPairing) return await this.pair(e2.pairingTopic);
  }
  async authenticate(e2, s2) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e2), await this.cleanupPendingPairings();
    const { uri: i2, response: r2 } = await this.client.authenticate(e2, s2);
    i2 && (this.uri = i2, this.events.emit("display_uri", i2));
    const a2 = await r2();
    if (this.session = a2.session, this.session) {
      const n3 = ye(this.session.namespaces);
      this.namespaces = j(this.namespaces, n3), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return a2;
  }
  on(e2, s2) {
    this.events.on(e2, s2);
  }
  once(e2, s2) {
    this.events.once(e2, s2);
  }
  removeListener(e2, s2) {
    this.events.removeListener(e2, s2);
  }
  off(e2, s2) {
    this.events.off(e2, s2);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(e2) {
    const { uri: s2, approval: i2 } = await this.client.connect({ pairingTopic: e2, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    s2 && (this.uri = s2, this.events.emit("display_uri", s2));
    const r2 = await i2();
    this.session = r2;
    const a2 = ye(r2.namespaces);
    return this.namespaces = j(this.namespaces, a2), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e2, s2) {
    try {
      if (!this.session) return;
      const [i2, r2] = this.validateChain(e2);
      this.getProvider(i2).setDefaultChain(r2, s2);
    } catch (i2) {
      if (!/Please call connect/.test(i2.message)) throw i2;
    }
  }
  async cleanupPendingPairings(e2 = {}) {
    try {
      this.logger.info("Cleaning up inactive pairings...");
      const s2 = this.client.pairing.getAll();
      if (!Ee$1(s2)) return;
      for (const i2 of s2) e2.deletePairings ? this.client.core.expirer.set(i2.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i2.topic);
      this.logger.info(`Inactive pairings cleared: ${s2.length}`);
    } catch (s2) {
      this.logger.warn("Failed to cleanup pending pairings", s2);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var e2, s2;
    if (this.client = this.providerOpts.client || await fe$1.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || Z$1, relayUrl: this.providerOpts.relayUrl || Fe, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (i2) {
      throw this.logger.error("Failed to get session", i2), new Error(`The provided session: ${(s2 = (e2 = this.providerOpts) == null ? void 0 : e2.session) == null ? void 0 : s2.topic} doesn't exist in the Sign client`);
    }
    else {
      const i2 = this.client.session.getAll();
      this.session = i2[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e2 = [...new Set(Object.keys(this.session.namespaces).map((s2) => bs$1(s2)))];
    U("client", this.client), U("events", this.events), U("disableProviderPing", this.disableProviderPing), e2.forEach((s2) => {
      if (!this.session) return;
      const i2 = Pt(s2, this.session);
      if ((i2 == null ? void 0 : i2.length) === 0) return;
      const r2 = de(i2), a2 = j(this.namespaces, this.optionalNamespaces), n3 = C$2(S$3({}, a2[s2]), { accounts: i2, chains: r2 });
      switch (s2) {
        case "eip155":
          this.rpcProviders[s2] = new kt({ namespace: n3 });
          break;
        default:
          this.rpcProviders[s2] = new Tt({ namespace: n3 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e2) => {
      var s2;
      const { topic: i2 } = e2;
      i2 === ((s2 = this.session) == null ? void 0 : s2.topic) && this.events.emit("session_ping", e2);
    }), this.client.on("session_event", (e2) => {
      var s2;
      const { params: i2, topic: r2 } = e2;
      if (r2 !== ((s2 = this.session) == null ? void 0 : s2.topic)) return;
      const { event: a2 } = i2;
      if (a2.name === "accountsChanged") {
        const n3 = a2.data;
        n3 && Ee$1(n3) && this.events.emit("accountsChanged", n3.map(ge));
      } else if (a2.name === "chainChanged") {
        const n3 = i2.chainId, c2 = i2.event.data, o2 = bs$1(n3), h3 = H$1(n3) !== H$1(c2) ? `${o2}:${H$1(c2)}` : n3;
        this.onChainChanged({ currentCaipChainId: h3 });
      } else this.events.emit(a2.name, a2.data);
      this.events.emit("session_event", e2);
    }), this.client.on("session_update", ({ topic: e2, params: s2 }) => {
      var i2, r2;
      if (e2 !== ((i2 = this.session) == null ? void 0 : i2.topic)) return;
      const { namespaces: a2 } = s2, n3 = (r2 = this.client) == null ? void 0 : r2.session.get(e2);
      this.session = C$2(S$3({}, n3), { namespaces: a2 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e2, params: s2 });
    }), this.client.on("session_delete", async (e2) => {
      var s2;
      e2.topic === ((s2 = this.session) == null ? void 0 : s2.topic) && (await this.cleanup(), this.events.emit("session_delete", e2), this.events.emit("disconnect", C$2(S$3({}, zt$2("USER_DISCONNECTED")), { data: e2.topic })));
    }), this.on(_$2.DEFAULT_CHAIN_CHANGED, (e2) => {
      this.onChainChanged(C$2(S$3({}, e2), { internal: true }));
    });
  }
  getProvider(e2) {
    return this.rpcProviders[e2] || this.rpcProviders[ee];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e2) => {
      var s2;
      this.getProvider(e2).updateNamespace((s2 = this.session) == null ? void 0 : s2.namespaces[e2]);
    });
  }
  setNamespaces(e2) {
    const { namespaces: s2 = {}, optionalNamespaces: i2 = {}, sessionProperties: r2, scopedProperties: a2 } = e2;
    this.optionalNamespaces = j(s2, i2), this.sessionProperties = r2, this.scopedProperties = a2;
  }
  validateChain(e2) {
    const [s2, i2] = (e2 == null ? void 0 : e2.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [s2, i2];
    if (s2 && !Object.keys(this.namespaces || {}).map((n3) => bs$1(n3)).includes(s2)) throw new Error(`Namespace '${s2}' is not configured. Please call connect() first with namespace config.`);
    if (s2 && i2) return [s2, i2];
    const r2 = bs$1(Object.keys(this.namespaces)[0]), a2 = this.rpcProviders[r2].getDefaultChain();
    return [r2, a2];
  }
  async requestAccounts() {
    const [e2] = this.validateChain();
    return await this.getProvider(e2).requestAccounts();
  }
  async onChainChanged({ currentCaipChainId: e2, previousCaipChainId: s2, internal: i2 = false }) {
    if (!this.namespaces) return;
    const [r2, a2] = this.validateChain(e2);
    a2 && (this.updateNamespaceChain(r2, a2), i2 ? (this.events.emit("chainChanged", a2), this.emitAccountsChangedOnChainChange({ namespace: r2, currentCaipChainId: e2, previousCaipChainId: s2 })) : this.getProvider(r2).setDefaultChain(a2), await this.persist("namespaces", this.namespaces));
  }
  emitAccountsChangedOnChainChange({ namespace: e2, currentCaipChainId: s2, previousCaipChainId: i2 }) {
    var r2, a2;
    try {
      if (i2 === s2) return;
      const n3 = (a2 = (r2 = this.session) == null ? void 0 : r2.namespaces[e2]) == null ? void 0 : a2.accounts;
      if (!n3) return;
      const c2 = n3.filter((o2) => o2.includes(`${s2}:`)).map(ge);
      if (!Ee$1(c2)) return;
      this.events.emit("accountsChanged", c2);
    } catch (n3) {
      this.logger.warn("Failed to emit accountsChanged on chain change", n3);
    }
  }
  updateNamespaceChain(e2, s2) {
    if (!this.namespaces) return;
    const i2 = this.namespaces[e2] ? e2 : `${e2}:${s2}`, r2 = { chains: [], methods: [], events: [], defaultChain: s2 };
    this.namespaces[i2] ? this.namespaces[i2] && (this.namespaces[i2].defaultChain = s2) : this.namespaces[i2] = r2;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({ deletePairings: true }), await this.cleanupStorage();
  }
  async persist(e2, s2) {
    var i2;
    const r2 = ((i2 = this.session) == null ? void 0 : i2.topic) || "";
    await this.client.core.storage.setItem(`${$$1}/${e2}${r2}`, s2);
  }
  async getFromStore(e2) {
    var s2;
    const i2 = ((s2 = this.session) == null ? void 0 : s2.topic) || "";
    return await this.client.core.storage.getItem(`${$$1}/${e2}${i2}`);
  }
  async deleteFromStore(e2) {
    var s2;
    const i2 = ((s2 = this.session) == null ? void 0 : s2.topic) || "";
    await this.client.core.storage.removeItem(`${$$1}/${e2}${i2}`);
  }
  async cleanupStorage() {
    var e2;
    try {
      if (((e2 = this.client) == null ? void 0 : e2.session.length) > 0) return;
      const s2 = await this.client.core.storage.getKeys();
      for (const i2 of s2) i2.startsWith($$1) && await this.client.core.storage.removeItem(i2);
    } catch (s2) {
      this.logger.warn("Failed to cleanup storage", s2);
    }
  }
};
const ConstantsUtil$1 = {
  EIP155: ConstantsUtil$3.CHAIN.EVM,
  CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
  CONNECTOR_TYPE_INJECTED: "INJECTED",
  CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
  CONNECTOR_TYPE_AUTH: "AUTH"
};
const PresetsUtil = {
  NetworkImageIds: {
    // Ethereum
    1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    // Arbitrum
    42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
    // Avalanche
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    // Binance Smart Chain
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    // Fantom
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    // Optimism
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    // Polygon
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    // Mantle
    5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
    // Hedera Mainnet
    295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
    // Sepolia
    11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
    // Base Sepolia
    84532: "a18a7ecd-e307-4360-4746-283182228e00",
    // Unichain Sepolia
    1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
    // Unichain Mainnet
    130: "2257980a-3463-48c6-cbac-a42d2a956e00",
    // Monad Testnet
    10143: "0a728e83-bacb-46db-7844-948f05434900",
    // Gnosis
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    // EVMos
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    // ZkSync
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    // Filecoin
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    // Iotx
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    // Metis,
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    // Moonbeam
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    // Moonriver
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    // Zora
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    // Celo
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    // Base
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    // Aurora
    1313161554: "3ff73439-a619-4894-9262-4470c773a100",
    // Ronin Mainnet
    2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    // Saigon Testnet (a.k.a. Ronin)
    2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    // Berachain Mainnet
    80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
    // Abstract Mainnet
    2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
    // Solana networks
    "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    // Bitcoin
    "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
    // Bitcoin Testnet
    "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200",
    // Bitcoin Signet
    "00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700"
  },
  ConnectorImageIds: {
    [ConstantsUtil$3.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [ConstantsUtil$3.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [ConstantsUtil$3.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
    [ConstantsUtil$3.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
    [ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
    [ConstantsUtil$3.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
  },
  ConnectorNamesMap: {
    [ConstantsUtil$3.CONNECTOR_ID.INJECTED]: "Browser Wallet",
    [ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
    [ConstantsUtil$3.CONNECTOR_ID.COINBASE]: "Coinbase",
    [ConstantsUtil$3.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
    [ConstantsUtil$3.CONNECTOR_ID.LEDGER]: "Ledger",
    [ConstantsUtil$3.CONNECTOR_ID.SAFE]: "Safe"
  }
};
const HelpersUtil = {
  getCaipTokens(tokens2) {
    if (!tokens2) {
      return void 0;
    }
    const caipTokens = {};
    Object.entries(tokens2).forEach(([id, token]) => {
      caipTokens[`${ConstantsUtil$1.EIP155}:${id}`] = token;
    });
    return caipTokens;
  },
  isLowerCaseMatch(str1, str2) {
    return (str1 == null ? void 0 : str1.toLowerCase()) === (str2 == null ? void 0 : str2.toLowerCase());
  },
  /**
   * Iterates the Auth connector supported chains and returns the namespace that is last connected to the active chain.
   * @returns ChainNamespace | undefined
   */
  getActiveNamespaceConnectedToAuth() {
    const activeChain = ChainController.state.activeChain;
    return ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain) => ConnectorController.getConnectorId(chain) === ConstantsUtil$3.CONNECTOR_ID.AUTH && chain === activeChain);
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
    return new Promise((resolve) => {
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
    if (typeof chainId === "number") {
      return ConstantsUtil$3.CHAIN.EVM;
    }
    const [namespace] = chainId.split(":");
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
    const otherAuthNamespaces = authNamespaces.filter((ns2) => ns2 !== activeNamespace);
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
      hasConnected: storageConnections.some((c2) => HelpersUtil.isLowerCaseMatch(c2.connectorId, connectorId))
    };
  }
};
const SemVerUtils = {
  extractVersion(version2) {
    var _a2;
    if (!version2 || typeof version2 !== "string") {
      return null;
    }
    const versionRegex = /(?:[~^>=<]+\s*)?(?<version>\d+(?:\.\d+){0,2})(?:-[a-zA-Z]+\.\d+)?/u;
    const match = version2.match(versionRegex);
    return ((_a2 = match == null ? void 0 : match.groups) == null ? void 0 : _a2["version"]) || null;
  },
  checkSDKVersion(version2) {
    this.extractVersion(version2);
    {
      return;
    }
  },
  isValidVersion(version2) {
    return typeof version2 === "string" && /^\d+\.\d+\.\d+$/u.test(version2);
  },
  isOlder(currentVersion, latestVersion) {
    const currentVersionNumber = this.extractVersion(currentVersion);
    const latestVersionNumber = this.extractVersion(latestVersion);
    if (!currentVersionNumber || !latestVersionNumber) {
      return false;
    }
    function normalizeVersion(version2) {
      const parts = version2.split(".").map(Number);
      while (parts.length < 3) {
        parts.push(0);
      }
      return parts;
    }
    const current = normalizeVersion(currentVersionNumber);
    const latest = normalizeVersion(latestVersionNumber);
    for (let i2 = 0; i2 < Math.max(current.length, latest.length); i2 += 1) {
      const currentPart = current[i2] || 0;
      const latestPart = latest[i2] || 0;
      if (currentPart < latestPart) {
        return true;
      } else if (currentPart > latestPart) {
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
      message: "Unauthorized: origin not allowed",
      alertErrorKey: "ORIGIN_NOT_ALLOWED"
    },
    JWT_VALIDATION_ERROR: {
      message: "JWT validation error: JWT Token is not yet valid",
      alertErrorKey: "JWT_TOKEN_NOT_VALID"
    },
    INVALID_KEY: {
      message: "Unauthorized: invalid key",
      alertErrorKey: "INVALID_PROJECT_ID"
    }
  },
  ALERT_ERRORS: {
    SWITCH_NETWORK_NOT_FOUND: {
      code: "APKT001",
      displayMessage: "Network Not Found",
      debugMessage: "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."
    },
    ORIGIN_NOT_ALLOWED: {
      code: "APKT002",
      displayMessage: "Invalid App Configuration",
      debugMessage: () => `The origin ${isSafe() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com.`
    },
    IFRAME_LOAD_FAILED: {
      code: "APKT003",
      displayMessage: "Network Error: Wallet Load Failed",
      debugMessage: () => "Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."
    },
    IFRAME_REQUEST_TIMEOUT: {
      code: "APKT004",
      displayMessage: "Wallet Request Timeout",
      debugMessage: () => "The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."
    },
    UNVERIFIED_DOMAIN: {
      code: "APKT005",
      displayMessage: "Unverified Domain",
      debugMessage: () => "Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."
    },
    JWT_TOKEN_NOT_VALID: {
      code: "APKT006",
      displayMessage: "Session Expired",
      debugMessage: "Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."
    },
    INVALID_PROJECT_ID: {
      code: "APKT007",
      displayMessage: "Invalid Project ID",
      debugMessage: "The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."
    },
    PROJECT_ID_NOT_CONFIGURED: {
      code: "APKT008",
      displayMessage: "Project ID Missing",
      debugMessage: "No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."
    },
    SERVER_ERROR_APP_CONFIGURATION: {
      code: "APKT009",
      displayMessage: "Server Error",
      debugMessage: (errorMessage) => `Unable to fetch App Configuration. ${errorMessage}. Please check your network connection and try again shortly. Contact support if the issue persists.`
    },
    RATE_LIMITED_APP_CONFIGURATION: {
      code: "APKT010",
      displayMessage: "Rate Limited",
      debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
    }
  },
  ALERT_WARNINGS: {
    LOCAL_CONFIGURATION_IGNORED: {
      debugMessage: (warningMessage) => `[Reown Config Notice] ${warningMessage}`
    },
    INACTIVE_NAMESPACE_NOT_CONNECTED: {
      code: "APKTW001",
      displayMessage: "Inactive Namespace Not Connected",
      debugMessage: (namespace, errorMessage) => `An error occurred while connecting an inactive namespace ${namespace}: "${errorMessage}"`
    },
    INVALID_EMAIL: {
      code: "APKTW002",
      displayMessage: "Invalid Email Address",
      debugMessage: "Please enter a valid email address"
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
      return void 0;
    }
    const [symbol] = Object.entries(TokenUtil.TOKEN_ADDRESSES_BY_SYMBOL).find(([_2, addressesByChain]) => Object.values(addressesByChain).includes(tokenAddress)) ?? [];
    return symbol;
  }
};
var browser;
var hasRequiredBrowser;
function requireBrowser() {
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
  function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
      const hasToFilter = serialize.filter(function(k2) {
        return k2 !== "!stdSerializers.err";
      });
      return hasToFilter;
    } else if (serialize === true) {
      return Object.keys(serializers);
    }
    return false;
  }
  function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit2 = opts.browser.transmit;
    if (transmit2 && typeof transmit2.send !== "function") {
      throw Error("pino: transmit option must have a send function");
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
    const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
    if (typeof proto === "function") {
      proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    }
    if (opts.enabled === false) opts.level = "silent";
    const level = opts.level || "info";
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    Object.defineProperty(logger, "levelVal", {
      get: getLevelVal
    });
    Object.defineProperty(logger, "level", {
      get: getLevel,
      set: setLevel
    });
    const setOpts = {
      transmit: transmit2,
      serialize,
      asObject: opts.browser.asObject,
      levels,
      timestamp: getTimeFunction(opts)
    };
    logger.levels = pino.levels;
    logger.level = level;
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = child;
    if (transmit2) logger._logEvent = createLogEventShape();
    function getLevelVal() {
      return this.level === "silent" ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
      return this._level;
    }
    function setLevel(level2) {
      if (level2 !== "silent" && !this.levels.values[level2]) {
        throw Error("unknown level " + level2);
      }
      this._level = level2;
      set(setOpts, logger, "error", "log");
      set(setOpts, logger, "fatal", "error");
      set(setOpts, logger, "warn", "error");
      set(setOpts, logger, "info", "log");
      set(setOpts, logger, "debug", "log");
      set(setOpts, logger, "trace", "log");
    }
    function child(bindings, childOptions) {
      if (!bindings) {
        throw new Error("missing bindings for child Pino");
      }
      childOptions = childOptions || {};
      if (serialize && bindings.serializers) {
        childOptions.serializers = bindings.serializers;
      }
      const childOptionsSerializers = childOptions.serializers;
      if (serialize && childOptionsSerializers) {
        var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
        var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
        delete bindings.serializers;
        applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
      }
      function Child(parent) {
        this._childLevel = (parent._childLevel | 0) + 1;
        this.error = bind(parent, bindings, "error");
        this.fatal = bind(parent, bindings, "fatal");
        this.warn = bind(parent, bindings, "warn");
        this.info = bind(parent, bindings, "info");
        this.debug = bind(parent, bindings, "debug");
        this.trace = bind(parent, bindings, "trace");
        if (childSerializers) {
          this.serializers = childSerializers;
          this._serialize = childSerialize;
        }
        if (transmit2) {
          this._logEvent = createLogEventShape(
            [].concat(parent._logEvent.bindings, bindings)
          );
        }
      }
      Child.prototype = this;
      return new Child(this);
    }
    return logger;
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
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  };
  pino.stdSerializers = stdSerializers;
  pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
  function set(opts, logger, level, fallback2) {
    const proto = Object.getPrototypeOf(logger);
    logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback2] || noop;
    wrap(opts, logger, level);
  }
  function wrap(opts, logger, level) {
    if (!opts.transmit && logger[level] === noop) return;
    logger[level] = /* @__PURE__ */ (function(write) {
      return function LOG() {
        const ts2 = opts.timestamp();
        const args = new Array(arguments.length);
        const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
        for (var i2 = 0; i2 < args.length; i2++) args[i2] = arguments[i2];
        if (opts.serialize && !opts.asObject) {
          applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
        }
        if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
        else write.apply(proto, args);
        if (opts.transmit) {
          const transmitLevel = opts.transmit.level || logger.level;
          const transmitValue = pino.levels.values[transmitLevel];
          const methodValue = pino.levels.values[level];
          if (methodValue < transmitValue) return;
          transmit(this, {
            ts: ts2,
            methodLevel: level,
            methodValue,
            transmitValue: pino.levels.values[opts.transmit.level || logger.level],
            send: opts.transmit.send,
            val: logger.levelVal
          }, args);
        }
      };
    })(logger[level]);
  }
  function asObject(logger, level, args, ts2) {
    if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o2 = {};
    if (ts2) {
      o2.time = ts2;
    }
    o2.level = pino.levels.values[level];
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (msg !== null && typeof msg === "object") {
      while (lvl-- && typeof argsCloned[0] === "object") {
        Object.assign(o2, argsCloned.shift());
      }
      msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
    } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
    if (msg !== void 0) o2.msg = msg;
    return o2;
  }
  function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for (const i2 in args) {
      if (stdErrSerialize && args[i2] instanceof Error) {
        args[i2] = pino.stdSerializers.err(args[i2]);
      } else if (typeof args[i2] === "object" && !Array.isArray(args[i2])) {
        for (const k2 in args[i2]) {
          if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
            args[i2][k2] = serializers[k2](args[i2][k2]);
          }
        }
      }
    }
  }
  function bind(parent, bindings, level) {
    return function() {
      const args = new Array(1 + arguments.length);
      args[0] = bindings;
      for (var i2 = 1; i2 < args.length; i2++) {
        args[i2] = arguments[i2 - 1];
      }
      return parent[level].apply(this, args);
    };
  }
  function transmit(logger, opts, args) {
    const send = opts.send;
    const ts2 = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    applySerializers(
      args,
      logger._serialize || Object.keys(logger.serializers),
      logger.serializers,
      logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
    );
    logger._logEvent.ts = ts2;
    logger._logEvent.messages = args.filter(function(arg) {
      return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
  }
  function createLogEventShape(bindings) {
    return {
      ts: 0,
      messages: [],
      bindings: bindings || [],
      level: { label: "", value: 0 }
    };
  }
  function asErrValue(err) {
    const obj = {
      type: err.constructor.name,
      msg: err.message,
      stack: err.stack
    };
    for (const key in err) {
      if (obj[key] === void 0) {
        obj[key] = err[key];
      }
    }
    return obj;
  }
  function getTimeFunction(opts) {
    if (typeof opts.timestamp === "function") {
      return opts.timestamp;
    }
    if (opts.timestamp === false) {
      return nullTime;
    }
    return epochTime;
  }
  function mock() {
    return {};
  }
  function passthrough(a2) {
    return a2;
  }
  function noop() {
  }
  function nullTime() {
    return false;
  }
  function epochTime() {
    return Date.now();
  }
  function unixTime() {
    return Math.round(Date.now() / 1e3);
  }
  function isoTime() {
    return new Date(Date.now()).toISOString();
  }
  function pfGlobalThisOrFallback() {
    function defd(o2) {
      return typeof o2 !== "undefined" && o2;
    }
    try {
      if (typeof globalThis !== "undefined") return globalThis;
      Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          delete Object.prototype.globalThis;
          return this.globalThis = this;
        },
        configurable: true
      });
      return globalThis;
    } catch (e2) {
      return defd(self) || defd(window) || defd(this) || {};
    }
  }
  return browser;
}
var browserExports = requireBrowser();
const h$2 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
const c$3 = { level: "info" }, l$2 = 1e3 * 1024;
class O3 {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
}
let d$2 = class d3 {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t2 = new O3(e2);
    if (t2.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t2.size}`);
    for (; this.size + t2.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t2), this.tail = t2) : (this.head = t2, this.tail = t2), this.lengthInNodes++, this.sizeInBytes += t2.size;
  }
  shift() {
    if (!this.head) return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t2 = this.head;
    for (; t2 !== null; ) e2.push(t2.value), t2 = t2.next;
    return e2;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e2 = this.head;
    return { next: () => {
      if (!e2) return { done: true, value: null };
      const t2 = e2.value;
      return e2 = e2.next, { done: false, value: t2 };
    } };
  }
};
let L$1 = class L2 {
  constructor(e2, t2 = l$2) {
    this.level = e2 ?? "error", this.levelValue = browserExports.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t2, this.logs = new d$2(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t2) {
    t2 === browserExports.levels.values.error ? console.error(e2) : t2 === browserExports.levels.values.warn ? console.warn(e2) : t2 === browserExports.levels.values.debug ? console.debug(e2) : t2 === browserExports.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t2 = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t2 >= this.levelValue && this.forwardToConsole(e2, t2);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d$2(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t2 = this.getLogArray();
    return t2.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t2, { type: "application/json" });
  }
};
let m$1 = class m3 {
  constructor(e2, t2 = l$2) {
    this.baseChunkLogger = new L$1(e2, t2);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t2 = URL.createObjectURL(this.logsToBlob(e2)), o2 = document.createElement("a");
    o2.href = t2, o2.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o2), o2.click(), document.body.removeChild(o2), URL.revokeObjectURL(t2);
  }
};
let B$1 = class B2 {
  constructor(e2, t2 = l$2) {
    this.baseChunkLogger = new L$1(e2, t2);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x$1 = Object.defineProperty, S$2 = Object.defineProperties, _$1 = Object.getOwnPropertyDescriptors, p$2 = Object.getOwnPropertySymbols, T = Object.prototype.hasOwnProperty, z$1 = Object.prototype.propertyIsEnumerable, f$2 = (r2, e2, t2) => e2 in r2 ? x$1(r2, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : r2[e2] = t2, i$4 = (r2, e2) => {
  for (var t2 in e2 || (e2 = {})) T.call(e2, t2) && f$2(r2, t2, e2[t2]);
  if (p$2) for (var t2 of p$2(e2)) z$1.call(e2, t2) && f$2(r2, t2, e2[t2]);
  return r2;
}, g$1 = (r2, e2) => S$2(r2, _$1(e2));
function k$1(r2) {
  return g$1(i$4({}, r2), { level: (r2 == null ? void 0 : r2.level) || c$3.level });
}
function C$1(r2) {
  var e2, t2;
  const o2 = new m$1((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: h$2(g$1(i$4({}, r2.opts), { level: "trace", browser: g$1(i$4({}, (t2 = r2.opts) == null ? void 0 : t2.browser), { write: (a2) => o2.write(a2) }) })), chunkLoggerController: o2 };
}
function I$1(r2) {
  var e2;
  const t2 = new B$1((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: h$2(g$1(i$4({}, r2.opts), { level: "trace" }), t2), chunkLoggerController: t2 };
}
function A$1(r2) {
  return typeof r2.loggerOverride < "u" && typeof r2.loggerOverride != "string" ? { logger: r2.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C$1(r2) : I$1(r2);
}
const LoggerUtil = {
  createLogger(onError, level = "error") {
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
      onError(void 0, ...args);
    };
    return logger;
  }
};
const RPC_URL_HOST = "rpc.walletconnect.org";
function getBlockchainApiRpcUrl(caipNetworkId, projectId) {
  const url = new URL("https://rpc.walletconnect.org/v1/");
  url.searchParams.set("chainId", caipNetworkId);
  url.searchParams.set("projectId", projectId);
  return url.toString();
}
const WC_HTTP_RPC_SUPPORTED_CHAINS = [
  "near:mainnet",
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  "eip155:1101",
  "eip155:56",
  "eip155:42161",
  "eip155:7777777",
  "eip155:59144",
  "eip155:324",
  "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  "eip155:5000",
  "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
  "eip155:80084",
  "eip155:5003",
  "eip155:100",
  "eip155:8453",
  "eip155:42220",
  "eip155:1313161555",
  "eip155:17000",
  "eip155:1",
  "eip155:300",
  "eip155:1313161554",
  "eip155:1329",
  "eip155:84532",
  "eip155:421614",
  "eip155:11155111",
  "eip155:8217",
  "eip155:43114",
  "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
  "eip155:999999999",
  "eip155:11155420",
  "eip155:80002",
  "eip155:97",
  "eip155:43113",
  "eip155:137",
  "eip155:10",
  "eip155:1301",
  "eip155:80094",
  "eip155:80069",
  "eip155:560048",
  "eip155:31",
  "eip155:2818",
  "eip155:57054",
  "eip155:911867",
  "eip155:534351",
  "eip155:1112",
  "eip155:534352",
  "eip155:1111",
  "eip155:146",
  "eip155:130",
  "eip155:1284",
  "eip155:30",
  "eip155:2810",
  "bip122:000000000019d6689c085ae165831e93",
  "bip122:000000000933ea01ad0ee984209779ba"
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
    } catch (e2) {
      isReownUrl = false;
    }
    if (isReownUrl) {
      const url = new URL(rpcUrl);
      if (!url.searchParams.has("projectId")) {
        url.searchParams.set("projectId", projectId);
      }
      return url.toString();
    }
    return rpcUrl;
  },
  isCaipNetwork(network) {
    return "chainNamespace" in network && "caipNetworkId" in network;
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
    var _a2, _b2, _c2;
    const defaultRpcUrl = (_c2 = (_b2 = (_a2 = caipNetwork.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0];
    if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetworkId)) {
      return getBlockchainApiRpcUrl(caipNetworkId, projectId);
    }
    return defaultRpcUrl || "";
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
    var _a2, _b2, _c2, _d, _e2, _f2, _g;
    const chainNamespace = this.getChainNamespace(caipNetwork);
    const caipNetworkId = this.getCaipNetworkId(caipNetwork);
    const networkDefaultRpcUrl = (_c2 = (_b2 = (_a2 = caipNetwork.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0];
    const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId);
    const chainDefaultRpcUrl = ((_f2 = (_e2 = (_d = caipNetwork == null ? void 0 : caipNetwork.rpcUrls) == null ? void 0 : _d["chainDefault"]) == null ? void 0 : _e2.http) == null ? void 0 : _f2[0]) || networkDefaultRpcUrl;
    const customRpcUrlsOfNetwork = ((_g = customRpcUrls == null ? void 0 : customRpcUrls[caipNetworkId]) == null ? void 0 : _g.map((i2) => i2.url)) || [];
    const rpcUrls = [...customRpcUrlsOfNetwork, ...reownRpcUrl ? [reownRpcUrl] : []];
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
        imageUrl: customNetworkImageUrls == null ? void 0 : customNetworkImageUrls[caipNetwork.id]
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
    return caipNetworks.map((caipNetwork) => CaipNetworksUtil.extendCaipNetwork(caipNetwork, {
      customNetworkImageUrls,
      customRpcUrls,
      projectId
    }));
  },
  getViemTransport(caipNetwork, projectId, customRpcUrls) {
    var _a2, _b2, _c2;
    const transports = [];
    customRpcUrls == null ? void 0 : customRpcUrls.forEach((rpcUrl) => {
      transports.push(http(rpcUrl.url, rpcUrl.config));
    });
    if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
      transports.push(http(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), {
        /*
         * The Blockchain API uses "Content-Type: text/plain" to avoid OPTIONS preflight requests
         * It will only work for viem >= 2.17.7
         */
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      }));
    }
    (_c2 = (_b2 = (_a2 = caipNetwork == null ? void 0 : caipNetwork.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2.forEach((rpcUrl) => {
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
      id: caipNetworkId.split(":")[1],
      caipNetworkId,
      name: ConstantsUtil$3.UNSUPPORTED_NETWORK_NAME,
      chainNamespace: caipNetworkId.split(":")[0],
      nativeCurrency: {
        name: "",
        decimals: 0,
        symbol: ""
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
    var _a2;
    const caipNetworkIdFromStorage = StorageUtil.getActiveCaipNetworkId();
    const caipNetworks = ChainController.getAllRequestedCaipNetworks();
    const availableNamespaces = Array.from(((_a2 = ChainController.state.chains) == null ? void 0 : _a2.keys()) || []);
    const namespace = caipNetworkIdFromStorage == null ? void 0 : caipNetworkIdFromStorage.split(":")[0];
    const isNamespaceAvailable = namespace ? availableNamespaces.includes(namespace) : false;
    const caipNetwork = caipNetworks == null ? void 0 : caipNetworks.find((cn2) => cn2.caipNetworkId === caipNetworkIdFromStorage);
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
    return caipNetworks == null ? void 0 : caipNetworks[0];
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
    HeaderText: 120
  },
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
    const connectors = OptionsController.state.enableEIP6963 ? ConnectorController.state.connectors : [];
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = connectors.map((connector) => {
      var _a2;
      return (_a2 = connector.info) == null ? void 0 : _a2.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => {
      if ((wallet == null ? void 0 : wallet.rdns) && allRDNSs.includes(String(wallet.rdns))) {
        return false;
      }
      if (!(wallet == null ? void 0 : wallet.rdns)) {
        const hasMatchingConnectorName = connectors.some((connector) => connector.name === wallet.name);
        if (hasMatchingConnectorName) {
          return false;
        }
      }
      return true;
    });
    return filtered;
  },
  filterOutDuplicatesByIds(wallets) {
    const connectors = ConnectorController.state.connectors.filter((connector) => connector.type === "ANNOUNCED" || connector.type === "INJECTED");
    const recent = StorageUtil.getRecentWallets();
    const connectorIds = connectors.map((connector) => connector.explorerId);
    const recentIds = recent.map((wallet) => wallet.id);
    const allIds = connectorIds.concat(recentIds);
    const filtered = wallets.filter((wallet) => !allIds.includes(wallet == null ? void 0 : wallet.id));
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
    const installedWalletRdnsMap = connectors.filter((connector) => connector.type === "ANNOUNCED").reduce((rdnsMap, connector) => {
      var _a2;
      if (!((_a2 = connector.info) == null ? void 0 : _a2.rdns)) {
        return rdnsMap;
      }
      rdnsMap[connector.info.rdns] = true;
      return rdnsMap;
    }, {});
    const walletsWithInstallationStatus = wallets.map((wallet) => ({
      ...wallet,
      installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[wallet.rdns ?? ""])
    }));
    const sortedWallets = walletsWithInstallationStatus.sort((walletA, walletB) => {
      const installationComparison = Number(walletB.installed) - Number(walletA.installed);
      if (installationComparison !== 0) {
        return installationComparison;
      }
      if (featuredWalletIds == null ? void 0 : featuredWalletIds.length) {
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
    var _a2;
    const connectMethodOrder = (_features == null ? void 0 : _features.connectMethodsOrder) || ((_a2 = OptionsController.state.features) == null ? void 0 : _a2.connectMethodsOrder);
    const connectors = _connectors || ConnectorController.state.connectors;
    if (connectMethodOrder) {
      return connectMethodOrder;
    }
    const { injected, announced } = ConnectorUtil.getConnectorsByType(connectors, ApiController.state.recommended, ApiController.state.featured);
    const shownInjected = injected.filter(ConnectorUtil.showConnector);
    const shownAnnounced = announced.filter(ConnectorUtil.showConnector);
    if (shownInjected.length || shownAnnounced.length) {
      return ["wallet", "email", "social"];
    }
    return ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER;
  },
  isExcluded(wallet) {
    const isRDNSExcluded = Boolean(wallet.rdns) && ApiController.state.excludedWallets.some((w2) => w2.rdns === wallet.rdns);
    const isNameExcluded = Boolean(wallet.name) && ApiController.state.excludedWallets.some((w2) => HelpersUtil.isLowerCaseMatch(w2.name, wallet.name));
    return isRDNSExcluded || isNameExcluded;
  },
  markWalletsWithDisplayIndex(wallets) {
    return wallets.map((w2, index) => ({ ...w2, display_index: index }));
  }
};
const ConnectorUtil = {
  getConnectorsByType(connectors, recommended, featured) {
    const { customWallets } = OptionsController.state;
    const recent = StorageUtil.getRecentWallets();
    const filteredRecommended = WalletUtil.filterOutDuplicateWallets(recommended);
    const filteredFeatured = WalletUtil.filterOutDuplicateWallets(featured);
    const multiChain = connectors.filter((connector) => connector.type === "MULTI_CHAIN");
    const announced = connectors.filter((connector) => connector.type === "ANNOUNCED");
    const injected = connectors.filter((connector) => connector.type === "INJECTED");
    const external = connectors.filter((connector) => connector.type === "EXTERNAL");
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
    var _a2;
    const rdns = (_a2 = connector.info) == null ? void 0 : _a2.rdns;
    const isRDNSExcluded = Boolean(rdns) && ApiController.state.excludedWallets.some((wallet) => Boolean(wallet.rdns) && wallet.rdns === rdns);
    const isNameExcluded = Boolean(connector.name) && ApiController.state.excludedWallets.some((wallet) => HelpersUtil.isLowerCaseMatch(wallet.name, connector.name));
    if (connector.type === "INJECTED") {
      const isBrowserWallet = connector.name === "Browser Wallet";
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
    if ((connector.type === "ANNOUNCED" || connector.type === "EXTERNAL") && (isRDNSExcluded || isNameExcluded)) {
      return false;
    }
    return true;
  },
  getIsConnectedWithWC() {
    const chains = Array.from(ChainController.state.chains.values());
    const isConnectedWithWC = chains.some((chain) => {
      const connectorId = ConnectorController.getConnectorId(chain.namespace);
      return connectorId === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
    });
    return isConnectedWithWC;
  },
  getConnectorTypeOrder({ recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = ((_a2) => (_a2 = OptionsController.state.features) == null ? void 0 : _a2.connectorTypeOrder)() ?? [] }) {
    const allConnectors = [
      { type: "walletConnect", isEnabled: true },
      { type: "recent", isEnabled: recent.length > 0 },
      { type: "injected", isEnabled: [...injected, ...announced, ...multiChain].length > 0 },
      { type: "featured", isEnabled: featured.length > 0 },
      { type: "custom", isEnabled: custom && custom.length > 0 },
      { type: "external", isEnabled: external.length > 0 },
      { type: "recommended", isEnabled: recommended.length > 0 }
    ];
    const enabledConnectors = allConnectors.filter((option) => option.isEnabled);
    const enabledConnectorTypes = new Set(enabledConnectors.map((option) => option.type));
    const prioritizedConnectors = overriddenConnectors.filter((type) => enabledConnectorTypes.has(type)).map((type) => ({ type, isEnabled: true }));
    const remainingConnectors = enabledConnectors.filter(({ type: enabledConnectorType }) => {
      const hasPrioritizedConnector = prioritizedConnectors.some(({ type: prioritizedConnectorType }) => prioritizedConnectorType === enabledConnectorType);
      return !hasPrioritizedConnector;
    });
    return Array.from(new Set([...prioritizedConnectors, ...remainingConnectors].map(({ type }) => type)));
  },
  sortConnectorsByExplorerWallet(connectors) {
    return [...connectors].sort((a2, b2) => {
      if (a2.explorerWallet && b2.explorerWallet) {
        return (a2.explorerWallet.order ?? 0) - (b2.explorerWallet.order ?? 0);
      }
      if (a2.explorerWallet) {
        return -1;
      }
      if (b2.explorerWallet) {
        return 1;
      }
      return 0;
    });
  },
  getAuthName({ email, socialUsername, socialProvider }) {
    if (socialUsername) {
      if (socialProvider && socialProvider === "discord" && socialUsername.endsWith("0")) {
        return socialUsername.slice(0, -1);
      }
      return socialUsername;
    }
    return email.length > 30 ? `${email.slice(0, -3)}...` : email;
  },
  async fetchProviderData(connector) {
    var _a2, _b2;
    try {
      if (connector.name === "Browser Wallet" && !CoreHelperUtil.isMobile()) {
        return { accounts: [], chainId: void 0 };
      }
      if (connector.id === ConstantsUtil$3.CONNECTOR_ID.AUTH) {
        return { accounts: [], chainId: void 0 };
      }
      const [accounts, chainId] = await Promise.all([
        (_a2 = connector.provider) == null ? void 0 : _a2.request({ method: "eth_accounts" }),
        (_b2 = connector.provider) == null ? void 0 : _b2.request({ method: "eth_chainId" }).then((hexChainId) => Number(hexChainId))
      ]);
      return { accounts, chainId };
    } catch (err) {
      console.warn(`Failed to fetch provider data for ${connector.name}`, err);
      return { accounts: [], chainId: void 0 };
    }
  },
  getFilteredCustomWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = ConnectorController.state.connectors.map((connector) => {
      var _a2;
      return (_a2 = connector.info) == null ? void 0 : _a2.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  },
  hasWalletConnector(wallet) {
    return ConnectorController.state.connectors.some((connector) => connector.id === wallet.id || connector.name === wallet.name);
  },
  isWalletCompatibleWithCurrentChain(wallet) {
    const currentNamespace = ChainController.state.activeChain;
    if (currentNamespace && wallet.chains) {
      return wallet.chains.some((c2) => {
        const chainNamespace = c2.split(":")[0];
        return currentNamespace === chainNamespace;
      });
    }
    return true;
  },
  getFilteredRecentWallets() {
    const recentWallets = StorageUtil.getRecentWallets();
    const filteredRecentWallets = recentWallets.filter((wallet) => !WalletUtil.isExcluded(wallet)).filter((wallet) => !this.hasWalletConnector(wallet)).filter((wallet) => this.isWalletCompatibleWithCurrentChain(wallet));
    return filteredRecentWallets;
  },
  getCappedRecommendedWallets(wallets) {
    const { connectors } = ConnectorController.state;
    const { customWallets, featuredWalletIds } = OptionsController.state;
    const wcConnector = connectors.find((c2) => c2.id === "walletConnect");
    const injectedConnectors = connectors.filter((c2) => c2.type === "INJECTED" || c2.type === "ANNOUNCED" || c2.type === "MULTI_CHAIN");
    if (!wcConnector && !injectedConnectors.length && !(customWallets == null ? void 0 : customWallets.length)) {
      return [];
    }
    const isEmailEnabled = OptionsUtil.isEmailEnabled();
    const isSocialsEnabled = OptionsUtil.isSocialsEnabled();
    const injectedWallets = injectedConnectors.filter((i2) => i2.name !== "Browser Wallet");
    const featuredWalletAmount = (featuredWalletIds == null ? void 0 : featuredWalletIds.length) || 0;
    const customWalletAmount = (customWallets == null ? void 0 : customWallets.length) || 0;
    const injectedWalletAmount = injectedWallets.length || 0;
    const emailWalletAmount = isEmailEnabled ? 1 : 0;
    const socialWalletAmount = isSocialsEnabled ? 1 : 0;
    const walletsDisplayed = featuredWalletAmount + customWalletAmount + injectedWalletAmount + emailWalletAmount + socialWalletAmount;
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
const t$1 = globalThis, e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$3 = /* @__PURE__ */ new WeakMap();
let n$2 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$2 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$3.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$3.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new n$2("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$3 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$2(o2, t2, s$2);
}, S$1 = (s2, o2) => {
  if (e$2) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$1.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$2, defineProperty: e$1, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$1, getOwnPropertySymbols: o$2, getPrototypeOf: n$1 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i2 = t2;
  switch (s2) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$1 = (t2, s2) => !i$2(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata ?? (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let y$1 = class y2 extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = Symbol(), h3 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== h3 && e$1(this.prototype, t2, h3);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h3 = e2 == null ? void 0 : e2.call(this);
      r2 == null ? void 0 : r2.call(this, s3), this.requestUpdate(t2, h3, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$1(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$1(t3), ...o$2(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a2;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t2.hostConnected) == null ? void 0 : _a2.call(t2));
  }
  removeController(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a2;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostDisconnected) == null ? void 0 : _a3.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$ET(t2, s2) {
    var _a2;
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const h3 = (void 0 !== ((_a2 = i2.converter) == null ? void 0 : _a2.toAttribute) ? i2.converter : u$1).toAttribute(s2, i2.type);
      this._$Em = t2, null == h3 ? this.removeAttribute(e2) : this.setAttribute(e2, h3), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a2, _b2;
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), h3 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a2 = t3.converter) == null ? void 0 : _a2.fromAttribute) ? t3.converter : u$1;
      this._$Em = e2;
      const r2 = h3.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(e2)) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2, e2 = false, h3) {
    var _a2;
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h3 = this[t2]), i2 ?? (i2 = r2.getPropertyOptions(t2)), !((i2.hasChanged ?? f$1)(h3, s2) || i2.useDefault && i2.reflect && h3 === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(t2)) && !this.hasAttribute(r2._$Eu(t2, i2)))) return;
      this.C(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i2, reflect: e2, wrapped: h3 }, r2) {
    i2 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h3 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) {
        const { wrapped: t4 } = i2, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
        var _a3;
        return (_a3 = t3.hostUpdate) == null ? void 0 : _a3.call(t3);
      }), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
      var _a3;
      return (_a3 = t3.hostUpdated) == null ? void 0 : _a3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t3) => this._$ET(t3, this[t3]))), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null ? void 0 : p$1({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ?? (a$1.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis, i$1 = (t2) => t2, s$1 = t.trustedTypes, e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h2 = "$lit$", o$1 = `lit$${Math.random().toFixed(9).slice(2)}$`, n2 = "?" + o$1, r = `<${n2}>`, l = document, c = () => l.createComment(""), a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u = Array.isArray, d4 = (t2) => u(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), f2 = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m4 = />/g, p = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y3 = /^(?:script|style|textarea|title)$/i, x = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), b = x(1), w = x(2), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P2 = l.createTreeWalker(l, 129);
function V2(t2, i2) {
  if (!u(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i2) : i2;
}
const N2 = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let n3, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let a2, u2, d5 = -1, f3 = 0;
    for (; f3 < s3.length && (c2.lastIndex = f3, u2 = c2.exec(s3), null !== u2); ) f3 = c2.lastIndex, c2 === v ? "!--" === u2[1] ? c2 = _ : void 0 !== u2[1] ? c2 = m4 : void 0 !== u2[2] ? (y3.test(u2[2]) && (n3 = RegExp("</" + u2[2], "g")), c2 = p) : void 0 !== u2[3] && (c2 = p) : c2 === p ? ">" === u2[0] ? (c2 = n3 ?? v, d5 = -1) : void 0 === u2[1] ? d5 = -2 : (d5 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p : '"' === u2[3] ? $ : g) : c2 === $ || c2 === g ? c2 = p : c2 === _ || c2 === m4 ? c2 = v : (c2 = p, n3 = void 0);
    const x2 = c2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v ? s3 + r : d5 >= 0 ? (e2.push(a2), s3.slice(0, d5) + h2 + s3.slice(d5) + o$1 + x2) : s3 + o$1 + (-2 === d5 ? i3 : x2);
  }
  return [V2(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), e2];
};
class S2 {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d5 = this.parts, [f3, v2] = N2(t2, i2);
    if (this.el = S2.createElement(f3, e2), P2.currentNode = this.el.content, 2 === i2 || 3 === i2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P2.nextNode()) && d5.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h2)) {
          const i3 = v2[a2++], s2 = r2.getAttribute(t3).split(o$1), e3 = /([.?@])?(.*)/.exec(i3);
          d5.push({ type: 1, index: l2, name: e3[2], strings: s2, ctor: "." === e3[1] ? I2 : "?" === e3[1] ? L3 : "@" === e3[1] ? z : H }), r2.removeAttribute(t3);
        } else t3.startsWith(o$1) && (d5.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y3.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$1), i3 = t3.length - 1;
          if (i3 > 0) {
            r2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++) r2.append(t3[s2], c()), P2.nextNode(), d5.push({ type: 2, index: ++l2 });
            r2.append(t3[i3], c());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n2) d5.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$1, t3 + 1)); ) d5.push({ type: 7, index: l2 }), t3 += o$1.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function M2(t2, i2, s2 = t2, e2) {
  var _a2, _b2;
  if (i2 === E) return i2;
  let h3 = void 0 !== e2 ? (_a2 = s2._$Co) == null ? void 0 : _a2[e2] : s2._$Cl;
  const o2 = a(i2) ? void 0 : i2._$litDirective$;
  return (h3 == null ? void 0 : h3.constructor) !== o2 && ((_b2 = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b2.call(h3, false), void 0 === o2 ? h3 = void 0 : (h3 = new o2(t2), h3._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ?? (s2._$Co = []))[e2] = h3 : s2._$Cl = h3), void 0 !== h3 && (i2 = M2(t2, h3._$AS(t2, i2.values), h3, e2)), i2;
}
class R2 {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? l).importNode(i2, true);
    P2.currentNode = e2;
    let h3 = P2.nextNode(), o2 = 0, n3 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i3;
        2 === r2.type ? i3 = new k(h3, h3.nextSibling, this, t2) : 1 === r2.type ? i3 = new r2.ctor(h3, r2.name, r2.strings, this, t2) : 6 === r2.type && (i3 = new Z(h3, this, t2)), this._$AV.push(i3), r2 = s2[++n3];
      }
      o2 !== (r2 == null ? void 0 : r2.index) && (h3 = P2.nextNode(), o2++);
    }
    return P2.currentNode = l, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class k {
  get _$AU() {
    var _a2;
    return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
  }
  constructor(t2, i2, s2, e2) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = (e2 == null ? void 0 : e2.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = M2(this, t2, i2), a(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d4(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a2;
    const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S2.createElement(V2(s2.h, s2.h[0]), this.options)), s2);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e2) this._$AH.p(i2);
    else {
      const t3 = new R2(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = C.get(t2.strings);
    return void 0 === i2 && C.set(t2.strings, i2 = new S2(t2)), i2;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h3 of t2) e2 === i2.length ? i2.push(s2 = new k(this.O(c()), this.O(c()), this, this.options)) : s2 = i2[e2], s2._$AI(h3), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$1(t2).nextSibling;
      i$1(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    var _a2;
    void 0 === this._$AM && (this._$Cv = t2, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t2));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h3 = this.strings;
    let o2 = false;
    if (void 0 === h3) t2 = M2(this, t2, i2, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h3[0], n3 = 0; n3 < h3.length - 1; n3++) r2 = M2(this, e3[s2 + n3], i2, n3), r2 === E && (r2 = this._$AH[n3]), o2 || (o2 = !a(r2) || r2 !== this._$AH[n3]), r2 === A ? t2 = A : t2 !== A && (t2 += (r2 ?? "") + h3[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class I2 extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L3 extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
}
class z extends H {
  constructor(t2, i2, s2, e2, h3) {
    super(t2, i2, s2, e2, h3), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = M2(this, t2, i2, 0) ?? A) === E) return;
    const s2 = this._$AH, e2 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h3 = t2 !== A && (s2 === A || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h3 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a2;
    "function" == typeof this._$AH ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M2(this, t2);
  }
}
const B3 = t.litHtmlPolyfillSupport;
B3 == null ? void 0 : B3(S2, k), (t.litHtmlVersions ?? (t.litHtmlVersions = [])).push("3.3.3");
const D = (t2, i2, s2) => {
  const e2 = (s2 == null ? void 0 : s2.renderBefore) ?? i2;
  let h3 = e2._$litPart$;
  if (void 0 === h3) {
    const t3 = (s2 == null ? void 0 : s2.renderBefore) ?? null;
    e2._$litPart$ = h3 = new k(i2.insertBefore(c(), t3), t3, void 0, s2 ?? {});
  }
  return h3._$AI(t2), h3;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a2;
    const t2 = super.createRenderRoot();
    return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return E;
  }
}
i._$litElement$ = true, i["finalized"] = true, (_b = s.litElementHydrateSupport) == null ? void 0 : _b.call(s, { LitElement: i });
const o = s.litElementPolyfillSupport;
o == null ? void 0 : o({ LitElement: i });
(s.litElementVersions ?? (s.litElementVersions = [])).push("4.2.2");
const colors = {
  black: "#202020",
  white: "#FFFFFF",
  white010: "rgba(255, 255, 255, 0.1)",
  accent010: "rgba(9, 136, 240, 0.1)",
  accent020: "rgba(9, 136, 240, 0.2)",
  accent030: "rgba(9, 136, 240, 0.3)",
  accent040: "rgba(9, 136, 240, 0.4)",
  accent050: "rgba(9, 136, 240, 0.5)",
  accent060: "rgba(9, 136, 240, 0.6)",
  accent070: "rgba(9, 136, 240, 0.7)",
  accent080: "rgba(9, 136, 240, 0.8)",
  accent090: "rgba(9, 136, 240, 0.9)",
  accent100: "rgba(9, 136, 240, 1.0)",
  accentSecondary010: "rgba(199, 185, 148, 0.1)",
  accentSecondary020: "rgba(199, 185, 148, 0.2)",
  accentSecondary030: "rgba(199, 185, 148, 0.3)",
  accentSecondary040: "rgba(199, 185, 148, 0.4)",
  accentSecondary050: "rgba(199, 185, 148, 0.5)",
  accentSecondary060: "rgba(199, 185, 148, 0.6)",
  accentSecondary070: "rgba(199, 185, 148, 0.7)",
  accentSecondary080: "rgba(199, 185, 148, 0.8)",
  accentSecondary090: "rgba(199, 185, 148, 0.9)",
  accentSecondary100: "rgba(199, 185, 148, 1.0)",
  productWalletKit: "#FFB800",
  productAppKit: "#FF573B",
  productCloud: "#0988F0",
  productDocumentation: "#008847",
  neutrals050: "#F6F6F6",
  neutrals100: "#F3F3F3",
  neutrals200: "#E9E9E9",
  neutrals300: "#D0D0D0",
  neutrals400: "#BBB",
  neutrals500: "#9A9A9A",
  neutrals600: "#6C6C6C",
  neutrals700: "#4F4F4F",
  neutrals800: "#363636",
  neutrals900: "#2A2A2A",
  neutrals1000: "#252525",
  semanticSuccess010: "rgba(48, 164, 107, 0.1)",
  semanticSuccess020: "rgba(48, 164, 107, 0.2)",
  semanticSuccess030: "rgba(48, 164, 107, 0.3)",
  semanticSuccess040: "rgba(48, 164, 107, 0.4)",
  semanticSuccess050: "rgba(48, 164, 107, 0.5)",
  semanticSuccess060: "rgba(48, 164, 107, 0.6)",
  semanticSuccess070: "rgba(48, 164, 107, 0.7)",
  semanticSuccess080: "rgba(48, 164, 107, 0.8)",
  semanticSuccess090: "rgba(48, 164, 107, 0.9)",
  semanticSuccess100: "rgba(48, 164, 107, 1.0)",
  semanticError010: "rgba(223, 74, 52, 0.1)",
  semanticError020: "rgba(223, 74, 52, 0.2)",
  semanticError030: "rgba(223, 74, 52, 0.3)",
  semanticError040: "rgba(223, 74, 52, 0.4)",
  semanticError050: "rgba(223, 74, 52, 0.5)",
  semanticError060: "rgba(223, 74, 52, 0.6)",
  semanticError070: "rgba(223, 74, 52, 0.7)",
  semanticError080: "rgba(223, 74, 52, 0.8)",
  semanticError090: "rgba(223, 74, 52, 0.9)",
  semanticError100: "rgba(223, 74, 52, 1.0)",
  semanticWarning010: "rgba(243, 161, 63, 0.1)",
  semanticWarning020: "rgba(243, 161, 63, 0.2)",
  semanticWarning030: "rgba(243, 161, 63, 0.3)",
  semanticWarning040: "rgba(243, 161, 63, 0.4)",
  semanticWarning050: "rgba(243, 161, 63, 0.5)",
  semanticWarning060: "rgba(243, 161, 63, 0.6)",
  semanticWarning070: "rgba(243, 161, 63, 0.7)",
  semanticWarning080: "rgba(243, 161, 63, 0.8)",
  semanticWarning090: "rgba(243, 161, 63, 0.9)",
  semanticWarning100: "rgba(243, 161, 63, 1.0)"
};
const tokens = {
  core: {
    backgroundAccentPrimary: "#0988F0",
    backgroundAccentCertified: "#C7B994",
    backgroundWalletKit: "#FFB800",
    backgroundAppKit: "#FF573B",
    backgroundCloud: "#0988F0",
    backgroundDocumentation: "#008847",
    backgroundSuccess: "rgba(48, 164, 107, 0.20)",
    backgroundError: "rgba(223, 74, 52, 0.20)",
    backgroundWarning: "rgba(243, 161, 63, 0.20)",
    textAccentPrimary: "#0988F0",
    textAccentCertified: "#C7B994",
    textWalletKit: "#FFB800",
    textAppKit: "#FF573B",
    textCloud: "#0988F0",
    textDocumentation: "#008847",
    textSuccess: "#30A46B",
    textError: "#DF4A34",
    textWarning: "#F3A13F",
    borderAccentPrimary: "#0988F0",
    borderSecondary: "#C7B994",
    borderSuccess: "#30A46B",
    borderError: "#DF4A34",
    borderWarning: "#F3A13F",
    foregroundAccent010: "rgba(9, 136, 240, 0.1)",
    foregroundAccent020: "rgba(9, 136, 240, 0.2)",
    foregroundAccent040: "rgba(9, 136, 240, 0.4)",
    foregroundAccent060: "rgba(9, 136, 240, 0.6)",
    foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
    foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
    foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
    iconAccentPrimary: "#0988F0",
    iconAccentCertified: "#C7B994",
    iconSuccess: "#30A46B",
    iconError: "#DF4A34",
    iconWarning: "#F3A13F",
    glass010: "rgba(255, 255, 255, 0.1)",
    zIndex: "9999"
  },
  dark: {
    overlay: "rgba(0, 0, 0, 0.50)",
    backgroundPrimary: "#202020",
    backgroundInvert: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9A9A9A",
    textTertiary: "#BBBBBB",
    textInvert: "#202020",
    borderPrimary: "#2A2A2A",
    borderPrimaryDark: "#363636",
    borderSecondary: "#4F4F4F",
    foregroundPrimary: "#252525",
    foregroundSecondary: "#2A2A2A",
    foregroundTertiary: "#363636",
    iconDefault: "#9A9A9A",
    iconInverse: "#FFFFFF"
  },
  light: {
    overlay: "rgba(230 , 230, 230, 0.5)",
    backgroundPrimary: "#FFFFFF",
    borderPrimaryDark: "#E9E9E9",
    backgroundInvert: "#202020",
    textPrimary: "#202020",
    textSecondary: "#9A9A9A",
    textTertiary: "#6C6C6C",
    textInvert: "#FFFFFF",
    borderPrimary: "#E9E9E9",
    borderSecondary: "#D0D0D0",
    foregroundPrimary: "#F3F3F3",
    foregroundSecondary: "#E9E9E9",
    foregroundTertiary: "#D0D0D0",
    iconDefault: "#9A9A9A",
    iconInverse: "#202020"
  }
};
const borderRadius = {
  "1": "4px",
  "2": "8px",
  "10": "10px",
  "3": "12px",
  "4": "16px",
  "6": "24px",
  "5": "20px",
  "8": "32px",
  "16": "64px",
  "20": "80px",
  "32": "128px",
  "64": "256px",
  "128": "512px",
  round: "9999px"
};
const spacing = {
  "0": "0px",
  "01": "2px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "36px",
  "10": "40px",
  "12": "48px",
  "14": "56px",
  "16": "64px",
  "20": "80px",
  "32": "128px",
  "64": "256px"
};
const fontFamily = {
  regular: "KHTeka",
  mono: "KHTekaMono"
};
const fontWeight = {
  regular: "400",
  medium: "500"
};
const textSize = {
  h1: "50px",
  h2: "44px",
  h3: "38px",
  h4: "32px",
  h5: "26px",
  h6: "20px",
  large: "16px",
  medium: "14px",
  small: "12px"
};
const typography = {
  "h1-regular-mono": { lineHeight: "50px", letterSpacing: "-3px" },
  "h1-regular": { lineHeight: "50px", letterSpacing: "-1px" },
  "h1-medium": { lineHeight: "50px", letterSpacing: "-0.84px" },
  "h2-regular-mono": { lineHeight: "44px", letterSpacing: "-2.64px" },
  "h2-regular": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h2-medium": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h3-regular-mono": { lineHeight: "38px", letterSpacing: "-2.28px" },
  "h3-regular": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h3-medium": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h4-regular-mono": { lineHeight: "32px", letterSpacing: "-1.92px" },
  "h4-regular": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h4-medium": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h5-regular-mono": { lineHeight: "26px", letterSpacing: "-1.56px" },
  "h5-regular": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h5-medium": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h6-regular-mono": { lineHeight: "20px", letterSpacing: "-1.2px" },
  "h6-regular": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "h6-medium": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "lg-regular-mono": { lineHeight: "16px", letterSpacing: "-0.96px" },
  "lg-regular": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "lg-medium": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "md-regular-mono": { lineHeight: "14px", letterSpacing: "-0.84px" },
  "md-regular": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "md-medium": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "sm-regular-mono": { lineHeight: "12px", letterSpacing: "-0.72px" },
  "sm-regular": { lineHeight: "14px", letterSpacing: "-0.12px" },
  "sm-medium": { lineHeight: "14px", letterSpacing: "-0.12px" }
};
const easings = {
  "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
  "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
  "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
  "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
  "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
  "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
};
const durations = {
  xl: "400ms",
  lg: "200ms",
  md: "125ms",
  sm: "75ms"
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
const PREFIX_VAR = "--apkt";
const ThemeHelperUtil = {
  createCSSVariables(styles2) {
    const cssVariables = {};
    const cssVariablesVarPrefix = {};
    function createVars(_styles, parent, currentVar = "") {
      for (const [styleKey, styleValue] of Object.entries(_styles)) {
        const variable = currentVar ? `${currentVar}-${styleKey}` : styleKey;
        if (styleValue && typeof styleValue === "object" && Object.keys(styleValue).length) {
          parent[styleKey] = {};
          createVars(styleValue, parent[styleKey], variable);
        } else if (typeof styleValue === "string") {
          parent[styleKey] = `${PREFIX_VAR}-${variable}`;
        }
      }
    }
    function addVarsPrefix(_styles, parent) {
      for (const [key, value] of Object.entries(_styles)) {
        if (value && typeof value === "object") {
          parent[key] = {};
          addVarsPrefix(value, parent[key]);
        } else if (typeof value === "string") {
          parent[key] = `var(${value})`;
        }
      }
    }
    createVars(styles2, cssVariables);
    addVarsPrefix(cssVariables, cssVariablesVarPrefix);
    return { cssVariables, cssVariablesVarPrefix };
  },
  assignCSSVariables(vars2, styles2) {
    const assignedCSSVariables = {};
    function assignVars(_vars, _styles, variable) {
      for (const [varKey, varValue] of Object.entries(_vars)) {
        const nextVariable = variable ? `${variable}-${varKey}` : varKey;
        const styleValues = _styles[varKey];
        if (varValue && typeof varValue === "object") {
          assignVars(varValue, styleValues, nextVariable);
        } else if (typeof styleValues === "string") {
          assignedCSSVariables[`${PREFIX_VAR}-${nextVariable}`] = styleValues;
        }
      }
    }
    assignVars(vars2, styles2);
    return assignedCSSVariables;
  },
  createRootStyles(theme, themeVariables) {
    const styles$1 = {
      ...styles,
      tokens: { ...styles.tokens, theme: theme === "light" ? tokens.light : tokens.dark }
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
    const rootStyles = Object.entries(finalVariables).map(([key, style]) => `${key}:${style.replace("/[:;{}</>]/g", "")};`).join("");
    return `:root {${rootStyles}}`;
  },
  generateW3MVariables(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const variables = {};
    variables["--w3m-font-family"] = themeVariables["--w3m-font-family"] || "KHTeka";
    variables["--w3m-accent"] = themeVariables["--w3m-accent"] || "#0988F0";
    variables["--w3m-color-mix"] = themeVariables["--w3m-color-mix"] || "#000";
    variables["--w3m-color-mix-strength"] = `${themeVariables["--w3m-color-mix-strength"] || 0}%`;
    variables["--w3m-font-size-master"] = themeVariables["--w3m-font-size-master"] || "10px";
    variables["--w3m-border-radius-master"] = themeVariables["--w3m-border-radius-master"] || "4px";
    return variables;
  },
  generateW3MOverrides(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const overrides = {};
    if (themeVariables["--w3m-accent"]) {
      const accentColor = themeVariables["--w3m-accent"];
      overrides["--apkt-tokens-core-iconAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-borderAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-textAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-backgroundAccentPrimary"] = accentColor;
    }
    if (themeVariables["--w3m-font-family"]) {
      overrides["--apkt-fontFamily-regular"] = themeVariables["--w3m-font-family"];
    }
    if (themeVariables["--w3m-z-index"]) {
      overrides["--apkt-tokens-core-zIndex"] = `${themeVariables["--w3m-z-index"]}`;
    }
    return overrides;
  },
  generateScaledVariables(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const scaledVars = {};
    if (themeVariables["--w3m-font-size-master"]) {
      const masterSize = parseFloat(themeVariables["--w3m-font-size-master"].replace("px", ""));
      scaledVars["--apkt-textSize-h1"] = `${Number(masterSize) * 5}px`;
      scaledVars["--apkt-textSize-h2"] = `${Number(masterSize) * 4.4}px`;
      scaledVars["--apkt-textSize-h3"] = `${Number(masterSize) * 3.8}px`;
      scaledVars["--apkt-textSize-h4"] = `${Number(masterSize) * 3.2}px`;
      scaledVars["--apkt-textSize-h5"] = `${Number(masterSize) * 2.6}px`;
      scaledVars["--apkt-textSize-h6"] = `${Number(masterSize) * 2}px`;
      scaledVars["--apkt-textSize-large"] = `${Number(masterSize) * 1.6}px`;
      scaledVars["--apkt-textSize-medium"] = `${Number(masterSize) * 1.4}px`;
      scaledVars["--apkt-textSize-small"] = `${Number(masterSize) * 1.2}px`;
    }
    if (themeVariables["--w3m-border-radius-master"]) {
      const masterRadius = parseFloat(themeVariables["--w3m-border-radius-master"].replace("px", ""));
      scaledVars["--apkt-borderRadius-1"] = `${Number(masterRadius)}px`;
      scaledVars["--apkt-borderRadius-2"] = `${Number(masterRadius) * 2}px`;
      scaledVars["--apkt-borderRadius-3"] = `${Number(masterRadius) * 3}px`;
      scaledVars["--apkt-borderRadius-4"] = `${Number(masterRadius) * 4}px`;
      scaledVars["--apkt-borderRadius-5"] = `${Number(masterRadius) * 5}px`;
      scaledVars["--apkt-borderRadius-6"] = `${Number(masterRadius) * 6}px`;
      scaledVars["--apkt-borderRadius-8"] = `${Number(masterRadius) * 8}px`;
      scaledVars["--apkt-borderRadius-16"] = `${Number(masterRadius) * 16}px`;
      scaledVars["--apkt-borderRadius-20"] = `${Number(masterRadius) * 20}px`;
      scaledVars["--apkt-borderRadius-32"] = `${Number(masterRadius) * 32}px`;
      scaledVars["--apkt-borderRadius-64"] = `${Number(masterRadius) * 64}px`;
      scaledVars["--apkt-borderRadius-128"] = `${Number(masterRadius) * 128}px`;
    }
    return scaledVars;
  },
  generateColorMixCSS(themeVariables, allVariables) {
    if (!(themeVariables == null ? void 0 : themeVariables["--w3m-color-mix"]) || !themeVariables["--w3m-color-mix-strength"]) {
      return "";
    }
    const colorMix = themeVariables["--w3m-color-mix"];
    const strength = themeVariables["--w3m-color-mix-strength"];
    if (!strength || strength === 0) {
      return "";
    }
    const colorVariables = Object.keys(allVariables || {}).filter((key) => {
      const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon");
      const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
      return isColorToken && !isDimensional;
    });
    if (colorVariables.length === 0) {
      return "";
    }
    const colorMixVariables = colorVariables.map((key) => {
      const originalValue = (allVariables == null ? void 0 : allVariables[key]) || "";
      if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) {
        return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue});`;
      }
      return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}));`;
    }).join("");
    return ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${colorMixVariables}
      }
    }`;
  },
  generateBaseVariables(assignedCSSVariables) {
    const baseVariables = {};
    const themeBackgroundPrimary = assignedCSSVariables["--apkt-tokens-theme-backgroundPrimary"];
    if (themeBackgroundPrimary) {
      baseVariables["--apkt-tokens-theme-backgroundPrimary-base"] = themeBackgroundPrimary;
    }
    const coreBackgroundAccentPrimary = assignedCSSVariables["--apkt-tokens-core-backgroundAccentPrimary"];
    if (coreBackgroundAccentPrimary) {
      baseVariables["--apkt-tokens-core-backgroundAccentPrimary-base"] = coreBackgroundAccentPrimary;
    }
    return baseVariables;
  },
  applyColorMixToVariables(themeVariables, allVariables) {
    const colorMixVariables = {};
    if (allVariables == null ? void 0 : allVariables["--apkt-tokens-theme-backgroundPrimary"]) {
      colorMixVariables["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)";
    }
    if (allVariables == null ? void 0 : allVariables["--apkt-tokens-core-backgroundAccentPrimary"]) {
      colorMixVariables["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)";
    }
    if (!(themeVariables == null ? void 0 : themeVariables["--w3m-color-mix"]) || !themeVariables["--w3m-color-mix-strength"]) {
      return colorMixVariables;
    }
    const colorMix = themeVariables["--w3m-color-mix"];
    const strength = themeVariables["--w3m-color-mix-strength"];
    if (!strength || strength === 0) {
      return colorMixVariables;
    }
    const colorVariables = Object.keys(allVariables || {}).filter((key) => {
      const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon") || key.includes("-tokens-theme-overlay");
      const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
      return isColorToken && !isDimensional;
    });
    if (colorVariables.length === 0) {
      return colorMixVariables;
    }
    colorVariables.forEach((key) => {
      const originalValue = (allVariables == null ? void 0 : allVariables[key]) || "";
      if (key.endsWith("-base")) {
        return;
      }
      if (key === "--apkt-tokens-theme-backgroundPrimary" || key === "--apkt-tokens-core-backgroundAccentPrimary") {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base))`;
      } else if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue})`;
      } else {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}))`;
      }
    });
    return colorMixVariables;
  }
};
const { cssVariablesVarPrefix: vars } = ThemeHelperUtil.createCSSVariables(styles);
function css(strings, ...values) {
  return i$3(strings, ...values.map((value) => typeof value === "function" ? r$2(value(vars)) : r$2(value)));
}
let apktTag = void 0;
let themeTag = void 0;
let darkModeTag = void 0;
let lightModeTag = void 0;
let currentThemeVariables = void 0;
const fonts = {
  "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
  "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
  "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
  "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
  "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
  "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
};
function createAppKitTheme(themeVariables, theme = "dark") {
  if (apktTag) {
    document.head.removeChild(apktTag);
  }
  apktTag = document.createElement("style");
  apktTag.textContent = ThemeHelperUtil.createRootStyles(theme, themeVariables);
  document.head.appendChild(apktTag);
}
function initializeTheming(themeVariables, themeMode = "dark") {
  currentThemeVariables = themeVariables;
  themeTag = document.createElement("style");
  darkModeTag = document.createElement("style");
  lightModeTag = document.createElement("style");
  themeTag.textContent = createRootStyles(themeVariables).core.cssText;
  darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
  lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
  document.head.appendChild(themeTag);
  document.head.appendChild(darkModeTag);
  document.head.appendChild(lightModeTag);
  createAppKitTheme(themeVariables, themeMode);
  setColorTheme(themeMode);
  if (!(themeVariables == null ? void 0 : themeVariables["--w3m-font-family"])) {
    for (const [key, url] of Object.entries(fonts)) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = url;
      link.as = "font";
      link.type = key.includes("woff2") ? "font/woff2" : "font/woff";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  }
  setColorTheme(themeMode);
}
function setColorTheme(themeMode = "dark") {
  if (darkModeTag && lightModeTag && apktTag) {
    if (themeMode === "light") {
      createAppKitTheme(currentThemeVariables, themeMode);
      darkModeTag.removeAttribute("media");
      lightModeTag.media = "enabled";
    } else {
      createAppKitTheme(currentThemeVariables, themeMode);
      lightModeTag.removeAttribute("media");
      darkModeTag.media = "enabled";
    }
  }
}
function setThemeVariables(_themeVariables) {
  var _a2, _b2, _c2;
  currentThemeVariables = _themeVariables;
  if (themeTag && darkModeTag && lightModeTag) {
    themeTag.textContent = createRootStyles(_themeVariables).core.cssText;
    darkModeTag.textContent = createRootStyles(_themeVariables).dark.cssText;
    lightModeTag.textContent = createRootStyles(_themeVariables).light.cssText;
    if (_themeVariables == null ? void 0 : _themeVariables["--w3m-font-family"]) {
      const fontFamily2 = _themeVariables["--w3m-font-family"];
      themeTag.textContent = (_a2 = themeTag.textContent) == null ? void 0 : _a2.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
      darkModeTag.textContent = (_b2 = darkModeTag.textContent) == null ? void 0 : _b2.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
      lightModeTag.textContent = (_c2 = lightModeTag.textContent) == null ? void 0 : _c2.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
    }
  }
  if (apktTag) {
    const currentMode = (lightModeTag == null ? void 0 : lightModeTag.media) === "enabled" ? "light" : "dark";
    createAppKitTheme(_themeVariables, currentMode);
  }
}
function createRootStyles(_themeVariables) {
  const hasCustomFontFamily = Boolean(_themeVariables == null ? void 0 : _themeVariables["--w3m-font-family"]);
  return {
    core: i$3`
      ${hasCustomFontFamily ? i$3`` : i$3`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts["KHTeka-300-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${r$2(fonts["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTeka-400-woff"])}) format('woff');
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
    dark: i$3`
      :root {
      }
    `,
    light: i$3`
      :root {
      }
    `
  };
}
const resetStyles = i$3`
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
const elementStyles = i$3`
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
    const string = value.startsWith("0x") ? value.slice(2) : value;
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
    const chainId = await provider.request({ method: "eth_chainId" });
    return Number(chainId);
  },
  async getAddress(provider) {
    const [address] = await provider.request({ method: "eth_accounts" });
    return address;
  },
  async getAddresses(provider) {
    const addresses = await provider.request({ method: "eth_accounts" });
    return addresses;
  },
  async addEthereumChain(provider, caipNetwork) {
    var _a2, _b2;
    const rpcUrls = ((_a2 = caipNetwork.rpcUrls["chainDefault"]) == null ? void 0 : _a2.http) || [];
    await provider.request({
      method: "wallet_addEthereumChain",
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
          blockExplorerUrls: [(_b2 = caipNetwork.blockExplorers) == null ? void 0 : _b2.default.url],
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
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...chain
  };
}
const solana = defineChain({
  id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  name: "Solana",
  network: "solana-mainnet",
  nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } },
  testnet: false,
  chainNamespace: "solana",
  caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"
});
const solanaDevnet = defineChain({
  id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  name: "Solana Devnet",
  network: "solana-devnet",
  nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } },
  testnet: true,
  chainNamespace: "solana",
  caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"
});
defineChain({
  id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
  name: "Solana Testnet",
  network: "solana-testnet",
  nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } },
  testnet: true,
  chainNamespace: "solana",
  caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
});
defineChain({
  id: "000000000019d6689c085ae165831e93",
  caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
  chainNamespace: "bip122",
  name: "Bitcoin",
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 8
  },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  }
});
defineChain({
  id: "000000000933ea01ad0ee984209779ba",
  caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
  chainNamespace: "bip122",
  name: "Bitcoin Testnet",
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 8
  },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  testnet: true
});
defineChain({
  id: "00000008819873e925422c1ff0f99f7c",
  caipNetworkId: "bip122:00000008819873e925422c1ff0f99f7c",
  chainNamespace: "bip122",
  name: "Bitcoin Signet",
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 8
  },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  testnet: true
});
const DEFAULT_METHODS = {
  solana: [
    "solana_signMessage",
    "solana_signTransaction",
    "solana_requestAccounts",
    "solana_getAccounts",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction"
  ],
  eip155: [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    // EIP-5792
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    // EIP-7715
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    //EIP-7811
    "wallet_getAssets"
  ],
  bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"]
};
const WcHelpersUtil = {
  RPC_ERROR_CODE: {
    USER_REJECTED: 5e3,
    USER_REJECTED_METHODS: 5002
  },
  getMethodsByChainNamespace(chainNamespace) {
    return DEFAULT_METHODS[chainNamespace] || [];
  },
  createDefaultNamespace(chainNamespace) {
    return {
      methods: this.getMethodsByChainNamespace(chainNamespace),
      events: ["accountsChanged", "chainChanged"],
      chains: [],
      rpcMap: {}
    };
  },
  applyNamespaceOverrides(baseNamespaces, overrides) {
    if (!overrides) {
      return { ...baseNamespaces };
    }
    const result = { ...baseNamespaces };
    const namespacesToOverride = /* @__PURE__ */ new Set();
    if (overrides.methods) {
      Object.keys(overrides.methods).forEach((ns2) => namespacesToOverride.add(ns2));
    }
    if (overrides.chains) {
      Object.keys(overrides.chains).forEach((ns2) => namespacesToOverride.add(ns2));
    }
    if (overrides.events) {
      Object.keys(overrides.events).forEach((ns2) => namespacesToOverride.add(ns2));
    }
    if (overrides.rpcMap) {
      Object.keys(overrides.rpcMap).forEach((chainId) => {
        const [ns2] = chainId.split(":");
        if (ns2) {
          namespacesToOverride.add(ns2);
        }
      });
    }
    namespacesToOverride.forEach((ns2) => {
      if (!result[ns2]) {
        result[ns2] = this.createDefaultNamespace(ns2);
      }
    });
    if (overrides.methods) {
      Object.entries(overrides.methods).forEach(([ns2, methods]) => {
        if (result[ns2]) {
          result[ns2].methods = methods;
        }
      });
    }
    if (overrides.chains) {
      Object.entries(overrides.chains).forEach(([ns2, chains]) => {
        if (result[ns2]) {
          result[ns2].chains = chains;
        }
      });
    }
    if (overrides.events) {
      Object.entries(overrides.events).forEach(([ns2, events]) => {
        if (result[ns2]) {
          result[ns2].events = events;
        }
      });
    }
    if (overrides.rpcMap) {
      const processedNamespaces = /* @__PURE__ */ new Set();
      Object.entries(overrides.rpcMap).forEach(([chainId, rpcUrl]) => {
        const [ns2, id] = chainId.split(":");
        if (!ns2 || !id || !result[ns2]) {
          return;
        }
        if (!result[ns2].rpcMap) {
          result[ns2].rpcMap = {};
        }
        if (!processedNamespaces.has(ns2)) {
          result[ns2].rpcMap = {};
          processedNamespaces.add(ns2);
        }
        result[ns2].rpcMap[id] = rpcUrl;
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
      const namespace = acc[chainNamespace];
      namespace.chains.push(caipNetworkId);
      switch (caipNetworkId) {
        case solana.caipNetworkId:
          namespace.chains.push(solana.deprecatedCaipNetworkId);
          break;
        case solanaDevnet.caipNetworkId:
          namespace.chains.push(solanaDevnet.deprecatedCaipNetworkId);
          break;
      }
      if ((namespace == null ? void 0 : namespace.rpcMap) && rpcUrl) {
        namespace.rpcMap[id] = rpcUrl;
      }
      return acc;
    }, {});
    return this.applyNamespaceOverrides(defaultNamespaces, configOverride);
  },
  resolveReownName: async (name) => {
    var _a2;
    const wcNameAddress = await EnsController.resolveName(name);
    const networkNameAddresses = Object.values(wcNameAddress == null ? void 0 : wcNameAddress.addresses) || [];
    return ((_a2 = networkNameAddresses[0]) == null ? void 0 : _a2.address) || false;
  },
  getChainsFromNamespaces(namespaces = {}) {
    return Object.values(namespaces).flatMap((namespace) => {
      const chains = namespace.chains || [];
      const accountsChains = namespace.accounts.map((account) => {
        const [chainNamespace, chainId] = account.split(":");
        return `${chainNamespace}:${chainId}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...chains, ...accountsChains]));
    });
  },
  isSessionEventData(data) {
    return typeof data === "object" && data !== null && "id" in data && "topic" in data && "params" in data && typeof data.params === "object" && data.params !== null && "chainId" in data.params && "event" in data.params && typeof data.params.event === "object" && data.params.event !== null;
  },
  isUserRejectedRequestError(error) {
    try {
      if (typeof error === "object" && error !== null) {
        const objErr = error;
        const hasCode = typeof objErr["code"] === "number";
        const hasUserRejectedMethods = hasCode && objErr["code"] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        const hasUserRejected = hasCode && objErr["code"] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED;
        return hasUserRejectedMethods || hasUserRejected;
      }
      return false;
    } catch {
      return false;
    }
  },
  isOriginAllowed(currentOrigin, allowedPatterns, defaultAllowedOrigins) {
    for (const pattern of [...allowedPatterns, ...defaultAllowedOrigins]) {
      if (pattern.includes("*")) {
        const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
        const regexString = `^${escapedPattern.replace(/\\\*/gu, ".*")}$`;
        const regex = new RegExp(regexString, "u");
        if (regex.test(currentOrigin)) {
          return true;
        }
      } else {
        try {
          if (new URL(pattern).origin === currentOrigin) {
            return true;
          }
        } catch (e2) {
          if (pattern === currentOrigin) {
            return true;
          }
        }
      }
    }
    return false;
  },
  listenWcProvider({ universalProvider, namespace, onConnect, onDisconnect, onAccountsChanged, onChainChanged, onDisplayUri }) {
    if (onConnect) {
      universalProvider.on("connect", () => {
        const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, namespace);
        onConnect(accounts);
      });
    }
    if (onDisconnect) {
      universalProvider.on("disconnect", () => {
        onDisconnect();
      });
    }
    if (onAccountsChanged) {
      universalProvider.on("accountsChanged", (accounts) => {
        var _a2, _b2, _c2, _d, _e2;
        try {
          const allAccounts = ((_c2 = (_b2 = (_a2 = universalProvider.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[namespace]) == null ? void 0 : _c2.accounts) || [];
          const defaultChain = (_e2 = (_d = universalProvider.rpcProviders) == null ? void 0 : _d[namespace]) == null ? void 0 : _e2.getDefaultChain();
          const parsedAccounts = accounts.map((account) => {
            const caipAccount = allAccounts.find((acc) => acc.includes(`${namespace}:${defaultChain}:${account}`));
            if (!caipAccount) {
              return void 0;
            }
            const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(caipAccount);
            return {
              address: account,
              chainId,
              chainNamespace
            };
          }).filter((account) => account !== void 0);
          if (parsedAccounts.length > 0) {
            onAccountsChanged(parsedAccounts);
          }
        } catch (error) {
          console.warn("Failed to parse accounts for namespace on accountsChanged event", namespace, accounts, error);
        }
      });
    }
    if (onChainChanged) {
      universalProvider.on("chainChanged", (chainId) => {
        onChainChanged(chainId);
      });
    }
    if (onDisplayUri) {
      universalProvider.on("display_uri", (uri) => {
        onDisplayUri(uri);
      });
    }
  },
  getWalletConnectAccounts(universalProvider, namespace) {
    var _a2, _b2, _c2, _d;
    const accountsAdded = /* @__PURE__ */ new Set();
    const accounts = (_d = (_c2 = (_b2 = (_a2 = universalProvider == null ? void 0 : universalProvider.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[namespace]) == null ? void 0 : _c2.accounts) == null ? void 0 : _d.map((account) => ParseUtil.parseCaipAddress(account)).filter(({ address }) => {
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
    await Promise.all(connectors.filter((c2) => {
      const { hasDisconnected, hasConnected } = HelpersUtil.getConnectorStorageInfo(c2.id, this.namespace);
      return !hasDisconnected && hasConnected;
    }).map(async (connector) => {
      if (connector.id === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
        const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, this.namespace);
        const caipNetwork = caipNetworks.find((n3) => {
          var _a2, _b2;
          return n3.chainNamespace === this.namespace && n3.id.toString() === ((_b2 = (_a2 = accounts[0]) == null ? void 0 : _a2.chainId) == null ? void 0 : _b2.toString());
        });
        if (accounts.length > 0) {
          onConnection({
            connectorId: connector.id,
            accounts: accounts.map((account) => ({ address: account.address })),
            caipNetwork
          });
        }
      } else {
        const { accounts, chainId } = await ConnectorUtil.fetchProviderData(connector);
        if (accounts.length > 0 && chainId) {
          const caipNetwork = caipNetworks.find((n3) => n3.chainNamespace === this.namespace && n3.id.toString() === chainId.toString());
          onConnection({
            connectorId: connector.id,
            accounts: accounts.map((address) => ({ address })),
            caipNetwork
          });
          if (connector.provider && connector.id !== ConstantsUtil$3.CONNECTOR_ID.AUTH && connector.id !== ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
            onListenProvider(connector.id, connector.provider);
          }
        }
      }
    }));
  }
  async syncSolanaConnections({ connectors, caipNetwork, universalProvider, onConnection, onListenProvider }) {
    await Promise.all(connectors.filter((c2) => {
      const { hasDisconnected, hasConnected } = HelpersUtil.getConnectorStorageInfo(c2.id, this.namespace);
      return !hasDisconnected && hasConnected;
    }).map(async (connector) => {
      if (connector.id === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
        const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, this.namespace);
        if (accounts.length > 0) {
          onConnection({
            connectorId: connector.id,
            accounts: accounts.map((account) => ({ address: account.address })),
            caipNetwork
          });
        }
      } else {
        const address = await connector.connect({
          chainId: caipNetwork == null ? void 0 : caipNetwork.id
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
    await Promise.all(connectors.filter((c2) => {
      const { hasDisconnected, hasConnected } = HelpersUtil.getConnectorStorageInfo(c2.id, this.namespace);
      return !hasDisconnected && hasConnected;
    }).map(async (connector) => {
      var _a2, _b2, _c2, _d, _e2, _f2;
      if (connector.id === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT) {
        const accounts2 = WcHelpersUtil.getWalletConnectAccounts(universalProvider, this.namespace);
        if (accounts2.length > 0) {
          onConnection({
            connectorId: connector.id,
            accounts: accounts2.map((account) => ({ address: account.address })),
            caipNetwork
          });
        }
        return;
      }
      const address = await connector.connect();
      const addresses = await connector.getAccountAddresses();
      let accounts = addresses == null ? void 0 : addresses.map((a2) => CoreHelperUtil.createAccount(ConstantsUtil$3.CHAIN.BITCOIN, a2.address, a2.purpose || "payment", a2.publicKey, a2.path));
      if (accounts && accounts.length > 1) {
        accounts = [
          {
            namespace: ConstantsUtil$3.CHAIN.BITCOIN,
            publicKey: ((_a2 = accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.PAYMENT]) == null ? void 0 : _a2.publicKey) ?? "",
            path: ((_b2 = accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.PAYMENT]) == null ? void 0 : _b2.path) ?? "",
            address: ((_c2 = accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.PAYMENT]) == null ? void 0 : _c2.address) ?? "",
            type: "payment"
          },
          {
            namespace: ConstantsUtil$3.CHAIN.BITCOIN,
            publicKey: ((_d = accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.ORDINAL]) == null ? void 0 : _d.publicKey) ?? "",
            path: ((_e2 = accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.ORDINAL]) == null ? void 0 : _e2.path) ?? "",
            address: ((_f2 = accounts[BitcoinConstantsUtil.ACCOUNT_INDEXES.ORDINAL]) == null ? void 0 : _f2.address) ?? "",
            type: "ordinal"
          }
        ];
      }
      const chain = connector.chains.find((c2) => c2.id === (caipNetwork == null ? void 0 : caipNetwork.id)) || connector.chains[0];
      if (!chain) {
        throw new Error("The connector does not support any of the requested chains");
      }
      if (address) {
        onListenProvider(connector.id, connector.provider);
        onConnection({
          connectorId: connector.id,
          accounts: accounts.map((a2) => ({
            address: a2.address,
            type: a2.type,
            publicKey: a2.publicKey,
            path: a2.path
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
      const connection = connections.find((c2) => HelpersUtil.isLowerCaseMatch(c2.connectorId, connectorId));
      if (!connection) {
        return null;
      }
      const connector = connectors.find((c2) => HelpersUtil.isLowerCaseMatch(c2.id, connection.connectorId));
      const account = address ? connection.accounts.find((a2) => HelpersUtil.isLowerCaseMatch(a2.address, address)) : connection.accounts[0];
      return { ...connection, account, connector };
    }
    const validConnection = connections.find((c2) => c2.accounts.length > 0 && connectors.some((conn) => HelpersUtil.isLowerCaseMatch(conn.id, c2.connectorId)));
    if (validConnection) {
      const [account] = validConnection.accounts;
      const connector = connectors.find((c2) => HelpersUtil.isLowerCaseMatch(c2.id, validConnection.connectorId));
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
  ERROR_CODE_DEFAULT: 5e3,
  ERROR_INVALID_CHAIN_ID: 32603,
  DEFAULT_ALLOWED_ANCESTORS: [
    "http://localhost:*",
    "https://localhost:*",
    "http://127.0.0.1:*",
    "https://127.0.0.1:*",
    "https://*.pages.dev",
    "https://*.vercel.app",
    "https://*.ngrok-free.app",
    "https://secure-mobile.walletconnect.com",
    "https://secure-mobile.walletconnect.org"
  ]
};
class WalletConnectConnector {
  constructor({ provider, namespace }) {
    this.id = ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
    this.name = PresetsUtil.ConnectorNamesMap[ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT];
    this.type = "WALLET_CONNECT";
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
    const chains = this.chains.map((network) => network.caipNetworkId);
    return SIWXUtil.universalProviderAuthenticate({
      universalProvider: this.provider,
      chains,
      methods: OPTIONAL_METHODS
    });
  }
}
const OPTIONAL_METHODS = [
  "eth_accounts",
  "eth_requestAccounts",
  "eth_sendRawTransaction",
  "eth_sign",
  "eth_signTransaction",
  "eth_signTypedData",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "eth_sendTransaction",
  "personal_sign",
  "wallet_switchEthereumChain",
  "wallet_addEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode",
  // EIP-5792
  "wallet_getCallsStatus",
  "wallet_sendCalls",
  "wallet_getCapabilities",
  // EIP-7715
  "wallet_grantPermissions",
  "wallet_revokePermissions",
  //EIP-7811
  "wallet_getAssets"
];
const IGNORED_CONNECTOR_IDS_FOR_LISTENER = [
  ConstantsUtil$3.CONNECTOR_ID.AUTH,
  ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT
];
class AdapterBlueprint {
  /**
   * Creates an instance of AdapterBlueprint.
   * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
   */
  constructor(params) {
    this.availableConnectors = [];
    this.availableConnections = [];
    this.providerHandlers = {};
    this.eventListeners = /* @__PURE__ */ new Map();
    this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
    this.getConnectorId = (namespace) => ConnectorController.getConnectorId(namespace);
    if (params) {
      this.construct(params);
    }
    if (params == null ? void 0 : params.namespace) {
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
    const caipNetwork = this.getCaipNetworks().filter((n3) => n3.chainNamespace === this.namespace).find((n3) => n3.id.toString() === (chainId == null ? void 0 : chainId.toString()));
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
      type: "AUTH",
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
    const connectorsAdded = /* @__PURE__ */ new Set();
    this.availableConnectors = [...connectors, ...this.availableConnectors].filter((connector) => {
      if (connectorsAdded.has(connector.id)) {
        return false;
      }
      connectorsAdded.add(connector.id);
      return true;
    });
    this.emit("connectors", this.availableConnectors);
  }
  /**
   * Adds connections to the available connections list
   * @param {...Connection} connections - The connections to add
   */
  addConnection(...connections) {
    const connectionsAdded = /* @__PURE__ */ new Set();
    this.availableConnections = [...connections, ...this.availableConnections].filter((connection) => {
      if (connectionsAdded.has(connection.connectorId.toLowerCase())) {
        return false;
      }
      connectionsAdded.add(connection.connectorId.toLowerCase());
      return true;
    });
    this.emit("connections", this.availableConnections);
  }
  /**
   * Deletes a connection from the available connections list
   * @param {string} connectorId - The connector ID of the connection to delete
   */
  deleteConnection(connectorId) {
    this.availableConnections = this.availableConnections.filter((c2) => !HelpersUtil.isLowerCaseMatch(c2.connectorId, connectorId));
    this.emit("connections", this.availableConnections);
  }
  /**
   * Clears all connections from the available connections list
   * @param {boolean} emit - Whether to emit the connections event
   */
  clearConnections(emit = false) {
    this.availableConnections = [];
    if (emit) {
      this.emit("connections", this.availableConnections);
    }
  }
  setStatus(status, chainNamespace) {
    ChainController.setAccountProp("status", status, chainNamespace);
  }
  /**
   * Adds an event listener for a specific event.
   * @template T
   * @param {T} eventName - The name of the event
   * @param {EventCallback<T>} callback - The callback function to be called when the event is emitted
   */
  on(eventName, callback) {
    var _a2;
    if (!this.eventListeners.has(eventName)) {
      this.eventListeners.set(eventName, /* @__PURE__ */ new Set());
    }
    (_a2 = this.eventListeners.get(eventName)) == null ? void 0 : _a2.add(callback);
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
    this.eventListeners.forEach((listeners) => {
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
      listeners.forEach((callback) => callback(data));
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
    } catch (err) {
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
    const provider = "provider" in params.provider ? params.provider.provider : params.provider;
    if (providerType === "WALLET_CONNECT") {
      provider.setDefaultChain(caipNetwork.caipNetworkId);
      return;
    }
    if (provider && providerType === "AUTH") {
      const authProvider = provider;
      const preferredAccountType = getPreferredAccountType(caipNetwork.chainNamespace);
      await authProvider.switchNetwork({ chainId: caipNetwork.caipNetworkId });
      const user = await authProvider.getUser({
        chainId: caipNetwork.caipNetworkId,
        preferredAccountType
      });
      this.emit("switchNetwork", user);
    }
  }
  getWalletConnectConnector() {
    const connector = this.connectors.find((c2) => c2 instanceof WalletConnectConnector);
    if (!connector) {
      throw new Error("WalletConnectConnector not found");
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
      const caipNetwork = this.getCaipNetworks().filter((n3) => n3.chainNamespace === this.namespace).find((n3) => n3.id.toString() === (chainId == null ? void 0 : chainId.toString()));
      const connector = this.connectors.find((c2) => c2.id === connectorId);
      if (address) {
        this.emit("accountChanged", {
          address,
          chainId,
          connector
        });
        this.addConnection({
          connectorId,
          accounts: accounts.map((_account) => {
            const { address: address2 } = CoreHelperUtil.getAccount(_account);
            return { address: address2 };
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
    var _a2, _b2;
    if (accounts.length > 0) {
      const { address } = CoreHelperUtil.getAccount(accounts[0]);
      const connection = (_a2 = this.connectionManager) == null ? void 0 : _a2.getConnection({
        connectorId,
        connections: this.connections,
        connectors: this.connectors
      });
      if (address && HelpersUtil.isLowerCaseMatch(this.getConnectorId(ConstantsUtil$3.CHAIN.EVM), connectorId)) {
        this.emit("accountChanged", {
          address,
          chainId: (_b2 = connection == null ? void 0 : connection.caipNetwork) == null ? void 0 : _b2.id,
          connector: connection == null ? void 0 : connection.connector
        });
      }
      this.addConnection({
        connectorId,
        accounts: accounts.map((_account) => {
          const { address: address2 } = CoreHelperUtil.getAccount(_account);
          return { address: address2 };
        }),
        caipNetwork: connection == null ? void 0 : connection.caipNetwork
      });
    } else if (disconnectIfNoAccounts) {
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
      this.emit("disconnect");
    }
  }
  /**
   * Handles chain changed event for a specific connector.
   * @param {string} chainId - The ID of the chain that changed
   * @param {string} connectorId - The ID of the connector
   */
  onChainChanged(chainId, connectorId) {
    var _a2;
    const formattedChainId = typeof chainId === "string" && chainId.startsWith("0x") ? EthersHelpersUtil.hexStringToNumber(chainId).toString() : chainId.toString();
    const connection = (_a2 = this.connectionManager) == null ? void 0 : _a2.getConnection({
      connectorId,
      connections: this.connections,
      connectors: this.connectors
    });
    const caipNetwork = this.getCaipNetworks().filter((n3) => n3.chainNamespace === this.namespace).find((n3) => n3.id.toString() === formattedChainId);
    if (connection) {
      this.addConnection({
        connectorId,
        accounts: connection.accounts,
        caipNetwork
      });
    }
    if (HelpersUtil.isLowerCaseMatch(this.getConnectorId(ConstantsUtil$3.CHAIN.EVM), connectorId)) {
      this.emit("switchNetwork", { chainId: formattedChainId });
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
      provider.on("disconnect", disconnectHandler);
      provider.on("accountsChanged", accountsChangedHandler);
      provider.on("chainChanged", chainChangedHandler);
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
      provider.removeListener("disconnect", disconnect);
      provider.removeListener("accountsChanged", accountsChanged);
      provider.removeListener("chainChanged", chainChanged);
      this.providerHandlers[connectorId] = null;
    }
  }
  /**
   * Emits the first available connection.
   */
  emitFirstAvailableConnection() {
    var _a2, _b2;
    const connection = (_a2 = this.connectionManager) == null ? void 0 : _a2.getConnection({
      connections: this.connections,
      connectors: this.connectors
    });
    if (connection) {
      const [account] = connection.accounts;
      this.emit("accountChanged", {
        address: account == null ? void 0 : account.address,
        chainId: (_b2 = connection.caipNetwork) == null ? void 0 : _b2.id,
        connector: connection.connector
      });
    }
  }
}
class UniversalAdapter extends AdapterBlueprint {
  async setUniversalProvider(universalProvider) {
    if (!this.namespace) {
      throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
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
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: Number(params.chainId),
      provider: this.provider,
      address: ""
    });
  }
  async disconnect() {
    try {
      const connector = this.getWalletConnectConnector();
      await connector.disconnect();
      this.emit("disconnect");
    } catch (error) {
      console.warn("UniversalAdapter:disconnect - error", error);
    }
    return { connections: [] };
  }
  syncConnections() {
    return Promise.resolve();
  }
  async getAccounts({ namespace }) {
    var _a2, _b2, _c2, _d;
    const provider = this.provider;
    const addresses = ((_d = (_c2 = (_b2 = (_a2 = provider == null ? void 0 : provider.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[namespace]) == null ? void 0 : _c2.accounts) == null ? void 0 : _d.map((account) => {
      const [, , address] = account.split(":");
      return address;
    }).filter((address, index, self2) => self2.indexOf(address) === index)) || [];
    return Promise.resolve({
      accounts: addresses.map((address) => CoreHelperUtil.createAccount(namespace, address, namespace === "bip122" ? "payment" : "eoa"))
    });
  }
  async syncConnectors() {
    return Promise.resolve();
  }
  async getBalance(params) {
    var _a2, _b2, _c2, _d, _e2;
    const isBalanceSupported = params.caipNetwork && ConstantsUtil$2.BALANCE_SUPPORTED_CHAINS.includes((_a2 = params.caipNetwork) == null ? void 0 : _a2.chainNamespace);
    if (!isBalanceSupported || ((_b2 = params.caipNetwork) == null ? void 0 : _b2.testnet)) {
      return {
        balance: "0.00",
        symbol: ((_c2 = params.caipNetwork) == null ? void 0 : _c2.nativeCurrency.symbol) || ""
      };
    }
    const accountData = ChainController.getAccountData();
    if ((accountData == null ? void 0 : accountData.balanceLoading) && params.chainId === ((_d = ChainController.state.activeCaipNetwork) == null ? void 0 : _d.id)) {
      return {
        balance: (accountData == null ? void 0 : accountData.balance) || "0.00",
        symbol: (accountData == null ? void 0 : accountData.balanceSymbol) || ""
      };
    }
    const balances = await ChainController.fetchTokenBalance();
    const balance = balances.find((b2) => {
      var _a3, _b3;
      return b2.chainId === `${(_a3 = params.caipNetwork) == null ? void 0 : _a3.chainNamespace}:${params.chainId}` && b2.symbol === ((_b3 = params.caipNetwork) == null ? void 0 : _b3.nativeCurrency.symbol);
    });
    return {
      balance: (balance == null ? void 0 : balance.quantity.numeric) || "0.00",
      symbol: (balance == null ? void 0 : balance.symbol) || ((_e2 = params.caipNetwork) == null ? void 0 : _e2.nativeCurrency.symbol) || ""
    };
  }
  async signMessage(params) {
    var _a2, _b2, _c2;
    const { provider, message, address } = params;
    if (!provider) {
      throw new Error("UniversalAdapter:signMessage - provider is undefined");
    }
    let signature = "";
    if (((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) === ConstantsUtil$3.CHAIN.SOLANA) {
      const response = await provider.request({
        method: "solana_signMessage",
        params: {
          message: bs58.encode(new TextEncoder().encode(message)),
          pubkey: address
        }
      }, (_b2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId);
      signature = response.signature;
    } else {
      signature = await provider.request({
        method: "personal_sign",
        params: [message, address]
      }, (_c2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId);
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
      hash: ""
    });
  }
  walletGetAssets(_params) {
    return Promise.resolve({});
  }
  async writeContract() {
    return Promise.resolve({
      hash: ""
    });
  }
  emitFirstAvailableConnection() {
    return void 0;
  }
  parseUnits() {
    return 0n;
  }
  formatUnits() {
    return "0";
  }
  async getCapabilities() {
    return Promise.resolve({});
  }
  async grantPermissions() {
    return Promise.resolve({});
  }
  async revokePermissions() {
    return Promise.resolve("0x");
  }
  async syncConnection() {
    return Promise.resolve({
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: 1,
      provider: this.provider,
      address: ""
    });
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async switchNetwork(params) {
    var _a2, _b2, _c2, _d, _e2, _f2;
    const { caipNetwork } = params;
    const connector = this.getWalletConnectConnector();
    if (caipNetwork.chainNamespace === ConstantsUtil$3.CHAIN.EVM) {
      try {
        await ((_a2 = connector.provider) == null ? void 0 : _a2.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: toHex$1(caipNetwork.id) }]
        }));
      } catch (switchError) {
        if (switchError.code === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === WcConstantsUtil.ERROR_INVALID_CHAIN_ID || switchError.code === WcConstantsUtil.ERROR_CODE_DEFAULT || ((_c2 = (_b2 = switchError == null ? void 0 : switchError.data) == null ? void 0 : _b2.originalError) == null ? void 0 : _c2.code) === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
          try {
            await ((_f2 = connector.provider) == null ? void 0 : _f2.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: toHex$1(caipNetwork.id),
                  rpcUrls: [(_d = caipNetwork == null ? void 0 : caipNetwork.rpcUrls["chainDefault"]) == null ? void 0 : _d.http],
                  chainName: caipNetwork.name,
                  nativeCurrency: caipNetwork.nativeCurrency,
                  blockExplorerUrls: [(_e2 = caipNetwork.blockExplorers) == null ? void 0 : _e2.default.url]
                }
              ]
            }));
          } catch (error) {
            throw new Error("Chain is not supported");
          }
        }
      }
    }
    connector.provider.setDefaultChain(caipNetwork.caipNetworkId);
  }
  getWalletConnectProvider() {
    const connector = this.connectors.find((c2) => c2.type === "WALLET_CONNECT");
    const provider = connector == null ? void 0 : connector.provider;
    return provider;
  }
}
const FEATURE_KEYS = [
  "email",
  "socials",
  "swaps",
  "onramp",
  "activity",
  "reownBranding",
  "multiWallet",
  "emailCapture",
  "payWithExchange",
  "payments",
  "reownAuthentication"
];
const featureConfig = {
  email: {
    apiFeatureName: "social_login",
    localFeatureName: "email",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.includes("email");
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.email;
      }
      return Boolean(localValue);
    }
  },
  socials: {
    apiFeatureName: "social_login",
    localFeatureName: "socials",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.length > 0 ? config.filter((s2) => s2 !== "email") : false;
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.socials;
      }
      if (typeof localValue === "boolean") {
        return localValue ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.socials : false;
      }
      return localValue;
    }
  },
  swaps: {
    apiFeatureName: "swap",
    localFeatureName: "swaps",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.swaps;
      }
      if (typeof localValue === "boolean") {
        return localValue ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.swaps : false;
      }
      return localValue;
    }
  },
  onramp: {
    apiFeatureName: "onramp",
    localFeatureName: "onramp",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.onramp;
      }
      if (typeof localValue === "boolean") {
        return localValue ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.onramp : false;
      }
      return localValue;
    }
  },
  activity: {
    apiFeatureName: "activity",
    localFeatureName: "history",
    returnType: false,
    isLegacy: true,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.activity;
      }
      return Boolean(localValue);
    }
  },
  reownBranding: {
    apiFeatureName: "reown_branding",
    localFeatureName: "reownBranding",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.reownBranding;
      }
      return Boolean(localValue);
    }
  },
  emailCapture: {
    apiFeatureName: "email_capture",
    localFeatureName: "emailCapture",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => apiConfig.isEnabled && (apiConfig.config ?? []),
    processFallback: (_localValue) => false
  },
  multiWallet: {
    apiFeatureName: "multi_wallet",
    localFeatureName: "multiWallet",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: () => ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.multiWallet
  },
  payWithExchange: {
    apiFeatureName: "fund_from_exchange",
    localFeatureName: "payWithExchange",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: () => ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.payWithExchange
  },
  payments: {
    apiFeatureName: "payments",
    localFeatureName: "payments",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: () => ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.payments
  },
  reownAuthentication: {
    apiFeatureName: "reown_authentication",
    localFeatureName: "reownAuthentication",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: (localValue) => {
      if (typeof localValue === "undefined") {
        return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES.reownAuthentication;
      }
      return Boolean(localValue);
    }
  }
};
const ConfigUtil = {
  localSettingsOverridden: /* @__PURE__ */ new Set(),
  getApiConfig(id, apiProjectConfig) {
    return apiProjectConfig == null ? void 0 : apiProjectConfig.find((f3) => f3.id === id);
  },
  addWarning(localFeatureValue, featureKey) {
    if (localFeatureValue !== void 0) {
      const config = featureConfig[featureKey];
      const warningName = config.isLegacy ? `"features.${config.localFeatureName}" (now "${featureKey}")` : `"features.${featureKey}"`;
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
      if ((apiConfig == null ? void 0 : apiConfig.config) === null) {
        return this.processFallbackFeature(featureKey, localValue);
      }
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      if (localValue !== void 0) {
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
      shouldUseApiConfig = apiProjectConfig !== null && apiProjectConfig !== void 0;
    } catch (e2) {
      console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", e2);
    }
    const remoteFeaturesConfig = shouldUseApiConfig && !isBasic ? ConstantsUtil$2.DEFAULT_REMOTE_FEATURES : ConstantsUtil$2.DEFAULT_REMOTE_FEATURES_DISABLED;
    try {
      for (const featureKey of FEATURE_KEYS) {
        const result = this.processFeature(featureKey, localFeatures, apiProjectConfig, shouldUseApiConfig, isBasic);
        Object.assign(remoteFeaturesConfig, { [featureKey]: result });
      }
    } catch (e2) {
      console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", e2);
      return ConstantsUtil$2.DEFAULT_REMOTE_FEATURES;
    }
    if (shouldUseApiConfig && this.localSettingsOverridden.size > 0) {
      const warningMessage = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
      AlertController.open({
        debugMessage: ErrorUtil.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(warningMessage)
      }, "warning");
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
    this.getCaipNetwork = (chainNamespace, id) => {
      var _a2, _b2, _c2;
      if (chainNamespace) {
        const caipNetworkWithId = (_a2 = ChainController.getCaipNetworks(chainNamespace)) == null ? void 0 : _a2.find((c2) => c2.id === id);
        if (caipNetworkWithId) {
          return caipNetworkWithId;
        }
        const namespaceCaipNetwork = (_b2 = ChainController.getNetworkData(chainNamespace)) == null ? void 0 : _b2.caipNetwork;
        if (namespaceCaipNetwork) {
          return namespaceCaipNetwork;
        }
        const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(chainNamespace);
        return (_c2 = requestedCaipNetworks.filter((c2) => c2.chainNamespace === chainNamespace)) == null ? void 0 : _c2[0];
      }
      return ChainController.state.activeCaipNetwork || this.defaultCaipNetwork;
    };
    this.getCaipNetworkId = () => {
      const network = this.getCaipNetwork();
      if (network) {
        return network.id;
      }
      return void 0;
    };
    this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
    this.getActiveChainNamespace = () => ChainController.state.activeChain;
    this.setRequestedCaipNetworks = (requestedCaipNetworks, chain) => {
      ChainController.setRequestedCaipNetworks(requestedCaipNetworks, chain);
    };
    this.getApprovedCaipNetworkIds = () => ChainController.getAllApprovedCaipNetworkIds();
    this.getCaipAddress = (chainNamespace) => {
      var _a2, _b2;
      if (ChainController.state.activeChain === chainNamespace || !chainNamespace) {
        return ChainController.state.activeCaipAddress;
      }
      return (_b2 = (_a2 = ChainController.state.chains.get(chainNamespace)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress;
    };
    this.setClientId = (clientId) => {
      BlockchainApiController.setClientId(clientId);
    };
    this.getProvider = (namespace) => ProviderController.getProvider(namespace);
    this.getProviderType = (namespace) => ProviderController.getProviderId(namespace);
    this.getPreferredAccountType = (namespace) => getPreferredAccountType(namespace);
    this.setCaipAddress = (caipAddress, chain, shouldRefresh = false) => {
      ChainController.setAccountProp("caipAddress", caipAddress, chain, shouldRefresh);
      ChainController.setAccountProp("address", CoreHelperUtil.getPlainAddress(caipAddress), chain, shouldRefresh);
    };
    this.setBalance = (balance, balanceSymbol, chain) => {
      ChainController.setAccountProp("balance", balance, chain);
      ChainController.setAccountProp("balanceSymbol", balanceSymbol, chain);
    };
    this.setProfileName = (profileName, chain) => {
      ChainController.setAccountProp("profileName", profileName, chain);
    };
    this.setProfileImage = (profileImage, chain) => {
      ChainController.setAccountProp("profileImage", profileImage, chain);
    };
    this.setUser = (user, chain) => {
      ChainController.setAccountProp("user", user, chain);
    };
    this.resetAccount = (chain) => {
      ChainController.resetAccount(chain);
    };
    this.setCaipNetwork = (caipNetwork) => {
      ChainController.setActiveCaipNetwork(caipNetwork);
    };
    this.setCaipNetworkOfNamespace = (caipNetwork, chainNamespace) => {
      ChainController.setChainNetworkData(chainNamespace, { caipNetwork });
    };
    this.setStatus = (status, chain) => {
      ChainController.setAccountProp("status", status, chain);
      if (ConnectorController.isConnected()) {
        StorageUtil.setConnectionStatus("connected");
      } else {
        StorageUtil.setConnectionStatus("disconnected");
      }
    };
    this.getAddressByChainNamespace = (chainNamespace) => {
      var _a2;
      return (_a2 = ChainController.getAccountData(chainNamespace)) == null ? void 0 : _a2.address;
    };
    this.setConnectors = (connectors) => {
      const allConnectors = [...ConnectorController.state.allConnectors, ...connectors];
      ConnectorController.setConnectors(allConnectors);
    };
    this.setConnections = (connections, chainNamespace) => {
      StorageUtil.setConnections(connections, chainNamespace);
      ConnectionController.setConnections(connections, chainNamespace);
    };
    this.fetchIdentity = (request) => BlockchainApiController.fetchIdentity(request);
    this.getReownName = (address) => EnsController.getNamesForAddress(address);
    this.getConnectors = () => ConnectorController.getConnectors();
    this.getConnectorImage = (connector) => AssetUtil.getConnectorImage(connector);
    this.getConnections = (namespace) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return [];
      }
      return ConnectionControllerUtil.getConnectionsData(namespace).connections;
    };
    this.getRecentConnections = (namespace) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return [];
      }
      return ConnectionControllerUtil.getConnectionsData(namespace).recentConnections;
    };
    this.switchConnection = async (params) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return;
      }
      await ConnectionController.switchConnection(params);
    };
    this.deleteConnection = (params) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return;
      }
      StorageUtil.deleteAddressFromConnection(params);
      ConnectionController.syncStorageConnections();
    };
    this.setConnectedWalletInfo = (connectedWalletInfo, chain) => {
      const type = ProviderController.getProviderId(chain);
      const walletInfo = connectedWalletInfo ? { ...connectedWalletInfo, type } : void 0;
      ChainController.setAccountProp("connectedWalletInfo", walletInfo, chain);
    };
    this.getIsConnectedState = () => Boolean(ChainController.state.activeCaipAddress);
    this.addAddressLabel = (address, label, chain) => {
      var _a2;
      const addressLabels = ((_a2 = ChainController.getAccountData(chain)) == null ? void 0 : _a2.addressLabels) || {};
      ChainController.setAccountProp("addressLabels", { ...addressLabels, [address]: label }, chain);
    };
    this.removeAddressLabel = (address, chain) => {
      var _a2;
      const addressLabels = ((_a2 = ChainController.getAccountData(chain)) == null ? void 0 : _a2.addressLabels) || {};
      ChainController.setAccountProp("addressLabels", { ...addressLabels, [address]: void 0 }, chain);
    };
    this.getAddress = (chainNamespace) => {
      var _a2;
      const namespace = chainNamespace || ChainController.state.activeChain;
      return (_a2 = ChainController.getAccountData(namespace)) == null ? void 0 : _a2.address;
    };
    this.setApprovedCaipNetworksData = (namespace) => ChainController.setApprovedCaipNetworksData(namespace);
    this.resetNetwork = (namespace) => {
      ChainController.resetNetwork(namespace);
    };
    this.addConnector = (connector) => {
      ConnectorController.addConnector(connector);
    };
    this.resetWcConnection = () => {
      ConnectionController.resetWcConnection();
    };
    this.setAddressExplorerUrl = (addressExplorerUrl, chain) => {
      ChainController.setAccountProp("addressExplorerUrl", addressExplorerUrl, chain);
    };
    this.setSmartAccountDeployed = (isDeployed, chain) => {
      ChainController.setAccountProp("smartAccountDeployed", isDeployed, chain);
    };
    this.setPreferredAccountType = (preferredAccountType, chain) => {
      ChainController.setAccountProp("preferredAccountType", preferredAccountType, chain);
    };
    this.setEIP6963Enabled = (enabled) => {
      OptionsController.setEIP6963Enabled(enabled);
    };
    this.handleUnsafeRPCRequest = () => {
      if (this.isOpen()) {
        if (this.isTransactionStackEmpty()) {
          return;
        }
        this.redirect("ApproveTransaction");
      } else {
        this.open({ view: "ApproveTransaction" });
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
    const adapterNamespaces = adapters == null ? void 0 : adapters.map((adapter) => adapter.namespace).filter((namespace) => Boolean(namespace));
    if (adapterNamespaces == null ? void 0 : adapterNamespaces.length) {
      return [...new Set(adapterNamespaces)];
    }
    const networkNamespaces = caipNetworks == null ? void 0 : caipNetworks.map((network) => network.chainNamespace);
    return [...new Set(networkNamespaces)];
  }
  async initialize(options) {
    var _a2, _b2, _c2, _d, _e2;
    this.initializeProjectSettings(options);
    this.initControllers(options);
    await this.initChainAdapters();
    this.sendInitializeEvent(options);
    if (OptionsController.state.enableReconnect) {
      await this.syncExistingConnection();
      await this.syncAdapterConnections();
    } else {
      await this.unSyncExistingConnection();
    }
    this.remoteFeatures = await ConfigUtil.fetchRemoteFeatures(options);
    OptionsController.setRemoteFeatures(this.remoteFeatures);
    if (this.remoteFeatures.onramp) {
      OnRampController.setOnrampProviders(this.remoteFeatures.onramp);
    }
    if (((_a2 = OptionsController.state.remoteFeatures) == null ? void 0 : _a2.email) || Array.isArray((_b2 = OptionsController.state.remoteFeatures) == null ? void 0 : _b2.socials) && ((_c2 = OptionsController.state.remoteFeatures) == null ? void 0 : _c2.socials.length) > 0) {
      await this.checkAllowedOrigins();
    }
    if (((_d = OptionsController.state.features) == null ? void 0 : _d.reownAuthentication) || ((_e2 = OptionsController.state.remoteFeatures) == null ? void 0 : _e2.reownAuthentication)) {
      const { ReownAuthentication } = await __vitePreload(async () => {
        const { ReownAuthentication: ReownAuthentication2 } = await import("./features-mCyaZk-O.js");
        return { ReownAuthentication: ReownAuthentication2 };
      }, true ? __vite__mapDeps([10,1,2,4]) : void 0);
      const currentSIWX = OptionsController.state.siwx;
      if (!(currentSIWX instanceof ReownAuthentication)) {
        if (currentSIWX) {
          console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden.");
        }
        OptionsController.setSIWX(new ReownAuthentication());
      }
    }
  }
  async openSend(args) {
    var _a2;
    const namespaceToUse = args.namespace || ChainController.state.activeChain;
    const caipAddress = this.getCaipAddress(namespaceToUse);
    const chainId = (_a2 = this.getCaipNetwork(namespaceToUse)) == null ? void 0 : _a2.id;
    if (!caipAddress) {
      throw new Error("openSend: caipAddress not found");
    }
    if ((chainId == null ? void 0 : chainId.toString()) !== args.chainId.toString()) {
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
    } catch {
    }
    await ModalController.open({
      view: "WalletSend",
      data: { send: args }
    });
    return new Promise((resolve, reject) => {
      const unsubscribe = SendController.subscribeKey("hash", (hash) => {
        if (hash) {
          cleanup();
          resolve({ hash });
        }
      });
      const unsubscribeModal = ModalController.subscribe((modal) => {
        if (!modal.open) {
          cleanup();
          reject(new Error("Modal closed"));
        }
      });
      const cleanup = this.createCleanupHandler([unsubscribe, unsubscribeModal]);
    });
  }
  toModalOptions() {
    function isSwap(options) {
      return (options == null ? void 0 : options.view) === "Swap";
    }
    function isSend(options) {
      return (options == null ? void 0 : options.view) === "WalletSend";
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
        AlertController.open(ErrorUtil.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      }
    } catch (error) {
      if (!(error instanceof Error)) {
        return;
      }
      switch (error.message) {
        case "RATE_LIMITED":
          AlertController.open(ErrorUtil.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
          break;
        case "SERVER_ERROR": {
          const originalError = error.cause instanceof Error ? error.cause : error;
          AlertController.open({
            displayMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
            debugMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(originalError.message)
          }, "error");
          break;
        }
      }
    }
  }
  createCleanupHandler(unsubscribeFunctions) {
    return () => {
      unsubscribeFunctions.forEach((unsubscribe) => {
        try {
          unsubscribe();
        } catch {
        }
      });
    };
  }
  sendInitializeEvent(options) {
    var _a2;
    const { ...optionsCopy } = options;
    delete optionsCopy.adapters;
    delete optionsCopy.universalProvider;
    EventsController.sendEvent({
      type: "track",
      event: "INITIALIZE",
      properties: {
        ...optionsCopy,
        networks: options.networks.map((n3) => n3.id),
        siweConfig: {
          options: ((_a2 = options.siweConfig) == null ? void 0 : _a2.options) || {}
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
      throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");
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
    var _a2;
    OptionsController.setDebug(options.debug !== false);
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
      AlertController.open(ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
      return;
    }
    const evmAdapter = (_a2 = options.adapters) == null ? void 0 : _a2.find((adapter) => adapter.namespace === ConstantsUtil$3.CHAIN.EVM);
    if (evmAdapter) {
      if (options.siweConfig) {
        if (options.siwx) {
          throw new Error("Cannot set both `siweConfig` and `siwx` options");
        }
        OptionsController.setSIWX(options.siweConfig.mapToSIWX());
      }
    }
  }
  getDefaultMetaData() {
    var _a2, _b2, _c2, _d;
    if (CoreHelperUtil.isClient()) {
      return {
        name: ((_b2 = (_a2 = document.getElementsByTagName("title")) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.textContent) || "",
        description: ((_c2 = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c2.content) || "",
        url: window.location.origin,
        icons: [((_d = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d.href) || ""]
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
    const defaultNetwork = options.networks.find((n3) => {
      var _a2;
      return n3.id === ((_a2 = options.defaultNetwork) == null ? void 0 : _a2.id);
    });
    const extendedNetwork = defaultNetwork ? CaipNetworksUtil.extendCaipNetwork(defaultNetwork, {
      customNetworkImageUrls: options.chainImages,
      customRpcUrls: options.customRpcUrls,
      projectId: options.projectId
    }) : void 0;
    return extendedNetwork;
  }
  /**
   * Disconnects a connector with the given namespace and id. If the connector id is not provided, disconnects the adapter (namespace).
   * @param namespace ChainNamespace
   * @param id string
   * @returns
   */
  async disconnectConnector(namespace, id) {
    var _a2, _b2;
    try {
      this.setLoading(true, namespace);
      let disconnectResult = {
        connections: []
      };
      const adapter = this.getAdapter(namespace);
      const caipAddress = (_b2 = (_a2 = ChainController.state.chains.get(namespace)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress;
      if ((caipAddress || !OptionsController.state.enableReconnect) && (adapter == null ? void 0 : adapter.disconnect)) {
        disconnectResult = await adapter.disconnect({ id });
      }
      this.setLoading(false, namespace);
      return disconnectResult;
    } catch (error) {
      this.setLoading(false, namespace);
      throw new Error(`Failed to disconnect chains: ${error.message}`);
    }
  }
  // -- Client Initialization ---------------------------------------------------
  createClients() {
    this.connectionControllerClient = {
      connectWalletConnect: async () => {
        var _a2;
        const activeChain = ChainController.state.activeChain;
        const adapter = this.getAdapter(activeChain);
        const chainId = (_a2 = this.getCaipNetwork(activeChain)) == null ? void 0 : _a2.id;
        const connections = ConnectionController.getConnections(activeChain);
        const isMultiWallet = this.remoteFeatures.multiWallet;
        const hasConnections = connections.length > 0;
        if (!adapter) {
          throw new Error("Adapter not found");
        }
        const result = await adapter.connectWalletConnect(chainId);
        const shouldClose = !hasConnections || !isMultiWallet;
        if (shouldClose) {
          this.close();
        }
        this.setClientId((result == null ? void 0 : result.clientId) || null);
        StorageUtil.setConnectedNamespaces([...ChainController.state.chains.keys()]);
        await this.syncWalletConnectAccount();
        await SIWXUtil.initializeIfEnabled();
      },
      connectExternal: async (params) => {
        const connectResult = await this.onConnectExternal(params);
        await this.connectInactiveNamespaces(params, connectResult);
        return connectResult ? { address: connectResult.address } : void 0;
      },
      reconnectExternal: async ({ id, info, type, provider }) => {
        var _a2;
        const namespace = ChainController.state.activeChain;
        const adapter = this.getAdapter(namespace);
        if (!namespace) {
          throw new Error("reconnectExternal: namespace not found");
        }
        if (!adapter) {
          throw new Error("reconnectExternal: adapter not found");
        }
        if (adapter == null ? void 0 : adapter.reconnect) {
          await (adapter == null ? void 0 : adapter.reconnect({ id, info, type, provider, chainId: (_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id }));
          StorageUtil.addConnectedNamespace(namespace);
          this.syncConnectedWalletInfo(namespace);
        }
      },
      disconnectConnector: async (params) => {
        await this.disconnectConnector(params.namespace, params.id);
      },
      disconnect: async (params) => {
        var _a2;
        const { id: connectorIdParam, chainNamespace, initialDisconnect } = params || {};
        const namespace = chainNamespace || ChainController.state.activeChain;
        const namespaceConnectorId = ConnectorController.getConnectorId(namespace);
        const isAuth = connectorIdParam === ConstantsUtil$3.CONNECTOR_ID.AUTH || namespaceConnectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH;
        const isWalletConnect = connectorIdParam === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT || namespaceConnectorId === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
        try {
          const namespaces = Array.from(ChainController.state.chains.keys());
          let namespacesToDisconnect = chainNamespace ? [chainNamespace] : namespaces;
          if (isWalletConnect || isAuth) {
            namespacesToDisconnect = namespaces;
          }
          const disconnectPromises = namespacesToDisconnect.map(async (ns2) => {
            const currentConnectorId = ConnectorController.getConnectorId(ns2);
            const connectorIdToDisconnect = connectorIdParam || currentConnectorId;
            const disconnectData = await this.disconnectConnector(ns2, connectorIdToDisconnect);
            if (disconnectData) {
              if (isAuth) {
                StorageUtil.deleteConnectedSocialProvider();
              }
              disconnectData.connections.forEach((connection) => {
                StorageUtil.addDisconnectedConnectorId(connection.connectorId, ns2);
              });
            }
            if (initialDisconnect) {
              this.onDisconnectNamespace({ chainNamespace: ns2, closeModal: false });
            }
          });
          const disconnectResults = await Promise.allSettled(disconnectPromises);
          SendController.resetSend();
          ConnectionController.resetWcConnection();
          if ((_a2 = SIWXUtil.getSIWX()) == null ? void 0 : _a2.signOutOnDisconnect) {
            await SIWXUtil.clearSessions();
          }
          ConnectorController.setFilterByNamespace(void 0);
          ConnectionController.syncStorageConnections();
          const failures = disconnectResults.filter((result) => result.status === "rejected");
          if (failures.length > 0) {
            throw new Error(failures.map((f3) => f3.reason.message).join(", "));
          }
          EventsController.sendEvent({
            type: "track",
            event: "DISCONNECT_SUCCESS",
            properties: {
              namespace: chainNamespace || "all"
            }
          });
        } catch (error) {
          throw new Error(`Failed to disconnect chains: ${error.message}`);
        }
      },
      checkInstalled: (ids) => {
        if (!ids) {
          return Boolean(window.ethereum);
        }
        return ids.some((id) => {
          var _a2;
          return Boolean((_a2 = window.ethereum) == null ? void 0 : _a2[String(id)]);
        });
      },
      signMessage: async (message) => {
        const namespace = ChainController.state.activeChain;
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!namespace) {
          throw new Error("signMessage: namespace not found");
        }
        if (!adapter) {
          throw new Error("signMessage: adapter not found");
        }
        const address = this.getAddress(namespace);
        if (!address) {
          throw new Error("signMessage: address not found");
        }
        const result = await (adapter == null ? void 0 : adapter.signMessage({
          message,
          address,
          provider: ProviderController.getProvider(namespace)
        }));
        return (result == null ? void 0 : result.signature) || "";
      },
      sendTransaction: async (args) => {
        const namespace = args.chainNamespace;
        if (!namespace) {
          throw new Error("sendTransaction: namespace not found");
        }
        if (ConstantsUtil$2.SEND_SUPPORTED_NAMESPACES.includes(namespace)) {
          const adapter = this.getAdapter(namespace);
          if (!adapter) {
            throw new Error("sendTransaction: adapter not found");
          }
          const provider = ProviderController.getProvider(namespace);
          const result = await (adapter == null ? void 0 : adapter.sendTransaction({
            ...args,
            caipNetwork: this.getCaipNetwork(),
            provider
          }));
          return (result == null ? void 0 : result.hash) || "";
        }
        return "";
      },
      estimateGas: async (args) => {
        const namespace = args.chainNamespace;
        if (namespace === ConstantsUtil$3.CHAIN.EVM) {
          const adapter = this.getAdapter(namespace);
          if (!adapter) {
            throw new Error("estimateGas: adapter is required but got undefined");
          }
          const provider = ProviderController.getProvider(namespace);
          const caipNetwork = this.getCaipNetwork();
          if (!caipNetwork) {
            throw new Error("estimateGas: caipNetwork is required but got undefined");
          }
          const result = await (adapter == null ? void 0 : adapter.estimateGas({ ...args, provider, caipNetwork }));
          return (result == null ? void 0 : result.gas) || 0n;
        }
        return 0n;
      },
      getEnsAvatar: async () => {
        var _a2;
        const namespace = ChainController.state.activeChain;
        if (!namespace) {
          throw new Error("getEnsAvatar: namespace is required but got undefined");
        }
        const address = this.getAddress(namespace);
        if (!address) {
          throw new Error("getEnsAvatar: address not found");
        }
        await this.syncIdentity({
          address,
          chainId: Number((_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id),
          chainNamespace: namespace
        });
        const accountData = ChainController.getAccountData();
        return (accountData == null ? void 0 : accountData.profileImage) || false;
      },
      getEnsAddress: async (name) => await WcHelpersUtil.resolveReownName(name),
      writeContract: async (args) => {
        const namespace = ChainController.state.activeChain;
        const adapter = this.getAdapter(namespace);
        if (!namespace) {
          throw new Error("writeContract: namespace is required but got undefined");
        }
        if (!adapter) {
          throw new Error("writeContract: adapter is required but got undefined");
        }
        const caipNetwork = this.getCaipNetwork();
        const caipAddress = this.getCaipAddress();
        const provider = ProviderController.getProvider(namespace);
        if (!caipNetwork || !caipAddress) {
          throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
        }
        const result = await (adapter == null ? void 0 : adapter.writeContract({ ...args, caipNetwork, provider, caipAddress }));
        return result == null ? void 0 : result.hash;
      },
      parseUnits: (value, decimals) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("parseUnits: adapter is required but got undefined");
        }
        return (adapter == null ? void 0 : adapter.parseUnits({ value, decimals })) ?? 0n;
      },
      formatUnits: (value, decimals) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("formatUnits: adapter is required but got undefined");
        }
        return (adapter == null ? void 0 : adapter.formatUnits({ value, decimals })) ?? "0";
      },
      getCapabilities: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("getCapabilities: adapter is required but got undefined");
        }
        return await (adapter == null ? void 0 : adapter.getCapabilities(params));
      },
      grantPermissions: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("grantPermissions: adapter is required but got undefined");
        }
        return await (adapter == null ? void 0 : adapter.grantPermissions(params));
      },
      revokePermissions: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("revokePermissions: adapter is required but got undefined");
        }
        if (adapter == null ? void 0 : adapter.revokePermissions) {
          return await adapter.revokePermissions(params);
        }
        return "0x";
      },
      walletGetAssets: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("walletGetAssets: adapter is required but got undefined");
        }
        return await (adapter == null ? void 0 : adapter.walletGetAssets(params)) ?? {};
      },
      updateBalance: (namespace) => {
        const address = this.getAddress(namespace);
        const caipNetwork = this.getCaipNetwork(namespace);
        if (!caipNetwork || !address) {
          return;
        }
        this.updateNativeBalance(address, caipNetwork == null ? void 0 : caipNetwork.id, namespace);
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
    var _a2, _b2, _c2, _d, _e2, _f2, _g, _h;
    const activeChain = ChainController.state.activeChain;
    const namespace = params.chain || activeChain;
    const adapter = this.getAdapter(namespace);
    let shouldUpdateNetwork = true;
    if (params.type === ConstantsUtil$1.CONNECTOR_TYPE_AUTH) {
      const authNamespaces = ConstantsUtil$3.AUTH_CONNECTOR_SUPPORTED_CHAINS;
      const hasConnectedAuthNamespace = authNamespaces.some((namespace2) => ConnectorController.getConnectorId(namespace2) === ConstantsUtil$3.CONNECTOR_ID.AUTH);
      if (hasConnectedAuthNamespace && params.chain !== activeChain) {
        shouldUpdateNetwork = false;
      }
    }
    if (params.chain && params.chain !== activeChain && !params.caipNetwork) {
      const toConnectNetwork = this.getCaipNetworks().find((network) => network.chainNamespace === params.chain);
      if (toConnectNetwork && shouldUpdateNetwork) {
        this.setCaipNetwork(toConnectNetwork);
      }
    }
    if (!namespace) {
      throw new Error("connectExternal: namespace not found");
    }
    if (!adapter) {
      throw new Error("connectExternal: adapter not found");
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
      chainId: ((_a2 = params.caipNetwork) == null ? void 0 : _a2.id) || (fallbackCaipNetwork == null ? void 0 : fallbackCaipNetwork.id),
      rpcUrl: ((_e2 = (_d = (_c2 = (_b2 = params.caipNetwork) == null ? void 0 : _b2.rpcUrls) == null ? void 0 : _c2.default) == null ? void 0 : _d.http) == null ? void 0 : _e2[0]) || ((_h = (_g = (_f2 = fallbackCaipNetwork == null ? void 0 : fallbackCaipNetwork.rpcUrls) == null ? void 0 : _f2.default) == null ? void 0 : _g.http) == null ? void 0 : _h[0])
    });
    if (!res) {
      return void 0;
    }
    StorageUtil.addConnectedNamespace(namespace);
    this.syncProvider({ ...res, chainNamespace: namespace });
    this.setStatus("connected", namespace);
    this.syncConnectedWalletInfo(namespace);
    StorageUtil.removeDisconnectedConnectorId(params.id, namespace);
    return { address: res.address, connectedCaipNetwork: caipNetworkToUse };
  }
  async connectInactiveNamespaces(params, connectResult) {
    var _a2;
    const isConnectingToAuth = params.type === ConstantsUtil$1.CONNECTOR_TYPE_AUTH;
    const otherAuthNamespaces = HelpersUtil.getOtherAuthNamespaces((_a2 = connectResult == null ? void 0 : connectResult.connectedCaipNetwork) == null ? void 0 : _a2.chainNamespace);
    const activeCaipNetwork = ChainController.state.activeCaipNetwork;
    const activeAdapter = this.getAdapter(activeCaipNetwork == null ? void 0 : activeCaipNetwork.chainNamespace);
    const activeProvider = ProviderController.getProvider(activeCaipNetwork == null ? void 0 : activeCaipNetwork.chainNamespace);
    if (isConnectingToAuth) {
      await Promise.all(otherAuthNamespaces.map(async (ns2) => {
        var _a3, _b2, _c2;
        try {
          const provider = ProviderController.getProvider(ns2);
          const caipNetworkToUse = this.getCaipNetwork(ns2);
          const adapter = this.getAdapter(ns2);
          const res = await (adapter == null ? void 0 : adapter.connect({
            ...params,
            provider,
            socialUri: void 0,
            chainId: caipNetworkToUse == null ? void 0 : caipNetworkToUse.id,
            rpcUrl: (_c2 = (_b2 = (_a3 = caipNetworkToUse == null ? void 0 : caipNetworkToUse.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
          }));
          if (res) {
            StorageUtil.addConnectedNamespace(ns2);
            StorageUtil.removeDisconnectedConnectorId(params.id, ns2);
            this.setStatus("connected", ns2);
            this.syncConnectedWalletInfo(ns2);
          }
        } catch (error) {
          AlertController.warn(ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(ns2, error instanceof Error ? error.message : void 0), ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      }));
      if (activeCaipNetwork) {
        await (activeAdapter == null ? void 0 : activeAdapter.switchNetwork({
          caipNetwork: activeCaipNetwork,
          provider: activeProvider,
          providerType: params.type
        }));
      }
    }
  }
  getApprovedCaipNetworksData() {
    var _a2, _b2, _c2, _d, _e2;
    const providerType = ProviderController.getProviderId(ChainController.state.activeChain);
    if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT) {
      const namespaces = (_b2 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces;
      return {
        /*
         * MetaMask Wallet only returns 1 namespace in the session object. This makes it imposible
         * to switch to other networks. Setting supportsAllNetworks to true for MetaMask Wallet
         * will make it possible to switch to other networks.
         */
        supportsAllNetworks: ((_e2 = (_d = (_c2 = this.universalProvider) == null ? void 0 : _c2.session) == null ? void 0 : _d.peer) == null ? void 0 : _e2.metadata.name) === "MetaMask Wallet",
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
        await (adapter == null ? void 0 : adapter.switchNetwork({ caipNetwork, provider, providerType }));
      } else {
        this.setCaipNetwork(caipNetwork);
        if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT) {
          this.syncWalletConnectAccount();
        } else {
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
    } else {
      this.setCaipNetwork(caipNetwork);
    }
  }
  getChainsFromNamespaces(namespaces = {}) {
    return Object.values(namespaces).flatMap((namespace) => {
      const chains = namespace.chains || [];
      const accountsChains = namespace.accounts.map((account) => {
        const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(account);
        return `${chainNamespace}:${chainId}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...chains, ...accountsChains]));
    });
  }
  // -- Adapter Initialization ---------------------------------------------------
  createAdapters(blueprints) {
    this.createClients();
    return this.chainNamespaces.reduce((adapters, namespace) => {
      var _a2, _b2;
      const blueprint = blueprints == null ? void 0 : blueprints.find((b2) => b2.namespace === namespace);
      if (blueprint) {
        blueprint.construct({
          namespace,
          projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
          networks: (_b2 = this.caipNetworks) == null ? void 0 : _b2.filter(({ chainNamespace }) => chainNamespace === namespace)
        });
        adapters[namespace] = blueprint;
      } else {
        adapters[namespace] = new UniversalAdapter({
          namespace,
          networks: this.getCaipNetworks()
        });
      }
      return adapters;
    }, {});
  }
  async initChainAdapter(namespace) {
    var _a2;
    this.onConnectors(namespace);
    this.listenAdapter(namespace);
    await ((_a2 = this.chainAdapters) == null ? void 0 : _a2[namespace].syncConnectors(this.options, this));
    await this.createUniversalProviderForAdapter(namespace);
  }
  async initChainAdapters() {
    await Promise.all(this.chainNamespaces.map(async (namespace) => {
      await this.initChainAdapter(namespace);
    }));
  }
  onConnectors(chainNamespace) {
    const adapter = this.getAdapter(chainNamespace);
    adapter == null ? void 0 : adapter.on("connectors", this.setConnectors.bind(this));
  }
  listenAdapter(chainNamespace) {
    const adapter = this.getAdapter(chainNamespace);
    if (!adapter) {
      return;
    }
    const connectionStatus = StorageUtil.getConnectionStatus();
    if (OptionsController.state.enableReconnect === false) {
      this.setStatus("disconnected", chainNamespace);
    } else if (connectionStatus === "connected") {
      this.setStatus("connecting", chainNamespace);
    } else if (connectionStatus === "disconnected") {
      StorageUtil.clearAddressCache();
      this.setStatus(connectionStatus, chainNamespace);
    } else {
      this.setStatus(connectionStatus, chainNamespace);
    }
    adapter.on("switchNetwork", ({ address, chainId }) => {
      var _a2, _b2;
      const caipNetwork = this.getCaipNetworks().find((n3) => n3.id.toString() === chainId.toString() || n3.caipNetworkId.toString() === chainId.toString());
      const isSameNamespace = ChainController.state.activeChain === chainNamespace;
      const accountAddress = (_b2 = (_a2 = ChainController.state.chains.get(chainNamespace)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address;
      if (caipNetwork) {
        const account = isSameNamespace && address ? address : accountAddress;
        if (account) {
          this.syncAccount({ address: account, chainId: caipNetwork.id, chainNamespace });
        }
      } else {
        this.setUnsupportedNetwork(chainId);
      }
    });
    adapter.on("disconnect", () => {
      const isMultiWallet = this.remoteFeatures.multiWallet;
      const allConnections = Array.from(ConnectionController.state.connections.values()).flat();
      this.onDisconnectNamespace({
        chainNamespace,
        closeModal: !isMultiWallet || allConnections.length === 0
      });
    });
    adapter.on("connections", (connections) => {
      this.setConnections(connections, chainNamespace);
    });
    adapter.on("pendingTransactions", () => {
      const address = this.getAddress(chainNamespace);
      const activeCaipNetwork = ChainController.state.activeCaipNetwork;
      if (!address || !(activeCaipNetwork == null ? void 0 : activeCaipNetwork.id)) {
        return;
      }
      this.updateNativeBalance(address, activeCaipNetwork.id, activeCaipNetwork.chainNamespace);
    });
    adapter.on("accountChanged", ({ address, chainId, connector }) => {
      var _a2, _b2;
      this.handlePreviousConnectorConnection(connector);
      const isActiveChain = ChainController.state.activeChain === chainNamespace;
      if (connector == null ? void 0 : connector.provider) {
        this.syncProvider({
          id: connector.id,
          type: connector.type,
          provider: connector == null ? void 0 : connector.provider,
          chainNamespace
        });
        this.syncConnectedWalletInfo(chainNamespace);
      }
      const namespaceNetworkId = (_b2 = (_a2 = ChainController.getNetworkData(chainNamespace)) == null ? void 0 : _a2.caipNetwork) == null ? void 0 : _b2.id;
      const syncAccountChainId = chainId || namespaceNetworkId;
      if (isActiveChain && syncAccountChainId) {
        this.syncAccount({
          address,
          chainId: syncAccountChainId,
          chainNamespace
        });
      } else if (!isActiveChain && syncAccountChainId) {
        this.syncAccountInfo(address, syncAccountChainId, chainNamespace);
        this.syncBalance({ address, chainId: syncAccountChainId, chainNamespace });
      } else {
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
    var _a2;
    const namespace = connector == null ? void 0 : connector.chain;
    const newConnectorId = connector == null ? void 0 : connector.id;
    const currentConnectorId = ConnectorController.getConnectorId(namespace);
    const isMultiWalletEnabled = (_a2 = OptionsController.state.remoteFeatures) == null ? void 0 : _a2.multiWallet;
    const hasNewConnectorConnected = currentConnectorId !== newConnectorId;
    const shouldDisconnectPreviousConnector = namespace && newConnectorId && currentConnectorId && hasNewConnectorConnected && !isMultiWalletEnabled;
    try {
      if (shouldDisconnectPreviousConnector) {
        await ConnectionController.disconnect({ id: currentConnectorId, namespace });
      }
    } catch (error) {
      console.warn("Error disconnecting previous connector", error);
    }
  }
  async createUniversalProviderForAdapter(chainNamespace) {
    var _a2, _b2, _c2;
    await this.getUniversalProvider();
    if (this.universalProvider) {
      await ((_c2 = (_b2 = (_a2 = this.chainAdapters) == null ? void 0 : _a2[chainNamespace]) == null ? void 0 : _b2.setUniversalProvider) == null ? void 0 : _c2.call(_b2, this.universalProvider));
    }
  }
  // -- Connection Sync ---------------------------------------------------
  async syncExistingConnection() {
    await Promise.allSettled(this.chainNamespaces.map((namespace) => this.syncNamespaceConnection(namespace)));
  }
  async unSyncExistingConnection() {
    try {
      await Promise.allSettled(this.chainNamespaces.map((namespace) => ConnectionController.disconnect({ namespace, initialDisconnect: true })));
    } catch (error) {
      console.error("Error disconnecting existing connections:", error);
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
      type: "track",
      event: "CONNECT_SUCCESS",
      address,
      properties: {
        method: CoreHelperUtil.isMobile() ? "mobile" : "qrcode",
        name: (recentWallet == null ? void 0 : recentWallet.name) || "Unknown",
        reconnect: true,
        view: RouterController.state.view,
        walletRank: recentWallet == null ? void 0 : recentWallet.order
      }
    });
  }
  async syncNamespaceConnection(namespace) {
    try {
      if (namespace === ConstantsUtil$3.CHAIN.EVM && CoreHelperUtil.isSafeApp()) {
        ConnectorController.setConnectorId(ConstantsUtil$3.CONNECTOR_ID.SAFE, namespace);
      }
      const connectorId = ConnectorController.getConnectorId(namespace);
      this.setStatus("connecting", namespace);
      switch (connectorId) {
        case ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT:
          await this.reconnectWalletConnect();
          break;
        case ConstantsUtil$3.CONNECTOR_ID.AUTH:
          break;
        default:
          await this.syncAdapterConnection(namespace);
      }
    } catch (err) {
      console.warn("AppKit couldn't sync existing connection", err);
      this.setStatus("disconnected", namespace);
    }
  }
  onDisconnectNamespace(options) {
    const { chainNamespace, closeModal } = options || {};
    ChainController.resetAccount(chainNamespace);
    ChainController.resetNetwork(chainNamespace);
    StorageUtil.removeConnectedNamespace(chainNamespace);
    const namespaces = Array.from(ChainController.state.chains.keys());
    const namespacesToDisconnect = chainNamespace ? [chainNamespace] : namespaces;
    namespacesToDisconnect.forEach((ns2) => StorageUtil.addDisconnectedConnectorId(ConnectorController.getConnectorId(ns2) || "", ns2));
    ConnectorController.removeConnectorId(chainNamespace);
    ProviderController.resetChain(chainNamespace);
    this.setUser(null, chainNamespace);
    this.setStatus("disconnected", chainNamespace);
    this.setConnectedWalletInfo(null, chainNamespace);
    if (closeModal !== false) {
      ModalController.close();
    }
  }
  async syncAdapterConnections() {
    await Promise.allSettled(this.chainNamespaces.map((namespace) => {
      const adapter = this.getAdapter(namespace);
      const caipAddress = this.getCaipAddress(namespace);
      const caipNetwork = this.getCaipNetwork(namespace);
      return adapter == null ? void 0 : adapter.syncConnections({
        connectToFirstConnector: !caipAddress,
        caipNetwork
      });
    }));
  }
  async syncAdapterConnection(namespace) {
    var _a2, _b2, _c2, _d;
    const adapter = this.getAdapter(namespace);
    const caipNetwork = this.getCaipNetwork(namespace);
    const connectorId = ConnectorController.getConnectorId(namespace);
    const connectors = ConnectorController.getConnectors(namespace);
    const connector = connectors.find((c2) => c2.id === connectorId);
    try {
      if (!adapter || !connector) {
        throw new Error(`Adapter or connector not found for namespace ${namespace}`);
      }
      if (!(caipNetwork == null ? void 0 : caipNetwork.id)) {
        throw new Error("CaipNetwork not found");
      }
      const connection = await (adapter == null ? void 0 : adapter.syncConnection({
        namespace,
        id: connector.id,
        chainId: caipNetwork.id,
        rpcUrl: (_c2 = (_b2 = (_a2 = caipNetwork == null ? void 0 : caipNetwork.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
      }));
      if (connection) {
        this.syncProvider({ ...connection, chainNamespace: namespace });
        await this.syncAccount({ ...connection, chainNamespace: namespace });
        this.setStatus("connected", namespace);
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          address: connection.address,
          properties: {
            method: "browser",
            name: ((_d = connector.info) == null ? void 0 : _d.name) || connector.name || "Unknown",
            reconnect: true,
            view: RouterController.state.view,
            walletRank: void 0
          }
        });
      } else {
        this.setStatus("disconnected", namespace);
      }
    } catch (e2) {
      this.onDisconnectNamespace({ chainNamespace: namespace, closeModal: false });
    }
  }
  async syncWalletConnectAccount() {
    var _a2, _b2;
    const sessionNamespaces = Object.keys(((_b2 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces) || {});
    const syncTasks = this.chainNamespaces.map(async (chainNamespace) => {
      var _a3, _b3, _c2, _d, _e2;
      const adapter = this.getAdapter(chainNamespace);
      if (!adapter) {
        return;
      }
      const namespaceAccounts = ((_d = (_c2 = (_b3 = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b3.namespaces) == null ? void 0 : _c2[chainNamespace]) == null ? void 0 : _d.accounts) || [];
      const activeChainId = (_e2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _e2.id;
      const sessionAddress = namespaceAccounts.find((account) => {
        const { chainId } = ParseUtil.parseCaipAddress(account);
        return chainId === (activeChainId == null ? void 0 : activeChainId.toString());
      }) || namespaceAccounts[0];
      if (sessionAddress) {
        const caipAddress = ParseUtil.validateCaipAddress(sessionAddress);
        const { chainId, address } = ParseUtil.parseCaipAddress(caipAddress);
        ProviderController.setProviderId(chainNamespace, ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT);
        if (this.caipNetworks && ChainController.state.activeCaipNetwork && adapter.namespace !== ConstantsUtil$3.CHAIN.EVM) {
          const provider = adapter.getWalletConnectProvider({
            caipNetworks: this.getCaipNetworks(),
            provider: this.universalProvider,
            activeCaipNetwork: ChainController.state.activeCaipNetwork
          });
          ProviderController.setProvider(chainNamespace, provider);
        } else {
          ProviderController.setProvider(chainNamespace, this.universalProvider);
        }
        ConnectorController.setConnectorId(ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT, chainNamespace);
        StorageUtil.addConnectedNamespace(chainNamespace);
        await this.syncAccount({
          address,
          chainId,
          chainNamespace
        });
      } else if (sessionNamespaces.includes(chainNamespace)) {
        this.setStatus("disconnected", chainNamespace);
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
    var _a2, _b2;
    const isActiveNamespace = params.chainNamespace === ChainController.state.activeChain;
    const networkOfChain = ChainController.getCaipNetworkByNamespace(params.chainNamespace, params.chainId);
    const { address, chainId, chainNamespace } = params;
    const { chainId: activeChainId } = StorageUtil.getActiveNetworkProps();
    const chainIdToUse = chainId || activeChainId;
    const isUnsupportedNetwork = ((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.name) === ConstantsUtil$3.UNSUPPORTED_NETWORK_NAME;
    const shouldSupportAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", chainNamespace);
    this.setStatus("connected", chainNamespace);
    if (isUnsupportedNetwork && !shouldSupportAllNetworks) {
      return;
    }
    if (chainIdToUse) {
      let caipNetwork = this.getCaipNetworks().find((n3) => n3.id.toString() === chainIdToUse.toString());
      let fallbackCaipNetwork = this.getCaipNetworks().find((n3) => n3.chainNamespace === chainNamespace);
      if (!shouldSupportAllNetworks && !caipNetwork && !fallbackCaipNetwork) {
        const caipNetworkIds = this.getApprovedCaipNetworkIds() || [];
        const caipNetworkId = caipNetworkIds.find((id) => {
          var _a3;
          return ((_a3 = ParseUtil.parseCaipNetworkId(id)) == null ? void 0 : _a3.chainId) === chainIdToUse.toString();
        });
        const fallBackCaipNetworkId = caipNetworkIds.find((id) => {
          var _a3;
          return ((_a3 = ParseUtil.parseCaipNetworkId(id)) == null ? void 0 : _a3.chainNamespace) === chainNamespace;
        });
        caipNetwork = this.getCaipNetworks().find((n3) => n3.caipNetworkId === caipNetworkId);
        fallbackCaipNetwork = this.getCaipNetworks().find((n3) => n3.caipNetworkId === fallBackCaipNetworkId || // This is a workaround used in Solana network to support deprecated caipNetworkId
        "deprecatedCaipNetworkId" in n3 && n3.deprecatedCaipNetworkId === fallBackCaipNetworkId);
      }
      const network = caipNetwork || fallbackCaipNetwork;
      if ((network == null ? void 0 : network.chainNamespace) === ChainController.state.activeChain) {
        if (OptionsController.state.enableNetworkSwitch && !OptionsController.state.allowUnsupportedChain && ((_b2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _b2.name) === ConstantsUtil$3.UNSUPPORTED_NETWORK_NAME) {
          ChainController.showUnsupportedChainUI();
        } else {
          this.setCaipNetwork(network);
        }
      } else if (!isActiveNamespace) {
        if (networkOfChain) {
          this.setCaipNetworkOfNamespace(networkOfChain, chainNamespace);
        }
      }
      this.syncConnectedWalletInfo(chainNamespace);
      const currentAddress = this.getAddress(chainNamespace);
      if (!HelpersUtil.isLowerCaseMatch(address, currentAddress)) {
        this.syncAccountInfo(address, network == null ? void 0 : network.id, chainNamespace);
      }
      if (isActiveNamespace) {
        await this.syncBalance({ address, chainId: network == null ? void 0 : network.id, chainNamespace });
      } else {
        await this.syncBalance({ address, chainId: networkOfChain == null ? void 0 : networkOfChain.id, chainNamespace });
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
    const newChainId = chainId || (caipAddress == null ? void 0 : caipAddress.split(":")[1]);
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
      } else {
        this.setProfileName(null, chainNamespace);
      }
    } catch {
      this.setProfileName(null, chainNamespace);
    }
  }
  syncConnectedWalletInfo(chainNamespace) {
    var _a2;
    const connectorId = ConnectorController.getConnectorId(chainNamespace);
    const providerType = ProviderController.getProviderId(chainNamespace);
    if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_ANNOUNCED || providerType === ConstantsUtil$1.CONNECTOR_TYPE_INJECTED) {
      if (connectorId) {
        const connectors = this.getConnectors();
        const connector = connectors.find((c2) => {
          var _a3, _b2;
          const isConnectorId = c2.id === connectorId;
          const isRdns = ((_a3 = c2.info) == null ? void 0 : _a3.rdns) === connectorId;
          const hasMultiChainConnector = (_b2 = c2.connectors) == null ? void 0 : _b2.some((_c2) => {
            var _a4;
            return _c2.id === connectorId || ((_a4 = _c2.info) == null ? void 0 : _a4.rdns) === connectorId;
          });
          return isConnectorId || isRdns || Boolean(hasMultiChainConnector);
        });
        if (connector) {
          const { info, name, imageUrl } = connector;
          const icon = imageUrl || this.getConnectorImage(connector);
          this.setConnectedWalletInfo({ name, icon, ...info }, chainNamespace);
        }
      }
    } else if (providerType === ConstantsUtil$1.CONNECTOR_TYPE_WALLET_CONNECT) {
      const provider = ProviderController.getProvider(chainNamespace);
      if (provider == null ? void 0 : provider.session) {
        this.setConnectedWalletInfo({
          ...provider.session.peer.metadata,
          name: provider.session.peer.metadata.name,
          icon: (_a2 = provider.session.peer.metadata.icons) == null ? void 0 : _a2[0]
        }, chainNamespace);
      }
    } else if (connectorId) {
      if (connectorId === ConstantsUtil$3.CONNECTOR_ID.COINBASE_SDK || connectorId === ConstantsUtil$3.CONNECTOR_ID.COINBASE) {
        const connector = this.getConnectors().find((c2) => c2.id === connectorId);
        const name = (connector == null ? void 0 : connector.name) || "Coinbase Wallet";
        const icon = (connector == null ? void 0 : connector.imageUrl) || this.getConnectorImage(connector);
        const info = connector == null ? void 0 : connector.info;
        this.setConnectedWalletInfo({
          ...info,
          name,
          icon
        }, chainNamespace);
      }
    }
  }
  async syncBalance(params) {
    const caipNetwork = NetworkUtil$1.getNetworksByNamespace(this.getCaipNetworks(), params.chainNamespace).find((n3) => {
      var _a2;
      return n3.id.toString() === ((_a2 = params.chainId) == null ? void 0 : _a2.toString());
    });
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
    return void 0;
  }
  // -- Universal Provider ---------------------------------------------------
  async initializeUniversalAdapter() {
    var _a2, _b2, _c2, _d, _e2, _f2, _g, _h, _i2, _j;
    const logger = LoggerUtil.createLogger((error, ...args) => {
      if (error) {
        this.handleAlertError(error);
      }
      console.error(...args);
    });
    const universalProviderOptions = {
      projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
      metadata: {
        name: ((_b2 = this.options) == null ? void 0 : _b2.metadata) ? (_c2 = this.options) == null ? void 0 : _c2.metadata.name : "",
        description: ((_d = this.options) == null ? void 0 : _d.metadata) ? (_e2 = this.options) == null ? void 0 : _e2.metadata.description : "",
        url: ((_f2 = this.options) == null ? void 0 : _f2.metadata) ? (_g = this.options) == null ? void 0 : _g.metadata.url : "",
        icons: ((_h = this.options) == null ? void 0 : _h.metadata) ? (_i2 = this.options) == null ? void 0 : _i2.metadata.icons : [""]
      },
      logger
    };
    OptionsController.setManualWCControl(Boolean((_j = this.options) == null ? void 0 : _j.manualWCControl));
    this.universalProvider = this.options.universalProvider ?? await N$1.init(universalProviderOptions);
    if (OptionsController.state.enableReconnect === false && this.universalProvider.session) {
      await this.universalProvider.disconnect();
    }
    this.listenWalletConnect();
  }
  listenWalletConnect() {
    if (this.universalProvider) {
      this.chainNamespaces.forEach((namespace) => {
        WcHelpersUtil.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace,
          onDisplayUri: (uri) => {
            ConnectionController.setUri(uri);
          },
          onConnect: (accounts) => {
            const { address } = CoreHelperUtil.getAccount(accounts[0]);
            ConnectionController.finalizeWcConnection(address);
          },
          onDisconnect: () => {
            if (ChainController.state.noAdapters) {
              this.resetAccount(namespace);
            }
            ConnectionController.resetWcConnection();
          },
          onChainChanged: (chainId) => {
            const activeNamespace = ChainController.state.activeChain;
            const isCurrentConnectorWalletConnect = activeNamespace && ConnectorController.state.activeConnectorIds[activeNamespace] === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
            if (activeNamespace === namespace && (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
              const caipNetwork = this.getCaipNetworks().find((n3) => n3.id.toString() === chainId.toString() || n3.caipNetworkId.toString() === chainId.toString());
              const currentCaipNetwork = this.getCaipNetwork();
              if (!caipNetwork) {
                this.setUnsupportedNetwork(chainId);
                return;
              }
              if ((currentCaipNetwork == null ? void 0 : currentCaipNetwork.id.toString()) !== (caipNetwork == null ? void 0 : caipNetwork.id.toString()) && (currentCaipNetwork == null ? void 0 : currentCaipNetwork.chainNamespace) === (caipNetwork == null ? void 0 : caipNetwork.chainNamespace)) {
                this.setCaipNetwork(caipNetwork);
              }
            }
          },
          onAccountsChanged: (accounts) => {
            const activeNamespace = ChainController.state.activeChain;
            const isCurrentConnectorWalletConnect = activeNamespace && ConnectorController.state.activeConnectorIds[activeNamespace] === ConstantsUtil$3.CONNECTOR_ID.WALLET_CONNECT;
            if (activeNamespace === namespace && (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
              const account = accounts == null ? void 0 : accounts[0];
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
    var _a2;
    if (!this.universalProviderInitPromise && CoreHelperUtil.isClient() && ((_a2 = this.options) == null ? void 0 : _a2.projectId)) {
      this.universalProviderInitPromise = this.initializeUniversalAdapter();
    }
    return this.universalProviderInitPromise;
  }
  async getUniversalProvider() {
    if (!this.universalProvider) {
      try {
        await this.createUniversalProvider();
      } catch (err) {
        EventsController.sendEvent({
          type: "error",
          event: "INTERNAL_SDK_ERROR",
          properties: {
            errorType: "UniversalProviderInitError",
            errorMessage: err instanceof Error ? err.message : "Unknown",
            uncaught: false
          }
        });
        console.error("AppKit:getUniversalProvider - Cannot create provider", err);
      }
    }
    return this.universalProvider;
  }
  getDisabledCaipNetworks() {
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks.filter((network) => ChainController.isCaipNetworkDisabled(network));
  }
  // - Utils -------------------------------------------------------------------
  handleAlertError(error) {
    const matchedUniversalProviderError = Object.entries(ErrorUtil.UniversalProviderErrors).find(([, { message: message2 }]) => error.message.includes(message2));
    const [errorKey, errorValue] = matchedUniversalProviderError ?? [];
    const { message, alertErrorKey } = errorValue ?? {};
    if (errorKey && message && !this.reportedAlertErrors[errorKey]) {
      const alertError = ErrorUtil.ALERT_ERRORS[alertErrorKey];
      if (alertError) {
        AlertController.open(alertError, "error");
        this.reportedAlertErrors[errorKey] = true;
      }
    }
  }
  getAdapter(namespace) {
    var _a2;
    if (!namespace) {
      return void 0;
    }
    return (_a2 = this.chainAdapters) == null ? void 0 : _a2[namespace];
  }
  createAdapter(blueprint) {
    var _a2, _b2;
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
      projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
      networks: (_b2 = this.caipNetworks) == null ? void 0 : _b2.filter(({ chainNamespace }) => chainNamespace === namespace)
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
    if (options == null ? void 0 : options.uri) {
      ConnectionController.setUri(options.uri);
    }
    const { isSwap, isSend } = this.toModalOptions();
    if (isSwap(options)) {
      return ModalController.open({
        ...options,
        data: { swap: options.arguments }
      });
    } else if (isSend(options)) {
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
    return "";
  }
  getChainId() {
    var _a2;
    return (_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.id;
  }
  async switchNetwork(appKitNetwork, { throwOnFailure = false } = {}) {
    const network = this.getCaipNetworks().find((n3) => n3.id === appKitNetwork.id);
    if (!network) {
      AlertController.open(ErrorUtil.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
      return;
    }
    await ChainController.switchActiveNetwork(network, { throwOnFailure });
  }
  getWalletProvider() {
    return ChainController.state.activeChain ? ProviderController.state.providers[ChainController.state.activeChain] : null;
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
      AlertController.open(ConstantsUtil$3.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
      return () => void 0;
    }
    return ConnectionController.subscribe(callback);
  }
  getWalletInfo(namespace) {
    var _a2, _b2;
    if (namespace) {
      return (_b2 = (_a2 = ChainController.state.chains.get(namespace)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.connectedWalletInfo;
    }
    const accountData = ChainController.getAccountData();
    return accountData == null ? void 0 : accountData.connectedWalletInfo;
  }
  getAccount(_namespace) {
    const namespace = _namespace || ChainController.state.activeChain;
    const authConnector = ConnectorController.getAuthConnector(namespace);
    const accountState = ChainController.getAccountData(namespace);
    const activeConnectorId = StorageUtil.getConnectedConnectorId(ChainController.state.activeChain);
    const connections = ConnectionController.getConnections(namespace);
    if (!namespace) {
      throw new Error("AppKit:getAccount - namespace is required");
    }
    const allAccounts = connections.flatMap((connection) => connection.accounts.map(({ address, type, publicKey }) => CoreHelperUtil.createAccount(namespace, address, type || "eoa", publicKey)));
    if (!accountState) {
      return void 0;
    }
    return {
      allAccounts,
      caipAddress: accountState.caipAddress,
      address: CoreHelperUtil.getPlainAddress(accountState.caipAddress),
      isConnected: Boolean(accountState.caipAddress),
      status: accountState.status,
      embeddedWalletInfo: authConnector && activeConnectorId === ConstantsUtil$3.CONNECTOR_ID.AUTH ? {
        user: accountState.user ? {
          ...accountState.user,
          /*
           * Getting the username from the chain controller works well for social logins,
           * but Farcaster uses a different connection flow and doesn't emit the username via events.
           * Since the username is stored in local storage before the chain controller updates,
           * it's safe to use the local storage value here.
           */
          username: StorageUtil.getConnectedSocialUsername()
        } : void 0,
        authProvider: accountState.socialProvider || "email",
        accountType: getPreferredAccountType(namespace),
        isSmartAccountDeployed: Boolean(accountState.smartAccountDeployed)
      } : void 0
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
      ChainController.subscribeChainProp("accountState", updateVal, namespace);
    } else {
      ChainController.subscribe(updateVal);
    }
    ConnectorController.subscribe(updateVal);
  }
  subscribeNetwork(callback) {
    return ChainController.subscribe(({ activeCaipNetwork }) => {
      callback({
        caipNetwork: activeCaipNetwork,
        chainId: activeCaipNetwork == null ? void 0 : activeCaipNetwork.id,
        caipNetworkId: activeCaipNetwork == null ? void 0 : activeCaipNetwork.caipNetworkId
      });
    });
  }
  subscribeWalletInfo(callback, namespace) {
    if (namespace) {
      return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState == null ? void 0 : accountState.connectedWalletInfo), namespace);
    }
    return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState == null ? void 0 : accountState.connectedWalletInfo));
  }
  subscribeShouldUpdateToAddress(callback) {
    ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState == null ? void 0 : accountState.shouldUpdateToAddress));
  }
  subscribeCaipNetworkChange(callback) {
    ChainController.subscribeKey("activeCaipNetwork", callback);
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
    return OptionsController.subscribeKey("remoteFeatures", callback);
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
    if (!this.getCaipNetworks().find((n3) => n3.id === extendedNetwork.id)) {
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
    const networkToRemove = this.getCaipNetworks().find((n3) => n3.id === networkId);
    if (!networkToRemove) {
      return;
    }
    ChainController.removeNetwork(namespace, networkId);
  }
}
let isInitialized = false;
class AppKit extends AppKitBaseClient {
  // -- Overrides --------------------------------------------------------------
  async open(options) {
    const isConnected = ConnectorController.isConnected();
    if (!isConnected) {
      await super.open(options);
    }
  }
  async close() {
    var _a2;
    await super.close();
    if (this.options.manualWCControl) {
      const address = (_a2 = ChainController.getAccountData(this.activeChainNamespace)) == null ? void 0 : _a2.address;
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
      await __vitePreload(() => import("./basic-CMaLMYbR.js"), true ? __vite__mapDeps([11,12,1,2,13,4]) : void 0);
      await __vitePreload(() => import("./w3m-modal-CGmdZK2k.js"), true ? __vite__mapDeps([14,12,1,2,4]) : void 0);
      const isElementCreated = document.querySelector("w3m-modal");
      if (!isElementCreated) {
        const modal = document.createElement("w3m-modal");
        if (!OptionsController.state.disableAppend && !OptionsController.state.enableEmbedded) {
          document.body.insertAdjacentElement("beforeend", modal);
        }
      }
      isInitialized = true;
    }
  }
}
const PACKAGE_VERSION = "1.8.7";
function createAppKit(options) {
  return new AppKit({
    ...options,
    basic: true,
    sdkVersion: `html-core-${PACKAGE_VERSION}`
  });
}
const core = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AppKit,
  createAppKit
}, Symbol.toStringTag, { value: "Module" }));
export {
  SafeLocalStorage as $,
  ApiController as A,
  W3mFrameRpcConstants as B,
  ConnectorController as C,
  BlockchainApiController as D,
  EventsController as E,
  SwapApiUtil as F,
  AlertController as G,
  HelpersUtil as H,
  BalanceUtil as I,
  getActiveNetworkTokenAddress as J,
  subscribeKey as K,
  subscribe as L,
  ModalController as M,
  NumberUtil as N,
  OptionsController as O,
  proxy as P,
  SIWXUtil as Q,
  RouterController as R,
  SnackController as S,
  ThemeController as T,
  ConstantsUtil as U,
  initializeTheming as V,
  WalletUtil as W,
  ParseUtil as X,
  NetworkUtil$1 as Y,
  SafeLocalStorageKeys as Z,
  getActiveCaipNetwork as _,
  CoreHelperUtil as a,
  Hash as a0,
  createView as a1,
  aexists as a2,
  toBytes as a3,
  abytes as a4,
  aoutput as a5,
  clean as a6,
  createHasher as a7,
  rotr as a8,
  ahash as a9,
  bytesToHex as aa,
  isBytes as ab,
  hexToBytes as ac,
  concatBytes as ad,
  anumber as ae,
  randomBytes as af,
  core as ag,
  ConnectionController as b,
  ConstantsUtil$3 as c,
  b as d,
  css as e,
  AssetController as f,
  ConnectorUtil as g,
  AssetUtil as h,
  i,
  elementStyles as j,
  AppKitError as k,
  ErrorUtil$1 as l,
  ConstantsUtil$2 as m,
  ChainController as n,
  CaipNetworksUtil as o,
  StorageUtil as p,
  A as q,
  resetStyles as r,
  i$3 as s,
  f$1 as t,
  u$1 as u,
  vars as v,
  w,
  E as x,
  withErrorBoundary as y,
  getPreferredAccountType as z
};
