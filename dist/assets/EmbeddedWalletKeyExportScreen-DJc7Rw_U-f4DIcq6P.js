import { df as d, dv as k$1, dr as l, dl as le, dq as g$1, dh as y$1, dk as u, dG as S, fl as e, du as gt, dg as A } from './index-BzZ64suB.js';
import { t } from './WarningBanner-D5LqDt95-D6zEveFO.js';
import { j } from './WalletInfoCard-pBDMfJDY-DJrc2ggC.js';
import { n } from './ScreenLayout-b9cixoV5-uyh6cti0.js';
import './ExclamationTriangleIcon-Erk2x7gY.js';
import './ModalHeader-C1WIsRkF-BOWOE0Hu.js';
import './ErrorMessage-D8VaAP5m-DSCgb487.js';
import './LabelXs-oqZNqbm_-BeisgTpq.js';
import './Address--RvzbtOt-Bgdklx2l.js';
import './check-B4HAls8G.js';
import './createLucideIcon-BUXdLDa7.js';
import './copy-BHYMHz7f.js';
import './shared-FM0rljBt-DZjf9ARM.js';
import './Screen-My4NO62A-DRkTO3tH.js';
import './index-Dq_xe9dz-BhpFabhk.js';

const y=({address:o,hideWalletAddress:i,accessToken:n$1,appConfigTheme:a,onClose:l,exportButtonProps:p,onBack:c})=>/*#__PURE__*/u(n,{title:"Export wallet",subtitle:/*#__PURE__*/u(S,{children:["Copy either your private key or seed phrase to export your wallet."," ",/*#__PURE__*/u("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Learn more"})]}),onClose:l,onBack:c,showBack:!!c,watermark:true,children:/*#__PURE__*/u(f,{children:[/*#__PURE__*/u(t,{theme:a,children:"Never share your private key or seed phrase with anyone."}),!i&&/*#__PURE__*/u(j,{title:"Your wallet",address:o,showCopyButton:true}),/*#__PURE__*/u("div",{style:{width:"100%"},children:n$1&&p&&/*#__PURE__*/u(v,{accessToken:n$1,dimensions:{height:"44px"},...p})})]})});let f=gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;function g({chainType:e,imported:t,isUnifiedWallet:r}){return !t&&(r?"ethereum"===e||"bitcoin-taproot"===e||"pearl"===e:"ethereum"===e)}function v(r){let[a,l]=d(r.dimensions.width),[d$1,s]=d(false),[p,c]=d(void 0),m=A(null);y$1((()=>{if(m.current&&void 0===a){let{width:e}=m.current.getBoundingClientRect();l(e);}let e=getComputedStyle(document.documentElement);c({background:e.getPropertyValue("--privy-color-background"),background2:e.getPropertyValue("--privy-color-background-2"),foreground3:e.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:e.getPropertyValue("--privy-color-foreground-accent"),accent:e.getPropertyValue("--privy-color-accent"),accentDark:e.getPropertyValue("--privy-color-accent-dark"),success:e.getPropertyValue("--privy-color-success"),colorScheme:e.getPropertyValue("color-scheme")});}),[]);let u$1=g({chainType:r.chainType,imported:r.imported,isUnifiedWallet:r.isUnifiedWallet});return u("div",{ref:m,children:a&&
/*#__PURE__*/u(w,{children:[/*#__PURE__*/u("iframe",{style:{position:"absolute",zIndex:1,opacity:d$1?1:0,transition:"opacity 50ms ease-in-out",pointerEvents:d$1?"auto":"none"},onLoad:()=>setTimeout((()=>s(true)),1500),width:a,height:r.dimensions.height,allow:"clipboard-write self *",src:x({origin:r.origin,appId:r.appId,appClientId:r.appClientId,walletId:r.walletId,entropyId:r.entropyId,entropyIdVerifier:r.entropyIdVerifier,hdWalletIndex:r.hdWalletIndex,chainType:r.chainType,accessToken:r.accessToken,clientAnalyticsId:r.clientAnalyticsId,width:a,palette:p,isUnifiedWallet:r.isUnifiedWallet,exportSeedPhrase:u$1})}),/*#__PURE__*/u(k,{children:"Loading..."}),u$1&&/*#__PURE__*/u(k,{children:"Loading..."})]})})}const I={component:()=>{let[t,r]=d(null),{authenticated:n,user:a}=k$1(),{closePrivyModal:l$1,createAnalyticsEvent:d$1,clientAnalyticsId:s,client:h}=l(),f=le(),{data:g,onUserCloseViaDialogOrKeybindRef:v}=g$1(),{onFailure:I,onSuccess:x,origin:w,appId:k,appClientId:j,entropyId:b,entropyIdVerifier:T,walletId:W,hdWalletIndex:C,chainType:A,address:_,uiOptions:P,isUnifiedWallet:V,imported:S,showBackButton:B}=g.keyExport,U=e=>{l$1({shouldCallAuthOnSuccess:false}),I("string"==typeof e?Error(e):e);},L=()=>{l$1({shouldCallAuthOnSuccess:false}),x(),d$1({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:_}});};return y$1((()=>{if(!n)return U("User must be authenticated before exporting their wallet");h.getAccessToken().then(r).catch(U);}),[n,a]),v.current=L,/*#__PURE__*/u(y,{address:_,hideWalletAddress:P?.hideWalletAddress,accessToken:t,appConfigTheme:f.appearance.palette.colorScheme,onClose:L,isLoading:!t,onBack:B?L:void 0,exportButtonProps:t?{origin:w,appId:k,appClientId:j,clientAnalyticsId:s,entropyId:b,entropyIdVerifier:T,walletId:W,hdWalletIndex:C,isUnifiedWallet:V,imported:S,chainType:A}:void 0})}};function x({origin:e$1,appId:t,appClientId:r,walletId:o,entropyId:i,entropyIdVerifier:n,hdWalletIndex:a,chainType:d,accessToken:s,clientAnalyticsId:p,width:c,palette:m,isUnifiedWallet:u,exportSeedPhrase:h}){return e({origin:e$1,path:`/apps/${t}/embedded-wallets/export`,query:u?{v:"1-unified",wallet_id:o,client_id:r,width:`${c}px`,caid:p,phrase_export:h,...m}:{v:"1",entropy_id:i,entropy_id_verifier:n,hd_wallet_index:a,chain_type:d,client_id:r,width:`${c}px`,caid:p,phrase_export:h,...m},hash:{token:s}})}let w=gt.div`
  overflow: visible;
  position: relative;
  height: 44px;
  display: flex;
  gap: 12px;
`,k=gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`;

export { I as EmbeddedWalletKeyExportScreen, y as EmbeddedWalletKeyExportView, x as constructWalletExportIframeUrl, I as default, g as supportsSeedPhraseExport };
