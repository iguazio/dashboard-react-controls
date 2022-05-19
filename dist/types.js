"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POP_UP_CUSTOM_POSITION = exports.BUTTON_VARIANTS = void 0;

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