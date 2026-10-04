import { dB as Be, ds as We, dp as T, dl as d, hX as Vn, dn as y, dm as A, dr as u$1 } from './index-Cl25p6UW.js';
import { R, U, K, X } from './to-ui-error-DriSyvzX-CO7g_167.js';
import './PinInput-DbZ0b1i1-DCJUyFyg.js';
import './FingerPrintIcon-fkINaw8m.js';
import './PhoneIcon-Bql7wLZO.js';
import './ShieldCheckIcon-FkublWqN.js';
import './ModalFooter-BldNwiHO-DYI_DD7F.js';
import './ScreenLayout-XFsWudNK-D79MMBEv.js';
import './Screen-Dtn4lspb-DcAaoYDV.js';
import './index-CWARkn2w-dlG1gzXv.js';
import './ExclamationTriangleIcon-SJsutE4X.js';
import './StackedContainer-B2vaEl56-CexBZPIK.js';
import './useGetTokenPrice-Ufl46eND-B4o0qxDu.js';
import './useGetSolPrice-x7gfUIHJ-TTwznGGz.js';
import './TransactionDetails-BOeB1w20-DJ7-oPfy.js';
import './WalletLink-wyEl6U-t-XiVjvxQa.js';
import './ethers-DNxEwCFm-CbUlqBBm.js';
import './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';
import './transaction-BNTP-bFm-pzOkNms_.js';
import './Layouts-BMRfo5hw-msKvZJfN.js';
import './ChevronDownIcon-D64LINyL.js';

const u=({onClose:u})=>{let{user:d$1}=Be(),j=We(),h=T((()=>d$1?.mfaMethods.filter((o=>"passkey"!==o||!j.globalDisablePasskeys))??[]),[d$1?.mfaMethods,j.globalDisablePasskeys]),[f,y$1]=d(h[0]??null),{init:v,cancel:k,submit:g}=Vn(),[b,w]=d(false),[C,I]=d(null),[x,P]=d();y((()=>{y$1(h[0]??null);}),[h]);let S=A(false);async function M(o){P(void 0);try{if(!o||!f)return;await g(f,o),w(!0),P(void 0),u();}catch(o){throw X(o).error}}async function A$1(o){if("passkey"!==o)try{y$1(o),await v(o);}catch(o){console.error(o);}else try{y$1(o);let t=await v(o);if(!t)throw Error("something went wrong");I(t),await g(o,t),w(!0),P(void 0),u();}catch(o){P(X(o));}}y((()=>{!S.current&&f&&(S.current=true,A$1(f).finally((()=>{S.current=false;})));}),[]);let B=()=>{y$1(null),P(void 0),k(),u();};return d$1?"passkey"===f?/*#__PURE__*/u$1(R,{account:d$1.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,t)=>t.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:b,hasBlockingError:x?.isBlocking??false,error:x?.error,onClose:B,onBack:()=>{y$1(null),P(void 0);},handleSubmit:()=>M(C).catch(P)}):f?/*#__PURE__*/u$1(U,{submitSuccess:b,hasBlockingError:x?.isBlocking??false,handleSubmitCode:M,selectedMethod:f,onClose:B,onBack:h.length>1?()=>y$1(null):void 0}):/*#__PURE__*/u$1(K,{mfaMethods:h,onSelect:A$1,handleClose:B}):null};

export { u as MfaVerifyFlowScreen, u as default };
