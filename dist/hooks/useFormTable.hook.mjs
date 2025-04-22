import { useState as V, useRef as p, useLayoutEffect as b, useEffect as C } from "react";
import { get as m, omit as A } from "lodash";
import { ARRAY_ERROR as L } from "final-form";
const G = (l, F, E) => {
  const [i, $] = V(null), r = p(null), d = p(null), o = p(null), O = p(null), f = p(E);
  b(() => {
    const e = m(l == null ? void 0 : l.errors, i == null ? void 0 : i.ui.fieldsPath, []);
    d.current = m(e, i == null ? void 0 : i.ui.index, null);
  }, [i == null ? void 0 : i.ui.fieldsPath, i == null ? void 0 : i.ui.index, l == null ? void 0 : l.errors]), b(() => {
    o.current = l;
  }, [l]), b(() => {
    f.current = E;
  }, [E]);
  const a = () => {
    var e, t;
    (e = r.current) != null && e.data && Object.entries((t = r.current) == null ? void 0 : t.data).forEach(([n]) => {
      var u, c, s;
      (s = o.current) == null || s.form.mutators.setFieldState(
        `${(u = r.current) == null ? void 0 : u.ui.fieldsPath}[${(c = r.current) == null ? void 0 : c.ui.index}].data.${n}`,
        {
          modified: !1
        }
      );
    }), r.current = null, $(null), f != null && f.current && f.current();
  };
  C(() => {
    const e = () => {
      var t, n, u, c, s, h, N, T;
      if (r != null && r.current)
        if (!d.current)
          a();
        else {
          if ((n = (t = r.current) == null ? void 0 : t.ui) != null && n.isNew) {
            const P = m(o.current.values, (u = r.current) == null ? void 0 : u.ui.fieldsPath);
            (P == null ? void 0 : P.length) > 1 ? o.current.form.mutators.remove(
              (c = r.current) == null ? void 0 : c.ui.fieldsPath,
              (s = r.current) == null ? void 0 : s.ui.index
            ) : o.current.form.change((h = r.current) == null ? void 0 : h.ui.fieldsPath, []);
          } else
            o.current.form.mutators.update(
              (N = r.current) == null ? void 0 : N.ui.fieldsPath,
              (T = r.current) == null ? void 0 : T.ui.index,
              A(r.current, ["ui"])
            );
          a();
        }
    };
    return () => {
      e();
    };
  }, [F]);
  const j = (e, t, n, u) => {
    w(e), o.current.form.mutators.push(n, u), $(() => {
      var s;
      const c = {
        ...u,
        ui: {
          isNew: !0,
          fieldsPath: n,
          index: ((s = t.value) == null ? void 0 : s.length) || 0
        }
      };
      return r.current = c, c;
    }), D();
  }, R = (e, t) => {
    var n, u;
    r.current && (d.current ? Object.entries((u = d.current) == null ? void 0 : u.data).forEach(([c]) => {
      var s, h;
      (h = o.current) == null || h.form.mutators.setFieldState(
        `${(s = r.current) == null ? void 0 : s.ui.fieldsPath}[${t}].data.${c}`,
        {
          modified: !0
        }
      );
    }) : ((n = r.current) != null && n.ui.isNew && D(), a()));
  }, g = (e, t, n) => {
    r.current && n !== r.current.ui.index && w(e);
    const u = m(o.current.values, t);
    (u == null ? void 0 : u.length) > 1 ? o.current.form.mutators.remove(t, n) : o.current.form.change(t, []), a(), e && e.stopPropagation();
  }, x = (e, t, n) => {
    o.current.form.mutators.update(
      t,
      n,
      A(r.current, ["ui"])
    ), a(), e && e.stopPropagation();
  }, y = (e, t, n) => {
    var u, c;
    !r.current || (c = (u = r.current) == null ? void 0 : u.ui) != null && c.isNew ? g(e, t, n) : x(e, t, n);
  }, w = (e = null) => {
    var t, n, u;
    r != null && r.current && (d.current ? y(
      e,
      (n = r.current) == null ? void 0 : n.ui.fieldsPath,
      (u = r.current) == null ? void 0 : u.ui.index
    ) : R(e, (t = r.current) == null ? void 0 : t.ui.index));
  }, v = (e, t, n, u) => {
    w(e), setTimeout(() => {
      const c = t.value[u];
      $(() => {
        const s = { ...c, ui: { fieldsPath: n, index: u } };
        return r.current = s, s;
      });
    });
  }, D = () => {
    O.current && setTimeout(() => {
      O.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };
  return {
    addNewRow: j,
    applyChanges: R,
    applyOrDiscardOrDelete: w,
    bottomScrollRef: O,
    deleteRow: g,
    discardChanges: x,
    discardOrDelete: y,
    editingItem: i,
    editingItemRef: r,
    enterEditMode: v,
    exitEditMode: a,
    getTableArrayErrors: (e) => l.submitFailed && l.invalid ? m(l, `errors.${e}.${L}`, []) : [],
    isCurrentRowEditing: (e) => (r == null ? void 0 : r.current) && `${r.current.ui.fieldsPath}[${r.current.ui.index}]` === e
  };
};
export {
  G as useFormTable
};
//# sourceMappingURL=useFormTable.hook.mjs.map
