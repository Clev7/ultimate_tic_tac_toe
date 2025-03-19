import styles from "@/app/tile.module.css";
import { BoardPosition, BoardResult, BoardState, ITile, UtttBoard, Player} from "@/types";

// Can check either a single board or the whole UtttBoard
function checkWin(board: BoardState | BoardResult[][], row: number, col: number, currentPlayer: Player): boolean {
  let won = true;
  for (let r = 0; r < row; r++) {
    won = true;
    for (let c = 0; c < col; c++) {
      if (board[r][c] !== currentPlayer) {
        won = false;
        break;
      }
    }

    if (won) return true;
  }

  won = true;
  for (let c = 0; c < col; c++) {
    for (let r = 0; r < row; r++) {
      if (board[r][c] !== currentPlayer) {
        won = false;
      }
    }
  }

  if (won) return true;

  const diagLen = 3;
  won = true;
  for (let i = 0; i < diagLen; i++) {
    if (board[i][i] !== currentPlayer) {
      won = false;
      break;
    }
  }

  if (won) return true;

  const antiDiagLen = 3;
  won = true;
  for (let i = 0; i < antiDiagLen; i++) {
    if (board[2 - i][2 - i] !== currentPlayer) {
      won = false;
      break;
    }
  }

  return false;
}

function handleClick(tileProps: ITile) {
  let {
    currentPlayer,
    setCurrentPlayer,
    utttBoard,
    setUtttBoard,
    focusedBoard,
    setFocusedBoard,
    boardResults,
    setBoardResults,
    Row,
    Col,
    row,
    col,
  } = tileProps

  console.log(`Row = ${Row}, Col = ${Col}, row = ${row}, col = ${col}`)

  const [focusedRow, focusedCol] = focusedBoard;

  if (focusedRow != -1 && focusedCol != -1
      && (focusedRow != Row || focusedCol != Col)
  ) {
    console.log("Current board not in focus");
    console.log(`Focused board: Row = ${focusedRow} Col = ${focusedCol}`)
    return;
  }

  // Should be globally focused or the right board

  // Check if tile is empty
  if (utttBoard[Row][Col][row][col] !== "_") {
    console.log("Tile already occupied");
    return;
  }

  function setUtttBoardFn(): UtttBoard {
    // TODO: Maybe generalize this for some style points?
    return utttBoard.map((array_of_boards: BoardState[], curr_Row) => {
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
    })
  }


  // Click is valid
  setUtttBoard(setUtttBoardFn);

  // See if board is full


  if (checkWin(utttBoard[Row][Col], row, col, currentPlayer)) {
    setBoardResults(bR => bR.map((curr_row, r_idx) => curr_row.map((res, c_idx) => {
      if (r_idx === Row && c_idx === Col) {
        const { XWIN, OWIN } = BoardResult;

        // Essentially casting Player into BoardResult
        return currentPlayer === Player.X ? XWIN : OWIN;
      }
      
      return res;
    })));

    if (checkWin(boardResults, Row, Col, currentPlayer)) {
      console.log(currentPlayer + " won!");
    }
  }

  setCurrentPlayer(turn => (turn === Player.X ? Player.O : Player.X));

  setFocusedBoard(_ => {
    // Board is already played out
    if (boardResults[row][col] !== BoardResult.UNFINISHED) {
      return [-1, -1] as BoardPosition;
    }

    return [2 - row, col] as BoardPosition;
  });

  // Check if board is played out now
  let foundEmpty = true;
  for (let r = 0; r < utttBoard[Row][Col].length; r++) {
    for (let c = 0; c < utttBoard[Row][Col][r].length; c++) {
      if (utttBoard[Row][Col][r][c] === "_") {
        foundEmpty = true;
        break;
      }
    }

    if (foundEmpty) break;
  }

  if (!foundEmpty) {
    setBoardResults(bR => bR.map((curr_row, r_idx) => curr_row.map((res, c_idx) => {
      if (r_idx === Row && c_idx === Col) {
        return BoardResult.TIE;
      }

      return res;
    })));
  }
}

export function Tile(tileProps: ITile) {
  let {borders, children} = tileProps;
  return (
    <td
      className={styles.td + " " + borders}
      onClick={(_) => handleClick(tileProps)}
    >
      <div>{children}</div>
    </td>
  );
}
