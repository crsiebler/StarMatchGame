"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlayNumber = props => /*#__PURE__*/_react.default.createElement("button", {
  className: "number",
  style: {
    backgroundColor: _colors.default[props.status]
  },
  onClick: () => props.onClick(props.number, props.status)
}, props.number);

var _default = PlayNumber;
exports.default = _default;