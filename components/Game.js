"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mathUtils = _interopRequireDefault(require("../math-utils"));

var _StarsDisplay = _interopRequireDefault(require("./StarsDisplay"));

var _PlayNumber = _interopRequireDefault(require("./PlayNumber"));

var _PlayAgain = _interopRequireDefault(require("./PlayAgain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Timer = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "timer"
}, "Time Remaining: ", props.time); // Custom Hook


const useGameState = () => {
  const [stars, setStars] = (0, _react.useState)(_mathUtils.default.random(1, 9));
  const [availableNums, setAvailableNums] = (0, _react.useState)(_mathUtils.default.range(1, 9));
  const [candidateNums, setCandidateNums] = (0, _react.useState)([]);
  const [secondsLeft, setSecondsLeft] = (0, _react.useState)(10);
  (0, _react.useEffect)(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timeId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timeId);
    }
  });

  const setGameState = newCandidateNums => {
    // Check if the candidate numbers are equal to the number of stars
    if (_mathUtils.default.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n));
      setStars(_mathUtils.default.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  };
};

const Game = props => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();
  const candidatesAreWrong = _mathUtils.default.sum(candidateNums) > stars;
  const gameIsWon = availableNums.length === 0;
  const gameIsLost = secondsLeft === 0;
  const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return 'used';
    } else if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    // Check if the selection is already used
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    const newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);
    setGameState(newCandidateNums);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "game"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "help"
  }, "Pick 1 or more numbers that sum to the number of stars"), /*#__PURE__*/_react.default.createElement("div", {
    className: "body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left"
  }, gameStatus !== 'active' ? /*#__PURE__*/_react.default.createElement(_PlayAgain.default, {
    onClick: props.startNewGame,
    gameStatus: gameStatus
  }) : /*#__PURE__*/_react.default.createElement(_StarsDisplay.default, {
    count: stars
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "right"
  }, _mathUtils.default.range(1, 9).map(number => /*#__PURE__*/_react.default.createElement(_PlayNumber.default, {
    key: number,
    status: numberStatus(number),
    number: number,
    onClick: onNumberClick
  })))), /*#__PURE__*/_react.default.createElement(Timer, {
    time: secondsLeft
  }));
};

var _default = Game;
exports.default = _default;