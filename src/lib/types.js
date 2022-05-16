import PropTypes from 'prop-types'

import {
  DANGER_BUTTON,
  LABEL_BUTTON,
  MODAL_SM,
  MODAL_MD,
  MODAL_LG,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TERTIARY_BUTTON
} from './constants'

export const BUTTON_VARIANTS = PropTypes.oneOf([
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TERTIARY_BUTTON,
  DANGER_BUTTON,
  LABEL_BUTTON
])

export const POP_UP_CUSTOM_POSITION = PropTypes.shape({
  element: PropTypes.shape({}),
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
})

export const MODAL_SIZES = PropTypes.oneOf([MODAL_SM, MODAL_MD, MODAL_LG])
