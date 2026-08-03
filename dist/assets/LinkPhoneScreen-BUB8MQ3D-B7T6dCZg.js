import { dq as g, dl as le, dr as l, df as d, dk as u } from "./index-BDOBKk5h.js";
import { F as ForwardRef } from "./PhoneIcon-CSiYH_f1.js";
import { w } from "./ConnectPhoneForm-CbYkcsf6-tNrThmQE.js";
import { n } from "./ScreenLayout-b9cixoV5-CHu9a17C.js";
import "./ModalHeader-C1WIsRkF-CQnmCL4y.js";
import "./Chip-D2-wZOHJ-BZeFFc0J.js";
import "./LoadingSkeleton-U6-3yFwI-CDkrgo6T.js";
import "./Screen-My4NO62A-DtB_PEUy.js";
import "./index-Dq_xe9dz-q3L4r6Lr.js";
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
