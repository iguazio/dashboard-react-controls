import o, { isEmpty as d } from "lodash";
import { validation as n } from "../constants.mjs";
const s = (e) => e.replace(/-/g, "–").replace(/\s/g, ", ").replace(/\bs\b/, "spaces"), E = (e) => e.split(" ").map((t) => t.length === 1 ? "\\" + t : t).join(""), A = (e) => o.some(e, ["isValid", !1]), b = (e = "Required") => (t) => [t.trim() !== "" && typeof t == "string", e], g = (e, t = "", r = !0) => {
  const i = !r && d(t) ? e : e.filter((l) => !l.async).map((l) => ({
    ...l,
    isValid: o.isFunction(l.pattern) ? l.pattern(t) : (
      /* else, it is a RegExp */
      l.pattern.test(t)
    )
  }));
  return [i, !A(i)];
}, _ = async (e, t) => {
  const [r] = g(e, t), i = await Promise.all(
    e.filter((c) => c.async).map(async (c) => ({
      ...c,
      isValid: await c.pattern(t)
    }))
  ), l = r.concat(i);
  return [l, !A(l)];
}, a = {
  beginWith: (e) => ({
    name: n.BEGIN_WITH.NAME,
    label: n.BEGIN_WITH.LABEL + ": " + s(e),
    pattern: new RegExp("^[" + E(e) + "]")
  }),
  beginNotWith: (e) => ({
    name: n.BEGIN_NOT_WITH.NAME,
    label: n.BEGIN_NOT_WITH.LABEL + ": " + s(e),
    pattern: new RegExp("^[^" + E(e) + "]")
  }),
  endWith: (e) => ({
    name: n.END_WITH.NAME,
    label: n.END_WITH.LABEL + ": " + s(e),
    pattern: new RegExp("[" + E(e) + "]$")
  }),
  endNotWith: (e) => ({
    name: n.END_NOT_WITH.NAME,
    label: n.END_NOT_WITH.LABEL + ": " + s(e),
    pattern: new RegExp("[^" + E(e) + "]$")
  }),
  beginEndWith: (e, t = "") => {
    const r = E(e);
    return {
      name: n.BEGIN_END_WITH.NAME,
      label: t + n.BEGIN_END_WITH.LABEL + ": " + s(e),
      pattern: new RegExp("^([" + r + "].*)?[" + r + "]$")
    };
  },
  beginEndNotWith: (e) => {
    const t = E(e);
    return {
      name: n.BEGIN_END_NOT_WITH.NAME,
      label: n.BEGIN_END_NOT_WITH.LABEL + ": " + s(e),
      pattern: new RegExp("^([^" + t + "].*)?[^" + t + "]$")
    };
  },
  onlyAtTheBeginning: (e) => {
    const t = E(e);
    return {
      name: n.ONLY_AT_THE_BEGINNING.NAME,
      label: n.ONLY_AT_THE_BEGINNING.LABEL + ": " + s(e),
      pattern: new RegExp("^([" + t + "])?[^" + t + "]+$")
    };
  },
  validCharacters: (e, t = "") => ({
    name: n.VALID_CHARACTERS.NAME,
    label: t + n.VALID_CHARACTERS.LABEL + ": " + s(e),
    pattern: new RegExp("^[" + E(e) + "]+$")
  }),
  validCharactersWithPrefix: (e) => ({
    name: n.VALID_CHARACTERS_WITH_REFIX.NAME,
    label: n.VALID_CHARACTERS_WITH_REFIX.LABEL + ": " + s(e),
    pattern: new RegExp(
      "^([" + E(e) + "]+/)?[" + E(e) + "]+$"
    )
  }),
  noConsecutiveCharacters: (e) => {
    const t = e.split(" ").map((r) => {
      const i = r.split("");
      return `(?!.*\\${i[0]}\\${i[1]})`;
    }).join("");
    return {
      name: n.NO_CONSECUTIVE_CHARACTER.NAME,
      label: n.NO_CONSECUTIVE_CHARACTER.LABEL + ": " + s(e),
      pattern: new RegExp("^" + t)
    };
  },
  notContainCharacters: (e) => ({
    name: n.NOT_CONTAIN.NAME,
    label: n.NOT_CONTAIN.LABEL + ": " + s(e),
    pattern: new RegExp("^[^" + E(e) + "]+$")
  }),
  maxLengthBetweenDelimiters: (e, t, r) => ({
    name: "labelsLength",
    label: `Max length between two ${o.defaultTo(
      r,
      e
    )}: ${t}`,
    pattern: (i) => i.split(e).every((l) => l.length >= 1 && l.length <= t)
  }),
  mustNotBe: (e) => {
    const t = e.split(" ");
    return {
      name: n.MUST_NOT_BE.NAME,
      label: n.MUST_NOT_BE.LABEL + ": " + s(e),
      pattern: function(r) {
        return !o.includes(t, r);
      }
    };
  },
  length: (e, t = "") => {
    const r = Number.isSafeInteger(e.min) ? e.min : 0, i = Number.isSafeInteger(e.max) ? e.max : "";
    if (r || i) {
      const l = "Length – " + (r ? "min: " + e.min + "  " : "") + (i ? "max: " + e.max : "");
      return {
        name: "length",
        label: t + l,
        pattern: new RegExp("^[\\S\\s]{" + r + "," + i + "}$")
      };
    }
  },
  required: () => ({
    name: n.REQUIRED.NAME,
    label: n.REQUIRED.LABEL,
    pattern: new RegExp("\\S")
  })
}, m = {
  prefixedQualifiedName: [
    {
      name: "nameValidCharacters",
      label: `[Name] ${n.VALID_CHARACTERS.LABEL} : a–z, A–Z, 0–9, –, _, .`,
      pattern: /^([^/]+\/)?[\w.-]+$/
    },
    {
      name: "nameBeginEnd",
      label: `[Name] ${n.BEGIN_END_WITH.LABEL}: a–z, A–Z, 0–9`,
      pattern: /^([^/]+\/)?([A-Za-z0-9][^/]*)?[A-Za-z0-9]$/
    },
    {
      name: "nameMaxLength",
      label: "[Name] Max length - 63 characters",
      pattern: /^([^/]+\/)?[^/]{1,63}$/
    },
    {
      name: "prefixValidCharacters",
      label: `[Prefix] ${n.VALID_CHARACTERS.LABEL}: a–z, 0–9, –, .`,
      pattern: /^([a-z0-9.-]+\/)?[^/]+$/
    },
    {
      name: "prefixBeginEnd",
      label: `[Prefix] ${n.BEGIN_END_WITH.LABEL}: a–z, 0–9`,
      pattern: /^([a-z0-9]([^/]*[a-z0-9])?\/)?[^/]+$/
    },
    {
      name: "prefixMaxLength",
      label: "[Prefix] Max length - 253 characters",
      pattern: /^(?![^/]{254,}\/)/
    }
  ],
  k8sLabels: {
    getValue: (e = !1) => {
      let t = e ? "[Value] " : "";
      return [
        a.beginEndWith("a-z A-Z 0-9", t),
        a.length({ max: 63 }, t),
        a.validCharacters("a-z A-Z 0-9 - _ .", t)
      ];
    }
  }
  // email: [
  //   generateRule.beginEndNotWith('@ .'),
  //   {
  //     name: ValidationConstants.MUST_CONTAIN_EXACTLY_ONE.NAME,
  //     label: ValidationConstants.MUST_CONTAIN_EXACTLY_ONE.LABEL + ': @',
  //     pattern: /^[^@]+@[^@]+$/
  //   },
  //   {
  //     name: ValidationConstants.MUST_HAVE_DOT_AFTER_AT.NAME,
  //     label: ValidationConstants.MUST_HAVE_DOT_AFTER_AT.LABEL,
  //     pattern: /@.+\..+$/
  //   }
  // ]
};
m.k8sLabels.key = m.prefixedQualifiedName.concat({
  name: "prefixNotStart",
  label: "[Prefix] Must not start with 'kubernetes.io', 'k8s.io'",
  pattern: /^(?!kubernetes\.io\/)(?!k8s\.io\/)/
});
const N = {
  artifact: {
    name: [
      a.validCharacters("a-z A-Z 0-9 - _ ."),
      a.beginEndWith("a-z A-Z 0-9"),
      a.length({ max: 253 }),
      a.required()
    ],
    labels: {
      key: [
        a.notContainCharacters(":"),
        a.beginEndWith("a-z A-Z 0-9"),
        a.length({ max: 255 })
      ],
      value: [a.beginEndWith("a-z A-Z 0-9"), a.length({ max: 255 })]
    }
  },
  feature: {
    sets: {
      tag: [
        a.validCharacters("a-z A-Z 0-9 - _"),
        a.beginEndWith("a-z A-Z 0-9"),
        a.length({ max: 56 })
      ]
    },
    vector: {
      name: [
        a.validCharacters("a-z A-Z 0-9 - _ ."),
        a.beginEndWith("a-z A-Z 0-9"),
        a.length({ max: 56 }),
        a.required()
      ]
    }
  },
  function: {
    name: [
      a.validCharacters("a-z 0-9 - ."),
      a.beginEndWith("a-z 0-9"),
      a.length({ max: 63 }),
      a.required()
    ]
  },
  common: {
    name: [
      a.validCharacters("a-z A-Z 0-9 - _ ."),
      a.beginEndWith("a-z A-Z 0-9"),
      a.length({ max: 63 }),
      a.required()
    ],
    tag: [
      a.validCharacters("a-z A-Z 0-9 - _ ."),
      a.beginEndWith("a-z A-Z 0-9"),
      a.length({ max: 56 })
    ],
    combobox: [a.required()]
  },
  project: {
    name: [
      a.validCharacters("a-z 0-9 -"),
      a.beginWith("a-z"),
      a.endWith("a-z 0-9"),
      a.length({ max: 63 }),
      a.required()
    ],
    labels: {
      key: m.k8sLabels.key,
      value: m.k8sLabels.getValue(!0)
    },
    params: {
      key: [a.notContainCharacters("s")],
      value: [a.beginEndNotWith("s")]
    },
    secrets: {
      key: [a.validCharacters("a-z A-Z 0-9 - _ .")]
    }
  },
  nodeSelectors: {
    key: m.prefixedQualifiedName,
    value: m.k8sLabels.getValue(!1)
  },
  environmentVariables: {
    secretName: [
      a.validCharacters("a-z A-Z 0-9 - _ ."),
      a.beginEndWith("a-z A-Z 0-9"),
      a.noConsecutiveCharacters(".., .–, –."),
      a.maxLengthBetweenDelimiters(/[.\-_]/, 63, "periods"),
      a.length({ max: 253 }),
      a.required()
    ],
    secretKey: [
      a.validCharacters("a-z A-Z 0-9 - _ ."),
      a.beginNotWith("."),
      a.length({ max: 253 })
    ]
  },
  job: {
    label: {
      key: [
        a.validCharactersWithPrefix("a-z A-Z 0-9 - _ ."),
        a.beginEndWith("a-z A-Z 0-9"),
        a.length({ max: 75 })
      ],
      value: a.length({ max: 255 })
    }
  }
}, p = (e, t) => o.chain(N).get(e).defaultTo([]).cloneDeep().concat(o.defaultTo(t, [])).value(), x = (e = []) => ({
  name: "customLabels",
  label: "System-defined labels cannot be modified.",
  pattern: (t) => !e.includes(t)
});
export {
  g as checkPatternsValidity,
  _ as checkPatternsValidityAsync,
  x as getInternalLabelsValidationRule,
  p as getValidationRules,
  b as required
};
//# sourceMappingURL=validation.util.mjs.map
