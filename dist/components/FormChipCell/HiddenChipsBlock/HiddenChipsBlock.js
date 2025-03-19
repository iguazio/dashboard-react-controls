"use strict";

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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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

const HiddenChipsBlock = /*#__PURE__*/_react.default.forwardRef((_ref, _ref2) => {
  let {
    chipClassNames,
    chipOptions,
    chips,
    handleShowElements,
    textOverflowEllipsis = false
  } = _ref;
  let {
    hiddenChipsCounterRef,
    hiddenChipsPopUpRef
  } = _ref2;
  const {
    hiddenChipsBlockClassNames
  } = (0, _hooks.useHiddenChipsBlock)(hiddenChipsCounterRef, hiddenChipsPopUpRef);
  const chipLabelClassNames = (0, _classnames.default)('chip__label', textOverflowEllipsis && 'data-ellipsis');
  const chipValueClassNames = (0, _classnames.default)('chip__value', textOverflowEllipsis && 'data-ellipsis', chipOptions.boldValue && 'chip-value_bold');
  const generateChipData = chip => {
    return chip.isKeyOnly ? chip.key : `${chip.key}${chip.delimiter ? chip.delimiter : ':'} ${chip.value}`;
  };
  (0, _react.useEffect)(() => {
    if (chips.length === 0) {
      handleShowElements();
    }
  });
  return /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: hiddenChipsPopUpRef,
    className: hiddenChipsBlockClassNames,
    onClick: event => event.stopPropagation(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "chip-block-hidden__scrollable-container",
      children: chips?.map(element => {
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
                children: element.delimiter ?? ':'
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
HiddenChipsBlock.propTypes = {
  chipClassNames: _propTypes.default.string.isRequired,
  chipOptions: _types.CHIP_OPTIONS.isRequired,
  chips: _propTypes.default.array.isRequired,
  handleShowElements: _propTypes.default.func.isRequired,
  textOverflowEllipsis: _propTypes.default.bool
};
var _default = exports.default = HiddenChipsBlock;