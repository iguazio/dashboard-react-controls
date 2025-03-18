import { useRef, useCallback } from "react";
const useDebounce = () => {
  const timeout = useRef(null);
  const lastValue = useRef(null);
  const lastResult = useRef(null);
  return useCallback((validate, time) => {
    return (value) => {
      return new Promise((resolve) => {
        if (timeout.current) {
          timeout.current();
        }
        if (value !== lastValue.current) {
          const timerId = setTimeout(() => {
            lastValue.current = value;
            lastResult.current = validate(value);
            resolve(lastResult.current);
          }, time);
          timeout.current = () => {
            clearTimeout(timerId);
            resolve(true);
          };
        } else {
          resolve(lastResult.current);
        }
      });
    };
  }, []);
};
export {
  useDebounce
};
//# sourceMappingURL=useDebounce.hook.mjs.map
