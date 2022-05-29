"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPopUp = exports.isEveryObjectValueEmpty = void 0;

var _reactModalPromise = require("react-modal-promise");

var openPopUp = function openPopUp(element, props) {
  return (0, _reactModalPromise.create)(element)(props);
};

exports.openPopUp = openPopUp;

var isEveryObjectValueEmpty = function isEveryObjectValueEmpty(obj) {
  return Object.values(obj).every(function (item) {
    return !item || item.length === 0;
  });
};

exports.isEveryObjectValueEmpty = isEveryObjectValueEmpty;