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
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useBlocker } from 'react-router-dom'
import BlockerSpy from './BlockerSpy'

vi.mock('react-router-dom', () => ({
  useBlocker: vi.fn()
}))

describe('BlockerSpy', () => {
  it('calls setBlocker with the object returned by useBlocker hook', () => {
    const setBlockerMock = vi.fn()
    const shouldBlockMock = vi.fn()

    const mockBlockerData = {
      state: 'blocked',
      location: { pathname: '/somewhere' },
      proceed: vi.fn(),
      reset: vi.fn()
    }

    vi.mocked(useBlocker).mockReturnValue(mockBlockerData)

    render(<BlockerSpy setBlocker={setBlockerMock} shouldBlock={shouldBlockMock} />)

    expect(useBlocker).toHaveBeenCalledWith(shouldBlockMock)
    expect(setBlockerMock).toHaveBeenCalledTimes(1)
    expect(setBlockerMock).toHaveBeenCalledWith(mockBlockerData)
  })

  it('updates setBlocker when useBlocker result changes', () => {
    const setBlockerMock = vi.fn()
    const shouldBlockMock = vi.fn()

    const initialState = { state: 'unblocked' }
    vi.mocked(useBlocker).mockReturnValue(initialState)

    const { rerender } = render(
      <BlockerSpy setBlocker={setBlockerMock} shouldBlock={shouldBlockMock} />
    )

    expect(setBlockerMock).toHaveBeenLastCalledWith(initialState)

    const newState = { state: 'blocked' }
    vi.mocked(useBlocker).mockReturnValue(newState)

    rerender(<BlockerSpy setBlocker={setBlockerMock} shouldBlock={shouldBlockMock} />)

    expect(setBlockerMock).toHaveBeenLastCalledWith(newState)
    expect(setBlockerMock).toHaveBeenCalledTimes(2)
  })
})
