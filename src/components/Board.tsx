import { Tile } from "./Tile";
import styles from "@/app/board.module.css";
import { Player, UtttBoardType} from "@/app/page";

export type BoardState = string[];

interface BoardWrapper {
	utttb: UtttBoardType,
	row: number,
	col: number,
	playerState: Player
}

export function Board({ row, col, utttb, playerState}: BoardWrapper) {

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