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
import FormRadio from './FormRadio'

vi.mock('./FormRadio.scss', () => ({}))
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

const renderWithForm = component => {
  return render(<Form onSubmit={() => {}}>{() => component}</Form>)
}

describe('FormRadio Component', () => {
  const defaultProps = {
    name: 'testRadio',
    label: 'Radio Label',
    value: 'option1'
  }

  it('renders correctly with required props', () => {
    renderWithForm(<FormRadio {...defaultProps} />)

    expect(screen.getByText('Radio Label')).toBeInTheDocument()
    expect(screen.getByRole('radio')).toBeInTheDocument()

    const wrapper = screen.getByTestId('testRadio-option1-form-radio')
    expect(wrapper).toHaveClass('form-field-radio')
  })

  it('selects the radio button when clicked', () => {
    renderWithForm(<FormRadio {...defaultProps} />)

    const radio = screen.getByRole('radio')

    expect(radio).not.toBeChecked()
    expect(radio).toHaveClass('unchecked')

    fireEvent.click(radio)

    expect(radio).toBeChecked()
    expect(radio).toHaveClass('checked')
  })

  it('applies readonly class when readOnly prop is true', () => {
    renderWithForm(<FormRadio {...defaultProps} readOnly={true} />)

    const wrapper = screen.getByTestId('testRadio-option1-form-radio')
    expect(wrapper).toHaveClass('form-field-radio_readonly')
  })

  it('renders tooltip when tooltip prop is provided', () => {
    renderWithForm(<FormRadio {...defaultProps} tooltip="Help info" />)

    expect(screen.getByTestId('tooltip')).toBeInTheDocument()
    expect(screen.getByTestId('tooltip-text')).toHaveTextContent('Help info')

    expect(screen.getByText('Radio Label')).toBeInTheDocument()
  })

  it('does not render tooltip when tooltip prop is missing', () => {
    renderWithForm(<FormRadio {...defaultProps} />)

    expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument()
  })

  it('connects label to input via htmlFor and id', () => {
    renderWithForm(<FormRadio {...defaultProps} />)

    const radio = screen.getByRole('radio')
    const label = screen.getByText('Radio Label')

    const expectedId = 'testRadiooption1'

    expect(radio).toHaveAttribute('id', expectedId)
    expect(label).toHaveAttribute('for', expectedId)

    fireEvent.click(label)
    expect(radio).toBeChecked()
  })

  it('applies custom className to the wrapper', () => {
    renderWithForm(<FormRadio {...defaultProps} className="custom-class" />)

    const wrapper = screen.getByTestId('testRadio-option1-form-radio')
    expect(wrapper).toHaveClass('custom-class')
  })

  it('generates correct data-testid based on name and value', () => {
    renderWithForm(<FormRadio name="color" value="red" label="Red" />)

    expect(screen.getByTestId('color-red-form-radio')).toBeInTheDocument()
    expect(screen.getByTestId('color-red-radio')).toBeInTheDocument()
  })
})
