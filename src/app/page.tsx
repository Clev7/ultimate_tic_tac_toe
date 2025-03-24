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



export default function Home() {
  const [utttBoard, setUtttBoard] = useState(initBoard());
  const [currentPlayer, setCurrentPlayer] = useState(Player.X);
  const [focusedBoard, setFocusedBoard] = useState([-1, -1] as BoardPosition);

  const boardJSX: JSX.Element[] = utttBoard.map((boardArr: BoardState[], Row) => {
    return (
      <tr key={Row}>
        {boardArr.map((board: BoardState, Col) => {

          const boardProps: IBoard = {
            currentPlayer,
            utttBoard,
            focusedBoard,
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
