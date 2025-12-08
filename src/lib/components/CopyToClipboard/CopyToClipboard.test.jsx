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
import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest'
import CopyToClipboard from './CopyToClipboard'

import { setNotification } from '../../reducers/notificationReducer'
import { showErrorNotification } from '../../utils/notification.util'

const mockDispatch = vi.fn()
vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}))
vi.mock('../../reducers/notificationReducer', () => ({
  setNotification: vi.fn(payload => ({ type: 'SET_NOTIFICATION', payload }))
}))
vi.mock('../../utils/notification.util', () => ({
  showErrorNotification: vi.fn()
}))
vi.mock('../RoundedIcon/RoundedIcon', () => ({
  default: ({ children, onClick, disabled }) => (
    <button data-testid="rounded-icon" onClick={onClick} disabled={disabled}>
      {children}
    </button>
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
vi.mock('../TooltipTemplate/TextTooltipTemplate', () => ({
  default: ({ text }) => <span>{text}</span>
}))
vi.mock('../../images/copy-to-clipboard-icon.svg?react', () => ({
  default: () => <svg data-testid="copy-icon" />
}))

const originalClipboard = navigator.clipboard

describe('CopyToClipboard Component', () => {
  const defaultProps = {
    textToCopy: 'some text to copy',
    tooltipText: 'Click to copy'
  }

  beforeEach(() => {
    vi.clearAllMocks()

    const mockClipboard = {
      writeText: vi.fn().mockResolvedValue(true)
    }

    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      writable: true,
      configurable: true
    })
  })

  afterAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true
    })
  })

  it('renders default view (RoundedIcon) correctly', () => {
    render(<CopyToClipboard {...defaultProps} />)

    const button = screen.getByTestId('rounded-icon')
    expect(button).toBeInTheDocument()
    expect(screen.getByTestId('copy-icon')).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('renders custom view (children) correctly', () => {
    render(
      <CopyToClipboard {...defaultProps}>
        <span data-testid="custom-child">Copy Me</span>
      </CopyToClipboard>
    )

    expect(screen.getByTestId('custom-child')).toBeInTheDocument()
    expect(screen.getByTestId('tooltip')).toBeInTheDocument()
    expect(screen.queryByTestId('rounded-icon')).not.toBeInTheDocument()
  })

  it('copies text successfully and dispatches notification', async () => {
    render(<CopyToClipboard {...defaultProps} />)

    fireEvent.click(screen.getByTestId('rounded-icon'))

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('some text to copy')

    await waitFor(() => {
      expect(setNotification).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 200,
          message: 'Copied to clipboard successfully'
        })
      )

      expect(mockDispatch).toHaveBeenCalled()
    })
  })

  it('handles copy error correctly', async () => {
    const error = new Error('Clipboard failed')
    navigator.clipboard.writeText.mockRejectedValue(error)

    render(<CopyToClipboard {...defaultProps} />)

    fireEvent.click(screen.getByTestId('rounded-icon'))

    await waitFor(() => {
      expect(showErrorNotification).toHaveBeenCalledWith(
        mockDispatch,
        error,
        '',
        'Copy to clipboard failed'
      )
    })
  })

  it('disables the button when textToCopy is empty', () => {
    render(<CopyToClipboard {...defaultProps} textToCopy="" />)

    const button = screen.getByTestId('rounded-icon')
    expect(button).toBeDisabled()
  })

  it('disables the button when disabled prop is true', () => {
    render(<CopyToClipboard {...defaultProps} disabled={true} />)

    const button = screen.getByTestId('rounded-icon')
    expect(button).toBeDisabled()
  })
})
