/*
Copyright 2019 Iguazio Systems Ltd.

Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.

In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { RoundedIcon } from '../../components'
import { NAVBAR_WIDTH_OPENED } from '../../constants'
import  {localStorageService}  from '../../utils'

import PinIcon from '../../images/pin-icon.svg?react'
import UnPinIcon from '../../images/unpin-icon.svg?react'

import './Navbar.scss'

const Navbar = ({ children, id = 'navbar', setIsNavbarPinned }) => {
  const [isPinned, setIsPinned] = useState(
    localStorageService.getStorageValue('isNavbarStatic', false) === 'true'
  )
  const navbarRef = useRef(null)

  const navbarClasses = classNames('navbar', isPinned && 'navbar_pinned')
  const navbarStyles = {
    maxWidth: isPinned && NAVBAR_WIDTH_OPENED
  }

  const handlePinClick = () => {
    setIsPinned(prevIsPinned => {
      localStorageService.setStorageValue('isNavbarStatic', !prevIsPinned)
      return !prevIsPinned
    })
  }

  useEffect(() => {
    setIsNavbarPinned(isPinned)
  }, [isPinned, setIsNavbarPinned])



  return (
    <nav
      className={navbarClasses}
      data-testid={id}
      style={navbarStyles}
      ref={navbarRef}
    >
      <div className="navbar__pin-icon">
        <RoundedIcon
          id="navbar-pin"
          onClick={handlePinClick}
          tooltipText={`${isPinned ? 'Unpin' : 'Pin'} Menu`}
        >
          {isPinned ? <UnPinIcon /> : <PinIcon />}
        </RoundedIcon>
      </div>
      {React.cloneElement(children, { IsNavbarPinned: isPinned })}
    </nav>
  )
}

Navbar.Body = ({ children }) => (
  <div className="navbar__body" data-testid="navbar-body">
    {children}
  </div>
)

Navbar.Body.displayName = 'Navbar.Body'

Navbar.Divider = () => <div className="navbar__divider" />

Navbar.Divider.displayName = 'Navbar.Divider'

Navbar.Body.propTypes = {
  children: PropTypes.node.isRequired
}

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  id: PropTypes.string,
  setIsNavbarPinned: PropTypes.func
}

export default Navbar
