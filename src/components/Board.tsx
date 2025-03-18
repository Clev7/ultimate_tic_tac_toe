import { Tile } from "./Tile";
import styles from "@/app/board.module.css";
import { IBoard } from "@/types";

export function Board(boardProps: IBoard) {

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
					<Tile key={col} borders={borderCol} row={2 - row} col={col} {...boardProps}>
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