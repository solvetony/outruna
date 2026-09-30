import { dw as u, dr as u$1, dN as S } from './index-DxRFR8hM.js';
import { i } from './Link-BdDilT2T-ByDlSUou.js';
import { a, c as c$1 } from './TodoList-DnyULl18-DTl_wK5I.js';
import { n } from './ScreenLayout-XFsWudNK-2YuHDOkR.js';
import './x-Dalz3mVt.js';
import './createLucideIcon-7jC--uXn.js';
import './check-WVyhGQqC.js';
import './ModalFooter-BldNwiHO-CAK259Rx.js';
import './Screen-Dtn4lspb-1YuYN1AW.js';
import './index-CWARkn2w-CpyfWGWH.js';

const s=({walletName:i$1,installLink:s,title:c,subtitle:m="Follow the instructions below to get started.",onReload:p,onBack:d})=>{let h=c||`Create a ${i$1} wallet`.replace(/wallet wallet/gi,"wallet");return u$1(n,{title:h,subtitle:m,onBack:d,showBack:true,primaryCta:{label:"Reload the page to use your wallet",onClick:p},helpText:/*#__PURE__*/u$1(S,{children:[/*#__PURE__*/u$1("span",{children:"Still not sure? "}),/*#__PURE__*/u$1(i,{size:"sm",target:"_blank",href:"https://solana.com/docs/intro/wallets",children:"Learn more"})]}),watermark:true,children:/*#__PURE__*/u$1(a,{children:[/*#__PURE__*/u$1(c$1,{children:/*#__PURE__*/u$1("div",{children:[/*#__PURE__*/u$1("span",{children:"Install the "})," ",/*#__PURE__*/u$1(i,{href:s,target:"_blank",children:[i$1," browser extension"]})]})}),/*#__PURE__*/u$1(c$1,{children:"Set up your first wallet"}),/*#__PURE__*/u$1(c$1,{children:"Store your recovery phrase in a safe place!"})]})})},c={component:()=>{let{navigateBack:e,data:o}=u();if(!o?.installWalletModalData)throw Error("Wallet data is missing");let{walletConfig:r}=o.installWalletModalData;return u$1(s,{walletName:r.name,installLink:r.installLink,onReload:()=>{window.location.reload();},onBack:e})}};

export { c as InstallWalletScreen, s as InstallWalletScreenView, c as default };
