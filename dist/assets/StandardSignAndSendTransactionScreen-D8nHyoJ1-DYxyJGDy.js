import { hN as SolanaError, hO as SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED, hP as SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND, hQ as getBase64Encoder, dq as g, dr as l, dl as le, dv as k, df as d, gP as o, gm as h, di as T, dh as y, dk as u, h3 as pipe, hR as getCompiledTransactionMessageDecoder, gJ as getBase58Decoder, gd as k$1, dG as S, du as gt, gX as getTransactionEncoder, h7 as compileTransaction, h9 as setTransactionMessageLifetimeUsingBlockhash, hS as decompileTransactionMessage } from './index-BLGlf-uE.js';
import { t } from './useGetSolPrice-x7gfUIHJ-C-pExW28.js';
import { ErrorScreenView as f } from './ErrorScreen-DkigBJc0-D2OuKsEL.js';
import { F as ForwardRef } from './CheckCircleIcon-BEBsFkrS.js';
import { T as T$1, u as u$2, m as m$1 } from './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import { s } from './Layouts-BlFm53ED-CYqWOXMK.js';
import { o as o$2 } from './ScreenHeader-CHmc4-Lu-irPWKUq4.js';
import { s as s$1, e as e$1, n as n$1, t as t$2 } from './Value-tcJV9e0L-DbcrBvgx.js';
import { f as f$2, S as S$1 } from './WalletLink-BD2FWKMu-DfgOi-aM.js';
import { i as i$1 } from './StackedContainer-B2vaEl56-BaMGFiRb.js';
import { o as oe, K } from './TransactionErrorView-CS96Nd-U-DP4DwWbn.js';
import { t as t$1 } from './transaction-CnfuREWo-DJd_FbTW.js';
import { g as g$1, u as u$1, f as f$1, p, m } from './useSolanaRpcClient-CW-peny0-a2Lfjh4J.js';
import { C, e, n, a, o as o$1, d as d$1, r, t as t$3 } from './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';
import { i } from './formatters-DO4gi8tm.js';
import './reservoir-B7XIq5qj-GiG4CrlM.js';
import './safe-url-D7SRPu33-B4C4HSRI.js';
import './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './index-Dq_xe9dz-eZF2dpYh.js';
import './triangle-alert-YirXscxx.js';
import './createLucideIcon-BFwUy9WP.js';
import './lock-CW2VH4jv.js';
import './LoadingSkeleton-U6-3yFwI-KdekT1D-.js';
import './ethers-DFE0Hz-t-CLyj7jax.js';
import './ErrorMessage-D8VaAP5m-hAmjbRBw.js';
import './LabelXs-oqZNqbm_-DnpkyvVT.js';
import './Subtitle-CV-2yKE4-Bbcv4NfA.js';
import './Title-BnzYV3Is-BHhQlvgp.js';
import './Address--RvzbtOt-D2m-nsJV.js';
import './check-C7hZ0Smk.js';
import './copy-_wcgUt8e.js';
import './WalletInfoCard-pBDMfJDY-BzeF4awJ.js';
import './shared-FM0rljBt-BAbWeUe1.js';
import './Checkbox-BhNoOKjX-Bg4MnOl0.js';
import './ErrorBanner-CQERa7bL-BDc_TtsW.js';
import './ExclamationCircleIcon-BeO4oTEa.js';
import './WarningBanner-D5LqDt95-Db9Nw5N6.js';
import './ExclamationTriangleIcon-CztF7Wet.js';
import './ChevronDownIcon-uiJT9pHc.js';

