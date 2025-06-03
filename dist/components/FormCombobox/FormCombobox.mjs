import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { useState as c, useRef as R, useEffect as C, useCallback as K } from "react";
import { useField as Ee, Field as Oe } from "react-final-form";
import { isEmpty as q } from "lodash";
import t from "prop-types";
import h from "classnames";
import ke from "../../elements/OptionsMenu/OptionsMenu.mjs";
import Re from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import Q from "../PopUpDialog/PopUpDialog.mjs";
import Te from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Fe from "../Tooltip/Tooltip.mjs";
import { checkPatternsValidity as De } from "../../utils/validation.util.mjs";
import "../../hooks/index.mjs";
import { COMBOBOX_SUGGESTION_LIST as Le, COMBOBOX_SELECT_OPTIONS as $e, DENSITY as Ae } from "../../types.mjs";
import Pe from "../../images/arrow.svg.mjs";
import je from "../../images/search.svg.mjs";
import Me from "../../images/warning.svg.mjs";
import qe from "../../images/exclamation-mark.svg.mjs";
/* empty css                   */
import { useDetectOutsideClick as We } from "../../hooks/useDetectOutsideClick.hook.mjs";
const Be = ({
  comboboxClassName: Z = "",
  density: ee = "normal",
  disabled: W = !1,
  hideSearchInput: oe = !1,
  inputDefaultValue: le = "",
  inputPlaceholder: ie = "",
  invalidText: B = "Invalid",
  label: G = "",
  maxSuggestedMatches: te = 1,
  name: m,
  onBlur: _ = null,
  onChange: g = null,
  onFocus: N = null,
  required: T = !1,
  rules: H = [],
  selectDefaultValue: re = {
    label: "",
    id: "",
    className: ""
  },
  selectOptions: se,
  selectPlaceholder: J = "",
  suggestionList: S = [],
  validator: U = null,
  withoutBorder: ae = !1
}) => {
  const { input: a, meta: r } = Ee(m), [F, D] = c(le), [n, ne] = c(re), [ce, L] = c({
    left: "0px"
  }), [p, f] = c(!1), [$, w] = c(!1), [x, X] = c(S), [v, y] = c(!1), [I, de] = c(!1), [V, me] = c(H), [A, E] = c(!1), b = R(), P = R(), d = R(), O = R();
  We(b, () => E(!1));
  const fe = h("form-field__label", W && "form-field__label-disabled"), ue = h(
    "form-field-combobox__input",
    n.id.length === 0 && "form-field-combobox__input_hidden"
  );
  C(() => {
    me(
      (e) => e.map((o) => ({
        ...o,
        isValid: !r.error || !Array.isArray(r.error) ? !0 : !r.error.some((s) => s.name === o.name)
      }))
    );
  }, [r.error]), C(() => {
    v || JSON.stringify(x) !== JSON.stringify(S) && X(S);
  }, [x, S, v]), C(() => {
    de(
      r.invalid && (r.validating || r.modified || r.submitFailed && r.touched)
    );
  }, [r.invalid, r.modified, r.submitFailed, r.touched, r.validating]);
  const j = K(
    (e) => {
      b.current && !b.current.contains(e.target) && O.current && !O.current.contains(e.target) && (y(!1), f(!1), w(!1), a.onBlur(new Event("blur")), _ && _(a.value));
    },
    [a, _]
  ), Y = (e) => {
    b.current && b.current.contains(e.target) || !e.target.closest(".pop-up-dialog") && !e.target.classList.contains("form-field-combobox") && (E(!1), f(!1), w(!1), d.current.blur());
  };
  C(() => (window.addEventListener("click", j), () => {
    window.removeEventListener("click", j);
  }), [j]), C(() => ((A || p || $) && window.addEventListener("scroll", Y, !0), () => {
    window.removeEventListener("scroll", Y, !0);
  }), [p, $, A]);
  const pe = () => V.map(({ isValid: e = !1, label: o, name: s }) => /* @__PURE__ */ l(Re, { valid: e, validationMessage: o }, s)), be = (e) => {
    const o = e.target;
    L({
      left: `${o.selectionStart < 30 ? o.selectionStart : 30}ch`
    }), v && y(!1), D(o.value), a.onChange(`${n.id}${o.value}`), g && g(n.id, o.value), x.length > 0 && w(!0);
  }, he = (e) => {
    e.id !== n.id ? (ne(e), a.onChange(e.id), D(""), g && g(e.id), f(!1), d.current.disabled = !1, d.current.focus()) : (f(!1), d.current.disabled = !1, d.current.focus());
  }, _e = (e) => {
    const o = F.split("/"), s = o.length - 1;
    let i = e.customDelimiter ? o[s].replace(new RegExp(`${e.customDelimiter}.*`), "") + e.id : e.id;
    o.length <= te - 1 && (i += "/"), o[s] = i, v && y(!1), o.join("/") !== F && (D(o.join("/")), a.onChange(`${n.id}${o.join("/")}`), g && g(n.id, o.join("/"))), w(!1), d.current.focus(), L({
      left: `${d.current.selectionStart < 30 ? d.current.selectionStart : 30}ch`
    });
  }, ge = () => {
    N && N(), a.onFocus(new Event("focus")), p && f(!1), w(!0);
  }, we = (e) => {
    e.persist(), X(
      () => S.filter((o) => o.id.startsWith(e.target.value))
    );
  }, z = K(() => {
    p ? (f(!1), a.onBlur(new Event("blur")), _ && _(a.value)) : (w(!1), E(!1), L({
      left: "0px"
    }), f(!0), a.onFocus(new Event("focus")), N && N(a.value));
  }, [a, _, N, p]), xe = (e = "", o) => {
    const s = e.startsWith(n.id) ? e.substring(n.id.length) : e ?? "";
    let i = null;
    if (!q(V)) {
      const [M, Ie] = De(H, s), Ve = M.filter((k) => !k.isValid);
      Ie || (i = Ve.map((k) => ({ name: k.name, label: k.label })));
    }
    return q(i) && (s.startsWith(" ") ? i = { name: "empty", label: B } : T && s.trim().length === 0 && (i = { name: "required", label: "This field is required" })), !i && U && (i = U(e, o)), i;
  }, ve = () => {
    E((e) => !e), f(!1);
  }, Ne = h(
    Z,
    "form-field-combobox",
    "form-field",
    I && "form-field-combobox_invalid"
  ), Se = h(
    p && "form-field-combobox__icon_open",
    "form-field-combobox__icon"
  ), Ce = h(n.className), ye = h(
    "form-field__wrapper",
    `form-field__wrapper-${ee}`,
    W && "form-field__wrapper-disabled",
    I && "form-field__wrapper-invalid",
    ae && "without-border"
  );
  return /* @__PURE__ */ l(Oe, { name: m, validate: xe, children: ({ input: e, meta: o }) => {
    var s;
    return /* @__PURE__ */ u(
      "div",
      {
        className: Ne,
        ref: b,
        "data-testid": m ? `${m}-form-combobox` : "form-combobox",
        children: [
          G && /* @__PURE__ */ l("div", { className: fe, children: /* @__PURE__ */ u("label", { "data-testid": "label", htmlFor: e.name, children: [
            G,
            (T || V.find((i) => i.name === "required")) && /* @__PURE__ */ l("span", { className: "form-field__label-mandatory", children: " *" })
          ] }) }),
          /* @__PURE__ */ u("div", { className: ye, children: [
            /* @__PURE__ */ l("div", { className: "form-field__icons", children: /* @__PURE__ */ l(Pe, { className: Se, onClick: z }) }),
            /* @__PURE__ */ u("div", { className: "form-field-combobox__select form-field__control", ref: P, children: [
              /* @__PURE__ */ u("div", { className: "form-field-combobox__select-header", onClick: z, children: [
                /* @__PURE__ */ l("span", { className: Ce, children: n.id }),
                n.id.length === 0 && J && /* @__PURE__ */ l("div", { className: "form-field-combobox__placeholder", children: /* @__PURE__ */ l("label", { children: J }) })
              ] }),
              p && /* @__PURE__ */ l(
                Q,
                {
                  headerIsHidden: !0,
                  customPosition: {
                    element: P,
                    position: "bottom-right"
                  },
                  className: "form-field-combobox__dropdown form-field-combobox__dropdown-select",
                  children: /* @__PURE__ */ l("ul", { className: "form-field-combobox__dropdown-list", ref: O, children: se.map((i) => {
                    if (!i.hidden) {
                      const M = h(
                        "form-field-combobox__dropdown-list-option",
                        i.className
                      );
                      return /* @__PURE__ */ l(
                        "li",
                        {
                          className: M,
                          onClick: () => he(i),
                          children: i.label
                        },
                        i.id
                      );
                    }
                  }) })
                }
              )
            ] }),
            /* @__PURE__ */ l(
              "input",
              {
                className: ue,
                "data-testid": m ? `${m}-form-combobox-input` : "form-combobox-input",
                id: e.name,
                onChange: be,
                onFocus: ge,
                placeholder: ie,
                ref: d,
                required: T,
                type: "text",
                value: F
              }
            ),
            $ && (x.length > 0 || v) && /* @__PURE__ */ l(
              Q,
              {
                headerIsHidden: !0,
                customPosition: {
                  element: P,
                  position: "bottom-right"
                },
                className: "form-field-combobox__dropdown form-field-combobox__dropdown-suggestions",
                style: {
                  ...ce
                },
                children: /* @__PURE__ */ u("div", { ref: O, children: [
                  !oe && /* @__PURE__ */ u("div", { className: "form-field-combobox__search-wrapper", children: [
                    /* @__PURE__ */ l(
                      "input",
                      {
                        "data-testid": m ? `${m}-form-combobox-search` : "form-combobox-search",
                        className: "form-field-combobox__search form-field__control",
                        onChange: we,
                        onFocus: () => y(!0),
                        placeholder: "Type to search",
                        type: "text"
                      }
                    ),
                    /* @__PURE__ */ l(je, {})
                  ] }),
                  /* @__PURE__ */ l("ul", { className: "form-field-combobox__dropdown-list", children: v && x.length === 0 ? /* @__PURE__ */ l("li", { className: "form-field-combobox__dropdown-list-option", children: "No data" }, "no data") : x.map((i) => /* @__PURE__ */ l(
                    "li",
                    {
                      className: "form-field-combobox__dropdown-list-option",
                      onClick: () => _e(i),
                      children: i.label
                    },
                    i.id
                  )) })
                ] })
              }
            ),
            /* @__PURE__ */ u("div", { className: "form-field__icons", children: [
              I && !Array.isArray(o.error) && /* @__PURE__ */ l(
                Fe,
                {
                  className: "form-field__warning",
                  template: /* @__PURE__ */ l(Te, { text: ((s = o.error) == null ? void 0 : s.label) ?? B, warning: !0 }),
                  children: /* @__PURE__ */ l(qe, {})
                }
              ),
              I && Array.isArray(o.error) && /* @__PURE__ */ l("button", { className: "form-field__warning", onClick: ve, children: /* @__PURE__ */ l(Me, {}) })
            ] }),
            !q(V) && /* @__PURE__ */ l(ke, { show: A, ref: { refInputContainer: b }, children: pe() })
          ] })
        ]
      }
    );
  } });
};
Be.propTypes = {
  comboboxClassName: t.string,
  density: Ae,
  disabled: t.bool,
  hideSearchInput: t.bool,
  inputDefaultValue: t.string,
  inputPlaceholder: t.string,
  invalidText: t.string,
  label: t.string,
  maxSuggestedMatches: t.number,
  name: t.string.isRequired,
  onBlur: t.func,
  onChange: t.func,
  onFocus: t.func,
  required: t.bool,
  rules: t.array,
  selectDefaultValue: t.shape({}),
  selectOptions: $e.isRequired,
  selectPlaceholder: t.string,
  suggestionList: Le,
  validator: t.func,
  withoutBorder: t.bool
};
export {
  Be as default
};
//# sourceMappingURL=FormCombobox.mjs.map
