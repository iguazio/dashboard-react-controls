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
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Form } from 'react-final-form'
import FormSelect from './FormSelect'

vi.mock('./formSelect.scss', () => ({}))

vi.mock('../../images/dropdown.svg?react', () => ({
  default: props => <div data-testid="caret-icon" {...props} />
}))

vi.mock('../Tooltip/Tooltip', () => ({
  default: ({ children, template }) => (
    <div data-testid="tooltip">
      {children}
      {template}
    </div>
  )
}))

vi.mock('../TooltipTemplate/TextTooltipTemplate', () => ({
  default: ({ text }) => <span data-testid="tooltip-text">{text}</span>
}))

vi.mock('../PopUpDialog/PopUpDialog', () => ({
  default: ({ children, style, className }) => (
    <div data-testid="popup-dialog" style={style} className={className}>
      {children}
    </div>
  )
}))

vi.mock('../ConfirmDialog/ConfirmDialog', () => ({
  default: ({ isOpen, header, message, confirmButton, cancelButton }) => {
    if (!isOpen) return null
    return (
      <div data-testid="confirm-dialog">
        <h1>{header}</h1>
        <p>{message}</p>
        <button onClick={confirmButton.handler} data-testid="confirm-dialog-confirm-btn">
          {confirmButton.label}
        </button>
        <button onClick={cancelButton.handler} data-testid="confirm-dialog-cancel-btn">
          {cancelButton.label}
        </button>
      </div>
    )
  }
}))

vi.mock('../../elements/SelectOption/SelectOption', () => ({
  default: ({ item, onClick, selectedId }) => (
    <div
      data-testid={`select-option-${item.id}`}
      data-custom-id={item.id}
      className={`select-option ${selectedId === item.id ? 'selected' : ''}`}
      onClick={() => onClick(item.id)}
    >
      {item.label}
    </div>
  )
}))

const renderWithForm = (component, { initialValues } = {}) => {
  return render(
    <Form onSubmit={() => {}} initialValues={initialValues}>
      {() => component}
    </Form>
  )
}

describe('FormSelect Component', () => {
  const options = [
    { id: 'opt1', label: 'Option 1' },
    { id: 'opt2', label: 'Option 2' },
    { id: 'opt3', label: 'Option 3' }
  ]

  const defaultProps = {
    name: 'testSelect',
    label: 'Test Label',
    options: options
  }

  beforeEach(() => {
    vi.clearAllMocks()

    Element.prototype.scrollIntoView = vi.fn()
    Element.prototype.scrollTo = vi.fn()
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      width: 200,
      height: 50,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }))
  })

  it('renders correctly with default props', () => {
    renderWithForm(<FormSelect {...defaultProps} />)

    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByTestId('caret-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('opens dropdown when clicked', () => {
    renderWithForm(<FormSelect {...defaultProps} />)

    fireEvent.click(screen.getByTestId('testSelect-form-field-select'))

    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()
    expect(screen.getByTestId('select-option-opt1')).toBeInTheDocument()
  })

  it('selects an option and closes dropdown', async () => {
    renderWithForm(<FormSelect {...defaultProps} />)

    fireEvent.click(screen.getByTestId('testSelect-form-field-select'))
    expect(screen.getByTestId('select-option-opt1')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('select-option-opt2'))

    await waitFor(() => {
      expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
    })

    expect(screen.getByTestId('selected-option')).toHaveTextContent('Option 2')
  })

  it('displays default text "Select Option" when no value is selected (ignoring placeholder)', () => {
    renderWithForm(<FormSelect {...defaultProps} placeholder="Choose..." />)

    expect(screen.getByTestId('selected-option')).toHaveTextContent('Select Option')
  })

  it('filters options when search is enabled', async () => {
    renderWithForm(<FormSelect {...defaultProps} search={true} />)

    fireEvent.click(screen.getByTestId('testSelect-form-field-select'))

    const searchInput = screen.getByPlaceholderText('Search...')
    fireEvent.change(searchInput, { target: { value: 'Option 3' } })

    expect(screen.getByTestId('select-option-opt3')).toBeInTheDocument()
    expect(screen.queryByTestId('select-option-opt1')).not.toBeInTheDocument()
  })

  it('does not open when disabled', () => {
    renderWithForm(<FormSelect {...defaultProps} disabled={true} />)

    fireEvent.click(screen.getByTestId('testSelect-form-field-select'))

    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('renders selected item action icon when value is selected', () => {
    const action = {
      icon: <span data-testid="action-icon">Icon</span>,
      handler: vi.fn(),
      tooltip: 'Action Tooltip'
    }

    renderWithForm(<FormSelect {...defaultProps} selectedItemAction={action} />, {
      initialValues: { testSelect: 'opt1' }
    })

    expect(screen.getByTestId('action-icon')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('action-icon').closest('button'))
    expect(action.handler).toHaveBeenCalledWith('opt1')
  })

  it('opens confirm dialog for selected item action if confirm config is present', () => {
    const confirmHandler = vi.fn()
    const action = {
      icon: <span>Icon</span>,
      handler: confirmHandler,
      confirm: {
        title: 'Are you sure?',
        message: 'Do it?',
        btnConfirmLabel: 'Yes',
        btnConfirmType: 'danger'
      }
    }

    renderWithForm(<FormSelect {...defaultProps} selectedItemAction={action} />, {
      initialValues: { testSelect: 'opt1' }
    })

    const actionBtn = screen.getByText('Icon').closest('button')
    fireEvent.click(actionBtn)

    expect(screen.getByTestId('confirm-dialog')).toBeInTheDocument()
    expect(screen.getByText('Are you sure?')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('confirm-dialog-confirm-btn'))

    expect(confirmHandler).toHaveBeenCalledWith('opt1')
    expect(screen.queryByTestId('confirm-dialog')).not.toBeInTheDocument()
  })

  it('handles multiple selection display logic', () => {
    renderWithForm(<FormSelect {...defaultProps} multiple={true} />, {
      initialValues: { testSelect: ['opt1', 'opt2'] }
    })

    expect(screen.getByTestId('selected-option')).toHaveTextContent('Option 1, Option 2')
  })

  it('scrolls selected option into view on open', async () => {
    renderWithForm(<FormSelect {...defaultProps} scrollToView={true} />, {
      initialValues: { testSelect: 'opt3' }
    })

    fireEvent.click(screen.getByTestId('testSelect-form-field-select'))

    await waitFor(() => {
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
    })
  })
})
