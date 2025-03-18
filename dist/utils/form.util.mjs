import { set, isEqual } from "lodash";
const setFieldState = (args, state) => {
  let fieldName = args[0];
  let states = args[1];
  let field = state.fields[fieldName];
  if (field) {
    for (let stateName in states) {
      set(field, stateName, states[stateName]);
    }
  }
};
const areFormValuesChanged = (initialValues, values) => {
  const replacer = (key, value) => {
    if (value === "") {
      return void 0;
    }
    return value;
  };
  return !isEqual(JSON.stringify(initialValues, replacer), JSON.stringify(values, replacer));
};
const generateObjectFromKeyValue = (keyValueList = []) => {
  return keyValueList.reduce((acc, keyValue) => {
    acc[keyValue.data.key] = keyValue.data.value;
    return acc;
  }, {});
};
const parseObjectToKeyValue = (object = {}) => {
  return Object.entries(object).map(([key, value]) => {
    return {
      data: {
        key,
        value
      }
    };
  });
};
const isSubmitDisabled = (formState) => {
  return formState.submitting || formState.invalid && formState.submitFailed;
};
export {
  areFormValuesChanged,
  generateObjectFromKeyValue,
  isSubmitDisabled,
  parseObjectToKeyValue,
  setFieldState
};
//# sourceMappingURL=form.util.mjs.map
