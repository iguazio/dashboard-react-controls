import { jsx as w, jsxs as C } from "react/jsx-runtime";
import { useRef as T, useEffect as _, useCallback as v, useMemo as I } from "react";
import e from "prop-types";
import B from "classnames";
import { useSelector as N } from "react-redux";
import { isEmpty as P } from "lodash";
import S from "../elements/TableHead/TableHead.mjs";
import { MAIN_TABLE_BODY_ID as x, MAIN_TABLE_ID as E } from "../constants.mjs";
import { VIRTUALIZATION_CONFIG as O, SORT_PROPS as A } from "../types.mjs";
const L = ({
  children: n,
  hideActionsMenu: s = !1,
  mainRowItemsCount: p = 1,
  pageData: u = null,
  renderDetails: l = null,
  selectedItem: f = {},
  sortProps: c = null,
  tableBodyRef: m,
  tableClass: t,
  tableContentRef: d,
  tableHeadRef: r,
  tableHeaders: a,
  tablePanelRef: i,
  tableRef: h,
  tableStore: b = null,
  tableWrapperClass: o,
  virtualizationConfig: g = {
    tableBodyPaddingTop: 0,
    startIndex: -1,
    endIndex: -1
  }
}) => /* @__PURE__ */ w("div", { className: "table__flex", children: /* @__PURE__ */ C("div", { className: "table__content", id: "table-content", ref: d, children: [
  /* @__PURE__ */ C("div", { className: o, children: [
    /* @__PURE__ */ C(
      "table",
      {
        id: E,
        className: t,
        cellPadding: "0",
        cellSpacing: "0",
        ref: h,
        children: [
          (a == null ? void 0 : a.length) > 0 && /* @__PURE__ */ w(
            S,
            {
              content: a,
              hideActionsMenu: s,
              mainRowItemsCount: p,
              ref: r,
              selectedItem: f,
              sortProps: c
            }
          ),
          /* @__PURE__ */ w(
            "tbody",
            {
              className: "table-body",
              id: x,
              style: { paddingTop: g.tableBodyPaddingTop },
              ref: m,
              children: n
            }
          )
        ]
      }
    ),
    (b == null ? void 0 : b.isTablePanelOpen) && (u == null ? void 0 : u.tablePanel) && /* @__PURE__ */ w("div", { className: "table__panel-container", ref: i, children: /* @__PURE__ */ w("div", { className: "table__panel", children: u.tablePanel }) })
  ] }),
  l && l()
] }) });
L.propTypes = {
  children: e.node.isRequired,
  hideActionsMenu: e.bool,
  mainRowItemsCount: e.number,
  pageData: e.object,
  renderDetails: e.func,
  selectedItem: e.object,
  sortProps: A,
  tableBodyRef: e.object.isRequired,
  tableClass: e.string.isRequired,
  tableContentRef: e.object.isRequired,
  tableHeadRef: e.object.isRequired,
  tableHeaders: e.arrayOf(e.object).isRequired,
  tablePanelRef: e.object.isRequired,
  tableRef: e.object.isRequired,
  tableStore: e.object,
  tableWrapperClass: e.string.isRequired,
  virtualizationConfig: O
};
const K = ({ ref: n, selectedItem: s, skipTableWrapper: p = !1, tableClassName: u = "" }) => {
  const l = T(null), f = T(null), c = (n == null ? void 0 : n.tableRef) ?? l, m = (n == null ? void 0 : n.tableBodyRef) ?? f, t = T(null), d = T(null), r = T(null), a = N((o) => o.tableStore) ?? {}, i = B(
    "table",
    "table-main",
    !P(s) && "table-with-details",
    u && u
  ), h = B(!p && "table__wrapper");
  _(() => {
    const o = () => {
      if (r != null && r.current && (t != null && t.current) && (d != null && d.current)) {
        const g = t.current.getBoundingClientRect().height, y = r.current.getBoundingClientRect(), R = window.innerHeight - y.top;
        d.current.style.height = g > R ? `${R}px` : `${R - (R - g)}px`;
      }
    };
    return a.isTablePanelOpen && d.current && (o(), document.getElementById("main-wrapper").addEventListener("scroll", o), window.addEventListener("resize", o)), () => {
      window.removeEventListener("scroll", o), window.removeEventListener("resize", o);
    };
  }, [a.isTablePanelOpen]);
  const b = v(
    (o) => {
      c.current && (o.target.scrollLeft > 0 ? c.current.classList.add("table__scrolled") : c.current.classList.remove("table__scrolled"));
    },
    [c]
  );
  return _(() => (window.addEventListener("scroll", b, !0), () => window.removeEventListener("scroll", b, !0)), [b]), {
    TableContainer: L,
    tableBodyRef: m,
    tableClass: i,
    tableContentRef: t,
    tableHeadRef: r,
    tablePanelRef: d,
    tableRef: c,
    tableStore: a,
    tableWrapperClass: h
  };
}, Z = ({
  content: n,
  selectedItem: s,
  isAllVersions: p,
  tableId: u = E
}) => {
  const l = T(null), f = I(
    () => p ? "identifierUnique" : "identifier",
    [p]
  ), c = v(
    (m, t, d = !1) => {
      const r = t == null ? void 0 : t.findIndex(
        (i) => {
          var h;
          return ((h = i == null ? void 0 : i.ui) == null ? void 0 : h[f]) === m;
        }
      ), a = () => {
        var h;
        const i = document.getElementById(u);
        if (r && i) {
          const b = i.getElementsByTagName("tr");
          if (r <= b.length) {
            const o = ((h = i.querySelector("thead")) == null ? void 0 : h.getBoundingClientRect().height) ?? 0, g = b[r].getBoundingClientRect(), y = i.getBoundingClientRect(), R = g.height / 2, q = (y.height - o) / 2, j = g.height * (r + 1) - R - q;
            i.scrollTo({
              top: j
            });
          }
        }
      };
      r >= 0 && (d ? requestAnimationFrame(() => {
        a();
      }) : a());
    },
    [f, u]
  );
  _(() => {
    var m, t;
    try {
      P(s) ? l.current && (c((t = l.current) == null ? void 0 : t[f], n), l.current = null) : l.current ? l.current = s.ui : (l.current = s.ui, c((m = s == null ? void 0 : s.ui) == null ? void 0 : m[f], n, !0));
    } catch {
      l.current = null;
    }
  }, [s, n, c, f]), _(() => () => {
    l.current = null;
  }, [n]);
};
export {
  K as useTable,
  Z as useTableScroll
};
//# sourceMappingURL=useTable.hook.mjs.map
