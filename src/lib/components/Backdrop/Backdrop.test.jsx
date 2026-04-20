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
import { render, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Backdrop from './Backdrop'

vi.mock('./Backdrop.scss', () => ({}))

describe('Backdrop Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('does not render when "show" is false (initial state)', () => {
    const { container } = render(<Backdrop show={false} />)

    const backdrop = container.querySelector('.backdrop')
    expect(backdrop).not.toBeInTheDocument()
  })

  it('renders correctly when "show" is true', () => {
    const { container } = render(<Backdrop show={true} />)

    const backdrop = container.querySelector('.backdrop')

    expect(backdrop).toBeInTheDocument()
    expect(backdrop).toHaveClass('backdrop')
  })

  it('calls onClose when clicked', () => {
    const onCloseMock = vi.fn()
    const { container } = render(<Backdrop show={true} onClose={onCloseMock} />)

    const backdrop = container.querySelector('.backdrop')

    fireEvent.click(backdrop)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('unmounts after the duration timeout when toggled to false', () => {
    const duration = 300
    const { container, rerender } = render(<Backdrop show={true} duration={duration} />)

    expect(container.querySelector('.backdrop')).toBeInTheDocument()

    rerender(<Backdrop show={false} duration={duration} />)

    expect(container.querySelector('.backdrop')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(duration)
    })

    expect(container.querySelector('.backdrop')).not.toBeInTheDocument()
  })
})
