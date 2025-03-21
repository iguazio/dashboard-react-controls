import { jsx, jsxs } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx("div", { "data-testid": "select-checkbox", className: selectClassName, children: /* @__PURE__ */ jsx(
      FormCheckBox,
      {
        name,
        value: item.id,
        label: item.label,
        disabled: item.disabled || false,
        children: item.status && /* @__PURE__ */ jsx("span", { className: `state-${item.status}-job status` })
      }
    ) });
  }
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-testid": "select-option",
      className: selectClassName,
      onClick: () => {
        !item.disabled && onClick(item.id);
      },
      "data-custom-id": item.id,
      children: /* @__PURE__ */ jsxs("div", { className: "label-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "data-ellipsis select__item-label", children: [
          /* @__PURE__ */ jsxs("div", { className: "select__item-main-label", children: [
            item.icon && /* @__PURE__ */ jsx("span", { "data-testid": "select-icon", className: "select__item-icon", children: item.icon }),
            item.status && /* @__PURE__ */ jsx("span", { className: `state-${item.status}-job status` }),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                renderChildAsHtml: ((_a = item.labelHtml) == null ? void 0 : _a.length) > 0,
                template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: item.label }),
                children: item.labelHtml ? item.labelHtml : item.label
              }
            )
          ] }),
          item.subLabel && /* @__PURE__ */ jsx(
            Tooltip,
            {
              className: "select__item-sub-label",
              template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: item.subLabel }),
              children: /* @__PURE__ */ jsx("span", { children: item.subLabel })
            }
          )
        ] }),
        withSelectedIcon && item.id === selectedId && /* @__PURE__ */ jsx(SvgCheckmark, { className: "checkmark" })
      ] })
    }
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
