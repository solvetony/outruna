import { dq as g, dl as le, dr as l, df as d, dk as u } from "./index-R3UC2dO4.js";
import { F as ForwardRef } from "./PhoneIcon-DiD09pcZ.js";
import { w } from "./ConnectPhoneForm-CbYkcsf6-uDxZay3L.js";
import { n } from "./ScreenLayout-b9cixoV5-DYDqoaQ9.js";
import "./ModalHeader-C1WIsRkF-CQ6nXvK3.js";
import "./Chip-D2-wZOHJ-CEw4ZuYL.js";
import "./LoadingSkeleton-U6-3yFwI-DJcpe7Sx.js";
import "./Screen-My4NO62A-Dd8fqlf0.js";
import "./index-Dq_xe9dz-CSIqWJSY.js";
const s = ({ title: i = "Connect your phone", subtitle: n$1 = "Add your number to your account", onSubmit: m, isSubmitting: s2 = false }) => {
  let [c2, u$1] = d(null), p = async () => {
    (c2 == null ? void 0 : c2.qualifiedPhoneNumber) && await m(c2);
  };
  return u(n, { title: i, subtitle: n$1, icon: ForwardRef, primaryCta: { label: s2 ? "Submitting" : "Submit", onClick: p, disabled: !(c2 == null ? void 0 : c2.isValid) || s2 }, watermark: true, children: /* @__PURE__ */ u(w, { onChange: (t) => {
    u$1(t);
  }, onSubmit: p, noIncludeSubmitButton: true, hideRecent: true }) });
}, c = { component: () => {
  let { currentScreen: e, data: r, navigate: a, setModalData: c2 } = g(), u$1 = le(), { initLoginWithSms: p } = l(), [l$1, d$1] = d(false);
  return u(s, { subtitle: `Add your number to your ${u$1 == null ? void 0 : u$1.name} account`, onSubmit: async (t) => {
    var _a;
    d$1(true);
    try {
      await p({ phoneNumber: t.qualifiedPhoneNumber, withPrivyUi: true }), a("AwaitingPasswordlessCodeScreen");
    } catch (t2) {
      c2({ errorModalData: { error: t2, previousScreen: ((_a = r == null ? void 0 : r.errorModalData) == null ? void 0 : _a.previousScreen) || e || "LinkPhoneScreen" } }), a("ErrorScreen");
    } finally {
      d$1(false);
    }
  }, isSubmitting: l$1 });
} };
export {
  c as LinkPhoneScreen,
  s as LinkPhoneScreenView,
  c as default
};
