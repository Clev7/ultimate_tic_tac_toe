import { Player } from "@/app/page";
import styles from "@/app/tile.module.css";
import { ReactNode } from "react";

interface borderObj {
	borders: string,
	children: ReactNode,
	playerState: Player
}

export function Tile({ borders, children, playerState}: borderObj) {

	return (
		<td className={styles.td + " " + borders}>
			<div>
			</div>
		</td>
	)
}