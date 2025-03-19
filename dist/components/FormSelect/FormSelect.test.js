"use strict";

var _react = _interopRequireDefault(require("react"));
var _Select = _interopRequireDefault(require("./Select"));
var _react2 = require("@testing-library/react");
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

jest.mock('../../images/dropdown.svg', () => ({
  ReactComponent: 'caret-icon'
}));
const renderComponent = props => (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
  ...props
}));
describe('Select component', () => {
  let wrapper;
  const mockClick = jest.fn();
  beforeEach(() => {
    const props = {
      label: 'Select',
      floatingLabel: true,
      selectedId: 'test1',
      onClick: mockClick,
      options: [{
        label: 'Test1',
        id: 'test1',
        subLabel: 'test sub label'
      }]
    };
    wrapper = renderComponent(props);
  });
  afterEach(_react2.cleanup);
  it('renders without crashing', () => {
    expect(wrapper.queryByTestId('select')).not.toBeNull();
  });
  it('should show select body after click by select header', () => {
    const select = wrapper.getByTestId('select');
    _react2.fireEvent.click(select);
    expect(wrapper.queryByTestId('select-body')).not.toBeNull();
  });
  it('should hide the select body when scrolling', () => {
    const select = wrapper.getByTestId('select');
    _react2.fireEvent.click(select);
    expect(wrapper.queryByTestId('select-body')).not.toBeNull();
    _react2.fireEvent.scroll(window);
    expect(wrapper.queryByTestId('select-body')).toBeNull();
  });
  it('should call "onClick" callback with "test1"', () => {
    const select = wrapper.getByTestId('select');
    _react2.fireEvent.click(select);
    const selectOption = wrapper.getByTestId('select-option');
    _react2.fireEvent.click(selectOption);
    expect(mockClick).toHaveBeenCalledWith('test1');
  });
  it('should not close "selectBody" if click by disabled option', () => {
    const props = {
      options: [{
        label: 'Test1',
        id: 'test1'
      }],
      disabledOptions: ['test1']
    };
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
      ...props
    }));
    const select = wrapper.getByTestId('select');
    _react2.fireEvent.click(select);
    const selectOption = wrapper.getByTestId('select-option');
    _react2.fireEvent.click(selectOption);
    expect(wrapper.queryByTestId('select-body')).not.toBeNull();
  });
  it('should display selected option', () => {
    const select = wrapper.getByTestId('select');
    _react2.fireEvent.click(select);
    const selectOption = wrapper.getByTestId('select-option');
    _react2.fireEvent.click(selectOption);
    expect(mockClick).toHaveBeenCalledWith('test1');
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
      options: [{
        label: 'Test1',
        id: 'test1'
      }],
      selectedId: "test1"
    }));
    const selectedOption = wrapper.getByTestId('selected-option');
    expect(selectedOption.textContent).toEqual('Test1');
  });
  it('should add className "select__label_floating" to select label if props floatingLabel "true"', () => {
    expect(wrapper.getByTestId('select-label').className).toMatch('select__label_floating');
  });
  it('should not open select body if props disabled set to "true"', () => {
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
      options: [{
        label: 'Test1',
        id: 'test1'
      }],
      disabled: true
    }));
    const select = wrapper.getByTestId('select');
    _react2.fireEvent.click(select);
    expect(wrapper.queryByTestId('select-body')).toBeNull();
  });
  it('should display a "subLabel" if it exists in the option', () => {
    const subLabel = wrapper.queryByTestId('select-subLabel');
    expect(subLabel).not.toBeNull();
  });
  it('should call handler callback if it exists in the option', () => {
    const mockHandler = jest.fn();
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
      options: [{
        label: 'Test1',
        id: 'test1',
        handler: mockHandler
      }]
    }));
    const select = wrapper.getByTestId('select');
    _react2.fireEvent.click(select);
    const selectOption = wrapper.getByTestId('select-option');
    _react2.fireEvent.click(selectOption);
    expect(mockHandler).toHaveBeenCalled();
  });
});