import { dl as d, dB as Be, dx as l, ds as We, dw as u, dn as y$1, dr as u$1, dN as S, fz as e, dA as gt, dm as A } from './index-Cesj8QNb.js';
import { t } from './WarningBanner-ZZqCEtZK-DuUA7wJX.js';
import { j } from './WalletInfoCard-zmo6O2YN-lSc_x1M3.js';
import { n } from './ScreenLayout-XFsWudNK-BQluWI3a.js';
import './ExclamationTriangleIcon-BwsWjxDw.js';
import './ModalFooter-BldNwiHO-BkVthzOE.js';
import './ErrorMessage-D8VaAP5m-BdujF6ut.js';
import './LabelXs-oqZNqbm_-CHhg1T1A.js';
import './Address-DMC9FYV2-BdOb0XBn.js';
import './check-DU5FKAb2.js';
import './createLucideIcon-DIQeZNF5.js';
import './copy-DDDWT4vg.js';
import './shared-FM0rljBt-DZ4w0WVi.js';
import './Screen-Dtn4lspb-BgsMxSzD.js';
import './index-CWARkn2w-DogxUJ9i.js';

const y=({address:o,hideWalletAddress:i,accessToken:n$1,appConfigTheme:a,onClose:l,exportButtonProps:p,onBack:c})=>/*#__PURE__*/u$1(n,{title:"Export wallet",subtitle:/*#__PURE__*/u$1(S,{children:["Copy either your private key or seed phrase to export your wallet."," ",/*#__PURE__*/u$1("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Learn more"})]}),onClose:l,onBack:c,showBack:!!c,watermark:true,children:/*#__PURE__*/u$1(f,{children:[/*#__PURE__*/u$1(t,{theme:a,children:"Never share your private key or seed phrase with anyone."}),!i&&/*#__PURE__*/u$1(j,{title:"Your wallet",address:o,showCopyButton:true}),/*#__PURE__*/u$1("div",{style:{width:"100%"},children:n$1&&p&&/*#__PURE__*/u$1(v,{accessToken:n$1,dimensions:{height:"44px"},...p})})]})});let f=gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;function g({chainType:e,imported:r,isUnifiedWallet:t}){return !r&&(t?"ethereum"===e||"bitcoin-taproot"===e||"pearl"===e:"ethereum"===e)}function v(t){let[a,l]=d(t.dimensions.width),[d$1,s]=d(false),[p,c]=d(void 0),m=A(null);y$1((()=>{if(m.current&&void 0===a){let{width:e}=m.current.getBoundingClientRect();l(e);}let e=getComputedStyle(document.documentElement);c({background:e.getPropertyValue("--privy-color-background"),background2:e.getPropertyValue("--privy-color-background-2"),foreground3:e.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:e.getPropertyValue("--privy-color-foreground-accent"),accent:e.getPropertyValue("--privy-color-accent"),accentDark:e.getPropertyValue("--privy-color-accent-dark"),success:e.getPropertyValue("--privy-color-success"),colorScheme:e.getPropertyValue("color-scheme")});}),[]);let h=g({chainType:t.chainType,imported:t.imported,isUnifiedWallet:t.isUnifiedWallet});return u$1("div",{ref:m,children:a&&
/*#__PURE__*/u$1(w,{children:[/*#__PURE__*/u$1("iframe",{style:{position:"absolute",zIndex:1,opacity:d$1?1:0,transition:"opacity 50ms ease-in-out",pointerEvents:d$1?"auto":"none"},onLoad:()=>setTimeout((()=>s(true)),1500),width:a,height:t.dimensions.height,allow:"clipboard-write self *",src:x({origin:t.origin,appId:t.appId,appClientId:t.appClientId,walletId:t.walletId,entropyId:t.entropyId,entropyIdVerifier:t.entropyIdVerifier,hdWalletIndex:t.hdWalletIndex,chainType:t.chainType,accessToken:t.accessToken,clientAnalyticsId:t.clientAnalyticsId,width:a,palette:p,isUnifiedWallet:t.isUnifiedWallet,exportSeedPhrase:h})}),/*#__PURE__*/u$1(k,{children:"Loading..."}),h&&/*#__PURE__*/u$1(k,{children:"Loading..."})]})})}const I={component:()=>{let[r,t]=d(null),{authenticated:n,user:a}=Be(),{closePrivyModal:l$1,createAnalyticsEvent:d$1,clientAnalyticsId:s,client:u$2}=l(),f=We(),{data:g,onUserCloseViaDialogOrKeybindRef:v}=u(),{onFailure:I,onSuccess:x,origin:w,appId:k,appClientId:b,entropyId:j,entropyIdVerifier:W,walletId:C,hdWalletIndex:T,chainType:A,address:_,uiOptions:P,isUnifiedWallet:V,imported:B,showBackButton:S}=g.keyExport,U=e=>{l$1({shouldCallAuthOnSuccess:false}),I("string"==typeof e?Error(e):e);},L=()=>{l$1({shouldCallAuthOnSuccess:false}),x(),d$1({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:_}});};return y$1((()=>{if(!n)return U("User must be authenticated before exporting their wallet");u$2.getAccessToken().then(t).catch(U);}),[n,a]),v.current=L,/*#__PURE__*/u$1(y,{address:_,hideWalletAddress:P?.hideWalletAddress,accessToken:r,appConfigTheme:f.appearance.palette.colorScheme,onClose:L,isLoading:!r,onBack:S?L:void 0,exportButtonProps:r?{origin:w,appId:k,appClientId:b,clientAnalyticsId:s,entropyId:j,entropyIdVerifier:W,walletId:C,hdWalletIndex:T,isUnifiedWallet:V,imported:B,chainType:A}:void 0})}};function x({origin:e$1,appId:r,appClientId:t,walletId:o,entropyId:i,entropyIdVerifier:n,hdWalletIndex:a,chainType:d,accessToken:s,clientAnalyticsId:p,width:c,palette:m,isUnifiedWallet:h,exportSeedPhrase:u}){return e({origin:e$1,path:`/apps/${r}/embedded-wallets/export`,query:h?{v:"1-unified",wallet_id:o,chain_type:d,client_id:t,width:`${c}px`,caid:p,phrase_export:u,...m}:{v:"1",entropy_id:i,entropy_id_verifier:n,hd_wallet_index:a,chain_type:d,client_id:t,width:`${c}px`,caid:p,phrase_export:u,...m},hash:{token:s}})}let w=gt.div`
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
