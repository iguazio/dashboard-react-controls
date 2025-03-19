"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _SelectOption = _interopRequireDefault(require("./SelectOption"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
Copyright 2022 Iguazio Systems Ltd.
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

const renderComponent = props => (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectOption.default, {
  ...props
}));
jest.mock('../../images/checkbox-unchecked.svg', () => ({
  ReactComponent: 'unchecked-icon'
}));
jest.mock('../../images/checkbox-checked.svg', () => ({
  ReactComponent: 'unchecked-icon'
}));
describe('SelectOption component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      item: {
        label: 'Test1',
        id: 'test1',
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: "icon"
        }),
        subLabel: 'Test1'
      },
      selectType: ''
    };
    wrapper = renderComponent(props);
  });
  afterEach(_react2.cleanup);
  it('renders without crashing', () => {
    expect(wrapper.queryByTestId('select-option')).not.toBeNull();
  });
  it('should display checkbox inside option if props selectType is "checkbox"', () => {
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectOption.default, {
      item: {
        label: 'Test1',
        id: 'test1'
      },
      selectType: "checkbox",
      selectedId: "test1"
    }));
    expect(wrapper.queryByTestId('select-checkbox')).not.toBeNull();
  });
  it('should display select icon if it exists in the props "item"', () => {
    expect(wrapper.getByTestId('select-icon')).not.toBeNull();
  });
  it('should won\'t call onClick callback if props disable set to "true"', () => {
    const mockCLick = jest.fn();
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectOption.default, {
      item: {
        label: 'Test1',
        id: 'test1'
      },
      onCLick: mockCLick,
      selectType: "test1",
      disabled: true
    }));
    const selectOption = wrapper.getByTestId('select-option');
    _react2.fireEvent.click(selectOption);
    expect(mockCLick).toHaveBeenCalledTimes(0);
  });
  it('should display subLabel if it exists in props item', () => {
    expect(wrapper.queryByTestId('tooltip-wrapper')).not.toBeNull();
  });
  it('should add class "disabled" to SelectOption if props disabled set to "true"', () => {
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectOption.default, {
      item: {
        label: 'Test1',
        id: 'test1'
      },
      selectType: "test1",
      disabled: true
    }));
    const selectOption = wrapper.getByTestId('select-option');
    expect(selectOption.className).toMatch('disabled');
  });
});