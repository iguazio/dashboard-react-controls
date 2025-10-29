import { setNotification as f } from "../reducers/notificationReducer.mjs";
import { getErrorMsg as M } from "./common.util.mjs";
import { FORBIDDEN_ERROR_STATUS_CODE as O } from "../constants.mjs";
const S = (g, s, D, R, m = null, t = null) => {
  var u, E;
  const n = R || M(s, D), p = {
    status: ((u = s == null ? void 0 : s.response) == null ? void 0 : u.status) || 400,
    id: Math.random(),
    message: n,
    error: s
  };
  m && ((E = s == null ? void 0 : s.response) == null ? void 0 : E.status) !== O && (p.retry = m), t == null || t(n), g(f(p));
};
export {
  S as showErrorNotification
};
//# sourceMappingURL=notification.util.mjs.map
