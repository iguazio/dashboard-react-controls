import React, { useCallback, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import Button from '../Button/Button'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog'
import Modal from '../Modal/Modal'
import WizardSteps from './WizardSteps/WizardSteps'

import { SECONDARY_BUTTON, TERTIARY_BUTTON } from '../../constants'
import { MODAL_SIZES } from '../../types'

import './Wizard.scss'

const Wizard = ({
  children,
  confirmClose,
  id,
  initialValues,
  isOpen,
  onResolve,
  onSubmit,
  size,
  title,
  stepsConfig
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
    return stepsConfig.some((step) => step.id)
  }, [stepsConfig])

  const isLastStep = useMemo(() => {
    return activeStepNumber === totalSteps
  }, [activeStepNumber, totalSteps])

  const stepsLabels = useMemo(() => {
    return stepsConfig?.map((step) => ({ id: step.id, label: step.label })) || []
  }, [stepsConfig])

  const goToNextStep = useCallback(() => {
    setActiveStepNumber((prevStep) => Math.min(++prevStep, totalSteps))
  }, [totalSteps])
  const goToPreviousStep = () => setActiveStepNumber((prevStep) => Math.max(--prevStep, 0))

  const jumpToStep = useCallback((idx) => {
    return setActiveStepNumber(idx)
  }, [])

  const handleOnClose = useCallback(
    (isFormDirty) => {
      if (confirmClose && isFormDirty) {
        setConfirmDialogOpen(true)
      } else {
        isConfirmDialogOpen && setConfirmDialogOpen(false)
        onResolve()
      }
    },
    [confirmClose, isConfirmDialogOpen, onResolve]
  )

  const handleSubmit = (values) => {
    if (isLastStep) {
      onSubmit(values)
    } else {
      goToNextStep()
    }
  }

  const getDefaultActions = useCallback(
    ({ handleSubmit, submitting }) => {
      if (hasSteps) {
        return [
          <Button onClick={goToPreviousStep} disabled={activeStepNumber === 0} label="Back" />,
          <Button
            onClick={handleSubmit}
            disabled={submitting}
            variant={SECONDARY_BUTTON}
            label={isLastStep ? 'Submit' : 'Next'}
          />
        ]
      } else {
        return [
          <Button onClick={handleOnClose} label="Cancel" />,
          <Button
            onClick={handleSubmit}
            disabled={submitting}
            variant={SECONDARY_BUTTON}
            label="Submit"
          />
        ]
      }
    },
    [handleOnClose, hasSteps, isLastStep, activeStepNumber]
  )

  const renderModalActions = useCallback(
    (FormState) => {
      const actions = stepsConfig?.map((step) =>
        step.getActions
          ? step.getActions({ FormState, goToNextStep, goToPreviousStep, handleOnClose })
          : null
      )

      if (!actions || !actions[activeStepNumber] || actions[activeStepNumber].length === 0) {
        return getDefaultActions(FormState)
      } else {
        return actions[activeStepNumber].map((action) => <Button {...action} />)
      }
    },
    [getDefaultActions, goToNextStep, handleOnClose, activeStepNumber, stepsConfig]
  )

  return (
    <>
      <Form initialValues={initialValues} onSubmit={handleSubmit}>
        {(FormState) => (
          <Modal
            actions={renderModalActions(FormState)}
            onClose={() => handleOnClose(FormState.dirty)}
            show={isOpen}
            size={size}
            title={title}
          >
            <form className="wizard-form" id={id} noValidate>
              {hasSteps && (
                <WizardSteps
                  activeStepNumber={activeStepNumber}
                  jumpToStep={jumpToStep}
                  labels={stepsLabels}
                />
              )}
              <div className="wizard-form__content">{activeStepTemplate}</div>
            </form>
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
            handler: () => {
              isConfirmDialogOpen && setConfirmDialogOpen(false)
              onResolve()
            },
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
  confirmClose: false,
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
  confirmClose: PropTypes.bool,
  id: PropTypes.string,
  initialValues: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onResolve: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  size: MODAL_SIZES,
  title: PropTypes.string,
  stepsConfig: PropTypes.array
}

Wizard.Step = ({ children }) => children

export default Wizard
