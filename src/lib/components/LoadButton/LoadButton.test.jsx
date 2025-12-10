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
import LoadButton from './LoadButton'
import { PRIMARY_BUTTON, SECONDARY_BUTTON, TERTIARY_BUTTON } from '../../constants'

describe('LoadButton Component', () => {
  const defaultProps = {
    variant: TERTIARY_BUTTON,
    label: 'Load button'
  }

  it('renders correctly with default props', () => {
    render(<LoadButton {...defaultProps} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Load button')
    expect(button).toHaveClass('btn-load')
    expect(button).toHaveClass(`btn-load-${TERTIARY_BUTTON}`)
  })

  it('renders with custom label', () => {
    render(<LoadButton {...defaultProps} label="Submit" />)
    expect(screen.getByRole('button')).toHaveTextContent('Submit')
  })

  it('renders with label as an element', () => {
    render(<LoadButton {...defaultProps} label={<span data-testid="custom-label">Go</span>} />)
    expect(screen.getByTestId('custom-label')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    const { rerender } = render(<LoadButton {...defaultProps} variant={PRIMARY_BUTTON} />)
    expect(screen.getByRole('button')).toHaveClass(`btn-load-${PRIMARY_BUTTON}`)

    rerender(<LoadButton {...defaultProps} variant={SECONDARY_BUTTON} />)
    expect(screen.getByRole('button')).toHaveClass(`btn-load-${SECONDARY_BUTTON}`)
  })

  it('applies custom className', () => {
    render(<LoadButton {...defaultProps} className="custom-test-class" />)
    expect(screen.getByRole('button')).toHaveClass('custom-test-class')
  })

  it('passes rest props to the button element', () => {
    render(<LoadButton {...defaultProps} disabled type="submit" data-testid="btn" />)

    const button = screen.getByTestId('btn')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('handles onClick event', () => {
    const handleClick = vi.fn()
    render(<LoadButton {...defaultProps} onClick={handleClick} />)

    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('forwards ref to the button element', () => {
    const ref = React.createRef()
    render(<LoadButton {...defaultProps} ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current).toHaveClass('btn-load')
  })
})
