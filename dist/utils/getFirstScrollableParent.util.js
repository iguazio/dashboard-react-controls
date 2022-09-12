"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstScrollableParentUtil = void 0;
var regex = /(auto|scroll|hidden)/;

var style = function style(node, prop) {
  return getComputedStyle(node, null).getPropertyValue(prop);
};

var scroll = function scroll(node) {
  return regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
};

var getFirstScrollableParentUtil = function getFirstScrollableParentUtil(node) {
  return !node || node === document.body ? document.body : scroll(node) ? node : getFirstScrollableParentUtil(node.parentNode);
};

exports.getFirstScrollableParentUtil = getFirstScrollableParentUtil;