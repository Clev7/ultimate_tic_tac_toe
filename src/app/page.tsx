"use client";
import { JSX, useState } from "react";

import { Board } from "@/components/Board";
import { IBoard, UtttBoard, BoardState, BoardPosition} from "@/types";

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
  const [focusedBoard, setFocusedBoard] = useState([-1, -1] as BoardPosition);
  const [isFinished, setIsFinished] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);

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
            isFinished,
            setIsFinished,
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
