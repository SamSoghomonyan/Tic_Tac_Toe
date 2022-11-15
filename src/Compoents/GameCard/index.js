import React from "react";

const GameCard = ({ handleValue, id, value }) => {
  return (
    <div>
      <div onClick={() => handleValue(id)} className="gameCard">
        <h1 className="value">{value}</h1>
      </div>
      {/* <div onClick={() => handleValue(id)} className="gameCard">
        <h1 className="value">{value}</h1>
      </div> */}
    </div>
  );
};

export default GameCard;
