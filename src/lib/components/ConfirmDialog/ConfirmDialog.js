import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../Button/Button'
import PopUpDialog from '../PopUpDialog/PopUpDialog'

import { CONFIRM_DIALOG_CANCEL_BUTTON, CONFIRM_DIALOG_SUBMIT_BUTTON } from '../../types'

import './confirmDialog.scss'

const ConfirmDialog = ({
  cancelButton,
  className,
  closePopUp,
  confirmButton,
  customPosition,
  header,
  isOpen,
  message,
  messageOnly,
  onResolve
}) => {
  const messageClassNames = classnames(
    'confirm-dialog__message',
    messageOnly && 'confirm-dialog__message-only'
  )

  const handleCancelDialog = (event) => {
    onResolve && onResolve()
    cancelButton.handler && cancelButton.handler(event)
  }

  const handleCloseDialog = (event) => {
    onResolve && onResolve()
    closePopUp && closePopUp(event)
  }

  const handleConfirmDialog = (event) => {
    onResolve && onResolve()
    confirmButton.handler(event)
  }

  return (
    isOpen && (
      <PopUpDialog
        className={className}
        closePopUp={handleCloseDialog}
        customPosition={customPosition}
        headerText={header}
      >
        <div className="confirm-dialog">
          {message && <div className={messageClassNames}>{message}</div>}
          <div className="confirm-dialog__btn-container">
            {cancelButton && (
              <Button
                className="pop-up-dialog__btn_cancel"
                label={cancelButton.label}
                onClick={handleCancelDialog}
                variant={cancelButton.variant}
              />
            )}
            <Button
              label={confirmButton.label}
              onClick={handleConfirmDialog}
              variant={confirmButton.variant}
            />
          </div>
        </div>
      </PopUpDialog>
    )
  )
}

ConfirmDialog.defaultProps = {
  cancelButton: null,
  className: '',
  customPosition: {},
  header: '',
  message: '',
  messageOnly: false
}

ConfirmDialog.propTypes = {
  cancelButton: CONFIRM_DIALOG_CANCEL_BUTTON,
  className: PropTypes.string,
  closePopUp: PropTypes.func,
  confirmButton: CONFIRM_DIALOG_SUBMIT_BUTTON.isRequired,
  customPosition: PropTypes.object,
  header: PropTypes.string,
  message: PropTypes.string,
  messageOnly: PropTypes.bool
}

export default ConfirmDialog
