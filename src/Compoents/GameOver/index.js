import React from "react";

const GameOver = ({ value }) => {
  return (
    <div className="gameOver">
      <h1 className="gameOverValue">You Win {value}</h1>
    </div>
  );
};

export default GameOver;
