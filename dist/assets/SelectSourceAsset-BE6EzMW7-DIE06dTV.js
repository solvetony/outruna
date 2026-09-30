import { dr as u$1, hb as VC, dl as d, dm as A$1, ft as _, dk as q, dA as gt } from './index-DxRFR8hM.js';
import { n } from './ScreenLayout-XFsWudNK-2YuHDOkR.js';
import { C as ChevronDown } from './chevron-down-BzHT8hUn.js';

const c=({currency:o="usd",value:a,onChange:s,inputMode:c="decimal",autoFocus:p})=>{let[g,v]=d("0"),[y,b]=d(null),w=A$1(null),x=A$1(null),k=a??g,z=VC[o]?.symbol??"$",$=k.length>9?"small":k.length>6?"compact":"default";_((()=>{let e=x.current?.offsetWidth;b(e?Math.ceil(e)+2:null);}),[$,k]);let C=q((e=>{let r=e.target.value,o=(r=r.replace(/[^\d.]/g,"")).split(".");o.length>2&&(r=o[0]+"."+o.slice(1).join(""));let[t="",i]=r.split("."),n=t.replace(/^0+(?=\d)/,"");(""===(r=void 0!==i?`${n||"0"}.${i}`:n||"0")||"."===r)&&(r="0"),s?s(r):v(r);}),[s]),A=q((e=>{!(["Delete","Backspace","Tab","Escape","Enter",".","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||(e.ctrlKey||e.metaKey)&&["a","c","v","x"].includes(e.key.toLowerCase()))&&(e.key>="0"&&e.key<="9"||e.preventDefault());}),[]);return u$1(u,{$size:$,onClick:()=>w.current?.focus(),children:[/*#__PURE__*/u$1(h,{$size:$,children:z}),/*#__PURE__*/u$1(m,{ref:w,type:"text",inputMode:c,value:k,onChange:C,onKeyDown:A,autoFocus:p,placeholder:"0","aria-label":"Amount",style:y?{width:`${y}px`}:void 0}),/*#__PURE__*/u$1(f,{ref:x,"aria-hidden":"true",children:k}),/*#__PURE__*/u$1(h,{$size:$,style:{opacity:0},children:z})]})},p=({selectedAsset:t,onEditSourceAsset:i})=>{let{icon:n}=VC[t];return u$1(g,{onClick:i,children:[/*#__PURE__*/u$1(v,{children:n}),/*#__PURE__*/u$1(y,{children:t.toLocaleUpperCase()}),/*#__PURE__*/u$1(b,{children:/*#__PURE__*/u$1(ChevronDown,{})})]})};let u=gt.span`
  position: relative;
  background-color: var(--privy-color-background);
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  && {
    color: var(--privy-color-foreground);
    font-size: ${({$size:e})=>"small"===e?"2.25rem":"compact"===e?"3rem":"3.75rem"};
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,m=gt.input`
  appearance: none;
  align-self: flex-start;
  min-width: 1ch;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: left;
  caret-color: currentcolor;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`,f=gt.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  pointer-events: none;
`,h=gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: ${({$size:e})=>"small"===e?"0.75rem":"compact"===e?"0.875rem":"1rem"};
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,g=gt.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,v=gt.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,y=gt.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,b=gt.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;const w=({opts:o,isLoading:t,onSelectSource:i})=>/*#__PURE__*/u$1(n,{showClose:false,showBack:true,onBack:()=>i(o.source.selectedAsset),title:"Select currency",children:/*#__PURE__*/u$1(x,{children:o.source.assets.map((o=>{let{icon:n,name:l}=VC[o];return u$1(k,{onClick:()=>i(o),disabled:t,children:/*#__PURE__*/u$1(z,{children:[/*#__PURE__*/u$1($,{children:n}),/*#__PURE__*/u$1(C,{children:[/*#__PURE__*/u$1(A,{children:l}),/*#__PURE__*/u$1(S,{children:o.toLocaleUpperCase()})]})]})},o)}))})});let x=gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,k=gt.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,z=gt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,$=gt.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,C=gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,A=gt.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,S=gt.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;

export { c, p, w };
