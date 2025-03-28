import { Tile } from "./Tile";
import styles from "@/app/board.module.css";
import { BoardPosition, BoardProps } from "@/types";

export function Board({
	board,
	makeMove
}: BoardProps) {

	const ordersProp = [
		["br bb", "bl bb br", "bl bb"],
		["bt br bb", "br bl bt bb", "bt bb bl"],
		["bt br", "bl bt br", "bl bt"]
	]

	let boardJSX = ordersProp.map((borderRow: string[], row) => {
		let { Row, Col } = boardProps;
		let { utttBoard: utttb } = boardProps;

		return (
			<tr key={row}>
				{borderRow.map((borderCol: string, col) => (
					// 2 - row to orient it like
					// a cartesian graph
					<Tile 
						onClick={handleClick} 
						key={col} 
						className={borderCol}
						row={row} 
						col={col} 
						{...boardProps}>
						{utttb[Row][Col][row][col]}
					</Tile>
				))}
			</tr>
		)
	})

	return (
		<table className={styles.board}>
			<tbody>
				{boardJSX}
			</tbody>
		</table>
	)
}

// Should know its Row, Col, row, col
function handleClick([row, col]: BoardPosition) {
  makeMove(row, col);
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
    const updatedUtttBoard: UtttBoard = utttBoard.map((array_of_boards: BoardState[], curr_Row) => {
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
    });

    if (checkWin(updatedUtttBoard[Row][Col], currentPlayer)) {
      console.log(`${currentPlayer} won in board (${Row}, ${Col})`);
    }

    return updatedUtttBoard;
  }

  // Click is valid
  setUtttBoard(setUtttBoardFn);

  // See if board is full

    setBoardResults(bR => {
      const newbR: BoardResult[][] = bR.map((curr_row, r_idx) => curr_row.map((res, c_idx) => {
        if (r_idx === Row && c_idx === Col) {
          const { XWIN, OWIN } = BoardResult;

          // Essentially casting Player into BoardResult
          return currentPlayer === Player.X ? XWIN : OWIN;
        }
        
        return res;
      }));

      if (checkWin(newbR, currentPlayer)) {
        console.log(currentPlayer + " won!");
      }

      return newbR;
    });
    

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
