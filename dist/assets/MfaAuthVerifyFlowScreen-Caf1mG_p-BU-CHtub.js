import { dB as Be, ds as We, dp as T, dw as u, dl as d$1, dn as y, dm as A, dr as u$1 } from './index-DH2EW3Lt.js';
import { R, U, K, X } from './to-ui-error-DriSyvzX-CFp3CMQS.js';
import './PinInput-DbZ0b1i1-DaPKxiGk.js';
import './FingerPrintIcon-_mI6ga8N.js';
import './PhoneIcon-qusgOQjE.js';
import './ShieldCheckIcon-D-VDgiXk.js';
import './ModalFooter-BldNwiHO-CtorPV4s.js';
import './ScreenLayout-XFsWudNK-BlTVWJR3.js';
import './Screen-Dtn4lspb-DGpHO03i.js';
import './index-CWARkn2w-9yAptxdf.js';
import './ExclamationTriangleIcon-DyK310uG.js';
import './StackedContainer-B2vaEl56-CZThOp3Z.js';
import './useGetTokenPrice-Ufl46eND-Dxnto2SZ.js';
import './useGetSolPrice-x7gfUIHJ-CmwiflJ_.js';
import './TransactionDetails-BOeB1w20-mOaO1K24.js';
import './WalletLink-wyEl6U-t-Ovyomc7j.js';
import './ethers-DNxEwCFm-BmUf5psB.js';
import './getFormattedUsdFromLamports-De3U9GlO-DEGCue3X.js';
import './transaction-BNTP-bFm-pzOkNms_.js';
import './Layouts-BMRfo5hw-Dk3LWv1V.js';
import './ChevronDownIcon-BC7tW7EE.js';

const d={component:()=>{let{user:d}=Be(),u$2=We(),h=T((()=>d?.mfaMethods.filter((o=>"passkey"!==o||!u$2.globalDisablePasskeys))??[]),[d?.mfaMethods,u$2.globalDisablePasskeys]),{data:j}=u(),[f,y$1]=d$1(h[0]),[v,k]=d$1(false),[g,w]=d$1(),[b,C]=d$1();if(y((()=>{y$1(h[0]);}),[h]),!j?.mfaVerify)throw Error("Missing modal data for MFA verification screen.");let{onFailure:M,onSuccess:S,generateOptions:I,verifyTotpCode:P,verifyPasskey:x,verifySmsCode:A$1,sendSmsCode:E}=j.mfaVerify,F=async o=>{if("passkey"!==o)try{y$1(o),"sms"===o&&(y$1(o),await E()),"totp"===o&&y$1(o);}catch(o){console.error(o);}else try{y$1(o);let t=await I();if(!t)throw Error("something went wrong");w(t),await x(t),k(!0),C(void 0),S();}catch(o){C(X(o));}},V=async o=>{C(void 0);try{if(!o||!f)return;if("passkey"===f){if(!g)throw Error("Missing passkey challenge");await x(g);}else "sms"===f?await A$1(o):"totp"===f&&await P(o);C(void 0),k(!0),S();}catch(o){throw X(o).error}},B=()=>{b||!v?M(b?.error??Error("Canceled MFA verification.")):S();},L=A(false);return y((()=>{!L.current&&f&&(L.current=true,F(f).finally((()=>{L.current=false;})));}),[open]),d?"passkey"===f?/*#__PURE__*/u$1(R,{account:d.linkedAccounts.filter((o=>"passkey"===o.type&&o.enrolledInMfa)).sort(((o,t)=>t.firstVerifiedAt.valueOf()-o.firstVerifiedAt.valueOf()))[0],submitSuccess:v,hasBlockingError:b?.isBlocking??false,error:b?.error,onClose:B,onBack:()=>{y$1(void 0),C(void 0);},handleSubmit:()=>V(g).catch(C)}):"sms"===f||"totp"===f?/*#__PURE__*/u$1(U,{selectedMethod:f,submitSuccess:v,hasBlockingError:b?.isBlocking??false,handleSubmitCode:V,onClose:B,onBack:h.length>1?()=>y$1(void 0):void 0}):/*#__PURE__*/u$1(K,{mfaMethods:h,onSelect:F,handleClose:B}):null}};

export { d as MfaAuthVerifyFlowScreen, d as default };
