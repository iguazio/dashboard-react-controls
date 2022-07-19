import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Field, useField } from 'react-final-form'

import ConfirmDialog from '../ConfirmDialog/ConfirmDialog'
import PopUpDialog from '../PopUpDialog/PopUpDialog'
import SelectOption from '../../elements/SelectOption/SelectOption'
import TextTooltipTemplate from '../TooltipTemplate/TextTooltipTemplate'
import Tooltip from '../Tooltip/Tooltip'

import { SELECT_OPTIONS } from '../../types'
import { TERTIARY_BUTTON } from '../../constants'

import { ReactComponent as Caret } from '../../images/dropdown.svg'

import './formSelect.scss'

const FormSelect = ({
  className,
  density,
  disabled,
  hideSelectedOption,
  label,
  name,
  onChange,
  options,
  search,
  selectType,
  selectedItemAction,
  withoutBorder,
  withSelectedIcon
}) => {
  const { input, meta } = useField(name)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const selectRef = useRef()
  const { width: dropdownWidth } = selectRef?.current?.getBoundingClientRect() || {}

  const selectWrapperClassNames = classNames(
    'form-field__wrapper',
    `form-field__wrapper-${density}`,
    disabled && 'form-field__wrapper-disabled',
    isOpen && 'form-field__wrapper-active',
    isInvalid && 'form-field__wrapper-invalid',
    withoutBorder && 'without-border'
  )

  const selectLabelClassName = classNames(
    'form-field__label',
    disabled && 'form-field__label-disabled'
  )

  const selectedOption = options.find((option) => option.id === input.value)

  useEffect(() => {
    setIsInvalid(
      meta.invalid && (meta.validating || meta.modified || (meta.submitFailed && meta.touched))
    )
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating])

  const openMenu = useCallback(() => {
    if (!isOpen) {
      setOpen(true)
      input.onFocus(new Event('focus'))
    }
  }, [input, isOpen])

  const closeMenu = useCallback(() => {
    if (isOpen) {
      setOpen(false)
      input.onBlur(new Event('blur'))
    }
  }, [input, isOpen])

  const clickHandler = useCallback(
    (event) => {
      if (selectRef.current !== event.target.closest('.form-field')) {
        closeMenu()
      }
    },
    [closeMenu]
  )

  const handleScroll = useCallback(
    (event) => {
      if (!event.target.closest('.options-list__body')) {
        closeMenu()
      }
    },
    [closeMenu]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleScroll, true)
    }

    window.addEventListener('click', clickHandler)

    return () => {
      window.removeEventListener('click', clickHandler)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [clickHandler, handleScroll, isOpen])

  const toggleOpen = () => {
    if (isOpen) {
      closeMenu()
    } else {
      !disabled && openMenu()
    }
  }

  const handleCloseSelectBody = useCallback(
    (event) => {
      event.stopPropagation()

      if (
        !event.target.classList.contains('disabled') &&
        !event.target.closest('.options-list__search')
      ) {
        closeMenu()
        setSearchValue('')
      }
    },
    [closeMenu]
  )

  const handleSelectOptionClick = (selectedOption, option) => {
    if (selectedOption !== input.value) {
      option.handler && option.handler()
      input.onChange(selectedOption)
      onChange && onChange(selectedOption)
    }
  }

  const required = (value) => (value ? undefined : 'Required')

  return (
    <Field name={name} validate={required}>
      {({ input, meta }) => (
        <div
          data-testid="select"
          ref={selectRef}
          className={`form-field form-field-select ${className}`}
          onClick={toggleOpen}
        >
          {label && (
            <div className={selectLabelClassName}>
              <label data-testid="select-label">
                {label}
                {meta.error && <span className="form-field__label-mandatory"> *</span>}
              </label>
            </div>
          )}
          <div data-testid="select-header" className={selectWrapperClassNames}>
            <div className="form-field__control">
              {!hideSelectedOption && (
                <div data-testid="selected-option" className="form-field__select">
                  <span className="form-field__select-value">
                    {input.value && selectedOption?.label}
                  </span>
                </div>
              )}
            </div>
            <div className="form-field__icons">
              {input.value && selectedItemAction && (
                <>
                  {selectedItemAction.handler ? (
                    <Tooltip template={<TextTooltipTemplate text={selectedItemAction.tooltip} />}>
                      <button
                        onClick={(event) => {
                          if (selectedItemAction.confirm) {
                            setConfirmDialogOpen(true)
                          } else {
                            selectedItemAction.handler(input.value)
                          }

                          event.stopPropagation()
                        }}
                      >
                        {selectedItemAction.icon}
                      </button>
                    </Tooltip>
                  ) : (
                    <span>{selectedItemAction.icon}</span>
                  )}
                </>
              )}
              <span>
                <Caret className="form-field__caret" />
              </span>
            </div>
          </div>
          {isConfirmDialogOpen && (
            <ConfirmDialog
              cancelButton={{
                handler: () => {
                  setConfirmDialogOpen(false)
                },
                label: 'Cancel',
                variant: TERTIARY_BUTTON
              }}
              closePopUp={() => {
                setConfirmDialogOpen(false)
              }}
              confirmButton={{
                handler: () => {
                  selectedItemAction.handler(input.value)
                  setConfirmDialogOpen(false)
                },
                label: selectedItemAction.confirm.btnConfirmLabel,
                variant: selectedItemAction.confirm.btnConfirmType
              }}
              header={selectedItemAction.confirm.title}
              isOpen={isConfirmDialogOpen}
              message={selectedItemAction.confirm.message}
            />
          )}
          {isOpen && (
            <PopUpDialog
              className="form-field form-field-select__options-list"
              customPosition={{
                element: selectRef,
                position: 'bottom-right'
              }}
              style={{ width: `${dropdownWidth}px` }}
            >
              <div
                data-testid="select-body"
                className="options-list__body"
                onClick={handleCloseSelectBody}
              >
                {search && (
                  <div className="options-list__search">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(event) => setSearchValue(event.target.value)}
                    />
                  </div>
                )}
                {options
                  .filter((option) => {
                    return !search || option.label.toLowerCase().includes(searchValue.toLowerCase())
                  })
                  .map((option) => {
                    return (
                      <SelectOption
                        item={option}
                        key={option.id}
                        onClick={(selectedOption) => {
                          handleSelectOptionClick(selectedOption, option)
                        }}
                        selectType={selectType}
                        selectedId={input.value}
                        withSelectedIcon={withSelectedIcon}
                      />
                    )
                  })}
              </div>
            </PopUpDialog>
          )}
          <input {...input} type="hidden" />
        </div>
      )}
    </Field>
  )
}

FormSelect.defaultProps = {
  className: '',
  density: 'normal',
  disabled: false,
  hideSelectedOption: false,
  label: '',
  labelAtTop: false,
  onClick: null,
  search: false,
  selectType: '',
  withoutBorder: false,
  withSelectedIcon: true
}

FormSelect.propTypes = {
  className: PropTypes.string,
  density: PropTypes.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: PropTypes.bool,
  hideSelectedOption: PropTypes.bool,
  label: PropTypes.string,
  labelAtTop: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  options: SELECT_OPTIONS.isRequired,
  search: PropTypes.bool,
  selectType: PropTypes.string,
  withoutBorder: PropTypes.bool,
  withSelectedIcon: PropTypes.bool
}

export default React.memo(FormSelect)
