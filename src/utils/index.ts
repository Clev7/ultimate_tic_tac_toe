import { BoardState, BoardResult, Player } from "@/types";

// Can check either a single board or the whole UtttBoard
export function checkWin(board: BoardState | BoardResult[][], currentPlayer: Player): boolean {
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