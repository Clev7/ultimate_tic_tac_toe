import { Tile } from "./Tile";
import styles from "@/app/board.module.css";

export type BoardState = string[];

interface BoardWrapper {
	contents: BoardState
}

export function Board({ contents }: BoardWrapper) {
	return (
			<table className={styles.board}>
				<tr>
					<Tile borders="br bb">{contents[0][0]}</Tile>
					<Tile borders="bl bb br">{contents[0][1]}</Tile>
					<Tile borders="bl bb">{contents[0][2]}</Tile>
				</tr>
				<tr>
					<Tile borders="bt br bb">{contents[1][0]}</Tile>
					<Tile borders="br bl bt bb">{contents[1][1]}</Tile>
					<Tile borders="bt bb bl">{contents[1][2]}</Tile>
				</tr>
				<tr>
					<Tile borders="bt br">{contents[2][0]}</Tile>
					<Tile borders="bl bt br">{contents[2][1]}</Tile>
					<Tile borders="bl bt">{contents[2][2]}</Tile>
				</tr>
			</table>
	)
}