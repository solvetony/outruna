import { dF as v, dx as l, hA as F, dw as u, ds as We, dl as d, dK as o, dr as u$1, dN as S, dn as y, dH as Za, cm as formatUnits, dp as T, hM as ta, hN as ea, hO as vn } from './index-DzW10a_X.js';
import { b, h } from './ModalFooter-BldNwiHO-icJc5Gc0.js';
import { a } from './Layouts-BMRfo5hw-BJ9zYJBw.js';
import { x as x$1 } from './QrCode-cA9rnMIN-C5xjKU9j.js';
import { t as t$2 } from './FundWalletMethodHeader-CBdY084Z-DfrRlWwH.js';
import { t as t$3 } from './InfoBanner-Cb3p1z12-DQlQYOua.js';
import { r } from './Subtitle-CV-2yKE4-DuBHpj6B.js';
import { e as e$1 } from './Title-BnzYV3Is-B2yxgMP6.js';
import { j } from './WalletInfoCard-zmo6O2YN-C2gq95RS.js';
import { s } from './useWalletBalance-CZnP5f_f-BAFadBD3.js';
import { t } from './analytics-mkkvFRju-DEN03uoI.js';
import { e } from './getChainName-DjpPdUSc-D0Rbdx8r.js';
import { n } from './getUsdcMintAddress-BVgm9GRo-MFpIh-EZ.js';
import { t as t$1 } from './transaction-BNTP-bFm-pzOkNms_.js';
import { n as n$1 } from './getErc20Balance-jXNpFf0N-x0N5eVjn.js';
import './dijkstra-3x-KSy8X.js';
import './ErrorMessage-D8VaAP5m-aLAqa4jt.js';
import './LabelXs-oqZNqbm_-nHSqQDzL.js';
import './Address-DMC9FYV2-D0yBFBNR.js';
import './check-BCKs4uvT.js';
import './createLucideIcon-DhFLRiVw.js';
import './copy-BHi4oxaR.js';
import './shared-FM0rljBt-DHcMiHfK.js';
import './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';

const U={component:()=>{let{wallets:k}=v(),{connectors:U}=l(),L=U.filter(F).flatMap((e=>e.wallets)),{data:$,setModalData:E,navigate:P,lastScreen:W}=u(),{rpcConfig:O,appId:q,createAnalyticsEvent:H,closePrivyModal:N}=l(),Q=We(),[R,z]=d(void 0),[X,J]=d(false),K=$?.funding,{reloadBalance:V}=s({rpcConfig:O,appId:q,address:"ethereum"===K.chainType?K.address:void 0,chain:"ethereum"===K.chainType?K.chain:void 0}),Y="solana"===K.chainType,_=Y?K.isUSDC?"USDC":"SOL":K.erc20Address?K.erc20ContractInfo?.symbol:K.chain.nativeCurrency.symbol,G=Y?L.find((({address:e})=>e===K.address)):k.find((({address:e})=>o(e)===o(K.address)));if(!K)return E({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:W||"FundingMethodSelectionScreen"},funding:$?.funding,solanaFundingData:$?.solanaFundingData,sendTransaction:$?.sendTransaction}),P("ErrorScreen"),/*#__PURE__*/u$1(S,{});y((()=>{let e=Y?async function(){if("solana"!==K.chainType)return;let e=Q.solanaRpcs[K.chain];e?(K.isUSDC?async function({rpc:e,address:r,mintAddress:t}){let o=await e.getTokenAccountsByOwner(r,{mint:t},{encoding:"jsonParsed",commitment:"confirmed"}).send(),i=o.value[0]?.account;return i?BigInt(i.data.parsed.info.tokenAmount.amount):0n}({rpc:e.rpc,address:K.address,mintAddress:n(K.chain)}):Za({rpc:e.rpc,address:K.address})).then((e=>{let r=BigInt(e);R&&r>R&&(J(true),H({eventName:t,payload:{provider:"manual",status:"success",chainType:"solana",address:G?.address,value:K.isUSDC?formatUnits(r-R,6):formatUnits(r-R,9),token:K.isUSDC?"USDC":"SOL"}})),z(r);})):console.warn("Unable to load solana rpc, skipping balance");}:async function(){"ethereum"===K.chainType&&(async()=>{if(!K.erc20Address)return await V()??BigInt(0);{let{balance:e}=await n$1({chain:K.chain,address:K.address,erc20Address:K.erc20Address,rpcConfig:O,appId:q});return e}})().then((e=>{R&&e>R&&(J(true),H({eventName:t,payload:{provider:"manual",status:"success",chainType:"ethereum",address:G?.address,chainId:K.chain.id,value:formatUnits(e-R,K.erc20ContractInfo?.decimals??18),token:K.erc20ContractInfo?.symbol??K.erc20Address??"ETH"}})),z(e);})).catch((()=>z(void 0)));},r=setInterval(e,2e3);return e(),()=>clearInterval(r)}),[R]);let Z=T((()=>null==R?"":K.isUSDC?ta({amount:R,decimals:6}):Y?t$1(R,3,true,true):null!=K.erc20ContractInfo?.decimals?ta({amount:R,decimals:K.erc20ContractInfo.decimals}):ea({wei:R})),[R,Y,K]),ee="ethereum"===K.chainType?K.chain.name:e(K.chain),re=T((()=>""===K.uiConfig?.receiveFundsTitle?null:/*#__PURE__*/u$1(e$1,{children:K.uiConfig?.receiveFundsTitle??`Receive ${K.amount} ${_??""}`.trim()})),[K.uiConfig?.receiveFundsTitle,K.amount,_]),te=T((()=>""===K.uiConfig?.receiveFundsSubtitle?null:/*#__PURE__*/u$1(r,{children:K.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${ee}.`})),[K.uiConfig?.receiveFundsSubtitle,ee]),oe="solana"===K.chainType&&K.isUSDC&&n(K.chain)?`?spl-token=${n(K.chain)}`:"";return u$1(S,{children:[/*#__PURE__*/u$1(t$2,{}),re,te,/*#__PURE__*/u$1(a,{style:{gap:"1rem",margin:re||te?"1rem 0":"0"},children:[/*#__PURE__*/u$1(x$1,{url:`${K.chainType}:${K.address}${oe}`,size:200,squareLogoElement:x}),/*#__PURE__*/u$1(t$3,{theme:Q.appearance.palette.colorScheme,children:["Make sure to send funds on ",ee,"."]}),/*#__PURE__*/u$1(j,{title:"Your wallet",errMsg:void 0,showCopyButton:true,balance:`${Z} ${_}`,address:K.address}),X&&/*#__PURE__*/u$1(b,{onClick:()=>N({shouldCallAuthOnSuccess:false,isSuccess:true}),children:"Continue"})]}),/*#__PURE__*/u$1(h,{})]})}};let x=({...r})=>/*#__PURE__*/u$1(vn,{color:"black",...r});

export { U as ManualTransferScreen, U as default };
