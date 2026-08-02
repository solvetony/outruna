import { df as d, dk as u, du as gt } from "./index-Cw7cGahV.js";
const n = (e) => {
  let [n2, i] = d(false);
  return u(t, { color: e.color, href: e.url, target: "_blank", rel: "noreferrer noopener", onClick: () => {
    i(true), setTimeout((() => i(false)), 1500);
  }, justOpened: n2, children: e.text });
};
let t = gt.a`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${(o) => o.justOpened ? "var(--privy-color-foreground)" : o.color || "var(--privy-color-foreground-3)"};
    font-weight: ${(o) => o.justOpened ? "medium" : "normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${(o) => o.justOpened ? "var(--privy-color-foreground)" : "var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
export {
  n
};
