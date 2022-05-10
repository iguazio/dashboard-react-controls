import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import WizardSteps from './WizardSteps/WizardSteps'

const Wizard = ({ children, initialValues, onSubmit, steps }) => {
  const [activeStep, setActiveStep] = useState(0)

  let StepsProps = {}
  const totalSteps = steps.length - 1 || 0
  const hasSteps = steps && totalSteps > 0

  if (hasSteps) {
    StepsProps = {
      activeStep,
      activeComponent: steps[activeStep],
      names: steps.map((step) => step.name),
      isLastPage: activeStep === totalSteps,
      nextStep: () => setActiveStep((prevStep) => Math.min(++prevStep, totalSteps)),
      previousStep: () => setActiveStep((prevStep) => Math.max(--prevStep, 0)),
      jumpToStep: (i) => setActiveStep(i)
    }
  }

  const handleSubmit = (values) => {
    if (!hasSteps) return onSubmit(values)
    if (StepsProps.isLastPage) {
      return onSubmit(values)
    } else {
      StepsProps.nextStep()
    }
  }

  if (hasSteps) {
    return (
      <Form initialValues={{}} onSubmit={handleSubmit}>
        {(FormProps) =>
          children(<WizardSteps {...StepsProps} />, {
            ...FormProps,
            ...StepsProps
          })
        }
      </Form>
    )
  } else {
    return (
      <Form initialValues={{}} onSubmit={handleSubmit}>
        {(FormProps) => children({ ...FormProps })}
      </Form>
    )
  }
}

Wizard.propsTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  steps: PropTypes.array
}

export default Wizard
