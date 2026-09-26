import { dv as k, dl as le, di as T, dq as g, df as d, dh as y, dg as A, dk as u$1 } from './index-BzZ64suB.js';
import { K, O, q, Q } from './to-ui-error-yyFPS-Ds-DNHbtRbA.js';
import './PinInput-YqT0dSuH-DO0AiMUD.js';
import './FingerPrintIcon-Dp0QYEsS.js';
import './PhoneIcon-CYybrbT0.js';
import './ShieldCheckIcon-wmXQYlts.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './ScreenLayout-b9cixoV5-uyh6cti0.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';
import './ExclamationTriangleIcon-Erk2x7gY.js';
import './StackedContainer-B2vaEl56-C_snAy5n.js';
import './useGetTokenPrice-_x6xp2Po-B3JZVC7r.js';
import './useGetSolPrice-x7gfUIHJ-hkyRlqNS.js';
import './TransactionDetails-cezbnGxz-VqTu3fV1.js';
import './WalletLink-BD2FWKMu-xp87ddCr.js';
import './ethers-DFE0Hz-t-ClsgIU61.js';
import './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';
import './transaction-CnfuREWo-DJd_FbTW.js';
import './Layouts-BlFm53ED-D7svCVXI.js';
import './ChevronDownIcon-CBYa2-dJ.js';

const u={component:()=>{let{user:u}=k(),d$1=le(),h=T((()=>u?.mfaMethods.filter((o=>"passkey"!==o||!d$1.globalDisablePasskeys))??[]),[u?.mfaMethods,d$1.globalDisablePasskeys]),{data:j}=g(),[f,y$1]=d(h[0]),[v,k$1]=d(false),[g$1,w]=d(),[b,C]=d();if(y((()=>{y$1(h[0]);}),[h]),!j?.mfaVerify)throw Error("Missing modal data for MFA verification screen.");let{onFailure:x,onSuccess:S,generateOptions:I,verifyTotpCode:M,verifyPasskey:P,verifySmsCode:A$1,sendSmsCode:E}=j.mfaVerify,B=async o=>{if("passkey"!==o)try{y$1(o),"sms"===o&&(y$1(o),await E()),"totp"===o&&y$1(o);}catch(o){console.error(o);}else try{y$1(o);let e=await I();if(!e)throw Error("something went wrong");w(e),await P(e),k$1(!0),C(void 0),S();}catch(o){C(Q(o));}},F=async o=>{C(void 0);try{if(!o||!f)return;if("passkey"===f){if(!g$1)throw Error("Missing passkey challenge");await P(g$1);}else "sms"===f?await A$1(o):"totp"===f&&await M(o);C(void 0),k$1(!0),S();}catch(o){throw Q(o).error}},V=()=>{b||!v?x(b?.error??Error("Canceled MFA verification.")):S();},D=A(false);return y((()=>{!D.current&&f&&(D.current=true,B(f).finally((()=>{D.current=false;})));}),[open]),u?"passkey"===f?/*#__PURE__*/u$1(K,{account:u.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,e)=>e.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:v,hasBlockingError:b?.isBlocking??false,error:b?.error,onClose:V,onBack:()=>{y$1(void 0),C(void 0);},handleSubmit:()=>F(g$1).catch(C)}):"sms"===f||"totp"===f?/*#__PURE__*/u$1(O,{selectedMethod:f,submitSuccess:v,hasBlockingError:b?.isBlocking??false,handleSubmitCode:F,onClose:V,onBack:h.length>1?()=>y$1(void 0):void 0}):/*#__PURE__*/u$1(q,{mfaMethods:h,onSelect:B,handleClose:V}):null}};

export { u as MfaAuthVerifyFlowScreen, u as default };
