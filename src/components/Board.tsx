import { Tile } from "./Tile";
import styles from "@/app/board.module.css";
import { BoardProps } from "@/types";

export function Board(boardProps: BoardProps) {
	const ordersProp = [
		["br bb", "bl bb br", "bl bb"],
		["bt br bb", "br bl bt bb", "bt bb bl"],
		["bt br", "bl bt br", "bl bt"]
	];

  let {Row, Col, makeMove} = boardProps;

  // Should know its Row, Col, row, col
  function handleClick(row: number, col: number) {
    makeMove(Row, Col, row, col);
  }

	return (
		<table className={styles.board}>
			<tbody>
        {ordersProp.map((borderRow: string[], row) => {
          let { board} = boardProps;

          return (
            <tr key={row}>
              {borderRow.map((borderCol: string, col) => (
                // 2 - row to orient it like
                // a cartesian graph
                <Tile 
                  key={col} 
                  onClick={() => handleClick(row, col)} 
                  className={borderCol}
                  {...boardProps}>
                  {board[row][col]}
                </Tile>
              ))}
            </tr>
          )
        })}

			</tbody>
		</table>
	)
}
