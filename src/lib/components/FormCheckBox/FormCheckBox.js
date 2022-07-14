import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import classNames from 'classnames'

import './formCheckBox.scss'

const FormCheckBox = ({ children, className, id, name, label, ...inputProps }) => {
  const formFieldClassNames = classNames('form-field form-field-checkbox', className)

  return (
    <Field name={name} type="checkbox" value={id}>
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

FormCheckBox.defaultProps = {
  className: '',
  label: ''
}

FormCheckBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default React.memo(FormCheckBox)
