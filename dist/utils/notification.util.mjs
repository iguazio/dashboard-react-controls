import { setNotification as O } from "../reducers/notificationReducer.mjs";
import { getErrorMsg as _ } from "./common.util.mjs";
import { FORBIDDEN_ERROR_STATUS_CODE as f } from "../constants.mjs";
const T = (E, t, m, R, n = null, s = null) => {
  var u, D;
  const p = {
    status: ((u = t == null ? void 0 : t.response) == null ? void 0 : u.status) || 400,
    id: Math.random(),
    message: R || _(t, m),
    error: t
  };
  n && ((D = t == null ? void 0 : t.response) == null ? void 0 : D.status) !== f && (p.retry = n), s == null || s(m), E(O(p));
};
export {
  T as showErrorNotification
};
//# sourceMappingURL=notification.util.mjs.map
