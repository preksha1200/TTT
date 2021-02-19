import React, { useState } from 'react';
import SquareComponent from './squarecomponent';
const initialState=["", "", "", "", "", "", "", "", ""];


function App() {
  const [gameState, updateGameState] = useState(initialState);

  const [isXChance, updateIsXChance] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "0";
    updateGameState(strings);
    updateIsXChance(!isXChance);

  }

  return (
    <div className="app-header">
      <p className="heading-text">Tic Tac Toe</p>
      <div className= "row jc-center"> 
        <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClicked(0)} />
        <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClicked(1)} />
        <SquareComponent className="b-bottom" state={gameState[2]} onClick={() => onSquareClicked(2)} />
      </div>
      <div className= "row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClicked(3)} />
        <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClicked(4)} />
        <SquareComponent className="b-bottom" state={gameState[5]} onClick={() => onSquareClicked(5)} />
      </div>
      <div className= "row jc-center">
        <SquareComponent className="b-right" state={gameState[6]} onClick={() => onSquareClicked(6)} />
        <SquareComponent className="b-right" state={gameState[7]} onClick={() => onSquareClicked(7)} />
        <SquareComponent state={gameState[8]} onClick={() => onSquareClicked(8)} />
      </div>
      <button> Reset </button>
    </div>
  );
}

export default App;
