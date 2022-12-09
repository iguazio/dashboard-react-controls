"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.required = exports.getValidationRules = exports.checkPatternsValidity = void 0;

var _lodash = _interopRequireWildcard(require("lodash"));

var _constants = require("../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

////// PRIVATE METHODS ///////

/**
 * Converts characters string to readable format
 * Note: converts Hyphens to En Dashes, replaces one space with comma and space,
 *       replaces letter `s` with `spaces` word
 * @param {string} chars - characters to convert
 * @returns {string} - converted string
 * @example
 * convertToLabel('a-z A-Z - _ *');
 * // => 'a–z, A–Z, –, _, *'
 */
var convertToLabel = function convertToLabel(chars) {
  return chars.replace(/-/g, '–').replace(/\s/g, ', ').replace(/\bs\b/);
};
/**
 * Converts characters string to valid RegExp string that will be placed into RegExp pattern
 * @param {string} chars - characters to convert
 * @returns {string} - converted string
 * @example
 * convertToPattern('a-z A-Z - _ *');
 * // => 'a-zA-Z\-\_\*'
 */


var convertToPattern = function convertToPattern(chars) {
  return chars.split(' ').map(function (patternItem) {
    return patternItem.length === 1 ? '\\' + patternItem : patternItem;
  }).join('');
};
/**
 * Checks whether there is at least one failed validation rule.
 * @returns {boolean} `true` in case there is at least one failed validation rule, or `false` otherwise.
 */


var hasInvalidRule = function hasInvalidRule(newRules) {
  return _lodash.default.some(newRules, ['isValid', false]);
}; ////// PUBLIC METHODS ///////

/**
 * validate required field value
 * @param {string} validationMsg Custom validationMsg. Defualt to "Required"
 * @returns {function}  Function that accepts a value and return an array [isFieldValid, validationMsg]
 */


var required = function required() {
  var validationMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Required';
  return function (value) {
    var isValid = value.trim() !== '' && typeof value === 'string';
    return [isValid, validationMsg];
  };
};
/**
 * Checks whether there is at least one failed validation rule.
 * @function checkPatternsValidity
 * @param {Array} validationRules Array of Validation Rule Objects {name: "", lable: "", pattren: [Function || Regex]}
 * @param {string} value Field value to check validity
 * @param {boolean} required Specified if the value should be validated
 * @returns {Array} [validationRules, isFieldValid] New validationRules With `isValid` property, `true` in case there is at least one failed validation rule, or `false` otherwise.
 */


exports.required = required;

var checkPatternsValidity = function checkPatternsValidity(validationRules) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var newRules = !required && (0, _lodash.isEmpty)(value) ? validationRules : validationRules.map(function (rule) {
    return _objectSpread(_objectSpread({}, rule), {}, {
      isValid: _lodash.default.isFunction(rule.pattern) ? rule.pattern(value) :
      /* else, it is a RegExp */
      rule.pattern.test(value)
    });
  });
  return [newRules, !hasInvalidRule(newRules)];
};

