import { set } from 'lodash'

export const setFieldState = (args, state) => {
  let fieldName = args[0]
  let states = args[1]
  let field = state.fields[fieldName]

  if (field) {
    for (let stateName in states) {
      set(field, stateName, states[stateName])
    }
  }
}
