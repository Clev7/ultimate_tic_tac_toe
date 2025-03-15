import { Board } from "@/components/Board";
import { BoardState } from "../components/Board";
import { useState } from "react";

type UtttBoard = BoardState[][];

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


  return (
    <div id="home">
      <table id="ultimateBoard">
        <tr>
          <td className="board">
            <Board contents={utttBoard[0][0]} />
          </td>
          <td className="board">
            <Board contents={utttBoard[0][1]}/>
          </td>
          <td className="board">
            <Board contents={utttBoard[0][2]}/>
          </td>
        </tr>
        <tr>
          <td className="board">
            <Board contents={utttBoard[1][0]}/>
          </td>
          <td className="board">
            <Board contents={utttBoard[1][1]}/>
          </td>
          <td className="board">
            <Board contents={utttBoard[1][2]}/>
          </td>
        </tr>
        <tr>
          <td className="board">
            <Board contents={utttBoard[2][0]}/>
          </td>
          <td className="board">
            <Board contents={utttBoard[2][1]}/>
          </td>
          <td className="board">
            <Board contents={utttBoard[2][2]}/>
          </td>
        </tr>
      </table>
    </div>
  );
}
