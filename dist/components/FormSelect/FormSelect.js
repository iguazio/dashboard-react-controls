"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFinalForm = require("react-final-form");

var _ConfirmDialog = _interopRequireDefault(require("../ConfirmDialog/ConfirmDialog"));

var _PopUpDialog = _interopRequireDefault(require("../PopUpDialog/PopUpDialog"));

var _SelectOption = _interopRequireDefault(require("../../elements/SelectOption/SelectOption"));

var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));

var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));

var _types = require("../../types");

var _constants = require("../../constants");

var _dropdown = require("../../images/dropdown.svg");

require("./formSelect.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FormSelect = function FormSelect(_ref) {
  var _selectRef$current;

  var className = _ref.className,
      density = _ref.density,
      disabled = _ref.disabled,
      hideSelectedOption = _ref.hideSelectedOption,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      options = _ref.options,
      search = _ref.search,
      selectType = _ref.selectType,
      selectedItemAction = _ref.selectedItemAction,
      withoutBorder = _ref.withoutBorder,
      withSelectedIcon = _ref.withSelectedIcon;

  var _useField = (0, _reactFinalForm.useField)(name),
      input = _useField.input;

  var selectRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isConfirmDialogOpen = _useState2[0],
      setConfirmDialogOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      searchValue = _useState6[0],
      setSearchValue = _useState6[1];

  var _ref2 = (selectRef === null || selectRef === void 0 ? void 0 : (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.getBoundingClientRect()) || {},
      dropdownWidth = _ref2.width;

  var selectClassName = (0, _classnames.default)('form-field__select', "form-field__select-".concat(density), isOpen && 'form-field__select-active', withoutBorder && 'without-border', disabled && 'form-field__select-disabled');
  var selectLabelClassName = (0, _classnames.default)('form-field__label', disabled && 'form-field__label-disabled');
  var selectedOption = options.find(function (option) {
    return option.id === input.value;
  });
  (0, _react.useEffect)(function () {
    if (isOpen) {
      window.addEventListener('scroll', handleScroll, true);
    }

    window.addEventListener('click', clickHandler);
    return function () {
      window.removeEventListener('click', clickHandler);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  var clickHandler = function clickHandler(event) {
    if (selectRef.current !== event.target.closest('.form-field')) {
      setOpen(false);
    }
  };

  var handleScroll = function handleScroll(event) {
    if (!event.target.closest('.select__body')) {
      setOpen(false);
    }
  };

  var toggleOpen = function toggleOpen() {
    !disabled && setOpen(!isOpen);
  };

  var handleCloseSelectBody = (0, _react.useCallback)(function (event) {
    event.stopPropagation();

    if (!event.target.classList.contains('disabled') && !event.target.closest('.select__search')) {
      setOpen(false);
      setSearchValue('');
    }
  }, []);

  var handleSelectOptionClick = function handleSelectOptionClick(selectedOption, option) {
    if (selectedOption !== input.value) {
      option.handler && option.handler();
      input.onChange(selectedOption);
      onChange && onChange(selectedOption);
    }
  };

  var required = function required(value) {
    return value ? undefined : 'Required';
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    component: "select",
    validate: required,
    children: function children(_ref3) {
      var input = _ref3.input,
          meta = _ref3.meta;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        "data-testid": "select",
        ref: selectRef,
        className: "form-field ".concat(className),
        onClick: toggleOpen,
        children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: selectLabelClassName,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            "data-testid": "select-label",
            children: [label, meta.error && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "form-field__label-mandatory",
              children: " *"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          "data-testid": "select-header",
          className: "form-field__wrapper",
          children: [!hideSelectedOption && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            "data-testid": "selected-option",
            className: selectClassName,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "form-field__select-value",
              children: input.value && (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label)
            }), (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.subLabel) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              "data-testid": "select-subLabel",
              className: "sub-label",
              children: selectedOption.subLabel
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-field__icons",
            children: [input.value && selectedItemAction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: selectedItemAction.handler ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
                template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
                  text: selectedItemAction.tooltip
                }),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  onClick: function onClick(event) {
                    if (selectedItemAction.confirm) {
                      setConfirmDialogOpen(true);
                    } else {
                      selectedItemAction.handler(input.value);
                    }

                    event.stopPropagation();
                  },
                  children: selectedItemAction.icon
                })
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: selectedItemAction.icon
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_dropdown.ReactComponent, {
              className: "form-field__caret"
            })]
          })]
        }), isConfirmDialogOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConfirmDialog.default, {
          cancelButton: {
            handler: function handler() {
              setConfirmDialogOpen(false);
            },
            label: 'Cancel',
            variant: _constants.TERTIARY_BUTTON
          },
          closePopUp: function closePopUp() {
            setConfirmDialogOpen(false);
          },
          confirmButton: {
            handler: function handler() {
              selectedItemAction.handler(input.value);
              setConfirmDialogOpen(false);
            },
            label: selectedItemAction.confirm.btnConfirmLabel,
            variant: selectedItemAction.confirm.btnConfirmType
          },
          header: selectedItemAction.confirm.title,
          message: selectedItemAction.confirm.message
        }), isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopUpDialog.default, {
          className: "select__options-list",
          customPosition: {
            element: selectRef,
            position: 'bottom-right'
          },
          style: {
            width: "".concat(dropdownWidth, "px")
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            "data-testid": "select-body",
            className: "select__body",
            onClick: handleCloseSelectBody,
            children: [search && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "select__search",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "text",
                placeholder: "Search...",
                value: searchValue,
                onChange: function onChange(event) {
                  return setSearchValue(event.target.value);
                }
              })
            }), options.filter(function (option) {
              return !search || option.label.toLowerCase().includes(searchValue.toLowerCase());
            }).map(function (option) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectOption.default, {
                item: option,
                onClick: function onClick(selectedOption) {
                  handleSelectOptionClick(selectedOption, option);
                },
                selectType: selectType,
                selectedId: input.value,
                withSelectedIcon: withSelectedIcon
              }, option.id);
            })]
          })
        })]
      });
    }
  });
};

FormSelect.defaultProps = {
  className: '',
  density: 'normal',
  disabled: false,
  hideSelectedOption: false,
  label: '',
  labelAtTop: false,
  onClick: null,
  search: false,
  selectType: '',
  withoutBorder: false,
  withSelectedIcon: false
};
FormSelect.propTypes = {
  className: _propTypes.default.string,
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: _propTypes.default.bool,
  hideSelectedOption: _propTypes.default.bool,
  label: _propTypes.default.string,
  labelAtTop: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  options: _types.SELECT_OPTIONS.isRequired,
  search: _propTypes.default.bool,
  selectType: _propTypes.default.string,
  withoutBorder: _propTypes.default.bool,
  withSelectedIcon: _propTypes.default.bool
};

var _default = /*#__PURE__*/_react.default.memo(FormSelect);

exports.default = _default;