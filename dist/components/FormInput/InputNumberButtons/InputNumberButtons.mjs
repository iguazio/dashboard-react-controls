import { jsx, jsxs } from "react/jsx-runtime";
import React__default from "react";
import PropTypes from "prop-types";
import { isNil } from "lodash";
import { performFloatOperation } from "../../../utils/math.util.mjs";
import SvgRangeArrowSmall from "../../../images/range-arrow-small.svg.mjs";
/* empty css                         */
const InputNumberButtons = ({
  disabled = false,
  min = null,
  max = null,
  onChange,
  step = 1,
  value
}) => {
  const handleIncrease = (event) => {
    event.preventDefault();
    if (max && value >= max) return;
    let newValue = isCurrentValueEmpty() ? step : performFloatOperation(value, step, "+");
    newValue = max && newValue > max ? max : newValue;
    onChange(newValue);
  };
  const handleDecrease = (event) => {
    event.preventDefault();
    if (min && value <= min) return;
    let newValue = isCurrentValueEmpty() ? -step : performFloatOperation(value, step, "-");
    newValue = min && newValue < min ? min : newValue;
    onChange(newValue);
  };
  const isCurrentValueEmpty = () => {
    return isNil(value) || value === "";
  };
  return /* @__PURE__ */ jsx("div", { "data-testid": "range-input-container", className: "form-field-range", children: /* @__PURE__ */ jsxs("div", { className: "range__buttons", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        "data-testid": "btn-increase",
        className: "range__button range__button-increase",
        disabled,
        onClick: handleIncrease,
        children: /* @__PURE__ */ jsx(SvgRangeArrowSmall, { className: "increase" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        "data-testid": "btn-decrease",
        className: "range__button range__button-decrease",
        disabled,
        onClick: handleDecrease,
        children: /* @__PURE__ */ jsx(SvgRangeArrowSmall, { className: "decrease" })
      }
    )
  ] }) });
};
InputNumberButtons.propTypes = {
  disabled: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
const InputNumberButtons$1 = React__default.memo(InputNumberButtons);
export {
  InputNumberButtons$1 as default
};
//# sourceMappingURL=InputNumberButtons.mjs.map
