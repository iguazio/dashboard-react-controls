"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _NewChipForm = _interopRequireDefault(require("../NewChipForm/NewChipForm"));
var _types = require("../../../types");
require("./formChip.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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

const FormChip = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    chip,
    chipIndex,
    chipOptions = {
      background: 'purple',
      boldValue: false,
      borderRadius: 'primary',
      borderColor: 'transparent',
      density: 'dense',
      font: 'purple'
    },
    editConfig,
    handleEditChip,
    handleRemoveChip,
    handleToEditMode,
    isEditable = false,
    keyName = '',
    meta,
    setChipsSizes,
    setEditConfig,
    validationRules = {},
    valueName = ''
  } = _ref;
  const chipRef = _react.default.useRef();
  (0, _react.useEffect)(() => {
    queueMicrotask(() => {
      if (chipRef.current && setChipsSizes) {
        setChipsSizes(state => ({
          ...state,
          [chipIndex]: chipRef.current.getBoundingClientRect().width
        }));
      }
    });
  }, [chipIndex, setChipsSizes]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    onClick: event => handleToEditMode(event, chipIndex, keyName),
    ref: chipRef,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_NewChipForm.default, {
      chip: chip,
      chipIndex: chipIndex,
      chipOptions: chipOptions,
      className: "input-label-key",
      editConfig: editConfig,
      handleRemoveChip: handleRemoveChip,
      isEditable: isEditable,
      keyName: keyName,
      meta: meta,
      onChange: handleEditChip,
      ref: ref,
      setEditConfig: setEditConfig,
      validationRules: validationRules,
      valueName: valueName
    })
  });
});
FormChip.propTypes = {
  chip: _propTypes.default.object.isRequired,
  chipIndex: _propTypes.default.number.isRequired,
  chipOptions: _types.CHIP_OPTIONS,
  editConfig: _propTypes.default.object.isRequired,
  handleEditChip: _propTypes.default.func.isRequired,
  handleRemoveChip: _propTypes.default.func.isRequired,
  handleToEditMode: _propTypes.default.func.isRequired,
  isEditable: _propTypes.default.bool,
  keyName: _propTypes.default.string,
  meta: _propTypes.default.object.isRequired,
  setChipsSizes: _propTypes.default.func.isRequired,
  setEditConfig: _propTypes.default.func.isRequired,
  validationRules: _propTypes.default.object,
  valueName: _propTypes.default.string
};
var _default = exports.default = FormChip;