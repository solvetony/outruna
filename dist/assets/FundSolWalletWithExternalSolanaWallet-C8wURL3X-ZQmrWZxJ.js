import { dr as l, di as T, gI as O, eN as r, gJ as getBase58Decoder, df as d, dh as y, dz as p, gK as se$1, dl as le$1, dq as g, gL as _, dC as s, dy as i$1, gM as s$1, go as f, gN as A, gO as c, gP as o, gQ as o$1, gR as base58, gS as EventEmitter, gT as a, gU as y$1, gV as getTransactionDecoder, gW as address, gX as getTransactionEncoder, gY as transformEncoder, gZ as getStructEncoder, g_ as getU32Encoder, g$ as getU64Encoder, h0 as AccountRole, h1 as upgradeRoleToSigner, h2 as isTransactionSigner$1, eQ as G$1, h3 as pipe, h4 as findAssociatedTokenPda, h5 as getCreateAssociatedTokenIdempotentInstruction, h6 as createTransactionMessage, dF as f$1, dk as u$1, dG as S, h7 as compileTransaction, h8 as appendTransactionMessageInstruction, h9 as setTransactionMessageLifetimeUsingBlockhash, ha as setTransactionMessageFeePayerSigner, hb as getTransferInstruction } from "./index-lNx1hHWy.js";
import { F as ForwardRef } from "./CheckCircleIcon-DMEO1GcD.js";
import { u as u$2, m as m$1 } from "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import { c as c$2, n, s as s$2, t as t$1 } from "./Layouts-BlFm53ED-vFipr686.js";
import { o as o$2 } from "./ScreenHeader-CHmc4-Lu-CZnJGI29.js";
import { t } from "./FundWalletMethodHeader-G5sXf6Zt-DvfiAL11.js";
import { i as i$2 } from "./InjectedWalletIcon-DLcYOGDj-BBuK46D_.js";
import { t as t$3 } from "./index-Dq_xe9dz-msUAF_vD.js";
import { s as s$4, e as e$2, n as n$2, t as t$4 } from "./Value-tcJV9e0L-ByTgdHDk.js";
import { g as g$1, m, u, p as p$1, d as d$1, f as f$2 } from "./useSolanaRpcClient-CW-peny0-Cg0t8RZ7.js";
import { c as c$1 } from "./useGetTokenPrice-_x6xp2Po-CmIIasnY.js";
import { t as t$2 } from "./analytics-mkkvFRju-3eV9Df16.js";
import { C as C$1, e as e$1, s as s$3 } from "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
import { r as r$1 } from "./getUsdcMintAddress-DFI1hv05-Bo_W7NzI.js";
import { e } from "./getChainName-DjpPdUSc-D27InAbL.js";
import { n as n$1 } from "./formatters-BpNmT995.js";
import "./WalletIcon-BIdODEzn.js";
import "./LoadingSkeleton-U6-3yFwI-BQTcaBzt.js";
import "./useGetSolPrice-x7gfUIHJ-C3LAMCIz.js";
const i = () => {
  let { walletProxy: i2, initializeWalletProxy: a2, client: s2 } = l();
  return T((() => ({ signWithUserSigner: async ({ message: t2, targetAppId: r2 }) => {
    let n2 = i2 ?? await a2(O);
    if (!n2) throw Error("Wallet proxy not initialized");
    let o2 = await s2.getAccessToken();
    if (!o2) throw Error("User must be authenticated");
    let { signature: l2 } = await n2.signWithUserSigner({ accessToken: o2, message: t2, targetAppId: r2 });
    return { signature: l2 };
  } })), [i2, s2]);
};
const M = ["solana:mainnet", "solana:devnet", "solana:testnet"];
function P(n2) {
  return getBase58Decoder().decode(n2);
}
function U(e2, n2) {
  if (!Object.prototype.hasOwnProperty.call(e2, n2)) throw TypeError("attempted to use private field on non-instance");
  return e2;
}
var C = 0, F = "__private_" + C++ + "__implementation";
function D(e2, n2) {
  if (!Object.prototype.hasOwnProperty.call(e2, n2)) throw TypeError("attempted to use private field on non-instance");
  return e2;
}
var N = 0;
function B(e2) {
  return "__private_" + N++ + "_" + e2;
}
var x = /* @__PURE__ */ B("_address"), R = /* @__PURE__ */ B("_publicKey"), L = /* @__PURE__ */ B("_chains"), V = /* @__PURE__ */ B("_features"), k = /* @__PURE__ */ B("_label"), Q = /* @__PURE__ */ B("_icon");
class G {
  get address() {
    return D(this, x)[x];
  }
  get publicKey() {
    return D(this, R)[R].slice();
  }
  get chains() {
    return D(this, L)[L].slice();
  }
  get features() {
    return D(this, V)[V].slice();
  }
  get label() {
    return D(this, k)[k];
  }
  get icon() {
    return D(this, Q)[Q];
  }
  constructor({ address: e2, publicKey: n2, label: t2, icon: a2 }) {
    Object.defineProperty(this, x, { writable: true, value: void 0 }), Object.defineProperty(this, R, { writable: true, value: void 0 }), Object.defineProperty(this, L, { writable: true, value: void 0 }), Object.defineProperty(this, V, { writable: true, value: void 0 }), Object.defineProperty(this, k, { writable: true, value: void 0 }), Object.defineProperty(this, Q, { writable: true, value: void 0 }), D(this, x)[x] = e2, D(this, R)[R] = n2, D(this, L)[L] = M, D(this, k)[k] = t2, D(this, Q)[Q] = a2, D(this, V)[V] = ["solana:signAndSendTransaction", "solana:signTransaction", "solana:signMessage"], new.target === G && Object.freeze(this);
  }
}
function K$1(e2, n2) {
  if (!Object.prototype.hasOwnProperty.call(e2, n2)) throw TypeError("attempted to use private field on non-instance");
  return e2;
}
var J = 0;
function Y(e2) {
  return "__private_" + J++ + "_" + e2;
}
var H = /* @__PURE__ */ Y("_listeners"), Z$1 = /* @__PURE__ */ Y("_version"), q = /* @__PURE__ */ Y("_name"), z = /* @__PURE__ */ Y("_icon"), X = /* @__PURE__ */ Y("_injection"), $ = /* @__PURE__ */ Y("_isPrivyWallet"), ee = /* @__PURE__ */ Y("_accounts"), ne = /* @__PURE__ */ Y("_on"), te = /* @__PURE__ */ Y("_emit"), ae = /* @__PURE__ */ Y("_off"), ie = /* @__PURE__ */ Y("_connected"), se = /* @__PURE__ */ Y("_connect"), re = /* @__PURE__ */ Y("_disconnect"), oe = /* @__PURE__ */ Y("_signMessage"), ce = /* @__PURE__ */ Y("_signAndSendTransaction"), le = /* @__PURE__ */ Y("_signTransaction");
function de(e2, ...n2) {
  var _a;
  (_a = K$1(this, H)[H][e2]) == null ? void 0 : _a.forEach(((e3) => e3.apply(null, n2)));
}
function ue(e2, n2) {
  var _a;
  K$1(this, H)[H][e2] = (_a = K$1(this, H)[H][e2]) == null ? void 0 : _a.filter(((e3) => n2 !== e3));
}
function ge(e2, i2, s2) {
  let r2 = structuredClone(getTransactionDecoder().decode(e2)), o2 = address(i2);
  return o2 in r2.signatures && (r2.signatures[o2] = s2), new Uint8Array(getTransactionEncoder().encode(r2));
}
function pe() {
  let { isHeadlessSigning: e2, walletProxy: n2, initializeWalletProxy: t2, recoverEmbeddedWallet: a2, openModal: i$22, privy: s$22, client: r2 } = l(), { user: c2 } = se$1(), { setModalData: d2 } = g(), { signWithUserSigner: p2 } = i();
  return { signMessage: ({ message: l2, address: h, options: f$12 }) => new Promise((async (y2, A2) => {
    var _a;
    let m$12 = _(c2, h);
    if ("privy" !== (m$12 == null ? void 0 : m$12.walletClientType)) return void A2(new s("Wallet is not a Privy wallet", void 0, i$1.EMBEDDED_WALLET_NOT_FOUND));
    let { entropyId: v, entropyIdVerifier: S2 } = f(c2, m$12), O2 = s$1(m$12), E = m(l2).toString("base64");
    if (E.length < 1) return void A2(new s("Message must be a non-empty string", void 0, i$1.INVALID_MESSAGE));
    let I = async () => {
      var _a2;
      let e3;
      if (!c2) throw Error("User must be authenticated before signing with a Privy wallet");
      let i2 = await r2.getAccessToken();
      if (!i2) throw Error("User must be authenticated to use their embedded wallet.");
      let l3 = n2 ?? await t2(15e3);
      if (!l3) throw Error("Failed to initialize embedded wallet proxy.");
      if (!await a2({ address: m$12.address })) throw Error("Unable to connect to wallet");
      if (O2) {
        let n3 = await o$1(s$22, p2, { chain_type: "solana", method: "signMessage", params: { message: E, encoding: "base64" }, wallet_id: m$12.id });
        if (!n3.data || !("signature" in n3.data)) throw Error("Failed to sign message");
        e3 = n3.data.signature;
      } else {
        let { response: n3 } = await l3.rpc({ accessToken: i2, entropyId: v, entropyIdVerifier: S2, chainType: "solana", hdWalletIndex: m$12.walletIndex ?? 0, requesterAppId: (_a2 = f$12 == null ? void 0 : f$12.uiOptions) == null ? void 0 : _a2.requesterAppId, request: { method: "signMessage", params: { message: E } } });
        e3 = n3.data.signature;
      }
      return e3;
    };
    if (e2({ showWalletUIs: (_a = f$12 == null ? void 0 : f$12.uiOptions) == null ? void 0 : _a.showWalletUIs })) try {
      let e3 = await I(), n3 = new Uint8Array(m(e3, "base64"));
      y2({ signature: n3 });
    } catch (e3) {
      A2(e3);
    }
    else d2({ signMessage: { method: "solana_signMessage", data: E, confirmAndSign: I, onSuccess: (e3) => {
      y2({ signature: new Uint8Array(m(e3, "base64")) });
    }, onFailure: (e3) => {
      A2(e3);
    }, uiOptions: (f$12 == null ? void 0 : f$12.uiOptions) ?? {} }, connectWallet: { recoveryMethod: m$12.recoveryMethod, connectingWalletAddress: m$12.address, entropyId: v, entropyIdVerifier: S2, isUnifiedWallet: O2, onCompleteNavigateTo: "SignRequestScreen", onFailure: (e3) => {
      A2(new s("Failed to connect to wallet", e3, i$1.UNKNOWN_CONNECT_WALLET_ERROR));
    } } }), i$22("EmbeddedWalletConnectingScreen");
  })) };
}
function he() {
  let { isHeadlessSigning: e2, openModal: n2, privy: t2 } = l(), { setModalData: a2 } = g(), { signMessage: i$22 } = pe(), { signWithUserSigner: s$22 } = i(), { user: r2 } = se$1();
  return { signTransaction: async ({ transaction: c2, options: l2, chain: d2 = "solana:mainnet", address: p2 }) => {
    var _a;
    let h = _(r2, p2);
    if ("privy" !== (h == null ? void 0 : h.walletClientType)) throw new s("Wallet is not a Privy wallet", void 0, i$1.EMBEDDED_WALLET_NOT_FOUND);
    let f$12 = s$1(h);
    async function y2(e3) {
      if (f$12) {
        let n4 = await o$1(t2, s$22, { chain_type: "solana", method: "signTransaction", params: { transaction: y$1.base64.fromBytes(e3), encoding: "base64" }, wallet_id: h.id });
        if (n4.data && "signed_transaction" in n4.data && null != n4.data.signed_transaction) return { signedTransaction: new Uint8Array(y$1.base64.toBytes(n4.data.signed_transaction)) };
        throw Error("Failed to sign transaction");
      }
      let { signature: n3 } = await i$22({ message: u(e3), address: p2, options: { ...l2, uiOptions: { ...l2 == null ? void 0 : l2.uiOptions, showWalletUIs: false } } });
      return { signedTransaction: ge(e3, p2, n3) };
    }
    return e2({ showWalletUIs: (_a = l2 == null ? void 0 : l2.uiOptions) == null ? void 0 : _a.showWalletUIs }) ? y2(c2) : new Promise((async (e3, t3) => {
      let { entropyId: i2, entropyIdVerifier: s$12 } = f(r2, h);
      function o2(e4) {
        return (n3) => {
          t3(n3 instanceof s ? n3 : new s("Failed to connect to wallet", n3, e4));
        };
      }
      let u2 = { account: h, transaction: new Uint8Array(c2), chain: d2, signOnly: true, uiOptions: (l2 == null ? void 0 : l2.uiOptions) || {}, onConfirm: y2, onSuccess: e3, onFailure: o2(i$1.TRANSACTION_FAILURE) };
      a2({ connectWallet: { recoveryMethod: h.recoveryMethod, connectingWalletAddress: h.address, entropyId: i2, entropyIdVerifier: s$12, isUnifiedWallet: f$12, onCompleteNavigateTo: "StandardSignAndSendTransactionScreen", onFailure: o2(i$1.UNKNOWN_CONNECT_WALLET_ERROR) }, standardSignAndSendTransaction: u2 }), n2("EmbeddedWalletConnectingScreen");
    }));
  } };
}
let fe = new class extends EventEmitter {
  setImplementation(e2) {
    U(this, F)[F] = e2;
  }
  async signMessage(e2) {
    return U(this, F)[F].signMessage(e2);
  }
  async signAndSendTransaction(e2) {
    return U(this, F)[F].signAndSendTransaction(e2);
  }
  async signTransaction(e2) {
    return U(this, F)[F].signTransaction(e2);
  }
  constructor(e2) {
    super(), Object.defineProperty(this, F, { writable: true, value: void 0 }), U(this, F)[F] = e2;
  }
}({ signTransaction: a("signTransaction was not injected"), signAndSendTransaction: a("signAndSendTransaction was not injected"), signMessage: a("signMessage was not injected") }), we = new class {
  get version() {
    return K$1(this, Z$1)[Z$1];
  }
  get name() {
    return K$1(this, q)[q];
  }
  get icon() {
    return K$1(this, z)[z];
  }
  get chains() {
    return M.slice();
  }
  get features() {
    return { "standard:connect": { version: "1.0.0", connect: K$1(this, se)[se] }, "standard:disconnect": { version: "1.0.0", disconnect: K$1(this, re)[re] }, "standard:events": { version: "1.0.0", on: K$1(this, ne)[ne] }, "solana:signAndSendTransaction": { version: "1.0.0", supportedTransactionVersions: ["legacy", 0], signAndSendTransaction: K$1(this, ce)[ce] }, "solana:signTransaction": { version: "1.0.0", supportedTransactionVersions: ["legacy", 0], signTransaction: K$1(this, le)[le] }, "solana:signMessage": { version: "1.0.0", signMessage: K$1(this, oe)[oe] }, "privy:": { privy: { signMessage: K$1(this, X)[X].signMessage, signTransaction: K$1(this, X)[X].signTransaction, signAndSendTransaction: K$1(this, X)[X].signAndSendTransaction } } };
  }
  get accounts() {
    return K$1(this, ee)[ee].slice();
  }
  get isPrivyWallet() {
    return K$1(this, $)[$];
  }
  constructor({ name: e2, icon: n2, version: t2, injection: a2, wallets: i2 }) {
    Object.defineProperty(this, te, { value: de }), Object.defineProperty(this, ae, { value: ue }), Object.defineProperty(this, H, { writable: true, value: void 0 }), Object.defineProperty(this, Z$1, { writable: true, value: void 0 }), Object.defineProperty(this, q, { writable: true, value: void 0 }), Object.defineProperty(this, z, { writable: true, value: void 0 }), Object.defineProperty(this, X, { writable: true, value: void 0 }), Object.defineProperty(this, $, { writable: true, value: void 0 }), Object.defineProperty(this, ee, { writable: true, value: void 0 }), Object.defineProperty(this, ne, { writable: true, value: void 0 }), Object.defineProperty(this, ie, { writable: true, value: void 0 }), Object.defineProperty(this, se, { writable: true, value: void 0 }), Object.defineProperty(this, re, { writable: true, value: void 0 }), Object.defineProperty(this, oe, { writable: true, value: void 0 }), Object.defineProperty(this, ce, { writable: true, value: void 0 }), Object.defineProperty(this, le, { writable: true, value: void 0 }), K$1(this, H)[H] = {}, K$1(this, ne)[ne] = (e3, n3) => {
      var _a;
      return ((_a = K$1(this, H)[H][e3]) == null ? void 0 : _a.push(n3)) || (K$1(this, H)[H][e3] = [n3]), () => K$1(this, ae)[ae](e3, n3);
    }, K$1(this, ie)[ie] = (e3) => {
      null != e3 && (K$1(this, ee)[ee] = e3.map((({ address: e4 }) => new G({ address: e4, publicKey: base58.decode(e4) })))), K$1(this, te)[te]("change", { accounts: this.accounts });
    }, K$1(this, se)[se] = async () => (K$1(this, te)[te]("change", { accounts: this.accounts }), { accounts: this.accounts }), K$1(this, re)[re] = async () => {
      K$1(this, te)[te]("change", { accounts: this.accounts });
    }, K$1(this, oe)[oe] = async (...e3) => {
      let n3 = [];
      for (let { account: t3, ...a3 } of e3) {
        let { signature: e4 } = await K$1(this, X)[X].signMessage({ ...a3, address: t3.address });
        n3.push({ signedMessage: a3.message, signature: e4 });
      }
      return n3;
    }, K$1(this, ce)[ce] = async (...e3) => {
      let n3 = [];
      for (let t3 of e3) {
        let { signature: e4 } = await K$1(this, X)[X].signAndSendTransaction({ ...t3, transaction: t3.transaction, address: t3.account.address, chain: t3.chain || "solana:mainnet", options: t3.options });
        n3.push({ signature: e4 });
      }
      return n3;
    }, K$1(this, le)[le] = async (...e3) => {
      let n3 = [];
      for (let { transaction: t3, account: a3, options: i3, chain: s2 } of e3) {
        let { signedTransaction: e4 } = await K$1(this, X)[X].signTransaction({ transaction: t3, address: a3.address, chain: s2 || "solana:mainnet", options: i3 });
        n3.push({ signedTransaction: e4 });
      }
      return n3;
    }, K$1(this, q)[q] = e2, K$1(this, z)[z] = n2, K$1(this, Z$1)[Z$1] = t2, K$1(this, X)[X] = a2, K$1(this, ee)[ee] = [], K$1(this, $)[$] = true, a2.on("accountChanged", K$1(this, ie)[ie], this), K$1(this, ie)[ie](i2);
  }
}({ name: "Privy", version: "1.0.0", icon: "data:image/png;base64,AAABAAEAFBQAAAAAIABlAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAUAAAAFAgGAAAAjYkdDQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAQVJREFUeJxiYMANZIC4E4ivAPFPIP4FxDeAuB+IlfDowwBMQFwJxF+B+D8O/AOI66Bq8QJGIF6ExyB0vAqImfEZmEeCYTDcgMswPiB+T4aB34FYApuBsWQYBsP52AycToGBK7EZuJECAw9jM3AVBQbuwWZgIwUGTsZmoDkFBnpiMxAEjpJh2FV8iVsbiD+TYBgoDVrgMgwGnID4HRGGgTKBGyHDYEAaiBdCSxh0g/5AU4Q8sYYhAzEgjoGmABBOgFo2eACowFABYn0oVgViAVINkQTiZUD8DIj/ATF6GILEXgLxCiCWIsZAbiAuBeKtQHwHiEHJ6C8UfwHie0C8E4jLoWpRAAAAAP//rcbhsQAAAAZJREFUAwBYFs3VKJ0cuQAAAABJRU5ErkJggg==", wallets: [], injection: fe });
function ye() {
  let { ready: e2 } = p(), { user: n2 } = se$1(), { signMessage: t2 } = pe(), { signTransaction: a2 } = he(), { signAndSendTransaction: r2 } = (function() {
    let e3 = le$1(), { isHeadlessSigning: n3, openModal: t3, privy: a3 } = l(), { setModalData: i$22 } = g(), { signTransaction: s$22 } = he(), r3 = g$1(), { user: c2 } = se$1(), { signWithUserSigner: d3 } = i();
    return { signAndSendTransaction: async ({ transaction: l2, address: p2, chain: h = "solana:mainnet", options: f$12 }) => {
      var _a;
      let y2 = _(c2, p2);
      if ("privy" !== (y2 == null ? void 0 : y2.walletClientType)) throw new s("Wallet is not a Privy wallet", void 0, i$1.EMBEDDED_WALLET_NOT_FOUND);
      let A$1 = s$1(y2);
      async function v(e4) {
        let n4 = (f$12 == null ? void 0 : f$12.skipSimulation) ? { "x-privy-skip-simulation": "true" } : void 0;
        if (f$12 == null ? void 0 : f$12.sponsor) return await (async (e5) => {
          if (!A$1) throw new s("Sponsoring transactions is only supported for wallets on the TEE stack", i$1.INVALID_DATA);
          let t5 = await o$1(a3, d3, { chain_type: "solana", method: "signAndSendTransaction", sponsor: true, params: { transaction: m(e5).toString("base64"), encoding: "base64" }, caip2: `solana:${(await r3(h).rpc.getGenesisHash().send()).substring(0, 32)}`, wallet_id: y2.id, optimistic_broadcast: (f$12 == null ? void 0 : f$12.optimisticBroadcast) ?? false, headers: n4 });
          if (t5.data && "hash" in t5.data) return { signature: base58.decode(t5.data.hash) };
          throw Error("Failed to sign and send transaction");
        })(e4);
        let { signedTransaction: t4 } = await s$22({ transaction: e4, address: p2, chain: h, options: { ...f$12, uiOptions: { ...f$12 == null ? void 0 : f$12.uiOptions, showWalletUIs: false } } }), { signature: i2 } = await r3(h).sendAndConfirmTransaction(t4, { skipPreflight: f$12 == null ? void 0 : f$12.skipSimulation, skipConfirmation: f$12 == null ? void 0 : f$12.optimisticBroadcast });
        return { signature: i2 };
      }
      return n3({ showWalletUIs: (_a = f$12 == null ? void 0 : f$12.uiOptions) == null ? void 0 : _a.showWalletUIs }) ? v(l2) : new Promise((async (n4, a4) => {
        let s$12, r4, { entropyId: o2, entropyIdVerifier: d4 } = f(c2, y2);
        function u2(e4) {
          return (n5) => {
            a4(n5 instanceof s ? n5 : new s("Failed to connect to wallet", n5, e4));
          };
        }
        let g2 = { account: y2, transaction: new Uint8Array(l2), chain: h, signOnly: false, uiOptions: (f$12 == null ? void 0 : f$12.uiOptions) || {}, onConfirm: v, onSuccess: n4, onFailure: u2(i$1.TRANSACTION_FAILURE), isSponsored: !!(f$12 == null ? void 0 : f$12.sponsor) }, m2 = { recoveryMethod: y2.recoveryMethod, connectingWalletAddress: y2.address, entropyId: o2, entropyIdVerifier: d4, isUnifiedWallet: A$1, onCompleteNavigateTo: "StandardSignAndSendTransactionScreen", onFailure: u2(i$1.UNKNOWN_CONNECT_WALLET_ERROR) };
        e3.fundingConfig && (s$12 = A({ address: p2, appConfig: e3, methodScreen: "FundingMethodSelectionScreen", fundWalletConfig: { ...f$12, asset: "native-currency", chain: h }, externalSolanaFundingScreen: "FundSolWalletWithExternalSolanaWallet" }), r4 = { amount: e3.fundingConfig.defaultRecommendedAmount, asset: "SOL", chain: h, destinationAddress: p2, afterSuccessScreen: "StandardSignAndSendTransactionScreen", sourceWalletData: void 0 }), i$22({ connectWallet: m2, standardSignAndSendTransaction: g2, funding: s$12, solanaFundingData: r4 }), t3("EmbeddedWalletConnectingScreen");
      }));
    } };
  })(), c$12 = T((() => {
    let e3 = [...c(n2).sort(((e4, n3) => (e4.walletIndex ?? 0) - (n3.walletIndex ?? 0)))], t3 = o(n2);
    return t3.length ? [...e3, ...t3] : e3;
  }), [n2]), d2 = T((() => ({ signMessage: async ({ message: e3, address: n3, options: a3 }) => await t2({ message: e3, address: n3, options: a3 }), signTransaction: async ({ transaction: e3, address: n3, chain: t3, options: i2 }) => await a2({ transaction: e3, address: n3, chain: t3, options: i2 }), async signAndSendTransaction({ transaction: e3, address: n3, chain: t3, options: a3 }) {
    let { signature: i2 } = await r2({ transaction: e3, address: n3, chain: t3, options: a3 });
    return { signature: i2 };
  } })), [t2, a2, r2]);
  return y((() => {
    fe == null ? void 0 : fe.setImplementation(d2);
  }), [d2]), y((() => {
    var n3;
    !e2 || (n3 = we.accounts).length === c$12.length && n3.every(((e3, n4) => {
      var _a;
      return e3.address === ((_a = c$12[n4]) == null ? void 0 : _a.address);
    })) || (fe == null ? void 0 : fe.emit("accountChanged", c$12));
  }), [e2, c$12]), { ready: e2, wallet: we };
}
function Ae() {
  let { client: e2 } = l(), { ready: n2, wallet: t2 } = ye(), [a2, i2] = d([]), [o2, c2] = d([]);
  return y((() => {
    let e3 = [t2, ...a2.filter(((e4) => "solana" === e4.chainType && !!e4.wallet.features)).map(((e4) => e4.wallet))];
    c2(e3);
    let n3 = a2.flatMap(((n4) => {
      let t3 = () => c2([...e3]);
      return n4.on("walletsUpdated", t3), { connector: n4, off: t3 };
    })), i3 = e3.map(((n4) => {
      var _a;
      return (_a = n4.features["standard:events"]) == null ? void 0 : _a.on("change", (() => {
        c2([...e3]);
      }));
    }));
    return () => {
      i3.forEach(((e4) => e4 == null ? void 0 : e4())), n3.forEach((({ connector: e4, off: n4 }) => e4.off("walletsUpdated", n4)));
    };
  }), [a2]), y((() => {
    var _a, _b;
    i2(((_a = e2.connectors) == null ? void 0 : _a.walletConnectors.filter(((e3) => "solana" === e3.chainType))) ?? []);
    let n3 = () => {
      var _a2;
      i2(((_a2 = e2.connectors) == null ? void 0 : _a2.walletConnectors.filter(((e3) => "solana" === e3.chainType))) ?? []);
    };
    return (_b = e2.connectors) == null ? void 0 : _b.on("connectorInitialized", n3), () => {
      var _a2;
      (_a2 = e2.connectors) == null ? void 0 : _a2.off("connectorInitialized", n3);
    };
  }), [n2, e2.connectors]), { ready: n2, wallets: o2 };
}
function me() {
  let { ready: e2, wallets: n2 } = Ae();
  return { ready: e2, wallets: T((() => n2.flatMap(((e3) => e3.accounts.map(((n3) => new r({ wallet: e3, account: n3 })))))), [n2]) };
}
var SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";
function expectAddress(value) {
  if (!value) {
    throw new Error("Expected a Address.");
  }
  if (typeof value === "object" && "address" in value) {
    return value.address;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}
function getAccountMetaFactory(programAddress, optionalAccountStrategy) {
  return (account) => {
    if (!account.value) {
      return;
    }
    const writableRole = account.isWritable ? AccountRole.WRITABLE : AccountRole.READONLY;
    return Object.freeze({
      address: expectAddress(account.value),
      role: isTransactionSigner(account.value) ? upgradeRoleToSigner(writableRole) : writableRole,
      ...isTransactionSigner(account.value) ? { signer: account.value } : {}
    });
  };
}
function isTransactionSigner(value) {
  return !!value && typeof value === "object" && "address" in value && isTransactionSigner$1(value);
}
var TRANSFER_SOL_DISCRIMINATOR = 2;
function getTransferSolInstructionDataEncoder() {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", getU32Encoder()],
      ["amount", getU64Encoder()]
    ]),
    (value) => ({ ...value, discriminator: TRANSFER_SOL_DISCRIMINATOR })
  );
}
function getTransferSolInstruction(input, config) {
  const programAddress = SYSTEM_PROGRAM_ADDRESS;
  const originalAccounts = {
    source: { value: input.source ?? null, isWritable: true },
    destination: { value: input.destination ?? null, isWritable: true }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const getAccountMeta = getAccountMetaFactory();
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.source),
      getAccountMeta(accounts.destination)
    ],
    data: getTransferSolInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function K({ rows: a2 }) {
  return u$1(t$4, { children: a2.filter(((t2) => !!t2)).map(((a3, n2) => null != a3.value || a3.isLoading ? /* @__PURE__ */ u$1(s$4, { children: [/* @__PURE__ */ u$1(e$2, { children: a3.label }), /* @__PURE__ */ u$1(n$2, { $isLoading: a3.isLoading, children: a3.value })] }, n2) : null)) });
}
function Z(t2) {
  return BigInt(Math.floor(1e9 * parseFloat(t2)));
}
function tt(t2) {
  return +et.format(parseFloat(t2.toString()) / 1e9);
}
let et = Intl.NumberFormat(void 0, { maximumFractionDigits: 8 });
async function at({ tx: t2, solanaClient: e2, amount: a2, asset: n2, tokenPrice: o2 }) {
  if (!t2) return null;
  if ("SOL" === n2 && o2) {
    let n3 = Z(a2), r2 = C$1(n3, o2), i2 = await f$2({ solanaClient: e2, tx: t2 });
    return { amountInUsd: r2, feeInUsd: o2 ? C$1(i2, o2) : void 0, totalInUsd: C$1(n3 + i2, o2) };
  }
  if ("USDC" === n2 && o2) {
    let n3 = "$" + a2, r2 = await f$2({ solanaClient: e2, tx: t2 }), i2 = (function(t3, e3) {
      let a3 = parseFloat(t3.toString()) / s$3 * e3;
      return a3 < 0.01 ? 0 : a3;
    })(r2, o2);
    return { amountInUsd: n3, feeInUsd: C$1(r2, o2), totalInUsd: "$" + (parseFloat(a2) + i2).toFixed(2) };
  }
  if ("SOL" === n2) {
    let n3 = Z(a2), o3 = await f$2({ solanaClient: e2, tx: t2 });
    return { amountInSol: a2 + " SOL", feeInSol: tt(o3) + " SOL", totalInSol: tt(n3 + o3) + " SOL" };
  }
  return { amountInUsdc: a2 + " USDC", feeInSol: tt(await f$2({ solanaClient: e2, tx: t2 })) + " SOL" };
}
const nt = { component: function() {
  let v = le$1(), { closePrivyModal: j, createAnalyticsEvent: I } = l(), { data: w, setModalData: V2, navigate: _2 } = g(), { wallets: tt2 } = me(), [et2, nt2] = d("preparing"), [ot, rt] = d(), [it, st] = d(), [lt, mt] = d();
  if (!(w == null ? void 0 : w.solanaFundingData)) throw Error("Funding config is missing");
  if (!w.solanaFundingData.sourceWalletData) throw Error("Funding config is missing source wallet data");
  let { amount: ct, asset: ut, chain: dt, sourceWalletData: pt, destinationAddress: ft, afterSuccessScreen: gt } = w.solanaFundingData, ht = tt2.find(((t2) => t2.address === pt.address && G$1(pt.walletClientType) === G$1(t2.standardWallet.name))), vt = g$1()(dt), { tokenPrice: jt, isTokenPriceLoading: It } = c$1("solana");
  return y((() => {
    if ("preparing" !== et2 || It || !ht) return;
    let t2 = "SOL" === ut ? Z(ct) : (function(t3) {
      return BigInt(Math.floor(1e6 * parseFloat(t3)));
    })(ct);
    st({ amount: ("SOL" === ut && jt ? C$1(t2, jt) : ct) ?? ct }), ("SOL" === ut ? (async function({ solanaClient: t3, source: e2, destination: a2, amountInLamports: n2 }) {
      let { value: o2 } = await t3.rpc.getLatestBlockhash().send(), r2 = { address: e2 }, i2 = pipe(createTransactionMessage({ version: 0 }), ((t4) => setTransactionMessageFeePayerSigner(r2, t4)), ((t4) => setTransactionMessageLifetimeUsingBlockhash(o2, t4)), ((t4) => appendTransactionMessageInstruction(getTransferSolInstruction({ amount: n2, source: r2, destination: a2 }), t4)), ((t4) => compileTransaction(t4)));
      return new Uint8Array(getTransactionEncoder().encode(i2));
    })({ solanaClient: vt, source: ht.address, destination: ft, amountInLamports: t2 }) : (async function({ solanaClient: t3, source: e2, destination: a2, amountInBaseUnits: n2 }) {
      let o2 = r$1(t3.chain), { value: r2 } = await t3.rpc.getLatestBlockhash().send(), i2 = { address: e2 }, [s2] = await findAssociatedTokenPda({ mint: o2, owner: e2, tokenProgram: e$1 }), [l2] = await findAssociatedTokenPda({ mint: o2, owner: a2, tokenProgram: e$1 }), [m2, c2] = await Promise.all([t3.rpc.getAccountInfo(s2, { commitment: "confirmed", encoding: "jsonParsed" }).send().catch((() => null)), t3.rpc.getAccountInfo(l2, { commitment: "confirmed", encoding: "jsonParsed" }).send().catch((() => null))]);
      if (!(m2 == null ? void 0 : m2.value)) throw Error(`Source token account does not exist for address: ${e2}`);
      let u2 = getCreateAssociatedTokenIdempotentInstruction({ payer: i2, ata: l2, owner: a2, mint: o2 }), d2 = pipe(createTransactionMessage({ version: 0 }), ((t4) => setTransactionMessageFeePayerSigner(i2, t4)), ((t4) => setTransactionMessageLifetimeUsingBlockhash(r2, t4)), ((t4) => (c2 == null ? void 0 : c2.value) ? t4 : appendTransactionMessageInstruction(u2, t4)), ((t4) => appendTransactionMessageInstruction(getTransferInstruction({ source: s2, destination: l2, authority: i2, amount: n2 }), t4)), ((t4) => compileTransaction(t4)));
      return new Uint8Array(getTransactionEncoder().encode(d2));
    })({ solanaClient: vt, source: ht.address, destination: ft, amountInBaseUnits: t2 })).then(rt).catch(((t3) => {
      nt2("error"), mt(t3);
    }));
  }), [et2, ct, ut, dt, ht, ft, It, jt]), y((() => {
    "preparing" === et2 && ot && at({ tx: ot, solanaClient: vt, amount: ct, asset: ut, tokenPrice: jt }).then(((t2) => {
      nt2("loaded"), st({ amount: (t2 == null ? void 0 : t2.amountInUsd) ?? (t2 == null ? void 0 : t2.amountInUsdc) ?? (t2 == null ? void 0 : t2.amountInSol) ?? ct, fee: (t2 == null ? void 0 : t2.feeInUsd) ?? (t2 == null ? void 0 : t2.feeInSol), total: (t2 == null ? void 0 : t2.totalInUsd) ?? (t2 == null ? void 0 : t2.totalInSol) });
    })).catch(((t2) => {
      nt2("error"), mt(t2);
    }));
  }), [ot, ct, ut, et2, jt]), y((() => {
    "error" === et2 && lt && (V2({ errorModalData: { error: lt, previousScreen: "FundSolWalletWithExternalSolanaWallet" }, solanaFundingData: w.solanaFundingData }), _2("ErrorScreen", false));
  }), [et2, _2]), y((() => {
    if ("success" !== et2) return;
    let t2 = setTimeout(gt ? () => _2(gt) : j, f$1);
    return () => clearTimeout(t2);
  }), [et2]), /* @__PURE__ */ u$1(S, "success" === et2 ? { children: [/* @__PURE__ */ u$1(t, {}), /* @__PURE__ */ u$1(c$2, {}), /* @__PURE__ */ u$1(n, { children: [/* @__PURE__ */ u$1(ForwardRef, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ u$1(o$2, { title: "Success!", description: `You’ve successfully added ${ct} ${ut} to your ${v.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ u$1(s$2, {}), /* @__PURE__ */ u$1(u$2, {})] } : "preparing" === et2 || "loaded" === et2 || "sending" === et2 ? { children: [/* @__PURE__ */ u$1(t, {}), /* @__PURE__ */ u$1(t$1, { style: { marginTop: "16px" }, children: /* @__PURE__ */ u$1(i$2, { icon: ht == null ? void 0 : ht.standardWallet.icon, name: ht == null ? void 0 : ht.standardWallet.name }) }), /* @__PURE__ */ u$1(o$2, { style: { marginTop: "8px", marginBottom: "12px" }, title: "sending" === et2 && ht ? `Confirming with ${ht.standardWallet.name}` : "Confirm transaction" }), /* @__PURE__ */ u$1(K, { rows: [{ label: "Source", value: n$1(pt.address) }, { label: "Destination", value: n$1(ft) }, { label: "Network", value: e(dt) }, { label: "Amount", value: it == null ? void 0 : it.amount, isLoading: "preparing" === et2 }, { label: "Estimated fee", value: it == null ? void 0 : it.fee, isLoading: "preparing" === et2 }, { label: "Total", value: it == null ? void 0 : it.total, isLoading: "preparing" === et2 }] }), /* @__PURE__ */ u$1(m$1, { style: { marginTop: "1rem" }, loading: "preparing" === et2 || "sending" === et2, onClick: function() {
    "loaded" === et2 && ot && ht && (nt2("sending"), (async function({ transaction: t2, chain: e2, sourceWallet: a2, solanaClient: n2 }) {
      let { hasFunds: o2 } = await p$1({ solanaClient: n2, tx: t2 });
      if (!o2) throw new s(`Wallet ${n$1(a2.address)} does not have enough funds.`, void 0, i$1.INSUFFICIENT_BALANCE);
      let r2 = P((await a2.signAndSendTransaction({ transaction: t2, chain: e2 }).catch(((t3) => {
        throw new s("Transaction was rejected by the user", t3, i$1.TRANSACTION_FAILURE);
      }))).signature);
      return await d$1({ rpcSubscriptions: n2.rpcSubscriptions, signature: r2, timeout: 2e4 }), r2;
    })({ solanaClient: vt, transaction: ot, chain: dt, sourceWallet: ht }).then(((t2) => {
      nt2("success"), I({ eventName: t$2, payload: { provider: "external", status: "success", txHash: t2, address: ht.address, value: ct, chainType: "solana", clusterName: dt, token: ut, destinationAddress: ft, destinationValue: ct, destinationChainType: "solana", destinationClusterName: dt, destinationToken: ut } });
    })).catch(((t2) => {
      nt2("error"), mt(t2);
    })));
  }, children: "Confirm" }), /* @__PURE__ */ u$1(u$2, {})] } : { children: [/* @__PURE__ */ u$1(t, {}), /* @__PURE__ */ u$1(t$3, {}), /* @__PURE__ */ u$1("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ u$1(u$2, {})] });
} };
export {
  nt as FundSolWalletWithExternalSolanaWallet,
  nt as default
};
