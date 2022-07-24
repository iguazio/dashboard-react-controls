import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import classNames from 'classnames'

import './formCheckBox.scss'

const FormCheckBox = ({ children, className, name, ...inputProps }) => {
  const formFieldClassNames = classNames('form-field-checkbox', className)

  return (
    <Field name={name} value={inputProps.value} type="checkbox">
      {({ input }) => (
        <div className={formFieldClassNames}>
          <input
            {...{
              ...input,
              ...inputProps
            }}
            id={inputProps.value ?? name}
          />
          <label htmlFor={inputProps.value ?? name}>
            {inputProps.label && inputProps.label}
            {children}
          </label>
        </div>
      )}
    </Field>
  )
}

FormCheckBox.defaultProps = {
  className: ''
}

FormCheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default React.memo(FormCheckBox)
