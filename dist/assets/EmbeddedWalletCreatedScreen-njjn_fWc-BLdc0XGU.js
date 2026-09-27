import { dB as Be, dx as l, dw as u$1, ds as We, dn as y, fd as I, dr as u$2, fx as h, fy as y$1 } from './index-DsU0Cpsn.js';
import { n } from './ScreenLayout-XFsWudNK-Bimst8L2.js';
import { C as CircleCheckBig } from './circle-check-big-D3kCHZcc.js';
import './ModalFooter-BldNwiHO-DaeXXHpR.js';
import './Screen-Dtn4lspb-CYbOG2S4.js';
import './index-CWARkn2w-Ctvle-0L.js';
import './createLucideIcon-CQWz50lu.js';

const u=({title:t,description:r,onClose:s})=>/*#__PURE__*/u$2(n,{title:t,subtitle:r,icon:CircleCheckBig,iconVariant:"success",watermark:true,onBack:s}),p={component:()=>{let{user:o}=Be(),{closePrivyModal:m,isNewUserThisSession:p,updateWallets:d}=l(),{data:f,onUserCloseViaDialogOrKeybindRef:j}=u$1(),h$1=We(),{onSuccess:y$2,onFailure:S,callAuthOnSuccessOnClose:k}=f.createWallet,w=()=>{let e=h(o)??y$1(o);o&&e?(d(),y$2({user:o,account:e})):S(Error("Failed to create wallet")),m({shouldCallAuthOnSuccess:k});};y((()=>{let e=setTimeout(w,I);return ()=>clearTimeout(e)}),[]),j.current=w;let x=p&&!((o?.linkedAccounts?.length??0)>1);return u$2(u,{title:x?"Welcome"+(h$1?.name?` to ${h$1?.name}`:""):"All set!",description:x?"You've successfully created an account.":"Your account is secured.",onClose:w})}};

export { p as EmbeddedWalletCreatedScreen, u as EmbeddedWalletCreatedScreenView, p as default };
