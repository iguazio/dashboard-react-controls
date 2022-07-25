import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { isNil } from 'lodash'

import { ReactComponent as Arrow } from 'igz-controls/images/range-arrow-small.svg'

import './FormInputRange.scss'

const FormInputRange = ({ disabled, min, max, onChange, step, value }) => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleIncrease = (event) => {
    event.preventDefault()

    if (max && inputValue >= max) return

    const value = isCurrentValueEmpty() ? +step : +inputValue + +step
    const nextValue = isInteger(value) ? value : value.toFixed(3)

    setInputValue(String(nextValue))

    const modifiedEvent = {
      ...event,
      target: {
        ...event.target,
        value: String(nextValue)
      }
    }

    onChange(modifiedEvent)
  }

  const handleDecrease = (event) => {
    event.preventDefault()

    if (inputValue <= 0 || inputValue <= min) return

    const value = isCurrentValueEmpty() ? -step : +inputValue - +step
    const nextValue = isInteger(value) ? value : value.toFixed(3)

    setInputValue(String(nextValue))

    const modifiedEvent = {
      ...event,
      target: {
        ...event.target,
        value: String(nextValue)
      }
    }

    onChange(modifiedEvent)
  }

  const isCurrentValueEmpty = () => {
    return isNil(inputValue) || inputValue === ''
  }

  const isInteger = (number) => {
    return Number(number) === number && number % 1 === 0
  }

  return (
    <div data-testid="range-input-container" className="form-field-range">
      <div className="range__buttons">
        <button
          data-testid="btn-increase"
          className="range__button range__button-increase"
          disabled={disabled}
          onClick={handleIncrease}
        >
          <Arrow className="increase" />
        </button>
        <button
          data-testid="btn-decrease"
          className="range__button range__button-decrease"
          disabled={disabled}
          onClick={handleDecrease}
        >
          <Arrow className="decrease" />
        </button>
      </div>
    </div>
  )
}

FormInputRange.defaultProps = {
  disabled: false,
  min: null,
  max: null,
  step: '1'
}

FormInputRange.propTypes = {
  disabled: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  step: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default React.memo(FormInputRange)
