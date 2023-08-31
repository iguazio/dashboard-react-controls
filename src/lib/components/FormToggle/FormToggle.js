/*
Copyright 2022 Iguazio Systems Ltd.
Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.
In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/
import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import './formToggle.scss'

const FormToggle = ({ className, density, label, name, onChange, readOnly, ...inputProps }) => {
  const toggleWrapperClassNames = classnames(
    'form-field__wrapper',
    `form-field__wrapper-${density}`
  )

  return (
    <Field name={name} value={inputProps.value} type="checkbox">
      {({ input }) => {
        const toggleClassName = classnames(
          'form-field-toggle',
          className,
          readOnly && 'form-field_readonly',
          input.checked && 'form-field_checked'
        )

        return (
          <label className={toggleClassName}>
            <input
              data-testid="toggle"
              id={name}
              {...{ ...input, ...inputProps }}
              onChange={(event) => {
                onChange && onChange(event)
                input.onChange(event)
              }}
              type="checkbox"
            />
            {label && <div className="form-field__label">{label}</div>}
            <div className={toggleWrapperClassNames}>
              <div className="form-field-toggle__switch">
                <span className="form-field-toggle__switch-button" />
              </div>
            </div>
          </label>
        )
      }}
    </Field>
  )
}

FormToggle.defaultProps = {
  className: '',
  label: '',
  onChange: () => {},
  readOnly: false
}

FormToggle.propTypes = {
  className: PropTypes.string,
  density: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
}

export default FormToggle
