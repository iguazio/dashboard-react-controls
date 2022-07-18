import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import classNames from 'classnames'

import './FormRadio.scss'

const FormRadio = ({ children, className, name, label, ...inputProps }) => {
  const formFieldClassNames = classNames('form-field form-field-radio', className)

  return (
    <Field name={name} value={inputProps.value} type="radio">
      {({ input }) => (
        <div className={formFieldClassNames}>
          <input
            {...{
              ...input,
              ...inputProps
            }}
            id={inputProps.id ?? inputProps.value ?? name}
          />
          <label data-testid="value" htmlFor={inputProps.id ?? inputProps.value ?? name}>
            {label ? label : ''}
            {children}
          </label>
        </div>
      )}
    </Field>
  )
}

FormRadio.defaultProps = {
  className: '',
  label: ''
}

FormRadio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default React.memo(FormRadio)
