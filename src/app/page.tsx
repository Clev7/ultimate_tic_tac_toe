"use client";
import { JSX, useState } from "react";

import { Board } from "@/components/Board";
import {
  IBoard, 
  UtttBoard, 
  BoardState, 
  BoardPosition,
  BoardResult,
  Player} from "@/types";

function initBoard(): UtttBoard {
  const [R, C, r, c] = [3, 3, 3, 3];
  const INIT_VAL: string = "___";

  return Array.from({ length: R }, () =>
    Array.from({ length: C }, () =>
      Array.from({ length: r }, () => INIT_VAL)
    )
  );
}

function initBoardResults(): BoardResult[][] {
  const [R, C] = [3, 3];

  return Array.from({ length: R }, () => Array.from({ length: C }, () => BoardResult.UNFINISHED))
}

export default function Home() {
  const [utttBoard, setUtttBoard] = useState(initBoard());
  const [currentPlayer, setCurrentPlayer] = useState(Player.X);
  const [focusedBoard, setFocusedBoard] = useState([-1, -1] as BoardPosition);
  const [boardResults, setBoardResults] = useState(initBoardResults());

  const boardJSX: JSX.Element[] = utttBoard.map((boardArr: BoardState[], Row) => {
    return (
      <tr key={Row}>
        {boardArr.map((board: BoardState, Col) => {

          const boardProps: IBoard = {
            currentPlayer,
            setCurrentPlayer,
            utttBoard,
            setUtttBoard,
            focusedBoard,
            setFocusedBoard,
            boardResults,
            setBoardResults,
            Row: 2 - Row,
            Col
          };

          return (
            <td key={Col} className="board">
              <Board {...boardProps}/>
            </td>
          )
        })}
      </tr>
    )
  });

  return (
    <div id="home">
      <table id="ultimateBoard">
        <tbody>
          {boardJSX}
        </tbody>
      </table>
    </div>
  );
}
