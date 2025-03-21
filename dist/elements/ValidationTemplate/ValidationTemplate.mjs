import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import SvgSuccessDone from "../../images/success_done.svg.mjs";
import SvgClose from "../../images/close.svg.mjs";
/* empty css                         */
const ValidationTemplate = ({ valid, validationMessage }) => {
  const validationClasses = classnames("validation-option", valid && "text-muted");
  return /* @__PURE__ */ jsxs("li", { className: validationClasses, children: [
    /* @__PURE__ */ jsx("i", { className: "validation-option__icon", children: valid ? /* @__PURE__ */ jsx(SvgSuccessDone, { className: "validation-option__icon_valid" }) : /* @__PURE__ */ jsx(SvgClose, { className: "validation-option__icon_invalid" }) }),
    /* @__PURE__ */ jsx("span", { children: validationMessage })
  ] });
};
ValidationTemplate.propTypes = {
  valid: PropTypes.bool.isRequired,
  validationMessage: PropTypes.string.isRequired
};
export {
  ValidationTemplate as default
};
//# sourceMappingURL=ValidationTemplate.mjs.map
