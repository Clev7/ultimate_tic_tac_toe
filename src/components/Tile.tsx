import styles from "@/app/tile.module.css";
import { BoardPosition, BoardState, ITile } from "@/types";

function handleClick(tileProps: ITile) {
  let {
    currentPlayer,
    setCurrentPlayer,
    utttBoard,
    setUtttBoard,
    focusedBoard,
    setFocusedBoard,
    Row,
    Col,
    row,
    col,
  } = tileProps

  console.log(`Row = ${Row}, Col = ${Col}, row = ${row}, col = ${col}`)

  const [focusedRow, focusedCol] = focusedBoard;

  if (focusedRow != -1 && focusedCol != -1 &&
      (focusedRow != Row || focusedCol != Col)) {
    console.log("Invalid click!");
    return;
  }

  setUtttBoard(
    // TODO: Maybe generalize this for some style points?
    utttBoard.map((array_of_boards: BoardState[], curr_Row) => {
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
          
          setCurrentPlayer(turn => (turn === "X" ? "O" : "X"));

          return new_row;
        });
      });
    })
  );
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
