import { dr as u, hc as transformEncoder, hd as getStructEncoder, he as getU32Encoder, hf as getU64Encoder, hg as AccountRole, hh as upgradeRoleToSigner, hi as isTransactionSigner$1, hj as getBase58Decoder, ds as We, dx as l, dw as u$1, hk as ft, dl as d, eN as E, hl as ht, dn as y, hm as pipe, hn as getTransactionEncoder, ho as findAssociatedTokenPda, hp as getCreateAssociatedTokenIdempotentInstruction, hq as createTransactionMessage, dM as V, eF as $i, dJ as a, dE as i$1, hr as pt, dN as S, hs as compileTransaction, ht as appendTransactionMessageInstruction, hu as setTransactionMessageLifetimeUsingBlockhash, hv as setTransactionMessageFeePayerSigner, hw as getTransferInstruction } from './index-CJFVVi7O.js';
import { F as ForwardRef } from './CheckCircleIcon-BGoCGznJ.js';
import { h, b } from './ModalFooter-BldNwiHO-D0P01Kr1.js';
import { c as c$1, n as n$2, s as s$1, t as t$2 } from './Layouts-BMRfo5hw-BNmEC6si.js';
import { o as o$1 } from './ScreenHeader-CHmc4-Lu-CFCPBZ7g.js';
import { t as t$1 } from './FundWalletMethodHeader-CBdY084Z-NcROlhaq.js';
import { i } from './InjectedWalletIcon-DLcYOGDj-EE9pBTX_.js';
import { n as n$3 } from './index-CWARkn2w-AkhPUeIY.js';
import { s, e, n, t } from './Value-DTgR824E-BJrijp-P.js';
import { c } from './useGetTokenPrice-Ufl46eND-BT2H4oJZ.js';
import { t as t$3 } from './analytics-mkkvFRju-DEN03uoI.js';
import { r as r$1, e as e$2, s as s$2 } from './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';
import { n as n$1 } from './getUsdcMintAddress-BVgm9GRo-MFpIh-EZ.js';
import { o as o$2, t as t$4 } from './simulateTransaction-CP42l5SJ-BdZe4qI2.js';
import { e as e$1 } from './getChainName-DjpPdUSc-D0Rbdx8r.js';
import './WalletIcon-DGE4UUyH.js';
import './LoadingSkeleton-BMsgO5PV-2ikQoNCF.js';
import './useGetSolPrice-x7gfUIHJ-DUMGIT1J.js';

function o({rows:o}){return u(t,{children:o.filter((r=>!!r)).map(((e$1,o)=>null!=e$1.value||e$1.isLoading?/*#__PURE__*/u(s,{children:[/*#__PURE__*/u(e,{children:e$1.label}),/*#__PURE__*/u(n,{$isLoading:e$1.isLoading,children:e$1.value})]},o):null))})}

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

function r(r){return getBase58Decoder().decode(r)}

