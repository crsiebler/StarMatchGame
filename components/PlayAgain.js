"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlayAgain = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "game-done"
}, /*#__PURE__*/_react.default.createElement("div", {
  style: {
    color: props.gameStatus === 'lost' ? 'red' : 'green'
  },
  className: "message"
}, props.gameStatus === 'lost' ? 'Game Over' : 'Nice'), /*#__PURE__*/_react.default.createElement("button", {
  onClick: props.onClick
}, "Play Again"));

var _default = PlayAgain;
exports.default = _default;