import n from "moment";
const u = (t, e) => {
  if (!t)
    return e;
  const r = new Date(t);
  return typeof r != "object" || !(r instanceof Date) || isNaN(r) ? e : new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(r);
}, c = (t) => {
  const [e, r] = t.split(":");
  return r ? {
    hour: e.replace(/_/g, "0"),
    minute: r.replace(/_/g, "0")
  } : {
    hour: "0",
    minute: "0"
  };
}, d = (t) => (n.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }
}), n.utc(t).fromNow()), h = (t, e) => n(t).format(e), y = (t = [], e, r = !0) => [...t].sort((s, m) => {
  const o = Date.parse(s[e]), a = Date.parse(m[e]);
  return r ? o - a : a - o;
});
export {
  u as formatDatetime,
  h as getDateAndTimeByFormat,
  c as getFormatTime,
  d as getTimeElapsedByDate,
  y as sortListByDate
};
//# sourceMappingURL=datetime.util.mjs.map
