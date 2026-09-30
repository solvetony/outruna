import { dr as u$1, dA as gt, dP as gn, fY as i } from './index-T4wFPK-1.js';
import { L, h as h$1 } from './ModalFooter-BldNwiHO-DOq4X--X.js';
import { n } from './index-CWARkn2w-DtN5UQ2e.js';

const c=gt.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=gt.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,s=gt.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=gt(L)`
  margin: 0 -8px;
`,g=gt.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:e})=>"light"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,h=gt.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let v=gt.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,u=gt.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=gt.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=gt.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,x=gt.div`
  background: ${({$variant:e})=>{switch(e){case "success":return "var(--privy-color-success-bg)";case "warning":return "var(--privy-color-warn)";case "error":return "var(--privy-color-error-bg)";case "loading":case "logo":return "transparent";default:return "var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=gt.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,y=gt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;const w=({children:r,...i})=>/*#__PURE__*/u$1(c,{children:/*#__PURE__*/u$1(d,{...i,children:r})});let k=gt.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,j=gt(h$1)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=gt.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,$=({step:r})=>r?/*#__PURE__*/u$1(k,{children:/*#__PURE__*/u$1(E,{pct:Math.min(100,r.current/r.total*100)})}):null;w.Header=({title:i,subtitle:o,icon:n,iconVariant:t,iconLoadingStatus:a,showBack:l,onBack:c,showInfo:d,onInfo:g,showClose:h,onClose:x,step:b,headerTitle:y,eyebrow:k,...j})=>/*#__PURE__*/u$1(s,{...j,children:[/*#__PURE__*/u$1(p,{backFn:l?c:void 0,infoFn:d?g:void 0,onClose:h?x:void 0,title:y,eyebrow:k,closeable:h}),(n||t||i||o)&&/*#__PURE__*/u$1(v,{children:[n||t?/*#__PURE__*/u$1(w.Icon,{icon:n,variant:t,loadingStatus:a}):null,!(!i&&!o)&&/*#__PURE__*/u$1(u,{children:[i&&/*#__PURE__*/u$1(f,{children:i}),o&&/*#__PURE__*/u$1(m,{children:o})]})]}),b&&/*#__PURE__*/u$1($,{step:b})]}),(w.Body=/*#__PURE__*/gn.forwardRef((({children:r,...i},o)=>/*#__PURE__*/u$1(g,{ref:o,...i,children:r})))).displayName="Screen.Body",w.Footer=({children:r,...i})=>/*#__PURE__*/u$1(h,{id:"privy-content-footer-container",...i,children:r}),w.Actions=({children:r,...i})=>/*#__PURE__*/u$1(z,{...i,children:r}),w.HelpText=({children:r,...i})=>/*#__PURE__*/u$1(S,{...i,children:r}),w.FooterText=({children:r,...i})=>/*#__PURE__*/u$1(B,{...i,children:r}),w.Watermark=()=>/*#__PURE__*/u$1(j,{}),w.Icon=({icon:o,variant:t="subtle",loadingStatus:a})=>"logo"===t&&o?/*#__PURE__*/u$1(b,"string"==typeof o?{children:/*#__PURE__*/u$1("img",{src:o,alt:""})}:/*#__PURE__*/gn.isValidElement(o)?{children:o}:{children:/*#__PURE__*/gn.createElement(o)}):"loading"===t?o?
/*#__PURE__*/u$1(y,{children:/*#__PURE__*/u$1("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[/*#__PURE__*/u$1(i,{success:a?.success,fail:a?.fail}),"string"==typeof o?
/*#__PURE__*/u$1("span",{style:{background:`url('${o}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):/*#__PURE__*/gn.isValidElement(o)?
/*#__PURE__*/gn.cloneElement(o,{style:{width:"38px",height:"38px"}}):
/*#__PURE__*/gn.createElement(o,{style:{width:"38px",height:"38px"}})]})}):
/*#__PURE__*/u$1(x,{$variant:t,children:/*#__PURE__*/u$1(n,{size:"64px"})}):/*#__PURE__*/u$1(x,{$variant:t,children:o&&("string"==typeof o?
/*#__PURE__*/u$1("img",{src:o,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):/*#__PURE__*/gn.isValidElement(o)?o:
/*#__PURE__*/gn.createElement(o,{width:32,height:32,stroke:(()=>{switch(t){case "success":return "var(--privy-color-icon-success)";case "warning":return "var(--privy-color-icon-warning)";case "error":return "var(--privy-color-icon-error)";default:return "var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let z=gt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,S=gt.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 13px;
    line-height: 20px;

    & a {
      text-decoration: underline;
    }
  }
`,B=gt.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; /* 11px */
    line-height: 1rem; /* 16px */
  }
`;

export { w };
