import { Board } from "@/components/Board";
import { BoardState, BoardResult, Player, UtttBoard } from "@/types";

export function computeUtttBoardResults(utttb: UtttBoard) {
  let res = [];

  for (let R = 0; R < utttb.length; R++) {
    let row = [];
    for (let C = 0; C < utttb.length; C++) {
      row.push(checkResult(utttb[R][C]));
    }

    res.push(row);
  }

  return res;
}

export function checkResult(board: BoardState | BoardResult[][]): BoardResult {
  if (checkResultHelper(board, Player.X)) {
    return BoardResult.XWIN;
  }

  if (checkResultHelper(board, Player.O)) {
    return BoardResult.OWIN;
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "_") {
        return BoardResult.UNFINISHED;
      }
    }
  }

  return BoardResult.TIE;
}

// Can check either a single board or the whole UtttBoard
function checkResultHelper(board: BoardState | BoardResult[][], currentPlayer: Player): boolean {
  let won = true;

  const row = 3;
  const col = 3;

  console.log(`currentPlayer = ${currentPlayer}`);
  for (let r = 0; r < row; r++) {
    won = true;
    for (let c = 0; c < col; c++) {
      console.log(`board[r][c] = ${board[r][c]}`);
      if (board[r][c] !== currentPlayer) {
        console.log("rip");
        won = false;
        break;
      } else {
        console.log("ope?");
      }
    }

    if (won) return true;
  }

  won = true;
  for (let c = 0; c < col; c++) {
    for (let r = 0; r < row; r++) {
      if (board[r][c] !== currentPlayer) {
        console.log("rip");
        won = false;
        break;
      } else {
        console.log("ope?");
      }
    }
  }

  if (won) return true;

  const diagLen = 3;
  won = true;
  for (let i = 0; i < diagLen; i++) {
    if (board[i][i] !== currentPlayer) {
      console.log("rip");
      won = false;
      break;
    } else {
      console.log("ope?");
    }
  }

  if (won) return true;

  const antiDiagLen = 3;
  won = true;
  for (let i = 0; i < antiDiagLen; i++) {
    if (board[2 - i][2 - i] !== currentPlayer) {
      won = false;
      break;
    } else {
      console.log("ope?");
    }
  }

  return false;
}

export function computeBoardResults(board: BoardState) {
}