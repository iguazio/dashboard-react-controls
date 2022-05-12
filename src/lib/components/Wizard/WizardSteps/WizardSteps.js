import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '../../Button/Button'

import './WizardSteps.scss'

const WizardSteps = ({ activeStep, jumpToStep, labels }) => {
  const StepItem = (i) =>
    classNames('wizard-steps__list-step', i === activeStep && 'active', i < activeStep && 'valid')

  const handleJumpToStep = (event, idx) => {
    event.preventDefault()
    jumpToStep(idx)
  }

  return (
    <div className="wizard-steps">
      <ol className="wizard-steps__list">
        {labels.map(({ id, label }, i) => (
          <li key={id} className="wizard-steps__list-item">
            <Button
              className={StepItem(i)}
              disabled={i > activeStep}
              icon={<span className="wizard-steps__list-step__indicator">{i + 1}</span>}
              label={label}
              onClick={(e) => handleJumpToStep(e, i)}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}

WizardSteps.propTypes = {
  activeStep: PropTypes.number,
  jumpToStep: PropTypes.func,
  names: PropTypes.arrayOf(PropTypes.string)
}

export default WizardSteps
