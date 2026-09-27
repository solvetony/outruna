import { dj as D, dt as k, dF as v, dx as l, hA as F, dw as u, ds as We, dp as T, hB as Jr, hC as Ni, co as getAddress, dG as I, dn as y, dr as u$1, gs as I$1, dN as S, g$ as t$3, hD as Fi, hE as Mi, hF as Yr, dJ as a$1, hG as ae, eX as r, eY as t$4, eR as C, eS as x, eW as a$2, eT as y$1 } from './index-Cesj8QNb.js';
import { F as ForwardRef$2 } from './ArrowsRightLeftIcon-C4166yQJ.js';
import { h as h$1 } from './ModalFooter-BldNwiHO-BkVthzOE.js';
import { t } from './FundWalletMethodHeader-CBdY084Z-X6khIpmm.js';
import { i } from './ErrorBanner-BcpGRt0h-BLk0XE7u.js';
import { t as t$2 } from './InfoBanner-Cb3p1z12-BgeIyTge.js';
import { h, t as t$1 } from './GooglePay-B53WnudL-DQaDsX1q.js';
import { a, o, p } from './isPaymentRequestAvailable-Bq1cemEn-STMwW3KC.js';
import { e as e$1 } from './WalletCards-DH1rqayz-CBYHRPHM.js';
import { n } from './getErc20TokenInfo-CgPHS-3o-B-vjdhOt.js';
import { l as l$1 } from './index-D8ngJizK-awtOopth.js';
import { e, n as n$1, m } from './styles-C4IROdYt-GTWyAs7K.js';
import './ExclamationCircleIcon-k9LSetyb.js';
import './analytics-mkkvFRju-DEN03uoI.js';
import './LinkPasskeyScreen-BjrBgk8F-BqvrlcI3.js';
import './TodoList-DnyULl18-xIbfhgwh.js';
import './x-D-nQcPVZ.js';
import './createLucideIcon-DIQeZNF5.js';
import './check-DU5FKAb2.js';
import './ScreenLayout-XFsWudNK-BQluWI3a.js';
import './Screen-Dtn4lspb-BgsMxSzD.js';
import './index-CWARkn2w-DogxUJ9i.js';
import './circle-check-big-B2BDoXTK.js';
import './fingerprint-pattern-BOIb1eW4.js';

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

