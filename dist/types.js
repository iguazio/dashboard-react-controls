"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WIZARD_STEPS_CONFIG = exports.SORT_PROPS = exports.SELECT_OPTIONS = exports.SELECT_OPTION = exports.POP_UP_CUSTOM_POSITION = exports.MODAL_SIZES = exports.INPUT_VALIDATION_RULES = exports.INPUT_LINK = exports.FORM_TABLE_EDITING_ITEM = exports.EXCLUDE_SORT_BY = exports.DEFAULT_SORT_BY = exports.CONFIRM_DIALOG_SUBMIT_BUTTON = exports.CONFIRM_DIALOG_CANCEL_BUTTON = exports.COMBOBOX_VALIDATION_RULES = exports.COMBOBOX_SUGGESTION_LIST = exports.COMBOBOX_SELECT_OPTIONS = exports.CHIP_OPTIONS = exports.CHIP_INPUT_LIST = exports.CHIPS = exports.CHIP = exports.BUTTON_VARIANTS = exports.ALLOW_SORT_BY = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                              Copyright 2022 Iguazio Systems Ltd.
                                                                                                                                                                                                                                                                                                                                                                                              Licensed under the Apache License, Version 2.0 (the "License") with
                                                                                                                                                                                                                                                                                                                                                                                              an addition restriction as set forth herein. You may not use this
                                                                                                                                                                                                                                                                                                                                                                                              file except in compliance with the License. You may obtain a copy of
                                                                                                                                                                                                                                                                                                                                                                                              the License at http://www.apache.org/licenses/LICENSE-2.0.
                                                                                                                                                                                                                                                                                                                                                                                              Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                              distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
                                                                                                                                                                                                                                                                                                                                                                                              implied. See the License for the specific language governing
                                                                                                                                                                                                                                                                                                                                                                                              permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                              In addition, you may not use the software for any purposes that are
                                                                                                                                                                                                                                                                                                                                                                                              illegal under applicable law, and the grant of the foregoing license
                                                                                                                                                                                                                                                                                                                                                                                              under the Apache 2.0 license is conditioned upon your compliance with
                                                                                                                                                                                                                                                                                                                                                                                              such restriction.
                                                                                                                                                                                                                                                                                                                                                                                              */
