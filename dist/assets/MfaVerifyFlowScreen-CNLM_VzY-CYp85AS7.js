import { dv as k, dl as le, di as T, df as d, hx as $a, dh as y, dg as A, dk as u$1 } from './index-BLGlf-uE.js';
import { K, O, q, Q } from './to-ui-error-yyFPS-Ds-CIUACCaq.js';
import './PinInput-YqT0dSuH-CFLBJ8sK.js';
import './FingerPrintIcon-BAMHGb0-.js';
import './PhoneIcon-BOecPtKm.js';
import './ShieldCheckIcon-BmhIkxLR.js';
import './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './index-Dq_xe9dz-eZF2dpYh.js';
import './ExclamationTriangleIcon-CztF7Wet.js';
import './StackedContainer-B2vaEl56-BaMGFiRb.js';
import './useGetTokenPrice-_x6xp2Po-gWCeM6DX.js';
import './useGetSolPrice-x7gfUIHJ-C-pExW28.js';
import './TransactionDetails-cezbnGxz-CYmB4PuV.js';
import './WalletLink-BD2FWKMu-DfgOi-aM.js';
import './ethers-DFE0Hz-t-CLyj7jax.js';
import './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';
import './transaction-CnfuREWo-DJd_FbTW.js';
import './Layouts-BlFm53ED-CYqWOXMK.js';
import './ChevronDownIcon-uiJT9pHc.js';

const u=({onClose:u})=>{let{user:d$1}=k(),h=le(),j=T((()=>d$1?.mfaMethods.filter((o=>"passkey"!==o||!h.globalDisablePasskeys))??[]),[d$1?.mfaMethods,h.globalDisablePasskeys]),[f,v]=d(j[0]??null),{init:y$1,cancel:k$1,submit:g}=$a(),[b,w]=d(false),[x,C]=d(null),[I,P]=d();y((()=>{v(j[0]??null);}),[j]);let S=A(false);async function M(o){P(void 0);try{if(!o||!f)return;await g(f,o),w(!0),P(void 0),u();}catch(o){throw Q(o).error}}async function A$1(o){if("passkey"!==o)try{v(o),await y$1(o);}catch(o){console.error(o);}else try{v(o);let t=await y$1(o);if(!t)throw Error("something went wrong");C(t),await g(o,t),w(!0),P(void 0),u();}catch(o){P(Q(o));}}y((()=>{!S.current&&f&&(S.current=true,A$1(f).finally((()=>{S.current=false;})));}),[]);let B=()=>{v(null),P(void 0),k$1(),u();};return d$1?"passkey"===f?/*#__PURE__*/u$1(K,{account:d$1.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,t)=>t.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:b,hasBlockingError:I?.isBlocking??false,error:I?.error,onClose:B,onBack:()=>{v(null),P(void 0);},handleSubmit:()=>M(x).catch(P)}):f?/*#__PURE__*/u$1(O,{submitSuccess:b,hasBlockingError:I?.isBlocking??false,handleSubmitCode:M,selectedMethod:f,onClose:B,onBack:j.length>1?()=>v(null):void 0}):/*#__PURE__*/u$1(q,{mfaMethods:j,onSelect:A$1,handleClose:B}):null};

export { u as MfaVerifyFlowScreen, u as default };
