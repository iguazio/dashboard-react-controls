import { jsx as s, Fragment as t } from "react/jsx-runtime";
import { useEffect as c } from "react";
import e from "prop-types";
import { useBlocker as f } from "react-router-dom";
const m = ({ setBlocker: r, shouldBlock: p }) => {
  const o = f(p);
  return c(() => {
    r(o);
  }, [r, o]), /* @__PURE__ */ s(t, {});
};
m.propTypes = {
  setBlocker: e.func.isRequired,
  shouldBlock: e.func.isRequired
};
export {
  m as default
};
//# sourceMappingURL=BlockerSpy.mjs.map
