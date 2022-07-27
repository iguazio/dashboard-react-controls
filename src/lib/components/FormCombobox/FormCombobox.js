import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useField } from 'react-final-form'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'

import FormComboboxView from './FormComboboxView'
import { ValidationTemplate } from '../../elements'

import { checkPatternsValidity } from '../../utils/validation.util'
import { useDetectOutsideClick } from '../../hooks'
import { COMBOBOX_SUGGESTION_LIST } from '../../types'

const FormCombobox = ({
  comboboxClassName,
  density,
  disabled,
  hideSearchInput,
  inputDefaultValue,
  inputPlaceholder,
  invalidText,
  maxSuggestedMatches,
  name,
  onBlur,
  onChange,
  onFocus,
  required,
  rules,
  selectDefaultValue,
  selectOptions,
  selectPlaceholder,
  suggestionList,
  validator,
  withoutBorder
}) => {
  const { input, meta } = useField(name)
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState({
    label: '',
    id: '',
    className: ''
  })
  const [dropdownStyle, setDropdownStyle] = useState({
    left: '0',
    paddingTop: '10px'
  })
  const [showSelectDropdown, setShowSelectDropdown] = useState(false)
  const [showSuggestionList, setShowSuggestionList] = useState(false)
  const [dropdownList, setDropdownList] = useState(suggestionList)
  const [searchIsFocused, setSearchIsFocused] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [validationRules, setValidationRules] = useState(rules)
  const [showValidationRules, setShowValidationRules] = useState(false)
  const comboboxRef = useRef()
  const selectRef = useRef()
  const inputRef = useRef()
  useDetectOutsideClick(comboboxRef, () => setShowValidationRules(false))

  useEffect(() => {
    if (selectDefaultValue?.label.length > 0 && selectValue.label.length === 0) {
      setSelectValue(selectDefaultValue)
      input.onChange(selectDefaultValue.id)
      onChange && onChange(selectDefaultValue)
    }
  }, [input, onChange, selectDefaultValue, selectValue.label.length])

  useEffect(() => {
    if (inputDefaultValue.length > 0 && selectValue.id.length > 0 && inputValue.length === 0) {
      setInputValue(inputDefaultValue)
      onChange && onChange(selectValue, inputDefaultValue)
      input.onChange(`${selectValue.id}${inputDefaultValue}`)
    }
  }, [input, inputDefaultValue, inputValue.length, onChange, selectValue])

  useEffect(() => {
    setValidationRules((prevState) =>
      prevState.map((rule) => ({
        ...rule,
        isValid:
          !meta.error || !Array.isArray(meta.error)
            ? true
            : !meta.error.some((err) => err.name === rule.name)
      }))
    )
  }, [meta.error])

  useEffect(() => {
    if (!searchIsFocused) {
      if (JSON.stringify(dropdownList) !== JSON.stringify(suggestionList)) {
        setDropdownList(suggestionList)
      }
    }
  }, [dropdownList, suggestionList, searchIsFocused])

  useEffect(() => {
    setIsInvalid(
      meta.invalid && (meta.validating || meta.modified || (meta.submitFailed && meta.touched))
    )
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating])

  const handleOutsideClick = useCallback(
    (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
        setSearchIsFocused(false)
        setShowSelectDropdown(false)
        setShowSuggestionList(false)
        input.onBlur(new Event('blur'))
        onBlur && onBlur(input.value)
      }
    },
    [input, onBlur]
  )

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick])

  const getValidationRules = () => {
    return validationRules.map(({ isValid = false, label, name }) => {
      return <ValidationTemplate valid={isValid} validationMessage={label} key={name} />
    })
  }

  const handleInputChange = (event) => {
    const target = event.target

    setDropdownStyle({
      left: `${target.selectionStart < 30 ? target.selectionStart : 30}ch`,
      paddingTop: '10px'
    })

    if (searchIsFocused) {
      setSearchIsFocused(false)
    }

    setInputValue(target.value)
    input.onChange(`${selectValue.id}${target.value}`)
    onChange && onChange(selectValue, target.value)

    if (dropdownList.length > 0) {
      setShowSuggestionList(true)
    }
  }

  const handleSelectOptionClick = (selectedOption, option) => {
    if (selectedOption.id !== selectValue.id) {
      setSelectValue(selectedOption)
      input.onChange(selectedOption.id)
      setInputValue('')
      onChange && onChange(selectedOption.id)
      setShowSelectDropdown(false)
      inputRef.current.disabled = false
      inputRef.current.focus()
    }
  }

  const handleSuggestionListOptionClick = (option) => {
    const inputValueItems = inputValue.split('/')
    const valueIndex = inputValueItems.length - 1
    let formattedValue = option.customDelimiter
      ? inputValueItems[valueIndex].replace(new RegExp(`${option.customDelimiter}.*`), '') +
        option.id
      : option.id

    if (inputValueItems.length <= maxSuggestedMatches - 1) formattedValue += '/'

    inputValueItems[valueIndex] = formattedValue

    if (searchIsFocused) {
      setSearchIsFocused(false)
    }

    if (inputValueItems.join('/') !== inputValue) {
      setInputValue(inputValueItems.join('/'))
      input.onChange(`${selectValue.id}${inputValueItems.join('/')}`)
      onChange && onChange(selectValue, inputValueItems.join('/'))
    }

    setShowSuggestionList(false)
    inputRef.current.focus()
    setDropdownStyle({
      left: `${inputRef.current.selectionStart < 30 ? inputRef.current.selectionStart : 30}ch`,
      paddingTop: '10px'
    })
  }

  const inputOnFocus = () => {
    onFocus && onFocus()
    input.onFocus(new Event('focus'))

    if (showSelectDropdown) {
      setShowSelectDropdown(false)
    }

    setShowSuggestionList(true)
  }

  const suggestionListSearchChange = (event) => {
    event.persist()
    setDropdownList(() =>
      suggestionList.filter((option) => {
        return option.id.startsWith(event.target.value)
      })
    )
  }

  const toggleSelect = useCallback(() => {
    if (showSelectDropdown) {
      setShowSelectDropdown(false)
      input.onBlur(new Event('blur'))
      onBlur && onBlur(input.value)
    } else {
      setShowSuggestionList(false)
      setDropdownStyle({
        left: '0',
        paddingTop: '10px'
      })
      setShowSelectDropdown(true)
      input.onFocus(new Event('focus'))
      onFocus && onFocus(input.value)
    }
  }, [input, onBlur, onFocus, showSelectDropdown])

  const validateField = (value) => {
    const valueToValidate = value ?? ''
    let validationError = null

    if (!isEmpty(validationRules)) {
      const [newRules, isValidField] = checkPatternsValidity(rules, valueToValidate)
      const invalidRules = newRules.filter((rule) => !rule.isValid)

      if (!isValidField) {
        validationError = invalidRules.map((rule) => ({ name: rule.name, label: rule.label }))
      }
    }

    if (isEmpty(validationError)) {
      if (valueToValidate.startsWith(' ')) {
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
    <FormComboboxView
      comboboxClassName={comboboxClassName}
      density={density}
      disabled={disabled}
      dropdownList={dropdownList}
      dropdownStyle={dropdownStyle}
      getValidationRules={getValidationRules}
      handleInputChange={handleInputChange}
      handleSelectOptionClick={handleSelectOptionClick}
      handleSuggestionListOptionClick={handleSuggestionListOptionClick}
      hideSearchInput={hideSearchInput}
      inputOnFocus={inputOnFocus}
      inputPlaceholder={inputPlaceholder}
      inputValue={inputValue}
      isInvalid={isInvalid}
      name={name}
      ref={{
        comboboxRef,
        inputRef,
        selectRef
      }}
      required={required}
      searchIsFocused={searchIsFocused}
      selectOptions={selectOptions}
      selectPlaceholder={selectPlaceholder}
      selectValue={selectValue}
      setSearchIsFocused={setSearchIsFocused}
      setShowValidationRules={setShowValidationRules}
      showSelectDropdown={showSelectDropdown}
      showSuggestionList={showSuggestionList}
      showValidationRules={showValidationRules}
      suggestionListSearchChange={suggestionListSearchChange}
      toggleSelect={toggleSelect}
      validateField={validateField}
      validationRules={validationRules}
      withoutBorder={withoutBorder}
    />
  )
}

FormCombobox.defaultProps = {
  comboboxClassName: '',
  density: 'normal',
  disabled: false,
  hideSearchInput: false,
  inputDefaultValue: '',
  inputPlaceholder: '',
  maxSuggestedMatches: 1,
  onBlur: null,
  onFocus: null,
  onChange: null,
  required: false,
  rules: [],
  selectDefaultValue: null,
  selectPlaceholder: '',
  suggestionList: [],
  validator: null,
  withoutBorder: false
}

FormCombobox.propTypes = {
  comboboxClassName: PropTypes.string,
  density: PropTypes.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: PropTypes.bool,
  hideSearchInput: PropTypes.bool,
  inputDefaultValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  invalidText: PropTypes.string,
  maxSuggestedMatches: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  rules: PropTypes.array,
  selectDefaultValue: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectPlaceholder: PropTypes.string,
  suggestionList: COMBOBOX_SUGGESTION_LIST,
  validator: PropTypes.func,
  withoutBorder: PropTypes.bool
}

export default FormCombobox
