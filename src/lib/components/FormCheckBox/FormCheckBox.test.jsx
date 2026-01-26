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
import FormCheckBox from './FormCheckBox'

vi.mock('./formCheckBox.scss', () => ({}))

describe('FormCheckBox Component', () => {
  const renderWithForm = component => {
    return render(<Form onSubmit={() => {}}>{() => component}</Form>)
  }

  it('renders correctly with required props', () => {
    renderWithForm(<FormCheckBox name="testCheck" label="Test Label" />)

    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByTestId('form-field-checkbox')).toHaveClass('form-field-checkbox')
  })

  it('toggles state when clicked', () => {
    renderWithForm(<FormCheckBox name="testCheck" />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).not.toBeChecked()
    expect(checkbox).toHaveClass('unchecked')

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
    expect(checkbox).toHaveClass('checked')
  })

  it('applies custom className', () => {
    renderWithForm(<FormCheckBox name="testCheck" className="custom-class" />)

    const wrapper = screen.getByTestId('form-field-checkbox')
    expect(wrapper).toHaveClass('custom-class')
  })

  it('applies readonly styles', () => {
    renderWithForm(<FormCheckBox name="testCheck" readOnly={true} />)

    const wrapper = screen.getByTestId('form-field-checkbox')

    expect(wrapper).toHaveClass('form-field-checkbox_readonly')
  })

  it('applies highlighted class to label when highlightLabel is true', () => {
    renderWithForm(<FormCheckBox name="testCheck" label="Label" highlightLabel={true} />)

    const label = screen.getByText('Label')
    expect(label).toHaveClass('highlighted')
  })

  it('renders children content', () => {
    renderWithForm(
      <FormCheckBox name="testCheck">
        <span data-testid="child-span">Child Content</span>
      </FormCheckBox>
    )

    expect(screen.getByTestId('child-span')).toBeInTheDocument()
  })

  it('sets input id based on value prop if provided', () => {
    renderWithForm(<FormCheckBox name="testCheck" value="custom-value-id" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'custom-value-id')
  })

  it('sets input id based on name prop if value is not provided', () => {
    renderWithForm(<FormCheckBox name="testCheck" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'testCheck')
  })

  it('connects label to input via htmlFor', () => {
    renderWithForm(<FormCheckBox name="testCheck" label="Click Me" />)

    const label = screen.getByText('Click Me')
    fireEvent.click(label)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })
})
