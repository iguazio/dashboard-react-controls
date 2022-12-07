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
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FieldArray } from 'react-final-form-arrays'

import { FormSelect, FormInput, Tooltip, TextTooltipTemplate } from '../../components'
import { FormActionButton, FormRowActions } from '../../elements'

import { useFormTable } from '../../hooks/useFormTable.hook'

const FormKeyValueTable = ({
  addNewItemLabel,
  className,
  defaultKey,
  disabled,
  fieldsPath,
  formState,
  isKeyRequired,
  isValueRequired,
  keyHeader,
  keyLabel,
  keyOptions,
  valueHeader,
  valueLabel
}) => {
  const tableClassNames = classnames('form-table form-key-value-table', className)
  const {
    editingItem,
    addNewRow,
    applyChanges,
    deleteRow,
    discardOrDelete,
    enterEditMode,
    bottomScrollRef
  } = useFormTable(formState)

  const uniquenessValidator = (fields, newValue) => {
    return !fields.value.some(({ data: { key } }, index) => {
      return newValue.trim() === key && index !== editingItem.ui.index
    })
  }

  return (
    <div className={tableClassNames}>
      <div className="form-table__row form-table__header-row no-hover">
        <div className="form-table__cell form-table__cell_1">{keyHeader}</div>
        <div className="form-table__cell form-table__cell_1">{valueHeader}</div>
        <div className="form-table__cell form-table__actions-cell" />
      </div>
      <FieldArray name={fieldsPath}>
        {({ fields }) => (
          <>
            {fields.map((contentItem, index) => {
              const tableRowClassNames = classnames(
                'form-table__row',
                fieldsPath === editingItem?.ui?.fieldsPath &&
                  editingItem?.ui?.index === index &&
                  'active'
              )
              return editingItem && index === editingItem.ui.index && !disabled ? (
                <div className={tableRowClassNames} key={index}>
                  <div className="form-table__cell form-table__cell_1">
                    {keyOptions ? (
                      <FormSelect
                        name={`${contentItem}.data.key`}
                        density="dense"
                        options={keyOptions}
                      />
                    ) : (
                      <FormInput
                        className="input_edit"
                        placeholder={keyLabel}
                        density="dense"
                        name={`${contentItem}.data.key`}
                        required={isKeyRequired}
                        validationRules={[
                          {
                            name: 'uniqueness',
                            label: 'Name should be unique',
                            pattern: (newValue) => uniquenessValidator(fields, newValue)
                          }
                        ]}
                      />
                    )}
                  </div>
                  <div className="form-table__cell form-table__cell_1">
                    <FormInput
                      className="input_edit"
                      placeholder={valueLabel}
                      density="dense"
                      name={`${contentItem}.data.value`}
                      required={isValueRequired}
                    />
                  </div>
                  <FormRowActions
                    applyChanges={applyChanges}
                    deleteRow={deleteRow}
                    discardOrDelete={discardOrDelete}
                    editingItem={editingItem}
                    fieldsPath={fieldsPath}
                    index={index}
                  />
                </div>
              ) : (
                <div
                  className={tableRowClassNames}
                  key={index}
                  onClick={(event) => enterEditMode(event, fields, fieldsPath, index)}
                >
                  <div className="form-table__cell form-table__cell_1">
                    <Tooltip template={<TextTooltipTemplate text={fields.value[index].data.key} />}>
                      {fields.value[index].data.key}
                    </Tooltip>
                  </div>
                  <div className="form-table__cell form-table__cell_1">
                    <Tooltip
                      template={<TextTooltipTemplate text={fields.value[index].data.value} />}
                    >
                      {fields.value[index].data.value}
                    </Tooltip>
                  </div>
                  <FormRowActions
                    applyChanges={applyChanges}
                    deleteRow={deleteRow}
                    discardOrDelete={discardOrDelete}
                    editingItem={editingItem}
                    fieldsPath={fieldsPath}
                    index={index}
                  />
                </div>
              )
            })}

            <FormActionButton
              ref={bottomScrollRef}
              disabled={disabled}
              hidden={editingItem?.ui?.isNew}
              fields={fields}
              label={addNewItemLabel}
              onClick={(...addRowArgs) =>
                addNewRow(...addRowArgs, {
                  data: {
                    key: defaultKey || '',
                    value: ''
                  }
                })
              }
              fieldsPath={fieldsPath}
            />
          </>
        )}
      </FieldArray>
    </div>
  )
}

FormKeyValueTable.defaultProps = {
  addNewItemLabel: 'Add new item',
  className: '',
  disabled: false,
  defaultKey: '',
  isKeyRequired: true,
  isValueRequired: true,
  keyHeader: 'Key',
  keyLabel: 'Key',
  keyOptions: null,
  valueHeader: 'Value',
  valueLabel: 'Value'
}

FormKeyValueTable.propTypes = {
  addNewItemLabel: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  defaultKey: PropTypes.string,
  fieldsPath: PropTypes.string.isRequired,
  formState: PropTypes.shape({}).isRequired,
  isKeyRequired: PropTypes.bool,
  isValueRequired: PropTypes.bool,
  keyHeader: PropTypes.string,
  keyLabel: PropTypes.string,
  keyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  valueHeader: PropTypes.string,
  valueLabel: PropTypes.string
}

export default FormKeyValueTable
