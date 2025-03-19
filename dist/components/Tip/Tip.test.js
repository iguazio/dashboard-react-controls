"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Tip = _interopRequireDefault(require("./Tip"));
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

jest.mock('../../images/question-mark.svg', () => ({
  ReactComponent: 'Question-icon'
}));
const renderComponent = props => (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tip.default, {
  ...props
}));
describe('Tip component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      text: 'Show tip component'
    };
    wrapper = renderComponent(props);
  });
  it('renders without crashing', () => {
    expect(wrapper.queryByTestId('tip')).not.toBeNull();
  });
  it('should display tip text if mouse over the icon', () => {
    const tipIcon = wrapper.getByTestId('tip-icon');
    _react2.fireEvent.mouseEnter(tipIcon);
    expect(wrapper.queryByTestId('tip-text')).not.toBeNull();
  });
  it('should hide tip text if mouse leave the icon', async () => {
    const tipIcon = wrapper.getByTestId('tip-icon');
    _react2.fireEvent.mouseEnter(tipIcon);
    expect(wrapper.queryByTestId('tip-text')).not.toBeNull();
    _react2.fireEvent.mouseLeave(tipIcon);
    const tipText = await (0, _react2.waitForElementToBeRemoved)(() => wrapper.queryByTestId('tip-text'));
    expect(tipText).toBeUndefined();
  });
  it('should add the class "tip_big" if the length of the prop text is more than 40 characters', () => {
    wrapper.rerender(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tip.default, {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    }));
    const tipIcon = wrapper.getByTestId('tip-icon');
    _react2.fireEvent.mouseEnter(tipIcon);
    const tipText = wrapper.getByTestId('tip-text');
    expect(tipText.className).toMatch('tip_big');
  });
});