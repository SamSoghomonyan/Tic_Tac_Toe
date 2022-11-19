import React, { useState, useEffect } from "react";
import GameCard from "../GameCard";
import GameOver from "../GameOver";

const gameArray = [
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
  { id: 9, value: "" },
];

const combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;
const Game = () => {
  const [gameCard, setGameCard] = useState(gameArray);
  const [value, setValue] = useState("X");
  const [check, setCheck] = useState(false);
  const [draw, setDraw] = useState(false);
  const [count, setCount] = useState(0);
  const gameAgain = () => {
    gameArray.map((item) => {
      item.value = "";
    });
    setGameCard(gameArray);
    setCheck(false);
    setValue("X");
  };
  useEffect(() => {
    setTimeout(() => {
      if (count === 9) {
        console.log("hello uys :>> ");
        gameArray.map((item) => {
          item.value = "";
        });
        setGameCard(gameArray);
        setCheck(false);
        setValue("X");
      }
    }, 1000);
    console.log("hello :>> ");
  }, [count]);
  useEffect(() => {
    let arrayCount = 0;
    gameCard.map((item) => {
      if (item.value) {
        arrayCount += 1;
      }
    });
    setCount(arrayCount);
  }, [gameCard]);
  console.log("count drsi :>> ", count);
  const gameCarde = (valueChange) => {
    combination.forEach((item) => {
      item.forEach((item2) => {
        if (gameArray[item2].value) {
          let over = item.every(
            (item1) => gameArray[item1].value === valueChange
          );
          if (over) {
            setCheck(true);
            setValue(valueChange);
          }
        }
      });
    });
  };
  const handleValue = (id) => {
    setGameCard((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          if (value === "X") {
            setValue("O");
          } else {
            setValue("X");
          }
          item.value = value;
          gameCarde(value);
        }
        return item;
      });
    });
  };
  return (
    <div className="globalCantainer">
      <div className="containerButton">
        <button onClick={gameAgain} className="button">
          Play Again
        </button>
      </div>
      <div className="Game">
        {check ? (
          <GameOver value={value} />
        ) : (
          <div className="Game">
            {gameCard.map((item) => {
              return (
                <GameCard key={item.id} handleValue={handleValue} {...item} />
              );
            })}
          </div>
        )}
      </div>
      {check ? (
        ""
      ) : (
        <div className="tictac">
          <h1 className={value === "X" ? "order" : ""}>X</h1>
          <h1 className={value === "O" ? "order" : ""}>O</h1>
        </div>
      )}
    </div>
  );
};

export default Game;
