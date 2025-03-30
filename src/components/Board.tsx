import { Tile } from "./Tile";
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
		<table className="board">
			<tbody>
        {ordersProp.map((borderRow: string[], row) => {
          let { board, isFocused } = boardProps;

          return (
            <tr key={row}>
              {borderRow.map((borderCol: string, col) => (
                // 2 - row to orient it like
                // a cartesian graph
                <Tile 
                  key={col} 
                  onClick={() => handleClick(row, col)} 
                  className={borderCol + " " + (isFocused ? "tile-focused" : "tile")}
                  >
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
