import { dB as Be, dw as u$1, ds as We, dx as l, dr as u$2, dA as gt } from './index-R8WYfo0z.js';
import { v } from './ModalFooter-BldNwiHO-6nqBQ_V2.js';
import { a } from './shouldProceedtoEmbeddedWalletCreationFlow-BxvaW_Vy-CWlJujtc.js';
import { n } from './ScreenLayout-XFsWudNK-e07oj7pS.js';
import { c as createLucideIcon } from './createLucideIcon-CaOmkA1M.js';
import { E as ExternalLink } from './external-link-BR5x-aZg.js';
import './Screen-Dtn4lspb-DNqqnSKh.js';
import './index-CWARkn2w-BdCWEcbj.js';

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode);

const d={component:()=>{let{user:t,logout:r}=Be(),{onUserCloseViaDialogOrKeybindRef:o,setModalData:i,navigate:s}=u$1(),c=We(),{acceptTerms:d,closePrivyModal:y,createAnalyticsEvent:j}=l(),v=e=>{e?.preventDefault(),y({shouldCallAuthOnSuccess:false}),r();};o.current=v;return u$2(u,{termsAndConditionsUrl:c?.legal.termsAndConditionsUrl,privacyPolicyUrl:c?.legal.privacyPolicyUrl,onAccept:async e=>{e?.preventDefault(),await d(),t&&a(t,c.embeddedWallets)?(i({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),j({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AffirmativeConsentScreen"}}),r();},callAuthOnSuccessOnClose:true}}),s("EmbeddedWalletOnAccountCreateScreen")):y();},onDecline:v})}},u=({termsAndConditionsUrl:i,privacyPolicyUrl:m,onAccept:a,onDecline:n$1,title:l="One last step",subtitle:p="By signing up, you agree to our terms and privacy policy."})=>/*#__PURE__*/u$2(n,{title:l,subtitle:p,icon:FileCheck,primaryCta:{label:"Accept",onClick:a},secondaryCta:{label:"No thanks",onClick:n$1},watermark:true,children:(i||m)&&/*#__PURE__*/u$2(y,{children:[i&&/*#__PURE__*/u$2(v,{variant:"muted",href:i,target:"_blank",size:"lg",style:{justifyContent:"space-between"},as:"a",children:["View Terms",/*#__PURE__*/u$2(ExternalLink,{width:16,height:16,strokeWidth:2.25})]}),m&&/*#__PURE__*/u$2(v,{variant:"muted",href:m,target:"_blank",size:"lg",style:{justifyContent:"space-between"},as:"a",children:["View Privacy Policy",/*#__PURE__*/u$2(ExternalLink,{width:16,height:16,strokeWidth:2.25})]})]})});let y=gt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: var(--screen-space);
`;

export { d as AffirmativeConsentScreen, u as AffirmativeConsentScreenView, d as default };
