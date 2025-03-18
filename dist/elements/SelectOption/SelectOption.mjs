import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import FormCheckBox from "../../components/FormCheckBox/FormCheckBox.mjs";
import Tooltip from "../../components/Tooltip/Tooltip.mjs";
import TextTooltipTemplate from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
import { SELECT_OPTION } from "../../types.mjs";
import SvgCheckmark from "../../images/checkmark.svg.mjs";
/* empty css                   */
const SelectOption = ({
  item,
  name,
  onClick = () => {
  },
  multiple = false,
  selectedId,
  withSelectedIcon = true
}) => {
  var _a;
  const selectClassName = classnames(
    "select__item",
    multiple && "multiple",
    item.hidden && "hidden",
    item.disabled && "disabled"
  );
  if (multiple) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { "data-testid": "select-checkbox", className: selectClassName, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormCheckBox,
      {
        name,
        value: item.id,
        label: item.label,
        disabled: item.disabled || false,
        children: item.status && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `state-${item.status}-job status` }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
          lineNumber: 55,
          columnNumber: 27
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
        lineNumber: 49,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, void 0);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "li",
    {
      "data-testid": "select-option",
      className: selectClassName,
      onClick: () => {
        !item.disabled && onClick(item.id);
      },
      "data-custom-id": item.id,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "label-row", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "data-ellipsis select__item-label", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "select__item-main-label", children: [
            item.icon && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { "data-testid": "select-icon", className: "select__item-icon", children: item.icon }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
              lineNumber: 74,
              columnNumber: 15
            }, void 0),
            item.status && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `state-${item.status}-job status` }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
              lineNumber: 78,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Tooltip,
              {
                renderChildAsHtml: ((_a = item.labelHtml) == null ? void 0 : _a.length) > 0,
                template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: item.label }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                  lineNumber: 81,
                  columnNumber: 25
                }, void 0),
                children: item.labelHtml ? item.labelHtml : item.label
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                lineNumber: 79,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
            lineNumber: 72,
            columnNumber: 11
          }, void 0),
          item.subLabel && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Tooltip,
            {
              className: "select__item-sub-label",
              template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: item.subLabel }, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                lineNumber: 89,
                columnNumber: 25
              }, void 0),
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: item.subLabel }, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                lineNumber: 91,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
              lineNumber: 87,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
          lineNumber: 71,
          columnNumber: 9
        }, void 0),
        withSelectedIcon && item.id === selectedId && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgCheckmark, { className: "checkmark" }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
          lineNumber: 95,
          columnNumber: 56
        }, void 0)
      ] }, void 0, true, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
        lineNumber: 70,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
      lineNumber: 62,
      columnNumber: 5
    },
    void 0
  );
};
SelectOption.propTypes = {
  name: PropTypes.string.isRequired,
  item: SELECT_OPTION.isRequired,
  onClick: PropTypes.func,
  multiple: PropTypes.bool,
  selectedId: PropTypes.string,
  withSelectedIcon: PropTypes.bool
};
export {
  SelectOption as default
};
//# sourceMappingURL=SelectOption.mjs.map
