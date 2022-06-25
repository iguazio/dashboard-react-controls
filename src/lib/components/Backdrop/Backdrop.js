import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import './Backdrop.scss'

const Backdrop = ({ duration = 300, show, onClose }) => {
  return (
    <CSSTransition
      in={show}
      timeout={duration}
      classNames="backdrop-transition"
      mountOnEnter
      unmountOnExit
    >
      <div className="backdrop" onClick={onClose}></div>
    </CSSTransition>
  )
}

Backdrop.defaultProps = {
  duration: 300,
  show: false
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired
}

export default Backdrop
