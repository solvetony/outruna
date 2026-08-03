import { dq as g, dv as k, dr as l, df as d, dk as u } from "./index-CgfjQyaX.js";
import { F as ForwardRef } from "./PhoneIcon-hTUc44Lk.js";
import { w } from "./ConnectPhoneForm-CbYkcsf6-sXoi9vI3.js";
import { n } from "./ScreenLayout-b9cixoV5-DYKoJf3m.js";
import "./ModalHeader-C1WIsRkF-v2RK_W34.js";
import "./Chip-D2-wZOHJ-Dvuuce4k.js";
import "./LoadingSkeleton-U6-3yFwI-C21XxtIx.js";
import "./Screen-My4NO62A-Bp_AUTwc.js";
import "./index-Dq_xe9dz-BYcsr3o0.js";
const s = ({ title: i = "Update your phone number", subtitle: n$1 = "Add the phone number you'd like to use going forward. We'll send you a confirmation code", onSubmit: m, isSubmitting: s2 = false }) => {
  let [c2, p] = d(null);
  return u(n, { title: i, subtitle: n$1, icon: ForwardRef, primaryCta: { label: s2 ? "Submitting" : "Update", onClick: async () => {
    (c2 == null ? void 0 : c2.qualifiedPhoneNumber) && await m(c2);
  }, disabled: !(c2 == null ? void 0 : c2.isValid) || s2 }, watermark: true, children: /* @__PURE__ */ u(w, { onChange: (e) => {
    p(e);
  }, onSubmit: async () => {
  }, noIncludeSubmitButton: true, hideRecent: true }) });
}, c = { component: () => {
  let { currentScreen: t, data: r, navigate: a, setModalData: c2 } = g(), { user: p } = k(), { initUpdatePhone: u$1 } = l(), [l$1, d$1] = d(false);
  return u(s, { onSubmit: async (e) => {
    var _a, _b, _c;
    d$1(true);
    try {
      if (!((_a = p == null ? void 0 : p.phone) == null ? void 0 : _a.number)) throw Error("User is required to have an phone number to update it.");
      await u$1((_b = p == null ? void 0 : p.phone) == null ? void 0 : _b.number, e.qualifiedPhoneNumber), a("AwaitingPasswordlessCodeScreen");
    } catch (e2) {
      c2({ errorModalData: { error: e2, previousScreen: ((_c = r == null ? void 0 : r.errorModalData) == null ? void 0 : _c.previousScreen) || t || "LinkPhoneScreen" } }), a("ErrorScreen");
    } finally {
      d$1(false);
    }
  }, isSubmitting: l$1 });
} };
export {
  c as UpdatePhoneScreen,
  s as UpdatePhoneScreenView,
  c as default
};
