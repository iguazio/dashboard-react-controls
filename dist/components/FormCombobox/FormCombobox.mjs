import { jsx as i, jsxs as m } from "react/jsx-runtime";
import { useState as c, useRef as k, useEffect as C, useCallback as K } from "react";
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
  inputDefaultValue: ie = "",
  inputPlaceholder: le = "",
  invalidText: B = "Invalid",
  label: G = "",
  maxSuggestedMatches: te = 1,
  name: d,
  onBlur: _ = null,
  onChange: g = null,
  onFocus: N = null,
  required: R = !1,
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
  const { input: a, meta: r } = Ee(d), [T, F] = c(ie), [n, ne] = c(re), [ce, D] = c({
    left: "0px"
  }), [f, u] = c(!1), [L, w] = c(!1), [x, X] = c(S), [v, y] = c(!1), [V, de] = c(!1), [I, me] = c(H), [$, E] = c(!1), p = k(), A = k(), b = k(), P = k();
  We(p, () => E(!1));
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
      p.current && !p.current.contains(e.target) && P.current && !P.current.contains(e.target) && (y(!1), u(!1), w(!1), a.onBlur(new Event("blur")), _ && _(a.value));
    },
    [a, _]
  ), Y = (e) => {
    p.current && p.current.contains(e.target) || !e.target.closest(".pop-up-dialog") && !e.target.classList.contains("form-field-combobox") && (E(!1), u(!1), w(!1), b.current.blur());
  };
  C(() => (window.addEventListener("click", j), () => {
    window.removeEventListener("click", j);
  }), [j]), C(() => (($ || f || L) && window.addEventListener("scroll", Y, !0), () => {
    window.removeEventListener("scroll", Y, !0);
  }), [f, L, $]);
  const pe = () => I.map(({ isValid: e = !1, label: o, name: s }) => /* @__PURE__ */ i(Re, { valid: e, validationMessage: o }, s)), be = (e) => {
    const o = e.target;
    D({
      left: `${o.selectionStart < 30 ? o.selectionStart : 30}ch`
    }), v && y(!1), F(o.value), a.onChange(`${n.id}${o.value}`), g && g(n.id, o.value), x.length > 0 && w(!0);
  }, he = (e) => {
    e.id !== n.id && (ne(e), a.onChange(e.id), F(""), g && g(e.id), u(!1), b.current.disabled = !1, b.current.focus());
  }, _e = (e) => {
    const o = T.split("/"), s = o.length - 1;
    let l = e.customDelimiter ? o[s].replace(new RegExp(`${e.customDelimiter}.*`), "") + e.id : e.id;
    o.length <= te - 1 && (l += "/"), o[s] = l, v && y(!1), o.join("/") !== T && (F(o.join("/")), a.onChange(`${n.id}${o.join("/")}`), g && g(n.id, o.join("/"))), w(!1), b.current.focus(), D({
      left: `${b.current.selectionStart < 30 ? b.current.selectionStart : 30}ch`
    });
  }, ge = () => {
    N && N(), a.onFocus(new Event("focus")), f && u(!1), w(!0);
  }, we = (e) => {
    e.persist(), X(
      () => S.filter((o) => o.id.startsWith(e.target.value))
    );
  }, z = K(() => {
    f ? (u(!1), a.onBlur(new Event("blur")), _ && _(a.value)) : (w(!1), E(!1), D({
      left: "0px"
    }), u(!0), a.onFocus(new Event("focus")), N && N(a.value));
  }, [a, _, N, f]), xe = (e = "", o) => {
    const s = e.startsWith(n.id) ? e.substring(n.id.length) : e ?? "";
    let l = null;
    if (!q(I)) {
      const [M, Ve] = De(H, s), Ie = M.filter((O) => !O.isValid);
      Ve || (l = Ie.map((O) => ({ name: O.name, label: O.label })));
    }
    return q(l) && (s.startsWith(" ") ? l = { name: "empty", label: B } : R && s.trim().length === 0 && (l = { name: "required", label: "This field is required" })), !l && U && (l = U(e, o)), l;
  }, ve = () => {
    E((e) => !e), u(!1);
  }, Ne = h(
    Z,
    "form-field-combobox",
    "form-field",
    V && "form-field-combobox_invalid"
  ), Se = h(
    f && "form-field-combobox__icon_open",
    "form-field-combobox__icon"
  ), Ce = h(n.className), ye = h(
    "form-field__wrapper",
    `form-field__wrapper-${ee}`,
    W && "form-field__wrapper-disabled",
    V && "form-field__wrapper-invalid",
    ae && "without-border"
  );
  return /* @__PURE__ */ i(Oe, { name: d, validate: xe, children: ({ input: e, meta: o }) => {
    var s;
    return /* @__PURE__ */ m(
      "div",
      {
        className: Ne,
        ref: p,
        "data-testid": d ? `${d}-form-combobox` : "form-combobox",
        children: [
          G && /* @__PURE__ */ i("div", { className: fe, children: /* @__PURE__ */ m("label", { "data-testid": "label", htmlFor: e.name, children: [
            G,
            (R || I.find((l) => l.name === "required")) && /* @__PURE__ */ i("span", { className: "form-field__label-mandatory", children: " *" })
          ] }) }),
          /* @__PURE__ */ m("div", { className: ye, children: [
            /* @__PURE__ */ i("div", { className: "form-field__icons", children: /* @__PURE__ */ i(Pe, { className: Se, onClick: z }) }),
            /* @__PURE__ */ m("div", { className: "form-field-combobox__select form-field__control", ref: A, children: [
              /* @__PURE__ */ m("div", { className: "form-field-combobox__select-header", onClick: z, children: [
                /* @__PURE__ */ i("span", { className: Ce, children: n.id }),
                n.id.length === 0 && J && /* @__PURE__ */ i("div", { className: "form-field-combobox__placeholder", children: /* @__PURE__ */ i("label", { children: J }) })
              ] }),
              f && /* @__PURE__ */ i(
                Q,
                {
                  headerIsHidden: !0,
                  customPosition: {
                    element: A,
                    position: "bottom-right"
                  },
                  className: "form-field-combobox__dropdown form-field-combobox__dropdown-select",
                  children: /* @__PURE__ */ i("ul", { className: "form-field-combobox__dropdown-list", children: se.map((l) => {
                    if (!l.hidden) {
                      const M = h(
                        "form-field-combobox__dropdown-list-option",
                        l.className
                      );
                      return /* @__PURE__ */ i(
                        "li",
                        {
                          className: M,
                          onClick: () => he(l),
                          children: l.label
                        },
                        l.id
                      );
                    }
                  }) })
                }
              )
            ] }),
            /* @__PURE__ */ i(
              "input",
              {
                className: ue,
                "data-testid": d ? `${d}-form-combobox-input` : "form-combobox-input",
                id: e.name,
                onChange: be,
                onFocus: ge,
                placeholder: le,
                ref: b,
                required: R,
                type: "text",
                value: T
              }
            ),
            L && (x.length > 0 || v) && /* @__PURE__ */ i(
              Q,
              {
                headerIsHidden: !0,
                customPosition: {
                  element: A,
                  position: "bottom-right"
                },
                className: "form-field-combobox__dropdown form-field-combobox__dropdown-suggestions",
                style: {
                  ...ce
                },
                children: /* @__PURE__ */ m("div", { ref: P, children: [
                  !oe && /* @__PURE__ */ m("div", { className: "form-field-combobox__search-wrapper", children: [
                    /* @__PURE__ */ i(
                      "input",
                      {
                        "data-testid": d ? `${d}-form-combobox-search` : "form-combobox-search",
                        className: "form-field-combobox__search form-field__control",
                        onChange: we,
                        onFocus: () => y(!0),
                        placeholder: "Type to search",
                        type: "text"
                      }
                    ),
                    /* @__PURE__ */ i(je, {})
                  ] }),
                  /* @__PURE__ */ i("ul", { className: "form-field-combobox__dropdown-list", children: v && x.length === 0 ? /* @__PURE__ */ i("li", { className: "form-field-combobox__dropdown-list-option", children: "No data" }, "no data") : x.map((l) => /* @__PURE__ */ i(
                    "li",
                    {
                      className: "form-field-combobox__dropdown-list-option",
                      onClick: () => _e(l),
                      children: l.label
                    },
                    l.id
                  )) })
                ] })
              }
            ),
            /* @__PURE__ */ m("div", { className: "form-field__icons", children: [
              V && !Array.isArray(o.error) && /* @__PURE__ */ i(
                Fe,
                {
                  className: "form-field__warning",
                  template: /* @__PURE__ */ i(Te, { text: ((s = o.error) == null ? void 0 : s.label) ?? B, warning: !0 }),
                  children: /* @__PURE__ */ i(qe, {})
                }
              ),
              V && Array.isArray(o.error) && /* @__PURE__ */ i("button", { className: "form-field__warning", onClick: ve, children: /* @__PURE__ */ i(Me, {}) })
            ] }),
            !q(I) && /* @__PURE__ */ i(ke, { show: $, ref: p, children: pe() })
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