var BUTTON_VARIANTS = _propTypes.default.oneOf([_constants.DANGER_BUTTON, _constants.LABEL_BUTTON, _constants.PRIMARY_BUTTON, _constants.SECONDARY_BUTTON, _constants.TERTIARY_BUTTON]);
exports.BUTTON_VARIANTS = BUTTON_VARIANTS;
var CHIP = _propTypes.default.shape({
  delimiter: _propTypes.default.element,
  id: _propTypes.default.string,
  value: _propTypes.default.string.isRequired
});
exports.CHIP = CHIP;
var CHIP_INPUT_LIST = _propTypes.default.arrayOf(_propTypes.default.shape({
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.element,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  subLabel: _propTypes.default.string,
  ui: _propTypes.default.shape({})
}));
exports.CHIP_INPUT_LIST = CHIP_INPUT_LIST;
var CHIP_OPTIONS = _propTypes.default.shape({
  background: _propTypes.default.oneOf(['amethyst', 'green', 'grey', 'java', 'none', 'orange', 'purple', 'sorbus']),
  boldValue: _propTypes.default.bool,
  borderColor: _propTypes.default.oneOf(['transparent', 'orange', 'green', 'purple', 'grey']),
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium']),
  font: _propTypes.default.oneOf(['primary', 'white', 'green', 'purple', 'orange']),
  borderRadius: _propTypes.default.oneOf(['primary', 'secondary'])
});
exports.CHIP_OPTIONS = CHIP_OPTIONS;
var CHIPS = _propTypes.default.arrayOf(CHIP);
exports.CHIPS = CHIPS;
var POP_UP_CUSTOM_POSITION = _propTypes.default.shape({
  element: _propTypes.default.shape({}),
  position: _propTypes.default.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
});
exports.POP_UP_CUSTOM_POSITION = POP_UP_CUSTOM_POSITION;
var MODAL_SIZES = _propTypes.default.oneOf([_constants.MODAL_SM, _constants.MODAL_MD, _constants.MODAL_LG, _constants.MODAL_MIN, _constants.MODAL_MAX]);
exports.MODAL_SIZES = MODAL_SIZES;
var CONFIRM_DIALOG_CANCEL_BUTTON = _propTypes.default.shape({
  handler: _propTypes.default.func,
  label: _propTypes.default.string.isRequired,
  variant: _propTypes.default.string.isRequired
});
exports.CONFIRM_DIALOG_CANCEL_BUTTON = CONFIRM_DIALOG_CANCEL_BUTTON;
var CONFIRM_DIALOG_SUBMIT_BUTTON = _propTypes.default.shape({
  handler: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  variant: _propTypes.default.string.isRequired
});
exports.CONFIRM_DIALOG_SUBMIT_BUTTON = CONFIRM_DIALOG_SUBMIT_BUTTON;
var WIZARD_STEPS_CONFIG = _propTypes.default.arrayOf(_propTypes.default.shape({
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  getActions: _propTypes.default.func
}));
exports.WIZARD_STEPS_CONFIG = WIZARD_STEPS_CONFIG;
var INPUT_LINK = _propTypes.default.shape({
  show: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  url: _propTypes.default.string
});
exports.INPUT_LINK = INPUT_LINK;
var SELECT_OPTION = _propTypes.default.shape({
  disabled: _propTypes.default.bool,
  hidden: _propTypes.default.bool,
  icon: _propTypes.default.element,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  labelHtml: _propTypes.default.string,
  status: _propTypes.default.string,
  subLabel: _propTypes.default.string
});
exports.SELECT_OPTION = SELECT_OPTION;
var SELECT_OPTIONS = _propTypes.default.arrayOf(SELECT_OPTION);
exports.SELECT_OPTIONS = SELECT_OPTIONS;
var INPUT_VALIDATION_RULES = _propTypes.default.arrayOf(_propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  pattern: _propTypes.default.oneOfType([_propTypes.default.instanceOf(RegExp), _propTypes.default.func]).isRequired,
  isValid: _propTypes.default.bool
}));
exports.INPUT_VALIDATION_RULES = INPUT_VALIDATION_RULES;
var COMBOBOX_SUGGESTION_LIST = _propTypes.default.arrayOf(_propTypes.default.shape({
  customDelimiter: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired
}));
exports.COMBOBOX_SUGGESTION_LIST = COMBOBOX_SUGGESTION_LIST;
var COMBOBOX_VALIDATION_RULES = _propTypes.default.arrayOf(_propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  isValid: _propTypes.default.bool
}));
exports.COMBOBOX_VALIDATION_RULES = COMBOBOX_VALIDATION_RULES;
var COMBOBOX_SELECT_OPTIONS = _propTypes.default.arrayOf(_propTypes.default.shape({
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired
}));
exports.COMBOBOX_SELECT_OPTIONS = COMBOBOX_SELECT_OPTIONS;
var FORM_TABLE_EDITING_ITEM = _propTypes.default.shape(_defineProperty({
  data: _propTypes.default.shape({}).isRequired,
  ui: _propTypes.default.shape({
    isNew: _propTypes.default.bool,
    index: _propTypes.default.number.isRequired,
    fieldsPath: _propTypes.default.string.isRequired
  }).isRequired
}, _propTypes.default.string, _propTypes.default.any));
exports.FORM_TABLE_EDITING_ITEM = FORM_TABLE_EDITING_ITEM;
var SORT_PROPS = _propTypes.default.shape({
  selectedColumnName: _propTypes.default.string.isRequired,
  getSortingIcon: _propTypes.default.func.isRequired,
  sortTable: _propTypes.default.func.isRequired
});
exports.SORT_PROPS = SORT_PROPS;
var ALLOW_SORT_BY = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.string, _propTypes.default.number)]);
exports.ALLOW_SORT_BY = ALLOW_SORT_BY;
var DEFAULT_SORT_BY = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]);
exports.DEFAULT_SORT_BY = DEFAULT_SORT_BY;
var EXCLUDE_SORT_BY = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.string, _propTypes.default.number)]);
exports.EXCLUDE_SORT_BY = EXCLUDE_SORT_BY;