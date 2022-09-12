"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDetectOutsideClick = void 0;

var _react = require("react");

/**
 * Hook for handling closing when clicking outside of an element
 * @function useDetectOutsideClick
 * @param {React.node} ref
 * @param {function} handler A callback function to use on outside click
 */
var useDetectOutsideClick = function useDetectOutsideClick(ref, handler) {
  (0, _react.useEffect)(function () {
    var onClick = function onClick(e) {
      e.stopPropagation(); // If the active element exists and is clicked outside of

      if (ref.current !== null && !ref.current.contains(e.target)) {
        handler(e);
      }
    }; // If the item is active (ie open) then listen for clicks outside


    window.addEventListener('click', onClick);
    return function () {
      window.removeEventListener('click', onClick);
    };
  }, [ref, handler]);
};

exports.useDetectOutsideClick = useDetectOutsideClick;