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
import ErrorMessage from './ErrorMessage'

vi.mock('./errorMessage.scss', () => ({}))
vi.mock('../../images/unsuccess_alert.svg?react', () => ({
  default: props => <svg data-testid="alert-icon" {...props} />
}))
vi.mock('../../images/close.svg?react', () => ({
  default: props => <svg data-testid="close-icon" {...props} />
}))
vi.mock('../Tooltip/Tooltip', () => ({
  default: ({ children, template }) => (
    <div data-testid="mock-tooltip">
      {children}
      <div data-testid="tooltip-content">{template}</div>
    </div>
  )
}))
vi.mock('../TooltipTemplate/TextTooltipTemplate', () => ({
  default: ({ text }) => <span data-testid="tooltip-text">{text}</span>
}))

describe('ErrorMessage Component', () => {
  const defaultProps = {
    message: 'Something went wrong'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the error message and alert icon', () => {
    render(<ErrorMessage {...defaultProps} />)

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()

    expect(screen.getByTestId('alert-icon')).toBeInTheDocument()

    expect(screen.getByTestId('error-message')).toHaveClass('error')
  })

  it('does NOT render close button when closeError prop is missing', () => {
    render(<ErrorMessage {...defaultProps} closeError={null} />)

    expect(screen.queryByTestId('close')).not.toBeInTheDocument()
    expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument()
  })

  it('renders close button when closeError prop is provided', () => {
    const closeMock = vi.fn()
    render(<ErrorMessage {...defaultProps} closeError={closeMock} />)

    const closeButton = screen.getByTestId('close')
    expect(closeButton).toBeInTheDocument()

    expect(screen.getByTestId('close-icon')).toBeInTheDocument()
  })

  it('calls closeError handler when close button is clicked', () => {
    const closeMock = vi.fn()
    render(<ErrorMessage {...defaultProps} closeError={closeMock} />)

    const closeButton = screen.getByTestId('close')
    fireEvent.click(closeButton)

    expect(closeMock).toHaveBeenCalledTimes(1)
  })

  it('renders Tooltip around the close button with correct text', () => {
    const closeMock = vi.fn()
    render(<ErrorMessage {...defaultProps} closeError={closeMock} />)

    const tooltip = screen.getByTestId('mock-tooltip')
    expect(tooltip).toBeInTheDocument()

    expect(screen.getByTestId('tooltip-text')).toHaveTextContent('Close')
  })
})
