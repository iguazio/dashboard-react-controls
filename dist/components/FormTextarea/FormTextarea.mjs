import { jsx as l, jsxs as m } from "react/jsx-runtime";
import W, { useState as w, useRef as z, useLayoutEffect as D, useEffect as C, forwardRef as G } from "react";
import p from "classnames";
import e from "prop-types";
import { useField as H, Field as J } from "react-final-form";
import K from "../TooltipTemplate/TextTooltipTemplate.mjs";
import O from "../Tip/Tip.mjs";
import Q from "../Tooltip/Tooltip.mjs";
import U from "../../images/exclamation-mark.svg.mjs";
/* empty css                   */
let o = ({
  className: y = "",
  disabled: f = !1,
  focused: h = !1,
  iconClass: I = "",
  invalidText: _ = "This field is invalid",
  label: v = "",
  maxLength: s = null,
  name: b,
  onBlur: g = () => {
  },
  onChange: x = () => {
  },
  required: n = !1,
  rows: R = 3,
  textAreaIcon: N = null,
  tip: F = "",
  withoutBorder: A = !1,
  ...B
}, E) => {
  const { input: r, meta: t } = H(b), [c, $] = w(!1), [T, j] = w(r.value.length), u = z(), q = p("form-field-textarea", y), S = p("form-field__label", f && "form-field__label-disabled"), k = p(
    "form-field__wrapper",
    f && "form-field__wrapper-disabled",
    c && "form-field__wrapper-invalid",
    A && "without-border"
  );
  D(() => {
    j(r.value.length);
  }, [r.value.length]), C(() => {
    h && u.current.focus();
  }, [h, u]), C(() => {
    $(
      t.invalid && (t.validating || t.modified || t.submitFailed && t.touched)
    );
  }, [t.invalid, t.modified, t.submitFailed, t.touched, t.validating]);
  const M = (a) => {
    r.onBlur(a), g && g(a);
  }, P = (a) => {
    r.onChange(a), x && x(a.target.value);
  }, V = (a) => {
    r.onFocus(a);
  };
  return /* @__PURE__ */ l(J, { validate: (a) => {
    const d = a ?? "";
    let i = null;
    return d.startsWith(" ") ? i = { name: "empty", label: _ } : n && d.trim().length === 0 && (i = { name: "required", label: "This field is required" }), i;
  }, name: b, children: ({ input: a, meta: d }) => {
    var i;
    return /* @__PURE__ */ m("div", { ref: E, className: q, children: [
      /* @__PURE__ */ l("div", { className: S, children: v && /* @__PURE__ */ m("label", { "data-testid": "label", htmlFor: a.name, children: [
        v,
        n && /* @__PURE__ */ l("span", { className: "form-field__label-mandatory", children: " *" })
      ] }) }),
      /* @__PURE__ */ m("div", { className: k, children: [
        /* @__PURE__ */ l("div", { className: "form-field__control", children: /* @__PURE__ */ l(
          "textarea",
          {
            "data-testid": "textarea",
            id: a.name,
            maxLength: s,
            ref: u,
            required: c || n,
            disabled: f,
            rows: R,
            ...B,
            ...a,
            onBlur: M,
            onChange: P,
            onFocus: V
          }
        ) }),
        /* @__PURE__ */ m("div", { className: "form-field__icons", children: [
          c && /* @__PURE__ */ l(
            Q,
            {
              className: "form-field__warning",
              template: /* @__PURE__ */ l(K, { text: ((i = d.error) == null ? void 0 : i.label) ?? _, warning: !0 }),
              children: /* @__PURE__ */ l(U, {})
            }
          ),
          F && !n && /* @__PURE__ */ l(O, { text: F, className: "form-field__tip" }),
          N && /* @__PURE__ */ l("span", { "data-testid": "textarea__icon", className: I, children: N })
        ] })
      ] }),
      s && /* @__PURE__ */ l("div", { className: "form-field__counter", children: `${s - T} ${s - T !== 1 ? "characters" : "character"} left` })
    ] });
  } });
};
o = W.memo(G(o));
o.displayName = "FormTextarea";
o.propTypes = {
  className: e.string,
  disabled: e.bool,
  focused: e.bool,
  iconClass: e.string,
  invalidText: e.string,
  label: e.string,
  maxLength: e.number,
  name: e.string.isRequired,
  onBlur: e.func,
  onChange: e.func,
  required: e.bool,
  rows: e.number,
  textAreaIcon: e.element,
  tip: e.string,
  withoutBorder: e.bool
};
const se = o;
export {
  se as default
};
//# sourceMappingURL=FormTextarea.mjs.map
