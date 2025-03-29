"use client";

import { useState } from "react";
import { Board } from "@/components/Board";
import {
  UtttBoard, 
  BoardState, 
  BoardResult,
  Player
} from "@/types";

import { initBoard } from "@/utils/inits";
import { checkResult, computeUtttBoardResults } from "@/utils";

export default function Game() {
  const [utttBoard, setUtttBoard] = useState(initBoard());
  const [currentPlayer, setCurrentPlayer] = useState(Player.X);
  const [focusedBoard, setFocusedBoard] = useState([-1, -1]);
  const [message, setMessage] = useState("");

  function handleMakeMove(Row: number, Col: number, row: number, col: number) {
    // Should update the board
    // Should change the turn of the player
    setMessage(`Row = ${Row}, Col = ${Col}, row = ${row}, col = ${col}`)
    const [focusedRow, focusedCol] = focusedBoard;
    console.log(focusedBoard);

    if (focusedRow != -1 && focusedCol != -1
        && (focusedRow != Row || focusedCol != Col)
    ) {
      // console.log("Current board not in focus");
      console.log(`Focused board: Row = ${focusedRow} Col = ${focusedCol}`)
      setMessage("Curent board not in focus")
      return;
    }

    // Should be globally focused or the right board
    // Check if tile is empty
    if (utttBoard[Row][Col][row][col] !== "_") {
      ("Tile already occupied");
      return;
    }

    const updatedUtttBoard: UtttBoard = utttBoard.map((array_of_boards: BoardState[], curr_Row) => {
      if (curr_Row != Row) {
        return array_of_boards;
      }

      return array_of_boards.map((board: BoardState, curr_Col) => {
        if (curr_Col != Col) {
          return board;
        }

        return board.map((board_row: string, curr_row) => {
          if (curr_row != row) {
            return board_row;
          }

          const new_row: string =
            board_row.substring(0, col) +
            currentPlayer +
            board_row.substring(col + 1);

          return new_row;
        });
      });
    });

    setUtttBoard(updatedUtttBoard);

    const utttbResults = computeUtttBoardResults(updatedUtttBoard);

    const gameResult = checkResult(utttbResults);

    if (gameResult === BoardResult.TIE) {
      setMessage("The game is tied! Deadlock!");
      return;
    }

    if (gameResult !== BoardResult.UNFINISHED) {
      setMessage(`${gameResult} has won the whole game! Congratulations 👏👏👏`);
      return;
    }

    if (utttbResults[Row][Col] === BoardResult.TIE) {
      setMessage(`We have a tie in (${Row}, ${Col})`);
    } else if (utttbResults[Row][Col] !== BoardResult.UNFINISHED) {
      setMessage(`${utttbResults[Row][Col]} has won on board (${Row}, ${Col})`);
    }

    setCurrentPlayer(turn => (turn === Player.X ? Player.O : Player.X));
    setFocusedBoard(utttbResults[row][col] === BoardResult.UNFINISHED ? [row, col]: [-1, -1]);
  }

  return (
    <div id="home">
      <div id="message">
        {message}
      </div>
      <table id="ultimateBoard">
        <tbody>
          {utttBoard.map((boardArr: BoardState[], Row) => {
            return (
              <tr key={Row}>
                {boardArr.map((board: BoardState, Col) => {

                  return (
                    <td key={Col} className="board">
                      <Board
                        Row={Row}
                        Col={Col}
                        board={utttBoard[Row][Col]}
                        makeMove={handleMakeMove}
                      />
                    </td>
                  )
                })}
              </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  );
}
