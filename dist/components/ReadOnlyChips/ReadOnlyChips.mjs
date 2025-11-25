import { jsx as t } from "react/jsx-runtime";
import p from "react";
import { Form as a } from "react-final-form";
import { createForm as s } from "final-form";
import l from "prop-types";
import f from "final-form-arrays";
import "../index.mjs";
import { getChipOptions as n } from "../../utils/chips.util.mjs";
import { setFieldState as u } from "../../utils/form.util.mjs";
import { CHIP_OPTIONS as c } from "../../types.mjs";
import d from "../FormChipCell/FormChipCell.mjs";
const h = n("metrics"), C = ({ chipOptions: o = h, labels: i = [], ...e }) => {
  const m = p.useRef(
    s({
      initialValues: { labels: i },
      mutators: { ...f, setFieldState: u },
      onSubmit: () => {
      }
    })
  );
  return /* @__PURE__ */ t(a, { form: m.current, onSubmit: () => {
  }, children: (r) => /* @__PURE__ */ t(
    d,
    {
      chipOptions: o,
      formState: r,
      isEditable: !1,
      initialValues: r.initialValues,
      name: "labels",
      ...e
    }
  ) });
};
C.propTypes = {
  chipOptions: c,
  labels: l.array
};
export {
  C as default
};
//# sourceMappingURL=ReadOnlyChips.mjs.map
