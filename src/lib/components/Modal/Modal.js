import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

import Backdrop from '../Backdrop/Backdrop'
import { RoundedIcon } from 'igz-controls/components'

import { MODAL_MD } from '../../constants'
import { MODAL_SIZES } from '../../types'

import { ReactComponent as CloseIcon } from 'igz-controls/images/close.svg'

import './Modal.scss'

const JSX_MODAL = React.forwardRef(
  ({ actions, children, className, onClose, size, show, title }, ref) => {
    const modalClassNames = classNames('modal', className, size && `modal-${size}`)
    return (
      <>
        <Backdrop onClose={onClose} show={show} />
        <CSSTransition in={show} timeout={300} classNames="modal-transition" unmountOnExit>
          <div className={modalClassNames} data-testid="modal">
            <div className="modal__header-button">
              <RoundedIcon
                onClick={onClose}
                tooltipText="Close"
                data-testid="pop-up-close-btn"
                ref={ref}
              >
                <CloseIcon />
              </RoundedIcon>
            </div>
            <div className="modal__content">
              <div className="modal__header">
                <h5 className="modal__header-title">{title}</h5>
              </div>
              <div className="modal__body">{children}</div>
              {actions && actions.length > 0 && (
                <div className="modal__footer">
                  <div className="modal__footer-actions">
                    {actions.map((action, idx) => (
                      <div key={idx}>{action}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CSSTransition>
      </>
    )
  }
)

const Modal = React.forwardRef((props, ref) =>
  createPortal(<JSX_MODAL {...props} ref={ref} />, document.getElementById('overlay_container'))
)

Modal.defaultProps = {
  actions: [],
  show: false,
  size: MODAL_MD,
  title: ''
}

Modal.propTypes = {
  actions: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  size: MODAL_SIZES,
  title: PropTypes.string
}

export default Modal
