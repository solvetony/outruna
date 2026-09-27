import { dw as u$1, ds as We, dl as d, fE as pn, dB as Be, dx as l, dn as y, dr as u$2, fc as ri, fG as u$3 } from './index-EUcPO3t8.js';
import { o as oe, p as pe } from './SetWalletPasswordForm-mtF9E932-BN8-pa6h.js';
import './ExclamationTriangleIcon-D5--BvsL.js';
import './Layouts-BMRfo5hw-CqtHRzhq.js';
import './ModalFooter-BldNwiHO-cbbk5I2M.js';
import './shared-C4KM7VSO-CbqM-1nd.js';
import './Checkbox-D1EDeo41-cTDr0Ow0.js';
import './CheckCircleIcon-DGhvnkrR.js';
import './ScreenHeader-CHmc4-Lu-CA0Z34Rl.js';

const u={component:()=>{let{navigate:u,data:d$1,onUserCloseViaDialogOrKeybindRef:h}=u$1(),w=We(),[y$1,j]=d(""),[v,f]=d(false),[g,C]=d(),[I,x]=d(null),{create:b}=pn(),{authenticated:S,user:P}=Be(),{closePrivyModal:k,isNewUserThisSession:A,initializeWalletProxy:M}=l(),{onSuccess:T,onFailure:U,callAuthOnSuccessOnClose:E,shouldCreateEth:O,shouldCreateSol:W}=d$1.createWallet,[D,L]=d(null),F=new ri((async()=>{try{let e;if(O&&W)e=await b({recoveryMethod:"user-passcode",recoveryPassword:g,chainType:"ethereum",walletIndex:0,latestUser:P}),e=await b({chainType:"solana",walletIndex:0,latestUser:e.user});else if(W)e=await b({recoveryMethod:"user-passcode",recoveryPassword:g,chainType:"solana",walletIndex:0,latestUser:P});else {if(!O)throw Error("Invalid args to create wallet");e=await b({recoveryMethod:"user-passcode",recoveryPassword:g,chainType:"ethereum",walletIndex:0,latestUser:P});}L(e),A?u("EmbeddedWalletCreatedScreen"):(T(e),k({shouldCallAuthOnSuccess:E}));}catch(e){j(e.message);}}));y((()=>{I||M(3e4).then((e=>x(e)));}),[I]),y((()=>{if(!S||!P)return u("LandingScreen"),void U(Error("User must be authenticated before creating a Privy wallet"))}),[S]),h.current=()=>null;return u$2(pe,{config:{initiatedBy:"automatic"},appName:w?.name||"privy",loading:!I,buttonLoading:v,buttonHideAnimations:!D&&v,isResettingPassword:false,error:y$1,password:g||"",onClose:()=>{D&&"user-passcode"!==D.account.recoveryMethod?(U(new u$3("User created a wallet but failed to set a password for it")),k({shouldCallAuthOnSuccess:false})):D?(T(D),k({shouldCallAuthOnSuccess:E})):(U(new u$3("User wallet creation failed")),k({shouldCallAuthOnSuccess:false}));},onPasswordChange:C,onPasswordGenerate:()=>C(oe()),onSubmit:async()=>(f(true),F.execute().then((()=>new Promise((e=>setTimeout(e,250))))).finally((()=>f(false))))})}};

export { u as EmbeddedWalletPasswordCreateScreen, u as default };
