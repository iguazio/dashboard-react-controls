import { jsx as r, jsxs as T, Fragment as X } from "react/jsx-runtime";
import h, { useState as Y, useCallback as Z, useEffect as z, useLayoutEffect as M } from "react";
import e from "prop-types";
import d from "classnames";
import { useSelector as ee } from "react-redux";
import { isEmpty as le } from "lodash";
import ae from "../ChipForm/ChipForm.mjs";
import { getChipLabelAndValue as ie } from "../../utils/chips.util.mjs";
import { CHIP_OPTIONS as oe, CHIP as se } from "../../types.mjs";
import re from "../../images/close.svg.mjs";
/* empty css           */
let t = ({
  chip: i,
  chipIndex: n = null,
  chipOptions: b,
  className: w,
  editConfig: _ = {},
  handleEditChip: H = () => {
  },
  handleIsEdit: I = () => {
  },
  handleRemoveChip: A = () => {
  },
  hiddenChips: B = !1,
  isDeleteMode: D = !1,
  isEditMode: o = !1,
  onClick: O = null,
  setChipsSizes: p = () => {
  },
  setEditConfig: V = () => {
  },
  setValidation: s = null,
  shortChip: x = !1,
  showChips: E,
  textOverflowEllipsis: m = !1
}, { chipsCellRef: G, hiddenChipsCounterRef: J }) => {
  var P;
  const [C, v] = Y([]), g = ee((l) => {
    var a;
    return (a = l.appStore) == null ? void 0 : a.frontendSpec;
  }) ?? {}, c = h.useRef(), { chipLabel: y, chipValue: N } = ie(i), { background: R, boldValue: K, borderColor: k, density: $, font: S, borderRadius: L } = b, F = d(
    "chip",
    "chip__content",
    (m || o) && "data-ellipsis",
    x && "chip_short",
    B && "chip_hidden",
    $ && `chip-density_${$}`,
    L && `chip-border_${L}`,
    R && `chip-background_${R}`,
    k && `chip-border_${k}`,
    S && `chip-font_${S}`,
    o && "editable",
    (E || o) && "chip_visible",
    w
  ), Q = d(
    "chip__label",
    (m || o) && "data-ellipsis",
    !le(C) && "chip__label_invalid"
  ), U = d(
    "chip__value",
    (m || o) && "data-ellipsis",
    K && "chip-value_bold"
  ), f = Z(
    (l) => {
      var a;
      if ((a = g.internal_labels) != null && a.includes(l))
        return v([
          { name: "internal label", label: "System-defined labels cannot be modified." }
        ]), s && s(!1);
      v([]), s && s(!0);
    },
    [g.internal_labels, s]
  );
  return z(() => {
    var l, a;
    s && f((a = (l = i.value.match(/^(?<key>|.+?):\s?(?<value>|.+?)$/)) == null ? void 0 : l.groups) == null ? void 0 : a.key);
  }, [f, i, s]), M(() => {
    if (c.current && p) {
      const { marginLeft: l, marginRight: a } = getComputedStyle(c.current);
      p((W) => {
        var u, j, q;
        return {
          ...W,
          [n]: (((q = (j = (u = c.current) == null ? void 0 : u.getBoundingClientRect) == null ? void 0 : j.call(u)) == null ? void 0 : q.width) ?? 0) + parseFloat(l) + parseFloat(a)
        };
      });
    }
  }, [n, p]), i.value.match(/^\+ [\d]+/g) ? /* @__PURE__ */ r(
    "span",
    {
      className: `${F} chips_button`,
      onClick: O,
      ref: J,
      children: i.value
    }
  ) : o && n === _.chipIndex ? /* @__PURE__ */ r(
    ae,
    {
      chipOptions: b,
      className: "input-label-key",
      editConfig: _,
      onChange: H,
      ref: G,
      setEditConfig: V,
      value: (P = i.value.match(/^(?<key>|.+?):\s?(?<value>|.+?)$/)) == null ? void 0 : P.groups,
      validationRules: C,
      checkValidation: f
    },
    i.value
  ) : /* @__PURE__ */ T(
    "div",
    {
      className: F,
      ref: c,
      onClick: (l) => I(l, n),
      children: [
        y && /* @__PURE__ */ r("div", { className: Q, children: y }),
        N && /* @__PURE__ */ T(X, { children: [
          /* @__PURE__ */ r("div", { className: "chip__delimiter", children: i.delimiter ?? ":" }),
          /* @__PURE__ */ r("div", { className: U, children: N })
        ] }),
        (o || D) && /* @__PURE__ */ r("button", { className: "item-icon-close", onClick: (l) => A(l, n), children: /* @__PURE__ */ r(re, {}) })
      ]
    }
  );
};
t = h.forwardRef(t);
t.displayName = "Chip";
t.propTypes = {
  chip: se.isRequired,
  chipIndex: e.number,
  chipOptions: oe.isRequired,
  className: e.string,
  editConfig: e.object,
  handleEditChip: e.func,
  handleIsEdit: e.func,
  handleRemoveChip: e.func,
  hiddenChips: e.bool,
  isDeleteMode: e.bool,
  isEditMode: e.bool,
  onClick: e.func,
  setChipsSizes: e.func,
  setEditConfig: e.func,
  setValidation: e.func,
  shortChip: e.bool,
  showChips: e.bool.isRequired,
  textOverflowEllipsis: e.bool
};
const Ce = h.memo(t);
export {
  Ce as default
};
//# sourceMappingURL=Chip.mjs.map
