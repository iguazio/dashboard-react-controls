import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FormCheckBox } from '../../components'
import { Tooltip, TextTooltipTemplate } from '../../components'

import { SELECT_OPTION } from '../../types'

import { ReactComponent as Checkmark } from '../../images/checkmark.svg'

import './selectOption.scss'

const SelectOption = ({ item, onClick, selectType, selectedId, withSelectedIcon }) => {
  const selectClassName = classnames(
    'select__item',
    item.hidden && 'hidden',
    item.disabled && 'disabled'
  )

  if (selectType === 'checkbox') {
    return (
      <div data-testid="select-checkbox" className="select__item">
        <FormCheckBox item={item} selectedId={selectedId} onChange={onClick}>
          {item.status && <span className={`state-${item.status}-job status`} />}
          {item.label}
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
      <div className="data-ellipsis label-row">
        <div className="select__item-label">
          {item.icon && (
            <span data-testid="select-icon" className="select__item-icon">
              {item.icon}
            </span>
          )}
          {item.status && <span className={`state-${item.status}-job status`} />}
          <Tooltip template={<TextTooltipTemplate text={item.label} />}>{item.label}</Tooltip>
        </div>
        {withSelectedIcon && item.id === selectedId && <Checkmark className="checkmark" />}
      </div>
      {item.subLabel && (
        <Tooltip
          className="select__item-sub-label"
          template={<TextTooltipTemplate text={item.subLabel} />}
        >
          {item.subLabel}
        </Tooltip>
      )}
    </div>
  )
}

SelectOption.defaultProps = {
  onClick: () => {},
  selectType: '',
  withSelectedIcon: true
}

SelectOption.propTypes = {
  disabled: PropTypes.bool,
  item: SELECT_OPTION.isRequired,
  onClick: PropTypes.func,
  selectType: PropTypes.string,
  selectedId: PropTypes.string,
  withSelectedIcon: PropTypes.bool
}

export default SelectOption
