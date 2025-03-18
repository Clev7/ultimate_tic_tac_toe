import styles from "@/app/tile.module.css";
import { BoardState, ITile } from "@/types";

export function Tile({
  borders,
  children,
  currentPlayer,
  setCurrentPlayer,
  utttBoard,
  setUtttBoard,
  Row,
  Col,
  row,
  col,
}: ITile) {
  return (
    <td
      className={styles.td + " " + borders}
      onClick={(event) => {
        console.log(`clicked at Row = ${Row} and Col = ${Col} `);
        console.log(`as well as on row = ${row} and col = ${col}`);
        // setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        setUtttBoard(
          utttBoard.map((array_of_boards: BoardState[], curr_Row) => {
            if (curr_Row != Row) {
              return array_of_boards;
            }

            return array_of_boards.map((board: BoardState, curr_Col) => {
              if (curr_Col != Col) {
                return board;
              }

              return board.map((board_row: string, curr_row) => {
                // You need to map it back
                if (curr_row != 2 -row) {
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
      }}
    >
      <div>{children}</div>
    </td>
  );
}
