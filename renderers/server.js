"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverRenderer = serverRenderer;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _App = _interopRequireDefault(require("components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function serverRenderer() {
  const initialData = {
    appName: 'Reactful'
  };
  const pageData = {
    title: `Hello ${initialData.appName}`
  };
  return Promise.resolve({
    initialData,
    initialMarkup: _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_App.default, null)),
    pageData
  });
}