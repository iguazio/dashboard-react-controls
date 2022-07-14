import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import classNames from 'classnames'

import './FormRadio.scss'

const FormRadio = ({ children, className, id, name, label, ...inputProps }) => {
  const formFieldClassNames = classNames('form-field form-field-radio', className)

  return (
    <Field name={name} type="radio" value={id}>
      {({ input }) => (
        <div className={formFieldClassNames}>
          <input
            {...{
              id,
              ...inputProps,
              ...input
            }}
          />
          <label data-testid="value" htmlFor={id}>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default React.memo(FormRadio)
