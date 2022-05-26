"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WIZARD_STEPS_CONFIG = exports.POP_UP_CUSTOM_POSITION = exports.MODAL_SIZES = exports.CONFIRM_DIALOG_SUBMIT_BUTTON = exports.CONFIRM_DIALOG_CANCEL_BUTTON = exports.BUTTON_VARIANTS = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUTTON_VARIANTS = _propTypes.default.oneOf([_constants.PRIMARY_BUTTON, _constants.SECONDARY_BUTTON, _constants.TERTIARY_BUTTON, _constants.DANGER_BUTTON, _constants.LABEL_BUTTON]);

exports.BUTTON_VARIANTS = BUTTON_VARIANTS;

var POP_UP_CUSTOM_POSITION = _propTypes.default.shape({
  element: _propTypes.default.shape({}),
  position: _propTypes.default.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
});

exports.POP_UP_CUSTOM_POSITION = POP_UP_CUSTOM_POSITION;

var MODAL_SIZES = _propTypes.default.oneOf([_constants.MODAL_SM, _constants.MODAL_MD, _constants.MODAL_LG]);

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