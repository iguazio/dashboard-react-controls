const BACKSPACE = "Backspace";
const CLICK = "Click";
const DELETE = "Delete";
const TAB = "Tab";
const TAB_SHIFT = "Tab+Shift";
const PRIMARY_BUTTON = "primary";
const SECONDARY_BUTTON = "secondary";
const TERTIARY_BUTTON = "tertiary";
const DANGER_BUTTON = "danger";
const LABEL_BUTTON = "label";
const validation = {
  BEGIN_END_NOT_WITH: { LABEL: "Must not begin and end with", NAME: "beginEndNot" },
  BEGIN_END_WITH: { LABEL: "Must begin and end with", NAME: "beginEnd" },
  BEGIN_NOT_WITH: { LABEL: "Must not begin with", NAME: "beginNot" },
  BEGIN_WITH: { LABEL: "Must begin with", NAME: "begin" },
  END_NOT_WITH: { LABEL: "Must not end with", NAME: "endNot" },
  END_WITH: { LABEL: "Must end with", NAME: "end" },
  MUST_CONTAIN_EXACTLY_ONE: { LABEL: "Must contain exactly one", NAME: "exactlyOne" },
  MUST_HAVE_DOT_AFTER_AT: { LABEL: "Must have at least one . after @", NAME: "dotAfterAt" },
  MUST_NOT_BE: { LABEL: "Must not be", NAME: "mustNotBe" },
  NO_CONSECUTIVE_CHARACTER: { LABEL: "No consecutive characters", NAME: "noConsecutiveCharacters" },
  NOT_CONTAIN: { LABEL: "Must not contain", NAME: "notContainCharacters" },
  ONLY_AT_THE_BEGINNING: { LABEL: "Only at the beginning", NAME: "onlyAtTheBeginning" },
  REQUIRED: { LABEL: "This field is required", NAME: "required" },
  VALID_CHARACTERS_WITH_REFIX: { LABEL: "Valid characters", NAME: "validCharactersWithPrefix" },
  VALID_CHARACTERS: { LABEL: "Valid characters", NAME: "validCharacters" }
};
const BADREQUEST_ERROR_STATUS_CODE = 400;
const FORBIDDEN_ERROR_STATUS_CODE = 403;
const NOTFOUND_ERROR_STATUS_CODE = 404;
const CONFLICT_ERROR_STATUS_CODE = 409;
const INTERNAL_SERVER_ERROR_STATUS_CODE = 500;
const BAD_GATEWAY_ERROR_STATUS_CODE = 502;
const SERVICE_UNAVAILABLE_ERROR_STATUS_CODE = 503;
const GATEWAY_TIMEOUT_STATUS_CODE = 504;
const MODAL_SM = "sm";
const MODAL_MD = "md";
const MODAL_LG = "lg";
const MODAL_MIN = "min";
const MODAL_MAX = "max";
export {
  BACKSPACE,
  BADREQUEST_ERROR_STATUS_CODE,
  BAD_GATEWAY_ERROR_STATUS_CODE,
  CLICK,
  CONFLICT_ERROR_STATUS_CODE,
  DANGER_BUTTON,
  DELETE,
  FORBIDDEN_ERROR_STATUS_CODE,
  GATEWAY_TIMEOUT_STATUS_CODE,
  INTERNAL_SERVER_ERROR_STATUS_CODE,
  LABEL_BUTTON,
  MODAL_LG,
  MODAL_MAX,
  MODAL_MD,
  MODAL_MIN,
  MODAL_SM,
  NOTFOUND_ERROR_STATUS_CODE,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  SERVICE_UNAVAILABLE_ERROR_STATUS_CODE,
  TAB,
  TAB_SHIFT,
  TERTIARY_BUTTON,
  validation
};
//# sourceMappingURL=constants.mjs.map
