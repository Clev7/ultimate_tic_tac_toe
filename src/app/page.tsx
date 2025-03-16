import { Board } from "@/components/Board";
import { BoardState } from "../components/Board";

import { Dispatch, SetStateAction, useState } from "react";
// import { JSX } from "react";

export type UtttBoard = BoardState[][];

export interface UtttBoardType {
  utttBoard: UtttBoard
  setUtttBoard: Dispatch<SetStateAction<UtttBoard>>
}

export interface Player {
  currentPlayer: string,
  setCurrentPlayer: Dispatch<SetStateAction<string>>
}

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

  utttBoard.map((board_arr, Row) => {
    return (
      <tr>
        {board_arr.map((board, Col) => (
          <td className="board">
            <Board playerState={playerState} row={Row} col={Col} utttb={utttBoard} />
          </td>
        ))}
      </tr>
    )
  });

  return (
    <div id="home">
      <table id="ultimateBoard">
        {utttBoard}
      </table>
    </div>
  );
}
