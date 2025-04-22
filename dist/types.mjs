import e from "prop-types";
import { DANGER_BUTTON as i, LABEL_BUTTON as s, PRIMARY_BUTTON as r, SECONDARY_BUTTON as n, TERTIARY_BUTTON as t, MODAL_SM as o, MODAL_MD as a, MODAL_LG as O, MODAL_MIN as l, MODAL_MAX as d } from "./constants.mjs";
const _ = e.oneOf([
  i,
  s,
  r,
  n,
  t
]), u = e.shape({
  delimiter: e.element,
  id: e.string,
  value: e.string.isRequired
}), b = e.arrayOf(
  e.shape({
    disabled: e.bool,
    icon: e.element,
    id: e.string.isRequired,
    label: e.string.isRequired,
    subLabel: e.string,
    ui: e.shape({})
  })
), p = e.shape({
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
  density: e.oneOf(["dense", "normal", "medium"]),
  font: e.oneOf(["primary", "white", "green", "purple", "orange"]),
  borderRadius: e.oneOf(["primary", "secondary"])
}), I = e.arrayOf(u), c = e.shape({
  element: e.shape({}),
  position: e.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"]),
  autoHorizontalPosition: e.bool,
  autoVerticalPosition: e.bool
}), f = e.oneOf([o, a, O, l, d]), m = e.shape({
  handler: e.func,
  label: e.string.isRequired,
  variant: e.string.isRequired
}), N = e.oneOfType([e.element, e.string]), S = e.shape({
  handler: e.func.isRequired,
  label: e.string.isRequired,
  variant: e.string.isRequired
}), h = e.arrayOf(
  e.shape({
    id: e.string.isRequired,
    label: e.string.isRequired,
    hidden: e.bool,
    disabled: e.bool,
    nextIsDisabled: e.bool
  })
), L = e.shape({
  show: e.oneOfType([e.bool, e.string]),
  url: e.string
}), T = e.shape({
  disabled: e.bool,
  hidden: e.bool,
  icon: e.element,
  id: e.string.isRequired,
  label: e.oneOfType([e.string, e.element]).isRequired,
  labelHtml: e.string,
  status: e.string,
  subLabel: e.string
}), q = e.arrayOf(T), y = e.arrayOf(
  e.shape({
    name: e.string.isRequired,
    label: e.string.isRequired,
    pattern: e.oneOfType([e.instanceOf(RegExp), e.func]).isRequired,
    isValid: e.bool
  })
), A = e.arrayOf(
  e.shape({
    customDelimiter: e.string,
    id: e.string.isRequired,
    label: e.string.isRequired
  })
), E = e.arrayOf(
  e.shape({
    name: e.string.isRequired,
    label: e.string.isRequired,
    isValid: e.bool
  })
), P = e.arrayOf(
  e.shape({
    className: e.string,
    id: e.string.isRequired,
    label: e.string.isRequired
  })
), M = e.shape({
  data: e.shape({}).isRequired,
  ui: e.shape({
    isNew: e.bool,
    index: e.number.isRequired,
    fieldsPath: e.string.isRequired
  }).isRequired,
  [e.string]: e.any
}), C = e.shape({
  selectedColumnName: e.string.isRequired,
  getSortingIcon: e.func.isRequired,
  sortTable: e.func.isRequired
}), D = e.oneOfType([
  e.string,
  e.number,
  e.arrayOf(e.string, e.number)
]), B = e.oneOfType([e.string, e.number]), U = e.oneOfType([
  e.string,
  e.number,
  e.arrayOf(e.string, e.number)
]), G = e.oneOf(["dense", "normal", "medium", "chunky"]);
export {
  D as ALLOW_SORT_BY,
  _ as BUTTON_VARIANTS,
  u as CHIP,
  I as CHIPS,
  b as CHIP_INPUT_LIST,
  p as CHIP_OPTIONS,
  P as COMBOBOX_SELECT_OPTIONS,
  A as COMBOBOX_SUGGESTION_LIST,
  E as COMBOBOX_VALIDATION_RULES,
  m as CONFIRM_DIALOG_CANCEL_BUTTON,
  N as CONFIRM_DIALOG_MESSAGE,
  S as CONFIRM_DIALOG_SUBMIT_BUTTON,
  B as DEFAULT_SORT_BY,
  G as DENSITY,
  U as EXCLUDE_SORT_BY,
  M as FORM_TABLE_EDITING_ITEM,
  L as INPUT_LINK,
  y as INPUT_VALIDATION_RULES,
  f as MODAL_SIZES,
  c as POP_UP_CUSTOM_POSITION,
  T as SELECT_OPTION,
  q as SELECT_OPTIONS,
  C as SORT_PROPS,
  h as WIZARD_STEPS_CONFIG
};
//# sourceMappingURL=types.mjs.map
