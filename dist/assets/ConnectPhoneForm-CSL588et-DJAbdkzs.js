import { dj as D, ds as We, dl as d, gk as D$1, gz as pi, gA as _i, gB as yi, gC as getCountryCallingCode, dn as y$1, gD as bi, dr as u, dN as S, gE as hi, dA as gt, gF as vi } from './index-B3PW-i17.js';
import { w as w$1, b } from './ModalFooter-BldNwiHO-Dv7-KdAL.js';
import { n } from './Chip-CZKIKt9K-COjWfPh8.js';

const f=({value:r,onChange:n})=>/*#__PURE__*/u("select",{value:r,onChange:n,children:vi.map((o=>/*#__PURE__*/u("option",{value:o.code,children:[o.code," +",o.callCode]},o.code)))}),y=/*#__PURE__*/D(((n$1,a)=>{let l=We(),[y,k]=d(false),{accountType:$}=D$1(),[N,P]=d(""),[S$1,j]=d(n$1.defaultCountry??l?.intl.defaultCountry??"US"),V=pi(N,S$1),z=_i(S$1),T=yi(S$1),U=getCountryCallingCode(S$1),L=!V,[q,E]=d(false),B=U.length,D=o=>{let e=o.target.value;j(e),P(""),n$1.onChange&&n$1.onChange({rawPhoneNumber:N,qualifiedPhoneNumber:hi(N,e),countryCode:e,isValid:pi(N,S$1)});},I=(o,e)=>{try{let r=o.replace(/\D/g,"")===N.replace(/\D/g,"")?o:z.input(o);P(r),n$1.onChange&&n$1.onChange({rawPhoneNumber:r,qualifiedPhoneNumber:hi(o,e),countryCode:e,isValid:pi(o,e)});}catch(o){console.error("Error processing phone number:",o);}},R=()=>{E(true);let o=hi(N,S$1);n$1.onSubmit({rawPhoneNumber:N,qualifiedPhoneNumber:o,countryCode:S$1,isValid:pi(N,S$1)}).finally((()=>E(false)));};return y$1((()=>{if(n$1.defaultValue){let o=bi(n$1.defaultValue);z.reset(),D({target:{value:o.countryCode}}),I(o.phone,o.countryCode);}}),[n$1.defaultValue]),/*#__PURE__*/u(S,{children:[/*#__PURE__*/u(w,{children:/*#__PURE__*/u(C,{$callingCodeLength:B,$stacked:n$1.stacked,children:[/*#__PURE__*/u(f,{value:S$1,onChange:D}),/*#__PURE__*/u("input",{ref:a,id:"phone-number-input",className:"login-method-button",type:"tel",placeholder:T,onFocus:()=>k(true),onChange:o=>{I(o.target.value,S$1);},onKeyUp:o=>{"Enter"===o.key&&R();},value:N,autoComplete:"tel"}),"phone"!==$||y||n$1.hideRecent?n$1.stacked||n$1.noIncludeSubmitButton?/*#__PURE__*/u("span",{}):/*#__PURE__*/u(w$1,{isSubmitting:q,onClick:R,disabled:L,children:"Submit"}):/*#__PURE__*/u(n,{color:"gray",children:"Recent"})]})}),n$1.stacked&&!n$1.noIncludeSubmitButton?/*#__PURE__*/u(b,{loading:q,loadingText:null,onClick:R,disabled:L,children:"Submit"}):null]})}));let w=gt.div`
  width: 100%;
`,C=gt.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${o=>o.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${o=>o.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${o=>o.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${o=>o.$stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`;

export { y };
