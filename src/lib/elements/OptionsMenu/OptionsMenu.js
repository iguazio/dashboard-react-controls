import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { PopUpDialog } from '../../components'

import './optionsMenu.scss'

const OptionsMenu = ({ children, parentElement, show, timeout }) => {
  const { width: dropdownWidth } = parentElement.current
    ? parentElement.current.getBoundingClientRect()
    : {}
  return (
    <CSSTransition in={show} timeout={timeout} classNames="options-menu-transition" unmountOnExit>
      <PopUpDialog
        className="options-menu"
        customPosition={{
          element: parentElement,
          position: 'bottom-right'
        }}
        style={{ width: `${dropdownWidth}px` }}
      >
        <ul className="options-menu__body">{children}</ul>
      </PopUpDialog>
    </CSSTransition>
  )
}

OptionsMenu.defaultProps = {
  children: [],
  show: false,
  timeout: 300
}

OptionsMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  show: PropTypes.bool.isRequired,
  timout: PropTypes.number
}

export default OptionsMenu
