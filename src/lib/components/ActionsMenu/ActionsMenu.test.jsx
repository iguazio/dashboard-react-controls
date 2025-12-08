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
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ActionsMenu from './ActionsMenu'

vi.mock('../../images/elipsis.svg?react', () => ({
  default: () => <div data-testid="ellipsis-icon" />
}))

vi.mock('../RoundedIcon/RoundedIcon', () => ({
  default: ({ children, onClick, id, tooltipText, className }) => (
    <button
      data-testid={id || 'rounded-icon'}
      className={className}
      onClick={onClick}
      title={tooltipText}
    >
      {children}
    </button>
  )
}))

vi.mock('../PopUpDialog/PopUpDialog', () => ({
  default: ({ children, className }) => (
    <div data-testid="popup-dialog" className={className}>
      {children}
    </div>
  )
}))

vi.mock('../../elements/ActionsMenuItem/ActionsMenuItem', () => ({
  default: ({ menuItem, dataItem }) => (
    <li data-testid={`menu-item-${menuItem.label}`} onClick={() => menuItem.onClick(dataItem)}>
      {menuItem.label}
    </li>
  )
}))

describe('ActionsMenu Component', () => {
  const mockMainAction = {
    label: 'Details',
    id: 'details',
    icon: <span>Icon</span>,
    onClick: vi.fn()
  }

  const mockQuickAction = {
    label: 'Quick Edit',
    id: 'quick-edit',
    icon: <span>Edit</span>,
    onClick: vi.fn(),
    hidden: false
  }

  const mockMenu = [[mockMainAction], [mockQuickAction]]

  const defaultProps = {
    dataItem: { id: 'item-1', name: 'Test Item' },
    menu: mockMenu,
    time: 500,
    withQuickActions: true
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders quick actions when withQuickActions is true', () => {
    render(<ActionsMenu {...defaultProps} />)

    const quickActionBtn = screen.getByTestId(`quick-link-${mockQuickAction.id}`)
    expect(quickActionBtn).toBeInTheDocument()

    fireEvent.click(quickActionBtn)
    expect(mockQuickAction.onClick).toHaveBeenCalledWith(defaultProps.dataItem)
  })

  it('does not render quick actions when withQuickActions is false', () => {
    render(<ActionsMenu {...defaultProps} withQuickActions={false} />)

    const quickActionBtn = screen.queryByTestId(`quick-link-${mockQuickAction.id}`)
    expect(quickActionBtn).not.toBeInTheDocument()
  })

  it('toggles the dropdown menu when clicking the ellipsis button', () => {
    render(<ActionsMenu {...defaultProps} />)

    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()

    const menuBtn = screen.getByTestId('actions-menu-button')
    fireEvent.click(menuBtn)

    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()

    fireEvent.click(menuBtn)
    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('closes the menu when clicking outside', () => {
    render(<ActionsMenu {...defaultProps} />)

    const menuBtn = screen.getByTestId('actions-menu-button')
    fireEvent.click(menuBtn)
    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()

    fireEvent.click(document.body)

    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('executes action from dropdown menu', () => {
    render(<ActionsMenu {...defaultProps} />)

    fireEvent.click(screen.getByTestId('actions-menu-button'))

    const menuItem = screen.getByTestId(`menu-item-${mockMainAction.label}`)
    fireEvent.click(menuItem)

    expect(mockMainAction.onClick).toHaveBeenCalledWith(defaultProps.dataItem)
  })

  it('closes menu on mouse out after specified time', () => {
    render(<ActionsMenu {...defaultProps} />)
    const container = screen.getByTestId('actions-menu-button').closest('.actions-menu__container')

    fireEvent.click(screen.getByTestId('actions-menu-button'))
    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()

    fireEvent.mouseOut(container)

    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(screen.queryByTestId('popup-dialog')).not.toBeInTheDocument()
  })

  it('cancels closing if mouse enters again before timeout', () => {
    render(<ActionsMenu {...defaultProps} />)
    const container = screen.getByTestId('actions-menu-button').closest('.actions-menu__container')

    fireEvent.click(screen.getByTestId('actions-menu-button'))
    fireEvent.mouseOut(container)

    act(() => {
      vi.advanceTimersByTime(200)
    })

    fireEvent.mouseOver(container)

    act(() => {
      vi.advanceTimersByTime(400)
    })

    expect(screen.getByTestId('popup-dialog')).toBeInTheDocument()
  })

  it('handles "menu" prop passed as a function', async () => {
    vi.useRealTimers()

    const menuFunction = vi.fn(item => {
      if (!item) return [[], []]
      return [[{ label: `${item.name}`, onClick: vi.fn() }], []]
    })

    render(<ActionsMenu {...defaultProps} menu={menuFunction} />)

    await waitFor(() => {
      expect(menuFunction).toHaveBeenCalledWith(defaultProps.dataItem, '')
    })

    fireEvent.click(screen.getByTestId('actions-menu-button'))

    expect(screen.getByText('Test Item')).toBeInTheDocument()
  })

  it('does not render "More actions" button if actionMenu is empty', () => {
    const emptyMenu = [[], [mockQuickAction]]

    render(<ActionsMenu {...defaultProps} menu={emptyMenu} />)

    expect(screen.queryByTestId('actions-menu-button')).not.toBeInTheDocument()

    expect(screen.getByTestId(`quick-link-${mockQuickAction.id}`)).toBeInTheDocument()
  })
})
