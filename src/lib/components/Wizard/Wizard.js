import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import WizardSteps from './WizardSteps/WizardSteps'

import { SECONDARY_BUTTON } from '../../constants'

import './Wizard.scss'

const Wizard = ({ children, id, initialValues, isOpen, onReject, onSubmit, steps }) => {
  const [step, setStep] = useState(0)

  const ActiveStep = React.Children.toArray(children)[step]
  const totalSteps = React.Children.count(children) - 1 || 0
  const isLastStep = step === totalSteps

  let StepsProps = {
    labels: steps.map((step) => ({ id: step.id, label: step.label })),
    jumpToStep: (i) => setStep(i)
  }

  const nextStep = () => setStep((prevStep) => Math.min(++prevStep, totalSteps))
  const previousStep = () => setStep((prevStep) => Math.max(--prevStep, 0))

  const handleSubmit = (values) => {
    if (isLastStep) {
      return onSubmit(values)
    } else {
      nextStep()
    }
  }

  const defaultActions = (handleSubmit, submitting) => [
    <Button onClick={previousStep} disabled={step === 0} label="Back" />,
    <Button
      onClick={handleSubmit}
      disabled={submitting}
      variant={SECONDARY_BUTTON}
      label={isLastStep ? 'Submit' : 'Next'}
    />
  ]

  const renderModalActions = (handleSubmit, submitting) => {
    const actions = steps.map((step) => step.actions)
    if (!actions[step] || actions[step].length === 0) {
      return defaultActions(handleSubmit, submitting)
    } else {
      return actions[step].map((action) => <Button {...action.defaultProps} />)
    }
  }

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit, submitting }) => (
        <Modal
          actions={renderModalActions(handleSubmit, submitting)}
          onClose={onReject}
          show={isOpen}
        >
          <form className="wizard-form" id={id} noValidate>
            <WizardSteps activeStep={step} {...StepsProps} />
            <div className="wizard-form__content">{ActiveStep}</div>
          </form>
        </Modal>
      )}
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
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  steps: PropTypes.array
}

Wizard.Step = ({ children }) => children

export default Wizard
