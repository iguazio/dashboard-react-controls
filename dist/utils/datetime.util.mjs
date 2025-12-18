import a from "moment";
function m() {
  const t = /* @__PURE__ */ new Set(["en-GB", "en-US"]);
  return (navigator.languages || [navigator.language]).find((o) => t.has(o)) || "en-US";
}
const c = m(), d = (t, e, r = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}, o = c) => {
  if (!t)
    return e;
  let n;
  try {
    n = new Date(t);
  } catch {
    return e;
  }
  return typeof n != "object" || !(n instanceof Date) || isNaN(n) ? e : new Intl.DateTimeFormat(o, {
    numberingSystem: "latn",
    calendar: "gregory",
    ...r
  }).format(n);
}, g = (t) => {
  const [e, r] = t.split(":");
  return r ? {
    hour: e.replace(/_/g, "0"),
    minute: r.replace(/_/g, "0")
  } : {
    hour: "0",
    minute: "0"
  };
}, h = (t) => (a.updateLocale("en", {
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
}), a.utc(t).fromNow()), p = (t, e) => a(t).format(e), y = (t = [], e, r = !0) => [...t].sort((o, n) => {
  const s = Date.parse(o[e]), u = Date.parse(n[e]);
  return r ? s - u : u - s;
});
export {
  d as formatDatetime,
  p as getDateAndTimeByFormat,
  g as getFormatTime,
  m as getSupportedLocale,
  h as getTimeElapsedByDate,
  y as sortListByDate,
  c as supportedLocale
};
//# sourceMappingURL=datetime.util.mjs.map
