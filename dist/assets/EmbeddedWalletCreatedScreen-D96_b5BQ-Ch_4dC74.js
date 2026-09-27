import { dv as k, dr as l, dq as g, dl as le, dh as y, fa as h, dk as u$1, fj as d, fk as f } from './index-BLGlf-uE.js';
import { n } from './ScreenLayout-b9cixoV5-BXYWkbQY.js';
import { C as CircleCheckBig } from './circle-check-big-wJaeONI3.js';
import './ModalHeader-C1WIsRkF-BPpGxhUY.js';
import './Screen-My4NO62A-DAcEFcTa.js';
import './index-Dq_xe9dz-eZF2dpYh.js';
import './createLucideIcon-BFwUy9WP.js';

const u=({title:o,description:r,onClose:i})=>/*#__PURE__*/u$1(n,{title:o,subtitle:r,icon:CircleCheckBig,iconVariant:"success",watermark:true,onBack:i}),p={component:()=>{let{user:t}=k(),{closePrivyModal:l$1,isNewUserThisSession:p,updateWallets:d$1}=l(),{data:j,onUserCloseViaDialogOrKeybindRef:f$1}=g(),h$1=le(),{onSuccess:v,onFailure:y$1,callAuthOnSuccessOnClose:x}=j.createWallet,S=()=>{let e=d(t)??f(t);t&&e?(d$1(),v({user:t,account:e})):y$1(Error("Failed to create wallet")),l$1({shouldCallAuthOnSuccess:x});};y((()=>{let e=setTimeout(S,h);return ()=>clearTimeout(e)}),[]),f$1.current=S;let A=p&&!((t?.linkedAccounts?.length??0)>1);return u$1(u,{title:A?"Welcome"+(h$1?.name?` to ${h$1?.name}`:""):"All set!",description:A?"You've successfully created an account.":"Your account is secured.",onClose:S})}};

export { p as EmbeddedWalletCreatedScreen, u as EmbeddedWalletCreatedScreenView, p as default };
