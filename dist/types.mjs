import e from "prop-types";
import { DANGER_BUTTON as i, LABEL_BUTTON as s, PRIMARY_BUTTON as r, SECONDARY_BUTTON as n, TERTIARY_BUTTON as t, DENSITY_DENSE as o, DENSITY_NORMAL as a, DENSITY_MEDIUM as O, DENSITY_CHUNKY as d, MODAL_SM as l, MODAL_MD as u, MODAL_LG as T, MODAL_MIN as R, MODAL_MAX as g } from "./constants.mjs";
const f = e.oneOf([
  i,
  s,
  r,
  n,
  t
]), b = e.shape({
  delimiter: e.element,
  id: e.string,
  value: e.string.isRequired
}), S = e.arrayOf(
  e.shape({
    disabled: e.bool,
    icon: e.element,
    id: e.string.isRequired,
    label: e.string.isRequired,
    subLabel: e.string,
    ui: e.shape({})
  })
), _ = e.oneOf([
  o,
  a,
  O,
  d
]), q = e.shape({
  background: e.oneOf([
    "amethyst",
    "green",
    "grey",
    "java",
    "none",
    "orange",
    "purple",
    "sorbus"
  ]),
  boldValue: e.bool,
  borderColor: e.oneOf(["transparent", "orange", "green", "purple", "grey"]),
  density: _,
  font: e.oneOf(["primary", "white", "green", "purple", "orange"]),
  borderRadius: e.oneOf(["primary", "secondary"])
}), E = e.arrayOf(b), h = e.shape({
  element: e.shape({}),
  position: e.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"]),
  autoHorizontalPosition: e.bool,
  autoVerticalPosition: e.bool
}), m = e.oneOf([l, u, T, R, g]), A = e.shape({
  handler: e.func,
  label: e.string.isRequired,
  variant: e.string.isRequired
}), L = e.oneOfType([e.element, e.string]), y = e.shape({
  handler: e.func.isRequired,
  label: e.string.isRequired,
  variant: e.string.isRequired
}), D = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    hidden: e.bool,
    disabled: e.bool,
    nextIsDisabled: e.bool
  })
), M = e.shape({
  show: e.oneOfType([e.bool, e.string]),
  url: e.string
}), I = e.shape({
  disabled: e.bool,
  hidden: e.bool,
  icon: e.element,
  id: e.string.isRequired,
  label: e.oneOfType([e.string, e.element]).isRequired,
  labelHtml: e.string,
  status: e.string,
  subLabel: e.string
}), C = e.arrayOf(I), U = e.arrayOf(
  e.shape({
    name: e.string.isRequired,
    label: e.string.isRequired,
    pattern: e.oneOfType([e.instanceOf(RegExp), e.func]).isRequired,
    isValid: e.bool
  })
), P = e.arrayOf(
  e.shape({
    customDelimiter: e.string,
    id: e.string.isRequired,
    label: e.string.isRequired
  })
), B = e.arrayOf(
  e.shape({
    name: e.string.isRequired,
    label: e.string.isRequired,
    isValid: e.bool
  })
), Y = e.arrayOf(
  e.shape({
    className: e.string,
    id: e.string.isRequired,
    label: e.string.isRequired
  })
), G = e.shape({
  data: e.shape({}).isRequired,
  ui: e.shape({
    isNew: e.bool,
    index: e.number.isRequired,
    fieldsPath: e.string.isRequired
  }).isRequired,
  [e.string]: e.any
}), V = e.shape({
  selectedColumnName: e.string.isRequired,
  getSortingIcon: e.func.isRequired,
  sortTable: e.func.isRequired
}), F = e.oneOfType([
  e.string,
  e.number,
  e.arrayOf(e.string, e.number)
]), H = e.oneOfType([e.string, e.number]), x = e.oneOfType([
  e.string,
  e.number,
  e.arrayOf(e.string, e.number)
]), v = e.oneOf(["dense", "normal", "medium", "chunky"]), X = e.shape({
  startIndex: e.number.isRequired,
  endIndex: e.number.isRequired,
  tableBodyPaddingTop: e.number.isRequired
}), k = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    tip: e.string,
    hidden: e.bool
  })
), w = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    hidden: e.bool
  })
), Z = e.shape({
  disabled: e.bool,
  hidden: e.bool,
  label: e.string.isRequired,
  onClick: e.func.isRequired,
  tooltip: e.string,
  variant: e.string
}), c = e.shape({
  label: e.string.isRequired,
  icon: e.object,
  onClick: e.func.isRequired,
  disabled: e.bool,
  className: e.string
}), j = e.oneOfType([
  e.arrayOf(e.arrayOf(c.isRequired)),
  e.func
]);
export {
  j as ACTIONS_MENU,
  Z as ACTION_BUTTON,
  F as ALLOW_SORT_BY,
  f as BUTTON_VARIANTS,
  b as CHIP,
  E as CHIPS,
  S as CHIP_INPUT_LIST,
  q as CHIP_OPTIONS,
  Y as COMBOBOX_SELECT_OPTIONS,
  P as COMBOBOX_SUGGESTION_LIST,
  B as COMBOBOX_VALIDATION_RULES,
  A as CONFIRM_DIALOG_CANCEL_BUTTON,
  L as CONFIRM_DIALOG_MESSAGE,
  y as CONFIRM_DIALOG_SUBMIT_BUTTON,
  H as DEFAULT_SORT_BY,
  v as DENSITY,
  _ as DENSITY_OPTIONS,
  w as DETAILS_MENU,
  x as EXCLUDE_SORT_BY,
  G as FORM_TABLE_EDITING_ITEM,
  M as INPUT_LINK,
  U as INPUT_VALIDATION_RULES,
  m as MODAL_SIZES,
  h as POP_UP_CUSTOM_POSITION,
  I as SELECT_OPTION,
  C as SELECT_OPTIONS,
  k as SLIDER_TABS,
  V as SORT_PROPS,
  X as VIRTUALIZATION_CONFIG,
  D as WIZARD_STEPS_CONFIG
};
//# sourceMappingURL=types.mjs.map