function accountExists(account) {
  return !("exists" in account) || "exists" in account && account.exists;
}
function assertAccountsDecoded(accounts) {
  const encoded = accounts.filter((a) => accountExists(a) && a.data instanceof Uint8Array);
  if (encoded.length > 0) {
    const encodedAddresses = encoded.map((a) => a.address);
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
  const missingAccounts = accounts.filter((a) => !a.exists);
  if (missingAccounts.length > 0) {
    const missingAddresses = missingAccounts.map((a) => a.address);
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

const tt=gt.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${t=>t.color??"var(--privy-color-accent)"};
    background-color: ${t=>t.color??"var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
  }
`,nt=({instruction:e,fees:a,transactionInfo:r,solPrice:o,chain:i})=>/*#__PURE__*/u(t$2,{children:[r?.action&&/*#__PURE__*/u(s$1,{children:[/*#__PURE__*/u(e$1,{children:"Action"}),/*#__PURE__*/u(n$1,{children:r.action})]}),null!=e?.total&&/*#__PURE__*/u(s$1,{children:[/*#__PURE__*/u(e$1,{children:"Total"}),/*#__PURE__*/u(n$1,{children:e.total})]}),!e?.total&&null!=e?.amount&&/*#__PURE__*/u(s$1,{children:[/*#__PURE__*/u(e$1,{children:"Total"}),/*#__PURE__*/u(n$1,{children:/*#__PURE__*/u(f$2,{quantities:[e.amount,a],tokenPrice:o})})]}),/*#__PURE__*/u(s$1,{children:[/*#__PURE__*/u(e$1,{children:"Fees"}),/*#__PURE__*/u(n$1,{children:/*#__PURE__*/u(f$2,{quantities:[a],tokenPrice:o})})]}),e?.to&&/*#__PURE__*/u(s$1,{children:[/*#__PURE__*/u(e$1,{children:"To"}),/*#__PURE__*/u(n$1,{children:/*#__PURE__*/u(S$1,{walletAddress:e.to,chainId:i,chainType:"solana"})})]})]}),et=({fees:a,onClose:r,receiptHeader:o,receiptDescription:i,transactionInfo:s$1,solPrice:c,signOnly:l,instruction:d,chain:u$1})=>/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(T$1,{onClose:r}),/*#__PURE__*/u(i$1,{style:{marginBottom:"16px"},children:/*#__PURE__*/u("div",{children:[/*#__PURE__*/u(tt,{color:"var(--privy-color-success-light)"}),/*#__PURE__*/u(ForwardRef,{height:38,width:38,strokeWidth:2,stroke:"var(--privy-color-success)"})]})}),/*#__PURE__*/u(o$2,{title:o??`Transaction ${l?"signed":"complete"}!`,description:i??"You're all set."}),/*#__PURE__*/u(nt,{solPrice:c,instruction:d,fees:a,transactionInfo:s$1,chain:u$1}),/*#__PURE__*/u(k$1,{}),/*#__PURE__*/u(at,{loading:false,onClick:r,children:"Close"}),/*#__PURE__*/u(s,{}),/*#__PURE__*/u(u$2,{})]});let at=gt(m$1)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;async function rt(t,n){try{return await t}catch{return n}}function ot(t){switch(t){case "solana:mainnet":return "mainnet-beta";case "solana:devnet":return "devnet";case "solana:testnet":return "testnet"}}async function it({privyClient:t,chain:n,mint:e}){let a=t$3[n];if(!a[e]){let r=await t.getSplTokenMetadata({mintAddress:e,cluster:ot(n)});r&&(a[e]={address:e,symbol:r.symbol,decimals:r.decimals});}return a[e]}async function st({tx:t,solanaClient:n$1,privyClient:e$1,checkFunds:a$1}){let r$1=getCompiledTransactionMessageDecoder().decode(u$1(t)),o=r$1.staticAccounts[0]??"",i=await f$1({solanaClient:n$1,tx:t}),s=a$1?await rt(p({solanaClient:n$1,tx:t})):void 0,c=s?.hasFunds??true,l={},d=[],u=await async function({solanaClient:t,message:n}){if(!("addressTableLookups"in n)||!n.addressTableLookups)return [...n.staticAccounts];let e=n.addressTableLookups.map((t=>t.lookupTableAddress)),a=await fetchAddressesForLookupTables(e,t.rpc),r=e.map(((t,e)=>[...n.addressTableLookups[e]?.writableIndexes.map((n=>{let r=a[t]?.[n];if(r)return {key:r,isWritable:true,altIdx:e}}))??[],...n.addressTableLookups[e]?.readonlyIndexes.map((n=>{let r=a[t]?.[n];if(r)return {key:r,isWritable:false,altIdx:e}}))??[]])).flat().filter((t=>!!t)).sort(((t,n)=>t.isWritable!==n.isWritable?t.isWritable?-1:1:t.altIdx-n.altIdx)).map((({key:t})=>t));return [...n.staticAccounts,...r]}({solanaClient:n$1,message:r$1});for(let t of r$1.instructions){let a$1=r$1.staticAccounts[t.programAddressIndex]||"";if(a$1!==e&&a$1!==n)if(a$1!==a){if(a$1===o$1){let n=await rt(function(t,n,e){let[a,r,o,i]=t.accountIndices?.map((t=>n[t]))??[];return {type:"ata-creation",program:e,payer:a,ata:r,owner:o,mint:i}}(t,u,a$1));if(!n){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}if(d.push(n),n.ata&&n.owner&&n.mint){l[n.ata]={owner:n.owner,mint:n.mint};continue}}if(d$1.includes(a$1)){let r=await rt(ut(t,u,n$1,e$1,a$1));if(!r){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(r);}else if(r.includes(a$1)){let r=await rt(mt(t,u,n$1,e$1,a$1));if(!r){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(r);}else d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});}else {let n=await rt(dt(t,u));if(!n){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(n);}else {let r=await rt(lt(t,u,n$1,e$1,l,a$1));if(!r){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(r),"spl-transfer"===r.type&&(r.fromAta&&r.fromAccount&&r.token.address&&(l[r.fromAta]??={owner:r.fromAccount,mint:r.token.address}),r.toAta&&r.toAccount&&r.token.address&&(l[r.toAta]??={owner:r.toAccount,mint:r.token.address}));}}return {spender:o,fee:i,instructions:d,hasFunds:!!c}}function ct(t,n=0){try{return function(t,n=0){let e=0n;for(let a=0;a<8;a++)e|=BigInt(t[n+a])<<BigInt(8*a);return e}(t,n)}catch{}try{return t.readBigInt64LE(n)}catch{}let e=m(t);try{return ((t,n=0)=>{let e=t[n],a=t[n+7];if(!e||!a)throw Error(`Buffer offset out of range: first: ${e}, last: ${a}.`);return (BigInt(t[n+4]+256*t[n+5]+65536*t[n+6]+(a<<24))<<32n)+BigInt(e+256*t[++n]+65536*t[++n]+16777216*t[++n])})(e)}catch{}try{return e.subarray(n).readBigInt64LE()}catch{}try{return e.readBigInt64LE(n)}catch{}return 0n}async function lt(t,n,e,a,r,o){let i=t.data?.[0],s=t.accountIndices?.map((t=>n[t]))??[];if(1===i){let[t,n,e]=s;return {type:"spl-init-account",program:o,account:t,mint:n,owner:e}}if(3===i){let n,i,[c,l,d]=s,u="",m=l?r[l]:void 0;if(m)n=m.owner,u=m.mint;else if(l){let t=await e.rpc.getAccountInfo(l,{commitment:"confirmed",encoding:"jsonParsed"}).send(),a=t.value?.data;n=a?.parsed?.info?.owner,u=a?.parsed?.info?.mint??"",i=a?.parsed?.info?.tokenAmount?.decimals;}if(!u&&c){let t=await e.rpc.getAccountInfo(c,{commitment:"confirmed",encoding:"jsonParsed"}).send(),n=t.value?.data;u=n?.parsed?.info?.mint??"";}let p=await it({privyClient:a,chain:e.chain,mint:u}),f=p?.symbol??"";return i??=p?.decimals??9,{type:"spl-transfer",program:o,fromAta:c,fromAccount:d,toAta:l,toAccount:n,value:ct(t.data,1),token:{symbol:f,decimals:i,address:u}}}if(9===i){let[t,n,e]=s;return {type:"spl-close-account",program:o,source:t,destination:n,owner:e}}if(17===i)return {type:"spl-sync-native",program:o};throw Error(`Token program instruction type ${i} not supported`)}async function dt(t,n){let e=t.data?.[0],a$1=t.accountIndices?.map((t=>n[t]))??[];if(0===e){let[,n]=a$1;return {type:"create-account",program:a,account:n?.toString(),value:ct(t.data,4),withSeed:false}}if(2===e){let[n,e]=a$1;return {type:"sol-transfer",program:a,fromAccount:n,toAccount:e,token:{symbol:"SOL",decimals:9},value:ct(t.data,4),withSeed:false}}if(3===e){let[,n]=a$1;return {type:"create-account",program:a,account:n,withSeed:true,value:ct(t.data.slice(t.data.length-32-8-8))}}if(11===e){let[n,e]=a$1;return {type:"sol-transfer",program:a,fromAccount:n,toAccount:e,value:ct(t.data,4),token:{symbol:"SOL",decimals:9},withSeed:true}}throw Error(`System program instruction type ${e} not supported`)}async function ut(t,n,e,a,r){let o=t.accountIndices?.map((t=>n[t]))??[],i=t.data?.[0];if(143===i){let n=o[10],i=o[11];return {type:"raydium-swap-base-input",program:r,mintIn:n,mintOut:i,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:i?await it({privyClient:a,chain:e.chain,mint:i}):void 0,amountIn:ct(t.data,8),minimumAmountOut:ct(t.data,16)}}if(55===i){let n=o[10],i=o[11];return {type:"raydium-swap-base-output",program:r,mintIn:n,mintOut:i,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:i?await it({privyClient:a,chain:e.chain,mint:i}):void 0,maxAmountIn:ct(t.data,8),amountOut:ct(t.data,16)}}throw Error(`Raydium swap program instruction type ${i} not supported`)}async function mt(t,n,e,a,r){let o=t.data?.[0],i=t.accountIndices?.map((t=>n[t]))??[];if([208,51,239,151,123,43,237,92].includes(o)){let n=i[5],o=i[6];return {type:"jupiter-swap-exact-out-route",program:r,mintIn:n,mintOut:o,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:o?await it({privyClient:a,chain:e.chain,mint:o}):void 0,outAmount:ct(t.data,t.data.length-1-2-8-8),quotedInAmount:ct(t.data,t.data.length-1-2-8)}}if([176,209,105,168,154,125,69,62].includes(o)){let n=i[7],o=i[8];return {type:"jupiter-swap-exact-out-route",program:r,mintIn:n,mintOut:o,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:o?await it({privyClient:a,chain:e.chain,mint:o}):void 0,outAmount:ct(t.data,t.data.length-1-2-8-8),quotedInAmount:ct(t.data,t.data.length-1-2-8)}}if([193,32,155,51,65,214,156,129].includes(o)){let n=i[7],o=i[8];return {type:"jupiter-swap-shared-accounts-route",program:r,mintIn:n,mintOut:o,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:o?await it({privyClient:a,chain:e.chain,mint:o}):void 0,inAmount:ct(t.data,t.data.length-1-2-8-8),quotedOutAmount:ct(t.data,t.data.length-1-2-8)}}throw [62,198,214,193,213,159,108,210].includes(o)&&console.warn("Jupiter swap program instruction 'claim' not implemented"),[116,206,27,191,166,19,0,73].includes(o)&&console.warn("Jupiter swap program instruction 'claim_token' not implemented"),[26,74,236,151,104,64,183,249].includes(o)&&console.warn("Jupiter swap program instruction 'close_token' not implemented"),[229,194,212,172,8,10,134,147].includes(o)&&console.warn("Jupiter swap program instruction 'create_open_orders' not implemented"),[28,226,32,148,188,136,113,171].includes(o)&&console.warn("Jupiter swap program instruction 'create_program_open_orders' not implemented"),[232,242,197,253,240,143,129,52].includes(o)&&console.warn("Jupiter swap program instruction 'create_token_ledger' not implemented"),[147,241,123,100,244,132,174,118].includes(o)&&console.warn("Jupiter swap program instruction 'create_token_account' not implemented"),[229,23,203,151,122,227,173,42].includes(o)&&console.warn("Jupiter swap program instruction 'route' not implemented"),[150,86,71,116,167,93,14,104].includes(o)&&console.warn("Jupiter swap program instruction 'route_with_token_ledger' not implemented"),[228,85,185,112,78,79,77,2].includes(o)&&console.warn("Jupiter swap program instruction 'set_token_ledger' not implemented"),[230,121,143,80,119,159,106,170].includes(o)&&console.warn("Jupiter swap program instruction 'shared_accounts_route_with_token_ledger' not implemented"),Error(`Jupiter swap program instruction type ${o} not supported`)}const pt={component:()=>{let{data:t$2,onUserCloseViaDialogOrKeybindRef:e,setModalData:g$2,navigate:h$1}=g(),{client:y$1,closePrivyModal:w,walletProxy:k$1,showFiatPrices:v}=l(),b=le(),{user:A}=k(),I=g$1()(t$2?.standardSignAndSendTransaction?.chain??"solana:mainnet"),[S,j]=d(t$2?.standardSignAndSendTransaction?.transaction),[C$1,T$1]=d(),[x,O]=d(),[M,R]=d({value:0n,isLoading:false}),[U,V]=d(false),[z,G]=d({}),[X,Y]=d(),K$1=t$2?.standardSignAndSendTransaction?.account,N=!!t$2?.standardSignAndSendTransaction?.signOnly,Q=!!t$2?.standardSignAndSendTransaction?.isSponsored,tt=K$1?.imported?o(A).find((t=>t.address===K$1.address)):h(A),{solPrice:nt,isSolPriceLoading:at}=t({enabled:v}),rt=T((()=>{if(!C$1)return;let t=C$1.spender,n=t$1(C$1.fee),e=t$1(M.value,3,true),a=C$1.instructions.filter((t=>["sol-transfer","spl-transfer","raydium-swap-base-input","raydium-swap-base-output","jupiter-swap-shared-accounts-route","jupiter-swap-exact-out-route"].includes(t.type))),r=a.at(0);if(!r||a.length>1)return {fee:n,spender:t,balance:e};if("sol-transfer"===r.type)return {fee:n,spender:t,balance:e,total:t$1(r.value)};if("spl-transfer"===r.type)return {fee:n,spender:t,balance:e,total:`${i({amount:r.value,decimals:r.token.decimals})} ${r.token.symbol}`};if("raydium-swap-base-input"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${i({amount:r.amountIn,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${i({amount:r.minimumAmountOut,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}if("raydium-swap-base-output"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${i({amount:r.maxAmountIn,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${i({amount:r.amountOut,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}if("jupiter-swap-shared-accounts-route"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${i({amount:r.inAmount,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${i({amount:r.quotedOutAmount,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}if("jupiter-swap-exact-out-route"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${i({amount:r.quotedInAmount,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${i({amount:r.outAmount,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}return {fee:n,spender:t,balance:e}}),[C$1,K$1?.address,M]),ot=T((()=>{let t;if(!C$1||!v||!nt||at)return;function n(...t){return C(t.reduce(((t,n)=>t+n),0n),nt??0)}K$1?.address===C$1.spender&&(t=n(C$1.fee));let e=n(M.value),a=C$1.instructions.filter((t=>"sol-transfer"===t.type||"spl-transfer"===t.type)).at(0);return !a||C$1.instructions.length>1?{fee:t,balance:e}:"sol-transfer"===a.type?{fee:t,balance:e,total:n(a.value,K$1?.address===C$1.spender?C$1.fee:0n)}:"spl-transfer"===a.type?{fee:t,balance:e,total:`${i({amount:a.value,decimals:a.token.decimals})} ${a.token.symbol}`}:{fee:t,balance:e}}),[C$1,v,nt,at,K$1?.address,M]);if(y((()=>{!async function(){if(S&&y$1)try{O(void 0);let t=await st({tx:S,solanaClient:I,privyClient:y$1,checkFunds:!N&&!Q});T$1(t);}catch(t){console.error("Failed to prepare transaction",t),O(t);}}();}),[S,I,y$1,N]),y((()=>{(async function(){if(!K$1)return;R({value:M.value,isLoading:true});let{value:t}=await I.rpc.getBalance(K$1.address,{commitment:"confirmed"}).send();R({value:t??0n,isLoading:false});})().catch(console.error);}),[C$1]),!S||!t$2?.standardSignAndSendTransaction||!K$1){let e=Error("Invalid transaction request");return u(f,{error:e,allowlistConfig:b.allowlistConfig,onRetry:()=>{t$2?.standardSignAndSendTransaction?.onFailure(e),w({shouldCallAuthOnSuccess:false});}})}let it=()=>{if(!U)return z.signature||z.signedTransaction?t$2?.standardSignAndSendTransaction?.onSuccess({signature:z.signature,signedTransaction:z.signedTransaction}):t$2?.standardSignAndSendTransaction?.onFailure(X??x??Error("User exited the modal before submitting the transaction")),w({shouldCallAuthOnSuccess:false})};e.current=it;let ct=t$2.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl?/*#__PURE__*/u("img",{src:t$2.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,alt:t$2.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText}):null,lt=!!(t$2.funding&&t$2.funding.supportedOptions.length>0),dt=!C$1?.hasFunds&&lt&&!Q;if(z.signature||z.signedTransaction){let e=C$1?.instructions.filter((t=>"sol-transfer"===t.type||"spl-transfer"===t.type)),a=1===e?.length?e?.at(0):void 0;return u(et,{fees:z.fees??0n,onClose:it,transactionInfo:t$2.standardSignAndSendTransaction?.uiOptions.transactionInfo,solPrice:nt,receiptHeader:t$2.standardSignAndSendTransaction?.uiOptions.successHeader,receiptDescription:t$2.standardSignAndSendTransaction?.uiOptions.successDescription,chain:I.chain,signOnly:N,instruction:"sol-transfer"===a?.type?{to:a.toAccount,amount:a.value}:{to:a?.toAccount||a?.toAta,total:rt?.total}})}return X?/*#__PURE__*/u(oe,{transactionError:X,chainId:I.chain,onClose:it,chainType:"solana",onRetry:async()=>{Y(void 0);let{value:t}=await I.rpc.getLatestBlockhash().send();var n,e;j((n=S,e=t,pipe(getCompiledTransactionMessageDecoder().decode(u$1(n)),(t=>decompileTransactionMessage(t)),(t=>setTransactionMessageLifetimeUsingBlockhash(e,t)),(t=>compileTransaction(t)),(t=>new Uint8Array(getTransactionEncoder().encode(t))))));}}):/*#__PURE__*/u(K,{img:ct,title:t$2.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.title||"Confirm transaction",subtitle:t$2.standardSignAndSendTransaction?.uiOptions?.description||`${b.name} wants your permission to approve the following transaction.`,cta:dt?"Add funds":t$2.standardSignAndSendTransaction?.uiOptions?.buttonText||"Approve",instructions:C$1?.instructions??[],network:"solana:mainnet"==I.chain?"Solana":I.chain.replace("solana:",""),blockExplorerUrl:I.blockExplorerUrl,total:v?ot?.total:rt?.total,fee:v?ot?.fee:rt?.fee,balance:v?ot?.balance:rt?.balance,swap:rt?.swap,transactingWalletAddress:K$1.address,disabled:!C$1?.hasFunds&&!lt,isSubmitting:U,isPreparing:!C$1||M.isLoading,isTokenPriceLoading:v&&at,isMissingFunds:!C$1?.hasFunds,submitError:X??void 0,isSponsored:!!t$2.standardSignAndSendTransaction?.isSponsored,parseError:x,onClick:dt?async()=>{if(!K$1)return;if(!lt)throw Error("Funding wallet is not enabled");let n="FundingMethodSelectionScreen";g$2({...t$2,funding:{...t$2.funding,methodScreen:n},solanaFundingData:t$2?.solanaFundingData}),h$1(n);}:async()=>{try{if(V(!0),U||!K$1||!k$1||!A||!tt)return;let n=await t$2.standardSignAndSendTransaction.onConfirm(S);if("signature"in n){let t=await async function({solanaClient:t,signature:n}){let e=getBase58Decoder().decode(n),a=await t.rpc.getTransaction(e,{maxSupportedTransactionVersion:0,commitment:"confirmed",encoding:"base64"}).send().catch((()=>null));return a?{fee:a.meta?.fee??0n}:null}({solanaClient:I,signature:n.signature});return void G({...n,fees:t?.fee})}G(n);}catch(t){console.warn({transaction:S,error:t}),Y(t);}finally{V(false);}},onClose:it})}};

export { pt as StandardSignAndSendTransactionScreen, pt as default };
