import { dv as k, dr as l, dq as g, df as d, dh as y, gI as O, f6 as S$1, hJ as N, hK as n, dk as u, eJ as g$1, du as gt, i as isHex, cw as hexToString, dG as S$2, hM as base64 } from './index-BzZ64suB.js';
import { h } from './CopyToClipboard-DSTf_eKU-DATJRmFK.js';
import { a } from './Layouts-BlFm53ED-D7svCVXI.js';
import { a as a$1, i } from './JsonTree-aPaJmPx7-CBFMH8h6.js';
import { n as n$1 } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import { c as createLucideIcon } from './createLucideIcon-BUXdLDa7.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

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

const w=gt.img`
  && {
    height: ${e=>"sm"===e.size?"65px":"140px"};
    width: ${e=>"sm"===e.size?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let T=e=>{if(!isHex(e))return e;try{let t=hexToString(e);return t.includes("�")?e:t}catch{return e}},S=e=>{try{let t=base64.decode(e),o=(new TextDecoder).decode(t);return o.includes("�")?e:o}catch{return e}},E=r=>{let{types:i,primaryType:n,...a}=r.typedData;return u(S$2,{children:[/*#__PURE__*/u(A,{data:a}),/*#__PURE__*/u(h,{text:(s=r.typedData,JSON.stringify(s,null,2)),itemName:"full payload to clipboard"})," "]});var s;};const R=({method:o,messageData:r,copy:n,iconUrl:a$1,isLoading:s,success:l,walletProxyIsLoading:c,errorMessage:m,isCancellable:p,onSign:u$1,onCancel:g,onClose:h})=>/*#__PURE__*/u(n$1,{title:n.title,subtitle:n.description,showClose:true,onClose:h,icon:SquarePen,iconVariant:"subtle",helpText:m?/*#__PURE__*/u(L,{children:m}):void 0,primaryCta:{label:n.buttonText,onClick:u$1,disabled:s||l||c,loading:s},secondaryCta:p?{label:"Not now",onClick:g,disabled:s||l||c}:void 0,watermark:true,children:/*#__PURE__*/u(a,{children:[a$1?/*#__PURE__*/u(w,{style:{alignSelf:"center"},size:"sm",src:a$1,alt:"app image"}):null,/*#__PURE__*/u(D,{children:["personal_sign"===o&&/*#__PURE__*/u(U,{children:T(r)}),"eth_signTypedData_v4"===o&&/*#__PURE__*/u(E,{typedData:r}),"solana_signMessage"===o&&/*#__PURE__*/u(U,{children:S(r)})]})]})}),_={component:()=>{let{authenticated:t}=k(),{initializeWalletProxy:o,closePrivyModal:r}=l(),{navigate:i,data:s,onUserCloseViaDialogOrKeybindRef:l$1}=g(),[c,p]=d(true),[d$1,u$1]=d(""),[g$2,b]=d(),[w,T]=d(null),[S,E]=d(false);y((()=>{t||i("LandingScreen");}),[t]),y((()=>{o(O).then((e=>{p(false),e||(u$1("An error has occurred, please try again."),b(new S$1(new N(d$1,n.E32603_DEFAULT_INTERNAL_ERROR.eipCode))));}));}),[]);let{method:_,data:D,confirmAndSign:L,onSuccess:A,onFailure:U,uiOptions:M}=s.signMessage,I={title:M?.title||"Sign message",description:M?.description||"Signing this message will not cost you any fees.",buttonText:M?.buttonText||"Sign and continue"},k$1=e=>{e?A(e):U(g$2||new S$1(new N("The user rejected the request.",n.E4001_USER_REJECTED_REQUEST.eipCode))),r({shouldCallAuthOnSuccess:false}),setTimeout((()=>{T(null),u$1(""),b(void 0);}),200);};l$1.current=()=>{k$1(w);};return u(R,{method:_,messageData:D,copy:I,iconUrl:M?.iconUrl&&"string"==typeof M.iconUrl?M.iconUrl:void 0,isLoading:S,success:null!==w,walletProxyIsLoading:c,errorMessage:d$1,isCancellable:M?.isCancellable,onSign:async()=>{E(true),u$1("");try{let e=await L();T(e),E(!1),setTimeout((()=>{k$1(e);}),g$1);}catch(e){console.error(e),u$1("An error has occurred, please try again."),b(new S$1(new N(d$1,n.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),E(false);}},onCancel:()=>k$1(null),onClose:()=>k$1(w)})}};let D=gt.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,L=gt.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,A=gt(a$1)`
  margin-top: 0;
`,U=gt(i)`
  margin-top: 0;
`;

export { _ as SignRequestScreen, R as SignRequestView, _ as default };
