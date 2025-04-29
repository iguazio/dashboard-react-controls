import { jsx as t, jsxs as w } from "react/jsx-runtime";
import ie, { useState as g, useRef as x, useEffect as b, forwardRef as Fe } from "react";
import r from "prop-types";
import q from "classnames";
import { isNil as Z, isEmpty as A } from "lodash";
import { useField as Ce, Field as Ee } from "react-final-form";
import xe from "./InputNumberButtons/InputNumberButtons.mjs";
import Ae from "../../elements/OptionsMenu/OptionsMenu.mjs";
import ke from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import "../index.mjs";
import { INPUT_VALIDATION_RULES as Se, INPUT_LINK as De, DENSITY as $e } from "../../types.mjs";
import { checkPatternsValidity as Oe, checkPatternsValidityAsync as Be } from "../../utils/validation.util.mjs";
import "../../hooks/index.mjs";
import { validation as Ke } from "../../constants.mjs";
import Me from "../../images/exclamation-mark.svg.mjs";
import qe from "../../images/popout.svg.mjs";
import Le from "../../images/warning.svg.mjs";
/* empty css                */
import { useDetectOutsideClick as Ue } from "../../hooks/useDetectOutsideClick.hook.mjs";
import { useDebounce as We } from "../../hooks/useDebounce.hook.mjs";
import ee from "../Tooltip/Tooltip.mjs";
import re from "../TooltipTemplate/TextTooltipTemplate.mjs";
import je from "../Tip/Tip.mjs";
const p = {
  iconClick: () => {
  },
  link: { show: "", value: "" },
  onBlur: () => {
  },
  onKeyDown: () => {
  },
  onValidationError: () => {
  },
  validator: () => {
  },
  rules: []
};
let R = ({
  async: L = !1,
  className: te = "",
  customRequiredLabel: ne = "",
  density: le = "normal",
  disabled: h = !1,
  focused: U = !1,
  iconClass: ae = "",
  iconClick: oe = p.iconClick,
  inputIcon: W = null,
  invalidText: k = "This field is invalid",
  label: j = "",
  link: N = p.link,
  name: c,
  onBlur: S = p.onBlur,
  onFocus: P,
  onKeyDown: H = p.onKeyDown,
  pattern: D = null,
  required: T = !1,
  onValidationError: Q = p.onValidationError,
  suggestionList: V = [],
  step: se = "1",
  tip: Y = "",
  type: I = "text",
  validationRules: f = p.rules,
  validator: z = p.validator,
  withoutBorder: me = !1,
  ...m
}, F) => {
  const { input: s, meta: a } = Ce(c), [_, de] = g(!1), [ce, $] = g(!1), [C, fe] = g(""), [ue] = g(RegExp(D)), [O, pe] = g(f), [y, E] = g(!1), ge = x();
  F ?? (F = ge);
  const v = x(), o = x(), B = x(!1);
  Ue(F, () => E(!1));
  const be = We(), he = q("form-field-input", te), _e = q(
    "form-field__wrapper",
    `form-field__wrapper-${le}`,
    h && "form-field__wrapper-disabled",
    _ && "form-field__wrapper-invalid",
    me && "without-border"
  ), ye = q("form-field__label", h && "form-field__label-disabled");
  b(() => {
    fe(String(s.value));
  }, [s.value]), b(() => {
    const e = o.current && a.invalid && (a.validating || a.modified || a.submitFailed && a.touched);
    de(e), Q(e);
  }, [
    a.invalid,
    a.modified,
    a.submitFailed,
    a.touched,
    a.validating,
    Q
  ]), b(() => {
    o.current || a.valid && y && E(!1);
  }, [a.valid, y]), b(() => (y && window.addEventListener("scroll", J, !0), () => {
    window.removeEventListener("scroll", J, !0);
  }), [y]), b(() => {
    U && v.current.focus();
  }, [U]), b(() => {
    pe(() => (B.current = !1, f.map((e) => (e.name === Ke.REQUIRED.NAME && (B.current = !0), {
      ...e,
      isValid: !o.current || !Array.isArray(o.current) ? !0 : !o.current.some((l) => l.name === e.name)
    }))));
  }, [f]);
  const ve = () => O.map(({ isValid: e = !1, label: l, name: i }) => /* @__PURE__ */ t(ke, { valid: e, validationMessage: l }, i)), G = (e) => !e && !T || h, we = (e) => {
    var l;
    s.onBlur && s.onBlur(e), (!e.relatedTarget || !((l = e.relatedTarget) != null && l.closest(".form-field__suggestion-list"))) && ($(!1), S && S(e));
  }, Re = (e) => {
    s.onFocus && s.onFocus(e), P && P(e), $(!0);
  }, Ne = (e) => {
    s.onKeyDown && s.onKeyDown(e), H && H(e);
  }, J = (e) => {
    v.current && v.current.contains(e.target) || !e.target.closest(".options-menu") && !e.target.classList.contains("form-field-input") && E(!1);
  }, Te = (e) => {
    s.onChange && s.onChange(e), $(!1), S();
  }, Ve = () => {
    v.current.focus(), E((e) => !e);
  }, X = (e, l) => {
    let i = Z(e) ? "" : String(e);
    if (G(i)) return;
    let n = null;
    if (T && i.trim().length === 0 && !B.current)
      n = {
        name: "required",
        label: ne || "This field is required"
      };
    else if (!A(f) && !L) {
      const [u, K] = Oe(f, i), M = u.filter((d) => !d.isValid);
      K || (n = M.map((d) => ({ name: d.name, label: d.label })));
    }
    return A(n) && (I === "number" && (m.max && +i > +m.max && (n = {
      name: "maxValue",
      label: `The maximum value must be ${m.max}`
    }), m.min && +i < +m.min && (n = {
      name: "minValue",
      label: `The minimum value must be ${m.min}`
    })), D && !ue.test(i) ? n = { name: "pattern", label: k } : i.startsWith(" ") && (n = { name: "empty", label: k })), !n && z && (n = z(e, l)), o.current = n, n;
  }, Ie = be(async (e, l) => {
    let i = Z(e) ? "" : String(e);
    if (G(i)) return;
    let n = X(i, l);
    if (!A(f)) {
      const [u, K] = await Be(f, i), M = u.filter((d) => !d.isValid);
      K || (n = M.map((d) => ({ name: d.name, label: d.label })));
    }
    return o.current = n, n;
  }, 400);
  return /* @__PURE__ */ t(Ee, { validate: L ? Ie : X, name: c, parse: (e) => I === "number" && e && parseFloat(e) || e, children: ({ input: e }) => {
    var l;
    return /* @__PURE__ */ w(
      "div",
      {
        ref: F,
        className: he,
        "data-testid": c ? `${c}-form-field-input` : "form-field-input",
        children: [
          j && /* @__PURE__ */ w("div", { className: ye, children: [
            /* @__PURE__ */ w(
              "label",
              {
                "data-testid": c ? `${c}-form-label` : "form-label",
                htmlFor: e.name,
                children: [
                  j,
                  (T || O.find((i) => i.name === "required")) && /* @__PURE__ */ t("span", { className: "form-field__label-mandatory", children: " *" })
                ]
              }
            ),
            N && N.show && C.trim() && /* @__PURE__ */ t("div", { className: "form-field__label-icon", children: /* @__PURE__ */ t(ee, { template: /* @__PURE__ */ t(re, { text: N.url || C }), children: /* @__PURE__ */ t(
              "a",
              {
                href: N.url || C,
                onClick: (i) => i.stopPropagation(),
                target: "_blank",
                rel: "noreferrer",
                children: /* @__PURE__ */ t(qe, {})
              }
            ) }) })
          ] }),
          /* @__PURE__ */ w("div", { className: _e, children: [
            /* @__PURE__ */ t("div", { className: "form-field__control", children: /* @__PURE__ */ t(
              "input",
              {
                "data-testid": c ? `${c}-form-input` : "form-input",
                id: e.name,
                ref: v,
                required: _ || T,
                disabled: h,
                pattern: D,
                type: I,
                ...m,
                ...e,
                autoComplete: m.autocomplete ?? "off",
                onBlur: we,
                onKeyDown: Ne,
                onFocus: Re
              }
            ) }),
            /* @__PURE__ */ w("div", { className: "form-field__icons", children: [
              _ && !Array.isArray(o.current) && /* @__PURE__ */ t(
                ee,
                {
                  className: "form-field__warning",
                  template: /* @__PURE__ */ t(re, { text: ((l = o.current) == null ? void 0 : l.label) ?? k, warning: !0 }),
                  children: /* @__PURE__ */ t(Me, {})
                }
              ),
              _ && Array.isArray(o.current) && /* @__PURE__ */ t("button", { className: "form-field__warning", onClick: Ve, children: /* @__PURE__ */ t(Le, {}) }),
              Y && /* @__PURE__ */ t(je, { text: Y, className: "form-field__tip" }),
              W && /* @__PURE__ */ t("span", { "data-testid": "input-icon", className: ae, onClick: oe, children: W })
            ] }),
            I === "number" && /* @__PURE__ */ t(xe, { ...m, step: +se, ...e, disabled: h })
          ] }),
          (V == null ? void 0 : V.length) > 0 && ce && /* @__PURE__ */ t("ul", { className: "form-field__suggestion-list", children: V.map((i, n) => /* @__PURE__ */ t(
            "li",
            {
              className: "suggestion-item",
              onClick: () => {
                Te(i);
              },
              tabIndex: n,
              dangerouslySetInnerHTML: {
                __html: i.replace(
                  new RegExp(C, "gi"),
                  (u) => u && `<b>${u}</b>`
                )
              }
            },
            `${i}${n}`
          )) }),
          !A(O) && _ && Array.isArray(o.current) && /* @__PURE__ */ t(Ae, { show: y, ref: { refInputContainer: F }, children: ve() })
        ]
      }
    );
  } });
};
R = ie.memo(Fe(R));
R.displayName = "FormInput";
R.propTypes = {
  async: r.bool,
  className: r.string,
  customRequiredLabel: r.string,
  density: $e,
  disabled: r.bool,
  focused: r.bool,
  iconClass: r.string,
  iconClick: r.func,
  inputIcon: r.element,
  invalidText: r.string,
  label: r.string,
  link: De,
  max: r.oneOfType([r.string, r.number]),
  min: r.oneOfType([r.string, r.number]),
  name: r.string.isRequired,
  onBlur: r.func,
  onFocus: r.func,
  onKeyDown: r.func,
  onValidationError: r.func,
  pattern: r.string,
  placeholder: r.string,
  required: r.bool,
  step: r.oneOfType([r.string, r.number]),
  suggestionList: r.arrayOf(r.string),
  tip: r.oneOfType([r.string, r.element]),
  type: r.string,
  validationRules: Se,
  validator: r.func,
  value: r.oneOfType([r.string, r.number]),
  withoutBorder: r.bool
};
const gr = ie.memo(R);
export {
  gr as default
};
//# sourceMappingURL=FormInput.mjs.map
