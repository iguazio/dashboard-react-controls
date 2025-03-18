import { j as jsxDevRuntimeExports } from "../../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import Tooltip from "../../Tooltip/Tooltip.mjs";
import TextTooltipTemplate from "../../TooltipTemplate/TextTooltipTemplate.mjs";
import { CHIP_OPTIONS } from "../../../types.mjs";
import "../../../hooks/index.mjs";
import { useHiddenChipsBlock } from "../../../hooks/useHiddenChipsBlock.hook.mjs";
const HiddenChipsBlock = React__default.forwardRef(
  ({ chipClassNames, chipOptions, chips, handleShowElements, textOverflowEllipsis = false }, { hiddenChipsCounterRef, hiddenChipsPopUpRef }) => {
    const { hiddenChipsBlockClassNames } = useHiddenChipsBlock(
      hiddenChipsCounterRef,
      hiddenChipsPopUpRef
    );
    const chipLabelClassNames = classnames("chip__label", textOverflowEllipsis && "data-ellipsis");
    const chipValueClassNames = classnames(
      "chip__value",
      textOverflowEllipsis && "data-ellipsis",
      chipOptions.boldValue && "chip-value_bold"
    );
    const generateChipData = (chip) => {
      return chip.isKeyOnly ? chip.key : `${chip.key}${chip.delimiter ? chip.delimiter : ":"} ${chip.value}`;
    };
    useEffect(() => {
      if (chips.length === 0) {
        handleShowElements();
      }
    });
    return createPortal(
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          ref: hiddenChipsPopUpRef,
          className: hiddenChipsBlockClassNames,
          onClick: (event) => event.stopPropagation(),
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "chip-block-hidden__scrollable-container", children: chips == null ? void 0 : chips.map((element) => {
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Tooltip,
              {
                template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  TextTooltipTemplate,
                  {
                    text: element.delimiter ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "chip__content", children: [
                      element.key,
                      !element.isKeyOnly && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "chip__delimiter", children: element.delimiter }, void 0, false, {
                          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                          lineNumber: 76,
                          columnNumber: 31
                        }, void 0),
                        element.value
                      ] }, void 0, true, {
                        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                        lineNumber: 75,
                        columnNumber: 29
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                      lineNumber: 72,
                      columnNumber: 25
                    }, void 0) : generateChipData(element)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                    lineNumber: 69,
                    columnNumber: 19
                  },
                  void 0
                ),
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: chipClassNames, children: [
                  element.key && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: chipLabelClassNames, children: element.key }, void 0, false, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                    lineNumber: 89,
                    columnNumber: 35
                  }, void 0),
                  element.value && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "chip__delimiter", children: element.delimiter ?? ":" }, void 0, false, {
                      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                      lineNumber: 92,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: chipValueClassNames, children: element.value }, void 0, false, {
                      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                      lineNumber: 93,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                    lineNumber: 91,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                  lineNumber: 88,
                  columnNumber: 17
                }, void 0)
              },
              element.id,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                lineNumber: 66,
                columnNumber: 15
              },
              void 0
            );
          }) }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
            lineNumber: 63,
            columnNumber: 9
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
          lineNumber: 58,
          columnNumber: 7
        },
        void 0
      ),
      document.getElementById("overlay_container")
    );
  }
);
HiddenChipsBlock.displayName = "HiddenChipsBlock";
HiddenChipsBlock.propTypes = {
  chipClassNames: PropTypes.string.isRequired,
  chipOptions: CHIP_OPTIONS.isRequired,
  chips: PropTypes.array.isRequired,
  handleShowElements: PropTypes.func.isRequired,
  textOverflowEllipsis: PropTypes.bool
};
export {
  HiddenChipsBlock as default
};
//# sourceMappingURL=HiddenChipsBlock.mjs.map
