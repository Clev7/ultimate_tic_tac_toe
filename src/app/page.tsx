"use client";
import { JSX, useState } from "react";

import { Board } from "@/components/Board";
import { IBoard, UtttBoard, BoardState} from "@/types";

function initBoard(): UtttBoard {
  const [R, C, r, c] = [3, 3, 3, 3];
  const INIT_VAL: string = "___";

  return Array.from({ length: R }, () =>
    Array.from({ length: C }, () =>
      Array.from({ length: r }, () => INIT_VAL)
    )
  );
}

export default function Home() {
  const [utttBoard, setUtttBoard] = useState(initBoard());
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const playerState = {
    currentPlayer,
    setCurrentPlayer
  };

  const boardJSX: JSX.Element[] = utttBoard.map((board_arr: BoardState[], Row) => {
    return (
      <tr>
        {board_arr.map((board: BoardState, Col) => {

          let boardProps: IBoard = {
            currentPlayer,
            setCurrentPlayer,
            utttBoard,
            setUtttBoard,
            Row,
            Col
          };

          return (
            <td className="board">
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
        {boardJSX}
      </table>
    </div>
  );
}
