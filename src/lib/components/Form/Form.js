import React from 'react'
import PropTypes from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

const Form = ({ children, initialValues, onSubmit, ...formProps }) => {
  return (
    <FinalForm initialValues={initialValues} onSubmit={onSubmit} {...formProps}>
      {children}
    </FinalForm>
  )
}

Form.defaultProps = {
  initialValues: {}
}

Form.propsTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default Form
