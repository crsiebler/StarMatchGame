"use strict";

var _react = _interopRequireDefault(require("react"));

var _App = _interopRequireDefault(require("./App"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', () => {
  it('renders correctly', () => {
    const tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_App.default, null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});