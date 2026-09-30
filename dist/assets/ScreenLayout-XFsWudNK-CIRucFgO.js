import { dr as u, dN as S } from './index-T4wFPK-1.js';
import { v } from './ModalFooter-BldNwiHO-DOq4X--X.js';
import { w } from './Screen-Dtn4lspb-D1wqSy9e.js';

const n=({primaryCta:n,secondaryCta:i,helpText:d,footerText:o,watermark:c=true,children:s,...m})=>{let h=n||i?/*#__PURE__*/u(S,{children:[n&&(()=>{let{label:e,...r}=n,a=r.variant||"primary";return u(v,{...r,variant:a,style:{width:"100%",...r.style},children:e})})(),i&&(()=>{let{label:e,...r}=i,a=r.variant||"secondary";return u(v,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return u(w,{id:m.id,className:m.className,children:[/*#__PURE__*/u(w.Header,{...m}),s?/*#__PURE__*/u(w.Body,{children:s}):null,d||h||c?/*#__PURE__*/u(w.Footer,{children:[d?/*#__PURE__*/u(w.HelpText,{children:d}):null,h?/*#__PURE__*/u(w.Actions,{children:h}):null,c?/*#__PURE__*/u(w.Watermark,{}):null]}):null,o?/*#__PURE__*/u(w.FooterText,{children:o}):null]})};

export { n };
