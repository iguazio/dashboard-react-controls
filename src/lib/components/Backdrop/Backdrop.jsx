/*
Copyright 2022 Iguazio Systems Ltd.
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
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import './Backdrop.scss'

const Backdrop = ({ duration = 300, show = false, onClose = null }) => {
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={duration}
      classNames="backdrop-transition"
      mountOnEnter
      unmountOnExit
    >
      <div className="backdrop" onClick={onClose} ref={nodeRef}></div>
    </CSSTransition>
  )
}

Backdrop.propTypes = {
  duration: PropTypes.number,
  onClose: PropTypes.func,
  show: PropTypes.bool
}

export default Backdrop
