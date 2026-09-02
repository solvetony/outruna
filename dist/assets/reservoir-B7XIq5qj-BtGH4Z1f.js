import { dC as s$1, dy as i$1, dh as y } from "./index-R3UC2dO4.js";
const r = 792703809, s = "11111111111111111111111111111111", n = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
let i = "0x0000000000000000000000000000000000000000";
const o = ({ appId: t, originCurrency: e, destinationCurrency: a, ...r2 }) => ({ tradeType: "EXPECTED_OUTPUT", originCurrency: e ?? i, destinationCurrency: a ?? i, referrer: `privy|${t}`, ...r2 });
let c = "https://api.relay.link", d = "https://api.testnets.relay.link";
const l = async ({ input: t, isTestnet: e }) => {
  let a = await fetch((e ? d : c) + "/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }), r2 = await a.json();
  if (!(a.ok || "string" == typeof r2.message && r2.message.startsWith("Invalid address"))) throw console.error("Relay error:", r2), Error(r2.message ?? "Error fetching quote from relay");
  return r2;
}, u = (t) => {
  var _a, _b;
  let e = (_b = (_a = t.steps[0]) == null ? void 0 : _a.items) == null ? void 0 : _b[0];
  if (e) return { from: e.data.from, to: e.data.to, value: Number(e.data.value), chainId: Number(e.data.chainId), data: e.data.data };
}, f = (t) => t.steps.flatMap(((t2) => {
  var _a;
  return ((_a = t2.items) == null ? void 0 : _a.filter(((t3) => "incomplete" === t3.status))) ?? [];
})).map(((t2) => ({ from: t2.data.from, to: t2.data.to, value: Number(t2.data.value), chainId: Number(t2.data.chainId), data: t2.data.data })));
async function p({ transactionHash: t, isTestnet: e }) {
  var _a;
  let a = await fetch((e ? d : c) + "/requests/v2?hash=" + t), r2 = await a.json();
  if (!a.ok) {
    if ("message" in r2 && "string" == typeof r2.message) throw Error(r2.message);
    throw Error("Error fetching request from relay");
  }
  return ((_a = r2.requests.at(0)) == null ? void 0 : _a.status) ?? "pending";
}
function h({ transactionHash: e, isTestnet: a, bridgingStatus: r2, setBridgingStatus: s2, onSuccess: n2, onFailure: i2 }) {
  y((() => {
    if (e && r2) {
      if (["delayed", "waiting", "pending"].includes(r2)) {
        let t = setInterval((async () => {
          try {
            let t2 = await p({ transactionHash: e, isTestnet: a });
            s2(t2);
          } catch (t2) {
            console.error(t2);
          }
        }), 1e3);
        return () => clearInterval(t);
      }
      "success" === r2 ? n2({ transactionHash: e }) : ["refund", "failure"].includes(r2) && i2({ error: new m(e, a) });
    }
  }), [r2, e, a]);
}
class m extends s$1 {
  constructor(t, e) {
    super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.", void 0, i$1.TRANSACTION_FAILURE), this.relayLink = e ? `https://testnets.relay.link/transaction/${t}` : `https://relay.link/transaction/${t}`;
  }
}
export {
  f,
  h,
  l,
  m,
  n,
  o,
  r,
  s,
  u
};
