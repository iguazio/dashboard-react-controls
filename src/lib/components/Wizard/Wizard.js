import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

const Wizard = ({ children, onSubmit, steps }) => {
  const [activeStep, setActiveStep] = useState(0)

  const isLastPage = activeStep === steps.length - 1

  const nextStep = () => {
    setActiveStep((prevStep) => Math.min(++prevStep, steps.length - 1))
  }

  const previousStep = () => {
    setActiveStep((prevStep) => Math.max(--prevStep, 0))
  }

  const handleSubmit = (values) => {
    if (isLastPage) {
      return onSubmit(values)
    } else {
      nextStep()
    }
  }

  const renderSteps = () => {
    return steps.map(({ name }, i) => (
      <li
        key={i}
        value={i}
        className={`wizard-steps__list-item ${i === activeStep ? 'active' : ''}`}
      >
        <span>{name}</span>
      </li>
    ))
  }

  const Steps = () => (
    <div className="wizard-steps">
      <ol className="wizard-steps__list">{renderSteps()}</ol>
    </div>
  )

  const activeComponent = steps[activeStep]

  return (
    <Form initialValues={{}} onSubmit={handleSubmit}>
      {(FormProps) =>
        children(Steps, { ...FormProps, activeComponent, activeStep, isLastPage, previousStep })
      }
    </Form>
  )
}

Wizard.propsTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  steps: PropTypes.array
}

export default Wizard
