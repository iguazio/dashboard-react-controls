import { jsx as b, jsxs as v } from "react/jsx-runtime";
import { useRef as u, useEffect as w, useCallback as I } from "react";
import e from "prop-types";
import y from "classnames";
import { useSelector as B } from "react-redux";
import { isEmpty as C } from "lodash";
import j from "../elements/TableHead/TableHead.mjs";
import { MAIN_TABLE_BODY_ID as E, MAIN_TABLE_ID as N } from "../constants.mjs";
import { VIRTUALIZATION_CONFIG as q, SORT_PROPS as O } from "../types.mjs";
const P = ({
  children: l,
  hideActionsMenu: f = !1,
  mainRowItemsCount: R = 1,
  pageData: r = null,
  renderDetails: m = null,
  selectedItem: _ = {},
  sortProps: i = null,
  tableBodyRef: h,
  tableClass: s,
  tableContentRef: n,
  tableHeadRef: c,
  tableHeaders: o,
  tablePanelRef: g,
  tableRef: T,
  tableStore: a = null,
  tableWrapperClass: t,
  virtualizationConfig: d = {
    tableBodyPaddingTop: 0,
    startIndex: -1,
    endIndex: -1
  }
}) => /* @__PURE__ */ b("div", { className: "table__flex", children: /* @__PURE__ */ v("div", { className: "table__content", id: "table-content", ref: n, children: [
  /* @__PURE__ */ v("div", { className: t, children: [
    /* @__PURE__ */ v(
      "table",
      {
        id: N,
        className: s,
        cellPadding: "0",
        cellSpacing: "0",
        ref: T,
        children: [
          (o == null ? void 0 : o.length) > 0 && /* @__PURE__ */ b(
            j,
            {
              content: o,
              hideActionsMenu: f,
              mainRowItemsCount: R,
              ref: c,
              selectedItem: _,
              sortProps: i
            }
          ),
          /* @__PURE__ */ b(
            "tbody",
            {
              className: "table-body",
              id: E,
              style: { paddingTop: d.tableBodyPaddingTop },
              ref: h,
              children: l
            }
          )
        ]
      }
    ),
    (a == null ? void 0 : a.isTablePanelOpen) && (r == null ? void 0 : r.tablePanel) && /* @__PURE__ */ b("div", { className: "table__panel-container", ref: g, children: /* @__PURE__ */ b("div", { className: "table__panel", children: r.tablePanel }) })
  ] }),
  m && m()
] }) });
P.propTypes = {
  children: e.node.isRequired,
  hideActionsMenu: e.bool,
  mainRowItemsCount: e.number,
  pageData: e.object,
  renderDetails: e.func,
  selectedItem: e.object,
  sortProps: O,
  tableBodyRef: e.object.isRequired,
  tableClass: e.string.isRequired,
  tableContentRef: e.object.isRequired,
  tableHeadRef: e.object.isRequired,
  tableHeaders: e.arrayOf(e.object).isRequired,
  tablePanelRef: e.object.isRequired,
  tableRef: e.object.isRequired,
  tableStore: e.object,
  tableWrapperClass: e.string.isRequired,
  virtualizationConfig: q
};
const F = ({ ref: l, selectedItem: f, skipTableWrapper: R = !1, tableClassName: r = "" }) => {
  const m = u(null), _ = u(null), i = (l == null ? void 0 : l.tableRef) ?? m, h = (l == null ? void 0 : l.tableBodyRef) ?? _, s = u(null), n = u(null), c = u(null), o = B((t) => t.tableStore) ?? {}, g = y(
    "table",
    "table-main",
    !C(f) && "table-with-details",
    r && r
  ), T = y(!R && "table__wrapper");
  w(() => {
    const t = () => {
      if (c != null && c.current && (s != null && s.current) && (n != null && n.current)) {
        const d = s.current.getBoundingClientRect().height, L = c.current.getBoundingClientRect(), p = window.innerHeight - L.top;
        n.current.style.height = d > p ? `${p}px` : `${p - (p - d)}px`;
      }
    };
    return o.isTablePanelOpen && n.current && (t(), document.getElementById("main-wrapper").addEventListener("scroll", t), window.addEventListener("resize", t)), () => {
      window.removeEventListener("scroll", t), window.removeEventListener("resize", t);
    };
  }, [o.isTablePanelOpen]);
  const a = I(
    (t) => {
      i.current && (t.target.scrollLeft > 0 ? i.current.classList.add("table__scrolled") : i.current.classList.remove("table__scrolled"));
    },
    [i]
  );
  return w(() => (window.addEventListener("scroll", a, !0), () => window.removeEventListener("scroll", a, !0)), [a]), {
    TableContainer: P,
    tableBodyRef: h,
    tableClass: g,
    tableContentRef: s,
    tableHeadRef: c,
    tablePanelRef: n,
    tableRef: i,
    tableStore: o,
    tableWrapperClass: T
  };
};
export {
  F as useTable
};
//# sourceMappingURL=useTable.hook.mjs.map
