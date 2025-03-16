import { Tile } from "./Tile";
import styles from "@/app/board.module.css";
import { BoardWrapper } from "@/types";

export function Board({ Row, Col, utttb: utttbObj, playerState}: BoardWrapper) {

	let { utttBoard: utttb } = utttbObj;

	const ordersProp = [
		["br bb", "bl bb br", "bl bb"],
		["bt br bb", "br bl bt bb", "bt bb bl"],
		["bt br", "bl bt br", "bl bt"]
	]

	let boardJSX = ordersProp.map((borderRow) => {
		return (
			<tr>
				{borderRow.map((borderCol) => {
					<Tile borders={borderCol} playerState={playerState}/>
				})}
			</tr>
		)
	})

	return (
		<table className={styles.board}>
			<tr>
				<Tile borders="br bb" playerState={playerState}>{utttb[0][0]}</Tile>
				<Tile borders="bl bb br" playerState={playerState}>{utttb[0][1]}</Tile>
				<Tile borders="bl bb" playerState={playerState}>{utttb[0][2]}</Tile>
			</tr>
			<tr>
				<Tile borders="bt br bb" playerState={playerState}>{utttb[1][0]}</Tile>
				<Tile borders="br bl bt bb" playerState={playerState}>{utttb[1][1]}</Tile>
				<Tile borders="bt bb bl" playerState={playerState}>{utttb[1][2]}</Tile>
			</tr>
			<tr>
				<Tile borders="bt br" playerState={playerState}>{utttb[2][0]}</Tile>
				<Tile borders="bl bt br" playerState={playerState}>{utttb[2][1]}</Tile>
				<Tile borders="bl bt" playerState={playerState}>{utttb[2][2]}</Tile>
			</tr>
		</table>
	)
}