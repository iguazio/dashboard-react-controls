import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import WizardSteps from './WizardSteps/WizardSteps'

import { SECONDARY_BUTTON } from '../../constants'
import { MODAL_SIZES } from '../../types'

import './Wizard.scss'

const Wizard = ({
  children,
  id,
  initialValues,
  isOpen,
  onResolve,
  onSubmit,
  size,
  title,
  wizardConfig
}) => {
  const [step, setStep] = useState(0)

  const activeStep = React.Children.toArray(children)[step]
  const totalSteps = React.Children.count(children) - 1 || 0
  const isLastStep = step === totalSteps

  let StepsProps = {
    step,
    labels: wizardConfig?.map((step) => ({ id: step.id, label: step.label })) || [],
    jumpToStep: (i) => setStep(i)
  }

  const nextStep = useMemo(
    () => setStep((prevStep) => Math.min(++prevStep, totalSteps)),
    [totalSteps]
  )
  const previousStep = () => setStep((prevStep) => Math.max(--prevStep, 0))

  const handleSubmit = (values) => {
    if (isLastStep) {
      onSubmit(values)
    } else {
      nextStep()
    }
  }

  const defaultActions = useCallback(
    (handleSubmit, submitting) => [
      <Button onClick={previousStep} disabled={step === 0} label="Back" />,
      <Button
        onClick={handleSubmit}
        disabled={submitting}
        variant={SECONDARY_BUTTON}
        label={isLastStep ? 'Submit' : 'Next'}
      />
    ],
    [isLastStep, step]
  )

  const renderModalActions = useCallback(
    (FormApi) => {
      const actions =
        wizardConfig?.map((step) => step.setActions({ ...FormApi, nextStep, previousStep })) || []

      if (!actions[step] || actions[step].length === 0) {
        return defaultActions(FormApi.handleSubmit, FormApi.submitting)
      } else {
        return actions[step].map((action) => <Button {...action} />)
      }
    },
    [defaultActions, nextStep, step, wizardConfig]
  )

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      {(FormApi) => (
        <Modal
          actions={renderModalActions(FormApi)}
          onClose={onResolve}
          show={isOpen}
          size={size}
          title={title}
        >
          <form className="wizard-form" id={id} noValidate>
            {totalSteps > 0 && <WizardSteps {...StepsProps} />}
            <div className="wizard-form__content">{activeStep}</div>
          </form>
        </Modal>
      )}
    </Form>
  )
}

Wizard.defaultProps = {
  id: 'form',
  initialValues: {},
  onResolve: () => {},
  onSubmit: () => {}
}

Wizard.propsTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  id: PropTypes.string,
  initialValues: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onResolve: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  size: MODAL_SIZES,
  title: PropTypes.string,
  wizardConfig: PropTypes.array
}

Wizard.Step = ({ children }) => children

export default Wizard
