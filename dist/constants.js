"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = exports.TERTIARY_BUTTON = exports.SECONDARY_BUTTON = exports.PRIMARY_BUTTON = exports.MODAL_SM = exports.MODAL_MD = exports.MODAL_LG = exports.LABEL_BUTTON = exports.INTERNAL_SERVER_ERROR_STATUS_CODE = exports.FORBIDDEN_ERROR_STATUS_CODE = exports.DANGER_BUTTON = exports.CONFLICT_ERROR_STATUS_CODE = void 0;

/*=========== BUTTONS =============*/
var PRIMARY_BUTTON = 'primary';
exports.PRIMARY_BUTTON = PRIMARY_BUTTON;
var SECONDARY_BUTTON = 'secondary';
exports.SECONDARY_BUTTON = SECONDARY_BUTTON;
var TERTIARY_BUTTON = 'tertiary';
exports.TERTIARY_BUTTON = TERTIARY_BUTTON;
var DANGER_BUTTON = 'danger';
exports.DANGER_BUTTON = DANGER_BUTTON;
var LABEL_BUTTON = 'label';
/*=========== VALITATION =============*/

exports.LABEL_BUTTON = LABEL_BUTTON;
var validation = {
  BEGIN_END_NOT_WITH: 'Must not begin and end with',
  BEGIN_END_WITH: 'Must begin and end with',
  BEGIN_NOT_WITH: 'Must not begin with',
  BEGIN_WITH: 'Must begin with',
  END_NOT_WITH: 'Must not end with',
  END_WITH: 'Must end with',
  MUST_CONTAIN_EXACTLY_ONE: 'Must contain exactly one',
  MUST_HAVE_DOT_AFTER_AT: 'Must have at least one . after @',
  MUST_NOT_BE: 'Must not be',
  NO_CONSECUTIVE_CHARACTER: 'No consecutive characters',
  ONLY_AT_THE_BEGINNING: 'Only at the beginning',
  REQUIRED: 'This field is required',
  VALID_CHARACTERS: 'Valid characters'
};
/*=========== STATUS CODES =============*/

exports.validation = validation;
var INTERNAL_SERVER_ERROR_STATUS_CODE = 500;
exports.INTERNAL_SERVER_ERROR_STATUS_CODE = INTERNAL_SERVER_ERROR_STATUS_CODE;
var CONFLICT_ERROR_STATUS_CODE = 409;
exports.CONFLICT_ERROR_STATUS_CODE = CONFLICT_ERROR_STATUS_CODE;
var FORBIDDEN_ERROR_STATUS_CODE = 403;
/*=========== MODAL =============*/

exports.FORBIDDEN_ERROR_STATUS_CODE = FORBIDDEN_ERROR_STATUS_CODE;
var MODAL_SM = 'sm';
exports.MODAL_SM = MODAL_SM;
var MODAL_MD = 'md';
exports.MODAL_MD = MODAL_MD;
var MODAL_LG = 'lg';
exports.MODAL_LG = MODAL_LG;