exports.checkPatternsValidity = checkPatternsValidity;
var generateRule = {
  beginWith: function beginWith(chars) {
    return {
      name: 'begin',
      label: _constants.validation.BEGIN_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^[' + convertToPattern(chars) + ']')
    };
  },
  beginNotWith: function beginNotWith(chars) {
    return {
      name: 'beginNot',
      label: _constants.validation.BEGIN_NOT_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^[^' + convertToPattern(chars) + ']')
    };
  },
  endWith: function endWith(chars) {
    return {
      name: 'end',
      label: _constants.validation.END_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('[' + convertToPattern(chars) + ']$')
    };
  },
  endNotWith: function endNotWith(chars) {
    return {
      name: 'endNot',
      label: _constants.validation.END_NOT_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('[^' + convertToPattern(chars) + ']$')
    };
  },
  beginEndWith: function beginEndWith(chars) {
    var convertedPattern = convertToPattern(chars);
    return {
      name: 'beginEnd',
      label: _constants.validation.BEGIN_END_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^([' + convertedPattern + '].*)?[' + convertedPattern + ']$')
    };
  },
  beginEndNotWith: function beginEndNotWith(chars) {
    var convertedPattern = convertToPattern(chars);
    return {
      name: 'beginEndNot',
      label: _constants.validation.BEGIN_END_NOT_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^([^' + convertedPattern + '].*)?[^' + convertedPattern + ']$')
    };
  },
  onlyAtTheBeginning: function onlyAtTheBeginning(chars) {
    var convertedPattern = convertToPattern(chars);
    return {
      name: 'onlyAtTheBeginning',
      label: _constants.validation.ONLY_AT_THE_BEGINNING + ': ' + convertToLabel(chars),
      pattern: new RegExp('^([' + convertedPattern + '])?[^' + convertedPattern + ']+$')
    };
  },
  validCharacters: function validCharacters(chars) {
    return {
      name: 'validCharacters',
      label: _constants.validation.VALID_CHARACTERS + ': ' + convertToLabel(chars),
      pattern: new RegExp('^[' + convertToPattern(chars) + ']+$')
    };
  },
  noConsecutiveCharacters: function noConsecutiveCharacters(chars) {
    var convertedPattern = chars.split(' ').map(function (charPair) {
      var charsPairArray = charPair.split('');
      return "(?!.*\\".concat(charsPairArray[0], "\\").concat(charsPairArray[1], ")");
    }).join('');
    return {
      name: 'noConsecutiveCharacters',
      label: _constants.validation.NO_CONSECUTIVE_CHARACTER + ': ' + convertToLabel(chars),
      pattern: new RegExp('^' + convertedPattern)
    };
  },
  maxLengthBetweenDelimiters: function maxLengthBetweenDelimiters(delimiter, maxLength, delimiterDescription) {
    return {
      name: 'labelsLength',
      label: "Max length between two ".concat(_lodash.default.defaultTo(delimiterDescription, delimiter), ": ").concat(maxLength),
      pattern: function pattern(value) {
        return value.split(delimiter).every(function (item) {
          return item.length >= 1 && item.length <= maxLength;
        });
      }
    };
  },
  mustNotBe: function mustNotBe(words) {
    var wordsArray = words.split(' ');
    return {
      name: 'mustNotBe',
      label: _constants.validation.MUST_NOT_BE + ': ' + convertToLabel(words),
      pattern: function pattern(value) {
        return !_lodash.default.includes(wordsArray, value);
      }
    };
  },
  length: function length(options) {
    var min = Number.isSafeInteger(options.min) ? options.min : 0;
    var max = Number.isSafeInteger(options.max) ? options.max : '';

    if (min || max) {
      var label = 'Length – ' + (min ? 'min: ' + options.min + '\xa0\xa0' : '') + (max ? 'max: ' + options.max : '');
      return {
        name: 'length',
        label: label,
        pattern: new RegExp('^[\\S\\s]{' + min + ',' + max + '}$')
      };
    }
  },
  required: function required() {
    return {
      name: 'required',
      label: _constants.validation.REQUIRED,
      pattern: new RegExp('\\S')
    };
  }
}; //const commonRules = {
// email: [
//   generateRule.beginEndNotWith('@ .'),
//   {
//     name: 'exactlyOne',
//     label: ValidationConstants.MUST_CONTAIN_EXACTLY_ONE + ': @',
//     pattern: /^[^@]+@[^@]+$/
//   },
//   {
//     name: 'dotAfterAt',
//     label: ValidationConstants.MUST_HAVE_DOT_AFTER_AT,
//     pattern: /@.+\..+$/
//   }
// ]
//}

var validationRules = {
  artifact: {
    name: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
      max: 253
    }), generateRule.required()]
  },
  feature: {
    sets: {
      tag: [generateRule.validCharacters('a-z A-Z 0-9 - _'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
        max: 56
      })]
    },
    vector: {
      name: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
        max: 56
      }), generateRule.required()]
    }
  },
  common: {
    name: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
      max: 63
    }), generateRule.required()],
    tag: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
      max: 56
    })],
    combobox: [generateRule.required()]
  },
  project: {
    name: [generateRule.validCharacters('a-z 0-9 -'), generateRule.beginWith('a-z'), generateRule.endWith('a-z 0-9'), generateRule.length({
      max: 63
    }), generateRule.required()]
  },
  environmentVariables: {
    secretName: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.noConsecutiveCharacters('.., .–, –.'), generateRule.maxLengthBetweenDelimiters(/[\.\-\_]/, 63, 'periods'), generateRule.length({
      max: 253
    }), generateRule.required()],
    secretKey: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginNotWith('.'), generateRule.length({
      max: 253
    })]
  }
};
/**
 * Returns the list of validation rules for `type`, optionally appending provided additional rules.
 * @function getValidationRules
 * @param {string} type - The property path to the list of validation rules.
 * @param {Array.<Object>} [additionalRules] - Additional rules to append.
 * @returns {Array.<Object>} the rule list of type `type` with `additionalRules` appended to it if provided.
 */

var getValidationRules = function getValidationRules(type, additionalRules) {
  return _lodash.default.chain(validationRules).get(type).defaultTo([]).cloneDeep().concat(_lodash.default.defaultTo(additionalRules, [])).value();
};

exports.getValidationRules = getValidationRules;