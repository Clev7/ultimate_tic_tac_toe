import { Tile } from "./Tile";
import styles from "@/app/board.module.css";
import { IBoard } from "@/types";

export function Board(boardProps: IBoard) {

	const ordersProp = [
		["br bb", "bl bb br", "bl bb"],
		["bt br bb", "br bl bt bb", "bt bb bl"],
		["bt br", "bl bt br", "bl bt"]
	]

	let boardJSX = ordersProp.map((borderRow, row) => {
		let { Row, Col } = boardProps;
		let { utttBoard: utttb } = boardProps;

		return (
			<tr>
				{borderRow.map((borderCol, col) => (
					<Tile borders={borderCol} row={row} col={col} {...boardProps}>
						{utttb[Row][Col][row][col]}
					</Tile>
				))}
			</tr>
		)
	})

	return (
		<table className={styles.board}>
			{boardJSX}
		</table>
	)
}