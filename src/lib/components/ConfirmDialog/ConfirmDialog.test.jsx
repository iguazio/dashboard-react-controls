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
import ConfirmDialog from './ConfirmDialog'

vi.mock('./confirmDialog.scss', () => ({}))
vi.mock('../../types', () => ({
  CONFIRM_DIALOG_CANCEL_BUTTON: () => null,
  CONFIRM_DIALOG_MESSAGE: () => null,
  CONFIRM_DIALOG_SUBMIT_BUTTON: () => null
}))
vi.mock('../Button/Button', () => ({
  default: ({ label, onClick, className, disabled }) => (
    <button
      data-testid={`btn-${label}`}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}))
vi.mock('../PopUpDialog/PopUpDialog', () => ({
  default: ({ children, headerText, closePopUp, className }) => (
    <div data-testid="popup-dialog" className={className}>
      <div data-testid="popup-header">{headerText}</div>
      <button data-testid="popup-close-btn" onClick={closePopUp}>
        X
      </button>
      {children}
    </div>
  )
}))

describe('ConfirmDialog Component', () => {
  const mockOnResolve = vi.fn()
  const mockClosePopUp = vi.fn()
  const mockConfirmHandler = vi.fn()
  const mockCancelHandler = vi.fn()

  const defaultProps = {
    isOpen: true,
    header: 'Confirm Action',
    message: 'Are you sure?',
    onResolve: mockOnResolve,
    closePopUp: mockClosePopUp,
    confirmButton: {
      label: 'Yes',
      variant: 'primary',
      handler: mockConfirmHandler,
      disabled: false
    },
    cancelButton: {
      label: 'No',
      variant: 'secondary',
      handler: mockCancelHandler,
      disabled: false
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('does not render when isOpen is false', () => {
    render(<ConfirmDialog {...defaultProps} isOpen={false} />)

    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('renders correctly when isOpen is true', () => {
    render(<ConfirmDialog {...defaultProps} />)

    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()
    expect(screen.getByTestId('popup-header')).toHaveTextContent('Confirm Action')
    expect(screen.getByText('Are you sure?')).toBeInTheDocument()

    expect(screen.getByTestId('btn-Yes')).toBeInTheDocument()
    expect(screen.getByTestId('btn-No')).toBeInTheDocument()
  })

  it('renders custom children content', () => {
    render(
      <ConfirmDialog {...defaultProps}>
        <div data-testid="custom-content">Custom Body</div>
      </ConfirmDialog>
    )

    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
    expect(screen.getByText('Custom Body').parentElement).toHaveClass('confirm-dialog__body')
  })

  it('handles Confirm button click: calls onResolve AND confirm handler', () => {
    render(<ConfirmDialog {...defaultProps} />)

    const confirmBtn = screen.getByTestId('btn-Yes')
    fireEvent.click(confirmBtn)

    expect(mockOnResolve).toHaveBeenCalledTimes(1)
    expect(mockConfirmHandler).toHaveBeenCalledTimes(1)
  })

  it('handles Cancel button click: calls onResolve AND cancel handler', () => {
    render(<ConfirmDialog {...defaultProps} />)

    const cancelBtn = screen.getByTestId('btn-No')
    fireEvent.click(cancelBtn)

    expect(mockOnResolve).toHaveBeenCalledTimes(1)
    expect(mockCancelHandler).toHaveBeenCalledTimes(1)
  })

  it('handles PopUp close event (X button): calls onResolve AND closePopUp', () => {
    render(<ConfirmDialog {...defaultProps} />)

    const closeBtn = screen.getByTestId('popup-close-btn')
    fireEvent.click(closeBtn)

    expect(mockOnResolve).toHaveBeenCalledTimes(1)
    expect(mockClosePopUp).toHaveBeenCalledTimes(1)
  })

  it('applies correct class when messageOnly is true', () => {
    render(<ConfirmDialog {...defaultProps} messageOnly={true} />)

    const messageDiv = screen.getByText('Are you sure?')
    expect(messageDiv).toHaveClass('confirm-dialog__message')
    expect(messageDiv).toHaveClass('confirm-dialog__message-only')
  })

  it('does not crash if buttons do not have handlers', () => {
    const propsWithoutHandlers = {
      ...defaultProps,
      confirmButton: { label: 'Yes' },
      cancelButton: { label: 'No' }
    }

    render(<ConfirmDialog {...propsWithoutHandlers} />)

    fireEvent.click(screen.getByTestId('btn-Yes'))
    expect(mockOnResolve).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByTestId('btn-No'))
    expect(mockOnResolve).toHaveBeenCalledTimes(2)
  })

  it('renders correctly without a cancel button', () => {
    render(<ConfirmDialog {...defaultProps} cancelButton={null} />)

    expect(screen.getByTestId('btn-Yes')).toBeInTheDocument()
    expect(screen.queryByTestId('btn-No')).not.toBeInTheDocument()
  })
})
