import { jsx as t, jsxs as u } from "react/jsx-runtime";
import { useState as d, useRef as R, useEffect as C, useCallback as K } from "react";
import { useField as Ee, Field as Oe } from "react-final-form";
import { isEmpty as q } from "lodash";
import i from "prop-types";
import _ from "classnames";
import Te from "../../elements/OptionsMenu/OptionsMenu.mjs";
import ke from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import Q from "../PopUpDialog/PopUpDialog.mjs";
import Re from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Fe from "../Tooltip/Tooltip.mjs";
import { checkPatternsValidity as $e } from "../../utils/validation.util.mjs";
import "../../hooks/index.mjs";
import { COMBOBOX_SUGGESTION_LIST as De, COMBOBOX_SELECT_OPTIONS as Le, DENSITY as Ae } from "../../types.mjs";
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
  inputDefaultValue: te = "",
  inputPlaceholder: le = "",
  invalidText: B = "Invalid",
  label: G = "",
  maxSuggestedMatches: ie = 1,
  name: f,
  onBlur: g = null,
  onChange: w = null,
  onFocus: N = null,
  required: F = !1,
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
  const { input: a, meta: r } = Ee(f), [$, D] = d(te), [n, ne] = d(re), [ce, y] = d({
    left: "0px"
  }), [p, m] = d(!1), [L, b] = d(!1), [x, X] = d(S), [v, I] = d(!1), [V, de] = d(!1), [E, fe] = d(H), [A, O] = d(!1), h = R(), P = R(), c = R(), T = R();
  We(h, () => O(!1));
  const me = _("form-field__label", W && "form-field__label-disabled"), ue = _(
    "form-field-combobox__input",
    n.id.length === 0 && "form-field-combobox__input_hidden"
  );
  C(() => {
    fe(
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
      h.current && !h.current.contains(e.target) && T.current && !T.current.contains(e.target) && (I(!1), m(!1), b(!1), a.onBlur(new Event("blur")), g && g(a.value));
    },
    [a, g]
  ), Y = (e) => {
    h.current && h.current.contains(e.target) || !e.target.closest(".pop-up-dialog") && !e.target.classList.contains("form-field-combobox") && (O(!1), m(!1), b(!1), c.current.blur());
  };
  C(() => (window.addEventListener("click", j), () => {
    window.removeEventListener("click", j);
  }), [j]), C(() => ((A || p || L) && window.addEventListener("scroll", Y, !0), () => {
    window.removeEventListener("scroll", Y, !0);
  }), [p, L, A]);
  const pe = () => E.map(({ isValid: e = !1, label: o, name: s }) => /* @__PURE__ */ t(ke, { valid: e, validationMessage: o }, s)), be = (e) => {
    const o = e.target;
    y({
      left: `${o.selectionStart < 30 ? o.selectionStart : 30}ch`
    }), v && I(!1), D(o.value), a.onChange(`${n.id}${o.value}`), w && w(n.id, o.value), x.length > 0 && b(!0);
  }, he = (e) => {
    e.id !== n.id ? (ne(e), a.onChange(e.id), D(""), w && w(e.id), m(!1), c.current.disabled = !1, c.current.focus()) : (m(!1), c.current.disabled = !1, c.current.focus());
  }, _e = (e) => {
    const o = $.split("/"), s = o.length - 1;
    let l = e.customDelimiter ? o[s].replace(new RegExp(`${e.customDelimiter}.*`), "") + e.id : e.id;
    o.length <= ie - 1 && (l += "/"), o[s] = l, v && I(!1), o.join("/") !== $ && (D(o.join("/")), a.onChange(`${n.id}${o.join("/")}`), w && w(n.id, o.join("/"))), b(!1), c.current.focus(), y({
      left: `${c.current.selectionStart < 30 ? c.current.selectionStart : 30}ch`
    });
  }, ge = (e) => {
    N && N(), a.onFocus(new Event("focus")), p && m(!1), c.current.selectionStart ? b(!0) : setTimeout(() => {
      y({
        left: `${e.target.selectionStart < 30 ? e.target.selectionStart : 30}ch`
      }), b(!0);
    });
  }, we = (e) => {
    e.persist(), X(
      () => S.filter((o) => o.id.startsWith(e.target.value))
    );
  }, z = K(() => {
    p ? (m(!1), a.onBlur(new Event("blur")), g && g(a.value)) : (b(!1), O(!1), y({
      left: "0px"
    }), m(!0), a.onFocus(new Event("focus")), N && N(a.value));
  }, [a, g, N, p]), xe = (e = "", o) => {
    const s = e.startsWith(n.id) ? e.substring(n.id.length) : e ?? "";
    let l = null;
    if (!q(E)) {
      const [M, Ie] = $e(H, s), Ve = M.filter((k) => !k.isValid);
      Ie || (l = Ve.map((k) => ({ name: k.name, label: k.label })));
    }
    return q(l) && (s.startsWith(" ") ? l = { name: "empty", label: B } : F && s.trim().length === 0 && (l = { name: "required", label: "This field is required" })), !l && U && (l = U(e, o)), l;
  }, ve = () => {
    O((e) => !e), m(!1);
  }, Ne = _(
    Z,
    "form-field-combobox",
    "form-field",
    V && "form-field-combobox_invalid"
  ), Se = _(
    p && "form-field-combobox__icon_open",
    "form-field-combobox__icon"
  ), Ce = _(n.className), ye = _(
    "form-field__wrapper",
    `form-field__wrapper-${ee}`,
    W && "form-field__wrapper-disabled",
    V && "form-field__wrapper-invalid",
    ae && "without-border"
  );
  return /* @__PURE__ */ t(Oe, { name: f, validate: xe, children: ({ input: e, meta: o }) => {
    var s;
    return /* @__PURE__ */ u(
      "div",
      {
        className: Ne,
        ref: h,
        "data-testid": f ? `${f}-form-combobox` : "form-combobox",
        children: [
          G && /* @__PURE__ */ t("div", { className: me, children: /* @__PURE__ */ u("label", { "data-testid": "label", htmlFor: e.name, children: [
            G,
            (F || E.find((l) => l.name === "required")) && /* @__PURE__ */ t("span", { className: "form-field__label-mandatory", children: " *" })
          ] }) }),
          /* @__PURE__ */ u("div", { className: ye, children: [
            /* @__PURE__ */ t("div", { className: "form-field__icons", children: /* @__PURE__ */ t(Pe, { className: Se, onClick: z }) }),
            /* @__PURE__ */ u("div", { className: "form-field-combobox__select form-field__control", ref: P, children: [
              /* @__PURE__ */ u("div", { className: "form-field-combobox__select-header", onClick: z, children: [
                /* @__PURE__ */ t("span", { className: Ce, children: n.id }),
                n.id.length === 0 && J && /* @__PURE__ */ t("div", { className: "form-field-combobox__placeholder", children: /* @__PURE__ */ t("label", { children: J }) })
              ] }),
              p && /* @__PURE__ */ t(
                Q,
                {
                  headerIsHidden: !0,
                  customPosition: {
                    element: P,
                    position: "bottom-right"
                  },
                  className: "form-field-combobox__dropdown form-field-combobox__dropdown-select",
                  children: /* @__PURE__ */ t("ul", { className: "form-field-combobox__dropdown-list", ref: T, children: se.map((l) => {
                    if (!l.hidden) {
                      const M = _(
                        "form-field-combobox__dropdown-list-option",
                        l.className
                      );
                      return /* @__PURE__ */ t(
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
            /* @__PURE__ */ t(
              "input",
              {
                autoComplete: "off",
                className: ue,
                "data-testid": f ? `${f}-form-combobox-input` : "form-combobox-input",
                id: e.name,
                onChange: be,
                onFocus: ge,
                placeholder: le,
                ref: c,
                required: F,
                type: "text",
                value: $
              }
            ),
            L && (x.length > 0 || v) && /* @__PURE__ */ t(
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
                children: /* @__PURE__ */ u("div", { ref: T, children: [
                  !oe && /* @__PURE__ */ u("div", { className: "form-field-combobox__search-wrapper", children: [
                    /* @__PURE__ */ t(
                      "input",
                      {
                        autoComplete: "off",
                        "data-testid": f ? `${f}-form-combobox-search` : "form-combobox-search",
                        className: "form-field-combobox__search form-field__control",
                        onChange: we,
                        onFocus: () => I(!0),
                        placeholder: "Type to search",
                        type: "text"
                      }
                    ),
                    /* @__PURE__ */ t(je, {})
                  ] }),
                  /* @__PURE__ */ t("ul", { className: "form-field-combobox__dropdown-list", children: v && x.length === 0 ? /* @__PURE__ */ t("li", { className: "form-field-combobox__dropdown-list-option", children: "No data" }, "no data") : x.map((l) => /* @__PURE__ */ t(
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
            /* @__PURE__ */ u("div", { className: "form-field__icons", children: [
              V && !Array.isArray(o.error) && /* @__PURE__ */ t(
                Fe,
                {
                  className: "form-field__warning",
                  template: /* @__PURE__ */ t(Re, { text: ((s = o.error) == null ? void 0 : s.label) ?? B, warning: !0 }),
                  children: /* @__PURE__ */ t(qe, {})
                }
              ),
              V && Array.isArray(o.error) && /* @__PURE__ */ t("button", { className: "form-field__warning", onClick: ve, children: /* @__PURE__ */ t(Me, {}) })
            ] }),
            !q(E) && /* @__PURE__ */ t(Te, { show: A, ref: { refInputContainer: h }, children: pe() })
          ] })
        ]
      }
    );
  } });
};
Be.propTypes = {
  comboboxClassName: i.string,
  density: Ae,
  disabled: i.bool,
  hideSearchInput: i.bool,
  inputDefaultValue: i.string,
  inputPlaceholder: i.string,
  invalidText: i.string,
  label: i.string,
  maxSuggestedMatches: i.number,
  name: i.string.isRequired,
  onBlur: i.func,
  onChange: i.func,
  onFocus: i.func,
  required: i.bool,
  rules: i.array,
  selectDefaultValue: i.shape({}),
  selectOptions: Le.isRequired,
  selectPlaceholder: i.string,
  suggestionList: De,
  validator: i.func,
  withoutBorder: i.bool
};
export {
  Be as default
};
//# sourceMappingURL=FormCombobox.mjs.map
