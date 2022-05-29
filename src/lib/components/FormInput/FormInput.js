import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isEmpty } from 'lodash'
import { Field, useField } from 'react-final-form'

import OptionsMenu from '../../elements/OptionsMenu/OptionsMenu'
import TextTooltipTemplate from '../TooltipTemplate/TextTooltipTemplate'
import Tip from '../Tip/Tip'
import Tooltip from '../Tooltip/Tooltip'
import ValidationTemplate from '../../elements/ValidationTemplate/ValidationTemplate'

import { checkPatternsValidity } from '../../utils/validationService'
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick'

import { INPUT_LINK, INPUT_VALIDATION_RULES } from '../../types'

import { ReactComponent as InvalidIcon } from '../../images/invalid.svg'
import { ReactComponent as Popout } from '../../images/popout.svg'
import { ReactComponent as WarningIcon } from '../../images/warning.svg'

import './formInput.scss'

const FormInput = React.forwardRef(
  (
    {
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
      validationRules,
      validator,
      withoutBorder,
      ...inputProps
    },
    ref
  ) => {
    const { input, meta } = useField(name)
    const [isInvalid, setIsInvalid] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [typedValue, setTypedValue] = useState('')
    const [validationPattern] = useState(RegExp(pattern))
    const [showValidationRules, setShowValidationRules] = useState(false)
    const wrapperRef = useRef()
    ref ??= wrapperRef
    const inputRef = useRef()
    useDetectOutsideClick(ref, () => setShowValidationRules(false))

    const inputClassNames = classnames(
      'form-field__input',
      className,
      `form-field__input-${density}`,
      isInvalid && 'form-field__input-invalid',
      // isInvalid && 'input_rules-invalid',
      withoutBorder && 'without-border'
    )
    const labelClassNames = classnames(
      'form-field__label',
      disabled && 'form-field__label-disabled'
    )

    useEffect(() => {
      setTypedValue(String(input.value)) // convert from number to string
    }, [input.value])

    useEffect(() => {
      setIsInvalid(
        meta.invalid && (meta.validating || meta.modified || (meta.submitFailed && meta.touched))
      )
    }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating])

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

    const getValidationRules = (rules) => {
      return rules.map(({ isValid = false, label, name }) => {
        return <ValidationTemplate valid={isValid} validationMessage={label} key={name} />
      })
    }

    const handleInputBlur = (event) => {
      input.onBlur(event)

      if (!event.relatedTarget || !event.relatedTarget?.closest('.suggestion-list')) {
        setIsFocused(false)
        onBlur && onBlur(event)
      }
    }

    const handleInputChange = (event) => {
      input.onChange(event)
      onChange && onChange(event.target.value)
    }

    const handleInputFocus = (event) => {
      input.onFocus(event)
      setIsFocused(true)
    }

    const handleScroll = (event) => {
      if (
        !event.target.closest('.options-menu') &&
        !event.target.classList.contains('form-field')
      ) {
        setShowValidationRules(false)
      }
    }

    const handleSuggestionClick = (item) => {
      input.onChange && input.onChange(item)
      setIsFocused(false)
      onBlur()
    }

    const toggleValidationRulesMenu = () => {
      inputRef.current.focus()
      setShowValidationRules(!showValidationRules)
    }

    const validateField = (value) => {
      const valueToValidate = value ?? ''
      let validationError = null

      if (!isEmpty(validationRules)) {
        const [newRules, isValidField] = checkPatternsValidity(validationRules, valueToValidate)

        if (!isValidField) {
          validationError = newRules
        }

        if ((isValidField && showValidationRules) || (required && valueToValidate === '')) {
          setShowValidationRules(false)
        }
      }

      if (!validationError) {
        if (pattern && !validationPattern.test(valueToValidate)) {
          validationError = { name: 'pattern', label: invalidText }
        } else if (valueToValidate.startsWith(' ')) {
          validationError = { name: 'empty', label: invalidText }
        } else if (required && valueToValidate.trim().length === 0) {
          validationError = { name: 'required', label: 'This field is required' }
        }
      }

      if (!validationError && validator) {
        validationError = validator(value)
      }
      return validationError
    }

    return (
      <Field validate={validateField} name={name}>
        {({ input, meta }) => (
          <div ref={ref} className="form-field">
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
            <div className="form-field__wrapper">
              <input
                data-testid="input"
                id={input.name}
                className={inputClassNames}
                ref={inputRef}
                required={isInvalid}
                {...{
                  disabled,
                  pattern,
                  ...inputProps,
                  ...input
                }}
                autoComplete={inputProps.autocomplete ?? 'off'}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />
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
                {isInvalid && Array.isArray(meta.error) && !isEmpty(meta.error) && (
                  <i className="form-field__warning" onClick={toggleValidationRulesMenu}>
                    <WarningIcon />
                  </i>
                )}
                {tip && <Tip text={tip} className="form-field__tip" />}
                {inputIcon && (
                  <span data-testid="input-icon" className={iconClass}>
                    {inputIcon}
                  </span>
                )}
              </div>
            </div>
            {suggestionList?.length > 0 && isFocused && (
              <ul className="suggestion-list">
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
            {isInvalid && Array.isArray(meta.error) && !isEmpty(meta.error) && (
              <OptionsMenu show={showValidationRules} parentElement={ref}>
                {getValidationRules(meta.error)}
              </OptionsMenu>
            )}
          </div>
        )}
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
  maxLength: null,
  min: null,
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  pattern: null,
  placeholder: '',
  required: false,
  step: '',
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
  maxLength: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  step: PropTypes.string,
  suggestionList: PropTypes.arrayOf(PropTypes.string),
  tip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  validationRules: INPUT_VALIDATION_RULES,
  validator: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withoutBorder: PropTypes.bool
}

export default React.memo(FormInput)
