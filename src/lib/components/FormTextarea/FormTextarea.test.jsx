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
import { Form } from 'react-final-form'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import FormTextarea from './FormTextarea'

vi.mock('./formTextarea.scss', () => ({}))

vi.mock('../../images/exclamation-mark.svg?react', () => ({
  default: props => <div data-testid="exclamation-icon" {...props} />
}))

vi.mock('../Tooltip/Tooltip', () => ({
  default: ({ children, template }) => (
    <div data-testid="tooltip">
      {children}
      <div data-testid="tooltip-template">{template}</div>
    </div>
  )
}))

vi.mock('../TooltipTemplate/TextTooltipTemplate', () => ({
  default: ({ text }) => <span data-testid="tooltip-text">{text}</span>
}))

vi.mock('../Tip/Tip', () => ({
  default: ({ text }) => <div data-testid="field-tip">{text}</div>
}))

const renderWithForm = component => {
  return render(<Form onSubmit={() => {}}>{() => component}</Form>)
}

describe('FormTextarea Component', () => {
  const defaultProps = {
    name: 'description',
    label: 'Description'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly with default props', () => {
    renderWithForm(<FormTextarea {...defaultProps} />)

    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByTestId('textarea')).toBeInTheDocument()
    expect(screen.queryByText(/characters left/i)).not.toBeInTheDocument()
  })

  it('handles text input correctly', () => {
    renderWithForm(<FormTextarea {...defaultProps} />)

    const textarea = screen.getByTestId('textarea')
    fireEvent.change(textarea, { target: { value: 'Hello World' } })

    expect(textarea).toHaveValue('Hello World')
  })

  it('displays character counter when maxLength is set', () => {
    const maxLength = 100
    renderWithForm(<FormTextarea {...defaultProps} maxLength={maxLength} />)

    expect(screen.getByText('100 characters left')).toBeInTheDocument()

    const textarea = screen.getByTestId('textarea')
    fireEvent.change(textarea, { target: { value: 'Hello' } })

    expect(screen.getByText('95 characters left')).toBeInTheDocument()
  })

  it('handles singular/plural logic in character counter', () => {
    const maxLength = 10
    renderWithForm(<FormTextarea {...defaultProps} maxLength={maxLength} />)

    const textarea = screen.getByTestId('textarea')

    fireEvent.change(textarea, { target: { value: '123456789' } })

    expect(screen.getByText('1 character left')).toBeInTheDocument()
  })

  it('displays validation error when required field is empty and touched', async () => {
    renderWithForm(<FormTextarea {...defaultProps} required={true} />)

    const textarea = screen.getByTestId('textarea')

    fireEvent.focus(textarea)
    fireEvent.change(textarea, { target: { value: 'temp' } })
    fireEvent.change(textarea, { target: { value: '' } })
    fireEvent.blur(textarea)

    await waitFor(() => {
      expect(screen.getByTestId('exclamation-icon')).toBeInTheDocument()
      expect(screen.getByTestId('tooltip-text')).toHaveTextContent('This field is required')
    })
  })

  it('validates against starting with spaces', async () => {
    renderWithForm(<FormTextarea {...defaultProps} invalidText="No spaces allowed" />)

    const textarea = screen.getByTestId('textarea')

    fireEvent.focus(textarea)
    fireEvent.change(textarea, { target: { value: ' text' } })
    fireEvent.blur(textarea)

    await waitFor(() => {
      expect(screen.getByTestId('exclamation-icon')).toBeInTheDocument()
      expect(screen.getByTestId('tooltip-text')).toHaveTextContent('No spaces allowed')
    })
  })

  it('renders a tip when provided (and not required)', () => {
    renderWithForm(<FormTextarea {...defaultProps} tip="Help info" />)

    expect(screen.getByTestId('field-tip')).toHaveTextContent('Help info')
  })

  it('does NOT render a tip when field has validation error', async () => {
    renderWithForm(<FormTextarea {...defaultProps} required={true} tip="Help info" />)

    const textarea = screen.getByTestId('textarea')

    fireEvent.focus(textarea)
    fireEvent.change(textarea, { target: { value: 't' } })
    fireEvent.change(textarea, { target: { value: '' } })
    fireEvent.blur(textarea)

    await waitFor(() => {
      expect(screen.getByTestId('exclamation-icon')).toBeInTheDocument()
    })

    expect(screen.queryByTestId('field-tip')).not.toBeInTheDocument()
  })

  it('renders custom icon when textAreaIcon is provided', () => {
    renderWithForm(
      <FormTextarea {...defaultProps} textAreaIcon={<span data-testid="custom-icon">Icon</span>} />
    )

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('disables the textarea when disabled prop is true', () => {
    renderWithForm(<FormTextarea {...defaultProps} disabled={true} />)

    const textarea = screen.getByTestId('textarea')
    expect(textarea).toBeDisabled()
  })

  it('calls onChange callback when typing', () => {
    const onChangeSpy = vi.fn()
    renderWithForm(<FormTextarea {...defaultProps} onChange={onChangeSpy} />)

    const textarea = screen.getByTestId('textarea')
    fireEvent.change(textarea, { target: { value: 'test' } })

    expect(onChangeSpy).toHaveBeenCalledWith('test')
  })

  it('sets focus programmatically when focused prop is true', () => {
    renderWithForm(<FormTextarea {...defaultProps} focused={true} />)

    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveFocus()
  })
})
