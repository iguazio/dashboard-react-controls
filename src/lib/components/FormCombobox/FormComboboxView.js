import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import { isEmpty } from 'lodash'

import { OptionsMenu } from '../../elements'

import { COMBOBOX_SUGGESTION_LIST, COMBOBOX_VALIDATION_RULES } from '../../types'

import { ReactComponent as Arrow } from '../../images/arrow.svg'
import { ReactComponent as SearchIcon } from '../../images/search.svg'
import { ReactComponent as WarningIcon } from '../../images/warning.svg'

import './formCombobox.scss'

const FormComboboxView = React.forwardRef(
  (
    {
      comboboxClassName,
      density,
      disabled,
      dropdownList,
      dropdownStyle,
      getValidationRules,
      handleInputChange,
      handleSelectOptionClick,
      handleSuggestionListOptionClick,
      hideSearchInput,
      inputOnFocus,
      inputPlaceholder,
      inputValue,
      isInvalid,
      name,
      required,
      searchIsFocused,
      selectOptions,
      selectPlaceholder,
      selectValue,
      setSearchIsFocused,
      setShowValidationRules,
      showSelectDropdown,
      showSuggestionList,
      showValidationRules,
      suggestionListSearchChange,
      toggleSelect,
      validateField,
      validationRules,
      withoutBorder
    },
    ref
  ) => {
    const comboboxClassNames = classnames(
      comboboxClassName,
      'form-field-combobox',
      'form-field',
      isInvalid && 'form-field-combobox_invalid'
    )
    const iconClassNames = classnames(
      showSelectDropdown && 'form-field-combobox__icon_open',
      'form-field-combobox__icon'
    )
    const selectClassNames = classnames(
      'form-field-combobox__select',
      'form-field__control',
      showSelectDropdown && 'form-field-combobox__select_open',
      selectValue.id.length <= 5 &&
        selectValue.id.length !== 0 &&
        'form-field-combobox__select_short'
    )
    const selectValueClassNames = classnames(selectValue.className)
    const dropdownClassNames = classnames(
      'form-field-combobox__dropdown',
      'form-field-combobox__input-dropdown',
      showSuggestionList && dropdownList.length > 0 && 'form-field-combobox__input-dropdown_visible'
    )

    const wrapperClassNames = classnames(
      'form-field__wrapper',
      `form-field__wrapper-${density}`,
      disabled && 'form-field__wrapper-disabled',
      isInvalid && 'form-field__wrapper-invalid',
      withoutBorder && 'without-border'
    )
    const { comboboxRef, inputRef, selectRef } = ref

    return (
      <Field name={name} validate={validateField}>
        {({ input, meta }) => (
          <div className={comboboxClassNames} ref={comboboxRef}>
            <div className={wrapperClassNames}>
              <div className="form-field__icons">
                <Arrow className={iconClassNames} onClick={toggleSelect} />
              </div>
              <div className={selectClassNames} ref={selectRef}>
                <div className="form-field-combobox__select-header" onClick={toggleSelect}>
                  <span className={selectValueClassNames}>{selectValue.id}</span>
                  {selectValue.id.length === 0 && selectPlaceholder && (
                    <div className="form-field__label">
                      <label>
                        {selectPlaceholder}
                        {(meta.error || required) && (
                          <span className="form-field__label-mandatory"> *</span>
                        )}
                      </label>
                    </div>
                  )}
                </div>
                <div className="form-field-combobox__select-body form-field-combobox__dropdown">
                  <ul className="form-field-combobox__list">
                    {selectOptions.map((option) => {
                      const selectOptionClassNames = classnames(
                        'form-field-combobox__list-option',
                        option.className
                      )

                      return (
                        <li
                          className={selectOptionClassNames}
                          key={option.id}
                          onClick={() => handleSelectOptionClick(option)}
                        >
                          {option.label}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <input
                className="form-field-combobox__input form-field__control"
                disabled={selectValue.id.length === 0}
                onChange={handleInputChange}
                onFocus={inputOnFocus}
                placeholder={inputPlaceholder}
                ref={inputRef}
                type="text"
                value={inputValue}
              />
              <div
                className={dropdownClassNames}
                style={{
                  ...dropdownStyle
                }}
              >
                {!hideSearchInput && (
                  <div className="form-field-combobox__search-wrapper">
                    <input
                      className="form-field-combobox__search form-field__control"
                      onChange={suggestionListSearchChange}
                      onFocus={() => setSearchIsFocused(true)}
                      placeholder="Type to search"
                      type="text"
                    />
                    <SearchIcon />
                  </div>
                )}
                <ul className="form-field-combobox__list">
                  {searchIsFocused && dropdownList.length === 0 ? (
                    <li className="form-field-combobox__list-option" key="no data">
                      No data
                    </li>
                  ) : (
                    dropdownList.map((value) => (
                      <li
                        className="form-field-combobox__list-option"
                        key={value.id}
                        onClick={() => handleSuggestionListOptionClick(value)}
                      >
                        {value.label}
                      </li>
                    ))
                  )}
                </ul>
              </div>
              <div className="form-field__icons">
                {isInvalid && Array.isArray(meta.error) && (
                  <button
                    className="form-field__warning"
                    onClick={() => setShowValidationRules((state) => !state)}
                  >
                    <WarningIcon />
                  </button>
                )}
              </div>
              {!isEmpty(validationRules) && (
                <OptionsMenu show={showValidationRules} ref={comboboxRef}>
                  {getValidationRules()}
                </OptionsMenu>
              )}
            </div>
          </div>
        )}
      </Field>
    )
  }
)

FormComboboxView.propTypes = {
  comboboxClassName: PropTypes.string.isRequired,
  density: PropTypes.oneOf(['dense', 'normal', 'medium', 'chunky']).isRequired,
  disabled: PropTypes.bool.isRequired,
  dropdownList: COMBOBOX_SUGGESTION_LIST.isRequired,
  dropdownStyle: PropTypes.shape({}).isRequired,
  getValidationRules: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectOptionClick: PropTypes.func.isRequired,
  handleSuggestionListOptionClick: PropTypes.func.isRequired,
  hideSearchInput: PropTypes.bool.isRequired,
  inputOnFocus: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  searchIsFocused: PropTypes.bool.isRequired,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectPlaceholder: PropTypes.string.isRequired,
  selectValue: PropTypes.shape({}).isRequired,
  setSearchIsFocused: PropTypes.func.isRequired,
  setShowValidationRules: PropTypes.func.isRequired,
  showSelectDropdown: PropTypes.bool.isRequired,
  showSuggestionList: PropTypes.bool.isRequired,
  showValidationRules: PropTypes.bool.isRequired,
  suggestionListSearchChange: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  validateField: PropTypes.func.isRequired,
  validationRules: COMBOBOX_VALIDATION_RULES.isRequired,
  withoutBorder: PropTypes.bool.isRequired
}

export default FormComboboxView
