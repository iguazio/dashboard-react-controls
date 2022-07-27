import { useRef } from 'react'
import PropTypes from 'prop-types'
import { FormSpy, Field } from 'react-final-form'
import { OnChange } from 'react-final-form-listeners'

import FormCheckBox from './FormCheckBox'

import './FormCheckBoxAll.scss'

const FormCheckBoxAll = ({ name, listenTo, allCheckboxes, ...inputProps }) => {
  // const allCheckboxes = Array.from(document.querySelectorAll(`input[name=${listenTo}]`)).map(
  //   i => i.value
  // )
  const checkAllRef = useRef()

  return (
    <Field name={name}>
      {({ input }) => {
        return (
          <FormSpy subscription={{}}>
            {({ form }) => (
              <>
                <OnChange name={listenTo}>
                  {(value) => {
                    if (value && value.length > 0) {
                      if (value.length !== allCheckboxes.length) {
                        checkAllRef.current.classList.add('partial-select')
                      } else {
                        checkAllRef.current.className = ''
                        input.onChange(true)
                      }
                    } else {
                      checkAllRef.current.className = ''
                      input.onChange(false)
                    }
                  }}
                </OnChange>

                <OnChange name={name}>
                  {(value) => {
                    if (!value && checkAllRef.current.classList.contains('partial-select')) {
                      return form.change(listenTo, allCheckboxes)
                    }
                    return form.change(listenTo, value ? allCheckboxes : [])
                  }}
                </OnChange>
                <FormCheckBox name={name} ref={checkAllRef} {...inputProps} />
              </>
            )}
          </FormSpy>
        )
      }}
    </Field>
  )
}

FormCheckBoxAll.defaultProps = {
  name: 'selectAll'
}

FormCheckBoxAll.propTypes = {
  allCheckboxes: PropTypes.arrayOf(PropTypes.string).isRequired,
  listenTo: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default FormCheckBoxAll
