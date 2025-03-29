"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-5xl tracking-tighter font-thin">
        Tic-Tac-Toe
      </h1>
      <TicTacToeBoard />
    </div>
  );
}

const TicTacToeBoard = () => {
  // Use the new Array syntax to make an array and use fill to fill it.
  const [board, setBoard] = useState(new Array(9).fill(null));

  const [gameOver, setGameOver] = useState(false);
  const [draw, SetDraw] = useState(null);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(null);
  const winningMoves = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 4, 5],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
  ];
  useEffect(() => {
    setTurn(Math.round(Math.random() + 1));
  }, []);

  const clearBoard = () => {
    setBoard(new Array(9).fill(null));
    setGameOver(false);
    setWinner(null);

    setTurn(Math.round(Math.random() + 1));
    SetDraw(null);
  };

  const checkIfDraw = () => {
    const checkedArray = [];

    for (const tile of board) {
      if (typeof tile === "string") {
        checkedArray.push(tile);
        console.log(checkedArray);
      }
    }
    if (checkedArray.length === 8 && !winner) {
      SetDraw(true);
      console.log("Theres a Draw");
      return true;
    }

    return false;
  };

  const checkIfWin = (board) => {
    const checkDraw = checkIfDraw();
    if (checkDraw) {
      return;
    }
    for (const winningMove of winningMoves) {
      const [a, b, c] = winningMove;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);

        return board[a];
      }
    }
    return null;
  };

  return (
    <div>
      <div className="grid overflow-hidden rounded-3xl grid-cols-3 max-w-4xl mx-auto w-fit mt-24 relative">
        {gameOver && (
          <section className="absolute w-full z-10 bg-gradient-to-br from-green-700 to bg-blue-700 h-full overflow-hidden grid place-content-center">
            <h1 className="text-7xl tracking-tighter">
              {" "}
              <span className="uppercase">{winner}</span> has Won
            </h1>
            <button
              onClick={() => {
                clearBoard();
              }}
              className="px-8 py-2 bg-black/40  border border-black/10 rounded-lg hover:bg-black/50 mt-8"
            >
              Play Again
            </button>
          </section>
        )}
        {draw && (
          <section className="absolute w-full z-10 bg-gradient-to-br from-indigo-700 via-red-500 to bg-red-700 h-full overflow-hidden grid place-content-center">
            <h1 className="text-5xl tracking-tighter text-center">
              {" "}
              The Game is A Draw
            </h1>
            <button
              onClick={() => {
                clearBoard();
              }}
              className="px-8 py-2 bg-black/40  border border-black/10 rounded-lg hover:bg-black/50 mt-8"
            >
              Play Again
            </button>
          </section>
        )}

        {board.map((item, index) => {
          return (
            <Tile
              setWinner={setWinner}
              checkIfWin={checkIfWin}
              board={board}
              key={index}
              number={index}
              value={board[index]}
              setBoard={setBoard}
              turn={turn && turn}
              setTurn={setTurn}
            />
          );
        })}
      </div>
    </div>
  );
};

const Tile = (props) => {
  //Sets the Selected Tile, Also Update Board with new tile
  const handleTileSelection = () => {
    // return if tile is filled
    if (props.value) return;

    // Updates the Board.
    props.setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[props.number] = props.turn === 1 ? "x" : "o";
      //Now check for a win using the updated board
      const winner = props.checkIfWin(newBoard);
      if (winner) {
        props.setWinner(winner);
      }

      return newBoard;
    });

    // Sets turn
    props.setTurn(props.turn === 1 ? 2 : 1);

    // Checks for Win
  };

  return (
    <div
      onClick={() => handleTileSelection()}
      className="border-b border-l  [&:nth-child(3n+1)]:border-l-0 [&:nth-last-child(-n+3)]:border-b-0  p-24 h-48 w-48 grid place-content-center transition-all duration-500 hover:bg-white/5
       "
    >
      <p className="text-7xl">{props.value ? props.value : ""}</p>
    </div>
  );
};