function z(t){return BigInt(Math.floor(1e9*parseFloat(t)))}function J(t){return +K.format(parseFloat(t.toString())/1e9)}let K=Intl.NumberFormat(void 0,{maximumFractionDigits:8});async function Q({tx:t,solanaClient:e,amount:a,asset:o,tokenPrice:n}){if(!t)return null;if("SOL"===o&&n){let o=z(a),r=r$1(o,n),s=await t$4({solanaClient:e,tx:t});return {amountInUsd:r,feeInUsd:n?r$1(s,n):void 0,totalInUsd:r$1(o+s,n)}}if("USDC"===o&&n){let o="$"+a,r=await t$4({solanaClient:e,tx:t}),s=function(t,e){let a=parseFloat(t.toString())/s$2*e;return a<.01?0:a}(r,n);return {amountInUsd:o,feeInUsd:r$1(r,n),totalInUsd:"$"+(parseFloat(a)+s).toFixed(2)}}if("SOL"===o){let o=z(a),n=await t$4({solanaClient:e,tx:t});return {amountInSol:a+" SOL",feeInSol:J(n)+" SOL",totalInSol:J(o+n)+" SOL"}}return {amountInUsdc:a+" USDC",feeInSol:J(await t$4({solanaClient:e,tx:t}))+" SOL"}}const Z={component:function(){let R=We(),{closePrivyModal:G,createAnalyticsEvent:J}=l(),{data:K,setModalData:Z,navigate:tt}=u$1(),{wallets:et}=ft(),[at,ot]=d("preparing"),[nt,rt]=d(),[st,it]=d(),[lt,mt]=d();if(!K?.solanaFundingData)throw Error("Funding config is missing");if(!K.solanaFundingData.sourceWalletData)throw Error("Funding config is missing source wallet data");let{amount:ct,asset:dt,chain:ut,sourceWalletData:pt$1,destinationAddress:ft$1,afterSuccessScreen:gt}=K.solanaFundingData,ht$1=et.find((t=>t.address===pt$1.address&&E(pt$1.walletClientType)===E(t.standardWallet.name))),jt=ht()(ut),{tokenPrice:It,isTokenPriceLoading:wt}=c("solana");return y((()=>{if("preparing"!==at||wt||!ht$1)return;let t="SOL"===dt?z(ct):function(t){return BigInt(Math.floor(1e6*parseFloat(t)))}(ct);it({amount:("SOL"===dt&&It?r$1(t,It):ct)??ct}),("SOL"===dt?async function({solanaClient:t,source:e,destination:a,amountInLamports:o}){let{value:n}=await t.rpc.getLatestBlockhash().send(),r={address:e},s=pipe(createTransactionMessage({version:0}),(t=>setTransactionMessageFeePayerSigner(r,t)),(t=>setTransactionMessageLifetimeUsingBlockhash(n,t)),(t=>appendTransactionMessageInstruction(getTransferSolInstruction({amount:o,source:r,destination:a}),t)),(t=>compileTransaction(t)));return new Uint8Array(getTransactionEncoder().encode(s))}({solanaClient:jt,source:ht$1.address,destination:ft$1,amountInLamports:t}):async function({solanaClient:t,source:e,destination:a,amountInBaseUnits:o}){let n=n$1(t.chain),{value:r}=await t.rpc.getLatestBlockhash().send(),s={address:e},[i]=await findAssociatedTokenPda({mint:n,owner:e,tokenProgram:e$2}),[l]=await findAssociatedTokenPda({mint:n,owner:a,tokenProgram:e$2}),[m,c]=await Promise.all([t.rpc.getAccountInfo(i,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch((()=>null)),t.rpc.getAccountInfo(l,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch((()=>null))]);if(!m?.value)throw Error(`Source token account does not exist for address: ${e}`);let d=getCreateAssociatedTokenIdempotentInstruction({payer:s,ata:l,owner:a,mint:n}),u=pipe(createTransactionMessage({version:0}),(t=>setTransactionMessageFeePayerSigner(s,t)),(t=>setTransactionMessageLifetimeUsingBlockhash(r,t)),(t=>c?.value?t:appendTransactionMessageInstruction(d,t)),(t=>appendTransactionMessageInstruction(getTransferInstruction({source:i,destination:l,authority:s,amount:o}),t)),(t=>compileTransaction(t)));return new Uint8Array(getTransactionEncoder().encode(u))}({solanaClient:jt,source:ht$1.address,destination:ft$1,amountInBaseUnits:t})).then(rt).catch((t=>{ot("error"),mt(t);}));}),[at,ct,dt,ut,ht$1,ft$1,wt,It]),y((()=>{"preparing"===at&&nt&&Q({tx:nt,solanaClient:jt,amount:ct,asset:dt,tokenPrice:It}).then((t=>{ot("loaded"),it({amount:t?.amountInUsd??t?.amountInUsdc??t?.amountInSol??ct,fee:t?.feeInUsd??t?.feeInSol,total:t?.totalInUsd??t?.totalInSol});})).catch((t=>{ot("error"),mt(t);}));}),[nt,ct,dt,at,It]),y((()=>{"error"===at&&lt&&(Z({errorModalData:{error:lt,previousScreen:"FundSolWalletWithExternalSolanaWallet"},solanaFundingData:K.solanaFundingData}),tt("ErrorScreen",false));}),[at,tt]),y((()=>{if("success"!==at)return;let t=setTimeout(gt?()=>tt(gt):G,V);return ()=>clearTimeout(t)}),[at]),/*#__PURE__*/u(S,"success"===at?{children:[/*#__PURE__*/u(t$1,{}),/*#__PURE__*/u(c$1,{}),/*#__PURE__*/u(n$2,{children:[/*#__PURE__*/u(ForwardRef,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),/*#__PURE__*/u(o$1,{title:"Success!",description:`You’ve successfully added ${ct} ${dt} to your ${R.name} wallet. It may take a minute before the funds are available to use.`})]}),/*#__PURE__*/u(s$1,{}),/*#__PURE__*/u(h,{})]}:"preparing"===at||"loaded"===at||"sending"===at?{children:[/*#__PURE__*/u(t$1,{}),/*#__PURE__*/u(t$2,{style:{marginTop:"16px"},children:/*#__PURE__*/u(i,{icon:ht$1?.standardWallet.icon,name:ht$1?.standardWallet.name})}),/*#__PURE__*/u(o$1,{style:{marginTop:"8px",marginBottom:"12px"},title:"sending"===at&&ht$1?`Confirming with ${ht$1.standardWallet.name}`:"Confirm transaction"}),/*#__PURE__*/u(o,{rows:[{label:"Source",value:$i(pt$1.address)},{label:"Destination",value:$i(ft$1)},{label:"Network",value:e$1(ut)},{label:"Amount",value:st?.amount,isLoading:"preparing"===at},{label:"Estimated fee",value:st?.fee,isLoading:"preparing"===at},{label:"Total",value:st?.total,isLoading:"preparing"===at}]}),/*#__PURE__*/u(b,{style:{marginTop:"1rem"},loading:"preparing"===at||"sending"===at,onClick:function(){"loaded"===at&&nt&&ht$1&&(ot("sending"),async function({transaction:t,chain:e,sourceWallet:a$1,solanaClient:o}){let{hasFunds:n}=await o$2({solanaClient:o,tx:t});if(!n)throw new a(`Wallet ${$i(a$1.address)} does not have enough funds.`,void 0,i$1.INSUFFICIENT_BALANCE);let r$1=r((await a$1.signAndSendTransaction({transaction:t,chain:e}).catch((t=>{throw new a("Transaction was rejected by the user",t,i$1.TRANSACTION_FAILURE)}))).signature);return await pt({rpcSubscriptions:o.rpcSubscriptions,signature:r$1,timeout:2e4}),r$1}({solanaClient:jt,transaction:nt,chain:ut,sourceWallet:ht$1}).then((t=>{ot("success"),J({eventName:t$3,payload:{provider:"external",status:"success",txHash:t,address:ht$1.address,value:ct,chainType:"solana",clusterName:ut,token:dt,destinationAddress:ft$1,destinationValue:ct,destinationChainType:"solana",destinationClusterName:ut,destinationToken:dt}});})).catch((t=>{ot("error"),mt(t);})));},children:"Confirm"}),/*#__PURE__*/u(h,{})]}:{children:[/*#__PURE__*/u(t$1,{}),/*#__PURE__*/u(n$3,{}),/*#__PURE__*/u("div",{style:{marginTop:"1rem"}}),/*#__PURE__*/u(h,{})]})}};

export { Z as FundSolWalletWithExternalSolanaWallet, Z as default };
