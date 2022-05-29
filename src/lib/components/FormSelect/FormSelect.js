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
  const { input } = useField(name)
  const selectRef = useRef()
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { width: dropdownWidth } = selectRef?.current?.getBoundingClientRect() || {}

  const selectClassName = classNames(
    'form-field__select',
    `form-field__select-${density}`,
    isOpen && 'form-field__select-active',
    withoutBorder && 'without-border',
    disabled && 'form-field__select-disabled'
  )
  const selectLabelClassName = classNames(
    'form-field__label',
    disabled && 'form-field__label-disabled'
  )

  const selectedOption = options.find((option) => option.id === input.value)

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleScroll, true)
    }

    window.addEventListener('click', clickHandler)

    return () => {
      window.removeEventListener('click', clickHandler)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [isOpen])

  const clickHandler = (event) => {
    if (selectRef.current !== event.target.closest('.form-field')) {
      setOpen(false)
    }
  }

  const handleScroll = (event) => {
    if (!event.target.closest('.select__body')) {
      setOpen(false)
    }
  }

  const toggleOpen = () => {
    !disabled && setOpen(!isOpen)
  }

  const handleCloseSelectBody = useCallback((event) => {
    event.stopPropagation()

    if (!event.target.classList.contains('disabled') && !event.target.closest('.select__search')) {
      setOpen(false)
      setSearchValue('')
    }
  }, [])

  const handleSelectOptionClick = (selectedOption, option) => {
    if (selectedOption !== input.value) {
      option.handler && option.handler()
      input.onChange(selectedOption)
      onChange && onChange(selectedOption)
    }
  }

  const required = (value) => (value ? undefined : 'Required')

  return (
    <Field name={name} component="select" validate={required}>
      {({ input, meta }) => (
        <div
          data-testid="select"
          ref={selectRef}
          className={`form-field ${className}`}
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
          <div data-testid="select-header" className="form-field__wrapper">
            {!hideSelectedOption && (
              <div data-testid="selected-option" className={selectClassName}>
                <span className="form-field__select-value">
                  {input.value && selectedOption?.label}
                </span>
                {selectedOption?.subLabel && (
                  <span data-testid="select-subLabel" className="sub-label">
                    {selectedOption.subLabel}
                  </span>
                )}
              </div>
            )}
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
              <Caret className="form-field__caret" />
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
              message={selectedItemAction.confirm.message}
            />
          )}
          {isOpen && (
            <PopUpDialog
              className="select__options-list"
              customPosition={{
                element: selectRef,
                position: 'bottom-right'
              }}
              style={{ width: `${dropdownWidth}px` }}
            >
              <div
                data-testid="select-body"
                className="select__body"
                onClick={handleCloseSelectBody}
              >
                {search && (
                  <div className="select__search">
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
  withSelectedIcon: false
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
