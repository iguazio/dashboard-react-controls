"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFinalFormArrays = require("react-final-form-arrays");
var _lodash = require("lodash");
var _FormChip = _interopRequireDefault(require("./FormChip/FormChip"));
var _HiddenChipsBlock = _interopRequireDefault(require("./HiddenChipsBlock/HiddenChipsBlock"));
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _types = require("../../types");
var _common = require("../../utils/common.util");
var _formChipCell = require("./formChipCell.util");
var _add = require("../../images/add.svg");
var _jsxRuntime = require("react/jsx-runtime");
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

const FormChipCellView = /*#__PURE__*/_react.default.forwardRef((_ref, _ref2) => {
  let {
    chipOptions = {
      background: 'purple',
      boldValue: false,
      borderRadius: 'primary',
      borderColor: 'transparent',
      density: 'dense',
      font: 'purple'
    },
    chips,
    editConfig,
    formState,
    handleAddNewChip,
    handleEditChip,
    handleRemoveChip,
    handleShowElements,
    handleToEditMode,
    isEditable = false,
    name,
    setChipsSizes,
    setEditConfig,
    shortChips = false,
    showChips,
    showHiddenChips,
    validateFields,
    validationRules = {}
  } = _ref;
  let {
    chipsCellRef,
    chipsWrapperRef,
    hiddenChipsCounterRef,
    hiddenChipsPopUpRef
  } = _ref2;
  const buttonAddClassNames = (0, _classnames.default)('button-add', chipOptions.background && `button-add-background_${chipOptions.background}`, chipOptions.borderColor && `button-add-border_${chipOptions.borderColor}`, chipOptions.font && `button-add-font_${chipOptions.font}`, chipOptions.density && `button-add-density_${chipOptions.density}`);
  const wrapperClassNames = (0, _classnames.default)('chips-wrapper', isEditable && 'fixed-max-width');
  const chipClassNames = (0, _classnames.default)('chip', 'chip__content', isEditable && 'data-ellipsis', shortChips && 'chip_short', chips.hiddenChips && 'chip_hidden', chipOptions.density && `chip-density_${chipOptions.density}`, chipOptions.borderRadius && `chip-border_${chipOptions.borderRadius}`, chipOptions.background && `chip-background_${chipOptions.background}`, chipOptions.borderColor && `chip-border_${chipOptions.borderColor}`, chipOptions.font && `chip-font_${chipOptions.font}`, isEditable && 'editable', (showChips || isEditable) && 'chip_visible');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalFormArrays.FieldArray, {
    name: name,
    validate: validateFields,
    children: _ref3 => {
      let {
        fields,
        meta
      } = _ref3;
      let newValidationRules = {
        ...validationRules
      };
      if (!(0, _lodash.isEmpty)(validationRules) && validationRules.key.every(rule => rule.name !== _formChipCell.uniquenessError.name)) {
        newValidationRules = {
          ...validationRules,
          key: [...validationRules.key, _formChipCell.uniquenessError]
        };
      }
      return (isEditable || !(0, _common.isEveryObjectValueEmpty)(fields)) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "chips-cell",
        ref: chipsCellRef,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: wrapperClassNames,
          ref: chipsWrapperRef,
          children: [fields.map((contentItem, index) => {
            const chipData = fields.value[index];
            return index < chips.visibleChips?.length && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "chip-block",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
                hidden: editConfig.isEdit && !chipData.tooltip,
                template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
                  text: chipData.tooltip || /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    className: "chip__content",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "chip__content-item",
                      children: chipData.key
                    }), !chipData.isKeyOnly && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "chip__delimiter",
                        children: chipData.delimiter ? chipData.delimiter : ':'
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "chip__content-item",
                        children: chipData.value
                      })]
                    })]
                  })
                }),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormChip.default, {
                  chip: chipData,
                  chipIndex: index,
                  chipOptions: chipOptions,
                  editConfig: editConfig,
                  handleEditChip: (event, nameEvent, isOutsideClick) => handleEditChip(event, fields, nameEvent, isOutsideClick),
                  handleRemoveChip: (event, index) => handleRemoveChip(event, fields, index),
                  handleToEditMode: handleToEditMode,
                  isEditable: isEditable,
                  keyName: `${contentItem}.key`,
                  meta: meta,
                  ref: chipsCellRef,
                  setChipsSizes: setChipsSizes,
                  setEditConfig: setEditConfig,
                  validationRules: newValidationRules,
                  valueName: `${contentItem}.value`
                })
              }, chipData.id)
            }, chipData.id);
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "chip-block",
            children: [chips.hiddenChips.length > 0 && showHiddenChips && /*#__PURE__*/(0, _jsxRuntime.jsx)(_HiddenChipsBlock.default, {
              chipClassNames: chipClassNames,
              chipOptions: chipOptions,
              chips: chips.hiddenChips,
              handleShowElements: handleShowElements,
              ref: {
                hiddenChipsCounterRef,
                hiddenChipsPopUpRef
              },
              textOverflowEllipsis: true
            }), chips.hiddenChipsNumber && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              ref: hiddenChipsCounterRef,
              className: `${chipClassNames} chips_button`,
              onClick: handleShowElements,
              children: chips.hiddenChipsNumber
            })]
          }), isEditable && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            "data-testid": `${name}-add-chip`,
            className: buttonAddClassNames,
            onClick: e => handleAddNewChip(e, fields),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_add.ReactComponent, {})
          })]
        })
      });
    }
  });
});
FormChipCellView.propTypes = {
  chipOptions: _types.CHIP_OPTIONS,
  chips: _propTypes.default.object.isRequired,
  editConfig: _propTypes.default.object.isRequired,
  formState: _propTypes.default.object.isRequired,
  handleAddNewChip: _propTypes.default.func.isRequired,
  handleEditChip: _propTypes.default.func.isRequired,
  handleRemoveChip: _propTypes.default.func.isRequired,
  handleShowElements: _propTypes.default.func.isRequired,
  handleToEditMode: _propTypes.default.func.isRequired,
  isEditable: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  setChipsSizes: _propTypes.default.func.isRequired,
  setEditConfig: _propTypes.default.func.isRequired,
  shortChips: _propTypes.default.bool,
  showChips: _propTypes.default.bool.isRequired,
  showHiddenChips: _propTypes.default.bool.isRequired,
  validateFields: _propTypes.default.func.isRequired,
  validationRules: _propTypes.default.object
};
var _default = exports.default = FormChipCellView;