import { dv as k, dl as le, di as T, dq as g, df as d, dh as y, dg as A, dk as u$1 } from './index-CMy8GldA.js';
import { K, O, q, Q } from './to-ui-error-yyFPS-Ds-bsH5N7OE.js';
import './PinInput-YqT0dSuH-BIdJPQTw.js';
import './FingerPrintIcon-BfQUmgqy.js';
import './PhoneIcon-BZ7wmk9x.js';
import './ShieldCheckIcon-DoBfYvDd.js';
import './ModalHeader-C1WIsRkF-Cv84eb10.js';
import './ScreenLayout-b9cixoV5-BlKz-rU6.js';
import './Screen-My4NO62A-BBxJTWhF.js';
import './index-Dq_xe9dz-hJh_mla6.js';
import './ExclamationTriangleIcon-Uyy4j0xN.js';
import './StackedContainer-B2vaEl56-DTUyIIgB.js';
import './useGetTokenPrice-_x6xp2Po-ru-89GYj.js';
import './useGetSolPrice-x7gfUIHJ-D5dwMtB6.js';
import './TransactionDetails-cezbnGxz-CPLcqQHO.js';
import './WalletLink-BD2FWKMu-BxylgUko.js';
import './ethers-DFE0Hz-t-CvDvjl37.js';
import './getFormattedUsdFromLamports-B6EqSEho-cWADr9pv.js';
import './transaction-CnfuREWo-DJd_FbTW.js';
import './Layouts-BlFm53ED-D7TXiMXw.js';
import './ChevronDownIcon-DIJ-Ibvv.js';

const u={component:()=>{let{user:u}=k(),d$1=le(),h=T((()=>u?.mfaMethods.filter((o=>"passkey"!==o||!d$1.globalDisablePasskeys))??[]),[u?.mfaMethods,d$1.globalDisablePasskeys]),{data:j}=g(),[f,y$1]=d(h[0]),[v,k$1]=d(false),[g$1,w]=d(),[b,C]=d();if(y((()=>{y$1(h[0]);}),[h]),!j?.mfaVerify)throw Error("Missing modal data for MFA verification screen.");let{onFailure:x,onSuccess:S,generateOptions:I,verifyTotpCode:M,verifyPasskey:P,verifySmsCode:A$1,sendSmsCode:E}=j.mfaVerify,B=async o=>{if("passkey"!==o)try{y$1(o),"sms"===o&&(y$1(o),await E()),"totp"===o&&y$1(o);}catch(o){console.error(o);}else try{y$1(o);let e=await I();if(!e)throw Error("something went wrong");w(e),await P(e),k$1(!0),C(void 0),S();}catch(o){C(Q(o));}},F=async o=>{C(void 0);try{if(!o||!f)return;if("passkey"===f){if(!g$1)throw Error("Missing passkey challenge");await P(g$1);}else "sms"===f?await A$1(o):"totp"===f&&await M(o);C(void 0),k$1(!0),S();}catch(o){throw Q(o).error}},V=()=>{b||!v?x(b?.error??Error("Canceled MFA verification.")):S();},D=A(false);return y((()=>{!D.current&&f&&(D.current=true,B(f).finally((()=>{D.current=false;})));}),[open]),u?"passkey"===f?/*#__PURE__*/u$1(K,{account:u.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,e)=>e.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:v,hasBlockingError:b?.isBlocking??false,error:b?.error,onClose:V,onBack:()=>{y$1(void 0),C(void 0);},handleSubmit:()=>F(g$1).catch(C)}):"sms"===f||"totp"===f?/*#__PURE__*/u$1(O,{selectedMethod:f,submitSuccess:v,hasBlockingError:b?.isBlocking??false,handleSubmitCode:F,onClose:V,onBack:h.length>1?()=>y$1(void 0):void 0}):/*#__PURE__*/u$1(q,{mfaMethods:h,onSelect:B,handleClose:V}):null}};

export { u as MfaAuthVerifyFlowScreen, u as default };
