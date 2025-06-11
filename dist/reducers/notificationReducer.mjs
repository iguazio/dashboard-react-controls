import { createSlice as e } from "@reduxjs/toolkit";
const c = {
  notification: []
}, t = e({
  name: "notification",
  initialState: c,
  reducers: {
    setNotification(o, { payload: i }) {
      i.error && console.error(i.error), o.notification.push(i);
    },
    removeNotification(o, { payload: i }) {
      o.notification = o.notification.filter((n) => n.id !== i);
    }
  }
}), { setNotification: f, removeNotification: a } = t.actions, s = t.reducer;
export {
  s as default,
  a as removeNotification,
  f as setNotification
};
//# sourceMappingURL=notificationReducer.mjs.map
