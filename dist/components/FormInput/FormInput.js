"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _reactFinalForm = require("react-final-form");
var _InputNumberButtons = _interopRequireDefault(require("./InputNumberButtons/InputNumberButtons"));
var _OptionsMenu = _interopRequireDefault(require("../../elements/OptionsMenu/OptionsMenu"));
var _ValidationTemplate = _interopRequireDefault(require("../../elements/ValidationTemplate/ValidationTemplate"));
var _components = require("../../components");
var _types = require("../../types");
var _validation = require("../../utils/validation.util");
var _hooks = require("../../hooks");
var _invalid = require("../../images/invalid.svg");
var _popout = require("../../images/popout.svg");
var _warning = require("../../images/warning.svg");
require("./formInput.scss");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["async", "className", "density", "disabled", "focused", "iconClass", "iconClick", "inputIcon", "invalidText", "label", "link", "name", "onBlur", "onChange", "pattern", "required", "suggestionList", "tip", "validationRules", "validator", "withoutBorder"];
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref2;
  var async = _ref.async,
    className = _ref.className,
    density = _ref.density,
    disabled = _ref.disabled,
    focused = _ref.focused,
    iconClass = _ref.iconClass,
    iconClick = _ref.iconClick,
    inputIcon = _ref.inputIcon,
    invalidText = _ref.invalidText,
    label = _ref.label,
    link = _ref.link,
    name = _ref.name,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    pattern = _ref.pattern,
    required = _ref.required,
    suggestionList = _ref.suggestionList,
    tip = _ref.tip,
    rules = _ref.validationRules,
    validator = _ref.validator,
    withoutBorder = _ref.withoutBorder,
    inputProps = _objectWithoutProperties(_ref, _excluded);
  var _useField = (0, _reactFinalForm.useField)(name),
    input = _useField.input,
    meta = _useField.meta;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isInvalid = _useState2[0],
    setIsInvalid = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocused = _useState4[0],
    setIsFocused = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    typedValue = _useState6[0],
    setTypedValue = _useState6[1];
  var _useState7 = (0, _react.useState)(RegExp(pattern)),
    _useState8 = _slicedToArray(_useState7, 1),
    validationPattern = _useState8[0];
  var _useState9 = (0, _react.useState)(rules),
    _useState10 = _slicedToArray(_useState9, 2),
    validationRules = _useState10[0],
    setValidationRules = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showValidationRules = _useState12[0],
    setShowValidationRules = _useState12[1];
  var wrapperRef = (0, _react.useRef)();
  (_ref2 = ref) !== null && _ref2 !== void 0 ? _ref2 : ref = wrapperRef;
  var inputRef = (0, _react.useRef)();
  var errorsRef = (0, _react.useRef)();
  (0, _hooks.useDetectOutsideClick)(ref, function () {
    return setShowValidationRules(false);
  });
  var debounceAsync = (0, _hooks.useDebounce)();
  var formFieldClassNames = (0, _classnames.default)('form-field-input', className);
  var inputWrapperClassNames = (0, _classnames.default)('form-field__wrapper', "form-field__wrapper-".concat(density), disabled && 'form-field__wrapper-disabled', isInvalid && 'form-field__wrapper-invalid', withoutBorder && 'without-border');
  var labelClassNames = (0, _classnames.default)('form-field__label', disabled && 'form-field__label-disabled');
  (0, _react.useEffect)(function () {
    setTypedValue(String(input.value)); // convert from number to string
  }, [input.value]);
  (0, _react.useEffect)(function () {
    setIsInvalid(errorsRef.current && meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched));
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
  (0, _react.useEffect)(function () {
    if (!errorsRef.current) {
      if (meta.valid && showValidationRules) {
        setShowValidationRules(false);
      }
    }
  }, [errorsRef.current, meta.valid, showValidationRules]);
  (0, _react.useEffect)(function () {
    if (showValidationRules) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return function () {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [showValidationRules]);
  (0, _react.useEffect)(function () {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);
  (0, _react.useEffect)(function () {
    setValidationRules(function () {
      return rules.map(function (rule) {
        return _objectSpread(_objectSpread({}, rule), {}, {
          isValid: !errorsRef.current || !Array.isArray(errorsRef.current) ? true : !errorsRef.current.some(function (err) {
            return err.name === rule.name;
          })
        });
      });
    });
  }, [rules]);
  var getValidationRules = function getValidationRules() {
    return validationRules.map(function (_ref3) {
      var _ref3$isValid = _ref3.isValid,
        isValid = _ref3$isValid === void 0 ? false : _ref3$isValid,
        label = _ref3.label,
        name = _ref3.name;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationTemplate.default, {
        valid: isValid,
        validationMessage: label
      }, name);
    });
  };
  var isValueEmptyAndValid = function isValueEmptyAndValid(value) {
    return !value && !required || disabled;
  };
  var handleInputBlur = function handleInputBlur(event) {
    var _event$relatedTarget;
    input.onBlur && input.onBlur(event);
    if (!event.relatedTarget || !((_event$relatedTarget = event.relatedTarget) !== null && _event$relatedTarget !== void 0 && _event$relatedTarget.closest('.form-field__suggestion-list'))) {
      setIsFocused(false);
      onBlur && onBlur(event);
    }
  };
  var handleInputFocus = function handleInputFocus(event) {
    input.onFocus && input.onFocus(event);
    setIsFocused(true);
  };
  var handleScroll = function handleScroll(event) {
    if (inputRef.current && inputRef.current.contains(event.target)) return;
    if (!event.target.closest('.options-menu') && !event.target.classList.contains('form-field-input')) {
      setShowValidationRules(false);
    }
  };
  var handleSuggestionClick = function handleSuggestionClick(item) {
    input.onChange && input.onChange(item);
    setIsFocused(false);
    onBlur();
  };
  var toggleValidationRulesMenu = function toggleValidationRulesMenu() {
    inputRef.current.focus();
    setShowValidationRules(function (state) {
      return !state;
    });
  };
  var validateField = function validateField(value, allValues) {
    var valueToValidate = (0, _lodash.isNil)(value) ? '' : String(value);
    if (isValueEmptyAndValid(valueToValidate)) return;
    var validationError = null;
    if (required && valueToValidate.trim().length === 0) {
      validationError = {
        name: 'required',
        label: 'This field is required'
      };
    } else if (!(0, _lodash.isEmpty)(rules) && !async) {
      var _checkPatternsValidit = (0, _validation.checkPatternsValidity)(rules, valueToValidate),
        _checkPatternsValidit2 = _slicedToArray(_checkPatternsValidit, 2),
        newRules = _checkPatternsValidit2[0],
        isValidField = _checkPatternsValidit2[1];
      var invalidRules = newRules.filter(function (rule) {
        return !rule.isValid;
      });
      if (!isValidField) {
        validationError = invalidRules.map(function (rule) {
          return {
            name: rule.name,
            label: rule.label
          };
        });
      }
    }
    if ((0, _lodash.isEmpty)(validationError)) {
      if (inputProps.type === 'number') {
        if (inputProps.max && +valueToValidate > +inputProps.max) {
          validationError = {
            name: 'maxValue',
            label: "The maximum value should be ".concat(inputProps.max)
          };
        }
        if (inputProps.min && +valueToValidate < +inputProps.min) {
          validationError = {
            name: 'minValue',
            label: "The minimum value should be ".concat(inputProps.min)
          };
        }
      }
      if (pattern && !validationPattern.test(valueToValidate)) {
        validationError = {
          name: 'pattern',
          label: invalidText
        };
      } else if (valueToValidate.startsWith(' ')) {
        validationError = {
          name: 'empty',
          label: invalidText
        };
      }
    }
    if (!validationError && validator) {
      validationError = validator(value, allValues);
    }
    errorsRef.current = validationError;
    return validationError;
  };
  var validateFieldAsync = debounceAsync( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value, allValues) {
      var valueToValidate, validationError, _yield$checkPatternsV, _yield$checkPatternsV2, newRules, isValidField, invalidRules;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            valueToValidate = (0, _lodash.isNil)(value) ? '' : String(value);
            if (!isValueEmptyAndValid(valueToValidate)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            validationError = validateField(valueToValidate, allValues);
            if ((0, _lodash.isEmpty)(rules)) {
              _context.next = 13;
              break;
            }
            _context.next = 7;
            return (0, _validation.checkPatternsValidityAsync)(rules, valueToValidate);
          case 7:
            _yield$checkPatternsV = _context.sent;
            _yield$checkPatternsV2 = _slicedToArray(_yield$checkPatternsV, 2);
            newRules = _yield$checkPatternsV2[0];
            isValidField = _yield$checkPatternsV2[1];
            invalidRules = newRules.filter(function (rule) {
              return !rule.isValid;
            });
            if (!isValidField) {
              validationError = invalidRules.map(function (rule) {
                return {
                  name: rule.name,
                  label: rule.label
                };
              });
            }
          case 13:
            errorsRef.current = validationError;
            return _context.abrupt("return", validationError);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }(), 400);
  var parseField = function parseField(val) {
    return inputProps.type === 'number' && val ? parseFloat(val) || val : val;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    validate: async ? validateFieldAsync : validateField,
    name: name,
    parse: parseField,
    children: function children(_ref5) {
      var _inputProps$autocompl, _errorsRef$current$la, _errorsRef$current;
      var input = _ref5.input;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: ref,
        className: formFieldClassNames,
        children: [label && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: labelClassNames,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            "data-testid": "label",
            htmlFor: input.name,
            children: [label, (required || validationRules.find(function (rule) {
              return rule.name === 'required';
            })) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "form-field__label-mandatory",
              children: " *"
            })]
          }), link && link.show && typedValue.trim() && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-field__label-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
              template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
                text: link.url || typedValue
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: link.url || typedValue,
                onClick: function onClick(event) {
                  return event.stopPropagation();
                },
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_popout.ReactComponent, {})
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: inputWrapperClassNames,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-field__control",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({
              "data-testid": "input",
              id: input.name,
              ref: inputRef,
              required: isInvalid || required
            }, _objectSpread(_objectSpread({
              disabled: disabled,
              pattern: pattern
            }, inputProps), input)), {}, {
              autoComplete: (_inputProps$autocompl = inputProps.autocomplete) !== null && _inputProps$autocompl !== void 0 ? _inputProps$autocompl : 'off',
              onBlur: handleInputBlur,
              onFocus: handleInputFocus
            }))
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-field__icons",
            children: [isInvalid && !Array.isArray(errorsRef.current) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
              className: "form-field__warning",
              template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
                text: (_errorsRef$current$la = (_errorsRef$current = errorsRef.current) === null || _errorsRef$current === void 0 ? void 0 : _errorsRef$current.label) !== null && _errorsRef$current$la !== void 0 ? _errorsRef$current$la : invalidText,
                warning: true
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_invalid.ReactComponent, {})
            }), isInvalid && Array.isArray(errorsRef.current) && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "form-field__warning",
              onClick: toggleValidationRulesMenu,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_warning.ReactComponent, {})
            }), tip && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tip, {
              text: tip,
              className: "form-field__tip"
            }), inputIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              "data-testid": "input-icon",
              className: iconClass,
              onClick: iconClick,
              children: inputIcon
            })]
          }), inputProps.type === 'number' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputNumberButtons.default, _objectSpread({}, _objectSpread(_objectSpread(_objectSpread({}, inputProps), {}, {
            step: +inputProps.step
          }, input), {}, {
            disabled: disabled
          })))]
        }), (suggestionList === null || suggestionList === void 0 ? void 0 : suggestionList.length) > 0 && isFocused && /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          className: "form-field__suggestion-list",
          children: suggestionList.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              className: "suggestion-item",
              onClick: function onClick() {
                handleSuggestionClick(item);
              },
              tabIndex: index,
              dangerouslySetInnerHTML: {
                __html: item.replace(new RegExp(typedValue, 'gi'), function (match) {
                  return match ? "<b>".concat(match, "</b>") : match;
                })
              }
            }, "".concat(item).concat(index));
          })
        }), !(0, _lodash.isEmpty)(validationRules) && isInvalid && Array.isArray(errorsRef.current) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsMenu.default, {
          show: showValidationRules,
          ref: ref,
          children: getValidationRules()
        })]
      });
    }
  });
});
FormInput.defaultProps = {
  async: false,
  className: '',
  density: 'normal',
  disabled: false,
  focused: false,
  iconClass: '',
  iconClick: function iconClick() {},
  inputIcon: null,
  invalidText: 'This field is invalid',
  label: '',
  link: {
    show: '',
    value: ''
  },
  min: null,
  max: null,
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  pattern: null,
  placeholder: '',
  required: false,
  step: '1',
  suggestionList: [],
  tip: '',
  type: 'text',
  validationRules: [],
  validator: function validator() {},
  value: '',
  withoutBorder: false
};
FormInput.propTypes = {
  async: _propTypes.default.bool,
  className: _propTypes.default.string,
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: _propTypes.default.bool,
  focused: _propTypes.default.bool,
  iconClass: _propTypes.default.string,
  iconClick: _propTypes.default.func,
  inputIcon: _propTypes.default.element,
  invalidText: _propTypes.default.string,
  label: _propTypes.default.string,
  link: _types.INPUT_LINK,
  min: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  max: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  name: _propTypes.default.string.isRequired,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  pattern: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  step: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  suggestionList: _propTypes.default.arrayOf(_propTypes.default.string),
  tip: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  type: _propTypes.default.string,
  validationRules: _types.INPUT_VALIDATION_RULES,
  validator: _propTypes.default.func,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  withoutBorder: _propTypes.default.bool
};
var _default = /*#__PURE__*/_react.default.memo(FormInput);
exports.default = _default;