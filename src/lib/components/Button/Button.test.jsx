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
import Button from './Button'
import { TERTIARY_BUTTON } from '../../constants'

vi.mock('./Button.scss', () => ({}))
vi.mock('../../constants', async importOriginal => {
  const actual = await importOriginal()
  return {
    ...actual
  }
})
vi.mock('../Tooltip/Tooltip', () => ({
  default: ({ children, template }) => (
    <div data-testid="mock-tooltip">
      {children}
      <div data-testid="mock-tooltip-template">{template}</div>
    </div>
  )
}))
vi.mock('../TooltipTemplate/TextTooltipTemplate', () => ({
  default: ({ text }) => <span data-testid="mock-text-template">{text}</span>
}))

describe('Button Component', () => {
  const defaultProps = {
    id: 'test-btn',
    label: 'Click Me',
    onClick: vi.fn()
  }

  it('renders correctly with default props', () => {
    render(<Button {...defaultProps} />)

    const button = screen.getByTestId('test-btn')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click Me')
    expect(button).toHaveClass('btn-normal')
    expect(button).toHaveClass(`btn-${TERTIARY_BUTTON}`)
  })

  it('applies correct variant and density classes', () => {
    render(<Button {...defaultProps} variant="danger" density="dense" className="custom-class" />)

    const button = screen.getByTestId('test-btn')

    expect(button).toHaveClass('btn-danger')
    expect(button).toHaveClass('btn-dense')
    expect(button).toHaveClass('custom-class')
  })

  it('renders icon on the left by default', () => {
    render(<Button {...defaultProps} icon={<span data-testid="icon">Icon</span>} />)

    const button = screen.getByTestId('test-btn')
    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
    expect(button.firstChild).toBe(icon)
  })

  it('renders icon on the right when iconPosition is "right"', () => {
    render(
      <Button {...defaultProps} icon={<span data-testid="icon">Icon</span>} iconPosition="right" />
    )

    const button = screen.getByTestId('test-btn')
    const icon = screen.getByTestId('icon')

    expect(button.lastChild).toBe(icon)
  })

  it('uses label as tooltip text if tooltip prop is missing', () => {
    render(<Button {...defaultProps} label="Label Only" />)

    expect(screen.getByTestId('mock-text-template')).toHaveTextContent('Label Only')
  })

  it('uses explicit tooltip prop when provided', () => {
    render(<Button {...defaultProps} label="Label" tooltip="Custom Tooltip" />)

    expect(screen.getByTestId('mock-text-template')).toHaveTextContent('Custom Tooltip')
  })

  it('handles onClick event', () => {
    render(<Button {...defaultProps} />)

    const button = screen.getByTestId('test-btn')
    fireEvent.click(button)

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })

  it('passes extra props (restProps) to the button element', () => {
    render(<Button {...defaultProps} disabled aria-label="test-aria" />)

    const button = screen.getByTestId('test-btn')

    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-label', 'test-aria')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef()
    render(<Button {...defaultProps} ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current).toHaveAttribute('data-testid', 'test-btn')
  })
})
