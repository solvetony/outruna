import { dT as t, dN as e, dP as o$1, dR as t$1, dJ as t$2, dL as a, hf as t$3, dd as D, dm as k, dz as p, dr as l, hg as F, dq as g, dl as le, di as T, hh as p$1, ci as getAddress, dA as P, dh as y, dk as u$1, ge as j, dG as S, df as d, gG as t$7, hi as E, dC as s } from './index-CMy8GldA.js';
import { F as ForwardRef$2 } from './ArrowsRightLeftIcon-2rKkVwKs.js';
import { u as u$2 } from './ModalHeader-C1WIsRkF-Cv84eb10.js';
import { t as t$4 } from './FundWalletMethodHeader-G5sXf6Zt-DWsuSUS5.js';
import { t as t$5 } from './ErrorBanner-CQERa7bL-C3j1W-a0.js';
import { i } from './InfoBanner-DkQEPd77-Em-wDzJH.js';
import { h as h$1, t as t$6 } from './GooglePay-DA-Ff7zK-BtFWZes3.js';
import { e as e$2 } from './WalletCards-DH1rqayz-BACrr7bo.js';
import { a as a$1 } from './getErc20TokenInfo-DdZupEXp-a_tLg057.js';
import { l as l$1 } from './index-C_EPea9--C3Tgpa--.js';
import { e as e$1, n as n$1, m as m$1, f } from './styles-DLlsr-XC-BoRdtuGx.js';
import './ExclamationCircleIcon-bNkgoTDZ.js';
import './analytics-mkkvFRju-DEN03uoI.js';
import './LinkPasskeyScreen-C2ClLwr7-DujX7AQC.js';
import './TodoList-CgrU7uwu-W8gp_mue.js';
import './x-DqcucJLE.js';
import './createLucideIcon-CGZvvyHL.js';
import './check-CUZKcW1m.js';
import './ScreenLayout-b9cixoV5-BlKz-rU6.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './index-Dq_xe9dz-hJh_mla6.js';
import './circle-check-big-DRjTNw8X.js';
import './fingerprint-pattern-BUapEfQd.js';

let n=new Set([t.id,e.id,t$1.id,o$1.id,t$2.id,a.id,t$3.id]),c=new Set([t.id,e.id,o$1.id,t$1.id,t$2.id,a.id,t$3.id]),o={buy:"CARD",send:"CRYPTO_ACCOUNT"},u={USDC:"2b92315d-eab7-5bef-84fa-089a131333f5",ETH:"d85dce9b-5b73-5c3c-8978-522ce1d1c1b4",BTC:"5b71fc48-3dd3-540c-809b-f8c94d0e68b5",SOL:"4f039497-3af8-5bb3-951c-6df9afa9be1c",POL:"026bcc1e-9163-591c-a709-34dd18b2e7a1",MON:"92aa538f-b005-45cc-a237-71d6466f54d9"};({[t.id]:"ethereum",[e.id]:"base",[t$1.id]:"optimism",[o$1.id]:"polygon",[t$2.id]:"arbitrum",[a.id]:"avacchain"});function b({appId:e,input:a,amount:s,blockchain:t,asset:r,experience:d}){let i=new URL("https://pay.coinbase.com/buy/select-asset");return i.searchParams.set("appId",a.app_id),i.searchParams.set("sessionToken",a.session_token),i.searchParams.set("endPartnerName",`privy:${e}`),i.searchParams.set("defaultExperience",d),i.searchParams.set("presetCryptoAmount",s.startsWith(".")?`0${s}`:s),i.searchParams.set("defaultNetwork",t),i.searchParams.set("defaultPaymentMethod",o[d]),i.searchParams.set("defaultAsset",u[r]),i.searchParams.set("partnerUserId",a.partner_user_id),{url:i}}const m=(e,a)=>{switch(a){case "native-currency":return n.has(e);case "USDC":return c.has(e);default:return console.warn("Unknown asset passed to Coinbase Onramp"),false}};function h(e,a){return e===o$1.id?"POL":e===t$3.id?"MON":"ETH"}

function CreditCardIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
  }));
}
const ForwardRef$1 = /*#__PURE__*/ D(CreditCardIcon);

function QrCodeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/k("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/k("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
  }), /*#__PURE__*/k("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
  }));
}
const ForwardRef = /*#__PURE__*/ D(QrCodeIcon);

const B=e=>{let[n,t]=d();return y((()=>{e().then((e=>{t(e);})).catch((()=>{}));}),[]),n};function G(e){let n=Q[e];if(!n)throw new s(`Unsupported chainId: ${e} for Coinbase Onramp`);return n}let Q={[t.id]:"ethereum",[e.id]:"base",[t$1.id]:"optimism",[o$1.id]:"polygon",[t$2.id]:"arbitrum",[a.id]:"avacchain",[t$3.id]:"monad"};const $=(e,n,t,a,o,i)=>new Promise((async(r,d)=>{let s=t$7();if(!s)return void d(Error("Unable to initialize flow"));let c="ethereum"===n.chainType?G(n.chain.id):"solana",l=n.isUSDC?"USDC":"ethereum"===n.chainType?h(n.chain.id):"SOL",m=await e.initCoinbaseOnRamp({addresses:[{address:n.address,blockchains:[c]}],assets:[l]}),{url:p}=b({appId:e.getAppId(),input:m,amount:n.amount,blockchain:c,asset:l,experience:i});s.location=p.toString();let u={...o?.funding,showAlternateFundingMethod:true};n.usingDefaultFundingMethod&&(u.usingDefaultFundingMethod=false),t({funding:u,solanaFundingData:o?.solanaFundingData,coinbaseOnrampStatus:{popup:s}}),a("CoinbaseOnrampStatusScreen"),e.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"coinbase-onramp",value:n.amount,chainType:n.chainType,chainId:"ethereum"===n.chainType?n.chain.id:n.chain}}),setTimeout((()=>{t({funding:u,solanaFundingData:o?.solanaFundingData,coinbaseOnrampStatus:{partnerUserId:m.partner_user_id,popup:s}});}),5e3),r();})),X=async(e,n,t,a,o,i,r,d)=>{let s=t$7();if(!s)throw Error("Unable to initialize flow");let c="ethereum"===n.chainType?E(n.chain.id,a):n.isUSDC?"USDC_SOL":"SOL",{signedUrl:l,externalTransactionId:m}=await e.signMoonpayOnRampUrl({address:n.address,useSandbox:t.fundingMethodConfig.moonpay.useSandbox??false,config:{uiConfig:{accentColor:t.appearance.palette.accent,theme:t.appearance.palette.colorScheme},paymentMethod:d,currencyCode:c,quoteCurrencyAmount:l$1(n.amount)}});e.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"moonpay",value:n.amount,chainType:n.chainType,chainId:"ethereum"===n.chainType?n.chain.id:n.chain}}),s.location=l;let p={...r?.funding,showAlternateFundingMethod:true};n.usingDefaultFundingMethod&&(p.usingDefaultFundingMethod=false),o({moonpayStatus:{},funding:p,solanaFundingData:r?.solanaFundingData}),i("MoonpayStatusScreen"),setTimeout((()=>{o({moonpayStatus:{externalTransactionId:m},funding:p,solanaFundingData:r?.solanaFundingData});}),8e3);};let Y=async e=>"undefined"!=typeof window&&"PaymentRequest"in window&&await new window.PaymentRequest([{supportedMethods:e}],{id:"0",total:{label:"Item",amount:{currency:"USD",value:"1.00"}}}).canMakePayment();const J=()=>Y("https://apple.com/apple-pay"),K=()=>Y("https://google.com/pay"),V={component:()=>{let{wallets:r}=p(),{connectors:S$1}=l(),W=S$1.filter(F).flatMap((e=>e.wallets)),{navigate:I,data:M,setModalData:x}=g(),{client:T$1}=l(),D=le(),k=M?.funding,A=B(J),E=B(K),_="solana"===k.chainType,P$1=_?void 0:k,L=T((()=>((e,n,t,a,o,i)=>{let r,d,s="solana"===t.chainType,c=s?void 0:t,l=t.isUSDC?"USDC":c?.erc20Address?void 0:"native-currency",m$1=!!s||l&&p$1(Number(t.chain.id),l),p=!!s||l&&m(Number(t.chain.id),l),u=[];for(let r of(t.preferredCardProvider&&t.supportedOptions.sort((e=>e.provider===t.preferredCardProvider?-1:1)),t.supportedOptions))"card"===r.method&&"coinbase"===r.provider&&p&&u.push((()=>$(n,t,a,o,i,"buy"))),"card"===r.method&&"moonpay"===r.provider&&m$1&&l&&u.push((()=>X(n,t,e,l,a,o,i,"credit_debit_card")));for(let e of t.supportedOptions)"exchange"===e.method&&"coinbase"===e.provider&&p&&(r=()=>$(n,t,a,o,i,"buy"));for(let e of i?.funding?.supportedOptions??[])"wallets"===e.method&&(d=()=>o("TransferFromWalletScreen"));return {onFundWithCard:u,onFundWithExchange:r,onFundWithWallet:d}})(D,T$1,k,x,I,M)),[D,T$1,k,M,x,I]),G=_?W.find((({address:e})=>e===k.address)):r.find((({address:e})=>getAddress(e)===getAddress(k.address))),Q=P(G?.walletClientType||"unknown"),Y=Q?.name||"wallet",V=G&&"privy"!==G.walletClientType?Y:D.name,Z=T((()=>k.uiConfig?.landing?.title?k.uiConfig?.landing?.title:`Add funds to your ${V?.toLowerCase().endsWith("wallet")?V:V+" wallet"}`),[k.uiConfig?.landing?.title,V]);y((()=>{if(k?.defaultFundingMethod&&k.usingDefaultFundingMethod)switch(x({funding:{...k,usingDefaultFundingMethod:false},solanaFundingData:M?.solanaFundingData}),k?.defaultFundingMethod){case "card":L.onFundWithCard[0]&&L.onFundWithCard[0]();break;case "exchange":L.onFundWithExchange&&L.onFundWithExchange();break;case "wallet":L.onFundWithWallet&&L.onFundWithWallet();break;case "manual":I("ManualTransferScreen");}}),[]),y((()=>{P$1?.erc20Address&&!P$1.erc20ContractInfo&&a$1({address:P$1.erc20Address,chain:P$1.chain,rpcConfig:D.rpcConfig,privyAppId:D.id}).then((e=>{x({...M,funding:{...P$1,erc20ContractInfo:e?{symbol:e.symbol,decimals:e.decimals}:void 0}});})).catch(console.error);}),[P$1?.erc20Address,P$1?.chain]);let ee=!(!P$1?.erc20Address||P$1?.erc20ContractInfo);return u$1(S,{children:[/*#__PURE__*/u$1(t$4,{}),/*#__PURE__*/u$1("h3",{children:Z}),/*#__PURE__*/u$1(e$1,{children:[k.errorMessage&&/*#__PURE__*/u$1(t$5,{theme:D.appearance.palette.colorScheme,children:k.errorMessage}),L.onFundWithCard?.[0]&&/*#__PURE__*/u$1(j,{disabled:ee,onClick:L.onFundWithCard[0],children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(ForwardRef$1,{style:{width:24}})}),"Pay with card",A?/*#__PURE__*/u$1(h$1,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):E?/*#__PURE__*/u$1(t$6,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):null]}),L.onFundWithExchange&&/*#__PURE__*/u$1(j,{disabled:ee,onClick:L.onFundWithExchange,children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(ForwardRef$2,{style:{width:24}})}),"Transfer from an exchange"]}),L.onFundWithWallet&&/*#__PURE__*/u$1(j,{disabled:ee,onClick:L.onFundWithWallet,children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(e$2,{style:{width:24}})}),"Transfer from wallet"]}),/*#__PURE__*/u$1(j,{disabled:ee,onClick:()=>I("ManualTransferScreen"),children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(ForwardRef,{style:{width:24}})}),"Receive funds"]}),k?.showAlternateFundingMethod&&L.onFundWithCard?.[1]&&/*#__PURE__*/u$1(i,{theme:D.appearance.palette.colorScheme,children:/*#__PURE__*/u$1(m$1,{children:["Having trouble or facing location restrictions?"," ",/*#__PURE__*/u$1(f,{onClick:L.onFundWithCard[1],children:"Try a different provider."})]})})]}),/*#__PURE__*/u$1(u$2,{})]})}};

export { V as FundingMethodSelectionScreen, V as default };
