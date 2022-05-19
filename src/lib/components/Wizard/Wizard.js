import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import classNames from 'classnames'

import Button from '../Button/Button'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog'
import Modal from '../Modal/Modal'
import WizardSteps from './WizardSteps/WizardSteps'

import { MODAL_MD, SECONDARY_BUTTON, TERTIARY_BUTTON } from '../../constants'
import { MODAL_SIZES, WIZARD_STEPS_CONFIG } from '../../types'

import './Wizard.scss'

const Wizard = ({
  children,
  className,
  confirmClose,
  initialValues,
  isOpen,
  onResolve,
  onSubmit,
  size,
  title,
  stepsConfig,
  submitButtonLabel
}) => {
  const [activeStepNumber, setActiveStepNumber] = useState(0)
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false)

  const activeStepTemplate = useMemo(() => {
    return React.Children.toArray(children)[activeStepNumber]
  }, [children, activeStepNumber])

  const totalSteps = useMemo(() => {
    return React.Children.count(children) - 1 || 0
  }, [children])

  const hasSteps = useMemo(() => {
    return stepsConfig ?? stepsConfig.some((step) => step.id)
  }, [stepsConfig])

  const isLastStep = useMemo(() => {
    return activeStepNumber === totalSteps
  }, [activeStepNumber, totalSteps])

  const stepsMenu = useMemo(() => {
    return stepsConfig?.map((step) => ({ id: step.id, label: step.label })) || []
  }, [stepsConfig])

  const wizardClasses = classNames('wizard-form', className, hasSteps && 'wizard-form__with-steps')

  const goToNextStep = () => {
    setActiveStepNumber((prevStep) => Math.min(++prevStep, totalSteps))
  }

  const goToPreviousStep = () => setActiveStepNumber((prevStep) => Math.max(--prevStep, 0))

  const jumpToStep = (idx) => {
    return setActiveStepNumber(idx)
  }

  const handleOnClose = (FormState) => {
    // use openModal promise instaed of useState
    // return a promise
    if (confirmClose && FormState && FormState.dirty) {
      setConfirmDialogOpen(true)
    } else {
      isConfirmDialogOpen && setConfirmDialogOpen(false)
      onResolve()
    }
  }

  const handleSubmit = (values) => {
    if (isLastStep) {
      onSubmit(values)
    } else {
      goToNextStep()
    }
  }

  const getDefaultActions = ({ dirty, handleSubmit, submitting }) => {
    if (hasSteps) {
      return [
        <Button
          onClick={goToPreviousStep}
          disabled={activeStepNumber === 0}
          label="Back"
          type="button"
        />,
        <Button
          onClick={handleSubmit}
          disabled={submitting}
          label={isLastStep ? submitButtonLabel : 'Next'}
          type="button"
          variant={SECONDARY_BUTTON}
        />
      ]
    } else {
      return [
        <Button onClick={() => handleOnClose({ dirty })} label="Cancel" type="button" />,
        <Button
          onClick={handleSubmit}
          disabled={submitting}
          label={submitButtonLabel}
          type="button"
          variant={SECONDARY_BUTTON}
        />
      ]
    }
  }

  const renderModalActions = (FormState) => {
    if (stepsConfig[activeStepNumber]?.getActions) {
      return stepsConfig[activeStepNumber]
        .getActions({
          FormState,
          goToNextStep,
          goToPreviousStep,
          handleOnClose: () => handleOnClose(FormState)
        })
        .map((action) => <Button {...action} />)
    } else {
      return getDefaultActions(FormState)
    }
  }

  return (
    <>
      <Form initialValues={initialValues} onSubmit={handleSubmit}>
        {(FormState) => (
          <Modal
            actions={renderModalActions(FormState)}
            className={wizardClasses}
            onClose={() => handleOnClose(FormState)}
            show={isOpen}
            size={size}
            title={title}
          >
            {hasSteps && (
              <WizardSteps
                activeStepNumber={activeStepNumber}
                jumpToStep={jumpToStep}
                steps={stepsMenu}
              />
            )}
            <div className="wizard-form__content">
              <Field name="firstName" component="input" type="text" placeholder="First Name" />
              {activeStepTemplate}
              <pre>{JSON.stringify(FormState.values, 0, 2)}</pre>
            </div>
          </Modal>
        )}
      </Form>
      {isConfirmDialogOpen && (
        <ConfirmDialog
          cancelButton={{
            handler: () => setConfirmDialogOpen(false),
            label: 'Cancel',
            variant: TERTIARY_BUTTON
          }}
          closePopUp={() => setConfirmDialogOpen(false)}
          confirmButton={{
            handler: handleOnClose,
            label: 'OK',
            variant: SECONDARY_BUTTON
          }}
          header="Are you sure?"
          message="All changes will be lost"
        />
      )}
    </>
  )
}

Wizard.defaultProps = {
  className: '',
  confirmClose: false,
  initialValues: {},
  size: MODAL_MD,
  stepsConfig: [],
  submitButtonLabel: 'Submit'
}

Wizard.propsTypes = {
  className: PropTypes.string,
  confirmClose: PropTypes.bool,
  initialValues: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onResolve: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  size: MODAL_SIZES,
  title: PropTypes.string.isRequired,
  stepsConfig: WIZARD_STEPS_CONFIG,
  submitButtonLabel: PropTypes.string
}

Wizard.Step = ({ children }) => children

export default Wizard