function Q(e){let n=G[e];if(!n)throw new a$1(`Unsupported chainId: ${e} for Coinbase Onramp`);return n}let G={[y$1.id]:"ethereum",[a$2.id]:"base",[x.id]:"optimism",[C.id]:"polygon",[t$4.id]:"arbitrum",[r.id]:"avacchain",[ae.id]:"monad"};const J=(e,n,t,a,o,i)=>new Promise((async(r,s)=>{let d=t$3();if(!d)return void s(Error("Unable to initialize flow"));let l="ethereum"===n.chainType?Q(n.chain.id):"solana",c=n.isUSDC?"USDC":"ethereum"===n.chainType?Fi(n.chain.id):"SOL",m=await e.initCoinbaseOnRamp({addresses:[{address:n.address,blockchains:[l]}],assets:[c]}),{url:p}=Mi({appId:e.getAppId(),input:m,amount:n.amount,blockchain:l,asset:c,experience:i});d.location=p.toString();let u={...o?.funding,showAlternateFundingMethod:true};n.usingDefaultFundingMethod&&(u.usingDefaultFundingMethod=false),t({funding:u,solanaFundingData:o?.solanaFundingData,coinbaseOnrampStatus:{popup:d}}),a("CoinbaseOnrampStatusScreen"),e.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"coinbase-onramp",value:n.amount,chainType:n.chainType,chainId:"ethereum"===n.chainType?n.chain.id:n.chain}}),setTimeout((()=>{t({funding:u,solanaFundingData:o?.solanaFundingData,coinbaseOnrampStatus:{partnerUserId:m.partner_user_id,popup:d}});}),5e3),r();})),$=async(e,n,t,a,o,i,r,s)=>{let d=t$3();if(!d)throw Error("Unable to initialize flow");let l="ethereum"===n.chainType?Yr(n.chain.id,a):n.isUSDC?"USDC_SOL":"SOL",{signedUrl:c,externalTransactionId:m}=await e.signMoonpayOnRampUrl({address:n.address,useSandbox:t.fundingMethodConfig.moonpay.useSandbox??false,config:{uiConfig:{accentColor:t.appearance.palette.accent,theme:t.appearance.palette.colorScheme},paymentMethod:s,currencyCode:l,quoteCurrencyAmount:l$1(n.amount)}});e.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"moonpay",value:n.amount,chainType:n.chainType,chainId:"ethereum"===n.chainType?n.chain.id:n.chain}}),d.location=c;let p={...r?.funding,showAlternateFundingMethod:true};n.usingDefaultFundingMethod&&(p.usingDefaultFundingMethod=false),o({moonpayStatus:{},funding:p,solanaFundingData:r?.solanaFundingData}),i("MoonpayStatusScreen"),setTimeout((()=>{o({moonpayStatus:{externalTransactionId:m},funding:p,solanaFundingData:r?.solanaFundingData});}),8e3);},V={component:()=>{let{wallets:I$2}=v(),{connectors:M}=l(),x=M.filter(F).flatMap((e=>e.wallets)),{navigate:T$1,data:k,setModalData:D}=u(),{client:A}=l(),E=We(),O=k?.funding,_=a(o),U=a(p),N="solana"===O.chainType,R=N?void 0:O,Q=T((()=>((e,n,t,a,o,i)=>{let r,s,d="solana"===t.chainType,l=d?void 0:t,c=t.isUSDC?"USDC":l?.erc20Address?void 0:"native-currency",m=!!d||c&&Jr(Number(t.chain.id),c),p=!!d||c&&Ni(Number(t.chain.id),c),u=[];for(let r of(t.preferredCardProvider&&t.supportedOptions.sort((e=>e.provider===t.preferredCardProvider?-1:1)),t.supportedOptions))"card"===r.method&&"coinbase"===r.provider&&p&&u.push((()=>J(n,t,a,o,i,"buy"))),"card"===r.method&&"moonpay"===r.provider&&m&&c&&u.push((()=>$(n,t,e,c,a,o,i,"credit_debit_card")));for(let e of t.supportedOptions)"exchange"===e.method&&"coinbase"===e.provider&&p&&(r=()=>J(n,t,a,o,i,"buy"));for(let e of i?.funding?.supportedOptions??[])"wallets"===e.method&&(s=()=>o("TransferFromWalletScreen"));return {onFundWithCard:u,onFundWithExchange:r,onFundWithWallet:s}})(E,A,O,D,T$1,k)),[E,A,O,k,D,T$1]),G=N?x.find((({address:e})=>e===O.address)):I$2.find((({address:e})=>getAddress(e)===getAddress(O.address))),V=I(G?.walletClientType||"unknown"),X=V?.name||"wallet",Z=G&&"privy"!==G.walletClientType?X:E.name,K=T((()=>O.uiConfig?.landing?.title?O.uiConfig?.landing?.title:`Add funds to your ${Z?.toLowerCase().endsWith("wallet")?Z:Z+" wallet"}`),[O.uiConfig?.landing?.title,Z]);y((()=>{if(O?.defaultFundingMethod&&O.usingDefaultFundingMethod)switch(D({funding:{...O,usingDefaultFundingMethod:false},solanaFundingData:k?.solanaFundingData}),O?.defaultFundingMethod){case "card":Q.onFundWithCard[0]&&Q.onFundWithCard[0]();break;case "exchange":Q.onFundWithExchange&&Q.onFundWithExchange();break;case "wallet":Q.onFundWithWallet&&Q.onFundWithWallet();break;case "manual":T$1("ManualTransferScreen");}}),[]),y((()=>{R?.erc20Address&&!R.erc20ContractInfo&&n({address:R.erc20Address,chain:R.chain,rpcConfig:E.rpcConfig,privyAppId:E.id}).then((e=>{D({...k,funding:{...R,erc20ContractInfo:e?{symbol:e.symbol,decimals:e.decimals}:void 0}});})).catch(console.error);}),[R?.erc20Address,R?.chain]);let Y=!(!R?.erc20Address||R?.erc20ContractInfo);return u$1(S,{children:[/*#__PURE__*/u$1(t,{}),/*#__PURE__*/u$1("h3",{children:K}),/*#__PURE__*/u$1(e,{children:[O.errorMessage&&/*#__PURE__*/u$1(i,{theme:E.appearance.palette.colorScheme,children:O.errorMessage}),Q.onFundWithCard?.[0]&&/*#__PURE__*/u$1(I$1,{disabled:Y,onClick:Q.onFundWithCard[0],children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(ForwardRef$1,{style:{width:24}})}),"Pay with card",_?/*#__PURE__*/u$1(h,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):U?/*#__PURE__*/u$1(t$1,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):null]}),Q.onFundWithExchange&&/*#__PURE__*/u$1(I$1,{disabled:Y,onClick:Q.onFundWithExchange,children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(ForwardRef$2,{style:{width:24}})}),"Transfer from an exchange"]}),Q.onFundWithWallet&&/*#__PURE__*/u$1(I$1,{disabled:Y,onClick:Q.onFundWithWallet,children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(e$1,{style:{width:24}})}),"Transfer from wallet"]}),/*#__PURE__*/u$1(I$1,{disabled:Y,onClick:()=>T$1("ManualTransferScreen"),children:[/*#__PURE__*/u$1(n$1,{children:/*#__PURE__*/u$1(ForwardRef,{style:{width:24}})}),"Receive funds"]}),O?.showAlternateFundingMethod&&Q.onFundWithCard?.[1]&&/*#__PURE__*/u$1(t$2,{theme:E.appearance.palette.colorScheme,children:["Having trouble or facing location restrictions?"," ",/*#__PURE__*/u$1(m,{onClick:Q.onFundWithCard[1],children:"Try a different provider."})]})]}),/*#__PURE__*/u$1(h$1,{})]})}};

export { V as FundingMethodSelectionScreen, V as default };
