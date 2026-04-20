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
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import FormKeyValueTable from './FormKeyValueTable'
import { useFormTable } from '../../hooks'

vi.mock('../../hooks', () => ({
  useFormTable: vi.fn()
}))

vi.mock('../../components/FormInput/FormInput', () => ({
  default: props => {
    const safeProps = { ...props }

    delete safeProps.validationRules
    delete safeProps.density

    return <input data-testid={`input-${props.name}`} onChange={() => {}} {...safeProps} />
  }
}))
vi.mock('../../components/FormSelect/FormSelect', () => ({
  default: ({ name, options }) => (
    <select data-testid={`select-${name}`}>
      {options.map(opt => (
        <option key={opt.id} value={opt.id}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}))
vi.mock('../../components/Tooltip/Tooltip', () => ({
  default: ({ children }) => <span>{children}</span>
}))
vi.mock('../../components/TooltipTemplate/TextTooltipTemplate', () => ({
  default: () => null
}))
vi.mock('../../elements/FormActionButton/FormActionButton', () => ({
  default: ({ label, onClick, hidden, disabled }) => {
    if (hidden) return null
    return (
      <button data-testid="add-new-btn" onClick={onClick} disabled={disabled}>
        {label}
      </button>
    )
  }
}))
vi.mock('../../elements/FormRowActions/FormRowActions', () => ({
  default: ({ applyChanges, deleteRow, index }) => (
    <div data-testid={`row-actions-${index}`}>
      <button onClick={() => applyChanges(index)} data-testid="apply-btn">
        Apply
      </button>
      <button onClick={() => deleteRow(index)} data-testid="delete-btn">
        Delete
      </button>
    </div>
  )
}))

const renderWithForm = (component, initialValues = {}) => {
  return render(
    <Form onSubmit={() => {}} mutators={{ ...arrayMutators }} initialValues={initialValues}>
      {() => component}
    </Form>
  )
}

describe('FormKeyValueTable Component', () => {
  const defaultProps = {
    fieldsPath: 'parameters',
    formState: {},
    addNewItemLabel: 'Add Param'
  }

  const defaultHookReturn = {
    addNewRow: vi.fn(),
    applyChanges: vi.fn(),
    bottomScrollRef: { current: null },
    deleteRow: vi.fn(),
    discardOrDelete: vi.fn(),
    editingItem: null,
    enterEditMode: vi.fn(),
    isCurrentRowEditing: () => false
  }

  const initialData = {
    parameters: [{ data: { key: 'Key1', value: 'Val1' } }, { data: { key: 'Key2', value: 'Val2' } }]
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useFormTable).mockReturnValue(defaultHookReturn)
  })

  it('renders headers and existing rows in view mode', () => {
    renderWithForm(<FormKeyValueTable {...defaultProps} />, initialData)

    expect(screen.getByText('Key')).toBeInTheDocument()
    expect(screen.getByText('Value')).toBeInTheDocument()

    expect(screen.getByText('Key1')).toBeInTheDocument()
    expect(screen.getByText('Val1')).toBeInTheDocument()
    expect(screen.getByText('Key2')).toBeInTheDocument()
    expect(screen.getByText('Val2')).toBeInTheDocument()

    expect(screen.getByTestId('add-new-btn')).toHaveTextContent('Add Param')
  })

  it('renders inputs when a row is in edit mode', () => {
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      editingItem: { ui: { index: 0 } },
      isCurrentRowEditing: path => path === 'parameters[0]'
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} />, initialData)

    expect(screen.getByTestId('input-parameters[0].data.key')).toBeInTheDocument()
    expect(screen.getByTestId('input-parameters[0].data.value')).toBeInTheDocument()
    expect(screen.getByTestId('row-actions-0')).toBeInTheDocument()

    expect(screen.getByText('Key2')).toBeInTheDocument()
  })

  it('calls enterEditMode when clicking a row in view mode', () => {
    const enterEditModeMock = vi.fn()
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      enterEditMode: enterEditModeMock
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} />, initialData)

    fireEvent.click(screen.getByText('Key1').closest('.form-table__row'))

    expect(enterEditModeMock).toHaveBeenCalledWith(
      expect.any(Object),
      expect.anything(),
      'parameters',
      0
    )
  })

  it('calls addNewRow when "Add new item" button is clicked', () => {
    const addNewRowMock = vi.fn()
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      addNewRow: addNewRowMock
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} />, initialData)

    fireEvent.click(screen.getByTestId('add-new-btn'))

    expect(addNewRowMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        data: { key: '', value: '' }
      })
    )
  })

  it('renders FormSelect for key when keyOptions are provided and row is editing', () => {
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      editingItem: { ui: { index: 0 } },
      isCurrentRowEditing: path => path === 'parameters[0]'
    })

    const keyOptions = [
      { id: 'opt1', label: 'Option 1' },
      { id: 'opt2', label: 'Option 2' }
    ]

    renderWithForm(<FormKeyValueTable {...defaultProps} keyOptions={keyOptions} />, initialData)

    expect(screen.getByTestId('select-parameters[0].data.key')).toBeInTheDocument()
    expect(screen.getByTestId('input-parameters[0].data.value')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('masks value when valueType is password in view mode', () => {
    renderWithForm(<FormKeyValueTable {...defaultProps} valueType="password" />, initialData)

    expect(screen.queryByText('Val1')).not.toBeInTheDocument()
    expect(screen.getAllByText('*****')).toHaveLength(2)
  })

  it('sets input type to password when valueType is password in edit mode', () => {
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      editingItem: { ui: { index: 0 } },
      isCurrentRowEditing: () => true
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} valueType="password" />, initialData)

    const valueInput = screen.getByTestId('input-parameters[0].data.value')
    expect(valueInput).toHaveAttribute('type', 'password')
  })

  it('hides add button when editing a new item', () => {
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      editingItem: { ui: { index: 0, isNew: true } },
      isCurrentRowEditing: () => true
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} />, initialData)

    expect(screen.queryByTestId('add-new-btn')).not.toBeInTheDocument()
  })

  it('does not trigger edit mode when disabled', () => {
    const enterEditModeMock = vi.fn()
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      enterEditMode: enterEditModeMock
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} disabled={true} />, initialData)

    fireEvent.click(screen.getByText('Key1').closest('.form-table__row'))

    expect(enterEditModeMock).not.toHaveBeenCalled()
    expect(screen.getByTestId('add-new-btn')).toBeDisabled()
  })

  it('renders defaultKey when adding new row if provided', () => {
    const addNewRowMock = vi.fn()
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      addNewRow: addNewRowMock
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} defaultKey="FixedKey" />, initialData)

    fireEvent.click(screen.getByTestId('add-new-btn'))

    expect(addNewRowMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        data: { key: 'FixedKey', value: '' }
      })
    )
  })

  it('renders key as text (not input) in edit mode if isKeyEditable is false and not new', () => {
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      editingItem: { ui: { index: 0, isNew: false } },
      isCurrentRowEditing: () => true
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} isKeyEditable={false} />, initialData)

    expect(screen.getByText('Key1')).toBeInTheDocument()
    expect(screen.queryByTestId('input-parameters[0].data.key')).not.toBeInTheDocument()
    expect(screen.getByTestId('input-parameters[0].data.value')).toBeInTheDocument()
  })

  it('renders key as input in edit mode if isKeyEditable is false BUT item is new', () => {
    vi.mocked(useFormTable).mockReturnValue({
      ...defaultHookReturn,
      editingItem: { ui: { index: 0, isNew: true } },
      isCurrentRowEditing: () => true
    })

    renderWithForm(<FormKeyValueTable {...defaultProps} isKeyEditable={false} />, initialData)

    expect(screen.getByTestId('input-parameters[0].data.key')).toBeInTheDocument()
  })
})
