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
import FormCombobox from './FormCombobox'

vi.mock('./formCombobox.scss', () => ({}))

vi.mock('../../images/arrow.svg?react', () => ({
  default: props => <div data-testid="arrow-icon" {...props} onClick={props.onClick} />
}))
vi.mock('../../images/search.svg?react', () => ({
  default: props => <div data-testid="search-icon" {...props} />
}))
vi.mock('../../images/warning.svg?react', () => ({
  default: props => <div data-testid="warning-icon" {...props} onClick={props.onClick} />
}))
vi.mock('../../images/exclamation-mark.svg?react', () => ({
  default: props => <div data-testid="exclamation-icon" {...props} />
}))

vi.mock('../PopUpDialog/PopUpDialog', () => ({
  default: ({ children, className }) => (
    <div data-testid="popup-dialog" className={className}>
      {children}
    </div>
  )
}))

vi.mock('../Tooltip/Tooltip', () => ({
  default: ({ children, template }) => (
    <div data-testid="tooltip">
      {children}
      <div data-testid="tooltip-template">{template}</div>
    </div>
  )
}))

vi.mock('../../elements/OptionsMenu/OptionsMenu', () => ({
  default: ({ children, show }) => (show ? <div data-testid="options-menu">{children}</div> : null)
}))

vi.mock('../../elements/ValidationTemplate/ValidationTemplate', () => ({
  default: ({ valid, validationMessage }) => (
    <div data-testid="validation-item" data-valid={valid}>
      {validationMessage}
    </div>
  )
}))

const renderWithForm = component => {
  return render(<Form onSubmit={() => {}}>{() => component}</Form>)
}

describe('FormCombobox Component', () => {
  const defaultProps = {
    name: 'testCombobox',
    label: 'Test Label',
    selectOptions: [
      { id: 'http://', label: 'HTTP' },
      { id: 'https://', label: 'HTTPS' }
    ],
    suggestionList: [
      { id: 'google.com', label: 'Google' },
      { id: 'github.com', label: 'GitHub' }
    ]
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly with default props', () => {
    renderWithForm(<FormCombobox {...defaultProps} />)

    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByTestId('testCombobox-form-combobox-input')).toBeInTheDocument()
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument()
  })

  it('opens select dropdown when arrow is clicked', () => {
    renderWithForm(<FormCombobox {...defaultProps} />)

    const arrow = screen.getByTestId('arrow-icon')
    fireEvent.click(arrow)

    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()
    expect(screen.getByText('HTTP')).toBeInTheDocument()
    expect(screen.getByText('HTTPS')).toBeInTheDocument()
  })

  it('selects an option from the dropdown', () => {
    renderWithForm(<FormCombobox {...defaultProps} />)

    fireEvent.click(screen.getByTestId('arrow-icon'))
    fireEvent.click(screen.getByText('HTTPS'))

    expect(screen.getByText('https://')).toBeInTheDocument()
    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('shows suggestions when input is focused', async () => {
    renderWithForm(<FormCombobox {...defaultProps} />)

    const input = screen.getByTestId('testCombobox-form-combobox-input')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()
    })
    expect(screen.getByText('Google')).toBeInTheDocument()
  })

  it('filters suggestions via internal search input', async () => {
    renderWithForm(<FormCombobox {...defaultProps} hideSearchInput={false} />)

    const input = screen.getByTestId('testCombobox-form-combobox-input')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByTestId('testCombobox-form-combobox-search')).toBeInTheDocument()
    })

    const searchInput = screen.getByTestId('testCombobox-form-combobox-search')

    fireEvent.focus(searchInput)
    fireEvent.change(searchInput, { target: { value: 'git' } })

    await waitFor(() => {
      expect(screen.getByText('GitHub')).toBeInTheDocument()
      expect(screen.queryByText('Google')).not.toBeInTheDocument()
    })
  })

  it('handles matching option click and appends slash based on logic', async () => {
    renderWithForm(<FormCombobox {...defaultProps} maxSuggestedMatches={2} />)

    const input = screen.getByTestId('testCombobox-form-combobox-input')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'goog' } })

    await waitFor(() => {
      expect(screen.getByText('Google')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Google'))

    await waitFor(() => {
      expect(input).toHaveValue('google.com/')
    })
  })

  it('closes dropdowns when clicking outside', async () => {
    renderWithForm(<FormCombobox {...defaultProps} />)

    fireEvent.click(screen.getByTestId('arrow-icon'))
    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()

    fireEvent.click(document.body)

    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('displays validation error for required field', async () => {
    renderWithForm(<FormCombobox {...defaultProps} required={true} />)

    const input = screen.getByTestId('testCombobox-form-combobox-input')

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'temp' } })
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.blur(input)

    await waitFor(() => {
      expect(screen.getByTestId('exclamation-icon')).toBeInTheDocument()
      expect(screen.getByTestId('tooltip-template')).toHaveTextContent('This field is required')
    })
  })

  it('displays custom validation rules error', async () => {
    const rules = [{ name: 'testRule', label: 'Must contain X', pattern: /^.*X.*$/ }]
    renderWithForm(<FormCombobox {...defaultProps} rules={rules} />)

    const input = screen.getByTestId('testCombobox-form-combobox-input')

    fireEvent.change(input, { target: { value: 'abc' } })
    fireEvent.blur(input)

    await waitFor(() => {
      expect(screen.getByTestId('warning-icon')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByTestId('warning-icon'))

    expect(screen.getByTestId('options-menu')).toBeInTheDocument()
    expect(screen.getByText('Must contain X')).toBeInTheDocument()
  })
})
