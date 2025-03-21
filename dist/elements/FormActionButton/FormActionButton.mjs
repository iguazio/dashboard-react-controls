import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React__default from "react";
import PropTypes from "prop-types";
import SvgPlus from "../../images/plus.svg.mjs";
const FormActionButton = React__default.forwardRef(
  ({
    disabled = false,
    fields,
    fieldsPath,
    hidden = false,
    id = "",
    label = "Add new item",
    onClick
  }, ref) => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      !hidden && /* @__PURE__ */ jsx("div", { className: "form-table__row form-table__action-row no-hover", children: /* @__PURE__ */ jsxs(
        "button",
        {
          "data-testid": id ? id : `${fieldsPath}-add-btn`,
          onClick: (event) => onClick(event, fields, fieldsPath),
          disabled,
          children: [
            /* @__PURE__ */ jsx(SvgPlus, {}),
            label
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("span", { ref })
    ] });
  }
);
FormActionButton.displayName = "FormActionButton";
FormActionButton.propTypes = {
  disabled: PropTypes.bool,
  fields: PropTypes.shape({}).isRequired,
  fieldsPath: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
export {
  FormActionButton as default
};
//# sourceMappingURL=FormActionButton.mjs.map
