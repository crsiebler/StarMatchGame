"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mathUtils = _interopRequireDefault(require("../math-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StarsDisplay = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _mathUtils.default.range(1, props.count).map(starId => /*#__PURE__*/_react.default.createElement("div", {
  key: starId,
  className: "star"
})));

var _default = StarsDisplay;
exports.default = _default;