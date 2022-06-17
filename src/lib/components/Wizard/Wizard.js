import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '../Button/Button'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog'
import Modal from '../Modal/Modal'
import WizardSteps from './WizardSteps/WizardSteps'

import { MODAL_MD, SECONDARY_BUTTON, TERTIARY_BUTTON } from '../../constants'
import { MODAL_SIZES, WIZARD_STEPS_CONFIG } from '../../types'
import { openPopUp } from '../../utils/common.util'

import './Wizard.scss'

const Wizard = ({
  children,
  className,
  confirmClose,
  formState,
  isWizardOpen,
  onWizardResolve,
  onWizardSubmit,
  size,
  title,
  stepsConfig,
  submitButtonLabel
}) => {
  const [activeStepNumber, setActiveStepNumber] = useState(0)

  const activeStepTemplate = useMemo(() => {
    return React.Children.toArray(children)[activeStepNumber]
  }, [children, activeStepNumber])

  const totalSteps = useMemo(() => {
    return React.Children.count(children) - 1 || 0
  }, [children])

  const isLastStep = useMemo(() => {
    return activeStepNumber === totalSteps
  }, [activeStepNumber, totalSteps])

  const stepsMenu = useMemo(() => {
    return stepsConfig?.map((step) => ({ id: step.id, label: step.label })) || []
  }, [stepsConfig])

  const wizardClasses = classNames('wizard-form', className)

  const goToNextStep = () => {
    setActiveStepNumber((prevStep) => Math.min(++prevStep, totalSteps))
  }

  const goToPreviousStep = () => setActiveStepNumber((prevStep) => Math.max(--prevStep, 0))

  const jumpToStep = (idx) => {
    return setActiveStepNumber(idx)
  }

  const handleOnClose = () => {
    if (confirmClose && formState && formState.dirty) {
      openPopUp(ConfirmDialog, {
        cancelButton: {
          label: 'Cancel',
          variant: TERTIARY_BUTTON
        },
        confirmButton: {
          handler: onWizardResolve,
          label: 'OK',
          variant: SECONDARY_BUTTON
        },
        header: 'Are you sure?',
        message: 'All changes will be lost'
      })
    } else {
      onWizardResolve()
    }
  }

  const handleSubmit = () => {
    formState.handleSubmit()
    if (formState.valid) {
      if (isLastStep) {
        onWizardSubmit(formState.values)
      } else {
        goToNextStep()
      }
    }
  }

  const getDefaultActions = () => [
    <Button
      onClick={goToPreviousStep}
      disabled={activeStepNumber === 0}
      label="Back"
      type="button"
    />,
    <Button
      onClick={handleSubmit}
      disabled={formState.submitting || (formState.invalid && formState.submitFailed)}
      label={isLastStep ? submitButtonLabel : 'Next'}
      type="button"
      variant={SECONDARY_BUTTON}
    />
  ]

  const renderModalActions = () => {
    if (stepsConfig[activeStepNumber]?.getActions) {
      return stepsConfig[activeStepNumber]
        .getActions({
          formState,
          goToNextStep,
          goToPreviousStep,
          handleOnClose,
          handleSubmit
        })
        .map((action) => <Button {...action} />)
    } else {
      return getDefaultActions()
    }
  }

  return (
    <Modal
      actions={renderModalActions()}
      className={wizardClasses}
      onClose={handleOnClose}
      show={isWizardOpen}
      size={size}
      title={title}
    >
      <WizardSteps activeStepNumber={activeStepNumber} jumpToStep={jumpToStep} steps={stepsMenu} />
      <div className="wizard-form__content">{activeStepTemplate}</div>
    </Modal>
  )
}

Wizard.defaultProps = {
  className: '',
  confirmClose: false,
  size: MODAL_MD,
  stepsConfig: [],
  submitButtonLabel: 'Submit'
}

Wizard.propsTypes = {
  className: PropTypes.string,
  confirmClose: PropTypes.bool,
  formState: PropTypes.object.isRequired,
  isWizardOpen: PropTypes.bool.isRequired,
  onWizardResolve: PropTypes.func.isRequired,
  onWizardSubmit: PropTypes.func.isRequired,
  size: MODAL_SIZES,
  title: PropTypes.string.isRequired,
  stepsConfig: WIZARD_STEPS_CONFIG,
  submitButtonLabel: PropTypes.string
}

Wizard.Step = ({ children }) => children

export default Wizard
