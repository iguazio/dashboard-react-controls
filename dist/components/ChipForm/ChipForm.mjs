import { jsx as m, jsxs as x, Fragment as S } from "react/jsx-runtime";
import A, { useState as H, useMemo as z, useRef as _, useLayoutEffect as G, useEffect as O, useCallback as y } from "react";
import a from "prop-types";
import b from "classnames";
import { isEmpty as J } from "lodash";
import Q from "../../elements/OptionsMenu/OptionsMenu.mjs";
import U from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import { TAB as I, TAB_SHIFT as X } from "../../constants.mjs";
import { CHIP_OPTIONS as Y } from "../../types.mjs";
/* empty css               */
let F = ({
  checkValidation: W = null,
  chipOptions: $,
  className: q = "",
  editConfig: r,
  onChange: o,
  setEditConfig: k,
  validationRules: d = [],
  value: j
}, V) => {
  const [i, n] = H({
    ...j,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  }), c = z(() => {
    var e;
    return ((e = V.current) == null ? void 0 : e.clientWidth) - 50;
  }, [V]), { background: v, borderColor: N, density: E, font: P, borderRadius: R } = $, h = 25, p = 35, s = _(), l = _(), f = _(), B = b(
    q,
    !r.isKeyFocused && "item_edited",
    !J(d) && "item_edited_invalid"
  ), C = b(
    "edit-chip-container",
    v && `edit-chip-container-background_${v}`,
    N && `edit-chip-container-border_${N}`,
    P && `edit-chip-container-font_${P}`,
    E && `edit-chip-container-density_${E}`,
    R && `edit-chip-container-border_${R}`,
    (r.isEdit || r.isNewChip) && "edit-chip-container_edited"
  ), D = b(
    "input-label-value",
    !r.isValueFocused && "item_edited"
  );
  G(() => {
    if (!i.keyFieldWidth && !i.valueFieldWidth) {
      const e = s.current.scrollWidth + 1, t = l.current.scrollWidth + 1;
      i.key && i.value ? n((u) => ({
        ...u,
        keyFieldWidth: e >= c ? c : e,
        valueFieldWidth: t >= c ? c : t
      })) : n((u) => ({
        ...u,
        keyFieldWidth: h,
        valueFieldWidth: p
      }));
    }
  }, [
    i.key,
    i.keyFieldWidth,
    i.value,
    i.valueFieldWidth,
    c,
    s,
    l
  ]), O(() => {
    r.isKeyFocused ? s.current.focus() : r.isValueFocused && l.current.focus();
  }, [r.isKeyFocused, r.isValueFocused, s, l]);
  const K = y(
    (e) => {
      var u;
      e.stopPropagation(), (e.path ?? ((u = e.composedPath) == null ? void 0 : u.call(e))).includes(f.current) || o(e, i, "Click");
    },
    [i, o, f]
  );
  O(() => {
    if (r.isEdit)
      return document.addEventListener("click", K, !0), () => {
        document.removeEventListener("click", K, !0);
      };
  }, [K, r.isEdit]);
  const L = y(
    (e) => {
      e.stopPropagation(), !e.shiftKey && e.key === I && r.isValueFocused ? o(e, i, I) : e.shiftKey && e.key === I && r.isKeyFocused && o(e, i, X), (e.key === "Backspace" || e.key === "Delete") && n((t) => ({
        ...t,
        keyFieldWidth: r.isKeyFocused ? h : t.keyFieldWidth,
        valueFieldWidth: r.isValueFocused ? p : t.valueFieldWidth
      }));
    },
    [r, o, i]
  ), T = y(
    (e) => {
      e.target.name === "key" ? (s.current.selectionStart = s.current.selectionEnd, k((t) => ({
        ...t,
        isKeyFocused: !0,
        isValueFocused: !1
      }))) : (l.current.selectionStart = l.current.selectionEnd, k((t) => ({
        ...t,
        isKeyFocused: !1,
        isValueFocused: !0
      })));
    },
    [s, l, k]
  ), w = y(
    (e) => {
      if (e.preventDefault(), e.target.name === "key") {
        const t = s.current.scrollWidth;
        W && W(s.current.value), n((u) => ({
          ...u,
          key: s.current.value,
          keyFieldWidth: s.current.value.length <= 1 ? h : t >= c ? c : t > h ? t + 2 : h
        }));
      } else {
        const t = l.current.scrollWidth;
        n((u) => ({
          ...u,
          value: l.current.value,
          valueFieldWidth: l.current.value.length <= 1 ? p : t >= c ? c : t > p ? t + 2 : p
        }));
      }
    },
    [W, c, s, l]
  ), M = y(() => d.map(({ isValid: e = !1, label: t, name: u }) => /* @__PURE__ */ m(U, { valid: e, validationMessage: t }, u)), [d]);
  return /* @__PURE__ */ x(S, { children: [
    /* @__PURE__ */ x(
      "div",
      {
        ref: f,
        className: C,
        onKeyDown: (e) => r.isEdit && L(e),
        children: [
          /* @__PURE__ */ m(
            "input",
            {
              autoComplete: "off",
              className: B,
              name: "key",
              style: { width: i.keyFieldWidth },
              onChange: w,
              onFocus: T,
              placeholder: "key",
              ref: s,
              type: "text",
              value: i.key
            }
          ),
          /* @__PURE__ */ m("div", { className: "edit-chip-separator", children: ":" }),
          /* @__PURE__ */ m(
            "input",
            {
              autoComplete: "off",
              className: D,
              name: "value",
              onChange: w,
              onFocus: T,
              placeholder: "value",
              ref: l,
              style: { width: i.valueFieldWidth },
              type: "text",
              value: i.value
            }
          )
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ m(Q, { show: d.length > 0, ref: { refInputContainer: f }, children: M() })
  ] });
};
F = A.forwardRef(F);
F.displayName = "ChipForm";
F.propTypes = {
  checkValidation: a.func,
  chipOptions: Y.isRequired,
  className: a.string,
  editConfig: a.object.isRequired,
  onChange: a.func.isRequired,
  setEditConfig: a.func.isRequired,
  validationRules: a.array,
  value: a.object.isRequired
};
const ae = F;
export {
  ae as default
};
//# sourceMappingURL=ChipForm.mjs.map
