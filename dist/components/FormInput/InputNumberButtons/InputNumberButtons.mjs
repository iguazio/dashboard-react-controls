import { j as jsxDevRuntimeExports } from "../../../_virtual/jsx-dev-runtime.mjs";
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
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { "data-testid": "range-input-container", className: "form-field-range", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "range__buttons", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        "data-testid": "btn-increase",
        className: "range__button range__button-increase",
        disabled,
        onClick: handleIncrease,
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgRangeArrowSmall, { className: "increase" }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
        lineNumber: 63,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        "data-testid": "btn-decrease",
        className: "range__button range__button-decrease",
        disabled,
        onClick: handleDecrease,
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgRangeArrowSmall, { className: "decrease" }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
          lineNumber: 77,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
        lineNumber: 71,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
    lineNumber: 62,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, void 0);
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
