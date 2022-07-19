import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import classNames from 'classnames'

import './FormRadio.scss'

const FormRadio = ({ className, name, label, ...inputProps }) => {
  const formFieldClassNames = classNames('form-field-radio', className)

  return (
    <Field name={name} value={inputProps.value} type="radio">
      {({ input }) => (
        <div className={formFieldClassNames}>
          <input
            {...{
              ...input,
              ...inputProps
            }}
            id={inputProps.value}
          />
          <label htmlFor={inputProps.value}>{label}</label>
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
  label: PropTypes.string.isRequired
}

export default React.memo(FormRadio)
