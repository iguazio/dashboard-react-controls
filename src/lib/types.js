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

export const CONFIRM_DIALOG_CANCEL_BUTTON = PropTypes.shape({
  handler: PropTypes.func,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
})
export const CONFIRM_DIALOG_SUBMIT_BUTTON = PropTypes.shape({
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
})

export const WIZARD_STEPS_CONFIG = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    getActions: PropTypes.func
  })
)

export const INPUT_LINK = PropTypes.shape({
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  url: PropTypes.string
})

export const SELECT_OPTION = PropTypes.shape({
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  icon: PropTypes.element,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.string,
  subLabel: PropTypes.string
})

export const SELECT_OPTIONS = PropTypes.arrayOf(SELECT_OPTION)

export const INPUT_VALIDATION_RULES = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    pattern: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.func]).isRequired,
    isValid: PropTypes.bool
  })
)
