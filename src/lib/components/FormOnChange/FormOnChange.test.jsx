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
import { Form, Field } from 'react-final-form'
import FormOnChange from './FormOnChange'

describe('FormOnChange Component', () => {
  const renderWithForm = (name, handler, initialValues = {}) => {
    return render(
      <Form onSubmit={() => {}} initialValues={initialValues}>
        {() => (
          <>
            <Field name={name} component="input" data-testid="test-input" />
            <FormOnChange name={name} handler={handler} />
          </>
        )}
      </Form>
    )
  }

  it('does not call handler on initial render', () => {
    const handler = vi.fn()
    renderWithForm('testField', handler, { testField: 'initial' })

    expect(handler).not.toHaveBeenCalled()
  })

  it('calls handler with new and previous values when input changes', () => {
    const handler = vi.fn()
    renderWithForm('testField', handler)

    const input = screen.getByTestId('test-input')

    fireEvent.change(input, { target: { value: 'First' } })

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenLastCalledWith('First', '')

    fireEvent.change(input, { target: { value: 'Second' } })

    expect(handler).toHaveBeenCalledTimes(2)
    expect(handler).toHaveBeenLastCalledWith('Second', 'First')
  })

  it('handles initial values correctly', () => {
    const handler = vi.fn()
    renderWithForm('testField', handler, { testField: 'Start' })

    const input = screen.getByTestId('test-input')

    fireEvent.change(input, { target: { value: 'End' } })

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith('End', 'Start')
  })
})
