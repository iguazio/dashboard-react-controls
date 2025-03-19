"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WIZARD_STEPS_CONFIG = exports.SORT_PROPS = exports.SELECT_OPTIONS = exports.SELECT_OPTION = exports.POP_UP_CUSTOM_POSITION = exports.MODAL_SIZES = exports.INPUT_VALIDATION_RULES = exports.INPUT_LINK = exports.FORM_TABLE_EDITING_ITEM = exports.EXCLUDE_SORT_BY = exports.DEFAULT_SORT_BY = exports.CONFIRM_DIALOG_SUBMIT_BUTTON = exports.CONFIRM_DIALOG_MESSAGE = exports.CONFIRM_DIALOG_CANCEL_BUTTON = exports.COMBOBOX_VALIDATION_RULES = exports.COMBOBOX_SUGGESTION_LIST = exports.COMBOBOX_SELECT_OPTIONS = exports.CHIP_OPTIONS = exports.CHIP_INPUT_LIST = exports.CHIPS = exports.CHIP = exports.BUTTON_VARIANTS = exports.ALLOW_SORT_BY = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
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

const BUTTON_VARIANTS = exports.BUTTON_VARIANTS = _propTypes.default.oneOf([_constants.DANGER_BUTTON, _constants.LABEL_BUTTON, _constants.PRIMARY_BUTTON, _constants.SECONDARY_BUTTON, _constants.TERTIARY_BUTTON]);
const CHIP = exports.CHIP = _propTypes.default.shape({
  delimiter: _propTypes.default.element,
  id: _propTypes.default.string,
  value: _propTypes.default.string.isRequired
});
const CHIP_INPUT_LIST = exports.CHIP_INPUT_LIST = _propTypes.default.arrayOf(_propTypes.default.shape({
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.element,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  subLabel: _propTypes.default.string,
  ui: _propTypes.default.shape({})
}));
const CHIP_OPTIONS = exports.CHIP_OPTIONS = _propTypes.default.shape({
  background: _propTypes.default.oneOf(['amethyst', 'green', 'grey', 'java', 'none', 'orange', 'purple', 'sorbus']),
  boldValue: _propTypes.default.bool,
  borderColor: _propTypes.default.oneOf(['transparent', 'orange', 'green', 'purple', 'grey']),
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium']),
  font: _propTypes.default.oneOf(['primary', 'white', 'green', 'purple', 'orange']),
  borderRadius: _propTypes.default.oneOf(['primary', 'secondary'])
});
const CHIPS = exports.CHIPS = _propTypes.default.arrayOf(CHIP);
const POP_UP_CUSTOM_POSITION = exports.POP_UP_CUSTOM_POSITION = _propTypes.default.shape({
  element: _propTypes.default.shape({}),
  position: _propTypes.default.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  autoHorizontalPosition: _propTypes.default.bool,
  autoVerticalPosition: _propTypes.default.bool
});
const MODAL_SIZES = exports.MODAL_SIZES = _propTypes.default.oneOf([_constants.MODAL_SM, _constants.MODAL_MD, _constants.MODAL_LG, _constants.MODAL_MIN, _constants.MODAL_MAX]);
const CONFIRM_DIALOG_CANCEL_BUTTON = exports.CONFIRM_DIALOG_CANCEL_BUTTON = _propTypes.default.shape({
  handler: _propTypes.default.func,
  label: _propTypes.default.string.isRequired,
  variant: _propTypes.default.string.isRequired
});
const CONFIRM_DIALOG_MESSAGE = exports.CONFIRM_DIALOG_MESSAGE = _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]);
const CONFIRM_DIALOG_SUBMIT_BUTTON = exports.CONFIRM_DIALOG_SUBMIT_BUTTON = _propTypes.default.shape({
  handler: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  variant: _propTypes.default.string.isRequired
});
const WIZARD_STEPS_CONFIG = exports.WIZARD_STEPS_CONFIG = _propTypes.default.arrayOf(_propTypes.default.shape({
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  hidden: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  nextIsDisabled: _propTypes.default.bool
}));
const INPUT_LINK = exports.INPUT_LINK = _propTypes.default.shape({
  show: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  url: _propTypes.default.string
});
const SELECT_OPTION = exports.SELECT_OPTION = _propTypes.default.shape({
  disabled: _propTypes.default.bool,
  hidden: _propTypes.default.bool,
  icon: _propTypes.default.element,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  labelHtml: _propTypes.default.string,
  status: _propTypes.default.string,
  subLabel: _propTypes.default.string
});
const SELECT_OPTIONS = exports.SELECT_OPTIONS = _propTypes.default.arrayOf(SELECT_OPTION);
const INPUT_VALIDATION_RULES = exports.INPUT_VALIDATION_RULES = _propTypes.default.arrayOf(_propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  pattern: _propTypes.default.oneOfType([_propTypes.default.instanceOf(RegExp), _propTypes.default.func]).isRequired,
  isValid: _propTypes.default.bool
}));
const COMBOBOX_SUGGESTION_LIST = exports.COMBOBOX_SUGGESTION_LIST = _propTypes.default.arrayOf(_propTypes.default.shape({
  customDelimiter: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired
}));
const COMBOBOX_VALIDATION_RULES = exports.COMBOBOX_VALIDATION_RULES = _propTypes.default.arrayOf(_propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  isValid: _propTypes.default.bool
}));
const COMBOBOX_SELECT_OPTIONS = exports.COMBOBOX_SELECT_OPTIONS = _propTypes.default.arrayOf(_propTypes.default.shape({
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired
}));
const FORM_TABLE_EDITING_ITEM = exports.FORM_TABLE_EDITING_ITEM = _propTypes.default.shape({
  data: _propTypes.default.shape({}).isRequired,
  ui: _propTypes.default.shape({
    isNew: _propTypes.default.bool,
    index: _propTypes.default.number.isRequired,
    fieldsPath: _propTypes.default.string.isRequired
  }).isRequired,
  [_propTypes.default.string]: _propTypes.default.any
});
const SORT_PROPS = exports.SORT_PROPS = _propTypes.default.shape({
  selectedColumnName: _propTypes.default.string.isRequired,
  getSortingIcon: _propTypes.default.func.isRequired,
  sortTable: _propTypes.default.func.isRequired
});
const ALLOW_SORT_BY = exports.ALLOW_SORT_BY = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.string, _propTypes.default.number)]);
const DEFAULT_SORT_BY = exports.DEFAULT_SORT_BY = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]);
const EXCLUDE_SORT_BY = exports.EXCLUDE_SORT_BY = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.string, _propTypes.default.number)]);