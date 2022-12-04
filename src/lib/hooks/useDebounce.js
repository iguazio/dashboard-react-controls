import { useRef } from 'react'

export const useDebounce = (validate, time) => {
  const timeout = useRef(null)
  const lastValue = useRef(null)
  const lastResult = useRef(null)

  return function (value) {
    return new Promise((resolve) => {
      if (timeout.current) {
        timeout.current()
      }

      if (value !== lastValue.current) {
        const timerId = setTimeout(() => {
          lastValue.current = value
          lastResult.current = validate(value)
          resolve(lastResult.current)
        }, time)

        timeout.current = () => {
          clearTimeout(timerId)
          resolve(true)
        }
      } else {
        resolve(lastResult.current)
      }
    })
  }
}
