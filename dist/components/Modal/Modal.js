"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _reactTransitionGroup = require("react-transition-group");

var _classnames = _interopRequireDefault(require("classnames"));

var _Backdrop = _interopRequireDefault(require("../Backdrop/Backdrop"));

var _components = require("igz-controls/components");

var _constants = require("../../constants");

var _types = require("../../types");

var _close = require("igz-controls/images/close.svg");

require("./Modal.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSX_MODAL = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var actions = _ref.actions,
      children = _ref.children,
      className = _ref.className,
      onClose = _ref.onClose,
      size = _ref.size,
      show = _ref.show,
      title = _ref.title;
  var modalClassNames = (0, _classnames.default)('modal', className, size && "modal-".concat(size));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.default, {
      onClose: onClose,
      show: show
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
      in: show,
      timeout: 300,
      classNames: "modal-transition",
      unmountOnExit: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: modalClassNames,
        "data-testid": "modal",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "modal__header-button",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
            onClick: onClose,
            tooltipText: "Close",
            "data-testid": "pop-up-close-btn",
            ref: ref,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {})
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "modal__content",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal__header",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
              className: "modal__header-title",
              children: title
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal__body",
            children: children
          }), actions && actions.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal__footer",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "modal__footer-actions",
              children: actions.map(function (action, idx) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  children: action
                }, idx);
              })
            })
          })]
        })]
      })
    })]
  });
});

var Modal = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)(JSX_MODAL, _objectSpread(_objectSpread({}, props), {}, {
    ref: ref
  })), document.getElementById('overlay_container'));
});

Modal.defaultProps = {
  actions: [],
  show: false,
  size: _constants.MODAL_MD,
  title: ''
};
Modal.propTypes = {
  actions: _propTypes.default.array,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.object, _propTypes.default.node, _propTypes.default.string]).isRequired,
  onClose: _propTypes.default.func.isRequired,
  show: _propTypes.default.bool.isRequired,
  size: _types.MODAL_SIZES,
  title: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;