import { dB as Be, ds as We, dp as T, dl as d, hX as Vn, dn as y, dm as A, dr as u$1 } from './index-rPHJETNO.js';
import { R, U, K, X } from './to-ui-error-DriSyvzX-CLx1WwcV.js';
import './PinInput-DbZ0b1i1-B3Q2a6O3.js';
import './FingerPrintIcon-wR2_S-WB.js';
import './PhoneIcon-MN30mQV6.js';
import './ShieldCheckIcon-4Pz_qI1v.js';
import './ModalFooter-BldNwiHO-D54d5Pwl.js';
import './ScreenLayout-XFsWudNK-DRWbUTUm.js';
import './Screen-Dtn4lspb-B2aRBf0T.js';
import './index-CWARkn2w-Bd0gFDpa.js';
import './ExclamationTriangleIcon-C-Y1rJ8O.js';
import './StackedContainer-B2vaEl56-CKcjFQHn.js';
import './useGetTokenPrice-Ufl46eND-BNq0qIHE.js';
import './useGetSolPrice-x7gfUIHJ-Bt0eSML4.js';
import './TransactionDetails-BOeB1w20-C-nReH8g.js';
import './WalletLink-wyEl6U-t--AoNwZCI.js';
import './ethers-DNxEwCFm-8OEpdhu8.js';
import './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';
import './transaction-BNTP-bFm-pzOkNms_.js';
import './Layouts-BMRfo5hw-YjqlS4sE.js';
import './ChevronDownIcon-Bg7sQ7JY.js';

const u=({onClose:u})=>{let{user:d$1}=Be(),j=We(),h=T((()=>d$1?.mfaMethods.filter((o=>"passkey"!==o||!j.globalDisablePasskeys))??[]),[d$1?.mfaMethods,j.globalDisablePasskeys]),[f,y$1]=d(h[0]??null),{init:v,cancel:k,submit:g}=Vn(),[b,w]=d(false),[C,I]=d(null),[x,P]=d();y((()=>{y$1(h[0]??null);}),[h]);let S=A(false);async function M(o){P(void 0);try{if(!o||!f)return;await g(f,o),w(!0),P(void 0),u();}catch(o){throw X(o).error}}async function A$1(o){if("passkey"!==o)try{y$1(o),await v(o);}catch(o){console.error(o);}else try{y$1(o);let t=await v(o);if(!t)throw Error("something went wrong");I(t),await g(o,t),w(!0),P(void 0),u();}catch(o){P(X(o));}}y((()=>{!S.current&&f&&(S.current=true,A$1(f).finally((()=>{S.current=false;})));}),[]);let B=()=>{y$1(null),P(void 0),k(),u();};return d$1?"passkey"===f?/*#__PURE__*/u$1(R,{account:d$1.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,t)=>t.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:b,hasBlockingError:x?.isBlocking??false,error:x?.error,onClose:B,onBack:()=>{y$1(null),P(void 0);},handleSubmit:()=>M(C).catch(P)}):f?/*#__PURE__*/u$1(U,{submitSuccess:b,hasBlockingError:x?.isBlocking??false,handleSubmitCode:M,selectedMethod:f,onClose:B,onBack:h.length>1?()=>y$1(null):void 0}):/*#__PURE__*/u$1(K,{mfaMethods:h,onSelect:A$1,handleClose:B}):null};

export { u as MfaVerifyFlowScreen, u as default };
