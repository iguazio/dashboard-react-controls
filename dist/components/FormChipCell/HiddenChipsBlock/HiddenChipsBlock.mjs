import { jsx, jsxs, Fragment } from "react/jsx-runtime";
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
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: hiddenChipsPopUpRef,
          className: hiddenChipsBlockClassNames,
          onClick: (event) => event.stopPropagation(),
          children: /* @__PURE__ */ jsx("div", { className: "chip-block-hidden__scrollable-container", children: chips == null ? void 0 : chips.map((element) => {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                template: /* @__PURE__ */ jsx(
                  TextTooltipTemplate,
                  {
                    text: element.delimiter ? /* @__PURE__ */ jsxs("span", { className: "chip__content", children: [
                      element.key,
                      !element.isKeyOnly && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx("span", { className: "chip__delimiter", children: element.delimiter }),
                        element.value
                      ] })
                    ] }) : generateChipData(element)
                  }
                ),
                children: /* @__PURE__ */ jsxs("div", { className: chipClassNames, children: [
                  element.key && /* @__PURE__ */ jsx("div", { className: chipLabelClassNames, children: element.key }),
                  element.value && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("div", { className: "chip__delimiter", children: element.delimiter ?? ":" }),
                    /* @__PURE__ */ jsx("div", { className: chipValueClassNames, children: element.value })
                  ] })
                ] })
              },
              element.id
            );
          }) })
        }
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
