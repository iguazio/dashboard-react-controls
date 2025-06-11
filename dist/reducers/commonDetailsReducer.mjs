import { createSlice as a } from "@reduxjs/toolkit";
const n = {
  changes: {
    counter: 0,
    data: {}
  },
  detailsPopUpInfoContent: {},
  editMode: !1,
  infoContent: {},
  filtersWasHandled: !1,
  showWarning: !1
}, o = a({
  name: "commonDetailsStore",
  initialState: n,
  reducers: {
    removeDetailsPopUpInfoContent(e) {
      e.detailsPopUpInfoContent = {};
    },
    removeInfoContent(e) {
      e.infoContent = {};
    },
    resetChanges(e) {
      e.changes = n.changes;
    },
    setChanges(e, t) {
      e.changes = t.payload;
    },
    setChangesCounter(e, t) {
      e.changes.counter = t.payload;
    },
    setChangesData(e, t) {
      e.changes.data = t.payload;
    },
    setDetailsPopUpInfoContent(e, t) {
      e.detailsPopUpInfoContent = t.payload;
    },
    setEditMode(e, t) {
      e.editMode = t.payload;
    },
    setFiltersWasHandled(e, t) {
      e.filtersWasHandled = t.payload;
    },
    setInfoContent(e, t) {
      e.infoContent = t.payload;
    },
    showWarning(e, t) {
      e.showWarning = t.payload;
    }
  }
}), {
  removeDetailsPopUpInfoContent: d,
  removeInfoContent: l,
  resetChanges: i,
  setChanges: r,
  setChangesCounter: p,
  setChangesData: C,
  setDetailsPopUpInfoContent: c,
  setEditMode: f,
  setFiltersWasHandled: g,
  setInfoContent: h,
  showWarning: m
} = o.actions, I = o.reducer;
export {
  I as default,
  d as removeDetailsPopUpInfoContent,
  l as removeInfoContent,
  i as resetChanges,
  r as setChanges,
  p as setChangesCounter,
  C as setChangesData,
  c as setDetailsPopUpInfoContent,
  f as setEditMode,
  g as setFiltersWasHandled,
  h as setInfoContent,
  m as showWarning
};
//# sourceMappingURL=commonDetailsReducer.mjs.map
