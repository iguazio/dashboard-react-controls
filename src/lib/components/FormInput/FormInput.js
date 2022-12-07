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
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { debounce, isEmpty, isEqual, isNil } from 'lodash'
import { Field } from 'react-final-form'

import InputNumberButtons from './InputNumberButtons/InputNumberButtons'
import OptionsMenu from '../../elements/OptionsMenu/OptionsMenu'
import { TextTooltipTemplate, Tip, Tooltip } from '../../components'
import ValidationTemplate from '../../elements/ValidationTemplate/ValidationTemplate'

import { useDebounce } from '../../hooks/useDebounce'
import { checkPatternsValidity } from '../../utils/validation.util'
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick'

import { INPUT_LINK, INPUT_VALIDATION_RULES } from '../../types'

import { ReactComponent as InvalidIcon } from '../../images/invalid.svg'
import { ReactComponent as Popout } from '../../images/popout.svg'
import { ReactComponent as WarningIcon } from '../../images/warning.svg'

import './formInput.scss'

const FormInput = React.forwardRef(
  (
    {
      async,
      className,
      density,
      disabled,
      focused,
      iconClass,
      inputIcon,
      invalidText,
      label,
      link,
      name,
      onBlur,
      onChange,
      pattern,
      required,
      suggestionList,
      tip,
      validationRules: rules,
      validator,
      withoutBorder,
      ...inputProps
    },
    ref
  ) => {
    const [fieldMeta, setFieldMeta] = useState({})
    const [fieldInput, setFieldInput] = useState({})
    const [isInvalid, setIsInvalid] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [typedValue, setTypedValue] = useState('')
    const [validationPattern] = useState(RegExp(pattern))
    const [validationRules, setValidationRules] = useState(rules)
    const [showValidationRules, setShowValidationRules] = useState(false)
    const wrapperRef = useRef()
    ref ??= wrapperRef
    const inputRef = useRef()
    const errorsRef = useRef()
    useDetectOutsideClick(ref, () => setShowValidationRules(false))

    const formFieldClassNames = classNames('form-field-input', className)

    const inputWrapperClassNames = classNames(
      'form-field__wrapper',
      `form-field__wrapper-${density}`,
      disabled && 'form-field__wrapper-disabled',
      isInvalid && 'form-field__wrapper-invalid',
      withoutBorder && 'without-border'
    )

    const labelClassNames = classNames(
      'form-field__label',
      disabled && 'form-field__label-disabled'
    )

    useEffect(() => {
      setTypedValue(String(fieldInput.value)) // convert from number to string
    }, [fieldInput.value])

    useEffect(() => {
      setIsInvalid(
        errorsRef.current ||
          (fieldMeta.invalid &&
            (fieldMeta.validating ||
              fieldMeta.modified ||
              (fieldMeta.submitFailed && fieldMeta.touched)))
      )
    }, [
      errorsRef.current,
      fieldMeta.invalid,
      fieldMeta.modified,
      fieldMeta.submitFailed,
      fieldMeta.touched,
      fieldMeta.validating
    ])

    useEffect(() => {
      if (!errorsRef.current) {
        if (fieldMeta.valid && showValidationRules) {
          setShowValidationRules(false)
        }
      }
    }, [errorsRef.current, fieldMeta.valid, showValidationRules])

    useEffect(() => {
      if (showValidationRules) {
        window.addEventListener('scroll', handleScroll, true)
      }
      return () => {
        window.removeEventListener('scroll', handleScroll, true)
      }
    }, [showValidationRules])

    useEffect(() => {
      if (focused) {
        inputRef.current.focus()
      }
    }, [focused])

    useEffect(() => {
      setValidationRules(() =>
        rules.map((rule) => ({
          ...rule,
          isValid:
            !fieldMeta.error || !Array.isArray(fieldMeta.error)
              ? true
              : !fieldMeta.error.some((err) => err.name === rule.name)
        }))
      )
    }, [fieldMeta.error, rules])

    const getValidationRules = () => {
      return validationRules.map(({ isValid = false, label, name }) => {
        return <ValidationTemplate valid={isValid} validationMessage={label} key={name} />
      })
    }

    const handleInputBlur = (event) => {
      fieldInput.onBlur && fieldInput.onBlur(event)

      if (!event.relatedTarget || !event.relatedTarget?.closest('.form-field__suggestion-list')) {
        setIsFocused(false)
        onBlur && onBlur(event)
      }
    }
    const handleInputFocus = (event) => {
      fieldInput.onFocus && fieldInput.onFocus(event)
      setIsFocused(true)
    }

    const handleScroll = (event) => {
      if (inputRef.current.contains(event.target)) return

      if (
        !event.target.closest('.options-menu') &&
        !event.target.classList.contains('form-field-input')
      ) {
        setShowValidationRules(false)
      }
    }

    const handleSuggestionClick = (item) => {
      fieldInput.onChange && fieldInput.onChange(item)
      setIsFocused(false)
      onBlur()
    }

    const toggleValidationRulesMenu = () => {
      inputRef.current.focus()
      setShowValidationRules((state) => !state)
    }

    const validateField = async (value, allValues) => {
      let valueToValidate = isNil(value) ? '' : String(value)
      if ((!valueToValidate && !required) || disabled) return

      let validationError = null

      if (!isEmpty(rules)) {
        const [newRules, isValidField] = await checkPatternsValidity(rules, valueToValidate)
        const invalidRules = newRules.filter((rule) => !rule.isValid)

        if (!isValidField) {
          validationError = invalidRules.map((rule) => ({ name: rule.name, label: rule.label }))
        }
      }

      if (isEmpty(validationError)) {
        if (inputProps.type === 'number') {
          if (inputProps.max && +valueToValidate > +inputProps.max) {
            validationError = {
              name: 'maxValue',
              label: `The maximum value should be ${inputProps.max}`
            }
          }

          if (inputProps.min && +valueToValidate < +inputProps.min) {
            validationError = {
              name: 'minValue',
              label: `The minimum value should be ${inputProps.min}`
            }
          }
        }
        if (pattern && !validationPattern.test(valueToValidate)) {
          validationError = { name: 'pattern', label: invalidText }
        } else if (valueToValidate.startsWith(' ')) {
          validationError = { name: 'empty', label: invalidText }
        } else if (required && valueToValidate.trim().length === 0) {
          validationError = { name: 'required', label: 'This field is required' }
        }
      }

      if (!validationError && validator) {
        validationError = validator(value, allValues)
      }

      errorsRef.current = validationError
      return validationError
    }

    const parseField = (val) => {
      if (!val) return
      return inputProps.type === 'number' ? +val : val
    }

    const setFieldData = debounce((input, meta) => {
      if (!isEqual(meta, fieldMeta)) {
        setFieldMeta(meta)
      }

      if (!isEqual(input, fieldInput)) {
        setFieldInput(input)
      }
    }, 50)

    return (
      <Field
        validate={async ? useDebounce(validateField, 400) : validateField}
        name={name}
        parse={parseField}
      >
        {({ input, meta }) => {
          setFieldData(input, meta)

          return (
            <div ref={ref} className={formFieldClassNames}>
              {label && (
                <div className={labelClassNames}>
                  <label data-testid="label" htmlFor={input.name}>
                    {label}
                    {(required || validationRules.find((rule) => rule.name === 'required')) && (
                      <span className="form-field__label-mandatory"> *</span>
                    )}
                  </label>
                  {link && link.show && typedValue.trim() && (
                    <div className="form-field__label-icon">
                      <Tooltip template={<TextTooltipTemplate text={link.url || typedValue} />}>
                        <a
                          href={link.url || typedValue}
                          onClick={(event) => event.stopPropagation()}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Popout />
                        </a>
                      </Tooltip>
                    </div>
                  )}
                </div>
              )}
              <div className={inputWrapperClassNames}>
                <div className="form-field__control">
                  <input
                    data-testid="input"
                    id={input.name}
                    ref={inputRef}
                    required={isInvalid || required}
                    {...{
                      disabled,
                      pattern,
                      ...inputProps,
                      ...input
                    }}
                    autoComplete={inputProps.autocomplete ?? 'off'}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                  />
                </div>
                <div className="form-field__icons">
                  {isInvalid && !Array.isArray(meta.error) && (
                    <Tooltip
                      className="form-field__warning"
                      template={
                        <TextTooltipTemplate text={meta.error?.label ?? invalidText} warning />
                      }
                    >
                      <InvalidIcon />
                    </Tooltip>
                  )}
                  {isInvalid && Array.isArray(meta.error) && (
                    <button className="form-field__warning" onClick={toggleValidationRulesMenu}>
                      <WarningIcon />
                    </button>
                  )}
                  {tip && <Tip text={tip} className="form-field__tip" />}
                  {inputIcon && (
                    <span data-testid="input-icon" className={iconClass}>
                      {inputIcon}
                    </span>
                  )}
                </div>
                {inputProps.type === 'number' && (
                  <InputNumberButtons {...{ ...inputProps, ...input, disabled }} />
                )}
              </div>
              {suggestionList?.length > 0 && isFocused && (
                <ul className="form-field__suggestion-list">
                  {suggestionList.map((item, index) => {
                    return (
                      <li
                        className="suggestion-item"
                        key={`${item}${index}`}
                        onClick={() => {
                          handleSuggestionClick(item)
                        }}
                        tabIndex={index}
                        dangerouslySetInnerHTML={{
                          __html: item.replace(new RegExp(typedValue, 'gi'), (match) =>
                            match ? `<b>${match}</b>` : match
                          )
                        }}
                      />
                    )
                  })}
                </ul>
              )}
              {!isEmpty(validationRules) && (
                <OptionsMenu show={showValidationRules} ref={ref}>
                  {getValidationRules()}
                </OptionsMenu>
              )}
            </div>
          )
        }}
      </Field>
    )
  }
)

FormInput.defaultProps = {
  className: '',
  density: 'normal',
  disabled: false,
  focused: false,
  iconClass: '',
  inputIcon: null,
  invalidText: 'This field is invalid',
  label: '',
  link: { show: '', value: '' },
  min: null,
  max: null,
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  pattern: null,
  placeholder: '',
  required: false,
  step: 1,
  suggestionList: [],
  tip: '',
  type: 'text',
  validationRules: [],
  validator: () => {},
  value: '',
  withoutBorder: false
}

FormInput.propTypes = {
  className: PropTypes.string,
  density: PropTypes.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  iconClass: PropTypes.string,
  inputIcon: PropTypes.element,
  invalidText: PropTypes.string,
  label: PropTypes.string,
  link: INPUT_LINK,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  step: PropTypes.number,
  suggestionList: PropTypes.arrayOf(PropTypes.string),
  tip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  validationRules: INPUT_VALIDATION_RULES,
  validator: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withoutBorder: PropTypes.bool
}

export default React.memo(FormInput)
