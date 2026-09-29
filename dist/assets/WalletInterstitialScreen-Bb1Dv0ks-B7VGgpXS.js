import { dB as Be, dw as u, dl as d, dr as u$1 } from './index-3FkWxgIP.js';
import { n as n$1 } from './ScreenLayout-XFsWudNK-DNV7SJP2.js';
import './ModalFooter-BldNwiHO-t9A6RP80.js';
import './Screen-Dtn4lspb-C9H50C6b.js';
import './index-CWARkn2w-B0bmebIK.js';

const n=({title:e,subtitle:o,buttonText:i,buttonHref:n,isLoading:l=false,helpText:a,onButtonClick:s})=>/*#__PURE__*/u$1(n$1,{title:e,subtitle:o,primaryCta:{label:i,onClick:()=>{n&&window.open(n,"_self"),s?.();},disabled:l},helpText:a,watermark:true}),l={component:()=>{let{ready:r}=Be(),{data:l}=u(),[a,s]=d(false);if(!l?.installWalletModalData)throw Error("Wallet data is missing");let{walletConfig:c,connectOnly:m,chainType:p}=l.installWalletModalData,u$2=c.getMobileRedirect({useUniversalLink:!a,isSolana:"solana"===p,connectOnly:m}),d$1=c.name.replace(/ wallet/gi,""),h={title:`Redirecting to ${d$1} Mobile Wallet`,description:`We'll take you to the ${d$1} Mobile Wallet app to continue your login experience.`,footnote:""};return r&&(h.description=`For the best experience, we'll automatically log you into the ${d$1} Mobile Wallet in-app browser.`,h.footnote="You can always return here to login via other methods."),a&&(h.title="Still here?",h.description=`You may need to install the ${c.name} mobile app.`,h.footnote=`Once you're done, you can connect with ${c.name} wallet to complete the login.`),/*#__PURE__*/u$1(n,{title:h.title,subtitle:h.description,buttonText:a?"Go to App Store":"Continue",buttonHref:u$2,isLoading:r&&!u$2,helpText:h.footnote||void 0,onButtonClick:()=>{setTimeout((()=>s(true)),1e3);}})}};

export { l as WalletInterstitialScreen, n as WalletInterstitialScreenView, l as default };
