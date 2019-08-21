import React from 'react';

const PlayAgain = props => (
  <div className="game-done">
    <div style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }} className="message">
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

export default PlayAgain;
