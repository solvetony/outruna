import { dv as k, dl as le, di as T, df as d, hx as $a, dh as y, dg as A, dk as u$1 } from './index-YiUby3C-.js';
import { K, O, q, Q } from './to-ui-error-yyFPS-Ds-BEb43lYy.js';
import './PinInput-YqT0dSuH-q5t7qJpI.js';
import './FingerPrintIcon-BFy3UPBX.js';
import './PhoneIcon-BMzaf3Og.js';
import './ShieldCheckIcon-DkQW-wCL.js';
import './ModalHeader-C1WIsRkF-C8Dss9Lk.js';
import './ScreenLayout-b9cixoV5-CH-hckRr.js';
import './Screen-My4NO62A-B0fsS_yH.js';
import './index-Dq_xe9dz-t6shERUf.js';
import './ExclamationTriangleIcon-DvE7JbJC.js';
import './StackedContainer-B2vaEl56-DG0bYqaU.js';
import './useGetTokenPrice-_x6xp2Po-CCh-k3s6.js';
import './useGetSolPrice-x7gfUIHJ-LdcZAhsL.js';
import './TransactionDetails-cezbnGxz-BeUV8ftY.js';
import './WalletLink-BD2FWKMu-Ci3UcYG7.js';
import './ethers-DFE0Hz-t-B1DDYQZO.js';
import './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';
import './transaction-CnfuREWo-DJd_FbTW.js';
import './Layouts-BlFm53ED-DRgPKdqs.js';
import './ChevronDownIcon-D2oAX7sD.js';

const u=({onClose:u})=>{let{user:d$1}=k(),h=le(),j=T((()=>d$1?.mfaMethods.filter((o=>"passkey"!==o||!h.globalDisablePasskeys))??[]),[d$1?.mfaMethods,h.globalDisablePasskeys]),[f,v]=d(j[0]??null),{init:y$1,cancel:k$1,submit:g}=$a(),[b,w]=d(false),[x,C]=d(null),[I,P]=d();y((()=>{v(j[0]??null);}),[j]);let S=A(false);async function M(o){P(void 0);try{if(!o||!f)return;await g(f,o),w(!0),P(void 0),u();}catch(o){throw Q(o).error}}async function A$1(o){if("passkey"!==o)try{v(o),await y$1(o);}catch(o){console.error(o);}else try{v(o);let t=await y$1(o);if(!t)throw Error("something went wrong");C(t),await g(o,t),w(!0),P(void 0),u();}catch(o){P(Q(o));}}y((()=>{!S.current&&f&&(S.current=true,A$1(f).finally((()=>{S.current=false;})));}),[]);let B=()=>{v(null),P(void 0),k$1(),u();};return d$1?"passkey"===f?/*#__PURE__*/u$1(K,{account:d$1.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,t)=>t.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:b,hasBlockingError:I?.isBlocking??false,error:I?.error,onClose:B,onBack:()=>{v(null),P(void 0);},handleSubmit:()=>M(x).catch(P)}):f?/*#__PURE__*/u$1(O,{submitSuccess:b,hasBlockingError:I?.isBlocking??false,handleSubmitCode:M,selectedMethod:f,onClose:B,onBack:j.length>1?()=>v(null):void 0}):/*#__PURE__*/u$1(q,{mfaMethods:j,onSelect:A$1,handleClose:B}):null};

export { u as MfaVerifyFlowScreen, u as default };
