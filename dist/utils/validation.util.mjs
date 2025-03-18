import lodash, { isEmpty } from "lodash";
import { validation } from "../constants.mjs";
const convertToLabel = (chars) => {
  return chars.replace(/-/g, "–").replace(/\s/g, ", ").replace(/\bs\b/, "spaces");
};
const convertToPattern = (chars) => {
  return chars.split(" ").map((patternItem) => patternItem.length === 1 ? "\\" + patternItem : patternItem).join("");
};
const hasInvalidRule = (newRules) => {
  return lodash.some(newRules, ["isValid", false]);
};
const required = (validationMsg = "Required") => (value) => {
  let isValid = value.trim() !== "" && typeof value === "string";
  return [isValid, validationMsg];
};
const checkPatternsValidity = (validationRules2, value = "", required2 = true) => {
  const newRules = !required2 && isEmpty(value) ? validationRules2 : validationRules2.filter((rule) => !rule.async).map((rule) => {
    return {
      ...rule,
      isValid: lodash.isFunction(rule.pattern) ? rule.pattern(value) : (
        /* else, it is a RegExp */
        rule.pattern.test(value)
      )
    };
  });
  return [newRules, !hasInvalidRule(newRules)];
};
const checkPatternsValidityAsync = async (validationRules2, value) => {
  const [newRules] = checkPatternsValidity(validationRules2, value);
  const asyncRules = await Promise.all(
    validationRules2.filter((rule) => rule.async).map(async (rule) => ({
      ...rule,
      isValid: await rule.pattern(value)
    }))
  );
  const allRules = newRules.concat(asyncRules);
  return [allRules, !hasInvalidRule(allRules)];
};
const generateRule = {
  beginWith: (chars) => {
    return {
      name: validation.BEGIN_WITH.NAME,
      label: validation.BEGIN_WITH.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^[" + convertToPattern(chars) + "]")
    };
  },
  beginNotWith: (chars) => {
    return {
      name: validation.BEGIN_NOT_WITH.NAME,
      label: validation.BEGIN_NOT_WITH.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^[^" + convertToPattern(chars) + "]")
    };
  },
  endWith: (chars) => {
    return {
      name: validation.END_WITH.NAME,
      label: validation.END_WITH.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("[" + convertToPattern(chars) + "]$")
    };
  },
  endNotWith: (chars) => {
    return {
      name: validation.END_NOT_WITH.NAME,
      label: validation.END_NOT_WITH.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("[^" + convertToPattern(chars) + "]$")
    };
  },
  beginEndWith: (chars, labelPrefix = "") => {
    const convertedPattern = convertToPattern(chars);
    return {
      name: validation.BEGIN_END_WITH.NAME,
      label: labelPrefix + validation.BEGIN_END_WITH.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^([" + convertedPattern + "].*)?[" + convertedPattern + "]$")
    };
  },
  beginEndNotWith: (chars) => {
    const convertedPattern = convertToPattern(chars);
    return {
      name: validation.BEGIN_END_NOT_WITH.NAME,
      label: validation.BEGIN_END_NOT_WITH.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^([^" + convertedPattern + "].*)?[^" + convertedPattern + "]$")
    };
  },
  onlyAtTheBeginning: (chars) => {
    const convertedPattern = convertToPattern(chars);
    return {
      name: validation.ONLY_AT_THE_BEGINNING.NAME,
      label: validation.ONLY_AT_THE_BEGINNING.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^([" + convertedPattern + "])?[^" + convertedPattern + "]+$")
    };
  },
  validCharacters: (chars, labelPrefix = "") => {
    return {
      name: validation.VALID_CHARACTERS.NAME,
      label: labelPrefix + validation.VALID_CHARACTERS.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^[" + convertToPattern(chars) + "]+$")
    };
  },
  validCharactersWithPrefix: (chars) => {
    return {
      name: validation.VALID_CHARACTERS_WITH_REFIX.NAME,
      label: validation.VALID_CHARACTERS_WITH_REFIX.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp(
        "^([" + convertToPattern(chars) + "]+/)?[" + convertToPattern(chars) + "]+$"
      )
    };
  },
  noConsecutiveCharacters: (chars) => {
    const convertedPattern = chars.split(" ").map((charPair) => {
      const charsPairArray = charPair.split("");
      return `(?!.*\\${charsPairArray[0]}\\${charsPairArray[1]})`;
    }).join("");
    return {
      name: validation.NO_CONSECUTIVE_CHARACTER.NAME,
      label: validation.NO_CONSECUTIVE_CHARACTER.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^" + convertedPattern)
    };
  },
  notContainCharacters: (chars) => {
    return {
      name: validation.NOT_CONTAIN.NAME,
      label: validation.NOT_CONTAIN.LABEL + ": " + convertToLabel(chars),
      pattern: new RegExp("^[^" + convertToPattern(chars) + "]+$")
    };
  },
  maxLengthBetweenDelimiters: (delimiter, maxLength, delimiterDescription) => {
    return {
      name: "labelsLength",
      label: `Max length between two ${lodash.defaultTo(
        delimiterDescription,
        delimiter
      )}: ${maxLength}`,
      pattern: (value) => {
        return value.split(delimiter).every((item) => {
          return item.length >= 1 && item.length <= maxLength;
        });
      }
    };
  },
  mustNotBe: (words) => {
    const wordsArray = words.split(" ");
    return {
      name: validation.MUST_NOT_BE.NAME,
      label: validation.MUST_NOT_BE.LABEL + ": " + convertToLabel(words),
      pattern: function(value) {
        return !lodash.includes(wordsArray, value);
      }
    };
  },
  length: (options, labelPrefix = "") => {
    const min = Number.isSafeInteger(options.min) ? options.min : 0;
    const max = Number.isSafeInteger(options.max) ? options.max : "";
    if (min || max) {
      const label = "Length – " + (min ? "min: " + options.min + "  " : "") + (max ? "max: " + options.max : "");
      return {
        name: "length",
        label: labelPrefix + label,
        pattern: new RegExp("^[\\S\\s]{" + min + "," + max + "}$")
      };
    }
  },
  required: () => {
    return {
      name: validation.REQUIRED.NAME,
      label: validation.REQUIRED.LABEL,
      pattern: new RegExp("\\S")
    };
  }
};
const commonRules = {
  prefixedQualifiedName: [
    {
      name: "nameValidCharacters",
      label: `[Name] ${validation.VALID_CHARACTERS.LABEL} : a–z, A–Z, 0–9, –, _, .`,
      pattern: /^([^/]+\/)?[\w.-]+$/
    },
    {
      name: "nameBeginEnd",
      label: `[Name] ${validation.BEGIN_END_WITH.LABEL}: a–z, A–Z, 0–9`,
      pattern: /^([^/]+\/)?([A-Za-z0-9][^/]*)?[A-Za-z0-9]$/
    },
    {
      name: "nameMaxLength",
      label: "[Name] Max length - 63 characters",
      pattern: /^([^/]+\/)?[^/]{1,63}$/
    },
    {
      name: "prefixValidCharacters",
      label: `[Prefix] ${validation.VALID_CHARACTERS.LABEL}: a–z, 0–9, –, .`,
      pattern: /^([a-z0-9.-]+\/)?[^/]+$/
    },
    {
      name: "prefixBeginEnd",
      label: `[Prefix] ${validation.BEGIN_END_WITH.LABEL}: a–z, 0–9`,
      pattern: /^([a-z0-9]([^/]*[a-z0-9])?\/)?[^/]+$/
    },
    {
      name: "prefixMaxLength",
      label: "[Prefix] Max length - 253 characters",
      pattern: /^(?![^/]{254,}\/)/
    }
  ],
  k8sLabels: {
    getValue: (withPrefix = false) => {
      let labelPrefix = withPrefix ? "[Value] " : "";
      return [
        generateRule.beginEndWith("a-z A-Z 0-9", labelPrefix),
        generateRule.length({ max: 63 }, labelPrefix),
        generateRule.validCharacters("a-z A-Z 0-9 - _ .", labelPrefix)
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
commonRules.k8sLabels.key = commonRules.prefixedQualifiedName.concat({
  name: "prefixNotStart",
  label: "[Prefix] Must not start with 'kubernetes.io', 'k8s.io'",
  pattern: /^(?!kubernetes\.io\/)(?!k8s\.io\/)/
});
const validationRules = {
  artifact: {
    name: [
      generateRule.validCharacters("a-z A-Z 0-9 - _ ."),
      generateRule.beginEndWith("a-z A-Z 0-9"),
      generateRule.length({ max: 253 }),
      generateRule.required()
    ],
    labels: {
      key: [
        generateRule.notContainCharacters(":"),
        generateRule.beginEndWith("a-z A-Z 0-9"),
        generateRule.length({ max: 255 })
      ],
      value: [generateRule.beginEndWith("a-z A-Z 0-9"), generateRule.length({ max: 255 })]
    }
  },
  feature: {
    sets: {
      tag: [
        generateRule.validCharacters("a-z A-Z 0-9 - _"),
        generateRule.beginEndWith("a-z A-Z 0-9"),
        generateRule.length({ max: 56 })
      ]
    },
    vector: {
      name: [
        generateRule.validCharacters("a-z A-Z 0-9 - _ ."),
        generateRule.beginEndWith("a-z A-Z 0-9"),
        generateRule.length({ max: 56 }),
        generateRule.required()
      ]
    }
  },
  function: {
    name: [
      generateRule.validCharacters("a-z 0-9 - ."),
      generateRule.beginEndWith("a-z 0-9"),
      generateRule.length({ max: 63 }),
      generateRule.required()
    ]
  },
  common: {
    name: [
      generateRule.validCharacters("a-z A-Z 0-9 - _ ."),
      generateRule.beginEndWith("a-z A-Z 0-9"),
      generateRule.length({ max: 63 }),
      generateRule.required()
    ],
    tag: [
      generateRule.validCharacters("a-z A-Z 0-9 - _ ."),
      generateRule.beginEndWith("a-z A-Z 0-9"),
      generateRule.length({ max: 56 })
    ],
    combobox: [generateRule.required()]
  },
  project: {
    name: [
      generateRule.validCharacters("a-z 0-9 -"),
      generateRule.beginWith("a-z"),
      generateRule.endWith("a-z 0-9"),
      generateRule.length({ max: 63 }),
      generateRule.required()
    ],
    labels: {
      key: commonRules.k8sLabels.key,
      value: commonRules.k8sLabels.getValue(true)
    },
    params: {
      key: [generateRule.notContainCharacters("s")],
      value: [generateRule.beginEndNotWith("s")]
    },
    secrets: {
      key: [generateRule.validCharacters("a-z A-Z 0-9 - _ .")]
    }
  },
  nodeSelectors: {
    key: commonRules.prefixedQualifiedName,
    value: commonRules.k8sLabels.getValue(false)
  },
  environmentVariables: {
    secretName: [
      generateRule.validCharacters("a-z A-Z 0-9 - _ ."),
      generateRule.beginEndWith("a-z A-Z 0-9"),
      generateRule.noConsecutiveCharacters(".., .–, –."),
      generateRule.maxLengthBetweenDelimiters(/[.\-_]/, 63, "periods"),
      generateRule.length({ max: 253 }),
      generateRule.required()
    ],
    secretKey: [
      generateRule.validCharacters("a-z A-Z 0-9 - _ ."),
      generateRule.beginNotWith("."),
      generateRule.length({ max: 253 })
    ]
  },
  job: {
    label: {
      key: [
        generateRule.validCharactersWithPrefix("a-z A-Z 0-9 - _ ."),
        generateRule.beginEndWith("a-z A-Z 0-9"),
        generateRule.length({ max: 75 })
      ],
      value: generateRule.length({ max: 255 })
    }
  }
};
const getValidationRules = (type, additionalRules) => {
  return lodash.chain(validationRules).get(type).defaultTo([]).cloneDeep().concat(lodash.defaultTo(additionalRules, [])).value();
};
const getInternalLabelsValidationRule = (internalLabels = []) => {
  return {
    name: "customLabels",
    label: "System-defined labels cannot be modified.",
    pattern: (value) => {
      return !internalLabels.includes(value);
    }
  };
};
export {
  checkPatternsValidity,
  checkPatternsValidityAsync,
  getInternalLabelsValidationRule,
  getValidationRules,
  required
};
//# sourceMappingURL=validation.util.mjs.map
