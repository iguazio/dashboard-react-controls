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
import { describe, it, expect, vi } from 'vitest'
import { Form } from 'react-final-form'
import FormToggle from './FormToggle'

vi.mock('./formToggle.scss', () => ({}))

const renderWithForm = (component, { initialValues } = {}) => {
  return render(
    <Form onSubmit={() => {}} initialValues={initialValues}>
      {() => component}
    </Form>
  )
}

describe('FormToggle Component', () => {
  const defaultProps = {
    name: 'toggleField',
    label: 'Toggle Label'
  }

  it('renders correctly with default props', () => {
    renderWithForm(<FormToggle {...defaultProps} />)

    expect(screen.getByText('Toggle Label')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByTestId('toggleField-form-field-toggle')).toBeInTheDocument()
  })

  it('toggles checked state on click', () => {
    renderWithForm(<FormToggle {...defaultProps} />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('applies density class when density prop is provided', () => {
    renderWithForm(<FormToggle {...defaultProps} density="dense" />)

    const container = screen.getByTestId('toggleField-form-field-toggle')
    const wrapperDiv = container.querySelector('.form-field__wrapper')

    expect(wrapperDiv).toHaveClass('form-field__wrapper-dense')
  })

  it('does not apply density class when density prop is empty', () => {
    renderWithForm(<FormToggle {...defaultProps} density="" />)

    const container = screen.getByTestId('toggleField-form-field-toggle')
    const wrapperDiv = container.querySelector('.form-field__wrapper')

    expect(wrapperDiv).toHaveClass('form-field__wrapper')
    expect(wrapperDiv).not.toHaveClass('form-field__wrapper-')
  })

  it('calls custom onChange handler when clicked', () => {
    const onChangeSpy = vi.fn()
    renderWithForm(<FormToggle {...defaultProps} onChange={onChangeSpy} />)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(onChangeSpy).toHaveBeenCalledTimes(1)
  })

  it('sets the input id based on the name prop', () => {
    renderWithForm(<FormToggle {...defaultProps} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'toggleField')
  })

  it('initializes with true value if form has initialValues', () => {
    renderWithForm(<FormToggle {...defaultProps} />, {
      initialValues: { toggleField: true }
    })

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('passes additional props to the input element', () => {
    renderWithForm(<FormToggle {...defaultProps} disabled data-custom="test" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
    expect(checkbox).toHaveAttribute('data-custom', 'test')
  })

  it('renders without label if label prop is not provided', () => {
    renderWithForm(<FormToggle name="toggleField" />)

    expect(screen.queryByText('Toggle Label')).not.toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
