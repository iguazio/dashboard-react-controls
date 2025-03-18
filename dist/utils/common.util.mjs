import { create } from "react-modal-promise";
import { isEmpty, differenceWith, isEqual, omit, get } from "lodash";
import ConfirmDialog from "../components/ConfirmDialog/ConfirmDialog.mjs";
import { PRIMARY_BUTTON, TERTIARY_BUTTON, DANGER_BUTTON } from "../constants.mjs";
const openPopUp = (element, props) => {
  return create(element)(props);
};
const openConfirmPopUp = (message, confirmHandler) => {
  return openPopUp(ConfirmDialog, {
    cancelButton: {
      label: "Cancel",
      variant: TERTIARY_BUTTON
    },
    confirmButton: {
      label: "OK",
      variant: PRIMARY_BUTTON,
      handler: confirmHandler
    },
    header: "Are you sure?",
    message
  });
};
const openDeleteConfirmPopUp = (header, message, confirmHandler) => {
  return openPopUp(ConfirmDialog, {
    cancelButton: {
      label: "Cancel",
      variant: TERTIARY_BUTTON
    },
    confirmButton: {
      label: "Delete",
      variant: DANGER_BUTTON,
      handler: confirmHandler
    },
    header,
    message
  });
};
const isEveryObjectValueEmpty = (obj) => Object.values(obj).every((item) => !item || item.length === 0);
const areArraysEqual = (firstArray, secondArray, omitBy = []) => {
  if (firstArray.length !== secondArray.length) return false;
  return isEmpty(
    differenceWith(firstArray, secondArray, (a, b) => {
      return isEqual(omit(a, omitBy), omit(b, omitBy));
    })
  );
};
const getErrorDetail = (error) => {
  const errorDetail = get(error, "response.data.detail", null);
  if (typeof errorDetail === "string") {
    return errorDetail;
  } else {
    return get(errorDetail, "reason", "");
  }
};
const getErrorMsg = (error, defaultError) => {
  const errorDetail = getErrorDetail(error);
  const errorMsg = errorDetail || error.message;
  if ((!errorMsg || errorMsg === "Not Found" || errorMsg.startsWith("Request failed with status code")) && defaultError) {
    return defaultError;
  } else {
    return errorMsg || "";
  }
};
const getTransitionEndEventName = () => {
  const transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  };
  let bodyStyle = document.body.style;
  for (let transition in transitions) {
    if (bodyStyle[transition] !== void 0) {
      return transitions[transition];
    }
  }
};
const getScssVariableValue = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};
export {
  areArraysEqual,
  getErrorDetail,
  getErrorMsg,
  getScssVariableValue,
  getTransitionEndEventName,
  isEveryObjectValueEmpty,
  openConfirmPopUp,
  openDeleteConfirmPopUp,
  openPopUp
};
//# sourceMappingURL=common.util.mjs.map
