import { jsx as l, jsxs as _, Fragment as ce } from "react/jsx-runtime";
import fe, { useState as C, useRef as N, useCallback as u, useMemo as ue, useEffect as S } from "react";
import r from "prop-types";
import $ from "classnames";
import { useField as me, Field as pe } from "react-final-form";
import he from "../ConfirmDialog/ConfirmDialog.mjs";
import ve from "../PopUpDialog/PopUpDialog.mjs";
import _e from "../../elements/SelectOption/SelectOption.mjs";
import H from "../TooltipTemplate/TextTooltipTemplate.mjs";
import M from "../Tooltip/Tooltip.mjs";
import { SELECT_OPTIONS as be, DENSITY as ge } from "../../types.mjs";
import { TERTIARY_BUTTON as we } from "../../constants.mjs";
import Ce from "../../images/dropdown.svg.mjs";
/* empty css                 */
let O = ({
  className: Y = "",
  density: z = "normal",
  disabled: T = !1,
  hideSelectedOption: I = !1,
  label: P = "",
  multiple: d = !1,
  name: c,
  onChange: B = null,
  options: m,
  preventWidthOverflow: G = !1,
  required: J = !1,
  scrollToView: b = !0,
  search: h = !1,
  selectedItemAction: a = null,
  tooltip: D = "",
  withSelectedIcon: K = !0,
  withoutBorder: Q = !1
}) => {
  var U;
  const { input: t, meta: s } = me(c), [X, Z] = C(!1), [j, g] = C(!1), [i, q] = C(!1), [v, V] = C(""), w = N(), A = N(), p = N(), y = N(), { width: L } = ((U = p == null ? void 0 : p.current) == null ? void 0 : U.getBoundingClientRect()) || {}, ee = $(
    "form-field__wrapper",
    `form-field__wrapper-${z}`,
    T && "form-field__wrapper-disabled",
    i && "form-field__wrapper-active",
    X && "form-field__wrapper-invalid",
    Q && "without-border"
  ), le = $(
    "form-field__label",
    T && "form-field__label-disabled"
  ), te = $(
    "form-field__select-value",
    !t.value && "form-field__select-placeholder"
  ), E = m.find((e) => e.id === t.value), F = u(
    (e) => e.filter((o) => !h || o.label.toLowerCase().includes(v.toLowerCase())),
    [h, v]
  ), oe = ue(() => {
    if (b)
      return F(m);
    const e = [...m], o = e.filter((n, R, de) => n.id === t.value ? (de.splice(R, 1), !0) : !1);
    return F([...o, ...e]);
  }, [t.value, F, m, b]), re = () => {
    if (!t.value || !t.value.length)
      return `Select Option${d ? "s" : ""}`;
    const e = d && t.value.includes("all") && t.value.length > 1 ? m.filter((o) => o.id !== "all").filter((o) => t.value.includes(o.id)).map((o) => o.label).join(", ") : m.filter((o) => t.value.includes(o.id)).map((o) => o.label).join(", ");
    return d ? t.value.length <= 2 ? e : `${t.value.length} items selected` : E == null ? void 0 : E.label;
  };
  S(() => {
    Z(
      s.invalid && (s.validating || s.modified || s.submitFailed && s.touched)
    );
  }, [s.invalid, s.modified, s.submitFailed, s.touched, s.validating]);
  const ie = u(() => {
    i || (q(!0), t.onFocus(new Event("focus")));
  }, [t, i]), f = u(() => {
    i && (q(!1), t.onBlur(new Event("blur")));
  }, [t, i]), k = u(
    (e) => {
      p.current !== e.target.closest(".form-field-select") && f();
    },
    [f]
  ), x = u(
    (e) => {
      e.target.closest(".options-list__body") || f();
    },
    [f]
  );
  S(() => (i && window.addEventListener("scroll", x, !0), window.addEventListener("click", k), () => {
    window.removeEventListener("click", k), window.removeEventListener("scroll", x, !0);
  }), [k, x, i]);
  const W = u(() => {
    const e = w.current.querySelector(
      `[data-custom-id="${t.value}"]`
    );
    e && (v ? w.current.scrollTo({ top: 0, left: 0, behavior: "smooth" }) : setTimeout(() => {
      e.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 0));
  }, [t.value, v]);
  S(() => {
    i && w.current && b && W();
  }, [i, W, b]), S(() => {
    i && h && y.current && y.current.focus();
  }, [i, h]);
  const ae = () => {
    i ? f() : !T && ie();
  }, se = u(
    (e) => {
      e.stopPropagation(), !d && !e.target.classList.contains("disabled") && !e.target.closest(".options-list__search") && (f(), V(""));
    },
    [f, d]
  ), ne = (e, o) => {
    e !== t.value && (o.handler && o.handler(), B && B(e), setTimeout(() => {
      t.onChange(e);
    }));
  };
  return /* @__PURE__ */ l(pe, { name: c, validate: (e) => {
    if (J)
      return e ? void 0 : "Required";
  }, children: ({ input: e, meta: o }) => /* @__PURE__ */ l(
    M,
    {
      className: "select-tooltip",
      template: /* @__PURE__ */ l(H, { text: D }),
      hidden: !D,
      children: /* @__PURE__ */ _(
        "div",
        {
          "data-testid": c ? `${c}-form-field-select` : "form-field-select",
          ref: p,
          className: `form-field-select ${Y}`,
          onClick: ae,
          children: [
            P && /* @__PURE__ */ l("div", { className: le, children: /* @__PURE__ */ _("label", { "data-testid": c ? `${c}-form-select-label` : "form-select-label", children: [
              P,
              o.error && /* @__PURE__ */ l("span", { className: "form-field__label-mandatory", children: " *" })
            ] }) }),
            /* @__PURE__ */ _("div", { "data-testid": "select-header", className: ee, children: [
              /* @__PURE__ */ l("div", { className: "form-field__control", children: !I && /* @__PURE__ */ l("div", { "data-testid": "selected-option", className: "form-field__select", children: /* @__PURE__ */ l("span", { className: te, children: re() }) }) }),
              /* @__PURE__ */ _("div", { className: "form-field__icons", children: [
                e.value && a && /* @__PURE__ */ l(ce, { children: a.handler ? /* @__PURE__ */ l(M, { template: /* @__PURE__ */ l(H, { text: a.tooltip }), children: /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: (n) => {
                      a.confirm ? g(!0) : a.handler(e.value), n.stopPropagation();
                    },
                    children: a.icon
                  }
                ) }) : /* @__PURE__ */ l("span", { children: a.icon }) }),
                /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(Ce, { className: "form-field__caret" }) })
              ] })
            ] }),
            j && /* @__PURE__ */ l(
              he,
              {
                cancelButton: {
                  handler: () => {
                    g(!1);
                  },
                  label: "Cancel",
                  variant: we
                },
                closePopUp: () => {
                  g(!1);
                },
                confirmButton: {
                  handler: () => {
                    a.handler(e.value), g(!1);
                  },
                  label: a.confirm.btnConfirmLabel,
                  variant: a.confirm.btnConfirmType
                },
                header: a.confirm.title,
                isOpen: j,
                message: a.confirm.message
              }
            ),
            i && /* @__PURE__ */ l(
              ve,
              {
                className: "form-field form-field-select__options-list",
                headerIsHidden: !0,
                ref: A,
                customPosition: {
                  element: p,
                  position: "bottom-right",
                  autoHorizontalPosition: !0
                },
                style: {
                  maxWidth: `${L < 500 && !G ? 500 : L}px`,
                  minWidth: `${L}px`
                },
                children: /* @__PURE__ */ _(
                  "div",
                  {
                    "data-testid": "select-body",
                    className: "options-list__body",
                    onClick: se,
                    children: [
                      h && /* @__PURE__ */ l("div", { className: "options-list__search", children: /* @__PURE__ */ l(
                        "input",
                        {
                          type: "text",
                          placeholder: "Search...",
                          value: v,
                          onChange: (n) => V(n.target.value),
                          ref: y,
                          autoFocus: !0
                        }
                      ) }),
                      /* @__PURE__ */ l("ul", { className: "options-list", ref: w, children: oe.map((n) => /* @__PURE__ */ l(
                        _e,
                        {
                          item: n,
                          name: c,
                          onClick: (R) => {
                            ne(R, n);
                          },
                          multiple: d,
                          selectedId: d ? "" : e.value,
                          withSelectedIcon: K
                        },
                        n.id
                      )) })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ l("input", { ...e, type: "hidden" })
          ]
        }
      )
    }
  ) });
};
O.propTypes = {
  className: r.string,
  density: ge,
  disabled: r.bool,
  hideSelectedOption: r.bool,
  label: r.string,
  multiple: r.bool,
  name: r.string.isRequired,
  onChange: r.func,
  options: be.isRequired,
  preventWidthOverflow: r.bool,
  required: r.bool,
  scrollToView: r.bool,
  search: r.bool,
  selectedItemAction: r.object,
  tooltip: r.string,
  withSelectedIcon: r.bool,
  withoutBorder: r.bool
};
O = fe.memo(O);
const je = O;
export {
  je as default
};
//# sourceMappingURL=FormSelect.mjs.map
