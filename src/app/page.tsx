import { useState } from "react";

import { Board } from "@/components/Board";
import { UtttBoard, UtttBoardWrapper} from "@/types";

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
    let utttbObj: UtttBoardWrapper = {
      utttBoard,
      setUtttBoard
    };

    return (
      <tr>
        {board_arr.map((board, Col) => (
          <td className="board">
            <Board playerState={playerState} Row={Row} Col={Col} utttb={utttbObj} />
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
