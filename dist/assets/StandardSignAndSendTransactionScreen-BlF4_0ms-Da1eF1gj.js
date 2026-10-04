import { ie as SolanaError, ig as SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED, ih as SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND, ii as getBase64Encoder, dw as u, dx as l, ds as We, dB as Be, hl as ht, dl as d, ij as k, gG as F, dp as T, hM as ta, dn as y, dr as u$1, hm as pipe, ik as getCompiledTransactionMessageDecoder, hy as ot$1, hj as getBase58Decoder, gr as $, dN as S, dA as gt, il as it$1, hn as getTransactionEncoder, hs as compileTransaction, hu as setTransactionMessageLifetimeUsingBlockhash, im as decompileTransactionMessage } from './index-Cl25p6UW.js';
import { t } from './useGetSolPrice-x7gfUIHJ-TTwznGGz.js';
import { ErrorScreenView as f } from './ErrorScreen-CZXyXJwt-Be9XGaRb.js';
import { F as ForwardRef } from './CheckCircleIcon-BiJCrjBf.js';
import { L, h, b as b$1 } from './ModalFooter-BldNwiHO-DYI_DD7F.js';
import { s } from './Layouts-BMRfo5hw-msKvZJfN.js';
import { o as o$2 } from './ScreenHeader-CHmc4-Lu-CuQ5a23F.js';
import { s as s$1, e as e$1, n, t as t$3 } from './Value-DTgR824E-rFX8iVSI.js';
import { f as f$1, S as S$1 } from './WalletLink-wyEl6U-t-XiVjvxQa.js';
import { i } from './StackedContainer-B2vaEl56-CexBZPIK.js';
import { o as oe, G } from './TransactionErrorView-CHChscnJ-BKskq0cd.js';
import { t as t$1 } from './transaction-BNTP-bFm-pzOkNms_.js';
import { r, e, d as d$1, a, C, o as o$1, b, n as n$1 } from './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';
import { t as t$2, o } from './simulateTransaction-CP42l5SJ-DP8qwpsO.js';
import './reservoir-x-nGuZkT-D3tOj5Gj.js';
import './safe-url-D7SRPu33-B4C4HSRI.js';
import './ScreenLayout-XFsWudNK-D79MMBEv.js';
import './Screen-Dtn4lspb-DcAaoYDV.js';
import './index-CWARkn2w-dlG1gzXv.js';
import './triangle-alert-CkAtwUdQ.js';
import './createLucideIcon-BxaKzdjV.js';
import './lock-BRmf3EDV.js';
import './LoadingSkeleton-BMsgO5PV-CfZ9KNdN.js';
import './ethers-DNxEwCFm-CbUlqBBm.js';
import './ErrorMessage-D8VaAP5m-Dc48JYnP.js';
import './LabelXs-oqZNqbm_-DS5jkNVo.js';
import './Subtitle-CV-2yKE4-CTbaql9x.js';
import './Title-BnzYV3Is-MhCOK0fa.js';
import './Address-DMC9FYV2-Bsonh0Ea.js';
import './check-CUIZ2C5m.js';
import './copy-BrEjolja.js';
import './WalletInfoCard-zmo6O2YN-CqMQQ087.js';
import './shared-FM0rljBt-BbqWEp6x.js';
import './Checkbox-D1EDeo41-CeBGvwnj.js';
import './ErrorBanner-BcpGRt0h-B2L54sgX.js';
import './ExclamationCircleIcon-Dwvkg6ZB.js';
import './WarningBanner-ZZqCEtZK-CszGTznj.js';
import './ExclamationTriangleIcon-SJsutE4X.js';
import './ChevronDownIcon-D64LINyL.js';

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
`,nt=({instruction:e,fees:a,transactionInfo:r,solPrice:o,chain:i})=>/*#__PURE__*/u$1(t$3,{children:[r?.action&&/*#__PURE__*/u$1(s$1,{children:[/*#__PURE__*/u$1(e$1,{children:"Action"}),/*#__PURE__*/u$1(n,{children:r.action})]}),null!=e?.total&&/*#__PURE__*/u$1(s$1,{children:[/*#__PURE__*/u$1(e$1,{children:"Total"}),/*#__PURE__*/u$1(n,{children:e.total})]}),!e?.total&&null!=e?.amount&&/*#__PURE__*/u$1(s$1,{children:[/*#__PURE__*/u$1(e$1,{children:"Total"}),/*#__PURE__*/u$1(n,{children:/*#__PURE__*/u$1(f$1,{quantities:[e.amount,a],tokenPrice:o})})]}),/*#__PURE__*/u$1(s$1,{children:[/*#__PURE__*/u$1(e$1,{children:"Fees"}),/*#__PURE__*/u$1(n,{children:/*#__PURE__*/u$1(f$1,{quantities:[a],tokenPrice:o})})]}),e?.to&&/*#__PURE__*/u$1(s$1,{children:[/*#__PURE__*/u$1(e$1,{children:"To"}),/*#__PURE__*/u$1(n,{children:/*#__PURE__*/u$1(S$1,{walletAddress:e.to,chainId:i,chainType:"solana"})})]})]}),et=({fees:a,onClose:r,receiptHeader:o,receiptDescription:i$1,transactionInfo:s$1,solPrice:c,signOnly:l,instruction:d,chain:m})=>/*#__PURE__*/u$1(S,{children:[/*#__PURE__*/u$1(L,{onClose:r}),/*#__PURE__*/u$1(i,{style:{marginBottom:"16px"},children:/*#__PURE__*/u$1("div",{children:[/*#__PURE__*/u$1(tt,{color:"var(--privy-color-success-light)"}),/*#__PURE__*/u$1(ForwardRef,{height:38,width:38,strokeWidth:2,stroke:"var(--privy-color-success)"})]})}),/*#__PURE__*/u$1(o$2,{title:o??`Transaction ${l?"signed":"complete"}!`,description:i$1??"You're all set."}),/*#__PURE__*/u$1(nt,{solPrice:c,instruction:d,fees:a,transactionInfo:s$1,chain:m}),/*#__PURE__*/u$1($,{}),/*#__PURE__*/u$1(at,{loading:false,onClick:r,children:"Close"}),/*#__PURE__*/u$1(s,{}),/*#__PURE__*/u$1(h,{})]});let at=gt(b$1)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;async function rt(t,n){try{return await t}catch{return n}}function ot(t){switch(t){case "solana:mainnet":return "mainnet-beta";case "solana:devnet":return "devnet";case "solana:testnet":return "testnet"}}async function it({privyClient:t,chain:n,mint:e}){let a=n$1[n];if(!a[e]){let r=await t.getSplTokenMetadata({mintAddress:e,cluster:ot(n)});r&&(a[e]={address:e,symbol:r.symbol,decimals:r.decimals});}return a[e]}async function st({tx:t,solanaClient:n,privyClient:e$1,checkFunds:a$1}){let r=getCompiledTransactionMessageDecoder().decode(ot$1(t)),o$2=r.staticAccounts[0]??"",i=await t$2({solanaClient:n,tx:t}),s=a$1?await rt(o({solanaClient:n,tx:t})):void 0,c=s?.hasFunds??true,l={},d=[],m=await async function({solanaClient:t,message:n}){if(!("addressTableLookups"in n)||!n.addressTableLookups)return [...n.staticAccounts];let e=n.addressTableLookups.map((t=>t.lookupTableAddress)),a=await fetchAddressesForLookupTables(e,t.rpc),r=e.map(((t,e)=>[...n.addressTableLookups[e]?.writableIndexes.map((n=>{let r=a[t]?.[n];if(r)return {key:r,isWritable:true,altIdx:e}}))??[],...n.addressTableLookups[e]?.readonlyIndexes.map((n=>{let r=a[t]?.[n];if(r)return {key:r,isWritable:false,altIdx:e}}))??[]])).flat().filter((t=>!!t)).sort(((t,n)=>t.isWritable!==n.isWritable?t.isWritable?-1:1:t.altIdx-n.altIdx)).map((({key:t})=>t));return [...n.staticAccounts,...r]}({solanaClient:n,message:r});for(let t of r.instructions){let a$1=r.staticAccounts[t.programAddressIndex]||"";if(a$1!==e&&a$1!==d$1)if(a$1!==a){if(a$1===C){let n=await rt(function(t,n,e){let[a,r,o,i]=t.accountIndices?.map((t=>n[t]))??[];return {type:"ata-creation",program:e,payer:a,ata:r,owner:o,mint:i}}(t,m,a$1));if(!n){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}if(d.push(n),n.ata&&n.owner&&n.mint){l[n.ata]={owner:n.owner,mint:n.mint};continue}}if(o$1.includes(a$1)){let r=await rt(mt(t,m,n,e$1,a$1));if(!r){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(r);}else if(b.includes(a$1)){let r=await rt(ut(t,m,n,e$1,a$1));if(!r){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(r);}else d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});}else {let n=await rt(dt(t,m));if(!n){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(n);}else {let r=await rt(lt(t,m,n,e$1,l,a$1));if(!r){d.push({type:"unknown",program:a$1,discriminator:t.data?.[0]});continue}d.push(r),"spl-transfer"===r.type&&(r.fromAta&&r.fromAccount&&r.token.address&&(l[r.fromAta]??={owner:r.fromAccount,mint:r.token.address}),r.toAta&&r.toAccount&&r.token.address&&(l[r.toAta]??={owner:r.toAccount,mint:r.token.address}));}}return {spender:o$2,fee:i,instructions:d,hasFunds:!!c}}function ct(t,n=0){try{return function(t,n=0){let e=0n;for(let a=0;a<8;a++)e|=BigInt(t[n+a])<<BigInt(8*a);return e}(t,n)}catch{}try{return t.readBigInt64LE(n)}catch{}let e=it$1(t);try{return ((t,n=0)=>{let e=t[n],a=t[n+7];if(!e||!a)throw Error(`Buffer offset out of range: first: ${e}, last: ${a}.`);return (BigInt(t[n+4]+256*t[n+5]+65536*t[n+6]+(a<<24))<<32n)+BigInt(e+256*t[++n]+65536*t[++n]+16777216*t[++n])})(e)}catch{}try{return e.subarray(n).readBigInt64LE()}catch{}try{return e.readBigInt64LE(n)}catch{}return 0n}async function lt(t,n,e,a,r,o){let i=t.data?.[0],s=t.accountIndices?.map((t=>n[t]))??[];if(1===i){let[t,n,e]=s;return {type:"spl-init-account",program:o,account:t,mint:n,owner:e}}if(3===i){let n,i,[c,l,d]=s,m="",u=l?r[l]:void 0;if(u)n=u.owner,m=u.mint;else if(l){let t=await e.rpc.getAccountInfo(l,{commitment:"confirmed",encoding:"jsonParsed"}).send(),a=t.value?.data;n=a?.parsed?.info?.owner,m=a?.parsed?.info?.mint??"",i=a?.parsed?.info?.tokenAmount?.decimals;}if(!m&&c){let t=await e.rpc.getAccountInfo(c,{commitment:"confirmed",encoding:"jsonParsed"}).send(),n=t.value?.data;m=n?.parsed?.info?.mint??"";}let p=await it({privyClient:a,chain:e.chain,mint:m}),f=p?.symbol??"";return i??=p?.decimals??9,{type:"spl-transfer",program:o,fromAta:c,fromAccount:d,toAta:l,toAccount:n,value:ct(t.data,1),token:{symbol:f,decimals:i,address:m}}}if(9===i){let[t,n,e]=s;return {type:"spl-close-account",program:o,source:t,destination:n,owner:e}}if(17===i)return {type:"spl-sync-native",program:o};throw Error(`Token program instruction type ${i} not supported`)}async function dt(t,n){let e=t.data?.[0],a$1=t.accountIndices?.map((t=>n[t]))??[];if(0===e){let[,n]=a$1;return {type:"create-account",program:a,account:n?.toString(),value:ct(t.data,4),withSeed:false}}if(2===e){let[n,e]=a$1;return {type:"sol-transfer",program:a,fromAccount:n,toAccount:e,token:{symbol:"SOL",decimals:9},value:ct(t.data,4),withSeed:false}}if(3===e){let[,n]=a$1;return {type:"create-account",program:a,account:n,withSeed:true,value:ct(t.data.slice(t.data.length-32-8-8))}}if(11===e){let[n,e]=a$1;return {type:"sol-transfer",program:a,fromAccount:n,toAccount:e,value:ct(t.data,4),token:{symbol:"SOL",decimals:9},withSeed:true}}throw Error(`System program instruction type ${e} not supported`)}async function mt(t,n,e,a,r){let o=t.accountIndices?.map((t=>n[t]))??[],i=t.data?.[0];if(143===i){let n=o[10],i=o[11];return {type:"raydium-swap-base-input",program:r,mintIn:n,mintOut:i,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:i?await it({privyClient:a,chain:e.chain,mint:i}):void 0,amountIn:ct(t.data,8),minimumAmountOut:ct(t.data,16)}}if(55===i){let n=o[10],i=o[11];return {type:"raydium-swap-base-output",program:r,mintIn:n,mintOut:i,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:i?await it({privyClient:a,chain:e.chain,mint:i}):void 0,maxAmountIn:ct(t.data,8),amountOut:ct(t.data,16)}}throw Error(`Raydium swap program instruction type ${i} not supported`)}async function ut(t,n,e,a,r){let o=t.data?.[0],i=t.accountIndices?.map((t=>n[t]))??[];if([208,51,239,151,123,43,237,92].includes(o)){let n=i[5],o=i[6];return {type:"jupiter-swap-exact-out-route",program:r,mintIn:n,mintOut:o,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:o?await it({privyClient:a,chain:e.chain,mint:o}):void 0,outAmount:ct(t.data,t.data.length-1-2-8-8),quotedInAmount:ct(t.data,t.data.length-1-2-8)}}if([176,209,105,168,154,125,69,62].includes(o)){let n=i[7],o=i[8];return {type:"jupiter-swap-exact-out-route",program:r,mintIn:n,mintOut:o,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:o?await it({privyClient:a,chain:e.chain,mint:o}):void 0,outAmount:ct(t.data,t.data.length-1-2-8-8),quotedInAmount:ct(t.data,t.data.length-1-2-8)}}if([193,32,155,51,65,214,156,129].includes(o)){let n=i[7],o=i[8];return {type:"jupiter-swap-shared-accounts-route",program:r,mintIn:n,mintOut:o,tokenIn:n?await it({privyClient:a,chain:e.chain,mint:n}):void 0,tokenOut:o?await it({privyClient:a,chain:e.chain,mint:o}):void 0,inAmount:ct(t.data,t.data.length-1-2-8-8),quotedOutAmount:ct(t.data,t.data.length-1-2-8)}}throw [62,198,214,193,213,159,108,210].includes(o)&&console.warn("Jupiter swap program instruction 'claim' not implemented"),[116,206,27,191,166,19,0,73].includes(o)&&console.warn("Jupiter swap program instruction 'claim_token' not implemented"),[26,74,236,151,104,64,183,249].includes(o)&&console.warn("Jupiter swap program instruction 'close_token' not implemented"),[229,194,212,172,8,10,134,147].includes(o)&&console.warn("Jupiter swap program instruction 'create_open_orders' not implemented"),[28,226,32,148,188,136,113,171].includes(o)&&console.warn("Jupiter swap program instruction 'create_program_open_orders' not implemented"),[232,242,197,253,240,143,129,52].includes(o)&&console.warn("Jupiter swap program instruction 'create_token_ledger' not implemented"),[147,241,123,100,244,132,174,118].includes(o)&&console.warn("Jupiter swap program instruction 'create_token_account' not implemented"),[229,23,203,151,122,227,173,42].includes(o)&&console.warn("Jupiter swap program instruction 'route' not implemented"),[150,86,71,116,167,93,14,104].includes(o)&&console.warn("Jupiter swap program instruction 'route_with_token_ledger' not implemented"),[228,85,185,112,78,79,77,2].includes(o)&&console.warn("Jupiter swap program instruction 'set_token_ledger' not implemented"),[230,121,143,80,119,159,106,170].includes(o)&&console.warn("Jupiter swap program instruction 'shared_accounts_route_with_token_ledger' not implemented"),Error(`Jupiter swap program instruction type ${o} not supported`)}const pt={component:()=>{let{data:t$2,onUserCloseViaDialogOrKeybindRef:e,setModalData:g,navigate:h}=u(),{client:y$1,closePrivyModal:w,walletProxy:k$1,showFiatPrices:v}=l(),b=We(),{user:A}=Be(),I=ht()(t$2?.standardSignAndSendTransaction?.chain??"solana:mainnet"),[S,j]=d(t$2?.standardSignAndSendTransaction?.transaction),[C,T$1]=d(),[O,x]=d(),[M,R]=d({value:0n,isLoading:false}),[H,z]=d(false),[G$1,X]=d({}),[Q,Y]=d(),K=t$2?.standardSignAndSendTransaction?.account,N=!!t$2?.standardSignAndSendTransaction?.signOnly,Z=!!t$2?.standardSignAndSendTransaction?.isSponsored,tt=K?.imported?k(A).find((t=>t.address===K.address)):F(A),{solPrice:nt,isSolPriceLoading:at}=t({enabled:v}),rt=T((()=>{if(!C)return;let t=C.spender,n=t$1(C.fee),e=t$1(M.value,3,true),a=C.instructions.filter((t=>["sol-transfer","spl-transfer","raydium-swap-base-input","raydium-swap-base-output","jupiter-swap-shared-accounts-route","jupiter-swap-exact-out-route"].includes(t.type))),r=a.at(0);if(!r||a.length>1)return {fee:n,spender:t,balance:e};if("sol-transfer"===r.type)return {fee:n,spender:t,balance:e,total:t$1(r.value)};if("spl-transfer"===r.type)return {fee:n,spender:t,balance:e,total:`${ta({amount:r.value,decimals:r.token.decimals})} ${r.token.symbol}`};if("raydium-swap-base-input"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${ta({amount:r.amountIn,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${ta({amount:r.minimumAmountOut,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}if("raydium-swap-base-output"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${ta({amount:r.maxAmountIn,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${ta({amount:r.amountOut,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}if("jupiter-swap-shared-accounts-route"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${ta({amount:r.inAmount,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${ta({amount:r.quotedOutAmount,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}if("jupiter-swap-exact-out-route"===r.type&&r.tokenIn&&r.tokenOut){return {fee:n,spender:t,balance:e,swap:`${`${ta({amount:r.quotedInAmount,decimals:r.tokenIn.decimals})} ${r.tokenIn.symbol}`} → ${`${ta({amount:r.outAmount,decimals:r.tokenOut.decimals})} ${r.tokenOut.symbol}`}`}}return {fee:n,spender:t,balance:e}}),[C,K?.address,M]),ot=T((()=>{let t;if(!C||!v||!nt||at)return;function n(...t){return r(t.reduce(((t,n)=>t+n),0n),nt??0)}K?.address===C.spender&&(t=n(C.fee));let e=n(M.value),a=C.instructions.filter((t=>"sol-transfer"===t.type||"spl-transfer"===t.type)).at(0);return !a||C.instructions.length>1?{fee:t,balance:e}:"sol-transfer"===a.type?{fee:t,balance:e,total:n(a.value,K?.address===C.spender?C.fee:0n)}:"spl-transfer"===a.type?{fee:t,balance:e,total:`${ta({amount:a.value,decimals:a.token.decimals})} ${a.token.symbol}`}:{fee:t,balance:e}}),[C,v,nt,at,K?.address,M]);if(y((()=>{!async function(){if(S&&y$1)try{x(void 0);let t=await st({tx:S,solanaClient:I,privyClient:y$1,checkFunds:!N&&!Z});T$1(t);}catch(t){console.error("Failed to prepare transaction",t),x(t);}}();}),[S,I,y$1,N]),y((()=>{(async function(){if(!K)return;R({value:M.value,isLoading:true});let{value:t}=await I.rpc.getBalance(K.address,{commitment:"confirmed"}).send();R({value:t??0n,isLoading:false});})().catch(console.error);}),[C]),!S||!t$2?.standardSignAndSendTransaction||!K){let e=Error("Invalid transaction request");return u$1(f,{error:e,allowlistConfig:b.allowlistConfig,onRetry:()=>{t$2?.standardSignAndSendTransaction?.onFailure(e),w({shouldCallAuthOnSuccess:false});}})}let it=()=>{if(!H)return G$1.signature||G$1.signedTransaction?t$2?.standardSignAndSendTransaction?.onSuccess({signature:G$1.signature,signedTransaction:G$1.signedTransaction}):t$2?.standardSignAndSendTransaction?.onFailure(Q??O??Error("User exited the modal before submitting the transaction")),w({shouldCallAuthOnSuccess:false})};e.current=it;let ct=t$2.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl?/*#__PURE__*/u$1("img",{src:t$2.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,alt:t$2.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText}):null,lt=!!(t$2.funding&&t$2.funding.supportedOptions.length>0),dt=!C?.hasFunds&&lt&&!Z;if(G$1.signature||G$1.signedTransaction){let e=C?.instructions.filter((t=>"sol-transfer"===t.type||"spl-transfer"===t.type)),a=1===e?.length?e?.at(0):void 0;return u$1(et,{fees:G$1.fees??0n,onClose:it,transactionInfo:t$2.standardSignAndSendTransaction?.uiOptions.transactionInfo,solPrice:nt,receiptHeader:t$2.standardSignAndSendTransaction?.uiOptions.successHeader,receiptDescription:t$2.standardSignAndSendTransaction?.uiOptions.successDescription,chain:I.chain,signOnly:N,instruction:"sol-transfer"===a?.type?{to:a.toAccount,amount:a.value}:{to:a?.toAccount||a?.toAta,total:rt?.total}})}return Q?/*#__PURE__*/u$1(oe,{transactionError:Q,chainId:I.chain,onClose:it,chainType:"solana",onRetry:async()=>{Y(void 0);let{value:t}=await I.rpc.getLatestBlockhash().send();var n,e;j((n=S,e=t,pipe(getCompiledTransactionMessageDecoder().decode(ot$1(n)),(t=>decompileTransactionMessage(t)),(t=>setTransactionMessageLifetimeUsingBlockhash(e,t)),(t=>compileTransaction(t)),(t=>new Uint8Array(getTransactionEncoder().encode(t))))));}}):/*#__PURE__*/u$1(G,{img:ct,title:t$2.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.title||"Confirm transaction",subtitle:t$2.standardSignAndSendTransaction?.uiOptions?.description||`${b.name} wants your permission to approve the following transaction.`,cta:dt?"Add funds":t$2.standardSignAndSendTransaction?.uiOptions?.buttonText||"Approve",instructions:C?.instructions??[],network:"solana:mainnet"==I.chain?"Solana":I.chain.replace("solana:",""),blockExplorerUrl:I.blockExplorerUrl,total:v?ot?.total:rt?.total,fee:v?ot?.fee:rt?.fee,balance:v?ot?.balance:rt?.balance,swap:rt?.swap,transactingWalletAddress:K.address,disabled:!C?.hasFunds&&!lt,isSubmitting:H,isPreparing:!C||M.isLoading,isTokenPriceLoading:v&&at,isMissingFunds:!C?.hasFunds,submitError:Q??void 0,isSponsored:!!t$2.standardSignAndSendTransaction?.isSponsored,parseError:O,onClick:dt?async()=>{if(!K)return;if(!lt)throw Error("Funding wallet is not enabled");let n="FundingMethodSelectionScreen";g({...t$2,funding:{...t$2.funding,methodScreen:n},solanaFundingData:t$2?.solanaFundingData}),h(n);}:async()=>{try{if(z(!0),H||!K||!k$1||!A||!tt)return;let n=await t$2.standardSignAndSendTransaction.onConfirm(S);if("signature"in n){let t=await async function({solanaClient:t,signature:n}){let e=getBase58Decoder().decode(n),a=await t.rpc.getTransaction(e,{maxSupportedTransactionVersion:0,commitment:"confirmed",encoding:"base64"}).send().catch((()=>null));return a?{fee:a.meta?.fee??0n}:null}({solanaClient:I,signature:n.signature});return void X({...n,fees:t?.fee})}X(n);}catch(t){console.warn({transaction:S,error:t}),Y(t);}finally{z(false);}},onClose:it})}};

export { pt as StandardSignAndSendTransactionScreen, pt as default };
