import { dz as p, dr as l, hg as F, dq as g, dl as le, df as d, dD as A, dk as u, dG as S, dh as y, dB as la, cg as formatUnits, di as T, ho as Ea } from './index-CMy8GldA.js';
import { m, u as u$1 } from './ModalHeader-C1WIsRkF-Cv84eb10.js';
import { d as d$1 } from './Layouts-BlFm53ED-D7TXiMXw.js';
import { C } from './QrCode-mmar0Iu7-CmBmTovL.js';
import { t as t$3 } from './FundWalletMethodHeader-G5sXf6Zt-DWsuSUS5.js';
import { i as i$1 } from './InfoBanner-DkQEPd77-Em-wDzJH.js';
import { r as r$1 } from './Subtitle-CV-2yKE4-DtqYDZ_P.js';
import { e as e$1 } from './Title-BnzYV3Is-Dxm52BGP.js';
import { j } from './WalletInfoCard-pBDMfJDY-BV8kM52u.js';
import { s } from './useWalletBalance-D47dI-xh-CkyOl9L5.js';
import { t } from './analytics-mkkvFRju-DEN03uoI.js';
import { e } from './getChainName-DjpPdUSc-D0Rbdx8r.js';
import { r } from './getUsdcMintAddress-DFI1hv05-DMQUaTC-.js';
import { t as t$1 } from './transaction-CnfuREWo-DJd_FbTW.js';
import { n } from './getErc20Balance-DHgWH7_1-BHldAt_M.js';
import { i, t as t$2 } from './formatters-0lHSi8rZ.js';
import './dijkstra-3x-KSy8X.js';
import './ErrorMessage-D8VaAP5m-BtOlOmCK.js';
import './LabelXs-oqZNqbm_-DTv326zF.js';
import './Address--RvzbtOt-DQMCWwv9.js';
import './check-CUZKcW1m.js';
import './createLucideIcon-CGZvvyHL.js';
import './copy-1Bdb-AWp.js';
import './shared-FM0rljBt-Bpk4nV9C.js';
import './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';

const x={component:()=>{let{wallets:T$1}=p(),{connectors:x}=l(),E=x.filter(F).flatMap((e=>e.wallets)),{data:$,setModalData:L,navigate:P,lastScreen:W}=g(),{rpcConfig:O,appId:q,createAnalyticsEvent:H,closePrivyModal:N}=l(),z=le(),[Q,R]=d(void 0),[X,J]=d(false),V=$?.funding,{reloadBalance:Y}=s({rpcConfig:O,appId:q,address:"ethereum"===V.chainType?V.address:void 0,chain:"ethereum"===V.chainType?V.chain:void 0}),G="solana"===V.chainType,K=G?V.isUSDC?"USDC":"SOL":V.erc20Address?V.erc20ContractInfo?.symbol:V.chain.nativeCurrency.symbol,Z=G?E.find((({address:e})=>e===V.address)):T$1.find((({address:e})=>A(e)===A(V.address)));if(!V)return L({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:W||"FundingMethodSelectionScreen"},funding:$?.funding,solanaFundingData:$?.solanaFundingData,sendTransaction:$?.sendTransaction}),P("ErrorScreen"),/*#__PURE__*/u(S,{});y((()=>{let e=G?async function(){if("solana"!==V.chainType)return;let e=z.solanaRpcs[V.chain];e?(V.isUSDC?async function({rpc:e,address:r,mintAddress:t}){let o=await e.getTokenAccountsByOwner(r,{mint:t},{encoding:"jsonParsed",commitment:"confirmed"}).send(),i=o.value[0]?.account;return i?BigInt(i.data.parsed.info.tokenAmount.amount):0n}({rpc:e.rpc,address:V.address,mintAddress:r(V.chain)}):la({rpc:e.rpc,address:V.address})).then((e=>{let r=BigInt(e);Q&&r>Q&&(J(true),H({eventName:t,payload:{provider:"manual",status:"success",chainType:"solana",address:Z?.address,value:V.isUSDC?formatUnits(r-Q,6):formatUnits(r-Q,9),token:V.isUSDC?"USDC":"SOL"}})),R(r);})):console.warn("Unable to load solana rpc, skipping balance");}:async function(){"ethereum"===V.chainType&&(async()=>{if(!V.erc20Address)return await Y()??BigInt(0);{let{balance:e}=await n({chain:V.chain,address:V.address,erc20Address:V.erc20Address,rpcConfig:O,appId:q});return e}})().then((e=>{Q&&e>Q&&(J(true),H({eventName:t,payload:{provider:"manual",status:"success",chainType:"ethereum",address:Z?.address,chainId:V.chain.id,value:formatUnits(e-Q,V.erc20ContractInfo?.decimals??18),token:V.erc20ContractInfo?.symbol??V.erc20Address??"ETH"}})),R(e);})).catch((()=>R(void 0)));},r$1=setInterval(e,2e3);return e(),()=>clearInterval(r$1)}),[Q]);let _=T((()=>null==Q?"":V.isUSDC?i({amount:Q,decimals:6}):G?t$1(Q,3,true,true):null!=V.erc20ContractInfo?.decimals?i({amount:Q,decimals:V.erc20ContractInfo.decimals}):t$2({wei:Q})),[Q,G,V]),ee="ethereum"===V.chainType?V.chain.name:e(V.chain),re=T((()=>""===V.uiConfig?.receiveFundsTitle?null:/*#__PURE__*/u(e$1,{children:V.uiConfig?.receiveFundsTitle??`Receive ${V.amount} ${K??""}`.trim()})),[V.uiConfig?.receiveFundsTitle,V.amount,K]),te=T((()=>""===V.uiConfig?.receiveFundsSubtitle?null:/*#__PURE__*/u(r$1,{children:V.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${ee}.`})),[V.uiConfig?.receiveFundsSubtitle,ee]),oe="solana"===V.chainType&&V.isUSDC&&r(V.chain)?`?spl-token=${r(V.chain)}`:"";return u(S,{children:[/*#__PURE__*/u(t$3,{}),re,te,/*#__PURE__*/u(d$1,{style:{gap:"1rem",margin:re||te?"1rem 0":"0"},children:[/*#__PURE__*/u(C,{url:`${V.chainType}:${V.address}${oe}`,size:200,squareLogoElement:U}),/*#__PURE__*/u(i$1,{theme:z.appearance.palette.colorScheme,children:["Make sure to send funds on ",ee,"."]}),/*#__PURE__*/u(j,{title:"Your wallet",errMsg:void 0,showCopyButton:true,balance:`${_} ${K}`,address:V.address}),X&&/*#__PURE__*/u(m,{onClick:()=>N({shouldCallAuthOnSuccess:false,isSuccess:true}),children:"Continue"})]}),/*#__PURE__*/u(u$1,{})]})}};let U=({...r})=>/*#__PURE__*/u(Ea,{color:"black",...r});

export { x as ManualTransferScreen, x as default };
