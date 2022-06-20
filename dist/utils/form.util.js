"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFieldState = void 0;

var _lodash = require("lodash");

var setFieldState = function setFieldState(args, state) {
  var fieldName = args[0];
  var states = args[1];
  var field = state.fields[fieldName];

  if (field) {
    for (var stateName in states) {
      (0, _lodash.set)(field, stateName, states[stateName]);
    }
  }
};

exports.setFieldState = setFieldState;