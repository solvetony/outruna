import { dB as Be, dx as l, dw as u, dl as d, dn as y, ic as ae, f9 as m, i9 as C, ia as A$1, dr as u$1, eG as B, dA as gt, i as isHex, cB as hexToString, dN as S$1, id as base64 } from './index-CPWVoOsP.js';
import { h } from './CopyToClipboard-i_OQSBJr-BrYbCYRX.js';
import { d as d$1 } from './Layouts-BMRfo5hw-vBHriiS2.js';
import { a, i } from './JsonTree-BHzNC-ic-QyCJteuN.js';
import { n } from './ScreenLayout-XFsWudNK-Dy0L-ckL.js';
import { c as createLucideIcon } from './createLucideIcon-7kZA5_hm.js';
import './ModalFooter-BldNwiHO-D8r0EtXN.js';
import './Screen-Dtn4lspb-D7quXLJv.js';
import './index-CWARkn2w-BCsAGrk1.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
];
const SquarePen = createLucideIcon("square-pen", __iconNode);

const T=gt.img`
  && {
    height: ${e=>"sm"===e.size?"65px":"140px"};
    width: ${e=>"sm"===e.size?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let v=e=>{if(!isHex(e))return e;try{let o=hexToString(e);return o.includes("�")?e:o}catch{return e}},S=e=>{try{let o=base64.decode(e),t=(new TextDecoder).decode(o);return t.includes("�")?e:t}catch{return e}},E=r=>{let{types:i,primaryType:n,...a}=r.typedData;return u$1(S$1,{children:[/*#__PURE__*/u$1(A,{data:a}),/*#__PURE__*/u$1(h,{text:(s=r.typedData,JSON.stringify(s,null,2)),itemName:"full payload to clipboard"})," "]});var s;};const L=({method:t,messageData:r,copy:n$1,iconUrl:a,isLoading:s,success:l,walletProxyIsLoading:c,errorMessage:m,isCancellable:p,onSign:u,onCancel:g,onClose:h})=>/*#__PURE__*/u$1(n,{title:n$1.title,subtitle:n$1.description,showClose:true,onClose:h,icon:SquarePen,iconVariant:"subtle",helpText:m?/*#__PURE__*/u$1(D,{children:m}):void 0,primaryCta:{label:n$1.buttonText,onClick:u,disabled:s||l||c,loading:s},secondaryCta:p?{label:"Not now",onClick:g,disabled:s||l||c}:void 0,watermark:true,children:/*#__PURE__*/u$1(d$1,{children:[a?/*#__PURE__*/u$1(T,{style:{alignSelf:"center"},size:"sm",src:a,alt:"app image"}):null,/*#__PURE__*/u$1(_,{children:["personal_sign"===t&&/*#__PURE__*/u$1(M,{children:v(r)}),"eth_signTypedData_v4"===t&&/*#__PURE__*/u$1(E,{typedData:r}),"solana_signMessage"===t&&/*#__PURE__*/u$1(M,{children:S(r)})]})]})}),R={component:()=>{let{authenticated:o}=Be(),{initializeWalletProxy:t,closePrivyModal:r}=l(),{navigate:i,data:s,onUserCloseViaDialogOrKeybindRef:l$1}=u(),[c,p]=d(true),[d$1,u$2]=d(""),[g,w]=d(),[T,v]=d(null),[S,E]=d(false);y((()=>{o||i("LandingScreen");}),[o]),y((()=>{t(ae).then((e=>{p(false),e||(u$2("An error has occurred, please try again."),w(new m(new C(d$1,A$1.E32603_DEFAULT_INTERNAL_ERROR.eipCode))));}));}),[]);let{method:R,data:_,confirmAndSign:D,onSuccess:A,onFailure:M,uiOptions:U}=s.signMessage,k={title:U?.title||"Sign message",description:U?.description||"Signing this message will not cost you any fees.",buttonText:U?.buttonText||"Sign and continue"},I=e=>{e?A(e):M(g||new m(new C("The user rejected the request.",A$1.E4001_USER_REJECTED_REQUEST.eipCode))),r({shouldCallAuthOnSuccess:false}),setTimeout((()=>{v(null),u$2(""),w(void 0);}),200);};l$1.current=()=>{I(T);};return u$1(L,{method:R,messageData:_,copy:k,iconUrl:U?.iconUrl&&"string"==typeof U.iconUrl?U.iconUrl:void 0,isLoading:S,success:null!==T,walletProxyIsLoading:c,errorMessage:d$1,isCancellable:U?.isCancellable,onSign:async()=>{E(true),u$2("");try{let e=await D();v(e),E(!1),setTimeout((()=>{I(e);}),B);}catch(e){console.error(e),u$2("An error has occurred, please try again."),w(new m(new C(d$1,A$1.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),E(false);}},onCancel:()=>I(null),onClose:()=>I(T)})}};let _=gt.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,D=gt.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,A=gt(a)`
  margin-top: 0;
`,M=gt(i)`
  margin-top: 0;
`;

export { R as SignRequestScreen, L as SignRequestView, R as default };
