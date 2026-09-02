import { dl as le, fm as d$1, di as T, de as q, gV as getTransactionDecoder, hc as getBase64Decoder, hd as getBase58Encoder, dC as s, dy as i } from "./index-R3UC2dO4.js";
const l = Symbol("default-solana-rpcs-plugin");
function u(n) {
  return new Uint8Array(getTransactionDecoder().decode(n).messageBytes);
}
async function f({ solanaClient: r, tx: e }) {
  let t = getBase64Decoder().decode(u(e)), { value: o } = await r.rpc.getFeeForMessage(t).send();
  return o ?? 0n;
}
async function p({ solanaClient: r, tx: e, replaceRecentBlockhash: t }) {
  var _a;
  let { value: o } = await r.rpc.simulateTransaction(getBase64Decoder().decode(e), { commitment: "confirmed", encoding: "base64", sigVerify: false, replaceRecentBlockhash: t }).send();
  if ("BlockhashNotFound" === o.err && t) throw Error("Simulation failed: Blockhash not found");
  return "BlockhashNotFound" === o.err ? await p({ solanaClient: r, tx: e, replaceRecentBlockhash: true }) : { logs: o.logs ?? [], error: o.err, hasError: !!o.err, hasFunds: ((_a = o.logs) == null ? void 0 : _a.every(((r2) => !/insufficient funds/gi.test(r2) && !/insufficient lamports/gi.test(r2)))) ?? true };
}
const m = (...r) => {
  if ("undefined" == typeof Buffer) throw new s("Buffer is not defined.", void 0, i.BUFFER_NOT_DEFINED);
  return Buffer.from(...r);
};
async function d({ rpcSubscriptions: r, signature: n, timeout: e }) {
  let t = new AbortController(), o = await r.signatureNotifications(n, { commitment: "confirmed" }).subscribe({ abortSignal: t.signal }), i2 = await Promise.race([new Promise(((r2) => {
    setTimeout((() => {
      t.abort(), r2(Error("Transaction confirmation timed out"));
    }), e);
  })), new Promise((async (r2) => {
    for await (let n2 of o) {
      if (t.abort(), n2.value.err) return r2(Error("Transaction confirmation failed"));
      r2(void 0);
    }
  }))]);
  if (i2 instanceof Error) throw i2;
}
function h({ rpc: r, rpcSubscriptions: n, chain: t, blockExplorerUrl: o }) {
  let i2 = (function({ rpc: r2, rpcSubscriptions: n2 }) {
    return async (t2, o2) => new Promise((async (i3, a) => {
      try {
        let a2 = await r2.sendTransaction(m(t2).toString("base64"), { preflightCommitment: "confirmed", encoding: "base64", skipPreflight: (o2 == null ? void 0 : o2.skipPreflight) ?? false }).send();
        (o2 == null ? void 0 : o2.skipConfirmation) || await d({ rpcSubscriptions: n2, signature: a2, timeout: 1e4 }), i3({ signature: new Uint8Array(getBase58Encoder().encode(a2)) });
      } catch (r3) {
        a(r3);
      }
    }));
  })({ rpc: r, rpcSubscriptions: n });
  return { rpc: r, rpcSubscriptions: n, chain: t, blockExplorerUrl: o, sendAndConfirmTransaction: i2 };
}
function g() {
  let r = le(), n = d$1(), e = T((() => {
    let e2 = n(l), t = e2 == null ? void 0 : e2.getDefaultRpcs({ appId: r.id });
    return Object.fromEntries(["solana:mainnet", "solana:devnet", "solana:testnet"].map(((n2) => {
      let e3 = r.solanaRpcs[n2] ?? (t == null ? void 0 : t[n2]) ?? null;
      return [n2, e3 ? h({ chain: n2, rpc: e3.rpc, rpcSubscriptions: e3.rpcSubscriptions, blockExplorerUrl: e3.blockExplorerUrl ?? `https://explorer.solana.com?cluster=${n2.replace("solana:", "")}` }) : null];
    })));
  }), [r.solanaRpcs, r.id, n]);
  return q(((r2) => {
    if (!e[r2]) throw Error(`No RPC configuration found for chain ${r2}`);
    return e[r2];
  }), [e]);
}
export {
  d,
  f,
  g,
  m,
  p,
  u
};
