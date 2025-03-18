import PropTypes from "prop-types";
import { DANGER_BUTTON, LABEL_BUTTON, PRIMARY_BUTTON, SECONDARY_BUTTON, TERTIARY_BUTTON, MODAL_SM, MODAL_MD, MODAL_LG, MODAL_MIN, MODAL_MAX } from "./constants.mjs";
const BUTTON_VARIANTS = PropTypes.oneOf([
  DANGER_BUTTON,
  LABEL_BUTTON,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TERTIARY_BUTTON
]);
const CHIP = PropTypes.shape({
  delimiter: PropTypes.element,
  id: PropTypes.string,
  value: PropTypes.string.isRequired
});
const CHIP_INPUT_LIST = PropTypes.arrayOf(
  PropTypes.shape({
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string,
    ui: PropTypes.shape({})
  })
);
const CHIP_OPTIONS = PropTypes.shape({
  background: PropTypes.oneOf([
    "amethyst",
    "green",
    "grey",
    "java",
    "none",
    "orange",
    "purple",
    "sorbus"
  ]),
  boldValue: PropTypes.bool,
  borderColor: PropTypes.oneOf(["transparent", "orange", "green", "purple", "grey"]),
  density: PropTypes.oneOf(["dense", "normal", "medium"]),
  font: PropTypes.oneOf(["primary", "white", "green", "purple", "orange"]),
  borderRadius: PropTypes.oneOf(["primary", "secondary"])
});
const CHIPS = PropTypes.arrayOf(CHIP);
const POP_UP_CUSTOM_POSITION = PropTypes.shape({
  element: PropTypes.shape({}),
  position: PropTypes.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"]),
  autoHorizontalPosition: PropTypes.bool,
  autoVerticalPosition: PropTypes.bool
});
const MODAL_SIZES = PropTypes.oneOf([MODAL_SM, MODAL_MD, MODAL_LG, MODAL_MIN, MODAL_MAX]);
const CONFIRM_DIALOG_CANCEL_BUTTON = PropTypes.shape({
  handler: PropTypes.func,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
});
const CONFIRM_DIALOG_MESSAGE = PropTypes.oneOfType([PropTypes.element, PropTypes.string]);
const CONFIRM_DIALOG_SUBMIT_BUTTON = PropTypes.shape({
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
});
const WIZARD_STEPS_CONFIG = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hidden: PropTypes.bool,
    disabled: PropTypes.bool,
    nextIsDisabled: PropTypes.bool
  })
);
const INPUT_LINK = PropTypes.shape({
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  url: PropTypes.string
});
const SELECT_OPTION = PropTypes.shape({
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  icon: PropTypes.element,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  labelHtml: PropTypes.string,
  status: PropTypes.string,
  subLabel: PropTypes.string
});
const SELECT_OPTIONS = PropTypes.arrayOf(SELECT_OPTION);
const INPUT_VALIDATION_RULES = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    pattern: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.func]).isRequired,
    isValid: PropTypes.bool
  })
);
const COMBOBOX_SUGGESTION_LIST = PropTypes.arrayOf(
  PropTypes.shape({
    customDelimiter: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })
);
const COMBOBOX_VALIDATION_RULES = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isValid: PropTypes.bool
  })
);
const COMBOBOX_SELECT_OPTIONS = PropTypes.arrayOf(
  PropTypes.shape({
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })
);
const FORM_TABLE_EDITING_ITEM = PropTypes.shape({
  data: PropTypes.shape({}).isRequired,
  ui: PropTypes.shape({
    isNew: PropTypes.bool,
    index: PropTypes.number.isRequired,
    fieldsPath: PropTypes.string.isRequired
  }).isRequired,
  [PropTypes.string]: PropTypes.any
});
const SORT_PROPS = PropTypes.shape({
  selectedColumnName: PropTypes.string.isRequired,
  getSortingIcon: PropTypes.func.isRequired,
  sortTable: PropTypes.func.isRequired
});
const ALLOW_SORT_BY = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.string, PropTypes.number)
]);
const DEFAULT_SORT_BY = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const EXCLUDE_SORT_BY = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.string, PropTypes.number)
]);
export {
  ALLOW_SORT_BY,
  BUTTON_VARIANTS,
  CHIP,
  CHIPS,
  CHIP_INPUT_LIST,
  CHIP_OPTIONS,
  COMBOBOX_SELECT_OPTIONS,
  COMBOBOX_SUGGESTION_LIST,
  COMBOBOX_VALIDATION_RULES,
  CONFIRM_DIALOG_CANCEL_BUTTON,
  CONFIRM_DIALOG_MESSAGE,
  CONFIRM_DIALOG_SUBMIT_BUTTON,
  DEFAULT_SORT_BY,
  EXCLUDE_SORT_BY,
  FORM_TABLE_EDITING_ITEM,
  INPUT_LINK,
  INPUT_VALIDATION_RULES,
  MODAL_SIZES,
  POP_UP_CUSTOM_POSITION,
  SELECT_OPTION,
  SELECT_OPTIONS,
  SORT_PROPS,
  WIZARD_STEPS_CONFIG
};
//# sourceMappingURL=types.mjs.map
