import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import WizardSteps from './WizardSteps/WizardSteps'

import { SECONDARY_BUTTON } from '../../constants'

import './Wizard.scss'

const Wizard = ({ children, id, initialValues, isOpen, onReject, onSubmit, stepsConfig }) => {
  const [step, setStep] = useState(0)

  const activeStep = React.Children.toArray(children)[step]
  const totalSteps = React.Children.count(children) - 1 || 0
  const isLastStep = step === totalSteps

  let StepsProps = {
    step,
    labels: stepsConfig?.map((step) => ({ id: step.id, label: step.label })) || [],
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

  const renderModalActions = (FormApi) => {
    const actions =
      stepsConfig?.map((step) => step.actions({ ...FormApi, nextStep, onReject, previousStep })) ||
      []

    if (!actions[step] || actions[step].length === 0) {
      return defaultActions(FormApi.handleSubmit, FormApi.submitting)
    } else {
      return actions[step].map((action) => {
        return <Button {...action} />
      })
    }
  }

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      {(FormApi) => (
        <Modal actions={renderModalActions(FormApi)} onClose={onReject} show={isOpen}>
          <form className="wizard-form" id={id} noValidate>
            {totalSteps > 0 && <WizardSteps {...StepsProps} />}
            <div className="wizard-form__content">{activeStep}</div>
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
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  steps: PropTypes.array
}

Wizard.Step = ({ children }) => children

export default Wizard
