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
import React from 'react'
import PropTypes from 'prop-types'

import { RoundedIcon } from '../../components'

import { FORM_TABLE_EDITING_ITEM } from '../../types'

import { ReactComponent as Close } from '../../images/close.svg'
import { ReactComponent as Edit } from '../../images/edit.svg'
import { ReactComponent as Delete } from '../../images/delete.svg'
import { ReactComponent as Checkmark } from '../../images/checkmark2.svg'

const FormRowActions = ({
  applyChanges,
  deleteIsDisabled,
  deleteRow,
  disabled,
  discardOrDelete,
  editingItem,
  fieldsPath,
  index
}) => {
  return (
    <div className="form-table__cell form-table__actions-cell">
      {editingItem?.ui?.index === index ? (
        <>
          <RoundedIcon
            onClick={(event) => applyChanges(event, index)}
            tooltipText="Apply"
            disabled={disabled}
          >
            <Checkmark />
          </RoundedIcon>
          <RoundedIcon
            onClick={(event) => discardOrDelete(event, fieldsPath, index)}
            tooltipText={editingItem.ui?.isNew ? 'Delete' : 'Discard changes'}
            disabled={disabled}
          >
            {editingItem.ui?.isNew ? <Delete /> : <Close />}
          </RoundedIcon>
        </>
      ) : (
        <>
          <RoundedIcon
            onClick={(event) => {
              event.preventDefault()
            }}
            tooltipText="Edit"
            disabled={disabled}
          >
            <Edit />
          </RoundedIcon>

          <RoundedIcon
            onClick={(event) => {
              deleteRow(event, fieldsPath, index)
            }}
            tooltipText="Delete"
            disabled={disabled || deleteIsDisabled}
          >
            <Delete />
          </RoundedIcon>
        </>
      )}
    </div>
  )
}

FormRowActions.defaultProps = {
  deleteIsDisabled: false,
  disabled: false,
  editingItem: null
}

FormRowActions.propTypes = {
  applyChanges: PropTypes.func.isRequired,
  deleteIsDisabled: PropTypes.bool,
  deleteRow: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  discardOrDelete: PropTypes.func.isRequired,
  editingItem: FORM_TABLE_EDITING_ITEM,
  fieldsPath: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default FormRowActions
