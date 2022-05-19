import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '../../Button/Button'

import { WIZARD_STEPS_CONFIG } from '../../../types'

import './WizardSteps.scss'

const WizardSteps = ({ activeStepNumber, jumpToStep, steps }) => {
  const getStepClassNames = (idx) =>
    classNames(
      'wizard-steps__item',
      idx === activeStepNumber && 'active',
      idx < activeStepNumber && 'valid'
    )

  const handleJumpToStep = (event, idx) => {
    event.preventDefault()
    jumpToStep(idx)
  }

  return (
    <div className="wizard-steps">
      {steps.map(({ id, label }, idx) => (
        <Button
          className={getStepClassNames(idx)}
          disabled={idx > activeStepNumber}
          icon={<span className="wizard-steps__indicator">{idx + 1}</span>}
          key={id}
          label={label}
          onClick={(e) => handleJumpToStep(e, idx)}
        />
      ))}
    </div>
  )
}

WizardSteps.propTypes = {
  activeStepNumber: PropTypes.number.isRequired,
  jumpToStep: PropTypes.func.isRequired,
  steps: WIZARD_STEPS_CONFIG
}

export default WizardSteps
