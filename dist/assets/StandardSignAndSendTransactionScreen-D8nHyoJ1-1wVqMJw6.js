import { hN as SolanaError, hO as SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED, hP as SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND, hQ as getBase64Encoder, dq as g, dr as l, dl as le, dv as k, df as d, gP as o, gm as h, di as T, dh as y, dk as u, h3 as pipe, hR as getCompiledTransactionMessageDecoder, gJ as getBase58Decoder, gd as k$1, dG as S, du as gt, gX as getTransactionEncoder, h7 as compileTransaction, h9 as setTransactionMessageLifetimeUsingBlockhash, hS as decompileTransactionMessage } from "./index-lNx1hHWy.js";
import { t } from "./useGetSolPrice-x7gfUIHJ-C3LAMCIz.js";
import { ErrorScreenView as f } from "./ErrorScreen-DkigBJc0-B4xPbDe2.js";
import { F as ForwardRef } from "./CheckCircleIcon-DMEO1GcD.js";
import { T as T$1, u as u$2, m as m$1 } from "./ModalHeader-C1WIsRkF-oyj9j-nj.js";
import { s } from "./Layouts-BlFm53ED-vFipr686.js";
import { o as o$2 } from "./ScreenHeader-CHmc4-Lu-CZnJGI29.js";
import { s as s$1, e as e$1, n as n$1, t as t$2 } from "./Value-tcJV9e0L-ByTgdHDk.js";
import { f as f$2, S as S$1 } from "./WalletLink-BD2FWKMu-MCjY7FaA.js";
import { i as i$1 } from "./StackedContainer-B2vaEl56-mDxvrlDg.js";
import { o as oe, K } from "./TransactionErrorView-CS96Nd-U-DyPu2-xx.js";
import { t as t$1 } from "./transaction-CnfuREWo-41oAee1p.js";
import { g as g$1, u as u$1, f as f$1, p, m } from "./useSolanaRpcClient-CW-peny0-Cg0t8RZ7.js";
import { C, e, n, a, o as o$1, d as d$1, r, t as t$3 } from "./getFormattedUsdFromLamports-B6EqSEho-Dg9zEmyr.js";
import { i } from "./formatters-BpNmT995.js";
import "./reservoir-B7XIq5qj-BDktEk3h.js";
import "./safe-url-D7SRPu33-BDTGvdDK.js";
import "./ScreenLayout-b9cixoV5-DtCDBBzU.js";
import "./Screen-My4NO62A-DJWob2W6.js";
import "./index-Dq_xe9dz-msUAF_vD.js";
import "./triangle-alert-DuMEVL6B.js";
import "./createLucideIcon-BMDFWGQC.js";
import "./lock-BOsinXv-.js";
import "./LoadingSkeleton-U6-3yFwI-BQTcaBzt.js";
import "./ethers-DFE0Hz-t-BTnUwHgh.js";
import "./ErrorMessage-D8VaAP5m-fXJKPRNA.js";
import "./LabelXs-oqZNqbm_-CvkZHJmS.js";
import "./Subtitle-CV-2yKE4-DApX-XHd.js";
import "./Title-BnzYV3Is-C75aHp6u.js";
import "./Address--RvzbtOt-OvnKcGc6.js";
import "./check-B9O9qcRC.js";
import "./copy-CWKwr4tz.js";
import "./WalletInfoCard-pBDMfJDY-DvtpYTvQ.js";
import "./shared-FM0rljBt-DJ0HbPgU.js";
import "./Checkbox-BhNoOKjX-j1_iuFQW.js";
import "./ErrorBanner-CQERa7bL-CypyIUjj.js";
import "./ExclamationCircleIcon-DvuECv5d.js";
import "./WarningBanner-D5LqDt95-DRACEub-.js";
import "./ExclamationTriangleIcon-BLUqFLPf.js";
import "./ChevronDownIcon-C_qtQzfq.js";
function accountExists(account) {
  return !("exists" in account) || "exists" in account && account.exists;
}
function assertAccountsDecoded(accounts) {
  const encoded = accounts.filter((a2) => accountExists(a2) && a2.data instanceof Uint8Array);
  if (encoded.length > 0) {
    const encodedAddresses = encoded.map((a2) => a2.address);
    throw new SolanaError(SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED, {
      addresses: encodedAddresses
    });
  }
}
function parseBase64RpcAccount(address, rpcAccount) {
  if (!rpcAccount) return Object.freeze({ address, exists: false });
  const data = getBase64Encoder().encode(rpcAccount.data[0]);
  return Object.freeze({ ...parseBaseAccount(rpcAccount), address, data, exists: true });
}
function parseJsonRpcAccount(address, rpcAccount) {
  if (!rpcAccount) return Object.freeze({ address, exists: false });
  const data = rpcAccount.data.parsed.info || {};
  if (rpcAccount.data.program || rpcAccount.data.parsed.type) {
    data.parsedAccountMeta = {
      program: rpcAccount.data.program,
      type: rpcAccount.data.parsed.type
    };
  }
  return Object.freeze({ ...parseBaseAccount(rpcAccount), address, data, exists: true });
}
function parseBaseAccount(rpcAccount) {
  return Object.freeze({
    executable: rpcAccount.executable,
    lamports: rpcAccount.lamports,
    programAddress: rpcAccount.owner,
    space: rpcAccount.space
  });
}
async function fetchJsonParsedAccounts(rpc, addresses, config = {}) {
  const { abortSignal, ...rpcConfig } = config;
  const response = await rpc.getMultipleAccounts(addresses, { ...rpcConfig, encoding: "jsonParsed" }).send({ abortSignal });
  return response.value.map((account, index) => {
    return !!account && typeof account === "object" && "parsed" in account.data ? parseJsonRpcAccount(addresses[index], account) : parseBase64RpcAccount(addresses[index], account);
  });
}
function assertAccountsExist(accounts) {
  const missingAccounts = accounts.filter((a2) => !a2.exists);
  if (missingAccounts.length > 0) {
    const missingAddresses = missingAccounts.map((a2) => a2.address);
    throw new SolanaError(SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND, { addresses: missingAddresses });
  }
}
async function fetchAddressesForLookupTables(lookupTableAddresses, rpc, config) {
  if (lookupTableAddresses.length === 0) {
    return {};
  }
  const fetchedLookupTables = await fetchJsonParsedAccounts(
    rpc,
    lookupTableAddresses,
    config
  );
  assertAccountsDecoded(fetchedLookupTables);
  assertAccountsExist(fetchedLookupTables);
  return fetchedLookupTables.reduce((acc, lookup) => {
    return {
      ...acc,
      [lookup.address]: lookup.data.addresses
    };
  }, {});
}
const tt = gt.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${(t2) => t2.color ?? "var(--privy-color-accent)"};
    background-color: ${(t2) => t2.color ?? "var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
  }
