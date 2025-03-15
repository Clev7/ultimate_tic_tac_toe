import { Tile } from "./Tile";
import styles from "@/app/board.module.css";
import { useState } from "react";

export function Board() {
	return (
			<table className={styles.board}>
				<tr>
					<Tile borders="br bb" />
					<Tile borders="bl bb br"/>
					<Tile borders="bl bb"/>
				</tr>
				<tr>
					<Tile borders="bt br bb"/>
					<Tile borders="br bl bt bb"/>
					<Tile borders="bt bb bl"/>
				</tr>
				<tr>
					<Tile borders="bt br"/>
					<Tile borders="bl bt br"/>
					<Tile borders="bl bt"/>
				</tr>
			</table>
	)
}