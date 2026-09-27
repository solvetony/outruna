import { dB as Be, ds as We, dp as T, dw as u, dl as d$1, dn as y, dm as A, dr as u$1 } from './index-EUcPO3t8.js';
import { R, U, K, X } from './to-ui-error-DriSyvzX-DaWBP2uI.js';
import './PinInput-DbZ0b1i1-rD5EWHfK.js';
import './FingerPrintIcon-BWBCq82w.js';
import './PhoneIcon-BckBpzVK.js';
import './ShieldCheckIcon-CW5G-5xz.js';
import './ModalFooter-BldNwiHO-cbbk5I2M.js';
import './ScreenLayout-XFsWudNK-0BUZ2wqz.js';
import './Screen-Dtn4lspb-DHq1H6v0.js';
import './index-CWARkn2w-CNB395Bz.js';
import './ExclamationTriangleIcon-D5--BvsL.js';
import './StackedContainer-B2vaEl56-Bbg1bNbM.js';
import './useGetTokenPrice-Ufl46eND-Cs6mvQRn.js';
import './useGetSolPrice-x7gfUIHJ-C2NlWCxd.js';
import './TransactionDetails-BOeB1w20-BUP4yWdj.js';
import './WalletLink-wyEl6U-t-Cg_EEbUl.js';
import './ethers-DNxEwCFm-DG4AxIHz.js';
import './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';
import './transaction-BNTP-bFm-pzOkNms_.js';
import './Layouts-BMRfo5hw-CqtHRzhq.js';
import './ChevronDownIcon-D10tpXpQ.js';

const d={component:()=>{let{user:d}=Be(),u$2=We(),h=T((()=>d?.mfaMethods.filter((o=>"passkey"!==o||!u$2.globalDisablePasskeys))??[]),[d?.mfaMethods,u$2.globalDisablePasskeys]),{data:j}=u(),[f,y$1]=d$1(h[0]),[v,k]=d$1(false),[g,w]=d$1(),[b,C]=d$1();if(y((()=>{y$1(h[0]);}),[h]),!j?.mfaVerify)throw Error("Missing modal data for MFA verification screen.");let{onFailure:M,onSuccess:S,generateOptions:I,verifyTotpCode:P,verifyPasskey:x,verifySmsCode:A$1,sendSmsCode:E}=j.mfaVerify,F=async o=>{if("passkey"!==o)try{y$1(o),"sms"===o&&(y$1(o),await E()),"totp"===o&&y$1(o);}catch(o){console.error(o);}else try{y$1(o);let t=await I();if(!t)throw Error("something went wrong");w(t),await x(t),k(!0),C(void 0),S();}catch(o){C(X(o));}},V=async o=>{C(void 0);try{if(!o||!f)return;if("passkey"===f){if(!g)throw Error("Missing passkey challenge");await x(g);}else "sms"===f?await A$1(o):"totp"===f&&await P(o);C(void 0),k(!0),S();}catch(o){throw X(o).error}},B=()=>{b||!v?M(b?.error??Error("Canceled MFA verification.")):S();},L=A(false);return y((()=>{!L.current&&f&&(L.current=true,F(f).finally((()=>{L.current=false;})));}),[open]),d?"passkey"===f?/*#__PURE__*/u$1(R,{account:d.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,t)=>t.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:v,hasBlockingError:b?.isBlocking??false,error:b?.error,onClose:B,onBack:()=>{y$1(void 0),C(void 0);},handleSubmit:()=>V(g).catch(C)}):"sms"===f||"totp"===f?/*#__PURE__*/u$1(U,{selectedMethod:f,submitSuccess:v,hasBlockingError:b?.isBlocking??false,handleSubmitCode:V,onClose:B,onBack:h.length>1?()=>y$1(void 0):void 0}):/*#__PURE__*/u$1(K,{mfaMethods:h,onSelect:F,handleClose:B}):null}};

export { d as MfaAuthVerifyFlowScreen, d as default };
