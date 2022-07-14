import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FormCheckBox, Tooltip, TextTooltipTemplate } from '../../components'

import { SELECT_OPTION } from '../../types'

import { ReactComponent as Checkmark } from '../../images/checkmark.svg'

import './selectOption.scss'

const SelectOption = ({ item, name, onClick, multiple, selectedId, withSelectedIcon }) => {
  const selectClassName = classnames(
    'select__item',
    item.hidden && 'hidden',
    item.disabled && 'disabled'
  )
  if (multiple) {
    return (
      <div data-testid="select-checkbox" className={selectClassName}>
        <FormCheckBox name={name} id={item.id} label={item.label}>
          {item.status && <span className={`state-${item.status}-job status`} />}
        </FormCheckBox>
      </div>
    )
  }
  return (
    <div
      data-testid="select-option"
      className={selectClassName}
      onClick={() => {
        !item.disabled && onClick(item.id)
      }}
    >
      {item.icon && (
        <span data-testid="select-icon" className="select__icon">
          {item.icon}
        </span>
      )}
      {item.status && <span className={`state-${item.status}-job status`} />}
      <div className="data-ellipsis label-row">
        <Tooltip template={<TextTooltipTemplate text={item.label} />}>{item.label}</Tooltip>
        {withSelectedIcon && item.id === selectedId && <Checkmark className="checkmark" />}
      </div>
      {item.subLabel && (
        <Tooltip className="sub-label" template={<TextTooltipTemplate text={item.subLabel} />}>
          {item.subLabel}
        </Tooltip>
      )}
    </div>
  )
}

SelectOption.defaultProps = {
  onClick: () => {},
  multiple: false,
  withSelectedIcon: true
}

SelectOption.propTypes = {
  disabled: PropTypes.bool,
  item: SELECT_OPTION.isRequired,
  onClick: PropTypes.func,
  multiple: PropTypes.bool,
  selectedId: PropTypes.string,
  withSelectedIcon: PropTypes.bool
}

export default SelectOption
