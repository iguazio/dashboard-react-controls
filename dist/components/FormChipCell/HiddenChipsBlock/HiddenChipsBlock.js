"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Tooltip = _interopRequireDefault(require("../../Tooltip/Tooltip"));
var _TextTooltipTemplate = _interopRequireDefault(require("../../TooltipTemplate/TextTooltipTemplate"));
var _types = require("../../../types");
var _hooks = require("../../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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

var HiddenChipsBlock = /*#__PURE__*/_react.default.forwardRef(function (_ref, _ref2) {
  var chipClassNames = _ref.chipClassNames,
    chipOptions = _ref.chipOptions,
    chips = _ref.chips,
    handleShowElements = _ref.handleShowElements,
    textOverflowEllipsis = _ref.textOverflowEllipsis;
  var hiddenChipsCounterRef = _ref2.hiddenChipsCounterRef,
    hiddenChipsPopUpRef = _ref2.hiddenChipsPopUpRef;
  var _useHiddenChipsBlock = (0, _hooks.useHiddenChipsBlock)(hiddenChipsCounterRef, hiddenChipsPopUpRef),
    hiddenChipsBlockClassNames = _useHiddenChipsBlock.hiddenChipsBlockClassNames;
  var chipLabelClassNames = (0, _classnames.default)('chip__label', textOverflowEllipsis && 'data-ellipsis');
  var chipValueClassNames = (0, _classnames.default)('chip__value', textOverflowEllipsis && 'data-ellipsis', chipOptions.boldValue && 'chip-value_bold');
  var generateChipData = function generateChipData(chip) {
    return chip.isKeyOnly ? chip.key : "".concat(chip.key).concat(chip.delimiter ? chip.delimiter : ':', " ").concat(chip.value);
  };
  (0, _react.useEffect)(function () {
    if (chips.length === 0) {
      handleShowElements();
    }
  });
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: hiddenChipsPopUpRef,
    className: hiddenChipsBlockClassNames,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "chip-block-hidden__scrollable-container",
      children: chips === null || chips === void 0 ? void 0 : chips.map(function (element) {
        var _element$delimiter;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
          template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
            text: element.delimiter ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "chip__content",
              children: [element.key, !element.isKeyOnly && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "chip__delimiter",
                  children: element.delimiter
                }), element.value]
              })]
            }) : generateChipData(element)
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: chipClassNames,
            children: [element.key && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: chipLabelClassNames,
              children: element.key
            }), element.value && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "chip__delimiter",
                children: (_element$delimiter = element.delimiter) !== null && _element$delimiter !== void 0 ? _element$delimiter : ':'
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: chipValueClassNames,
                children: element.value
              })]
            })]
          })
        }, element.id);
      })
    })
  }), document.getElementById('overlay_container'));
});
HiddenChipsBlock.defaultProps = {
  textOverflowEllipsis: false
};
HiddenChipsBlock.propTypes = {
  chipClassNames: _propTypes.default.string.isRequired,
  chipOptions: _types.CHIP_OPTIONS.isRequired,
  chips: _propTypes.default.array.isRequired,
  handleShowElements: _propTypes.default.func.isRequired,
  textOverflowEllipsis: _propTypes.default.bool
};
var _default = HiddenChipsBlock;
exports.default = _default;