import e from "prop-types";
import { DANGER_BUTTON as i, LABEL_BUTTON as s, PRIMARY_BUTTON as n, SECONDARY_BUTTON as r, TERTIARY_BUTTON as o, DENSITY_DENSE as t, DENSITY_NORMAL as a, DENSITY_MEDIUM as O, DENSITY_CHUNKY as d, MODAL_SM as l, MODAL_MD as u, MODAL_LG as T, MODAL_MIN as R, MODAL_MAX as _ } from "./constants.mjs";
const f = e.oneOf([
  i,
  s,
  n,
  r,
  o
]), I = e.shape({
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
), b = e.oneOf([
  t,
  a,
  O,
  d
]), E = e.shape({
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
  density: b,
  font: e.oneOf(["primary", "white", "green", "purple", "orange"]),
  borderRadius: e.oneOf(["primary", "secondary"])
}), q = e.arrayOf(I), h = e.oneOfType([
  e.number,
  e.oneOf(["all"])
]), m = e.shape({
  element: e.shape({}),
  position: e.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"]),
  autoHorizontalPosition: e.bool,
  autoVerticalPosition: e.bool
}), A = e.oneOf([l, u, T, R, _]), L = e.shape({
  handler: e.func,
  label: e.string.isRequired,
  variant: e.string.isRequired
}), y = e.oneOfType([e.element, e.string]), D = e.shape({
  handler: e.func.isRequired,
  label: e.string.isRequired,
  variant: e.string.isRequired
}), M = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    hidden: e.bool,
    disabled: e.bool,
    nextIsDisabled: e.bool
  })
), C = e.shape({
  show: e.oneOfType([e.bool, e.string]),
  url: e.string
}), g = e.shape({
  disabled: e.bool,
  hidden: e.bool,
  icon: e.element,
  id: e.string.isRequired,
  label: e.oneOfType([e.string, e.element]).isRequired,
  labelHtml: e.string,
  status: e.string,
  subLabel: e.string
}), P = e.arrayOf(g), U = e.arrayOf(
  e.shape({
    name: e.string.isRequired,
    label: e.string.isRequired,
    pattern: e.oneOfType([e.instanceOf(RegExp), e.func]).isRequired,
    isValid: e.bool
  })
), B = e.arrayOf(
  e.shape({
    customDelimiter: e.string,
    id: e.string.isRequired,
    label: e.string.isRequired
  })
), Y = e.arrayOf(
  e.shape({
    name: e.string.isRequired,
    label: e.string.isRequired,
    isValid: e.bool
  })
), G = e.arrayOf(
  e.shape({
    className: e.string,
    id: e.string.isRequired,
    label: e.string.isRequired
  })
), H = e.shape({
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
]), x = e.oneOfType([e.string, e.number]), X = e.oneOfType([
  e.string,
  e.number,
  e.arrayOf(e.string, e.number)
]), v = e.oneOf(["dense", "normal", "medium", "chunky"]), k = e.shape({
  startIndex: e.number.isRequired,
  endIndex: e.number.isRequired,
  tableBodyPaddingTop: e.number.isRequired
}), w = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    tip: e.string,
    hidden: e.bool
  })
), Z = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    hidden: e.bool
  })
), j = e.shape({
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
}), K = e.oneOfType([
  e.arrayOf(e.arrayOf(c.isRequired)),
  e.func
]);
export {
  K as ACTIONS_MENU,
  j as ACTION_BUTTON,
  F as ALLOW_SORT_BY,
  f as BUTTON_VARIANTS,
  I as CHIP,
  q as CHIPS,
  S as CHIP_INPUT_LIST,
  E as CHIP_OPTIONS,
  G as COMBOBOX_SELECT_OPTIONS,
  B as COMBOBOX_SUGGESTION_LIST,
  Y as COMBOBOX_VALIDATION_RULES,
  L as CONFIRM_DIALOG_CANCEL_BUTTON,
  y as CONFIRM_DIALOG_MESSAGE,
  D as CONFIRM_DIALOG_SUBMIT_BUTTON,
  x as DEFAULT_SORT_BY,
  v as DENSITY,
  b as DENSITY_OPTIONS,
  Z as DETAILS_MENU,
  X as EXCLUDE_SORT_BY,
  H as FORM_TABLE_EDITING_ITEM,
  C as INPUT_LINK,
  U as INPUT_VALIDATION_RULES,
  A as MODAL_SIZES,
  m as POP_UP_CUSTOM_POSITION,
  g as SELECT_OPTION,
  P as SELECT_OPTIONS,
  w as SLIDER_TABS,
  V as SORT_PROPS,
  k as VIRTUALIZATION_CONFIG,
  h as VISIBLE_CHIPS_MAX_LENGTH,
  M as WIZARD_STEPS_CONFIG
};
//# sourceMappingURL=types.mjs.map
