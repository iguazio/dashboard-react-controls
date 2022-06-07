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
  FormState,
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

  const hasSteps = useMemo(() => {
    return stepsConfig.some((step) => step.id)
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

  const handleOnClose = () => {
    if (confirmClose && FormState && FormState.dirty) {
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
    FormState.handleSubmit()
    if (FormState.valid) {
      if (isLastStep) {
        onWizardSubmit(FormState.values)
      } else {
        goToNextStep()
      }
    }
  }

  const getDefaultActions = () => {
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
          disabled={FormState.submitting || (FormState.invalid && FormState.submitFailed)}
          label={isLastStep ? submitButtonLabel : 'Next'}
          type="button"
          variant={SECONDARY_BUTTON}
        />
      ]
    } else {
      return [
        <Button onClick={handleOnClose} label="Cancel" type="button" />,
        <Button
          onClick={handleSubmit}
          disabled={FormState.submitting || (FormState.invalid && FormState.submitFailed)}
          label={submitButtonLabel}
          type="button"
          variant={SECONDARY_BUTTON}
        />
      ]
    }
  }

  const renderModalActions = () => {
    if (stepsConfig[activeStepNumber]?.getActions) {
      return stepsConfig[activeStepNumber]
        .getActions({
          FormState,
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
      {hasSteps && (
        <WizardSteps
          activeStepNumber={activeStepNumber}
          jumpToStep={jumpToStep}
          steps={stepsMenu}
        />
      )}
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
  FormState: PropTypes.object.isRequired,
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