`, nt = ({ instruction: e2, fees: a2, transactionInfo: r2, solPrice: o2, chain: i2 }) => /* @__PURE__ */ u(t$2, { children: [(r2 == null ? void 0 : r2.action) && /* @__PURE__ */ u(s$1, { children: [/* @__PURE__ */ u(e$1, { children: "Action" }), /* @__PURE__ */ u(n$1, { children: r2.action })] }), null != (e2 == null ? void 0 : e2.total) && /* @__PURE__ */ u(s$1, { children: [/* @__PURE__ */ u(e$1, { children: "Total" }), /* @__PURE__ */ u(n$1, { children: e2.total })] }), !(e2 == null ? void 0 : e2.total) && null != (e2 == null ? void 0 : e2.amount) && /* @__PURE__ */ u(s$1, { children: [/* @__PURE__ */ u(e$1, { children: "Total" }), /* @__PURE__ */ u(n$1, { children: /* @__PURE__ */ u(f$2, { quantities: [e2.amount, a2], tokenPrice: o2 }) })] }), /* @__PURE__ */ u(s$1, { children: [/* @__PURE__ */ u(e$1, { children: "Fees" }), /* @__PURE__ */ u(n$1, { children: /* @__PURE__ */ u(f$2, { quantities: [a2], tokenPrice: o2 }) })] }), (e2 == null ? void 0 : e2.to) && /* @__PURE__ */ u(s$1, { children: [/* @__PURE__ */ u(e$1, { children: "To" }), /* @__PURE__ */ u(n$1, { children: /* @__PURE__ */ u(S$1, { walletAddress: e2.to, chainId: i2, chainType: "solana" }) })] })] }), et = ({ fees: a2, onClose: r2, receiptHeader: o2, receiptDescription: i2, transactionInfo: s$12, solPrice: c, signOnly: l2, instruction: d2, chain: u$12 }) => /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ u(T$1, { onClose: r2 }), /* @__PURE__ */ u(i$1, { style: { marginBottom: "16px" }, children: /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u(tt, { color: "var(--privy-color-success-light)" }), /* @__PURE__ */ u(ForwardRef, { height: 38, width: 38, strokeWidth: 2, stroke: "var(--privy-color-success)" })] }) }), /* @__PURE__ */ u(o$2, { title: o2 ?? `Transaction ${l2 ? "signed" : "complete"}!`, description: i2 ?? "You're all set." }), /* @__PURE__ */ u(nt, { solPrice: c, instruction: d2, fees: a2, transactionInfo: s$12, chain: u$12 }), /* @__PURE__ */ u(k$1, {}), /* @__PURE__ */ u(at, { loading: false, onClick: r2, children: "Close" }), /* @__PURE__ */ u(s, {}), /* @__PURE__ */ u(u$2, {})] });
let at = gt(m$1)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;
async function rt(t2, n2) {
  try {
    return await t2;
  } catch {
    return n2;
  }
}
function ot(t2) {
  switch (t2) {
    case "solana:mainnet":
      return "mainnet-beta";
    case "solana:devnet":
      return "devnet";
    case "solana:testnet":
      return "testnet";
  }
}
async function it({ privyClient: t2, chain: n2, mint: e2 }) {
  let a2 = t$3[n2];
  if (!a2[e2]) {
    let r2 = await t2.getSplTokenMetadata({ mintAddress: e2, cluster: ot(n2) });
    r2 && (a2[e2] = { address: e2, symbol: r2.symbol, decimals: r2.decimals });
  }
  return a2[e2];
}
async function st({ tx: t2, solanaClient: n$12, privyClient: e$12, checkFunds: a$1 }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let r$1 = getCompiledTransactionMessageDecoder().decode(u$1(t2)), o2 = r$1.staticAccounts[0] ?? "", i2 = await f$1({ solanaClient: n$12, tx: t2 }), s2 = a$1 ? await rt(p({ solanaClient: n$12, tx: t2 })) : void 0, c = (s2 == null ? void 0 : s2.hasFunds) ?? true, l2 = {}, d2 = [], u2 = await (async function({ solanaClient: t3, message: n2 }) {
    if (!("addressTableLookups" in n2) || !n2.addressTableLookups) return [...n2.staticAccounts];
    let e2 = n2.addressTableLookups.map(((t4) => t4.lookupTableAddress)), a2 = await fetchAddressesForLookupTables(e2, t3.rpc), r2 = e2.map(((t4, e3) => {
      var _a2, _b2;
      return [...((_a2 = n2.addressTableLookups[e3]) == null ? void 0 : _a2.writableIndexes.map(((n3) => {
        var _a3;
        let r3 = (_a3 = a2[t4]) == null ? void 0 : _a3[n3];
        if (r3) return { key: r3, isWritable: true, altIdx: e3 };
      }))) ?? [], ...((_b2 = n2.addressTableLookups[e3]) == null ? void 0 : _b2.readonlyIndexes.map(((n3) => {
        var _a3;
        let r3 = (_a3 = a2[t4]) == null ? void 0 : _a3[n3];
        if (r3) return { key: r3, isWritable: false, altIdx: e3 };
      }))) ?? []];
    })).flat().filter(((t4) => !!t4)).sort(((t4, n3) => t4.isWritable !== n3.isWritable ? t4.isWritable ? -1 : 1 : t4.altIdx - n3.altIdx)).map((({ key: t4 }) => t4));
    return [...n2.staticAccounts, ...r2];
  })({ solanaClient: n$12, message: r$1 });
  for (let t3 of r$1.instructions) {
    let a$12 = r$1.staticAccounts[t3.programAddressIndex] || "";
    if (a$12 !== e && a$12 !== n) if (a$12 !== a) {
      if (a$12 === o$1) {
        let n2 = await rt((function(t4, n3, e2) {
          var _a2;
          let [a2, r2, o3, i3] = ((_a2 = t4.accountIndices) == null ? void 0 : _a2.map(((t5) => n3[t5]))) ?? [];
          return { type: "ata-creation", program: e2, payer: a2, ata: r2, owner: o3, mint: i3 };
        })(t3, u2, a$12));
        if (!n2) {
          d2.push({ type: "unknown", program: a$12, discriminator: (_a = t3.data) == null ? void 0 : _a[0] });
          continue;
        }
        if (d2.push(n2), n2.ata && n2.owner && n2.mint) {
          l2[n2.ata] = { owner: n2.owner, mint: n2.mint };
          continue;
        }
      }
      if (d$1.includes(a$12)) {
        let r2 = await rt(ut(t3, u2, n$12, e$12, a$12));
        if (!r2) {
          d2.push({ type: "unknown", program: a$12, discriminator: (_b = t3.data) == null ? void 0 : _b[0] });
          continue;
        }
        d2.push(r2);
      } else if (r.includes(a$12)) {
        let r2 = await rt(mt(t3, u2, n$12, e$12, a$12));
        if (!r2) {
          d2.push({ type: "unknown", program: a$12, discriminator: (_c = t3.data) == null ? void 0 : _c[0] });
          continue;
        }
        d2.push(r2);
      } else d2.push({ type: "unknown", program: a$12, discriminator: (_d = t3.data) == null ? void 0 : _d[0] });
    } else {
      let n2 = await rt(dt(t3, u2));
      if (!n2) {
        d2.push({ type: "unknown", program: a$12, discriminator: (_e = t3.data) == null ? void 0 : _e[0] });
        continue;
      }
      d2.push(n2);
    }
    else {
      let r2 = await rt(lt(t3, u2, n$12, e$12, l2, a$12));
      if (!r2) {
        d2.push({ type: "unknown", program: a$12, discriminator: (_f = t3.data) == null ? void 0 : _f[0] });
        continue;
      }
      d2.push(r2), "spl-transfer" === r2.type && (r2.fromAta && r2.fromAccount && r2.token.address && (l2[_g = r2.fromAta] ?? (l2[_g] = { owner: r2.fromAccount, mint: r2.token.address })), r2.toAta && r2.toAccount && r2.token.address && (l2[_h = r2.toAta] ?? (l2[_h] = { owner: r2.toAccount, mint: r2.token.address })));
    }
  }
  return { spender: o2, fee: i2, instructions: d2, hasFunds: !!c };
}
function ct(t2, n2 = 0) {
  try {
    return (function(t3, n3 = 0) {
      let e3 = 0n;
      for (let a2 = 0; a2 < 8; a2++) e3 |= BigInt(t3[n3 + a2]) << BigInt(8 * a2);
      return e3;
    })(t2, n2);
  } catch {
  }
  try {
    return t2.readBigInt64LE(n2);
  } catch {
  }
  let e2 = m(t2);
  try {
    return ((t3, n3 = 0) => {
      let e3 = t3[n3], a2 = t3[n3 + 7];
      if (!e3 || !a2) throw Error(`Buffer offset out of range: first: ${e3}, last: ${a2}.`);
      return (BigInt(t3[n3 + 4] + 256 * t3[n3 + 5] + 65536 * t3[n3 + 6] + (a2 << 24)) << 32n) + BigInt(e3 + 256 * t3[++n3] + 65536 * t3[++n3] + 16777216 * t3[++n3]);
    })(e2);
  } catch {
  }
  try {
    return e2.subarray(n2).readBigInt64LE();
  } catch {
  }
  try {
    return e2.readBigInt64LE(n2);
  } catch {
  }
  return 0n;
}
async function lt(t2, n2, e2, a2, r2, o2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  let i2 = (_a = t2.data) == null ? void 0 : _a[0], s2 = ((_b = t2.accountIndices) == null ? void 0 : _b.map(((t3) => n2[t3]))) ?? [];
  if (1 === i2) {
    let [t3, n3, e3] = s2;
    return { type: "spl-init-account", program: o2, account: t3, mint: n3, owner: e3 };
  }
  if (3 === i2) {
    let n3, i3, [c, l2, d2] = s2, u2 = "", m2 = l2 ? r2[l2] : void 0;
    if (m2) n3 = m2.owner, u2 = m2.mint;
    else if (l2) {
      let t3 = await e2.rpc.getAccountInfo(l2, { commitment: "confirmed", encoding: "jsonParsed" }).send(), a3 = (_c = t3.value) == null ? void 0 : _c.data;
      n3 = (_e = (_d = a3 == null ? void 0 : a3.parsed) == null ? void 0 : _d.info) == null ? void 0 : _e.owner, u2 = ((_g = (_f = a3 == null ? void 0 : a3.parsed) == null ? void 0 : _f.info) == null ? void 0 : _g.mint) ?? "", i3 = (_j = (_i = (_h = a3 == null ? void 0 : a3.parsed) == null ? void 0 : _h.info) == null ? void 0 : _i.tokenAmount) == null ? void 0 : _j.decimals;
    }
    if (!u2 && c) {
      let t3 = await e2.rpc.getAccountInfo(c, { commitment: "confirmed", encoding: "jsonParsed" }).send(), n4 = (_k = t3.value) == null ? void 0 : _k.data;
      u2 = ((_m = (_l = n4 == null ? void 0 : n4.parsed) == null ? void 0 : _l.info) == null ? void 0 : _m.mint) ?? "";
    }
    let p2 = await it({ privyClient: a2, chain: e2.chain, mint: u2 }), f2 = (p2 == null ? void 0 : p2.symbol) ?? "";
    return i3 ?? (i3 = (p2 == null ? void 0 : p2.decimals) ?? 9), { type: "spl-transfer", program: o2, fromAta: c, fromAccount: d2, toAta: l2, toAccount: n3, value: ct(t2.data, 1), token: { symbol: f2, decimals: i3, address: u2 } };
  }
  if (9 === i2) {
    let [t3, n3, e3] = s2;
    return { type: "spl-close-account", program: o2, source: t3, destination: n3, owner: e3 };
  }
  if (17 === i2) return { type: "spl-sync-native", program: o2 };
  throw Error(`Token program instruction type ${i2} not supported`);
}
async function dt(t2, n2) {
  var _a, _b;
  let e2 = (_a = t2.data) == null ? void 0 : _a[0], a$1 = ((_b = t2.accountIndices) == null ? void 0 : _b.map(((t3) => n2[t3]))) ?? [];
  if (0 === e2) {
    let [, n3] = a$1;
    return { type: "create-account", program: a, account: n3 == null ? void 0 : n3.toString(), value: ct(t2.data, 4), withSeed: false };
  }
  if (2 === e2) {
    let [n3, e3] = a$1;
    return { type: "sol-transfer", program: a, fromAccount: n3, toAccount: e3, token: { symbol: "SOL", decimals: 9 }, value: ct(t2.data, 4), withSeed: false };
  }
  if (3 === e2) {
    let [, n3] = a$1;
    return { type: "create-account", program: a, account: n3, withSeed: true, value: ct(t2.data.slice(t2.data.length - 32 - 8 - 8)) };
  }
  if (11 === e2) {
    let [n3, e3] = a$1;
    return { type: "sol-transfer", program: a, fromAccount: n3, toAccount: e3, value: ct(t2.data, 4), token: { symbol: "SOL", decimals: 9 }, withSeed: true };
  }
  throw Error(`System program instruction type ${e2} not supported`);
}
async function ut(t2, n2, e2, a2, r2) {
  var _a, _b;
  let o2 = ((_a = t2.accountIndices) == null ? void 0 : _a.map(((t3) => n2[t3]))) ?? [], i2 = (_b = t2.data) == null ? void 0 : _b[0];
  if (143 === i2) {
    let n3 = o2[10], i3 = o2[11];
    return { type: "raydium-swap-base-input", program: r2, mintIn: n3, mintOut: i3, tokenIn: n3 ? await it({ privyClient: a2, chain: e2.chain, mint: n3 }) : void 0, tokenOut: i3 ? await it({ privyClient: a2, chain: e2.chain, mint: i3 }) : void 0, amountIn: ct(t2.data, 8), minimumAmountOut: ct(t2.data, 16) };
  }
  if (55 === i2) {
    let n3 = o2[10], i3 = o2[11];
    return { type: "raydium-swap-base-output", program: r2, mintIn: n3, mintOut: i3, tokenIn: n3 ? await it({ privyClient: a2, chain: e2.chain, mint: n3 }) : void 0, tokenOut: i3 ? await it({ privyClient: a2, chain: e2.chain, mint: i3 }) : void 0, maxAmountIn: ct(t2.data, 8), amountOut: ct(t2.data, 16) };
  }
  throw Error(`Raydium swap program instruction type ${i2} not supported`);
}
async function mt(t2, n2, e2, a2, r2) {
  var _a, _b;
  let o2 = (_a = t2.data) == null ? void 0 : _a[0], i2 = ((_b = t2.accountIndices) == null ? void 0 : _b.map(((t3) => n2[t3]))) ?? [];
  if ([208, 51, 239, 151, 123, 43, 237, 92].includes(o2)) {
    let n3 = i2[5], o3 = i2[6];
    return { type: "jupiter-swap-exact-out-route", program: r2, mintIn: n3, mintOut: o3, tokenIn: n3 ? await it({ privyClient: a2, chain: e2.chain, mint: n3 }) : void 0, tokenOut: o3 ? await it({ privyClient: a2, chain: e2.chain, mint: o3 }) : void 0, outAmount: ct(t2.data, t2.data.length - 1 - 2 - 8 - 8), quotedInAmount: ct(t2.data, t2.data.length - 1 - 2 - 8) };
  }
  if ([176, 209, 105, 168, 154, 125, 69, 62].includes(o2)) {
    let n3 = i2[7], o3 = i2[8];
    return { type: "jupiter-swap-exact-out-route", program: r2, mintIn: n3, mintOut: o3, tokenIn: n3 ? await it({ privyClient: a2, chain: e2.chain, mint: n3 }) : void 0, tokenOut: o3 ? await it({ privyClient: a2, chain: e2.chain, mint: o3 }) : void 0, outAmount: ct(t2.data, t2.data.length - 1 - 2 - 8 - 8), quotedInAmount: ct(t2.data, t2.data.length - 1 - 2 - 8) };
  }
  if ([193, 32, 155, 51, 65, 214, 156, 129].includes(o2)) {
    let n3 = i2[7], o3 = i2[8];
    return { type: "jupiter-swap-shared-accounts-route", program: r2, mintIn: n3, mintOut: o3, tokenIn: n3 ? await it({ privyClient: a2, chain: e2.chain, mint: n3 }) : void 0, tokenOut: o3 ? await it({ privyClient: a2, chain: e2.chain, mint: o3 }) : void 0, inAmount: ct(t2.data, t2.data.length - 1 - 2 - 8 - 8), quotedOutAmount: ct(t2.data, t2.data.length - 1 - 2 - 8) };
  }
  throw [62, 198, 214, 193, 213, 159, 108, 210].includes(o2) && console.warn("Jupiter swap program instruction 'claim' not implemented"), [116, 206, 27, 191, 166, 19, 0, 73].includes(o2) && console.warn("Jupiter swap program instruction 'claim_token' not implemented"), [26, 74, 236, 151, 104, 64, 183, 249].includes(o2) && console.warn("Jupiter swap program instruction 'close_token' not implemented"), [229, 194, 212, 172, 8, 10, 134, 147].includes(o2) && console.warn("Jupiter swap program instruction 'create_open_orders' not implemented"), [28, 226, 32, 148, 188, 136, 113, 171].includes(o2) && console.warn("Jupiter swap program instruction 'create_program_open_orders' not implemented"), [232, 242, 197, 253, 240, 143, 129, 52].includes(o2) && console.warn("Jupiter swap program instruction 'create_token_ledger' not implemented"), [147, 241, 123, 100, 244, 132, 174, 118].includes(o2) && console.warn("Jupiter swap program instruction 'create_token_account' not implemented"), [229, 23, 203, 151, 122, 227, 173, 42].includes(o2) && console.warn("Jupiter swap program instruction 'route' not implemented"), [150, 86, 71, 116, 167, 93, 14, 104].includes(o2) && console.warn("Jupiter swap program instruction 'route_with_token_ledger' not implemented"), [228, 85, 185, 112, 78, 79, 77, 2].includes(o2) && console.warn("Jupiter swap program instruction 'set_token_ledger' not implemented"), [230, 121, 143, 80, 119, 159, 106, 170].includes(o2) && console.warn("Jupiter swap program instruction 'shared_accounts_route_with_token_ledger' not implemented"), Error(`Jupiter swap program instruction type ${o2} not supported`);
}
const pt = { component: () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  let { data: t$22, onUserCloseViaDialogOrKeybindRef: e2, setModalData: g$2, navigate: h$1 } = g(), { client: y$1, closePrivyModal: w, walletProxy: k$12, showFiatPrices: v } = l(), b = le(), { user: A } = k(), I = g$1()(((_a = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _a.chain) ?? "solana:mainnet"), [S2, j] = d((_b = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _b.transaction), [C$1, T$12] = d(), [x, O] = d(), [M, R] = d({ value: 0n, isLoading: false }), [U, V] = d(false), [z, G] = d({}), [X, Y] = d(), K$1 = (_c = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _c.account, N = !!((_d = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _d.signOnly), Q = !!((_e = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _e.isSponsored), tt2 = (K$1 == null ? void 0 : K$1.imported) ? o(A).find(((t2) => t2.address === K$1.address)) : h(A), { solPrice: nt2, isSolPriceLoading: at2 } = t({ enabled: v }), rt2 = T((() => {
    if (!C$1) return;
    let t2 = C$1.spender, n2 = t$1(C$1.fee), e3 = t$1(M.value, 3, true), a2 = C$1.instructions.filter(((t3) => ["sol-transfer", "spl-transfer", "raydium-swap-base-input", "raydium-swap-base-output", "jupiter-swap-shared-accounts-route", "jupiter-swap-exact-out-route"].includes(t3.type))), r2 = a2.at(0);
    if (!r2 || a2.length > 1) return { fee: n2, spender: t2, balance: e3 };
    if ("sol-transfer" === r2.type) return { fee: n2, spender: t2, balance: e3, total: t$1(r2.value) };
    if ("spl-transfer" === r2.type) return { fee: n2, spender: t2, balance: e3, total: `${i({ amount: r2.value, decimals: r2.token.decimals })} ${r2.token.symbol}` };
    if ("raydium-swap-base-input" === r2.type && r2.tokenIn && r2.tokenOut) {
      return { fee: n2, spender: t2, balance: e3, swap: `${`${i({ amount: r2.amountIn, decimals: r2.tokenIn.decimals })} ${r2.tokenIn.symbol}`} → ${`${i({ amount: r2.minimumAmountOut, decimals: r2.tokenOut.decimals })} ${r2.tokenOut.symbol}`}` };
    }
    if ("raydium-swap-base-output" === r2.type && r2.tokenIn && r2.tokenOut) {
      return { fee: n2, spender: t2, balance: e3, swap: `${`${i({ amount: r2.maxAmountIn, decimals: r2.tokenIn.decimals })} ${r2.tokenIn.symbol}`} → ${`${i({ amount: r2.amountOut, decimals: r2.tokenOut.decimals })} ${r2.tokenOut.symbol}`}` };
    }
    if ("jupiter-swap-shared-accounts-route" === r2.type && r2.tokenIn && r2.tokenOut) {
      return { fee: n2, spender: t2, balance: e3, swap: `${`${i({ amount: r2.inAmount, decimals: r2.tokenIn.decimals })} ${r2.tokenIn.symbol}`} → ${`${i({ amount: r2.quotedOutAmount, decimals: r2.tokenOut.decimals })} ${r2.tokenOut.symbol}`}` };
    }
    if ("jupiter-swap-exact-out-route" === r2.type && r2.tokenIn && r2.tokenOut) {
      return { fee: n2, spender: t2, balance: e3, swap: `${`${i({ amount: r2.quotedInAmount, decimals: r2.tokenIn.decimals })} ${r2.tokenIn.symbol}`} → ${`${i({ amount: r2.outAmount, decimals: r2.tokenOut.decimals })} ${r2.tokenOut.symbol}`}` };
    }
    return { fee: n2, spender: t2, balance: e3 };
  }), [C$1, K$1 == null ? void 0 : K$1.address, M]), ot2 = T((() => {
    let t2;
    if (!C$1 || !v || !nt2 || at2) return;
    function n2(...t3) {
      return C(t3.reduce(((t4, n3) => t4 + n3), 0n), nt2 ?? 0);
    }
    (K$1 == null ? void 0 : K$1.address) === C$1.spender && (t2 = n2(C$1.fee));
    let e3 = n2(M.value), a2 = C$1.instructions.filter(((t3) => "sol-transfer" === t3.type || "spl-transfer" === t3.type)).at(0);
    return !a2 || C$1.instructions.length > 1 ? { fee: t2, balance: e3 } : "sol-transfer" === a2.type ? { fee: t2, balance: e3, total: n2(a2.value, (K$1 == null ? void 0 : K$1.address) === C$1.spender ? C$1.fee : 0n) } : "spl-transfer" === a2.type ? { fee: t2, balance: e3, total: `${i({ amount: a2.value, decimals: a2.token.decimals })} ${a2.token.symbol}` } : { fee: t2, balance: e3 };
  }), [C$1, v, nt2, at2, K$1 == null ? void 0 : K$1.address, M]);
  if (y((() => {
    !(async function() {
      if (S2 && y$1) try {
        O(void 0);
        let t2 = await st({ tx: S2, solanaClient: I, privyClient: y$1, checkFunds: !N && !Q });
        T$12(t2);
      } catch (t2) {
        console.error("Failed to prepare transaction", t2), O(t2);
      }
    })();
  }), [S2, I, y$1, N]), y((() => {
    (async function() {
      if (!K$1) return;
      R({ value: M.value, isLoading: true });
      let { value: t2 } = await I.rpc.getBalance(K$1.address, { commitment: "confirmed" }).send();
      R({ value: t2 ?? 0n, isLoading: false });
    })().catch(console.error);
  }), [C$1]), !S2 || !(t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) || !K$1) {
    let e3 = Error("Invalid transaction request");
    return u(f, { error: e3, allowlistConfig: b.allowlistConfig, onRetry: () => {
      var _a2;
      (_a2 = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _a2.onFailure(e3), w({ shouldCallAuthOnSuccess: false });
    } });
  }
  let it2 = () => {
    var _a2, _b2;
    if (!U) return z.signature || z.signedTransaction ? (_a2 = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _a2.onSuccess({ signature: z.signature, signedTransaction: z.signedTransaction }) : (_b2 = t$22 == null ? void 0 : t$22.standardSignAndSendTransaction) == null ? void 0 : _b2.onFailure(X ?? x ?? Error("User exited the modal before submitting the transaction")), w({ shouldCallAuthOnSuccess: false });
  };
  e2.current = it2;
  let ct2 = ((_i = (_h = (_g = (_f = t$22.standardSignAndSendTransaction) == null ? void 0 : _f.uiOptions) == null ? void 0 : _g.transactionInfo) == null ? void 0 : _h.contractInfo) == null ? void 0 : _i.imgUrl) ? /* @__PURE__ */ u("img", { src: t$22.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl, alt: t$22.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText }) : null, lt2 = !!(t$22.funding && t$22.funding.supportedOptions.length > 0), dt2 = !(C$1 == null ? void 0 : C$1.hasFunds) && lt2 && !Q;
  if (z.signature || z.signedTransaction) {
    let e3 = C$1 == null ? void 0 : C$1.instructions.filter(((t2) => "sol-transfer" === t2.type || "spl-transfer" === t2.type)), a2 = 1 === (e3 == null ? void 0 : e3.length) ? e3 == null ? void 0 : e3.at(0) : void 0;
    return u(et, { fees: z.fees ?? 0n, onClose: it2, transactionInfo: (_j = t$22.standardSignAndSendTransaction) == null ? void 0 : _j.uiOptions.transactionInfo, solPrice: nt2, receiptHeader: (_k = t$22.standardSignAndSendTransaction) == null ? void 0 : _k.uiOptions.successHeader, receiptDescription: (_l = t$22.standardSignAndSendTransaction) == null ? void 0 : _l.uiOptions.successDescription, chain: I.chain, signOnly: N, instruction: "sol-transfer" === (a2 == null ? void 0 : a2.type) ? { to: a2.toAccount, amount: a2.value } : { to: (a2 == null ? void 0 : a2.toAccount) || (a2 == null ? void 0 : a2.toAta), total: rt2 == null ? void 0 : rt2.total } });
  }
  return X ? /* @__PURE__ */ u(oe, { transactionError: X, chainId: I.chain, onClose: it2, chainType: "solana", onRetry: async () => {
    Y(void 0);
    let { value: t2 } = await I.rpc.getLatestBlockhash().send();
    var n2, e3;
    j((n2 = S2, e3 = t2, pipe(getCompiledTransactionMessageDecoder().decode(u$1(n2)), ((t3) => decompileTransactionMessage(t3)), ((t3) => setTransactionMessageLifetimeUsingBlockhash(e3, t3)), ((t3) => compileTransaction(t3)), ((t3) => new Uint8Array(getTransactionEncoder().encode(t3))))));
  } }) : /* @__PURE__ */ u(K, { img: ct2, title: ((_o = (_n = (_m = t$22.standardSignAndSendTransaction) == null ? void 0 : _m.uiOptions) == null ? void 0 : _n.transactionInfo) == null ? void 0 : _o.title) || "Confirm transaction", subtitle: ((_q = (_p = t$22.standardSignAndSendTransaction) == null ? void 0 : _p.uiOptions) == null ? void 0 : _q.description) || `${b.name} wants your permission to approve the following transaction.`, cta: dt2 ? "Add funds" : ((_s = (_r = t$22.standardSignAndSendTransaction) == null ? void 0 : _r.uiOptions) == null ? void 0 : _s.buttonText) || "Approve", instructions: (C$1 == null ? void 0 : C$1.instructions) ?? [], network: "solana:mainnet" == I.chain ? "Solana" : I.chain.replace("solana:", ""), blockExplorerUrl: I.blockExplorerUrl, total: v ? ot2 == null ? void 0 : ot2.total : rt2 == null ? void 0 : rt2.total, fee: v ? ot2 == null ? void 0 : ot2.fee : rt2 == null ? void 0 : rt2.fee, balance: v ? ot2 == null ? void 0 : ot2.balance : rt2 == null ? void 0 : rt2.balance, swap: rt2 == null ? void 0 : rt2.swap, transactingWalletAddress: K$1.address, disabled: !(C$1 == null ? void 0 : C$1.hasFunds) && !lt2, isSubmitting: U, isPreparing: !C$1 || M.isLoading, isTokenPriceLoading: v && at2, isMissingFunds: !(C$1 == null ? void 0 : C$1.hasFunds), submitError: X ?? void 0, isSponsored: !!((_t = t$22.standardSignAndSendTransaction) == null ? void 0 : _t.isSponsored), parseError: x, onClick: dt2 ? async () => {
    if (!K$1) return;
    if (!lt2) throw Error("Funding wallet is not enabled");
    let n2 = "FundingMethodSelectionScreen";
    g$2({ ...t$22, funding: { ...t$22.funding, methodScreen: n2 }, solanaFundingData: t$22 == null ? void 0 : t$22.solanaFundingData }), h$1(n2);
  } : async () => {
    try {
      if (V(true), U || !K$1 || !k$12 || !A || !tt2) return;
      let n2 = await t$22.standardSignAndSendTransaction.onConfirm(S2);
      if ("signature" in n2) {
        let t2 = await (async function({ solanaClient: t3, signature: n3 }) {
          var _a2;
          let e3 = getBase58Decoder().decode(n3), a2 = await t3.rpc.getTransaction(e3, { maxSupportedTransactionVersion: 0, commitment: "confirmed", encoding: "base64" }).send().catch((() => null));
          return a2 ? { fee: ((_a2 = a2.meta) == null ? void 0 : _a2.fee) ?? 0n } : null;
        })({ solanaClient: I, signature: n2.signature });
        return void G({ ...n2, fees: t2 == null ? void 0 : t2.fee });
      }
      G(n2);
    } catch (t2) {
      console.warn({ transaction: S2, error: t2 }), Y(t2);
    } finally {
      V(false);
    }
  }, onClose: it2 });
} };
export {
  pt as StandardSignAndSendTransactionScreen,
  pt as default
};
